import { DOMPurify } from "../serializer/dom";
import {
  IRootLevelDocument, RichElement, SERIALIZATION_REGISTRY, IReactifyExtraOptions, NULL_DOCUMENT, deserialize
} from "../serializer";
import { IText } from "../serializer/types/text";
import { DOMWindow } from "../serializer/dom";
import { TemplateArgs } from "../serializer/template-args";
import equals from "deep-equal";
import { IFeatureSupportOptions, IPostProcessingOptions, sanitize } from "../sanitizer";
import React from "react";

/**
 * Processes the initialization of a single node
 * @param node the node in questions
 * @param templateArgsContext the arg context we are currently in
 */
function processTemplateNodeInitialization(
  node: HTMLElement,
  templateArgsContext: any,
  templateArgsRootcontext: any,
) {
  const ifKey = node.dataset.if;
  if (ifKey) {
    const ifValue = templateArgsContext[ifKey];
    if (!ifValue) {
      node.parentElement.removeChild(node);
      return;
    }
  }

  // has a text handler
  const textKey = node.dataset.text;
  if (textKey) {
    const text: string = templateArgsContext[textKey] || templateArgsRootcontext[textKey];
    if (typeof text !== "string") {
      // we do not log because this will hit the server side
    } else {
      node.textContent = text;
    }
  }

  // set the thref key
  const threfKey = node.dataset.href;
  if (threfKey) {
    const thref: string = templateArgsContext[threfKey] || templateArgsRootcontext[threfKey];
    if (typeof thref !== "string") {
      // we do not log because this will hit the server side
    } else {
      node.setAttribute("href", thref);
    }
  }

  // has a HTML handler
  const htmlKey = node.dataset.html;
  if (htmlKey) {
    const html: string = templateArgsContext[htmlKey] || templateArgsRootcontext[htmlKey];

    if (typeof html !== "string") {
      // we do not log because this will hit the server side
    } else {
      node.innerHTML = html;
    }
  }
}


/**
 * Processes the intialization of a template, by processing
 * the child nodes of a given node
 * @param node the node we are working with
 * @param templateArgsContext the template args we are currently working with
 */
function processTemplateInitialization(
  node: HTMLElement,
  templateArgsContext: any,
  templateArgsRootContext: any,
) {
  // first we check if we have child nodes to loop
  node.hasChildNodes() && node.childNodes.forEach((childNode) => {
    // we consider it an html element
    const childNodeASHTMLElement = childNode as HTMLElement;

    // so the args we are working with, this is going to be
    // the context we will be working with
    let templateArgsNewContext = templateArgsContext;

    // cheap cheesy way to check if we are working with a HTML Element
    // that has a dataset in it, no need for fancy checks since we are only interested
    // in such elements and we can be sure we have an html element
    if (typeof childNodeASHTMLElement.dataset !== "undefined" && childNodeASHTMLElement.dataset) {

      // update the context for children
      const contextKey = childNodeASHTMLElement.dataset.context;
      if (contextKey) {
        templateArgsNewContext = templateArgsNewContext[contextKey];
      }

      // so now we got to see if we have a for loop
      const forEachKey = childNodeASHTMLElement.dataset.forEach;
      if (forEachKey) {
        const ifKey = childNodeASHTMLElement.dataset.if;
        const ifValue = ifKey && templateArgsNewContext[ifKey];

        if (ifKey && !ifValue) {
          node.parentElement.removeChild(node);
        } else {
          // and this is what we are looping for
          const forArgument = templateArgsNewContext[forEachKey];
          // we grab the next sibling so that we can properly repeat
          const nextSibling = childNodeASHTMLElement.nextSibling;

          // so we loop
          forArgument.forEach((forEachContext: any, index: number) => {
            // now we make a clone of what we are looping for
            const clone = childNodeASHTMLElement.cloneNode(true) as HTMLElement;
            // if we have a next sibling
            if (nextSibling) {
              // we insert before it
              childNodeASHTMLElement.parentElement.insertBefore(clone, nextSibling);
            } else {
              childNodeASHTMLElement.parentElement.appendChild(clone);
            }

            // and now we call for the initialization of this node itself
            processTemplateNodeInitialization(
              clone,
              forEachContext,
              templateArgsRootContext,
            );

            // if we don't expect children to be unhandled
            if (clone.hasChildNodes()) {
              // we handle them per clone result
              processTemplateInitialization(
                clone,
                forEachContext,
                templateArgsRootContext,
              );
            }
          });

          // now we can remove the original
          childNodeASHTMLElement.parentElement.removeChild(childNodeASHTMLElement);
        }
      } else {
        // otherwise if we have no for loop, we just process the node itself
        processTemplateNodeInitialization(
          childNodeASHTMLElement,
          templateArgsNewContext,
          templateArgsRootContext,
        );
      }
    }

    // and if we did not decide to leave the children of the node unhandled and
    // we have children
    if (childNodeASHTMLElement.hasChildNodes()) {
      // lets recurse into them for their processing
      processTemplateInitialization(
        childNodeASHTMLElement,
        templateArgsNewContext,
        templateArgsRootContext,
      );
    }
  });
}

/**
 * Same as render template but will provide
 * the div as a raw HTML result
 * 
 * this function does not sanitize!!!
 * 
 * @param template the template in question
 * @param args the arguments
 */
export function renderTemplateAsNode(
  template: string,
  args: any,
): HTMLDivElement {
  const cheapdiv = DOMWindow.document.createElement("div");
  cheapdiv.innerHTML = template;

  processTemplateInitialization(
    cheapdiv,
    args,
    args,
  );

  return cheapdiv;
}


/**
 * Performs a simple template rendering
 * from a string based HTML template based on the text specs
 * 
 * Note that this method does not support UI Handlers
 * it is used for producing a string by doing a simple pass
 * on a template
 * 
 * It also does not support dynamic styles
 * 
 * for proper templates with full blown functionality you should
 * use the renderTemplateDynamically method
 * 
 * @param template the template in question
 * @param args the arguments
 */
export function renderTemplate(
  options: IPostProcessingOptions,
  featureSupport: IFeatureSupportOptions,
  template: string,
  args: any,
): string {
  const sanitized = sanitize(options, featureSupport, template);

  return renderTemplateAsNode(sanitized, args).innerHTML;
}

/**
 * Compiles the template but it does as a react element in which
 * way it supports the whole range of the componentry, including
 * dynamic styles and UI handling
 * 
 * The property should be a template for this to be usable
 * 
 * eg. renderTemplateDynamically(deserialize(sanitize(...)), {...args})
 * 
 * note how this method differs from the renderTemplate method as it
 * takes a document instead
 * 
 * @param document the root level document
 * @param args the arguments to render the template with
 */
export function renderTemplateDynamically(
  document: IRootLevelDocument,
  args: TemplateArgs,
  options: IReactifyExtraOptions,
): React.ReactNode {
  if (document === NULL_DOCUMENT) {
    return null;
  }

  const toReturn = (
    <>
      {
        document.children.map((c, index) => {
          return SERIALIZATION_REGISTRY.REACTIFY[c.type || "text"]({
            asTemplate: true,
            active: true,
            element: c,
            key: index,
            templateArgs: args,
            selected: false,
            extraOptions: options,
            parent: document,
            tree: document,
          });
        })
      }
    </>
  );

  if (args && args.wrapper) {
    return args.wrapper(toReturn);
  }

  return toReturn;
}


// bit overkill but so be it
export const nodesThatRepresentLines = [
  "address",
  "blockquote",
  "body",
  "center",
  "div",
  "dir",
  "dl",
  "fieldset",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "table",
  "dd",
  "frameset",
  "li",
  "tbody",
  "tfoot",
  "thead",
  "tr",
  "html",
]
export function convertNodeToText(node: Node): string {
  if (node.nodeType === 3) {
    return node.textContent;
  }
  if (!node.childNodes || !node.childNodes.length) {
    return "";
  }
  return Array.from(node.childNodes).map((cnode, index) => {
    if (cnode.nodeType !== 3) {
      // we consider it an html element
      const childNodeASHTMLElement = cnode as HTMLElement;
      if (childNodeASHTMLElement.tagName && nodesThatRepresentLines.includes(childNodeASHTMLElement.tagName.toLowerCase())) {
        return convertNodeToText(cnode) + "\n";
      }
      return convertNodeToText(cnode);
    } else {
      return cnode.textContent;
    }
  }).join("");
}
