import { IRootLevelDocument, RichElement } from "../serializer";
import { IText } from "../serializer/types/text";
import { IBaseI18nRichTextInfo } from "./slate";

/**
 * locale replacer function used here so that itemize is not needed to be imported
 * this is a copy
 * 
 * @param str 
 * @param args 
 * @returns 
 */
export function localeReplacer(str: string, ...args: any[]): string {
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
 * @ignore
 */
const mimeExtensions = {
  "audio/aac": "aac",
  "application/x-abiword": "abw",
  "application/x-freearc": "arc",
  "video/x-msvideo": "avi",
  "application/vnd.amazon.ebook": "azw",
  "application/octet-stream": "bin",
  "image/bmp": "bmp",
  "application/x-bzip": "bz",
  "application/x-bzip2": "bz2",
  "application/x-csh": "csh",
  "text/css": "css",
  "text/csv": "csv",
  "application/msword": "doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
  "application/vnd.ms-fontobject": "eot",
  "application/epub+zip": "epub",
  "image/gif": "gif",
  "text/html": "html",
  "image/vnd.microsoft.icon": "ico",
  "text/calendar": "ics",
  "application/java-archive": "jar",
  "image/jpeg": "jpg",
  "text/javascript": "js",
  "application/json": "json",
  "application/ld+json": "jsonld",
  "audio/midi audio/x-midi": "mid",
  "audio/mpeg": "mp3",
  "video/mpeg": "mpeg",
  "application/vnd.apple.installer+xml": "mpkg",
  "application/vnd.oasis.opendocument.presentation": "odp",
  "application/vnd.oasis.opendocument.spreadsheet": "ods",
  "application/vnd.oasis.opendocument.text": "odt",
  "audio/ogg": "oga",
  "video/ogg": "ogv",
  "application/ogg": "ogx",
  "font/otf": "otf",
  "image/png": "png",
  "application/pdf": "pdf",
  "application/vnd.ms-powerpoint": "ppt",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": "pptx",
  "application/x-rar-compressed": "rar",
  "application/rtf": "rtf",
  "application/x-sh": "sh",
  "image/svg+xml": "svg",
  "application/x-shockwave-flash": "swf",
  "application/x-tar": "tar",
  "image/tiff": "tiff",
  "font/ttf": "ttf",
  "text/plain": "txt",
  "application/vnd.visio": "vsd",
  "audio/wav": "wav",
  "audio/webm": "weba",
  "video/webm": "webm",
  "image/webp": "webp",
  "font/woff": "woff",
  "font/woff2": "woff2",
  "application/xhtml+xml": "xhtml",
  "application/vnd.ms-excel": "xls",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
  "application/xml if not readable from casual users (RFC 3023, section 3)": "xml",
  "application/vnd.mozilla.xul+xml": "xul",
  "application/zip": "zip",
  "video/3gpp": "3gp",
  "video/3gpp2": "3g2",
  "application/x-7z-compressed": "7z",
};

/**
 * Converts a mime type to an extension using a known extension list
 * 
 * Copied so that itemize doesn't need to be imported as well
 * 
 * @param str the string that represents the mime type
 * @returns an extension or txt if it doesn't know
 */
export function mimeTypeToExtension(str: string) {
  const expectedExt = mimeExtensions[str];
  if (expectedExt) {
    return expectedExt;
  }
  return (str.split("/")[1] || "txt").substr(0, 3);
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
 * The node information that is extracted of a given node used
 * to be displayed to the user
 */
export interface INodeInfo {
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
  i18nData: IBaseI18nRichTextInfo,
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