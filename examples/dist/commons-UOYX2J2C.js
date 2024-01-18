import {
  DOMWindow,
  NULL_DOCUMENT,
  SERIALIZATION_REGISTRY,
  __toESM,
  require_react
} from "/dist/commons-RQCAJOUS.js";

// ../renderer/index.tsx
var import_react = __toESM(require_react());
function processTemplateNodeInitialization(node, templateArgsContext, templateArgsRootcontext) {
  const ifKey = node.dataset.if;
  if (ifKey) {
    const ifValue = templateArgsContext[ifKey];
    if (!ifValue) {
      node.parentElement.removeChild(node);
      return;
    }
  }
  const textKey = node.dataset.text;
  if (textKey) {
    const text = templateArgsContext[textKey] || templateArgsRootcontext[textKey];
    if (typeof text !== "string") {
    } else {
      node.textContent = text;
    }
  }
  const threfKey = node.dataset.href;
  if (threfKey) {
    const thref = templateArgsContext[threfKey] || templateArgsRootcontext[threfKey];
    if (typeof thref !== "string") {
    } else {
      node.setAttribute("href", thref);
    }
  }
  const htmlKey = node.dataset.html;
  if (htmlKey) {
    const html = templateArgsContext[htmlKey] || templateArgsRootcontext[htmlKey];
    if (typeof html !== "string") {
    } else {
      node.innerHTML = html;
    }
  }
}
function processTemplateInitialization(node, templateArgsContext, templateArgsRootContext) {
  node.hasChildNodes() && node.childNodes.forEach((childNode) => {
    const childNodeASHTMLElement = childNode;
    let templateArgsNewContext = templateArgsContext;
    if (typeof childNodeASHTMLElement.dataset !== "undefined" && childNodeASHTMLElement.dataset) {
      const contextKey = childNodeASHTMLElement.dataset.context;
      if (contextKey) {
        templateArgsNewContext = templateArgsNewContext[contextKey];
      }
      const forEachKey = childNodeASHTMLElement.dataset.forEach;
      if (forEachKey) {
        const ifKey = childNodeASHTMLElement.dataset.if;
        const ifValue = ifKey && templateArgsNewContext[ifKey];
        if (ifKey && !ifValue) {
          node.parentElement.removeChild(node);
        } else {
          const forArgument = templateArgsNewContext[forEachKey];
          const nextSibling = childNodeASHTMLElement.nextSibling;
          forArgument.forEach((forEachContext, index) => {
            const clone = childNodeASHTMLElement.cloneNode(true);
            if (nextSibling) {
              childNodeASHTMLElement.parentElement.insertBefore(clone, nextSibling);
            } else {
              childNodeASHTMLElement.parentElement.appendChild(clone);
            }
            processTemplateNodeInitialization(
              clone,
              forEachContext,
              templateArgsRootContext
            );
            if (clone.hasChildNodes()) {
              processTemplateInitialization(
                clone,
                forEachContext,
                templateArgsRootContext
              );
            }
          });
          childNodeASHTMLElement.parentElement.removeChild(childNodeASHTMLElement);
        }
      } else {
        processTemplateNodeInitialization(
          childNodeASHTMLElement,
          templateArgsNewContext,
          templateArgsRootContext
        );
      }
    }
    if (childNodeASHTMLElement.hasChildNodes()) {
      processTemplateInitialization(
        childNodeASHTMLElement,
        templateArgsNewContext,
        templateArgsRootContext
      );
    }
  });
}
function renderTemplateAsNode(template, args) {
  const cheapdiv = DOMWindow.document.createElement("div");
  cheapdiv.innerHTML = template;
  processTemplateInitialization(
    cheapdiv,
    args,
    args
  );
  return cheapdiv;
}
function renderTemplateDontSanitize(template, args) {
  return renderTemplateAsNode(template, args).innerHTML;
}
function renderTemplateDynamically(document, args, options = {}) {
  if (document === NULL_DOCUMENT) {
    return null;
  }
  const toReturn = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, document.children.map((c, index) => {
    return SERIALIZATION_REGISTRY.REACTIFY[c.type || "text"]({
      asTemplate: true,
      active: true,
      element: c,
      key: index,
      templateArgs: args,
      selected: false,
      extraOptions: options,
      parent: document,
      tree: document
    });
  }));
  if (args && args.wrapper) {
    return args.wrapper(toReturn);
  }
  return toReturn;
}

export {
  renderTemplateDontSanitize,
  renderTemplateDynamically
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vcmVuZGVyZXIvaW5kZXgudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBET01QdXJpZnkgfSBmcm9tIFwiLi4vc2VyaWFsaXplci9kb21cIjtcbmltcG9ydCB7XG4gIElSb290TGV2ZWxEb2N1bWVudCwgUmljaEVsZW1lbnQsIFNFUklBTElaQVRJT05fUkVHSVNUUlksIElSZWFjdGlmeUV4dHJhT3B0aW9ucywgTlVMTF9ET0NVTUVOVCwgZGVzZXJpYWxpemVcbn0gZnJvbSBcIi4uL3NlcmlhbGl6ZXJcIjtcbmltcG9ydCB7IElUZXh0IH0gZnJvbSBcIi4uL3NlcmlhbGl6ZXIvdHlwZXMvdGV4dFwiO1xuaW1wb3J0IHsgRE9NV2luZG93IH0gZnJvbSBcIi4uL3NlcmlhbGl6ZXIvZG9tXCI7XG5pbXBvcnQgeyBUZW1wbGF0ZUFyZ3MgfSBmcm9tIFwiLi4vc2VyaWFsaXplci90ZW1wbGF0ZS1hcmdzXCI7XG5pbXBvcnQgeyBJRmVhdHVyZVN1cHBvcnRPcHRpb25zLCBJUG9zdFByb2Nlc3NpbmdPcHRpb25zLCBzYW5pdGl6ZSB9IGZyb20gXCIuLi9zYW5pdGl6ZXJcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLyoqXG4gKiBQcm9jZXNzZXMgdGhlIGluaXRpYWxpemF0aW9uIG9mIGEgc2luZ2xlIG5vZGVcbiAqIEBwYXJhbSBub2RlIHRoZSBub2RlIGluIHF1ZXN0aW9uc1xuICogQHBhcmFtIHRlbXBsYXRlQXJnc0NvbnRleHQgdGhlIGFyZyBjb250ZXh0IHdlIGFyZSBjdXJyZW50bHkgaW5cbiAqL1xuZnVuY3Rpb24gcHJvY2Vzc1RlbXBsYXRlTm9kZUluaXRpYWxpemF0aW9uKFxuICBub2RlOiBIVE1MRWxlbWVudCxcbiAgdGVtcGxhdGVBcmdzQ29udGV4dDogYW55LFxuICB0ZW1wbGF0ZUFyZ3NSb290Y29udGV4dDogYW55LFxuKSB7XG4gIGNvbnN0IGlmS2V5ID0gbm9kZS5kYXRhc2V0LmlmO1xuICBpZiAoaWZLZXkpIHtcbiAgICBjb25zdCBpZlZhbHVlID0gdGVtcGxhdGVBcmdzQ29udGV4dFtpZktleV07XG4gICAgaWYgKCFpZlZhbHVlKSB7XG4gICAgICBub2RlLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgLy8gaGFzIGEgdGV4dCBoYW5kbGVyXG4gIGNvbnN0IHRleHRLZXkgPSBub2RlLmRhdGFzZXQudGV4dDtcbiAgaWYgKHRleHRLZXkpIHtcbiAgICBjb25zdCB0ZXh0OiBzdHJpbmcgPSB0ZW1wbGF0ZUFyZ3NDb250ZXh0W3RleHRLZXldIHx8IHRlbXBsYXRlQXJnc1Jvb3Rjb250ZXh0W3RleHRLZXldO1xuICAgIGlmICh0eXBlb2YgdGV4dCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gd2UgZG8gbm90IGxvZyBiZWNhdXNlIHRoaXMgd2lsbCBoaXQgdGhlIHNlcnZlciBzaWRlXG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cbiAgfVxuXG4gIC8vIHNldCB0aGUgdGhyZWYga2V5XG4gIGNvbnN0IHRocmVmS2V5ID0gbm9kZS5kYXRhc2V0LmhyZWY7XG4gIGlmICh0aHJlZktleSkge1xuICAgIGNvbnN0IHRocmVmOiBzdHJpbmcgPSB0ZW1wbGF0ZUFyZ3NDb250ZXh0W3RocmVmS2V5XSB8fCB0ZW1wbGF0ZUFyZ3NSb290Y29udGV4dFt0aHJlZktleV07XG4gICAgaWYgKHR5cGVvZiB0aHJlZiAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gd2UgZG8gbm90IGxvZyBiZWNhdXNlIHRoaXMgd2lsbCBoaXQgdGhlIHNlcnZlciBzaWRlXG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCB0aHJlZik7XG4gICAgfVxuICB9XG5cbiAgLy8gaGFzIGEgSFRNTCBoYW5kbGVyXG4gIGNvbnN0IGh0bWxLZXkgPSBub2RlLmRhdGFzZXQuaHRtbDtcbiAgaWYgKGh0bWxLZXkpIHtcbiAgICBjb25zdCBodG1sOiBzdHJpbmcgPSB0ZW1wbGF0ZUFyZ3NDb250ZXh0W2h0bWxLZXldIHx8IHRlbXBsYXRlQXJnc1Jvb3Rjb250ZXh0W2h0bWxLZXldO1xuXG4gICAgaWYgKHR5cGVvZiBodG1sICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyB3ZSBkbyBub3QgbG9nIGJlY2F1c2UgdGhpcyB3aWxsIGhpdCB0aGUgc2VydmVyIHNpZGVcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZS5pbm5lckhUTUwgPSBodG1sO1xuICAgIH1cbiAgfVxufVxuXG5cbi8qKlxuICogUHJvY2Vzc2VzIHRoZSBpbnRpYWxpemF0aW9uIG9mIGEgdGVtcGxhdGUsIGJ5IHByb2Nlc3NpbmdcbiAqIHRoZSBjaGlsZCBub2RlcyBvZiBhIGdpdmVuIG5vZGVcbiAqIEBwYXJhbSBub2RlIHRoZSBub2RlIHdlIGFyZSB3b3JraW5nIHdpdGhcbiAqIEBwYXJhbSB0ZW1wbGF0ZUFyZ3NDb250ZXh0IHRoZSB0ZW1wbGF0ZSBhcmdzIHdlIGFyZSBjdXJyZW50bHkgd29ya2luZyB3aXRoXG4gKi9cbmZ1bmN0aW9uIHByb2Nlc3NUZW1wbGF0ZUluaXRpYWxpemF0aW9uKFxuICBub2RlOiBIVE1MRWxlbWVudCxcbiAgdGVtcGxhdGVBcmdzQ29udGV4dDogYW55LFxuICB0ZW1wbGF0ZUFyZ3NSb290Q29udGV4dDogYW55LFxuKSB7XG4gIC8vIGZpcnN0IHdlIGNoZWNrIGlmIHdlIGhhdmUgY2hpbGQgbm9kZXMgdG8gbG9vcFxuICBub2RlLmhhc0NoaWxkTm9kZXMoKSAmJiBub2RlLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgLy8gd2UgY29uc2lkZXIgaXQgYW4gaHRtbCBlbGVtZW50XG4gICAgY29uc3QgY2hpbGROb2RlQVNIVE1MRWxlbWVudCA9IGNoaWxkTm9kZSBhcyBIVE1MRWxlbWVudDtcblxuICAgIC8vIHNvIHRoZSBhcmdzIHdlIGFyZSB3b3JraW5nIHdpdGgsIHRoaXMgaXMgZ29pbmcgdG8gYmVcbiAgICAvLyB0aGUgY29udGV4dCB3ZSB3aWxsIGJlIHdvcmtpbmcgd2l0aFxuICAgIGxldCB0ZW1wbGF0ZUFyZ3NOZXdDb250ZXh0ID0gdGVtcGxhdGVBcmdzQ29udGV4dDtcblxuICAgIC8vIGNoZWFwIGNoZWVzeSB3YXkgdG8gY2hlY2sgaWYgd2UgYXJlIHdvcmtpbmcgd2l0aCBhIEhUTUwgRWxlbWVudFxuICAgIC8vIHRoYXQgaGFzIGEgZGF0YXNldCBpbiBpdCwgbm8gbmVlZCBmb3IgZmFuY3kgY2hlY2tzIHNpbmNlIHdlIGFyZSBvbmx5IGludGVyZXN0ZWRcbiAgICAvLyBpbiBzdWNoIGVsZW1lbnRzIGFuZCB3ZSBjYW4gYmUgc3VyZSB3ZSBoYXZlIGFuIGh0bWwgZWxlbWVudFxuICAgIGlmICh0eXBlb2YgY2hpbGROb2RlQVNIVE1MRWxlbWVudC5kYXRhc2V0ICE9PSBcInVuZGVmaW5lZFwiICYmIGNoaWxkTm9kZUFTSFRNTEVsZW1lbnQuZGF0YXNldCkge1xuXG4gICAgICAvLyB1cGRhdGUgdGhlIGNvbnRleHQgZm9yIGNoaWxkcmVuXG4gICAgICBjb25zdCBjb250ZXh0S2V5ID0gY2hpbGROb2RlQVNIVE1MRWxlbWVudC5kYXRhc2V0LmNvbnRleHQ7XG4gICAgICBpZiAoY29udGV4dEtleSkge1xuICAgICAgICB0ZW1wbGF0ZUFyZ3NOZXdDb250ZXh0ID0gdGVtcGxhdGVBcmdzTmV3Q29udGV4dFtjb250ZXh0S2V5XTtcbiAgICAgIH1cblxuICAgICAgLy8gc28gbm93IHdlIGdvdCB0byBzZWUgaWYgd2UgaGF2ZSBhIGZvciBsb29wXG4gICAgICBjb25zdCBmb3JFYWNoS2V5ID0gY2hpbGROb2RlQVNIVE1MRWxlbWVudC5kYXRhc2V0LmZvckVhY2g7XG4gICAgICBpZiAoZm9yRWFjaEtleSkge1xuICAgICAgICBjb25zdCBpZktleSA9IGNoaWxkTm9kZUFTSFRNTEVsZW1lbnQuZGF0YXNldC5pZjtcbiAgICAgICAgY29uc3QgaWZWYWx1ZSA9IGlmS2V5ICYmIHRlbXBsYXRlQXJnc05ld0NvbnRleHRbaWZLZXldO1xuXG4gICAgICAgIGlmIChpZktleSAmJiAhaWZWYWx1ZSkge1xuICAgICAgICAgIG5vZGUucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBhbmQgdGhpcyBpcyB3aGF0IHdlIGFyZSBsb29waW5nIGZvclxuICAgICAgICAgIGNvbnN0IGZvckFyZ3VtZW50ID0gdGVtcGxhdGVBcmdzTmV3Q29udGV4dFtmb3JFYWNoS2V5XTtcbiAgICAgICAgICAvLyB3ZSBncmFiIHRoZSBuZXh0IHNpYmxpbmcgc28gdGhhdCB3ZSBjYW4gcHJvcGVybHkgcmVwZWF0XG4gICAgICAgICAgY29uc3QgbmV4dFNpYmxpbmcgPSBjaGlsZE5vZGVBU0hUTUxFbGVtZW50Lm5leHRTaWJsaW5nO1xuXG4gICAgICAgICAgLy8gc28gd2UgbG9vcFxuICAgICAgICAgIGZvckFyZ3VtZW50LmZvckVhY2goKGZvckVhY2hDb250ZXh0OiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIC8vIG5vdyB3ZSBtYWtlIGEgY2xvbmUgb2Ygd2hhdCB3ZSBhcmUgbG9vcGluZyBmb3JcbiAgICAgICAgICAgIGNvbnN0IGNsb25lID0gY2hpbGROb2RlQVNIVE1MRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBpZiB3ZSBoYXZlIGEgbmV4dCBzaWJsaW5nXG4gICAgICAgICAgICBpZiAobmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgICAgLy8gd2UgaW5zZXJ0IGJlZm9yZSBpdFxuICAgICAgICAgICAgICBjaGlsZE5vZGVBU0hUTUxFbGVtZW50LnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNsb25lLCBuZXh0U2libGluZyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjaGlsZE5vZGVBU0hUTUxFbGVtZW50LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhbmQgbm93IHdlIGNhbGwgZm9yIHRoZSBpbml0aWFsaXphdGlvbiBvZiB0aGlzIG5vZGUgaXRzZWxmXG4gICAgICAgICAgICBwcm9jZXNzVGVtcGxhdGVOb2RlSW5pdGlhbGl6YXRpb24oXG4gICAgICAgICAgICAgIGNsb25lLFxuICAgICAgICAgICAgICBmb3JFYWNoQ29udGV4dCxcbiAgICAgICAgICAgICAgdGVtcGxhdGVBcmdzUm9vdENvbnRleHQsXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBpZiB3ZSBkb24ndCBleHBlY3QgY2hpbGRyZW4gdG8gYmUgdW5oYW5kbGVkXG4gICAgICAgICAgICBpZiAoY2xvbmUuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICAgIC8vIHdlIGhhbmRsZSB0aGVtIHBlciBjbG9uZSByZXN1bHRcbiAgICAgICAgICAgICAgcHJvY2Vzc1RlbXBsYXRlSW5pdGlhbGl6YXRpb24oXG4gICAgICAgICAgICAgICAgY2xvbmUsXG4gICAgICAgICAgICAgICAgZm9yRWFjaENvbnRleHQsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVBcmdzUm9vdENvbnRleHQsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBub3cgd2UgY2FuIHJlbW92ZSB0aGUgb3JpZ2luYWxcbiAgICAgICAgICBjaGlsZE5vZGVBU0hUTUxFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2RlQVNIVE1MRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG90aGVyd2lzZSBpZiB3ZSBoYXZlIG5vIGZvciBsb29wLCB3ZSBqdXN0IHByb2Nlc3MgdGhlIG5vZGUgaXRzZWxmXG4gICAgICAgIHByb2Nlc3NUZW1wbGF0ZU5vZGVJbml0aWFsaXphdGlvbihcbiAgICAgICAgICBjaGlsZE5vZGVBU0hUTUxFbGVtZW50LFxuICAgICAgICAgIHRlbXBsYXRlQXJnc05ld0NvbnRleHQsXG4gICAgICAgICAgdGVtcGxhdGVBcmdzUm9vdENvbnRleHQsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYW5kIGlmIHdlIGRpZCBub3QgZGVjaWRlIHRvIGxlYXZlIHRoZSBjaGlsZHJlbiBvZiB0aGUgbm9kZSB1bmhhbmRsZWQgYW5kXG4gICAgLy8gd2UgaGF2ZSBjaGlsZHJlblxuICAgIGlmIChjaGlsZE5vZGVBU0hUTUxFbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgLy8gbGV0cyByZWN1cnNlIGludG8gdGhlbSBmb3IgdGhlaXIgcHJvY2Vzc2luZ1xuICAgICAgcHJvY2Vzc1RlbXBsYXRlSW5pdGlhbGl6YXRpb24oXG4gICAgICAgIGNoaWxkTm9kZUFTSFRNTEVsZW1lbnQsXG4gICAgICAgIHRlbXBsYXRlQXJnc05ld0NvbnRleHQsXG4gICAgICAgIHRlbXBsYXRlQXJnc1Jvb3RDb250ZXh0LFxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFNhbWUgYXMgcmVuZGVyIHRlbXBsYXRlIGJ1dCB3aWxsIHByb3ZpZGVcbiAqIHRoZSBkaXYgYXMgYSByYXcgSFRNTCByZXN1bHRcbiAqIFxuICogdGhpcyBmdW5jdGlvbiBkb2VzIG5vdCBzYW5pdGl6ZSEhIVxuICogXG4gKiBAcGFyYW0gdGVtcGxhdGUgdGhlIHRlbXBsYXRlIGluIHF1ZXN0aW9uXG4gKiBAcGFyYW0gYXJncyB0aGUgYXJndW1lbnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUZW1wbGF0ZUFzTm9kZShcbiAgdGVtcGxhdGU6IHN0cmluZyxcbiAgYXJnczogYW55LFxuKTogSFRNTERpdkVsZW1lbnQge1xuICBjb25zdCBjaGVhcGRpdiA9IERPTVdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjaGVhcGRpdi5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcblxuICBwcm9jZXNzVGVtcGxhdGVJbml0aWFsaXphdGlvbihcbiAgICBjaGVhcGRpdixcbiAgICBhcmdzLFxuICAgIGFyZ3MsXG4gICk7XG5cbiAgcmV0dXJuIGNoZWFwZGl2O1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGEgc2ltcGxlIHRlbXBsYXRlIHJlbmRlcmluZ1xuICogZnJvbSBhIHN0cmluZyBiYXNlZCBIVE1MIHRlbXBsYXRlIGJhc2VkIG9uIHRoZSB0ZXh0IHNwZWNzXG4gKiBcbiAqIGhpcyBmdW5jdGlvbiBkb2VzIG5vdCBzYW5pdGl6ZSEhIVxuICogXG4gKiBAcGFyYW0gdGVtcGxhdGUgdGhlIHRlbXBsYXRlIGluIHF1ZXN0aW9uXG4gKiBAcGFyYW0gYXJncyB0aGUgYXJndW1lbnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUZW1wbGF0ZURvbnRTYW5pdGl6ZShcbiAgdGVtcGxhdGU6IHN0cmluZyxcbiAgYXJnczogYW55LFxuKTogc3RyaW5nIHtcbiAgcmV0dXJuIHJlbmRlclRlbXBsYXRlQXNOb2RlKHRlbXBsYXRlLCBhcmdzKS5pbm5lckhUTUw7XG59XG5cblxuLyoqXG4gKiBQZXJmb3JtcyBhIHNpbXBsZSB0ZW1wbGF0ZSByZW5kZXJpbmdcbiAqIGZyb20gYSBzdHJpbmcgYmFzZWQgSFRNTCB0ZW1wbGF0ZSBiYXNlZCBvbiB0aGUgdGV4dCBzcGVjc1xuICogXG4gKiBOb3RlIHRoYXQgdGhpcyBtZXRob2QgZG9lcyBub3Qgc3VwcG9ydCBVSSBIYW5kbGVyc1xuICogaXQgaXMgdXNlZCBmb3IgcHJvZHVjaW5nIGEgc3RyaW5nIGJ5IGRvaW5nIGEgc2ltcGxlIHBhc3NcbiAqIG9uIGEgdGVtcGxhdGVcbiAqIFxuICogSXQgYWxzbyBkb2VzIG5vdCBzdXBwb3J0IGR5bmFtaWMgc3R5bGVzXG4gKiBcbiAqIGZvciBwcm9wZXIgdGVtcGxhdGVzIHdpdGggZnVsbCBibG93biBmdW5jdGlvbmFsaXR5IHlvdSBzaG91bGRcbiAqIHVzZSB0aGUgcmVuZGVyVGVtcGxhdGVEeW5hbWljYWxseSBtZXRob2RcbiAqIFxuICogQHBhcmFtIHRlbXBsYXRlIHRoZSB0ZW1wbGF0ZSBpbiBxdWVzdGlvblxuICogQHBhcmFtIGFyZ3MgdGhlIGFyZ3VtZW50c1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVGVtcGxhdGUoXG4gIG9wdGlvbnM6IElQb3N0UHJvY2Vzc2luZ09wdGlvbnMsXG4gIGZlYXR1cmVTdXBwb3J0OiBJRmVhdHVyZVN1cHBvcnRPcHRpb25zLFxuICB0ZW1wbGF0ZTogc3RyaW5nLFxuICBhcmdzOiBhbnksXG4pOiBzdHJpbmcge1xuICBjb25zdCBzYW5pdGl6ZWQgPSBzYW5pdGl6ZShvcHRpb25zLCBmZWF0dXJlU3VwcG9ydCwgdGVtcGxhdGUpO1xuXG4gIHJldHVybiByZW5kZXJUZW1wbGF0ZUFzTm9kZShzYW5pdGl6ZWQsIGFyZ3MpLmlubmVySFRNTDtcbn1cblxuLyoqXG4gKiBDb21waWxlcyB0aGUgdGVtcGxhdGUgYnV0IGl0IGRvZXMgYXMgYSByZWFjdCBlbGVtZW50IGluIHdoaWNoXG4gKiB3YXkgaXQgc3VwcG9ydHMgdGhlIHdob2xlIHJhbmdlIG9mIHRoZSBjb21wb25lbnRyeSwgaW5jbHVkaW5nXG4gKiBkeW5hbWljIHN0eWxlcyBhbmQgVUkgaGFuZGxpbmdcbiAqIFxuICogVGhlIHByb3BlcnR5IHNob3VsZCBiZSBhIHRlbXBsYXRlIGZvciB0aGlzIHRvIGJlIHVzYWJsZVxuICogXG4gKiBlZy4gcmVuZGVyVGVtcGxhdGVEeW5hbWljYWxseShkZXNlcmlhbGl6ZShzYW5pdGl6ZSguLi4pKSwgey4uLmFyZ3N9KVxuICogXG4gKiBub3RlIGhvdyB0aGlzIG1ldGhvZCBkaWZmZXJzIGZyb20gdGhlIHJlbmRlclRlbXBsYXRlIG1ldGhvZCBhcyBpdFxuICogdGFrZXMgYSBkb2N1bWVudCBpbnN0ZWFkXG4gKiBcbiAqIEBwYXJhbSBkb2N1bWVudCB0aGUgcm9vdCBsZXZlbCBkb2N1bWVudFxuICogQHBhcmFtIGFyZ3MgdGhlIGFyZ3VtZW50cyB0byByZW5kZXIgdGhlIHRlbXBsYXRlIHdpdGhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRlbXBsYXRlRHluYW1pY2FsbHkoXG4gIGRvY3VtZW50OiBJUm9vdExldmVsRG9jdW1lbnQsXG4gIGFyZ3M6IFRlbXBsYXRlQXJncyxcbiAgb3B0aW9uczogSVJlYWN0aWZ5RXh0cmFPcHRpb25zID0ge30sXG4pOiBSZWFjdC5SZWFjdE5vZGUge1xuICBpZiAoZG9jdW1lbnQgPT09IE5VTExfRE9DVU1FTlQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHRvUmV0dXJuID0gKFxuICAgIDw+XG4gICAgICB7XG4gICAgICAgIGRvY3VtZW50LmNoaWxkcmVuLm1hcCgoYywgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gU0VSSUFMSVpBVElPTl9SRUdJU1RSWS5SRUFDVElGWVtjLnR5cGUgfHwgXCJ0ZXh0XCJdKHtcbiAgICAgICAgICAgIGFzVGVtcGxhdGU6IHRydWUsXG4gICAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICBlbGVtZW50OiBjLFxuICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgIHRlbXBsYXRlQXJnczogYXJncyxcbiAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGV4dHJhT3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgICAgIHBhcmVudDogZG9jdW1lbnQsXG4gICAgICAgICAgICB0cmVlOiBkb2N1bWVudCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8Lz5cbiAgKTtcblxuICBpZiAoYXJncyAmJiBhcmdzLndyYXBwZXIpIHtcbiAgICByZXR1cm4gYXJncy53cmFwcGVyKHRvUmV0dXJuKTtcbiAgfVxuXG4gIHJldHVybiB0b1JldHVybjtcbn1cblxuXG4vLyBiaXQgb3ZlcmtpbGwgYnV0IHNvIGJlIGl0XG5leHBvcnQgY29uc3Qgbm9kZXNUaGF0UmVwcmVzZW50TGluZXMgPSBbXG4gIFwiYWRkcmVzc1wiLFxuICBcImJsb2NrcXVvdGVcIixcbiAgXCJib2R5XCIsXG4gIFwiY2VudGVyXCIsXG4gIFwiZGl2XCIsXG4gIFwiZGlyXCIsXG4gIFwiZGxcIixcbiAgXCJmaWVsZHNldFwiLFxuICBcImZvcm1cIixcbiAgXCJoMVwiLFxuICBcImgyXCIsXG4gIFwiaDNcIixcbiAgXCJoNFwiLFxuICBcImg1XCIsXG4gIFwiaDZcIixcbiAgXCJ0YWJsZVwiLFxuICBcImRkXCIsXG4gIFwiZnJhbWVzZXRcIixcbiAgXCJsaVwiLFxuICBcInRib2R5XCIsXG4gIFwidGZvb3RcIixcbiAgXCJ0aGVhZFwiLFxuICBcInRyXCIsXG4gIFwiaHRtbFwiLFxuXVxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnROb2RlVG9UZXh0KG5vZGU6IE5vZGUpOiBzdHJpbmcge1xuICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMykge1xuICAgIHJldHVybiBub2RlLnRleHRDb250ZW50O1xuICB9XG4gIGlmICghbm9kZS5jaGlsZE5vZGVzIHx8ICFub2RlLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgcmV0dXJuIEFycmF5LmZyb20obm9kZS5jaGlsZE5vZGVzKS5tYXAoKGNub2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChjbm9kZS5ub2RlVHlwZSAhPT0gMykge1xuICAgICAgLy8gd2UgY29uc2lkZXIgaXQgYW4gaHRtbCBlbGVtZW50XG4gICAgICBjb25zdCBjaGlsZE5vZGVBU0hUTUxFbGVtZW50ID0gY25vZGUgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoY2hpbGROb2RlQVNIVE1MRWxlbWVudC50YWdOYW1lICYmIG5vZGVzVGhhdFJlcHJlc2VudExpbmVzLmluY2x1ZGVzKGNoaWxkTm9kZUFTSFRNTEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICByZXR1cm4gY29udmVydE5vZGVUb1RleHQoY25vZGUpICsgXCJcXG5cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb252ZXJ0Tm9kZVRvVGV4dChjbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjbm9kZS50ZXh0Q29udGVudDtcbiAgICB9XG4gIH0pLmpvaW4oXCJcIik7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7QUFRQSxtQkFBa0I7QUFPbEIsU0FBUyxrQ0FDUCxNQUNBLHFCQUNBLHlCQUNBO0FBQ0EsUUFBTSxRQUFRLEtBQUssUUFBUTtBQUMzQixNQUFJLE9BQU87QUFDVCxVQUFNLFVBQVUsb0JBQW9CLEtBQUs7QUFDekMsUUFBSSxDQUFDLFNBQVM7QUFDWixXQUFLLGNBQWMsWUFBWSxJQUFJO0FBQ25DO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFHQSxRQUFNLFVBQVUsS0FBSyxRQUFRO0FBQzdCLE1BQUksU0FBUztBQUNYLFVBQU0sT0FBZSxvQkFBb0IsT0FBTyxLQUFLLHdCQUF3QixPQUFPO0FBQ3BGLFFBQUksT0FBTyxTQUFTLFVBQVU7QUFBQSxJQUU5QixPQUFPO0FBQ0wsV0FBSyxjQUFjO0FBQUEsSUFDckI7QUFBQSxFQUNGO0FBR0EsUUFBTSxXQUFXLEtBQUssUUFBUTtBQUM5QixNQUFJLFVBQVU7QUFDWixVQUFNLFFBQWdCLG9CQUFvQixRQUFRLEtBQUssd0JBQXdCLFFBQVE7QUFDdkYsUUFBSSxPQUFPLFVBQVUsVUFBVTtBQUFBLElBRS9CLE9BQU87QUFDTCxXQUFLLGFBQWEsUUFBUSxLQUFLO0FBQUEsSUFDakM7QUFBQSxFQUNGO0FBR0EsUUFBTSxVQUFVLEtBQUssUUFBUTtBQUM3QixNQUFJLFNBQVM7QUFDWCxVQUFNLE9BQWUsb0JBQW9CLE9BQU8sS0FBSyx3QkFBd0IsT0FBTztBQUVwRixRQUFJLE9BQU8sU0FBUyxVQUFVO0FBQUEsSUFFOUIsT0FBTztBQUNMLFdBQUssWUFBWTtBQUFBLElBQ25CO0FBQUEsRUFDRjtBQUNGO0FBU0EsU0FBUyw4QkFDUCxNQUNBLHFCQUNBLHlCQUNBO0FBRUEs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
