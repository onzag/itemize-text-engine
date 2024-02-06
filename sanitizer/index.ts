import { DOMWindow, DOMPurify } from "../serializer/dom";

/**
 * Represents the context that is used in order
 * to postprocess a santized entry so that it can
 * be constructed into html that can be
 * displayed to the user
 */
export interface IPostProcessingOptions {
  /**
   * whenever a file is resolved this allows for dermining how it is to be resolved
   * 
   * you may be able to use this in a mail context by returning cid as a source
   * for a given file, check the mail option for this
   * 
   * @rturns the file information, if null is returned the file is considered
   * missing
   */
  fileResolver: (fileId: string, isImage: boolean, node: HTMLElement) => {
    /**
     * The source for the files
     */
    src: string;
    /**
     * specifically for images
     */
    srcSet?: string;
  }

  /**
   * specifies that the content is expected to be used in a mail
   * context
   */
  mail?: boolean;

  /**
   * Triggers when the email should attach a file
   * for the given id, while the file will also go over the file
   * resolver, as a non image, this function may provide a cleaner
   * way to specify this behaviour
   * 
   * @param fileId 
   * @returns 
   */
  mailShouldAttachFile?: (fileId: string) => void;

  /**
   * Triggers when the email should attach a file
   * for the given id, while the file will also go over the file
   * resolver, as a non image, this function may provide a cleaner
   * way to specify this behaviour
   * 
   * @param fileId 
   * @returns 
   */
  mailShouldAttachCidFile?: (fileId: string) => void;

  /**
   * An url for images that have failed to resolve
   */
  imageFail?: string;
}

/**
 * The feature set that is supported in a given
 * sanitization or other context
 */
export interface IFeatureSupportOptions {
  /**
   * Whether it supports images
   */
  supportsImages: boolean;
  /**
   * The accept type that the input should accept
   * for filling the image type, it can be null, if
   * it doesn't support images, or when viewing
   */
  supportsImagesAccept: string;
  /**
   * Whether it supports videos
   */
  supportsVideos: boolean;
  /**
   * Whether files are supporeted
   */
  supportsFiles: boolean;
  /**
   * The accept type that the input should accept
   * for filling the file type, it can be null, if
   * it doesn't support files, or when viewing
   */
  supportsFilesAccept: string;
  /**
   * Whether links are acceptable
   */
  supportsLinks: boolean;
  /**
   * Whether external links specifying an external
   * protocol outside the current page are acceptable
   */
  supportsExternalLinks: boolean;
  /**
   * Whether lists are acceptable, ul, ol etc...
   */
  supportsLists: boolean;
  /**
   * Whether quotes are acceptable
   */
  supportsQuote: boolean;
  /**
   * Whether titles are acceptable
   */
  supportsTitle: boolean;
  /**
   * Whether custom styles using the style tag
   * are acceptable
   */
  supportsCustomStyles: boolean;
  /**
   * Whether templating is supported
   */
  supportsTemplating: boolean;

  /**
   * Whether we support customs
   */
  supportsCustom: boolean;
  /**
   * the supported custom elements
   */
  supportedCustoms: string[];
  /**
   * whether we support containers
   */
  supportsContainers: boolean;
  /**
   * The supported containers, might be null
   * if all supported, note that this will
   * not affect the base container
   */
  supportedContainers: string[];
  /**
   * Whether tables are supported
   */
  supportsTables: boolean;
  /**
   * The list of supported tables
   */
  supportedTables: string[];
  /**
   * whether rich classes are supported
   */
  supportsRichClasses: boolean;
  /**
   * The supported rich classes, might be null
   * if all supported
   */
  supportedRichClasses: string[];
}

/**
 * Sanitazation standard configuraton
 */
export const SANITIZE_CONFIG = {
  // iframes are allowed, no sources are expected from the server side anyway
  ADD_TAGS: ["iframe"],
  // but src are still allowed here for a simple reason, as they are defined by the post processing hook
  ADD_ATTR: ["frameborder", "allow", "allowfullscreen", "scrolling", "src", "spellcheck", "contenteditable"],
  // and these can be blob so we must allow them
  ALLOW_UNKNOWN_PROTOCOLS: true,
};

/**
 * The list of allowed classes for text as defined by the text-specs
 * this will prevent users from class injection
 */
export const ALLOWED_CLASSES = [
  "image", "image-container", "image-pad", "video", "video-container",
  "file", "file-container", "file-icon", "file-name", "file-extension", "file-size",
  "container", "inline", "void-block", "void-inline", "void-superblock"
]

export const RICH_TEXT_CLASS_PREFIX = "rich-text--";
export const CONTAINER_CLASS = "container";
export const CONTAINER_CLASS_PREFIX = CONTAINER_CLASS + "-";
export const CUSTOM_CLASS_PREFIX = "custom-";
export const TABLE_CLASS_PREFIX = "table-";

/**
 * The list of allowed prefixes
 */
export const ALLOWED_CLASSES_PREFIXES = [
  RICH_TEXT_CLASS_PREFIX, CONTAINER_CLASS_PREFIX, CUSTOM_CLASS_PREFIX, TABLE_CLASS_PREFIX,
];

/**
 * Template events that are supported these
 * exist as data-on-[event]="{{event}}"
 */
export const SUPPORTED_TEMPLATE_EVENTS = [
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
 * Styles that might pop in when using templates
 * exist as data-[supportedTemplateStyle]-style="position:absolute;"
 */
export const SUPPORTED_TEMPLATE_STYLES = [
  "hover",
  "active",
];

/**
 * Modify the content of the children based on
 * the template args
 */
export const SUPPORTED_CONTENT_MODIFIERS = [
  "text",
  "html",
];

/**
 * Custom handlers to modify the information within the system
 * use args
 */
export const SUPPORTED_HANDLERS = [
  "ui",
];

/**
 * sanitizes and postprocesses a given
 * value for an item definition property
 * in a way that it makes it directly usable and can
 * then be passed to the serializer or displayed as it is
 * @param context 
 * @param value 
 */
export function sanitize(
  options: IPostProcessingOptions,
  featureSupport: IFeatureSupportOptions,
  value: string,
) {
  DOMPurify.addHook("afterSanitizeElements", postprocess.bind(this, options, featureSupport));
  const newValue = DOMPurify.sanitize(value, SANITIZE_CONFIG);
  DOMPurify.removeAllHooks();
  return newValue;
}

/**
 * The postprocessing hook that cleans and sets the attributes
 * right for the rich text in order to follow the standards
 * given by the text-specs.md file
 *
 * @param mediaProperty the property we are used as media property
 * @param currentFiles the current files
 * @param supportsImages whether we are supporting images
 * @param supportsVideos whether we are supporting videos
 * @param supportsFiles whether we are supporting files
 * @param node the given node in question we are currently processing, this is a recursive
 * function after all
 * @returns a node
 */
export function postprocess(
  options: IPostProcessingOptions,
  featureSupport: IFeatureSupportOptions,
  node: HTMLElement,
) {
  if (node.tagName === "IFRAME") {
    if (featureSupport.supportsVideos) {
      const videoSrc = node.dataset.videoSrc || "";
      const origin = node.dataset.videoOrigin || "";

      (node as HTMLIFrameElement).allowFullscreen = true;

      // src
      if (origin === "vimeo") {
        node.setAttribute("src", `https://player.vimeo.com/video/${videoSrc}?title=0&byline=0&portrait=0&badge=0`);
      } else if (origin === "youtube") {
        node.setAttribute("src", `https://youtube.com/embed/${videoSrc}?rel=0`);
      }

      // frameborder
      (node as HTMLIFrameElement).frameBorder = "0";

      // data-video-src
      node.dataset.videoSrc = videoSrc;

      // data-video-origin
      node.dataset.videoOrigin = origin;

      // allowfullscreen
      (node as HTMLIFrameElement).allowFullscreen = true;
    } else {
      node.parentElement && node.parentElement.removeChild(node);
    }
  } else if (node.tagName === "IMG") {
    if (featureSupport.supportsImages) {
      const srcId = node.dataset.srcId;
      // const currentFileIndex = context.currentFiles ? context.currentFiles.findIndex((f) => f.id === srcId) : -1;
      // const currentFile = currentFileIndex !== -1 ? context.currentFiles[currentFileIndex] : null;
      const alt = (node as HTMLImageElement).alt || "";
      const srcHeight = node.dataset.srcHeight;
      const srcWidth = node.dataset.srcWidth;
      const sizes = (node as HTMLImageElement).sizes || "70vw";

      node.setAttribute("loading", "lazy");

      const currentFile = srcId ? options.fileResolver(srcId, true, node) : null;

      if (!currentFile) {
        // node.parentElement && node.parentElement.removeChild(node);

        const src = node.getAttribute("src") || "";

        // remove stray hrefs
        if (
          //image-pad
          node.parentElement &&
          //image-container
          node.parentElement.parentElement &&
          //image
          node.parentElement.parentElement.parentElement &&
          node.parentElement.parentElement.parentElement.tagName === "A" &&
          node.parentElement.parentElement.parentElement.classList.contains("image")
        ) {
          node.parentElement.parentElement.parentElement.removeAttribute("href");

          // dompurify rechecks this which is really annoying
          // after you move the image around and purify it
          // it will run it again against the same code
          if ((options.mail && !src.startsWith("cid")) || !options.mail) {
            node.parentElement.parentElement.parentElement.parentElement.removeChild(node.parentElement.parentElement.parentElement);
          }
        } else if ((options.mail && !src.startsWith("cid")) || !options.mail) {
          node.parentElement && node.parentElement.removeChild(node);
        }
      } else {
        // srcset
        if (!options.mail && currentFile.srcSet) {
          node.setAttribute("srcset", currentFile.srcSet);
        } else {
          node.removeAttribute("srcset");
        }
        // src
        node.setAttribute("src", currentFile.src);

        if (options.mail && !currentFile.src.startsWith("cid:")) {
          console.warn("You have created a postprocessing pipeline for an email and the source does not start with 'cid:' the value is " +
            JSON.stringify(currentFile.src));
        } else if (options.mail) {
          options.mailShouldAttachCidFile && options.mailShouldAttachCidFile(srcId);
        }

        if (
          //image-pad
          node.parentElement &&
          //image-container
          node.parentElement.parentElement &&
          //image
          node.parentElement.parentElement.parentElement &&
          node.parentElement.parentElement.parentElement.tagName === "A" &&
          node.parentElement.parentElement.parentElement.classList.contains("image")
        ) {
          node.parentElement.parentElement.parentElement.setAttribute("href", currentFile.src);

          if (options.mail) {
            const image = node.parentElement.parentElement.parentElement;
            const imageContainer = node.parentElement.parentElement;
            const imagePad = node.parentElement;
            const img = node;

            applyStyle(imagePad, imagePadStyles, true);
            applyStyle(imageContainer, imageContainerStyles, false);
            applyStyle(img, imgStyles, false);

            const styleSet = image.getAttribute("style");

            const newImage = DOMWindow.document.createElement("div");
            newImage.appendChild(imageContainer);
            newImage.setAttribute("style", styleSet);
            applyStyle(newImage, imageStyles, false);

            // remove the link object to the image because email clients
            // don't like it
            image.parentElement.replaceChild(
              newImage,
              image,
            );
          }
        }

        // sizes
        if (!options.mail) {
          node.setAttribute("sizes", sizes);
          // data-src-width
          node.dataset.srcWidth = srcWidth;
          // data-src-id
          node.dataset.srcId = srcId;
          // data-src-height
          node.dataset.srcHeight = srcHeight;
        } else {
          node.removeAttribute("sizes");
          delete node.dataset.srcId;
          delete node.dataset.srcWidth;
          delete node.dataset.srcHeight;
        }

        // alt
        (node as HTMLImageElement).alt = alt;
      }
    } else {
      node.parentElement && node.parentElement.removeChild(node);
    }
  } else if (node.className === "file") {
    if (featureSupport.supportsFiles) {
      const srcId = node.dataset.srcId;
      // const currentFileIndex = context.currentFiles ? context.currentFiles.findIndex((f) => f.id === srcId) : -1;
      const currentFile = options.fileResolver(
        srcId,
        false,
        node,
      );

      if (options.mail) {
        if (currentFile) {
          options.mailShouldAttachFile && options.mailShouldAttachFile(srcId);
        }
        node.parentElement && node.parentElement.removeChild(node);
      } else if (currentFile) {
        // spellcheck
        node.spellcheck = false;

        // const domain = process.env.NODE_ENV === "production" ? context.config.productionHostname : context.config.developmentHostname;
        // const absolutedFile = fileURLAbsoluter(
        //   domain,
        //   context.config.containersHostnamePrefixes,
        //   currentFile,
        //   context.itemDefinition,
        //   context.forId,
        //   context.forVersion || null,
        //   context.containerId,
        //   context.include,
        //   context.mediaProperty,
        //   context.cacheFiles,
        //   context.forceFullURLs || context.forMail,
        // );

        // data-src-id
        node.dataset.srcId = srcId;

        // data-src
        if (currentFile) {
          node.setAttribute("href", currentFile.src);
        } else {
          node.removeAttribute("href");
        }

        // contenteditable
        node.contentEditable = "false";
        // class
        node.className = "file";
      } else {
        node.removeAttribute("href");
        // node.parentElement && node.parentElement.removeChild(node);
      }
    } else {
      node.parentElement && node.parentElement.removeChild(node);
    }
  }

  if (
    node.tagName === "A" &&
    (node.hasAttribute("href") || node.hasAttribute("data-href")
    ) && !node.classList.contains("image") && !node.classList.contains("file")) {
    if (!featureSupport.supportsLinks) {
      node.removeAttribute("href");
      node.removeAttribute("data-href");
    } else if (!featureSupport.supportsExternalLinks) {
      const href = node.getAttribute("href");
      if (href.indexOf("http") !== -1 || href.indexOf("://") !== -1) {
        node.removeAttribute("href");
      }
    }
  }

  if (node.classList) {
    const classList = Array.from(node.classList);

    classList.forEach((className) => {
      if (!ALLOWED_CLASSES.includes(className)) {
        const isPrefixedByAValidPrefix = ALLOWED_CLASSES_PREFIXES.some((prefix) => className.indexOf(prefix) === 0);
        if (!isPrefixedByAValidPrefix) {
          node.classList.remove(className);
          return;
        }
      }

      if (className.startsWith(CONTAINER_CLASS)) {
        if (!featureSupport.supportsContainers) {
          node.classList.remove(className);
        } else if (featureSupport.supportedContainers) {
          const shouldRemove = !featureSupport.supportedContainers.includes(className.substr(CONTAINER_CLASS_PREFIX.length));
          if (shouldRemove) {
            node.classList.remove(className);
          }
        }
      } else if (className.startsWith(CUSTOM_CLASS_PREFIX)) {
        if (!featureSupport.supportsCustom) {
          node.classList.remove(className);
        } else if (featureSupport.supportedCustoms) {
          !featureSupport.supportedCustoms.includes(className.substr(CUSTOM_CLASS_PREFIX.length)) && node.classList.remove(className);
        }
      } else if (className.startsWith(RICH_TEXT_CLASS_PREFIX)) {
        if (!featureSupport.supportsRichClasses) {
          node.classList.remove(className);
        } else if (featureSupport.supportedRichClasses) {
          !featureSupport.supportedRichClasses.includes(className.substr(RICH_TEXT_CLASS_PREFIX.length)) && node.classList.remove(className);
        }
      } else if (className.startsWith(TABLE_CLASS_PREFIX)) {
        if (!featureSupport.supportsTables) {
          node.classList.remove(className);
        } else if (featureSupport.supportedTables) {
          !featureSupport.supportedTables.includes(className.substr(TABLE_CLASS_PREFIX.length)) && node.classList.remove(className);
        }
      }
    });
  }

  if (node.tagName === "DIV") {
    if (
      featureSupport.supportsContainers
    ) {
      if (
        !node.classList.contains("container") &&
        !Array.from(node.classList).some((v) => v.startsWith("container-") || v.startsWith("custom-"))
      ) {
        node.classList.add("container");
      }
    } else {
      node.parentElement && node.parentElement.removeChild(node);
    }
  }

  if (node.tagName === "QUOTE" && !featureSupport.supportsQuote) {
    node.parentElement && node.parentElement.removeChild(node);
  }

  if (["TABLE", "THEAD", "TBODY", "TR", "TD"].includes(node.tagName) && !featureSupport.supportsTables) {
    node.parentElement && node.parentElement.removeChild(node);
  }

  if (["UL", "OL", "LI"].includes(node.tagName) && !featureSupport.supportsLists) {
    node.parentElement && node.parentElement.removeChild(node);
  }

  if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(node.tagName) && !featureSupport.supportsTitle) {
    node.parentElement && node.parentElement.removeChild(node);
  }

  if (node.style && !featureSupport.supportsCustomStyles) {
    node.removeAttribute("style");
    SUPPORTED_TEMPLATE_STYLES.forEach((attr) => {
      delete node.dataset[attr + "Style"];
    });
  } else {
    const style = node.getAttribute && node.getAttribute("style");
    if (style) {
      const removeStyle =
        style.indexOf("javascript") !== -1 ||
        style.indexOf("http") !== -1 ||
        style.indexOf("://") !== -1 ||
        node.style.position === "fixed";
      if (removeStyle) {
        node.removeAttribute("style");
      }
    }

    if (node.dataset) {
      SUPPORTED_TEMPLATE_STYLES.forEach((attr) => {
        const templateEventStyle = node.dataset[attr + "Style"];
        if (templateEventStyle) {
          const removeStyle =
            templateEventStyle.indexOf("javascript") !== -1 ||
            templateEventStyle.indexOf("http") !== -1 ||
            templateEventStyle.indexOf("://") !== -1 ||
            templateEventStyle.indexOf("fixed") !== -1;
          if (removeStyle) {
            delete node.dataset[attr + "Style"];
          }
        }
      });
    }
  }

  const id = node.id;
  if (id) {
    node.removeAttribute("id");
  }

  return node;
}

const imageStyles = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const imageContainerStyles = {
  width: "100%",
  maxWidth: "700px",
};

const imagePadStyles = {
  width: "100%",
  paddingBottom: "0px",
}

const imgStyles = {
  width: "100%",
};

function applyStyle(element: HTMLElement, style: any, override: boolean) {
  Object.keys(style).forEach((k) => {
    if (!override && element.style[k]) {
      return;
    }

    element.style[k] = style[k];
  });
}