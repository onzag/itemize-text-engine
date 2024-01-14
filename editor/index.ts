import { IRootLevelDocument, RichElement } from "../serializer";
import { IText } from "../serializer/types/text";

/**
 * locale replacer function used here so that itemize is not needed to be imported
 * this is a copy
 * @ignore
 * 
 * @param str 
 * @param args 
 * @returns 
 */
function localeReplacer(str: string, ...args: any[]): string {
  return str.replace(/\{(\d+)\}/g, (match, indexMatch) => {
    if (typeof args[indexMatch] === "undefined") {
      return "?";
    } else if (args[indexMatch] === null) {
      return "";
    }
    return args[indexMatch].toString();
  });
}


/**
 * The attributes that exist in a given element that mark such
 * as a templated element
 * @ignore
 */
const templatedAttributes = [
  "thref",
  "textContent",
  "html",
  "forEach",
  "context",
  "uiHandler",
];

/**
 * The interactive actions that exist that mark
 * something as a templated element that is interactive
 * @ignore
 */
const templatedInteractiveActions = [
  "click",
  "blur",
  "focus",
  "input",
  "keydown",
  "keypress",
  "keyup",
  "mousedown",
  "mouseenter",
  "mouseleave",
  "mousemove",
  "mouseover",
  "mouseout",
  "mouseup",
  "mousewheel",
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
  "wheel",
];

/**
 * The attributes that exist in a given element that mark such
 * as a templated styled elements
 * @ignore
 */
const templatedStyledAttributes = [
  "styleHover",
  "styleActive",
];


/**
 * The list of special types to use
 * @ignore
 */
const specialTypes = {
  "void-block": "container",
  "void-superblock": "container",
  "void-inline": "inline",
};

/**
 * The rich text information
 * to be used to build an editor and describe
 * a node
 */
export interface IPropertyEntryI18nRichTextInfo {
  formatBoldLabel: string;
  formatItalicLabel: string;
  formatUnderlineLabel: string;
  formatLinkLabel: string;
  formatTitleLabel: string;
  formatQuoteLabel: string;
  formatListNumberedLabel: string;
  formatListBulletedLabel: string;
  formatAddImageLabel: string;
  formatAddVideoLabel: string;
  formatAddFileLabel: string;
  formatAddContainerLabel: string;
  formatAddTableLabel: string;
  formatAddTheadLabel: string;
  formatAddTbodyLabel: string;
  formatAddTfootLabel: string;
  formatAddTrLabel: string;
  formatAddTdLabel: string;
  formatAddThLabel: string;
  formatDelTrLabel: string;
  formatDelTdLabel: string;
  formatDelThLabel: string;
  formatAddCustomLabel: string;
  formatSetStyleLabel: string;
  formatSetHoverStyleLabel: string;
  formatSetActiveStyleLabel: string;
  formatSetClassLabel: string;
  formatSetEventHandlers: string;
  formatSetContext: string;
  formatSetRenderCondition: string;
  formatMakeLoop: string;
  formatSetUIHandlerLabel: string;
  formatSetUIHandlerArgLabel: string;
  formatSetUIHandlerArgName: string;
  formatSetUIHandlerArgValue: string;
  formatAddTemplateText: string;
  formatAddTemplateHTML: string;
  formatDeleteElement: string;
  formatMore: string;

  name: string;
  alt: string;
  sizes: string;
  container: string;
  inline: string;
  text: string;
  custom: string;
  file: string;
  image: string;
  link: string;
  list: string;
  listItem: string;
  paragraph: string;
  quote: string;
  title: string;
  table: string;
  thead: string;
  tbody: string;
  tfoot: string;
  tr: string;
  td: string;
  th: string;
  video: string;
  styled: string;
  template: string;
  interactive: string;
  style: string;
  styleActive: string;
  styleHover: string;
  classes: string;
  settings: string;
  styles: string;
  templating: string;
  actions: string;
  each: string;
  context: string;
  renderCondition: string;
  uiHandler: string;
  type: string;
  standalone: string;

  loadVideo: {
    invalid: string;
    label: string;
    placeholder: string;
    title: string;
    submit: string;
  };

  setLink: {
    invalid: string;
    label: string;
    placeholder: string;
    placeholderLocalOnly: string;
    templated: string;
    templatedLabel: string;
    templatedPlaceholder: string;
    templatedUnspecified: string;
    title: string;
    submit: string;
  };

  addTemplateText: {
    title: string;
    label: string;
    placeholder: string;
    submit: string;
  };

  addTemplateHTML: {
    title: string;
    label: string;
    placeholder: string;
    submit: string;
  };

  richUIHandlerElement: {
    [key: string]: string;
  };
  richTables: {
    [key: string]: string;
  };
  richContainers: {
    [key: string]: string;
  };
  richClasses: {
    [key: string]: string;
  };
  richCustoms: {
    [key: string]: string;
  };
}

/**
 * The node information that is extracted of a given node used
 * to be displayed to the user
 */
interface INodeInfo {
  /**
   * The name that is given, human readable in the given language
   */
  name: string;
  /**
   * Whether it represents a templated node
   */
  isTemplate: boolean;
  /**
   * Whether it represents a text node
   */
  isText: boolean;
  /**
   * Specifies whether it is an interactive element
   */
  isInteractive: boolean;
}

/**
 * Provides the node info of a given node
 * @param node the node, either text or rich element
 * @param i18nData the i18n information to be used to create the name
 * @returns the node information
 */
export function getInfoFor(
  node: RichElement | IText | IRootLevelDocument,
  i18nData: IPropertyEntryI18nRichTextInfo,
): INodeInfo {
  if ((node as any).type === "document") {
    return null as any;
  }

  // check for whether is interactive and other options
  const isInteractive = templatedInteractiveActions.some((attr) => typeof node[attr] !== "undefined" && node[attr] !== null);
  const isTemplateStyled = templatedStyledAttributes.some((attr) => typeof node[attr] !== "undefined" && node[attr] !== null);
  const isBasicStyled = !!(node as RichElement).style || ((node as RichElement).richClassList && ((node as RichElement).richClassList as any).length);
  const isBasicTemplated = templatedAttributes.some((attr) => typeof node[attr] !== "undefined" && node[attr] !== null);
  const isTemplate = isInteractive || isTemplateStyled || isBasicTemplated;

  // now let's build the name label for the given language
  const foundCustomName = (!(node as RichElement).givenName && (node as RichElement).uiHandler) ?
    i18nData.richUIHandlerElement[(node as RichElement as any).uiHandler.replace(/-/g, "_")] : null;
  let nameLabel: string = (node as RichElement).givenName ? (node as RichElement).givenName : (
    foundCustomName || (
      (node as RichElement).type ?
        (i18nData[specialTypes[(node as RichElement).type] ? specialTypes[(node as RichElement).type] : (node as RichElement).type.replace(/-/g, "_")] ||
          (node as RichElement).type) :
        i18nData.text)
  );

  if (!(node as RichElement).givenName && !foundCustomName) {
    if (isBasicStyled || isTemplateStyled) {
      nameLabel = localeReplacer(i18nData.styled, nameLabel);
    }
    if (isInteractive) {
      nameLabel = localeReplacer(i18nData.interactive, nameLabel);
    }
    if (isTemplate) {
      nameLabel = localeReplacer(i18nData.template, nameLabel);
    }
  }

  // and we can return the information now
  return {
    isTemplate,
    isInteractive,
    name: nameLabel,
    isText: typeof (node as IText).text === "string",
  }
}