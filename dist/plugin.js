var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod2) => function __require() {
  return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from3, except, desc) => {
  if (from3 && typeof from3 === "object" || typeof from3 === "function") {
    for (let key of __getOwnPropNames(from3))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from3[key], enumerable: !(desc = __getOwnPropDesc(from3, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
  mod2
));

// external-global-plugin:react
var require_react = __commonJS({
  "external-global-plugin:react"(exports, module) {
    module.exports = window.React;
  }
});

// node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      var nativeCodeString = "[native code]";
      function classNames2() {
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames2.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
              classes.push(arg.toString());
              continue;
            }
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }
        return classes.join(" ");
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames2.default = classNames2;
        module.exports = classNames2;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames2;
        });
      } else {
        window.classNames = classNames2;
      }
    })();
  }
});

// external-global-plugin:react-router-dom
var require_react_router_dom = __commonJS({
  "external-global-plugin:react-router-dom"(exports, module) {
    module.exports = window.reactrouterdom;
  }
});

// external-global-plugin:react-query
var require_react_query = __commonJS({
  "external-global-plugin:react-query"(exports, module) {
    module.exports = window.reactquery;
  }
});

// external-global-plugin:@veramo-community/veramo-react
var require_veramo_react = __commonJS({
  "external-global-plugin:@veramo-community/veramo-react"(exports, module) {
    module.exports = window.veramoreact;
  }
});

// external-global-plugin:@ant-design/pro-components
var require_pro_components = __commonJS({
  "external-global-plugin:@ant-design/pro-components"(exports, module) {
    module.exports = window.antdPro;
  }
});

// external-global-plugin:@veramo-community/agent-explorer-plugin
var require_agent_explorer_plugin = __commonJS({
  "external-global-plugin:@veramo-community/agent-explorer-plugin"(exports, module) {
    module.exports = window.agentexplorerplugin;
  }
});

// external-global-plugin:antd
var require_antd = __commonJS({
  "external-global-plugin:antd"(exports, module) {
    module.exports = window.antd;
  }
});

// external-global-plugin:react/jsx-runtime
var require_jsx_runtime = __commonJS({
  "external-global-plugin:react/jsx-runtime"(exports, module) {
    module.exports = window.reactjsxruntime;
  }
});

// external-global-plugin:uuid
var require_uuid = __commonJS({
  "external-global-plugin:uuid"(exports, module) {
    module.exports = window.uuid;
  }
});

// node_modules/.pnpm/canonicalize@2.0.0/node_modules/canonicalize/lib/canonicalize.js
var require_canonicalize = __commonJS({
  "node_modules/.pnpm/canonicalize@2.0.0/node_modules/canonicalize/lib/canonicalize.js"(exports, module) {
    "use strict";
    module.exports = function serialize(object) {
      if (typeof object === "number" && isNaN(object)) {
        throw new Error("NaN is not allowed");
      }
      if (typeof object === "number" && !isFinite(object)) {
        throw new Error("Infinity is not allowed");
      }
      if (object === null || typeof object !== "object") {
        return JSON.stringify(object);
      }
      if (object.toJSON instanceof Function) {
        return serialize(object.toJSON());
      }
      if (Array.isArray(object)) {
        const values2 = object.reduce((t, cv, ci) => {
          const comma = ci === 0 ? "" : ",";
          const value = cv === void 0 || typeof cv === "symbol" ? null : cv;
          return `${t}${comma}${serialize(value)}`;
        }, "");
        return `[${values2}]`;
      }
      const values = Object.keys(object).sort().reduce((t, cv) => {
        if (object[cv] === void 0 || typeof object[cv] === "symbol") {
          return t;
        }
        const comma = t.length === 0 ? "" : ",";
        return `${t}${comma}${serialize(cv)}:${serialize(object[cv])}`;
      }, "");
      return `{${values}}`;
    };
  }
});

// node_modules/.pnpm/err-code@3.0.1/node_modules/err-code/index.js
var require_err_code = __commonJS({
  "node_modules/.pnpm/err-code@3.0.1/node_modules/err-code/index.js"(exports, module) {
    "use strict";
    function assign(obj, props) {
      for (const key in props) {
        Object.defineProperty(obj, key, {
          value: props[key],
          enumerable: true,
          configurable: true
        });
      }
      return obj;
    }
    function createError(err, code3, props) {
      if (!err || typeof err === "string") {
        throw new TypeError("Please pass an Error to err-code");
      }
      if (!props) {
        props = {};
      }
      if (typeof code3 === "object") {
        props = code3;
        code3 = "";
      }
      if (code3) {
        props.code = code3;
      }
      try {
        return assign(err, props);
      } catch (_2) {
        props.message = err.message;
        props.stack = err.stack;
        const ErrClass = function() {
        };
        ErrClass.prototype = Object.create(Object.getPrototypeOf(err));
        const output3 = assign(new ErrClass(), props);
        return output3;
      }
    }
    module.exports = createError;
  }
});

// node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js"(exports, module) {
    var s = 1e3;
    var m = s * 60;
    var h2 = m * 60;
    var d = h2 * 24;
    var w = d * 7;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h2;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h2) {
        return Math.round(ms / h2) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h2) {
        return plural(ms, msAbs, h2, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name2) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name2 + (isPlural ? "s" : "");
    }
  }
});

// node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js
var require_common = __commonJS({
  "node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js"(exports, module) {
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce2;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash3 = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash3 = (hash3 << 5) - hash3 + namespace.charCodeAt(i);
          hash3 |= 0;
        }
        return createDebug.colors[Math.abs(hash3) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug2(...args) {
          if (!debug2.enabled) {
            return;
          }
          const self = debug2;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index2 = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format2) => {
            if (match === "%%") {
              return "%";
            }
            index2++;
            const formatter = createDebug.formatters[format2];
            if (typeof formatter === "function") {
              const val = args[index2];
              match = formatter.call(self, val);
              args.splice(index2, 1);
              index2--;
            }
            return match;
          });
          createDebug.formatArgs.call(self, args);
          const logFn = self.log || createDebug.log;
          logFn.apply(self, args);
        }
        debug2.namespace = namespace;
        debug2.useColors = createDebug.useColors();
        debug2.color = createDebug.selectColor(namespace);
        debug2.extend = extend;
        debug2.destroy = createDebug.destroy;
        Object.defineProperty(debug2, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v2) => {
            enableOverride = v2;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug2);
        }
        return debug2;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split2 = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split2.length;
        for (i = 0; i < len; i++) {
          if (!split2[i]) {
            continue;
          }
          namespaces = split2[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name2) {
        if (name2[name2.length - 1] === "*") {
          return true;
        }
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name2)) {
            return false;
          }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name2)) {
            return true;
          }
        }
        return false;
      }
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      function coerce2(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module.exports = setup;
  }
});

// node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"(exports, module) {
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = (() => {
      let warned2 = false;
      return () => {
        if (!warned2) {
          warned2 = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index2 = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index2++;
        if (match === "%c") {
          lastC = index2;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports.storage.getItem("debug");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module.exports = require_common()(exports);
    var { formatters } = module.exports;
    formatters.j = function(v2) {
      try {
        return JSON.stringify(v2);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// node_modules/.pnpm/use-text-selection@1.1.5_react@18.2.0_typescript@5.2.2/node_modules/use-text-selection/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/use-text-selection@1.1.5_react@18.2.0_typescript@5.2.2/node_modules/use-text-selection/dist/index.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useTextSelection = void 0;
    var react_1 = require_react();
    function roundValues(_rect) {
      var rect = __assign({}, _rect);
      for (var _i = 0, _a = Object.keys(rect); _i < _a.length; _i++) {
        var key = _a[_i];
        rect[key] = Math.round(rect[key]);
      }
      return rect;
    }
    function shallowDiff(prev, next) {
      if (prev != null && next != null) {
        for (var _i = 0, _a = Object.keys(next); _i < _a.length; _i++) {
          var key = _a[_i];
          if (prev[key] != next[key]) {
            return true;
          }
        }
      } else if (prev != next) {
        return true;
      }
      return false;
    }
    var defaultState = {};
    function useTextSelection2(target) {
      var _a = react_1.useState(defaultState), _b = _a[0], clientRect = _b.clientRect, isCollapsed = _b.isCollapsed, textContent = _b.textContent, setState2 = _a[1];
      var reset = react_1.useCallback(function() {
        setState2(defaultState);
      }, []);
      var handler = react_1.useCallback(function() {
        var newRect;
        var selection = window.getSelection();
        var newState = {};
        if (selection == null || !selection.rangeCount) {
          setState2(newState);
          return;
        }
        var range = selection.getRangeAt(0);
        if (target != null && !target.contains(range.commonAncestorContainer)) {
          setState2(newState);
          return;
        }
        if (range == null) {
          setState2(newState);
          return;
        }
        var contents = range.cloneContents();
        if (contents.textContent != null) {
          newState.textContent = contents.textContent;
        }
        var rects = range.getClientRects();
        if (rects.length === 0 && range.commonAncestorContainer != null) {
          var el = range.commonAncestorContainer;
          newRect = roundValues(el.getBoundingClientRect().toJSON());
        } else {
          if (rects.length < 1)
            return;
          newRect = roundValues(rects[0].toJSON());
        }
        if (shallowDiff(clientRect, newRect)) {
          newState.clientRect = newRect;
        }
        newState.isCollapsed = range.collapsed;
        setState2(newState);
      }, [target]);
      react_1.useLayoutEffect(function() {
        document.addEventListener("selectionchange", handler);
        document.addEventListener("keydown", handler);
        document.addEventListener("keyup", handler);
        window.addEventListener("resize", handler);
        return function() {
          document.removeEventListener("selectionchange", handler);
          document.removeEventListener("keydown", handler);
          document.removeEventListener("keyup", handler);
          window.removeEventListener("resize", handler);
        };
      }, [target]);
      return {
        clientRect,
        isCollapsed,
        textContent
      };
    }
    exports.useTextSelection = useTextSelection2;
  }
});

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/Context.js
var import_react = __toESM(require_react());
var IconContext = /* @__PURE__ */ (0, import_react.createContext)({});
var Context_default = IconContext;

// node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}

// node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l2) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f2 = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l2) {
        if (Object(t) !== t)
          return;
        f2 = false;
      } else
        for (; !(f2 = (e = i.call(t)).done) && (a.push(e.value), a.length !== l2); f2 = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f2 && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}

// node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}

// node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

// node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

// node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
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

// node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

// node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js
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

// node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/AntdIcon.js
var React3 = __toESM(require_react());
var import_classnames = __toESM(require_classnames());

// node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/util.js
function bound01(n, max) {
  if (isOnePointZero(n)) {
    n = "100%";
  }
  var isPercent = isPercentage(n);
  n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
  if (isPercent) {
    n = parseInt(String(n * max), 10) / 100;
  }
  if (Math.abs(n - max) < 1e-6) {
    return 1;
  }
  if (max === 360) {
    n = (n < 0 ? n % max + max : n % max) / parseFloat(String(max));
  } else {
    n = n % max / parseFloat(String(max));
  }
  return n;
}
function isOnePointZero(n) {
  return typeof n === "string" && n.indexOf(".") !== -1 && parseFloat(n) === 1;
}
function isPercentage(n) {
  return typeof n === "string" && n.indexOf("%") !== -1;
}
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}
function convertToPercentage(n) {
  if (n <= 1) {
    return "".concat(Number(n) * 100, "%");
  }
  return n;
}
function pad2(c) {
  return c.length === 1 ? "0" + c : String(c);
}

// node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/conversion.js
function rgbToRgb(r, g, b) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b, 255) * 255
  };
}
function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * (6 * t);
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}
function hslToRgb(h2, s, l2) {
  var r;
  var g;
  var b;
  h2 = bound01(h2, 360);
  s = bound01(s, 100);
  l2 = bound01(l2, 100);
  if (s === 0) {
    g = l2;
    b = l2;
    r = l2;
  } else {
    var q = l2 < 0.5 ? l2 * (1 + s) : l2 + s - l2 * s;
    var p = 2 * l2 - q;
    r = hue2rgb(p, q, h2 + 1 / 3);
    g = hue2rgb(p, q, h2);
    b = hue2rgb(p, q, h2 - 1 / 3);
  }
  return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h2 = 0;
  var v2 = max;
  var d = max - min;
  var s = max === 0 ? 0 : d / max;
  if (max === min) {
    h2 = 0;
  } else {
    switch (max) {
      case r:
        h2 = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h2 = (b - r) / d + 2;
        break;
      case b:
        h2 = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s, v: v2 };
}
function hsvToRgb(h2, s, v2) {
  h2 = bound01(h2, 360) * 6;
  s = bound01(s, 100);
  v2 = bound01(v2, 100);
  var i = Math.floor(h2);
  var f2 = h2 - i;
  var p = v2 * (1 - s);
  var q = v2 * (1 - f2 * s);
  var t = v2 * (1 - (1 - f2) * s);
  var mod2 = i % 6;
  var r = [v2, q, p, p, t, v2][mod2];
  var g = [t, v2, v2, q, p, p][mod2];
  var b = [p, p, t, v2, v2, q][mod2];
  return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHex(r, g, b, allow3Char) {
  var hex = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b).toString(16))
  ];
  if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}
function convertHexToDecimal(h2) {
  return parseIntFromHex(h2) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}

// node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
var names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};

// node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/format-input.js
function inputToRGB(color2) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a = 1;
  var s = null;
  var v2 = null;
  var l2 = null;
  var ok2 = false;
  var format2 = false;
  if (typeof color2 === "string") {
    color2 = stringInputToObject(color2);
  }
  if (typeof color2 === "object") {
    if (isValidCSSUnit(color2.r) && isValidCSSUnit(color2.g) && isValidCSSUnit(color2.b)) {
      rgb = rgbToRgb(color2.r, color2.g, color2.b);
      ok2 = true;
      format2 = String(color2.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color2.h) && isValidCSSUnit(color2.s) && isValidCSSUnit(color2.v)) {
      s = convertToPercentage(color2.s);
      v2 = convertToPercentage(color2.v);
      rgb = hsvToRgb(color2.h, s, v2);
      ok2 = true;
      format2 = "hsv";
    } else if (isValidCSSUnit(color2.h) && isValidCSSUnit(color2.s) && isValidCSSUnit(color2.l)) {
      s = convertToPercentage(color2.s);
      l2 = convertToPercentage(color2.l);
      rgb = hslToRgb(color2.h, s, l2);
      ok2 = true;
      format2 = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color2, "a")) {
      a = color2.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok: ok2,
    format: color2.format || format2,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a
  };
}
var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(color2) {
  color2 = color2.trim().toLowerCase();
  if (color2.length === 0) {
    return false;
  }
  var named = false;
  if (names[color2]) {
    color2 = names[color2];
    named = true;
  } else if (color2 === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  }
  var match = matchers.rgb.exec(color2);
  if (match) {
    return { r: match[1], g: match[2], b: match[3] };
  }
  match = matchers.rgba.exec(color2);
  if (match) {
    return { r: match[1], g: match[2], b: match[3], a: match[4] };
  }
  match = matchers.hsl.exec(color2);
  if (match) {
    return { h: match[1], s: match[2], l: match[3] };
  }
  match = matchers.hsla.exec(color2);
  if (match) {
    return { h: match[1], s: match[2], l: match[3], a: match[4] };
  }
  match = matchers.hsv.exec(color2);
  if (match) {
    return { h: match[1], s: match[2], v: match[3] };
  }
  match = matchers.hsva.exec(color2);
  if (match) {
    return { h: match[1], s: match[2], v: match[3], a: match[4] };
  }
  match = matchers.hex8.exec(color2);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex6.exec(color2);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  match = matchers.hex4.exec(color2);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex3.exec(color2);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function isValidCSSUnit(color2) {
  return Boolean(matchers.CSS_UNIT.exec(String(color2)));
}

// node_modules/.pnpm/@ant-design+colors@7.0.0/node_modules/@ant-design/colors/es/generate.js
var hueStep = 2;
var saturationStep = 0.16;
var saturationStep2 = 0.05;
var brightnessStep1 = 0.05;
var brightnessStep2 = 0.15;
var lightColorCount = 5;
var darkColorCount = 4;
var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function toHsv(_ref) {
  var r = _ref.r, g = _ref.g, b = _ref.b;
  var hsv = rgbToHsv(r, g, b);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
}
function toHex(_ref2) {
  var r = _ref2.r, g = _ref2.g, b = _ref2.b;
  return "#".concat(rgbToHex(r, g, b, false));
}
function mix(rgb1, rgb2, amount) {
  var p = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b
  };
  return rgb;
}
function getHue(hsv, i, light) {
  var hue;
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}
function getSaturation(hsv, i, light) {
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  var saturation;
  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  }
  if (saturation > 1) {
    saturation = 1;
  }
  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Number(saturation.toFixed(2));
}
function getValue(hsv, i, light) {
  var value;
  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }
  if (value > 1) {
    value = 1;
  }
  return Number(value.toFixed(2));
}
function generate(color2) {
  var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color2);
  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(inputToRGB({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }));
    patterns.push(colorString);
  }
  patterns.push(toHex(pColor));
  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);
    var _colorString = toHex(inputToRGB({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue(_hsv, _i)
    }));
    patterns.push(_colorString);
  }
  if (opts.theme === "dark") {
    return darkColorMap.map(function(_ref3) {
      var index2 = _ref3.index, opacity = _ref3.opacity;
      var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || "#141414"), inputToRGB(patterns[index2]), opacity * 100));
      return darkColorString;
    });
  }
  return patterns;
}

// node_modules/.pnpm/@ant-design+colors@7.0.0/node_modules/@ant-design/colors/es/index.js
var presetPrimaryColors = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function(key) {
  presetPalettes[key] = generate(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5];
  presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
    theme: "dark",
    backgroundColor: "#141414"
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});
var red = presetPalettes.red;
var volcano = presetPalettes.volcano;
var gold = presetPalettes.gold;
var orange = presetPalettes.orange;
var yellow = presetPalettes.yellow;
var lime = presetPalettes.lime;
var green = presetPalettes.green;
var cyan = presetPalettes.cyan;
var blue = presetPalettes.blue;
var geekblue = presetPalettes.geekblue;
var purple = presetPalettes.purple;
var magenta = presetPalettes.magenta;
var grey = presetPalettes.grey;
var gray = presetPalettes.grey;

// node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/IconBase.js
var React2 = __toESM(require_react());

// node_modules/.pnpm/rc-util@5.38.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/canUseDom.js
function canUseDom() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}

// node_modules/.pnpm/rc-util@5.38.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/contains.js
function contains(root, n) {
  if (!root) {
    return false;
  }
  if (root.contains) {
    return root.contains(n);
  }
  var node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

// node_modules/.pnpm/rc-util@5.38.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/dynamicCSS.js
var APPEND_ORDER = "data-rc-order";
var APPEND_PRIORITY = "data-rc-priority";
var MARK_KEY = "rc-util-key";
var containerCache = /* @__PURE__ */ new Map();
function getMark() {
  var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, mark = _ref.mark;
  if (mark) {
    return mark.startsWith("data-") ? mark : "data-".concat(mark);
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  var head = document.querySelector("head");
  return head || document.body;
}
function getOrder(prepend) {
  if (prepend === "queue") {
    return "prependQueue";
  }
  return prepend ? "prepend" : "append";
}
function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter(function(node) {
    return node.tagName === "STYLE";
  });
}
function injectCSS(css) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!canUseDom()) {
    return null;
  }
  var csp = option.csp, prepend = option.prepend, _option$priority = option.priority, priority = _option$priority === void 0 ? 0 : _option$priority;
  var mergedOrder = getOrder(prepend);
  var isPrependQueue = mergedOrder === "prependQueue";
  var styleNode = document.createElement("style");
  styleNode.setAttribute(APPEND_ORDER, mergedOrder);
  if (isPrependQueue && priority) {
    styleNode.setAttribute(APPEND_PRIORITY, "".concat(priority));
  }
  if (csp !== null && csp !== void 0 && csp.nonce) {
    styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
  }
  styleNode.innerHTML = css;
  var container = getContainer(option);
  var firstChild = container.firstChild;
  if (prepend) {
    if (isPrependQueue) {
      var existStyle = findStyles(container).filter(function(node) {
        if (!["prepend", "prependQueue"].includes(node.getAttribute(APPEND_ORDER))) {
          return false;
        }
        var nodePriority = Number(node.getAttribute(APPEND_PRIORITY) || 0);
        return priority >= nodePriority;
      });
      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    }
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
function findExistNode(key) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var container = getContainer(option);
  return findStyles(container).find(function(node) {
    return node.getAttribute(getMark(option)) === key;
  });
}
function syncRealContainer(container, option) {
  var cachedRealContainer = containerCache.get(container);
  if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
    var placeholderStyle = injectCSS("", option);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    container.removeChild(placeholderStyle);
  }
}
function updateCSS(css, key) {
  var option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var container = getContainer(option);
  syncRealContainer(container, option);
  var existNode = findExistNode(key, option);
  if (existNode) {
    var _option$csp, _option$csp2;
    if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
      var _option$csp3;
      existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  var newNode = injectCSS(css, option);
  newNode.setAttribute(getMark(option), key);
  return newNode;
}

// node_modules/.pnpm/rc-util@5.38.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/shadow.js
function getRoot(ele) {
  var _ele$getRootNode;
  return ele === null || ele === void 0 ? void 0 : (_ele$getRootNode = ele.getRootNode) === null || _ele$getRootNode === void 0 ? void 0 : _ele$getRootNode.call(ele);
}
function inShadow(ele) {
  return getRoot(ele) instanceof ShadowRoot;
}
function getShadowRoot(ele) {
  return inShadow(ele) ? getRoot(ele) : null;
}

// node_modules/.pnpm/rc-util@5.38.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/warning.js
var warned = {};
var preWarningFns = [];
var preMessage = function preMessage2(fn) {
  preWarningFns.push(fn);
};
function warning(valid, message2) {
  if (!valid && console !== void 0) {
    var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
      return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "warning");
    }, message2);
    if (finalMessage) {
      console.error("Warning: ".concat(finalMessage));
    }
  }
}
function note(valid, message2) {
  if (!valid && console !== void 0) {
    var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
      return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "note");
    }, message2);
    if (finalMessage) {
      console.warn("Note: ".concat(finalMessage));
    }
  }
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message2) {
  if (!valid && !warned[message2]) {
    method(false, message2);
    warned[message2] = true;
  }
}
function warningOnce(valid, message2) {
  call(warning, valid, message2);
}
function noteOnce(valid, message2) {
  call(note, valid, message2);
}
warningOnce.preMessage = preMessage;
warningOnce.resetWarned = resetWarned;
warningOnce.noteOnce = noteOnce;
var warning_default = warningOnce;

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/utils.js
var import_react2 = __toESM(require_react());
function camelCase(input) {
  return input.replace(/-(.)/g, function(match, g) {
    return g.toUpperCase();
  });
}
function warning2(valid, message2) {
  warning_default(valid, "[@ant-design/icons] ".concat(message2));
}
function isIconDefinition(target) {
  return _typeof(target) === "object" && typeof target.name === "string" && typeof target.theme === "string" && (_typeof(target.icon) === "object" || typeof target.icon === "function");
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(attrs).reduce(function(acc, key) {
    var val = attrs[key];
    switch (key) {
      case "class":
        acc.className = val;
        delete acc.class;
        break;
      default:
        delete acc[key];
        acc[camelCase(key)] = val;
    }
    return acc;
  }, {});
}
function generate2(node, key, rootProps) {
  if (!rootProps) {
    return /* @__PURE__ */ import_react2.default.createElement(node.tag, _objectSpread2({
      key
    }, normalizeAttrs(node.attrs)), (node.children || []).map(function(child, index2) {
      return generate2(child, "".concat(key, "-").concat(node.tag, "-").concat(index2));
    }));
  }
  return /* @__PURE__ */ import_react2.default.createElement(node.tag, _objectSpread2(_objectSpread2({
    key
  }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function(child, index2) {
    return generate2(child, "".concat(key, "-").concat(node.tag, "-").concat(index2));
  }));
}
function getSecondaryColor(primaryColor) {
  return generate(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function useInsertStyles2(eleRef) {
  var _useContext = (0, import_react2.useContext)(Context_default), csp = _useContext.csp, prefixCls = _useContext.prefixCls;
  var mergedStyleStr = iconStyles;
  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
  }
  (0, import_react2.useEffect)(function() {
    var ele = eleRef.current;
    var shadowRoot = getShadowRoot(ele);
    updateCSS(mergedStyleStr, "@ant-design-icons", {
      prepend: true,
      csp,
      attachTo: shadowRoot
    });
  }, []);
};

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/IconBase.js
var _excluded = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
var twoToneColorPalette = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: false
};
function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor, secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
  return _objectSpread2({}, twoToneColorPalette);
}
var IconBase = function IconBase2(props) {
  var icon = props.icon, className = props.className, onClick = props.onClick, style = props.style, primaryColor = props.primaryColor, secondaryColor = props.secondaryColor, restProps = _objectWithoutProperties(props, _excluded);
  var svgRef = React2.useRef();
  var colors = twoToneColorPalette;
  if (primaryColor) {
    colors = {
      primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }
  useInsertStyles(svgRef);
  warning2(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));
  if (!isIconDefinition(icon)) {
    return null;
  }
  var target = icon;
  if (target && typeof target.icon === "function") {
    target = _objectSpread2(_objectSpread2({}, target), {}, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }
  return generate2(target.icon, "svg-".concat(target.name), _objectSpread2(_objectSpread2({
    className,
    onClick,
    style,
    "data-icon": target.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, restProps), {}, {
    ref: svgRef
  }));
};
IconBase.displayName = "IconReact";
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
var IconBase_default = IconBase;

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/twoTonePrimaryColor.js
function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
  return IconBase_default.setTwoToneColors({
    primaryColor,
    secondaryColor
  });
}
function getTwoToneColor() {
  var colors = IconBase_default.getTwoToneColors();
  if (!colors.calculated) {
    return colors.primaryColor;
  }
  return [colors.primaryColor, colors.secondaryColor];
}

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/AntdIcon.js
var _excluded2 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
setTwoToneColor(blue.primary);
var Icon = /* @__PURE__ */ React3.forwardRef(function(props, ref) {
  var _classNames;
  var className = props.className, icon = props.icon, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, twoToneColor = props.twoToneColor, restProps = _objectWithoutProperties(props, _excluded2);
  var _React$useContext = React3.useContext(Context_default), _React$useContext$pre = _React$useContext.prefixCls, prefixCls = _React$useContext$pre === void 0 ? "anticon" : _React$useContext$pre, rootClassName = _React$useContext.rootClassName;
  var classString = (0, import_classnames.default)(rootClassName, prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), _defineProperty(_classNames, "".concat(prefixCls, "-spin"), !!spin || icon.name === "loading"), _classNames), className);
  var iconTabIndex = tabIndex;
  if (iconTabIndex === void 0 && onClick) {
    iconTabIndex = -1;
  }
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : void 0;
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
  return /* @__PURE__ */ React3.createElement("span", _extends({
    role: "img",
    "aria-label": icon.name
  }, restProps, {
    ref,
    tabIndex: iconTabIndex,
    onClick,
    className: classString
  }), /* @__PURE__ */ React3.createElement(IconBase_default, {
    icon,
    primaryColor,
    secondaryColor,
    style: svgStyle
  }));
});
Icon.displayName = "AntdIcon";
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
var AntdIcon_default = Icon;

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/CheckCircleOutlined.js
var React4 = __toESM(require_react());

// node_modules/.pnpm/@ant-design+icons-svg@4.3.1/node_modules/@ant-design/icons-svg/es/asn/CheckCircleOutlined.js
var CheckCircleOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, "name": "check-circle", "theme": "outlined" };
var CheckCircleOutlined_default = CheckCircleOutlined;

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/CheckCircleOutlined.js
var CheckCircleOutlined2 = function CheckCircleOutlined3(props, ref) {
  return /* @__PURE__ */ React4.createElement(AntdIcon_default, _extends({}, props, {
    ref,
    icon: CheckCircleOutlined_default
  }));
};
if (true) {
  CheckCircleOutlined2.displayName = "CheckCircleOutlined";
}
var CheckCircleOutlined_default2 = /* @__PURE__ */ React4.forwardRef(CheckCircleOutlined2);

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/EditOutlined.js
var React5 = __toESM(require_react());

// node_modules/.pnpm/@ant-design+icons-svg@4.3.1/node_modules/@ant-design/icons-svg/es/asn/EditOutlined.js
var EditOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" } }] }, "name": "edit", "theme": "outlined" };
var EditOutlined_default = EditOutlined;

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/EditOutlined.js
var EditOutlined2 = function EditOutlined3(props, ref) {
  return /* @__PURE__ */ React5.createElement(AntdIcon_default, _extends({}, props, {
    ref,
    icon: EditOutlined_default
  }));
};
if (true) {
  EditOutlined2.displayName = "EditOutlined";
}
var EditOutlined_default2 = /* @__PURE__ */ React5.forwardRef(EditOutlined2);

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/FileSearchOutlined.js
var React6 = __toESM(require_react());

// node_modules/.pnpm/@ant-design+icons-svg@4.3.1/node_modules/@ant-design/icons-svg/es/asn/FileSearchOutlined.js
var FileSearchOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm144 452H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm445.7 51.5l-93.3-93.3C814.7 780.7 828 743.9 828 704c0-97.2-78.8-176-176-176s-176 78.8-176 176 78.8 176 176 176c35.8 0 69-10.7 96.8-29l94.7 94.7c1.6 1.6 3.6 2.3 5.6 2.3s4.1-.8 5.6-2.3l31-31a7.9 7.9 0 000-11.2zM652 816c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, "name": "file-search", "theme": "outlined" };
var FileSearchOutlined_default = FileSearchOutlined;

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/FileSearchOutlined.js
var FileSearchOutlined2 = function FileSearchOutlined3(props, ref) {
  return /* @__PURE__ */ React6.createElement(AntdIcon_default, _extends({}, props, {
    ref,
    icon: FileSearchOutlined_default
  }));
};
if (true) {
  FileSearchOutlined2.displayName = "FileSearchOutlined";
}
var FileSearchOutlined_default2 = /* @__PURE__ */ React6.forwardRef(FileSearchOutlined2);

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/FileTextOutlined.js
var React7 = __toESM(require_react());

// node_modules/.pnpm/@ant-design+icons-svg@4.3.1/node_modules/@ant-design/icons-svg/es/asn/FileTextOutlined.js
var FileTextOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z" } }] }, "name": "file-text", "theme": "outlined" };
var FileTextOutlined_default = FileTextOutlined;

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/FileTextOutlined.js
var FileTextOutlined2 = function FileTextOutlined3(props, ref) {
  return /* @__PURE__ */ React7.createElement(AntdIcon_default, _extends({}, props, {
    ref,
    icon: FileTextOutlined_default
  }));
};
if (true) {
  FileTextOutlined2.displayName = "FileTextOutlined";
}
var FileTextOutlined_default2 = /* @__PURE__ */ React7.forwardRef(FileTextOutlined2);

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/LinkOutlined.js
var React8 = __toESM(require_react());

// node_modules/.pnpm/@ant-design+icons-svg@4.3.1/node_modules/@ant-design/icons-svg/es/asn/LinkOutlined.js
var LinkOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z" } }] }, "name": "link", "theme": "outlined" };
var LinkOutlined_default = LinkOutlined;

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/LinkOutlined.js
var LinkOutlined2 = function LinkOutlined3(props, ref) {
  return /* @__PURE__ */ React8.createElement(AntdIcon_default, _extends({}, props, {
    ref,
    icon: LinkOutlined_default
  }));
};
if (true) {
  LinkOutlined2.displayName = "LinkOutlined";
}
var LinkOutlined_default2 = /* @__PURE__ */ React8.forwardRef(LinkOutlined2);

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/PicLeftOutlined.js
var React9 = __toESM(require_react());

// node_modules/.pnpm/@ant-design+icons-svg@4.3.1/node_modules/@ant-design/icons-svg/es/asn/PicLeftOutlined.js
var PicLeftOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M952 792H72c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h880c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-632H72c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h880c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM608 660c8.8 0 16-7.2 16-16V380c0-8.8-7.2-16-16-16H96c-8.8 0-16 7.2-16 16v264c0 8.8 7.2 16 16 16h512zM152 436h400v152H152V436zm552 210c0 4.4 3.6 8 8 8h224c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H712c-4.4 0-8 3.6-8 8v56zm8-204h224c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H712c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z" } }] }, "name": "pic-left", "theme": "outlined" };
var PicLeftOutlined_default = PicLeftOutlined;

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/PicLeftOutlined.js
var PicLeftOutlined2 = function PicLeftOutlined3(props, ref) {
  return /* @__PURE__ */ React9.createElement(AntdIcon_default, _extends({}, props, {
    ref,
    icon: PicLeftOutlined_default
  }));
};
if (true) {
  PicLeftOutlined2.displayName = "PicLeftOutlined";
}
var PicLeftOutlined_default2 = /* @__PURE__ */ React9.forwardRef(PicLeftOutlined2);

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/PlusOutlined.js
var React10 = __toESM(require_react());

// node_modules/.pnpm/@ant-design+icons-svg@4.3.1/node_modules/@ant-design/icons-svg/es/asn/PlusOutlined.js
var PlusOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { "tag": "path", "attrs": { "d": "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z" } }] }, "name": "plus", "theme": "outlined" };
var PlusOutlined_default = PlusOutlined;

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/PlusOutlined.js
var PlusOutlined2 = function PlusOutlined3(props, ref) {
  return /* @__PURE__ */ React10.createElement(AntdIcon_default, _extends({}, props, {
    ref,
    icon: PlusOutlined_default
  }));
};
if (true) {
  PlusOutlined2.displayName = "PlusOutlined";
}
var PlusOutlined_default2 = /* @__PURE__ */ React10.forwardRef(PlusOutlined2);

// src/Feed.tsx
var import_react16 = __toESM(require_react(), 1);
var import_react_router_dom = __toESM(require_react_router_dom(), 1);
var import_react_query = __toESM(require_react_query(), 1);
var import_veramo_react2 = __toESM(require_veramo_react(), 1);
var import_pro_components = __toESM(require_pro_components(), 1);
var import_agent_explorer_plugin2 = __toESM(require_agent_explorer_plugin(), 1);
var import_antd2 = __toESM(require_antd(), 1);

// src/PostForm.tsx
var import_antd = __toESM(require_antd(), 1);
var import_react14 = __toESM(require_react(), 1);
var import_veramo_react = __toESM(require_veramo_react(), 1);
var import_agent_explorer_plugin = __toESM(require_agent_explorer_plugin(), 1);

// node_modules/.pnpm/@monaco-editor+loader@1.4.0_monaco-editor@0.44.0/node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js
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
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread22(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
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
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
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
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _slicedToArray2(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2();
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit2(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e2 = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e2 = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e2;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray2(o, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/.pnpm/state-local@1.0.7/node_modules/state-local/lib/es/state-local.js
function _defineProperty3(obj, key, value) {
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
function ownKeys3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread23(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys3(Object(source), true).forEach(function(key) {
        _defineProperty3(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys3(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function(x) {
    return fns.reduceRight(function(y, f2) {
      return f2(y);
    }, x);
  };
}
function curry(fn) {
  return function curried() {
    var _this = this;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return args.length >= fn.length ? fn.apply(this, args) : function() {
      for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nextArgs[_key3] = arguments[_key3];
      }
      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}
function isObject(value) {
  return {}.toString.call(value).includes("Object");
}
function isEmpty(obj) {
  return !Object.keys(obj).length;
}
function isFunction(value) {
  return typeof value === "function";
}
function hasOwnProperty(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}
function validateChanges(initial, changes) {
  if (!isObject(changes))
    errorHandler("changeType");
  if (Object.keys(changes).some(function(field) {
    return !hasOwnProperty(initial, field);
  }))
    errorHandler("changeField");
  return changes;
}
function validateSelector(selector) {
  if (!isFunction(selector))
    errorHandler("selectorType");
}
function validateHandler(handler) {
  if (!(isFunction(handler) || isObject(handler)))
    errorHandler("handlerType");
  if (isObject(handler) && Object.values(handler).some(function(_handler) {
    return !isFunction(_handler);
  }))
    errorHandler("handlersType");
}
function validateInitial(initial) {
  if (!initial)
    errorHandler("initialIsRequired");
  if (!isObject(initial))
    errorHandler("initialType");
  if (isEmpty(initial))
    errorHandler("initialContent");
}
function throwError(errorMessages3, type) {
  throw new Error(errorMessages3[type] || errorMessages3["default"]);
}
var errorMessages = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  "default": "an unknown error accured in `state-local` package"
};
var errorHandler = curry(throwError)(errorMessages);
var validators = {
  changes: validateChanges,
  selector: validateSelector,
  handler: validateHandler,
  initial: validateInitial
};
function create(initial) {
  var handler = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  validators.initial(initial);
  validators.handler(handler);
  var state = {
    current: initial
  };
  var didUpdate = curry(didStateUpdate)(state, handler);
  var update = curry(updateState)(state);
  var validate2 = curry(validators.changes)(initial);
  var getChanges = curry(extractChanges)(state);
  function getState2() {
    var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(state2) {
      return state2;
    };
    validators.selector(selector);
    return selector(state.current);
  }
  function setState2(causedChanges) {
    compose(didUpdate, update, validate2, getChanges)(causedChanges);
  }
  return [getState2, setState2];
}
function extractChanges(state, causedChanges) {
  return isFunction(causedChanges) ? causedChanges(state.current) : causedChanges;
}
function updateState(state, changes) {
  state.current = _objectSpread23(_objectSpread23({}, state.current), changes);
  return changes;
}
function didStateUpdate(state, handler, changes) {
  isFunction(handler) ? handler(state.current) : Object.keys(changes).forEach(function(field) {
    var _handler$field;
    return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state.current[field]);
  });
  return changes;
}
var index = {
  create
};
var state_local_default = index;

// node_modules/.pnpm/@monaco-editor+loader@1.4.0_monaco-editor@0.44.0/node_modules/@monaco-editor/loader/lib/es/config/index.js
var config = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"
  }
};
var config_default = config;

// node_modules/.pnpm/@monaco-editor+loader@1.4.0_monaco-editor@0.44.0/node_modules/@monaco-editor/loader/lib/es/utils/curry.js
function curry2(fn) {
  return function curried() {
    var _this = this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return args.length >= fn.length ? fn.apply(this, args) : function() {
      for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nextArgs[_key2] = arguments[_key2];
      }
      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}
var curry_default = curry2;

// node_modules/.pnpm/@monaco-editor+loader@1.4.0_monaco-editor@0.44.0/node_modules/@monaco-editor/loader/lib/es/utils/isObject.js
function isObject2(value) {
  return {}.toString.call(value).includes("Object");
}
var isObject_default = isObject2;

// node_modules/.pnpm/@monaco-editor+loader@1.4.0_monaco-editor@0.44.0/node_modules/@monaco-editor/loader/lib/es/validators/index.js
function validateConfig(config3) {
  if (!config3)
    errorHandler2("configIsRequired");
  if (!isObject_default(config3))
    errorHandler2("configType");
  if (config3.urls) {
    informAboutDeprecation();
    return {
      paths: {
        vs: config3.urls.monacoBase
      }
    };
  }
  return config3;
}
function informAboutDeprecation() {
  console.warn(errorMessages2.deprecation);
}
function throwError2(errorMessages3, type) {
  throw new Error(errorMessages3[type] || errorMessages3["default"]);
}
var errorMessages2 = {
  configIsRequired: "the configuration object is required",
  configType: "the configuration object should be an object",
  "default": "an unknown error accured in `@monaco-editor/loader` package",
  deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
};
var errorHandler2 = curry_default(throwError2)(errorMessages2);
var validators2 = {
  config: validateConfig
};
var validators_default = validators2;

// node_modules/.pnpm/@monaco-editor+loader@1.4.0_monaco-editor@0.44.0/node_modules/@monaco-editor/loader/lib/es/utils/compose.js
var compose2 = function compose3() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function(x) {
    return fns.reduceRight(function(y, f2) {
      return f2(y);
    }, x);
  };
};
var compose_default = compose2;

// node_modules/.pnpm/@monaco-editor+loader@1.4.0_monaco-editor@0.44.0/node_modules/@monaco-editor/loader/lib/es/utils/deepMerge.js
function merge(target, source) {
  Object.keys(source).forEach(function(key) {
    if (source[key] instanceof Object) {
      if (target[key]) {
        Object.assign(source[key], merge(target[key], source[key]));
      }
    }
  });
  return _objectSpread22(_objectSpread22({}, target), source);
}
var deepMerge_default = merge;

// node_modules/.pnpm/@monaco-editor+loader@1.4.0_monaco-editor@0.44.0/node_modules/@monaco-editor/loader/lib/es/utils/makeCancelable.js
var CANCELATION_MESSAGE = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function makeCancelable(promise) {
  var hasCanceled_ = false;
  var wrappedPromise = new Promise(function(resolve, reject) {
    promise.then(function(val) {
      return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
    });
    promise["catch"](reject);
  });
  return wrappedPromise.cancel = function() {
    return hasCanceled_ = true;
  }, wrappedPromise;
}
var makeCancelable_default = makeCancelable;

// node_modules/.pnpm/@monaco-editor+loader@1.4.0_monaco-editor@0.44.0/node_modules/@monaco-editor/loader/lib/es/loader/index.js
var _state$create = state_local_default.create({
  config: config_default,
  isInitialized: false,
  resolve: null,
  reject: null,
  monaco: null
});
var _state$create2 = _slicedToArray2(_state$create, 2);
var getState = _state$create2[0];
var setState = _state$create2[1];
function config2(globalConfig) {
  var _validators$config = validators_default.config(globalConfig), monaco = _validators$config.monaco, config3 = _objectWithoutProperties2(_validators$config, ["monaco"]);
  setState(function(state) {
    return {
      config: deepMerge_default(state.config, config3),
      monaco
    };
  });
}
function init() {
  var state = getState(function(_ref) {
    var monaco = _ref.monaco, isInitialized = _ref.isInitialized, resolve = _ref.resolve;
    return {
      monaco,
      isInitialized,
      resolve
    };
  });
  if (!state.isInitialized) {
    setState({
      isInitialized: true
    });
    if (state.monaco) {
      state.resolve(state.monaco);
      return makeCancelable_default(wrapperPromise);
    }
    if (window.monaco && window.monaco.editor) {
      storeMonacoInstance(window.monaco);
      state.resolve(window.monaco);
      return makeCancelable_default(wrapperPromise);
    }
    compose_default(injectScripts, getMonacoLoaderScript)(configureLoader);
  }
  return makeCancelable_default(wrapperPromise);
}
function injectScripts(script) {
  return document.body.appendChild(script);
}
function createScript(src2) {
  var script = document.createElement("script");
  return src2 && (script.src = src2), script;
}
function getMonacoLoaderScript(configureLoader2) {
  var state = getState(function(_ref2) {
    var config3 = _ref2.config, reject = _ref2.reject;
    return {
      config: config3,
      reject
    };
  });
  var loaderScript = createScript("".concat(state.config.paths.vs, "/loader.js"));
  loaderScript.onload = function() {
    return configureLoader2();
  };
  loaderScript.onerror = state.reject;
  return loaderScript;
}
function configureLoader() {
  var state = getState(function(_ref3) {
    var config3 = _ref3.config, resolve = _ref3.resolve, reject = _ref3.reject;
    return {
      config: config3,
      resolve,
      reject
    };
  });
  var require2 = window.require;
  require2.config(state.config);
  require2(["vs/editor/editor.main"], function(monaco) {
    storeMonacoInstance(monaco);
    state.resolve(monaco);
  }, function(error) {
    state.reject(error);
  });
}
function storeMonacoInstance(monaco) {
  if (!getState().monaco) {
    setState({
      monaco
    });
  }
}
function __getMonacoInstance() {
  return getState(function(_ref4) {
    var monaco = _ref4.monaco;
    return monaco;
  });
}
var wrapperPromise = new Promise(function(resolve, reject) {
  return setState({
    resolve,
    reject
  });
});
var loader = {
  config: config2,
  init,
  __getMonacoInstance
};
var loader_default = loader;

// node_modules/.pnpm/@monaco-editor+react@4.6.0_monaco-editor@0.44.0_react-dom@18.2.0_react@18.2.0/node_modules/@monaco-editor/react/dist/index.mjs
var import_react3 = __toESM(require_react(), 1);
var import_react4 = __toESM(require_react(), 1);
var import_react5 = __toESM(require_react(), 1);
var import_react6 = __toESM(require_react(), 1);
var import_react7 = __toESM(require_react(), 1);
var import_react8 = __toESM(require_react(), 1);
var import_react9 = __toESM(require_react(), 1);
var import_react10 = __toESM(require_react(), 1);
var import_react11 = __toESM(require_react(), 1);
var import_react12 = __toESM(require_react(), 1);
var import_react13 = __toESM(require_react(), 1);
var le = { wrapper: { display: "flex", position: "relative", textAlign: "initial" }, fullWidth: { width: "100%" }, hide: { display: "none" } };
var v = le;
var ae = { container: { display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } };
var Y = ae;
function Me({ children: e }) {
  return import_react7.default.createElement("div", { style: Y.container }, e);
}
var Z = Me;
var $ = Z;
function Ee({ width: e, height: r, isEditorReady: n, loading: t, _ref: a, className: m, wrapperProps: E }) {
  return import_react6.default.createElement("section", { style: { ...v.wrapper, width: e, height: r }, ...E }, !n && import_react6.default.createElement($, null, t), import_react6.default.createElement("div", { ref: a, style: { ...v.fullWidth, ...!n && v.hide }, className: m }));
}
var ee = Ee;
var H = (0, import_react5.memo)(ee);
function Ce(e) {
  (0, import_react8.useEffect)(e, []);
}
var k = Ce;
function he(e, r, n = true) {
  let t = (0, import_react9.useRef)(true);
  (0, import_react9.useEffect)(t.current || !n ? () => {
    t.current = false;
  } : e, r);
}
var l = he;
function D() {
}
function h(e, r, n, t) {
  return De(e, t) || be(e, r, n, t);
}
function De(e, r) {
  return e.editor.getModel(te(e, r));
}
function be(e, r, n, t) {
  return e.editor.createModel(r, n, t ? te(e, t) : void 0);
}
function te(e, r) {
  return e.Uri.parse(r);
}
function Oe({ original: e, modified: r, language: n, originalLanguage: t, modifiedLanguage: a, originalModelPath: m, modifiedModelPath: E, keepCurrentOriginalModel: g = false, keepCurrentModifiedModel: N = false, theme: x = "light", loading: P = "Loading...", options: y = {}, height: V = "100%", width: z = "100%", className: F, wrapperProps: j = {}, beforeMount: A = D, onMount: q = D }) {
  let [M, O] = (0, import_react4.useState)(false), [T, s] = (0, import_react4.useState)(true), u = (0, import_react4.useRef)(null), c = (0, import_react4.useRef)(null), w = (0, import_react4.useRef)(null), d = (0, import_react4.useRef)(q), o = (0, import_react4.useRef)(A), b = (0, import_react4.useRef)(false);
  k(() => {
    let i = loader_default.init();
    return i.then((f2) => (c.current = f2) && s(false)).catch((f2) => f2?.type !== "cancelation" && console.error("Monaco initialization: error:", f2)), () => u.current ? I() : i.cancel();
  }), l(() => {
    if (u.current && c.current) {
      let i = u.current.getOriginalEditor(), f2 = h(c.current, e || "", t || n || "text", m || "");
      f2 !== i.getModel() && i.setModel(f2);
    }
  }, [m], M), l(() => {
    if (u.current && c.current) {
      let i = u.current.getModifiedEditor(), f2 = h(c.current, r || "", a || n || "text", E || "");
      f2 !== i.getModel() && i.setModel(f2);
    }
  }, [E], M), l(() => {
    let i = u.current.getModifiedEditor();
    i.getOption(c.current.editor.EditorOption.readOnly) ? i.setValue(r || "") : r !== i.getValue() && (i.executeEdits("", [{ range: i.getModel().getFullModelRange(), text: r || "", forceMoveMarkers: true }]), i.pushUndoStop());
  }, [r], M), l(() => {
    u.current?.getModel()?.original.setValue(e || "");
  }, [e], M), l(() => {
    let { original: i, modified: f2 } = u.current.getModel();
    c.current.editor.setModelLanguage(i, t || n || "text"), c.current.editor.setModelLanguage(f2, a || n || "text");
  }, [n, t, a], M), l(() => {
    c.current?.editor.setTheme(x);
  }, [x], M), l(() => {
    u.current?.updateOptions(y);
  }, [y], M);
  let L = (0, import_react4.useCallback)(() => {
    if (!c.current)
      return;
    o.current(c.current);
    let i = h(c.current, e || "", t || n || "text", m || ""), f2 = h(c.current, r || "", a || n || "text", E || "");
    u.current?.setModel({ original: i, modified: f2 });
  }, [n, r, a, e, t, m, E]), U = (0, import_react4.useCallback)(() => {
    !b.current && w.current && (u.current = c.current.editor.createDiffEditor(w.current, { automaticLayout: true, ...y }), L(), c.current?.editor.setTheme(x), O(true), b.current = true);
  }, [y, x, L]);
  (0, import_react4.useEffect)(() => {
    M && d.current(u.current, c.current);
  }, [M]), (0, import_react4.useEffect)(() => {
    !T && !M && U();
  }, [T, M, U]);
  function I() {
    let i = u.current?.getModel();
    g || i?.original?.dispose(), N || i?.modified?.dispose(), u.current?.dispose();
  }
  return import_react4.default.createElement(H, { width: z, height: V, isEditorReady: M, loading: P, _ref: w, className: F, wrapperProps: j });
}
var ie = Oe;
var we = (0, import_react3.memo)(ie);
function He(e) {
  let r = (0, import_react13.useRef)();
  return (0, import_react13.useEffect)(() => {
    r.current = e;
  }, [e]), r.current;
}
var se = He;
var _ = /* @__PURE__ */ new Map();
function Ve({ defaultValue: e, defaultLanguage: r, defaultPath: n, value: t, language: a, path: m, theme: E = "light", line: g, loading: N = "Loading...", options: x = {}, overrideServices: P = {}, saveViewState: y = true, keepCurrentModel: V = false, width: z = "100%", height: F = "100%", className: j, wrapperProps: A = {}, beforeMount: q = D, onMount: M = D, onChange: O, onValidate: T = D }) {
  let [s, u] = (0, import_react12.useState)(false), [c, w] = (0, import_react12.useState)(true), d = (0, import_react12.useRef)(null), o = (0, import_react12.useRef)(null), b = (0, import_react12.useRef)(null), L = (0, import_react12.useRef)(M), U = (0, import_react12.useRef)(q), I = (0, import_react12.useRef)(), i = (0, import_react12.useRef)(t), f2 = se(m), Q = (0, import_react12.useRef)(false), B = (0, import_react12.useRef)(false);
  k(() => {
    let p = loader_default.init();
    return p.then((R) => (d.current = R) && w(false)).catch((R) => R?.type !== "cancelation" && console.error("Monaco initialization: error:", R)), () => o.current ? pe() : p.cancel();
  }), l(() => {
    let p = h(d.current, e || t || "", r || a || "", m || n || "");
    p !== o.current?.getModel() && (y && _.set(f2, o.current?.saveViewState()), o.current?.setModel(p), y && o.current?.restoreViewState(_.get(m)));
  }, [m], s), l(() => {
    o.current?.updateOptions(x);
  }, [x], s), l(() => {
    !o.current || t === void 0 || (o.current.getOption(d.current.editor.EditorOption.readOnly) ? o.current.setValue(t) : t !== o.current.getValue() && (B.current = true, o.current.executeEdits("", [{ range: o.current.getModel().getFullModelRange(), text: t, forceMoveMarkers: true }]), o.current.pushUndoStop(), B.current = false));
  }, [t], s), l(() => {
    let p = o.current?.getModel();
    p && a && d.current?.editor.setModelLanguage(p, a);
  }, [a], s), l(() => {
    g !== void 0 && o.current?.revealLine(g);
  }, [g], s), l(() => {
    d.current?.editor.setTheme(E);
  }, [E], s);
  let X = (0, import_react12.useCallback)(() => {
    if (!(!b.current || !d.current) && !Q.current) {
      U.current(d.current);
      let p = m || n, R = h(d.current, t || e || "", r || a || "", p || "");
      o.current = d.current?.editor.create(b.current, { model: R, automaticLayout: true, ...x }, P), y && o.current.restoreViewState(_.get(p)), d.current.editor.setTheme(E), g !== void 0 && o.current.revealLine(g), u(true), Q.current = true;
    }
  }, [e, r, n, t, a, m, x, P, y, E, g]);
  (0, import_react12.useEffect)(() => {
    s && L.current(o.current, d.current);
  }, [s]), (0, import_react12.useEffect)(() => {
    !c && !s && X();
  }, [c, s, X]), i.current = t, (0, import_react12.useEffect)(() => {
    s && O && (I.current?.dispose(), I.current = o.current?.onDidChangeModelContent((p) => {
      B.current || O(o.current.getValue(), p);
    }));
  }, [s, O]), (0, import_react12.useEffect)(() => {
    if (s) {
      let p = d.current.editor.onDidChangeMarkers((R) => {
        let G = o.current.getModel()?.uri;
        if (G && R.find((J) => J.path === G.path)) {
          let J = d.current.editor.getModelMarkers({ resource: G });
          T?.(J);
        }
      });
      return () => {
        p?.dispose();
      };
    }
    return () => {
    };
  }, [s, T]);
  function pe() {
    I.current?.dispose(), V ? y && _.set(m, o.current.saveViewState()) : o.current.getModel()?.dispose(), o.current.dispose();
  }
  return import_react12.default.createElement(H, { width: z, height: F, isEditorReady: s, loading: N, _ref: b, className: j, wrapperProps: A });
}
var fe = Ve;
var de = (0, import_react11.memo)(fe);
var Ft = de;

// src/api.ts
var systemTitles = ["bs-home", "bs-sidebar"];

// src/PostForm.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var PostForm = ({ onOk, initialIssuer, initialTitle, initialText, initialIsPublic }) => {
  const token = import_antd.theme.useToken();
  const [title, setTitle] = (0, import_react14.useState)(initialTitle || "");
  const [isPublic, setIsPublic] = (0, import_react14.useState)(initialIsPublic || false);
  const [post, setPost] = (0, import_react14.useState)(initialText || window.localStorage.getItem("bs-post") || "");
  const { agent } = (0, import_veramo_react.useVeramo)();
  const [isSaving, setIsSaving] = (0, import_react14.useState)(false);
  (0, import_react14.useEffect)(() => {
    window.localStorage.setItem("bs-post", post);
  }, [post]);
  const handleCreatePost = async (did, issuerAgent) => {
    setIsSaving(true);
    try {
      const identifier = await issuerAgent?.didManagerGet({ did });
      const usableProofs = await issuerAgent.listUsableProofFormats(identifier);
      const proofFormat = usableProofs.includes("jwt") ? "jwt" : usableProofs[0];
      const credential = await issuerAgent.createVerifiableCredential({
        save: true,
        proofFormat,
        credential: {
          "@context": ["https://www.w3.org/2018/credentials/v1"],
          type: ["VerifiableCredential", "BrainSharePost"],
          issuer: { id: did },
          issuanceDate: (/* @__PURE__ */ new Date()).toISOString(),
          credentialSubject: {
            title,
            isPublic,
            post
          }
        }
      });
      if (credential) {
        const hash3 = await agent?.dataStoreSaveVerifiableCredential({ verifiableCredential: credential });
        if (hash3) {
          window.localStorage.removeItem("bs-post");
          onOk(did, hash3);
        }
      }
    } catch (e) {
      console.error(e);
    }
    setIsSaving(false);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_antd.Space, { direction: "vertical", style: { width: "100%" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_antd.Tabs,
      {
        items: [
          {
            key: "1",
            label: "Write",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_antd.Space, { direction: "vertical", style: { width: "100%" }, children: [
              systemTitles.includes(title) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Input, { value: title, type: "hidden" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_antd.Tag, { children: [
                  title === "bs-sidebar" && "Sidebar",
                  title === "bs-home" && "Home"
                ] })
              ] }),
              !systemTitles.includes(title) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Input, { value: title, onChange: (e) => setTitle(e.target.value), placeholder: "Title (optional)" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                Ft,
                {
                  theme: token.theme.id === 4 ? "vs-dark" : "light",
                  height: "50vh",
                  options: {
                    lineNumbers: "off",
                    wordWrap: "on",
                    fontSize: 14,
                    minimap: { enabled: false }
                  },
                  defaultLanguage: "markdown",
                  defaultValue: post,
                  value: post,
                  onChange: (e) => {
                    setPost(e || "");
                  }
                }
              )
            ] })
          },
          {
            key: "2",
            label: "Preview",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: title }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_agent_explorer_plugin.MarkDown, { content: post })
            ] })
          }
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_antd.Space, { direction: "horizontal", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_agent_explorer_plugin.ActionButton,
        {
          title: "Save to:",
          disabled: post === "" || isSaving,
          onAction: handleCreatePost
        }
      ),
      !systemTitles.includes(title) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Checkbox, { defaultChecked: isPublic, onChange: (e) => setIsPublic(e.target.checked), children: "Public" })
    ] })
  ] });
};

// src/Feed.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var Feed = () => {
  const { notification } = import_antd2.App.useApp();
  const [drawerOpen, setDrawerOpen] = (0, import_react16.useState)(false);
  const [pageSize, setPageSize] = import_react16.default.useState(10);
  const [page, setPage] = import_react16.default.useState(1);
  const navigate = (0, import_react_router_dom.useNavigate)();
  const { agent } = (0, import_veramo_react2.useVeramo)();
  const { data: credentialsCount } = (0, import_react_query.useQuery)(
    ["credentialsCount", { agentId: agent?.context.name }],
    () => agent?.dataStoreORMGetVerifiableCredentialsCount({
      where: [{ column: "type", value: ["VerifiableCredential,BrainSharePost"] }]
    })
  );
  const { data: credentials, isLoading, refetch } = (0, import_react_query.useQuery)(
    ["brainshare-posts", { agentId: agent?.context.name }],
    () => agent?.dataStoreORMGetVerifiableCredentials({
      where: [{ column: "type", value: ["VerifiableCredential,BrainSharePost"] }],
      order: [{ column: "issuanceDate", direction: "DESC" }]
    })
  );
  const handleNewPost = async (did, hash3) => {
    notification.success({
      message: "Post created"
    });
    setDrawerOpen(false);
    await refetch();
    navigate(`/brainshare/${did}/${hash3}`);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    import_pro_components.PageContainer,
    {
      extra: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_antd2.Button,
          {
            icon: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(PlusOutlined_default2, {}),
            type: "primary",
            title: "Compose new post",
            onClick: () => setDrawerOpen(true),
            children: "Compose"
          },
          "add"
        )
      ],
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_antd2.List,
          {
            itemLayout: "vertical",
            size: "large",
            pagination: {
              position: "both",
              pageSize,
              current: page,
              total: credentialsCount,
              showSizeChanger: true,
              onChange(page2, pageSize2) {
                setPage(page2);
                setPageSize(pageSize2);
              }
            },
            dataSource: credentials,
            renderItem: (item) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_agent_explorer_plugin2.VerifiableCredentialComponent, { credential: item }) })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_antd2.Drawer,
          {
            title: "Compose new post",
            placement: "right",
            onClose: () => setDrawerOpen(false),
            open: drawerOpen,
            width: 800,
            destroyOnClose: true,
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(PostForm, { onOk: handleNewPost })
          }
        )
      ]
    }
  );
};

// src/Post.tsx
var import_react17 = __toESM(require_react(), 1);
var import_react_router_dom2 = __toESM(require_react_router_dom(), 1);
var import_react_query2 = __toESM(require_react_query(), 1);
var import_veramo_react3 = __toESM(require_veramo_react(), 1);
var import_pro_components2 = __toESM(require_pro_components(), 1);
var import_antd6 = __toESM(require_antd(), 1);
var import_agent_explorer_plugin6 = __toESM(require_agent_explorer_plugin(), 1);

// src/ReferencesFeed.tsx
var import_agent_explorer_plugin3 = __toESM(require_agent_explorer_plugin(), 1);
var import_antd3 = __toESM(require_antd(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var ReferencesFeed = ({ credentials }) => {
  console.log(credentials);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_antd3.List,
    {
      itemLayout: "vertical",
      size: "large",
      dataSource: credentials,
      renderItem: (item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_agent_explorer_plugin3.VerifiableCredentialComponent, { credential: item }) })
    }
  );
};

// src/Post.tsx
var import_react18 = __toESM(require_react(), 1);

// src/didcommUtils.ts
var import_uuid = __toESM(require_uuid(), 1);
async function getPost(agent, localAgent, hash3, did) {
  if (did) {
    let identifier = void 0;
    try {
      identifier = await agent.didManagerGet({ did });
    } catch (e) {
    }
    if (!identifier) {
      const { didDocument } = await localAgent.resolveDid({ didUrl: did });
      if (didDocument?.service?.find((service) => service.type === "DIDCommMessaging")) {
        const temporarySender = await localAgent.didManagerCreate({ provider: "did:key" });
        if (temporarySender) {
          const requestCredMessage = {
            type: "https://veramo.io/didcomm/brainshare/1.0/request-credential",
            from: temporarySender.did,
            to: did,
            id: (0, import_uuid.v4)(),
            body: {
              hash: hash3
            },
            return_route: "all"
          };
          const packedMessage = await localAgent?.packDIDCommMessage({ message: requestCredMessage, packing: "authcrypt" });
          const { returnMessage } = await localAgent.sendDIDCommMessage({ packedMessage, messageId: requestCredMessage.id, recipientDidUrl: did });
          await localAgent.didManagerDelete({ did: temporarySender.did });
          if (returnMessage?.data) {
            return returnMessage?.data;
          }
        }
      }
    }
  }
  try {
    const localCred = await agent.dataStoreGetVerifiableCredential({ hash: hash3 });
    return { hash: hash3, verifiableCredential: localCred };
  } catch (e) {
    return Promise.reject("Credential not found");
  }
}
async function getPostByTitle(agent, localAgent, did, title) {
  let identifier = void 0;
  try {
    identifier = await agent.didManagerGet({ did });
  } catch (e) {
  }
  if (!identifier) {
    const { didDocument } = await localAgent.resolveDid({ didUrl: did });
    if (didDocument?.service?.find((service) => service.type === "DIDCommMessaging")) {
      const temporarySender = await localAgent.didManagerCreate({ provider: "did:key" });
      if (temporarySender) {
        const requestCredMessage = {
          type: "https://veramo.io/didcomm/brainshare/1.0/request-post",
          from: temporarySender.did,
          to: did,
          id: (0, import_uuid.v4)(),
          body: {
            title
          },
          return_route: "all"
        };
        const packedMessage = await localAgent?.packDIDCommMessage({ message: requestCredMessage, packing: "authcrypt" });
        const { returnMessage } = await localAgent.sendDIDCommMessage({ packedMessage, messageId: requestCredMessage.id, recipientDidUrl: did });
        await localAgent.didManagerDelete({ did: temporarySender.did });
        if (returnMessage?.data) {
          return returnMessage?.data;
        }
      }
    }
  }
  const credentials = await agent.dataStoreORMGetVerifiableCredentialsByClaims({
    where: [
      { column: "credentialType", value: ["VerifiableCredential,BrainSharePost"] },
      { column: "issuer", value: [did] },
      { column: "type", value: ["title"] },
      { column: "value", value: [title] }
    ],
    order: [{ column: "issuanceDate", direction: "DESC" }],
    take: 1
  });
  return credentials[0];
}

// src/Sidebar.tsx
var React13 = __toESM(require_react(), 1);
var import_agent_explorer_plugin5 = __toESM(require_agent_explorer_plugin(), 1);
var import_antd5 = __toESM(require_antd(), 1);

// src/BrainSharePost.tsx
var import_agent_explorer_plugin4 = __toESM(require_agent_explorer_plugin(), 1);
var import_antd4 = __toESM(require_antd(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var BrainSharePost = ({ credential, context }) => {
  const { token } = import_antd4.theme.useToken();
  const { title, post } = credential.verifiableCredential.credentialSubject;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { marginTop: token.margin }, children: [
    context?.hideTitle !== true && title && !systemTitles.includes(title) && !context?.textRange && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { children: title }),
    context?.hideTitle !== true && title && !systemTitles.includes(title) && context?.textRange && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_antd4.Typography.Text, { type: "secondary", children: title }),
    context?.hideTitle !== true && title && systemTitles.includes(title) && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_antd4.Tag, { children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_agent_explorer_plugin4.MarkDown, { content: post, credential, context })
  ] });
};

// src/Sidebar.tsx
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var Sidebar = ({ credential }) => {
  const { plugins } = (0, import_agent_explorer_plugin5.usePlugins)();
  const hoverComponents = React13.useMemo(() => {
    const components = [];
    plugins.forEach((plugin) => {
      if (plugin.config?.enabled && plugin.getIdentifierHoverComponent) {
        const Component = plugin.getIdentifierHoverComponent();
        if (Component) {
          components.push(Component);
        }
      }
    });
    return components;
  }, [plugins]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_antd5.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_antd5.Space, { direction: "vertical", style: { width: "100%" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(BrainSharePost, { credential, context: { hideTitle: true } }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_antd5.Divider, { type: "horizontal" }),
    hoverComponents.map((Component, index2) => React13.createElement(Component, { key: index2, did: (0, import_agent_explorer_plugin5.getIssuerDID)(credential.verifiableCredential) }))
  ] }) });
};

// src/Post.tsx
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var Post = () => {
  const { id, did } = (0, import_react_router_dom2.useParams)();
  const { agents, agent } = (0, import_veramo_react3.useVeramo)();
  const [refDrawerOpen, setRefDrawerOpen] = (0, import_react17.useState)(false);
  const [post, setPost] = (0, import_react17.useState)(null);
  const { token } = import_antd6.theme.useToken();
  const [sidebar, setSidebar] = (0, import_react17.useState)(null);
  const [loading, setLoading] = (0, import_react17.useState)(true);
  const localAgent = import_react17.default.useMemo(() => {
    return agents.find((agent2) => agent2.context.id === "web3Agent");
  }, [agents]);
  if (!agent)
    return null;
  if (!localAgent)
    return null;
  if (!id)
    return null;
  if (!did)
    return null;
  (0, import_react18.useEffect)(() => {
    setLoading(true);
    const load = async () => {
      const sideBarCredential = await getPostByTitle(agent, localAgent, did, "bs-sidebar");
      setSidebar(sideBarCredential);
      try {
        const postCredential = await getPost(agent, localAgent, id, did);
        setPost(postCredential);
      } catch (e) {
        try {
          const postCredential = await getPostByTitle(agent, localAgent, did, id);
          setPost(postCredential);
        } catch (b) {
        }
      }
      setLoading(false);
    };
    load();
  }, [did, id, agent]);
  const { data: references, isLoading: referencesLoading } = (0, import_react_query2.useQuery)(
    ["references", { id, agentId: agent?.context.id }],
    () => {
      return agent?.dataStoreORMGetVerifiableCredentialsByClaims({
        where: [
          {
            column: "type",
            value: ["post"]
          },
          {
            column: "value",
            value: [`%${id}%`],
            op: "Like"
          }
        ]
      });
    }
  );
  if (loading)
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_antd6.Spin, {});
  if (!post)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    import_pro_components2.PageContainer,
    {
      loading,
      style: { paddingTop: 10 },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(ResponsiveContainer, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_antd6.Row, { gutter: 16, children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_antd6.Col, { xs: 24, sm: 16, style: {
              overflow: "hidden",
              marginBottom: token.margin
            }, children: post && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_agent_explorer_plugin6.VerifiableCredentialComponent, { credential: post }) }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_antd6.Col, { xs: 24, sm: 8, children: sidebar && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Sidebar, { credential: sidebar }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_antd6.Row, { children: references && references.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_antd6.Button, { type: "text", onClick: () => setRefDrawerOpen(true), children: [
            "Referenced by ",
            references.length,
            " other posts"
          ] }) }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          import_antd6.Drawer,
          {
            title: "Posts that reference this one",
            placement: "right",
            onClose: () => setRefDrawerOpen(false),
            open: refDrawerOpen,
            width: 800,
            destroyOnClose: true,
            children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ReferencesFeed, { credentials: references })
          }
        )
      ]
    }
  );
};
var ResponsiveContainer = ({
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_antd6.Row, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      import_antd6.Col,
      {
        lg: 3
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      import_antd6.Col,
      {
        lg: 18,
        sm: 24,
        xs: 24,
        style: { position: "relative" },
        children
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      import_antd6.Col,
      {
        lg: 3
      }
    )
  ] });
};

// src/Home.tsx
var import_react_router_dom4 = __toESM(require_react_router_dom(), 1);

// src/Landing.tsx
var import_react19 = __toESM(require_react(), 1);
var import_veramo_react4 = __toESM(require_veramo_react(), 1);
var import_antd7 = __toESM(require_antd(), 1);
var import_react_router_dom3 = __toESM(require_react_router_dom(), 1);
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var Landing = ({
  did
}) => {
  const { token } = import_antd7.theme.useToken();
  const navigate = (0, import_react_router_dom3.useNavigate)();
  const { agents, agent } = (0, import_veramo_react4.useVeramo)();
  const [sidebar, setSidebar] = (0, import_react19.useState)(null);
  const [post, setPost] = (0, import_react19.useState)(null);
  const [loading, setLoading] = (0, import_react19.useState)(true);
  const localAgent = import_react19.default.useMemo(() => {
    return agents.find((agent2) => agent2.context.id === "web3Agent");
  }, [agents]);
  if (!agent)
    return null;
  if (!localAgent)
    return null;
  if (!did)
    return null;
  if (!agent)
    return null;
  (0, import_react19.useEffect)(() => {
    setLoading(true);
    const load = async () => {
      const sideBarCredential = await getPostByTitle(agent, localAgent, did, "bs-sidebar");
      setSidebar(sideBarCredential);
      const postCredential = await getPostByTitle(agent, localAgent, did, "bs-home");
      setPost(postCredential);
      setLoading(false);
    };
    load();
  }, [did]);
  if (loading)
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_antd7.Spin, {});
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_antd7.Row, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_antd7.Col, { xs: 24, sm: 16, style: { overflow: "hidden", paddingRight: token.margin }, children: [
      post && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(BrainSharePost, { credential: post, context: { hideTitle: true } }),
      !post && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_antd7.Button, { type: "primary", onClick: () => navigate("/brainshare/compose/bs-home"), children: "Compose" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_antd7.Col, { xs: 24, sm: 8, children: sidebar ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Sidebar, { credential: sidebar }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_antd7.Button, { type: "primary", onClick: () => navigate("/brainshare/compose/bs-sidebar"), children: "Compose" }) })
  ] });
};

// src/Home.tsx
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var Home = () => {
  const { did } = (0, import_react_router_dom4.useParams)();
  if (!did)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Landing, { did });
};

// src/LinkDomain.tsx
var import_react20 = __toESM(require_react(), 1);
var import_react_router_dom5 = __toESM(require_react_router_dom(), 1);
var import_react_query3 = __toESM(require_react_query(), 1);
var import_veramo_react5 = __toESM(require_veramo_react(), 1);
var import_pro_components3 = __toESM(require_pro_components(), 1);
var import_agent_explorer_plugin7 = __toESM(require_agent_explorer_plugin(), 1);
var import_antd8 = __toESM(require_antd(), 1);
var import_uuid2 = __toESM(require_uuid(), 1);
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var LinkDomain = () => {
  const [drawerOpen, setDrawerOpen] = (0, import_react20.useState)(false);
  const [did, setDID] = (0, import_react20.useState)("");
  const [domain, setDomain] = (0, import_react20.useState)("");
  const [selectedDid, setSelectedDid] = (0, import_react20.useState)("");
  const navigate = (0, import_react_router_dom5.useNavigate)();
  const { agent } = (0, import_veramo_react5.useVeramo)();
  const [issuerProfile, setIssuerProfile] = (0, import_react20.useState)();
  const [managedIdentifiers, setManagedIdentifiers] = (0, import_react20.useState)([]);
  const [
    managedIdentifiersWithProfiles,
    setManagedIdentifiersWithProfiles
  ] = (0, import_react20.useState)([]);
  (0, import_react_query3.useQuery)(
    ["identifiers", { id: agent?.context.id }],
    () => agent?.didManagerFind(),
    {
      onSuccess: (data) => {
        if (data) {
          setManagedIdentifiers(data);
          if (data.length > 0) {
            setSelectedDid(data[0].did);
          }
        }
      }
    }
  );
  (0, import_react20.useEffect)(() => {
    if (agent) {
      Promise.all(
        managedIdentifiers.map((identifier) => {
          return agent.getIdentifierProfile({ did: identifier.did });
        })
      ).then((profiles) => {
        setIssuerProfile(profiles[0]);
        setManagedIdentifiersWithProfiles(profiles);
      }).catch(console.log);
    }
  }, [managedIdentifiers, agent]);
  const checkLinkage = async () => {
    const message2 = {
      type: "https://veramo.io/didcomm/brainshare/1.0/check-domain-linkage",
      from: selectedDid,
      to: did,
      id: (0, import_uuid2.v4)(),
      body: {
        domain
      }
    };
    const packedMessage = await agent?.packDIDCommMessage({
      packing: "authcrypt",
      message: message2
    });
    const res = await agent?.sendDIDCommMessage({
      messageId: message2.id,
      packedMessage,
      recipientDidUrl: did
    });
    console.log("res: ", res);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_pro_components3.PageContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_antd8.Input, { value: domain, onChange: (e) => setDomain(e.target.value), placeholder: "www.google.com" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_antd8.Input, { value: did, onChange: (e) => setDID(e.target.value), placeholder: "did:web:staging.community.veramo.io" }),
    managedIdentifiersWithProfiles.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      import_antd8.Dropdown.Button,
      {
        type: "primary",
        onClick: checkLinkage,
        disabled: domain === "",
        icon: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_antd8.Avatar, { size: "small", src: issuerProfile?.picture }),
        menu: {
          items: [
            ...managedIdentifiersWithProfiles.map((profile) => {
              return {
                key: profile.did,
                onClick: () => {
                  setIssuerProfile(profile);
                  setSelectedDid(profile.did);
                },
                label: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_agent_explorer_plugin7.IdentifierProfile, { did: profile.did })
              };
            })
          ],
          selectable: true,
          defaultSelectedKeys: [selectedDid]
        },
        children: "Create Post as"
      }
    )
  ] }) });
};

// src/menu.tsx
var import_agent_explorer_plugin8 = __toESM(require_agent_explorer_plugin(), 1);
var import_antd9 = __toESM(require_antd(), 1);
var import_react_router_dom6 = __toESM(require_react_router_dom(), 1);
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var getCredentialContextMenuItems = (credential) => {
  const navigate = (0, import_react_router_dom6.useNavigate)();
  const { notification } = import_antd9.App.useApp();
  const handleCopyEmbed = () => {
    let embed = "";
    if (credential.verifiableCredential.proof?.jwt) {
      embed = `\`\`\`vc+jwt
${credential.verifiableCredential.proof.jwt}
\`\`\``;
    } else {
      embed = `\`\`\`vc+json
${JSON.stringify(credential.verifiableCredential, null, 2)}
\`\`\``;
    }
    navigator.clipboard.writeText(embed);
    notification.success({
      message: "Credential embed copied to clipboard"
    });
  };
  const handleCopyReference = () => {
    const reference = `\`\`\`vc+multihash
${(0, import_agent_explorer_plugin8.getIssuerDID)(credential.verifiableCredential)}/${credential.hash}
\`\`\``;
    navigator.clipboard.writeText(reference);
    notification.success({
      message: "Credential reference copied to clipboard"
    });
  };
  const handleCopyWikilink = () => {
    const wikilink = credential.verifiableCredential.credentialSubject.title ? `[[${(0, import_agent_explorer_plugin8.getIssuerDID)(credential.verifiableCredential)}/${credential.hash}|${credential.verifiableCredential.credentialSubject.title}]]` : `[[${(0, import_agent_explorer_plugin8.getIssuerDID)(credential.verifiableCredential)}/${credential.hash}]]`;
    navigator.clipboard.writeText(wikilink);
    notification.success({
      message: "Credential wikilink copied to clipboard"
    });
  };
  const defaultItems = [
    {
      key: "copy-wiki",
      label: "Copy wiki link",
      icon: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(LinkOutlined_default2, {}),
      onClick: handleCopyWikilink
    },
    {
      key: "embed",
      label: "Copy embed",
      icon: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(PicLeftOutlined_default2, {}),
      onClick: handleCopyEmbed
    },
    {
      key: "reference",
      label: "Copy reference",
      icon: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(PicLeftOutlined_default2, {}),
      onClick: handleCopyReference
    }
  ];
  if (credential.verifiableCredential.type?.includes("BrainSharePost")) {
    return [
      {
        key: "open",
        label: "Open post",
        icon: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(FileSearchOutlined_default2, {}),
        onClick: () => navigate("/brainshare/" + (0, import_agent_explorer_plugin8.getIssuerDID)(credential.verifiableCredential) + "/" + credential.hash)
      },
      {
        key: "edit",
        label: "New revision",
        icon: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(EditOutlined_default2, {}),
        onClick: () => navigate("/brainshare/edit/" + credential.hash)
      },
      ...defaultItems
    ];
  }
  return defaultItems;
};

// src/Edit.tsx
var import_react21 = __toESM(require_react(), 1);
var import_react_router_dom7 = __toESM(require_react_router_dom(), 1);
var import_react_query4 = __toESM(require_react_query(), 1);
var import_veramo_react6 = __toESM(require_veramo_react(), 1);
var import_pro_components4 = __toESM(require_pro_components(), 1);
var import_antd10 = __toESM(require_antd(), 1);
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var Edit = () => {
  const { notification } = import_antd10.App.useApp();
  const { id } = (0, import_react_router_dom7.useParams)();
  const { agent } = (0, import_veramo_react6.useVeramo)();
  const navigate = (0, import_react_router_dom7.useNavigate)();
  const [refDrawerOpen, setRefDrawerOpen] = (0, import_react21.useState)(false);
  if (!id)
    return null;
  const { data: credential, isLoading: credentialLoading } = (0, import_react_query4.useQuery)(
    ["credential", { id }],
    () => agent?.dataStoreGetVerifiableCredential({ hash: id })
  );
  const { data: references, isLoading: referencesLoading } = (0, import_react_query4.useQuery)(
    ["references", { id }],
    () => {
      return agent?.dataStoreORMGetVerifiableCredentialsByClaims({
        where: [
          {
            column: "type",
            value: ["post"]
          },
          {
            column: "value",
            value: [`%${id}%`],
            op: "Like"
          }
        ]
      });
    }
  );
  const handleNewPost = async (did, hash3) => {
    notification.success({
      message: "Post created"
    });
    navigate(`/brainshare/${did}/${hash3}`);
  };
  if (!credential)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    import_pro_components4.PageContainer,
    {
      loading: credentialLoading,
      style: { paddingTop: 10 },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_antd10.Space, { direction: "vertical", style: { width: "100%" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            PostForm,
            {
              onOk: handleNewPost,
              initialIssuer: credential.issuer.id,
              initialTitle: credential.credentialSubject.title,
              initialText: credential.credentialSubject.post,
              initialIsPublic: credential.credentialSubject.isPublic
            }
          ),
          references && references.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_jsx_runtime11.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_antd10.Button, { type: "text", onClick: () => setRefDrawerOpen(true), children: [
            "Referenced by ",
            references.length,
            " other posts"
          ] }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          import_antd10.Drawer,
          {
            title: "Posts that reference this one",
            placement: "right",
            onClose: () => setRefDrawerOpen(false),
            open: refDrawerOpen,
            width: 800,
            destroyOnClose: true,
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ReferencesFeed, { credentials: references })
          }
        )
      ]
    }
  );
};

// src/markdown.tsx
var import_react23 = __toESM(require_react(), 1);

// node_modules/.pnpm/uint8arrays@4.0.6/node_modules/uint8arrays/dist/src/util/as-uint8array.js
function asUint8Array(buf) {
  if (globalThis.Buffer != null) {
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
  }
  return buf;
}

// node_modules/.pnpm/uint8arrays@4.0.6/node_modules/uint8arrays/dist/src/alloc.js
function allocUnsafe(size = 0) {
  if (globalThis.Buffer?.allocUnsafe != null) {
    return asUint8Array(globalThis.Buffer.allocUnsafe(size));
  }
  return new Uint8Array(size);
}

// node_modules/.pnpm/uint8arrays@4.0.6/node_modules/uint8arrays/dist/src/concat.js
function concat(arrays, length3) {
  if (length3 == null) {
    length3 = arrays.reduce((acc, curr) => acc + curr.length, 0);
  }
  const output3 = allocUnsafe(length3);
  let offset = 0;
  for (const arr of arrays) {
    output3.set(arr, offset);
    offset += arr.length;
  }
  return asUint8Array(output3);
}

// node_modules/.pnpm/multiformats@12.1.2/node_modules/multiformats/src/bases/base10.js
var base10_exports = {};
__export(base10_exports, {
  base10: () => base10
});

// node_modules/.pnpm/multiformats@12.1.2/node_modules/multiformats/vendor/base-x.js
function base(ALPHABET, name2) {
  if (ALPHABET.length >= 255) {
    throw new TypeError("Alphabet too long");
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255;
  }
  for (var i = 0; i < ALPHABET.length; i++) {
    var x = ALPHABET.charAt(i);
    var xc = x.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) {
      throw new TypeError(x + " is ambiguous");
    }
    BASE_MAP[xc] = i;
  }
  var BASE = ALPHABET.length;
  var LEADER = ALPHABET.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode6(source) {
    if (source instanceof Uint8Array)
      ;
    else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError("Expected Uint8Array");
    }
    if (source.length === 0) {
      return "";
    }
    var zeroes = 0;
    var length3 = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size);
    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i2 = 0;
      for (var it1 = size - 1; (carry !== 0 || i2 < length3) && it1 !== -1; it1--, i2++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length3 = i2;
      pbegin++;
    }
    var it2 = size - length3;
    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it2 < size; ++it2) {
      str += ALPHABET.charAt(b58[it2]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== "string") {
      throw new TypeError("Expected String");
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    var psz = 0;
    if (source[psz] === " ") {
      return;
    }
    var zeroes = 0;
    var length3 = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    var size = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size);
    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];
      if (carry === 255) {
        return;
      }
      var i2 = 0;
      for (var it3 = size - 1; (carry !== 0 || i2 < length3) && it3 !== -1; it3--, i2++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length3 = i2;
      psz++;
    }
    if (source[psz] === " ") {
      return;
    }
    var it4 = size - length3;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j2 = zeroes;
    while (it4 !== size) {
      vch[j2++] = b256[it4++];
    }
    return vch;
  }
  function decode6(string2) {
    var buffer = decodeUnsafe(string2);
    if (buffer) {
      return buffer;
    }
    throw new Error(`Non-${name2} character`);
  }
  return {
    encode: encode6,
    decodeUnsafe,
    decode: decode6
  };
}
var src = base;
var _brrp__multiformats_scope_baseX = src;
var base_x_default = _brrp__multiformats_scope_baseX;

// node_modules/.pnpm/multiformats@12.1.2/node_modules/multiformats/src/bytes.js
var empty = new Uint8Array(0);
var equals = (aa, bb) => {
  if (aa === bb)
    return true;
  if (aa.byteLength !== bb.byteLength) {
    return false;
  }
  for (let ii = 0; ii < aa.byteLength; ii++) {
    if (aa[ii] !== bb[ii]) {
      return false;
    }
  }
  return true;
};
var coerce = (o) => {
  if (o instanceof Uint8Array && o.constructor.name === "Uint8Array")
    return o;
  if (o instanceof ArrayBuffer)
    return new Uint8Array(o);
  if (ArrayBuffer.isView(o)) {
    return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
  }
  throw new Error("Unknown type, must be binary type");
};
var fromString = (str) => new TextEncoder().encode(str);
var toString = (b) => new TextDecoder().decode(b);

// node_modules/.pnpm/multiformats@12.1.2/node_modules/multiformats/src/bases/base.js
var Encoder = class {
  /**
   * @param {Base} name
   * @param {Prefix} prefix
   * @param {(bytes:Uint8Array) => string} baseEncode
   */
  constructor(name2, prefix, baseEncode) {
    this.name = name2;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {API.Multibase<Prefix>}
   */
  encode(bytes3) {
    if (bytes3 instanceof Uint8Array) {
      return `${this.prefix}${this.baseEncode(bytes3)}`;
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
};
var Decoder = class {
  /**
   * @param {Base} name
   * @param {Prefix} prefix
   * @param {(text:string) => Uint8Array} baseDecode
   */
  constructor(name2, prefix, baseDecode) {
    this.name = name2;
    this.prefix = prefix;
    if (prefix.codePointAt(0) === void 0) {
      throw new Error("Invalid prefix character");
    }
    this.prefixCodePoint = /** @type {number} */
    prefix.codePointAt(0);
    this.baseDecode = baseDecode;
  }
  /**
   * @param {string} text
   */
  decode(text) {
    if (typeof text === "string") {
      if (text.codePointAt(0) !== this.prefixCodePoint) {
        throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      }
      return this.baseDecode(text.slice(this.prefix.length));
    } else {
      throw Error("Can only multibase decode strings");
    }
  }
  /**
   * @template {string} OtherPrefix
   * @param {API.UnibaseDecoder<OtherPrefix>|ComposedDecoder<OtherPrefix>} decoder
   * @returns {ComposedDecoder<Prefix|OtherPrefix>}
   */
  or(decoder) {
    return or(this, decoder);
  }
};
var ComposedDecoder = class {
  /**
   * @param {Decoders<Prefix>} decoders
   */
  constructor(decoders) {
    this.decoders = decoders;
  }
  /**
   * @template {string} OtherPrefix
   * @param {API.UnibaseDecoder<OtherPrefix>|ComposedDecoder<OtherPrefix>} decoder
   * @returns {ComposedDecoder<Prefix|OtherPrefix>}
   */
  or(decoder) {
    return or(this, decoder);
  }
  /**
   * @param {string} input
   * @returns {Uint8Array}
   */
  decode(input) {
    const prefix = (
      /** @type {Prefix} */
      input[0]
    );
    const decoder = this.decoders[prefix];
    if (decoder) {
      return decoder.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  }
};
var or = (left, right) => new ComposedDecoder(
  /** @type {Decoders<L|R>} */
  {
    ...left.decoders || { [
      /** @type API.UnibaseDecoder<L> */
      left.prefix
    ]: left },
    ...right.decoders || { [
      /** @type API.UnibaseDecoder<R> */
      right.prefix
    ]: right }
  }
);
var Codec = class {
  /**
   * @param {Base} name
   * @param {Prefix} prefix
   * @param {(bytes:Uint8Array) => string} baseEncode
   * @param {(text:string) => Uint8Array} baseDecode
   */
  constructor(name2, prefix, baseEncode, baseDecode) {
    this.name = name2;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder(name2, prefix, baseEncode);
    this.decoder = new Decoder(name2, prefix, baseDecode);
  }
  /**
   * @param {Uint8Array} input
   */
  encode(input) {
    return this.encoder.encode(input);
  }
  /**
   * @param {string} input
   */
  decode(input) {
    return this.decoder.decode(input);
  }
};
var from = ({ name: name2, prefix, encode: encode6, decode: decode6 }) => new Codec(name2, prefix, encode6, decode6);
var baseX = ({ prefix, name: name2, alphabet: alphabet3 }) => {
  const { encode: encode6, decode: decode6 } = base_x_default(alphabet3, name2);
  return from({
    prefix,
    name: name2,
    encode: encode6,
    /**
     * @param {string} text
     */
    decode: (text) => coerce(decode6(text))
  });
};
var decode = (string2, alphabet3, bitsPerChar, name2) => {
  const codes = {};
  for (let i = 0; i < alphabet3.length; ++i) {
    codes[alphabet3[i]] = i;
  }
  let end = string2.length;
  while (string2[end - 1] === "=") {
    --end;
  }
  const out = new Uint8Array(end * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i = 0; i < end; ++i) {
    const value = codes[string2[i]];
    if (value === void 0) {
      throw new SyntaxError(`Non-${name2} character`);
    }
    buffer = buffer << bitsPerChar | value;
    bits += bitsPerChar;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
    throw new SyntaxError("Unexpected end of data");
  }
  return out;
};
var encode = (data, alphabet3, bitsPerChar) => {
  const pad = alphabet3[alphabet3.length - 1] === "=";
  const mask = (1 << bitsPerChar) - 1;
  let out = "";
  let bits = 0;
  let buffer = 0;
  for (let i = 0; i < data.length; ++i) {
    buffer = buffer << 8 | data[i];
    bits += 8;
    while (bits > bitsPerChar) {
      bits -= bitsPerChar;
      out += alphabet3[mask & buffer >> bits];
    }
  }
  if (bits) {
    out += alphabet3[mask & buffer << bitsPerChar - bits];
  }
  if (pad) {
    while (out.length * bitsPerChar & 7) {
      out += "=";
    }
  }
  return out;
};
var rfc4648 = ({ name: name2, prefix, bitsPerChar, alphabet: alphabet3 }) => {
  return from({
    prefix,
    name: name2,
    encode(input) {
      return encode(input, alphabet3, bitsPerChar);
    },
    decode(input) {
      return decode(input, alphabet3, bitsPerChar, name2);
    }
  });
};

// node_modules/.pnpm/multiformats@12.1.2/node_modules/multiformats/src/bases/base10.js
var base10 = baseX({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
});

// node_modules/.pnpm/multiformats@12.1.2/node_modules/multiformats/src/bases/base16.js
var base16_exports = {};
__export(base16_exports, {
  base16: () => base16,
  base16upper: () => base16upper
});
var base16 = rfc4648({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
});
var base16upper = rfc4648({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
});

// node_modules/.pnpm/multiformats@12.1.2/node_modules/multiformats/src/bases/base2.js
var base2_exports = {};
__export(base2_exports, {
  base2: () => base2
});
var base2 = rfc4648({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
});

// node_modules/.pnpm/multiformats@12.1.2/node_modules/multiformats/src/bases/base256emoji.js
var base256emoji_exports = {};
__export(base256emoji_exports, {
  base256emoji: () => base256emoji
});
var alphabet = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}");
var alphabetBytesToChars = (
  /** @type {string[]} */
  alphabet.reduce(
    (p, c, i) => {
      p[i] = c;
      return p;
    },
    /** @type {string[]} */
    []
  )
);
var alphabetCharsToBytes = (
  /** @type {number[]} */
  alphabet.reduce(
    (p, c, i) => {
      p[
        /** @type {number} */
        c.codePointAt(0)
      ] = i;
      return p;
    },
    /** @type {number[]} */
    []
  )
);
function encode2(data) {
  return data.reduce((p, c) => {
    p += alphabetBytesToChars[c];
    return p;
  }, "");
}
function decode2(str) {
  const byts = [];
  for (const char of str) {
    const byt = alphabetCharsToBytes[
      /** @type {number} */
      char.codePointAt(0)
    ];
    if (byt === void 0) {
      throw new Error(`Non-base256emoji character: ${char}`);
    }
    byts.push(byt);
  }
  return new Uint8Array(byts);
}
var base256emoji = from({
  prefix: "\u{1F680}",
  name: "base256emoji",
  encode: encode2,
  decode: decode2
});

// node_modules/.pnpm/multiformats@12.1.2/node_modules/multiformats/src/bases/base32.js
var base32_exports = {};
__export(base32_exports, {
  base32: () => base32,
  base32hex: () => base32hex,
  base32hexpad: () => base32hexpad,
  base32hexpadupper: () => base32hexpadupper,
  base32hexupper: () => base32hexupper,
  base32pad: () => base32pad,
  base32padupper: () => base32padupper,
  base32upper: () => base32upper,
  base32z: () => base32z
});
var base32 = rfc4648({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
});
var base32upper = rfc4648({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
});
var base32pad = rfc4648({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
});
var base32padupper = rfc4648({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
});
var base32hex = rfc4648({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
});
var base32hexupper = rfc4648({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
});
var base32hexpad = rfc4648({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
});
var base32hexpadupper = rfc4648({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
});
var base32z = rfc4648({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
});

// node_modules/.pnpm/multiformats@12.1.2/node_modules/multiformats/src/bases/base36.js
var base36_exports = {};
__export(base36_exports, {
  base36: () => base36,
  base36upper: () => base36upper
});
var base36 = baseX({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
});
var base36upper = baseX({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});

// node_modules/.pnpm/multiformats@12.1.2/node_modules/multiformats/src/bases/base58.js
var base58_exports = {};
__export(base58_exports, {
  base58btc: () => base58btc,
  base58flickr: () => base58flickr
});
var base58btc = baseX({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
});
var base58flickr = baseX({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});

// node_modules/.pnpm/multiformats@12.1.2/node_modules/multiformats/src/bases/base64.js
var base64_exports = {};
__export(base64_exports, {
  base64: () => base64,
  base64pad: () => base64pad,
  base64url: () => base64url,
  base64urlpad: () => base64urlpad
});
var base64 = rfc4648({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
});
var base64pad = rfc4648({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
});
var base64url = rfc4648({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
});
var base64urlpad = rfc4648({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
});

// node_modules/.pnpm/multiformats@12.1.2/node_modules/multiformats/src/bases/base8.js
var base8_exports = {};
__export(base8_exports, {
  base8: () => base8
});
var base8 = rfc4648({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
});

// node_modules/.pnpm/multiformats@12.1.2/node_modules/multiformats/src/bases/identity.js
var identity_exports = {};
__export(identity_exports, {
  identity: () => identity
});
var identity = from({
  prefix: "\0",
  name: "identity",
  encode: (buf) => toString(buf),
  decode: (str) => fromString(str)
});

// node_modules/.pnpm/multiformats@12.1.2/node_modules/multiformats/src/codecs/json.js
var textEncoder = new TextEncoder();
var textDecoder = new TextDecoder();

// node_modules/.pnpm/multiformats@12.1.2/node_modules/multiformats/src/hashes/identity.js
var identity_exports2 = {};
__export(identity_exports2, {
  identity: () => identity2
});

// node_modules/.pnpm/multiformats@12.1.2/node_modules/multiformats/src/varint.js
var varint_exports = {};
__export(varint_exports, {
  decode: () => decode4,
  encodeTo: () => encodeTo,
  encodingLength: () => encodingLength
});

// node_modules/.pnpm/multiformats@12.1.2/node_modules/multiformats/vendor/varint.js
var encode_1 = encode3;
var MSB = 128;
var REST = 127;
var MSBALL = ~REST;
var INT = Math.pow(2, 31);
function encode3(num, out, offset) {
  out = out || [];
  offset = offset || 0;
  var oldOffset = offset;
  while (num >= INT) {
    out[offset++] = num & 255 | MSB;
    num /= 128;
  }
  while (num & MSBALL) {
    out[offset++] = num & 255 | MSB;
    num >>>= 7;
  }
  out[offset] = num | 0;
  encode3.bytes = offset - oldOffset + 1;
  return out;
}
var decode3 = read;
var MSB$1 = 128;
var REST$1 = 127;
function read(buf, offset) {
  var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l2 = buf.length;
  do {
    if (counter >= l2) {
      read.bytes = 0;
      throw new RangeError("Could not decode varint");
    }
    b = buf[counter++];
    res += shift < 28 ? (b & REST$1) << shift : (b & REST$1) * Math.pow(2, shift);
    shift += 7;
  } while (b >= MSB$1);
  read.bytes = counter - offset;
  return res;
}
var N1 = Math.pow(2, 7);
var N2 = Math.pow(2, 14);
var N3 = Math.pow(2, 21);
var N4 = Math.pow(2, 28);
var N5 = Math.pow(2, 35);
var N6 = Math.pow(2, 42);
var N7 = Math.pow(2, 49);
var N8 = Math.pow(2, 56);
var N9 = Math.pow(2, 63);
var length = function(value) {
  return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
};
var varint = {
  encode: encode_1,
  decode: decode3,
  encodingLength: length
};
var _brrp_varint = varint;
var varint_default = _brrp_varint;

// node_modules/.pnpm/multiformats@12.1.2/node_modules/multiformats/src/varint.js
var decode4 = (data, offset = 0) => {
  const code3 = varint_default.decode(data, offset);
  return [code3, varint_default.decode.bytes];
};
var encodeTo = (int, target, offset = 0) => {
  varint_default.encode(int, target, offset);
  return target;
};
var encodingLength = (int) => {
  return varint_default.encodingLength(int);
};

// node_modules/.pnpm/multiformats@12.1.2/node_modules/multiformats/src/hashes/digest.js
var create2 = (code3, digest2) => {
  const size = digest2.byteLength;
  const sizeOffset = encodingLength(code3);
  const digestOffset = sizeOffset + encodingLength(size);
  const bytes3 = new Uint8Array(digestOffset + size);
  encodeTo(code3, bytes3, 0);
  encodeTo(size, bytes3, sizeOffset);
  bytes3.set(digest2, digestOffset);
  return new Digest(code3, size, digest2, bytes3);
};
var decode5 = (multihash) => {
  const bytes3 = coerce(multihash);
  const [code3, sizeOffset] = decode4(bytes3);
  const [size, digestOffset] = decode4(bytes3.subarray(sizeOffset));
  const digest2 = bytes3.subarray(sizeOffset + digestOffset);
  if (digest2.byteLength !== size) {
    throw new Error("Incorrect length");
  }
  return new Digest(code3, size, digest2, bytes3);
};
var equals2 = (a, b) => {
  if (a === b) {
    return true;
  } else {
    const data = (
      /** @type {{code?:unknown, size?:unknown, bytes?:unknown}} */
      b
    );
    return a.code === data.code && a.size === data.size && data.bytes instanceof Uint8Array && equals(a.bytes, data.bytes);
  }
};
var Digest = class {
  /**
   * Creates a multihash digest.
   *
   * @param {Code} code
   * @param {Size} size
   * @param {Uint8Array} digest
   * @param {Uint8Array} bytes
   */
  constructor(code3, size, digest2, bytes3) {
    this.code = code3;
    this.size = size;
    this.digest = digest2;
    this.bytes = bytes3;
  }
};

// node_modules/.pnpm/multiformats@12.1.2/node_modules/multiformats/src/hashes/identity.js
var code = 0;
var name = "identity";
var encode4 = coerce;
var digest = (input) => create2(code, encode4(input));
var identity2 = { code, name, encode: encode4, digest };

// node_modules/.pnpm/multiformats@12.1.2/node_modules/multiformats/src/hashes/sha2-browser.js
var sha2_browser_exports = {};
__export(sha2_browser_exports, {
  sha256: () => sha256,
  sha512: () => sha512
});

// node_modules/.pnpm/multiformats@12.1.2/node_modules/multiformats/src/hashes/hasher.js
var from2 = ({ name: name2, code: code3, encode: encode6 }) => new Hasher(name2, code3, encode6);
var Hasher = class {
  /**
   *
   * @param {Name} name
   * @param {Code} code
   * @param {(input: Uint8Array) => Await<Uint8Array>} encode
   */
  constructor(name2, code3, encode6) {
    this.name = name2;
    this.code = code3;
    this.encode = encode6;
  }
  /**
   * @param {Uint8Array} input
   * @returns {Await<Digest.Digest<Code, number>>}
   */
  digest(input) {
    if (input instanceof Uint8Array) {
      const result = this.encode(input);
      return result instanceof Uint8Array ? create2(this.code, result) : result.then((digest2) => create2(this.code, digest2));
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
};

// node_modules/.pnpm/multiformats@12.1.2/node_modules/multiformats/src/hashes/sha2-browser.js
var sha = (name2) => (
  /**
   * @param {Uint8Array} data
   */
  async (data) => new Uint8Array(await crypto.subtle.digest(name2, data))
);
var sha256 = from2({
  name: "sha2-256",
  code: 18,
  encode: sha("SHA-256")
});
var sha512 = from2({
  name: "sha2-512",
  code: 19,
  encode: sha("SHA-512")
});

// node_modules/.pnpm/multiformats@12.1.2/node_modules/multiformats/src/cid.js
var format = (link, base3) => {
  const { bytes: bytes3, version } = link;
  switch (version) {
    case 0:
      return toStringV0(
        bytes3,
        baseCache(link),
        /** @type {API.MultibaseEncoder<"z">} */
        base3 || base58btc.encoder
      );
    default:
      return toStringV1(
        bytes3,
        baseCache(link),
        /** @type {API.MultibaseEncoder<Prefix>} */
        base3 || base32.encoder
      );
  }
};
var cache = /* @__PURE__ */ new WeakMap();
var baseCache = (cid) => {
  const baseCache2 = cache.get(cid);
  if (baseCache2 == null) {
    const baseCache3 = /* @__PURE__ */ new Map();
    cache.set(cid, baseCache3);
    return baseCache3;
  }
  return baseCache2;
};
var CID = class _CID {
  /**
   * @param {Version} version - Version of the CID
   * @param {Format} code - Code of the codec content is encoded in, see https://github.com/multiformats/multicodec/blob/master/table.csv
   * @param {API.MultihashDigest<Alg>} multihash - (Multi)hash of the of the content.
   * @param {Uint8Array} bytes
   */
  constructor(version, code3, multihash, bytes3) {
    this.code = code3;
    this.version = version;
    this.multihash = multihash;
    this.bytes = bytes3;
    this["/"] = bytes3;
  }
  /**
   * Signalling `cid.asCID === cid` has been replaced with `cid['/'] === cid.bytes`
   * please either use `CID.asCID(cid)` or switch to new signalling mechanism
   *
   * @deprecated
   */
  get asCID() {
    return this;
  }
  // ArrayBufferView
  get byteOffset() {
    return this.bytes.byteOffset;
  }
  // ArrayBufferView
  get byteLength() {
    return this.bytes.byteLength;
  }
  /**
   * @returns {CID<Data, API.DAG_PB, API.SHA_256, 0>}
   */
  toV0() {
    switch (this.version) {
      case 0: {
        return (
          /** @type {CID<Data, API.DAG_PB, API.SHA_256, 0>} */
          this
        );
      }
      case 1: {
        const { code: code3, multihash } = this;
        if (code3 !== DAG_PB_CODE) {
          throw new Error("Cannot convert a non dag-pb CID to CIDv0");
        }
        if (multihash.code !== SHA_256_CODE) {
          throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
        }
        return (
          /** @type {CID<Data, API.DAG_PB, API.SHA_256, 0>} */
          _CID.createV0(
            /** @type {API.MultihashDigest<API.SHA_256>} */
            multihash
          )
        );
      }
      default: {
        throw Error(
          `Can not convert CID version ${this.version} to version 0. This is a bug please report`
        );
      }
    }
  }
  /**
   * @returns {CID<Data, Format, Alg, 1>}
   */
  toV1() {
    switch (this.version) {
      case 0: {
        const { code: code3, digest: digest2 } = this.multihash;
        const multihash = create2(code3, digest2);
        return (
          /** @type {CID<Data, Format, Alg, 1>} */
          _CID.createV1(this.code, multihash)
        );
      }
      case 1: {
        return (
          /** @type {CID<Data, Format, Alg, 1>} */
          this
        );
      }
      default: {
        throw Error(
          `Can not convert CID version ${this.version} to version 1. This is a bug please report`
        );
      }
    }
  }
  /**
   * @param {unknown} other
   * @returns {other is CID<Data, Format, Alg, Version>}
   */
  equals(other) {
    return _CID.equals(this, other);
  }
  /**
   * @template {unknown} Data
   * @template {number} Format
   * @template {number} Alg
   * @template {API.Version} Version
   * @param {API.Link<Data, Format, Alg, Version>} self
   * @param {unknown} other
   * @returns {other is CID}
   */
  static equals(self, other) {
    const unknown = (
      /** @type {{code?:unknown, version?:unknown, multihash?:unknown}} */
      other
    );
    return unknown && self.code === unknown.code && self.version === unknown.version && equals2(self.multihash, unknown.multihash);
  }
  /**
   * @param {API.MultibaseEncoder<string>} [base]
   * @returns {string}
   */
  toString(base3) {
    return format(this, base3);
  }
  /**
   * @returns {API.LinkJSON<this>}
   */
  toJSON() {
    return { "/": format(this) };
  }
  link() {
    return this;
  }
  get [Symbol.toStringTag]() {
    return "CID";
  }
  // Legacy
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return `CID(${this.toString()})`;
  }
  /**
   * Takes any input `value` and returns a `CID` instance if it was
   * a `CID` otherwise returns `null`. If `value` is instanceof `CID`
   * it will return value back. If `value` is not instance of this CID
   * class, but is compatible CID it will return new instance of this
   * `CID` class. Otherwise returns null.
   *
   * This allows two different incompatible versions of CID library to
   * co-exist and interop as long as binary interface is compatible.
   *
   * @template {unknown} Data
   * @template {number} Format
   * @template {number} Alg
   * @template {API.Version} Version
   * @template {unknown} U
   * @param {API.Link<Data, Format, Alg, Version>|U} input
   * @returns {CID<Data, Format, Alg, Version>|null}
   */
  static asCID(input) {
    if (input == null) {
      return null;
    }
    const value = (
      /** @type {any} */
      input
    );
    if (value instanceof _CID) {
      return value;
    } else if (value["/"] != null && value["/"] === value.bytes || value.asCID === value) {
      const { version, code: code3, multihash, bytes: bytes3 } = value;
      return new _CID(
        version,
        code3,
        /** @type {API.MultihashDigest<Alg>} */
        multihash,
        bytes3 || encodeCID(version, code3, multihash.bytes)
      );
    } else if (value[cidSymbol] === true) {
      const { version, multihash, code: code3 } = value;
      const digest2 = (
        /** @type {API.MultihashDigest<Alg>} */
        decode5(multihash)
      );
      return _CID.create(version, code3, digest2);
    } else {
      return null;
    }
  }
  /**
   *
   * @template {unknown} Data
   * @template {number} Format
   * @template {number} Alg
   * @template {API.Version} Version
   * @param {Version} version - Version of the CID
   * @param {Format} code - Code of the codec content is encoded in, see https://github.com/multiformats/multicodec/blob/master/table.csv
   * @param {API.MultihashDigest<Alg>} digest - (Multi)hash of the of the content.
   * @returns {CID<Data, Format, Alg, Version>}
   */
  static create(version, code3, digest2) {
    if (typeof code3 !== "number") {
      throw new Error("String codecs are no longer supported");
    }
    if (!(digest2.bytes instanceof Uint8Array)) {
      throw new Error("Invalid digest");
    }
    switch (version) {
      case 0: {
        if (code3 !== DAG_PB_CODE) {
          throw new Error(
            `Version 0 CID must use dag-pb (code: ${DAG_PB_CODE}) block encoding`
          );
        } else {
          return new _CID(version, code3, digest2, digest2.bytes);
        }
      }
      case 1: {
        const bytes3 = encodeCID(version, code3, digest2.bytes);
        return new _CID(version, code3, digest2, bytes3);
      }
      default: {
        throw new Error("Invalid version");
      }
    }
  }
  /**
   * Simplified version of `create` for CIDv0.
   *
   * @template {unknown} [T=unknown]
   * @param {API.MultihashDigest<typeof SHA_256_CODE>} digest - Multihash.
   * @returns {CID<T, typeof DAG_PB_CODE, typeof SHA_256_CODE, 0>}
   */
  static createV0(digest2) {
    return _CID.create(0, DAG_PB_CODE, digest2);
  }
  /**
   * Simplified version of `create` for CIDv1.
   *
   * @template {unknown} Data
   * @template {number} Code
   * @template {number} Alg
   * @param {Code} code - Content encoding format code.
   * @param {API.MultihashDigest<Alg>} digest - Miltihash of the content.
   * @returns {CID<Data, Code, Alg, 1>}
   */
  static createV1(code3, digest2) {
    return _CID.create(1, code3, digest2);
  }
  /**
   * Decoded a CID from its binary representation. The byte array must contain
   * only the CID with no additional bytes.
   *
   * An error will be thrown if the bytes provided do not contain a valid
   * binary representation of a CID.
   *
   * @template {unknown} Data
   * @template {number} Code
   * @template {number} Alg
   * @template {API.Version} Ver
   * @param {API.ByteView<API.Link<Data, Code, Alg, Ver>>} bytes
   * @returns {CID<Data, Code, Alg, Ver>}
   */
  static decode(bytes3) {
    const [cid, remainder] = _CID.decodeFirst(bytes3);
    if (remainder.length) {
      throw new Error("Incorrect length");
    }
    return cid;
  }
  /**
   * Decoded a CID from its binary representation at the beginning of a byte
   * array.
   *
   * Returns an array with the first element containing the CID and the second
   * element containing the remainder of the original byte array. The remainder
   * will be a zero-length byte array if the provided bytes only contained a
   * binary CID representation.
   *
   * @template {unknown} T
   * @template {number} C
   * @template {number} A
   * @template {API.Version} V
   * @param {API.ByteView<API.Link<T, C, A, V>>} bytes
   * @returns {[CID<T, C, A, V>, Uint8Array]}
   */
  static decodeFirst(bytes3) {
    const specs = _CID.inspectBytes(bytes3);
    const prefixSize = specs.size - specs.multihashSize;
    const multihashBytes = coerce(
      bytes3.subarray(prefixSize, prefixSize + specs.multihashSize)
    );
    if (multihashBytes.byteLength !== specs.multihashSize) {
      throw new Error("Incorrect length");
    }
    const digestBytes = multihashBytes.subarray(
      specs.multihashSize - specs.digestSize
    );
    const digest2 = new Digest(
      specs.multihashCode,
      specs.digestSize,
      digestBytes,
      multihashBytes
    );
    const cid = specs.version === 0 ? _CID.createV0(
      /** @type {API.MultihashDigest<API.SHA_256>} */
      digest2
    ) : _CID.createV1(specs.codec, digest2);
    return [
      /** @type {CID<T, C, A, V>} */
      cid,
      bytes3.subarray(specs.size)
    ];
  }
  /**
   * Inspect the initial bytes of a CID to determine its properties.
   *
   * Involves decoding up to 4 varints. Typically this will require only 4 to 6
   * bytes but for larger multicodec code values and larger multihash digest
   * lengths these varints can be quite large. It is recommended that at least
   * 10 bytes be made available in the `initialBytes` argument for a complete
   * inspection.
   *
   * @template {unknown} T
   * @template {number} C
   * @template {number} A
   * @template {API.Version} V
   * @param {API.ByteView<API.Link<T, C, A, V>>} initialBytes
   * @returns {{ version:V, codec:C, multihashCode:A, digestSize:number, multihashSize:number, size:number }}
   */
  static inspectBytes(initialBytes) {
    let offset = 0;
    const next = () => {
      const [i, length3] = decode4(initialBytes.subarray(offset));
      offset += length3;
      return i;
    };
    let version = (
      /** @type {V} */
      next()
    );
    let codec = (
      /** @type {C} */
      DAG_PB_CODE
    );
    if (
      /** @type {number} */
      version === 18
    ) {
      version = /** @type {V} */
      0;
      offset = 0;
    } else {
      codec = /** @type {C} */
      next();
    }
    if (version !== 0 && version !== 1) {
      throw new RangeError(`Invalid CID version ${version}`);
    }
    const prefixSize = offset;
    const multihashCode = (
      /** @type {A} */
      next()
    );
    const digestSize = next();
    const size = offset + digestSize;
    const multihashSize = size - prefixSize;
    return { version, codec, multihashCode, digestSize, multihashSize, size };
  }
  /**
   * Takes cid in a string representation and creates an instance. If `base`
   * decoder is not provided will use a default from the configuration. It will
   * throw an error if encoding of the CID is not compatible with supplied (or
   * a default decoder).
   *
   * @template {string} Prefix
   * @template {unknown} Data
   * @template {number} Code
   * @template {number} Alg
   * @template {API.Version} Ver
   * @param {API.ToString<API.Link<Data, Code, Alg, Ver>, Prefix>} source
   * @param {API.MultibaseDecoder<Prefix>} [base]
   * @returns {CID<Data, Code, Alg, Ver>}
   */
  static parse(source, base3) {
    const [prefix, bytes3] = parseCIDtoBytes(source, base3);
    const cid = _CID.decode(bytes3);
    if (cid.version === 0 && source[0] !== "Q") {
      throw Error("Version 0 CID string must not include multibase prefix");
    }
    baseCache(cid).set(prefix, source);
    return cid;
  }
};
var parseCIDtoBytes = (source, base3) => {
  switch (source[0]) {
    case "Q": {
      const decoder = base3 || base58btc;
      return [
        /** @type {Prefix} */
        base58btc.prefix,
        decoder.decode(`${base58btc.prefix}${source}`)
      ];
    }
    case base58btc.prefix: {
      const decoder = base3 || base58btc;
      return [
        /** @type {Prefix} */
        base58btc.prefix,
        decoder.decode(source)
      ];
    }
    case base32.prefix: {
      const decoder = base3 || base32;
      return [
        /** @type {Prefix} */
        base32.prefix,
        decoder.decode(source)
      ];
    }
    default: {
      if (base3 == null) {
        throw Error(
          "To parse non base32 or base58btc encoded CID multibase decoder must be provided"
        );
      }
      return [
        /** @type {Prefix} */
        source[0],
        base3.decode(source)
      ];
    }
  }
};
var toStringV0 = (bytes3, cache2, base3) => {
  const { prefix } = base3;
  if (prefix !== base58btc.prefix) {
    throw Error(`Cannot string encode V0 in ${base3.name} encoding`);
  }
  const cid = cache2.get(prefix);
  if (cid == null) {
    const cid2 = base3.encode(bytes3).slice(1);
    cache2.set(prefix, cid2);
    return cid2;
  } else {
    return cid;
  }
};
var toStringV1 = (bytes3, cache2, base3) => {
  const { prefix } = base3;
  const cid = cache2.get(prefix);
  if (cid == null) {
    const cid2 = base3.encode(bytes3);
    cache2.set(prefix, cid2);
    return cid2;
  } else {
    return cid;
  }
};
var DAG_PB_CODE = 112;
var SHA_256_CODE = 18;
var encodeCID = (version, code3, multihash) => {
  const codeOffset = encodingLength(version);
  const hashOffset = codeOffset + encodingLength(code3);
  const bytes3 = new Uint8Array(hashOffset + multihash.byteLength);
  encodeTo(version, bytes3, 0);
  encodeTo(code3, bytes3, codeOffset);
  bytes3.set(multihash, hashOffset);
  return bytes3;
};
var cidSymbol = Symbol.for("@ipld/js-cid/CID");

// node_modules/.pnpm/multiformats@12.1.2/node_modules/multiformats/src/basics.js
var bases = { ...identity_exports, ...base2_exports, ...base8_exports, ...base10_exports, ...base16_exports, ...base32_exports, ...base36_exports, ...base58_exports, ...base64_exports, ...base256emoji_exports };
var hashes = { ...sha2_browser_exports, ...identity_exports2 };

// node_modules/.pnpm/uint8arrays@4.0.6/node_modules/uint8arrays/dist/src/util/bases.js
function createCodec(name2, prefix, encode6, decode6) {
  return {
    name: name2,
    prefix,
    encoder: {
      name: name2,
      prefix,
      encode: encode6
    },
    decoder: {
      decode: decode6
    }
  };
}
var string = createCodec("utf8", "u", (buf) => {
  const decoder = new TextDecoder("utf8");
  return "u" + decoder.decode(buf);
}, (str) => {
  const encoder = new TextEncoder();
  return encoder.encode(str.substring(1));
});
var ascii = createCodec("ascii", "a", (buf) => {
  let string2 = "a";
  for (let i = 0; i < buf.length; i++) {
    string2 += String.fromCharCode(buf[i]);
  }
  return string2;
}, (str) => {
  str = str.substring(1);
  const buf = allocUnsafe(str.length);
  for (let i = 0; i < str.length; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
});
var BASES = {
  utf8: string,
  "utf-8": string,
  hex: bases.base16,
  latin1: ascii,
  ascii,
  binary: ascii,
  ...bases
};
var bases_default = BASES;

// node_modules/.pnpm/uint8arrays@4.0.6/node_modules/uint8arrays/dist/src/from-string.js
function fromString2(string2, encoding = "utf8") {
  const base3 = bases_default[encoding];
  if (base3 == null) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return asUint8Array(globalThis.Buffer.from(string2, "utf-8"));
  }
  return base3.decoder.decode(`${base3.prefix}${string2}`);
}

// node_modules/.pnpm/uint8arrays@4.0.6/node_modules/uint8arrays/dist/src/to-string.js
function toString2(array, encoding = "utf8") {
  const base3 = bases_default[encoding];
  if (base3 == null) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString("utf8");
  }
  return base3.encoder.encode(array).substring(1);
}

// node_modules/.pnpm/@noble+hashes@1.3.2/node_modules/@noble/hashes/esm/_assert.js
function number(n) {
  if (!Number.isSafeInteger(n) || n < 0)
    throw new Error(`Wrong positive integer: ${n}`);
}
function bytes(b, ...lengths) {
  if (!(b instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (lengths.length > 0 && !lengths.includes(b.length))
    throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
}
function hash(hash3) {
  if (typeof hash3 !== "function" || typeof hash3.create !== "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  number(hash3.outputLen);
  number(hash3.blockLen);
}
function exists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function output(out, instance) {
  bytes(out);
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error(`digestInto() expects output buffer of length at least ${min}`);
  }
}

// node_modules/.pnpm/@noble+hashes@1.3.2/node_modules/@noble/hashes/esm/crypto.js
var crypto2 = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;

// node_modules/.pnpm/@noble+hashes@1.3.2/node_modules/@noble/hashes/esm/utils.js
var u8a = (a) => a instanceof Uint8Array;
var u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
var createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
var rotr = (word, shift) => word << 32 - shift | word >>> shift;
var isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!isLE)
  throw new Error("Non little-endian hardware is not supported");
function utf8ToBytes(str) {
  if (typeof str !== "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
  return new Uint8Array(new TextEncoder().encode(str));
}
function toBytes(data) {
  if (typeof data === "string")
    data = utf8ToBytes(data);
  if (!u8a(data))
    throw new Error(`expected Uint8Array, got ${typeof data}`);
  return data;
}
function concatBytes(...arrays) {
  const r = new Uint8Array(arrays.reduce((sum, a) => sum + a.length, 0));
  let pad = 0;
  arrays.forEach((a) => {
    if (!u8a(a))
      throw new Error("Uint8Array expected");
    r.set(a, pad);
    pad += a.length;
  });
  return r;
}
var Hash = class {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
};
var toStr = {}.toString;
function wrapConstructor(hashCons) {
  const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
  const tmp = hashCons();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = () => hashCons();
  return hashC;
}
function wrapXOFConstructorWithOpts(hashCons) {
  const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
  const tmp = hashCons({});
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = (opts) => hashCons(opts);
  return hashC;
}
function randomBytes(bytesLength = 32) {
  if (crypto2 && typeof crypto2.getRandomValues === "function") {
    return crypto2.getRandomValues(new Uint8Array(bytesLength));
  }
  throw new Error("crypto.getRandomValues must be defined");
}

// node_modules/.pnpm/@noble+hashes@1.3.2/node_modules/@noble/hashes/esm/_sha2.js
function setBigUint64(view, byteOffset, value, isLE3) {
  if (typeof view.setBigUint64 === "function")
    return view.setBigUint64(byteOffset, value, isLE3);
  const _32n2 = BigInt(32);
  const _u32_max = BigInt(4294967295);
  const wh = Number(value >> _32n2 & _u32_max);
  const wl = Number(value & _u32_max);
  const h2 = isLE3 ? 4 : 0;
  const l2 = isLE3 ? 0 : 4;
  view.setUint32(byteOffset + h2, wh, isLE3);
  view.setUint32(byteOffset + l2, wl, isLE3);
}
var SHA2 = class extends Hash {
  constructor(blockLen, outputLen, padOffset, isLE3) {
    super();
    this.blockLen = blockLen;
    this.outputLen = outputLen;
    this.padOffset = padOffset;
    this.isLE = isLE3;
    this.finished = false;
    this.length = 0;
    this.pos = 0;
    this.destroyed = false;
    this.buffer = new Uint8Array(blockLen);
    this.view = createView(this.buffer);
  }
  update(data) {
    exists(this);
    const { view, buffer, blockLen } = this;
    data = toBytes(data);
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      if (take === blockLen) {
        const dataView = createView(data);
        for (; blockLen <= len - pos; pos += blockLen)
          this.process(dataView, pos);
        continue;
      }
      buffer.set(data.subarray(pos, pos + take), this.pos);
      this.pos += take;
      pos += take;
      if (this.pos === blockLen) {
        this.process(view, 0);
        this.pos = 0;
      }
    }
    this.length += data.length;
    this.roundClean();
    return this;
  }
  digestInto(out) {
    exists(this);
    output(out, this);
    this.finished = true;
    const { buffer, view, blockLen, isLE: isLE3 } = this;
    let { pos } = this;
    buffer[pos++] = 128;
    this.buffer.subarray(pos).fill(0);
    if (this.padOffset > blockLen - pos) {
      this.process(view, 0);
      pos = 0;
    }
    for (let i = pos; i < blockLen; i++)
      buffer[i] = 0;
    setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE3);
    this.process(view, 0);
    const oview = createView(out);
    const len = this.outputLen;
    if (len % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const outLen = len / 4;
    const state = this.get();
    if (outLen > state.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let i = 0; i < outLen; i++)
      oview.setUint32(4 * i, state[i], isLE3);
  }
  digest() {
    const { buffer, outputLen } = this;
    this.digestInto(buffer);
    const res = buffer.slice(0, outputLen);
    this.destroy();
    return res;
  }
  _cloneInto(to) {
    to || (to = new this.constructor());
    to.set(...this.get());
    const { blockLen, buffer, length: length3, finished, destroyed, pos } = this;
    to.length = length3;
    to.pos = pos;
    to.finished = finished;
    to.destroyed = destroyed;
    if (length3 % blockLen)
      to.buffer.set(buffer);
    return to;
  }
};

// node_modules/.pnpm/@noble+hashes@1.3.2/node_modules/@noble/hashes/esm/_u64.js
var U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
var _32n = /* @__PURE__ */ BigInt(32);
function fromBig(n, le2 = false) {
  if (le2)
    return { h: Number(n & U32_MASK64), l: Number(n >> _32n & U32_MASK64) };
  return { h: Number(n >> _32n & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split(lst, le2 = false) {
  let Ah = new Uint32Array(lst.length);
  let Al = new Uint32Array(lst.length);
  for (let i = 0; i < lst.length; i++) {
    const { h: h2, l: l2 } = fromBig(lst[i], le2);
    [Ah[i], Al[i]] = [h2, l2];
  }
  return [Ah, Al];
}
var toBig = (h2, l2) => BigInt(h2 >>> 0) << _32n | BigInt(l2 >>> 0);
var shrSH = (h2, _l, s) => h2 >>> s;
var shrSL = (h2, l2, s) => h2 << 32 - s | l2 >>> s;
var rotrSH = (h2, l2, s) => h2 >>> s | l2 << 32 - s;
var rotrSL = (h2, l2, s) => h2 << 32 - s | l2 >>> s;
var rotrBH = (h2, l2, s) => h2 << 64 - s | l2 >>> s - 32;
var rotrBL = (h2, l2, s) => h2 >>> s - 32 | l2 << 64 - s;
var rotr32H = (_h, l2) => l2;
var rotr32L = (h2, _l) => h2;
var rotlSH = (h2, l2, s) => h2 << s | l2 >>> 32 - s;
var rotlSL = (h2, l2, s) => l2 << s | h2 >>> 32 - s;
var rotlBH = (h2, l2, s) => l2 << s - 32 | h2 >>> 64 - s;
var rotlBL = (h2, l2, s) => h2 << s - 32 | l2 >>> 64 - s;
function add(Ah, Al, Bh, Bl) {
  const l2 = (Al >>> 0) + (Bl >>> 0);
  return { h: Ah + Bh + (l2 / 2 ** 32 | 0) | 0, l: l2 | 0 };
}
var add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
var add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
var add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
var add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
var add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
var add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
var u64 = {
  fromBig,
  split,
  toBig,
  shrSH,
  shrSL,
  rotrSH,
  rotrSL,
  rotrBH,
  rotrBL,
  rotr32H,
  rotr32L,
  rotlSH,
  rotlSL,
  rotlBH,
  rotlBL,
  add,
  add3L,
  add3H,
  add4L,
  add4H,
  add5H,
  add5L
};
var u64_default = u64;

// node_modules/.pnpm/@noble+hashes@1.3.2/node_modules/@noble/hashes/esm/sha512.js
var [SHA512_Kh, SHA512_Kl] = /* @__PURE__ */ (() => u64_default.split([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((n) => BigInt(n))))();
var SHA512_W_H = /* @__PURE__ */ new Uint32Array(80);
var SHA512_W_L = /* @__PURE__ */ new Uint32Array(80);
var SHA512 = class extends SHA2 {
  constructor() {
    super(128, 64, 16, false);
    this.Ah = 1779033703 | 0;
    this.Al = 4089235720 | 0;
    this.Bh = 3144134277 | 0;
    this.Bl = 2227873595 | 0;
    this.Ch = 1013904242 | 0;
    this.Cl = 4271175723 | 0;
    this.Dh = 2773480762 | 0;
    this.Dl = 1595750129 | 0;
    this.Eh = 1359893119 | 0;
    this.El = 2917565137 | 0;
    this.Fh = 2600822924 | 0;
    this.Fl = 725511199 | 0;
    this.Gh = 528734635 | 0;
    this.Gl = 4215389547 | 0;
    this.Hh = 1541459225 | 0;
    this.Hl = 327033209 | 0;
  }
  // prettier-ignore
  get() {
    const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
  }
  // prettier-ignore
  set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
    this.Ah = Ah | 0;
    this.Al = Al | 0;
    this.Bh = Bh | 0;
    this.Bl = Bl | 0;
    this.Ch = Ch | 0;
    this.Cl = Cl | 0;
    this.Dh = Dh | 0;
    this.Dl = Dl | 0;
    this.Eh = Eh | 0;
    this.El = El | 0;
    this.Fh = Fh | 0;
    this.Fl = Fl | 0;
    this.Gh = Gh | 0;
    this.Gl = Gl | 0;
    this.Hh = Hh | 0;
    this.Hl = Hl | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4) {
      SHA512_W_H[i] = view.getUint32(offset);
      SHA512_W_L[i] = view.getUint32(offset += 4);
    }
    for (let i = 16; i < 80; i++) {
      const W15h = SHA512_W_H[i - 15] | 0;
      const W15l = SHA512_W_L[i - 15] | 0;
      const s0h = u64_default.rotrSH(W15h, W15l, 1) ^ u64_default.rotrSH(W15h, W15l, 8) ^ u64_default.shrSH(W15h, W15l, 7);
      const s0l = u64_default.rotrSL(W15h, W15l, 1) ^ u64_default.rotrSL(W15h, W15l, 8) ^ u64_default.shrSL(W15h, W15l, 7);
      const W2h = SHA512_W_H[i - 2] | 0;
      const W2l = SHA512_W_L[i - 2] | 0;
      const s1h = u64_default.rotrSH(W2h, W2l, 19) ^ u64_default.rotrBH(W2h, W2l, 61) ^ u64_default.shrSH(W2h, W2l, 6);
      const s1l = u64_default.rotrSL(W2h, W2l, 19) ^ u64_default.rotrBL(W2h, W2l, 61) ^ u64_default.shrSL(W2h, W2l, 6);
      const SUMl = u64_default.add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
      const SUMh = u64_default.add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
      SHA512_W_H[i] = SUMh | 0;
      SHA512_W_L[i] = SUMl | 0;
    }
    let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    for (let i = 0; i < 80; i++) {
      const sigma1h = u64_default.rotrSH(Eh, El, 14) ^ u64_default.rotrSH(Eh, El, 18) ^ u64_default.rotrBH(Eh, El, 41);
      const sigma1l = u64_default.rotrSL(Eh, El, 14) ^ u64_default.rotrSL(Eh, El, 18) ^ u64_default.rotrBL(Eh, El, 41);
      const CHIh = Eh & Fh ^ ~Eh & Gh;
      const CHIl = El & Fl ^ ~El & Gl;
      const T1ll = u64_default.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
      const T1h = u64_default.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
      const T1l = T1ll | 0;
      const sigma0h = u64_default.rotrSH(Ah, Al, 28) ^ u64_default.rotrBH(Ah, Al, 34) ^ u64_default.rotrBH(Ah, Al, 39);
      const sigma0l = u64_default.rotrSL(Ah, Al, 28) ^ u64_default.rotrBL(Ah, Al, 34) ^ u64_default.rotrBL(Ah, Al, 39);
      const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
      const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
      Hh = Gh | 0;
      Hl = Gl | 0;
      Gh = Fh | 0;
      Gl = Fl | 0;
      Fh = Eh | 0;
      Fl = El | 0;
      ({ h: Eh, l: El } = u64_default.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
      Dh = Ch | 0;
      Dl = Cl | 0;
      Ch = Bh | 0;
      Cl = Bl | 0;
      Bh = Ah | 0;
      Bl = Al | 0;
      const All = u64_default.add3L(T1l, sigma0l, MAJl);
      Ah = u64_default.add3H(All, T1h, sigma0h, MAJh);
      Al = All | 0;
    }
    ({ h: Ah, l: Al } = u64_default.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
    ({ h: Bh, l: Bl } = u64_default.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
    ({ h: Ch, l: Cl } = u64_default.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
    ({ h: Dh, l: Dl } = u64_default.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
    ({ h: Eh, l: El } = u64_default.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
    ({ h: Fh, l: Fl } = u64_default.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
    ({ h: Gh, l: Gl } = u64_default.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
    ({ h: Hh, l: Hl } = u64_default.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
    this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
  }
  roundClean() {
    SHA512_W_H.fill(0);
    SHA512_W_L.fill(0);
  }
  destroy() {
    this.buffer.fill(0);
    this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
var sha5122 = /* @__PURE__ */ wrapConstructor(() => new SHA512());

// node_modules/.pnpm/@noble+curves@1.2.0/node_modules/@noble/curves/esm/abstract/utils.js
var utils_exports = {};
__export(utils_exports, {
  bitGet: () => bitGet,
  bitLen: () => bitLen,
  bitMask: () => bitMask,
  bitSet: () => bitSet,
  bytesToHex: () => bytesToHex,
  bytesToNumberBE: () => bytesToNumberBE,
  bytesToNumberLE: () => bytesToNumberLE,
  concatBytes: () => concatBytes2,
  createHmacDrbg: () => createHmacDrbg,
  ensureBytes: () => ensureBytes,
  equalBytes: () => equalBytes,
  hexToBytes: () => hexToBytes,
  hexToNumber: () => hexToNumber,
  numberToBytesBE: () => numberToBytesBE,
  numberToBytesLE: () => numberToBytesLE,
  numberToHexUnpadded: () => numberToHexUnpadded,
  numberToVarBytesBE: () => numberToVarBytesBE,
  utf8ToBytes: () => utf8ToBytes2,
  validateObject: () => validateObject
});
var _0n = BigInt(0);
var _1n = BigInt(1);
var _2n = BigInt(2);
var u8a2 = (a) => a instanceof Uint8Array;
var hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_2, i) => i.toString(16).padStart(2, "0"));
function bytesToHex(bytes3) {
  if (!u8a2(bytes3))
    throw new Error("Uint8Array expected");
  let hex = "";
  for (let i = 0; i < bytes3.length; i++) {
    hex += hexes[bytes3[i]];
  }
  return hex;
}
function numberToHexUnpadded(num) {
  const hex = num.toString(16);
  return hex.length & 1 ? `0${hex}` : hex;
}
function hexToNumber(hex) {
  if (typeof hex !== "string")
    throw new Error("hex string expected, got " + typeof hex);
  return BigInt(hex === "" ? "0" : `0x${hex}`);
}
function hexToBytes(hex) {
  if (typeof hex !== "string")
    throw new Error("hex string expected, got " + typeof hex);
  const len = hex.length;
  if (len % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + len);
  const array = new Uint8Array(len / 2);
  for (let i = 0; i < array.length; i++) {
    const j = i * 2;
    const hexByte = hex.slice(j, j + 2);
    const byte = Number.parseInt(hexByte, 16);
    if (Number.isNaN(byte) || byte < 0)
      throw new Error("Invalid byte sequence");
    array[i] = byte;
  }
  return array;
}
function bytesToNumberBE(bytes3) {
  return hexToNumber(bytesToHex(bytes3));
}
function bytesToNumberLE(bytes3) {
  if (!u8a2(bytes3))
    throw new Error("Uint8Array expected");
  return hexToNumber(bytesToHex(Uint8Array.from(bytes3).reverse()));
}
function numberToBytesBE(n, len) {
  return hexToBytes(n.toString(16).padStart(len * 2, "0"));
}
function numberToBytesLE(n, len) {
  return numberToBytesBE(n, len).reverse();
}
function numberToVarBytesBE(n) {
  return hexToBytes(numberToHexUnpadded(n));
}
function ensureBytes(title, hex, expectedLength) {
  let res;
  if (typeof hex === "string") {
    try {
      res = hexToBytes(hex);
    } catch (e) {
      throw new Error(`${title} must be valid hex string, got "${hex}". Cause: ${e}`);
    }
  } else if (u8a2(hex)) {
    res = Uint8Array.from(hex);
  } else {
    throw new Error(`${title} must be hex string or Uint8Array`);
  }
  const len = res.length;
  if (typeof expectedLength === "number" && len !== expectedLength)
    throw new Error(`${title} expected ${expectedLength} bytes, got ${len}`);
  return res;
}
function concatBytes2(...arrays) {
  const r = new Uint8Array(arrays.reduce((sum, a) => sum + a.length, 0));
  let pad = 0;
  arrays.forEach((a) => {
    if (!u8a2(a))
      throw new Error("Uint8Array expected");
    r.set(a, pad);
    pad += a.length;
  });
  return r;
}
function equalBytes(b1, b2) {
  if (b1.length !== b2.length)
    return false;
  for (let i = 0; i < b1.length; i++)
    if (b1[i] !== b2[i])
      return false;
  return true;
}
function utf8ToBytes2(str) {
  if (typeof str !== "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
  return new Uint8Array(new TextEncoder().encode(str));
}
function bitLen(n) {
  let len;
  for (len = 0; n > _0n; n >>= _1n, len += 1)
    ;
  return len;
}
function bitGet(n, pos) {
  return n >> BigInt(pos) & _1n;
}
var bitSet = (n, pos, value) => {
  return n | (value ? _1n : _0n) << BigInt(pos);
};
var bitMask = (n) => (_2n << BigInt(n - 1)) - _1n;
var u8n = (data) => new Uint8Array(data);
var u8fr = (arr) => Uint8Array.from(arr);
function createHmacDrbg(hashLen, qByteLen, hmacFn) {
  if (typeof hashLen !== "number" || hashLen < 2)
    throw new Error("hashLen must be a number");
  if (typeof qByteLen !== "number" || qByteLen < 2)
    throw new Error("qByteLen must be a number");
  if (typeof hmacFn !== "function")
    throw new Error("hmacFn must be a function");
  let v2 = u8n(hashLen);
  let k2 = u8n(hashLen);
  let i = 0;
  const reset = () => {
    v2.fill(1);
    k2.fill(0);
    i = 0;
  };
  const h2 = (...b) => hmacFn(k2, v2, ...b);
  const reseed = (seed = u8n()) => {
    k2 = h2(u8fr([0]), seed);
    v2 = h2();
    if (seed.length === 0)
      return;
    k2 = h2(u8fr([1]), seed);
    v2 = h2();
  };
  const gen2 = () => {
    if (i++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let len = 0;
    const out = [];
    while (len < qByteLen) {
      v2 = h2();
      const sl = v2.slice();
      out.push(sl);
      len += v2.length;
    }
    return concatBytes2(...out);
  };
  const genUntil = (seed, pred) => {
    reset();
    reseed(seed);
    let res = void 0;
    while (!(res = pred(gen2())))
      reseed();
    reset();
    return res;
  };
  return genUntil;
}
var validatorFns = {
  bigint: (val) => typeof val === "bigint",
  function: (val) => typeof val === "function",
  boolean: (val) => typeof val === "boolean",
  string: (val) => typeof val === "string",
  stringOrUint8Array: (val) => typeof val === "string" || val instanceof Uint8Array,
  isSafeInteger: (val) => Number.isSafeInteger(val),
  array: (val) => Array.isArray(val),
  field: (val, object) => object.Fp.isValid(val),
  hash: (val) => typeof val === "function" && Number.isSafeInteger(val.outputLen)
};
function validateObject(object, validators3, optValidators = {}) {
  const checkField = (fieldName, type, isOptional) => {
    const checkVal = validatorFns[type];
    if (typeof checkVal !== "function")
      throw new Error(`Invalid validator "${type}", expected function`);
    const val = object[fieldName];
    if (isOptional && val === void 0)
      return;
    if (!checkVal(val, object)) {
      throw new Error(`Invalid param ${String(fieldName)}=${val} (${typeof val}), expected ${type}`);
    }
  };
  for (const [fieldName, type] of Object.entries(validators3))
    checkField(fieldName, type, false);
  for (const [fieldName, type] of Object.entries(optValidators))
    checkField(fieldName, type, true);
  return object;
}

// node_modules/.pnpm/@noble+curves@1.2.0/node_modules/@noble/curves/esm/abstract/modular.js
var _0n2 = BigInt(0);
var _1n2 = BigInt(1);
var _2n2 = BigInt(2);
var _3n = BigInt(3);
var _4n = BigInt(4);
var _5n = BigInt(5);
var _8n = BigInt(8);
var _9n = BigInt(9);
var _16n = BigInt(16);
function mod(a, b) {
  const result = a % b;
  return result >= _0n2 ? result : b + result;
}
function pow(num, power, modulo) {
  if (modulo <= _0n2 || power < _0n2)
    throw new Error("Expected power/modulo > 0");
  if (modulo === _1n2)
    return _0n2;
  let res = _1n2;
  while (power > _0n2) {
    if (power & _1n2)
      res = res * num % modulo;
    num = num * num % modulo;
    power >>= _1n2;
  }
  return res;
}
function pow2(x, power, modulo) {
  let res = x;
  while (power-- > _0n2) {
    res *= res;
    res %= modulo;
  }
  return res;
}
function invert(number3, modulo) {
  if (number3 === _0n2 || modulo <= _0n2) {
    throw new Error(`invert: expected positive integers, got n=${number3} mod=${modulo}`);
  }
  let a = mod(number3, modulo);
  let b = modulo;
  let x = _0n2, y = _1n2, u = _1n2, v2 = _0n2;
  while (a !== _0n2) {
    const q = b / a;
    const r = b % a;
    const m = x - u * q;
    const n = y - v2 * q;
    b = a, a = r, x = u, y = v2, u = m, v2 = n;
  }
  const gcd2 = b;
  if (gcd2 !== _1n2)
    throw new Error("invert: does not exist");
  return mod(x, modulo);
}
function tonelliShanks(P) {
  const legendreC = (P - _1n2) / _2n2;
  let Q, S2, Z2;
  for (Q = P - _1n2, S2 = 0; Q % _2n2 === _0n2; Q /= _2n2, S2++)
    ;
  for (Z2 = _2n2; Z2 < P && pow(Z2, legendreC, P) !== P - _1n2; Z2++)
    ;
  if (S2 === 1) {
    const p1div4 = (P + _1n2) / _4n;
    return function tonelliFast(Fp4, n) {
      const root = Fp4.pow(n, p1div4);
      if (!Fp4.eql(Fp4.sqr(root), n))
        throw new Error("Cannot find square root");
      return root;
    };
  }
  const Q1div2 = (Q + _1n2) / _2n2;
  return function tonelliSlow(Fp4, n) {
    if (Fp4.pow(n, legendreC) === Fp4.neg(Fp4.ONE))
      throw new Error("Cannot find square root");
    let r = S2;
    let g = Fp4.pow(Fp4.mul(Fp4.ONE, Z2), Q);
    let x = Fp4.pow(n, Q1div2);
    let b = Fp4.pow(n, Q);
    while (!Fp4.eql(b, Fp4.ONE)) {
      if (Fp4.eql(b, Fp4.ZERO))
        return Fp4.ZERO;
      let m = 1;
      for (let t2 = Fp4.sqr(b); m < r; m++) {
        if (Fp4.eql(t2, Fp4.ONE))
          break;
        t2 = Fp4.sqr(t2);
      }
      const ge2 = Fp4.pow(g, _1n2 << BigInt(r - m - 1));
      g = Fp4.sqr(ge2);
      x = Fp4.mul(x, ge2);
      b = Fp4.mul(b, g);
      r = m;
    }
    return x;
  };
}
function FpSqrt(P) {
  if (P % _4n === _3n) {
    const p1div4 = (P + _1n2) / _4n;
    return function sqrt3mod4(Fp4, n) {
      const root = Fp4.pow(n, p1div4);
      if (!Fp4.eql(Fp4.sqr(root), n))
        throw new Error("Cannot find square root");
      return root;
    };
  }
  if (P % _8n === _5n) {
    const c1 = (P - _5n) / _8n;
    return function sqrt5mod8(Fp4, n) {
      const n2 = Fp4.mul(n, _2n2);
      const v2 = Fp4.pow(n2, c1);
      const nv = Fp4.mul(n, v2);
      const i = Fp4.mul(Fp4.mul(nv, _2n2), v2);
      const root = Fp4.mul(nv, Fp4.sub(i, Fp4.ONE));
      if (!Fp4.eql(Fp4.sqr(root), n))
        throw new Error("Cannot find square root");
      return root;
    };
  }
  if (P % _16n === _9n) {
  }
  return tonelliShanks(P);
}
var isNegativeLE = (num, modulo) => (mod(num, modulo) & _1n2) === _1n2;
var FIELD_FIELDS = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function validateField(field) {
  const initial = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  };
  const opts = FIELD_FIELDS.reduce((map, val) => {
    map[val] = "function";
    return map;
  }, initial);
  return validateObject(field, opts);
}
function FpPow(f2, num, power) {
  if (power < _0n2)
    throw new Error("Expected power > 0");
  if (power === _0n2)
    return f2.ONE;
  if (power === _1n2)
    return num;
  let p = f2.ONE;
  let d = num;
  while (power > _0n2) {
    if (power & _1n2)
      p = f2.mul(p, d);
    d = f2.sqr(d);
    power >>= _1n2;
  }
  return p;
}
function FpInvertBatch(f2, nums) {
  const tmp = new Array(nums.length);
  const lastMultiplied = nums.reduce((acc, num, i) => {
    if (f2.is0(num))
      return acc;
    tmp[i] = acc;
    return f2.mul(acc, num);
  }, f2.ONE);
  const inverted = f2.inv(lastMultiplied);
  nums.reduceRight((acc, num, i) => {
    if (f2.is0(num))
      return acc;
    tmp[i] = f2.mul(acc, tmp[i]);
    return f2.mul(acc, num);
  }, inverted);
  return tmp;
}
function nLength(n, nBitLength) {
  const _nBitLength = nBitLength !== void 0 ? nBitLength : n.toString(2).length;
  const nByteLength = Math.ceil(_nBitLength / 8);
  return { nBitLength: _nBitLength, nByteLength };
}
function Field(ORDER, bitLen2, isLE3 = false, redef = {}) {
  if (ORDER <= _0n2)
    throw new Error(`Expected Field ORDER > 0, got ${ORDER}`);
  const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen2);
  if (BYTES > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const sqrtP = FpSqrt(ORDER);
  const f2 = Object.freeze({
    ORDER,
    BITS,
    BYTES,
    MASK: bitMask(BITS),
    ZERO: _0n2,
    ONE: _1n2,
    create: (num) => mod(num, ORDER),
    isValid: (num) => {
      if (typeof num !== "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof num}`);
      return _0n2 <= num && num < ORDER;
    },
    is0: (num) => num === _0n2,
    isOdd: (num) => (num & _1n2) === _1n2,
    neg: (num) => mod(-num, ORDER),
    eql: (lhs, rhs) => lhs === rhs,
    sqr: (num) => mod(num * num, ORDER),
    add: (lhs, rhs) => mod(lhs + rhs, ORDER),
    sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
    mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
    pow: (num, power) => FpPow(f2, num, power),
    div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
    // Same as above, but doesn't normalize
    sqrN: (num) => num * num,
    addN: (lhs, rhs) => lhs + rhs,
    subN: (lhs, rhs) => lhs - rhs,
    mulN: (lhs, rhs) => lhs * rhs,
    inv: (num) => invert(num, ORDER),
    sqrt: redef.sqrt || ((n) => sqrtP(f2, n)),
    invertBatch: (lst) => FpInvertBatch(f2, lst),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (a, b, c) => c ? b : a,
    toBytes: (num) => isLE3 ? numberToBytesLE(num, BYTES) : numberToBytesBE(num, BYTES),
    fromBytes: (bytes3) => {
      if (bytes3.length !== BYTES)
        throw new Error(`Fp.fromBytes: expected ${BYTES}, got ${bytes3.length}`);
      return isLE3 ? bytesToNumberLE(bytes3) : bytesToNumberBE(bytes3);
    }
  });
  return Object.freeze(f2);
}
function FpSqrtEven(Fp4, elm) {
  if (!Fp4.isOdd)
    throw new Error(`Field doesn't have isOdd`);
  const root = Fp4.sqrt(elm);
  return Fp4.isOdd(root) ? Fp4.neg(root) : root;
}
function getFieldBytesLength(fieldOrder) {
  if (typeof fieldOrder !== "bigint")
    throw new Error("field order must be bigint");
  const bitLength = fieldOrder.toString(2).length;
  return Math.ceil(bitLength / 8);
}
function getMinHashLength(fieldOrder) {
  const length3 = getFieldBytesLength(fieldOrder);
  return length3 + Math.ceil(length3 / 2);
}
function mapHashToField(key, fieldOrder, isLE3 = false) {
  const len = key.length;
  const fieldLen = getFieldBytesLength(fieldOrder);
  const minLen = getMinHashLength(fieldOrder);
  if (len < 16 || len < minLen || len > 1024)
    throw new Error(`expected ${minLen}-1024 bytes of input, got ${len}`);
  const num = isLE3 ? bytesToNumberBE(key) : bytesToNumberLE(key);
  const reduced = mod(num, fieldOrder - _1n2) + _1n2;
  return isLE3 ? numberToBytesLE(reduced, fieldLen) : numberToBytesBE(reduced, fieldLen);
}

// node_modules/.pnpm/@noble+curves@1.2.0/node_modules/@noble/curves/esm/abstract/curve.js
var _0n3 = BigInt(0);
var _1n3 = BigInt(1);
function wNAF(c, bits) {
  const constTimeNegate = (condition, item) => {
    const neg = item.negate();
    return condition ? neg : item;
  };
  const opts = (W2) => {
    const windows = Math.ceil(bits / W2) + 1;
    const windowSize = 2 ** (W2 - 1);
    return { windows, windowSize };
  };
  return {
    constTimeNegate,
    // non-const time multiplication ladder
    unsafeLadder(elm, n) {
      let p = c.ZERO;
      let d = elm;
      while (n > _0n3) {
        if (n & _1n3)
          p = p.add(d);
        d = d.double();
        n >>= _1n3;
      }
      return p;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(elm, W2) {
      const { windows, windowSize } = opts(W2);
      const points = [];
      let p = elm;
      let base3 = p;
      for (let window2 = 0; window2 < windows; window2++) {
        base3 = p;
        points.push(base3);
        for (let i = 1; i < windowSize; i++) {
          base3 = base3.add(p);
          points.push(base3);
        }
        p = base3.double();
      }
      return points;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(W2, precomputes, n) {
      const { windows, windowSize } = opts(W2);
      let p = c.ZERO;
      let f2 = c.BASE;
      const mask = BigInt(2 ** W2 - 1);
      const maxNumber = 2 ** W2;
      const shiftBy = BigInt(W2);
      for (let window2 = 0; window2 < windows; window2++) {
        const offset = window2 * windowSize;
        let wbits = Number(n & mask);
        n >>= shiftBy;
        if (wbits > windowSize) {
          wbits -= maxNumber;
          n += _1n3;
        }
        const offset1 = offset;
        const offset2 = offset + Math.abs(wbits) - 1;
        const cond1 = window2 % 2 !== 0;
        const cond2 = wbits < 0;
        if (wbits === 0) {
          f2 = f2.add(constTimeNegate(cond1, precomputes[offset1]));
        } else {
          p = p.add(constTimeNegate(cond2, precomputes[offset2]));
        }
      }
      return { p, f: f2 };
    },
    wNAFCached(P, precomputesMap, n, transform) {
      const W2 = P._WINDOW_SIZE || 1;
      let comp = precomputesMap.get(P);
      if (!comp) {
        comp = this.precomputeWindow(P, W2);
        if (W2 !== 1) {
          precomputesMap.set(P, transform(comp));
        }
      }
      return this.wNAF(W2, comp, n);
    }
  };
}
function validateBasic(curve) {
  validateField(curve.Fp);
  validateObject(curve, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  });
  return Object.freeze({
    ...nLength(curve.n, curve.nBitLength),
    ...curve,
    ...{ p: curve.Fp.ORDER }
  });
}

// node_modules/.pnpm/@noble+curves@1.2.0/node_modules/@noble/curves/esm/abstract/edwards.js
var _0n4 = BigInt(0);
var _1n4 = BigInt(1);
var _2n3 = BigInt(2);
var _8n2 = BigInt(8);
var VERIFY_DEFAULT = { zip215: true };
function validateOpts(curve) {
  const opts = validateBasic(curve);
  validateObject(curve, {
    hash: "function",
    a: "bigint",
    d: "bigint",
    randomBytes: "function"
  }, {
    adjustScalarBytes: "function",
    domain: "function",
    uvRatio: "function",
    mapToCurve: "function"
  });
  return Object.freeze({ ...opts });
}
function twistedEdwards(curveDef) {
  const CURVE = validateOpts(curveDef);
  const { Fp: Fp4, n: CURVE_ORDER, prehash, hash: cHash, randomBytes: randomBytes2, nByteLength, h: cofactor } = CURVE;
  const MASK = _2n3 << BigInt(nByteLength * 8) - _1n4;
  const modP = Fp4.create;
  const uvRatio2 = CURVE.uvRatio || ((u, v2) => {
    try {
      return { isValid: true, value: Fp4.sqrt(u * Fp4.inv(v2)) };
    } catch (e) {
      return { isValid: false, value: _0n4 };
    }
  });
  const adjustScalarBytes2 = CURVE.adjustScalarBytes || ((bytes3) => bytes3);
  const domain = CURVE.domain || ((data, ctx, phflag) => {
    if (ctx.length || phflag)
      throw new Error("Contexts/pre-hash are not supported");
    return data;
  });
  const inBig = (n) => typeof n === "bigint" && _0n4 < n;
  const inRange = (n, max) => inBig(n) && inBig(max) && n < max;
  const in0MaskRange = (n) => n === _0n4 || inRange(n, MASK);
  function assertInRange(n, max) {
    if (inRange(n, max))
      return n;
    throw new Error(`Expected valid scalar < ${max}, got ${typeof n} ${n}`);
  }
  function assertGE0(n) {
    return n === _0n4 ? n : assertInRange(n, CURVE_ORDER);
  }
  const pointPrecomputes = /* @__PURE__ */ new Map();
  function isPoint(other) {
    if (!(other instanceof Point2))
      throw new Error("ExtendedPoint expected");
  }
  class Point2 {
    constructor(ex, ey, ez, et) {
      this.ex = ex;
      this.ey = ey;
      this.ez = ez;
      this.et = et;
      if (!in0MaskRange(ex))
        throw new Error("x required");
      if (!in0MaskRange(ey))
        throw new Error("y required");
      if (!in0MaskRange(ez))
        throw new Error("z required");
      if (!in0MaskRange(et))
        throw new Error("t required");
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(p) {
      if (p instanceof Point2)
        throw new Error("extended point not allowed");
      const { x, y } = p || {};
      if (!in0MaskRange(x) || !in0MaskRange(y))
        throw new Error("invalid affine point");
      return new Point2(x, y, _1n4, modP(x * y));
    }
    static normalizeZ(points) {
      const toInv = Fp4.invertBatch(points.map((p) => p.ez));
      return points.map((p, i) => p.toAffine(toInv[i])).map(Point2.fromAffine);
    }
    // "Private method", don't use it directly
    _setWindowSize(windowSize) {
      this._WINDOW_SIZE = windowSize;
      pointPrecomputes.delete(this);
    }
    // Not required for fromHex(), which always creates valid points.
    // Could be useful for fromAffine().
    assertValidity() {
      const { a, d } = CURVE;
      if (this.is0())
        throw new Error("bad point: ZERO");
      const { ex: X, ey: Y2, ez: Z2, et: T } = this;
      const X2 = modP(X * X);
      const Y22 = modP(Y2 * Y2);
      const Z22 = modP(Z2 * Z2);
      const Z4 = modP(Z22 * Z22);
      const aX2 = modP(X2 * a);
      const left = modP(Z22 * modP(aX2 + Y22));
      const right = modP(Z4 + modP(d * modP(X2 * Y22)));
      if (left !== right)
        throw new Error("bad point: equation left != right (1)");
      const XY = modP(X * Y2);
      const ZT = modP(Z2 * T);
      if (XY !== ZT)
        throw new Error("bad point: equation left != right (2)");
    }
    // Compare one point to another.
    equals(other) {
      isPoint(other);
      const { ex: X1, ey: Y1, ez: Z1 } = this;
      const { ex: X2, ey: Y2, ez: Z2 } = other;
      const X1Z2 = modP(X1 * Z2);
      const X2Z1 = modP(X2 * Z1);
      const Y1Z2 = modP(Y1 * Z2);
      const Y2Z1 = modP(Y2 * Z1);
      return X1Z2 === X2Z1 && Y1Z2 === Y2Z1;
    }
    is0() {
      return this.equals(Point2.ZERO);
    }
    negate() {
      return new Point2(modP(-this.ex), this.ey, this.ez, modP(-this.et));
    }
    // Fast algo for doubling Extended Point.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#doubling-dbl-2008-hwcd
    // Cost: 4M + 4S + 1*a + 6add + 1*2.
    double() {
      const { a } = CURVE;
      const { ex: X1, ey: Y1, ez: Z1 } = this;
      const A = modP(X1 * X1);
      const B = modP(Y1 * Y1);
      const C2 = modP(_2n3 * modP(Z1 * Z1));
      const D2 = modP(a * A);
      const x1y1 = X1 + Y1;
      const E = modP(modP(x1y1 * x1y1) - A - B);
      const G2 = D2 + B;
      const F = G2 - C2;
      const H2 = D2 - B;
      const X3 = modP(E * F);
      const Y3 = modP(G2 * H2);
      const T3 = modP(E * H2);
      const Z3 = modP(F * G2);
      return new Point2(X3, Y3, Z3, T3);
    }
    // Fast algo for adding 2 Extended Points.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#addition-add-2008-hwcd
    // Cost: 9M + 1*a + 1*d + 7add.
    add(other) {
      isPoint(other);
      const { a, d } = CURVE;
      const { ex: X1, ey: Y1, ez: Z1, et: T1 } = this;
      const { ex: X2, ey: Y2, ez: Z2, et: T2 } = other;
      if (a === BigInt(-1)) {
        const A2 = modP((Y1 - X1) * (Y2 + X2));
        const B2 = modP((Y1 + X1) * (Y2 - X2));
        const F2 = modP(B2 - A2);
        if (F2 === _0n4)
          return this.double();
        const C3 = modP(Z1 * _2n3 * T2);
        const D3 = modP(T1 * _2n3 * Z2);
        const E2 = D3 + C3;
        const G3 = B2 + A2;
        const H3 = D3 - C3;
        const X32 = modP(E2 * F2);
        const Y32 = modP(G3 * H3);
        const T32 = modP(E2 * H3);
        const Z32 = modP(F2 * G3);
        return new Point2(X32, Y32, Z32, T32);
      }
      const A = modP(X1 * X2);
      const B = modP(Y1 * Y2);
      const C2 = modP(T1 * d * T2);
      const D2 = modP(Z1 * Z2);
      const E = modP((X1 + Y1) * (X2 + Y2) - A - B);
      const F = D2 - C2;
      const G2 = D2 + C2;
      const H2 = modP(B - a * A);
      const X3 = modP(E * F);
      const Y3 = modP(G2 * H2);
      const T3 = modP(E * H2);
      const Z3 = modP(F * G2);
      return new Point2(X3, Y3, Z3, T3);
    }
    subtract(other) {
      return this.add(other.negate());
    }
    wNAF(n) {
      return wnaf.wNAFCached(this, pointPrecomputes, n, Point2.normalizeZ);
    }
    // Constant-time multiplication.
    multiply(scalar) {
      const { p, f: f2 } = this.wNAF(assertInRange(scalar, CURVE_ORDER));
      return Point2.normalizeZ([p, f2])[0];
    }
    // Non-constant-time multiplication. Uses double-and-add algorithm.
    // It's faster, but should only be used when you don't care about
    // an exposed private key e.g. sig verification.
    // Does NOT allow scalars higher than CURVE.n.
    multiplyUnsafe(scalar) {
      let n = assertGE0(scalar);
      if (n === _0n4)
        return I;
      if (this.equals(I) || n === _1n4)
        return this;
      if (this.equals(G))
        return this.wNAF(n).p;
      return wnaf.unsafeLadder(this, n);
    }
    // Checks if point is of small order.
    // If you add something to small order point, you will have "dirty"
    // point with torsion component.
    // Multiplies point by cofactor and checks if the result is 0.
    isSmallOrder() {
      return this.multiplyUnsafe(cofactor).is0();
    }
    // Multiplies point by curve order and checks if the result is 0.
    // Returns `false` is the point is dirty.
    isTorsionFree() {
      return wnaf.unsafeLadder(this, CURVE_ORDER).is0();
    }
    // Converts Extended point to default (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    toAffine(iz) {
      const { ex: x, ey: y, ez: z } = this;
      const is0 = this.is0();
      if (iz == null)
        iz = is0 ? _8n2 : Fp4.inv(z);
      const ax = modP(x * iz);
      const ay = modP(y * iz);
      const zz = modP(z * iz);
      if (is0)
        return { x: _0n4, y: _1n4 };
      if (zz !== _1n4)
        throw new Error("invZ was invalid");
      return { x: ax, y: ay };
    }
    clearCofactor() {
      const { h: cofactor2 } = CURVE;
      if (cofactor2 === _1n4)
        return this;
      return this.multiplyUnsafe(cofactor2);
    }
    // Converts hash string or Uint8Array to Point.
    // Uses algo from RFC8032 5.1.3.
    static fromHex(hex, zip215 = false) {
      const { d, a } = CURVE;
      const len = Fp4.BYTES;
      hex = ensureBytes("pointHex", hex, len);
      const normed = hex.slice();
      const lastByte = hex[len - 1];
      normed[len - 1] = lastByte & ~128;
      const y = bytesToNumberLE(normed);
      if (y === _0n4) {
      } else {
        if (zip215)
          assertInRange(y, MASK);
        else
          assertInRange(y, Fp4.ORDER);
      }
      const y2 = modP(y * y);
      const u = modP(y2 - _1n4);
      const v2 = modP(d * y2 - a);
      let { isValid, value: x } = uvRatio2(u, v2);
      if (!isValid)
        throw new Error("Point.fromHex: invalid y coordinate");
      const isXOdd = (x & _1n4) === _1n4;
      const isLastByteOdd = (lastByte & 128) !== 0;
      if (!zip215 && x === _0n4 && isLastByteOdd)
        throw new Error("Point.fromHex: x=0 and x_0=1");
      if (isLastByteOdd !== isXOdd)
        x = modP(-x);
      return Point2.fromAffine({ x, y });
    }
    static fromPrivateKey(privKey) {
      return getExtendedPublicKey(privKey).point;
    }
    toRawBytes() {
      const { x, y } = this.toAffine();
      const bytes3 = numberToBytesLE(y, Fp4.BYTES);
      bytes3[bytes3.length - 1] |= x & _1n4 ? 128 : 0;
      return bytes3;
    }
    toHex() {
      return bytesToHex(this.toRawBytes());
    }
  }
  Point2.BASE = new Point2(CURVE.Gx, CURVE.Gy, _1n4, modP(CURVE.Gx * CURVE.Gy));
  Point2.ZERO = new Point2(_0n4, _1n4, _1n4, _0n4);
  const { BASE: G, ZERO: I } = Point2;
  const wnaf = wNAF(Point2, nByteLength * 8);
  function modN(a) {
    return mod(a, CURVE_ORDER);
  }
  function modN_LE(hash3) {
    return modN(bytesToNumberLE(hash3));
  }
  function getExtendedPublicKey(key) {
    const len = nByteLength;
    key = ensureBytes("private key", key, len);
    const hashed = ensureBytes("hashed private key", cHash(key), 2 * len);
    const head = adjustScalarBytes2(hashed.slice(0, len));
    const prefix = hashed.slice(len, 2 * len);
    const scalar = modN_LE(head);
    const point = G.multiply(scalar);
    const pointBytes = point.toRawBytes();
    return { head, prefix, scalar, point, pointBytes };
  }
  function getPublicKey(privKey) {
    return getExtendedPublicKey(privKey).pointBytes;
  }
  function hashDomainToScalar(context = new Uint8Array(), ...msgs) {
    const msg = concatBytes2(...msgs);
    return modN_LE(cHash(domain(msg, ensureBytes("context", context), !!prehash)));
  }
  function sign(msg, privKey, options = {}) {
    msg = ensureBytes("message", msg);
    if (prehash)
      msg = prehash(msg);
    const { prefix, scalar, pointBytes } = getExtendedPublicKey(privKey);
    const r = hashDomainToScalar(options.context, prefix, msg);
    const R = G.multiply(r).toRawBytes();
    const k2 = hashDomainToScalar(options.context, R, pointBytes, msg);
    const s = modN(r + k2 * scalar);
    assertGE0(s);
    const res = concatBytes2(R, numberToBytesLE(s, Fp4.BYTES));
    return ensureBytes("result", res, nByteLength * 2);
  }
  const verifyOpts = VERIFY_DEFAULT;
  function verify(sig, msg, publicKey, options = verifyOpts) {
    const { context, zip215 } = options;
    const len = Fp4.BYTES;
    sig = ensureBytes("signature", sig, 2 * len);
    msg = ensureBytes("message", msg);
    if (prehash)
      msg = prehash(msg);
    const s = bytesToNumberLE(sig.slice(len, 2 * len));
    let A, R, SB;
    try {
      A = Point2.fromHex(publicKey, zip215);
      R = Point2.fromHex(sig.slice(0, len), zip215);
      SB = G.multiplyUnsafe(s);
    } catch (error) {
      return false;
    }
    if (!zip215 && A.isSmallOrder())
      return false;
    const k2 = hashDomainToScalar(context, R.toRawBytes(), A.toRawBytes(), msg);
    const RkA = R.add(A.multiplyUnsafe(k2));
    return RkA.subtract(SB).clearCofactor().equals(Point2.ZERO);
  }
  G._setWindowSize(8);
  const utils = {
    getExtendedPublicKey,
    // ed25519 private keys are uniform 32b. No need to check for modulo bias, like in secp256k1.
    randomPrivateKey: () => randomBytes2(Fp4.BYTES),
    /**
     * We're doing scalar multiplication (used in getPublicKey etc) with precomputed BASE_POINT
     * values. This slows down first getPublicKey() by milliseconds (see Speed section),
     * but allows to speed-up subsequent getPublicKey() calls up to 20x.
     * @param windowSize 2, 4, 8, 16
     */
    precompute(windowSize = 8, point = Point2.BASE) {
      point._setWindowSize(windowSize);
      point.multiply(BigInt(3));
      return point;
    }
  };
  return {
    CURVE,
    getPublicKey,
    sign,
    verify,
    ExtendedPoint: Point2,
    utils
  };
}

// node_modules/.pnpm/@noble+curves@1.2.0/node_modules/@noble/curves/esm/ed25519.js
var ED25519_P = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");
var ED25519_SQRT_M1 = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
var _0n5 = BigInt(0);
var _1n5 = BigInt(1);
var _2n4 = BigInt(2);
var _5n2 = BigInt(5);
var _10n = BigInt(10);
var _20n = BigInt(20);
var _40n = BigInt(40);
var _80n = BigInt(80);
function ed25519_pow_2_252_3(x) {
  const P = ED25519_P;
  const x2 = x * x % P;
  const b2 = x2 * x % P;
  const b4 = pow2(b2, _2n4, P) * b2 % P;
  const b5 = pow2(b4, _1n5, P) * x % P;
  const b10 = pow2(b5, _5n2, P) * b5 % P;
  const b20 = pow2(b10, _10n, P) * b10 % P;
  const b40 = pow2(b20, _20n, P) * b20 % P;
  const b80 = pow2(b40, _40n, P) * b40 % P;
  const b160 = pow2(b80, _80n, P) * b80 % P;
  const b240 = pow2(b160, _80n, P) * b80 % P;
  const b250 = pow2(b240, _10n, P) * b10 % P;
  const pow_p_5_8 = pow2(b250, _2n4, P) * x % P;
  return { pow_p_5_8, b2 };
}
function adjustScalarBytes(bytes3) {
  bytes3[0] &= 248;
  bytes3[31] &= 127;
  bytes3[31] |= 64;
  return bytes3;
}
function uvRatio(u, v2) {
  const P = ED25519_P;
  const v3 = mod(v2 * v2 * v2, P);
  const v7 = mod(v3 * v3 * v2, P);
  const pow3 = ed25519_pow_2_252_3(u * v7).pow_p_5_8;
  let x = mod(u * v3 * pow3, P);
  const vx2 = mod(v2 * x * x, P);
  const root1 = x;
  const root2 = mod(x * ED25519_SQRT_M1, P);
  const useRoot1 = vx2 === u;
  const useRoot2 = vx2 === mod(-u, P);
  const noRoot = vx2 === mod(-u * ED25519_SQRT_M1, P);
  if (useRoot1)
    x = root1;
  if (useRoot2 || noRoot)
    x = root2;
  if (isNegativeLE(x, P))
    x = mod(-x, P);
  return { isValid: useRoot1 || useRoot2, value: x };
}
var Fp = Field(ED25519_P, void 0, true);
var ed25519Defaults = {
  // Param: a
  a: BigInt(-1),
  // d is equal to -121665/121666 over finite field.
  // Negative number is P - number, and division is invert(number, P)
  d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
  // Finite field 𝔽p over which we'll do calculations; 2n**255n - 19n
  Fp,
  // Subgroup order: how many points curve has
  // 2n**252n + 27742317777372353535851937790883648493n;
  n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
  // Cofactor
  h: BigInt(8),
  // Base point (x, y) aka generator point
  Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
  Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
  hash: sha5122,
  randomBytes,
  adjustScalarBytes,
  // dom2
  // Ratio of u to v. Allows us to combine inversion and square root. Uses algo from RFC8032 5.1.3.
  // Constant-time, u/√v
  uvRatio
};
var ed25519 = /* @__PURE__ */ twistedEdwards(ed25519Defaults);
function ed25519_domain(data, ctx, phflag) {
  if (ctx.length > 255)
    throw new Error("Context is too big");
  return concatBytes(utf8ToBytes("SigEd25519 no Ed25519 collisions"), new Uint8Array([phflag ? 1 : 0, ctx.length]), ctx, data);
}
var ed25519ctx = /* @__PURE__ */ twistedEdwards({
  ...ed25519Defaults,
  domain: ed25519_domain
});
var ed25519ph = /* @__PURE__ */ twistedEdwards({
  ...ed25519Defaults,
  domain: ed25519_domain,
  prehash: sha5122
});
var ELL2_C1 = (Fp.ORDER + BigInt(3)) / BigInt(8);
var ELL2_C2 = Fp.pow(_2n4, ELL2_C1);
var ELL2_C3 = Fp.sqrt(Fp.neg(Fp.ONE));
var ELL2_C4 = (Fp.ORDER - BigInt(5)) / BigInt(8);
var ELL2_J = BigInt(486662);
var ELL2_C1_EDWARDS = FpSqrtEven(Fp, Fp.neg(BigInt(486664)));
var SQRT_AD_MINUS_ONE = BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235");
var INVSQRT_A_MINUS_D = BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578");
var ONE_MINUS_D_SQ = BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838");
var D_MINUS_ONE_SQ = BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
var MAX_255B = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");

// node_modules/.pnpm/@noble+hashes@1.3.2/node_modules/@noble/hashes/esm/sha256.js
var Chi = (a, b, c) => a & b ^ ~a & c;
var Maj = (a, b, c) => a & b ^ a & c ^ b & c;
var SHA256_K = /* @__PURE__ */ new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
var IV = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
var SHA256_W = /* @__PURE__ */ new Uint32Array(64);
var SHA256 = class extends SHA2 {
  constructor() {
    super(64, 32, 8, false);
    this.A = IV[0] | 0;
    this.B = IV[1] | 0;
    this.C = IV[2] | 0;
    this.D = IV[3] | 0;
    this.E = IV[4] | 0;
    this.F = IV[5] | 0;
    this.G = IV[6] | 0;
    this.H = IV[7] | 0;
  }
  get() {
    const { A, B, C: C2, D: D2, E, F, G, H: H2 } = this;
    return [A, B, C2, D2, E, F, G, H2];
  }
  // prettier-ignore
  set(A, B, C2, D2, E, F, G, H2) {
    this.A = A | 0;
    this.B = B | 0;
    this.C = C2 | 0;
    this.D = D2 | 0;
    this.E = E | 0;
    this.F = F | 0;
    this.G = G | 0;
    this.H = H2 | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4)
      SHA256_W[i] = view.getUint32(offset, false);
    for (let i = 16; i < 64; i++) {
      const W15 = SHA256_W[i - 15];
      const W2 = SHA256_W[i - 2];
      const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
      const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
      SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
    }
    let { A, B, C: C2, D: D2, E, F, G, H: H2 } = this;
    for (let i = 0; i < 64; i++) {
      const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
      const T1 = H2 + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
      const sigma0 = rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22);
      const T2 = sigma0 + Maj(A, B, C2) | 0;
      H2 = G;
      G = F;
      F = E;
      E = D2 + T1 | 0;
      D2 = C2;
      C2 = B;
      B = A;
      A = T1 + T2 | 0;
    }
    A = A + this.A | 0;
    B = B + this.B | 0;
    C2 = C2 + this.C | 0;
    D2 = D2 + this.D | 0;
    E = E + this.E | 0;
    F = F + this.F | 0;
    G = G + this.G | 0;
    H2 = H2 + this.H | 0;
    this.set(A, B, C2, D2, E, F, G, H2);
  }
  roundClean() {
    SHA256_W.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0);
    this.buffer.fill(0);
  }
};
var sha2562 = /* @__PURE__ */ wrapConstructor(() => new SHA256());

// node_modules/.pnpm/@noble+hashes@1.3.2/node_modules/@noble/hashes/esm/ripemd160.js
var Rho = /* @__PURE__ */ new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]);
var Id = /* @__PURE__ */ Uint8Array.from({ length: 16 }, (_2, i) => i);
var Pi = /* @__PURE__ */ Id.map((i) => (9 * i + 5) % 16);
var idxL = [Id];
var idxR = [Pi];
for (let i = 0; i < 4; i++)
  for (let j of [idxL, idxR])
    j.push(j[i].map((k2) => Rho[k2]));
var shifts = /* @__PURE__ */ [
  [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
  [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
  [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
  [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
  [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]
].map((i) => new Uint8Array(i));
var shiftsL = /* @__PURE__ */ idxL.map((idx, i) => idx.map((j) => shifts[i][j]));
var shiftsR = /* @__PURE__ */ idxR.map((idx, i) => idx.map((j) => shifts[i][j]));
var Kl = /* @__PURE__ */ new Uint32Array([
  0,
  1518500249,
  1859775393,
  2400959708,
  2840853838
]);
var Kr = /* @__PURE__ */ new Uint32Array([
  1352829926,
  1548603684,
  1836072691,
  2053994217,
  0
]);
var rotl = (word, shift) => word << shift | word >>> 32 - shift;
function f(group, x, y, z) {
  if (group === 0)
    return x ^ y ^ z;
  else if (group === 1)
    return x & y | ~x & z;
  else if (group === 2)
    return (x | ~y) ^ z;
  else if (group === 3)
    return x & z | y & ~z;
  else
    return x ^ (y | ~z);
}
var BUF = /* @__PURE__ */ new Uint32Array(16);
var RIPEMD160 = class extends SHA2 {
  constructor() {
    super(64, 20, 8, true);
    this.h0 = 1732584193 | 0;
    this.h1 = 4023233417 | 0;
    this.h2 = 2562383102 | 0;
    this.h3 = 271733878 | 0;
    this.h4 = 3285377520 | 0;
  }
  get() {
    const { h0, h1, h2, h3, h4 } = this;
    return [h0, h1, h2, h3, h4];
  }
  set(h0, h1, h2, h3, h4) {
    this.h0 = h0 | 0;
    this.h1 = h1 | 0;
    this.h2 = h2 | 0;
    this.h3 = h3 | 0;
    this.h4 = h4 | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4)
      BUF[i] = view.getUint32(offset, true);
    let al = this.h0 | 0, ar = al, bl = this.h1 | 0, br = bl, cl = this.h2 | 0, cr = cl, dl = this.h3 | 0, dr = dl, el = this.h4 | 0, er = el;
    for (let group = 0; group < 5; group++) {
      const rGroup = 4 - group;
      const hbl = Kl[group], hbr = Kr[group];
      const rl = idxL[group], rr = idxR[group];
      const sl = shiftsL[group], sr = shiftsR[group];
      for (let i = 0; i < 16; i++) {
        const tl = rotl(al + f(group, bl, cl, dl) + BUF[rl[i]] + hbl, sl[i]) + el | 0;
        al = el, el = dl, dl = rotl(cl, 10) | 0, cl = bl, bl = tl;
      }
      for (let i = 0; i < 16; i++) {
        const tr = rotl(ar + f(rGroup, br, cr, dr) + BUF[rr[i]] + hbr, sr[i]) + er | 0;
        ar = er, er = dr, dr = rotl(cr, 10) | 0, cr = br, br = tr;
      }
    }
    this.set(this.h1 + cl + dr | 0, this.h2 + dl + er | 0, this.h3 + el + ar | 0, this.h4 + al + br | 0, this.h0 + bl + cr | 0);
  }
  roundClean() {
    BUF.fill(0);
  }
  destroy() {
    this.destroyed = true;
    this.buffer.fill(0);
    this.set(0, 0, 0, 0, 0);
  }
};
var ripemd160 = /* @__PURE__ */ wrapConstructor(() => new RIPEMD160());

// node_modules/.pnpm/@noble+hashes@1.3.2/node_modules/@noble/hashes/esm/sha3.js
var [SHA3_PI, SHA3_ROTL, _SHA3_IOTA] = [[], [], []];
var _0n6 = /* @__PURE__ */ BigInt(0);
var _1n6 = /* @__PURE__ */ BigInt(1);
var _2n5 = /* @__PURE__ */ BigInt(2);
var _7n = /* @__PURE__ */ BigInt(7);
var _256n = /* @__PURE__ */ BigInt(256);
var _0x71n = /* @__PURE__ */ BigInt(113);
for (let round = 0, R = _1n6, x = 1, y = 0; round < 24; round++) {
  [x, y] = [y, (2 * x + 3 * y) % 5];
  SHA3_PI.push(2 * (5 * y + x));
  SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
  let t = _0n6;
  for (let j = 0; j < 7; j++) {
    R = (R << _1n6 ^ (R >> _7n) * _0x71n) % _256n;
    if (R & _2n5)
      t ^= _1n6 << (_1n6 << /* @__PURE__ */ BigInt(j)) - _1n6;
  }
  _SHA3_IOTA.push(t);
}
var [SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */ split(_SHA3_IOTA, true);
var rotlH = (h2, l2, s) => s > 32 ? rotlBH(h2, l2, s) : rotlSH(h2, l2, s);
var rotlL = (h2, l2, s) => s > 32 ? rotlBL(h2, l2, s) : rotlSL(h2, l2, s);
function keccakP(s, rounds = 24) {
  const B = new Uint32Array(5 * 2);
  for (let round = 24 - rounds; round < 24; round++) {
    for (let x = 0; x < 10; x++)
      B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
    for (let x = 0; x < 10; x += 2) {
      const idx1 = (x + 8) % 10;
      const idx0 = (x + 2) % 10;
      const B0 = B[idx0];
      const B1 = B[idx0 + 1];
      const Th = rotlH(B0, B1, 1) ^ B[idx1];
      const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
      for (let y = 0; y < 50; y += 10) {
        s[x + y] ^= Th;
        s[x + y + 1] ^= Tl;
      }
    }
    let curH = s[2];
    let curL = s[3];
    for (let t = 0; t < 24; t++) {
      const shift = SHA3_ROTL[t];
      const Th = rotlH(curH, curL, shift);
      const Tl = rotlL(curH, curL, shift);
      const PI = SHA3_PI[t];
      curH = s[PI];
      curL = s[PI + 1];
      s[PI] = Th;
      s[PI + 1] = Tl;
    }
    for (let y = 0; y < 50; y += 10) {
      for (let x = 0; x < 10; x++)
        B[x] = s[y + x];
      for (let x = 0; x < 10; x++)
        s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
    }
    s[0] ^= SHA3_IOTA_H[round];
    s[1] ^= SHA3_IOTA_L[round];
  }
  B.fill(0);
}
var Keccak = class _Keccak extends Hash {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
    super();
    this.blockLen = blockLen;
    this.suffix = suffix;
    this.outputLen = outputLen;
    this.enableXOF = enableXOF;
    this.rounds = rounds;
    this.pos = 0;
    this.posOut = 0;
    this.finished = false;
    this.destroyed = false;
    number(outputLen);
    if (0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200);
    this.state32 = u32(this.state);
  }
  keccak() {
    keccakP(this.state32, this.rounds);
    this.posOut = 0;
    this.pos = 0;
  }
  update(data) {
    exists(this);
    const { blockLen, state } = this;
    data = toBytes(data);
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      for (let i = 0; i < take; i++)
        state[this.pos++] ^= data[pos++];
      if (this.pos === blockLen)
        this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = true;
    const { state, suffix, pos, blockLen } = this;
    state[pos] ^= suffix;
    if ((suffix & 128) !== 0 && pos === blockLen - 1)
      this.keccak();
    state[blockLen - 1] ^= 128;
    this.keccak();
  }
  writeInto(out) {
    exists(this, false);
    bytes(out);
    this.finish();
    const bufferOut = this.state;
    const { blockLen } = this;
    for (let pos = 0, len = out.length; pos < len; ) {
      if (this.posOut >= blockLen)
        this.keccak();
      const take = Math.min(blockLen - this.posOut, len - pos);
      out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
      this.posOut += take;
      pos += take;
    }
    return out;
  }
  xofInto(out) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(out);
  }
  xof(bytes3) {
    number(bytes3);
    return this.xofInto(new Uint8Array(bytes3));
  }
  digestInto(out) {
    output(out, this);
    if (this.finished)
      throw new Error("digest() was already called");
    this.writeInto(out);
    this.destroy();
    return out;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = true;
    this.state.fill(0);
  }
  _cloneInto(to) {
    const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
    to || (to = new _Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
    to.state32.set(this.state32);
    to.pos = this.pos;
    to.posOut = this.posOut;
    to.finished = this.finished;
    to.rounds = rounds;
    to.suffix = suffix;
    to.outputLen = outputLen;
    to.enableXOF = enableXOF;
    to.destroyed = this.destroyed;
    return to;
  }
};
var gen = (suffix, blockLen, outputLen) => wrapConstructor(() => new Keccak(blockLen, suffix, outputLen));
var sha3_224 = /* @__PURE__ */ gen(6, 144, 224 / 8);
var sha3_256 = /* @__PURE__ */ gen(6, 136, 256 / 8);
var sha3_384 = /* @__PURE__ */ gen(6, 104, 384 / 8);
var sha3_512 = /* @__PURE__ */ gen(6, 72, 512 / 8);
var keccak_224 = /* @__PURE__ */ gen(1, 144, 224 / 8);
var keccak_256 = /* @__PURE__ */ gen(1, 136, 256 / 8);
var keccak_384 = /* @__PURE__ */ gen(1, 104, 384 / 8);
var keccak_512 = /* @__PURE__ */ gen(1, 72, 512 / 8);
var genShake = (suffix, blockLen, outputLen) => wrapXOFConstructorWithOpts((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === void 0 ? outputLen : opts.dkLen, true));
var shake128 = /* @__PURE__ */ genShake(31, 168, 128 / 8);
var shake256 = /* @__PURE__ */ genShake(31, 136, 256 / 8);

// node_modules/.pnpm/@noble+curves@1.2.0/node_modules/@noble/curves/esm/abstract/weierstrass.js
function validatePointOpts(curve) {
  const opts = validateBasic(curve);
  validateObject(opts, {
    a: "field",
    b: "field"
  }, {
    allowedPrivateKeyLengths: "array",
    wrapPrivateKey: "boolean",
    isTorsionFree: "function",
    clearCofactor: "function",
    allowInfinityPoint: "boolean",
    fromBytes: "function",
    toBytes: "function"
  });
  const { endo, Fp: Fp4, a } = opts;
  if (endo) {
    if (!Fp4.eql(a, Fp4.ZERO)) {
      throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
    }
    if (typeof endo !== "object" || typeof endo.beta !== "bigint" || typeof endo.splitScalar !== "function") {
      throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
    }
  }
  return Object.freeze({ ...opts });
}
var { bytesToNumberBE: b2n, hexToBytes: h2b } = utils_exports;
var DER = {
  // asn.1 DER encoding utils
  Err: class DERErr extends Error {
    constructor(m = "") {
      super(m);
    }
  },
  _parseInt(data) {
    const { Err: E } = DER;
    if (data.length < 2 || data[0] !== 2)
      throw new E("Invalid signature integer tag");
    const len = data[1];
    const res = data.subarray(2, len + 2);
    if (!len || res.length !== len)
      throw new E("Invalid signature integer: wrong length");
    if (res[0] & 128)
      throw new E("Invalid signature integer: negative");
    if (res[0] === 0 && !(res[1] & 128))
      throw new E("Invalid signature integer: unnecessary leading zero");
    return { d: b2n(res), l: data.subarray(len + 2) };
  },
  toSig(hex) {
    const { Err: E } = DER;
    const data = typeof hex === "string" ? h2b(hex) : hex;
    if (!(data instanceof Uint8Array))
      throw new Error("ui8a expected");
    let l2 = data.length;
    if (l2 < 2 || data[0] != 48)
      throw new E("Invalid signature tag");
    if (data[1] !== l2 - 2)
      throw new E("Invalid signature: incorrect length");
    const { d: r, l: sBytes } = DER._parseInt(data.subarray(2));
    const { d: s, l: rBytesLeft } = DER._parseInt(sBytes);
    if (rBytesLeft.length)
      throw new E("Invalid signature: left bytes after parsing");
    return { r, s };
  },
  hexFromSig(sig) {
    const slice = (s2) => Number.parseInt(s2[0], 16) & 8 ? "00" + s2 : s2;
    const h2 = (num) => {
      const hex = num.toString(16);
      return hex.length & 1 ? `0${hex}` : hex;
    };
    const s = slice(h2(sig.s));
    const r = slice(h2(sig.r));
    const shl = s.length / 2;
    const rhl = r.length / 2;
    const sl = h2(shl);
    const rl = h2(rhl);
    return `30${h2(rhl + shl + 4)}02${rl}${r}02${sl}${s}`;
  }
};
var _0n7 = BigInt(0);
var _1n7 = BigInt(1);
var _2n6 = BigInt(2);
var _3n2 = BigInt(3);
var _4n2 = BigInt(4);
function weierstrassPoints(opts) {
  const CURVE = validatePointOpts(opts);
  const { Fp: Fp4 } = CURVE;
  const toBytes3 = CURVE.toBytes || ((_c, point, _isCompressed) => {
    const a = point.toAffine();
    return concatBytes2(Uint8Array.from([4]), Fp4.toBytes(a.x), Fp4.toBytes(a.y));
  });
  const fromBytes = CURVE.fromBytes || ((bytes3) => {
    const tail = bytes3.subarray(1);
    const x = Fp4.fromBytes(tail.subarray(0, Fp4.BYTES));
    const y = Fp4.fromBytes(tail.subarray(Fp4.BYTES, 2 * Fp4.BYTES));
    return { x, y };
  });
  function weierstrassEquation(x) {
    const { a, b } = CURVE;
    const x2 = Fp4.sqr(x);
    const x3 = Fp4.mul(x2, x);
    return Fp4.add(Fp4.add(x3, Fp4.mul(x, a)), b);
  }
  if (!Fp4.eql(Fp4.sqr(CURVE.Gy), weierstrassEquation(CURVE.Gx)))
    throw new Error("bad generator point: equation left != right");
  function isWithinCurveOrder(num) {
    return typeof num === "bigint" && _0n7 < num && num < CURVE.n;
  }
  function assertGE(num) {
    if (!isWithinCurveOrder(num))
      throw new Error("Expected valid bigint: 0 < bigint < curve.n");
  }
  function normPrivateKeyToScalar(key) {
    const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n } = CURVE;
    if (lengths && typeof key !== "bigint") {
      if (key instanceof Uint8Array)
        key = bytesToHex(key);
      if (typeof key !== "string" || !lengths.includes(key.length))
        throw new Error("Invalid key");
      key = key.padStart(nByteLength * 2, "0");
    }
    let num;
    try {
      num = typeof key === "bigint" ? key : bytesToNumberBE(ensureBytes("private key", key, nByteLength));
    } catch (error) {
      throw new Error(`private key must be ${nByteLength} bytes, hex or bigint, not ${typeof key}`);
    }
    if (wrapPrivateKey)
      num = mod(num, n);
    assertGE(num);
    return num;
  }
  const pointPrecomputes = /* @__PURE__ */ new Map();
  function assertPrjPoint(other) {
    if (!(other instanceof Point2))
      throw new Error("ProjectivePoint expected");
  }
  class Point2 {
    constructor(px, py, pz) {
      this.px = px;
      this.py = py;
      this.pz = pz;
      if (px == null || !Fp4.isValid(px))
        throw new Error("x required");
      if (py == null || !Fp4.isValid(py))
        throw new Error("y required");
      if (pz == null || !Fp4.isValid(pz))
        throw new Error("z required");
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(p) {
      const { x, y } = p || {};
      if (!p || !Fp4.isValid(x) || !Fp4.isValid(y))
        throw new Error("invalid affine point");
      if (p instanceof Point2)
        throw new Error("projective point not allowed");
      const is0 = (i) => Fp4.eql(i, Fp4.ZERO);
      if (is0(x) && is0(y))
        return Point2.ZERO;
      return new Point2(x, y, Fp4.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(points) {
      const toInv = Fp4.invertBatch(points.map((p) => p.pz));
      return points.map((p, i) => p.toAffine(toInv[i])).map(Point2.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(hex) {
      const P = Point2.fromAffine(fromBytes(ensureBytes("pointHex", hex)));
      P.assertValidity();
      return P;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(privateKey) {
      return Point2.BASE.multiply(normPrivateKeyToScalar(privateKey));
    }
    // "Private method", don't use it directly
    _setWindowSize(windowSize) {
      this._WINDOW_SIZE = windowSize;
      pointPrecomputes.delete(this);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      if (this.is0()) {
        if (CURVE.allowInfinityPoint && !Fp4.is0(this.py))
          return;
        throw new Error("bad point: ZERO");
      }
      const { x, y } = this.toAffine();
      if (!Fp4.isValid(x) || !Fp4.isValid(y))
        throw new Error("bad point: x or y not FE");
      const left = Fp4.sqr(y);
      const right = weierstrassEquation(x);
      if (!Fp4.eql(left, right))
        throw new Error("bad point: equation left != right");
      if (!this.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
    }
    hasEvenY() {
      const { y } = this.toAffine();
      if (Fp4.isOdd)
        return !Fp4.isOdd(y);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(other) {
      assertPrjPoint(other);
      const { px: X1, py: Y1, pz: Z1 } = this;
      const { px: X2, py: Y2, pz: Z2 } = other;
      const U1 = Fp4.eql(Fp4.mul(X1, Z2), Fp4.mul(X2, Z1));
      const U2 = Fp4.eql(Fp4.mul(Y1, Z2), Fp4.mul(Y2, Z1));
      return U1 && U2;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new Point2(this.px, Fp4.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a, b } = CURVE;
      const b3 = Fp4.mul(b, _3n2);
      const { px: X1, py: Y1, pz: Z1 } = this;
      let X3 = Fp4.ZERO, Y3 = Fp4.ZERO, Z3 = Fp4.ZERO;
      let t0 = Fp4.mul(X1, X1);
      let t1 = Fp4.mul(Y1, Y1);
      let t2 = Fp4.mul(Z1, Z1);
      let t3 = Fp4.mul(X1, Y1);
      t3 = Fp4.add(t3, t3);
      Z3 = Fp4.mul(X1, Z1);
      Z3 = Fp4.add(Z3, Z3);
      X3 = Fp4.mul(a, Z3);
      Y3 = Fp4.mul(b3, t2);
      Y3 = Fp4.add(X3, Y3);
      X3 = Fp4.sub(t1, Y3);
      Y3 = Fp4.add(t1, Y3);
      Y3 = Fp4.mul(X3, Y3);
      X3 = Fp4.mul(t3, X3);
      Z3 = Fp4.mul(b3, Z3);
      t2 = Fp4.mul(a, t2);
      t3 = Fp4.sub(t0, t2);
      t3 = Fp4.mul(a, t3);
      t3 = Fp4.add(t3, Z3);
      Z3 = Fp4.add(t0, t0);
      t0 = Fp4.add(Z3, t0);
      t0 = Fp4.add(t0, t2);
      t0 = Fp4.mul(t0, t3);
      Y3 = Fp4.add(Y3, t0);
      t2 = Fp4.mul(Y1, Z1);
      t2 = Fp4.add(t2, t2);
      t0 = Fp4.mul(t2, t3);
      X3 = Fp4.sub(X3, t0);
      Z3 = Fp4.mul(t2, t1);
      Z3 = Fp4.add(Z3, Z3);
      Z3 = Fp4.add(Z3, Z3);
      return new Point2(X3, Y3, Z3);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(other) {
      assertPrjPoint(other);
      const { px: X1, py: Y1, pz: Z1 } = this;
      const { px: X2, py: Y2, pz: Z2 } = other;
      let X3 = Fp4.ZERO, Y3 = Fp4.ZERO, Z3 = Fp4.ZERO;
      const a = CURVE.a;
      const b3 = Fp4.mul(CURVE.b, _3n2);
      let t0 = Fp4.mul(X1, X2);
      let t1 = Fp4.mul(Y1, Y2);
      let t2 = Fp4.mul(Z1, Z2);
      let t3 = Fp4.add(X1, Y1);
      let t4 = Fp4.add(X2, Y2);
      t3 = Fp4.mul(t3, t4);
      t4 = Fp4.add(t0, t1);
      t3 = Fp4.sub(t3, t4);
      t4 = Fp4.add(X1, Z1);
      let t5 = Fp4.add(X2, Z2);
      t4 = Fp4.mul(t4, t5);
      t5 = Fp4.add(t0, t2);
      t4 = Fp4.sub(t4, t5);
      t5 = Fp4.add(Y1, Z1);
      X3 = Fp4.add(Y2, Z2);
      t5 = Fp4.mul(t5, X3);
      X3 = Fp4.add(t1, t2);
      t5 = Fp4.sub(t5, X3);
      Z3 = Fp4.mul(a, t4);
      X3 = Fp4.mul(b3, t2);
      Z3 = Fp4.add(X3, Z3);
      X3 = Fp4.sub(t1, Z3);
      Z3 = Fp4.add(t1, Z3);
      Y3 = Fp4.mul(X3, Z3);
      t1 = Fp4.add(t0, t0);
      t1 = Fp4.add(t1, t0);
      t2 = Fp4.mul(a, t2);
      t4 = Fp4.mul(b3, t4);
      t1 = Fp4.add(t1, t2);
      t2 = Fp4.sub(t0, t2);
      t2 = Fp4.mul(a, t2);
      t4 = Fp4.add(t4, t2);
      t0 = Fp4.mul(t1, t4);
      Y3 = Fp4.add(Y3, t0);
      t0 = Fp4.mul(t5, t4);
      X3 = Fp4.mul(t3, X3);
      X3 = Fp4.sub(X3, t0);
      t0 = Fp4.mul(t3, t1);
      Z3 = Fp4.mul(t5, Z3);
      Z3 = Fp4.add(Z3, t0);
      return new Point2(X3, Y3, Z3);
    }
    subtract(other) {
      return this.add(other.negate());
    }
    is0() {
      return this.equals(Point2.ZERO);
    }
    wNAF(n) {
      return wnaf.wNAFCached(this, pointPrecomputes, n, (comp) => {
        const toInv = Fp4.invertBatch(comp.map((p) => p.pz));
        return comp.map((p, i) => p.toAffine(toInv[i])).map(Point2.fromAffine);
      });
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(n) {
      const I = Point2.ZERO;
      if (n === _0n7)
        return I;
      assertGE(n);
      if (n === _1n7)
        return this;
      const { endo } = CURVE;
      if (!endo)
        return wnaf.unsafeLadder(this, n);
      let { k1neg, k1, k2neg, k2 } = endo.splitScalar(n);
      let k1p = I;
      let k2p = I;
      let d = this;
      while (k1 > _0n7 || k2 > _0n7) {
        if (k1 & _1n7)
          k1p = k1p.add(d);
        if (k2 & _1n7)
          k2p = k2p.add(d);
        d = d.double();
        k1 >>= _1n7;
        k2 >>= _1n7;
      }
      if (k1neg)
        k1p = k1p.negate();
      if (k2neg)
        k2p = k2p.negate();
      k2p = new Point2(Fp4.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
      return k1p.add(k2p);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(scalar) {
      assertGE(scalar);
      let n = scalar;
      let point, fake;
      const { endo } = CURVE;
      if (endo) {
        const { k1neg, k1, k2neg, k2 } = endo.splitScalar(n);
        let { p: k1p, f: f1p } = this.wNAF(k1);
        let { p: k2p, f: f2p } = this.wNAF(k2);
        k1p = wnaf.constTimeNegate(k1neg, k1p);
        k2p = wnaf.constTimeNegate(k2neg, k2p);
        k2p = new Point2(Fp4.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
        point = k1p.add(k2p);
        fake = f1p.add(f2p);
      } else {
        const { p, f: f2 } = this.wNAF(n);
        point = p;
        fake = f2;
      }
      return Point2.normalizeZ([point, fake])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(Q, a, b) {
      const G = Point2.BASE;
      const mul = (P, a2) => a2 === _0n7 || a2 === _1n7 || !P.equals(G) ? P.multiplyUnsafe(a2) : P.multiply(a2);
      const sum = mul(this, a).add(mul(Q, b));
      return sum.is0() ? void 0 : sum;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(iz) {
      const { px: x, py: y, pz: z } = this;
      const is0 = this.is0();
      if (iz == null)
        iz = is0 ? Fp4.ONE : Fp4.inv(z);
      const ax = Fp4.mul(x, iz);
      const ay = Fp4.mul(y, iz);
      const zz = Fp4.mul(z, iz);
      if (is0)
        return { x: Fp4.ZERO, y: Fp4.ZERO };
      if (!Fp4.eql(zz, Fp4.ONE))
        throw new Error("invZ was invalid");
      return { x: ax, y: ay };
    }
    isTorsionFree() {
      const { h: cofactor, isTorsionFree } = CURVE;
      if (cofactor === _1n7)
        return true;
      if (isTorsionFree)
        return isTorsionFree(Point2, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: cofactor, clearCofactor } = CURVE;
      if (cofactor === _1n7)
        return this;
      if (clearCofactor)
        return clearCofactor(Point2, this);
      return this.multiplyUnsafe(CURVE.h);
    }
    toRawBytes(isCompressed = true) {
      this.assertValidity();
      return toBytes3(Point2, this, isCompressed);
    }
    toHex(isCompressed = true) {
      return bytesToHex(this.toRawBytes(isCompressed));
    }
  }
  Point2.BASE = new Point2(CURVE.Gx, CURVE.Gy, Fp4.ONE);
  Point2.ZERO = new Point2(Fp4.ZERO, Fp4.ONE, Fp4.ZERO);
  const _bits = CURVE.nBitLength;
  const wnaf = wNAF(Point2, CURVE.endo ? Math.ceil(_bits / 2) : _bits);
  return {
    CURVE,
    ProjectivePoint: Point2,
    normPrivateKeyToScalar,
    weierstrassEquation,
    isWithinCurveOrder
  };
}
function validateOpts2(curve) {
  const opts = validateBasic(curve);
  validateObject(opts, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  });
  return Object.freeze({ lowS: true, ...opts });
}
function weierstrass(curveDef) {
  const CURVE = validateOpts2(curveDef);
  const { Fp: Fp4, n: CURVE_ORDER } = CURVE;
  const compressedLen = Fp4.BYTES + 1;
  const uncompressedLen = 2 * Fp4.BYTES + 1;
  function isValidFieldElement(num) {
    return _0n7 < num && num < Fp4.ORDER;
  }
  function modN(a) {
    return mod(a, CURVE_ORDER);
  }
  function invN(a) {
    return invert(a, CURVE_ORDER);
  }
  const { ProjectivePoint: Point2, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder } = weierstrassPoints({
    ...CURVE,
    toBytes(_c, point, isCompressed) {
      const a = point.toAffine();
      const x = Fp4.toBytes(a.x);
      const cat = concatBytes2;
      if (isCompressed) {
        return cat(Uint8Array.from([point.hasEvenY() ? 2 : 3]), x);
      } else {
        return cat(Uint8Array.from([4]), x, Fp4.toBytes(a.y));
      }
    },
    fromBytes(bytes3) {
      const len = bytes3.length;
      const head = bytes3[0];
      const tail = bytes3.subarray(1);
      if (len === compressedLen && (head === 2 || head === 3)) {
        const x = bytesToNumberBE(tail);
        if (!isValidFieldElement(x))
          throw new Error("Point is not on curve");
        const y2 = weierstrassEquation(x);
        let y = Fp4.sqrt(y2);
        const isYOdd = (y & _1n7) === _1n7;
        const isHeadOdd = (head & 1) === 1;
        if (isHeadOdd !== isYOdd)
          y = Fp4.neg(y);
        return { x, y };
      } else if (len === uncompressedLen && head === 4) {
        const x = Fp4.fromBytes(tail.subarray(0, Fp4.BYTES));
        const y = Fp4.fromBytes(tail.subarray(Fp4.BYTES, 2 * Fp4.BYTES));
        return { x, y };
      } else {
        throw new Error(`Point of length ${len} was invalid. Expected ${compressedLen} compressed bytes or ${uncompressedLen} uncompressed bytes`);
      }
    }
  });
  const numToNByteStr = (num) => bytesToHex(numberToBytesBE(num, CURVE.nByteLength));
  function isBiggerThanHalfOrder(number3) {
    const HALF = CURVE_ORDER >> _1n7;
    return number3 > HALF;
  }
  function normalizeS(s) {
    return isBiggerThanHalfOrder(s) ? modN(-s) : s;
  }
  const slcNum = (b, from3, to) => bytesToNumberBE(b.slice(from3, to));
  class Signature {
    constructor(r, s, recovery) {
      this.r = r;
      this.s = s;
      this.recovery = recovery;
      this.assertValidity();
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(hex) {
      const l2 = CURVE.nByteLength;
      hex = ensureBytes("compactSignature", hex, l2 * 2);
      return new Signature(slcNum(hex, 0, l2), slcNum(hex, l2, 2 * l2));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(hex) {
      const { r, s } = DER.toSig(ensureBytes("DER", hex));
      return new Signature(r, s);
    }
    assertValidity() {
      if (!isWithinCurveOrder(this.r))
        throw new Error("r must be 0 < r < CURVE.n");
      if (!isWithinCurveOrder(this.s))
        throw new Error("s must be 0 < s < CURVE.n");
    }
    addRecoveryBit(recovery) {
      return new Signature(this.r, this.s, recovery);
    }
    recoverPublicKey(msgHash) {
      const { r, s, recovery: rec } = this;
      const h2 = bits2int_modN(ensureBytes("msgHash", msgHash));
      if (rec == null || ![0, 1, 2, 3].includes(rec))
        throw new Error("recovery id invalid");
      const radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
      if (radj >= Fp4.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const prefix = (rec & 1) === 0 ? "02" : "03";
      const R = Point2.fromHex(prefix + numToNByteStr(radj));
      const ir = invN(radj);
      const u1 = modN(-h2 * ir);
      const u2 = modN(s * ir);
      const Q = Point2.BASE.multiplyAndAddUnsafe(R, u1, u2);
      if (!Q)
        throw new Error("point at infinify");
      Q.assertValidity();
      return Q;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return isBiggerThanHalfOrder(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new Signature(this.r, modN(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return hexToBytes(this.toDERHex());
    }
    toDERHex() {
      return DER.hexFromSig({ r: this.r, s: this.s });
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return hexToBytes(this.toCompactHex());
    }
    toCompactHex() {
      return numToNByteStr(this.r) + numToNByteStr(this.s);
    }
  }
  const utils = {
    isValidPrivateKey(privateKey) {
      try {
        normPrivateKeyToScalar(privateKey);
        return true;
      } catch (error) {
        return false;
      }
    },
    normPrivateKeyToScalar,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      const length3 = getMinHashLength(CURVE.n);
      return mapHashToField(CURVE.randomBytes(length3), CURVE.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(windowSize = 8, point = Point2.BASE) {
      point._setWindowSize(windowSize);
      point.multiply(BigInt(3));
      return point;
    }
  };
  function getPublicKey(privateKey, isCompressed = true) {
    return Point2.fromPrivateKey(privateKey).toRawBytes(isCompressed);
  }
  function isProbPub(item) {
    const arr = item instanceof Uint8Array;
    const str = typeof item === "string";
    const len = (arr || str) && item.length;
    if (arr)
      return len === compressedLen || len === uncompressedLen;
    if (str)
      return len === 2 * compressedLen || len === 2 * uncompressedLen;
    if (item instanceof Point2)
      return true;
    return false;
  }
  function getSharedSecret(privateA, publicB, isCompressed = true) {
    if (isProbPub(privateA))
      throw new Error("first arg must be private key");
    if (!isProbPub(publicB))
      throw new Error("second arg must be public key");
    const b = Point2.fromHex(publicB);
    return b.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
  }
  const bits2int = CURVE.bits2int || function(bytes3) {
    const num = bytesToNumberBE(bytes3);
    const delta = bytes3.length * 8 - CURVE.nBitLength;
    return delta > 0 ? num >> BigInt(delta) : num;
  };
  const bits2int_modN = CURVE.bits2int_modN || function(bytes3) {
    return modN(bits2int(bytes3));
  };
  const ORDER_MASK = bitMask(CURVE.nBitLength);
  function int2octets(num) {
    if (typeof num !== "bigint")
      throw new Error("bigint expected");
    if (!(_0n7 <= num && num < ORDER_MASK))
      throw new Error(`bigint expected < 2^${CURVE.nBitLength}`);
    return numberToBytesBE(num, CURVE.nByteLength);
  }
  function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
    if (["recovered", "canonical"].some((k2) => k2 in opts))
      throw new Error("sign() legacy options not supported");
    const { hash: hash3, randomBytes: randomBytes2 } = CURVE;
    let { lowS, prehash, extraEntropy: ent } = opts;
    if (lowS == null)
      lowS = true;
    msgHash = ensureBytes("msgHash", msgHash);
    if (prehash)
      msgHash = ensureBytes("prehashed msgHash", hash3(msgHash));
    const h1int = bits2int_modN(msgHash);
    const d = normPrivateKeyToScalar(privateKey);
    const seedArgs = [int2octets(d), int2octets(h1int)];
    if (ent != null) {
      const e = ent === true ? randomBytes2(Fp4.BYTES) : ent;
      seedArgs.push(ensureBytes("extraEntropy", e));
    }
    const seed = concatBytes2(...seedArgs);
    const m = h1int;
    function k2sig(kBytes) {
      const k2 = bits2int(kBytes);
      if (!isWithinCurveOrder(k2))
        return;
      const ik = invN(k2);
      const q = Point2.BASE.multiply(k2).toAffine();
      const r = modN(q.x);
      if (r === _0n7)
        return;
      const s = modN(ik * modN(m + r * d));
      if (s === _0n7)
        return;
      let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n7);
      let normS = s;
      if (lowS && isBiggerThanHalfOrder(s)) {
        normS = normalizeS(s);
        recovery ^= 1;
      }
      return new Signature(r, normS, recovery);
    }
    return { seed, k2sig };
  }
  const defaultSigOpts = { lowS: CURVE.lowS, prehash: false };
  const defaultVerOpts = { lowS: CURVE.lowS, prehash: false };
  function sign(msgHash, privKey, opts = defaultSigOpts) {
    const { seed, k2sig } = prepSig(msgHash, privKey, opts);
    const C2 = CURVE;
    const drbg = createHmacDrbg(C2.hash.outputLen, C2.nByteLength, C2.hmac);
    return drbg(seed, k2sig);
  }
  Point2.BASE._setWindowSize(8);
  function verify(signature, msgHash, publicKey, opts = defaultVerOpts) {
    const sg = signature;
    msgHash = ensureBytes("msgHash", msgHash);
    publicKey = ensureBytes("publicKey", publicKey);
    if ("strict" in opts)
      throw new Error("options.strict was renamed to lowS");
    const { lowS, prehash } = opts;
    let _sig = void 0;
    let P;
    try {
      if (typeof sg === "string" || sg instanceof Uint8Array) {
        try {
          _sig = Signature.fromDER(sg);
        } catch (derError) {
          if (!(derError instanceof DER.Err))
            throw derError;
          _sig = Signature.fromCompact(sg);
        }
      } else if (typeof sg === "object" && typeof sg.r === "bigint" && typeof sg.s === "bigint") {
        const { r: r2, s: s2 } = sg;
        _sig = new Signature(r2, s2);
      } else {
        throw new Error("PARSE");
      }
      P = Point2.fromHex(publicKey);
    } catch (error) {
      if (error.message === "PARSE")
        throw new Error(`signature must be Signature instance, Uint8Array or hex string`);
      return false;
    }
    if (lowS && _sig.hasHighS())
      return false;
    if (prehash)
      msgHash = CURVE.hash(msgHash);
    const { r, s } = _sig;
    const h2 = bits2int_modN(msgHash);
    const is2 = invN(s);
    const u1 = modN(h2 * is2);
    const u2 = modN(r * is2);
    const R = Point2.BASE.multiplyAndAddUnsafe(P, u1, u2)?.toAffine();
    if (!R)
      return false;
    const v2 = modN(R.x);
    return v2 === r;
  }
  return {
    CURVE,
    getPublicKey,
    getSharedSecret,
    sign,
    verify,
    ProjectivePoint: Point2,
    Signature,
    utils
  };
}

// node_modules/.pnpm/@noble+hashes@1.3.2/node_modules/@noble/hashes/esm/hmac.js
var HMAC = class extends Hash {
  constructor(hash3, _key) {
    super();
    this.finished = false;
    this.destroyed = false;
    hash(hash3);
    const key = toBytes(_key);
    this.iHash = hash3.create();
    if (typeof this.iHash.update !== "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen;
    this.outputLen = this.iHash.outputLen;
    const blockLen = this.blockLen;
    const pad = new Uint8Array(blockLen);
    pad.set(key.length > blockLen ? hash3.create().update(key).digest() : key);
    for (let i = 0; i < pad.length; i++)
      pad[i] ^= 54;
    this.iHash.update(pad);
    this.oHash = hash3.create();
    for (let i = 0; i < pad.length; i++)
      pad[i] ^= 54 ^ 92;
    this.oHash.update(pad);
    pad.fill(0);
  }
  update(buf) {
    exists(this);
    this.iHash.update(buf);
    return this;
  }
  digestInto(out) {
    exists(this);
    bytes(out, this.outputLen);
    this.finished = true;
    this.iHash.digestInto(out);
    this.oHash.update(out);
    this.oHash.digestInto(out);
    this.destroy();
  }
  digest() {
    const out = new Uint8Array(this.oHash.outputLen);
    this.digestInto(out);
    return out;
  }
  _cloneInto(to) {
    to || (to = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
    to = to;
    to.finished = finished;
    to.destroyed = destroyed;
    to.blockLen = blockLen;
    to.outputLen = outputLen;
    to.oHash = oHash._cloneInto(to.oHash);
    to.iHash = iHash._cloneInto(to.iHash);
    return to;
  }
  destroy() {
    this.destroyed = true;
    this.oHash.destroy();
    this.iHash.destroy();
  }
};
var hmac = (hash3, key, message2) => new HMAC(hash3, key).update(message2).digest();
hmac.create = (hash3, key) => new HMAC(hash3, key);

// node_modules/.pnpm/@noble+curves@1.2.0/node_modules/@noble/curves/esm/_shortw_utils.js
function getHash(hash3) {
  return {
    hash: hash3,
    hmac: (key, ...msgs) => hmac(hash3, key, concatBytes(...msgs)),
    randomBytes
  };
}
function createCurve(curveDef, defHash) {
  const create3 = (hash3) => weierstrass({ ...curveDef, ...getHash(hash3) });
  return Object.freeze({ ...create3(defHash), create: create3 });
}

// node_modules/.pnpm/@noble+curves@1.2.0/node_modules/@noble/curves/esm/secp256k1.js
var secp256k1P = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f");
var secp256k1N = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
var _1n8 = BigInt(1);
var _2n7 = BigInt(2);
var divNearest = (a, b) => (a + b / _2n7) / b;
function sqrtMod(y) {
  const P = secp256k1P;
  const _3n3 = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
  const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
  const b2 = y * y * y % P;
  const b3 = b2 * b2 * y % P;
  const b6 = pow2(b3, _3n3, P) * b3 % P;
  const b9 = pow2(b6, _3n3, P) * b3 % P;
  const b11 = pow2(b9, _2n7, P) * b2 % P;
  const b22 = pow2(b11, _11n, P) * b11 % P;
  const b44 = pow2(b22, _22n, P) * b22 % P;
  const b88 = pow2(b44, _44n, P) * b44 % P;
  const b176 = pow2(b88, _88n, P) * b88 % P;
  const b220 = pow2(b176, _44n, P) * b44 % P;
  const b223 = pow2(b220, _3n3, P) * b3 % P;
  const t1 = pow2(b223, _23n, P) * b22 % P;
  const t2 = pow2(t1, _6n, P) * b2 % P;
  const root = pow2(t2, _2n7, P);
  if (!Fp2.eql(Fp2.sqr(root), y))
    throw new Error("Cannot find square root");
  return root;
}
var Fp2 = Field(secp256k1P, void 0, void 0, { sqrt: sqrtMod });
var secp256k1 = createCurve({
  a: BigInt(0),
  b: BigInt(7),
  Fp: Fp2,
  n: secp256k1N,
  // Base point (x, y) aka generator point
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  h: BigInt(1),
  lowS: true,
  /**
   * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
   * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
   * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
   * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
   */
  endo: {
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar: (k2) => {
      const n = secp256k1N;
      const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
      const b1 = -_1n8 * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
      const a2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
      const b2 = a1;
      const POW_2_128 = BigInt("0x100000000000000000000000000000000");
      const c1 = divNearest(b2 * k2, n);
      const c2 = divNearest(-b1 * k2, n);
      let k1 = mod(k2 - c1 * a1 - c2 * a2, n);
      let k22 = mod(-c1 * b1 - c2 * b2, n);
      const k1neg = k1 > POW_2_128;
      const k2neg = k22 > POW_2_128;
      if (k1neg)
        k1 = n - k1;
      if (k2neg)
        k22 = n - k22;
      if (k1 > POW_2_128 || k22 > POW_2_128) {
        throw new Error("splitScalar: Endomorphism failed, k=" + k2);
      }
      return { k1neg, k1, k2neg, k2: k22 };
    }
  }
}, sha2562);
var _0n8 = BigInt(0);
var Point = secp256k1.ProjectivePoint;

// node_modules/.pnpm/@noble+curves@1.2.0/node_modules/@noble/curves/esm/p256.js
var Fp3 = Field(BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"));
var CURVE_A = Fp3.create(BigInt("-3"));
var CURVE_B = BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b");
var p256 = createCurve({
  a: CURVE_A,
  b: CURVE_B,
  Fp: Fp3,
  // Curve order, total count of valid points in the field
  n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),
  // Base (generator) point (x, y)
  Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),
  Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"),
  h: BigInt(1),
  lowS: false
}, sha2562);

// node_modules/.pnpm/did-jwt@7.4.2/node_modules/did-jwt/lib/index.module.js
var import_canonicalize = __toESM(require_canonicalize(), 1);

// node_modules/.pnpm/@scure+base@1.1.3/node_modules/@scure/base/lib/esm/index.js
// @__NO_SIDE_EFFECTS__
function assertNumber(n) {
  if (!Number.isSafeInteger(n))
    throw new Error(`Wrong integer: ${n}`);
}
// @__NO_SIDE_EFFECTS__
function chain(...args) {
  const wrap = (a, b) => (c) => a(b(c));
  const encode6 = Array.from(args).reverse().reduce((acc, i) => acc ? wrap(acc, i.encode) : i.encode, void 0);
  const decode6 = args.reduce((acc, i) => acc ? wrap(acc, i.decode) : i.decode, void 0);
  return { encode: encode6, decode: decode6 };
}
// @__NO_SIDE_EFFECTS__
function alphabet2(alphabet3) {
  return {
    encode: (digits) => {
      if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number")
        throw new Error("alphabet.encode input should be an array of numbers");
      return digits.map((i) => {
        /* @__PURE__ */ assertNumber(i);
        if (i < 0 || i >= alphabet3.length)
          throw new Error(`Digit index outside alphabet: ${i} (alphabet: ${alphabet3.length})`);
        return alphabet3[i];
      });
    },
    decode: (input) => {
      if (!Array.isArray(input) || input.length && typeof input[0] !== "string")
        throw new Error("alphabet.decode input should be array of strings");
      return input.map((letter) => {
        if (typeof letter !== "string")
          throw new Error(`alphabet.decode: not string element=${letter}`);
        const index2 = alphabet3.indexOf(letter);
        if (index2 === -1)
          throw new Error(`Unknown letter: "${letter}". Allowed: ${alphabet3}`);
        return index2;
      });
    }
  };
}
// @__NO_SIDE_EFFECTS__
function join(separator = "") {
  if (typeof separator !== "string")
    throw new Error("join separator should be string");
  return {
    encode: (from3) => {
      if (!Array.isArray(from3) || from3.length && typeof from3[0] !== "string")
        throw new Error("join.encode input should be array of strings");
      for (let i of from3)
        if (typeof i !== "string")
          throw new Error(`join.encode: non-string input=${i}`);
      return from3.join(separator);
    },
    decode: (to) => {
      if (typeof to !== "string")
        throw new Error("join.decode input should be string");
      return to.split(separator);
    }
  };
}
var gcd = /* @__NO_SIDE_EFFECTS__ */ (a, b) => !b ? a : /* @__PURE__ */ gcd(b, a % b);
var radix2carry = /* @__NO_SIDE_EFFECTS__ */ (from3, to) => from3 + (to - /* @__PURE__ */ gcd(from3, to));
// @__NO_SIDE_EFFECTS__
function convertRadix2(data, from3, to, padding) {
  if (!Array.isArray(data))
    throw new Error("convertRadix2: data should be array");
  if (from3 <= 0 || from3 > 32)
    throw new Error(`convertRadix2: wrong from=${from3}`);
  if (to <= 0 || to > 32)
    throw new Error(`convertRadix2: wrong to=${to}`);
  if (/* @__PURE__ */ radix2carry(from3, to) > 32) {
    throw new Error(`convertRadix2: carry overflow from=${from3} to=${to} carryBits=${/* @__PURE__ */ radix2carry(from3, to)}`);
  }
  let carry = 0;
  let pos = 0;
  const mask = 2 ** to - 1;
  const res = [];
  for (const n of data) {
    /* @__PURE__ */ assertNumber(n);
    if (n >= 2 ** from3)
      throw new Error(`convertRadix2: invalid data word=${n} from=${from3}`);
    carry = carry << from3 | n;
    if (pos + from3 > 32)
      throw new Error(`convertRadix2: carry overflow pos=${pos} from=${from3}`);
    pos += from3;
    for (; pos >= to; pos -= to)
      res.push((carry >> pos - to & mask) >>> 0);
    carry &= 2 ** pos - 1;
  }
  carry = carry << to - pos & mask;
  if (!padding && pos >= from3)
    throw new Error("Excess padding");
  if (!padding && carry)
    throw new Error(`Non-zero padding: ${carry}`);
  if (padding && pos > 0)
    res.push(carry >>> 0);
  return res;
}
// @__NO_SIDE_EFFECTS__
function radix2(bits, revPadding = false) {
  /* @__PURE__ */ assertNumber(bits);
  if (bits <= 0 || bits > 32)
    throw new Error("radix2: bits should be in (0..32]");
  if (/* @__PURE__ */ radix2carry(8, bits) > 32 || /* @__PURE__ */ radix2carry(bits, 8) > 32)
    throw new Error("radix2: carry overflow");
  return {
    encode: (bytes3) => {
      if (!(bytes3 instanceof Uint8Array))
        throw new Error("radix2.encode input should be Uint8Array");
      return /* @__PURE__ */ convertRadix2(Array.from(bytes3), 8, bits, !revPadding);
    },
    decode: (digits) => {
      if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number")
        throw new Error("radix2.decode input should be array of strings");
      return Uint8Array.from(/* @__PURE__ */ convertRadix2(digits, bits, 8, revPadding));
    }
  };
}
// @__NO_SIDE_EFFECTS__
function unsafeWrapper(fn) {
  if (typeof fn !== "function")
    throw new Error("unsafeWrapper fn should be function");
  return function(...args) {
    try {
      return fn.apply(null, args);
    } catch (e) {
    }
  };
}
var BECH_ALPHABET = /* @__PURE__ */ chain(/* @__PURE__ */ alphabet2("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), /* @__PURE__ */ join(""));
var POLYMOD_GENERATORS = [996825010, 642813549, 513874426, 1027748829, 705979059];
// @__NO_SIDE_EFFECTS__
function bech32Polymod(pre) {
  const b = pre >> 25;
  let chk = (pre & 33554431) << 5;
  for (let i = 0; i < POLYMOD_GENERATORS.length; i++) {
    if ((b >> i & 1) === 1)
      chk ^= POLYMOD_GENERATORS[i];
  }
  return chk;
}
// @__NO_SIDE_EFFECTS__
function bechChecksum(prefix, words, encodingConst = 1) {
  const len = prefix.length;
  let chk = 1;
  for (let i = 0; i < len; i++) {
    const c = prefix.charCodeAt(i);
    if (c < 33 || c > 126)
      throw new Error(`Invalid prefix (${prefix})`);
    chk = /* @__PURE__ */ bech32Polymod(chk) ^ c >> 5;
  }
  chk = /* @__PURE__ */ bech32Polymod(chk);
  for (let i = 0; i < len; i++)
    chk = /* @__PURE__ */ bech32Polymod(chk) ^ prefix.charCodeAt(i) & 31;
  for (let v2 of words)
    chk = /* @__PURE__ */ bech32Polymod(chk) ^ v2;
  for (let i = 0; i < 6; i++)
    chk = /* @__PURE__ */ bech32Polymod(chk);
  chk ^= encodingConst;
  return BECH_ALPHABET.encode(/* @__PURE__ */ convertRadix2([chk % 2 ** 30], 30, 5, false));
}
// @__NO_SIDE_EFFECTS__
function genBech32(encoding) {
  const ENCODING_CONST = encoding === "bech32" ? 1 : 734539939;
  const _words = /* @__PURE__ */ radix2(5);
  const fromWords = _words.decode;
  const toWords = _words.encode;
  const fromWordsUnsafe = /* @__PURE__ */ unsafeWrapper(fromWords);
  function encode6(prefix, words, limit = 90) {
    if (typeof prefix !== "string")
      throw new Error(`bech32.encode prefix should be string, not ${typeof prefix}`);
    if (!Array.isArray(words) || words.length && typeof words[0] !== "number")
      throw new Error(`bech32.encode words should be array of numbers, not ${typeof words}`);
    const actualLength = prefix.length + 7 + words.length;
    if (limit !== false && actualLength > limit)
      throw new TypeError(`Length ${actualLength} exceeds limit ${limit}`);
    const lowered = prefix.toLowerCase();
    const sum = /* @__PURE__ */ bechChecksum(lowered, words, ENCODING_CONST);
    return `${lowered}1${BECH_ALPHABET.encode(words)}${sum}`;
  }
  function decode6(str, limit = 90) {
    if (typeof str !== "string")
      throw new Error(`bech32.decode input should be string, not ${typeof str}`);
    if (str.length < 8 || limit !== false && str.length > limit)
      throw new TypeError(`Wrong string length: ${str.length} (${str}). Expected (8..${limit})`);
    const lowered = str.toLowerCase();
    if (str !== lowered && str !== str.toUpperCase())
      throw new Error(`String must be lowercase or uppercase`);
    str = lowered;
    const sepIndex = str.lastIndexOf("1");
    if (sepIndex === 0 || sepIndex === -1)
      throw new Error(`Letter "1" must be present between prefix and data only`);
    const prefix = str.slice(0, sepIndex);
    const _words2 = str.slice(sepIndex + 1);
    if (_words2.length < 6)
      throw new Error("Data must be at least 6 characters long");
    const words = BECH_ALPHABET.decode(_words2).slice(0, -6);
    const sum = /* @__PURE__ */ bechChecksum(prefix, words, ENCODING_CONST);
    if (!_words2.endsWith(sum))
      throw new Error(`Invalid checksum in ${str}: expected "${sum}"`);
    return { prefix, words };
  }
  const decodeUnsafe = /* @__PURE__ */ unsafeWrapper(decode6);
  function decodeToBytes(str) {
    const { prefix, words } = decode6(str, false);
    return { prefix, words, bytes: fromWords(words) };
  }
  return { encode: encode6, decode: decode6, decodeToBytes, decodeUnsafe, fromWords, fromWordsUnsafe, toWords };
}
var bech32 = /* @__PURE__ */ genBech32("bech32");

// node_modules/.pnpm/@noble+ciphers@0.3.0/node_modules/@noble/ciphers/esm/utils.js
var u8a3 = (a) => a instanceof Uint8Array;
var u322 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
var isLE2 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!isLE2)
  throw new Error("Non little-endian hardware is not supported");
function utf8ToBytes3(str) {
  if (typeof str !== "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
  return new Uint8Array(new TextEncoder().encode(str));
}
function toBytes2(data) {
  if (typeof data === "string")
    data = utf8ToBytes3(data);
  if (!u8a3(data))
    throw new Error(`expected Uint8Array, got ${typeof data}`);
  return data;
}
function ensureBytes2(b, len) {
  if (!(b instanceof Uint8Array))
    throw new Error("Uint8Array expected");
  if (typeof len === "number") {
    if (b.length !== len)
      throw new Error(`Uint8Array length ${len} expected`);
  }
}

// node_modules/.pnpm/@noble+ciphers@0.3.0/node_modules/@noble/ciphers/esm/_assert.js
function number2(n) {
  if (!Number.isSafeInteger(n) || n < 0)
    throw new Error(`Wrong positive integer: ${n}`);
}
function bool(b) {
  if (typeof b !== "boolean")
    throw new Error(`Expected boolean, not ${b}`);
}
function bytes2(b, ...lengths) {
  if (!(b instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (lengths.length > 0 && !lengths.includes(b.length))
    throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
}
function hash2(hash3) {
  if (typeof hash3 !== "function" || typeof hash3.create !== "function")
    throw new Error("hash must be wrapped by utils.wrapConstructor");
  number2(hash3.outputLen);
  number2(hash3.blockLen);
}
function exists2(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function output2(out, instance) {
  bytes2(out);
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error(`digestInto() expects output buffer of length at least ${min}`);
  }
}
var assert = { number: number2, bool, bytes: bytes2, hash: hash2, exists: exists2, output: output2 };
var assert_default = assert;

// node_modules/.pnpm/@noble+ciphers@0.3.0/node_modules/@noble/ciphers/esm/_poly1305.js
var u8to16 = (a, i) => a[i++] & 255 | (a[i++] & 255) << 8;
var Poly1305 = class {
  constructor(key) {
    this.blockLen = 16;
    this.outputLen = 16;
    this.buffer = new Uint8Array(16);
    this.r = new Uint16Array(10);
    this.h = new Uint16Array(10);
    this.pad = new Uint16Array(8);
    this.pos = 0;
    this.finished = false;
    key = toBytes2(key);
    ensureBytes2(key, 32);
    const t0 = u8to16(key, 0);
    const t1 = u8to16(key, 2);
    const t2 = u8to16(key, 4);
    const t3 = u8to16(key, 6);
    const t4 = u8to16(key, 8);
    const t5 = u8to16(key, 10);
    const t6 = u8to16(key, 12);
    const t7 = u8to16(key, 14);
    this.r[0] = t0 & 8191;
    this.r[1] = (t0 >>> 13 | t1 << 3) & 8191;
    this.r[2] = (t1 >>> 10 | t2 << 6) & 7939;
    this.r[3] = (t2 >>> 7 | t3 << 9) & 8191;
    this.r[4] = (t3 >>> 4 | t4 << 12) & 255;
    this.r[5] = t4 >>> 1 & 8190;
    this.r[6] = (t4 >>> 14 | t5 << 2) & 8191;
    this.r[7] = (t5 >>> 11 | t6 << 5) & 8065;
    this.r[8] = (t6 >>> 8 | t7 << 8) & 8191;
    this.r[9] = t7 >>> 5 & 127;
    for (let i = 0; i < 8; i++)
      this.pad[i] = u8to16(key, 16 + 2 * i);
  }
  process(data, offset, isLast = false) {
    const hibit = isLast ? 0 : 1 << 11;
    const { h: h2, r } = this;
    const r0 = r[0];
    const r1 = r[1];
    const r2 = r[2];
    const r3 = r[3];
    const r4 = r[4];
    const r5 = r[5];
    const r6 = r[6];
    const r7 = r[7];
    const r8 = r[8];
    const r9 = r[9];
    const t0 = u8to16(data, offset + 0);
    const t1 = u8to16(data, offset + 2);
    const t2 = u8to16(data, offset + 4);
    const t3 = u8to16(data, offset + 6);
    const t4 = u8to16(data, offset + 8);
    const t5 = u8to16(data, offset + 10);
    const t6 = u8to16(data, offset + 12);
    const t7 = u8to16(data, offset + 14);
    let h0 = h2[0] + (t0 & 8191);
    let h1 = h2[1] + ((t0 >>> 13 | t1 << 3) & 8191);
    let h22 = h2[2] + ((t1 >>> 10 | t2 << 6) & 8191);
    let h3 = h2[3] + ((t2 >>> 7 | t3 << 9) & 8191);
    let h4 = h2[4] + ((t3 >>> 4 | t4 << 12) & 8191);
    let h5 = h2[5] + (t4 >>> 1 & 8191);
    let h6 = h2[6] + ((t4 >>> 14 | t5 << 2) & 8191);
    let h7 = h2[7] + ((t5 >>> 11 | t6 << 5) & 8191);
    let h8 = h2[8] + ((t6 >>> 8 | t7 << 8) & 8191);
    let h9 = h2[9] + (t7 >>> 5 | hibit);
    let c = 0;
    let d0 = c + h0 * r0 + h1 * (5 * r9) + h22 * (5 * r8) + h3 * (5 * r7) + h4 * (5 * r6);
    c = d0 >>> 13;
    d0 &= 8191;
    d0 += h5 * (5 * r5) + h6 * (5 * r4) + h7 * (5 * r3) + h8 * (5 * r2) + h9 * (5 * r1);
    c += d0 >>> 13;
    d0 &= 8191;
    let d1 = c + h0 * r1 + h1 * r0 + h22 * (5 * r9) + h3 * (5 * r8) + h4 * (5 * r7);
    c = d1 >>> 13;
    d1 &= 8191;
    d1 += h5 * (5 * r6) + h6 * (5 * r5) + h7 * (5 * r4) + h8 * (5 * r3) + h9 * (5 * r2);
    c += d1 >>> 13;
    d1 &= 8191;
    let d2 = c + h0 * r2 + h1 * r1 + h22 * r0 + h3 * (5 * r9) + h4 * (5 * r8);
    c = d2 >>> 13;
    d2 &= 8191;
    d2 += h5 * (5 * r7) + h6 * (5 * r6) + h7 * (5 * r5) + h8 * (5 * r4) + h9 * (5 * r3);
    c += d2 >>> 13;
    d2 &= 8191;
    let d3 = c + h0 * r3 + h1 * r2 + h22 * r1 + h3 * r0 + h4 * (5 * r9);
    c = d3 >>> 13;
    d3 &= 8191;
    d3 += h5 * (5 * r8) + h6 * (5 * r7) + h7 * (5 * r6) + h8 * (5 * r5) + h9 * (5 * r4);
    c += d3 >>> 13;
    d3 &= 8191;
    let d4 = c + h0 * r4 + h1 * r3 + h22 * r2 + h3 * r1 + h4 * r0;
    c = d4 >>> 13;
    d4 &= 8191;
    d4 += h5 * (5 * r9) + h6 * (5 * r8) + h7 * (5 * r7) + h8 * (5 * r6) + h9 * (5 * r5);
    c += d4 >>> 13;
    d4 &= 8191;
    let d5 = c + h0 * r5 + h1 * r4 + h22 * r3 + h3 * r2 + h4 * r1;
    c = d5 >>> 13;
    d5 &= 8191;
    d5 += h5 * r0 + h6 * (5 * r9) + h7 * (5 * r8) + h8 * (5 * r7) + h9 * (5 * r6);
    c += d5 >>> 13;
    d5 &= 8191;
    let d6 = c + h0 * r6 + h1 * r5 + h22 * r4 + h3 * r3 + h4 * r2;
    c = d6 >>> 13;
    d6 &= 8191;
    d6 += h5 * r1 + h6 * r0 + h7 * (5 * r9) + h8 * (5 * r8) + h9 * (5 * r7);
    c += d6 >>> 13;
    d6 &= 8191;
    let d7 = c + h0 * r7 + h1 * r6 + h22 * r5 + h3 * r4 + h4 * r3;
    c = d7 >>> 13;
    d7 &= 8191;
    d7 += h5 * r2 + h6 * r1 + h7 * r0 + h8 * (5 * r9) + h9 * (5 * r8);
    c += d7 >>> 13;
    d7 &= 8191;
    let d8 = c + h0 * r8 + h1 * r7 + h22 * r6 + h3 * r5 + h4 * r4;
    c = d8 >>> 13;
    d8 &= 8191;
    d8 += h5 * r3 + h6 * r2 + h7 * r1 + h8 * r0 + h9 * (5 * r9);
    c += d8 >>> 13;
    d8 &= 8191;
    let d9 = c + h0 * r9 + h1 * r8 + h22 * r7 + h3 * r6 + h4 * r5;
    c = d9 >>> 13;
    d9 &= 8191;
    d9 += h5 * r4 + h6 * r3 + h7 * r2 + h8 * r1 + h9 * r0;
    c += d9 >>> 13;
    d9 &= 8191;
    c = (c << 2) + c | 0;
    c = c + d0 | 0;
    d0 = c & 8191;
    c = c >>> 13;
    d1 += c;
    h2[0] = d0;
    h2[1] = d1;
    h2[2] = d2;
    h2[3] = d3;
    h2[4] = d4;
    h2[5] = d5;
    h2[6] = d6;
    h2[7] = d7;
    h2[8] = d8;
    h2[9] = d9;
  }
  finalize() {
    const { h: h2, pad } = this;
    const g = new Uint16Array(10);
    let c = h2[1] >>> 13;
    h2[1] &= 8191;
    for (let i = 2; i < 10; i++) {
      h2[i] += c;
      c = h2[i] >>> 13;
      h2[i] &= 8191;
    }
    h2[0] += c * 5;
    c = h2[0] >>> 13;
    h2[0] &= 8191;
    h2[1] += c;
    c = h2[1] >>> 13;
    h2[1] &= 8191;
    h2[2] += c;
    g[0] = h2[0] + 5;
    c = g[0] >>> 13;
    g[0] &= 8191;
    for (let i = 1; i < 10; i++) {
      g[i] = h2[i] + c;
      c = g[i] >>> 13;
      g[i] &= 8191;
    }
    g[9] -= 1 << 13;
    let mask = (c ^ 1) - 1;
    for (let i = 0; i < 10; i++)
      g[i] &= mask;
    mask = ~mask;
    for (let i = 0; i < 10; i++)
      h2[i] = h2[i] & mask | g[i];
    h2[0] = (h2[0] | h2[1] << 13) & 65535;
    h2[1] = (h2[1] >>> 3 | h2[2] << 10) & 65535;
    h2[2] = (h2[2] >>> 6 | h2[3] << 7) & 65535;
    h2[3] = (h2[3] >>> 9 | h2[4] << 4) & 65535;
    h2[4] = (h2[4] >>> 12 | h2[5] << 1 | h2[6] << 14) & 65535;
    h2[5] = (h2[6] >>> 2 | h2[7] << 11) & 65535;
    h2[6] = (h2[7] >>> 5 | h2[8] << 8) & 65535;
    h2[7] = (h2[8] >>> 8 | h2[9] << 5) & 65535;
    let f2 = h2[0] + pad[0];
    h2[0] = f2 & 65535;
    for (let i = 1; i < 8; i++) {
      f2 = (h2[i] + pad[i] | 0) + (f2 >>> 16) | 0;
      h2[i] = f2 & 65535;
    }
  }
  update(data) {
    assert_default.exists(this);
    const { buffer, blockLen } = this;
    data = toBytes2(data);
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      if (take === blockLen) {
        for (; blockLen <= len - pos; pos += blockLen)
          this.process(data, pos);
        continue;
      }
      buffer.set(data.subarray(pos, pos + take), this.pos);
      this.pos += take;
      pos += take;
      if (this.pos === blockLen) {
        this.process(buffer, 0, false);
        this.pos = 0;
      }
    }
    return this;
  }
  destroy() {
    this.h.fill(0);
    this.r.fill(0);
    this.buffer.fill(0);
    this.pad.fill(0);
  }
  digestInto(out) {
    assert_default.exists(this);
    assert_default.output(out, this);
    this.finished = true;
    const { buffer, h: h2 } = this;
    let { pos } = this;
    if (pos) {
      buffer[pos++] = 1;
      for (; pos < 16; pos++)
        buffer[pos] = 0;
      this.process(buffer, 0, true);
    }
    this.finalize();
    let opos = 0;
    for (let i = 0; i < 8; i++) {
      out[opos++] = h2[i] >>> 0;
      out[opos++] = h2[i] >>> 8;
    }
    return out;
  }
  digest() {
    const { buffer, outputLen } = this;
    this.digestInto(buffer);
    const res = buffer.slice(0, outputLen);
    this.destroy();
    return res;
  }
};
function wrapConstructorWithKey(hashCons) {
  const hashC = (msg, key) => hashCons(key).update(toBytes2(msg)).digest();
  const tmp = hashCons(new Uint8Array(32));
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = (key) => hashCons(key);
  return hashC;
}
var poly1305 = wrapConstructorWithKey((key) => new Poly1305(key));

// node_modules/.pnpm/@noble+ciphers@0.3.0/node_modules/@noble/ciphers/esm/_salsa.js
var sigma16 = utf8ToBytes3("expand 16-byte k");
var sigma32 = utf8ToBytes3("expand 32-byte k");
var sigma16_32 = u322(sigma16);
var sigma32_32 = u322(sigma32);

// node_modules/.pnpm/did-jwt@7.4.2/node_modules/did-jwt/lib/index.module.js
var u8a4 = {
  toString: toString2,
  fromString: fromString2,
  concat
};
function bytesToBase64url(b) {
  return u8a4.toString(b, "base64url");
}
function base64ToBytes(s) {
  const inputBase64Url = s.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  return u8a4.fromString(inputBase64Url, "base64url");
}
function base58ToBytes(s) {
  return u8a4.fromString(s, "base58btc");
}
function bytesToBase58(b) {
  return u8a4.toString(b, "base58btc");
}
function multibaseToBytes(s) {
  const {
    base10: base102,
    base16: base162,
    base16upper: base16upper2,
    base58btc: base58btc2,
    base64: base642,
    base64url: base64url2
  } = bases;
  const baseDecoder = base58btc2.decoder.or(base102.decoder).or(base162.decoder).or(base16upper2.decoder).or(base642.decoder).or(base64url2.decoder);
  const bytes3 = baseDecoder.decode(s);
  if ([32, 33, 48, 64, 65, 96].includes(bytes3.length)) {
    return bytes3;
  }
  try {
    const [codec, length3] = varint_exports.decode(bytes3);
    return bytes3.slice(length3);
  } catch (e) {
    return bytes3;
  }
}
function hexToBytes2(s, minLength) {
  let input = s.startsWith("0x") ? s.substring(2) : s;
  if (input.length % 2 !== 0) {
    input = `0${input}`;
  }
  if (minLength) {
    const paddedLength = Math.max(input.length, minLength * 2);
    input = input.padStart(paddedLength, "00");
  }
  return u8a4.fromString(input.toLowerCase(), "base16");
}
function decodeBase64url(s) {
  return u8a4.toString(base64ToBytes(s));
}
function bytesToHex2(b) {
  return u8a4.toString(b, "base16");
}
function bytesToBigInt(b) {
  return BigInt(`0x` + u8a4.toString(b, "base16"));
}
function stringToBytes(s) {
  return u8a4.fromString(s);
}
function toJose({
  r,
  s,
  recoveryParam
}, recoverable) {
  const jose = new Uint8Array(recoverable ? 65 : 64);
  jose.set(u8a4.fromString(r, "base16"), 0);
  jose.set(u8a4.fromString(s, "base16"), 32);
  if (recoverable) {
    if (typeof recoveryParam === "undefined") {
      throw new Error("Signer did not return a recoveryParam");
    }
    jose[64] = recoveryParam;
  }
  return bytesToBase64url(jose);
}
function fromJose(signature) {
  const signatureBytes = base64ToBytes(signature);
  if (signatureBytes.length < 64 || signatureBytes.length > 65) {
    throw new TypeError(`Wrong size for signature. Expected 64 or 65 bytes, but got ${signatureBytes.length}`);
  }
  const r = bytesToHex2(signatureBytes.slice(0, 32));
  const s = bytesToHex2(signatureBytes.slice(32, 64));
  const recoveryParam = signatureBytes.length === 65 ? signatureBytes[64] : void 0;
  return {
    r,
    s,
    recoveryParam
  };
}
function sha2563(payload) {
  const data = typeof payload === "string" ? fromString2(payload) : payload;
  return sha2562(data);
}
var keccak = keccak_256;
function toEthereumAddress(hexPublicKey) {
  const hashInput = fromString2(hexPublicKey.slice(2), "base16");
  return `0x${toString2(keccak(hashInput).slice(-20), "base16")}`;
}
function instanceOfEcdsaSignature(object) {
  return typeof object === "object" && "r" in object && "s" in object;
}
function ES256SignerAlg() {
  return function sign(payload, signer) {
    try {
      return Promise.resolve(signer(payload)).then(function(signature) {
        if (instanceOfEcdsaSignature(signature)) {
          return toJose(signature);
        } else {
          return signature;
        }
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
function ES256KSignerAlg(recoverable) {
  return function sign(payload, signer) {
    try {
      return Promise.resolve(signer(payload)).then(function(signature) {
        if (instanceOfEcdsaSignature(signature)) {
          return toJose(signature, recoverable);
        } else {
          if (recoverable && typeof fromJose(signature).recoveryParam === "undefined") {
            throw new Error(`not_supported: ES256K-R not supported when signer doesn't provide a recovery param`);
          }
          return signature;
        }
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
function Ed25519SignerAlg() {
  return function sign(payload, signer) {
    try {
      return Promise.resolve(signer(payload)).then(function(signature) {
        if (!instanceOfEcdsaSignature(signature)) {
          return signature;
        } else {
          throw new Error("invalid_config: expected a signer function that returns a string instead of signature object");
        }
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
var algorithms$1 = {
  ES256: ES256SignerAlg(),
  ES256K: ES256KSignerAlg(),
  // This is a non-standard algorithm but retained for backwards compatibility
  // see https://github.com/decentralized-identity/did-jwt/issues/146
  "ES256K-R": ES256KSignerAlg(true),
  // This is actually incorrect but retained for backwards compatibility
  // see https://github.com/decentralized-identity/did-jwt/issues/130
  Ed25519: Ed25519SignerAlg(),
  EdDSA: Ed25519SignerAlg()
};
function publicKeyToAddress$1(publicKey, otherAddress) {
  const version = bytesToHex2(base58ToBytes(otherAddress).slice(0, 1));
  const publicKeyBuffer = hexToBytes2(publicKey);
  const publicKeyHash = ripemd160(sha2563(publicKeyBuffer));
  const step1 = version + bytesToHex2(publicKeyHash);
  const step2 = sha2563(hexToBytes2(step1));
  const step3 = sha2563(step2);
  const checksum = bytesToHex2(step3).substring(0, 8);
  const step4 = step1 + checksum;
  return bytesToBase58(hexToBytes2(step4));
}
function publicKeyToAddress(publicKey, prefix) {
  const publicKeyBuffer = secp256k1.ProjectivePoint.fromHex(publicKey).toRawBytes();
  const hash3 = ripemd160(sha2563(publicKeyBuffer));
  const words = bech32.toWords(hash3);
  return bech32.encode(prefix, words).replace(prefix, "");
}
function verifyBlockchainAccountId(publicKey, blockchainAccountId) {
  if (blockchainAccountId) {
    const chain2 = blockchainAccountId.split(":");
    switch (chain2[0]) {
      case "bip122":
        chain2[chain2.length - 1] = publicKeyToAddress$1(publicKey, chain2[chain2.length - 1]);
        break;
      case "cosmos":
        chain2[chain2.length - 1] = publicKeyToAddress(publicKey, chain2[1]);
        break;
      case "eip155":
        chain2[chain2.length - 1] = toEthereumAddress(publicKey);
        break;
      default:
        return false;
    }
    return chain2.join(":").toLowerCase() === blockchainAccountId.toLowerCase();
  }
  return false;
}
function toSignatureObject(signature, recoverable = false) {
  const rawSig = base64ToBytes(signature);
  if (rawSig.length !== (recoverable ? 65 : 64)) {
    throw new Error("wrong signature length");
  }
  const r = bytesToHex2(rawSig.slice(0, 32));
  const s = bytesToHex2(rawSig.slice(32, 64));
  const sigObj = {
    r,
    s
  };
  if (recoverable) {
    sigObj.recoveryParam = rawSig[64];
  }
  return sigObj;
}
function toSignatureObject2(signature, recoverable = false) {
  const bytes3 = base64ToBytes(signature);
  if (bytes3.length !== (recoverable ? 65 : 64)) {
    throw new Error("wrong signature length");
  }
  return {
    compact: bytes3.slice(0, 64),
    recovery: bytes3[64]
  };
}
function extractPublicKeyBytes(pk) {
  if (pk.publicKeyBase58) {
    return base58ToBytes(pk.publicKeyBase58);
  } else if (pk.publicKeyBase64) {
    return base64ToBytes(pk.publicKeyBase64);
  } else if (pk.publicKeyHex) {
    return hexToBytes2(pk.publicKeyHex);
  } else if (pk.publicKeyJwk && pk.publicKeyJwk.crv === "secp256k1" && pk.publicKeyJwk.x && pk.publicKeyJwk.y) {
    return secp256k1.ProjectivePoint.fromAffine({
      x: bytesToBigInt(base64ToBytes(pk.publicKeyJwk.x)),
      y: bytesToBigInt(base64ToBytes(pk.publicKeyJwk.y))
    }).toRawBytes(false);
  } else if (pk.publicKeyJwk && pk.publicKeyJwk.crv === "P-256" && pk.publicKeyJwk.x && pk.publicKeyJwk.y) {
    return p256.ProjectivePoint.fromAffine({
      x: bytesToBigInt(base64ToBytes(pk.publicKeyJwk.x)),
      y: bytesToBigInt(base64ToBytes(pk.publicKeyJwk.y))
    }).toRawBytes(false);
  } else if (pk.publicKeyJwk && pk.publicKeyJwk.kty === "OKP" && ["Ed25519", "X25519"].includes(pk.publicKeyJwk.crv ?? "") && pk.publicKeyJwk.x) {
    return base64ToBytes(pk.publicKeyJwk.x);
  } else if (pk.publicKeyMultibase) {
    return multibaseToBytes(pk.publicKeyMultibase);
  }
  return new Uint8Array();
}
function verifyES256(data, signature, authenticators) {
  const hash3 = sha2563(data);
  const sig = p256.Signature.fromCompact(toSignatureObject2(signature).compact);
  const fullPublicKeys = authenticators.filter((a) => !a.ethereumAddress && !a.blockchainAccountId);
  const signer = fullPublicKeys.find((pk) => {
    try {
      const pubBytes = extractPublicKeyBytes(pk);
      return p256.verify(sig, hash3, pubBytes);
    } catch (err) {
      return false;
    }
  });
  if (!signer)
    throw new Error("invalid_signature: Signature invalid for JWT");
  return signer;
}
function verifyES256K(data, signature, authenticators) {
  const hash3 = sha2563(data);
  const signatureNormalized = secp256k1.Signature.fromCompact(base64ToBytes(signature)).normalizeS();
  const fullPublicKeys = authenticators.filter((a) => {
    return !a.ethereumAddress && !a.blockchainAccountId;
  });
  const blockchainAddressKeys = authenticators.filter((a) => {
    return a.ethereumAddress || a.blockchainAccountId;
  });
  let signer = fullPublicKeys.find((pk) => {
    try {
      const pubBytes = extractPublicKeyBytes(pk);
      return secp256k1.verify(signatureNormalized, hash3, pubBytes);
    } catch (err) {
      return false;
    }
  });
  if (!signer && blockchainAddressKeys.length > 0) {
    signer = verifyRecoverableES256K(data, signature, blockchainAddressKeys);
  }
  if (!signer)
    throw new Error("invalid_signature: Signature invalid for JWT");
  return signer;
}
function verifyRecoverableES256K(data, signature, authenticators) {
  const signatures = [];
  if (signature.length > 86) {
    signatures.push(toSignatureObject2(signature, true));
  } else {
    const so = toSignatureObject2(signature, false);
    signatures.push({
      ...so,
      recovery: 0
    });
    signatures.push({
      ...so,
      recovery: 1
    });
  }
  const hash3 = sha2563(data);
  const checkSignatureAgainstSigner = (sigObj) => {
    const signature2 = secp256k1.Signature.fromCompact(sigObj.compact).addRecoveryBit(sigObj.recovery || 0);
    const recoveredPublicKey = signature2.recoverPublicKey(hash3);
    const recoveredAddress = toEthereumAddress(recoveredPublicKey.toHex(false)).toLowerCase();
    const recoveredPublicKeyHex = recoveredPublicKey.toHex(false);
    const recoveredCompressedPublicKeyHex = recoveredPublicKey.toHex(true);
    return authenticators.find((a) => {
      const keyHex = bytesToHex2(extractPublicKeyBytes(a));
      return keyHex === recoveredPublicKeyHex || keyHex === recoveredCompressedPublicKeyHex || a.ethereumAddress?.toLowerCase() === recoveredAddress || a.blockchainAccountId?.split("@eip155")?.[0].toLowerCase() === recoveredAddress || // CAIP-2
      verifyBlockchainAccountId(recoveredPublicKeyHex, a.blockchainAccountId);
    });
  };
  for (const signature2 of signatures) {
    const verificationMethod = checkSignatureAgainstSigner(signature2);
    if (verificationMethod)
      return verificationMethod;
  }
  throw new Error("invalid_signature: Signature invalid for JWT");
}
function verifyEd25519(data, signature, authenticators) {
  const clear = stringToBytes(data);
  const signatureBytes = base64ToBytes(signature);
  const signer = authenticators.find((a) => {
    return ed25519.verify(signatureBytes, clear, extractPublicKeyBytes(a));
  });
  if (!signer)
    throw new Error("invalid_signature: Signature invalid for JWT");
  return signer;
}
var algorithms = {
  ES256: verifyES256,
  ES256K: verifyES256K,
  // This is a non-standard algorithm but retained for backwards compatibility
  // see https://github.com/decentralized-identity/did-jwt/issues/146
  "ES256K-R": verifyRecoverableES256K,
  // This is actually incorrect but retained for backwards compatibility
  // see https://github.com/decentralized-identity/did-jwt/issues/130
  Ed25519: verifyEd25519,
  EdDSA: verifyEd25519
};
function VerifierAlgorithm(alg) {
  const impl = algorithms[alg];
  if (!impl)
    throw new Error(`not_supported: Unsupported algorithm ${alg}`);
  return impl;
}
VerifierAlgorithm.toSignatureObject = toSignatureObject;
var JWT_ERROR = {
  /**
   * Thrown when a JWT payload schema is unexpected or when validity period does not match
   */
  INVALID_JWT: "invalid_jwt",
  /**
   * Thrown when the verifier audience does not match the one set in the JWT payload
   */
  INVALID_AUDIENCE: "invalid_config",
  /**
   * Thrown when none of the public keys of the issuer match the signature of the JWT.
   *
   * This is equivalent to `NO_SUITABLE_KEYS` when the `proofPurpose` is NOT specified.
   */
  INVALID_SIGNATURE: "invalid_signature",
  /**
   * Thrown when the DID document of the issuer does not have any keys that match the signature for the given
   * `proofPurpose`.
   *
   * This is equivalent to `invalid_signature`, when a `proofPurpose` is specified.
   */
  NO_SUITABLE_KEYS: "no_suitable_keys",
  /**
   * Thrown when the `alg` of the JWT or the encoding of the key is not supported
   */
  NOT_SUPPORTED: "not_supported",
  /**
   * Thrown when the DID resolver is unable to resolve the issuer DID.
   */
  RESOLVER_ERROR: "resolver_error"
};
var _iteratorSymbol$1 = typeof Symbol !== "undefined" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
function decodeJWS(jws) {
  const parts = jws.match(/^([a-zA-Z0-9_-]+)\.([a-zA-Z0-9_-]+)\.([a-zA-Z0-9_-]+)$/);
  if (parts) {
    return {
      header: JSON.parse(decodeBase64url(parts[1])),
      payload: parts[2],
      signature: parts[3],
      data: `${parts[1]}.${parts[2]}`
    };
  }
  throw new Error("invalid_argument: Incorrect format JWS");
}
function decodeJWT(jwt, recurse = true) {
  if (!jwt)
    throw new Error("invalid_argument: no JWT passed into decodeJWT");
  try {
    const jws = decodeJWS(jwt);
    const decodedJwt = Object.assign(jws, {
      payload: JSON.parse(decodeBase64url(jws.payload))
    });
    const iss = decodedJwt.payload.iss;
    if (decodedJwt.header.cty === "JWT" && recurse) {
      const innerDecodedJwt = decodeJWT(decodedJwt.payload.jwt);
      if (innerDecodedJwt.payload.iss !== iss)
        throw new Error(`${JWT_ERROR.INVALID_JWT}: multiple issuers`);
      return innerDecodedJwt;
    }
    return decodedJwt;
  } catch (e) {
    throw new Error("invalid_argument: Incorrect format JWT");
  }
}
var _iteratorSymbol = typeof Symbol !== "undefined" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";

// node_modules/.pnpm/did-jwt-vc@3.2.11/node_modules/did-jwt-vc/lib/index.module.js
var JWT_FORMAT = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/;
var DEFAULT_CONTEXT = "https://www.w3.org/2018/credentials/v1";
var DEFAULT_VC_TYPE = "VerifiableCredential";
var DEFAULT_JWT_PROOF_TYPE = "JwtProof2020";
var additionalPropNames = ["evidence", "termsOfUse", "refreshService", "credentialSchema", "credentialStatus"];
function asArray(arg) {
  return Array.isArray(arg) ? arg : [arg];
}
function deepCopy(source) {
  return Array.isArray(source) ? source.map((item) => deepCopy(item)) : source instanceof Date ? new Date(source.getTime()) : source && typeof source === "object" ? Object.getOwnPropertyNames(source).reduce((o, prop) => {
    Object.defineProperty(o, prop, Object.getOwnPropertyDescriptor(source, prop));
    o[prop] = deepCopy(source[prop]);
    return o;
  }, Object.create(Object.getPrototypeOf(source))) : source;
}
function notEmpty(value) {
  return value !== null && value !== void 0;
}
function cleanUndefined(input) {
  if (typeof input !== "object" || input === null) {
    return input;
  }
  const obj = {
    ...input
  };
  Object.keys(obj).forEach((key) => obj[key] === void 0 && delete obj[key]);
  return obj;
}
function isLegacyAttestationFormat(payload) {
  return typeof payload === "object" && payload.sub && payload.iss && payload.claim && payload.iat;
}
function attestationToVcFormat(payload) {
  const {
    iat,
    nbf,
    claim,
    vc,
    ...rest
  } = payload;
  const result = {
    ...rest,
    nbf: nbf ? nbf : iat,
    vc: {
      "@context": [DEFAULT_CONTEXT],
      type: [DEFAULT_VC_TYPE],
      credentialSubject: claim
    }
  };
  if (vc)
    payload.issVc = vc;
  return result;
}
function normalizeJwtCredentialPayload(input, removeOriginalFields = true) {
  let result = deepCopy(input);
  if (isLegacyAttestationFormat(input)) {
    result = attestationToVcFormat(input);
  }
  result.credentialSubject = {
    ...input.credentialSubject,
    ...input.vc?.credentialSubject
  };
  if (input.sub && !input.credentialSubject?.id && result.credentialSubject) {
    result.credentialSubject.id = input.sub;
    if (removeOriginalFields) {
      delete result.sub;
    }
  }
  if (removeOriginalFields) {
    delete result.vc?.credentialSubject;
  }
  if (typeof input.issuer === "undefined" || typeof input.issuer === "object") {
    result.issuer = cleanUndefined({
      id: input.iss,
      ...input.issuer
    });
    if (removeOriginalFields && !input.issuer?.id) {
      delete result.iss;
    }
  }
  if (!input.id && input.jti) {
    result.id = result.id || result.jti;
    if (removeOriginalFields) {
      delete result.jti;
    }
  }
  const types2 = [...asArray(result.type), ...asArray(result.vc?.type)].filter(notEmpty);
  result.type = [...new Set(types2)];
  if (removeOriginalFields) {
    delete result.vc?.type;
  }
  for (const prop of additionalPropNames) {
    if (input.vc && input.vc[prop]) {
      if (!result[prop]) {
        result[prop] = input.vc[prop];
      }
      if (removeOriginalFields) {
        delete result.vc[prop];
      }
    }
  }
  const contextArray = [...asArray(input.context), ...asArray(input["@context"]), ...asArray(input.vc?.["@context"])].filter(notEmpty);
  result["@context"] = [...new Set(contextArray)];
  if (removeOriginalFields) {
    delete result.context;
    delete result.vc?.["@context"];
  }
  if (!input.issuanceDate && (input.iat || input.nbf)) {
    result.issuanceDate = new Date((input.nbf || input.iat) * 1e3).toISOString();
    if (removeOriginalFields) {
      if (input.nbf) {
        delete result.nbf;
      } else {
        delete result.iat;
      }
    }
  }
  if (!input.expirationDate && input.exp) {
    result.expirationDate = new Date(input.exp * 1e3).toISOString();
    if (removeOriginalFields) {
      delete result.exp;
    }
  }
  if (removeOriginalFields) {
    if (result.vc && Object.keys(result.vc).length === 0) {
      delete result.vc;
    }
  }
  return result;
}
function normalizeJwtCredential(input, removeOriginalFields = true) {
  let decoded;
  try {
    decoded = decodeJWT(input);
  } catch (e) {
    throw new TypeError("unknown credential format");
  }
  return {
    ...normalizeJwtCredentialPayload(decoded.payload, removeOriginalFields),
    proof: {
      type: DEFAULT_JWT_PROOF_TYPE,
      jwt: input
    }
  };
}
function normalizeCredential(input, removeOriginalFields = true) {
  if (typeof input === "string") {
    if (JWT_FORMAT.test(input)) {
      return normalizeJwtCredential(input, removeOriginalFields);
    } else {
      let parsed;
      try {
        parsed = JSON.parse(input);
      } catch (e) {
        throw new TypeError("unknown credential format");
      }
      return normalizeCredential(parsed, removeOriginalFields);
    }
  } else if (input.proof?.jwt) {
    return deepCopy({
      ...normalizeJwtCredential(input.proof.jwt, removeOriginalFields),
      proof: input.proof
    });
  } else {
    return {
      proof: {},
      ...normalizeJwtCredentialPayload(input, removeOriginalFields)
    };
  }
}
var VC_ERROR = {
  /**
   * Thrown when the credential or presentation being verified does not conform to the data model defined by
   * {@link https://www.w3.org/TR/vc-data-model/ | the spec}
   */
  SCHEMA_ERROR: "schema_error",
  /**
   * Thrown when the input is not a JWT string
   */
  FORMAT_ERROR: "format_error",
  /**
   * Thrown when verifying a presentation where `challenge` and/or `domain` don't match the expected values.
   */
  AUTH_ERROR: "auth_error"
};
var VC_JWT_ERROR = {
  ...VC_ERROR,
  ...JWT_ERROR
};

// node_modules/.pnpm/@ipld+dag-pb@4.0.6/node_modules/@ipld/dag-pb/src/pb-decode.js
var textDecoder2 = new TextDecoder();

// node_modules/.pnpm/@ipld+dag-pb@4.0.6/node_modules/@ipld/dag-pb/src/pb-encode.js
var textEncoder2 = new TextEncoder();
var maxInt32 = 2 ** 32;
var maxUInt32 = 2 ** 31;
function encodeLink(link, bytes3) {
  let i = bytes3.length;
  if (typeof link.Tsize === "number") {
    if (link.Tsize < 0) {
      throw new Error("Tsize cannot be negative");
    }
    if (!Number.isSafeInteger(link.Tsize)) {
      throw new Error("Tsize too large for encoding");
    }
    i = encodeVarint(bytes3, i, link.Tsize) - 1;
    bytes3[i] = 24;
  }
  if (typeof link.Name === "string") {
    const nameBytes = textEncoder2.encode(link.Name);
    i -= nameBytes.length;
    bytes3.set(nameBytes, i);
    i = encodeVarint(bytes3, i, nameBytes.length) - 1;
    bytes3[i] = 18;
  }
  if (link.Hash) {
    i -= link.Hash.length;
    bytes3.set(link.Hash, i);
    i = encodeVarint(bytes3, i, link.Hash.length) - 1;
    bytes3[i] = 10;
  }
  return bytes3.length - i;
}
function encodeNode(node) {
  const size = sizeNode(node);
  const bytes3 = new Uint8Array(size);
  let i = size;
  if (node.Data) {
    i -= node.Data.length;
    bytes3.set(node.Data, i);
    i = encodeVarint(bytes3, i, node.Data.length) - 1;
    bytes3[i] = 10;
  }
  if (node.Links) {
    for (let index2 = node.Links.length - 1; index2 >= 0; index2--) {
      const size2 = encodeLink(node.Links[index2], bytes3.subarray(0, i));
      i -= size2;
      i = encodeVarint(bytes3, i, size2) - 1;
      bytes3[i] = 18;
    }
  }
  return bytes3;
}
function sizeLink(link) {
  let n = 0;
  if (link.Hash) {
    const l2 = link.Hash.length;
    n += 1 + l2 + sov(l2);
  }
  if (typeof link.Name === "string") {
    const l2 = textEncoder2.encode(link.Name).length;
    n += 1 + l2 + sov(l2);
  }
  if (typeof link.Tsize === "number") {
    n += 1 + sov(link.Tsize);
  }
  return n;
}
function sizeNode(node) {
  let n = 0;
  if (node.Data) {
    const l2 = node.Data.length;
    n += 1 + l2 + sov(l2);
  }
  if (node.Links) {
    for (const link of node.Links) {
      const l2 = sizeLink(link);
      n += 1 + l2 + sov(l2);
    }
  }
  return n;
}
function encodeVarint(bytes3, offset, v2) {
  offset -= sov(v2);
  const base3 = offset;
  while (v2 >= maxUInt32) {
    bytes3[offset++] = v2 & 127 | 128;
    v2 /= 128;
  }
  while (v2 >= 128) {
    bytes3[offset++] = v2 & 127 | 128;
    v2 >>>= 7;
  }
  bytes3[offset] = v2;
  return base3;
}
function sov(x) {
  if (x % 2 === 0) {
    x++;
  }
  return Math.floor((len64(x) + 6) / 7);
}
function len64(x) {
  let n = 0;
  if (x >= maxInt32) {
    x = Math.floor(x / maxInt32);
    n = 32;
  }
  if (x >= 1 << 16) {
    x >>>= 16;
    n += 16;
  }
  if (x >= 1 << 8) {
    x >>>= 8;
    n += 8;
  }
  return n + len8tab[x];
}
var len8tab = [
  0,
  1,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8
];

// node_modules/.pnpm/@ipld+dag-pb@4.0.6/node_modules/@ipld/dag-pb/src/util.js
var pbNodeProperties = ["Data", "Links"];
var pbLinkProperties = ["Hash", "Name", "Tsize"];
var textEncoder3 = new TextEncoder();
function linkComparator(a, b) {
  if (a === b) {
    return 0;
  }
  const abuf = a.Name ? textEncoder3.encode(a.Name) : [];
  const bbuf = b.Name ? textEncoder3.encode(b.Name) : [];
  let x = abuf.length;
  let y = bbuf.length;
  for (let i = 0, len = Math.min(x, y); i < len; ++i) {
    if (abuf[i] !== bbuf[i]) {
      x = abuf[i];
      y = bbuf[i];
      break;
    }
  }
  return x < y ? -1 : y < x ? 1 : 0;
}
function hasOnlyProperties(node, properties) {
  return !Object.keys(node).some((p) => !properties.includes(p));
}
function asLink(link) {
  if (typeof link.asCID === "object") {
    const Hash2 = CID.asCID(link);
    if (!Hash2) {
      throw new TypeError("Invalid DAG-PB form");
    }
    return { Hash: Hash2 };
  }
  if (typeof link !== "object" || Array.isArray(link)) {
    throw new TypeError("Invalid DAG-PB form");
  }
  const pbl = {};
  if (link.Hash) {
    let cid = CID.asCID(link.Hash);
    try {
      if (!cid) {
        if (typeof link.Hash === "string") {
          cid = CID.parse(link.Hash);
        } else if (link.Hash instanceof Uint8Array) {
          cid = CID.decode(link.Hash);
        }
      }
    } catch (e) {
      throw new TypeError(`Invalid DAG-PB form: ${e.message}`);
    }
    if (cid) {
      pbl.Hash = cid;
    }
  }
  if (!pbl.Hash) {
    throw new TypeError("Invalid DAG-PB form");
  }
  if (typeof link.Name === "string") {
    pbl.Name = link.Name;
  }
  if (typeof link.Tsize === "number") {
    pbl.Tsize = link.Tsize;
  }
  return pbl;
}
function prepare(node) {
  if (node instanceof Uint8Array || typeof node === "string") {
    node = { Data: node };
  }
  if (typeof node !== "object" || Array.isArray(node)) {
    throw new TypeError("Invalid DAG-PB form");
  }
  const pbn = {};
  if (node.Data !== void 0) {
    if (typeof node.Data === "string") {
      pbn.Data = textEncoder3.encode(node.Data);
    } else if (node.Data instanceof Uint8Array) {
      pbn.Data = node.Data;
    } else {
      throw new TypeError("Invalid DAG-PB form");
    }
  }
  if (node.Links !== void 0) {
    if (Array.isArray(node.Links)) {
      pbn.Links = node.Links.map(asLink);
      pbn.Links.sort(linkComparator);
    } else {
      throw new TypeError("Invalid DAG-PB form");
    }
  } else {
    pbn.Links = [];
  }
  return pbn;
}
function validate(node) {
  if (!node || typeof node !== "object" || Array.isArray(node) || node instanceof Uint8Array || node["/"] && node["/"] === node.bytes) {
    throw new TypeError("Invalid DAG-PB form");
  }
  if (!hasOnlyProperties(node, pbNodeProperties)) {
    throw new TypeError("Invalid DAG-PB form (extraneous properties)");
  }
  if (node.Data !== void 0 && !(node.Data instanceof Uint8Array)) {
    throw new TypeError("Invalid DAG-PB form (Data must be bytes)");
  }
  if (!Array.isArray(node.Links)) {
    throw new TypeError("Invalid DAG-PB form (Links must be a list)");
  }
  for (let i = 0; i < node.Links.length; i++) {
    const link = node.Links[i];
    if (!link || typeof link !== "object" || Array.isArray(link) || link instanceof Uint8Array || link["/"] && link["/"] === link.bytes) {
      throw new TypeError("Invalid DAG-PB form (bad link)");
    }
    if (!hasOnlyProperties(link, pbLinkProperties)) {
      throw new TypeError("Invalid DAG-PB form (extraneous properties on link)");
    }
    if (link.Hash === void 0) {
      throw new TypeError("Invalid DAG-PB form (link must have a Hash)");
    }
    if (link.Hash == null || !link.Hash["/"] || link.Hash["/"] !== link.Hash.bytes) {
      throw new TypeError("Invalid DAG-PB form (link Hash must be a CID)");
    }
    if (link.Name !== void 0 && typeof link.Name !== "string") {
      throw new TypeError("Invalid DAG-PB form (link Name must be a string)");
    }
    if (link.Tsize !== void 0) {
      if (typeof link.Tsize !== "number" || link.Tsize % 1 !== 0) {
        throw new TypeError("Invalid DAG-PB form (link Tsize must be an integer)");
      }
      if (link.Tsize < 0) {
        throw new TypeError("Invalid DAG-PB form (link Tsize cannot be negative)");
      }
    }
    if (i > 0 && linkComparator(link, node.Links[i - 1]) === -1) {
      throw new TypeError("Invalid DAG-PB form (links must be sorted by Name bytes)");
    }
  }
}

// node_modules/.pnpm/@ipld+dag-pb@4.0.6/node_modules/@ipld/dag-pb/src/index.js
var code2 = 112;
function encode5(node) {
  validate(node);
  const pbn = {};
  if (node.Links) {
    pbn.Links = node.Links.map((l2) => {
      const link = {};
      if (l2.Hash) {
        link.Hash = l2.Hash.bytes;
      }
      if (l2.Name !== void 0) {
        link.Name = l2.Name;
      }
      if (l2.Tsize !== void 0) {
        link.Tsize = l2.Tsize;
      }
      return link;
    });
  }
  if (node.Data) {
    pbn.Data = node.Data;
  }
  return encodeNode(pbn);
}

// node_modules/.pnpm/ipfs-unixfs@11.1.0/node_modules/ipfs-unixfs/dist/src/index.js
var import_err_code = __toESM(require_err_code(), 1);

// node_modules/.pnpm/protons-runtime@5.0.5/node_modules/protons-runtime/dist/src/utils/float.js
var f32 = new Float32Array([-0]);
var f8b = new Uint8Array(f32.buffer);
function writeFloatLE(val, buf, pos) {
  f32[0] = val;
  buf[pos] = f8b[0];
  buf[pos + 1] = f8b[1];
  buf[pos + 2] = f8b[2];
  buf[pos + 3] = f8b[3];
}
function readFloatLE(buf, pos) {
  f8b[0] = buf[pos];
  f8b[1] = buf[pos + 1];
  f8b[2] = buf[pos + 2];
  f8b[3] = buf[pos + 3];
  return f32[0];
}
var f64 = new Float64Array([-0]);
var d8b = new Uint8Array(f64.buffer);
function writeDoubleLE(val, buf, pos) {
  f64[0] = val;
  buf[pos] = d8b[0];
  buf[pos + 1] = d8b[1];
  buf[pos + 2] = d8b[2];
  buf[pos + 3] = d8b[3];
  buf[pos + 4] = d8b[4];
  buf[pos + 5] = d8b[5];
  buf[pos + 6] = d8b[6];
  buf[pos + 7] = d8b[7];
}
function readDoubleLE(buf, pos) {
  d8b[0] = buf[pos];
  d8b[1] = buf[pos + 1];
  d8b[2] = buf[pos + 2];
  d8b[3] = buf[pos + 3];
  d8b[4] = buf[pos + 4];
  d8b[5] = buf[pos + 5];
  d8b[6] = buf[pos + 6];
  d8b[7] = buf[pos + 7];
  return f64[0];
}

// node_modules/.pnpm/protons-runtime@5.0.5/node_modules/protons-runtime/dist/src/utils/longbits.js
var LongBits = class _LongBits {
  lo;
  hi;
  constructor(lo, hi) {
    this.lo = lo | 0;
    this.hi = hi | 0;
  }
  /**
   * Converts this long bits to a possibly unsafe JavaScript number
   */
  toBigInt(unsigned = false) {
    if (unsigned) {
      const result = BigInt(this.lo >>> 0) + (BigInt(this.hi >>> 0) << 32n);
      return result;
    }
    if (this.hi >>> 31 !== 0) {
      const lo = ~this.lo + 1 >>> 0;
      let hi = ~this.hi >>> 0;
      if (lo === 0) {
        hi = hi + 1 >>> 0;
      }
      return -(BigInt(lo) + (BigInt(hi) << 32n));
    }
    return BigInt(this.lo >>> 0) + (BigInt(this.hi >>> 0) << 32n);
  }
  /**
   * Zig-zag encodes this long bits
   */
  zzEncode() {
    const mask = this.hi >> 31;
    this.hi = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
    this.lo = (this.lo << 1 ^ mask) >>> 0;
    return this;
  }
  /**
   * Zig-zag decodes this long bits
   */
  zzDecode() {
    const mask = -(this.lo & 1);
    this.lo = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
    this.hi = (this.hi >>> 1 ^ mask) >>> 0;
    return this;
  }
  /**
   * Calculates the length of this longbits when encoded as a varint.
   */
  length() {
    const part0 = this.lo;
    const part1 = (this.lo >>> 28 | this.hi << 4) >>> 0;
    const part2 = this.hi >>> 24;
    return part2 === 0 ? part1 === 0 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 2097152 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 2097152 ? 7 : 8 : part2 < 128 ? 9 : 10;
  }
  /**
   * Constructs new long bits from the specified number
   */
  static fromBigInt(value) {
    if (value === 0n) {
      return zero;
    }
    const negative = value < 0;
    if (negative) {
      value = -value;
    }
    let hi = Number(value >> 32n);
    let lo = Number(value - (BigInt(hi) << 32n));
    if (negative) {
      hi = ~hi >>> 0;
      lo = ~lo >>> 0;
      if (++lo > TWO_32) {
        lo = 0;
        if (++hi > TWO_32) {
          hi = 0;
        }
      }
    }
    return new _LongBits(lo, hi);
  }
  /**
   * Constructs new long bits from the specified number
   */
  static fromNumber(value) {
    if (value === 0) {
      return zero;
    }
    const sign = value < 0;
    if (sign) {
      value = -value;
    }
    let lo = value >>> 0;
    let hi = (value - lo) / 4294967296 >>> 0;
    if (sign) {
      hi = ~hi >>> 0;
      lo = ~lo >>> 0;
      if (++lo > 4294967295) {
        lo = 0;
        if (++hi > 4294967295) {
          hi = 0;
        }
      }
    }
    return new _LongBits(lo, hi);
  }
  /**
   * Constructs new long bits from a number, long or string
   */
  static from(value) {
    if (typeof value === "number") {
      return _LongBits.fromNumber(value);
    }
    if (typeof value === "bigint") {
      return _LongBits.fromBigInt(value);
    }
    if (typeof value === "string") {
      return _LongBits.fromBigInt(BigInt(value));
    }
    return value.low != null || value.high != null ? new _LongBits(value.low >>> 0, value.high >>> 0) : zero;
  }
};
var zero = new LongBits(0, 0);
zero.toBigInt = function() {
  return 0n;
};
zero.zzEncode = zero.zzDecode = function() {
  return this;
};
zero.length = function() {
  return 1;
};
var TWO_32 = 4294967296n;

// node_modules/.pnpm/protons-runtime@5.0.5/node_modules/protons-runtime/dist/src/utils/utf8.js
function length2(string2) {
  let len = 0;
  let c = 0;
  for (let i = 0; i < string2.length; ++i) {
    c = string2.charCodeAt(i);
    if (c < 128) {
      len += 1;
    } else if (c < 2048) {
      len += 2;
    } else if ((c & 64512) === 55296 && (string2.charCodeAt(i + 1) & 64512) === 56320) {
      ++i;
      len += 4;
    } else {
      len += 3;
    }
  }
  return len;
}
function read2(buffer, start, end) {
  const len = end - start;
  if (len < 1) {
    return "";
  }
  let parts;
  const chunk = [];
  let i = 0;
  let t;
  while (start < end) {
    t = buffer[start++];
    if (t < 128) {
      chunk[i++] = t;
    } else if (t > 191 && t < 224) {
      chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
    } else if (t > 239 && t < 365) {
      t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 65536;
      chunk[i++] = 55296 + (t >> 10);
      chunk[i++] = 56320 + (t & 1023);
    } else {
      chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
    }
    if (i > 8191) {
      (parts ?? (parts = [])).push(String.fromCharCode.apply(String, chunk));
      i = 0;
    }
  }
  if (parts != null) {
    if (i > 0) {
      parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
    }
    return parts.join("");
  }
  return String.fromCharCode.apply(String, chunk.slice(0, i));
}
function write(string2, buffer, offset) {
  const start = offset;
  let c1;
  let c2;
  for (let i = 0; i < string2.length; ++i) {
    c1 = string2.charCodeAt(i);
    if (c1 < 128) {
      buffer[offset++] = c1;
    } else if (c1 < 2048) {
      buffer[offset++] = c1 >> 6 | 192;
      buffer[offset++] = c1 & 63 | 128;
    } else if ((c1 & 64512) === 55296 && ((c2 = string2.charCodeAt(i + 1)) & 64512) === 56320) {
      c1 = 65536 + ((c1 & 1023) << 10) + (c2 & 1023);
      ++i;
      buffer[offset++] = c1 >> 18 | 240;
      buffer[offset++] = c1 >> 12 & 63 | 128;
      buffer[offset++] = c1 >> 6 & 63 | 128;
      buffer[offset++] = c1 & 63 | 128;
    } else {
      buffer[offset++] = c1 >> 12 | 224;
      buffer[offset++] = c1 >> 6 & 63 | 128;
      buffer[offset++] = c1 & 63 | 128;
    }
  }
  return offset - start;
}

// node_modules/.pnpm/protons-runtime@5.0.5/node_modules/protons-runtime/dist/src/utils/reader.js
function indexOutOfRange(reader, writeLength) {
  return RangeError(`index out of range: ${reader.pos} + ${writeLength ?? 1} > ${reader.len}`);
}
function readFixed32End(buf, end) {
  return (buf[end - 4] | buf[end - 3] << 8 | buf[end - 2] << 16 | buf[end - 1] << 24) >>> 0;
}
var Uint8ArrayReader = class {
  buf;
  pos;
  len;
  _slice = Uint8Array.prototype.subarray;
  constructor(buffer) {
    this.buf = buffer;
    this.pos = 0;
    this.len = buffer.length;
  }
  /**
   * Reads a varint as an unsigned 32 bit value
   */
  uint32() {
    let value = 4294967295;
    value = (this.buf[this.pos] & 127) >>> 0;
    if (this.buf[this.pos++] < 128)
      return value;
    value = (value | (this.buf[this.pos] & 127) << 7) >>> 0;
    if (this.buf[this.pos++] < 128)
      return value;
    value = (value | (this.buf[this.pos] & 127) << 14) >>> 0;
    if (this.buf[this.pos++] < 128)
      return value;
    value = (value | (this.buf[this.pos] & 127) << 21) >>> 0;
    if (this.buf[this.pos++] < 128)
      return value;
    value = (value | (this.buf[this.pos] & 15) << 28) >>> 0;
    if (this.buf[this.pos++] < 128)
      return value;
    if ((this.pos += 5) > this.len) {
      this.pos = this.len;
      throw indexOutOfRange(this, 10);
    }
    return value;
  }
  /**
   * Reads a varint as a signed 32 bit value
   */
  int32() {
    return this.uint32() | 0;
  }
  /**
   * Reads a zig-zag encoded varint as a signed 32 bit value
   */
  sint32() {
    const value = this.uint32();
    return value >>> 1 ^ -(value & 1) | 0;
  }
  /**
   * Reads a varint as a boolean
   */
  bool() {
    return this.uint32() !== 0;
  }
  /**
   * Reads fixed 32 bits as an unsigned 32 bit integer
   */
  fixed32() {
    if (this.pos + 4 > this.len) {
      throw indexOutOfRange(this, 4);
    }
    const res = readFixed32End(this.buf, this.pos += 4);
    return res;
  }
  /**
   * Reads fixed 32 bits as a signed 32 bit integer
   */
  sfixed32() {
    if (this.pos + 4 > this.len) {
      throw indexOutOfRange(this, 4);
    }
    const res = readFixed32End(this.buf, this.pos += 4) | 0;
    return res;
  }
  /**
   * Reads a float (32 bit) as a number
   */
  float() {
    if (this.pos + 4 > this.len) {
      throw indexOutOfRange(this, 4);
    }
    const value = readFloatLE(this.buf, this.pos);
    this.pos += 4;
    return value;
  }
  /**
   * Reads a double (64 bit float) as a number
   */
  double() {
    if (this.pos + 8 > this.len) {
      throw indexOutOfRange(this, 4);
    }
    const value = readDoubleLE(this.buf, this.pos);
    this.pos += 8;
    return value;
  }
  /**
   * Reads a sequence of bytes preceded by its length as a varint
   */
  bytes() {
    const length3 = this.uint32();
    const start = this.pos;
    const end = this.pos + length3;
    if (end > this.len) {
      throw indexOutOfRange(this, length3);
    }
    this.pos += length3;
    return start === end ? new Uint8Array(0) : this.buf.subarray(start, end);
  }
  /**
   * Reads a string preceded by its byte length as a varint
   */
  string() {
    const bytes3 = this.bytes();
    return read2(bytes3, 0, bytes3.length);
  }
  /**
   * Skips the specified number of bytes if specified, otherwise skips a varint
   */
  skip(length3) {
    if (typeof length3 === "number") {
      if (this.pos + length3 > this.len) {
        throw indexOutOfRange(this, length3);
      }
      this.pos += length3;
    } else {
      do {
        if (this.pos >= this.len) {
          throw indexOutOfRange(this);
        }
      } while ((this.buf[this.pos++] & 128) !== 0);
    }
    return this;
  }
  /**
   * Skips the next element of the specified wire type
   */
  skipType(wireType) {
    switch (wireType) {
      case 0:
        this.skip();
        break;
      case 1:
        this.skip(8);
        break;
      case 2:
        this.skip(this.uint32());
        break;
      case 3:
        while ((wireType = this.uint32() & 7) !== 4) {
          this.skipType(wireType);
        }
        break;
      case 5:
        this.skip(4);
        break;
      default:
        throw Error(`invalid wire type ${wireType} at offset ${this.pos}`);
    }
    return this;
  }
  readLongVarint() {
    const bits = new LongBits(0, 0);
    let i = 0;
    if (this.len - this.pos > 4) {
      for (; i < 4; ++i) {
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
        if (this.buf[this.pos++] < 128) {
          return bits;
        }
      }
      bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
      bits.hi = (bits.hi | (this.buf[this.pos] & 127) >> 4) >>> 0;
      if (this.buf[this.pos++] < 128) {
        return bits;
      }
      i = 0;
    } else {
      for (; i < 3; ++i) {
        if (this.pos >= this.len) {
          throw indexOutOfRange(this);
        }
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
        if (this.buf[this.pos++] < 128) {
          return bits;
        }
      }
      bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
      return bits;
    }
    if (this.len - this.pos > 4) {
      for (; i < 5; ++i) {
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
        if (this.buf[this.pos++] < 128) {
          return bits;
        }
      }
    } else {
      for (; i < 5; ++i) {
        if (this.pos >= this.len) {
          throw indexOutOfRange(this);
        }
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
        if (this.buf[this.pos++] < 128) {
          return bits;
        }
      }
    }
    throw Error("invalid varint encoding");
  }
  readFixed64() {
    if (this.pos + 8 > this.len) {
      throw indexOutOfRange(this, 8);
    }
    const lo = readFixed32End(this.buf, this.pos += 4);
    const hi = readFixed32End(this.buf, this.pos += 4);
    return new LongBits(lo, hi);
  }
  /**
   * Reads a varint as a signed 64 bit value
   */
  int64() {
    return this.readLongVarint().toBigInt();
  }
  /**
   * Reads a varint as an unsigned 64 bit value
   */
  uint64() {
    return this.readLongVarint().toBigInt(true);
  }
  /**
   * Reads a zig-zag encoded varint as a signed 64 bit value
   */
  sint64() {
    return this.readLongVarint().zzDecode().toBigInt();
  }
  /**
   * Reads fixed 64 bits
   */
  fixed64() {
    return this.readFixed64().toBigInt();
  }
  /**
   * Reads zig-zag encoded fixed 64 bits
   */
  sfixed64() {
    return this.readFixed64().toBigInt();
  }
};
function createReader(buf) {
  return new Uint8ArrayReader(buf instanceof Uint8Array ? buf : buf.subarray());
}

// node_modules/.pnpm/protons-runtime@5.0.5/node_modules/protons-runtime/dist/src/decode.js
function decodeMessage(buf, codec) {
  const reader = createReader(buf);
  return codec.decode(reader);
}

// node_modules/.pnpm/protons-runtime@5.0.5/node_modules/protons-runtime/dist/src/utils/pool.js
function pool(size) {
  const SIZE = size ?? 8192;
  const MAX = SIZE >>> 1;
  let slab;
  let offset = SIZE;
  return function poolAlloc(size2) {
    if (size2 < 1 || size2 > MAX) {
      return allocUnsafe(size2);
    }
    if (offset + size2 > SIZE) {
      slab = allocUnsafe(SIZE);
      offset = 0;
    }
    const buf = slab.subarray(offset, offset += size2);
    if ((offset & 7) !== 0) {
      offset = (offset | 7) + 1;
    }
    return buf;
  };
}

// node_modules/.pnpm/protons-runtime@5.0.5/node_modules/protons-runtime/dist/src/utils/writer.js
var Op = class {
  /**
   * Function to call
   */
  fn;
  /**
   * Value byte length
   */
  len;
  /**
   * Next operation
   */
  next;
  /**
   * Value to write
   */
  val;
  constructor(fn, len, val) {
    this.fn = fn;
    this.len = len;
    this.next = void 0;
    this.val = val;
  }
};
function noop() {
}
var State = class {
  /**
   * Current head
   */
  head;
  /**
   * Current tail
   */
  tail;
  /**
   * Current buffer length
   */
  len;
  /**
   * Next state
   */
  next;
  constructor(writer) {
    this.head = writer.head;
    this.tail = writer.tail;
    this.len = writer.len;
    this.next = writer.states;
  }
};
var bufferPool = pool();
function alloc(size) {
  if (globalThis.Buffer != null) {
    return allocUnsafe(size);
  }
  return bufferPool(size);
}
var Uint8ArrayWriter = class {
  /**
   * Current length
   */
  len;
  /**
   * Operations head
   */
  head;
  /**
   * Operations tail
   */
  tail;
  /**
   * Linked forked states
   */
  states;
  constructor() {
    this.len = 0;
    this.head = new Op(noop, 0, 0);
    this.tail = this.head;
    this.states = null;
  }
  /**
   * Pushes a new operation to the queue
   */
  _push(fn, len, val) {
    this.tail = this.tail.next = new Op(fn, len, val);
    this.len += len;
    return this;
  }
  /**
   * Writes an unsigned 32 bit value as a varint
   */
  uint32(value) {
    this.len += (this.tail = this.tail.next = new VarintOp((value = value >>> 0) < 128 ? 1 : value < 16384 ? 2 : value < 2097152 ? 3 : value < 268435456 ? 4 : 5, value)).len;
    return this;
  }
  /**
   * Writes a signed 32 bit value as a varint`
   */
  int32(value) {
    return value < 0 ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) : this.uint32(value);
  }
  /**
   * Writes a 32 bit value as a varint, zig-zag encoded
   */
  sint32(value) {
    return this.uint32((value << 1 ^ value >> 31) >>> 0);
  }
  /**
   * Writes an unsigned 64 bit value as a varint
   */
  uint64(value) {
    const bits = LongBits.fromBigInt(value);
    return this._push(writeVarint64, bits.length(), bits);
  }
  /**
   * Writes a signed 64 bit value as a varint
   */
  int64(value) {
    return this.uint64(value);
  }
  /**
   * Writes a signed 64 bit value as a varint, zig-zag encoded
   */
  sint64(value) {
    const bits = LongBits.fromBigInt(value).zzEncode();
    return this._push(writeVarint64, bits.length(), bits);
  }
  /**
   * Writes a boolish value as a varint
   */
  bool(value) {
    return this._push(writeByte, 1, value ? 1 : 0);
  }
  /**
   * Writes an unsigned 32 bit value as fixed 32 bits
   */
  fixed32(value) {
    return this._push(writeFixed32, 4, value >>> 0);
  }
  /**
   * Writes a signed 32 bit value as fixed 32 bits
   */
  sfixed32(value) {
    return this.fixed32(value);
  }
  /**
   * Writes an unsigned 64 bit value as fixed 64 bits
   */
  fixed64(value) {
    const bits = LongBits.fromBigInt(value);
    return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
  }
  /**
   * Writes a signed 64 bit value as fixed 64 bits
   */
  sfixed64(value) {
    return this.fixed64(value);
  }
  /**
   * Writes a float (32 bit)
   */
  float(value) {
    return this._push(writeFloatLE, 4, value);
  }
  /**
   * Writes a double (64 bit float).
   *
   * @function
   * @param {number} value - Value to write
   * @returns {Writer} `this`
   */
  double(value) {
    return this._push(writeDoubleLE, 8, value);
  }
  /**
   * Writes a sequence of bytes
   */
  bytes(value) {
    const len = value.length >>> 0;
    if (len === 0) {
      return this._push(writeByte, 1, 0);
    }
    return this.uint32(len)._push(writeBytes, len, value);
  }
  /**
   * Writes a string
   */
  string(value) {
    const len = length2(value);
    return len !== 0 ? this.uint32(len)._push(write, len, value) : this._push(writeByte, 1, 0);
  }
  /**
   * Forks this writer's state by pushing it to a stack.
   * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
   */
  fork() {
    this.states = new State(this);
    this.head = this.tail = new Op(noop, 0, 0);
    this.len = 0;
    return this;
  }
  /**
   * Resets this instance to the last state
   */
  reset() {
    if (this.states != null) {
      this.head = this.states.head;
      this.tail = this.states.tail;
      this.len = this.states.len;
      this.states = this.states.next;
    } else {
      this.head = this.tail = new Op(noop, 0, 0);
      this.len = 0;
    }
    return this;
  }
  /**
   * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
   */
  ldelim() {
    const head = this.head;
    const tail = this.tail;
    const len = this.len;
    this.reset().uint32(len);
    if (len !== 0) {
      this.tail.next = head.next;
      this.tail = tail;
      this.len += len;
    }
    return this;
  }
  /**
   * Finishes the write operation
   */
  finish() {
    let head = this.head.next;
    const buf = alloc(this.len);
    let pos = 0;
    while (head != null) {
      head.fn(head.val, buf, pos);
      pos += head.len;
      head = head.next;
    }
    return buf;
  }
};
function writeByte(val, buf, pos) {
  buf[pos] = val & 255;
}
function writeVarint32(val, buf, pos) {
  while (val > 127) {
    buf[pos++] = val & 127 | 128;
    val >>>= 7;
  }
  buf[pos] = val;
}
var VarintOp = class extends Op {
  next;
  constructor(len, val) {
    super(writeVarint32, len, val);
    this.next = void 0;
  }
};
function writeVarint64(val, buf, pos) {
  while (val.hi !== 0) {
    buf[pos++] = val.lo & 127 | 128;
    val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
    val.hi >>>= 7;
  }
  while (val.lo > 127) {
    buf[pos++] = val.lo & 127 | 128;
    val.lo = val.lo >>> 7;
  }
  buf[pos++] = val.lo;
}
function writeFixed32(val, buf, pos) {
  buf[pos] = val & 255;
  buf[pos + 1] = val >>> 8 & 255;
  buf[pos + 2] = val >>> 16 & 255;
  buf[pos + 3] = val >>> 24;
}
function writeBytes(val, buf, pos) {
  buf.set(val, pos);
}
if (globalThis.Buffer != null) {
  Uint8ArrayWriter.prototype.bytes = function(value) {
    const len = value.length >>> 0;
    this.uint32(len);
    if (len > 0) {
      this._push(writeBytesBuffer, len, value);
    }
    return this;
  };
  Uint8ArrayWriter.prototype.string = function(value) {
    const len = globalThis.Buffer.byteLength(value);
    this.uint32(len);
    if (len > 0) {
      this._push(writeStringBuffer, len, value);
    }
    return this;
  };
}
function writeBytesBuffer(val, buf, pos) {
  buf.set(val, pos);
}
function writeStringBuffer(val, buf, pos) {
  if (val.length < 40) {
    write(val, buf, pos);
  } else if (buf.utf8Write != null) {
    buf.utf8Write(val, pos);
  } else {
    buf.set(fromString2(val), pos);
  }
}
function createWriter() {
  return new Uint8ArrayWriter();
}

// node_modules/.pnpm/protons-runtime@5.0.5/node_modules/protons-runtime/dist/src/encode.js
function encodeMessage(message2, codec) {
  const w = createWriter();
  codec.encode(message2, w, {
    lengthDelimited: false
  });
  return w.finish();
}

// node_modules/.pnpm/protons-runtime@5.0.5/node_modules/protons-runtime/dist/src/codec.js
var CODEC_TYPES;
(function(CODEC_TYPES2) {
  CODEC_TYPES2[CODEC_TYPES2["VARINT"] = 0] = "VARINT";
  CODEC_TYPES2[CODEC_TYPES2["BIT64"] = 1] = "BIT64";
  CODEC_TYPES2[CODEC_TYPES2["LENGTH_DELIMITED"] = 2] = "LENGTH_DELIMITED";
  CODEC_TYPES2[CODEC_TYPES2["START_GROUP"] = 3] = "START_GROUP";
  CODEC_TYPES2[CODEC_TYPES2["END_GROUP"] = 4] = "END_GROUP";
  CODEC_TYPES2[CODEC_TYPES2["BIT32"] = 5] = "BIT32";
})(CODEC_TYPES || (CODEC_TYPES = {}));
function createCodec2(name2, type, encode6, decode6) {
  return {
    name: name2,
    type,
    encode: encode6,
    decode: decode6
  };
}

// node_modules/.pnpm/protons-runtime@5.0.5/node_modules/protons-runtime/dist/src/codecs/enum.js
function enumeration(v2) {
  function findValue(val) {
    if (v2[val.toString()] == null) {
      throw new Error("Invalid enum value");
    }
    return v2[val];
  }
  const encode6 = function enumEncode(val, writer) {
    const enumValue = findValue(val);
    writer.int32(enumValue);
  };
  const decode6 = function enumDecode(reader) {
    const val = reader.int32();
    return findValue(val);
  };
  return createCodec2("enum", CODEC_TYPES.VARINT, encode6, decode6);
}

// node_modules/.pnpm/protons-runtime@5.0.5/node_modules/protons-runtime/dist/src/codecs/message.js
function message(encode6, decode6) {
  return createCodec2("message", CODEC_TYPES.LENGTH_DELIMITED, encode6, decode6);
}

// node_modules/.pnpm/ipfs-unixfs@11.1.0/node_modules/ipfs-unixfs/dist/src/unixfs.js
var Data;
(function(Data2) {
  let DataType;
  (function(DataType2) {
    DataType2["Raw"] = "Raw";
    DataType2["Directory"] = "Directory";
    DataType2["File"] = "File";
    DataType2["Metadata"] = "Metadata";
    DataType2["Symlink"] = "Symlink";
    DataType2["HAMTShard"] = "HAMTShard";
  })(DataType = Data2.DataType || (Data2.DataType = {}));
  let __DataTypeValues;
  (function(__DataTypeValues2) {
    __DataTypeValues2[__DataTypeValues2["Raw"] = 0] = "Raw";
    __DataTypeValues2[__DataTypeValues2["Directory"] = 1] = "Directory";
    __DataTypeValues2[__DataTypeValues2["File"] = 2] = "File";
    __DataTypeValues2[__DataTypeValues2["Metadata"] = 3] = "Metadata";
    __DataTypeValues2[__DataTypeValues2["Symlink"] = 4] = "Symlink";
    __DataTypeValues2[__DataTypeValues2["HAMTShard"] = 5] = "HAMTShard";
  })(__DataTypeValues || (__DataTypeValues = {}));
  (function(DataType2) {
    DataType2.codec = () => {
      return enumeration(__DataTypeValues);
    };
  })(DataType = Data2.DataType || (Data2.DataType = {}));
  let _codec;
  Data2.codec = () => {
    if (_codec == null) {
      _codec = message((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork();
        }
        if (obj.Type != null) {
          w.uint32(8);
          Data2.DataType.codec().encode(obj.Type, w);
        }
        if (obj.Data != null) {
          w.uint32(18);
          w.bytes(obj.Data);
        }
        if (obj.filesize != null) {
          w.uint32(24);
          w.uint64(obj.filesize);
        }
        if (obj.blocksizes != null) {
          for (const value of obj.blocksizes) {
            w.uint32(32);
            w.uint64(value);
          }
        }
        if (obj.hashType != null) {
          w.uint32(40);
          w.uint64(obj.hashType);
        }
        if (obj.fanout != null) {
          w.uint32(48);
          w.uint64(obj.fanout);
        }
        if (obj.mode != null) {
          w.uint32(56);
          w.uint32(obj.mode);
        }
        if (obj.mtime != null) {
          w.uint32(66);
          UnixTime.codec().encode(obj.mtime, w);
        }
        if (opts.lengthDelimited !== false) {
          w.ldelim();
        }
      }, (reader, length3) => {
        const obj = {
          blocksizes: []
        };
        const end = length3 == null ? reader.len : reader.pos + length3;
        while (reader.pos < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              obj.Type = Data2.DataType.codec().decode(reader);
              break;
            case 2:
              obj.Data = reader.bytes();
              break;
            case 3:
              obj.filesize = reader.uint64();
              break;
            case 4:
              obj.blocksizes.push(reader.uint64());
              break;
            case 5:
              obj.hashType = reader.uint64();
              break;
            case 6:
              obj.fanout = reader.uint64();
              break;
            case 7:
              obj.mode = reader.uint32();
              break;
            case 8:
              obj.mtime = UnixTime.codec().decode(reader, reader.uint32());
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return obj;
      });
    }
    return _codec;
  };
  Data2.encode = (obj) => {
    return encodeMessage(obj, Data2.codec());
  };
  Data2.decode = (buf) => {
    return decodeMessage(buf, Data2.codec());
  };
})(Data || (Data = {}));
var UnixTime;
(function(UnixTime2) {
  let _codec;
  UnixTime2.codec = () => {
    if (_codec == null) {
      _codec = message((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork();
        }
        if (obj.Seconds != null) {
          w.uint32(8);
          w.int64(obj.Seconds);
        }
        if (obj.FractionalNanoseconds != null) {
          w.uint32(21);
          w.fixed32(obj.FractionalNanoseconds);
        }
        if (opts.lengthDelimited !== false) {
          w.ldelim();
        }
      }, (reader, length3) => {
        const obj = {};
        const end = length3 == null ? reader.len : reader.pos + length3;
        while (reader.pos < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              obj.Seconds = reader.int64();
              break;
            case 2:
              obj.FractionalNanoseconds = reader.fixed32();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return obj;
      });
    }
    return _codec;
  };
  UnixTime2.encode = (obj) => {
    return encodeMessage(obj, UnixTime2.codec());
  };
  UnixTime2.decode = (buf) => {
    return decodeMessage(buf, UnixTime2.codec());
  };
})(UnixTime || (UnixTime = {}));
var Metadata;
(function(Metadata2) {
  let _codec;
  Metadata2.codec = () => {
    if (_codec == null) {
      _codec = message((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork();
        }
        if (obj.MimeType != null) {
          w.uint32(10);
          w.string(obj.MimeType);
        }
        if (opts.lengthDelimited !== false) {
          w.ldelim();
        }
      }, (reader, length3) => {
        const obj = {};
        const end = length3 == null ? reader.len : reader.pos + length3;
        while (reader.pos < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              obj.MimeType = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return obj;
      });
    }
    return _codec;
  };
  Metadata2.encode = (obj) => {
    return encodeMessage(obj, Metadata2.codec());
  };
  Metadata2.decode = (buf) => {
    return decodeMessage(buf, Metadata2.codec());
  };
})(Metadata || (Metadata = {}));

// node_modules/.pnpm/ipfs-unixfs@11.1.0/node_modules/ipfs-unixfs/dist/src/index.js
var types = {
  Raw: "raw",
  Directory: "directory",
  File: "file",
  Metadata: "metadata",
  Symlink: "symlink",
  HAMTShard: "hamt-sharded-directory"
};
var dirTypes = [
  "directory",
  "hamt-sharded-directory"
];
var DEFAULT_FILE_MODE = parseInt("0644", 8);
var DEFAULT_DIRECTORY_MODE = parseInt("0755", 8);
var UnixFS = class _UnixFS {
  /**
   * Decode from protobuf https://github.com/ipfs/specs/blob/master/UNIXFS.md
   */
  static unmarshal(marshaled) {
    const message2 = Data.decode(marshaled);
    const data = new _UnixFS({
      type: types[message2.Type != null ? message2.Type.toString() : "File"],
      data: message2.Data,
      blockSizes: message2.blocksizes,
      mode: message2.mode,
      mtime: message2.mtime != null ? {
        secs: message2.mtime.Seconds ?? 0n,
        nsecs: message2.mtime.FractionalNanoseconds
      } : void 0,
      fanout: message2.fanout
    });
    data._originalMode = message2.mode ?? 0;
    return data;
  }
  type;
  data;
  blockSizes;
  hashType;
  fanout;
  mtime;
  _mode;
  _originalMode;
  constructor(options = {
    type: "file"
  }) {
    const { type, data, blockSizes, hashType, fanout, mtime, mode } = options;
    if (type != null && !Object.values(types).includes(type)) {
      throw (0, import_err_code.default)(new Error("Type: " + type + " is not valid"), "ERR_INVALID_TYPE");
    }
    this.type = type ?? "file";
    this.data = data;
    this.hashType = hashType;
    this.fanout = fanout;
    this.blockSizes = blockSizes ?? [];
    this._originalMode = 0;
    this.mode = mode;
    this.mtime = mtime;
  }
  set mode(mode) {
    if (mode == null) {
      this._mode = this.isDirectory() ? DEFAULT_DIRECTORY_MODE : DEFAULT_FILE_MODE;
    } else {
      this._mode = mode & 4095;
    }
  }
  get mode() {
    return this._mode;
  }
  isDirectory() {
    return dirTypes.includes(this.type);
  }
  addBlockSize(size) {
    this.blockSizes.push(size);
  }
  removeBlockSize(index2) {
    this.blockSizes.splice(index2, 1);
  }
  /**
   * Returns `0n` for directories or `data.length + sum(blockSizes)` for everything else
   */
  fileSize() {
    if (this.isDirectory()) {
      return 0n;
    }
    let sum = 0n;
    this.blockSizes.forEach((size) => {
      sum += size;
    });
    if (this.data != null) {
      sum += BigInt(this.data.length);
    }
    return sum;
  }
  /**
   * encode to protobuf Uint8Array
   */
  marshal() {
    let type;
    switch (this.type) {
      case "raw":
        type = Data.DataType.Raw;
        break;
      case "directory":
        type = Data.DataType.Directory;
        break;
      case "file":
        type = Data.DataType.File;
        break;
      case "metadata":
        type = Data.DataType.Metadata;
        break;
      case "symlink":
        type = Data.DataType.Symlink;
        break;
      case "hamt-sharded-directory":
        type = Data.DataType.HAMTShard;
        break;
      default:
        throw (0, import_err_code.default)(new Error(`Type: ${type} is not valid`), "ERR_INVALID_TYPE");
    }
    let data = this.data;
    if (this.data == null || this.data.length === 0) {
      data = void 0;
    }
    let mode;
    if (this.mode != null) {
      mode = this._originalMode & 4294963200 | (this.mode ?? 0);
      if (mode === DEFAULT_FILE_MODE && !this.isDirectory()) {
        mode = void 0;
      }
      if (mode === DEFAULT_DIRECTORY_MODE && this.isDirectory()) {
        mode = void 0;
      }
    }
    let mtime;
    if (this.mtime != null) {
      mtime = {
        Seconds: this.mtime.secs,
        FractionalNanoseconds: this.mtime.nsecs
      };
    }
    return Data.encode({
      Type: type,
      Data: data,
      filesize: this.isDirectory() ? void 0 : this.fileSize(),
      blocksizes: this.blockSizes,
      hashType: this.hashType,
      fanout: this.fanout,
      mode,
      mtime
    });
  }
};

// node_modules/.pnpm/@veramo+utils@5.5.4-next.22/node_modules/@veramo/utils/build/credential-utils.js
function computeEntryHash(input) {
  let hashable;
  if (typeof input === "string") {
    try {
      const cred = JSON.parse(input);
      hashable = cred?.proof?.jwt || input;
    } catch (e) {
      hashable = input;
    }
  } else if (input?.proof?.jwt) {
    hashable = input.proof.jwt;
  } else {
    hashable = JSON.stringify(input);
  }
  const unixfs = new UnixFS({
    type: "file",
    data: new TextEncoder().encode(hashable)
  });
  const bytes3 = encode5(prepare({ Data: unixfs.marshal() }));
  const digest2 = create2(18, sha2562(bytes3));
  return CID.create(0, code2, digest2).toString();
}

// node_modules/.pnpm/@veramo+utils@5.5.4-next.22/node_modules/@veramo/utils/build/did-utils.js
var import_debug = __toESM(require_browser(), 1);
var debug = (0, import_debug.default)("veramo:utils");

// src/markdown.tsx
var import_agent_explorer_plugin10 = __toESM(require_agent_explorer_plugin(), 1);
var import_use_text_selection = __toESM(require_dist(), 1);
var import_antd12 = __toESM(require_antd(), 1);

// src/CredentialLoader.tsx
var import_agent_explorer_plugin9 = __toESM(require_agent_explorer_plugin(), 1);
var import_veramo_react7 = __toESM(require_veramo_react(), 1);
var import_antd11 = __toESM(require_antd(), 1);
var import_react22 = __toESM(require_react(), 1);
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var CredentialLoader = ({ hash: hash3, did, context }) => {
  const [credential, setCredential] = (0, import_react22.useState)();
  const { agents, agent } = (0, import_veramo_react7.useVeramo)();
  const [error, setError] = (0, import_react22.useState)(void 0);
  const localAgent = import_react22.default.useMemo(() => {
    return agents.find((agent2) => agent2.context.id === "web3Agent");
  }, [agents]);
  if (!agent)
    return null;
  if (!localAgent)
    return null;
  (0, import_react22.useEffect)(() => {
    const load = async () => {
      try {
        const postCredential = await getPost(agent, localAgent, hash3, did);
        if (postCredential.verifiableCredential) {
          setCredential(postCredential);
        } else {
          throw new Error("Credential not found");
        }
      } catch (e) {
        setError(e.message);
      }
    };
    load();
  }, [agent, hash3]);
  if (error) {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_antd11.Typography.Text, { type: "danger", children: error });
  }
  return credential ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_agent_explorer_plugin9.VerifiableCredentialComponent, { credential, context }) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_antd11.Spin, {});
};

// src/markdown.tsx
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var getMarkdownComponents = () => {
  return {
    p(props) {
      const { notification } = import_antd12.App.useApp();
      const ref = import_react23.default.useRef(null);
      const { clientRect, isCollapsed, textContent } = (0, import_use_text_selection.useTextSelection)(ref.current === null ? void 0 : ref.current);
      const credential = props.node?.credential;
      const { enabled, start, end } = import_react23.default.useMemo(() => {
        let enabled2 = false;
        let start2 = -1;
        let end2 = -1;
        const originalContent = String(props.children);
        if (textContent) {
          const index2 = originalContent.indexOf(textContent);
          if (index2 >= 0) {
            enabled2 = true;
            start2 = (props.node?.position?.start.offset || 0) + index2;
            end2 = start2 + textContent.length;
          }
        }
        return { enabled: enabled2, start: start2, end: end2 };
      }, [textContent, props.children]);
      const handleCopyReference = () => {
        const reference = `\`\`\`vc+multihash
${(0, import_agent_explorer_plugin10.getIssuerDID)(credential.verifiableCredential)}/${credential.hash}#${start}-${end}
\`\`\``;
        navigator.clipboard.writeText(reference);
        notification.success({
          message: "Credential reference copied to clipboard"
        });
      };
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { style: { position: "relative" }, children: [
        clientRect && !isCollapsed && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "div",
          {
            style: {
              left: 0,
              top: -40,
              position: "absolute",
              backgroundColor: "black"
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              import_antd12.Button,
              {
                type: "primary",
                disabled: !enabled,
                onClick: handleCopyReference,
                icon: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PicLeftOutlined_default2, {}),
                children: "Copy reference"
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { ref, children: props.children })
      ] });
    },
    pre(props) {
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_jsx_runtime13.Fragment, { children: props.children });
    },
    code(props) {
      const { children, className, node, ...rest } = props;
      switch (className?.toLowerCase()) {
        case "language-vc+jwt":
          const verifiableCredential = normalizeCredential(String(children).replace(/\s/g, ""));
          const hash3 = computeEntryHash(verifiableCredential);
          return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_agent_explorer_plugin10.VerifiableCredentialComponent, { credential: { hash: hash3, verifiableCredential } });
        case "language-vc+json":
          const verifiableCredential2 = JSON.parse(String(children));
          const hash22 = computeEntryHash(verifiableCredential2);
          return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_agent_explorer_plugin10.VerifiableCredentialComponent, { credential: { hash: hash22, verifiableCredential: verifiableCredential2 } });
        case "language-vc+multihash":
          const items = String(children).replace(/\s/g, "").split("/");
          let hash32 = "";
          let did = "";
          let context = void 0;
          if (items.length === 2) {
            did = items[0];
            hash32 = items[1];
          } else {
            hash32 = items[0];
          }
          let textRange = void 0;
          const a = hash32.split("#");
          if (a.length === 2) {
            hash32 = a[0];
            context = { textRange: a[1] };
          }
          return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CredentialLoader, { hash: hash32, did, context });
        default:
          return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("code", { ...rest, className, children });
      }
    }
  };
};

// src/IdentifierHoverComponent.tsx
var import_react24 = __toESM(require_react(), 1);
var import_veramo_react8 = __toESM(require_veramo_react(), 1);
var import_react_query5 = __toESM(require_react_query(), 1);
var import_antd13 = __toESM(require_antd(), 1);
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var IdentifierHoverComponent = ({ did }) => {
  const { agent } = (0, import_veramo_react8.useVeramo)();
  const { data: credentials, isLoading } = (0, import_react_query5.useQuery)(
    ["domain-linkage", { agentId: agent?.context.name, did }],
    () => agent?.dataStoreORMGetVerifiableCredentials({
      where: [
        { column: "type", value: ["VerifiableCredential,BrainShareDomainLinkage"] },
        { column: "subject", value: [did] }
      ],
      order: [{ column: "issuanceDate", direction: "DESC" }]
    })
  );
  const domain = import_react24.default.useMemo(() => {
    return credentials?.[0]?.verifiableCredential?.credentialSubject?.domain;
  }, [credentials, did]);
  if (isLoading) {
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_antd13.Spin, {});
  }
  if (!domain) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_antd13.Typography.Text, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CheckCircleOutlined_default2, {}),
    " ",
    domain
  ] });
};

// src/Compose.tsx
var import_react_router_dom8 = __toESM(require_react_router_dom(), 1);
var import_pro_components5 = __toESM(require_pro_components(), 1);
var import_antd14 = __toESM(require_antd(), 1);
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var Compose = () => {
  const { notification } = import_antd14.App.useApp();
  const { title } = (0, import_react_router_dom8.useParams)();
  const navigate = (0, import_react_router_dom8.useNavigate)();
  const handleNewPost = async (did, hash3) => {
    notification.success({
      message: "Post created"
    });
    navigate(`/brainshare/${did}/${hash3}`);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    import_pro_components5.PageContainer,
    {
      title: false,
      style: { paddingTop: 10 },
      children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(PostForm, { onOk: handleNewPost, initialTitle: title })
    }
  );
};

// node_modules/.pnpm/unist-util-is@6.0.0/node_modules/unist-util-is/lib/index.js
var convert = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(test) {
    if (test === null || test === void 0) {
      return ok;
    }
    if (typeof test === "function") {
      return castFactory(test);
    }
    if (typeof test === "object") {
      return Array.isArray(test) ? anyFactory(test) : propsFactory(test);
    }
    if (typeof test === "string") {
      return typeFactory(test);
    }
    throw new Error("Expected function, string, or object as test");
  }
);
function anyFactory(tests) {
  const checks = [];
  let index2 = -1;
  while (++index2 < tests.length) {
    checks[index2] = convert(tests[index2]);
  }
  return castFactory(any);
  function any(...parameters) {
    let index3 = -1;
    while (++index3 < checks.length) {
      if (checks[index3].apply(this, parameters))
        return true;
    }
    return false;
  }
}
function propsFactory(check) {
  const checkAsRecord = (
    /** @type {Record<string, unknown>} */
    check
  );
  return castFactory(all);
  function all(node) {
    const nodeAsRecord = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      node
    );
    let key;
    for (key in check) {
      if (nodeAsRecord[key] !== checkAsRecord[key])
        return false;
    }
    return true;
  }
}
function typeFactory(check) {
  return castFactory(type);
  function type(node) {
    return node && node.type === check;
  }
}
function castFactory(testFunction) {
  return check;
  function check(value, index2, parent) {
    return Boolean(
      looksLikeANode(value) && testFunction.call(
        this,
        value,
        typeof index2 === "number" ? index2 : void 0,
        parent || void 0
      )
    );
  }
}
function ok() {
  return true;
}
function looksLikeANode(value) {
  return value !== null && typeof value === "object" && "type" in value;
}

// node_modules/.pnpm/unist-util-visit-parents@6.0.1/node_modules/unist-util-visit-parents/lib/color.js
function color(d) {
  return d;
}

// node_modules/.pnpm/unist-util-visit-parents@6.0.1/node_modules/unist-util-visit-parents/lib/index.js
var empty2 = [];
var CONTINUE = true;
var EXIT = false;
var SKIP = "skip";
function visitParents(tree, test, visitor, reverse) {
  let check;
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
  } else {
    check = test;
  }
  const is2 = convert(check);
  const step = reverse ? -1 : 1;
  factory(tree, void 0, [])();
  function factory(node, index2, parents) {
    const value = (
      /** @type {Record<string, unknown>} */
      node && typeof node === "object" ? node : {}
    );
    if (typeof value.type === "string") {
      const name2 = (
        // `hast`
        typeof value.tagName === "string" ? value.tagName : (
          // `xast`
          typeof value.name === "string" ? value.name : void 0
        )
      );
      Object.defineProperty(visit2, "name", {
        value: "node (" + color(node.type + (name2 ? "<" + name2 + ">" : "")) + ")"
      });
    }
    return visit2;
    function visit2() {
      let result = empty2;
      let subresult;
      let offset;
      let grandparents;
      if (!test || is2(node, index2, parents[parents.length - 1] || void 0)) {
        result = toResult(visitor(node, parents));
        if (result[0] === EXIT) {
          return result;
        }
      }
      if ("children" in node && node.children) {
        const nodeAsParent = (
          /** @type {UnistParent} */
          node
        );
        if (nodeAsParent.children && result[0] !== SKIP) {
          offset = (reverse ? nodeAsParent.children.length : -1) + step;
          grandparents = parents.concat(nodeAsParent);
          while (offset > -1 && offset < nodeAsParent.children.length) {
            const child = nodeAsParent.children[offset];
            subresult = factory(child, offset, grandparents)();
            if (subresult[0] === EXIT) {
              return subresult;
            }
            offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
          }
        }
      }
      return result;
    }
  }
}
function toResult(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE, value];
  }
  return value === null || value === void 0 ? empty2 : [value];
}

// node_modules/.pnpm/unist-util-visit@5.0.0/node_modules/unist-util-visit/lib/index.js
function visit(tree, testOrVisitor, visitorOrReverse, maybeReverse) {
  let reverse;
  let test;
  let visitor;
  if (typeof testOrVisitor === "function" && typeof visitorOrReverse !== "function") {
    test = void 0;
    visitor = testOrVisitor;
    reverse = visitorOrReverse;
  } else {
    test = testOrVisitor;
    visitor = visitorOrReverse;
    reverse = maybeReverse;
  }
  visitParents(tree, test, overload, reverse);
  function overload(node, parents) {
    const parent = parents[parents.length - 1];
    const index2 = parent ? parent.children.indexOf(node) : void 0;
    return visitor(node, index2, parent);
  }
}

// src/remark-plugin.ts
function remarkPlugin() {
  return function(tree) {
    visit(tree, function(node) {
      if (node.type === "link" && String(node.url).startsWith("did:")) {
        node.url = "/brainshare/" + node.url;
      }
    });
  };
}

// src/index.tsx
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var Plugin = {
  //@ts-ignore
  init: () => {
    return {
      name: "BrainShare",
      description: "Decentralized wiki",
      requiredMethods: [],
      routes: [
        {
          path: "/brainshare/feed",
          element: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Feed, {})
        },
        {
          path: "/brainshare/wiki/:did",
          element: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Home, {})
        },
        {
          path: "/brainshare/wiki/:did/:hash",
          element: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Home, {})
        },
        {
          path: "/brainshare/:id",
          element: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Post, {})
        },
        {
          path: "/brainshare/:did/:id",
          element: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Post, {})
        },
        {
          path: "/brainshare/link-domain",
          element: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(LinkDomain, {})
        },
        {
          path: "/brainshare/edit/:id",
          element: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Edit, {})
        },
        {
          path: "/brainshare/compose/:title",
          element: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Compose, {})
        },
        {
          path: "/brainshare/compose",
          element: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Compose, {})
        }
      ],
      menuItems: [
        {
          name: "BrainShare",
          icon: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(FileTextOutlined_default2, {}),
          path: "/brainshare",
          routes: [
            {
              name: "Compose",
              path: "/brainshare/compose"
            },
            {
              name: "Feed",
              path: "/brainshare/feed"
            },
            {
              name: "Link Domain",
              path: "/brainshare/link-domain"
            }
          ]
        }
      ],
      hasCss: false,
      getIdentifierHoverComponent: () => IdentifierHoverComponent,
      getCredentialComponent: (credential) => {
        if (credential.verifiableCredential.type?.includes("BrainSharePost")) {
          return BrainSharePost;
        }
        return void 0;
      },
      getCredentialContextMenuItems,
      getMarkdownComponents,
      getRemarkPlugins: () => [remarkPlugin],
      getIdentifierTabsComponents: () => {
        return [
          {
            label: "BrainShare",
            component: Landing
          }
        ];
      }
    };
  }
};
var src_default = Plugin;
export {
  src_default as default
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/modular.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/curve.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/edwards.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/ed25519.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/weierstrass.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/_shortw_utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/secp256k1.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/p256.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@scure/base/lib/esm/index.js:
  (*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/ciphers/esm/utils.js:
  (*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) *)
*/
