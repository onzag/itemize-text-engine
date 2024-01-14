import {
  __commonJS,
  __spreadProps,
  __spreadValues,
  __toESM,
  require_react,
  require_react_dom
} from "/dist/commons.js";

// ../node_modules/dompurify/dist/purify.js
var require_purify = __commonJS({
  "../node_modules/dompurify/dist/purify.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.DOMPurify = factory());
    })(exports, function() {
      "use strict";
      const {
        entries,
        setPrototypeOf,
        isFrozen,
        getPrototypeOf,
        getOwnPropertyDescriptor
      } = Object;
      let {
        freeze,
        seal,
        create
      } = Object;
      let {
        apply,
        construct
      } = typeof Reflect !== "undefined" && Reflect;
      if (!freeze) {
        freeze = function freeze2(x) {
          return x;
        };
      }
      if (!seal) {
        seal = function seal2(x) {
          return x;
        };
      }
      if (!apply) {
        apply = function apply2(fun, thisValue, args) {
          return fun.apply(thisValue, args);
        };
      }
      if (!construct) {
        construct = function construct2(Func, args) {
          return new Func(...args);
        };
      }
      const arrayForEach = unapply(Array.prototype.forEach);
      const arrayPop = unapply(Array.prototype.pop);
      const arrayPush = unapply(Array.prototype.push);
      const stringToLowerCase = unapply(String.prototype.toLowerCase);
      const stringToString = unapply(String.prototype.toString);
      const stringMatch = unapply(String.prototype.match);
      const stringReplace = unapply(String.prototype.replace);
      const stringIndexOf = unapply(String.prototype.indexOf);
      const stringTrim = unapply(String.prototype.trim);
      const regExpTest = unapply(RegExp.prototype.test);
      const typeErrorCreate = unconstruct(TypeError);
      function unapply(func) {
        return function(thisArg) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          return apply(func, thisArg, args);
        };
      }
      function unconstruct(func) {
        return function() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          return construct(func, args);
        };
      }
      function addToSet(set, array) {
        let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
        if (setPrototypeOf) {
          setPrototypeOf(set, null);
        }
        let l = array.length;
        while (l--) {
          let element = array[l];
          if (typeof element === "string") {
            const lcElement = transformCaseFunc(element);
            if (lcElement !== element) {
              if (!isFrozen(array)) {
                array[l] = lcElement;
              }
              element = lcElement;
            }
          }
          set[element] = true;
        }
        return set;
      }
      function cleanArray(array) {
        for (let index = 0; index < array.length; index++) {
          if (getOwnPropertyDescriptor(array, index) === void 0) {
            array[index] = null;
          }
        }
        return array;
      }
      function clone(object) {
        const newObject = create(null);
        for (const [property, value] of entries(object)) {
          if (getOwnPropertyDescriptor(object, property) !== void 0) {
            if (Array.isArray(value)) {
              newObject[property] = cleanArray(value);
            } else if (value && typeof value === "object" && value.constructor === Object) {
              newObject[property] = clone(value);
            } else {
              newObject[property] = value;
            }
          }
        }
        return newObject;
      }
      function lookupGetter(object, prop) {
        while (object !== null) {
          const desc = getOwnPropertyDescriptor(object, prop);
          if (desc) {
            if (desc.get) {
              return unapply(desc.get);
            }
            if (typeof desc.value === "function") {
              return unapply(desc.value);
            }
          }
          object = getPrototypeOf(object);
        }
        function fallbackValue(element) {
          console.warn("fallback value for", element);
          return null;
        }
        return fallbackValue;
      }
      const html$1 = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
      const svg$1 = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
      const svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
      const svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
      const mathMl$1 = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
      const mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
      const text = freeze(["#text"]);
      const html = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]);
      const svg = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
      const mathMl = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
      const xml = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
      const MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
      const ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
      const TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
      const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/);
      const ARIA_ATTR = seal(/^aria-[\-\w]+$/);
      const IS_ALLOWED_URI = seal(
        /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
        // eslint-disable-line no-useless-escape
      );
      const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
      const ATTR_WHITESPACE = seal(
        /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
        // eslint-disable-line no-control-regex
      );
      const DOCTYPE_NAME = seal(/^html$/i);
      var EXPRESSIONS = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        MUSTACHE_EXPR,
        ERB_EXPR,
        TMPLIT_EXPR,
        DATA_ATTR,
        ARIA_ATTR,
        IS_ALLOWED_URI,
        IS_SCRIPT_OR_DATA,
        ATTR_WHITESPACE,
        DOCTYPE_NAME
      });
      const getGlobal = function getGlobal2() {
        return typeof window === "undefined" ? null : window;
      };
      const _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, purifyHostElement) {
        if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") {
          return null;
        }
        let suffix = null;
        const ATTR_NAME = "data-tt-policy-suffix";
        if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
          suffix = purifyHostElement.getAttribute(ATTR_NAME);
        }
        const policyName = "dompurify" + (suffix ? "#" + suffix : "");
        try {
          return trustedTypes.createPolicy(policyName, {
            createHTML(html2) {
              return html2;
            },
            createScriptURL(scriptUrl) {
              return scriptUrl;
            }
          });
        } catch (_) {
          console.warn("TrustedTypes policy " + policyName + " could not be created.");
          return null;
        }
      };
      function createDOMPurify2() {
        let window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
        const DOMPurify3 = (root) => createDOMPurify2(root);
        DOMPurify3.version = "3.0.8";
        DOMPurify3.removed = [];
        if (!window2 || !window2.document || window2.document.nodeType !== 9) {
          DOMPurify3.isSupported = false;
          return DOMPurify3;
        }
        let {
          document: document2
        } = window2;
        const originalDocument = document2;
        const currentScript = originalDocument.currentScript;
        const {
          DocumentFragment,
          HTMLTemplateElement,
          Node,
          Element,
          NodeFilter,
          NamedNodeMap = window2.NamedNodeMap || window2.MozNamedAttrMap,
          HTMLFormElement,
          DOMParser,
          trustedTypes
        } = window2;
        const ElementPrototype = Element.prototype;
        const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
        const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
        const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
        const getParentNode = lookupGetter(ElementPrototype, "parentNode");
        if (typeof HTMLTemplateElement === "function") {
          const template = document2.createElement("template");
          if (template.content && template.content.ownerDocument) {
            document2 = template.content.ownerDocument;
          }
        }
        let trustedTypesPolicy;
        let emptyHTML = "";
        const {
          implementation,
          createNodeIterator,
          createDocumentFragment,
          getElementsByTagName
        } = document2;
        const {
          importNode
        } = originalDocument;
        let hooks = {};
        DOMPurify3.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
        const {
          MUSTACHE_EXPR: MUSTACHE_EXPR2,
          ERB_EXPR: ERB_EXPR2,
          TMPLIT_EXPR: TMPLIT_EXPR2,
          DATA_ATTR: DATA_ATTR2,
          ARIA_ATTR: ARIA_ATTR2,
          IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA2,
          ATTR_WHITESPACE: ATTR_WHITESPACE2
        } = EXPRESSIONS;
        let {
          IS_ALLOWED_URI: IS_ALLOWED_URI$1
        } = EXPRESSIONS;
        let ALLOWED_TAGS = null;
        const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);
        let ALLOWED_ATTR = null;
        const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html, ...svg, ...mathMl, ...xml]);
        let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
          tagNameCheck: {
            writable: true,
            configurable: false,
            enumerable: true,
            value: null
          },
          attributeNameCheck: {
            writable: true,
            configurable: false,
            enumerable: true,
            value: null
          },
          allowCustomizedBuiltInElements: {
            writable: true,
            configurable: false,
            enumerable: true,
            value: false
          }
        }));
        let FORBID_TAGS = null;
        let FORBID_ATTR = null;
        let ALLOW_ARIA_ATTR = true;
        let ALLOW_DATA_ATTR = true;
        let ALLOW_UNKNOWN_PROTOCOLS = false;
        let ALLOW_SELF_CLOSE_IN_ATTR = true;
        let SAFE_FOR_TEMPLATES = false;
        let WHOLE_DOCUMENT = false;
        let SET_CONFIG = false;
        let FORCE_BODY = false;
        let RETURN_DOM = false;
        let RETURN_DOM_FRAGMENT = false;
        let RETURN_TRUSTED_TYPE = false;
        let SANITIZE_DOM = true;
        let SANITIZE_NAMED_PROPS = false;
        const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
        let KEEP_CONTENT = true;
        let IN_PLACE = false;
        let USE_PROFILES = {};
        let FORBID_CONTENTS = null;
        const DEFAULT_FORBID_CONTENTS = addToSet({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
        let DATA_URI_TAGS = null;
        const DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
        let URI_SAFE_ATTRIBUTES = null;
        const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
        const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
        const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
        const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
        let NAMESPACE = HTML_NAMESPACE;
        let IS_EMPTY_INPUT = false;
        let ALLOWED_NAMESPACES = null;
        const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
        let PARSER_MEDIA_TYPE = null;
        const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
        const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
        let transformCaseFunc = null;
        let CONFIG = null;
        const formElement = document2.createElement("form");
        const isRegexOrFunction = function isRegexOrFunction2(testValue) {
          return testValue instanceof RegExp || testValue instanceof Function;
        };
        const _parseConfig = function _parseConfig2() {
          let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          if (CONFIG && CONFIG === cfg) {
            return;
          }
          if (!cfg || typeof cfg !== "object") {
            cfg = {};
          }
          cfg = clone(cfg);
          PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
          SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
          transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
          ALLOWED_TAGS = "ALLOWED_TAGS" in cfg ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
          ALLOWED_ATTR = "ALLOWED_ATTR" in cfg ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
          ALLOWED_NAMESPACES = "ALLOWED_NAMESPACES" in cfg ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
          URI_SAFE_ATTRIBUTES = "ADD_URI_SAFE_ATTR" in cfg ? addToSet(
            clone(DEFAULT_URI_SAFE_ATTRIBUTES),
            // eslint-disable-line indent
            cfg.ADD_URI_SAFE_ATTR,
            // eslint-disable-line indent
            transformCaseFunc
            // eslint-disable-line indent
          ) : DEFAULT_URI_SAFE_ATTRIBUTES;
          DATA_URI_TAGS = "ADD_DATA_URI_TAGS" in cfg ? addToSet(
            clone(DEFAULT_DATA_URI_TAGS),
            // eslint-disable-line indent
            cfg.ADD_DATA_URI_TAGS,
            // eslint-disable-line indent
            transformCaseFunc
            // eslint-disable-line indent
          ) : DEFAULT_DATA_URI_TAGS;
          FORBID_CONTENTS = "FORBID_CONTENTS" in cfg ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
          FORBID_TAGS = "FORBID_TAGS" in cfg ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
          FORBID_ATTR = "FORBID_ATTR" in cfg ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
          USE_PROFILES = "USE_PROFILES" in cfg ? cfg.USE_PROFILES : false;
          ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
          ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
          ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
          ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
          SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
          WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
          RETURN_DOM = cfg.RETURN_DOM || false;
          RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
          RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
          FORCE_BODY = cfg.FORCE_BODY || false;
          SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
          SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
          KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
          IN_PLACE = cfg.IN_PLACE || false;
          IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
          NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
          CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
          if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
            CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
          }
          if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
            CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
          }
          if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") {
            CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
          }
          if (SAFE_FOR_TEMPLATES) {
            ALLOW_DATA_ATTR = false;
          }
          if (RETURN_DOM_FRAGMENT) {
            RETURN_DOM = true;
          }
          if (USE_PROFILES) {
            ALLOWED_TAGS = addToSet({}, text);
            ALLOWED_ATTR = [];
            if (USE_PROFILES.html === true) {
              addToSet(ALLOWED_TAGS, html$1);
              addToSet(ALLOWED_ATTR, html);
            }
            if (USE_PROFILES.svg === true) {
              addToSet(ALLOWED_TAGS, svg$1);
              addToSet(ALLOWED_ATTR, svg);
              addToSet(ALLOWED_ATTR, xml);
            }
            if (USE_PROFILES.svgFilters === true) {
              addToSet(ALLOWED_TAGS, svgFilters);
              addToSet(ALLOWED_ATTR, svg);
              addToSet(ALLOWED_ATTR, xml);
            }
            if (USE_PROFILES.mathMl === true) {
              addToSet(ALLOWED_TAGS, mathMl$1);
              addToSet(ALLOWED_ATTR, mathMl);
              addToSet(ALLOWED_ATTR, xml);
            }
          }
          if (cfg.ADD_TAGS) {
            if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
              ALLOWED_TAGS = clone(ALLOWED_TAGS);
            }
            addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
          }
          if (cfg.ADD_ATTR) {
            if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
              ALLOWED_ATTR = clone(ALLOWED_ATTR);
            }
            addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
          }
          if (cfg.ADD_URI_SAFE_ATTR) {
            addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
          }
          if (cfg.FORBID_CONTENTS) {
            if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
              FORBID_CONTENTS = clone(FORBID_CONTENTS);
            }
            addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
          }
          if (KEEP_CONTENT) {
            ALLOWED_TAGS["#text"] = true;
          }
          if (WHOLE_DOCUMENT) {
            addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
          }
          if (ALLOWED_TAGS.table) {
            addToSet(ALLOWED_TAGS, ["tbody"]);
            delete FORBID_TAGS.tbody;
          }
          if (cfg.TRUSTED_TYPES_POLICY) {
            if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") {
              throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
            }
            if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") {
              throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
            }
            trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
            emptyHTML = trustedTypesPolicy.createHTML("");
          } else {
            if (trustedTypesPolicy === void 0) {
              trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
            }
            if (trustedTypesPolicy !== null && typeof emptyHTML === "string") {
              emptyHTML = trustedTypesPolicy.createHTML("");
            }
          }
          if (freeze) {
            freeze(cfg);
          }
          CONFIG = cfg;
        };
        const MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
        const HTML_INTEGRATION_POINTS = addToSet({}, ["foreignobject", "desc", "title", "annotation-xml"]);
        const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ["title", "style", "font", "a", "script"]);
        const ALL_SVG_TAGS = addToSet({}, [...svg$1, ...svgFilters, ...svgDisallowed]);
        const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
        const _checkValidNamespace = function _checkValidNamespace2(element) {
          let parent = getParentNode(element);
          if (!parent || !parent.tagName) {
            parent = {
              namespaceURI: NAMESPACE,
              tagName: "template"
            };
          }
          const tagName = stringToLowerCase(element.tagName);
          const parentTagName = stringToLowerCase(parent.tagName);
          if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
            return false;
          }
          if (element.namespaceURI === SVG_NAMESPACE) {
            if (parent.namespaceURI === HTML_NAMESPACE) {
              return tagName === "svg";
            }
            if (parent.namespaceURI === MATHML_NAMESPACE) {
              return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
            }
            return Boolean(ALL_SVG_TAGS[tagName]);
          }
          if (element.namespaceURI === MATHML_NAMESPACE) {
            if (parent.namespaceURI === HTML_NAMESPACE) {
              return tagName === "math";
            }
            if (parent.namespaceURI === SVG_NAMESPACE) {
              return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
            }
            return Boolean(ALL_MATHML_TAGS[tagName]);
          }
          if (element.namespaceURI === HTML_NAMESPACE) {
            if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
              return false;
            }
            if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
              return false;
            }
            return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
          }
          if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) {
            return true;
          }
          return false;
        };
        const _forceRemove = function _forceRemove2(node) {
          arrayPush(DOMPurify3.removed, {
            element: node
          });
          try {
            node.parentNode.removeChild(node);
          } catch (_) {
            node.remove();
          }
        };
        const _removeAttribute = function _removeAttribute2(name, node) {
          try {
            arrayPush(DOMPurify3.removed, {
              attribute: node.getAttributeNode(name),
              from: node
            });
          } catch (_) {
            arrayPush(DOMPurify3.removed, {
              attribute: null,
              from: node
            });
          }
          node.removeAttribute(name);
          if (name === "is" && !ALLOWED_ATTR[name]) {
            if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
              try {
                _forceRemove(node);
              } catch (_) {
              }
            } else {
              try {
                node.setAttribute(name, "");
              } catch (_) {
              }
            }
          }
        };
        const _initDocument = function _initDocument2(dirty) {
          let doc = null;
          let leadingWhitespace = null;
          if (FORCE_BODY) {
            dirty = "<remove></remove>" + dirty;
          } else {
            const matches = stringMatch(dirty, /^[\r\n\t ]+/);
            leadingWhitespace = matches && matches[0];
          }
          if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) {
            dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
          }
          const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
          if (NAMESPACE === HTML_NAMESPACE) {
            try {
              doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
            } catch (_) {
            }
          }
          if (!doc || !doc.documentElement) {
            doc = implementation.createDocument(NAMESPACE, "template", null);
            try {
              doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
            } catch (_) {
            }
          }
          const body = doc.body || doc.documentElement;
          if (dirty && leadingWhitespace) {
            body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
          }
          if (NAMESPACE === HTML_NAMESPACE) {
            return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
          }
          return WHOLE_DOCUMENT ? doc.documentElement : body;
        };
        const _createNodeIterator = function _createNodeIterator2(root) {
          return createNodeIterator.call(
            root.ownerDocument || root,
            root,
            // eslint-disable-next-line no-bitwise
            NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT,
            null
          );
        };
        const _isClobbered = function _isClobbered2(elm) {
          return elm instanceof HTMLFormElement && (typeof elm.nodeName !== "string" || typeof elm.textContent !== "string" || typeof elm.removeChild !== "function" || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== "function" || typeof elm.setAttribute !== "function" || typeof elm.namespaceURI !== "string" || typeof elm.insertBefore !== "function" || typeof elm.hasChildNodes !== "function");
        };
        const _isNode = function _isNode2(object) {
          return typeof Node === "function" && object instanceof Node;
        };
        const _executeHook = function _executeHook2(entryPoint, currentNode, data) {
          if (!hooks[entryPoint]) {
            return;
          }
          arrayForEach(hooks[entryPoint], (hook) => {
            hook.call(DOMPurify3, currentNode, data, CONFIG);
          });
        };
        const _sanitizeElements = function _sanitizeElements2(currentNode) {
          let content = null;
          _executeHook("beforeSanitizeElements", currentNode, null);
          if (_isClobbered(currentNode)) {
            _forceRemove(currentNode);
            return true;
          }
          const tagName = transformCaseFunc(currentNode.nodeName);
          _executeHook("uponSanitizeElement", currentNode, {
            tagName,
            allowedTags: ALLOWED_TAGS
          });
          if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
            _forceRemove(currentNode);
            return true;
          }
          if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
            if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
              if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) {
                return false;
              }
              if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) {
                return false;
              }
            }
            if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
              const parentNode = getParentNode(currentNode) || currentNode.parentNode;
              const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
              if (childNodes && parentNode) {
                const childCount = childNodes.length;
                for (let i = childCount - 1; i >= 0; --i) {
                  parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
                }
              }
            }
            _forceRemove(currentNode);
            return true;
          }
          if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
            _forceRemove(currentNode);
            return true;
          }
          if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
            _forceRemove(currentNode);
            return true;
          }
          if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
            content = currentNode.textContent;
            arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
              content = stringReplace(content, expr, " ");
            });
            if (currentNode.textContent !== content) {
              arrayPush(DOMPurify3.removed, {
                element: currentNode.cloneNode()
              });
              currentNode.textContent = content;
            }
          }
          _executeHook("afterSanitizeElements", currentNode, null);
          return false;
        };
        const _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
          if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) {
            return false;
          }
          if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR2, lcName))
            ;
          else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR2, lcName))
            ;
          else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              _isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))
            )
              ;
            else {
              return false;
            }
          } else if (URI_SAFE_ATTRIBUTES[lcName])
            ;
          else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE2, "")))
            ;
          else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag])
            ;
          else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA2, stringReplace(value, ATTR_WHITESPACE2, "")))
            ;
          else if (value) {
            return false;
          } else
            ;
          return true;
        };
        const _isBasicCustomElement = function _isBasicCustomElement2(tagName) {
          return tagName.indexOf("-") > 0;
        };
        const _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
          _executeHook("beforeSanitizeAttributes", currentNode, null);
          const {
            attributes
          } = currentNode;
          if (!attributes) {
            return;
          }
          const hookEvent = {
            attrName: "",
            attrValue: "",
            keepAttr: true,
            allowedAttributes: ALLOWED_ATTR
          };
          let l = attributes.length;
          while (l--) {
            const attr = attributes[l];
            const {
              name,
              namespaceURI,
              value: attrValue
            } = attr;
            const lcName = transformCaseFunc(name);
            let value = name === "value" ? attrValue : stringTrim(attrValue);
            hookEvent.attrName = lcName;
            hookEvent.attrValue = value;
            hookEvent.keepAttr = true;
            hookEvent.forceKeepAttr = void 0;
            _executeHook("uponSanitizeAttribute", currentNode, hookEvent);
            value = hookEvent.attrValue;
            if (hookEvent.forceKeepAttr) {
              continue;
            }
            _removeAttribute(name, currentNode);
            if (!hookEvent.keepAttr) {
              continue;
            }
            if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
              _removeAttribute(name, currentNode);
              continue;
            }
            if (SAFE_FOR_TEMPLATES) {
              arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
                value = stringReplace(value, expr, " ");
              });
            }
            const lcTag = transformCaseFunc(currentNode.nodeName);
            if (!_isValidAttribute(lcTag, lcName, value)) {
              continue;
            }
            if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
              _removeAttribute(name, currentNode);
              value = SANITIZE_NAMED_PROPS_PREFIX + value;
            }
            if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function") {
              if (namespaceURI)
                ;
              else {
                switch (trustedTypes.getAttributeType(lcTag, lcName)) {
                  case "TrustedHTML": {
                    value = trustedTypesPolicy.createHTML(value);
                    break;
                  }
                  case "TrustedScriptURL": {
                    value = trustedTypesPolicy.createScriptURL(value);
                    break;
                  }
                }
              }
            }
            try {
              if (namespaceURI) {
                currentNode.setAttributeNS(namespaceURI, name, value);
              } else {
                currentNode.setAttribute(name, value);
              }
              arrayPop(DOMPurify3.removed);
            } catch (_) {
            }
          }
          _executeHook("afterSanitizeAttributes", currentNode, null);
        };
        const _sanitizeShadowDOM = function _sanitizeShadowDOM2(fragment) {
          let shadowNode = null;
          const shadowIterator = _createNodeIterator(fragment);
          _executeHook("beforeSanitizeShadowDOM", fragment, null);
          while (shadowNode = shadowIterator.nextNode()) {
            _executeHook("uponSanitizeShadowNode", shadowNode, null);
            if (_sanitizeElements(shadowNode)) {
              continue;
            }
            if (shadowNode.content instanceof DocumentFragment) {
              _sanitizeShadowDOM2(shadowNode.content);
            }
            _sanitizeAttributes(shadowNode);
          }
          _executeHook("afterSanitizeShadowDOM", fragment, null);
        };
        DOMPurify3.sanitize = function(dirty) {
          let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          let body = null;
          let importedNode = null;
          let currentNode = null;
          let returnNode = null;
          IS_EMPTY_INPUT = !dirty;
          if (IS_EMPTY_INPUT) {
            dirty = "<!-->";
          }
          if (typeof dirty !== "string" && !_isNode(dirty)) {
            if (typeof dirty.toString === "function") {
              dirty = dirty.toString();
              if (typeof dirty !== "string") {
                throw typeErrorCreate("dirty is not a string, aborting");
              }
            } else {
              throw typeErrorCreate("toString is not a function");
            }
          }
          if (!DOMPurify3.isSupported) {
            return dirty;
          }
          if (!SET_CONFIG) {
            _parseConfig(cfg);
          }
          DOMPurify3.removed = [];
          if (typeof dirty === "string") {
            IN_PLACE = false;
          }
          if (IN_PLACE) {
            if (dirty.nodeName) {
              const tagName = transformCaseFunc(dirty.nodeName);
              if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
                throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
              }
            }
          } else if (dirty instanceof Node) {
            body = _initDocument("<!---->");
            importedNode = body.ownerDocument.importNode(dirty, true);
            if (importedNode.nodeType === 1 && importedNode.nodeName === "BODY") {
              body = importedNode;
            } else if (importedNode.nodeName === "HTML") {
              body = importedNode;
            } else {
              body.appendChild(importedNode);
            }
          } else {
            if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
            dirty.indexOf("<") === -1) {
              return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
            }
            body = _initDocument(dirty);
            if (!body) {
              return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
            }
          }
          if (body && FORCE_BODY) {
            _forceRemove(body.firstChild);
          }
          const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);
          while (currentNode = nodeIterator.nextNode()) {
            if (_sanitizeElements(currentNode)) {
              continue;
            }
            if (currentNode.content instanceof DocumentFragment) {
              _sanitizeShadowDOM(currentNode.content);
            }
            _sanitizeAttributes(currentNode);
          }
          if (IN_PLACE) {
            return dirty;
          }
          if (RETURN_DOM) {
            if (RETURN_DOM_FRAGMENT) {
              returnNode = createDocumentFragment.call(body.ownerDocument);
              while (body.firstChild) {
                returnNode.appendChild(body.firstChild);
              }
            } else {
              returnNode = body;
            }
            if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
              returnNode = importNode.call(originalDocument, returnNode, true);
            }
            return returnNode;
          }
          let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
          if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
            serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
          }
          if (SAFE_FOR_TEMPLATES) {
            arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
              serializedHTML = stringReplace(serializedHTML, expr, " ");
            });
          }
          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
        };
        DOMPurify3.setConfig = function() {
          let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          _parseConfig(cfg);
          SET_CONFIG = true;
        };
        DOMPurify3.clearConfig = function() {
          CONFIG = null;
          SET_CONFIG = false;
        };
        DOMPurify3.isValidAttribute = function(tag, attr, value) {
          if (!CONFIG) {
            _parseConfig({});
          }
          const lcTag = transformCaseFunc(tag);
          const lcName = transformCaseFunc(attr);
          return _isValidAttribute(lcTag, lcName, value);
        };
        DOMPurify3.addHook = function(entryPoint, hookFunction) {
          if (typeof hookFunction !== "function") {
            return;
          }
          hooks[entryPoint] = hooks[entryPoint] || [];
          arrayPush(hooks[entryPoint], hookFunction);
        };
        DOMPurify3.removeHook = function(entryPoint) {
          if (hooks[entryPoint]) {
            return arrayPop(hooks[entryPoint]);
          }
        };
        DOMPurify3.removeHooks = function(entryPoint) {
          if (hooks[entryPoint]) {
            hooks[entryPoint] = [];
          }
        };
        DOMPurify3.removeAllHooks = function() {
          hooks = {};
        };
        return DOMPurify3;
      }
      var purify = createDOMPurify2();
      return purify;
    });
  }
});

// ../node_modules/uuid/lib/bytesToUuid.js
var require_bytesToUuid = __commonJS({
  "../node_modules/uuid/lib/bytesToUuid.js"(exports, module) {
    var byteToHex = [];
    for (i = 0; i < 256; ++i) {
      byteToHex[i] = (i + 256).toString(16).substr(1);
    }
    var i;
    function bytesToUuid(buf, offset) {
      var i2 = offset || 0;
      var bth = byteToHex;
      return [
        bth[buf[i2++]],
        bth[buf[i2++]],
        bth[buf[i2++]],
        bth[buf[i2++]],
        "-",
        bth[buf[i2++]],
        bth[buf[i2++]],
        "-",
        bth[buf[i2++]],
        bth[buf[i2++]],
        "-",
        bth[buf[i2++]],
        bth[buf[i2++]],
        "-",
        bth[buf[i2++]],
        bth[buf[i2++]],
        bth[buf[i2++]],
        bth[buf[i2++]],
        bth[buf[i2++]],
        bth[buf[i2++]]
      ].join("");
    }
    module.exports = bytesToUuid;
  }
});

// ../node_modules/uuid/lib/v35.js
var require_v35 = __commonJS({
  "../node_modules/uuid/lib/v35.js"(exports, module) {
    var bytesToUuid = require_bytesToUuid();
    function uuidToBytes(uuid) {
      var bytes = [];
      uuid.replace(/[a-fA-F0-9]{2}/g, function(hex) {
        bytes.push(parseInt(hex, 16));
      });
      return bytes;
    }
    function stringToBytes(str) {
      str = unescape(encodeURIComponent(str));
      var bytes = new Array(str.length);
      for (var i = 0; i < str.length; i++) {
        bytes[i] = str.charCodeAt(i);
      }
      return bytes;
    }
    module.exports = function(name, version, hashfunc) {
      var generateUUID = function(value, namespace, buf, offset) {
        var off = buf && offset || 0;
        if (typeof value == "string")
          value = stringToBytes(value);
        if (typeof namespace == "string")
          namespace = uuidToBytes(namespace);
        if (!Array.isArray(value))
          throw TypeError("value must be an array of bytes");
        if (!Array.isArray(namespace) || namespace.length !== 16)
          throw TypeError("namespace must be uuid string or an Array of 16 byte values");
        var bytes = hashfunc(namespace.concat(value));
        bytes[6] = bytes[6] & 15 | version;
        bytes[8] = bytes[8] & 63 | 128;
        if (buf) {
          for (var idx = 0; idx < 16; ++idx) {
            buf[off + idx] = bytes[idx];
          }
        }
        return buf || bytesToUuid(bytes);
      };
      try {
        generateUUID.name = name;
      } catch (err) {
      }
      generateUUID.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
      generateUUID.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
      return generateUUID;
    };
  }
});

// ../node_modules/uuid/lib/sha1-browser.js
var require_sha1_browser = __commonJS({
  "../node_modules/uuid/lib/sha1-browser.js"(exports, module) {
    "use strict";
    function f(s, x, y, z) {
      switch (s) {
        case 0:
          return x & y ^ ~x & z;
        case 1:
          return x ^ y ^ z;
        case 2:
          return x & y ^ x & z ^ y & z;
        case 3:
          return x ^ y ^ z;
      }
    }
    function ROTL(x, n) {
      return x << n | x >>> 32 - n;
    }
    function sha1(bytes) {
      var K = [1518500249, 1859775393, 2400959708, 3395469782];
      var H = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if (typeof bytes == "string") {
        var msg = unescape(encodeURIComponent(bytes));
        bytes = new Array(msg.length);
        for (var i = 0; i < msg.length; i++)
          bytes[i] = msg.charCodeAt(i);
      }
      bytes.push(128);
      var l = bytes.length / 4 + 2;
      var N = Math.ceil(l / 16);
      var M = new Array(N);
      for (var i = 0; i < N; i++) {
        M[i] = new Array(16);
        for (var j = 0; j < 16; j++) {
          M[i][j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
        }
      }
      M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
      M[N - 1][14] = Math.floor(M[N - 1][14]);
      M[N - 1][15] = (bytes.length - 1) * 8 & 4294967295;
      for (var i = 0; i < N; i++) {
        var W = new Array(80);
        for (var t = 0; t < 16; t++)
          W[t] = M[i][t];
        for (var t = 16; t < 80; t++) {
          W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
        }
        var a = H[0];
        var b = H[1];
        var c = H[2];
        var d = H[3];
        var e = H[4];
        for (var t = 0; t < 80; t++) {
          var s = Math.floor(t / 20);
          var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
          e = d;
          d = c;
          c = ROTL(b, 30) >>> 0;
          b = a;
          a = T;
        }
        H[0] = H[0] + a >>> 0;
        H[1] = H[1] + b >>> 0;
        H[2] = H[2] + c >>> 0;
        H[3] = H[3] + d >>> 0;
        H[4] = H[4] + e >>> 0;
      }
      return [
        H[0] >> 24 & 255,
        H[0] >> 16 & 255,
        H[0] >> 8 & 255,
        H[0] & 255,
        H[1] >> 24 & 255,
        H[1] >> 16 & 255,
        H[1] >> 8 & 255,
        H[1] & 255,
        H[2] >> 24 & 255,
        H[2] >> 16 & 255,
        H[2] >> 8 & 255,
        H[2] & 255,
        H[3] >> 24 & 255,
        H[3] >> 16 & 255,
        H[3] >> 8 & 255,
        H[3] & 255,
        H[4] >> 24 & 255,
        H[4] >> 16 & 255,
        H[4] >> 8 & 255,
        H[4] & 255
      ];
    }
    module.exports = sha1;
  }
});

// ../node_modules/uuid/v5.js
var require_v5 = __commonJS({
  "../node_modules/uuid/v5.js"(exports, module) {
    var v35 = require_v35();
    var sha1 = require_sha1_browser();
    module.exports = v35("v5", 80, sha1);
  }
});

// ../node_modules/object-keys/isArguments.js
var require_isArguments = __commonJS({
  "../node_modules/object-keys/isArguments.js"(exports, module) {
    "use strict";
    var toStr = Object.prototype.toString;
    module.exports = function isArguments(value) {
      var str = toStr.call(value);
      var isArgs = str === "[object Arguments]";
      if (!isArgs) {
        isArgs = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && toStr.call(value.callee) === "[object Function]";
      }
      return isArgs;
    };
  }
});

// ../node_modules/object-keys/implementation.js
var require_implementation = __commonJS({
  "../node_modules/object-keys/implementation.js"(exports, module) {
    "use strict";
    var keysShim;
    if (!Object.keys) {
      has = Object.prototype.hasOwnProperty;
      toStr = Object.prototype.toString;
      isArgs = require_isArguments();
      isEnumerable = Object.prototype.propertyIsEnumerable;
      hasDontEnumBug = !isEnumerable.call({ toString: null }, "toString");
      hasProtoEnumBug = isEnumerable.call(function() {
      }, "prototype");
      dontEnums = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor"
      ];
      equalsConstructorPrototype = function(o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
      };
      excludedKeys = {
        $applicationCache: true,
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $onmozfullscreenchange: true,
        $onmozfullscreenerror: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true
      };
      hasAutomationEqualityBug = function() {
        if (typeof window === "undefined") {
          return false;
        }
        for (var k in window) {
          try {
            if (!excludedKeys["$" + k] && has.call(window, k) && window[k] !== null && typeof window[k] === "object") {
              try {
                equalsConstructorPrototype(window[k]);
              } catch (e) {
                return true;
              }
            }
          } catch (e) {
            return true;
          }
        }
        return false;
      }();
      equalsConstructorPrototypeIfNotBuggy = function(o) {
        if (typeof window === "undefined" || !hasAutomationEqualityBug) {
          return equalsConstructorPrototype(o);
        }
        try {
          return equalsConstructorPrototype(o);
        } catch (e) {
          return false;
        }
      };
      keysShim = function keys(object) {
        var isObject = object !== null && typeof object === "object";
        var isFunction = toStr.call(object) === "[object Function]";
        var isArguments = isArgs(object);
        var isString = isObject && toStr.call(object) === "[object String]";
        var theKeys = [];
        if (!isObject && !isFunction && !isArguments) {
          throw new TypeError("Object.keys called on a non-object");
        }
        var skipProto = hasProtoEnumBug && isFunction;
        if (isString && object.length > 0 && !has.call(object, 0)) {
          for (var i = 0; i < object.length; ++i) {
            theKeys.push(String(i));
          }
        }
        if (isArguments && object.length > 0) {
          for (var j = 0; j < object.length; ++j) {
            theKeys.push(String(j));
          }
        } else {
          for (var name in object) {
            if (!(skipProto && name === "prototype") && has.call(object, name)) {
              theKeys.push(String(name));
            }
          }
        }
        if (hasDontEnumBug) {
          var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
          for (var k = 0; k < dontEnums.length; ++k) {
            if (!(skipConstructor && dontEnums[k] === "constructor") && has.call(object, dontEnums[k])) {
              theKeys.push(dontEnums[k]);
            }
          }
        }
        return theKeys;
      };
    }
    var has;
    var toStr;
    var isArgs;
    var isEnumerable;
    var hasDontEnumBug;
    var hasProtoEnumBug;
    var dontEnums;
    var equalsConstructorPrototype;
    var excludedKeys;
    var hasAutomationEqualityBug;
    var equalsConstructorPrototypeIfNotBuggy;
    module.exports = keysShim;
  }
});

// ../node_modules/object-keys/index.js
var require_object_keys = __commonJS({
  "../node_modules/object-keys/index.js"(exports, module) {
    "use strict";
    var slice = Array.prototype.slice;
    var isArgs = require_isArguments();
    var origKeys = Object.keys;
    var keysShim = origKeys ? function keys(o) {
      return origKeys(o);
    } : require_implementation();
    var originalKeys = Object.keys;
    keysShim.shim = function shimObjectKeys() {
      if (Object.keys) {
        var keysWorksWithArguments = function() {
          var args = Object.keys(arguments);
          return args && args.length === arguments.length;
        }(1, 2);
        if (!keysWorksWithArguments) {
          Object.keys = function keys(object) {
            if (isArgs(object)) {
              return originalKeys(slice.call(object));
            }
            return originalKeys(object);
          };
        }
      } else {
        Object.keys = keysShim;
      }
      return Object.keys || keysShim;
    };
    module.exports = keysShim;
  }
});

// ../node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "../node_modules/has-symbols/shams.js"(exports, module) {
    "use strict";
    module.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (sym in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// ../node_modules/has-tostringtag/shams.js
var require_shams2 = __commonJS({
  "../node_modules/has-tostringtag/shams.js"(exports, module) {
    "use strict";
    var hasSymbols = require_shams();
    module.exports = function hasToStringTagShams() {
      return hasSymbols() && !!Symbol.toStringTag;
    };
  }
});

// ../node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "../node_modules/has-symbols/index.js"(exports, module) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// ../node_modules/has-proto/index.js
var require_has_proto = __commonJS({
  "../node_modules/has-proto/index.js"(exports, module) {
    "use strict";
    var test = {
      foo: {}
    };
    var $Object = Object;
    module.exports = function hasProto() {
      return { __proto__: test }.foo === test.foo && !({ __proto__: null } instanceof $Object);
    };
  }
});

// ../node_modules/function-bind/implementation.js
var require_implementation2 = __commonJS({
  "../node_modules/function-bind/implementation.js"(exports, module) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var toStr = Object.prototype.toString;
    var max = Math.max;
    var funcType = "[object Function]";
    var concatty = function concatty2(a, b) {
      var arr = [];
      for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
      }
      for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
      }
      return arr;
    };
    var slicy = function slicy2(arrLike, offset) {
      var arr = [];
      for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
      }
      return arr;
    };
    var joiny = function(arr, joiner) {
      var str = "";
      for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
          str += joiner;
        }
      }
      return str;
    };
    module.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slicy(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(
            this,
            concatty(args, arguments)
          );
          if (Object(result) === result) {
            return result;
          }
          return this;
        }
        return target.apply(
          that,
          concatty(args, arguments)
        );
      };
      var boundLength = max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = "$" + i;
      }
      bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// ../node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "../node_modules/function-bind/index.js"(exports, module) {
    "use strict";
    var implementation = require_implementation2();
    module.exports = Function.prototype.bind || implementation;
  }
});

// ../node_modules/hasown/index.js
var require_hasown = __commonJS({
  "../node_modules/hasown/index.js"(exports, module) {
    "use strict";
    var call = Function.prototype.call;
    var $hasOwn = Object.prototype.hasOwnProperty;
    var bind = require_function_bind();
    module.exports = bind.call(call, $hasOwn);
  }
});

// ../node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "../node_modules/get-intrinsic/index.js"(exports, module) {
    "use strict";
    var undefined2;
    var $SyntaxError = SyntaxError;
    var $Function = Function;
    var $TypeError = TypeError;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = Object.getOwnPropertyDescriptor;
    if ($gOPD) {
      try {
        $gOPD({}, "");
      } catch (e) {
        $gOPD = null;
      }
    }
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var hasProto = require_has_proto()();
    var getProto = Object.getPrototypeOf || (hasProto ? function(x) {
      return x.__proto__;
    } : null);
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      // eslint-disable-line no-eval
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
    };
    if (getProto) {
      try {
        null.error;
      } catch (e) {
        errorProto = getProto(getProto(e));
        INTRINSICS["%Error.prototype%"] = errorProto;
      }
    }
    var errorProto;
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen && getProto) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_hasown();
    var $concat = bind.call(Function.call, Array.prototype.concat);
    var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
    var $replace = bind.call(Function.call, String.prototype.replace);
    var $strSlice = bind.call(Function.call, String.prototype.slice);
    var $exec = bind.call(Function.call, RegExp.prototype.exec);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
  }
});

// ../node_modules/has-property-descriptors/index.js
var require_has_property_descriptors = __commonJS({
  "../node_modules/has-property-descriptors/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
    var hasPropertyDescriptors = function hasPropertyDescriptors2() {
      if ($defineProperty) {
        try {
          $defineProperty({}, "a", { value: 1 });
          return true;
        } catch (e) {
          return false;
        }
      }
      return false;
    };
    hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
      if (!hasPropertyDescriptors()) {
        return null;
      }
      try {
        return $defineProperty([], "length", { value: 1 }).length !== 1;
      } catch (e) {
        return true;
      }
    };
    module.exports = hasPropertyDescriptors;
  }
});

// ../node_modules/gopd/index.js
var require_gopd = __commonJS({
  "../node_modules/gopd/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    if ($gOPD) {
      try {
        $gOPD([], "length");
      } catch (e) {
        $gOPD = null;
      }
    }
    module.exports = $gOPD;
  }
});

// ../node_modules/define-data-property/index.js
var require_define_data_property = __commonJS({
  "../node_modules/define-data-property/index.js"(exports, module) {
    "use strict";
    var hasPropertyDescriptors = require_has_property_descriptors()();
    var GetIntrinsic = require_get_intrinsic();
    var $defineProperty = hasPropertyDescriptors && GetIntrinsic("%Object.defineProperty%", true);
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = false;
      }
    }
    var $SyntaxError = GetIntrinsic("%SyntaxError%");
    var $TypeError = GetIntrinsic("%TypeError%");
    var gopd = require_gopd();
    module.exports = function defineDataProperty(obj, property, value) {
      if (!obj || typeof obj !== "object" && typeof obj !== "function") {
        throw new $TypeError("`obj` must be an object or a function`");
      }
      if (typeof property !== "string" && typeof property !== "symbol") {
        throw new $TypeError("`property` must be a string or a symbol`");
      }
      if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
        throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
        throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
        throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
        throw new $TypeError("`loose`, if provided, must be a boolean");
      }
      var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
      var nonWritable = arguments.length > 4 ? arguments[4] : null;
      var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
      var loose = arguments.length > 6 ? arguments[6] : false;
      var desc = !!gopd && gopd(obj, property);
      if ($defineProperty) {
        $defineProperty(obj, property, {
          configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
          enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
          value,
          writable: nonWritable === null && desc ? desc.writable : !nonWritable
        });
      } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
        obj[property] = value;
      } else {
        throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
      }
    };
  }
});

// ../node_modules/set-function-length/index.js
var require_set_function_length = __commonJS({
  "../node_modules/set-function-length/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var define2 = require_define_data_property();
    var hasDescriptors = require_has_property_descriptors()();
    var gOPD = require_gopd();
    var $TypeError = GetIntrinsic("%TypeError%");
    var $floor = GetIntrinsic("%Math.floor%");
    module.exports = function setFunctionLength(fn, length) {
      if (typeof fn !== "function") {
        throw new $TypeError("`fn` is not a function");
      }
      if (typeof length !== "number" || length < 0 || length > 4294967295 || $floor(length) !== length) {
        throw new $TypeError("`length` must be a positive 32-bit integer");
      }
      var loose = arguments.length > 2 && !!arguments[2];
      var functionLengthIsConfigurable = true;
      var functionLengthIsWritable = true;
      if ("length" in fn && gOPD) {
        var desc = gOPD(fn, "length");
        if (desc && !desc.configurable) {
          functionLengthIsConfigurable = false;
        }
        if (desc && !desc.writable) {
          functionLengthIsWritable = false;
        }
      }
      if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
        if (hasDescriptors) {
          define2(fn, "length", length, true, true);
        } else {
          define2(fn, "length", length);
        }
      }
      return fn;
    };
  }
});

// ../node_modules/call-bind/index.js
var require_call_bind = __commonJS({
  "../node_modules/call-bind/index.js"(exports, module) {
    "use strict";
    var bind = require_function_bind();
    var GetIntrinsic = require_get_intrinsic();
    var setFunctionLength = require_set_function_length();
    var $TypeError = GetIntrinsic("%TypeError%");
    var $apply = GetIntrinsic("%Function.prototype.apply%");
    var $call = GetIntrinsic("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
    var $max = GetIntrinsic("%Math.max%");
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = null;
      }
    }
    module.exports = function callBind(originalFunction) {
      if (typeof originalFunction !== "function") {
        throw new $TypeError("a function is required");
      }
      var func = $reflectApply(bind, $call, arguments);
      return setFunctionLength(
        func,
        1 + $max(0, originalFunction.length - (arguments.length - 1)),
        true
      );
    };
    var applyBind = function applyBind2() {
      return $reflectApply(bind, $apply, arguments);
    };
    if ($defineProperty) {
      $defineProperty(module.exports, "apply", { value: applyBind });
    } else {
      module.exports.apply = applyBind;
    }
  }
});

// ../node_modules/call-bind/callBound.js
var require_callBound = __commonJS({
  "../node_modules/call-bind/callBound.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBind = require_call_bind();
    var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
    module.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = GetIntrinsic(name, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBind(intrinsic);
      }
      return intrinsic;
    };
  }
});

// ../node_modules/is-arguments/index.js
var require_is_arguments = __commonJS({
  "../node_modules/is-arguments/index.js"(exports, module) {
    "use strict";
    var hasToStringTag = require_shams2()();
    var callBound = require_callBound();
    var $toString = callBound("Object.prototype.toString");
    var isStandardArguments = function isArguments(value) {
      if (hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) {
        return false;
      }
      return $toString(value) === "[object Arguments]";
    };
    var isLegacyArguments = function isArguments(value) {
      if (isStandardArguments(value)) {
        return true;
      }
      return value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $toString(value) !== "[object Array]" && $toString(value.callee) === "[object Function]";
    };
    var supportsStandardArguments = function() {
      return isStandardArguments(arguments);
    }();
    isStandardArguments.isLegacyArguments = isLegacyArguments;
    module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
  }
});

// ../node_modules/define-properties/index.js
var require_define_properties = __commonJS({
  "../node_modules/define-properties/index.js"(exports, module) {
    "use strict";
    var keys = require_object_keys();
    var hasSymbols = typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
    var toStr = Object.prototype.toString;
    var concat = Array.prototype.concat;
    var defineDataProperty = require_define_data_property();
    var isFunction = function(fn) {
      return typeof fn === "function" && toStr.call(fn) === "[object Function]";
    };
    var supportsDescriptors = require_has_property_descriptors()();
    var defineProperty = function(object, name, value, predicate) {
      if (name in object) {
        if (predicate === true) {
          if (object[name] === value) {
            return;
          }
        } else if (!isFunction(predicate) || !predicate()) {
          return;
        }
      }
      if (supportsDescriptors) {
        defineDataProperty(object, name, value, true);
      } else {
        defineDataProperty(object, name, value);
      }
    };
    var defineProperties = function(object, map) {
      var predicates = arguments.length > 2 ? arguments[2] : {};
      var props = keys(map);
      if (hasSymbols) {
        props = concat.call(props, Object.getOwnPropertySymbols(map));
      }
      for (var i = 0; i < props.length; i += 1) {
        defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
      }
    };
    defineProperties.supportsDescriptors = !!supportsDescriptors;
    module.exports = defineProperties;
  }
});

// ../node_modules/object-is/implementation.js
var require_implementation3 = __commonJS({
  "../node_modules/object-is/implementation.js"(exports, module) {
    "use strict";
    var numberIsNaN = function(value) {
      return value !== value;
    };
    module.exports = function is(a, b) {
      if (a === 0 && b === 0) {
        return 1 / a === 1 / b;
      }
      if (a === b) {
        return true;
      }
      if (numberIsNaN(a) && numberIsNaN(b)) {
        return true;
      }
      return false;
    };
  }
});

// ../node_modules/object-is/polyfill.js
var require_polyfill = __commonJS({
  "../node_modules/object-is/polyfill.js"(exports, module) {
    "use strict";
    var implementation = require_implementation3();
    module.exports = function getPolyfill() {
      return typeof Object.is === "function" ? Object.is : implementation;
    };
  }
});

// ../node_modules/object-is/shim.js
var require_shim = __commonJS({
  "../node_modules/object-is/shim.js"(exports, module) {
    "use strict";
    var getPolyfill = require_polyfill();
    var define2 = require_define_properties();
    module.exports = function shimObjectIs() {
      var polyfill = getPolyfill();
      define2(Object, { is: polyfill }, {
        is: function testObjectIs() {
          return Object.is !== polyfill;
        }
      });
      return polyfill;
    };
  }
});

// ../node_modules/object-is/index.js
var require_object_is = __commonJS({
  "../node_modules/object-is/index.js"(exports, module) {
    "use strict";
    var define2 = require_define_properties();
    var callBind = require_call_bind();
    var implementation = require_implementation3();
    var getPolyfill = require_polyfill();
    var shim = require_shim();
    var polyfill = callBind(getPolyfill(), Object);
    define2(polyfill, {
      getPolyfill,
      implementation,
      shim
    });
    module.exports = polyfill;
  }
});

// ../node_modules/is-regex/index.js
var require_is_regex = __commonJS({
  "../node_modules/is-regex/index.js"(exports, module) {
    "use strict";
    var callBound = require_callBound();
    var hasToStringTag = require_shams2()();
    var has;
    var $exec;
    var isRegexMarker;
    var badStringifier;
    if (hasToStringTag) {
      has = callBound("Object.prototype.hasOwnProperty");
      $exec = callBound("RegExp.prototype.exec");
      isRegexMarker = {};
      throwRegexMarker = function() {
        throw isRegexMarker;
      };
      badStringifier = {
        toString: throwRegexMarker,
        valueOf: throwRegexMarker
      };
      if (typeof Symbol.toPrimitive === "symbol") {
        badStringifier[Symbol.toPrimitive] = throwRegexMarker;
      }
    }
    var throwRegexMarker;
    var $toString = callBound("Object.prototype.toString");
    var gOPD = Object.getOwnPropertyDescriptor;
    var regexClass = "[object RegExp]";
    module.exports = hasToStringTag ? function isRegex(value) {
      if (!value || typeof value !== "object") {
        return false;
      }
      var descriptor = gOPD(value, "lastIndex");
      var hasLastIndexDataProperty = descriptor && has(descriptor, "value");
      if (!hasLastIndexDataProperty) {
        return false;
      }
      try {
        $exec(value, badStringifier);
      } catch (e) {
        return e === isRegexMarker;
      }
    } : function isRegex(value) {
      if (!value || typeof value !== "object" && typeof value !== "function") {
        return false;
      }
      return $toString(value) === regexClass;
    };
  }
});

// ../node_modules/functions-have-names/index.js
var require_functions_have_names = __commonJS({
  "../node_modules/functions-have-names/index.js"(exports, module) {
    "use strict";
    var functionsHaveNames = function functionsHaveNames2() {
      return typeof (function f() {
      }).name === "string";
    };
    var gOPD = Object.getOwnPropertyDescriptor;
    if (gOPD) {
      try {
        gOPD([], "length");
      } catch (e) {
        gOPD = null;
      }
    }
    functionsHaveNames.functionsHaveConfigurableNames = function functionsHaveConfigurableNames() {
      if (!functionsHaveNames() || !gOPD) {
        return false;
      }
      var desc = gOPD(function() {
      }, "name");
      return !!desc && !!desc.configurable;
    };
    var $bind = Function.prototype.bind;
    functionsHaveNames.boundFunctionsHaveNames = function boundFunctionsHaveNames() {
      return functionsHaveNames() && typeof $bind === "function" && (function f() {
      }).bind().name !== "";
    };
    module.exports = functionsHaveNames;
  }
});

// ../node_modules/set-function-name/index.js
var require_set_function_name = __commonJS({
  "../node_modules/set-function-name/index.js"(exports, module) {
    "use strict";
    var define2 = require_define_data_property();
    var hasDescriptors = require_has_property_descriptors()();
    var functionsHaveConfigurableNames = require_functions_have_names().functionsHaveConfigurableNames();
    var $TypeError = TypeError;
    module.exports = function setFunctionName(fn, name) {
      if (typeof fn !== "function") {
        throw new $TypeError("`fn` is not a function");
      }
      var loose = arguments.length > 2 && !!arguments[2];
      if (!loose || functionsHaveConfigurableNames) {
        if (hasDescriptors) {
          define2(fn, "name", name, true, true);
        } else {
          define2(fn, "name", name);
        }
      }
      return fn;
    };
  }
});

// ../node_modules/regexp.prototype.flags/implementation.js
var require_implementation4 = __commonJS({
  "../node_modules/regexp.prototype.flags/implementation.js"(exports, module) {
    "use strict";
    var setFunctionName = require_set_function_name();
    var $Object = Object;
    var $TypeError = TypeError;
    module.exports = setFunctionName(function flags() {
      if (this != null && this !== $Object(this)) {
        throw new $TypeError("RegExp.prototype.flags getter called on non-object");
      }
      var result = "";
      if (this.hasIndices) {
        result += "d";
      }
      if (this.global) {
        result += "g";
      }
      if (this.ignoreCase) {
        result += "i";
      }
      if (this.multiline) {
        result += "m";
      }
      if (this.dotAll) {
        result += "s";
      }
      if (this.unicode) {
        result += "u";
      }
      if (this.unicodeSets) {
        result += "v";
      }
      if (this.sticky) {
        result += "y";
      }
      return result;
    }, "get flags", true);
  }
});

// ../node_modules/regexp.prototype.flags/polyfill.js
var require_polyfill2 = __commonJS({
  "../node_modules/regexp.prototype.flags/polyfill.js"(exports, module) {
    "use strict";
    var implementation = require_implementation4();
    var supportsDescriptors = require_define_properties().supportsDescriptors;
    var $gOPD = Object.getOwnPropertyDescriptor;
    module.exports = function getPolyfill() {
      if (supportsDescriptors && /a/mig.flags === "gim") {
        var descriptor = $gOPD(RegExp.prototype, "flags");
        if (descriptor && typeof descriptor.get === "function" && typeof RegExp.prototype.dotAll === "boolean" && typeof RegExp.prototype.hasIndices === "boolean") {
          var calls = "";
          var o = {};
          Object.defineProperty(o, "hasIndices", {
            get: function() {
              calls += "d";
            }
          });
          Object.defineProperty(o, "sticky", {
            get: function() {
              calls += "y";
            }
          });
          if (calls === "dy") {
            return descriptor.get;
          }
        }
      }
      return implementation;
    };
  }
});

// ../node_modules/regexp.prototype.flags/shim.js
var require_shim2 = __commonJS({
  "../node_modules/regexp.prototype.flags/shim.js"(exports, module) {
    "use strict";
    var supportsDescriptors = require_define_properties().supportsDescriptors;
    var getPolyfill = require_polyfill2();
    var gOPD = Object.getOwnPropertyDescriptor;
    var defineProperty = Object.defineProperty;
    var TypeErr = TypeError;
    var getProto = Object.getPrototypeOf;
    var regex = /a/;
    module.exports = function shimFlags() {
      if (!supportsDescriptors || !getProto) {
        throw new TypeErr("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
      }
      var polyfill = getPolyfill();
      var proto = getProto(regex);
      var descriptor = gOPD(proto, "flags");
      if (!descriptor || descriptor.get !== polyfill) {
        defineProperty(proto, "flags", {
          configurable: true,
          enumerable: false,
          get: polyfill
        });
      }
      return polyfill;
    };
  }
});

// ../node_modules/regexp.prototype.flags/index.js
var require_regexp_prototype = __commonJS({
  "../node_modules/regexp.prototype.flags/index.js"(exports, module) {
    "use strict";
    var define2 = require_define_properties();
    var callBind = require_call_bind();
    var implementation = require_implementation4();
    var getPolyfill = require_polyfill2();
    var shim = require_shim2();
    var flagsBound = callBind(getPolyfill());
    define2(flagsBound, {
      getPolyfill,
      implementation,
      shim
    });
    module.exports = flagsBound;
  }
});

// ../node_modules/is-date-object/index.js
var require_is_date_object = __commonJS({
  "../node_modules/is-date-object/index.js"(exports, module) {
    "use strict";
    var getDay = Date.prototype.getDay;
    var tryDateObject = function tryDateGetDayCall(value) {
      try {
        getDay.call(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var toStr = Object.prototype.toString;
    var dateClass = "[object Date]";
    var hasToStringTag = require_shams2()();
    module.exports = function isDateObject(value) {
      if (typeof value !== "object" || value === null) {
        return false;
      }
      return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
    };
  }
});

// ../node_modules/deep-equal/index.js
var require_deep_equal = __commonJS({
  "../node_modules/deep-equal/index.js"(exports, module) {
    var objectKeys = require_object_keys();
    var isArguments = require_is_arguments();
    var is = require_object_is();
    var isRegex = require_is_regex();
    var flags = require_regexp_prototype();
    var isDate = require_is_date_object();
    var getTime = Date.prototype.getTime;
    function deepEqual(actual, expected, options) {
      var opts = options || {};
      if (opts.strict ? is(actual, expected) : actual === expected) {
        return true;
      }
      if (!actual || !expected || typeof actual !== "object" && typeof expected !== "object") {
        return opts.strict ? is(actual, expected) : actual == expected;
      }
      return objEquiv(actual, expected, opts);
    }
    function isUndefinedOrNull(value) {
      return value === null || value === void 0;
    }
    function isBuffer(x) {
      if (!x || typeof x !== "object" || typeof x.length !== "number") {
        return false;
      }
      if (typeof x.copy !== "function" || typeof x.slice !== "function") {
        return false;
      }
      if (x.length > 0 && typeof x[0] !== "number") {
        return false;
      }
      return true;
    }
    function objEquiv(a, b, opts) {
      var i, key;
      if (typeof a !== typeof b) {
        return false;
      }
      if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) {
        return false;
      }
      if (a.prototype !== b.prototype) {
        return false;
      }
      if (isArguments(a) !== isArguments(b)) {
        return false;
      }
      var aIsRegex = isRegex(a);
      var bIsRegex = isRegex(b);
      if (aIsRegex !== bIsRegex) {
        return false;
      }
      if (aIsRegex || bIsRegex) {
        return a.source === b.source && flags(a) === flags(b);
      }
      if (isDate(a) && isDate(b)) {
        return getTime.call(a) === getTime.call(b);
      }
      var aIsBuffer = isBuffer(a);
      var bIsBuffer = isBuffer(b);
      if (aIsBuffer !== bIsBuffer) {
        return false;
      }
      if (aIsBuffer || bIsBuffer) {
        if (a.length !== b.length) {
          return false;
        }
        for (i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) {
            return false;
          }
        }
        return true;
      }
      if (typeof a !== typeof b) {
        return false;
      }
      try {
        var ka = objectKeys(a);
        var kb = objectKeys(b);
      } catch (e) {
        return false;
      }
      if (ka.length !== kb.length) {
        return false;
      }
      ka.sort();
      kb.sort();
      for (i = ka.length - 1; i >= 0; i--) {
        if (ka[i] != kb[i]) {
          return false;
        }
      }
      for (i = ka.length - 1; i >= 0; i--) {
        key = ka[i];
        if (!deepEqual(a[key], b[key], opts)) {
          return false;
        }
      }
      return true;
    }
    module.exports = deepEqual;
  }
});

// example1.tsx
var import_react7 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// ../serializer/dom.ts
var import_dompurify = __toESM(require_purify());
var JSDOM = void 0;
var DOMWindow = JSDOM ? new JSDOM("").window : window;
var DOMPurify = (0, import_dompurify.default)(DOMWindow);

// ../serializer/base.tsx
var import_react2 = __toESM(require_react());

// ../serializer/dynamic-component.tsx
var import_react = __toESM(require_react());
var ReactifiedElementWithHoverAndActive = class extends import_react.default.PureComponent {
  constructor(props) {
    super(props);
    this.refElement = import_react.default.createRef();
    this.state = {
      hover: false,
      active: false
    };
    this.onHoverStart = this.onHoverStart.bind(this);
    this.onHoverEnd = this.onHoverEnd.bind(this);
    this.onActiveEnd = this.onActiveEnd.bind(this);
    this.onActiveStart = this.onActiveStart.bind(this);
  }
  onHoverStart(originalFn, e) {
    this.setState({
      hover: true
    });
    originalFn && originalFn(e);
  }
  onHoverEnd(originalFn, e) {
    this.setState({
      hover: false
    });
    originalFn && originalFn(e);
  }
  onActiveStart(originalFn, e) {
    this.setState({
      active: true
    });
    originalFn && originalFn(e);
  }
  onActiveEnd(originalFn, e) {
    this.setState({
      active: false
    });
    originalFn && originalFn(e);
  }
  getElement() {
    return this.refElement.current;
  }
  render() {
    const Component = this.props.Component;
    const standardProps = __spreadValues({}, this.props);
    delete standardProps.Component;
    delete standardProps.styleHover;
    delete standardProps.styleActive;
    const styleUsed = __spreadValues(__spreadValues(__spreadValues({}, this.props.style), this.state.hover ? this.props.styleHover : null), this.state.active ? this.props.styleActive : null);
    standardProps.style = styleUsed;
    if (this.props.styleHover) {
      standardProps.onMouseEnter = this.onHoverStart.bind(null, this.props.onMouseEnter);
      standardProps.onMouseLeave = this.onHoverEnd.bind(null, this.props.onMouseLeave);
    }
    if (this.props.styleActive) {
      standardProps.onTouchStart = this.onActiveStart.bind(null, this.props.onTouchStart);
      standardProps.onTouchEnd = this.onActiveEnd.bind(null, this.props.onTouchEnd);
      standardProps.onMouseDown = this.onActiveStart.bind(null, this.props.onMouseDown);
      standardProps.onMouseUp = this.onActiveEnd.bind(null, this.props.onMouseUp);
    }
    return /* @__PURE__ */ import_react.default.createElement(Component, __spreadProps(__spreadValues({}, standardProps), { ref: this.refElement }));
  }
};

// ../serializer/template-args.ts
var NonRootInheritable = class {
  constructor(value) {
    this.value = value;
  }
};
var TemplateArgs = class {
  constructor(properties) {
    this.properties = properties;
  }
  wrappedBy(w) {
    this.wrapper = w;
    return this;
  }
};
var MutatingTemplateArgs = class {
  constructor(mutatingWrapper) {
    this.mutatingWrapper = mutatingWrapper;
  }
};
var MutatingFunctionArg = class {
  constructor(mutatingFunctionWrapper) {
    this.mutatingFunctionWrapper = mutatingFunctionWrapper;
  }
};

// ../serializer/base.tsx
function convertStylePropertyToCamelCase(str) {
  const splitted = str.split("-");
  if (splitted.length === 1) {
    return splitted[0];
  }
  return splitted[0] + splitted.slice(1).map((word) => word[0].toUpperCase() + word.slice(1)).join("");
}
function convertStyleStringToReactObject(str) {
  if (!str) {
    return null;
  }
  const style = {};
  str.split(";").forEach((el) => {
    const elTrimmed = el.trim();
    if (!elTrimmed) {
      return;
    }
    const [property, value] = el.split(":");
    if (!property || !value) {
      return;
    }
    const formattedProperty = convertStylePropertyToCamelCase(property.trim());
    const formattedValue = value.trim();
    if (formattedProperty === "position" && formattedValue === "fixed") {
      return;
    }
    style[formattedProperty] = formattedValue;
  });
  if (Object.keys(style).length === 0) {
    return null;
  }
  return style;
}
function recurseAndConsumeMutatingActions(basicActions, mutatingActions, children) {
  const mutatingActionsKeys = Object.keys(mutatingActions);
  if (mutatingActionsKeys.length === 0) {
    return children(basicActions);
  }
  const keyToPick = mutatingActionsKeys[0];
  const value = mutatingActions[keyToPick];
  return value.mutatingFunctionWrapper((fn) => {
    const newBasicActions = __spreadProps(__spreadValues({}, basicActions), {
      [keyToPick]: fn
    });
    const newMutatingActions = __spreadValues({}, mutatingActions);
    delete newMutatingActions[keyToPick];
    return recurseAndConsumeMutatingActions(newBasicActions, newMutatingActions, children);
  }, keyToPick);
}
function retrieveElementActionsForReact(base, context, rootContext, children) {
  if (!context && !rootContext) {
    return children({});
  }
  const basicActions = {};
  const mutatingActions = {};
  Object.keys(eventReactifyTranslations).forEach((key) => {
    const value = base[key];
    if (value) {
      let contextValue = context && context.properties[value];
      if (contextValue instanceof NonRootInheritable) {
        contextValue = contextValue.value;
      } else if (!contextValue) {
        contextValue = rootContext && rootContext.properties[value];
        if (contextValue instanceof NonRootInheritable) {
          contextValue = null;
        }
      }
      if (contextValue) {
        const translation = eventReactifyTranslations[key];
        if (contextValue instanceof MutatingFunctionArg) {
          mutatingActions[translation] = contextValue;
        } else {
          basicActions[translation] = contextValue;
        }
      }
    }
  });
  if (Object.keys(mutatingActions).length === 0) {
    return children(basicActions);
  }
  return recurseAndConsumeMutatingActions(basicActions, mutatingActions, children);
}
var translations = {
  givenName: "data-name",
  ifCondition: "data-if",
  html: "data-html",
  textContent: "data-text",
  style: "style",
  styleHover: "data-style-hover",
  styleActive: "data-style-active",
  uiHandler: "data-ui-handler",
  context: "data-context",
  forEach: "data-for-each",
  click: "data-on-click",
  blur: "data-on-blur",
  focus: "data-on-focus",
  input: "data-on-input",
  keydown: "data-on-keydown",
  keypress: "data-on-keypress",
  keyup: "data-on-keyup",
  mousedown: "data-on-mousedown",
  mouseenter: "data-on-mouseenter",
  mouseleave: "data-on-mouseleave",
  mousemove: "data-on-mousemove",
  mouseover: "data-on-mouseover",
  mouseout: "data-on-mouseout",
  mouseup: "data-on-mouseup",
  mousewheel: "data-on-mousewheel",
  touchstart: "data-on-touchstart",
  touchmove: "data-on-touchmove",
  touchend: "data-on-touchend",
  touchcancel: "data-on-touchcancel",
  wheel: "data-on-wheel"
};
var eventReactifyTranslations = {
  click: "onClick",
  blur: "onBlur",
  focus: "onFocus",
  input: "onInput",
  keydown: "onKeyDown",
  keypress: "onKeyPress",
  keyup: "onKeyUp",
  mousedown: "onMouseDown",
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  mousemove: "onMouseMove",
  mouseover: "onMouseOver",
  mouseout: "onMouseOut",
  mouseup: "onMouseUp",
  mousewheel: "onMouseWheel",
  touchstart: "onTouchStart",
  touchmove: "onTouchMove",
  touchend: "onTouchEnd",
  touchcancel: "onTouchCancel",
  wheel: "onWheel"
};
function serializeElementBase(registry, base, tag, baseClass, attrs, children) {
  const elementComponent = DOMWindow.document.createElement(tag);
  if (baseClass) {
    elementComponent.classList.add(baseClass);
  }
  if (attrs) {
    Object.keys(attrs).forEach((attr) => {
      elementComponent.setAttribute(attr, attrs[attr]);
    });
  }
  if (base.richClassList) {
    base.richClassList.forEach((c) => {
      elementComponent.classList.add("rich-text--" + c);
    });
  }
  Object.keys(base).forEach((k) => {
    if (translations[k] && typeof base[k] !== "undefined" && base[k] !== null) {
      elementComponent.setAttribute(translations[k], base[k]);
    }
  });
  if (base.uiHandlerArgs) {
    Object.keys(base.uiHandlerArgs).forEach((arg) => {
      elementComponent.dataset[arg] = base.uiHandlerArgs[arg];
    });
  }
  if (children) {
    children.forEach((c) => {
      if (c.text) {
        const textNode = registry.SERIALIZE.text(c);
        elementComponent.appendChild(textNode);
      } else if (registry.SERIALIZE[c.type]) {
        const fn = registry.SERIALIZE[c.type];
        const childElement = fn(c);
        elementComponent.appendChild(childElement);
      }
    });
  }
  return elementComponent;
}
var VOID_TAGS_UNMANAGED = [
  "br",
  "hr",
  "area",
  "base",
  "col",
  "command",
  "embed",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
];
function reactifyElementBase(registry, Tag, baseClass, children, wrapChildren, arg) {
  const base = arg.element;
  let currentTemplateArgs = arg.templateArgs;
  let currentTemplateRootArgs = arg.templateRootArgs || arg.templateArgs;
  if (arg.asTemplate && !arg.templateIgnoreContextualChanges) {
    let newTemplateArgs = currentTemplateArgs;
    if (newTemplateArgs && base.context) {
      newTemplateArgs = newTemplateArgs.properties[base.context] || null;
      if (!(newTemplateArgs instanceof TemplateArgs) || !(newTemplateArgs instanceof MutatingTemplateArgs)) {
        console.warn("When changing to context " + base.context + " could not find an actual template args context");
      }
    }
    if (base.forEach) {
      const renderEachBasedOnContext = (resolvedContext) => {
        if (base.ifCondition) {
          const value = resolvedContext.properties[base.ifCondition];
          if (!value) {
            return null;
          }
        }
        const loopElementBase = resolvedContext && resolvedContext.properties[base.forEach];
        const childrenRenderFn = (eachElementContext, key) => {
          return reactifyElementBase(
            registry,
            Tag,
            baseClass,
            children,
            wrapChildren,
            {
              active: arg.active,
              selected: arg.selected,
              element: base,
              asTemplate: true,
              customProps: arg.customProps,
              key,
              templateArgs: eachElementContext,
              templateRootArgs: currentTemplateRootArgs,
              templateIgnoreContextualChanges: true,
              extraOptions: arg.extraOptions,
              parent: arg.parent,
              tree: arg.tree
            }
          );
        };
        if (Array.isArray(loopElementBase)) {
          return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, { key: arg.key }, loopElementBase.map((loopContext, index) => {
            if (!(loopContext instanceof TemplateArgs)) {
              throw new Error("Could not find a proper context value for item in index " + index + " at " + base.forEach);
            }
            return childrenRenderFn(loopContext, index);
          }));
        } else if (loopElementBase instanceof MutatingTemplateArgs) {
          return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, { key: arg.key }, loopElementBase.mutatingWrapper(childrenRenderFn));
        } else {
          return null;
        }
      };
      if (newTemplateArgs instanceof MutatingTemplateArgs) {
        return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, { key: arg.key }, newTemplateArgs.mutatingWrapper(renderEachBasedOnContext));
      } else {
        return renderEachBasedOnContext(newTemplateArgs);
      }
    } else if (newTemplateArgs instanceof MutatingTemplateArgs) {
      return newTemplateArgs.mutatingWrapper((newContext) => {
        return reactifyElementBase(
          registry,
          Tag,
          baseClass,
          children,
          wrapChildren,
          {
            active: arg.active,
            selected: arg.selected,
            element: base,
            asTemplate: true,
            customProps: arg.customProps,
            key: arg.key,
            templateArgs: newContext,
            templateRootArgs: currentTemplateRootArgs,
            templateIgnoreContextualChanges: true,
            extraOptions: arg.extraOptions,
            parent: arg.parent,
            tree: arg.tree
          }
        );
      });
    } else {
      currentTemplateArgs = newTemplateArgs;
    }
  }
  if (arg.asTemplate && base.ifCondition) {
    const value = currentTemplateArgs && currentTemplateArgs.properties[base.ifCondition];
    if (!value) {
      return null;
    }
  }
  if (arg.asTemplate && base.uiHandler) {
    let Handler = currentTemplateArgs && currentTemplateArgs.properties[base.uiHandler];
    if (Handler instanceof NonRootInheritable) {
      Handler = Handler.value;
    } else if (!Handler) {
      Handler = currentTemplateRootArgs && currentTemplateRootArgs.properties[base.uiHandler];
      if (Handler instanceof NonRootInheritable) {
        Handler = null;
      }
    }
    if (Handler) {
      const handlerChildren = children ? children.map((c, index) => {
        const specificChildTemplateOptions = {
          asTemplate: arg.asTemplate,
          active: arg.active,
          selected: arg.selected,
          element: c,
          templateArgs: currentTemplateArgs,
          templateRootArgs: currentTemplateRootArgs,
          key: index,
          extraOptions: arg.extraOptions,
          parent: base,
          tree: arg.tree
        };
        if (c.text) {
          return registry.REACTIFY.text(specificChildTemplateOptions);
        } else if (registry.SERIALIZE[c.type]) {
          return registry.REACTIFY[c.type](specificChildTemplateOptions);
        }
        return null;
      }) : children;
      let className = null;
      base.richClassList && base.richClassList.forEach((c) => {
        className = (className || "") + " rich-text--" + c;
      });
      const style = convertStyleStringToReactObject(base.style);
      const styleActive = convertStyleStringToReactObject(base.styleActive);
      const styleHover = convertStyleStringToReactObject(base.styleHover);
      return /* @__PURE__ */ import_react2.default.createElement(
        import_react2.default.Fragment,
        { key: arg.key },
        // and we extract the potential events from the current template arguments
        // that are used in the given base to pass it to the ui handler so it decides
        // what to do with them
        retrieveElementActionsForReact(base, currentTemplateArgs, currentTemplateRootArgs, (events) => /* @__PURE__ */ import_react2.default.createElement(
          Handler,
          {
            args: base.uiHandlerArgs,
            children: handlerChildren,
            element: arg.element,
            className,
            style,
            styleActive,
            styleHover,
            events
          }
        ))
      );
    }
  }
  const finalProps = __spreadValues({}, arg.customProps);
  if (!arg.active) {
    finalProps.className = (finalProps.className || "") + " inactive";
  } else {
    finalProps.className = (finalProps.className || "") + " active";
  }
  if (arg.selected) {
    finalProps.className = (finalProps.className || "") + " selected";
  }
  if (baseClass) {
    finalProps.className = (finalProps.className || "") + " " + baseClass;
  }
  if (base.richClassList) {
    base.richClassList.forEach((c) => {
      finalProps.className = (finalProps.className || "") + " rich-text--" + c;
    });
  }
  if ((typeof base.html === "string" || typeof base.textContent === "string") && !arg.active) {
    finalProps.className = (finalProps.className || "") + " template";
  }
  if (base.style) {
    finalProps.style = __spreadValues(__spreadValues({}, convertStyleStringToReactObject(base.style)), finalProps.style);
  }
  if (arg.asTemplate && typeof base.html === "string" && !VOID_TAGS_UNMANAGED.includes(Tag)) {
    delete finalProps.children;
    let value = currentTemplateArgs && currentTemplateArgs.properties[base.html];
    if (value instanceof NonRootInheritable) {
      value = value.value;
    } else if (!value) {
      value = currentTemplateRootArgs && currentTemplateRootArgs.properties[base.html];
      if (value instanceof NonRootInheritable) {
        value = null;
      }
    }
    if (value) {
      if (typeof value === "string") {
        finalProps.dangerouslySetInnerHTML = { __html: value };
      } else {
        finalProps.children = value;
      }
    } else {
      finalProps.children = null;
    }
  } else if (arg.asTemplate && typeof base.textContent === "string" && !VOID_TAGS_UNMANAGED.includes(Tag)) {
    delete finalProps.children;
    let value = currentTemplateArgs && currentTemplateArgs.properties[base.textContent];
    if (value instanceof NonRootInheritable) {
      value = value.value;
    } else if (!value) {
      value = currentTemplateRootArgs && currentTemplateRootArgs.properties[base.textContent];
      if (value instanceof NonRootInheritable) {
        value = null;
      }
    }
    if (typeof value === "string") {
      finalProps.children = value;
    } else {
      finalProps.children = null;
    }
  } else if (!finalProps.children && children && children.length) {
    const childrenBase = /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, children.map((c, index) => {
      const specificChildTemplateOptions = {
        asTemplate: arg.asTemplate,
        active: arg.active,
        selected: arg.selected,
        element: c,
        templateArgs: currentTemplateArgs,
        templateRootArgs: currentTemplateRootArgs,
        key: index,
        extraOptions: arg.extraOptions,
        parent: base,
        tree: arg.tree
      };
      if (c.text) {
        return registry.REACTIFY.text(specificChildTemplateOptions);
      } else if (registry.SERIALIZE[c.type]) {
        return registry.REACTIFY[c.type](specificChildTemplateOptions);
      }
      return null;
    }));
    if ((base.context || base.forEach) && currentTemplateArgs && currentTemplateArgs.wrapper) {
      finalProps.children = currentTemplateArgs.wrapper(childrenBase);
    } else {
      finalProps.children = childrenBase;
    }
  }
  if (wrapChildren && finalProps.children) {
    finalProps.children = wrapChildren(finalProps.children);
  }
  if (arg.extraOptions && arg.extraOptions.onCustomAttributesFor) {
    const extraProps = arg.extraOptions.onCustomAttributesFor(base);
    if (extraProps) {
      Object.keys(extraProps).forEach((attr) => {
        finalProps[attr] = extraProps[attr];
      });
    }
  }
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, { key: arg.key }, retrieveElementActionsForReact(base, currentTemplateArgs, currentTemplateRootArgs, (events) => {
    const defaultReturn = (pstyleActive, pstyleHover, extraProps) => {
      if (base.styleActive || base.styleHover) {
        const styleActive = pstyleActive || convertStyleStringToReactObject(base.styleActive);
        const styleHover = pstyleHover || convertStyleStringToReactObject(base.styleHover);
        const propsForThis = __spreadProps(__spreadValues(__spreadValues({}, finalProps), events), {
          Component: Tag,
          styleActive,
          styleHover
        });
        if (extraProps) {
          Object.assign(propsForThis, extraProps);
        }
        return /* @__PURE__ */ import_react2.default.createElement(ReactifiedElementWithHoverAndActive, __spreadValues({}, propsForThis));
      } else {
        if (extraProps) {
          return /* @__PURE__ */ import_react2.default.createElement(Tag, __spreadValues(__spreadValues(__spreadValues({}, finalProps), extraProps), events));
        }
        return /* @__PURE__ */ import_react2.default.createElement(Tag, __spreadValues(__spreadValues({}, finalProps), events));
      }
      ;
    };
    let toRender;
    if (arg.extraOptions && arg.extraOptions.onCustom) {
      const styleActive = base.styleActive ? convertStyleStringToReactObject(base.styleActive) : null;
      const styleHover = base.styleHover ? convertStyleStringToReactObject(base.styleHover) : null;
      toRender = arg.extraOptions.onCustom(
        base,
        __spreadValues(__spreadValues({}, finalProps), events),
        {
          Tag,
          styleActive,
          styleHover,
          defaultReturn: defaultReturn.bind(null, styleActive, styleHover),
          parent: arg.parent,
          tree: arg.tree
        }
      );
    } else {
      toRender = defaultReturn();
    }
    if (arg.extraOptions && arg.extraOptions.onCustomWrap) {
      return arg.extraOptions.onCustomWrap(base, toRender);
    } else {
      return toRender;
    }
  }));
}
function deserializeElementBase(node) {
  if (!node) {
    return {};
  }
  const result = {};
  if (node.classList) {
    node.classList.forEach((c) => {
      if (c.startsWith("rich-text--")) {
        result.richClassList = result.richClassList || [];
        result.richClassList.push(c.substr(11));
      }
    });
  }
  Object.keys(translations).forEach((tKey) => {
    const attr = translations[tKey];
    const value = node.getAttribute(attr);
    if (value) {
      result[tKey] = value;
    }
  });
  if (result.uiHandler && node.dataset) {
    result.uiHandlerArgs = {};
    Object.keys(node.dataset).forEach((datasetKey) => {
      result.uiHandlerArgs[datasetKey] = node.dataset[datasetKey];
    });
  }
  return result;
}
var ELEMENT_BASE_KEYS = [
  ...Object.keys(translations),
  "richClassList",
  "uiHandlerArgs"
];
function copyElementBase(src) {
  if (!src) {
    return {};
  }
  const newObj = {};
  Object.keys(src).forEach((key) => {
    if (ELEMENT_BASE_KEYS.includes(key)) {
      newObj[key] = src[key];
    }
  });
  return newObj;
}

// ../sanitizer/index.ts
var import_dompurify2 = __toESM(require_purify());
var SANITIZE_CONFIG = {
  // iframes are allowed, no sources are expected from the server side anyway
  ADD_TAGS: ["iframe"],
  // but src are still allowed here for a simple reason, as they are defined by the post processing hook
  ADD_ATTR: ["frameborder", "allow", "allowfullscreen", "scrolling", "src", "spellcheck", "contenteditable"],
  // and these can be blob so we must allow them
  ALLOW_UNKNOWN_PROTOCOLS: true
};
var ALLOWED_CLASSES = [
  "image",
  "image-container",
  "image-pad",
  "video",
  "video-container",
  "file",
  "file-container",
  "file-icon",
  "file-name",
  "file-extension",
  "file-size",
  "container",
  "inline",
  "void-block",
  "void-inline",
  "void-superblock"
];
var RICH_TEXT_CLASS_PREFIX = "rich-text--";
var CONTAINER_CLASS = "container";
var CONTAINER_CLASS_PREFIX = CONTAINER_CLASS + "-";
var CUSTOM_CLASS_PREFIX = "custom-";
var TABLE_CLASS_PREFIX = "table-";
var ALLOWED_CLASSES_PREFIXES = [
  RICH_TEXT_CLASS_PREFIX,
  CONTAINER_CLASS_PREFIX,
  CUSTOM_CLASS_PREFIX,
  TABLE_CLASS_PREFIX
];
var SUPPORTED_TEMPLATE_STYLES = [
  "hover",
  "active"
];
function sanitize(options, featureSupport, value) {
  import_dompurify2.default.addHook("afterSanitizeElements", postprocess.bind(this, options, featureSupport));
  const newValue = import_dompurify2.default.sanitize(value, SANITIZE_CONFIG);
  import_dompurify2.default.removeAllHooks();
  return newValue;
}
function postprocess(options, featureSupport, node) {
  if (node.tagName === "IFRAME") {
    if (featureSupport.supportsVideos) {
      const videoSrc = node.dataset.videoSrc || "";
      const origin = node.dataset.videoOrigin || "";
      node.allowFullscreen = true;
      if (origin === "vimeo") {
        node.setAttribute("src", "https://player.vimeo.com/video/".concat(videoSrc, "?title=0&byline=0&portrait=0&badge=0"));
      } else if (origin === "youtube") {
        node.setAttribute("src", "https://youtube.com/embed/".concat(videoSrc, "?rel=0"));
      }
      node.frameBorder = "0";
      node.dataset.videoSrc = videoSrc;
      node.dataset.videoOrigin = origin;
      node.allowFullscreen = true;
    } else {
      node.parentElement && node.parentElement.removeChild(node);
    }
  } else if (node.tagName === "IMG") {
    if (featureSupport.supportsImages) {
      const srcId = node.dataset.srcId;
      const alt = node.alt || "";
      const srcHeight = node.dataset.srcHeight;
      const srcWidth = node.dataset.srcWidth;
      const sizes = node.sizes || "70vw";
      node.setAttribute("loading", "lazy");
      const currentFile = srcId ? options.fileResolver(srcId, true, node) : null;
      if (!currentFile) {
        const src = node.getAttribute("src") || "";
        if (
          //image-pad
          node.parentElement && //image-container
          node.parentElement.parentElement && //image
          node.parentElement.parentElement.parentElement && node.parentElement.parentElement.parentElement.tagName === "A" && node.parentElement.parentElement.parentElement.classList.contains("image")
        ) {
          node.parentElement.parentElement.parentElement.removeAttribute("href");
          if (options.mail && !src.startsWith("cid") || !options.mail) {
            node.parentElement.parentElement.parentElement.parentElement.removeChild(node.parentElement.parentElement.parentElement);
          }
        } else if (options.mail && !src.startsWith("cid") || !options.mail) {
          node.parentElement && node.parentElement.removeChild(node);
        }
      } else {
        if (!options.mail && currentFile.srcSet) {
          node.setAttribute("srcset", currentFile.srcSet);
        } else {
          node.removeAttribute("srcset");
        }
        node.setAttribute("src", currentFile.src);
        if (options.mail && !currentFile.src.startsWith("cid:")) {
          console.warn("You have created a postprocessing pipeline for an email and the source does not start with 'cid:' the value is " + JSON.stringify(currentFile.src));
        }
        if (
          //image-pad
          node.parentElement && //image-container
          node.parentElement.parentElement && //image
          node.parentElement.parentElement.parentElement && node.parentElement.parentElement.parentElement.tagName === "A" && node.parentElement.parentElement.parentElement.classList.contains("image")
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
            image.parentElement.replaceChild(
              newImage,
              image
            );
          }
        }
        if (!options.mail) {
          node.setAttribute("sizes", sizes);
          node.dataset.srcWidth = srcWidth;
          node.dataset.srcId = srcId;
          node.dataset.srcHeight = srcHeight;
        } else {
          node.removeAttribute("sizes");
          delete node.dataset.srcId;
          delete node.dataset.srcWidth;
          delete node.dataset.srcHeight;
        }
        node.alt = alt;
      }
    } else {
      node.parentElement && node.parentElement.removeChild(node);
    }
  } else if (node.className === "file") {
    if (featureSupport.supportsFiles) {
      const srcId = node.dataset.srcId;
      const currentFile = options.fileResolver(
        srcId,
        false,
        node
      );
      if (options.mail) {
        if (currentFile) {
          options.mailShouldAttachFile && options.mailShouldAttachFile(srcId);
        }
        node.parentElement && node.parentElement.removeChild(node);
      } else if (currentFile) {
        node.spellcheck = false;
        node.dataset.srcId = srcId;
        if (currentFile) {
          node.setAttribute("href", currentFile.src);
        } else {
          node.removeAttribute("href");
        }
        node.contentEditable = "false";
        node.className = "file";
      } else {
        node.removeAttribute("href");
      }
    } else {
      node.parentElement && node.parentElement.removeChild(node);
    }
  }
  if (node.tagName === "A" && (node.hasAttribute("href") || node.hasAttribute("data-href")) && !node.classList.contains("image") && !node.classList.contains("file")) {
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
    if (featureSupport.supportsContainers) {
      if (!node.classList.contains("container") && !Array.from(node.classList).some((v) => v.startsWith("container-") || v.startsWith("custom-"))) {
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
      const removeStyle = style.indexOf("javascript") !== -1 || style.indexOf("http") !== -1 || style.indexOf("://") !== -1 || node.style.position === "fixed";
      if (removeStyle) {
        node.removeAttribute("style");
      }
    }
    if (node.dataset) {
      SUPPORTED_TEMPLATE_STYLES.forEach((attr) => {
        const templateEventStyle = node.dataset[attr + "Style"];
        if (templateEventStyle) {
          const removeStyle = templateEventStyle.indexOf("javascript") !== -1 || templateEventStyle.indexOf("http") !== -1 || templateEventStyle.indexOf("://") !== -1 || templateEventStyle.indexOf("fixed") !== -1;
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
var imageStyles = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
var imageContainerStyles = {
  width: "100%",
  maxWidth: "700px"
};
var imagePadStyles = {
  width: "100%",
  paddingBottom: "0px"
};
var imgStyles = {
  width: "100%"
};
function applyStyle(element, style, override) {
  Object.keys(style).forEach((k) => {
    if (!override && element.style[k]) {
      return;
    }
    element.style[k] = style[k];
  });
}

// ../serializer/types/text.tsx
var import_react3 = __toESM(require_react());
var STANDARD_TEXT_NODE = (text) => {
  return {
    bold: false,
    italic: false,
    underline: false,
    text: text || ""
  };
};
var spaceRegex = /^\s+$/;
function registerText(registry) {
  function serializeText(text) {
    const textNode = document.createTextNode(text.text);
    let final = textNode;
    if (text.bold) {
      const strong = document.createElement("strong");
      strong.appendChild(final);
      final = strong;
    }
    if (text.italic) {
      const i = document.createElement("i");
      i.appendChild(final);
      final = i;
    }
    if (text.underline) {
      const u = document.createElement("u");
      u.appendChild(final);
      final = u;
    }
    if (text.style) {
      if (final.tagName) {
        final.setAttribute("style", text.style);
      } else {
        const span = document.createElement("span");
        span.setAttribute("style", text.style);
        span.appendChild(final);
        final = span;
      }
    }
    return final;
  }
  function deserializeText(node) {
    if (!node) {
      return STANDARD_TEXT_NODE();
    }
    const nodeAsHTMLElement = node;
    if (nodeAsHTMLElement.tagName === "STRONG" || nodeAsHTMLElement.tagName === "B") {
      const textValue = Array.from(node.childNodes).map(deserializeText).filter((n) => n !== null)[0] || STANDARD_TEXT_NODE();
      textValue.bold = true;
      const style = nodeAsHTMLElement.getAttribute("style");
      if (style) {
        textValue.style = style;
      }
      return textValue;
    } else if (nodeAsHTMLElement.tagName === "I") {
      const textValue = Array.from(node.childNodes).map(deserializeText).filter((n) => n !== null)[0] || STANDARD_TEXT_NODE();
      textValue.italic = true;
      const style = nodeAsHTMLElement.getAttribute("style");
      if (style) {
        textValue.style = style;
      }
      return textValue;
    } else if (nodeAsHTMLElement.tagName === "U") {
      const textValue = Array.from(node.childNodes).map(deserializeText).filter((n) => n !== null)[0] || STANDARD_TEXT_NODE();
      textValue.underline = true;
      const style = nodeAsHTMLElement.getAttribute("style");
      if (style) {
        textValue.style = style;
      }
      return textValue;
    } else if (nodeAsHTMLElement.tagName === "SPAN") {
      const textValue = Array.from(node.childNodes).map(deserializeText).filter((n) => n !== null)[0] || STANDARD_TEXT_NODE();
      const style = nodeAsHTMLElement.getAttribute("style");
      if (style) {
        textValue.style = style;
      }
      return textValue;
    }
    return {
      text: node.textContent,
      bold: false,
      italic: false,
      underline: false
    };
  }
  function reactifyText(arg) {
    const newCustomProps = __spreadProps(__spreadValues({}, arg.customProps), {
      key: arg.key
    });
    if (arg.parent && !allowsText(arg.parent) && spaceRegex.test(arg.element.text)) {
      return null;
    }
    if (arg.element.bold) {
      newCustomProps.style = __spreadProps(__spreadValues({}, newCustomProps.style), {
        fontWeight: "bold"
      });
    }
    if (arg.element.italic) {
      newCustomProps.style = __spreadProps(__spreadValues({}, newCustomProps.style), {
        fontStyle: "italic"
      });
    }
    if (arg.element.underline) {
      newCustomProps.style = __spreadProps(__spreadValues({}, newCustomProps.style), {
        textDecoration: "underline"
      });
    }
    if (arg.element.style) {
      newCustomProps.style = __spreadValues(__spreadValues({}, newCustomProps.style), convertStyleStringToReactObject(arg.element.style));
    }
    if (!newCustomProps.children) {
      newCustomProps.children = arg.element.text;
    }
    if (arg.extraOptions && arg.extraOptions.onCustomAttributesFor) {
      const extraProps = arg.extraOptions.onCustomAttributesFor(arg.element);
      if (extraProps) {
        Object.keys(extraProps).forEach((attr) => {
          newCustomProps[attr] = extraProps[attr];
        });
      }
    }
    let toRender;
    if (arg.extraOptions && arg.extraOptions.onCustom) {
      toRender = arg.extraOptions.onCustom(arg.element, newCustomProps, {
        Tag: "span",
        defaultReturn: () => /* @__PURE__ */ import_react3.default.createElement("span", __spreadValues({}, newCustomProps)),
        parent: arg.parent,
        tree: arg.tree
      });
    } else {
      toRender = /* @__PURE__ */ import_react3.default.createElement("span", __spreadValues({}, newCustomProps));
    }
    if (arg.extraOptions && arg.extraOptions.onCustomWrap) {
      return arg.extraOptions.onCustomWrap(arg.element, toRender);
    }
    return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, { key: arg.key }, toRender);
  }
  registry.REACTIFY.text = reactifyText;
  registry.SERIALIZE.text = serializeText;
  registry.DESERIALIZE.byTag.B = deserializeText;
  registry.DESERIALIZE.byTag.STRONG = deserializeText;
  registry.DESERIALIZE.byTag.I = deserializeText;
  registry.DESERIALIZE.byTag.SPAN = deserializeText;
  registry.DESERIALIZE.text = deserializeText;
}

// ../serializer/types/paragraph.ts
function STANDARD_PARAGRAPH(textOrInline) {
  if (textOrInline && textOrInline.type) {
    return {
      type: "paragraph",
      children: [textOrInline]
    };
  }
  return {
    type: "paragraph",
    children: [
      typeof textOrInline !== "undefined" && textOrInline !== null && typeof textOrInline.text === "string" ? textOrInline : STANDARD_TEXT_NODE(textOrInline)
    ]
  };
}
function registerParagraph(registry) {
  function serializeParagraph(p) {
    return serializeElementBase(registry, p, "p", null, null, p.children);
  }
  function deserializeParagraph(node) {
    const base = deserializeElementBase(node);
    const children = deserializeChildrenForNode(node);
    const paragraph = __spreadProps(__spreadValues({}, base), {
      type: "paragraph",
      children
    });
    return paragraph;
  }
  function reactifyParagraph(arg) {
    return reactifyElementBase(
      // the registry
      registry,
      // the tag to use
      "p",
      // no base class name
      null,
      // the children to use
      arg.element.children,
      // no wrap children function
      null,
      // the arg itself
      arg
    );
  }
  registry.REACTIFY.paragraph = reactifyParagraph;
  registry.SERIALIZE.paragraph = serializeParagraph;
  registry.BLOCKS.paragraph = true;
  registry.DESERIALIZE.byTag.P = deserializeParagraph;
}

// ../serializer/types/container.ts
function registerContainer(registry) {
  function serializeContainer(container) {
    return serializeElementBase(
      // the registry
      registry,
      // the container in question
      container,
      // the element should be a div element type
      "div",
      // the class will be container class or the prefixed class if a given container type
      // exists
      container.containerType ? CONTAINER_CLASS_PREFIX + container.containerType : CONTAINER_CLASS,
      // no special attributes
      null,
      // the children inside the container, these are rich elements
      container.children
    );
  }
  function deserializeContainer(node) {
    const base = deserializeElementBase(node);
    let containerType = null;
    node.classList.forEach((c) => {
      if (c.startsWith(CONTAINER_CLASS_PREFIX)) {
        containerType = c.substr(CONTAINER_CLASS_PREFIX.length);
      }
    });
    const container = __spreadProps(__spreadValues({}, base), {
      type: "container",
      containerType,
      children: deserializeChildrenForNode(node)
    });
    return container;
  }
  function reactifyContainer(arg) {
    return reactifyElementBase(
      // the registry
      registry,
      // the div element
      "div",
      // we pass either the container type prefixed or the container class itself
      arg.element.containerType ? CONTAINER_CLASS_PREFIX + arg.element.containerType : CONTAINER_CLASS,
      // the children of the container
      arg.element.children,
      // no wrap children function
      null,
      // and the arg of reactification
      arg
    );
  }
  registry.REACTIFY.container = reactifyContainer;
  registry.SERIALIZE.container = serializeContainer;
  registry.ALLOWS_CHILDREN.container = [
    "container",
    "custom",
    "file",
    "image",
    "list",
    "paragraph",
    "quote",
    "table",
    "title",
    "video",
    "void-superblock",
    "void-block"
  ];
  registry.ON_EMPTY_FILL_WITH.container = () => {
    return STANDARD_PARAGRAPH();
  };
  registry.ON_INVALID_TEXT_WRAP_WITH.container = (text) => {
    return [STANDARD_PARAGRAPH()];
  };
  registry.ON_INVALID_CHILDREN_WRAP_WITH.container = (child) => {
    if (child.type === "inline" || child.type === "file" || child.type === "link") {
      return [STANDARD_PARAGRAPH()];
    } else if (child.type === "thead" || child.type === "tbody") {
      return [
        {
          type: "table",
          tableType: null,
          children: []
        }
      ];
    } else if (child.type === "tr") {
      return [
        {
          type: "tbody",
          children: []
        },
        {
          type: "table",
          tableType: null,
          children: []
        }
      ];
    } else if (child.type === "td") {
      return [
        {
          type: "tr",
          children: []
        },
        {
          type: "tbody",
          children: []
        },
        {
          type: "table",
          tableType: null,
          children: []
        }
      ];
    } else if (child.type === "list-item") {
      return [
        {
          type: "list",
          listType: "bulleted",
          children: []
        }
      ];
    }
    return null;
  };
  registry.SUPERBLOCKS.container = true;
  registry.DESERIALIZE.byClassName.container = deserializeContainer;
  registry.DESERIALIZE.byTag.DIV = deserializeContainer;
  registry.DESERIALIZE.byClassNamePrefix.container = deserializeContainer;
}

// ../serializer/types/custom.ts
function registerCustom(registry) {
  function serializeCustom(custom) {
    return serializeElementBase(
      // the registry in question
      registry,
      // the custom element
      custom,
      // the div represents that the custom is a div
      "div",
      // the prefixed custom type
      CUSTOM_CLASS_PREFIX + custom.customType,
      // no special attributes
      null,
      // and the children we are meant to render
      custom.children
    );
  }
  function deserializeCustom(node) {
    const base = deserializeElementBase(node);
    let customType = null;
    node.classList.forEach((c) => {
      if (c.startsWith(CUSTOM_CLASS_PREFIX)) {
        customType = c.substr(CUSTOM_CLASS_PREFIX.length);
      }
    });
    const custom = __spreadProps(__spreadValues({}, base), {
      type: "custom",
      customType,
      children: deserializeChildrenForNode(node)
    });
    if (!custom.children.length) {
      custom.children = [
        STANDARD_PARAGRAPH()
      ];
    }
    ;
    return custom;
  }
  function reactifyCustom(arg) {
    return reactifyElementBase(
      // the registry
      registry,
      // the div element
      "div",
      // we pass the prefixed custom type
      CUSTOM_CLASS_PREFIX + arg.element.customType,
      // the children to be used in reactification
      arg.element.children,
      // nothing to use to wrap
      null,
      // the reactification argument
      arg
    );
  }
  registry.REACTIFY.custom = reactifyCustom;
  registry.SERIALIZE.custom = serializeCustom;
  registry.ALLOWS_CHILDREN.custom = registry.ALLOWS_CHILDREN.container;
  registry.ON_EMPTY_FILL_WITH.custom = registry.ON_EMPTY_FILL_WITH.container;
  registry.ON_INVALID_TEXT_WRAP_WITH.custom = registry.ON_INVALID_TEXT_WRAP_WITH.container;
  registry.ON_INVALID_CHILDREN_WRAP_WITH.custom = registry.ON_INVALID_CHILDREN_WRAP_WITH.container;
  registry.SUPERBLOCKS.custom = true;
  registry.DESERIALIZE.byClassNamePrefix.custom = deserializeCustom;
}

// ../serializer/types/file.tsx
var import_react4 = __toESM(require_react());
function registerFile(registry) {
  function serializeFile(file) {
    const mainContainer = serializeElementBase(registry, file, "a", "file", null, null);
    mainContainer.setAttribute("href", file.src);
    mainContainer.dataset.srcId = file.srcId;
    const parentContainer = DOMWindow.document.createElement("span");
    parentContainer.className = "file-container";
    mainContainer.appendChild(parentContainer);
    const icon = DOMWindow.document.createElement("span");
    icon.className = "file-icon";
    parentContainer.appendChild(icon);
    const extension = DOMWindow.document.createElement("span");
    extension.className = "file-extension";
    extension.textContent = file.extension;
    icon.appendChild(extension);
    const name = DOMWindow.document.createElement("span");
    name.className = "file-name";
    name.textContent = file.fileName;
    parentContainer.appendChild(name);
    const size = DOMWindow.document.createElement("span");
    size.className = "file-size";
    size.textContent = file.size;
    parentContainer.appendChild(size);
    return mainContainer;
  }
  function deserializeFile(node) {
    const fileNameNode = node.querySelector(".file-name");
    const fileExtensionNode = node.querySelector(".file-extension");
    const fileSizeNode = node.querySelector(".file-size");
    if (!fileNameNode || !fileExtensionNode || !fileSizeNode) {
      return null;
    }
    const base = deserializeElementBase(node);
    return __spreadProps(__spreadValues({}, base), {
      type: "file",
      srcId: node.dataset.srcId,
      fileName: fileNameNode.textContent,
      extension: fileExtensionNode.textContent,
      size: fileSizeNode.textContent,
      src: node.getAttribute("href"),
      children: [STANDARD_TEXT_NODE()]
    });
  }
  function reactifyFile(arg) {
    const newCustomProps = __spreadValues({}, arg.customProps);
    if (arg.active) {
      newCustomProps.href = arg.element.src;
    }
    return reactifyElementBase(
      registry,
      "a",
      "file",
      null,
      (children) => {
        return /* @__PURE__ */ import_react4.default.createElement("span", { className: "file-container" }, /* @__PURE__ */ import_react4.default.createElement("span", { className: "file-icon" }, /* @__PURE__ */ import_react4.default.createElement("span", { className: "file-extension", spellCheck: false }, arg.element.extension)), /* @__PURE__ */ import_react4.default.createElement("span", { className: "file-name", spellCheck: false }, arg.element.fileName), /* @__PURE__ */ import_react4.default.createElement("span", { className: "file-size", spellCheck: false }, arg.element.size), children);
      },
      __spreadProps(__spreadValues({}, arg), {
        customProps: newCustomProps
      })
    );
  }
  registry.REACTIFY.file = reactifyFile;
  registry.SERIALIZE.file = serializeFile;
  registry.ALLOWS_CHILDREN.file = [];
  registry.INLINES.file = true;
  registry.VOIDS.file = true;
  registry.DESERIALIZE.byClassName.file = deserializeFile;
}

// ../serializer/types/image.tsx
var import_react5 = __toESM(require_react());
function registerImage(registry) {
  function serializeImage(img) {
    const attrs = {};
    if (img.width) {
      attrs["data-src-width"] = img.width.toString();
    }
    if (img.height) {
      attrs["data-src-height"] = img.height.toString();
    }
    if (img.srcId) {
      attrs["data-src-id"] = img.srcId;
    }
    if (img.alt) {
      attrs.alt = img.alt;
    }
    if (img.src) {
      attrs.src = img.src;
    }
    if (img.srcSet) {
      attrs.srcset = img.srcSet;
    }
    if (img.sizes) {
      attrs.sizes = img.sizes;
    }
    if (img.standalone) {
      const standaloneImage = serializeElementBase(
        registry,
        img,
        "img",
        null,
        attrs,
        null
      );
      return standaloneImage;
    } else {
      const imageComponent = serializeElementBase(
        registry,
        img,
        "a",
        "image",
        null,
        null
      );
      const imageContainer = DOMWindow.document.createElement("div");
      imageContainer.className = "image-container";
      imageComponent.appendChild(imageContainer);
      const imagePad = DOMWindow.document.createElement("div");
      imagePad.className = "image-pad";
      const width = img.width;
      const height = img.height;
      const ratio = height / width;
      const percentage = ratio * 100;
      const padStyle = "padding-bottom:" + percentage + "%";
      imagePad.setAttribute("style", padStyle);
      imageContainer.appendChild(imagePad);
      const standaloneImage = serializeElementBase(
        registry,
        {},
        "img",
        null,
        attrs,
        null
      );
      imagePad.appendChild(standaloneImage);
      if (standaloneImage.src) {
        imageComponent.href = standaloneImage.src;
      }
      return imageComponent;
    }
  }
  function deserializeImage(node) {
    const img = node.tagName === "IMG" ? node : node.querySelector("img");
    if (!img) {
      return null;
    }
    const base = deserializeElementBase(node);
    return __spreadProps(__spreadValues({}, base), {
      type: "image",
      alt: img.getAttribute("alt") || null,
      src: img.getAttribute("src"),
      srcId: img.dataset.srcId,
      srcSet: img.getAttribute("srcset") || null,
      sizes: img.getAttribute("sizes") || null,
      width: parseInt(img.dataset.srcWidth) || null,
      height: parseInt(img.dataset.srcHeight) || null,
      standalone: node.tagName === "IMG",
      children: [STANDARD_TEXT_NODE()]
    });
  }
  function reactifyImage(arg) {
    const newCustomProps = __spreadValues({}, arg.customProps);
    if (arg.element.standalone) {
      if (newCustomProps.children) {
        delete newCustomProps.children;
        if (newCustomProps.style && !newCustomProps.style.display) {
          newCustomProps.style.display = "contents";
        } else if (!newCustomProps.style) {
          newCustomProps.style = {
            display: "contents"
          };
        }
        return /* @__PURE__ */ import_react5.default.createElement("div", __spreadValues({}, newCustomProps), reactifyElementBase(
          registry,
          "img",
          null,
          null,
          null,
          __spreadProps(__spreadValues({}, arg), {
            customProps: {
              alt: arg.element.alt,
              sizes: arg.element.sizes,
              src: arg.element.src,
              srcSet: arg.element.srcSet,
              loading: "lazy"
            }
          })
        ), arg.customProps.children);
      }
      newCustomProps.alt = arg.element.alt;
      newCustomProps.sizes = arg.element.sizes;
      newCustomProps.src = arg.element.src;
      newCustomProps.srcSet = arg.element.srcSet;
      return reactifyElementBase(
        registry,
        "img",
        null,
        null,
        null,
        __spreadProps(__spreadValues({}, arg), {
          customProps: newCustomProps
        })
      );
    }
    if (arg.active) {
      newCustomProps.href = arg.element.src;
    }
    const width = arg.element.width;
    const height = arg.element.height;
    const ratio = height / width;
    const percentage = ratio * 100;
    const padPercentage = percentage + "%";
    return reactifyElementBase(
      registry,
      "a",
      "image",
      null,
      (children) => {
        return /* @__PURE__ */ import_react5.default.createElement("div", { className: "image-container" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "image-pad", style: { paddingBottom: padPercentage } }, /* @__PURE__ */ import_react5.default.createElement("img", { alt: arg.element.alt, sizes: arg.element.sizes, src: arg.element.src, srcSet: arg.element.srcSet, loading: "lazy" }), children));
      },
      __spreadProps(__spreadValues({}, arg), {
        customProps: newCustomProps
      })
    );
  }
  registry.REACTIFY.image = reactifyImage;
  registry.SERIALIZE.image = serializeImage;
  registry.ALLOWS_CHILDREN.image = [];
  registry.VOIDS.image = true;
  registry.BLOCKS.image = true;
  registry.DESERIALIZE.byClassName.image = deserializeImage;
  registry.DESERIALIZE.byTag.IMG = deserializeImage;
}

// ../serializer/types/link.ts
function registerLink(registry) {
  function serializeLink(link) {
    const attrs = {};
    if (link.thref) {
      attrs["data-href"] = link.thref;
    } else if (link.href) {
      attrs.href = link.href;
    }
    return serializeElementBase(
      // the registry
      registry,
      // the link in question
      link,
      // the tag we will use
      "a",
      // no base class name
      null,
      // the attributes we will use
      attrs,
      // and the children the link should have
      link.children
    );
  }
  function deserializeLink(node) {
    const base = deserializeElementBase(node);
    let href = null;
    let thref = null;
    if (node.dataset.href) {
      thref = node.dataset.href;
    } else {
      href = node.getAttribute("href") || null;
    }
    const children = deserializeChildrenForNode(node);
    const link = __spreadProps(__spreadValues({}, base), {
      type: "link",
      href,
      thref,
      children: children.length ? children : [STANDARD_TEXT_NODE()]
    });
    return link;
  }
  function reactifyLink(arg) {
    const newCustomProps = __spreadValues({}, arg.customProps);
    if (arg.element.href && arg.active) {
      newCustomProps.href = arg.element.href;
    }
    if (arg.element.thref && !arg.active) {
      newCustomProps.className = (newCustomProps.className || "") + " template";
      newCustomProps.title = arg.element.thref;
    }
    if (arg.asTemplate && arg.element.thref && arg.active) {
      let href = arg.templateArgs.properties[arg.element.thref];
      if (href instanceof NonRootInheritable) {
        href = href.value;
      } else if (!href) {
        href = arg.templateRootArgs.properties[arg.element.thref];
        if (href instanceof NonRootInheritable) {
          href = null;
        }
      }
      if (typeof href === "string") {
        newCustomProps.href = href;
      }
    }
    return reactifyElementBase(
      registry,
      "a",
      null,
      arg.element.children,
      null,
      __spreadProps(__spreadValues({}, arg), {
        customProps: newCustomProps
      })
    );
  }
  registry.REACTIFY.link = reactifyLink;
  registry.SERIALIZE.link = serializeLink;
  registry.ALLOWS_CHILDREN.link = [];
  registry.INLINES.link = true;
  registry.MERGABLES.link = true;
  registry.DESERIALIZE.byTag.A = deserializeLink;
}

// ../serializer/types/quote.ts
function registerQuote(registry) {
  function serializeQuote(quote) {
    return serializeElementBase(
      // the registry
      registry,
      // the quote to use
      quote,
      // the tag we are using
      "blockquote",
      // no base class
      null,
      // no special attributes
      null,
      // the children
      quote.children
    );
  }
  function deserializeQuote(node) {
    const base = deserializeElementBase(node);
    const children = deserializeChildrenForNode(node);
    const quote = __spreadProps(__spreadValues({}, base), {
      type: "quote",
      children
    });
    return quote;
  }
  function reactifyQuote(arg) {
    return reactifyElementBase(
      // with the registry
      registry,
      // the tag to use
      "blockquote",
      // no base class
      null,
      // the children to use
      arg.element.children,
      // nothing to use as a wrap function
      null,
      // the argument itself
      arg
    );
  }
  registry.REACTIFY.quote = reactifyQuote;
  registry.SERIALIZE.quote = serializeQuote;
  registry.BLOCKS.quote = true;
  registry.DESERIALIZE.byTag.QUOTE = deserializeQuote;
}

// ../serializer/types/title.ts
function registerTitle(registry) {
  function serializeTitle(title) {
    return serializeElementBase(registry, title, title.titleType, null, null, title.children);
  }
  function deserializeTitle(node) {
    const base = deserializeElementBase(node);
    const children = deserializeChildrenForNode(node);
    const title = __spreadProps(__spreadValues({}, base), {
      type: "title",
      titleType: node.tagName.toLowerCase(),
      children
    });
    return title;
  }
  function reactifyTitle(arg) {
    return reactifyElementBase(
      // the registry
      registry,
      // the tag we are using is the same of the subtype, h1, h2, h3
      arg.element.titleType,
      // no base class
      null,
      // the children to use
      arg.element.children,
      // no wrap children function
      null,
      // and the arg itself
      arg
    );
  }
  registry.REACTIFY.title = reactifyTitle;
  registry.SERIALIZE.title = serializeTitle;
  registry.BLOCKS.title = true;
  registry.DESERIALIZE.byTag.H1 = deserializeTitle;
  registry.DESERIALIZE.byTag.H2 = deserializeTitle;
  registry.DESERIALIZE.byTag.H3 = deserializeTitle;
  registry.DESERIALIZE.byTag.H4 = deserializeTitle;
  registry.DESERIALIZE.byTag.H5 = deserializeTitle;
  registry.DESERIALIZE.byTag.H6 = deserializeTitle;
}

// ../serializer/types/video.tsx
var import_react6 = __toESM(require_react());
function registerVideo(registry) {
  function serializeVideo(video) {
    const mainContainer = serializeElementBase(registry, video, "div", "video", null, null);
    mainContainer.className = "video";
    const parentContainer = DOMWindow.document.createElement("div");
    parentContainer.className = "video-container";
    mainContainer.appendChild(parentContainer);
    const iframe = DOMWindow.document.createElement("iframe");
    parentContainer.appendChild(iframe);
    iframe.allowFullscreen = true;
    iframe.dataset.videoOrigin = video.origin;
    iframe.dataset.videoSrc = video.src;
    if (video.origin === "youtube") {
      iframe.src = "https://youtube.com/embed/".concat(video.src, "?rel=0");
    } else {
      iframe.src = "https://player.vimeo.com/video/".concat(video.src, "?title=0&byline=0&portrait=0&badge=0");
    }
    return mainContainer;
  }
  function deserializeVideo(node) {
    const iframe = node.querySelector("iframe");
    if (!iframe) {
      return null;
    }
    const base = deserializeElementBase(node);
    return __spreadProps(__spreadValues({}, base), {
      type: "video",
      src: iframe.dataset.videoSrc,
      origin: iframe.dataset.videoOrigin,
      children: [
        STANDARD_TEXT_NODE()
      ]
    });
  }
  function reactifyVideo(arg) {
    if (!arg.element.origin) {
      return reactifyElementBase(
        // the registry
        registry,
        // we will be using a div to start with
        "div",
        // the video will be the base class
        "video",
        // no children itself
        null,
        // the wrapping function that sets up the iframe
        (children) => {
          return /* @__PURE__ */ import_react6.default.createElement("div", { className: "video-container" }, children);
        },
        // the arg itself
        arg
      );
    }
    let iframeSrc;
    if (arg.element.origin === "youtube") {
      iframeSrc = "https://youtube.com/embed/".concat(arg.element.src, "?rel=0");
    } else {
      iframeSrc = "https://player.vimeo.com/video/".concat(arg.element.src, "?title=0&byline=0&portrait=0&badge=0");
    }
    return reactifyElementBase(
      // the registry
      registry,
      // we will be using a div to start with
      "div",
      // the video will be the base class
      "video",
      // no children itself
      null,
      // the wrapping function that sets up the iframe
      (children) => {
        return /* @__PURE__ */ import_react6.default.createElement("div", { className: "video-container" }, /* @__PURE__ */ import_react6.default.createElement("iframe", { src: iframeSrc, allowFullScreen: true, frameBorder: "0" }), children);
      },
      // the arg itself
      arg
    );
  }
  registry.REACTIFY.video = reactifyVideo;
  registry.SERIALIZE.video = serializeVideo;
  registry.VOIDS.video = true;
  registry.BLOCKS.video = true;
  registry.DESERIALIZE.byClassName.video = deserializeVideo;
}

// ../serializer/types/list.ts
function registerList(registry) {
  function serializeList(list) {
    return serializeElementBase(
      // the registry
      registry,
      // the list in question component
      list,
      // now the tag to use depends
      list.listType === "numbered" ? "ol" : "ul",
      // no base class
      null,
      // no extra attributes
      null,
      // the children to use
      list.children
    );
  }
  function deserializeList(node) {
    const base = deserializeElementBase(node);
    const list = __spreadProps(__spreadValues({}, base), {
      type: "list",
      listType: node.tagName === "OL" ? "numbered" : "bulleted",
      children: deserializeChildrenForNode(node)
    });
    return list;
  }
  function reactifyList(arg) {
    return reactifyElementBase(
      // the registry
      registry,
      // the tag to use
      arg.element.listType === "numbered" ? "ol" : "ul",
      // the base class
      null,
      // the children to use
      arg.element.children,
      // the function to wrap the children
      null,
      // pass the given arg once again
      arg
    );
  }
  registry.REACTIFY.list = reactifyList;
  registry.SERIALIZE.list = serializeList;
  registry.ALLOWS_CHILDREN.list = [
    "list-item"
  ];
  registry.ON_EMPTY_FILL_WITH.list = () => {
    return {
      type: "list-item",
      children: [
        STANDARD_PARAGRAPH()
      ]
    };
  };
  registry.ON_INVALID_TEXT_WRAP_WITH.list = (text) => {
    return [
      STANDARD_PARAGRAPH(),
      {
        type: "list-item",
        children: []
      }
    ];
  };
  registry.ON_INVALID_CHILDREN_WRAP_WITH.list = (child) => {
    if (child.type === "inline" || child.type === "file" || child.type === "link") {
      return [
        STANDARD_PARAGRAPH(),
        {
          type: "list-item",
          children: []
        }
      ];
    } else if (child.type === "title" || child.type === "paragraph") {
      return [
        {
          type: "list-item",
          children: []
        }
      ];
    }
    return null;
  };
  registry.SUPERBLOCKS.list = true;
  registry.DESERIALIZE.byTag.OL = deserializeList;
  registry.DESERIALIZE.byTag.UL = deserializeList;
  registry.MERGABLES.list = true;
  registry.CUSTOM_NORMALIZER_POST.list = (list, path, executionRoot, primaryExecution, secondaryExecution, specialRules) => {
    let index = -1;
    while (true) {
      index++;
      const child = list.children[index];
      if (!child) {
        break;
      }
      const secondParagraphPoint = child.children.findIndex((n, index2) => n.type === "paragraph" && index2 !== 0);
      if (secondParagraphPoint !== -1) {
        const childPath = [...path, index];
        const newChildPath = [...path, index + 1];
        primaryExecution.cloneElementAt(childPath, newChildPath);
        secondaryExecution && secondaryExecution.cloneElementAt(childPath, newChildPath);
        const allChildrenCount = child.children.length;
        for (let i = 0; i < allChildrenCount - secondParagraphPoint; i++) {
          primaryExecution.moveNodeAt([...childPath, secondParagraphPoint], [...newChildPath, i]);
          secondaryExecution && secondaryExecution.moveNodeAt([...childPath, secondParagraphPoint], [...newChildPath, i]);
        }
      }
    }
  };
}

// ../serializer/types/list-item.ts
function registerListItem(registry) {
  function serializeListItem(li) {
    return serializeElementBase(registry, li, "li", null, null, li.children);
  }
  function deserializeListItem(node) {
    const base = deserializeElementBase(node);
    const children = deserializeChildrenForNode(node);
    const li = __spreadProps(__spreadValues({}, base), {
      type: "list-item",
      children: children.length ? children : [STANDARD_TEXT_NODE()]
    });
    return li;
  }
  function reactifyListItem(arg) {
    return reactifyElementBase(
      // the registry in question
      registry,
      // we will use a li for the element tag
      "li",
      // no base class
      null,
      // the children we are using
      arg.element.children,
      // no wrap children function
      null,
      // the arg again
      arg
    );
  }
  registry.REACTIFY["list-item"] = reactifyListItem;
  registry.SERIALIZE["list-item"] = serializeListItem;
  registry.ALLOWS_CHILDREN["list-item"] = [
    "list",
    "paragraph"
  ];
  registry.ON_INVALID_TEXT_WRAP_WITH["list-item"] = (text) => {
    return [STANDARD_PARAGRAPH()];
  };
  registry.SUPERBLOCKS["list-item"] = true;
  registry.DESERIALIZE.byTag.LI = deserializeListItem;
  registry.CUSTOM_NORMALIZER_POST["list-item"] = (listItem, path, executionRoot, primaryExecution, secondaryExecution, specialRules) => {
    if (listItem.children[0].type === "list") {
      primaryExecution.insertNodeAt(path, STANDARD_PARAGRAPH(), 0);
      secondaryExecution && secondaryExecution.insertNodeAt(path, STANDARD_PARAGRAPH(), 0);
    }
  };
}

// ../serializer/types/inline.ts
function registerInline(registry) {
  function serializeInline(inline) {
    return serializeElementBase(
      // the registry
      registry,
      // the inline in question
      inline,
      // the element should be a span element type
      "span",
      // inline class
      "inline",
      // no special attributes
      null,
      // the children inside the inline, these are rich elements
      inline.children
    );
  }
  function deserializeInline(node) {
    const base = deserializeElementBase(node);
    const children = deserializeChildrenForNode(node);
    const inline = __spreadProps(__spreadValues({}, base), {
      type: "inline",
      children: children.length ? children : [STANDARD_TEXT_NODE()]
    });
    return inline;
  }
  function reactifyInline(arg) {
    return reactifyElementBase(
      // the registry
      registry,
      // the span element
      "span",
      // we pass either the inline type prefixed or the inline class itself
      "inline",
      // the children of the inline
      arg.element.children,
      // no wrap children function
      null,
      // and the arg of reactification
      arg
    );
  }
  registry.REACTIFY.inline = reactifyInline;
  registry.SERIALIZE.inline = serializeInline;
  registry.INLINES.inline = true;
  registry.DESERIALIZE.byClassName.inline = deserializeInline;
  registry.MERGABLES.inline = true;
}

// ../serializer/types/table.ts
function registerTableElements(registry) {
  function serializeTableElement(which, element) {
    return serializeElementBase(
      // the registry
      registry,
      // the container in question
      element,
      // the element should be a div element type
      which,
      // the class will be container class or the prefixed class if a given container type
      // exists
      which === "table" ? element.tableType ? TABLE_CLASS_PREFIX + element.tableType : null : null,
      // no special attributes
      null,
      // the children inside the container, these are rich elements
      element.children
    );
  }
  function deserializeTableElement(which, node) {
    const base = deserializeElementBase(node);
    const element = __spreadProps(__spreadValues({}, base), {
      type: which,
      children: deserializeChildrenForNode(node)
    });
    if (which === "table") {
      let tableType = null;
      node.classList.forEach((c) => {
        if (c.startsWith(TABLE_CLASS_PREFIX)) {
          tableType = c.substr(TABLE_CLASS_PREFIX.length);
        }
      });
      element.tableType = tableType;
    }
    return element;
  }
  function reactifyTableElement(which, arg) {
    return reactifyElementBase(
      // the registry
      registry,
      // the table element
      which,
      // no class
      which === "table" ? arg.element.tableType ? TABLE_CLASS_PREFIX + arg.element.tableType : null : null,
      // the children of the container
      arg.element.children,
      // no wrap children function
      null,
      // and the arg of reactification
      arg
    );
  }
  registry.REACTIFY.table = reactifyTableElement.bind(null, "table");
  registry.REACTIFY.thead = reactifyTableElement.bind(null, "thead");
  registry.REACTIFY.tbody = reactifyTableElement.bind(null, "tbody");
  registry.REACTIFY.tfoot = reactifyTableElement.bind(null, "tfoot");
  registry.REACTIFY.tr = reactifyTableElement.bind(null, "tr");
  registry.REACTIFY.td = reactifyTableElement.bind(null, "td");
  registry.REACTIFY.th = reactifyTableElement.bind(null, "th");
  registry.SERIALIZE.table = serializeTableElement.bind(null, "table");
  registry.SERIALIZE.thead = serializeTableElement.bind(null, "thead");
  registry.SERIALIZE.tbody = serializeTableElement.bind(null, "tbody");
  registry.SERIALIZE.tfoot = serializeTableElement.bind(null, "tfoot");
  registry.SERIALIZE.tr = serializeTableElement.bind(null, "tr");
  registry.SERIALIZE.td = serializeTableElement.bind(null, "td");
  registry.SERIALIZE.th = serializeTableElement.bind(null, "th");
  registry.SUPERBLOCKS.table = true;
  registry.SUPERBLOCKS.thead = true;
  registry.SUPERBLOCKS.tbody = true;
  registry.SUPERBLOCKS.tfoot = true;
  registry.SUPERBLOCKS.tr = true;
  registry.SUPERBLOCKS.td = true;
  registry.SUPERBLOCKS.th = true;
  registry.ALLOWS_CHILDREN.table = [
    "thead",
    "tbody",
    "tfoot"
  ];
  registry.ON_INVALID_CHILDREN_WRAP_WITH.table = (child) => {
    if (child.type === "tr") {
      return [
        {
          type: "tbody",
          children: []
        }
      ];
    } else if (child.type === "td" || child.type === "th") {
      return [
        {
          type: "tr",
          children: []
        },
        {
          type: "tbody",
          children: []
        }
      ];
    } else if (registry.ALLOWS_CHILDREN.td.includes(child.type)) {
      return [
        {
          type: "td",
          children: []
        },
        {
          type: "tr",
          children: []
        },
        {
          type: "tbody",
          children: []
        }
      ];
    } else if (child.type === "inline" || child.type === "file" || child.type === "link") {
      return [
        STANDARD_PARAGRAPH(),
        {
          type: "td",
          children: []
        },
        {
          type: "tr",
          children: []
        },
        {
          type: "tbody",
          children: []
        }
      ];
    }
    return null;
  };
  registry.ALLOWS_CHILDREN.thead = [
    "tr"
  ];
  registry.ALLOWS_CHILDREN.tfoot = [
    "tr"
  ];
  registry.ON_INVALID_CHILDREN_WRAP_WITH.thead = (child) => {
    if (child.type === "td" || child.type === "th") {
      return [
        {
          type: "tr",
          children: []
        }
      ];
    } else if (registry.ALLOWS_CHILDREN.th.includes(child.type)) {
      return [
        {
          type: "th",
          children: []
        },
        {
          type: "tr",
          children: []
        }
      ];
    } else if (child.type === "inline" || child.type === "file" || child.type === "link") {
      return [
        STANDARD_PARAGRAPH(),
        {
          type: "th",
          children: []
        },
        {
          type: "tr",
          children: []
        }
      ];
    }
    return null;
  };
  registry.ALLOWS_CHILDREN.tbody = [
    "tr"
  ];
  registry.ON_INVALID_CHILDREN_WRAP_WITH.tbody = registry.ON_INVALID_CHILDREN_WRAP_WITH.thead;
  registry.ON_INVALID_CHILDREN_WRAP_WITH.tfoot = registry.ON_INVALID_CHILDREN_WRAP_WITH.thead;
  registry.ALLOWS_CHILDREN.tr = [
    "td",
    "th"
  ];
  registry.ON_INVALID_CHILDREN_WRAP_WITH.tr = (child) => {
    if (registry.ALLOWS_CHILDREN.td.includes(child.type)) {
      return [
        {
          type: "td",
          children: []
        }
      ];
    } else if (child.type === "inline" || child.type === "file" || child.type === "link") {
      return [
        STANDARD_PARAGRAPH(),
        {
          type: "td",
          children: []
        }
      ];
    }
    return null;
  };
  registry.ALLOWS_CHILDREN.td = registry.ALLOWS_CHILDREN.container;
  registry.ALLOWS_CHILDREN.th = registry.ALLOWS_CHILDREN.container;
  registry.ON_INVALID_CHILDREN_WRAP_WITH.td = registry.ON_INVALID_CHILDREN_WRAP_WITH.container;
  registry.ON_INVALID_CHILDREN_WRAP_WITH.th = registry.ON_INVALID_CHILDREN_WRAP_WITH.container;
  registry.ON_INVALID_TEXT_WRAP_WITH.table = (text) => {
    return [
      STANDARD_PARAGRAPH(),
      {
        type: "td",
        children: []
      },
      {
        type: "tr",
        children: []
      },
      {
        type: "tbody",
        children: []
      }
    ];
  };
  registry.ON_INVALID_TEXT_WRAP_WITH.tbody = (text) => {
    return [
      STANDARD_PARAGRAPH(),
      {
        type: "td",
        children: []
      },
      {
        type: "tr",
        children: []
      }
    ];
  };
  registry.ON_INVALID_TEXT_WRAP_WITH.thead = registry.ON_INVALID_TEXT_WRAP_WITH.tbody;
  registry.ON_INVALID_TEXT_WRAP_WITH.tfoot = registry.ON_INVALID_TEXT_WRAP_WITH.tbody;
  registry.ON_INVALID_TEXT_WRAP_WITH.tr = (text) => {
    return [
      STANDARD_PARAGRAPH(),
      {
        type: "td",
        children: []
      }
    ];
  };
  registry.ON_INVALID_TEXT_WRAP_WITH.td = (text) => {
    return [STANDARD_PARAGRAPH()];
  };
  registry.ON_INVALID_TEXT_WRAP_WITH.th = (text) => {
    return [STANDARD_PARAGRAPH()];
  };
  registry.DESERIALIZE.byTag.TABLE = deserializeTableElement.bind(null, "table");
  registry.DESERIALIZE.byTag.TBODY = deserializeTableElement.bind(null, "tbody");
  registry.DESERIALIZE.byTag.THEAD = deserializeTableElement.bind(null, "thead");
  registry.DESERIALIZE.byTag.TFOOT = deserializeTableElement.bind(null, "tfoot");
  registry.DESERIALIZE.byTag.TR = deserializeTableElement.bind(null, "tr");
  registry.DESERIALIZE.byTag.TD = deserializeTableElement.bind(null, "td");
  registry.DESERIALIZE.byTag.TH = deserializeTableElement.bind(null, "th");
  registry.ON_EMPTY_FILL_WITH.table = () => {
    return {
      type: "tbody",
      children: [
        {
          type: "tr",
          children: [
            {
              type: "td",
              children: [STANDARD_PARAGRAPH()]
            }
          ]
        }
      ]
    };
  };
  registry.ON_EMPTY_FILL_WITH.thead = () => {
    return {
      type: "tr",
      children: [
        {
          type: "th",
          children: [STANDARD_PARAGRAPH()]
        }
      ]
    };
  };
  registry.ON_EMPTY_FILL_WITH.tbody = () => {
    return {
      type: "tr",
      children: [
        {
          type: "td",
          children: [STANDARD_PARAGRAPH()]
        }
      ]
    };
  };
  registry.ON_EMPTY_FILL_WITH.tfoot = registry.ON_EMPTY_FILL_WITH.tbody;
  registry.ON_EMPTY_FILL_WITH.tr = () => {
    return {
      type: "td",
      children: [STANDARD_PARAGRAPH()]
    };
  };
  registry.ON_EMPTY_FILL_WITH.td = () => {
    return STANDARD_PARAGRAPH();
  };
  registry.ON_EMPTY_FILL_WITH.th = () => {
    return STANDARD_PARAGRAPH();
  };
  registry.MERGABLES.thead = true;
  registry.MERGABLES.tbody = true;
  registry.MERGABLES.tfoot = true;
  registry.CUSTOM_NORMALIZER_POST.table = (table, path, executionRoot, primaryExecution, secondaryExecution, specialRules) => {
    const childrenCount = table.children.length;
    let maxColumnCount = 0;
    for (let i = 0; i < childrenCount; i++) {
      const tbodyElement = table.children[i];
      tbodyElement.children.forEach((row, i2) => {
        maxColumnCount = row.children.length > maxColumnCount ? row.children.length : maxColumnCount;
        row.children.forEach((column, i3) => {
          const shouldBeColumnTag = tbodyElement.type === "thead" ? "th" : "td";
          if (column.type !== shouldBeColumnTag) {
            primaryExecution.updateNodeAt([...path, i, i2, i3], { type: shouldBeColumnTag });
            secondaryExecution && secondaryExecution.updateNodeAt([...path, i, i2, i3], { type: shouldBeColumnTag });
          }
        });
      });
    }
    for (let i = 0; i < childrenCount; i++) {
      const tbodyElement = table.children[i];
      tbodyElement.children.forEach((row, i2) => {
        const shouldBeColumnTag = tbodyElement.type === "thead" ? "th" : "td";
        if (row.children.length !== maxColumnCount) {
          const newNode = { type: shouldBeColumnTag, children: [STANDARD_PARAGRAPH()] };
          primaryExecution.insertNodeAt([...path, i, i2], newNode, row.children.length);
          secondaryExecution && secondaryExecution.insertNodeAt([...path, i, i2], newNode, row.children.length);
        }
      });
    }
  };
}

// ../serializer/index.ts
var import_v5 = __toESM(require_v5());
var import_deep_equal = __toESM(require_deep_equal());

// ../serializer/types/void-block.ts
function registerVoidBlock(registry) {
  function serializeVoidBlock(p) {
    return serializeElementBase(registry, p, "p", "void-block", null, p.children);
  }
  function deserializeVoidBlock(node) {
    const base = deserializeElementBase(node);
    const VoidBlock = __spreadProps(__spreadValues({}, base), {
      type: "void-block",
      children: [
        STANDARD_TEXT_NODE()
      ]
    });
    return VoidBlock;
  }
  function reactifyVoidBlock(arg) {
    return reactifyElementBase(
      // the registry
      registry,
      // the tag to use
      "p",
      // no base class name
      null,
      // the children to use
      arg.element.children,
      // no wrap children function
      null,
      // the arg itself
      arg
    );
  }
  registry.REACTIFY["void-block"] = reactifyVoidBlock;
  registry.SERIALIZE["void-block"] = serializeVoidBlock;
  registry.BLOCKS["void-block"] = true;
  registry.VOIDS["void-block"] = true;
  registry.DESERIALIZE.byClassName["void-block"] = deserializeVoidBlock;
}

// ../serializer/types/void-superblock.ts
function registerVoidSuperBlock(registry) {
  function serializeVoidSuperBlock(p) {
    return serializeElementBase(registry, p, "div", "void-superblock", null, p.children);
  }
  function deserializeVoidSuperBlock(node) {
    const base = deserializeElementBase(node);
    const voidSuperBlock = __spreadProps(__spreadValues({}, base), {
      type: "void-superblock",
      children: [
        STANDARD_TEXT_NODE()
      ]
    });
    return voidSuperBlock;
  }
  function reactifyVoidSuperBlock(arg) {
    return reactifyElementBase(
      // the registry
      registry,
      // the tag to use
      "p",
      // no base class name
      null,
      // the children to use
      arg.element.children,
      // no wrap children function
      null,
      // the arg itself
      arg
    );
  }
  registry.REACTIFY["void-superblock"] = reactifyVoidSuperBlock;
  registry.SERIALIZE["void-superblock"] = serializeVoidSuperBlock;
  registry.SUPERBLOCKS["void-superblock"] = true;
  registry.VOIDS["void-superblock"] = true;
  registry.DESERIALIZE.byClassName["void-superblock"] = deserializeVoidSuperBlock;
}

// ../serializer/types/void-inline.ts
function registerVoidInline(registry) {
  function serializeVoidInline(p) {
    return serializeElementBase(registry, p, "span", "void-inline", null, p.children);
  }
  function deserializeVoidInline(node) {
    const base = deserializeElementBase(node);
    const VoidInline = __spreadProps(__spreadValues({}, base), {
      type: "void-inline",
      children: [
        STANDARD_TEXT_NODE()
      ]
    });
    return VoidInline;
  }
  function reactifyVoidInline(arg) {
    return reactifyElementBase(
      // the registry
      registry,
      // the tag to use
      "p",
      // no base class name
      null,
      // the children to use
      arg.element.children,
      // no wrap children function
      null,
      // the arg itself
      arg
    );
  }
  registry.REACTIFY["void-inline"] = reactifyVoidInline;
  registry.SERIALIZE["void-inline"] = serializeVoidInline;
  registry.INLINES["void-inline"] = true;
  registry.VOIDS["void-inline"] = true;
  registry.DESERIALIZE.byClassName["void-inline"] = deserializeVoidInline;
}

// ../serializer/types/unmanaged.ts
function registerUnmanaged(registry) {
  function serializeUnmanaged(element) {
    return serializeElementBase(
      // the registry
      registry,
      // the list in question component
      element,
      // now the tag to use depends
      element.tagName,
      // no base class
      null,
      // no extra attributes
      null,
      // the children to use
      element.children
    );
  }
  function deserializeUnmanaged(node) {
    const base = deserializeElementBase(node);
    const unmanaged = __spreadProps(__spreadValues({}, base), {
      type: "unmanaged",
      tagName: node.tagName.toLowerCase(),
      children: deserializeChildrenForNode(node)
    });
    return unmanaged;
  }
  function reactifyUnmanaged(arg) {
    return reactifyElementBase(
      // the registry
      registry,
      // the tag to use
      arg.element.tagName,
      // the base class
      null,
      // the children to use
      arg.element.children,
      // the function to wrap the children
      null,
      // pass the given arg once again
      arg
    );
  }
  registry.DESERIALIZE.unmanaged = deserializeUnmanaged;
  registry.SERIALIZE.unmanaged = serializeUnmanaged;
  registry.REACTIFY.unmanaged = reactifyUnmanaged;
  registry.BLOCKS.unmanaged = true;
}

// ../serializer/index.ts
var SERIALIZATION_REGISTRY = {
  SERIALIZE: {},
  DESERIALIZE: {
    byClassName: {},
    byClassNamePrefix: {},
    byTag: {},
    text: null,
    unmanaged: null
  },
  ALLOWS_CHILDREN: {},
  PROHIBIT_TEXT: {},
  ON_EMPTY_FILL_WITH: {},
  ON_INVALID_CHILDREN_WRAP_WITH: {},
  ON_INVALID_TEXT_WRAP_WITH: {},
  VOIDS: {},
  INLINES: {},
  BLOCKS: {},
  SUPERBLOCKS: {
    document: true
  },
  REACTIFY: {},
  MERGABLES: {},
  CUSTOM_NORMALIZER_POST: {},
  CUSTOM_NORMALIZER_PRE: {}
};
registerVoidSuperBlock(SERIALIZATION_REGISTRY);
registerContainer(SERIALIZATION_REGISTRY);
registerInline(SERIALIZATION_REGISTRY);
registerCustom(SERIALIZATION_REGISTRY);
registerFile(SERIALIZATION_REGISTRY);
registerImage(SERIALIZATION_REGISTRY);
registerLink(SERIALIZATION_REGISTRY);
registerParagraph(SERIALIZATION_REGISTRY);
registerQuote(SERIALIZATION_REGISTRY);
registerText(SERIALIZATION_REGISTRY);
registerTitle(SERIALIZATION_REGISTRY);
registerVideo(SERIALIZATION_REGISTRY);
registerList(SERIALIZATION_REGISTRY);
registerListItem(SERIALIZATION_REGISTRY);
registerTableElements(SERIALIZATION_REGISTRY);
registerVoidBlock(SERIALIZATION_REGISTRY);
registerVoidInline(SERIALIZATION_REGISTRY);
registerUnmanaged(SERIALIZATION_REGISTRY);
SERIALIZATION_REGISTRY.ALLOWS_CHILDREN.document = SERIALIZATION_REGISTRY.ALLOWS_CHILDREN.container;
SERIALIZATION_REGISTRY.ON_INVALID_CHILDREN_WRAP_WITH.document = SERIALIZATION_REGISTRY.ON_INVALID_CHILDREN_WRAP_WITH.container;
SERIALIZATION_REGISTRY.ON_INVALID_TEXT_WRAP_WITH.document = SERIALIZATION_REGISTRY.ON_INVALID_TEXT_WRAP_WITH.container;
function isText(node) {
  return typeof node.text === "string";
}
function isMergable(node) {
  if (isText(node)) {
    return true;
  }
  return !!SERIALIZATION_REGISTRY.MERGABLES[node.type];
}
function isElement(node) {
  return typeof node.type === "string";
}
function isInline(node) {
  if (isText(node)) {
    return false;
  }
  return !!SERIALIZATION_REGISTRY.INLINES[node.type];
}
function isBlock(node) {
  if (isText(node)) {
    return false;
  }
  return !!SERIALIZATION_REGISTRY.BLOCKS[node.type];
}
function isSuperBlock(node) {
  if (isText(node)) {
    return false;
  }
  return !!SERIALIZATION_REGISTRY.SUPERBLOCKS[node.type];
}
function allowsText(node) {
  const prohibitTexts = SERIALIZATION_REGISTRY.PROHIBIT_TEXT[node.type];
  if (prohibitTexts || isSuperBlock(node)) {
    return false;
  }
  return true;
}
function isVoid(node) {
  if (isText(node)) {
    return false;
  }
  return typeof node.html === "string" || typeof node.textContent === "string" || !!SERIALIZATION_REGISTRY.VOIDS[node.type];
}
function getNodeFor(path, rootElement) {
  if (path.length === 0) {
    return rootElement;
  }
  let currentElement = rootElement;
  for (let i = 0; i < path.length; i++) {
    currentElement = currentElement.children[path[i]];
  }
  return currentElement;
}
function getParentNodeFor(path, rootElement) {
  if (path.length === 0) {
    return null;
  } else if (path.length === 1) {
    return rootElement;
  }
  const newPath = [...path];
  newPath.pop();
  let currentElement = rootElement;
  for (let i = 0; i < newPath.length; i++) {
    currentElement = currentElement.children[newPath[i]];
  }
  return currentElement;
}
function getContextFor(path, level, rootElement, rootContext) {
  if (!path || path.length === 0 || !rootContext) {
    return null;
  }
  const nextPath = [...path];
  const nextPathNumber = nextPath.shift();
  const isFinal = nextPath.length === 0;
  const nextElement = rootElement.children && rootElement.children[nextPathNumber];
  if (!nextElement) {
    return rootContext;
  }
  let nextContext = rootContext;
  if (isFinal && level === "select-context") {
    return nextContext;
  }
  const contextChange = nextElement.context;
  if (contextChange) {
    const nextPotentialContext = nextContext.properties[contextChange];
    if (!nextPotentialContext || nextPotentialContext.type !== "context" || nextPotentialContext.loopable) {
      return null;
    }
    nextContext = nextPotentialContext;
  }
  if (isFinal && level === "select-loop") {
    return nextContext;
  }
  const eachConextChange = nextElement.forEach;
  if (eachConextChange) {
    const nextPotentialContext = nextContext.properties[eachConextChange];
    if (!nextPotentialContext || nextPotentialContext.type !== "context" || !nextPotentialContext.loopable) {
      return null;
    }
    nextContext = nextPotentialContext;
  }
  return isFinal ? nextContext : getContextFor(nextPath, level, nextElement, nextContext);
}
var TEXT_NAMESPACE = "ee6ce529-24f8-455b-8dd0-8b5bd377820d";
var NULL_UUID = "83dd556b-889f-4a9b-aff0-f749a35a9c0f";
var basicCacheSize = 10;
var basicCache = [];
function cachedGetDataFromText(html) {
  if (!html || Array.isArray(html) && !html.length) {
    return {
      data: null,
      childNodes: []
    };
  }
  const cachedIndex = basicCache.findIndex((v) => v.html === html);
  if (cachedIndex !== -1) {
    const cached = basicCache[cachedIndex];
    basicCache.splice(cachedIndex, 1);
    basicCache.push(cached);
    return {
      data: cached.data,
      childNodes: cached.childNodes
    };
  }
  let data;
  let childNodes = null;
  if (typeof html === "string") {
    const cheapdiv = DOMWindow.document.createElement("div");
    cheapdiv.innerHTML = html;
    childNodes = Array.from(cheapdiv.childNodes);
    data = html;
  } else {
    childNodes = html || [];
    if (html !== null) {
      const cheapdiv = DOMWindow.document.createElement("div");
      Array.from(html).forEach((n) => {
        cheapdiv.appendChild(n);
      });
      data = cheapdiv.innerHTML;
    } else {
      data = null;
    }
  }
  basicCache.push({
    html,
    data,
    childNodes
  });
  if (basicCache.length > basicCacheSize) {
    basicCache.shift();
  }
  return {
    data,
    childNodes
  };
}
var deserializeCacheSize = 10;
var deserializeCache = [];
function deserialize(html, comparer, specialRules) {
  const dontNormalize = specialRules ? specialRules.dontNormalize || false : false;
  const useContextRulesOf = specialRules ? specialRules.useContextRulesOf || null : null;
  const ignoreNodesAt = specialRules ? specialRules.ignoreNodesAt || null : null;
  if (typeof html === "string" && !ignoreNodesAt) {
    const cachedIndex = deserializeCache.findIndex((v) => v.data === html && v.dontNormalize === dontNormalize && v.useContextRulesOf === useContextRulesOf);
    if (cachedIndex !== -1) {
      const cached = deserializeCache[cachedIndex];
      deserializeCache.splice(cachedIndex, 1);
      deserializeCache.push(cached);
      if (comparer && comparer.id === cached.doc.id) {
        return comparer;
      }
      return cached.doc;
    }
  }
  const { data, childNodes } = cachedGetDataFromText(html);
  if (typeof html !== "string" && !ignoreNodesAt) {
    const cachedIndex = deserializeCache.findIndex((v) => v.data === data && v.dontNormalize === dontNormalize && v.useContextRulesOf === useContextRulesOf);
    if (cachedIndex !== -1) {
      const cached = deserializeCache[cachedIndex];
      deserializeCache.splice(cachedIndex, 1);
      deserializeCache.push(cached);
      if (comparer && comparer.id === cached.doc.id) {
        return comparer;
      }
      return cached.doc;
    }
  }
  const expectedId = data === null ? NULL_UUID : (0, import_v5.default)(data, TEXT_NAMESPACE);
  if (comparer && comparer.id === expectedId) {
    if (!ignoreNodesAt) {
      deserializeCache.push({
        data,
        doc: comparer,
        dontNormalize,
        useContextRulesOf
      });
      if (deserializeCache.length > deserializeCacheSize) {
        deserializeCache.shift();
      }
    }
    return comparer;
  }
  const finalChildren = deserializeChildrenForNode({ childNodes });
  const newDocument = {
    type: "document",
    id: expectedId,
    rich: true,
    // note that we must have at least one paragraph in the final
    // result
    children: finalChildren.length === 0 ? [
      {
        type: "paragraph",
        children: [STANDARD_TEXT_NODE()]
      }
    ] : finalChildren
  };
  if (!dontNormalize) {
    normalize(newDocument, specialRules || null);
  }
  if (!ignoreNodesAt) {
    deserializeCache.push({
      data,
      doc: newDocument,
      dontNormalize,
      useContextRulesOf
    });
    if (deserializeCache.length > deserializeCacheSize) {
      deserializeCache.shift();
    }
  }
  return newDocument;
}
function normalize(doc, specialRules) {
  if (!doc.rich || specialRules && specialRules.dontNormalize) {
    return doc;
  }
  return normalizeElement(doc, [], doc, null, specialRules || null);
}
var standardExecFn = (root) => ({
  workOnOriginal: true,
  updateNodeAt(path, data) {
    const node = getNodeFor(path, root);
    Object.keys(data).forEach((k) => {
      node[k] = data[k];
    });
  },
  deleteNodeAt(path) {
    const node = getNodeFor(path, root);
    const parent = getParentNodeFor(path, root);
    parent.children.splice(path[path.length - 1], 1);
  },
  wrapNodeAt(path, wrappers) {
    const parentOfNodeToWrap = getParentNodeFor(path, root);
    const indexAtChild = path[path.length - 1];
    wrappers.forEach((w) => {
      const childToWrap = parentOfNodeToWrap.children[indexAtChild];
      w.children = [childToWrap];
      parentOfNodeToWrap.children[indexAtChild] = w;
    });
  },
  insertNodeAt(path, node, targetIndex) {
    const element = getNodeFor(path, root);
    element.children.splice(targetIndex, 0, node);
  },
  mergeNodesAt(basePath, referencePath) {
    const base = getNodeFor(basePath, root);
    const reference = getNodeFor(referencePath, root);
    const parent = getParentNodeFor(basePath, root);
    if (typeof base.type !== "undefined") {
      base.children = base.children.concat(reference.children);
    } else {
      base.text += reference.text;
    }
    parent.children.splice(referencePath[referencePath.length - 1], 1);
  },
  splitElementAndEscapeChildIntoParentAt(path, escapingChildIndex) {
    const element = getNodeFor(path, root);
    const parent = getParentNodeFor(path, root);
    const allNodesBeforeThis = element.children.slice(0, escapingChildIndex);
    const escapingChild = element.children[escapingChildIndex];
    const allNodesAfterThis = element.children.slice(escapingChildIndex + 1);
    element.children = allNodesBeforeThis;
    const newElement = __spreadProps(__spreadValues({}, element), {
      children: allNodesAfterThis
    });
    const indexAtParent = path[path.length - 1] + 1;
    parent.children.splice(indexAtParent, 0, newElement);
    parent.children.splice(indexAtParent, 0, escapingChild);
  },
  getNodeAt(path) {
    return getNodeFor(path, root);
  },
  cloneElementAt(fromPath, toPath) {
    const elementToCopy = getNodeFor(fromPath, root);
    const copy = __spreadValues({}, elementToCopy);
    copy.children = [];
    const parentTarget = getParentNodeFor(toPath, root);
    const indexTarget = toPath[toPath.length - 1];
    parentTarget.children.splice(indexTarget, 0, copy);
  },
  moveNodeAt(fromPath, toPath) {
    const elementToMove = getNodeFor(fromPath, root);
    const parentSource = getParentNodeFor(fromPath, root);
    const parentTarget = getParentNodeFor(toPath, root);
    const indexTarget = toPath[toPath.length - 1];
    parentSource.children.splice(fromPath[fromPath.length - 1], 1);
    parentTarget.children.splice(indexTarget, 0, elementToMove);
  }
});
function normalizeSpacing(element, path, primaryExecution, secondaryExecution, specialRules) {
  const isIgnored = isIgnoredNode(path, specialRules);
  if (isIgnored) {
    return;
  }
  if (element.children.length && element.children.some((r) => isInline(r))) {
    let offset = 0;
    const childrenAmount = element.children.length;
    for (let i = 0; i < childrenAmount; i++) {
      let actualIndex = i + offset;
      const currentNode = element.children[actualIndex];
      const currentNodePath = [...path, actualIndex];
      const isIgnored2 = isIgnoredNode(currentNodePath, specialRules);
      if (isIgnored2) {
        continue;
      }
      if (isInline(currentNode)) {
        const prevNode = element.children[actualIndex - 1];
        const nextNode = element.children[actualIndex + 1];
        const textNodeStart = currentNode.children[0];
        const textNodeEnd = currentNode.children[currentNode.children.length - 1];
        if (!prevNode || typeof prevNode.text === "undefined") {
          const textReference = __spreadProps(__spreadValues({
            bold: false,
            italic: false,
            underline: false
          }, copyElementBase(textNodeStart)), {
            text: ""
          });
          primaryExecution.insertNodeAt(
            path,
            textReference,
            // insert where we are now and push us forwards
            actualIndex
          );
          secondaryExecution && secondaryExecution.insertNodeAt(
            path,
            textReference,
            // insert where we are now and push us forwards
            actualIndex
          );
          actualIndex += 1;
          offset += 1;
        }
        if (!nextNode || typeof nextNode.text === "undefined") {
          const textReference = __spreadProps(__spreadValues({
            bold: false,
            italic: false,
            underline: false
          }, copyElementBase(textNodeEnd)), {
            text: ""
          });
          primaryExecution.insertNodeAt(
            path,
            textReference,
            // insert ahead of where we are now and push everything else
            // forwards
            actualIndex + 1
          );
          secondaryExecution && secondaryExecution.insertNodeAt(
            path,
            textReference,
            // insert ahead of where we are now and push everything else
            // forwards
            actualIndex + 1
          );
          actualIndex += 1;
          offset += 1;
        }
      }
    }
    ;
  }
  if (element.children.length >= 2) {
    const childrenAmount = element.children.length;
    if (childrenAmount >= 2) {
      let offset = 0;
      for (let i = 0; i < childrenAmount; i++) {
        const actualIndex = i + offset;
        const v = element.children[actualIndex];
        const prevNode = element.children[actualIndex - 1];
        const nextNode = element.children[actualIndex + 1];
        const isInlineSeparator = (!prevNode || isInline(prevNode)) && (!nextNode || isInline(nextNode));
        if (isInlineSeparator) {
          continue;
        }
        const nodePath = [...path, actualIndex];
        const isIgnored2 = isIgnoredNode(nodePath, specialRules);
        if (isIgnored2) {
          continue;
        }
        if (typeof v.text !== "undefined" && !v.text) {
          primaryExecution.deleteNodeAt(
            nodePath
          );
          secondaryExecution && secondaryExecution.deleteNodeAt(
            nodePath
          );
          offset -= 1;
        }
      }
    }
  }
  if (element.children.length === 0 && (isInline(element) || isBlock(element) || isSuperBlock(element))) {
    const nodeToInsert = allowsText(element) ? STANDARD_TEXT_NODE() : SERIALIZATION_REGISTRY.ON_EMPTY_FILL_WITH[element.type]();
    primaryExecution.insertNodeAt(
      path,
      nodeToInsert,
      0
    );
    secondaryExecution && secondaryExecution.insertNodeAt(
      path,
      nodeToInsert,
      0
    );
  } else if (element.children.length >= 2) {
    let offset = 0;
    const childrenAmount = element.children.length;
    for (let i = 0; i < childrenAmount; i++) {
      const actualIndex = i + offset;
      if (i === 0) {
        continue;
      }
      const n1 = element.children[actualIndex - 1];
      const n2 = element.children[actualIndex];
      const shouldMerge = checkShouldMerge(n1, n2);
      if (shouldMerge) {
        const basePath = [...path, actualIndex - 1];
        const referencePath = [...path, actualIndex];
        primaryExecution.mergeNodesAt(
          basePath,
          referencePath
        );
        secondaryExecution && secondaryExecution.mergeNodesAt(
          basePath,
          referencePath
        );
        offset -= 1;
      }
    }
  }
  element.children.forEach((c, index) => {
    const childrenPath = [...path, index];
    const isIgnored2 = isIgnoredNode(childrenPath, specialRules);
    if (!isIgnored2 && c.type) {
      normalizeSpacing(c, childrenPath, primaryExecution, secondaryExecution, specialRules);
    }
  });
}
function isIgnoredNode(path, specialRules) {
  if (!specialRules || !specialRules.ignoreNodesAt) {
    return false;
  }
  if (specialRules && specialRules.dontNormalize) {
    return true;
  }
  return specialRules.ignoreNodesAt.some((ignorePath) => {
    return ignorePath.every((v, index) => path[index] === v);
  });
}
function shallowRootCopy(element) {
  const newElement = {};
  const mergable = isText(element) || isMergable(element);
  Object.keys(element).forEach((key) => {
    if (key === "children") {
      newElement.children = element.children.map(shallowRootCopy);
    } else if (key === "text") {
      if (element[key]) {
        newElement[key] = "?";
      } else {
        newElement[key] = "";
      }
    } else if (
      // required for voids
      key === "html" || key === "textContent"
    ) {
      newElement[key] = "?";
    } else if (
      // important
      key === "type" || // inlines info are required all attributes for check for merging
      // to see if it can be merged with the next one
      mergable || // ui handler are required to get the context
      // for other normalization attributes
      key === "uiHandler" || key === "context" || key === "forEach"
    ) {
      newElement[key] = element[key];
    }
  });
  return newElement;
}
function normalizeElement(element, path, root, customExecution, specialRules) {
  if (specialRules && specialRules.dontNormalize) {
    return;
  }
  const primaryExecution = customExecution || standardExecFn(root);
  let executionRoot = root;
  let executionElement = element;
  let secondaryExecution = null;
  if (!primaryExecution.workOnOriginal) {
    executionRoot = shallowRootCopy(root);
    secondaryExecution = standardExecFn(executionRoot);
    executionElement = getNodeFor(path, executionRoot);
  }
  internalNormalizeElement(executionElement, path, executionRoot, primaryExecution, secondaryExecution, specialRules);
}
function internalNormalizeElement(element, path, executionRoot, primaryExecution, secondaryExecution, specialRules) {
  const type = element.type;
  const isIgnored = isIgnoredNode(path, specialRules);
  if (isIgnored) {
    return;
  }
  if (!specialRules || !specialRules._parentHandling) {
    runCustomNorm(
      "pre",
      element,
      path,
      executionRoot,
      primaryExecution,
      secondaryExecution,
      specialRules
    );
  }
  let offset = 0;
  let index = 0;
  while (true) {
    const actualChildIndex = index + offset;
    const childrenPath = [...path, actualChildIndex];
    const v = element.children[actualChildIndex];
    const isIgnored2 = isIgnoredNode(childrenPath, specialRules);
    if (isIgnored2) {
      index++;
      continue;
    } else if (!v) {
      break;
    }
    const cannotHaveTextAsChildren = SERIALIZATION_REGISTRY.SUPERBLOCKS[type] && // prevent deleting text in void superblocks
    !SERIALIZATION_REGISTRY.VOIDS[type] || SERIALIZATION_REGISTRY.PROHIBIT_TEXT[type];
    if (element.type === "unmanaged") {
      if (element.tagName === "br") {
        primaryExecution.updateNodeAt(
          childrenPath,
          { tagName: void 0, type: "paragraph", children: [STANDARD_TEXT_NODE()] }
        );
        secondaryExecution && secondaryExecution.updateNodeAt(
          childrenPath,
          { tagName: void 0, type: "paragraph", children: [STANDARD_TEXT_NODE()] }
        );
      } else {
        primaryExecution.deleteNodeAt(childrenPath);
        secondaryExecution && secondaryExecution.deleteNodeAt(childrenPath);
        offset -= 1;
      }
    } else if (typeof v.text === "string") {
      if (cannotHaveTextAsChildren) {
        const wrapper = SERIALIZATION_REGISTRY.ON_INVALID_TEXT_WRAP_WITH[type] ? SERIALIZATION_REGISTRY.ON_INVALID_TEXT_WRAP_WITH[type](v) : null;
        if (!wrapper) {
          primaryExecution.deleteNodeAt(childrenPath);
          secondaryExecution && secondaryExecution.deleteNodeAt(childrenPath);
          offset -= 1;
        } else {
          primaryExecution.wrapNodeAt(childrenPath, wrapper);
          secondaryExecution && secondaryExecution.wrapNodeAt(childrenPath, wrapper);
        }
      }
    } else {
      const isAllowedType = SERIALIZATION_REGISTRY.ALLOWS_CHILDREN[type] ? SERIALIZATION_REGISTRY.ALLOWS_CHILDREN[type].includes(v.type) : true;
      const isTextDeniedInSuperBlock = typeof v.text !== "undefined" && SERIALIZATION_REGISTRY.SUPERBLOCKS[element.type];
      const isInlineDeniedInSuperBlock = SERIALIZATION_REGISTRY.INLINES[v.type] && SERIALIZATION_REGISTRY.SUPERBLOCKS[element.type];
      const isInlineDeniedInInline = SERIALIZATION_REGISTRY.INLINES[v.type] && SERIALIZATION_REGISTRY.INLINES[element.type];
      const isBlockDeniedInBlock = SERIALIZATION_REGISTRY.BLOCKS[v.type] && SERIALIZATION_REGISTRY.BLOCKS[element.type];
      const isBlockDeniedInInline = SERIALIZATION_REGISTRY.BLOCKS[v.type] && SERIALIZATION_REGISTRY.INLINES[element.type];
      const isSuperblockDeniedInBlock = SERIALIZATION_REGISTRY.SUPERBLOCKS[v.type] && SERIALIZATION_REGISTRY.BLOCKS[element.type];
      const isSuperblockDeniedInInline = SERIALIZATION_REGISTRY.SUPERBLOCKS[v.type] && SERIALIZATION_REGISTRY.INLINES[element.type];
      const isNonTextDeniedInVoid = typeof v.text === "undefined" && SERIALIZATION_REGISTRY.VOIDS[element.type];
      const hasProblems = !isAllowedType || isInlineDeniedInSuperBlock || isInlineDeniedInInline || isBlockDeniedInBlock || isBlockDeniedInInline || isSuperblockDeniedInBlock || isSuperblockDeniedInInline || isNonTextDeniedInVoid;
      if (!hasProblems) {
        if (v.type) {
          internalNormalizeElement(
            v,
            childrenPath,
            executionRoot,
            primaryExecution,
            secondaryExecution,
            __spreadProps(__spreadValues({}, specialRules), { _parentHandling: true })
          );
        }
      } else {
        const canSolveByWrapping = isInlineDeniedInSuperBlock || isTextDeniedInSuperBlock || SERIALIZATION_REGISTRY.SUPERBLOCKS[element.type] && !isAllowedType;
        const canSolveBySplitting = isInlineDeniedInInline || isBlockDeniedInBlock || isSuperblockDeniedInBlock;
        const canSolveByDoubleSplitting = isSuperblockDeniedInInline;
        if (canSolveByWrapping) {
          const wrapper = SERIALIZATION_REGISTRY.ON_INVALID_CHILDREN_WRAP_WITH[type] ? SERIALIZATION_REGISTRY.ON_INVALID_CHILDREN_WRAP_WITH[type](v) : null;
          if (!wrapper) {
            primaryExecution.deleteNodeAt(childrenPath);
            secondaryExecution && secondaryExecution.deleteNodeAt(childrenPath);
            offset -= 1;
          } else {
            primaryExecution.wrapNodeAt(childrenPath, wrapper);
            secondaryExecution && secondaryExecution.wrapNodeAt(childrenPath, wrapper);
            if (!isTextDeniedInSuperBlock) {
              internalNormalizeElement(
                element.children[actualChildIndex],
                childrenPath,
                executionRoot,
                primaryExecution,
                secondaryExecution,
                __spreadProps(__spreadValues({}, specialRules), { _parentHandling: true })
              );
            }
          }
        } else if (canSolveBySplitting) {
          const expectedParentOfElementPath = [...path];
          expectedParentOfElementPath.pop();
          const targetToStorePath = isBlockDeniedInBlock || isSuperblockDeniedInBlock ? expectedParentOfElementPath || [] : expectedParentOfElementPath;
          const targetToStore = getNodeFor(targetToStorePath, executionRoot);
          const expectedType = isBlockDeniedInBlock || isSuperblockDeniedInBlock ? "superblock" : "block";
          if (!targetToStore || (expectedType === "superblock" ? isSuperBlock(targetToStore) : isBlock(targetToStore))) {
            console.warn("Cannot resolve, you have requested child normalization but the tree is invalid on the upper side");
          } else {
            primaryExecution.splitElementAndEscapeChildIntoParentAt(
              path,
              actualChildIndex
            );
            secondaryExecution && secondaryExecution.splitElementAndEscapeChildIntoParentAt(
              path,
              actualChildIndex
            );
            offset -= 1;
            const newChildIndex = path[path.length - 1] + 1;
            internalNormalizeElement(
              targetToStore.children[newChildIndex],
              targetToStorePath.concat([newChildIndex]),
              executionRoot,
              primaryExecution,
              secondaryExecution,
              __spreadProps(__spreadValues({}, specialRules), { _parentHandling: true })
            );
          }
        } else if (canSolveByDoubleSplitting) {
          const targetBlockPath = [...path];
          targetBlockPath.pop();
          const targetSuperBlock = getParentNodeFor(targetBlockPath, executionRoot);
          const targetBlock = getNodeFor(targetBlockPath, executionRoot);
          if (!targetSuperBlock || !isSuperBlock(targetSuperBlock) || !targetBlock || !isBlock(targetBlock)) {
            console.warn("Cannot resolve, you have requested child normalization but the tree is invalid on the upper side");
          } else {
            primaryExecution.splitElementAndEscapeChildIntoParentAt(
              path,
              actualChildIndex
            );
            secondaryExecution && secondaryExecution.splitElementAndEscapeChildIntoParentAt(
              path,
              actualChildIndex
            );
            offset -= 1;
            const newChildIndexAtBlock = path[path.length - 1] + 1;
            primaryExecution.splitElementAndEscapeChildIntoParentAt(
              targetBlockPath,
              newChildIndexAtBlock
            );
            secondaryExecution && secondaryExecution.splitElementAndEscapeChildIntoParentAt(
              targetBlockPath,
              newChildIndexAtBlock
            );
            const newChildPath = [...targetBlockPath];
            newChildPath[newChildPath.length - 1]++;
            const newChildIndexAtSuperBlock = newChildPath[newChildPath.length - 1];
            const ourElement = targetSuperBlock.children[newChildIndexAtSuperBlock];
            internalNormalizeElement(
              ourElement,
              newChildPath,
              executionRoot,
              primaryExecution,
              secondaryExecution,
              __spreadProps(__spreadValues({}, specialRules), { _parentHandling: true })
            );
          }
        } else {
          primaryExecution.deleteNodeAt(childrenPath);
          secondaryExecution && secondaryExecution.deleteNodeAt(childrenPath);
          offset -= 1;
        }
      }
    }
    index++;
  }
  if (!specialRules || !specialRules._parentHandling) {
    if (specialRules && specialRules.useContextRulesOf) {
      normalizeAccordingToUIHAndlerRules(
        element,
        path,
        executionRoot,
        primaryExecution,
        secondaryExecution,
        specialRules
      );
    }
    normalizeSpacing(
      element,
      path,
      primaryExecution,
      secondaryExecution,
      specialRules
    );
    runCustomNorm(
      "post",
      element,
      path,
      executionRoot,
      primaryExecution,
      secondaryExecution,
      specialRules
    );
  }
}
function runCustomNorm(time, element, path, executionRoot, primaryExecution, secondaryExecution, specialRules) {
  const customNorm = time === "pre" ? SERIALIZATION_REGISTRY.CUSTOM_NORMALIZER_PRE[element.type] : SERIALIZATION_REGISTRY.CUSTOM_NORMALIZER_POST[element.type];
  if (customNorm) {
    customNorm(element, path, executionRoot, primaryExecution, secondaryExecution, specialRules);
  }
  element.children.forEach((c, index) => {
    if (isElement(c)) {
      const childPath = [...path, index];
      runCustomNorm(
        time,
        c,
        childPath,
        executionRoot,
        primaryExecution,
        secondaryExecution,
        specialRules
      );
    }
  });
}
var patchList = {
  inline: "void-inline",
  "void-inline": "inline",
  paragraph: "void-block",
  "void-block": "paragraph",
  container: "void-superblock",
  "void-superblock": "container"
};
function normalizeAccordingToUIHAndlerRules(element, path, executionRoot, primaryExecution, secondaryExecution, specialRules) {
  const isIgnored = isIgnoredNode(path, specialRules);
  if (isIgnored) {
    return;
  }
  const uiHandler = element.uiHandler;
  const contextForThisElement = getContextFor(
    path,
    "final",
    executionRoot,
    specialRules.useContextRulesOf
  ) || specialRules.useContextRulesOf;
  let uiHandlerValue = contextForThisElement.properties[uiHandler];
  if (!uiHandlerValue || uiHandlerValue.type !== "ui-handler") {
    uiHandlerValue = null;
  }
  const parentPath = [...path];
  parentPath.pop();
  let deleteAllChildren = false;
  const isSelfInvalidTypeForUIHandler = uiHandlerValue && (uiHandlerValue.mustBeOfType && (Array.isArray(uiHandlerValue.mustBeOfType) ? !uiHandlerValue.mustBeOfType.includes(element.type) : uiHandlerValue.mustBeOfType !== element.type));
  const isUnallowedBecaseItsParentIsNotWhatSelfWants = uiHandlerValue && (uiHandlerValue.allowsParent && !uiHandlerValue.allowsParent(
    primaryExecution.getNodeAt(parentPath),
    primaryExecution.getNodeAt(path)
  ));
  if (isSelfInvalidTypeForUIHandler) {
    const isPatchable = !isUnallowedBecaseItsParentIsNotWhatSelfWants && patchList[element.type] && (Array.isArray(uiHandlerValue.mustBeOfType) ? uiHandlerValue.mustBeOfType.includes(patchList[element.type]) : uiHandlerValue.mustBeOfType === patchList[element.type]);
    if (!isPatchable) {
      primaryExecution.deleteNodeAt(
        path
      );
      secondaryExecution && secondaryExecution.deleteNodeAt(
        path
      );
      return;
    } else {
      const patching = {
        type: patchList[element.type]
      };
      if (patchList[element.type] === "container") {
        patching.containerType = null;
      }
      primaryExecution.updateNodeAt(
        path,
        patching
      );
      secondaryExecution && secondaryExecution.updateNodeAt(
        path,
        patching
      );
      if (isVoid(element)) {
        deleteAllChildren = true;
      }
      return;
    }
  } else if (isUnallowedBecaseItsParentIsNotWhatSelfWants) {
    primaryExecution.deleteNodeAt(
      path
    );
    secondaryExecution && secondaryExecution.deleteNodeAt(
      path
    );
    return;
  }
  let offset = 0;
  const childrenAmount = element.children.length;
  for (let i = 0; i < childrenAmount; i++) {
    let actualIndex = i + offset;
    const currentNode = element.children[actualIndex];
    const currentNodePath = [...path, actualIndex];
    const isIgnored2 = isIgnoredNode(currentNodePath, specialRules);
    if (isIgnored2 || !currentNode) {
      continue;
    }
    if (isElement(currentNode) || deleteAllChildren) {
      const nodeActual = primaryExecution.getNodeAt(currentNodePath);
      const selfActual = primaryExecution.getNodeAt(path);
      const shouldDelete = deleteAllChildren || uiHandlerValue && (uiHandlerValue.allowsChildren && !uiHandlerValue.allowsChildren(
        nodeActual,
        selfActual
      ));
      if (shouldDelete) {
        const patch = deleteAllChildren ? null : uiHandlerValue.patchChildren && uiHandlerValue.patchChildren(
          nodeActual,
          selfActual
        );
        if (patch) {
          primaryExecution.updateNodeAt(
            currentNodePath,
            patch
          );
          secondaryExecution && secondaryExecution.updateNodeAt(
            currentNodePath,
            patch
          );
          normalizeAccordingToUIHAndlerRules(
            primaryExecution.getNodeAt(
              currentNodePath
            ),
            currentNodePath,
            executionRoot,
            primaryExecution,
            secondaryExecution,
            specialRules
          );
        } else {
          primaryExecution.deleteNodeAt(
            currentNodePath
          );
          secondaryExecution && secondaryExecution.deleteNodeAt(
            currentNodePath
          );
          offset--;
        }
      } else {
        normalizeAccordingToUIHAndlerRules(
          currentNode,
          currentNodePath,
          executionRoot,
          primaryExecution,
          secondaryExecution,
          specialRules
        );
      }
    }
  }
}
function deserializeChildrenForNode(node) {
  const nodes = Array.from(node.childNodes);
  const resultRaw = [];
  for (let cnode of nodes) {
    const currentNodeInfo = deserializeElement(cnode);
    resultRaw.push(currentNodeInfo);
  }
  let finalResult = resultRaw.flat().filter((n) => n !== null);
  return finalResult;
}
function checkShouldMerge(n1, n2) {
  const isN1Mergable = typeof n1.text === "string" || SERIALIZATION_REGISTRY.MERGABLES[n1.type];
  const isN2Mergable = typeof n2.text === "string" || SERIALIZATION_REGISTRY.MERGABLES[n2.type];
  if (!isN1Mergable || !isN2Mergable) {
    return false;
  }
  return Object.keys(n1).concat(Object.keys(n2)).every((key) => {
    if (key === "children" || key === "text") {
      return true;
    }
    return (0, import_deep_equal.default)(n1[key], n2[key], { strict: true });
  });
}
var FORBIDDEN_UNMANAGED_TAGS = [
  "script",
  "keygen",
  "embed",
  "param",
  "wbr"
];
function deserializeElement(node) {
  const tagName = node.tagName;
  let raw = null;
  if (!tagName) {
    raw = SERIALIZATION_REGISTRY.DESERIALIZE.text(node);
  } else {
    const classList = node.classList;
    if (classList) {
      const foundPrefix = Object.keys(SERIALIZATION_REGISTRY.DESERIALIZE.byClassNamePrefix).find((prefix) => {
        return classList.forEach((v) => v.startsWith(prefix));
      });
      if (foundPrefix) {
        raw = SERIALIZATION_REGISTRY.DESERIALIZE.byClassNamePrefix[foundPrefix](node);
      } else {
        const foundExactClass = Object.keys(SERIALIZATION_REGISTRY.DESERIALIZE.byClassName).find((className) => {
          return classList.contains(className);
        });
        if (foundExactClass) {
          raw = SERIALIZATION_REGISTRY.DESERIALIZE.byClassName[foundExactClass](node);
        }
      }
    }
    if (!raw && SERIALIZATION_REGISTRY.DESERIALIZE.byTag[tagName]) {
      raw = SERIALIZATION_REGISTRY.DESERIALIZE.byTag[tagName](node);
    } else if (!FORBIDDEN_UNMANAGED_TAGS.includes(tagName)) {
      raw = SERIALIZATION_REGISTRY.DESERIALIZE.unmanaged(node);
    }
  }
  return raw || null;
}
var NULL_DOCUMENT = deserialize(null);

// example1.tsx
var TEXT_FROM_SERVER_1 = '<p style="position: fixed">this is some simple text</p><p class="malicious">that came from the server</p><p>and is being parsed by text engine</p><script>window.MALICIOUS = true<\/script>';
var TEXT_FROM_SERVER_2 = '<img src="https://external-server.com" /><p>invalid html</p></p>';
var TEXT_FROM_SERVER_3 = '<p>click <a href="https://external-server.com/malicious">here</a> or here <a href="./safe">here</a> </p>';
var TEXT_FROM_SERVER_4 = '<div class="container-happy"><p class="rich-text--sparkling-text">allowed custom class</p></div><div class="container-sad"><p>invalid container type</p></div><p>outside of container</p>';
var TEXT_FROM_SERVER_5 = '<a class="image"><div class="image-container"><div class="image-pad" style="padding-bottom: 56.25%"><img alt="example" data-src-height="720" data-src-id="FILEID" data-src-width="1280" loading="lazy"></div></div></a>';
var sanitized1 = sanitize({
  fileResolver: null
}, {
  supportedContainers: [],
  supportedCustoms: [],
  supportedRichClasses: [],
  supportedTables: [],
  supportsContainers: true,
  supportsCustom: true,
  supportsCustomStyles: true,
  supportsExternalLinks: true,
  supportsFiles: true,
  supportsFilesAccept: null,
  supportsImages: true,
  supportsImagesAccept: null,
  supportsLinks: true,
  supportsLists: true,
  supportsQuote: true,
  supportsRichClasses: true,
  supportsTables: true,
  supportsTemplating: true,
  supportsTitle: true,
  supportsVideos: true
}, TEXT_FROM_SERVER_1);
var sanitized2 = sanitize({
  fileResolver: null
}, {
  supportedContainers: [],
  supportedCustoms: [],
  supportedRichClasses: [],
  supportedTables: [],
  supportsContainers: true,
  supportsCustom: true,
  supportsCustomStyles: true,
  supportsExternalLinks: true,
  supportsFiles: true,
  supportsFilesAccept: null,
  supportsImages: true,
  supportsImagesAccept: null,
  supportsLinks: true,
  supportsLists: true,
  supportsQuote: true,
  supportsRichClasses: true,
  supportsTables: true,
  supportsTemplating: true,
  supportsTitle: true,
  supportsVideos: true
}, TEXT_FROM_SERVER_2);
var sanitized3 = sanitize({
  fileResolver: null
}, {
  supportedContainers: [],
  supportedCustoms: [],
  supportedRichClasses: [],
  supportedTables: [],
  supportsContainers: true,
  supportsCustom: true,
  supportsCustomStyles: true,
  // disabling external links
  supportsExternalLinks: false,
  supportsFiles: true,
  supportsFilesAccept: null,
  supportsImages: true,
  supportsImagesAccept: null,
  supportsLinks: true,
  supportsLists: true,
  supportsQuote: true,
  supportsRichClasses: true,
  supportsTables: true,
  supportsTemplating: true,
  supportsTitle: true,
  supportsVideos: true
}, TEXT_FROM_SERVER_3);
var sanitized4 = sanitize({
  fileResolver: null
}, {
  supportedContainers: ["happy"],
  supportedCustoms: [],
  supportedRichClasses: ["sparkling-text"],
  supportedTables: [],
  supportsContainers: true,
  supportsCustom: true,
  supportsCustomStyles: true,
  // disabling external links
  supportsExternalLinks: false,
  supportsFiles: true,
  supportsFilesAccept: null,
  supportsImages: true,
  supportsImagesAccept: null,
  supportsLinks: true,
  supportsLists: true,
  supportsQuote: true,
  supportsRichClasses: true,
  supportsTables: true,
  supportsTemplating: true,
  supportsTitle: true,
  supportsVideos: true
}, TEXT_FROM_SERVER_4);
var sanitized4_2 = sanitize({
  fileResolver: null
}, {
  supportedContainers: [],
  supportedCustoms: [],
  supportedRichClasses: [],
  supportedTables: [],
  // disabling containers
  supportsContainers: false,
  supportsCustom: true,
  supportsCustomStyles: true,
  // disabling external links
  supportsExternalLinks: false,
  supportsFiles: true,
  supportsFilesAccept: null,
  supportsImages: true,
  supportsImagesAccept: null,
  supportsLinks: true,
  supportsLists: true,
  supportsQuote: true,
  supportsRichClasses: true,
  supportsTables: true,
  supportsTemplating: true,
  supportsTitle: true,
  supportsVideos: true
}, TEXT_FROM_SERVER_4);
var sanitized5 = sanitize({
  // resolving a file
  fileResolver: (id) => {
    return {
      src: "./img/example-img.jpeg"
      // no srcset specified
    };
  }
}, {
  supportedContainers: [],
  supportedCustoms: [],
  supportedRichClasses: [],
  supportedTables: [],
  supportsContainers: true,
  supportsCustom: true,
  supportsCustomStyles: true,
  // disabling external links
  supportsExternalLinks: false,
  supportsFiles: true,
  supportsFilesAccept: null,
  supportsImages: true,
  supportsImagesAccept: null,
  supportsLinks: true,
  supportsLists: true,
  supportsQuote: true,
  supportsRichClasses: true,
  supportsTables: true,
  supportsTemplating: true,
  supportsTitle: true,
  supportsVideos: true
}, TEXT_FROM_SERVER_5);
var textTree1 = deserialize(TEXT_FROM_SERVER_1);
var textTree1_2 = deserialize(sanitized1);
var textTree2 = deserialize(sanitized2);
var textTree3 = deserialize(sanitized3);
function Example() {
  return /* @__PURE__ */ import_react7.default.createElement("div", null, /* @__PURE__ */ import_react7.default.createElement("h1", null, "Basic Parsing and Data Displaying"), /* @__PURE__ */ import_react7.default.createElement("section", null, /* @__PURE__ */ import_react7.default.createElement("div", null, "Original HTML:"), /* @__PURE__ */ import_react7.default.createElement("code", null, TEXT_FROM_SERVER_1), /* @__PURE__ */ import_react7.default.createElement("div", null, "Sanitized HTML (can be used in dangerouslySetInnerHTML):"), /* @__PURE__ */ import_react7.default.createElement("code", null, sanitized1), /* @__PURE__ */ import_react7.default.createElement("div", null, "Deserialized HTML Tree (Unsanitized, Unsafe):"), /* @__PURE__ */ import_react7.default.createElement("code", null, JSON.stringify(textTree1, null, 2)), /* @__PURE__ */ import_react7.default.createElement("div", null, "Deserialized HTML Tree (Sanitized, Safe):"), /* @__PURE__ */ import_react7.default.createElement("code", null, JSON.stringify(textTree1_2, null, 2))), /* @__PURE__ */ import_react7.default.createElement("section", null, /* @__PURE__ */ import_react7.default.createElement("div", null, "Original HTML:"), /* @__PURE__ */ import_react7.default.createElement("code", null, TEXT_FROM_SERVER_2), /* @__PURE__ */ import_react7.default.createElement("div", null, "Sanitized HTML (can be used in dangerouslySetInnerHTML):"), /* @__PURE__ */ import_react7.default.createElement("code", null, sanitized2), /* @__PURE__ */ import_react7.default.createElement("div", null, "Deserialized HTML Tree (Sanitized, Safe):"), /* @__PURE__ */ import_react7.default.createElement("code", null, JSON.stringify(textTree2, null, 2))), /* @__PURE__ */ import_react7.default.createElement("section", null, /* @__PURE__ */ import_react7.default.createElement("div", null, "Original HTML:"), /* @__PURE__ */ import_react7.default.createElement("code", null, TEXT_FROM_SERVER_3), /* @__PURE__ */ import_react7.default.createElement("div", null, "Sanitized HTML (external links are disabled):"), /* @__PURE__ */ import_react7.default.createElement("code", null, sanitized3), /* @__PURE__ */ import_react7.default.createElement("div", null, "Deserialized HTML Tree (Sanitized, Safe):"), /* @__PURE__ */ import_react7.default.createElement("code", null, JSON.stringify(textTree3, null, 2))), /* @__PURE__ */ import_react7.default.createElement("section", null, /* @__PURE__ */ import_react7.default.createElement("div", null, "Original HTML:"), /* @__PURE__ */ import_react7.default.createElement("code", null, TEXT_FROM_SERVER_4), /* @__PURE__ */ import_react7.default.createElement("div", null, "Sanitized HTML (container-happy and sparkling-text are allowed):"), /* @__PURE__ */ import_react7.default.createElement("code", null, sanitized4), /* @__PURE__ */ import_react7.default.createElement("div", null, "Displayed of sanitized"), /* @__PURE__ */ import_react7.default.createElement("div", { className: "rich-text", dangerouslySetInnerHTML: { __html: sanitized4 }, style: { padding: "10px", border: "solid 1px #ccc" } }), /* @__PURE__ */ import_react7.default.createElement("div", null, "Sanitized HTML (containers are not allowed):"), /* @__PURE__ */ import_react7.default.createElement("code", null, sanitized4_2)), /* @__PURE__ */ import_react7.default.createElement("section", null, /* @__PURE__ */ import_react7.default.createElement("div", null, "Original HTML:"), /* @__PURE__ */ import_react7.default.createElement("code", null, TEXT_FROM_SERVER_5), /* @__PURE__ */ import_react7.default.createElement("div", null, "Sanitized HTML (during sanitization images are resolved, since the original source isn't trusted anyway):"), /* @__PURE__ */ import_react7.default.createElement("code", null, sanitized5), /* @__PURE__ */ import_react7.default.createElement("div", null, "Displayed of sanitized"), /* @__PURE__ */ import_react7.default.createElement("div", { className: "rich-text", dangerouslySetInnerHTML: { __html: sanitized5 }, style: { padding: "10px", border: "solid 1px #ccc" } })));
}
import_react_dom.default.render(/* @__PURE__ */ import_react7.default.createElement(Example, null), document.querySelector("#app"));
/*! Bundled license information:

dompurify/dist/purify.js:
  (*! @license DOMPurify 3.0.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.8/LICENSE *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL2RvbXB1cmlmeS9zcmMvdXRpbHMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2RvbXB1cmlmeS9zcmMvdGFncy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvZG9tcHVyaWZ5L3NyYy9hdHRycy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvZG9tcHVyaWZ5L3NyYy9yZWdleHAuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2RvbXB1cmlmeS9zcmMvcHVyaWZ5LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvdjM1LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9zaGExLWJyb3dzZXIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3V1aWQvdjUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL29iamVjdC1rZXlzL2lzQXJndW1lbnRzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9vYmplY3Qta2V5cy9pbXBsZW1lbnRhdGlvbi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvb2JqZWN0LWtleXMvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2hhcy1zeW1ib2xzL3NoYW1zLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9oYXMtdG9zdHJpbmd0YWcvc2hhbXMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2hhcy1zeW1ib2xzL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9oYXMtcHJvdG8vaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2Z1bmN0aW9uLWJpbmQvaW1wbGVtZW50YXRpb24uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2Z1bmN0aW9uLWJpbmQvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2hhc293bi9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvZ2V0LWludHJpbnNpYy9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvaGFzLXByb3BlcnR5LWRlc2NyaXB0b3JzL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9nb3BkL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9kZWZpbmUtZGF0YS1wcm9wZXJ0eS9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvc2V0LWZ1bmN0aW9uLWxlbmd0aC9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvY2FsbC1iaW5kL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9jYWxsLWJpbmQvY2FsbEJvdW5kLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9pcy1hcmd1bWVudHMvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2RlZmluZS1wcm9wZXJ0aWVzL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9vYmplY3QtaXMvaW1wbGVtZW50YXRpb24uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL29iamVjdC1pcy9wb2x5ZmlsbC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvb2JqZWN0LWlzL3NoaW0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL29iamVjdC1pcy9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvaXMtcmVnZXgvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2Z1bmN0aW9ucy1oYXZlLW5hbWVzL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9zZXQtZnVuY3Rpb24tbmFtZS9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVnZXhwLnByb3RvdHlwZS5mbGFncy9pbXBsZW1lbnRhdGlvbi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVnZXhwLnByb3RvdHlwZS5mbGFncy9wb2x5ZmlsbC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVnZXhwLnByb3RvdHlwZS5mbGFncy9zaGltLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZWdleHAucHJvdG90eXBlLmZsYWdzL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9pcy1kYXRlLW9iamVjdC9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvZGVlcC1lcXVhbC9pbmRleC5qcyIsICIuLi9leGFtcGxlMS50c3giLCAiLi4vLi4vc2VyaWFsaXplci9kb20udHMiLCAiLi4vLi4vc2VyaWFsaXplci9iYXNlLnRzeCIsICIuLi8uLi9zZXJpYWxpemVyL2R5bmFtaWMtY29tcG9uZW50LnRzeCIsICIuLi8uLi9zZXJpYWxpemVyL3RlbXBsYXRlLWFyZ3MudHMiLCAiLi4vLi4vc2FuaXRpemVyL2luZGV4LnRzIiwgIi4uLy4uL3NlcmlhbGl6ZXIvdHlwZXMvdGV4dC50c3giLCAiLi4vLi4vc2VyaWFsaXplci90eXBlcy9wYXJhZ3JhcGgudHMiLCAiLi4vLi4vc2VyaWFsaXplci90eXBlcy9jb250YWluZXIudHMiLCAiLi4vLi4vc2VyaWFsaXplci90eXBlcy9jdXN0b20udHMiLCAiLi4vLi4vc2VyaWFsaXplci90eXBlcy9maWxlLnRzeCIsICIuLi8uLi9zZXJpYWxpemVyL3R5cGVzL2ltYWdlLnRzeCIsICIuLi8uLi9zZXJpYWxpemVyL3R5cGVzL2xpbmsudHMiLCAiLi4vLi4vc2VyaWFsaXplci90eXBlcy9xdW90ZS50cyIsICIuLi8uLi9zZXJpYWxpemVyL3R5cGVzL3RpdGxlLnRzIiwgIi4uLy4uL3NlcmlhbGl6ZXIvdHlwZXMvdmlkZW8udHN4IiwgIi4uLy4uL3NlcmlhbGl6ZXIvdHlwZXMvbGlzdC50cyIsICIuLi8uLi9zZXJpYWxpemVyL3R5cGVzL2xpc3QtaXRlbS50cyIsICIuLi8uLi9zZXJpYWxpemVyL3R5cGVzL2lubGluZS50cyIsICIuLi8uLi9zZXJpYWxpemVyL3R5cGVzL3RhYmxlLnRzIiwgIi4uLy4uL3NlcmlhbGl6ZXIvaW5kZXgudHMiLCAiLi4vLi4vc2VyaWFsaXplci90eXBlcy92b2lkLWJsb2NrLnRzIiwgIi4uLy4uL3NlcmlhbGl6ZXIvdHlwZXMvdm9pZC1zdXBlcmJsb2NrLnRzIiwgIi4uLy4uL3NlcmlhbGl6ZXIvdHlwZXMvdm9pZC1pbmxpbmUudHMiLCAiLi4vLi4vc2VyaWFsaXplci90eXBlcy91bm1hbmFnZWQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IHtcbiAgZW50cmllcyxcbiAgc2V0UHJvdG90eXBlT2YsXG4gIGlzRnJvemVuLFxuICBnZXRQcm90b3R5cGVPZixcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxufSA9IE9iamVjdDtcblxubGV0IHsgZnJlZXplLCBzZWFsLCBjcmVhdGUgfSA9IE9iamVjdDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXG5sZXQgeyBhcHBseSwgY29uc3RydWN0IH0gPSB0eXBlb2YgUmVmbGVjdCAhPT0gJ3VuZGVmaW5lZCcgJiYgUmVmbGVjdDtcblxuaWYgKCFmcmVlemUpIHtcbiAgZnJlZXplID0gZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cblxuaWYgKCFzZWFsKSB7XG4gIHNlYWwgPSBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4O1xuICB9O1xufVxuXG5pZiAoIWFwcGx5KSB7XG4gIGFwcGx5ID0gZnVuY3Rpb24gKGZ1biwgdGhpc1ZhbHVlLCBhcmdzKSB7XG4gICAgcmV0dXJuIGZ1bi5hcHBseSh0aGlzVmFsdWUsIGFyZ3MpO1xuICB9O1xufVxuXG5pZiAoIWNvbnN0cnVjdCkge1xuICBjb25zdHJ1Y3QgPSBmdW5jdGlvbiAoRnVuYywgYXJncykge1xuICAgIHJldHVybiBuZXcgRnVuYyguLi5hcmdzKTtcbiAgfTtcbn1cblxuY29uc3QgYXJyYXlGb3JFYWNoID0gdW5hcHBseShBcnJheS5wcm90b3R5cGUuZm9yRWFjaCk7XG5jb25zdCBhcnJheUluZGV4T2YgPSB1bmFwcGx5KEFycmF5LnByb3RvdHlwZS5pbmRleE9mKTtcbmNvbnN0IGFycmF5UG9wID0gdW5hcHBseShBcnJheS5wcm90b3R5cGUucG9wKTtcbmNvbnN0IGFycmF5UHVzaCA9IHVuYXBwbHkoQXJyYXkucHJvdG90eXBlLnB1c2gpO1xuY29uc3QgYXJyYXlTbGljZSA9IHVuYXBwbHkoQXJyYXkucHJvdG90eXBlLnNsaWNlKTtcblxuY29uc3Qgc3RyaW5nVG9Mb3dlckNhc2UgPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUudG9Mb3dlckNhc2UpO1xuY29uc3Qgc3RyaW5nVG9TdHJpbmcgPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUudG9TdHJpbmcpO1xuY29uc3Qgc3RyaW5nTWF0Y2ggPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUubWF0Y2gpO1xuY29uc3Qgc3RyaW5nUmVwbGFjZSA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKTtcbmNvbnN0IHN0cmluZ0luZGV4T2YgPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUuaW5kZXhPZik7XG5jb25zdCBzdHJpbmdUcmltID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLnRyaW0pO1xuXG5jb25zdCByZWdFeHBUZXN0ID0gdW5hcHBseShSZWdFeHAucHJvdG90eXBlLnRlc3QpO1xuXG5jb25zdCB0eXBlRXJyb3JDcmVhdGUgPSB1bmNvbnN0cnVjdChUeXBlRXJyb3IpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZnVuY3Rpb24gdGhhdCBjYWxscyB0aGUgZ2l2ZW4gZnVuY3Rpb24gd2l0aCBhIHNwZWNpZmllZCB0aGlzQXJnIGFuZCBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyAtIFRoZSBmdW5jdGlvbiB0byBiZSB3cmFwcGVkIGFuZCBjYWxsZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgbmV3IGZ1bmN0aW9uIHRoYXQgY2FsbHMgdGhlIGdpdmVuIGZ1bmN0aW9uIHdpdGggYSBzcGVjaWZpZWQgdGhpc0FyZyBhbmQgYXJndW1lbnRzLlxuICovXG5mdW5jdGlvbiB1bmFwcGx5KGZ1bmMpIHtcbiAgcmV0dXJuICh0aGlzQXJnLCAuLi5hcmdzKSA9PiBhcHBseShmdW5jLCB0aGlzQXJnLCBhcmdzKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZ1bmN0aW9uIHRoYXQgY29uc3RydWN0cyBhbiBpbnN0YW5jZSBvZiB0aGUgZ2l2ZW4gY29uc3RydWN0b3IgZnVuY3Rpb24gd2l0aCB0aGUgcHJvdmlkZWQgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgLSBUaGUgY29uc3RydWN0b3IgZnVuY3Rpb24gdG8gYmUgd3JhcHBlZCBhbmQgY2FsbGVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIG5ldyBmdW5jdGlvbiB0aGF0IGNvbnN0cnVjdHMgYW4gaW5zdGFuY2Ugb2YgdGhlIGdpdmVuIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIHdpdGggdGhlIHByb3ZpZGVkIGFyZ3VtZW50cy5cbiAqL1xuZnVuY3Rpb24gdW5jb25zdHJ1Y3QoZnVuYykge1xuICByZXR1cm4gKC4uLmFyZ3MpID0+IGNvbnN0cnVjdChmdW5jLCBhcmdzKTtcbn1cblxuLyoqXG4gKiBBZGQgcHJvcGVydGllcyB0byBhIGxvb2t1cCB0YWJsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgLSBUaGUgc2V0IHRvIHdoaWNoIGVsZW1lbnRzIHdpbGwgYmUgYWRkZWQuXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIFRoZSBhcnJheSBjb250YWluaW5nIGVsZW1lbnRzIHRvIGJlIGFkZGVkIHRvIHRoZSBzZXQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm1DYXNlRnVuYyAtIEFuIG9wdGlvbmFsIGZ1bmN0aW9uIHRvIHRyYW5zZm9ybSB0aGUgY2FzZSBvZiBlYWNoIGVsZW1lbnQgYmVmb3JlIGFkZGluZyB0byB0aGUgc2V0LlxuICogQHJldHVybnMge09iamVjdH0gVGhlIG1vZGlmaWVkIHNldCB3aXRoIGFkZGVkIGVsZW1lbnRzLlxuICovXG5mdW5jdGlvbiBhZGRUb1NldChzZXQsIGFycmF5LCB0cmFuc2Zvcm1DYXNlRnVuYyA9IHN0cmluZ1RvTG93ZXJDYXNlKSB7XG4gIGlmIChzZXRQcm90b3R5cGVPZikge1xuICAgIC8vIE1ha2UgJ2luJyBhbmQgdHJ1dGh5IGNoZWNrcyBsaWtlIEJvb2xlYW4oc2V0LmNvbnN0cnVjdG9yKVxuICAgIC8vIGluZGVwZW5kZW50IG9mIGFueSBwcm9wZXJ0aWVzIGRlZmluZWQgb24gT2JqZWN0LnByb3RvdHlwZS5cbiAgICAvLyBQcmV2ZW50IHByb3RvdHlwZSBzZXR0ZXJzIGZyb20gaW50ZXJjZXB0aW5nIHNldCBhcyBhIHRoaXMgdmFsdWUuXG4gICAgc2V0UHJvdG90eXBlT2Yoc2V0LCBudWxsKTtcbiAgfVxuXG4gIGxldCBsID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobC0tKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBhcnJheVtsXTtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBsY0VsZW1lbnQgPSB0cmFuc2Zvcm1DYXNlRnVuYyhlbGVtZW50KTtcbiAgICAgIGlmIChsY0VsZW1lbnQgIT09IGVsZW1lbnQpIHtcbiAgICAgICAgLy8gQ29uZmlnIHByZXNldHMgKGUuZy4gdGFncy5qcywgYXR0cnMuanMpIGFyZSBpbW11dGFibGUuXG4gICAgICAgIGlmICghaXNGcm96ZW4oYXJyYXkpKSB7XG4gICAgICAgICAgYXJyYXlbbF0gPSBsY0VsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50ID0gbGNFbGVtZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIHNldFtlbGVtZW50XSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc2V0O1xufVxuXG4vKipcbiAqIENsZWFuIHVwIGFuIGFycmF5IHRvIGhhcmRlbiBhZ2FpbnN0IENTUFBcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIFRoZSBhcnJheSB0byBiZSBjbGVhbmVkLlxuICogQHJldHVybnMge0FycmF5fSBUaGUgY2xlYW5lZCB2ZXJzaW9uIG9mIHRoZSBhcnJheVxuICovXG5mdW5jdGlvbiBjbGVhbkFycmF5KGFycmF5KSB7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBpZiAoZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGFycmF5LCBpbmRleCkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYXJyYXlbaW5kZXhdID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogU2hhbGxvdyBjbG9uZSBhbiBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IC0gVGhlIG9iamVjdCB0byBiZSBjbG9uZWQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBBIG5ldyBvYmplY3QgdGhhdCBjb3BpZXMgdGhlIG9yaWdpbmFsLlxuICovXG5mdW5jdGlvbiBjbG9uZShvYmplY3QpIHtcbiAgY29uc3QgbmV3T2JqZWN0ID0gY3JlYXRlKG51bGwpO1xuXG4gIGZvciAoY29uc3QgW3Byb3BlcnR5LCB2YWx1ZV0gb2YgZW50cmllcyhvYmplY3QpKSB7XG4gICAgaWYgKGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgbmV3T2JqZWN0W3Byb3BlcnR5XSA9IGNsZWFuQXJyYXkodmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgdmFsdWUgJiZcbiAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgICAgICB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0XG4gICAgICApIHtcbiAgICAgICAgbmV3T2JqZWN0W3Byb3BlcnR5XSA9IGNsb25lKHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09iamVjdFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3T2JqZWN0O1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGF1dG9tYXRpY2FsbHkgY2hlY2tzIGlmIHRoZSBwcm9wIGlzIGZ1bmN0aW9uIG9yIGdldHRlciBhbmQgYmVoYXZlcyBhY2NvcmRpbmdseS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IC0gVGhlIG9iamVjdCB0byBsb29rIHVwIHRoZSBnZXR0ZXIgZnVuY3Rpb24gaW4gaXRzIHByb3RvdHlwZSBjaGFpbi5cbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wIC0gVGhlIHByb3BlcnR5IG5hbWUgZm9yIHdoaWNoIHRvIGZpbmQgdGhlIGdldHRlciBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gVGhlIGdldHRlciBmdW5jdGlvbiBmb3VuZCBpbiB0aGUgcHJvdG90eXBlIGNoYWluIG9yIGEgZmFsbGJhY2sgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGxvb2t1cEdldHRlcihvYmplY3QsIHByb3ApIHtcbiAgd2hpbGUgKG9iamVjdCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGRlc2MgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wKTtcblxuICAgIGlmIChkZXNjKSB7XG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIHVuYXBwbHkoZGVzYy5nZXQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGRlc2MudmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHVuYXBwbHkoZGVzYy52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZhbGxiYWNrVmFsdWUoZWxlbWVudCkge1xuICAgIGNvbnNvbGUud2FybignZmFsbGJhY2sgdmFsdWUgZm9yJywgZWxlbWVudCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZmFsbGJhY2tWYWx1ZTtcbn1cblxuZXhwb3J0IHtcbiAgLy8gQXJyYXlcbiAgYXJyYXlGb3JFYWNoLFxuICBhcnJheUluZGV4T2YsXG4gIGFycmF5UG9wLFxuICBhcnJheVB1c2gsXG4gIGFycmF5U2xpY2UsXG4gIC8vIE9iamVjdFxuICBlbnRyaWVzLFxuICBmcmVlemUsXG4gIGdldFByb3RvdHlwZU9mLFxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIGlzRnJvemVuLFxuICBzZXRQcm90b3R5cGVPZixcbiAgc2VhbCxcbiAgY2xvbmUsXG4gIGNyZWF0ZSxcbiAgLy8gUmVnRXhwXG4gIHJlZ0V4cFRlc3QsXG4gIC8vIFN0cmluZ1xuICBzdHJpbmdJbmRleE9mLFxuICBzdHJpbmdNYXRjaCxcbiAgc3RyaW5nUmVwbGFjZSxcbiAgc3RyaW5nVG9Mb3dlckNhc2UsXG4gIHN0cmluZ1RvU3RyaW5nLFxuICBzdHJpbmdUcmltLFxuICAvLyBFcnJvcnNcbiAgdHlwZUVycm9yQ3JlYXRlLFxuICAvLyBPdGhlclxuICBsb29rdXBHZXR0ZXIsXG4gIGFkZFRvU2V0LFxuICAvLyBSZWZsZWN0XG4gIHVuYXBwbHksXG4gIHVuY29uc3RydWN0LFxufTtcbiIsICJpbXBvcnQgeyBmcmVlemUgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuZXhwb3J0IGNvbnN0IGh0bWwgPSBmcmVlemUoW1xuICAnYScsXG4gICdhYmJyJyxcbiAgJ2Fjcm9ueW0nLFxuICAnYWRkcmVzcycsXG4gICdhcmVhJyxcbiAgJ2FydGljbGUnLFxuICAnYXNpZGUnLFxuICAnYXVkaW8nLFxuICAnYicsXG4gICdiZGknLFxuICAnYmRvJyxcbiAgJ2JpZycsXG4gICdibGluaycsXG4gICdibG9ja3F1b3RlJyxcbiAgJ2JvZHknLFxuICAnYnInLFxuICAnYnV0dG9uJyxcbiAgJ2NhbnZhcycsXG4gICdjYXB0aW9uJyxcbiAgJ2NlbnRlcicsXG4gICdjaXRlJyxcbiAgJ2NvZGUnLFxuICAnY29sJyxcbiAgJ2NvbGdyb3VwJyxcbiAgJ2NvbnRlbnQnLFxuICAnZGF0YScsXG4gICdkYXRhbGlzdCcsXG4gICdkZCcsXG4gICdkZWNvcmF0b3InLFxuICAnZGVsJyxcbiAgJ2RldGFpbHMnLFxuICAnZGZuJyxcbiAgJ2RpYWxvZycsXG4gICdkaXInLFxuICAnZGl2JyxcbiAgJ2RsJyxcbiAgJ2R0JyxcbiAgJ2VsZW1lbnQnLFxuICAnZW0nLFxuICAnZmllbGRzZXQnLFxuICAnZmlnY2FwdGlvbicsXG4gICdmaWd1cmUnLFxuICAnZm9udCcsXG4gICdmb290ZXInLFxuICAnZm9ybScsXG4gICdoMScsXG4gICdoMicsXG4gICdoMycsXG4gICdoNCcsXG4gICdoNScsXG4gICdoNicsXG4gICdoZWFkJyxcbiAgJ2hlYWRlcicsXG4gICdoZ3JvdXAnLFxuICAnaHInLFxuICAnaHRtbCcsXG4gICdpJyxcbiAgJ2ltZycsXG4gICdpbnB1dCcsXG4gICdpbnMnLFxuICAna2JkJyxcbiAgJ2xhYmVsJyxcbiAgJ2xlZ2VuZCcsXG4gICdsaScsXG4gICdtYWluJyxcbiAgJ21hcCcsXG4gICdtYXJrJyxcbiAgJ21hcnF1ZWUnLFxuICAnbWVudScsXG4gICdtZW51aXRlbScsXG4gICdtZXRlcicsXG4gICduYXYnLFxuICAnbm9icicsXG4gICdvbCcsXG4gICdvcHRncm91cCcsXG4gICdvcHRpb24nLFxuICAnb3V0cHV0JyxcbiAgJ3AnLFxuICAncGljdHVyZScsXG4gICdwcmUnLFxuICAncHJvZ3Jlc3MnLFxuICAncScsXG4gICdycCcsXG4gICdydCcsXG4gICdydWJ5JyxcbiAgJ3MnLFxuICAnc2FtcCcsXG4gICdzZWN0aW9uJyxcbiAgJ3NlbGVjdCcsXG4gICdzaGFkb3cnLFxuICAnc21hbGwnLFxuICAnc291cmNlJyxcbiAgJ3NwYWNlcicsXG4gICdzcGFuJyxcbiAgJ3N0cmlrZScsXG4gICdzdHJvbmcnLFxuICAnc3R5bGUnLFxuICAnc3ViJyxcbiAgJ3N1bW1hcnknLFxuICAnc3VwJyxcbiAgJ3RhYmxlJyxcbiAgJ3Rib2R5JyxcbiAgJ3RkJyxcbiAgJ3RlbXBsYXRlJyxcbiAgJ3RleHRhcmVhJyxcbiAgJ3Rmb290JyxcbiAgJ3RoJyxcbiAgJ3RoZWFkJyxcbiAgJ3RpbWUnLFxuICAndHInLFxuICAndHJhY2snLFxuICAndHQnLFxuICAndScsXG4gICd1bCcsXG4gICd2YXInLFxuICAndmlkZW8nLFxuICAnd2JyJyxcbl0pO1xuXG4vLyBTVkdcbmV4cG9ydCBjb25zdCBzdmcgPSBmcmVlemUoW1xuICAnc3ZnJyxcbiAgJ2EnLFxuICAnYWx0Z2x5cGgnLFxuICAnYWx0Z2x5cGhkZWYnLFxuICAnYWx0Z2x5cGhpdGVtJyxcbiAgJ2FuaW1hdGVjb2xvcicsXG4gICdhbmltYXRlbW90aW9uJyxcbiAgJ2FuaW1hdGV0cmFuc2Zvcm0nLFxuICAnY2lyY2xlJyxcbiAgJ2NsaXBwYXRoJyxcbiAgJ2RlZnMnLFxuICAnZGVzYycsXG4gICdlbGxpcHNlJyxcbiAgJ2ZpbHRlcicsXG4gICdmb250JyxcbiAgJ2cnLFxuICAnZ2x5cGgnLFxuICAnZ2x5cGhyZWYnLFxuICAnaGtlcm4nLFxuICAnaW1hZ2UnLFxuICAnbGluZScsXG4gICdsaW5lYXJncmFkaWVudCcsXG4gICdtYXJrZXInLFxuICAnbWFzaycsXG4gICdtZXRhZGF0YScsXG4gICdtcGF0aCcsXG4gICdwYXRoJyxcbiAgJ3BhdHRlcm4nLFxuICAncG9seWdvbicsXG4gICdwb2x5bGluZScsXG4gICdyYWRpYWxncmFkaWVudCcsXG4gICdyZWN0JyxcbiAgJ3N0b3AnLFxuICAnc3R5bGUnLFxuICAnc3dpdGNoJyxcbiAgJ3N5bWJvbCcsXG4gICd0ZXh0JyxcbiAgJ3RleHRwYXRoJyxcbiAgJ3RpdGxlJyxcbiAgJ3RyZWYnLFxuICAndHNwYW4nLFxuICAndmlldycsXG4gICd2a2VybicsXG5dKTtcblxuZXhwb3J0IGNvbnN0IHN2Z0ZpbHRlcnMgPSBmcmVlemUoW1xuICAnZmVCbGVuZCcsXG4gICdmZUNvbG9yTWF0cml4JyxcbiAgJ2ZlQ29tcG9uZW50VHJhbnNmZXInLFxuICAnZmVDb21wb3NpdGUnLFxuICAnZmVDb252b2x2ZU1hdHJpeCcsXG4gICdmZURpZmZ1c2VMaWdodGluZycsXG4gICdmZURpc3BsYWNlbWVudE1hcCcsXG4gICdmZURpc3RhbnRMaWdodCcsXG4gICdmZURyb3BTaGFkb3cnLFxuICAnZmVGbG9vZCcsXG4gICdmZUZ1bmNBJyxcbiAgJ2ZlRnVuY0InLFxuICAnZmVGdW5jRycsXG4gICdmZUZ1bmNSJyxcbiAgJ2ZlR2F1c3NpYW5CbHVyJyxcbiAgJ2ZlSW1hZ2UnLFxuICAnZmVNZXJnZScsXG4gICdmZU1lcmdlTm9kZScsXG4gICdmZU1vcnBob2xvZ3knLFxuICAnZmVPZmZzZXQnLFxuICAnZmVQb2ludExpZ2h0JyxcbiAgJ2ZlU3BlY3VsYXJMaWdodGluZycsXG4gICdmZVNwb3RMaWdodCcsXG4gICdmZVRpbGUnLFxuICAnZmVUdXJidWxlbmNlJyxcbl0pO1xuXG4vLyBMaXN0IG9mIFNWRyBlbGVtZW50cyB0aGF0IGFyZSBkaXNhbGxvd2VkIGJ5IGRlZmF1bHQuXG4vLyBXZSBzdGlsbCBuZWVkIHRvIGtub3cgdGhlbSBzbyB0aGF0IHdlIGNhbiBkbyBuYW1lc3BhY2Vcbi8vIGNoZWNrcyBwcm9wZXJseSBpbiBjYXNlIG9uZSB3YW50cyB0byBhZGQgdGhlbSB0b1xuLy8gYWxsb3ctbGlzdC5cbmV4cG9ydCBjb25zdCBzdmdEaXNhbGxvd2VkID0gZnJlZXplKFtcbiAgJ2FuaW1hdGUnLFxuICAnY29sb3ItcHJvZmlsZScsXG4gICdjdXJzb3InLFxuICAnZGlzY2FyZCcsXG4gICdmb250LWZhY2UnLFxuICAnZm9udC1mYWNlLWZvcm1hdCcsXG4gICdmb250LWZhY2UtbmFtZScsXG4gICdmb250LWZhY2Utc3JjJyxcbiAgJ2ZvbnQtZmFjZS11cmknLFxuICAnZm9yZWlnbm9iamVjdCcsXG4gICdoYXRjaCcsXG4gICdoYXRjaHBhdGgnLFxuICAnbWVzaCcsXG4gICdtZXNoZ3JhZGllbnQnLFxuICAnbWVzaHBhdGNoJyxcbiAgJ21lc2hyb3cnLFxuICAnbWlzc2luZy1nbHlwaCcsXG4gICdzY3JpcHQnLFxuICAnc2V0JyxcbiAgJ3NvbGlkY29sb3InLFxuICAndW5rbm93bicsXG4gICd1c2UnLFxuXSk7XG5cbmV4cG9ydCBjb25zdCBtYXRoTWwgPSBmcmVlemUoW1xuICAnbWF0aCcsXG4gICdtZW5jbG9zZScsXG4gICdtZXJyb3InLFxuICAnbWZlbmNlZCcsXG4gICdtZnJhYycsXG4gICdtZ2x5cGgnLFxuICAnbWknLFxuICAnbWxhYmVsZWR0cicsXG4gICdtbXVsdGlzY3JpcHRzJyxcbiAgJ21uJyxcbiAgJ21vJyxcbiAgJ21vdmVyJyxcbiAgJ21wYWRkZWQnLFxuICAnbXBoYW50b20nLFxuICAnbXJvb3QnLFxuICAnbXJvdycsXG4gICdtcycsXG4gICdtc3BhY2UnLFxuICAnbXNxcnQnLFxuICAnbXN0eWxlJyxcbiAgJ21zdWInLFxuICAnbXN1cCcsXG4gICdtc3Vic3VwJyxcbiAgJ210YWJsZScsXG4gICdtdGQnLFxuICAnbXRleHQnLFxuICAnbXRyJyxcbiAgJ211bmRlcicsXG4gICdtdW5kZXJvdmVyJyxcbiAgJ21wcmVzY3JpcHRzJyxcbl0pO1xuXG4vLyBTaW1pbGFybHkgdG8gU1ZHLCB3ZSB3YW50IHRvIGtub3cgYWxsIE1hdGhNTCBlbGVtZW50cyxcbi8vIGV2ZW4gdGhvc2UgdGhhdCB3ZSBkaXNhbGxvdyBieSBkZWZhdWx0LlxuZXhwb3J0IGNvbnN0IG1hdGhNbERpc2FsbG93ZWQgPSBmcmVlemUoW1xuICAnbWFjdGlvbicsXG4gICdtYWxpZ25ncm91cCcsXG4gICdtYWxpZ25tYXJrJyxcbiAgJ21sb25nZGl2JyxcbiAgJ21zY2FycmllcycsXG4gICdtc2NhcnJ5JyxcbiAgJ21zZ3JvdXAnLFxuICAnbXN0YWNrJyxcbiAgJ21zbGluZScsXG4gICdtc3JvdycsXG4gICdzZW1hbnRpY3MnLFxuICAnYW5ub3RhdGlvbicsXG4gICdhbm5vdGF0aW9uLXhtbCcsXG4gICdtcHJlc2NyaXB0cycsXG4gICdub25lJyxcbl0pO1xuXG5leHBvcnQgY29uc3QgdGV4dCA9IGZyZWV6ZShbJyN0ZXh0J10pO1xuIiwgImltcG9ydCB7IGZyZWV6ZSB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG5leHBvcnQgY29uc3QgaHRtbCA9IGZyZWV6ZShbXG4gICdhY2NlcHQnLFxuICAnYWN0aW9uJyxcbiAgJ2FsaWduJyxcbiAgJ2FsdCcsXG4gICdhdXRvY2FwaXRhbGl6ZScsXG4gICdhdXRvY29tcGxldGUnLFxuICAnYXV0b3BpY3R1cmVpbnBpY3R1cmUnLFxuICAnYXV0b3BsYXknLFxuICAnYmFja2dyb3VuZCcsXG4gICdiZ2NvbG9yJyxcbiAgJ2JvcmRlcicsXG4gICdjYXB0dXJlJyxcbiAgJ2NlbGxwYWRkaW5nJyxcbiAgJ2NlbGxzcGFjaW5nJyxcbiAgJ2NoZWNrZWQnLFxuICAnY2l0ZScsXG4gICdjbGFzcycsXG4gICdjbGVhcicsXG4gICdjb2xvcicsXG4gICdjb2xzJyxcbiAgJ2NvbHNwYW4nLFxuICAnY29udHJvbHMnLFxuICAnY29udHJvbHNsaXN0JyxcbiAgJ2Nvb3JkcycsXG4gICdjcm9zc29yaWdpbicsXG4gICdkYXRldGltZScsXG4gICdkZWNvZGluZycsXG4gICdkZWZhdWx0JyxcbiAgJ2RpcicsXG4gICdkaXNhYmxlZCcsXG4gICdkaXNhYmxlcGljdHVyZWlucGljdHVyZScsXG4gICdkaXNhYmxlcmVtb3RlcGxheWJhY2snLFxuICAnZG93bmxvYWQnLFxuICAnZHJhZ2dhYmxlJyxcbiAgJ2VuY3R5cGUnLFxuICAnZW50ZXJrZXloaW50JyxcbiAgJ2ZhY2UnLFxuICAnZm9yJyxcbiAgJ2hlYWRlcnMnLFxuICAnaGVpZ2h0JyxcbiAgJ2hpZGRlbicsXG4gICdoaWdoJyxcbiAgJ2hyZWYnLFxuICAnaHJlZmxhbmcnLFxuICAnaWQnLFxuICAnaW5wdXRtb2RlJyxcbiAgJ2ludGVncml0eScsXG4gICdpc21hcCcsXG4gICdraW5kJyxcbiAgJ2xhYmVsJyxcbiAgJ2xhbmcnLFxuICAnbGlzdCcsXG4gICdsb2FkaW5nJyxcbiAgJ2xvb3AnLFxuICAnbG93JyxcbiAgJ21heCcsXG4gICdtYXhsZW5ndGgnLFxuICAnbWVkaWEnLFxuICAnbWV0aG9kJyxcbiAgJ21pbicsXG4gICdtaW5sZW5ndGgnLFxuICAnbXVsdGlwbGUnLFxuICAnbXV0ZWQnLFxuICAnbmFtZScsXG4gICdub25jZScsXG4gICdub3NoYWRlJyxcbiAgJ25vdmFsaWRhdGUnLFxuICAnbm93cmFwJyxcbiAgJ29wZW4nLFxuICAnb3B0aW11bScsXG4gICdwYXR0ZXJuJyxcbiAgJ3BsYWNlaG9sZGVyJyxcbiAgJ3BsYXlzaW5saW5lJyxcbiAgJ3Bvc3RlcicsXG4gICdwcmVsb2FkJyxcbiAgJ3B1YmRhdGUnLFxuICAncmFkaW9ncm91cCcsXG4gICdyZWFkb25seScsXG4gICdyZWwnLFxuICAncmVxdWlyZWQnLFxuICAncmV2JyxcbiAgJ3JldmVyc2VkJyxcbiAgJ3JvbGUnLFxuICAncm93cycsXG4gICdyb3dzcGFuJyxcbiAgJ3NwZWxsY2hlY2snLFxuICAnc2NvcGUnLFxuICAnc2VsZWN0ZWQnLFxuICAnc2hhcGUnLFxuICAnc2l6ZScsXG4gICdzaXplcycsXG4gICdzcGFuJyxcbiAgJ3NyY2xhbmcnLFxuICAnc3RhcnQnLFxuICAnc3JjJyxcbiAgJ3NyY3NldCcsXG4gICdzdGVwJyxcbiAgJ3N0eWxlJyxcbiAgJ3N1bW1hcnknLFxuICAndGFiaW5kZXgnLFxuICAndGl0bGUnLFxuICAndHJhbnNsYXRlJyxcbiAgJ3R5cGUnLFxuICAndXNlbWFwJyxcbiAgJ3ZhbGlnbicsXG4gICd2YWx1ZScsXG4gICd3aWR0aCcsXG4gICd4bWxucycsXG4gICdzbG90Jyxcbl0pO1xuXG5leHBvcnQgY29uc3Qgc3ZnID0gZnJlZXplKFtcbiAgJ2FjY2VudC1oZWlnaHQnLFxuICAnYWNjdW11bGF0ZScsXG4gICdhZGRpdGl2ZScsXG4gICdhbGlnbm1lbnQtYmFzZWxpbmUnLFxuICAnYXNjZW50JyxcbiAgJ2F0dHJpYnV0ZW5hbWUnLFxuICAnYXR0cmlidXRldHlwZScsXG4gICdhemltdXRoJyxcbiAgJ2Jhc2VmcmVxdWVuY3knLFxuICAnYmFzZWxpbmUtc2hpZnQnLFxuICAnYmVnaW4nLFxuICAnYmlhcycsXG4gICdieScsXG4gICdjbGFzcycsXG4gICdjbGlwJyxcbiAgJ2NsaXBwYXRodW5pdHMnLFxuICAnY2xpcC1wYXRoJyxcbiAgJ2NsaXAtcnVsZScsXG4gICdjb2xvcicsXG4gICdjb2xvci1pbnRlcnBvbGF0aW9uJyxcbiAgJ2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVycycsXG4gICdjb2xvci1wcm9maWxlJyxcbiAgJ2NvbG9yLXJlbmRlcmluZycsXG4gICdjeCcsXG4gICdjeScsXG4gICdkJyxcbiAgJ2R4JyxcbiAgJ2R5JyxcbiAgJ2RpZmZ1c2Vjb25zdGFudCcsXG4gICdkaXJlY3Rpb24nLFxuICAnZGlzcGxheScsXG4gICdkaXZpc29yJyxcbiAgJ2R1cicsXG4gICdlZGdlbW9kZScsXG4gICdlbGV2YXRpb24nLFxuICAnZW5kJyxcbiAgJ2ZpbGwnLFxuICAnZmlsbC1vcGFjaXR5JyxcbiAgJ2ZpbGwtcnVsZScsXG4gICdmaWx0ZXInLFxuICAnZmlsdGVydW5pdHMnLFxuICAnZmxvb2QtY29sb3InLFxuICAnZmxvb2Qtb3BhY2l0eScsXG4gICdmb250LWZhbWlseScsXG4gICdmb250LXNpemUnLFxuICAnZm9udC1zaXplLWFkanVzdCcsXG4gICdmb250LXN0cmV0Y2gnLFxuICAnZm9udC1zdHlsZScsXG4gICdmb250LXZhcmlhbnQnLFxuICAnZm9udC13ZWlnaHQnLFxuICAnZngnLFxuICAnZnknLFxuICAnZzEnLFxuICAnZzInLFxuICAnZ2x5cGgtbmFtZScsXG4gICdnbHlwaHJlZicsXG4gICdncmFkaWVudHVuaXRzJyxcbiAgJ2dyYWRpZW50dHJhbnNmb3JtJyxcbiAgJ2hlaWdodCcsXG4gICdocmVmJyxcbiAgJ2lkJyxcbiAgJ2ltYWdlLXJlbmRlcmluZycsXG4gICdpbicsXG4gICdpbjInLFxuICAnaycsXG4gICdrMScsXG4gICdrMicsXG4gICdrMycsXG4gICdrNCcsXG4gICdrZXJuaW5nJyxcbiAgJ2tleXBvaW50cycsXG4gICdrZXlzcGxpbmVzJyxcbiAgJ2tleXRpbWVzJyxcbiAgJ2xhbmcnLFxuICAnbGVuZ3RoYWRqdXN0JyxcbiAgJ2xldHRlci1zcGFjaW5nJyxcbiAgJ2tlcm5lbG1hdHJpeCcsXG4gICdrZXJuZWx1bml0bGVuZ3RoJyxcbiAgJ2xpZ2h0aW5nLWNvbG9yJyxcbiAgJ2xvY2FsJyxcbiAgJ21hcmtlci1lbmQnLFxuICAnbWFya2VyLW1pZCcsXG4gICdtYXJrZXItc3RhcnQnLFxuICAnbWFya2VyaGVpZ2h0JyxcbiAgJ21hcmtlcnVuaXRzJyxcbiAgJ21hcmtlcndpZHRoJyxcbiAgJ21hc2tjb250ZW50dW5pdHMnLFxuICAnbWFza3VuaXRzJyxcbiAgJ21heCcsXG4gICdtYXNrJyxcbiAgJ21lZGlhJyxcbiAgJ21ldGhvZCcsXG4gICdtb2RlJyxcbiAgJ21pbicsXG4gICduYW1lJyxcbiAgJ251bW9jdGF2ZXMnLFxuICAnb2Zmc2V0JyxcbiAgJ29wZXJhdG9yJyxcbiAgJ29wYWNpdHknLFxuICAnb3JkZXInLFxuICAnb3JpZW50JyxcbiAgJ29yaWVudGF0aW9uJyxcbiAgJ29yaWdpbicsXG4gICdvdmVyZmxvdycsXG4gICdwYWludC1vcmRlcicsXG4gICdwYXRoJyxcbiAgJ3BhdGhsZW5ndGgnLFxuICAncGF0dGVybmNvbnRlbnR1bml0cycsXG4gICdwYXR0ZXJudHJhbnNmb3JtJyxcbiAgJ3BhdHRlcm51bml0cycsXG4gICdwb2ludHMnLFxuICAncHJlc2VydmVhbHBoYScsXG4gICdwcmVzZXJ2ZWFzcGVjdHJhdGlvJyxcbiAgJ3ByaW1pdGl2ZXVuaXRzJyxcbiAgJ3InLFxuICAncngnLFxuICAncnknLFxuICAncmFkaXVzJyxcbiAgJ3JlZngnLFxuICAncmVmeScsXG4gICdyZXBlYXRjb3VudCcsXG4gICdyZXBlYXRkdXInLFxuICAncmVzdGFydCcsXG4gICdyZXN1bHQnLFxuICAncm90YXRlJyxcbiAgJ3NjYWxlJyxcbiAgJ3NlZWQnLFxuICAnc2hhcGUtcmVuZGVyaW5nJyxcbiAgJ3NwZWN1bGFyY29uc3RhbnQnLFxuICAnc3BlY3VsYXJleHBvbmVudCcsXG4gICdzcHJlYWRtZXRob2QnLFxuICAnc3RhcnRvZmZzZXQnLFxuICAnc3RkZGV2aWF0aW9uJyxcbiAgJ3N0aXRjaHRpbGVzJyxcbiAgJ3N0b3AtY29sb3InLFxuICAnc3RvcC1vcGFjaXR5JyxcbiAgJ3N0cm9rZS1kYXNoYXJyYXknLFxuICAnc3Ryb2tlLWRhc2hvZmZzZXQnLFxuICAnc3Ryb2tlLWxpbmVjYXAnLFxuICAnc3Ryb2tlLWxpbmVqb2luJyxcbiAgJ3N0cm9rZS1taXRlcmxpbWl0JyxcbiAgJ3N0cm9rZS1vcGFjaXR5JyxcbiAgJ3N0cm9rZScsXG4gICdzdHJva2Utd2lkdGgnLFxuICAnc3R5bGUnLFxuICAnc3VyZmFjZXNjYWxlJyxcbiAgJ3N5c3RlbWxhbmd1YWdlJyxcbiAgJ3RhYmluZGV4JyxcbiAgJ3RhcmdldHgnLFxuICAndGFyZ2V0eScsXG4gICd0cmFuc2Zvcm0nLFxuICAndHJhbnNmb3JtLW9yaWdpbicsXG4gICd0ZXh0LWFuY2hvcicsXG4gICd0ZXh0LWRlY29yYXRpb24nLFxuICAndGV4dC1yZW5kZXJpbmcnLFxuICAndGV4dGxlbmd0aCcsXG4gICd0eXBlJyxcbiAgJ3UxJyxcbiAgJ3UyJyxcbiAgJ3VuaWNvZGUnLFxuICAndmFsdWVzJyxcbiAgJ3ZpZXdib3gnLFxuICAndmlzaWJpbGl0eScsXG4gICd2ZXJzaW9uJyxcbiAgJ3ZlcnQtYWR2LXknLFxuICAndmVydC1vcmlnaW4teCcsXG4gICd2ZXJ0LW9yaWdpbi15JyxcbiAgJ3dpZHRoJyxcbiAgJ3dvcmQtc3BhY2luZycsXG4gICd3cmFwJyxcbiAgJ3dyaXRpbmctbW9kZScsXG4gICd4Y2hhbm5lbHNlbGVjdG9yJyxcbiAgJ3ljaGFubmVsc2VsZWN0b3InLFxuICAneCcsXG4gICd4MScsXG4gICd4MicsXG4gICd4bWxucycsXG4gICd5JyxcbiAgJ3kxJyxcbiAgJ3kyJyxcbiAgJ3onLFxuICAnem9vbWFuZHBhbicsXG5dKTtcblxuZXhwb3J0IGNvbnN0IG1hdGhNbCA9IGZyZWV6ZShbXG4gICdhY2NlbnQnLFxuICAnYWNjZW50dW5kZXInLFxuICAnYWxpZ24nLFxuICAnYmV2ZWxsZWQnLFxuICAnY2xvc2UnLFxuICAnY29sdW1uc2FsaWduJyxcbiAgJ2NvbHVtbmxpbmVzJyxcbiAgJ2NvbHVtbnNwYW4nLFxuICAnZGVub21hbGlnbicsXG4gICdkZXB0aCcsXG4gICdkaXInLFxuICAnZGlzcGxheScsXG4gICdkaXNwbGF5c3R5bGUnLFxuICAnZW5jb2RpbmcnLFxuICAnZmVuY2UnLFxuICAnZnJhbWUnLFxuICAnaGVpZ2h0JyxcbiAgJ2hyZWYnLFxuICAnaWQnLFxuICAnbGFyZ2VvcCcsXG4gICdsZW5ndGgnLFxuICAnbGluZXRoaWNrbmVzcycsXG4gICdsc3BhY2UnLFxuICAnbHF1b3RlJyxcbiAgJ21hdGhiYWNrZ3JvdW5kJyxcbiAgJ21hdGhjb2xvcicsXG4gICdtYXRoc2l6ZScsXG4gICdtYXRodmFyaWFudCcsXG4gICdtYXhzaXplJyxcbiAgJ21pbnNpemUnLFxuICAnbW92YWJsZWxpbWl0cycsXG4gICdub3RhdGlvbicsXG4gICdudW1hbGlnbicsXG4gICdvcGVuJyxcbiAgJ3Jvd2FsaWduJyxcbiAgJ3Jvd2xpbmVzJyxcbiAgJ3Jvd3NwYWNpbmcnLFxuICAncm93c3BhbicsXG4gICdyc3BhY2UnLFxuICAncnF1b3RlJyxcbiAgJ3NjcmlwdGxldmVsJyxcbiAgJ3NjcmlwdG1pbnNpemUnLFxuICAnc2NyaXB0c2l6ZW11bHRpcGxpZXInLFxuICAnc2VsZWN0aW9uJyxcbiAgJ3NlcGFyYXRvcicsXG4gICdzZXBhcmF0b3JzJyxcbiAgJ3N0cmV0Y2h5JyxcbiAgJ3N1YnNjcmlwdHNoaWZ0JyxcbiAgJ3N1cHNjcmlwdHNoaWZ0JyxcbiAgJ3N5bW1ldHJpYycsXG4gICd2b2Zmc2V0JyxcbiAgJ3dpZHRoJyxcbiAgJ3htbG5zJyxcbl0pO1xuXG5leHBvcnQgY29uc3QgeG1sID0gZnJlZXplKFtcbiAgJ3hsaW5rOmhyZWYnLFxuICAneG1sOmlkJyxcbiAgJ3hsaW5rOnRpdGxlJyxcbiAgJ3htbDpzcGFjZScsXG4gICd4bWxuczp4bGluaycsXG5dKTtcbiIsICJpbXBvcnQgeyBzZWFsIH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL2JldHRlci1yZWdleFxuZXhwb3J0IGNvbnN0IE1VU1RBQ0hFX0VYUFIgPSBzZWFsKC9cXHtcXHtbXFx3XFxXXSp8W1xcd1xcV10qXFx9XFx9L2dtKTsgLy8gU3BlY2lmeSB0ZW1wbGF0ZSBkZXRlY3Rpb24gcmVnZXggZm9yIFNBRkVfRk9SX1RFTVBMQVRFUyBtb2RlXG5leHBvcnQgY29uc3QgRVJCX0VYUFIgPSBzZWFsKC88JVtcXHdcXFddKnxbXFx3XFxXXSolPi9nbSk7XG5leHBvcnQgY29uc3QgVE1QTElUX0VYUFIgPSBzZWFsKC9cXCR7W1xcd1xcV10qfS9nbSk7XG5leHBvcnQgY29uc3QgREFUQV9BVFRSID0gc2VhbCgvXmRhdGEtW1xcLVxcdy5cXHUwMEI3LVxcdUZGRkZdLyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbmV4cG9ydCBjb25zdCBBUklBX0FUVFIgPSBzZWFsKC9eYXJpYS1bXFwtXFx3XSskLyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbmV4cG9ydCBjb25zdCBJU19BTExPV0VEX1VSSSA9IHNlYWwoXG4gIC9eKD86KD86KD86ZnxodCl0cHM/fG1haWx0b3x0ZWx8Y2FsbHRvfHNtc3xjaWR8eG1wcCk6fFteYS16XXxbYS16Ky5cXC1dKyg/OlteYS16Ky5cXC06XXwkKSkvaSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4pO1xuZXhwb3J0IGNvbnN0IElTX1NDUklQVF9PUl9EQVRBID0gc2VhbCgvXig/OlxcdytzY3JpcHR8ZGF0YSk6L2kpO1xuZXhwb3J0IGNvbnN0IEFUVFJfV0hJVEVTUEFDRSA9IHNlYWwoXG4gIC9bXFx1MDAwMC1cXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUxODBFXFx1MjAwMC1cXHUyMDI5XFx1MjA1RlxcdTMwMDBdL2cgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb250cm9sLXJlZ2V4XG4pO1xuZXhwb3J0IGNvbnN0IERPQ1RZUEVfTkFNRSA9IHNlYWwoL15odG1sJC9pKTtcbiIsICJpbXBvcnQgKiBhcyBUQUdTIGZyb20gJy4vdGFncy5qcyc7XG5pbXBvcnQgKiBhcyBBVFRSUyBmcm9tICcuL2F0dHJzLmpzJztcbmltcG9ydCAqIGFzIEVYUFJFU1NJT05TIGZyb20gJy4vcmVnZXhwLmpzJztcbmltcG9ydCB7XG4gIGFkZFRvU2V0LFxuICBjbG9uZSxcbiAgZW50cmllcyxcbiAgZnJlZXplLFxuICBhcnJheUZvckVhY2gsXG4gIGFycmF5UG9wLFxuICBhcnJheVB1c2gsXG4gIHN0cmluZ01hdGNoLFxuICBzdHJpbmdSZXBsYWNlLFxuICBzdHJpbmdUb0xvd2VyQ2FzZSxcbiAgc3RyaW5nVG9TdHJpbmcsXG4gIHN0cmluZ0luZGV4T2YsXG4gIHN0cmluZ1RyaW0sXG4gIHJlZ0V4cFRlc3QsXG4gIHR5cGVFcnJvckNyZWF0ZSxcbiAgbG9va3VwR2V0dGVyLFxuICBjcmVhdGUsXG59IGZyb20gJy4vdXRpbHMuanMnO1xuXG5jb25zdCBnZXRHbG9iYWwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiB3aW5kb3c7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuby1vcCBwb2xpY3kgZm9yIGludGVybmFsIHVzZSBvbmx5LlxuICogRG9uJ3QgZXhwb3J0IHRoaXMgZnVuY3Rpb24gb3V0c2lkZSB0aGlzIG1vZHVsZSFcbiAqIEBwYXJhbSB7VHJ1c3RlZFR5cGVQb2xpY3lGYWN0b3J5fSB0cnVzdGVkVHlwZXMgVGhlIHBvbGljeSBmYWN0b3J5LlxuICogQHBhcmFtIHtIVE1MU2NyaXB0RWxlbWVudH0gcHVyaWZ5SG9zdEVsZW1lbnQgVGhlIFNjcmlwdCBlbGVtZW50IHVzZWQgdG8gbG9hZCBET01QdXJpZnkgKHRvIGRldGVybWluZSBwb2xpY3kgbmFtZSBzdWZmaXgpLlxuICogQHJldHVybiB7VHJ1c3RlZFR5cGVQb2xpY3l9IFRoZSBwb2xpY3kgY3JlYXRlZCAob3IgbnVsbCwgaWYgVHJ1c3RlZCBUeXBlc1xuICogYXJlIG5vdCBzdXBwb3J0ZWQgb3IgY3JlYXRpbmcgdGhlIHBvbGljeSBmYWlsZWQpLlxuICovXG5jb25zdCBfY3JlYXRlVHJ1c3RlZFR5cGVzUG9saWN5ID0gZnVuY3Rpb24gKHRydXN0ZWRUeXBlcywgcHVyaWZ5SG9zdEVsZW1lbnQpIHtcbiAgaWYgKFxuICAgIHR5cGVvZiB0cnVzdGVkVHlwZXMgIT09ICdvYmplY3QnIHx8XG4gICAgdHlwZW9mIHRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3kgIT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBBbGxvdyB0aGUgY2FsbGVycyB0byBjb250cm9sIHRoZSB1bmlxdWUgcG9saWN5IG5hbWVcbiAgLy8gYnkgYWRkaW5nIGEgZGF0YS10dC1wb2xpY3ktc3VmZml4IHRvIHRoZSBzY3JpcHQgZWxlbWVudCB3aXRoIHRoZSBET01QdXJpZnkuXG4gIC8vIFBvbGljeSBjcmVhdGlvbiB3aXRoIGR1cGxpY2F0ZSBuYW1lcyB0aHJvd3MgaW4gVHJ1c3RlZCBUeXBlcy5cbiAgbGV0IHN1ZmZpeCA9IG51bGw7XG4gIGNvbnN0IEFUVFJfTkFNRSA9ICdkYXRhLXR0LXBvbGljeS1zdWZmaXgnO1xuICBpZiAocHVyaWZ5SG9zdEVsZW1lbnQgJiYgcHVyaWZ5SG9zdEVsZW1lbnQuaGFzQXR0cmlidXRlKEFUVFJfTkFNRSkpIHtcbiAgICBzdWZmaXggPSBwdXJpZnlIb3N0RWxlbWVudC5nZXRBdHRyaWJ1dGUoQVRUUl9OQU1FKTtcbiAgfVxuXG4gIGNvbnN0IHBvbGljeU5hbWUgPSAnZG9tcHVyaWZ5JyArIChzdWZmaXggPyAnIycgKyBzdWZmaXggOiAnJyk7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gdHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeShwb2xpY3lOYW1lLCB7XG4gICAgICBjcmVhdGVIVE1MKGh0bWwpIHtcbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgICB9LFxuICAgICAgY3JlYXRlU2NyaXB0VVJMKHNjcmlwdFVybCkge1xuICAgICAgICByZXR1cm4gc2NyaXB0VXJsO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoXykge1xuICAgIC8vIFBvbGljeSBjcmVhdGlvbiBmYWlsZWQgKG1vc3QgbGlrZWx5IGFub3RoZXIgRE9NUHVyaWZ5IHNjcmlwdCBoYXNcbiAgICAvLyBhbHJlYWR5IHJ1bikuIFNraXAgY3JlYXRpbmcgdGhlIHBvbGljeSwgYXMgdGhpcyB3aWxsIG9ubHkgY2F1c2UgZXJyb3JzXG4gICAgLy8gaWYgVFQgYXJlIGVuZm9yY2VkLlxuICAgIGNvbnNvbGUud2FybihcbiAgICAgICdUcnVzdGVkVHlwZXMgcG9saWN5ICcgKyBwb2xpY3lOYW1lICsgJyBjb3VsZCBub3QgYmUgY3JlYXRlZC4nXG4gICAgKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuZnVuY3Rpb24gY3JlYXRlRE9NUHVyaWZ5KHdpbmRvdyA9IGdldEdsb2JhbCgpKSB7XG4gIGNvbnN0IERPTVB1cmlmeSA9IChyb290KSA9PiBjcmVhdGVET01QdXJpZnkocm9vdCk7XG5cbiAgLyoqXG4gICAqIFZlcnNpb24gbGFiZWwsIGV4cG9zZWQgZm9yIGVhc2llciBjaGVja3NcbiAgICogaWYgRE9NUHVyaWZ5IGlzIHVwIHRvIGRhdGUgb3Igbm90XG4gICAqL1xuICBET01QdXJpZnkudmVyc2lvbiA9IFZFUlNJT047XG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIGVsZW1lbnRzIHRoYXQgRE9NUHVyaWZ5IHJlbW92ZWQgZHVyaW5nIHNhbml0YXRpb24uXG4gICAqIEVtcHR5IGlmIG5vdGhpbmcgd2FzIHJlbW92ZWQuXG4gICAqL1xuICBET01QdXJpZnkucmVtb3ZlZCA9IFtdO1xuXG4gIGlmICghd2luZG93IHx8ICF3aW5kb3cuZG9jdW1lbnQgfHwgd2luZG93LmRvY3VtZW50Lm5vZGVUeXBlICE9PSA5KSB7XG4gICAgLy8gTm90IHJ1bm5pbmcgaW4gYSBicm93c2VyLCBwcm92aWRlIGEgZmFjdG9yeSBmdW5jdGlvblxuICAgIC8vIHNvIHRoYXQgeW91IGNhbiBwYXNzIHlvdXIgb3duIFdpbmRvd1xuICAgIERPTVB1cmlmeS5pc1N1cHBvcnRlZCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIERPTVB1cmlmeTtcbiAgfVxuXG4gIGxldCB7IGRvY3VtZW50IH0gPSB3aW5kb3c7XG5cbiAgY29uc3Qgb3JpZ2luYWxEb2N1bWVudCA9IGRvY3VtZW50O1xuICBjb25zdCBjdXJyZW50U2NyaXB0ID0gb3JpZ2luYWxEb2N1bWVudC5jdXJyZW50U2NyaXB0O1xuICBjb25zdCB7XG4gICAgRG9jdW1lbnRGcmFnbWVudCxcbiAgICBIVE1MVGVtcGxhdGVFbGVtZW50LFxuICAgIE5vZGUsXG4gICAgRWxlbWVudCxcbiAgICBOb2RlRmlsdGVyLFxuICAgIE5hbWVkTm9kZU1hcCA9IHdpbmRvdy5OYW1lZE5vZGVNYXAgfHwgd2luZG93Lk1vek5hbWVkQXR0ck1hcCxcbiAgICBIVE1MRm9ybUVsZW1lbnQsXG4gICAgRE9NUGFyc2VyLFxuICAgIHRydXN0ZWRUeXBlcyxcbiAgfSA9IHdpbmRvdztcblxuICBjb25zdCBFbGVtZW50UHJvdG90eXBlID0gRWxlbWVudC5wcm90b3R5cGU7XG5cbiAgY29uc3QgY2xvbmVOb2RlID0gbG9va3VwR2V0dGVyKEVsZW1lbnRQcm90b3R5cGUsICdjbG9uZU5vZGUnKTtcbiAgY29uc3QgZ2V0TmV4dFNpYmxpbmcgPSBsb29rdXBHZXR0ZXIoRWxlbWVudFByb3RvdHlwZSwgJ25leHRTaWJsaW5nJyk7XG4gIGNvbnN0IGdldENoaWxkTm9kZXMgPSBsb29rdXBHZXR0ZXIoRWxlbWVudFByb3RvdHlwZSwgJ2NoaWxkTm9kZXMnKTtcbiAgY29uc3QgZ2V0UGFyZW50Tm9kZSA9IGxvb2t1cEdldHRlcihFbGVtZW50UHJvdG90eXBlLCAncGFyZW50Tm9kZScpO1xuXG4gIC8vIEFzIHBlciBpc3N1ZSAjNDcsIHRoZSB3ZWItY29tcG9uZW50cyByZWdpc3RyeSBpcyBpbmhlcml0ZWQgYnkgYVxuICAvLyBuZXcgZG9jdW1lbnQgY3JlYXRlZCB2aWEgY3JlYXRlSFRNTERvY3VtZW50LiBBcyBwZXIgdGhlIHNwZWNcbiAgLy8gKGh0dHA6Ly93M2MuZ2l0aHViLmlvL3dlYmNvbXBvbmVudHMvc3BlYy9jdXN0b20vI2NyZWF0aW5nLWFuZC1wYXNzaW5nLXJlZ2lzdHJpZXMpXG4gIC8vIGEgbmV3IGVtcHR5IHJlZ2lzdHJ5IGlzIHVzZWQgd2hlbiBjcmVhdGluZyBhIHRlbXBsYXRlIGNvbnRlbnRzIG93bmVyXG4gIC8vIGRvY3VtZW50LCBzbyB3ZSB1c2UgdGhhdCBhcyBvdXIgcGFyZW50IGRvY3VtZW50IHRvIGVuc3VyZSBub3RoaW5nXG4gIC8vIGlzIGluaGVyaXRlZC5cbiAgaWYgKHR5cGVvZiBIVE1MVGVtcGxhdGVFbGVtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIGlmICh0ZW1wbGF0ZS5jb250ZW50ICYmIHRlbXBsYXRlLmNvbnRlbnQub3duZXJEb2N1bWVudCkge1xuICAgICAgZG9jdW1lbnQgPSB0ZW1wbGF0ZS5jb250ZW50Lm93bmVyRG9jdW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgbGV0IHRydXN0ZWRUeXBlc1BvbGljeTtcbiAgbGV0IGVtcHR5SFRNTCA9ICcnO1xuXG4gIGNvbnN0IHtcbiAgICBpbXBsZW1lbnRhdGlvbixcbiAgICBjcmVhdGVOb2RlSXRlcmF0b3IsXG4gICAgY3JlYXRlRG9jdW1lbnRGcmFnbWVudCxcbiAgICBnZXRFbGVtZW50c0J5VGFnTmFtZSxcbiAgfSA9IGRvY3VtZW50O1xuICBjb25zdCB7IGltcG9ydE5vZGUgfSA9IG9yaWdpbmFsRG9jdW1lbnQ7XG5cbiAgbGV0IGhvb2tzID0ge307XG5cbiAgLyoqXG4gICAqIEV4cG9zZSB3aGV0aGVyIHRoaXMgYnJvd3NlciBzdXBwb3J0cyBydW5uaW5nIHRoZSBmdWxsIERPTVB1cmlmeS5cbiAgICovXG4gIERPTVB1cmlmeS5pc1N1cHBvcnRlZCA9XG4gICAgdHlwZW9mIGVudHJpZXMgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgZ2V0UGFyZW50Tm9kZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIGltcGxlbWVudGF0aW9uICYmXG4gICAgaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50ICE9PSB1bmRlZmluZWQ7XG5cbiAgY29uc3Qge1xuICAgIE1VU1RBQ0hFX0VYUFIsXG4gICAgRVJCX0VYUFIsXG4gICAgVE1QTElUX0VYUFIsXG4gICAgREFUQV9BVFRSLFxuICAgIEFSSUFfQVRUUixcbiAgICBJU19TQ1JJUFRfT1JfREFUQSxcbiAgICBBVFRSX1dISVRFU1BBQ0UsXG4gIH0gPSBFWFBSRVNTSU9OUztcblxuICBsZXQgeyBJU19BTExPV0VEX1VSSSB9ID0gRVhQUkVTU0lPTlM7XG5cbiAgLyoqXG4gICAqIFdlIGNvbnNpZGVyIHRoZSBlbGVtZW50cyBhbmQgYXR0cmlidXRlcyBiZWxvdyB0byBiZSBzYWZlLiBJZGVhbGx5XG4gICAqIGRvbid0IGFkZCBhbnkgbmV3IG9uZXMgYnV0IGZlZWwgZnJlZSB0byByZW1vdmUgdW53YW50ZWQgb25lcy5cbiAgICovXG5cbiAgLyogYWxsb3dlZCBlbGVtZW50IG5hbWVzICovXG4gIGxldCBBTExPV0VEX1RBR1MgPSBudWxsO1xuICBjb25zdCBERUZBVUxUX0FMTE9XRURfVEFHUyA9IGFkZFRvU2V0KHt9LCBbXG4gICAgLi4uVEFHUy5odG1sLFxuICAgIC4uLlRBR1Muc3ZnLFxuICAgIC4uLlRBR1Muc3ZnRmlsdGVycyxcbiAgICAuLi5UQUdTLm1hdGhNbCxcbiAgICAuLi5UQUdTLnRleHQsXG4gIF0pO1xuXG4gIC8qIEFsbG93ZWQgYXR0cmlidXRlIG5hbWVzICovXG4gIGxldCBBTExPV0VEX0FUVFIgPSBudWxsO1xuICBjb25zdCBERUZBVUxUX0FMTE9XRURfQVRUUiA9IGFkZFRvU2V0KHt9LCBbXG4gICAgLi4uQVRUUlMuaHRtbCxcbiAgICAuLi5BVFRSUy5zdmcsXG4gICAgLi4uQVRUUlMubWF0aE1sLFxuICAgIC4uLkFUVFJTLnhtbCxcbiAgXSk7XG5cbiAgLypcbiAgICogQ29uZmlndXJlIGhvdyBET01QVXJpZnkgc2hvdWxkIGhhbmRsZSBjdXN0b20gZWxlbWVudHMgYW5kIHRoZWlyIGF0dHJpYnV0ZXMgYXMgd2VsbCBhcyBjdXN0b21pemVkIGJ1aWx0LWluIGVsZW1lbnRzLlxuICAgKiBAcHJvcGVydHkge1JlZ0V4cHxGdW5jdGlvbnxudWxsfSB0YWdOYW1lQ2hlY2sgb25lIG9mIFtudWxsLCByZWdleFBhdHRlcm4sIHByZWRpY2F0ZV0uIERlZmF1bHQ6IGBudWxsYCAoZGlzYWxsb3cgYW55IGN1c3RvbSBlbGVtZW50cylcbiAgICogQHByb3BlcnR5IHtSZWdFeHB8RnVuY3Rpb258bnVsbH0gYXR0cmlidXRlTmFtZUNoZWNrIG9uZSBvZiBbbnVsbCwgcmVnZXhQYXR0ZXJuLCBwcmVkaWNhdGVdLiBEZWZhdWx0OiBgbnVsbGAgKGRpc2FsbG93IGFueSBhdHRyaWJ1dGVzIG5vdCBvbiB0aGUgYWxsb3cgbGlzdClcbiAgICogQHByb3BlcnR5IHtib29sZWFufSBhbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHMgYWxsb3cgY3VzdG9tIGVsZW1lbnRzIGRlcml2ZWQgZnJvbSBidWlsdC1pbnMgaWYgdGhleSBwYXNzIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjay4gRGVmYXVsdDogYGZhbHNlYC5cbiAgICovXG4gIGxldCBDVVNUT01fRUxFTUVOVF9IQU5ETElORyA9IE9iamVjdC5zZWFsKFxuICAgIGNyZWF0ZShudWxsLCB7XG4gICAgICB0YWdOYW1lQ2hlY2s6IHtcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcbiAgICAgIGF0dHJpYnV0ZU5hbWVDaGVjazoge1xuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICB9LFxuICAgICAgYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzOiB7XG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH0pXG4gICk7XG5cbiAgLyogRXhwbGljaXRseSBmb3JiaWRkZW4gdGFncyAob3ZlcnJpZGVzIEFMTE9XRURfVEFHUy9BRERfVEFHUykgKi9cbiAgbGV0IEZPUkJJRF9UQUdTID0gbnVsbDtcblxuICAvKiBFeHBsaWNpdGx5IGZvcmJpZGRlbiBhdHRyaWJ1dGVzIChvdmVycmlkZXMgQUxMT1dFRF9BVFRSL0FERF9BVFRSKSAqL1xuICBsZXQgRk9SQklEX0FUVFIgPSBudWxsO1xuXG4gIC8qIERlY2lkZSBpZiBBUklBIGF0dHJpYnV0ZXMgYXJlIG9rYXkgKi9cbiAgbGV0IEFMTE9XX0FSSUFfQVRUUiA9IHRydWU7XG5cbiAgLyogRGVjaWRlIGlmIGN1c3RvbSBkYXRhIGF0dHJpYnV0ZXMgYXJlIG9rYXkgKi9cbiAgbGV0IEFMTE9XX0RBVEFfQVRUUiA9IHRydWU7XG5cbiAgLyogRGVjaWRlIGlmIHVua25vd24gcHJvdG9jb2xzIGFyZSBva2F5ICovXG4gIGxldCBBTExPV19VTktOT1dOX1BST1RPQ09MUyA9IGZhbHNlO1xuXG4gIC8qIERlY2lkZSBpZiBzZWxmLWNsb3NpbmcgdGFncyBpbiBhdHRyaWJ1dGVzIGFyZSBhbGxvd2VkLlxuICAgKiBVc3VhbGx5IHJlbW92ZWQgZHVlIHRvIGEgbVhTUyBpc3N1ZSBpbiBqUXVlcnkgMy4wICovXG4gIGxldCBBTExPV19TRUxGX0NMT1NFX0lOX0FUVFIgPSB0cnVlO1xuXG4gIC8qIE91dHB1dCBzaG91bGQgYmUgc2FmZSBmb3IgY29tbW9uIHRlbXBsYXRlIGVuZ2luZXMuXG4gICAqIFRoaXMgbWVhbnMsIERPTVB1cmlmeSByZW1vdmVzIGRhdGEgYXR0cmlidXRlcywgbXVzdGFjaGVzIGFuZCBFUkJcbiAgICovXG4gIGxldCBTQUZFX0ZPUl9URU1QTEFURVMgPSBmYWxzZTtcblxuICAvKiBEZWNpZGUgaWYgZG9jdW1lbnQgd2l0aCA8aHRtbD4uLi4gc2hvdWxkIGJlIHJldHVybmVkICovXG4gIGxldCBXSE9MRV9ET0NVTUVOVCA9IGZhbHNlO1xuXG4gIC8qIFRyYWNrIHdoZXRoZXIgY29uZmlnIGlzIGFscmVhZHkgc2V0IG9uIHRoaXMgaW5zdGFuY2Ugb2YgRE9NUHVyaWZ5LiAqL1xuICBsZXQgU0VUX0NPTkZJRyA9IGZhbHNlO1xuXG4gIC8qIERlY2lkZSBpZiBhbGwgZWxlbWVudHMgKGUuZy4gc3R5bGUsIHNjcmlwdCkgbXVzdCBiZSBjaGlsZHJlbiBvZlxuICAgKiBkb2N1bWVudC5ib2R5LiBCeSBkZWZhdWx0LCBicm93c2VycyBtaWdodCBtb3ZlIHRoZW0gdG8gZG9jdW1lbnQuaGVhZCAqL1xuICBsZXQgRk9SQ0VfQk9EWSA9IGZhbHNlO1xuXG4gIC8qIERlY2lkZSBpZiBhIERPTSBgSFRNTEJvZHlFbGVtZW50YCBzaG91bGQgYmUgcmV0dXJuZWQsIGluc3RlYWQgb2YgYSBodG1sXG4gICAqIHN0cmluZyAob3IgYSBUcnVzdGVkSFRNTCBvYmplY3QgaWYgVHJ1c3RlZCBUeXBlcyBhcmUgc3VwcG9ydGVkKS5cbiAgICogSWYgYFdIT0xFX0RPQ1VNRU5UYCBpcyBlbmFibGVkIGEgYEhUTUxIdG1sRWxlbWVudGAgd2lsbCBiZSByZXR1cm5lZCBpbnN0ZWFkXG4gICAqL1xuICBsZXQgUkVUVVJOX0RPTSA9IGZhbHNlO1xuXG4gIC8qIERlY2lkZSBpZiBhIERPTSBgRG9jdW1lbnRGcmFnbWVudGAgc2hvdWxkIGJlIHJldHVybmVkLCBpbnN0ZWFkIG9mIGEgaHRtbFxuICAgKiBzdHJpbmcgIChvciBhIFRydXN0ZWRIVE1MIG9iamVjdCBpZiBUcnVzdGVkIFR5cGVzIGFyZSBzdXBwb3J0ZWQpICovXG4gIGxldCBSRVRVUk5fRE9NX0ZSQUdNRU5UID0gZmFsc2U7XG5cbiAgLyogVHJ5IHRvIHJldHVybiBhIFRydXN0ZWQgVHlwZSBvYmplY3QgaW5zdGVhZCBvZiBhIHN0cmluZywgcmV0dXJuIGEgc3RyaW5nIGluXG4gICAqIGNhc2UgVHJ1c3RlZCBUeXBlcyBhcmUgbm90IHN1cHBvcnRlZCAgKi9cbiAgbGV0IFJFVFVSTl9UUlVTVEVEX1RZUEUgPSBmYWxzZTtcblxuICAvKiBPdXRwdXQgc2hvdWxkIGJlIGZyZWUgZnJvbSBET00gY2xvYmJlcmluZyBhdHRhY2tzP1xuICAgKiBUaGlzIHNhbml0aXplcyBtYXJrdXBzIG5hbWVkIHdpdGggY29sbGlkaW5nLCBjbG9iYmVyYWJsZSBidWlsdC1pbiBET00gQVBJcy5cbiAgICovXG4gIGxldCBTQU5JVElaRV9ET00gPSB0cnVlO1xuXG4gIC8qIEFjaGlldmUgZnVsbCBET00gQ2xvYmJlcmluZyBwcm90ZWN0aW9uIGJ5IGlzb2xhdGluZyB0aGUgbmFtZXNwYWNlIG9mIG5hbWVkXG4gICAqIHByb3BlcnRpZXMgYW5kIEpTIHZhcmlhYmxlcywgbWl0aWdhdGluZyBhdHRhY2tzIHRoYXQgYWJ1c2UgdGhlIEhUTUwvRE9NIHNwZWMgcnVsZXMuXG4gICAqXG4gICAqIEhUTUwvRE9NIHNwZWMgcnVsZXMgdGhhdCBlbmFibGUgRE9NIENsb2JiZXJpbmc6XG4gICAqICAgLSBOYW1lZCBBY2Nlc3Mgb24gV2luZG93ICjCpzcuMy4zKVxuICAgKiAgIC0gRE9NIFRyZWUgQWNjZXNzb3JzICjCpzMuMS41KVxuICAgKiAgIC0gRm9ybSBFbGVtZW50IFBhcmVudC1DaGlsZCBSZWxhdGlvbnMgKMKnNC4xMC4zKVxuICAgKiAgIC0gSWZyYW1lIHNyY2RvYyAvIE5lc3RlZCBXaW5kb3dQcm94aWVzICjCpzQuOC41KVxuICAgKiAgIC0gSFRNTENvbGxlY3Rpb24gKMKnNC4yLjEwLjIpXG4gICAqXG4gICAqIE5hbWVzcGFjZSBpc29sYXRpb24gaXMgaW1wbGVtZW50ZWQgYnkgcHJlZml4aW5nIGBpZGAgYW5kIGBuYW1lYCBhdHRyaWJ1dGVzXG4gICAqIHdpdGggYSBjb25zdGFudCBzdHJpbmcsIGkuZS4sIGB1c2VyLWNvbnRlbnQtYFxuICAgKi9cbiAgbGV0IFNBTklUSVpFX05BTUVEX1BST1BTID0gZmFsc2U7XG4gIGNvbnN0IFNBTklUSVpFX05BTUVEX1BST1BTX1BSRUZJWCA9ICd1c2VyLWNvbnRlbnQtJztcblxuICAvKiBLZWVwIGVsZW1lbnQgY29udGVudCB3aGVuIHJlbW92aW5nIGVsZW1lbnQ/ICovXG4gIGxldCBLRUVQX0NPTlRFTlQgPSB0cnVlO1xuXG4gIC8qIElmIGEgYE5vZGVgIGlzIHBhc3NlZCB0byBzYW5pdGl6ZSgpLCB0aGVuIHBlcmZvcm1zIHNhbml0aXphdGlvbiBpbi1wbGFjZSBpbnN0ZWFkXG4gICAqIG9mIGltcG9ydGluZyBpdCBpbnRvIGEgbmV3IERvY3VtZW50IGFuZCByZXR1cm5pbmcgYSBzYW5pdGl6ZWQgY29weSAqL1xuICBsZXQgSU5fUExBQ0UgPSBmYWxzZTtcblxuICAvKiBBbGxvdyB1c2FnZSBvZiBwcm9maWxlcyBsaWtlIGh0bWwsIHN2ZyBhbmQgbWF0aE1sICovXG4gIGxldCBVU0VfUFJPRklMRVMgPSB7fTtcblxuICAvKiBUYWdzIHRvIGlnbm9yZSBjb250ZW50IG9mIHdoZW4gS0VFUF9DT05URU5UIGlzIHRydWUgKi9cbiAgbGV0IEZPUkJJRF9DT05URU5UUyA9IG51bGw7XG4gIGNvbnN0IERFRkFVTFRfRk9SQklEX0NPTlRFTlRTID0gYWRkVG9TZXQoe30sIFtcbiAgICAnYW5ub3RhdGlvbi14bWwnLFxuICAgICdhdWRpbycsXG4gICAgJ2NvbGdyb3VwJyxcbiAgICAnZGVzYycsXG4gICAgJ2ZvcmVpZ25vYmplY3QnLFxuICAgICdoZWFkJyxcbiAgICAnaWZyYW1lJyxcbiAgICAnbWF0aCcsXG4gICAgJ21pJyxcbiAgICAnbW4nLFxuICAgICdtbycsXG4gICAgJ21zJyxcbiAgICAnbXRleHQnLFxuICAgICdub2VtYmVkJyxcbiAgICAnbm9mcmFtZXMnLFxuICAgICdub3NjcmlwdCcsXG4gICAgJ3BsYWludGV4dCcsXG4gICAgJ3NjcmlwdCcsXG4gICAgJ3N0eWxlJyxcbiAgICAnc3ZnJyxcbiAgICAndGVtcGxhdGUnLFxuICAgICd0aGVhZCcsXG4gICAgJ3RpdGxlJyxcbiAgICAndmlkZW8nLFxuICAgICd4bXAnLFxuICBdKTtcblxuICAvKiBUYWdzIHRoYXQgYXJlIHNhZmUgZm9yIGRhdGE6IFVSSXMgKi9cbiAgbGV0IERBVEFfVVJJX1RBR1MgPSBudWxsO1xuICBjb25zdCBERUZBVUxUX0RBVEFfVVJJX1RBR1MgPSBhZGRUb1NldCh7fSwgW1xuICAgICdhdWRpbycsXG4gICAgJ3ZpZGVvJyxcbiAgICAnaW1nJyxcbiAgICAnc291cmNlJyxcbiAgICAnaW1hZ2UnLFxuICAgICd0cmFjaycsXG4gIF0pO1xuXG4gIC8qIEF0dHJpYnV0ZXMgc2FmZSBmb3IgdmFsdWVzIGxpa2UgXCJqYXZhc2NyaXB0OlwiICovXG4gIGxldCBVUklfU0FGRV9BVFRSSUJVVEVTID0gbnVsbDtcbiAgY29uc3QgREVGQVVMVF9VUklfU0FGRV9BVFRSSUJVVEVTID0gYWRkVG9TZXQoe30sIFtcbiAgICAnYWx0JyxcbiAgICAnY2xhc3MnLFxuICAgICdmb3InLFxuICAgICdpZCcsXG4gICAgJ2xhYmVsJyxcbiAgICAnbmFtZScsXG4gICAgJ3BhdHRlcm4nLFxuICAgICdwbGFjZWhvbGRlcicsXG4gICAgJ3JvbGUnLFxuICAgICdzdW1tYXJ5JyxcbiAgICAndGl0bGUnLFxuICAgICd2YWx1ZScsXG4gICAgJ3N0eWxlJyxcbiAgICAneG1sbnMnLFxuICBdKTtcblxuICBjb25zdCBNQVRITUxfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUwnO1xuICBjb25zdCBTVkdfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbiAgY29uc3QgSFRNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG4gIC8qIERvY3VtZW50IG5hbWVzcGFjZSAqL1xuICBsZXQgTkFNRVNQQUNFID0gSFRNTF9OQU1FU1BBQ0U7XG4gIGxldCBJU19FTVBUWV9JTlBVVCA9IGZhbHNlO1xuXG4gIC8qIEFsbG93ZWQgWEhUTUwrWE1MIG5hbWVzcGFjZXMgKi9cbiAgbGV0IEFMTE9XRURfTkFNRVNQQUNFUyA9IG51bGw7XG4gIGNvbnN0IERFRkFVTFRfQUxMT1dFRF9OQU1FU1BBQ0VTID0gYWRkVG9TZXQoXG4gICAge30sXG4gICAgW01BVEhNTF9OQU1FU1BBQ0UsIFNWR19OQU1FU1BBQ0UsIEhUTUxfTkFNRVNQQUNFXSxcbiAgICBzdHJpbmdUb1N0cmluZ1xuICApO1xuXG4gIC8qIFBhcnNpbmcgb2Ygc3RyaWN0IFhIVE1MIGRvY3VtZW50cyAqL1xuICBsZXQgUEFSU0VSX01FRElBX1RZUEUgPSBudWxsO1xuICBjb25zdCBTVVBQT1JURURfUEFSU0VSX01FRElBX1RZUEVTID0gWydhcHBsaWNhdGlvbi94aHRtbCt4bWwnLCAndGV4dC9odG1sJ107XG4gIGNvbnN0IERFRkFVTFRfUEFSU0VSX01FRElBX1RZUEUgPSAndGV4dC9odG1sJztcbiAgbGV0IHRyYW5zZm9ybUNhc2VGdW5jID0gbnVsbDtcblxuICAvKiBLZWVwIGEgcmVmZXJlbmNlIHRvIGNvbmZpZyB0byBwYXNzIHRvIGhvb2tzICovXG4gIGxldCBDT05GSUcgPSBudWxsO1xuXG4gIC8qIElkZWFsbHksIGRvIG5vdCB0b3VjaCBhbnl0aGluZyBiZWxvdyB0aGlzIGxpbmUgKi9cbiAgLyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL1xuXG4gIGNvbnN0IGZvcm1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gIGNvbnN0IGlzUmVnZXhPckZ1bmN0aW9uID0gZnVuY3Rpb24gKHRlc3RWYWx1ZSkge1xuICAgIHJldHVybiB0ZXN0VmFsdWUgaW5zdGFuY2VvZiBSZWdFeHAgfHwgdGVzdFZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb247XG4gIH07XG5cbiAgLyoqXG4gICAqIF9wYXJzZUNvbmZpZ1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGNmZyBvcHRpb25hbCBjb25maWcgbGl0ZXJhbFxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgY29uc3QgX3BhcnNlQ29uZmlnID0gZnVuY3Rpb24gKGNmZyA9IHt9KSB7XG4gICAgaWYgKENPTkZJRyAmJiBDT05GSUcgPT09IGNmZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qIFNoaWVsZCBjb25maWd1cmF0aW9uIG9iamVjdCBmcm9tIHRhbXBlcmluZyAqL1xuICAgIGlmICghY2ZnIHx8IHR5cGVvZiBjZmcgIT09ICdvYmplY3QnKSB7XG4gICAgICBjZmcgPSB7fTtcbiAgICB9XG5cbiAgICAvKiBTaGllbGQgY29uZmlndXJhdGlvbiBvYmplY3QgZnJvbSBwcm90b3R5cGUgcG9sbHV0aW9uICovXG4gICAgY2ZnID0gY2xvbmUoY2ZnKTtcblxuICAgIFBBUlNFUl9NRURJQV9UWVBFID1cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1pbmNsdWRlc1xuICAgICAgU1VQUE9SVEVEX1BBUlNFUl9NRURJQV9UWVBFUy5pbmRleE9mKGNmZy5QQVJTRVJfTUVESUFfVFlQRSkgPT09IC0xXG4gICAgICAgID8gREVGQVVMVF9QQVJTRVJfTUVESUFfVFlQRVxuICAgICAgICA6IGNmZy5QQVJTRVJfTUVESUFfVFlQRTtcblxuICAgIC8vIEhUTUwgdGFncyBhbmQgYXR0cmlidXRlcyBhcmUgbm90IGNhc2Utc2Vuc2l0aXZlLCBjb252ZXJ0aW5nIHRvIGxvd2VyY2FzZS4gS2VlcGluZyBYSFRNTCBhcyBpcy5cbiAgICB0cmFuc2Zvcm1DYXNlRnVuYyA9XG4gICAgICBQQVJTRVJfTUVESUFfVFlQRSA9PT0gJ2FwcGxpY2F0aW9uL3hodG1sK3htbCdcbiAgICAgICAgPyBzdHJpbmdUb1N0cmluZ1xuICAgICAgICA6IHN0cmluZ1RvTG93ZXJDYXNlO1xuXG4gICAgLyogU2V0IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyAqL1xuICAgIEFMTE9XRURfVEFHUyA9XG4gICAgICAnQUxMT1dFRF9UQUdTJyBpbiBjZmdcbiAgICAgICAgPyBhZGRUb1NldCh7fSwgY2ZnLkFMTE9XRURfVEFHUywgdHJhbnNmb3JtQ2FzZUZ1bmMpXG4gICAgICAgIDogREVGQVVMVF9BTExPV0VEX1RBR1M7XG4gICAgQUxMT1dFRF9BVFRSID1cbiAgICAgICdBTExPV0VEX0FUVFInIGluIGNmZ1xuICAgICAgICA/IGFkZFRvU2V0KHt9LCBjZmcuQUxMT1dFRF9BVFRSLCB0cmFuc2Zvcm1DYXNlRnVuYylcbiAgICAgICAgOiBERUZBVUxUX0FMTE9XRURfQVRUUjtcbiAgICBBTExPV0VEX05BTUVTUEFDRVMgPVxuICAgICAgJ0FMTE9XRURfTkFNRVNQQUNFUycgaW4gY2ZnXG4gICAgICAgID8gYWRkVG9TZXQoe30sIGNmZy5BTExPV0VEX05BTUVTUEFDRVMsIHN0cmluZ1RvU3RyaW5nKVxuICAgICAgICA6IERFRkFVTFRfQUxMT1dFRF9OQU1FU1BBQ0VTO1xuICAgIFVSSV9TQUZFX0FUVFJJQlVURVMgPVxuICAgICAgJ0FERF9VUklfU0FGRV9BVFRSJyBpbiBjZmdcbiAgICAgICAgPyBhZGRUb1NldChcbiAgICAgICAgICAgIGNsb25lKERFRkFVTFRfVVJJX1NBRkVfQVRUUklCVVRFUyksIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgICAgICAgICBjZmcuQUREX1VSSV9TQUZFX0FUVFIsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgICAgICAgICB0cmFuc2Zvcm1DYXNlRnVuYyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxuICAgICAgICAgICkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcbiAgICAgICAgOiBERUZBVUxUX1VSSV9TQUZFX0FUVFJJQlVURVM7XG4gICAgREFUQV9VUklfVEFHUyA9XG4gICAgICAnQUREX0RBVEFfVVJJX1RBR1MnIGluIGNmZ1xuICAgICAgICA/IGFkZFRvU2V0KFxuICAgICAgICAgICAgY2xvbmUoREVGQVVMVF9EQVRBX1VSSV9UQUdTKSwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcbiAgICAgICAgICAgIGNmZy5BRERfREFUQV9VUklfVEFHUywgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcbiAgICAgICAgICAgIHRyYW5zZm9ybUNhc2VGdW5jIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgICAgICAgKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxuICAgICAgICA6IERFRkFVTFRfREFUQV9VUklfVEFHUztcbiAgICBGT1JCSURfQ09OVEVOVFMgPVxuICAgICAgJ0ZPUkJJRF9DT05URU5UUycgaW4gY2ZnXG4gICAgICAgID8gYWRkVG9TZXQoe30sIGNmZy5GT1JCSURfQ09OVEVOVFMsIHRyYW5zZm9ybUNhc2VGdW5jKVxuICAgICAgICA6IERFRkFVTFRfRk9SQklEX0NPTlRFTlRTO1xuICAgIEZPUkJJRF9UQUdTID1cbiAgICAgICdGT1JCSURfVEFHUycgaW4gY2ZnXG4gICAgICAgID8gYWRkVG9TZXQoe30sIGNmZy5GT1JCSURfVEFHUywgdHJhbnNmb3JtQ2FzZUZ1bmMpXG4gICAgICAgIDoge307XG4gICAgRk9SQklEX0FUVFIgPVxuICAgICAgJ0ZPUkJJRF9BVFRSJyBpbiBjZmdcbiAgICAgICAgPyBhZGRUb1NldCh7fSwgY2ZnLkZPUkJJRF9BVFRSLCB0cmFuc2Zvcm1DYXNlRnVuYylcbiAgICAgICAgOiB7fTtcbiAgICBVU0VfUFJPRklMRVMgPSAnVVNFX1BST0ZJTEVTJyBpbiBjZmcgPyBjZmcuVVNFX1BST0ZJTEVTIDogZmFsc2U7XG4gICAgQUxMT1dfQVJJQV9BVFRSID0gY2ZnLkFMTE9XX0FSSUFfQVRUUiAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuICAgIEFMTE9XX0RBVEFfQVRUUiA9IGNmZy5BTExPV19EQVRBX0FUVFIgIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcbiAgICBBTExPV19VTktOT1dOX1BST1RPQ09MUyA9IGNmZy5BTExPV19VTktOT1dOX1BST1RPQ09MUyB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgIEFMTE9XX1NFTEZfQ0xPU0VfSU5fQVRUUiA9IGNmZy5BTExPV19TRUxGX0NMT1NFX0lOX0FUVFIgIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcbiAgICBTQUZFX0ZPUl9URU1QTEFURVMgPSBjZmcuU0FGRV9GT1JfVEVNUExBVEVTIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgV0hPTEVfRE9DVU1FTlQgPSBjZmcuV0hPTEVfRE9DVU1FTlQgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICBSRVRVUk5fRE9NID0gY2ZnLlJFVFVSTl9ET00gfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICBSRVRVUk5fRE9NX0ZSQUdNRU5UID0gY2ZnLlJFVFVSTl9ET01fRlJBR01FTlQgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICBSRVRVUk5fVFJVU1RFRF9UWVBFID0gY2ZnLlJFVFVSTl9UUlVTVEVEX1RZUEUgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICBGT1JDRV9CT0RZID0gY2ZnLkZPUkNFX0JPRFkgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICBTQU5JVElaRV9ET00gPSBjZmcuU0FOSVRJWkVfRE9NICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG4gICAgU0FOSVRJWkVfTkFNRURfUFJPUFMgPSBjZmcuU0FOSVRJWkVfTkFNRURfUFJPUFMgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICBLRUVQX0NPTlRFTlQgPSBjZmcuS0VFUF9DT05URU5UICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG4gICAgSU5fUExBQ0UgPSBjZmcuSU5fUExBQ0UgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICBJU19BTExPV0VEX1VSSSA9IGNmZy5BTExPV0VEX1VSSV9SRUdFWFAgfHwgRVhQUkVTU0lPTlMuSVNfQUxMT1dFRF9VUkk7XG4gICAgTkFNRVNQQUNFID0gY2ZnLk5BTUVTUEFDRSB8fCBIVE1MX05BTUVTUEFDRTtcbiAgICBDVVNUT01fRUxFTUVOVF9IQU5ETElORyA9IGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORyB8fCB7fTtcbiAgICBpZiAoXG4gICAgICBjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcgJiZcbiAgICAgIGlzUmVnZXhPckZ1bmN0aW9uKGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2spXG4gICAgKSB7XG4gICAgICBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgPVxuICAgICAgICBjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORyAmJlxuICAgICAgaXNSZWdleE9yRnVuY3Rpb24oY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjaylcbiAgICApIHtcbiAgICAgIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjayA9XG4gICAgICAgIGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2s7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HICYmXG4gICAgICB0eXBlb2YgY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cyA9PT1cbiAgICAgICAgJ2Jvb2xlYW4nXG4gICAgKSB7XG4gICAgICBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHMgPVxuICAgICAgICBjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzO1xuICAgIH1cblxuICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMpIHtcbiAgICAgIEFMTE9XX0RBVEFfQVRUUiA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChSRVRVUk5fRE9NX0ZSQUdNRU5UKSB7XG4gICAgICBSRVRVUk5fRE9NID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiBQYXJzZSBwcm9maWxlIGluZm8gKi9cbiAgICBpZiAoVVNFX1BST0ZJTEVTKSB7XG4gICAgICBBTExPV0VEX1RBR1MgPSBhZGRUb1NldCh7fSwgVEFHUy50ZXh0KTtcbiAgICAgIEFMTE9XRURfQVRUUiA9IFtdO1xuICAgICAgaWYgKFVTRV9QUk9GSUxFUy5odG1sID09PSB0cnVlKSB7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgVEFHUy5odG1sKTtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBBVFRSUy5odG1sKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFVTRV9QUk9GSUxFUy5zdmcgPT09IHRydWUpIHtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBUQUdTLnN2Zyk7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgQVRUUlMuc3ZnKTtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBBVFRSUy54bWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAoVVNFX1BST0ZJTEVTLnN2Z0ZpbHRlcnMgPT09IHRydWUpIHtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBUQUdTLnN2Z0ZpbHRlcnMpO1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIEFUVFJTLnN2Zyk7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgQVRUUlMueG1sKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFVTRV9QUk9GSUxFUy5tYXRoTWwgPT09IHRydWUpIHtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBUQUdTLm1hdGhNbCk7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgQVRUUlMubWF0aE1sKTtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBBVFRSUy54bWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIE1lcmdlIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyAqL1xuICAgIGlmIChjZmcuQUREX1RBR1MpIHtcbiAgICAgIGlmIChBTExPV0VEX1RBR1MgPT09IERFRkFVTFRfQUxMT1dFRF9UQUdTKSB7XG4gICAgICAgIEFMTE9XRURfVEFHUyA9IGNsb25lKEFMTE9XRURfVEFHUyk7XG4gICAgICB9XG5cbiAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgY2ZnLkFERF9UQUdTLCB0cmFuc2Zvcm1DYXNlRnVuYyk7XG4gICAgfVxuXG4gICAgaWYgKGNmZy5BRERfQVRUUikge1xuICAgICAgaWYgKEFMTE9XRURfQVRUUiA9PT0gREVGQVVMVF9BTExPV0VEX0FUVFIpIHtcbiAgICAgICAgQUxMT1dFRF9BVFRSID0gY2xvbmUoQUxMT1dFRF9BVFRSKTtcbiAgICAgIH1cblxuICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBjZmcuQUREX0FUVFIsIHRyYW5zZm9ybUNhc2VGdW5jKTtcbiAgICB9XG5cbiAgICBpZiAoY2ZnLkFERF9VUklfU0FGRV9BVFRSKSB7XG4gICAgICBhZGRUb1NldChVUklfU0FGRV9BVFRSSUJVVEVTLCBjZmcuQUREX1VSSV9TQUZFX0FUVFIsIHRyYW5zZm9ybUNhc2VGdW5jKTtcbiAgICB9XG5cbiAgICBpZiAoY2ZnLkZPUkJJRF9DT05URU5UUykge1xuICAgICAgaWYgKEZPUkJJRF9DT05URU5UUyA9PT0gREVGQVVMVF9GT1JCSURfQ09OVEVOVFMpIHtcbiAgICAgICAgRk9SQklEX0NPTlRFTlRTID0gY2xvbmUoRk9SQklEX0NPTlRFTlRTKTtcbiAgICAgIH1cblxuICAgICAgYWRkVG9TZXQoRk9SQklEX0NPTlRFTlRTLCBjZmcuRk9SQklEX0NPTlRFTlRTLCB0cmFuc2Zvcm1DYXNlRnVuYyk7XG4gICAgfVxuXG4gICAgLyogQWRkICN0ZXh0IGluIGNhc2UgS0VFUF9DT05URU5UIGlzIHNldCB0byB0cnVlICovXG4gICAgaWYgKEtFRVBfQ09OVEVOVCkge1xuICAgICAgQUxMT1dFRF9UQUdTWycjdGV4dCddID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiBBZGQgaHRtbCwgaGVhZCBhbmQgYm9keSB0byBBTExPV0VEX1RBR1MgaW4gY2FzZSBXSE9MRV9ET0NVTUVOVCBpcyB0cnVlICovXG4gICAgaWYgKFdIT0xFX0RPQ1VNRU5UKSB7XG4gICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIFsnaHRtbCcsICdoZWFkJywgJ2JvZHknXSk7XG4gICAgfVxuXG4gICAgLyogQWRkIHRib2R5IHRvIEFMTE9XRURfVEFHUyBpbiBjYXNlIHRhYmxlcyBhcmUgcGVybWl0dGVkLCBzZWUgIzI4NiwgIzM2NSAqL1xuICAgIGlmIChBTExPV0VEX1RBR1MudGFibGUpIHtcbiAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgWyd0Ym9keSddKTtcbiAgICAgIGRlbGV0ZSBGT1JCSURfVEFHUy50Ym9keTtcbiAgICB9XG5cbiAgICBpZiAoY2ZnLlRSVVNURURfVFlQRVNfUE9MSUNZKSB7XG4gICAgICBpZiAodHlwZW9mIGNmZy5UUlVTVEVEX1RZUEVTX1BPTElDWS5jcmVhdGVIVE1MICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IHR5cGVFcnJvckNyZWF0ZShcbiAgICAgICAgICAnVFJVU1RFRF9UWVBFU19QT0xJQ1kgY29uZmlndXJhdGlvbiBvcHRpb24gbXVzdCBwcm92aWRlIGEgXCJjcmVhdGVIVE1MXCIgaG9vay4nXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY2ZnLlRSVVNURURfVFlQRVNfUE9MSUNZLmNyZWF0ZVNjcmlwdFVSTCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyB0eXBlRXJyb3JDcmVhdGUoXG4gICAgICAgICAgJ1RSVVNURURfVFlQRVNfUE9MSUNZIGNvbmZpZ3VyYXRpb24gb3B0aW9uIG11c3QgcHJvdmlkZSBhIFwiY3JlYXRlU2NyaXB0VVJMXCIgaG9vay4nXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIE92ZXJ3cml0ZSBleGlzdGluZyBUcnVzdGVkVHlwZXMgcG9saWN5LlxuICAgICAgdHJ1c3RlZFR5cGVzUG9saWN5ID0gY2ZnLlRSVVNURURfVFlQRVNfUE9MSUNZO1xuXG4gICAgICAvLyBTaWduIGxvY2FsIHZhcmlhYmxlcyByZXF1aXJlZCBieSBgc2FuaXRpemVgLlxuICAgICAgZW1wdHlIVE1MID0gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVbmluaXRpYWxpemVkIHBvbGljeSwgYXR0ZW1wdCB0byBpbml0aWFsaXplIHRoZSBpbnRlcm5hbCBkb21wdXJpZnkgcG9saWN5LlxuICAgICAgaWYgKHRydXN0ZWRUeXBlc1BvbGljeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRydXN0ZWRUeXBlc1BvbGljeSA9IF9jcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3koXG4gICAgICAgICAgdHJ1c3RlZFR5cGVzLFxuICAgICAgICAgIGN1cnJlbnRTY3JpcHRcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgY3JlYXRpbmcgdGhlIGludGVybmFsIHBvbGljeSBzdWNjZWVkZWQgc2lnbiBpbnRlcm5hbCB2YXJpYWJsZXMuXG4gICAgICBpZiAodHJ1c3RlZFR5cGVzUG9saWN5ICE9PSBudWxsICYmIHR5cGVvZiBlbXB0eUhUTUwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVtcHR5SFRNTCA9IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKCcnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQcmV2ZW50IGZ1cnRoZXIgbWFuaXB1bGF0aW9uIG9mIGNvbmZpZ3VyYXRpb24uXG4gICAgLy8gTm90IGF2YWlsYWJsZSBpbiBJRTgsIFNhZmFyaSA1LCBldGMuXG4gICAgaWYgKGZyZWV6ZSkge1xuICAgICAgZnJlZXplKGNmZyk7XG4gICAgfVxuXG4gICAgQ09ORklHID0gY2ZnO1xuICB9O1xuXG4gIGNvbnN0IE1BVEhNTF9URVhUX0lOVEVHUkFUSU9OX1BPSU5UUyA9IGFkZFRvU2V0KHt9LCBbXG4gICAgJ21pJyxcbiAgICAnbW8nLFxuICAgICdtbicsXG4gICAgJ21zJyxcbiAgICAnbXRleHQnLFxuICBdKTtcblxuICBjb25zdCBIVE1MX0lOVEVHUkFUSU9OX1BPSU5UUyA9IGFkZFRvU2V0KHt9LCBbXG4gICAgJ2ZvcmVpZ25vYmplY3QnLFxuICAgICdkZXNjJyxcbiAgICAndGl0bGUnLFxuICAgICdhbm5vdGF0aW9uLXhtbCcsXG4gIF0pO1xuXG4gIC8vIENlcnRhaW4gZWxlbWVudHMgYXJlIGFsbG93ZWQgaW4gYm90aCBTVkcgYW5kIEhUTUxcbiAgLy8gbmFtZXNwYWNlLiBXZSBuZWVkIHRvIHNwZWNpZnkgdGhlbSBleHBsaWNpdGx5XG4gIC8vIHNvIHRoYXQgdGhleSBkb24ndCBnZXQgZXJyb25lb3VzbHkgZGVsZXRlZCBmcm9tXG4gIC8vIEhUTUwgbmFtZXNwYWNlLlxuICBjb25zdCBDT01NT05fU1ZHX0FORF9IVE1MX0VMRU1FTlRTID0gYWRkVG9TZXQoe30sIFtcbiAgICAndGl0bGUnLFxuICAgICdzdHlsZScsXG4gICAgJ2ZvbnQnLFxuICAgICdhJyxcbiAgICAnc2NyaXB0JyxcbiAgXSk7XG5cbiAgLyogS2VlcCB0cmFjayBvZiBhbGwgcG9zc2libGUgU1ZHIGFuZCBNYXRoTUwgdGFnc1xuICAgKiBzbyB0aGF0IHdlIGNhbiBwZXJmb3JtIHRoZSBuYW1lc3BhY2UgY2hlY2tzXG4gICAqIGNvcnJlY3RseS4gKi9cbiAgY29uc3QgQUxMX1NWR19UQUdTID0gYWRkVG9TZXQoe30sIFtcbiAgICAuLi5UQUdTLnN2ZyxcbiAgICAuLi5UQUdTLnN2Z0ZpbHRlcnMsXG4gICAgLi4uVEFHUy5zdmdEaXNhbGxvd2VkLFxuICBdKTtcbiAgY29uc3QgQUxMX01BVEhNTF9UQUdTID0gYWRkVG9TZXQoe30sIFtcbiAgICAuLi5UQUdTLm1hdGhNbCxcbiAgICAuLi5UQUdTLm1hdGhNbERpc2FsbG93ZWQsXG4gIF0pO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50IGEgRE9NIGVsZW1lbnQgd2hvc2UgbmFtZXNwYWNlIGlzIGJlaW5nIGNoZWNrZWRcbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybiBmYWxzZSBpZiB0aGUgZWxlbWVudCBoYXMgYVxuICAgKiAgbmFtZXNwYWNlIHRoYXQgYSBzcGVjLWNvbXBsaWFudCBwYXJzZXIgd291bGQgbmV2ZXJcbiAgICogIHJldHVybi4gUmV0dXJuIHRydWUgb3RoZXJ3aXNlLlxuICAgKi9cbiAgY29uc3QgX2NoZWNrVmFsaWROYW1lc3BhY2UgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIGxldCBwYXJlbnQgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuXG4gICAgLy8gSW4gSlNET00sIGlmIHdlJ3JlIGluc2lkZSBzaGFkb3cgRE9NLCB0aGVuIHBhcmVudE5vZGVcbiAgICAvLyBjYW4gYmUgbnVsbC4gV2UganVzdCBzaW11bGF0ZSBwYXJlbnQgaW4gdGhpcyBjYXNlLlxuICAgIGlmICghcGFyZW50IHx8ICFwYXJlbnQudGFnTmFtZSkge1xuICAgICAgcGFyZW50ID0ge1xuICAgICAgICBuYW1lc3BhY2VVUkk6IE5BTUVTUEFDRSxcbiAgICAgICAgdGFnTmFtZTogJ3RlbXBsYXRlJyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgdGFnTmFtZSA9IHN0cmluZ1RvTG93ZXJDYXNlKGVsZW1lbnQudGFnTmFtZSk7XG4gICAgY29uc3QgcGFyZW50VGFnTmFtZSA9IHN0cmluZ1RvTG93ZXJDYXNlKHBhcmVudC50YWdOYW1lKTtcblxuICAgIGlmICghQUxMT1dFRF9OQU1FU1BBQ0VTW2VsZW1lbnQubmFtZXNwYWNlVVJJXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0gU1ZHX05BTUVTUEFDRSkge1xuICAgICAgLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIEhUTUwgbmFtZXNwYWNlIHRvIFNWR1xuICAgICAgLy8gaXMgdmlhIDxzdmc+LiBJZiBpdCBoYXBwZW5zIHZpYSBhbnkgb3RoZXIgdGFnLCB0aGVuXG4gICAgICAvLyBpdCBzaG91bGQgYmUga2lsbGVkLlxuICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAgIHJldHVybiB0YWdOYW1lID09PSAnc3ZnJztcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIE1hdGhNTCB0byBTVkcgaXMgdmlhYFxuICAgICAgLy8gc3ZnIGlmIHBhcmVudCBpcyBlaXRoZXIgPGFubm90YXRpb24teG1sPiBvciBNYXRoTUxcbiAgICAgIC8vIHRleHQgaW50ZWdyYXRpb24gcG9pbnRzLlxuICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IE1BVEhNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICB0YWdOYW1lID09PSAnc3ZnJyAmJlxuICAgICAgICAgIChwYXJlbnRUYWdOYW1lID09PSAnYW5ub3RhdGlvbi14bWwnIHx8XG4gICAgICAgICAgICBNQVRITUxfVEVYVF9JTlRFR1JBVElPTl9QT0lOVFNbcGFyZW50VGFnTmFtZV0pXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIFdlIG9ubHkgYWxsb3cgZWxlbWVudHMgdGhhdCBhcmUgZGVmaW5lZCBpbiBTVkdcbiAgICAgIC8vIHNwZWMuIEFsbCBvdGhlcnMgYXJlIGRpc2FsbG93ZWQgaW4gU1ZHIG5hbWVzcGFjZS5cbiAgICAgIHJldHVybiBCb29sZWFuKEFMTF9TVkdfVEFHU1t0YWdOYW1lXSk7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQubmFtZXNwYWNlVVJJID09PSBNQVRITUxfTkFNRVNQQUNFKSB7XG4gICAgICAvLyBUaGUgb25seSB3YXkgdG8gc3dpdGNoIGZyb20gSFRNTCBuYW1lc3BhY2UgdG8gTWF0aE1MXG4gICAgICAvLyBpcyB2aWEgPG1hdGg+LiBJZiBpdCBoYXBwZW5zIHZpYSBhbnkgb3RoZXIgdGFnLCB0aGVuXG4gICAgICAvLyBpdCBzaG91bGQgYmUga2lsbGVkLlxuICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAgIHJldHVybiB0YWdOYW1lID09PSAnbWF0aCc7XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBvbmx5IHdheSB0byBzd2l0Y2ggZnJvbSBTVkcgdG8gTWF0aE1MIGlzIHZpYVxuICAgICAgLy8gPG1hdGg+IGFuZCBIVE1MIGludGVncmF0aW9uIHBvaW50c1xuICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IFNWR19OQU1FU1BBQ0UpIHtcbiAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdtYXRoJyAmJiBIVE1MX0lOVEVHUkFUSU9OX1BPSU5UU1twYXJlbnRUYWdOYW1lXTtcbiAgICAgIH1cblxuICAgICAgLy8gV2Ugb25seSBhbGxvdyBlbGVtZW50cyB0aGF0IGFyZSBkZWZpbmVkIGluIE1hdGhNTFxuICAgICAgLy8gc3BlYy4gQWxsIG90aGVycyBhcmUgZGlzYWxsb3dlZCBpbiBNYXRoTUwgbmFtZXNwYWNlLlxuICAgICAgcmV0dXJuIEJvb2xlYW4oQUxMX01BVEhNTF9UQUdTW3RhZ05hbWVdKTtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAvLyBUaGUgb25seSB3YXkgdG8gc3dpdGNoIGZyb20gU1ZHIHRvIEhUTUwgaXMgdmlhXG4gICAgICAvLyBIVE1MIGludGVncmF0aW9uIHBvaW50cywgYW5kIGZyb20gTWF0aE1MIHRvIEhUTUxcbiAgICAgIC8vIGlzIHZpYSBNYXRoTUwgdGV4dCBpbnRlZ3JhdGlvbiBwb2ludHNcbiAgICAgIGlmIChcbiAgICAgICAgcGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gU1ZHX05BTUVTUEFDRSAmJlxuICAgICAgICAhSFRNTF9JTlRFR1JBVElPTl9QT0lOVFNbcGFyZW50VGFnTmFtZV1cbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gTUFUSE1MX05BTUVTUEFDRSAmJlxuICAgICAgICAhTUFUSE1MX1RFWFRfSU5URUdSQVRJT05fUE9JTlRTW3BhcmVudFRhZ05hbWVdXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBXZSBkaXNhbGxvdyB0YWdzIHRoYXQgYXJlIHNwZWNpZmljIGZvciBNYXRoTUxcbiAgICAgIC8vIG9yIFNWRyBhbmQgc2hvdWxkIG5ldmVyIGFwcGVhciBpbiBIVE1MIG5hbWVzcGFjZVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgIUFMTF9NQVRITUxfVEFHU1t0YWdOYW1lXSAmJlxuICAgICAgICAoQ09NTU9OX1NWR19BTkRfSFRNTF9FTEVNRU5UU1t0YWdOYW1lXSB8fCAhQUxMX1NWR19UQUdTW3RhZ05hbWVdKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBGb3IgWEhUTUwgYW5kIFhNTCBkb2N1bWVudHMgdGhhdCBzdXBwb3J0IGN1c3RvbSBuYW1lc3BhY2VzXG4gICAgaWYgKFxuICAgICAgUEFSU0VSX01FRElBX1RZUEUgPT09ICdhcHBsaWNhdGlvbi94aHRtbCt4bWwnICYmXG4gICAgICBBTExPV0VEX05BTUVTUEFDRVNbZWxlbWVudC5uYW1lc3BhY2VVUkldXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBUaGUgY29kZSBzaG91bGQgbmV2ZXIgcmVhY2ggdGhpcyBwbGFjZSAodGhpcyBtZWFuc1xuICAgIC8vIHRoYXQgdGhlIGVsZW1lbnQgc29tZWhvdyBnb3QgbmFtZXNwYWNlIHRoYXQgaXMgbm90XG4gICAgLy8gSFRNTCwgU1ZHLCBNYXRoTUwgb3IgYWxsb3dlZCB2aWEgQUxMT1dFRF9OQU1FU1BBQ0VTKS5cbiAgICAvLyBSZXR1cm4gZmFsc2UganVzdCBpbiBjYXNlLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogX2ZvcmNlUmVtb3ZlXG4gICAqXG4gICAqIEBwYXJhbSAge05vZGV9IG5vZGUgYSBET00gbm9kZVxuICAgKi9cbiAgY29uc3QgX2ZvcmNlUmVtb3ZlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBhcnJheVB1c2goRE9NUHVyaWZ5LnJlbW92ZWQsIHsgZWxlbWVudDogbm9kZSB9KTtcblxuICAgIHRyeSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItZG9tLW5vZGUtcmVtb3ZlXG4gICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIF9yZW1vdmVBdHRyaWJ1dGVcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lIGFuIEF0dHJpYnV0ZSBuYW1lXG4gICAqIEBwYXJhbSAge05vZGV9IG5vZGUgYSBET00gbm9kZVxuICAgKi9cbiAgY29uc3QgX3JlbW92ZUF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChuYW1lLCBub2RlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGFycmF5UHVzaChET01QdXJpZnkucmVtb3ZlZCwge1xuICAgICAgICBhdHRyaWJ1dGU6IG5vZGUuZ2V0QXR0cmlidXRlTm9kZShuYW1lKSxcbiAgICAgICAgZnJvbTogbm9kZSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgIGFycmF5UHVzaChET01QdXJpZnkucmVtb3ZlZCwge1xuICAgICAgICBhdHRyaWJ1dGU6IG51bGwsXG4gICAgICAgIGZyb206IG5vZGUsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcblxuICAgIC8vIFdlIHZvaWQgYXR0cmlidXRlIHZhbHVlcyBmb3IgdW5yZW1vdmFibGUgXCJpc1wiXCIgYXR0cmlidXRlc1xuICAgIGlmIChuYW1lID09PSAnaXMnICYmICFBTExPV0VEX0FUVFJbbmFtZV0pIHtcbiAgICAgIGlmIChSRVRVUk5fRE9NIHx8IFJFVFVSTl9ET01fRlJBR01FTlQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfZm9yY2VSZW1vdmUobm9kZSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsICcnKTtcbiAgICAgICAgfSBjYXRjaCAoXykge31cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIF9pbml0RG9jdW1lbnRcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBkaXJ0eSBhIHN0cmluZyBvZiBkaXJ0eSBtYXJrdXBcbiAgICogQHJldHVybiB7RG9jdW1lbnR9IGEgRE9NLCBmaWxsZWQgd2l0aCB0aGUgZGlydHkgbWFya3VwXG4gICAqL1xuICBjb25zdCBfaW5pdERvY3VtZW50ID0gZnVuY3Rpb24gKGRpcnR5KSB7XG4gICAgLyogQ3JlYXRlIGEgSFRNTCBkb2N1bWVudCAqL1xuICAgIGxldCBkb2MgPSBudWxsO1xuICAgIGxldCBsZWFkaW5nV2hpdGVzcGFjZSA9IG51bGw7XG5cbiAgICBpZiAoRk9SQ0VfQk9EWSkge1xuICAgICAgZGlydHkgPSAnPHJlbW92ZT48L3JlbW92ZT4nICsgZGlydHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIElmIEZPUkNFX0JPRFkgaXNuJ3QgdXNlZCwgbGVhZGluZyB3aGl0ZXNwYWNlIG5lZWRzIHRvIGJlIHByZXNlcnZlZCBtYW51YWxseSAqL1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IHN0cmluZ01hdGNoKGRpcnR5LCAvXltcXHJcXG5cXHQgXSsvKTtcbiAgICAgIGxlYWRpbmdXaGl0ZXNwYWNlID0gbWF0Y2hlcyAmJiBtYXRjaGVzWzBdO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIFBBUlNFUl9NRURJQV9UWVBFID09PSAnYXBwbGljYXRpb24veGh0bWwreG1sJyAmJlxuICAgICAgTkFNRVNQQUNFID09PSBIVE1MX05BTUVTUEFDRVxuICAgICkge1xuICAgICAgLy8gUm9vdCBvZiBYSFRNTCBkb2MgbXVzdCBjb250YWluIHhtbG5zIGRlY2xhcmF0aW9uIChzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3hodG1sMS9ub3JtYXRpdmUuaHRtbCNzdHJpY3QpXG4gICAgICBkaXJ0eSA9XG4gICAgICAgICc8aHRtbCB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj48aGVhZD48L2hlYWQ+PGJvZHk+JyArXG4gICAgICAgIGRpcnR5ICtcbiAgICAgICAgJzwvYm9keT48L2h0bWw+JztcbiAgICB9XG5cbiAgICBjb25zdCBkaXJ0eVBheWxvYWQgPSB0cnVzdGVkVHlwZXNQb2xpY3lcbiAgICAgID8gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoZGlydHkpXG4gICAgICA6IGRpcnR5O1xuICAgIC8qXG4gICAgICogVXNlIHRoZSBET01QYXJzZXIgQVBJIGJ5IGRlZmF1bHQsIGZhbGxiYWNrIGxhdGVyIGlmIG5lZWRzIGJlXG4gICAgICogRE9NUGFyc2VyIG5vdCB3b3JrIGZvciBzdmcgd2hlbiBoYXMgbXVsdGlwbGUgcm9vdCBlbGVtZW50LlxuICAgICAqL1xuICAgIGlmIChOQU1FU1BBQ0UgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGRpcnR5UGF5bG9hZCwgUEFSU0VSX01FRElBX1RZUEUpO1xuICAgICAgfSBjYXRjaCAoXykge31cbiAgICB9XG5cbiAgICAvKiBVc2UgY3JlYXRlSFRNTERvY3VtZW50IGluIGNhc2UgRE9NUGFyc2VyIGlzIG5vdCBhdmFpbGFibGUgKi9cbiAgICBpZiAoIWRvYyB8fCAhZG9jLmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgZG9jID0gaW1wbGVtZW50YXRpb24uY3JlYXRlRG9jdW1lbnQoTkFNRVNQQUNFLCAndGVtcGxhdGUnLCBudWxsKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRvYy5kb2N1bWVudEVsZW1lbnQuaW5uZXJIVE1MID0gSVNfRU1QVFlfSU5QVVRcbiAgICAgICAgICA/IGVtcHR5SFRNTFxuICAgICAgICAgIDogZGlydHlQYXlsb2FkO1xuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAvLyBTeW50YXggZXJyb3IgaWYgZGlydHlQYXlsb2FkIGlzIGludmFsaWQgeG1sXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYm9keSA9IGRvYy5ib2R5IHx8IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICBpZiAoZGlydHkgJiYgbGVhZGluZ1doaXRlc3BhY2UpIHtcbiAgICAgIGJvZHkuaW5zZXJ0QmVmb3JlKFxuICAgICAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsZWFkaW5nV2hpdGVzcGFjZSksXG4gICAgICAgIGJvZHkuY2hpbGROb2Rlc1swXSB8fCBudWxsXG4gICAgICApO1xuICAgIH1cblxuICAgIC8qIFdvcmsgb24gd2hvbGUgZG9jdW1lbnQgb3IganVzdCBpdHMgYm9keSAqL1xuICAgIGlmIChOQU1FU1BBQ0UgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICByZXR1cm4gZ2V0RWxlbWVudHNCeVRhZ05hbWUuY2FsbChcbiAgICAgICAgZG9jLFxuICAgICAgICBXSE9MRV9ET0NVTUVOVCA/ICdodG1sJyA6ICdib2R5J1xuICAgICAgKVswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gV0hPTEVfRE9DVU1FTlQgPyBkb2MuZG9jdW1lbnRFbGVtZW50IDogYm9keTtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIE5vZGVJdGVyYXRvciBvYmplY3QgdGhhdCB5b3UgY2FuIHVzZSB0byB0cmF2ZXJzZSBmaWx0ZXJlZCBsaXN0cyBvZiBub2RlcyBvciBlbGVtZW50cyBpbiBhIGRvY3VtZW50LlxuICAgKlxuICAgKiBAcGFyYW0gIHtOb2RlfSByb290IFRoZSByb290IGVsZW1lbnQgb3Igbm9kZSB0byBzdGFydCB0cmF2ZXJzaW5nIG9uLlxuICAgKiBAcmV0dXJuIHtOb2RlSXRlcmF0b3J9IFRoZSBjcmVhdGVkIE5vZGVJdGVyYXRvclxuICAgKi9cbiAgY29uc3QgX2NyZWF0ZU5vZGVJdGVyYXRvciA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgcmV0dXJuIGNyZWF0ZU5vZGVJdGVyYXRvci5jYWxsKFxuICAgICAgcm9vdC5vd25lckRvY3VtZW50IHx8IHJvb3QsXG4gICAgICByb290LFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICAgIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UIHwgTm9kZUZpbHRlci5TSE9XX0NPTU1FTlQgfCBOb2RlRmlsdGVyLlNIT1dfVEVYVCxcbiAgICAgIG51bGxcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBfaXNDbG9iYmVyZWRcbiAgICpcbiAgICogQHBhcmFtICB7Tm9kZX0gZWxtIGVsZW1lbnQgdG8gY2hlY2sgZm9yIGNsb2JiZXJpbmcgYXR0YWNrc1xuICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGNsb2JiZXJlZCwgZmFsc2UgaWYgc2FmZVxuICAgKi9cbiAgY29uc3QgX2lzQ2xvYmJlcmVkID0gZnVuY3Rpb24gKGVsbSkge1xuICAgIHJldHVybiAoXG4gICAgICBlbG0gaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQgJiZcbiAgICAgICh0eXBlb2YgZWxtLm5vZGVOYW1lICE9PSAnc3RyaW5nJyB8fFxuICAgICAgICB0eXBlb2YgZWxtLnRleHRDb250ZW50ICE9PSAnc3RyaW5nJyB8fFxuICAgICAgICB0eXBlb2YgZWxtLnJlbW92ZUNoaWxkICE9PSAnZnVuY3Rpb24nIHx8XG4gICAgICAgICEoZWxtLmF0dHJpYnV0ZXMgaW5zdGFuY2VvZiBOYW1lZE5vZGVNYXApIHx8XG4gICAgICAgIHR5cGVvZiBlbG0ucmVtb3ZlQXR0cmlidXRlICE9PSAnZnVuY3Rpb24nIHx8XG4gICAgICAgIHR5cGVvZiBlbG0uc2V0QXR0cmlidXRlICE9PSAnZnVuY3Rpb24nIHx8XG4gICAgICAgIHR5cGVvZiBlbG0ubmFtZXNwYWNlVVJJICE9PSAnc3RyaW5nJyB8fFxuICAgICAgICB0eXBlb2YgZWxtLmluc2VydEJlZm9yZSAhPT0gJ2Z1bmN0aW9uJyB8fFxuICAgICAgICB0eXBlb2YgZWxtLmhhc0NoaWxkTm9kZXMgIT09ICdmdW5jdGlvbicpXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIG9iamVjdCBpcyBhIERPTSBub2RlLlxuICAgKlxuICAgKiBAcGFyYW0gIHtOb2RlfSBvYmplY3Qgb2JqZWN0IHRvIGNoZWNrIHdoZXRoZXIgaXQncyBhIERPTSBub2RlXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaXMgb2JqZWN0IGlzIGEgRE9NIG5vZGVcbiAgICovXG4gIGNvbnN0IF9pc05vZGUgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBOb2RlID09PSAnZnVuY3Rpb24nICYmIG9iamVjdCBpbnN0YW5jZW9mIE5vZGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIF9leGVjdXRlSG9va1xuICAgKiBFeGVjdXRlIHVzZXIgY29uZmlndXJhYmxlIGhvb2tzXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gZW50cnlQb2ludCAgTmFtZSBvZiB0aGUgaG9vaydzIGVudHJ5IHBvaW50XG4gICAqIEBwYXJhbSAge05vZGV9IGN1cnJlbnROb2RlIG5vZGUgdG8gd29yayBvbiB3aXRoIHRoZSBob29rXG4gICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBhZGRpdGlvbmFsIGhvb2sgcGFyYW1ldGVyc1xuICAgKi9cbiAgY29uc3QgX2V4ZWN1dGVIb29rID0gZnVuY3Rpb24gKGVudHJ5UG9pbnQsIGN1cnJlbnROb2RlLCBkYXRhKSB7XG4gICAgaWYgKCFob29rc1tlbnRyeVBvaW50XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFycmF5Rm9yRWFjaChob29rc1tlbnRyeVBvaW50XSwgKGhvb2spID0+IHtcbiAgICAgIGhvb2suY2FsbChET01QdXJpZnksIGN1cnJlbnROb2RlLCBkYXRhLCBDT05GSUcpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBfc2FuaXRpemVFbGVtZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdCBub2RlTmFtZVxuICAgKiBAcHJvdGVjdCB0ZXh0Q29udGVudFxuICAgKiBAcHJvdGVjdCByZW1vdmVDaGlsZFxuICAgKlxuICAgKiBAcGFyYW0gICB7Tm9kZX0gY3VycmVudE5vZGUgdG8gY2hlY2sgZm9yIHBlcm1pc3Npb24gdG8gZXhpc3RcbiAgICogQHJldHVybiAge0Jvb2xlYW59IHRydWUgaWYgbm9kZSB3YXMga2lsbGVkLCBmYWxzZSBpZiBsZWZ0IGFsaXZlXG4gICAqL1xuICBjb25zdCBfc2FuaXRpemVFbGVtZW50cyA9IGZ1bmN0aW9uIChjdXJyZW50Tm9kZSkge1xuICAgIGxldCBjb250ZW50ID0gbnVsbDtcblxuICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICBfZXhlY3V0ZUhvb2soJ2JlZm9yZVNhbml0aXplRWxlbWVudHMnLCBjdXJyZW50Tm9kZSwgbnVsbCk7XG5cbiAgICAvKiBDaGVjayBpZiBlbGVtZW50IGlzIGNsb2JiZXJlZCBvciBjYW4gY2xvYmJlciAqL1xuICAgIGlmIChfaXNDbG9iYmVyZWQoY3VycmVudE5vZGUpKSB7XG4gICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyogTm93IGxldCdzIGNoZWNrIHRoZSBlbGVtZW50J3MgdHlwZSBhbmQgbmFtZSAqL1xuICAgIGNvbnN0IHRhZ05hbWUgPSB0cmFuc2Zvcm1DYXNlRnVuYyhjdXJyZW50Tm9kZS5ub2RlTmFtZSk7XG5cbiAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVFbGVtZW50JywgY3VycmVudE5vZGUsIHtcbiAgICAgIHRhZ05hbWUsXG4gICAgICBhbGxvd2VkVGFnczogQUxMT1dFRF9UQUdTLFxuICAgIH0pO1xuXG4gICAgLyogRGV0ZWN0IG1YU1MgYXR0ZW1wdHMgYWJ1c2luZyBuYW1lc3BhY2UgY29uZnVzaW9uICovXG4gICAgaWYgKFxuICAgICAgY3VycmVudE5vZGUuaGFzQ2hpbGROb2RlcygpICYmXG4gICAgICAhX2lzTm9kZShjdXJyZW50Tm9kZS5maXJzdEVsZW1lbnRDaGlsZCkgJiZcbiAgICAgIHJlZ0V4cFRlc3QoLzxbL1xcd10vZywgY3VycmVudE5vZGUuaW5uZXJIVE1MKSAmJlxuICAgICAgcmVnRXhwVGVzdCgvPFsvXFx3XS9nLCBjdXJyZW50Tm9kZS50ZXh0Q29udGVudClcbiAgICApIHtcbiAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiBSZW1vdmUgZWxlbWVudCBpZiBhbnl0aGluZyBmb3JiaWRzIGl0cyBwcmVzZW5jZSAqL1xuICAgIGlmICghQUxMT1dFRF9UQUdTW3RhZ05hbWVdIHx8IEZPUkJJRF9UQUdTW3RhZ05hbWVdKSB7XG4gICAgICAvKiBDaGVjayBpZiB3ZSBoYXZlIGEgY3VzdG9tIGVsZW1lbnQgdG8gaGFuZGxlICovXG4gICAgICBpZiAoIUZPUkJJRF9UQUdTW3RhZ05hbWVdICYmIF9pc0Jhc2ljQ3VzdG9tRWxlbWVudCh0YWdOYW1lKSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgUmVnRXhwICYmXG4gICAgICAgICAgcmVnRXhwVGVzdChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2ssIHRhZ05hbWUpXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJlxuICAgICAgICAgIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayh0YWdOYW1lKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogS2VlcCBjb250ZW50IGV4Y2VwdCBmb3IgYmFkLWxpc3RlZCBlbGVtZW50cyAqL1xuICAgICAgaWYgKEtFRVBfQ09OVEVOVCAmJiAhRk9SQklEX0NPTlRFTlRTW3RhZ05hbWVdKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGN1cnJlbnROb2RlKSB8fCBjdXJyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gZ2V0Q2hpbGROb2RlcyhjdXJyZW50Tm9kZSkgfHwgY3VycmVudE5vZGUuY2hpbGROb2RlcztcblxuICAgICAgICBpZiAoY2hpbGROb2RlcyAmJiBwYXJlbnROb2RlKSB7XG4gICAgICAgICAgY29uc3QgY2hpbGRDb3VudCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IGNoaWxkQ291bnQgLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgIGNsb25lTm9kZShjaGlsZE5vZGVzW2ldLCB0cnVlKSxcbiAgICAgICAgICAgICAgZ2V0TmV4dFNpYmxpbmcoY3VycmVudE5vZGUpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyogQ2hlY2sgd2hldGhlciBlbGVtZW50IGhhcyBhIHZhbGlkIG5hbWVzcGFjZSAqL1xuICAgIGlmIChjdXJyZW50Tm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgIV9jaGVja1ZhbGlkTmFtZXNwYWNlKGN1cnJlbnROb2RlKSkge1xuICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qIE1ha2Ugc3VyZSB0aGF0IG9sZGVyIGJyb3dzZXJzIGRvbid0IGdldCBmYWxsYmFjay10YWcgbVhTUyAqL1xuICAgIGlmIChcbiAgICAgICh0YWdOYW1lID09PSAnbm9zY3JpcHQnIHx8XG4gICAgICAgIHRhZ05hbWUgPT09ICdub2VtYmVkJyB8fFxuICAgICAgICB0YWdOYW1lID09PSAnbm9mcmFtZXMnKSAmJlxuICAgICAgcmVnRXhwVGVzdCgvPFxcL25vKHNjcmlwdHxlbWJlZHxmcmFtZXMpL2ksIGN1cnJlbnROb2RlLmlubmVySFRNTClcbiAgICApIHtcbiAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiBTYW5pdGl6ZSBlbGVtZW50IGNvbnRlbnQgdG8gYmUgdGVtcGxhdGUtc2FmZSAqL1xuICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMgJiYgY3VycmVudE5vZGUubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgIC8qIEdldCB0aGUgZWxlbWVudCdzIHRleHQgY29udGVudCAqL1xuICAgICAgY29udGVudCA9IGN1cnJlbnROb2RlLnRleHRDb250ZW50O1xuXG4gICAgICBhcnJheUZvckVhY2goW01VU1RBQ0hFX0VYUFIsIEVSQl9FWFBSLCBUTVBMSVRfRVhQUl0sIChleHByKSA9PiB7XG4gICAgICAgIGNvbnRlbnQgPSBzdHJpbmdSZXBsYWNlKGNvbnRlbnQsIGV4cHIsICcgJyk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGN1cnJlbnROb2RlLnRleHRDb250ZW50ICE9PSBjb250ZW50KSB7XG4gICAgICAgIGFycmF5UHVzaChET01QdXJpZnkucmVtb3ZlZCwgeyBlbGVtZW50OiBjdXJyZW50Tm9kZS5jbG9uZU5vZGUoKSB9KTtcbiAgICAgICAgY3VycmVudE5vZGUudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICBfZXhlY3V0ZUhvb2soJ2FmdGVyU2FuaXRpemVFbGVtZW50cycsIGN1cnJlbnROb2RlLCBudWxsKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogX2lzVmFsaWRBdHRyaWJ1dGVcbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSBsY1RhZyBMb3dlcmNhc2UgdGFnIG5hbWUgb2YgY29udGFpbmluZyBlbGVtZW50LlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGxjTmFtZSBMb3dlcmNhc2UgYXR0cmlidXRlIG5hbWUuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdmFsdWUgQXR0cmlidXRlIHZhbHVlLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgY29uc3QgX2lzVmFsaWRBdHRyaWJ1dGUgPSBmdW5jdGlvbiAobGNUYWcsIGxjTmFtZSwgdmFsdWUpIHtcbiAgICAvKiBNYWtlIHN1cmUgYXR0cmlidXRlIGNhbm5vdCBjbG9iYmVyICovXG4gICAgaWYgKFxuICAgICAgU0FOSVRJWkVfRE9NICYmXG4gICAgICAobGNOYW1lID09PSAnaWQnIHx8IGxjTmFtZSA9PT0gJ25hbWUnKSAmJlxuICAgICAgKHZhbHVlIGluIGRvY3VtZW50IHx8IHZhbHVlIGluIGZvcm1FbGVtZW50KVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qIEFsbG93IHZhbGlkIGRhdGEtKiBhdHRyaWJ1dGVzOiBBdCBsZWFzdCBvbmUgY2hhcmFjdGVyIGFmdGVyIFwiLVwiXG4gICAgICAgIChodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9kb20uaHRtbCNlbWJlZGRpbmctY3VzdG9tLW5vbi12aXNpYmxlLWRhdGEtd2l0aC10aGUtZGF0YS0qLWF0dHJpYnV0ZXMpXG4gICAgICAgIFhNTC1jb21wYXRpYmxlIChodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbmZyYXN0cnVjdHVyZS5odG1sI3htbC1jb21wYXRpYmxlIGFuZCBodHRwOi8vd3d3LnczLm9yZy9UUi94bWwvI2QwZTgwNClcbiAgICAgICAgV2UgZG9uJ3QgbmVlZCB0byBjaGVjayB0aGUgdmFsdWU7IGl0J3MgYWx3YXlzIFVSSSBzYWZlLiAqL1xuICAgIGlmIChcbiAgICAgIEFMTE9XX0RBVEFfQVRUUiAmJlxuICAgICAgIUZPUkJJRF9BVFRSW2xjTmFtZV0gJiZcbiAgICAgIHJlZ0V4cFRlc3QoREFUQV9BVFRSLCBsY05hbWUpXG4gICAgKSB7XG4gICAgICAvLyBUaGlzIGF0dHJpYnV0ZSBpcyBzYWZlXG4gICAgfSBlbHNlIGlmIChBTExPV19BUklBX0FUVFIgJiYgcmVnRXhwVGVzdChBUklBX0FUVFIsIGxjTmFtZSkpIHtcbiAgICAgIC8vIFRoaXMgYXR0cmlidXRlIGlzIHNhZmVcbiAgICAgIC8qIE90aGVyd2lzZSwgY2hlY2sgdGhlIG5hbWUgaXMgcGVybWl0dGVkICovXG4gICAgfSBlbHNlIGlmICghQUxMT1dFRF9BVFRSW2xjTmFtZV0gfHwgRk9SQklEX0FUVFJbbGNOYW1lXSkge1xuICAgICAgaWYgKFxuICAgICAgICAvLyBGaXJzdCBjb25kaXRpb24gZG9lcyBhIHZlcnkgYmFzaWMgY2hlY2sgaWYgYSkgaXQncyBiYXNpY2FsbHkgYSB2YWxpZCBjdXN0b20gZWxlbWVudCB0YWduYW1lIEFORFxuICAgICAgICAvLyBiKSBpZiB0aGUgdGFnTmFtZSBwYXNzZXMgd2hhdGV2ZXIgdGhlIHVzZXIgaGFzIGNvbmZpZ3VyZWQgZm9yIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVja1xuICAgICAgICAvLyBhbmQgYykgaWYgdGhlIGF0dHJpYnV0ZSBuYW1lIHBhc3NlcyB3aGF0ZXZlciB0aGUgdXNlciBoYXMgY29uZmlndXJlZCBmb3IgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrXG4gICAgICAgIChfaXNCYXNpY0N1c3RvbUVsZW1lbnQobGNUYWcpICYmXG4gICAgICAgICAgKChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBSZWdFeHAgJiZcbiAgICAgICAgICAgIHJlZ0V4cFRlc3QoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrLCBsY1RhZykpIHx8XG4gICAgICAgICAgICAoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgRnVuY3Rpb24gJiZcbiAgICAgICAgICAgICAgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrKGxjVGFnKSkpICYmXG4gICAgICAgICAgKChDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2sgaW5zdGFuY2VvZiBSZWdFeHAgJiZcbiAgICAgICAgICAgIHJlZ0V4cFRlc3QoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrLCBsY05hbWUpKSB8fFxuICAgICAgICAgICAgKENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjayBpbnN0YW5jZW9mIEZ1bmN0aW9uICYmXG4gICAgICAgICAgICAgIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjayhsY05hbWUpKSkpIHx8XG4gICAgICAgIC8vIEFsdGVybmF0aXZlLCBzZWNvbmQgY29uZGl0aW9uIGNoZWNrcyBpZiBpdCdzIGFuIGBpc2AtYXR0cmlidXRlLCBBTkRcbiAgICAgICAgLy8gdGhlIHZhbHVlIHBhc3NlcyB3aGF0ZXZlciB0aGUgdXNlciBoYXMgY29uZmlndXJlZCBmb3IgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrXG4gICAgICAgIChsY05hbWUgPT09ICdpcycgJiZcbiAgICAgICAgICBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHMgJiZcbiAgICAgICAgICAoKENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayBpbnN0YW5jZW9mIFJlZ0V4cCAmJlxuICAgICAgICAgICAgcmVnRXhwVGVzdChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2ssIHZhbHVlKSkgfHxcbiAgICAgICAgICAgIChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJlxuICAgICAgICAgICAgICBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sodmFsdWUpKSkpXG4gICAgICApIHtcbiAgICAgICAgLy8gSWYgdXNlciBoYXMgc3VwcGxpZWQgYSByZWdleHAgb3IgZnVuY3Rpb24gaW4gQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrLCB3ZSBuZWVkIHRvIGFsc28gYWxsb3cgZGVyaXZlZCBjdXN0b20gZWxlbWVudHMgdXNpbmcgdGhlIHNhbWUgdGFnTmFtZSB0ZXN0LlxuICAgICAgICAvLyBBZGRpdGlvbmFsbHksIHdlIG5lZWQgdG8gYWxsb3cgYXR0cmlidXRlcyBwYXNzaW5nIHRoZSBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2sgdXNlciBoYXMgY29uZmlndXJlZCwgYXMgY3VzdG9tIGVsZW1lbnRzIGNhbiBkZWZpbmUgdGhlc2UgYXQgdGhlaXIgb3duIGRpc2NyZXRpb24uXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvKiBDaGVjayB2YWx1ZSBpcyBzYWZlLiBGaXJzdCwgaXMgYXR0ciBpbmVydD8gSWYgc28sIGlzIHNhZmUgKi9cbiAgICB9IGVsc2UgaWYgKFVSSV9TQUZFX0FUVFJJQlVURVNbbGNOYW1lXSkge1xuICAgICAgLy8gVGhpcyBhdHRyaWJ1dGUgaXMgc2FmZVxuICAgICAgLyogQ2hlY2sgbm8gc2NyaXB0LCBkYXRhIG9yIHVua25vd24gcG9zc2libHkgdW5zYWZlIFVSSVxuICAgICAgICB1bmxlc3Mgd2Uga25vdyBVUkkgdmFsdWVzIGFyZSBzYWZlIGZvciB0aGF0IGF0dHJpYnV0ZSAqL1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICByZWdFeHBUZXN0KElTX0FMTE9XRURfVVJJLCBzdHJpbmdSZXBsYWNlKHZhbHVlLCBBVFRSX1dISVRFU1BBQ0UsICcnKSlcbiAgICApIHtcbiAgICAgIC8vIFRoaXMgYXR0cmlidXRlIGlzIHNhZmVcbiAgICAgIC8qIEtlZXAgaW1hZ2UgZGF0YSBVUklzIGFsaXZlIGlmIHNyYy94bGluazpocmVmIGlzIGFsbG93ZWQgKi9cbiAgICAgIC8qIEZ1cnRoZXIgcHJldmVudCBnYWRnZXQgWFNTIGZvciBkeW5hbWljYWxseSBidWlsdCBzY3JpcHQgdGFncyAqL1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAobGNOYW1lID09PSAnc3JjJyB8fCBsY05hbWUgPT09ICd4bGluazpocmVmJyB8fCBsY05hbWUgPT09ICdocmVmJykgJiZcbiAgICAgIGxjVGFnICE9PSAnc2NyaXB0JyAmJlxuICAgICAgc3RyaW5nSW5kZXhPZih2YWx1ZSwgJ2RhdGE6JykgPT09IDAgJiZcbiAgICAgIERBVEFfVVJJX1RBR1NbbGNUYWddXG4gICAgKSB7XG4gICAgICAvLyBUaGlzIGF0dHJpYnV0ZSBpcyBzYWZlXG4gICAgICAvKiBBbGxvdyB1bmtub3duIHByb3RvY29sczogVGhpcyBwcm92aWRlcyBzdXBwb3J0IGZvciBsaW5rcyB0aGF0XG4gICAgICAgIGFyZSBoYW5kbGVkIGJ5IHByb3RvY29sIGhhbmRsZXJzIHdoaWNoIG1heSBiZSB1bmtub3duIGFoZWFkIG9mXG4gICAgICAgIHRpbWUsIGUuZy4gZmI6LCBzcG90aWZ5OiAqL1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBBTExPV19VTktOT1dOX1BST1RPQ09MUyAmJlxuICAgICAgIXJlZ0V4cFRlc3QoSVNfU0NSSVBUX09SX0RBVEEsIHN0cmluZ1JlcGxhY2UodmFsdWUsIEFUVFJfV0hJVEVTUEFDRSwgJycpKVxuICAgICkge1xuICAgICAgLy8gVGhpcyBhdHRyaWJ1dGUgaXMgc2FmZVxuICAgICAgLyogQ2hlY2sgZm9yIGJpbmFyeSBhdHRyaWJ1dGVzICovXG4gICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBCaW5hcnkgYXR0cmlidXRlcyBhcmUgc2FmZSBhdCB0aGlzIHBvaW50XG4gICAgICAvKiBBbnl0aGluZyBlbHNlLCBwcmVzdW1lIHVuc2FmZSwgZG8gbm90IGFkZCBpdCBiYWNrICovXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIF9pc0Jhc2ljQ3VzdG9tRWxlbWVudFxuICAgKiBjaGVja3MgaWYgYXQgbGVhc3Qgb25lIGRhc2ggaXMgaW5jbHVkZWQgaW4gdGFnTmFtZSwgYW5kIGl0J3Mgbm90IHRoZSBmaXJzdCBjaGFyXG4gICAqIGZvciBtb3JlIHNvcGhpc3RpY2F0ZWQgY2hlY2tpbmcgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvdmFsaWRhdGUtZWxlbWVudC1uYW1lXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lIG5hbWUgb2YgdGhlIHRhZyBvZiB0aGUgbm9kZSB0byBzYW5pdGl6ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIHRoZSB0YWcgbmFtZSBtZWV0cyB0aGUgYmFzaWMgY3JpdGVyaWEgZm9yIGEgY3VzdG9tIGVsZW1lbnQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIGNvbnN0IF9pc0Jhc2ljQ3VzdG9tRWxlbWVudCA9IGZ1bmN0aW9uICh0YWdOYW1lKSB7XG4gICAgcmV0dXJuIHRhZ05hbWUuaW5kZXhPZignLScpID4gMDtcbiAgfTtcblxuICAvKipcbiAgICogX3Nhbml0aXplQXR0cmlidXRlc1xuICAgKlxuICAgKiBAcHJvdGVjdCBhdHRyaWJ1dGVzXG4gICAqIEBwcm90ZWN0IG5vZGVOYW1lXG4gICAqIEBwcm90ZWN0IHJlbW92ZUF0dHJpYnV0ZVxuICAgKiBAcHJvdGVjdCBzZXRBdHRyaWJ1dGVcbiAgICpcbiAgICogQHBhcmFtICB7Tm9kZX0gY3VycmVudE5vZGUgdG8gc2FuaXRpemVcbiAgICovXG4gIGNvbnN0IF9zYW5pdGl6ZUF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAoY3VycmVudE5vZGUpIHtcbiAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgX2V4ZWN1dGVIb29rKCdiZWZvcmVTYW5pdGl6ZUF0dHJpYnV0ZXMnLCBjdXJyZW50Tm9kZSwgbnVsbCk7XG5cbiAgICBjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IGN1cnJlbnROb2RlO1xuXG4gICAgLyogQ2hlY2sgaWYgd2UgaGF2ZSBhdHRyaWJ1dGVzOyBpZiBub3Qgd2UgbWlnaHQgaGF2ZSBhIHRleHQgbm9kZSAqL1xuICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhvb2tFdmVudCA9IHtcbiAgICAgIGF0dHJOYW1lOiAnJyxcbiAgICAgIGF0dHJWYWx1ZTogJycsXG4gICAgICBrZWVwQXR0cjogdHJ1ZSxcbiAgICAgIGFsbG93ZWRBdHRyaWJ1dGVzOiBBTExPV0VEX0FUVFIsXG4gICAgfTtcbiAgICBsZXQgbCA9IGF0dHJpYnV0ZXMubGVuZ3RoO1xuXG4gICAgLyogR28gYmFja3dhcmRzIG92ZXIgYWxsIGF0dHJpYnV0ZXM7IHNhZmVseSByZW1vdmUgYmFkIG9uZXMgKi9cbiAgICB3aGlsZSAobC0tKSB7XG4gICAgICBjb25zdCBhdHRyID0gYXR0cmlidXRlc1tsXTtcbiAgICAgIGNvbnN0IHsgbmFtZSwgbmFtZXNwYWNlVVJJLCB2YWx1ZTogYXR0clZhbHVlIH0gPSBhdHRyO1xuICAgICAgY29uc3QgbGNOYW1lID0gdHJhbnNmb3JtQ2FzZUZ1bmMobmFtZSk7XG5cbiAgICAgIGxldCB2YWx1ZSA9IG5hbWUgPT09ICd2YWx1ZScgPyBhdHRyVmFsdWUgOiBzdHJpbmdUcmltKGF0dHJWYWx1ZSk7XG5cbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgIGhvb2tFdmVudC5hdHRyTmFtZSA9IGxjTmFtZTtcbiAgICAgIGhvb2tFdmVudC5hdHRyVmFsdWUgPSB2YWx1ZTtcbiAgICAgIGhvb2tFdmVudC5rZWVwQXR0ciA9IHRydWU7XG4gICAgICBob29rRXZlbnQuZm9yY2VLZWVwQXR0ciA9IHVuZGVmaW5lZDsgLy8gQWxsb3dzIGRldmVsb3BlcnMgdG8gc2VlIHRoaXMgaXMgYSBwcm9wZXJ0eSB0aGV5IGNhbiBzZXRcbiAgICAgIF9leGVjdXRlSG9vaygndXBvblNhbml0aXplQXR0cmlidXRlJywgY3VycmVudE5vZGUsIGhvb2tFdmVudCk7XG4gICAgICB2YWx1ZSA9IGhvb2tFdmVudC5hdHRyVmFsdWU7XG4gICAgICAvKiBEaWQgdGhlIGhvb2tzIGFwcHJvdmUgb2YgdGhlIGF0dHJpYnV0ZT8gKi9cbiAgICAgIGlmIChob29rRXZlbnQuZm9yY2VLZWVwQXR0cikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLyogUmVtb3ZlIGF0dHJpYnV0ZSAqL1xuICAgICAgX3JlbW92ZUF0dHJpYnV0ZShuYW1lLCBjdXJyZW50Tm9kZSk7XG5cbiAgICAgIC8qIERpZCB0aGUgaG9va3MgYXBwcm92ZSBvZiB0aGUgYXR0cmlidXRlPyAqL1xuICAgICAgaWYgKCFob29rRXZlbnQua2VlcEF0dHIpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8qIFdvcmsgYXJvdW5kIGEgc2VjdXJpdHkgaXNzdWUgaW4galF1ZXJ5IDMuMCAqL1xuICAgICAgaWYgKCFBTExPV19TRUxGX0NMT1NFX0lOX0FUVFIgJiYgcmVnRXhwVGVzdCgvXFwvPi9pLCB2YWx1ZSkpIHtcbiAgICAgICAgX3JlbW92ZUF0dHJpYnV0ZShuYW1lLCBjdXJyZW50Tm9kZSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBTYW5pdGl6ZSBhdHRyaWJ1dGUgY29udGVudCB0byBiZSB0ZW1wbGF0ZS1zYWZlICovXG4gICAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTKSB7XG4gICAgICAgIGFycmF5Rm9yRWFjaChbTVVTVEFDSEVfRVhQUiwgRVJCX0VYUFIsIFRNUExJVF9FWFBSXSwgKGV4cHIpID0+IHtcbiAgICAgICAgICB2YWx1ZSA9IHN0cmluZ1JlcGxhY2UodmFsdWUsIGV4cHIsICcgJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvKiBJcyBgdmFsdWVgIHZhbGlkIGZvciB0aGlzIGF0dHJpYnV0ZT8gKi9cbiAgICAgIGNvbnN0IGxjVGFnID0gdHJhbnNmb3JtQ2FzZUZ1bmMoY3VycmVudE5vZGUubm9kZU5hbWUpO1xuICAgICAgaWYgKCFfaXNWYWxpZEF0dHJpYnV0ZShsY1RhZywgbGNOYW1lLCB2YWx1ZSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8qIEZ1bGwgRE9NIENsb2JiZXJpbmcgcHJvdGVjdGlvbiB2aWEgbmFtZXNwYWNlIGlzb2xhdGlvbixcbiAgICAgICAqIFByZWZpeCBpZCBhbmQgbmFtZSBhdHRyaWJ1dGVzIHdpdGggYHVzZXItY29udGVudC1gXG4gICAgICAgKi9cbiAgICAgIGlmIChTQU5JVElaRV9OQU1FRF9QUk9QUyAmJiAobGNOYW1lID09PSAnaWQnIHx8IGxjTmFtZSA9PT0gJ25hbWUnKSkge1xuICAgICAgICAvLyBSZW1vdmUgdGhlIGF0dHJpYnV0ZSB3aXRoIHRoaXMgdmFsdWVcbiAgICAgICAgX3JlbW92ZUF0dHJpYnV0ZShuYW1lLCBjdXJyZW50Tm9kZSk7XG5cbiAgICAgICAgLy8gUHJlZml4IHRoZSB2YWx1ZSBhbmQgbGF0ZXIgcmUtY3JlYXRlIHRoZSBhdHRyaWJ1dGUgd2l0aCB0aGUgc2FuaXRpemVkIHZhbHVlXG4gICAgICAgIHZhbHVlID0gU0FOSVRJWkVfTkFNRURfUFJPUFNfUFJFRklYICsgdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIC8qIEhhbmRsZSBhdHRyaWJ1dGVzIHRoYXQgcmVxdWlyZSBUcnVzdGVkIFR5cGVzICovXG4gICAgICBpZiAoXG4gICAgICAgIHRydXN0ZWRUeXBlc1BvbGljeSAmJlxuICAgICAgICB0eXBlb2YgdHJ1c3RlZFR5cGVzID09PSAnb2JqZWN0JyAmJlxuICAgICAgICB0eXBlb2YgdHJ1c3RlZFR5cGVzLmdldEF0dHJpYnV0ZVR5cGUgPT09ICdmdW5jdGlvbidcbiAgICAgICkge1xuICAgICAgICBpZiAobmFtZXNwYWNlVVJJKSB7XG4gICAgICAgICAgLyogTmFtZXNwYWNlcyBhcmUgbm90IHlldCBzdXBwb3J0ZWQsIHNlZSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xMzA1MjkzICovXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3dpdGNoICh0cnVzdGVkVHlwZXMuZ2V0QXR0cmlidXRlVHlwZShsY1RhZywgbGNOYW1lKSkge1xuICAgICAgICAgICAgY2FzZSAnVHJ1c3RlZEhUTUwnOiB7XG4gICAgICAgICAgICAgIHZhbHVlID0gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwodmFsdWUpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSAnVHJ1c3RlZFNjcmlwdFVSTCc6IHtcbiAgICAgICAgICAgICAgdmFsdWUgPSB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlU2NyaXB0VVJMKHZhbHVlKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qIEhhbmRsZSBpbnZhbGlkIGRhdGEtKiBhdHRyaWJ1dGUgc2V0IGJ5IHRyeS1jYXRjaGluZyBpdCAqL1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKG5hbWVzcGFjZVVSSSkge1xuICAgICAgICAgIGN1cnJlbnROb2RlLnNldEF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgbmFtZSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qIEZhbGxiYWNrIHRvIHNldEF0dHJpYnV0ZSgpIGZvciBicm93c2VyLXVucmVjb2duaXplZCBuYW1lc3BhY2VzIGUuZy4gXCJ4LXNjaGVtYVwiLiAqL1xuICAgICAgICAgIGN1cnJlbnROb2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBhcnJheVBvcChET01QdXJpZnkucmVtb3ZlZCk7XG4gICAgICB9IGNhdGNoIChfKSB7fVxuICAgIH1cblxuICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICBfZXhlY3V0ZUhvb2soJ2FmdGVyU2FuaXRpemVBdHRyaWJ1dGVzJywgY3VycmVudE5vZGUsIG51bGwpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBfc2FuaXRpemVTaGFkb3dET01cbiAgICpcbiAgICogQHBhcmFtICB7RG9jdW1lbnRGcmFnbWVudH0gZnJhZ21lbnQgdG8gaXRlcmF0ZSBvdmVyIHJlY3Vyc2l2ZWx5XG4gICAqL1xuICBjb25zdCBfc2FuaXRpemVTaGFkb3dET00gPSBmdW5jdGlvbiAoZnJhZ21lbnQpIHtcbiAgICBsZXQgc2hhZG93Tm9kZSA9IG51bGw7XG4gICAgY29uc3Qgc2hhZG93SXRlcmF0b3IgPSBfY3JlYXRlTm9kZUl0ZXJhdG9yKGZyYWdtZW50KTtcblxuICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICBfZXhlY3V0ZUhvb2soJ2JlZm9yZVNhbml0aXplU2hhZG93RE9NJywgZnJhZ21lbnQsIG51bGwpO1xuXG4gICAgd2hpbGUgKChzaGFkb3dOb2RlID0gc2hhZG93SXRlcmF0b3IubmV4dE5vZGUoKSkpIHtcbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgIF9leGVjdXRlSG9vaygndXBvblNhbml0aXplU2hhZG93Tm9kZScsIHNoYWRvd05vZGUsIG51bGwpO1xuXG4gICAgICAvKiBTYW5pdGl6ZSB0YWdzIGFuZCBlbGVtZW50cyAqL1xuICAgICAgaWYgKF9zYW5pdGl6ZUVsZW1lbnRzKHNoYWRvd05vZGUpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBEZWVwIHNoYWRvdyBET00gZGV0ZWN0ZWQgKi9cbiAgICAgIGlmIChzaGFkb3dOb2RlLmNvbnRlbnQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgIF9zYW5pdGl6ZVNoYWRvd0RPTShzaGFkb3dOb2RlLmNvbnRlbnQpO1xuICAgICAgfVxuXG4gICAgICAvKiBDaGVjayBhdHRyaWJ1dGVzLCBzYW5pdGl6ZSBpZiBuZWNlc3NhcnkgKi9cbiAgICAgIF9zYW5pdGl6ZUF0dHJpYnV0ZXMoc2hhZG93Tm9kZSk7XG4gICAgfVxuXG4gICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgIF9leGVjdXRlSG9vaygnYWZ0ZXJTYW5pdGl6ZVNoYWRvd0RPTScsIGZyYWdtZW50LCBudWxsKTtcbiAgfTtcblxuICAvKipcbiAgICogU2FuaXRpemVcbiAgICogUHVibGljIG1ldGhvZCBwcm92aWRpbmcgY29yZSBzYW5pdGF0aW9uIGZ1bmN0aW9uYWxpdHlcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd8Tm9kZX0gZGlydHkgc3RyaW5nIG9yIERPTSBub2RlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgb2JqZWN0XG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuICBET01QdXJpZnkuc2FuaXRpemUgPSBmdW5jdGlvbiAoZGlydHksIGNmZyA9IHt9KSB7XG4gICAgbGV0IGJvZHkgPSBudWxsO1xuICAgIGxldCBpbXBvcnRlZE5vZGUgPSBudWxsO1xuICAgIGxldCBjdXJyZW50Tm9kZSA9IG51bGw7XG4gICAgbGV0IHJldHVybk5vZGUgPSBudWxsO1xuICAgIC8qIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgc3RyaW5nIHRvIHNhbml0aXplLlxuICAgICAgRE8gTk9UIHJldHVybiBlYXJseSwgYXMgdGhpcyB3aWxsIHJldHVybiB0aGUgd3JvbmcgdHlwZSBpZlxuICAgICAgdGhlIHVzZXIgaGFzIHJlcXVlc3RlZCBhIERPTSBvYmplY3QgcmF0aGVyIHRoYW4gYSBzdHJpbmcgKi9cbiAgICBJU19FTVBUWV9JTlBVVCA9ICFkaXJ0eTtcbiAgICBpZiAoSVNfRU1QVFlfSU5QVVQpIHtcbiAgICAgIGRpcnR5ID0gJzwhLS0+JztcbiAgICB9XG5cbiAgICAvKiBTdHJpbmdpZnksIGluIGNhc2UgZGlydHkgaXMgYW4gb2JqZWN0ICovXG4gICAgaWYgKHR5cGVvZiBkaXJ0eSAhPT0gJ3N0cmluZycgJiYgIV9pc05vZGUoZGlydHkpKSB7XG4gICAgICBpZiAodHlwZW9mIGRpcnR5LnRvU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRpcnR5ID0gZGlydHkudG9TdHJpbmcoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBkaXJ0eSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyB0eXBlRXJyb3JDcmVhdGUoJ2RpcnR5IGlzIG5vdCBhIHN0cmluZywgYWJvcnRpbmcnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgdHlwZUVycm9yQ3JlYXRlKCd0b1N0cmluZyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIFJldHVybiBkaXJ0eSBIVE1MIGlmIERPTVB1cmlmeSBjYW5ub3QgcnVuICovXG4gICAgaWYgKCFET01QdXJpZnkuaXNTdXBwb3J0ZWQpIHtcbiAgICAgIHJldHVybiBkaXJ0eTtcbiAgICB9XG5cbiAgICAvKiBBc3NpZ24gY29uZmlnIHZhcnMgKi9cbiAgICBpZiAoIVNFVF9DT05GSUcpIHtcbiAgICAgIF9wYXJzZUNvbmZpZyhjZmcpO1xuICAgIH1cblxuICAgIC8qIENsZWFuIHVwIHJlbW92ZWQgZWxlbWVudHMgKi9cbiAgICBET01QdXJpZnkucmVtb3ZlZCA9IFtdO1xuXG4gICAgLyogQ2hlY2sgaWYgZGlydHkgaXMgY29ycmVjdGx5IHR5cGVkIGZvciBJTl9QTEFDRSAqL1xuICAgIGlmICh0eXBlb2YgZGlydHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICBJTl9QTEFDRSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChJTl9QTEFDRSkge1xuICAgICAgLyogRG8gc29tZSBlYXJseSBwcmUtc2FuaXRpemF0aW9uIHRvIGF2b2lkIHVuc2FmZSByb290IG5vZGVzICovXG4gICAgICBpZiAoZGlydHkubm9kZU5hbWUpIHtcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IHRyYW5zZm9ybUNhc2VGdW5jKGRpcnR5Lm5vZGVOYW1lKTtcbiAgICAgICAgaWYgKCFBTExPV0VEX1RBR1NbdGFnTmFtZV0gfHwgRk9SQklEX1RBR1NbdGFnTmFtZV0pIHtcbiAgICAgICAgICB0aHJvdyB0eXBlRXJyb3JDcmVhdGUoXG4gICAgICAgICAgICAncm9vdCBub2RlIGlzIGZvcmJpZGRlbiBhbmQgY2Fubm90IGJlIHNhbml0aXplZCBpbi1wbGFjZSdcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkaXJ0eSBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgIC8qIElmIGRpcnR5IGlzIGEgRE9NIGVsZW1lbnQsIGFwcGVuZCB0byBhbiBlbXB0eSBkb2N1bWVudCB0byBhdm9pZFxuICAgICAgICAgZWxlbWVudHMgYmVpbmcgc3RyaXBwZWQgYnkgdGhlIHBhcnNlciAqL1xuICAgICAgYm9keSA9IF9pbml0RG9jdW1lbnQoJzwhLS0tLT4nKTtcbiAgICAgIGltcG9ydGVkTm9kZSA9IGJvZHkub3duZXJEb2N1bWVudC5pbXBvcnROb2RlKGRpcnR5LCB0cnVlKTtcbiAgICAgIGlmIChpbXBvcnRlZE5vZGUubm9kZVR5cGUgPT09IDEgJiYgaW1wb3J0ZWROb2RlLm5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICAgICAgLyogTm9kZSBpcyBhbHJlYWR5IGEgYm9keSwgdXNlIGFzIGlzICovXG4gICAgICAgIGJvZHkgPSBpbXBvcnRlZE5vZGU7XG4gICAgICB9IGVsc2UgaWYgKGltcG9ydGVkTm9kZS5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgICAgIGJvZHkgPSBpbXBvcnRlZE5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItZG9tLW5vZGUtYXBwZW5kXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoaW1wb3J0ZWROb2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLyogRXhpdCBkaXJlY3RseSBpZiB3ZSBoYXZlIG5vdGhpbmcgdG8gZG8gKi9cbiAgICAgIGlmIChcbiAgICAgICAgIVJFVFVSTl9ET00gJiZcbiAgICAgICAgIVNBRkVfRk9SX1RFTVBMQVRFUyAmJlxuICAgICAgICAhV0hPTEVfRE9DVU1FTlQgJiZcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWluY2x1ZGVzXG4gICAgICAgIGRpcnR5LmluZGV4T2YoJzwnKSA9PT0gLTFcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1c3RlZFR5cGVzUG9saWN5ICYmIFJFVFVSTl9UUlVTVEVEX1RZUEVcbiAgICAgICAgICA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKGRpcnR5KVxuICAgICAgICAgIDogZGlydHk7XG4gICAgICB9XG5cbiAgICAgIC8qIEluaXRpYWxpemUgdGhlIGRvY3VtZW50IHRvIHdvcmsgb24gKi9cbiAgICAgIGJvZHkgPSBfaW5pdERvY3VtZW50KGRpcnR5KTtcblxuICAgICAgLyogQ2hlY2sgd2UgaGF2ZSBhIERPTSBub2RlIGZyb20gdGhlIGRhdGEgKi9cbiAgICAgIGlmICghYm9keSkge1xuICAgICAgICByZXR1cm4gUkVUVVJOX0RPTSA/IG51bGwgOiBSRVRVUk5fVFJVU1RFRF9UWVBFID8gZW1wdHlIVE1MIDogJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogUmVtb3ZlIGZpcnN0IGVsZW1lbnQgbm9kZSAob3VycykgaWYgRk9SQ0VfQk9EWSBpcyBzZXQgKi9cbiAgICBpZiAoYm9keSAmJiBGT1JDRV9CT0RZKSB7XG4gICAgICBfZm9yY2VSZW1vdmUoYm9keS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICAvKiBHZXQgbm9kZSBpdGVyYXRvciAqL1xuICAgIGNvbnN0IG5vZGVJdGVyYXRvciA9IF9jcmVhdGVOb2RlSXRlcmF0b3IoSU5fUExBQ0UgPyBkaXJ0eSA6IGJvZHkpO1xuXG4gICAgLyogTm93IHN0YXJ0IGl0ZXJhdGluZyBvdmVyIHRoZSBjcmVhdGVkIGRvY3VtZW50ICovXG4gICAgd2hpbGUgKChjdXJyZW50Tm9kZSA9IG5vZGVJdGVyYXRvci5uZXh0Tm9kZSgpKSkge1xuICAgICAgLyogU2FuaXRpemUgdGFncyBhbmQgZWxlbWVudHMgKi9cbiAgICAgIGlmIChfc2FuaXRpemVFbGVtZW50cyhjdXJyZW50Tm9kZSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8qIFNoYWRvdyBET00gZGV0ZWN0ZWQsIHNhbml0aXplIGl0ICovXG4gICAgICBpZiAoY3VycmVudE5vZGUuY29udGVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgX3Nhbml0aXplU2hhZG93RE9NKGN1cnJlbnROb2RlLmNvbnRlbnQpO1xuICAgICAgfVxuXG4gICAgICAvKiBDaGVjayBhdHRyaWJ1dGVzLCBzYW5pdGl6ZSBpZiBuZWNlc3NhcnkgKi9cbiAgICAgIF9zYW5pdGl6ZUF0dHJpYnV0ZXMoY3VycmVudE5vZGUpO1xuICAgIH1cblxuICAgIC8qIElmIHdlIHNhbml0aXplZCBgZGlydHlgIGluLXBsYWNlLCByZXR1cm4gaXQuICovXG4gICAgaWYgKElOX1BMQUNFKSB7XG4gICAgICByZXR1cm4gZGlydHk7XG4gICAgfVxuXG4gICAgLyogUmV0dXJuIHNhbml0aXplZCBzdHJpbmcgb3IgRE9NICovXG4gICAgaWYgKFJFVFVSTl9ET00pIHtcbiAgICAgIGlmIChSRVRVUk5fRE9NX0ZSQUdNRU5UKSB7XG4gICAgICAgIHJldHVybk5vZGUgPSBjcmVhdGVEb2N1bWVudEZyYWdtZW50LmNhbGwoYm9keS5vd25lckRvY3VtZW50KTtcblxuICAgICAgICB3aGlsZSAoYm9keS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWRvbS1ub2RlLWFwcGVuZFxuICAgICAgICAgIHJldHVybk5vZGUuYXBwZW5kQ2hpbGQoYm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuTm9kZSA9IGJvZHk7XG4gICAgICB9XG5cbiAgICAgIGlmIChBTExPV0VEX0FUVFIuc2hhZG93cm9vdCB8fCBBTExPV0VEX0FUVFIuc2hhZG93cm9vdG1vZGUpIHtcbiAgICAgICAgLypcbiAgICAgICAgICBBZG9wdE5vZGUoKSBpcyBub3QgdXNlZCBiZWNhdXNlIGludGVybmFsIHN0YXRlIGlzIG5vdCByZXNldFxuICAgICAgICAgIChlLmcuIHRoZSBwYXN0IG5hbWVzIG1hcCBvZiBhIEhUTUxGb3JtRWxlbWVudCksIHRoaXMgaXMgc2FmZVxuICAgICAgICAgIGluIHRoZW9yeSBidXQgd2Ugd291bGQgcmF0aGVyIG5vdCByaXNrIGFub3RoZXIgYXR0YWNrIHZlY3Rvci5cbiAgICAgICAgICBUaGUgc3RhdGUgdGhhdCBpcyBjbG9uZWQgYnkgaW1wb3J0Tm9kZSgpIGlzIGV4cGxpY2l0bHkgZGVmaW5lZFxuICAgICAgICAgIGJ5IHRoZSBzcGVjcy5cbiAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuTm9kZSA9IGltcG9ydE5vZGUuY2FsbChvcmlnaW5hbERvY3VtZW50LCByZXR1cm5Ob2RlLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJldHVybk5vZGU7XG4gICAgfVxuXG4gICAgbGV0IHNlcmlhbGl6ZWRIVE1MID0gV0hPTEVfRE9DVU1FTlQgPyBib2R5Lm91dGVySFRNTCA6IGJvZHkuaW5uZXJIVE1MO1xuXG4gICAgLyogU2VyaWFsaXplIGRvY3R5cGUgaWYgYWxsb3dlZCAqL1xuICAgIGlmIChcbiAgICAgIFdIT0xFX0RPQ1VNRU5UICYmXG4gICAgICBBTExPV0VEX1RBR1NbJyFkb2N0eXBlJ10gJiZcbiAgICAgIGJvZHkub3duZXJEb2N1bWVudCAmJlxuICAgICAgYm9keS5vd25lckRvY3VtZW50LmRvY3R5cGUgJiZcbiAgICAgIGJvZHkub3duZXJEb2N1bWVudC5kb2N0eXBlLm5hbWUgJiZcbiAgICAgIHJlZ0V4cFRlc3QoRVhQUkVTU0lPTlMuRE9DVFlQRV9OQU1FLCBib2R5Lm93bmVyRG9jdW1lbnQuZG9jdHlwZS5uYW1lKVxuICAgICkge1xuICAgICAgc2VyaWFsaXplZEhUTUwgPVxuICAgICAgICAnPCFET0NUWVBFICcgKyBib2R5Lm93bmVyRG9jdW1lbnQuZG9jdHlwZS5uYW1lICsgJz5cXG4nICsgc2VyaWFsaXplZEhUTUw7XG4gICAgfVxuXG4gICAgLyogU2FuaXRpemUgZmluYWwgc3RyaW5nIHRlbXBsYXRlLXNhZmUgKi9cbiAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTKSB7XG4gICAgICBhcnJheUZvckVhY2goW01VU1RBQ0hFX0VYUFIsIEVSQl9FWFBSLCBUTVBMSVRfRVhQUl0sIChleHByKSA9PiB7XG4gICAgICAgIHNlcmlhbGl6ZWRIVE1MID0gc3RyaW5nUmVwbGFjZShzZXJpYWxpemVkSFRNTCwgZXhwciwgJyAnKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVzdGVkVHlwZXNQb2xpY3kgJiYgUkVUVVJOX1RSVVNURURfVFlQRVxuICAgICAgPyB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTChzZXJpYWxpemVkSFRNTClcbiAgICAgIDogc2VyaWFsaXplZEhUTUw7XG4gIH07XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBtZXRob2QgdG8gc2V0IHRoZSBjb25maWd1cmF0aW9uIG9uY2VcbiAgICogc2V0Q29uZmlnXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICovXG4gIERPTVB1cmlmeS5zZXRDb25maWcgPSBmdW5jdGlvbiAoY2ZnID0ge30pIHtcbiAgICBfcGFyc2VDb25maWcoY2ZnKTtcbiAgICBTRVRfQ09ORklHID0gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgdGhlIGNvbmZpZ3VyYXRpb25cbiAgICogY2xlYXJDb25maWdcbiAgICpcbiAgICovXG4gIERPTVB1cmlmeS5jbGVhckNvbmZpZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBDT05GSUcgPSBudWxsO1xuICAgIFNFVF9DT05GSUcgPSBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogUHVibGljIG1ldGhvZCB0byBjaGVjayBpZiBhbiBhdHRyaWJ1dGUgdmFsdWUgaXMgdmFsaWQuXG4gICAqIFVzZXMgbGFzdCBzZXQgY29uZmlnLCBpZiBhbnkuIE90aGVyd2lzZSwgdXNlcyBjb25maWcgZGVmYXVsdHMuXG4gICAqIGlzVmFsaWRBdHRyaWJ1dGVcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSB0YWcgVGFnIG5hbWUgb2YgY29udGFpbmluZyBlbGVtZW50LlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGF0dHIgQXR0cmlidXRlIG5hbWUuXG4gICAqIEBwYXJhbSAge1N0cmluZ30gdmFsdWUgQXR0cmlidXRlIHZhbHVlLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZC4gT3RoZXJ3aXNlLCByZXR1cm5zIGZhbHNlLlxuICAgKi9cbiAgRE9NUHVyaWZ5LmlzVmFsaWRBdHRyaWJ1dGUgPSBmdW5jdGlvbiAodGFnLCBhdHRyLCB2YWx1ZSkge1xuICAgIC8qIEluaXRpYWxpemUgc2hhcmVkIGNvbmZpZyB2YXJzIGlmIG5lY2Vzc2FyeS4gKi9cbiAgICBpZiAoIUNPTkZJRykge1xuICAgICAgX3BhcnNlQ29uZmlnKHt9KTtcbiAgICB9XG5cbiAgICBjb25zdCBsY1RhZyA9IHRyYW5zZm9ybUNhc2VGdW5jKHRhZyk7XG4gICAgY29uc3QgbGNOYW1lID0gdHJhbnNmb3JtQ2FzZUZ1bmMoYXR0cik7XG4gICAgcmV0dXJuIF9pc1ZhbGlkQXR0cmlidXRlKGxjVGFnLCBsY05hbWUsIHZhbHVlKTtcbiAgfTtcblxuICAvKipcbiAgICogQWRkSG9va1xuICAgKiBQdWJsaWMgbWV0aG9kIHRvIGFkZCBET01QdXJpZnkgaG9va3NcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVudHJ5UG9pbnQgZW50cnkgcG9pbnQgZm9yIHRoZSBob29rIHRvIGFkZFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBob29rRnVuY3Rpb24gZnVuY3Rpb24gdG8gZXhlY3V0ZVxuICAgKi9cbiAgRE9NUHVyaWZ5LmFkZEhvb2sgPSBmdW5jdGlvbiAoZW50cnlQb2ludCwgaG9va0Z1bmN0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiBob29rRnVuY3Rpb24gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBob29rc1tlbnRyeVBvaW50XSA9IGhvb2tzW2VudHJ5UG9pbnRdIHx8IFtdO1xuICAgIGFycmF5UHVzaChob29rc1tlbnRyeVBvaW50XSwgaG9va0Z1bmN0aW9uKTtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlSG9va1xuICAgKiBQdWJsaWMgbWV0aG9kIHRvIHJlbW92ZSBhIERPTVB1cmlmeSBob29rIGF0IGEgZ2l2ZW4gZW50cnlQb2ludFxuICAgKiAocG9wcyBpdCBmcm9tIHRoZSBzdGFjayBvZiBob29rcyBpZiBtb3JlIGFyZSBwcmVzZW50KVxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZW50cnlQb2ludCBlbnRyeSBwb2ludCBmb3IgdGhlIGhvb2sgdG8gcmVtb3ZlXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufSByZW1vdmVkKHBvcHBlZCkgaG9va1xuICAgKi9cbiAgRE9NUHVyaWZ5LnJlbW92ZUhvb2sgPSBmdW5jdGlvbiAoZW50cnlQb2ludCkge1xuICAgIGlmIChob29rc1tlbnRyeVBvaW50XSkge1xuICAgICAgcmV0dXJuIGFycmF5UG9wKGhvb2tzW2VudHJ5UG9pbnRdKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZUhvb2tzXG4gICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIGFsbCBET01QdXJpZnkgaG9va3MgYXQgYSBnaXZlbiBlbnRyeVBvaW50XG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gZW50cnlQb2ludCBlbnRyeSBwb2ludCBmb3IgdGhlIGhvb2tzIHRvIHJlbW92ZVxuICAgKi9cbiAgRE9NUHVyaWZ5LnJlbW92ZUhvb2tzID0gZnVuY3Rpb24gKGVudHJ5UG9pbnQpIHtcbiAgICBpZiAoaG9va3NbZW50cnlQb2ludF0pIHtcbiAgICAgIGhvb2tzW2VudHJ5UG9pbnRdID0gW107XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVBbGxIb29rc1xuICAgKiBQdWJsaWMgbWV0aG9kIHRvIHJlbW92ZSBhbGwgRE9NUHVyaWZ5IGhvb2tzXG4gICAqL1xuICBET01QdXJpZnkucmVtb3ZlQWxsSG9va3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgaG9va3MgPSB7fTtcbiAgfTtcblxuICByZXR1cm4gRE9NUHVyaWZ5O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVET01QdXJpZnkoKTtcbiIsICIvKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbnZhciBieXRlVG9IZXggPSBbXTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4W2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbn1cblxuZnVuY3Rpb24gYnl0ZXNUb1V1aWQoYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBvZmZzZXQgfHwgMDtcbiAgdmFyIGJ0aCA9IGJ5dGVUb0hleDtcbiAgLy8gam9pbiB1c2VkIHRvIGZpeCBtZW1vcnkgaXNzdWUgY2F1c2VkIGJ5IGNvbmNhdGVuYXRpb246IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMxNzUjYzRcbiAgcmV0dXJuIChbXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV1cbiAgXSkuam9pbignJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnl0ZXNUb1V1aWQ7XG4iLCAidmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9ieXRlc1RvVXVpZCcpO1xuXG5mdW5jdGlvbiB1dWlkVG9CeXRlcyh1dWlkKSB7XG4gIC8vIE5vdGU6IFdlIGFzc3VtZSB3ZSdyZSBiZWluZyBwYXNzZWQgYSB2YWxpZCB1dWlkIHN0cmluZ1xuICB2YXIgYnl0ZXMgPSBbXTtcbiAgdXVpZC5yZXBsYWNlKC9bYS1mQS1GMC05XXsyfS9nLCBmdW5jdGlvbihoZXgpIHtcbiAgICBieXRlcy5wdXNoKHBhcnNlSW50KGhleCwgMTYpKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGJ5dGVzO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdUb0J5dGVzKHN0cikge1xuICBzdHIgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSk7IC8vIFVURjggZXNjYXBlXG4gIHZhciBieXRlcyA9IG5ldyBBcnJheShzdHIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBieXRlc1tpXSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICB9XG4gIHJldHVybiBieXRlcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lLCB2ZXJzaW9uLCBoYXNoZnVuYykge1xuICB2YXIgZ2VuZXJhdGVVVUlEID0gZnVuY3Rpb24odmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpIHtcbiAgICB2YXIgb2ZmID0gYnVmICYmIG9mZnNldCB8fCAwO1xuXG4gICAgaWYgKHR5cGVvZih2YWx1ZSkgPT0gJ3N0cmluZycpIHZhbHVlID0gc3RyaW5nVG9CeXRlcyh2YWx1ZSk7XG4gICAgaWYgKHR5cGVvZihuYW1lc3BhY2UpID09ICdzdHJpbmcnKSBuYW1lc3BhY2UgPSB1dWlkVG9CeXRlcyhuYW1lc3BhY2UpO1xuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkgdGhyb3cgVHlwZUVycm9yKCd2YWx1ZSBtdXN0IGJlIGFuIGFycmF5IG9mIGJ5dGVzJyk7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG5hbWVzcGFjZSkgfHwgbmFtZXNwYWNlLmxlbmd0aCAhPT0gMTYpIHRocm93IFR5cGVFcnJvcignbmFtZXNwYWNlIG11c3QgYmUgdXVpZCBzdHJpbmcgb3IgYW4gQXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMnKTtcblxuICAgIC8vIFBlciA0LjNcbiAgICB2YXIgYnl0ZXMgPSBoYXNoZnVuYyhuYW1lc3BhY2UuY29uY2F0KHZhbHVlKSk7XG4gICAgYnl0ZXNbNl0gPSAoYnl0ZXNbNl0gJiAweDBmKSB8IHZlcnNpb247XG4gICAgYnl0ZXNbOF0gPSAoYnl0ZXNbOF0gJiAweDNmKSB8IDB4ODA7XG5cbiAgICBpZiAoYnVmKSB7XG4gICAgICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCAxNjsgKytpZHgpIHtcbiAgICAgICAgYnVmW29mZitpZHhdID0gYnl0ZXNbaWR4XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYnVmIHx8IGJ5dGVzVG9VdWlkKGJ5dGVzKTtcbiAgfTtcblxuICAvLyBGdW5jdGlvbiNuYW1lIGlzIG5vdCBzZXR0YWJsZSBvbiBzb21lIHBsYXRmb3JtcyAoIzI3MClcbiAgdHJ5IHtcbiAgICBnZW5lcmF0ZVVVSUQubmFtZSA9IG5hbWU7XG4gIH0gY2F0Y2ggKGVycikge1xuICB9XG5cbiAgLy8gUHJlLWRlZmluZWQgbmFtZXNwYWNlcywgcGVyIEFwcGVuZGl4IENcbiAgZ2VuZXJhdGVVVUlELkROUyA9ICc2YmE3YjgxMC05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuICBnZW5lcmF0ZVVVSUQuVVJMID0gJzZiYTdiODExLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5cbiAgcmV0dXJuIGdlbmVyYXRlVVVJRDtcbn07XG4iLCAiLy8gQWRhcHRlZCBmcm9tIENocmlzIFZlbmVzcycgU0hBMSBjb2RlIGF0XG4vLyBodHRwOi8vd3d3Lm1vdmFibGUtdHlwZS5jby51ay9zY3JpcHRzL3NoYTEuaHRtbFxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBmKHMsIHgsIHksIHopIHtcbiAgc3dpdGNoIChzKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gKHggJiB5KSBeICh+eCAmIHopO1xuICAgIGNhc2UgMTogcmV0dXJuIHggXiB5IF4gejtcbiAgICBjYXNlIDI6IHJldHVybiAoeCAmIHkpIF4gKHggJiB6KSBeICh5ICYgeik7XG4gICAgY2FzZSAzOiByZXR1cm4geCBeIHkgXiB6O1xuICB9XG59XG5cbmZ1bmN0aW9uIFJPVEwoeCwgbikge1xuICByZXR1cm4gKHggPDwgbikgfCAoeD4+PiAoMzIgLSBuKSk7XG59XG5cbmZ1bmN0aW9uIHNoYTEoYnl0ZXMpIHtcbiAgdmFyIEsgPSBbMHg1YTgyNzk5OSwgMHg2ZWQ5ZWJhMSwgMHg4ZjFiYmNkYywgMHhjYTYyYzFkNl07XG4gIHZhciBIID0gWzB4Njc0NTIzMDEsIDB4ZWZjZGFiODksIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsIDB4YzNkMmUxZjBdO1xuXG4gIGlmICh0eXBlb2YoYnl0ZXMpID09ICdzdHJpbmcnKSB7XG4gICAgdmFyIG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuICAgIGJ5dGVzID0gbmV3IEFycmF5KG1zZy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgaSsrKSBieXRlc1tpXSA9IG1zZy5jaGFyQ29kZUF0KGkpO1xuICB9XG5cbiAgYnl0ZXMucHVzaCgweDgwKTtcblxuICB2YXIgbCA9IGJ5dGVzLmxlbmd0aC80ICsgMjtcbiAgdmFyIE4gPSBNYXRoLmNlaWwobC8xNik7XG4gIHZhciBNID0gbmV3IEFycmF5KE4pO1xuXG4gIGZvciAodmFyIGk9MDsgaTxOOyBpKyspIHtcbiAgICBNW2ldID0gbmV3IEFycmF5KDE2KTtcbiAgICBmb3IgKHZhciBqPTA7IGo8MTY7IGorKykge1xuICAgICAgTVtpXVtqXSA9XG4gICAgICAgIGJ5dGVzW2kgKiA2NCArIGogKiA0XSA8PCAyNCB8XG4gICAgICAgIGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgMV0gPDwgMTYgfFxuICAgICAgICBieXRlc1tpICogNjQgKyBqICogNCArIDJdIDw8IDggfFxuICAgICAgICBieXRlc1tpICogNjQgKyBqICogNCArIDNdO1xuICAgIH1cbiAgfVxuXG4gIE1bTiAtIDFdWzE0XSA9ICgoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4KSAvXG4gICAgTWF0aC5wb3coMiwgMzIpOyBNW04gLSAxXVsxNF0gPSBNYXRoLmZsb29yKE1bTiAtIDFdWzE0XSk7XG4gIE1bTiAtIDFdWzE1XSA9ICgoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4KSAmIDB4ZmZmZmZmZmY7XG5cbiAgZm9yICh2YXIgaT0wOyBpPE47IGkrKykge1xuICAgIHZhciBXID0gbmV3IEFycmF5KDgwKTtcblxuICAgIGZvciAodmFyIHQ9MDsgdDwxNjsgdCsrKSBXW3RdID0gTVtpXVt0XTtcbiAgICBmb3IgKHZhciB0PTE2OyB0PDgwOyB0KyspIHtcbiAgICAgIFdbdF0gPSBST1RMKFdbdCAtIDNdIF4gV1t0IC0gOF0gXiBXW3QgLSAxNF0gXiBXW3QgLSAxNl0sIDEpO1xuICAgIH1cblxuICAgIHZhciBhID0gSFswXTtcbiAgICB2YXIgYiA9IEhbMV07XG4gICAgdmFyIGMgPSBIWzJdO1xuICAgIHZhciBkID0gSFszXTtcbiAgICB2YXIgZSA9IEhbNF07XG5cbiAgICBmb3IgKHZhciB0PTA7IHQ8ODA7IHQrKykge1xuICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKHQvMjApO1xuICAgICAgdmFyIFQgPSBST1RMKGEsIDUpICsgZihzLCBiLCBjLCBkKSArIGUgKyBLW3NdICsgV1t0XSA+Pj4gMDtcbiAgICAgIGUgPSBkO1xuICAgICAgZCA9IGM7XG4gICAgICBjID0gUk9UTChiLCAzMCkgPj4+IDA7XG4gICAgICBiID0gYTtcbiAgICAgIGEgPSBUO1xuICAgIH1cblxuICAgIEhbMF0gPSAoSFswXSArIGEpID4+PiAwO1xuICAgIEhbMV0gPSAoSFsxXSArIGIpID4+PiAwO1xuICAgIEhbMl0gPSAoSFsyXSArIGMpID4+PiAwO1xuICAgIEhbM10gPSAoSFszXSArIGQpID4+PiAwO1xuICAgIEhbNF0gPSAoSFs0XSArIGUpID4+PiAwO1xuICB9XG5cbiAgcmV0dXJuIFtcbiAgICBIWzBdID4+IDI0ICYgMHhmZiwgSFswXSA+PiAxNiAmIDB4ZmYsIEhbMF0gPj4gOCAmIDB4ZmYsIEhbMF0gJiAweGZmLFxuICAgIEhbMV0gPj4gMjQgJiAweGZmLCBIWzFdID4+IDE2ICYgMHhmZiwgSFsxXSA+PiA4ICYgMHhmZiwgSFsxXSAmIDB4ZmYsXG4gICAgSFsyXSA+PiAyNCAmIDB4ZmYsIEhbMl0gPj4gMTYgJiAweGZmLCBIWzJdID4+IDggJiAweGZmLCBIWzJdICYgMHhmZixcbiAgICBIWzNdID4+IDI0ICYgMHhmZiwgSFszXSA+PiAxNiAmIDB4ZmYsIEhbM10gPj4gOCAmIDB4ZmYsIEhbM10gJiAweGZmLFxuICAgIEhbNF0gPj4gMjQgJiAweGZmLCBIWzRdID4+IDE2ICYgMHhmZiwgSFs0XSA+PiA4ICYgMHhmZiwgSFs0XSAmIDB4ZmZcbiAgXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaGExO1xuIiwgInZhciB2MzUgPSByZXF1aXJlKCcuL2xpYi92MzUuanMnKTtcbnZhciBzaGExID0gcmVxdWlyZSgnLi9saWIvc2hhMScpO1xubW9kdWxlLmV4cG9ydHMgPSB2MzUoJ3Y1JywgMHg1MCwgc2hhMSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG5cdHZhciBzdHIgPSB0b1N0ci5jYWxsKHZhbHVlKTtcblx0dmFyIGlzQXJncyA9IHN0ciA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cdGlmICghaXNBcmdzKSB7XG5cdFx0aXNBcmdzID0gc3RyICE9PSAnW29iamVjdCBBcnJheV0nICYmXG5cdFx0XHR2YWx1ZSAhPT0gbnVsbCAmJlxuXHRcdFx0dHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuXHRcdFx0dHlwZW9mIHZhbHVlLmxlbmd0aCA9PT0gJ251bWJlcicgJiZcblx0XHRcdHZhbHVlLmxlbmd0aCA+PSAwICYmXG5cdFx0XHR0b1N0ci5jYWxsKHZhbHVlLmNhbGxlZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdH1cblx0cmV0dXJuIGlzQXJncztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIga2V5c1NoaW07XG5pZiAoIU9iamVjdC5rZXlzKSB7XG5cdC8vIG1vZGlmaWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltXG5cdHZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXHR2YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXHR2YXIgaXNBcmdzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGdsb2JhbC1yZXF1aXJlXG5cdHZhciBpc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXHR2YXIgaGFzRG9udEVudW1CdWcgPSAhaXNFbnVtZXJhYmxlLmNhbGwoeyB0b1N0cmluZzogbnVsbCB9LCAndG9TdHJpbmcnKTtcblx0dmFyIGhhc1Byb3RvRW51bUJ1ZyA9IGlzRW51bWVyYWJsZS5jYWxsKGZ1bmN0aW9uICgpIHt9LCAncHJvdG90eXBlJyk7XG5cdHZhciBkb250RW51bXMgPSBbXG5cdFx0J3RvU3RyaW5nJyxcblx0XHQndG9Mb2NhbGVTdHJpbmcnLFxuXHRcdCd2YWx1ZU9mJyxcblx0XHQnaGFzT3duUHJvcGVydHknLFxuXHRcdCdpc1Byb3RvdHlwZU9mJyxcblx0XHQncHJvcGVydHlJc0VudW1lcmFibGUnLFxuXHRcdCdjb25zdHJ1Y3Rvcidcblx0XTtcblx0dmFyIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlID0gZnVuY3Rpb24gKG8pIHtcblx0XHR2YXIgY3RvciA9IG8uY29uc3RydWN0b3I7XG5cdFx0cmV0dXJuIGN0b3IgJiYgY3Rvci5wcm90b3R5cGUgPT09IG87XG5cdH07XG5cdHZhciBleGNsdWRlZEtleXMgPSB7XG5cdFx0JGFwcGxpY2F0aW9uQ2FjaGU6IHRydWUsXG5cdFx0JGNvbnNvbGU6IHRydWUsXG5cdFx0JGV4dGVybmFsOiB0cnVlLFxuXHRcdCRmcmFtZTogdHJ1ZSxcblx0XHQkZnJhbWVFbGVtZW50OiB0cnVlLFxuXHRcdCRmcmFtZXM6IHRydWUsXG5cdFx0JGlubmVySGVpZ2h0OiB0cnVlLFxuXHRcdCRpbm5lcldpZHRoOiB0cnVlLFxuXHRcdCRvbm1vemZ1bGxzY3JlZW5jaGFuZ2U6IHRydWUsXG5cdFx0JG9ubW96ZnVsbHNjcmVlbmVycm9yOiB0cnVlLFxuXHRcdCRvdXRlckhlaWdodDogdHJ1ZSxcblx0XHQkb3V0ZXJXaWR0aDogdHJ1ZSxcblx0XHQkcGFnZVhPZmZzZXQ6IHRydWUsXG5cdFx0JHBhZ2VZT2Zmc2V0OiB0cnVlLFxuXHRcdCRwYXJlbnQ6IHRydWUsXG5cdFx0JHNjcm9sbExlZnQ6IHRydWUsXG5cdFx0JHNjcm9sbFRvcDogdHJ1ZSxcblx0XHQkc2Nyb2xsWDogdHJ1ZSxcblx0XHQkc2Nyb2xsWTogdHJ1ZSxcblx0XHQkc2VsZjogdHJ1ZSxcblx0XHQkd2Via2l0SW5kZXhlZERCOiB0cnVlLFxuXHRcdCR3ZWJraXRTdG9yYWdlSW5mbzogdHJ1ZSxcblx0XHQkd2luZG93OiB0cnVlXG5cdH07XG5cdHZhciBoYXNBdXRvbWF0aW9uRXF1YWxpdHlCdWcgPSAoZnVuY3Rpb24gKCkge1xuXHRcdC8qIGdsb2JhbCB3aW5kb3cgKi9cblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0Zm9yICh2YXIgayBpbiB3aW5kb3cpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmICghZXhjbHVkZWRLZXlzWyckJyArIGtdICYmIGhhcy5jYWxsKHdpbmRvdywgaykgJiYgd2luZG93W2tdICE9PSBudWxsICYmIHR5cGVvZiB3aW5kb3dba10gPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKHdpbmRvd1trXSk7XG5cdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0oKSk7XG5cdHZhciBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZUlmTm90QnVnZ3kgPSBmdW5jdGlvbiAobykge1xuXHRcdC8qIGdsb2JhbCB3aW5kb3cgKi9cblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc0F1dG9tYXRpb25FcXVhbGl0eUJ1Zykge1xuXHRcdFx0cmV0dXJuIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKG8pO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKG8pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG5cblx0a2V5c1NoaW0gPSBmdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuXHRcdHZhciBpc09iamVjdCA9IG9iamVjdCAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0Jztcblx0XHR2YXIgaXNGdW5jdGlvbiA9IHRvU3RyLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblx0XHR2YXIgaXNBcmd1bWVudHMgPSBpc0FyZ3Mob2JqZWN0KTtcblx0XHR2YXIgaXNTdHJpbmcgPSBpc09iamVjdCAmJiB0b1N0ci5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xuXHRcdHZhciB0aGVLZXlzID0gW107XG5cblx0XHRpZiAoIWlzT2JqZWN0ICYmICFpc0Z1bmN0aW9uICYmICFpc0FyZ3VtZW50cykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmtleXMgY2FsbGVkIG9uIGEgbm9uLW9iamVjdCcpO1xuXHRcdH1cblxuXHRcdHZhciBza2lwUHJvdG8gPSBoYXNQcm90b0VudW1CdWcgJiYgaXNGdW5jdGlvbjtcblx0XHRpZiAoaXNTdHJpbmcgJiYgb2JqZWN0Lmxlbmd0aCA+IDAgJiYgIWhhcy5jYWxsKG9iamVjdCwgMCkpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdHRoZUtleXMucHVzaChTdHJpbmcoaSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChpc0FyZ3VtZW50cyAmJiBvYmplY3QubGVuZ3RoID4gMCkge1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBvYmplY3QubGVuZ3RoOyArK2opIHtcblx0XHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhqKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAodmFyIG5hbWUgaW4gb2JqZWN0KSB7XG5cdFx0XHRcdGlmICghKHNraXBQcm90byAmJiBuYW1lID09PSAncHJvdG90eXBlJykgJiYgaGFzLmNhbGwob2JqZWN0LCBuYW1lKSkge1xuXHRcdFx0XHRcdHRoZUtleXMucHVzaChTdHJpbmcobmFtZSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGhhc0RvbnRFbnVtQnVnKSB7XG5cdFx0XHR2YXIgc2tpcENvbnN0cnVjdG9yID0gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGVJZk5vdEJ1Z2d5KG9iamVjdCk7XG5cblx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgZG9udEVudW1zLmxlbmd0aDsgKytrKSB7XG5cdFx0XHRcdGlmICghKHNraXBDb25zdHJ1Y3RvciAmJiBkb250RW51bXNba10gPT09ICdjb25zdHJ1Y3RvcicpICYmIGhhcy5jYWxsKG9iamVjdCwgZG9udEVudW1zW2tdKSkge1xuXHRcdFx0XHRcdHRoZUtleXMucHVzaChkb250RW51bXNba10pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0aGVLZXlzO1xuXHR9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBrZXlzU2hpbTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciBpc0FyZ3MgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyk7XG5cbnZhciBvcmlnS2V5cyA9IE9iamVjdC5rZXlzO1xudmFyIGtleXNTaGltID0gb3JpZ0tleXMgPyBmdW5jdGlvbiBrZXlzKG8pIHsgcmV0dXJuIG9yaWdLZXlzKG8pOyB9IDogcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xuXG52YXIgb3JpZ2luYWxLZXlzID0gT2JqZWN0LmtleXM7XG5cbmtleXNTaGltLnNoaW0gPSBmdW5jdGlvbiBzaGltT2JqZWN0S2V5cygpIHtcblx0aWYgKE9iamVjdC5rZXlzKSB7XG5cdFx0dmFyIGtleXNXb3Jrc1dpdGhBcmd1bWVudHMgPSAoZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gU2FmYXJpIDUuMCBidWdcblx0XHRcdHZhciBhcmdzID0gT2JqZWN0LmtleXMoYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiBhcmdzICYmIGFyZ3MubGVuZ3RoID09PSBhcmd1bWVudHMubGVuZ3RoO1xuXHRcdH0oMSwgMikpO1xuXHRcdGlmICgha2V5c1dvcmtzV2l0aEFyZ3VtZW50cykge1xuXHRcdFx0T2JqZWN0LmtleXMgPSBmdW5jdGlvbiBrZXlzKG9iamVjdCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtbmFtZS1tYXRjaGluZ1xuXHRcdFx0XHRpZiAoaXNBcmdzKG9iamVjdCkpIHtcblx0XHRcdFx0XHRyZXR1cm4gb3JpZ2luYWxLZXlzKHNsaWNlLmNhbGwob2JqZWN0KSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG9yaWdpbmFsS2V5cyhvYmplY3QpO1xuXHRcdFx0fTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0T2JqZWN0LmtleXMgPSBrZXlzU2hpbTtcblx0fVxuXHRyZXR1cm4gT2JqZWN0LmtleXMgfHwga2V5c1NoaW07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXNTaGltO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuLyogZXNsaW50IGNvbXBsZXhpdHk6IFsyLCAxOF0sIG1heC1zdGF0ZW1lbnRzOiBbMiwgMzNdICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhhc1N5bWJvbHMoKSB7XG5cdGlmICh0eXBlb2YgU3ltYm9sICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gJ3N5bWJvbCcpIHsgcmV0dXJuIHRydWU7IH1cblxuXHR2YXIgb2JqID0ge307XG5cdHZhciBzeW0gPSBTeW1ib2woJ3Rlc3QnKTtcblx0dmFyIHN5bU9iaiA9IE9iamVjdChzeW0pO1xuXHRpZiAodHlwZW9mIHN5bSA9PT0gJ3N0cmluZycpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzeW0pICE9PSAnW29iamVjdCBTeW1ib2xdJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzeW1PYmopICE9PSAnW29iamVjdCBTeW1ib2xdJykgeyByZXR1cm4gZmFsc2U7IH1cblxuXHQvLyB0ZW1wIGRpc2FibGVkIHBlciBodHRwczovL2dpdGh1Yi5jb20vbGpoYXJiL29iamVjdC5hc3NpZ24vaXNzdWVzLzE3XG5cdC8vIGlmIChzeW0gaW5zdGFuY2VvZiBTeW1ib2wpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdC8vIHRlbXAgZGlzYWJsZWQgcGVyIGh0dHBzOi8vZ2l0aHViLmNvbS9XZWJSZWZsZWN0aW9uL2dldC1vd24tcHJvcGVydHktc3ltYm9scy9pc3N1ZXMvNFxuXHQvLyBpZiAoIShzeW1PYmogaW5zdGFuY2VvZiBTeW1ib2wpKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdC8vIGlmICh0eXBlb2YgU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZyAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0Ly8gaWYgKFN0cmluZyhzeW0pICE9PSBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ltKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHR2YXIgc3ltVmFsID0gNDI7XG5cdG9ialtzeW1dID0gc3ltVmFsO1xuXHRmb3IgKHN5bSBpbiBvYmopIHsgcmV0dXJuIGZhbHNlOyB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXgsIG5vLXVucmVhY2hhYmxlLWxvb3Bcblx0aWYgKHR5cGVvZiBPYmplY3Qua2V5cyA9PT0gJ2Z1bmN0aW9uJyAmJiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCAhPT0gMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzID09PSAnZnVuY3Rpb24nICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikubGVuZ3RoICE9PSAwKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdHZhciBzeW1zID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmopO1xuXHRpZiAoc3ltcy5sZW5ndGggIT09IDEgfHwgc3ltc1swXSAhPT0gc3ltKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iaiwgc3ltKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBzeW0pO1xuXHRcdGlmIChkZXNjcmlwdG9yLnZhbHVlICE9PSBzeW1WYWwgfHwgZGVzY3JpcHRvci5lbnVtZXJhYmxlICE9PSB0cnVlKSB7IHJldHVybiBmYWxzZTsgfVxuXHR9XG5cblx0cmV0dXJuIHRydWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIGhhc1N5bWJvbHMgPSByZXF1aXJlKCdoYXMtc3ltYm9scy9zaGFtcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhhc1RvU3RyaW5nVGFnU2hhbXMoKSB7XG5cdHJldHVybiBoYXNTeW1ib2xzKCkgJiYgISFTeW1ib2wudG9TdHJpbmdUYWc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIG9yaWdTeW1ib2wgPSB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2w7XG52YXIgaGFzU3ltYm9sU2hhbSA9IHJlcXVpcmUoJy4vc2hhbXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoYXNOYXRpdmVTeW1ib2xzKCkge1xuXHRpZiAodHlwZW9mIG9yaWdTeW1ib2wgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgU3ltYm9sICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIG9yaWdTeW1ib2woJ2ZvbycpICE9PSAnc3ltYm9sJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBTeW1ib2woJ2JhcicpICE9PSAnc3ltYm9sJykgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRyZXR1cm4gaGFzU3ltYm9sU2hhbSgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciB0ZXN0ID0ge1xuXHRmb286IHt9XG59O1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoYXNQcm90bygpIHtcblx0cmV0dXJuIHsgX19wcm90b19fOiB0ZXN0IH0uZm9vID09PSB0ZXN0LmZvbyAmJiAhKHsgX19wcm90b19fOiBudWxsIH0gaW5zdGFuY2VvZiAkT2JqZWN0KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG4vKiBlc2xpbnQgbm8taW52YWxpZC10aGlzOiAxICovXG5cbnZhciBFUlJPUl9NRVNTQUdFID0gJ0Z1bmN0aW9uLnByb3RvdHlwZS5iaW5kIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgJztcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgZnVuY1R5cGUgPSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXG52YXIgY29uY2F0dHkgPSBmdW5jdGlvbiBjb25jYXR0eShhLCBiKSB7XG4gICAgdmFyIGFyciA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFycltpXSA9IGFbaV07XG4gICAgfVxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgYi5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBhcnJbaiArIGEubGVuZ3RoXSA9IGJbal07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcbn07XG5cbnZhciBzbGljeSA9IGZ1bmN0aW9uIHNsaWN5KGFyckxpa2UsIG9mZnNldCkge1xuICAgIHZhciBhcnIgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gb2Zmc2V0IHx8IDAsIGogPSAwOyBpIDwgYXJyTGlrZS5sZW5ndGg7IGkgKz0gMSwgaiArPSAxKSB7XG4gICAgICAgIGFycltqXSA9IGFyckxpa2VbaV07XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG59O1xuXG52YXIgam9pbnkgPSBmdW5jdGlvbiAoYXJyLCBqb2luZXIpIHtcbiAgICB2YXIgc3RyID0gJyc7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgc3RyICs9IGFycltpXTtcbiAgICAgICAgaWYgKGkgKyAxIDwgYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgc3RyICs9IGpvaW5lcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKHRoYXQpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcztcbiAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gJ2Z1bmN0aW9uJyB8fCB0b1N0ci5hcHBseSh0YXJnZXQpICE9PSBmdW5jVHlwZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEVSUk9SX01FU1NBR0UgKyB0YXJnZXQpO1xuICAgIH1cbiAgICB2YXIgYXJncyA9IHNsaWN5KGFyZ3VtZW50cywgMSk7XG5cbiAgICB2YXIgYm91bmQ7XG4gICAgdmFyIGJpbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBib3VuZCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRhcmdldC5hcHBseShcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGNvbmNhdHR5KGFyZ3MsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoT2JqZWN0KHJlc3VsdCkgPT09IHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFyZ2V0LmFwcGx5KFxuICAgICAgICAgICAgdGhhdCxcbiAgICAgICAgICAgIGNvbmNhdHR5KGFyZ3MsIGFyZ3VtZW50cylcbiAgICAgICAgKTtcblxuICAgIH07XG5cbiAgICB2YXIgYm91bmRMZW5ndGggPSBtYXgoMCwgdGFyZ2V0Lmxlbmd0aCAtIGFyZ3MubGVuZ3RoKTtcbiAgICB2YXIgYm91bmRBcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib3VuZExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvdW5kQXJnc1tpXSA9ICckJyArIGk7XG4gICAgfVxuXG4gICAgYm91bmQgPSBGdW5jdGlvbignYmluZGVyJywgJ3JldHVybiBmdW5jdGlvbiAoJyArIGpvaW55KGJvdW5kQXJncywgJywnKSArICcpeyByZXR1cm4gYmluZGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKTsgfScpKGJpbmRlcik7XG5cbiAgICBpZiAodGFyZ2V0LnByb3RvdHlwZSkge1xuICAgICAgICB2YXIgRW1wdHkgPSBmdW5jdGlvbiBFbXB0eSgpIHt9O1xuICAgICAgICBFbXB0eS5wcm90b3R5cGUgPSB0YXJnZXQucHJvdG90eXBlO1xuICAgICAgICBib3VuZC5wcm90b3R5cGUgPSBuZXcgRW1wdHkoKTtcbiAgICAgICAgRW1wdHkucHJvdG90eXBlID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gYm91bmQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kIHx8IGltcGxlbWVudGF0aW9uO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbDtcbnZhciAkaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBiaW5kID0gcmVxdWlyZSgnZnVuY3Rpb24tYmluZCcpO1xuXG4vKiogQHR5cGUgeyhvOiB7fSwgcDogUHJvcGVydHlLZXkpID0+IHAgaXMga2V5b2Ygb30gKi9cbm1vZHVsZS5leHBvcnRzID0gYmluZC5jYWxsKGNhbGwsICRoYXNPd24pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIHVuZGVmaW5lZDtcblxudmFyICRTeW50YXhFcnJvciA9IFN5bnRheEVycm9yO1xudmFyICRGdW5jdGlvbiA9IEZ1bmN0aW9uO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxudmFyIGdldEV2YWxsZWRDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIChleHByZXNzaW9uU3ludGF4KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuICRGdW5jdGlvbignXCJ1c2Ugc3RyaWN0XCI7IHJldHVybiAoJyArIGV4cHJlc3Npb25TeW50YXggKyAnKS5jb25zdHJ1Y3RvcjsnKSgpO1xuXHR9IGNhdGNoIChlKSB7fVxufTtcblxudmFyICRnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbmlmICgkZ09QRCkge1xuXHR0cnkge1xuXHRcdCRnT1BEKHt9LCAnJyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQkZ09QRCA9IG51bGw7IC8vIHRoaXMgaXMgSUUgOCwgd2hpY2ggaGFzIGEgYnJva2VuIGdPUERcblx0fVxufVxuXG52YXIgdGhyb3dUeXBlRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cdHRocm93IG5ldyAkVHlwZUVycm9yKCk7XG59O1xudmFyIFRocm93VHlwZUVycm9yID0gJGdPUERcblx0PyAoZnVuY3Rpb24gKCkge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zLCBuby1jYWxsZXIsIG5vLXJlc3RyaWN0ZWQtcHJvcGVydGllc1xuXHRcdFx0YXJndW1lbnRzLmNhbGxlZTsgLy8gSUUgOCBkb2VzIG5vdCB0aHJvdyBoZXJlXG5cdFx0XHRyZXR1cm4gdGhyb3dUeXBlRXJyb3I7XG5cdFx0fSBjYXRjaCAoY2FsbGVlVGhyb3dzKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHQvLyBJRSA4IHRocm93cyBvbiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGFyZ3VtZW50cywgJycpXG5cdFx0XHRcdHJldHVybiAkZ09QRChhcmd1bWVudHMsICdjYWxsZWUnKS5nZXQ7XG5cdFx0XHR9IGNhdGNoIChnT1BEdGhyb3dzKSB7XG5cdFx0XHRcdHJldHVybiB0aHJvd1R5cGVFcnJvcjtcblx0XHRcdH1cblx0XHR9XG5cdH0oKSlcblx0OiB0aHJvd1R5cGVFcnJvcjtcblxudmFyIGhhc1N5bWJvbHMgPSByZXF1aXJlKCdoYXMtc3ltYm9scycpKCk7XG52YXIgaGFzUHJvdG8gPSByZXF1aXJlKCdoYXMtcHJvdG8nKSgpO1xuXG52YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgKFxuXHRoYXNQcm90b1xuXHRcdD8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHguX19wcm90b19fOyB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG9cblx0XHQ6IG51bGxcbik7XG5cbnZhciBuZWVkc0V2YWwgPSB7fTtcblxudmFyIFR5cGVkQXJyYXkgPSB0eXBlb2YgVWludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgfHwgIWdldFByb3RvID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8oVWludDhBcnJheSk7XG5cbnZhciBJTlRSSU5TSUNTID0ge1xuXHQnJUFnZ3JlZ2F0ZUVycm9yJSc6IHR5cGVvZiBBZ2dyZWdhdGVFcnJvciA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBBZ2dyZWdhdGVFcnJvcixcblx0JyVBcnJheSUnOiBBcnJheSxcblx0JyVBcnJheUJ1ZmZlciUnOiB0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQXJyYXlCdWZmZXIsXG5cdCclQXJyYXlJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzICYmIGdldFByb3RvID8gZ2V0UHJvdG8oW11bU3ltYm9sLml0ZXJhdG9yXSgpKSA6IHVuZGVmaW5lZCxcblx0JyVBc3luY0Zyb21TeW5jSXRlcmF0b3JQcm90b3R5cGUlJzogdW5kZWZpbmVkLFxuXHQnJUFzeW5jRnVuY3Rpb24lJzogbmVlZHNFdmFsLFxuXHQnJUFzeW5jR2VuZXJhdG9yJSc6IG5lZWRzRXZhbCxcblx0JyVBc3luY0dlbmVyYXRvckZ1bmN0aW9uJSc6IG5lZWRzRXZhbCxcblx0JyVBc3luY0l0ZXJhdG9yUHJvdG90eXBlJSc6IG5lZWRzRXZhbCxcblx0JyVBdG9taWNzJSc6IHR5cGVvZiBBdG9taWNzID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEF0b21pY3MsXG5cdCclQmlnSW50JSc6IHR5cGVvZiBCaWdJbnQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQmlnSW50LFxuXHQnJUJpZ0ludDY0QXJyYXklJzogdHlwZW9mIEJpZ0ludDY0QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQmlnSW50NjRBcnJheSxcblx0JyVCaWdVaW50NjRBcnJheSUnOiB0eXBlb2YgQmlnVWludDY0QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQmlnVWludDY0QXJyYXksXG5cdCclQm9vbGVhbiUnOiBCb29sZWFuLFxuXHQnJURhdGFWaWV3JSc6IHR5cGVvZiBEYXRhVmlldyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBEYXRhVmlldyxcblx0JyVEYXRlJSc6IERhdGUsXG5cdCclZGVjb2RlVVJJJSc6IGRlY29kZVVSSSxcblx0JyVkZWNvZGVVUklDb21wb25lbnQlJzogZGVjb2RlVVJJQ29tcG9uZW50LFxuXHQnJWVuY29kZVVSSSUnOiBlbmNvZGVVUkksXG5cdCclZW5jb2RlVVJJQ29tcG9uZW50JSc6IGVuY29kZVVSSUNvbXBvbmVudCxcblx0JyVFcnJvciUnOiBFcnJvcixcblx0JyVldmFsJSc6IGV2YWwsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXZhbFxuXHQnJUV2YWxFcnJvciUnOiBFdmFsRXJyb3IsXG5cdCclRmxvYXQzMkFycmF5JSc6IHR5cGVvZiBGbG9hdDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogRmxvYXQzMkFycmF5LFxuXHQnJUZsb2F0NjRBcnJheSUnOiB0eXBlb2YgRmxvYXQ2NEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0NjRBcnJheSxcblx0JyVGaW5hbGl6YXRpb25SZWdpc3RyeSUnOiB0eXBlb2YgRmluYWxpemF0aW9uUmVnaXN0cnkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogRmluYWxpemF0aW9uUmVnaXN0cnksXG5cdCclRnVuY3Rpb24lJzogJEZ1bmN0aW9uLFxuXHQnJUdlbmVyYXRvckZ1bmN0aW9uJSc6IG5lZWRzRXZhbCxcblx0JyVJbnQ4QXJyYXklJzogdHlwZW9mIEludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXksXG5cdCclSW50MTZBcnJheSUnOiB0eXBlb2YgSW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQxNkFycmF5LFxuXHQnJUludDMyQXJyYXklJzogdHlwZW9mIEludDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogSW50MzJBcnJheSxcblx0JyVpc0Zpbml0ZSUnOiBpc0Zpbml0ZSxcblx0JyVpc05hTiUnOiBpc05hTixcblx0JyVJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzICYmIGdldFByb3RvID8gZ2V0UHJvdG8oZ2V0UHJvdG8oW11bU3ltYm9sLml0ZXJhdG9yXSgpKSkgOiB1bmRlZmluZWQsXG5cdCclSlNPTiUnOiB0eXBlb2YgSlNPTiA9PT0gJ29iamVjdCcgPyBKU09OIDogdW5kZWZpbmVkLFxuXHQnJU1hcCUnOiB0eXBlb2YgTWFwID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IE1hcCxcblx0JyVNYXBJdGVyYXRvclByb3RvdHlwZSUnOiB0eXBlb2YgTWFwID09PSAndW5kZWZpbmVkJyB8fCAhaGFzU3ltYm9scyB8fCAhZ2V0UHJvdG8gPyB1bmRlZmluZWQgOiBnZXRQcm90byhuZXcgTWFwKClbU3ltYm9sLml0ZXJhdG9yXSgpKSxcblx0JyVNYXRoJSc6IE1hdGgsXG5cdCclTnVtYmVyJSc6IE51bWJlcixcblx0JyVPYmplY3QlJzogT2JqZWN0LFxuXHQnJXBhcnNlRmxvYXQlJzogcGFyc2VGbG9hdCxcblx0JyVwYXJzZUludCUnOiBwYXJzZUludCxcblx0JyVQcm9taXNlJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UsXG5cdCclUHJveHklJzogdHlwZW9mIFByb3h5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb3h5LFxuXHQnJVJhbmdlRXJyb3IlJzogUmFuZ2VFcnJvcixcblx0JyVSZWZlcmVuY2VFcnJvciUnOiBSZWZlcmVuY2VFcnJvcixcblx0JyVSZWZsZWN0JSc6IHR5cGVvZiBSZWZsZWN0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFJlZmxlY3QsXG5cdCclUmVnRXhwJSc6IFJlZ0V4cCxcblx0JyVTZXQlJzogdHlwZW9mIFNldCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBTZXQsXG5cdCclU2V0SXRlcmF0b3JQcm90b3R5cGUlJzogdHlwZW9mIFNldCA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc1N5bWJvbHMgfHwgIWdldFByb3RvID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8obmV3IFNldCgpW1N5bWJvbC5pdGVyYXRvcl0oKSksXG5cdCclU2hhcmVkQXJyYXlCdWZmZXIlJzogdHlwZW9mIFNoYXJlZEFycmF5QnVmZmVyID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFNoYXJlZEFycmF5QnVmZmVyLFxuXHQnJVN0cmluZyUnOiBTdHJpbmcsXG5cdCclU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlJzogaGFzU3ltYm9scyAmJiBnZXRQcm90byA/IGdldFByb3RvKCcnW1N5bWJvbC5pdGVyYXRvcl0oKSkgOiB1bmRlZmluZWQsXG5cdCclU3ltYm9sJSc6IGhhc1N5bWJvbHMgPyBTeW1ib2wgOiB1bmRlZmluZWQsXG5cdCclU3ludGF4RXJyb3IlJzogJFN5bnRheEVycm9yLFxuXHQnJVRocm93VHlwZUVycm9yJSc6IFRocm93VHlwZUVycm9yLFxuXHQnJVR5cGVkQXJyYXklJzogVHlwZWRBcnJheSxcblx0JyVUeXBlRXJyb3IlJzogJFR5cGVFcnJvcixcblx0JyVVaW50OEFycmF5JSc6IHR5cGVvZiBVaW50OEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQ4QXJyYXksXG5cdCclVWludDhDbGFtcGVkQXJyYXklJzogdHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQ4Q2xhbXBlZEFycmF5LFxuXHQnJVVpbnQxNkFycmF5JSc6IHR5cGVvZiBVaW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50MTZBcnJheSxcblx0JyVVaW50MzJBcnJheSUnOiB0eXBlb2YgVWludDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDMyQXJyYXksXG5cdCclVVJJRXJyb3IlJzogVVJJRXJyb3IsXG5cdCclV2Vha01hcCUnOiB0eXBlb2YgV2Vha01hcCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBXZWFrTWFwLFxuXHQnJVdlYWtSZWYlJzogdHlwZW9mIFdlYWtSZWYgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha1JlZixcblx0JyVXZWFrU2V0JSc6IHR5cGVvZiBXZWFrU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtTZXRcbn07XG5cbmlmIChnZXRQcm90bykge1xuXHR0cnkge1xuXHRcdG51bGwuZXJyb3I7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zaGFkb3dyZWFsbS9wdWxsLzM4NCNpc3N1ZWNvbW1lbnQtMTM2NDI2NDIyOVxuXHRcdHZhciBlcnJvclByb3RvID0gZ2V0UHJvdG8oZ2V0UHJvdG8oZSkpO1xuXHRcdElOVFJJTlNJQ1NbJyVFcnJvci5wcm90b3R5cGUlJ10gPSBlcnJvclByb3RvO1xuXHR9XG59XG5cbnZhciBkb0V2YWwgPSBmdW5jdGlvbiBkb0V2YWwobmFtZSkge1xuXHR2YXIgdmFsdWU7XG5cdGlmIChuYW1lID09PSAnJUFzeW5jRnVuY3Rpb24lJykge1xuXHRcdHZhbHVlID0gZ2V0RXZhbGxlZENvbnN0cnVjdG9yKCdhc3luYyBmdW5jdGlvbiAoKSB7fScpO1xuXHR9IGVsc2UgaWYgKG5hbWUgPT09ICclR2VuZXJhdG9yRnVuY3Rpb24lJykge1xuXHRcdHZhbHVlID0gZ2V0RXZhbGxlZENvbnN0cnVjdG9yKCdmdW5jdGlvbiogKCkge30nKTtcblx0fSBlbHNlIGlmIChuYW1lID09PSAnJUFzeW5jR2VuZXJhdG9yRnVuY3Rpb24lJykge1xuXHRcdHZhbHVlID0gZ2V0RXZhbGxlZENvbnN0cnVjdG9yKCdhc3luYyBmdW5jdGlvbiogKCkge30nKTtcblx0fSBlbHNlIGlmIChuYW1lID09PSAnJUFzeW5jR2VuZXJhdG9yJScpIHtcblx0XHR2YXIgZm4gPSBkb0V2YWwoJyVBc3luY0dlbmVyYXRvckZ1bmN0aW9uJScpO1xuXHRcdGlmIChmbikge1xuXHRcdFx0dmFsdWUgPSBmbi5wcm90b3R5cGU7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG5hbWUgPT09ICclQXN5bmNJdGVyYXRvclByb3RvdHlwZSUnKSB7XG5cdFx0dmFyIGdlbiA9IGRvRXZhbCgnJUFzeW5jR2VuZXJhdG9yJScpO1xuXHRcdGlmIChnZW4gJiYgZ2V0UHJvdG8pIHtcblx0XHRcdHZhbHVlID0gZ2V0UHJvdG8oZ2VuLnByb3RvdHlwZSk7XG5cdFx0fVxuXHR9XG5cblx0SU5UUklOU0lDU1tuYW1lXSA9IHZhbHVlO1xuXG5cdHJldHVybiB2YWx1ZTtcbn07XG5cbnZhciBMRUdBQ1lfQUxJQVNFUyA9IHtcblx0JyVBcnJheUJ1ZmZlclByb3RvdHlwZSUnOiBbJ0FycmF5QnVmZmVyJywgJ3Byb3RvdHlwZSddLFxuXHQnJUFycmF5UHJvdG90eXBlJSc6IFsnQXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclQXJyYXlQcm90b19lbnRyaWVzJSc6IFsnQXJyYXknLCAncHJvdG90eXBlJywgJ2VudHJpZXMnXSxcblx0JyVBcnJheVByb3RvX2ZvckVhY2glJzogWydBcnJheScsICdwcm90b3R5cGUnLCAnZm9yRWFjaCddLFxuXHQnJUFycmF5UHJvdG9fa2V5cyUnOiBbJ0FycmF5JywgJ3Byb3RvdHlwZScsICdrZXlzJ10sXG5cdCclQXJyYXlQcm90b192YWx1ZXMlJzogWydBcnJheScsICdwcm90b3R5cGUnLCAndmFsdWVzJ10sXG5cdCclQXN5bmNGdW5jdGlvblByb3RvdHlwZSUnOiBbJ0FzeW5jRnVuY3Rpb24nLCAncHJvdG90eXBlJ10sXG5cdCclQXN5bmNHZW5lcmF0b3IlJzogWydBc3luY0dlbmVyYXRvckZ1bmN0aW9uJywgJ3Byb3RvdHlwZSddLFxuXHQnJUFzeW5jR2VuZXJhdG9yUHJvdG90eXBlJSc6IFsnQXN5bmNHZW5lcmF0b3JGdW5jdGlvbicsICdwcm90b3R5cGUnLCAncHJvdG90eXBlJ10sXG5cdCclQm9vbGVhblByb3RvdHlwZSUnOiBbJ0Jvb2xlYW4nLCAncHJvdG90eXBlJ10sXG5cdCclRGF0YVZpZXdQcm90b3R5cGUlJzogWydEYXRhVmlldycsICdwcm90b3R5cGUnXSxcblx0JyVEYXRlUHJvdG90eXBlJSc6IFsnRGF0ZScsICdwcm90b3R5cGUnXSxcblx0JyVFcnJvclByb3RvdHlwZSUnOiBbJ0Vycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJUV2YWxFcnJvclByb3RvdHlwZSUnOiBbJ0V2YWxFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVGbG9hdDMyQXJyYXlQcm90b3R5cGUlJzogWydGbG9hdDMyQXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclRmxvYXQ2NEFycmF5UHJvdG90eXBlJSc6IFsnRmxvYXQ2NEFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJUZ1bmN0aW9uUHJvdG90eXBlJSc6IFsnRnVuY3Rpb24nLCAncHJvdG90eXBlJ10sXG5cdCclR2VuZXJhdG9yJSc6IFsnR2VuZXJhdG9yRnVuY3Rpb24nLCAncHJvdG90eXBlJ10sXG5cdCclR2VuZXJhdG9yUHJvdG90eXBlJSc6IFsnR2VuZXJhdG9yRnVuY3Rpb24nLCAncHJvdG90eXBlJywgJ3Byb3RvdHlwZSddLFxuXHQnJUludDhBcnJheVByb3RvdHlwZSUnOiBbJ0ludDhBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVJbnQxNkFycmF5UHJvdG90eXBlJSc6IFsnSW50MTZBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVJbnQzMkFycmF5UHJvdG90eXBlJSc6IFsnSW50MzJBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVKU09OUGFyc2UlJzogWydKU09OJywgJ3BhcnNlJ10sXG5cdCclSlNPTlN0cmluZ2lmeSUnOiBbJ0pTT04nLCAnc3RyaW5naWZ5J10sXG5cdCclTWFwUHJvdG90eXBlJSc6IFsnTWFwJywgJ3Byb3RvdHlwZSddLFxuXHQnJU51bWJlclByb3RvdHlwZSUnOiBbJ051bWJlcicsICdwcm90b3R5cGUnXSxcblx0JyVPYmplY3RQcm90b3R5cGUlJzogWydPYmplY3QnLCAncHJvdG90eXBlJ10sXG5cdCclT2JqUHJvdG9fdG9TdHJpbmclJzogWydPYmplY3QnLCAncHJvdG90eXBlJywgJ3RvU3RyaW5nJ10sXG5cdCclT2JqUHJvdG9fdmFsdWVPZiUnOiBbJ09iamVjdCcsICdwcm90b3R5cGUnLCAndmFsdWVPZiddLFxuXHQnJVByb21pc2VQcm90b3R5cGUlJzogWydQcm9taXNlJywgJ3Byb3RvdHlwZSddLFxuXHQnJVByb21pc2VQcm90b190aGVuJSc6IFsnUHJvbWlzZScsICdwcm90b3R5cGUnLCAndGhlbiddLFxuXHQnJVByb21pc2VfYWxsJSc6IFsnUHJvbWlzZScsICdhbGwnXSxcblx0JyVQcm9taXNlX3JlamVjdCUnOiBbJ1Byb21pc2UnLCAncmVqZWN0J10sXG5cdCclUHJvbWlzZV9yZXNvbHZlJSc6IFsnUHJvbWlzZScsICdyZXNvbHZlJ10sXG5cdCclUmFuZ2VFcnJvclByb3RvdHlwZSUnOiBbJ1JhbmdlRXJyb3InLCAncHJvdG90eXBlJ10sXG5cdCclUmVmZXJlbmNlRXJyb3JQcm90b3R5cGUlJzogWydSZWZlcmVuY2VFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVSZWdFeHBQcm90b3R5cGUlJzogWydSZWdFeHAnLCAncHJvdG90eXBlJ10sXG5cdCclU2V0UHJvdG90eXBlJSc6IFsnU2V0JywgJ3Byb3RvdHlwZSddLFxuXHQnJVNoYXJlZEFycmF5QnVmZmVyUHJvdG90eXBlJSc6IFsnU2hhcmVkQXJyYXlCdWZmZXInLCAncHJvdG90eXBlJ10sXG5cdCclU3RyaW5nUHJvdG90eXBlJSc6IFsnU3RyaW5nJywgJ3Byb3RvdHlwZSddLFxuXHQnJVN5bWJvbFByb3RvdHlwZSUnOiBbJ1N5bWJvbCcsICdwcm90b3R5cGUnXSxcblx0JyVTeW50YXhFcnJvclByb3RvdHlwZSUnOiBbJ1N5bnRheEVycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJVR5cGVkQXJyYXlQcm90b3R5cGUlJzogWydUeXBlZEFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJVR5cGVFcnJvclByb3RvdHlwZSUnOiBbJ1R5cGVFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVVaW50OEFycmF5UHJvdG90eXBlJSc6IFsnVWludDhBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVVaW50OENsYW1wZWRBcnJheVByb3RvdHlwZSUnOiBbJ1VpbnQ4Q2xhbXBlZEFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJVVpbnQxNkFycmF5UHJvdG90eXBlJSc6IFsnVWludDE2QXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclVWludDMyQXJyYXlQcm90b3R5cGUlJzogWydVaW50MzJBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVVUklFcnJvclByb3RvdHlwZSUnOiBbJ1VSSUVycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJVdlYWtNYXBQcm90b3R5cGUlJzogWydXZWFrTWFwJywgJ3Byb3RvdHlwZSddLFxuXHQnJVdlYWtTZXRQcm90b3R5cGUlJzogWydXZWFrU2V0JywgJ3Byb3RvdHlwZSddXG59O1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCdoYXNvd24nKTtcbnZhciAkY29uY2F0ID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIEFycmF5LnByb3RvdHlwZS5jb25jYXQpO1xudmFyICRzcGxpY2VBcHBseSA9IGJpbmQuY2FsbChGdW5jdGlvbi5hcHBseSwgQXJyYXkucHJvdG90eXBlLnNwbGljZSk7XG52YXIgJHJlcGxhY2UgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKTtcbnZhciAkc3RyU2xpY2UgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgU3RyaW5nLnByb3RvdHlwZS5zbGljZSk7XG52YXIgJGV4ZWMgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgUmVnRXhwLnByb3RvdHlwZS5leGVjKTtcblxuLyogYWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvNC4xNy4xNS9kaXN0L2xvZGFzaC5qcyNMNjczNS1MNjc0NCAqL1xudmFyIHJlUHJvcE5hbWUgPSAvW14lLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCUkKSkvZztcbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZzsgLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgc3RyaW5nVG9QYXRoID0gZnVuY3Rpb24gc3RyaW5nVG9QYXRoKHN0cmluZykge1xuXHR2YXIgZmlyc3QgPSAkc3RyU2xpY2Uoc3RyaW5nLCAwLCAxKTtcblx0dmFyIGxhc3QgPSAkc3RyU2xpY2Uoc3RyaW5nLCAtMSk7XG5cdGlmIChmaXJzdCA9PT0gJyUnICYmIGxhc3QgIT09ICclJykge1xuXHRcdHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ2ludmFsaWQgaW50cmluc2ljIHN5bnRheCwgZXhwZWN0ZWQgY2xvc2luZyBgJWAnKTtcblx0fSBlbHNlIGlmIChsYXN0ID09PSAnJScgJiYgZmlyc3QgIT09ICclJykge1xuXHRcdHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ2ludmFsaWQgaW50cmluc2ljIHN5bnRheCwgZXhwZWN0ZWQgb3BlbmluZyBgJWAnKTtcblx0fVxuXHR2YXIgcmVzdWx0ID0gW107XG5cdCRyZXBsYWNlKHN0cmluZywgcmVQcm9wTmFtZSwgZnVuY3Rpb24gKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdWJTdHJpbmcpIHtcblx0XHRyZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBxdW90ZSA/ICRyZXBsYWNlKHN1YlN0cmluZywgcmVFc2NhcGVDaGFyLCAnJDEnKSA6IG51bWJlciB8fCBtYXRjaDtcblx0fSk7XG5cdHJldHVybiByZXN1bHQ7XG59O1xuLyogZW5kIGFkYXB0YXRpb24gKi9cblxudmFyIGdldEJhc2VJbnRyaW5zaWMgPSBmdW5jdGlvbiBnZXRCYXNlSW50cmluc2ljKG5hbWUsIGFsbG93TWlzc2luZykge1xuXHR2YXIgaW50cmluc2ljTmFtZSA9IG5hbWU7XG5cdHZhciBhbGlhcztcblx0aWYgKGhhc093bihMRUdBQ1lfQUxJQVNFUywgaW50cmluc2ljTmFtZSkpIHtcblx0XHRhbGlhcyA9IExFR0FDWV9BTElBU0VTW2ludHJpbnNpY05hbWVdO1xuXHRcdGludHJpbnNpY05hbWUgPSAnJScgKyBhbGlhc1swXSArICclJztcblx0fVxuXG5cdGlmIChoYXNPd24oSU5UUklOU0lDUywgaW50cmluc2ljTmFtZSkpIHtcblx0XHR2YXIgdmFsdWUgPSBJTlRSSU5TSUNTW2ludHJpbnNpY05hbWVdO1xuXHRcdGlmICh2YWx1ZSA9PT0gbmVlZHNFdmFsKSB7XG5cdFx0XHR2YWx1ZSA9IGRvRXZhbChpbnRyaW5zaWNOYW1lKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgJiYgIWFsbG93TWlzc2luZykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2ludHJpbnNpYyAnICsgbmFtZSArICcgZXhpc3RzLCBidXQgaXMgbm90IGF2YWlsYWJsZS4gUGxlYXNlIGZpbGUgYW4gaXNzdWUhJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGFsaWFzOiBhbGlhcyxcblx0XHRcdG5hbWU6IGludHJpbnNpY05hbWUsXG5cdFx0XHR2YWx1ZTogdmFsdWVcblx0XHR9O1xuXHR9XG5cblx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcignaW50cmluc2ljICcgKyBuYW1lICsgJyBkb2VzIG5vdCBleGlzdCEnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gR2V0SW50cmluc2ljKG5hbWUsIGFsbG93TWlzc2luZykge1xuXHRpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnIHx8IG5hbWUubGVuZ3RoID09PSAwKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2ludHJpbnNpYyBuYW1lIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nJyk7XG5cdH1cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHR5cGVvZiBhbGxvd01pc3NpbmcgIT09ICdib29sZWFuJykge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdcImFsbG93TWlzc2luZ1wiIGFyZ3VtZW50IG11c3QgYmUgYSBib29sZWFuJyk7XG5cdH1cblxuXHRpZiAoJGV4ZWMoL14lP1teJV0qJT8kLywgbmFtZSkgPT09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdgJWAgbWF5IG5vdCBiZSBwcmVzZW50IGFueXdoZXJlIGJ1dCBhdCB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgdGhlIGludHJpbnNpYyBuYW1lJyk7XG5cdH1cblx0dmFyIHBhcnRzID0gc3RyaW5nVG9QYXRoKG5hbWUpO1xuXHR2YXIgaW50cmluc2ljQmFzZU5hbWUgPSBwYXJ0cy5sZW5ndGggPiAwID8gcGFydHNbMF0gOiAnJztcblxuXHR2YXIgaW50cmluc2ljID0gZ2V0QmFzZUludHJpbnNpYygnJScgKyBpbnRyaW5zaWNCYXNlTmFtZSArICclJywgYWxsb3dNaXNzaW5nKTtcblx0dmFyIGludHJpbnNpY1JlYWxOYW1lID0gaW50cmluc2ljLm5hbWU7XG5cdHZhciB2YWx1ZSA9IGludHJpbnNpYy52YWx1ZTtcblx0dmFyIHNraXBGdXJ0aGVyQ2FjaGluZyA9IGZhbHNlO1xuXG5cdHZhciBhbGlhcyA9IGludHJpbnNpYy5hbGlhcztcblx0aWYgKGFsaWFzKSB7XG5cdFx0aW50cmluc2ljQmFzZU5hbWUgPSBhbGlhc1swXTtcblx0XHQkc3BsaWNlQXBwbHkocGFydHMsICRjb25jYXQoWzAsIDFdLCBhbGlhcykpO1xuXHR9XG5cblx0Zm9yICh2YXIgaSA9IDEsIGlzT3duID0gdHJ1ZTsgaSA8IHBhcnRzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIHBhcnQgPSBwYXJ0c1tpXTtcblx0XHR2YXIgZmlyc3QgPSAkc3RyU2xpY2UocGFydCwgMCwgMSk7XG5cdFx0dmFyIGxhc3QgPSAkc3RyU2xpY2UocGFydCwgLTEpO1xuXHRcdGlmIChcblx0XHRcdChcblx0XHRcdFx0KGZpcnN0ID09PSAnXCInIHx8IGZpcnN0ID09PSBcIidcIiB8fCBmaXJzdCA9PT0gJ2AnKVxuXHRcdFx0XHR8fCAobGFzdCA9PT0gJ1wiJyB8fCBsYXN0ID09PSBcIidcIiB8fCBsYXN0ID09PSAnYCcpXG5cdFx0XHQpXG5cdFx0XHQmJiBmaXJzdCAhPT0gbGFzdFxuXHRcdCkge1xuXHRcdFx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcigncHJvcGVydHkgbmFtZXMgd2l0aCBxdW90ZXMgbXVzdCBoYXZlIG1hdGNoaW5nIHF1b3RlcycpO1xuXHRcdH1cblx0XHRpZiAocGFydCA9PT0gJ2NvbnN0cnVjdG9yJyB8fCAhaXNPd24pIHtcblx0XHRcdHNraXBGdXJ0aGVyQ2FjaGluZyA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aW50cmluc2ljQmFzZU5hbWUgKz0gJy4nICsgcGFydDtcblx0XHRpbnRyaW5zaWNSZWFsTmFtZSA9ICclJyArIGludHJpbnNpY0Jhc2VOYW1lICsgJyUnO1xuXG5cdFx0aWYgKGhhc093bihJTlRSSU5TSUNTLCBpbnRyaW5zaWNSZWFsTmFtZSkpIHtcblx0XHRcdHZhbHVlID0gSU5UUklOU0lDU1tpbnRyaW5zaWNSZWFsTmFtZV07XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSAhPSBudWxsKSB7XG5cdFx0XHRpZiAoIShwYXJ0IGluIHZhbHVlKSkge1xuXHRcdFx0XHRpZiAoIWFsbG93TWlzc2luZykge1xuXHRcdFx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdiYXNlIGludHJpbnNpYyBmb3IgJyArIG5hbWUgKyAnIGV4aXN0cywgYnV0IHRoZSBwcm9wZXJ0eSBpcyBub3QgYXZhaWxhYmxlLicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2b2lkIHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHRcdGlmICgkZ09QRCAmJiAoaSArIDEpID49IHBhcnRzLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgZGVzYyA9ICRnT1BEKHZhbHVlLCBwYXJ0KTtcblx0XHRcdFx0aXNPd24gPSAhIWRlc2M7XG5cblx0XHRcdFx0Ly8gQnkgY29udmVudGlvbiwgd2hlbiBhIGRhdGEgcHJvcGVydHkgaXMgY29udmVydGVkIHRvIGFuIGFjY2Vzc29yXG5cdFx0XHRcdC8vIHByb3BlcnR5IHRvIGVtdWxhdGUgYSBkYXRhIHByb3BlcnR5IHRoYXQgZG9lcyBub3Qgc3VmZmVyIGZyb21cblx0XHRcdFx0Ly8gdGhlIG92ZXJyaWRlIG1pc3Rha2UsIHRoYXQgYWNjZXNzb3IncyBnZXR0ZXIgaXMgbWFya2VkIHdpdGhcblx0XHRcdFx0Ly8gYW4gYG9yaWdpbmFsVmFsdWVgIHByb3BlcnR5LiBIZXJlLCB3aGVuIHdlIGRldGVjdCB0aGlzLCB3ZVxuXHRcdFx0XHQvLyB1cGhvbGQgdGhlIGlsbHVzaW9uIGJ5IHByZXRlbmRpbmcgdG8gc2VlIHRoYXQgb3JpZ2luYWwgZGF0YVxuXHRcdFx0XHQvLyBwcm9wZXJ0eSwgaS5lLiwgcmV0dXJuaW5nIHRoZSB2YWx1ZSByYXRoZXIgdGhhbiB0aGUgZ2V0dGVyXG5cdFx0XHRcdC8vIGl0c2VsZi5cblx0XHRcdFx0aWYgKGlzT3duICYmICdnZXQnIGluIGRlc2MgJiYgISgnb3JpZ2luYWxWYWx1ZScgaW4gZGVzYy5nZXQpKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBkZXNjLmdldDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YWx1ZSA9IHZhbHVlW3BhcnRdO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpc093biA9IGhhc093bih2YWx1ZSwgcGFydCk7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWVbcGFydF07XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc093biAmJiAhc2tpcEZ1cnRoZXJDYWNoaW5nKSB7XG5cdFx0XHRcdElOVFJJTlNJQ1NbaW50cmluc2ljUmVhbE5hbWVdID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnZ2V0LWludHJpbnNpYycpO1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gR2V0SW50cmluc2ljKCclT2JqZWN0LmRlZmluZVByb3BlcnR5JScsIHRydWUpO1xuXG52YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9ycyA9IGZ1bmN0aW9uIGhhc1Byb3BlcnR5RGVzY3JpcHRvcnMoKSB7XG5cdGlmICgkZGVmaW5lUHJvcGVydHkpIHtcblx0XHR0cnkge1xuXHRcdFx0JGRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgdmFsdWU6IDEgfSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHQvLyBJRSA4IGhhcyBhIGJyb2tlbiBkZWZpbmVQcm9wZXJ0eVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5oYXNQcm9wZXJ0eURlc2NyaXB0b3JzLmhhc0FycmF5TGVuZ3RoRGVmaW5lQnVnID0gZnVuY3Rpb24gaGFzQXJyYXlMZW5ndGhEZWZpbmVCdWcoKSB7XG5cdC8vIG5vZGUgdjAuNiBoYXMgYSBidWcgd2hlcmUgYXJyYXkgbGVuZ3RocyBjYW4gYmUgU2V0IGJ1dCBub3QgRGVmaW5lZFxuXHRpZiAoIWhhc1Byb3BlcnR5RGVzY3JpcHRvcnMoKSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdHRyeSB7XG5cdFx0cmV0dXJuICRkZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgdmFsdWU6IDEgfSkubGVuZ3RoICE9PSAxO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0Ly8gSW4gRmlyZWZveCA0LTIyLCBkZWZpbmluZyBsZW5ndGggb24gYW4gYXJyYXkgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3JzO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJ2dldC1pbnRyaW5zaWMnKTtcblxudmFyICRnT1BEID0gR2V0SW50cmluc2ljKCclT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciUnLCB0cnVlKTtcblxuaWYgKCRnT1BEKSB7XG5cdHRyeSB7XG5cdFx0JGdPUEQoW10sICdsZW5ndGgnKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIElFIDggaGFzIGEgYnJva2VuIGdPUERcblx0XHQkZ09QRCA9IG51bGw7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSAkZ09QRDtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3JzID0gcmVxdWlyZSgnaGFzLXByb3BlcnR5LWRlc2NyaXB0b3JzJykoKTtcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJ2dldC1pbnRyaW5zaWMnKTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvcnMgJiYgR2V0SW50cmluc2ljKCclT2JqZWN0LmRlZmluZVByb3BlcnR5JScsIHRydWUpO1xuaWYgKCRkZWZpbmVQcm9wZXJ0eSkge1xuXHR0cnkge1xuXHRcdCRkZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IHZhbHVlOiAxIH0pO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0Ly8gSUUgOCBoYXMgYSBicm9rZW4gZGVmaW5lUHJvcGVydHlcblx0XHQkZGVmaW5lUHJvcGVydHkgPSBmYWxzZTtcblx0fVxufVxuXG52YXIgJFN5bnRheEVycm9yID0gR2V0SW50cmluc2ljKCclU3ludGF4RXJyb3IlJyk7XG52YXIgJFR5cGVFcnJvciA9IEdldEludHJpbnNpYygnJVR5cGVFcnJvciUnKTtcblxudmFyIGdvcGQgPSByZXF1aXJlKCdnb3BkJyk7XG5cbi8qKiBAdHlwZSB7KG9iajogUmVjb3JkPFByb3BlcnR5S2V5LCB1bmtub3duPiwgcHJvcGVydHk6IFByb3BlcnR5S2V5LCB2YWx1ZTogdW5rbm93biwgbm9uRW51bWVyYWJsZT86IGJvb2xlYW4gfCBudWxsLCBub25Xcml0YWJsZT86IGJvb2xlYW4gfCBudWxsLCBub25Db25maWd1cmFibGU/OiBib29sZWFuIHwgbnVsbCwgbG9vc2U/OiBib29sZWFuKSA9PiB2b2lkfSAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVEYXRhUHJvcGVydHkoXG5cdG9iaixcblx0cHJvcGVydHksXG5cdHZhbHVlXG4pIHtcblx0aWYgKCFvYmogfHwgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmogIT09ICdmdW5jdGlvbicpKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2BvYmpgIG11c3QgYmUgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb25gJyk7XG5cdH1cblx0aWYgKHR5cGVvZiBwcm9wZXJ0eSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BlcnR5ICE9PSAnc3ltYm9sJykge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdgcHJvcGVydHlgIG11c3QgYmUgYSBzdHJpbmcgb3IgYSBzeW1ib2xgJyk7XG5cdH1cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIHR5cGVvZiBhcmd1bWVudHNbM10gIT09ICdib29sZWFuJyAmJiBhcmd1bWVudHNbM10gIT09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignYG5vbkVudW1lcmFibGVgLCBpZiBwcm92aWRlZCwgbXVzdCBiZSBhIGJvb2xlYW4gb3IgbnVsbCcpO1xuXHR9XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gNCAmJiB0eXBlb2YgYXJndW1lbnRzWzRdICE9PSAnYm9vbGVhbicgJiYgYXJndW1lbnRzWzRdICE9PSBudWxsKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2Bub25Xcml0YWJsZWAsIGlmIHByb3ZpZGVkLCBtdXN0IGJlIGEgYm9vbGVhbiBvciBudWxsJyk7XG5cdH1cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiA1ICYmIHR5cGVvZiBhcmd1bWVudHNbNV0gIT09ICdib29sZWFuJyAmJiBhcmd1bWVudHNbNV0gIT09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignYG5vbkNvbmZpZ3VyYWJsZWAsIGlmIHByb3ZpZGVkLCBtdXN0IGJlIGEgYm9vbGVhbiBvciBudWxsJyk7XG5cdH1cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiA2ICYmIHR5cGVvZiBhcmd1bWVudHNbNl0gIT09ICdib29sZWFuJykge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdgbG9vc2VgLCBpZiBwcm92aWRlZCwgbXVzdCBiZSBhIGJvb2xlYW4nKTtcblx0fVxuXG5cdHZhciBub25FbnVtZXJhYmxlID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgPyBhcmd1bWVudHNbM10gOiBudWxsO1xuXHR2YXIgbm9uV3JpdGFibGUgPSBhcmd1bWVudHMubGVuZ3RoID4gNCA/IGFyZ3VtZW50c1s0XSA6IG51bGw7XG5cdHZhciBub25Db25maWd1cmFibGUgPSBhcmd1bWVudHMubGVuZ3RoID4gNSA/IGFyZ3VtZW50c1s1XSA6IG51bGw7XG5cdHZhciBsb29zZSA9IGFyZ3VtZW50cy5sZW5ndGggPiA2ID8gYXJndW1lbnRzWzZdIDogZmFsc2U7XG5cblx0LyogQHR5cGUge2ZhbHNlIHwgVHlwZWRQcm9wZXJ0eURlc2NyaXB0b3I8dW5rbm93bj59ICovXG5cdHZhciBkZXNjID0gISFnb3BkICYmIGdvcGQob2JqLCBwcm9wZXJ0eSk7XG5cblx0aWYgKCRkZWZpbmVQcm9wZXJ0eSkge1xuXHRcdCRkZWZpbmVQcm9wZXJ0eShvYmosIHByb3BlcnR5LCB7XG5cdFx0XHRjb25maWd1cmFibGU6IG5vbkNvbmZpZ3VyYWJsZSA9PT0gbnVsbCAmJiBkZXNjID8gZGVzYy5jb25maWd1cmFibGUgOiAhbm9uQ29uZmlndXJhYmxlLFxuXHRcdFx0ZW51bWVyYWJsZTogbm9uRW51bWVyYWJsZSA9PT0gbnVsbCAmJiBkZXNjID8gZGVzYy5lbnVtZXJhYmxlIDogIW5vbkVudW1lcmFibGUsXG5cdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHR3cml0YWJsZTogbm9uV3JpdGFibGUgPT09IG51bGwgJiYgZGVzYyA/IGRlc2Mud3JpdGFibGUgOiAhbm9uV3JpdGFibGVcblx0XHR9KTtcblx0fSBlbHNlIGlmIChsb29zZSB8fCAoIW5vbkVudW1lcmFibGUgJiYgIW5vbldyaXRhYmxlICYmICFub25Db25maWd1cmFibGUpKSB7XG5cdFx0Ly8gbXVzdCBmYWxsIGJhY2sgdG8gW1tTZXRdXSwgYW5kIHdhcyBub3QgZXhwbGljaXRseSBhc2tlZCB0byBtYWtlIG5vbi1lbnVtZXJhYmxlLCBub24td3JpdGFibGUsIG9yIG5vbi1jb25maWd1cmFibGVcblx0XHRvYmpbcHJvcGVydHldID0gdmFsdWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdUaGlzIGVudmlyb25tZW50IGRvZXMgbm90IHN1cHBvcnQgZGVmaW5pbmcgYSBwcm9wZXJ0eSBhcyBub24tY29uZmlndXJhYmxlLCBub24td3JpdGFibGUsIG9yIG5vbi1lbnVtZXJhYmxlLicpO1xuXHR9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJ2dldC1pbnRyaW5zaWMnKTtcbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtZGF0YS1wcm9wZXJ0eScpO1xudmFyIGhhc0Rlc2NyaXB0b3JzID0gcmVxdWlyZSgnaGFzLXByb3BlcnR5LWRlc2NyaXB0b3JzJykoKTtcbnZhciBnT1BEID0gcmVxdWlyZSgnZ29wZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IEdldEludHJpbnNpYygnJVR5cGVFcnJvciUnKTtcbnZhciAkZmxvb3IgPSBHZXRJbnRyaW5zaWMoJyVNYXRoLmZsb29yJScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldEZ1bmN0aW9uTGVuZ3RoKGZuLCBsZW5ndGgpIHtcblx0aWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdgZm5gIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdH1cblx0aWYgKHR5cGVvZiBsZW5ndGggIT09ICdudW1iZXInIHx8IGxlbmd0aCA8IDAgfHwgbGVuZ3RoID4gMHhGRkZGRkZGRiB8fCAkZmxvb3IobGVuZ3RoKSAhPT0gbGVuZ3RoKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2BsZW5ndGhgIG11c3QgYmUgYSBwb3NpdGl2ZSAzMi1iaXQgaW50ZWdlcicpO1xuXHR9XG5cblx0dmFyIGxvb3NlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgISFhcmd1bWVudHNbMl07XG5cblx0dmFyIGZ1bmN0aW9uTGVuZ3RoSXNDb25maWd1cmFibGUgPSB0cnVlO1xuXHR2YXIgZnVuY3Rpb25MZW5ndGhJc1dyaXRhYmxlID0gdHJ1ZTtcblx0aWYgKCdsZW5ndGgnIGluIGZuICYmIGdPUEQpIHtcblx0XHR2YXIgZGVzYyA9IGdPUEQoZm4sICdsZW5ndGgnKTtcblx0XHRpZiAoZGVzYyAmJiAhZGVzYy5jb25maWd1cmFibGUpIHtcblx0XHRcdGZ1bmN0aW9uTGVuZ3RoSXNDb25maWd1cmFibGUgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKGRlc2MgJiYgIWRlc2Mud3JpdGFibGUpIHtcblx0XHRcdGZ1bmN0aW9uTGVuZ3RoSXNXcml0YWJsZSA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdGlmIChmdW5jdGlvbkxlbmd0aElzQ29uZmlndXJhYmxlIHx8IGZ1bmN0aW9uTGVuZ3RoSXNXcml0YWJsZSB8fCAhbG9vc2UpIHtcblx0XHRpZiAoaGFzRGVzY3JpcHRvcnMpIHtcblx0XHRcdGRlZmluZShmbiwgJ2xlbmd0aCcsIGxlbmd0aCwgdHJ1ZSwgdHJ1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRlZmluZShmbiwgJ2xlbmd0aCcsIGxlbmd0aCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBmbjtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCdnZXQtaW50cmluc2ljJyk7XG52YXIgc2V0RnVuY3Rpb25MZW5ndGggPSByZXF1aXJlKCdzZXQtZnVuY3Rpb24tbGVuZ3RoJyk7XG5cbnZhciAkVHlwZUVycm9yID0gR2V0SW50cmluc2ljKCclVHlwZUVycm9yJScpO1xudmFyICRhcHBseSA9IEdldEludHJpbnNpYygnJUZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseSUnKTtcbnZhciAkY2FsbCA9IEdldEludHJpbnNpYygnJUZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsJScpO1xudmFyICRyZWZsZWN0QXBwbHkgPSBHZXRJbnRyaW5zaWMoJyVSZWZsZWN0LmFwcGx5JScsIHRydWUpIHx8IGJpbmQuY2FsbCgkY2FsbCwgJGFwcGx5KTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IEdldEludHJpbnNpYygnJU9iamVjdC5kZWZpbmVQcm9wZXJ0eSUnLCB0cnVlKTtcbnZhciAkbWF4ID0gR2V0SW50cmluc2ljKCclTWF0aC5tYXglJyk7XG5cbmlmICgkZGVmaW5lUHJvcGVydHkpIHtcblx0dHJ5IHtcblx0XHQkZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyB2YWx1ZTogMSB9KTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIElFIDggaGFzIGEgYnJva2VuIGRlZmluZVByb3BlcnR5XG5cdFx0JGRlZmluZVByb3BlcnR5ID0gbnVsbDtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbGxCaW5kKG9yaWdpbmFsRnVuY3Rpb24pIHtcblx0aWYgKHR5cGVvZiBvcmlnaW5hbEZ1bmN0aW9uICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2EgZnVuY3Rpb24gaXMgcmVxdWlyZWQnKTtcblx0fVxuXHR2YXIgZnVuYyA9ICRyZWZsZWN0QXBwbHkoYmluZCwgJGNhbGwsIGFyZ3VtZW50cyk7XG5cdHJldHVybiBzZXRGdW5jdGlvbkxlbmd0aChcblx0XHRmdW5jLFxuXHRcdDEgKyAkbWF4KDAsIG9yaWdpbmFsRnVuY3Rpb24ubGVuZ3RoIC0gKGFyZ3VtZW50cy5sZW5ndGggLSAxKSksXG5cdFx0dHJ1ZVxuXHQpO1xufTtcblxudmFyIGFwcGx5QmluZCA9IGZ1bmN0aW9uIGFwcGx5QmluZCgpIHtcblx0cmV0dXJuICRyZWZsZWN0QXBwbHkoYmluZCwgJGFwcGx5LCBhcmd1bWVudHMpO1xufTtcblxuaWYgKCRkZWZpbmVQcm9wZXJ0eSkge1xuXHQkZGVmaW5lUHJvcGVydHkobW9kdWxlLmV4cG9ydHMsICdhcHBseScsIHsgdmFsdWU6IGFwcGx5QmluZCB9KTtcbn0gZWxzZSB7XG5cdG1vZHVsZS5leHBvcnRzLmFwcGx5ID0gYXBwbHlCaW5kO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJ2dldC1pbnRyaW5zaWMnKTtcblxudmFyIGNhbGxCaW5kID0gcmVxdWlyZSgnLi8nKTtcblxudmFyICRpbmRleE9mID0gY2FsbEJpbmQoR2V0SW50cmluc2ljKCdTdHJpbmcucHJvdG90eXBlLmluZGV4T2YnKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2FsbEJvdW5kSW50cmluc2ljKG5hbWUsIGFsbG93TWlzc2luZykge1xuXHR2YXIgaW50cmluc2ljID0gR2V0SW50cmluc2ljKG5hbWUsICEhYWxsb3dNaXNzaW5nKTtcblx0aWYgKHR5cGVvZiBpbnRyaW5zaWMgPT09ICdmdW5jdGlvbicgJiYgJGluZGV4T2YobmFtZSwgJy5wcm90b3R5cGUuJykgPiAtMSkge1xuXHRcdHJldHVybiBjYWxsQmluZChpbnRyaW5zaWMpO1xuXHR9XG5cdHJldHVybiBpbnRyaW5zaWM7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIGhhc1RvU3RyaW5nVGFnID0gcmVxdWlyZSgnaGFzLXRvc3RyaW5ndGFnL3NoYW1zJykoKTtcbnZhciBjYWxsQm91bmQgPSByZXF1aXJlKCdjYWxsLWJpbmQvY2FsbEJvdW5kJyk7XG5cbnZhciAkdG9TdHJpbmcgPSBjYWxsQm91bmQoJ09iamVjdC5wcm90b3R5cGUudG9TdHJpbmcnKTtcblxudmFyIGlzU3RhbmRhcmRBcmd1bWVudHMgPSBmdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuXHRpZiAoaGFzVG9TdHJpbmdUYWcgJiYgdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBTeW1ib2wudG9TdHJpbmdUYWcgaW4gdmFsdWUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuICR0b1N0cmluZyh2YWx1ZSkgPT09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xufTtcblxudmFyIGlzTGVnYWN5QXJndW1lbnRzID0gZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcblx0aWYgKGlzU3RhbmRhcmRBcmd1bWVudHModmFsdWUpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIHZhbHVlICE9PSBudWxsICYmXG5cdFx0dHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuXHRcdHR5cGVvZiB2YWx1ZS5sZW5ndGggPT09ICdudW1iZXInICYmXG5cdFx0dmFsdWUubGVuZ3RoID49IDAgJiZcblx0XHQkdG9TdHJpbmcodmFsdWUpICE9PSAnW29iamVjdCBBcnJheV0nICYmXG5cdFx0JHRvU3RyaW5nKHZhbHVlLmNhbGxlZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59O1xuXG52YXIgc3VwcG9ydHNTdGFuZGFyZEFyZ3VtZW50cyA9IChmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBpc1N0YW5kYXJkQXJndW1lbnRzKGFyZ3VtZW50cyk7XG59KCkpO1xuXG5pc1N0YW5kYXJkQXJndW1lbnRzLmlzTGVnYWN5QXJndW1lbnRzID0gaXNMZWdhY3lBcmd1bWVudHM7IC8vIGZvciB0ZXN0c1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN1cHBvcnRzU3RhbmRhcmRBcmd1bWVudHMgPyBpc1N0YW5kYXJkQXJndW1lbnRzIDogaXNMZWdhY3lBcmd1bWVudHM7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIga2V5cyA9IHJlcXVpcmUoJ29iamVjdC1rZXlzJyk7XG52YXIgaGFzU3ltYm9scyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbCgnZm9vJykgPT09ICdzeW1ib2wnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGNvbmNhdCA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQ7XG52YXIgZGVmaW5lRGF0YVByb3BlcnR5ID0gcmVxdWlyZSgnZGVmaW5lLWRhdGEtcHJvcGVydHknKTtcblxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiAoZm4pIHtcblx0cmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0ci5jYWxsKGZuKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn07XG5cbnZhciBzdXBwb3J0c0Rlc2NyaXB0b3JzID0gcmVxdWlyZSgnaGFzLXByb3BlcnR5LWRlc2NyaXB0b3JzJykoKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZSwgdmFsdWUsIHByZWRpY2F0ZSkge1xuXHRpZiAobmFtZSBpbiBvYmplY3QpIHtcblx0XHRpZiAocHJlZGljYXRlID09PSB0cnVlKSB7XG5cdFx0XHRpZiAob2JqZWN0W25hbWVdID09PSB2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICghaXNGdW5jdGlvbihwcmVkaWNhdGUpIHx8ICFwcmVkaWNhdGUoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdGlmIChzdXBwb3J0c0Rlc2NyaXB0b3JzKSB7XG5cdFx0ZGVmaW5lRGF0YVByb3BlcnR5KG9iamVjdCwgbmFtZSwgdmFsdWUsIHRydWUpO1xuXHR9IGVsc2Uge1xuXHRcdGRlZmluZURhdGFQcm9wZXJ0eShvYmplY3QsIG5hbWUsIHZhbHVlKTtcblx0fVxufTtcblxudmFyIGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqZWN0LCBtYXApIHtcblx0dmFyIHByZWRpY2F0ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXHR2YXIgcHJvcHMgPSBrZXlzKG1hcCk7XG5cdGlmIChoYXNTeW1ib2xzKSB7XG5cdFx0cHJvcHMgPSBjb25jYXQuY2FsbChwcm9wcywgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhtYXApKTtcblx0fVxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0ZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wc1tpXSwgbWFwW3Byb3BzW2ldXSwgcHJlZGljYXRlc1twcm9wc1tpXV0pO1xuXHR9XG59O1xuXG5kZWZpbmVQcm9wZXJ0aWVzLnN1cHBvcnRzRGVzY3JpcHRvcnMgPSAhIXN1cHBvcnRzRGVzY3JpcHRvcnM7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydGllcztcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBudW1iZXJJc05hTiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpcyhhLCBiKSB7XG5cdGlmIChhID09PSAwICYmIGIgPT09IDApIHtcblx0XHRyZXR1cm4gMSAvIGEgPT09IDEgLyBiO1xuXHR9XG5cdGlmIChhID09PSBiKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0aWYgKG51bWJlcklzTmFOKGEpICYmIG51bWJlcklzTmFOKGIpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFBvbHlmaWxsKCkge1xuXHRyZXR1cm4gdHlwZW9mIE9iamVjdC5pcyA9PT0gJ2Z1bmN0aW9uJyA/IE9iamVjdC5pcyA6IGltcGxlbWVudGF0aW9uO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBnZXRQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoaW1PYmplY3RJcygpIHtcblx0dmFyIHBvbHlmaWxsID0gZ2V0UG9seWZpbGwoKTtcblx0ZGVmaW5lKE9iamVjdCwgeyBpczogcG9seWZpbGwgfSwge1xuXHRcdGlzOiBmdW5jdGlvbiB0ZXN0T2JqZWN0SXMoKSB7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmlzICE9PSBwb2x5ZmlsbDtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gcG9seWZpbGw7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgY2FsbEJpbmQgPSByZXF1aXJlKCdjYWxsLWJpbmQnKTtcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xudmFyIHNoaW0gPSByZXF1aXJlKCcuL3NoaW0nKTtcblxudmFyIHBvbHlmaWxsID0gY2FsbEJpbmQoZ2V0UG9seWZpbGwoKSwgT2JqZWN0KTtcblxuZGVmaW5lKHBvbHlmaWxsLCB7XG5cdGdldFBvbHlmaWxsOiBnZXRQb2x5ZmlsbCxcblx0aW1wbGVtZW50YXRpb246IGltcGxlbWVudGF0aW9uLFxuXHRzaGltOiBzaGltXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBwb2x5ZmlsbDtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBjYWxsQm91bmQgPSByZXF1aXJlKCdjYWxsLWJpbmQvY2FsbEJvdW5kJyk7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSByZXF1aXJlKCdoYXMtdG9zdHJpbmd0YWcvc2hhbXMnKSgpO1xudmFyIGhhcztcbnZhciAkZXhlYztcbnZhciBpc1JlZ2V4TWFya2VyO1xudmFyIGJhZFN0cmluZ2lmaWVyO1xuXG5pZiAoaGFzVG9TdHJpbmdUYWcpIHtcblx0aGFzID0gY2FsbEJvdW5kKCdPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5Jyk7XG5cdCRleGVjID0gY2FsbEJvdW5kKCdSZWdFeHAucHJvdG90eXBlLmV4ZWMnKTtcblx0aXNSZWdleE1hcmtlciA9IHt9O1xuXG5cdHZhciB0aHJvd1JlZ2V4TWFya2VyID0gZnVuY3Rpb24gKCkge1xuXHRcdHRocm93IGlzUmVnZXhNYXJrZXI7XG5cdH07XG5cdGJhZFN0cmluZ2lmaWVyID0ge1xuXHRcdHRvU3RyaW5nOiB0aHJvd1JlZ2V4TWFya2VyLFxuXHRcdHZhbHVlT2Y6IHRocm93UmVnZXhNYXJrZXJcblx0fTtcblxuXHRpZiAodHlwZW9mIFN5bWJvbC50b1ByaW1pdGl2ZSA9PT0gJ3N5bWJvbCcpIHtcblx0XHRiYWRTdHJpbmdpZmllcltTeW1ib2wudG9QcmltaXRpdmVdID0gdGhyb3dSZWdleE1hcmtlcjtcblx0fVxufVxuXG52YXIgJHRvU3RyaW5nID0gY2FsbEJvdW5kKCdPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgcmVnZXhDbGFzcyA9ICdbb2JqZWN0IFJlZ0V4cF0nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1RvU3RyaW5nVGFnXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuXHQ/IGZ1bmN0aW9uIGlzUmVnZXgodmFsdWUpIHtcblx0XHRpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR2YXIgZGVzY3JpcHRvciA9IGdPUEQodmFsdWUsICdsYXN0SW5kZXgnKTtcblx0XHR2YXIgaGFzTGFzdEluZGV4RGF0YVByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBoYXMoZGVzY3JpcHRvciwgJ3ZhbHVlJyk7XG5cdFx0aWYgKCFoYXNMYXN0SW5kZXhEYXRhUHJvcGVydHkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0JGV4ZWModmFsdWUsIGJhZFN0cmluZ2lmaWVyKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gZSA9PT0gaXNSZWdleE1hcmtlcjtcblx0XHR9XG5cdH1cblx0OiBmdW5jdGlvbiBpc1JlZ2V4KHZhbHVlKSB7XG5cdFx0Ly8gSW4gb2xkZXIgYnJvd3NlcnMsIHR5cGVvZiByZWdleCBpbmNvcnJlY3RseSByZXR1cm5zICdmdW5jdGlvbidcblx0XHRpZiAoIXZhbHVlIHx8ICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJykpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gJHRvU3RyaW5nKHZhbHVlKSA9PT0gcmVnZXhDbGFzcztcblx0fTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBmdW5jdGlvbnNIYXZlTmFtZXMgPSBmdW5jdGlvbiBmdW5jdGlvbnNIYXZlTmFtZXMoKSB7XG5cdHJldHVybiB0eXBlb2YgZnVuY3Rpb24gZigpIHt9Lm5hbWUgPT09ICdzdHJpbmcnO1xufTtcblxudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuaWYgKGdPUEQpIHtcblx0dHJ5IHtcblx0XHRnT1BEKFtdLCAnbGVuZ3RoJyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQvLyBJRSA4IGhhcyBhIGJyb2tlbiBnT1BEXG5cdFx0Z09QRCA9IG51bGw7XG5cdH1cbn1cblxuZnVuY3Rpb25zSGF2ZU5hbWVzLmZ1bmN0aW9uc0hhdmVDb25maWd1cmFibGVOYW1lcyA9IGZ1bmN0aW9uIGZ1bmN0aW9uc0hhdmVDb25maWd1cmFibGVOYW1lcygpIHtcblx0aWYgKCFmdW5jdGlvbnNIYXZlTmFtZXMoKSB8fCAhZ09QRCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHR2YXIgZGVzYyA9IGdPUEQoZnVuY3Rpb24gKCkge30sICduYW1lJyk7XG5cdHJldHVybiAhIWRlc2MgJiYgISFkZXNjLmNvbmZpZ3VyYWJsZTtcbn07XG5cbnZhciAkYmluZCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kO1xuXG5mdW5jdGlvbnNIYXZlTmFtZXMuYm91bmRGdW5jdGlvbnNIYXZlTmFtZXMgPSBmdW5jdGlvbiBib3VuZEZ1bmN0aW9uc0hhdmVOYW1lcygpIHtcblx0cmV0dXJuIGZ1bmN0aW9uc0hhdmVOYW1lcygpICYmIHR5cGVvZiAkYmluZCA9PT0gJ2Z1bmN0aW9uJyAmJiBmdW5jdGlvbiBmKCkge30uYmluZCgpLm5hbWUgIT09ICcnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbnNIYXZlTmFtZXM7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLWRhdGEtcHJvcGVydHknKTtcbnZhciBoYXNEZXNjcmlwdG9ycyA9IHJlcXVpcmUoJ2hhcy1wcm9wZXJ0eS1kZXNjcmlwdG9ycycpKCk7XG52YXIgZnVuY3Rpb25zSGF2ZUNvbmZpZ3VyYWJsZU5hbWVzID0gcmVxdWlyZSgnZnVuY3Rpb25zLWhhdmUtbmFtZXMnKS5mdW5jdGlvbnNIYXZlQ29uZmlndXJhYmxlTmFtZXMoKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0RnVuY3Rpb25OYW1lKGZuLCBuYW1lKSB7XG5cdGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignYGZuYCBpcyBub3QgYSBmdW5jdGlvbicpO1xuXHR9XG5cdHZhciBsb29zZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmICEhYXJndW1lbnRzWzJdO1xuXHRpZiAoIWxvb3NlIHx8IGZ1bmN0aW9uc0hhdmVDb25maWd1cmFibGVOYW1lcykge1xuXHRcdGlmIChoYXNEZXNjcmlwdG9ycykge1xuXHRcdFx0ZGVmaW5lKGZuLCAnbmFtZScsIG5hbWUsIHRydWUsIHRydWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZWZpbmUoZm4sICduYW1lJywgbmFtZSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBmbjtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2V0RnVuY3Rpb25OYW1lID0gcmVxdWlyZSgnc2V0LWZ1bmN0aW9uLW5hbWUnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBzZXRGdW5jdGlvbk5hbWUoZnVuY3Rpb24gZmxhZ3MoKSB7XG5cdGlmICh0aGlzICE9IG51bGwgJiYgdGhpcyAhPT0gJE9iamVjdCh0aGlzKSkge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdSZWdFeHAucHJvdG90eXBlLmZsYWdzIGdldHRlciBjYWxsZWQgb24gbm9uLW9iamVjdCcpO1xuXHR9XG5cdHZhciByZXN1bHQgPSAnJztcblx0aWYgKHRoaXMuaGFzSW5kaWNlcykge1xuXHRcdHJlc3VsdCArPSAnZCc7XG5cdH1cblx0aWYgKHRoaXMuZ2xvYmFsKSB7XG5cdFx0cmVzdWx0ICs9ICdnJztcblx0fVxuXHRpZiAodGhpcy5pZ25vcmVDYXNlKSB7XG5cdFx0cmVzdWx0ICs9ICdpJztcblx0fVxuXHRpZiAodGhpcy5tdWx0aWxpbmUpIHtcblx0XHRyZXN1bHQgKz0gJ20nO1xuXHR9XG5cdGlmICh0aGlzLmRvdEFsbCkge1xuXHRcdHJlc3VsdCArPSAncyc7XG5cdH1cblx0aWYgKHRoaXMudW5pY29kZSkge1xuXHRcdHJlc3VsdCArPSAndSc7XG5cdH1cblx0aWYgKHRoaXMudW5pY29kZVNldHMpIHtcblx0XHRyZXN1bHQgKz0gJ3YnO1xuXHR9XG5cdGlmICh0aGlzLnN0aWNreSkge1xuXHRcdHJlc3VsdCArPSAneSc7XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn0sICdnZXQgZmxhZ3MnLCB0cnVlKTtcblxuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xuXG52YXIgc3VwcG9ydHNEZXNjcmlwdG9ycyA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJykuc3VwcG9ydHNEZXNjcmlwdG9ycztcbnZhciAkZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0UG9seWZpbGwoKSB7XG5cdGlmIChzdXBwb3J0c0Rlc2NyaXB0b3JzICYmICgvYS9taWcpLmZsYWdzID09PSAnZ2ltJykge1xuXHRcdHZhciBkZXNjcmlwdG9yID0gJGdPUEQoUmVnRXhwLnByb3RvdHlwZSwgJ2ZsYWdzJyk7XG5cdFx0aWYgKFxuXHRcdFx0ZGVzY3JpcHRvclxuXHRcdFx0JiYgdHlwZW9mIGRlc2NyaXB0b3IuZ2V0ID09PSAnZnVuY3Rpb24nXG5cdFx0XHQmJiB0eXBlb2YgUmVnRXhwLnByb3RvdHlwZS5kb3RBbGwgPT09ICdib29sZWFuJ1xuXHRcdFx0JiYgdHlwZW9mIFJlZ0V4cC5wcm90b3R5cGUuaGFzSW5kaWNlcyA9PT0gJ2Jvb2xlYW4nXG5cdFx0KSB7XG5cdFx0XHQvKiBlc2xpbnQgZ2V0dGVyLXJldHVybjogMCAqL1xuXHRcdFx0dmFyIGNhbGxzID0gJyc7XG5cdFx0XHR2YXIgbyA9IHt9O1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sICdoYXNJbmRpY2VzJywge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRjYWxscyArPSAnZCc7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sICdzdGlja3knLCB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGNhbGxzICs9ICd5Jztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRpZiAoY2FsbHMgPT09ICdkeScpIHtcblx0XHRcdFx0cmV0dXJuIGRlc2NyaXB0b3IuZ2V0O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gaW1wbGVtZW50YXRpb247XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIHN1cHBvcnRzRGVzY3JpcHRvcnMgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpLnN1cHBvcnRzRGVzY3JpcHRvcnM7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgVHlwZUVyciA9IFR5cGVFcnJvcjtcbnZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciByZWdleCA9IC9hLztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaGltRmxhZ3MoKSB7XG5cdGlmICghc3VwcG9ydHNEZXNjcmlwdG9ycyB8fCAhZ2V0UHJvdG8pIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycignUmVnRXhwLnByb3RvdHlwZS5mbGFncyByZXF1aXJlcyBhIHRydWUgRVM1IGVudmlyb25tZW50IHRoYXQgc3VwcG9ydHMgcHJvcGVydHkgZGVzY3JpcHRvcnMnKTtcblx0fVxuXHR2YXIgcG9seWZpbGwgPSBnZXRQb2x5ZmlsbCgpO1xuXHR2YXIgcHJvdG8gPSBnZXRQcm90byhyZWdleCk7XG5cdHZhciBkZXNjcmlwdG9yID0gZ09QRChwcm90bywgJ2ZsYWdzJyk7XG5cdGlmICghZGVzY3JpcHRvciB8fCBkZXNjcmlwdG9yLmdldCAhPT0gcG9seWZpbGwpIHtcblx0XHRkZWZpbmVQcm9wZXJ0eShwcm90bywgJ2ZsYWdzJywge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHRnZXQ6IHBvbHlmaWxsXG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIHBvbHlmaWxsO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGNhbGxCaW5kID0gcmVxdWlyZSgnY2FsbC1iaW5kJyk7XG5cbnZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcbnZhciBnZXRQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcbnZhciBzaGltID0gcmVxdWlyZSgnLi9zaGltJyk7XG5cbnZhciBmbGFnc0JvdW5kID0gY2FsbEJpbmQoZ2V0UG9seWZpbGwoKSk7XG5cbmRlZmluZShmbGFnc0JvdW5kLCB7XG5cdGdldFBvbHlmaWxsOiBnZXRQb2x5ZmlsbCxcblx0aW1wbGVtZW50YXRpb246IGltcGxlbWVudGF0aW9uLFxuXHRzaGltOiBzaGltXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmbGFnc0JvdW5kO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIGdldERheSA9IERhdGUucHJvdG90eXBlLmdldERheTtcbnZhciB0cnlEYXRlT2JqZWN0ID0gZnVuY3Rpb24gdHJ5RGF0ZUdldERheUNhbGwodmFsdWUpIHtcblx0dHJ5IHtcblx0XHRnZXREYXkuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZGF0ZUNsYXNzID0gJ1tvYmplY3QgRGF0ZV0nO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gcmVxdWlyZSgnaGFzLXRvc3RyaW5ndGFnL3NoYW1zJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0RhdGVPYmplY3QodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIGhhc1RvU3RyaW5nVGFnID8gdHJ5RGF0ZU9iamVjdCh2YWx1ZSkgOiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gZGF0ZUNsYXNzO1xufTtcbiIsICJ2YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJ29iamVjdC1rZXlzJyk7XG52YXIgaXNBcmd1bWVudHMgPSByZXF1aXJlKCdpcy1hcmd1bWVudHMnKTtcbnZhciBpcyA9IHJlcXVpcmUoJ29iamVjdC1pcycpO1xudmFyIGlzUmVnZXggPSByZXF1aXJlKCdpcy1yZWdleCcpO1xudmFyIGZsYWdzID0gcmVxdWlyZSgncmVnZXhwLnByb3RvdHlwZS5mbGFncycpO1xudmFyIGlzRGF0ZSA9IHJlcXVpcmUoJ2lzLWRhdGUtb2JqZWN0Jyk7XG5cbnZhciBnZXRUaW1lID0gRGF0ZS5wcm90b3R5cGUuZ2V0VGltZTtcblxuZnVuY3Rpb24gZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG9wdGlvbnMpIHtcbiAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIC8vIDcuMS4gQWxsIGlkZW50aWNhbCB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGFzIGRldGVybWluZWQgYnkgPT09LlxuICBpZiAob3B0cy5zdHJpY3QgPyBpcyhhY3R1YWwsIGV4cGVjdGVkKSA6IGFjdHVhbCA9PT0gZXhwZWN0ZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIDcuMy4gT3RoZXIgcGFpcnMgdGhhdCBkbyBub3QgYm90aCBwYXNzIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JywgZXF1aXZhbGVuY2UgaXMgZGV0ZXJtaW5lZCBieSA9PS5cbiAgaWYgKCFhY3R1YWwgfHwgIWV4cGVjdGVkIHx8ICh0eXBlb2YgYWN0dWFsICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgZXhwZWN0ZWQgIT09ICdvYmplY3QnKSkge1xuICAgIHJldHVybiBvcHRzLnN0cmljdCA/IGlzKGFjdHVhbCwgZXhwZWN0ZWQpIDogYWN0dWFsID09IGV4cGVjdGVkO1xuICB9XG5cbiAgLypcbiAgICogNy40LiBGb3IgYWxsIG90aGVyIE9iamVjdCBwYWlycywgaW5jbHVkaW5nIEFycmF5IG9iamVjdHMsIGVxdWl2YWxlbmNlIGlzXG4gICAqIGRldGVybWluZWQgYnkgaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChhcyB2ZXJpZmllZFxuICAgKiB3aXRoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCksIHRoZSBzYW1lIHNldCBvZiBrZXlzXG4gICAqIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLCBlcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnlcbiAgICogY29ycmVzcG9uZGluZyBrZXksIGFuZCBhbiBpZGVudGljYWwgJ3Byb3RvdHlwZScgcHJvcGVydHkuIE5vdGU6IHRoaXNcbiAgICogYWNjb3VudHMgZm9yIGJvdGggbmFtZWQgYW5kIGluZGV4ZWQgcHJvcGVydGllcyBvbiBBcnJheXMuXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgcmV0dXJuIG9iakVxdWl2KGFjdHVhbCwgZXhwZWN0ZWQsIG9wdHMpO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZE9yTnVsbCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIoeCkge1xuICBpZiAoIXggfHwgdHlwZW9mIHggIT09ICdvYmplY3QnIHx8IHR5cGVvZiB4Lmxlbmd0aCAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHR5cGVvZiB4LmNvcHkgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIHguc2xpY2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHgubGVuZ3RoID4gMCAmJiB0eXBlb2YgeFswXSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIG9iakVxdWl2KGEsIGIsIG9wdHMpIHtcbiAgLyogZXNsaW50IG1heC1zdGF0ZW1lbnRzOiBbMiwgNTBdICovXG4gIHZhciBpLCBrZXk7XG4gIGlmICh0eXBlb2YgYSAhPT0gdHlwZW9mIGIpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChpc1VuZGVmaW5lZE9yTnVsbChhKSB8fCBpc1VuZGVmaW5lZE9yTnVsbChiKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyBhbiBpZGVudGljYWwgJ3Byb3RvdHlwZScgcHJvcGVydHkuXG4gIGlmIChhLnByb3RvdHlwZSAhPT0gYi5wcm90b3R5cGUpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKGlzQXJndW1lbnRzKGEpICE9PSBpc0FyZ3VtZW50cyhiKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICB2YXIgYUlzUmVnZXggPSBpc1JlZ2V4KGEpO1xuICB2YXIgYklzUmVnZXggPSBpc1JlZ2V4KGIpO1xuICBpZiAoYUlzUmVnZXggIT09IGJJc1JlZ2V4KSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoYUlzUmVnZXggfHwgYklzUmVnZXgpIHtcbiAgICByZXR1cm4gYS5zb3VyY2UgPT09IGIuc291cmNlICYmIGZsYWdzKGEpID09PSBmbGFncyhiKTtcbiAgfVxuXG4gIGlmIChpc0RhdGUoYSkgJiYgaXNEYXRlKGIpKSB7XG4gICAgcmV0dXJuIGdldFRpbWUuY2FsbChhKSA9PT0gZ2V0VGltZS5jYWxsKGIpO1xuICB9XG5cbiAgdmFyIGFJc0J1ZmZlciA9IGlzQnVmZmVyKGEpO1xuICB2YXIgYklzQnVmZmVyID0gaXNCdWZmZXIoYik7XG4gIGlmIChhSXNCdWZmZXIgIT09IGJJc0J1ZmZlcikgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKGFJc0J1ZmZlciB8fCBiSXNCdWZmZXIpIHsgLy8gJiYgd291bGQgd29yayB0b28sIGJlY2F1c2UgYm90aCBhcmUgdHJ1ZSBvciBib3RoIGZhbHNlIGhlcmVcbiAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYVtpXSAhPT0gYltpXSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIGEgIT09IHR5cGVvZiBiKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHRyeSB7XG4gICAgdmFyIGthID0gb2JqZWN0S2V5cyhhKTtcbiAgICB2YXIga2IgPSBvYmplY3RLZXlzKGIpO1xuICB9IGNhdGNoIChlKSB7IC8vIGhhcHBlbnMgd2hlbiBvbmUgaXMgYSBzdHJpbmcgbGl0ZXJhbCBhbmQgdGhlIG90aGVyIGlzbid0XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIGhhdmluZyB0aGUgc2FtZSBudW1iZXIgb2Ygb3duZWQgcHJvcGVydGllcyAoa2V5cyBpbmNvcnBvcmF0ZXMgaGFzT3duUHJvcGVydHkpXG4gIGlmIChrYS5sZW5ndGggIT09IGtiLmxlbmd0aCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyB0aGUgc2FtZSBzZXQgb2Yga2V5cyAoYWx0aG91Z2ggbm90IG5lY2Vzc2FyaWx5IHRoZSBzYW1lIG9yZGVyKSxcbiAga2Euc29ydCgpO1xuICBrYi5zb3J0KCk7XG4gIC8vIH5+fmNoZWFwIGtleSB0ZXN0XG4gIGZvciAoaSA9IGthLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKGthW2ldICE9IGtiW2ldKSB7IHJldHVybiBmYWxzZTsgfVxuICB9XG4gIC8vIGVxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeSBjb3JyZXNwb25kaW5nIGtleSwgYW5kIH5+fnBvc3NpYmx5IGV4cGVuc2l2ZSBkZWVwIHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBrZXkgPSBrYVtpXTtcbiAgICBpZiAoIWRlZXBFcXVhbChhW2tleV0sIGJba2V5XSwgb3B0cykpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWVwRXF1YWw7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IGRlc2VyaWFsaXplIH0gZnJvbSBcIi4uL3NlcmlhbGl6ZXJcIjtcbmltcG9ydCB7IHNhbml0aXplIH0gZnJvbSBcIi4uL3Nhbml0aXplclwiO1xuXG4vLyBub3RpY2UgdGhlIG1hbGljaW91cyBzY3JpcHQgYW5kIHRoZSBtYWxpY2lvdXMgY3NzIHN0eWxlIHRhZ1xuY29uc3QgVEVYVF9GUk9NX1NFUlZFUl8xID0gJzxwIHN0eWxlPVwicG9zaXRpb246IGZpeGVkXCI+dGhpcyBpcyBzb21lIHNpbXBsZSB0ZXh0PC9wPjxwIGNsYXNzPVwibWFsaWNpb3VzXCI+dGhhdCBjYW1lIGZyb20gdGhlIHNlcnZlcjwvcD48cD5hbmQgaXMgYmVpbmcgcGFyc2VkIGJ5IHRleHQgZW5naW5lPC9wPjxzY3JpcHQ+d2luZG93Lk1BTElDSU9VUyA9IHRydWU8L3NjcmlwdD4nO1xuY29uc3QgVEVYVF9GUk9NX1NFUlZFUl8yID0gJzxpbWcgc3JjPVwiaHR0cHM6Ly9leHRlcm5hbC1zZXJ2ZXIuY29tXCIgLz48cD5pbnZhbGlkIGh0bWw8L3A+PC9wPic7XG5jb25zdCBURVhUX0ZST01fU0VSVkVSXzMgPSAnPHA+Y2xpY2sgPGEgaHJlZj1cImh0dHBzOi8vZXh0ZXJuYWwtc2VydmVyLmNvbS9tYWxpY2lvdXNcIj5oZXJlPC9hPiBvciBoZXJlIDxhIGhyZWY9XCIuL3NhZmVcIj5oZXJlPC9hPiA8L3A+JztcbmNvbnN0IFRFWFRfRlJPTV9TRVJWRVJfNCA9ICc8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWhhcHB5XCI+PHAgY2xhc3M9XCJyaWNoLXRleHQtLXNwYXJrbGluZy10ZXh0XCI+YWxsb3dlZCBjdXN0b20gY2xhc3M8L3A+PC9kaXY+PGRpdiBjbGFzcz1cImNvbnRhaW5lci1zYWRcIj48cD5pbnZhbGlkIGNvbnRhaW5lciB0eXBlPC9wPjwvZGl2PjxwPm91dHNpZGUgb2YgY29udGFpbmVyPC9wPic7XG5jb25zdCBURVhUX0ZST01fU0VSVkVSXzUgPSAnPGEgY2xhc3M9XCJpbWFnZVwiPjxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj48ZGl2IGNsYXNzPVwiaW1hZ2UtcGFkXCIgc3R5bGU9XCJwYWRkaW5nLWJvdHRvbTogNTYuMjUlXCI+PGltZyBhbHQ9XCJleGFtcGxlXCIgZGF0YS1zcmMtaGVpZ2h0PVwiNzIwXCIgZGF0YS1zcmMtaWQ9XCJGSUxFSURcIiBkYXRhLXNyYy13aWR0aD1cIjEyODBcIiBsb2FkaW5nPVwibGF6eVwiPjwvZGl2PjwvZGl2PjwvYT4nO1xuXG4vLyB0aGlzIGlzIHNhZmUgdG8gdXNlIGluIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXG5jb25zdCBzYW5pdGl6ZWQxID0gc2FuaXRpemUoe1xuICBmaWxlUmVzb2x2ZXI6IG51bGwsXG59LCB7XG4gIHN1cHBvcnRlZENvbnRhaW5lcnM6IFtdLFxuICBzdXBwb3J0ZWRDdXN0b21zOiBbXSxcbiAgc3VwcG9ydGVkUmljaENsYXNzZXM6IFtdLFxuICBzdXBwb3J0ZWRUYWJsZXM6IFtdLFxuICBzdXBwb3J0c0NvbnRhaW5lcnM6IHRydWUsXG4gIHN1cHBvcnRzQ3VzdG9tOiB0cnVlLFxuICBzdXBwb3J0c0N1c3RvbVN0eWxlczogdHJ1ZSxcbiAgc3VwcG9ydHNFeHRlcm5hbExpbmtzOiB0cnVlLFxuICBzdXBwb3J0c0ZpbGVzOiB0cnVlLFxuICBzdXBwb3J0c0ZpbGVzQWNjZXB0OiBudWxsLFxuICBzdXBwb3J0c0ltYWdlczogdHJ1ZSxcbiAgc3VwcG9ydHNJbWFnZXNBY2NlcHQ6IG51bGwsXG4gIHN1cHBvcnRzTGlua3M6IHRydWUsXG4gIHN1cHBvcnRzTGlzdHM6IHRydWUsXG4gIHN1cHBvcnRzUXVvdGU6IHRydWUsXG4gIHN1cHBvcnRzUmljaENsYXNzZXM6IHRydWUsXG4gIHN1cHBvcnRzVGFibGVzOiB0cnVlLFxuICBzdXBwb3J0c1RlbXBsYXRpbmc6IHRydWUsXG4gIHN1cHBvcnRzVGl0bGU6IHRydWUsXG4gIHN1cHBvcnRzVmlkZW9zOiB0cnVlLFxufSwgVEVYVF9GUk9NX1NFUlZFUl8xKTtcblxuY29uc3Qgc2FuaXRpemVkMiA9IHNhbml0aXplKHtcbiAgZmlsZVJlc29sdmVyOiBudWxsLFxufSwge1xuICBzdXBwb3J0ZWRDb250YWluZXJzOiBbXSxcbiAgc3VwcG9ydGVkQ3VzdG9tczogW10sXG4gIHN1cHBvcnRlZFJpY2hDbGFzc2VzOiBbXSxcbiAgc3VwcG9ydGVkVGFibGVzOiBbXSxcbiAgc3VwcG9ydHNDb250YWluZXJzOiB0cnVlLFxuICBzdXBwb3J0c0N1c3RvbTogdHJ1ZSxcbiAgc3VwcG9ydHNDdXN0b21TdHlsZXM6IHRydWUsXG4gIHN1cHBvcnRzRXh0ZXJuYWxMaW5rczogdHJ1ZSxcbiAgc3VwcG9ydHNGaWxlczogdHJ1ZSxcbiAgc3VwcG9ydHNGaWxlc0FjY2VwdDogbnVsbCxcbiAgc3VwcG9ydHNJbWFnZXM6IHRydWUsXG4gIHN1cHBvcnRzSW1hZ2VzQWNjZXB0OiBudWxsLFxuICBzdXBwb3J0c0xpbmtzOiB0cnVlLFxuICBzdXBwb3J0c0xpc3RzOiB0cnVlLFxuICBzdXBwb3J0c1F1b3RlOiB0cnVlLFxuICBzdXBwb3J0c1JpY2hDbGFzc2VzOiB0cnVlLFxuICBzdXBwb3J0c1RhYmxlczogdHJ1ZSxcbiAgc3VwcG9ydHNUZW1wbGF0aW5nOiB0cnVlLFxuICBzdXBwb3J0c1RpdGxlOiB0cnVlLFxuICBzdXBwb3J0c1ZpZGVvczogdHJ1ZSxcbn0sIFRFWFRfRlJPTV9TRVJWRVJfMik7XG5cbmNvbnN0IHNhbml0aXplZDMgPSBzYW5pdGl6ZSh7XG4gIGZpbGVSZXNvbHZlcjogbnVsbCxcbn0sIHtcbiAgc3VwcG9ydGVkQ29udGFpbmVyczogW10sXG4gIHN1cHBvcnRlZEN1c3RvbXM6IFtdLFxuICBzdXBwb3J0ZWRSaWNoQ2xhc3NlczogW10sXG4gIHN1cHBvcnRlZFRhYmxlczogW10sXG4gIHN1cHBvcnRzQ29udGFpbmVyczogdHJ1ZSxcbiAgc3VwcG9ydHNDdXN0b206IHRydWUsXG4gIHN1cHBvcnRzQ3VzdG9tU3R5bGVzOiB0cnVlLFxuICAvLyBkaXNhYmxpbmcgZXh0ZXJuYWwgbGlua3NcbiAgc3VwcG9ydHNFeHRlcm5hbExpbmtzOiBmYWxzZSxcbiAgc3VwcG9ydHNGaWxlczogdHJ1ZSxcbiAgc3VwcG9ydHNGaWxlc0FjY2VwdDogbnVsbCxcbiAgc3VwcG9ydHNJbWFnZXM6IHRydWUsXG4gIHN1cHBvcnRzSW1hZ2VzQWNjZXB0OiBudWxsLFxuICBzdXBwb3J0c0xpbmtzOiB0cnVlLFxuICBzdXBwb3J0c0xpc3RzOiB0cnVlLFxuICBzdXBwb3J0c1F1b3RlOiB0cnVlLFxuICBzdXBwb3J0c1JpY2hDbGFzc2VzOiB0cnVlLFxuICBzdXBwb3J0c1RhYmxlczogdHJ1ZSxcbiAgc3VwcG9ydHNUZW1wbGF0aW5nOiB0cnVlLFxuICBzdXBwb3J0c1RpdGxlOiB0cnVlLFxuICBzdXBwb3J0c1ZpZGVvczogdHJ1ZSxcbn0sIFRFWFRfRlJPTV9TRVJWRVJfMyk7XG5cbmNvbnN0IHNhbml0aXplZDQgPSBzYW5pdGl6ZSh7XG4gIGZpbGVSZXNvbHZlcjogbnVsbCxcbn0sIHtcbiAgc3VwcG9ydGVkQ29udGFpbmVyczogW1wiaGFwcHlcIl0sXG4gIHN1cHBvcnRlZEN1c3RvbXM6IFtdLFxuICBzdXBwb3J0ZWRSaWNoQ2xhc3NlczogW1wic3BhcmtsaW5nLXRleHRcIl0sXG4gIHN1cHBvcnRlZFRhYmxlczogW10sXG4gIHN1cHBvcnRzQ29udGFpbmVyczogdHJ1ZSxcbiAgc3VwcG9ydHNDdXN0b206IHRydWUsXG4gIHN1cHBvcnRzQ3VzdG9tU3R5bGVzOiB0cnVlLFxuICAvLyBkaXNhYmxpbmcgZXh0ZXJuYWwgbGlua3NcbiAgc3VwcG9ydHNFeHRlcm5hbExpbmtzOiBmYWxzZSxcbiAgc3VwcG9ydHNGaWxlczogdHJ1ZSxcbiAgc3VwcG9ydHNGaWxlc0FjY2VwdDogbnVsbCxcbiAgc3VwcG9ydHNJbWFnZXM6IHRydWUsXG4gIHN1cHBvcnRzSW1hZ2VzQWNjZXB0OiBudWxsLFxuICBzdXBwb3J0c0xpbmtzOiB0cnVlLFxuICBzdXBwb3J0c0xpc3RzOiB0cnVlLFxuICBzdXBwb3J0c1F1b3RlOiB0cnVlLFxuICBzdXBwb3J0c1JpY2hDbGFzc2VzOiB0cnVlLFxuICBzdXBwb3J0c1RhYmxlczogdHJ1ZSxcbiAgc3VwcG9ydHNUZW1wbGF0aW5nOiB0cnVlLFxuICBzdXBwb3J0c1RpdGxlOiB0cnVlLFxuICBzdXBwb3J0c1ZpZGVvczogdHJ1ZSxcbn0sIFRFWFRfRlJPTV9TRVJWRVJfNCk7XG5cbmNvbnN0IHNhbml0aXplZDRfMiA9IHNhbml0aXplKHtcbiAgZmlsZVJlc29sdmVyOiBudWxsLFxufSwge1xuICBzdXBwb3J0ZWRDb250YWluZXJzOiBbXSxcbiAgc3VwcG9ydGVkQ3VzdG9tczogW10sXG4gIHN1cHBvcnRlZFJpY2hDbGFzc2VzOiBbXSxcbiAgc3VwcG9ydGVkVGFibGVzOiBbXSxcbiAgLy8gZGlzYWJsaW5nIGNvbnRhaW5lcnNcbiAgc3VwcG9ydHNDb250YWluZXJzOiBmYWxzZSxcbiAgc3VwcG9ydHNDdXN0b206IHRydWUsXG4gIHN1cHBvcnRzQ3VzdG9tU3R5bGVzOiB0cnVlLFxuICAvLyBkaXNhYmxpbmcgZXh0ZXJuYWwgbGlua3NcbiAgc3VwcG9ydHNFeHRlcm5hbExpbmtzOiBmYWxzZSxcbiAgc3VwcG9ydHNGaWxlczogdHJ1ZSxcbiAgc3VwcG9ydHNGaWxlc0FjY2VwdDogbnVsbCxcbiAgc3VwcG9ydHNJbWFnZXM6IHRydWUsXG4gIHN1cHBvcnRzSW1hZ2VzQWNjZXB0OiBudWxsLFxuICBzdXBwb3J0c0xpbmtzOiB0cnVlLFxuICBzdXBwb3J0c0xpc3RzOiB0cnVlLFxuICBzdXBwb3J0c1F1b3RlOiB0cnVlLFxuICBzdXBwb3J0c1JpY2hDbGFzc2VzOiB0cnVlLFxuICBzdXBwb3J0c1RhYmxlczogdHJ1ZSxcbiAgc3VwcG9ydHNUZW1wbGF0aW5nOiB0cnVlLFxuICBzdXBwb3J0c1RpdGxlOiB0cnVlLFxuICBzdXBwb3J0c1ZpZGVvczogdHJ1ZSxcbn0sIFRFWFRfRlJPTV9TRVJWRVJfNCk7XG5cbmNvbnN0IHNhbml0aXplZDUgPSBzYW5pdGl6ZSh7XG4gIC8vIHJlc29sdmluZyBhIGZpbGVcbiAgZmlsZVJlc29sdmVyOiAoaWQ6IHN0cmluZykgPT4ge1xuICAgIC8vIHRoZSBpZCBpcyBnb2luZyB0byBiZSBGSUxFSURcbiAgICByZXR1cm4ge1xuICAgICAgc3JjOiBcIi4vaW1nL2V4YW1wbGUtaW1nLmpwZWdcIixcbiAgICAgIC8vIG5vIHNyY3NldCBzcGVjaWZpZWRcbiAgICB9O1xuICB9LFxufSwge1xuICBzdXBwb3J0ZWRDb250YWluZXJzOiBbXSxcbiAgc3VwcG9ydGVkQ3VzdG9tczogW10sXG4gIHN1cHBvcnRlZFJpY2hDbGFzc2VzOiBbXSxcbiAgc3VwcG9ydGVkVGFibGVzOiBbXSxcbiAgc3VwcG9ydHNDb250YWluZXJzOiB0cnVlLFxuICBzdXBwb3J0c0N1c3RvbTogdHJ1ZSxcbiAgc3VwcG9ydHNDdXN0b21TdHlsZXM6IHRydWUsXG4gIC8vIGRpc2FibGluZyBleHRlcm5hbCBsaW5rc1xuICBzdXBwb3J0c0V4dGVybmFsTGlua3M6IGZhbHNlLFxuICBzdXBwb3J0c0ZpbGVzOiB0cnVlLFxuICBzdXBwb3J0c0ZpbGVzQWNjZXB0OiBudWxsLFxuICBzdXBwb3J0c0ltYWdlczogdHJ1ZSxcbiAgc3VwcG9ydHNJbWFnZXNBY2NlcHQ6IG51bGwsXG4gIHN1cHBvcnRzTGlua3M6IHRydWUsXG4gIHN1cHBvcnRzTGlzdHM6IHRydWUsXG4gIHN1cHBvcnRzUXVvdGU6IHRydWUsXG4gIHN1cHBvcnRzUmljaENsYXNzZXM6IHRydWUsXG4gIHN1cHBvcnRzVGFibGVzOiB0cnVlLFxuICBzdXBwb3J0c1RlbXBsYXRpbmc6IHRydWUsXG4gIHN1cHBvcnRzVGl0bGU6IHRydWUsXG4gIHN1cHBvcnRzVmlkZW9zOiB0cnVlLFxufSwgVEVYVF9GUk9NX1NFUlZFUl81KTtcblxuXG4vLyB0aGlzIGlzIGFjdHVhbGx5IG5vdCBzYW5pdGl6ZWQsIGhvd2V2ZXIgdGhlIGRlc2VyaWFsaXplciBkb2Vzbid0IHVuZGVyc3RhbmQgc2NyaXB0IHZhbHVlc1xuLy8gYnV0IHlvdSBtYXkgbm90aWNlIHRoYXQgcG9zaXRpb24gZml4ZWQsIHdpbGwgZ28gdGhyb3VnaCB3aXRob3V0IHByb2JsZW0gdGhpcyB3YXlcbmNvbnN0IHRleHRUcmVlMSA9IGRlc2VyaWFsaXplKFRFWFRfRlJPTV9TRVJWRVJfMSk7XG4vLyB0aGlzIGlzIHNhZmVyXG5jb25zdCB0ZXh0VHJlZTFfMiA9IGRlc2VyaWFsaXplKHNhbml0aXplZDEpO1xuXG4vLyBkb2luZyBpdCB0aGUgc2FmZXIgd2F5IGZyb20gbm93IG9uXG5jb25zdCB0ZXh0VHJlZTIgPSBkZXNlcmlhbGl6ZShzYW5pdGl6ZWQyKTtcblxuY29uc3QgdGV4dFRyZWUzID0gZGVzZXJpYWxpemUoc2FuaXRpemVkMyk7XG5cbmZ1bmN0aW9uIEV4YW1wbGUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5CYXNpYyBQYXJzaW5nIGFuZCBEYXRhIERpc3BsYXlpbmc8L2gxPlxuXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBPcmlnaW5hbCBIVE1MOlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGNvZGU+e1RFWFRfRlJPTV9TRVJWRVJfMX08L2NvZGU+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgU2FuaXRpemVkIEhUTUwgKGNhbiBiZSB1c2VkIGluIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKTpcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxjb2RlPntzYW5pdGl6ZWQxfTwvY29kZT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBEZXNlcmlhbGl6ZWQgSFRNTCBUcmVlIChVbnNhbml0aXplZCwgVW5zYWZlKTpcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxjb2RlPntKU09OLnN0cmluZ2lmeSh0ZXh0VHJlZTEsIG51bGwsIDIpfTwvY29kZT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBEZXNlcmlhbGl6ZWQgSFRNTCBUcmVlIChTYW5pdGl6ZWQsIFNhZmUpOlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGNvZGU+e0pTT04uc3RyaW5naWZ5KHRleHRUcmVlMV8yLCBudWxsLCAyKX08L2NvZGU+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIE9yaWdpbmFsIEhUTUw6XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Y29kZT57VEVYVF9GUk9NX1NFUlZFUl8yfTwvY29kZT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBTYW5pdGl6ZWQgSFRNTCAoY2FuIGJlIHVzZWQgaW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpOlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGNvZGU+e3Nhbml0aXplZDJ9PC9jb2RlPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIERlc2VyaWFsaXplZCBIVE1MIFRyZWUgKFNhbml0aXplZCwgU2FmZSk6XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Y29kZT57SlNPTi5zdHJpbmdpZnkodGV4dFRyZWUyLCBudWxsLCAyKX08L2NvZGU+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIE9yaWdpbmFsIEhUTUw6XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Y29kZT57VEVYVF9GUk9NX1NFUlZFUl8zfTwvY29kZT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBTYW5pdGl6ZWQgSFRNTCAoZXh0ZXJuYWwgbGlua3MgYXJlIGRpc2FibGVkKTpcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxjb2RlPntzYW5pdGl6ZWQzfTwvY29kZT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBEZXNlcmlhbGl6ZWQgSFRNTCBUcmVlIChTYW5pdGl6ZWQsIFNhZmUpOlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGNvZGU+e0pTT04uc3RyaW5naWZ5KHRleHRUcmVlMywgbnVsbCwgMil9PC9jb2RlPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBPcmlnaW5hbCBIVE1MOlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGNvZGU+e1RFWFRfRlJPTV9TRVJWRVJfNH08L2NvZGU+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgU2FuaXRpemVkIEhUTUwgKGNvbnRhaW5lci1oYXBweSBhbmQgc3BhcmtsaW5nLXRleHQgYXJlIGFsbG93ZWQpOlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGNvZGU+e3Nhbml0aXplZDR9PC9jb2RlPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIERpc3BsYXllZCBvZiBzYW5pdGl6ZWRcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmljaC10ZXh0XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHNhbml0aXplZDR9fSBzdHlsZT17e3BhZGRpbmc6IFwiMTBweFwiLCBib3JkZXI6IFwic29saWQgMXB4ICNjY2NcIn19Lz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBTYW5pdGl6ZWQgSFRNTCAoY29udGFpbmVycyBhcmUgbm90IGFsbG93ZWQpOlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGNvZGU+e3Nhbml0aXplZDRfMn08L2NvZGU+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIE9yaWdpbmFsIEhUTUw6XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Y29kZT57VEVYVF9GUk9NX1NFUlZFUl81fTwvY29kZT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBTYW5pdGl6ZWQgSFRNTCAoZHVyaW5nIHNhbml0aXphdGlvbiBpbWFnZXMgYXJlIHJlc29sdmVkLCBzaW5jZSB0aGUgb3JpZ2luYWwgc291cmNlIGlzbid0IHRydXN0ZWQgYW55d2F5KTpcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxjb2RlPntzYW5pdGl6ZWQ1fTwvY29kZT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBEaXNwbGF5ZWQgb2Ygc2FuaXRpemVkXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpY2gtdGV4dFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBzYW5pdGl6ZWQ1fX0gc3R5bGU9e3twYWRkaW5nOiBcIjEwcHhcIiwgYm9yZGVyOiBcInNvbGlkIDFweCAjY2NjXCJ9fS8+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblJlYWN0RE9NLnJlbmRlcig8RXhhbXBsZSAvPiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcHBcIikpOyIsICJpbXBvcnQgeyBKU0RPTSBhcyBKU0RPTURlZiB9IGZyb20gXCJqc2RvbVwiO1xuaW1wb3J0IGNyZWF0ZURPTVB1cmlmeSBmcm9tIFwiZG9tcHVyaWZ5XCI7XG5cbmV4cG9ydCBjb25zdCBKU0RPTSA9IEpTRE9NRGVmO1xuXG5leHBvcnQgY29uc3QgRE9NV2luZG93ID0gSlNET00gPyAobmV3IEpTRE9NKFwiXCIpKS53aW5kb3cgOiB3aW5kb3c7XG5leHBvcnQgY29uc3QgRE9NUHVyaWZ5ID0gY3JlYXRlRE9NUHVyaWZ5KERPTVdpbmRvdyk7IiwgIi8qKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBiYXNlIGZ1bmN0aW9uYWxpdHkgdG8gcHJlcGFyZSBzZXJpYWxpemF0aW9uXG4gKiBhbmQgZGVzZXJpYWxpemF0aW9uIG9mIGV2ZXJ5IGFuZCBlYWNoIGNvbXBvbmVudCwgdGhlIGJhc2UgcHJvcGVydGllc1xuICogYXJlIHRoZSBwcm9wZXJ0aWVzIHRoYXQgZXZlcnkgbm9kZSBoYXNcbiAqIFxuICogQG1vZHVsZVxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERPTVdpbmRvdyB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgSVJlYWN0aWZ5QXJnLCBJU2VyaWFsaXphdGlvblJlZ2lzdHJ5VHlwZSwgUmljaEVsZW1lbnQgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgSVRleHQgfSBmcm9tIFwiLi90eXBlcy90ZXh0XCI7XG5pbXBvcnQgeyBSZWFjdGlmaWVkRWxlbWVudFdpdGhIb3ZlckFuZEFjdGl2ZSB9IGZyb20gXCIuL2R5bmFtaWMtY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNdXRhdGluZ0Z1bmN0aW9uQXJnLCBNdXRhdGluZ1RlbXBsYXRlQXJncywgTm9uUm9vdEluaGVyaXRhYmxlLCBUZW1wbGF0ZUFyZ3MgfSBmcm9tIFwiLi90ZW1wbGF0ZS1hcmdzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVVJSGFuZGxlckV2ZW50cyB7XG4gIG9uQ2xpY2s/OiBhbnk7XG4gIG9uQmx1cj86IGFueTtcbiAgb25Gb2N1cz86IGFueTtcbiAgb25JbnB1dD86IGFueTtcbiAgb25LZXlEb3duPzogYW55O1xuICBvbktleVByZXNzPzogYW55O1xuICBvbktleVVwPzogYW55O1xuICBvbk1vdXNlRG93bj86IGFueTtcbiAgb25Nb3VzZUVudGVyPzogYW55O1xuICBvbk1vdXNlTGVhdmU/OiBhbnk7XG4gIG9uTW91c2VNb3ZlPzogYW55O1xuICBvbk1vdXNlT3Zlcj86IGFueTtcbiAgb25Nb3VzZVdoZWVsPzogYW55O1xuICBvblRvdWNoU3RhcnQ/OiBhbnk7XG4gIG9uVG91Y2hNb3ZlPzogYW55O1xuICBvblRvdWNoRW5kPzogYW55O1xuICBvblRvdWNoQ2FuY2VsPzogYW55O1xuICBvbldoZWVsPzogYW55O1xufVxuXG4vKipcbiAqIEJhc2ljIHByb3BlcnRpZXMgaW5jbHVkZWQgaW4gdGhlIGJhc2ljIHZpZXcgdWkgaGFuZGxlclxuICovXG5leHBvcnQgaW50ZXJmYWNlIElVSUhhbmRsZXJQcm9wcyB7XG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIHRoZSBhcmd1bWVudHMgdGhhdCBhcmUgcmV0cmlldmVkXG4gICAqIGJ5IHRoZSBoYW5kbGVyIGl0c2VsZiwgZWcgaW4gYSBjb21wb25lbnRcbiAgICogPGRpdiBkYXRhLXVpLWhhbmRsZXI9XCJ0ZXN0XCIgZGF0YS14PVwiMVwiIGRhdGEtd2hhdC1ub3Q9XCIyXCIvPlxuICAgKiB0aGUgYXJncyB3aWxsIGJlIHggYW5kIHdoYXROb3QgdGhhdCBhcmUgcGFzc2VkIGhlcmVcbiAgICovXG4gIGFyZ3M6IHtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH07XG4gIC8qKlxuICAgKiBUaGUgZWxlbWVudCB0aGF0IHRoZSB1aSBoYW5kbGVyIGJlbG9uZ3MgdG9cbiAgICovXG4gIGVsZW1lbnQ6IFJpY2hFbGVtZW50O1xuICAvKipcbiAgICogVGhlIGNoaWxkcmVuIGluc2lkZSB0aGUgdWkgaGFuZGxlclxuICAgKiBwbGVhc2UgZW5zdXJlIHRvIHVzZSB0aGVtIHNwZWNpYWxseSBpZiBpbiBzbGF0ZSBtb2RlXG4gICAqL1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICAvKipcbiAgICogQW4gb3B0aW9uYWwgY2xhc3MgbmFtZVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHN0eWxlIG9iamVjdFxuICAgKi9cbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xuICAvKipcbiAgICogVGhlIHN0eWxlIGFjdGl2ZSBvYmplY3RcbiAgICovXG4gIHN0eWxlQWN0aXZlPzogUmVhY3QuQ1NTUHJvcGVydGllcztcbiAgLyoqXG4gICAqIFRoZSBzdHlsZSBob3ZlciBvYmplY3RcbiAgICovXG4gIHN0eWxlSG92ZXI/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xuICAvKipcbiAgICogY29udGFpbnMgZXZlbnRzIHRoYXQgc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBlbGVtZW50XG4gICAqL1xuICBldmVudHM6IElVSUhhbmRsZXJFdmVudHM7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBzdHlsZSBwcm9wZXJ0eSBzdHJpbmcgaW50byBhIGNhbWVsIGNhc2UgYmFzZWQgb25lXG4gKiB0aGlzIGlzIGJhc2ljYWxseSB0byBjb252ZXJ0IHRoaW5ncyBsaWtlIHRleHQtYWxpZ24gaW50byB0ZXh0QWxpZ25cbiAqIGZvciB1c2Ugd2l0aGluIHJlYWN0XG4gKiBAcGFyYW0gc3RyIHRoZSBzdHJpbmcgdG8gY29udmVydFxuICovXG5mdW5jdGlvbiBjb252ZXJ0U3R5bGVQcm9wZXJ0eVRvQ2FtZWxDYXNlKHN0cjogc3RyaW5nKSB7XG4gIC8vIGZpcnN0IHdlIHNwbGl0IHRoZSBkYXNoZXNcbiAgY29uc3Qgc3BsaXR0ZWQgPSBzdHIuc3BsaXQoXCItXCIpO1xuXG4gIC8vIGlmIGl0J3MganVzdCBvbmUgdGhlbiB3ZSByZXR1cm4gdGhhdCBqdXN0IG9uZVxuICBpZiAoc3BsaXR0ZWQubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIHNwbGl0dGVkWzBdO1xuICB9XG5cbiAgLy8gb3RoZXJ3aXNlIHdlIGRvIHRoaXMgcHJvY2VzcyBvZiBjYXBpdGFsaXphdGlvblxuICByZXR1cm4gKFxuICAgIHNwbGl0dGVkWzBdICtcbiAgICBzcGxpdHRlZFxuICAgICAgLnNsaWNlKDEpXG4gICAgICAubWFwKCh3b3JkKSA9PiB3b3JkWzBdLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpKVxuICAgICAgLmpvaW4oXCJcIilcbiAgKTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgYSBzdHlsZSBzdHJpbmcgc3VjaCBhIHRleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MDsgaW50byBhXG4gKiByZWFjdCBzdHlsZSBvYmplY3RcbiAqIEBwYXJhbSBzdHIgdGhlIHN0eWxlIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFN0eWxlU3RyaW5nVG9SZWFjdE9iamVjdChzdHI6IHN0cmluZykge1xuICAvLyBubyBzdHJpbmcsIHRoZW4gbnVsbFxuICBpZiAoIXN0cikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gbm93IHdlIGJ1aWxkIHRoZSBzdHlsZVxuICBjb25zdCBzdHlsZSA9IHt9O1xuICAvLyBzbyB3ZSBzcGxpdCBlYWNoIDtcbiAgc3RyLnNwbGl0KFwiO1wiKS5mb3JFYWNoKChlbCkgPT4ge1xuXG4gICAgLy8gYW5kIG5vdyB3ZSBjYW4gdHJpbSBlYWNoXG4gICAgY29uc3QgZWxUcmltbWVkID0gZWwudHJpbSgpO1xuXG4gICAgLy8gaWYgd2UgaGF2ZSBub3RoaW5nLCB0aGVuIHJldHVybiBhbmRcbiAgICAvLyBnbyBmb3IgdGhlIG5leHQgb25lXG4gICAgaWYgKCFlbFRyaW1tZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBub3cgd2UgY2FuIGdldCBib3RoIHRoZSBwcm9wZXJ0eSBhbmQgdGhlIHZhbHVlXG4gICAgY29uc3QgW3Byb3BlcnR5LCB2YWx1ZV0gPSBlbC5zcGxpdChcIjpcIik7XG5cbiAgICAvLyBpZiB3ZSBkb24ndCBoYXZlIGFueVxuICAgIGlmICghcHJvcGVydHkgfHwgIXZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gYW5kIG5vdyB3ZSBjYW4gdHJ5IHRvIGZvcm1hdCB0aGUgcHJvcGVydHkgbmFtZVxuICAgIGNvbnN0IGZvcm1hdHRlZFByb3BlcnR5ID0gY29udmVydFN0eWxlUHJvcGVydHlUb0NhbWVsQ2FzZShwcm9wZXJ0eS50cmltKCkpO1xuICAgIGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gdmFsdWUudHJpbSgpO1xuXG4gICAgaWYgKGZvcm1hdHRlZFByb3BlcnR5ID09PSBcInBvc2l0aW9uXCIgJiYgZm9ybWF0dGVkVmFsdWUgPT09IFwiZml4ZWRcIikge1xuICAgICAgLy8gdGhlIHNhbml0aXplciBwcmV2ZW50cyB0aGUgdXNhZ2Ugb2YgcG9zaXRpb24gZml4ZWRcbiAgICAgIC8vIGFzIHN1Y2ggdGhpcyB3aWxsIGJlIHByZXZlbnRlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIG5vdyB3ZSBzZXQgdGhlIHN0eWxlIGluIHRoZSBvYmplY3RcbiAgICBzdHlsZVtmb3JtYXR0ZWRQcm9wZXJ0eV0gPSBmb3JtYXR0ZWRWYWx1ZTtcbiAgfSk7XG5cbiAgLy8gaWYgd2UgZ290IG5vdGhpbmdcbiAgaWYgKE9iamVjdC5rZXlzKHN0eWxlKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIHJldHVybiB0aGUgc3R5bGVcbiAgcmV0dXJuIHN0eWxlO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBjb250ZXh0cyBmb3IgdGhlIG11dGF0aW5nIGFjdGlvbnMgdGhhdCByZXNpZGUgb24gdG9wXG4gKiBvZiBhIGNvbXBvbmVudCB0byBnaXZlIHZhbHVlIHRvIGEgZnVuY3Rpb25cbiAqIEBwYXJhbSBiYXNpY0FjdGlvbnMgdGhlIGJhc2ljIGFjdGlvbnMgdGhhdCBhbHJlYWR5IGdvdCBhIGRlZmluZWQgdmFsdWVcbiAqIEBwYXJhbSBtdXRhdGluZ0FjdGlvbnMgdGhlIG11dGF0aW5nIGFjdGlvbnMgdGhhdCBuZWVkIGEgdmFsdWUgZnJvbSB0aGUgY29udGV4dFxuICogQHBhcmFtIGNoaWxkcmVuIHRoZSBjaGlsZHJlbiB0aGF0IHdpbGwgYmUgZmVkIGFsbCB0aG9zZSB2YWx1ZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlY3Vyc2VBbmRDb25zdW1lTXV0YXRpbmdBY3Rpb25zKFxuICBiYXNpY0FjdGlvbnM6IElVSUhhbmRsZXJFdmVudHMsXG4gIG11dGF0aW5nQWN0aW9uczogSVVJSGFuZGxlckV2ZW50cyxcbiAgY2hpbGRyZW46IChhcmdzOiBJVUlIYW5kbGVyRXZlbnRzKSA9PiBSZWFjdC5SZWFjdE5vZGVcbik6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIC8vIGZpcnN0IHdlIG5lZWQgYWxsIHRoZSBtdXRhdGluZyBhY3Rpb24ga2V5c1xuICBjb25zdCBtdXRhdGluZ0FjdGlvbnNLZXlzID0gT2JqZWN0LmtleXMobXV0YXRpbmdBY3Rpb25zKTtcblxuICAvLyBub25lLCB3ZWxsIHRoZW4gd2UgYXJlIGRvbmVcbiAgaWYgKG11dGF0aW5nQWN0aW9uc0tleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuKGJhc2ljQWN0aW9ucyk7XG4gIH1cblxuICAvLyBub3cgd2UgcGljayBvbmVcbiAgY29uc3Qga2V5VG9QaWNrID0gbXV0YXRpbmdBY3Rpb25zS2V5c1swXTtcbiAgY29uc3QgdmFsdWUgPSBtdXRhdGluZ0FjdGlvbnNba2V5VG9QaWNrXSBhcyBNdXRhdGluZ0Z1bmN0aW9uQXJnO1xuXG4gIC8vIGFuZCB3ZSBjYW4gdXNlIHRoZSBtdXRhdGluZyB3cmFwcGVyIHRvIHJldHJpZXZlIHRoZSBmdW5jdGlvblxuICByZXR1cm4gdmFsdWUubXV0YXRpbmdGdW5jdGlvbldyYXBwZXIoKGZuKSA9PiB7XG4gICAgLy8gYW5kIHNldCBpdCBhcyB0aGUgYmFzaWMgdmFsdWVcbiAgICBjb25zdCBuZXdCYXNpY0FjdGlvbnMgPSB7XG4gICAgICAuLi5iYXNpY0FjdGlvbnMsXG4gICAgICBba2V5VG9QaWNrXTogZm4sXG4gICAgfTtcbiAgICAvLyBhbmQgcmVtb3ZlIGl0IGZyb20gdGhlIG11dGF0aW5nXG4gICAgY29uc3QgbmV3TXV0YXRpbmdBY3Rpb25zID0ge1xuICAgICAgLi4ubXV0YXRpbmdBY3Rpb25zLFxuICAgIH07XG4gICAgZGVsZXRlIG5ld011dGF0aW5nQWN0aW9uc1trZXlUb1BpY2tdO1xuXG4gICAgLy8gYW5kIHdlIGNhbiBrZWVwIGdvaW5nXG4gICAgcmV0dXJuIHJlY3Vyc2VBbmRDb25zdW1lTXV0YXRpbmdBY3Rpb25zKG5ld0Jhc2ljQWN0aW9ucywgbmV3TXV0YXRpbmdBY3Rpb25zLCBjaGlsZHJlbik7XG4gIH0sIGtleVRvUGljayk7XG59XG5cbi8qKlxuICogUHJvdmlkZXMgYWxsIHRoZSBhY3Rpb25zIHRoYXQgYXJlIHNwZWNpZmllZCBmb3IgYSBnaXZlbiBub2RlXG4gKiBpbmNsdWRpbmcgdGhvc2UgdGhhdCBhcmUgbWVhbnQgdG8gYmUgbXV0YXRpbmdcbiAqIEBwYXJhbSBiYXNlIHRoZSBiYXNlIGVsZW1lbnQgdGhhdCBpcyB0byBiZSBmZWQgcHJvcGVydGllc1xuICogQHBhcmFtIGNvbnRleHQgdGhlIGNvbnRleHQgd2hlcmUgd2UgbmVlZCB0byBmaW5kIHRoZSB2YWx1ZXMgb2Ygc3VjaFxuICogQHBhcmFtIGNoaWxkcmVuIHRoaXMgaXMgdGhlIG5vZGUgaXRzZWxmIHdoZXJlIHRoZSBhcmdzIGFyZSBmZWQgdG8gdGhpcyB3YXkgaXQgYWxsb3dzXG4gKiB0byBzZXQgY29udGV4dHMgYW5kIHdyYXBwZXJzIG9uIHRvcCBvZiBpdFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmV0cmlldmVFbGVtZW50QWN0aW9uc0ZvclJlYWN0KFxuICBiYXNlOiBJRWxlbWVudEJhc2UsXG4gIGNvbnRleHQ6IFRlbXBsYXRlQXJncyxcbiAgcm9vdENvbnRleHQ6IFRlbXBsYXRlQXJncyxcbiAgY2hpbGRyZW46IChhcmdzOiBJVUlIYW5kbGVyRXZlbnRzKSA9PiBSZWFjdC5SZWFjdE5vZGUsXG4pOiBSZWFjdC5SZWFjdE5vZGUge1xuICAvLyBubyBjb250ZXh0IG5vIGFyZ3NcbiAgaWYgKCFjb250ZXh0ICYmICFyb290Q29udGV4dCkge1xuICAgIHJldHVybiBjaGlsZHJlbih7fSk7XG4gIH1cblxuICAvLyBub3cgd2UgbmVlZCBhbGwgdGhlIGJhc2ljIGFuZCBtdXRhdGluZyBhY3Rpb25zXG4gIGNvbnN0IGJhc2ljQWN0aW9uczogSVVJSGFuZGxlckV2ZW50cyA9IHt9O1xuICBjb25zdCBtdXRhdGluZ0FjdGlvbnM6IElVSUhhbmRsZXJFdmVudHMgPSB7fTtcbiAgT2JqZWN0LmtleXMoZXZlbnRSZWFjdGlmeVRyYW5zbGF0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBiYXNlW2tleV07XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBsZXQgY29udGV4dFZhbHVlID0gY29udGV4dCAmJiBjb250ZXh0LnByb3BlcnRpZXNbdmFsdWVdO1xuXG4gICAgICBpZiAoY29udGV4dFZhbHVlIGluc3RhbmNlb2YgTm9uUm9vdEluaGVyaXRhYmxlKSB7XG4gICAgICAgIGNvbnRleHRWYWx1ZSA9IGNvbnRleHRWYWx1ZS52YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAoIWNvbnRleHRWYWx1ZSkge1xuICAgICAgICBjb250ZXh0VmFsdWUgPSByb290Q29udGV4dCAmJiByb290Q29udGV4dC5wcm9wZXJ0aWVzW3ZhbHVlXTtcblxuICAgICAgICBpZiAoY29udGV4dFZhbHVlIGluc3RhbmNlb2YgTm9uUm9vdEluaGVyaXRhYmxlKSB7XG4gICAgICAgICAgY29udGV4dFZhbHVlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY29udGV4dFZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gZXZlbnRSZWFjdGlmeVRyYW5zbGF0aW9uc1trZXldO1xuICAgICAgICBpZiAoY29udGV4dFZhbHVlIGluc3RhbmNlb2YgTXV0YXRpbmdGdW5jdGlvbkFyZykge1xuICAgICAgICAgIG11dGF0aW5nQWN0aW9uc1t0cmFuc2xhdGlvbl0gPSBjb250ZXh0VmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYmFzaWNBY3Rpb25zW3RyYW5zbGF0aW9uXSA9IGNvbnRleHRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gbm8gbXV0YXRpbmcgYWN0aW9ucyB3ZSBjYW4gcmV0dXJuIHJpZ2h0IGF3YXlcbiAgaWYgKE9iamVjdC5rZXlzKG11dGF0aW5nQWN0aW9ucykubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuKGJhc2ljQWN0aW9ucyk7XG4gIH1cblxuICAvLyBvdGhlcndpc2Ugd2UgbmVlZCB0byBzZXR1cCBhbGwgdGhvc2UgY29udGV4dHNcbiAgcmV0dXJuIHJlY3Vyc2VBbmRDb25zdW1lTXV0YXRpbmdBY3Rpb25zKGJhc2ljQWN0aW9ucywgbXV0YXRpbmdBY3Rpb25zLCBjaGlsZHJlbik7XG59XG5cbi8qKlxuICogQW4gaW50ZXJmYWNlIHRvIHJlZmVyIHRvIGF0dHJpYnV0ZXNcbiAqIG9mIGEgZ2l2ZW4gZWxlbWVudCB0aGF0IGlzIHVzZWQgZHVyaW5nIHNlcmlhbGl6YXRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQXR0cnMge1xuICBbYXR0cjogc3RyaW5nXTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgbGlzdCBvZiB0cmFuc2xhdGlvbiBvZiBiYXNpYyBwcm9wZXJ0aWVzXG4gKiBAaWdub3JlXG4gKi9cbmNvbnN0IHRyYW5zbGF0aW9ucyA9IHtcbiAgZ2l2ZW5OYW1lOiBcImRhdGEtbmFtZVwiLFxuICBpZkNvbmRpdGlvbjogXCJkYXRhLWlmXCIsXG4gIGh0bWw6IFwiZGF0YS1odG1sXCIsXG4gIHRleHRDb250ZW50OiBcImRhdGEtdGV4dFwiLFxuICBzdHlsZTogXCJzdHlsZVwiLFxuICBzdHlsZUhvdmVyOiBcImRhdGEtc3R5bGUtaG92ZXJcIixcbiAgc3R5bGVBY3RpdmU6IFwiZGF0YS1zdHlsZS1hY3RpdmVcIixcbiAgdWlIYW5kbGVyOiBcImRhdGEtdWktaGFuZGxlclwiLFxuICBjb250ZXh0OiBcImRhdGEtY29udGV4dFwiLFxuICBmb3JFYWNoOiBcImRhdGEtZm9yLWVhY2hcIixcbiAgY2xpY2s6IFwiZGF0YS1vbi1jbGlja1wiLFxuICBibHVyOiBcImRhdGEtb24tYmx1clwiLFxuICBmb2N1czogXCJkYXRhLW9uLWZvY3VzXCIsXG4gIGlucHV0OiBcImRhdGEtb24taW5wdXRcIixcbiAga2V5ZG93bjogXCJkYXRhLW9uLWtleWRvd25cIixcbiAga2V5cHJlc3M6IFwiZGF0YS1vbi1rZXlwcmVzc1wiLFxuICBrZXl1cDogXCJkYXRhLW9uLWtleXVwXCIsXG4gIG1vdXNlZG93bjogXCJkYXRhLW9uLW1vdXNlZG93blwiLFxuICBtb3VzZWVudGVyOiBcImRhdGEtb24tbW91c2VlbnRlclwiLFxuICBtb3VzZWxlYXZlOiBcImRhdGEtb24tbW91c2VsZWF2ZVwiLFxuICBtb3VzZW1vdmU6IFwiZGF0YS1vbi1tb3VzZW1vdmVcIixcbiAgbW91c2VvdmVyOiBcImRhdGEtb24tbW91c2VvdmVyXCIsXG4gIG1vdXNlb3V0OiBcImRhdGEtb24tbW91c2VvdXRcIixcbiAgbW91c2V1cDogXCJkYXRhLW9uLW1vdXNldXBcIixcbiAgbW91c2V3aGVlbDogXCJkYXRhLW9uLW1vdXNld2hlZWxcIixcbiAgdG91Y2hzdGFydDogXCJkYXRhLW9uLXRvdWNoc3RhcnRcIixcbiAgdG91Y2htb3ZlOiBcImRhdGEtb24tdG91Y2htb3ZlXCIsXG4gIHRvdWNoZW5kOiBcImRhdGEtb24tdG91Y2hlbmRcIixcbiAgdG91Y2hjYW5jZWw6IFwiZGF0YS1vbi10b3VjaGNhbmNlbFwiLFxuICB3aGVlbDogXCJkYXRhLW9uLXdoZWVsXCIsXG59XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5jb25zdCBldmVudFJlYWN0aWZ5VHJhbnNsYXRpb25zID0ge1xuICBjbGljazogXCJvbkNsaWNrXCIsXG4gIGJsdXI6IFwib25CbHVyXCIsXG4gIGZvY3VzOiBcIm9uRm9jdXNcIixcbiAgaW5wdXQ6IFwib25JbnB1dFwiLFxuICBrZXlkb3duOiBcIm9uS2V5RG93blwiLFxuICBrZXlwcmVzczogXCJvbktleVByZXNzXCIsXG4gIGtleXVwOiBcIm9uS2V5VXBcIixcbiAgbW91c2Vkb3duOiBcIm9uTW91c2VEb3duXCIsXG4gIG1vdXNlZW50ZXI6IFwib25Nb3VzZUVudGVyXCIsXG4gIG1vdXNlbGVhdmU6IFwib25Nb3VzZUxlYXZlXCIsXG4gIG1vdXNlbW92ZTogXCJvbk1vdXNlTW92ZVwiLFxuICBtb3VzZW92ZXI6IFwib25Nb3VzZU92ZXJcIixcbiAgbW91c2VvdXQ6IFwib25Nb3VzZU91dFwiLFxuICBtb3VzZXVwOiBcIm9uTW91c2VVcFwiLFxuICBtb3VzZXdoZWVsOiBcIm9uTW91c2VXaGVlbFwiLFxuICB0b3VjaHN0YXJ0OiBcIm9uVG91Y2hTdGFydFwiLFxuICB0b3VjaG1vdmU6IFwib25Ub3VjaE1vdmVcIixcbiAgdG91Y2hlbmQ6IFwib25Ub3VjaEVuZFwiLFxuICB0b3VjaGNhbmNlbDogXCJvblRvdWNoQ2FuY2VsXCIsXG4gIHdoZWVsOiBcIm9uV2hlZWxcIixcbn1cblxuLyoqXG4gKiBTZXJpYWxpemVzIGFuIGVsZW1lbnQgZnJvbSBpdHMgZm9ybVxuICogYXMgYSBSaWNoRWxlbWVudCB0byBhIEhUTUwgZWxlbWVudFxuICogQHBhcmFtIHJlZ2lzdHJ5IHRoZSByZWdpc3RyeSB0byB1c2VcbiAqIEBwYXJhbSBiYXNlIHRoZSBiYXNlIGVsZW1lbnRcbiAqIEBwYXJhbSB0YWcgdGhlIHRhZyB0byB1c2UgdG8gYnVpbGQgdGhpcyBlbGVtZW50XG4gKiBAcGFyYW0gYmFzZUNsYXNzIHRoZSBiYXNlIGNsYXNzIHRvIHVzZSwgZWcuIGltYWdlLCBjb250YWluZXIsIGV0Yy4uLlxuICogQHBhcmFtIGF0dHJzIHRoZSBhdHRyaWJ1dGVzIHRvIHVzZVxuICogQHBhcmFtIGNoaWxkcmVuIHRoZSBjaGlsZHJlbiB0aGF0IGFsc28gbmVlZCB0byBiZSBzZXJpYWxpemVkIHVuZGVyIGl0XG4gKiBub3RlIHRoYXQgdGhleSBuZWVkIHRvIGJlIGV4cGxpY3RseSBzZXQgZXZlbiBpZiB0aGV5IGFyZSBpbiB0aGUgYmFzZVxuICogQHJldHVybnMgYSBodG1sIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZUVsZW1lbnRCYXNlKFxuICByZWdpc3RyeTogSVNlcmlhbGl6YXRpb25SZWdpc3RyeVR5cGUsXG4gIGJhc2U6IElFbGVtZW50QmFzZSxcbiAgdGFnOiBzdHJpbmcsXG4gIGJhc2VDbGFzczogc3RyaW5nLFxuICBhdHRyczogSUF0dHJzLFxuICBjaGlsZHJlbjogQXJyYXk8UmljaEVsZW1lbnQgfCBJVGV4dD4sXG4pOiBIVE1MRWxlbWVudCB7XG4gIC8vIGZpcnN0IHdlIG5lZWQgdG8gY3JlYXRlIHRoZSBlbGVtZW50IGl0c2VsZiBhcyBhIERPTSBlbGVtZW50XG4gIGNvbnN0IGVsZW1lbnRDb21wb25lbnQgPSBET01XaW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXG4gIC8vIGlmIHdlIGhhdmUgYSBiYXNlIGNsYXNzIHdlIGFkZCBpdCB0byB0aGUgbGlzdFxuICBpZiAoYmFzZUNsYXNzKSB7XG4gICAgZWxlbWVudENvbXBvbmVudC5jbGFzc0xpc3QuYWRkKGJhc2VDbGFzcyk7XG4gIH1cblxuICAvLyBpZiB3ZSBoYXZlIGF0dHJpYnV0ZXMsIHdlIGFkZCBlYWNoIG9mIHRob3NlXG4gIGlmIChhdHRycykge1xuICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICBlbGVtZW50Q29tcG9uZW50LnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyc1thdHRyXSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBpZiB3ZSBoYXZlIGEgcmljaCBjbGFzcyBsaXN0IGluIHRoZSBiYXNlXG4gIGlmIChiYXNlLnJpY2hDbGFzc0xpc3QpIHtcbiAgICBiYXNlLnJpY2hDbGFzc0xpc3QuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgZWxlbWVudENvbXBvbmVudC5jbGFzc0xpc3QuYWRkKFwicmljaC10ZXh0LS1cIiArIGMpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gbm93IHdlIGdvIG92ZXIgZWFjaCBvbmUgb2YgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGJhc2VcbiAgT2JqZWN0LmtleXMoYmFzZSkuZm9yRWFjaCgoaykgPT4ge1xuICAgIC8vIGFuZCBjaGVjayBmb3IgYSB0cmFuc2xhdGlvblxuICAgIGlmICh0cmFuc2xhdGlvbnNba10gJiYgdHlwZW9mIGJhc2Vba10gIT09IFwidW5kZWZpbmVkXCIgJiYgYmFzZVtrXSAhPT0gbnVsbCkge1xuICAgICAgLy8gc2V0IGl0IGlmIHRoZXJlJ3Mgc3VjaFxuICAgICAgZWxlbWVudENvbXBvbmVudC5zZXRBdHRyaWJ1dGUodHJhbnNsYXRpb25zW2tdLCBiYXNlW2tdKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIGlmIHdlIGhhdmUgdWkgaGFuZGxlcyB0byBzZXRcbiAgaWYgKGJhc2UudWlIYW5kbGVyQXJncykge1xuICAgIC8vIHdlIHNldCB0aGVtXG4gICAgT2JqZWN0LmtleXMoYmFzZS51aUhhbmRsZXJBcmdzKS5mb3JFYWNoKChhcmcpID0+IHtcbiAgICAgIGVsZW1lbnRDb21wb25lbnQuZGF0YXNldFthcmddID0gYmFzZS51aUhhbmRsZXJBcmdzW2FyZ107XG4gICAgfSk7XG4gIH1cblxuICAvLyBmaSB3ZSBoYXZlIHNwZWNpZmllZCBjaGlsZHJlblxuICBpZiAoY2hpbGRyZW4pIHtcbiAgICAvLyB0aGVuIHdlIGxvb3AgaW50byB0aGVtXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoYykgPT4ge1xuICAgICAgLy8gaWYgaXQncyBhIHRleHQgbm9kZVxuICAgICAgaWYgKChjIGFzIElUZXh0KS50ZXh0KSB7XG4gICAgICAgIC8vIHRoZW4gd2UgdXNlIHRoZSB0ZXh0IGNvbnZlcnNpb24gZnVuY3Rpb25cbiAgICAgICAgY29uc3QgdGV4dE5vZGU6IE5vZGUgPSByZWdpc3RyeS5TRVJJQUxJWkUudGV4dChjIGFzIElUZXh0KTtcbiAgICAgICAgZWxlbWVudENvbXBvbmVudC5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG4gICAgICB9IGVsc2UgaWYgKHJlZ2lzdHJ5LlNFUklBTElaRVsoYyBhcyBSaWNoRWxlbWVudCkudHlwZV0pIHtcbiAgICAgICAgLy8gaWYgaXQncyBhbm90aGVyIHR5cGUgdGhlbiB3ZSBwaWNrIHRoZSBmdW5jdGlvblxuICAgICAgICBjb25zdCBmbiA9IHJlZ2lzdHJ5LlNFUklBTElaRVsoYyBhcyBSaWNoRWxlbWVudCkudHlwZV07XG4gICAgICAgIC8vIGdldCB0aGUgY2hpbGQgZWxlbWVudFxuICAgICAgICBjb25zdCBjaGlsZEVsZW1lbnQgPSBmbihjIGFzIFJpY2hFbGVtZW50KTtcbiAgICAgICAgLy8gYW5kIHB1c2ggdGhhdFxuICAgICAgICBlbGVtZW50Q29tcG9uZW50LmFwcGVuZENoaWxkKGNoaWxkRWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyByZXR1cm4gaXRcbiAgcmV0dXJuIGVsZW1lbnRDb21wb25lbnQ7XG59XG5cbmNvbnN0IFZPSURfVEFHU19VTk1BTkFHRUQgPSBbXG4gIFwiYnJcIixcbiAgXCJoclwiLFxuICBcImFyZWFcIixcbiAgXCJiYXNlXCIsXG4gIFwiY29sXCIsXG4gIFwiY29tbWFuZFwiLFxuICBcImVtYmVkXCIsXG4gIFwiaW1nXCIsXG4gIFwiaW5wdXRcIixcbiAgXCJrZXlnZW5cIixcbiAgXCJsaW5rXCIsXG4gIFwibWV0YVwiLFxuICBcInBhcmFtXCIsXG4gIFwic291cmNlXCIsXG4gIFwidHJhY2tcIixcbiAgXCJ3YnJcIixcbl07XG5cbi8qKlxuICogUmVhY3RpZmllcyBhbiBlbGVtZW50IHNvIHRoYXQgaXQgY2FuIGJlIGdpdmVuIGl0cyByZWFjdFxuICogZm9ybSwgYmFzaWNhbGx5IGNvbnZlcnRzIHRoZSBlbGVtZW50IGludG8gYSByZWFjdCBvbmVcbiAqXG4gKiBAcGFyYW0gcmVnaXN0cnkgdGhlIHJlZ2lzdHJ5IHRoYXQgaXMgY3VycmVudGx5IGluIHVzZVxuICogQHBhcmFtIFRhZyB0aGUgdGFnIHdlIGFyZSB1c2luZyBmb3IgdGhlIGNvbXBvbmVudCB0byByZW5kZXJcbiAqIEBwYXJhbSBiYXNlQ2xhc3MgdGhlIGJhc2UgY2xhc3MgdGhhdCBzaG91bGQgaGF2ZVxuICogQHBhcmFtIGNoaWxkcmVuIHJlcHJlc2VudHMgdGhlIGNoaWxkcmVuIGluIHRoZSBzZXJpYWxpemVkIGZvcm0sIGFzIGluIFJpY2hFbGVtZW50IG9yIHRleHQgbm9kZXNcbiAqIHRoYXQgaXQgaGFzIGFzIGNoaWxkcmVuIGFuZCBzaG91bGQgYmUgdXNlZCwgdGhhdCBpcyBvZiBjb3Vyc2UgdW5sZXNzIHRoZXNlIGNoaWxkcmVuIGFyZSBvdmVycmlkZW5cbiAqIGJ5IG90aGVyIG5vZGVzXG4gKiBAcGFyYW0gd3JhcENoaWxkcmVuIGEgZnVuY3Rpb24gdGhhdCBpcyBnaXZlbiBzbyB0aGF0IHlvdSBjYW4gcmV0dXJuIG5ldyBjaGlsZHJlbiB0byB3cmFwIHRoZSBjdXJyZW50XG4gKiBjaGlsZHJlbiwgYmFzaWNhbGx5IGRlZmluZSB5b3VyIG93biBjaGlsZHJlbiB3cmFwcGFnZSwgZm9yIGV4YW1wbGUsIGltYWdlcyBhbmQgdmlkZW9zIHByb3ZpZGUgdGhlaXJcbiAqIG93biBjdXN0b20gY2hpbGRyZW4gbmVzdGVkIHN0cnVjdHVyZVxuICogQHBhcmFtIGFyZyB0aGUgcmVhY3RpZmljYXRpb24gYXJndW1lbnQgdGhhdCBpcyBwYXNzZWQgb3JpZ2luYWxseSB0byB0aGUgcmVhY3RpZmljYXRpb24gZnVuY3Rpb25cbiAqIGFuZCBwcm92aWRlcyB0aGUgZmluZSBjdXN0b21pemF0aW9uIGRldGFpbHMgYXMgd2VsbCBhcyBjdXN0b20gY2hpbGRyZW4gaW4gY2FzZSBhbmQgd2hldGhlciBpdCBzaG91bGRcbiAqIGJlIGEgdGVtcGxhdGUgb3Igbm90XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWFjdGlmeUVsZW1lbnRCYXNlKFxuICByZWdpc3RyeTogSVNlcmlhbGl6YXRpb25SZWdpc3RyeVR5cGUsXG4gIFRhZzogc3RyaW5nLFxuICBiYXNlQ2xhc3M6IHN0cmluZyxcbiAgY2hpbGRyZW46IEFycmF5PFJpY2hFbGVtZW50IHwgSVRleHQ+LFxuICB3cmFwQ2hpbGRyZW46IChub2RlOiBSZWFjdC5SZWFjdE5vZGUpID0+IFJlYWN0LlJlYWN0Tm9kZSxcbiAgYXJnOiBJUmVhY3RpZnlBcmc8UmljaEVsZW1lbnQgfCBJVGV4dD4sXG4pOiBSZWFjdC5SZWFjdE5vZGUge1xuICAvLyBzbyBmaXJzdCB3ZSB0YWtlIHRoZSBlbGVtZW50IHRoYXQgd2UgYXJlIHN1cHBvc2VkIHRvIHJlYWN0aWZ5XG4gIGNvbnN0IGJhc2U6IElFbGVtZW50QmFzZSA9IGFyZy5lbGVtZW50IGFzIElFbGVtZW50QmFzZTtcblxuICAvLyBsZXQncyBjcmVhdGUgdGhlc2UgaW4gdGhlIG1lYW50aW1lXG4gIGxldCBjdXJyZW50VGVtcGxhdGVBcmdzOiBUZW1wbGF0ZUFyZ3MgPSBhcmcudGVtcGxhdGVBcmdzO1xuICBsZXQgY3VycmVudFRlbXBsYXRlUm9vdEFyZ3MgPSBhcmcudGVtcGxhdGVSb290QXJncyB8fCBhcmcudGVtcGxhdGVBcmdzO1xuXG4gIC8vIGlmIHdlIGhhdmUgYSB0ZW1wbGF0ZSBhbmQgd2UgYXJlIHJlbmRlcmluZyBhcyB0ZW1wbGF0ZVxuICBpZiAoYXJnLmFzVGVtcGxhdGUgJiYgIWFyZy50ZW1wbGF0ZUlnbm9yZUNvbnRleHR1YWxDaGFuZ2VzKSB7XG5cbiAgICAvLyBzbyBsZXQncyBmaW5kIHRoZSBjb250ZXh0IHdlIGFyZSB3b3JraW5nIHdpdGhpblxuICAgIGxldCBuZXdUZW1wbGF0ZUFyZ3M6IFRlbXBsYXRlQXJncyB8IE11dGF0aW5nVGVtcGxhdGVBcmdzID0gY3VycmVudFRlbXBsYXRlQXJncztcblxuICAgIC8vIGZpcnN0IHdlIG5lZWQgdG8gZmluZCB0aGUgY29udGV4dFxuICAgIGlmIChuZXdUZW1wbGF0ZUFyZ3MgJiYgYmFzZS5jb250ZXh0KSB7XG4gICAgICAvLyBhbmQgY2hhbmdlIGl0IGFjY29yZGluZ2x5LCB0aGlzIGNoYW5nZSBzaG91bGQgYmVcbiAgICAgIG5ld1RlbXBsYXRlQXJncyA9IChuZXdUZW1wbGF0ZUFyZ3MucHJvcGVydGllc1tiYXNlLmNvbnRleHRdIHx8IG51bGwpIGFzIGFueTtcbiAgICAgIGlmICghKG5ld1RlbXBsYXRlQXJncyBpbnN0YW5jZW9mIFRlbXBsYXRlQXJncykgfHwgIShuZXdUZW1wbGF0ZUFyZ3MgaW5zdGFuY2VvZiBNdXRhdGluZ1RlbXBsYXRlQXJncykpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiV2hlbiBjaGFuZ2luZyB0byBjb250ZXh0IFwiICsgYmFzZS5jb250ZXh0ICsgXCIgY291bGQgbm90IGZpbmQgYW4gYWN0dWFsIHRlbXBsYXRlIGFyZ3MgY29udGV4dFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0aGVuIHdlIGdvdCB0byB1c2UgdGhlIGZvcmVhY2ggY29udGV4dCBpZiB3ZSBoYXZlIG9uZVxuICAgIGlmIChiYXNlLmZvckVhY2gpIHtcbiAgICAgIGNvbnN0IHJlbmRlckVhY2hCYXNlZE9uQ29udGV4dCA9IChyZXNvbHZlZENvbnRleHQ6IFRlbXBsYXRlQXJncyk6IFJlYWN0LlJlYWN0Tm9kZSA9PiB7XG4gICAgICAgIC8vIGFuZCB0aGlzIHJlc29sdmVkIGNvbnRleHQgaXMgdGhlIGNvbnRleHQgdGhhdCBpcyByZXNvbHZlZCBlaXRoZXIgZnJvbSB0aGUgXCJjb250ZXh0XCIga2V5XG4gICAgICAgIC8vIG9yIHRoZSBsYWNrIG9mIGl0XG4gICAgICAgIGlmIChiYXNlLmlmQ29uZGl0aW9uKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSByZXNvbHZlZENvbnRleHQucHJvcGVydGllc1tiYXNlLmlmQ29uZGl0aW9uXTtcbiAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhbmQgc3VjaCB3ZSBmaW5kIHdoYXQgd2UgYXJlIHN1cHBvc2VkIHRvIGxvb3AgZm9yXG4gICAgICAgIGNvbnN0IGxvb3BFbGVtZW50QmFzZSA9IHJlc29sdmVkQ29udGV4dCAmJiByZXNvbHZlZENvbnRleHQucHJvcGVydGllc1tiYXNlLmZvckVhY2hdO1xuXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuUmVuZGVyRm4gPSAoZWFjaEVsZW1lbnRDb250ZXh0OiBUZW1wbGF0ZUFyZ3MsIGtleT86IHN0cmluZyB8IG51bWJlcik6IFJlYWN0LlJlYWN0Tm9kZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlYWN0aWZ5RWxlbWVudEJhc2UoXG4gICAgICAgICAgICByZWdpc3RyeSxcbiAgICAgICAgICAgIFRhZyxcbiAgICAgICAgICAgIGJhc2VDbGFzcyxcbiAgICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAgICAgd3JhcENoaWxkcmVuLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhY3RpdmU6IGFyZy5hY3RpdmUsXG4gICAgICAgICAgICAgIHNlbGVjdGVkOiBhcmcuc2VsZWN0ZWQsXG4gICAgICAgICAgICAgIGVsZW1lbnQ6IGJhc2UgYXMgUmljaEVsZW1lbnQsXG4gICAgICAgICAgICAgIGFzVGVtcGxhdGU6IHRydWUsXG4gICAgICAgICAgICAgIGN1c3RvbVByb3BzOiBhcmcuY3VzdG9tUHJvcHMsXG4gICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICB0ZW1wbGF0ZUFyZ3M6IGVhY2hFbGVtZW50Q29udGV4dCxcbiAgICAgICAgICAgICAgdGVtcGxhdGVSb290QXJnczogY3VycmVudFRlbXBsYXRlUm9vdEFyZ3MsXG4gICAgICAgICAgICAgIHRlbXBsYXRlSWdub3JlQ29udGV4dHVhbENoYW5nZXM6IHRydWUsXG4gICAgICAgICAgICAgIGV4dHJhT3B0aW9uczogYXJnLmV4dHJhT3B0aW9ucyxcbiAgICAgICAgICAgICAgcGFyZW50OiBhcmcucGFyZW50LFxuICAgICAgICAgICAgICB0cmVlOiBhcmcudHJlZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaG9wZWZ1bGx5IGl0J2xsIGJlIGFuIGFycmF5XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGxvb3BFbGVtZW50QmFzZSkpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17YXJnLmtleX0+XG4gICAgICAgICAgICAgIHsobG9vcEVsZW1lbnRCYXNlIGFzIFRlbXBsYXRlQXJnc1tdKS5tYXAoKGxvb3BDb250ZXh0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghKGxvb3BDb250ZXh0IGluc3RhbmNlb2YgVGVtcGxhdGVBcmdzKSkge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgYSBwcm9wZXIgY29udGV4dCB2YWx1ZSBmb3IgaXRlbSBpbiBpbmRleCBcIiArIGluZGV4ICsgXCIgYXQgXCIgKyBiYXNlLmZvckVhY2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBub3RlIGhvdyB3ZSByZS1yZWFjdGlmeSB0aGUgY3VycmVudCBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gYnV0IHRlbGxpbmcgaXQgdG8gaWdub3JlIGNvbnRleHR1YWwgY2hhbmdlc1xuICAgICAgICAgICAgICAgIC8vIGJlY2F1c2Ugd2UgaGF2ZSBhbHJlYWR5IGRvbmUgdGhlbSBoZXJlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuUmVuZGVyRm4obG9vcENvbnRleHQsIGluZGV4KTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAobG9vcEVsZW1lbnRCYXNlIGluc3RhbmNlb2YgTXV0YXRpbmdUZW1wbGF0ZUFyZ3MpIHtcbiAgICAgICAgICAvLyBpZiBpdCdzIG11dGF0aW5nIHdlIGdvdCB0byBkbyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGFuZCBjYWxsIHRoZSB3cmFwcGVyIHdoaWNoIHdpbGwgcmVuZGVyIGFsbCB0aGUgY2hpbGRyZW5cbiAgICAgICAgICAvLyBpdHNlbGYgYW5kIGhvcGVmdWxseSBnaXZlIHRoZW0gYSBrZXlcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17YXJnLmtleX0+XG4gICAgICAgICAgICAgIHtsb29wRWxlbWVudEJhc2UubXV0YXRpbmdXcmFwcGVyKGNoaWxkcmVuUmVuZGVyRm4pfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGl0J3Mgbm90IGFuIGl0ZXJhYmxlLCB3ZSBjYW4ndCByZW5kZXIgYSB0aGluZ1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGZpcnN0IHdlIGdvdHRhIHNlZSB3aGF0IGtpbmQgb2Ygc29tZXRoaW5nIHdlIGdldCBmb3IgdGhlIGZvcmVhY2ggY29udGV4dFxuICAgICAgLy8gaWYgd2UgZ290IGEgbXV0YXRpbmcgY29udGV4dCBmcm9tIHRoZSBtb3ZlIGluc2lkZSB0aGUgXCJjb250ZXh0XCIga2V5XG4gICAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgaXQgaW4gb3JkZXIgdG8gZ2V0IG91ciBjb250ZXh0XG4gICAgICBpZiAobmV3VGVtcGxhdGVBcmdzIGluc3RhbmNlb2YgTXV0YXRpbmdUZW1wbGF0ZUFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXthcmcua2V5fT5cbiAgICAgICAgICAgIHtuZXdUZW1wbGF0ZUFyZ3MubXV0YXRpbmdXcmFwcGVyKHJlbmRlckVhY2hCYXNlZE9uQ29udGV4dCl9XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZW5kZXJFYWNoQmFzZWRPbkNvbnRleHQobmV3VGVtcGxhdGVBcmdzKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5ld1RlbXBsYXRlQXJncyBpbnN0YW5jZW9mIE11dGF0aW5nVGVtcGxhdGVBcmdzKSB7XG4gICAgICAvLyBvdGhlcndpc2Ugd2l0aCBubyBmb3JlYWNoIGxvb3AgYWxvbmdzaWRlIG91ciBjb250ZXh0IGNoYW5nZVxuICAgICAgLy8gd2Ugd2lsbCBzaW1wbHkgdXNlIG91ciBtdXRhdGluZyB3cmFwcGVyIHRvIHJlc29sdmUgdGhlIG5ldyBjb250ZXh0XG4gICAgICByZXR1cm4gbmV3VGVtcGxhdGVBcmdzLm11dGF0aW5nV3JhcHBlcigobmV3Q29udGV4dDogVGVtcGxhdGVBcmdzKSA9PiB7XG4gICAgICAgIC8vIGFuZCByZXF1ZXN0IGEgcmUtcmVhY3RpZmljYXRpb24gb2YgdGhpcyBzYW1lIGVsZW1lbnRcbiAgICAgICAgLy8gYnV0IHdpdGggaWdub3JpbmcgY29udGV4dHVhbCBjaGFuZ2VzXG4gICAgICAgIHJldHVybiByZWFjdGlmeUVsZW1lbnRCYXNlKFxuICAgICAgICAgIHJlZ2lzdHJ5LFxuICAgICAgICAgIFRhZyxcbiAgICAgICAgICBiYXNlQ2xhc3MsXG4gICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgd3JhcENoaWxkcmVuLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFjdGl2ZTogYXJnLmFjdGl2ZSxcbiAgICAgICAgICAgIHNlbGVjdGVkOiBhcmcuc2VsZWN0ZWQsXG4gICAgICAgICAgICBlbGVtZW50OiBiYXNlIGFzIFJpY2hFbGVtZW50LFxuICAgICAgICAgICAgYXNUZW1wbGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGN1c3RvbVByb3BzOiBhcmcuY3VzdG9tUHJvcHMsXG4gICAgICAgICAgICBrZXk6IGFyZy5rZXksXG4gICAgICAgICAgICB0ZW1wbGF0ZUFyZ3M6IG5ld0NvbnRleHQsXG4gICAgICAgICAgICB0ZW1wbGF0ZVJvb3RBcmdzOiBjdXJyZW50VGVtcGxhdGVSb290QXJncyxcbiAgICAgICAgICAgIHRlbXBsYXRlSWdub3JlQ29udGV4dHVhbENoYW5nZXM6IHRydWUsXG4gICAgICAgICAgICBleHRyYU9wdGlvbnM6IGFyZy5leHRyYU9wdGlvbnMsXG4gICAgICAgICAgICBwYXJlbnQ6IGFyZy5wYXJlbnQsXG4gICAgICAgICAgICB0cmVlOiBhcmcudHJlZSxcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvdGhlcndpc2UgaXQgaXMgbm90IG11dGF0aW5nIGl0IGlzIHNpbXBseSB0ZW1wbGF0ZVxuICAgICAgLy8gYXJncyBzbyB3ZSByZWFzaWduIGFuZCBrZWVwIGdvaW5nIHdpdGggdGhpcyBzYW1lIGV4ZWN1dGlvblxuICAgICAgY3VycmVudFRlbXBsYXRlQXJncyA9IG5ld1RlbXBsYXRlQXJncztcbiAgICB9XG4gIH1cblxuICAvLyBpZiB3ZSBoYXZlIGFuIGlmIGNvbmRpdGlvbiB3ZSBjaGVjayBmb3IgaXRcbiAgaWYgKGFyZy5hc1RlbXBsYXRlICYmIGJhc2UuaWZDb25kaXRpb24pIHtcbiAgICBjb25zdCB2YWx1ZSA9IGN1cnJlbnRUZW1wbGF0ZUFyZ3MgJiYgY3VycmVudFRlbXBsYXRlQXJncy5wcm9wZXJ0aWVzW2Jhc2UuaWZDb25kaXRpb25dO1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8vIG5vdyB3ZSBkbyB0aGlzIGlmIHdlIGhhdmUgVUkgaGFuZGxlcnNcbiAgLy8gZm9yIHRoZSBnaXZlbiBlbGVtZW50IGFuZCB3ZSBhcmUgd29ya2luZyBvdXRcbiAgLy8gYXMgYSB0ZW1wbGF0ZVxuICBpZiAoYXJnLmFzVGVtcGxhdGUgJiYgYmFzZS51aUhhbmRsZXIpIHtcblxuICAgIC8vIGFuZCB3ZSBmaW5kIHRoZSBnaXZlbiBoYW5kbGVyLCBlaXRoZXIgZnJvbSB0aGUgY3VycmVudCBjb250ZXh0XG4gICAgLy8gb3IgdGhlIHJvb3QgY29udGV4dFxuICAgIGxldCBIYW5kbGVyOiBhbnkgPSAoXG4gICAgICBjdXJyZW50VGVtcGxhdGVBcmdzICYmIGN1cnJlbnRUZW1wbGF0ZUFyZ3MucHJvcGVydGllc1tiYXNlLnVpSGFuZGxlcl1cbiAgICApO1xuXG4gICAgaWYgKEhhbmRsZXIgaW5zdGFuY2VvZiBOb25Sb290SW5oZXJpdGFibGUpIHtcbiAgICAgIEhhbmRsZXIgPSBIYW5kbGVyLnZhbHVlO1xuICAgIH0gZWxzZSBpZiAoIUhhbmRsZXIpIHtcbiAgICAgIEhhbmRsZXIgPSBjdXJyZW50VGVtcGxhdGVSb290QXJncyAmJiBjdXJyZW50VGVtcGxhdGVSb290QXJncy5wcm9wZXJ0aWVzW2Jhc2UudWlIYW5kbGVyXTtcblxuICAgICAgaWYgKEhhbmRsZXIgaW5zdGFuY2VvZiBOb25Sb290SW5oZXJpdGFibGUpIHtcbiAgICAgICAgSGFuZGxlciA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgd2UgaGF2ZSBpdCwgd2UgdXNlIGl0XG4gICAgaWYgKEhhbmRsZXIpIHtcblxuICAgICAgLy8gbGV0J3MgbWFrZSB0aGUgY2hpbGRyZW4gZm9yIGl0XG4gICAgICBjb25zdCBoYW5kbGVyQ2hpbGRyZW4gPSBjaGlsZHJlbiA/IGNoaWxkcmVuLm1hcCgoYywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAvLyB3ZSB1c2UgdGhlc2Ugb3B0aW9ucyBhbmQgd2UgYWRkIHRoZSBrZXlcbiAgICAgICAgLy8gaW4gdGhlcmVcbiAgICAgICAgY29uc3Qgc3BlY2lmaWNDaGlsZFRlbXBsYXRlT3B0aW9uczogSVJlYWN0aWZ5QXJnPFJpY2hFbGVtZW50IHwgSVRleHQ+ID0ge1xuICAgICAgICAgIGFzVGVtcGxhdGU6IGFyZy5hc1RlbXBsYXRlLFxuICAgICAgICAgIGFjdGl2ZTogYXJnLmFjdGl2ZSxcbiAgICAgICAgICBzZWxlY3RlZDogYXJnLnNlbGVjdGVkLFxuICAgICAgICAgIGVsZW1lbnQ6IGMsXG4gICAgICAgICAgdGVtcGxhdGVBcmdzOiBjdXJyZW50VGVtcGxhdGVBcmdzLFxuICAgICAgICAgIHRlbXBsYXRlUm9vdEFyZ3M6IGN1cnJlbnRUZW1wbGF0ZVJvb3RBcmdzLFxuICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgZXh0cmFPcHRpb25zOiBhcmcuZXh0cmFPcHRpb25zLFxuICAgICAgICAgIHBhcmVudDogYmFzZSBhcyBSaWNoRWxlbWVudCxcbiAgICAgICAgICB0cmVlOiBhcmcudHJlZSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBhbmQgdGhlbiB3ZSBjYWxsIHRoZSByZWFjdGlmeVxuICAgICAgICBpZiAoKGMgYXMgSVRleHQpLnRleHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVnaXN0cnkuUkVBQ1RJRlkudGV4dChzcGVjaWZpY0NoaWxkVGVtcGxhdGVPcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZWdpc3RyeS5TRVJJQUxJWkVbKGMgYXMgUmljaEVsZW1lbnQpLnR5cGVdKSB7XG4gICAgICAgICAgcmV0dXJuIHJlZ2lzdHJ5LlJFQUNUSUZZWyhjIGFzIFJpY2hFbGVtZW50KS50eXBlXShzcGVjaWZpY0NoaWxkVGVtcGxhdGVPcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG9odGVyaXdzZSBudWxsXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSkgOiBjaGlsZHJlbjtcblxuICAgICAgbGV0IGNsYXNzTmFtZTogc3RyaW5nID0gbnVsbDtcbiAgICAgIGJhc2UucmljaENsYXNzTGlzdCAmJiBiYXNlLnJpY2hDbGFzc0xpc3QuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBjbGFzc05hbWUgPSAoY2xhc3NOYW1lIHx8IFwiXCIpICsgXCIgcmljaC10ZXh0LS1cIiArIGM7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHN0eWxlID0gY29udmVydFN0eWxlU3RyaW5nVG9SZWFjdE9iamVjdChiYXNlLnN0eWxlKTtcbiAgICAgIGNvbnN0IHN0eWxlQWN0aXZlID0gY29udmVydFN0eWxlU3RyaW5nVG9SZWFjdE9iamVjdChiYXNlLnN0eWxlQWN0aXZlKTtcbiAgICAgIGNvbnN0IHN0eWxlSG92ZXIgPSBjb252ZXJ0U3R5bGVTdHJpbmdUb1JlYWN0T2JqZWN0KGJhc2Uuc3R5bGVIb3Zlcik7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2FyZy5rZXl9PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vIGFuZCB3ZSBleHRyYWN0IHRoZSBwb3RlbnRpYWwgZXZlbnRzIGZyb20gdGhlIGN1cnJlbnQgdGVtcGxhdGUgYXJndW1lbnRzXG4gICAgICAgICAgICAvLyB0aGF0IGFyZSB1c2VkIGluIHRoZSBnaXZlbiBiYXNlIHRvIHBhc3MgaXQgdG8gdGhlIHVpIGhhbmRsZXIgc28gaXQgZGVjaWRlc1xuICAgICAgICAgICAgLy8gd2hhdCB0byBkbyB3aXRoIHRoZW1cbiAgICAgICAgICAgIHJldHJpZXZlRWxlbWVudEFjdGlvbnNGb3JSZWFjdChiYXNlLCBjdXJyZW50VGVtcGxhdGVBcmdzLCBjdXJyZW50VGVtcGxhdGVSb290QXJncywgKGV2ZW50cykgPT4gKFxuICAgICAgICAgICAgICA8SGFuZGxlclxuICAgICAgICAgICAgICAgIGFyZ3M9e2Jhc2UudWlIYW5kbGVyQXJnc31cbiAgICAgICAgICAgICAgICBjaGlsZHJlbj17aGFuZGxlckNoaWxkcmVufVxuICAgICAgICAgICAgICAgIGVsZW1lbnQ9e2FyZy5lbGVtZW50fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICBzdHlsZUFjdGl2ZT17c3R5bGVBY3RpdmV9XG4gICAgICAgICAgICAgICAgc3R5bGVIb3Zlcj17c3R5bGVIb3Zlcn1cbiAgICAgICAgICAgICAgICBldmVudHM9e2V2ZW50c31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvLyBub3cgd2UgY2FuIGRlZmluZSB0aGUgcHJvcHNcbiAgLy8gZ2l2ZW4gYWxsIG9mIHRoZSBiZWZvcmUgZmFpbGVkXG4gIGNvbnN0IGZpbmFsUHJvcHMgPSB7XG4gICAgLi4uYXJnLmN1c3RvbVByb3BzLFxuICB9O1xuXG4gIC8vIGRlZmluZSB0aGUgY2xhc3MgZm9yIGFjdGl2ZSBhbmQgaW5hY3RpdmVcbiAgaWYgKCFhcmcuYWN0aXZlKSB7XG4gICAgZmluYWxQcm9wcy5jbGFzc05hbWUgPSAoZmluYWxQcm9wcy5jbGFzc05hbWUgfHwgXCJcIikgKyBcIiBpbmFjdGl2ZVwiO1xuICB9IGVsc2Uge1xuICAgIGZpbmFsUHJvcHMuY2xhc3NOYW1lID0gKGZpbmFsUHJvcHMuY2xhc3NOYW1lIHx8IFwiXCIpICsgXCIgYWN0aXZlXCI7XG4gIH1cblxuICAvLyBkZWZpbmUgdGhlIGNsYXNzIGZvciBzZWxlY3Rpb25cbiAgaWYgKGFyZy5zZWxlY3RlZCkge1xuICAgIGZpbmFsUHJvcHMuY2xhc3NOYW1lID0gKGZpbmFsUHJvcHMuY2xhc3NOYW1lIHx8IFwiXCIpICsgXCIgc2VsZWN0ZWRcIjtcbiAgfVxuXG4gIC8vIGFkZCB0aGUgYmFzZSBjbGFzc1xuICBpZiAoYmFzZUNsYXNzKSB7XG4gICAgZmluYWxQcm9wcy5jbGFzc05hbWUgPSAoZmluYWxQcm9wcy5jbGFzc05hbWUgfHwgXCJcIikgKyBcIiBcIiArIGJhc2VDbGFzcztcbiAgfVxuXG4gIC8vIHRoZSByaWNoIGNsYXNzZXNcbiAgaWYgKGJhc2UucmljaENsYXNzTGlzdCkge1xuICAgIGJhc2UucmljaENsYXNzTGlzdC5mb3JFYWNoKChjKSA9PiB7XG4gICAgICBmaW5hbFByb3BzLmNsYXNzTmFtZSA9IChmaW5hbFByb3BzLmNsYXNzTmFtZSB8fCBcIlwiKSArIFwiIHJpY2gtdGV4dC0tXCIgKyBjO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gYW5kIHNldCBpdCB1cCBhcyB0ZW1wbGF0ZSBpbiB0aGUgY2xhc3MgaWZcbiAgLy8gaHRtbCBoYXMgYmVlbiBkZWZpbmVkIGZyb20gdGhlIGNvbnRleHQgYXMgZGF0YS1odG1sXG4gIC8vIHdoaWNoIGlzIGEgdGVtcGxhdGluZyBhdHRyaWJ1dGVcbiAgaWYgKCh0eXBlb2YgYmFzZS5odG1sID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBiYXNlLnRleHRDb250ZW50ID09PSBcInN0cmluZ1wiKSAmJiAhYXJnLmFjdGl2ZSkge1xuICAgIGZpbmFsUHJvcHMuY2xhc3NOYW1lID0gKGZpbmFsUHJvcHMuY2xhc3NOYW1lIHx8IFwiXCIpICsgXCIgdGVtcGxhdGVcIjtcbiAgfVxuXG4gIC8vIG5vdyB3ZSBjYW4gZGVmaW5lIHRoZSBzdHlsZVxuICBpZiAoYmFzZS5zdHlsZSkge1xuICAgIGZpbmFsUHJvcHMuc3R5bGUgPSB7XG4gICAgICAuLi5jb252ZXJ0U3R5bGVTdHJpbmdUb1JlYWN0T2JqZWN0KGJhc2Uuc3R5bGUpLFxuICAgICAgLi4uZmluYWxQcm9wcy5zdHlsZSxcbiAgICB9O1xuICB9XG5cbiAgLy8gaWYgd2UgYXJlIHdvcmtpbmcgYXMgYSB0ZW1wbGF0ZSBhbmQgd2UgaGF2ZSBhIGh0bWwgZGF0YSBhdHRyaWJ1dGVcbiAgaWYgKGFyZy5hc1RlbXBsYXRlICYmIHR5cGVvZiBiYXNlLmh0bWwgPT09IFwic3RyaW5nXCIgJiYgIVZPSURfVEFHU19VTk1BTkFHRUQuaW5jbHVkZXMoVGFnKSkge1xuICAgIC8vIHdlIHJlbW92ZSB0aGUgY2hpbGRyZW4gaWYgd2UgaGF2ZSB0aGVtXG4gICAgZGVsZXRlIGZpbmFsUHJvcHMuY2hpbGRyZW47XG5cbiAgICBsZXQgdmFsdWUgPSAoXG4gICAgICBjdXJyZW50VGVtcGxhdGVBcmdzICYmIGN1cnJlbnRUZW1wbGF0ZUFyZ3MucHJvcGVydGllc1tiYXNlLmh0bWxdXG4gICAgKTtcblxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE5vblJvb3RJbmhlcml0YWJsZSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS52YWx1ZTtcbiAgICB9IGVsc2UgaWYgKCF2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBjdXJyZW50VGVtcGxhdGVSb290QXJncyAmJiBjdXJyZW50VGVtcGxhdGVSb290QXJncy5wcm9wZXJ0aWVzW2Jhc2UuaHRtbF07XG5cbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE5vblJvb3RJbmhlcml0YWJsZSkge1xuICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIC8vIGFuZCBkZWZpbmUgdGhlIGRhbmdlcm91c2x5IHNldCBpbm5lciBodG1sXG4gICAgICAgIGZpbmFsUHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgPSB7IF9faHRtbDogdmFsdWUgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRlZmluZSBpdCBhcyBhIHJlYWN0IGNvbXBvbmVudFxuICAgICAgICBmaW5hbFByb3BzLmNoaWxkcmVuID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbmFsUHJvcHMuY2hpbGRyZW4gPSBudWxsO1xuICAgIH1cbiAgfSBlbHNlIGlmIChhcmcuYXNUZW1wbGF0ZSAmJiB0eXBlb2YgYmFzZS50ZXh0Q29udGVudCA9PT0gXCJzdHJpbmdcIiAmJiAhVk9JRF9UQUdTX1VOTUFOQUdFRC5pbmNsdWRlcyhUYWcpKSB7XG4gICAgLy8gd2UgcmVtb3ZlIHRoZSBjaGlsZHJlbiBpZiB3ZSBoYXZlIHRoZW1cbiAgICBkZWxldGUgZmluYWxQcm9wcy5jaGlsZHJlbjtcbiAgICAvLyBhbmQgZGVmaW5lIHRoZSB0ZXh0IGNvbnRlbnRcbiAgICBsZXQgdmFsdWUgPSAoXG4gICAgICBjdXJyZW50VGVtcGxhdGVBcmdzICYmIGN1cnJlbnRUZW1wbGF0ZUFyZ3MucHJvcGVydGllc1tiYXNlLnRleHRDb250ZW50XVxuICAgICk7XG5cbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBOb25Sb290SW5oZXJpdGFibGUpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUudmFsdWU7XG4gICAgfSBlbHNlIGlmICghdmFsdWUpIHtcbiAgICAgIHZhbHVlID0gY3VycmVudFRlbXBsYXRlUm9vdEFyZ3MgJiYgY3VycmVudFRlbXBsYXRlUm9vdEFyZ3MucHJvcGVydGllc1tiYXNlLnRleHRDb250ZW50XTtcblxuICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTm9uUm9vdEluaGVyaXRhYmxlKSB7XG4gICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBmaW5hbFByb3BzLmNoaWxkcmVuID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbmFsUHJvcHMuY2hpbGRyZW4gPSBudWxsO1xuICAgIH1cbiAgfSBlbHNlIGlmICghZmluYWxQcm9wcy5jaGlsZHJlbiAmJiBjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAvLyBvdGhlcndpc2UgaWYgbm8gY2hpbGRyZW4gaGF2ZSBiZWVuIGRlZmluZWQgaW4gdGhlIGdpdmVuXG4gICAgLy8gY3VzdG9tIHByb3BlcnRpZXMsIHRoZW4gd2UgYXJlIGdvaW5nIHRvIGluc3RhbnRpYXRlXG4gICAgLy8gYmFzZWQgb24gdGhlIGNoaWxkcmVuIHdlIGFyZSByZXF1ZXN0ZWQgdG8gcmVuZGVyXG4gICAgLy8gYnkgdGhlIGJhc2UgZWxlbWVudFxuICAgIGNvbnN0IGNoaWxkcmVuQmFzZSA9IChcbiAgICAgIDw+XG4gICAgICAgIHtcbiAgICAgICAgICBjaGlsZHJlbi5tYXAoKGMsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIC8vIHdlIHVzZSB0aGVzZSBvcHRpb25zIGFuZCB3ZSBhZGQgdGhlIGtleVxuICAgICAgICAgICAgLy8gaW4gdGhlcmVcbiAgICAgICAgICAgIGNvbnN0IHNwZWNpZmljQ2hpbGRUZW1wbGF0ZU9wdGlvbnM6IElSZWFjdGlmeUFyZzxSaWNoRWxlbWVudCB8IElUZXh0PiA9IHtcbiAgICAgICAgICAgICAgYXNUZW1wbGF0ZTogYXJnLmFzVGVtcGxhdGUsXG4gICAgICAgICAgICAgIGFjdGl2ZTogYXJnLmFjdGl2ZSxcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGFyZy5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgZWxlbWVudDogYyxcbiAgICAgICAgICAgICAgdGVtcGxhdGVBcmdzOiBjdXJyZW50VGVtcGxhdGVBcmdzLFxuICAgICAgICAgICAgICB0ZW1wbGF0ZVJvb3RBcmdzOiBjdXJyZW50VGVtcGxhdGVSb290QXJncyxcbiAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgZXh0cmFPcHRpb25zOiBhcmcuZXh0cmFPcHRpb25zLFxuICAgICAgICAgICAgICBwYXJlbnQ6IGJhc2UgYXMgUmljaEVsZW1lbnQsXG4gICAgICAgICAgICAgIHRyZWU6IGFyZy50cmVlLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gYW5kIHRoZW4gd2UgY2FsbCB0aGUgcmVhY3RpZnlcbiAgICAgICAgICAgIGlmICgoYyBhcyBJVGV4dCkudGV4dCkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVnaXN0cnkuUkVBQ1RJRlkudGV4dChzcGVjaWZpY0NoaWxkVGVtcGxhdGVPcHRpb25zKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVnaXN0cnkuU0VSSUFMSVpFWyhjIGFzIFJpY2hFbGVtZW50KS50eXBlXSkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVnaXN0cnkuUkVBQ1RJRllbKGMgYXMgUmljaEVsZW1lbnQpLnR5cGVdKHNwZWNpZmljQ2hpbGRUZW1wbGF0ZU9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBvaHRlcml3c2UgbnVsbFxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC8+XG4gICAgKTtcblxuICAgIC8vIGEgY2hhbmdlIG9mIGNvbnRleHQgaGFzIGhhcHBlbmVkIHNvIHdlIG1pZ2h0IGFzIHdlbGxcbiAgICAvLyBjaGVjayBmb3IgYSB3cmFwcGVyIGZvciB0aGUgZ2l2ZW4gY29udGV4dFxuICAgIGlmIChcbiAgICAgIChiYXNlLmNvbnRleHQgfHwgYmFzZS5mb3JFYWNoKSAmJlxuICAgICAgY3VycmVudFRlbXBsYXRlQXJncyAmJlxuICAgICAgY3VycmVudFRlbXBsYXRlQXJncy53cmFwcGVyXG4gICAgKSB7XG4gICAgICBmaW5hbFByb3BzLmNoaWxkcmVuID0gY3VycmVudFRlbXBsYXRlQXJncy53cmFwcGVyKGNoaWxkcmVuQmFzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbmFsUHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbkJhc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgd2UgaGF2ZSBhIGZ1bmN0aW9uIHRvIHdyYXAgY2hpbGRyZW5cbiAgaWYgKHdyYXBDaGlsZHJlbiAmJiBmaW5hbFByb3BzLmNoaWxkcmVuKSB7XG4gICAgLy8gdGhhdCdzIHdoYXQgd2UgdXNlIGFzIGNoaWxkcmVuXG4gICAgZmluYWxQcm9wcy5jaGlsZHJlbiA9IHdyYXBDaGlsZHJlbihmaW5hbFByb3BzLmNoaWxkcmVuKTtcbiAgfVxuXG4gIGlmIChhcmcuZXh0cmFPcHRpb25zICYmIGFyZy5leHRyYU9wdGlvbnMub25DdXN0b21BdHRyaWJ1dGVzRm9yKSB7XG4gICAgY29uc3QgZXh0cmFQcm9wcyA9IGFyZy5leHRyYU9wdGlvbnMub25DdXN0b21BdHRyaWJ1dGVzRm9yKGJhc2UgYXMgYW55KTtcbiAgICBpZiAoZXh0cmFQcm9wcykge1xuICAgICAgT2JqZWN0LmtleXMoZXh0cmFQcm9wcykuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICBmaW5hbFByb3BzW2F0dHJdID0gZXh0cmFQcm9wc1thdHRyXTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50IGtleT17YXJnLmtleX0+XG4gICAgICB7XG4gICAgICAgIHJldHJpZXZlRWxlbWVudEFjdGlvbnNGb3JSZWFjdChiYXNlLCBjdXJyZW50VGVtcGxhdGVBcmdzLCBjdXJyZW50VGVtcGxhdGVSb290QXJncywgKGV2ZW50cykgPT4ge1xuICAgICAgICAgIGNvbnN0IGRlZmF1bHRSZXR1cm4gPSAocHN0eWxlQWN0aXZlPzogYW55LCBwc3R5bGVIb3Zlcj86IGFueSwgZXh0cmFQcm9wcz86IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKGJhc2Uuc3R5bGVBY3RpdmUgfHwgYmFzZS5zdHlsZUhvdmVyKSB7XG4gICAgICAgICAgICAgIC8vIHRoZW4gd2UgZmV0Y2ggdGhlbVxuICAgICAgICAgICAgICBjb25zdCBzdHlsZUFjdGl2ZSA9IHBzdHlsZUFjdGl2ZSB8fCBjb252ZXJ0U3R5bGVTdHJpbmdUb1JlYWN0T2JqZWN0KGJhc2Uuc3R5bGVBY3RpdmUpO1xuICAgICAgICAgICAgICBjb25zdCBzdHlsZUhvdmVyID0gcHN0eWxlSG92ZXIgfHwgY29udmVydFN0eWxlU3RyaW5nVG9SZWFjdE9iamVjdChiYXNlLnN0eWxlSG92ZXIpO1xuXG4gICAgICAgICAgICAgIC8vIGR1ZSB0byBhIGJ1ZyBpbiB0eXBlc2NyaXB0IEkgaGF2ZSB0byBkbyBpdCB0aGlzIHdheVxuICAgICAgICAgICAgICBjb25zdCBwcm9wc0ZvclRoaXM6IGFueSA9IHtcbiAgICAgICAgICAgICAgICAuLi5maW5hbFByb3BzLFxuICAgICAgICAgICAgICAgIC4uLmV2ZW50cyxcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IFRhZyxcbiAgICAgICAgICAgICAgICBzdHlsZUFjdGl2ZSxcbiAgICAgICAgICAgICAgICBzdHlsZUhvdmVyLFxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIGlmIChleHRyYVByb3BzKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihwcm9wc0ZvclRoaXMsIGV4dHJhUHJvcHMpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gYW5kIG5vdyB3ZSByZXR1cm4gd2l0aCB0aGUgZHluYW1pYyBjb21wb25lbnRcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UmVhY3RpZmllZEVsZW1lbnRXaXRoSG92ZXJBbmRBY3RpdmUgey4uLnByb3BzRm9yVGhpc30gLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChleHRyYVByb3BzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICg8VGFnIHsuLi5maW5hbFByb3BzfSB7Li4uZXh0cmFQcm9wc30gey4uLmV2ZW50c30gLz4pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiAoPFRhZyB7Li4uZmluYWxQcm9wc30gey4uLmV2ZW50c30gLz4pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgdG9SZW5kZXI6IFJlYWN0LlJlYWN0Tm9kZTtcbiAgICAgICAgICBpZiAoYXJnLmV4dHJhT3B0aW9ucyAmJiBhcmcuZXh0cmFPcHRpb25zLm9uQ3VzdG9tKSB7XG4gICAgICAgICAgICAvLyB0aGVuIHdlIGZldGNoIHRoZW1cbiAgICAgICAgICAgIGNvbnN0IHN0eWxlQWN0aXZlID0gYmFzZS5zdHlsZUFjdGl2ZSA/IGNvbnZlcnRTdHlsZVN0cmluZ1RvUmVhY3RPYmplY3QoYmFzZS5zdHlsZUFjdGl2ZSkgOiBudWxsO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVIb3ZlciA9IGJhc2Uuc3R5bGVIb3ZlciA/IGNvbnZlcnRTdHlsZVN0cmluZ1RvUmVhY3RPYmplY3QoYmFzZS5zdHlsZUhvdmVyKSA6IG51bGw7XG5cbiAgICAgICAgICAgIHRvUmVuZGVyID0gYXJnLmV4dHJhT3B0aW9ucy5vbkN1c3RvbShcbiAgICAgICAgICAgICAgYmFzZSBhcyBhbnksXG4gICAgICAgICAgICAgIHsgLi4uZmluYWxQcm9wcywgLi4uZXZlbnRzIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBUYWcsXG4gICAgICAgICAgICAgICAgc3R5bGVBY3RpdmUsXG4gICAgICAgICAgICAgICAgc3R5bGVIb3ZlcixcbiAgICAgICAgICAgICAgICBkZWZhdWx0UmV0dXJuOiBkZWZhdWx0UmV0dXJuLmJpbmQobnVsbCwgc3R5bGVBY3RpdmUsIHN0eWxlSG92ZXIpLFxuICAgICAgICAgICAgICAgIHBhcmVudDogYXJnLnBhcmVudCxcbiAgICAgICAgICAgICAgICB0cmVlOiBhcmcudHJlZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvUmVuZGVyID0gZGVmYXVsdFJldHVybigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhcmcuZXh0cmFPcHRpb25zICYmIGFyZy5leHRyYU9wdGlvbnMub25DdXN0b21XcmFwKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJnLmV4dHJhT3B0aW9ucy5vbkN1c3RvbVdyYXAoYmFzZSBhcyBhbnksIHRvUmVuZGVyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRvUmVuZGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuXG4vKipcbiAqIERlc2VyaWF6ZXMgYSBlbGVtZW50IHRoYXQgaXMgYW4gSFRNTCBlbGVtZW50IGludG8gaXRzIFJpY2hFbGVtZW50XG4gKiBiYXNlIGZvcm0sIHNvIGl0IGV4dHJhY3RzIGFsbCB0aGUgZ2VuZXJpYyBkYXRhLXggcHJvcGVydGllcyBhbmQgc3R5bGVzXG4gKiBhbmQgd2hhdG5vdCB0aGF0IGFyZSBzaGFyZWQgaW4gYmV0d2VlbiBhbGwgdGhlIHJpY2ggZWxlbWVudHNcbiAqIFxuICogQHBhcmFtIG5vZGUgdGhlIG5vZGUgaW4gcXVlc3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlc2VyaWFsaXplRWxlbWVudEJhc2Uobm9kZTogSFRNTEVsZW1lbnQpOiBJRWxlbWVudEJhc2Uge1xuICAvLyBubyBub2RlLCBubyBwcm9wZXJ0aWVzXG4gIGlmICghbm9kZSkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8vIG5vdyB3ZSBjYW4gZ2V0IHVwIGFuIGVsZW1lbnQgYmFzZVxuICBjb25zdCByZXN1bHQ6IElFbGVtZW50QmFzZSA9IHt9O1xuXG4gIC8vIGlmIHdlIGhhdmUgYSBjbGFzcyBsaXN0XG4gIGlmIChub2RlLmNsYXNzTGlzdCkge1xuICAgIG5vZGUuY2xhc3NMaXN0LmZvckVhY2goKGMpID0+IHtcbiAgICAgIGlmIChjLnN0YXJ0c1dpdGgoXCJyaWNoLXRleHQtLVwiKSkge1xuICAgICAgICByZXN1bHQucmljaENsYXNzTGlzdCA9IHJlc3VsdC5yaWNoQ2xhc3NMaXN0IHx8IFtdO1xuICAgICAgICByZXN1bHQucmljaENsYXNzTGlzdC5wdXNoKGMuc3Vic3RyKDExKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBub3cgd2UgY2hlY2sgb3VyIHRyYW5zbGF0aW9ucyBsaXN0cyB0aGF0IHdlIGhhZFxuICAvLyBkZWZpbmVkIGJlZm9yZSBpbiBvdXIgdHJhbnNsYXRpb25zIGxpc3Qgd2hpY2ggdHJhbnNsYXRlc1xuICAvLyBzZXZlcmFsIHByb3BlcnRpZXMgaW50byB0aGUgZ2l2ZW4gYmFzZSBlbGVtZW50IHByb3BlcnR5XG4gIC8vIHdoZW4gdGhlcmUncyBhIDEtMSByZWxhdGlvbnNoaXBcbiAgT2JqZWN0LmtleXModHJhbnNsYXRpb25zKS5mb3JFYWNoKCh0S2V5KSA9PiB7XG4gICAgY29uc3QgYXR0ciA9IHRyYW5zbGF0aW9uc1t0S2V5XSBhcyBzdHJpbmc7XG4gICAgY29uc3QgdmFsdWUgPSBub2RlLmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHJlc3VsdFt0S2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gbm93IGZvciB0aGUgdWkgaGFuZGxlciBpZiB3ZSBnb3Qgb25lXG4gIC8vIGZyb20gb3VyIHRyYW5zbGF0aW9uIHRoYXQgYWRkZWQgaW50byB0aGUgcmVzdWx0XG4gIGlmIChyZXN1bHQudWlIYW5kbGVyICYmIG5vZGUuZGF0YXNldCkge1xuICAgIHJlc3VsdC51aUhhbmRsZXJBcmdzID0ge307XG4gICAgLy8gd2UgZ290IHRvIGV4dHJhY3QgZXZlcnkgZGF0YXNldCBwcm9wZXJ0eVxuICAgIC8vIGFzIGFuIGF0dHJpYnV0ZSBmb3IgdGhlIHVpIGhhbmRsZXJcbiAgICBPYmplY3Qua2V5cyhub2RlLmRhdGFzZXQpLmZvckVhY2goKGRhdGFzZXRLZXkpID0+IHtcbiAgICAgIHJlc3VsdC51aUhhbmRsZXJBcmdzW2RhdGFzZXRLZXldID0gbm9kZS5kYXRhc2V0W2RhdGFzZXRLZXldO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gYW5kIHdlIHRoZW4gcmV0dXJuIHRoYXRcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBiYXNlIG9mIGV2ZXJ5IHNpbmdsZSBlbGVtZW50IHRoYXQgaXMgdG9cbiAqIGV4aXN0IHdpdGhpbiB0aGUgc2xhdGUgZWRpdG9yLCB0aGVzZSBhcmUgdGhlIHByb3BlcnRpZXNcbiAqIHRoYXQgaXQgbWlnaHQgaGF2ZSByZWdhcmRsZXNzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUVsZW1lbnRCYXNlIHtcbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIG5hbWUsIGp1c3QgdXNlZCB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIHRyZWVcbiAgICovXG4gIGdpdmVuTmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIHN0YW5kYXJkIHN0eWxlIHRoYXQgdHJhbnNsYXRlcyB0byB0aGUgc3R5bGUgdGFnXG4gICAqIGZvbGxvd2luZyB0aGUgdGV4dCBzcGVjaWZpY2F0aW9ucyBvbmx5IHNvbWUgcHJvcGVydGllcyBhcmUgYWxsb3dlZFxuICAgKiB3aXRoaW4gaXRcbiAgICovXG4gIHN0eWxlPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhpcyBpcyBzaW1pbGFyIHRvIHRoZSBzdHlsZSB0YWcgYnV0IHJlcHJlc2VudHMgdGhlIHN0eWxlIHRhZyBhcyBpdFxuICAgKiBpcyBhcHBsaWVkIGR1cmluZyBhIGhvdmVyIGV2ZW50LCByZXByZXNlbnRzIGRhdGEtc3R5bGUtaG92ZXJcbiAgICovXG4gIHN0eWxlSG92ZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTYW1lIGFzIHRoZSBzdHlsZSB0YWcgd2l0aCB0aGUgc2FtZSBydWxlcyBidXQgcmVwcmVzZW50cyBkYXRhLXN0eWxlLWFjdGl2ZVxuICAgKiBhbmQgaXQncyB0aGUgc3R5bGUgZm9yIHdoZW4gdGhlIGl0ZW0gaXMgaW4gYW4gYWN0aXZlIHN0YXRlXG4gICAqL1xuICBzdHlsZUFjdGl2ZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBjbGFzc2VzIHRoYXQgdGhpcyBlbGVtZW50IGhhcyBhcHBsaWVkXG4gICAqIHRoZXNlIGNsYXNzZXMgcmVwcmVzZW50IHRoZSBleHRyYSBjbGFzc2VzIGFuZCBub3QgdGhlIGJhc2VcbiAgICogY2xhc3NlcyB0aGF0IGFyZSBhcHBsaWVkIGZvciB0aGUgZ2l2ZW4gdHlwZSwgc28gaXQncyBwcmltYXJpbHlcbiAgICogdGhlIHJpY2gtdGV4dC0tIGNsYXNzZXMgdHlwZXNcbiAgICovXG4gIHJpY2hDbGFzc0xpc3Q/OiBzdHJpbmdbXTtcblxuICAvLyBURU1QTEFUSU5HIFBST1BFUlRJRVNcbiAgLyoqXG4gICAqIEZvciB0ZW1wbGF0aW5nXG4gICAqIGFuZCBpZiBjb25kaXRpb24gZm9yIGNvbmRpdGlvbmFsIHJlbmRlcmluZ1xuICAgKi9cbiAgaWZDb25kaXRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBGb3IgdGVtcGxhdGluZ1xuICAgKiBSZXByZXNlbnRzIHJlcGxhY2VtZW50IGh0bWwgY29udGVudCBmb3IgdGhlIGlubmVyIEhUTUxcbiAgICogb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAgICovXG4gIGh0bWw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBGb3IgdGVtcGxhdGluZ1xuICAgKiBSZXByZXNlbnRzIHJlcGxhY2VtZW50IGZvciB0ZXh0dWFsIGNvbnRlbnRcbiAgICogb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAgICovXG4gIHRleHRDb250ZW50Pzogc3RyaW5nO1xuICAvKipcbiAgICogRm9yIHRlbXBsYXRpbmdcbiAgICogUmVwcmVzZW50cyBhIGNob3NlbiB1aSBoYW5kbGVyIGFuZCBpdCBhcHBsaWVzIHRvIHRoZSBwcm9wZXJ0eVxuICAgKiBkYXRhLXVpLWhhbmRsZXJcbiAgICovXG4gIHVpSGFuZGxlcj86IHN0cmluZztcbiAgLyoqXG4gICAqIEFyZ3VtZW50cyBmb3IgdGhlIHVpIGhhbmRsZXJcbiAgICovXG4gIHVpSGFuZGxlckFyZ3M/OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nLFxuICB9O1xuICAvKipcbiAgICogZm9yIHRlbXBsYXRpbmdcbiAgICogUmVwcmVzZW50cyBhIGNob3NlbiBjb250ZXh0IGFuZCBpdCBhcHBsaWVzIHRvIHRoZSBwcm9wZXJ0eVxuICAgKiBkYXRhLWNvbnRleHRcbiAgICovXG4gIGNvbnRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBmb3IgdGVtcGxhdGluZ1xuICAgKiBSZXByZXNlbnRzIHRoZSBjaG9zZW4gZWFjaCBjb250ZXh0IGFuZCBpdCBhcHBsaWVzIHRvIHRoZSBwcm9wZXJ0eVxuICAgKiBkYXRhLWZvci1lYWNoXG4gICAqL1xuICBmb3JFYWNoPzogc3RyaW5nO1xuICAvKipcbiAgICogRm9yIHRlbXBsYXRpbmdcbiAgICogUmVwcmVzZW50cyBhIHZhcmlhYmxlIGZvciB0ZW1wbGF0aW5nIGZvciB0aGUgZGF0YS1vbi1jbGljayBldmVudFxuICAgKi9cbiAgY2xpY2s/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBGb3IgdGVtcGxhdGluZ1xuICAgKiBSZXByZXNlbnRzIGEgdmFyaWFibGUgZm9yIHRlbXBsYXRpbmcgZm9yIHRoZSBkYXRhLW9uLWJsdXIgZXZlbnRcbiAgICovXG4gIGJsdXI/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBGb3IgdGVtcGxhdGluZ1xuICAgKiBSZXByZXNlbnRzIGEgdmFyaWFibGUgZm9yIHRlbXBsYXRpbmcgZm9yIHRoZSBkYXRhLW9uLWZvY3VzIGV2ZW50XG4gICAqL1xuICBmb2N1cz86IHN0cmluZztcbiAgLyoqXG4gICAqIEZvciB0ZW1wbGF0aW5nXG4gICAqIFJlcHJlc2VudHMgYSB2YXJpYWJsZSBmb3IgdGVtcGxhdGluZyBmb3IgdGhlIGRhdGEtb24taW5wdXQgZXZlbnRcbiAgICovXG4gIGlucHV0Pzogc3RyaW5nO1xuICAvKipcbiAgICogRm9yIHRlbXBsYXRpbmdcbiAgICogUmVwcmVzZW50cyBhIHZhcmlhYmxlIGZvciB0ZW1wbGF0aW5nIGZvciB0aGUgZGF0YS1vbi1rZXlkb3duIGV2ZW50XG4gICAqL1xuICBrZXlkb3duPzogc3RyaW5nO1xuICAvKipcbiAgICogRm9yIHRlbXBsYXRpbmdcbiAgICogUmVwcmVzZW50cyBhIHZhcmlhYmxlIGZvciB0ZW1wbGF0aW5nIGZvciB0aGUgZGF0YS1vbi1rZXlwcmVzcyBldmVudFxuICAgKi9cbiAga2V5cHJlc3M/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBGb3IgdGVtcGxhdGluZ1xuICAgKiBSZXByZXNlbnRzIGEgdmFyaWFibGUgZm9yIHRlbXBsYXRpbmcgZm9yIHRoZSBkYXRhLW9uLWtleXVwIGV2ZW50XG4gICAqL1xuICBrZXl1cD86IHN0cmluZztcbiAgLyoqXG4gICAqIEZvciB0ZW1wbGF0aW5nXG4gICAqIFJlcHJlc2VudHMgYSB2YXJpYWJsZSBmb3IgdGVtcGxhdGluZyBmb3IgdGhlIGRhdGEtb24tbW91c2Vkb3duIGV2ZW50XG4gICAqL1xuICBtb3VzZWRvd24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBGb3IgdGVtcGxhdGluZ1xuICAgKiBSZXByZXNlbnRzIGEgdmFyaWFibGUgZm9yIHRlbXBsYXRpbmcgZm9yIHRoZSBkYXRhLW9uLW1vdXNlZW50ZXIgZXZlbnRcbiAgICovXG4gIG1vdXNlZW50ZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBGb3IgdGVtcGxhdGluZ1xuICAgKiBSZXByZXNlbnRzIGEgdmFyaWFibGUgZm9yIHRlbXBsYXRpbmcgZm9yIHRoZSBkYXRhLW9uLW1vdXNlbGVhdmUgZXZlbnRcbiAgICovXG4gIG1vdXNlbGVhdmU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBGb3IgdGVtcGxhdGluZ1xuICAgKiBSZXByZXNlbnRzIGEgdmFyaWFibGUgZm9yIHRlbXBsYXRpbmcgZm9yIHRoZSBkYXRhLW9uLW1vdXNlbW92ZSBldmVudFxuICAgKi9cbiAgbW91c2Vtb3ZlPzogc3RyaW5nO1xuICAvKipcbiAgICogRm9yIHRlbXBsYXRpbmdcbiAgICogUmVwcmVzZW50cyBhIHZhcmlhYmxlIGZvciB0ZW1wbGF0aW5nIGZvciB0aGUgZGF0YS1vbi1tb3VzZW92ZXIgZXZlbnRcbiAgICovXG4gIG1vdXNlb3Zlcj86IHN0cmluZztcbiAgLyoqXG4gICAqIEZvciB0ZW1wbGF0aW5nXG4gICAqIFJlcHJlc2VudHMgYSB2YXJpYWJsZSBmb3IgdGVtcGxhdGluZyBmb3IgdGhlIGRhdGEtb24tbW91c2V1cCBldmVudFxuICAgKi9cbiAgbW91c2VvdXQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBGb3IgdGVtcGxhdGluZ1xuICAgKiBSZXByZXNlbnRzIGEgdmFyaWFibGUgZm9yIHRlbXBsYXRpbmcgZm9yIHRoZSBkYXRhLW9uLW1vdXNldXAgZXZlbnRcbiAgICovXG4gIG1vdXNldXA/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBGb3IgdGVtcGxhdGluZ1xuICAgKiBSZXByZXNlbnRzIGEgdmFyaWFibGUgZm9yIHRlbXBsYXRpbmcgZm9yIHRoZSBkYXRhLW9uLW1vdXNld2hlZWwgZXZlbnRcbiAgICovXG4gIG1vdXNld2hlZWw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBGb3IgdGVtcGxhdGluZ1xuICAgKiBSZXByZXNlbnRzIGEgdmFyaWFibGUgZm9yIHRlbXBsYXRpbmcgZm9yIHRoZSBkYXRhLW9uLXRvdWNoc3RhcnQgZXZlbnRcbiAgICovXG4gIHRvdWNoc3RhcnQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBGb3IgdGVtcGxhdGluZ1xuICAgKiBSZXByZXNlbnRzIGEgdmFyaWFibGUgZm9yIHRlbXBsYXRpbmcgZm9yIHRoZSBkYXRhLW9uLXRvdWNobW92ZSBldmVudFxuICAgKi9cbiAgdG91Y2htb3ZlPzogc3RyaW5nO1xuICAvKipcbiAgICogRm9yIHRlbXBsYXRpbmdcbiAgICogUmVwcmVzZW50cyBhIHZhcmlhYmxlIGZvciB0ZW1wbGF0aW5nIGZvciB0aGUgZGF0YS1vbi10b3VjaGVuZCBldmVudFxuICAgKi9cbiAgdG91Y2hlbmQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBGb3IgdGVtcGxhdGluZ1xuICAgKiBSZXByZXNlbnRzIGEgdmFyaWFibGUgZm9yIHRlbXBsYXRpbmcgZm9yIHRoZSBkYXRhLW9uLXRvdWNoY2FuY2VsIGV2ZW50XG4gICAqL1xuICB0b3VjaGNhbmNlbD86IHN0cmluZztcbiAgLyoqXG4gICAqIEZvciB0ZW1wbGF0aW5nXG4gICAqIFJlcHJlc2VudHMgYSB2YXJpYWJsZSBmb3IgdGVtcGxhdGluZyBmb3IgdGhlIGRhdGEtb24td2hlZWwgZXZlbnRcbiAgICovXG4gIHdoZWVsPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBpZ25vcmVcbiAqIFdlIGFyZSBhZGRpbmcgYWxsIHRoZSBwcm9wZXJ0aWVzIHRoYXQgZXhpc3RzIGluXG4gKiBhIHJpY2ggZWxlbWVudCB0aGF0IGFyZSBpbiBjb21tb24gb2YgYWxsXG4gKiB0aGUgcmljaCBlbGVtZW50cyB0aGVzZSBpbmNsdWRlIGFsbCB0aGUgcHJvcGVydGllc1xuICogdGhhdCBoYXZlIGEgb25lLXRvLW9uZSB0cmFuc2xhdGlvbiBhbmQgdGhlIG9uZXNcbiAqIHRoYXQgZG8gbm90XG4gKi9cbmNvbnN0IEVMRU1FTlRfQkFTRV9LRVlTID0gW1xuICAuLi5PYmplY3Qua2V5cyh0cmFuc2xhdGlvbnMpLFxuICBcInJpY2hDbGFzc0xpc3RcIixcbiAgXCJ1aUhhbmRsZXJBcmdzXCIsXG5dO1xuXG4vKipcbiAqIENsb25lcyB0aGUgYmFzZSBvZiBhbiBlbGVtZW50IG9mIGFsbCB0aGUgcHJvcGVydGllcyBpbiBjb21tb25cbiAqIGFuZCBsZWF2ZXMgYWxsIHRoZSBvbmVzIHRoYXQgYXJlIG5vdCBpbiBjb21tb25cbiAqIEBwYXJhbSBzcmMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5RWxlbWVudEJhc2Uoc3JjOiBJRWxlbWVudEJhc2UpOiBJRWxlbWVudEJhc2Uge1xuICBpZiAoIXNyYykge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICBjb25zdCBuZXdPYmo6IElFbGVtZW50QmFzZSA9IHt9O1xuICBPYmplY3Qua2V5cyhzcmMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmIChFTEVNRU5UX0JBU0VfS0VZUy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBuZXdPYmpba2V5XSA9IHNyY1trZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBuZXdPYmo7XG59XG4iLCAiLyoqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgdGhlIGR5bmFtaWMgc3R5bGVkIGNvbXBvbmVudCB0aGF0IHJlcHJlc2VudHMgYW4gZWxlbWVudCB3aXRoIGhvdmVyXG4gKiBhbiBhY3RpdmUgc3R5bGVzXG4gKlxuICogQG1vZHVsZVxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBwcm9wcyBmb3IgdGhlIGdpdmVuIGVsZW1lbnRcbiAqL1xuaW50ZXJmYWNlIElSZWFjdGlmaWVkRWxlbWVudFdpdGhIb3ZlckFuZEFjdGl2ZVByb3BzIGV4dGVuZHMgUmVhY3QuRGV0YWlsZWRIVE1MUHJvcHM8UmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+LCBIVE1MRWxlbWVudD4ge1xuICBDb21wb25lbnQ6IGFueTtcbiAgc3R5bGVIb3ZlcjogUmVhY3QuQ1NTUHJvcGVydGllcztcbiAgc3R5bGVBY3RpdmU6IFJlYWN0LkNTU1Byb3BlcnRpZXM7XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgc3RhdGUgdGhlIGVsZW1lbnQgaXMgaW4gYXMgb2YgY3VycmVudGx5XG4gKi9cbmludGVyZmFjZSBJUmVhY3RpZmllZEVsZW1lbnRXaXRoSG92ZXJBbmRBY3RpdmVTdGF0ZSB7XG4gIGhvdmVyOiBib29sZWFuO1xuICBhY3RpdmU6IGJvb2xlYW47XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHN0YW5kYXJkIGh0bWwgY29tcG9uZW50IHdoZXJlIHN0eWxlQWN0aXZlIGFuZCBzdHlsZUhvdmVyIGFzIHdlbGwgYXMgYSBUYWcgYXJlIGRlZmluZWRcbiAqIGluIG9yZGVyIHRvIHJlbmRlciB3aXRoIHRoZSBnaXZlbiBwcm9wc1xuICovXG5leHBvcnQgY2xhc3MgUmVhY3RpZmllZEVsZW1lbnRXaXRoSG92ZXJBbmRBY3RpdmUgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElSZWFjdGlmaWVkRWxlbWVudFdpdGhIb3ZlckFuZEFjdGl2ZVByb3BzLCBJUmVhY3RpZmllZEVsZW1lbnRXaXRoSG92ZXJBbmRBY3RpdmVTdGF0ZT4ge1xuICBwcml2YXRlIHJlZkVsZW1lbnQ6IFJlYWN0LlJlZk9iamVjdDxhbnk+ID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJUmVhY3RpZmllZEVsZW1lbnRXaXRoSG92ZXJBbmRBY3RpdmVQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBob3ZlcjogZmFsc2UsXG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgIH1cblxuICAgIHRoaXMub25Ib3ZlclN0YXJ0ID0gdGhpcy5vbkhvdmVyU3RhcnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSG92ZXJFbmQgPSB0aGlzLm9uSG92ZXJFbmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQWN0aXZlRW5kID0gdGhpcy5vbkFjdGl2ZUVuZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25BY3RpdmVTdGFydCA9IHRoaXMub25BY3RpdmVTdGFydC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIG9uSG92ZXJTdGFydChvcmlnaW5hbEZuOiAoYXJnOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4gdm9pZCwgZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudCwgTW91c2VFdmVudD4pIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGhvdmVyOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgb3JpZ2luYWxGbiAmJiBvcmlnaW5hbEZuKGUpO1xuICB9XG5cbiAgcHVibGljIG9uSG92ZXJFbmQob3JpZ2luYWxGbjogKGFyZzogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWQsIGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQsIE1vdXNlRXZlbnQ+KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBob3ZlcjogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBvcmlnaW5hbEZuICYmIG9yaWdpbmFsRm4oZSk7XG4gIH1cblxuICBwdWJsaWMgb25BY3RpdmVTdGFydChvcmlnaW5hbEZuOiAoYXJnOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4gdm9pZCwgZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudCwgTW91c2VFdmVudD4pIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICB9KTtcblxuICAgIG9yaWdpbmFsRm4gJiYgb3JpZ2luYWxGbihlKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkFjdGl2ZUVuZChvcmlnaW5hbEZuOiAoYXJnOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4gdm9pZCwgZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudCwgTW91c2VFdmVudD4pIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBvcmlnaW5hbEZuICYmIG9yaWdpbmFsRm4oZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZFbGVtZW50LmN1cnJlbnQ7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIC8vIGZpcnN0IHdlIHBpY2sgdGhlIHRhZ1xuICAgIGNvbnN0IENvbXBvbmVudCA9IHRoaXMucHJvcHMuQ29tcG9uZW50O1xuXG4gICAgLy8gbm93IHdlIGJ1aWxkIHRoZSBwcm9wc1xuICAgIGNvbnN0IHN0YW5kYXJkUHJvcHMgPSB7XG4gICAgICAuLi50aGlzLnByb3BzLFxuICAgIH07XG4gICAgLy8gZGVsZXRlIHdoYXQgaXMgbm9uLXN0YW5kYXJkXG4gICAgZGVsZXRlIHN0YW5kYXJkUHJvcHMuQ29tcG9uZW50O1xuICAgIGRlbGV0ZSBzdGFuZGFyZFByb3BzLnN0eWxlSG92ZXI7XG4gICAgZGVsZXRlIHN0YW5kYXJkUHJvcHMuc3R5bGVBY3RpdmU7XG5cbiAgICAvLyBhbmQgbm93IHdlIGNhbiBkZWZpbmUgdGhlIGN1cnJlbnQgc3R5bGVcbiAgICBjb25zdCBzdHlsZVVzZWQgPSB7XG4gICAgICAuLi50aGlzLnByb3BzLnN0eWxlLFxuICAgICAgLi4uKHRoaXMuc3RhdGUuaG92ZXIgPyB0aGlzLnByb3BzLnN0eWxlSG92ZXIgOiBudWxsKSxcbiAgICAgIC4uLih0aGlzLnN0YXRlLmFjdGl2ZSA/IHRoaXMucHJvcHMuc3R5bGVBY3RpdmUgOiBudWxsKSxcbiAgICB9O1xuXG4gICAgLy8gYW5kIHNldCBpdCBpbiB0aGUgc3R5bGUgb2YgdGhlIHByb3BzXG4gICAgc3RhbmRhcmRQcm9wcy5zdHlsZSA9IHN0eWxlVXNlZDtcblxuICAgIC8vIGlmIHdlIGhhdmUgYSBzdHlsZWhvdmVyXG4gICAgLy8gd2UgZGVmaW5lIHRoZSBtb3VzZW50ZXIgYW5kIGxlYXZlXG4gICAgaWYgKHRoaXMucHJvcHMuc3R5bGVIb3Zlcikge1xuICAgICAgLy8gbm90ZSBob3cgd2UgYmluZCB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gaW4gY2FzZSB0aGVyZSdzIG9uZVxuICAgICAgc3RhbmRhcmRQcm9wcy5vbk1vdXNlRW50ZXIgPSB0aGlzLm9uSG92ZXJTdGFydC5iaW5kKG51bGwsIHRoaXMucHJvcHMub25Nb3VzZUVudGVyKTtcbiAgICAgIHN0YW5kYXJkUHJvcHMub25Nb3VzZUxlYXZlID0gdGhpcy5vbkhvdmVyRW5kLmJpbmQobnVsbCwgdGhpcy5wcm9wcy5vbk1vdXNlTGVhdmUpO1xuICAgIH1cblxuICAgIC8vIGFsc28gZm9yIGFjdGl2ZVxuICAgIGlmICh0aGlzLnByb3BzLnN0eWxlQWN0aXZlKSB7XG4gICAgICBzdGFuZGFyZFByb3BzLm9uVG91Y2hTdGFydCA9IHRoaXMub25BY3RpdmVTdGFydC5iaW5kKG51bGwsIHRoaXMucHJvcHMub25Ub3VjaFN0YXJ0KTtcbiAgICAgIHN0YW5kYXJkUHJvcHMub25Ub3VjaEVuZCA9IHRoaXMub25BY3RpdmVFbmQuYmluZChudWxsLCB0aGlzLnByb3BzLm9uVG91Y2hFbmQpO1xuICAgICAgc3RhbmRhcmRQcm9wcy5vbk1vdXNlRG93biA9IHRoaXMub25BY3RpdmVTdGFydC5iaW5kKG51bGwsIHRoaXMucHJvcHMub25Nb3VzZURvd24pO1xuICAgICAgc3RhbmRhcmRQcm9wcy5vbk1vdXNlVXAgPSB0aGlzLm9uQWN0aXZlRW5kLmJpbmQobnVsbCwgdGhpcy5wcm9wcy5vbk1vdXNlVXApO1xuICAgIH1cblxuICAgIC8vIGFuZCBzZXQgdXAgdGhlIGVsZW1lbnRcbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4uc3RhbmRhcmRQcm9wc30gcmVmPXt0aGlzLnJlZkVsZW1lbnR9Lz47XG4gIH1cbn1cbiIsICJpbXBvcnQgdHlwZSB7IFJpY2hFbGVtZW50LCBJUm9vdExldmVsRG9jdW1lbnQgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgSVVJSGFuZGxlclByb3BzIH0gZnJvbSBcIi4vYmFzZVwiO1xuXG5cbnR5cGUgVGVtcGxhdGVBcmdQcm9wZXJ0eSA9XG4gIC8vIGludGVybmFsIGNvbnRleHRcbiAgVGVtcGxhdGVBcmdzIHxcbiAgLy8gbXV0YXRpbmcgY29udGV4dCBvciBhcnJheVxuICBNdXRhdGluZ1RlbXBsYXRlQXJncyB8XG4gIC8vIG11dGF0aW5nIGZ1bmN0aW9uIHZhbHVlXG4gIE11dGF0aW5nRnVuY3Rpb25BcmcgfFxuICAvLyBzdGFuZGFyZCBhcnJheSBvZiBjb250ZXh0XG4gIEFycmF5PFRlbXBsYXRlQXJncz4gfFxuICAvLyBhIGNvbXBvbmVudCBmb3IgZGF0YS1odG1sXG4gIFJlYWN0LlJlYWN0Tm9kZSB8XG4gIC8vIGFuIHVpIGhhbmRsZXJcbiAgUmVhY3QuQ29tcG9uZW50VHlwZTxJVUlIYW5kbGVyUHJvcHM+IHxcbiAgLy8gYSBhY3Rpb24gZnVuY3Rpb25cbiAgRnVuY3Rpb24gfFxuICAvLyBmb3IgdGV4dCBjb250ZW50IGFuZCB3aGF0bm90XG4gIHN0cmluZyB8XG4gIC8vIGZvciBpZnNcbiAgYm9vbGVhbiB8XG4gIC8vIGVoP1xuICBudW1iZXI7XG5cbi8qKlxuICogSW50ZXJmYWNlIHRvIGRlZmluZSBjb250ZXh0IHdyYXBwZXJzIGR1cmluZyBhIGR5bmFtaWMgcmVuZGVyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVRlbXBsYXRlQXJnc1Byb3BlcnRpZXMge1xuICBbbmFtZTogc3RyaW5nXTogVGVtcGxhdGVBcmdQcm9wZXJ0eSB8IE5vblJvb3RJbmhlcml0YWJsZTtcbn1cblxuLyoqXG4gKiBQcm92aWRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbm9kZSB0aGF0IHNob3VsZCBiZSBjaGlsZHJlbiBvZiBpdFxuICogaW4gdGhlIGNhc2Ugb2Ygc2V0dGluZyBtdXRhdGluZyBjb250ZXh0IGl0IHNob3VsZCBiZSB1c2VkIGFzIGVnLlxuICogXG4gKiBuZXcgVGVtcGxhdGVBcmdzKHtcbiAqICAgbmFtZTogbmV3IE5vblJvb3RJbmhlcml0YWJsZShcImpvbmhcIiksXG4gKiAgIHBlcnNvbjogdHJ1ZSxcbiAqICAgbXlNdXRhdGluZ0NvbnRleHQ6IG5ldyBNdXRhdGluZ1RlbXBsYXRlQXJncyhcbiAqICAgICAoY2hpbGRyZW4pID0+IHtcbiAqICAgICAgIHJldHVybiAoXG4gKiAgICAgICAgIDxDb250ZXh0UmV0cmlldmVyV2hhdG5vdD5cbiAqICAgICAgICAgICB7KGNvbnRleHREYXRhKSA9PiAoXG4gKiAgICAgICAgICAgICAgY2hpbGRyZW4obmV3IFRlbXBsYXRlQXJncyhjb250ZXh0RGF0YSkpXG4gKiAgICAgICAgICAgKX1cbiAqICAgICAgICAgPC9Db250ZXh0UmV0cmlldmVyV2hhdG5vdD5cbiAqICAgICAgICk7XG4gKiAgICAgfVxuICogICApLFxuICogICBvcGVuOiAoKSA9PiBnb1RvKFwiL2NhcnRcIiksXG4gKiAgIG9wZW5NdXRhdGluZzogbmV3IE11dGF0aW5nRnVuY3Rpb25BcmcoXG4gKiAgICAgKGNoaWxkcmVuLCBmbktleSkgPT4ge1xuICogICAgICAgIHJldHVybiAoXG4gKiAgICAgICAgICAgPENvbnRleHRSZXRyaWV2ZXJXaGF0bm90PlxuICogICAgICAgICAgICAgeyhjb250ZXh0RGF0YSkgPT4gKFxuICogICAgICAgICAgICAgICAgLy8gcGFzcyB0aGUgZnVuY3Rpb24gZnJvbSBhIGNvbnRleHRcbiAqICAgICAgICAgICAgICAgIGNoaWxkcmVuKGNvbnRleHREYXRhW2ZuS2V5XSlcbiAqICAgICAgICAgICAgICl9XG4gKiAgICAgICAgICAgPC9Db250ZXh0UmV0cmlldmVyV2hhdG5vdD5cbiAqICAgICAgICApXG4gKiAgICAgfVxuICogICApO1xuICogfSk7XG4gKiBcbiAqIGFuZCBmb3IgaXRlcmFibGVcbiAqIFxuICogbmV3IFRlbXBsYXRlQXJncyh7XG4gKiAgIG5hbWU6IG5ldyBOb25Sb290SW5oZXJpdGFibGUoXCJqb25oXCIpLFxuICogICBwZXJzb246IHRydWUsXG4gKiAgIG15TXV0YXRpbmdDb250ZXh0OiBuZXcgTXV0YXRpbmdUZW1wbGF0ZUFyZ3MoXG4gKiAgICAgKGNoaWxkcmVuKSA9PiB7XG4gKiAgICAgICByZXR1cm4gKFxuICogICAgICAgICA8Q29udGV4dFJldHJpZXZlcldoYXRub3Q+XG4gKiAgICAgICAgICAgeyhjb250ZXh0RGF0YSkgPT4gKFxuICogICAgICAgICAgICAgIGNvbnRleHREYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IGNoaWxkcmVuKG5ldyBUZW1wbGF0ZUFyZ3MoZGF0YSksIGluZGV4KSlcbiAqICAgICAgICAgICApfVxuICogICAgICAgICA8L0NvbnRleHRSZXRyaWV2ZXJXaGF0bm90PlxuICogICAgICAgKTtcbiAqICAgICB9XG4gKiAgICk7XG4gKiAgIG9wZW46ICgpID0+IGdvVG8oXCIvY2FydFwiKSxcbiAqICAgb3Blbk11dGF0aW5nOiBuZXcgTXV0YXRpbmdGdW5jdGlvbkFyZyhcbiAqICAgICAoY2hpbGRyZW4sIGZuS2V5KSA9PiB7XG4gKiAgICAgICAgcmV0dXJuIChcbiAqICAgICAgICAgICA8Q29udGV4dFJldHJpZXZlcldoYXRub3Q+XG4gKiAgICAgICAgICAgICB7KGNvbnRleHREYXRhKSA9PiAoXG4gKiAgICAgICAgICAgICAgICAvLyBwYXNzIHRoZSBmdW5jdGlvbiBmcm9tIGEgY29udGV4dFxuICogICAgICAgICAgICAgICAgY2hpbGRyZW4oY29udGV4dERhdGFbZm5LZXldKVxuICogICAgICAgICAgICAgKX1cbiAqICAgICAgICAgICA8L0NvbnRleHRSZXRyaWV2ZXJXaGF0bm90PlxuICogICAgICAgIClcbiAqICAgICB9XG4gKiAgICk7XG4gKiB9KTtcbiAqIFxuICogaXQncyBwb3NzaWJsZSB0byBkb3VibGUgd3JhcCBvbiBpdGVyYWJsZXNcbiAqIFxuICogbmV3IFRlbXBsYXRlQXJncyh7XG4gKiAgIG5hbWU6IG5ldyBOb25Sb290SW5oZXJpdGFibGUoXCJqb25oXCIpLFxuICogICBwZXJzb246IHRydWUsXG4gKiAgIG15TXV0YXRpbmdDb250ZXh0OiBuZXcgTXV0YXRpbmdUZW1wbGF0ZUFyZ3MoXG4gKiAgICAgKGNoaWxkcmVuKSA9PiB7XG4gKiAgICAgICByZXR1cm4gKFxuICogICAgICAgICA8Q29udGV4dFJldHJpZXZlcldoYXRub3Q+XG4gKiAgICAgICAgICAgeyhjb250ZXh0RGF0YSkgPT4gKFxuICogICAgICAgICAgICAgIGNvbnRleHREYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IDxPdGhlckNvbnRleHRQcm92aWRlciBrZXk9e2luZGV4fT5jaGlsZHJlbihuZXcgVGVtcGxhdGVBcmdzKGRhdGEpKTwvT3RoZXJDb250ZXh0UHJvdmlkZXI+KVxuICogICAgICAgICAgICl9XG4gKiAgICAgICAgIDwvQ29udGV4dFJldHJpZXZlcldoYXRub3Q+XG4gKiAgICAgICApO1xuICogICAgIH1cbiAqICAgKSxcbiAqICAgb3BlbjogKCkgPT4gZ29UbyhcIi9jYXJ0XCIpLFxuICogICBvcGVuTXV0YXRpbmc6IG5ldyBNdXRhdGluZ0Z1bmN0aW9uQXJnKFxuICogICAgIChjaGlsZHJlbiwgZm5LZXkpID0+IHtcbiAqICAgICAgICByZXR1cm4gKFxuICogICAgICAgICAgIDxDb250ZXh0UmV0cmlldmVyV2hhdG5vdD5cbiAqICAgICAgICAgICAgIHsoY29udGV4dERhdGEpID0+IChcbiAqICAgICAgICAgICAgICAgIC8vIHBhc3MgdGhlIGZ1bmN0aW9uIGZyb20gYSBjb250ZXh0XG4gKiAgICAgICAgICAgICAgICBjaGlsZHJlbihjb250ZXh0RGF0YVtmbktleV0pXG4gKiAgICAgICAgICAgICApfVxuICogICAgICAgICAgIDwvQ29udGV4dFJldHJpZXZlcldoYXRub3Q+XG4gKiAgICAgICAgKVxuICogICAgIH1cbiAqICAgKTtcbiAqIH0pO1xuICovXG5leHBvcnQgdHlwZSBUZW1wbGF0ZUFyZ011dGF0aW5nV3JhcHBlckZuID0gKGNoaWxkcmVuOiAobmV3Q29udGV4dDogVGVtcGxhdGVBcmdzLCBrZXk/OiBzdHJpbmcgfCBudW1iZXIpID0+IFJlYWN0LlJlYWN0Tm9kZSkgPT4gUmVhY3QuUmVhY3ROb2RlO1xuXG4vKipcbiAqIE1ha2VzIGEgdmFsdWUgbm9uIHJvb3QgaW5oZXJpdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIE5vblJvb3RJbmhlcml0YWJsZSB7XG4gIHB1YmxpYyB2YWx1ZTogVGVtcGxhdGVBcmdQcm9wZXJ0eTtcbiAgY29uc3RydWN0b3IodmFsdWU6IFRlbXBsYXRlQXJnUHJvcGVydHkpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBBbGxvd3MgdG8gZGVmaW5lIGEgY29udGV4dCB3cmFwcGVyIGFyZ3VtZW50IGZvciB0aGUgc3RhbmRhcmQgY29udGV4dFxuICogdGhhdCBpcyBnaXZlbiB0aGlzIGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIHRoZSByZW5kZXIgZHluYW1pY1xuICogaXQgaXMgbm90IHZhbGlkIGZvciB0aGUgcmVuZGVyIHN0YXRpY1xuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVBcmdzIHtcbiAgcHVibGljIHByb3BlcnRpZXM6IElUZW1wbGF0ZUFyZ3NQcm9wZXJ0aWVzO1xuICBwdWJsaWMgd3JhcHBlcjogKG46IFJlYWN0LlJlYWN0Tm9kZSkgPT4gUmVhY3QuUmVhY3ROb2RlO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXM6IElUZW1wbGF0ZUFyZ3NQcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgfVxuXG4gIHB1YmxpYyB3cmFwcGVkQnkodzogKG46IFJlYWN0LlJlYWN0Tm9kZSkgPT4gUmVhY3QuUmVhY3ROb2RlKSB7XG4gICAgdGhpcy53cmFwcGVyID0gdztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG4vKipcbiAqIEFsbG93cyB0byBzcGVjaWZ5IG5vdCB2ZXJ5IGRlZmluZWQgYXJndW1lbnRzIGludG8gdGhlIHNlcmlhbGl6ZXIgZHVyaW5nIGEgZHluYW1pYyByZW5kZXJcbiAqL1xuZXhwb3J0IGNsYXNzIE11dGF0aW5nVGVtcGxhdGVBcmdzIHtcbiAgcHVibGljIG11dGF0aW5nV3JhcHBlcjogVGVtcGxhdGVBcmdNdXRhdGluZ1dyYXBwZXJGbjtcbiAgY29uc3RydWN0b3IobXV0YXRpbmdXcmFwcGVyOiBUZW1wbGF0ZUFyZ011dGF0aW5nV3JhcHBlckZuKSB7XG4gICAgdGhpcy5tdXRhdGluZ1dyYXBwZXIgPSBtdXRhdGluZ1dyYXBwZXI7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgVGVtcGxhdGVBcmdGdW5jdGlvbmFsV3JhcHBlckZuID0gKGNoaWxkcmVuOiAoZm46IEZ1bmN0aW9uKSA9PiBSZWFjdC5SZWFjdE5vZGUsIGZuS2V5OiBzdHJpbmcpID0+IFJlYWN0LlJlYWN0Tm9kZTtcblxuLyoqXG4gKiBBbGxvd3MgdG8gc3BlY2lmeSBhIGNvbnRleHQgbXV0YXRpbmcgZnVuY3Rpb24gaW50byB0aGUgc2VyaWFsaXplciBkdXJpbmcgYSBkeW5hbWljIHJlbmRlclxuICovXG5leHBvcnQgY2xhc3MgTXV0YXRpbmdGdW5jdGlvbkFyZyB7XG4gIHB1YmxpYyBtdXRhdGluZ0Z1bmN0aW9uV3JhcHBlcjogVGVtcGxhdGVBcmdGdW5jdGlvbmFsV3JhcHBlckZuO1xuICBjb25zdHJ1Y3RvcihtdXRhdGluZ0Z1bmN0aW9uV3JhcHBlcjogVGVtcGxhdGVBcmdGdW5jdGlvbmFsV3JhcHBlckZuKSB7XG4gICAgdGhpcy5tdXRhdGluZ0Z1bmN0aW9uV3JhcHBlciA9IG11dGF0aW5nRnVuY3Rpb25XcmFwcGVyO1xuICB9XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBkZWZpbmluZyBwb3RlbnRpYWwgdGVtcGxhdGUgYXJndW1lbnRzLCB0ZW1wbGF0ZSBhcmd1bWVudHMgbWF5IGNvbWUgaW4gbWFueSBzaGFwZXMgYW5kIGZvcm1zXG4vLyBob3dldmVyIG1ha2luZyBhIHRlbXBsYXRlIHJlcXVpcmVzIHRvIGtub3cgdGhpcyBwb3RlbnRpYWwgc2hhcGUsIHdoYXQgaXMgd2hhdFxuLy8gdGhpcyBzdHJ1Y3R1cmUgaXMgbWVhbnQgdG8gYmUgdXNlZCB3aXRoIHlvdXIgZWRpdG9yIG9mIGNob2ljZSwgYW5kIHlvdSBzaG91bGQgZXh0ZW5kIGl0IGFuZCBhZGFwdCBpdFxuLy8gYmVjYXVzZSB0aGlzIGNhbiBiZSBmZWQgdG8gbm9ybWFsaXphdGlvblxuXG5pbnRlcmZhY2UgSUJhc2VUZW1wbGF0ZUFyZyB7XG4gIGxhYmVsOiBzdHJpbmcgfCBzdHJpbmdGbjtcbiAgbm9uUm9vdEluaGVyaXRhYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhpcyBhcmd1bWVudCBpcyBzcGVjaWZpYyB0byB0aGUgZWRpdG9yIGJlaW5nIHVzZWRcbiAgICogYW5kIGRlZmluZXMgc29tZXRoaW5nIGFyYml0cmFyeVxuICAgKi9cbiAgZWRpdG9yQXJncz86IGFueTtcbn1cblxudHlwZSBzdHJpbmdGbiA9ICgpID0+IHN0cmluZztcblxuZXhwb3J0IGludGVyZmFjZSBJVGVtcGxhdGVBcmdUZXh0RGVmaW5pdGlvbiBleHRlbmRzIElCYXNlVGVtcGxhdGVBcmcge1xuICB0eXBlOiBcInRleHRcIjtcblxuICAvKipcbiAgICogVGhpcyBhcmd1bWVudCBpcyBzcGVjaWZpYyB0byB0aGUgZWRpdG9yIGJlaW5nIHVzZWQgYW5kIGRlZmluZXNcbiAgICogd2hhdCBzaG91bGQgYmUgZGlzcGxheWVkIGluIHRoYXQgcGllY2Ugb2YgdGV4dCBjb250ZW50XG4gICAqL1xuICBlZGl0b3JEaXNwbGF5PzogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZW1wbGF0ZUFyZ0xpbmtEZWZpbml0aW9uIGV4dGVuZHMgSUJhc2VUZW1wbGF0ZUFyZyB7XG4gIHR5cGU6IFwibGlua1wiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZW1wbGF0ZUFyZ0hUTUxEZWZpbml0aW9uIGV4dGVuZHMgSUJhc2VUZW1wbGF0ZUFyZyB7XG4gIHR5cGU6IFwiaHRtbFwiO1xuXG4gIC8qKlxuICAgKiBUaGlzIGFyZ3VtZW50IGlzIHNwZWNpZmljIHRvIHRoZSBlZGl0b3IgYmVpbmcgdXNlZCBhbmQgZGVmaW5lc1xuICAgKiB3aGF0IHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gdGhhdCBwaWVjZSBvZiBodG1sIGNvbnRlbnRcbiAgICovXG4gIGVkaXRvckRpc3BsYXk/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRlbXBsYXRlQXJnRnVuY3Rpb25EZWZpbml0aW9uIGV4dGVuZHMgSUJhc2VUZW1wbGF0ZUFyZyB7XG4gIHR5cGU6IFwiZnVuY3Rpb25cIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGVtcGxhdGVBcmdCb29sZWFuRGVmaW5pdGlvbiBleHRlbmRzIElCYXNlVGVtcGxhdGVBcmcge1xuICB0eXBlOiBcImJvb2xlYW5cIjtcbn1cblxudHlwZSBlbGVtZW50VHlwZXMgPSBcImNvbnRhaW5lclwiIHxcbiAgXCJjdXN0b21cIiB8XG4gIFwiZmlsZVwiIHxcbiAgXCJpbWFnZVwiIHxcbiAgXCJpbmxpbmVcIiB8XG4gIFwibGlua1wiIHxcbiAgXCJsaXN0LWl0ZW1cIiB8XG4gIFwibGlzdFwiIHxcbiAgXCJ0YWJsZVwiIHxcbiAgXCJ0aGVhZFwiIHxcbiAgXCJ0Ym9keVwiIHxcbiAgXCJ0clwiIHxcbiAgXCJ0ZFwiIHxcbiAgXCJ0aXRsZVwiIHxcbiAgXCJ2aWRlb1wiIHxcbiAgXCJwYXJhZ3JhcGhcIiB8XG4gIFwicXVvdGVcIiB8XG4gIFwidm9pZC1ibG9ja1wiIHxcbiAgXCJ2b2lkLWlubGluZVwiIHxcbiAgXCJ2b2lkLXN1cGVyYmxvY2tcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJVGVtcGxhdGVBcmdVSUhhbmRsZXJEZWZpbml0aW9uIGV4dGVuZHMgSUJhc2VUZW1wbGF0ZUFyZyB7XG4gIHR5cGU6IFwidWktaGFuZGxlclwiO1xuICAvKipcbiAgICogV2lsbCBvbmx5IGFsbG93IGFuIGVsZW1lbnQgb2YgYSBnaXZlbiB1aSBoYW5kbGVyIHR5cGUgdG8gYmUgb2YgYW4gc3BlY2lmaWMgdHlwZVxuICAgKiBmb3IgZXhhbXBsZSwgY29udGFpbmVycyBjYW4gYmUgdmVyeSB1c2VmdWwgYXMgdWkgaGFuZGxlciBlbGVtZW50c1xuICAgKiBidXQgYXJlIG5vdCBsaW1pdGVkIHRvIHRoYXRcbiAgICovXG4gIG11c3RCZU9mVHlwZT86IGVsZW1lbnRUeXBlcyB8IGVsZW1lbnRUeXBlc1tdO1xuICAvKipcbiAgICogbGltaXRzIHRoZSB0eXBlIG9mIGNoaWxkcmVuIHRoYXQgY2FuIGJlIGluc2lkZSBzdWNoLCBmb3IgZXhhbXBsZSBpZiB5b3Ugd2FudFxuICAgKiB0byBoYXZlIGEgY29udGFpbmVyIG9mIG9ubHkgcGFyYWdyYXBocywgb3IgYSBjb250YWluZXIgb2Ygb25seSBjb250YWluZXJzXG4gICAqIFxuICAgKiBkdXJpbmcgbm9ybWFsaXphdGlvbiB0aGlzIG1lYW5zIHRoYXQgZWxlbWVudHMgd2lsbCBiZSByZW1vdmVkIGlmIHRoZXkgYXJlIG5vdCBvZiB0aGVcbiAgICogcmlnaHQgdHlwZSwgbm90ZSB0aGF0IHRoZSBub3JtYWxpemF0aW9uIG9mIHRoZSBcIm11c3RCZU9mVHlwZVwiIGFwcGxpZXMgZmlyc3QsIGZvciBleGFtcGxlXG4gICAqIGlmIGl0IG11c3QgYmUgYSBcInBhcmFncmFwaFwiIHRoZW4gYWxsIG5vbi1saW5saW5lcyB3aWxsIGJlIHJlbW92ZWQsIGJ1dCB5b3UgbWF5IG5vdCBoYXZlXG4gICAqIHN1Y2ggdGhpbmdcbiAgICovXG4gIGFsbG93c0NoaWxkcmVuPzogKGNoaWxkOiBSaWNoRWxlbWVudCwgc2VsZjogUmljaEVsZW1lbnQpID0+IGJvb2xlYW47XG4gIC8qKlxuICAgKiBJZiBhIGNoaWxkcmVuIGlzIG5vdCBhbGxvd2VkIHlvdSBtYXkgYmUgYWJsZSB0byBwYXRjaCBpdCB0byBtYWtlIGl0IHdvcmtcbiAgICogcmV0dXJuIG51bGwgaWYgbm90IHBvc3NpYmxlXG4gICAqL1xuICBwYXRjaENoaWxkcmVuPzogKGNoaWxkOiBSaWNoRWxlbWVudCwgc2VsZjogUmljaEVsZW1lbnQpID0+IFBhcnRpYWw8UmljaEVsZW1lbnQ+O1xuICAvKipcbiAgICogRm9yY2VzIHRoZSBwYXJlbnQgdG8gaGF2ZSBhbiB1aSBoYW5kbGVyIG9mIHRoaXMgc3BlY2lmaWMgdHlwZSB0aGF0XG4gICAqIGFwcGxpZXMgdG8gdGhpcyBlbGVtZW50IGl0c2VsZiwgcmF0aGVyIHRoYW4gaXRzXG4gICAqL1xuICBhbGxvd3NQYXJlbnQ/OiAocGFyZW50OiBSaWNoRWxlbWVudCB8IElSb290TGV2ZWxEb2N1bWVudCwgc2VsZjogUmljaEVsZW1lbnQpID0+IGJvb2xlYW47XG4gIC8qKlxuICAgKiBkZWZpbmUgYSBoYW5kbGVyIG9iamVjdCB0aGF0IHNoYWxsIGJlIHVzZWQgd2l0aGluIHRoZSBlZGl0b3JcbiAgICogdGhpcyBhcmd1bWVudCBpcyB2ZXJ5IHNwZWNpZmljIHRvIHRoZSBlZGl0b3IgYmVpbmcgdXNlZFxuICAgKi9cbiAgZWRpdG9ySGFuZGxlcj86IGFueTtcbn1cblxuZXhwb3J0IHR5cGUgVGVtcGxhdGVQcm9wZXJ0eSA9IElUZW1wbGF0ZUFyZ0NvbnRleHREZWZpbml0aW9uIHxcbiAgSVRlbXBsYXRlQXJnVUlIYW5kbGVyRGVmaW5pdGlvbiB8XG4gIElUZW1wbGF0ZUFyZ1RleHREZWZpbml0aW9uIHxcbiAgSVRlbXBsYXRlQXJnTGlua0RlZmluaXRpb24gfFxuICBJVGVtcGxhdGVBcmdIVE1MRGVmaW5pdGlvbiB8XG4gIElUZW1wbGF0ZUFyZ0Z1bmN0aW9uRGVmaW5pdGlvbiB8XG4gIElUZW1wbGF0ZUFyZ0Jvb2xlYW5EZWZpbml0aW9uO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZW1wbGF0ZVByb3BlcnRpZXMge1xuICBba2V5OiBzdHJpbmddOiBUZW1wbGF0ZVByb3BlcnR5O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZW1wbGF0ZUFyZ0NvbnRleHREZWZpbml0aW9uIGV4dGVuZHMgSUJhc2VUZW1wbGF0ZUFyZyB7XG4gIHR5cGU6IFwiY29udGV4dFwiO1xuICBsb29wYWJsZT86IGJvb2xlYW47XG4gIHByb3BlcnRpZXM6IElUZW1wbGF0ZVByb3BlcnRpZXM7XG59IiwgImltcG9ydCBET01QdXJpZnkgZnJvbSBcImRvbXB1cmlmeVwiO1xuaW1wb3J0IHsgRE9NV2luZG93IH0gZnJvbSBcIi4uL3NlcmlhbGl6ZXIvZG9tXCI7XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgY29udGV4dCB0aGF0IGlzIHVzZWQgaW4gb3JkZXJcbiAqIHRvIHBvc3Rwcm9jZXNzIGEgc2FudGl6ZWQgZW50cnkgc28gdGhhdCBpdCBjYW5cbiAqIGJlIGNvbnN0cnVjdGVkIGludG8gaHRtbCB0aGF0IGNhbiBiZVxuICogZGlzcGxheWVkIHRvIHRoZSB1c2VyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVBvc3RQcm9jZXNzaW5nT3B0aW9ucyB7XG4gIC8qKlxuICAgKiB3aGVuZXZlciBhIGZpbGUgaXMgcmVzb2x2ZWQgdGhpcyBhbGxvd3MgZm9yIGRlcm1pbmluZyBob3cgaXQgaXMgdG8gYmUgcmVzb2x2ZWRcbiAgICogXG4gICAqIHlvdSBtYXkgYmUgYWJsZSB0byB1c2UgdGhpcyBpbiBhIG1haWwgY29udGV4dCBieSByZXR1cm5pbmcgY2lkIGFzIGEgc291cmNlXG4gICAqIGZvciBhIGdpdmVuIGZpbGUsIGNoZWNrIHRoZSBtYWlsIG9wdGlvbiBmb3IgdGhpc1xuICAgKiBcbiAgICogQHJ0dXJucyB0aGUgZmlsZSBpbmZvcm1hdGlvbiwgaWYgbnVsbCBpcyByZXR1cm5lZCB0aGUgZmlsZSBpcyBjb25zaWRlcmVkXG4gICAqIG1pc3NpbmdcbiAgICovXG4gIGZpbGVSZXNvbHZlcjogKGZpbGVJZDogc3RyaW5nLCBpc0ltYWdlOiBib29sZWFuLCBub2RlOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIC8qKlxuICAgICAqIFRoZSBzb3VyY2UgZm9yIHRoZSBmaWxlc1xuICAgICAqL1xuICAgIHNyYzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIHNwZWNpZmljYWxseSBmb3IgaW1hZ2VzXG4gICAgICovXG4gICAgc3JjU2V0Pzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIHNwZWNpZmllcyB0aGF0IHRoZSBjb250ZW50IGlzIGV4cGVjdGVkIHRvIGJlIHVzZWQgaW4gYSBtYWlsXG4gICAqIGNvbnRleHRcbiAgICovXG4gIG1haWw/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyB3aGVuIHRoZSBlbWFpbCBzaG91bGQgYXR0YWNoIGEgZmlsZVxuICAgKiBmb3IgdGhlIGdpdmVuIGlkLCB3aGlsZSB0aGUgZmlsZSB3aWxsIGFsc28gZ28gb3ZlciB0aGUgZmlsZVxuICAgKiByZXNvbHZlciwgYXMgYSBub24gaW1hZ2UsIHRoaXMgZnVuY3Rpb24gbWF5IHByb3ZpZGUgYSBjbGVhbmVyXG4gICAqIHdheSB0byBzcGVjaWZ5IHRoaXMgYmVoYXZpb3VyXG4gICAqIFxuICAgKiBAcGFyYW0gZmlsZUlkIFxuICAgKiBAcmV0dXJucyBcbiAgICovXG4gIG1haWxTaG91bGRBdHRhY2hGaWxlPzogKGZpbGVJZDogc3RyaW5nKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiBBbiB1cmwgZm9yIGltYWdlcyB0aGF0IGhhdmUgZmFpbGVkIHRvIHJlc29sdmVcbiAgICovXG4gIGltYWdlRmFpbD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBUaGUgZmVhdHVyZSBzZXQgdGhhdCBpcyBzdXBwb3J0ZWQgaW4gYSBnaXZlblxuICogc2FuaXRpemF0aW9uIG9yIG90aGVyIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRmVhdHVyZVN1cHBvcnRPcHRpb25zIHtcbiAgLyoqXG4gICAqIFdoZXRoZXIgaXQgc3VwcG9ydHMgaW1hZ2VzXG4gICAqL1xuICBzdXBwb3J0c0ltYWdlczogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFRoZSBhY2NlcHQgdHlwZSB0aGF0IHRoZSBpbnB1dCBzaG91bGQgYWNjZXB0XG4gICAqIGZvciBmaWxsaW5nIHRoZSBpbWFnZSB0eXBlLCBpdCBjYW4gYmUgbnVsbCwgaWZcbiAgICogaXQgZG9lc24ndCBzdXBwb3J0IGltYWdlcywgb3Igd2hlbiB2aWV3aW5nXG4gICAqL1xuICBzdXBwb3J0c0ltYWdlc0FjY2VwdDogc3RyaW5nO1xuICAvKipcbiAgICogV2hldGhlciBpdCBzdXBwb3J0cyB2aWRlb3NcbiAgICovXG4gIHN1cHBvcnRzVmlkZW9zOiBib29sZWFuO1xuICAvKipcbiAgICogV2hldGhlciBmaWxlcyBhcmUgc3VwcG9yZXRlZFxuICAgKi9cbiAgc3VwcG9ydHNGaWxlczogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFRoZSBhY2NlcHQgdHlwZSB0aGF0IHRoZSBpbnB1dCBzaG91bGQgYWNjZXB0XG4gICAqIGZvciBmaWxsaW5nIHRoZSBmaWxlIHR5cGUsIGl0IGNhbiBiZSBudWxsLCBpZlxuICAgKiBpdCBkb2Vzbid0IHN1cHBvcnQgZmlsZXMsIG9yIHdoZW4gdmlld2luZ1xuICAgKi9cbiAgc3VwcG9ydHNGaWxlc0FjY2VwdDogc3RyaW5nO1xuICAvKipcbiAgICogV2hldGhlciBsaW5rcyBhcmUgYWNjZXB0YWJsZVxuICAgKi9cbiAgc3VwcG9ydHNMaW5rczogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFdoZXRoZXIgZXh0ZXJuYWwgbGlua3Mgc3BlY2lmeWluZyBhbiBleHRlcm5hbFxuICAgKiBwcm90b2NvbCBvdXRzaWRlIHRoZSBjdXJyZW50IHBhZ2UgYXJlIGFjY2VwdGFibGVcbiAgICovXG4gIHN1cHBvcnRzRXh0ZXJuYWxMaW5rczogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFdoZXRoZXIgbGlzdHMgYXJlIGFjY2VwdGFibGUsIHVsLCBvbCBldGMuLi5cbiAgICovXG4gIHN1cHBvcnRzTGlzdHM6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBXaGV0aGVyIHF1b3RlcyBhcmUgYWNjZXB0YWJsZVxuICAgKi9cbiAgc3VwcG9ydHNRdW90ZTogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGl0bGVzIGFyZSBhY2NlcHRhYmxlXG4gICAqL1xuICBzdXBwb3J0c1RpdGxlOiBib29sZWFuO1xuICAvKipcbiAgICogV2hldGhlciBjdXN0b20gc3R5bGVzIHVzaW5nIHRoZSBzdHlsZSB0YWdcbiAgICogYXJlIGFjY2VwdGFibGVcbiAgICovXG4gIHN1cHBvcnRzQ3VzdG9tU3R5bGVzOiBib29sZWFuO1xuICAvKipcbiAgICogV2hldGhlciB0ZW1wbGF0aW5nIGlzIHN1cHBvcnRlZFxuICAgKi9cbiAgc3VwcG9ydHNUZW1wbGF0aW5nOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHdlIHN1cHBvcnQgY3VzdG9tc1xuICAgKi9cbiAgc3VwcG9ydHNDdXN0b206IGJvb2xlYW47XG4gIC8qKlxuICAgKiB0aGUgc3VwcG9ydGVkIGN1c3RvbSBlbGVtZW50c1xuICAgKi9cbiAgc3VwcG9ydGVkQ3VzdG9tczogc3RyaW5nW107XG4gIC8qKlxuICAgKiB3aGV0aGVyIHdlIHN1cHBvcnQgY29udGFpbmVyc1xuICAgKi9cbiAgc3VwcG9ydHNDb250YWluZXJzOiBib29sZWFuO1xuICAvKipcbiAgICogVGhlIHN1cHBvcnRlZCBjb250YWluZXJzLCBtaWdodCBiZSBudWxsXG4gICAqIGlmIGFsbCBzdXBwb3J0ZWQsIG5vdGUgdGhhdCB0aGlzIHdpbGxcbiAgICogbm90IGFmZmVjdCB0aGUgYmFzZSBjb250YWluZXJcbiAgICovXG4gIHN1cHBvcnRlZENvbnRhaW5lcnM6IHN0cmluZ1tdO1xuICAvKipcbiAgICogV2hldGhlciB0YWJsZXMgYXJlIHN1cHBvcnRlZFxuICAgKi9cbiAgc3VwcG9ydHNUYWJsZXM6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiBzdXBwb3J0ZWQgdGFibGVzXG4gICAqL1xuICBzdXBwb3J0ZWRUYWJsZXM6IHN0cmluZ1tdO1xuICAvKipcbiAgICogd2hldGhlciByaWNoIGNsYXNzZXMgYXJlIHN1cHBvcnRlZFxuICAgKi9cbiAgc3VwcG9ydHNSaWNoQ2xhc3NlczogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFRoZSBzdXBwb3J0ZWQgcmljaCBjbGFzc2VzLCBtaWdodCBiZSBudWxsXG4gICAqIGlmIGFsbCBzdXBwb3J0ZWRcbiAgICovXG4gIHN1cHBvcnRlZFJpY2hDbGFzc2VzOiBzdHJpbmdbXTtcbn1cblxuLyoqXG4gKiBTYW5pdGF6YXRpb24gc3RhbmRhcmQgY29uZmlndXJhdG9uXG4gKi9cbmV4cG9ydCBjb25zdCBTQU5JVElaRV9DT05GSUcgPSB7XG4gIC8vIGlmcmFtZXMgYXJlIGFsbG93ZWQsIG5vIHNvdXJjZXMgYXJlIGV4cGVjdGVkIGZyb20gdGhlIHNlcnZlciBzaWRlIGFueXdheVxuICBBRERfVEFHUzogW1wiaWZyYW1lXCJdLFxuICAvLyBidXQgc3JjIGFyZSBzdGlsbCBhbGxvd2VkIGhlcmUgZm9yIGEgc2ltcGxlIHJlYXNvbiwgYXMgdGhleSBhcmUgZGVmaW5lZCBieSB0aGUgcG9zdCBwcm9jZXNzaW5nIGhvb2tcbiAgQUREX0FUVFI6IFtcImZyYW1lYm9yZGVyXCIsIFwiYWxsb3dcIiwgXCJhbGxvd2Z1bGxzY3JlZW5cIiwgXCJzY3JvbGxpbmdcIiwgXCJzcmNcIiwgXCJzcGVsbGNoZWNrXCIsIFwiY29udGVudGVkaXRhYmxlXCJdLFxuICAvLyBhbmQgdGhlc2UgY2FuIGJlIGJsb2Igc28gd2UgbXVzdCBhbGxvdyB0aGVtXG4gIEFMTE9XX1VOS05PV05fUFJPVE9DT0xTOiB0cnVlLFxufTtcblxuLyoqXG4gKiBUaGUgbGlzdCBvZiBhbGxvd2VkIGNsYXNzZXMgZm9yIHRleHQgYXMgZGVmaW5lZCBieSB0aGUgdGV4dC1zcGVjc1xuICogdGhpcyB3aWxsIHByZXZlbnQgdXNlcnMgZnJvbSBjbGFzcyBpbmplY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IEFMTE9XRURfQ0xBU1NFUyA9IFtcbiAgXCJpbWFnZVwiLCBcImltYWdlLWNvbnRhaW5lclwiLCBcImltYWdlLXBhZFwiLCBcInZpZGVvXCIsIFwidmlkZW8tY29udGFpbmVyXCIsXG4gIFwiZmlsZVwiLCBcImZpbGUtY29udGFpbmVyXCIsIFwiZmlsZS1pY29uXCIsIFwiZmlsZS1uYW1lXCIsIFwiZmlsZS1leHRlbnNpb25cIiwgXCJmaWxlLXNpemVcIixcbiAgXCJjb250YWluZXJcIiwgXCJpbmxpbmVcIiwgXCJ2b2lkLWJsb2NrXCIsIFwidm9pZC1pbmxpbmVcIiwgXCJ2b2lkLXN1cGVyYmxvY2tcIlxuXVxuXG5leHBvcnQgY29uc3QgUklDSF9URVhUX0NMQVNTX1BSRUZJWCA9IFwicmljaC10ZXh0LS1cIjtcbmV4cG9ydCBjb25zdCBDT05UQUlORVJfQ0xBU1MgPSBcImNvbnRhaW5lclwiO1xuZXhwb3J0IGNvbnN0IENPTlRBSU5FUl9DTEFTU19QUkVGSVggPSBDT05UQUlORVJfQ0xBU1MgKyBcIi1cIjtcbmV4cG9ydCBjb25zdCBDVVNUT01fQ0xBU1NfUFJFRklYID0gXCJjdXN0b20tXCI7XG5leHBvcnQgY29uc3QgVEFCTEVfQ0xBU1NfUFJFRklYID0gXCJ0YWJsZS1cIjtcblxuLyoqXG4gKiBUaGUgbGlzdCBvZiBhbGxvd2VkIHByZWZpeGVzXG4gKi9cbmV4cG9ydCBjb25zdCBBTExPV0VEX0NMQVNTRVNfUFJFRklYRVMgPSBbXG4gIFJJQ0hfVEVYVF9DTEFTU19QUkVGSVgsIENPTlRBSU5FUl9DTEFTU19QUkVGSVgsIENVU1RPTV9DTEFTU19QUkVGSVgsIFRBQkxFX0NMQVNTX1BSRUZJWCxcbl07XG5cbi8qKlxuICogVGVtcGxhdGUgZXZlbnRzIHRoYXQgYXJlIHN1cHBvcnRlZCB0aGVzZVxuICogZXhpc3QgYXMgZGF0YS1vbi1bZXZlbnRdPVwie3tldmVudH19XCJcbiAqL1xuZXhwb3J0IGNvbnN0IFNVUFBPUlRFRF9URU1QTEFURV9FVkVOVFMgPSBbXG4gIFwiY2xpY2tcIixcbiAgXCJibHVyXCIsXG4gIFwiZm9jdXNcIixcbiAgXCJpbnB1dFwiLFxuICBcImtleWRvd25cIixcbiAgXCJrZXlwcmVzc1wiLFxuICBcImtleXVwXCIsXG4gIFwibW91c2Vkb3duXCIsXG4gIFwibW91c2VlbnRlclwiLFxuICBcIm1vdXNlbGVhdmVcIixcbiAgXCJtb3VzZW1vdmVcIixcbiAgXCJtb3VzZW92ZXJcIixcbiAgXCJtb3VzZW91dFwiLFxuICBcIm1vdXNldXBcIixcbiAgXCJtb3VzZXdoZWVsXCIsXG4gIFwidG91Y2hzdGFydFwiLFxuICBcInRvdWNobW92ZVwiLFxuICBcInRvdWNoZW5kXCIsXG4gIFwidG91Y2hjYW5jZWxcIixcbiAgXCJ3aGVlbFwiLFxuXTtcblxuLyoqXG4gKiBTdHlsZXMgdGhhdCBtaWdodCBwb3AgaW4gd2hlbiB1c2luZyB0ZW1wbGF0ZXNcbiAqIGV4aXN0IGFzIGRhdGEtW3N1cHBvcnRlZFRlbXBsYXRlU3R5bGVdLXN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7XCJcbiAqL1xuZXhwb3J0IGNvbnN0IFNVUFBPUlRFRF9URU1QTEFURV9TVFlMRVMgPSBbXG4gIFwiaG92ZXJcIixcbiAgXCJhY3RpdmVcIixcbl07XG5cbi8qKlxuICogTW9kaWZ5IHRoZSBjb250ZW50IG9mIHRoZSBjaGlsZHJlbiBiYXNlZCBvblxuICogdGhlIHRlbXBsYXRlIGFyZ3NcbiAqL1xuZXhwb3J0IGNvbnN0IFNVUFBPUlRFRF9DT05URU5UX01PRElGSUVSUyA9IFtcbiAgXCJ0ZXh0XCIsXG4gIFwiaHRtbFwiLFxuXTtcblxuLyoqXG4gKiBDdXN0b20gaGFuZGxlcnMgdG8gbW9kaWZ5IHRoZSBpbmZvcm1hdGlvbiB3aXRoaW4gdGhlIHN5c3RlbVxuICogdXNlIGFyZ3NcbiAqL1xuZXhwb3J0IGNvbnN0IFNVUFBPUlRFRF9IQU5ETEVSUyA9IFtcbiAgXCJ1aVwiLFxuXTtcblxuLyoqXG4gKiBzYW5pdGl6ZXMgYW5kIHBvc3Rwcm9jZXNzZXMgYSBnaXZlblxuICogdmFsdWUgZm9yIGFuIGl0ZW0gZGVmaW5pdGlvbiBwcm9wZXJ0eVxuICogaW4gYSB3YXkgdGhhdCBpdCBtYWtlcyBpdCBkaXJlY3RseSB1c2FibGUgYW5kIGNhblxuICogdGhlbiBiZSBwYXNzZWQgdG8gdGhlIHNlcmlhbGl6ZXIgb3IgZGlzcGxheWVkIGFzIGl0IGlzXG4gKiBAcGFyYW0gY29udGV4dCBcbiAqIEBwYXJhbSB2YWx1ZSBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplKFxuICBvcHRpb25zOiBJUG9zdFByb2Nlc3NpbmdPcHRpb25zLFxuICBmZWF0dXJlU3VwcG9ydDogSUZlYXR1cmVTdXBwb3J0T3B0aW9ucyxcbiAgdmFsdWU6IHN0cmluZyxcbikge1xuICBET01QdXJpZnkuYWRkSG9vayhcImFmdGVyU2FuaXRpemVFbGVtZW50c1wiLCBwb3N0cHJvY2Vzcy5iaW5kKHRoaXMsIG9wdGlvbnMsIGZlYXR1cmVTdXBwb3J0KSk7XG4gIGNvbnN0IG5ld1ZhbHVlID0gRE9NUHVyaWZ5LnNhbml0aXplKHZhbHVlLCBTQU5JVElaRV9DT05GSUcpO1xuICBET01QdXJpZnkucmVtb3ZlQWxsSG9va3MoKTtcbiAgcmV0dXJuIG5ld1ZhbHVlO1xufVxuXG4vKipcbiAqIFRoZSBwb3N0cHJvY2Vzc2luZyBob29rIHRoYXQgY2xlYW5zIGFuZCBzZXRzIHRoZSBhdHRyaWJ1dGVzXG4gKiByaWdodCBmb3IgdGhlIHJpY2ggdGV4dCBpbiBvcmRlciB0byBmb2xsb3cgdGhlIHN0YW5kYXJkc1xuICogZ2l2ZW4gYnkgdGhlIHRleHQtc3BlY3MubWQgZmlsZVxuICpcbiAqIEBwYXJhbSBtZWRpYVByb3BlcnR5IHRoZSBwcm9wZXJ0eSB3ZSBhcmUgdXNlZCBhcyBtZWRpYSBwcm9wZXJ0eVxuICogQHBhcmFtIGN1cnJlbnRGaWxlcyB0aGUgY3VycmVudCBmaWxlc1xuICogQHBhcmFtIHN1cHBvcnRzSW1hZ2VzIHdoZXRoZXIgd2UgYXJlIHN1cHBvcnRpbmcgaW1hZ2VzXG4gKiBAcGFyYW0gc3VwcG9ydHNWaWRlb3Mgd2hldGhlciB3ZSBhcmUgc3VwcG9ydGluZyB2aWRlb3NcbiAqIEBwYXJhbSBzdXBwb3J0c0ZpbGVzIHdoZXRoZXIgd2UgYXJlIHN1cHBvcnRpbmcgZmlsZXNcbiAqIEBwYXJhbSBub2RlIHRoZSBnaXZlbiBub2RlIGluIHF1ZXN0aW9uIHdlIGFyZSBjdXJyZW50bHkgcHJvY2Vzc2luZywgdGhpcyBpcyBhIHJlY3Vyc2l2ZVxuICogZnVuY3Rpb24gYWZ0ZXIgYWxsXG4gKiBAcmV0dXJucyBhIG5vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBvc3Rwcm9jZXNzKFxuICBvcHRpb25zOiBJUG9zdFByb2Nlc3NpbmdPcHRpb25zLFxuICBmZWF0dXJlU3VwcG9ydDogSUZlYXR1cmVTdXBwb3J0T3B0aW9ucyxcbiAgbm9kZTogSFRNTEVsZW1lbnQsXG4pIHtcbiAgaWYgKG5vZGUudGFnTmFtZSA9PT0gXCJJRlJBTUVcIikge1xuICAgIGlmIChmZWF0dXJlU3VwcG9ydC5zdXBwb3J0c1ZpZGVvcykge1xuICAgICAgY29uc3QgdmlkZW9TcmMgPSBub2RlLmRhdGFzZXQudmlkZW9TcmMgfHwgXCJcIjtcbiAgICAgIGNvbnN0IG9yaWdpbiA9IG5vZGUuZGF0YXNldC52aWRlb09yaWdpbiB8fCBcIlwiO1xuXG4gICAgICAobm9kZSBhcyBIVE1MSUZyYW1lRWxlbWVudCkuYWxsb3dGdWxsc2NyZWVuID0gdHJ1ZTtcblxuICAgICAgLy8gc3JjXG4gICAgICBpZiAob3JpZ2luID09PSBcInZpbWVvXCIpIHtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYGh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8ke3ZpZGVvU3JjfT90aXRsZT0wJmJ5bGluZT0wJnBvcnRyYWl0PTAmYmFkZ2U9MGApO1xuICAgICAgfSBlbHNlIGlmIChvcmlnaW4gPT09IFwieW91dHViZVwiKSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwic3JjXCIsIGBodHRwczovL3lvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9TcmN9P3JlbD0wYCk7XG4gICAgICB9XG5cbiAgICAgIC8vIGZyYW1lYm9yZGVyXG4gICAgICAobm9kZSBhcyBIVE1MSUZyYW1lRWxlbWVudCkuZnJhbWVCb3JkZXIgPSBcIjBcIjtcblxuICAgICAgLy8gZGF0YS12aWRlby1zcmNcbiAgICAgIG5vZGUuZGF0YXNldC52aWRlb1NyYyA9IHZpZGVvU3JjO1xuXG4gICAgICAvLyBkYXRhLXZpZGVvLW9yaWdpblxuICAgICAgbm9kZS5kYXRhc2V0LnZpZGVvT3JpZ2luID0gb3JpZ2luO1xuXG4gICAgICAvLyBhbGxvd2Z1bGxzY3JlZW5cbiAgICAgIChub2RlIGFzIEhUTUxJRnJhbWVFbGVtZW50KS5hbGxvd0Z1bGxzY3JlZW4gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLnBhcmVudEVsZW1lbnQgJiYgbm9kZS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlLnRhZ05hbWUgPT09IFwiSU1HXCIpIHtcbiAgICBpZiAoZmVhdHVyZVN1cHBvcnQuc3VwcG9ydHNJbWFnZXMpIHtcbiAgICAgIGNvbnN0IHNyY0lkID0gbm9kZS5kYXRhc2V0LnNyY0lkO1xuICAgICAgLy8gY29uc3QgY3VycmVudEZpbGVJbmRleCA9IGNvbnRleHQuY3VycmVudEZpbGVzID8gY29udGV4dC5jdXJyZW50RmlsZXMuZmluZEluZGV4KChmKSA9PiBmLmlkID09PSBzcmNJZCkgOiAtMTtcbiAgICAgIC8vIGNvbnN0IGN1cnJlbnRGaWxlID0gY3VycmVudEZpbGVJbmRleCAhPT0gLTEgPyBjb250ZXh0LmN1cnJlbnRGaWxlc1tjdXJyZW50RmlsZUluZGV4XSA6IG51bGw7XG4gICAgICBjb25zdCBhbHQgPSAobm9kZSBhcyBIVE1MSW1hZ2VFbGVtZW50KS5hbHQgfHwgXCJcIjtcbiAgICAgIGNvbnN0IHNyY0hlaWdodCA9IG5vZGUuZGF0YXNldC5zcmNIZWlnaHQ7XG4gICAgICBjb25zdCBzcmNXaWR0aCA9IG5vZGUuZGF0YXNldC5zcmNXaWR0aDtcbiAgICAgIGNvbnN0IHNpemVzID0gKG5vZGUgYXMgSFRNTEltYWdlRWxlbWVudCkuc2l6ZXMgfHwgXCI3MHZ3XCI7XG5cbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwibG9hZGluZ1wiLCBcImxhenlcIik7XG5cbiAgICAgIGNvbnN0IGN1cnJlbnRGaWxlID0gc3JjSWQgPyBvcHRpb25zLmZpbGVSZXNvbHZlcihzcmNJZCwgdHJ1ZSwgbm9kZSkgOiBudWxsO1xuXG4gICAgICBpZiAoIWN1cnJlbnRGaWxlKSB7XG4gICAgICAgIC8vIG5vZGUucGFyZW50RWxlbWVudCAmJiBub2RlLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQobm9kZSk7XG5cbiAgICAgICAgY29uc3Qgc3JjID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgfHwgXCJcIjtcblxuICAgICAgICAvLyByZW1vdmUgc3RyYXkgaHJlZnNcbiAgICAgICAgaWYgKFxuICAgICAgICAgIC8vaW1hZ2UtcGFkXG4gICAgICAgICAgbm9kZS5wYXJlbnRFbGVtZW50ICYmXG4gICAgICAgICAgLy9pbWFnZS1jb250YWluZXJcbiAgICAgICAgICBub2RlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCAmJlxuICAgICAgICAgIC8vaW1hZ2VcbiAgICAgICAgICBub2RlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ICYmXG4gICAgICAgICAgbm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC50YWdOYW1lID09PSBcIkFcIiAmJlxuICAgICAgICAgIG5vZGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaW1hZ2VcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgbm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJocmVmXCIpO1xuXG4gICAgICAgICAgLy8gZG9tcHVyaWZ5IHJlY2hlY2tzIHRoaXMgd2hpY2ggaXMgcmVhbGx5IGFubm95aW5nXG4gICAgICAgICAgLy8gYWZ0ZXIgeW91IG1vdmUgdGhlIGltYWdlIGFyb3VuZCBhbmQgcHVyaWZ5IGl0XG4gICAgICAgICAgLy8gaXQgd2lsbCBydW4gaXQgYWdhaW4gYWdhaW5zdCB0aGUgc2FtZSBjb2RlXG4gICAgICAgICAgaWYgKChvcHRpb25zLm1haWwgJiYgIXNyYy5zdGFydHNXaXRoKFwiY2lkXCIpKSB8fCAhb3B0aW9ucy5tYWlsKSB7XG4gICAgICAgICAgICBub2RlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQobm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKChvcHRpb25zLm1haWwgJiYgIXNyYy5zdGFydHNXaXRoKFwiY2lkXCIpKSB8fCAhb3B0aW9ucy5tYWlsKSB7XG4gICAgICAgICAgbm9kZS5wYXJlbnRFbGVtZW50ICYmIG5vZGUucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY29uc3QgZG9tYWluID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gY29udGV4dC5jb25maWcucHJvZHVjdGlvbkhvc3RuYW1lIDogY29udGV4dC5jb25maWcuZGV2ZWxvcG1lbnRIb3N0bmFtZTtcbiAgICAgICAgLy8gY29uc3QgYWJzb2x1dGVkRmlsZSA9IGNvbnRleHQuZm9yTWFpbCA/IG51bGwgOiBmaWxlVVJMQWJzb2x1dGVyKFxuICAgICAgICAvLyAgIGRvbWFpbixcbiAgICAgICAgLy8gICBjb250ZXh0LmNvbmZpZy5jb250YWluZXJzSG9zdG5hbWVQcmVmaXhlcyxcbiAgICAgICAgLy8gICBjdXJyZW50RmlsZSxcbiAgICAgICAgLy8gICBjb250ZXh0Lml0ZW1EZWZpbml0aW9uLFxuICAgICAgICAvLyAgIGNvbnRleHQuZm9ySWQsXG4gICAgICAgIC8vICAgY29udGV4dC5mb3JWZXJzaW9uIHx8IG51bGwsXG4gICAgICAgIC8vICAgY29udGV4dC5jb250YWluZXJJZCxcbiAgICAgICAgLy8gICBjb250ZXh0LmluY2x1ZGUsXG4gICAgICAgIC8vICAgY29udGV4dC5tZWRpYVByb3BlcnR5LFxuICAgICAgICAvLyAgIGNvbnRleHQuY2FjaGVGaWxlcyxcbiAgICAgICAgLy8gICBjb250ZXh0LmZvcmNlRnVsbFVSTHMsXG4gICAgICAgIC8vICk7XG4gICAgICAgIC8vIGNvbnN0IHNyY3NldCA9IGNvbnRleHQuZm9yTWFpbCA/IG51bGwgOiBpbWFnZVNyY1NldFJldHJpZXZlcihhYnNvbHV0ZWRGaWxlLCBjb250ZXh0Lm1lZGlhUHJvcGVydHkpO1xuXG4gICAgICAgIC8vIGxldCBpbWFnZUZhaWwgPSBcIi9yZXN0L3Jlc291cmNlL2ltYWdlLWZhaWwuc3ZnXCI7XG4gICAgICAgIC8vIGlmIChjb250ZXh0LmZvcmNlRnVsbFVSTHMgfHwgY29udGV4dC5mb3JNYWlsKSB7XG4gICAgICAgIC8vICAgaW1hZ2VGYWlsID0gXCJodHRwczovL1wiICsgZG9tYWluICsgaW1hZ2VGYWlsO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gc3Jjc2V0XG4gICAgICAgIGlmICghb3B0aW9ucy5tYWlsICYmIGN1cnJlbnRGaWxlLnNyY1NldCkge1xuICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwic3Jjc2V0XCIsIGN1cnJlbnRGaWxlLnNyY1NldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJzcmNzZXRcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc3JjXG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwic3JjXCIsIGN1cnJlbnRGaWxlLnNyYyk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMubWFpbCAmJiAhY3VycmVudEZpbGUuc3JjLnN0YXJ0c1dpdGgoXCJjaWQ6XCIpKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiWW91IGhhdmUgY3JlYXRlZCBhIHBvc3Rwcm9jZXNzaW5nIHBpcGVsaW5lIGZvciBhbiBlbWFpbCBhbmQgdGhlIHNvdXJjZSBkb2VzIG5vdCBzdGFydCB3aXRoICdjaWQ6JyB0aGUgdmFsdWUgaXMgXCIgK1xuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoY3VycmVudEZpbGUuc3JjKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgLy9pbWFnZS1wYWRcbiAgICAgICAgICBub2RlLnBhcmVudEVsZW1lbnQgJiZcbiAgICAgICAgICAvL2ltYWdlLWNvbnRhaW5lclxuICAgICAgICAgIG5vZGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ICYmXG4gICAgICAgICAgLy9pbWFnZVxuICAgICAgICAgIG5vZGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgJiZcbiAgICAgICAgICBub2RlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnRhZ05hbWUgPT09IFwiQVwiICYmXG4gICAgICAgICAgbm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJpbWFnZVwiKVxuICAgICAgICApIHtcbiAgICAgICAgICBub2RlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImhyZWZcIiwgY3VycmVudEZpbGUuc3JjKTtcblxuICAgICAgICAgIGlmIChvcHRpb25zLm1haWwpIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlQ29udGFpbmVyID0gbm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCBpbWFnZVBhZCA9IG5vZGUucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IG5vZGU7XG5cbiAgICAgICAgICAgIGFwcGx5U3R5bGUoaW1hZ2VQYWQsIGltYWdlUGFkU3R5bGVzLCB0cnVlKTtcbiAgICAgICAgICAgIGFwcGx5U3R5bGUoaW1hZ2VDb250YWluZXIsIGltYWdlQ29udGFpbmVyU3R5bGVzLCBmYWxzZSk7XG4gICAgICAgICAgICBhcHBseVN0eWxlKGltZywgaW1nU3R5bGVzLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHN0eWxlU2V0ID0gaW1hZ2UuZ2V0QXR0cmlidXRlKFwic3R5bGVcIik7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0ltYWdlID0gRE9NV2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBuZXdJbWFnZS5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcik7XG4gICAgICAgICAgICBuZXdJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBzdHlsZVNldCk7XG4gICAgICAgICAgICBhcHBseVN0eWxlKG5ld0ltYWdlLCBpbWFnZVN0eWxlcywgZmFsc2UpO1xuXG4gICAgICAgICAgICAvLyByZW1vdmUgdGhlIGxpbmsgb2JqZWN0IHRvIHRoZSBpbWFnZSBiZWNhdXNlIGVtYWlsIGNsaWVudHNcbiAgICAgICAgICAgIC8vIGRvbid0IGxpa2UgaXRcbiAgICAgICAgICAgIGltYWdlLnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKFxuICAgICAgICAgICAgICBuZXdJbWFnZSxcbiAgICAgICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNpemVzXG4gICAgICAgIGlmICghb3B0aW9ucy5tYWlsKSB7XG4gICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJzaXplc1wiLCBzaXplcyk7XG4gICAgICAgICAgLy8gZGF0YS1zcmMtd2lkdGhcbiAgICAgICAgICBub2RlLmRhdGFzZXQuc3JjV2lkdGggPSBzcmNXaWR0aDtcbiAgICAgICAgICAvLyBkYXRhLXNyYy1pZFxuICAgICAgICAgIG5vZGUuZGF0YXNldC5zcmNJZCA9IHNyY0lkO1xuICAgICAgICAgIC8vIGRhdGEtc3JjLWhlaWdodFxuICAgICAgICAgIG5vZGUuZGF0YXNldC5zcmNIZWlnaHQgPSBzcmNIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJzaXplc1wiKTtcbiAgICAgICAgICBkZWxldGUgbm9kZS5kYXRhc2V0LnNyY0lkO1xuICAgICAgICAgIGRlbGV0ZSBub2RlLmRhdGFzZXQuc3JjV2lkdGg7XG4gICAgICAgICAgZGVsZXRlIG5vZGUuZGF0YXNldC5zcmNIZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhbHRcbiAgICAgICAgKG5vZGUgYXMgSFRNTEltYWdlRWxlbWVudCkuYWx0ID0gYWx0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLnBhcmVudEVsZW1lbnQgJiYgbm9kZS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlLmNsYXNzTmFtZSA9PT0gXCJmaWxlXCIpIHtcbiAgICBpZiAoZmVhdHVyZVN1cHBvcnQuc3VwcG9ydHNGaWxlcykge1xuICAgICAgY29uc3Qgc3JjSWQgPSBub2RlLmRhdGFzZXQuc3JjSWQ7XG4gICAgICAvLyBjb25zdCBjdXJyZW50RmlsZUluZGV4ID0gY29udGV4dC5jdXJyZW50RmlsZXMgPyBjb250ZXh0LmN1cnJlbnRGaWxlcy5maW5kSW5kZXgoKGYpID0+IGYuaWQgPT09IHNyY0lkKSA6IC0xO1xuICAgICAgY29uc3QgY3VycmVudEZpbGUgPSBvcHRpb25zLmZpbGVSZXNvbHZlcihcbiAgICAgICAgc3JjSWQsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBub2RlLFxuICAgICAgKTtcblxuICAgICAgaWYgKG9wdGlvbnMubWFpbCkge1xuICAgICAgICBpZiAoY3VycmVudEZpbGUpIHtcbiAgICAgICAgICBvcHRpb25zLm1haWxTaG91bGRBdHRhY2hGaWxlICYmIG9wdGlvbnMubWFpbFNob3VsZEF0dGFjaEZpbGUoc3JjSWQpO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUucGFyZW50RWxlbWVudCAmJiBub2RlLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnRGaWxlKSB7XG4gICAgICAgIC8vIHNwZWxsY2hlY2tcbiAgICAgICAgbm9kZS5zcGVsbGNoZWNrID0gZmFsc2U7XG5cbiAgICAgICAgLy8gY29uc3QgZG9tYWluID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gY29udGV4dC5jb25maWcucHJvZHVjdGlvbkhvc3RuYW1lIDogY29udGV4dC5jb25maWcuZGV2ZWxvcG1lbnRIb3N0bmFtZTtcbiAgICAgICAgLy8gY29uc3QgYWJzb2x1dGVkRmlsZSA9IGZpbGVVUkxBYnNvbHV0ZXIoXG4gICAgICAgIC8vICAgZG9tYWluLFxuICAgICAgICAvLyAgIGNvbnRleHQuY29uZmlnLmNvbnRhaW5lcnNIb3N0bmFtZVByZWZpeGVzLFxuICAgICAgICAvLyAgIGN1cnJlbnRGaWxlLFxuICAgICAgICAvLyAgIGNvbnRleHQuaXRlbURlZmluaXRpb24sXG4gICAgICAgIC8vICAgY29udGV4dC5mb3JJZCxcbiAgICAgICAgLy8gICBjb250ZXh0LmZvclZlcnNpb24gfHwgbnVsbCxcbiAgICAgICAgLy8gICBjb250ZXh0LmNvbnRhaW5lcklkLFxuICAgICAgICAvLyAgIGNvbnRleHQuaW5jbHVkZSxcbiAgICAgICAgLy8gICBjb250ZXh0Lm1lZGlhUHJvcGVydHksXG4gICAgICAgIC8vICAgY29udGV4dC5jYWNoZUZpbGVzLFxuICAgICAgICAvLyAgIGNvbnRleHQuZm9yY2VGdWxsVVJMcyB8fCBjb250ZXh0LmZvck1haWwsXG4gICAgICAgIC8vICk7XG5cbiAgICAgICAgLy8gZGF0YS1zcmMtaWRcbiAgICAgICAgbm9kZS5kYXRhc2V0LnNyY0lkID0gc3JjSWQ7XG5cbiAgICAgICAgLy8gZGF0YS1zcmNcbiAgICAgICAgaWYgKGN1cnJlbnRGaWxlKSB7XG4gICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGN1cnJlbnRGaWxlLnNyYyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJocmVmXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29udGVudGVkaXRhYmxlXG4gICAgICAgIG5vZGUuY29udGVudEVkaXRhYmxlID0gXCJmYWxzZVwiO1xuICAgICAgICAvLyBjbGFzc1xuICAgICAgICBub2RlLmNsYXNzTmFtZSA9IFwiZmlsZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJocmVmXCIpO1xuICAgICAgICAvLyBub2RlLnBhcmVudEVsZW1lbnQgJiYgbm9kZS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLnBhcmVudEVsZW1lbnQgJiYgbm9kZS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChcbiAgICBub2RlLnRhZ05hbWUgPT09IFwiQVwiICYmXG4gICAgKG5vZGUuaGFzQXR0cmlidXRlKFwiaHJlZlwiKSB8fCBub2RlLmhhc0F0dHJpYnV0ZShcImRhdGEtaHJlZlwiKVxuICAgICkgJiYgIW5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaW1hZ2VcIikgJiYgIW5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmlsZVwiKSkge1xuICAgIGlmICghZmVhdHVyZVN1cHBvcnQuc3VwcG9ydHNMaW5rcykge1xuICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJocmVmXCIpO1xuICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIik7XG4gICAgfSBlbHNlIGlmICghZmVhdHVyZVN1cHBvcnQuc3VwcG9ydHNFeHRlcm5hbExpbmtzKSB7XG4gICAgICBjb25zdCBocmVmID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuICAgICAgaWYgKGhyZWYuaW5kZXhPZihcImh0dHBcIikgIT09IC0xIHx8IGhyZWYuaW5kZXhPZihcIjovL1wiKSAhPT0gLTEpIHtcbiAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJocmVmXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChub2RlLmNsYXNzTGlzdCkge1xuICAgIGNvbnN0IGNsYXNzTGlzdCA9IEFycmF5LmZyb20obm9kZS5jbGFzc0xpc3QpO1xuXG4gICAgY2xhc3NMaXN0LmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgaWYgKCFBTExPV0VEX0NMQVNTRVMuaW5jbHVkZXMoY2xhc3NOYW1lKSkge1xuICAgICAgICBjb25zdCBpc1ByZWZpeGVkQnlBVmFsaWRQcmVmaXggPSBBTExPV0VEX0NMQVNTRVNfUFJFRklYRVMuc29tZSgocHJlZml4KSA9PiBjbGFzc05hbWUuaW5kZXhPZihwcmVmaXgpID09PSAwKTtcbiAgICAgICAgaWYgKCFpc1ByZWZpeGVkQnlBVmFsaWRQcmVmaXgpIHtcbiAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNsYXNzTmFtZS5zdGFydHNXaXRoKENPTlRBSU5FUl9DTEFTUykpIHtcbiAgICAgICAgaWYgKCFmZWF0dXJlU3VwcG9ydC5zdXBwb3J0c0NvbnRhaW5lcnMpIHtcbiAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgfSBlbHNlIGlmIChmZWF0dXJlU3VwcG9ydC5zdXBwb3J0ZWRDb250YWluZXJzKSB7XG4gICAgICAgICAgY29uc3Qgc2hvdWxkUmVtb3ZlID0gIWZlYXR1cmVTdXBwb3J0LnN1cHBvcnRlZENvbnRhaW5lcnMuaW5jbHVkZXMoY2xhc3NOYW1lLnN1YnN0cihDT05UQUlORVJfQ0xBU1NfUFJFRklYLmxlbmd0aCkpO1xuICAgICAgICAgIGlmIChzaG91bGRSZW1vdmUpIHtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjbGFzc05hbWUuc3RhcnRzV2l0aChDVVNUT01fQ0xBU1NfUFJFRklYKSkge1xuICAgICAgICBpZiAoIWZlYXR1cmVTdXBwb3J0LnN1cHBvcnRzQ3VzdG9tKSB7XG4gICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmVhdHVyZVN1cHBvcnQuc3VwcG9ydGVkQ3VzdG9tcykge1xuICAgICAgICAgICFmZWF0dXJlU3VwcG9ydC5zdXBwb3J0ZWRDdXN0b21zLmluY2x1ZGVzKGNsYXNzTmFtZS5zdWJzdHIoQ1VTVE9NX0NMQVNTX1BSRUZJWC5sZW5ndGgpKSAmJiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjbGFzc05hbWUuc3RhcnRzV2l0aChSSUNIX1RFWFRfQ0xBU1NfUFJFRklYKSkge1xuICAgICAgICBpZiAoIWZlYXR1cmVTdXBwb3J0LnN1cHBvcnRzUmljaENsYXNzZXMpIHtcbiAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgfSBlbHNlIGlmIChmZWF0dXJlU3VwcG9ydC5zdXBwb3J0ZWRSaWNoQ2xhc3Nlcykge1xuICAgICAgICAgICFmZWF0dXJlU3VwcG9ydC5zdXBwb3J0ZWRSaWNoQ2xhc3Nlcy5pbmNsdWRlcyhjbGFzc05hbWUuc3Vic3RyKFJJQ0hfVEVYVF9DTEFTU19QUkVGSVgubGVuZ3RoKSkgJiYgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY2xhc3NOYW1lLnN0YXJ0c1dpdGgoVEFCTEVfQ0xBU1NfUFJFRklYKSkge1xuICAgICAgICBpZiAoIWZlYXR1cmVTdXBwb3J0LnN1cHBvcnRzVGFibGVzKSB7XG4gICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmVhdHVyZVN1cHBvcnQuc3VwcG9ydGVkVGFibGVzKSB7XG4gICAgICAgICAgIWZlYXR1cmVTdXBwb3J0LnN1cHBvcnRlZFRhYmxlcy5pbmNsdWRlcyhjbGFzc05hbWUuc3Vic3RyKFRBQkxFX0NMQVNTX1BSRUZJWC5sZW5ndGgpKSAmJiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKG5vZGUudGFnTmFtZSA9PT0gXCJESVZcIikge1xuICAgIGlmIChcbiAgICAgIGZlYXR1cmVTdXBwb3J0LnN1cHBvcnRzQ29udGFpbmVyc1xuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICAhbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJjb250YWluZXJcIikgJiZcbiAgICAgICAgIUFycmF5LmZyb20obm9kZS5jbGFzc0xpc3QpLnNvbWUoKHYpID0+IHYuc3RhcnRzV2l0aChcImNvbnRhaW5lci1cIikgfHwgdi5zdGFydHNXaXRoKFwiY3VzdG9tLVwiKSlcbiAgICAgICkge1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUucGFyZW50RWxlbWVudCAmJiBub2RlLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG5vZGUudGFnTmFtZSA9PT0gXCJRVU9URVwiICYmICFmZWF0dXJlU3VwcG9ydC5zdXBwb3J0c1F1b3RlKSB7XG4gICAgbm9kZS5wYXJlbnRFbGVtZW50ICYmIG5vZGUucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChub2RlKTtcbiAgfVxuXG4gIGlmIChbXCJUQUJMRVwiLCBcIlRIRUFEXCIsIFwiVEJPRFlcIiwgXCJUUlwiLCBcIlREXCJdLmluY2x1ZGVzKG5vZGUudGFnTmFtZSkgJiYgIWZlYXR1cmVTdXBwb3J0LnN1cHBvcnRzVGFibGVzKSB7XG4gICAgbm9kZS5wYXJlbnRFbGVtZW50ICYmIG5vZGUucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChub2RlKTtcbiAgfVxuXG4gIGlmIChbXCJVTFwiLCBcIk9MXCIsIFwiTElcIl0uaW5jbHVkZXMobm9kZS50YWdOYW1lKSAmJiAhZmVhdHVyZVN1cHBvcnQuc3VwcG9ydHNMaXN0cykge1xuICAgIG5vZGUucGFyZW50RWxlbWVudCAmJiBub2RlLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQobm9kZSk7XG4gIH1cblxuICBpZiAoW1wiSDFcIiwgXCJIMlwiLCBcIkgzXCIsIFwiSDRcIiwgXCJINVwiLCBcIkg2XCJdLmluY2x1ZGVzKG5vZGUudGFnTmFtZSkgJiYgIWZlYXR1cmVTdXBwb3J0LnN1cHBvcnRzVGl0bGUpIHtcbiAgICBub2RlLnBhcmVudEVsZW1lbnQgJiYgbm9kZS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKG5vZGUpO1xuICB9XG5cbiAgaWYgKG5vZGUuc3R5bGUgJiYgIWZlYXR1cmVTdXBwb3J0LnN1cHBvcnRzQ3VzdG9tU3R5bGVzKSB7XG4gICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICBTVVBQT1JURURfVEVNUExBVEVfU1RZTEVTLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgIGRlbGV0ZSBub2RlLmRhdGFzZXRbYXR0ciArIFwiU3R5bGVcIl07XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3R5bGUgPSBub2RlLmdldEF0dHJpYnV0ZSAmJiBub2RlLmdldEF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgIGlmIChzdHlsZSkge1xuICAgICAgY29uc3QgcmVtb3ZlU3R5bGUgPVxuICAgICAgICBzdHlsZS5pbmRleE9mKFwiamF2YXNjcmlwdFwiKSAhPT0gLTEgfHxcbiAgICAgICAgc3R5bGUuaW5kZXhPZihcImh0dHBcIikgIT09IC0xIHx8XG4gICAgICAgIHN0eWxlLmluZGV4T2YoXCI6Ly9cIikgIT09IC0xIHx8XG4gICAgICAgIG5vZGUuc3R5bGUucG9zaXRpb24gPT09IFwiZml4ZWRcIjtcbiAgICAgIGlmIChyZW1vdmVTdHlsZSkge1xuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChub2RlLmRhdGFzZXQpIHtcbiAgICAgIFNVUFBPUlRFRF9URU1QTEFURV9TVFlMRVMuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZUV2ZW50U3R5bGUgPSBub2RlLmRhdGFzZXRbYXR0ciArIFwiU3R5bGVcIl07XG4gICAgICAgIGlmICh0ZW1wbGF0ZUV2ZW50U3R5bGUpIHtcbiAgICAgICAgICBjb25zdCByZW1vdmVTdHlsZSA9XG4gICAgICAgICAgICB0ZW1wbGF0ZUV2ZW50U3R5bGUuaW5kZXhPZihcImphdmFzY3JpcHRcIikgIT09IC0xIHx8XG4gICAgICAgICAgICB0ZW1wbGF0ZUV2ZW50U3R5bGUuaW5kZXhPZihcImh0dHBcIikgIT09IC0xIHx8XG4gICAgICAgICAgICB0ZW1wbGF0ZUV2ZW50U3R5bGUuaW5kZXhPZihcIjovL1wiKSAhPT0gLTEgfHxcbiAgICAgICAgICAgIHRlbXBsYXRlRXZlbnRTdHlsZS5pbmRleE9mKFwiZml4ZWRcIikgIT09IC0xO1xuICAgICAgICAgIGlmIChyZW1vdmVTdHlsZSkge1xuICAgICAgICAgICAgZGVsZXRlIG5vZGUuZGF0YXNldFthdHRyICsgXCJTdHlsZVwiXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGlkID0gbm9kZS5pZDtcbiAgaWYgKGlkKSB7XG4gICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufVxuXG5jb25zdCBpbWFnZVN0eWxlcyA9IHtcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG59O1xuXG5jb25zdCBpbWFnZUNvbnRhaW5lclN0eWxlcyA9IHtcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBtYXhXaWR0aDogXCI3MDBweFwiLFxufTtcblxuY29uc3QgaW1hZ2VQYWRTdHlsZXMgPSB7XG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgcGFkZGluZ0JvdHRvbTogXCIwcHhcIixcbn1cblxuY29uc3QgaW1nU3R5bGVzID0ge1xuICB3aWR0aDogXCIxMDAlXCIsXG59O1xuXG5mdW5jdGlvbiBhcHBseVN0eWxlKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzdHlsZTogYW55LCBvdmVycmlkZTogYm9vbGVhbikge1xuICBPYmplY3Qua2V5cyhzdHlsZSkuZm9yRWFjaCgoaykgPT4ge1xuICAgIGlmICghb3ZlcnJpZGUgJiYgZWxlbWVudC5zdHlsZVtrXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuc3R5bGVba10gPSBzdHlsZVtrXTtcbiAgfSk7XG59IiwgIi8qKlxuICogQ29udGFpbnMgdGhlIHNlcmlhbGl6YXRpb24sIHJlYWN0aWZpY2F0aW9uIGFuZCBkZXNlcmlhbGl6YXRpb24gZnVuY3Rpb25zXG4gKiBmb3IgdGhlIHRleHQgbm9kZVxuICogXG4gKiB0aGUgdGV4dCBub2RlIGlzIHNwZWNpYWwgYXMgaXQncyBub3QgYSByaWNoIGVsZW1lbnQgaXRzZWxmIGFuZCBzdXBwb3J0c1xuICogcXVpdGUgZGlmZmVyZW50IHRoaW5ncyBmcm9tIHRoZSByaWNoIGVsZW1lbnQgaXRzZWxmXG4gKiBcbiAqIEBtb2R1bGVcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhbGxvd3NUZXh0LCBJUmVhY3RpZnlBcmcsIElTZXJpYWxpemF0aW9uUmVnaXN0cnlUeXBlIH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBjb252ZXJ0U3R5bGVTdHJpbmdUb1JlYWN0T2JqZWN0IH0gZnJvbSBcIi4uL2Jhc2VcIjtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgc3RhbmRhcmQgdGV4dCBub2RlIGFzIGl0IHNob3VsZCBiZSBnaXZlblxuICogZm9yIGEgdm9pZCB0ZXh0IG5vZGVcbiAqL1xuZXhwb3J0IGNvbnN0IFNUQU5EQVJEX1RFWFRfTk9ERSA9ICh0ZXh0Pzogc3RyaW5nKTogSVRleHQgPT4ge1xuICByZXR1cm4ge1xuICAgIGJvbGQ6IGZhbHNlLFxuICAgIGl0YWxpYzogZmFsc2UsXG4gICAgdW5kZXJsaW5lOiBmYWxzZSxcbiAgICB0ZXh0OiB0ZXh0IHx8IFwiXCIsXG4gIH1cbn07XG5cbmNvbnN0IHNwYWNlUmVnZXggPSAvXlxccyskLztcblxuLyoqXG4gKiBUaGUgZnVuY3Rpb24gdGhhdCByZWdpc3RlcnMgYW5kIGFkZHMgdGhlIHRleHQgbm9kZSBpbiB0aGUgZ2l2ZW5cbiAqIHJlZ2lzdHJ5XG4gKiBAcGFyYW0gcmVnaXN0cnkgdGhlIHJlZ2lzdHJ5IHRvIG1vZGlmeVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJUZXh0KHJlZ2lzdHJ5OiBJU2VyaWFsaXphdGlvblJlZ2lzdHJ5VHlwZSkge1xuXG4gIC8qKlxuICAqIFNlcmlhbGl6ZXMgYSB0ZXh0IHR5cGUgdG8gaHRtbFxuICAqIEBwYXJhbSB0ZXh0IHRoZSB0ZXh0XG4gICogQHJldHVybnMgYW4gaHRtbCBub2RlXG4gICovXG4gIGZ1bmN0aW9uIHNlcmlhbGl6ZVRleHQodGV4dDogSVRleHQpOiBOb2RlIHtcbiAgICAvLyBub3cgd2UgY3JlYXRlIGEgdGV4dCBub2RlIHdpdGggdGhlIHRleHQgY29udGVudFxuICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dC50ZXh0KTtcblxuICAgIC8vIGJ1dCB0aGlzIHdpbGwgYmUgdGhlIGZpbmFsLCBieSBpdHNlbGYgaXMgdGhlIG5vZGVcbiAgICAvLyB3ZSBqdXN0IGNyZWF0ZWRcbiAgICBsZXQgZmluYWw6IE5vZGUgPSB0ZXh0Tm9kZTtcblxuICAgIC8vIGlmIGl0J3MgYm9sZCwgd2Ugd3JhcCBpdCBpbiBzdHJvbmcgdGFnXG4gICAgaWYgKHRleHQuYm9sZCkge1xuICAgICAgY29uc3Qgc3Ryb25nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiKTtcbiAgICAgIHN0cm9uZy5hcHBlbmRDaGlsZChmaW5hbCk7XG4gICAgICBmaW5hbCA9IHN0cm9uZztcbiAgICB9XG5cbiAgICAvLyBpZiBpdCdzIGl0YWxpYyB3ZSB3cmFwIGl0IGluIGkgdGFnXG4gICAgaWYgKHRleHQuaXRhbGljKSB7XG4gICAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICBpLmFwcGVuZENoaWxkKGZpbmFsKTtcbiAgICAgIGZpbmFsID0gaTtcbiAgICB9XG5cbiAgICAvLyBpZiBpdCdzIHVuZGVybGluZSwgd2VsbCwgc2FtZSB0aGluZ1xuICAgIGlmICh0ZXh0LnVuZGVybGluZSkge1xuICAgICAgY29uc3QgdSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1XCIpO1xuICAgICAgdS5hcHBlbmRDaGlsZChmaW5hbCk7XG4gICAgICBmaW5hbCA9IHU7XG4gICAgfVxuXG4gICAgaWYgKHRleHQuc3R5bGUpIHtcbiAgICAgIGlmICgoZmluYWwgYXMgSFRNTEVsZW1lbnQpLnRhZ05hbWUpIHtcbiAgICAgICAgKGZpbmFsIGFzIEhUTUxFbGVtZW50KS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCB0ZXh0LnN0eWxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCB0ZXh0LnN0eWxlKTtcbiAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZChmaW5hbCk7XG4gICAgICAgIGZpbmFsID0gc3BhbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhbmQgcmV0dXJuIHRoYXRcbiAgICByZXR1cm4gZmluYWw7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIGEgZ2l2ZW4gbm9kZSBpbnRvIGEgdGV4dFxuICAgKiBzdHJ1Y3R1cmUgdGhhdCByZXByZXNlbnRzIGl0cyBjb250ZW50XG4gICAqIFxuICAgKiBub3RlIGhvdyBpdCB0YWtlcyBhIG5vZGUgaXRzZWxmIGFzIHNvbWV0aW1lc1xuICAgKiB0aGluZ3MgbGlrZSBpLCBzcGFuLCBldGMuLi4gdGFncywgY291bnQgYXMgdGV4dFxuICAgKiBcbiAgICogQHBhcmFtIG5vZGUgdGhlIG5vZGUgaW4gcXVlc3Rpb25cbiAgICovXG4gIGZ1bmN0aW9uIGRlc2VyaWFsaXplVGV4dChub2RlOiBOb2RlKTogSVRleHQge1xuICAgIC8vIG5vIG5vZGVcbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIC8vIHRoZW4gc2ltcGx5IHN0YW5kYXJkIHRleHQgbm9kZVxuICAgICAgLy8gdGhpcyBjYW4gaGFwcGVuIHdpdGggYSBub2RlIHRoYXQgaGFzIG5vIGNoaWxkcmVuXG4gICAgICAvLyBidXQgd2UgYXJlIGFsd2F5cyBleHBlY3RlZCB0byBoYXZlIG9uZVxuICAgICAgcmV0dXJuIFNUQU5EQVJEX1RFWFRfTk9ERSgpO1xuICAgIH1cblxuICAgIC8vIG5vdyB3ZSBjYW4gc3RhcnQgcGlja2luZyB0aGlzIGFwcGFydFxuICAgIC8vIGZpcnN0IHdlIGNvbnNpZGVyIGlmIHRoZSBub2RlIG1pZ2h0IGJlIGEgSFRNTCBlbGVtZW50XG4gICAgY29uc3Qgbm9kZUFzSFRNTEVsZW1lbnQgPSBub2RlIGFzIEhUTUxFbGVtZW50O1xuICAgIC8vIGlmIGl0J3Mgc3Ryb25nIG9yIEJcbiAgICBpZiAobm9kZUFzSFRNTEVsZW1lbnQudGFnTmFtZSA9PT0gXCJTVFJPTkdcIiB8fCBub2RlQXNIVE1MRWxlbWVudC50YWdOYW1lID09PSBcIkJcIikge1xuICAgICAgLy8gd2UgbmVlZCB0byBnZXQgaXRzIHRleHQgdmFsdWUsIGlmIGFueVxuICAgICAgY29uc3QgdGV4dFZhbHVlID0gQXJyYXkuZnJvbShub2RlLmNoaWxkTm9kZXMpLm1hcChkZXNlcmlhbGl6ZVRleHQpLmZpbHRlcigobikgPT4gbiAhPT0gbnVsbClbMF0gfHwgU1RBTkRBUkRfVEVYVF9OT0RFKCk7XG4gICAgICAvLyBpdCdzIGJvbGRcbiAgICAgIHRleHRWYWx1ZS5ib2xkID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHN0eWxlID0gbm9kZUFzSFRNTEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3R5bGVcIik7XG4gICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgdGV4dFZhbHVlLnN0eWxlID0gc3R5bGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGV4dFZhbHVlO1xuICAgICAgLy8gd2UgZG8gdGhlIHNhbWUgd2UgZGlkIGJlZm9yZSBmb3IgSVxuICAgIH0gZWxzZSBpZiAobm9kZUFzSFRNTEVsZW1lbnQudGFnTmFtZSA9PT0gXCJJXCIpIHtcbiAgICAgIGNvbnN0IHRleHRWYWx1ZSA9IEFycmF5LmZyb20obm9kZS5jaGlsZE5vZGVzKS5tYXAoZGVzZXJpYWxpemVUZXh0KS5maWx0ZXIoKG4pID0+IG4gIT09IG51bGwpWzBdIHx8IFNUQU5EQVJEX1RFWFRfTk9ERSgpO1xuICAgICAgdGV4dFZhbHVlLml0YWxpYyA9IHRydWU7XG4gICAgICBjb25zdCBzdHlsZSA9IG5vZGVBc0hUTUxFbGVtZW50LmdldEF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgIHRleHRWYWx1ZS5zdHlsZSA9IHN0eWxlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRleHRWYWx1ZTtcbiAgICAgIC8vIFVuZGVybGluZVxuICAgIH0gZWxzZSBpZiAobm9kZUFzSFRNTEVsZW1lbnQudGFnTmFtZSA9PT0gXCJVXCIpIHtcbiAgICAgIGNvbnN0IHRleHRWYWx1ZSA9IEFycmF5LmZyb20obm9kZS5jaGlsZE5vZGVzKS5tYXAoZGVzZXJpYWxpemVUZXh0KS5maWx0ZXIoKG4pID0+IG4gIT09IG51bGwpWzBdIHx8IFNUQU5EQVJEX1RFWFRfTk9ERSgpO1xuICAgICAgdGV4dFZhbHVlLnVuZGVybGluZSA9IHRydWU7XG4gICAgICBjb25zdCBzdHlsZSA9IG5vZGVBc0hUTUxFbGVtZW50LmdldEF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgIHRleHRWYWx1ZS5zdHlsZSA9IHN0eWxlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRleHRWYWx1ZTtcbiAgICAgIC8vIGFuZCBzcGFuXG4gICAgfSBlbHNlIGlmIChub2RlQXNIVE1MRWxlbWVudC50YWdOYW1lID09PSBcIlNQQU5cIikge1xuICAgICAgY29uc3QgdGV4dFZhbHVlID0gQXJyYXkuZnJvbShub2RlLmNoaWxkTm9kZXMpLm1hcChkZXNlcmlhbGl6ZVRleHQpLmZpbHRlcigobikgPT4gbiAhPT0gbnVsbClbMF0gfHwgU1RBTkRBUkRfVEVYVF9OT0RFKCk7XG4gICAgICBjb25zdCBzdHlsZSA9IG5vZGVBc0hUTUxFbGVtZW50LmdldEF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgIHRleHRWYWx1ZS5zdHlsZSA9IHN0eWxlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRleHRWYWx1ZTtcbiAgICB9XG5cbiAgICAvLyB0aGVuIHdlIHJldHVybiB0aGlzXG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IG5vZGUudGV4dENvbnRlbnQsXG4gICAgICBib2xkOiBmYWxzZSxcbiAgICAgIGl0YWxpYzogZmFsc2UsXG4gICAgICB1bmRlcmxpbmU6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmVhY3RpZmllcyBhIGdpdmVuIHRleHQgbm9kZSB0aGF0IGhhcyBhbHJlYWR5XG4gICAqIGJlZW4gZGVzZXJpYWxpemVkIGludG8gYSByZWFjdGlmaWVkIGZvcm1cbiAgICogZm9yIHVzYWdlIGluIHJpY2ggdGV4dCBlZGl0b3JzIGFuZCB3aGF0bm90XG4gICAqIEBwYXJhbSBhcmcgdGhlIHRleHQgaW4gcXVlc3Rpb25cbiAgICovXG4gIGZ1bmN0aW9uIHJlYWN0aWZ5VGV4dChhcmc6IElSZWFjdGlmeUFyZzxJVGV4dD4pIHtcbiAgICAvLyB0aGUgbmV3IGN1c3RvbSBwcm9wc1xuICAgIGNvbnN0IG5ld0N1c3RvbVByb3BzID0ge1xuICAgICAgLi4uYXJnLmN1c3RvbVByb3BzLFxuICAgICAga2V5OiBhcmcua2V5LFxuICAgIH07XG5cbiAgICAvLyBkZWxldGUgdW53YW50ZWQgc3BhY2VzIGZyb20gYmFkIG5vcm1hbGl6YXRpb25cbiAgICBpZiAoXG4gICAgICBhcmcucGFyZW50ICYmXG4gICAgICAhYWxsb3dzVGV4dChhcmcucGFyZW50KSAmJlxuICAgICAgc3BhY2VSZWdleC50ZXN0KGFyZy5lbGVtZW50LnRleHQpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyB3ZSBjaGFuZ2UgdGhlIHN0eWxlIGFzIHJlcXVpcmVkXG4gICAgaWYgKGFyZy5lbGVtZW50LmJvbGQpIHtcbiAgICAgIG5ld0N1c3RvbVByb3BzLnN0eWxlID0ge1xuICAgICAgICAuLi5uZXdDdXN0b21Qcm9wcy5zdHlsZSxcbiAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhcmcuZWxlbWVudC5pdGFsaWMpIHtcbiAgICAgIG5ld0N1c3RvbVByb3BzLnN0eWxlID0ge1xuICAgICAgICAuLi5uZXdDdXN0b21Qcm9wcy5zdHlsZSxcbiAgICAgICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXJnLmVsZW1lbnQudW5kZXJsaW5lKSB7XG4gICAgICBuZXdDdXN0b21Qcm9wcy5zdHlsZSA9IHtcbiAgICAgICAgLi4ubmV3Q3VzdG9tUHJvcHMuc3R5bGUsXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiLFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXJnLmVsZW1lbnQuc3R5bGUpIHtcbiAgICAgIG5ld0N1c3RvbVByb3BzLnN0eWxlID0ge1xuICAgICAgICAuLi5uZXdDdXN0b21Qcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29udmVydFN0eWxlU3RyaW5nVG9SZWFjdE9iamVjdChhcmcuZWxlbWVudC5zdHlsZSksXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gbm93IHdlIGFkZCB0aGUgdGV4dCBpZiB3ZSBoYXZlbid0IHNwZWNpZmllZCBjdXN0b20gY2hpbGRyZW5cbiAgICBpZiAoIW5ld0N1c3RvbVByb3BzLmNoaWxkcmVuKSB7XG4gICAgICBuZXdDdXN0b21Qcm9wcy5jaGlsZHJlbiA9IGFyZy5lbGVtZW50LnRleHQ7XG4gICAgfVxuXG4gICAgaWYgKGFyZy5leHRyYU9wdGlvbnMgJiYgYXJnLmV4dHJhT3B0aW9ucy5vbkN1c3RvbUF0dHJpYnV0ZXNGb3IpIHtcbiAgICAgIGNvbnN0IGV4dHJhUHJvcHMgPSBhcmcuZXh0cmFPcHRpb25zLm9uQ3VzdG9tQXR0cmlidXRlc0ZvcihhcmcuZWxlbWVudCk7XG4gICAgICBpZiAoZXh0cmFQcm9wcykge1xuICAgICAgICBPYmplY3Qua2V5cyhleHRyYVByb3BzKS5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICAgICAgbmV3Q3VzdG9tUHJvcHNbYXR0cl0gPSBleHRyYVByb3BzW2F0dHJdO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB3ZSByZXR1cm4gZGlyZWN0bHksIG5vIHVzZSBvZiBiYXNlIGJlY2F1c2UgdGhpcyBpcyBhIHRleHQgbm9kZVxuICAgIC8vIGl0c2VsZiwgdGhlIHJlYWN0aWZpY2F0aW9uIGRvZXMgaXQgaW4gYSBzaW5nbGUgbGV2ZWxcbiAgICAvLyBiZWNhdXNlIHRleHQgZWRpdG9yIHdvdWxkIGxpa2UgaXQgc29cbiAgICBsZXQgdG9SZW5kZXI6IFJlYWN0LlJlYWN0Tm9kZTtcblxuICAgIGlmIChhcmcuZXh0cmFPcHRpb25zICYmIGFyZy5leHRyYU9wdGlvbnMub25DdXN0b20pIHtcbiAgICAgIHRvUmVuZGVyID0gYXJnLmV4dHJhT3B0aW9ucy5vbkN1c3RvbShhcmcuZWxlbWVudCwgbmV3Q3VzdG9tUHJvcHMsIHtcbiAgICAgICAgVGFnOiBcInNwYW5cIixcbiAgICAgICAgZGVmYXVsdFJldHVybjogKCkgPT4gKDxzcGFuIHsuLi5uZXdDdXN0b21Qcm9wc30gLz4pLFxuICAgICAgICBwYXJlbnQ6IGFyZy5wYXJlbnQsXG4gICAgICAgIHRyZWU6IGFyZy50cmVlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvUmVuZGVyID0gKFxuICAgICAgICA8c3BhbiB7Li4ubmV3Q3VzdG9tUHJvcHN9IC8+XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChhcmcuZXh0cmFPcHRpb25zICYmIGFyZy5leHRyYU9wdGlvbnMub25DdXN0b21XcmFwKSB7XG4gICAgICByZXR1cm4gYXJnLmV4dHJhT3B0aW9ucy5vbkN1c3RvbVdyYXAoYXJnLmVsZW1lbnQsIHRvUmVuZGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17YXJnLmtleX0+XG4gICAgICAgIHt0b1JlbmRlcn1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxuXG4gIC8vIGFkZCB0byB0aGUgcmVnaXN0cnkgaXRzZWxmXG4gIHJlZ2lzdHJ5LlJFQUNUSUZZLnRleHQgPSByZWFjdGlmeVRleHQ7XG4gIHJlZ2lzdHJ5LlNFUklBTElaRS50ZXh0ID0gc2VyaWFsaXplVGV4dDtcbiAgcmVnaXN0cnkuREVTRVJJQUxJWkUuYnlUYWcuQiA9IGRlc2VyaWFsaXplVGV4dDtcbiAgcmVnaXN0cnkuREVTRVJJQUxJWkUuYnlUYWcuU1RST05HID0gZGVzZXJpYWxpemVUZXh0O1xuICByZWdpc3RyeS5ERVNFUklBTElaRS5ieVRhZy5JID0gZGVzZXJpYWxpemVUZXh0O1xuICByZWdpc3RyeS5ERVNFUklBTElaRS5ieVRhZy5TUEFOID0gZGVzZXJpYWxpemVUZXh0O1xuICByZWdpc3RyeS5ERVNFUklBTElaRS50ZXh0ID0gZGVzZXJpYWxpemVUZXh0O1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGJhc2ljIHRleHQgdHlwZSBmb3IgdGhlIHNsYXRlIGVkaXRvciBzdXBwb3J0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVRleHQge1xuICAvKipcbiAgICogUmVwcmVzZW50cyB0aGUgdGV4dCBjb250ZW50XG4gICAqL1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSB0ZXh0IGlzIGluIGJvbGRcbiAgICovXG4gIGJvbGQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSB0ZXh0IGlzIGluIGl0YWxpY1xuICAgKi9cbiAgaXRhbGljOiBib29sZWFuO1xuICAvKipcbiAgICogV2hldGhlciB0aGUgdGV4dCBpcyB1bmRlcmxpbmVcbiAgICovXG4gIHVuZGVybGluZTogYm9vbGVhbjtcbiAgLyoqXG4gICAqIGN1c3RvbWl6ZWQgc3R5bGVcbiAgICovXG4gIHN0eWxlPzogc3RyaW5nO1xufSIsICIvKipcbiAqIENvbnRhaW5zIHRoZSBzZXJpYWxpemF0aW9uLCByZWFjdGlmaWNhdGlvbiBhbmQgZGVzZXJpYWxpemF0aW9uIGZ1bmN0aW9uc1xuICogZm9yIHRoZSBwYXJhZ3JhcGggZWxlbWVudFxuICogXG4gKiBAbW9kdWxlXG4gKi9cblxuaW1wb3J0IHsgZGVzZXJpYWxpemVDaGlsZHJlbkZvck5vZGUsIElSZWFjdGlmeUFyZywgSVNlcmlhbGl6YXRpb25SZWdpc3RyeVR5cGUsIFJpY2hFbGVtZW50IH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBkZXNlcmlhbGl6ZUVsZW1lbnRCYXNlLCBJRWxlbWVudEJhc2UsIHJlYWN0aWZ5RWxlbWVudEJhc2UsIHNlcmlhbGl6ZUVsZW1lbnRCYXNlIH0gZnJvbSBcIi4uL2Jhc2VcIjtcbmltcG9ydCB7IElGaWxlIH0gZnJvbSBcIi4vZmlsZVwiO1xuaW1wb3J0IHsgSUlubGluZSB9IGZyb20gXCIuL2lubGluZVwiO1xuaW1wb3J0IHsgSUxpbmsgfSBmcm9tIFwiLi9saW5rXCI7XG5pbXBvcnQgeyBJVGV4dCwgU1RBTkRBUkRfVEVYVF9OT0RFIH0gZnJvbSBcIi4vdGV4dFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gU1RBTkRBUkRfUEFSQUdSQVBIKHRleHRPcklubGluZT86IHN0cmluZyB8IElUZXh0IHwgUmljaEVsZW1lbnQpOiBJUGFyYWdyYXBoIHtcbiAgaWYgKHRleHRPcklubGluZSAmJiAodGV4dE9ySW5saW5lIGFzIFJpY2hFbGVtZW50KS50eXBlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFwicGFyYWdyYXBoXCIsXG4gICAgICBjaGlsZHJlbjogW3RleHRPcklubGluZSBhcyBhbnldLFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBcInBhcmFncmFwaFwiLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICAoXG4gICAgICAgIHR5cGVvZiB0ZXh0T3JJbmxpbmUgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgdGV4dE9ySW5saW5lICE9PSBudWxsICYmXG4gICAgICAgIHR5cGVvZiAodGV4dE9ySW5saW5lIGFzIElUZXh0KS50ZXh0ID09PSBcInN0cmluZ1wiXG4gICAgICApID9cbiAgICAgICAgKHRleHRPcklubGluZSBhcyBJVGV4dCkgOlxuICAgICAgICBTVEFOREFSRF9URVhUX05PREUodGV4dE9ySW5saW5lIGFzIHN0cmluZylcbiAgICBdLFxuICB9O1xufTtcblxuLyoqXG4gKiBUaGUgZnVuY3Rpb24gdGhhdCByZWdpc3RlcnMgYW5kIGFkZHMgdGhlIHBhcmFncmFwaCBlbGVtZW50IGluIHRoZSBnaXZlblxuICogcmVnaXN0cnlcbiAqIEBwYXJhbSByZWdpc3RyeSB0aGUgcmVnaXN0cnkgdG8gbW9kaWZ5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclBhcmFncmFwaChyZWdpc3RyeTogSVNlcmlhbGl6YXRpb25SZWdpc3RyeVR5cGUpIHtcblxuICAvKipcbiAgICogY29udmVydHMgYSBnaXZlbiBwYXJhZ3JhcGggcmljaCBlbGVtZW50IGludG8gaXRzXG4gICAqIEhUTUwgZm9ybVxuICAgKiBAcGFyYW0gcCB0aGUgcGFyYWdyYXBoIHJpY2ggZWxlbWVudFxuICAgKiBAcmV0dXJucyBhbiBIVE1MIGVsZW1lbnRcbiAgICovXG4gIGZ1bmN0aW9uIHNlcmlhbGl6ZVBhcmFncmFwaChwOiBJUGFyYWdyYXBoKSB7XG4gICAgLy8gc2ltcGxlXG4gICAgcmV0dXJuIHNlcmlhbGl6ZUVsZW1lbnRCYXNlKHJlZ2lzdHJ5LCBwLCBcInBcIiwgbnVsbCwgbnVsbCwgcC5jaGlsZHJlbik7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIGFuIEhUTUwgbm9kZSBpbnRvIHRoZSBnaXZlbiBwYXJhZ3JhcGhcbiAgICogcmljaCBlbGVtZW50XG4gICAqIEBwYXJhbSBub2RlIHRoZSBub2RlIGluIHF1ZXN0aW9uXG4gICAqIEByZXR1cm5zIGEgcGFyYWdyYXBoIGVsZW1lbnQgc3RydWN0dXJlXG4gICAqL1xuICBmdW5jdGlvbiBkZXNlcmlhbGl6ZVBhcmFncmFwaChub2RlOiBIVE1MRWxlbWVudCk6IElQYXJhZ3JhcGgge1xuICAgIC8vIGZpcnN0IGxldCdzIGdldCB0cmhlIGJhc2VcbiAgICBjb25zdCBiYXNlID0gZGVzZXJpYWxpemVFbGVtZW50QmFzZShub2RlKTtcbiAgICAvLyBub3cgbGV0J3MgZ2V0IHRoZSBjaGlsZHJlblxuICAgIGNvbnN0IGNoaWxkcmVuID0gZGVzZXJpYWxpemVDaGlsZHJlbkZvck5vZGUobm9kZSkgYXMgQXJyYXk8SVRleHQgfCBJTGluayB8IElGaWxlIHwgSUlubGluZT47XG5cbiAgICAvLyBhbmQgYnVpbGQgdGhlIHBhcmFncmFwaCBpdHNlbGZcbiAgICBjb25zdCBwYXJhZ3JhcGg6IElQYXJhZ3JhcGggPSB7XG4gICAgICAuLi5iYXNlLFxuICAgICAgdHlwZTogXCJwYXJhZ3JhcGhcIixcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gaXRcbiAgICByZXR1cm4gcGFyYWdyYXBoO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWN0aWZpZXMgYSBwYXJhZ3JhcGggdGhhdCBpcyBhbHJlYWR5XG4gICAqIGludG8gYSByaWNoIGVsZW1lbnQgZm9ybVxuICAgKiBAcGFyYW0gYXJnIHRoZSByZWFjdGlmaWNhdGlvbiBhcmdcbiAgICovXG4gIGZ1bmN0aW9uIHJlYWN0aWZ5UGFyYWdyYXBoKGFyZzogSVJlYWN0aWZ5QXJnPElQYXJhZ3JhcGg+KSB7XG4gICAgcmV0dXJuIHJlYWN0aWZ5RWxlbWVudEJhc2UoXG4gICAgICAvLyB0aGUgcmVnaXN0cnlcbiAgICAgIHJlZ2lzdHJ5LFxuICAgICAgLy8gdGhlIHRhZyB0byB1c2VcbiAgICAgIFwicFwiLFxuICAgICAgLy8gbm8gYmFzZSBjbGFzcyBuYW1lXG4gICAgICBudWxsLFxuICAgICAgLy8gdGhlIGNoaWxkcmVuIHRvIHVzZVxuICAgICAgYXJnLmVsZW1lbnQuY2hpbGRyZW4sXG4gICAgICAvLyBubyB3cmFwIGNoaWxkcmVuIGZ1bmN0aW9uXG4gICAgICBudWxsLFxuICAgICAgLy8gdGhlIGFyZyBpdHNlbGZcbiAgICAgIGFyZyxcbiAgICApO1xuICB9XG5cbiAgLy8gcmVnaXN0ZXIgaW4gdGhlIHJlZ2lzdHJ5XG4gIHJlZ2lzdHJ5LlJFQUNUSUZZLnBhcmFncmFwaCA9IHJlYWN0aWZ5UGFyYWdyYXBoO1xuICByZWdpc3RyeS5TRVJJQUxJWkUucGFyYWdyYXBoID0gc2VyaWFsaXplUGFyYWdyYXBoO1xuICByZWdpc3RyeS5CTE9DS1MucGFyYWdyYXBoID0gdHJ1ZTtcblxuICByZWdpc3RyeS5ERVNFUklBTElaRS5ieVRhZy5QID0gZGVzZXJpYWxpemVQYXJhZ3JhcGg7XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgcGFyYWdyYXBoLCBwIHR5cGUgZm9yIHRoZVxuICogcmljaCB0ZXh0IHNwZWNpZmljYXRpb25cbiAqIGJ1dCBpdCBtaWdodCBhbHNvIGJlIGEgZGl2IG9yIGEgc3BhblxuICovXG5leHBvcnQgaW50ZXJmYWNlIElQYXJhZ3JhcGggZXh0ZW5kcyBJRWxlbWVudEJhc2Uge1xuICB0eXBlOiBcInBhcmFncmFwaFwiLFxuXG4gIC8qKlxuICAgKiBUaGUgcGFyYWdyYXBoIGNoaWxkcmVuIGNhbiBiZSBlaXRoZXIgdGV4dCBvciBsaW5rIG9yIGZpbGUgZm9yIHRoZSBpbmxpbmVzXG4gICAqL1xuICBjaGlsZHJlbjogQXJyYXk8SVRleHQgfCBJTGluayB8IElGaWxlIHwgSUlubGluZT47XG59IiwgIi8qKlxuICogQ29udGFpbnMgdGhlIHNlcmlhbGl6YXRpb24sIHJlYWN0aWZpY2F0aW9uIGFuZCBkZXNlcmlhbGl6YXRpb24gZnVuY3Rpb25zXG4gKiBmb3IgdGhlIGNvbnRhaW5lciBlbGVtZW50LCB3aGljaCBpcyBiYXNpY2FsbHkgYSBkaXYgd2l0aCBhIGNvbnRhaW5lclxuICogY2xhc3MgbmFtZVxuICogXG4gKiBAbW9kdWxlXG4gKi9cblxuaW1wb3J0IHsgSVJlYWN0aWZ5QXJnLCBJU2VyaWFsaXphdGlvblJlZ2lzdHJ5VHlwZSwgUmljaEVsZW1lbnQsIGRlc2VyaWFsaXplQ2hpbGRyZW5Gb3JOb2RlIH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBDT05UQUlORVJfQ0xBU1MsIENPTlRBSU5FUl9DTEFTU19QUkVGSVggfSBmcm9tIFwiLi4vLi4vc2FuaXRpemVyXCI7XG5pbXBvcnQgeyBzZXJpYWxpemVFbGVtZW50QmFzZSwgZGVzZXJpYWxpemVFbGVtZW50QmFzZSwgSUVsZW1lbnRCYXNlLCByZWFjdGlmeUVsZW1lbnRCYXNlIH0gZnJvbSBcIi4uL2Jhc2VcIjtcbmltcG9ydCB7IElDdXN0b20gfSBmcm9tIFwiLi9jdXN0b21cIjtcbmltcG9ydCB7IElGaWxlIH0gZnJvbSBcIi4vZmlsZVwiO1xuaW1wb3J0IHsgSUltYWdlIH0gZnJvbSBcIi4vaW1hZ2VcIjtcbmltcG9ydCB7IElMaXN0IH0gZnJvbSBcIi4vbGlzdFwiO1xuaW1wb3J0IHsgSVBhcmFncmFwaCwgU1RBTkRBUkRfUEFSQUdSQVBIIH0gZnJvbSBcIi4vcGFyYWdyYXBoXCI7XG5pbXBvcnQgeyBJUXVvdGUgfSBmcm9tIFwiLi9xdW90ZVwiO1xuaW1wb3J0IHsgSVRhYmxlIH0gZnJvbSBcIi4vdGFibGVcIjtcbmltcG9ydCB7IElUZXh0IH0gZnJvbSBcIi4vdGV4dFwiO1xuaW1wb3J0IHsgSVRpdGxlIH0gZnJvbSBcIi4vdGl0bGVcIjtcbmltcG9ydCB7IElWaWRlbyB9IGZyb20gXCIuL3ZpZGVvXCI7XG5cbi8qKlxuICogVGhlIGZ1bmN0aW9uIHRoYXQgcmVnaXN0ZXJzIGFuZCBhZGRzIHRoZSBjb250YWluZXIgaW4gdGhlIGdpdmVuXG4gKiByZWlnc3RyeVxuICogQHBhcmFtIHJlZ2lzdHJ5IHRoZSByZWdpc3RyeSB0byBtb2RpZnlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ29udGFpbmVyKHJlZ2lzdHJ5OiBJU2VyaWFsaXphdGlvblJlZ2lzdHJ5VHlwZSkge1xuXG4gIC8qKlxuICAgKiBUaGUgZnVuY3Rpb24gdGhhdCBzZXJpYWxpemVzIHRoZSBjb250YWluZXIgaW50byBIVE1MXG4gICAqIEBwYXJhbSBjb250YWluZXIgdGhlIGNvbnRhaW5lciBpbiBxdWVzdGlvblxuICAgKiBAcmV0dXJucyBhbiBIVE1MIEVsZW1lbnRcbiAgICovXG4gIGZ1bmN0aW9uIHNlcmlhbGl6ZUNvbnRhaW5lcihjb250YWluZXI6IElDb250YWluZXIpIHtcbiAgICAvLyBjYWxscyB0aGUgc2VyaWFsaXplIGVsZW1lbnQgYmFzZSBmdW5jdGlvblxuICAgIHJldHVybiBzZXJpYWxpemVFbGVtZW50QmFzZShcbiAgICAgIC8vIHRoZSByZWdpc3RyeVxuICAgICAgcmVnaXN0cnksXG4gICAgICAvLyB0aGUgY29udGFpbmVyIGluIHF1ZXN0aW9uXG4gICAgICBjb250YWluZXIsXG4gICAgICAvLyB0aGUgZWxlbWVudCBzaG91bGQgYmUgYSBkaXYgZWxlbWVudCB0eXBlXG4gICAgICBcImRpdlwiLFxuICAgICAgLy8gdGhlIGNsYXNzIHdpbGwgYmUgY29udGFpbmVyIGNsYXNzIG9yIHRoZSBwcmVmaXhlZCBjbGFzcyBpZiBhIGdpdmVuIGNvbnRhaW5lciB0eXBlXG4gICAgICAvLyBleGlzdHNcbiAgICAgIGNvbnRhaW5lci5jb250YWluZXJUeXBlID8gQ09OVEFJTkVSX0NMQVNTX1BSRUZJWCArIGNvbnRhaW5lci5jb250YWluZXJUeXBlIDogQ09OVEFJTkVSX0NMQVNTLFxuICAgICAgLy8gbm8gc3BlY2lhbCBhdHRyaWJ1dGVzXG4gICAgICBudWxsLFxuICAgICAgLy8gdGhlIGNoaWxkcmVuIGluc2lkZSB0aGUgY29udGFpbmVyLCB0aGVzZSBhcmUgcmljaCBlbGVtZW50c1xuICAgICAgY29udGFpbmVyLmNoaWxkcmVuLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYSBIVE1MIGVsZW1lbnQgdGhhdCBpcyBhbHJlYWR5IGNvbnNpZGVyZWQgYSBjb250YWluZXJcbiAgICogaW50byB0aGUgSUNvbnRhaW5lciBmb3JtXG4gICAqIEBwYXJhbSBub2RlIHRoZSBub2RlIGluIHF1ZXN0aW9uXG4gICAqIEByZXR1cm5zIGEgY29udGFpbmVyIGVsZW1lbnQgc3RydWN0dXJlXG4gICAqL1xuICBmdW5jdGlvbiBkZXNlcmlhbGl6ZUNvbnRhaW5lcihub2RlOiBIVE1MRGl2RWxlbWVudCk6IElDb250YWluZXIge1xuICAgIC8vIGZpcnN0IHdlIHRha2UgdGhlIGJhc2VcbiAgICBjb25zdCBiYXNlID0gZGVzZXJpYWxpemVFbGVtZW50QmFzZShub2RlKTtcblxuICAgIC8vIG5vdyB3ZSBnZXQgdG8gZ2V0IHRoZSBjb250YWluZXIgdHlwZVxuICAgIGxldCBjb250YWluZXJUeXBlOiBzdHJpbmcgPSBudWxsO1xuICAgIG5vZGUuY2xhc3NMaXN0LmZvckVhY2goKGMpID0+IHtcbiAgICAgIGlmIChjLnN0YXJ0c1dpdGgoQ09OVEFJTkVSX0NMQVNTX1BSRUZJWCkpIHtcbiAgICAgICAgY29udGFpbmVyVHlwZSA9IGMuc3Vic3RyKENPTlRBSU5FUl9DTEFTU19QUkVGSVgubGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIG5vdyB3ZSBjYW4gYnVpbGQgdGhlIGNvbnRhaW5lciBpdHNlbGZcbiAgICBjb25zdCBjb250YWluZXI6IElDb250YWluZXIgPSB7XG4gICAgICAuLi5iYXNlLFxuICAgICAgdHlwZTogXCJjb250YWluZXJcIixcbiAgICAgIGNvbnRhaW5lclR5cGUsXG4gICAgICBjaGlsZHJlbjogZGVzZXJpYWxpemVDaGlsZHJlbkZvck5vZGUobm9kZSkgYXMgYW55W10sXG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIGl0XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFjdGlmaWVzIHRoZSBjb250YWluZXIgdGhhdCBpcyBhbHJlYWR5XG4gICAqIGludG8gYSByaWNoIGVsZW1lbnQgZm9ybVxuICAgKiBAcGFyYW0gYXJnIHRoZSByZWFjdGlmaWNhdGlvbiBhcmdcbiAgICovXG4gIGZ1bmN0aW9uIHJlYWN0aWZ5Q29udGFpbmVyKGFyZzogSVJlYWN0aWZ5QXJnPElDb250YWluZXI+KSB7XG4gICAgLy8gd2UgcmV0cnVuIGZyb20gdGhlIGJhc2VcbiAgICByZXR1cm4gcmVhY3RpZnlFbGVtZW50QmFzZShcbiAgICAgIC8vIHRoZSByZWdpc3RyeVxuICAgICAgcmVnaXN0cnksXG4gICAgICAvLyB0aGUgZGl2IGVsZW1lbnRcbiAgICAgIFwiZGl2XCIsXG4gICAgICAvLyB3ZSBwYXNzIGVpdGhlciB0aGUgY29udGFpbmVyIHR5cGUgcHJlZml4ZWQgb3IgdGhlIGNvbnRhaW5lciBjbGFzcyBpdHNlbGZcbiAgICAgIGFyZy5lbGVtZW50LmNvbnRhaW5lclR5cGUgPyBDT05UQUlORVJfQ0xBU1NfUFJFRklYICsgYXJnLmVsZW1lbnQuY29udGFpbmVyVHlwZSA6IENPTlRBSU5FUl9DTEFTUyxcbiAgICAgIC8vIHRoZSBjaGlsZHJlbiBvZiB0aGUgY29udGFpbmVyXG4gICAgICBhcmcuZWxlbWVudC5jaGlsZHJlbixcbiAgICAgIC8vIG5vIHdyYXAgY2hpbGRyZW4gZnVuY3Rpb25cbiAgICAgIG51bGwsXG4gICAgICAvLyBhbmQgdGhlIGFyZyBvZiByZWFjdGlmaWNhdGlvblxuICAgICAgYXJnLFxuICAgICk7XG4gIH1cblxuICAvLyByZWdpc3RlciBpbiB0aGUgcmVnaXN0cnlcbiAgcmVnaXN0cnkuUkVBQ1RJRlkuY29udGFpbmVyID0gcmVhY3RpZnlDb250YWluZXI7XG4gIHJlZ2lzdHJ5LlNFUklBTElaRS5jb250YWluZXIgPSBzZXJpYWxpemVDb250YWluZXI7XG4gIHJlZ2lzdHJ5LkFMTE9XU19DSElMRFJFTi5jb250YWluZXIgPSBbXG4gICAgXCJjb250YWluZXJcIixcbiAgICBcImN1c3RvbVwiLFxuICAgIFwiZmlsZVwiLFxuICAgIFwiaW1hZ2VcIixcbiAgICBcImxpc3RcIixcbiAgICBcInBhcmFncmFwaFwiLFxuICAgIFwicXVvdGVcIixcbiAgICBcInRhYmxlXCIsXG4gICAgXCJ0aXRsZVwiLFxuICAgIFwidmlkZW9cIixcbiAgICBcInZvaWQtc3VwZXJibG9ja1wiLFxuICAgIFwidm9pZC1ibG9ja1wiLFxuICBdO1xuICByZWdpc3RyeS5PTl9FTVBUWV9GSUxMX1dJVEguY29udGFpbmVyID0gKCkgPT4ge1xuICAgIHJldHVybiBTVEFOREFSRF9QQVJBR1JBUEgoKTtcbiAgfVxuXG4gIHJlZ2lzdHJ5Lk9OX0lOVkFMSURfVEVYVF9XUkFQX1dJVEguY29udGFpbmVyID0gKHRleHQ6IElUZXh0KSA9PiB7XG4gICAgcmV0dXJuIFtTVEFOREFSRF9QQVJBR1JBUEgoKV07XG4gIH1cbiAgcmVnaXN0cnkuT05fSU5WQUxJRF9DSElMRFJFTl9XUkFQX1dJVEguY29udGFpbmVyID0gKGNoaWxkOiBSaWNoRWxlbWVudCkgPT4ge1xuICAgIGlmIChjaGlsZC50eXBlID09PSBcImlubGluZVwiIHx8IGNoaWxkLnR5cGUgPT09IFwiZmlsZVwiIHx8IGNoaWxkLnR5cGUgPT09IFwibGlua1wiKSB7XG4gICAgICByZXR1cm4gW1NUQU5EQVJEX1BBUkFHUkFQSCgpXTtcbiAgICB9IGVsc2UgaWYgKGNoaWxkLnR5cGUgPT09IFwidGhlYWRcIiB8fCBjaGlsZC50eXBlID09PSBcInRib2R5XCIpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcInRhYmxlXCIsXG4gICAgICAgICAgdGFibGVUeXBlOiBudWxsLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0gZWxzZSBpZiAoY2hpbGQudHlwZSA9PT0gXCJ0clwiKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogXCJ0Ym9keVwiLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IFwidGFibGVcIixcbiAgICAgICAgICB0YWJsZVR5cGU6IG51bGwsXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICB9XG4gICAgICBdO1xuICAgIH0gZWxzZSBpZiAoY2hpbGQudHlwZSA9PT0gXCJ0ZFwiKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogXCJ0clwiLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IFwidGJvZHlcIixcbiAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcInRhYmxlXCIsXG4gICAgICAgICAgdGFibGVUeXBlOiBudWxsLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgfVxuICAgICAgXTtcbiAgICB9IGVsc2UgaWYgKGNoaWxkLnR5cGUgPT09IFwibGlzdC1pdGVtXCIpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgICBsaXN0VHlwZTogXCJidWxsZXRlZFwiLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgfVxuICAgICAgXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZWdpc3RyeS5TVVBFUkJMT0NLUy5jb250YWluZXIgPSB0cnVlO1xuXG4gIHJlZ2lzdHJ5LkRFU0VSSUFMSVpFLmJ5Q2xhc3NOYW1lLmNvbnRhaW5lciA9IGRlc2VyaWFsaXplQ29udGFpbmVyO1xuICByZWdpc3RyeS5ERVNFUklBTElaRS5ieVRhZy5ESVYgPSBkZXNlcmlhbGl6ZUNvbnRhaW5lcjtcbiAgcmVnaXN0cnkuREVTRVJJQUxJWkUuYnlDbGFzc05hbWVQcmVmaXguY29udGFpbmVyID0gZGVzZXJpYWxpemVDb250YWluZXI7XG59XG5cbi8qKlxuICogVGhlIGNvbnRhaW5lciByZXByZXNlbnRzIGEgZGl2IGNvbnRhbmVyIHR5cGVcbiAqIG9mIHRoZSBjbGFzcyBjb250YWluZXIgZm9yIHRoZSB0ZXh0IHNwZWNzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhaW5lciBleHRlbmRzIElFbGVtZW50QmFzZSB7XG4gIHR5cGU6IFwiY29udGFpbmVyXCI7XG4gIC8qKlxuICAgKiBBIGNvbnRhaW5lciB0eXBlLCBtaWdodCBiZSBudWxsXG4gICAqL1xuICBjb250YWluZXJUeXBlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEl0IGNhbiBoYXZlIGFzIG1hbnkgY2hpbGRyZW4gYXMgaXQgcmVxdWlyZXNcbiAgICogYnV0IG5vdCB0ZXh0IGRpcmVjdGx5XG4gICAqL1xuICBjaGlsZHJlbjogQXJyYXk8SUNvbnRhaW5lciB8IElDdXN0b20gfCBJRmlsZSB8IElQYXJhZ3JhcGggfCBJTGlzdCB8IElRdW90ZSB8IElUYWJsZSB8IElWaWRlbyB8IElUaXRsZSB8IElJbWFnZT47XG59XG4iLCAiLyoqXG4gKiBDb250YWlucyB0aGUgc2VyaWFsaXphdGlvbiwgcmVhY3RpZmljYXRpb24gYW5kIGRlc2VyaWFsaXphdGlvbiBmdW5jdGlvbnNcbiAqIGZvciB0aGUgY3VzdG9tIGVsZW1lbnQsIHdoaWNoIGlzIGJhc2ljYWxseSBhIGRpdiB3aXRoIGEgY3VzdG9tIHByZWZpeGVkXG4gKiBjbGFzcyBuYW1lXG4gKiBcbiAqIEBtb2R1bGVcbiAqL1xuXG5pbXBvcnQgeyBJU2VyaWFsaXphdGlvblJlZ2lzdHJ5VHlwZSwgSVJlYWN0aWZ5QXJnLCBkZXNlcmlhbGl6ZUNoaWxkcmVuRm9yTm9kZSB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHsgQ1VTVE9NX0NMQVNTX1BSRUZJWCB9IGZyb20gXCIuLi8uLi9zYW5pdGl6ZXJcIjtcbmltcG9ydCB7IHNlcmlhbGl6ZUVsZW1lbnRCYXNlLCBkZXNlcmlhbGl6ZUVsZW1lbnRCYXNlLCBJRWxlbWVudEJhc2UsIHJlYWN0aWZ5RWxlbWVudEJhc2UgfSBmcm9tIFwiLi4vYmFzZVwiO1xuaW1wb3J0IHsgSUNvbnRhaW5lciB9IGZyb20gXCIuL2NvbnRhaW5lclwiO1xuaW1wb3J0IHsgSUZpbGUgfSBmcm9tIFwiLi9maWxlXCI7XG5pbXBvcnQgeyBJSW1hZ2UgfSBmcm9tIFwiLi9pbWFnZVwiO1xuaW1wb3J0IHsgSUxpc3QgfSBmcm9tIFwiLi9saXN0XCI7XG5pbXBvcnQgeyBJUGFyYWdyYXBoLCBTVEFOREFSRF9QQVJBR1JBUEggfSBmcm9tIFwiLi9wYXJhZ3JhcGhcIjtcbmltcG9ydCB7IElRdW90ZSB9IGZyb20gXCIuL3F1b3RlXCI7XG5pbXBvcnQgeyBJVGFibGUgfSBmcm9tIFwiLi90YWJsZVwiO1xuaW1wb3J0IHsgSVRpdGxlIH0gZnJvbSBcIi4vdGl0bGVcIjtcbmltcG9ydCB7IElWaWRlbyB9IGZyb20gXCIuL3ZpZGVvXCI7XG5cbi8qKlxuICogVGhlIGZ1bmN0aW9uIHRoYXQgcmVnaXN0ZXJzIGFuZCBhZGRzIHRoZSBjdXN0b20gaW4gdGhlIGdpdmVuXG4gKiByZWlnc3RyeVxuICogQHBhcmFtIHJlZ2lzdHJ5IHRoZSByZWdpc3RyeSB0byBtb2RpZnlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ3VzdG9tKHJlZ2lzdHJ5OiBJU2VyaWFsaXphdGlvblJlZ2lzdHJ5VHlwZSkge1xuXG4gIC8qKlxuICAgKiBUaGUgZnVuY3Rpb24gdGhhdCBzZXJpYWxpemVzIHRoZSBjdXN0b20gaW50byBIVE1MXG4gICAqIEBwYXJhbSBjdXN0b20gdGhlIGN1c3RvbSBlbGVtZW50IGluIHF1ZXN0aW9uXG4gICAqIEByZXR1cm5zIGFuIEhUTUwgRWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gc2VyaWFsaXplQ3VzdG9tKGN1c3RvbTogSUN1c3RvbSkge1xuICAgIC8vIGNhbGxzIHRoZSBzZXJpYWxpemUgZWxlbWVudCBiYXNlIGZ1bmN0aW9uXG4gICAgcmV0dXJuIHNlcmlhbGl6ZUVsZW1lbnRCYXNlKFxuICAgICAgLy8gdGhlIHJlZ2lzdHJ5IGluIHF1ZXN0aW9uXG4gICAgICByZWdpc3RyeSxcbiAgICAgIC8vIHRoZSBjdXN0b20gZWxlbWVudFxuICAgICAgY3VzdG9tLFxuICAgICAgLy8gdGhlIGRpdiByZXByZXNlbnRzIHRoYXQgdGhlIGN1c3RvbSBpcyBhIGRpdlxuICAgICAgXCJkaXZcIixcbiAgICAgIC8vIHRoZSBwcmVmaXhlZCBjdXN0b20gdHlwZVxuICAgICAgQ1VTVE9NX0NMQVNTX1BSRUZJWCArIGN1c3RvbS5jdXN0b21UeXBlLFxuICAgICAgLy8gbm8gc3BlY2lhbCBhdHRyaWJ1dGVzXG4gICAgICBudWxsLFxuICAgICAgLy8gYW5kIHRoZSBjaGlsZHJlbiB3ZSBhcmUgbWVhbnQgdG8gcmVuZGVyXG4gICAgICBjdXN0b20uY2hpbGRyZW4sXG4gICAgKTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgSFRNTCBlbGVtZW50IHRoYXQgaXMgYWxyZWFkeSBjb25zaWRlcmVkIGEgY3VzdG9tIGVsZW1lbnRcbiAgICogaW50byB0aGUgSUN1c3RvbSBmb3JtXG4gICAqIEBwYXJhbSBub2RlIHRoZSBub2RlIGluIHF1ZXN0aW9uXG4gICAqIEByZXR1cm5zIGEgY3VzdG9tIGVsZW1lbnQgc3RydWN0dXJlXG4gICAqL1xuICBmdW5jdGlvbiBkZXNlcmlhbGl6ZUN1c3RvbShub2RlOiBIVE1MRGl2RWxlbWVudCk6IElDdXN0b20ge1xuICAgIC8vIGZpcnN0IHdlIHRha2UgdGhlIGJhc2VcbiAgICBjb25zdCBiYXNlID0gZGVzZXJpYWxpemVFbGVtZW50QmFzZShub2RlKTtcblxuICAgIC8vIG5vdyB3ZSBnZXQgdG8gZ2V0IHRoZSBjdXN0b20gdHlwZVxuICAgIGxldCBjdXN0b21UeXBlOiBzdHJpbmcgPSBudWxsO1xuICAgIG5vZGUuY2xhc3NMaXN0LmZvckVhY2goKGMpID0+IHtcbiAgICAgIGlmIChjLnN0YXJ0c1dpdGgoQ1VTVE9NX0NMQVNTX1BSRUZJWCkpIHtcbiAgICAgICAgY3VzdG9tVHlwZSA9IGMuc3Vic3RyKENVU1RPTV9DTEFTU19QUkVGSVgubGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIG5vdyB3ZSBjYW4gYnVpbGQgdGhlIGN1c3RvbSBpdHNlbGZcbiAgICBjb25zdCBjdXN0b206IElDdXN0b20gPSB7XG4gICAgICAuLi5iYXNlLFxuICAgICAgdHlwZTogXCJjdXN0b21cIixcbiAgICAgIGN1c3RvbVR5cGUsXG4gICAgICBjaGlsZHJlbjogZGVzZXJpYWxpemVDaGlsZHJlbkZvck5vZGUobm9kZSkgYXMgYW55W10sXG4gICAgfVxuXG4gICAgaWYgKCFjdXN0b20uY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICBjdXN0b20uY2hpbGRyZW4gPSBbXG4gICAgICAgIFNUQU5EQVJEX1BBUkFHUkFQSCgpLFxuICAgICAgXTtcbiAgICB9O1xuXG4gICAgLy8gYW5kIHJldHVybiBpdFxuICAgIHJldHVybiBjdXN0b207XG4gIH1cblxuICAvKipcbiAgICogUmVhY3RpZmllcyB0aGUgY3VzdG9tIHRoYXQgaXMgYWxyZWFkeVxuICAgKiBpbnRvIGEgcmljaCBlbGVtZW50IGZvcm1cbiAgICogQHBhcmFtIGFyZyB0aGUgcmVhY3RpZmljYXRpb24gYXJnXG4gICAqL1xuICBmdW5jdGlvbiByZWFjdGlmeUN1c3RvbShhcmc6IElSZWFjdGlmeUFyZzxJQ3VzdG9tPikge1xuICAgIC8vIHdlIHJldHJ1biBmcm9tIHRoZSBiYXNlXG4gICAgcmV0dXJuIHJlYWN0aWZ5RWxlbWVudEJhc2UoXG4gICAgICAvLyB0aGUgcmVnaXN0cnlcbiAgICAgIHJlZ2lzdHJ5LFxuICAgICAgLy8gdGhlIGRpdiBlbGVtZW50XG4gICAgICBcImRpdlwiLFxuICAgICAgLy8gd2UgcGFzcyB0aGUgcHJlZml4ZWQgY3VzdG9tIHR5cGVcbiAgICAgIENVU1RPTV9DTEFTU19QUkVGSVggKyBhcmcuZWxlbWVudC5jdXN0b21UeXBlLFxuICAgICAgLy8gdGhlIGNoaWxkcmVuIHRvIGJlIHVzZWQgaW4gcmVhY3RpZmljYXRpb25cbiAgICAgIGFyZy5lbGVtZW50LmNoaWxkcmVuLFxuICAgICAgLy8gbm90aGluZyB0byB1c2UgdG8gd3JhcFxuICAgICAgbnVsbCxcbiAgICAgIC8vIHRoZSByZWFjdGlmaWNhdGlvbiBhcmd1bWVudFxuICAgICAgYXJnLFxuICAgICk7XG4gIH1cblxuICAvLyBhZGQgdG8gdGhlIHJlZ2lzdHJ5XG4gIHJlZ2lzdHJ5LlJFQUNUSUZZLmN1c3RvbSA9IHJlYWN0aWZ5Q3VzdG9tO1xuICByZWdpc3RyeS5TRVJJQUxJWkUuY3VzdG9tID0gc2VyaWFsaXplQ3VzdG9tO1xuICByZWdpc3RyeS5BTExPV1NfQ0hJTERSRU4uY3VzdG9tID0gcmVnaXN0cnkuQUxMT1dTX0NISUxEUkVOLmNvbnRhaW5lcjtcbiAgcmVnaXN0cnkuT05fRU1QVFlfRklMTF9XSVRILmN1c3RvbSA9IHJlZ2lzdHJ5Lk9OX0VNUFRZX0ZJTExfV0lUSC5jb250YWluZXI7XG4gIHJlZ2lzdHJ5Lk9OX0lOVkFMSURfVEVYVF9XUkFQX1dJVEguY3VzdG9tID0gcmVnaXN0cnkuT05fSU5WQUxJRF9URVhUX1dSQVBfV0lUSC5jb250YWluZXI7XG4gIHJlZ2lzdHJ5Lk9OX0lOVkFMSURfQ0hJTERSRU5fV1JBUF9XSVRILmN1c3RvbSA9IHJlZ2lzdHJ5Lk9OX0lOVkFMSURfQ0hJTERSRU5fV1JBUF9XSVRILmNvbnRhaW5lcjtcbiAgcmVnaXN0cnkuU1VQRVJCTE9DS1MuY3VzdG9tID0gdHJ1ZTtcblxuICByZWdpc3RyeS5ERVNFUklBTElaRS5ieUNsYXNzTmFtZVByZWZpeC5jdXN0b20gPSBkZXNlcmlhbGl6ZUN1c3RvbTtcbn1cblxuLyoqXG4gKiBUaGUgY3VzdG9tIHR5cGUgcmVwcmVzZW50cyBhIGN1c3RvbS0gZWxlbWVudFxuICovXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b20gZXh0ZW5kcyBJRWxlbWVudEJhc2Uge1xuICAvKipcbiAgICogVGhlIHR5cGUgYXMgY3VzdG9tXG4gICAqL1xuICB0eXBlOiBcImN1c3RvbVwiO1xuICAvKipcbiAgICogU3BlY2lmaWVzIHdoaWNoIGN1c3RvbSB0eXBlIGl0IGlzXG4gICAqL1xuICBjdXN0b21UeXBlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgY2hpbGRyZW5cbiAgICovXG4gIGNoaWxkcmVuOiBBcnJheTxJQ29udGFpbmVyIHwgSUN1c3RvbSB8IElGaWxlIHwgSVBhcmFncmFwaCB8IElMaXN0IHwgSVF1b3RlIHwgSVRhYmxlIHwgSVZpZGVvIHwgSVRpdGxlIHwgSUltYWdlPjtcbn0iLCAiLyoqXG4gKiBDb250YWlucyB0aGUgc2VyaWFsaXphdGlvbiwgcmVhY3RpZmljYXRpb24gYW5kIGRlc2VyaWFsaXphdGlvbiBmdW5jdGlvbnNcbiAqIGZvciB0aGUgZmlsZSBlbGVtZW50XG4gKiBcbiAqIEBtb2R1bGVcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBET01XaW5kb3cgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBJUmVhY3RpZnlBcmcsIElTZXJpYWxpemF0aW9uUmVnaXN0cnlUeXBlIH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBzZXJpYWxpemVFbGVtZW50QmFzZSwgZGVzZXJpYWxpemVFbGVtZW50QmFzZSwgSUVsZW1lbnRCYXNlLCByZWFjdGlmeUVsZW1lbnRCYXNlIH0gZnJvbSBcIi4uL2Jhc2VcIjtcbmltcG9ydCB7IElUZXh0LCBTVEFOREFSRF9URVhUX05PREUgfSBmcm9tIFwiLi90ZXh0XCI7XG5cbi8qKlxuICogVGhlIGZ1bmN0aW9uIHRoYXQgcmVnaXN0ZXJzIGFuZCBhZGRzIHRoZSBmaWxlIGluIHRoZSBnaXZlblxuICogcmVpZ3N0cnlcbiAqIEBwYXJhbSByZWdpc3RyeSB0aGUgcmVnaXN0cnkgdG8gbW9kaWZ5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckZpbGUocmVnaXN0cnk6IElTZXJpYWxpemF0aW9uUmVnaXN0cnlUeXBlKSB7XG5cbiAgLyoqXG4gICAqIFRoZSBmdW5jdGlvbiB0aGF0IHNlcmlhbGl6ZXMgdGhlIGZpbGUgaW50byBIVE1MXG4gICAqIEBwYXJhbSBmaWxlIHRoZSBmaWxlIGVsZW1lbnQgaW4gcXVlc3Rpb25cbiAgICogQHJldHVybnMgYW4gSFRNTCBFbGVtZW50XG4gICAqL1xuICBmdW5jdGlvbiBzZXJpYWxpemVGaWxlKGZpbGU6IElGaWxlKSB7XG4gICAgLy8gZmlyc3Qgd2UgdXNlIHRoZSBzZXJpYWxpemF0aW9uIGZ1bmN0aW9uIGluIG9yZGVyIHRvIGNyZWF0ZSB0aGUgYSB0aGF0IGNvbnRhaW5zXG4gICAgLy8gdGhlIGZpbGVcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gc2VyaWFsaXplRWxlbWVudEJhc2UocmVnaXN0cnksIGZpbGUsIFwiYVwiLCBcImZpbGVcIiwgbnVsbCwgbnVsbCk7XG4gICAgbWFpbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGZpbGUuc3JjKTtcbiAgICBtYWluQ29udGFpbmVyLmRhdGFzZXQuc3JjSWQgPSBmaWxlLnNyY0lkO1xuXG4gICAgLy8gYnV0IHdlIG5lZWQgdG8gYWRkIHRoZSBjb250YWluZXIgaW5zaWRlIHRoYXQgbWFpbiBjb250YWluZXJcbiAgICBjb25zdCBwYXJlbnRDb250YWluZXIgPSBET01XaW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcGFyZW50Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZmlsZS1jb250YWluZXJcIjtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmVudENvbnRhaW5lcik7XG5cbiAgICAvLyB0aGVuIGFub3RoZXIgZm9yIHRoZSBpY29uXG4gICAgY29uc3QgaWNvbiA9IERPTVdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBpY29uLmNsYXNzTmFtZSA9IFwiZmlsZS1pY29uXCI7XG4gICAgcGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgLy8gdGhlbiBmb3IgdGhlIGV4dGVuc2lvblxuICAgIGNvbnN0IGV4dGVuc2lvbiA9IERPTVdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBleHRlbnNpb24uY2xhc3NOYW1lID0gXCJmaWxlLWV4dGVuc2lvblwiO1xuICAgIGV4dGVuc2lvbi50ZXh0Q29udGVudCA9IGZpbGUuZXh0ZW5zaW9uO1xuICAgIGljb24uYXBwZW5kQ2hpbGQoZXh0ZW5zaW9uKTtcblxuICAgIC8vIGZpbGVuYW1lXG4gICAgY29uc3QgbmFtZSA9IERPTVdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBuYW1lLmNsYXNzTmFtZSA9IFwiZmlsZS1uYW1lXCI7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9IGZpbGUuZmlsZU5hbWU7XG4gICAgcGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgLy8gYW5kIGZpbGUgc2l6ZVxuICAgIGNvbnN0IHNpemUgPSBET01XaW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc2l6ZS5jbGFzc05hbWUgPSBcImZpbGUtc2l6ZVwiO1xuICAgIHNpemUudGV4dENvbnRlbnQgPSBmaWxlLnNpemU7XG4gICAgcGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHNpemUpO1xuXG4gICAgLy8gYW5kIHdlIGFyZSBkb25lXG4gICAgcmV0dXJuIG1haW5Db250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYSBIVE1MIGVsZW1lbnQgdGhhdCBpcyBhbHJlYWR5IGNvbnNpZGVyZWQgYSBmaWxlIGVsZW1lbnRcbiAgICogaW50byB0aGUgSUZpbGUgZm9ybVxuICAgKiBAcGFyYW0gbm9kZSB0aGUgbm9kZSBpbiBxdWVzdGlvblxuICAgKiBAcmV0dXJucyBhIGZpbGUgZWxlbWVudCBzdHJ1Y3R1cmVcbiAgICovXG4gIGZ1bmN0aW9uIGRlc2VyaWFsaXplRmlsZShub2RlOiBIVE1MRGl2RWxlbWVudCk6IElGaWxlIHtcbiAgICAvLyBmaXJzdCB3ZSBuZWVkIHRvIGdyYWIgdGhlIGluZm9ybWF0aW9uIHRoYXQgaXMgaW5zaWRlXG4gICAgLy8gdGhlIGZpbGUgZWxlbWVudFxuICAgIGNvbnN0IGZpbGVOYW1lTm9kZSA9IG5vZGUucXVlcnlTZWxlY3RvcihcIi5maWxlLW5hbWVcIik7XG4gICAgY29uc3QgZmlsZUV4dGVuc2lvbk5vZGUgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXCIuZmlsZS1leHRlbnNpb25cIik7XG4gICAgY29uc3QgZmlsZVNpemVOb2RlID0gbm9kZS5xdWVyeVNlbGVjdG9yKFwiLmZpbGUtc2l6ZVwiKTtcblxuICAgIC8vIGl0IHNob3VsZCBiZSBhcHByb3BpYXRlXG4gICAgaWYgKCFmaWxlTmFtZU5vZGUgfHwgIWZpbGVFeHRlbnNpb25Ob2RlIHx8ICFmaWxlU2l6ZU5vZGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIG5vdyB3ZSBnZXQgdGhlIGJhc2VcbiAgICBjb25zdCBiYXNlID0gZGVzZXJpYWxpemVFbGVtZW50QmFzZShub2RlKTtcblxuICAgIC8vIGFuZCByZXR1cm4gdGhlIGdpdmVuIGZpbGUgZWxlbWVudFxuICAgIHJldHVybiB7XG4gICAgICAuLi5iYXNlLFxuICAgICAgdHlwZTogXCJmaWxlXCIsXG4gICAgICBzcmNJZDogbm9kZS5kYXRhc2V0LnNyY0lkLFxuICAgICAgZmlsZU5hbWU6IGZpbGVOYW1lTm9kZS50ZXh0Q29udGVudCxcbiAgICAgIGV4dGVuc2lvbjogZmlsZUV4dGVuc2lvbk5vZGUudGV4dENvbnRlbnQsXG4gICAgICBzaXplOiBmaWxlU2l6ZU5vZGUudGV4dENvbnRlbnQsXG4gICAgICBzcmM6IG5vZGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxcbiAgICAgIGNoaWxkcmVuOiBbU1RBTkRBUkRfVEVYVF9OT0RFKCldLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmVhY3RpZmllcyB0aGUgZmlsZSB0aGF0IGlzIGFscmVhZHlcbiAgICogaW50byBhIHJpY2ggZWxlbWVudCBmb3JtXG4gICAqIEBwYXJhbSBhcmcgdGhlIHJlYWN0aWZpY2F0aW9uIGFyZ1xuICAgKi9cbiAgZnVuY3Rpb24gcmVhY3RpZnlGaWxlKGFyZzogSVJlYWN0aWZ5QXJnPElGaWxlPikge1xuICAgIC8vIGZpcnN0IHdlIHByZXBhcmUgdGhlIGN1c3RvbSBwcm9wc1xuICAgIGNvbnN0IG5ld0N1c3RvbVByb3BzID0ge1xuICAgICAgLi4uYXJnLmN1c3RvbVByb3BzLFxuICAgIH07XG5cbiAgICAvLyBpZiBpdCdzIGFjdGl2ZSB0aGVuIHdlIGNhbiBkbyB0aGlzXG4gICAgaWYgKGFyZy5hY3RpdmUpIHtcbiAgICAgIChuZXdDdXN0b21Qcm9wcyBhcyBhbnkpLmhyZWYgPSBhcmcuZWxlbWVudC5zcmM7XG4gICAgfVxuXG4gICAgLy8gbm93IHdlIGNhbiBkbyB0aGUgY2FsbCBmb3IgdGhlIGJhc2ljIHJlYWN0aWZpY2F0aW9uXG4gICAgcmV0dXJuIHJlYWN0aWZ5RWxlbWVudEJhc2UoXG4gICAgICByZWdpc3RyeSxcbiAgICAgIFwiYVwiLFxuICAgICAgXCJmaWxlXCIsXG4gICAgICBudWxsLFxuICAgICAgKGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmlsZS1pY29uXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbGUtZXh0ZW5zaW9uXCIgc3BlbGxDaGVjaz17ZmFsc2V9PnthcmcuZWxlbWVudC5leHRlbnNpb259PC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmlsZS1uYW1lXCIgc3BlbGxDaGVjaz17ZmFsc2V9PnthcmcuZWxlbWVudC5maWxlTmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWxlLXNpemVcIiBzcGVsbENoZWNrPXtmYWxzZX0+e2FyZy5lbGVtZW50LnNpemV9PC9zcGFuPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC4uLmFyZyxcbiAgICAgICAgY3VzdG9tUHJvcHM6IG5ld0N1c3RvbVByb3BzLFxuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgLy8gbm93IHdlIGNhbiBkbyB0aGUgcmVnaXN0cmF0aW9uIGluIHRoZSBwYXNzZWQgcmVnaXN0cnlcbiAgcmVnaXN0cnkuUkVBQ1RJRlkuZmlsZSA9IHJlYWN0aWZ5RmlsZTtcbiAgcmVnaXN0cnkuU0VSSUFMSVpFLmZpbGUgPSBzZXJpYWxpemVGaWxlO1xuICByZWdpc3RyeS5BTExPV1NfQ0hJTERSRU4uZmlsZSA9IFtdO1xuICByZWdpc3RyeS5JTkxJTkVTLmZpbGUgPSB0cnVlO1xuICByZWdpc3RyeS5WT0lEUy5maWxlID0gdHJ1ZTtcblxuICByZWdpc3RyeS5ERVNFUklBTElaRS5ieUNsYXNzTmFtZS5maWxlID0gZGVzZXJpYWxpemVGaWxlO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBmaWxlIHR5cGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRmlsZSBleHRlbmRzIElFbGVtZW50QmFzZSB7XG4gIC8qKlxuICAgKiBUaGUgdHlwZVxuICAgKi9cbiAgdHlwZTogXCJmaWxlXCI7XG4gIC8qKlxuICAgKiBmaWxlIG5hbWVcbiAgICovXG4gIGZpbGVOYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBmaWxlIHNpemVcbiAgICovXG4gIHNpemU6IHN0cmluZztcbiAgLyoqXG4gICAqIGZpbGUgZXh0ZW5zaW9uXG4gICAqL1xuICBleHRlbnNpb246IHN0cmluZztcbiAgLyoqXG4gICAqIHVybCBvZiB0aGUgZmlsZVxuICAgKi9cbiAgc3JjOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBzcmMgaWQgb2YgdGhlIGZpbGVcbiAgICogZGF0YS1zcmMtaWRcbiAgICovXG4gIHNyY0lkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgY2hpbGRyZW4gb2YgdGhlIGltYWdlIGlzIGEgdGV4dCBub2RlXG4gICAqIGFzIGRlZmluZWQgYnkgdGhlIHNwZWNpZmljYXRpb25zIG9mIHNsYXRlXG4gICAqIGV2ZW4gd2hlbiBub3RoaW5nIGlzIHdyaXRhYmxlIHRoZXJlXG4gICAqL1xuICBjaGlsZHJlbjogW1xuICAgIElUZXh0LFxuICBdO1xufVxuIiwgIi8qKlxuICogQ29udGFpbnMgdGhlIHNlcmlhbGl6YXRpb24sIHJlYWN0aWZpY2F0aW9uIGFuZCBkZXNlcmlhbGl6YXRpb24gZnVuY3Rpb25zXG4gKiBmb3IgdGhlIGltYWdlIGVsZW1lbnRcbiAqIFxuICogQG1vZHVsZVxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERPTVdpbmRvdyB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IElSZWFjdGlmeUFyZywgSVNlcmlhbGl6YXRpb25SZWdpc3RyeVR5cGUgfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IHNlcmlhbGl6ZUVsZW1lbnRCYXNlLCBkZXNlcmlhbGl6ZUVsZW1lbnRCYXNlLCBJRWxlbWVudEJhc2UsIElBdHRycywgcmVhY3RpZnlFbGVtZW50QmFzZSB9IGZyb20gXCIuLi9iYXNlXCI7XG5pbXBvcnQgeyBJVGV4dCwgU1RBTkRBUkRfVEVYVF9OT0RFIH0gZnJvbSBcIi4vdGV4dFwiO1xuXG4vKipcbiAqIFRoZSBmdW5jdGlvbiB0aGF0IHJlZ2lzdGVycyBhbmQgYWRkcyB0aGUgaW1hZ2UgaW4gdGhlIGdpdmVuXG4gKiByZWdpc3RyeVxuICogQHBhcmFtIHJlZ2lzdHJ5IHRoZSByZWdpc3RyeSB0byBtb2RpZnlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVySW1hZ2UocmVnaXN0cnk6IElTZXJpYWxpemF0aW9uUmVnaXN0cnlUeXBlKSB7XG5cbiAgLyoqXG4gICAqIFRoZSBmdW5jdGlvbiB0aGF0IHNlcmlhbGl6ZXMgdGhlIGltYWdlIGludG8gSFRNTFxuICAgKiBAcGFyYW0gaW1nIHRoZSBpbWFnZSBlbGVtZW50XG4gICAqIEByZXR1cm5zIGFuIEhUTUwgbm9kZVxuICAgKi9cbiAgZnVuY3Rpb24gc2VyaWFsaXplSW1hZ2UoaW1nOiBJSW1hZ2UpIHtcbiAgICAvLyBmaXJzdCB3ZSBuZWVkIHRvIGJ1aWxkIHRoZSBzcGVjaWFsXG4gICAgLy8gYXR0cmlidXRlcyBpdCBzaG91bGQgcGFzcyB0b1xuICAgIGNvbnN0IGF0dHJzOiBJQXR0cnMgPSB7fTtcblxuICAgIC8vIHRoZXNlIHBhc3MgaW4gdGhlIGRhdGEgc3JjIGluZm9ybWF0aW9uXG4gICAgaWYgKGltZy53aWR0aCkge1xuICAgICAgYXR0cnNbXCJkYXRhLXNyYy13aWR0aFwiXSA9IGltZy53aWR0aC50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAoaW1nLmhlaWdodCkge1xuICAgICAgYXR0cnNbXCJkYXRhLXNyYy1oZWlnaHRcIl0gPSBpbWcuaGVpZ2h0LnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmIChpbWcuc3JjSWQpIHtcbiAgICAgIGF0dHJzW1wiZGF0YS1zcmMtaWRcIl0gPSBpbWcuc3JjSWQ7XG4gICAgfVxuXG4gICAgLy8gdGhlc2UgaXMgZm9yIHRoZSBhbHRcbiAgICBpZiAoaW1nLmFsdCkge1xuICAgICAgYXR0cnMuYWx0ID0gaW1nLmFsdDtcbiAgICB9XG5cbiAgICAvLyBzb3VyY2UsIHNvdXJjZXNldCBhbmQgc2l6ZXNcbiAgICBpZiAoaW1nLnNyYykge1xuICAgICAgYXR0cnMuc3JjID0gaW1nLnNyYztcbiAgICB9XG4gICAgaWYgKGltZy5zcmNTZXQpIHtcbiAgICAgIGF0dHJzLnNyY3NldCA9IGltZy5zcmNTZXQ7XG4gICAgfVxuICAgIGlmIChpbWcuc2l6ZXMpIHtcbiAgICAgIGF0dHJzLnNpemVzID0gaW1nLnNpemVzO1xuICAgIH1cblxuICAgIC8vIGZvciBhIHN0YW5kYWxvbmUgaW1hZ2UsIHdlIHBhc3MgaXQgcmlnaHRcbiAgICAvLyBhcyBhbiBpbWFnZSBlbGVtZW50XG4gICAgaWYgKGltZy5zdGFuZGFsb25lKSB7XG4gICAgICAvLyBzbyB3ZSByZW5kZXIgZGlyZWN0bHkgaW50byBhbiBpbWFnZSB3aXRoXG4gICAgICAvLyB0aGUgZ2l2ZW4gYXR0cmlidXRlc1xuICAgICAgY29uc3Qgc3RhbmRhbG9uZUltYWdlID0gc2VyaWFsaXplRWxlbWVudEJhc2UoXG4gICAgICAgIHJlZ2lzdHJ5LFxuICAgICAgICBpbWcsXG4gICAgICAgIFwiaW1nXCIsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGF0dHJzLFxuICAgICAgICBudWxsLFxuICAgICAgKTtcbiAgICAgIHJldHVybiBzdGFuZGFsb25lSW1hZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG90aGVyd2lzZSB3ZSBjcmVhdGUgdGhlIGEgY29tcG9uZW50IHRoYXQgd2lsbFxuICAgICAgLy8gYWN0IGFzIGEgY29udGFpbmVyLCBub3RlIGhvdyB3ZSBkb24ndCBwYXNzXG4gICAgICAvLyB0aGUgYXR0cmlidXRlcyB0byB0aGlzIG9uZVxuICAgICAgY29uc3QgaW1hZ2VDb21wb25lbnQgPSBzZXJpYWxpemVFbGVtZW50QmFzZShcbiAgICAgICAgcmVnaXN0cnksXG4gICAgICAgIGltZyxcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIFwiaW1hZ2VcIixcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbnVsbCxcbiAgICAgICkgYXMgSFRNTEFuY2hvckVsZW1lbnQ7XG5cbiAgICAgIC8vIG5vdyB3ZSBjcmVhdGUgdGhlIGNvbnRhaW5lclxuICAgICAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBET01XaW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGltYWdlQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiaW1hZ2UtY29udGFpbmVyXCI7XG4gICAgICBpbWFnZUNvbXBvbmVudC5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcik7XG5cbiAgICAgIC8vIHRoZSBwYWRcbiAgICAgIGNvbnN0IGltYWdlUGFkID0gRE9NV2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpbWFnZVBhZC5jbGFzc05hbWUgPSBcImltYWdlLXBhZFwiO1xuXG4gICAgICAvLyB3aWR0aCwgaGVpZ2h0LCByYXRpbyBhbmQgcGVyY2VudGFnZSBhbmQgc28gb25cbiAgICAgIC8vIGluIG9yZGVyIHRvIGNhbGN1bGF0ZSB0aGUgcGFkZGluZyBmb3IgdGhlIGltYWdlIHBhZFxuICAgICAgY29uc3Qgd2lkdGggPSBpbWcud2lkdGg7XG4gICAgICBjb25zdCBoZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgY29uc3QgcmF0aW8gPSBoZWlnaHQgLyB3aWR0aDtcbiAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSByYXRpbyAqIDEwMDtcbiAgICAgIGNvbnN0IHBhZFN0eWxlID0gXCJwYWRkaW5nLWJvdHRvbTpcIiArIHBlcmNlbnRhZ2UgKyBcIiVcIjtcblxuICAgICAgLy8gbm93IHRoZSBzdHlsZXMgZm9yIHRoZSBwYWRkXG4gICAgICBpbWFnZVBhZC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBwYWRTdHlsZSk7XG4gICAgICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZVBhZCk7XG5cbiAgICAgIC8vIG5vdyB3ZSBjYW4gYnVpbGQgdGhlIHN0YW5kYWxvbmUgaW1hZ2UsIHdlIHBhc3NcbiAgICAgIC8vIG5vdGhpbmcgYXMgdGhlIGJhc2UgaW4gb3JkZXIgdG8gY2hlYXQgYW5kIGNvbnNpZGVyXG4gICAgICAvLyB0aGF0IHRoZXJlIGFyZSBubyBzcGVjaWFsIGF0dHJpYnV0ZXNcbiAgICAgIGNvbnN0IHN0YW5kYWxvbmVJbWFnZSA9IHNlcmlhbGl6ZUVsZW1lbnRCYXNlKFxuICAgICAgICByZWdpc3RyeSxcbiAgICAgICAge30sXG4gICAgICAgIFwiaW1nXCIsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGF0dHJzLFxuICAgICAgICBudWxsLFxuICAgICAgKTtcblxuICAgICAgLy8gYW5kIHdlIHBhZGQgaXRcbiAgICAgIGltYWdlUGFkLmFwcGVuZENoaWxkKHN0YW5kYWxvbmVJbWFnZSk7XG5cbiAgICAgIC8vIGFkZCB0aGUgc3JjIHRvIHRoZSBpbWFnZSBzbyB0aGF0IFNFTyB3b3Jrc1xuICAgICAgLy8gd2VsbCB3aXRoIGl0XG4gICAgICBpZiAoKHN0YW5kYWxvbmVJbWFnZSBhcyBIVE1MSW1hZ2VFbGVtZW50KS5zcmMpIHtcbiAgICAgICAgaW1hZ2VDb21wb25lbnQuaHJlZiA9IChzdGFuZGFsb25lSW1hZ2UgYXMgSFRNTEltYWdlRWxlbWVudCkuc3JjO1xuICAgICAgfVxuXG4gICAgICAvLyByZXR1cm4gaXRcbiAgICAgIHJldHVybiBpbWFnZUNvbXBvbmVudDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYSBIVE1MIGVsZW1lbnQgdGhhdCBpcyBhbHJlYWR5IGNvbnNpZGVyZWQgYW4gaW1hZ2VcbiAgICogZWxlbWVudCBpbnRvIHRoZSBnaXZlbiByaWNoIGVsZW1lbnQgZm9ybVxuICAgKiBAcGFyYW0gbm9kZSB0aGUgbm9kZSBpbiBxdWVzdGlvblxuICAgKiBAcmV0dXJucyBhbiBpbWFnZSBlbGVtZW50IHN0cnVjdHVyZVxuICAgKi9cbiAgZnVuY3Rpb24gZGVzZXJpYWxpemVJbWFnZShub2RlOiBIVE1MRGl2RWxlbWVudCB8IEhUTUxJbWFnZUVsZW1lbnQpOiBJSW1hZ2Uge1xuXG4gICAgLy8gZmlyc3Qgd2UgbmVlZCB0byBjaGVjayBldmVyeXRoaW5nIGlzIGZpbmVcbiAgICBjb25zdCBpbWcgPSBub2RlLnRhZ05hbWUgPT09IFwiSU1HXCIgPyBub2RlIDogbm9kZS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgaWYgKCFpbWcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIG5vdyB3ZSBnZXQgdGhlIGJhc2Ugb2YgdGhlIGdpdmVuIG5vZGVcbiAgICBjb25zdCBiYXNlID0gZGVzZXJpYWxpemVFbGVtZW50QmFzZShub2RlKTtcblxuICAgIC8vIGFuZCBleHRyYWN0IHRoZSBpbmZvIGFjY29yZGluZyB0byB0aGUgc3BlY3NcbiAgICAvLyB0aGUgc3BlYyBzYXlzIHNyY3NldCBzaXplcyBhbmQgc3JjIHdpbGwgYmUgc3RyaXBwZWQgYnV0IGNhbiBiZSBhdmFpbGFibGVcbiAgICByZXR1cm4ge1xuICAgICAgLi4uYmFzZSxcbiAgICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICAgIGFsdDogaW1nLmdldEF0dHJpYnV0ZShcImFsdFwiKSB8fCBudWxsLFxuICAgICAgc3JjOiBpbWcuZ2V0QXR0cmlidXRlKFwic3JjXCIpLFxuICAgICAgc3JjSWQ6IGltZy5kYXRhc2V0LnNyY0lkLFxuICAgICAgc3JjU2V0OiBpbWcuZ2V0QXR0cmlidXRlKFwic3Jjc2V0XCIpIHx8IG51bGwsXG4gICAgICBzaXplczogaW1nLmdldEF0dHJpYnV0ZShcInNpemVzXCIpIHx8IG51bGwsXG4gICAgICB3aWR0aDogcGFyc2VJbnQoaW1nLmRhdGFzZXQuc3JjV2lkdGgpIHx8IG51bGwsXG4gICAgICBoZWlnaHQ6IHBhcnNlSW50KGltZy5kYXRhc2V0LnNyY0hlaWdodCkgfHwgbnVsbCxcbiAgICAgIHN0YW5kYWxvbmU6IG5vZGUudGFnTmFtZSA9PT0gXCJJTUdcIixcbiAgICAgIGNoaWxkcmVuOiBbU1RBTkRBUkRfVEVYVF9OT0RFKCldXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFjdGlmaWVzIHRoZSBpbWFnZSB0aGF0IGlzIGFscmVhZHlcbiAgICogaW50byBhIHJpY2ggZWxlbWVudCBmb3JtXG4gICAqIEBwYXJhbSBhcmcgdGhlIHJlYWN0aWZpY2F0aW9uIGFyZ1xuICAgKi9cbiAgZnVuY3Rpb24gcmVhY3RpZnlJbWFnZShhcmc6IElSZWFjdGlmeUFyZzxJSW1hZ2U+KSB7XG4gICAgLy8gcHJlcGFyZSB0aGUgY3VzdG9tIHByb3BzXG4gICAgY29uc3QgbmV3Q3VzdG9tUHJvcHMgPSB7XG4gICAgICAuLi5hcmcuY3VzdG9tUHJvcHMsXG4gICAgfTtcblxuICAgIC8vIGlmIHdlIGFyZSB0YWxraW5nIGFib3V0XG4gICAgLy8gYSBzdGFuZGFsb25lIGltYWdlXG4gICAgaWYgKGFyZy5lbGVtZW50LnN0YW5kYWxvbmUpIHtcbiAgICAgIC8vIG5vdyB3ZSBuZWVkIHRvIGNoZWNrIGZvciB0aGUgcHJlY2Vuc2VcbiAgICAgIC8vIG9mIGNoaWxkcmVuLCBiZWNhdXNlIGltZyBjYW5ub3QgcmVhbGx5XG4gICAgICAvLyBoYXZlIGNoaWxkcmVuIGFzIGl0IGlzLCB0aGlzIGNhbiBoYXBwZW4gd2hlblxuICAgICAgLy8gYW4gZWRpdG9yIHN1Y2ggYXMgc2xhdGUgd2FudHMgdG8gYWRkIGNoaWxkcmVuXG4gICAgICAvLyBldmVuIHRvIGFuIHN0YW5kYWxvbmUgaW1hZ2UgaW4gb3JkZXIgdG8gbWFrZVxuICAgICAgLy8gaXQgc2VsZWN0YWJsZVxuICAgICAgaWYgKG5ld0N1c3RvbVByb3BzLmNoaWxkcmVuKSB7XG4gICAgICAgIC8vIGZvciB0aGF0IHdlIGRlbGV0ZSBzdWNoIGNoaWxkcmVuXG4gICAgICAgIC8vIGZyb20gdGhlIG5ldyBwcm9wZXJ0eVxuICAgICAgICBkZWxldGUgbmV3Q3VzdG9tUHJvcHMuY2hpbGRyZW47XG5cbiAgICAgICAgaWYgKG5ld0N1c3RvbVByb3BzLnN0eWxlICYmICFuZXdDdXN0b21Qcm9wcy5zdHlsZS5kaXNwbGF5KSB7XG4gICAgICAgICAgbmV3Q3VzdG9tUHJvcHMuc3R5bGUuZGlzcGxheSA9IFwiY29udGVudHNcIjtcbiAgICAgICAgfSBlbHNlIGlmICghbmV3Q3VzdG9tUHJvcHMuc3R5bGUpIHtcbiAgICAgICAgICBuZXdDdXN0b21Qcm9wcy5zdHlsZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiY29udGVudHNcIixcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYW5kIGluc3RlYWQgd3JhcCBldmVyeXRoaW5nIGludG8gYSBkaXZcbiAgICAgICAgLy8gdGhhdCB3aWxsIHRha2UgdGhlc2UgY3VzdG9tIHByb3BlcnRpZXNcbiAgICAgICAgLy8gYW5kIHB1dCB0aGUgY2hpbGRyZW4gYXQgdGhlIGJvdHRvbVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgey4uLihuZXdDdXN0b21Qcm9wcyBhcyBhbnkpfT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVhY3RpZnlFbGVtZW50QmFzZShcbiAgICAgICAgICAgICAgICByZWdpc3RyeSxcbiAgICAgICAgICAgICAgICBcImltZ1wiLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIC4uLmFyZyxcbiAgICAgICAgICAgICAgICAgIGN1c3RvbVByb3BzOiAoe1xuICAgICAgICAgICAgICAgICAgICBhbHQ6IGFyZy5lbGVtZW50LmFsdCxcbiAgICAgICAgICAgICAgICAgICAgc2l6ZXM6IGFyZy5lbGVtZW50LnNpemVzLFxuICAgICAgICAgICAgICAgICAgICBzcmM6IGFyZy5lbGVtZW50LnNyYyxcbiAgICAgICAgICAgICAgICAgICAgc3JjU2V0OiBhcmcuZWxlbWVudC5zcmNTZXQsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IFwibGF6eVwiLFxuICAgICAgICAgICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge2FyZy5jdXN0b21Qcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gc28gYmVpbmcgc3RhbmRhbG9uZSB3aXRob3V0IGNoaWxkcmVuXG4gICAgICAvLyB3ZSBjYW4gZGVjaWRlIHRvIGFkZCB0aGVzZSBwcm9wZXJ0aWVzXG4gICAgICAvLyBpbnRvIHRoZSBwcm9wZXJ0eSBsaXN0IGZvciBjdXN0b21cbiAgICAgIChuZXdDdXN0b21Qcm9wcyBhcyBhbnkpLmFsdCA9IGFyZy5lbGVtZW50LmFsdDtcbiAgICAgIChuZXdDdXN0b21Qcm9wcyBhcyBhbnkpLnNpemVzID0gYXJnLmVsZW1lbnQuc2l6ZXM7XG4gICAgICAobmV3Q3VzdG9tUHJvcHMgYXMgYW55KS5zcmMgPSBhcmcuZWxlbWVudC5zcmM7XG4gICAgICAobmV3Q3VzdG9tUHJvcHMgYXMgYW55KS5zcmNTZXQgPSBhcmcuZWxlbWVudC5zcmNTZXQ7XG5cbiAgICAgIHJldHVybiByZWFjdGlmeUVsZW1lbnRCYXNlKFxuICAgICAgICByZWdpc3RyeSxcbiAgICAgICAgXCJpbWdcIixcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAge1xuICAgICAgICAgIC4uLmFyZyxcbiAgICAgICAgICBjdXN0b21Qcm9wczogbmV3Q3VzdG9tUHJvcHMsXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gbm93IGhlcmUgYmFjayB0byB0aGUgbm9uLXN0YW5kYWxvbmVcbiAgICAvLyBpZiB3ZSBhcmUgbm90IGFjdGl2ZVxuICAgIGlmIChhcmcuYWN0aXZlKSB7XG4gICAgICAvLyB3ZSBhZGQgdGhlIGhyZWYgdG8gdGhlIGdpdmVuIGltYWdlXG4gICAgICAobmV3Q3VzdG9tUHJvcHMgYXMgYW55KS5ocmVmID0gYXJnLmVsZW1lbnQuc3JjO1xuICAgIH1cblxuICAgIC8vIG5vdyB3ZSBjYW4gc2V0dXAgdGhlIHBhZGRpbmcgaW4gdGhlXG4gICAgLy8gaW1hZ2UtcGFkXG4gICAgY29uc3Qgd2lkdGggPSBhcmcuZWxlbWVudC53aWR0aDtcbiAgICBjb25zdCBoZWlnaHQgPSBhcmcuZWxlbWVudC5oZWlnaHQ7XG4gICAgY29uc3QgcmF0aW8gPSBoZWlnaHQgLyB3aWR0aDtcbiAgICBjb25zdCBwZXJjZW50YWdlID0gcmF0aW8gKiAxMDA7XG4gICAgY29uc3QgcGFkUGVyY2VudGFnZSA9IHBlcmNlbnRhZ2UgKyBcIiVcIjtcblxuICAgIC8vIG5vdyBoZXJlIHdlIGNhbiB1c2UgdGhlIHdyYXAgY2hpbGRyZW5cbiAgICAvLyBpbiBvcmRlciB0byB3cmFwIHRoZSBwYXNzZWQgY2hpbGRyZW5cbiAgICAvLyBpbnRvIHRoZWlyIG93biBnaXZlbiBhcmVhIHdoZXJlIHRoZXlcbiAgICAvLyBzaG91bGQgYmVcbiAgICByZXR1cm4gcmVhY3RpZnlFbGVtZW50QmFzZShcbiAgICAgIHJlZ2lzdHJ5LFxuICAgICAgXCJhXCIsXG4gICAgICBcImltYWdlXCIsXG4gICAgICBudWxsLFxuICAgICAgKGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1wYWRcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiBwYWRQZXJjZW50YWdlIH19PlxuICAgICAgICAgICAgICA8aW1nIGFsdD17YXJnLmVsZW1lbnQuYWx0fSBzaXplcz17YXJnLmVsZW1lbnQuc2l6ZXN9IHNyYz17YXJnLmVsZW1lbnQuc3JjfSBzcmNTZXQ9e2FyZy5lbGVtZW50LnNyY1NldH0gbG9hZGluZz1cImxhenlcIiAvPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC4uLmFyZyxcbiAgICAgICAgY3VzdG9tUHJvcHM6IG5ld0N1c3RvbVByb3BzXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHJlZ2lzdHJ5LlJFQUNUSUZZLmltYWdlID0gcmVhY3RpZnlJbWFnZTtcbiAgcmVnaXN0cnkuU0VSSUFMSVpFLmltYWdlID0gc2VyaWFsaXplSW1hZ2U7XG4gIHJlZ2lzdHJ5LkFMTE9XU19DSElMRFJFTi5pbWFnZSA9IFtdO1xuICByZWdpc3RyeS5WT0lEUy5pbWFnZSA9IHRydWU7XG4gIHJlZ2lzdHJ5LkJMT0NLUy5pbWFnZSA9IHRydWU7XG4gIHJlZ2lzdHJ5LkRFU0VSSUFMSVpFLmJ5Q2xhc3NOYW1lLmltYWdlID0gZGVzZXJpYWxpemVJbWFnZTtcbiAgcmVnaXN0cnkuREVTRVJJQUxJWkUuYnlUYWcuSU1HID0gZGVzZXJpYWxpemVJbWFnZTtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBiYXNpYyBpbWFnZSBlbGVtZW50XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUltYWdlIGV4dGVuZHMgSUVsZW1lbnRCYXNlIHtcbiAgLyoqXG4gICAqIEltYWdlIHR5cGVcbiAgICovXG4gIHR5cGU6IFwiaW1hZ2VcIjtcbiAgLyoqXG4gICAqIFdpZHRoIG9mIHRoZSBpbWFnZSBpbiBwaXhlbHNcbiAgICogZGF0YS1zcmMtd2lkdGhcbiAgICovXG4gIHdpZHRoOiBudW1iZXI7XG4gIC8qKlxuICAgKiBIZWlnaHQgb2YgdGhlIGltYWdlIGluIHBpeGVsc1xuICAgKiBkYXRhLXNyYy1oZWlnaHRcbiAgICovXG4gIGhlaWdodDogbnVtYmVyO1xuICAvKipcbiAgICogdXJsIG9mIHRoZSBpbWFnZVxuICAgKiBzcmMgdGhpcyBpcyBhIHByb3BlcnR5IHRoYXQgaXMgcmVtb3ZlZFxuICAgKi9cbiAgc3JjOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBzcmNzZXQgb2YgdGhlIGltYWdlXG4gICAqIHNyY3NldCBpcyBhIHByb3BlcnR5IHRoYXQgaXMgcmVtb3ZlZFxuICAgKi9cbiAgc3JjU2V0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBzaXplcyBvZiB0aGUgaW1hZ2VcbiAgICovXG4gIHNpemVzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBzcmMgaWQgb2YgdGhlIGltYWdlXG4gICAqIGRhdGEtc3JjLWlkXG4gICAqL1xuICBzcmNJZDogc3RyaW5nO1xuICAvKipcbiAgICogQWx0ZXJuYXRpdmUgdGV4dCBvZiB0aGUgaW1hZ2VcbiAgICovXG4gIGFsdDogc3RyaW5nO1xuICAvKipcbiAgICogd2hldGhlciB0aGUgaW1hZ2Ugc2hvdWxkIGJlIGEgc3RhbmRhbG9uZSBpbWFnZSBvciBiZSBhIGZ1bGxcbiAgICogdGV4dC1zcGVjcyBjb21wbGlhbnQgaW1hZ2VcbiAgICovXG4gIHN0YW5kYWxvbmU6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBUaGUgY2hpbGRyZW4gb2YgdGhlIGltYWdlIGlzIGEgdGV4dCBub2RlXG4gICAqIGFzIGRlZmluZWQgYnkgdGhlIHNwZWNpZmljYXRpb25zIG9mIHNsYXRlXG4gICAqIGV2ZW4gd2hlbiBub3RoaW5nIGlzIHdyaXRhYmxlIHRoZXJlXG4gICAqL1xuICBjaGlsZHJlbjogW1xuICAgIElUZXh0LFxuICBdO1xufVxuIiwgIi8qKlxuICogQ29udGFpbnMgdGhlIHNlcmlhbGl6YXRpb24sIHJlYWN0aWZpY2F0aW9uIGFuZCBkZXNlcmlhbGl6YXRpb24gZnVuY3Rpb25zXG4gKiBmb3IgdGhlIGxpbmsgZWxlbWVudFxuICogXG4gKiBAbW9kdWxlXG4gKi9cblxuaW1wb3J0IHsgZGVzZXJpYWxpemVDaGlsZHJlbkZvck5vZGUsIElSZWFjdGlmeUFyZywgSVNlcmlhbGl6YXRpb25SZWdpc3RyeVR5cGUgfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IElBdHRycywgc2VyaWFsaXplRWxlbWVudEJhc2UsIGRlc2VyaWFsaXplRWxlbWVudEJhc2UsIElFbGVtZW50QmFzZSwgcmVhY3RpZnlFbGVtZW50QmFzZSB9IGZyb20gXCIuLi9iYXNlXCI7XG5pbXBvcnQgeyBOb25Sb290SW5oZXJpdGFibGUgfSBmcm9tIFwiLi4vdGVtcGxhdGUtYXJnc1wiO1xuaW1wb3J0IHsgSVRleHQsIFNUQU5EQVJEX1RFWFRfTk9ERSB9IGZyb20gXCIuL3RleHRcIjtcblxuLyoqXG4gKiBUaGUgZnVuY3Rpb24gdGhhdCByZWdpc3RlcnMgYW5kIGFkZHMgdGhlIGxpbmsgZWxlbWVudCBpbiB0aGUgZ2l2ZW5cbiAqIHJlZ2lzdHJ5XG4gKiBAcGFyYW0gcmVnaXN0cnkgdGhlIHJlZ2lzdHJ5IHRvIG1vZGlmeVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJMaW5rKHJlZ2lzdHJ5OiBJU2VyaWFsaXphdGlvblJlZ2lzdHJ5VHlwZSkge1xuXG4gIC8qKlxuICAgKiBUaGUgZnVuY3Rpb24gdGhhdCBzZXJpYWxpemVzIHRoZSBsaW5rIGVsZW1lbnQgaW50byBIVE1MXG4gICAqIEBwYXJhbSBsaW5rIHRoZSBsaW5rIGVsZW1lbnRcbiAgICogQHJldHVybnMgYW4gSFRNTCBub2RlXG4gICAqL1xuICBmdW5jdGlvbiBzZXJpYWxpemVMaW5rKGxpbms6IElMaW5rKSB7XG4gICAgLy8gZmlyc3Qgd2UgYnVpbGQgdGhlIGF0dHJpYnV0ZXNcbiAgICAvLyB3ZSBuZWVkIHRvIHNldCBpbnRvIHRoZSBodG1sIGVsZW1lbnRcbiAgICBjb25zdCBhdHRyczogSUF0dHJzID0ge307XG4gICAgaWYgKGxpbmsudGhyZWYpIHtcbiAgICAgIGF0dHJzW1wiZGF0YS1ocmVmXCJdID0gbGluay50aHJlZjtcbiAgICB9IGVsc2UgaWYgKGxpbmsuaHJlZikge1xuICAgICAgYXR0cnMuaHJlZiA9IGxpbmsuaHJlZjtcbiAgICB9XG4gIFxuICAgIC8vIGFuZCBjYWxsIHRoZSBzZXJpYWxpemF0aW9uIGZ1bmN0aW9uXG4gICAgcmV0dXJuIHNlcmlhbGl6ZUVsZW1lbnRCYXNlKFxuICAgICAgLy8gdGhlIHJlZ2lzdHJ5XG4gICAgICByZWdpc3RyeSxcbiAgICAgIC8vIHRoZSBsaW5rIGluIHF1ZXN0aW9uXG4gICAgICBsaW5rLFxuICAgICAgLy8gdGhlIHRhZyB3ZSB3aWxsIHVzZVxuICAgICAgXCJhXCIsXG4gICAgICAvLyBubyBiYXNlIGNsYXNzIG5hbWVcbiAgICAgIG51bGwsXG4gICAgICAvLyB0aGUgYXR0cmlidXRlcyB3ZSB3aWxsIHVzZVxuICAgICAgYXR0cnMsXG4gICAgICAvLyBhbmQgdGhlIGNoaWxkcmVuIHRoZSBsaW5rIHNob3VsZCBoYXZlXG4gICAgICBsaW5rLmNoaWxkcmVuLFxuICAgICk7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIEhUTUwgZWxlbWVudCB0aGF0IGlzIGFscmVhZHkgY29uc2lkZXJlZCBhIGxpbmtcbiAgICogZWxlbWVudCBpbnRvIHRoZSBnaXZlbiByaWNoIGVsZW1lbnQgZm9ybVxuICAgKiBAcGFyYW0gbm9kZSB0aGUgbm9kZSBpbiBxdWVzdGlvblxuICAgKiBAcmV0dXJucyBhIGxpbmsgZWxlbWVudCBzdHJ1Y3R1cmVcbiAgICovXG4gIGZ1bmN0aW9uIGRlc2VyaWFsaXplTGluayhub2RlOiBIVE1MQW5jaG9yRWxlbWVudCk6IElMaW5rIHtcblxuICAgIC8vIGZpcnN0IHdlIGNvbnZlcnQgdGhlIG5vZGUgdG8gZ2V0IGl0cyBiYXNlXG4gICAgLy8gZm9ybSBvZiBhbGwgdGhlIHN0YW5kYXJkIHByb3BlcnRpZXNcbiAgICBjb25zdCBiYXNlID0gZGVzZXJpYWxpemVFbGVtZW50QmFzZShub2RlKTtcbiAgICBsZXQgaHJlZjogc3RyaW5nID0gbnVsbDtcbiAgICBsZXQgdGhyZWY6IHN0cmluZyA9IG51bGw7XG4gIFxuICAgIC8vIGxldCdzIGdldCB0aGUgaHJlZiBhbmQgdGVtcGxhdGUgaHJlZlxuICAgIGlmIChub2RlLmRhdGFzZXQuaHJlZikge1xuICAgICAgdGhyZWYgPSBub2RlLmRhdGFzZXQuaHJlZjtcbiAgICB9IGVsc2Uge1xuICAgICAgaHJlZiA9IG5vZGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSB8fCBudWxsO1xuICAgIH1cblxuICAgIC8vIGFuZCBub3cgdGltZSB0byBkZXNlcmlhbGl6ZSB0aGUgY2hpbGRyZW5cbiAgICAvLyBiZWNhdXNlIHRoZXkgc2hvdWxkIGFsbCBiZSB0ZXh0IG5vZGVzXG4gICAgY29uc3QgY2hpbGRyZW4gPSBkZXNlcmlhbGl6ZUNoaWxkcmVuRm9yTm9kZShub2RlKSBhcyBJVGV4dFtdO1xuICBcbiAgICAvLyBhbmQgbGV0J3MgYnVpbGQgdGhlIGxpbmtcbiAgICBjb25zdCBsaW5rOiBJTGluayA9IHtcbiAgICAgIC4uLmJhc2UsXG4gICAgICB0eXBlOiBcImxpbmtcIixcbiAgICAgIGhyZWYsXG4gICAgICB0aHJlZixcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbi5sZW5ndGggPyBjaGlsZHJlbiA6IFtTVEFOREFSRF9URVhUX05PREUoKV0sXG4gICAgfVxuXG4gICAgLy8gYW5kIHJldHVybiBzdWNoXG4gICAgcmV0dXJuIGxpbms7XG4gIH1cblxuICAvKipcbiAgICogUmVhY3RpZmllcyB0aGUgbGluayB0aGF0IGlzIGFscmVhZHlcbiAgICogaW50byBhIHJpY2ggZWxlbWVudCBmb3JtXG4gICAqIEBwYXJhbSBhcmcgdGhlIHJlYWN0aWZpY2F0aW9uIGFyZ1xuICAgKi9cbiAgZnVuY3Rpb24gcmVhY3RpZnlMaW5rKGFyZzogSVJlYWN0aWZ5QXJnPElMaW5rPikge1xuICAgIGNvbnN0IG5ld0N1c3RvbVByb3BzID0ge1xuICAgICAgLi4uYXJnLmN1c3RvbVByb3BzLFxuICAgIH07XG4gICAgLy8gaWYgd2UgYXJlIGFjdGl2ZSwgd2UgYWRkIHRoZSBocmVmXG4gICAgaWYgKGFyZy5lbGVtZW50LmhyZWYgJiYgYXJnLmFjdGl2ZSkge1xuICAgICAgKG5ld0N1c3RvbVByb3BzIGFzIGFueSkuaHJlZiA9IGFyZy5lbGVtZW50LmhyZWY7XG4gICAgfVxuXG4gICAgLy8gaWYgd2UgaGF2ZSBhIHRlbXBsYXRlIGhyZWYgYW5kIHdlIGFyZSBub3QgYWN0aXZlXG4gICAgaWYgKGFyZy5lbGVtZW50LnRocmVmICYmICFhcmcuYWN0aXZlKSB7XG4gICAgICBuZXdDdXN0b21Qcm9wcy5jbGFzc05hbWUgPSAobmV3Q3VzdG9tUHJvcHMuY2xhc3NOYW1lIHx8IFwiXCIpICsgXCIgdGVtcGxhdGVcIjtcbiAgICAgIG5ld0N1c3RvbVByb3BzLnRpdGxlID0gYXJnLmVsZW1lbnQudGhyZWY7XG4gICAgfVxuXG4gICAgaWYgKGFyZy5hc1RlbXBsYXRlICYmIGFyZy5lbGVtZW50LnRocmVmICYmIGFyZy5hY3RpdmUpIHtcbiAgICAgIGxldCBocmVmID0gYXJnLnRlbXBsYXRlQXJncy5wcm9wZXJ0aWVzW2FyZy5lbGVtZW50LnRocmVmXTtcblxuICAgICAgaWYgKGhyZWYgaW5zdGFuY2VvZiBOb25Sb290SW5oZXJpdGFibGUpIHtcbiAgICAgICAgaHJlZiA9IGhyZWYudmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKCFocmVmKSB7XG4gICAgICAgIGhyZWYgPSBhcmcudGVtcGxhdGVSb290QXJncy5wcm9wZXJ0aWVzW2FyZy5lbGVtZW50LnRocmVmXTtcblxuICAgICAgICBpZiAoaHJlZiBpbnN0YW5jZW9mIE5vblJvb3RJbmhlcml0YWJsZSkge1xuICAgICAgICAgIGhyZWYgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGNvdWxkIGJlIG1hdGNoaW5nIGEgY29udGV4dCBidXQgdGhpcyBpcyBub24taW1wb3J0YW50XG4gICAgICAvLyBhcyBvbmx5IHRlbXBsYXRlIGFyZ3MgYXJlIGluIHBsYXkgaGVyZVxuICAgICAgaWYgKHR5cGVvZiBocmVmID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIChuZXdDdXN0b21Qcm9wcyBhcyBhbnkpLmhyZWYgPSBocmVmO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIG5vdyB3ZSBjYW4gZG8gYSBjYWxsIHRvIHRoZSByZWFjdGlmeVxuICAgIHJldHVybiByZWFjdGlmeUVsZW1lbnRCYXNlKFxuICAgICAgcmVnaXN0cnksXG4gICAgICBcImFcIixcbiAgICAgIG51bGwsXG4gICAgICBhcmcuZWxlbWVudC5jaGlsZHJlbixcbiAgICAgIG51bGwsXG4gICAgICB7XG4gICAgICAgIC4uLmFyZyxcbiAgICAgICAgY3VzdG9tUHJvcHM6IG5ld0N1c3RvbVByb3BzLFxuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgLy8gd2UgYWRkIGl0IHRvIHRoZSByZWdpc3RyeVxuICByZWdpc3RyeS5SRUFDVElGWS5saW5rID0gcmVhY3RpZnlMaW5rO1xuICByZWdpc3RyeS5TRVJJQUxJWkUubGluayA9IHNlcmlhbGl6ZUxpbms7XG4gIHJlZ2lzdHJ5LkFMTE9XU19DSElMRFJFTi5saW5rID0gW107XG4gIHJlZ2lzdHJ5LklOTElORVMubGluayA9IHRydWU7XG4gIHJlZ2lzdHJ5Lk1FUkdBQkxFUy5saW5rID0gdHJ1ZTtcblxuICByZWdpc3RyeS5ERVNFUklBTElaRS5ieVRhZy5BID0gZGVzZXJpYWxpemVMaW5rO1xufVxuXG4vKipcbiAqIFRoZSBsaW5rIHJlcHJlc2VudHMgYW4gYSB0eXBlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUxpbmsgZXh0ZW5kcyBJRWxlbWVudEJhc2Uge1xuICB0eXBlOiBcImxpbmtcIjtcbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgdGhlIHN0YW5kYXJkIGhyZWYgYXR0cmlidXRlXG4gICAqL1xuICBocmVmOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgY2hpbGRyZW4gZm9yIHRoZSBsaW5rIGlzIGEgdGV4dCB0aGF0IHNwZWNpZmllcyB0aGUgbGlua1xuICAgKi9cbiAgY2hpbGRyZW46IElUZXh0W107XG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIHRoZSBkYXRhLWhyZWYgdGVtcGxhdGluZyBhdHRyaWJ1dGVcbiAgICovXG4gIHRocmVmOiBzdHJpbmc7XG59IiwgIi8qKlxuICogQ29udGFpbnMgdGhlIHNlcmlhbGl6YXRpb24sIHJlYWN0aWZpY2F0aW9uIGFuZCBkZXNlcmlhbGl6YXRpb24gZnVuY3Rpb25zXG4gKiBmb3IgdGhlIHF1b3RlIGVsZW1lbnRcbiAqIFxuICogQG1vZHVsZVxuICovXG5cbmltcG9ydCB7IGRlc2VyaWFsaXplQ2hpbGRyZW5Gb3JOb2RlLCBJUmVhY3RpZnlBcmcsIElTZXJpYWxpemF0aW9uUmVnaXN0cnlUeXBlfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IHNlcmlhbGl6ZUVsZW1lbnRCYXNlLCBkZXNlcmlhbGl6ZUVsZW1lbnRCYXNlLCBJRWxlbWVudEJhc2UsIHJlYWN0aWZ5RWxlbWVudEJhc2UgfSBmcm9tIFwiLi4vYmFzZVwiO1xuaW1wb3J0IHsgSUZpbGUgfSBmcm9tIFwiLi9maWxlXCI7XG5pbXBvcnQgeyBJTGluayB9IGZyb20gXCIuL2xpbmtcIjtcbmltcG9ydCB7IElUZXh0LCBTVEFOREFSRF9URVhUX05PREUgfSBmcm9tIFwiLi90ZXh0XCI7XG5cbi8qKlxuICogVGhlIGZ1bmN0aW9uIHRoYXQgcmVnaXN0ZXJzIGFuZCBhZGRzIHRoZSBxdW90ZSBlbGVtZW50IGluIHRoZSBnaXZlblxuICogcmVnaXN0cnlcbiAqIEBwYXJhbSByZWdpc3RyeSB0aGUgcmVnaXN0cnkgdG8gbW9kaWZ5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclF1b3RlKHJlZ2lzdHJ5OiBJU2VyaWFsaXphdGlvblJlZ2lzdHJ5VHlwZSkge1xuXG4gIC8qKlxuICAgKiBjb252ZXJ0cyBhIGdpdmVuIHF1b3RlIHJpY2ggZWxlbWVudCBpbnRvIGl0c1xuICAgKiBIVE1MIGZvcm1cbiAgICogQHBhcmFtIHF1b3RlIHRoZSBxdW90ZSByaWNoIGVsZW1lbnRcbiAgICogQHJldHVybnMgYW4gSFRNTCBlbGVtZW50XG4gICAqL1xuICBmdW5jdGlvbiBzZXJpYWxpemVRdW90ZShxdW90ZTogSVF1b3RlKSB7XG4gICAgLy8gc28gd2UgY2FsbCB0aGUgZWxlbWVudCBiYXNlIHNlcmlhbGl6YXRpb24gZnVuY3Rpb25cbiAgICByZXR1cm4gc2VyaWFsaXplRWxlbWVudEJhc2UoXG4gICAgICAvLyB0aGUgcmVnaXN0cnlcbiAgICAgIHJlZ2lzdHJ5LFxuICAgICAgLy8gdGhlIHF1b3RlIHRvIHVzZVxuICAgICAgcXVvdGUsXG4gICAgICAvLyB0aGUgdGFnIHdlIGFyZSB1c2luZ1xuICAgICAgXCJibG9ja3F1b3RlXCIsXG4gICAgICAvLyBubyBiYXNlIGNsYXNzXG4gICAgICBudWxsLFxuICAgICAgLy8gbm8gc3BlY2lhbCBhdHRyaWJ1dGVzXG4gICAgICBudWxsLFxuICAgICAgLy8gdGhlIGNoaWxkcmVuXG4gICAgICBxdW90ZS5jaGlsZHJlbixcbiAgICApO1xuICB9XG4gIFxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIGEgZ2l2ZW4gSFRNTCBlbGVtZW50IHRoYXQgaXMgYWxyZWFkeVxuICAgKiBrbm93biBhcyBhIHF1b3RlIGludG8gdGhlIGdpdmVuIHF1b3RlIGZvcm1cbiAgICogQHBhcmFtIG5vZGUgdGhlIG5vZGUgaW4gcXVlc3Rpb25cbiAgICogQHJldHVybnMgYSBxdW90ZSByaWNoIGVsZW1lbnRcbiAgICovXG4gIGZ1bmN0aW9uIGRlc2VyaWFsaXplUXVvdGUobm9kZTogSFRNTFF1b3RlRWxlbWVudCk6IElRdW90ZSB7XG4gICAgLy8gZmlyc3Qgd2UgZ2V0IHRoZSBiYXNlXG4gICAgY29uc3QgYmFzZSA9IGRlc2VyaWFsaXplRWxlbWVudEJhc2Uobm9kZSk7XG5cbiAgICAvLyBwcm9jZXNzIHRoZSBjaGlsZHJlblxuICAgIGNvbnN0IGNoaWxkcmVuID0gZGVzZXJpYWxpemVDaGlsZHJlbkZvck5vZGUobm9kZSkgYXMgYW55O1xuXG4gICAgLy8gYW5kIGJ1aWxkIHRoZSBxdW90ZSB3aXRoIHRoZSBiYXNlXG4gICAgY29uc3QgcXVvdGU6IElRdW90ZSA9IHtcbiAgICAgIC4uLmJhc2UsXG4gICAgICB0eXBlOiBcInF1b3RlXCIsXG4gICAgICBjaGlsZHJlbixcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gdGhlIHF1b3RlXG4gICAgcmV0dXJuIHF1b3RlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWN0aWZpZXMgYSBwYXJhZ3JhcGggdGhhdCBpcyBhbHJlYWR5XG4gICAqIGludG8gYSByaWNoIGVsZW1lbnQgZm9ybVxuICAgKiBAcGFyYW0gYXJnIHRoZSByZWFjdGlmaWNhdGlvbiBhcmdcbiAgICovXG4gIGZ1bmN0aW9uIHJlYWN0aWZ5UXVvdGUoYXJnOiBJUmVhY3RpZnlBcmc8SVF1b3RlPikge1xuICAgIC8vIHNvIHdlIGNhbGwgdGhlIHJlYWN0aWZ5IGVsZW1lbnQgYmFzZSBmdW5jdGlvblxuICAgIHJldHVybiByZWFjdGlmeUVsZW1lbnRCYXNlKFxuICAgICAgLy8gd2l0aCB0aGUgcmVnaXN0cnlcbiAgICAgIHJlZ2lzdHJ5LFxuICAgICAgLy8gdGhlIHRhZyB0byB1c2VcbiAgICAgIFwiYmxvY2txdW90ZVwiLFxuICAgICAgLy8gbm8gYmFzZSBjbGFzc1xuICAgICAgbnVsbCxcbiAgICAgIC8vIHRoZSBjaGlsZHJlbiB0byB1c2VcbiAgICAgIGFyZy5lbGVtZW50LmNoaWxkcmVuLFxuICAgICAgLy8gbm90aGluZyB0byB1c2UgYXMgYSB3cmFwIGZ1bmN0aW9uXG4gICAgICBudWxsLFxuICAgICAgLy8gdGhlIGFyZ3VtZW50IGl0c2VsZlxuICAgICAgYXJnLFxuICAgICk7XG4gIH1cblxuICAvLyBhZGQgaW4gdGhlIHJlZ2lzdHJ5XG4gIHJlZ2lzdHJ5LlJFQUNUSUZZLnF1b3RlID0gcmVhY3RpZnlRdW90ZTtcbiAgcmVnaXN0cnkuU0VSSUFMSVpFLnF1b3RlID0gc2VyaWFsaXplUXVvdGU7XG4gIHJlZ2lzdHJ5LkJMT0NLUy5xdW90ZSA9IHRydWU7XG5cbiAgcmVnaXN0cnkuREVTRVJJQUxJWkUuYnlUYWcuUVVPVEUgPSBkZXNlcmlhbGl6ZVF1b3RlO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBxdW90ZSB0YWdcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJUXVvdGUgZXh0ZW5kcyBJRWxlbWVudEJhc2Uge1xuICAvKipcbiAgICogUmVwcmVzZW50cyB0aGUgdHlwZVxuICAgKi9cbiAgdHlwZTogXCJxdW90ZVwiO1xuICAvKipcbiAgICogUmVwcmVzZW50cyB0aGUgY2hpbGRyZW5cbiAgICovXG4gIGNoaWxkcmVuOiBBcnJheTxJVGV4dCB8IElMaW5rIHwgSUZpbGU+O1xufSIsICIvKipcbiAqIENvbnRhaW5zIHRoZSBzZXJpYWxpemF0aW9uLCByZWFjdGlmaWNhdGlvbiBhbmQgZGVzZXJpYWxpemF0aW9uIGZ1bmN0aW9uc1xuICogZm9yIHRoZSB0aXRsZSBlbGVtZW50XG4gKiBcbiAqIEBtb2R1bGVcbiAqL1xuXG5pbXBvcnQgeyBkZXNlcmlhbGl6ZUNoaWxkcmVuRm9yTm9kZSwgSVJlYWN0aWZ5QXJnLCBJU2VyaWFsaXphdGlvblJlZ2lzdHJ5VHlwZSB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHsgZGVzZXJpYWxpemVFbGVtZW50QmFzZSwgSUVsZW1lbnRCYXNlLCByZWFjdGlmeUVsZW1lbnRCYXNlLCBzZXJpYWxpemVFbGVtZW50QmFzZSB9IGZyb20gXCIuLi9iYXNlXCI7XG5pbXBvcnQgeyBJRmlsZSB9IGZyb20gXCIuL2ZpbGVcIjtcbmltcG9ydCB7IElMaW5rIH0gZnJvbSBcIi4vbGlua1wiO1xuaW1wb3J0IHsgSVRleHQgfSBmcm9tIFwiLi90ZXh0XCI7XG5cbi8qKlxuICogVGhlIGZ1bmN0aW9uIHRoYXQgcmVnaXN0ZXJzIGFuZCBhZGRzIHRoZSB0aXRsZSBlbGVtZW50IGluIHRoZSBnaXZlblxuICogcmVnaXN0cnlcbiAqIEBwYXJhbSByZWdpc3RyeSB0aGUgcmVnaXN0cnkgdG8gbW9kaWZ5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclRpdGxlKHJlZ2lzdHJ5OiBJU2VyaWFsaXphdGlvblJlZ2lzdHJ5VHlwZSkge1xuXG4gIC8qKlxuICAgKiBjb252ZXJ0cyBhIGdpdmVuIHRpdGxlIHJpY2ggZWxlbWVudCBpbnRvIGl0c1xuICAgKiBIVE1MIGZvcm1cbiAgICogQHBhcmFtIHRpdGxlIHRoZSB0aXRsZSByaWNoIGVsZW1lbnRcbiAgICogQHJldHVybnMgYW4gSFRNTCBlbGVtZW50XG4gICAqL1xuICBmdW5jdGlvbiBzZXJpYWxpemVUaXRsZSh0aXRsZTogSVRpdGxlKSB7XG4gICAgLy8gd2UganVzdCBjYWxsIHRoZSBiYXNlIGZ1bmN0aW9uXG4gICAgcmV0dXJuIHNlcmlhbGl6ZUVsZW1lbnRCYXNlKHJlZ2lzdHJ5LCB0aXRsZSwgdGl0bGUudGl0bGVUeXBlLCBudWxsLCBudWxsLCB0aXRsZS5jaGlsZHJlbik7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgYSBnaXZlbiBIVE1MIGVsZW1lbnQgdGhhdCBpcyBhbHJlYWR5XG4gICAqIGtub3duIGFzIGEgdGl0bGUgaW50byB0aGUgZ2l2ZW4gdGl0bGUgZm9ybVxuICAgKiBAcGFyYW0gbm9kZSB0aGUgbm9kZSBpbiBxdWVzdGlvblxuICAgKiBAcmV0dXJucyBhIHRpdGxlIHJpY2ggZWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gZGVzZXJpYWxpemVUaXRsZShub2RlOiBIVE1MRWxlbWVudCk6IElUaXRsZSB7XG4gICAgLy8gZmlyc3Qgd2UgZ2V0IHRoZSBiYXNlXG4gICAgY29uc3QgYmFzZSA9IGRlc2VyaWFsaXplRWxlbWVudEJhc2Uobm9kZSk7XG4gICAgLy8gcHJvY2VzcyB0aGUgY2hpbGRyZW5cbiAgICBjb25zdCBjaGlsZHJlbiA9IGRlc2VyaWFsaXplQ2hpbGRyZW5Gb3JOb2RlKG5vZGUpIGFzIGFueTtcblxuICAgIC8vIGFuZCB0aGVuIGJ1aWxkIHRoZSB0aXRsZSBmb3JtXG4gICAgY29uc3QgdGl0bGU6IElUaXRsZSA9IHtcbiAgICAgIC4uLmJhc2UsXG4gICAgICB0eXBlOiBcInRpdGxlXCIsXG4gICAgICB0aXRsZVR5cGU6IG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpIGFzIGFueSxcbiAgICAgIGNoaWxkcmVuLFxuICAgIH1cblxuICAgIC8vIHJldHVybiBpdFxuICAgIHJldHVybiB0aXRsZTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIFJlYWN0aWZpZXMgYSB0aXRsZSB0aGF0IGlzIGFscmVhZHlcbiAgICogaW50byBhIHJpY2ggZWxlbWVudCBmb3JtXG4gICAqIEBwYXJhbSBhcmcgdGhlIHJlYWN0aWZpY2F0aW9uIGFyZ1xuICAgKi9cbiAgZnVuY3Rpb24gcmVhY3RpZnlUaXRsZShhcmc6IElSZWFjdGlmeUFyZzxJVGl0bGU+KSB7XG4gICAgLy8gcmV0dXJuIGJ5IHJlYWN0aWZpY2F0aW9uXG4gICAgcmV0dXJuIHJlYWN0aWZ5RWxlbWVudEJhc2UoXG4gICAgICAvLyB0aGUgcmVnaXN0cnlcbiAgICAgIHJlZ2lzdHJ5LFxuICAgICAgLy8gdGhlIHRhZyB3ZSBhcmUgdXNpbmcgaXMgdGhlIHNhbWUgb2YgdGhlIHN1YnR5cGUsIGgxLCBoMiwgaDNcbiAgICAgIGFyZy5lbGVtZW50LnRpdGxlVHlwZSxcbiAgICAgIC8vIG5vIGJhc2UgY2xhc3NcbiAgICAgIG51bGwsXG4gICAgICAvLyB0aGUgY2hpbGRyZW4gdG8gdXNlXG4gICAgICBhcmcuZWxlbWVudC5jaGlsZHJlbixcbiAgICAgIC8vIG5vIHdyYXAgY2hpbGRyZW4gZnVuY3Rpb25cbiAgICAgIG51bGwsXG4gICAgICAvLyBhbmQgdGhlIGFyZyBpdHNlbGZcbiAgICAgIGFyZyxcbiAgICApO1xuICB9XG5cbiAgLy8gYWRkIGFsbCB0byB0aGUgcmVnaXN0cnlcbiAgcmVnaXN0cnkuUkVBQ1RJRlkudGl0bGUgPSByZWFjdGlmeVRpdGxlO1xuICByZWdpc3RyeS5TRVJJQUxJWkUudGl0bGUgPSBzZXJpYWxpemVUaXRsZTtcbiAgcmVnaXN0cnkuQkxPQ0tTLnRpdGxlID0gdHJ1ZTtcbiAgcmVnaXN0cnkuREVTRVJJQUxJWkUuYnlUYWcuSDEgPSBkZXNlcmlhbGl6ZVRpdGxlO1xuICByZWdpc3RyeS5ERVNFUklBTElaRS5ieVRhZy5IMiA9IGRlc2VyaWFsaXplVGl0bGU7XG4gIHJlZ2lzdHJ5LkRFU0VSSUFMSVpFLmJ5VGFnLkgzID0gZGVzZXJpYWxpemVUaXRsZTtcbiAgcmVnaXN0cnkuREVTRVJJQUxJWkUuYnlUYWcuSDQgPSBkZXNlcmlhbGl6ZVRpdGxlO1xuICByZWdpc3RyeS5ERVNFUklBTElaRS5ieVRhZy5INSA9IGRlc2VyaWFsaXplVGl0bGU7XG4gIHJlZ2lzdHJ5LkRFU0VSSUFMSVpFLmJ5VGFnLkg2ID0gZGVzZXJpYWxpemVUaXRsZTtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSB0aXRsZSwgaDEsIGgyLCBoMywgZXRjLi4uXG4gKiBmb3IgdGhlIHJpY2ggdGV4dCBzcGVjaWZpY2F0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVRpdGxlIGV4dGVuZHMgSUVsZW1lbnRCYXNlIHtcbiAgdHlwZTogXCJ0aXRsZVwiO1xuICB0aXRsZVR5cGU6IFwiaDFcIiB8IFwiaDJcIiB8IFwiaDNcIiB8IFwiaDRcIiB8IFwiaDVcIiB8IFwiaDZcIjtcblxuICAvKipcbiAgICogVGhlIHRpdGxlIG9ubHkgaGFzIG9uZSBjaGlsZHJlbiBhbmQgaXQncyB0ZXh0XG4gICAqIGFzIGl0IG9ubHkgY29udGFpbnMgdGV4dCB3aXRoaW4gaXRcbiAgICovXG4gIGNoaWxkcmVuOiBBcnJheTxJVGV4dCB8IElMaW5rIHwgSUZpbGU+O1xufSIsICIvKipcbiAqIENvbnRhaW5zIHRoZSBzZXJpYWxpemF0aW9uLCByZWFjdGlmaWNhdGlvbiBhbmQgZGVzZXJpYWxpemF0aW9uIGZ1bmN0aW9uc1xuICogZm9yIHRoZSB2aWRlbyBlbGVtZW50XG4gKiBcbiAqIEBtb2R1bGVcbiAqL1xuXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERPTVdpbmRvdyB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IElSZWFjdGlmeUFyZywgSVNlcmlhbGl6YXRpb25SZWdpc3RyeVR5cGUgfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IHNlcmlhbGl6ZUVsZW1lbnRCYXNlLCBkZXNlcmlhbGl6ZUVsZW1lbnRCYXNlLCBJRWxlbWVudEJhc2UsIHJlYWN0aWZ5RWxlbWVudEJhc2UgfSBmcm9tIFwiLi4vYmFzZVwiO1xuaW1wb3J0IHsgSVRleHQsIFNUQU5EQVJEX1RFWFRfTk9ERSB9IGZyb20gXCIuL3RleHRcIjtcblxuLyoqXG4gKiBUaGUgZnVuY3Rpb24gdGhhdCByZWdpc3RlcnMgYW5kIGFkZHMgdGhlIHZpZGVvIGVsZW1lbnQgaW4gdGhlIGdpdmVuXG4gKiByZWdpc3RyeVxuICogQHBhcmFtIHJlZ2lzdHJ5IHRoZSByZWdpc3RyeSB0byBtb2RpZnlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyVmlkZW8ocmVnaXN0cnk6IElTZXJpYWxpemF0aW9uUmVnaXN0cnlUeXBlKSB7XG5cbiAgLyoqXG4gICAqIGNvbnZlcnRzIGEgZ2l2ZW4gdmlkZW8gcmljaCBlbGVtZW50IGludG8gaXRzXG4gICAqIEhUTUwgZm9ybVxuICAgKiBAcGFyYW0gdmlkZW8gdGhlIHZpZGVvIHJpY2ggZWxlbWVudFxuICAgKiBAcmV0dXJucyBhbiBIVE1MIGVsZW1lbnRcbiAgICovXG4gIGZ1bmN0aW9uIHNlcmlhbGl6ZVZpZGVvKHZpZGVvOiBJVmlkZW8pIHtcbiAgICAvLyBtYWtlIHRoZSBtYWluIGNvbnRhaW5lciB3aXRoIHRoZSByaWdodCBjbGFzc1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBzZXJpYWxpemVFbGVtZW50QmFzZShyZWdpc3RyeSwgdmlkZW8sIFwiZGl2XCIsIFwidmlkZW9cIiwgbnVsbCwgbnVsbCk7XG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc05hbWUgPSBcInZpZGVvXCI7XG5cbiAgICAvLyBhZGQgdGhlIHBhcmVudFxuICAgIGNvbnN0IHBhcmVudENvbnRhaW5lciA9IERPTVdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBhcmVudENvbnRhaW5lci5jbGFzc05hbWUgPSBcInZpZGVvLWNvbnRhaW5lclwiO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocGFyZW50Q29udGFpbmVyKTtcblxuICAgIC8vIGFuZCBzZXQgdGhlIGlmcmFtZVxuICAgIGNvbnN0IGlmcmFtZSA9IERPTVdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgIHBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChpZnJhbWUpO1xuXG4gICAgLy8gd2l0aCB0aGUgcHJvcHMgYXMgZGVmaW5lZCBieSB0aGUgc3BlY1xuICAgIGlmcmFtZS5hbGxvd0Z1bGxzY3JlZW4gPSB0cnVlO1xuICAgIGlmcmFtZS5kYXRhc2V0LnZpZGVvT3JpZ2luID0gdmlkZW8ub3JpZ2luO1xuICAgIGlmcmFtZS5kYXRhc2V0LnZpZGVvU3JjID0gdmlkZW8uc3JjO1xuXG4gICAgLy8gYW5kIHNldCB0aGUgc291cmNlIGFjY29yZGluZyB0byB0aGUgb3JpZ2luXG4gICAgaWYgKHZpZGVvLm9yaWdpbiA9PT0gXCJ5b3V0dWJlXCIpIHtcbiAgICAgIGlmcmFtZS5zcmMgPSBgaHR0cHM6Ly95b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvLnNyY30/cmVsPTBgO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZnJhbWUuc3JjID0gYGh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8ke3ZpZGVvLnNyY30/dGl0bGU9MCZieWxpbmU9MCZwb3J0cmFpdD0wJmJhZGdlPTBgO1xuICAgIH1cblxuICAgIC8vIGFuZCByZXR1cm4gdGhlIG1haW4gY29udGFpbmVyXG4gICAgcmV0dXJuIG1haW5Db250YWluZXI7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgYSBnaXZlbiBIVE1MIGVsZW1lbnQgdGhhdCBpcyBhbHJlYWR5XG4gICAqIGtub3duIGFzIGEgdmlkZW8gaW50byB0aGUgZ2l2ZW4gdmlkZW8gZm9ybVxuICAgKiBAcGFyYW0gbm9kZSB0aGUgbm9kZSBpbiBxdWVzdGlvblxuICAgKiBAcmV0dXJucyBhIHZpZGVvIHJpY2ggZWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gZGVzZXJpYWxpemVWaWRlbyhub2RlOiBIVE1MRGl2RWxlbWVudCk6IElWaWRlbyB7XG4gICAgLy8gd2UgbmVlZCB0byBmaW5kIGFuIGlmcmFtZVxuICAgIGNvbnN0IGlmcmFtZSA9IG5vZGUucXVlcnlTZWxlY3RvcihcImlmcmFtZVwiKSBhcyBIVE1MSUZyYW1lRWxlbWVudDtcbiAgICAvLyBubyBpZnJhbWUsIGl0IHdvbid0IHdvcmtcbiAgICBpZiAoIWlmcmFtZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gbm93IHdlIGNhbiBnZXQgdGhlIGJhc2VcbiAgICBjb25zdCBiYXNlID0gZGVzZXJpYWxpemVFbGVtZW50QmFzZShub2RlKTtcblxuICAgIC8vIGFuZCByZXR1cm4gYmFzZWQgb24gdGhlIGJhc2VcbiAgICByZXR1cm4ge1xuICAgICAgLi4uYmFzZSxcbiAgICAgIHR5cGU6IFwidmlkZW9cIixcbiAgICAgIHNyYzogaWZyYW1lLmRhdGFzZXQudmlkZW9TcmMsXG4gICAgICBvcmlnaW46IGlmcmFtZS5kYXRhc2V0LnZpZGVvT3JpZ2luIGFzIGFueSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIFNUQU5EQVJEX1RFWFRfTk9ERSgpLFxuICAgICAgXVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmVhY3RpZmllcyBhIHRpdGxlIHRoYXQgaXMgYWxyZWFkeVxuICAgKiBpbnRvIGEgcmljaCBlbGVtZW50IGZvcm1cbiAgICogQHBhcmFtIGFyZyB0aGUgcmVhY3RpZmljYXRpb24gYXJnXG4gICAqL1xuICBmdW5jdGlvbiByZWFjdGlmeVZpZGVvKGFyZzogSVJlYWN0aWZ5QXJnPElWaWRlbz4pIHtcbiAgICBpZiAoIWFyZy5lbGVtZW50Lm9yaWdpbikge1xuICAgICAgLy8gbm93IHdlIG1pZ2h0IGNhbGwgdGhlIHJlYWN0aWZpY2F0aW9uXG4gICAgICByZXR1cm4gcmVhY3RpZnlFbGVtZW50QmFzZShcbiAgICAgICAgLy8gdGhlIHJlZ2lzdHJ5XG4gICAgICAgIHJlZ2lzdHJ5LFxuICAgICAgICAvLyB3ZSB3aWxsIGJlIHVzaW5nIGEgZGl2IHRvIHN0YXJ0IHdpdGhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgLy8gdGhlIHZpZGVvIHdpbGwgYmUgdGhlIGJhc2UgY2xhc3NcbiAgICAgICAgXCJ2aWRlb1wiLFxuICAgICAgICAvLyBubyBjaGlsZHJlbiBpdHNlbGZcbiAgICAgICAgbnVsbCxcbiAgICAgICAgLy8gdGhlIHdyYXBwaW5nIGZ1bmN0aW9uIHRoYXQgc2V0cyB1cCB0aGUgaWZyYW1lXG4gICAgICAgIChjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHRoZSBhcmcgaXRzZWxmXG4gICAgICAgIGFyZyxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gbGV0J3MgYnVpbGQgdGhlIHNvdXJjZSBmb3IgdGhlIGlmcmFtZVxuICAgIGxldCBpZnJhbWVTcmM6IHN0cmluZztcbiAgICBpZiAoYXJnLmVsZW1lbnQub3JpZ2luID09PSBcInlvdXR1YmVcIikge1xuICAgICAgaWZyYW1lU3JjID0gYGh0dHBzOi8veW91dHViZS5jb20vZW1iZWQvJHthcmcuZWxlbWVudC5zcmN9P3JlbD0wYDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWZyYW1lU3JjID0gYGh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8ke2FyZy5lbGVtZW50LnNyY30/dGl0bGU9MCZieWxpbmU9MCZwb3J0cmFpdD0wJmJhZGdlPTBgO1xuICAgIH1cblxuICAgIC8vIG5vdyB3ZSBtaWdodCBjYWxsIHRoZSByZWFjdGlmaWNhdGlvblxuICAgIHJldHVybiByZWFjdGlmeUVsZW1lbnRCYXNlKFxuICAgICAgLy8gdGhlIHJlZ2lzdHJ5XG4gICAgICByZWdpc3RyeSxcbiAgICAgIC8vIHdlIHdpbGwgYmUgdXNpbmcgYSBkaXYgdG8gc3RhcnQgd2l0aFxuICAgICAgXCJkaXZcIixcbiAgICAgIC8vIHRoZSB2aWRlbyB3aWxsIGJlIHRoZSBiYXNlIGNsYXNzXG4gICAgICBcInZpZGVvXCIsXG4gICAgICAvLyBubyBjaGlsZHJlbiBpdHNlbGZcbiAgICAgIG51bGwsXG4gICAgICAvLyB0aGUgd3JhcHBpbmcgZnVuY3Rpb24gdGhhdCBzZXRzIHVwIHRoZSBpZnJhbWVcbiAgICAgIChjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpZnJhbWUgc3JjPXtpZnJhbWVTcmN9IGFsbG93RnVsbFNjcmVlbj17dHJ1ZX0gZnJhbWVCb3JkZXI9XCIwXCIgLz5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICAvLyB0aGUgYXJnIGl0c2VsZlxuICAgICAgYXJnLFxuICAgICk7XG4gIH1cblxuICAvLyBhZGQgdG8gdGhlIHJlZ2lzdHJ5XG4gIHJlZ2lzdHJ5LlJFQUNUSUZZLnZpZGVvID0gcmVhY3RpZnlWaWRlbztcbiAgcmVnaXN0cnkuU0VSSUFMSVpFLnZpZGVvID0gc2VyaWFsaXplVmlkZW87XG4gIHJlZ2lzdHJ5LlZPSURTLnZpZGVvID0gdHJ1ZTtcbiAgcmVnaXN0cnkuQkxPQ0tTLnZpZGVvID0gdHJ1ZTtcblxuICByZWdpc3RyeS5ERVNFUklBTElaRS5ieUNsYXNzTmFtZS52aWRlbyA9IGRlc2VyaWFsaXplVmlkZW87XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHZpZGVvIHR5cGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJVmlkZW8gZXh0ZW5kcyBJRWxlbWVudEJhc2Uge1xuICB0eXBlOiBcInZpZGVvXCIsXG4gIC8qKlxuICAgKiBhcyBmb3IgdGhlIHRleHQgc3BlY3Mgb25seSB2aW1lbyBhbmQgeW91dHViZSBhcmUgc3VwcG9ydGVkXG4gICAqL1xuICBvcmlnaW46IFwieW91dHViZVwiIHwgXCJ2aW1lb1wiLFxuICAvKipcbiAgICogVGhlIHNvdXJjZSBvZiB0aGUgdmlkZW8gcmVwcmVzZW50c1xuICAgKiB0aGUgZGF0YS12aWRlby1zcmNcbiAgICovXG4gIHNyYzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGNoaWxkcmVuIGFyZSBhIHRleHQgdHlwZSBldmVuXG4gICAqIHdoZW4gaXQncyB2b2lkXG4gICAqL1xuICBjaGlsZHJlbjogW1xuICAgIElUZXh0LFxuICBdO1xufVxuIiwgIi8qKlxuICogQ29udGFpbnMgdGhlIHNlcmlhbGl6YXRpb24sIHJlYWN0aWZpY2F0aW9uIGFuZCBkZXNlcmlhbGl6YXRpb24gZnVuY3Rpb25zXG4gKiBmb3IgdGhlIGxpc3QgZWxlbWVudFxuICogXG4gKiBUaGUgbGlzdCByZXByZXNlbnRzIG9sIGFuZCB1bCBlbGVtZW50IGl0c2VsZlxuICogXG4gKiBAbW9kdWxlXG4gKi9cblxuaW1wb3J0IHsgZGVzZXJpYWxpemVDaGlsZHJlbkZvck5vZGUsIElSZWFjdGlmeUFyZywgSVNlcmlhbGl6YXRpb25SZWdpc3RyeVR5cGUsIFJpY2hFbGVtZW50IH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBzZXJpYWxpemVFbGVtZW50QmFzZSwgZGVzZXJpYWxpemVFbGVtZW50QmFzZSwgSUVsZW1lbnRCYXNlLCByZWFjdGlmeUVsZW1lbnRCYXNlIH0gZnJvbSBcIi4uL2Jhc2VcIjtcbmltcG9ydCB7IElMaXN0SXRlbSB9IGZyb20gXCIuL2xpc3QtaXRlbVwiO1xuaW1wb3J0IHsgU1RBTkRBUkRfUEFSQUdSQVBIIH0gZnJvbSBcIi4vcGFyYWdyYXBoXCI7XG5pbXBvcnQgeyBJVGV4dCB9IGZyb20gXCIuL3RleHRcIjtcblxuLyoqXG4gKiBUaGUgZnVuY3Rpb24gdGhhdCByZWdpc3RlcnMgYW5kIGFkZHMgdGhlIGxpc3QgZWxlbWVudCBpbiB0aGUgZ2l2ZW5cbiAqIHJlZ2lzdHJ5XG4gKiBAcGFyYW0gcmVnaXN0cnkgdGhlIHJlZ2lzdHJ5IHRvIG1vZGlmeVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJMaXN0KHJlZ2lzdHJ5OiBJU2VyaWFsaXphdGlvblJlZ2lzdHJ5VHlwZSkge1xuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIHRoZSBlbGVtZW50IHRvIGl0cyBIVE1MIGZvcm1cbiAgICogQHBhcmFtIGxpc3QgdGhlIGxpc3QgaW4gcXVlc3Rpb25cbiAgICogQHJldHVybnMgYW4gaHRtbCBlbGVtZW50XG4gICAqL1xuICBmdW5jdGlvbiBzZXJpYWxpemVMaXN0KGxpc3Q6IElMaXN0KSB7XG4gICAgLy8gc28gd2UgY2FsbCB0aGUgYmFzZSBzZXJpYWxpemF0aW9uXG4gICAgcmV0dXJuIHNlcmlhbGl6ZUVsZW1lbnRCYXNlKFxuICAgICAgLy8gdGhlIHJlZ2lzdHJ5XG4gICAgICByZWdpc3RyeSxcbiAgICAgIC8vIHRoZSBsaXN0IGluIHF1ZXN0aW9uIGNvbXBvbmVudFxuICAgICAgbGlzdCxcbiAgICAgIC8vIG5vdyB0aGUgdGFnIHRvIHVzZSBkZXBlbmRzXG4gICAgICBsaXN0Lmxpc3RUeXBlID09PSBcIm51bWJlcmVkXCIgPyBcIm9sXCIgOiBcInVsXCIsXG4gICAgICAvLyBubyBiYXNlIGNsYXNzXG4gICAgICBudWxsLFxuICAgICAgLy8gbm8gZXh0cmEgYXR0cmlidXRlc1xuICAgICAgbnVsbCxcbiAgICAgIC8vIHRoZSBjaGlsZHJlbiB0byB1c2VcbiAgICAgIGxpc3QuY2hpbGRyZW4sXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgYW4gSFRNTCBub2RlIGludG8gdGhlIGdpdmVuIGxpc3RcbiAgICogcmljaCBlbGVtZW50XG4gICAqIEBwYXJhbSBub2RlIHRoZSBub2RlIGluIHF1ZXN0aW9uXG4gICAqIEByZXR1cm5zIGEgbGlzdCBlbGVtZW50IHN0cnVjdHVyZVxuICAgKi9cbiAgZnVuY3Rpb24gZGVzZXJpYWxpemVMaXN0KG5vZGU6IEhUTUxEaXZFbGVtZW50KTogSUxpc3Qge1xuICAgIC8vIGZpcnN0IHdlIGdldCB0aGUgYmFzZVxuICAgIGNvbnN0IGJhc2UgPSBkZXNlcmlhbGl6ZUVsZW1lbnRCYXNlKG5vZGUpO1xuXG4gICAgLy8gYW5kIGNvbnN0cnVjdCB0aGUgbGlzdFxuICAgIGNvbnN0IGxpc3Q6IElMaXN0ID0ge1xuICAgICAgLi4uYmFzZSxcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgICAgbGlzdFR5cGU6IG5vZGUudGFnTmFtZSA9PT0gXCJPTFwiID8gXCJudW1iZXJlZFwiIDogXCJidWxsZXRlZFwiLFxuICAgICAgY2hpbGRyZW46IGRlc2VyaWFsaXplQ2hpbGRyZW5Gb3JOb2RlKG5vZGUpIGFzIElMaXN0SXRlbVtdLFxuICAgIH1cblxuICAgIC8vIHJldHVybiBzdWNoXG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cblxuICAvKipcbiAgICogUmVhY3RpZmllcyB0aGUgbGlzdCB0aGF0IGlzIGFscmVhZHlcbiAgICogaW50byBhIHJpY2ggZWxlbWVudCBmb3JtXG4gICAqIEBwYXJhbSBhcmcgdGhlIHJlYWN0aWZpY2F0aW9uIGFyZ1xuICAgKi9cbiAgZnVuY3Rpb24gcmVhY3RpZnlMaXN0KGFyZzogSVJlYWN0aWZ5QXJnPElMaXN0Pikge1xuICAgIHJldHVybiByZWFjdGlmeUVsZW1lbnRCYXNlKFxuICAgICAgLy8gdGhlIHJlZ2lzdHJ5XG4gICAgICByZWdpc3RyeSxcbiAgICAgIC8vIHRoZSB0YWcgdG8gdXNlXG4gICAgICBhcmcuZWxlbWVudC5saXN0VHlwZSA9PT0gXCJudW1iZXJlZFwiID8gXCJvbFwiIDogXCJ1bFwiLFxuICAgICAgLy8gdGhlIGJhc2UgY2xhc3NcbiAgICAgIG51bGwsXG4gICAgICAvLyB0aGUgY2hpbGRyZW4gdG8gdXNlXG4gICAgICBhcmcuZWxlbWVudC5jaGlsZHJlbixcbiAgICAgIC8vIHRoZSBmdW5jdGlvbiB0byB3cmFwIHRoZSBjaGlsZHJlblxuICAgICAgbnVsbCxcbiAgICAgIC8vIHBhc3MgdGhlIGdpdmVuIGFyZyBvbmNlIGFnYWluXG4gICAgICBhcmcsXG4gICAgKTtcbiAgfVxuXG4gIC8vIHJlZ2lzdGVyIGludG8gdGhlIHJlZ2lzdHJ5XG4gIHJlZ2lzdHJ5LlJFQUNUSUZZLmxpc3QgPSByZWFjdGlmeUxpc3Q7XG4gIHJlZ2lzdHJ5LlNFUklBTElaRS5saXN0ID0gc2VyaWFsaXplTGlzdDtcbiAgcmVnaXN0cnkuQUxMT1dTX0NISUxEUkVOLmxpc3QgPSBbXG4gICAgXCJsaXN0LWl0ZW1cIixcbiAgXTtcbiAgcmVnaXN0cnkuT05fRU1QVFlfRklMTF9XSVRILmxpc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJsaXN0LWl0ZW1cIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBTVEFOREFSRF9QQVJBR1JBUEgoKSxcbiAgICAgICAgXVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICByZWdpc3RyeS5PTl9JTlZBTElEX1RFWFRfV1JBUF9XSVRILmxpc3QgPSAodGV4dDogSVRleHQpID0+IHtcbiAgICByZXR1cm4gW1xuICAgICAgU1RBTkRBUkRfUEFSQUdSQVBIKCksXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwibGlzdC1pdGVtXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgfVxuICAgIF07XG4gIH1cblxuICByZWdpc3RyeS5PTl9JTlZBTElEX0NISUxEUkVOX1dSQVBfV0lUSC5saXN0ID0gKGNoaWxkOiBSaWNoRWxlbWVudCkgPT4ge1xuICAgIGlmIChjaGlsZC50eXBlID09PSBcImlubGluZVwiIHx8IGNoaWxkLnR5cGUgPT09IFwiZmlsZVwiIHx8IGNoaWxkLnR5cGUgPT09IFwibGlua1wiKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBTVEFOREFSRF9QQVJBR1JBUEgoKSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IFwibGlzdC1pdGVtXCIsXG4gICAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICAgIH1cbiAgICAgIF07XG4gICAgfSBlbHNlIGlmIChjaGlsZC50eXBlID09PSBcInRpdGxlXCIgfHwgY2hpbGQudHlwZSA9PT0gXCJwYXJhZ3JhcGhcIikge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IFwibGlzdC1pdGVtXCIsXG4gICAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICAgIH1cbiAgICAgIF07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZWdpc3RyeS5TVVBFUkJMT0NLUy5saXN0ID0gdHJ1ZTtcbiAgcmVnaXN0cnkuREVTRVJJQUxJWkUuYnlUYWcuT0wgPSBkZXNlcmlhbGl6ZUxpc3Q7XG4gIHJlZ2lzdHJ5LkRFU0VSSUFMSVpFLmJ5VGFnLlVMID0gZGVzZXJpYWxpemVMaXN0O1xuICByZWdpc3RyeS5NRVJHQUJMRVMubGlzdCA9IHRydWU7XG4gIHJlZ2lzdHJ5LkNVU1RPTV9OT1JNQUxJWkVSX1BPU1QubGlzdCA9IChcbiAgICBsaXN0OiBJTGlzdCxcbiAgICBwYXRoLFxuICAgIGV4ZWN1dGlvblJvb3QsXG4gICAgcHJpbWFyeUV4ZWN1dGlvbixcbiAgICBzZWNvbmRhcnlFeGVjdXRpb24sXG4gICAgc3BlY2lhbFJ1bGVzLFxuICApID0+IHtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgaW5kZXgrKztcbiAgICAgIGNvbnN0IGNoaWxkID0gbGlzdC5jaGlsZHJlbltpbmRleF07XG4gICAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBzbyBsZXQncyBmaW5kIGluIHRoZSBsaXN0LWl0ZW0gdGhhdCBpcyBoYXMgYXMgY2hpbGRyZW4sIHdoaWNoIHBsYWNlIHRoZSBzZWNvbmQgcGFyYWdyYXBoIGlzXG4gICAgICAvLyBidXQgbm90IHRoZSBmaXJzdFxuICAgICAgY29uc3Qgc2Vjb25kUGFyYWdyYXBoUG9pbnQgPSBjaGlsZC5jaGlsZHJlbi5maW5kSW5kZXgoKG4sIGluZGV4KSA9PiBuLnR5cGUgPT09IFwicGFyYWdyYXBoXCIgJiYgaW5kZXggIT09IDApO1xuXG4gICAgICBpZiAoc2Vjb25kUGFyYWdyYXBoUG9pbnQgIT09IC0xKSB7XG4gICAgICAgIC8vIGRvIGEgc2hhbGxvdyBjb3B5IHdpdGggbm8gY2hpbGRyZW5cbiAgICAgICAgY29uc3QgY2hpbGRQYXRoID0gWy4uLnBhdGgsIGluZGV4XTtcbiAgICAgICAgY29uc3QgbmV3Q2hpbGRQYXRoID0gWy4uLnBhdGgsIGluZGV4ICsgMV07XG4gICAgICAgIHByaW1hcnlFeGVjdXRpb24uY2xvbmVFbGVtZW50QXQoY2hpbGRQYXRoLCBuZXdDaGlsZFBhdGgpO1xuICAgICAgICBzZWNvbmRhcnlFeGVjdXRpb24gJiYgc2Vjb25kYXJ5RXhlY3V0aW9uLmNsb25lRWxlbWVudEF0KGNoaWxkUGF0aCwgbmV3Q2hpbGRQYXRoKTtcblxuICAgICAgICAvLyBub3cgd2UgbmVlZCB0byBtb3ZlIGFsbCB0aGUgY2hpbGRyZW4gZnJvbSB0aGUgc2Vjb25kIHBhcmFncmFwaCBmb3J3YXJkcyBpbnRvIHRoaXMgbmV3IHRhcmdldFxuICAgICAgICAvLyBvdGhlcndpc2UgaXQgd2lsbCBjcmFzaFxuXG4gICAgICAgIC8vIHdlIG5vdyBjb3VudCBhbGwgdGhlIGNoaWxkcmVuIGluc2lkZSB0aGUgbGlzdCBpdGVtIGl0c2VsZlxuICAgICAgICBjb25zdCBhbGxDaGlsZHJlbkNvdW50ID0gY2hpbGQuY2hpbGRyZW4ubGVuZ3RoO1xuXG4gICAgICAgIC8vIGFuZCBub3cgZnJvbSBhaGVhZCB0aGUgc2Vjb25kIHBhcmFncmFwaCBwb2ludCwgd2hpY2ggbWF5IGJlIGVpdGhlciBpbiBmaXJzdFxuICAgICAgICAvLyBvciBzZWNvbmQgd2UgY291bnQgdG8gdGhlIGVuZFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChhbGxDaGlsZHJlbkNvdW50IC0gc2Vjb25kUGFyYWdyYXBoUG9pbnQpOyBpKyspIHtcbiAgICAgICAgICBwcmltYXJ5RXhlY3V0aW9uLm1vdmVOb2RlQXQoWy4uLmNoaWxkUGF0aCwgc2Vjb25kUGFyYWdyYXBoUG9pbnRdLCBbLi4ubmV3Q2hpbGRQYXRoLCBpXSk7XG4gICAgICAgICAgc2Vjb25kYXJ5RXhlY3V0aW9uICYmIHNlY29uZGFyeUV4ZWN1dGlvbi5tb3ZlTm9kZUF0KFsuLi5jaGlsZFBhdGgsIHNlY29uZFBhcmFncmFwaFBvaW50XSwgWy4uLm5ld0NoaWxkUGF0aCwgaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVGhlIGNvbnRhaW5lciByZXByZXNlbnRzIGEgZGl2IGNvbnRhbmVyIHR5cGVcbiAqIG9mIHRoZSBjbGFzcyBjb250YWluZXIgZm9yIHRoZSB0ZXh0IHNwZWNzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUxpc3QgZXh0ZW5kcyBJRWxlbWVudEJhc2Uge1xuICB0eXBlOiBcImxpc3RcIjtcbiAgLyoqXG4gICAqIEEgdGhlIGxpc3QgdHlwZVxuICAgKi9cbiAgbGlzdFR5cGU6IFwibnVtYmVyZWRcIiB8IFwiYnVsbGV0ZWRcIjtcblxuICAvKipcbiAgICogSXQgbmVlZHMgdG8gaGF2ZSBsaXN0IGl0ZW0gYXMgY2hpbGRyZW5cbiAgICovXG4gIGNoaWxkcmVuOiBJTGlzdEl0ZW1bXTtcbn0iLCAiLyoqXG4gKiBDb250YWlucyB0aGUgc2VyaWFsaXphdGlvbiwgcmVhY3RpZmljYXRpb24gYW5kIGRlc2VyaWFsaXphdGlvbiBmdW5jdGlvbnNcbiAqIGZvciB0aGUgbGlzdCBpdGVtIGVsZW1lbnRcbiAqIFxuICogVGhlIGxpc3QgaXRlbSByZXByZXNlbnRzIGJvdGggbGkgY29tcG9uZW50cyBpbnNpZGUgb2wgYW5kIHVsIGxpc3RzXG4gKiBcbiAqIEBtb2R1bGVcbiAqL1xuXG5pbXBvcnQgeyBkZXNlcmlhbGl6ZUNoaWxkcmVuRm9yTm9kZSwgSVJlYWN0aWZ5QXJnLCBJU2VyaWFsaXphdGlvblJlZ2lzdHJ5VHlwZSwgUmljaEVsZW1lbnQgfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IHNlcmlhbGl6ZUVsZW1lbnRCYXNlLCBkZXNlcmlhbGl6ZUVsZW1lbnRCYXNlLCBJRWxlbWVudEJhc2UsIHJlYWN0aWZ5RWxlbWVudEJhc2UgfSBmcm9tIFwiLi4vYmFzZVwiO1xuaW1wb3J0IHsgSUxpbmsgfSBmcm9tIFwiLi9saW5rXCI7XG5pbXBvcnQgeyBTVEFOREFSRF9QQVJBR1JBUEggfSBmcm9tIFwiLi9wYXJhZ3JhcGhcIjtcbmltcG9ydCB7IElUZXh0LCBTVEFOREFSRF9URVhUX05PREUgfSBmcm9tIFwiLi90ZXh0XCI7XG5cbi8qKlxuICogVGhlIGZ1bmN0aW9uIHRoYXQgcmVnaXN0ZXJzIGFuZCBhZGRzIHRoZSBsaXN0LWl0ZW0gZWxlbWVudCBpbiB0aGUgZ2l2ZW5cbiAqIHJlZ2lzdHJ5XG4gKiBAcGFyYW0gcmVnaXN0cnkgdGhlIHJlZ2lzdHJ5IHRvIG1vZGlmeVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJMaXN0SXRlbShyZWdpc3RyeTogSVNlcmlhbGl6YXRpb25SZWdpc3RyeVR5cGUpIHtcblxuICAvKipcbiAgICogVGhlIGZ1bmN0aW9uIHRoYXQgc2VyaWFsaXplcyB0aGUgbGlzdC1pdGVtIGVsZW1lbnQgaW50byBIVE1MXG4gICAqIEBwYXJhbSBsaSB0aGUgbGlzdCBpdGVtIGVsZW1lbnRcbiAgICogQHJldHVybnMgYW4gSFRNTCBub2RlXG4gICAqL1xuICBmdW5jdGlvbiBzZXJpYWxpemVMaXN0SXRlbShsaTogSUxpc3RJdGVtKSB7XG4gICAgLy8gdmVyeSBzaW1wbGUgc3RyYWlnaHRmb3J3YXJkIGNvbnZlcnNpb25cbiAgICAvLyBsaSBpcyBub3RoaW5nIGJ1dCBhIGNvbnRhaW5lciBmb3IgdGhlIHByaW1hcnkgbGlzdFxuICAgIHJldHVybiBzZXJpYWxpemVFbGVtZW50QmFzZShyZWdpc3RyeSwgbGksIFwibGlcIiwgbnVsbCwgbnVsbCwgbGkuY2hpbGRyZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgSFRNTCBlbGVtZW50IHRoYXQgaXMgYWxyZWFkeSBjb25zaWRlcmVkIGEgbGlzdCBpdGVtXG4gICAqIGVsZW1lbnQgaW50byB0aGUgZ2l2ZW4gcmljaCBlbGVtZW50IGZvcm1cbiAgICogQHBhcmFtIG5vZGUgdGhlIG5vZGUgaW4gcXVlc3Rpb25cbiAgICogQHJldHVybnMgYSBsaXN0LWl0ZW0gZWxlbWVudCBzdHJ1Y3R1cmVcbiAgICovXG4gIGZ1bmN0aW9uIGRlc2VyaWFsaXplTGlzdEl0ZW0obm9kZTogSFRNTEVsZW1lbnQpOiBJTGlzdEl0ZW0ge1xuICAgIC8vIGZpcnN0IHdlIHByZXBhcmUgdGhlIGJhc2VcbiAgICBjb25zdCBiYXNlID0gZGVzZXJpYWxpemVFbGVtZW50QmFzZShub2RlKTtcbiAgICAvLyB0aGVuIHdlIGRlc2VyaWFsaXplIGFsbCB0aGUgY2hpbGQgbm9kZXMgd2l0aCB0aGUgZ2VuZXJpYyBmdW5jdGlvblxuICAgIGNvbnN0IGNoaWxkcmVuID0gZGVzZXJpYWxpemVDaGlsZHJlbkZvck5vZGUobm9kZSkgYXMgYW55O1xuXG4gICAgLy8gYW5kIG5vdyB3ZSBjYW4gZG8gdGhpc1xuICAgIGNvbnN0IGxpOiBJTGlzdEl0ZW0gPSB7XG4gICAgICAuLi5iYXNlLFxuICAgICAgdHlwZTogXCJsaXN0LWl0ZW1cIixcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbi5sZW5ndGggPyBjaGlsZHJlbiA6IFtTVEFOREFSRF9URVhUX05PREUoKV0sXG4gICAgfVxuXG4gICAgLy8gYW5kIHJldHVybiBpdFxuICAgIHJldHVybiBsaTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFjdGlmaWVzIHRoZSBsaXN0IGl0ZW0gdGhhdCBpcyBhbHJlYWR5XG4gICAqIGludG8gYSByaWNoIGVsZW1lbnQgZm9ybVxuICAgKiBAcGFyYW0gYXJnIHRoZSByZWFjdGlmaWNhdGlvbiBhcmdcbiAgICovXG4gIGZ1bmN0aW9uIHJlYWN0aWZ5TGlzdEl0ZW0oYXJnOiBJUmVhY3RpZnlBcmc8SUxpc3RJdGVtPikge1xuICAgIC8vIHdlIHBhc3MgaXQgdG8gdGhlIGJhc2UgZnVuY3Rpb25cbiAgICByZXR1cm4gcmVhY3RpZnlFbGVtZW50QmFzZShcbiAgICAgIC8vIHRoZSByZWdpc3RyeSBpbiBxdWVzdGlvblxuICAgICAgcmVnaXN0cnksXG4gICAgICAvLyB3ZSB3aWxsIHVzZSBhIGxpIGZvciB0aGUgZWxlbWVudCB0YWdcbiAgICAgIFwibGlcIixcbiAgICAgIC8vIG5vIGJhc2UgY2xhc3NcbiAgICAgIG51bGwsXG4gICAgICAvLyB0aGUgY2hpbGRyZW4gd2UgYXJlIHVzaW5nXG4gICAgICBhcmcuZWxlbWVudC5jaGlsZHJlbixcbiAgICAgIC8vIG5vIHdyYXAgY2hpbGRyZW4gZnVuY3Rpb25cbiAgICAgIG51bGwsXG4gICAgICAvLyB0aGUgYXJnIGFnYWluXG4gICAgICBhcmcsXG4gICAgKTtcbiAgfVxuXG4gIC8vIHJlZ2lzdGVyIHRoZSBsaXN0IGl0ZW1cbiAgcmVnaXN0cnkuUkVBQ1RJRllbXCJsaXN0LWl0ZW1cIl0gPSByZWFjdGlmeUxpc3RJdGVtO1xuICByZWdpc3RyeS5TRVJJQUxJWkVbXCJsaXN0LWl0ZW1cIl0gPSBzZXJpYWxpemVMaXN0SXRlbTtcbiAgcmVnaXN0cnkuQUxMT1dTX0NISUxEUkVOW1wibGlzdC1pdGVtXCJdID0gW1xuICAgIFwibGlzdFwiLFxuICAgIFwicGFyYWdyYXBoXCIsXG4gIF07XG4gIHJlZ2lzdHJ5Lk9OX0lOVkFMSURfVEVYVF9XUkFQX1dJVEhbXCJsaXN0LWl0ZW1cIl0gPSAodGV4dDogSVRleHQpID0+IHtcbiAgICByZXR1cm4gW1NUQU5EQVJEX1BBUkFHUkFQSCgpXTtcbiAgfVxuICByZWdpc3RyeS5TVVBFUkJMT0NLU1tcImxpc3QtaXRlbVwiXSA9IHRydWU7XG4gIHJlZ2lzdHJ5LkRFU0VSSUFMSVpFLmJ5VGFnLkxJID0gZGVzZXJpYWxpemVMaXN0SXRlbTtcbiAgcmVnaXN0cnkuQ1VTVE9NX05PUk1BTElaRVJfUE9TVFtcImxpc3QtaXRlbVwiXSA9IChcbiAgICBsaXN0SXRlbTogSUxpc3RJdGVtLFxuICAgIHBhdGgsXG4gICAgZXhlY3V0aW9uUm9vdCxcbiAgICBwcmltYXJ5RXhlY3V0aW9uLFxuICAgIHNlY29uZGFyeUV4ZWN1dGlvbixcbiAgICBzcGVjaWFsUnVsZXMsXG4gICkgPT4ge1xuICAgIGlmIChsaXN0SXRlbS5jaGlsZHJlblswXS50eXBlID09PSBcImxpc3RcIikge1xuICAgICAgcHJpbWFyeUV4ZWN1dGlvbi5pbnNlcnROb2RlQXQocGF0aCwgU1RBTkRBUkRfUEFSQUdSQVBIKCksIDApO1xuICAgICAgc2Vjb25kYXJ5RXhlY3V0aW9uICYmIHNlY29uZGFyeUV4ZWN1dGlvbi5pbnNlcnROb2RlQXQocGF0aCwgU1RBTkRBUkRfUEFSQUdSQVBIKCksIDApO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFRoZSBjb250YWluZXIgcmVwcmVzZW50cyBhIGRpdiBjb250YW5lciB0eXBlXG4gKiBvZiB0aGUgY2xhc3MgY29udGFpbmVyIGZvciB0aGUgdGV4dCBzcGVjc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIElMaXN0SXRlbSBleHRlbmRzIElFbGVtZW50QmFzZSB7XG4gIHR5cGU6IFwibGlzdC1pdGVtXCI7XG5cbiAgLyoqXG4gICAqIEl0IG5lZWRzIHRvIGhhdmUgbGlzdCBpdGVtIGFzIGNoaWxkcmVuXG4gICAqL1xuICBjaGlsZHJlbjogQXJyYXk8UmljaEVsZW1lbnQ+O1xufSIsICIvKipcbiAqIENvbnRhaW5zIHRoZSBzZXJpYWxpemF0aW9uLCByZWFjdGlmaWNhdGlvbiBhbmQgZGVzZXJpYWxpemF0aW9uIGZ1bmN0aW9uc1xuICogZm9yIHRoZSBpbmxpbmUgZWxlbWVudCwgd2hpY2ggaXMgYmFzaWNhbGx5IGEgc3BhbiB3aGljaCBjb250YWlucyBvbmx5IHRleHRcbiAqIGl0J3MgcHJpbWFyaWx5IHVzZWQgZm9yIHRoZSB0ZW1wbGF0ZWQgY29tcG9uZW50c1xuICogXG4gKiBAbW9kdWxlXG4gKi9cblxuaW1wb3J0IHsgSVJlYWN0aWZ5QXJnLCBJU2VyaWFsaXphdGlvblJlZ2lzdHJ5VHlwZSwgZGVzZXJpYWxpemVDaGlsZHJlbkZvck5vZGUgfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IHNlcmlhbGl6ZUVsZW1lbnRCYXNlLCBkZXNlcmlhbGl6ZUVsZW1lbnRCYXNlLCBJRWxlbWVudEJhc2UsIHJlYWN0aWZ5RWxlbWVudEJhc2UgfSBmcm9tIFwiLi4vYmFzZVwiO1xuaW1wb3J0IHsgSVRleHQsIFNUQU5EQVJEX1RFWFRfTk9ERSB9IGZyb20gXCIuL3RleHRcIjtcblxuLyoqXG4gKiBUaGUgZnVuY3Rpb24gdGhhdCByZWdpc3RlcnMgYW5kIGFkZHMgdGhlIGlubGluZSBpbiB0aGUgZ2l2ZW5cbiAqIHJlaWdzdHJ5XG4gKiBAcGFyYW0gcmVnaXN0cnkgdGhlIHJlZ2lzdHJ5IHRvIG1vZGlmeVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJJbmxpbmUocmVnaXN0cnk6IElTZXJpYWxpemF0aW9uUmVnaXN0cnlUeXBlKSB7XG5cbiAgLyoqXG4gICAqIFRoZSBmdW5jdGlvbiB0aGF0IHNlcmlhbGl6ZXMgdGhlIGlubGluZSBpbnRvIEhUTUxcbiAgICogQHBhcmFtIGlubGluZSB0aGUgaW5saW5lIGluIHF1ZXN0aW9uXG4gICAqIEByZXR1cm5zIGFuIEhUTUwgRWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gc2VyaWFsaXplSW5saW5lKGlubGluZTogSUlubGluZSkge1xuICAgIC8vIGNhbGxzIHRoZSBzZXJpYWxpemUgZWxlbWVudCBiYXNlIGZ1bmN0aW9uXG4gICAgcmV0dXJuIHNlcmlhbGl6ZUVsZW1lbnRCYXNlKFxuICAgICAgLy8gdGhlIHJlZ2lzdHJ5XG4gICAgICByZWdpc3RyeSxcbiAgICAgIC8vIHRoZSBpbmxpbmUgaW4gcXVlc3Rpb25cbiAgICAgIGlubGluZSxcbiAgICAgIC8vIHRoZSBlbGVtZW50IHNob3VsZCBiZSBhIHNwYW4gZWxlbWVudCB0eXBlXG4gICAgICBcInNwYW5cIixcbiAgICAgIC8vIGlubGluZSBjbGFzc1xuICAgICAgXCJpbmxpbmVcIixcbiAgICAgIC8vIG5vIHNwZWNpYWwgYXR0cmlidXRlc1xuICAgICAgbnVsbCxcbiAgICAgIC8vIHRoZSBjaGlsZHJlbiBpbnNpZGUgdGhlIGlubGluZSwgdGhlc2UgYXJlIHJpY2ggZWxlbWVudHNcbiAgICAgIGlubGluZS5jaGlsZHJlbixcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgSFRNTCBlbGVtZW50IHRoYXQgaXMgYWxyZWFkeSBjb25zaWRlcmVkIGEgaW5saW5lXG4gICAqIGludG8gdGhlIElJbmxpbmUgZm9ybVxuICAgKiBAcGFyYW0gbm9kZSB0aGUgbm9kZSBpbiBxdWVzdGlvblxuICAgKiBAcmV0dXJucyBhIGlubGluZSBlbGVtZW50IHN0cnVjdHVyZVxuICAgKi9cbiAgZnVuY3Rpb24gZGVzZXJpYWxpemVJbmxpbmUobm9kZTogSFRNTFNwYW5FbGVtZW50KTogSUlubGluZSB7XG4gICAgLy8gZmlyc3Qgd2UgdGFrZSB0aGUgYmFzZVxuICAgIGNvbnN0IGJhc2UgPSBkZXNlcmlhbGl6ZUVsZW1lbnRCYXNlKG5vZGUpO1xuXG4gICAgY29uc3QgY2hpbGRyZW4gPSBkZXNlcmlhbGl6ZUNoaWxkcmVuRm9yTm9kZShub2RlKSBhcyBJVGV4dFtdO1xuXG4gICAgLy8gbm93IHdlIGNhbiBidWlsZCB0aGUgaW5saW5lIGl0c2VsZlxuICAgIGNvbnN0IGlubGluZTogSUlubGluZSA9IHtcbiAgICAgIC4uLmJhc2UsXG4gICAgICB0eXBlOiBcImlubGluZVwiLFxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLmxlbmd0aCA/IGNoaWxkcmVuIDogW1NUQU5EQVJEX1RFWFRfTk9ERSgpXSxcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gaXRcbiAgICByZXR1cm4gaW5saW5lO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWN0aWZpZXMgdGhlIGlubGluZSB0aGF0IGlzIGFscmVhZHlcbiAgICogaW50byBhIHJpY2ggZWxlbWVudCBmb3JtXG4gICAqIEBwYXJhbSBhcmcgdGhlIHJlYWN0aWZpY2F0aW9uIGFyZ1xuICAgKi9cbiAgZnVuY3Rpb24gcmVhY3RpZnlJbmxpbmUoYXJnOiBJUmVhY3RpZnlBcmc8SUlubGluZT4pIHtcbiAgICAvLyB3ZSByZXRydW4gZnJvbSB0aGUgYmFzZVxuICAgIHJldHVybiByZWFjdGlmeUVsZW1lbnRCYXNlKFxuICAgICAgLy8gdGhlIHJlZ2lzdHJ5XG4gICAgICByZWdpc3RyeSxcbiAgICAgIC8vIHRoZSBzcGFuIGVsZW1lbnRcbiAgICAgIFwic3BhblwiLFxuICAgICAgLy8gd2UgcGFzcyBlaXRoZXIgdGhlIGlubGluZSB0eXBlIHByZWZpeGVkIG9yIHRoZSBpbmxpbmUgY2xhc3MgaXRzZWxmXG4gICAgICBcImlubGluZVwiLFxuICAgICAgLy8gdGhlIGNoaWxkcmVuIG9mIHRoZSBpbmxpbmVcbiAgICAgIGFyZy5lbGVtZW50LmNoaWxkcmVuLFxuICAgICAgLy8gbm8gd3JhcCBjaGlsZHJlbiBmdW5jdGlvblxuICAgICAgbnVsbCxcbiAgICAgIC8vIGFuZCB0aGUgYXJnIG9mIHJlYWN0aWZpY2F0aW9uXG4gICAgICBhcmcsXG4gICAgKTtcbiAgfVxuXG4gIC8vIHJlZ2lzdGVyIGluIHRoZSByZWdpc3RyeVxuICByZWdpc3RyeS5SRUFDVElGWS5pbmxpbmUgPSByZWFjdGlmeUlubGluZTtcbiAgcmVnaXN0cnkuU0VSSUFMSVpFLmlubGluZSA9IHNlcmlhbGl6ZUlubGluZTtcbiAgcmVnaXN0cnkuSU5MSU5FUy5pbmxpbmUgPSB0cnVlO1xuXG4gIHJlZ2lzdHJ5LkRFU0VSSUFMSVpFLmJ5Q2xhc3NOYW1lLmlubGluZSA9IGRlc2VyaWFsaXplSW5saW5lO1xuICByZWdpc3RyeS5NRVJHQUJMRVMuaW5saW5lID0gdHJ1ZTtcbn1cblxuLyoqXG4gKiBUaGUgaW5saW5lIHJlcHJlc2VudHMgYSBzcGFuIGlubGluZSB0eXBlXG4gKiBmb3IgdGhlIHRleHQgc3BlY3NcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJSW5saW5lIGV4dGVuZHMgSUVsZW1lbnRCYXNlIHtcbiAgdHlwZTogXCJpbmxpbmVcIjtcblxuICAvKipcbiAgICogSXQgY2FuIGhhdmUgYXMgbWFueSBjaGlsZHJlbiBhcyBpdCByZXF1aXJlc1xuICAgKiBidXQgbm90IHRleHQgZGlyZWN0bHlcbiAgICovXG4gIGNoaWxkcmVuOiBJVGV4dFtdO1xufVxuIiwgIi8qKlxuICogQ29udGFpbnMgdGhlIHNlcmlhbGl6YXRpb24sIHJlYWN0aWZpY2F0aW9uIGFuZCBkZXNlcmlhbGl6YXRpb24gZnVuY3Rpb25zXG4gKiBmb3IgdGhlIGNvbnRhaW5lciBlbGVtZW50LCB3aGljaCBpcyBiYXNpY2FsbHkgYSBkaXYgd2l0aCBhIGNvbnRhaW5lclxuICogY2xhc3MgbmFtZVxuICogXG4gKiBAbW9kdWxlXG4gKi9cblxuaW1wb3J0IHsgSVJlYWN0aWZ5QXJnLCBJU2VyaWFsaXphdGlvblJlZ2lzdHJ5VHlwZSwgUmljaEVsZW1lbnQsIGRlc2VyaWFsaXplQ2hpbGRyZW5Gb3JOb2RlIH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBUQUJMRV9DTEFTU19QUkVGSVggfSBmcm9tIFwiLi4vLi4vc2FuaXRpemVyXCI7XG5pbXBvcnQgeyBzZXJpYWxpemVFbGVtZW50QmFzZSwgZGVzZXJpYWxpemVFbGVtZW50QmFzZSwgSUVsZW1lbnRCYXNlLCByZWFjdGlmeUVsZW1lbnRCYXNlIH0gZnJvbSBcIi4uL2Jhc2VcIjtcbmltcG9ydCB7IElDb250YWluZXIgfSBmcm9tIFwiLi9jb250YWluZXJcIjtcbmltcG9ydCB7IElDdXN0b20gfSBmcm9tIFwiLi9jdXN0b21cIjtcbmltcG9ydCB7IElGaWxlIH0gZnJvbSBcIi4vZmlsZVwiO1xuaW1wb3J0IHsgSUltYWdlIH0gZnJvbSBcIi4vaW1hZ2VcIjtcbmltcG9ydCB7IElMaXN0IH0gZnJvbSBcIi4vbGlzdFwiO1xuaW1wb3J0IHsgSVBhcmFncmFwaCwgU1RBTkRBUkRfUEFSQUdSQVBIIH0gZnJvbSBcIi4vcGFyYWdyYXBoXCI7XG5pbXBvcnQgeyBJUXVvdGUgfSBmcm9tIFwiLi9xdW90ZVwiO1xuaW1wb3J0IHsgSVRleHQgfSBmcm9tIFwiLi90ZXh0XCI7XG5pbXBvcnQgeyBJVGl0bGUgfSBmcm9tIFwiLi90aXRsZVwiO1xuaW1wb3J0IHsgSVZpZGVvIH0gZnJvbSBcIi4vdmlkZW9cIjtcblxuLyoqXG4gKiBUaGUgZnVuY3Rpb24gdGhhdCByZWdpc3RlcnMgYW5kIGFkZHMgdGhlIGNvbnRhaW5lciBpbiB0aGUgZ2l2ZW5cbiAqIHJlaWdzdHJ5XG4gKiBAcGFyYW0gcmVnaXN0cnkgdGhlIHJlZ2lzdHJ5IHRvIG1vZGlmeVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJUYWJsZUVsZW1lbnRzKHJlZ2lzdHJ5OiBJU2VyaWFsaXphdGlvblJlZ2lzdHJ5VHlwZSkge1xuXG4gIC8qKlxuICAgKiBUaGUgZnVuY3Rpb24gdGhhdCBzZXJpYWxpemVzIHRoZSBjb250YWluZXIgaW50byBIVE1MXG4gICAqIEBwYXJhbSBjb250YWluZXIgdGhlIGNvbnRhaW5lciBpbiBxdWVzdGlvblxuICAgKiBAcmV0dXJucyBhbiBIVE1MIEVsZW1lbnRcbiAgICovXG4gIGZ1bmN0aW9uIHNlcmlhbGl6ZVRhYmxlRWxlbWVudCh3aGljaDogc3RyaW5nLCBlbGVtZW50OiBSaWNoRWxlbWVudCkge1xuICAgIC8vIGNhbGxzIHRoZSBzZXJpYWxpemUgZWxlbWVudCBiYXNlIGZ1bmN0aW9uXG4gICAgcmV0dXJuIHNlcmlhbGl6ZUVsZW1lbnRCYXNlKFxuICAgICAgLy8gdGhlIHJlZ2lzdHJ5XG4gICAgICByZWdpc3RyeSxcbiAgICAgIC8vIHRoZSBjb250YWluZXIgaW4gcXVlc3Rpb25cbiAgICAgIGVsZW1lbnQgYXMgSUVsZW1lbnRCYXNlLFxuICAgICAgLy8gdGhlIGVsZW1lbnQgc2hvdWxkIGJlIGEgZGl2IGVsZW1lbnQgdHlwZVxuICAgICAgd2hpY2gsXG4gICAgICAvLyB0aGUgY2xhc3Mgd2lsbCBiZSBjb250YWluZXIgY2xhc3Mgb3IgdGhlIHByZWZpeGVkIGNsYXNzIGlmIGEgZ2l2ZW4gY29udGFpbmVyIHR5cGVcbiAgICAgIC8vIGV4aXN0c1xuICAgICAgd2hpY2ggPT09IFwidGFibGVcIiA/ICgoZWxlbWVudCBhcyBJVGFibGUpLnRhYmxlVHlwZSA/IFRBQkxFX0NMQVNTX1BSRUZJWCArIChlbGVtZW50IGFzIElUYWJsZSkudGFibGVUeXBlIDogbnVsbCkgOiBudWxsLFxuICAgICAgLy8gbm8gc3BlY2lhbCBhdHRyaWJ1dGVzXG4gICAgICBudWxsLFxuICAgICAgLy8gdGhlIGNoaWxkcmVuIGluc2lkZSB0aGUgY29udGFpbmVyLCB0aGVzZSBhcmUgcmljaCBlbGVtZW50c1xuICAgICAgZWxlbWVudC5jaGlsZHJlbixcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgSFRNTCBlbGVtZW50IHRoYXQgaXMgYWxyZWFkeSBjb25zaWRlcmVkIGEgY29udGFpbmVyXG4gICAqIGludG8gdGhlIElDb250YWluZXIgZm9ybVxuICAgKiBAcGFyYW0gbm9kZSB0aGUgbm9kZSBpbiBxdWVzdGlvblxuICAgKiBAcmV0dXJucyBhIGNvbnRhaW5lciBlbGVtZW50IHN0cnVjdHVyZVxuICAgKi9cbiAgZnVuY3Rpb24gZGVzZXJpYWxpemVUYWJsZUVsZW1lbnQod2hpY2g6IHN0cmluZywgbm9kZTogSFRNTEVsZW1lbnQpOiBSaWNoRWxlbWVudCB7XG4gICAgLy8gZmlyc3Qgd2UgdGFrZSB0aGUgYmFzZVxuICAgIGNvbnN0IGJhc2UgPSBkZXNlcmlhbGl6ZUVsZW1lbnRCYXNlKG5vZGUpO1xuXG4gICAgLy8gbm93IHdlIGNhbiBidWlsZCB0aGUgY29udGFpbmVyIGl0c2VsZlxuICAgIGNvbnN0IGVsZW1lbnQ6IFJpY2hFbGVtZW50ID0ge1xuICAgICAgLi4uYmFzZSxcbiAgICAgIHR5cGU6IHdoaWNoIGFzIGFueSxcbiAgICAgIGNoaWxkcmVuOiBkZXNlcmlhbGl6ZUNoaWxkcmVuRm9yTm9kZShub2RlKSBhcyBhbnksXG4gICAgfVxuXG4gICAgaWYgKHdoaWNoID09PSBcInRhYmxlXCIpIHtcbiAgICAgIGxldCB0YWJsZVR5cGU6IHN0cmluZyA9IG51bGw7XG4gICAgICBub2RlLmNsYXNzTGlzdC5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIGlmIChjLnN0YXJ0c1dpdGgoVEFCTEVfQ0xBU1NfUFJFRklYKSkge1xuICAgICAgICAgIHRhYmxlVHlwZSA9IGMuc3Vic3RyKFRBQkxFX0NMQVNTX1BSRUZJWC5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgKGVsZW1lbnQgYXMgYW55KS50YWJsZVR5cGUgPSB0YWJsZVR5cGU7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIGl0XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmVhY3RpZmllcyB0aGUgY29udGFpbmVyIHRoYXQgaXMgYWxyZWFkeVxuICAgKiBpbnRvIGEgcmljaCBlbGVtZW50IGZvcm1cbiAgICogQHBhcmFtIGFyZyB0aGUgcmVhY3RpZmljYXRpb24gYXJnXG4gICAqL1xuICBmdW5jdGlvbiByZWFjdGlmeVRhYmxlRWxlbWVudCh3aGljaDogc3RyaW5nLCBhcmc6IElSZWFjdGlmeUFyZzxSaWNoRWxlbWVudD4pIHtcbiAgICAvLyB3ZSByZXRydW4gZnJvbSB0aGUgYmFzZVxuICAgIHJldHVybiByZWFjdGlmeUVsZW1lbnRCYXNlKFxuICAgICAgLy8gdGhlIHJlZ2lzdHJ5XG4gICAgICByZWdpc3RyeSxcbiAgICAgIC8vIHRoZSB0YWJsZSBlbGVtZW50XG4gICAgICB3aGljaCxcbiAgICAgIC8vIG5vIGNsYXNzXG4gICAgICB3aGljaCA9PT0gXCJ0YWJsZVwiID8gKChhcmcuZWxlbWVudCBhcyBJVGFibGUpLnRhYmxlVHlwZSA/IFRBQkxFX0NMQVNTX1BSRUZJWCArIChhcmcuZWxlbWVudCBhcyBJVGFibGUpLnRhYmxlVHlwZSA6IG51bGwpIDogbnVsbCxcbiAgICAgIC8vIHRoZSBjaGlsZHJlbiBvZiB0aGUgY29udGFpbmVyXG4gICAgICBhcmcuZWxlbWVudC5jaGlsZHJlbixcbiAgICAgIC8vIG5vIHdyYXAgY2hpbGRyZW4gZnVuY3Rpb25cbiAgICAgIG51bGwsXG4gICAgICAvLyBhbmQgdGhlIGFyZyBvZiByZWFjdGlmaWNhdGlvblxuICAgICAgYXJnLFxuICAgICk7XG4gIH1cblxuICAvLyByZWdpc3RlciBpbiB0aGUgcmVnaXN0cnlcbiAgcmVnaXN0cnkuUkVBQ1RJRlkudGFibGUgPSByZWFjdGlmeVRhYmxlRWxlbWVudC5iaW5kKG51bGwsIFwidGFibGVcIik7XG4gIHJlZ2lzdHJ5LlJFQUNUSUZZLnRoZWFkID0gcmVhY3RpZnlUYWJsZUVsZW1lbnQuYmluZChudWxsLCBcInRoZWFkXCIpO1xuICByZWdpc3RyeS5SRUFDVElGWS50Ym9keSA9IHJlYWN0aWZ5VGFibGVFbGVtZW50LmJpbmQobnVsbCwgXCJ0Ym9keVwiKTtcbiAgcmVnaXN0cnkuUkVBQ1RJRlkudGZvb3QgPSByZWFjdGlmeVRhYmxlRWxlbWVudC5iaW5kKG51bGwsIFwidGZvb3RcIik7XG4gIHJlZ2lzdHJ5LlJFQUNUSUZZLnRyID0gcmVhY3RpZnlUYWJsZUVsZW1lbnQuYmluZChudWxsLCBcInRyXCIpO1xuICByZWdpc3RyeS5SRUFDVElGWS50ZCA9IHJlYWN0aWZ5VGFibGVFbGVtZW50LmJpbmQobnVsbCwgXCJ0ZFwiKTtcbiAgcmVnaXN0cnkuUkVBQ1RJRlkudGggPSByZWFjdGlmeVRhYmxlRWxlbWVudC5iaW5kKG51bGwsIFwidGhcIik7XG5cbiAgcmVnaXN0cnkuU0VSSUFMSVpFLnRhYmxlID0gc2VyaWFsaXplVGFibGVFbGVtZW50LmJpbmQobnVsbCwgXCJ0YWJsZVwiKTtcbiAgcmVnaXN0cnkuU0VSSUFMSVpFLnRoZWFkID0gc2VyaWFsaXplVGFibGVFbGVtZW50LmJpbmQobnVsbCwgXCJ0aGVhZFwiKTtcbiAgcmVnaXN0cnkuU0VSSUFMSVpFLnRib2R5ID0gc2VyaWFsaXplVGFibGVFbGVtZW50LmJpbmQobnVsbCwgXCJ0Ym9keVwiKTtcbiAgcmVnaXN0cnkuU0VSSUFMSVpFLnRmb290ID0gc2VyaWFsaXplVGFibGVFbGVtZW50LmJpbmQobnVsbCwgXCJ0Zm9vdFwiKTtcbiAgcmVnaXN0cnkuU0VSSUFMSVpFLnRyID0gc2VyaWFsaXplVGFibGVFbGVtZW50LmJpbmQobnVsbCwgXCJ0clwiKTtcbiAgcmVnaXN0cnkuU0VSSUFMSVpFLnRkID0gc2VyaWFsaXplVGFibGVFbGVtZW50LmJpbmQobnVsbCwgXCJ0ZFwiKTtcbiAgcmVnaXN0cnkuU0VSSUFMSVpFLnRoID0gc2VyaWFsaXplVGFibGVFbGVtZW50LmJpbmQobnVsbCwgXCJ0aFwiKTtcblxuICByZWdpc3RyeS5TVVBFUkJMT0NLUy50YWJsZSA9IHRydWU7XG4gIHJlZ2lzdHJ5LlNVUEVSQkxPQ0tTLnRoZWFkID0gdHJ1ZTtcbiAgcmVnaXN0cnkuU1VQRVJCTE9DS1MudGJvZHkgPSB0cnVlO1xuICByZWdpc3RyeS5TVVBFUkJMT0NLUy50Zm9vdCA9IHRydWU7XG4gIHJlZ2lzdHJ5LlNVUEVSQkxPQ0tTLnRyID0gdHJ1ZTtcbiAgcmVnaXN0cnkuU1VQRVJCTE9DS1MudGQgPSB0cnVlO1xuICByZWdpc3RyeS5TVVBFUkJMT0NLUy50aCA9IHRydWU7XG5cbiAgcmVnaXN0cnkuQUxMT1dTX0NISUxEUkVOLnRhYmxlID0gW1xuICAgIFwidGhlYWRcIixcbiAgICBcInRib2R5XCIsXG4gICAgXCJ0Zm9vdFwiLFxuICBdO1xuICByZWdpc3RyeS5PTl9JTlZBTElEX0NISUxEUkVOX1dSQVBfV0lUSC50YWJsZSA9IChjaGlsZDogUmljaEVsZW1lbnQpID0+IHtcbiAgICBpZiAoY2hpbGQudHlwZSA9PT0gXCJ0clwiKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogXCJ0Ym9keVwiLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgfVxuICAgICAgXTtcbiAgICB9IGVsc2UgaWYgKGNoaWxkLnR5cGUgPT09IFwidGRcIiB8fCBjaGlsZC50eXBlID09PSBcInRoXCIpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcInRyXCIsXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogXCJ0Ym9keVwiLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgfVxuICAgICAgXTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgcmVnaXN0cnkuQUxMT1dTX0NISUxEUkVOLnRkLmluY2x1ZGVzKGNoaWxkLnR5cGUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogXCJ0ZFwiLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IFwidHJcIixcbiAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcInRib2R5XCIsXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICB9XG4gICAgICBdO1xuICAgIH0gZWxzZSBpZiAoY2hpbGQudHlwZSA9PT0gXCJpbmxpbmVcIiB8fCBjaGlsZC50eXBlID09PSBcImZpbGVcIiB8fCBjaGlsZC50eXBlID09PSBcImxpbmtcIikge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgU1RBTkRBUkRfUEFSQUdSQVBIKCksXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcInRkXCIsXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogXCJ0clwiLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IFwidGJvZHlcIixcbiAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgIH1cbiAgICAgIF07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJlZ2lzdHJ5LkFMTE9XU19DSElMRFJFTi50aGVhZCA9IFtcbiAgICBcInRyXCIsXG4gIF07XG4gIHJlZ2lzdHJ5LkFMTE9XU19DSElMRFJFTi50Zm9vdCA9IFtcbiAgICBcInRyXCIsXG4gIF07XG4gIHJlZ2lzdHJ5Lk9OX0lOVkFMSURfQ0hJTERSRU5fV1JBUF9XSVRILnRoZWFkID0gKGNoaWxkOiBSaWNoRWxlbWVudCkgPT4ge1xuICAgIGlmIChjaGlsZC50eXBlID09PSBcInRkXCIgfHwgY2hpbGQudHlwZSA9PT0gXCJ0aFwiKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogXCJ0clwiLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHJlZ2lzdHJ5LkFMTE9XU19DSElMRFJFTi50aC5pbmNsdWRlcyhjaGlsZC50eXBlKVxuICAgICkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IFwidGhcIixcbiAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcInRyXCIsXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICB9XG4gICAgICBdO1xuICAgIH0gZWxzZSBpZiAoY2hpbGQudHlwZSA9PT0gXCJpbmxpbmVcIiB8fCBjaGlsZC50eXBlID09PSBcImZpbGVcIiB8fCBjaGlsZC50eXBlID09PSBcImxpbmtcIikge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgU1RBTkRBUkRfUEFSQUdSQVBIKCksXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcInRoXCIsXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogXCJ0clwiLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgfVxuICAgICAgXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmVnaXN0cnkuQUxMT1dTX0NISUxEUkVOLnRib2R5ID0gW1xuICAgIFwidHJcIixcbiAgXTtcbiAgcmVnaXN0cnkuT05fSU5WQUxJRF9DSElMRFJFTl9XUkFQX1dJVEgudGJvZHkgPSByZWdpc3RyeS5PTl9JTlZBTElEX0NISUxEUkVOX1dSQVBfV0lUSC50aGVhZDtcbiAgcmVnaXN0cnkuT05fSU5WQUxJRF9DSElMRFJFTl9XUkFQX1dJVEgudGZvb3QgPSByZWdpc3RyeS5PTl9JTlZBTElEX0NISUxEUkVOX1dSQVBfV0lUSC50aGVhZDtcblxuICByZWdpc3RyeS5BTExPV1NfQ0hJTERSRU4udHIgPSBbXG4gICAgXCJ0ZFwiLFxuICAgIFwidGhcIixcbiAgXTtcbiAgcmVnaXN0cnkuT05fSU5WQUxJRF9DSElMRFJFTl9XUkFQX1dJVEgudHIgPSAoY2hpbGQ6IFJpY2hFbGVtZW50KSA9PiB7XG4gICAgaWYgKFxuICAgICAgcmVnaXN0cnkuQUxMT1dTX0NISUxEUkVOLnRkLmluY2x1ZGVzKGNoaWxkLnR5cGUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogXCJ0ZFwiLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICB9LFxuICAgICAgXVxuICAgIH0gZWxzZSBpZiAoY2hpbGQudHlwZSA9PT0gXCJpbmxpbmVcIiB8fCBjaGlsZC50eXBlID09PSBcImZpbGVcIiB8fCBjaGlsZC50eXBlID09PSBcImxpbmtcIikge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgU1RBTkRBUkRfUEFSQUdSQVBIKCksXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcInRkXCIsXG4gICAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmVnaXN0cnkuQUxMT1dTX0NISUxEUkVOLnRkID0gcmVnaXN0cnkuQUxMT1dTX0NISUxEUkVOLmNvbnRhaW5lcjtcbiAgcmVnaXN0cnkuQUxMT1dTX0NISUxEUkVOLnRoID0gcmVnaXN0cnkuQUxMT1dTX0NISUxEUkVOLmNvbnRhaW5lcjtcbiAgcmVnaXN0cnkuT05fSU5WQUxJRF9DSElMRFJFTl9XUkFQX1dJVEgudGQgPSByZWdpc3RyeS5PTl9JTlZBTElEX0NISUxEUkVOX1dSQVBfV0lUSC5jb250YWluZXI7XG4gIHJlZ2lzdHJ5Lk9OX0lOVkFMSURfQ0hJTERSRU5fV1JBUF9XSVRILnRoID0gcmVnaXN0cnkuT05fSU5WQUxJRF9DSElMRFJFTl9XUkFQX1dJVEguY29udGFpbmVyO1xuXG4gIHJlZ2lzdHJ5Lk9OX0lOVkFMSURfVEVYVF9XUkFQX1dJVEgudGFibGUgPSAodGV4dDogSVRleHQpID0+IHtcbiAgICByZXR1cm4gW1xuICAgICAgU1RBTkRBUkRfUEFSQUdSQVBIKCksXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwidGRcIixcbiAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiBcInRyXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJ0Ym9keVwiLFxuICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgIH0sXG4gICAgXTtcbiAgfVxuICByZWdpc3RyeS5PTl9JTlZBTElEX1RFWFRfV1JBUF9XSVRILnRib2R5ID0gKHRleHQ6IElUZXh0KSA9PiB7XG4gICAgcmV0dXJuIFtcbiAgICAgIFNUQU5EQVJEX1BBUkFHUkFQSCgpLFxuICAgICAge1xuICAgICAgICB0eXBlOiBcInRkXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJ0clwiLFxuICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgIH0sXG4gICAgXTtcbiAgfVxuICByZWdpc3RyeS5PTl9JTlZBTElEX1RFWFRfV1JBUF9XSVRILnRoZWFkID0gcmVnaXN0cnkuT05fSU5WQUxJRF9URVhUX1dSQVBfV0lUSC50Ym9keTtcbiAgcmVnaXN0cnkuT05fSU5WQUxJRF9URVhUX1dSQVBfV0lUSC50Zm9vdCA9IHJlZ2lzdHJ5Lk9OX0lOVkFMSURfVEVYVF9XUkFQX1dJVEgudGJvZHk7XG5cbiAgcmVnaXN0cnkuT05fSU5WQUxJRF9URVhUX1dSQVBfV0lUSC50ciA9ICh0ZXh0OiBJVGV4dCkgPT4ge1xuICAgIHJldHVybiBbXG4gICAgICBTVEFOREFSRF9QQVJBR1JBUEgoKSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJ0ZFwiLFxuICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgIH0sXG4gICAgXTtcbiAgfVxuXG4gIHJlZ2lzdHJ5Lk9OX0lOVkFMSURfVEVYVF9XUkFQX1dJVEgudGQgPSAodGV4dDogSVRleHQpID0+IHtcbiAgICByZXR1cm4gW1NUQU5EQVJEX1BBUkFHUkFQSCgpXTtcbiAgfVxuXG4gIHJlZ2lzdHJ5Lk9OX0lOVkFMSURfVEVYVF9XUkFQX1dJVEgudGggPSAodGV4dDogSVRleHQpID0+IHtcbiAgICByZXR1cm4gW1NUQU5EQVJEX1BBUkFHUkFQSCgpXTtcbiAgfVxuXG4gIHJlZ2lzdHJ5LkRFU0VSSUFMSVpFLmJ5VGFnLlRBQkxFID0gZGVzZXJpYWxpemVUYWJsZUVsZW1lbnQuYmluZChudWxsLCBcInRhYmxlXCIpO1xuICByZWdpc3RyeS5ERVNFUklBTElaRS5ieVRhZy5UQk9EWSA9IGRlc2VyaWFsaXplVGFibGVFbGVtZW50LmJpbmQobnVsbCwgXCJ0Ym9keVwiKTtcbiAgcmVnaXN0cnkuREVTRVJJQUxJWkUuYnlUYWcuVEhFQUQgPSBkZXNlcmlhbGl6ZVRhYmxlRWxlbWVudC5iaW5kKG51bGwsIFwidGhlYWRcIik7XG4gIHJlZ2lzdHJ5LkRFU0VSSUFMSVpFLmJ5VGFnLlRGT09UID0gZGVzZXJpYWxpemVUYWJsZUVsZW1lbnQuYmluZChudWxsLCBcInRmb290XCIpO1xuICByZWdpc3RyeS5ERVNFUklBTElaRS5ieVRhZy5UUiA9IGRlc2VyaWFsaXplVGFibGVFbGVtZW50LmJpbmQobnVsbCwgXCJ0clwiKTtcbiAgcmVnaXN0cnkuREVTRVJJQUxJWkUuYnlUYWcuVEQgPSBkZXNlcmlhbGl6ZVRhYmxlRWxlbWVudC5iaW5kKG51bGwsIFwidGRcIik7XG4gIHJlZ2lzdHJ5LkRFU0VSSUFMSVpFLmJ5VGFnLlRIID0gZGVzZXJpYWxpemVUYWJsZUVsZW1lbnQuYmluZChudWxsLCBcInRoXCIpO1xuXG4gIHJlZ2lzdHJ5Lk9OX0VNUFRZX0ZJTExfV0lUSC50YWJsZSA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJ0Ym9keVwiLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IFwidHJcIixcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiBcInRkXCIsXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbU1RBTkRBUkRfUEFSQUdSQVBIKCldLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdHJ5Lk9OX0VNUFRZX0ZJTExfV0lUSC50aGVhZCA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJ0clwiLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IFwidGhcIixcbiAgICAgICAgICBjaGlsZHJlbjogW1NUQU5EQVJEX1BBUkFHUkFQSCgpXSxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxuICByZWdpc3RyeS5PTl9FTVBUWV9GSUxMX1dJVEgudGJvZHkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFwidHJcIixcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcInRkXCIsXG4gICAgICAgICAgY2hpbGRyZW46IFtTVEFOREFSRF9QQVJBR1JBUEgoKV0sXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cbiAgcmVnaXN0cnkuT05fRU1QVFlfRklMTF9XSVRILnRmb290ID0gcmVnaXN0cnkuT05fRU1QVFlfRklMTF9XSVRILnRib2R5O1xuXG4gIHJlZ2lzdHJ5Lk9OX0VNUFRZX0ZJTExfV0lUSC50ciA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJ0ZFwiLFxuICAgICAgY2hpbGRyZW46IFtTVEFOREFSRF9QQVJBR1JBUEgoKV0sXG4gICAgfVxuICB9XG5cbiAgcmVnaXN0cnkuT05fRU1QVFlfRklMTF9XSVRILnRkID0gKCkgPT4ge1xuICAgIHJldHVybiBTVEFOREFSRF9QQVJBR1JBUEgoKTtcbiAgfVxuXG4gIHJlZ2lzdHJ5Lk9OX0VNUFRZX0ZJTExfV0lUSC50aCA9ICgpID0+IHtcbiAgICByZXR1cm4gU1RBTkRBUkRfUEFSQUdSQVBIKCk7XG4gIH1cblxuICByZWdpc3RyeS5NRVJHQUJMRVMudGhlYWQgPSB0cnVlO1xuICByZWdpc3RyeS5NRVJHQUJMRVMudGJvZHkgPSB0cnVlO1xuICByZWdpc3RyeS5NRVJHQUJMRVMudGZvb3QgPSB0cnVlO1xuXG4gIHJlZ2lzdHJ5LkNVU1RPTV9OT1JNQUxJWkVSX1BPU1QudGFibGUgPSAoXG4gICAgdGFibGU6IElUYWJsZSxcbiAgICBwYXRoLFxuICAgIGV4ZWN1dGlvblJvb3QsXG4gICAgcHJpbWFyeUV4ZWN1dGlvbixcbiAgICBzZWNvbmRhcnlFeGVjdXRpb24sXG4gICAgc3BlY2lhbFJ1bGVzLFxuICApID0+IHtcbiAgICBjb25zdCBjaGlsZHJlbkNvdW50ID0gdGFibGUuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGxldCBtYXhDb2x1bW5Db3VudDogbnVtYmVyID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgY29uc3QgdGJvZHlFbGVtZW50ID0gdGFibGUuY2hpbGRyZW5baV07XG4gICAgICB0Ym9keUVsZW1lbnQuY2hpbGRyZW4uZm9yRWFjaCgocm93LCBpMikgPT4ge1xuICAgICAgICBtYXhDb2x1bW5Db3VudCA9IHJvdy5jaGlsZHJlbi5sZW5ndGggPiBtYXhDb2x1bW5Db3VudCA/IHJvdy5jaGlsZHJlbi5sZW5ndGggOiBtYXhDb2x1bW5Db3VudDtcbiAgICAgICAgcm93LmNoaWxkcmVuLmZvckVhY2goKGNvbHVtbiwgaTMpID0+IHtcbiAgICAgICAgICBjb25zdCBzaG91bGRCZUNvbHVtblRhZyA9IHRib2R5RWxlbWVudC50eXBlID09PSBcInRoZWFkXCIgPyBcInRoXCIgOiBcInRkXCI7XG5cbiAgICAgICAgICBpZiAoY29sdW1uLnR5cGUgIT09IHNob3VsZEJlQ29sdW1uVGFnKSB7XG4gICAgICAgICAgICBwcmltYXJ5RXhlY3V0aW9uLnVwZGF0ZU5vZGVBdChbLi4ucGF0aCwgaSwgaTIsIGkzXSwgeyB0eXBlOiBzaG91bGRCZUNvbHVtblRhZyB9KTtcbiAgICAgICAgICAgIHNlY29uZGFyeUV4ZWN1dGlvbiAmJiBzZWNvbmRhcnlFeGVjdXRpb24udXBkYXRlTm9kZUF0KFsuLi5wYXRoLCBpLCBpMiwgaTNdLCB7IHR5cGU6IHNob3VsZEJlQ29sdW1uVGFnIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBpbmNvbnNpc3RlbnQgY291bnQgb2Ygcm93cyBhbmQgY29sdW1uc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICBjb25zdCB0Ym9keUVsZW1lbnQgPSB0YWJsZS5jaGlsZHJlbltpXTtcbiAgICAgIHRib2R5RWxlbWVudC5jaGlsZHJlbi5mb3JFYWNoKChyb3csIGkyKSA9PiB7XG4gICAgICAgIGNvbnN0IHNob3VsZEJlQ29sdW1uVGFnID0gdGJvZHlFbGVtZW50LnR5cGUgPT09IFwidGhlYWRcIiA/IFwidGhcIiA6IFwidGRcIjtcbiAgICAgICAgaWYgKHJvdy5jaGlsZHJlbi5sZW5ndGggIT09IG1heENvbHVtbkNvdW50KSB7XG4gICAgICAgICAgY29uc3QgbmV3Tm9kZTogSVRkIHwgSVRoID0geyB0eXBlOiBzaG91bGRCZUNvbHVtblRhZywgY2hpbGRyZW46IFtTVEFOREFSRF9QQVJBR1JBUEgoKV0gfTtcbiAgICAgICAgICBwcmltYXJ5RXhlY3V0aW9uLmluc2VydE5vZGVBdChbLi4ucGF0aCwgaSwgaTJdLCBuZXdOb2RlICwgcm93LmNoaWxkcmVuLmxlbmd0aCk7XG4gICAgICAgICAgc2Vjb25kYXJ5RXhlY3V0aW9uICYmIHNlY29uZGFyeUV4ZWN1dGlvbi5pbnNlcnROb2RlQXQoWy4uLnBhdGgsIGksIGkyXSwgbmV3Tm9kZSwgcm93LmNoaWxkcmVuLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFRoZSBjb250YWluZXIgcmVwcmVzZW50cyBhIGRpdiBjb250YW5lciB0eXBlXG4gKiBvZiB0aGUgY2xhc3MgY29udGFpbmVyIGZvciB0aGUgdGV4dCBzcGVjc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZSBleHRlbmRzIElFbGVtZW50QmFzZSB7XG4gIHR5cGU6IFwidGFibGVcIjtcbiAgLyoqXG4gICAqIFRoZSB0eXBlIGZvciB0aGUgdGFibGVcbiAgICovXG4gIHRhYmxlVHlwZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJdCBjYW4gaGF2ZSBhcyBtYW55IGNoaWxkcmVuIGFzIGl0IHJlcXVpcmVzXG4gICAqIGJ1dCBub3QgdGV4dCBkaXJlY3RseVxuICAgKi9cbiAgY2hpbGRyZW46IEFycmF5PElUaGVhZCB8IElUYm9keSB8IElUZm9vdD47XG59XG5cbi8qKlxuICogVGhlIGNvbnRhaW5lciByZXByZXNlbnRzIGEgZGl2IGNvbnRhbmVyIHR5cGVcbiAqIG9mIHRoZSBjbGFzcyBjb250YWluZXIgZm9yIHRoZSB0ZXh0IHNwZWNzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVRoZWFkIGV4dGVuZHMgSUVsZW1lbnRCYXNlIHtcbiAgdHlwZTogXCJ0aGVhZFwiO1xuXG4gIC8qKlxuICAgKiBJdCBjYW4gaGF2ZSBhcyBtYW55IGNoaWxkcmVuIGFzIGl0IHJlcXVpcmVzXG4gICAqIGJ1dCBub3QgdGV4dCBkaXJlY3RseVxuICAgKi9cbiAgY2hpbGRyZW46IEFycmF5PElUcj47XG59XG5cbi8qKlxuICogVGhlIGNvbnRhaW5lciByZXByZXNlbnRzIGEgZGl2IGNvbnRhbmVyIHR5cGVcbiAqIG9mIHRoZSBjbGFzcyBjb250YWluZXIgZm9yIHRoZSB0ZXh0IHNwZWNzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVRib2R5IGV4dGVuZHMgSUVsZW1lbnRCYXNlIHtcbiAgdHlwZTogXCJ0Ym9keVwiO1xuXG4gIC8qKlxuICAgKiBJdCBjYW4gaGF2ZSBhcyBtYW55IGNoaWxkcmVuIGFzIGl0IHJlcXVpcmVzXG4gICAqIGJ1dCBub3QgdGV4dCBkaXJlY3RseVxuICAgKi9cbiAgY2hpbGRyZW46IEFycmF5PElUcj47XG59XG5cbi8qKlxuICogVGhlIGNvbnRhaW5lciByZXByZXNlbnRzIGEgZGl2IGNvbnRhbmVyIHR5cGVcbiAqIG9mIHRoZSBjbGFzcyBjb250YWluZXIgZm9yIHRoZSB0ZXh0IHNwZWNzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVRmb290IGV4dGVuZHMgSUVsZW1lbnRCYXNlIHtcbiAgdHlwZTogXCJ0Zm9vdFwiO1xuXG4gIC8qKlxuICAgKiBJdCBjYW4gaGF2ZSBhcyBtYW55IGNoaWxkcmVuIGFzIGl0IHJlcXVpcmVzXG4gICAqIGJ1dCBub3QgdGV4dCBkaXJlY3RseVxuICAgKi9cbiAgY2hpbGRyZW46IEFycmF5PElUcj47XG59XG5cbi8qKlxuICogVGhlIGNvbnRhaW5lciByZXByZXNlbnRzIGEgZGl2IGNvbnRhbmVyIHR5cGVcbiAqIG9mIHRoZSBjbGFzcyBjb250YWluZXIgZm9yIHRoZSB0ZXh0IHNwZWNzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVRyIGV4dGVuZHMgSUVsZW1lbnRCYXNlIHtcbiAgdHlwZTogXCJ0clwiO1xuXG4gIC8qKlxuICAgKiBJdCBjYW4gaGF2ZSBhcyBtYW55IGNoaWxkcmVuIGFzIGl0IHJlcXVpcmVzXG4gICAqIGJ1dCBub3QgdGV4dCBkaXJlY3RseVxuICAgKi9cbiAgY2hpbGRyZW46IEFycmF5PElUZCB8IElUaD47XG59XG5cbi8qKlxuICogVGhlIGNvbnRhaW5lciByZXByZXNlbnRzIGEgZGl2IGNvbnRhbmVyIHR5cGVcbiAqIG9mIHRoZSBjbGFzcyBjb250YWluZXIgZm9yIHRoZSB0ZXh0IHNwZWNzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVRkIGV4dGVuZHMgSUVsZW1lbnRCYXNlIHtcbiAgdHlwZTogXCJ0ZFwiO1xuXG4gIC8qKlxuICAgKiBJdCBjYW4gaGF2ZSBhcyBtYW55IGNoaWxkcmVuIGFzIGl0IHJlcXVpcmVzXG4gICAqIGJ1dCBub3QgdGV4dCBkaXJlY3RseVxuICAgKi9cbiAgY2hpbGRyZW46IEFycmF5PElDb250YWluZXIgfCBJQ3VzdG9tIHwgSUZpbGUgfCBJUGFyYWdyYXBoIHwgSUxpc3QgfCBJUXVvdGUgfCBJVGFibGUgfCBJVmlkZW8gfCBJVGl0bGUgfCBJSW1hZ2U+O1xufVxuXG4vKipcbiAqIFRoZSBjb250YWluZXIgcmVwcmVzZW50cyBhIGRpdiBjb250YW5lciB0eXBlXG4gKiBvZiB0aGUgY2xhc3MgY29udGFpbmVyIGZvciB0aGUgdGV4dCBzcGVjc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIElUaCBleHRlbmRzIElFbGVtZW50QmFzZSB7XG4gIHR5cGU6IFwidGhcIjtcblxuICAvKipcbiAgICogSXQgY2FuIGhhdmUgYXMgbWFueSBjaGlsZHJlbiBhcyBpdCByZXF1aXJlc1xuICAgKiBidXQgbm90IHRleHQgZGlyZWN0bHlcbiAgICovXG4gIGNoaWxkcmVuOiBBcnJheTxJQ29udGFpbmVyIHwgSUN1c3RvbSB8IElGaWxlIHwgSVBhcmFncmFwaCB8IElMaXN0IHwgSVF1b3RlIHwgSVRhYmxlIHwgSVZpZGVvIHwgSVRpdGxlIHwgSUltYWdlPjtcbn0iLCAiLyoqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgdGhlIHNlcmlhbGl6ZXIgYW5kIGRlc2VyaWFsaXplciBiYXNpYyBmdW5jdGlvbmFsaXR5IHRoYXQgYWxsb3dzXG4gKiB0byBoYW5kbGUgdGhlIHN0YW5kYXJkIGl0ZW1pemUgdGV4dCBzcGVjaWZpY2F0aW9uXG4gKiBcbiAqIEBtb2R1bGVcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBET01XaW5kb3cgfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB7IGNvcHlFbGVtZW50QmFzZSwgSUVsZW1lbnRCYXNlIH0gZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IHsgSUNvbnRhaW5lciwgcmVnaXN0ZXJDb250YWluZXIgfSBmcm9tIFwiLi90eXBlcy9jb250YWluZXJcIjtcbmltcG9ydCB7IElDdXN0b20sIHJlZ2lzdGVyQ3VzdG9tIH0gZnJvbSBcIi4vdHlwZXMvY3VzdG9tXCI7XG5pbXBvcnQgeyBJRmlsZSwgcmVnaXN0ZXJGaWxlIH0gZnJvbSBcIi4vdHlwZXMvZmlsZVwiO1xuaW1wb3J0IHsgSUltYWdlLCByZWdpc3RlckltYWdlIH0gZnJvbSBcIi4vdHlwZXMvaW1hZ2VcIjtcbmltcG9ydCB7IElMaW5rLCByZWdpc3RlckxpbmsgfSBmcm9tIFwiLi90eXBlcy9saW5rXCI7XG5pbXBvcnQgeyBJUGFyYWdyYXBoLCByZWdpc3RlclBhcmFncmFwaCwgU1RBTkRBUkRfUEFSQUdSQVBIIH0gZnJvbSBcIi4vdHlwZXMvcGFyYWdyYXBoXCI7XG5pbXBvcnQgeyBJUXVvdGUsIHJlZ2lzdGVyUXVvdGUgfSBmcm9tIFwiLi90eXBlcy9xdW90ZVwiO1xuaW1wb3J0IHsgSVRleHQsIHJlZ2lzdGVyVGV4dCwgU1RBTkRBUkRfVEVYVF9OT0RFIH0gZnJvbSBcIi4vdHlwZXMvdGV4dFwiO1xuaW1wb3J0IHsgSVRpdGxlLCByZWdpc3RlclRpdGxlIH0gZnJvbSBcIi4vdHlwZXMvdGl0bGVcIjtcbmltcG9ydCB7IElWaWRlbywgcmVnaXN0ZXJWaWRlbyB9IGZyb20gXCIuL3R5cGVzL3ZpZGVvXCI7XG5pbXBvcnQgeyBJTGlzdCwgcmVnaXN0ZXJMaXN0IH0gZnJvbSBcIi4vdHlwZXMvbGlzdFwiO1xuaW1wb3J0IHsgSUxpc3RJdGVtLCByZWdpc3Rlckxpc3RJdGVtIH0gZnJvbSBcIi4vdHlwZXMvbGlzdC1pdGVtXCI7XG5pbXBvcnQgeyBJSW5saW5lLCByZWdpc3RlcklubGluZSB9IGZyb20gXCIuL3R5cGVzL2lubGluZVwiO1xuaW1wb3J0IHsgSVRhYmxlLCBJVGJvZHksIElUZCwgSVRmb290LCBJVGgsIElUaGVhZCwgSVRyLCByZWdpc3RlclRhYmxlRWxlbWVudHMgfSBmcm9tIFwiLi90eXBlcy90YWJsZVwiO1xuaW1wb3J0IHsgSVRlbXBsYXRlQXJnQ29udGV4dERlZmluaXRpb24sIElUZW1wbGF0ZUFyZ1VJSGFuZGxlckRlZmluaXRpb24sIFRlbXBsYXRlQXJncyB9IGZyb20gXCIuL3RlbXBsYXRlLWFyZ3NcIjtcbmltcG9ydCB1dWlkdjUgZnJvbSBcInV1aWQvdjVcIjtcbmltcG9ydCBlcXVhbHMgZnJvbSBcImRlZXAtZXF1YWxcIjtcbmltcG9ydCB7IElWb2lkQmxvY2ssIHJlZ2lzdGVyVm9pZEJsb2NrIH0gZnJvbSBcIi4vdHlwZXMvdm9pZC1ibG9ja1wiO1xuaW1wb3J0IHsgSVZvaWRTdXBlckJsb2NrLCByZWdpc3RlclZvaWRTdXBlckJsb2NrIH0gZnJvbSBcIi4vdHlwZXMvdm9pZC1zdXBlcmJsb2NrXCI7XG5pbXBvcnQgeyBJVm9pZElubGluZSwgcmVnaXN0ZXJWb2lkSW5saW5lIH0gZnJvbSBcIi4vdHlwZXMvdm9pZC1pbmxpbmVcIjtcbmltcG9ydCB7IElVbm1hbmFnZWQsIHJlZ2lzdGVyVW5tYW5hZ2VkIH0gZnJvbSBcIi4vdHlwZXMvdW5tYW5hZ2VkXCI7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGJhc2ljIGRlc2VyaWFsaXphdGlvbiBmdW5jdGlvbiB0aGF0IHRha2VzIGFcbiAqIGJhc2ljIEhUTUwgbm9kZSBhbmQgcmV0dXJucyBhIHJpY2ggZWxlbWVudCAob3IgYSB0ZXh0IG5vZGUpXG4gKi9cbnR5cGUgRGVzZXJpYWxpemF0aW9uRm4gPSAobjogTm9kZSkgPT4gUmljaEVsZW1lbnQgfCBJVGV4dDtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgcmVnaXN0cnkgZnJvbSB0aGUgZGVzZXJpYWxpemUgcmVnaXN0cnlcbiAqL1xuaW50ZXJmYWNlIElEZXNlcmlhbGl6ZVJlZ2lzdHJ5VHlwZSB7XG4gIFthdHRyOiBzdHJpbmddOiBEZXNlcmlhbGl6YXRpb25Gbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUmVhY3RpZnlFeHRyYU9wdGlvbnMge1xuICAvKipcbiAgICogdXNlIHRoaXMgdG8gcmV0dXJuIGFueSBleHRyYSBhdHRyaWJ1dGVzIHRoYXQgc2hvdWxkXG4gICAqIGJlIGFwcGxpZWQgdG93YXJkcyBhbiBlbGVtZW50XG4gICAqIFxuICAgKiBEb2VzIG5vdCBoYXZlIGFuIGVmZmVjdCB0byBVSSBIYW5kbGVkIGVsZW1lbnRzIHRoYXQgYXJlXG4gICAqIGhhbmRsZWRcbiAgICogXG4gICAqIHJldHVybiBhbiBvYmplY3Qgb3IgbnVsbFxuICAgKi9cbiAgb25DdXN0b21BdHRyaWJ1dGVzRm9yPzogKGVsZW1lbnQ6IFJpY2hFbGVtZW50IHwgSVRleHQpID0+IGFueTtcblxuICAvKipcbiAgICogdXNlIHRoaXMgdG8gbW9kaWZ5IGhvdyB0aGUgZWxlbWVudCByZW5kZXJzXG4gICAqIFxuICAgKiBEb2VzIG5vdCBoYXZlIGFuIGVmZmVjdCB0byBVSSBIYW5kbGVkIGVsZW1lbnRzIHRoYXQgYXJlXG4gICAqIGhhbmRsZWRcbiAgICogXG4gICAqIHJldHVybiBudWxsIGZvciBub3QgaGFuZGxpbmcgYW55dGhpbmcgYW4gdXNpbmcgdGhlIGRlZmF1bHRcbiAgICovXG4gIG9uQ3VzdG9tPzogKFxuICAgIGVsZW1lbnQ6IFJpY2hFbGVtZW50IHwgSVRleHQsXG4gICAgcHJvcHM6IGFueSxcbiAgICBpbmZvOiB7XG4gICAgICBzdHlsZUFjdGl2ZT86IGFueSxcbiAgICAgIHN0eWxlSG92ZXI/OiBhbnksXG4gICAgICBUYWc6IHN0cmluZyxcbiAgICAgIGRlZmF1bHRSZXR1cm46ICgpID0+IFJlYWN0LlJlYWN0Tm9kZSxcbiAgICAgIHBhcmVudDogUmljaEVsZW1lbnQgfCBJUm9vdExldmVsRG9jdW1lbnQsXG4gICAgICB0cmVlOiBJUm9vdExldmVsRG9jdW1lbnQsXG4gICAgfSxcbiAgKSA9PiBSZWFjdC5SZWFjdE5vZGU7XG5cbiAgLyoqXG4gICAqIEFsbG93cyB0byB3cmFwIGFuIGVsZW1lbnQgd2l0aCBmZWF0dXJlcyBvZiB0aGUgY2hvb3NpbmdcbiAgICogcmV0dXJuIHRoZSBlbGVtZW50QXNOb2RlIGl0c2VsZiBvciBhIG5ldyBub2RlIHRvIHJlcGxhY2UgaXRcbiAgICovXG4gIG9uQ3VzdG9tV3JhcD86IChlbGVtZW50OiBSaWNoRWxlbWVudCB8IElUZXh0LCBlbGVtZW50QXNOb2RlOiBSZWFjdC5SZWFjdE5vZGUpID0+IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuLyoqXG4gKiBUaGUgYXJndW1lbnQgdGhhdCBpcyBwYXNzZWQgdG8gdGhlIHJlYWN0aWZ5IGZ1bmN0aW9uIHRoYXQgYWxsb3dzIHRvIGNvbnZlcnRcbiAqIGEgZ2l2ZW4gZGVzZXJpYWxpemVkIHJpY2ggZWxlbWVudCBhbmQgZG9jdW1lbnQgaW50byBhIHJlYWN0IGVsZW1lbnRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJUmVhY3RpZnlBcmc8VD4ge1xuICAvKipcbiAgICogVGhpcyBpcyB0aGUgZWxlbWVudCB0aGF0IG11c3QgYmUgY29udmVydGVkXG4gICAqL1xuICBlbGVtZW50OiBUO1xuICAvKipcbiAgICogV2hldGhlciB0aGUgZWxlbWVudCBpcyBjb25zaWRlcmVkIGFjdGl2ZSwgaXQncyB1c3VhbGx5IGZhbHNlIHdoZW4gdGhlIGVsZW1lbnRcbiAgICogaXMgYmVpbmcgZWRpdGVkLCBzbyBpdCBpcyBpbmFjdGl2ZSwgYmVpbmcgZWRpdGVkLCBhbmQgYWN0aXZlIHdoZW4gaXQncyB2aXNpYmxlIGZvclxuICAgKiB1c2FnZVxuICAgKi9cbiAgYWN0aXZlOiBib29sZWFuO1xuICAvKipcbiAgICogV2hldGhlciB0aGUgZWxlbWVudCBpcyBjb25zaWRlcmVkIHNlbGVjdGVkLCBpdCBzaG91bGQgb25seSByZWFsbHkgYmUgdHJ1ZSBpZiBhY3RpdmVcbiAgICogaXMgZmFsc2UsIGFzIGl0J3MgaW4gZWRpdCBtb2RlIGFuZCBjYW4gYmUgc2VsZWN0ZWQsIGl0IGFkZHMgdGhlIHNlbGVjdGVkIGNsYXNzXG4gICAqIHRvIHRoZSByZWFjdGlmaWNhdGlvblxuICAgKi9cbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBHaXZlIHRoZSBlbGVtZW50IGN1c3RvbSBwcm9wZXJ0aWVzLCB0aGVzZSBwcm9wZXJ0aWVzIHdpbGwgb3ZlcnJpZGUgdGhlIHdheSB0aGUgZWxlbWVudFxuICAgKiBpcyBib3VuZCwgeW91IGNhbiBwYXNzIGNoaWxkcmVuIHZpYSB0aGVzZSBwcm9wc1xuICAgKi9cbiAgY3VzdG9tUHJvcHM/OiBSZWFjdC5EZXRhaWxlZEhUTUxQcm9wczxSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD4sIEhUTUxFbGVtZW50PjtcbiAgLyoqXG4gICAqIFJlbmRlciB0aGUgZWxlbWVudCBhcyBhIHRlbXBsYXRlLCByYXRoZXIgdGhhbiBhcyBhIHNpbXBsZSBzaW5nbGUgbGV2ZWwgY29tcG9uZW50XG4gICAqL1xuICBhc1RlbXBsYXRlPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSBhcmd1bWVudHMgdG8gYmUgdXNlZCB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBjb250ZXh0XG4gICAqL1xuICB0ZW1wbGF0ZUFyZ3M/OiBUZW1wbGF0ZUFyZ3M7XG4gIC8qKlxuICAgKiBUaGVzZSByZXByZXNlbnQgdGhlIHJvb3QgYXJncywgeW91IGNhbiBsZWF2ZSBpdCB1bnBhc3NlZCBpZiB5b3UgcGFzc2VkIHRlbXBsYXRlIGFyZ3NcbiAgICogYXMgdGhleSBhcmUgZXF1aXZhbGVudCwgaG93ZXZlciB0aGUgcm9vdCBsZXZlbCBjYW4gYmUgdXNlZCB0byBleHRyYWN0IHVpIGhhbmRsZXIgbG9naWNcbiAgICogYXMgc3VjaCB0aGV5IGFyZSBvdmVyd3JpdHRlbiB3aGVuIG1hdGNoaW5nICB0aGUgdHJlZVxuICAgKi9cbiAgdGVtcGxhdGVSb290QXJncz86IFRlbXBsYXRlQXJncztcbiAgLyoqXG4gICAqIElnbm9yZSBjb250ZXh0dWFsIGNoYW5nZXMgdGhhdCBjaGFuZ2UgdGhlIHRlbXBsYXRlIGFyZywgdGhlc2UgYXJlIGZvckVhY2ggYW5kIGNvbnRleHRcbiAgICogYXR0cmlidXRlcyBvZiBhIGJhc2UgY29udGV4dFxuICAgKi9cbiAgdGVtcGxhdGVJZ25vcmVDb250ZXh0dWFsQ2hhbmdlcz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBIGtleSB0byB1c2UgaW4gdGhlIHJlYWN0IGNvbXBvbmVudFxuICAgKi9cbiAga2V5PzogbnVtYmVyIHwgc3RyaW5nO1xuICAvKipcbiAgICogU29tZSBleHRyYSBvcHRpb25zIGZvciB1dGlsaXRpZXNcbiAgICovXG4gIGV4dHJhT3B0aW9ucz86IElSZWFjdGlmeUV4dHJhT3B0aW9ucztcbiAgLyoqXG4gICAqIFRoZSBwYXJlbnQgZm9yIHRoaXMgZWxlbWVudFxuICAgKiBvciBudWxsIGlmIG5vIHBhcmVudCBpcyBrbm93blxuICAgKi9cbiAgcGFyZW50OiBSaWNoRWxlbWVudCB8IElSb290TGV2ZWxEb2N1bWVudDtcbiAgLyoqXG4gICAqIFRoZSB0cmVlIHRoaXMgZWxlbWVudCBjb21lcyBmcm9tXG4gICAqIG9yIG51bGwgaWYgbm8gdHJlZSBpcyBhdmFpbGFibGVcbiAgICovXG4gIHRyZWU6IElSb290TGV2ZWxEb2N1bWVudDtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSByZWdpc3RyeSB3aGVyZSBhbGwgdGhlIGluZnJvbWF0aW9uIHRvIHNlcmlhbGl6ZVxuICogYW5kIGRlc2VyaWFsaXplIHRleHQgZWxlbWVudHMsIGl0IHByb3ZpZGVzIDMgd2F5IG1ldGhvZHNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU2VyaWFsaXphdGlvblJlZ2lzdHJ5VHlwZSB7XG4gIC8qKlxuICAgKiBTRVJJQUxJWkUgcHJvdmlkZXMgdGhlIGZ1bmN0aW9uYWxpdHkgdG8gY29udGFpbiBhIHJpY2ggZWxlbWVudFxuICAgKiBvciB0ZXh0IG5vZGUgdG8gYSBIVE1MIG5vZGVcbiAgICovXG4gIFNFUklBTElaRToge1xuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIHJlcHJlc2VudHMgdGhlIHR5cGUgb2YgdGhlIGVsZW1lbnRcbiAgICAgKiBlZy4gcGFyYWdyYXBoLCBmaWxlLCBpbWFnZSBldGMuLi5cbiAgICAgKi9cbiAgICBbdHlwZTogc3RyaW5nXTogKG5vZGU6IFJpY2hFbGVtZW50IHwgSVRleHQpID0+IE5vZGVcbiAgfTtcblxuICAvKipcbiAgICogREVTRVJJQUxJWkUgcHJvdmlkZXMgdGhlIGZ1bmN0aW9uYWxpdHkgdG8gY29udmVydCBhIEhUTUxcbiAgICogbm9kZSBpbnRvIHRoZSByaWNoIGVsZW1lbnQgY291bnRlcnBhcnQgYXMgcmVxdWlyZWRcbiAgICovXG4gIERFU0VSSUFMSVpFOiB7XG4gICAgLyoqXG4gICAgICogYnkgY2xhc3MgbmFtZSBwcmVmaXggc2VhcmNocyBvZiBhIGNsYXNzIG5hbWUgcHJlZml4IGFuZCBtYXRjaGVzIHRoYXRcbiAgICAgKiB0byBhIGdpdmVuIGZ1bmN0aW9uLCBpdCByZWNlaXZlcyB0aGUgaGlnaGVzdCBwcmlvcml0eVxuICAgICAqL1xuICAgIGJ5Q2xhc3NOYW1lUHJlZml4OiBJRGVzZXJpYWxpemVSZWdpc3RyeVR5cGU7XG4gICAgLyoqXG4gICAgICogYnkgY2xhc3MgbmFtZSBtYXRjaGVzIGEgZ2l2ZW4gY2xhc3MgZXhhY3RseSBhbmQgaWYgaXQgbWF0Y2hlcyB0aGVuXG4gICAgICogaXQgd2lsbCBwYXNzIGl0IHRvIHRoZSBnaXZlbiBkZXNlcmlhbGl6YXRpb24gZnVuY3Rpb25cbiAgICAgKi9cbiAgICBieUNsYXNzTmFtZTogSURlc2VyaWFsaXplUmVnaXN0cnlUeXBlO1xuICAgIC8qKlxuICAgICAqIGJ5IHRhZyBzaW1wbHkgdXNlcyB0aGUgdGFnIG5hbWUgb2YgdGhlIGdpdmVuIGNvbXBvbmVudFxuICAgICAqL1xuICAgIGJ5VGFnOiBJRGVzZXJpYWxpemVSZWdpc3RyeVR5cGU7XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBmb3IgdGhlIHRleHQgZWxlbWVudFxuICAgICAqL1xuICAgIHRleHQ6IChuOiBOb2RlKSA9PiBJVGV4dDtcbiAgICAvKipcbiAgICAgKiBVbmtub3duIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gbiBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICB1bm1hbmFnZWQ6IChuOiBIVE1MRWxlbWVudCkgPT4gSVVubWFuYWdlZDtcbiAgfTtcblxuICAvKipcbiAgICogUkVBQ1RJRlkgYWxsb3dzIHRvIGNvbnZlcnQgYSBnaXZlbiBlbGVtZW50IHRoYXQgaGFzIGJlZW4gZGVzZXJpYWxpemVkXG4gICAqIGludG8gYSByZWFjdCBjb21wb25lbnRcbiAgICovXG4gIFJFQUNUSUZZOiB7XG4gICAgW3R5cGU6IHN0cmluZ106IChhcmc6IElSZWFjdGlmeUFyZzxSaWNoRWxlbWVudCB8IElUZXh0PikgPT4gUmVhY3QuUmVhY3ROb2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IHdoaWNoIGNoaWxkcmVuIGFyZSBhbGxvd2VkIGZvciBhIGdpdmVuIG9iamVjdCB0eXBlXG4gICAqL1xuICBBTExPV1NfQ0hJTERSRU46IHtcbiAgICBbdHlwZTogc3RyaW5nXTogc3RyaW5nW107XG4gIH1cblxuICAvKipcbiAgICogU3BlY2lmaWVzIHdldGhlciB0aGUgZ2l2ZW4gdHlwZSBhbGxvd3MgcGxhaW50ZXh0XG4gICAqIGluc2lkZSBvZiBpdFxuICAgKi9cbiAgUFJPSElCSVRfVEVYVDoge1xuICAgIFt0eXBlOiBzdHJpbmddOiBib29sZWFuO1xuICB9O1xuXG4gIC8qKlxuICAgKiBXaGVuIHJlY2VpdmVkIGFuIGludmFsaWQgY2hpbGRyZW4gdGhhdCBhcmUgbm90IGluIEFMTE9XU19DSElMRFJFTlxuICAgKi9cbiAgT05fSU5WQUxJRF9DSElMRFJFTl9XUkFQX1dJVEg6IHtcbiAgICBbdHlwZTogc3RyaW5nXTogKGNoaWxkcmVuOiBSaWNoRWxlbWVudCkgPT4gUmljaEVsZW1lbnRbXTtcbiAgfTtcblxuICAvKipcbiAgICogV2hlbiByZWNlaXZlZCB0ZXh0IGFzIGNoaWxkcmVuIGFuZCBQUk9ISUJJVF9URVhUIGlzIG5vdFxuICAgKiB0cnVlXG4gICAqL1xuICBPTl9JTlZBTElEX1RFWFRfV1JBUF9XSVRIOiB7XG4gICAgW3R5cGU6IHN0cmluZ106ICh0ZXh0OiBJVGV4dCkgPT4gUmljaEVsZW1lbnRbXTtcbiAgfTtcblxuICAvKipcbiAgICogQW4gaW5saW5lIHNob3VsZCBiZVxuICAgKiBQUk9ISUJJVF9URVhUIHRydWVcbiAgICogQUxMT1dTX0NISUxEUkVOIGVtcHR5IGFycmF5XG4gICAqIFxuICAgKiBGb3IgZXhhbXBsZSA8YT4gPHNwYW4gY2xhc3M9XCJpbmxpbmVcIi8+IGFyZSBrbm93biBpbmxpbmVzXG4gICAqIFxuICAgKiBIb3dldmVyIHRoZSB1c2FnZSBvZiB0aGlzIGlzIGZvciBpbnRlcm5hbCBpZGVudGlmaWNhdGlvbiBhcyBpbiBodG1sXG4gICAqIGEgc3BhY2UgaXMgbmVjZXNzYXJ5IGJldHdlZW4gaW5saW5lIG5vZGVzIGZvciB0aGVtIHRvIGJlIHNlbGVjdGVkXG4gICAqL1xuICBJTkxJTkVTOiB7XG4gICAgW3R5cGU6IHN0cmluZ106IGJvb2xlYW47XG4gIH07XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgaXQgaXMgYSB2b2lkIGVsZW1lbnQgYW5kIGhhcyBubyBjaGlsZHJlbiBhbmQgbm8gY29udGVudFxuICAgKiB3aXRoaW4gaXRcbiAgICovXG4gIFZPSURTOiB7XG4gICAgW3R5cGU6IHN0cmluZ106IGJvb2xlYW47XG4gIH07XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgaXQgaXMgYSB2b2lkIGVsZW1lbnQgYW5kIGhhcyBubyBjaGlsZHJlbiBhbmQgbm8gY29udGVudFxuICAgKiB3aXRoaW4gaXRcbiAgICovXG4gIEJMT0NLUzoge1xuICAgIFt0eXBlOiBzdHJpbmddOiBib29sZWFuO1xuICB9O1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGl0IGlzIGEgdm9pZCBlbGVtZW50IGFuZCBoYXMgbm8gY2hpbGRyZW4gYW5kIG5vIGNvbnRlbnRcbiAgICogd2l0aGluIGl0XG4gICAqL1xuICBTVVBFUkJMT0NLUzoge1xuICAgIFt0eXBlOiBzdHJpbmddOiBib29sZWFuO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgd2hhdCBzaGFsbCBiZSBkb25lIHJlZ2FyZGluZyBlbXB0eVxuICAgKiBlbGVtZW50cyB3aXRob3V0IGNoaWxkcmVuXG4gICAqIFxuICAgKiB1bm5lY2Vzc2FyeSBpZiBhbGxvd3MgY2hpbGRyZW4gdGV4dCBpcyB0cnVlXG4gICAqL1xuICBPTl9FTVBUWV9GSUxMX1dJVEg6IHtcbiAgICBbdHlwZTogc3RyaW5nXTogKCkgPT4gUmljaEVsZW1lbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB3aGljaCBlbGVtZW50cyBhcmUgYWxsb3dlZCB0byBiZSBtZXJnZWQgd2l0aCB0aGUgbmV4dCBlbGVtZW50XG4gICAqL1xuICBNRVJHQUJMRVM6IHtcbiAgICBbdHlwZTogc3RyaW5nXTogYm9vbGVhbjtcbiAgfTtcblxuICBDVVNUT01fTk9STUFMSVpFUl9QUkU6IHtcbiAgICBbdHlwZTogc3RyaW5nXTogKFxuICAgICAgZWxlbWVudDogYW55LFxuICAgICAgcGF0aDogbnVtYmVyW10sXG4gICAgICBleGVjdXRpb25Sb290OiBJUm9vdExldmVsRG9jdW1lbnQsXG4gICAgICBwcmltYXJ5RXhlY3V0aW9uOiBJQ3VzdG9tRXhlY3V0aW9uLFxuICAgICAgc2Vjb25kYXJ5RXhlY3V0aW9uOiBJQ3VzdG9tRXhlY3V0aW9uLFxuICAgICAgc3BlY2lhbFJ1bGVzPzogSVNwZWNpYWxSdWxlcyxcbiAgICApID0+IHZvaWQ7XG4gIH1cbiAgQ1VTVE9NX05PUk1BTElaRVJfUE9TVDoge1xuICAgIFt0eXBlOiBzdHJpbmddOiAoXG4gICAgICBlbGVtZW50OiBhbnksXG4gICAgICBwYXRoOiBudW1iZXJbXSxcbiAgICAgIGV4ZWN1dGlvblJvb3Q6IElSb290TGV2ZWxEb2N1bWVudCxcbiAgICAgIHByaW1hcnlFeGVjdXRpb246IElDdXN0b21FeGVjdXRpb24sXG4gICAgICBzZWNvbmRhcnlFeGVjdXRpb246IElDdXN0b21FeGVjdXRpb24sXG4gICAgICBzcGVjaWFsUnVsZXM/OiBJU3BlY2lhbFJ1bGVzLFxuICAgICkgPT4gdm9pZDtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgaXMgdGhlIGFjdHVhbCBzZXJpYWxpemF0aW9uIHJlZ2lzdHJ5IHRoYXQgdGhlIHNlcmlhbGl6ZXIgaXMgdXNlZFxuICogYnkgZGVmYXVsdCBpcyBzdGFydGVkIHVwIGVtcHR5XG4gKi9cbmV4cG9ydCBjb25zdCBTRVJJQUxJWkFUSU9OX1JFR0lTVFJZOiBJU2VyaWFsaXphdGlvblJlZ2lzdHJ5VHlwZSA9IHtcbiAgU0VSSUFMSVpFOiB7fSxcbiAgREVTRVJJQUxJWkU6IHtcbiAgICBieUNsYXNzTmFtZToge30sXG4gICAgYnlDbGFzc05hbWVQcmVmaXg6IHt9LFxuICAgIGJ5VGFnOiB7fSxcbiAgICB0ZXh0OiBudWxsLFxuICAgIHVubWFuYWdlZDogbnVsbCxcbiAgfSxcbiAgQUxMT1dTX0NISUxEUkVOOiB7fSxcbiAgUFJPSElCSVRfVEVYVDoge30sXG4gIE9OX0VNUFRZX0ZJTExfV0lUSDoge30sXG4gIE9OX0lOVkFMSURfQ0hJTERSRU5fV1JBUF9XSVRIOiB7fSxcbiAgT05fSU5WQUxJRF9URVhUX1dSQVBfV0lUSDoge30sXG4gIFZPSURTOiB7fSxcbiAgSU5MSU5FUzoge30sXG4gIEJMT0NLUzoge30sXG4gIFNVUEVSQkxPQ0tTOiB7XG4gICAgZG9jdW1lbnQ6IHRydWUsXG4gIH0sXG4gIFJFQUNUSUZZOiB7fSxcbiAgTUVSR0FCTEVTOiB7fSxcbiAgQ1VTVE9NX05PUk1BTElaRVJfUE9TVDoge30sXG4gIENVU1RPTV9OT1JNQUxJWkVSX1BSRToge31cbn1cblxuLy8gTk9XIHdlIHJlZ2lzdGVyIGFsbCB0aGUgZWxlbWVudHMgdGhhdCBhcmUgcGFydCBvZiB0aGlzXG4vLyBieSBwYXNzaW5nIHRoZW0gdG8gdGhlIGZ1bmN0aW9uXG5yZWdpc3RlclZvaWRTdXBlckJsb2NrKFNFUklBTElaQVRJT05fUkVHSVNUUlkpO1xucmVnaXN0ZXJDb250YWluZXIoU0VSSUFMSVpBVElPTl9SRUdJU1RSWSk7XG5yZWdpc3RlcklubGluZShTRVJJQUxJWkFUSU9OX1JFR0lTVFJZKTtcbnJlZ2lzdGVyQ3VzdG9tKFNFUklBTElaQVRJT05fUkVHSVNUUlkpO1xucmVnaXN0ZXJGaWxlKFNFUklBTElaQVRJT05fUkVHSVNUUlkpO1xucmVnaXN0ZXJJbWFnZShTRVJJQUxJWkFUSU9OX1JFR0lTVFJZKTtcbnJlZ2lzdGVyTGluayhTRVJJQUxJWkFUSU9OX1JFR0lTVFJZKTtcbnJlZ2lzdGVyUGFyYWdyYXBoKFNFUklBTElaQVRJT05fUkVHSVNUUlkpO1xucmVnaXN0ZXJRdW90ZShTRVJJQUxJWkFUSU9OX1JFR0lTVFJZKTtcbnJlZ2lzdGVyVGV4dChTRVJJQUxJWkFUSU9OX1JFR0lTVFJZKTtcbnJlZ2lzdGVyVGl0bGUoU0VSSUFMSVpBVElPTl9SRUdJU1RSWSk7XG5yZWdpc3RlclZpZGVvKFNFUklBTElaQVRJT05fUkVHSVNUUlkpO1xucmVnaXN0ZXJMaXN0KFNFUklBTElaQVRJT05fUkVHSVNUUlkpO1xucmVnaXN0ZXJMaXN0SXRlbShTRVJJQUxJWkFUSU9OX1JFR0lTVFJZKTtcbnJlZ2lzdGVyVGFibGVFbGVtZW50cyhTRVJJQUxJWkFUSU9OX1JFR0lTVFJZKTtcbnJlZ2lzdGVyVm9pZEJsb2NrKFNFUklBTElaQVRJT05fUkVHSVNUUlkpO1xucmVnaXN0ZXJWb2lkSW5saW5lKFNFUklBTElaQVRJT05fUkVHSVNUUlkpO1xucmVnaXN0ZXJVbm1hbmFnZWQoU0VSSUFMSVpBVElPTl9SRUdJU1RSWSk7XG5cblNFUklBTElaQVRJT05fUkVHSVNUUlkuQUxMT1dTX0NISUxEUkVOLmRvY3VtZW50ID0gU0VSSUFMSVpBVElPTl9SRUdJU1RSWS5BTExPV1NfQ0hJTERSRU4uY29udGFpbmVyO1xuU0VSSUFMSVpBVElPTl9SRUdJU1RSWS5PTl9JTlZBTElEX0NISUxEUkVOX1dSQVBfV0lUSC5kb2N1bWVudCA9IFNFUklBTElaQVRJT05fUkVHSVNUUlkuT05fSU5WQUxJRF9DSElMRFJFTl9XUkFQX1dJVEguY29udGFpbmVyO1xuU0VSSUFMSVpBVElPTl9SRUdJU1RSWS5PTl9JTlZBTElEX1RFWFRfV1JBUF9XSVRILmRvY3VtZW50ID0gU0VSSUFMSVpBVElPTl9SRUdJU1RSWS5PTl9JTlZBTElEX1RFWFRfV1JBUF9XSVRILmNvbnRhaW5lcjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGV4dChub2RlOiBSaWNoRWxlbWVudCB8IElSb290TGV2ZWxEb2N1bWVudCB8IElUZXh0KSB7XG4gIHJldHVybiB0eXBlb2YgKG5vZGUgYXMgSVRleHQpLnRleHQgPT09IFwic3RyaW5nXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01lcmdhYmxlKG5vZGU6IFJpY2hFbGVtZW50IHwgSVJvb3RMZXZlbERvY3VtZW50IHwgSVRleHQpIHtcbiAgaWYgKGlzVGV4dChub2RlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuICEhU0VSSUFMSVpBVElPTl9SRUdJU1RSWS5NRVJHQUJMRVNbKG5vZGUgYXMgYW55KS50eXBlXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudChub2RlOiBSaWNoRWxlbWVudCB8IElSb290TGV2ZWxEb2N1bWVudCB8IElUZXh0KSB7XG4gIHJldHVybiB0eXBlb2YgKG5vZGUgYXMgUmljaEVsZW1lbnQpLnR5cGUgPT09IFwic3RyaW5nXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0lubGluZShub2RlOiBSaWNoRWxlbWVudCB8IElSb290TGV2ZWxEb2N1bWVudCB8IElUZXh0KSB7XG4gIGlmIChpc1RleHQobm9kZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuICEhU0VSSUFMSVpBVElPTl9SRUdJU1RSWS5JTkxJTkVTWyhub2RlIGFzIFJpY2hFbGVtZW50KS50eXBlXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQmxvY2sobm9kZTogUmljaEVsZW1lbnQgfCBJUm9vdExldmVsRG9jdW1lbnQgfCBJVGV4dCkge1xuICBpZiAoaXNUZXh0KG5vZGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAhIVNFUklBTElaQVRJT05fUkVHSVNUUlkuQkxPQ0tTWyhub2RlIGFzIFJpY2hFbGVtZW50KS50eXBlXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3VwZXJCbG9jayhub2RlOiBSaWNoRWxlbWVudCB8IElSb290TGV2ZWxEb2N1bWVudCB8IElUZXh0KSB7XG4gIGlmIChpc1RleHQobm9kZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuICEhU0VSSUFMSVpBVElPTl9SRUdJU1RSWS5TVVBFUkJMT0NLU1sobm9kZSBhcyBSaWNoRWxlbWVudCkudHlwZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxvd2VkQ2hpbGRyZW5UeXBlcyhub2RlOiBSaWNoRWxlbWVudCB8IElSb290TGV2ZWxEb2N1bWVudCkge1xuICBpZiAoaXNWb2lkKG5vZGUpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3QgYWxsb3dlZEludGVybmFscyA9IFNFUklBTElaQVRJT05fUkVHSVNUUlkuQUxMT1dTX0NISUxEUkVOW25vZGUudHlwZV07XG4gIGlmIChhbGxvd2VkSW50ZXJuYWxzKSB7XG4gICAgcmV0dXJuIGFsbG93ZWRJbnRlcm5hbHM7XG4gIH1cbiAgaWYgKGlzU3VwZXJCbG9jayhub2RlKSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhTRVJJQUxJWkFUSU9OX1JFR0lTVFJZLkJMT0NLUykuY29uY2F0KE9iamVjdC5rZXlzKFNFUklBTElaQVRJT05fUkVHSVNUUlkuU1VQRVJCTE9DS1MpKTtcbiAgfSBlbHNlIGlmIChpc0Jsb2NrKG5vZGUpKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKFNFUklBTElaQVRJT05fUkVHSVNUUlkuSU5MSU5FUyk7XG4gIH1cblxuICByZXR1cm4gW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGxvd3NUZXh0KG5vZGU6IFJpY2hFbGVtZW50IHwgSVJvb3RMZXZlbERvY3VtZW50KSB7XG4gIGNvbnN0IHByb2hpYml0VGV4dHMgPSBTRVJJQUxJWkFUSU9OX1JFR0lTVFJZLlBST0hJQklUX1RFWFRbbm9kZS50eXBlXTtcbiAgaWYgKHByb2hpYml0VGV4dHMgfHwgaXNTdXBlckJsb2NrKG5vZGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZvaWQobm9kZTogUmljaEVsZW1lbnQgfCBJUm9vdExldmVsRG9jdW1lbnQgfCBJVGV4dCk6IGJvb2xlYW4ge1xuICBpZiAoaXNUZXh0KG5vZGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0eXBlb2YgKG5vZGUgYXMgSUVsZW1lbnRCYXNlKS5odG1sID09PSBcInN0cmluZ1wiIHx8XG4gICAgdHlwZW9mIChub2RlIGFzIElFbGVtZW50QmFzZSkudGV4dENvbnRlbnQgPT09IFwic3RyaW5nXCIgfHxcbiAgICAhIVNFUklBTElaQVRJT05fUkVHSVNUUlkuVk9JRFNbKG5vZGUgYXMgUmljaEVsZW1lbnQpLnR5cGVdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VUlIYW5kbGVyVmFsdWVXaXRoS25vd25Db250ZXh0Rm9yKFxuICBlbGVtZW50OiBSaWNoRWxlbWVudCxcbiAgZWxlbWVudENvbnRleHQ6IElUZW1wbGF0ZUFyZ0NvbnRleHREZWZpbml0aW9uLFxuICByb290Q29udGV4dDogSVRlbXBsYXRlQXJnQ29udGV4dERlZmluaXRpb24sXG4pIHtcbiAgaWYgKCFlbGVtZW50Q29udGV4dCB8fCBlbGVtZW50Q29udGV4dC50eXBlICE9PSBcImNvbnRleHRcIiB8fCAhZWxlbWVudCB8fCAhZWxlbWVudC51aUhhbmRsZXIgfHwgIXJvb3RDb250ZXh0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsZXQgdWlIYW5kbGVyVmFsdWU6IElUZW1wbGF0ZUFyZ1VJSGFuZGxlckRlZmluaXRpb24gPSBlbGVtZW50Q29udGV4dC5wcm9wZXJ0aWVzW2VsZW1lbnQudWlIYW5kbGVyXSBhcyBJVGVtcGxhdGVBcmdVSUhhbmRsZXJEZWZpbml0aW9uO1xuICBpZiAoIXVpSGFuZGxlclZhbHVlIHx8IHVpSGFuZGxlclZhbHVlLnR5cGUgIT09IFwidWktaGFuZGxlclwiKSB7XG4gICAgdWlIYW5kbGVyVmFsdWUgPSByb290Q29udGV4dC5wcm9wZXJ0aWVzW2VsZW1lbnQudWlIYW5kbGVyXSBhcyBJVGVtcGxhdGVBcmdVSUhhbmRsZXJEZWZpbml0aW9uO1xuICAgIGlmICghdWlIYW5kbGVyVmFsdWUgfHwgdWlIYW5kbGVyVmFsdWUudHlwZSAhPT0gXCJ1aS1oYW5kbGVyXCIgfHwgdWlIYW5kbGVyVmFsdWUubm9uUm9vdEluaGVyaXRhYmxlKSB7XG4gICAgICB1aUhhbmRsZXJWYWx1ZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVpSGFuZGxlclZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VUlIYW5kbGVyVmFsdWVGb3IoXG4gIGVsZW1lbnQ6IFJpY2hFbGVtZW50LFxuICBwYXRoOiBudW1iZXJbXSxcbiAgcm9vdEVsZW1lbnQ6IElSb290TGV2ZWxEb2N1bWVudCxcbiAgcm9vdENvbnRleHQ6IElUZW1wbGF0ZUFyZ0NvbnRleHREZWZpbml0aW9uLFxuKSB7XG4gIGlmICghZWxlbWVudC51aUhhbmRsZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGNvbnRleHRGb3JUaGlzRWxlbWVudCA9IGdldENvbnRleHRGb3IoXG4gICAgcGF0aCxcbiAgICBcImZpbmFsXCIsXG4gICAgcm9vdEVsZW1lbnQsXG4gICAgcm9vdENvbnRleHQsXG4gICkgfHwgcm9vdENvbnRleHQ7XG5cbiAgcmV0dXJuIGdldFVJSGFuZGxlclZhbHVlV2l0aEtub3duQ29udGV4dEZvcihcbiAgICBlbGVtZW50LFxuICAgIGNvbnRleHRGb3JUaGlzRWxlbWVudCxcbiAgICByb290Q29udGV4dCxcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vZGVGb3IoXG4gIHBhdGg6IG51bWJlcltdLFxuICByb290RWxlbWVudDogSVJvb3RMZXZlbERvY3VtZW50LFxuKTogSVJvb3RMZXZlbERvY3VtZW50IHwgUmljaEVsZW1lbnQgfCBJVGV4dCB7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiByb290RWxlbWVudDtcbiAgfVxuXG4gIGxldCBjdXJyZW50RWxlbWVudDogSVJvb3RMZXZlbERvY3VtZW50IHwgUmljaEVsZW1lbnQgPSByb290RWxlbWVudDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgY3VycmVudEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudC5jaGlsZHJlbltwYXRoW2ldXSBhcyBhbnk7XG4gIH1cblxuICByZXR1cm4gY3VycmVudEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJlbnROb2RlRm9yKFxuICBwYXRoOiBudW1iZXJbXSxcbiAgcm9vdEVsZW1lbnQ6IElSb290TGV2ZWxEb2N1bWVudCxcbik6IElSb290TGV2ZWxEb2N1bWVudCB8IFJpY2hFbGVtZW50IHtcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSBpZiAocGF0aC5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gcm9vdEVsZW1lbnQ7XG4gIH1cblxuICBjb25zdCBuZXdQYXRoID0gWy4uLnBhdGhdO1xuICBuZXdQYXRoLnBvcCgpO1xuXG4gIGxldCBjdXJyZW50RWxlbWVudDogSVJvb3RMZXZlbERvY3VtZW50IHwgUmljaEVsZW1lbnQgPSByb290RWxlbWVudDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdQYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgY3VycmVudEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudC5jaGlsZHJlbltuZXdQYXRoW2ldXSBhcyBhbnk7XG4gIH1cblxuICByZXR1cm4gY3VycmVudEVsZW1lbnQ7XG59XG5cbi8qKlxuICogUHJvdmlkZXMgdGhlIGNvbnRleHQgZm9yIGEgZ2l2ZW4gcGF0aFxuICogQHBhcmFtIHBhdGggdGhlIHBhdGggZm9yIHRoZSBlbGVtZW50IHRvIGdpdmUgY29udGV4dCBmb3JcbiAqIEBwYXJhbSBsZXZlbCB0aGUgbGV2ZWwgdGhlIGNvbnRleHQgaXMgd2FudGVkLCBmaW5hbCBtZWFucyB0aGUgY29udGV4dCB0aGUgZWxlbWVudCBpcyBhdCBjdXJyZW50bHksXG4gKiBzZWxlY3QtY29udGV4dCBpcyB0aGUgY29udGV4dCB3aGVyZSBpdHMgb3duIGNvbnRleHQgcmVzaWRlcywgYW5kIHNlbGVjdC1sb29wIGlzIGZvciBsb29wYWJsZSBjb250ZXh0c1xuICogQHBhcmFtIHJvb3RFbGVtZW50IHRoZSByb290IGRvY3VtZW50XG4gKiBAcGFyYW0gcm9vdENvbnRleHQgdGhlIHJvb3QgY29udGV4dFxuICogQHJldHVybnMgYSBjb250ZXh0IG9iamVjdCBvciBudWxsIGlmIG5vIGNvbnRleHQgZm91bmQgb3IgaW52YWxpZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udGV4dEZvcihcbiAgcGF0aDogbnVtYmVyW10sXG4gIGxldmVsOiBcImZpbmFsXCIgfCBcInNlbGVjdC1jb250ZXh0XCIgfCBcInNlbGVjdC1sb29wXCIsXG4gIHJvb3RFbGVtZW50OiBJUm9vdExldmVsRG9jdW1lbnQsXG4gIHJvb3RDb250ZXh0OiBJVGVtcGxhdGVBcmdDb250ZXh0RGVmaW5pdGlvbixcbik6IElUZW1wbGF0ZUFyZ0NvbnRleHREZWZpbml0aW9uIHtcbiAgaWYgKCFwYXRoIHx8IHBhdGgubGVuZ3RoID09PSAwIHx8ICFyb290Q29udGV4dCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgbmV4dFBhdGggPSBbLi4ucGF0aF07XG4gIGNvbnN0IG5leHRQYXRoTnVtYmVyID0gbmV4dFBhdGguc2hpZnQoKTtcbiAgY29uc3QgaXNGaW5hbCA9IG5leHRQYXRoLmxlbmd0aCA9PT0gMDtcblxuICBjb25zdCBuZXh0RWxlbWVudCA9IHJvb3RFbGVtZW50LmNoaWxkcmVuICYmIHJvb3RFbGVtZW50LmNoaWxkcmVuW25leHRQYXRoTnVtYmVyXTtcbiAgaWYgKCFuZXh0RWxlbWVudCkge1xuICAgIHJldHVybiByb290Q29udGV4dDtcbiAgfVxuXG4gIGxldCBuZXh0Q29udGV4dCA9IHJvb3RDb250ZXh0O1xuXG4gIGlmIChpc0ZpbmFsICYmIGxldmVsID09PSBcInNlbGVjdC1jb250ZXh0XCIpIHtcbiAgICByZXR1cm4gbmV4dENvbnRleHQ7XG4gIH1cblxuICBjb25zdCBjb250ZXh0Q2hhbmdlID0gKG5leHRFbGVtZW50IGFzIElFbGVtZW50QmFzZSkuY29udGV4dDtcbiAgaWYgKGNvbnRleHRDaGFuZ2UpIHtcbiAgICBjb25zdCBuZXh0UG90ZW50aWFsQ29udGV4dCA9IG5leHRDb250ZXh0LnByb3BlcnRpZXNbY29udGV4dENoYW5nZV07XG4gICAgaWYgKCFuZXh0UG90ZW50aWFsQ29udGV4dCB8fCBuZXh0UG90ZW50aWFsQ29udGV4dC50eXBlICE9PSBcImNvbnRleHRcIiB8fCBuZXh0UG90ZW50aWFsQ29udGV4dC5sb29wYWJsZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIG5leHRDb250ZXh0ID0gbmV4dFBvdGVudGlhbENvbnRleHQ7XG4gIH1cblxuICBpZiAoaXNGaW5hbCAmJiBsZXZlbCA9PT0gXCJzZWxlY3QtbG9vcFwiKSB7XG4gICAgcmV0dXJuIG5leHRDb250ZXh0O1xuICB9XG5cbiAgY29uc3QgZWFjaENvbmV4dENoYW5nZSA9IChuZXh0RWxlbWVudCBhcyBJRWxlbWVudEJhc2UpLmZvckVhY2g7XG4gIGlmIChlYWNoQ29uZXh0Q2hhbmdlKSB7XG4gICAgY29uc3QgbmV4dFBvdGVudGlhbENvbnRleHQgPSBuZXh0Q29udGV4dC5wcm9wZXJ0aWVzW2VhY2hDb25leHRDaGFuZ2VdO1xuICAgIGlmICghbmV4dFBvdGVudGlhbENvbnRleHQgfHwgbmV4dFBvdGVudGlhbENvbnRleHQudHlwZSAhPT0gXCJjb250ZXh0XCIgfHwgIW5leHRQb3RlbnRpYWxDb250ZXh0Lmxvb3BhYmxlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbmV4dENvbnRleHQgPSBuZXh0UG90ZW50aWFsQ29udGV4dDtcbiAgfVxuXG4gIHJldHVybiBpc0ZpbmFsID8gbmV4dENvbnRleHQgOiBnZXRDb250ZXh0Rm9yKG5leHRQYXRoLCBsZXZlbCwgbmV4dEVsZW1lbnQgYXMgYW55LCBuZXh0Q29udGV4dCk7XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgcm9vdCBsZXZlbCBkb2N1bWVudCBhbmQgYSBpZFxuICogdG8ga2VlcCB0cmFjayBvZiBpdCwgZXZlcnkgZG9jdW1lbnQgc2hvdWxkIGhhdmVcbiAqIGFuIHVuaXF1ZSB1dWlkXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVJvb3RMZXZlbERvY3VtZW50IHtcbiAgdHlwZTogXCJkb2N1bWVudFwiLFxuICByaWNoOiBib29sZWFuO1xuICBpZDogc3RyaW5nO1xuICBjaGlsZHJlbjogUmljaEVsZW1lbnRbXTtcbn1cblxuLyoqXG4gKiBUaGlzIGlzIHdoYXQgYSByaWNoIGVsZW1lbnQgY2FuIGJlLCBpdCBjYW4gYmUgYWxsIHRoZXNlXG4gKiBidXQgaXQncyBub3QgYSB0ZXh0XG4gKi9cbmV4cG9ydCB0eXBlIFJpY2hFbGVtZW50ID0gSVBhcmFncmFwaCB8IElDb250YWluZXIgfCBJQ3VzdG9tIHwgSUxpbmsgfCBJUXVvdGUgfCBJVGl0bGUgfCBJSW1hZ2UgfFxuICBJRmlsZSB8IElWaWRlbyB8IElMaXN0IHwgSUxpc3RJdGVtIHwgSUlubGluZSB8IElUYWJsZSB8IElUciB8IElUYm9keSB8IElUaGVhZCB8IElUZm9vdCB8IElUZCB8XG4gIElUaCB8IElWb2lkQmxvY2sgfCBJVm9pZElubGluZSB8IElWb2lkU3VwZXJCbG9jayB8IElVbm1hbmFnZWQ7XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgdGV4dCBuYW1lc3BhY2UsIGFuZCBpdCdzIHVzZWQgaW4gdXVpZCBmb3IgY3JlYXRpbmdcbiAqIGFuIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgZ2l2ZW4gdGV4dCBpbnB1dFxuICovXG5jb25zdCBURVhUX05BTUVTUEFDRSA9IFwiZWU2Y2U1MjktMjRmOC00NTViLThkZDAtOGI1YmQzNzc4MjBkXCI7XG4vKipcbiAqIFRoaXMgaXMgdGhlIFVVSUQgdGhhdCB3aWxsIGJlIHVzZWQgZm9yIG51bGwgZG9jdW1lbnRzXG4gKiBkaXJlY3RseVxuICovXG5jb25zdCBOVUxMX1VVSUQgPSBcIjgzZGQ1NTZiLTg4OWYtNGE5Yi1hZmYwLWY3NDlhMzVhOWMwZlwiO1xuXG4vKipcbiAqIFNlcmlhbGl6ZXMgYSBkb2N1bWVudFxuICogd2lsbCByZXR1cm4gaHRtbCBlbGVtZW50cyBmb3IgcmljaCBkb2N1bWVudHNcbiAqIG9yIGEgc3RyaW5nIGZvciBwbGFpbiBkb2N1bWVudHNcbiAqIEBwYXJhbSBkb2N1bWVudCBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZShyb290OiBJUm9vdExldmVsRG9jdW1lbnQpOiBIVE1MRWxlbWVudFtdIHwgc3RyaW5nIHtcbiAgLy8gaWYgd2UgZGlkbid0IHBhc3MgYW55dGhpbmdcbiAgaWYgKCFyb290KSB7XG4gICAgLy8gaXQncyBiYXNpY2FsbHkgbnVsbFxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gaWYgd2UgaGF2ZSBubyBjaGlsZHJlbiwgaXQncyBudWxsXG4gIGlmIChyb290LmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gZm9yIG5vbiByaWNoIHRleHRcbiAgaWYgKCFyb290LnJpY2gpIHtcbiAgICAvLyB3ZSBhcmUganVzdCBnb2luZyB0byBjaGVjayBldmVyeSBwYXJhZ3JhcGhcbiAgICBsZXQgcmVzdWx0OiBzdHJpbmcgPSBcIlwiO1xuICAgIHJvb3QuY2hpbGRyZW4uZm9yRWFjaCgocGFyYWdyYXBoOiBJUGFyYWdyYXBoKSA9PiB7XG4gICAgICAvLyBhbmQgY29uY2F0ZW5hdGUgc3VjaCwgdGhlcmUgYXJlIG9ubHkgcGFyYWdyYXBoXG4gICAgICAvLyBpbiB0aGlzIG1vZGVcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0ICs9IFwiXFxuXCI7XG4gICAgICB9XG4gICAgICByZXN1bHQgKz0gKHBhcmFncmFwaC5jaGlsZHJlblswXSBhcyBJVGV4dCkudGV4dCB8fCBcIlwiO1xuICAgIH0pO1xuXG4gICAgLy8gcmV0dXJuIHRoZSByZXN1bHRpbmcgY29uY2F0ZW5hdGlvblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyB3aGVuIGl0J3Mgbm90IHJpY2gsIHdlIGdvIGZvciBvdXIgbGFzdCBlbGVtZW50XG4gIGNvbnN0IGxhc3RFbGVtZW50ID0gcm9vdC5jaGlsZHJlbltyb290LmNoaWxkcmVuLmxlbmd0aCAtIDFdO1xuICAvLyBpZiBvdXIgbGFzdCBlbGVtZW50IGlzIGxpdGVyYWxseSBhbiBlbXB0eSBwYXJhZ3JhcGggdGhlbiB3ZSBjb25zaWRlciBzdWNoIGEgdGhpbmcgbmVlZHMgZHJvcHBpbmdcbiAgY29uc3QgbGFzdE5lZWRzRHJvcHBpbmcgPVxuICAgIGxhc3RFbGVtZW50LnR5cGUgPT09IFwicGFyYWdyYXBoXCIgJiZcbiAgICAobGFzdEVsZW1lbnQuY2hpbGRyZW5bMF0gYXMgSVRleHQpLnRleHQgPT09IFwiXCIgJiZcbiAgICBsYXN0RWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPT09IDEgJiZcbiAgICAhbGFzdEVsZW1lbnQudWlIYW5kbGVyICYmXG4gICAgIWxhc3RFbGVtZW50LnN0eWxlICYmXG4gICAgIWxhc3RFbGVtZW50LnJpY2hDbGFzc0xpc3QgJiZcbiAgICAhbGFzdEVsZW1lbnQuc3R5bGVBY3RpdmUgJiZcbiAgICAhbGFzdEVsZW1lbnQuc3R5bGVIb3ZlcjtcblxuICAvLyBhbmQgYXMgc3VjaCB3ZSBkZWZpbmUgd2hhdCBjaGlsZHJlbiB3ZSBhcmUgZ29pbmcgdG8gcHJvY2Vzc1xuICBjb25zdCBjaGlsZHJlblRvUHJvY2VzcyA9IGxhc3ROZWVkc0Ryb3BwaW5nID8gWy4uLnJvb3QuY2hpbGRyZW5dIDogcm9vdC5jaGlsZHJlbjtcblxuICAvLyBpZiB3ZSBhcmUgbm90IGdvaW5nIHRvIHByb2Nlc3MgdGhlIGxhc3Qgd2UgcmVtb3ZlIGl0XG4gIGlmIChsYXN0TmVlZHNEcm9wcGluZykge1xuICAgIGNoaWxkcmVuVG9Qcm9jZXNzLnBvcCgpO1xuICB9XG5cbiAgLy8gaWYgd2UgZ290IG5vdGhpbmcgbGVmdFxuICBpZiAoY2hpbGRyZW5Ub1Byb2Nlc3MubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gaXQncyBudWxsXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBub3cgd2UgY2FuIGNhbGwgdGhlIGZ1bmN0aW9uIHRvIHNlcmlhbGl6ZSB0aGUgZWxlbWVudCB3aGljaCBpcyBkb3duIHRoZXJlXG4gIGNvbnN0IHJlc3VsdHMgPSBjaGlsZHJlblRvUHJvY2Vzcy5tYXAoc2VyaWFsaXplRWxlbWVudCkuZmlsdGVyKChuKSA9PiBuICE9PSBudWxsKSBhcyBIVE1MRWxlbWVudFtdO1xuXG4gIC8vIGlmIHdlIGdvdCBubyByZXN1bHRzIGZvciBzb21lIHJlYXNvbiwgdXN1YWxseSBjb3JydXB0aW9uXG4gIGlmIChyZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIHdlIGdpdmUgbnVsbFxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gb3RoZXJ3aXNlIHJldHVybiB0aGUgYXJyYXkgb2YgaHRtbCBlbGVtZW50IHdlIGhhdmUgcmVjZWl2ZWRcbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbi8qKlxuICogU2VyaWFsaXplcyBhIHNpbmdsZSBlbGVtZW50IGFzIGl0J3MgZ2l2ZW4gaW4gdGhlIHJpY2ggZm9ybVxuICogQHBhcmFtIGVsZW1lbnQgXG4gKi9cbmZ1bmN0aW9uIHNlcmlhbGl6ZUVsZW1lbnQoZWxlbWVudDogUmljaEVsZW1lbnQpIHtcbiAgLy8gd2UgYXJlIGdvaW5nIHRvIGNoZWNrIHRoZSBzZXJpYWxpemF0aW9uIHJlZ2lzdHJ5IGZvciB0aGVcbiAgLy8gZ2l2ZW4gcmljaCBlbGVtZW50XG4gIGlmIChTRVJJQUxJWkFUSU9OX1JFR0lTVFJZLlNFUklBTElaRVtlbGVtZW50LnR5cGVdKSB7XG4gICAgY29uc3QgZm4gPSBTRVJJQUxJWkFUSU9OX1JFR0lTVFJZLlNFUklBTElaRVtlbGVtZW50LnR5cGVdO1xuXG4gICAgLy8gYW5kIGNhbGwgaXRcbiAgICBjb25zdCBjaGlsZEVsZW1lbnQgPSBmbihlbGVtZW50KTtcblxuICAgIC8vIHRoZW4gcmV0dXJuIHRoYXRcbiAgICByZXR1cm4gY2hpbGRFbGVtZW50O1xuICB9XG5cbiAgLy8gb3RoZXJ3aXNlIHdlIGdpdmUgbnVsbFxuICByZXR1cm4gbnVsbDtcbn1cblxuY29uc3QgYmFzaWNDYWNoZVNpemUgPSAxMDtcbmNvbnN0IGJhc2ljQ2FjaGU6IEFycmF5PHtcbiAgaHRtbDogc3RyaW5nIHwgTm9kZVtdO1xuICBkYXRhOiBzdHJpbmc7XG4gIGNoaWxkTm9kZXM6IE5vZGVbXTtcbn0+ID0gW107XG5cbmZ1bmN0aW9uIGNhY2hlZEdldERhdGFGcm9tVGV4dChodG1sOiBzdHJpbmcgfCBOb2RlW10pOiB7IGRhdGE6IHN0cmluZywgY2hpbGROb2RlczogTm9kZVtdIH0ge1xuICBpZiAoIWh0bWwgfHwgKEFycmF5LmlzQXJyYXkoaHRtbCkgJiYgIWh0bWwubGVuZ3RoKSkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBudWxsLFxuICAgICAgY2hpbGROb2RlczogW10sXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2FjaGVkSW5kZXggPSBiYXNpY0NhY2hlLmZpbmRJbmRleCgodikgPT4gdi5odG1sID09PSBodG1sKTtcbiAgaWYgKGNhY2hlZEluZGV4ICE9PSAtMSkge1xuICAgIGNvbnN0IGNhY2hlZCA9IGJhc2ljQ2FjaGVbY2FjaGVkSW5kZXhdO1xuICAgIC8vIG1vdmUgZWxlbWVudCB0byB0aGUgZW5kXG4gICAgYmFzaWNDYWNoZS5zcGxpY2UoY2FjaGVkSW5kZXgsIDEpO1xuICAgIGJhc2ljQ2FjaGUucHVzaChjYWNoZWQpO1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBjYWNoZWQuZGF0YSxcbiAgICAgIGNoaWxkTm9kZXM6IGNhY2hlZC5jaGlsZE5vZGVzLFxuICAgIH1cbiAgfVxuXG4gIC8vIGZpcnN0IHdlIG5lZWQgdG8gYnVpbGQgdGhpcyBkYXRhIGludG8gYSBzdHJpbmdcbiAgLy8gdGhpcyBpcyB0aGUgaHRtbCBkYXRhIG9mIHRoZSBjaGlsZCBub2Rlc1xuICBsZXQgZGF0YTogc3RyaW5nO1xuXG4gIC8vIG5vdyB3ZSBuZWVkIGFsbCB0aGUgY2hpbGQgbm9kZXNcbiAgbGV0IGNoaWxkTm9kZXM6IE5vZGVbXSA9IG51bGw7XG5cbiAgLy8gaWYgd2UgZ290IHRoZSBkYXRhIGFzIGEgc3RyaW5nXG4gIGlmICh0eXBlb2YgaHRtbCA9PT0gXCJzdHJpbmdcIikge1xuICAgIC8vIHdlIG5lZWQgdG8gcGFyc2UgYW5kIHRoZW4gZG8gaXQgbGlrZSB0aGlzXG4gICAgY29uc3QgY2hlYXBkaXYgPSBET01XaW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjaGVhcGRpdi5pbm5lckhUTUwgPSBodG1sO1xuICAgIGNoaWxkTm9kZXMgPSBBcnJheS5mcm9tKGNoZWFwZGl2LmNoaWxkTm9kZXMpO1xuXG4gICAgLy8gdGhlIGRhdGEgaXMgdGhlIHNhbWUgYXMgdGhlIGh0bWxcbiAgICBkYXRhID0gaHRtbDtcbiAgfSBlbHNlIHtcbiAgICAvLyBvdGhlcndpc2Ugb3VyIGNoaWxkIG5vZGVzIGFyZSB0aGUgaHRtbCBpdHNlbGZcbiAgICBjaGlsZE5vZGVzID0gaHRtbCB8fCBbXTtcbiAgICAvLyBpZiB0aGUgaHRtbCBpcyBub3QgbnVsbFxuICAgIGlmIChodG1sICE9PSBudWxsKSB7XG4gICAgICAvLyB0aGVuIHdlIGNhbiBleHRyYWN0IHRoZSBIVE1MIGluZm8gZnJvbSB0aGUgbm9kZXNcbiAgICAgIGNvbnN0IGNoZWFwZGl2ID0gRE9NV2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBBcnJheS5mcm9tKGh0bWwpLmZvckVhY2goKG4pID0+IHtcbiAgICAgICAgY2hlYXBkaXYuYXBwZW5kQ2hpbGQobik7XG4gICAgICB9KTtcbiAgICAgIGRhdGEgPSBjaGVhcGRpdi5pbm5lckhUTUw7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG90aGVyd2lzZSB0aGUgZGF0YSBpcyBhbHNvIG51bGxcbiAgICAgIGRhdGEgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGJhc2ljQ2FjaGUucHVzaCh7XG4gICAgaHRtbCxcbiAgICBkYXRhLFxuICAgIGNoaWxkTm9kZXNcbiAgfSk7XG5cbiAgaWYgKGJhc2ljQ2FjaGUubGVuZ3RoID4gYmFzaWNDYWNoZVNpemUpIHtcbiAgICBiYXNpY0NhY2hlLnNoaWZ0KCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGRhdGEsXG4gICAgY2hpbGROb2RlcyxcbiAgfVxufVxuXG4vKipcbiAqIFByb3ZpZGVzIHRoZSBjb3JyZWN0IHV1aWQgZm9yIGEgZ2l2ZW4gdGV4dCBkYXRhXG4gKiBAcGFyYW0gZGF0YSBcbiAqIEByZXR1cm5zIFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVVJREZvcihkYXRhOiBzdHJpbmcpIHtcbiAgY29uc3QgZXhwZWN0ZWRJZCA9ICFkYXRhID8gTlVMTF9VVUlEIDogdXVpZHY1KGRhdGEsIFRFWFRfTkFNRVNQQUNFKTtcbiAgcmV0dXJuIGV4cGVjdGVkSWQ7XG59XG5cbmNvbnN0IGRlc2VyaWFsaXplQ2FjaGVTaXplID0gMTA7XG5jb25zdCBkZXNlcmlhbGl6ZUNhY2hlOiBBcnJheTx7XG4gIGRhdGE6IHN0cmluZztcbiAgZG9jOiBJUm9vdExldmVsRG9jdW1lbnQ7XG4gIGRvbnROb3JtYWxpemU6IGJvb2xlYW47XG4gIHVzZUNvbnRleHRSdWxlc09mOiBJVGVtcGxhdGVBcmdDb250ZXh0RGVmaW5pdGlvbjtcbn0+ID0gW107XG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGEgZG9jdW1lbnQgZnJvbSB0aGUgSFRNTCBmb3JtIGludG8gYSByb290IGxldmVsIGRvY3VtZW50XG4gKiBAcGFyYW0gaHRtbCB0aGUgaHRtbCBpbiBzdHJpbmcgZm9ybSBvciBhcyBhbiBhcnJheSBvZiBub2Rlc1xuICogQHBhcmFtIGNvbXBhcmVyIGFuIG9wdGlvbmFsIGNvbXBhcmVyIHJvb3QgbGV2ZWwgZG9jdW1lbnQsIGlmIGl0IG1hdGNoZXMgdGhlIHNpZ25hdHVyZVxuICogaXQgd2lsbCBiZSBlZmZpY2llbnQgYW5kIHJldHVybiBzdWNoIGNvbXBhcmVyIGluc3RlYWRcbiAqIEByZXR1cm5zIGEgcm9vdCBsZXZlbCBkb2N1bWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVzZXJpYWxpemUoaHRtbDogc3RyaW5nIHwgTm9kZVtdLCBjb21wYXJlcj86IElSb290TGV2ZWxEb2N1bWVudCwgc3BlY2lhbFJ1bGVzPzogSVNwZWNpYWxSdWxlcykge1xuICBjb25zdCBkb250Tm9ybWFsaXplID0gc3BlY2lhbFJ1bGVzID8gKHNwZWNpYWxSdWxlcy5kb250Tm9ybWFsaXplIHx8IGZhbHNlKSA6IGZhbHNlO1xuICBjb25zdCB1c2VDb250ZXh0UnVsZXNPZiA9IHNwZWNpYWxSdWxlcyA/IChzcGVjaWFsUnVsZXMudXNlQ29udGV4dFJ1bGVzT2YgfHwgbnVsbCkgOiBudWxsO1xuICBjb25zdCBpZ25vcmVOb2Rlc0F0ID0gc3BlY2lhbFJ1bGVzID8gKHNwZWNpYWxSdWxlcy5pZ25vcmVOb2Rlc0F0IHx8IG51bGwpIDogbnVsbDtcblxuICAvLyBmaXJzdCB3ZSBmaW5kIGlmIHdlIGhhdmUgaXQgaW4gdGhlIGNhY2hlIHdoZW4gd2UgdXNlIGEgc3RyaW5nXG4gIC8vIGFzIGluaXRpYWwgdmFsdWVcbiAgaWYgKHR5cGVvZiBodG1sID09PSBcInN0cmluZ1wiICYmICFpZ25vcmVOb2Rlc0F0KSB7XG4gICAgY29uc3QgY2FjaGVkSW5kZXggPSBkZXNlcmlhbGl6ZUNhY2hlXG4gICAgICAuZmluZEluZGV4KCh2KSA9PiB2LmRhdGEgPT09IGh0bWwgJiYgdi5kb250Tm9ybWFsaXplID09PSBkb250Tm9ybWFsaXplICYmIHYudXNlQ29udGV4dFJ1bGVzT2YgPT09IHVzZUNvbnRleHRSdWxlc09mKTtcblxuICAgIGlmIChjYWNoZWRJbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IGNhY2hlZCA9IGRlc2VyaWFsaXplQ2FjaGVbY2FjaGVkSW5kZXhdO1xuICAgICAgLy8gbW92ZSBlbGVtZW50IHRvIHRoZSBlbmRcbiAgICAgIGRlc2VyaWFsaXplQ2FjaGUuc3BsaWNlKGNhY2hlZEluZGV4LCAxKTtcbiAgICAgIGRlc2VyaWFsaXplQ2FjaGUucHVzaChjYWNoZWQpO1xuXG4gICAgICBpZiAoY29tcGFyZXIgJiYgY29tcGFyZXIuaWQgPT09IGNhY2hlZC5kb2MuaWQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBhcmVyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2FjaGVkLmRvYztcbiAgICB9XG4gIH1cblxuICBjb25zdCB7IGRhdGEsIGNoaWxkTm9kZXMgfSA9IGNhY2hlZEdldERhdGFGcm9tVGV4dChodG1sKTtcblxuICAvLyBub3cgaWYgd2UgaGF2ZSBub2RlcyB3ZSBuZWVkIHRvIGNoZWNrIHdoZW4gd2UgY29udmVydCBhcyBhIHN0cmluZ1xuICAvLyBpdCdzIHRoZSBzYW1lIHByb2Nlc3NcbiAgaWYgKHR5cGVvZiBodG1sICE9PSBcInN0cmluZ1wiICYmICFpZ25vcmVOb2Rlc0F0KSB7XG4gICAgY29uc3QgY2FjaGVkSW5kZXggPSBkZXNlcmlhbGl6ZUNhY2hlXG4gICAgICAuZmluZEluZGV4KCh2KSA9PiB2LmRhdGEgPT09IGRhdGEgJiYgdi5kb250Tm9ybWFsaXplID09PSBkb250Tm9ybWFsaXplICYmIHYudXNlQ29udGV4dFJ1bGVzT2YgPT09IHVzZUNvbnRleHRSdWxlc09mKTtcblxuICAgIGlmIChjYWNoZWRJbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IGNhY2hlZCA9IGRlc2VyaWFsaXplQ2FjaGVbY2FjaGVkSW5kZXhdO1xuICAgICAgLy8gbW92ZSBlbGVtZW50IHRvIHRoZSBlbmRcbiAgICAgIGRlc2VyaWFsaXplQ2FjaGUuc3BsaWNlKGNhY2hlZEluZGV4LCAxKTtcbiAgICAgIGRlc2VyaWFsaXplQ2FjaGUucHVzaChjYWNoZWQpO1xuXG4gICAgICBpZiAoY29tcGFyZXIgJiYgY29tcGFyZXIuaWQgPT09IGNhY2hlZC5kb2MuaWQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBhcmVyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2FjaGVkLmRvYztcbiAgICB9XG4gIH1cblxuICAvLyBub3cgd2UgY2FuIGdldCB0aGUgZXhwZWN0ZWQgaWQsIGlmIG91ciBkYXRhIGlzIHNpbXBseSBudWxsLCB0aGVuXG4gIC8vIHdlIHVzZSB0aGUgbnVsbCB1dWlkLCBvdGhlcndpc2Ugd2UgYnVpbGQgYW4gdXVpZCBmcm9tIHRoZSBkYXRhXG4gIGNvbnN0IGV4cGVjdGVkSWQgPSBkYXRhID09PSBudWxsID8gTlVMTF9VVUlEIDogdXVpZHY1KGRhdGEsIFRFWFRfTkFNRVNQQUNFKTtcblxuICAvLyBpZiB3ZSBoYXZlIGEgY29tcGFyZXIgYW5kIHRoZSBjb21wYXJlciBtYXRjaGVzXG4gIGlmIChjb21wYXJlciAmJiBjb21wYXJlci5pZCA9PT0gZXhwZWN0ZWRJZCkge1xuICAgIGlmICghaWdub3JlTm9kZXNBdCkge1xuICAgICAgZGVzZXJpYWxpemVDYWNoZS5wdXNoKHtcbiAgICAgICAgZGF0YSxcbiAgICAgICAgZG9jOiBjb21wYXJlcixcbiAgICAgICAgZG9udE5vcm1hbGl6ZSxcbiAgICAgICAgdXNlQ29udGV4dFJ1bGVzT2YsXG4gICAgICB9KTtcblxuICAgICAgaWYgKGRlc2VyaWFsaXplQ2FjaGUubGVuZ3RoID4gZGVzZXJpYWxpemVDYWNoZVNpemUpIHtcbiAgICAgICAgZGVzZXJpYWxpemVDYWNoZS5zaGlmdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJldHVybiB0aGUgY29tcGFyZXJcbiAgICByZXR1cm4gY29tcGFyZXI7XG4gIH1cblxuICAvLyBub3cgd2UgY2FuIHVzZSB0aGUgZmluYWwgY2hpbGRyZW4gYXMgd2UgY2FsbCB0aGVuIHZpYSB0aGUgZGVzZXJpYWxpemVFbGVtZW50XG4gIC8vIGZ1bmN0aW9uLCBhbmQgcmVtZW1iZXIgdG8gcmVtb3ZlIG51bGxzXG4gIGNvbnN0IGZpbmFsQ2hpbGRyZW4gPSBkZXNlcmlhbGl6ZUNoaWxkcmVuRm9yTm9kZSh7IGNoaWxkTm9kZXM6IGNoaWxkTm9kZXMgfSBhcyBhbnkpIGFzIFJpY2hFbGVtZW50W107XG5cbiAgLy8gYW5kIG5vdyB3ZSBjYW4gYnVpbGQgdGhlIGRvY3VtZW50XG4gIGNvbnN0IG5ld0RvY3VtZW50OiBJUm9vdExldmVsRG9jdW1lbnQgPSB7XG4gICAgdHlwZTogXCJkb2N1bWVudFwiLFxuICAgIGlkOiBleHBlY3RlZElkLFxuICAgIHJpY2g6IHRydWUsXG4gICAgLy8gbm90ZSB0aGF0IHdlIG11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgcGFyYWdyYXBoIGluIHRoZSBmaW5hbFxuICAgIC8vIHJlc3VsdFxuICAgIGNoaWxkcmVuOiBmaW5hbENoaWxkcmVuLmxlbmd0aCA9PT0gMCA/XG4gICAgICBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcInBhcmFncmFwaFwiLFxuICAgICAgICAgIGNoaWxkcmVuOiBbU1RBTkRBUkRfVEVYVF9OT0RFKCldXG4gICAgICAgIH1cbiAgICAgIF0gOlxuICAgICAgZmluYWxDaGlsZHJlbixcbiAgfTtcblxuICAvLyBub3JtYWxpemUgaXRcbiAgaWYgKCFkb250Tm9ybWFsaXplKSB7XG4gICAgbm9ybWFsaXplKG5ld0RvY3VtZW50LCBzcGVjaWFsUnVsZXMgfHwgbnVsbCk7XG4gIH1cblxuICBpZiAoIWlnbm9yZU5vZGVzQXQpIHtcbiAgICBkZXNlcmlhbGl6ZUNhY2hlLnB1c2goe1xuICAgICAgZGF0YSxcbiAgICAgIGRvYzogbmV3RG9jdW1lbnQsXG4gICAgICBkb250Tm9ybWFsaXplLFxuICAgICAgdXNlQ29udGV4dFJ1bGVzT2YsXG4gICAgfSk7XG5cbiAgICBpZiAoZGVzZXJpYWxpemVDYWNoZS5sZW5ndGggPiBkZXNlcmlhbGl6ZUNhY2hlU2l6ZSkge1xuICAgICAgZGVzZXJpYWxpemVDYWNoZS5zaGlmdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJldHVybiBpdFxuICByZXR1cm4gbmV3RG9jdW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemUoXG4gIGRvYzogSVJvb3RMZXZlbERvY3VtZW50LFxuICBzcGVjaWFsUnVsZXM/OiBJU3BlY2lhbFJ1bGVzLFxuKTogSVJvb3RMZXZlbERvY3VtZW50IHtcbiAgaWYgKCFkb2MucmljaCB8fCAoc3BlY2lhbFJ1bGVzICYmIHNwZWNpYWxSdWxlcy5kb250Tm9ybWFsaXplKSkge1xuICAgIHJldHVybiBkb2M7XG4gIH1cbiAgcmV0dXJuIG5vcm1hbGl6ZUVsZW1lbnQoZG9jIGFzIGFueSwgW10sIGRvYywgbnVsbCwgc3BlY2lhbFJ1bGVzIHx8IG51bGwpIGFzIGFueTtcbn1cblxuaW50ZXJmYWNlIElDdXN0b21FeGVjdXRpb24ge1xuICB3b3JrT25PcmlnaW5hbDogYm9vbGVhbjtcbiAgdXBkYXRlTm9kZUF0OiAocGF0aDogbnVtYmVyW10sIHY6IFBhcnRpYWw8UmljaEVsZW1lbnQgfCBJVGV4dD4pID0+IHZvaWQsXG4gIGRlbGV0ZU5vZGVBdDogKHBhdGg6IG51bWJlcltdKSA9PiB2b2lkLFxuICB3cmFwTm9kZUF0OiAocGF0aDogbnVtYmVyW10sIHdyYXBwZXJzOiBSaWNoRWxlbWVudFtdKSA9PiB2b2lkLFxuICBpbnNlcnROb2RlQXQ6IChwYXRoOiBudW1iZXJbXSwgbm9kZTogUmljaEVsZW1lbnQgfCBJVGV4dCwgdGFyZ2V0SW5kZXg6IG51bWJlcikgPT4gdm9pZCxcbiAgbWVyZ2VOb2Rlc0F0OiAoYmFzZVBhdGg6IG51bWJlcltdLCByZWZlcmVuY2VQYXRoOiBudW1iZXJbXSkgPT4gdm9pZCxcbiAgc3BsaXRFbGVtZW50QW5kRXNjYXBlQ2hpbGRJbnRvUGFyZW50QXQ6IChwYXRoOiBudW1iZXJbXSwgZXNjYXBpbmdDaGlsZEluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG4gIGdldE5vZGVBdDogKHBhdGg6IG51bWJlcltdKSA9PiBSaWNoRWxlbWVudCB8IElUZXh0O1xuICBjbG9uZUVsZW1lbnRBdDogKGZyb21QYXRoOiBudW1iZXJbXSwgdG9QYXRoOiBudW1iZXJbXSkgPT4gdm9pZDtcbiAgbW92ZU5vZGVBdDogKGZyb21QYXRoOiBudW1iZXJbXSwgdG9QYXRoOiBudW1iZXJbXSkgPT4gdm9pZDtcbn07XG5cbmludGVyZmFjZSBJU3BlY2lhbFJ1bGVzIHtcbiAgaWdub3JlTm9kZXNBdD86IEFycmF5PG51bWJlcltdPjtcbiAgLyoqXG4gICAqIFRoaXMgc2hvdWxkIGJlIHRoZSByb290IGNvbnRleHRcbiAgICovXG4gIHVzZUNvbnRleHRSdWxlc09mPzogSVRlbXBsYXRlQXJnQ29udGV4dERlZmluaXRpb247XG4gIC8qKlxuICAgKiBhdm9pZCBub3JtYWxpemF0aW9uIGFsdG9nZXRoZXJcbiAgICovXG4gIGRvbnROb3JtYWxpemU/OiBib29sZWFuO1xufVxuXG5jb25zdCBzdGFuZGFyZEV4ZWNGbjogKHJvb3Q6IElSb290TGV2ZWxEb2N1bWVudCkgPT4gSUN1c3RvbUV4ZWN1dGlvbiA9IChyb290KSA9PiAoe1xuICB3b3JrT25PcmlnaW5hbDogdHJ1ZSxcbiAgdXBkYXRlTm9kZUF0KHBhdGg6IG51bWJlcltdLCBkYXRhOiBQYXJ0aWFsPFJpY2hFbGVtZW50IHwgSVRleHQ+KSB7XG4gICAgY29uc3Qgbm9kZSA9IGdldE5vZGVGb3IocGF0aCwgcm9vdCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJ1cGRhdGluZ1wiLCBKU09OLnN0cmluZ2lmeShub2RlKSwgXCJ3aXRoXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICBub2RlW2tdID0gZGF0YVtrXTtcbiAgICB9KTtcbiAgfSxcbiAgZGVsZXRlTm9kZUF0KHBhdGg6IG51bWJlcltdKSB7XG4gICAgY29uc3Qgbm9kZSA9IGdldE5vZGVGb3IocGF0aCwgcm9vdCk7XG4gICAgY29uc3QgcGFyZW50ID0gZ2V0UGFyZW50Tm9kZUZvcihwYXRoLCByb290KTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImRlbGV0aW5nXCIsIEpTT04uc3RyaW5naWZ5KG5vZGUpLCBcImF0XCIsIEpTT04uc3RyaW5naWZ5KHBhcmVudCkpO1xuICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UocGF0aFtwYXRoLmxlbmd0aCAtIDFdLCAxKTtcbiAgfSxcbiAgd3JhcE5vZGVBdChwYXRoOiBudW1iZXJbXSwgd3JhcHBlcnM6IFJpY2hFbGVtZW50W10pIHtcbiAgICBjb25zdCBwYXJlbnRPZk5vZGVUb1dyYXAgPSBnZXRQYXJlbnROb2RlRm9yKHBhdGgsIHJvb3QpO1xuICAgIGNvbnN0IGluZGV4QXRDaGlsZCA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwid3JhcHBpbmdcIiwgSlNPTi5zdHJpbmdpZnkocGFyZW50T2ZOb2RlVG9XcmFwLmNoaWxkcmVuW2luZGV4QXRDaGlsZF0pLCBcIndpdGhcIiwgSlNPTi5zdHJpbmdpZnkod3JhcHBlcnMpKTtcbiAgICB3cmFwcGVycy5mb3JFYWNoKCh3KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZFRvV3JhcCA9IHBhcmVudE9mTm9kZVRvV3JhcC5jaGlsZHJlbltpbmRleEF0Q2hpbGRdO1xuICAgICAgdy5jaGlsZHJlbiA9IFtjaGlsZFRvV3JhcF0gYXMgYW55O1xuICAgICAgcGFyZW50T2ZOb2RlVG9XcmFwLmNoaWxkcmVuW2luZGV4QXRDaGlsZF0gPSB3O1xuICAgIH0pO1xuICB9LFxuICBpbnNlcnROb2RlQXQocGF0aDogbnVtYmVyW10sIG5vZGU6IFJpY2hFbGVtZW50IHwgSVRleHQsIHRhcmdldEluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZ2V0Tm9kZUZvcihwYXRoLCByb290KSBhcyBSaWNoRWxlbWVudDtcbiAgICAvLyBjb25zb2xlLmxvZyhcImluc2VydGluZ1wiLCBKU09OLnN0cmluZ2lmeShub2RlKSwgXCJhdFwiLCBKU09OLnN0cmluZ2lmeShlbGVtZW50KSk7XG4gICAgZWxlbWVudC5jaGlsZHJlbi5zcGxpY2UodGFyZ2V0SW5kZXgsIDAsIG5vZGUgYXMgYW55KTtcbiAgfSxcbiAgbWVyZ2VOb2Rlc0F0KGJhc2VQYXRoOiBudW1iZXJbXSwgcmVmZXJlbmNlUGF0aDogbnVtYmVyW10pIHtcbiAgICBjb25zdCBiYXNlID0gZ2V0Tm9kZUZvcihiYXNlUGF0aCwgcm9vdCk7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gZ2V0Tm9kZUZvcihyZWZlcmVuY2VQYXRoLCByb290KTtcbiAgICBjb25zdCBwYXJlbnQgPSBnZXRQYXJlbnROb2RlRm9yKGJhc2VQYXRoLCByb290KTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIm1lcmdpbmdcIiwgSlNPTi5zdHJpbmdpZnkoYmFzZSksIFwid2l0aFwiLCBKU09OLnN0cmluZ2lmeShyZWZlcmVuY2UpKTtcbiAgICBpZiAodHlwZW9mIChiYXNlIGFzIFJpY2hFbGVtZW50KS50eXBlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAoYmFzZSBhcyBSaWNoRWxlbWVudCkuY2hpbGRyZW4gPSAoKGJhc2UgYXMgUmljaEVsZW1lbnQpLmNoaWxkcmVuIGFzIGFueSkuY29uY2F0KChyZWZlcmVuY2UgYXMgUmljaEVsZW1lbnQpLmNoaWxkcmVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgKGJhc2UgYXMgSVRleHQpLnRleHQgKz0gKHJlZmVyZW5jZSBhcyBJVGV4dCkudGV4dDtcbiAgICB9XG4gICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShyZWZlcmVuY2VQYXRoW3JlZmVyZW5jZVBhdGgubGVuZ3RoIC0gMV0sIDEpO1xuICB9LFxuICBzcGxpdEVsZW1lbnRBbmRFc2NhcGVDaGlsZEludG9QYXJlbnRBdChwYXRoOiBudW1iZXJbXSwgZXNjYXBpbmdDaGlsZEluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZ2V0Tm9kZUZvcihwYXRoLCByb290KSBhcyBSaWNoRWxlbWVudDtcbiAgICBjb25zdCBwYXJlbnQgPSBnZXRQYXJlbnROb2RlRm9yKHBhdGgsIHJvb3QpIGFzIFJpY2hFbGVtZW50O1xuXG4gICAgLy8gY29uc29sZS5sb2coXCJzcGxpdHRpbmdcIiwgSlNPTi5zdHJpbmdpZnkoZWxlbWVudCksIFwiYXQgY2hpbGQgaW5kZXhcIiwgSlNPTi5zdHJpbmdpZnkoZXNjYXBpbmdDaGlsZEluZGV4KSk7XG5cbiAgICBjb25zdCBhbGxOb2Rlc0JlZm9yZVRoaXMgPSBlbGVtZW50LmNoaWxkcmVuLnNsaWNlKDAsIGVzY2FwaW5nQ2hpbGRJbmRleCk7XG4gICAgY29uc3QgZXNjYXBpbmdDaGlsZCA9IGVsZW1lbnQuY2hpbGRyZW5bZXNjYXBpbmdDaGlsZEluZGV4XTtcbiAgICBjb25zdCBhbGxOb2Rlc0FmdGVyVGhpcyA9IGVsZW1lbnQuY2hpbGRyZW4uc2xpY2UoZXNjYXBpbmdDaGlsZEluZGV4ICsgMSk7XG4gICAgZWxlbWVudC5jaGlsZHJlbiA9IGFsbE5vZGVzQmVmb3JlVGhpcztcblxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSB7XG4gICAgICAuLi5lbGVtZW50LFxuICAgICAgY2hpbGRyZW46IGFsbE5vZGVzQWZ0ZXJUaGlzLFxuICAgIH1cblxuICAgIGNvbnN0IGluZGV4QXRQYXJlbnQgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gKyAxO1xuXG4gICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleEF0UGFyZW50LCAwLCBuZXdFbGVtZW50IGFzIGFueSk7XG4gICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleEF0UGFyZW50LCAwLCBlc2NhcGluZ0NoaWxkIGFzIGFueSk7XG4gIH0sXG4gIGdldE5vZGVBdChwYXRoOiBudW1iZXJbXSkge1xuICAgIHJldHVybiBnZXROb2RlRm9yKHBhdGgsIHJvb3QpIGFzIGFueTtcbiAgfSxcbiAgY2xvbmVFbGVtZW50QXQoZnJvbVBhdGg6IG51bWJlcltdLCB0b1BhdGg6IG51bWJlcltdKSB7XG4gICAgY29uc3QgZWxlbWVudFRvQ29weSA9IGdldE5vZGVGb3IoZnJvbVBhdGgsIHJvb3QpIGFzIFJpY2hFbGVtZW50O1xuICAgIGNvbnN0IGNvcHkgPSB7IC4uLmVsZW1lbnRUb0NvcHkgfTtcbiAgICBjb3B5LmNoaWxkcmVuID0gW107XG5cbiAgICBjb25zdCBwYXJlbnRUYXJnZXQgPSBnZXRQYXJlbnROb2RlRm9yKHRvUGF0aCwgcm9vdCkgYXMgUmljaEVsZW1lbnQ7XG4gICAgY29uc3QgaW5kZXhUYXJnZXQgPSB0b1BhdGhbdG9QYXRoLmxlbmd0aCAtIDFdO1xuXG4gICAgcGFyZW50VGFyZ2V0LmNoaWxkcmVuLnNwbGljZShpbmRleFRhcmdldCwgMCwgY29weSBhcyBhbnkpO1xuICB9LFxuICBtb3ZlTm9kZUF0KGZyb21QYXRoOiBudW1iZXJbXSwgdG9QYXRoOiBudW1iZXJbXSkge1xuICAgIGNvbnN0IGVsZW1lbnRUb01vdmUgPSBnZXROb2RlRm9yKGZyb21QYXRoLCByb290KTtcbiAgICBjb25zdCBwYXJlbnRTb3VyY2UgPSBnZXRQYXJlbnROb2RlRm9yKGZyb21QYXRoLCByb290KTtcbiAgICBjb25zdCBwYXJlbnRUYXJnZXQgPSBnZXRQYXJlbnROb2RlRm9yKHRvUGF0aCwgcm9vdCk7XG4gICAgY29uc3QgaW5kZXhUYXJnZXQgPSB0b1BhdGhbdG9QYXRoLmxlbmd0aCAtIDFdO1xuXG4gICAgLy8gcmVtb3ZlIGZyb20gc291cmNlXG4gICAgcGFyZW50U291cmNlLmNoaWxkcmVuLnNwbGljZShmcm9tUGF0aFtmcm9tUGF0aC5sZW5ndGggLSAxXSwgMSk7XG4gICAgLy8gYWRkIHRvIHRhcmdldFxuICAgIHBhcmVudFRhcmdldC5jaGlsZHJlbi5zcGxpY2UoaW5kZXhUYXJnZXQsIDAsIGVsZW1lbnRUb01vdmUgYXMgYW55KTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNwYWNpbmcoXG4gIGVsZW1lbnQ6IFJpY2hFbGVtZW50IHwgSVJvb3RMZXZlbERvY3VtZW50LFxuICBwYXRoOiBudW1iZXJbXSxcbiAgcHJpbWFyeUV4ZWN1dGlvbjogSUN1c3RvbUV4ZWN1dGlvbixcbiAgc2Vjb25kYXJ5RXhlY3V0aW9uOiBJQ3VzdG9tRXhlY3V0aW9uLFxuICBzcGVjaWFsUnVsZXM/OiBJU3BlY2lhbFJ1bGVzLFxuKSB7XG4gIGNvbnN0IGlzSWdub3JlZCA9IGlzSWdub3JlZE5vZGUocGF0aCwgc3BlY2lhbFJ1bGVzKTtcbiAgaWYgKGlzSWdub3JlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGlmIHRoZXJlIGFyZSBjaGlsZHJlbiBpbiB0aGUgcmVzdWx0IGFuZCB0aGV5IGhhcHBlblxuICAvLyB0byBiZSBzb21lIGlubGluZSBpbiB0aGVtIHdlIG5lZWQgdG8gZW5zdXJlIHRoZXJlIGFyZVxuICAvLyBlbXB0eSB0ZXh0IG5vZGVzIGJldHdlZW4gdGhlIGlubGluZXMgc28gdGhleVxuICAvLyBjYW4gYmUgc2VsZWN0ZWQgcHJvcGVybHlcbiAgaWYgKFxuICAgIGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoICYmXG4gICAgZWxlbWVudC5jaGlsZHJlbi5zb21lKChyKSA9PiBpc0lubGluZShyKSlcbiAgKSB7XG4gICAgLy8gYW5kIG5vdyB3ZSBsb29wIGluIGVhY2ggb25lIG9mIHRoZSBjaGlsZHJlblxuICAgIGxldCBvZmZzZXQgPSAwO1xuICAgIGNvbnN0IGNoaWxkcmVuQW1vdW50ID0gZWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbkFtb3VudDsgaSsrKSB7XG4gICAgICBsZXQgYWN0dWFsSW5kZXggPSBpICsgb2Zmc2V0O1xuICAgICAgY29uc3QgY3VycmVudE5vZGUgPSBlbGVtZW50LmNoaWxkcmVuW2FjdHVhbEluZGV4XTtcbiAgICAgIGNvbnN0IGN1cnJlbnROb2RlUGF0aCA9IFsuLi5wYXRoLCBhY3R1YWxJbmRleF07XG4gICAgICBjb25zdCBpc0lnbm9yZWQgPSBpc0lnbm9yZWROb2RlKGN1cnJlbnROb2RlUGF0aCwgc3BlY2lhbFJ1bGVzKTtcblxuICAgICAgaWYgKGlzSWdub3JlZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzSW5saW5lKGN1cnJlbnROb2RlKSkge1xuICAgICAgICAvLyBnZXQgb3VyIGN1cnJlbnQsIHByZXYsIGFuZCBuZXh0IG5vZGUgZnJvbSB0aGUgcGFyc2VkIHZhbHVlc1xuICAgICAgICBjb25zdCBwcmV2Tm9kZTogYW55ID0gZWxlbWVudC5jaGlsZHJlblthY3R1YWxJbmRleCAtIDFdO1xuICAgICAgICBjb25zdCBuZXh0Tm9kZTogYW55ID0gZWxlbWVudC5jaGlsZHJlblthY3R1YWxJbmRleCArIDFdO1xuXG4gICAgICAgIC8vIHdlIG5lZWQgdGhlc2UgdGV4dHMgZnJvbSByZWZlcmVuY2UgYW5kIHRoZXkgYXJlIHRha2VuIGZyb21cbiAgICAgICAgLy8gdGhlIGN1cnJlbnROb2RlLCBpbnNpZGUgdGhlIGlubGluZSBlbGVtZW50LCBpbiBvcmRlciB0byBwb3B1bGF0ZVxuICAgICAgICAvLyB0aGUgZ2Fwc1xuICAgICAgICBjb25zdCB0ZXh0Tm9kZVN0YXJ0ID0gKGN1cnJlbnROb2RlIGFzIFJpY2hFbGVtZW50KS5jaGlsZHJlblswXSBhcyBJVGV4dDtcbiAgICAgICAgY29uc3QgdGV4dE5vZGVFbmQgPSAoY3VycmVudE5vZGUgYXMgUmljaEVsZW1lbnQpLmNoaWxkcmVuWyhjdXJyZW50Tm9kZSBhcyBSaWNoRWxlbWVudCkuY2hpbGRyZW4ubGVuZ3RoIC0gMV0gYXMgSVRleHQ7XG5cbiAgICAgICAgaWYgKCFwcmV2Tm9kZSB8fCB0eXBlb2YgcHJldk5vZGUudGV4dCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIC8vIHdlIHVzZSB0aGUgc3RhcnQgdGV4dCBhcyBhIHJlZmVyZW5jZSBmb3IgdGhlIHNwYWNlciBnYXBcbiAgICAgICAgICBjb25zdCB0ZXh0UmVmZXJlbmNlID0ge1xuICAgICAgICAgICAgYm9sZDogZmFsc2UsXG4gICAgICAgICAgICBpdGFsaWM6IGZhbHNlLFxuICAgICAgICAgICAgdW5kZXJsaW5lOiBmYWxzZSxcbiAgICAgICAgICAgIC4uLmNvcHlFbGVtZW50QmFzZSh0ZXh0Tm9kZVN0YXJ0KSxcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcHJpbWFyeUV4ZWN1dGlvbi5pbnNlcnROb2RlQXQoXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgdGV4dFJlZmVyZW5jZSxcbiAgICAgICAgICAgIC8vIGluc2VydCB3aGVyZSB3ZSBhcmUgbm93IGFuZCBwdXNoIHVzIGZvcndhcmRzXG4gICAgICAgICAgICBhY3R1YWxJbmRleCxcbiAgICAgICAgICApO1xuICAgICAgICAgIHNlY29uZGFyeUV4ZWN1dGlvbiAmJiBzZWNvbmRhcnlFeGVjdXRpb24uaW5zZXJ0Tm9kZUF0KFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIHRleHRSZWZlcmVuY2UsXG4gICAgICAgICAgICAvLyBpbnNlcnQgd2hlcmUgd2UgYXJlIG5vdyBhbmQgcHVzaCB1cyBmb3J3YXJkc1xuICAgICAgICAgICAgYWN0dWFsSW5kZXgsXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGFjdHVhbEluZGV4ICs9IDE7XG4gICAgICAgICAgb2Zmc2V0ICs9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5leHROb2RlIHx8IHR5cGVvZiBuZXh0Tm9kZS50ZXh0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgLy8gd2UgdXNlIHRoZSBzdGFydCB0ZXh0IGFzIGEgcmVmZXJlbmNlIGZvciB0aGUgc3BhY2VyIGdhcFxuICAgICAgICAgIGNvbnN0IHRleHRSZWZlcmVuY2UgPSB7XG4gICAgICAgICAgICBib2xkOiBmYWxzZSxcbiAgICAgICAgICAgIGl0YWxpYzogZmFsc2UsXG4gICAgICAgICAgICB1bmRlcmxpbmU6IGZhbHNlLFxuICAgICAgICAgICAgLi4uY29weUVsZW1lbnRCYXNlKHRleHROb2RlRW5kKSxcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcHJpbWFyeUV4ZWN1dGlvbi5pbnNlcnROb2RlQXQoXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgdGV4dFJlZmVyZW5jZSxcbiAgICAgICAgICAgIC8vIGluc2VydCBhaGVhZCBvZiB3aGVyZSB3ZSBhcmUgbm93IGFuZCBwdXNoIGV2ZXJ5dGhpbmcgZWxzZVxuICAgICAgICAgICAgLy8gZm9yd2FyZHNcbiAgICAgICAgICAgIGFjdHVhbEluZGV4ICsgMSxcbiAgICAgICAgICApO1xuICAgICAgICAgIHNlY29uZGFyeUV4ZWN1dGlvbiAmJiBzZWNvbmRhcnlFeGVjdXRpb24uaW5zZXJ0Tm9kZUF0KFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIHRleHRSZWZlcmVuY2UsXG4gICAgICAgICAgICAvLyBpbnNlcnQgYWhlYWQgb2Ygd2hlcmUgd2UgYXJlIG5vdyBhbmQgcHVzaCBldmVyeXRoaW5nIGVsc2VcbiAgICAgICAgICAgIC8vIGZvcndhcmRzXG4gICAgICAgICAgICBhY3R1YWxJbmRleCArIDEsXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGFjdHVhbEluZGV4ICs9IDE7XG4gICAgICAgICAgb2Zmc2V0ICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gREVMRVRFIEVNUFRZIFRFWFQgTk9ERVNcbiAgaWYgKGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID49IDIpIHtcbiAgICBjb25zdCBjaGlsZHJlbkFtb3VudCA9IGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGlmIChjaGlsZHJlbkFtb3VudCA+PSAyKSB7XG4gICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW5BbW91bnQ7IGkrKykge1xuICAgICAgICBjb25zdCBhY3R1YWxJbmRleCA9IGkgKyBvZmZzZXQ7XG4gICAgICAgIGNvbnN0IHYgPSBlbGVtZW50LmNoaWxkcmVuW2FjdHVhbEluZGV4XTtcbiAgICAgICAgY29uc3QgcHJldk5vZGUgPSBlbGVtZW50LmNoaWxkcmVuW2FjdHVhbEluZGV4IC0gMV07XG4gICAgICAgIGNvbnN0IG5leHROb2RlID0gZWxlbWVudC5jaGlsZHJlblthY3R1YWxJbmRleCArIDFdO1xuICAgICAgICBjb25zdCBpc0lubGluZVNlcGFyYXRvciA9ICghcHJldk5vZGUgfHwgaXNJbmxpbmUocHJldk5vZGUpKSAmJiAoIW5leHROb2RlIHx8IGlzSW5saW5lKG5leHROb2RlKSk7XG5cbiAgICAgICAgLy8gd2Ugd2lsbCBzdG9wIHJpZ2h0IGF3YXkgZXZlbiBpZiB3ZSBhcmUgbm90IHN1cmUgaWYgdGhpcyBpcyBhIHRleHQgbm9kZSBiZWNhdXNlLCB3ZWxsXG4gICAgICAgIC8vIGl0IHdpbGwgYmUgcmVtb3ZlZCBhbnl3YXlcbiAgICAgICAgaWYgKGlzSW5saW5lU2VwYXJhdG9yKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub2RlUGF0aCA9IFsuLi5wYXRoLCBhY3R1YWxJbmRleF07XG4gICAgICAgIGNvbnN0IGlzSWdub3JlZCA9IGlzSWdub3JlZE5vZGUobm9kZVBhdGgsIHNwZWNpYWxSdWxlcyk7XG5cbiAgICAgICAgaWYgKGlzSWdub3JlZCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiAodiBhcyBJVGV4dCkudGV4dCAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhKHYgYXMgSVRleHQpLnRleHQpIHtcbiAgICAgICAgICBwcmltYXJ5RXhlY3V0aW9uLmRlbGV0ZU5vZGVBdChcbiAgICAgICAgICAgIG5vZGVQYXRoLFxuICAgICAgICAgICk7XG4gICAgICAgICAgc2Vjb25kYXJ5RXhlY3V0aW9uICYmIHNlY29uZGFyeUV4ZWN1dGlvbi5kZWxldGVOb2RlQXQoXG4gICAgICAgICAgICBub2RlUGF0aCxcbiAgICAgICAgICApO1xuICAgICAgICAgIG9mZnNldCAtPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gYWRkIHRvIGVtcHR5IGVsZW1lbnRzXG4gIGlmIChcbiAgICBlbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA9PT0gMCAmJlxuICAgIChcbiAgICAgIGlzSW5saW5lKGVsZW1lbnQpIHx8XG4gICAgICBpc0Jsb2NrKGVsZW1lbnQpIHx8XG4gICAgICBpc1N1cGVyQmxvY2soZWxlbWVudClcbiAgICApXG4gICkge1xuICAgIGNvbnN0IG5vZGVUb0luc2VydCA9IGFsbG93c1RleHQoZWxlbWVudCkgPyBTVEFOREFSRF9URVhUX05PREUoKSA6IFNFUklBTElaQVRJT05fUkVHSVNUUlkuT05fRU1QVFlfRklMTF9XSVRIW2VsZW1lbnQudHlwZV0oKTtcbiAgICBwcmltYXJ5RXhlY3V0aW9uLmluc2VydE5vZGVBdChcbiAgICAgIHBhdGgsXG4gICAgICBub2RlVG9JbnNlcnQsXG4gICAgICAwLFxuICAgICk7XG4gICAgc2Vjb25kYXJ5RXhlY3V0aW9uICYmIHNlY29uZGFyeUV4ZWN1dGlvbi5pbnNlcnROb2RlQXQoXG4gICAgICBwYXRoLFxuICAgICAgbm9kZVRvSW5zZXJ0LFxuICAgICAgMCxcbiAgICApO1xuICB9IGVsc2UgaWYgKGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID49IDIpIHtcbiAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICBjb25zdCBjaGlsZHJlbkFtb3VudCA9IGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW5BbW91bnQ7IGkrKykge1xuICAgICAgY29uc3QgYWN0dWFsSW5kZXggPSBpICsgb2Zmc2V0O1xuICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG4xID0gZWxlbWVudC5jaGlsZHJlblthY3R1YWxJbmRleCAtIDFdO1xuICAgICAgY29uc3QgbjIgPSBlbGVtZW50LmNoaWxkcmVuW2FjdHVhbEluZGV4XTtcblxuICAgICAgY29uc3Qgc2hvdWxkTWVyZ2UgPSBjaGVja1Nob3VsZE1lcmdlKG4xLCBuMik7XG5cbiAgICAgIGlmIChzaG91bGRNZXJnZSkge1xuICAgICAgICBjb25zdCBiYXNlUGF0aCA9IFsuLi5wYXRoLCBhY3R1YWxJbmRleCAtIDFdO1xuICAgICAgICBjb25zdCByZWZlcmVuY2VQYXRoID0gWy4uLnBhdGgsIGFjdHVhbEluZGV4XTtcbiAgICAgICAgcHJpbWFyeUV4ZWN1dGlvbi5tZXJnZU5vZGVzQXQoXG4gICAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgICAgcmVmZXJlbmNlUGF0aCxcbiAgICAgICAgKTtcbiAgICAgICAgc2Vjb25kYXJ5RXhlY3V0aW9uICYmIHNlY29uZGFyeUV4ZWN1dGlvbi5tZXJnZU5vZGVzQXQoXG4gICAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgICAgcmVmZXJlbmNlUGF0aCxcbiAgICAgICAgKTtcbiAgICAgICAgb2Zmc2V0IC09IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZWxlbWVudC5jaGlsZHJlbi5mb3JFYWNoKChjLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGNoaWxkcmVuUGF0aCA9IFsuLi5wYXRoLCBpbmRleF07XG5cbiAgICBjb25zdCBpc0lnbm9yZWQgPSBpc0lnbm9yZWROb2RlKGNoaWxkcmVuUGF0aCwgc3BlY2lhbFJ1bGVzKTtcbiAgICBpZiAoIWlzSWdub3JlZCAmJiAoYyBhcyBSaWNoRWxlbWVudCkudHlwZSkge1xuICAgICAgbm9ybWFsaXplU3BhY2luZyhjIGFzIFJpY2hFbGVtZW50LCBjaGlsZHJlblBhdGgsIHByaW1hcnlFeGVjdXRpb24sIHNlY29uZGFyeUV4ZWN1dGlvbiwgc3BlY2lhbFJ1bGVzKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpc0lnbm9yZWROb2RlKHBhdGg6IG51bWJlcltdLCBzcGVjaWFsUnVsZXM6IElTcGVjaWFsUnVsZXMpIHtcbiAgaWYgKCFzcGVjaWFsUnVsZXMgfHwgIXNwZWNpYWxSdWxlcy5pZ25vcmVOb2Rlc0F0KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHNwZWNpYWxSdWxlcyAmJiBzcGVjaWFsUnVsZXMuZG9udE5vcm1hbGl6ZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHNwZWNpYWxSdWxlcy5pZ25vcmVOb2Rlc0F0LnNvbWUoKGlnbm9yZVBhdGgpID0+IHtcbiAgICAvLyB0aGUgc2FtZSBleGFjdCBub2RlIHdpdGggdGhlIHNhbWUgbWVtb3J5IGFkZHJlc3NcbiAgICByZXR1cm4gaWdub3JlUGF0aC5ldmVyeSgodiwgaW5kZXgpID0+IHBhdGhbaW5kZXhdID09PSB2KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNoYWxsb3dSb290Q29weTxUPihcbiAgZWxlbWVudDogVCxcbik6IFQge1xuICBjb25zdCBuZXdFbGVtZW50OiBhbnkgPSB7fVxuICBjb25zdCBtZXJnYWJsZSA9IGlzVGV4dChlbGVtZW50IGFzIGFueSkgfHwgaXNNZXJnYWJsZShlbGVtZW50IGFzIGFueSk7XG4gIE9iamVjdC5rZXlzKGVsZW1lbnQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmIChrZXkgPT09IFwiY2hpbGRyZW5cIikge1xuICAgICAgbmV3RWxlbWVudC5jaGlsZHJlbiA9IChlbGVtZW50IGFzIGFueSBhcyBSaWNoRWxlbWVudCkuY2hpbGRyZW4ubWFwKHNoYWxsb3dSb290Q29weSk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGtleSA9PT0gXCJ0ZXh0XCJcbiAgICApIHtcbiAgICAgIC8vIGlmIHRoZXJlJ3MgdGV4dFxuICAgICAgaWYgKGVsZW1lbnRba2V5XSkge1xuICAgICAgICBuZXdFbGVtZW50W2tleV0gPSBcIj9cIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlmIHRoZXJlJ3Mgbm8gdGV4dFxuICAgICAgICBuZXdFbGVtZW50W2tleV0gPSBcIlwiO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyByZXF1aXJlZCBmb3Igdm9pZHNcbiAgICAgIGtleSA9PT0gXCJodG1sXCIgfHxcbiAgICAgIGtleSA9PT0gXCJ0ZXh0Q29udGVudFwiXG4gICAgKSB7XG4gICAgICBuZXdFbGVtZW50W2tleV0gPSBcIj9cIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgLy8gaW1wb3J0YW50XG4gICAgICBrZXkgPT09IFwidHlwZVwiIHx8XG4gICAgICAvLyBpbmxpbmVzIGluZm8gYXJlIHJlcXVpcmVkIGFsbCBhdHRyaWJ1dGVzIGZvciBjaGVjayBmb3IgbWVyZ2luZ1xuICAgICAgLy8gdG8gc2VlIGlmIGl0IGNhbiBiZSBtZXJnZWQgd2l0aCB0aGUgbmV4dCBvbmVcbiAgICAgIG1lcmdhYmxlIHx8XG4gICAgICAvLyB1aSBoYW5kbGVyIGFyZSByZXF1aXJlZCB0byBnZXQgdGhlIGNvbnRleHRcbiAgICAgIC8vIGZvciBvdGhlciBub3JtYWxpemF0aW9uIGF0dHJpYnV0ZXNcbiAgICAgIGtleSA9PT0gXCJ1aUhhbmRsZXJcIiB8fFxuICAgICAga2V5ID09PSBcImNvbnRleHRcIiB8fFxuICAgICAga2V5ID09PSBcImZvckVhY2hcIlxuICAgICkge1xuICAgICAgbmV3RWxlbWVudFtrZXldID0gZWxlbWVudFtrZXldO1xuICAgIH1cbiAgfSlcblxuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUVsZW1lbnQoXG4gIGVsZW1lbnQ6IFJpY2hFbGVtZW50IHwgSVJvb3RMZXZlbERvY3VtZW50LFxuICBwYXRoOiBudW1iZXJbXSxcbiAgcm9vdDogSVJvb3RMZXZlbERvY3VtZW50LFxuICBjdXN0b21FeGVjdXRpb24/OiBJQ3VzdG9tRXhlY3V0aW9uLFxuICBzcGVjaWFsUnVsZXM/OiBJU3BlY2lhbFJ1bGVzLFxuKSB7XG4gIGlmIChzcGVjaWFsUnVsZXMgJiYgc3BlY2lhbFJ1bGVzLmRvbnROb3JtYWxpemUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBwcmltYXJ5RXhlY3V0aW9uID0gY3VzdG9tRXhlY3V0aW9uIHx8IHN0YW5kYXJkRXhlY0ZuKHJvb3QpO1xuXG4gIGxldCBleGVjdXRpb25Sb290ID0gcm9vdDtcbiAgbGV0IGV4ZWN1dGlvbkVsZW1lbnQgPSBlbGVtZW50O1xuICBsZXQgc2Vjb25kYXJ5RXhlY3V0aW9uOiBJQ3VzdG9tRXhlY3V0aW9uID0gbnVsbDtcbiAgaWYgKCFwcmltYXJ5RXhlY3V0aW9uLndvcmtPbk9yaWdpbmFsKSB7XG4gICAgZXhlY3V0aW9uUm9vdCA9IHNoYWxsb3dSb290Q29weShyb290KTtcbiAgICBzZWNvbmRhcnlFeGVjdXRpb24gPSBzdGFuZGFyZEV4ZWNGbihleGVjdXRpb25Sb290KTtcbiAgICBleGVjdXRpb25FbGVtZW50ID0gZ2V0Tm9kZUZvcihwYXRoLCBleGVjdXRpb25Sb290KSBhcyBSaWNoRWxlbWVudDtcbiAgfVxuXG4gIGludGVybmFsTm9ybWFsaXplRWxlbWVudChleGVjdXRpb25FbGVtZW50LCBwYXRoLCBleGVjdXRpb25Sb290LCBwcmltYXJ5RXhlY3V0aW9uLCBzZWNvbmRhcnlFeGVjdXRpb24sIHNwZWNpYWxSdWxlcyk7XG59XG5cbmZ1bmN0aW9uIGludGVybmFsTm9ybWFsaXplRWxlbWVudChcbiAgZWxlbWVudDogUmljaEVsZW1lbnQgfCBJUm9vdExldmVsRG9jdW1lbnQsXG4gIHBhdGg6IG51bWJlcltdLFxuICBleGVjdXRpb25Sb290OiBJUm9vdExldmVsRG9jdW1lbnQsXG4gIHByaW1hcnlFeGVjdXRpb246IElDdXN0b21FeGVjdXRpb24sXG4gIHNlY29uZGFyeUV4ZWN1dGlvbjogSUN1c3RvbUV4ZWN1dGlvbixcbiAgc3BlY2lhbFJ1bGVzPzogSVNwZWNpYWxSdWxlcyxcbikge1xuICBjb25zdCB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gIGNvbnN0IGlzSWdub3JlZCA9IGlzSWdub3JlZE5vZGUocGF0aCwgc3BlY2lhbFJ1bGVzKTtcbiAgaWYgKGlzSWdub3JlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghc3BlY2lhbFJ1bGVzIHx8ICEoc3BlY2lhbFJ1bGVzIGFzIGFueSkuX3BhcmVudEhhbmRsaW5nKSB7XG4gICAgcnVuQ3VzdG9tTm9ybShcbiAgICAgIFwicHJlXCIsXG4gICAgICBlbGVtZW50LFxuICAgICAgcGF0aCxcbiAgICAgIGV4ZWN1dGlvblJvb3QsXG4gICAgICBwcmltYXJ5RXhlY3V0aW9uLFxuICAgICAgc2Vjb25kYXJ5RXhlY3V0aW9uLFxuICAgICAgc3BlY2lhbFJ1bGVzLFxuICAgICk7XG4gIH1cblxuICAvLyBsZXQncyBmaW5kIGludmFsaWQgdGV4dCBpbnNpZGUgc3VwZXJibG9ja1xuICBsZXQgb2Zmc2V0ID0gMDtcbiAgbGV0IGluZGV4ID0gMDtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBhY3R1YWxDaGlsZEluZGV4ID0gaW5kZXggKyBvZmZzZXQ7XG4gICAgY29uc3QgY2hpbGRyZW5QYXRoID0gWy4uLnBhdGgsIGFjdHVhbENoaWxkSW5kZXhdO1xuICAgIGNvbnN0IHYgPSBlbGVtZW50LmNoaWxkcmVuW2FjdHVhbENoaWxkSW5kZXhdO1xuICAgIGNvbnN0IGlzSWdub3JlZCA9IGlzSWdub3JlZE5vZGUoY2hpbGRyZW5QYXRoLCBzcGVjaWFsUnVsZXMpO1xuXG4gICAgaWYgKGlzSWdub3JlZCkge1xuICAgICAgaW5kZXgrKztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH0gZWxzZSBpZiAoIXYpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbm5vdEhhdmVUZXh0QXNDaGlsZHJlbiA9IChcbiAgICAgIChcbiAgICAgICAgU0VSSUFMSVpBVElPTl9SRUdJU1RSWS5TVVBFUkJMT0NLU1t0eXBlXSAmJlxuICAgICAgICAvLyBwcmV2ZW50IGRlbGV0aW5nIHRleHQgaW4gdm9pZCBzdXBlcmJsb2Nrc1xuICAgICAgICAhU0VSSUFMSVpBVElPTl9SRUdJU1RSWS5WT0lEU1t0eXBlXVxuICAgICAgKSB8fFxuICAgICAgU0VSSUFMSVpBVElPTl9SRUdJU1RSWS5QUk9ISUJJVF9URVhUW3R5cGVdXG4gICAgKTtcblxuICAgIGlmIChlbGVtZW50LnR5cGUgPT09IFwidW5tYW5hZ2VkXCIpIHtcbiAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09IFwiYnJcIikge1xuICAgICAgICBwcmltYXJ5RXhlY3V0aW9uLnVwZGF0ZU5vZGVBdChcbiAgICAgICAgICBjaGlsZHJlblBhdGgsXG4gICAgICAgICAgeyB0YWdOYW1lOiB1bmRlZmluZWQsIHR5cGU6IFwicGFyYWdyYXBoXCIsIGNoaWxkcmVuOiBbU1RBTkRBUkRfVEVYVF9OT0RFKCldIH0gYXMgYW55LFxuICAgICAgICApO1xuICAgICAgICBzZWNvbmRhcnlFeGVjdXRpb24gJiYgc2Vjb25kYXJ5RXhlY3V0aW9uLnVwZGF0ZU5vZGVBdChcbiAgICAgICAgICBjaGlsZHJlblBhdGgsXG4gICAgICAgICAgeyB0YWdOYW1lOiB1bmRlZmluZWQsIHR5cGU6IFwicGFyYWdyYXBoXCIsIGNoaWxkcmVuOiBbU1RBTkRBUkRfVEVYVF9OT0RFKCldIH0gYXMgYW55LFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZGVsZXRlIHVubWFuYWdlZCBub2RlcyBkdXJpbmcgbm9ybWFsaXphdGlvblxuICAgICAgICBwcmltYXJ5RXhlY3V0aW9uLmRlbGV0ZU5vZGVBdChjaGlsZHJlblBhdGgpO1xuICAgICAgICBzZWNvbmRhcnlFeGVjdXRpb24gJiYgc2Vjb25kYXJ5RXhlY3V0aW9uLmRlbGV0ZU5vZGVBdChjaGlsZHJlblBhdGgpO1xuICAgICAgICBvZmZzZXQgLT0gMTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiAodiBhcyBJVGV4dCkudGV4dCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgaWYgKGNhbm5vdEhhdmVUZXh0QXNDaGlsZHJlbikge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gKFxuICAgICAgICAgIFNFUklBTElaQVRJT05fUkVHSVNUUlkuT05fSU5WQUxJRF9URVhUX1dSQVBfV0lUSFt0eXBlXSA/XG4gICAgICAgICAgICBTRVJJQUxJWkFUSU9OX1JFR0lTVFJZLk9OX0lOVkFMSURfVEVYVF9XUkFQX1dJVEhbdHlwZV0odiBhcyBJVGV4dCkgOlxuICAgICAgICAgICAgbnVsbFxuICAgICAgICApO1xuICAgICAgICBpZiAoIXdyYXBwZXIpIHtcbiAgICAgICAgICBwcmltYXJ5RXhlY3V0aW9uLmRlbGV0ZU5vZGVBdChjaGlsZHJlblBhdGgpO1xuICAgICAgICAgIHNlY29uZGFyeUV4ZWN1dGlvbiAmJiBzZWNvbmRhcnlFeGVjdXRpb24uZGVsZXRlTm9kZUF0KGNoaWxkcmVuUGF0aCk7XG4gICAgICAgICAgb2Zmc2V0IC09IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbWFyeUV4ZWN1dGlvbi53cmFwTm9kZUF0KGNoaWxkcmVuUGF0aCwgd3JhcHBlcik7XG4gICAgICAgICAgc2Vjb25kYXJ5RXhlY3V0aW9uICYmIHNlY29uZGFyeUV4ZWN1dGlvbi53cmFwTm9kZUF0KGNoaWxkcmVuUGF0aCwgd3JhcHBlcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaXNBbGxvd2VkVHlwZSA9IFNFUklBTElaQVRJT05fUkVHSVNUUlkuQUxMT1dTX0NISUxEUkVOW3R5cGVdID9cbiAgICAgICAgU0VSSUFMSVpBVElPTl9SRUdJU1RSWS5BTExPV1NfQ0hJTERSRU5bdHlwZV0uaW5jbHVkZXMoKHYgYXMgUmljaEVsZW1lbnQpLnR5cGUpIDogdHJ1ZTtcblxuICAgICAgY29uc3QgaXNUZXh0RGVuaWVkSW5TdXBlckJsb2NrID0gdHlwZW9mICh2IGFzIElUZXh0KS50ZXh0ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgIFNFUklBTElaQVRJT05fUkVHSVNUUlkuU1VQRVJCTE9DS1NbZWxlbWVudC50eXBlXTtcbiAgICAgIGNvbnN0IGlzSW5saW5lRGVuaWVkSW5TdXBlckJsb2NrID0gU0VSSUFMSVpBVElPTl9SRUdJU1RSWS5JTkxJTkVTWyh2IGFzIFJpY2hFbGVtZW50KS50eXBlXSAmJlxuICAgICAgICBTRVJJQUxJWkFUSU9OX1JFR0lTVFJZLlNVUEVSQkxPQ0tTW2VsZW1lbnQudHlwZV07XG4gICAgICBjb25zdCBpc0lubGluZURlbmllZEluSW5saW5lID0gU0VSSUFMSVpBVElPTl9SRUdJU1RSWS5JTkxJTkVTWyh2IGFzIFJpY2hFbGVtZW50KS50eXBlXSAmJlxuICAgICAgICBTRVJJQUxJWkFUSU9OX1JFR0lTVFJZLklOTElORVNbZWxlbWVudC50eXBlXTtcbiAgICAgIGNvbnN0IGlzQmxvY2tEZW5pZWRJbkJsb2NrID0gU0VSSUFMSVpBVElPTl9SRUdJU1RSWS5CTE9DS1NbKHYgYXMgUmljaEVsZW1lbnQpLnR5cGVdICYmXG4gICAgICAgIFNFUklBTElaQVRJT05fUkVHSVNUUlkuQkxPQ0tTW2VsZW1lbnQudHlwZV07XG4gICAgICBjb25zdCBpc0Jsb2NrRGVuaWVkSW5JbmxpbmUgPSBTRVJJQUxJWkFUSU9OX1JFR0lTVFJZLkJMT0NLU1sodiBhcyBSaWNoRWxlbWVudCkudHlwZV0gJiZcbiAgICAgICAgU0VSSUFMSVpBVElPTl9SRUdJU1RSWS5JTkxJTkVTW2VsZW1lbnQudHlwZV07XG4gICAgICBjb25zdCBpc1N1cGVyYmxvY2tEZW5pZWRJbkJsb2NrID0gU0VSSUFMSVpBVElPTl9SRUdJU1RSWS5TVVBFUkJMT0NLU1sodiBhcyBSaWNoRWxlbWVudCkudHlwZV0gJiZcbiAgICAgICAgU0VSSUFMSVpBVElPTl9SRUdJU1RSWS5CTE9DS1NbZWxlbWVudC50eXBlXTtcbiAgICAgIGNvbnN0IGlzU3VwZXJibG9ja0RlbmllZEluSW5saW5lID0gU0VSSUFMSVpBVElPTl9SRUdJU1RSWS5TVVBFUkJMT0NLU1sodiBhcyBSaWNoRWxlbWVudCkudHlwZV0gJiZcbiAgICAgICAgU0VSSUFMSVpBVElPTl9SRUdJU1RSWS5JTkxJTkVTW2VsZW1lbnQudHlwZV07XG4gICAgICBjb25zdCBpc05vblRleHREZW5pZWRJblZvaWQgPSB0eXBlb2YgKHYgYXMgSVRleHQpLnRleHQgPT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgU0VSSUFMSVpBVElPTl9SRUdJU1RSWS5WT0lEU1tlbGVtZW50LnR5cGVdO1xuXG4gICAgICBjb25zdCBoYXNQcm9ibGVtcyA9IChcbiAgICAgICAgIWlzQWxsb3dlZFR5cGUgfHxcbiAgICAgICAgaXNJbmxpbmVEZW5pZWRJblN1cGVyQmxvY2sgfHxcbiAgICAgICAgaXNJbmxpbmVEZW5pZWRJbklubGluZSB8fFxuICAgICAgICBpc0Jsb2NrRGVuaWVkSW5CbG9jayB8fFxuICAgICAgICBpc0Jsb2NrRGVuaWVkSW5JbmxpbmUgfHxcbiAgICAgICAgaXNTdXBlcmJsb2NrRGVuaWVkSW5CbG9jayB8fFxuICAgICAgICBpc1N1cGVyYmxvY2tEZW5pZWRJbklubGluZSB8fFxuICAgICAgICBpc05vblRleHREZW5pZWRJblZvaWRcbiAgICAgICk7XG5cbiAgICAgIGlmICghaGFzUHJvYmxlbXMpIHtcbiAgICAgICAgaWYgKCh2IGFzIFJpY2hFbGVtZW50KS50eXBlKSB7XG4gICAgICAgICAgaW50ZXJuYWxOb3JtYWxpemVFbGVtZW50KFxuICAgICAgICAgICAgdiBhcyBSaWNoRWxlbWVudCxcbiAgICAgICAgICAgIGNoaWxkcmVuUGF0aCxcbiAgICAgICAgICAgIGV4ZWN1dGlvblJvb3QsXG4gICAgICAgICAgICBwcmltYXJ5RXhlY3V0aW9uLFxuICAgICAgICAgICAgc2Vjb25kYXJ5RXhlY3V0aW9uLFxuICAgICAgICAgICAgeyAuLi5zcGVjaWFsUnVsZXMsIF9wYXJlbnRIYW5kbGluZzogdHJ1ZSB9IGFzIGFueSxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjYW5Tb2x2ZUJ5V3JhcHBpbmcgPSAoXG4gICAgICAgICAgaXNJbmxpbmVEZW5pZWRJblN1cGVyQmxvY2sgfHxcbiAgICAgICAgICBpc1RleHREZW5pZWRJblN1cGVyQmxvY2sgfHxcbiAgICAgICAgICAoU0VSSUFMSVpBVElPTl9SRUdJU1RSWS5TVVBFUkJMT0NLU1tlbGVtZW50LnR5cGVdICYmICFpc0FsbG93ZWRUeXBlKVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGNhblNvbHZlQnlTcGxpdHRpbmcgPSAoXG4gICAgICAgICAgaXNJbmxpbmVEZW5pZWRJbklubGluZSB8fFxuICAgICAgICAgIGlzQmxvY2tEZW5pZWRJbkJsb2NrIHx8XG4gICAgICAgICAgaXNTdXBlcmJsb2NrRGVuaWVkSW5CbG9ja1xuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGNhblNvbHZlQnlEb3VibGVTcGxpdHRpbmcgPSAoXG4gICAgICAgICAgaXNTdXBlcmJsb2NrRGVuaWVkSW5JbmxpbmVcbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChjYW5Tb2x2ZUJ5V3JhcHBpbmcpIHtcbiAgICAgICAgICBjb25zdCB3cmFwcGVyID0gKFxuICAgICAgICAgICAgU0VSSUFMSVpBVElPTl9SRUdJU1RSWS5PTl9JTlZBTElEX0NISUxEUkVOX1dSQVBfV0lUSFt0eXBlXSA/XG4gICAgICAgICAgICAgIFNFUklBTElaQVRJT05fUkVHSVNUUlkuT05fSU5WQUxJRF9DSElMRFJFTl9XUkFQX1dJVEhbdHlwZV0odiBhcyBSaWNoRWxlbWVudCkgOlxuICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoIXdyYXBwZXIpIHtcbiAgICAgICAgICAgIHByaW1hcnlFeGVjdXRpb24uZGVsZXRlTm9kZUF0KGNoaWxkcmVuUGF0aCk7XG4gICAgICAgICAgICBzZWNvbmRhcnlFeGVjdXRpb24gJiYgc2Vjb25kYXJ5RXhlY3V0aW9uLmRlbGV0ZU5vZGVBdChjaGlsZHJlblBhdGgpO1xuICAgICAgICAgICAgb2Zmc2V0IC09IDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByaW1hcnlFeGVjdXRpb24ud3JhcE5vZGVBdChjaGlsZHJlblBhdGgsIHdyYXBwZXIpO1xuICAgICAgICAgICAgc2Vjb25kYXJ5RXhlY3V0aW9uICYmIHNlY29uZGFyeUV4ZWN1dGlvbi53cmFwTm9kZUF0KGNoaWxkcmVuUGF0aCwgd3JhcHBlcik7XG4gICAgICAgICAgICBpZiAoIWlzVGV4dERlbmllZEluU3VwZXJCbG9jaykge1xuICAgICAgICAgICAgICBpbnRlcm5hbE5vcm1hbGl6ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlblthY3R1YWxDaGlsZEluZGV4XSBhcyBSaWNoRWxlbWVudCxcbiAgICAgICAgICAgICAgICBjaGlsZHJlblBhdGgsXG4gICAgICAgICAgICAgICAgZXhlY3V0aW9uUm9vdCxcbiAgICAgICAgICAgICAgICBwcmltYXJ5RXhlY3V0aW9uLFxuICAgICAgICAgICAgICAgIHNlY29uZGFyeUV4ZWN1dGlvbixcbiAgICAgICAgICAgICAgICB7IC4uLnNwZWNpYWxSdWxlcywgX3BhcmVudEhhbmRsaW5nOiB0cnVlIH0gYXMgYW55LFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjYW5Tb2x2ZUJ5U3BsaXR0aW5nKSB7XG4gICAgICAgICAgY29uc3QgZXhwZWN0ZWRQYXJlbnRPZkVsZW1lbnRQYXRoID0gWy4uLnBhdGhdO1xuICAgICAgICAgIGV4cGVjdGVkUGFyZW50T2ZFbGVtZW50UGF0aC5wb3AoKTtcblxuICAgICAgICAgIGNvbnN0IHRhcmdldFRvU3RvcmVQYXRoID0gaXNCbG9ja0RlbmllZEluQmxvY2sgfHwgaXNTdXBlcmJsb2NrRGVuaWVkSW5CbG9jayA/IChcbiAgICAgICAgICAgIGV4cGVjdGVkUGFyZW50T2ZFbGVtZW50UGF0aCB8fCBbXVxuICAgICAgICAgICkgOiBleHBlY3RlZFBhcmVudE9mRWxlbWVudFBhdGg7XG5cbiAgICAgICAgICBjb25zdCB0YXJnZXRUb1N0b3JlID0gZ2V0Tm9kZUZvcih0YXJnZXRUb1N0b3JlUGF0aCwgZXhlY3V0aW9uUm9vdCk7XG5cbiAgICAgICAgICBjb25zdCBleHBlY3RlZFR5cGUgPSBpc0Jsb2NrRGVuaWVkSW5CbG9jayB8fCBpc1N1cGVyYmxvY2tEZW5pZWRJbkJsb2NrID8gXCJzdXBlcmJsb2NrXCIgOiBcImJsb2NrXCI7XG5cbiAgICAgICAgICAvLyB0aGUgdGFyZ2V0IHN1cGVyYmxvY2sgaXMgbm90IGl0cyBwYXJlbnQgb3Igbm8gcGFyZW50IGJsb2NrIHdhcyBmb3VuZFxuICAgICAgICAgIGlmICghdGFyZ2V0VG9TdG9yZSB8fCAoZXhwZWN0ZWRUeXBlID09PSBcInN1cGVyYmxvY2tcIiA/IGlzU3VwZXJCbG9jayh0YXJnZXRUb1N0b3JlKSA6IGlzQmxvY2sodGFyZ2V0VG9TdG9yZSkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJDYW5ub3QgcmVzb2x2ZSwgeW91IGhhdmUgcmVxdWVzdGVkIGNoaWxkIG5vcm1hbGl6YXRpb24gYnV0IHRoZSB0cmVlIGlzIGludmFsaWQgb24gdGhlIHVwcGVyIHNpZGVcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGZpcnN0IGxldCdzIGNyZWF0ZSBhIG5ldyBub2RlIGFmdGVyIHRoaXMgdGhhdCBpcyBhIGNvcHkgb2YgdGhpcyBlbGVtZW50XG4gICAgICAgICAgICBwcmltYXJ5RXhlY3V0aW9uLnNwbGl0RWxlbWVudEFuZEVzY2FwZUNoaWxkSW50b1BhcmVudEF0KFxuICAgICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgICBhY3R1YWxDaGlsZEluZGV4LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNlY29uZGFyeUV4ZWN1dGlvbiAmJiBzZWNvbmRhcnlFeGVjdXRpb24uc3BsaXRFbGVtZW50QW5kRXNjYXBlQ2hpbGRJbnRvUGFyZW50QXQoXG4gICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgIGFjdHVhbENoaWxkSW5kZXgsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgb2Zmc2V0IC09IDE7XG5cbiAgICAgICAgICAgIC8vIG5vdyBvdXIgY2hpbGQgZXhpc3RzIG5leHQgdG8gdGhlIG5vZGUgd2UgYXJlIG5vcm1hbGl6aW5nXG4gICAgICAgICAgICAvLyBvciBpdCBzaG91bGQgYmUgdGhlcmVcbiAgICAgICAgICAgIGNvbnN0IG5ld0NoaWxkSW5kZXggPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gKyAxO1xuXG4gICAgICAgICAgICBpbnRlcm5hbE5vcm1hbGl6ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICh0YXJnZXRUb1N0b3JlIGFzIFJpY2hFbGVtZW50KS5jaGlsZHJlbltuZXdDaGlsZEluZGV4XSBhcyBSaWNoRWxlbWVudCxcbiAgICAgICAgICAgICAgdGFyZ2V0VG9TdG9yZVBhdGguY29uY2F0KFtuZXdDaGlsZEluZGV4XSksXG4gICAgICAgICAgICAgIGV4ZWN1dGlvblJvb3QsXG4gICAgICAgICAgICAgIHByaW1hcnlFeGVjdXRpb24sXG4gICAgICAgICAgICAgIHNlY29uZGFyeUV4ZWN1dGlvbixcbiAgICAgICAgICAgICAgeyAuLi5zcGVjaWFsUnVsZXMsIF9wYXJlbnRIYW5kbGluZzogdHJ1ZSB9IGFzIGFueSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNhblNvbHZlQnlEb3VibGVTcGxpdHRpbmcpIHtcbiAgICAgICAgICAvLyBwcmV0dHkgbXVjaCBvbmx5IGhhcHBlbnMgd2hlbiBhIHN1cGVyYmxvY2sgaXMgaW5zaWRlIGFuIGlubGluZVxuICAgICAgICAgIC8vIHdlIG1vdmUgZG93biB0d28gbGV2ZWxzIHRvIGdldCB0byB0aGUgc3VwZXJibG9ja1xuICAgICAgICAgIGNvbnN0IHRhcmdldEJsb2NrUGF0aCA9IFsuLi5wYXRoXTtcbiAgICAgICAgICB0YXJnZXRCbG9ja1BhdGgucG9wKCk7XG5cbiAgICAgICAgICBjb25zdCB0YXJnZXRTdXBlckJsb2NrID0gZ2V0UGFyZW50Tm9kZUZvcih0YXJnZXRCbG9ja1BhdGgsIGV4ZWN1dGlvblJvb3QpO1xuICAgICAgICAgIGNvbnN0IHRhcmdldEJsb2NrID0gZ2V0Tm9kZUZvcih0YXJnZXRCbG9ja1BhdGgsIGV4ZWN1dGlvblJvb3QpO1xuXG4gICAgICAgICAgLy8gdGhpcyB0aW1lIHdlIGdvIHR3byBsYXllcnMgZG93biB0byBjaGVjaywgd2UgYXJlIGFuIGlubGluZSBhbmQgdGhlIGNoaWxkXG4gICAgICAgICAgLy8gaXMgYSBzdXBlcmJsb2NrLCB3ZSBuZWVkIHRvIGZpbmQgdGhlIG90aGVyIHN1cGVyYmxvY2sgd2hpY2ggc2hvdWxkIGJlIHR3byBsYXllcnMgYWJvdmVcbiAgICAgICAgICBpZiAoIXRhcmdldFN1cGVyQmxvY2sgfHwgIWlzU3VwZXJCbG9jayh0YXJnZXRTdXBlckJsb2NrKSB8fCAhdGFyZ2V0QmxvY2sgfHwgIWlzQmxvY2sodGFyZ2V0QmxvY2spKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJDYW5ub3QgcmVzb2x2ZSwgeW91IGhhdmUgcmVxdWVzdGVkIGNoaWxkIG5vcm1hbGl6YXRpb24gYnV0IHRoZSB0cmVlIGlzIGludmFsaWQgb24gdGhlIHVwcGVyIHNpZGVcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGZpcnN0IGxldCdzIHNwbGl0IHRoZSBzdXBlcmJsb2NrIGFuZCBlc2NhcGUgaXQgaW50byB0aGUgYmxvY2tcbiAgICAgICAgICAgIC8vIG91ciBlbGVtZW50IGlzIHRoZSBpbmxpbmUsIGFuZCB3ZSBhcmUgZXNjYXBpbmcgdGhlIHRhcmdldCBzdXBlcmJsb2NrXG4gICAgICAgICAgICBwcmltYXJ5RXhlY3V0aW9uLnNwbGl0RWxlbWVudEFuZEVzY2FwZUNoaWxkSW50b1BhcmVudEF0KFxuICAgICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgICBhY3R1YWxDaGlsZEluZGV4LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNlY29uZGFyeUV4ZWN1dGlvbiAmJiBzZWNvbmRhcnlFeGVjdXRpb24uc3BsaXRFbGVtZW50QW5kRXNjYXBlQ2hpbGRJbnRvUGFyZW50QXQoXG4gICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgIGFjdHVhbENoaWxkSW5kZXgsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgb2Zmc2V0IC09IDE7XG5cbiAgICAgICAgICAgIC8vIG5vdyB3ZSBuZWVkIHRvIGZpbmQgdGhlIGNoaWxkIGluZGV4IHRoYXQgc2hvdWQgYmVcbiAgICAgICAgICAgIC8vIHJpZ2h0IG5leHQgdG8gdXMgKHRoZSBpbmxpbmUpIGluIHRoZSBibG9ja1xuICAgICAgICAgICAgLy8gYnV0IHRoYXQncyBzdGlsbCBpbnZhbGlkXG4gICAgICAgICAgICBjb25zdCBuZXdDaGlsZEluZGV4QXRCbG9jayA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXSArIDE7XG5cbiAgICAgICAgICAgIC8vIG5vdyB3ZSBhcmUgZXNjYXBpbmcgdGhpcyBzYW1lIGVsZW1lbnQsIG5vdyBmcm9tIHRoZSBwYXJlbnQgYmxvY2tcbiAgICAgICAgICAgIC8vIGludG8gdGhlIHN1cGVyYmxvY2tcbiAgICAgICAgICAgIHByaW1hcnlFeGVjdXRpb24uc3BsaXRFbGVtZW50QW5kRXNjYXBlQ2hpbGRJbnRvUGFyZW50QXQoXG4gICAgICAgICAgICAgIHRhcmdldEJsb2NrUGF0aCxcbiAgICAgICAgICAgICAgbmV3Q2hpbGRJbmRleEF0QmxvY2ssXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2Vjb25kYXJ5RXhlY3V0aW9uICYmIHNlY29uZGFyeUV4ZWN1dGlvbi5zcGxpdEVsZW1lbnRBbmRFc2NhcGVDaGlsZEludG9QYXJlbnRBdChcbiAgICAgICAgICAgICAgdGFyZ2V0QmxvY2tQYXRoLFxuICAgICAgICAgICAgICBuZXdDaGlsZEluZGV4QXRCbG9jayxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIG5vdyB3ZSBleHBlY3QgdGhlIGNoaWxkIHRvIGJlIGFoZWFkIG9mIHRoZSB0YXJnZXQgYmxvY2tcbiAgICAgICAgICAgIGNvbnN0IG5ld0NoaWxkUGF0aCA9IFsuLi50YXJnZXRCbG9ja1BhdGhdO1xuICAgICAgICAgICAgbmV3Q2hpbGRQYXRoW25ld0NoaWxkUGF0aC5sZW5ndGggLSAxXSsrO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdDaGlsZEluZGV4QXRTdXBlckJsb2NrID0gbmV3Q2hpbGRQYXRoW25ld0NoaWxkUGF0aC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGNvbnN0IG91ckVsZW1lbnQgPSB0YXJnZXRTdXBlckJsb2NrLmNoaWxkcmVuW25ld0NoaWxkSW5kZXhBdFN1cGVyQmxvY2tdIGFzIFJpY2hFbGVtZW50O1xuXG4gICAgICAgICAgICAvLyBhbmQgd2UgcmVxdWVzdCBpdCB0byBiZSBub3JtYWxpemVkXG4gICAgICAgICAgICBpbnRlcm5hbE5vcm1hbGl6ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIG91ckVsZW1lbnQsXG4gICAgICAgICAgICAgIG5ld0NoaWxkUGF0aCxcbiAgICAgICAgICAgICAgZXhlY3V0aW9uUm9vdCxcbiAgICAgICAgICAgICAgcHJpbWFyeUV4ZWN1dGlvbixcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5RXhlY3V0aW9uLFxuICAgICAgICAgICAgICB7IC4uLnNwZWNpYWxSdWxlcywgX3BhcmVudEhhbmRsaW5nOiB0cnVlIH0gYXMgYW55LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gaGVyZSBnb2VzIGlzTm9uVGV4dERlbmllZEluVm9pZFxuICAgICAgICAgIHByaW1hcnlFeGVjdXRpb24uZGVsZXRlTm9kZUF0KGNoaWxkcmVuUGF0aCk7XG4gICAgICAgICAgc2Vjb25kYXJ5RXhlY3V0aW9uICYmIHNlY29uZGFyeUV4ZWN1dGlvbi5kZWxldGVOb2RlQXQoY2hpbGRyZW5QYXRoKVxuICAgICAgICAgIG9mZnNldCAtPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIC8vIHdlIG9ubHkgd2FudCB0byBjYWxsIHRoZXNlIGZ1bmN0aW9ucyBhdCB0aGUgcm9vdCBsZXZlbFxuICAvLyBzbyB3ZSBub3JtYWxpemUgZnJvbSB0aGVyZVxuICBpZiAoIXNwZWNpYWxSdWxlcyB8fCAhKHNwZWNpYWxSdWxlcyBhcyBhbnkpLl9wYXJlbnRIYW5kbGluZykge1xuICAgIGlmIChzcGVjaWFsUnVsZXMgJiYgc3BlY2lhbFJ1bGVzLnVzZUNvbnRleHRSdWxlc09mKSB7XG4gICAgICBub3JtYWxpemVBY2NvcmRpbmdUb1VJSEFuZGxlclJ1bGVzKFxuICAgICAgICBlbGVtZW50LFxuICAgICAgICBwYXRoLFxuICAgICAgICBleGVjdXRpb25Sb290LFxuICAgICAgICBwcmltYXJ5RXhlY3V0aW9uLFxuICAgICAgICBzZWNvbmRhcnlFeGVjdXRpb24sXG4gICAgICAgIHNwZWNpYWxSdWxlcyxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgbm9ybWFsaXplU3BhY2luZyhcbiAgICAgIGVsZW1lbnQsXG4gICAgICBwYXRoLFxuICAgICAgcHJpbWFyeUV4ZWN1dGlvbixcbiAgICAgIHNlY29uZGFyeUV4ZWN1dGlvbixcbiAgICAgIHNwZWNpYWxSdWxlcyxcbiAgICApO1xuXG4gICAgcnVuQ3VzdG9tTm9ybShcbiAgICAgIFwicG9zdFwiLFxuICAgICAgZWxlbWVudCxcbiAgICAgIHBhdGgsXG4gICAgICBleGVjdXRpb25Sb290LFxuICAgICAgcHJpbWFyeUV4ZWN1dGlvbixcbiAgICAgIHNlY29uZGFyeUV4ZWN1dGlvbixcbiAgICAgIHNwZWNpYWxSdWxlcyxcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJ1bkN1c3RvbU5vcm0oXG4gIHRpbWU6IFwicHJlXCIgfCBcInBvc3RcIixcbiAgZWxlbWVudDogUmljaEVsZW1lbnQgfCBJUm9vdExldmVsRG9jdW1lbnQsXG4gIHBhdGg6IG51bWJlcltdLFxuICBleGVjdXRpb25Sb290OiBJUm9vdExldmVsRG9jdW1lbnQsXG4gIHByaW1hcnlFeGVjdXRpb246IElDdXN0b21FeGVjdXRpb24sXG4gIHNlY29uZGFyeUV4ZWN1dGlvbjogSUN1c3RvbUV4ZWN1dGlvbixcbiAgc3BlY2lhbFJ1bGVzOiBJU3BlY2lhbFJ1bGVzLFxuKSB7XG4gIGNvbnN0IGN1c3RvbU5vcm0gPSB0aW1lID09PSBcInByZVwiID9cbiAgICBTRVJJQUxJWkFUSU9OX1JFR0lTVFJZLkNVU1RPTV9OT1JNQUxJWkVSX1BSRVtlbGVtZW50LnR5cGVdIDpcbiAgICBTRVJJQUxJWkFUSU9OX1JFR0lTVFJZLkNVU1RPTV9OT1JNQUxJWkVSX1BPU1RbZWxlbWVudC50eXBlXTtcblxuICBpZiAoY3VzdG9tTm9ybSkge1xuICAgIGN1c3RvbU5vcm0oZWxlbWVudCwgcGF0aCwgZXhlY3V0aW9uUm9vdCwgcHJpbWFyeUV4ZWN1dGlvbiwgc2Vjb25kYXJ5RXhlY3V0aW9uLCBzcGVjaWFsUnVsZXMpO1xuICB9XG5cbiAgZWxlbWVudC5jaGlsZHJlbi5mb3JFYWNoKChjLCBpbmRleCkgPT4ge1xuICAgIGlmIChpc0VsZW1lbnQoYykpIHtcbiAgICAgIGNvbnN0IGNoaWxkUGF0aCA9IFsuLi5wYXRoLCBpbmRleF07XG4gICAgICBydW5DdXN0b21Ob3JtKFxuICAgICAgICB0aW1lLFxuICAgICAgICBjIGFzIGFueSxcbiAgICAgICAgY2hpbGRQYXRoLFxuICAgICAgICBleGVjdXRpb25Sb290LFxuICAgICAgICBwcmltYXJ5RXhlY3V0aW9uLFxuICAgICAgICBzZWNvbmRhcnlFeGVjdXRpb24sXG4gICAgICAgIHNwZWNpYWxSdWxlcyxcbiAgICAgIClcbiAgICB9XG4gIH0pO1xufVxuXG5jb25zdCBwYXRjaExpc3QgPSB7XG4gIGlubGluZTogXCJ2b2lkLWlubGluZVwiLFxuICBcInZvaWQtaW5saW5lXCI6IFwiaW5saW5lXCIsXG4gIHBhcmFncmFwaDogXCJ2b2lkLWJsb2NrXCIsXG4gIFwidm9pZC1ibG9ja1wiOiBcInBhcmFncmFwaFwiLFxuICBjb250YWluZXI6IFwidm9pZC1zdXBlcmJsb2NrXCIsXG4gIFwidm9pZC1zdXBlcmJsb2NrXCI6IFwiY29udGFpbmVyXCIsXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUFjY29yZGluZ1RvVUlIQW5kbGVyUnVsZXMoXG4gIGVsZW1lbnQ6IFJpY2hFbGVtZW50IHwgSVJvb3RMZXZlbERvY3VtZW50LFxuICBwYXRoOiBudW1iZXJbXSxcbiAgZXhlY3V0aW9uUm9vdDogSVJvb3RMZXZlbERvY3VtZW50LFxuICBwcmltYXJ5RXhlY3V0aW9uOiBJQ3VzdG9tRXhlY3V0aW9uLFxuICBzZWNvbmRhcnlFeGVjdXRpb246IElDdXN0b21FeGVjdXRpb24sXG4gIHNwZWNpYWxSdWxlcz86IElTcGVjaWFsUnVsZXMsXG4pIHtcbiAgY29uc3QgaXNJZ25vcmVkID0gaXNJZ25vcmVkTm9kZShwYXRoLCBzcGVjaWFsUnVsZXMpO1xuICBpZiAoaXNJZ25vcmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgdWlIYW5kbGVyID0gKGVsZW1lbnQgYXMgSUVsZW1lbnRCYXNlKS51aUhhbmRsZXI7XG4gIGNvbnN0IGNvbnRleHRGb3JUaGlzRWxlbWVudCA9IGdldENvbnRleHRGb3IoXG4gICAgcGF0aCxcbiAgICBcImZpbmFsXCIsXG4gICAgZXhlY3V0aW9uUm9vdCxcbiAgICBzcGVjaWFsUnVsZXMudXNlQ29udGV4dFJ1bGVzT2YsXG4gICkgfHwgc3BlY2lhbFJ1bGVzLnVzZUNvbnRleHRSdWxlc09mO1xuXG4gIGxldCB1aUhhbmRsZXJWYWx1ZTogSVRlbXBsYXRlQXJnVUlIYW5kbGVyRGVmaW5pdGlvbiA9IGNvbnRleHRGb3JUaGlzRWxlbWVudC5wcm9wZXJ0aWVzW3VpSGFuZGxlcl0gYXMgSVRlbXBsYXRlQXJnVUlIYW5kbGVyRGVmaW5pdGlvbjtcbiAgaWYgKCF1aUhhbmRsZXJWYWx1ZSB8fCB1aUhhbmRsZXJWYWx1ZS50eXBlICE9PSBcInVpLWhhbmRsZXJcIikge1xuICAgIHVpSGFuZGxlclZhbHVlID0gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHBhcmVudFBhdGggPSBbLi4ucGF0aF07XG4gIHBhcmVudFBhdGgucG9wKCk7XG5cbiAgbGV0IGRlbGV0ZUFsbENoaWxkcmVuID0gZmFsc2U7XG4gIGNvbnN0IGlzU2VsZkludmFsaWRUeXBlRm9yVUlIYW5kbGVyID0gdWlIYW5kbGVyVmFsdWUgJiZcbiAgICAoXG4gICAgICAoXG4gICAgICAgIHVpSGFuZGxlclZhbHVlLm11c3RCZU9mVHlwZSAmJlxuICAgICAgICAoXG4gICAgICAgICAgQXJyYXkuaXNBcnJheSh1aUhhbmRsZXJWYWx1ZS5tdXN0QmVPZlR5cGUpID9cbiAgICAgICAgICAgICF1aUhhbmRsZXJWYWx1ZS5tdXN0QmVPZlR5cGUuaW5jbHVkZXMoZWxlbWVudC50eXBlIGFzIGFueSkgOlxuICAgICAgICAgICAgdWlIYW5kbGVyVmFsdWUubXVzdEJlT2ZUeXBlICE9PSBlbGVtZW50LnR5cGVcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIGNvbnN0IGlzVW5hbGxvd2VkQmVjYXNlSXRzUGFyZW50SXNOb3RXaGF0U2VsZldhbnRzID0gdWlIYW5kbGVyVmFsdWUgJiZcbiAgICAoXG4gICAgICAoXG4gICAgICAgIHVpSGFuZGxlclZhbHVlLmFsbG93c1BhcmVudCAmJlxuICAgICAgICAhdWlIYW5kbGVyVmFsdWUuYWxsb3dzUGFyZW50KFxuICAgICAgICAgIHByaW1hcnlFeGVjdXRpb24uZ2V0Tm9kZUF0KHBhcmVudFBhdGgpIGFzIFJpY2hFbGVtZW50LFxuICAgICAgICAgIHByaW1hcnlFeGVjdXRpb24uZ2V0Tm9kZUF0KHBhdGgpIGFzIFJpY2hFbGVtZW50LFxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgaWYgKGlzU2VsZkludmFsaWRUeXBlRm9yVUlIYW5kbGVyKSB7XG4gICAgY29uc3QgaXNQYXRjaGFibGUgPSAhaXNVbmFsbG93ZWRCZWNhc2VJdHNQYXJlbnRJc05vdFdoYXRTZWxmV2FudHMgJiYgcGF0Y2hMaXN0W2VsZW1lbnQudHlwZV0gJiZcbiAgICAgIChcbiAgICAgICAgQXJyYXkuaXNBcnJheSh1aUhhbmRsZXJWYWx1ZS5tdXN0QmVPZlR5cGUpID9cbiAgICAgICAgICB1aUhhbmRsZXJWYWx1ZS5tdXN0QmVPZlR5cGUuaW5jbHVkZXMocGF0Y2hMaXN0W2VsZW1lbnQudHlwZV0pIDpcbiAgICAgICAgICB1aUhhbmRsZXJWYWx1ZS5tdXN0QmVPZlR5cGUgPT09IHBhdGNoTGlzdFtlbGVtZW50LnR5cGVdXG4gICAgICApO1xuXG4gICAgaWYgKCFpc1BhdGNoYWJsZSkge1xuICAgICAgcHJpbWFyeUV4ZWN1dGlvbi5kZWxldGVOb2RlQXQoXG4gICAgICAgIHBhdGgsXG4gICAgICApO1xuICAgICAgc2Vjb25kYXJ5RXhlY3V0aW9uICYmIHNlY29uZGFyeUV4ZWN1dGlvbi5kZWxldGVOb2RlQXQoXG4gICAgICAgIHBhdGgsXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwYXRjaGluZzogYW55ID0ge1xuICAgICAgICB0eXBlOiBwYXRjaExpc3RbZWxlbWVudC50eXBlXSxcbiAgICAgIH07XG5cbiAgICAgIGlmIChwYXRjaExpc3RbZWxlbWVudC50eXBlXSA9PT0gXCJjb250YWluZXJcIikge1xuICAgICAgICBwYXRjaGluZy5jb250YWluZXJUeXBlID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcHJpbWFyeUV4ZWN1dGlvbi51cGRhdGVOb2RlQXQoXG4gICAgICAgIHBhdGgsXG4gICAgICAgIHBhdGNoaW5nLFxuICAgICAgKTtcbiAgICAgIHNlY29uZGFyeUV4ZWN1dGlvbiAmJiBzZWNvbmRhcnlFeGVjdXRpb24udXBkYXRlTm9kZUF0KFxuICAgICAgICBwYXRoLFxuICAgICAgICBwYXRjaGluZyxcbiAgICAgICk7XG5cbiAgICAgIGlmIChpc1ZvaWQoZWxlbWVudCkpIHtcbiAgICAgICAgZGVsZXRlQWxsQ2hpbGRyZW4gPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc1VuYWxsb3dlZEJlY2FzZUl0c1BhcmVudElzTm90V2hhdFNlbGZXYW50cykge1xuICAgIHByaW1hcnlFeGVjdXRpb24uZGVsZXRlTm9kZUF0KFxuICAgICAgcGF0aCxcbiAgICApO1xuICAgIHNlY29uZGFyeUV4ZWN1dGlvbiAmJiBzZWNvbmRhcnlFeGVjdXRpb24uZGVsZXRlTm9kZUF0KFxuICAgICAgcGF0aCxcbiAgICApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBvZmZzZXQgPSAwO1xuICBjb25zdCBjaGlsZHJlbkFtb3VudCA9IGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuQW1vdW50OyBpKyspIHtcbiAgICBsZXQgYWN0dWFsSW5kZXggPSBpICsgb2Zmc2V0O1xuICAgIGNvbnN0IGN1cnJlbnROb2RlID0gZWxlbWVudC5jaGlsZHJlblthY3R1YWxJbmRleF07XG4gICAgY29uc3QgY3VycmVudE5vZGVQYXRoID0gWy4uLnBhdGgsIGFjdHVhbEluZGV4XTtcbiAgICBjb25zdCBpc0lnbm9yZWQgPSBpc0lnbm9yZWROb2RlKGN1cnJlbnROb2RlUGF0aCwgc3BlY2lhbFJ1bGVzKTtcblxuICAgIGlmIChpc0lnbm9yZWQgfHwgIWN1cnJlbnROb2RlKSB7XG4gICAgICAvLyBJIGRvbid0IGtub3cgd2h5IHNvbWV0aW1lcyBpdCByYW5kb21seSBvZmZzZXRzIG9mZnNcbiAgICAgIC8vIHRoZSBjaHJvbWUgZGVidWdnZXIga2VlcHMgY3Jhc2hpbmcgd2hlbiBJIHRyeSB0byBkZWJ1ZyB3aHlcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChpc0VsZW1lbnQoY3VycmVudE5vZGUpIHx8IGRlbGV0ZUFsbENoaWxkcmVuKSB7XG4gICAgICBjb25zdCBub2RlQWN0dWFsID0gcHJpbWFyeUV4ZWN1dGlvbi5nZXROb2RlQXQoY3VycmVudE5vZGVQYXRoKSBhcyBSaWNoRWxlbWVudDtcbiAgICAgIGNvbnN0IHNlbGZBY3R1YWwgPSBwcmltYXJ5RXhlY3V0aW9uLmdldE5vZGVBdChwYXRoKSBhcyBSaWNoRWxlbWVudDtcblxuICAgICAgY29uc3Qgc2hvdWxkRGVsZXRlID0gZGVsZXRlQWxsQ2hpbGRyZW4gfHxcbiAgICAgICAgKFxuICAgICAgICAgIHVpSGFuZGxlclZhbHVlICYmXG4gICAgICAgICAgKFxuICAgICAgICAgICAgdWlIYW5kbGVyVmFsdWUuYWxsb3dzQ2hpbGRyZW4gJiZcbiAgICAgICAgICAgICF1aUhhbmRsZXJWYWx1ZS5hbGxvd3NDaGlsZHJlbihcbiAgICAgICAgICAgICAgbm9kZUFjdHVhbCxcbiAgICAgICAgICAgICAgc2VsZkFjdHVhbCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG5cbiAgICAgIGlmIChzaG91bGREZWxldGUpIHtcbiAgICAgICAgY29uc3QgcGF0Y2ggPSBkZWxldGVBbGxDaGlsZHJlbiA/IG51bGwgOiAodWlIYW5kbGVyVmFsdWUucGF0Y2hDaGlsZHJlbiAmJiB1aUhhbmRsZXJWYWx1ZS5wYXRjaENoaWxkcmVuKFxuICAgICAgICAgIG5vZGVBY3R1YWwsXG4gICAgICAgICAgc2VsZkFjdHVhbCxcbiAgICAgICAgKSk7XG5cbiAgICAgICAgaWYgKHBhdGNoKSB7XG4gICAgICAgICAgcHJpbWFyeUV4ZWN1dGlvbi51cGRhdGVOb2RlQXQoXG4gICAgICAgICAgICBjdXJyZW50Tm9kZVBhdGgsXG4gICAgICAgICAgICBwYXRjaCxcbiAgICAgICAgICApO1xuICAgICAgICAgIHNlY29uZGFyeUV4ZWN1dGlvbiAmJiBzZWNvbmRhcnlFeGVjdXRpb24udXBkYXRlTm9kZUF0KFxuICAgICAgICAgICAgY3VycmVudE5vZGVQYXRoLFxuICAgICAgICAgICAgcGF0Y2gsXG4gICAgICAgICAgKTtcbiAgICAgICAgICAvLyBub3cgdXBkYXRlIHRoYXQgbm9kZSB3aXRoIHRoZSBydWxlc1xuICAgICAgICAgIG5vcm1hbGl6ZUFjY29yZGluZ1RvVUlIQW5kbGVyUnVsZXMoXG4gICAgICAgICAgICBwcmltYXJ5RXhlY3V0aW9uLmdldE5vZGVBdChcbiAgICAgICAgICAgICAgY3VycmVudE5vZGVQYXRoLFxuICAgICAgICAgICAgKSBhcyBSaWNoRWxlbWVudCxcbiAgICAgICAgICAgIGN1cnJlbnROb2RlUGF0aCxcbiAgICAgICAgICAgIGV4ZWN1dGlvblJvb3QsXG4gICAgICAgICAgICBwcmltYXJ5RXhlY3V0aW9uLFxuICAgICAgICAgICAgc2Vjb25kYXJ5RXhlY3V0aW9uLFxuICAgICAgICAgICAgc3BlY2lhbFJ1bGVzLFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbWFyeUV4ZWN1dGlvbi5kZWxldGVOb2RlQXQoXG4gICAgICAgICAgICBjdXJyZW50Tm9kZVBhdGgsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBzZWNvbmRhcnlFeGVjdXRpb24gJiYgc2Vjb25kYXJ5RXhlY3V0aW9uLmRlbGV0ZU5vZGVBdChcbiAgICAgICAgICAgIGN1cnJlbnROb2RlUGF0aCxcbiAgICAgICAgICApO1xuICAgICAgICAgIG9mZnNldC0tO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub3JtYWxpemVBY2NvcmRpbmdUb1VJSEFuZGxlclJ1bGVzKFxuICAgICAgICAgIGN1cnJlbnROb2RlIGFzIFJpY2hFbGVtZW50LFxuICAgICAgICAgIGN1cnJlbnROb2RlUGF0aCxcbiAgICAgICAgICBleGVjdXRpb25Sb290LFxuICAgICAgICAgIHByaW1hcnlFeGVjdXRpb24sXG4gICAgICAgICAgc2Vjb25kYXJ5RXhlY3V0aW9uLFxuICAgICAgICAgIHNwZWNpYWxSdWxlcyxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2VyaWFsaXplQ2hpbGRyZW5Gb3JOb2RlKFxuICBub2RlOiBOb2RlLFxuKTogQXJyYXk8UmljaEVsZW1lbnQgfCBJVGV4dD4ge1xuICAvLyB3aHkgaXMgaXQgbm93IEFycmF5LmZyb20gc2luY2Ugd2hlbiB0aGlzIHdhc24ndCBpdGVyYWJsZT9cbiAgLy8gd2hlbiBpdCBjaGFuZ2VkLCB5ZXN0ZXJkYXk/Li4uXG4gIGNvbnN0IG5vZGVzID0gQXJyYXkuZnJvbShub2RlLmNoaWxkTm9kZXMpO1xuXG4gIGNvbnN0IHJlc3VsdFJhdzogQXJyYXk8UmljaEVsZW1lbnQgfCBJVGV4dCB8IEFycmF5PFJpY2hFbGVtZW50IHwgSVRleHQ+PiA9IFtdO1xuICBmb3IgKGxldCBjbm9kZSBvZiBub2Rlcykge1xuICAgIGNvbnN0IGN1cnJlbnROb2RlSW5mbyA9IGRlc2VyaWFsaXplRWxlbWVudChjbm9kZSk7XG4gICAgcmVzdWx0UmF3LnB1c2goY3VycmVudE5vZGVJbmZvKTtcbiAgfVxuXG4gIGxldCBmaW5hbFJlc3VsdCA9IHJlc3VsdFJhdy5mbGF0KCkuZmlsdGVyKChuKSA9PiBuICE9PSBudWxsKTtcbiAgcmV0dXJuIGZpbmFsUmVzdWx0O1xufVxuXG4vKipcbiAgKiBDaGVja3Mgd2hldGhlciB0d28gbm9kZXMgYXJlIG1lcmdhYmxlXG4gICogQHBhcmFtIG4xIHRoZSBmaXJzdCBub2RlXG4gICogQHBhcmFtIG4yIHRoZSBzZWNvbmQgbm9kZVxuICAqIEByZXR1cm5zIGEgYm9vbGVhbiBvbiB3aGV0aGVyIHRoZXkgc2hvdWxkIG1lcmdlXG4gICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tTaG91bGRNZXJnZShuMTogUmljaEVsZW1lbnQgfCBJVGV4dCwgbjI6IFJpY2hFbGVtZW50IHwgSVRleHQpIHtcbiAgY29uc3QgaXNOMU1lcmdhYmxlID0gdHlwZW9mIChuMSBhcyBJVGV4dCkudGV4dCA9PT0gXCJzdHJpbmdcIiB8fCBTRVJJQUxJWkFUSU9OX1JFR0lTVFJZLk1FUkdBQkxFU1sobjEgYXMgUmljaEVsZW1lbnQpLnR5cGVdO1xuICBjb25zdCBpc04yTWVyZ2FibGUgPSB0eXBlb2YgKG4yIGFzIElUZXh0KS50ZXh0ID09PSBcInN0cmluZ1wiIHx8IFNFUklBTElaQVRJT05fUkVHSVNUUlkuTUVSR0FCTEVTWyhuMiBhcyBSaWNoRWxlbWVudCkudHlwZV07XG5cbiAgaWYgKCFpc04xTWVyZ2FibGUgfHwgIWlzTjJNZXJnYWJsZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGZpcnN0IHdlIHRha2UgYWxsIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZXNlIG5vZGVzIGFuZCBjaGVjayB0aGF0XG4gIC8vIGV2ZXJ5IG9uZSBvZiB0aGVtIHBhc3Nlc1xuICByZXR1cm4gT2JqZWN0LmtleXMobjEpLmNvbmNhdChPYmplY3Qua2V5cyhuMikpLmV2ZXJ5KChrZXkpID0+IHtcbiAgICAvLyB3ZSBkb24ndCBjb21wYXJlIGNoaWxkcmVuIG5vciB0aGUgdGV4dCBjb250ZW50XG4gICAgLy8gb2YgdGhlc2VcbiAgICBpZiAoa2V5ID09PSBcImNoaWxkcmVuXCIgfHwga2V5ID09PSBcInRleHRcIikge1xuICAgICAgLy8gYXNzdW1lIHRoZXkgcGFzc1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gc28gd2UgY2hlY2sgZm9yIGVxdWFsaXR5XG4gICAgcmV0dXJuIGVxdWFscyhuMVtrZXldLCBuMltrZXldLCB7IHN0cmljdDogdHJ1ZSB9KTtcbiAgfSk7XG59XG5cbi8qKlxuICogRXZlbiB3aGVuIGl0IHNob3VsZCBhbGwgYmUgc2FuaXRpemVkIHRoaXMgd2lsbCBoZWxwXG4gKiBwcmV2ZW50IGZ1cnRoZXIgaXNzdWVzIHJlZ2FyZGluZyBzYWZldHkgYW5kIHJlc2lsbGlhbnRcbiAqIGFkZHMgcmVkdW5kYW5jZVxuICovXG5jb25zdCBGT1JCSURERU5fVU5NQU5BR0VEX1RBR1MgPSBbXG4gIFwic2NyaXB0XCIsXG4gIFwia2V5Z2VuXCIsXG4gIFwiZW1iZWRcIixcbiAgXCJwYXJhbVwiLFxuICBcIndiclwiLFxuXTtcblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYSBzaW5nbGUgZWxlbWVudCBmcm9tIGl0cyBub2RlIGludG8gYSByaWNoIGVsZW1lbnRcbiAqIG9yIGEgdGV4dFxuICogQHJldHVybnMgYSBSaWNoRWxlbWVudCBvciBhIHRleHQgbm9kZSBcbiAqL1xuZnVuY3Rpb24gZGVzZXJpYWxpemVFbGVtZW50KFxuICBub2RlOiBOb2RlLFxuKTogUmljaEVsZW1lbnQgfCBJVGV4dCB8IEFycmF5PFJpY2hFbGVtZW50IHwgSVRleHQ+IHtcbiAgLy8gZmlyc3Qgd2UgZ2V0IHRoZSB0YWcgbmFtZVxuICBjb25zdCB0YWdOYW1lID0gKG5vZGUgYXMgSFRNTEVsZW1lbnQpLnRhZ05hbWU7XG4gIC8vIGFuZCB3ZSBwcmVwYXJlIHRoZSByZXN1bHRcbiAgbGV0IHJhdzogUmljaEVsZW1lbnQgfCBJVGV4dCB8IEFycmF5PFJpY2hFbGVtZW50IHwgSVRleHQ+ID0gbnVsbDtcbiAgLy8gaWYgdGhlcmUncyBubyB0YWcgbmFtZSwgdGhlbiBpdCBtdXN0IGJlIGEgdGV4dCBub2RlXG4gIGlmICghdGFnTmFtZSkge1xuICAgIHJhdyA9IFNFUklBTElaQVRJT05fUkVHSVNUUlkuREVTRVJJQUxJWkUudGV4dChub2RlKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBub3cgd2UgZ2V0IHRoZSBjbGFzcyBsaXN0IGZpcnN0XG4gICAgY29uc3QgY2xhc3NMaXN0ID0gKG5vZGUgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdDtcblxuICAgIC8vIGlmIHdlIGhhdmUgaXRcbiAgICBpZiAoY2xhc3NMaXN0KSB7XG4gICAgICAvLyB3ZSBmaXJzdCBzZWFyY2ggYnkgcHJlZml4IGlmIHRoZXJlJ3MgYSBmdW5jdGlvblxuICAgICAgY29uc3QgZm91bmRQcmVmaXggPSBPYmplY3Qua2V5cyhTRVJJQUxJWkFUSU9OX1JFR0lTVFJZLkRFU0VSSUFMSVpFLmJ5Q2xhc3NOYW1lUHJlZml4KS5maW5kKChwcmVmaXgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNsYXNzTGlzdC5mb3JFYWNoKCh2KSA9PiB2LnN0YXJ0c1dpdGgocHJlZml4KSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gaWYgd2UgZmluZCBpdCwgd2UgY2FsbCBpdFxuICAgICAgaWYgKGZvdW5kUHJlZml4KSB7XG4gICAgICAgIHJhdyA9IFNFUklBTElaQVRJT05fUkVHSVNUUlkuREVTRVJJQUxJWkUuYnlDbGFzc05hbWVQcmVmaXhbZm91bmRQcmVmaXhdKG5vZGUpIGFzIGFueTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG90aGVyd2lzZSBsZXQncyBmaW5kIGJ5IGV4YWN0IGNsYXNzXG4gICAgICAgIGNvbnN0IGZvdW5kRXhhY3RDbGFzcyA9IE9iamVjdC5rZXlzKFNFUklBTElaQVRJT05fUkVHSVNUUlkuREVTRVJJQUxJWkUuYnlDbGFzc05hbWUpLmZpbmQoKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBjbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gaWYgd2UgZmluZCBpdCB3ZSBjYWxsIGl0XG4gICAgICAgIGlmIChmb3VuZEV4YWN0Q2xhc3MpIHtcbiAgICAgICAgICByYXcgPSBTRVJJQUxJWkFUSU9OX1JFR0lTVFJZLkRFU0VSSUFMSVpFLmJ5Q2xhc3NOYW1lW2ZvdW5kRXhhY3RDbGFzc10obm9kZSkgYXMgYW55O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgYWxsIG91ciBwcmV2aW91cyBhdHRlbXB0cyBmb3Igc29tZSByZWFzb24gZGlkbid0IGdldCBhIHJlc3VsdFxuICAgIC8vIGFuZCB0aGVyZSdzIGEgcmF3IHRhZyBjYXRjaGVyLCB0aGVuIGxldCdzIHVzZSB0aGF0IG9uZVxuICAgIGlmICghcmF3ICYmIFNFUklBTElaQVRJT05fUkVHSVNUUlkuREVTRVJJQUxJWkUuYnlUYWdbdGFnTmFtZV0pIHtcbiAgICAgIHJhdyA9IFNFUklBTElaQVRJT05fUkVHSVNUUlkuREVTRVJJQUxJWkUuYnlUYWdbdGFnTmFtZV0obm9kZSkgYXMgYW55O1xuICAgIH0gZWxzZSBpZiAoIUZPUkJJRERFTl9VTk1BTkFHRURfVEFHUy5pbmNsdWRlcyh0YWdOYW1lKSkge1xuICAgICAgcmF3ID0gU0VSSUFMSVpBVElPTl9SRUdJU1RSWS5ERVNFUklBTElaRS51bm1hbmFnZWQobm9kZSBhcyBIVE1MRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJhdyB8fCBudWxsO1xufVxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBzaW1wbGUgcGxhaW4gdGV4dCBpbnRvIGEgY2hlYXRlZCBkb2N1bWVudFxuICogdGhhdCBpcyBsaWtlIGEgcmljaCB0ZXh0LCBidXQgc3BsaXQgaW4gcGFyYWdyYXBoc1xuICogQHBhcmFtIGRhdGEgdGhlIGRhdGEgdG8gZGVzZXJpYWxpemUsIGFsd2F5cyBhIHN0cmluZ1xuICogQHBhcmFtIGNvbXBhcmVyIGEgY29tcGFyZXIgdG8gdXNlIGFnYWluc3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlc2VyaWFsaXplUGxhaW4oZGF0YTogc3RyaW5nLCBjb21wYXJlcj86IElSb290TGV2ZWxEb2N1bWVudCkge1xuICAvLyBpZiB0aGUgZGF0YSBpcyBudWxsIHVzZSB0aGUgbnVsbCB1dWlkIG90aGVyd2lzZSBjb25zdHJ1Y3QgYW4gdXVpZCBmcm9tIHRoZSBkYXRhXG4gIGNvbnN0IGV4cGVjdGVkSWQgPSBkYXRhID09PSBudWxsID8gTlVMTF9VVUlEIDogdXVpZHY1KGRhdGEsIFRFWFRfTkFNRVNQQUNFKTtcblxuICAvLyBpZiB0aGVyZSdzIGEgY29tcGFyZXIgYW5kIHRoZSBjb21wYXJlciBtYXRjaGVzIHRoZSBuZXcgdXVpZCwgdGhlblxuICBpZiAoY29tcGFyZXIgJiYgY29tcGFyZXIuaWQgPT09IGV4cGVjdGVkSWQpIHtcbiAgICAvLyByZXR1cm4gdGhlIGNvbXBhcmVyXG4gICAgcmV0dXJuIGNvbXBhcmVyO1xuICB9XG5cbiAgLy8gbm93IHdlIGNhbiBidWlsZCB0aGUgY29udGVudFxuICBjb25zdCBjb250ZW50ID0gKGRhdGEgfHwgXCJcIikuc3BsaXQoXCJcXG5cIik7XG5cbiAgLy8gYW5kIG5vdyB3ZSBjYW4gYnVpbGQgdGhlIHJvb3QgbGV2ZWwgZG9jdW1lbnRcbiAgLy8gZm9yIHRoaXMgZ2l2ZW4gcGxhaW4gdGV4dFxuICBjb25zdCBuZXdEb2N1bWVudDogSVJvb3RMZXZlbERvY3VtZW50ID0ge1xuICAgIHR5cGU6IFwiZG9jdW1lbnRcIixcbiAgICBpZDogZXhwZWN0ZWRJZCxcbiAgICByaWNoOiBmYWxzZSxcbiAgICBjaGlsZHJlbjogY29udGVudC5tYXAoKGMpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwicGFyYWdyYXBoXCIsXG4gICAgICAgIHN1YnR5cGU6IFwicFwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJvbGQ6IGZhbHNlLFxuICAgICAgICAgICAgaXRhbGljOiBmYWxzZSxcbiAgICAgICAgICAgIHVuZGVybGluZTogZmFsc2UsXG4gICAgICAgICAgICB0ZXh0OiBjLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9XG4gICAgfSksXG4gIH07XG5cbiAgLy8gYW5kIHJldHVybiBpdFxuICByZXR1cm4gbmV3RG9jdW1lbnQ7XG59XG5cbmNvbnN0IHNlcmlhbGl6ZVN0cmluZ0NhY2hlU2l6ZSA9IDEwO1xuY29uc3Qgc2VyaWFsaXplU3RyaW5nQ2FjaGU6IEFycmF5PHtcbiAgaWQ6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbn0+ID0gW107XG5cbi8qKlxuICogU2VyaWFsaXplcyBidXQgcmV0dXJucyB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gKiByYXRoZXIgdGhhbiBhIGJ1bmNoIG9mIG5vZGVzXG4gKiBAcGFyYW0gcm9vdCBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZVN0cmluZyhyb290OiBJUm9vdExldmVsRG9jdW1lbnQpOiBzdHJpbmcge1xuICBjb25zdCBjYWNoZWRJbmRleCA9IHJvb3QuaWQgPyBzZXJpYWxpemVTdHJpbmdDYWNoZVxuICAgIC5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IHJvb3QuaWQpIDogLTE7XG5cbiAgaWYgKGNhY2hlZEluZGV4ICE9PSAtMSkge1xuICAgIGNvbnN0IGNhY2hlZCA9IHNlcmlhbGl6ZVN0cmluZ0NhY2hlW2NhY2hlZEluZGV4XTtcbiAgICAvLyBtb3ZlIGVsZW1lbnQgdG8gdGhlIGVuZFxuICAgIHNlcmlhbGl6ZVN0cmluZ0NhY2hlLnNwbGljZShjYWNoZWRJbmRleCwgMSk7XG4gICAgc2VyaWFsaXplU3RyaW5nQ2FjaGUucHVzaChjYWNoZWQpO1xuXG4gICAgcmV0dXJuIGNhY2hlZC52YWx1ZTtcbiAgfVxuXG4gIGNvbnN0IHNlcmlhbGl6ZWQgPSBzZXJpYWxpemUocm9vdCk7XG5cbiAgbGV0IHZhbHVlOiBzdHJpbmc7XG4gIGlmICh0eXBlb2Ygc2VyaWFsaXplZCA9PT0gXCJzdHJpbmdcIiB8fCBzZXJpYWxpemVkID09PSBudWxsKSB7XG4gICAgdmFsdWUgPSBzZXJpYWxpemVkIGFzIHN0cmluZztcbiAgfSBlbHNlIHtcbiAgICB2YWx1ZSA9IHNlcmlhbGl6ZWQubWFwKChzKSA9PiBzLm91dGVySFRNTCkuam9pbihcIlwiKTtcbiAgfVxuXG4gIGlmIChyb290LmlkKSB7XG4gICAgc2VyaWFsaXplU3RyaW5nQ2FjaGUucHVzaCh7XG4gICAgICBpZDogcm9vdC5pZCxcbiAgICAgIHZhbHVlLFxuICAgIH0pO1xuXG4gICAgaWYgKHNlcmlhbGl6ZVN0cmluZ0NhY2hlLmxlbmd0aCA+IHNlcmlhbGl6ZVN0cmluZ0NhY2hlU2l6ZSkge1xuICAgICAgc2VyaWFsaXplU3RyaW5nQ2FjaGUuc2hpZnQoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgY29uc3QgTlVMTF9ET0NVTUVOVCA9IGRlc2VyaWFsaXplKG51bGwpOyIsICIvKipcbiAqIENvbnRhaW5zIHRoZSBzZXJpYWxpemF0aW9uLCByZWFjdGlmaWNhdGlvbiBhbmQgZGVzZXJpYWxpemF0aW9uIGZ1bmN0aW9uc1xuICogZm9yIHRoZSBWb2lkQmxvY2sgZWxlbWVudFxuICogXG4gKiBAbW9kdWxlXG4gKi9cblxuaW1wb3J0IHsgSVJlYWN0aWZ5QXJnLCBJU2VyaWFsaXphdGlvblJlZ2lzdHJ5VHlwZSB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHsgZGVzZXJpYWxpemVFbGVtZW50QmFzZSwgSUVsZW1lbnRCYXNlLCByZWFjdGlmeUVsZW1lbnRCYXNlLCBzZXJpYWxpemVFbGVtZW50QmFzZSB9IGZyb20gXCIuLi9iYXNlXCI7XG5pbXBvcnQgeyBJVGV4dCwgU1RBTkRBUkRfVEVYVF9OT0RFIH0gZnJvbSBcIi4vdGV4dFwiO1xuXG4vKipcbiAqIFRoZSBmdW5jdGlvbiB0aGF0IHJlZ2lzdGVycyBhbmQgYWRkcyB0aGUgVm9pZEJsb2NrIGVsZW1lbnQgaW4gdGhlIGdpdmVuXG4gKiByZWdpc3RyeVxuICogQHBhcmFtIHJlZ2lzdHJ5IHRoZSByZWdpc3RyeSB0byBtb2RpZnlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyVm9pZEJsb2NrKHJlZ2lzdHJ5OiBJU2VyaWFsaXphdGlvblJlZ2lzdHJ5VHlwZSkge1xuXG4gIC8qKlxuICAgKiBjb252ZXJ0cyBhIGdpdmVuIFZvaWRCbG9jayByaWNoIGVsZW1lbnQgaW50byBpdHNcbiAgICogSFRNTCBmb3JtXG4gICAqIEBwYXJhbSBwIHRoZSBWb2lkQmxvY2sgcmljaCBlbGVtZW50XG4gICAqIEByZXR1cm5zIGFuIEhUTUwgZWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gc2VyaWFsaXplVm9pZEJsb2NrKHA6IElWb2lkQmxvY2spIHtcbiAgICAvLyBzaW1wbGVcbiAgICByZXR1cm4gc2VyaWFsaXplRWxlbWVudEJhc2UocmVnaXN0cnksIHAsIFwicFwiLCBcInZvaWQtYmxvY2tcIiwgbnVsbCwgcC5jaGlsZHJlbik7XG4gIH1cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIGFuIEhUTUwgbm9kZSBpbnRvIHRoZSBnaXZlbiBWb2lkQmxvY2tcbiAgICogcmljaCBlbGVtZW50XG4gICAqIEBwYXJhbSBub2RlIHRoZSBub2RlIGluIHF1ZXN0aW9uXG4gICAqIEByZXR1cm5zIGEgVm9pZEJsb2NrIGVsZW1lbnQgc3RydWN0dXJlXG4gICAqL1xuICBmdW5jdGlvbiBkZXNlcmlhbGl6ZVZvaWRCbG9jayhub2RlOiBIVE1MRWxlbWVudCk6IElWb2lkQmxvY2sge1xuICAgIC8vIGZpcnN0IGxldCdzIGdldCB0cmhlIGJhc2VcbiAgICBjb25zdCBiYXNlID0gZGVzZXJpYWxpemVFbGVtZW50QmFzZShub2RlKTtcblxuICAgIC8vIGFuZCBidWlsZCB0aGUgVm9pZEJsb2NrIGl0c2VsZlxuICAgIGNvbnN0IFZvaWRCbG9jazogSVZvaWRCbG9jayA9IHtcbiAgICAgIC4uLmJhc2UsXG4gICAgICB0eXBlOiBcInZvaWQtYmxvY2tcIixcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIFNUQU5EQVJEX1RFWFRfTk9ERSgpLFxuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gaXRcbiAgICByZXR1cm4gVm9pZEJsb2NrO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWN0aWZpZXMgYSBWb2lkQmxvY2sgdGhhdCBpcyBhbHJlYWR5XG4gICAqIGludG8gYSByaWNoIGVsZW1lbnQgZm9ybVxuICAgKiBAcGFyYW0gYXJnIHRoZSByZWFjdGlmaWNhdGlvbiBhcmdcbiAgICovXG4gIGZ1bmN0aW9uIHJlYWN0aWZ5Vm9pZEJsb2NrKGFyZzogSVJlYWN0aWZ5QXJnPElWb2lkQmxvY2s+KSB7XG4gICAgcmV0dXJuIHJlYWN0aWZ5RWxlbWVudEJhc2UoXG4gICAgICAvLyB0aGUgcmVnaXN0cnlcbiAgICAgIHJlZ2lzdHJ5LFxuICAgICAgLy8gdGhlIHRhZyB0byB1c2VcbiAgICAgIFwicFwiLFxuICAgICAgLy8gbm8gYmFzZSBjbGFzcyBuYW1lXG4gICAgICBudWxsLFxuICAgICAgLy8gdGhlIGNoaWxkcmVuIHRvIHVzZVxuICAgICAgYXJnLmVsZW1lbnQuY2hpbGRyZW4sXG4gICAgICAvLyBubyB3cmFwIGNoaWxkcmVuIGZ1bmN0aW9uXG4gICAgICBudWxsLFxuICAgICAgLy8gdGhlIGFyZyBpdHNlbGZcbiAgICAgIGFyZyxcbiAgICApO1xuICB9XG5cbiAgLy8gcmVnaXN0ZXIgaW4gdGhlIHJlZ2lzdHJ5XG4gIHJlZ2lzdHJ5LlJFQUNUSUZZW1widm9pZC1ibG9ja1wiXSA9IHJlYWN0aWZ5Vm9pZEJsb2NrO1xuICByZWdpc3RyeS5TRVJJQUxJWkVbXCJ2b2lkLWJsb2NrXCJdID0gc2VyaWFsaXplVm9pZEJsb2NrO1xuICByZWdpc3RyeS5CTE9DS1NbXCJ2b2lkLWJsb2NrXCJdID0gdHJ1ZTtcbiAgcmVnaXN0cnkuVk9JRFNbXCJ2b2lkLWJsb2NrXCJdID0gdHJ1ZTtcbiAgcmVnaXN0cnkuREVTRVJJQUxJWkUuYnlDbGFzc05hbWVbXCJ2b2lkLWJsb2NrXCJdID0gZGVzZXJpYWxpemVWb2lkQmxvY2s7XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgVm9pZEJsb2NrLCBwIHR5cGUgZm9yIHRoZVxuICogcmljaCB0ZXh0IHNwZWNpZmljYXRpb25cbiAqIGJ1dCBpdCBtaWdodCBhbHNvIGJlIGEgZGl2IG9yIGEgc3BhblxuICovXG5leHBvcnQgaW50ZXJmYWNlIElWb2lkQmxvY2sgZXh0ZW5kcyBJRWxlbWVudEJhc2Uge1xuICB0eXBlOiBcInZvaWQtYmxvY2tcIixcblxuICAvKipcbiAgICogVGhlIFZvaWRCbG9jayBjaGlsZHJlbiBjYW4gYmUgZWl0aGVyIHRleHQgb3IgbGluayBvciBmaWxlIGZvciB0aGUgaW5saW5lc1xuICAgKi9cbiAgY2hpbGRyZW46IElUZXh0W10sXG59IiwgIi8qKlxuICogQ29udGFpbnMgdGhlIHNlcmlhbGl6YXRpb24sIHJlYWN0aWZpY2F0aW9uIGFuZCBkZXNlcmlhbGl6YXRpb24gZnVuY3Rpb25zXG4gKiBmb3IgdGhlIFZvaWRTdXBlckJsb2NrIGVsZW1lbnRcbiAqIFxuICogQG1vZHVsZVxuICovXG5cbmltcG9ydCB7IElSZWFjdGlmeUFyZywgSVNlcmlhbGl6YXRpb25SZWdpc3RyeVR5cGUgfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IGRlc2VyaWFsaXplRWxlbWVudEJhc2UsIElFbGVtZW50QmFzZSwgcmVhY3RpZnlFbGVtZW50QmFzZSwgc2VyaWFsaXplRWxlbWVudEJhc2UgfSBmcm9tIFwiLi4vYmFzZVwiO1xuaW1wb3J0IHsgSVRleHQsIFNUQU5EQVJEX1RFWFRfTk9ERSB9IGZyb20gXCIuL3RleHRcIjtcblxuLyoqXG4gKiBUaGUgZnVuY3Rpb24gdGhhdCByZWdpc3RlcnMgYW5kIGFkZHMgdGhlIFZvaWRTdXBlckJsb2NrIGVsZW1lbnQgaW4gdGhlIGdpdmVuXG4gKiByZWdpc3RyeVxuICogQHBhcmFtIHJlZ2lzdHJ5IHRoZSByZWdpc3RyeSB0byBtb2RpZnlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyVm9pZFN1cGVyQmxvY2socmVnaXN0cnk6IElTZXJpYWxpemF0aW9uUmVnaXN0cnlUeXBlKSB7XG5cbiAgLyoqXG4gICAqIGNvbnZlcnRzIGEgZ2l2ZW4gVm9pZFN1cGVyQmxvY2sgcmljaCBlbGVtZW50IGludG8gaXRzXG4gICAqIEhUTUwgZm9ybVxuICAgKiBAcGFyYW0gcCB0aGUgVm9pZFN1cGVyQmxvY2sgcmljaCBlbGVtZW50XG4gICAqIEByZXR1cm5zIGFuIEhUTUwgZWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gc2VyaWFsaXplVm9pZFN1cGVyQmxvY2socDogSVZvaWRTdXBlckJsb2NrKSB7XG4gICAgLy8gc2ltcGxlXG4gICAgcmV0dXJuIHNlcmlhbGl6ZUVsZW1lbnRCYXNlKHJlZ2lzdHJ5LCBwLCBcImRpdlwiLCBcInZvaWQtc3VwZXJibG9ja1wiLCBudWxsLCBwLmNoaWxkcmVuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgYW4gSFRNTCBub2RlIGludG8gdGhlIGdpdmVuIFZvaWRTdXBlckJsb2NrXG4gICAqIHJpY2ggZWxlbWVudFxuICAgKiBAcGFyYW0gbm9kZSB0aGUgbm9kZSBpbiBxdWVzdGlvblxuICAgKiBAcmV0dXJucyBhIFZvaWRTdXBlckJsb2NrIGVsZW1lbnQgc3RydWN0dXJlXG4gICAqL1xuICBmdW5jdGlvbiBkZXNlcmlhbGl6ZVZvaWRTdXBlckJsb2NrKG5vZGU6IEhUTUxFbGVtZW50KTogSVZvaWRTdXBlckJsb2NrIHtcbiAgICAvLyBmaXJzdCBsZXQncyBnZXQgdHJoZSBiYXNlXG4gICAgY29uc3QgYmFzZSA9IGRlc2VyaWFsaXplRWxlbWVudEJhc2Uobm9kZSk7XG5cbiAgICAvLyBhbmQgYnVpbGQgdGhlIFZvaWRTdXBlckJsb2NrIGl0c2VsZlxuICAgIGNvbnN0IHZvaWRTdXBlckJsb2NrOiBJVm9pZFN1cGVyQmxvY2sgPSB7XG4gICAgICAuLi5iYXNlLFxuICAgICAgdHlwZTogXCJ2b2lkLXN1cGVyYmxvY2tcIixcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIFNUQU5EQVJEX1RFWFRfTk9ERSgpLFxuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gaXRcbiAgICByZXR1cm4gdm9pZFN1cGVyQmxvY2s7XG4gIH1cblxuICAvKipcbiAgICogUmVhY3RpZmllcyBhIFZvaWRTdXBlckJsb2NrIHRoYXQgaXMgYWxyZWFkeVxuICAgKiBpbnRvIGEgcmljaCBlbGVtZW50IGZvcm1cbiAgICogQHBhcmFtIGFyZyB0aGUgcmVhY3RpZmljYXRpb24gYXJnXG4gICAqL1xuICBmdW5jdGlvbiByZWFjdGlmeVZvaWRTdXBlckJsb2NrKGFyZzogSVJlYWN0aWZ5QXJnPElWb2lkU3VwZXJCbG9jaz4pIHtcbiAgICByZXR1cm4gcmVhY3RpZnlFbGVtZW50QmFzZShcbiAgICAgIC8vIHRoZSByZWdpc3RyeVxuICAgICAgcmVnaXN0cnksXG4gICAgICAvLyB0aGUgdGFnIHRvIHVzZVxuICAgICAgXCJwXCIsXG4gICAgICAvLyBubyBiYXNlIGNsYXNzIG5hbWVcbiAgICAgIG51bGwsXG4gICAgICAvLyB0aGUgY2hpbGRyZW4gdG8gdXNlXG4gICAgICBhcmcuZWxlbWVudC5jaGlsZHJlbixcbiAgICAgIC8vIG5vIHdyYXAgY2hpbGRyZW4gZnVuY3Rpb25cbiAgICAgIG51bGwsXG4gICAgICAvLyB0aGUgYXJnIGl0c2VsZlxuICAgICAgYXJnLFxuICAgICk7XG4gIH1cblxuICAvLyByZWdpc3RlciBpbiB0aGUgcmVnaXN0cnlcbiAgcmVnaXN0cnkuUkVBQ1RJRllbXCJ2b2lkLXN1cGVyYmxvY2tcIl0gPSByZWFjdGlmeVZvaWRTdXBlckJsb2NrO1xuICByZWdpc3RyeS5TRVJJQUxJWkVbXCJ2b2lkLXN1cGVyYmxvY2tcIl0gPSBzZXJpYWxpemVWb2lkU3VwZXJCbG9jaztcbiAgcmVnaXN0cnkuU1VQRVJCTE9DS1NbXCJ2b2lkLXN1cGVyYmxvY2tcIl0gPSB0cnVlO1xuICByZWdpc3RyeS5WT0lEU1tcInZvaWQtc3VwZXJibG9ja1wiXSA9IHRydWU7XG4gIHJlZ2lzdHJ5LkRFU0VSSUFMSVpFLmJ5Q2xhc3NOYW1lW1widm9pZC1zdXBlcmJsb2NrXCJdID0gZGVzZXJpYWxpemVWb2lkU3VwZXJCbG9jaztcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBWb2lkU3VwZXJCbG9jaywgcCB0eXBlIGZvciB0aGVcbiAqIHJpY2ggdGV4dCBzcGVjaWZpY2F0aW9uXG4gKiBidXQgaXQgbWlnaHQgYWxzbyBiZSBhIGRpdiBvciBhIHNwYW5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJVm9pZFN1cGVyQmxvY2sgZXh0ZW5kcyBJRWxlbWVudEJhc2Uge1xuICB0eXBlOiBcInZvaWQtc3VwZXJibG9ja1wiLFxuXG4gIC8qKlxuICAgKiBUaGUgVm9pZFN1cGVyQmxvY2sgY2hpbGRyZW4gY2FuIGJlIGVpdGhlciB0ZXh0IG9yIGxpbmsgb3IgZmlsZSBmb3IgdGhlIGlubGluZXNcbiAgICovXG4gIGNoaWxkcmVuOiBJVGV4dFtdLFxufSIsICIvKipcbiAqIENvbnRhaW5zIHRoZSBzZXJpYWxpemF0aW9uLCByZWFjdGlmaWNhdGlvbiBhbmQgZGVzZXJpYWxpemF0aW9uIGZ1bmN0aW9uc1xuICogZm9yIHRoZSBWb2lkSW5saW5lIGVsZW1lbnRcbiAqIFxuICogQG1vZHVsZVxuICovXG5cbiBpbXBvcnQgeyBJUmVhY3RpZnlBcmcsIElTZXJpYWxpemF0aW9uUmVnaXN0cnlUeXBlIH0gZnJvbSBcIi4uXCI7XG4gaW1wb3J0IHsgZGVzZXJpYWxpemVFbGVtZW50QmFzZSwgSUVsZW1lbnRCYXNlLCByZWFjdGlmeUVsZW1lbnRCYXNlLCBzZXJpYWxpemVFbGVtZW50QmFzZSB9IGZyb20gXCIuLi9iYXNlXCI7XG4gaW1wb3J0IHsgSVRleHQsIFNUQU5EQVJEX1RFWFRfTk9ERSB9IGZyb20gXCIuL3RleHRcIjtcbiBcbiAvKipcbiAgKiBUaGUgZnVuY3Rpb24gdGhhdCByZWdpc3RlcnMgYW5kIGFkZHMgdGhlIFZvaWRJbmxpbmUgZWxlbWVudCBpbiB0aGUgZ2l2ZW5cbiAgKiByZWdpc3RyeVxuICAqIEBwYXJhbSByZWdpc3RyeSB0aGUgcmVnaXN0cnkgdG8gbW9kaWZ5XG4gICovXG4gZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyVm9pZElubGluZShyZWdpc3RyeTogSVNlcmlhbGl6YXRpb25SZWdpc3RyeVR5cGUpIHtcbiBcbiAgIC8qKlxuICAgICogY29udmVydHMgYSBnaXZlbiBWb2lkSW5saW5lIHJpY2ggZWxlbWVudCBpbnRvIGl0c1xuICAgICogSFRNTCBmb3JtXG4gICAgKiBAcGFyYW0gcCB0aGUgVm9pZElubGluZSByaWNoIGVsZW1lbnRcbiAgICAqIEByZXR1cm5zIGFuIEhUTUwgZWxlbWVudFxuICAgICovXG4gICBmdW5jdGlvbiBzZXJpYWxpemVWb2lkSW5saW5lKHA6IElWb2lkSW5saW5lKSB7XG4gICAgIC8vIHNpbXBsZVxuICAgICByZXR1cm4gc2VyaWFsaXplRWxlbWVudEJhc2UocmVnaXN0cnksIHAsIFwic3BhblwiLCBcInZvaWQtaW5saW5lXCIsIG51bGwsIHAuY2hpbGRyZW4pO1xuICAgfVxuIFxuICAgLyoqXG4gICAgKiBEZXNlcmlhbGl6ZXMgYW4gSFRNTCBub2RlIGludG8gdGhlIGdpdmVuIFZvaWRJbmxpbmVcbiAgICAqIHJpY2ggZWxlbWVudFxuICAgICogQHBhcmFtIG5vZGUgdGhlIG5vZGUgaW4gcXVlc3Rpb25cbiAgICAqIEByZXR1cm5zIGEgVm9pZElubGluZSBlbGVtZW50IHN0cnVjdHVyZVxuICAgICovXG4gICBmdW5jdGlvbiBkZXNlcmlhbGl6ZVZvaWRJbmxpbmUobm9kZTogSFRNTEVsZW1lbnQpOiBJVm9pZElubGluZSB7XG4gICAgIC8vIGZpcnN0IGxldCdzIGdldCB0cmhlIGJhc2VcbiAgICAgY29uc3QgYmFzZSA9IGRlc2VyaWFsaXplRWxlbWVudEJhc2Uobm9kZSk7XG4gXG4gICAgIC8vIGFuZCBidWlsZCB0aGUgVm9pZElubGluZSBpdHNlbGZcbiAgICAgY29uc3QgVm9pZElubGluZTogSVZvaWRJbmxpbmUgPSB7XG4gICAgICAgLi4uYmFzZSxcbiAgICAgICB0eXBlOiBcInZvaWQtaW5saW5lXCIsXG4gICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgIFNUQU5EQVJEX1RFWFRfTk9ERSgpLFxuICAgICAgIF0sXG4gICAgIH1cbiBcbiAgICAgLy8gcmV0dXJuIGl0XG4gICAgIHJldHVybiBWb2lkSW5saW5lO1xuICAgfVxuIFxuICAgLyoqXG4gICAgKiBSZWFjdGlmaWVzIGEgVm9pZElubGluZSB0aGF0IGlzIGFscmVhZHlcbiAgICAqIGludG8gYSByaWNoIGVsZW1lbnQgZm9ybVxuICAgICogQHBhcmFtIGFyZyB0aGUgcmVhY3RpZmljYXRpb24gYXJnXG4gICAgKi9cbiAgIGZ1bmN0aW9uIHJlYWN0aWZ5Vm9pZElubGluZShhcmc6IElSZWFjdGlmeUFyZzxJVm9pZElubGluZT4pIHtcbiAgICAgcmV0dXJuIHJlYWN0aWZ5RWxlbWVudEJhc2UoXG4gICAgICAgLy8gdGhlIHJlZ2lzdHJ5XG4gICAgICAgcmVnaXN0cnksXG4gICAgICAgLy8gdGhlIHRhZyB0byB1c2VcbiAgICAgICBcInBcIixcbiAgICAgICAvLyBubyBiYXNlIGNsYXNzIG5hbWVcbiAgICAgICBudWxsLFxuICAgICAgIC8vIHRoZSBjaGlsZHJlbiB0byB1c2VcbiAgICAgICBhcmcuZWxlbWVudC5jaGlsZHJlbixcbiAgICAgICAvLyBubyB3cmFwIGNoaWxkcmVuIGZ1bmN0aW9uXG4gICAgICAgbnVsbCxcbiAgICAgICAvLyB0aGUgYXJnIGl0c2VsZlxuICAgICAgIGFyZyxcbiAgICAgKTtcbiAgIH1cbiBcbiAgIC8vIHJlZ2lzdGVyIGluIHRoZSByZWdpc3RyeVxuICAgcmVnaXN0cnkuUkVBQ1RJRllbXCJ2b2lkLWlubGluZVwiXSA9IHJlYWN0aWZ5Vm9pZElubGluZTtcbiAgIHJlZ2lzdHJ5LlNFUklBTElaRVtcInZvaWQtaW5saW5lXCJdID0gc2VyaWFsaXplVm9pZElubGluZTtcbiAgIHJlZ2lzdHJ5LklOTElORVNbXCJ2b2lkLWlubGluZVwiXSA9IHRydWU7XG4gICByZWdpc3RyeS5WT0lEU1tcInZvaWQtaW5saW5lXCJdID0gdHJ1ZTtcbiAgIHJlZ2lzdHJ5LkRFU0VSSUFMSVpFLmJ5Q2xhc3NOYW1lW1widm9pZC1pbmxpbmVcIl0gPSBkZXNlcmlhbGl6ZVZvaWRJbmxpbmU7XG4gfVxuIFxuIC8qKlxuICAqIFJlcHJlc2VudHMgdGhlIFZvaWRJbmxpbmUsIHAgdHlwZSBmb3IgdGhlXG4gICogcmljaCB0ZXh0IHNwZWNpZmljYXRpb25cbiAgKiBidXQgaXQgbWlnaHQgYWxzbyBiZSBhIGRpdiBvciBhIHNwYW5cbiAgKi9cbiBleHBvcnQgaW50ZXJmYWNlIElWb2lkSW5saW5lIGV4dGVuZHMgSUVsZW1lbnRCYXNlIHtcbiAgIHR5cGU6IFwidm9pZC1pbmxpbmVcIixcbiBcbiAgIC8qKlxuICAgICogVGhlIFZvaWRJbmxpbmUgY2hpbGRyZW4gY2FuIGJlIGVpdGhlciB0ZXh0IG9yIGxpbmsgb3IgZmlsZSBmb3IgdGhlIGlubGluZXNcbiAgICAqL1xuICAgY2hpbGRyZW46IElUZXh0W10sXG4gfSIsICJpbXBvcnQgeyBJUmVhY3RpZnlBcmcsIElTZXJpYWxpemF0aW9uUmVnaXN0cnlUeXBlLCBSaWNoRWxlbWVudCwgZGVzZXJpYWxpemVDaGlsZHJlbkZvck5vZGUgfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IElFbGVtZW50QmFzZSwgZGVzZXJpYWxpemVFbGVtZW50QmFzZSwgcmVhY3RpZnlFbGVtZW50QmFzZSwgc2VyaWFsaXplRWxlbWVudEJhc2UgfSBmcm9tIFwiLi4vYmFzZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElVbm1hbmFnZWQgZXh0ZW5kcyBJRWxlbWVudEJhc2Uge1xuICAvKipcbiAgICogdGhlIHR5cGUgdW5tYW5hZ2VkXG4gICAqL1xuICB0eXBlOiBcInVubWFuYWdlZFwiO1xuICAvKipcbiAgICogVGhlIHRhZyBuYW1lIGl0IHVzZXNcbiAgICovXG4gIHRhZ05hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogSXQgY2FuIGhhdmUgYXMgbWFueSBjaGlsZHJlbiBhcyBpdCByZXF1aXJlc1xuICAgKiBidXQgbm90IHRleHQgZGlyZWN0bHlcbiAgICovXG4gIGNoaWxkcmVuOiBBcnJheTxSaWNoRWxlbWVudD47XG59XG5cbi8qKlxuICogVGhlIGZ1bmN0aW9uIHRoYXQgcmVnaXN0ZXJzIGFuZCBhZGRzIHRoZSBpbmxpbmUgaW4gdGhlIGdpdmVuXG4gKiByZWlnc3RyeVxuICogQHBhcmFtIHJlZ2lzdHJ5IHRoZSByZWdpc3RyeSB0byBtb2RpZnlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyVW5tYW5hZ2VkKHJlZ2lzdHJ5OiBJU2VyaWFsaXphdGlvblJlZ2lzdHJ5VHlwZSkge1xuICAvKipcbiAgICogU2VyaWFsaXplcyB0aGUgZWxlbWVudCB0byBpdHMgSFRNTCBmb3JtXG4gICAqIEBwYXJhbSBsaXN0IHRoZSBsaXN0IGluIHF1ZXN0aW9uXG4gICAqIEByZXR1cm5zIGFuIGh0bWwgZWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gc2VyaWFsaXplVW5tYW5hZ2VkKGVsZW1lbnQ6IElVbm1hbmFnZWQpIHtcbiAgICAvLyBzbyB3ZSBjYWxsIHRoZSBiYXNlIHNlcmlhbGl6YXRpb25cbiAgICByZXR1cm4gc2VyaWFsaXplRWxlbWVudEJhc2UoXG4gICAgICAvLyB0aGUgcmVnaXN0cnlcbiAgICAgIHJlZ2lzdHJ5LFxuICAgICAgLy8gdGhlIGxpc3QgaW4gcXVlc3Rpb24gY29tcG9uZW50XG4gICAgICBlbGVtZW50LFxuICAgICAgLy8gbm93IHRoZSB0YWcgdG8gdXNlIGRlcGVuZHNcbiAgICAgIGVsZW1lbnQudGFnTmFtZSxcbiAgICAgIC8vIG5vIGJhc2UgY2xhc3NcbiAgICAgIG51bGwsXG4gICAgICAvLyBubyBleHRyYSBhdHRyaWJ1dGVzXG4gICAgICBudWxsLFxuICAgICAgLy8gdGhlIGNoaWxkcmVuIHRvIHVzZVxuICAgICAgZWxlbWVudC5jaGlsZHJlbixcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyBhbiBIVE1MIG5vZGUgaW50byB0aGUgZ2l2ZW4gbGlzdFxuICAgKiByaWNoIGVsZW1lbnRcbiAgICogQHBhcmFtIG5vZGUgdGhlIG5vZGUgaW4gcXVlc3Rpb25cbiAgICogQHJldHVybnMgYSBsaXN0IGVsZW1lbnQgc3RydWN0dXJlXG4gICAqL1xuICBmdW5jdGlvbiBkZXNlcmlhbGl6ZVVubWFuYWdlZChub2RlOiBIVE1MRWxlbWVudCk6IElVbm1hbmFnZWQge1xuICAgIC8vIGZpcnN0IHdlIGdldCB0aGUgYmFzZVxuICAgIGNvbnN0IGJhc2UgPSBkZXNlcmlhbGl6ZUVsZW1lbnRCYXNlKG5vZGUpO1xuXG4gICAgLy8gYW5kIGNvbnN0cnVjdCB0aGUgbGlzdFxuICAgIGNvbnN0IHVubWFuYWdlZDogSVVubWFuYWdlZCA9IHtcbiAgICAgIC4uLmJhc2UsXG4gICAgICB0eXBlOiBcInVubWFuYWdlZFwiLFxuICAgICAgdGFnTmFtZTogbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICBjaGlsZHJlbjogZGVzZXJpYWxpemVDaGlsZHJlbkZvck5vZGUobm9kZSkgYXMgYW55W10sXG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIHN1Y2hcbiAgICByZXR1cm4gdW5tYW5hZ2VkO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVhY3RpZnlVbm1hbmFnZWQoYXJnOiBJUmVhY3RpZnlBcmc8SVVubWFuYWdlZD4pIHtcbiAgICByZXR1cm4gcmVhY3RpZnlFbGVtZW50QmFzZShcbiAgICAgIC8vIHRoZSByZWdpc3RyeVxuICAgICAgcmVnaXN0cnksXG4gICAgICAvLyB0aGUgdGFnIHRvIHVzZVxuICAgICAgYXJnLmVsZW1lbnQudGFnTmFtZSxcbiAgICAgIC8vIHRoZSBiYXNlIGNsYXNzXG4gICAgICBudWxsLFxuICAgICAgLy8gdGhlIGNoaWxkcmVuIHRvIHVzZVxuICAgICAgYXJnLmVsZW1lbnQuY2hpbGRyZW4sXG4gICAgICAvLyB0aGUgZnVuY3Rpb24gdG8gd3JhcCB0aGUgY2hpbGRyZW5cbiAgICAgIG51bGwsXG4gICAgICAvLyBwYXNzIHRoZSBnaXZlbiBhcmcgb25jZSBhZ2FpblxuICAgICAgYXJnLFxuICAgICk7XG4gIH1cblxuICByZWdpc3RyeS5ERVNFUklBTElaRS51bm1hbmFnZWQgPSBkZXNlcmlhbGl6ZVVubWFuYWdlZDtcbiAgcmVnaXN0cnkuU0VSSUFMSVpFLnVubWFuYWdlZCA9IHNlcmlhbGl6ZVVubWFuYWdlZDtcbiAgcmVnaXN0cnkuUkVBQ1RJRlkudW5tYW5hZ2VkID0gcmVhY3RpZnlVbm1hbmFnZWQ7XG5cbiAgcmVn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cm96ZW4iLCAiZ2V0UHJvdG90eXBlT2YiLCAiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwgIk9iamVjdCIsICJmcmVlemUiLCAic2VhbCIsICJjcmVhdGUiLCAiYXBwbHkiLCAiY29uc3RydWN0IiwgIlJlZmxlY3QiLCAieCIsICJmdW4iLCAidGhpc1ZhbHVlIiwgImFyZ3MiLCAiRnVuYyIsICJhcnJheUZvckVhY2giLCAidW5hcHBseSIsICJBcnJheSIsICJwcm90b3R5cGUiLCAiZm9yRWFjaCIsICJhcnJheVBvcCIsICJwb3AiLCAiYXJyYXlQdXNoIiwgInB1c2giLCAic3RyaW5nVG9Mb3dlckNhc2UiLCAiU3RyaW5nIiwgInRvTG93ZXJDYXNlIiwgInN0cmluZ1RvU3RyaW5nIiwgInRvU3RyaW5nIiwgInN0cmluZ01hdGNoIiwgIm1hdGNoIiwgInN0cmluZ1JlcGxhY2UiLCAicmVwbGFjZSIsICJzdHJpbmdJbmRleE9mIiwgImluZGV4T2YiLCAic3RyaW5nVHJpbSIsICJ0cmltIiwgInJlZ0V4cFRlc3QiLCAiUmVnRXhwIiwgInRlc3QiLCAidHlwZUVycm9yQ3JlYXRlIiwgInVuY29uc3RydWN0IiwgIlR5cGVFcnJvciIsICJmdW5jIiwgInRoaXNBcmciLCAiX2xlbiIsICJhcmd1bWVudHMiLCAibGVuZ3RoIiwgIl9rZXkiLCAiX2xlbjIiLCAiX2tleTIiLCAiYWRkVG9TZXQiLCAic2V0IiwgImFycmF5IiwgInRyYW5zZm9ybUNhc2VGdW5jIiwgInVuZGVmaW5lZCIsICJsIiwgImVsZW1lbnQiLCAibGNFbGVtZW50IiwgImNsZWFuQXJyYXkiLCAiaW5kZXgiLCAiY2xvbmUiLCAib2JqZWN0IiwgIm5ld09iamVjdCIsICJwcm9wZXJ0eSIsICJ2YWx1ZSIsICJpc0FycmF5IiwgImNvbnN0cnVjdG9yIiwgImxvb2t1cEdldHRlciIsICJwcm9wIiwgImRlc2MiLCAiZ2V0IiwgImZhbGxiYWNrVmFsdWUiLCAiY29uc29sZSIsICJ3YXJuIiwgImh0bWwiLCAic3ZnIiwgInN2Z0ZpbHRlcnMiLCAic3ZnRGlzYWxsb3dlZCIsICJtYXRoTWwiLCAibWF0aE1sRGlzYWxsb3dlZCIsICJ0ZXh0IiwgInhtbCIsICJNVVNUQUNIRV9FWFBSIiwgIkVSQl9FWFBSIiwgIlRNUExJVF9FWFBSIiwgIkRBVEFfQVRUUiIsICJBUklBX0FUVFIiLCAiSVNfQUxMT1dFRF9VUkkiLCAiSVNfU0NSSVBUX09SX0RBVEEiLCAiQVRUUl9XSElURVNQQUNFIiwgIkRPQ1RZUEVfTkFNRSIsICJnZXRHbG9iYWwiLCAid2luZG93IiwgIl9jcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3kiLCAidHJ1c3RlZFR5cGVzIiwgInB1cmlmeUhvc3RFbGVtZW50IiwgImNyZWF0ZVBvbGljeSIsICJzdWZmaXgiLCAiQVRUUl9OQU1FIiwgImhhc0F0dHJpYnV0ZSIsICJnZXRBdHRyaWJ1dGUiLCAicG9saWN5TmFtZSIsICJjcmVhdGVIVE1MIiwgImNyZWF0ZVNjcmlwdFVSTCIsICJzY3JpcHRVcmwiLCAiXyIsICJjcmVhdGVET01QdXJpZnkiLCAiRE9NUHVyaWZ5IiwgInJvb3QiLCAidmVyc2lvbiIsICJWRVJTSU9OIiwgInJlbW92ZWQiLCAiZG9jdW1lbnQiLCAibm9kZVR5cGUiLCAiaXNTdXBwb3J0ZWQiLCAib3JpZ2luYWxEb2N1bWVudCIsICJjdXJyZW50U2NyaXB0IiwgIkRvY3VtZW50RnJhZ21lbnQiLCAiSFRNTFRlbXBsYXRlRWxlbWVudCIsICJOb2RlIiwgIkVsZW1lbnQiLCAiTm9kZUZpbHRlciIsICJOYW1lZE5vZGVNYXAiLCAiTW96TmFtZWRBdHRyTWFwIiwgIkhUTUxGb3JtRWxlbWVudCIsICJET01QYXJzZXIiLCAiRWxlbWVudFByb3RvdHlwZSIsICJjbG9uZU5vZGUiLCAiZ2V0TmV4dFNpYmxpbmciLCAiZ2V0Q2hpbGROb2RlcyIsICJnZXRQYXJlbnROb2RlIiwgInRlbXBsYXRlIiwgImNyZWF0ZUVsZW1lbnQiLCAiY29udGVudCIsICJvd25lckRvY3VtZW50IiwgInRydXN0ZWRUeXBlc1BvbGljeSIsICJlbXB0eUhUTUwiLCAiaW1wbGVtZW50YXRpb24iLCAiY3JlYXRlTm9kZUl0ZXJhdG9yIiwgImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCAiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCAiaW1wb3J0Tm9kZSIsICJob29rcyIsICJjcmVhdGVIVE1MRG9jdW1lbnQiLCAiRVhQUkVTU0lPTlMiLCAiQUxMT1dFRF9UQUdTIiwgIkRFRkFVTFRfQUxMT1dFRF9UQUdTIiwgIlRBR1MiLCAiQUxMT1dFRF9BVFRSIiwgIkRFRkFVTFRfQUxMT1dFRF9BVFRSIiwgIkFUVFJTIiwgIkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HIiwgInRhZ05hbWVDaGVjayIsICJ3cml0YWJsZSIsICJjb25maWd1cmFibGUiLCAiZW51bWVyYWJsZSIsICJhdHRyaWJ1dGVOYW1lQ2hlY2siLCAiYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzIiwgIkZPUkJJRF9UQUdTIiwgIkZPUkJJRF9BVFRSIiwgIkFMTE9XX0FSSUFfQVRUUiIsICJBTExPV19EQVRBX0FUVFIiLCAiQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMiLCAiQUxMT1dfU0VMRl9DTE9TRV9JTl9BVFRSIiwgIlNBRkVfRk9SX1RFTVBMQVRFUyIsICJXSE9MRV9ET0NVTUVOVCIsICJTRVRfQ09ORklHIiwgIkZPUkNFX0JPRFkiLCAiUkVUVVJOX0RPTSIsICJSRVRVUk5fRE9NX0ZSQUdNRU5UIiwgIlJFVFVSTl9UUlVTVEVEX1RZUEUiLCAiU0FOSVRJWkVfRE9NIiwgIlNBTklUSVpFX05BTUVEX1BST1BTIiwgIlNBTklUSVpFX05BTUVEX1BST1BTX1BSRUZJWCIsICJLRUVQX0NPTlRFTlQiLCAiSU5fUExBQ0UiLCAiVVNFX1BST0ZJTEVTIiwgIkZPUkJJRF9DT05URU5UUyIsICJERUZBVUxUX0ZPUkJJRF9DT05URU5UUyIsICJEQVRBX1VSSV9UQUdTIiwgIkRFRkFVTFRfREFUQV9VUklfVEFHUyIsICJVUklfU0FGRV9BVFRSSUJVVEVTIiwgIkRFRkFVTFRfVVJJX1NBRkVfQVRUUklCVVRFUyIsICJNQVRITUxfTkFNRVNQQUNFIiwgIlNWR19OQU1FU1BBQ0UiLCAiSFRNTF9OQU1FU1BBQ0UiLCAiTkFNRVNQQUNFIiwgIklTX0VNUFRZX0lOUFVUIiwgIkFMTE9XRURfTkFNRVNQQUNFUyIsICJERUZBVUxUX0FMTE9XRURfTkFNRVNQQUNFUyIsICJQQVJTRVJfTUVESUFfVFlQRSIsICJTVVBQT1JURURfUEFSU0VSX01FRElBX1RZUEVTIiwgIkRFRkFVTFRfUEFSU0VSX01FRElBX1RZUEUiLCAiQ09ORklHIiwgImZvcm1FbGVtZW50IiwgImlzUmVnZXhPckZ1bmN0aW9uIiwgInRlc3RWYWx1ZSIsICJGdW5jdGlvbiIsICJfcGFyc2VDb25maWciLCAiY2ZnIiwgIkFERF9VUklfU0FGRV9BVFRSIiwgIkFERF9EQVRBX1VSSV9UQUdTIiwgIkFMTE9XRURfVVJJX1JFR0VYUCIsICJBRERfVEFHUyIsICJBRERfQVRUUiIsICJ0YWJsZSIsICJ0Ym9keSIsICJUUlVTVEVEX1RZUEVTX1BPTElDWSIsICJNQVRITUxfVEVYVF9JTlRFR1JBVElPTl9QT0lOVFMiLCAiSFRNTF9JTlRFR1JBVElPTl9QT0lOVFMiLCAiQ09NTU9OX1NWR19BTkRfSFRNTF9FTEVNRU5UUyIsICJBTExfU1ZHX1RBR1MiLCAiQUxMX01BVEhNTF9UQUdTIiwgIl9jaGVja1ZhbGlkTmFtZXNwYWNlIiwgInBhcmVudCIsICJ0YWdOYW1lIiwgIm5hbWVzcGFjZVVSSSIsICJwYXJlbnRUYWdOYW1lIiwgIkJvb2xlYW4iLCAiX2ZvcmNlUmVtb3ZlIiwgIm5vZGUiLCAicGFyZW50Tm9kZSIsICJyZW1vdmVDaGlsZCIsICJyZW1vdmUiLCAiX3JlbW92ZUF0dHJpYnV0ZSIsICJuYW1lIiwgImF0dHJpYnV0ZSIsICJnZXRBdHRyaWJ1dGVOb2RlIiwgImZyb20iLCAicmVtb3ZlQXR0cmlidXRlIiwgInNldEF0dHJpYnV0ZSIsICJfaW5pdERvY3VtZW50IiwgImRpcnR5IiwgImRvYyIsICJsZWFkaW5nV2hpdGVzcGFjZSIsICJtYXRjaGVzIiwgImRpcnR5UGF5bG9hZCIsICJwYXJzZUZyb21TdHJpbmciLCAiZG9jdW1lbnRFbGVtZW50IiwgImNyZWF0ZURvY3VtZW50IiwgImlubmVySFRNTCIsICJib2R5IiwgImluc2VydEJlZm9yZSIsICJjcmVhdGVUZXh0Tm9kZSIsICJjaGlsZE5vZGVzIiwgImNhbGwiLCAiX2NyZWF0ZU5vZGVJdGVyYXRvciIsICJTSE9XX0VMRU1FTlQiLCAiU0hPV19DT01NRU5UIiwgIlNIT1dfVEVYVCIsICJfaXNDbG9iYmVyZWQiLCAiZWxtIiwgIm5vZGVOYW1lIiwgInRleHRDb250ZW50IiwgImF0dHJpYnV0ZXMiLCAiaGFzQ2hpbGROb2RlcyIsICJfaXNOb2RlIiwgIl9leGVjdXRlSG9vayIsICJlbnRyeVBvaW50IiwgImN1cnJlbnROb2RlIiwgImRhdGEiLCAiaG9vayIsICJfc2FuaXRpemVFbGVtZW50cyIsICJhbGxvd2VkVGFncyIsICJmaXJzdEVsZW1lbnRDaGlsZCIsICJfaXNCYXNpY0N1c3RvbUVsZW1lbnQiLCAiY2hpbGRDb3VudCIsICJpIiwgImV4cHIiLCAiX2lzVmFsaWRBdHRyaWJ1dGUiLCAibGNUYWciLCAibGNOYW1lIiwgIl9zYW5pdGl6ZUF0dHJpYnV0ZXMiLCAiaG9va0V2ZW50IiwgImF0dHJOYW1lIiwgImF0dHJWYWx1ZSIsICJrZWVwQXR0ciIsICJhbGxvd2VkQXR0cmlidXRlcyIsICJhdHRyIiwgImZvcmNlS2VlcEF0dHIiLCAiZ2V0QXR0cmlidXRlVHlwZSIsICJzZXRBdHRyaWJ1dGVOUyIsICJfc2FuaXRpemVTaGFkb3dET00iLCAiZnJhZ21lbnQiLCAic2hhZG93Tm9kZSIsICJzaGFkb3dJdGVyYXRvciIsICJuZXh0Tm9kZSIsICJzYW5pdGl6ZSIsICJpbXBvcnRlZE5vZGUiLCAicmV0dXJuTm9kZSIsICJhcHBlbmRDaGlsZCIsICJmaXJzdENoaWxkIiwgIm5vZGVJdGVyYXRvciIsICJzaGFkb3dyb290IiwgInNoYWRvd3Jvb3Rtb2RlIiwgInNlcmlhbGl6ZWRIVE1MIiwgIm91dGVySFRNTCIsICJkb2N0eXBlIiwgInNldENvbmZpZyIsICJjbGVhckNvbmZpZyIsICJpc1ZhbGlkQXR0cmlidXRlIiwgInRhZyIsICJhZGRIb29rIiwgImhvb2tGdW5jdGlvbiIsICJyZW1vdmVIb29rIiwgInJlbW92ZUhvb2tzIiwgInJlbW92ZUFsbEhvb2tzIiwgImkiLCAicmVxdWlyZV9zaGFtcyIsICJyZXF1aXJlX2ltcGxlbWVudGF0aW9uIiwgImNvbmNhdHR5IiwgInNsaWN5IiwgIkVtcHR5IiwgInVuZGVmaW5lZCIsICJkb0V2YWwiLCAic3RyaW5nVG9QYXRoIiwgImdldEJhc2VJbnRyaW5zaWMiLCAiaGFzUHJvcGVydHlEZXNjcmlwdG9ycyIsICJkZWZpbmUiLCAiYXBwbHlCaW5kIiwgInJlcXVpcmVfaW1wbGVtZW50YXRpb24iLCAiZGVmaW5lIiwgImRlZmluZSIsICJmdW5jdGlvbnNIYXZlTmFtZXMiLCAiZGVmaW5lIiwgInJlcXVpcmVfaW1wbGVtZW50YXRpb24iLCAicmVxdWlyZV9wb2x5ZmlsbCIsICJyZXF1aXJlX3NoaW0iLCAiZGVmaW5lIiwgImltcG9ydF9yZWFjdCIsICJjcmVhdGVET01QdXJpZnkiLCAiaW1wb3J0X3JlYWN0IiwgIlJlYWN0IiwgIlJlYWN0IiwgImltcG9ydF9kb21wdXJpZnkiLCAiRE9NUHVyaWZ5IiwgImltcG9ydF9yZWFjdCIsICJSZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAiUmVhY3QiLCAiaW1wb3J0X3JlYWN0IiwgIlJlYWN0IiwgImltcG9ydF9yZWFjdCIsICJSZWFjdCIsICJpbmRleCIsICJ1dWlkdjUiLCAiaXNJZ25vcmVkIiwgImVxdWFscyIsICJSZWFjdCIsICJSZWFjdERPTSJdCn0K
