import {
  CONTAINER_CLASS_PREFIX,
  CUSTOM_CLASS_PREFIX,
  RICH_TEXT_CLASS_PREFIX,
  SERIALIZATION_REGISTRY,
  STANDARD_PARAGRAPH,
  STANDARD_TEXT_NODE,
  TABLE_CLASS_PREFIX,
  __commonJS,
  __spreadProps,
  __spreadValues,
  __toESM,
  __yieldStar,
  convertStyleStringToReactObject,
  deserialize,
  deserializePlain,
  getAllowedChildrenTypes,
  getContextFor,
  getUIHandlerValueWithKnownContextFor,
  getUUIDFor,
  isBlock,
  isInline,
  isSuperBlock,
  isVoid,
  normalizeElement,
  require_deep_equal,
  require_react,
  require_react_dom,
  serialize,
  serializeString
} from "/dist/commons-2PRWFEI7.js";

// ../node_modules/direction/index.js
var require_direction = __commonJS({
  "../node_modules/direction/index.js"(exports, module) {
    "use strict";
    module.exports = direction;
    var RTL = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC";
    var LTR = "A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C\uFE00-\uFE6F\uFEFD-\uFFFF";
    var rtl = new RegExp("^[^" + LTR + "]*[" + RTL + "]");
    var ltr = new RegExp("^[^" + RTL + "]*[" + LTR + "]");
    function direction(value) {
      value = String(value || "");
      if (rtl.test(value)) {
        return "rtl";
      }
      if (ltr.test(value)) {
        return "ltr";
      }
      return "neutral";
    }
  }
});

// ../node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "../node_modules/lodash/isObject.js"(exports, module) {
    function isObject2(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject2;
  }
});

// ../node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "../node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// ../node_modules/lodash/_root.js
var require_root = __commonJS({
  "../node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// ../node_modules/lodash/now.js
var require_now = __commonJS({
  "../node_modules/lodash/now.js"(exports, module) {
    var root = require_root();
    var now = function() {
      return root.Date.now();
    };
    module.exports = now;
  }
});

// ../node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "../node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
    var reWhitespace = /\s/;
    function trimmedEndIndex(string3) {
      var index = string3.length;
      while (index-- && reWhitespace.test(string3.charAt(index))) {
      }
      return index;
    }
    module.exports = trimmedEndIndex;
  }
});

// ../node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "../node_modules/lodash/_baseTrim.js"(exports, module) {
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;
    function baseTrim(string3) {
      return string3 ? string3.slice(0, trimmedEndIndex(string3) + 1).replace(reTrimStart, "") : string3;
    }
    module.exports = baseTrim;
  }
});

// ../node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "../node_modules/lodash/_Symbol.js"(exports, module) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// ../node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "../node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e2) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// ../node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "../node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// ../node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "../node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// ../node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "../node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// ../node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "../node_modules/lodash/isSymbol.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

// ../node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "../node_modules/lodash/toNumber.js"(exports, module) {
    var baseTrim = require_baseTrim();
    var isObject2 = require_isObject();
    var isSymbol = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject2(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject2(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = toNumber;
  }
});

// ../node_modules/lodash/debounce.js
var require_debounce = __commonJS({
  "../node_modules/lodash/debounce.js"(exports, module) {
    var isObject2 = require_isObject();
    var now = require_now();
    var toNumber = require_toNumber();
    var FUNC_ERROR_TEXT = "Expected a function";
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    function debounce2(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject2(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time2) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time2;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time2) {
        lastInvokeTime = time2;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time2) : result;
      }
      function remainingWait(time2) {
        var timeSinceLastCall = time2 - lastCallTime, timeSinceLastInvoke = time2 - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
      }
      function shouldInvoke(time2) {
        var timeSinceLastCall = time2 - lastCallTime, timeSinceLastInvoke = time2 - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time2 = now();
        if (shouldInvoke(time2)) {
          return trailingEdge(time2);
        }
        timerId = setTimeout(timerExpired, remainingWait(time2));
      }
      function trailingEdge(time2) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time2);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time2 = now(), isInvoking = shouldInvoke(time2);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time2;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    module.exports = debounce2;
  }
});

// ../node_modules/lodash/throttle.js
var require_throttle = __commonJS({
  "../node_modules/lodash/throttle.js"(exports, module) {
    var debounce2 = require_debounce();
    var isObject2 = require_isObject();
    var FUNC_ERROR_TEXT = "Expected a function";
    function throttle2(func, wait, options) {
      var leading = true, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject2(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      return debounce2(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
      });
    }
    module.exports = throttle2;
  }
});

// ../node_modules/is-hotkey/lib/index.js
var require_lib = __commonJS({
  "../node_modules/is-hotkey/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var IS_MAC = typeof window != "undefined" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);
    var MODIFIERS = {
      alt: "altKey",
      control: "ctrlKey",
      meta: "metaKey",
      shift: "shiftKey"
    };
    var ALIASES = {
      add: "+",
      break: "pause",
      cmd: "meta",
      command: "meta",
      ctl: "control",
      ctrl: "control",
      del: "delete",
      down: "arrowdown",
      esc: "escape",
      ins: "insert",
      left: "arrowleft",
      mod: IS_MAC ? "meta" : "control",
      opt: "alt",
      option: "alt",
      return: "enter",
      right: "arrowright",
      space: " ",
      spacebar: " ",
      up: "arrowup",
      win: "meta",
      windows: "meta"
    };
    var CODES = {
      backspace: 8,
      tab: 9,
      enter: 13,
      shift: 16,
      control: 17,
      alt: 18,
      pause: 19,
      capslock: 20,
      escape: 27,
      " ": 32,
      pageup: 33,
      pagedown: 34,
      end: 35,
      home: 36,
      arrowleft: 37,
      arrowup: 38,
      arrowright: 39,
      arrowdown: 40,
      insert: 45,
      delete: 46,
      meta: 91,
      numlock: 144,
      scrolllock: 145,
      ";": 186,
      "=": 187,
      ",": 188,
      "-": 189,
      ".": 190,
      "/": 191,
      "`": 192,
      "[": 219,
      "\\": 220,
      "]": 221,
      "'": 222
    };
    for (f = 1; f < 20; f++) {
      CODES["f" + f] = 111 + f;
    }
    var f;
    function isHotkey(hotkey, options, event) {
      if (options && !("byKey" in options)) {
        event = options;
        options = null;
      }
      if (!Array.isArray(hotkey)) {
        hotkey = [hotkey];
      }
      var array = hotkey.map(function(string3) {
        return parseHotkey(string3, options);
      });
      var check = function check2(e2) {
        return array.some(function(object) {
          return compareHotkey(object, e2);
        });
      };
      var ret = event == null ? check : check(event);
      return ret;
    }
    function isCodeHotkey(hotkey, event) {
      return isHotkey(hotkey, event);
    }
    function isKeyHotkey2(hotkey, event) {
      return isHotkey(hotkey, { byKey: true }, event);
    }
    function parseHotkey(hotkey, options) {
      var byKey = options && options.byKey;
      var ret = {};
      hotkey = hotkey.replace("++", "+add");
      var values = hotkey.split("+");
      var length = values.length;
      for (var k in MODIFIERS) {
        ret[MODIFIERS[k]] = false;
      }
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = void 0;
      try {
        for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var value = _step.value;
          var optional = value.endsWith("?") && value.length > 1;
          if (optional) {
            value = value.slice(0, -1);
          }
          var name = toKeyName(value);
          var modifier = MODIFIERS[name];
          if (length === 1 || !modifier) {
            if (byKey) {
              ret.key = name;
            } else {
              ret.which = toKeyCode(value);
            }
          }
          if (modifier) {
            ret[modifier] = optional ? null : true;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
      return ret;
    }
    function compareHotkey(object, event) {
      for (var key in object) {
        var expected = object[key];
        var actual = void 0;
        if (expected == null) {
          continue;
        }
        if (key === "key" && event.key != null) {
          actual = event.key.toLowerCase();
        } else if (key === "which") {
          actual = expected === 91 && event.which === 93 ? 91 : event.which;
        } else {
          actual = event[key];
        }
        if (actual == null && expected === false) {
          continue;
        }
        if (actual !== expected) {
          return false;
        }
      }
      return true;
    }
    function toKeyCode(name) {
      name = toKeyName(name);
      var code = CODES[name] || name.toUpperCase().charCodeAt(0);
      return code;
    }
    function toKeyName(name) {
      name = name.toLowerCase();
      name = ALIASES[name] || name;
      return name;
    }
    exports.default = isHotkey;
    exports.isHotkey = isHotkey;
    exports.isCodeHotkey = isCodeHotkey;
    exports.isKeyHotkey = isKeyHotkey2;
    exports.parseHotkey = parseHotkey;
    exports.compareHotkey = compareHotkey;
    exports.toKeyCode = toKeyCode;
    exports.toKeyName = toKeyName;
  }
});

// ../editor/slate/index.tsx
var import_react3 = __toESM(require_react());
var import_deep_equal2 = __toESM(require_deep_equal());

// ../node_modules/is-plain-object/dist/is-plain-object.mjs
function isObject(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function isPlainObject(o) {
  var ctor, prot;
  if (isObject(o) === false)
    return false;
  ctor = o.constructor;
  if (ctor === void 0)
    return true;
  prot = ctor.prototype;
  if (isObject(prot) === false)
    return false;
  if (prot.hasOwnProperty("isPrototypeOf") === false) {
    return false;
  }
  return true;
}

// ../node_modules/immer/dist/immer.mjs
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");
var errors = true ? [
  // All error codes, starting by 0:
  function(plugin) {
    return "The plugin for '".concat(plugin, "' has not been loaded into Immer. To enable the plugin, import and call `enable").concat(plugin, "()` when initializing your application.");
  },
  function(thing) {
    return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '".concat(thing, "'");
  },
  "This object has been frozen and should not be mutated",
  function(data) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(thing) {
    return "'current' expects a draft, got: ".concat(thing);
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(thing) {
    return "'original' expects a draft, got: ".concat(thing);
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function die(error, ...args) {
  if (true) {
    const e2 = errors[error];
    const msg2 = typeof e2 === "function" ? e2.apply(null, args) : e2;
    throw new Error("[Immer] ".concat(msg2));
  }
  throw new Error(
    "[Immer] minified error nr: ".concat(error, ". Full error at: https://bit.ly/3cXEKWf")
  );
}
var getPrototypeOf = Object.getPrototypeOf;
function isDraft(value) {
  return !!value && !!value[DRAFT_STATE];
}
function isDraftable(value) {
  var _a;
  if (!value)
    return false;
  return isPlainObject2(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!((_a = value.constructor) == null ? void 0 : _a[DRAFTABLE]) || isMap(value) || isSet(value);
}
var objectCtorString = Object.prototype.constructor.toString();
function isPlainObject2(value) {
  if (!value || typeof value !== "object")
    return false;
  const proto = getPrototypeOf(value);
  if (proto === null) {
    return true;
  }
  const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  if (Ctor === Object)
    return true;
  return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
}
function each(obj, iter) {
  if (getArchtype(obj) === 0) {
    Object.entries(obj).forEach(([key, value]) => {
      iter(key, value, obj);
    });
  } else {
    obj.forEach((entry, index) => iter(index, entry, obj));
  }
}
function getArchtype(thing) {
  const state = thing[DRAFT_STATE];
  return state ? state.type_ : Array.isArray(thing) ? 1 : isMap(thing) ? 2 : isSet(thing) ? 3 : 0;
}
function has(thing, prop) {
  return getArchtype(thing) === 2 ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function set(thing, propOrOldValue, value) {
  const t2 = getArchtype(thing);
  if (t2 === 2)
    thing.set(propOrOldValue, value);
  else if (t2 === 3) {
    thing.add(value);
  } else
    thing[propOrOldValue] = value;
}
function is(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function isMap(target) {
  return target instanceof Map;
}
function isSet(target) {
  return target instanceof Set;
}
function latest(state) {
  return state.copy_ || state.base_;
}
function shallowCopy(base, strict) {
  if (isMap(base)) {
    return new Map(base);
  }
  if (isSet(base)) {
    return new Set(base);
  }
  if (Array.isArray(base))
    return Array.prototype.slice.call(base);
  if (!strict && isPlainObject2(base)) {
    if (!getPrototypeOf(base)) {
      const obj = /* @__PURE__ */ Object.create(null);
      return Object.assign(obj, base);
    }
    return __spreadValues({}, base);
  }
  const descriptors = Object.getOwnPropertyDescriptors(base);
  delete descriptors[DRAFT_STATE];
  let keys = Reflect.ownKeys(descriptors);
  for (let i2 = 0; i2 < keys.length; i2++) {
    const key = keys[i2];
    const desc = descriptors[key];
    if (desc.writable === false) {
      desc.writable = true;
      desc.configurable = true;
    }
    if (desc.get || desc.set)
      descriptors[key] = {
        configurable: true,
        writable: true,
        // could live with !!desc.set as well here...
        enumerable: desc.enumerable,
        value: base[key]
      };
  }
  return Object.create(getPrototypeOf(base), descriptors);
}
function freeze(obj, deep = false) {
  if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
    return obj;
  if (getArchtype(obj) > 1) {
    obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
  }
  Object.freeze(obj);
  if (deep)
    each(obj, (_key, value) => freeze(value, true), true);
  return obj;
}
function dontMutateFrozenCollections() {
  die(2);
}
function isFrozen(obj) {
  return Object.isFrozen(obj);
}
var plugins = {};
function getPlugin(pluginKey) {
  const plugin = plugins[pluginKey];
  if (!plugin) {
    die(0, pluginKey);
  }
  return plugin;
}
var currentScope;
function getCurrentScope() {
  return currentScope;
}
function createScope(parent_, immer_) {
  return {
    drafts_: [],
    parent_,
    immer_,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0
  };
}
function usePatchesInScope(scope, patchListener) {
  if (patchListener) {
    getPlugin("Patches");
    scope.patches_ = [];
    scope.inversePatches_ = [];
    scope.patchListener_ = patchListener;
  }
}
function revokeScope(scope) {
  leaveScope(scope);
  scope.drafts_.forEach(revokeDraft);
  scope.drafts_ = null;
}
function leaveScope(scope) {
  if (scope === currentScope) {
    currentScope = scope.parent_;
  }
}
function enterScope(immer2) {
  return currentScope = createScope(currentScope, immer2);
}
function revokeDraft(draft) {
  const state = draft[DRAFT_STATE];
  if (state.type_ === 0 || state.type_ === 1)
    state.revoke_();
  else
    state.revoked_ = true;
}
function processResult(result, scope) {
  scope.unfinalizedDrafts_ = scope.drafts_.length;
  const baseDraft = scope.drafts_[0];
  const isReplaced = result !== void 0 && result !== baseDraft;
  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified_) {
      revokeScope(scope);
      die(4);
    }
    if (isDraftable(result)) {
      result = finalize(scope, result);
      if (!scope.parent_)
        maybeFreeze(scope, result);
    }
    if (scope.patches_) {
      getPlugin("Patches").generateReplacementPatches_(
        baseDraft[DRAFT_STATE].base_,
        result,
        scope.patches_,
        scope.inversePatches_
      );
    }
  } else {
    result = finalize(scope, baseDraft, []);
  }
  revokeScope(scope);
  if (scope.patches_) {
    scope.patchListener_(scope.patches_, scope.inversePatches_);
  }
  return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value, path3) {
  if (isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  if (!state) {
    each(
      value,
      (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path3),
      true
      // See #590, don't recurse into non-enumerable of non drafted objects
    );
    return value;
  }
  if (state.scope_ !== rootScope)
    return value;
  if (!state.modified_) {
    maybeFreeze(rootScope, state.base_, true);
    return state.base_;
  }
  if (!state.finalized_) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
    const result = state.copy_;
    let resultEach = result;
    let isSet2 = false;
    if (state.type_ === 3) {
      resultEach = new Set(result);
      result.clear();
      isSet2 = true;
    }
    each(
      resultEach,
      (key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path3, isSet2)
    );
    maybeFreeze(rootScope, result, false);
    if (path3 && rootScope.patches_) {
      getPlugin("Patches").generatePatches_(
        state,
        path3,
        rootScope.patches_,
        rootScope.inversePatches_
      );
    }
  }
  return state.copy_;
}
function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
  if (childValue === targetObject)
    die(5);
  if (isDraft(childValue)) {
    const path3 = rootPath && parentState && parentState.type_ !== 3 && // Set objects are atomic since they have no keys.
    !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
    const res = finalize(rootScope, childValue, path3);
    set(targetObject, prop, res);
    if (isDraft(res)) {
      rootScope.canAutoFreeze_ = false;
    } else
      return;
  } else if (targetIsSet) {
    targetObject.add(childValue);
  }
  if (isDraftable(childValue) && !isFrozen(childValue)) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
      return;
    }
    finalize(rootScope, childValue);
    if (!parentState || !parentState.scope_.parent_)
      maybeFreeze(rootScope, childValue);
  }
}
function maybeFreeze(scope, value, deep = false) {
  if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
    freeze(value, deep);
  }
}
function createProxyProxy(base, parent3) {
  const isArray = Array.isArray(base);
  const state = {
    type_: isArray ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: parent3 ? parent3.scope_ : getCurrentScope(),
    // True for both shallow and deep changes.
    modified_: false,
    // Used during finalization.
    finalized_: false,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: parent3,
    // The base state.
    base_: base,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: false
  };
  let target = state;
  let traps = objectTraps;
  if (isArray) {
    target = [state];
    traps = arrayTraps;
  }
  const { revoke, proxy } = Proxy.revocable(target, traps);
  state.draft_ = proxy;
  state.revoke_ = revoke;
  return proxy;
}
var objectTraps = {
  get(state, prop) {
    if (prop === DRAFT_STATE)
      return state;
    const source = latest(state);
    if (!has(source, prop)) {
      return readPropFromProto(state, source, prop);
    }
    const value = source[prop];
    if (state.finalized_ || !isDraftable(value)) {
      return value;
    }
    if (value === peek(state.base_, prop)) {
      prepareCopy(state);
      return state.copy_[prop] = createProxy(value, state);
    }
    return value;
  },
  has(state, prop) {
    return prop in latest(state);
  },
  ownKeys(state) {
    return Reflect.ownKeys(latest(state));
  },
  set(state, prop, value) {
    const desc = getDescriptorFromProto(latest(state), prop);
    if (desc == null ? void 0 : desc.set) {
      desc.set.call(state.draft_, value);
      return true;
    }
    if (!state.modified_) {
      const current2 = peek(latest(state), prop);
      const currentState = current2 == null ? void 0 : current2[DRAFT_STATE];
      if (currentState && currentState.base_ === value) {
        state.copy_[prop] = value;
        state.assigned_[prop] = false;
        return true;
      }
      if (is(value, current2) && (value !== void 0 || has(state.base_, prop)))
        return true;
      prepareCopy(state);
      markChanged(state);
    }
    if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
    (value !== void 0 || prop in state.copy_) || // special case: NaN
    Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
      return true;
    state.copy_[prop] = value;
    state.assigned_[prop] = true;
    return true;
  },
  deleteProperty(state, prop) {
    if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
      state.assigned_[prop] = false;
      prepareCopy(state);
      markChanged(state);
    } else {
      delete state.assigned_[prop];
    }
    if (state.copy_) {
      delete state.copy_[prop];
    }
    return true;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(state, prop) {
    const owner = latest(state);
    const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (!desc)
      return desc;
    return {
      writable: true,
      configurable: state.type_ !== 1 || prop !== "length",
      enumerable: desc.enumerable,
      value: owner[prop]
    };
  },
  defineProperty() {
    die(11);
  },
  getPrototypeOf(state) {
    return getPrototypeOf(state.base_);
  },
  setPrototypeOf() {
    die(12);
  }
};
var arrayTraps = {};
each(objectTraps, (key, fn) => {
  arrayTraps[key] = function() {
    arguments[0] = arguments[0][0];
    return fn.apply(this, arguments);
  };
});
arrayTraps.deleteProperty = function(state, prop) {
  if (isNaN(parseInt(prop)))
    die(13);
  return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function(state, prop, value) {
  if (prop !== "length" && isNaN(parseInt(prop)))
    die(14);
  return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
  const state = draft[DRAFT_STATE];
  const source = state ? latest(state) : draft;
  return source[prop];
}
function readPropFromProto(state, source, prop) {
  var _a;
  const desc = getDescriptorFromProto(source, prop);
  return desc ? "value" in desc ? desc.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (_a = desc.get) == null ? void 0 : _a.call(state.draft_)
  ) : void 0;
}
function getDescriptorFromProto(source, prop) {
  if (!(prop in source))
    return void 0;
  let proto = getPrototypeOf(source);
  while (proto) {
    const desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (desc)
      return desc;
    proto = getPrototypeOf(proto);
  }
  return void 0;
}
function markChanged(state) {
  if (!state.modified_) {
    state.modified_ = true;
    if (state.parent_) {
      markChanged(state.parent_);
    }
  }
}
function prepareCopy(state) {
  if (!state.copy_) {
    state.copy_ = shallowCopy(
      state.base_,
      state.scope_.immer_.useStrictShallowCopy_
    );
  }
}
var Immer2 = class {
  constructor(config) {
    this.autoFreeze_ = true;
    this.useStrictShallowCopy_ = false;
    this.produce = (base, recipe, patchListener) => {
      if (typeof base === "function" && typeof recipe !== "function") {
        const defaultBase = recipe;
        recipe = base;
        const self2 = this;
        return function curriedProduce(base2 = defaultBase, ...args) {
          return self2.produce(base2, (draft) => recipe.call(this, draft, ...args));
        };
      }
      if (typeof recipe !== "function")
        die(6);
      if (patchListener !== void 0 && typeof patchListener !== "function")
        die(7);
      let result;
      if (isDraftable(base)) {
        const scope = enterScope(this);
        const proxy = createProxy(base, void 0);
        let hasError = true;
        try {
          result = recipe(proxy);
          hasError = false;
        } finally {
          if (hasError)
            revokeScope(scope);
          else
            leaveScope(scope);
        }
        usePatchesInScope(scope, patchListener);
        return processResult(result, scope);
      } else if (!base || typeof base !== "object") {
        result = recipe(base);
        if (result === void 0)
          result = base;
        if (result === NOTHING)
          result = void 0;
        if (this.autoFreeze_)
          freeze(result, true);
        if (patchListener) {
          const p = [];
          const ip = [];
          getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
          patchListener(p, ip);
        }
        return result;
      } else
        die(1, base);
    };
    this.produceWithPatches = (base, recipe) => {
      if (typeof base === "function") {
        return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
      }
      let patches, inversePatches;
      const result = this.produce(base, recipe, (p, ip) => {
        patches = p;
        inversePatches = ip;
      });
      return [result, patches, inversePatches];
    };
    if (typeof (config == null ? void 0 : config.autoFreeze) === "boolean")
      this.setAutoFreeze(config.autoFreeze);
    if (typeof (config == null ? void 0 : config.useStrictShallowCopy) === "boolean")
      this.setUseStrictShallowCopy(config.useStrictShallowCopy);
  }
  createDraft(base) {
    if (!isDraftable(base))
      die(8);
    if (isDraft(base))
      base = current(base);
    const scope = enterScope(this);
    const proxy = createProxy(base, void 0);
    proxy[DRAFT_STATE].isManual_ = true;
    leaveScope(scope);
    return proxy;
  }
  finishDraft(draft, patchListener) {
    const state = draft && draft[DRAFT_STATE];
    if (!state || !state.isManual_)
      die(9);
    const { scope_: scope } = state;
    usePatchesInScope(scope, patchListener);
    return processResult(void 0, scope);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(value) {
    this.autoFreeze_ = value;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(value) {
    this.useStrictShallowCopy_ = value;
  }
  applyPatches(base, patches) {
    let i2;
    for (i2 = patches.length - 1; i2 >= 0; i2--) {
      const patch = patches[i2];
      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    }
    if (i2 > -1) {
      patches = patches.slice(i2 + 1);
    }
    const applyPatchesImpl = getPlugin("Patches").applyPatches_;
    if (isDraft(base)) {
      return applyPatchesImpl(base, patches);
    }
    return this.produce(
      base,
      (draft) => applyPatchesImpl(draft, patches)
    );
  }
};
function createProxy(value, parent3) {
  const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent3) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent3) : createProxyProxy(value, parent3);
  const scope = parent3 ? parent3.scope_ : getCurrentScope();
  scope.drafts_.push(draft);
  return draft;
}
function current(value) {
  if (!isDraft(value))
    die(10, value);
  return currentImpl(value);
}
function currentImpl(value) {
  if (!isDraftable(value) || isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  let copy;
  if (state) {
    if (!state.modified_)
      return state.base_;
    state.finalized_ = true;
    copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
  } else {
    copy = shallowCopy(value, true);
  }
  each(copy, (key, childValue) => {
    set(copy, key, currentImpl(childValue));
  });
  if (state) {
    state.finalized_ = false;
  }
  return copy;
}
var immer = new Immer2();
var produce = immer.produce;
var produceWithPatches = immer.produceWithPatches.bind(
  immer
);
var setAutoFreeze = immer.setAutoFreeze.bind(immer);
var setUseStrictShallowCopy = immer.setUseStrictShallowCopy.bind(immer);
var applyPatches = immer.applyPatches.bind(immer);
var createDraft = immer.createDraft.bind(immer);
var finishDraft = immer.finishDraft.bind(immer);

// ../node_modules/slate/dist/index.es.js
var PathRef = {
  transform(ref, op) {
    var {
      current: current2,
      affinity
    } = ref;
    if (current2 == null) {
      return;
    }
    var path3 = Path.transform(current2, op, {
      affinity
    });
    ref.current = path3;
    if (path3 == null) {
      ref.unref();
    }
  }
};
var PointRef = {
  transform(ref, op) {
    var {
      current: current2,
      affinity
    } = ref;
    if (current2 == null) {
      return;
    }
    var point3 = Point.transform(current2, op, {
      affinity
    });
    ref.current = point3;
    if (point3 == null) {
      ref.unref();
    }
  }
};
var RangeRef = {
  transform(ref, op) {
    var {
      current: current2,
      affinity
    } = ref;
    if (current2 == null) {
      return;
    }
    var path3 = Range.transform(current2, op, {
      affinity
    });
    ref.current = path3;
    if (path3 == null) {
      ref.unref();
    }
  }
};
var DIRTY_PATHS = /* @__PURE__ */ new WeakMap();
var DIRTY_PATH_KEYS = /* @__PURE__ */ new WeakMap();
var FLUSHING = /* @__PURE__ */ new WeakMap();
var NORMALIZING = /* @__PURE__ */ new WeakMap();
var PATH_REFS = /* @__PURE__ */ new WeakMap();
var POINT_REFS = /* @__PURE__ */ new WeakMap();
var RANGE_REFS = /* @__PURE__ */ new WeakMap();
var Path = {
  ancestors(path3) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      reverse = false
    } = options;
    var paths = Path.levels(path3, options);
    if (reverse) {
      paths = paths.slice(1);
    } else {
      paths = paths.slice(0, -1);
    }
    return paths;
  },
  common(path3, another) {
    var common = [];
    for (var i2 = 0; i2 < path3.length && i2 < another.length; i2++) {
      var av = path3[i2];
      var bv = another[i2];
      if (av !== bv) {
        break;
      }
      common.push(av);
    }
    return common;
  },
  compare(path3, another) {
    var min = Math.min(path3.length, another.length);
    for (var i2 = 0; i2 < min; i2++) {
      if (path3[i2] < another[i2])
        return -1;
      if (path3[i2] > another[i2])
        return 1;
    }
    return 0;
  },
  endsAfter(path3, another) {
    var i2 = path3.length - 1;
    var as = path3.slice(0, i2);
    var bs = another.slice(0, i2);
    var av = path3[i2];
    var bv = another[i2];
    return Path.equals(as, bs) && av > bv;
  },
  endsAt(path3, another) {
    var i2 = path3.length;
    var as = path3.slice(0, i2);
    var bs = another.slice(0, i2);
    return Path.equals(as, bs);
  },
  endsBefore(path3, another) {
    var i2 = path3.length - 1;
    var as = path3.slice(0, i2);
    var bs = another.slice(0, i2);
    var av = path3[i2];
    var bv = another[i2];
    return Path.equals(as, bs) && av < bv;
  },
  equals(path3, another) {
    return path3.length === another.length && path3.every((n3, i2) => n3 === another[i2]);
  },
  hasPrevious(path3) {
    return path3[path3.length - 1] > 0;
  },
  isAfter(path3, another) {
    return Path.compare(path3, another) === 1;
  },
  isAncestor(path3, another) {
    return path3.length < another.length && Path.compare(path3, another) === 0;
  },
  isBefore(path3, another) {
    return Path.compare(path3, another) === -1;
  },
  isChild(path3, another) {
    return path3.length === another.length + 1 && Path.compare(path3, another) === 0;
  },
  isCommon(path3, another) {
    return path3.length <= another.length && Path.compare(path3, another) === 0;
  },
  isDescendant(path3, another) {
    return path3.length > another.length && Path.compare(path3, another) === 0;
  },
  isParent(path3, another) {
    return path3.length + 1 === another.length && Path.compare(path3, another) === 0;
  },
  isPath(value) {
    return Array.isArray(value) && (value.length === 0 || typeof value[0] === "number");
  },
  isSibling(path3, another) {
    if (path3.length !== another.length) {
      return false;
    }
    var as = path3.slice(0, -1);
    var bs = another.slice(0, -1);
    var al = path3[path3.length - 1];
    var bl = another[another.length - 1];
    return al !== bl && Path.equals(as, bs);
  },
  levels(path3) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      reverse = false
    } = options;
    var list = [];
    for (var i2 = 0; i2 <= path3.length; i2++) {
      list.push(path3.slice(0, i2));
    }
    if (reverse) {
      list.reverse();
    }
    return list;
  },
  next(path3) {
    if (path3.length === 0) {
      throw new Error("Cannot get the next path of a root path [".concat(path3, "], because it has no next index."));
    }
    var last2 = path3[path3.length - 1];
    return path3.slice(0, -1).concat(last2 + 1);
  },
  operationCanTransformPath(operation) {
    switch (operation.type) {
      case "insert_node":
      case "remove_node":
      case "merge_node":
      case "split_node":
      case "move_node":
        return true;
      default:
        return false;
    }
  },
  parent(path3) {
    if (path3.length === 0) {
      throw new Error("Cannot get the parent path of the root path [".concat(path3, "]."));
    }
    return path3.slice(0, -1);
  },
  previous(path3) {
    if (path3.length === 0) {
      throw new Error("Cannot get the previous path of a root path [".concat(path3, "], because it has no previous index."));
    }
    var last2 = path3[path3.length - 1];
    if (last2 <= 0) {
      throw new Error("Cannot get the previous path of a first child path [".concat(path3, "] because it would result in a negative index."));
    }
    return path3.slice(0, -1).concat(last2 - 1);
  },
  relative(path3, ancestor) {
    if (!Path.isAncestor(ancestor, path3) && !Path.equals(path3, ancestor)) {
      throw new Error("Cannot get the relative path of [".concat(path3, "] inside ancestor [").concat(ancestor, "], because it is not above or equal to the path."));
    }
    return path3.slice(ancestor.length);
  },
  transform(path3, operation) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!path3)
      return null;
    var p = [...path3];
    var {
      affinity = "forward"
    } = options;
    if (path3.length === 0) {
      return p;
    }
    switch (operation.type) {
      case "insert_node": {
        var {
          path: op
        } = operation;
        if (Path.equals(op, p) || Path.endsBefore(op, p) || Path.isAncestor(op, p)) {
          p[op.length - 1] += 1;
        }
        break;
      }
      case "remove_node": {
        var {
          path: _op
        } = operation;
        if (Path.equals(_op, p) || Path.isAncestor(_op, p)) {
          return null;
        } else if (Path.endsBefore(_op, p)) {
          p[_op.length - 1] -= 1;
        }
        break;
      }
      case "merge_node": {
        var {
          path: _op2,
          position
        } = operation;
        if (Path.equals(_op2, p) || Path.endsBefore(_op2, p)) {
          p[_op2.length - 1] -= 1;
        } else if (Path.isAncestor(_op2, p)) {
          p[_op2.length - 1] -= 1;
          p[_op2.length] += position;
        }
        break;
      }
      case "split_node": {
        var {
          path: _op3,
          position: _position
        } = operation;
        if (Path.equals(_op3, p)) {
          if (affinity === "forward") {
            p[p.length - 1] += 1;
          } else if (affinity === "backward")
            ;
          else {
            return null;
          }
        } else if (Path.endsBefore(_op3, p)) {
          p[_op3.length - 1] += 1;
        } else if (Path.isAncestor(_op3, p) && path3[_op3.length] >= _position) {
          p[_op3.length - 1] += 1;
          p[_op3.length] -= _position;
        }
        break;
      }
      case "move_node": {
        var {
          path: _op4,
          newPath: onp
        } = operation;
        if (Path.equals(_op4, onp)) {
          return p;
        }
        if (Path.isAncestor(_op4, p) || Path.equals(_op4, p)) {
          var copy = onp.slice();
          if (Path.endsBefore(_op4, onp) && _op4.length < onp.length) {
            copy[_op4.length - 1] -= 1;
          }
          return copy.concat(p.slice(_op4.length));
        } else if (Path.isSibling(_op4, onp) && (Path.isAncestor(onp, p) || Path.equals(onp, p))) {
          if (Path.endsBefore(_op4, p)) {
            p[_op4.length - 1] -= 1;
          } else {
            p[_op4.length - 1] += 1;
          }
        } else if (Path.endsBefore(onp, p) || Path.equals(onp, p) || Path.isAncestor(onp, p)) {
          if (Path.endsBefore(_op4, p)) {
            p[_op4.length - 1] -= 1;
          }
          p[onp.length - 1] += 1;
        } else if (Path.endsBefore(_op4, p)) {
          if (Path.equals(onp, p)) {
            p[onp.length - 1] += 1;
          }
          p[_op4.length - 1] -= 1;
        }
        break;
      }
    }
    return p;
  }
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys$e(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$e(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$e(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$e(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var applyToDraft = (editor, selection, op) => {
  switch (op.type) {
    case "insert_node": {
      var {
        path: path3,
        node: node3
      } = op;
      var parent3 = Node.parent(editor, path3);
      var index = path3[path3.length - 1];
      if (index > parent3.children.length) {
        throw new Error('Cannot apply an "insert_node" operation at path ['.concat(path3, "] because the destination is past the end of the node."));
      }
      parent3.children.splice(index, 0, node3);
      if (selection) {
        for (var [point3, key] of Range.points(selection)) {
          selection[key] = Point.transform(point3, op);
        }
      }
      break;
    }
    case "insert_text": {
      var {
        path: _path,
        offset,
        text
      } = op;
      if (text.length === 0)
        break;
      var _node = Node.leaf(editor, _path);
      var before3 = _node.text.slice(0, offset);
      var after3 = _node.text.slice(offset);
      _node.text = before3 + text + after3;
      if (selection) {
        for (var [_point, _key] of Range.points(selection)) {
          selection[_key] = Point.transform(_point, op);
        }
      }
      break;
    }
    case "merge_node": {
      var {
        path: _path2
      } = op;
      var _node2 = Node.get(editor, _path2);
      var prevPath = Path.previous(_path2);
      var prev = Node.get(editor, prevPath);
      var _parent = Node.parent(editor, _path2);
      var _index = _path2[_path2.length - 1];
      if (Text.isText(_node2) && Text.isText(prev)) {
        prev.text += _node2.text;
      } else if (!Text.isText(_node2) && !Text.isText(prev)) {
        prev.children.push(..._node2.children);
      } else {
        throw new Error('Cannot apply a "merge_node" operation at path ['.concat(_path2, "] to nodes of different interfaces: ").concat(Scrubber.stringify(_node2), " ").concat(Scrubber.stringify(prev)));
      }
      _parent.children.splice(_index, 1);
      if (selection) {
        for (var [_point2, _key2] of Range.points(selection)) {
          selection[_key2] = Point.transform(_point2, op);
        }
      }
      break;
    }
    case "move_node": {
      var {
        path: _path3,
        newPath
      } = op;
      if (Path.isAncestor(_path3, newPath)) {
        throw new Error("Cannot move a path [".concat(_path3, "] to new path [").concat(newPath, "] because the destination is inside itself."));
      }
      var _node3 = Node.get(editor, _path3);
      var _parent2 = Node.parent(editor, _path3);
      var _index2 = _path3[_path3.length - 1];
      _parent2.children.splice(_index2, 1);
      var truePath = Path.transform(_path3, op);
      var newParent = Node.get(editor, Path.parent(truePath));
      var newIndex = truePath[truePath.length - 1];
      newParent.children.splice(newIndex, 0, _node3);
      if (selection) {
        for (var [_point3, _key3] of Range.points(selection)) {
          selection[_key3] = Point.transform(_point3, op);
        }
      }
      break;
    }
    case "remove_node": {
      var {
        path: _path4
      } = op;
      var _index3 = _path4[_path4.length - 1];
      var _parent3 = Node.parent(editor, _path4);
      _parent3.children.splice(_index3, 1);
      if (selection) {
        for (var [_point4, _key4] of Range.points(selection)) {
          var result = Point.transform(_point4, op);
          if (selection != null && result != null) {
            selection[_key4] = result;
          } else {
            var _prev = void 0;
            var next3 = void 0;
            for (var [n3, p] of Node.texts(editor)) {
              if (Path.compare(p, _path4) === -1) {
                _prev = [n3, p];
              } else {
                next3 = [n3, p];
                break;
              }
            }
            var preferNext = false;
            if (_prev && next3) {
              if (Path.equals(next3[1], _path4)) {
                preferNext = !Path.hasPrevious(next3[1]);
              } else {
                preferNext = Path.common(_prev[1], _path4).length < Path.common(next3[1], _path4).length;
              }
            }
            if (_prev && !preferNext) {
              _point4.path = _prev[1];
              _point4.offset = _prev[0].text.length;
            } else if (next3) {
              _point4.path = next3[1];
              _point4.offset = 0;
            } else {
              selection = null;
            }
          }
        }
      }
      break;
    }
    case "remove_text": {
      var {
        path: _path5,
        offset: _offset,
        text: _text
      } = op;
      if (_text.length === 0)
        break;
      var _node4 = Node.leaf(editor, _path5);
      var _before = _node4.text.slice(0, _offset);
      var _after = _node4.text.slice(_offset + _text.length);
      _node4.text = _before + _after;
      if (selection) {
        for (var [_point5, _key5] of Range.points(selection)) {
          selection[_key5] = Point.transform(_point5, op);
        }
      }
      break;
    }
    case "set_node": {
      var {
        path: _path6,
        properties,
        newProperties
      } = op;
      if (_path6.length === 0) {
        throw new Error("Cannot set properties on the root node!");
      }
      var _node5 = Node.get(editor, _path6);
      for (var _key6 in newProperties) {
        if (_key6 === "children" || _key6 === "text") {
          throw new Error('Cannot set the "'.concat(_key6, '" property of nodes!'));
        }
        var value = newProperties[_key6];
        if (value == null) {
          delete _node5[_key6];
        } else {
          _node5[_key6] = value;
        }
      }
      for (var _key7 in properties) {
        if (!newProperties.hasOwnProperty(_key7)) {
          delete _node5[_key7];
        }
      }
      break;
    }
    case "set_selection": {
      var {
        newProperties: _newProperties
      } = op;
      if (_newProperties == null) {
        selection = _newProperties;
      } else {
        if (selection == null) {
          if (!Range.isRange(_newProperties)) {
            throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(Scrubber.stringify(_newProperties), " when there is no current selection."));
          }
          selection = _objectSpread$e({}, _newProperties);
        }
        for (var _key8 in _newProperties) {
          var _value = _newProperties[_key8];
          if (_value == null) {
            if (_key8 === "anchor" || _key8 === "focus") {
              throw new Error('Cannot remove the "'.concat(_key8, '" selection property'));
            }
            delete selection[_key8];
          } else {
            selection[_key8] = _value;
          }
        }
      }
      break;
    }
    case "split_node": {
      var {
        path: _path7,
        position,
        properties: _properties
      } = op;
      if (_path7.length === 0) {
        throw new Error('Cannot apply a "split_node" operation at path ['.concat(_path7, "] because the root node cannot be split."));
      }
      var _node6 = Node.get(editor, _path7);
      var _parent4 = Node.parent(editor, _path7);
      var _index4 = _path7[_path7.length - 1];
      var newNode;
      if (Text.isText(_node6)) {
        var _before2 = _node6.text.slice(0, position);
        var _after2 = _node6.text.slice(position);
        _node6.text = _before2;
        newNode = _objectSpread$e(_objectSpread$e({}, _properties), {}, {
          text: _after2
        });
      } else {
        var _before3 = _node6.children.slice(0, position);
        var _after3 = _node6.children.slice(position);
        _node6.children = _before3;
        newNode = _objectSpread$e(_objectSpread$e({}, _properties), {}, {
          children: _after3
        });
      }
      _parent4.children.splice(_index4 + 1, 0, newNode);
      if (selection) {
        for (var [_point6, _key9] of Range.points(selection)) {
          selection[_key9] = Point.transform(_point6, op);
        }
      }
      break;
    }
  }
  return selection;
};
var GeneralTransforms = {
  transform(editor, op) {
    editor.children = createDraft(editor.children);
    var selection = editor.selection && createDraft(editor.selection);
    try {
      selection = applyToDraft(editor, selection, op);
    } finally {
      editor.children = finishDraft(editor.children);
      if (selection) {
        editor.selection = isDraft(selection) ? finishDraft(selection) : selection;
      } else {
        editor.selection = null;
      }
    }
  }
};
var NodeTransforms = {
  insertNodes(editor, nodes2, options) {
    editor.insertNodes(nodes2, options);
  },
  liftNodes(editor, options) {
    editor.liftNodes(options);
  },
  mergeNodes(editor, options) {
    editor.mergeNodes(options);
  },
  moveNodes(editor, options) {
    editor.moveNodes(options);
  },
  removeNodes(editor, options) {
    editor.removeNodes(options);
  },
  setNodes(editor, props, options) {
    editor.setNodes(props, options);
  },
  splitNodes(editor, options) {
    editor.splitNodes(options);
  },
  unsetNodes(editor, props, options) {
    editor.unsetNodes(props, options);
  },
  unwrapNodes(editor, options) {
    editor.unwrapNodes(options);
  },
  wrapNodes(editor, element, options) {
    editor.wrapNodes(element, options);
  }
};
var SelectionTransforms = {
  collapse(editor, options) {
    editor.collapse(options);
  },
  deselect(editor) {
    editor.deselect();
  },
  move(editor, options) {
    editor.move(options);
  },
  select(editor, target) {
    editor.select(target);
  },
  setPoint(editor, props, options) {
    editor.setPoint(props, options);
  },
  setSelection(editor, props) {
    editor.setSelection(props);
  }
};
var isDeepEqual = (node3, another) => {
  for (var key in node3) {
    var a = node3[key];
    var b = another[key];
    if (isPlainObject(a) && isPlainObject(b)) {
      if (!isDeepEqual(a, b))
        return false;
    } else if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length)
        return false;
      for (var i2 = 0; i2 < a.length; i2++) {
        if (a[i2] !== b[i2])
          return false;
      }
    } else if (a !== b) {
      return false;
    }
  }
  for (var _key in another) {
    if (node3[_key] === void 0 && another[_key] !== void 0) {
      return false;
    }
  }
  return true;
};
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
var _excluded$4 = ["anchor", "focus"];
function ownKeys$d(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$d(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$d(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$d(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var Range = {
  edges(range2) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      reverse = false
    } = options;
    var {
      anchor,
      focus
    } = range2;
    return Range.isBackward(range2) === reverse ? [anchor, focus] : [focus, anchor];
  },
  end(range2) {
    var [, end2] = Range.edges(range2);
    return end2;
  },
  equals(range2, another) {
    return Point.equals(range2.anchor, another.anchor) && Point.equals(range2.focus, another.focus);
  },
  includes(range2, target) {
    if (Range.isRange(target)) {
      if (Range.includes(range2, target.anchor) || Range.includes(range2, target.focus)) {
        return true;
      }
      var [rs, re] = Range.edges(range2);
      var [ts, te] = Range.edges(target);
      return Point.isBefore(rs, ts) && Point.isAfter(re, te);
    }
    var [start2, end2] = Range.edges(range2);
    var isAfterStart = false;
    var isBeforeEnd = false;
    if (Point.isPoint(target)) {
      isAfterStart = Point.compare(target, start2) >= 0;
      isBeforeEnd = Point.compare(target, end2) <= 0;
    } else {
      isAfterStart = Path.compare(target, start2.path) >= 0;
      isBeforeEnd = Path.compare(target, end2.path) <= 0;
    }
    return isAfterStart && isBeforeEnd;
  },
  intersection(range2, another) {
    var rest = _objectWithoutProperties(range2, _excluded$4);
    var [s1, e1] = Range.edges(range2);
    var [s2, e2] = Range.edges(another);
    var start2 = Point.isBefore(s1, s2) ? s2 : s1;
    var end2 = Point.isBefore(e1, e2) ? e1 : e2;
    if (Point.isBefore(end2, start2)) {
      return null;
    } else {
      return _objectSpread$d({
        anchor: start2,
        focus: end2
      }, rest);
    }
  },
  isBackward(range2) {
    var {
      anchor,
      focus
    } = range2;
    return Point.isAfter(anchor, focus);
  },
  isCollapsed(range2) {
    var {
      anchor,
      focus
    } = range2;
    return Point.equals(anchor, focus);
  },
  isExpanded(range2) {
    return !Range.isCollapsed(range2);
  },
  isForward(range2) {
    return !Range.isBackward(range2);
  },
  isRange(value) {
    return isPlainObject(value) && Point.isPoint(value.anchor) && Point.isPoint(value.focus);
  },
  *points(range2) {
    yield [range2.anchor, "anchor"];
    yield [range2.focus, "focus"];
  },
  start(range2) {
    var [start2] = Range.edges(range2);
    return start2;
  },
  transform(range2, op) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return produce(range2, (r2) => {
      if (r2 === null) {
        return null;
      }
      var {
        affinity = "inward"
      } = options;
      var affinityAnchor;
      var affinityFocus;
      if (affinity === "inward") {
        var isCollapsed = Range.isCollapsed(r2);
        if (Range.isForward(r2)) {
          affinityAnchor = "forward";
          affinityFocus = isCollapsed ? affinityAnchor : "backward";
        } else {
          affinityAnchor = "backward";
          affinityFocus = isCollapsed ? affinityAnchor : "forward";
        }
      } else if (affinity === "outward") {
        if (Range.isForward(r2)) {
          affinityAnchor = "backward";
          affinityFocus = "forward";
        } else {
          affinityAnchor = "forward";
          affinityFocus = "backward";
        }
      } else {
        affinityAnchor = affinity;
        affinityFocus = affinity;
      }
      var anchor = Point.transform(r2.anchor, op, {
        affinity: affinityAnchor
      });
      var focus = Point.transform(r2.focus, op, {
        affinity: affinityFocus
      });
      if (!anchor || !focus) {
        return null;
      }
      r2.anchor = anchor;
      r2.focus = focus;
    });
  }
};
var isElement = (value) => {
  return isPlainObject(value) && Node.isNodeList(value.children) && !Editor.isEditor(value);
};
var Element2 = {
  isAncestor(value) {
    return isPlainObject(value) && Node.isNodeList(value.children);
  },
  isElement,
  isElementList(value) {
    return Array.isArray(value) && value.every((val) => Element2.isElement(val));
  },
  isElementProps(props) {
    return props.children !== void 0;
  },
  isElementType: function isElementType(value, elementVal) {
    var elementKey = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "type";
    return isElement(value) && value[elementKey] === elementVal;
  },
  matches(element, props) {
    for (var key in props) {
      if (key === "children") {
        continue;
      }
      if (element[key] !== props[key]) {
        return false;
      }
    }
    return true;
  }
};
var _excluded$3 = ["children"];
var _excluded2$3 = ["text"];
var IS_NODE_LIST_CACHE = /* @__PURE__ */ new WeakMap();
var Node = {
  ancestor(root, path3) {
    var node3 = Node.get(root, path3);
    if (Text.isText(node3)) {
      throw new Error("Cannot get the ancestor node at path [".concat(path3, "] because it refers to a text node instead: ").concat(Scrubber.stringify(node3)));
    }
    return node3;
  },
  ancestors(root, path3) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var p of Path.ancestors(path3, options)) {
        var n3 = Node.ancestor(root, p);
        var entry = [n3, p];
        yield entry;
      }
    }();
  },
  child(root, index) {
    if (Text.isText(root)) {
      throw new Error("Cannot get the child of a text node: ".concat(Scrubber.stringify(root)));
    }
    var c = root.children[index];
    if (c == null) {
      throw new Error("Cannot get child at index `".concat(index, "` in node: ").concat(Scrubber.stringify(root)));
    }
    return c;
  },
  children(root, path3) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      var {
        reverse = false
      } = options;
      var ancestor = Node.ancestor(root, path3);
      var {
        children
      } = ancestor;
      var index = reverse ? children.length - 1 : 0;
      while (reverse ? index >= 0 : index < children.length) {
        var child = Node.child(ancestor, index);
        var childPath = path3.concat(index);
        yield [child, childPath];
        index = reverse ? index - 1 : index + 1;
      }
    }();
  },
  common(root, path3, another) {
    var p = Path.common(path3, another);
    var n3 = Node.get(root, p);
    return [n3, p];
  },
  descendant(root, path3) {
    var node3 = Node.get(root, path3);
    if (Editor.isEditor(node3)) {
      throw new Error("Cannot get the descendant node at path [".concat(path3, "] because it refers to the root editor node instead: ").concat(Scrubber.stringify(node3)));
    }
    return node3;
  },
  descendants(root) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [node3, path3] of Node.nodes(root, options)) {
        if (path3.length !== 0) {
          yield [node3, path3];
        }
      }
    }();
  },
  elements(root) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [node3, path3] of Node.nodes(root, options)) {
        if (Element2.isElement(node3)) {
          yield [node3, path3];
        }
      }
    }();
  },
  extractProps(node3) {
    if (Element2.isAncestor(node3)) {
      var properties = _objectWithoutProperties(node3, _excluded$3);
      return properties;
    } else {
      var properties = _objectWithoutProperties(node3, _excluded2$3);
      return properties;
    }
  },
  first(root, path3) {
    var p = path3.slice();
    var n3 = Node.get(root, p);
    while (n3) {
      if (Text.isText(n3) || n3.children.length === 0) {
        break;
      } else {
        n3 = n3.children[0];
        p.push(0);
      }
    }
    return [n3, p];
  },
  fragment(root, range2) {
    if (Text.isText(root)) {
      throw new Error("Cannot get a fragment starting from a root text node: ".concat(Scrubber.stringify(root)));
    }
    var newRoot = produce({
      children: root.children
    }, (r2) => {
      var [start2, end2] = Range.edges(range2);
      var nodeEntries = Node.nodes(r2, {
        reverse: true,
        pass: (_ref) => {
          var [, path4] = _ref;
          return !Range.includes(range2, path4);
        }
      });
      for (var [, path3] of nodeEntries) {
        if (!Range.includes(range2, path3)) {
          var parent3 = Node.parent(r2, path3);
          var index = path3[path3.length - 1];
          parent3.children.splice(index, 1);
        }
        if (Path.equals(path3, end2.path)) {
          var leaf3 = Node.leaf(r2, path3);
          leaf3.text = leaf3.text.slice(0, end2.offset);
        }
        if (Path.equals(path3, start2.path)) {
          var _leaf = Node.leaf(r2, path3);
          _leaf.text = _leaf.text.slice(start2.offset);
        }
      }
      if (Editor.isEditor(r2)) {
        r2.selection = null;
      }
    });
    return newRoot.children;
  },
  get(root, path3) {
    var node3 = root;
    for (var i2 = 0; i2 < path3.length; i2++) {
      var p = path3[i2];
      if (Text.isText(node3) || !node3.children[p]) {
        throw new Error("Cannot find a descendant at path [".concat(path3, "] in node: ").concat(Scrubber.stringify(root)));
      }
      node3 = node3.children[p];
    }
    return node3;
  },
  has(root, path3) {
    var node3 = root;
    for (var i2 = 0; i2 < path3.length; i2++) {
      var p = path3[i2];
      if (Text.isText(node3) || !node3.children[p]) {
        return false;
      }
      node3 = node3.children[p];
    }
    return true;
  },
  isNode(value) {
    return Text.isText(value) || Element2.isElement(value) || Editor.isEditor(value);
  },
  isNodeList(value) {
    if (!Array.isArray(value)) {
      return false;
    }
    var cachedResult = IS_NODE_LIST_CACHE.get(value);
    if (cachedResult !== void 0) {
      return cachedResult;
    }
    var isNodeList = value.every((val) => Node.isNode(val));
    IS_NODE_LIST_CACHE.set(value, isNodeList);
    return isNodeList;
  },
  last(root, path3) {
    var p = path3.slice();
    var n3 = Node.get(root, p);
    while (n3) {
      if (Text.isText(n3) || n3.children.length === 0) {
        break;
      } else {
        var i2 = n3.children.length - 1;
        n3 = n3.children[i2];
        p.push(i2);
      }
    }
    return [n3, p];
  },
  leaf(root, path3) {
    var node3 = Node.get(root, path3);
    if (!Text.isText(node3)) {
      throw new Error("Cannot get the leaf node at path [".concat(path3, "] because it refers to a non-leaf node: ").concat(Scrubber.stringify(node3)));
    }
    return node3;
  },
  levels(root, path3) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var p of Path.levels(path3, options)) {
        var n3 = Node.get(root, p);
        yield [n3, p];
      }
    }();
  },
  matches(node3, props) {
    return Element2.isElement(node3) && Element2.isElementProps(props) && Element2.matches(node3, props) || Text.isText(node3) && Text.isTextProps(props) && Text.matches(node3, props);
  },
  nodes(root) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      var {
        pass,
        reverse = false
      } = options;
      var {
        from = [],
        to
      } = options;
      var visited = /* @__PURE__ */ new Set();
      var p = [];
      var n3 = root;
      while (true) {
        if (to && (reverse ? Path.isBefore(p, to) : Path.isAfter(p, to))) {
          break;
        }
        if (!visited.has(n3)) {
          yield [n3, p];
        }
        if (!visited.has(n3) && !Text.isText(n3) && n3.children.length !== 0 && (pass == null || pass([n3, p]) === false)) {
          visited.add(n3);
          var nextIndex = reverse ? n3.children.length - 1 : 0;
          if (Path.isAncestor(p, from)) {
            nextIndex = from[p.length];
          }
          p = p.concat(nextIndex);
          n3 = Node.get(root, p);
          continue;
        }
        if (p.length === 0) {
          break;
        }
        if (!reverse) {
          var newPath = Path.next(p);
          if (Node.has(root, newPath)) {
            p = newPath;
            n3 = Node.get(root, p);
            continue;
          }
        }
        if (reverse && p[p.length - 1] !== 0) {
          var _newPath = Path.previous(p);
          p = _newPath;
          n3 = Node.get(root, p);
          continue;
        }
        p = Path.parent(p);
        n3 = Node.get(root, p);
        visited.add(n3);
      }
    }();
  },
  parent(root, path3) {
    var parentPath = Path.parent(path3);
    var p = Node.get(root, parentPath);
    if (Text.isText(p)) {
      throw new Error("Cannot get the parent of path [".concat(path3, "] because it does not exist in the root."));
    }
    return p;
  },
  string(node3) {
    if (Text.isText(node3)) {
      return node3.text;
    } else {
      return node3.children.map(Node.string).join("");
    }
  },
  texts(root) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [node3, path3] of Node.nodes(root, options)) {
        if (Text.isText(node3)) {
          yield [node3, path3];
        }
      }
    }();
  }
};
function ownKeys$c(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$c(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$c(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$c(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var Operation = {
  isNodeOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith("_node");
  },
  isOperation(value) {
    if (!isPlainObject(value)) {
      return false;
    }
    switch (value.type) {
      case "insert_node":
        return Path.isPath(value.path) && Node.isNode(value.node);
      case "insert_text":
        return typeof value.offset === "number" && typeof value.text === "string" && Path.isPath(value.path);
      case "merge_node":
        return typeof value.position === "number" && Path.isPath(value.path) && isPlainObject(value.properties);
      case "move_node":
        return Path.isPath(value.path) && Path.isPath(value.newPath);
      case "remove_node":
        return Path.isPath(value.path) && Node.isNode(value.node);
      case "remove_text":
        return typeof value.offset === "number" && typeof value.text === "string" && Path.isPath(value.path);
      case "set_node":
        return Path.isPath(value.path) && isPlainObject(value.properties) && isPlainObject(value.newProperties);
      case "set_selection":
        return value.properties === null && Range.isRange(value.newProperties) || value.newProperties === null && Range.isRange(value.properties) || isPlainObject(value.properties) && isPlainObject(value.newProperties);
      case "split_node":
        return Path.isPath(value.path) && typeof value.position === "number" && isPlainObject(value.properties);
      default:
        return false;
    }
  },
  isOperationList(value) {
    return Array.isArray(value) && value.every((val) => Operation.isOperation(val));
  },
  isSelectionOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith("_selection");
  },
  isTextOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith("_text");
  },
  inverse(op) {
    switch (op.type) {
      case "insert_node": {
        return _objectSpread$c(_objectSpread$c({}, op), {}, {
          type: "remove_node"
        });
      }
      case "insert_text": {
        return _objectSpread$c(_objectSpread$c({}, op), {}, {
          type: "remove_text"
        });
      }
      case "merge_node": {
        return _objectSpread$c(_objectSpread$c({}, op), {}, {
          type: "split_node",
          path: Path.previous(op.path)
        });
      }
      case "move_node": {
        var {
          newPath,
          path: path3
        } = op;
        if (Path.equals(newPath, path3)) {
          return op;
        }
        if (Path.isSibling(path3, newPath)) {
          return _objectSpread$c(_objectSpread$c({}, op), {}, {
            path: newPath,
            newPath: path3
          });
        }
        var inversePath = Path.transform(path3, op);
        var inverseNewPath = Path.transform(Path.next(path3), op);
        return _objectSpread$c(_objectSpread$c({}, op), {}, {
          path: inversePath,
          newPath: inverseNewPath
        });
      }
      case "remove_node": {
        return _objectSpread$c(_objectSpread$c({}, op), {}, {
          type: "insert_node"
        });
      }
      case "remove_text": {
        return _objectSpread$c(_objectSpread$c({}, op), {}, {
          type: "insert_text"
        });
      }
      case "set_node": {
        var {
          properties,
          newProperties
        } = op;
        return _objectSpread$c(_objectSpread$c({}, op), {}, {
          properties: newProperties,
          newProperties: properties
        });
      }
      case "set_selection": {
        var {
          properties: _properties,
          newProperties: _newProperties
        } = op;
        if (_properties == null) {
          return _objectSpread$c(_objectSpread$c({}, op), {}, {
            properties: _newProperties,
            newProperties: null
          });
        } else if (_newProperties == null) {
          return _objectSpread$c(_objectSpread$c({}, op), {}, {
            properties: null,
            newProperties: _properties
          });
        } else {
          return _objectSpread$c(_objectSpread$c({}, op), {}, {
            properties: _newProperties,
            newProperties: _properties
          });
        }
      }
      case "split_node": {
        return _objectSpread$c(_objectSpread$c({}, op), {}, {
          type: "merge_node",
          path: Path.next(op.path)
        });
      }
    }
  }
};
var IS_EDITOR_CACHE = /* @__PURE__ */ new WeakMap();
var isEditor = (value) => {
  var cachedIsEditor = IS_EDITOR_CACHE.get(value);
  if (cachedIsEditor !== void 0) {
    return cachedIsEditor;
  }
  if (!isPlainObject(value)) {
    return false;
  }
  var isEditor2 = typeof value.addMark === "function" && typeof value.apply === "function" && typeof value.deleteFragment === "function" && typeof value.insertBreak === "function" && typeof value.insertSoftBreak === "function" && typeof value.insertFragment === "function" && typeof value.insertNode === "function" && typeof value.insertText === "function" && typeof value.isElementReadOnly === "function" && typeof value.isInline === "function" && typeof value.isSelectable === "function" && typeof value.isVoid === "function" && typeof value.normalizeNode === "function" && typeof value.onChange === "function" && typeof value.removeMark === "function" && typeof value.getDirtyPaths === "function" && (value.marks === null || isPlainObject(value.marks)) && (value.selection === null || Range.isRange(value.selection)) && Node.isNodeList(value.children) && Operation.isOperationList(value.operations);
  IS_EDITOR_CACHE.set(value, isEditor2);
  return isEditor2;
};
var Editor = {
  above(editor, options) {
    return editor.above(options);
  },
  addMark(editor, key, value) {
    editor.addMark(key, value);
  },
  after(editor, at, options) {
    return editor.after(at, options);
  },
  before(editor, at, options) {
    return editor.before(at, options);
  },
  deleteBackward(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      unit = "character"
    } = options;
    editor.deleteBackward(unit);
  },
  deleteForward(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      unit = "character"
    } = options;
    editor.deleteForward(unit);
  },
  deleteFragment(editor, options) {
    editor.deleteFragment(options);
  },
  edges(editor, at) {
    return editor.edges(at);
  },
  elementReadOnly(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return editor.elementReadOnly(options);
  },
  end(editor, at) {
    return editor.end(at);
  },
  first(editor, at) {
    return editor.first(at);
  },
  fragment(editor, at) {
    return editor.fragment(at);
  },
  hasBlocks(editor, element) {
    return editor.hasBlocks(element);
  },
  hasInlines(editor, element) {
    return editor.hasInlines(element);
  },
  hasPath(editor, path3) {
    return editor.hasPath(path3);
  },
  hasTexts(editor, element) {
    return editor.hasTexts(element);
  },
  insertBreak(editor) {
    editor.insertBreak();
  },
  insertFragment(editor, fragment2, options) {
    editor.insertFragment(fragment2, options);
  },
  insertNode(editor, node3) {
    editor.insertNode(node3);
  },
  insertSoftBreak(editor) {
    editor.insertSoftBreak();
  },
  insertText(editor, text) {
    editor.insertText(text);
  },
  isBlock(editor, value) {
    return editor.isBlock(value);
  },
  isEdge(editor, point3, at) {
    return editor.isEdge(point3, at);
  },
  isEditor(value) {
    return isEditor(value);
  },
  isElementReadOnly(editor, element) {
    return editor.isElementReadOnly(element);
  },
  isEmpty(editor, element) {
    return editor.isEmpty(element);
  },
  isEnd(editor, point3, at) {
    return editor.isEnd(point3, at);
  },
  isInline(editor, value) {
    return editor.isInline(value);
  },
  isNormalizing(editor) {
    return editor.isNormalizing();
  },
  isSelectable(editor, value) {
    return editor.isSelectable(value);
  },
  isStart(editor, point3, at) {
    return editor.isStart(point3, at);
  },
  isVoid(editor, value) {
    return editor.isVoid(value);
  },
  last(editor, at) {
    return editor.last(at);
  },
  leaf(editor, at, options) {
    return editor.leaf(at, options);
  },
  levels(editor, options) {
    return editor.levels(options);
  },
  marks(editor) {
    return editor.getMarks();
  },
  next(editor, options) {
    return editor.next(options);
  },
  node(editor, at, options) {
    return editor.node(at, options);
  },
  nodes(editor, options) {
    return editor.nodes(options);
  },
  normalize(editor, options) {
    editor.normalize(options);
  },
  parent(editor, at, options) {
    return editor.parent(at, options);
  },
  path(editor, at, options) {
    return editor.path(at, options);
  },
  pathRef(editor, path3, options) {
    return editor.pathRef(path3, options);
  },
  pathRefs(editor) {
    return editor.pathRefs();
  },
  point(editor, at, options) {
    return editor.point(at, options);
  },
  pointRef(editor, point3, options) {
    return editor.pointRef(point3, options);
  },
  pointRefs(editor) {
    return editor.pointRefs();
  },
  positions(editor, options) {
    return editor.positions(options);
  },
  previous(editor, options) {
    return editor.previous(options);
  },
  range(editor, at, to) {
    return editor.range(at, to);
  },
  rangeRef(editor, range2, options) {
    return editor.rangeRef(range2, options);
  },
  rangeRefs(editor) {
    return editor.rangeRefs();
  },
  removeMark(editor, key) {
    editor.removeMark(key);
  },
  setNormalizing(editor, isNormalizing2) {
    editor.setNormalizing(isNormalizing2);
  },
  start(editor, at) {
    return editor.start(at);
  },
  string(editor, at, options) {
    return editor.string(at, options);
  },
  unhangRange(editor, range2, options) {
    return editor.unhangRange(range2, options);
  },
  void(editor, options) {
    return editor.void(options);
  },
  withoutNormalizing(editor, fn) {
    editor.withoutNormalizing(fn);
  }
};
var Span = {
  isSpan(value) {
    return Array.isArray(value) && value.length === 2 && value.every(Path.isPath);
  }
};
function ownKeys$b(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$b(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$b(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$b(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var Point = {
  compare(point3, another) {
    var result = Path.compare(point3.path, another.path);
    if (result === 0) {
      if (point3.offset < another.offset)
        return -1;
      if (point3.offset > another.offset)
        return 1;
      return 0;
    }
    return result;
  },
  isAfter(point3, another) {
    return Point.compare(point3, another) === 1;
  },
  isBefore(point3, another) {
    return Point.compare(point3, another) === -1;
  },
  equals(point3, another) {
    return point3.offset === another.offset && Path.equals(point3.path, another.path);
  },
  isPoint(value) {
    return isPlainObject(value) && typeof value.offset === "number" && Path.isPath(value.path);
  },
  transform(point3, op) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return produce(point3, (p) => {
      if (p === null) {
        return null;
      }
      var {
        affinity = "forward"
      } = options;
      var {
        path: path3,
        offset
      } = p;
      switch (op.type) {
        case "insert_node":
        case "move_node": {
          p.path = Path.transform(path3, op, options);
          break;
        }
        case "insert_text": {
          if (Path.equals(op.path, path3) && (op.offset < offset || op.offset === offset && affinity === "forward")) {
            p.offset += op.text.length;
          }
          break;
        }
        case "merge_node": {
          if (Path.equals(op.path, path3)) {
            p.offset += op.position;
          }
          p.path = Path.transform(path3, op, options);
          break;
        }
        case "remove_text": {
          if (Path.equals(op.path, path3) && op.offset <= offset) {
            p.offset -= Math.min(offset - op.offset, op.text.length);
          }
          break;
        }
        case "remove_node": {
          if (Path.equals(op.path, path3) || Path.isAncestor(op.path, path3)) {
            return null;
          }
          p.path = Path.transform(path3, op, options);
          break;
        }
        case "split_node": {
          if (Path.equals(op.path, path3)) {
            if (op.position === offset && affinity == null) {
              return null;
            } else if (op.position < offset || op.position === offset && affinity === "forward") {
              p.offset -= op.position;
              p.path = Path.transform(path3, op, _objectSpread$b(_objectSpread$b({}, options), {}, {
                affinity: "forward"
              }));
            }
          } else {
            p.path = Path.transform(path3, op, options);
          }
          break;
        }
      }
    });
  }
};
var _scrubber = void 0;
var Scrubber = {
  setScrubber(scrubber) {
    _scrubber = scrubber;
  },
  stringify(value) {
    return JSON.stringify(value, _scrubber);
  }
};
var _excluded$2 = ["text"];
var _excluded2$2 = ["anchor", "focus"];
function ownKeys$a(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$a(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$a(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$a(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var Text = {
  equals(text, another) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      loose = false
    } = options;
    function omitText(obj) {
      var rest = _objectWithoutProperties(obj, _excluded$2);
      return rest;
    }
    return isDeepEqual(loose ? omitText(text) : text, loose ? omitText(another) : another);
  },
  isText(value) {
    return isPlainObject(value) && typeof value.text === "string";
  },
  isTextList(value) {
    return Array.isArray(value) && value.every((val) => Text.isText(val));
  },
  isTextProps(props) {
    return props.text !== void 0;
  },
  matches(text, props) {
    for (var key in props) {
      if (key === "text") {
        continue;
      }
      if (!text.hasOwnProperty(key) || text[key] !== props[key]) {
        return false;
      }
    }
    return true;
  },
  decorations(node3, decorations) {
    var leaves = [_objectSpread$a({}, node3)];
    for (var dec of decorations) {
      var rest = _objectWithoutProperties(dec, _excluded2$2);
      var [start2, end2] = Range.edges(dec);
      var next3 = [];
      var leafEnd = 0;
      var decorationStart = start2.offset;
      var decorationEnd = end2.offset;
      for (var leaf3 of leaves) {
        var {
          length
        } = leaf3.text;
        var leafStart = leafEnd;
        leafEnd += length;
        if (decorationStart <= leafStart && leafEnd <= decorationEnd) {
          Object.assign(leaf3, rest);
          next3.push(leaf3);
          continue;
        }
        if (decorationStart !== decorationEnd && (decorationStart === leafEnd || decorationEnd === leafStart) || decorationStart > leafEnd || decorationEnd < leafStart || decorationEnd === leafStart && leafStart !== 0) {
          next3.push(leaf3);
          continue;
        }
        var middle = leaf3;
        var before3 = void 0;
        var after3 = void 0;
        if (decorationEnd < leafEnd) {
          var off = decorationEnd - leafStart;
          after3 = _objectSpread$a(_objectSpread$a({}, middle), {}, {
            text: middle.text.slice(off)
          });
          middle = _objectSpread$a(_objectSpread$a({}, middle), {}, {
            text: middle.text.slice(0, off)
          });
        }
        if (decorationStart > leafStart) {
          var _off = decorationStart - leafStart;
          before3 = _objectSpread$a(_objectSpread$a({}, middle), {}, {
            text: middle.text.slice(0, _off)
          });
          middle = _objectSpread$a(_objectSpread$a({}, middle), {}, {
            text: middle.text.slice(_off)
          });
        }
        Object.assign(middle, rest);
        if (before3) {
          next3.push(before3);
        }
        next3.push(middle);
        if (after3) {
          next3.push(after3);
        }
      }
      leaves = next3;
    }
    return leaves;
  }
};
var getDefaultInsertLocation = (editor) => {
  if (editor.selection) {
    return editor.selection;
  } else if (editor.children.length > 0) {
    return Editor.end(editor, []);
  } else {
    return [0];
  }
};
var matchPath = (editor, path3) => {
  var [node3] = Editor.node(editor, path3);
  return (n3) => n3 === node3;
};
var getCharacterDistance = function getCharacterDistance2(str) {
  var isRTL = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var isLTR = !isRTL;
  var codepoints = isRTL ? codepointsIteratorRTL(str) : str;
  var left = CodepointType.None;
  var right = CodepointType.None;
  var distance = 0;
  var gb11 = null;
  var gb12Or13 = null;
  for (var char of codepoints) {
    var code = char.codePointAt(0);
    if (!code)
      break;
    var type = getCodepointType(char, code);
    [left, right] = isLTR ? [right, type] : [type, left];
    if (intersects(left, CodepointType.ZWJ) && intersects(right, CodepointType.ExtPict)) {
      if (isLTR) {
        gb11 = endsWithEmojiZWJ(str.substring(0, distance));
      } else {
        gb11 = endsWithEmojiZWJ(str.substring(0, str.length - distance));
      }
      if (!gb11)
        break;
    }
    if (intersects(left, CodepointType.RI) && intersects(right, CodepointType.RI)) {
      if (gb12Or13 !== null) {
        gb12Or13 = !gb12Or13;
      } else {
        if (isLTR) {
          gb12Or13 = true;
        } else {
          gb12Or13 = endsWithOddNumberOfRIs(str.substring(0, str.length - distance));
        }
      }
      if (!gb12Or13)
        break;
    }
    if (left !== CodepointType.None && right !== CodepointType.None && isBoundaryPair(left, right)) {
      break;
    }
    distance += char.length;
  }
  return distance || 1;
};
var SPACE = /\s/;
var PUNCTUATION = /[\u002B\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
var CHAMELEON = /['\u2018\u2019]/;
var getWordDistance = function getWordDistance2(text) {
  var isRTL = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var dist = 0;
  var started = false;
  while (text.length > 0) {
    var charDist = getCharacterDistance(text, isRTL);
    var [char, remaining] = splitByCharacterDistance(text, charDist, isRTL);
    if (isWordCharacter(char, remaining, isRTL)) {
      started = true;
      dist += charDist;
    } else if (!started) {
      dist += charDist;
    } else {
      break;
    }
    text = remaining;
  }
  return dist;
};
var splitByCharacterDistance = (str, dist, isRTL) => {
  if (isRTL) {
    var at = str.length - dist;
    return [str.slice(at, str.length), str.slice(0, at)];
  }
  return [str.slice(0, dist), str.slice(dist)];
};
var isWordCharacter = function isWordCharacter2(char, remaining) {
  var isRTL = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  if (SPACE.test(char)) {
    return false;
  }
  if (CHAMELEON.test(char)) {
    var charDist = getCharacterDistance(remaining, isRTL);
    var [nextChar, nextRemaining] = splitByCharacterDistance(remaining, charDist, isRTL);
    if (isWordCharacter2(nextChar, nextRemaining, isRTL)) {
      return true;
    }
  }
  if (PUNCTUATION.test(char)) {
    return false;
  }
  return true;
};
var codepointsIteratorRTL = function* codepointsIteratorRTL2(str) {
  var end2 = str.length - 1;
  for (var i2 = 0; i2 < str.length; i2++) {
    var char1 = str.charAt(end2 - i2);
    if (isLowSurrogate(char1.charCodeAt(0))) {
      var char2 = str.charAt(end2 - i2 - 1);
      if (isHighSurrogate(char2.charCodeAt(0))) {
        yield char2 + char1;
        i2++;
        continue;
      }
    }
    yield char1;
  }
};
var isHighSurrogate = (charCode) => {
  return charCode >= 55296 && charCode <= 56319;
};
var isLowSurrogate = (charCode) => {
  return charCode >= 56320 && charCode <= 57343;
};
var CodepointType;
(function(CodepointType2) {
  CodepointType2[CodepointType2["None"] = 0] = "None";
  CodepointType2[CodepointType2["Extend"] = 1] = "Extend";
  CodepointType2[CodepointType2["ZWJ"] = 2] = "ZWJ";
  CodepointType2[CodepointType2["RI"] = 4] = "RI";
  CodepointType2[CodepointType2["Prepend"] = 8] = "Prepend";
  CodepointType2[CodepointType2["SpacingMark"] = 16] = "SpacingMark";
  CodepointType2[CodepointType2["L"] = 32] = "L";
  CodepointType2[CodepointType2["V"] = 64] = "V";
  CodepointType2[CodepointType2["T"] = 128] = "T";
  CodepointType2[CodepointType2["LV"] = 256] = "LV";
  CodepointType2[CodepointType2["LVT"] = 512] = "LVT";
  CodepointType2[CodepointType2["ExtPict"] = 1024] = "ExtPict";
  CodepointType2[CodepointType2["Any"] = 2048] = "Any";
})(CodepointType || (CodepointType = {}));
var reExtend = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/;
var rePrepend = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/;
var reSpacingMark = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/;
var reL = /^[\u1100-\u115F\uA960-\uA97C]$/;
var reV = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/;
var reT = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/;
var reLV = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/;
var reLVT = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/;
var reExtPict = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/;
var getCodepointType = (char, code) => {
  var type = CodepointType.Any;
  if (char.search(reExtend) !== -1) {
    type |= CodepointType.Extend;
  }
  if (code === 8205) {
    type |= CodepointType.ZWJ;
  }
  if (code >= 127462 && code <= 127487) {
    type |= CodepointType.RI;
  }
  if (char.search(rePrepend) !== -1) {
    type |= CodepointType.Prepend;
  }
  if (char.search(reSpacingMark) !== -1) {
    type |= CodepointType.SpacingMark;
  }
  if (char.search(reL) !== -1) {
    type |= CodepointType.L;
  }
  if (char.search(reV) !== -1) {
    type |= CodepointType.V;
  }
  if (char.search(reT) !== -1) {
    type |= CodepointType.T;
  }
  if (char.search(reLV) !== -1) {
    type |= CodepointType.LV;
  }
  if (char.search(reLVT) !== -1) {
    type |= CodepointType.LVT;
  }
  if (char.search(reExtPict) !== -1) {
    type |= CodepointType.ExtPict;
  }
  return type;
};
function intersects(x, y) {
  return (x & y) !== 0;
}
var NonBoundaryPairs = [
  // GB6
  [CodepointType.L, CodepointType.L | CodepointType.V | CodepointType.LV | CodepointType.LVT],
  // GB7
  [CodepointType.LV | CodepointType.V, CodepointType.V | CodepointType.T],
  // GB8
  [CodepointType.LVT | CodepointType.T, CodepointType.T],
  // GB9
  [CodepointType.Any, CodepointType.Extend | CodepointType.ZWJ],
  // GB9a
  [CodepointType.Any, CodepointType.SpacingMark],
  // GB9b
  [CodepointType.Prepend, CodepointType.Any],
  // GB11
  [CodepointType.ZWJ, CodepointType.ExtPict],
  // GB12 and GB13
  [CodepointType.RI, CodepointType.RI]
];
function isBoundaryPair(left, right) {
  return NonBoundaryPairs.findIndex((r2) => intersects(left, r2[0]) && intersects(right, r2[1])) === -1;
}
var endingEmojiZWJ = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/;
var endsWithEmojiZWJ = (str) => {
  return str.search(endingEmojiZWJ) !== -1;
};
var endingRIs = /(?:\uD83C[\uDDE6-\uDDFF])+$/g;
var endsWithOddNumberOfRIs = (str) => {
  var match = str.match(endingRIs);
  if (match === null) {
    return false;
  } else {
    var numRIs = match[0].length / 2;
    return numRIs % 2 === 1;
  }
};
var TextTransforms = {
  delete(editor, options) {
    editor.delete(options);
  },
  insertFragment(editor, fragment2, options) {
    editor.insertFragment(fragment2, options);
  },
  insertText(editor, text) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        voids = false
      } = options;
      var {
        at = getDefaultInsertLocation(editor)
      } = options;
      if (Path.isPath(at)) {
        at = Editor.range(editor, at);
      }
      if (Range.isRange(at)) {
        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var end2 = Range.end(at);
          if (!voids && Editor.void(editor, {
            at: end2
          })) {
            return;
          }
          var start2 = Range.start(at);
          var startRef = Editor.pointRef(editor, start2);
          var endRef = Editor.pointRef(editor, end2);
          Transforms.delete(editor, {
            at,
            voids
          });
          var startPoint = startRef.unref();
          var endPoint = endRef.unref();
          at = startPoint || endPoint;
          Transforms.setSelection(editor, {
            anchor: at,
            focus: at
          });
        }
      }
      if (!voids && Editor.void(editor, {
        at
      }) || Editor.elementReadOnly(editor, {
        at
      })) {
        return;
      }
      var {
        path: path3,
        offset
      } = at;
      if (text.length > 0)
        editor.apply({
          type: "insert_text",
          path: path3,
          offset,
          text
        });
    });
  }
};
function ownKeys$9(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$9(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$9(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$9(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var Transforms = _objectSpread$9(_objectSpread$9(_objectSpread$9(_objectSpread$9({}, GeneralTransforms), NodeTransforms), SelectionTransforms), TextTransforms);
var apply = (editor, op) => {
  for (var ref of Editor.pathRefs(editor)) {
    PathRef.transform(ref, op);
  }
  for (var _ref of Editor.pointRefs(editor)) {
    PointRef.transform(_ref, op);
  }
  for (var _ref2 of Editor.rangeRefs(editor)) {
    RangeRef.transform(_ref2, op);
  }
  var oldDirtyPaths = DIRTY_PATHS.get(editor) || [];
  var oldDirtyPathKeys = DIRTY_PATH_KEYS.get(editor) || /* @__PURE__ */ new Set();
  var dirtyPaths;
  var dirtyPathKeys;
  var add = (path4) => {
    if (path4) {
      var key = path4.join(",");
      if (!dirtyPathKeys.has(key)) {
        dirtyPathKeys.add(key);
        dirtyPaths.push(path4);
      }
    }
  };
  if (Path.operationCanTransformPath(op)) {
    dirtyPaths = [];
    dirtyPathKeys = /* @__PURE__ */ new Set();
    for (var path3 of oldDirtyPaths) {
      var newPath = Path.transform(path3, op);
      add(newPath);
    }
  } else {
    dirtyPaths = oldDirtyPaths;
    dirtyPathKeys = oldDirtyPathKeys;
  }
  var newDirtyPaths = editor.getDirtyPaths(op);
  for (var _path of newDirtyPaths) {
    add(_path);
  }
  DIRTY_PATHS.set(editor, dirtyPaths);
  DIRTY_PATH_KEYS.set(editor, dirtyPathKeys);
  Transforms.transform(editor, op);
  editor.operations.push(op);
  Editor.normalize(editor, {
    operation: op
  });
  if (op.type === "set_selection") {
    editor.marks = null;
  }
  if (!FLUSHING.get(editor)) {
    FLUSHING.set(editor, true);
    Promise.resolve().then(() => {
      FLUSHING.set(editor, false);
      editor.onChange({
        operation: op
      });
      editor.operations = [];
    });
  }
};
var getDirtyPaths = (editor, op) => {
  switch (op.type) {
    case "insert_text":
    case "remove_text":
    case "set_node": {
      var {
        path: path3
      } = op;
      return Path.levels(path3);
    }
    case "insert_node": {
      var {
        node: node3,
        path: _path
      } = op;
      var levels2 = Path.levels(_path);
      var descendants = Text.isText(node3) ? [] : Array.from(Node.nodes(node3), (_ref) => {
        var [, p2] = _ref;
        return _path.concat(p2);
      });
      return [...levels2, ...descendants];
    }
    case "merge_node": {
      var {
        path: _path2
      } = op;
      var ancestors = Path.ancestors(_path2);
      var previousPath = Path.previous(_path2);
      return [...ancestors, previousPath];
    }
    case "move_node": {
      var {
        path: _path3,
        newPath
      } = op;
      if (Path.equals(_path3, newPath)) {
        return [];
      }
      var oldAncestors = [];
      var newAncestors = [];
      for (var ancestor of Path.ancestors(_path3)) {
        var p = Path.transform(ancestor, op);
        oldAncestors.push(p);
      }
      for (var _ancestor of Path.ancestors(newPath)) {
        var _p = Path.transform(_ancestor, op);
        newAncestors.push(_p);
      }
      var newParent = newAncestors[newAncestors.length - 1];
      var newIndex = newPath[newPath.length - 1];
      var resultPath = newParent.concat(newIndex);
      return [...oldAncestors, ...newAncestors, resultPath];
    }
    case "remove_node": {
      var {
        path: _path4
      } = op;
      var _ancestors = Path.ancestors(_path4);
      return [..._ancestors];
    }
    case "split_node": {
      var {
        path: _path5
      } = op;
      var _levels = Path.levels(_path5);
      var nextPath = Path.next(_path5);
      return [..._levels, nextPath];
    }
    default: {
      return [];
    }
  }
};
var getFragment = (editor) => {
  var {
    selection
  } = editor;
  if (selection) {
    return Node.fragment(editor, selection);
  }
  return [];
};
var normalizeNode = (editor, entry) => {
  var [node3, path3] = entry;
  if (Text.isText(node3)) {
    return;
  }
  if (Element2.isElement(node3) && node3.children.length === 0) {
    var child = {
      text: ""
    };
    Transforms.insertNodes(editor, child, {
      at: path3.concat(0),
      voids: true
    });
    return;
  }
  var shouldHaveInlines = Editor.isEditor(node3) ? false : Element2.isElement(node3) && (editor.isInline(node3) || node3.children.length === 0 || Text.isText(node3.children[0]) || editor.isInline(node3.children[0]));
  var n3 = 0;
  for (var i2 = 0; i2 < node3.children.length; i2++, n3++) {
    var currentNode = Node.get(editor, path3);
    if (Text.isText(currentNode))
      continue;
    var _child = currentNode.children[n3];
    var prev = currentNode.children[n3 - 1];
    var isLast = i2 === node3.children.length - 1;
    var isInlineOrText = Text.isText(_child) || Element2.isElement(_child) && editor.isInline(_child);
    if (isInlineOrText !== shouldHaveInlines) {
      Transforms.removeNodes(editor, {
        at: path3.concat(n3),
        voids: true
      });
      n3--;
    } else if (Element2.isElement(_child)) {
      if (editor.isInline(_child)) {
        if (prev == null || !Text.isText(prev)) {
          var newChild = {
            text: ""
          };
          Transforms.insertNodes(editor, newChild, {
            at: path3.concat(n3),
            voids: true
          });
          n3++;
        } else if (isLast) {
          var _newChild = {
            text: ""
          };
          Transforms.insertNodes(editor, _newChild, {
            at: path3.concat(n3 + 1),
            voids: true
          });
          n3++;
        }
      }
    } else {
      if (prev != null && Text.isText(prev)) {
        if (Text.equals(_child, prev, {
          loose: true
        })) {
          Transforms.mergeNodes(editor, {
            at: path3.concat(n3),
            voids: true
          });
          n3--;
        } else if (prev.text === "") {
          Transforms.removeNodes(editor, {
            at: path3.concat(n3 - 1),
            voids: true
          });
          n3--;
        } else if (_child.text === "") {
          Transforms.removeNodes(editor, {
            at: path3.concat(n3),
            voids: true
          });
          n3--;
        }
      }
    }
  }
};
var shouldNormalize = (editor, _ref) => {
  var {
    iteration,
    initialDirtyPathsLength
  } = _ref;
  var maxIterations = initialDirtyPathsLength * 42;
  if (iteration > maxIterations) {
    throw new Error("Could not completely normalize the editor after ".concat(maxIterations, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state."));
  }
  return true;
};
var above = function above2(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var {
    voids = false,
    mode = "lowest",
    at = editor.selection,
    match
  } = options;
  if (!at) {
    return;
  }
  var path3 = Editor.path(editor, at);
  var reverse = mode === "lowest";
  for (var [n3, p] of Editor.levels(editor, {
    at: path3,
    voids,
    match,
    reverse
  })) {
    if (Text.isText(n3))
      continue;
    if (Range.isRange(at)) {
      if (Path.isAncestor(p, at.anchor.path) && Path.isAncestor(p, at.focus.path)) {
        return [n3, p];
      }
    } else {
      if (!Path.equals(path3, p)) {
        return [n3, p];
      }
    }
  }
};
function ownKeys$8(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$8(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$8(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$8(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var addMark = (editor, key, value) => {
  var {
    selection
  } = editor;
  if (selection) {
    var match = (node3, path3) => {
      if (!Text.isText(node3)) {
        return false;
      }
      var [parentNode2, parentPath] = Editor.parent(editor, path3);
      return !editor.isVoid(parentNode2) || editor.markableVoid(parentNode2);
    };
    var expandedSelection = Range.isExpanded(selection);
    var markAcceptingVoidSelected = false;
    if (!expandedSelection) {
      var [selectedNode, selectedPath] = Editor.node(editor, selection);
      if (selectedNode && match(selectedNode, selectedPath)) {
        var [parentNode] = Editor.parent(editor, selectedPath);
        markAcceptingVoidSelected = parentNode && editor.markableVoid(parentNode);
      }
    }
    if (expandedSelection || markAcceptingVoidSelected) {
      Transforms.setNodes(editor, {
        [key]: value
      }, {
        match,
        split: true,
        voids: true
      });
    } else {
      var marks3 = _objectSpread$8(_objectSpread$8({}, Editor.marks(editor) || {}), {}, {
        [key]: value
      });
      editor.marks = marks3;
      if (!FLUSHING.get(editor)) {
        editor.onChange();
      }
    }
  }
};
function ownKeys$7(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$7(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$7(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$7(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var after = function after2(editor, at) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var anchor = Editor.point(editor, at, {
    edge: "end"
  });
  var focus = Editor.end(editor, []);
  var range2 = {
    anchor,
    focus
  };
  var {
    distance = 1
  } = options;
  var d = 0;
  var target;
  for (var p of Editor.positions(editor, _objectSpread$7(_objectSpread$7({}, options), {}, {
    at: range2
  }))) {
    if (d > distance) {
      break;
    }
    if (d !== 0) {
      target = p;
    }
    d++;
  }
  return target;
};
function ownKeys$6(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$6(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$6(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$6(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var before = function before2(editor, at) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var anchor = Editor.start(editor, []);
  var focus = Editor.point(editor, at, {
    edge: "start"
  });
  var range2 = {
    anchor,
    focus
  };
  var {
    distance = 1
  } = options;
  var d = 0;
  var target;
  for (var p of Editor.positions(editor, _objectSpread$6(_objectSpread$6({}, options), {}, {
    at: range2,
    reverse: true
  }))) {
    if (d > distance) {
      break;
    }
    if (d !== 0) {
      target = p;
    }
    d++;
  }
  return target;
};
var deleteBackward = (editor, unit) => {
  var {
    selection
  } = editor;
  if (selection && Range.isCollapsed(selection)) {
    Transforms.delete(editor, {
      unit,
      reverse: true
    });
  }
};
var deleteForward = (editor, unit) => {
  var {
    selection
  } = editor;
  if (selection && Range.isCollapsed(selection)) {
    Transforms.delete(editor, {
      unit
    });
  }
};
var deleteFragment = function deleteFragment2(editor) {
  var {
    direction = "forward"
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var {
    selection
  } = editor;
  if (selection && Range.isExpanded(selection)) {
    Transforms.delete(editor, {
      reverse: direction === "backward"
    });
  }
};
var edges = (editor, at) => {
  return [Editor.start(editor, at), Editor.end(editor, at)];
};
function ownKeys$5(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$5(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$5(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$5(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var elementReadOnly = function elementReadOnly2(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Editor.above(editor, _objectSpread$5(_objectSpread$5({}, options), {}, {
    match: (n3) => Element2.isElement(n3) && Editor.isElementReadOnly(editor, n3)
  }));
};
var end = (editor, at) => {
  return Editor.point(editor, at, {
    edge: "end"
  });
};
var first = (editor, at) => {
  var path3 = Editor.path(editor, at, {
    edge: "start"
  });
  return Editor.node(editor, path3);
};
var fragment = (editor, at) => {
  var range2 = Editor.range(editor, at);
  return Node.fragment(editor, range2);
};
function ownKeys$4(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$4(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$4(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$4(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var getVoid = function getVoid2(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Editor.above(editor, _objectSpread$4(_objectSpread$4({}, options), {}, {
    match: (n3) => Element2.isElement(n3) && Editor.isVoid(editor, n3)
  }));
};
var hasBlocks = (editor, element) => {
  return element.children.some((n3) => Element2.isElement(n3) && Editor.isBlock(editor, n3));
};
var hasInlines = (editor, element) => {
  return element.children.some((n3) => Text.isText(n3) || Editor.isInline(editor, n3));
};
var hasPath = (editor, path3) => {
  return Node.has(editor, path3);
};
var hasTexts = (editor, element) => {
  return element.children.every((n3) => Text.isText(n3));
};
var insertBreak = (editor) => {
  Transforms.splitNodes(editor, {
    always: true
  });
};
var insertNode = (editor, node3, options) => {
  Transforms.insertNodes(editor, node3, options);
};
var insertSoftBreak = (editor) => {
  Transforms.splitNodes(editor, {
    always: true
  });
};
function ownKeys$3(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$3(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$3(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$3(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var insertText = function insertText2(editor, text) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var {
    selection,
    marks: marks3
  } = editor;
  if (selection) {
    if (marks3) {
      var node3 = _objectSpread$3({
        text
      }, marks3);
      Transforms.insertNodes(editor, node3, {
        at: options.at,
        voids: options.voids
      });
    } else {
      Transforms.insertText(editor, text, options);
    }
    editor.marks = null;
  }
};
var isBlock2 = (editor, value) => {
  return !editor.isInline(value);
};
var isEdge = (editor, point3, at) => {
  return Editor.isStart(editor, point3, at) || Editor.isEnd(editor, point3, at);
};
var isEmpty = (editor, element) => {
  var {
    children
  } = element;
  var [first2] = children;
  return children.length === 0 || children.length === 1 && Text.isText(first2) && first2.text === "" && !editor.isVoid(element);
};
var isEnd = (editor, point3, at) => {
  var end2 = Editor.end(editor, at);
  return Point.equals(point3, end2);
};
var isNormalizing = (editor) => {
  var isNormalizing2 = NORMALIZING.get(editor);
  return isNormalizing2 === void 0 ? true : isNormalizing2;
};
var isStart = (editor, point3, at) => {
  if (point3.offset !== 0) {
    return false;
  }
  var start2 = Editor.start(editor, at);
  return Point.equals(point3, start2);
};
var last = (editor, at) => {
  var path3 = Editor.path(editor, at, {
    edge: "end"
  });
  return Editor.node(editor, path3);
};
var leaf = function leaf2(editor, at) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var path3 = Editor.path(editor, at, options);
  var node3 = Node.leaf(editor, path3);
  return [node3, path3];
};
function levels(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at = editor.selection,
      reverse = false,
      voids = false
    } = options;
    var {
      match
    } = options;
    if (match == null) {
      match = () => true;
    }
    if (!at) {
      return;
    }
    var levels2 = [];
    var path3 = Editor.path(editor, at);
    for (var [n3, p] of Node.levels(editor, path3)) {
      if (!match(n3, p)) {
        continue;
      }
      levels2.push([n3, p]);
      if (!voids && Element2.isElement(n3) && Editor.isVoid(editor, n3)) {
        break;
      }
    }
    if (reverse) {
      levels2.reverse();
    }
    yield* __yieldStar(levels2);
  }();
}
var _excluded$1 = ["text"];
var _excluded2$1 = ["text"];
var marks = function marks2(editor) {
  var {
    marks: marks3,
    selection
  } = editor;
  if (!selection) {
    return null;
  }
  var {
    anchor,
    focus
  } = selection;
  if (marks3) {
    return marks3;
  }
  if (Range.isExpanded(selection)) {
    var isEnd2 = Editor.isEnd(editor, anchor, anchor.path);
    if (isEnd2) {
      var after3 = Editor.after(editor, anchor);
      if (after3) {
        anchor = after3;
      }
    }
    var [match] = Editor.nodes(editor, {
      match: Text.isText,
      at: {
        anchor,
        focus
      }
    });
    if (match) {
      var [_node] = match;
      var _rest = _objectWithoutProperties(_node, _excluded$1);
      return _rest;
    } else {
      return {};
    }
  }
  var {
    path: path3
  } = anchor;
  var [node3] = Editor.leaf(editor, path3);
  if (anchor.offset === 0) {
    var prev = Editor.previous(editor, {
      at: path3,
      match: Text.isText
    });
    var markedVoid = Editor.above(editor, {
      match: (n3) => Element2.isElement(n3) && Editor.isVoid(editor, n3) && editor.markableVoid(n3)
    });
    if (!markedVoid) {
      var block = Editor.above(editor, {
        match: (n3) => Element2.isElement(n3) && Editor.isBlock(editor, n3)
      });
      if (prev && block) {
        var [prevNode, prevPath] = prev;
        var [, blockPath] = block;
        if (Path.isAncestor(blockPath, prevPath)) {
          node3 = prevNode;
        }
      }
    }
  }
  var rest = _objectWithoutProperties(node3, _excluded2$1);
  return rest;
};
var next = function next2(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var {
    mode = "lowest",
    voids = false
  } = options;
  var {
    match,
    at = editor.selection
  } = options;
  if (!at) {
    return;
  }
  var pointAfterLocation = Editor.after(editor, at, {
    voids
  });
  if (!pointAfterLocation)
    return;
  var [, to] = Editor.last(editor, []);
  var span = [pointAfterLocation.path, to];
  if (Path.isPath(at) && at.length === 0) {
    throw new Error("Cannot get the next node from the root node!");
  }
  if (match == null) {
    if (Path.isPath(at)) {
      var [parent3] = Editor.parent(editor, at);
      match = (n3) => parent3.children.includes(n3);
    } else {
      match = () => true;
    }
  }
  var [next3] = Editor.nodes(editor, {
    at: span,
    match,
    mode,
    voids
  });
  return next3;
};
var node = function node2(editor, at) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var path3 = Editor.path(editor, at, options);
  var node3 = Node.get(editor, path3);
  return [node3, path3];
};
function nodes(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at = editor.selection,
      mode = "all",
      universal = false,
      reverse = false,
      voids = false,
      ignoreNonSelectable = false
    } = options;
    var {
      match
    } = options;
    if (!match) {
      match = () => true;
    }
    if (!at) {
      return;
    }
    var from;
    var to;
    if (Span.isSpan(at)) {
      from = at[0];
      to = at[1];
    } else {
      var first2 = Editor.path(editor, at, {
        edge: "start"
      });
      var last2 = Editor.path(editor, at, {
        edge: "end"
      });
      from = reverse ? last2 : first2;
      to = reverse ? first2 : last2;
    }
    var nodeEntries = Node.nodes(editor, {
      reverse,
      from,
      to,
      pass: (_ref) => {
        var [node4] = _ref;
        if (!Element2.isElement(node4))
          return false;
        if (!voids && (Editor.isVoid(editor, node4) || Editor.isElementReadOnly(editor, node4)))
          return true;
        if (ignoreNonSelectable && !Editor.isSelectable(editor, node4))
          return true;
        return false;
      }
    });
    var matches = [];
    var hit;
    for (var [node3, path3] of nodeEntries) {
      if (ignoreNonSelectable && Element2.isElement(node3) && !Editor.isSelectable(editor, node3)) {
        continue;
      }
      var isLower = hit && Path.compare(path3, hit[1]) === 0;
      if (mode === "highest" && isLower) {
        continue;
      }
      if (!match(node3, path3)) {
        if (universal && !isLower && Text.isText(node3)) {
          return;
        } else {
          continue;
        }
      }
      if (mode === "lowest" && isLower) {
        hit = [node3, path3];
        continue;
      }
      var emit = mode === "lowest" ? hit : [node3, path3];
      if (emit) {
        if (universal) {
          matches.push(emit);
        } else {
          yield emit;
        }
      }
      hit = [node3, path3];
    }
    if (mode === "lowest" && hit) {
      if (universal) {
        matches.push(hit);
      } else {
        yield hit;
      }
    }
    if (universal) {
      yield* __yieldStar(matches);
    }
  }();
}
var normalize = function normalize2(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var {
    force = false,
    operation
  } = options;
  var getDirtyPaths2 = (editor2) => {
    return DIRTY_PATHS.get(editor2) || [];
  };
  var getDirtyPathKeys = (editor2) => {
    return DIRTY_PATH_KEYS.get(editor2) || /* @__PURE__ */ new Set();
  };
  var popDirtyPath = (editor2) => {
    var path3 = getDirtyPaths2(editor2).pop();
    var key = path3.join(",");
    getDirtyPathKeys(editor2).delete(key);
    return path3;
  };
  if (!Editor.isNormalizing(editor)) {
    return;
  }
  if (force) {
    var allPaths = Array.from(Node.nodes(editor), (_ref) => {
      var [, p] = _ref;
      return p;
    });
    var allPathKeys = new Set(allPaths.map((p) => p.join(",")));
    DIRTY_PATHS.set(editor, allPaths);
    DIRTY_PATH_KEYS.set(editor, allPathKeys);
  }
  if (getDirtyPaths2(editor).length === 0) {
    return;
  }
  Editor.withoutNormalizing(editor, () => {
    for (var dirtyPath of getDirtyPaths2(editor)) {
      if (Node.has(editor, dirtyPath)) {
        var entry = Editor.node(editor, dirtyPath);
        var [node3, _] = entry;
        if (Element2.isElement(node3) && node3.children.length === 0) {
          editor.normalizeNode(entry, {
            operation
          });
        }
      }
    }
    var dirtyPaths = getDirtyPaths2(editor);
    var initialDirtyPathsLength = dirtyPaths.length;
    var iteration = 0;
    while (dirtyPaths.length !== 0) {
      if (!editor.shouldNormalize({
        dirtyPaths,
        iteration,
        initialDirtyPathsLength,
        operation
      })) {
        return;
      }
      var _dirtyPath = popDirtyPath(editor);
      if (Node.has(editor, _dirtyPath)) {
        var _entry = Editor.node(editor, _dirtyPath);
        editor.normalizeNode(_entry, {
          operation
        });
      }
      iteration++;
      dirtyPaths = getDirtyPaths2(editor);
    }
  });
};
var parent = function parent2(editor, at) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var path3 = Editor.path(editor, at, options);
  var parentPath = Path.parent(path3);
  var entry = Editor.node(editor, parentPath);
  return entry;
};
var pathRef = function pathRef2(editor, path3) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var {
    affinity = "forward"
  } = options;
  var ref = {
    current: path3,
    affinity,
    unref() {
      var {
        current: current2
      } = ref;
      var pathRefs2 = Editor.pathRefs(editor);
      pathRefs2.delete(ref);
      ref.current = null;
      return current2;
    }
  };
  var refs = Editor.pathRefs(editor);
  refs.add(ref);
  return ref;
};
var pathRefs = (editor) => {
  var refs = PATH_REFS.get(editor);
  if (!refs) {
    refs = /* @__PURE__ */ new Set();
    PATH_REFS.set(editor, refs);
  }
  return refs;
};
var path = function path2(editor, at) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var {
    depth,
    edge
  } = options;
  if (Path.isPath(at)) {
    if (edge === "start") {
      var [, firstPath] = Node.first(editor, at);
      at = firstPath;
    } else if (edge === "end") {
      var [, lastPath] = Node.last(editor, at);
      at = lastPath;
    }
  }
  if (Range.isRange(at)) {
    if (edge === "start") {
      at = Range.start(at);
    } else if (edge === "end") {
      at = Range.end(at);
    } else {
      at = Path.common(at.anchor.path, at.focus.path);
    }
  }
  if (Point.isPoint(at)) {
    at = at.path;
  }
  if (depth != null) {
    at = at.slice(0, depth);
  }
  return at;
};
var pointRef = function pointRef2(editor, point3) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var {
    affinity = "forward"
  } = options;
  var ref = {
    current: point3,
    affinity,
    unref() {
      var {
        current: current2
      } = ref;
      var pointRefs2 = Editor.pointRefs(editor);
      pointRefs2.delete(ref);
      ref.current = null;
      return current2;
    }
  };
  var refs = Editor.pointRefs(editor);
  refs.add(ref);
  return ref;
};
var pointRefs = (editor) => {
  var refs = POINT_REFS.get(editor);
  if (!refs) {
    refs = /* @__PURE__ */ new Set();
    POINT_REFS.set(editor, refs);
  }
  return refs;
};
var point = function point2(editor, at) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var {
    edge = "start"
  } = options;
  if (Path.isPath(at)) {
    var path3;
    if (edge === "end") {
      var [, lastPath] = Node.last(editor, at);
      path3 = lastPath;
    } else {
      var [, firstPath] = Node.first(editor, at);
      path3 = firstPath;
    }
    var node3 = Node.get(editor, path3);
    if (!Text.isText(node3)) {
      throw new Error("Cannot get the ".concat(edge, " point in the node at path [").concat(at, "] because it has no ").concat(edge, " text node."));
    }
    return {
      path: path3,
      offset: edge === "end" ? node3.text.length : 0
    };
  }
  if (Range.isRange(at)) {
    var [start2, end2] = Range.edges(at);
    return edge === "start" ? start2 : end2;
  }
  return at;
};
function positions(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at = editor.selection,
      unit = "offset",
      reverse = false,
      voids = false,
      ignoreNonSelectable = false
    } = options;
    if (!at) {
      return;
    }
    var range2 = Editor.range(editor, at);
    var [start2, end2] = Range.edges(range2);
    var first2 = reverse ? end2 : start2;
    var isNewBlock = false;
    var blockText = "";
    var distance = 0;
    var leafTextRemaining = 0;
    var leafTextOffset = 0;
    for (var [node3, path3] of Editor.nodes(editor, {
      at,
      reverse,
      voids,
      ignoreNonSelectable
    })) {
      if (Element2.isElement(node3)) {
        if (!voids && (editor.isVoid(node3) || editor.isElementReadOnly(node3))) {
          yield Editor.start(editor, path3);
          continue;
        }
        if (editor.isInline(node3))
          continue;
        if (Editor.hasInlines(editor, node3)) {
          var e2 = Path.isAncestor(path3, end2.path) ? end2 : Editor.end(editor, path3);
          var s = Path.isAncestor(path3, start2.path) ? start2 : Editor.start(editor, path3);
          blockText = Editor.string(editor, {
            anchor: s,
            focus: e2
          }, {
            voids
          });
          isNewBlock = true;
        }
      }
      if (Text.isText(node3)) {
        var isFirst = Path.equals(path3, first2.path);
        if (isFirst) {
          leafTextRemaining = reverse ? first2.offset : node3.text.length - first2.offset;
          leafTextOffset = first2.offset;
        } else {
          leafTextRemaining = node3.text.length;
          leafTextOffset = reverse ? leafTextRemaining : 0;
        }
        if (isFirst || isNewBlock || unit === "offset") {
          yield {
            path: path3,
            offset: leafTextOffset
          };
          isNewBlock = false;
        }
        while (true) {
          if (distance === 0) {
            if (blockText === "")
              break;
            distance = calcDistance(blockText, unit, reverse);
            blockText = splitByCharacterDistance(blockText, distance, reverse)[1];
          }
          leafTextOffset = reverse ? leafTextOffset - distance : leafTextOffset + distance;
          leafTextRemaining = leafTextRemaining - distance;
          if (leafTextRemaining < 0) {
            distance = -leafTextRemaining;
            break;
          }
          distance = 0;
          yield {
            path: path3,
            offset: leafTextOffset
          };
        }
      }
    }
    function calcDistance(text, unit2, reverse2) {
      if (unit2 === "character") {
        return getCharacterDistance(text, reverse2);
      } else if (unit2 === "word") {
        return getWordDistance(text, reverse2);
      } else if (unit2 === "line" || unit2 === "block") {
        return text.length;
      }
      return 1;
    }
  }();
}
var previous = function previous2(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var {
    mode = "lowest",
    voids = false
  } = options;
  var {
    match,
    at = editor.selection
  } = options;
  if (!at) {
    return;
  }
  var pointBeforeLocation = Editor.before(editor, at, {
    voids
  });
  if (!pointBeforeLocation) {
    return;
  }
  var [, to] = Editor.first(editor, []);
  var span = [pointBeforeLocation.path, to];
  if (Path.isPath(at) && at.length === 0) {
    throw new Error("Cannot get the previous node from the root node!");
  }
  if (match == null) {
    if (Path.isPath(at)) {
      var [parent3] = Editor.parent(editor, at);
      match = (n3) => parent3.children.includes(n3);
    } else {
      match = () => true;
    }
  }
  var [previous3] = Editor.nodes(editor, {
    reverse: true,
    at: span,
    match,
    mode,
    voids
  });
  return previous3;
};
var rangeRef = function rangeRef2(editor, range2) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var {
    affinity = "forward"
  } = options;
  var ref = {
    current: range2,
    affinity,
    unref() {
      var {
        current: current2
      } = ref;
      var rangeRefs2 = Editor.rangeRefs(editor);
      rangeRefs2.delete(ref);
      ref.current = null;
      return current2;
    }
  };
  var refs = Editor.rangeRefs(editor);
  refs.add(ref);
  return ref;
};
var rangeRefs = (editor) => {
  var refs = RANGE_REFS.get(editor);
  if (!refs) {
    refs = /* @__PURE__ */ new Set();
    RANGE_REFS.set(editor, refs);
  }
  return refs;
};
var range = (editor, at, to) => {
  if (Range.isRange(at) && !to) {
    return at;
  }
  var start2 = Editor.start(editor, at);
  var end2 = Editor.end(editor, to || at);
  return {
    anchor: start2,
    focus: end2
  };
};
function ownKeys$2(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$2(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$2(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$2(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var removeMark = (editor, key) => {
  var {
    selection
  } = editor;
  if (selection) {
    var match = (node3, path3) => {
      if (!Text.isText(node3)) {
        return false;
      }
      var [parentNode2, parentPath] = Editor.parent(editor, path3);
      return !editor.isVoid(parentNode2) || editor.markableVoid(parentNode2);
    };
    var expandedSelection = Range.isExpanded(selection);
    var markAcceptingVoidSelected = false;
    if (!expandedSelection) {
      var [selectedNode, selectedPath] = Editor.node(editor, selection);
      if (selectedNode && match(selectedNode, selectedPath)) {
        var [parentNode] = Editor.parent(editor, selectedPath);
        markAcceptingVoidSelected = parentNode && editor.markableVoid(parentNode);
      }
    }
    if (expandedSelection || markAcceptingVoidSelected) {
      Transforms.unsetNodes(editor, key, {
        match,
        split: true,
        voids: true
      });
    } else {
      var marks3 = _objectSpread$2({}, Editor.marks(editor) || {});
      delete marks3[key];
      editor.marks = marks3;
      if (!FLUSHING.get(editor)) {
        editor.onChange();
      }
    }
  }
};
var setNormalizing = (editor, isNormalizing2) => {
  NORMALIZING.set(editor, isNormalizing2);
};
var start = (editor, at) => {
  return Editor.point(editor, at, {
    edge: "start"
  });
};
var string = function string2(editor, at) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var {
    voids = false
  } = options;
  var range2 = Editor.range(editor, at);
  var [start2, end2] = Range.edges(range2);
  var text = "";
  for (var [node3, path3] of Editor.nodes(editor, {
    at: range2,
    match: Text.isText,
    voids
  })) {
    var t2 = node3.text;
    if (Path.equals(path3, end2.path)) {
      t2 = t2.slice(0, end2.offset);
    }
    if (Path.equals(path3, start2.path)) {
      t2 = t2.slice(start2.offset);
    }
    text += t2;
  }
  return text;
};
var unhangRange = function unhangRange2(editor, range2) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var {
    voids = false
  } = options;
  var [start2, end2] = Range.edges(range2);
  if (start2.offset !== 0 || end2.offset !== 0 || Range.isCollapsed(range2) || Path.hasPrevious(end2.path)) {
    return range2;
  }
  var endBlock = Editor.above(editor, {
    at: end2,
    match: (n3) => Element2.isElement(n3) && Editor.isBlock(editor, n3),
    voids
  });
  var blockPath = endBlock ? endBlock[1] : [];
  var first2 = Editor.start(editor, start2);
  var before3 = {
    anchor: first2,
    focus: end2
  };
  var skip = true;
  for (var [node3, path3] of Editor.nodes(editor, {
    at: before3,
    match: Text.isText,
    reverse: true,
    voids
  })) {
    if (skip) {
      skip = false;
      continue;
    }
    if (node3.text !== "" || Path.isBefore(path3, blockPath)) {
      end2 = {
        path: path3,
        offset: node3.text.length
      };
      break;
    }
  }
  return {
    anchor: start2,
    focus: end2
  };
};
var withoutNormalizing = (editor, fn) => {
  var value = Editor.isNormalizing(editor);
  Editor.setNormalizing(editor, false);
  try {
    fn();
  } finally {
    Editor.setNormalizing(editor, value);
  }
  Editor.normalize(editor);
};
var deleteText = function deleteText2(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  Editor.withoutNormalizing(editor, () => {
    var _Editor$void, _Editor$void2;
    var {
      reverse = false,
      unit = "character",
      distance = 1,
      voids = false
    } = options;
    var {
      at = editor.selection,
      hanging = false
    } = options;
    if (!at) {
      return;
    }
    var isCollapsed = false;
    if (Range.isRange(at) && Range.isCollapsed(at)) {
      isCollapsed = true;
      at = at.anchor;
    }
    if (Point.isPoint(at)) {
      var furthestVoid = Editor.void(editor, {
        at,
        mode: "highest"
      });
      if (!voids && furthestVoid) {
        var [, voidPath] = furthestVoid;
        at = voidPath;
      } else {
        var opts = {
          unit,
          distance
        };
        var target = reverse ? Editor.before(editor, at, opts) || Editor.start(editor, []) : Editor.after(editor, at, opts) || Editor.end(editor, []);
        at = {
          anchor: at,
          focus: target
        };
        hanging = true;
      }
    }
    if (Path.isPath(at)) {
      Transforms.removeNodes(editor, {
        at,
        voids
      });
      return;
    }
    if (Range.isCollapsed(at)) {
      return;
    }
    if (!hanging) {
      var [, _end] = Range.edges(at);
      var endOfDoc = Editor.end(editor, []);
      if (!Point.equals(_end, endOfDoc)) {
        at = Editor.unhangRange(editor, at, {
          voids
        });
      }
    }
    var [start2, end2] = Range.edges(at);
    var startBlock = Editor.above(editor, {
      match: (n3) => Element2.isElement(n3) && Editor.isBlock(editor, n3),
      at: start2,
      voids
    });
    var endBlock = Editor.above(editor, {
      match: (n3) => Element2.isElement(n3) && Editor.isBlock(editor, n3),
      at: end2,
      voids
    });
    var isAcrossBlocks = startBlock && endBlock && !Path.equals(startBlock[1], endBlock[1]);
    var isSingleText = Path.equals(start2.path, end2.path);
    var startNonEditable = voids ? null : (_Editor$void = Editor.void(editor, {
      at: start2,
      mode: "highest"
    })) !== null && _Editor$void !== void 0 ? _Editor$void : Editor.elementReadOnly(editor, {
      at: start2,
      mode: "highest"
    });
    var endNonEditable = voids ? null : (_Editor$void2 = Editor.void(editor, {
      at: end2,
      mode: "highest"
    })) !== null && _Editor$void2 !== void 0 ? _Editor$void2 : Editor.elementReadOnly(editor, {
      at: end2,
      mode: "highest"
    });
    if (startNonEditable) {
      var before3 = Editor.before(editor, start2);
      if (before3 && startBlock && Path.isAncestor(startBlock[1], before3.path)) {
        start2 = before3;
      }
    }
    if (endNonEditable) {
      var after3 = Editor.after(editor, end2);
      if (after3 && endBlock && Path.isAncestor(endBlock[1], after3.path)) {
        end2 = after3;
      }
    }
    var matches = [];
    var lastPath;
    for (var entry of Editor.nodes(editor, {
      at,
      voids
    })) {
      var [node3, path3] = entry;
      if (lastPath && Path.compare(path3, lastPath) === 0) {
        continue;
      }
      if (!voids && Element2.isElement(node3) && (Editor.isVoid(editor, node3) || Editor.isElementReadOnly(editor, node3)) || !Path.isCommon(path3, start2.path) && !Path.isCommon(path3, end2.path)) {
        matches.push(entry);
        lastPath = path3;
      }
    }
    var pathRefs2 = Array.from(matches, (_ref) => {
      var [, p] = _ref;
      return Editor.pathRef(editor, p);
    });
    var startRef = Editor.pointRef(editor, start2);
    var endRef = Editor.pointRef(editor, end2);
    var removedText = "";
    if (!isSingleText && !startNonEditable) {
      var _point = startRef.current;
      var [_node] = Editor.leaf(editor, _point);
      var {
        path: _path
      } = _point;
      var {
        offset
      } = start2;
      var text = _node.text.slice(offset);
      if (text.length > 0) {
        editor.apply({
          type: "remove_text",
          path: _path,
          offset,
          text
        });
        removedText = text;
      }
    }
    pathRefs2.reverse().map((r2) => r2.unref()).filter((r2) => r2 !== null).forEach((p) => Transforms.removeNodes(editor, {
      at: p,
      voids
    }));
    if (!endNonEditable) {
      var _point2 = endRef.current;
      var [_node2] = Editor.leaf(editor, _point2);
      var {
        path: _path2
      } = _point2;
      var _offset = isSingleText ? start2.offset : 0;
      var _text = _node2.text.slice(_offset, end2.offset);
      if (_text.length > 0) {
        editor.apply({
          type: "remove_text",
          path: _path2,
          offset: _offset,
          text: _text
        });
        removedText = _text;
      }
    }
    if (!isSingleText && isAcrossBlocks && endRef.current && startRef.current) {
      Transforms.mergeNodes(editor, {
        at: endRef.current,
        hanging: true,
        voids
      });
    }
    if (isCollapsed && reverse && unit === "character" && removedText.length > 1 && removedText.match(/[\u0E00-\u0E7F]+/)) {
      Transforms.insertText(editor, removedText.slice(0, removedText.length - distance));
    }
    var startUnref = startRef.unref();
    var endUnref = endRef.unref();
    var point3 = reverse ? startUnref || endUnref : endUnref || startUnref;
    if (options.at == null && point3) {
      Transforms.select(editor, point3);
    }
  });
};
var insertFragment = function insertFragment2(editor, fragment2) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  Editor.withoutNormalizing(editor, () => {
    var {
      hanging = false,
      voids = false
    } = options;
    var {
      at = getDefaultInsertLocation(editor)
    } = options;
    if (!fragment2.length) {
      return;
    }
    if (Range.isRange(at)) {
      if (!hanging) {
        at = Editor.unhangRange(editor, at, {
          voids
        });
      }
      if (Range.isCollapsed(at)) {
        at = at.anchor;
      } else {
        var [, end2] = Range.edges(at);
        if (!voids && Editor.void(editor, {
          at: end2
        })) {
          return;
        }
        var pointRef3 = Editor.pointRef(editor, end2);
        Transforms.delete(editor, {
          at
        });
        at = pointRef3.unref();
      }
    } else if (Path.isPath(at)) {
      at = Editor.start(editor, at);
    }
    if (!voids && Editor.void(editor, {
      at
    })) {
      return;
    }
    var inlineElementMatch = Editor.above(editor, {
      at,
      match: (n3) => Element2.isElement(n3) && Editor.isInline(editor, n3),
      mode: "highest",
      voids
    });
    if (inlineElementMatch) {
      var [, _inlinePath] = inlineElementMatch;
      if (Editor.isEnd(editor, at, _inlinePath)) {
        var after3 = Editor.after(editor, _inlinePath);
        at = after3;
      } else if (Editor.isStart(editor, at, _inlinePath)) {
        var before3 = Editor.before(editor, _inlinePath);
        at = before3;
      }
    }
    var blockMatch = Editor.above(editor, {
      match: (n3) => Element2.isElement(n3) && Editor.isBlock(editor, n3),
      at,
      voids
    });
    var [, blockPath] = blockMatch;
    var isBlockStart = Editor.isStart(editor, at, blockPath);
    var isBlockEnd = Editor.isEnd(editor, at, blockPath);
    var isBlockEmpty = isBlockStart && isBlockEnd;
    var mergeStart = !isBlockStart || isBlockStart && isBlockEnd;
    var mergeEnd = !isBlockEnd;
    var [, firstPath] = Node.first({
      children: fragment2
    }, []);
    var [, lastPath] = Node.last({
      children: fragment2
    }, []);
    var matches = [];
    var matcher = (_ref) => {
      var [n3, p] = _ref;
      var isRoot = p.length === 0;
      if (isRoot) {
        return false;
      }
      if (isBlockEmpty) {
        return true;
      }
      if (mergeStart && Path.isAncestor(p, firstPath) && Element2.isElement(n3) && !editor.isVoid(n3) && !editor.isInline(n3)) {
        return false;
      }
      if (mergeEnd && Path.isAncestor(p, lastPath) && Element2.isElement(n3) && !editor.isVoid(n3) && !editor.isInline(n3)) {
        return false;
      }
      return true;
    };
    for (var entry of Node.nodes({
      children: fragment2
    }, {
      pass: matcher
    })) {
      if (matcher(entry)) {
        matches.push(entry);
      }
    }
    var starts = [];
    var middles = [];
    var ends = [];
    var starting = true;
    var hasBlocks2 = false;
    for (var [node3] of matches) {
      if (Element2.isElement(node3) && !editor.isInline(node3)) {
        starting = false;
        hasBlocks2 = true;
        middles.push(node3);
      } else if (starting) {
        starts.push(node3);
      } else {
        ends.push(node3);
      }
    }
    var [inlineMatch] = Editor.nodes(editor, {
      at,
      match: (n3) => Text.isText(n3) || Editor.isInline(editor, n3),
      mode: "highest",
      voids
    });
    var [, inlinePath] = inlineMatch;
    var isInlineStart = Editor.isStart(editor, at, inlinePath);
    var isInlineEnd = Editor.isEnd(editor, at, inlinePath);
    var middleRef = Editor.pathRef(editor, isBlockEnd && !ends.length ? Path.next(blockPath) : blockPath);
    var endRef = Editor.pathRef(editor, isInlineEnd ? Path.next(inlinePath) : inlinePath);
    Transforms.splitNodes(editor, {
      at,
      match: (n3) => hasBlocks2 ? Element2.isElement(n3) && Editor.isBlock(editor, n3) : Text.isText(n3) || Editor.isInline(editor, n3),
      mode: hasBlocks2 ? "lowest" : "highest",
      always: hasBlocks2 && (!isBlockStart || starts.length > 0) && (!isBlockEnd || ends.length > 0),
      voids
    });
    var startRef = Editor.pathRef(editor, !isInlineStart || isInlineStart && isInlineEnd ? Path.next(inlinePath) : inlinePath);
    Transforms.insertNodes(editor, starts, {
      at: startRef.current,
      match: (n3) => Text.isText(n3) || Editor.isInline(editor, n3),
      mode: "highest",
      voids
    });
    if (isBlockEmpty && !starts.length && middles.length && !ends.length) {
      Transforms.delete(editor, {
        at: blockPath,
        voids
      });
    }
    Transforms.insertNodes(editor, middles, {
      at: middleRef.current,
      match: (n3) => Element2.isElement(n3) && Editor.isBlock(editor, n3),
      mode: "lowest",
      voids
    });
    Transforms.insertNodes(editor, ends, {
      at: endRef.current,
      match: (n3) => Text.isText(n3) || Editor.isInline(editor, n3),
      mode: "highest",
      voids
    });
    if (!options.at) {
      var path3;
      if (ends.length > 0 && endRef.current) {
        path3 = Path.previous(endRef.current);
      } else if (middles.length > 0 && middleRef.current) {
        path3 = Path.previous(middleRef.current);
      } else if (startRef.current) {
        path3 = Path.previous(startRef.current);
      }
      if (path3) {
        var _end = Editor.end(editor, path3);
        Transforms.select(editor, _end);
      }
    }
    startRef.unref();
    middleRef.unref();
    endRef.unref();
  });
};
var collapse = function collapse2(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var {
    edge = "anchor"
  } = options;
  var {
    selection
  } = editor;
  if (!selection) {
    return;
  } else if (edge === "anchor") {
    Transforms.select(editor, selection.anchor);
  } else if (edge === "focus") {
    Transforms.select(editor, selection.focus);
  } else if (edge === "start") {
    var [start2] = Range.edges(selection);
    Transforms.select(editor, start2);
  } else if (edge === "end") {
    var [, end2] = Range.edges(selection);
    Transforms.select(editor, end2);
  }
};
var deselect = (editor) => {
  var {
    selection
  } = editor;
  if (selection) {
    editor.apply({
      type: "set_selection",
      properties: selection,
      newProperties: null
    });
  }
};
var move = function move2(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var {
    selection
  } = editor;
  var {
    distance = 1,
    unit = "character",
    reverse = false
  } = options;
  var {
    edge = null
  } = options;
  if (!selection) {
    return;
  }
  if (edge === "start") {
    edge = Range.isBackward(selection) ? "focus" : "anchor";
  }
  if (edge === "end") {
    edge = Range.isBackward(selection) ? "anchor" : "focus";
  }
  var {
    anchor,
    focus
  } = selection;
  var opts = {
    distance,
    unit,
    ignoreNonSelectable: true
  };
  var props = {};
  if (edge == null || edge === "anchor") {
    var point3 = reverse ? Editor.before(editor, anchor, opts) : Editor.after(editor, anchor, opts);
    if (point3) {
      props.anchor = point3;
    }
  }
  if (edge == null || edge === "focus") {
    var _point = reverse ? Editor.before(editor, focus, opts) : Editor.after(editor, focus, opts);
    if (_point) {
      props.focus = _point;
    }
  }
  Transforms.setSelection(editor, props);
};
var select = (editor, target) => {
  var {
    selection
  } = editor;
  target = Editor.range(editor, target);
  if (selection) {
    Transforms.setSelection(editor, target);
    return;
  }
  if (!Range.isRange(target)) {
    throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(Scrubber.stringify(target)));
  }
  editor.apply({
    type: "set_selection",
    properties: selection,
    newProperties: target
  });
};
function ownKeys$1(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$1(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$1(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$1(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var setPoint = function setPoint2(editor, props) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var {
    selection
  } = editor;
  var {
    edge = "both"
  } = options;
  if (!selection) {
    return;
  }
  if (edge === "start") {
    edge = Range.isBackward(selection) ? "focus" : "anchor";
  }
  if (edge === "end") {
    edge = Range.isBackward(selection) ? "anchor" : "focus";
  }
  var {
    anchor,
    focus
  } = selection;
  var point3 = edge === "anchor" ? anchor : focus;
  Transforms.setSelection(editor, {
    [edge === "anchor" ? "anchor" : "focus"]: _objectSpread$1(_objectSpread$1({}, point3), props)
  });
};
var setSelection = (editor, props) => {
  var {
    selection
  } = editor;
  var oldProps = {};
  var newProps = {};
  if (!selection) {
    return;
  }
  for (var k in props) {
    if (k === "anchor" && props.anchor != null && !Point.equals(props.anchor, selection.anchor) || k === "focus" && props.focus != null && !Point.equals(props.focus, selection.focus) || k !== "anchor" && k !== "focus" && props[k] !== selection[k]) {
      oldProps[k] = selection[k];
      newProps[k] = props[k];
    }
  }
  if (Object.keys(oldProps).length > 0) {
    editor.apply({
      type: "set_selection",
      properties: oldProps,
      newProperties: newProps
    });
  }
};
var insertNodes = function insertNodes2(editor, nodes2) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  Editor.withoutNormalizing(editor, () => {
    var {
      hanging = false,
      voids = false,
      mode = "lowest"
    } = options;
    var {
      at,
      match,
      select: select2
    } = options;
    if (Node.isNode(nodes2)) {
      nodes2 = [nodes2];
    }
    if (nodes2.length === 0) {
      return;
    }
    var [node3] = nodes2;
    if (!at) {
      at = getDefaultInsertLocation(editor);
      if (select2 !== false) {
        select2 = true;
      }
    }
    if (select2 == null) {
      select2 = false;
    }
    if (Range.isRange(at)) {
      if (!hanging) {
        at = Editor.unhangRange(editor, at, {
          voids
        });
      }
      if (Range.isCollapsed(at)) {
        at = at.anchor;
      } else {
        var [, end2] = Range.edges(at);
        var pointRef3 = Editor.pointRef(editor, end2);
        Transforms.delete(editor, {
          at
        });
        at = pointRef3.unref();
      }
    }
    if (Point.isPoint(at)) {
      if (match == null) {
        if (Text.isText(node3)) {
          match = (n3) => Text.isText(n3);
        } else if (editor.isInline(node3)) {
          match = (n3) => Text.isText(n3) || Editor.isInline(editor, n3);
        } else {
          match = (n3) => Element2.isElement(n3) && Editor.isBlock(editor, n3);
        }
      }
      var [entry] = Editor.nodes(editor, {
        at: at.path,
        match,
        mode,
        voids
      });
      if (entry) {
        var [, matchPath2] = entry;
        var pathRef3 = Editor.pathRef(editor, matchPath2);
        var isAtEnd = Editor.isEnd(editor, at, matchPath2);
        Transforms.splitNodes(editor, {
          at,
          match,
          mode,
          voids
        });
        var path3 = pathRef3.unref();
        at = isAtEnd ? Path.next(path3) : path3;
      } else {
        return;
      }
    }
    var parentPath = Path.parent(at);
    var index = at[at.length - 1];
    if (!voids && Editor.void(editor, {
      at: parentPath
    })) {
      return;
    }
    for (var _node of nodes2) {
      var _path = parentPath.concat(index);
      index++;
      editor.apply({
        type: "insert_node",
        path: _path,
        node: _node
      });
      at = Path.next(at);
    }
    at = Path.previous(at);
    if (select2) {
      var point3 = Editor.end(editor, at);
      if (point3) {
        Transforms.select(editor, point3);
      }
    }
  });
};
var liftNodes = function liftNodes2(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  Editor.withoutNormalizing(editor, () => {
    var {
      at = editor.selection,
      mode = "lowest",
      voids = false
    } = options;
    var {
      match
    } = options;
    if (match == null) {
      match = Path.isPath(at) ? matchPath(editor, at) : (n3) => Element2.isElement(n3) && Editor.isBlock(editor, n3);
    }
    if (!at) {
      return;
    }
    var matches = Editor.nodes(editor, {
      at,
      match,
      mode,
      voids
    });
    var pathRefs2 = Array.from(matches, (_ref) => {
      var [, p] = _ref;
      return Editor.pathRef(editor, p);
    });
    for (var pathRef3 of pathRefs2) {
      var path3 = pathRef3.unref();
      if (path3.length < 2) {
        throw new Error("Cannot lift node at a path [".concat(path3, "] because it has a depth of less than `2`."));
      }
      var parentNodeEntry = Editor.node(editor, Path.parent(path3));
      var [parent3, parentPath] = parentNodeEntry;
      var index = path3[path3.length - 1];
      var {
        length
      } = parent3.children;
      if (length === 1) {
        var toPath = Path.next(parentPath);
        Transforms.moveNodes(editor, {
          at: path3,
          to: toPath,
          voids
        });
        Transforms.removeNodes(editor, {
          at: parentPath,
          voids
        });
      } else if (index === 0) {
        Transforms.moveNodes(editor, {
          at: path3,
          to: parentPath,
          voids
        });
      } else if (index === length - 1) {
        var _toPath = Path.next(parentPath);
        Transforms.moveNodes(editor, {
          at: path3,
          to: _toPath,
          voids
        });
      } else {
        var splitPath = Path.next(path3);
        var _toPath2 = Path.next(parentPath);
        Transforms.splitNodes(editor, {
          at: splitPath,
          voids
        });
        Transforms.moveNodes(editor, {
          at: path3,
          to: _toPath2,
          voids
        });
      }
    }
  });
};
var _excluded = ["text"];
var _excluded2 = ["children"];
var hasSingleChildNest = (editor, node3) => {
  if (Element2.isElement(node3)) {
    var element = node3;
    if (Editor.isVoid(editor, node3)) {
      return true;
    } else if (element.children.length === 1) {
      return hasSingleChildNest(editor, element.children[0]);
    } else {
      return false;
    }
  } else if (Editor.isEditor(node3)) {
    return false;
  } else {
    return true;
  }
};
var mergeNodes = function mergeNodes2(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  Editor.withoutNormalizing(editor, () => {
    var {
      match,
      at = editor.selection
    } = options;
    var {
      hanging = false,
      voids = false,
      mode = "lowest"
    } = options;
    if (!at) {
      return;
    }
    if (match == null) {
      if (Path.isPath(at)) {
        var [parent3] = Editor.parent(editor, at);
        match = (n3) => parent3.children.includes(n3);
      } else {
        match = (n3) => Element2.isElement(n3) && Editor.isBlock(editor, n3);
      }
    }
    if (!hanging && Range.isRange(at)) {
      at = Editor.unhangRange(editor, at, {
        voids
      });
    }
    if (Range.isRange(at)) {
      if (Range.isCollapsed(at)) {
        at = at.anchor;
      } else {
        var [, end2] = Range.edges(at);
        var pointRef3 = Editor.pointRef(editor, end2);
        Transforms.delete(editor, {
          at
        });
        at = pointRef3.unref();
        if (options.at == null) {
          Transforms.select(editor, at);
        }
      }
    }
    var [current2] = Editor.nodes(editor, {
      at,
      match,
      voids,
      mode
    });
    var prev = Editor.previous(editor, {
      at,
      match,
      voids,
      mode
    });
    if (!current2 || !prev) {
      return;
    }
    var [node3, path3] = current2;
    var [prevNode, prevPath] = prev;
    if (path3.length === 0 || prevPath.length === 0) {
      return;
    }
    var newPath = Path.next(prevPath);
    var commonPath = Path.common(path3, prevPath);
    var isPreviousSibling = Path.isSibling(path3, prevPath);
    var levels2 = Array.from(Editor.levels(editor, {
      at: path3
    }), (_ref) => {
      var [n3] = _ref;
      return n3;
    }).slice(commonPath.length).slice(0, -1);
    var emptyAncestor = Editor.above(editor, {
      at: path3,
      mode: "highest",
      match: (n3) => levels2.includes(n3) && hasSingleChildNest(editor, n3)
    });
    var emptyRef = emptyAncestor && Editor.pathRef(editor, emptyAncestor[1]);
    var properties;
    var position;
    if (Text.isText(node3) && Text.isText(prevNode)) {
      var rest = _objectWithoutProperties(node3, _excluded);
      position = prevNode.text.length;
      properties = rest;
    } else if (Element2.isElement(node3) && Element2.isElement(prevNode)) {
      var rest = _objectWithoutProperties(node3, _excluded2);
      position = prevNode.children.length;
      properties = rest;
    } else {
      throw new Error("Cannot merge the node at path [".concat(path3, "] with the previous sibling because it is not the same kind: ").concat(Scrubber.stringify(node3), " ").concat(Scrubber.stringify(prevNode)));
    }
    if (!isPreviousSibling) {
      Transforms.moveNodes(editor, {
        at: path3,
        to: newPath,
        voids
      });
    }
    if (emptyRef) {
      Transforms.removeNodes(editor, {
        at: emptyRef.current,
        voids
      });
    }
    if (Element2.isElement(prevNode) && Editor.isEmpty(editor, prevNode) || Text.isText(prevNode) && prevNode.text === "" && prevPath[prevPath.length - 1] !== 0) {
      Transforms.removeNodes(editor, {
        at: prevPath,
        voids
      });
    } else {
      editor.apply({
        type: "merge_node",
        path: newPath,
        position,
        properties
      });
    }
    if (emptyRef) {
      emptyRef.unref();
    }
  });
};
var moveNodes = (editor, options) => {
  Editor.withoutNormalizing(editor, () => {
    var {
      to,
      at = editor.selection,
      mode = "lowest",
      voids = false
    } = options;
    var {
      match
    } = options;
    if (!at) {
      return;
    }
    if (match == null) {
      match = Path.isPath(at) ? matchPath(editor, at) : (n3) => Element2.isElement(n3) && Editor.isBlock(editor, n3);
    }
    var toRef = Editor.pathRef(editor, to);
    var targets = Editor.nodes(editor, {
      at,
      match,
      mode,
      voids
    });
    var pathRefs2 = Array.from(targets, (_ref) => {
      var [, p] = _ref;
      return Editor.pathRef(editor, p);
    });
    for (var pathRef3 of pathRefs2) {
      var path3 = pathRef3.unref();
      var newPath = toRef.current;
      if (path3.length !== 0) {
        editor.apply({
          type: "move_node",
          path: path3,
          newPath
        });
      }
      if (toRef.current && Path.isSibling(newPath, path3) && Path.isAfter(newPath, path3)) {
        toRef.current = Path.next(toRef.current);
      }
    }
    toRef.unref();
  });
};
var removeNodes = function removeNodes2(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  Editor.withoutNormalizing(editor, () => {
    var {
      hanging = false,
      voids = false,
      mode = "lowest"
    } = options;
    var {
      at = editor.selection,
      match
    } = options;
    if (!at) {
      return;
    }
    if (match == null) {
      match = Path.isPath(at) ? matchPath(editor, at) : (n3) => Element2.isElement(n3) && Editor.isBlock(editor, n3);
    }
    if (!hanging && Range.isRange(at)) {
      at = Editor.unhangRange(editor, at, {
        voids
      });
    }
    var depths = Editor.nodes(editor, {
      at,
      match,
      mode,
      voids
    });
    var pathRefs2 = Array.from(depths, (_ref) => {
      var [, p] = _ref;
      return Editor.pathRef(editor, p);
    });
    for (var pathRef3 of pathRefs2) {
      var path3 = pathRef3.unref();
      if (path3) {
        var [node3] = Editor.node(editor, path3);
        editor.apply({
          type: "remove_node",
          path: path3,
          node: node3
        });
      }
    }
  });
};
var setNodes = function setNodes2(editor, props) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  Editor.withoutNormalizing(editor, () => {
    var {
      match,
      at = editor.selection,
      compare,
      merge
    } = options;
    var {
      hanging = false,
      mode = "lowest",
      split = false,
      voids = false
    } = options;
    if (!at) {
      return;
    }
    if (match == null) {
      match = Path.isPath(at) ? matchPath(editor, at) : (n3) => Element2.isElement(n3) && Editor.isBlock(editor, n3);
    }
    if (!hanging && Range.isRange(at)) {
      at = Editor.unhangRange(editor, at, {
        voids
      });
    }
    if (split && Range.isRange(at)) {
      if (Range.isCollapsed(at) && Editor.leaf(editor, at.anchor)[0].text.length > 0) {
        return;
      }
      var rangeRef3 = Editor.rangeRef(editor, at, {
        affinity: "inward"
      });
      var [start2, end2] = Range.edges(at);
      var splitMode = mode === "lowest" ? "lowest" : "highest";
      var endAtEndOfNode = Editor.isEnd(editor, end2, end2.path);
      Transforms.splitNodes(editor, {
        at: end2,
        match,
        mode: splitMode,
        voids,
        always: !endAtEndOfNode
      });
      var startAtStartOfNode = Editor.isStart(editor, start2, start2.path);
      Transforms.splitNodes(editor, {
        at: start2,
        match,
        mode: splitMode,
        voids,
        always: !startAtStartOfNode
      });
      at = rangeRef3.unref();
      if (options.at == null) {
        Transforms.select(editor, at);
      }
    }
    if (!compare) {
      compare = (prop, nodeProp) => prop !== nodeProp;
    }
    for (var [node3, path3] of Editor.nodes(editor, {
      at,
      match,
      mode,
      voids
    })) {
      var properties = {};
      var newProperties = {};
      if (path3.length === 0) {
        continue;
      }
      var hasChanges = false;
      for (var k in props) {
        if (k === "children" || k === "text") {
          continue;
        }
        if (compare(props[k], node3[k])) {
          hasChanges = true;
          if (node3.hasOwnProperty(k))
            properties[k] = node3[k];
          if (merge) {
            if (props[k] != null)
              newProperties[k] = merge(node3[k], props[k]);
          } else {
            if (props[k] != null)
              newProperties[k] = props[k];
          }
        }
      }
      if (hasChanges) {
        editor.apply({
          type: "set_node",
          path: path3,
          properties,
          newProperties
        });
      }
    }
  });
};
var deleteRange = (editor, range2) => {
  if (Range.isCollapsed(range2)) {
    return range2.anchor;
  } else {
    var [, end2] = Range.edges(range2);
    var pointRef3 = Editor.pointRef(editor, end2);
    Transforms.delete(editor, {
      at: range2
    });
    return pointRef3.unref();
  }
};
var splitNodes = function splitNodes2(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  Editor.withoutNormalizing(editor, () => {
    var {
      mode = "lowest",
      voids = false
    } = options;
    var {
      match,
      at = editor.selection,
      height = 0,
      always = false
    } = options;
    if (match == null) {
      match = (n3) => Element2.isElement(n3) && Editor.isBlock(editor, n3);
    }
    if (Range.isRange(at)) {
      at = deleteRange(editor, at);
    }
    if (Path.isPath(at)) {
      var path3 = at;
      var point3 = Editor.point(editor, path3);
      var [parent3] = Editor.parent(editor, path3);
      match = (n3) => n3 === parent3;
      height = point3.path.length - path3.length + 1;
      at = point3;
      always = true;
    }
    if (!at) {
      return;
    }
    var beforeRef = Editor.pointRef(editor, at, {
      affinity: "backward"
    });
    var afterRef;
    try {
      var [highest] = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      if (!highest) {
        return;
      }
      var voidMatch = Editor.void(editor, {
        at,
        mode: "highest"
      });
      var nudge = 0;
      if (!voids && voidMatch) {
        var [voidNode, voidPath] = voidMatch;
        if (Element2.isElement(voidNode) && editor.isInline(voidNode)) {
          var after3 = Editor.after(editor, voidPath);
          if (!after3) {
            var text = {
              text: ""
            };
            var afterPath = Path.next(voidPath);
            Transforms.insertNodes(editor, text, {
              at: afterPath,
              voids
            });
            after3 = Editor.point(editor, afterPath);
          }
          at = after3;
          always = true;
        }
        var siblingHeight = at.path.length - voidPath.length;
        height = siblingHeight + 1;
        always = true;
      }
      afterRef = Editor.pointRef(editor, at);
      var depth = at.path.length - height;
      var [, highestPath] = highest;
      var lowestPath = at.path.slice(0, depth);
      var position = height === 0 ? at.offset : at.path[depth] + nudge;
      for (var [node3, _path] of Editor.levels(editor, {
        at: lowestPath,
        reverse: true,
        voids
      })) {
        var split = false;
        if (_path.length < highestPath.length || _path.length === 0 || !voids && Element2.isElement(node3) && Editor.isVoid(editor, node3)) {
          break;
        }
        var _point = beforeRef.current;
        var isEnd2 = Editor.isEnd(editor, _point, _path);
        if (always || !beforeRef || !Editor.isEdge(editor, _point, _path)) {
          split = true;
          var properties = Node.extractProps(node3);
          editor.apply({
            type: "split_node",
            path: _path,
            position,
            properties
          });
        }
        position = _path[_path.length - 1] + (split || isEnd2 ? 1 : 0);
      }
      if (options.at == null) {
        var _point2 = afterRef.current || Editor.end(editor, []);
        Transforms.select(editor, _point2);
      }
    } finally {
      var _afterRef;
      beforeRef.unref();
      (_afterRef = afterRef) === null || _afterRef === void 0 || _afterRef.unref();
    }
  });
};
var unsetNodes = function unsetNodes2(editor, props) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!Array.isArray(props)) {
    props = [props];
  }
  var obj = {};
  for (var key of props) {
    obj[key] = null;
  }
  Transforms.setNodes(editor, obj, options);
};
var unwrapNodes = function unwrapNodes2(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  Editor.withoutNormalizing(editor, () => {
    var {
      mode = "lowest",
      split = false,
      voids = false
    } = options;
    var {
      at = editor.selection,
      match
    } = options;
    if (!at) {
      return;
    }
    if (match == null) {
      match = Path.isPath(at) ? matchPath(editor, at) : (n3) => Element2.isElement(n3) && Editor.isBlock(editor, n3);
    }
    if (Path.isPath(at)) {
      at = Editor.range(editor, at);
    }
    var rangeRef3 = Range.isRange(at) ? Editor.rangeRef(editor, at) : null;
    var matches = Editor.nodes(editor, {
      at,
      match,
      mode,
      voids
    });
    var pathRefs2 = Array.from(
      matches,
      (_ref) => {
        var [, p] = _ref;
        return Editor.pathRef(editor, p);
      }
      // unwrapNode will call liftNode which does not support splitting the node when nested.
      // If we do not reverse the order and call it from top to the bottom, it will remove all blocks
      // that wrap target node. So we reverse the order.
    ).reverse();
    var _loop = function _loop2() {
      var path3 = pathRef3.unref();
      var [node3] = Editor.node(editor, path3);
      var range2 = Editor.range(editor, path3);
      if (split && rangeRef3) {
        range2 = Range.intersection(rangeRef3.current, range2);
      }
      Transforms.liftNodes(editor, {
        at: range2,
        match: (n3) => Element2.isAncestor(node3) && node3.children.includes(n3),
        voids
      });
    };
    for (var pathRef3 of pathRefs2) {
      _loop();
    }
    if (rangeRef3) {
      rangeRef3.unref();
    }
  });
};
function ownKeys(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var wrapNodes = function wrapNodes2(editor, element) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  Editor.withoutNormalizing(editor, () => {
    var {
      mode = "lowest",
      split = false,
      voids = false
    } = options;
    var {
      match,
      at = editor.selection
    } = options;
    if (!at) {
      return;
    }
    if (match == null) {
      if (Path.isPath(at)) {
        match = matchPath(editor, at);
      } else if (editor.isInline(element)) {
        match = (n3) => Element2.isElement(n3) && Editor.isInline(editor, n3) || Text.isText(n3);
      } else {
        match = (n3) => Element2.isElement(n3) && Editor.isBlock(editor, n3);
      }
    }
    if (split && Range.isRange(at)) {
      var [start2, end2] = Range.edges(at);
      var rangeRef3 = Editor.rangeRef(editor, at, {
        affinity: "inward"
      });
      Transforms.splitNodes(editor, {
        at: end2,
        match,
        voids
      });
      Transforms.splitNodes(editor, {
        at: start2,
        match,
        voids
      });
      at = rangeRef3.unref();
      if (options.at == null) {
        Transforms.select(editor, at);
      }
    }
    var roots = Array.from(Editor.nodes(editor, {
      at,
      match: editor.isInline(element) ? (n3) => Element2.isElement(n3) && Editor.isBlock(editor, n3) : (n3) => Editor.isEditor(n3),
      mode: "lowest",
      voids
    }));
    var _loop = function _loop2() {
      var a = Range.isRange(at) ? Range.intersection(at, Editor.range(editor, rootPath)) : at;
      if (!a) {
        return 0;
      }
      var matches = Array.from(Editor.nodes(editor, {
        at: a,
        match,
        mode,
        voids
      }));
      if (matches.length > 0) {
        var [first2] = matches;
        var last2 = matches[matches.length - 1];
        var [, firstPath] = first2;
        var [, lastPath] = last2;
        if (firstPath.length === 0 && lastPath.length === 0) {
          return 0;
        }
        var commonPath = Path.equals(firstPath, lastPath) ? Path.parent(firstPath) : Path.common(firstPath, lastPath);
        var range2 = Editor.range(editor, firstPath, lastPath);
        var commonNodeEntry = Editor.node(editor, commonPath);
        var [commonNode] = commonNodeEntry;
        var depth = commonPath.length + 1;
        var wrapperPath = Path.next(lastPath.slice(0, depth));
        var wrapper = _objectSpread(_objectSpread({}, element), {}, {
          children: []
        });
        Transforms.insertNodes(editor, wrapper, {
          at: wrapperPath,
          voids
        });
        Transforms.moveNodes(editor, {
          at: range2,
          match: (n3) => Element2.isAncestor(commonNode) && commonNode.children.includes(n3),
          to: wrapperPath.concat(0),
          voids
        });
      }
    }, _ret;
    for (var [, rootPath] of roots) {
      _ret = _loop();
      if (_ret === 0)
        continue;
    }
  });
};
var createEditor = () => {
  var editor = {
    children: [],
    operations: [],
    selection: null,
    marks: null,
    isElementReadOnly: () => false,
    isInline: () => false,
    isSelectable: () => true,
    isVoid: () => false,
    markableVoid: () => false,
    onChange: () => {
    },
    // Core
    apply: function apply$1() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return apply(editor, ...args);
    },
    // Editor
    addMark: function addMark$1() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return addMark(editor, ...args);
    },
    deleteBackward: function deleteBackward$1() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      return deleteBackward(editor, ...args);
    },
    deleteForward: function deleteForward$1() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return deleteForward(editor, ...args);
    },
    deleteFragment: function deleteFragment$1() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      return deleteFragment(editor, ...args);
    },
    getFragment: function getFragment$1() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      return getFragment(editor, ...args);
    },
    insertBreak: function insertBreak$1() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      return insertBreak(editor, ...args);
    },
    insertSoftBreak: function insertSoftBreak$1() {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      return insertSoftBreak(editor, ...args);
    },
    insertFragment: function insertFragment$1() {
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }
      return insertFragment(editor, ...args);
    },
    insertNode: function insertNode$1() {
      for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        args[_key10] = arguments[_key10];
      }
      return insertNode(editor, ...args);
    },
    insertText: function insertText$1() {
      for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        args[_key11] = arguments[_key11];
      }
      return insertText(editor, ...args);
    },
    normalizeNode: function normalizeNode$1() {
      for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        args[_key12] = arguments[_key12];
      }
      return normalizeNode(editor, ...args);
    },
    removeMark: function removeMark$1() {
      for (var _len13 = arguments.length, args = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        args[_key13] = arguments[_key13];
      }
      return removeMark(editor, ...args);
    },
    getDirtyPaths: function getDirtyPaths$1() {
      for (var _len14 = arguments.length, args = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
        args[_key14] = arguments[_key14];
      }
      return getDirtyPaths(editor, ...args);
    },
    shouldNormalize: function shouldNormalize$1() {
      for (var _len15 = arguments.length, args = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
        args[_key15] = arguments[_key15];
      }
      return shouldNormalize(editor, ...args);
    },
    // Editor interface
    above: function above$1() {
      for (var _len16 = arguments.length, args = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
        args[_key16] = arguments[_key16];
      }
      return above(editor, ...args);
    },
    after: function after$1() {
      for (var _len17 = arguments.length, args = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
        args[_key17] = arguments[_key17];
      }
      return after(editor, ...args);
    },
    before: function before$1() {
      for (var _len18 = arguments.length, args = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
        args[_key18] = arguments[_key18];
      }
      return before(editor, ...args);
    },
    collapse: function collapse$1() {
      for (var _len19 = arguments.length, args = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
        args[_key19] = arguments[_key19];
      }
      return collapse(editor, ...args);
    },
    delete: function _delete() {
      for (var _len20 = arguments.length, args = new Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
        args[_key20] = arguments[_key20];
      }
      return deleteText(editor, ...args);
    },
    deselect: function deselect$1() {
      for (var _len21 = arguments.length, args = new Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
        args[_key21] = arguments[_key21];
      }
      return deselect(editor, ...args);
    },
    edges: function edges$1() {
      for (var _len22 = arguments.length, args = new Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
        args[_key22] = arguments[_key22];
      }
      return edges(editor, ...args);
    },
    elementReadOnly: function elementReadOnly$1() {
      for (var _len23 = arguments.length, args = new Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
        args[_key23] = arguments[_key23];
      }
      return elementReadOnly(editor, ...args);
    },
    end: function end$1() {
      for (var _len24 = arguments.length, args = new Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
        args[_key24] = arguments[_key24];
      }
      return end(editor, ...args);
    },
    first: function first$1() {
      for (var _len25 = arguments.length, args = new Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
        args[_key25] = arguments[_key25];
      }
      return first(editor, ...args);
    },
    fragment: function fragment$1() {
      for (var _len26 = arguments.length, args = new Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
        args[_key26] = arguments[_key26];
      }
      return fragment(editor, ...args);
    },
    getMarks: function getMarks() {
      for (var _len27 = arguments.length, args = new Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
        args[_key27] = arguments[_key27];
      }
      return marks(editor, ...args);
    },
    hasBlocks: function hasBlocks$1() {
      for (var _len28 = arguments.length, args = new Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {
        args[_key28] = arguments[_key28];
      }
      return hasBlocks(editor, ...args);
    },
    hasInlines: function hasInlines$1() {
      for (var _len29 = arguments.length, args = new Array(_len29), _key29 = 0; _key29 < _len29; _key29++) {
        args[_key29] = arguments[_key29];
      }
      return hasInlines(editor, ...args);
    },
    hasPath: function hasPath$1() {
      for (var _len30 = arguments.length, args = new Array(_len30), _key30 = 0; _key30 < _len30; _key30++) {
        args[_key30] = arguments[_key30];
      }
      return hasPath(editor, ...args);
    },
    hasTexts: function hasTexts$1() {
      for (var _len31 = arguments.length, args = new Array(_len31), _key31 = 0; _key31 < _len31; _key31++) {
        args[_key31] = arguments[_key31];
      }
      return hasTexts(editor, ...args);
    },
    insertNodes: function insertNodes$1() {
      for (var _len32 = arguments.length, args = new Array(_len32), _key32 = 0; _key32 < _len32; _key32++) {
        args[_key32] = arguments[_key32];
      }
      return insertNodes(editor, ...args);
    },
    isBlock: function isBlock$1() {
      for (var _len33 = arguments.length, args = new Array(_len33), _key33 = 0; _key33 < _len33; _key33++) {
        args[_key33] = arguments[_key33];
      }
      return isBlock2(editor, ...args);
    },
    isEdge: function isEdge$1() {
      for (var _len34 = arguments.length, args = new Array(_len34), _key34 = 0; _key34 < _len34; _key34++) {
        args[_key34] = arguments[_key34];
      }
      return isEdge(editor, ...args);
    },
    isEmpty: function isEmpty$1() {
      for (var _len35 = arguments.length, args = new Array(_len35), _key35 = 0; _key35 < _len35; _key35++) {
        args[_key35] = arguments[_key35];
      }
      return isEmpty(editor, ...args);
    },
    isEnd: function isEnd$1() {
      for (var _len36 = arguments.length, args = new Array(_len36), _key36 = 0; _key36 < _len36; _key36++) {
        args[_key36] = arguments[_key36];
      }
      return isEnd(editor, ...args);
    },
    isNormalizing: function isNormalizing$1() {
      for (var _len37 = arguments.length, args = new Array(_len37), _key37 = 0; _key37 < _len37; _key37++) {
        args[_key37] = arguments[_key37];
      }
      return isNormalizing(editor, ...args);
    },
    isStart: function isStart$1() {
      for (var _len38 = arguments.length, args = new Array(_len38), _key38 = 0; _key38 < _len38; _key38++) {
        args[_key38] = arguments[_key38];
      }
      return isStart(editor, ...args);
    },
    last: function last$1() {
      for (var _len39 = arguments.length, args = new Array(_len39), _key39 = 0; _key39 < _len39; _key39++) {
        args[_key39] = arguments[_key39];
      }
      return last(editor, ...args);
    },
    leaf: function leaf$1() {
      for (var _len40 = arguments.length, args = new Array(_len40), _key40 = 0; _key40 < _len40; _key40++) {
        args[_key40] = arguments[_key40];
      }
      return leaf(editor, ...args);
    },
    levels: function levels$1() {
      for (var _len41 = arguments.length, args = new Array(_len41), _key41 = 0; _key41 < _len41; _key41++) {
        args[_key41] = arguments[_key41];
      }
      return levels(editor, ...args);
    },
    liftNodes: function liftNodes$1() {
      for (var _len42 = arguments.length, args = new Array(_len42), _key42 = 0; _key42 < _len42; _key42++) {
        args[_key42] = arguments[_key42];
      }
      return liftNodes(editor, ...args);
    },
    mergeNodes: function mergeNodes$1() {
      for (var _len43 = arguments.length, args = new Array(_len43), _key43 = 0; _key43 < _len43; _key43++) {
        args[_key43] = arguments[_key43];
      }
      return mergeNodes(editor, ...args);
    },
    move: function move$1() {
      for (var _len44 = arguments.length, args = new Array(_len44), _key44 = 0; _key44 < _len44; _key44++) {
        args[_key44] = arguments[_key44];
      }
      return move(editor, ...args);
    },
    moveNodes: function moveNodes$1() {
      for (var _len45 = arguments.length, args = new Array(_len45), _key45 = 0; _key45 < _len45; _key45++) {
        args[_key45] = arguments[_key45];
      }
      return moveNodes(editor, ...args);
    },
    next: function next$1() {
      for (var _len46 = arguments.length, args = new Array(_len46), _key46 = 0; _key46 < _len46; _key46++) {
        args[_key46] = arguments[_key46];
      }
      return next(editor, ...args);
    },
    node: function node$1() {
      for (var _len47 = arguments.length, args = new Array(_len47), _key47 = 0; _key47 < _len47; _key47++) {
        args[_key47] = arguments[_key47];
      }
      return node(editor, ...args);
    },
    nodes: function nodes$1() {
      for (var _len48 = arguments.length, args = new Array(_len48), _key48 = 0; _key48 < _len48; _key48++) {
        args[_key48] = arguments[_key48];
      }
      return nodes(editor, ...args);
    },
    normalize: function normalize$1() {
      for (var _len49 = arguments.length, args = new Array(_len49), _key49 = 0; _key49 < _len49; _key49++) {
        args[_key49] = arguments[_key49];
      }
      return normalize(editor, ...args);
    },
    parent: function parent$1() {
      for (var _len50 = arguments.length, args = new Array(_len50), _key50 = 0; _key50 < _len50; _key50++) {
        args[_key50] = arguments[_key50];
      }
      return parent(editor, ...args);
    },
    path: function path$1() {
      for (var _len51 = arguments.length, args = new Array(_len51), _key51 = 0; _key51 < _len51; _key51++) {
        args[_key51] = arguments[_key51];
      }
      return path(editor, ...args);
    },
    pathRef: function pathRef$1() {
      for (var _len52 = arguments.length, args = new Array(_len52), _key52 = 0; _key52 < _len52; _key52++) {
        args[_key52] = arguments[_key52];
      }
      return pathRef(editor, ...args);
    },
    pathRefs: function pathRefs$1() {
      for (var _len53 = arguments.length, args = new Array(_len53), _key53 = 0; _key53 < _len53; _key53++) {
        args[_key53] = arguments[_key53];
      }
      return pathRefs(editor, ...args);
    },
    point: function point$1() {
      for (var _len54 = arguments.length, args = new Array(_len54), _key54 = 0; _key54 < _len54; _key54++) {
        args[_key54] = arguments[_key54];
      }
      return point(editor, ...args);
    },
    pointRef: function pointRef$1() {
      for (var _len55 = arguments.length, args = new Array(_len55), _key55 = 0; _key55 < _len55; _key55++) {
        args[_key55] = arguments[_key55];
      }
      return pointRef(editor, ...args);
    },
    pointRefs: function pointRefs$1() {
      for (var _len56 = arguments.length, args = new Array(_len56), _key56 = 0; _key56 < _len56; _key56++) {
        args[_key56] = arguments[_key56];
      }
      return pointRefs(editor, ...args);
    },
    positions: function positions$1() {
      for (var _len57 = arguments.length, args = new Array(_len57), _key57 = 0; _key57 < _len57; _key57++) {
        args[_key57] = arguments[_key57];
      }
      return positions(editor, ...args);
    },
    previous: function previous$1() {
      for (var _len58 = arguments.length, args = new Array(_len58), _key58 = 0; _key58 < _len58; _key58++) {
        args[_key58] = arguments[_key58];
      }
      return previous(editor, ...args);
    },
    range: function range$1() {
      for (var _len59 = arguments.length, args = new Array(_len59), _key59 = 0; _key59 < _len59; _key59++) {
        args[_key59] = arguments[_key59];
      }
      return range(editor, ...args);
    },
    rangeRef: function rangeRef$1() {
      for (var _len60 = arguments.length, args = new Array(_len60), _key60 = 0; _key60 < _len60; _key60++) {
        args[_key60] = arguments[_key60];
      }
      return rangeRef(editor, ...args);
    },
    rangeRefs: function rangeRefs$1() {
      for (var _len61 = arguments.length, args = new Array(_len61), _key61 = 0; _key61 < _len61; _key61++) {
        args[_key61] = arguments[_key61];
      }
      return rangeRefs(editor, ...args);
    },
    removeNodes: function removeNodes$1() {
      for (var _len62 = arguments.length, args = new Array(_len62), _key62 = 0; _key62 < _len62; _key62++) {
        args[_key62] = arguments[_key62];
      }
      return removeNodes(editor, ...args);
    },
    select: function select$1() {
      for (var _len63 = arguments.length, args = new Array(_len63), _key63 = 0; _key63 < _len63; _key63++) {
        args[_key63] = arguments[_key63];
      }
      return select(editor, ...args);
    },
    setNodes: function setNodes$1() {
      for (var _len64 = arguments.length, args = new Array(_len64), _key64 = 0; _key64 < _len64; _key64++) {
        args[_key64] = arguments[_key64];
      }
      return setNodes(editor, ...args);
    },
    setNormalizing: function setNormalizing$1() {
      for (var _len65 = arguments.length, args = new Array(_len65), _key65 = 0; _key65 < _len65; _key65++) {
        args[_key65] = arguments[_key65];
      }
      return setNormalizing(editor, ...args);
    },
    setPoint: function setPoint$1() {
      for (var _len66 = arguments.length, args = new Array(_len66), _key66 = 0; _key66 < _len66; _key66++) {
        args[_key66] = arguments[_key66];
      }
      return setPoint(editor, ...args);
    },
    setSelection: function setSelection$1() {
      for (var _len67 = arguments.length, args = new Array(_len67), _key67 = 0; _key67 < _len67; _key67++) {
        args[_key67] = arguments[_key67];
      }
      return setSelection(editor, ...args);
    },
    splitNodes: function splitNodes$1() {
      for (var _len68 = arguments.length, args = new Array(_len68), _key68 = 0; _key68 < _len68; _key68++) {
        args[_key68] = arguments[_key68];
      }
      return splitNodes(editor, ...args);
    },
    start: function start$1() {
      for (var _len69 = arguments.length, args = new Array(_len69), _key69 = 0; _key69 < _len69; _key69++) {
        args[_key69] = arguments[_key69];
      }
      return start(editor, ...args);
    },
    string: function string$1() {
      for (var _len70 = arguments.length, args = new Array(_len70), _key70 = 0; _key70 < _len70; _key70++) {
        args[_key70] = arguments[_key70];
      }
      return string(editor, ...args);
    },
    unhangRange: function unhangRange$1() {
      for (var _len71 = arguments.length, args = new Array(_len71), _key71 = 0; _key71 < _len71; _key71++) {
        args[_key71] = arguments[_key71];
      }
      return unhangRange(editor, ...args);
    },
    unsetNodes: function unsetNodes$1() {
      for (var _len72 = arguments.length, args = new Array(_len72), _key72 = 0; _key72 < _len72; _key72++) {
        args[_key72] = arguments[_key72];
      }
      return unsetNodes(editor, ...args);
    },
    unwrapNodes: function unwrapNodes$1() {
      for (var _len73 = arguments.length, args = new Array(_len73), _key73 = 0; _key73 < _len73; _key73++) {
        args[_key73] = arguments[_key73];
      }
      return unwrapNodes(editor, ...args);
    },
    void: function _void() {
      for (var _len74 = arguments.length, args = new Array(_len74), _key74 = 0; _key74 < _len74; _key74++) {
        args[_key74] = arguments[_key74];
      }
      return getVoid(editor, ...args);
    },
    withoutNormalizing: function withoutNormalizing$1() {
      for (var _len75 = arguments.length, args = new Array(_len75), _key75 = 0; _key75 < _len75; _key75++) {
        args[_key75] = arguments[_key75];
      }
      return withoutNormalizing(editor, ...args);
    },
    wrapNodes: function wrapNodes$1() {
      for (var _len76 = arguments.length, args = new Array(_len76), _key76 = 0; _key76 < _len76; _key76++) {
        args[_key76] = arguments[_key76];
      }
      return wrapNodes(editor, ...args);
    }
  };
  return editor;
};

// ../node_modules/slate-react/dist/index.es.js
var import_direction = __toESM(require_direction());
var import_debounce = __toESM(require_debounce());
var import_throttle = __toESM(require_throttle());
var import_react = __toESM(require_react());

// ../node_modules/compute-scroll-into-view/dist/index.mjs
function t(t2) {
  return "object" == typeof t2 && null != t2 && 1 === t2.nodeType;
}
function e(t2, e2) {
  return (!e2 || "hidden" !== t2) && "visible" !== t2 && "clip" !== t2;
}
function n(t2, n3) {
  if (t2.clientHeight < t2.scrollHeight || t2.clientWidth < t2.scrollWidth) {
    var r2 = getComputedStyle(t2, null);
    return e(r2.overflowY, n3) || e(r2.overflowX, n3) || function(t3) {
      var e2 = function(t4) {
        if (!t4.ownerDocument || !t4.ownerDocument.defaultView)
          return null;
        try {
          return t4.ownerDocument.defaultView.frameElement;
        } catch (t5) {
          return null;
        }
      }(t3);
      return !!e2 && (e2.clientHeight < t3.scrollHeight || e2.clientWidth < t3.scrollWidth);
    }(t2);
  }
  return false;
}
function r(t2, e2, n3, r2, i2, o, l, d) {
  return o < t2 && l > e2 || o > t2 && l < e2 ? 0 : o <= t2 && d <= n3 || l >= e2 && d >= n3 ? o - t2 - r2 : l > e2 && d < n3 || o < t2 && d > n3 ? l - e2 + i2 : 0;
}
var i = function(e2, i2) {
  var o = window, l = i2.scrollMode, d = i2.block, f = i2.inline, h = i2.boundary, u = i2.skipOverflowHiddenElements, s = "function" == typeof h ? h : function(t2) {
    return t2 !== h;
  };
  if (!t(e2))
    throw new TypeError("Invalid target");
  for (var a, c, g = document.scrollingElement || document.documentElement, p = [], m = e2; t(m) && s(m); ) {
    if ((m = null == (c = (a = m).parentElement) ? a.getRootNode().host || null : c) === g) {
      p.push(m);
      break;
    }
    null != m && m === document.body && n(m) && !n(document.documentElement) || null != m && n(m, u) && p.push(m);
  }
  for (var w = o.visualViewport ? o.visualViewport.width : innerWidth, v = o.visualViewport ? o.visualViewport.height : innerHeight, W = window.scrollX || pageXOffset, H = window.scrollY || pageYOffset, b = e2.getBoundingClientRect(), y = b.height, E = b.width, M = b.top, V = b.right, x = b.bottom, I = b.left, C = "start" === d || "nearest" === d ? M : "end" === d ? x : M + y / 2, R = "center" === f ? I + E / 2 : "end" === f ? V : I, T = [], k = 0; k < p.length; k++) {
    var B = p[k], D = B.getBoundingClientRect(), O = D.height, X = D.width, Y = D.top, L = D.right, S = D.bottom, j = D.left;
    if ("if-needed" === l && M >= 0 && I >= 0 && x <= v && V <= w && M >= Y && x <= S && I >= j && V <= L)
      return T;
    var N = getComputedStyle(B), q = parseInt(N.borderLeftWidth, 10), z = parseInt(N.borderTopWidth, 10), A = parseInt(N.borderRightWidth, 10), F = parseInt(N.borderBottomWidth, 10), G = 0, J = 0, K = "offsetWidth" in B ? B.offsetWidth - B.clientWidth - q - A : 0, P = "offsetHeight" in B ? B.offsetHeight - B.clientHeight - z - F : 0, Q = "offsetWidth" in B ? 0 === B.offsetWidth ? 0 : X / B.offsetWidth : 0, U = "offsetHeight" in B ? 0 === B.offsetHeight ? 0 : O / B.offsetHeight : 0;
    if (g === B)
      G = "start" === d ? C : "end" === d ? C - v : "nearest" === d ? r(H, H + v, v, z, F, H + C, H + C + y, y) : C - v / 2, J = "start" === f ? R : "center" === f ? R - w / 2 : "end" === f ? R - w : r(W, W + w, w, q, A, W + R, W + R + E, E), G = Math.max(0, G + H), J = Math.max(0, J + W);
    else {
      G = "start" === d ? C - Y - z : "end" === d ? C - S + F + P : "nearest" === d ? r(Y, S, O, z, F + P, C, C + y, y) : C - (Y + O / 2) + P / 2, J = "start" === f ? R - j - q : "center" === f ? R - (j + X / 2) + K / 2 : "end" === f ? R - L + A + K : r(j, L, X, q, A + K, R, R + E, E);
      var Z = B.scrollLeft, $ = B.scrollTop;
      C += $ - (G = Math.max(0, Math.min($ + G / U, B.scrollHeight - O / U + P))), R += Z - (J = Math.max(0, Math.min(Z + J / Q, B.scrollWidth - X / Q + K)));
    }
    T.push({ el: B, top: G, left: J });
  }
  return T;
};

// ../node_modules/scroll-into-view-if-needed/es/index.js
function isOptionsObject(options) {
  return options === Object(options) && Object.keys(options).length !== 0;
}
function defaultBehavior(actions, behavior) {
  if (behavior === void 0) {
    behavior = "auto";
  }
  var canSmoothScroll = "scrollBehavior" in document.body.style;
  actions.forEach(function(_ref) {
    var el = _ref.el, top = _ref.top, left = _ref.left;
    if (el.scroll && canSmoothScroll) {
      el.scroll({
        top,
        left,
        behavior
      });
    } else {
      el.scrollTop = top;
      el.scrollLeft = left;
    }
  });
}
function getOptions(options) {
  if (options === false) {
    return {
      block: "end",
      inline: "nearest"
    };
  }
  if (isOptionsObject(options)) {
    return options;
  }
  return {
    block: "start",
    inline: "nearest"
  };
}
function scrollIntoView(target, options) {
  var isTargetAttached = target.isConnected || target.ownerDocument.documentElement.contains(target);
  if (isOptionsObject(options) && typeof options.behavior === "function") {
    return options.behavior(isTargetAttached ? i(target, options) : []);
  }
  if (!isTargetAttached) {
    return;
  }
  var computeOptions = getOptions(options);
  return defaultBehavior(i(target, computeOptions), computeOptions.behavior);
}
var es_default = scrollIntoView;

// ../node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js
var resizeObservers = [];

// ../node_modules/@juggle/resize-observer/lib/algorithms/hasActiveObservations.js
var hasActiveObservations = function() {
  return resizeObservers.some(function(ro) {
    return ro.activeTargets.length > 0;
  });
};

// ../node_modules/@juggle/resize-observer/lib/algorithms/hasSkippedObservations.js
var hasSkippedObservations = function() {
  return resizeObservers.some(function(ro) {
    return ro.skippedTargets.length > 0;
  });
};

// ../node_modules/@juggle/resize-observer/lib/algorithms/deliverResizeLoopError.js
var msg = "ResizeObserver loop completed with undelivered notifications.";
var deliverResizeLoopError = function() {
  var event;
  if (typeof ErrorEvent === "function") {
    event = new ErrorEvent("error", {
      message: msg
    });
  } else {
    event = document.createEvent("Event");
    event.initEvent("error", false, false);
    event.message = msg;
  }
  window.dispatchEvent(event);
};

// ../node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js
var ResizeObserverBoxOptions;
(function(ResizeObserverBoxOptions2) {
  ResizeObserverBoxOptions2["BORDER_BOX"] = "border-box";
  ResizeObserverBoxOptions2["CONTENT_BOX"] = "content-box";
  ResizeObserverBoxOptions2["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));

// ../node_modules/@juggle/resize-observer/lib/utils/freeze.js
var freeze2 = function(obj) {
  return Object.freeze(obj);
};

// ../node_modules/@juggle/resize-observer/lib/ResizeObserverSize.js
var ResizeObserverSize = /* @__PURE__ */ function() {
  function ResizeObserverSize2(inlineSize, blockSize) {
    this.inlineSize = inlineSize;
    this.blockSize = blockSize;
    freeze2(this);
  }
  return ResizeObserverSize2;
}();

// ../node_modules/@juggle/resize-observer/lib/DOMRectReadOnly.js
var DOMRectReadOnly = function() {
  function DOMRectReadOnly2(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.top = this.y;
    this.left = this.x;
    this.bottom = this.top + this.height;
    this.right = this.left + this.width;
    return freeze2(this);
  }
  DOMRectReadOnly2.prototype.toJSON = function() {
    var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
    return { x, y, top, right, bottom, left, width, height };
  };
  DOMRectReadOnly2.fromRect = function(rectangle) {
    return new DOMRectReadOnly2(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  };
  return DOMRectReadOnly2;
}();

// ../node_modules/@juggle/resize-observer/lib/utils/element.js
var isSVG = function(target) {
  return target instanceof SVGElement && "getBBox" in target;
};
var isHidden = function(target) {
  if (isSVG(target)) {
    var _a = target.getBBox(), width = _a.width, height = _a.height;
    return !width && !height;
  }
  var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
  return !(offsetWidth || offsetHeight || target.getClientRects().length);
};
var isElement2 = function(obj) {
  var _a;
  if (obj instanceof Element) {
    return true;
  }
  var scope = (_a = obj === null || obj === void 0 ? void 0 : obj.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView;
  return !!(scope && obj instanceof scope.Element);
};
var isReplacedElement = function(target) {
  switch (target.tagName) {
    case "INPUT":
      if (target.type !== "image") {
        break;
      }
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return true;
  }
  return false;
};

// ../node_modules/@juggle/resize-observer/lib/utils/global.js
var global2 = typeof window !== "undefined" ? window : {};

// ../node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js
var cache = /* @__PURE__ */ new WeakMap();
var scrollRegexp = /auto|scroll/;
var verticalRegexp = /^tb|vertical/;
var IE = /msie|trident/i.test(global2.navigator && global2.navigator.userAgent);
var parseDimension = function(pixel) {
  return parseFloat(pixel || "0");
};
var size = function(inlineSize, blockSize, switchSizes) {
  if (inlineSize === void 0) {
    inlineSize = 0;
  }
  if (blockSize === void 0) {
    blockSize = 0;
  }
  if (switchSizes === void 0) {
    switchSizes = false;
  }
  return new ResizeObserverSize((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
};
var zeroBoxes = freeze2({
  devicePixelContentBoxSize: size(),
  borderBoxSize: size(),
  contentBoxSize: size(),
  contentRect: new DOMRectReadOnly(0, 0, 0, 0)
});
var calculateBoxSizes = function(target, forceRecalculation) {
  if (forceRecalculation === void 0) {
    forceRecalculation = false;
  }
  if (cache.has(target) && !forceRecalculation) {
    return cache.get(target);
  }
  if (isHidden(target)) {
    cache.set(target, zeroBoxes);
    return zeroBoxes;
  }
  var cs = getComputedStyle(target);
  var svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
  var removePadding = !IE && cs.boxSizing === "border-box";
  var switchSizes = verticalRegexp.test(cs.writingMode || "");
  var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || "");
  var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || "");
  var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
  var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
  var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
  var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
  var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
  var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
  var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
  var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
  var horizontalPadding = paddingLeft + paddingRight;
  var verticalPadding = paddingTop + paddingBottom;
  var horizontalBorderArea = borderLeft + borderRight;
  var verticalBorderArea = borderTop + borderBottom;
  var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
  var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
  var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
  var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
  var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
  var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
  var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
  var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
  var boxes = freeze2({
    devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
    borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
    contentBoxSize: size(contentWidth, contentHeight, switchSizes),
    contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
  });
  cache.set(target, boxes);
  return boxes;
};
var calculateBoxSize = function(target, observedBox, forceRecalculation) {
  var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
  switch (observedBox) {
    case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
      return devicePixelContentBoxSize;
    case ResizeObserverBoxOptions.BORDER_BOX:
      return borderBoxSize;
    default:
      return contentBoxSize;
  }
};

// ../node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js
var ResizeObserverEntry = /* @__PURE__ */ function() {
  function ResizeObserverEntry2(target) {
    var boxes = calculateBoxSizes(target);
    this.target = target;
    this.contentRect = boxes.contentRect;
    this.borderBoxSize = freeze2([boxes.borderBoxSize]);
    this.contentBoxSize = freeze2([boxes.contentBoxSize]);
    this.devicePixelContentBoxSize = freeze2([boxes.devicePixelContentBoxSize]);
  }
  return ResizeObserverEntry2;
}();

// ../node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js
var calculateDepthForNode = function(node3) {
  if (isHidden(node3)) {
    return Infinity;
  }
  var depth = 0;
  var parent3 = node3.parentNode;
  while (parent3) {
    depth += 1;
    parent3 = parent3.parentNode;
  }
  return depth;
};

// ../node_modules/@juggle/resize-observer/lib/algorithms/broadcastActiveObservations.js
var broadcastActiveObservations = function() {
  var shallowestDepth = Infinity;
  var callbacks2 = [];
  resizeObservers.forEach(function processObserver(ro) {
    if (ro.activeTargets.length === 0) {
      return;
    }
    var entries = [];
    ro.activeTargets.forEach(function processTarget(ot) {
      var entry = new ResizeObserverEntry(ot.target);
      var targetDepth = calculateDepthForNode(ot.target);
      entries.push(entry);
      ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);
      if (targetDepth < shallowestDepth) {
        shallowestDepth = targetDepth;
      }
    });
    callbacks2.push(function resizeObserverCallback() {
      ro.callback.call(ro.observer, entries, ro.observer);
    });
    ro.activeTargets.splice(0, ro.activeTargets.length);
  });
  for (var _i = 0, callbacks_1 = callbacks2; _i < callbacks_1.length; _i++) {
    var callback = callbacks_1[_i];
    callback();
  }
  return shallowestDepth;
};

// ../node_modules/@juggle/resize-observer/lib/algorithms/gatherActiveObservationsAtDepth.js
var gatherActiveObservationsAtDepth = function(depth) {
  resizeObservers.forEach(function processObserver(ro) {
    ro.activeTargets.splice(0, ro.activeTargets.length);
    ro.skippedTargets.splice(0, ro.skippedTargets.length);
    ro.observationTargets.forEach(function processTarget(ot) {
      if (ot.isActive()) {
        if (calculateDepthForNode(ot.target) > depth) {
          ro.activeTargets.push(ot);
        } else {
          ro.skippedTargets.push(ot);
        }
      }
    });
  });
};

// ../node_modules/@juggle/resize-observer/lib/utils/process.js
var process2 = function() {
  var depth = 0;
  gatherActiveObservationsAtDepth(depth);
  while (hasActiveObservations()) {
    depth = broadcastActiveObservations();
    gatherActiveObservationsAtDepth(depth);
  }
  if (hasSkippedObservations()) {
    deliverResizeLoopError();
  }
  return depth > 0;
};

// ../node_modules/@juggle/resize-observer/lib/utils/queueMicroTask.js
var trigger;
var callbacks = [];
var notify = function() {
  return callbacks.splice(0).forEach(function(cb) {
    return cb();
  });
};
var queueMicroTask = function(callback) {
  if (!trigger) {
    var toggle_1 = 0;
    var el_1 = document.createTextNode("");
    var config = { characterData: true };
    new MutationObserver(function() {
      return notify();
    }).observe(el_1, config);
    trigger = function() {
      el_1.textContent = "".concat(toggle_1 ? toggle_1-- : toggle_1++);
    };
  }
  callbacks.push(callback);
  trigger();
};

// ../node_modules/@juggle/resize-observer/lib/utils/queueResizeObserver.js
var queueResizeObserver = function(cb) {
  queueMicroTask(function ResizeObserver2() {
    requestAnimationFrame(cb);
  });
};

// ../node_modules/@juggle/resize-observer/lib/utils/scheduler.js
var watching = 0;
var isWatching = function() {
  return !!watching;
};
var CATCH_PERIOD = 250;
var observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
var events = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
];
var time = function(timeout) {
  if (timeout === void 0) {
    timeout = 0;
  }
  return Date.now() + timeout;
};
var scheduled = false;
var Scheduler = function() {
  function Scheduler2() {
    var _this = this;
    this.stopped = true;
    this.listener = function() {
      return _this.schedule();
    };
  }
  Scheduler2.prototype.run = function(timeout) {
    var _this = this;
    if (timeout === void 0) {
      timeout = CATCH_PERIOD;
    }
    if (scheduled) {
      return;
    }
    scheduled = true;
    var until = time(timeout);
    queueResizeObserver(function() {
      var elementsHaveResized = false;
      try {
        elementsHaveResized = process2();
      } finally {
        scheduled = false;
        timeout = until - time();
        if (!isWatching()) {
          return;
        }
        if (elementsHaveResized) {
          _this.run(1e3);
        } else if (timeout > 0) {
          _this.run(timeout);
        } else {
          _this.start();
        }
      }
    });
  };
  Scheduler2.prototype.schedule = function() {
    this.stop();
    this.run();
  };
  Scheduler2.prototype.observe = function() {
    var _this = this;
    var cb = function() {
      return _this.observer && _this.observer.observe(document.body, observerConfig);
    };
    document.body ? cb() : global2.addEventListener("DOMContentLoaded", cb);
  };
  Scheduler2.prototype.start = function() {
    var _this = this;
    if (this.stopped) {
      this.stopped = false;
      this.observer = new MutationObserver(this.listener);
      this.observe();
      events.forEach(function(name) {
        return global2.addEventListener(name, _this.listener, true);
      });
    }
  };
  Scheduler2.prototype.stop = function() {
    var _this = this;
    if (!this.stopped) {
      this.observer && this.observer.disconnect();
      events.forEach(function(name) {
        return global2.removeEventListener(name, _this.listener, true);
      });
      this.stopped = true;
    }
  };
  return Scheduler2;
}();
var scheduler = new Scheduler();
var updateCount = function(n3) {
  !watching && n3 > 0 && scheduler.start();
  watching += n3;
  !watching && scheduler.stop();
};

// ../node_modules/@juggle/resize-observer/lib/ResizeObservation.js
var skipNotifyOnElement = function(target) {
  return !isSVG(target) && !isReplacedElement(target) && getComputedStyle(target).display === "inline";
};
var ResizeObservation = function() {
  function ResizeObservation2(target, observedBox) {
    this.target = target;
    this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
    this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  ResizeObservation2.prototype.isActive = function() {
    var size2 = calculateBoxSize(this.target, this.observedBox, true);
    if (skipNotifyOnElement(this.target)) {
      this.lastReportedSize = size2;
    }
    if (this.lastReportedSize.inlineSize !== size2.inlineSize || this.lastReportedSize.blockSize !== size2.blockSize) {
      return true;
    }
    return false;
  };
  return ResizeObservation2;
}();

// ../node_modules/@juggle/resize-observer/lib/ResizeObserverDetail.js
var ResizeObserverDetail = /* @__PURE__ */ function() {
  function ResizeObserverDetail2(resizeObserver, callback) {
    this.activeTargets = [];
    this.skippedTargets = [];
    this.observationTargets = [];
    this.observer = resizeObserver;
    this.callback = callback;
  }
  return ResizeObserverDetail2;
}();

// ../node_modules/@juggle/resize-observer/lib/ResizeObserverController.js
var observerMap = /* @__PURE__ */ new WeakMap();
var getObservationIndex = function(observationTargets, target) {
  for (var i2 = 0; i2 < observationTargets.length; i2 += 1) {
    if (observationTargets[i2].target === target) {
      return i2;
    }
  }
  return -1;
};
var ResizeObserverController = function() {
  function ResizeObserverController2() {
  }
  ResizeObserverController2.connect = function(resizeObserver, callback) {
    var detail = new ResizeObserverDetail(resizeObserver, callback);
    observerMap.set(resizeObserver, detail);
  };
  ResizeObserverController2.observe = function(resizeObserver, target, options) {
    var detail = observerMap.get(resizeObserver);
    var firstObservation = detail.observationTargets.length === 0;
    if (getObservationIndex(detail.observationTargets, target) < 0) {
      firstObservation && resizeObservers.push(detail);
      detail.observationTargets.push(new ResizeObservation(target, options && options.box));
      updateCount(1);
      scheduler.schedule();
    }
  };
  ResizeObserverController2.unobserve = function(resizeObserver, target) {
    var detail = observerMap.get(resizeObserver);
    var index = getObservationIndex(detail.observationTargets, target);
    var lastObservation = detail.observationTargets.length === 1;
    if (index >= 0) {
      lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1);
      detail.observationTargets.splice(index, 1);
      updateCount(-1);
    }
  };
  ResizeObserverController2.disconnect = function(resizeObserver) {
    var _this = this;
    var detail = observerMap.get(resizeObserver);
    detail.observationTargets.slice().forEach(function(ot) {
      return _this.unobserve(resizeObserver, ot.target);
    });
    detail.activeTargets.splice(0, detail.activeTargets.length);
  };
  return ResizeObserverController2;
}();

// ../node_modules/@juggle/resize-observer/lib/ResizeObserver.js
var ResizeObserver = function() {
  function ResizeObserver2(callback) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    }
    if (typeof callback !== "function") {
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    }
    ResizeObserverController.connect(this, callback);
  }
  ResizeObserver2.prototype.observe = function(target, options) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    }
    if (!isElement2(target)) {
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    }
    ResizeObserverController.observe(this, target, options);
  };
  ResizeObserver2.prototype.unobserve = function(target) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    }
    if (!isElement2(target)) {
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    }
    ResizeObserverController.unobserve(this, target);
  };
  ResizeObserver2.prototype.disconnect = function() {
    ResizeObserverController.disconnect(this);
  };
  ResizeObserver2.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  };
  return ResizeObserver2;
}();

// ../node_modules/slate-react/dist/index.es.js
var import_is_hotkey = __toESM(require_lib());
var import_react_dom = __toESM(require_react_dom());
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties2(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose2(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
var n2 = 0;
var Key = class {
  constructor() {
    this.id = "".concat(n2++);
  }
};
var NODE_TO_INDEX = /* @__PURE__ */ new WeakMap();
var NODE_TO_PARENT = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_WINDOW = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_ELEMENT = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_PLACEHOLDER_ELEMENT = /* @__PURE__ */ new WeakMap();
var ELEMENT_TO_NODE = /* @__PURE__ */ new WeakMap();
var NODE_TO_ELEMENT = /* @__PURE__ */ new WeakMap();
var NODE_TO_KEY = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_KEY_TO_ELEMENT = /* @__PURE__ */ new WeakMap();
var IS_READ_ONLY = /* @__PURE__ */ new WeakMap();
var IS_FOCUSED = /* @__PURE__ */ new WeakMap();
var IS_COMPOSING = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_USER_SELECTION = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_ON_CHANGE = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_SCHEDULE_FLUSH = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_PENDING_INSERTION_MARKS = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_USER_MARKS = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_PENDING_DIFFS = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_PENDING_ACTION = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_PENDING_SELECTION = /* @__PURE__ */ new WeakMap();
var EDITOR_TO_FORCE_RENDER = /* @__PURE__ */ new WeakMap();
var PLACEHOLDER_SYMBOL = Symbol("placeholder");
var MARK_PLACEHOLDER_SYMBOL = Symbol("mark-placeholder");
var DOMText = globalThis.Text;
var getDefaultView = (value) => {
  return value && value.ownerDocument && value.ownerDocument.defaultView || null;
};
var isDOMComment = (value) => {
  return isDOMNode(value) && value.nodeType === 8;
};
var isDOMElement = (value) => {
  return isDOMNode(value) && value.nodeType === 1;
};
var isDOMNode = (value) => {
  var window2 = getDefaultView(value);
  return !!window2 && value instanceof window2.Node;
};
var isDOMSelection = (value) => {
  var window2 = value && value.anchorNode && getDefaultView(value.anchorNode);
  return !!window2 && value instanceof window2.Selection;
};
var isDOMText = (value) => {
  return isDOMNode(value) && value.nodeType === 3;
};
var isPlainTextOnlyPaste = (event) => {
  return event.clipboardData && event.clipboardData.getData("text/plain") !== "" && event.clipboardData.types.length === 1;
};
var normalizeDOMPoint = (domPoint) => {
  var [node3, offset] = domPoint;
  if (isDOMElement(node3) && node3.childNodes.length) {
    var isLast = offset === node3.childNodes.length;
    var index = isLast ? offset - 1 : offset;
    [node3, index] = getEditableChildAndIndex(node3, index, isLast ? "backward" : "forward");
    isLast = index < offset;
    while (isDOMElement(node3) && node3.childNodes.length) {
      var i2 = isLast ? node3.childNodes.length - 1 : 0;
      node3 = getEditableChild(node3, i2, isLast ? "backward" : "forward");
    }
    offset = isLast && node3.textContent != null ? node3.textContent.length : 0;
  }
  return [node3, offset];
};
var hasShadowRoot = (node3) => {
  var parent3 = node3 && node3.parentNode;
  while (parent3) {
    if (parent3.toString() === "[object ShadowRoot]") {
      return true;
    }
    parent3 = parent3.parentNode;
  }
  return false;
};
var getEditableChildAndIndex = (parent3, index, direction) => {
  var {
    childNodes
  } = parent3;
  var child = childNodes[index];
  var i2 = index;
  var triedForward = false;
  var triedBackward = false;
  while (isDOMComment(child) || isDOMElement(child) && child.childNodes.length === 0 || isDOMElement(child) && child.getAttribute("contenteditable") === "false") {
    if (triedForward && triedBackward) {
      break;
    }
    if (i2 >= childNodes.length) {
      triedForward = true;
      i2 = index - 1;
      direction = "backward";
      continue;
    }
    if (i2 < 0) {
      triedBackward = true;
      i2 = index + 1;
      direction = "forward";
      continue;
    }
    child = childNodes[i2];
    index = i2;
    i2 += direction === "forward" ? 1 : -1;
  }
  return [child, index];
};
var getEditableChild = (parent3, index, direction) => {
  var [child] = getEditableChildAndIndex(parent3, index, direction);
  return child;
};
var getPlainText = (domNode) => {
  var text = "";
  if (isDOMText(domNode) && domNode.nodeValue) {
    return domNode.nodeValue;
  }
  if (isDOMElement(domNode)) {
    for (var childNode of Array.from(domNode.childNodes)) {
      text += getPlainText(childNode);
    }
    var display = getComputedStyle(domNode).getPropertyValue("display");
    if (display === "block" || display === "list" || domNode.tagName === "BR") {
      text += "\n";
    }
  }
  return text;
};
var catchSlateFragment = /data-slate-fragment="(.+?)"/m;
var getSlateFragmentAttribute = (dataTransfer) => {
  var htmlData = dataTransfer.getData("text/html");
  var [, fragment2] = htmlData.match(catchSlateFragment) || [];
  return fragment2;
};
var isTrackedMutation = (editor, mutation, batch) => {
  var {
    target
  } = mutation;
  if (isDOMElement(target) && target.matches('[contentEditable="false"]')) {
    return false;
  }
  var {
    document: document2
  } = ReactEditor.getWindow(editor);
  if (document2.contains(target)) {
    return ReactEditor.hasDOMNode(editor, target, {
      editable: true
    });
  }
  var parentMutation = batch.find((_ref) => {
    var {
      addedNodes,
      removedNodes
    } = _ref;
    for (var node3 of addedNodes) {
      if (node3 === target || node3.contains(target)) {
        return true;
      }
    }
    for (var _node of removedNodes) {
      if (_node === target || _node.contains(target)) {
        return true;
      }
    }
  });
  if (!parentMutation || parentMutation === mutation) {
    return false;
  }
  return isTrackedMutation(editor, parentMutation, batch);
};
var IS_REACT_VERSION_17_OR_ABOVE = parseInt(import_react.default.version.split(".")[0], 10) >= 17;
var IS_IOS = typeof navigator !== "undefined" && typeof window !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var IS_APPLE = typeof navigator !== "undefined" && /Mac OS X/.test(navigator.userAgent);
var IS_ANDROID = typeof navigator !== "undefined" && /Android/.test(navigator.userAgent);
var IS_FIREFOX = typeof navigator !== "undefined" && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
var IS_SAFARI = typeof navigator !== "undefined" && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent);
var IS_EDGE_LEGACY = typeof navigator !== "undefined" && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent);
var IS_CHROME = typeof navigator !== "undefined" && /Chrome/i.test(navigator.userAgent);
var IS_CHROME_LEGACY = typeof navigator !== "undefined" && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent);
var IS_FIREFOX_LEGACY = typeof navigator !== "undefined" && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent);
var IS_UC_MOBILE = typeof navigator !== "undefined" && /.*UCBrowser/.test(navigator.userAgent);
var IS_WECHATBROWSER = typeof navigator !== "undefined" && /.*Wechat/.test(navigator.userAgent);
var CAN_USE_DOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
var HAS_BEFORE_INPUT_SUPPORT = !IS_CHROME_LEGACY && !IS_EDGE_LEGACY && // globalThis is undefined in older browsers
typeof globalThis !== "undefined" && globalThis.InputEvent && // @ts-ignore The `getTargetRanges` property isn't recognized.
typeof globalThis.InputEvent.prototype.getTargetRanges === "function";
var ReactEditor = {
  /**
   * Check if the user is currently composing inside the editor.
   */
  isComposing(editor) {
    return !!IS_COMPOSING.get(editor);
  },
  /**
   * Return the host window of the current editor.
   */
  getWindow(editor) {
    var window2 = EDITOR_TO_WINDOW.get(editor);
    if (!window2) {
      throw new Error("Unable to find a host window element for this editor");
    }
    return window2;
  },
  /**
   * Find a key for a Slate node.
   */
  findKey(editor, node3) {
    var key = NODE_TO_KEY.get(node3);
    if (!key) {
      key = new Key();
      NODE_TO_KEY.set(node3, key);
    }
    return key;
  },
  /**
   * Find the path of Slate node.
   */
  findPath(editor, node3) {
    var path3 = [];
    var child = node3;
    while (true) {
      var parent3 = NODE_TO_PARENT.get(child);
      if (parent3 == null) {
        if (Editor.isEditor(child)) {
          return path3;
        } else {
          break;
        }
      }
      var i2 = NODE_TO_INDEX.get(child);
      if (i2 == null) {
        break;
      }
      path3.unshift(i2);
      child = parent3;
    }
    throw new Error("Unable to find the path for Slate node: ".concat(Scrubber.stringify(node3)));
  },
  /**
   * Find the DOM node that implements DocumentOrShadowRoot for the editor.
   */
  findDocumentOrShadowRoot(editor) {
    var el = ReactEditor.toDOMNode(editor, editor);
    var root = el.getRootNode();
    if ((root instanceof Document || root instanceof ShadowRoot) && root.getSelection != null) {
      return root;
    }
    return el.ownerDocument;
  },
  /**
   * Check if the editor is focused.
   */
  isFocused(editor) {
    return !!IS_FOCUSED.get(editor);
  },
  /**
   * Check if the editor is in read-only mode.
   */
  isReadOnly(editor) {
    return !!IS_READ_ONLY.get(editor);
  },
  /**
   * Blur the editor.
   */
  blur(editor) {
    var el = ReactEditor.toDOMNode(editor, editor);
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    IS_FOCUSED.set(editor, false);
    if (root.activeElement === el) {
      el.blur();
    }
  },
  /**
   * Focus the editor.
   */
  focus(editor) {
    var el = ReactEditor.toDOMNode(editor, editor);
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    IS_FOCUSED.set(editor, true);
    if (root.activeElement !== el) {
      el.focus({
        preventScroll: true
      });
    }
  },
  /**
   * Deselect the editor.
   */
  deselect(editor) {
    var {
      selection
    } = editor;
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    var domSelection = root.getSelection();
    if (domSelection && domSelection.rangeCount > 0) {
      domSelection.removeAllRanges();
    }
    if (selection) {
      Transforms.deselect(editor);
    }
  },
  /**
   * Check if a DOM node is within the editor.
   */
  hasDOMNode(editor, target) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      editable = false
    } = options;
    var editorEl = ReactEditor.toDOMNode(editor, editor);
    var targetEl;
    try {
      targetEl = isDOMElement(target) ? target : target.parentElement;
    } catch (err) {
      if (!err.message.includes('Permission denied to access property "nodeType"')) {
        throw err;
      }
    }
    if (!targetEl) {
      return false;
    }
    return targetEl.closest("[data-slate-editor]") === editorEl && (!editable || targetEl.isContentEditable ? true : typeof targetEl.isContentEditable === "boolean" && // isContentEditable exists only on HTMLElement, and on other nodes it will be undefined
    // this is the core logic that lets you know you got the right editor.selection instead of null when editor is contenteditable="false"(readOnly)
    targetEl.closest('[contenteditable="false"]') === editorEl || !!targetEl.getAttribute("data-slate-zero-width"));
  },
  /**
   * Insert data from a `DataTransfer` into the editor.
   */
  insertData(editor, data) {
    editor.insertData(data);
  },
  /**
   * Insert fragment data from a `DataTransfer` into the editor.
   */
  insertFragmentData(editor, data) {
    return editor.insertFragmentData(data);
  },
  /**
   * Insert text data from a `DataTransfer` into the editor.
   */
  insertTextData(editor, data) {
    return editor.insertTextData(data);
  },
  /**
   * Sets data from the currently selected fragment on a `DataTransfer`.
   */
  setFragmentData(editor, data, originEvent) {
    editor.setFragmentData(data, originEvent);
  },
  /**
   * Find the native DOM element from a Slate node.
   */
  toDOMNode(editor, node3) {
    var KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor);
    var domNode = Editor.isEditor(node3) ? EDITOR_TO_ELEMENT.get(editor) : KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.get(ReactEditor.findKey(editor, node3));
    if (!domNode) {
      throw new Error("Cannot resolve a DOM node from Slate node: ".concat(Scrubber.stringify(node3)));
    }
    return domNode;
  },
  /**
   * Find a native DOM selection point from a Slate point.
   */
  toDOMPoint(editor, point3) {
    var [node3] = Editor.node(editor, point3.path);
    var el = ReactEditor.toDOMNode(editor, node3);
    var domPoint;
    if (Editor.void(editor, {
      at: point3
    })) {
      point3 = {
        path: point3.path,
        offset: 0
      };
    }
    var selector = "[data-slate-string], [data-slate-zero-width]";
    var texts = Array.from(el.querySelectorAll(selector));
    var start2 = 0;
    for (var i2 = 0; i2 < texts.length; i2++) {
      var text = texts[i2];
      var domNode = text.childNodes[0];
      if (domNode == null || domNode.textContent == null) {
        continue;
      }
      var {
        length
      } = domNode.textContent;
      var attr = text.getAttribute("data-slate-length");
      var trueLength = attr == null ? length : parseInt(attr, 10);
      var end2 = start2 + trueLength;
      var nextText = texts[i2 + 1];
      if (point3.offset === end2 && nextText !== null && nextText !== void 0 && nextText.hasAttribute("data-slate-mark-placeholder")) {
        var _nextText$textContent;
        var domText = nextText.childNodes[0];
        domPoint = [
          // COMPAT: If we don't explicity set the dom point to be on the actual
          // dom text element, chrome will put the selection behind the actual dom
          // text element, causing domRange.getBoundingClientRect() calls on a collapsed
          // selection to return incorrect zero values (https://bugs.chromium.org/p/chromium/issues/detail?id=435438)
          // which will cause issues when scrolling to it.
          domText instanceof DOMText ? domText : nextText,
          (_nextText$textContent = nextText.textContent) !== null && _nextText$textContent !== void 0 && _nextText$textContent.startsWith("\uFEFF") ? 1 : 0
        ];
        break;
      }
      if (point3.offset <= end2) {
        var offset = Math.min(length, Math.max(0, point3.offset - start2));
        domPoint = [domNode, offset];
        break;
      }
      start2 = end2;
    }
    if (!domPoint) {
      throw new Error("Cannot resolve a DOM point from Slate point: ".concat(Scrubber.stringify(point3)));
    }
    return domPoint;
  },
  /**
   * Find a native DOM range from a Slate `range`.
   *
   * Notice: the returned range will always be ordinal regardless of the direction of Slate `range` due to DOM API limit.
   *
   * there is no way to create a reverse DOM Range using Range.setStart/setEnd
   * according to https://dom.spec.whatwg.org/#concept-range-bp-set.
   */
  toDOMRange(editor, range2) {
    var {
      anchor,
      focus
    } = range2;
    var isBackward = Range.isBackward(range2);
    var domAnchor = ReactEditor.toDOMPoint(editor, anchor);
    var domFocus = Range.isCollapsed(range2) ? domAnchor : ReactEditor.toDOMPoint(editor, focus);
    var window2 = ReactEditor.getWindow(editor);
    var domRange = window2.document.createRange();
    var [startNode, startOffset] = isBackward ? domFocus : domAnchor;
    var [endNode, endOffset] = isBackward ? domAnchor : domFocus;
    var startEl = isDOMElement(startNode) ? startNode : startNode.parentElement;
    var isStartAtZeroWidth = !!startEl.getAttribute("data-slate-zero-width");
    var endEl = isDOMElement(endNode) ? endNode : endNode.parentElement;
    var isEndAtZeroWidth = !!endEl.getAttribute("data-slate-zero-width");
    domRange.setStart(startNode, isStartAtZeroWidth ? 1 : startOffset);
    domRange.setEnd(endNode, isEndAtZeroWidth ? 1 : endOffset);
    return domRange;
  },
  /**
   * Find a Slate node from a native DOM `element`.
   */
  toSlateNode(editor, domNode) {
    var domEl = isDOMElement(domNode) ? domNode : domNode.parentElement;
    if (domEl && !domEl.hasAttribute("data-slate-node")) {
      domEl = domEl.closest("[data-slate-node]");
    }
    var node3 = domEl ? ELEMENT_TO_NODE.get(domEl) : null;
    if (!node3) {
      throw new Error("Cannot resolve a Slate node from DOM node: ".concat(domEl));
    }
    return node3;
  },
  /**
   * Get the target range from a DOM `event`.
   */
  findEventRange(editor, event) {
    if ("nativeEvent" in event) {
      event = event.nativeEvent;
    }
    var {
      clientX: x,
      clientY: y,
      target
    } = event;
    if (x == null || y == null) {
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(event));
    }
    var node3 = ReactEditor.toSlateNode(editor, event.target);
    var path3 = ReactEditor.findPath(editor, node3);
    if (Element2.isElement(node3) && Editor.isVoid(editor, node3)) {
      var rect = target.getBoundingClientRect();
      var isPrev = editor.isInline(node3) ? x - rect.left < rect.left + rect.width - x : y - rect.top < rect.top + rect.height - y;
      var edge = Editor.point(editor, path3, {
        edge: isPrev ? "start" : "end"
      });
      var point3 = isPrev ? Editor.before(editor, edge) : Editor.after(editor, edge);
      if (point3) {
        var _range = Editor.range(editor, point3);
        return _range;
      }
    }
    var domRange;
    var {
      document: document2
    } = ReactEditor.getWindow(editor);
    if (document2.caretRangeFromPoint) {
      domRange = document2.caretRangeFromPoint(x, y);
    } else {
      var position = document2.caretPositionFromPoint(x, y);
      if (position) {
        domRange = document2.createRange();
        domRange.setStart(position.offsetNode, position.offset);
        domRange.setEnd(position.offsetNode, position.offset);
      }
    }
    if (!domRange) {
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(event));
    }
    var range2 = ReactEditor.toSlateRange(editor, domRange, {
      exactMatch: false,
      suppressThrow: false
    });
    return range2;
  },
  /**
   * Find a Slate point from a DOM selection's `domNode` and `domOffset`.
   */
  toSlatePoint(editor, domPoint, options) {
    var {
      exactMatch,
      suppressThrow
    } = options;
    var [nearestNode, nearestOffset] = exactMatch ? domPoint : normalizeDOMPoint(domPoint);
    var parentNode = nearestNode.parentNode;
    var textNode = null;
    var offset = 0;
    if (parentNode) {
      var _domNode$textContent, _domNode$textContent2;
      var editorEl = ReactEditor.toDOMNode(editor, editor);
      var potentialVoidNode = parentNode.closest('[data-slate-void="true"]');
      var voidNode = potentialVoidNode && editorEl.contains(potentialVoidNode) ? potentialVoidNode : null;
      var leafNode = parentNode.closest("[data-slate-leaf]");
      var domNode = null;
      if (leafNode) {
        textNode = leafNode.closest('[data-slate-node="text"]');
        if (textNode) {
          var window2 = ReactEditor.getWindow(editor);
          var range2 = window2.document.createRange();
          range2.setStart(textNode, 0);
          range2.setEnd(nearestNode, nearestOffset);
          var contents = range2.cloneContents();
          var removals = [...Array.prototype.slice.call(contents.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(contents.querySelectorAll("[contenteditable=false]"))];
          removals.forEach((el) => {
            if (IS_ANDROID && !exactMatch && el.hasAttribute("data-slate-zero-width") && el.textContent.length > 0 && el.textContext !== "\uFEFF") {
              if (el.textContent.startsWith("\uFEFF")) {
                el.textContent = el.textContent.slice(1);
              }
              return;
            }
            el.parentNode.removeChild(el);
          });
          offset = contents.textContent.length;
          domNode = textNode;
        }
      } else if (voidNode) {
        var leafNodes = voidNode.querySelectorAll("[data-slate-leaf]");
        for (var index = 0; index < leafNodes.length; index++) {
          var current2 = leafNodes[index];
          if (ReactEditor.hasDOMNode(editor, current2)) {
            leafNode = current2;
            break;
          }
        }
        if (!leafNode) {
          offset = 1;
        } else {
          textNode = leafNode.closest('[data-slate-node="text"]');
          domNode = leafNode;
          offset = domNode.textContent.length;
          domNode.querySelectorAll("[data-slate-zero-width]").forEach((el) => {
            offset -= el.textContent.length;
          });
        }
      }
      if (domNode && offset === domNode.textContent.length && // COMPAT: Android IMEs might remove the zero width space while composing,
      // and we don't add it for line-breaks.
      IS_ANDROID && domNode.getAttribute("data-slate-zero-width") === "z" && (_domNode$textContent = domNode.textContent) !== null && _domNode$textContent !== void 0 && _domNode$textContent.startsWith("\uFEFF") && (parentNode.hasAttribute("data-slate-zero-width") || IS_FIREFOX && (_domNode$textContent2 = domNode.textContent) !== null && _domNode$textContent2 !== void 0 && _domNode$textContent2.endsWith("\n\n"))) {
        offset--;
      }
    }
    if (IS_ANDROID && !textNode && !exactMatch) {
      var node3 = parentNode.hasAttribute("data-slate-node") ? parentNode : parentNode.closest("[data-slate-node]");
      if (node3 && ReactEditor.hasDOMNode(editor, node3, {
        editable: true
      })) {
        var _slateNode = ReactEditor.toSlateNode(editor, node3);
        var {
          path: _path,
          offset: _offset
        } = Editor.start(editor, ReactEditor.findPath(editor, _slateNode));
        if (!node3.querySelector("[data-slate-leaf]")) {
          _offset = nearestOffset;
        }
        return {
          path: _path,
          offset: _offset
        };
      }
    }
    if (!textNode) {
      if (suppressThrow) {
        return null;
      }
      throw new Error("Cannot resolve a Slate point from DOM point: ".concat(domPoint));
    }
    var slateNode = ReactEditor.toSlateNode(editor, textNode);
    var path3 = ReactEditor.findPath(editor, slateNode);
    return {
      path: path3,
      offset
    };
  },
  /**
   * Find a Slate range from a DOM range or selection.
   */
  toSlateRange(editor, domRange, options) {
    var {
      exactMatch,
      suppressThrow
    } = options;
    var el = isDOMSelection(domRange) ? domRange.anchorNode : domRange.startContainer;
    var anchorNode;
    var anchorOffset;
    var focusNode;
    var focusOffset;
    var isCollapsed;
    if (el) {
      if (isDOMSelection(domRange)) {
        anchorNode = domRange.anchorNode;
        anchorOffset = domRange.anchorOffset;
        focusNode = domRange.focusNode;
        focusOffset = domRange.focusOffset;
        if (IS_CHROME && hasShadowRoot(anchorNode)) {
          isCollapsed = domRange.anchorNode === domRange.focusNode && domRange.anchorOffset === domRange.focusOffset;
        } else {
          isCollapsed = domRange.isCollapsed;
        }
      } else {
        anchorNode = domRange.startContainer;
        anchorOffset = domRange.startOffset;
        focusNode = domRange.endContainer;
        focusOffset = domRange.endOffset;
        isCollapsed = domRange.collapsed;
      }
    }
    if (anchorNode == null || focusNode == null || anchorOffset == null || focusOffset == null) {
      throw new Error("Cannot resolve a Slate range from DOM range: ".concat(domRange));
    }
    var anchor = ReactEditor.toSlatePoint(editor, [anchorNode, anchorOffset], {
      exactMatch,
      suppressThrow
    });
    if (!anchor) {
      return null;
    }
    var focus = isCollapsed ? anchor : ReactEditor.toSlatePoint(editor, [focusNode, focusOffset], {
      exactMatch,
      suppressThrow
    });
    if (!focus) {
      return null;
    }
    if (IS_FIREFOX && !isCollapsed && anchorNode !== focusNode) {
      var isEnd2 = Editor.isEnd(editor, anchor, anchor.path);
      var isStart2 = Editor.isStart(editor, focus, focus.path);
      if (isEnd2) {
        var after3 = Editor.after(editor, anchor);
        anchor = after3 || anchor;
      }
      if (isStart2) {
        var before3 = Editor.before(editor, focus);
        focus = before3 || focus;
      }
    }
    var range2 = {
      anchor,
      focus
    };
    if (Range.isExpanded(range2) && Range.isForward(range2) && isDOMElement(focusNode) && Editor.void(editor, {
      at: range2.focus,
      mode: "highest"
    })) {
      range2 = Editor.unhangRange(editor, range2, {
        voids: true
      });
    }
    return range2;
  },
  hasRange(editor, range2) {
    var {
      anchor,
      focus
    } = range2;
    return Editor.hasPath(editor, anchor.path) && Editor.hasPath(editor, focus.path);
  },
  /**
   * Check if the target is in the editor.
   */
  hasTarget(editor, target) {
    return isDOMNode(target) && ReactEditor.hasDOMNode(editor, target);
  },
  /**
   * Check if the target is editable and in the editor.
   */
  hasEditableTarget(editor, target) {
    return isDOMNode(target) && ReactEditor.hasDOMNode(editor, target, {
      editable: true
    });
  },
  /**
   * Check if the target can be selectable
   */
  hasSelectableTarget(editor, target) {
    return ReactEditor.hasEditableTarget(editor, target) || ReactEditor.isTargetInsideNonReadonlyVoid(editor, target);
  },
  /**
   * Check if the target is inside void and in an non-readonly editor.
   */
  isTargetInsideNonReadonlyVoid(editor, target) {
    if (IS_READ_ONLY.get(editor))
      return false;
    var slateNode = ReactEditor.hasTarget(editor, target) && ReactEditor.toSlateNode(editor, target);
    return Element2.isElement(slateNode) && Editor.isVoid(editor, slateNode);
  },
  /**
   * Experimental and android specific: Flush all pending diffs and cancel composition at the next possible time.
   */
  androidScheduleFlush(editor) {
    var _EDITOR_TO_SCHEDULE_F;
    (_EDITOR_TO_SCHEDULE_F = EDITOR_TO_SCHEDULE_FLUSH.get(editor)) === null || _EDITOR_TO_SCHEDULE_F === void 0 ? void 0 : _EDITOR_TO_SCHEDULE_F();
  },
  /**
   * Experimental and android specific: Get pending diffs
   */
  androidPendingDiffs(editor) {
    return EDITOR_TO_PENDING_DIFFS.get(editor);
  }
};
var useIsomorphicLayoutEffect = CAN_USE_DOM ? import_react.useLayoutEffect : import_react.useEffect;
var _excluded$32 = ["anchor", "focus"];
var _excluded2$12 = ["anchor", "focus"];
var shallowCompare = (obj1, obj2) => Object.keys(obj1).length === Object.keys(obj2).length && Object.keys(obj1).every((key) => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);
var isDecoratorRangeListEqual = (list, another) => {
  if (list.length !== another.length) {
    return false;
  }
  for (var i2 = 0; i2 < list.length; i2++) {
    var range2 = list[i2];
    var other = another[i2];
    var rangeOwnProps = _objectWithoutProperties2(range2, _excluded$32);
    var otherOwnProps = _objectWithoutProperties2(other, _excluded2$12);
    if (!Range.equals(range2, other) || range2[PLACEHOLDER_SYMBOL] !== other[PLACEHOLDER_SYMBOL] || !shallowCompare(rangeOwnProps, otherOwnProps)) {
      return false;
    }
  }
  return true;
};
var String2 = (props) => {
  var {
    isLast,
    leaf: leaf3,
    parent: parent3,
    text
  } = props;
  var editor = useSlateStatic();
  var path3 = ReactEditor.findPath(editor, text);
  var parentPath = Path.parent(path3);
  var isMarkPlaceholder = leaf3[MARK_PLACEHOLDER_SYMBOL] === true;
  if (editor.isVoid(parent3)) {
    return /* @__PURE__ */ import_react.default.createElement(ZeroWidthString, {
      length: Node.string(parent3).length
    });
  }
  if (leaf3.text === "" && parent3.children[parent3.children.length - 1] === text && !editor.isInline(parent3) && Editor.string(editor, parentPath) === "") {
    return /* @__PURE__ */ import_react.default.createElement(ZeroWidthString, {
      isLineBreak: true,
      isMarkPlaceholder
    });
  }
  if (leaf3.text === "") {
    return /* @__PURE__ */ import_react.default.createElement(ZeroWidthString, {
      isMarkPlaceholder
    });
  }
  if (isLast && leaf3.text.slice(-1) === "\n") {
    return /* @__PURE__ */ import_react.default.createElement(TextString, {
      isTrailing: true,
      text: leaf3.text
    });
  }
  return /* @__PURE__ */ import_react.default.createElement(TextString, {
    text: leaf3.text
  });
};
var TextString = (props) => {
  var {
    text,
    isTrailing = false
  } = props;
  var ref = (0, import_react.useRef)(null);
  var getTextContent = () => {
    return "".concat(text !== null && text !== void 0 ? text : "").concat(isTrailing ? "\n" : "");
  };
  useIsomorphicLayoutEffect(() => {
    var textWithTrailing = getTextContent();
    if (ref.current && ref.current.textContent !== textWithTrailing) {
      ref.current.textContent = textWithTrailing;
    }
  });
  if (!ref.current) {
    return /* @__PURE__ */ import_react.default.createElement("span", {
      "data-slate-string": true,
      ref
    }, getTextContent());
  }
  return /* @__PURE__ */ import_react.default.createElement("span", {
    "data-slate-string": true,
    ref
  });
};
var ZeroWidthString = (props) => {
  var {
    length = 0,
    isLineBreak = false,
    isMarkPlaceholder = false
  } = props;
  var attributes = {
    "data-slate-zero-width": isLineBreak ? "n" : "z",
    "data-slate-length": length
  };
  if (isMarkPlaceholder) {
    attributes["data-slate-mark-placeholder"] = true;
  }
  return /* @__PURE__ */ import_react.default.createElement("span", Object.assign({}, attributes), !IS_ANDROID || !isLineBreak ? "\uFEFF" : null, isLineBreak ? /* @__PURE__ */ import_react.default.createElement("br", null) : null);
};
var EditorContext = /* @__PURE__ */ (0, import_react.createContext)(null);
var useSlateStatic = () => {
  var editor = (0, import_react.useContext)(EditorContext);
  if (!editor) {
    throw new Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
  }
  return editor;
};
var Leaf = (props) => {
  var {
    leaf: leaf3,
    isLast,
    text,
    parent: parent3,
    renderPlaceholder,
    renderLeaf = (props2) => /* @__PURE__ */ import_react.default.createElement(DefaultLeaf, Object.assign({}, props2))
  } = props;
  var lastPlaceholderRef = (0, import_react.useRef)(null);
  var placeholderRef = (0, import_react.useRef)(null);
  var editor = useSlateStatic();
  var placeholderResizeObserver = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    return () => {
      if (placeholderResizeObserver.current) {
        placeholderResizeObserver.current.disconnect();
      }
    };
  }, []);
  (0, import_react.useEffect)(() => {
    var placeholderEl = placeholderRef === null || placeholderRef === void 0 ? void 0 : placeholderRef.current;
    if (placeholderEl) {
      EDITOR_TO_PLACEHOLDER_ELEMENT.set(editor, placeholderEl);
    } else {
      EDITOR_TO_PLACEHOLDER_ELEMENT.delete(editor);
    }
    if (placeholderResizeObserver.current) {
      placeholderResizeObserver.current.disconnect();
      if (placeholderEl)
        placeholderResizeObserver.current.observe(placeholderEl);
    } else if (placeholderEl) {
      var ResizeObserver$1 = window.ResizeObserver || ResizeObserver;
      placeholderResizeObserver.current = new ResizeObserver$1(() => {
        var forceRender2 = EDITOR_TO_FORCE_RENDER.get(editor);
        forceRender2 === null || forceRender2 === void 0 ? void 0 : forceRender2();
      });
      placeholderResizeObserver.current.observe(placeholderEl);
    }
    if (!placeholderEl && lastPlaceholderRef.current) {
      var forceRender = EDITOR_TO_FORCE_RENDER.get(editor);
      forceRender === null || forceRender === void 0 ? void 0 : forceRender();
    }
    lastPlaceholderRef.current = placeholderRef.current;
    return () => {
      EDITOR_TO_PLACEHOLDER_ELEMENT.delete(editor);
    };
  }, [placeholderRef, leaf3]);
  var children = /* @__PURE__ */ import_react.default.createElement(String2, {
    isLast,
    leaf: leaf3,
    parent: parent3,
    text
  });
  if (leaf3[PLACEHOLDER_SYMBOL]) {
    var placeholderProps = {
      children: leaf3.placeholder,
      attributes: {
        "data-slate-placeholder": true,
        style: {
          position: "absolute",
          pointerEvents: "none",
          width: "100%",
          maxWidth: "100%",
          display: "block",
          opacity: "0.333",
          userSelect: "none",
          textDecoration: "none"
        },
        contentEditable: false,
        ref: placeholderRef
      }
    };
    children = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, renderPlaceholder(placeholderProps), children);
  }
  var attributes = {
    "data-slate-leaf": true
  };
  return renderLeaf({
    attributes,
    children,
    leaf: leaf3,
    text
  });
};
var MemoizedLeaf = /* @__PURE__ */ import_react.default.memo(Leaf, (prev, next3) => {
  return next3.parent === prev.parent && next3.isLast === prev.isLast && next3.renderLeaf === prev.renderLeaf && next3.renderPlaceholder === prev.renderPlaceholder && next3.text === prev.text && Text.equals(next3.leaf, prev.leaf) && next3.leaf[PLACEHOLDER_SYMBOL] === prev.leaf[PLACEHOLDER_SYMBOL];
});
var DefaultLeaf = (props) => {
  var {
    attributes,
    children
  } = props;
  return /* @__PURE__ */ import_react.default.createElement("span", Object.assign({}, attributes), children);
};
var Text2 = (props) => {
  var {
    decorations,
    isLast,
    parent: parent3,
    renderPlaceholder,
    renderLeaf,
    text
  } = props;
  var editor = useSlateStatic();
  var ref = (0, import_react.useRef)(null);
  var leaves = Text.decorations(text, decorations);
  var key = ReactEditor.findKey(editor, text);
  var children = [];
  for (var i2 = 0; i2 < leaves.length; i2++) {
    var leaf3 = leaves[i2];
    children.push(/* @__PURE__ */ import_react.default.createElement(MemoizedLeaf, {
      isLast: isLast && i2 === leaves.length - 1,
      key: "".concat(key.id, "-").concat(i2),
      renderPlaceholder,
      leaf: leaf3,
      text,
      parent: parent3,
      renderLeaf
    }));
  }
  useIsomorphicLayoutEffect(() => {
    var KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor);
    if (ref.current) {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.set(key, ref.current);
      NODE_TO_ELEMENT.set(text, ref.current);
      ELEMENT_TO_NODE.set(ref.current, text);
    } else {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.delete(key);
      NODE_TO_ELEMENT.delete(text);
    }
  });
  return /* @__PURE__ */ import_react.default.createElement("span", {
    "data-slate-node": "text",
    ref
  }, children);
};
var MemoizedText = /* @__PURE__ */ import_react.default.memo(Text2, (prev, next3) => {
  return next3.parent === prev.parent && next3.isLast === prev.isLast && next3.renderLeaf === prev.renderLeaf && next3.text === prev.text && isDecoratorRangeListEqual(next3.decorations, prev.decorations);
});
var Element3 = (props) => {
  var {
    decorations,
    element,
    renderElement = (p) => /* @__PURE__ */ import_react.default.createElement(DefaultElement, Object.assign({}, p)),
    renderPlaceholder,
    renderLeaf,
    selection
  } = props;
  var editor = useSlateStatic();
  var readOnly = useReadOnly();
  var isInline2 = editor.isInline(element);
  var key = ReactEditor.findKey(editor, element);
  var ref = (0, import_react.useCallback)((ref2) => {
    var KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor);
    if (ref2) {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.set(key, ref2);
      NODE_TO_ELEMENT.set(element, ref2);
      ELEMENT_TO_NODE.set(ref2, element);
    } else {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.delete(key);
      NODE_TO_ELEMENT.delete(element);
    }
  }, [editor, key, element]);
  var children = useChildren({
    decorations,
    node: element,
    renderElement,
    renderPlaceholder,
    renderLeaf,
    selection
  });
  var attributes = {
    "data-slate-node": "element",
    ref
  };
  if (isInline2) {
    attributes["data-slate-inline"] = true;
  }
  if (!isInline2 && Editor.hasInlines(editor, element)) {
    var text = Node.string(element);
    var dir = (0, import_direction.default)(text);
    if (dir === "rtl") {
      attributes.dir = dir;
    }
  }
  if (Editor.isVoid(editor, element)) {
    attributes["data-slate-void"] = true;
    if (!readOnly && isInline2) {
      attributes.contentEditable = false;
    }
    var Tag = isInline2 ? "span" : "div";
    var [[_text]] = Node.texts(element);
    children = /* @__PURE__ */ import_react.default.createElement(Tag, {
      "data-slate-spacer": true,
      style: {
        height: "0",
        color: "transparent",
        outline: "none",
        position: "absolute"
      }
    }, /* @__PURE__ */ import_react.default.createElement(MemoizedText, {
      renderPlaceholder,
      decorations: [],
      isLast: false,
      parent: element,
      text: _text
    }));
    NODE_TO_INDEX.set(_text, 0);
    NODE_TO_PARENT.set(_text, element);
  }
  return renderElement({
    attributes,
    children,
    element
  });
};
var MemoizedElement = /* @__PURE__ */ import_react.default.memo(Element3, (prev, next3) => {
  return prev.element === next3.element && prev.renderElement === next3.renderElement && prev.renderLeaf === next3.renderLeaf && isDecoratorRangeListEqual(prev.decorations, next3.decorations) && (prev.selection === next3.selection || !!prev.selection && !!next3.selection && Range.equals(prev.selection, next3.selection));
});
var DefaultElement = (props) => {
  var {
    attributes,
    children,
    element
  } = props;
  var editor = useSlateStatic();
  var Tag = editor.isInline(element) ? "span" : "div";
  return /* @__PURE__ */ import_react.default.createElement(Tag, Object.assign({}, attributes, {
    style: {
      position: "relative"
    }
  }), children);
};
var DecorateContext = /* @__PURE__ */ (0, import_react.createContext)(() => []);
var useDecorate = () => {
  return (0, import_react.useContext)(DecorateContext);
};
var SelectedContext = /* @__PURE__ */ (0, import_react.createContext)(false);
var useChildren = (props) => {
  var {
    decorations,
    node: node3,
    renderElement,
    renderPlaceholder,
    renderLeaf,
    selection
  } = props;
  var decorate = useDecorate();
  var editor = useSlateStatic();
  var path3 = ReactEditor.findPath(editor, node3);
  var children = [];
  var isLeafBlock = Element2.isElement(node3) && !editor.isInline(node3) && Editor.hasInlines(editor, node3);
  for (var i2 = 0; i2 < node3.children.length; i2++) {
    var p = path3.concat(i2);
    var n3 = node3.children[i2];
    var key = ReactEditor.findKey(editor, n3);
    var range2 = Editor.range(editor, p);
    var sel = selection && Range.intersection(range2, selection);
    var ds = decorate([n3, p]);
    for (var dec of decorations) {
      var d = Range.intersection(dec, range2);
      if (d) {
        ds.push(d);
      }
    }
    if (Element2.isElement(n3)) {
      children.push(/* @__PURE__ */ import_react.default.createElement(SelectedContext.Provider, {
        key: "provider-".concat(key.id),
        value: !!sel
      }, /* @__PURE__ */ import_react.default.createElement(MemoizedElement, {
        decorations: ds,
        element: n3,
        key: key.id,
        renderElement,
        renderPlaceholder,
        renderLeaf,
        selection: sel
      })));
    } else {
      children.push(/* @__PURE__ */ import_react.default.createElement(MemoizedText, {
        decorations: ds,
        key: key.id,
        isLast: isLeafBlock && i2 === node3.children.length - 1,
        parent: node3,
        renderPlaceholder,
        renderLeaf,
        text: n3
      }));
    }
    NODE_TO_INDEX.set(n3, i2);
    NODE_TO_PARENT.set(n3, node3);
  }
  return children;
};
var ReadOnlyContext = /* @__PURE__ */ (0, import_react.createContext)(false);
var useReadOnly = () => {
  return (0, import_react.useContext)(ReadOnlyContext);
};
var SlateContext = /* @__PURE__ */ (0, import_react.createContext)(null);
var useSlate = () => {
  var context = (0, import_react.useContext)(SlateContext);
  if (!context) {
    throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
  }
  var {
    editor
  } = context;
  return editor;
};
var TRIPLE_CLICK = 3;
var HOTKEYS = {
  bold: "mod+b",
  compose: ["down", "left", "right", "up", "backspace", "enter"],
  moveBackward: "left",
  moveForward: "right",
  moveWordBackward: "ctrl+left",
  moveWordForward: "ctrl+right",
  deleteBackward: "shift?+backspace",
  deleteForward: "shift?+delete",
  extendBackward: "shift+left",
  extendForward: "shift+right",
  italic: "mod+i",
  insertSoftBreak: "shift+enter",
  splitBlock: "enter",
  undo: "mod+z"
};
var APPLE_HOTKEYS = {
  moveLineBackward: "opt+up",
  moveLineForward: "opt+down",
  moveWordBackward: "opt+left",
  moveWordForward: "opt+right",
  deleteBackward: ["ctrl+backspace", "ctrl+h"],
  deleteForward: ["ctrl+delete", "ctrl+d"],
  deleteLineBackward: "cmd+shift?+backspace",
  deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
  deleteWordBackward: "opt+shift?+backspace",
  deleteWordForward: "opt+shift?+delete",
  extendLineBackward: "opt+shift+up",
  extendLineForward: "opt+shift+down",
  redo: "cmd+shift+z",
  transposeCharacter: "ctrl+t"
};
var WINDOWS_HOTKEYS = {
  deleteWordBackward: "ctrl+shift?+backspace",
  deleteWordForward: "ctrl+shift?+delete",
  redo: ["ctrl+y", "ctrl+shift+z"]
};
var create = (key) => {
  var generic = HOTKEYS[key];
  var apple = APPLE_HOTKEYS[key];
  var windows = WINDOWS_HOTKEYS[key];
  var isGeneric = generic && (0, import_is_hotkey.isKeyHotkey)(generic);
  var isApple = apple && (0, import_is_hotkey.isKeyHotkey)(apple);
  var isWindows = windows && (0, import_is_hotkey.isKeyHotkey)(windows);
  return (event) => {
    if (isGeneric && isGeneric(event))
      return true;
    if (IS_APPLE && isApple && isApple(event))
      return true;
    if (!IS_APPLE && isWindows && isWindows(event))
      return true;
    return false;
  };
};
var Hotkeys = {
  isBold: create("bold"),
  isCompose: create("compose"),
  isMoveBackward: create("moveBackward"),
  isMoveForward: create("moveForward"),
  isDeleteBackward: create("deleteBackward"),
  isDeleteForward: create("deleteForward"),
  isDeleteLineBackward: create("deleteLineBackward"),
  isDeleteLineForward: create("deleteLineForward"),
  isDeleteWordBackward: create("deleteWordBackward"),
  isDeleteWordForward: create("deleteWordForward"),
  isExtendBackward: create("extendBackward"),
  isExtendForward: create("extendForward"),
  isExtendLineBackward: create("extendLineBackward"),
  isExtendLineForward: create("extendLineForward"),
  isItalic: create("italic"),
  isMoveLineBackward: create("moveLineBackward"),
  isMoveLineForward: create("moveLineForward"),
  isMoveWordBackward: create("moveWordBackward"),
  isMoveWordForward: create("moveWordForward"),
  isRedo: create("redo"),
  isSoftBreak: create("insertSoftBreak"),
  isSplitBlock: create("splitBlock"),
  isTransposeCharacter: create("transposeCharacter"),
  isUndo: create("undo")
};
var createRestoreDomManager = (editor, receivedUserInput) => {
  var bufferedMutations = [];
  var clear = () => {
    bufferedMutations = [];
  };
  var registerMutations = (mutations) => {
    if (!receivedUserInput.current) {
      return;
    }
    var trackedMutations = mutations.filter((mutation) => isTrackedMutation(editor, mutation, mutations));
    bufferedMutations.push(...trackedMutations);
  };
  function restoreDOM() {
    bufferedMutations.reverse().forEach((mutation) => {
      if (mutation.type === "characterData") {
        mutation.target.textContent = mutation.oldValue;
        return;
      }
      mutation.removedNodes.forEach((node3) => {
        mutation.target.insertBefore(node3, mutation.nextSibling);
      });
      mutation.addedNodes.forEach((node3) => {
        mutation.target.removeChild(node3);
      });
    });
    clear();
  }
  return {
    registerMutations,
    restoreDOM,
    clear
  };
};
var MUTATION_OBSERVER_CONFIG$1 = {
  subtree: true,
  childList: true,
  characterData: true,
  characterDataOldValue: true
};
var RestoreDOMComponent = class extends import_react.Component {
  constructor() {
    super(...arguments);
    this.context = null;
    this.manager = null;
    this.mutationObserver = null;
  }
  observe() {
    var _this$mutationObserve;
    var {
      node: node3
    } = this.props;
    if (!node3.current) {
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    }
    (_this$mutationObserve = this.mutationObserver) === null || _this$mutationObserve === void 0 ? void 0 : _this$mutationObserve.observe(node3.current, MUTATION_OBSERVER_CONFIG$1);
  }
  componentDidMount() {
    var {
      receivedUserInput
    } = this.props;
    var editor = this.context;
    this.manager = createRestoreDomManager(editor, receivedUserInput);
    this.mutationObserver = new MutationObserver(this.manager.registerMutations);
    this.observe();
  }
  getSnapshotBeforeUpdate() {
    var _this$mutationObserve2, _this$mutationObserve3, _this$manager2;
    var pendingMutations = (_this$mutationObserve2 = this.mutationObserver) === null || _this$mutationObserve2 === void 0 ? void 0 : _this$mutationObserve2.takeRecords();
    if (pendingMutations !== null && pendingMutations !== void 0 && pendingMutations.length) {
      var _this$manager;
      (_this$manager = this.manager) === null || _this$manager === void 0 ? void 0 : _this$manager.registerMutations(pendingMutations);
    }
    (_this$mutationObserve3 = this.mutationObserver) === null || _this$mutationObserve3 === void 0 ? void 0 : _this$mutationObserve3.disconnect();
    (_this$manager2 = this.manager) === null || _this$manager2 === void 0 ? void 0 : _this$manager2.restoreDOM();
    return null;
  }
  componentDidUpdate() {
    var _this$manager3;
    (_this$manager3 = this.manager) === null || _this$manager3 === void 0 ? void 0 : _this$manager3.clear();
    this.observe();
  }
  componentWillUnmount() {
    var _this$mutationObserve4;
    (_this$mutationObserve4 = this.mutationObserver) === null || _this$mutationObserve4 === void 0 ? void 0 : _this$mutationObserve4.disconnect();
  }
  render() {
    return this.props.children;
  }
};
RestoreDOMComponent.contextType = EditorContext;
var RestoreDOM = IS_ANDROID ? RestoreDOMComponent : (_ref) => {
  var {
    children
  } = _ref;
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, children);
};
function verifyDiffState(editor, textDiff) {
  var {
    path: path3,
    diff
  } = textDiff;
  if (!Editor.hasPath(editor, path3)) {
    return false;
  }
  var node3 = Node.get(editor, path3);
  if (!Text.isText(node3)) {
    return false;
  }
  if (diff.start !== node3.text.length || diff.text.length === 0) {
    return node3.text.slice(diff.start, diff.start + diff.text.length) === diff.text;
  }
  var nextPath = Path.next(path3);
  if (!Editor.hasPath(editor, nextPath)) {
    return false;
  }
  var nextNode = Node.get(editor, nextPath);
  return Text.isText(nextNode) && nextNode.text.startsWith(diff.text);
}
function applyStringDiff(text) {
  for (var _len = arguments.length, diffs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    diffs[_key - 1] = arguments[_key];
  }
  return diffs.reduce((text2, diff) => text2.slice(0, diff.start) + diff.text + text2.slice(diff.end), text);
}
function longestCommonPrefixLength(str, another) {
  var length = Math.min(str.length, another.length);
  for (var i2 = 0; i2 < length; i2++) {
    if (str.charAt(i2) !== another.charAt(i2)) {
      return i2;
    }
  }
  return length;
}
function longestCommonSuffixLength(str, another, max) {
  var length = Math.min(str.length, another.length, max);
  for (var i2 = 0; i2 < length; i2++) {
    if (str.charAt(str.length - i2 - 1) !== another.charAt(another.length - i2 - 1)) {
      return i2;
    }
  }
  return length;
}
function normalizeStringDiff(targetText, diff) {
  var {
    start: start2,
    end: end2,
    text
  } = diff;
  var removedText = targetText.slice(start2, end2);
  var prefixLength = longestCommonPrefixLength(removedText, text);
  var max = Math.min(removedText.length - prefixLength, text.length - prefixLength);
  var suffixLength = longestCommonSuffixLength(removedText, text, max);
  var normalized = {
    start: start2 + prefixLength,
    end: end2 - suffixLength,
    text: text.slice(prefixLength, text.length - suffixLength)
  };
  if (normalized.start === normalized.end && normalized.text.length === 0) {
    return null;
  }
  return normalized;
}
function mergeStringDiffs(targetText, a, b) {
  var start2 = Math.min(a.start, b.start);
  var overlap = Math.max(0, Math.min(a.start + a.text.length, b.end) - b.start);
  var applied = applyStringDiff(targetText, a, b);
  var sliceEnd = Math.max(b.start + b.text.length, a.start + a.text.length + (a.start + a.text.length > b.start ? b.text.length : 0) - overlap);
  var text = applied.slice(start2, sliceEnd);
  var end2 = Math.max(a.end, b.end - a.text.length + (a.end - a.start));
  return normalizeStringDiff(targetText, {
    start: start2,
    end: end2,
    text
  });
}
function targetRange(textDiff) {
  var {
    path: path3,
    diff
  } = textDiff;
  return {
    anchor: {
      path: path3,
      offset: diff.start
    },
    focus: {
      path: path3,
      offset: diff.end
    }
  };
}
function normalizePoint(editor, point3) {
  var {
    path: path3,
    offset
  } = point3;
  if (!Editor.hasPath(editor, path3)) {
    return null;
  }
  var leaf3 = Node.get(editor, path3);
  if (!Text.isText(leaf3)) {
    return null;
  }
  var parentBlock = Editor.above(editor, {
    match: (n3) => Element2.isElement(n3) && Editor.isBlock(editor, n3),
    at: path3
  });
  if (!parentBlock) {
    return null;
  }
  while (offset > leaf3.text.length) {
    var entry = Editor.next(editor, {
      at: path3,
      match: Text.isText
    });
    if (!entry || !Path.isDescendant(entry[1], parentBlock[1])) {
      return null;
    }
    offset -= leaf3.text.length;
    leaf3 = entry[0];
    path3 = entry[1];
  }
  return {
    path: path3,
    offset
  };
}
function normalizeRange(editor, range2) {
  var anchor = normalizePoint(editor, range2.anchor);
  if (!anchor) {
    return null;
  }
  if (Range.isCollapsed(range2)) {
    return {
      anchor,
      focus: anchor
    };
  }
  var focus = normalizePoint(editor, range2.focus);
  if (!focus) {
    return null;
  }
  return {
    anchor,
    focus
  };
}
function transformPendingPoint(editor, point3, op) {
  var pendingDiffs = EDITOR_TO_PENDING_DIFFS.get(editor);
  var textDiff = pendingDiffs === null || pendingDiffs === void 0 ? void 0 : pendingDiffs.find((_ref) => {
    var {
      path: path3
    } = _ref;
    return Path.equals(path3, point3.path);
  });
  if (!textDiff || point3.offset <= textDiff.diff.start) {
    return Point.transform(point3, op, {
      affinity: "backward"
    });
  }
  var {
    diff
  } = textDiff;
  if (point3.offset <= diff.start + diff.text.length) {
    var _anchor = {
      path: point3.path,
      offset: diff.start
    };
    var _transformed = Point.transform(_anchor, op, {
      affinity: "backward"
    });
    if (!_transformed) {
      return null;
    }
    return {
      path: _transformed.path,
      offset: _transformed.offset + point3.offset - diff.start
    };
  }
  var anchor = {
    path: point3.path,
    offset: point3.offset - diff.text.length + diff.end - diff.start
  };
  var transformed = Point.transform(anchor, op, {
    affinity: "backward"
  });
  if (!transformed) {
    return null;
  }
  if (op.type === "split_node" && Path.equals(op.path, point3.path) && anchor.offset < op.position && diff.start < op.position) {
    return transformed;
  }
  return {
    path: transformed.path,
    offset: transformed.offset + diff.text.length - diff.end + diff.start
  };
}
function transformPendingRange(editor, range2, op) {
  var anchor = transformPendingPoint(editor, range2.anchor, op);
  if (!anchor) {
    return null;
  }
  if (Range.isCollapsed(range2)) {
    return {
      anchor,
      focus: anchor
    };
  }
  var focus = transformPendingPoint(editor, range2.focus, op);
  if (!focus) {
    return null;
  }
  return {
    anchor,
    focus
  };
}
function transformTextDiff(textDiff, op) {
  var {
    path: path3,
    diff,
    id
  } = textDiff;
  switch (op.type) {
    case "insert_text": {
      if (!Path.equals(op.path, path3) || op.offset >= diff.end) {
        return textDiff;
      }
      if (op.offset <= diff.start) {
        return {
          diff: {
            start: op.text.length + diff.start,
            end: op.text.length + diff.end,
            text: diff.text
          },
          id,
          path: path3
        };
      }
      return {
        diff: {
          start: diff.start,
          end: diff.end + op.text.length,
          text: diff.text
        },
        id,
        path: path3
      };
    }
    case "remove_text": {
      if (!Path.equals(op.path, path3) || op.offset >= diff.end) {
        return textDiff;
      }
      if (op.offset + op.text.length <= diff.start) {
        return {
          diff: {
            start: diff.start - op.text.length,
            end: diff.end - op.text.length,
            text: diff.text
          },
          id,
          path: path3
        };
      }
      return {
        diff: {
          start: diff.start,
          end: diff.end - op.text.length,
          text: diff.text
        },
        id,
        path: path3
      };
    }
    case "split_node": {
      if (!Path.equals(op.path, path3) || op.position >= diff.end) {
        return {
          diff,
          id,
          path: Path.transform(path3, op, {
            affinity: "backward"
          })
        };
      }
      if (op.position > diff.start) {
        return {
          diff: {
            start: diff.start,
            end: Math.min(op.position, diff.end),
            text: diff.text
          },
          id,
          path: path3
        };
      }
      return {
        diff: {
          start: diff.start - op.position,
          end: diff.end - op.position,
          text: diff.text
        },
        id,
        path: Path.transform(path3, op, {
          affinity: "forward"
        })
      };
    }
    case "merge_node": {
      if (!Path.equals(op.path, path3)) {
        return {
          diff,
          id,
          path: Path.transform(path3, op)
        };
      }
      return {
        diff: {
          start: diff.start + op.position,
          end: diff.end + op.position,
          text: diff.text
        },
        id,
        path: Path.transform(path3, op)
      };
    }
  }
  var newPath = Path.transform(path3, op);
  if (!newPath) {
    return null;
  }
  return {
    diff,
    path: newPath,
    id
  };
}
function ownKeys$32(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$32(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
      ownKeys$32(Object(source), true).forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$32(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var RESOLVE_DELAY = 25;
var FLUSH_DELAY = 200;
var debug = function debug2() {
};
function createAndroidInputManager(_ref) {
  var {
    editor,
    scheduleOnDOMSelectionChange,
    onDOMSelectionChange
  } = _ref;
  var flushing = false;
  var compositionEndTimeoutId = null;
  var flushTimeoutId = null;
  var actionTimeoutId = null;
  var idCounter = 0;
  var insertPositionHint = false;
  var applyPendingSelection = () => {
    var pendingSelection = EDITOR_TO_PENDING_SELECTION.get(editor);
    EDITOR_TO_PENDING_SELECTION.delete(editor);
    if (pendingSelection) {
      var {
        selection
      } = editor;
      var normalized = normalizeRange(editor, pendingSelection);
      if (normalized && (!selection || !Range.equals(normalized, selection))) {
        Transforms.select(editor, normalized);
      }
    }
  };
  var performAction = () => {
    var action = EDITOR_TO_PENDING_ACTION.get(editor);
    EDITOR_TO_PENDING_ACTION.delete(editor);
    if (!action) {
      return;
    }
    if (action.at) {
      var target = Point.isPoint(action.at) ? normalizePoint(editor, action.at) : normalizeRange(editor, action.at);
      if (!target) {
        return;
      }
      var _targetRange = Editor.range(editor, target);
      if (!editor.selection || !Range.equals(editor.selection, _targetRange)) {
        Transforms.select(editor, target);
      }
    }
    action.run();
  };
  var flush = () => {
    var _EDITOR_TO_PENDING_DI;
    if (flushTimeoutId) {
      clearTimeout(flushTimeoutId);
      flushTimeoutId = null;
    }
    if (actionTimeoutId) {
      clearTimeout(actionTimeoutId);
      actionTimeoutId = null;
    }
    if (!hasPendingDiffs() && !hasPendingAction()) {
      applyPendingSelection();
      return;
    }
    if (!flushing) {
      flushing = true;
      setTimeout(() => flushing = false);
    }
    if (hasPendingAction()) {
      flushing = "action";
    }
    var selectionRef = editor.selection && Editor.rangeRef(editor, editor.selection, {
      affinity: "forward"
    });
    EDITOR_TO_USER_MARKS.set(editor, editor.marks);
    debug("flush", EDITOR_TO_PENDING_ACTION.get(editor), EDITOR_TO_PENDING_DIFFS.get(editor));
    var scheduleSelectionChange = !!((_EDITOR_TO_PENDING_DI = EDITOR_TO_PENDING_DIFFS.get(editor)) !== null && _EDITOR_TO_PENDING_DI !== void 0 && _EDITOR_TO_PENDING_DI.length);
    var diff;
    while (diff = (_EDITOR_TO_PENDING_DI2 = EDITOR_TO_PENDING_DIFFS.get(editor)) === null || _EDITOR_TO_PENDING_DI2 === void 0 ? void 0 : _EDITOR_TO_PENDING_DI2[0]) {
      var _EDITOR_TO_PENDING_DI2, _EDITOR_TO_PENDING_DI3;
      var pendingMarks = EDITOR_TO_PENDING_INSERTION_MARKS.get(editor);
      if (pendingMarks !== void 0) {
        EDITOR_TO_PENDING_INSERTION_MARKS.delete(editor);
        editor.marks = pendingMarks;
      }
      if (pendingMarks && insertPositionHint === false) {
        insertPositionHint = null;
      }
      var range2 = targetRange(diff);
      if (!editor.selection || !Range.equals(editor.selection, range2)) {
        Transforms.select(editor, range2);
      }
      if (diff.diff.text) {
        Editor.insertText(editor, diff.diff.text);
      } else {
        Editor.deleteFragment(editor);
      }
      EDITOR_TO_PENDING_DIFFS.set(editor, (_EDITOR_TO_PENDING_DI3 = EDITOR_TO_PENDING_DIFFS.get(editor)) === null || _EDITOR_TO_PENDING_DI3 === void 0 ? void 0 : _EDITOR_TO_PENDING_DI3.filter((_ref2) => {
        var {
          id
        } = _ref2;
        return id !== diff.id;
      }));
      if (!verifyDiffState(editor, diff)) {
        scheduleSelectionChange = false;
        EDITOR_TO_PENDING_ACTION.delete(editor);
        EDITOR_TO_USER_MARKS.delete(editor);
        flushing = "action";
        EDITOR_TO_PENDING_SELECTION.delete(editor);
        scheduleOnDOMSelectionChange.cancel();
        onDOMSelectionChange.cancel();
        selectionRef === null || selectionRef === void 0 ? void 0 : selectionRef.unref();
      }
    }
    var selection = selectionRef === null || selectionRef === void 0 ? void 0 : selectionRef.unref();
    if (selection && !EDITOR_TO_PENDING_SELECTION.get(editor) && (!editor.selection || !Range.equals(selection, editor.selection))) {
      Transforms.select(editor, selection);
    }
    if (hasPendingAction()) {
      performAction();
      return;
    }
    if (scheduleSelectionChange) {
      scheduleOnDOMSelectionChange();
    }
    scheduleOnDOMSelectionChange.flush();
    onDOMSelectionChange.flush();
    applyPendingSelection();
    var userMarks = EDITOR_TO_USER_MARKS.get(editor);
    EDITOR_TO_USER_MARKS.delete(editor);
    if (userMarks !== void 0) {
      editor.marks = userMarks;
      editor.onChange();
    }
  };
  var handleCompositionEnd = (_event) => {
    if (compositionEndTimeoutId) {
      clearTimeout(compositionEndTimeoutId);
    }
    compositionEndTimeoutId = setTimeout(() => {
      IS_COMPOSING.set(editor, false);
      flush();
    }, RESOLVE_DELAY);
  };
  var handleCompositionStart = (_event) => {
    IS_COMPOSING.set(editor, true);
    if (compositionEndTimeoutId) {
      clearTimeout(compositionEndTimeoutId);
      compositionEndTimeoutId = null;
    }
  };
  var updatePlaceholderVisibility = function updatePlaceholderVisibility2() {
    var forceHide = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var placeholderElement = EDITOR_TO_PLACEHOLDER_ELEMENT.get(editor);
    if (!placeholderElement) {
      return;
    }
    if (hasPendingDiffs() || forceHide) {
      placeholderElement.style.display = "none";
      return;
    }
    placeholderElement.style.removeProperty("display");
  };
  var storeDiff = (path3, diff) => {
    var _EDITOR_TO_PENDING_DI4;
    var pendingDiffs = (_EDITOR_TO_PENDING_DI4 = EDITOR_TO_PENDING_DIFFS.get(editor)) !== null && _EDITOR_TO_PENDING_DI4 !== void 0 ? _EDITOR_TO_PENDING_DI4 : [];
    EDITOR_TO_PENDING_DIFFS.set(editor, pendingDiffs);
    var target = Node.leaf(editor, path3);
    var idx = pendingDiffs.findIndex((change) => Path.equals(change.path, path3));
    if (idx < 0) {
      var normalized = normalizeStringDiff(target.text, diff);
      if (normalized) {
        pendingDiffs.push({
          path: path3,
          diff,
          id: idCounter++
        });
      }
      updatePlaceholderVisibility();
      return;
    }
    var merged = mergeStringDiffs(target.text, pendingDiffs[idx].diff, diff);
    if (!merged) {
      pendingDiffs.splice(idx, 1);
      updatePlaceholderVisibility();
      return;
    }
    pendingDiffs[idx] = _objectSpread$32(_objectSpread$32({}, pendingDiffs[idx]), {}, {
      diff: merged
    });
  };
  var scheduleAction = function scheduleAction2(run) {
    var {
      at
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    insertPositionHint = false;
    EDITOR_TO_PENDING_SELECTION.delete(editor);
    scheduleOnDOMSelectionChange.cancel();
    onDOMSelectionChange.cancel();
    if (hasPendingAction()) {
      flush();
    }
    EDITOR_TO_PENDING_ACTION.set(editor, {
      at,
      run
    });
    actionTimeoutId = setTimeout(flush);
  };
  var handleDOMBeforeInput = (event) => {
    var _targetRange2;
    if (flushTimeoutId) {
      clearTimeout(flushTimeoutId);
      flushTimeoutId = null;
    }
    var {
      inputType: type
    } = event;
    var targetRange2 = null;
    var data = event.dataTransfer || event.data || void 0;
    if (insertPositionHint !== false && type !== "insertText" && type !== "insertCompositionText") {
      insertPositionHint = false;
    }
    var [nativeTargetRange] = event.getTargetRanges();
    if (nativeTargetRange) {
      targetRange2 = ReactEditor.toSlateRange(editor, nativeTargetRange, {
        exactMatch: false,
        suppressThrow: true
      });
    }
    var window2 = ReactEditor.getWindow(editor);
    var domSelection = window2.getSelection();
    if (!targetRange2 && domSelection) {
      nativeTargetRange = domSelection;
      targetRange2 = ReactEditor.toSlateRange(editor, domSelection, {
        exactMatch: false,
        suppressThrow: true
      });
    }
    targetRange2 = (_targetRange2 = targetRange2) !== null && _targetRange2 !== void 0 ? _targetRange2 : editor.selection;
    if (!targetRange2) {
      return;
    }
    if (Range.isExpanded(targetRange2) && type.startsWith("delete")) {
      var [start2, end2] = Range.edges(targetRange2);
      var leaf3 = Node.leaf(editor, start2.path);
      if (leaf3.text.length === start2.offset && end2.offset === 0) {
        var next3 = Editor.next(editor, {
          at: start2.path,
          match: Text.isText
        });
        if (next3 && Path.equals(next3[1], end2.path)) {
          targetRange2 = {
            anchor: end2,
            focus: end2
          };
        }
      }
    }
    if (Range.isExpanded(targetRange2) && type.startsWith("delete")) {
      if (Path.equals(targetRange2.anchor.path, targetRange2.focus.path)) {
        var [_start, _end] = Range.edges(targetRange2);
        return storeDiff(targetRange2.anchor.path, {
          text: "",
          end: _end.offset,
          start: _start.offset
        });
      }
      var direction = type.endsWith("Backward") ? "backward" : "forward";
      return scheduleAction(() => Editor.deleteFragment(editor, {
        direction
      }), {
        at: targetRange2
      });
    }
    switch (type) {
      case "deleteByComposition":
      case "deleteByCut":
      case "deleteByDrag": {
        return scheduleAction(() => Editor.deleteFragment(editor), {
          at: targetRange2
        });
      }
      case "deleteContent":
      case "deleteContentForward": {
        var {
          anchor
        } = targetRange2;
        if (Range.isCollapsed(targetRange2)) {
          var targetNode = Node.leaf(editor, anchor.path);
          if (anchor.offset < targetNode.text.length) {
            return storeDiff(anchor.path, {
              text: "",
              start: anchor.offset,
              end: anchor.offset + 1
            });
          }
        }
        return scheduleAction(() => Editor.deleteForward(editor), {
          at: targetRange2
        });
      }
      case "deleteContentBackward": {
        var _nativeTargetRange;
        var {
          anchor: _anchor
        } = targetRange2;
        var nativeCollapsed = isDOMSelection(nativeTargetRange) ? nativeTargetRange.isCollapsed : !!((_nativeTargetRange = nativeTargetRange) !== null && _nativeTargetRange !== void 0 && _nativeTargetRange.collapsed);
        if (nativeCollapsed && Range.isCollapsed(targetRange2) && _anchor.offset > 0) {
          return storeDiff(_anchor.path, {
            text: "",
            start: _anchor.offset - 1,
            end: _anchor.offset
          });
        }
        return scheduleAction(() => Editor.deleteBackward(editor), {
          at: targetRange2
        });
      }
      case "deleteEntireSoftLine": {
        return scheduleAction(() => {
          Editor.deleteBackward(editor, {
            unit: "line"
          });
          Editor.deleteForward(editor, {
            unit: "line"
          });
        }, {
          at: targetRange2
        });
      }
      case "deleteHardLineBackward": {
        return scheduleAction(() => Editor.deleteBackward(editor, {
          unit: "block"
        }), {
          at: targetRange2
        });
      }
      case "deleteSoftLineBackward": {
        return scheduleAction(() => Editor.deleteBackward(editor, {
          unit: "line"
        }), {
          at: targetRange2
        });
      }
      case "deleteHardLineForward": {
        return scheduleAction(() => Editor.deleteForward(editor, {
          unit: "block"
        }), {
          at: targetRange2
        });
      }
      case "deleteSoftLineForward": {
        return scheduleAction(() => Editor.deleteForward(editor, {
          unit: "line"
        }), {
          at: targetRange2
        });
      }
      case "deleteWordBackward": {
        return scheduleAction(() => Editor.deleteBackward(editor, {
          unit: "word"
        }), {
          at: targetRange2
        });
      }
      case "deleteWordForward": {
        return scheduleAction(() => Editor.deleteForward(editor, {
          unit: "word"
        }), {
          at: targetRange2
        });
      }
      case "insertLineBreak": {
        return scheduleAction(() => Editor.insertSoftBreak(editor), {
          at: targetRange2
        });
      }
      case "insertParagraph": {
        return scheduleAction(() => Editor.insertBreak(editor), {
          at: targetRange2
        });
      }
      case "insertCompositionText":
      case "deleteCompositionText":
      case "insertFromComposition":
      case "insertFromDrop":
      case "insertFromPaste":
      case "insertFromYank":
      case "insertReplacementText":
      case "insertText": {
        if ((data === null || data === void 0 ? void 0 : data.constructor.name) === "DataTransfer") {
          return scheduleAction(() => ReactEditor.insertData(editor, data), {
            at: targetRange2
          });
        }
        if (typeof data === "string" && data.includes("\n")) {
          return scheduleAction(() => Editor.insertSoftBreak(editor), {
            at: Range.end(targetRange2)
          });
        }
        var text = data !== null && data !== void 0 ? data : "";
        if (EDITOR_TO_PENDING_INSERTION_MARKS.get(editor)) {
          text = text.replace("\uFEFF", "");
        }
        if (Path.equals(targetRange2.anchor.path, targetRange2.focus.path)) {
          var [_start2, _end2] = Range.edges(targetRange2);
          var diff = {
            start: _start2.offset,
            end: _end2.offset,
            text
          };
          if (text && insertPositionHint && type === "insertCompositionText") {
            var hintPosition = insertPositionHint.start + insertPositionHint.text.search(/\S|$/);
            var diffPosition = diff.start + diff.text.search(/\S|$/);
            if (diffPosition === hintPosition + 1 && diff.end === insertPositionHint.start + insertPositionHint.text.length) {
              diff.start -= 1;
              insertPositionHint = null;
              scheduleFlush();
            } else {
              insertPositionHint = false;
            }
          } else if (type === "insertText") {
            if (insertPositionHint === null) {
              insertPositionHint = diff;
            } else if (insertPositionHint && Range.isCollapsed(targetRange2) && insertPositionHint.end + insertPositionHint.text.length === _start2.offset) {
              insertPositionHint = _objectSpread$32(_objectSpread$32({}, insertPositionHint), {}, {
                text: insertPositionHint.text + text
              });
            } else {
              insertPositionHint = false;
            }
          } else {
            insertPositionHint = false;
          }
          storeDiff(_start2.path, diff);
          return;
        }
        return scheduleAction(() => Editor.insertText(editor, text), {
          at: targetRange2
        });
      }
    }
  };
  var hasPendingAction = () => {
    return !!EDITOR_TO_PENDING_ACTION.get(editor);
  };
  var hasPendingDiffs = () => {
    var _EDITOR_TO_PENDING_DI5;
    return !!((_EDITOR_TO_PENDING_DI5 = EDITOR_TO_PENDING_DIFFS.get(editor)) !== null && _EDITOR_TO_PENDING_DI5 !== void 0 && _EDITOR_TO_PENDING_DI5.length);
  };
  var hasPendingChanges = () => {
    return hasPendingAction() || hasPendingDiffs();
  };
  var isFlushing = () => {
    return flushing;
  };
  var handleUserSelect = (range2) => {
    EDITOR_TO_PENDING_SELECTION.set(editor, range2);
    if (flushTimeoutId) {
      clearTimeout(flushTimeoutId);
      flushTimeoutId = null;
    }
    var {
      selection
    } = editor;
    if (!range2) {
      return;
    }
    var pathChanged = !selection || !Path.equals(selection.anchor.path, range2.anchor.path);
    var parentPathChanged = !selection || !Path.equals(selection.anchor.path.slice(0, -1), range2.anchor.path.slice(0, -1));
    if (pathChanged && insertPositionHint || parentPathChanged) {
      insertPositionHint = false;
    }
    if (pathChanged || !hasPendingDiffs()) {
      flushTimeoutId = setTimeout(flush, FLUSH_DELAY);
    }
  };
  var handleInput = () => {
    if (hasPendingAction() || !hasPendingDiffs()) {
      flush();
    }
  };
  var handleKeyDown = (_) => {
    if (!hasPendingDiffs()) {
      updatePlaceholderVisibility(true);
      setTimeout(updatePlaceholderVisibility);
    }
  };
  var scheduleFlush = () => {
    if (!hasPendingAction()) {
      actionTimeoutId = setTimeout(flush);
    }
  };
  var handleDomMutations = (mutations) => {
    if (hasPendingDiffs() || hasPendingAction()) {
      return;
    }
    if (mutations.some((mutation) => isTrackedMutation(editor, mutation, mutations))) {
      var _EDITOR_TO_FORCE_REND;
      (_EDITOR_TO_FORCE_REND = EDITOR_TO_FORCE_RENDER.get(editor)) === null || _EDITOR_TO_FORCE_REND === void 0 ? void 0 : _EDITOR_TO_FORCE_REND();
    }
  };
  return {
    flush,
    scheduleFlush,
    hasPendingDiffs,
    hasPendingAction,
    hasPendingChanges,
    isFlushing,
    handleUserSelect,
    handleCompositionEnd,
    handleCompositionStart,
    handleDOMBeforeInput,
    handleKeyDown,
    handleDomMutations,
    handleInput
  };
}
function useIsMounted() {
  var isMountedRef = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  return isMountedRef.current;
}
function useMutationObserver(node3, callback, options) {
  var [mutationObserver] = (0, import_react.useState)(() => new MutationObserver(callback));
  useIsomorphicLayoutEffect(() => {
    mutationObserver.takeRecords();
  });
  (0, import_react.useEffect)(() => {
    if (!node3.current) {
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    }
    mutationObserver.observe(node3.current, options);
    return () => mutationObserver.disconnect();
  }, []);
}
var _excluded$22 = ["node"];
function ownKeys$22(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$22(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
      ownKeys$22(Object(source), true).forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$22(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var MUTATION_OBSERVER_CONFIG = {
  subtree: true,
  childList: true,
  characterData: true
};
function useAndroidInputManager(_ref) {
  var {
    node: node3
  } = _ref, options = _objectWithoutProperties2(_ref, _excluded$22);
  if (!IS_ANDROID) {
    return null;
  }
  var editor = useSlateStatic();
  var isMounted = useIsMounted();
  var [inputManager] = (0, import_react.useState)(() => createAndroidInputManager(_objectSpread$22({
    editor
  }, options)));
  useMutationObserver(node3, inputManager.handleDomMutations, MUTATION_OBSERVER_CONFIG);
  EDITOR_TO_SCHEDULE_FLUSH.set(editor, inputManager.scheduleFlush);
  if (isMounted) {
    inputManager.flush();
  }
  return inputManager;
}
function useTrackUserInput() {
  var editor = useSlateStatic();
  var receivedUserInput = (0, import_react.useRef)(false);
  var animationFrameIdRef = (0, import_react.useRef)(0);
  var onUserInput = (0, import_react.useCallback)(() => {
    if (receivedUserInput.current) {
      return;
    }
    receivedUserInput.current = true;
    var window2 = ReactEditor.getWindow(editor);
    window2.cancelAnimationFrame(animationFrameIdRef.current);
    animationFrameIdRef.current = window2.requestAnimationFrame(() => {
      receivedUserInput.current = false;
    });
  }, []);
  (0, import_react.useEffect)(() => () => cancelAnimationFrame(animationFrameIdRef.current), []);
  return {
    receivedUserInput,
    onUserInput
  };
}
var _excluded$12 = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as", "disableDefaultStyles"];
var _excluded22 = ["text"];
function ownKeys$12(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$12(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
      ownKeys$12(Object(source), true).forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$12(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var Children = (props) => /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, useChildren(props));
var Editable = (props) => {
  var _EDITOR_TO_PLACEHOLDE, _EDITOR_TO_PLACEHOLDE2;
  var {
    autoFocus,
    decorate = defaultDecorate,
    onDOMBeforeInput: propsOnDOMBeforeInput,
    placeholder,
    readOnly = false,
    renderElement,
    renderLeaf,
    renderPlaceholder = (props2) => /* @__PURE__ */ import_react.default.createElement(DefaultPlaceholder, Object.assign({}, props2)),
    scrollSelectionIntoView = defaultScrollSelectionIntoView,
    style: userStyle = {},
    as: Component2 = "div",
    disableDefaultStyles = false
  } = props, attributes = _objectWithoutProperties2(props, _excluded$12);
  var editor = useSlate();
  var [isComposing, setIsComposing] = (0, import_react.useState)(false);
  var ref = (0, import_react.useRef)(null);
  var deferredOperations = (0, import_react.useRef)([]);
  var {
    onUserInput,
    receivedUserInput
  } = useTrackUserInput();
  var [, forceRender] = (0, import_react.useReducer)((s) => s + 1, 0);
  EDITOR_TO_FORCE_RENDER.set(editor, forceRender);
  IS_READ_ONLY.set(editor, readOnly);
  var state = (0, import_react.useMemo)(() => ({
    isDraggingInternally: false,
    isUpdatingSelection: false,
    latestElement: null,
    hasMarkPlaceholder: false
  }), []);
  (0, import_react.useEffect)(() => {
    if (ref.current && autoFocus) {
      ref.current.focus();
    }
  }, [autoFocus]);
  var onDOMSelectionChange = (0, import_react.useCallback)((0, import_throttle.default)(() => {
    if ((IS_ANDROID || !ReactEditor.isComposing(editor)) && (!state.isUpdatingSelection || androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.isFlushing()) && !state.isDraggingInternally) {
      var root = ReactEditor.findDocumentOrShadowRoot(editor);
      var {
        activeElement
      } = root;
      var el = ReactEditor.toDOMNode(editor, editor);
      var domSelection = root.getSelection();
      if (activeElement === el) {
        state.latestElement = activeElement;
        IS_FOCUSED.set(editor, true);
      } else {
        IS_FOCUSED.delete(editor);
      }
      if (!domSelection) {
        return Transforms.deselect(editor);
      }
      var {
        anchorNode,
        focusNode
      } = domSelection;
      var anchorNodeSelectable = ReactEditor.hasEditableTarget(editor, anchorNode) || ReactEditor.isTargetInsideNonReadonlyVoid(editor, anchorNode);
      var focusNodeSelectable = ReactEditor.hasEditableTarget(editor, focusNode) || ReactEditor.isTargetInsideNonReadonlyVoid(editor, focusNode);
      if (anchorNodeSelectable && focusNodeSelectable) {
        var range2 = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: false,
          suppressThrow: true
        });
        if (range2) {
          if (!ReactEditor.isComposing(editor) && !(androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.hasPendingChanges()) && !(androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.isFlushing())) {
            Transforms.select(editor, range2);
          } else {
            androidInputManager === null || androidInputManager === void 0 ? void 0 : androidInputManager.handleUserSelect(range2);
          }
        }
      }
      if (readOnly && (!anchorNodeSelectable || !focusNodeSelectable)) {
        Transforms.deselect(editor);
      }
    }
  }, 100), [readOnly]);
  var scheduleOnDOMSelectionChange = (0, import_react.useMemo)(() => (0, import_debounce.default)(onDOMSelectionChange, 0), [onDOMSelectionChange]);
  var androidInputManager = useAndroidInputManager({
    node: ref,
    onDOMSelectionChange,
    scheduleOnDOMSelectionChange
  });
  useIsomorphicLayoutEffect(() => {
    var window2;
    if (ref.current && (window2 = getDefaultView(ref.current))) {
      EDITOR_TO_WINDOW.set(editor, window2);
      EDITOR_TO_ELEMENT.set(editor, ref.current);
      NODE_TO_ELEMENT.set(editor, ref.current);
      ELEMENT_TO_NODE.set(ref.current, editor);
    } else {
      NODE_TO_ELEMENT.delete(editor);
    }
    var {
      selection
    } = editor;
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    var domSelection = root.getSelection();
    if (!domSelection || !ReactEditor.isFocused(editor) || androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.hasPendingAction()) {
      return;
    }
    var setDomSelection = (forceChange) => {
      var hasDomSelection = domSelection.type !== "None";
      if (!selection && !hasDomSelection) {
        return;
      }
      var editorElement = EDITOR_TO_ELEMENT.get(editor);
      var hasDomSelectionInEditor = false;
      if (editorElement.contains(domSelection.anchorNode) && editorElement.contains(domSelection.focusNode)) {
        hasDomSelectionInEditor = true;
      }
      if (hasDomSelection && hasDomSelectionInEditor && selection && !forceChange) {
        var slateRange = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: true,
          // domSelection is not necessarily a valid Slate range
          // (e.g. when clicking on contentEditable:false element)
          suppressThrow: true
        });
        if (slateRange && Range.equals(slateRange, selection)) {
          var _anchorNode$parentEle;
          if (!state.hasMarkPlaceholder) {
            return;
          }
          var {
            anchorNode
          } = domSelection;
          if (anchorNode !== null && anchorNode !== void 0 && (_anchorNode$parentEle = anchorNode.parentElement) !== null && _anchorNode$parentEle !== void 0 && _anchorNode$parentEle.hasAttribute("data-slate-mark-placeholder")) {
            return;
          }
        }
      }
      if (selection && !ReactEditor.hasRange(editor, selection)) {
        editor.selection = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: false,
          suppressThrow: true
        });
        return;
      }
      state.isUpdatingSelection = true;
      var newDomRange2 = selection && ReactEditor.toDOMRange(editor, selection);
      if (newDomRange2) {
        if (Range.isBackward(selection)) {
          domSelection.setBaseAndExtent(newDomRange2.endContainer, newDomRange2.endOffset, newDomRange2.startContainer, newDomRange2.startOffset);
        } else {
          domSelection.setBaseAndExtent(newDomRange2.startContainer, newDomRange2.startOffset, newDomRange2.endContainer, newDomRange2.endOffset);
        }
        scrollSelectionIntoView(editor, newDomRange2);
      } else {
        domSelection.removeAllRanges();
      }
      return newDomRange2;
    };
    var newDomRange = setDomSelection();
    var ensureSelection = (androidInputManager === null || androidInputManager === void 0 ? void 0 : androidInputManager.isFlushing()) === "action";
    if (!IS_ANDROID || !ensureSelection) {
      setTimeout(() => {
        if (newDomRange && IS_FIREFOX) {
          var el = ReactEditor.toDOMNode(editor, editor);
          el.focus();
        }
        state.isUpdatingSelection = false;
      });
      return;
    }
    var timeoutId = null;
    var animationFrameId = requestAnimationFrame(() => {
      if (ensureSelection) {
        var ensureDomSelection = (forceChange) => {
          try {
            var el = ReactEditor.toDOMNode(editor, editor);
            el.focus();
            setDomSelection(forceChange);
          } catch (e2) {
          }
        };
        ensureDomSelection();
        timeoutId = setTimeout(() => {
          ensureDomSelection(true);
          state.isUpdatingSelection = false;
        });
      }
    });
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  });
  var onDOMBeforeInput = (0, import_react.useCallback)((event) => {
    onUserInput();
    if (!readOnly && ReactEditor.hasEditableTarget(editor, event.target) && !isDOMEventHandled(event, propsOnDOMBeforeInput)) {
      var _EDITOR_TO_USER_SELEC;
      if (androidInputManager) {
        return androidInputManager.handleDOMBeforeInput(event);
      }
      scheduleOnDOMSelectionChange.flush();
      onDOMSelectionChange.flush();
      var {
        selection
      } = editor;
      var {
        inputType: type
      } = event;
      var data = event.dataTransfer || event.data || void 0;
      var isCompositionChange = type === "insertCompositionText" || type === "deleteCompositionText";
      if (isCompositionChange && ReactEditor.isComposing(editor)) {
        return;
      }
      var native = false;
      if (type === "insertText" && selection && Range.isCollapsed(selection) && // Only use native character insertion for single characters a-z or space for now.
      // Long-press events (hold a + press 4 = ä) to choose a special character otherwise
      // causes duplicate inserts.
      event.data && event.data.length === 1 && /[a-z ]/i.test(event.data) && // Chrome has issues correctly editing the start of nodes: https://bugs.chromium.org/p/chromium/issues/detail?id=1249405
      // When there is an inline element, e.g. a link, and you select
      // right after it (the start of the next node).
      selection.anchor.offset !== 0) {
        var _node$parentElement, _window$getComputedSt;
        native = true;
        if (editor.marks) {
          native = false;
        }
        var {
          anchor: anchor2
        } = selection;
        var [node3, offset] = ReactEditor.toDOMPoint(editor, anchor2);
        var anchorNode = (_node$parentElement = node3.parentElement) === null || _node$parentElement === void 0 ? void 0 : _node$parentElement.closest("a");
        var window2 = ReactEditor.getWindow(editor);
        if (native && anchorNode && ReactEditor.hasDOMNode(editor, anchorNode)) {
          var _lastText$textContent;
          var lastText = window2 === null || window2 === void 0 ? void 0 : window2.document.createTreeWalker(anchorNode, NodeFilter.SHOW_TEXT).lastChild();
          if (lastText === node3 && ((_lastText$textContent = lastText.textContent) === null || _lastText$textContent === void 0 ? void 0 : _lastText$textContent.length) === offset) {
            native = false;
          }
        }
        if (native && node3.parentElement && (window2 === null || window2 === void 0 ? void 0 : (_window$getComputedSt = window2.getComputedStyle(node3.parentElement)) === null || _window$getComputedSt === void 0 ? void 0 : _window$getComputedSt.whiteSpace) === "pre") {
          var block = Editor.above(editor, {
            at: anchor2.path,
            match: (n3) => Element2.isElement(n3) && Editor.isBlock(editor, n3)
          });
          if (block && Node.string(block[0]).includes("	")) {
            native = false;
          }
        }
      }
      if (!type.startsWith("delete") || type.startsWith("deleteBy")) {
        var [targetRange2] = event.getTargetRanges();
        if (targetRange2) {
          var range2 = ReactEditor.toSlateRange(editor, targetRange2, {
            exactMatch: false,
            suppressThrow: false
          });
          if (!selection || !Range.equals(selection, range2)) {
            native = false;
            var selectionRef = !isCompositionChange && editor.selection && Editor.rangeRef(editor, editor.selection);
            Transforms.select(editor, range2);
            if (selectionRef) {
              EDITOR_TO_USER_SELECTION.set(editor, selectionRef);
            }
          }
        }
      }
      if (isCompositionChange) {
        return;
      }
      if (!native) {
        event.preventDefault();
      }
      if (selection && Range.isExpanded(selection) && type.startsWith("delete")) {
        var direction = type.endsWith("Backward") ? "backward" : "forward";
        Editor.deleteFragment(editor, {
          direction
        });
        return;
      }
      switch (type) {
        case "deleteByComposition":
        case "deleteByCut":
        case "deleteByDrag": {
          Editor.deleteFragment(editor);
          break;
        }
        case "deleteContent":
        case "deleteContentForward": {
          Editor.deleteForward(editor);
          break;
        }
        case "deleteContentBackward": {
          Editor.deleteBackward(editor);
          break;
        }
        case "deleteEntireSoftLine": {
          Editor.deleteBackward(editor, {
            unit: "line"
          });
          Editor.deleteForward(editor, {
            unit: "line"
          });
          break;
        }
        case "deleteHardLineBackward": {
          Editor.deleteBackward(editor, {
            unit: "block"
          });
          break;
        }
        case "deleteSoftLineBackward": {
          Editor.deleteBackward(editor, {
            unit: "line"
          });
          break;
        }
        case "deleteHardLineForward": {
          Editor.deleteForward(editor, {
            unit: "block"
          });
          break;
        }
        case "deleteSoftLineForward": {
          Editor.deleteForward(editor, {
            unit: "line"
          });
          break;
        }
        case "deleteWordBackward": {
          Editor.deleteBackward(editor, {
            unit: "word"
          });
          break;
        }
        case "deleteWordForward": {
          Editor.deleteForward(editor, {
            unit: "word"
          });
          break;
        }
        case "insertLineBreak":
          Editor.insertSoftBreak(editor);
          break;
        case "insertParagraph": {
          Editor.insertBreak(editor);
          break;
        }
        case "insertFromComposition":
        case "insertFromDrop":
        case "insertFromPaste":
        case "insertFromYank":
        case "insertReplacementText":
        case "insertText": {
          if (type === "insertFromComposition") {
            if (ReactEditor.isComposing(editor)) {
              setIsComposing(false);
              IS_COMPOSING.set(editor, false);
            }
          }
          if ((data === null || data === void 0 ? void 0 : data.constructor.name) === "DataTransfer") {
            ReactEditor.insertData(editor, data);
          } else if (typeof data === "string") {
            if (native) {
              deferredOperations.current.push(() => Editor.insertText(editor, data));
            } else {
              Editor.insertText(editor, data);
            }
          }
          break;
        }
      }
      var toRestore = (_EDITOR_TO_USER_SELEC = EDITOR_TO_USER_SELECTION.get(editor)) === null || _EDITOR_TO_USER_SELEC === void 0 ? void 0 : _EDITOR_TO_USER_SELEC.unref();
      EDITOR_TO_USER_SELECTION.delete(editor);
      if (toRestore && (!editor.selection || !Range.equals(editor.selection, toRestore))) {
        Transforms.select(editor, toRestore);
      }
    }
  }, [readOnly, propsOnDOMBeforeInput]);
  useIsomorphicLayoutEffect(() => {
    if (ref.current && HAS_BEFORE_INPUT_SUPPORT) {
      ref.current.addEventListener("beforeinput", onDOMBeforeInput);
    }
    return () => {
      if (ref.current && HAS_BEFORE_INPUT_SUPPORT) {
        ref.current.removeEventListener("beforeinput", onDOMBeforeInput);
      }
    };
  }, [onDOMBeforeInput]);
  useIsomorphicLayoutEffect(() => {
    var window2 = ReactEditor.getWindow(editor);
    window2.document.addEventListener("selectionchange", scheduleOnDOMSelectionChange);
    return () => {
      window2.document.removeEventListener("selectionchange", scheduleOnDOMSelectionChange);
    };
  }, [scheduleOnDOMSelectionChange]);
  var decorations = decorate([editor, []]);
  if (placeholder && editor.children.length === 1 && Array.from(Node.texts(editor)).length === 1 && Node.string(editor) === "" && !isComposing) {
    var start2 = Editor.start(editor, []);
    decorations.push({
      [PLACEHOLDER_SYMBOL]: true,
      placeholder,
      anchor: start2,
      focus: start2
    });
  }
  var {
    marks: marks3
  } = editor;
  state.hasMarkPlaceholder = false;
  if (editor.selection && Range.isCollapsed(editor.selection) && marks3) {
    var {
      anchor
    } = editor.selection;
    var leaf3 = Node.leaf(editor, anchor.path);
    var rest = _objectWithoutProperties2(leaf3, _excluded22);
    if (!Text.equals(leaf3, marks3, {
      loose: true
    })) {
      state.hasMarkPlaceholder = true;
      var unset = Object.fromEntries(Object.keys(rest).map((mark) => [mark, null]));
      decorations.push(_objectSpread$12(_objectSpread$12(_objectSpread$12({
        [MARK_PLACEHOLDER_SYMBOL]: true
      }, unset), marks3), {}, {
        anchor,
        focus: anchor
      }));
    }
  }
  (0, import_react.useEffect)(() => {
    setTimeout(() => {
      var {
        selection
      } = editor;
      if (selection) {
        var {
          anchor: _anchor
        } = selection;
        var _text = Node.leaf(editor, _anchor.path);
        if (marks3 && !Text.equals(_text, marks3, {
          loose: true
        })) {
          EDITOR_TO_PENDING_INSERTION_MARKS.set(editor, marks3);
          return;
        }
      }
      EDITOR_TO_PENDING_INSERTION_MARKS.delete(editor);
    });
  });
  var placeholderHeight = (_EDITOR_TO_PLACEHOLDE = EDITOR_TO_PLACEHOLDER_ELEMENT.get(editor)) === null || _EDITOR_TO_PLACEHOLDE === void 0 ? void 0 : (_EDITOR_TO_PLACEHOLDE2 = _EDITOR_TO_PLACEHOLDE.getBoundingClientRect()) === null || _EDITOR_TO_PLACEHOLDE2 === void 0 ? void 0 : _EDITOR_TO_PLACEHOLDE2.height;
  return /* @__PURE__ */ import_react.default.createElement(ReadOnlyContext.Provider, {
    value: readOnly
  }, /* @__PURE__ */ import_react.default.createElement(DecorateContext.Provider, {
    value: decorate
  }, /* @__PURE__ */ import_react.default.createElement(RestoreDOM, {
    node: ref,
    receivedUserInput
  }, /* @__PURE__ */ import_react.default.createElement(Component2, Object.assign({
    role: readOnly ? void 0 : "textbox",
    "aria-multiline": readOnly ? void 0 : true
  }, attributes, {
    // COMPAT: Certain browsers don't support the `beforeinput` event, so we'd
    // have to use hacks to make these replacement-based features work.
    // For SSR situations HAS_BEFORE_INPUT_SUPPORT is false and results in prop
    // mismatch warning app moves to browser. Pass-through consumer props when
    // not CAN_USE_DOM (SSR) and default to falsy value
    spellCheck: HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM ? attributes.spellCheck : false,
    autoCorrect: HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM ? attributes.autoCorrect : "false",
    autoCapitalize: HAS_BEFORE_INPUT_SUPPORT || !CAN_USE_DOM ? attributes.autoCapitalize : "false",
    "data-slate-editor": true,
    "data-slate-node": "value",
    // explicitly set this
    contentEditable: !readOnly,
    // in some cases, a decoration needs access to the range / selection to decorate a text node,
    // then you will select the whole text node when you select part the of text
    // this magic zIndex="-1" will fix it
    zindex: -1,
    suppressContentEditableWarning: true,
    ref,
    style: _objectSpread$12(_objectSpread$12({}, disableDefaultStyles ? {} : _objectSpread$12({
      // Allow positioning relative to the editable element.
      position: "relative",
      // Prevent the default outline styles.
      outline: "none",
      // Preserve adjacent whitespace and new lines.
      whiteSpace: "pre-wrap",
      // Allow words to break if they are too long.
      wordWrap: "break-word"
    }, placeholderHeight ? {
      minHeight: placeholderHeight
    } : {})), userStyle),
    onBeforeInput: (0, import_react.useCallback)((event) => {
      if (!HAS_BEFORE_INPUT_SUPPORT && !readOnly && !isEventHandled(event, attributes.onBeforeInput) && ReactEditor.hasSelectableTarget(editor, event.target)) {
        event.preventDefault();
        if (!ReactEditor.isComposing(editor)) {
          var _text2 = event.data;
          Editor.insertText(editor, _text2);
        }
      }
    }, [readOnly]),
    onInput: (0, import_react.useCallback)((event) => {
      if (androidInputManager) {
        androidInputManager.handleInput();
        return;
      }
      for (var op of deferredOperations.current) {
        op();
      }
      deferredOperations.current = [];
    }, []),
    onBlur: (0, import_react.useCallback)((event) => {
      if (readOnly || state.isUpdatingSelection || !ReactEditor.hasSelectableTarget(editor, event.target) || isEventHandled(event, attributes.onBlur)) {
        return;
      }
      var root = ReactEditor.findDocumentOrShadowRoot(editor);
      if (state.latestElement === root.activeElement) {
        return;
      }
      var {
        relatedTarget
      } = event;
      var el = ReactEditor.toDOMNode(editor, editor);
      if (relatedTarget === el) {
        return;
      }
      if (isDOMElement(relatedTarget) && relatedTarget.hasAttribute("data-slate-spacer")) {
        return;
      }
      if (relatedTarget != null && isDOMNode(relatedTarget) && ReactEditor.hasDOMNode(editor, relatedTarget)) {
        var node3 = ReactEditor.toSlateNode(editor, relatedTarget);
        if (Element2.isElement(node3) && !editor.isVoid(node3)) {
          return;
        }
      }
      if (IS_SAFARI) {
        var domSelection = root.getSelection();
        domSelection === null || domSelection === void 0 ? void 0 : domSelection.removeAllRanges();
      }
      IS_FOCUSED.delete(editor);
    }, [readOnly, attributes.onBlur]),
    onClick: (0, import_react.useCallback)((event) => {
      if (ReactEditor.hasTarget(editor, event.target) && !isEventHandled(event, attributes.onClick) && isDOMNode(event.target)) {
        var node3 = ReactEditor.toSlateNode(editor, event.target);
        var path3 = ReactEditor.findPath(editor, node3);
        if (!Editor.hasPath(editor, path3) || Node.get(editor, path3) !== node3) {
          return;
        }
        if (event.detail === TRIPLE_CLICK && path3.length >= 1) {
          var blockPath = path3;
          if (!(Element2.isElement(node3) && Editor.isBlock(editor, node3))) {
            var _block$;
            var block = Editor.above(editor, {
              match: (n3) => Element2.isElement(n3) && Editor.isBlock(editor, n3),
              at: path3
            });
            blockPath = (_block$ = block === null || block === void 0 ? void 0 : block[1]) !== null && _block$ !== void 0 ? _block$ : path3.slice(0, 1);
          }
          var range2 = Editor.range(editor, blockPath);
          Transforms.select(editor, range2);
          return;
        }
        if (readOnly) {
          return;
        }
        var _start = Editor.start(editor, path3);
        var end2 = Editor.end(editor, path3);
        var startVoid = Editor.void(editor, {
          at: _start
        });
        var endVoid = Editor.void(editor, {
          at: end2
        });
        if (startVoid && endVoid && Path.equals(startVoid[1], endVoid[1])) {
          var _range = Editor.range(editor, _start);
          Transforms.select(editor, _range);
        }
      }
    }, [readOnly, attributes.onClick]),
    onCompositionEnd: (0, import_react.useCallback)((event) => {
      if (ReactEditor.hasSelectableTarget(editor, event.target)) {
        if (ReactEditor.isComposing(editor)) {
          setIsComposing(false);
          IS_COMPOSING.set(editor, false);
        }
        androidInputManager === null || androidInputManager === void 0 ? void 0 : androidInputManager.handleCompositionEnd(event);
        if (isEventHandled(event, attributes.onCompositionEnd) || IS_ANDROID) {
          return;
        }
        if (!IS_SAFARI && !IS_FIREFOX_LEGACY && !IS_IOS && !IS_WECHATBROWSER && !IS_UC_MOBILE && event.data) {
          var placeholderMarks = EDITOR_TO_PENDING_INSERTION_MARKS.get(editor);
          EDITOR_TO_PENDING_INSERTION_MARKS.delete(editor);
          if (placeholderMarks !== void 0) {
            EDITOR_TO_USER_MARKS.set(editor, editor.marks);
            editor.marks = placeholderMarks;
          }
          Editor.insertText(editor, event.data);
          var userMarks = EDITOR_TO_USER_MARKS.get(editor);
          EDITOR_TO_USER_MARKS.delete(editor);
          if (userMarks !== void 0) {
            editor.marks = userMarks;
          }
        }
      }
    }, [attributes.onCompositionEnd]),
    onCompositionUpdate: (0, import_react.useCallback)((event) => {
      if (ReactEditor.hasSelectableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionUpdate)) {
        if (!ReactEditor.isComposing(editor)) {
          setIsComposing(true);
          IS_COMPOSING.set(editor, true);
        }
      }
    }, [attributes.onCompositionUpdate]),
    onCompositionStart: (0, import_react.useCallback)((event) => {
      if (ReactEditor.hasSelectableTarget(editor, event.target)) {
        androidInputManager === null || androidInputManager === void 0 ? void 0 : androidInputManager.handleCompositionStart(event);
        if (isEventHandled(event, attributes.onCompositionStart) || IS_ANDROID) {
          return;
        }
        setIsComposing(true);
        var {
          selection
        } = editor;
        if (selection) {
          if (Range.isExpanded(selection)) {
            Editor.deleteFragment(editor);
            return;
          }
          var inline = Editor.above(editor, {
            match: (n3) => Element2.isElement(n3) && Editor.isInline(editor, n3),
            mode: "highest"
          });
          if (inline) {
            var [, inlinePath] = inline;
            if (Editor.isEnd(editor, selection.anchor, inlinePath)) {
              var point3 = Editor.after(editor, inlinePath);
              Transforms.setSelection(editor, {
                anchor: point3,
                focus: point3
              });
            }
          }
        }
      }
    }, [attributes.onCompositionStart]),
    onCopy: (0, import_react.useCallback)((event) => {
      if (ReactEditor.hasSelectableTarget(editor, event.target) && !isEventHandled(event, attributes.onCopy)) {
        event.preventDefault();
        ReactEditor.setFragmentData(editor, event.clipboardData, "copy");
      }
    }, [attributes.onCopy]),
    onCut: (0, import_react.useCallback)((event) => {
      if (!readOnly && ReactEditor.hasSelectableTarget(editor, event.target) && !isEventHandled(event, attributes.onCut)) {
        event.preventDefault();
        ReactEditor.setFragmentData(editor, event.clipboardData, "cut");
        var {
          selection
        } = editor;
        if (selection) {
          if (Range.isExpanded(selection)) {
            Editor.deleteFragment(editor);
          } else {
            var node3 = Node.parent(editor, selection.anchor.path);
            if (Editor.isVoid(editor, node3)) {
              Transforms.delete(editor);
            }
          }
        }
      }
    }, [readOnly, attributes.onCut]),
    onDragOver: (0, import_react.useCallback)((event) => {
      if (ReactEditor.hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDragOver)) {
        var node3 = ReactEditor.toSlateNode(editor, event.target);
        if (Element2.isElement(node3) && Editor.isVoid(editor, node3)) {
          event.preventDefault();
        }
      }
    }, [attributes.onDragOver]),
    onDragStart: (0, import_react.useCallback)((event) => {
      if (!readOnly && ReactEditor.hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDragStart)) {
        var node3 = ReactEditor.toSlateNode(editor, event.target);
        var path3 = ReactEditor.findPath(editor, node3);
        var voidMatch = Element2.isElement(node3) && Editor.isVoid(editor, node3) || Editor.void(editor, {
          at: path3,
          voids: true
        });
        if (voidMatch) {
          var range2 = Editor.range(editor, path3);
          Transforms.select(editor, range2);
        }
        state.isDraggingInternally = true;
        ReactEditor.setFragmentData(editor, event.dataTransfer, "drag");
      }
    }, [readOnly, attributes.onDragStart]),
    onDrop: (0, import_react.useCallback)((event) => {
      if (!readOnly && ReactEditor.hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDrop)) {
        event.preventDefault();
        var draggedRange = editor.selection;
        var range2 = ReactEditor.findEventRange(editor, event);
        var data = event.dataTransfer;
        Transforms.select(editor, range2);
        if (state.isDraggingInternally) {
          if (draggedRange && !Range.equals(draggedRange, range2) && !Editor.void(editor, {
            at: range2,
            voids: true
          })) {
            Transforms.delete(editor, {
              at: draggedRange
            });
          }
        }
        ReactEditor.insertData(editor, data);
        if (!ReactEditor.isFocused(editor)) {
          ReactEditor.focus(editor);
        }
      }
      state.isDraggingInternally = false;
    }, [readOnly, attributes.onDrop]),
    onDragEnd: (0, import_react.useCallback)((event) => {
      if (!readOnly && state.isDraggingInternally && attributes.onDragEnd && ReactEditor.hasTarget(editor, event.target)) {
        attributes.onDragEnd(event);
      }
      state.isDraggingInternally = false;
    }, [readOnly, attributes.onDragEnd]),
    onFocus: (0, import_react.useCallback)((event) => {
      if (!readOnly && !state.isUpdatingSelection && ReactEditor.hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onFocus)) {
        var el = ReactEditor.toDOMNode(editor, editor);
        var root = ReactEditor.findDocumentOrShadowRoot(editor);
        state.latestElement = root.activeElement;
        if (IS_FIREFOX && event.target !== el) {
          el.focus();
          return;
        }
        IS_FOCUSED.set(editor, true);
      }
    }, [readOnly, attributes.onFocus]),
    onKeyDown: (0, import_react.useCallback)((event) => {
      if (!readOnly && ReactEditor.hasEditableTarget(editor, event.target)) {
        androidInputManager === null || androidInputManager === void 0 ? void 0 : androidInputManager.handleKeyDown(event);
        var {
          nativeEvent
        } = event;
        if (ReactEditor.isComposing(editor) && nativeEvent.isComposing === false) {
          IS_COMPOSING.set(editor, false);
          setIsComposing(false);
        }
        if (isEventHandled(event, attributes.onKeyDown) || ReactEditor.isComposing(editor)) {
          return;
        }
        var {
          selection
        } = editor;
        var element = editor.children[selection !== null ? selection.focus.path[0] : 0];
        var isRTL = (0, import_direction.default)(Node.string(element)) === "rtl";
        if (Hotkeys.isRedo(nativeEvent)) {
          event.preventDefault();
          var maybeHistoryEditor = editor;
          if (typeof maybeHistoryEditor.redo === "function") {
            maybeHistoryEditor.redo();
          }
          return;
        }
        if (Hotkeys.isUndo(nativeEvent)) {
          event.preventDefault();
          var _maybeHistoryEditor = editor;
          if (typeof _maybeHistoryEditor.undo === "function") {
            _maybeHistoryEditor.undo();
          }
          return;
        }
        if (Hotkeys.isMoveLineBackward(nativeEvent)) {
          event.preventDefault();
          Transforms.move(editor, {
            unit: "line",
            reverse: true
          });
          return;
        }
        if (Hotkeys.isMoveLineForward(nativeEvent)) {
          event.preventDefault();
          Transforms.move(editor, {
            unit: "line"
          });
          return;
        }
        if (Hotkeys.isExtendLineBackward(nativeEvent)) {
          event.preventDefault();
          Transforms.move(editor, {
            unit: "line",
            edge: "focus",
            reverse: true
          });
          return;
        }
        if (Hotkeys.isExtendLineForward(nativeEvent)) {
          event.preventDefault();
          Transforms.move(editor, {
            unit: "line",
            edge: "focus"
          });
          return;
        }
        if (Hotkeys.isMoveBackward(nativeEvent)) {
          event.preventDefault();
          if (selection && Range.isCollapsed(selection)) {
            Transforms.move(editor, {
              reverse: !isRTL
            });
          } else {
            Transforms.collapse(editor, {
              edge: "start"
            });
          }
          return;
        }
        if (Hotkeys.isMoveForward(nativeEvent)) {
          event.preventDefault();
          if (selection && Range.isCollapsed(selection)) {
            Transforms.move(editor, {
              reverse: isRTL
            });
          } else {
            Transforms.collapse(editor, {
              edge: "end"
            });
          }
          return;
        }
        if (Hotkeys.isMoveWordBackward(nativeEvent)) {
          event.preventDefault();
          if (selection && Range.isExpanded(selection)) {
            Transforms.collapse(editor, {
              edge: "focus"
            });
          }
          Transforms.move(editor, {
            unit: "word",
            reverse: !isRTL
          });
          return;
        }
        if (Hotkeys.isMoveWordForward(nativeEvent)) {
          event.preventDefault();
          if (selection && Range.isExpanded(selection)) {
            Transforms.collapse(editor, {
              edge: "focus"
            });
          }
          Transforms.move(editor, {
            unit: "word",
            reverse: isRTL
          });
          return;
        }
        if (!HAS_BEFORE_INPUT_SUPPORT) {
          if (Hotkeys.isBold(nativeEvent) || Hotkeys.isItalic(nativeEvent) || Hotkeys.isTransposeCharacter(nativeEvent)) {
            event.preventDefault();
            return;
          }
          if (Hotkeys.isSoftBreak(nativeEvent)) {
            event.preventDefault();
            Editor.insertSoftBreak(editor);
            return;
          }
          if (Hotkeys.isSplitBlock(nativeEvent)) {
            event.preventDefault();
            Editor.insertBreak(editor);
            return;
          }
          if (Hotkeys.isDeleteBackward(nativeEvent)) {
            event.preventDefault();
            if (selection && Range.isExpanded(selection)) {
              Editor.deleteFragment(editor, {
                direction: "backward"
              });
            } else {
              Editor.deleteBackward(editor);
            }
            return;
          }
          if (Hotkeys.isDeleteForward(nativeEvent)) {
            event.preventDefault();
            if (selection && Range.isExpanded(selection)) {
              Editor.deleteFragment(editor, {
                direction: "forward"
              });
            } else {
              Editor.deleteForward(editor);
            }
            return;
          }
          if (Hotkeys.isDeleteLineBackward(nativeEvent)) {
            event.preventDefault();
            if (selection && Range.isExpanded(selection)) {
              Editor.deleteFragment(editor, {
                direction: "backward"
              });
            } else {
              Editor.deleteBackward(editor, {
                unit: "line"
              });
            }
            return;
          }
          if (Hotkeys.isDeleteLineForward(nativeEvent)) {
            event.preventDefault();
            if (selection && Range.isExpanded(selection)) {
              Editor.deleteFragment(editor, {
                direction: "forward"
              });
            } else {
              Editor.deleteForward(editor, {
                unit: "line"
              });
            }
            return;
          }
          if (Hotkeys.isDeleteWordBackward(nativeEvent)) {
            event.preventDefault();
            if (selection && Range.isExpanded(selection)) {
              Editor.deleteFragment(editor, {
                direction: "backward"
              });
            } else {
              Editor.deleteBackward(editor, {
                unit: "word"
              });
            }
            return;
          }
          if (Hotkeys.isDeleteWordForward(nativeEvent)) {
            event.preventDefault();
            if (selection && Range.isExpanded(selection)) {
              Editor.deleteFragment(editor, {
                direction: "forward"
              });
            } else {
              Editor.deleteForward(editor, {
                unit: "word"
              });
            }
            return;
          }
        } else {
          if (IS_CHROME || IS_SAFARI) {
            if (selection && (Hotkeys.isDeleteBackward(nativeEvent) || Hotkeys.isDeleteForward(nativeEvent)) && Range.isCollapsed(selection)) {
              var currentNode = Node.parent(editor, selection.anchor.path);
              if (Element2.isElement(currentNode) && Editor.isVoid(editor, currentNode) && (Editor.isInline(editor, currentNode) || Editor.isBlock(editor, currentNode))) {
                event.preventDefault();
                Editor.deleteBackward(editor, {
                  unit: "block"
                });
                return;
              }
            }
          }
        }
      }
    }, [readOnly, attributes.onKeyDown]),
    onPaste: (0, import_react.useCallback)((event) => {
      if (!readOnly && ReactEditor.hasSelectableTarget(editor, event.target) && !isEventHandled(event, attributes.onPaste)) {
        if (!HAS_BEFORE_INPUT_SUPPORT || isPlainTextOnlyPaste(event.nativeEvent)) {
          event.preventDefault();
          ReactEditor.insertData(editor, event.clipboardData);
        }
      }
    }, [readOnly, attributes.onPaste])
  }), /* @__PURE__ */ import_react.default.createElement(Children, {
    decorations,
    node: editor,
    renderElement,
    renderPlaceholder,
    renderLeaf,
    selection: editor.selection
  })))));
};
var DefaultPlaceholder = (_ref) => {
  var {
    attributes,
    children
  } = _ref;
  return (
    // COMPAT: Artificially add a line-break to the end on the placeholder element
    // to prevent Android IMEs to pick up its content in autocorrect and to auto-capitalize the first letter
    /* @__PURE__ */ import_react.default.createElement("span", Object.assign({}, attributes), children, IS_ANDROID && /* @__PURE__ */ import_react.default.createElement("br", null))
  );
};
var defaultDecorate = () => [];
var defaultScrollSelectionIntoView = (editor, domRange) => {
  if (domRange.getBoundingClientRect && (!editor.selection || editor.selection && Range.isCollapsed(editor.selection))) {
    var leafEl = domRange.startContainer.parentElement;
    leafEl.getBoundingClientRect = domRange.getBoundingClientRect.bind(domRange);
    es_default(leafEl, {
      scrollMode: "if-needed"
    });
    delete leafEl.getBoundingClientRect;
  }
};
var isEventHandled = (event, handler) => {
  if (!handler) {
    return false;
  }
  var shouldTreatEventAsHandled = handler(event);
  if (shouldTreatEventAsHandled != null) {
    return shouldTreatEventAsHandled;
  }
  return event.isDefaultPrevented() || event.isPropagationStopped();
};
var isDOMEventHandled = (event, handler) => {
  if (!handler) {
    return false;
  }
  var shouldTreatEventAsHandled = handler(event);
  if (shouldTreatEventAsHandled != null) {
    return shouldTreatEventAsHandled;
  }
  return event.defaultPrevented;
};
var FocusedContext = /* @__PURE__ */ (0, import_react.createContext)(false);
var SlateSelectorContext = /* @__PURE__ */ (0, import_react.createContext)({});
function getSelectorContext(editor) {
  var eventListeners = (0, import_react.useRef)([]).current;
  var slateRef = (0, import_react.useRef)({
    editor
  }).current;
  var onChange = (0, import_react.useCallback)((editor2) => {
    slateRef.editor = editor2;
    eventListeners.forEach((listener) => listener(editor2));
  }, []);
  var selectorContext = (0, import_react.useMemo)(() => {
    return {
      getSlate: () => slateRef.editor,
      addEventListener: (callback) => {
        eventListeners.push(callback);
        return () => {
          eventListeners.splice(eventListeners.indexOf(callback), 1);
        };
      }
    };
  }, [eventListeners, slateRef]);
  return {
    selectorContext,
    onChange
  };
}
var _excluded3 = ["editor", "children", "onChange", "value"];
var Slate = (props) => {
  var {
    editor,
    children,
    onChange,
    value
  } = props, rest = _objectWithoutProperties2(props, _excluded3);
  var unmountRef = (0, import_react.useRef)(false);
  var [context, setContext] = import_react.default.useState(() => {
    if (!Node.isNodeList(value)) {
      throw new Error("[Slate] value is invalid! Expected a list of elements but got: ".concat(Scrubber.stringify(value)));
    }
    if (!Editor.isEditor(editor)) {
      throw new Error("[Slate] editor is invalid! You passed: ".concat(Scrubber.stringify(editor)));
    }
    editor.children = value;
    Object.assign(editor, rest);
    return {
      v: 0,
      editor
    };
  });
  var {
    selectorContext,
    onChange: handleSelectorChange
  } = getSelectorContext(editor);
  var onContextChange = (0, import_react.useCallback)(() => {
    if (onChange) {
      onChange(editor.children);
    }
    setContext((prevContext) => ({
      v: prevContext.v + 1,
      editor
    }));
    handleSelectorChange(editor);
  }, [onChange]);
  (0, import_react.useEffect)(() => {
    EDITOR_TO_ON_CHANGE.set(editor, onContextChange);
    return () => {
      EDITOR_TO_ON_CHANGE.set(editor, () => {
      });
      unmountRef.current = true;
    };
  }, []);
  var [isFocused, setIsFocused] = (0, import_react.useState)(ReactEditor.isFocused(editor));
  (0, import_react.useEffect)(() => {
    setIsFocused(ReactEditor.isFocused(editor));
  });
  useIsomorphicLayoutEffect(() => {
    var fn = () => setIsFocused(ReactEditor.isFocused(editor));
    if (IS_REACT_VERSION_17_OR_ABOVE) {
      document.addEventListener("focusin", fn);
      document.addEventListener("focusout", fn);
      return () => {
        document.removeEventListener("focusin", fn);
        document.removeEventListener("focusout", fn);
      };
    } else {
      document.addEventListener("focus", fn, true);
      document.addEventListener("blur", fn, true);
      return () => {
        document.removeEventListener("focus", fn, true);
        document.removeEventListener("blur", fn, true);
      };
    }
  }, []);
  return /* @__PURE__ */ import_react.default.createElement(SlateSelectorContext.Provider, {
    value: selectorContext
  }, /* @__PURE__ */ import_react.default.createElement(SlateContext.Provider, {
    value: context
  }, /* @__PURE__ */ import_react.default.createElement(EditorContext.Provider, {
    value: context.editor
  }, /* @__PURE__ */ import_react.default.createElement(FocusedContext.Provider, {
    value: isFocused
  }, children))));
};
var doRectsIntersect = (rect, compareRect) => {
  var middle = (compareRect.top + compareRect.bottom) / 2;
  return rect.top <= middle && rect.bottom >= middle;
};
var areRangesSameLine = (editor, range1, range2) => {
  var rect1 = ReactEditor.toDOMRange(editor, range1).getBoundingClientRect();
  var rect2 = ReactEditor.toDOMRange(editor, range2).getBoundingClientRect();
  return doRectsIntersect(rect1, rect2) && doRectsIntersect(rect2, rect1);
};
var findCurrentLineRange = (editor, parentRange) => {
  var parentRangeBoundary = Editor.range(editor, Range.end(parentRange));
  var positions2 = Array.from(Editor.positions(editor, {
    at: parentRange
  }));
  var left = 0;
  var right = positions2.length;
  var middle = Math.floor(right / 2);
  if (areRangesSameLine(editor, Editor.range(editor, positions2[left]), parentRangeBoundary)) {
    return Editor.range(editor, positions2[left], parentRangeBoundary);
  }
  if (positions2.length < 2) {
    return Editor.range(editor, positions2[positions2.length - 1], parentRangeBoundary);
  }
  while (middle !== positions2.length && middle !== left) {
    if (areRangesSameLine(editor, Editor.range(editor, positions2[middle]), parentRangeBoundary)) {
      right = middle;
    } else {
      left = middle;
    }
    middle = Math.floor((left + right) / 2);
  }
  return Editor.range(editor, positions2[right], parentRangeBoundary);
};
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
      ownKeys2(Object(source), true).forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var withReact = (editor) => {
  var e2 = editor;
  var {
    apply: apply2,
    onChange,
    deleteBackward: deleteBackward2,
    addMark: addMark2,
    removeMark: removeMark2
  } = e2;
  EDITOR_TO_KEY_TO_ELEMENT.set(e2, /* @__PURE__ */ new WeakMap());
  e2.addMark = (key, value) => {
    var _EDITOR_TO_SCHEDULE_F, _EDITOR_TO_PENDING_DI;
    (_EDITOR_TO_SCHEDULE_F = EDITOR_TO_SCHEDULE_FLUSH.get(e2)) === null || _EDITOR_TO_SCHEDULE_F === void 0 ? void 0 : _EDITOR_TO_SCHEDULE_F();
    if (!EDITOR_TO_PENDING_INSERTION_MARKS.get(e2) && (_EDITOR_TO_PENDING_DI = EDITOR_TO_PENDING_DIFFS.get(e2)) !== null && _EDITOR_TO_PENDING_DI !== void 0 && _EDITOR_TO_PENDING_DI.length) {
      EDITOR_TO_PENDING_INSERTION_MARKS.set(e2, null);
    }
    EDITOR_TO_USER_MARKS.delete(e2);
    addMark2(key, value);
  };
  e2.removeMark = (key) => {
    var _EDITOR_TO_PENDING_DI2;
    if (!EDITOR_TO_PENDING_INSERTION_MARKS.get(e2) && (_EDITOR_TO_PENDING_DI2 = EDITOR_TO_PENDING_DIFFS.get(e2)) !== null && _EDITOR_TO_PENDING_DI2 !== void 0 && _EDITOR_TO_PENDING_DI2.length) {
      EDITOR_TO_PENDING_INSERTION_MARKS.set(e2, null);
    }
    EDITOR_TO_USER_MARKS.delete(e2);
    removeMark2(key);
  };
  e2.deleteBackward = (unit) => {
    if (unit !== "line") {
      return deleteBackward2(unit);
    }
    if (e2.selection && Range.isCollapsed(e2.selection)) {
      var parentBlockEntry = Editor.above(e2, {
        match: (n3) => Element2.isElement(n3) && Editor.isBlock(e2, n3),
        at: e2.selection
      });
      if (parentBlockEntry) {
        var [, parentBlockPath] = parentBlockEntry;
        var parentElementRange = Editor.range(e2, parentBlockPath, e2.selection.anchor);
        var currentLineRange = findCurrentLineRange(e2, parentElementRange);
        if (!Range.isCollapsed(currentLineRange)) {
          Transforms.delete(e2, {
            at: currentLineRange
          });
        }
      }
    }
  };
  e2.apply = (op) => {
    var matches = [];
    var pendingDiffs = EDITOR_TO_PENDING_DIFFS.get(e2);
    if (pendingDiffs !== null && pendingDiffs !== void 0 && pendingDiffs.length) {
      var transformed = pendingDiffs.map((textDiff) => transformTextDiff(textDiff, op)).filter(Boolean);
      EDITOR_TO_PENDING_DIFFS.set(e2, transformed);
    }
    var pendingSelection = EDITOR_TO_PENDING_SELECTION.get(e2);
    if (pendingSelection) {
      EDITOR_TO_PENDING_SELECTION.set(e2, transformPendingRange(e2, pendingSelection, op));
    }
    var pendingAction = EDITOR_TO_PENDING_ACTION.get(e2);
    if (pendingAction !== null && pendingAction !== void 0 && pendingAction.at) {
      var at = Point.isPoint(pendingAction === null || pendingAction === void 0 ? void 0 : pendingAction.at) ? transformPendingPoint(e2, pendingAction.at, op) : transformPendingRange(e2, pendingAction.at, op);
      EDITOR_TO_PENDING_ACTION.set(e2, at ? _objectSpread2(_objectSpread2({}, pendingAction), {}, {
        at
      }) : null);
    }
    switch (op.type) {
      case "insert_text":
      case "remove_text":
      case "set_node":
      case "split_node": {
        matches.push(...getMatches(e2, op.path));
        break;
      }
      case "set_selection": {
        var _EDITOR_TO_USER_SELEC;
        (_EDITOR_TO_USER_SELEC = EDITOR_TO_USER_SELECTION.get(e2)) === null || _EDITOR_TO_USER_SELEC === void 0 ? void 0 : _EDITOR_TO_USER_SELEC.unref();
        EDITOR_TO_USER_SELECTION.delete(e2);
        break;
      }
      case "insert_node":
      case "remove_node": {
        matches.push(...getMatches(e2, Path.parent(op.path)));
        break;
      }
      case "merge_node": {
        var prevPath = Path.previous(op.path);
        matches.push(...getMatches(e2, prevPath));
        break;
      }
      case "move_node": {
        var commonPath = Path.common(Path.parent(op.path), Path.parent(op.newPath));
        matches.push(...getMatches(e2, commonPath));
        break;
      }
    }
    apply2(op);
    for (var [path3, key] of matches) {
      var [node3] = Editor.node(e2, path3);
      NODE_TO_KEY.set(node3, key);
    }
  };
  e2.setFragmentData = (data) => {
    var {
      selection
    } = e2;
    if (!selection) {
      return;
    }
    var [start2, end2] = Range.edges(selection);
    var startVoid = Editor.void(e2, {
      at: start2.path
    });
    var endVoid = Editor.void(e2, {
      at: end2.path
    });
    if (Range.isCollapsed(selection) && !startVoid) {
      return;
    }
    var domRange = ReactEditor.toDOMRange(e2, selection);
    var contents = domRange.cloneContents();
    var attach = contents.childNodes[0];
    contents.childNodes.forEach((node3) => {
      if (node3.textContent && node3.textContent.trim() !== "") {
        attach = node3;
      }
    });
    if (endVoid) {
      var [voidNode] = endVoid;
      var r2 = domRange.cloneRange();
      var domNode = ReactEditor.toDOMNode(e2, voidNode);
      r2.setEndAfter(domNode);
      contents = r2.cloneContents();
    }
    if (startVoid) {
      attach = contents.querySelector("[data-slate-spacer]");
    }
    Array.from(contents.querySelectorAll("[data-slate-zero-width]")).forEach((zw) => {
      var isNewline = zw.getAttribute("data-slate-zero-width") === "n";
      zw.textContent = isNewline ? "\n" : "";
    });
    if (isDOMText(attach)) {
      var span = attach.ownerDocument.createElement("span");
      span.style.whiteSpace = "pre";
      span.appendChild(attach);
      contents.appendChild(span);
      attach = span;
    }
    var fragment2 = e2.getFragment();
    var string3 = JSON.stringify(fragment2);
    var encoded = window.btoa(encodeURIComponent(string3));
    attach.setAttribute("data-slate-fragment", encoded);
    data.setData("application/x-slate-fragment", encoded);
    var div = contents.ownerDocument.createElement("div");
    div.appendChild(contents);
    div.setAttribute("hidden", "true");
    contents.ownerDocument.body.appendChild(div);
    data.setData("text/html", div.innerHTML);
    data.setData("text/plain", getPlainText(div));
    contents.ownerDocument.body.removeChild(div);
    return data;
  };
  e2.insertData = (data) => {
    if (!e2.insertFragmentData(data)) {
      e2.insertTextData(data);
    }
  };
  e2.insertFragmentData = (data) => {
    var fragment2 = data.getData("application/x-slate-fragment") || getSlateFragmentAttribute(data);
    if (fragment2) {
      var decoded = decodeURIComponent(window.atob(fragment2));
      var parsed = JSON.parse(decoded);
      e2.insertFragment(parsed);
      return true;
    }
    return false;
  };
  e2.insertTextData = (data) => {
    var text = data.getData("text/plain");
    if (text) {
      var lines = text.split(/\r\n|\r|\n/);
      var split = false;
      for (var line of lines) {
        if (split) {
          Transforms.splitNodes(e2, {
            always: true
          });
        }
        e2.insertText(line);
        split = true;
      }
      return true;
    }
    return false;
  };
  e2.onChange = () => {
    import_react_dom.default.unstable_batchedUpdates(() => {
      var onContextChange = EDITOR_TO_ON_CHANGE.get(e2);
      if (onContextChange) {
        onContextChange();
      }
      onChange();
    });
  };
  return e2;
};
var getMatches = (e2, path3) => {
  var matches = [];
  for (var [n3, p] of Editor.levels(e2, {
    at: path3
  })) {
    var key = ReactEditor.findKey(e2, n3);
    matches.push([p, key]);
  }
  return matches;
};

// ../node_modules/slate-history/dist/index.es.js
var History = {
  /**
   * Check if a value is a `History` object.
   */
  isHistory(value) {
    return isPlainObject(value) && Array.isArray(value.redos) && Array.isArray(value.undos) && (value.redos.length === 0 || Operation.isOperationList(value.redos[0].operations)) && (value.undos.length === 0 || Operation.isOperationList(value.undos[0].operations));
  }
};
var SAVING = /* @__PURE__ */ new WeakMap();
var MERGING = /* @__PURE__ */ new WeakMap();
var HistoryEditor = {
  /**
   * Check if a value is a `HistoryEditor` object.
   */
  isHistoryEditor(value) {
    return History.isHistory(value.history) && Editor.isEditor(value);
  },
  /**
   * Get the merge flag's current value.
   */
  isMerging(editor) {
    return MERGING.get(editor);
  },
  /**
   * Get the saving flag's current value.
   */
  isSaving(editor) {
    return SAVING.get(editor);
  },
  /**
   * Redo to the previous saved state.
   */
  redo(editor) {
    editor.redo();
  },
  /**
   * Undo to the previous saved state.
   */
  undo(editor) {
    editor.undo();
  },
  /**
   * Apply a series of changes inside a synchronous `fn`, without merging any of
   * the new operations into previous save point in the history.
   */
  withoutMerging(editor, fn) {
    var prev = HistoryEditor.isMerging(editor);
    MERGING.set(editor, false);
    fn();
    MERGING.set(editor, prev);
  },
  /**
   * Apply a series of changes inside a synchronous `fn`, without saving any of
   * their operations into the history.
   */
  withoutSaving(editor, fn) {
    var prev = HistoryEditor.isSaving(editor);
    SAVING.set(editor, false);
    fn();
    SAVING.set(editor, prev);
  }
};
var withHistory = (editor) => {
  var e2 = editor;
  var {
    apply: apply2
  } = e2;
  e2.history = {
    undos: [],
    redos: []
  };
  e2.redo = () => {
    var {
      history
    } = e2;
    var {
      redos
    } = history;
    if (redos.length > 0) {
      var batch = redos[redos.length - 1];
      if (batch.selectionBefore) {
        Transforms.setSelection(e2, batch.selectionBefore);
      }
      HistoryEditor.withoutSaving(e2, () => {
        Editor.withoutNormalizing(e2, () => {
          for (var op of batch.operations) {
            e2.apply(op);
          }
        });
      });
      history.redos.pop();
      e2.writeHistory("undos", batch);
    }
  };
  e2.undo = () => {
    var {
      history
    } = e2;
    var {
      undos
    } = history;
    if (undos.length > 0) {
      var batch = undos[undos.length - 1];
      HistoryEditor.withoutSaving(e2, () => {
        Editor.withoutNormalizing(e2, () => {
          var inverseOps = batch.operations.map(Operation.inverse).reverse();
          for (var op of inverseOps) {
            e2.apply(op);
          }
          if (batch.selectionBefore) {
            Transforms.setSelection(e2, batch.selectionBefore);
          }
        });
      });
      e2.writeHistory("redos", batch);
      history.undos.pop();
    }
  };
  e2.apply = (op) => {
    var {
      operations,
      history
    } = e2;
    var {
      undos
    } = history;
    var lastBatch = undos[undos.length - 1];
    var lastOp = lastBatch && lastBatch.operations[lastBatch.operations.length - 1];
    var save = HistoryEditor.isSaving(e2);
    var merge = HistoryEditor.isMerging(e2);
    if (save == null) {
      save = shouldSave(op);
    }
    if (save) {
      if (merge == null) {
        if (lastBatch == null) {
          merge = false;
        } else if (operations.length !== 0) {
          merge = true;
        } else {
          merge = shouldMerge(op, lastOp);
        }
      }
      if (lastBatch && merge) {
        lastBatch.operations.push(op);
      } else {
        var batch = {
          operations: [op],
          selectionBefore: e2.selection
        };
        e2.writeHistory("undos", batch);
      }
      while (undos.length > 100) {
        undos.shift();
      }
      history.redos = [];
    }
    apply2(op);
  };
  e2.writeHistory = (stack, batch) => {
    e2.history[stack].push(batch);
  };
  return e2;
};
var shouldMerge = (op, prev) => {
  if (prev && op.type === "insert_text" && prev.type === "insert_text" && op.offset === prev.offset + prev.text.length && Path.equals(op.path, prev.path)) {
    return true;
  }
  if (prev && op.type === "remove_text" && prev.type === "remove_text" && op.offset + op.text.length === prev.offset && Path.equals(op.path, prev.path)) {
    return true;
  }
  return false;
};
var shouldSave = (op, prev) => {
  if (op.type === "set_selection") {
    return false;
  }
  return true;
};

// ../node_modules/pretty-bytes/index.js
var BYTE_UNITS = [
  "B",
  "kB",
  "MB",
  "GB",
  "TB",
  "PB",
  "EB",
  "ZB",
  "YB"
];
var BIBYTE_UNITS = [
  "B",
  "KiB",
  "MiB",
  "GiB",
  "TiB",
  "PiB",
  "EiB",
  "ZiB",
  "YiB"
];
var BIT_UNITS = [
  "b",
  "kbit",
  "Mbit",
  "Gbit",
  "Tbit",
  "Pbit",
  "Ebit",
  "Zbit",
  "Ybit"
];
var BIBIT_UNITS = [
  "b",
  "kibit",
  "Mibit",
  "Gibit",
  "Tibit",
  "Pibit",
  "Eibit",
  "Zibit",
  "Yibit"
];
var toLocaleString = (number, locale, options) => {
  let result = number;
  if (typeof locale === "string" || Array.isArray(locale)) {
    result = number.toLocaleString(locale, options);
  } else if (locale === true || options !== void 0) {
    result = number.toLocaleString(void 0, options);
  }
  return result;
};
function prettyBytes(number, options) {
  if (!Number.isFinite(number)) {
    throw new TypeError("Expected a finite number, got ".concat(typeof number, ": ").concat(number));
  }
  options = __spreadValues({
    bits: false,
    binary: false,
    space: true
  }, options);
  const UNITS = options.bits ? options.binary ? BIBIT_UNITS : BIT_UNITS : options.binary ? BIBYTE_UNITS : BYTE_UNITS;
  const separator = options.space ? " " : "";
  if (options.signed && number === 0) {
    return " 0".concat(separator).concat(UNITS[0]);
  }
  const isNegative = number < 0;
  const prefix = isNegative ? "-" : options.signed ? "+" : "";
  if (isNegative) {
    number = -number;
  }
  let localeOptions;
  if (options.minimumFractionDigits !== void 0) {
    localeOptions = { minimumFractionDigits: options.minimumFractionDigits };
  }
  if (options.maximumFractionDigits !== void 0) {
    localeOptions = __spreadValues({ maximumFractionDigits: options.maximumFractionDigits }, localeOptions);
  }
  if (number < 1) {
    const numberString2 = toLocaleString(number, options.locale, localeOptions);
    return prefix + numberString2 + separator + UNITS[0];
  }
  const exponent = Math.min(Math.floor(options.binary ? Math.log(number) / Math.log(1024) : Math.log10(number) / 3), UNITS.length - 1);
  number /= (options.binary ? 1024 : 1e3) ** exponent;
  if (!localeOptions) {
    number = number.toPrecision(3);
  }
  const numberString = toLocaleString(Number(number), options.locale, localeOptions);
  const unit = UNITS[exponent];
  return prefix + numberString + separator + unit;
}

// ../editor/slate/current-element.tsx
var import_react2 = __toESM(require_react());
var CurrentElementContext = import_react2.default.createContext(null);
var CurrentElementProvider = class extends import_react2.default.PureComponent {
  render() {
    return /* @__PURE__ */ import_react2.default.createElement(CurrentElementContext.Provider, { value: this.props }, this.props.children);
  }
};
var CurrentElementRetrieverOptimizer = class extends import_react2.default.PureComponent {
  render() {
    return this.props.fn({
      attributes: this.props.attributes,
      children: this.props.children,
      element: this.props.element
    }, this.props.isSelected, this.props.selectionCriteria, this.props.selectionIsPrimary);
  }
};
var CurrentElementRetriever = class extends import_react2.default.PureComponent {
  constructor(props) {
    super(props);
    this.consume = this.consume.bind(this);
  }
  consume(selection) {
    const elementInQuestion = this.props.element;
    let isSelected = false;
    let selectionCriteria = null;
    let selectionIsPrimary = false;
    if (isBlock(elementInQuestion)) {
      selectionCriteria = "block";
      isSelected = selection.block === elementInQuestion;
      selectionIsPrimary = isSelected && !selection.inline;
    } else if (isSuperBlock(elementInQuestion)) {
      selectionCriteria = "superblock";
      const index = selection.superblocks.findIndex((e2) => e2 === elementInQuestion);
      isSelected = index !== -1;
      selectionIsPrimary = isSelected && !selection.block && !selection.inline && index === selection.superblocks.length - 1;
    } else {
      selectionCriteria = "inline";
      isSelected = selection.inline === elementInQuestion;
      selectionIsPrimary = isSelected;
    }
    return /* @__PURE__ */ import_react2.default.createElement(
      CurrentElementRetrieverOptimizer,
      __spreadProps(__spreadValues({}, this.props), {
        isSelected,
        selectionCriteria,
        selectionIsPrimary
      })
    );
  }
  render() {
    return /* @__PURE__ */ import_react2.default.createElement(CurrentElementContext.Consumer, null, this.consume);
  }
};

// ../util/index.ts
var import_deep_equal = __toESM(require_deep_equal());
function countSize(root) {
  if (typeof root.text === "string") {
    return root.text.length;
  }
  const counts = root.children.map(countSize);
  if (counts.length === 0) {
    return 0;
  } else if (counts.length === 1) {
    return counts[0];
  }
  return counts.reduce((a, b) => a + b);
}
function countSizeAndWords(root) {
  if (typeof root.text === "string") {
    return [
      root.text.length,
      root.text.split(" ").filter((v) => v !== "").length
    ];
  }
  const results = root.children.map(countSizeAndWords);
  if (results.length === 0) {
    return [0, 0];
  } else if (results.length === 1) {
    return results[0];
  }
  return results.reduce((a, b) => {
    return [a[0] + b[0], a[1] + b[1]];
  });
}

// ../editor/index.ts
function localeReplacer(str, ...args) {
  return str.replace(/\{(\d+)\}/g, (match, indexMatch) => {
    if (typeof args[indexMatch] === "undefined") {
      return "?";
    } else if (args[indexMatch] === null) {
      return "";
    }
    return args[indexMatch].toString();
  });
}
var mimeExtensions = {
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
  "application/x-7z-compressed": "7z"
};
function mimeTypeToExtension(str) {
  const expectedExt = mimeExtensions[str];
  if (expectedExt) {
    return expectedExt;
  }
  return (str.split("/")[1] || "txt").substr(0, 3);
}
var templatedAttributes = [
  "thref",
  "textContent",
  "html",
  "forEach",
  "context",
  "uiHandler"
];
var templatedInteractiveActions = [
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
  "wheel"
];
var templatedStyledAttributes = [
  "styleHover",
  "styleActive"
];
var specialTypes = {
  "void-block": "container",
  "void-superblock": "container",
  "void-inline": "inline"
};
function getInfoFor(node3, i18nData) {
  if (node3.type === "document") {
    return null;
  }
  const isInteractive = templatedInteractiveActions.some((attr) => typeof node3[attr] !== "undefined" && node3[attr] !== null);
  const isTemplateStyled = templatedStyledAttributes.some((attr) => typeof node3[attr] !== "undefined" && node3[attr] !== null);
  const isBasicStyled = !!node3.style || node3.richClassList && node3.richClassList.length;
  const isBasicTemplated = templatedAttributes.some((attr) => typeof node3[attr] !== "undefined" && node3[attr] !== null);
  const isTemplate = isInteractive || isTemplateStyled || isBasicTemplated;
  const foundCustomName = !node3.givenName && node3.uiHandler ? i18nData.richUIHandlerElement[node3.uiHandler.replace(/-/g, "_")] : null;
  let nameLabel = node3.givenName ? node3.givenName : foundCustomName || (node3.type ? i18nData[specialTypes[node3.type] ? specialTypes[node3.type] : node3.type.replace(/-/g, "_")] || node3.type : i18nData.text);
  if (!node3.givenName && !foundCustomName) {
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
  return {
    isTemplate,
    isInteractive,
    name: nameLabel,
    isText: typeof node3.text === "string"
  };
}

// ../editor/slate/index.tsx
var defaultBaseI18nRichInfoEnglish = {
  actions: "actions",
  alt: "alt",
  classes: "classes",
  container: "container",
  context: "context",
  custom: "custom",
  each: "loop for each",
  file: "file",
  image: "image",
  inline: "inline",
  interactive: "interactive {0}",
  link: "link",
  list: "list",
  listItem: "list item",
  name: "name",
  paragraph: "paragraph",
  quote: "quote",
  renderCondition: "render condition",
  richClasses: {},
  richContainers: {},
  richCustoms: {},
  richTables: {},
  richUIHandlerElement: {},
  settings: "settings",
  sizes: "sizes",
  standalone: "standalone",
  style: "style",
  styleActive: "style active",
  styleHover: "style hover",
  styled: "styled {0}",
  styles: "styles",
  table: "table",
  tbody: "table body",
  td: "table column",
  template: "template {0}",
  templating: "templating",
  text: "text",
  tfoot: "table footer",
  th: "table column",
  thead: "table head",
  title: "title",
  tr: "table row",
  type: "type",
  uiHandler: "ui handler",
  video: "video"
};
var ElementWrapperDisabler = import_react3.default.createContext(false);
function findLastIndex(arr, fn) {
  let currentIndex = arr.length;
  while (currentIndex--) {
    if (fn(arr[currentIndex])) {
      return currentIndex;
    }
  }
  return -1;
}
var EDITOR_POOL = /* @__PURE__ */ new Map();
function onAnyTab(ev) {
  setTimeout(() => {
    const editorElement = EDITOR_POOL.get(document.activeElement);
    EDITOR_POOL.forEach((e2) => e2 !== editorElement && e2.selectiveHardBlurIfHasSelectedElement(ev, document.activeElement instanceof HTMLElement ? document.activeElement : null));
    if (editorElement) {
      editorElement.forceFocus();
    }
  }, 70);
}
if (typeof document !== "undefined") {
  document.addEventListener("keydown", (e2) => {
    if (e2.key === "Tab") {
      onAnyTab(e2);
    }
  });
}
var ALL_CONTAINERS = [];
var ALL_TABLES = [];
var ALL_CUSTOM = [];
var ALL_RICH_CLASSES = [];
var ALL_IS_LOADED = false;
function calculateStylesheet(stylesheet) {
  Array.from(stylesheet.cssRules).forEach((r2) => {
    if (r2 instanceof CSSMediaRule || r2.cssRules) {
      calculateStylesheet(r2);
      return;
    }
    const selectorSplitted = (r2.selectorText || r2.cssText.split("{")[0].trim()).split(" ");
    selectorSplitted.forEach((sbase) => {
      let internalSelectorSplitted = sbase.split(".");
      internalSelectorSplitted.shift();
      internalSelectorSplitted.forEach((s) => {
        let className = s;
        if (className.includes(":")) {
          className = className.split(":")[0];
        }
        if (className.endsWith(",")) {
          className = className.substr(0, className.length - 1);
        }
        if (className.startsWith(CONTAINER_CLASS_PREFIX)) {
          const toPush = className.substr(CONTAINER_CLASS_PREFIX.length);
          if (!ALL_CONTAINERS.includes(toPush)) {
            ALL_CONTAINERS.push(toPush);
          }
        } else if (className.startsWith(TABLE_CLASS_PREFIX)) {
          const toPush = className.substr(TABLE_CLASS_PREFIX.length);
          if (!ALL_TABLES.includes(toPush)) {
            ALL_TABLES.push(toPush);
          }
        } else if (className.startsWith(CUSTOM_CLASS_PREFIX)) {
          const toPush = className.substr(CUSTOM_CLASS_PREFIX.length);
          if (!ALL_CUSTOM.includes(toPush)) {
            ALL_CUSTOM.push(toPush);
          }
        } else if (className.startsWith(RICH_TEXT_CLASS_PREFIX)) {
          const toPush = className.substr(RICH_TEXT_CLASS_PREFIX.length);
          if (!ALL_RICH_CLASSES.includes(toPush)) {
            ALL_RICH_CLASSES.push(toPush);
          }
        }
      });
    });
  });
}
var ALL_PROMISE = new Promise(async (resolve) => {
  if (ALL_IS_LOADED) {
    resolve();
    return;
  }
  if (typeof document !== "undefined") {
    const stylesheetHrefPrefix = location.protocol + "//" + location.host + "/rest/resource/build";
    const foundPreloadedStylesheet = document.styleSheets && Array.from(document.styleSheets).find((s) => s.href && s.href.startsWith(stylesheetHrefPrefix));
    if (foundPreloadedStylesheet) {
      ALL_IS_LOADED = true;
      calculateStylesheet(foundPreloadedStylesheet);
      resolve();
    } else {
      const allLinks = document.head.querySelectorAll("link");
      const foundStylesheetNode = Array.from(allLinks).find((s) => s.href.startsWith(stylesheetHrefPrefix));
      if (!foundStylesheetNode) {
        ALL_IS_LOADED = true;
        resolve();
      } else {
        foundStylesheetNode.addEventListener("load", () => {
          const foundLoadedStyleSheet = document.styleSheets && Array.from(document.styleSheets).find((s) => s.href && s.href.startsWith(stylesheetHrefPrefix));
          ALL_IS_LOADED = true;
          if (foundLoadedStyleSheet) {
            calculateStylesheet(foundLoadedStyleSheet);
          }
          resolve();
        });
      }
    }
  }
});
var falseFn = () => false;
var SlateEditor = class extends import_react3.default.Component {
  /**
   * Constructs a new instance of the slate editor component
   * @param props the props
   */
  constructor(props) {
    super(props);
    this.isInNormalization = false;
    this.preventNormalize = false;
    /**
     * When a call to delete the current selected node is done, the selection anchors as they have been set
     * need to be removed and reset because otherwise they will be pointing to invalid nodes, this internal
     * flag allows to keep track of that so.
     * 
     * 1. the delete function gets called, the flag gets set to true
     * 2. slate is internally asked to delete at the selected and given path
     * 3. this triggers the change function which will try to recalculate anchors, but the old anchors are invalid
     * 4. because of the flag the change function knows the löast change was a selected delete and tells the anchor
     * recalculation not to reuse old anchors
     */
    this.lastChangeWasSelectedDelete = false;
    this.editableRef = import_react3.default.createRef();
    this.wrapperRef = import_react3.default.createRef();
    this.state = {
      // setting up the internal value from the property
      // first we pick the internal value if available
      // or otherwise we parse one
      treeValue: props.treeValue || (props.isRichText ? deserialize(props.value, null, {
        useContextRulesOf: props.rootContext
      }) : deserializePlain(props.value)),
      // we are synced
      synced: true,
      // focused
      focused: false,
      // set up the anchors
      currentText: null,
      currentInlineElement: null,
      currentBlockElement: null,
      currentSuperBlockElements: null,
      currentTextAnchor: null,
      currentInlineElementAnchor: null,
      currentBlockElementAnchor: null,
      currentSuperBlockElementAnchors: null,
      currentSelectedText: null,
      currentSelectedInlineElement: null,
      currentSelectedBlockElement: null,
      currentSelectedSuperBlockElements: null,
      currentSelectedTextAnchor: null,
      currentSelectedInlineElementAnchor: null,
      currentSelectedBlockElementAnchor: null,
      currentSelectedSuperBlockElementAnchors: null,
      currentSelectedElement: null,
      currentSelectedElementAnchor: null,
      previousSelectedElementAnchor: null,
      previousTextAnchor: null,
      isRichText: props.isRichText,
      currentRootContext: props.rootContext || null,
      currentSelectedBlockContext: null,
      currentSelectedInlineContext: null,
      currentSelectedTopmostSuperBlockContext: null,
      currentSelectedElementContext: null,
      currentValid: props.currentValid,
      // ensure SSR compatibility
      // since we cannot read the CSS file on the server side
      // as we have no access to stylesheets
      allContainers: [],
      allCustom: [],
      allRichClasses: [],
      allTables: [],
      allowsInsertElement: falseFn,
      allowsText: false,
      inlineIsVoid: false,
      blockIsVoid: false,
      topmostSuperblockIsVoid: false,
      superBlockUIHandler: null,
      blockUIHandler: null,
      inlineUIHandler: null
    };
    this.isUnmounted = false;
    const rawEditor = createEditor();
    this.editor = withReact(withHistory(rawEditor));
    this.forceFocus = this.forceFocus.bind(this);
    this.forceBlur = this.forceBlur.bind(this);
    this.normalizeNode = this.normalizeNode.bind(this);
    this.insertBreak = this.insertBreak.bind(this);
    this.insertSuperbreak = this.insertSuperbreak.bind(this);
    this.deleteBackward = this.deleteBackward.bind(this);
    this.deleteForward = this.deleteForward.bind(this);
    this.setFragmentData = this.setFragmentData.bind(this);
    this.findAndAppendFilesToDataTransfer = this.findAndAppendFilesToDataTransfer.bind(this);
    this.insertData = this.insertData.bind(this);
    this.findAndInsertFilesFromDataTransfer = this.findAndInsertFilesFromDataTransfer.bind(this);
    this.isVoid = this.isVoid.bind(this);
    this.getContextFor = this.getContextFor.bind(this);
    this.getRootContext = this.getRootContext.bind(this);
    this.originalSetFragmentData = this.editor.setFragmentData;
    this.originalInsertData = this.editor.insertData;
    this.editor.isInline = this.isInline;
    this.editor.isVoid = this.isVoid;
    this.editor.normalizeNode = this.normalizeNode;
    this.editor.insertBreak = this.insertBreak;
    this.editor.deleteBackward = this.deleteBackward;
    this.editor.deleteForward = this.deleteForward;
    this.editor.setFragmentData = this.setFragmentData;
    this.editor.insertData = this.insertData;
    this.getPreviousSelectedElementAnchor = this.getPreviousSelectedElementAnchor.bind(this);
    this.getPreviousTextAnchor = this.getPreviousTextAnchor.bind(this);
    this.deleteSelectedNode = this.deleteSelectedNode.bind(this);
    this.deletePath = this.deletePath.bind(this);
    this.setValue = this.setValue.bind(this);
    this.renderElement = this.renderElement.bind(this);
    this.actuallyRenderElement = this.actuallyRenderElement.bind(this);
    this.onChange = this.onChange.bind(this);
    this.renderText = this.renderText.bind(this);
    this.onFocusedChange = this.onFocusedChange.bind(this);
    this.onBlurredChange = this.onBlurredChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.deleteTableColumn = this.deleteTableColumn.bind(this);
    this.deleteTableRow = this.deleteTableRow.bind(this);
    this.selectPath = this.selectPath.bind(this);
    this.movePaths = this.movePaths.bind(this);
    this.focus = this.focus.bind(this);
    this.insertImage = this.insertImage.bind(this);
    this.insertVideo = this.insertVideo.bind(this);
    this.updateVideo = this.updateVideo.bind(this);
    this.insertFile = this.insertFile.bind(this);
    this.insertTemplateText = this.insertTemplateText.bind(this);
    this.updateTemplateText = this.updateTemplateText.bind(this);
    this.insertTemplateHTML = this.insertTemplateHTML.bind(this);
    this.updateTemplateHTML = this.updateTemplateHTML.bind(this);
    this.insertTable = this.insertTable.bind(this);
    this.insertTableColumn = this.insertTableColumn.bind(this);
    this.insertTableRow = this.insertTableRow.bind(this);
    this.toggleTable = this.toggleTable.bind(this);
    this.canToggleTable = this.canToggleTable.bind(this);
    this.insertContainer = this.insertContainer.bind(this);
    this.insertCustom = this.insertCustom.bind(this);
    this.toggleQuote = this.toggleQuote.bind(this);
    this.toggleTitle = this.toggleTitle.bind(this);
    this.insertList = this.insertList.bind(this);
    this.toggleLink = this.toggleLink.bind(this);
    this.updateLink = this.updateLink.bind(this);
    this.setStyle = this.setStyle.bind(this);
    this.set = this.set.bind(this);
    this.setHoverStyle = this.setHoverStyle.bind(this);
    this.setActiveStyle = this.setActiveStyle.bind(this);
    this.setRichClasses = this.setRichClasses.bind(this);
    this.setContext = this.setContext.bind(this);
    this.setIfCondition = this.setIfCondition.bind(this);
    this.setForEach = this.setForEach.bind(this);
    this.formatToggle = this.formatToggle.bind(this);
    this.setAction = this.setAction.bind(this);
    this.insertElement = this.insertElement.bind(this);
    this.getState = this.getState.bind(this);
    this.setUIHandler = this.setUIHandler.bind(this);
    this.setUIHandlerArg = this.setUIHandlerArg.bind(this);
    this.availableFilteringFunction = this.availableFilteringFunction.bind(this);
    this.calculateAnchors = this.calculateAnchors.bind(this);
    this.updateNodeAt = this.updateNodeAt.bind(this);
    this.insertNodeAt = this.insertNodeAt.bind(this);
    this.deleteNodeAt = this.deleteNodeAt.bind(this);
    this.mergeNodesAt = this.mergeNodesAt.bind(this);
    this.splitElementAndEscapeChildIntoParentAt = this.splitElementAndEscapeChildIntoParentAt.bind(this);
    this.wrapNodeAt = this.wrapNodeAt.bind(this);
    this.getNodeAt = this.getNodeAt.bind(this);
    this.cloneElementAt = this.cloneElementAt.bind(this);
    this.moveNodeAt = this.moveNodeAt.bind(this);
    this.hardBlur = this.hardBlur.bind(this);
    this.selectiveHardBlurIfHasSelectedElement = this.selectiveHardBlurIfHasSelectedElement.bind(this);
    this.softBlur = this.softBlur.bind(this);
  }
  /**
   * The standard derived state function is used in order to set the state in an effective way
   * it is used because the behaviour of this editor is rather complex
   * @param props the current props
   * @param state the current state
   * @returns a partial of the new state or null
   */
  static getDerivedStateFromProps(props, state) {
    if (state.synced) {
      if (props.treeValue) {
        if (!state.treeValue || props.treeValue.id !== state.treeValue.id) {
          return {
            treeValue: props.treeValue,
            isRichText: props.isRichText,
            currentRootContext: props.rootContext || null,
            currentValid: props.currentValid,
            currentText: null,
            currentInlineElement: null,
            currentBlockElement: null,
            currentSuperBlockElements: null,
            currentTextAnchor: null,
            currentInlineElementAnchor: null,
            currentBlockElementAnchor: null,
            currentSuperBlockElementAnchors: null,
            currentSelectedText: null,
            currentSelectedInlineElement: null,
            currentSelectedBlockElement: null,
            currentSelectedSuperBlockElements: null,
            currentSelectedTextAnchor: null,
            currentSelectedInlineElementAnchor: null,
            currentSelectedBlockElementAnchor: null,
            currentSelectedSuperBlockElementAnchors: null,
            currentSelectedBlockContext: null,
            currentSelectedInlineContext: null,
            currentSelectedTopmostSuperBlockContext: null,
            currentSelectedElement: null,
            currentSelectedElementAnchor: null,
            currentSelectedElementContext: null,
            previousSelectedElementAnchor: null,
            previousTextAnchor: null,
            allowsInsertElement: falseFn,
            allowsText: false,
            inlineIsVoid: false,
            blockIsVoid: false,
            topmostSuperblockIsVoid: false,
            superBlockUIHandler: null,
            blockUIHandler: null,
            inlineUIHandler: null
          };
        }
      } else {
        const newtreeValue = props.isRichText ? deserialize(props.value, state.treeValue, {
          useContextRulesOf: state.currentRootContext
        }) : deserializePlain(props.value, state.treeValue);
        if (!state.treeValue || newtreeValue.id !== state.treeValue.id) {
          return {
            treeValue: newtreeValue,
            isRichText: props.isRichText,
            currentRootContext: props.rootContext || null,
            currentValid: props.currentValid,
            currentText: null,
            currentInlineElement: null,
            currentBlockElement: null,
            currentSuperBlockElements: null,
            currentTextAnchor: null,
            currentInlineElementAnchor: null,
            currentBlockElementAnchor: null,
            currentSuperBlockElementAnchors: null,
            currentSelectedText: null,
            currentSelectedInlineElement: null,
            currentSelectedBlockElement: null,
            currentSelectedSuperBlockElements: null,
            currentSelectedTextAnchor: null,
            currentSelectedInlineElementAnchor: null,
            currentSelectedBlockElementAnchor: null,
            currentSelectedSuperBlockElementAnchors: null,
            currentSelectedElement: null,
            currentSelectedElementAnchor: null,
            previousSelectedElementAnchor: null,
            previousTextAnchor: null,
            allowsInsertElement: falseFn,
            allowsText: false,
            inlineIsVoid: false,
            blockIsVoid: false,
            topmostSuperblockIsVoid: false,
            superBlockUIHandler: null,
            blockUIHandler: null,
            inlineUIHandler: null
          };
        }
      }
    }
    return null;
  }
  /**
   * This function runs and prepares the tree that is to be inserted into the
   * pasted content
   * @param data the data transfer of the clipboard
   * @param blobs an object that contains the blob transfer object
   * @param element the element we are currently processing
   */
  async findAndInsertFilesFromDataTransfer(data, element) {
    let newElement = element;
    let wasOverwritten = false;
    if (newElement.type === "image" || newElement.type === "file") {
      const idSpecified = newElement.srcId;
      const urlToReadFrom = newElement.src;
      const existantFile = newElement.type === "image" ? this.props.onRetrieveImage(idSpecified) : this.props.onRetrieveFile(idSpecified);
      if (existantFile) {
        if (newElement.type === "image") {
          const newImageNode = __spreadProps(__spreadValues({}, newElement), {
            type: "image",
            children: [
              {
                bold: false,
                italic: false,
                text: "",
                underline: false
              }
            ],
            src: existantFile.file.url,
            srcSet: existantFile.srcset,
            sizes: "70vw"
          });
          newElement = newImageNode;
          wasOverwritten = true;
        } else {
          const newFileNode = __spreadProps(__spreadValues({}, newElement), {
            type: "file",
            children: [
              {
                bold: false,
                italic: false,
                text: "",
                underline: false
              }
            ],
            src: existantFile.url
          });
          newElement = newFileNode;
          wasOverwritten = true;
        }
      } else {
        const infoFromInsert = await this.props.onInsertFileFromURL(
          urlToReadFrom,
          newElement.fileName || newElement.alt || idSpecified,
          newElement.type === "image"
        );
        if (infoFromInsert) {
          if (newElement.type === "image") {
            const imageNode = __spreadProps(__spreadValues({}, newElement), {
              type: "image",
              children: [
                {
                  bold: false,
                  italic: false,
                  text: "",
                  underline: false
                }
              ],
              height: infoFromInsert.height,
              width: infoFromInsert.width,
              src: infoFromInsert.result.url,
              srcId: infoFromInsert.result.id,
              srcSet: null
            });
            newElement = imageNode;
            wasOverwritten = true;
          } else {
            const fileNode = __spreadProps(__spreadValues({}, newElement), {
              type: "file",
              children: [
                {
                  bold: false,
                  italic: false,
                  text: "",
                  underline: false
                }
              ],
              size: prettyBytes(infoFromInsert.result.size),
              src: infoFromInsert.result.url,
              srcId: infoFromInsert.result.id
            });
            newElement = fileNode;
            wasOverwritten = true;
          }
        } else {
          newElement = null;
          wasOverwritten = true;
        }
      }
    }
    if (newElement && newElement.children && !wasOverwritten) {
      newElement = __spreadValues({}, newElement);
      newElement.children = (await Promise.all(newElement.children.map(this.findAndInsertFilesFromDataTransfer.bind(this, data)))).filter((e2) => !!e2);
    }
    return newElement;
  }
  /**
   * This function runs when we are inserting using the slate clipboard
   * @param data the data transfer
   */
  async insertData(data) {
    const fragment2 = data.getData("application/x-slate-fragment");
    if (fragment2) {
      console.warn("The editor used the fallback clipboard mechanism rather than the new clipboard, files may fail to load");
      const decoded = decodeURIComponent(window.atob(fragment2));
      const parsed = (await Promise.all(JSON.parse(decoded).map(this.findAndInsertFilesFromDataTransfer.bind(this, data)))).filter((e2) => !!e2);
      if (!parsed || !parsed.length) {
        console.warn("Failed to find children to add");
        return;
      }
      const shouldUseInsertFragment = !isSuperBlock(parsed[0]);
      if (shouldUseInsertFragment) {
        Transforms.insertFragment(this.editor, parsed);
      } else if (this.state.currentBlockElementAnchor) {
        Transforms.insertNodes(this.editor, parsed);
      }
      return;
    }
    if (data.files.length) {
      Array.from(data.files).forEach((f) => {
        if (this.props.supportedImageTypes.includes(f.type)) {
          this.insertImage(f, false);
        } else {
          this.insertFile(f);
        }
      });
      return;
    }
    const htmlData = data.getData("text/html");
    if (htmlData) {
      const deserialized = deserialize(htmlData, null, {
        dontNormalize: true
      });
      const parsed = (await Promise.all(deserialized.children.map(this.findAndInsertFilesFromDataTransfer.bind(this, data)))).filter((e2) => !!e2);
      if (!parsed || !parsed.length) {
        console.warn("Failed to find children to add");
        return;
      }
      const shouldUseInsertFragment = !isSuperBlock(parsed[0]);
      if (shouldUseInsertFragment) {
        Transforms.insertFragment(this.editor, parsed);
      } else if (this.state.currentBlockElementAnchor) {
        Transforms.insertNodes(this.editor, parsed);
      }
      return;
    } else {
      this.originalInsertData(data);
      return;
    }
  }
  getDataURI(blob) {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise((resolve, reject) => {
      reader.addEventListener(
        "load",
        () => {
          resolve(reader.result);
        },
        false
      );
      reader.addEventListener("error", () => {
        reject();
      });
    });
  }
  /**
   * Runs per each rich element that has just been copied to the clipboard
   * @param data the data transfer
   * @param element the rich element we have just copied
   */
  async findAndAppendFilesToDataTransfer(data, element) {
    if (element.type === "image" || element.type === "file") {
      const urlToReadFrom = element.src;
      try {
        const blob = await (await fetch(urlToReadFrom)).blob();
        const dataURI = await this.getDataURI(blob);
        element.src = dataURI;
        delete element.srcSet;
      } catch (err) {
      }
    }
    if (element.children) {
      await Promise.all(element.children.map(this.findAndAppendFilesToDataTransfer.bind(this, data)));
    }
  }
  /**
   * This function runs when we are preparing the slate clipboard
   * @param data the data transfer
   */
  async setFragmentData(data) {
    this.originalSetFragmentData(data);
    const fragment64 = data.getData("application/x-slate-fragment");
    if (fragment64 && navigator.clipboard) {
      const copyDataTree = JSON.parse(decodeURIComponent(atob(fragment64)));
      await Promise.all(copyDataTree.map(this.findAndAppendFilesToDataTransfer.bind(this, data)));
      const document2 = {
        children: copyDataTree,
        id: "COPY_ELEMENT",
        rich: true,
        type: "document"
      };
      const html = serialize(document2);
      const htmlStr = html.map((n3) => n3.outerHTML).join("");
      const text = serializeString(document2);
      const textPlain = new Blob([text], { type: "text/plain" });
      const htmlBody = new Blob([htmlStr], { type: "text/html" });
      const item = new ClipboardItem({
        "text/plain": textPlain,
        "text/html": htmlBody
      });
      await navigator.clipboard.write([item]);
    }
  }
  updateNodeAt(path3, v) {
    Transforms.setNodes(this.editor, v, {
      at: path3
    });
  }
  deleteNodeAt(path3) {
    Transforms.delete(this.editor, {
      at: path3
    });
  }
  insertNodeAt(path3, node3, targetIndex) {
    Transforms.insertNodes(this.editor, node3, {
      at: [...path3, targetIndex]
    });
  }
  mergeNodesAt(basePath, referencePath) {
    const parentPath = [...basePath];
    parentPath.pop();
    Transforms.mergeNodes(this.editor, {
      at: referencePath,
      voids: true
    });
  }
  splitElementAndEscapeChildIntoParentAt(path3, escapingChildIndex) {
    Transforms.liftNodes(this.editor, {
      at: [...path3, escapingChildIndex]
    });
  }
  wrapNodeAt(path3, wrappers) {
    wrappers.forEach((wrapper) => {
      Transforms.wrapNodes(this.editor, wrapper, {
        at: path3
      });
    });
  }
  getNodeAt(path3) {
    return Node.get(this.editor, path3);
  }
  cloneElementAt(fromPath, toPath) {
    const toCopyNode = this.getNodeAt(fromPath);
    const copy = __spreadValues({}, toCopyNode);
    copy.children = [];
    Transforms.insertNodes(this.editor, copy, {
      at: toPath
    });
  }
  moveNodeAt(fromPath, toPath) {
    Transforms.moveNodes(this.editor, {
      at: fromPath,
      to: toPath
    });
  }
  /**
   * Normalization funciton that overrides the normalization
   * of the standard editor
   * @param entry the entry we are normalizing
   */
  normalizeNode(entry) {
    if (this.isInNormalization || this.preventNormalize) {
      return;
    }
    const [node3, path3] = entry;
    if (Editor.isEditor(node3)) {
      this.isInNormalization = true;
      if (node3.children.length === 0) {
        Transforms.insertNodes(
          this.editor,
          { type: "paragraph", children: [STANDARD_TEXT_NODE()] },
          { at: path3.concat(0) }
        );
      } else {
        const pseudoDocument = {
          type: "document",
          children: node3.children,
          id: this.state.treeValue.id,
          rich: this.state.treeValue.rich
        };
        const nodeAtSelection = this.editor.selection ? this.getNodeAt(this.editor.selection.anchor.path) : null;
        const nodeIgnore = [];
        if (Text.isText(nodeAtSelection) && nodeAtSelection.text === "") {
          nodeIgnore.push(this.editor.selection.anchor.path);
        }
        try {
          normalizeElement(
            pseudoDocument,
            [],
            pseudoDocument,
            {
              workOnOriginal: false,
              updateNodeAt: this.updateNodeAt,
              deleteNodeAt: this.deleteNodeAt,
              insertNodeAt: this.insertNodeAt,
              mergeNodesAt: this.mergeNodesAt,
              splitElementAndEscapeChildIntoParentAt: this.splitElementAndEscapeChildIntoParentAt,
              wrapNodeAt: this.wrapNodeAt,
              getNodeAt: this.getNodeAt,
              cloneElementAt: this.cloneElementAt,
              moveNodeAt: this.moveNodeAt
            },
            {
              ignoreNodesAt: nodeIgnore,
              useContextRulesOf: this.state.currentRootContext
            }
          );
        } catch (err) {
          console.error(err.stack);
        }
      }
      this.isInNormalization = false;
    }
  }
  /**
   * Override for the default editor inline function
   * @param element the element that is to be considered
   * @returns a boolean on whether it represents an inline element
   */
  isInline(element) {
    return isInline(element);
  }
  /**
   * Override for the default editor void function
   * @param element the element that is to be considered
   * @returns a boolean on whether it represents a void element
   */
  isVoid(element) {
    return isVoid(element);
  }
  /**
   * Override for the default editor insert break function
   */
  insertBreak() {
    const currentSuperBlockElement = this.state.currentSuperBlockElements && this.state.currentSuperBlockElements[this.state.currentSuperBlockElements.length - 1];
    const isListItemBreak = currentSuperBlockElement && // and we are within a list and a list item
    currentSuperBlockElement.type === "list-item";
    if (
      // if we are simply collapsed
      Range.isCollapsed(this.editor.selection) && // and we have a list item
      isListItemBreak && // and that first children is an empty paragraph
      // there may be a second list
      currentSuperBlockElement.children[0].type === "paragraph" && // with one empty text node
      currentSuperBlockElement.children[0].children.length === 1 && Text.isText(currentSuperBlockElement.children[0].children[0]) && currentSuperBlockElement.children[0].children[0].text === ""
    ) {
      this.breakList();
      return;
    }
    if (!this.state.currentBlockElement) {
      Transforms.splitNodes(this.editor, { always: true });
      return;
    }
    if (this.editor.isVoid(this.state.currentBlockElement)) {
      Transforms.insertNodes(this.editor, {
        type: "paragraph",
        children: [
          __spreadProps(__spreadValues({}, this.state.currentText), {
            text: ""
          })
        ]
      });
      return;
    }
    const end2 = Range.end(this.editor.selection);
    const finalBlockPath = [...this.state.currentBlockElementAnchor];
    let lastChild = this.state.currentBlockElement;
    if (lastChild && Element2.isElement(lastChild)) {
      do {
        const lastPoint = lastChild.children.length - 1;
        lastChild = lastChild.children[lastPoint];
        finalBlockPath.push(lastPoint);
      } while (Element2.isElement(lastChild));
    }
    const finalBlockOffset = lastChild ? lastChild.text.length : null;
    const isEndOfLine = end2.offset === finalBlockOffset && Path.equals(finalBlockPath, end2.path);
    if (isListItemBreak) {
      Transforms.splitNodes(this.editor, { always: true, match: (n3) => n3.type === "list-item" });
    } else {
      Transforms.splitNodes(this.editor, { always: true });
    }
    if (isEndOfLine) {
      Transforms.setNodes(this.editor, {
        uiHandler: null,
        html: null,
        uiHandlerArgs: null,
        textContent: null
      }, {
        match: (n3) => {
          return isBlock(n3);
        },
        mode: "lowest",
        at: this.editor.selection.anchor.path
      });
    }
  }
  /**
   * Override function to perform a forward delete
   * backwards event
   * @param unit the unit we are dealing with
   */
  deleteForward(unit) {
    const { selection } = this.editor;
    if (selection && Range.isCollapsed(selection)) {
      if (this.state.currentBlockElement && this.state.currentBlockElement.children.length === 1 && Text.isText(this.state.currentBlockElement.children[0]) && this.state.currentBlockElement.children[0].text === "") {
        Transforms.delete(this.editor, { at: this.state.currentBlockElementAnchor });
      } else {
        Transforms.delete(this.editor, { unit });
      }
    }
  }
  /**
   * Override function to perform a standard delete
   * backwards event
   * @param unit the unit we are dealing with
   */
  deleteBackward(unit) {
    const { selection } = this.editor;
    const currentSuperBlockElement = this.state.currentSuperBlockElements && this.state.currentSuperBlockElements[this.state.currentSuperBlockElements.length - 1];
    if (selection && // and it's collapsed
    Range.isCollapsed(selection) && currentSuperBlockElement && currentSuperBlockElement.type === "list-item" && // and we are deleting a character of a word
    ((unit === "character" || unit === "word") && // and we are at the start of the block
    selection.anchor.offset === 0 || // or we are removing a line or block
    (unit === "line" || unit == "block"))) {
      this.breakList();
    } else if (selection && Range.isCollapsed(selection)) {
      Transforms.delete(this.editor, { unit, reverse: true });
    }
  }
  /**
   * Breaks the list based on the current selection
   * we must be in a list currently, this function is called
   * by the delete backwards functionality as well as the toggle
   * list one
   */
  breakList() {
    this.preventNormalize = true;
    Transforms.unwrapNodes(
      this.editor,
      {
        match: (n3) => {
          return n3.type === "list";
        },
        mode: "lowest",
        split: true
      }
    );
    this.preventNormalize = false;
    Transforms.unwrapNodes(
      this.editor,
      {
        match: (n3) => {
          return n3.type === "list-item";
        },
        mode: "lowest",
        split: true
      }
    );
  }
  /**
   * Inserts a superblock break, since you might not be able to escape
   * superblocks, eg. such as a single container, you will use a superblock break
   * alt+enter in order to escape the superblock
   * 
   * @param at the path of the superblock to insert a break at
   * @param reverse whether to insert it before or after, by default it will be after, use this flag for before
   */
  insertSuperbreak(at, reverse) {
    let currentElementToBreakFromAnchor = at || this.state.currentBlockElement && isVoid(this.state.currentBlockElement) && this.state.currentBlockElementAnchor || this.state.currentSuperBlockElements && this.state.currentSuperBlockElementAnchors[this.state.currentSuperBlockElementAnchors.length - 1];
    if (!currentElementToBreakFromAnchor) {
      return;
    }
    let currentElementToBreakFrom = Node.get(this.editor, currentElementToBreakFromAnchor);
    currentElementToBreakFromAnchor = [...currentElementToBreakFromAnchor];
    let parentSuperBlockElementAnchor = [...currentElementToBreakFromAnchor];
    parentSuperBlockElementAnchor.pop();
    let parentSuperBlockElement = null;
    while (true) {
      parentSuperBlockElement = Node.get(this.editor, parentSuperBlockElementAnchor);
      const allowsChildren = SERIALIZATION_REGISTRY.ALLOWS_CHILDREN[parentSuperBlockElement.type];
      const canParentHaveParagraphAsChildren = !allowsChildren || allowsChildren.includes("paragraph");
      const isASoloEscapableType = currentElementToBreakFrom.type === "list";
      if (
        // list and list items can be escaped by
        // standard entering so we don't allow that as a break point
        !isASoloEscapableType && canParentHaveParagraphAsChildren || !parentSuperBlockElementAnchor.length
      ) {
        break;
      }
      parentSuperBlockElementAnchor.pop();
      currentElementToBreakFromAnchor.pop();
      currentElementToBreakFrom = Node.get(this.editor, currentElementToBreakFromAnchor);
    }
    ;
    if (currentElementToBreakFrom.type === "list") {
      return;
    }
    const nextAnchor = currentElementToBreakFromAnchor;
    if (!reverse) {
      nextAnchor[nextAnchor.length - 1]++;
    }
    Transforms.insertNodes(this.editor, {
      type: "paragraph",
      children: [
        {
          text: ""
        }
      ]
    }, { at: nextAnchor });
    const nextAnchorText = nextAnchor.concat([0]);
    this.focusAt({
      anchor: {
        offset: 0,
        path: nextAnchorText
      },
      focus: {
        offset: 0,
        path: nextAnchorText
      }
    });
  }
  /**
   * Calculates the anchors and the context based on a given value
   * (or the current value of the editor) and the selection nodes
   * that are currently selected (or it will override with the defaults)
   * @param anchor the anchor that is currently deemed to be selected at
   * @param value the value that we are working with, if not provided it will take it from the state
   * @param currentGivenSelectedNodeAnchor the selected node anchor, and text anchor if not provided
   * it will use the default values based on the logic of the calculated anchors
   */
  calculateAnchors(anchor, value, currentGivenSelectedNodeAnchor) {
    let currentInlineElement = null;
    let currentInlineElementAnchor = null;
    let currentBlockElement = null;
    let currentBlockElementAnchor = null;
    let currentSuperBlockElements = null;
    let currentSuperBlockElementAnchors = null;
    let currentText = null;
    let currentTextAnchor = null;
    let previousSelectedElementAnchor = this.state.currentSelectedElementAnchor;
    let previousTextAnchor = this.state.currentTextAnchor;
    if (anchor) {
      let currentLoopingElement = value ? {
        children: value
      } : this.state.treeValue;
      const loopingAnchor = [];
      anchor.forEach((n3, index) => {
        loopingAnchor.push(n3);
        currentLoopingElement = currentLoopingElement && currentLoopingElement.children[n3];
        if (currentLoopingElement && SERIALIZATION_REGISTRY.INLINES[currentLoopingElement.type]) {
          currentInlineElement = currentLoopingElement;
          currentInlineElementAnchor = [...loopingAnchor];
        }
        if (currentLoopingElement && SERIALIZATION_REGISTRY.BLOCKS[currentLoopingElement.type]) {
          currentBlockElement = currentLoopingElement;
          currentBlockElementAnchor = [...loopingAnchor];
        }
        if (currentLoopingElement && SERIALIZATION_REGISTRY.SUPERBLOCKS[currentLoopingElement.type]) {
          if (!currentSuperBlockElements) {
            currentSuperBlockElements = [];
            currentSuperBlockElementAnchors = [];
          }
          currentSuperBlockElements.push(currentLoopingElement);
          currentSuperBlockElementAnchors.push([...loopingAnchor]);
        }
        if (currentLoopingElement && Text.isText(currentLoopingElement)) {
          currentText = currentLoopingElement;
          currentTextAnchor = [...loopingAnchor];
        }
      });
    }
    let currentSelectedInlineElementAnchor = null;
    let currentSelectedInlineElement = null;
    let currentSelectedBlockElement = null;
    let currentSelectedSuperBlockElements = null;
    let currentSelectedBlockElementAnchor = null;
    let currentSelectedSuperBlockElementAnchors = null;
    let currentSelectedText = null;
    let currentSelectedTextAnchor = null;
    let givenSelectedNodeAnchorIsCorrupted = false;
    if (currentGivenSelectedNodeAnchor) {
      let currentSelectedElementCorruptionTest = value ? {
        children: value
      } : this.state.treeValue;
      givenSelectedNodeAnchorIsCorrupted = currentGivenSelectedNodeAnchor.some((n3, index) => {
        if (!currentSelectedElementCorruptionTest || !currentSelectedElementCorruptionTest.children || !currentSelectedElementCorruptionTest.children[n3]) {
          return true;
        }
        currentSelectedElementCorruptionTest = currentSelectedElementCorruptionTest.children[n3];
      });
    }
    if (!currentGivenSelectedNodeAnchor || givenSelectedNodeAnchorIsCorrupted) {
      currentSelectedInlineElementAnchor = currentInlineElementAnchor;
      currentSelectedInlineElement = currentInlineElement;
      currentSelectedBlockElement = currentBlockElement;
      currentSelectedBlockElementAnchor = currentBlockElementAnchor;
      currentSelectedSuperBlockElements = currentSuperBlockElements;
      currentSelectedSuperBlockElementAnchors = currentSuperBlockElementAnchors;
      currentSelectedText = currentText;
      currentSelectedTextAnchor = currentTextAnchor;
    } else {
      const loopingAnchor = [];
      let currentLoopingElement = value ? {
        children: value
      } : this.state.treeValue;
      currentGivenSelectedNodeAnchor.forEach((n3, index) => {
        currentLoopingElement = currentLoopingElement && currentLoopingElement.children[n3];
        loopingAnchor.push(n3);
        if (currentLoopingElement && SERIALIZATION_REGISTRY.INLINES[currentLoopingElement.type]) {
          currentSelectedInlineElement = currentLoopingElement;
          currentSelectedInlineElementAnchor = [...loopingAnchor];
        }
        if (currentLoopingElement && SERIALIZATION_REGISTRY.BLOCKS[currentLoopingElement.type]) {
          currentSelectedBlockElement = currentLoopingElement;
          currentSelectedBlockElementAnchor = [...loopingAnchor];
        }
        if (currentLoopingElement && SERIALIZATION_REGISTRY.SUPERBLOCKS[currentLoopingElement.type]) {
          if (!currentSelectedSuperBlockElements) {
            currentSelectedSuperBlockElements = [];
            currentSelectedSuperBlockElementAnchors = [];
          }
          currentSelectedSuperBlockElements.push(currentLoopingElement);
          currentSelectedSuperBlockElementAnchors.push([...loopingAnchor]);
        }
        if (currentLoopingElement && Text.isText(currentLoopingElement)) {
          currentSelectedText = currentLoopingElement;
          currentSelectedTextAnchor = [...loopingAnchor];
        }
      });
    }
    const pseudoDocument = {
      type: "document",
      children: value,
      id: this.state.treeValue.id,
      rich: this.state.treeValue.rich
    };
    const currentSelectedTopmostSuperBlockContext = getContextFor(
      currentSelectedSuperBlockElementAnchors && currentSelectedSuperBlockElementAnchors[currentSelectedSuperBlockElementAnchors.length - 1],
      "final",
      pseudoDocument,
      this.state.currentRootContext
    );
    const currentSelectedBlockContext = getContextFor(
      currentSelectedBlockElementAnchor,
      "final",
      pseudoDocument,
      this.state.currentRootContext
    );
    const currentSelectedInlineContext = getContextFor(
      currentSelectedInlineElementAnchor,
      "final",
      pseudoDocument,
      this.state.currentRootContext
    );
    const baseSuperBlock = currentSelectedSuperBlockElements && currentSelectedSuperBlockElements[currentSelectedSuperBlockElements.length - 1] || pseudoDocument;
    const baseAllowedChildreOfSuperBlock = baseSuperBlock ? getAllowedChildrenTypes(baseSuperBlock) : [];
    const superBlockUIHandler = getUIHandlerValueWithKnownContextFor(
      baseSuperBlock,
      currentSelectedTopmostSuperBlockContext || this.state.currentRootContext,
      this.state.currentRootContext
    );
    const baseBlock = currentSelectedBlockElement;
    const baseAllowedChildrenOfBlock = baseBlock ? getAllowedChildrenTypes(baseBlock) : [];
    const blockUIHandler = getUIHandlerValueWithKnownContextFor(
      baseBlock,
      currentSelectedBlockContext,
      this.state.currentRootContext
    );
    const inlineUIHandler = getUIHandlerValueWithKnownContextFor(
      currentSelectedInlineElement,
      currentSelectedInlineContext,
      this.state.currentRootContext
    );
    const allowsInsertElement = (element, opts = {}) => {
      if (opts.collapsed || opts.extended || opts.selected) {
        if (opts.selected && !this.editor.selection) {
          return false;
        }
        const isCollapsed = this.editor.selection && Range.isCollapsed(this.editor.selection);
        if (!isCollapsed && opts.collapsed) {
          return false;
        } else if (isCollapsed && opts.extended) {
          return false;
        }
      }
      if (isSuperBlock(element) || isBlock(element)) {
        if (!baseAllowedChildreOfSuperBlock.includes(element.type)) {
          return false;
        }
        return superBlockUIHandler && superBlockUIHandler.allowsChildren ? superBlockUIHandler.allowsChildren(element, baseSuperBlock) : true;
      } else if (isInline(element)) {
        if (!baseAllowedChildrenOfBlock.includes(element.type)) {
          return false;
        }
        return blockUIHandler && blockUIHandler.allowsChildren ? blockUIHandler.allowsChildren(element, baseBlock) : true;
      } else {
        return false;
      }
    };
    const topmostSuperblock = currentSelectedSuperBlockElements && currentSelectedSuperBlockElements[currentSelectedSuperBlockElements.length - 1];
    const topmostSuperblockAnchor = currentSelectedSuperBlockElementAnchors && currentSelectedSuperBlockElementAnchors[currentSelectedSuperBlockElementAnchors.length - 1];
    const inlineIsVoid = currentSelectedInlineElement ? isVoid(currentSelectedInlineElement) : false;
    const blockIsVoid = currentSelectedBlockElement ? isVoid(currentSelectedBlockElement) : false;
    const topmostSuperblockIsVoid = topmostSuperblock ? isVoid(topmostSuperblock) : false;
    const voidElement = inlineIsVoid || blockIsVoid || topmostSuperblockIsVoid;
    const allowsText = !voidElement;
    const currentSelectedElement = currentSelectedInlineElement || currentSelectedBlockElement || topmostSuperblock || null;
    const currentSelectedElementAnchor = currentSelectedInlineElementAnchor || currentSelectedBlockElementAnchor || topmostSuperblockAnchor || null;
    return {
      currentTextAnchor,
      currentText,
      currentBlockElement,
      currentBlockElementAnchor,
      currentInlineElement,
      currentInlineElementAnchor,
      currentSuperBlockElements,
      currentSuperBlockElementAnchors,
      currentSelectedText,
      currentSelectedTextAnchor,
      currentSelectedBlockElement,
      currentSelectedBlockElementAnchor,
      currentSelectedInlineElement,
      currentSelectedInlineElementAnchor,
      currentSelectedSuperBlockElements,
      currentSelectedSuperBlockElementAnchors,
      currentSelectedElement,
      currentSelectedElementAnchor,
      currentSelectedTopmostSuperBlockContext,
      currentSelectedBlockContext,
      currentSelectedInlineContext,
      currentSelectedElementContext: currentSelectedInlineContext || currentSelectedBlockContext || currentSelectedTopmostSuperBlockContext,
      allowsInsertElement,
      allowsText,
      inlineIsVoid,
      blockIsVoid,
      topmostSuperblockIsVoid,
      superBlockUIHandler,
      blockUIHandler,
      inlineUIHandler,
      previousSelectedElementAnchor,
      previousTextAnchor
    };
  }
  /**
   * Triggers on change when the field is focused
   * and has changed
   * @param anchor the anchor that we are at
   * @param value the value that we got
   */
  onFocusedChange(anchor, value) {
    if (this.isUnmounted) {
      return;
    }
    this.setState(this.calculateAnchors(anchor, value));
    if (!this.state.focused) {
      this.props.onFocus && this.props.onFocus();
      this.setState({
        focused: true
      });
    }
  }
  /**
   * Triggers on an on change whent he field is blurred
   * @param value the value that we are working with
   */
  onBlurredChange(value) {
    if (this.isUnmounted) {
      return;
    }
    if (this.state.focused) {
      this.props.onBlur && this.props.onBlur();
    }
    const currentSelectedSuperBlockElementAnchor = this.state.currentSelectedSuperBlockElementAnchors && this.state.currentSelectedSuperBlockElementAnchors[this.state.currentSelectedSuperBlockElementAnchors.length - 1];
    const currentSelectedAnchor = this.state.currentSelectedTextAnchor || this.state.currentSelectedInlineElementAnchor || this.state.currentSelectedBlockElementAnchor || currentSelectedSuperBlockElementAnchor;
    const anchorData = this.calculateAnchors(
      // no anchor as it is not known
      null,
      // the value
      value,
      // and we pass the selected node anchor as it
      // remains even after the selection only if
      // we have not just deleted that node
      currentSelectedAnchor && !this.lastChangeWasSelectedDelete ? currentSelectedAnchor : null
    );
    this.setState(__spreadValues({
      focused: false
    }, anchorData));
  }
  /**
   * An optimization so that the component updates only when it's necessary
   * @param nextProps the next properties
   * @param nextState the next state
   */
  shouldComponentUpdate(nextProps, nextState) {
    const standardUpdate = nextProps.id !== this.props.id || nextProps.lang !== this.props.lang || nextProps.currentValid !== this.props.currentValid || nextState.focused !== this.state.focused || nextProps.Wrapper !== this.props.Wrapper || nextProps.isRichText !== this.props.isRichText || nextProps.rootContext !== this.props.rootContext || nextProps.baseI18n !== this.props.baseI18n || !(0, import_deep_equal2.default)(nextState.currentTextAnchor, this.state.currentTextAnchor, { strict: true }) || !(0, import_deep_equal2.default)(nextState.currentSelectedTextAnchor !== this.state.currentSelectedTextAnchor, { strict: true }) || nextState.currentRootContext !== this.state.currentRootContext || nextProps.currentLoadError !== this.props.currentLoadError || nextProps.elementWrappers !== this.props.elementWrappers || !(0, import_deep_equal2.default)(this.state.allContainers, nextState.allContainers, { strict: true }) || !(0, import_deep_equal2.default)(this.state.allTables, nextState.allTables, { strict: true }) || !(0, import_deep_equal2.default)(this.state.allCustom, nextState.allCustom, { strict: true }) || !(0, import_deep_equal2.default)(this.state.allRichClasses, nextState.allRichClasses, { strict: true }) || !(0, import_deep_equal2.default)(nextProps.wrapperArgs, this.props.wrapperArgs, { strict: true }) || !(0, import_deep_equal2.default)(nextProps.elementWrappersArgs, this.props.elementWrappersArgs, { strict: true }) || !(0, import_deep_equal2.default)(nextProps.features, this.props.features, { strict: true });
    if (standardUpdate) {
      return true;
    }
    if (nextProps.treeValue && nextState.synced) {
      return nextProps.treeValue.id !== this.state.treeValue.id;
    }
    return true;
  }
  /**
   * Sets the value off the rich text
   * @param v the value to set
   */
  setValue(v) {
    if (this.isUnmounted || this.props.disabled) {
      return;
    }
    const newRootDocument = {
      // we don't know the id yet
      id: null,
      type: "document",
      rich: this.state.treeValue.rich,
      children: v
    };
    const serialized = serializeString(newRootDocument);
    newRootDocument.id = getUUIDFor(serialized);
    clearTimeout(this.updateTimeout);
    const isEqual = (serialized || null) === (this.props.value || null);
    if (isEqual) {
      this.setState({
        treeValue: newRootDocument,
        synced: true
      });
    } else {
      this.setState({
        treeValue: newRootDocument,
        synced: false
      });
      this.updateTimeout = setTimeout(() => {
        if (this.state.treeValue.rich) {
          if (this.props.cacheStoreCountGlobal) {
            const count = countSize(this.state.treeValue);
            window[this.props.cacheStoreCountGlobal] = count;
          }
        }
        this.props.onChange(serializeString(this.state.treeValue), this.state.treeValue);
        this.updateTimeout = setTimeout(() => {
          if (!this.isUnmounted) {
            this.setState({
              synced: true
            });
          }
        }, 30);
      }, 300);
    }
  }
  /**
   * Provides the context a given node is sitting in
   * @param n the node in question
   * @param onlySwichingContext provides the context only if it was set
   * by the given node otherwise it will return null
   */
  getContextFor(n3, level, onlySwichingContext) {
    if (onlySwichingContext) {
      const nodeAsRichElement = Path.isPath(n3) ? Node.get(this.editor, n3) : n3;
      if (!nodeAsRichElement.context && !nodeAsRichElement.forEach) {
        return null;
      }
    }
    const pathOfNode = Path.isPath(n3) ? n3 : ReactEditor.findPath(this.editor, n3);
    return getContextFor(
      pathOfNode,
      level || "final",
      this.state.treeValue,
      this.state.currentRootContext
    );
  }
  getRootContext() {
    return this.state.currentRootContext;
  }
  renderElement(props) {
    return /* @__PURE__ */ import_react3.default.createElement(
      CurrentElementRetriever,
      __spreadProps(__spreadValues({}, props), {
        fn: this.actuallyRenderElement
      })
    );
  }
  /**
   * the render element function to be used in slate editor
   * @param props the properties that slate provides to render the component
   */
  actuallyRenderElement(props, isSelected, selectionCriteria, isPrimary) {
    const { attributes, children, element } = props;
    const uiHandler = element.uiHandler;
    let toReturn = null;
    let wasUIHandled = false;
    if (uiHandler) {
      const handlerContext = this.getContextFor(element);
      const uiHandlerArgs = element.uiHandlerArgs;
      let propertiesFromContext = handlerContext && handlerContext.properties && handlerContext.properties[uiHandler];
      if (!propertiesFromContext) {
        propertiesFromContext = this.props.rootContext && this.props.rootContext.properties[uiHandler];
        if (propertiesFromContext && propertiesFromContext.nonRootInheritable) {
          propertiesFromContext = null;
        }
      }
      if (propertiesFromContext && propertiesFromContext.type === "ui-handler" && propertiesFromContext.editorHandler) {
        const HandlerComponent = propertiesFromContext.editorHandler.Component;
        const handlerExtraArgs = propertiesFromContext.editorHandler.extraArgs;
        const passExtraInfo = propertiesFromContext.editorHandler.passSlateInfo;
        const extraInfo = passExtraInfo ? {
          helpers: this.getHelpers(),
          selected: isSelected && isPrimary
        } : {};
        let className = null;
        element.richClassList && element.richClassList.forEach((c) => {
          className = (className || "") + " rich-text--" + c;
        });
        const style = convertStyleStringToReactObject(element.style);
        const styleActive = convertStyleStringToReactObject(element.styleActive);
        const styleHover = convertStyleStringToReactObject(element.styleHover);
        toReturn = /* @__PURE__ */ import_react3.default.createElement(
          HandlerComponent,
          __spreadValues({
            args: __spreadValues(__spreadValues({}, uiHandlerArgs), handlerExtraArgs),
            isSlate: true,
            attributes,
            element,
            style,
            styleActive,
            styleHover,
            className,
            events: null
          }, extraInfo),
          children
        );
        const contextSwichContext = this.getContextFor(element, "final", true);
        if (contextSwichContext && contextSwichContext.loopable && contextSwichContext.editorArgs && contextSwichContext.editorArgs.loopEmulation && contextSwichContext.editorArgs.loopEmulation >= 1) {
          const arr = [];
          for (let i2 = 0; i2 < contextSwichContext.editorArgs.loopEmulation; i2++) {
            const shouldDisableElementWrappers = i2 !== contextSwichContext.editorArgs.loopEmulation - 1;
            if (contextSwichContext.editorArgs.wrapper) {
              if (shouldDisableElementWrappers) {
                arr.push(
                  /* @__PURE__ */ import_react3.default.createElement(ElementWrapperDisabler.Provider, { value: true, key: i2 }, contextSwichContext.editorArgs.wrapper(toReturn, i2))
                );
              } else {
                arr.push(/* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, { key: i2 }, contextSwichContext.editorArgs.wrapper(toReturn, i2)));
              }
            } else {
              if (shouldDisableElementWrappers) {
                arr.push(
                  /* @__PURE__ */ import_react3.default.createElement(ElementWrapperDisabler.Provider, { value: true, key: i2 }, toReturn)
                );
              } else {
                arr.push(/* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, { key: i2 }, toReturn));
              }
            }
          }
          toReturn = arr;
        } else if (contextSwichContext && contextSwichContext.editorArgs && contextSwichContext.editorArgs.wrapper) {
          toReturn = contextSwichContext.editorArgs.wrapper(toReturn);
        }
        wasUIHandled = true;
      }
    }
    if (!wasUIHandled) {
      const customProps = __spreadProps(__spreadValues({}, attributes), { children });
      const html = element.html;
      if (typeof html === "string") {
        const htmlContext = this.getContextFor(element);
        let propertiesFromContext = htmlContext && htmlContext.properties && htmlContext.properties[html];
        if (!propertiesFromContext) {
          propertiesFromContext = this.props.rootContext && this.props.rootContext.properties && this.props.rootContext.properties[html];
          if (propertiesFromContext && propertiesFromContext.nonRootInheritable) {
            propertiesFromContext = null;
          }
        }
        if (propertiesFromContext && propertiesFromContext.type === "html" && typeof propertiesFromContext.editorDisplay !== "undefined") {
          const toDisplay = propertiesFromContext.editorDisplay;
          if (typeof toDisplay === "string") {
            customProps.children = /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("div", { contentEditable: false, dangerouslySetInnerHTML: { __html: toDisplay }, style: { display: "contents" } }), children);
          } else {
            customProps.children = /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("div", { contentEditable: false, style: { display: "contents" } }, toDisplay), children);
          }
        } else {
          customProps.children = /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, propertiesFromContext && propertiesFromContext.label || element.children[0].text, children);
        }
      }
      const text = element.textContent;
      if (typeof text === "string") {
        const textContext = this.getContextFor(element);
        let propertiesFromContext = textContext && textContext.properties && textContext.properties[text];
        if (!propertiesFromContext) {
          propertiesFromContext = this.props.rootContext && this.props.rootContext.properties && this.props.rootContext.properties[text];
          if (propertiesFromContext && propertiesFromContext.nonRootInheritable) {
            propertiesFromContext = null;
          }
        }
        customProps.children = /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, propertiesFromContext && propertiesFromContext.type === "text" && (propertiesFromContext.editorDisplay || propertiesFromContext.label) || element.children[0].text, children);
      }
      toReturn = SERIALIZATION_REGISTRY.REACTIFY[element.type]({
        active: false,
        selected: isSelected && isPrimary,
        element,
        asTemplate: false,
        customProps,
        // we don't care as we are not using the onCustom function
        parent: null,
        tree: null
      });
      const contextSwichContext = this.getContextFor(element, "final", true);
      if (contextSwichContext && contextSwichContext.loopable && contextSwichContext.editorArgs && contextSwichContext.editorArgs.loopEmulation && contextSwichContext.editorArgs.loopEmulation >= 1) {
        const arr = [];
        for (let i2 = 0; i2 < contextSwichContext.editorArgs.loopEmulation; i2++) {
          const shouldDisableElementWrappers = i2 !== contextSwichContext.editorArgs.loopEmulation - 1;
          if (contextSwichContext.editorArgs.wrapper) {
            if (shouldDisableElementWrappers) {
              arr.push(
                /* @__PURE__ */ import_react3.default.createElement(ElementWrapperDisabler.Provider, { value: true, key: i2 }, contextSwichContext.editorArgs.wrapper(toReturn, i2))
              );
            } else {
              arr.push(/* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, { key: i2 }, contextSwichContext.editorArgs.wrapper(toReturn, i2)));
            }
          } else {
            if (shouldDisableElementWrappers) {
              arr.push(
                /* @__PURE__ */ import_react3.default.createElement(ElementWrapperDisabler.Provider, { value: true, key: i2 }, toReturn)
              );
            } else {
              arr.push(/* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, { key: i2 }, toReturn));
            }
          }
        }
        toReturn = arr;
      } else if (contextSwichContext && contextSwichContext.editorArgs && contextSwichContext.editorArgs.wrapper) {
        toReturn = contextSwichContext.editorArgs.wrapper(toReturn);
      }
    }
    if (this.props.elementWrappers && (!wasUIHandled && this.props.elementWrappers.components && this.props.elementWrappers.components[element.type] || this.props.elementWrappers.uiHandler && this.props.elementWrappers.uiHandler[element.uiHandler])) {
      const ElementWrapper = this.props.elementWrappers.uiHandler && this.props.elementWrappers.uiHandler[element.uiHandler] || this.props.elementWrappers.components[element.type];
      if (ElementWrapper) {
        return /* @__PURE__ */ import_react3.default.createElement(ElementWrapperDisabler.Consumer, null, (disabled) => disabled ? toReturn : /* @__PURE__ */ import_react3.default.createElement(
          ElementWrapper,
          __spreadValues({
            element,
            helpers: this.getHelpers(),
            primarySelection: isPrimary,
            isSelected,
            featureSupport: this.getFeatureSupport(),
            baseI18n: this.props.baseI18n
          }, this.props.elementWrappersArgs),
          toReturn
        ));
      }
    }
    return toReturn;
  }
  /**
   * the function that is called by slate to render text
   * @param props the properties given by slate to render a text leaf
   */
  renderText(props) {
    const { attributes, children, leaf: leaf3 } = props;
    return SERIALIZATION_REGISTRY.REACTIFY.text({
      active: false,
      selected: false,
      element: leaf3,
      asTemplate: false,
      customProps: __spreadProps(__spreadValues({}, attributes), { children }),
      // we don't care as we are not using the onCustom function
      // this will prevent normalization but that's fine
      parent: null,
      tree: null
    });
  }
  /**
   * The change function that is called via slate when a change occurs
   * this function hits every time on every change of the rich text
   * @param newValue the new value of the children of the document
   */
  onChange(newValue) {
    if (this.isUnmounted) {
      return;
    }
    if (this.editor.selection && ReactEditor.isFocused(this.editor)) {
      this.onFocusedChange(this.editor.selection.anchor.path, newValue);
    } else {
      this.onBlurredChange(newValue);
    }
    this.lastChangeWasSelectedDelete = false;
    this.setValue(newValue);
  }
  /**
   * Performs a hard blur event and the paths are cleared out
   */
  hardBlur() {
    if (this.isUnmounted) {
      return;
    }
    this.setState({
      currentSelectedInlineElementAnchor: null,
      currentSelectedInlineElement: null,
      currentSelectedText: null,
      currentSelectedTextAnchor: null,
      currentSelectedBlockElement: null,
      currentSelectedBlockElementAnchor: null,
      currentSelectedSuperBlockElements: null,
      currentSelectedSuperBlockElementAnchors: null,
      currentSelectedInlineContext: null,
      currentSelectedBlockContext: null,
      currentSelectedTopmostSuperBlockContext: null,
      currentSelectedElement: null,
      currentSelectedElementAnchor: null,
      currentSelectedElementContext: null,
      previousSelectedElementAnchor: this.state.currentSelectedElementAnchor,
      previousTextAnchor: this.state.currentTextAnchor
    });
    Transforms.deselect(this.editor);
    ReactEditor.blur(this.editor);
  }
  selectiveHardBlurIfHasSelectedElement(e2, ele) {
    var _a, _b, _c, _d;
    if (this.state.currentSelectedElement) {
      if (ele && ((_b = (_a = this.wrapperRef) == null ? void 0 : _a.current) == null ? void 0 : _b.selectiveHardBlur)) {
        (_d = (_c = this.wrapperRef) == null ? void 0 : _c.current) == null ? void 0 : _d.selectiveHardBlur(e2, ele);
      } else {
        this.hardBlur();
      }
    }
  }
  /**
   * Performs a soft blur event
   */
  softBlur() {
    ReactEditor.blur(this.editor);
    Transforms.deselect(this.editor);
  }
  deletePath(p) {
    const currentSelectedElementAnchor = this.state.currentSelectedElementAnchor;
    if (Path.equals(p, currentSelectedElementAnchor) || Path.isAncestor(p, currentSelectedElementAnchor)) {
      this.lastChangeWasSelectedDelete = true;
    }
    Transforms.delete(this.editor, {
      at: p
    });
    if (this.state.currentText) {
      ReactEditor.focus(this.editor);
    } else {
      ReactEditor.blur(this.editor);
    }
  }
  /**
   * given a node path, that should represent either an element or a text node
   * this allows such a path to be selected and be marked into the selection
   * @param p the path to select
   */
  selectPath(p) {
    if (this.isUnmounted) {
      return;
    }
    this.setState(
      this.calculateAnchors(
        this.editor.selection && this.editor.selection.anchor.path,
        this.state.treeValue.children,
        p
      )
    );
  }
  /**
   * Allows to move between two paths as it moves elements to one place to another
   * @param p the path to select
   */
  movePaths(from, to) {
    if (this.isUnmounted) {
      return;
    }
    const selectedElement = this.state.currentSelectedElement;
    const toCropped = [...to];
    const toLast = toCropped.pop();
    const fromCropped = [...from];
    const fromLast = fromCropped.pop();
    const actualTo = [...to];
    if (Path.equals(fromCropped, toCropped) && toLast > fromLast) {
      actualTo[actualTo.length - 1]--;
    }
    Transforms.moveNodes(
      this.editor,
      {
        at: from,
        to: actualTo
      }
    );
    setTimeout(() => {
      const newSelectedAnchor = selectedElement ? ReactEditor.findPath(this.editor, selectedElement) : null;
      this.setState(this.calculateAnchors(this.editor.selection && this.editor.selection.anchor.path, null, newSelectedAnchor));
    }, 0);
  }
  getPreviousSelectedElementAnchor() {
    return this.state.previousSelectedElementAnchor;
  }
  getPreviousTextAnchor() {
    return this.state.previousTextAnchor;
  }
  /**
   * Deletes the selected node that has been selected, either the current default
   * or one that has been manually selected using selectPath
   */
  deleteSelectedNode() {
    this.lastChangeWasSelectedDelete = true;
    const selectedElementAnchor = this.state.currentSelectedElementAnchor;
    Transforms.delete(this.editor, {
      at: selectedElementAnchor
    });
    if (this.state.currentText) {
      ReactEditor.focus(this.editor);
    } else {
      ReactEditor.blur(this.editor);
    }
  }
  /**
   * A helper function to call react focus back into the editor
   */
  focus() {
    ReactEditor.focus(this.editor);
  }
  /**
   * An async function that is a bit of a hack to focus at a given
   * range, because of the way slate works it needs to be async
   * @param at the range to focus at
   * @returns a void promise once it's done
   */
  async focusAt(at) {
    if (Range.isRange(at)) {
      return new Promise((r2) => {
        setTimeout(() => {
          ReactEditor.focus(this.editor);
          setTimeout(() => {
            Transforms.select(this.editor, at);
            setTimeout(r2, 0);
          }, 0);
        }, 0);
      });
    } else {
      this.selectPath(at);
    }
  }
  /**
   * Provides a fallback for insert when no insert region is found
   * @param type 
   * @returns 
   */
  getFallbackInsertPath() {
    if (this.state.currentSelectedInlineElement) {
      return [...this.state.currentSelectedInlineElementAnchor, this.state.currentSelectedInlineElement.children.length];
    } else if (this.state.currentSelectedBlockElement) {
      return [...this.state.currentSelectedBlockElementAnchor, this.state.currentSelectedBlockElement.children.length];
    } else if (this.state.currentSelectedSuperBlockElements) {
      const currentSelectedSuperBlockElementAnchor = this.state.currentSelectedSuperBlockElementAnchors[this.state.currentSelectedSuperBlockElementAnchors.length - 1];
      const currentSelectedSuperBlockElement = this.state.currentSelectedSuperBlockElements[this.state.currentSelectedSuperBlockElements.length - 1];
      return [...currentSelectedSuperBlockElementAnchor, currentSelectedSuperBlockElement.children.length];
    } else {
      return [this.state.treeValue.children.length];
    }
  }
  /**
   * Will insert an image based on a given file that has
   * been taken as an input
   * 
   * Note that there is an insert file function that should be given
   * as prop and that's what this function will call, if an error occurred
   * it should have been fed as a prop as well, so this function always
   * returns a void promise
   * 
   * @param file the file
   * @param standalone whether to make it a standalone image
   * @returns a void promise once it's done
   */
  async insertImage(file, standalone) {
    try {
      const data = await this.props.onInsertFile(file, true);
      if (!data) {
        return;
      }
      const imageNode = {
        type: "image",
        alt: null,
        children: [
          {
            bold: false,
            italic: false,
            text: "",
            underline: false
          }
        ],
        height: data.height,
        width: data.width,
        sizes: "70vw",
        src: data.result.url,
        srcId: data.result.id,
        srcSet: null,
        standalone
      };
      if (!this.editor.selection) {
        Transforms.insertNodes(this.editor, imageNode, { at: this.getFallbackInsertPath() });
      } else {
        Transforms.insertNodes(this.editor, imageNode);
      }
    } catch (err) {
    }
  }
  updateTemplateText(label, value) {
    if (this.state.currentSelectedInlineElement) {
      Transforms.setNodes(this.editor, {
        textContent: value || ""
      }, { at: this.state.currentSelectedInlineElementAnchor });
      Transforms.setNodes(this.editor, {
        text: label || localeReplacer(this.props.baseI18n.template, this.props.baseI18n.text)
      }, { at: this.state.currentSelectedTextAnchor });
    }
  }
  /**
   * Will insert a bit of template text that is used for templating purposes
   * 
   * @param label the label to give it
   * @param value the value that it gets
   * @param at at which range to insert it (optional)
   * @returns a void promise
   */
  insertTemplateText(label, value) {
    const textNode = {
      bold: false,
      italic: false,
      underline: false,
      text: label || localeReplacer(this.props.baseI18n.template, this.props.baseI18n.text)
    };
    const inlineNode = {
      children: [textNode],
      type: "inline",
      textContent: value || ""
    };
    if (!this.editor.selection) {
      Transforms.insertNodes(this.editor, inlineNode, { at: this.getFallbackInsertPath() });
    } else {
      Transforms.insertNodes(this.editor, inlineNode);
    }
  }
  updateTemplateHTML(label, value) {
    if (this.state.currentSelectedBlockElement) {
      Transforms.setNodes(this.editor, {
        html: value || ""
      }, { at: this.state.currentSelectedBlockElementAnchor });
      Transforms.setNodes(this.editor, {
        text: label || localeReplacer(this.props.baseI18n.template, this.props.baseI18n.container)
      }, { at: this.state.currentSelectedTextAnchor });
    }
  }
  /**
   * Will insert a bit of template html that is used for templating purposes, work similar
   * to template text, except it uses html content instead to replace the inner html
   * 
   * @param label the label to be given to the element to be added
   * @param value the value that will be used from the context
   * @param at an optional range where to be inserted
   */
  insertTemplateHTML(label, value) {
    const textNode = {
      bold: false,
      italic: false,
      underline: false,
      text: label || localeReplacer(this.props.baseI18n.template, this.props.baseI18n.container)
    };
    const voidBlock = {
      children: [textNode],
      type: "void-block",
      html: value || ""
    };
    if (!this.editor.selection) {
      Transforms.insertNodes(this.editor, voidBlock, { at: this.getFallbackInsertPath() });
    } else {
      Transforms.insertNodes(this.editor, voidBlock);
    }
  }
  /**
   * Inserts a table at the given location
   * @param type the type of the table
   */
  insertTable(type) {
    const tableNode = {
      type: "table",
      children: [
        {
          type: "tbody",
          children: [
            {
              type: "tr",
              children: [
                {
                  type: "td",
                  children: [
                    STANDARD_PARAGRAPH()
                  ]
                }
              ]
            }
          ]
        }
      ],
      tableType: type || null
    };
    if (!this.editor.selection) {
      Transforms.insertNodes(this.editor, tableNode, { at: this.getFallbackInsertPath() });
    } else {
      Transforms.insertNodes(this.editor, tableNode);
    }
  }
  insertTableColumn() {
    if (!this.state.currentSelectedSuperBlockElements) {
      return;
    }
    const currentColumnIndex = this.state.currentSelectedSuperBlockElements && findLastIndex(this.state.currentSelectedSuperBlockElements, (e2) => e2.type === "td" || e2.type === "th");
    if (currentColumnIndex === -1) {
      return;
    }
    const currentColumn = this.state.currentSelectedSuperBlockElements[currentColumnIndex];
    const currentColumnAnchor = this.state.currentSelectedSuperBlockElementAnchors[currentColumnIndex];
    const targetColumnAnchor = [...currentColumnAnchor];
    targetColumnAnchor[targetColumnAnchor.length - 1]++;
    const targetIndex = targetColumnAnchor[targetColumnAnchor.length - 1];
    const tableAnchor = [...currentColumnAnchor];
    tableAnchor.pop();
    tableAnchor.pop();
    tableAnchor.pop();
    try {
      const tableElement = this.getNodeAt(tableAnchor);
      if (tableElement.type === "table") {
        tableElement.children.forEach((theadOrTbodyOrTfoot, theadOrTbodyOrTFootIndex) => {
          const isLastElementInTableBody = theadOrTbodyOrTFootIndex === tableElement.children.length - 1;
          theadOrTbodyOrTfoot.children.forEach((row, rowIndex) => {
            const column = {
              type: "td",
              children: [
                STANDARD_PARAGRAPH()
              ]
            };
            let actualTargetIndex = targetIndex;
            if (actualTargetIndex > row.children.length) {
              actualTargetIndex = row.children.length;
            }
            const insertPoint = [...tableAnchor, theadOrTbodyOrTFootIndex, rowIndex, actualTargetIndex];
            this.preventNormalize = isLastElementInTableBody ? rowIndex !== theadOrTbodyOrTfoot.children.length - 1 : true;
            Transforms.insertNodes(this.editor, column, { at: insertPoint });
            this.preventNormalize = false;
          });
        });
        const textAnchorOfColumn = targetColumnAnchor;
        textAnchorOfColumn.push(0);
        textAnchorOfColumn.push(0);
        this.focusAt({
          anchor: {
            offset: 0,
            path: targetColumnAnchor
          },
          focus: {
            offset: 0,
            path: targetColumnAnchor
          }
        });
      }
    } catch (e2) {
    }
  }
  deleteTableColumn() {
    if (!this.state.currentSelectedSuperBlockElements) {
      return;
    }
    const currentColumnIndex = this.state.currentSelectedSuperBlockElements && findLastIndex(this.state.currentSelectedSuperBlockElements, (e2) => e2.type === "td" || e2.type === "th");
    if (currentColumnIndex === -1) {
      return;
    }
    const currentColumn = this.state.currentSelectedSuperBlockElements[currentColumnIndex];
    const currentColumnAnchor = this.state.currentSelectedSuperBlockElementAnchors[currentColumnIndex];
    const targetIndex = currentColumnAnchor[currentColumnAnchor.length - 1];
    const tableAnchor = [...currentColumnAnchor];
    tableAnchor.pop();
    tableAnchor.pop();
    tableAnchor.pop();
    try {
      const tableElement = this.getNodeAt(tableAnchor);
      if (tableElement.type === "table") {
        tableElement.children.forEach((theadOrTbodyOrTfoot, theadOrTbodyOrTFootIndex) => {
          const isLastElementInTableBody = theadOrTbodyOrTFootIndex === tableElement.children.length - 1;
          theadOrTbodyOrTfoot.children.forEach((row, rowIndex) => {
            const deletePoint = [...tableAnchor, theadOrTbodyOrTFootIndex, rowIndex, targetIndex];
            this.preventNormalize = isLastElementInTableBody ? rowIndex !== theadOrTbodyOrTfoot.children.length - 1 : true;
            Transforms.delete(this.editor, { at: deletePoint });
            this.preventNormalize = false;
          });
        });
      }
    } catch (e2) {
    }
  }
  insertTableRow() {
    if (!this.state.currentSelectedSuperBlockElements) {
      return;
    }
    const currentRowIndex = this.state.currentSelectedSuperBlockElements && findLastIndex(this.state.currentSelectedSuperBlockElements, (e2) => e2.type === "tr");
    if (currentRowIndex === -1) {
      return;
    }
    const currentRow = this.state.currentSelectedSuperBlockElements[currentRowIndex];
    const currentRowAnchor = this.state.currentSelectedSuperBlockElementAnchors[currentRowIndex];
    const row = {
      type: "tr",
      children: currentRow.children.map((v) => ({
        type: "td",
        children: [
          STANDARD_PARAGRAPH()
        ]
      }))
    };
    const parentTbodyOrTheadOrTfootAnchor = [...currentRowAnchor];
    parentTbodyOrTheadOrTfootAnchor.pop();
    const parentTbodyOrTheadOrTfoot = this.getNodeAt(parentTbodyOrTheadOrTfootAnchor);
    if (parentTbodyOrTheadOrTfoot.type === "tbody") {
      const targetRowAnchor = currentRowAnchor;
      targetRowAnchor[targetRowAnchor.length - 1]++;
      Transforms.insertNodes(this.editor, row, { at: targetRowAnchor });
      const targetRowAnchorFirstText = targetRowAnchor;
      targetRowAnchorFirstText.push(0);
      targetRowAnchorFirstText.push(0);
      targetRowAnchorFirstText.push(0);
      this.focusAt({
        anchor: {
          offset: 0,
          path: targetRowAnchorFirstText
        },
        focus: {
          offset: 0,
          path: targetRowAnchorFirstText
        }
      });
    } else if (parentTbodyOrTheadOrTfoot.type === "thead") {
      const tbodyAnchor = [...parentTbodyOrTheadOrTfootAnchor];
      tbodyAnchor[tbodyAnchor.length - 1]++;
      let tbody = null;
      try {
        tbody = this.getNodeAt(tbodyAnchor);
      } catch (e2) {
      }
      if (tbody && tbody.type === "tbody") {
        const targetRowAnchor = tbodyAnchor;
        targetRowAnchor.push(0);
        Transforms.insertNodes(this.editor, row, { at: targetRowAnchor });
        const targetRowAnchorFirstText = targetRowAnchor;
        targetRowAnchorFirstText.push(0);
        targetRowAnchorFirstText.push(0);
        targetRowAnchorFirstText.push(0);
        this.focusAt({
          anchor: {
            offset: 0,
            path: targetRowAnchorFirstText
          },
          focus: {
            offset: 0,
            path: targetRowAnchorFirstText
          }
        });
      } else {
        const tbody2 = {
          type: "tbody",
          children: [row]
        };
        Transforms.insertNodes(this.editor, tbody2, { at: tbodyAnchor });
        const targetRowAnchorFirstText = tbodyAnchor;
        targetRowAnchorFirstText.push(0);
        targetRowAnchorFirstText.push(0);
        targetRowAnchorFirstText.push(0);
        targetRowAnchorFirstText.push(0);
        this.focusAt({
          anchor: {
            offset: 0,
            path: targetRowAnchorFirstText
          },
          focus: {
            offset: 0,
            path: targetRowAnchorFirstText
          }
        });
      }
    } else if (parentTbodyOrTheadOrTfoot.type === "tfoot") {
      const tbodyAnchor = [...parentTbodyOrTheadOrTfootAnchor];
      tbodyAnchor[tbodyAnchor.length - 1]--;
      let tbody = null;
      try {
        tbody = this.getNodeAt(tbodyAnchor);
      } catch (e2) {
      }
      const tfootClone = __spreadValues({}, parentTbodyOrTheadOrTfoot);
      tfootClone.children = tfootClone.children.map((v) => {
        return {
          type: "tr",
          children: v.children.map((v2) => ({
            type: "td",
            children: [
              STANDARD_PARAGRAPH()
            ]
          }))
        };
      });
      this.preventNormalize = true;
      if (tbody && tbody.type === "tbody") {
        const currentTBodyPropsCopy = __spreadValues({}, tbody);
        delete currentTBodyPropsCopy.children;
        Transforms.setNodes(
          this.editor,
          currentTBodyPropsCopy,
          {
            at: parentTbodyOrTheadOrTfootAnchor
          }
        );
      } else {
        Transforms.setNodes(
          this.editor,
          {
            type: "tbody"
          },
          {
            at: parentTbodyOrTheadOrTfootAnchor
          }
        );
      }
      this.preventNormalize = false;
      const nextAnchorForTfoot = [...parentTbodyOrTheadOrTfootAnchor];
      nextAnchorForTfoot[nextAnchorForTfoot.length - 1]++;
      Transforms.insertNodes(this.editor, tfootClone, { at: nextAnchorForTfoot });
      const targetRowAnchorFirstText = tbody ? parentTbodyOrTheadOrTfootAnchor : nextAnchorForTfoot;
      targetRowAnchorFirstText.push(0);
      targetRowAnchorFirstText.push(0);
      targetRowAnchorFirstText.push(0);
      targetRowAnchorFirstText.push(0);
      this.focusAt({
        anchor: {
          offset: 0,
          path: targetRowAnchorFirstText
        },
        focus: {
          offset: 0,
          path: targetRowAnchorFirstText
        }
      });
    }
  }
  deleteTableRow() {
    if (!this.state.currentSelectedSuperBlockElements) {
      return;
    }
    const currentRowIndex = this.state.currentSelectedSuperBlockElements && findLastIndex(this.state.currentSelectedSuperBlockElements, (e2) => e2.type === "tr");
    if (currentRowIndex === -1) {
      return;
    }
    try {
      Transforms.delete(this.editor, { at: this.state.currentSelectedSuperBlockElementAnchors[currentRowIndex] });
    } catch (e2) {
    }
  }
  /**
   * Tells whether the current table row can
   * be toggled in the environment it is
   */
  canToggleTable(element) {
    if (!this.state.currentSelectedSuperBlockElements) {
      return false;
    }
    const potentialTdIndex = findLastIndex(this.state.currentSelectedSuperBlockElements, (e2) => e2.type === "td" || e2.type === "th");
    if (potentialTdIndex === -1) {
      return false;
    }
    const tdAnchor = this.state.currentSelectedSuperBlockElementAnchors[potentialTdIndex];
    const rowPath = [...tdAnchor];
    rowPath.pop();
    const theadOrTbodyOrTfootPath = [...rowPath];
    theadOrTbodyOrTfootPath.pop();
    const tablePath = [...theadOrTbodyOrTfootPath];
    tablePath.pop();
    try {
      const potentialRow = this.getNodeAt(rowPath);
      if (potentialRow.type !== "tr") {
        return false;
      }
      const theadOrTbodyOrTfoot = this.getNodeAt(theadOrTbodyOrTfootPath);
      if (theadOrTbodyOrTfoot.type === element) {
        return true;
      } else if (theadOrTbodyOrTfoot.type === "tfoot" || theadOrTbodyOrTfoot.type === "thead") {
        return false;
      }
      const tableParent = this.getNodeAt(tablePath);
      if (tableParent.type !== "table") {
        return false;
      }
      const theadOrTfootAlreadyExists = tableParent.children.find((c) => c.type === element);
      if (theadOrTfootAlreadyExists) {
        return false;
      } else {
        if (element === "thead") {
          return rowPath[rowPath.length - 1] === 0;
        } else if (element === "tfoot") {
          return rowPath[rowPath.length - 1] === theadOrTbodyOrTfoot.children.length - 1;
        }
        return false;
      }
    } catch (e2) {
      return false;
    }
  }
  /**
   * Only works when the first element of the table
   * is selected, aka the first row
   */
  toggleTable(element) {
    if (!this.canToggleTable(element)) {
      return;
    }
    const potentialTdIndex = findLastIndex(this.state.currentSuperBlockElements, (e2) => e2.type === "td" || e2.type === "th");
    const tdAnchor = this.state.currentSelectedSuperBlockElementAnchors[potentialTdIndex];
    const rowPath = [...tdAnchor];
    rowPath.pop();
    const theadOrTbodyPath = [...rowPath];
    theadOrTbodyPath.pop();
    const tablePath = [...theadOrTbodyPath];
    tablePath.pop();
    const tableParent = this.getNodeAt(tablePath);
    const position = tableParent.children.findIndex((e2) => e2.type === element);
    const bodyPosition = tableParent.children.findIndex((e2) => e2.type === "tbody");
    if (position !== -1) {
      const currentTBody = tableParent.children[bodyPosition];
      if (!currentTBody) {
        Transforms.setNodes(
          this.editor,
          {
            type: "tbody"
          },
          {
            at: [...tablePath, position]
          }
        );
      } else {
        const currentTBodyPropsCopy = __spreadValues({}, currentTBody);
        delete currentTBodyPropsCopy.children;
        Transforms.setNodes(
          this.editor,
          currentTBodyPropsCopy,
          {
            at: [...tablePath, position]
          }
        );
      }
    } else {
      const currentTBody = tableParent.children[bodyPosition];
      if (!currentTBody) {
        return;
      }
      if (currentTBody.children.length === 1) {
        Transforms.setNodes(
          this.editor,
          {
            type: element
          },
          {
            at: [...tablePath, bodyPosition]
          }
        );
      } else {
        const currentTBodyPropsCopy = __spreadValues({}, currentTBody);
        currentTBodyPropsCopy.children = [];
        currentTBodyPropsCopy.type = element;
        this.preventNormalize = true;
        Transforms.insertNodes(
          this.editor,
          currentTBodyPropsCopy,
          {
            at: [...tablePath, element === "thead" ? 0 : bodyPosition + 1]
          }
        );
        this.preventNormalize = false;
        if (element === "thead") {
          Transforms.moveNodes(
            this.editor,
            {
              // tbody is now in 1 ahead
              // zero for the first row
              at: [...tablePath, bodyPosition + 1, 0],
              // this is our new thead
              to: [...tablePath, 0, 0]
            }
          );
        } else {
          Transforms.moveNodes(
            this.editor,
            {
              // tbody is at the same place as before
              // we pick the last row
              at: [...tablePath, bodyPosition, currentTBody.children.length - 1],
              // this is our new tfoot which is after our body
              to: [...tablePath, bodyPosition + 1, 0]
            }
          );
        }
      }
    }
  }
  _getVideoSrcOriginAndStatus(url) {
    let src = null;
    let origin = null;
    let status = true;
    let parsedURL = null;
    if (url) {
      try {
        parsedURL = new URL(url);
      } catch (e2) {
        status = false;
      }
    }
    if (parsedURL) {
      if (parsedURL.hostname === "youtube.com" || parsedURL.hostname === "www.youtube.com" || parsedURL.hostname === "youtu.be") {
        origin = "youtube";
        const isClassicYTUrl = parsedURL.hostname === "youtube.com" || parsedURL.hostname === "www.youtube.com";
        if (isClassicYTUrl && parsedURL.pathname.startsWith("/embed/")) {
          src = parsedURL.pathname.split("/")[2];
        } else if (isClassicYTUrl && parsedURL.pathname.startsWith("/watch")) {
          let search = parsedURL.search;
          if (search[0] === "?") {
            search = search.substr(1);
          }
          search.split("&").forEach((v) => {
            if (v.startsWith("v=")) {
              src = v.substr(2);
            }
          });
        } else if (parsedURL.hostname === "youtu.be") {
          src = parsedURL.pathname.split("/")[1];
        }
        status = true;
      } else if (parsedURL.host === "player.vimeo.com") {
        origin = "vimeo";
        src = parsedURL.pathname.split("/")[2];
        status = true;
      } else {
        status = false;
      }
    }
    return {
      src,
      origin,
      status
    };
  }
  updateVideo(url) {
    const data = this._getVideoSrcOriginAndStatus(url);
    if (data.status && this.state.currentSelectedBlockElement && this.state.currentSelectedBlockElement.type === "video") {
      Transforms.setNodes(this.editor, {
        origin: data.origin,
        src: data.src
      }, {
        at: this.state.currentSelectedBlockElementAnchor
      });
    }
    return data.status;
  }
  /**
   * Will insert a video given the information
   * @param url the url of the video
   * @param at a partial range to insert at
   * @returns a boolean on whether it succeeded
   */
  insertVideo(url) {
    const data = this._getVideoSrcOriginAndStatus(url);
    const videoNode = {
      type: "video",
      children: [
        {
          bold: false,
          italic: false,
          text: "",
          underline: false
        }
      ],
      origin: data.origin,
      src: data.src
    };
    if (!this.editor.selection) {
      Transforms.insertNodes(this.editor, videoNode, { at: this.getFallbackInsertPath() });
    } else {
      Transforms.insertNodes(this.editor, videoNode);
    }
    return data.status;
  }
  /**
   * Will insert a file based on the information given it uses
   * the standard on insert file function in order to perfom it
   *
   * @param file the file to insert
   * @param at a partial range to insert at
   */
  async insertFile(file) {
    try {
      const data = await this.props.onInsertFile(file, false);
      if (!data) {
        return;
      }
      const fileNode = {
        type: "file",
        children: [
          {
            bold: false,
            italic: false,
            text: "",
            underline: false
          }
        ],
        extension: mimeTypeToExtension(file.type),
        fileName: data.result.name,
        size: prettyBytes(data.result.size),
        src: data.result.url,
        srcId: data.result.id
      };
      if (!this.editor.selection) {
        Transforms.insertNodes(this.editor, fileNode, { at: this.getFallbackInsertPath() });
      } else {
        Transforms.insertNodes(this.editor, fileNode);
      }
    } catch (err) {
    }
  }
  /**
   * Will insert a container at the given location
   * @param type optional, the container type, otherwise will insert a standard container
   * @param at an optional range
   */
  async insertContainer(type) {
    const containerNode = {
      type: "container",
      children: [
        {
          type: "paragraph",
          children: [
            {
              bold: false,
              italic: false,
              underline: false,
              text: ""
            }
          ]
        }
      ],
      containerType: type || null
    };
    if (!this.editor.selection) {
      Transforms.insertNodes(this.editor, containerNode, { at: this.getFallbackInsertPath() });
    } else {
      Transforms.insertNodes(this.editor, containerNode);
    }
  }
  /**
   * Inserts a custom element
   * @param type the type for the custom element
   * @param at an optional at range to insert the custom at
   */
  async insertCustom(type) {
    const customNode = {
      type: "custom",
      children: [
        {
          type: "paragraph",
          children: [
            {
              bold: false,
              italic: false,
              underline: false,
              text: ""
            }
          ]
        }
      ],
      customType: type
    };
    if (!this.editor.selection) {
      Transforms.insertNodes(this.editor, customNode, { at: this.getFallbackInsertPath() });
    } else {
      Transforms.insertNodes(this.editor, customNode);
    }
  }
  /**
   * Makes a quote out of the current element
   * @param at toggle at the given range, this will cause a focus
   */
  async toggleQuote() {
    const isCollapsed = Range.isCollapsed(this.editor.selection);
    if (isCollapsed && this.state.currentSelectedBlockElement) {
      if (this.state.currentSelectedBlockElement.type === "quote") {
        Transforms.setNodes(
          this.editor,
          {
            type: "paragraph"
          }
        );
      } else {
        Transforms.setNodes(
          this.editor,
          {
            type: "quote"
          }
        );
      }
    }
  }
  /**
   * Makes a title out of the current element
   * @param type the title type
   * @param at an optional range
   */
  async toggleTitle(type) {
    const isCollapsed = Range.isCollapsed(this.editor.selection);
    if (isCollapsed && this.state.currentSelectedBlockElement) {
      if (this.state.currentSelectedBlockElement.type === "title") {
        Transforms.setNodes(
          this.editor,
          {
            type: "paragraph"
          }
        );
      } else {
        Transforms.setNodes(
          this.editor,
          {
            type: "title",
            titleType: type
          }
        );
      }
    }
  }
  /**
   * Makes a list out of the current element
   * @param type the type of the list that is to be toggled, either bulleted or number
   * @param at an optional range
   */
  async insertList(type) {
    const listNode = {
      type: "list",
      listType: type,
      children: [
        {
          type: "list-item",
          children: [
            STANDARD_PARAGRAPH()
          ]
        }
      ]
    };
    if (!this.editor.selection) {
      Transforms.insertNodes(this.editor, listNode, { at: this.getFallbackInsertPath() });
    } else {
      Transforms.insertNodes(this.editor, listNode);
    }
  }
  updateLink(url, tvalue) {
    let validState = true;
    if (url) {
      try {
        const urlParsed = new URL(url);
        const isLocal = urlParsed.hostname === location.hostname;
        const onlyLocal = !this.props.features.supportsExternalLinks;
        if (onlyLocal && !isLocal) {
          validState = false;
        }
      } catch (e2) {
        validState = false;
      }
    }
    if (this.state.currentSelectedInlineElement && this.state.currentSelectedInlineElement.type === "link") {
      const link = {
        href: url,
        thref: tvalue
      };
      Transforms.setNodes(this.editor, link, {
        at: this.state.currentSelectedInlineElementAnchor
      });
    }
    return validState;
  }
  /**
   * Makes a link out of the current element
   * @param url the url that we are using (null if using tvalue)
   * @param tvalue the template value to use (null if providing url)
   * @param at an optional range to pass
   * @returns a boolean if the link was valid and toggleLink
   */
  toggleLink(url, tvalue) {
    let validState = true;
    if (url) {
      try {
        const urlParsed = new URL(url);
        const isLocal = urlParsed.hostname === location.hostname;
        const onlyLocal = !this.props.features.supportsExternalLinks;
        if (onlyLocal && !isLocal) {
          validState = false;
        }
      } catch (e2) {
        validState = false;
      }
    }
    const link = {
      type: "link",
      href: url,
      thref: tvalue,
      children: [
        STANDARD_TEXT_NODE(this.props.baseI18n.link)
      ]
    };
    if (this.editor.selection && Range.isCollapsed(this.editor.selection)) {
      if (this.state.currentSelectedInlineElement && this.state.currentSelectedInlineElement.type === "link") {
        Transforms.unwrapNodes(this.editor, {
          at: this.state.currentSelectedInlineElementAnchor
        });
      } else {
        Transforms.insertNodes(this.editor, link);
      }
    } else if (this.editor.selection) {
      Transforms.wrapNodes(this.editor, link, {
        match: (v) => Text.isText(v),
        split: true
      });
    } else {
      Transforms.insertNodes(this.editor, link, {
        at: this.getFallbackInsertPath()
      });
    }
    return validState;
  }
  /**
   * Abitrary update, does an arbitrary update for an element or node
   * at the given path
   * @param args an object to update that should be partial of the element rich properties
   * @param anchor the node anchor to update
   */
  set(args, anchor) {
    Transforms.setNodes(this.editor, args, { at: anchor });
  }
  /**
   * Sets the current style for the element
   * @param style the style to be set, this should be a style string
   * @param anchor the element anchor to update
   */
  setStyle(style, anchor) {
    Transforms.setNodes(this.editor, {
      style
    }, { at: anchor });
  }
  /**
   * Sets the template hover style for the element
   * @param style the style to be set, this should be a style string
   * @param anchor the element anchor to update
   */
  setHoverStyle(style, anchor) {
    Transforms.setNodes(this.editor, {
      styleHover: style
    }, { at: anchor });
  }
  /**
   * Sets the active style for the element
   * @param style the style to be set, this should be a style string
   * @param anchor the element anchor to update
   */
  setActiveStyle(style, anchor) {
    Transforms.setNodes(this.editor, {
      styleActive: style
    }, { at: anchor });
  }
  /**
   * Sets the rich classes of the element
   * @param classes an array of string that represent the rich classes
   * @param anchor the element anchor
   */
  setRichClasses(classes, anchor) {
    Transforms.setNodes(this.editor, {
      richClassList: classes
    }, { at: anchor });
  }
  /**
   * Sets a given action for usage within templating
   * as an event listener
   * 
   * Note that using this function is risky if the structure to provide a given
   * key is not understood properly, keys should be valid
   * 
   * @param key the key for the action, should be something like, click, mouseenter, etc...
   * @param value the value for the property
   * @param anchor the anchor for the element that is to be assigned the listener to turn interactive
   */
  setAction(key, value, anchor) {
    Transforms.setNodes(this.editor, {
      [key]: value
    }, { at: anchor });
  }
  /**
   * Sets an UI handler to a given element so that it is ui handled
   * 
   * This is an avanced option for ui handling
   * 
   * normally you would use this function for updating an already inserted
   * ui handled component
   * 
   * @param value the value for the ui handler that should be taken out of the context
   * @param args the args for the ui handler
   * @param anchor the anchor where to insert at
   */
  setUIHandler(value, args, anchor) {
    Transforms.setNodes(this.editor, {
      uiHandler: value,
      uiHandlerArgs: args
    }, { at: anchor });
  }
  /**
   * Sets ui handler args to a given element
   * @param key the ui handler arg key
   * @param value the ui handler arg value
   * @param anchor the anchor in question
   */
  setUIHandlerArg(key, value, anchor) {
    const nodeAtPath = Node.get(this.editor, anchor);
    let newValue = __spreadProps(__spreadValues({}, nodeAtPath.uiHandlerArgs), {
      [key]: value
    });
    if (value === null || value === void 0) {
      delete newValue[key];
    }
    Transforms.setNodes(this.editor, {
      uiHandlerArgs: newValue
    }, { at: anchor });
  }
  /**
   * Inserts an element at a given position
   * @param element the element 
   * @param at an optional position to do it at
   */
  insertElement(element) {
    if (!this.editor.selection) {
      Transforms.insertNodes(this.editor, element, { at: this.getFallbackInsertPath() });
    } else {
      Transforms.insertNodes(this.editor, element);
    }
  }
  /**
   * Sets the context key
   * @param value the value for the new context key
   * @param anchor the anchor where to set the context key at
   */
  setContext(value, anchor) {
    Transforms.setNodes(this.editor, {
      context: value
    }, { at: anchor });
  }
  /**
   * Sets the context key
   * @param value the value for the new if condition key
   * @param anchor the anchor where to set the context key at
   */
  setIfCondition(value, anchor) {
    Transforms.setNodes(this.editor, {
      ifCondition: value
    }, { at: anchor });
  }
  /**
  * Sets the for-each loop key
  * @param value the value for the new context key
  * @param anchor the anchor where to set the context key at
  */
  setForEach(value, anchor) {
    Transforms.setNodes(this.editor, {
      forEach: value
    }, { at: anchor });
  }
  /**
   * Formats the current text as bold
   */
  formatToggle(key) {
    if (this.state.currentText && this.editor.selection && Point.equals(this.editor.selection.anchor, this.editor.selection.focus)) {
      Transforms.insertNodes(
        this.editor,
        __spreadProps(__spreadValues({}, this.state.currentText), {
          text: "",
          [key]: !this.state.currentText[key]
        })
      );
    } else {
      if (this.state.currentText) {
        Transforms.setNodes(
          this.editor,
          { [key]: !this.state.currentText[key] },
          { match: (n3) => Text.isText(n3), split: true }
        );
      } else if (this.state.currentSelectedText) {
        Transforms.setNodes(
          this.editor,
          { [key]: !this.state.currentSelectedText[key] },
          { match: (n3) => Text.isText(n3), at: this.state.currentSelectedBlockElementAnchor, mode: "all" }
        );
      }
    }
  }
  /**
   * This is a helper function that is used in order to extract the available
   * classes that we have for usage within rich classes, container, and customs
   * considering what we have found in the all promise for all what is available
   * because there might be filters for them, and we need to find the labels and whatnot
   * of what we can actually use
   * 
   * @param feature the feature we are searching for basically, supportsCustom, supportsRichClasses and supportsContainers
   * that we decide on whether we support that feature
   * @param featureAll the all name for the feature in the state and where it is located in the state that we are meant to await
   * basically allCustoms, allRichClasses and allContainers
   * @param featureList the list of supported that is given in the feature support of the property so basically
   * supportedCustoms, supportedRichClasses and supportedContainers
   * @param i18nLocation the location for the i18n data in the i18n root, basically custom, containers and rich
   */
  availableFilteringFunction(feature, featureAll, featureList, i18nLocation) {
    return (
      // we pick the feature of the eg. supportsCustom, supportsRichClasses out of the feature support to see
      // if we support that feature at all
      (this.props.features[feature] ? (
        // if we do we pick from the state what we have found in the stylesheet
        // of the classes for that feature as we have awaited
        this.state[featureAll].filter(
          (c) => (
            // and we filter based on our feature list, if we have one of course, otherwise all pass
            this.props.features[featureList] ? this.props.features[featureList].includes(c) : true
          )
        )
      ) : []).map((c) => {
        return {
          value: c,
          label: this.props.baseI18n && this.props.baseI18n[i18nLocation] && // both the default and by replacing
          (this.props.baseI18n[i18nLocation][c] || this.props.baseI18n[i18nLocation][c.replace(/-/g, "_")]) || c
          // and if we find nothing we use the value itself
        };
      })
    );
  }
  /**
   * Triggers on the keydown of the slate editor itself
   * @param e the event
   */
  onKeyDown(e2) {
    if (e2.key === "Enter" && e2.altKey) {
      this.insertSuperbreak(null, e2.shiftKey);
    } else if (e2.key === "z" && e2.ctrlKey && !e2.shiftKey) {
      this.editor.undo();
    } else if (e2.key === "y" && e2.ctrlKey || e2.key === "z" && e2.ctrlKey && e2.shiftKey) {
      this.editor.redo();
    }
  }
  /**
   * Basic old school component did mount
   */
  async componentDidMount() {
    await ALL_PROMISE;
    if (!this.isUnmounted) {
      this.setState({
        allContainers: ALL_CONTAINERS,
        allTables: ALL_TABLES,
        allCustom: ALL_CUSTOM,
        allRichClasses: ALL_RICH_CLASSES
      });
    }
    if (this.props.autoFocus) {
      ReactEditor.focus(this.editor);
      this.forceFocus();
    }
    const editableHTMLElement = this.editableRef.current.childNodes[0];
    EDITOR_POOL.set(editableHTMLElement, this);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.currentText && prevState.currentText.text === "") {
      const anchorInCurrent = ReactEditor.findPath(this.editor, prevState.currentText);
      if (anchorInCurrent) {
        try {
          const elementInCurrent = Node.get(this.editor, anchorInCurrent);
          if (elementInCurrent.text === "" && elementInCurrent !== this.state.currentText) {
            this.normalizeNode([this.editor, []]);
          }
        } catch (e2) {
        }
      }
    }
  }
  getState() {
    return this.state;
  }
  /**
   * Sometimes slate leaves a selection behind we need to unselect if such
   * is the case
   */
  componentWillUnmount() {
    this.isUnmounted = true;
    ReactEditor.deselect(this.editor);
    const editableHTMLElement = this.editableRef.current.childNodes[0];
    EDITOR_POOL.delete(editableHTMLElement);
  }
  /**
   * Provides the helpers that are used by the editor
   * to construct rich text data
   */
  getHelpers() {
    const helpers = {
      editor: this.editor,
      Transforms,
      Range,
      ReactEditor,
      HistoryEditor,
      Node,
      Path,
      getContextFor: this.getContextFor,
      getRootContext: this.getRootContext,
      getState: this.getState,
      selectPath: this.selectPath,
      deletePath: this.deletePath,
      movePaths: this.movePaths,
      deleteSelectedNode: this.deleteSelectedNode,
      getPreviousSelectedElementAnchor: this.getPreviousSelectedElementAnchor,
      getPreviousTextAnchor: this.getPreviousTextAnchor,
      focus: this.focus,
      focusAt: this.focusAt,
      insertSuperbreak: this.insertSuperbreak,
      formatToggle: this.formatToggle,
      insertContainer: this.insertContainer,
      insertCustom: this.insertCustom,
      insertFile: this.insertFile,
      insertImage: this.insertImage,
      insertVideo: this.insertVideo,
      updateVideo: this.updateVideo,
      insertTemplateText: this.insertTemplateText,
      updateTemplateText: this.updateTemplateText,
      insertTemplateHTML: this.insertTemplateHTML,
      updateTemplateHTML: this.updateTemplateHTML,
      insertTable: this.insertTable,
      insertTableColumn: this.insertTableColumn,
      insertTableRow: this.insertTableRow,
      toggleTable: this.toggleTable,
      canToggleTable: this.canToggleTable,
      toggleLink: this.toggleLink,
      updateLink: this.updateLink,
      insertList: this.insertList,
      toggleQuote: this.toggleQuote,
      toggleTitle: this.toggleTitle,
      setActiveStyle: this.setActiveStyle,
      setContext: this.setContext,
      setIfCondition: this.setIfCondition,
      setForEach: this.setForEach,
      setHoverStyle: this.setHoverStyle,
      setStyle: this.setStyle,
      set: this.set,
      setRichClasses: this.setRichClasses,
      setAction: this.setAction,
      setUIHandler: this.setUIHandler,
      setUIHandlerArg: this.setUIHandlerArg,
      insertElement: this.insertElement,
      deleteTableColumn: this.deleteTableColumn,
      deleteTableRow: this.deleteTableRow,
      hardBlur: this.hardBlur,
      softBlur: this.softBlur
    };
    return helpers;
  }
  /**
   * Provides the feature support information that is used by the editor
   * to know what it can and can't do
   */
  getFeatureSupport() {
    if (this.props.features === null) {
      return null;
    }
    const availableCustoms = this.availableFilteringFunction("supportsCustom", "allCustom", "supportedCustoms", "richCustoms");
    const availableRichClasses = this.availableFilteringFunction("supportsRichClasses", "allRichClasses", "supportedRichClasses", "richClasses");
    const availableContainers = this.availableFilteringFunction("supportsContainers", "allContainers", "supportedContainers", "richContainers");
    const availableTables = this.availableFilteringFunction("supportsTables", "allTables", "supportedTables", "richTables");
    const newFeatureSupport = __spreadProps(__spreadValues({}, this.props.features), {
      availableContainers,
      availableCustoms,
      availableRichClasses,
      availableTables
    });
    return newFeatureSupport;
  }
  forceFocus() {
    if (!this.state.focused) {
      const path3 = [];
      let current2 = this.editor.children && this.editor.children[0];
      while (current2) {
        path3.push(0);
        current2 = current2.children && current2.children[0];
      }
      this.focusAt({
        anchor: {
          offset: 0,
          path: path3
        },
        focus: {
          offset: 0,
          path: path3
        }
      });
      setTimeout(() => {
        if (!this.state.focused) {
          this.onFocusedChange(path3, this.editor.children);
        }
      }, 20);
    }
  }
  forceBlur() {
    setTimeout(() => {
      if (this.state.focused) {
        this.onBlurredChange(this.editor.children);
      }
    }, 20);
  }
  /**
   * Render function
   */
  render() {
    let children = /* @__PURE__ */ import_react3.default.createElement(
      CurrentElementProvider,
      {
        block: this.state.currentSelectedBlockElement,
        superblocks: this.state.currentSelectedSuperBlockElements || [],
        inline: this.state.currentSelectedInlineElement
      },
      /* @__PURE__ */ import_react3.default.createElement("div", { ref: this.editableRef, style: { display: "contents" }, "data-slate-bug": "true" }, /* @__PURE__ */ import_react3.default.createElement(
        Editable,
        {
          id: this.props.id,
          lang: this.props.lang,
          onKeyDown: this.onKeyDown,
          renderElement: this.renderElement,
          renderLeaf: this.renderText,
          placeholder: this.props.placeholder,
          readOnly: this.props.disabled,
          disabled: this.props.disabled,
          style: { scrollMarginTop: this.props.scrollMarginTop },
          onBlur: this.forceBlur,
          "aria-invalid": !this.props.currentValid,
          "aria-errormessage": this.props.currentValid ? null : this.props.currentGeneralErrorElementId,
          "aria-describedby": this.props.currentDescribedBy,
          "aria-placeholder": this.props.placeholder
        }
      ))
    );
    const Wrapper = this.props.Wrapper;
    if (Wrapper) {
      children = /* @__PURE__ */ import_react3.default.createElement(
        Wrapper,
        __spreadProps(__spreadValues({}, this.props.wrapperArgs), {
          disabled: this.props.disabled,
          state: this.state,
          helpers: this.getHelpers(),
          featureSupport: this.getFeatureSupport(),
          currentLoadError: this.props.currentLoadError,
          dismissCurrentLoadError: this.props.dismissCurrentLoadError,
          ref: this.wrapperRef,
          baseI18n: this.props.baseI18n
        }),
        children
      );
    }
    if (this.props.rootContext && this.props.rootContext.editorArgs && this.props.rootContext.editorArgs.wrapper) {
      children = this.props.rootContext.editorArgs.wrapper(children);
    }
    if (this.state.treeValue.children !== this.editor.children) {
      this.editor.children = this.state.treeValue.children;
    }
    return /* @__PURE__ */ import_react3.default.createElement(
      Slate,
      {
        editor: this.editor,
        value: this.state.treeValue.children,
        onChange: this.onChange
      },
      children
    );
  }
};

// ../editor/slate/wrapper.tsx
var import_react10 = __toESM(require_react());

// ../editor/slate/drawer/index.tsx
var import_react8 = __toESM(require_react());

// ../editor/slate/drawer/general.tsx
var import_react4 = __toESM(require_react());
function DefaultWrapperDrawerInternalPanelWrapper(props) {
  return /* @__PURE__ */ import_react4.default.createElement("div", { className: "slateEditorWrapperDrawerInternalPanelWrapper" }, props.children);
}
function DefaultWrapperDrawerTextField(props) {
  return /* @__PURE__ */ import_react4.default.createElement("div", { className: "slateEditorWrapperDrawerTextField" }, /* @__PURE__ */ import_react4.default.createElement("label", null, props.label), /* @__PURE__ */ import_react4.default.createElement(
    "input",
    {
      value: props.value,
      placeholder: props.placeholder || props.label,
      onChange: props.onChangeByEvent,
      disabled: props.disabled
    }
  ));
}
function DefaultWrapperDrawerSelectField(props) {
  return /* @__PURE__ */ import_react4.default.createElement("div", { className: "slateEditorWrapperDrawerSelectField" }, /* @__PURE__ */ import_react4.default.createElement("label", null, props.label), /* @__PURE__ */ import_react4.default.createElement(
    "select",
    {
      value: props.value,
      onChange: props.onChangeByEvent,
      disabled: props.disabled,
      placeholder: props.placeholder
    },
    props.options.map((option) => /* @__PURE__ */ import_react4.default.createElement("option", { key: option.value, value: option.value }, typeof option.label === "string" ? option.label : option.value))
  ));
}
function DefaultWrapperDrawerMultiSelectField(props) {
  const handleSelectChange = (0, import_react4.useCallback)((e2) => {
    const selectedOptions = Array.from(e2.target.selectedOptions, (option) => option.value);
    props.onChange(selectedOptions);
  }, []);
  return /* @__PURE__ */ import_react4.default.createElement("div", { className: "slateEditorWrapperDrawerMultiSelectField" }, /* @__PURE__ */ import_react4.default.createElement("label", null, props.label), /* @__PURE__ */ import_react4.default.createElement(
    "select",
    {
      multiple: true,
      value: props.values,
      onChange: handleSelectChange,
      disabled: props.disabled
    },
    props.options.map((option) => /* @__PURE__ */ import_react4.default.createElement("option", { key: option.value, value: option.value }, typeof option.label === "string" ? option.label : option.value))
  ));
}
function DefaultWrapperDrawerCheckBoxField(props) {
  const handleChange = (event) => {
    const newValue = event.target.checked;
    props.onChange(newValue);
  };
  return /* @__PURE__ */ import_react4.default.createElement("div", { className: "slateEditorWrapperDrawerCheckBoxField" }, /* @__PURE__ */ import_react4.default.createElement(
    "input",
    {
      type: "checkbox",
      checked: props.value,
      onChange: handleChange,
      disabled: props.disabled
    }
  ), /* @__PURE__ */ import_react4.default.createElement("label", null, props.label));
}
function GeneralOptions(props) {
  const [name, setName] = (0, import_react4.useState)(props.state.currentSelectedElement && props.state.currentSelectedElement.givenName || "");
  (0, import_react4.useEffect)(() => {
    setName(props.state.currentSelectedElement && props.state.currentSelectedElement.givenName || "");
  }, [props.state.currentSelectedElement]);
  const lastUpdateRef = (0, import_react4.useRef)();
  const updateNameB = (0, import_react4.useCallback)((v) => {
    setName(v);
    clearTimeout(lastUpdateRef.current);
    lastUpdateRef.current = setTimeout(() => {
      props.helpers.set({
        givenName: v
      }, props.state.currentSelectedElementAnchor);
    }, 600);
  }, [props.state.currentSelectedElement]);
  const updateName = (0, import_react4.useCallback)((e2) => {
    updateNameB(e2.target.value);
  }, [updateNameB]);
  if (!props.state.currentSelectedElement) {
    return null;
  }
  const WrapperDrawerInternalPanelWrapper = props.WrapperDrawerInternalPanelWrapper || DefaultWrapperDrawerInternalPanelWrapper;
  const WrapperDrawerTextField = props.WrapperDrawerTextField || DefaultWrapperDrawerTextField;
  return /* @__PURE__ */ import_react4.default.createElement(WrapperDrawerInternalPanelWrapper, null, /* @__PURE__ */ import_react4.default.createElement(
    WrapperDrawerTextField,
    {
      value: name,
      label: props.baseI18n.name,
      onChangeByEvent: updateName,
      onChangeByValue: updateNameB,
      id: "name"
    }
  ), props.drawerExtras ? props.drawerExtras.map((v, i2) => {
    const Element4 = v.Component;
    return /* @__PURE__ */ import_react4.default.createElement(Element4, __spreadValues({ key: v.key || i2 }, props));
  }) : null);
}

// ../editor/slate/drawer/styles.tsx
var import_react5 = __toESM(require_react());
var import_deep_equal3 = __toESM(require_deep_equal());
var SingleStyle = class extends import_react5.default.PureComponent {
  /**
   * We need the derived function in order to be able to update the value of the
   * selector in case, this is the more efficient way in these cases where things
   * are slightly out of sync
   */
  static getDerivedStateFromProps(props, state) {
    if ((props.styleValue || "") !== state.value && !Path.equals(props.anchor, state.valueForAnchor)) {
      return {
        value: props.styleValue || "",
        valueForAnchor: props.anchor
      };
    }
    return null;
  }
  /**
   * Constructs the element that provides an input for active, hover and the standard
   * @param props 
   */
  constructor(props) {
    super(props);
    this.onStyleChange = this.onStyleChange.bind(this);
    this.onStyleChangeB = this.onStyleChangeB.bind(this);
    this.state = {
      value: props.styleValue || "",
      valueForAnchor: props.anchor
    };
  }
  /**
   * Triggers each time the input for the style changes
   * @param e the change event in question
   */
  onStyleChange(e2) {
    this.onStyleChangeB(e2.target.value);
  }
  /**
   * Triggers each time the input for the style changes
   * @param e the change event in question
   */
  onStyleChangeB(newValue = null) {
    this.setState({
      value: newValue || "",
      valueForAnchor: this.props.anchor
    });
    this.props.onChange(newValue, this.props.anchor);
  }
  /**
   * The standard render function
   */
  render() {
    const TextField = this.props.TextField || DefaultWrapperDrawerTextField;
    return /* @__PURE__ */ import_react5.default.createElement(
      TextField,
      {
        value: this.state.value,
        onChangeByValue: this.onStyleChangeB,
        onChangeByEvent: this.onStyleChange,
        label: this.props.name,
        id: this.props.id
      }
    );
  }
};
var ClassesOptionSelector = class extends import_react5.default.PureComponent {
  /**
   * We need the derived function in order to be able to update the value of the
   * selector in case, this is the more efficient way in these cases where things
   * are slightly out of sync
   */
  static getDerivedStateFromProps(props, state) {
    const selectedNode = props.state.currentSelectedElement;
    const time2 = (/* @__PURE__ */ new Date()).getTime();
    if (!(0, import_deep_equal3.default)(selectedNode.richClassList || [], state.value, { strict: true }) && (!Path.equals(props.state.currentSelectedElementAnchor, state.valueForAnchor) || time2 - state.valueLastTimeRequestedUpdate > 300)) {
      return {
        value: selectedNode.richClassList || [],
        valueForAnchor: props.state.currentSelectedElementAnchor
      };
    }
    return null;
  }
  /**
   * constructs a new class selector for rich classes
   * @param props the entire material ui slate wrapper props that the wrapper takes
   */
  constructor(props) {
    super(props);
    const selectedNode = props.state.currentSelectedElement;
    this.state = {
      value: selectedNode.richClassList || [],
      valueForAnchor: props.state.currentSelectedElementAnchor,
      valueLastTimeRequestedUpdate: 0
    };
    this.onRichClassListChange = this.onRichClassListChange.bind(this);
  }
  /**
   * Triggers when the select field changes and receives a new value
   * @param e the change event
   */
  onRichClassListChange(newValue = []) {
    this.setState({
      value: newValue,
      valueForAnchor: this.props.state.currentSelectedElementAnchor,
      valueLastTimeRequestedUpdate: (/* @__PURE__ */ new Date()).getTime()
    }, () => {
      if (newValue.length === 0) {
        newValue = null;
      }
      this.props.helpers.setRichClasses(newValue, this.props.state.currentSelectedElementAnchor);
    });
  }
  unblur() {
    document.body.dataset.unblur = "true";
  }
  resetBlur() {
    delete document.body.dataset.unblur;
  }
  /**
   * The render function that creates the multiselect
   */
  render() {
    const MultiSelector = this.props.WrapperDrawerMultiSelectField || DefaultWrapperDrawerMultiSelectField;
    return /* @__PURE__ */ import_react5.default.createElement(
      MultiSelector,
      {
        id: "rich-class",
        label: this.props.baseI18n.classes,
        onChange: this.onRichClassListChange,
        options: this.props.featureSupport.availableRichClasses.map((element) => ({
          label: element.label,
          value: element.value
        })),
        resetBlur: this.resetBlur,
        unblur: this.unblur,
        values: this.state.value
      }
    );
  }
};
function StylesOptions(props) {
  const setStandalone = (0, import_react5.useCallback)((v) => {
    props.helpers.set({
      standalone: v
    }, props.state.currentSelectedElementAnchor);
  }, []);
  if (!props.state.currentSelectedElement) {
    return null;
  }
  const CheckboxField = props.WrapperDrawerCheckboxField || DefaultWrapperDrawerCheckBoxField;
  const imgStandalone = props.state.currentSelectedElement.type === "image" ? /* @__PURE__ */ import_react5.default.createElement(
    CheckboxField,
    {
      onChange: setStandalone,
      id: "image-standalone",
      label: props.baseI18n.standalone,
      value: props.state.currentSelectedElement.standalone
    }
  ) : null;
  const currentNode = props.state.currentSelectedElement;
  const WrapperDrawerInternalPanelWrapper = props.WrapperDrawerInternalPanelWrapper || DefaultWrapperDrawerInternalPanelWrapper;
  return /* @__PURE__ */ import_react5.default.createElement(WrapperDrawerInternalPanelWrapper, null, imgStandalone, props.featureSupport.supportsRichClasses ? /* @__PURE__ */ import_react5.default.createElement(
    ClassesOptionSelector,
    __spreadValues({}, props)
  ) : null, props.featureSupport.supportsCustomStyles ? /* @__PURE__ */ import_react5.default.createElement(
    SingleStyle,
    {
      anchor: props.state.currentSelectedElementAnchor,
      onChange: props.helpers.setStyle,
      name: props.baseI18n.style,
      styleValue: currentNode.style,
      TextField: props.WrapperDrawerTextField,
      id: "style"
    }
  ) : null, props.featureSupport.supportsCustomStyles && props.featureSupport.supportsTemplating ? /* @__PURE__ */ import_react5.default.createElement(
    SingleStyle,
    {
      anchor: props.state.currentSelectedElementAnchor,
      onChange: props.helpers.setHoverStyle,
      name: props.baseI18n.styleHover,
      styleValue: currentNode.styleHover,
      TextField: props.WrapperDrawerTextField,
      id: "style-hover"
    }
  ) : null, props.featureSupport.supportsCustomStyles && props.featureSupport.supportsTemplating ? /* @__PURE__ */ import_react5.default.createElement(
    SingleStyle,
    {
      anchor: props.state.currentSelectedElementAnchor,
      onChange: props.helpers.setActiveStyle,
      name: props.baseI18n.styleActive,
      styleValue: currentNode.styleActive,
      TextField: props.WrapperDrawerTextField,
      id: "style-active"
    }
  ) : null);
}

// ../editor/slate/drawer/actions.tsx
var import_react6 = __toESM(require_react());
var EVENTS = [
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
  "wheel"
];
var SingleAction = class extends import_react6.default.PureComponent {
  /**
   * We need the derived function in order to be able to update the value of the
   * selector in case, this is the more efficient way in these cases where things
   * are slightly out of sync
   */
  static getDerivedStateFromProps(props, state) {
    const time2 = (/* @__PURE__ */ new Date()).getTime();
    if ((props.actionValue || "") !== state.value && (!Path.equals(props.anchor, state.valueForAnchor) || time2 - state.valueLastTimeRequestedUpdate > 300)) {
      return {
        value: props.actionValue || "",
        valueForAnchor: props.anchor
      };
    }
    return null;
  }
  /**
   * constructs a new SingleAction instance
   * @param props the props
   */
  constructor(props) {
    super(props);
    this.onActionValueChange = this.onActionValueChange.bind(this);
    this.onDirectChange = this.onDirectChange.bind(this);
    this.state = {
      value: props.actionValue || "",
      valueForAnchor: props.anchor,
      valueLastTimeRequestedUpdate: 0
    };
  }
  /**
   * Triggers when the selector value has changed to something else
   * @param e the change event
   */
  onActionValueChange(e2) {
    this.onDirectChange(e2.target.value);
  }
  onDirectChange(newValue = null) {
    this.setState({
      value: newValue || "",
      valueForAnchor: this.props.anchor,
      valueLastTimeRequestedUpdate: (/* @__PURE__ */ new Date()).getTime()
    });
    this.props.onChange(this.props.name, newValue, this.props.anchor);
  }
  unblur() {
    document.body.dataset.unblur = "true";
  }
  resetBlur() {
    delete document.body.dataset.unblur;
  }
  /**
   * The render function for the component
   */
  render() {
    const SelectField = this.props.SelectField || DefaultWrapperDrawerSelectField;
    return /* @__PURE__ */ import_react6.default.createElement(
      SelectField,
      {
        id: this.props.id,
        label: this.props.name,
        onChangeByEvent: this.onActionValueChange,
        onChangeByValue: this.onDirectChange,
        options: this.props.options,
        resetBlur: this.resetBlur,
        unblur: this.unblur,
        value: this.state.value,
        displayEmpty: true
      }
    );
  }
};
function ActionsOptions(props) {
  const currentNode = props.state.currentSelectedInlineElement || props.state.currentSelectedBlockElement || props.state.currentSelectedSuperBlockElements && props.state.currentSelectedSuperBlockElements[props.state.currentSelectedSuperBlockElements.length - 1];
  const currentNodeContext = props.state.currentSelectedInlineContext || props.state.currentSelectedBlockContext || props.state.currentSelectedTopmostSuperBlockContext;
  const currentNodeAnchor = props.state.currentSelectedInlineElementAnchor || props.state.currentSelectedBlockElementAnchor || props.state.currentSelectedSuperBlockElementAnchors && props.state.currentSelectedSuperBlockElementAnchors[props.state.currentSelectedSuperBlockElementAnchors.length - 1];
  let allOptions = currentNodeContext ? Object.keys(currentNodeContext.properties).map((p) => {
    const value = currentNodeContext.properties[p];
    if (value.type !== "function") {
      return null;
    }
    return {
      value: p,
      label: typeof value.label === "function" ? value.label() : value.label,
      primary: props.state.currentRootContext !== currentNodeContext
    };
  }).filter((v) => !!v) : [];
  if (props.state.currentRootContext !== currentNodeContext) {
    allOptions = allOptions.concat(Object.keys(props.state.currentRootContext.properties).map((p) => {
      const value = props.state.currentRootContext.properties[p];
      if (value.nonRootInheritable) {
        return null;
      }
      if (value.type !== "function") {
        return null;
      }
      return {
        value: p,
        label: typeof value.label === "function" ? value.label() : value.label,
        primary: false
      };
    }).filter((v) => !!v));
  }
  if (allOptions) {
    allOptions = [{
      value: "",
      label: " - ",
      primary: false
    }].concat(allOptions);
  }
  ;
  const WrapperDrawerInternalPanelWrapper = props.WrapperDrawerInternalPanelWrapper || DefaultWrapperDrawerInternalPanelWrapper;
  return /* @__PURE__ */ import_react6.default.createElement(WrapperDrawerInternalPanelWrapper, null, EVENTS.map((v, index) => /* @__PURE__ */ import_react6.default.createElement(
    SingleAction,
    {
      key: v,
      name: v,
      actionValue: currentNode[v] || null,
      options: allOptions,
      anchor: currentNodeAnchor,
      onChange: props.helpers.setAction,
      groupIndex: index,
      id: "action-" + v,
      SelectField: props.WrapperDrawerSelectField
    }
  )));
}

// ../editor/slate/drawer/templating.tsx
var import_react7 = __toESM(require_react());
var SingleTemplatingElement = class extends import_react7.default.PureComponent {
  /**
   * We need the derived function in order to be able to update the value of the
   * selector in case, this is the more efficient way in these cases where things
   * are slightly out of sync
   */
  static getDerivedStateFromProps(props, state) {
    const time2 = (/* @__PURE__ */ new Date()).getTime();
    if ((props.value || "") !== state.value && (!Path.equals(props.anchor, state.valueForAnchor) || time2 - state.valueLastTimeRequestedUpdate > 300)) {
      return {
        value: props.value || "",
        valueForAnchor: props.anchor
      };
    }
    return null;
  }
  /**
   * Construct a brand new templating element that provides a selector
   * @param props the props
   */
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onChangeByEvent = this.onChangeByEvent.bind(this);
    this.state = {
      value: props.value || "",
      valueForAnchor: props.anchor,
      valueLastTimeRequestedUpdate: 0
    };
  }
  /**
   * This function triggers once the selection has changed
   * in the field
   * @param e the change event
   */
  onChange(newValue) {
    this.setState({
      value: newValue || "",
      valueForAnchor: this.props.anchor,
      valueLastTimeRequestedUpdate: (/* @__PURE__ */ new Date()).getTime()
    });
    this.props.onChange(newValue, this.props.anchor);
  }
  /**
  * This function triggers once the selection has changed
  * in the field
  * @param e the change event
  */
  onChangeByEvent(e2) {
    const newValue = e2.target.value || null;
    this.onChange(newValue);
  }
  unblur() {
    document.body.dataset.unblur = "true";
  }
  resetBlur() {
    delete document.body.dataset.unblur;
  }
  /**
   * The render function
   */
  render() {
    const SelectField = this.props.SelectField || DefaultWrapperDrawerSelectField;
    return /* @__PURE__ */ import_react7.default.createElement(
      SelectField,
      {
        label: this.props.i18nName,
        onChangeByEvent: this.onChangeByEvent,
        onChangeByValue: this.onChange,
        options: this.props.options,
        resetBlur: this.resetBlur,
        unblur: this.unblur,
        value: this.state.value,
        id: this.props.id,
        displayEmpty: true
      }
    );
  }
};
function DefaultDrawerTemplatingContainerBox(props) {
  return /* @__PURE__ */ import_react7.default.createElement("div", { className: "staleEditorDrawerTemplatingContainerBox" }, props.children);
}
function TemplatingOptions(props) {
  const currentNode = props.state.currentSelectedElement;
  const allEachContexts = [
    {
      label: " - ",
      value: ""
    }
  ];
  const allContexts = [
    {
      label: " - ",
      value: ""
    }
  ];
  const allIfConditions = [
    {
      label: " - ",
      value: ""
    }
  ];
  const currentSelectElementForSelectContext = getContextFor(
    props.state.currentSelectedElementAnchor,
    "select-context",
    props.state.treeValue,
    props.state.currentRootContext
  );
  if (currentSelectElementForSelectContext) {
    Object.keys(currentSelectElementForSelectContext.properties).forEach((p) => {
      const value = currentSelectElementForSelectContext.properties[p];
      if (value.type !== "context" || value.loopable) {
        return null;
      }
      const option = {
        value: p,
        label: typeof value.label === "function" ? value.label() : value.label
      };
      allContexts.push(option);
    });
  }
  const currentSelectElementForEachContext = getContextFor(
    props.state.currentSelectedElementAnchor,
    "select-loop",
    props.state.treeValue,
    props.state.currentRootContext
  );
  if (currentSelectElementForEachContext) {
    Object.keys(currentSelectElementForEachContext.properties).forEach((p) => {
      const value = currentSelectElementForEachContext.properties[p];
      const isValidForBoolean = value.type === "boolean";
      const isValidForLoop = value.type === "context" && value.loopable;
      if (!isValidForBoolean && !isValidForLoop) {
        return null;
      }
      const option = {
        value: p,
        label: typeof value.label === "function" ? value.label() : value.label
      };
      if (isValidForBoolean) {
        allIfConditions.push(option);
      } else {
        allEachContexts.push(option);
      }
    });
  }
  if (currentNode.forEach) {
    const eachFound = allEachContexts.find((v) => v.value === currentNode.forEach);
    if (!eachFound) {
      allEachContexts.push({
        value: currentNode.forEach,
        label: currentNode.forEach
      });
    }
  }
  if (currentNode.context) {
    const contextFound = allContexts.find((v) => v.value === currentNode.context);
    if (!contextFound) {
      allContexts.push({
        value: currentNode.context,
        label: currentNode.context
      });
    }
  }
  if (currentNode.ifCondition) {
    const ifConditionFound = allIfConditions.find((v) => v.value === currentNode.ifCondition);
    if (!ifConditionFound) {
      allEachContexts.push({
        value: currentNode.ifCondition,
        label: currentNode.ifCondition
      });
    }
  }
  const DrawerTemplatingContainerBox = props.DrawerTemplatingContainerBox || DefaultDrawerTemplatingContainerBox;
  return /* @__PURE__ */ import_react7.default.createElement(DrawerTemplatingContainerBox, null, /* @__PURE__ */ import_react7.default.createElement(
    SingleTemplatingElement,
    {
      name: "context",
      i18nName: props.baseI18n.context,
      value: currentNode.context || null,
      options: allContexts,
      anchor: props.state.currentSelectedElementAnchor,
      onChange: props.helpers.setContext,
      SelectField: props.WrapperDrawerSelectField,
      id: "render-context"
    }
  ), /* @__PURE__ */ import_react7.default.createElement(
    SingleTemplatingElement,
    {
      name: "if",
      i18nName: props.baseI18n.renderCondition,
      value: currentNode.ifCondition || null,
      options: allIfConditions,
      anchor: props.state.currentSelectedElementAnchor,
      onChange: props.helpers.setIfCondition,
      SelectField: props.WrapperDrawerSelectField,
      id: "render-if"
    }
  ), /* @__PURE__ */ import_react7.default.createElement(
    SingleTemplatingElement,
    {
      name: "each",
      i18nName: props.baseI18n.each,
      value: currentNode.forEach || null,
      options: allEachContexts,
      anchor: props.state.currentSelectedElementAnchor,
      onChange: props.helpers.setForEach,
      SelectField: props.WrapperDrawerSelectField,
      id: "render-for-each"
    }
  ));
}

// ../editor/slate/drawer/index.tsx
function DefaultWrapperDrawerElementTitle(props) {
  return /* @__PURE__ */ import_react8.default.createElement("h6", null, props.info.isInteractive ? /* @__PURE__ */ import_react8.default.createElement("span", { className: "slateEditorWrapperDrawerElementTitleIconRtlOnly" }, String.fromCharCode(9094)) : null, /* @__PURE__ */ import_react8.default.createElement(
    "span",
    {
      className: props.isCurrent ? "slateEditorWrapperDrawerElementTitleSelected" : "slateEditorWrapperDrawerElementTitle",
      role: "button",
      "aria-current": props.isCurrent,
      onClick: props.onSelect
    },
    props.info.name
  ), props.info.isInteractive ? /* @__PURE__ */ import_react8.default.createElement("span", { className: "slateEditorWrapperDrawerElementTitleIconLtrOnly" }, String.fromCharCode(9094)) : null, props.isCurrent ? null : /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, /* @__PURE__ */ import_react8.default.createElement("span", { className: "slateEditorWrapperDrawerElementTitleIconLtrOnly" }, String.fromCharCode(11106)), /* @__PURE__ */ import_react8.default.createElement("span", { className: "slateEditorWrapperDrawerElementTitleIconRtlOnly" }, String.fromCharCode(11106))));
}
function DefaultWrapperDrawerElementTitleWrapper(props) {
  return /* @__PURE__ */ import_react8.default.createElement("div", { className: "slateEditorWrapperDrawerElementTitleWrapper" }, props.children);
}
function DefaultWrapperDrawerInfoPanelWrapper(props) {
  return props.children;
}
function DefaultWrapperDrawerTabs(props) {
  return /* @__PURE__ */ import_react8.default.createElement("div", { className: "slateEditorWrapperDrawerTabs" }, props.options.map((v) => /* @__PURE__ */ import_react8.default.createElement(
    "button",
    {
      onClick: props.setSelectedOption.bind(null, v.id),
      key: v.id,
      className: props.selectedOption === v.id ? "slateEditorWrapperDrawerTabSelected" : "slateEditorWrapperDrawerTab"
    },
    v.label
  )));
}
function WrapperDrawer(props) {
  const [location2, setLocation] = (0, import_react8.useState)(localStorage.getItem("SLATE_DRAWER_LAST_LOCATION") || "MAIN");
  const [accessibilitySelectedOption, useAccessibilitySelectedOption] = (0, import_react8.useState)(null);
  (0, import_react8.useEffect)(() => {
    if (!props.drawerOpen) {
      useAccessibilitySelectedOption(null);
    }
  }, [props.drawerOpen]);
  const setLocationCallback = (0, import_react8.useCallback)((value) => {
    localStorage.setItem("SLATE_DRAWER_LAST_LOCATION", value);
    useAccessibilitySelectedOption(value);
    setLocation(value);
  }, []);
  let settingsForNode = null;
  let titleForNode = null;
  if (props.state.currentSelectedElement) {
    let infoPanel = null;
    switch (location2) {
      case "MAIN":
        infoPanel = /* @__PURE__ */ import_react8.default.createElement(GeneralOptions, __spreadValues({}, props));
        break;
      case "STYLES":
        infoPanel = /* @__PURE__ */ import_react8.default.createElement(StylesOptions, __spreadValues({}, props));
        break;
      case "ACTIONS":
        infoPanel = /* @__PURE__ */ import_react8.default.createElement(ActionsOptions, __spreadValues({}, props));
        break;
      case "TEMPLATING":
        infoPanel = /* @__PURE__ */ import_react8.default.createElement(TemplatingOptions, __spreadValues({}, props));
        break;
    }
    const selectedNodeInfo = getInfoFor(
      props.state.currentSelectedElement,
      props.baseI18n
    );
    const potentialBlockParent = props.state.currentSelectedElement === props.state.currentSelectedInlineElement ? getInfoFor(
      props.state.currentSelectedBlockElement,
      props.baseI18n
    ) : null;
    const superBlockPaths = (props.state.currentSelectedSuperBlockElements || []).filter((e2) => e2 !== props.state.currentSelectedElement).map((v, index) => {
      return {
        info: getInfoFor(v, props.baseI18n),
        path: props.state.currentSelectedSuperBlockElementAnchors[index]
      };
    });
    const entirePath = superBlockPaths;
    if (potentialBlockParent) {
      entirePath.push({
        info: potentialBlockParent,
        path: props.state.currentSelectedBlockElementAnchor
      });
    }
    entirePath.push({
      info: selectedNodeInfo,
      path: props.state.currentSelectedElementAnchor
    });
    const WrapperDrawerElementTitle = props.WrapperDrawerElementTitle || DefaultWrapperDrawerElementTitle;
    titleForNode = entirePath.map((v, i2) => {
      return /* @__PURE__ */ import_react8.default.createElement(
        WrapperDrawerElementTitle,
        {
          entirePath,
          info: v.info,
          isCurrent: i2 === entirePath.length - 1,
          key: i2,
          index: i2,
          onSelect: i2 === entirePath.length - 1 ? null : props.helpers.selectPath.bind(null, v.path)
        }
      );
    });
    const WrapperDrawerInfoPanelWrapper = props.WrapperDrawerInfoPanelWrapper || DefaultWrapperDrawerInfoPanelWrapper;
    const WrapperDrawerTabs = props.WrapperDrawerTabs || DefaultWrapperDrawerTabs;
    settingsForNode = /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, !selectedNodeInfo.isText ? /* @__PURE__ */ import_react8.default.createElement(
      WrapperDrawerTabs,
      {
        accessibilitySelectedOption,
        selectedOption: location2,
        setSelectedOption: setLocationCallback,
        setAccessibilitySelectedOption: useAccessibilitySelectedOption,
        options: [
          {
            id: "MAIN",
            label: props.baseI18n.settings
          },
          props.featureSupport.supportsCustomStyles || props.featureSupport.supportsRichClasses ? {
            id: "STYLES",
            label: props.baseI18n.styles
          } : null,
          props.featureSupport.supportsTemplating ? {
            id: "TEMPLATING",
            label: props.baseI18n.templating
          } : null,
          props.featureSupport.supportsTemplating ? {
            id: "ACTIONS",
            label: props.baseI18n.actions
          } : null
        ].filter((v) => !!v)
      }
    ) : null, /* @__PURE__ */ import_react8.default.createElement(
      WrapperDrawerInfoPanelWrapper,
      {
        accessibilitySelectedOption,
        selectedOption: location2,
        setSelectedOption: setLocationCallback,
        setAccessibilitySelectedOption: useAccessibilitySelectedOption
      },
      infoPanel
    ));
  }
  const WrapperForTitle = props.WrapperDrawerElementTitleWrapper || DefaultWrapperDrawerElementTitleWrapper;
  return /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, /* @__PURE__ */ import_react8.default.createElement(WrapperForTitle, null, titleForNode), settingsForNode, props.drawerExtraChildren);
}

// ../editor/slate/dialogs/file.tsx
var import_react9 = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());
function DefaultDialog(props) {
  if (!props.open) {
    return null;
  }
  const dialog = /* @__PURE__ */ import_react9.default.createElement("div", { className: "slateEditorDialogBackdrop" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "slateEditorDialog" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "slateEditorDialogTitle" }, props.title), /* @__PURE__ */ import_react9.default.createElement("div", { className: "slateEditorDialogContent" }, props.children), /* @__PURE__ */ import_react9.default.createElement("div", { className: "slateEditorButtons" }, props.buttons.map((v) => /* @__PURE__ */ import_react9.default.createElement("button", { key: v.action, onClick: v.onClick }, v.label)))));
  return import_react_dom2.default.createPortal(dialog, document.body);
}
var FileLoadErrorDialog = class extends import_react9.default.PureComponent {
  constructor(props) {
    super(props);
    this.onClose = this.onClose.bind(this);
  }
  onClose() {
    this.props.dismissCurrentLoadError();
  }
  /**
   * The render function
   */
  render() {
    const Dialog = this.props.Dialog || DefaultDialog;
    return /* @__PURE__ */ import_react9.default.createElement(
      Dialog,
      {
        open: !!this.props.currentLoadError,
        onClose: this.onClose,
        title: this.props.i18nGenericError,
        buttons: [
          {
            label: this.props.i18nOk,
            onClick: this.props.dismissCurrentLoadError,
            action: "primary"
          }
        ]
      },
      this.props.currentLoadError
    );
  }
};

// ../editor/slate/wrapper.tsx
var import_react_dom3 = __toESM(require_react_dom());
var defaultWrapperI18nRichInfoEnglish = __spreadProps(__spreadValues({}, defaultBaseI18nRichInfoEnglish), {
  formatAddContainerLabel: "add container",
  addTemplateHTML: {
    label: "select a template",
    placeholder: "select a template",
    submit: "ok",
    title: "add template html"
  },
  addTemplateText: {
    label: "select a template",
    placeholder: "select a template",
    submit: "ok",
    title: "add template text"
  },
  formatAddCustomLabel: "add custom",
  formatAddFileLabel: "add file",
  formatAddImageLabel: "add image",
  formatAddTableLabel: "add table",
  formatAddTbodyLabel: "add table body",
  formatAddTdLabel: "add table column",
  formatAddTemplateHTML: "add template html",
  formatAddTemplateText: "add template text",
  formatAddTfootLabel: "toggle table foot",
  formatAddTheadLabel: "add table head",
  formatAddThLabel: "toggle table header",
  formatAddTrLabel: "add table row",
  formatAddVideoLabel: "add table video",
  formatBoldLabel: "bold",
  formatDeleteElement: "delete",
  formatDelTdLabel: "delete table column",
  formatDelThLabel: "delete table header column",
  formatDelTrLabel: "delete table row",
  formatItalicLabel: "italic",
  formatLinkLabel: "link",
  formatListBulletedLabel: "bulleted list",
  formatListNumberedLabel: "numbered list",
  formatMakeLoop: "make loop",
  formatMore: "more",
  formatQuoteLabel: "quote",
  formatSetActiveStyleLabel: "active style",
  formatSetClassLabel: "class names",
  formatSetContext: "set context",
  formatSetEventHandlers: "set event handlers",
  formatSetHoverStyleLabel: "hover style",
  formatSetRenderCondition: "set render condition",
  formatSetStyleLabel: "set style",
  formatSetUIHandlerArgLabel: "set ui handler arg",
  formatSetUIHandlerArgName: "set ui handler arg name",
  formatSetUIHandlerArgValue: "set ui handler arg value",
  formatSetUIHandlerLabel: "set ui handler",
  formatTitleLabel: "title",
  formatUnderlineLabel: "underline",
  loadVideo: {
    invalid: "invalid url",
    label: "youtube and vimeo only",
    placeholder: "https://youtube.com/...",
    submit: "insert",
    title: "insert a video"
  },
  setLink: {
    invalid: "invalid link",
    label: "url",
    placeholder: "https://url",
    placeholderLocalOnly: "./local-url-only",
    submit: "ok",
    templated: "or select one of these template values",
    templatedLabel: "template value",
    templatedPlaceholder: "template value",
    templatedUnspecified: "unspecified",
    title: "insert a link,"
  },
  genericError: "error",
  ok: "ok"
});
function callFn(focusFn, actionFn, ...args) {
  focusFn();
  actionFn(...args);
}
function DefaultEditorContainer(props) {
  return /* @__PURE__ */ import_react10.default.createElement("div", { className: "slateEditorDefaultEditorContainer" }, props.children);
}
var DefaultToolbar = import_react10.default.forwardRef((props, ref) => {
  return /* @__PURE__ */ import_react10.default.createElement("div", __spreadProps(__spreadValues({ className: "slateEditorToolbar" }, props.props), { ref }), /* @__PURE__ */ import_react10.default.createElement("div", { className: "slateEditorToolbarInternal" }, props.toolbarContents, props.customChildren, /* @__PURE__ */ import_react10.default.createElement("div", { className: "slateEditorToolbarInternalSpacer" }), props.drawerButton));
});
function DefaultToolbarButtonComponent(props) {
  return /* @__PURE__ */ import_react10.default.createElement(
    "button",
    {
      className: "slateEditorToolbarButton " + (props.selected ? " selected" : ""),
      title: props.title,
      disabled: props.disabled,
      onClick: props.onClick,
      dangerouslySetInnerHTML: { __html: props.htmlEntity + (typeof props.count === "number" ? " (" + props.count + ")" : "") }
    }
  );
}
function Bold(props) {
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  const disabled = !props.state.currentSelectedText || !props.state.allowsText;
  return /* @__PURE__ */ import_react10.default.createElement(
    ToolbarButton,
    {
      title: props.baseI18n.formatBoldLabel,
      disabled,
      selected: props.state.currentSelectedText && props.state.currentSelectedText.bold,
      onClick: callFn.bind(null, props.helpers.focus, props.helpers.formatToggle, "bold"),
      htmlEntity: "\u{1D401}",
      type: "bold",
      disjointedMode: props.disjointedMode
    }
  );
}
function Italic(props) {
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  const disabled = !props.state.currentSelectedText || !props.state.allowsText;
  return /* @__PURE__ */ import_react10.default.createElement(
    ToolbarButton,
    {
      title: props.baseI18n.formatItalicLabel,
      disabled,
      selected: props.state.currentSelectedText && props.state.currentSelectedText.italic,
      onClick: callFn.bind(null, props.helpers.focus, props.helpers.formatToggle, "italic"),
      htmlEntity: "\u{1D470}",
      type: "italic",
      disjointedMode: props.disjointedMode
    }
  );
}
function Underline(props) {
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  const disabled = !props.state.currentSelectedText || !props.state.allowsText;
  return /* @__PURE__ */ import_react10.default.createElement(
    ToolbarButton,
    {
      title: props.baseI18n.formatUnderlineLabel,
      disabled,
      selected: props.state.currentSelectedText && props.state.currentSelectedText.underline,
      onClick: callFn.bind(null, props.helpers.focus, props.helpers.formatToggle, "underline"),
      htmlEntity: "\u1E48",
      type: "underline",
      disjointedMode: props.disjointedMode
    }
  );
}
function VDivider(props) {
  if (props.ToolbarVDivider) {
    const RealDivider = props.ToolbarVDivider;
    return /* @__PURE__ */ import_react10.default.createElement(RealDivider, null);
  }
  return /* @__PURE__ */ import_react10.default.createElement("div", { className: "slateEditorVdivider" });
}
function HDivider(props) {
  if (props.ToolbarHDivider) {
    const RealDivider = props.ToolbarHDivider;
    return /* @__PURE__ */ import_react10.default.createElement(RealDivider, null);
  }
  return /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, /* @__PURE__ */ import_react10.default.createElement("div", { className: "slateEditorHdividerspacer" }), /* @__PURE__ */ import_react10.default.createElement("div", { className: "slateEditorHdivider" }));
}
function Link(props) {
  if (!props.featureSupport.supportsLinks || !props.isReady) {
    return null;
  }
  let templateLinkAmount = 0;
  if (props.featureSupport.supportsTemplating && props.state.currentSelectedBlockContext) {
    Object.keys(props.state.currentSelectedBlockContext.properties).forEach((key) => {
      const property = props.state.currentSelectedBlockContext.properties[key];
      if (property.type === "link") {
        templateLinkAmount++;
      }
    });
  }
  if (props.featureSupport.supportsTemplating && props.state.currentRootContext && props.state.currentRootContext !== props.state.currentSelectedBlockContext) {
    Object.keys(props.state.currentRootContext.properties).forEach((key) => {
      const property = props.state.currentRootContext.properties[key];
      if (property.nonRootInheritable) {
        return;
      }
      if (property.type === "link") {
        templateLinkAmount++;
      }
    });
  }
  const disabled = !props.state.allowsInsertElement({ type: "link", href: "", children: [], thref: null });
  const selected = props.helpers.editor.selection && props.helpers.Range.isCollapsed(props.helpers.editor.selection) && props.state.currentSelectedInlineElement && props.state.currentSelectedInlineElement.type === "link";
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  return /* @__PURE__ */ import_react10.default.createElement(
    ToolbarButton,
    {
      title: props.baseI18n.formatLinkLabel,
      selected,
      disabled,
      onClick: callFn.bind(null, props.helpers.focus, props.helpers.toggleLink, null, null),
      count: templateLinkAmount === 0 ? null : templateLinkAmount,
      htmlEntity: "\u{1F517}",
      type: "link",
      disjointedMode: props.disjointedMode
    }
  );
}
function Title(props) {
  if (!props.featureSupport.supportsTitle) {
    return null;
  }
  const disabled = !props.state.allowsInsertElement({ type: "title", titleType: "h1", children: [] }, { collapsed: true });
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  return /* @__PURE__ */ import_react10.default.createElement(
    ToolbarButton,
    {
      title: props.baseI18n.formatTitleLabel,
      disabled,
      selected: props.state.currentSelectedBlockElement && props.state.currentSelectedBlockElement.type === "title",
      onClick: callFn.bind(null, props.helpers.focus, props.helpers.toggleTitle, "h1"),
      htmlEntity: "\u{1D413}",
      type: "title",
      disjointedMode: props.disjointedMode
    }
  );
}
function Quote(props) {
  if (!props.featureSupport.supportsQuote) {
    return null;
  }
  const disabled = !props.state.allowsInsertElement({ type: "quote", children: [] }, { collapsed: true });
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  return /* @__PURE__ */ import_react10.default.createElement(
    ToolbarButton,
    {
      title: props.baseI18n.formatQuoteLabel,
      disabled,
      selected: props.state.currentSelectedBlockElement && props.state.currentSelectedBlockElement.type === "quote",
      onClick: callFn.bind(null, props.helpers.focus, props.helpers.toggleQuote),
      htmlEntity: '"',
      type: "quote",
      disjointedMode: props.disjointedMode
    }
  );
}
function NumberedList(props) {
  if (!props.featureSupport.supportsLists) {
    return null;
  }
  const disabled = !props.state.allowsInsertElement({ type: "list", listType: "numbered", children: [] });
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  return /* @__PURE__ */ import_react10.default.createElement(
    ToolbarButton,
    {
      title: props.baseI18n.formatListNumberedLabel,
      disabled,
      selected: false,
      onClick: callFn.bind(null, props.helpers.focus, props.helpers.insertList, "numbered"),
      htmlEntity: "123",
      type: "numbered-list",
      disjointedMode: props.disjointedMode
    }
  );
}
function BulletedList(props) {
  if (!props.featureSupport.supportsLists) {
    return null;
  }
  const disabled = !props.state.allowsInsertElement({ type: "list", listType: "bulleted", children: [] });
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  return /* @__PURE__ */ import_react10.default.createElement(
    ToolbarButton,
    {
      title: props.baseI18n.formatListBulletedLabel,
      disabled,
      selected: false,
      onClick: callFn.bind(null, props.helpers.focus, props.helpers.insertList, "bulleted"),
      htmlEntity: "...",
      type: "bulleted-list",
      disjointedMode: props.disjointedMode
    }
  );
}
var imgExample = {
  type: "image",
  children: [STANDARD_TEXT_NODE()],
  width: 0,
  height: 0,
  alt: "",
  src: "",
  srcSet: "",
  srcId: "",
  standalone: false,
  sizes: ""
};
function Image(props) {
  if (!props.featureSupport.supportsImages) {
    return null;
  }
  const disabled = !props.state.allowsInsertElement(imgExample, { selected: true });
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  return /* @__PURE__ */ import_react10.default.createElement(
    ToolbarButton,
    {
      title: props.baseI18n.formatAddImageLabel,
      disabled,
      selected: false,
      onClick: props.requestImage,
      htmlEntity: "\u{1F4F7}",
      type: "image",
      disjointedMode: props.disjointedMode
    }
  );
}
var videoExample = {
  type: "video",
  origin: "youtube",
  src: "",
  children: [STANDARD_TEXT_NODE()]
};
function Video(props) {
  if (!props.featureSupport.supportsVideos) {
    return null;
  }
  const disabled = !props.state.allowsInsertElement(videoExample, { selected: true });
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  return /* @__PURE__ */ import_react10.default.createElement(
    ToolbarButton,
    {
      title: props.baseI18n.formatAddVideoLabel,
      disabled,
      selected: false,
      onClick: callFn.bind(null, props.helpers.focus, props.helpers.insertVideo, null),
      htmlEntity: "\u{1F3A5}",
      type: "video",
      disjointedMode: props.disjointedMode
    }
  );
}
var fileExample = {
  type: "file",
  children: [STANDARD_TEXT_NODE()],
  extension: "",
  fileName: "",
  size: "",
  src: "",
  srcId: ""
};
function File(props) {
  if (!props.featureSupport.supportsFiles) {
    return null;
  }
  const disabled = !props.state.allowsInsertElement(fileExample, { selected: true });
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  return /* @__PURE__ */ import_react10.default.createElement(
    ToolbarButton,
    {
      title: props.baseI18n.formatAddFileLabel,
      disabled,
      selected: false,
      onClick: props.requestFile,
      htmlEntity: "\u{1F5B9}",
      type: "file",
      disjointedMode: props.disjointedMode
    }
  );
}
function Container(props) {
  if (!props.featureSupport.supportsContainers) {
    return null;
  }
  const disabled = !props.state.allowsInsertElement({ type: "container", containerType: null, children: [] });
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  return /* @__PURE__ */ import_react10.default.createElement(
    ToolbarButton,
    {
      title: props.baseI18n.formatAddContainerLabel,
      disabled,
      selected: false,
      onClick: callFn.bind(null, props.helpers.focus, props.helpers.insertContainer, null),
      htmlEntity: "\u26F6",
      type: "container",
      disjointedMode: props.disjointedMode
    }
  );
}
function Table(props) {
  if (!props.featureSupport.supportsTables) {
    return null;
  }
  const disabled = !props.state.allowsInsertElement({ type: "table", tableType: null, children: [] });
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  return /* @__PURE__ */ import_react10.default.createElement(
    ToolbarButton,
    {
      title: props.baseI18n.formatAddTableLabel,
      disabled,
      selected: false,
      onClick: callFn.bind(null, props.helpers.focus, props.helpers.insertTable, null),
      htmlEntity: "\u1699",
      type: "table",
      disjointedMode: props.disjointedMode
    }
  );
}
function TemplateText(props) {
  if (!props.isReady || !props.featureSupport.supportsTemplating) {
    return null;
  }
  let templateTextAmount = 0;
  if (props.state.currentSelectedBlockContext) {
    Object.keys(props.state.currentSelectedBlockContext.properties).forEach((key) => {
      const property = props.state.currentSelectedBlockContext.properties[key];
      if (property.type === "text") {
        templateTextAmount++;
      }
    });
  }
  if (props.featureSupport.supportsTemplating && props.state.currentRootContext && props.state.currentRootContext !== props.state.currentSelectedBlockContext) {
    Object.keys(props.state.currentRootContext.properties).forEach((key) => {
      const property = props.state.currentRootContext.properties[key];
      if (property.nonRootInheritable) {
        return;
      }
      if (property.type === "text") {
        templateTextAmount++;
      }
    });
  }
  if (templateTextAmount === 0) {
    return null;
  }
  const disabled = !props.state.allowsInsertElement({ type: "inline", children: [], textContent: "text" });
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  return /* @__PURE__ */ import_react10.default.createElement(
    ToolbarButton,
    {
      title: props.baseI18n.formatAddTemplateText,
      disabled,
      selected: false,
      onClick: callFn.bind(null, props.helpers.focus, props.helpers.insertTemplateText, null, null),
      htmlEntity: "text",
      type: "table",
      disjointedMode: props.disjointedMode,
      count: templateTextAmount
    }
  );
}
function TemplateHTML(props) {
  if (!props.isReady || !props.featureSupport.supportsTemplating) {
    return null;
  }
  let templateHTMLAmount = 0;
  const currentSelectedSuperBlockElement = props.state.currentSelectedSuperBlockElements && props.state.currentSelectedSuperBlockElements[props.state.currentSelectedSuperBlockElements.length - 1];
  if (currentSelectedSuperBlockElement && props.state.currentSelectedTopmostSuperBlockContext) {
    Object.keys(props.state.currentSelectedTopmostSuperBlockContext.properties).forEach((key) => {
      const property = props.state.currentSelectedTopmostSuperBlockContext.properties[key];
      if (property.type === "html") {
        templateHTMLAmount++;
      }
    });
  }
  if (props.featureSupport.supportsTemplating && props.state.currentRootContext && props.state.currentRootContext !== props.state.currentSelectedTopmostSuperBlockContext) {
    Object.keys(props.state.currentRootContext.properties).forEach((key) => {
      const property = props.state.currentRootContext.properties[key];
      if (property.nonRootInheritable) {
        return;
      }
      if (property.type === "html") {
        templateHTMLAmount++;
      }
    });
  }
  if (templateHTMLAmount === 0) {
    return null;
  }
  const disabled = !props.state.allowsInsertElement({ type: "void-block", children: [], html: "html" });
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  return /* @__PURE__ */ import_react10.default.createElement(
    ToolbarButton,
    {
      title: props.baseI18n.formatAddTemplateHTML,
      disabled,
      selected: false,
      onClick: callFn.bind(null, props.helpers.focus, props.helpers.insertTemplateHTML, null, null),
      htmlEntity: "html",
      type: "table",
      disjointedMode: props.disjointedMode,
      count: templateHTMLAmount
    }
  );
}
function ToolbarExtra(props) {
  const elementReference = typeof props.extra.element === "function" ? props.extra.element() : props.extra.element;
  const defaultAction = (0, import_react10.useCallback)(() => {
    const element = typeof props.extra.element === "function" ? props.extra.element() : props.extra.element;
    props.helpers.insertElement(element);
    return element;
  }, [props.extra.element, props.helpers.insertElement]);
  (0, import_react10.useEffect)(() => {
    if (props.extra.onAnyKeyDown) {
      document.body.addEventListener("keydown", props.extra.onAnyKeyDown);
      return () => {
        document.body.removeEventListener("keydown", props.extra.onAnyKeyDown);
      };
    }
    return;
  }, [props.extra.onAnyKeyDown]);
  const onClick = (0, import_react10.useCallback)((e2) => {
    if (props.extra.refocusHandler) {
      props.extra.refocusHandler(props.helpers.focus, e2);
    } else {
      props.helpers.focus();
    }
    props.extra.onClick ? props.extra.onClick(defaultAction, e2) : defaultAction();
  }, []);
  let disabled = false;
  if (elementReference) {
    disabled = !props.state.allowsInsertElement(elementReference);
  }
  const ToolbarButton = props.ToolbarButton || DefaultToolbarButtonComponent;
  if (typeof props.extra.title === "string" || !props.extra.title) {
    return /* @__PURE__ */ import_react10.default.createElement(
      ToolbarButton,
      __spreadValues({
        title: props.extra.title,
        disabled,
        selected: props.extra.selected,
        count: props.extra.count,
        disjointedMode: props.disjointedMode,
        htmlEntity: "?",
        type: "extra",
        extraId: props.extra.id,
        onClick
      }, props.extra.toolbarButtonProps)
    );
  } else {
    const element = props.extra.title;
    return import_react10.default.cloneElement(element, {
      children: (i18nTitle) => /* @__PURE__ */ import_react10.default.createElement(
        ToolbarButton,
        __spreadValues({
          title: i18nTitle,
          disabled,
          selected: props.extra.selected,
          count: props.extra.count,
          disjointedMode: props.disjointedMode,
          htmlEntity: "?",
          type: "extra",
          extraId: props.extra.id,
          onClick
        }, props.extra.toolbarButtonProps)
      )
    });
  }
}
function ToolbarExtras(props) {
  if (props.toolbarExtras && props.toolbarExtras.length) {
    const toolbarExtras = props.toolbarExtras.map((x, index) => {
      return /* @__PURE__ */ import_react10.default.createElement(ToolbarExtra, __spreadProps(__spreadValues({}, props), { extra: x, key: index }));
    });
    const customs = props.toolbarExtras.map((x, i2) => x.customChildren ? /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, { key: i2 }, x.customChildren) : null);
    return /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, toolbarExtras, customs);
  }
  return null;
}
function None() {
  return null;
}
var toolbarRegistry = {
  none: None,
  italic: Italic,
  bold: Bold,
  underline: Underline,
  "bulleted-list": BulletedList,
  "numbered-list": NumberedList,
  "template-html": TemplateHTML,
  "template-text": TemplateText,
  title: Title,
  container: Container,
  divider: VDivider,
  hdivider: HDivider,
  extras: ToolbarExtras,
  file: File,
  image: Image,
  link: Link,
  quote: Quote,
  video: Video,
  table: Table
};
function DefaultToolbarDrawerToggleButton(props) {
  return /* @__PURE__ */ import_react10.default.createElement(
    "button",
    {
      onClick: props.toggleDrawer,
      className: "slateEditorToolbarButton",
      dangerouslySetInnerHTML: { __html: props.drawerOpen ? "&#11014;" : "&#11015;" }
    }
  );
}
var RichTextEditorToolbar = class extends import_react10.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }
  componentDidMount() {
    this.setState({
      isReady: true
    });
    this.props.onHeightChange(this.getHeight());
  }
  componentDidUpdate() {
    this.props.onHeightChange(this.getHeight());
  }
  getHeight() {
    var _a, _b;
    return (_b = (_a = this.appBarHeaderRef) == null ? void 0 : _a.current) == null ? void 0 : _b.offsetHeight;
  }
  getAppbarHeader() {
    var _a;
    return (_a = this.appBarHeaderRef) == null ? void 0 : _a.current;
  }
  render() {
    if (!this.props.state.isRichText) {
      return null;
    }
    if (this.props.disjointedMode && !this.props.disjointedModeKeepToolbar && !this.props.state.currentSelectedElement) {
      return null;
    }
    const toolbarForm = (this.props.customToolbar || [
      "bold",
      "italic",
      "underline",
      this.props.featureSupport.supportsTitle || this.props.featureSupport.supportsQuote || this.props.featureSupport.supportsLinks || this.props.featureSupport.supportsLists ? "divider" : "none",
      this.props.featureSupport.supportsLinks ? "link" : "none",
      this.props.featureSupport.supportsTitle ? "title" : "none",
      this.props.featureSupport.supportsQuote ? "quote" : "none",
      this.props.featureSupport.supportsLists ? "bulleted-list" : "none",
      this.props.featureSupport.supportsLists ? "numbered-list" : "none",
      this.props.featureSupport.supportsTables ? "table" : "none",
      this.props.featureSupport.supportsImages || this.props.featureSupport.supportsFiles || this.props.featureSupport.supportsVideos ? "divider" : "none",
      this.props.featureSupport.supportsImages ? "image" : "none",
      this.props.featureSupport.supportsFiles ? "file" : "none",
      this.props.featureSupport.supportsVideos ? "video" : "none",
      "divider",
      this.props.featureSupport.supportsContainers ? "container" : "none",
      "template-text",
      "template-html",
      this.props.toolbarExtras && this.props.toolbarExtras.length ? "extras" : "none"
    ]).map((v) => {
      if (typeof v === "function") {
        return v(this.props);
      }
      return v;
    });
    const DrawerToggleComponent = this.props.ToolbarDrawerButton || DefaultToolbarDrawerToggleButton;
    let drawerButton = this.props.shouldHaveDrawer() ? /* @__PURE__ */ import_react10.default.createElement(
      DrawerToggleComponent,
      {
        drawerOpen: this.props.drawerOpen,
        toggleDrawer: this.props.toggleDrawer,
        disjointedMode: this.props.disjointedMode
      }
    ) : null;
    const customChildren = [];
    const toolbarFormMapped = toolbarForm.map((ele, index) => {
      if (typeof ele === "string") {
        const Element4 = toolbarRegistry[ele];
        return /* @__PURE__ */ import_react10.default.createElement(
          Element4,
          __spreadProps(__spreadValues({}, this.props), {
            isReady: this.state.isReady,
            key: index
          })
        );
      } else {
        const extraValue = typeof ele === "function" ? ele(this.props) : ele;
        if (extraValue.customChildren) {
          customChildren.push(
            /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, { key: index }, extraValue.customChildren)
          );
        }
        return /* @__PURE__ */ import_react10.default.createElement(
          ToolbarExtra,
          __spreadProps(__spreadValues({}, this.props), {
            isReady: this.state.isReady,
            key: index,
            extra: extraValue
          })
        );
      }
    });
    const Toolbar = this.props.Toolbar || DefaultToolbar;
    const toReturn = /* @__PURE__ */ import_react10.default.createElement(
      Toolbar,
      {
        customChildren,
        disjointedMode: this.props.disjointedMode,
        drawerButton,
        drawerOpen: this.props.drawerOpen,
        props: {
          ["data-unblur"]: true
        },
        toolbarContents: toolbarFormMapped,
        ref: this.appBarHeaderRef
      }
    );
    if (this.props.disjointedMode && this.state.isReady) {
      return import_react_dom3.default.createPortal(toReturn, document.body);
    } else if (this.props.disjointedMode) {
      return null;
    } else {
      return toReturn;
    }
  }
};
var DefaultSlateWrapper = class extends import_react10.default.PureComponent {
  /**
   * Constructs a new material ui based wrapper for the slate editor
   * @param props the base properties that every wrapper gets extended for this specific wrapper
   */
  constructor(props) {
    super(props);
    this.state = {
      inlineElementThatWasCurrentBeforeLosingFocus: null,
      // keep SSR compatibility by keeping the drawer closed at the start
      // as we cannot read local storage in the server side
      drawerOpen: false,
      toolbarHeight: 0,
      noAnimate: true,
      toolbarState: null
    };
    this.isUnmounted = false;
    this.inputImageRef = import_react10.default.createRef();
    this.inputFileRef = import_react10.default.createRef();
    this.DrawerContainerRef = import_react10.default.createRef();
    this.toolbarRef = import_react10.default.createRef();
    this.editorRef = import_react10.default.createRef();
    this.onHeightChange = this.onHeightChange.bind(this);
    this.onImageLoad = this.onImageLoad.bind(this);
    this.onFileLoad = this.onFileLoad.bind(this);
    this.requestImage = this.requestImage.bind(this);
    this.requestFile = this.requestFile.bind(this);
    this.onFileEventedReFocus = this.onFileEventedReFocus.bind(this);
    this.refocus = this.refocus.bind(this);
    this.shouldHaveDrawer = this.shouldHaveDrawer.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.setToolbarState = this.setToolbarState.bind(this);
    this.selectiveHardBlur = this.selectiveHardBlur.bind(this);
    this.keyUpListener = this.keyUpListener.bind(this);
    this.onAltActionTriggered = this.onAltActionTriggered.bind(this);
  }
  onAltActionTriggered(tabNav, action) {
    if (action === "blur") {
      this.props.helpers.hardBlur();
    }
  }
  onHeightChange(newHeight) {
    if (this.state.toolbarHeight !== newHeight) {
      this.setState({
        toolbarHeight: newHeight
      });
    }
  }
  /**
   * During the mount event
   */
  componentDidMount() {
    if (this.shouldHaveDrawer()) {
      this.setState({
        drawerOpen: localStorage.getItem("SLATE_DRAWER_OPEN") === "true",
        noAnimate: true
      }, () => {
        setTimeout(() => {
          !this.isUnmounted && this.setState({
            noAnimate: false
          });
        }, 300);
      });
    } else {
      this.setState({
        noAnimate: false
      });
    }
    document.body.addEventListener("mousedown", this.selectiveHardBlur);
    document.body.addEventListener("touchstart", this.selectiveHardBlur);
    document.body.addEventListener("keyup", this.keyUpListener);
  }
  componentWillUnmount() {
    document.body.removeEventListener("mousedown", this.selectiveHardBlur);
    document.body.removeEventListener("touchstart", this.selectiveHardBlur);
    document.body.removeEventListener("keyup", this.keyUpListener);
    this.isUnmounted = true;
  }
  keyUpListener(e2) {
    if (e2.key === "Tab") {
      this.selectiveHardBlur(e2);
    }
  }
  selectiveHardBlur(e2, altTarget) {
    const target = altTarget || e2.target;
    if (this.props.state.currentSelectedText) {
      if (this.isUnblurred(target)) {
        if (target.tagName !== "INPUT" && target.tagName !== "SELECT") {
          e2.preventDefault();
        }
      } else if (!this.isInEditor(target)) {
        this.props.helpers.hardBlur();
      }
    }
  }
  isUnblurred(ele) {
    if (ele === this.toolbarRef.current.getAppbarHeader() || ele === this.DrawerContainerRef.current.getDrawerBody() || ele.dataset.unblur) {
      return true;
    }
    if (ele.parentElement) {
      return this.isUnblurred(ele.parentElement);
    }
    return false;
  }
  isInEditor(ele) {
    if (ele.dataset.notEditor) {
      return false;
    }
    if (ele === this.editorRef.current) {
      return true;
    }
    if (ele.parentElement) {
      return this.isInEditor(ele.parentElement);
    }
    return false;
  }
  /**
   * Specifies on whether it should have a drawer
   * @returns a boolean on this fact
   */
  shouldHaveDrawer() {
    if (!this.props.featureSupport || this.props.hideDrawer) {
      return false;
    }
    return !!(this.props.featureSupport.supportsTemplating || this.props.featureSupport.supportsCustomStyles || this.props.featureSupport.supportsContainers || this.props.featureSupport.supportedCustoms || this.props.featureSupport.supportsRichClasses || this.props.drawerExtras);
  }
  /**
   * Executes in order to open the dialog in order to request an image
   * via this file upload dialog
   */
  requestImage() {
    document.body.addEventListener("focus", this.onFileEventedReFocus, { capture: true });
    this.originalSelectionArea = this.props.state.currentText ? this.props.helpers.editor.selection : null;
    this.originalSelectionPath = this.props.state.currentSelectedInlineElementAnchor || this.props.state.currentSelectedBlockElementAnchor || this.props.state.currentSelectedSuperBlockElementAnchors && this.props.state.currentSelectedSuperBlockElementAnchors[this.props.state.currentSelectedSuperBlockElementAnchors.length - 1];
    this.inputImageRef.current.click();
  }
  /**
   * Executes in order to open the dialog in order to request an file
   * via this file upload dialog
   */
  requestFile() {
    document.body.addEventListener("focus", this.onFileEventedReFocus, { capture: true });
    this.originalSelectionArea = this.props.state.currentText ? this.props.helpers.editor.selection : null;
    this.originalSelectionPath = this.props.state.currentSelectedInlineElementAnchor || this.props.state.currentSelectedBlockElementAnchor || this.props.state.currentSelectedSuperBlockElementAnchors && this.props.state.currentSelectedSuperBlockElementAnchors[this.props.state.currentSelectedSuperBlockElementAnchors.length - 1];
    this.inputFileRef.current.click();
  }
  /**
   * Opens/closes the drawer
   */
  toggleDrawer() {
    const newState = !this.state.drawerOpen;
    this.setState({
      drawerOpen: newState
    });
    if (!this.props.disjointedMode) {
      window.dispatchEvent(new Event("SLATE_DRAWER_OPEN"));
    }
    localStorage.setItem("SLATE_DRAWER_OPEN", JSON.stringify(newState));
  }
  /**
   * Refocuses as the original selection area that was focused
   * mainly used by dialogs once they haave closed
   */
  refocus() {
    if (this.isUnmounted) {
      return;
    }
    if (this.originalSelectionArea) {
      this.props.helpers.focusAt(this.originalSelectionArea);
    } else if (this.originalSelectionPath) {
      this.props.helpers.selectPath(this.originalSelectionPath);
    }
  }
  /**
   * Triggers once the document has recovered focus from the file
   * dialog that is native for the file upload
   */
  onFileEventedReFocus() {
    document.body.removeEventListener("focus", this.onFileEventedReFocus, { capture: true });
    this.refocusTimeout = setTimeout(this.refocus, 30);
  }
  setToolbarState(state) {
    if (this.state.toolbarState !== state) {
      this.setState({ toolbarState: state });
    }
  }
  /**
   * This function gets called once the image input calls the on change event
   * which means it has been loaded by the input itself and it's available for
   * reading
   * @param e the change event that contains the file 
   */
  async onImageLoad(e2) {
    document.body.removeEventListener("focus", this.onFileEventedReFocus, { capture: true });
    clearTimeout(this.refocusTimeout);
    const file = e2.target.files[0];
    e2.target.value = "";
    await this.props.helpers.focusAt(this.originalSelectionArea || this.originalSelectionPath);
    this.props.helpers.insertImage(file, false);
  }
  /**
   * This function gets called once the file input calls the on change event
   * which means it has been loaded by the input itself and it's available for
   * reading
   * @param e the change event that contains the file
   */
  async onFileLoad(e2) {
    document.body.removeEventListener("focus", this.onFileEventedReFocus, { capture: true });
    clearTimeout(this.refocusTimeout);
    const file = e2.target.files[0];
    e2.target.value = "";
    await this.props.helpers.focusAt(this.originalSelectionArea || this.originalSelectionPath);
    this.props.helpers.insertFile(file);
  }
  /**
   * Standard render function from the wrapper
   */
  render() {
    const imageInput = this.props.state.isRichText && this.props.featureSupport.supportsImages ? /* @__PURE__ */ import_react10.default.createElement(
      "input",
      {
        ref: this.inputImageRef,
        type: "file",
        accept: this.props.featureSupport.supportsImagesAccept,
        style: { display: "none" },
        autoComplete: "off",
        onChange: this.onImageLoad
      }
    ) : null;
    const fileInput = this.props.state.isRichText && this.props.featureSupport.supportsFiles ? /* @__PURE__ */ import_react10.default.createElement(
      "input",
      {
        ref: this.inputFileRef,
        type: "file",
        accept: this.props.featureSupport.supportsFilesAccept,
        style: { display: "none" },
        autoComplete: "off",
        onChange: this.onFileLoad
      }
    ) : null;
    const fileLoadErrorDialog = this.props.state.isRichText && (this.props.featureSupport.supportsImages || this.props.featureSupport.supportsFiles) ? /* @__PURE__ */ import_react10.default.createElement(
      FileLoadErrorDialog,
      {
        currentLoadError: this.props.currentLoadError,
        dismissCurrentLoadError: this.props.dismissCurrentLoadError,
        i18nGenericError: this.props.baseI18n.genericError,
        i18nOk: this.props.baseI18n.ok,
        Dialog: this.props.Dialog
      }
    ) : null;
    let toolbar = /* @__PURE__ */ import_react10.default.createElement(
      RichTextEditorToolbar,
      __spreadProps(__spreadValues({}, this.props), {
        toolbarState: this.state.toolbarState,
        toolbarHeight: this.state.toolbarHeight,
        ref: this.toolbarRef,
        onHeightChange: this.onHeightChange,
        requestImage: this.requestImage,
        requestFile: this.requestFile,
        shouldHaveDrawer: this.shouldHaveDrawer,
        drawerOpen: this.state.drawerOpen,
        toggleDrawer: this.toggleDrawer,
        setToolbarState: this.setToolbarState
      })
    );
    let extraChildren = null;
    if (this.props.customExtraChildren) {
      const [characterCount, wordCount] = countSizeAndWords(this.props.state.treeValue);
      extraChildren = this.props.customExtraChildren(characterCount, wordCount);
    }
    let drawerContainer = /* @__PURE__ */ import_react10.default.createElement(
      DrawerContainer,
      __spreadProps(__spreadValues({}, this.props), {
        ref: this.DrawerContainerRef,
        drawerOpen: this.state.drawerOpen,
        noAnimate: this.state.noAnimate,
        toolbarHeight: this.state.toolbarHeight
      })
    );
    const DisjointedEditorContainer = this.props.DisjointedEditorContainer || "div";
    const EditorContainer = this.props.EditorContainer || DefaultEditorContainer;
    const DisjointedEditor = this.props.DisjointedEditor || "div";
    const Editor2 = this.props.Editor || "div";
    const basicClassName = "rich-text editor " + (this.props.state.isRichText ? "rich-text-mode" : "plain-text-mode") + (this.props.state.focused ? " focused" : "") + (this.props.state.currentValid ? " valid" : " invalid") + (this.props.disabled ? " disabled" : " enabled");
    let box = null;
    if (this.props.disjointedMode) {
      box = /* @__PURE__ */ import_react10.default.createElement(DisjointedEditorContainer, { ref: this.editorRef, className: "slateEditorDisjointedEditorContainer" }, /* @__PURE__ */ import_react10.default.createElement(DisjointedEditor, { className: basicClassName }, this.props.children), /* @__PURE__ */ import_react10.default.createElement("div", { "data-not-editor": true, style: { width: "100%" } }, extraChildren));
    } else {
      box = /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, /* @__PURE__ */ import_react10.default.createElement(
        Editor2,
        {
          ref: this.editorRef,
          className: basicClassName
        },
        this.props.children
      ), extraChildren);
    }
    if (this.props.BaseWrapper) {
      const BaseWrapper = this.props.BaseWrapper;
      box = /* @__PURE__ */ import_react10.default.createElement(
        BaseWrapper,
        __spreadProps(__spreadValues({}, this.props), {
          drawerOpen: this.state.drawerOpen
        }),
        box
      );
    }
    if (this.props.ToolbarWrapper) {
      const ToolbarWrapper = this.props.ToolbarWrapper;
      toolbar = /* @__PURE__ */ import_react10.default.createElement(ToolbarWrapper, __spreadProps(__spreadValues({}, this.props), { drawerOpen: this.state.drawerOpen }), toolbar);
    }
    if (this.props.DrawerWrapper) {
      const DrawerWrapper = this.props.DrawerWrapper;
      drawerContainer = /* @__PURE__ */ import_react10.default.createElement(DrawerWrapper, __spreadProps(__spreadValues({}, this.props), { drawerOpen: this.state.drawerOpen }), drawerContainer);
    }
    let toReturn;
    if (this.props.disjointedMode) {
      toReturn = /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, toolbar, box, drawerContainer, imageInput, fileInput);
    } else {
      toReturn = /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, toolbar, /* @__PURE__ */ import_react10.default.createElement(EditorContainer, null, box, drawerContainer), imageInput, fileInput);
    }
    if (this.props.FinalWrapper) {
      const FinalWrapper = this.props.FinalWrapper;
      toReturn = /* @__PURE__ */ import_react10.default.createElement(FinalWrapper, __spreadProps(__spreadValues({}, this.props), { drawerOpen: this.state.drawerOpen }), toReturn);
    }
    return toReturn;
  }
};
var DefaultDrawerBody = import_react10.default.forwardRef((props, ref) => {
  return /* @__PURE__ */ import_react10.default.createElement("div", { ref, className: "slateEditorDrawerBody" }, props.drawerOpen ? props.children : null);
});
function DefaultDrawerSpacer(props) {
  return /* @__PURE__ */ import_react10.default.createElement(
    "div",
    {
      className: "slateEditorDrawerAppbarSpacer",
      style: { height: props.toolbarHeight, flex: "0 0 " + props.toolbarHeight + "px" }
    }
  );
}
function DefaultDrawerContainerBox(props) {
  return /* @__PURE__ */ import_react10.default.createElement(
    "div",
    {
      className: (props.drawerOpen ? "open " : "") + (props.disjointedMode ? "slateEditorDrawerFixed" : "slateEditorDrawer") + (props.noAnimate ? " slateEditorDrawerNoAnimate" : "")
    },
    props.children
  );
}
var DrawerContainer = class extends import_react10.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
    this.editorDrawerBodyRef = import_react10.default.createRef();
  }
  componentDidMount() {
    this.setState({
      isReady: true
    });
  }
  getDrawerBody() {
    return this.editorDrawerBodyRef.current;
  }
  render() {
    if (this.props.disjointedMode && !this.props.state.currentSelectedElement) {
      return null;
    }
    const DrawerContainerBox = this.props.DrawerContainerBox || DefaultDrawerContainerBox;
    const DrawerSpacer = this.props.DrawerSpacer || DefaultDrawerSpacer;
    const DrawerBody = this.props.DrawerBody || DefaultDrawerBody;
    const toReturn = /* @__PURE__ */ import_react10.default.createElement(
      DrawerContainerBox,
      {
        disjointedMode: this.props.disjointedMode,
        drawerOpen: this.props.drawerOpen,
        noAnimate: this.props.noAnimate,
        toolbarHeight: this.props.toolbarHeight
      },
      this.props.disjointedMode && this.props.drawerOpen ? /* @__PURE__ */ import_react10.default.createElement(
        DrawerSpacer,
        {
          disjointedMode: this.props.disjointedMode,
          toolbarHeight: this.props.toolbarHeight
        }
      ) : null,
      /* @__PURE__ */ import_react10.default.createElement(
        DrawerBody,
        {
          ref: this.editorDrawerBodyRef,
          disjointedMode: this.props.disjointedMode,
          toolbarHeight: this.props.toolbarHeight,
          drawerOpen: this.props.drawerOpen
        },
        /* @__PURE__ */ import_react10.default.createElement(WrapperDrawer, __spreadValues({}, this.props))
      )
    );
    if (this.props.disjointedMode) {
      if (this.state.isReady) {
        return import_react_dom3.default.createPortal(toReturn, document.body);
      } else {
        return null;
      }
    } else {
      return toReturn;
    }
  }
};

// ../editor/slate/element-wrappers.tsx
var import_react12 = __toESM(require_react());

// ../editor/editor-dropdown.tsx
var import_react_dom4 = __toESM(require_react_dom());
var import_react11 = __toESM(require_react());
var DefaultDropdownComponentWrapper = import_react11.default.forwardRef((props, ref) => {
  const Element4 = props.tag;
  return /* @__PURE__ */ import_react11.default.createElement(
    Element4,
    __spreadProps(__spreadValues({
      className: "slateEditorDropdownContentWrapper"
    }, props.props), {
      ref
    }),
    props.children
  );
});
var DefaultDropdownComponent = import_react11.default.forwardRef((props, ref) => {
  return /* @__PURE__ */ import_react11.default.createElement(
    "div",
    __spreadProps(__spreadValues({
      className: props.containedWithinBox ? "slateEditorDropdownComponentContained" : "slateEditorDropdownComponent"
    }, props.props), {
      ref
    }),
    props.children
  );
});
var DefaultDropdownComponentBox = import_react11.default.forwardRef((props, ref) => {
  return /* @__PURE__ */ import_react11.default.createElement(
    "div",
    __spreadProps(__spreadValues({
      className: "slateEditorDropdownComponentContainerBox"
    }, props.props), {
      ref
    }),
    props.children
  );
});
function defaultPortalElementOverflowCalculator(top, height) {
  const reference = document.body.parentElement;
  const positionTopOverall = top + reference.scrollTop;
  const availableHeight = reference.scrollHeight;
  const spaceRemaining = availableHeight - positionTopOverall;
  return height - spaceRemaining;
}
function defaultPortalElementOverflowSpacerHeightCalculator(overflow) {
  const reference = document.body.parentElement;
  return reference.scrollHeight - window.innerHeight + overflow;
}
function defaultPortalElementOverflowSpacerGenerator(height, ref) {
  return /* @__PURE__ */ import_react11.default.createElement("div", { ref, style: { height, backgroundColor: "#eee" } });
}
function isInDropdownOrWrapper(ele, dropdownItself, wrapperContainer) {
  if (ele === dropdownItself || ele === wrapperContainer) {
    return true;
  }
  if (ele.parentElement) {
    return isInDropdownOrWrapper(ele.parentElement, dropdownItself, wrapperContainer);
  }
  return false;
}
function EditorDropdown(props) {
  var _a;
  const boxRef = (0, import_react11.useRef)();
  const dropdownRef = (0, import_react11.useRef)();
  const overflowElement = (0, import_react11.useRef)();
  const [pos, setPos] = (0, import_react11.useState)(null);
  const [overflowSpacerHeight, setOverflowSpacerHeight] = (0, import_react11.useState)(0);
  const [currentOverflow, setCurrentOverflow] = (0, import_react11.useState)(0);
  const congruentTimer = (0, import_react11.useRef)(null);
  const recalculateOverflow = (0, import_react11.useCallback)((top, height) => {
    if (!overflowElement.current || !overflowElement.current.offsetHeight) {
      const newOverflow = props.portalElementOverflowCalculator ? props.portalElementOverflowCalculator(top, height) : defaultPortalElementOverflowCalculator(top, height);
      if (newOverflow > 0) {
        const newHeight = (props.portalElementOverflowSpacerHeightCalculator ? props.portalElementOverflowSpacerHeightCalculator(newOverflow) : defaultPortalElementOverflowSpacerHeightCalculator(newOverflow)) + 25;
        setOverflowSpacerHeight(newHeight);
        setCurrentOverflow(newOverflow);
      } else {
        setOverflowSpacerHeight(0);
        setCurrentOverflow(0);
      }
    }
  }, [props.portalElementOverflowCalculator, props.portalElementOverflowSpacerHeightCalculator]);
  const congruentTimerExec = (0, import_react11.useCallback)(() => {
    if (dropdownRef.current && overflowElement.current) {
      const clientRect = dropdownRef.current.getBoundingClientRect();
      const currentHeight = clientRect.height;
      const currentTop = clientRect.top;
      const moreOverflow = props.portalElementOverflowCalculator ? props.portalElementOverflowCalculator(currentTop, currentHeight) : defaultPortalElementOverflowCalculator(currentTop, currentHeight);
      if (moreOverflow > 0) {
        const newOverflow = currentOverflow + moreOverflow;
        setCurrentOverflow(newOverflow);
        const overflowElementHeight = overflowElement.current.offsetHeight;
        const newHeight = overflowElementHeight + moreOverflow + 25;
        setOverflowSpacerHeight(newHeight);
      }
    }
  }, [currentOverflow]);
  const updatePos = (0, import_react11.useCallback)(() => {
    if (!boxRef.current) {
      return;
    }
    const children = Array.from(boxRef.current.childNodes);
    let firstNode = children[0];
    let lastNode = children[children.length - 1];
    if (props.goIntoTreeDepth) {
      const goTowardsParent = props.goIntoTreeDepth < 0;
      for (let i2 = 0; i2 < Math.abs(props.goIntoTreeDepth); i2++) {
        if (!goTowardsParent) {
          firstNode = firstNode.childNodes[0];
          lastNode = lastNode.childNodes[lastNode.childNodes.length - 1];
        } else {
          firstNode = firstNode.parentElement;
          lastNode = lastNode.parentElement;
        }
      }
    }
    const firstNodeBoundingRect = firstNode.getBoundingClientRect();
    const lastNodeBoundingRect = lastNode.getBoundingClientRect();
    const lowermostNodeClientRect = firstNodeBoundingRect.bottom > lastNodeBoundingRect.bottom ? firstNodeBoundingRect : lastNodeBoundingRect;
    const leftMostPosition = lowermostNodeClientRect.left;
    const rightMostPosition = lowermostNodeClientRect.right;
    let left = null;
    let right = null;
    const widthToCompareAgainst = document.body.parentElement.getBoundingClientRect().width;
    if (leftMostPosition > widthToCompareAgainst / 2) {
      right = widthToCompareAgainst - rightMostPosition;
    } else {
      left = leftMostPosition;
    }
    const top = lowermostNodeClientRect.top + lowermostNodeClientRect.height;
    setPos([top, left, right]);
    if (dropdownRef.current) {
      const height = dropdownRef.current.getBoundingClientRect().height;
      recalculateOverflow(top, height);
    }
  }, [recalculateOverflow]);
  const callCloseable = (0, import_react11.useCallback)((e2) => {
    if (props.closeable) {
      let wrapperRef = boxRef.current;
      if (props.goIntoTreeDepth) {
        const goTowardsParent = props.goIntoTreeDepth < 0;
        if (goTowardsParent) {
          wrapperRef = wrapperRef.parentElement;
        }
      }
      if (!isInDropdownOrWrapper(e2.target, dropdownRef.current, wrapperRef)) {
        props.onClose();
      }
    }
  }, []);
  const updatePosDelayed = (0, import_react11.useCallback)(() => {
    setTimeout(updatePos, 50);
  }, []);
  const posMassTrigger = (0, import_react11.useCallback)(() => {
    const posInternal = setInterval(updatePos, 10);
    setTimeout(() => {
      clearInterval(posInternal);
    }, 600);
  }, []);
  (0, import_react11.useEffect)(() => {
    if (props.isOpen) {
      updatePos();
      congruentTimer.current = setInterval(congruentTimerExec, 1e3);
      window.addEventListener("SLATE_DRAWER_OPEN", posMassTrigger);
      window.addEventListener("keyup", updatePos);
      window.addEventListener("resize", updatePos);
      window.addEventListener("mouseup", updatePosDelayed);
      window.addEventListener("touchend", updatePosDelayed);
      window.addEventListener("scroll", updatePos, true);
      window.addEventListener("mousedown", callCloseable);
      window.addEventListener("touchstart", callCloseable);
      return () => {
        window.removeEventListener("SLATE_DRAWER_OPEN", posMassTrigger);
        window.removeEventListener("keyup", updatePos);
        window.removeEventListener("resize", updatePos);
        window.removeEventListener("mouseup", updatePosDelayed);
        window.removeEventListener("touchend", updatePosDelayed);
        window.removeEventListener("scroll", updatePos, true);
        window.removeEventListener("mousedown", callCloseable);
        window.removeEventListener("touchstart", callCloseable);
        clearInterval(congruentTimer.current);
      };
    } else {
      setCurrentOverflow(0);
      setOverflowSpacerHeight(0);
    }
  }, [props.isOpen, updatePos, updatePosDelayed, posMassTrigger, callCloseable, congruentTimerExec]);
  let portal = null;
  let overflowPortal = null;
  if (props.isOpen) {
    const style = pos ? { position: "fixed", top: pos[0], left: pos[1], right: pos[2], zIndex: typeof props.zIndex !== "undefined" ? props.zIndex : 500 } : { position: "fixed", top: 0, left: 0, visibility: "hidden", zIndex: typeof props.zIndex !== "undefined" ? props.zIndex : 500 };
    const DropdownComponent = props.DropdownComponent || DefaultDropdownComponent;
    let elementInsidePortal = /* @__PURE__ */ import_react11.default.createElement(
      DropdownComponent,
      {
        containedWithinBox: props.containWithinBox,
        props: {
          ["data-unblur"]: true,
          style: props.containWithinBox ? null : style
        },
        sizable: !!props.dropdownSizable,
        ref: props.containWithinBox ? null : dropdownRef
      },
      props.dropdown
    );
    if (props.containWithinBox) {
      const DropdownComponentBox = props.DropdownComponentBox || DefaultDropdownComponentBox;
      elementInsidePortal = /* @__PURE__ */ import_react11.default.createElement(
        DropdownComponentBox,
        {
          props: {
            ["data-unblur"]: true,
            style
          },
          sizable: props.dropdownSizable,
          ref: dropdownRef
        },
        elementInsidePortal
      );
    }
    portal = import_react_dom4.default.createPortal(
      elementInsidePortal,
      props.portalElement || document.body
    );
    overflowPortal = import_react_dom4.default.createPortal(props.portalElementOverflowSpacerGenerator ? props.portalElementOverflowSpacerGenerator(overflowSpacerHeight, overflowElement) : defaultPortalElementOverflowSpacerGenerator(overflowSpacerHeight, overflowElement), props.portalElement || document.body);
  }
  const Wrapper = props.DropdownComponentWrapper || DefaultDropdownComponentWrapper;
  return /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, /* @__PURE__ */ import_react11.default.createElement(
    Wrapper,
    {
      tag: props.dropdownComponentWrapperTag,
      props: __spreadProps(__spreadValues({}, props.dropdownComponentWrapperProps), {
        style: __spreadValues({
          display: props.dropdownComponentWrapperHidden ? "none" : "contents"
        }, ((_a = props.dropdownComponentWrapperProps) == null ? void 0 : _a.style) || {})
      }),
      ref: boxRef
    },
    props.children
  ), portal, overflowPortal);
}

// ../editor/slate/element-wrappers.tsx
function DefaultElementWrapperButtonComponent(props) {
  return /* @__PURE__ */ import_react12.default.createElement(
    "button",
    {
      className: "slateEditorElementWrapperButton " + (props.selected ? " selected" : ""),
      disabled: props.disabled,
      onClick: props.onClick
    },
    props.label
  );
}
function DefaultFieldWrapperForMoreOptions(props) {
  return /* @__PURE__ */ import_react12.default.createElement("div", { className: "slateEditorFieldWrapperForMoreOptions" }, /* @__PURE__ */ import_react12.default.createElement("div", { className: "slateEditorFieldWrapperForMoreOptionsLabel" }, props.label), /* @__PURE__ */ import_react12.default.createElement("div", { className: "slateEditorFieldWrapperForMoreOptionsChildren" }, props.children));
}
function getVideoURL(v) {
  if (v.origin === "youtube") {
    return "https://youtube.com/watch?v=" + v.src;
  } else if (v.origin === "vimeo") {
    return "https://vimeo.com/" + v.src;
  } else {
    return "";
  }
}
function HTMLWrapper(props) {
  const [htmlOptions, setHTMLOptions] = (0, import_react12.useState)([]);
  const updateHTMLB = (0, import_react12.useCallback)((newV) => {
    const label = htmlOptions.find((o) => o.value === newV);
    props.helpers.updateTemplateHTML(typeof label.label === "string" ? label.label : label.label(), newV);
  }, [htmlOptions]);
  const updateHTML = (0, import_react12.useCallback)((e2) => {
    updateHTMLB(e2.target.value);
  }, [updateHTMLB]);
  (0, import_react12.useEffect)(() => {
    if (!props.isSelected) {
      return;
    }
    const context = props.helpers.getContextFor(props.element);
    const rootContext = props.helpers.getRootContext();
    const htmlPropertiesToUse = [];
    context && Object.keys(context.properties).forEach((key) => {
      const property = context.properties[key];
      if (property.type !== "html") {
        return;
      }
      htmlPropertiesToUse.push({
        value: key,
        label: property.label || key,
        primary: context !== rootContext
      });
    });
    if (rootContext && rootContext !== context) {
      Object.keys(rootContext.properties).forEach((key) => {
        const property = rootContext.properties[key];
        if (property.nonRootInheritable) {
          return;
        }
        if (property.type !== "html") {
          return;
        }
        htmlPropertiesToUse.push({
          value: key,
          label: property.label || key,
          primary: false
        });
      });
    }
    if (props.element.html && !htmlPropertiesToUse.some((p) => p.value === props.element.html)) {
      htmlPropertiesToUse.push({
        value: props.element.html,
        label: props.element.children[0].text,
        primary: false
      });
    }
    setHTMLOptions(htmlPropertiesToUse);
  }, [props.element, props.isSelected]);
  const SelectField = props.ElementWrapperSelectField || DefaultWrapperDrawerSelectField;
  return /* @__PURE__ */ import_react12.default.createElement(
    EditorDropdown,
    {
      DropdownComponent: props.DropdownComponent,
      DropdownComponentBox: props.DropdownComponentBox,
      DropdownComponentWrapper: props.DropdownComponentWrapper,
      dropdownComponentWrapperTag: "span",
      isOpen: props.isSelected,
      dropdown: /* @__PURE__ */ import_react12.default.createElement(
        SelectField,
        {
          id: "template-html",
          label: props.baseI18n.addTemplateHTML.label,
          onChangeByEvent: updateHTML,
          onChangeByValue: updateHTMLB,
          options: htmlOptions.map((v) => ({
            label: typeof v.label === "function" ? v.label() : v.label,
            value: v.value,
            primary: v.primary
          })),
          resetBlur: null,
          unblur: null,
          value: props.element.html
        }
      )
    },
    props.children
  );
}
function TextWrapper(props) {
  const [textOptions, setTextOptions] = (0, import_react12.useState)([]);
  const updateTextContentB = (0, import_react12.useCallback)((newV) => {
    const label = textOptions.find((o) => o.value === newV);
    props.helpers.updateTemplateText(typeof label.label === "string" ? label.label : label.label(), newV);
  }, [textOptions]);
  const updateTextContent = (0, import_react12.useCallback)((e2) => {
    updateTextContentB(e2.target.value);
  }, [updateTextContentB]);
  (0, import_react12.useEffect)(() => {
    if (!props.isSelected) {
      return;
    }
    const context = props.helpers.getContextFor(props.element);
    const rootContext = props.helpers.getRootContext();
    const textPropertiesToUse = [];
    context && Object.keys(context.properties).forEach((key) => {
      const property = context.properties[key];
      if (property.type !== "text") {
        return;
      }
      textPropertiesToUse.push({
        value: key,
        label: property.label || key,
        primary: context !== rootContext
      });
    });
    if (rootContext && rootContext !== context) {
      Object.keys(rootContext.properties).forEach((key) => {
        const property = rootContext.properties[key];
        if (property.nonRootInheritable) {
          return;
        }
        if (property.type !== "text") {
          return;
        }
        textPropertiesToUse.push({
          value: key,
          label: property.label || key,
          primary: false
        });
      });
    }
    if (props.element.textContent && !textPropertiesToUse.some((p) => p.value === props.element.textContent)) {
      textPropertiesToUse.push({
        value: props.element.textContent,
        label: props.element.children[0].text,
        primary: false
      });
    }
    setTextOptions(textPropertiesToUse);
  }, [props.element, props.isSelected]);
  const SelectField = props.ElementWrapperSelectField || DefaultWrapperDrawerSelectField;
  return /* @__PURE__ */ import_react12.default.createElement(
    EditorDropdown,
    {
      DropdownComponent: props.DropdownComponent,
      DropdownComponentBox: props.DropdownComponentBox,
      DropdownComponentWrapper: props.DropdownComponentWrapper,
      dropdownComponentWrapperTag: "span",
      isOpen: props.isSelected,
      dropdown: /* @__PURE__ */ import_react12.default.createElement(
        SelectField,
        {
          id: "template-text",
          label: props.baseI18n.addTemplateText.label,
          onChangeByEvent: updateTextContent,
          onChangeByValue: updateTextContentB,
          options: textOptions.map((v) => ({
            label: typeof v.label === "function" ? v.label() : v.label,
            value: v.value,
            primary: v.primary
          })),
          resetBlur: null,
          unblur: null,
          value: props.element.html
        }
      )
    },
    props.children
  );
}
function TdAndTh(props) {
  const path3 = props.helpers.ReactEditor.findPath(props.helpers.editor, props.element);
  const parentPath = [...path3];
  parentPath.pop();
  parentPath.pop();
  const parentTheadOrTbodyOrTfoot = props.helpers.Node.get(props.helpers.editor, parentPath);
  parentPath.pop();
  const tableElement = props.helpers.Node.get(props.helpers.editor, parentPath);
  const [tableType, setTableType] = (0, import_react12.useState)(tableElement.tableType || "");
  (0, import_react12.useEffect)(() => {
    setTableType(tableElement.tableType || "");
  }, [tableElement.tableType]);
  const updateTableTypeB = (0, import_react12.useCallback)((newValue) => {
    const path4 = props.helpers.ReactEditor.findPath(props.helpers.editor, props.element);
    const tablePath = [...path4];
    tablePath.pop();
    tablePath.pop();
    tablePath.pop();
    props.helpers.set({
      tableType: newValue || null
    }, tablePath);
    setTableType(newValue || "");
  }, []);
  const updateTableType = (0, import_react12.useCallback)((e2) => {
    updateTableTypeB(e2.target.value);
  }, [updateTableTypeB]);
  const SelectField = props.ElementWrapperSelectField || DefaultWrapperDrawerSelectField;
  const Button = props.ElementWrapperButton || DefaultElementWrapperButtonComponent;
  return /* @__PURE__ */ import_react12.default.createElement(import_react12.default.Fragment, null, props.children, /* @__PURE__ */ import_react12.default.createElement(
    EditorDropdown,
    {
      DropdownComponent: props.DropdownComponent,
      DropdownComponentBox: props.DropdownComponentBox,
      DropdownComponentWrapper: props.DropdownComponentWrapper,
      dropdownComponentWrapperTag: "td",
      dropdownComponentWrapperHidden: true,
      dropdownComponentWrapperProps: { contentEditable: false },
      dropdownSizable: true,
      dropdown: /* @__PURE__ */ import_react12.default.createElement(import_react12.default.Fragment, null, props.featureSupport.availableTables.length ? /* @__PURE__ */ import_react12.default.createElement(
        SelectField,
        {
          value: tableType,
          onChangeByEvent: updateTableType,
          displayEmpty: true,
          label: props.baseI18n.type,
          id: "table-type",
          onChangeByValue: updateTableTypeB,
          options: [{
            label: " - ",
            value: ""
          }].concat(props.featureSupport.availableTables),
          resetBlur: null,
          unblur: null
        }
      ) : null, /* @__PURE__ */ import_react12.default.createElement(
        Button,
        {
          id: "table-add-td",
          label: props.baseI18n.formatAddTdLabel,
          onClick: props.helpers.insertTableColumn,
          disabled: false
        }
      ), /* @__PURE__ */ import_react12.default.createElement(
        Button,
        {
          id: "table-add-tr",
          label: props.baseI18n.formatAddTrLabel,
          onClick: props.helpers.insertTableRow,
          disabled: false
        }
      ), /* @__PURE__ */ import_react12.default.createElement(
        Button,
        {
          id: "table-del-td",
          label: props.baseI18n.formatDelTdLabel,
          onClick: props.helpers.deleteTableColumn,
          disabled: false
        }
      ), /* @__PURE__ */ import_react12.default.createElement(
        Button,
        {
          id: "table-del-tr",
          label: props.baseI18n.formatDelTrLabel,
          onClick: props.helpers.deleteTableRow,
          disabled: false
        }
      ), /* @__PURE__ */ import_react12.default.createElement(
        Button,
        {
          id: "table-toggle-th",
          label: props.baseI18n.formatAddThLabel,
          onClick: props.helpers.toggleTable.bind(null, "thead"),
          disabled: !props.helpers.canToggleTable("thead"),
          selected: props.element.type === "th"
        }
      ), /* @__PURE__ */ import_react12.default.createElement(
        Button,
        {
          id: "table-toggle-tfoot",
          label: props.baseI18n.formatAddTfootLabel,
          onClick: props.helpers.toggleTable.bind(null, "tfoot"),
          disabled: !props.helpers.canToggleTable("tfoot"),
          selected: parentTheadOrTbodyOrTfoot.type === "tfoot"
        }
      )),
      isOpen: props.isSelected,
      goIntoTreeDepth: -4
    },
    /* @__PURE__ */ import_react12.default.createElement("p", null)
  ));
}
var defaultElementWrappers = {
  components: {
    link: (props) => {
      const [valid, setValid] = (0, import_react12.useState)(true);
      const [linkOptions, setLinkOptions] = (0, import_react12.useState)([]);
      const [elementHref, setElementHref] = (0, import_react12.useState)(props.element.href || "");
      const updateElementHrefB = (0, import_react12.useCallback)((newV) => {
        const valid2 = props.helpers.updateLink(newV, props.element.thref || null);
        setElementHref(newV);
        setValid(valid2);
      }, [props.element]);
      const updateElementTHrefB = (0, import_react12.useCallback)((newV) => {
        const valid2 = props.helpers.updateLink(props.element.href || null, newV);
        setValid(valid2);
      }, [props.element]);
      const updateElementHref = (0, import_react12.useCallback)((e2) => {
        updateElementHrefB(e2.target.value);
      }, [updateElementHrefB]);
      const updateElementTHref = (0, import_react12.useCallback)((e2) => {
        updateElementTHrefB(e2.target.value);
      }, []);
      (0, import_react12.useEffect)(() => {
        if (!props.isSelected) {
          return;
        }
        const context = props.helpers.getContextFor(props.element);
        const rootContext = props.helpers.getRootContext();
        const linkPropertiesToUse = [];
        context && Object.keys(context.properties).forEach((key) => {
          const property = context.properties[key];
          if (property.type !== "link") {
            return;
          }
          linkPropertiesToUse.push({
            value: key,
            label: property.label || key,
            primary: context !== rootContext
          });
        });
        if (rootContext && rootContext !== context) {
          Object.keys(rootContext.properties).forEach((key) => {
            const property = rootContext.properties[key];
            if (property.nonRootInheritable) {
              return;
            }
            if (property.type !== "link") {
              return;
            }
            linkPropertiesToUse.push({
              value: key,
              label: property.label || key,
              primary: false
            });
          });
        }
        if (props.element.thref && !linkPropertiesToUse.some((p) => p.value === props.element.thref)) {
          linkPropertiesToUse.push({
            value: props.element.thref,
            label: props.element.thref,
            primary: false
          });
        }
        setElementHref(props.element.href || "");
        setLinkOptions(linkPropertiesToUse);
      }, [props.element, props.isSelected]);
      const SelectField = props.ElementWrapperSelectField || DefaultWrapperDrawerSelectField;
      const TextField = props.ElementWrapperTextField || DefaultWrapperDrawerTextField;
      const FieldWrapperForMoreOptions = props.FieldWrapperForMoreOptions || DefaultFieldWrapperForMoreOptions;
      return /* @__PURE__ */ import_react12.default.createElement(
        EditorDropdown,
        {
          DropdownComponent: props.DropdownComponent,
          DropdownComponentBox: props.DropdownComponentBox,
          DropdownComponentWrapper: props.DropdownComponentWrapper,
          dropdownComponentWrapperTag: "span",
          isOpen: props.isSelected,
          dropdown: /* @__PURE__ */ import_react12.default.createElement(import_react12.default.Fragment, null, /* @__PURE__ */ import_react12.default.createElement(
            TextField,
            {
              value: elementHref,
              onChangeByEvent: updateElementHref,
              onChangeByValue: updateElementHrefB,
              label: props.baseI18n.setLink.label,
              disabled: !!props.element.thref,
              placeholder: props.featureSupport.supportsExternalLinks ? props.baseI18n.setLink.placeholder : props.baseI18n.setLink.placeholderLocalOnly,
              id: "link-href"
            }
          ), linkOptions.length ? /* @__PURE__ */ import_react12.default.createElement(FieldWrapperForMoreOptions, { label: props.baseI18n.setLink.templated }, /* @__PURE__ */ import_react12.default.createElement(
            SelectField,
            {
              id: "link-thref",
              value: props.element.thref || "",
              label: props.baseI18n.setLink.templatedLabel,
              placeholder: props.baseI18n.setLink.templatedPlaceholder,
              onChangeByEvent: updateElementTHref,
              onChangeByValue: updateElementTHrefB,
              displayEmpty: true,
              options: [{
                label: props.baseI18n.setLink.templatedUnspecified,
                value: ""
              }].concat(linkOptions.map((v) => ({
                label: typeof v.label === "function" ? v.label() : v.label,
                value: v.value,
                primary: v.primary
              }))),
              resetBlur: null,
              unblur: null
            }
          )) : null)
        },
        props.children
      );
    },
    video: (props) => {
      const [value, setValue] = (0, import_react12.useState)(getVideoURL(props.element));
      const [valid, setValid] = (0, import_react12.useState)(true);
      const updateVideoURLB = (0, import_react12.useCallback)((newV) => {
        setValue(newV);
        setValid(props.helpers.updateVideo(newV));
      }, []);
      const updateVideoURL = (0, import_react12.useCallback)((e2) => {
        updateVideoURLB(e2.target.value);
      }, [updateVideoURLB]);
      (0, import_react12.useEffect)(() => {
        setValue(getVideoURL(props.element));
      }, [props.element]);
      const TextField = props.ElementWrapperTextField || DefaultWrapperDrawerTextField;
      return /* @__PURE__ */ import_react12.default.createElement(
        EditorDropdown,
        {
          DropdownComponent: props.DropdownComponent,
          DropdownComponentBox: props.DropdownComponentBox,
          DropdownComponentWrapper: props.DropdownComponentWrapper,
          dropdown: /* @__PURE__ */ import_react12.default.createElement(
            TextField,
            {
              value,
              onChangeByEvent: updateVideoURL,
              onChangeByValue: updateVideoURLB,
              label: props.baseI18n.loadVideo.label,
              placeholder: props.baseI18n.loadVideo.placeholder,
              id: "video-url"
            }
          ),
          dropdownComponentWrapperTag: "div",
          goIntoTreeDepth: 1,
          isOpen: props.isSelected
        },
        props.children
      );
    },
    image: (props) => {
      const [alt, setAlt] = (0, import_react12.useState)(props.element.alt || "");
      (0, import_react12.useEffect)(() => {
        setAlt(props.element.alt || "");
      }, [props.element]);
      const updateAltB = (0, import_react12.useCallback)((newValue) => {
        const path3 = props.helpers.ReactEditor.findPath(props.helpers.editor, props.element);
        props.helpers.set({
          alt: newValue || null
        }, path3);
        setAlt(newValue);
      }, []);
      const updateAlt = (0, import_react12.useCallback)((e2) => {
        updateAltB(e2.target.value);
      }, [updateAltB]);
      const TextField = props.ElementWrapperTextField || DefaultWrapperDrawerTextField;
      return /* @__PURE__ */ import_react12.default.createElement(
        EditorDropdown,
        {
          DropdownComponent: props.DropdownComponent,
          DropdownComponentBox: props.DropdownComponentBox,
          DropdownComponentWrapper: props.DropdownComponentWrapper,
          dropdown: /* @__PURE__ */ import_react12.default.createElement(
            TextField,
            {
              value: alt,
              onChangeByEvent: updateAlt,
              onChangeByValue: updateAltB,
              label: props.baseI18n.alt,
              id: "image-alt"
            }
          ),
          dropdownComponentWrapperTag: "div",
          goIntoTreeDepth: props.element.standalone ? null : 1,
          isOpen: props.isSelected
        },
        props.children
      );
    },
    td: TdAndTh,
    th: TdAndTh,
    title: (props) => {
      const updateTitleTypeB = (0, import_react12.useCallback)((newV) => {
        const path3 = props.helpers.ReactEditor.findPath(props.helpers.editor, props.element);
        props.helpers.set({
          titleType: newV || null
        }, path3);
      }, []);
      const updateTitleType = (0, import_react12.useCallback)((e2) => {
        updateTitleTypeB(e2.target.value);
      }, [updateTitleTypeB]);
      const SelectField = props.ElementWrapperSelectField || DefaultWrapperDrawerSelectField;
      return /* @__PURE__ */ import_react12.default.createElement(
        EditorDropdown,
        {
          DropdownComponent: props.DropdownComponent,
          DropdownComponentBox: props.DropdownComponentBox,
          DropdownComponentWrapper: props.DropdownComponentWrapper,
          dropdownComponentWrapperTag: "div",
          isOpen: props.isSelected,
          dropdown: /* @__PURE__ */ import_react12.default.createElement(
            SelectField,
            {
              id: "title-type",
              label: props.baseI18n.type,
              onChangeByEvent: updateTitleType,
              onChangeByValue: updateTitleTypeB,
              options: ["h1", "h2", "h3", "h4", "h5", "h6"].map((Element4) => {
                return {
                  label: /* @__PURE__ */ import_react12.default.createElement(Element4, null, props.baseI18n.title),
                  value: Element4 ? Element4 : " - "
                };
              }),
              resetBlur: null,
              unblur: null,
              value: props.element.titleType || "h1"
            }
          )
        },
        props.children
      );
    },
    inline: (props) => {
      if (typeof props.element.textContent !== "string") {
        return props.children;
      }
      return /* @__PURE__ */ import_react12.default.createElement(TextWrapper, __spreadValues({}, props));
    },
    "void-block": (props) => {
      if (typeof props.element.html === "undefined") {
        return props.children;
      }
      return /* @__PURE__ */ import_react12.default.createElement(HTMLWrapper, __spreadValues({}, props));
    },
    container: (props) => {
      const updateContainerTypeB = (0, import_react12.useCallback)((newV) => {
        const path3 = props.helpers.ReactEditor.findPath(props.helpers.editor, props.element);
        props.helpers.set({
          containerType: newV || null
        }, path3);
      }, []);
      const updateContainerType = (0, import_react12.useCallback)((e2) => {
        updateContainerTypeB(e2.target.value);
      }, [updateContainerTypeB]);
      if (!props.featureSupport.availableContainers.length) {
        return props.children;
      }
      const SelectField = props.ElementWrapperSelectField || DefaultWrapperDrawerSelectField;
      return /* @__PURE__ */ import_react12.default.createElement(
        EditorDropdown,
        {
          DropdownComponent: props.DropdownComponent,
          DropdownComponentBox: props.DropdownComponentBox,
          DropdownComponentWrapper: props.DropdownComponentWrapper,
          dropdownComponentWrapperTag: "span",
          isOpen: props.isSelected,
          dropdown: /* @__PURE__ */ import_react12.default.createElement(
            SelectField,
            {
              id: "container-type",
              label: props.baseI18n.type,
              onChangeByEvent: updateContainerType,
              onChangeByValue: updateContainerTypeB,
              options: [{
                label: " - ",
                value: ""
              }].concat(props.featureSupport.availableContainers),
              resetBlur: null,
              unblur: null,
              value: props.element.containerType || "",
              displayEmpty: true
            }
          )
        },
        props.children
      );
    }
  }
};

export {
  SlateEditor,
  defaultWrapperI18nRichInfoEnglish,
  DefaultSlateWrapper,
  defaultElementWrappers
};
/*! Bundled license information:

is-plain-object/dist/is-plain-object.mjs:
  (*!
   * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)
*/