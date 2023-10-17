var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod2) => function __require() {
  return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
};
var __export = (target, all2) => {
  for (var name2 in all2)
    __defProp(target, name2, { get: all2[name2], enumerable: true });
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
        for (var i2 = 0; i2 < arguments.length; i2++) {
          var arg = arguments[i2];
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

// node_modules/.pnpm/extend@3.0.2/node_modules/extend/index.js
var require_extend = __commonJS({
  "node_modules/.pnpm/extend@3.0.2/node_modules/extend/index.js"(exports, module) {
    "use strict";
    var hasOwn = Object.prototype.hasOwnProperty;
    var toStr2 = Object.prototype.toString;
    var defineProperty = Object.defineProperty;
    var gOPD = Object.getOwnPropertyDescriptor;
    var isArray = function isArray2(arr) {
      if (typeof Array.isArray === "function") {
        return Array.isArray(arr);
      }
      return toStr2.call(arr) === "[object Array]";
    };
    var isPlainObject2 = function isPlainObject3(obj) {
      if (!obj || toStr2.call(obj) !== "[object Object]") {
        return false;
      }
      var hasOwnConstructor = hasOwn.call(obj, "constructor");
      var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
      if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
        return false;
      }
      var key;
      for (key in obj) {
      }
      return typeof key === "undefined" || hasOwn.call(obj, key);
    };
    var setProperty = function setProperty2(target, options) {
      if (defineProperty && options.name === "__proto__") {
        defineProperty(target, options.name, {
          enumerable: true,
          configurable: true,
          value: options.newValue,
          writable: true
        });
      } else {
        target[options.name] = options.newValue;
      }
    };
    var getProperty = function getProperty2(obj, name2) {
      if (name2 === "__proto__") {
        if (!hasOwn.call(obj, name2)) {
          return void 0;
        } else if (gOPD) {
          return gOPD(obj, name2).value;
        }
      }
      return obj[name2];
    };
    module.exports = function extend2() {
      var options, name2, src2, copy, copyIsArray, clone;
      var target = arguments[0];
      var i2 = 1;
      var length3 = arguments.length;
      var deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};
        i2 = 2;
      }
      if (target == null || typeof target !== "object" && typeof target !== "function") {
        target = {};
      }
      for (; i2 < length3; ++i2) {
        options = arguments[i2];
        if (options != null) {
          for (name2 in options) {
            src2 = getProperty(target, name2);
            copy = getProperty(options, name2);
            if (target !== copy) {
              if (deep && copy && (isPlainObject2(copy) || (copyIsArray = isArray(copy)))) {
                if (copyIsArray) {
                  copyIsArray = false;
                  clone = src2 && isArray(src2) ? src2 : [];
                } else {
                  clone = src2 && isPlainObject2(src2) ? src2 : {};
                }
                setProperty(target, { name: name2, newValue: extend2(deep, clone, copy) });
              } else if (typeof copy !== "undefined") {
                setProperty(target, { name: name2, newValue: copy });
              }
            }
          }
        }
      }
      return target;
    };
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
        const values2 = object.reduce((t2, cv, ci) => {
          const comma = ci === 0 ? "" : ",";
          const value = cv === void 0 || typeof cv === "symbol" ? null : cv;
          return `${t2}${comma}${serialize(value)}`;
        }, "");
        return `[${values2}]`;
      }
      const values = Object.keys(object).sort().reduce((t2, cv) => {
        if (object[cv] === void 0 || typeof object[cv] === "symbol") {
          return t2;
        }
        const comma = t2.length === 0 ? "" : ",";
        return `${t2}${comma}${serialize(cv)}:${serialize(object[cv])}`;
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
    var s2 = 1e3;
    var m = s2 * 60;
    var h3 = m * 60;
    var d2 = h3 * 24;
    var w = d2 * 7;
    var y = d2 * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse2(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse2(str) {
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
      var n2 = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n2 * y;
        case "weeks":
        case "week":
        case "w":
          return n2 * w;
        case "days":
        case "day":
        case "d":
          return n2 * d2;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n2 * h3;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n2 * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n2 * s2;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n2;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d2) {
        return Math.round(ms / d2) + "d";
      }
      if (msAbs >= h3) {
        return Math.round(ms / h3) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s2) {
        return Math.round(ms / s2) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d2) {
        return plural(ms, msAbs, d2, "day");
      }
      if (msAbs >= h3) {
        return plural(ms, msAbs, h3, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s2) {
        return plural(ms, msAbs, s2, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n2, name2) {
      var isPlural = msAbs >= n2 * 1.5;
      return Math.round(ms / n2) + " " + name2 + (isPlural ? "s" : "");
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
      createDebug.disable = disable2;
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
        for (let i2 = 0; i2 < namespace.length; i2++) {
          hash3 = (hash3 << 5) - hash3 + namespace.charCodeAt(i2);
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
          let index3 = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format2) => {
            if (match === "%%") {
              return "%";
            }
            index3++;
            const formatter = createDebug.formatters[format2];
            if (typeof formatter === "function") {
              const val = args[index3];
              match = formatter.call(self, val);
              args.splice(index3, 1);
              index3--;
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
        debug2.extend = extend2;
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
      function extend2(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i2;
        const split2 = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split2.length;
        for (i2 = 0; i2 < len; i2++) {
          if (!split2[i2]) {
            continue;
          }
          namespaces = split2[i2].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      function disable2() {
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
        let i2;
        let len;
        for (i2 = 0, len = createDebug.skips.length; i2 < len; i2++) {
          if (createDebug.skips[i2].test(name2)) {
            return false;
          }
        }
        for (i2 = 0, len = createDebug.names.length; i2 < len; i2++) {
          if (createDebug.names[i2].test(name2)) {
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
      const c2 = "color: " + this.color;
      args.splice(1, 0, c2, "color: inherit");
      let index3 = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index3++;
        if (match === "%c") {
          lastC = index3;
        }
      });
      args.splice(lastC, 0, c2);
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
      let r2;
      try {
        r2 = exports.storage.getItem("debug");
      } catch (error) {
      }
      if (!r2 && typeof process !== "undefined" && "env" in process) {
        r2 = process.env.DEBUG;
      }
      return r2;
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
      __assign = Object.assign || function(t2) {
        for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
          s2 = arguments[i2];
          for (var p2 in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p2))
              t2[p2] = s2[p2];
        }
        return t2;
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
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
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
function _iterableToArrayLimit(r2, l3) {
  var t2 = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (null != t2) {
    var e2, n2, i2, u2, a2 = [], f3 = true, o2 = false;
    try {
      if (i2 = (t2 = t2.call(r2)).next, 0 === l3) {
        if (Object(t2) !== t2)
          return;
        f3 = false;
      } else
        for (; !(f3 = (e2 = i2.call(t2)).done) && (a2.push(e2.value), a2.length !== l3); f3 = true)
          ;
    } catch (r3) {
      o2 = true, n2 = r3;
    } finally {
      try {
        if (!f3 && null != t2["return"] && (u2 = t2["return"](), Object(u2) !== u2))
          return;
      } finally {
        if (o2)
          throw n2;
      }
    }
    return a2;
  }
}

// node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
    arr2[i2] = arr[i2];
  return arr2;
}

// node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o2, minLen);
}

// node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(arr, i2) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
}

// node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o2) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof(o2);
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
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
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

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/AntdIcon.js
var React3 = __toESM(require_react());
var import_classnames = __toESM(require_classnames());

// node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/util.js
function bound01(n2, max) {
  if (isOnePointZero(n2)) {
    n2 = "100%";
  }
  var isPercent = isPercentage(n2);
  n2 = max === 360 ? n2 : Math.min(max, Math.max(0, parseFloat(n2)));
  if (isPercent) {
    n2 = parseInt(String(n2 * max), 10) / 100;
  }
  if (Math.abs(n2 - max) < 1e-6) {
    return 1;
  }
  if (max === 360) {
    n2 = (n2 < 0 ? n2 % max + max : n2 % max) / parseFloat(String(max));
  } else {
    n2 = n2 % max / parseFloat(String(max));
  }
  return n2;
}
function isOnePointZero(n2) {
  return typeof n2 === "string" && n2.indexOf(".") !== -1 && parseFloat(n2) === 1;
}
function isPercentage(n2) {
  return typeof n2 === "string" && n2.indexOf("%") !== -1;
}
function boundAlpha(a2) {
  a2 = parseFloat(a2);
  if (isNaN(a2) || a2 < 0 || a2 > 1) {
    a2 = 1;
  }
  return a2;
}
function convertToPercentage(n2) {
  if (n2 <= 1) {
    return "".concat(Number(n2) * 100, "%");
  }
  return n2;
}
function pad2(c2) {
  return c2.length === 1 ? "0" + c2 : String(c2);
}

// node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/conversion.js
function rgbToRgb(r2, g, b) {
  return {
    r: bound01(r2, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b, 255) * 255
  };
}
function hue2rgb(p2, q, t2) {
  if (t2 < 0) {
    t2 += 1;
  }
  if (t2 > 1) {
    t2 -= 1;
  }
  if (t2 < 1 / 6) {
    return p2 + (q - p2) * (6 * t2);
  }
  if (t2 < 1 / 2) {
    return q;
  }
  if (t2 < 2 / 3) {
    return p2 + (q - p2) * (2 / 3 - t2) * 6;
  }
  return p2;
}
function hslToRgb(h3, s2, l3) {
  var r2;
  var g;
  var b;
  h3 = bound01(h3, 360);
  s2 = bound01(s2, 100);
  l3 = bound01(l3, 100);
  if (s2 === 0) {
    g = l3;
    b = l3;
    r2 = l3;
  } else {
    var q = l3 < 0.5 ? l3 * (1 + s2) : l3 + s2 - l3 * s2;
    var p2 = 2 * l3 - q;
    r2 = hue2rgb(p2, q, h3 + 1 / 3);
    g = hue2rgb(p2, q, h3);
    b = hue2rgb(p2, q, h3 - 1 / 3);
  }
  return { r: r2 * 255, g: g * 255, b: b * 255 };
}
function rgbToHsv(r2, g, b) {
  r2 = bound01(r2, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r2, g, b);
  var min = Math.min(r2, g, b);
  var h3 = 0;
  var v2 = max;
  var d2 = max - min;
  var s2 = max === 0 ? 0 : d2 / max;
  if (max === min) {
    h3 = 0;
  } else {
    switch (max) {
      case r2:
        h3 = (g - b) / d2 + (g < b ? 6 : 0);
        break;
      case g:
        h3 = (b - r2) / d2 + 2;
        break;
      case b:
        h3 = (r2 - g) / d2 + 4;
        break;
      default:
        break;
    }
    h3 /= 6;
  }
  return { h: h3, s: s2, v: v2 };
}
function hsvToRgb(h3, s2, v2) {
  h3 = bound01(h3, 360) * 6;
  s2 = bound01(s2, 100);
  v2 = bound01(v2, 100);
  var i2 = Math.floor(h3);
  var f3 = h3 - i2;
  var p2 = v2 * (1 - s2);
  var q = v2 * (1 - f3 * s2);
  var t2 = v2 * (1 - (1 - f3) * s2);
  var mod2 = i2 % 6;
  var r2 = [v2, q, p2, p2, t2, v2][mod2];
  var g = [t2, v2, v2, q, p2, p2][mod2];
  var b = [p2, p2, t2, v2, v2, q][mod2];
  return { r: r2 * 255, g: g * 255, b: b * 255 };
}
function rgbToHex(r2, g, b, allow3Char) {
  var hex = [
    pad2(Math.round(r2).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b).toString(16))
  ];
  if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}
function convertHexToDecimal(h3) {
  return parseIntFromHex(h3) / 255;
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
function inputToRGB(color) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a2 = 1;
  var s2 = null;
  var v2 = null;
  var l3 = null;
  var ok2 = false;
  var format2 = false;
  if (typeof color === "string") {
    color = stringInputToObject(color);
  }
  if (typeof color === "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok2 = true;
      format2 = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s2 = convertToPercentage(color.s);
      v2 = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s2, v2);
      ok2 = true;
      format2 = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s2 = convertToPercentage(color.s);
      l3 = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s2, l3);
      ok2 = true;
      format2 = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color, "a")) {
      a2 = color.a;
    }
  }
  a2 = boundAlpha(a2);
  return {
    ok: ok2,
    format: color.format || format2,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a: a2
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
function stringInputToObject(color) {
  color = color.trim().toLowerCase();
  if (color.length === 0) {
    return false;
  }
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  }
  var match = matchers.rgb.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3] };
  }
  match = matchers.rgba.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3], a: match[4] };
  }
  match = matchers.hsl.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3] };
  }
  match = matchers.hsla.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3], a: match[4] };
  }
  match = matchers.hsv.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3] };
  }
  match = matchers.hsva.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3], a: match[4] };
  }
  match = matchers.hex8.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex6.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  match = matchers.hex4.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex3.exec(color);
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
function isValidCSSUnit(color) {
  return Boolean(matchers.CSS_UNIT.exec(String(color)));
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
  var r2 = _ref.r, g = _ref.g, b = _ref.b;
  var hsv = rgbToHsv(r2, g, b);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
}
function toHex(_ref2) {
  var r2 = _ref2.r, g = _ref2.g, b = _ref2.b;
  return "#".concat(rgbToHex(r2, g, b, false));
}
function mix(rgb1, rgb2, amount) {
  var p2 = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
    g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
    b: (rgb2.b - rgb1.b) * p2 + rgb1.b
  };
  return rgb;
}
function getHue(hsv, i2, light) {
  var hue;
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i2 : Math.round(hsv.h) + hueStep * i2;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i2 : Math.round(hsv.h) - hueStep * i2;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}
function getSaturation(hsv, i2, light) {
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  var saturation;
  if (light) {
    saturation = hsv.s - saturationStep * i2;
  } else if (i2 === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i2;
  }
  if (saturation > 1) {
    saturation = 1;
  }
  if (light && i2 === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Number(saturation.toFixed(2));
}
function getValue(hsv, i2, light) {
  var value;
  if (light) {
    value = hsv.v + brightnessStep1 * i2;
  } else {
    value = hsv.v - brightnessStep2 * i2;
  }
  if (value > 1) {
    value = 1;
  }
  return Number(value.toFixed(2));
}
function generate(color) {
  var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);
  for (var i2 = lightColorCount; i2 > 0; i2 -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(inputToRGB({
      h: getHue(hsv, i2, true),
      s: getSaturation(hsv, i2, true),
      v: getValue(hsv, i2, true)
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
      var index3 = _ref3.index, opacity = _ref3.opacity;
      var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || "#141414"), inputToRGB(patterns[index3]), opacity * 100));
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
function ownKeys(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread2(e2) {
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

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/IconBase.js
var React2 = __toESM(require_react());

// node_modules/.pnpm/rc-util@5.38.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/canUseDom.js
function canUseDom() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}

// node_modules/.pnpm/rc-util@5.38.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/contains.js
function contains(root, n2) {
  if (!root) {
    return false;
  }
  if (root.contains) {
    return root.contains(n2);
  }
  var node2 = n2;
  while (node2) {
    if (node2 === root) {
      return true;
    }
    node2 = node2.parentNode;
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
  return Array.from((containerCache.get(container) || container).children).filter(function(node2) {
    return node2.tagName === "STYLE";
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
      var existStyle = findStyles(container).filter(function(node2) {
        if (!["prepend", "prependQueue"].includes(node2.getAttribute(APPEND_ORDER))) {
          return false;
        }
        var nodePriority = Number(node2.getAttribute(APPEND_PRIORITY) || 0);
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
  return findStyles(container).find(function(node2) {
    return node2.getAttribute(getMark(option)) === key;
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
function generate2(node2, key, rootProps) {
  if (!rootProps) {
    return /* @__PURE__ */ import_react2.default.createElement(node2.tag, _objectSpread2({
      key
    }, normalizeAttrs(node2.attrs)), (node2.children || []).map(function(child, index3) {
      return generate2(child, "".concat(key, "-").concat(node2.tag, "-").concat(index3));
    }));
  }
  return /* @__PURE__ */ import_react2.default.createElement(node2.tag, _objectSpread2(_objectSpread2({
    key
  }, normalizeAttrs(node2.attrs)), rootProps), (node2.children || []).map(function(child, index3) {
    return generate2(child, "".concat(key, "-").concat(node2.tag, "-").concat(index3));
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
function _slicedToArray2(arr, i2) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i2) || _unsupportedIterableToArray2(arr, i2) || _nonIterableRest2();
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit2(arr, i2) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e2 = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2)
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
function _unsupportedIterableToArray2(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray2(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray2(o2, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
    arr2[i2] = arr[i2];
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
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
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
    return fns.reduceRight(function(y, f3) {
      return f3(y);
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
    return fns.reduceRight(function(y, f3) {
      return f3(y);
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
function Me({ children: e2 }) {
  return import_react7.default.createElement("div", { style: Y.container }, e2);
}
var Z = Me;
var $ = Z;
function Ee({ width: e2, height: r2, isEditorReady: n2, loading: t2, _ref: a2, className: m, wrapperProps: E }) {
  return import_react6.default.createElement("section", { style: { ...v.wrapper, width: e2, height: r2 }, ...E }, !n2 && import_react6.default.createElement($, null, t2), import_react6.default.createElement("div", { ref: a2, style: { ...v.fullWidth, ...!n2 && v.hide }, className: m }));
}
var ee = Ee;
var H = (0, import_react5.memo)(ee);
function Ce(e2) {
  (0, import_react8.useEffect)(e2, []);
}
var k = Ce;
function he(e2, r2, n2 = true) {
  let t2 = (0, import_react9.useRef)(true);
  (0, import_react9.useEffect)(t2.current || !n2 ? () => {
    t2.current = false;
  } : e2, r2);
}
var l = he;
function D() {
}
function h(e2, r2, n2, t2) {
  return De(e2, t2) || be(e2, r2, n2, t2);
}
function De(e2, r2) {
  return e2.editor.getModel(te(e2, r2));
}
function be(e2, r2, n2, t2) {
  return e2.editor.createModel(r2, n2, t2 ? te(e2, t2) : void 0);
}
function te(e2, r2) {
  return e2.Uri.parse(r2);
}
function Oe({ original: e2, modified: r2, language: n2, originalLanguage: t2, modifiedLanguage: a2, originalModelPath: m, modifiedModelPath: E, keepCurrentOriginalModel: g = false, keepCurrentModifiedModel: N = false, theme: x = "light", loading: P = "Loading...", options: y = {}, height: V = "100%", width: z = "100%", className: F, wrapperProps: j = {}, beforeMount: A = D, onMount: q = D }) {
  let [M, O] = (0, import_react4.useState)(false), [T, s2] = (0, import_react4.useState)(true), u2 = (0, import_react4.useRef)(null), c2 = (0, import_react4.useRef)(null), w = (0, import_react4.useRef)(null), d2 = (0, import_react4.useRef)(q), o2 = (0, import_react4.useRef)(A), b = (0, import_react4.useRef)(false);
  k(() => {
    let i2 = loader_default.init();
    return i2.then((f3) => (c2.current = f3) && s2(false)).catch((f3) => f3?.type !== "cancelation" && console.error("Monaco initialization: error:", f3)), () => u2.current ? I() : i2.cancel();
  }), l(() => {
    if (u2.current && c2.current) {
      let i2 = u2.current.getOriginalEditor(), f3 = h(c2.current, e2 || "", t2 || n2 || "text", m || "");
      f3 !== i2.getModel() && i2.setModel(f3);
    }
  }, [m], M), l(() => {
    if (u2.current && c2.current) {
      let i2 = u2.current.getModifiedEditor(), f3 = h(c2.current, r2 || "", a2 || n2 || "text", E || "");
      f3 !== i2.getModel() && i2.setModel(f3);
    }
  }, [E], M), l(() => {
    let i2 = u2.current.getModifiedEditor();
    i2.getOption(c2.current.editor.EditorOption.readOnly) ? i2.setValue(r2 || "") : r2 !== i2.getValue() && (i2.executeEdits("", [{ range: i2.getModel().getFullModelRange(), text: r2 || "", forceMoveMarkers: true }]), i2.pushUndoStop());
  }, [r2], M), l(() => {
    u2.current?.getModel()?.original.setValue(e2 || "");
  }, [e2], M), l(() => {
    let { original: i2, modified: f3 } = u2.current.getModel();
    c2.current.editor.setModelLanguage(i2, t2 || n2 || "text"), c2.current.editor.setModelLanguage(f3, a2 || n2 || "text");
  }, [n2, t2, a2], M), l(() => {
    c2.current?.editor.setTheme(x);
  }, [x], M), l(() => {
    u2.current?.updateOptions(y);
  }, [y], M);
  let L = (0, import_react4.useCallback)(() => {
    if (!c2.current)
      return;
    o2.current(c2.current);
    let i2 = h(c2.current, e2 || "", t2 || n2 || "text", m || ""), f3 = h(c2.current, r2 || "", a2 || n2 || "text", E || "");
    u2.current?.setModel({ original: i2, modified: f3 });
  }, [n2, r2, a2, e2, t2, m, E]), U = (0, import_react4.useCallback)(() => {
    !b.current && w.current && (u2.current = c2.current.editor.createDiffEditor(w.current, { automaticLayout: true, ...y }), L(), c2.current?.editor.setTheme(x), O(true), b.current = true);
  }, [y, x, L]);
  (0, import_react4.useEffect)(() => {
    M && d2.current(u2.current, c2.current);
  }, [M]), (0, import_react4.useEffect)(() => {
    !T && !M && U();
  }, [T, M, U]);
  function I() {
    let i2 = u2.current?.getModel();
    g || i2?.original?.dispose(), N || i2?.modified?.dispose(), u2.current?.dispose();
  }
  return import_react4.default.createElement(H, { width: z, height: V, isEditorReady: M, loading: P, _ref: w, className: F, wrapperProps: j });
}
var ie = Oe;
var we = (0, import_react3.memo)(ie);
function He(e2) {
  let r2 = (0, import_react13.useRef)();
  return (0, import_react13.useEffect)(() => {
    r2.current = e2;
  }, [e2]), r2.current;
}
var se = He;
var _ = /* @__PURE__ */ new Map();
function Ve({ defaultValue: e2, defaultLanguage: r2, defaultPath: n2, value: t2, language: a2, path: m, theme: E = "light", line: g, loading: N = "Loading...", options: x = {}, overrideServices: P = {}, saveViewState: y = true, keepCurrentModel: V = false, width: z = "100%", height: F = "100%", className: j, wrapperProps: A = {}, beforeMount: q = D, onMount: M = D, onChange: O, onValidate: T = D }) {
  let [s2, u2] = (0, import_react12.useState)(false), [c2, w] = (0, import_react12.useState)(true), d2 = (0, import_react12.useRef)(null), o2 = (0, import_react12.useRef)(null), b = (0, import_react12.useRef)(null), L = (0, import_react12.useRef)(M), U = (0, import_react12.useRef)(q), I = (0, import_react12.useRef)(), i2 = (0, import_react12.useRef)(t2), f3 = se(m), Q = (0, import_react12.useRef)(false), B = (0, import_react12.useRef)(false);
  k(() => {
    let p2 = loader_default.init();
    return p2.then((R) => (d2.current = R) && w(false)).catch((R) => R?.type !== "cancelation" && console.error("Monaco initialization: error:", R)), () => o2.current ? pe() : p2.cancel();
  }), l(() => {
    let p2 = h(d2.current, e2 || t2 || "", r2 || a2 || "", m || n2 || "");
    p2 !== o2.current?.getModel() && (y && _.set(f3, o2.current?.saveViewState()), o2.current?.setModel(p2), y && o2.current?.restoreViewState(_.get(m)));
  }, [m], s2), l(() => {
    o2.current?.updateOptions(x);
  }, [x], s2), l(() => {
    !o2.current || t2 === void 0 || (o2.current.getOption(d2.current.editor.EditorOption.readOnly) ? o2.current.setValue(t2) : t2 !== o2.current.getValue() && (B.current = true, o2.current.executeEdits("", [{ range: o2.current.getModel().getFullModelRange(), text: t2, forceMoveMarkers: true }]), o2.current.pushUndoStop(), B.current = false));
  }, [t2], s2), l(() => {
    let p2 = o2.current?.getModel();
    p2 && a2 && d2.current?.editor.setModelLanguage(p2, a2);
  }, [a2], s2), l(() => {
    g !== void 0 && o2.current?.revealLine(g);
  }, [g], s2), l(() => {
    d2.current?.editor.setTheme(E);
  }, [E], s2);
  let X = (0, import_react12.useCallback)(() => {
    if (!(!b.current || !d2.current) && !Q.current) {
      U.current(d2.current);
      let p2 = m || n2, R = h(d2.current, t2 || e2 || "", r2 || a2 || "", p2 || "");
      o2.current = d2.current?.editor.create(b.current, { model: R, automaticLayout: true, ...x }, P), y && o2.current.restoreViewState(_.get(p2)), d2.current.editor.setTheme(E), g !== void 0 && o2.current.revealLine(g), u2(true), Q.current = true;
    }
  }, [e2, r2, n2, t2, a2, m, x, P, y, E, g]);
  (0, import_react12.useEffect)(() => {
    s2 && L.current(o2.current, d2.current);
  }, [s2]), (0, import_react12.useEffect)(() => {
    !c2 && !s2 && X();
  }, [c2, s2, X]), i2.current = t2, (0, import_react12.useEffect)(() => {
    s2 && O && (I.current?.dispose(), I.current = o2.current?.onDidChangeModelContent((p2) => {
      B.current || O(o2.current.getValue(), p2);
    }));
  }, [s2, O]), (0, import_react12.useEffect)(() => {
    if (s2) {
      let p2 = d2.current.editor.onDidChangeMarkers((R) => {
        let G = o2.current.getModel()?.uri;
        if (G && R.find((J) => J.path === G.path)) {
          let J = d2.current.editor.getModelMarkers({ resource: G });
          T?.(J);
        }
      });
      return () => {
        p2?.dispose();
      };
    }
    return () => {
    };
  }, [s2, T]);
  function pe() {
    I.current?.dispose(), V ? y && _.set(m, o2.current.saveViewState()) : o2.current.getModel()?.dispose(), o2.current.dispose();
  }
  return import_react12.default.createElement(H, { width: z, height: F, isEditorReady: s2, loading: N, _ref: b, className: j, wrapperProps: A });
}
var fe = Ve;
var de = (0, import_react11.memo)(fe);
var Ft = de;

// node_modules/.pnpm/bail@2.0.2/node_modules/bail/index.js
function bail(error) {
  if (error) {
    throw error;
  }
}

// node_modules/.pnpm/unified@11.0.3/node_modules/unified/lib/index.js
var import_extend = __toESM(require_extend(), 1);

// node_modules/.pnpm/devlop@1.1.0/node_modules/devlop/lib/default.js
function ok() {
}

// node_modules/.pnpm/is-plain-obj@4.1.0/node_modules/is-plain-obj/index.js
function isPlainObject(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}

// node_modules/.pnpm/trough@2.1.0/node_modules/trough/index.js
function trough() {
  const fns = [];
  const pipeline = { run, use };
  return pipeline;
  function run(...values) {
    let middlewareIndex = -1;
    const callback = values.pop();
    if (typeof callback !== "function") {
      throw new TypeError("Expected function as last argument, not " + callback);
    }
    next(null, ...values);
    function next(error, ...output3) {
      const fn = fns[++middlewareIndex];
      let index3 = -1;
      if (error) {
        callback(error);
        return;
      }
      while (++index3 < values.length) {
        if (output3[index3] === null || output3[index3] === void 0) {
          output3[index3] = values[index3];
        }
      }
      values = output3;
      if (fn) {
        wrap(fn, next)(...output3);
      } else {
        callback(null, ...output3);
      }
    }
  }
  function use(middelware) {
    if (typeof middelware !== "function") {
      throw new TypeError(
        "Expected `middelware` to be a function, not " + middelware
      );
    }
    fns.push(middelware);
    return pipeline;
  }
}
function wrap(middleware, callback) {
  let called;
  return wrapped;
  function wrapped(...parameters) {
    const fnExpectsCallback = middleware.length > parameters.length;
    let result;
    if (fnExpectsCallback) {
      parameters.push(done);
    }
    try {
      result = middleware.apply(this, parameters);
    } catch (error) {
      const exception = (
        /** @type {Error} */
        error
      );
      if (fnExpectsCallback && called) {
        throw exception;
      }
      return done(exception);
    }
    if (!fnExpectsCallback) {
      if (result instanceof Promise) {
        result.then(then, done);
      } else if (result instanceof Error) {
        done(result);
      } else {
        then(result);
      }
    }
  }
  function done(error, ...output3) {
    if (!called) {
      called = true;
      callback(error, ...output3);
    }
  }
  function then(value) {
    done(null, value);
  }
}

// node_modules/.pnpm/unist-util-stringify-position@4.0.0/node_modules/unist-util-stringify-position/lib/index.js
function stringifyPosition(value) {
  if (!value || typeof value !== "object") {
    return "";
  }
  if ("position" in value || "type" in value) {
    return position(value.position);
  }
  if ("start" in value || "end" in value) {
    return position(value);
  }
  if ("line" in value || "column" in value) {
    return point(value);
  }
  return "";
}
function point(point3) {
  return index2(point3 && point3.line) + ":" + index2(point3 && point3.column);
}
function position(pos) {
  return point(pos && pos.start) + "-" + point(pos && pos.end);
}
function index2(value) {
  return value && typeof value === "number" ? value : 1;
}

// node_modules/.pnpm/vfile-message@4.0.2/node_modules/vfile-message/lib/index.js
var VFileMessage = class extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(causeOrReason, optionsOrParentOrPlace, origin) {
    super();
    if (typeof optionsOrParentOrPlace === "string") {
      origin = optionsOrParentOrPlace;
      optionsOrParentOrPlace = void 0;
    }
    let reason = "";
    let options = {};
    let legacyCause = false;
    if (optionsOrParentOrPlace) {
      if ("line" in optionsOrParentOrPlace && "column" in optionsOrParentOrPlace) {
        options = { place: optionsOrParentOrPlace };
      } else if ("start" in optionsOrParentOrPlace && "end" in optionsOrParentOrPlace) {
        options = { place: optionsOrParentOrPlace };
      } else if ("type" in optionsOrParentOrPlace) {
        options = {
          ancestors: [optionsOrParentOrPlace],
          place: optionsOrParentOrPlace.position
        };
      } else {
        options = { ...optionsOrParentOrPlace };
      }
    }
    if (typeof causeOrReason === "string") {
      reason = causeOrReason;
    } else if (!options.cause && causeOrReason) {
      legacyCause = true;
      reason = causeOrReason.message;
      options.cause = causeOrReason;
    }
    if (!options.ruleId && !options.source && typeof origin === "string") {
      const index3 = origin.indexOf(":");
      if (index3 === -1) {
        options.ruleId = origin;
      } else {
        options.source = origin.slice(0, index3);
        options.ruleId = origin.slice(index3 + 1);
      }
    }
    if (!options.place && options.ancestors && options.ancestors) {
      const parent = options.ancestors[options.ancestors.length - 1];
      if (parent) {
        options.place = parent.position;
      }
    }
    const start = options.place && "start" in options.place ? options.place.start : options.place;
    this.ancestors = options.ancestors || void 0;
    this.cause = options.cause || void 0;
    this.column = start ? start.column : void 0;
    this.fatal = void 0;
    this.file;
    this.message = reason;
    this.line = start ? start.line : void 0;
    this.name = stringifyPosition(options.place) || "1:1";
    this.place = options.place || void 0;
    this.reason = this.message;
    this.ruleId = options.ruleId || void 0;
    this.source = options.source || void 0;
    this.stack = legacyCause && options.cause && typeof options.cause.stack === "string" ? options.cause.stack : "";
    this.actual;
    this.expected;
    this.note;
    this.url;
  }
};
VFileMessage.prototype.file = "";
VFileMessage.prototype.name = "";
VFileMessage.prototype.reason = "";
VFileMessage.prototype.message = "";
VFileMessage.prototype.stack = "";
VFileMessage.prototype.column = void 0;
VFileMessage.prototype.line = void 0;
VFileMessage.prototype.ancestors = void 0;
VFileMessage.prototype.cause = void 0;
VFileMessage.prototype.fatal = void 0;
VFileMessage.prototype.place = void 0;
VFileMessage.prototype.ruleId = void 0;
VFileMessage.prototype.source = void 0;

// node_modules/.pnpm/vfile@6.0.1/node_modules/vfile/lib/minpath.browser.js
var path = { basename, dirname, extname, join, sep: "/" };
function basename(path2, ext) {
  if (ext !== void 0 && typeof ext !== "string") {
    throw new TypeError('"ext" argument must be a string');
  }
  assertPath(path2);
  let start = 0;
  let end = -1;
  let index3 = path2.length;
  let seenNonSlash;
  if (ext === void 0 || ext.length === 0 || ext.length > path2.length) {
    while (index3--) {
      if (path2.codePointAt(index3) === 47) {
        if (seenNonSlash) {
          start = index3 + 1;
          break;
        }
      } else if (end < 0) {
        seenNonSlash = true;
        end = index3 + 1;
      }
    }
    return end < 0 ? "" : path2.slice(start, end);
  }
  if (ext === path2) {
    return "";
  }
  let firstNonSlashEnd = -1;
  let extIndex = ext.length - 1;
  while (index3--) {
    if (path2.codePointAt(index3) === 47) {
      if (seenNonSlash) {
        start = index3 + 1;
        break;
      }
    } else {
      if (firstNonSlashEnd < 0) {
        seenNonSlash = true;
        firstNonSlashEnd = index3 + 1;
      }
      if (extIndex > -1) {
        if (path2.codePointAt(index3) === ext.codePointAt(extIndex--)) {
          if (extIndex < 0) {
            end = index3;
          }
        } else {
          extIndex = -1;
          end = firstNonSlashEnd;
        }
      }
    }
  }
  if (start === end) {
    end = firstNonSlashEnd;
  } else if (end < 0) {
    end = path2.length;
  }
  return path2.slice(start, end);
}
function dirname(path2) {
  assertPath(path2);
  if (path2.length === 0) {
    return ".";
  }
  let end = -1;
  let index3 = path2.length;
  let unmatchedSlash;
  while (--index3) {
    if (path2.codePointAt(index3) === 47) {
      if (unmatchedSlash) {
        end = index3;
        break;
      }
    } else if (!unmatchedSlash) {
      unmatchedSlash = true;
    }
  }
  return end < 0 ? path2.codePointAt(0) === 47 ? "/" : "." : end === 1 && path2.codePointAt(0) === 47 ? "//" : path2.slice(0, end);
}
function extname(path2) {
  assertPath(path2);
  let index3 = path2.length;
  let end = -1;
  let startPart = 0;
  let startDot = -1;
  let preDotState = 0;
  let unmatchedSlash;
  while (index3--) {
    const code3 = path2.codePointAt(index3);
    if (code3 === 47) {
      if (unmatchedSlash) {
        startPart = index3 + 1;
        break;
      }
      continue;
    }
    if (end < 0) {
      unmatchedSlash = true;
      end = index3 + 1;
    }
    if (code3 === 46) {
      if (startDot < 0) {
        startDot = index3;
      } else if (preDotState !== 1) {
        preDotState = 1;
      }
    } else if (startDot > -1) {
      preDotState = -1;
    }
  }
  if (startDot < 0 || end < 0 || // We saw a non-dot character immediately before the dot.
  preDotState === 0 || // The (right-most) trimmed path component is exactly `..`.
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path2.slice(startDot, end);
}
function join(...segments) {
  let index3 = -1;
  let joined;
  while (++index3 < segments.length) {
    assertPath(segments[index3]);
    if (segments[index3]) {
      joined = joined === void 0 ? segments[index3] : joined + "/" + segments[index3];
    }
  }
  return joined === void 0 ? "." : normalize(joined);
}
function normalize(path2) {
  assertPath(path2);
  const absolute = path2.codePointAt(0) === 47;
  let value = normalizeString(path2, !absolute);
  if (value.length === 0 && !absolute) {
    value = ".";
  }
  if (value.length > 0 && path2.codePointAt(path2.length - 1) === 47) {
    value += "/";
  }
  return absolute ? "/" + value : value;
}
function normalizeString(path2, allowAboveRoot) {
  let result = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let index3 = -1;
  let code3;
  let lastSlashIndex;
  while (++index3 <= path2.length) {
    if (index3 < path2.length) {
      code3 = path2.codePointAt(index3);
    } else if (code3 === 47) {
      break;
    } else {
      code3 = 47;
    }
    if (code3 === 47) {
      if (lastSlash === index3 - 1 || dots === 1) {
      } else if (lastSlash !== index3 - 1 && dots === 2) {
        if (result.length < 2 || lastSegmentLength !== 2 || result.codePointAt(result.length - 1) !== 46 || result.codePointAt(result.length - 2) !== 46) {
          if (result.length > 2) {
            lastSlashIndex = result.lastIndexOf("/");
            if (lastSlashIndex !== result.length - 1) {
              if (lastSlashIndex < 0) {
                result = "";
                lastSegmentLength = 0;
              } else {
                result = result.slice(0, lastSlashIndex);
                lastSegmentLength = result.length - 1 - result.lastIndexOf("/");
              }
              lastSlash = index3;
              dots = 0;
              continue;
            }
          } else if (result.length > 0) {
            result = "";
            lastSegmentLength = 0;
            lastSlash = index3;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          result = result.length > 0 ? result + "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (result.length > 0) {
          result += "/" + path2.slice(lastSlash + 1, index3);
        } else {
          result = path2.slice(lastSlash + 1, index3);
        }
        lastSegmentLength = index3 - lastSlash - 1;
      }
      lastSlash = index3;
      dots = 0;
    } else if (code3 === 46 && dots > -1) {
      dots++;
    } else {
      dots = -1;
    }
  }
  return result;
}
function assertPath(path2) {
  if (typeof path2 !== "string") {
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(path2)
    );
  }
}

// node_modules/.pnpm/vfile@6.0.1/node_modules/vfile/lib/minproc.browser.js
var proc = { cwd };
function cwd() {
  return "/";
}

// node_modules/.pnpm/vfile@6.0.1/node_modules/vfile/lib/minurl.shared.js
function isUrl(fileUrlOrPath) {
  return Boolean(
    fileUrlOrPath !== null && typeof fileUrlOrPath === "object" && "href" in fileUrlOrPath && fileUrlOrPath.href && "protocol" in fileUrlOrPath && fileUrlOrPath.protocol && // @ts-expect-error: indexing is fine.
    fileUrlOrPath.auth === void 0
  );
}

// node_modules/.pnpm/vfile@6.0.1/node_modules/vfile/lib/minurl.browser.js
function urlToPath(path2) {
  if (typeof path2 === "string") {
    path2 = new URL(path2);
  } else if (!isUrl(path2)) {
    const error = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + path2 + "`"
    );
    error.code = "ERR_INVALID_ARG_TYPE";
    throw error;
  }
  if (path2.protocol !== "file:") {
    const error = new TypeError("The URL must be of scheme file");
    error.code = "ERR_INVALID_URL_SCHEME";
    throw error;
  }
  return getPathFromURLPosix(path2);
}
function getPathFromURLPosix(url) {
  if (url.hostname !== "") {
    const error = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    error.code = "ERR_INVALID_FILE_URL_HOST";
    throw error;
  }
  const pathname = url.pathname;
  let index3 = -1;
  while (++index3 < pathname.length) {
    if (pathname.codePointAt(index3) === 37 && pathname.codePointAt(index3 + 1) === 50) {
      const third = pathname.codePointAt(index3 + 2);
      if (third === 70 || third === 102) {
        const error = new TypeError(
          "File URL path must not include encoded / characters"
        );
        error.code = "ERR_INVALID_FILE_URL_PATH";
        throw error;
      }
    }
  }
  return decodeURIComponent(pathname);
}

// node_modules/.pnpm/vfile@6.0.1/node_modules/vfile/lib/index.js
var order = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
var VFile = class {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(value) {
    let options;
    if (!value) {
      options = {};
    } else if (isUrl(value)) {
      options = { path: value };
    } else if (typeof value === "string" || isUint8Array(value)) {
      options = { value };
    } else {
      options = value;
    }
    this.cwd = proc.cwd();
    this.data = {};
    this.history = [];
    this.messages = [];
    this.value;
    this.map;
    this.result;
    this.stored;
    let index3 = -1;
    while (++index3 < order.length) {
      const prop2 = order[index3];
      if (prop2 in options && options[prop2] !== void 0 && options[prop2] !== null) {
        this[prop2] = prop2 === "history" ? [...options[prop2]] : options[prop2];
      }
    }
    let prop;
    for (prop in options) {
      if (!order.includes(prop)) {
        this[prop] = options[prop];
      }
    }
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path === "string" ? path.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(basename2) {
    assertNonEmpty(basename2, "basename");
    assertPart(basename2, "basename");
    this.path = path.join(this.dirname || "", basename2);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path === "string" ? path.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(dirname2) {
    assertPath2(this.basename, "dirname");
    this.path = path.join(dirname2 || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path === "string" ? path.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(extname2) {
    assertPart(extname2, "extname");
    assertPath2(this.dirname, "extname");
    if (extname2) {
      if (extname2.codePointAt(0) !== 46) {
        throw new Error("`extname` must start with `.`");
      }
      if (extname2.includes(".", 1)) {
        throw new Error("`extname` cannot contain multiple dots");
      }
    }
    this.path = path.join(this.dirname, this.stem + (extname2 || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(path2) {
    if (isUrl(path2)) {
      path2 = urlToPath(path2);
    }
    assertNonEmpty(path2, "path");
    if (this.path !== path2) {
      this.history.push(path2);
    }
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path === "string" ? path.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(stem) {
    assertNonEmpty(stem, "stem");
    assertPart(stem, "stem");
    this.path = path.join(this.dirname || "", stem + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(causeOrReason, optionsOrParentOrPlace, origin) {
    const message2 = this.message(causeOrReason, optionsOrParentOrPlace, origin);
    message2.fatal = true;
    throw message2;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(causeOrReason, optionsOrParentOrPlace, origin) {
    const message2 = this.message(causeOrReason, optionsOrParentOrPlace, origin);
    message2.fatal = void 0;
    return message2;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(causeOrReason, optionsOrParentOrPlace, origin) {
    const message2 = new VFileMessage(
      // @ts-expect-error: the overloads are fine.
      causeOrReason,
      optionsOrParentOrPlace,
      origin
    );
    if (this.path) {
      message2.name = this.path + ":" + message2.name;
      message2.file = this.path;
    }
    message2.fatal = false;
    this.messages.push(message2);
    return message2;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(encoding) {
    if (this.value === void 0) {
      return "";
    }
    if (typeof this.value === "string") {
      return this.value;
    }
    const decoder = new TextDecoder(encoding || void 0);
    return decoder.decode(this.value);
  }
};
function assertPart(part, name2) {
  if (part && part.includes(path.sep)) {
    throw new Error(
      "`" + name2 + "` cannot be a path: did not expect `" + path.sep + "`"
    );
  }
}
function assertNonEmpty(part, name2) {
  if (!part) {
    throw new Error("`" + name2 + "` cannot be empty");
  }
}
function assertPath2(path2, name2) {
  if (!path2) {
    throw new Error("Setting `" + name2 + "` requires `path` to be set too");
  }
}
function isUint8Array(value) {
  return Boolean(
    value && typeof value === "object" && "byteLength" in value && "byteOffset" in value
  );
}

// node_modules/.pnpm/unified@11.0.3/node_modules/unified/lib/callable-instance.js
var CallableInstance = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(property) {
    const self = this;
    const constr = self.constructor;
    const proto = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      constr.prototype
    );
    const func = proto[property];
    const apply = function() {
      return func.apply(apply, arguments);
    };
    Object.setPrototypeOf(apply, proto);
    const names2 = Object.getOwnPropertyNames(func);
    for (const p2 of names2) {
      const descriptor = Object.getOwnPropertyDescriptor(func, p2);
      if (descriptor)
        Object.defineProperty(apply, p2, descriptor);
    }
    return apply;
  }
);

// node_modules/.pnpm/unified@11.0.3/node_modules/unified/lib/index.js
var own = {}.hasOwnProperty;
var Processor = class _Processor extends CallableInstance {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy");
    this.Compiler = void 0;
    this.Parser = void 0;
    this.attachers = [];
    this.compiler = void 0;
    this.freezeIndex = -1;
    this.frozen = void 0;
    this.namespace = {};
    this.parser = void 0;
    this.transformers = trough();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@link Processor `Processor`}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const destination = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new _Processor()
    );
    let index3 = -1;
    while (++index3 < this.attachers.length) {
      const attacher = this.attachers[index3];
      destination.use(...attacher);
    }
    destination.data((0, import_extend.default)(true, {}, this.namespace));
    return destination;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > 👉 **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > 👉 **Note**: to register custom data in TypeScript, augment the
   * > {@link Data `Data`} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(key, value) {
    if (typeof key === "string") {
      if (arguments.length === 2) {
        assertUnfrozen("data", this.frozen);
        this.namespace[key] = value;
        return this;
      }
      return own.call(this.namespace, key) && this.namespace[key] || void 0;
    }
    if (key) {
      assertUnfrozen("data", this.frozen);
      this.namespace = key;
      return this;
    }
    return this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen) {
      return this;
    }
    const self = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    while (++this.freezeIndex < this.attachers.length) {
      const [attacher, ...options] = this.attachers[this.freezeIndex];
      if (options[0] === false) {
        continue;
      }
      if (options[0] === true) {
        options[0] = void 0;
      }
      const transformer = attacher.call(self, ...options);
      if (typeof transformer === "function") {
        this.transformers.use(transformer);
      }
    }
    this.frozen = true;
    this.freezeIndex = Number.POSITIVE_INFINITY;
    return this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > 👉 **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > 👉 **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(file) {
    this.freeze();
    const realFile = vfile(file);
    const parser = this.parser || this.Parser;
    assertParser("parse", parser);
    return parser(String(realFile), realFile);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > 👉 **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > 👉 **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > 👉 **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@link CompileResultMap `CompileResultMap`}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(file, done) {
    const self = this;
    this.freeze();
    assertParser("process", this.parser || this.Parser);
    assertCompiler("process", this.compiler || this.Compiler);
    return done ? executor(void 0, done) : new Promise(executor);
    function executor(resolve, reject) {
      const realFile = vfile(file);
      const parseTree = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        self.parse(realFile)
      );
      self.run(parseTree, realFile, function(error, tree, file2) {
        if (error || !tree || !file2) {
          return realDone(error);
        }
        const compileTree = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          tree
        );
        const compileResult = self.stringify(compileTree, file2);
        if (looksLikeAValue(compileResult)) {
          file2.value = compileResult;
        } else {
          file2.result = compileResult;
        }
        realDone(
          error,
          /** @type {VFileWithOutput<CompileResult>} */
          file2
        );
      });
      function realDone(error, file2) {
        if (error || !file2) {
          reject(error);
        } else if (resolve) {
          resolve(file2);
        } else {
          ok(done, "`done` is defined if `resolve` is not");
          done(void 0, file2);
        }
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > 👉 **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > 👉 **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > 👉 **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@link CompileResultMap `CompileResultMap`}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(file) {
    let complete = false;
    let result;
    this.freeze();
    assertParser("processSync", this.parser || this.Parser);
    assertCompiler("processSync", this.compiler || this.Compiler);
    this.process(file, realDone);
    assertDone("processSync", "process", complete);
    ok(result, "we either bailed on an error or have a tree");
    return result;
    function realDone(error, file2) {
      complete = true;
      bail(error);
      result = file2;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > 👉 **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > 👉 **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(tree, file, done) {
    assertNode(tree);
    this.freeze();
    const transformers = this.transformers;
    if (!done && typeof file === "function") {
      done = file;
      file = void 0;
    }
    return done ? executor(void 0, done) : new Promise(executor);
    function executor(resolve, reject) {
      ok(
        typeof file !== "function",
        "`file` can\u2019t be a `done` anymore, we checked"
      );
      const realFile = vfile(file);
      transformers.run(tree, realFile, realDone);
      function realDone(error, outputTree, file2) {
        const resultingTree = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          outputTree || tree
        );
        if (error) {
          reject(error);
        } else if (resolve) {
          resolve(resultingTree);
        } else {
          ok(done, "`done` is defined if `resolve` is not");
          done(void 0, resultingTree, file2);
        }
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > 👉 **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > 👉 **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(tree, file) {
    let complete = false;
    let result;
    this.run(tree, file, realDone);
    assertDone("runSync", "run", complete);
    ok(result, "we either bailed on an error or have a tree");
    return result;
    function realDone(error, tree2) {
      bail(error);
      result = tree2;
      complete = true;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > 👉 **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > 👉 **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > 👉 **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@link CompileResultMap `CompileResultMap`}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(tree, file) {
    this.freeze();
    const realFile = vfile(file);
    const compiler2 = this.compiler || this.Compiler;
    assertCompiler("stringify", compiler2);
    assertNode(tree);
    return compiler2(tree, realFile);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > 👉 **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(value, ...parameters) {
    const attachers = this.attachers;
    const namespace = this.namespace;
    assertUnfrozen("use", this.frozen);
    if (value === null || value === void 0) {
    } else if (typeof value === "function") {
      addPlugin(value, parameters);
    } else if (typeof value === "object") {
      if (Array.isArray(value)) {
        addList(value);
      } else {
        addPreset(value);
      }
    } else {
      throw new TypeError("Expected usable value, not `" + value + "`");
    }
    return this;
    function add2(value2) {
      if (typeof value2 === "function") {
        addPlugin(value2, []);
      } else if (typeof value2 === "object") {
        if (Array.isArray(value2)) {
          const [plugin, ...parameters2] = (
            /** @type {PluginTuple<Array<unknown>>} */
            value2
          );
          addPlugin(plugin, parameters2);
        } else {
          addPreset(value2);
        }
      } else {
        throw new TypeError("Expected usable value, not `" + value2 + "`");
      }
    }
    function addPreset(result) {
      if (!("plugins" in result) && !("settings" in result)) {
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      }
      addList(result.plugins);
      if (result.settings) {
        namespace.settings = (0, import_extend.default)(true, namespace.settings, result.settings);
      }
    }
    function addList(plugins) {
      let index3 = -1;
      if (plugins === null || plugins === void 0) {
      } else if (Array.isArray(plugins)) {
        while (++index3 < plugins.length) {
          const thing = plugins[index3];
          add2(thing);
        }
      } else {
        throw new TypeError("Expected a list of plugins, not `" + plugins + "`");
      }
    }
    function addPlugin(plugin, parameters2) {
      let index3 = -1;
      let entryIndex = -1;
      while (++index3 < attachers.length) {
        if (attachers[index3][0] === plugin) {
          entryIndex = index3;
          break;
        }
      }
      if (entryIndex === -1) {
        attachers.push([plugin, ...parameters2]);
      } else if (parameters2.length > 0) {
        let [primary, ...rest] = parameters2;
        const currentPrimary = attachers[entryIndex][1];
        if (isPlainObject(currentPrimary) && isPlainObject(primary)) {
          primary = (0, import_extend.default)(true, currentPrimary, primary);
        }
        attachers[entryIndex] = [plugin, primary, ...rest];
      }
    }
  }
};
var unified = new Processor().freeze();
function assertParser(name2, value) {
  if (typeof value !== "function") {
    throw new TypeError("Cannot `" + name2 + "` without `parser`");
  }
}
function assertCompiler(name2, value) {
  if (typeof value !== "function") {
    throw new TypeError("Cannot `" + name2 + "` without `compiler`");
  }
}
function assertUnfrozen(name2, frozen) {
  if (frozen) {
    throw new Error(
      "Cannot call `" + name2 + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
  }
}
function assertNode(node2) {
  if (!isPlainObject(node2) || typeof node2.type !== "string") {
    throw new TypeError("Expected node, got `" + node2 + "`");
  }
}
function assertDone(name2, asyncName, complete) {
  if (!complete) {
    throw new Error(
      "`" + name2 + "` finished async. Use `" + asyncName + "` instead"
    );
  }
}
function vfile(value) {
  return looksLikeAVFile(value) ? value : new VFile(value);
}
function looksLikeAVFile(value) {
  return Boolean(
    value && typeof value === "object" && "message" in value && "messages" in value
  );
}
function looksLikeAValue(value) {
  return typeof value === "string" || isUint8Array2(value);
}
function isUint8Array2(value) {
  return Boolean(
    value && typeof value === "object" && "byteLength" in value && "byteOffset" in value
  );
}

// node_modules/.pnpm/mdast-util-to-string@4.0.0/node_modules/mdast-util-to-string/lib/index.js
var emptyOptions = {};
function toString(value, options) {
  const settings = options || emptyOptions;
  const includeImageAlt = typeof settings.includeImageAlt === "boolean" ? settings.includeImageAlt : true;
  const includeHtml = typeof settings.includeHtml === "boolean" ? settings.includeHtml : true;
  return one(value, includeImageAlt, includeHtml);
}
function one(value, includeImageAlt, includeHtml) {
  if (node(value)) {
    if ("value" in value) {
      return value.type === "html" && !includeHtml ? "" : value.value;
    }
    if (includeImageAlt && "alt" in value && value.alt) {
      return value.alt;
    }
    if ("children" in value) {
      return all(value.children, includeImageAlt, includeHtml);
    }
  }
  if (Array.isArray(value)) {
    return all(value, includeImageAlt, includeHtml);
  }
  return "";
}
function all(values, includeImageAlt, includeHtml) {
  const result = [];
  let index3 = -1;
  while (++index3 < values.length) {
    result[index3] = one(values[index3], includeImageAlt, includeHtml);
  }
  return result.join("");
}
function node(value) {
  return Boolean(value && typeof value === "object");
}

// node_modules/.pnpm/decode-named-character-reference@1.0.2/node_modules/decode-named-character-reference/index.dom.js
var element = document.createElement("i");
function decodeNamedCharacterReference(value) {
  const characterReference2 = "&" + value + ";";
  element.innerHTML = characterReference2;
  const char = element.textContent;
  if (char.charCodeAt(char.length - 1) === 59 && value !== "semi") {
    return false;
  }
  return char === characterReference2 ? false : char;
}

// node_modules/.pnpm/micromark-util-chunked@2.0.0/node_modules/micromark-util-chunked/index.js
function splice(list2, start, remove, items) {
  const end = list2.length;
  let chunkStart = 0;
  let parameters;
  if (start < 0) {
    start = -start > end ? 0 : end + start;
  } else {
    start = start > end ? end : start;
  }
  remove = remove > 0 ? remove : 0;
  if (items.length < 1e4) {
    parameters = Array.from(items);
    parameters.unshift(start, remove);
    list2.splice(...parameters);
  } else {
    if (remove)
      list2.splice(start, remove);
    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + 1e4);
      parameters.unshift(start, 0);
      list2.splice(...parameters);
      chunkStart += 1e4;
      start += 1e4;
    }
  }
}
function push(list2, items) {
  if (list2.length > 0) {
    splice(list2, list2.length, 0, items);
    return list2;
  }
  return items;
}

// node_modules/.pnpm/micromark-util-combine-extensions@2.0.0/node_modules/micromark-util-combine-extensions/index.js
var hasOwnProperty2 = {}.hasOwnProperty;
function combineExtensions(extensions) {
  const all2 = {};
  let index3 = -1;
  while (++index3 < extensions.length) {
    syntaxExtension(all2, extensions[index3]);
  }
  return all2;
}
function syntaxExtension(all2, extension2) {
  let hook;
  for (hook in extension2) {
    const maybe = hasOwnProperty2.call(all2, hook) ? all2[hook] : void 0;
    const left = maybe || (all2[hook] = {});
    const right = extension2[hook];
    let code3;
    if (right) {
      for (code3 in right) {
        if (!hasOwnProperty2.call(left, code3))
          left[code3] = [];
        const value = right[code3];
        constructs(
          // @ts-expect-error Looks like a list.
          left[code3],
          Array.isArray(value) ? value : value ? [value] : []
        );
      }
    }
  }
}
function constructs(existing, list2) {
  let index3 = -1;
  const before = [];
  while (++index3 < list2.length) {
    ;
    (list2[index3].add === "after" ? existing : before).push(list2[index3]);
  }
  splice(existing, 0, 0, before);
}

// node_modules/.pnpm/micromark-util-decode-numeric-character-reference@2.0.0/node_modules/micromark-util-decode-numeric-character-reference/index.js
function decodeNumericCharacterReference(value, base3) {
  const code3 = Number.parseInt(value, base3);
  if (
    // C0 except for HT, LF, FF, CR, space.
    code3 < 9 || code3 === 11 || code3 > 13 && code3 < 32 || // Control character (DEL) of C0, and C1 controls.
    code3 > 126 && code3 < 160 || // Lone high surrogates and low surrogates.
    code3 > 55295 && code3 < 57344 || // Noncharacters.
    code3 > 64975 && code3 < 65008 || (code3 & 65535) === 65535 || (code3 & 65535) === 65534 || // Out of range
    code3 > 1114111
  ) {
    return "\uFFFD";
  }
  return String.fromCharCode(code3);
}

// node_modules/.pnpm/micromark-util-normalize-identifier@2.0.0/node_modules/micromark-util-normalize-identifier/index.js
function normalizeIdentifier(value) {
  return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}

// node_modules/.pnpm/micromark-util-character@2.0.1/node_modules/micromark-util-character/index.js
var unicodePunctuationInternal = regexCheck(/\p{P}/u);
var asciiAlpha = regexCheck(/[A-Za-z]/);
var asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
var asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
function asciiControl(code3) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code3 !== null && (code3 < 32 || code3 === 127)
  );
}
var asciiDigit = regexCheck(/\d/);
var asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
var asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
function markdownLineEnding(code3) {
  return code3 !== null && code3 < -2;
}
function markdownLineEndingOrSpace(code3) {
  return code3 !== null && (code3 < 0 || code3 === 32);
}
function markdownSpace(code3) {
  return code3 === -2 || code3 === -1 || code3 === 32;
}
function unicodePunctuation(code3) {
  return asciiPunctuation(code3) || unicodePunctuationInternal(code3);
}
var unicodeWhitespace = regexCheck(/\s/);
function regexCheck(regex) {
  return check;
  function check(code3) {
    return code3 !== null && code3 > -1 && regex.test(String.fromCharCode(code3));
  }
}

// node_modules/.pnpm/micromark-factory-space@2.0.0/node_modules/micromark-factory-space/index.js
function factorySpace(effects, ok2, type, max) {
  const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
  let size = 0;
  return start;
  function start(code3) {
    if (markdownSpace(code3)) {
      effects.enter(type);
      return prefix(code3);
    }
    return ok2(code3);
  }
  function prefix(code3) {
    if (markdownSpace(code3) && size++ < limit) {
      effects.consume(code3);
      return prefix;
    }
    effects.exit(type);
    return ok2(code3);
  }
}

// node_modules/.pnpm/micromark@4.0.0/node_modules/micromark/lib/initialize/content.js
var content = {
  tokenize: initializeContent
};
function initializeContent(effects) {
  const contentStart = effects.attempt(
    this.parser.constructs.contentInitial,
    afterContentStartConstruct,
    paragraphInitial
  );
  let previous2;
  return contentStart;
  function afterContentStartConstruct(code3) {
    if (code3 === null) {
      effects.consume(code3);
      return;
    }
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return factorySpace(effects, contentStart, "linePrefix");
  }
  function paragraphInitial(code3) {
    effects.enter("paragraph");
    return lineStart(code3);
  }
  function lineStart(code3) {
    const token = effects.enter("chunkText", {
      contentType: "text",
      previous: previous2
    });
    if (previous2) {
      previous2.next = token;
    }
    previous2 = token;
    return data(code3);
  }
  function data(code3) {
    if (code3 === null) {
      effects.exit("chunkText");
      effects.exit("paragraph");
      effects.consume(code3);
      return;
    }
    if (markdownLineEnding(code3)) {
      effects.consume(code3);
      effects.exit("chunkText");
      return lineStart;
    }
    effects.consume(code3);
    return data;
  }
}

// node_modules/.pnpm/micromark@4.0.0/node_modules/micromark/lib/initialize/document.js
var document2 = {
  tokenize: initializeDocument
};
var containerConstruct = {
  tokenize: tokenizeContainer
};
function initializeDocument(effects) {
  const self = this;
  const stack = [];
  let continued = 0;
  let childFlow;
  let childToken;
  let lineStartOffset;
  return start;
  function start(code3) {
    if (continued < stack.length) {
      const item = stack[continued];
      self.containerState = item[1];
      return effects.attempt(
        item[0].continuation,
        documentContinue,
        checkNewContainers
      )(code3);
    }
    return checkNewContainers(code3);
  }
  function documentContinue(code3) {
    continued++;
    if (self.containerState._closeFlow) {
      self.containerState._closeFlow = void 0;
      if (childFlow) {
        closeFlow();
      }
      const indexBeforeExits = self.events.length;
      let indexBeforeFlow = indexBeforeExits;
      let point3;
      while (indexBeforeFlow--) {
        if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
          point3 = self.events[indexBeforeFlow][1].end;
          break;
        }
      }
      exitContainers(continued);
      let index3 = indexBeforeExits;
      while (index3 < self.events.length) {
        self.events[index3][1].end = Object.assign({}, point3);
        index3++;
      }
      splice(
        self.events,
        indexBeforeFlow + 1,
        0,
        self.events.slice(indexBeforeExits)
      );
      self.events.length = index3;
      return checkNewContainers(code3);
    }
    return start(code3);
  }
  function checkNewContainers(code3) {
    if (continued === stack.length) {
      if (!childFlow) {
        return documentContinued(code3);
      }
      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
        return flowStart(code3);
      }
      self.interrupt = Boolean(
        childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack
      );
    }
    self.containerState = {};
    return effects.check(
      containerConstruct,
      thereIsANewContainer,
      thereIsNoNewContainer
    )(code3);
  }
  function thereIsANewContainer(code3) {
    if (childFlow)
      closeFlow();
    exitContainers(continued);
    return documentContinued(code3);
  }
  function thereIsNoNewContainer(code3) {
    self.parser.lazy[self.now().line] = continued !== stack.length;
    lineStartOffset = self.now().offset;
    return flowStart(code3);
  }
  function documentContinued(code3) {
    self.containerState = {};
    return effects.attempt(
      containerConstruct,
      containerContinue,
      flowStart
    )(code3);
  }
  function containerContinue(code3) {
    continued++;
    stack.push([self.currentConstruct, self.containerState]);
    return documentContinued(code3);
  }
  function flowStart(code3) {
    if (code3 === null) {
      if (childFlow)
        closeFlow();
      exitContainers(0);
      effects.consume(code3);
      return;
    }
    childFlow = childFlow || self.parser.flow(self.now());
    effects.enter("chunkFlow", {
      contentType: "flow",
      previous: childToken,
      _tokenizer: childFlow
    });
    return flowContinue(code3);
  }
  function flowContinue(code3) {
    if (code3 === null) {
      writeToChild(effects.exit("chunkFlow"), true);
      exitContainers(0);
      effects.consume(code3);
      return;
    }
    if (markdownLineEnding(code3)) {
      effects.consume(code3);
      writeToChild(effects.exit("chunkFlow"));
      continued = 0;
      self.interrupt = void 0;
      return start;
    }
    effects.consume(code3);
    return flowContinue;
  }
  function writeToChild(token, eof) {
    const stream = self.sliceStream(token);
    if (eof)
      stream.push(null);
    token.previous = childToken;
    if (childToken)
      childToken.next = token;
    childToken = token;
    childFlow.defineSkip(token.start);
    childFlow.write(stream);
    if (self.parser.lazy[token.start.line]) {
      let index3 = childFlow.events.length;
      while (index3--) {
        if (
          // The token starts before the line ending…
          childFlow.events[index3][1].start.offset < lineStartOffset && // …and either is not ended yet…
          (!childFlow.events[index3][1].end || // …or ends after it.
          childFlow.events[index3][1].end.offset > lineStartOffset)
        ) {
          return;
        }
      }
      const indexBeforeExits = self.events.length;
      let indexBeforeFlow = indexBeforeExits;
      let seen;
      let point3;
      while (indexBeforeFlow--) {
        if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
          if (seen) {
            point3 = self.events[indexBeforeFlow][1].end;
            break;
          }
          seen = true;
        }
      }
      exitContainers(continued);
      index3 = indexBeforeExits;
      while (index3 < self.events.length) {
        self.events[index3][1].end = Object.assign({}, point3);
        index3++;
      }
      splice(
        self.events,
        indexBeforeFlow + 1,
        0,
        self.events.slice(indexBeforeExits)
      );
      self.events.length = index3;
    }
  }
  function exitContainers(size) {
    let index3 = stack.length;
    while (index3-- > size) {
      const entry = stack[index3];
      self.containerState = entry[1];
      entry[0].exit.call(self, effects);
    }
    stack.length = size;
  }
  function closeFlow() {
    childFlow.write([null]);
    childToken = void 0;
    childFlow = void 0;
    self.containerState._closeFlow = void 0;
  }
}
function tokenizeContainer(effects, ok2, nok) {
  return factorySpace(
    effects,
    effects.attempt(this.parser.constructs.document, ok2, nok),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}

// node_modules/.pnpm/micromark-util-classify-character@2.0.0/node_modules/micromark-util-classify-character/index.js
function classifyCharacter(code3) {
  if (code3 === null || markdownLineEndingOrSpace(code3) || unicodeWhitespace(code3)) {
    return 1;
  }
  if (unicodePunctuation(code3)) {
    return 2;
  }
}

// node_modules/.pnpm/micromark-util-resolve-all@2.0.0/node_modules/micromark-util-resolve-all/index.js
function resolveAll(constructs2, events, context) {
  const called = [];
  let index3 = -1;
  while (++index3 < constructs2.length) {
    const resolve = constructs2[index3].resolveAll;
    if (resolve && !called.includes(resolve)) {
      events = resolve(events, context);
      called.push(resolve);
    }
  }
  return events;
}

// node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/attention.js
var attention = {
  name: "attention",
  tokenize: tokenizeAttention,
  resolveAll: resolveAllAttention
};
function resolveAllAttention(events, context) {
  let index3 = -1;
  let open;
  let group;
  let text3;
  let openingSequence;
  let closingSequence;
  let use;
  let nextEvents;
  let offset;
  while (++index3 < events.length) {
    if (events[index3][0] === "enter" && events[index3][1].type === "attentionSequence" && events[index3][1]._close) {
      open = index3;
      while (open--) {
        if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && // If the markers are the same:
        context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index3][1]).charCodeAt(0)) {
          if ((events[open][1]._close || events[index3][1]._open) && (events[index3][1].end.offset - events[index3][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index3][1].end.offset - events[index3][1].start.offset) % 3)) {
            continue;
          }
          use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index3][1].end.offset - events[index3][1].start.offset > 1 ? 2 : 1;
          const start = Object.assign({}, events[open][1].end);
          const end = Object.assign({}, events[index3][1].start);
          movePoint(start, -use);
          movePoint(end, use);
          openingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start,
            end: Object.assign({}, events[open][1].end)
          };
          closingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start: Object.assign({}, events[index3][1].start),
            end
          };
          text3 = {
            type: use > 1 ? "strongText" : "emphasisText",
            start: Object.assign({}, events[open][1].end),
            end: Object.assign({}, events[index3][1].start)
          };
          group = {
            type: use > 1 ? "strong" : "emphasis",
            start: Object.assign({}, openingSequence.start),
            end: Object.assign({}, closingSequence.end)
          };
          events[open][1].end = Object.assign({}, openingSequence.start);
          events[index3][1].start = Object.assign({}, closingSequence.end);
          nextEvents = [];
          if (events[open][1].end.offset - events[open][1].start.offset) {
            nextEvents = push(nextEvents, [
              ["enter", events[open][1], context],
              ["exit", events[open][1], context]
            ]);
          }
          nextEvents = push(nextEvents, [
            ["enter", group, context],
            ["enter", openingSequence, context],
            ["exit", openingSequence, context],
            ["enter", text3, context]
          ]);
          nextEvents = push(
            nextEvents,
            resolveAll(
              context.parser.constructs.insideSpan.null,
              events.slice(open + 1, index3),
              context
            )
          );
          nextEvents = push(nextEvents, [
            ["exit", text3, context],
            ["enter", closingSequence, context],
            ["exit", closingSequence, context],
            ["exit", group, context]
          ]);
          if (events[index3][1].end.offset - events[index3][1].start.offset) {
            offset = 2;
            nextEvents = push(nextEvents, [
              ["enter", events[index3][1], context],
              ["exit", events[index3][1], context]
            ]);
          } else {
            offset = 0;
          }
          splice(events, open - 1, index3 - open + 3, nextEvents);
          index3 = open + nextEvents.length - offset - 2;
          break;
        }
      }
    }
  }
  index3 = -1;
  while (++index3 < events.length) {
    if (events[index3][1].type === "attentionSequence") {
      events[index3][1].type = "data";
    }
  }
  return events;
}
function tokenizeAttention(effects, ok2) {
  const attentionMarkers2 = this.parser.constructs.attentionMarkers.null;
  const previous2 = this.previous;
  const before = classifyCharacter(previous2);
  let marker;
  return start;
  function start(code3) {
    marker = code3;
    effects.enter("attentionSequence");
    return inside(code3);
  }
  function inside(code3) {
    if (code3 === marker) {
      effects.consume(code3);
      return inside;
    }
    const token = effects.exit("attentionSequence");
    const after = classifyCharacter(code3);
    const open = !after || after === 2 && before || attentionMarkers2.includes(code3);
    const close = !before || before === 2 && after || attentionMarkers2.includes(previous2);
    token._open = Boolean(marker === 42 ? open : open && (before || !close));
    token._close = Boolean(marker === 42 ? close : close && (after || !open));
    return ok2(code3);
  }
}
function movePoint(point3, offset) {
  point3.column += offset;
  point3.offset += offset;
  point3._bufferIndex += offset;
}

// node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/autolink.js
var autolink = {
  name: "autolink",
  tokenize: tokenizeAutolink
};
function tokenizeAutolink(effects, ok2, nok) {
  let size = 0;
  return start;
  function start(code3) {
    effects.enter("autolink");
    effects.enter("autolinkMarker");
    effects.consume(code3);
    effects.exit("autolinkMarker");
    effects.enter("autolinkProtocol");
    return open;
  }
  function open(code3) {
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      return schemeOrEmailAtext;
    }
    return emailAtext(code3);
  }
  function schemeOrEmailAtext(code3) {
    if (code3 === 43 || code3 === 45 || code3 === 46 || asciiAlphanumeric(code3)) {
      size = 1;
      return schemeInsideOrEmailAtext(code3);
    }
    return emailAtext(code3);
  }
  function schemeInsideOrEmailAtext(code3) {
    if (code3 === 58) {
      effects.consume(code3);
      size = 0;
      return urlInside;
    }
    if ((code3 === 43 || code3 === 45 || code3 === 46 || asciiAlphanumeric(code3)) && size++ < 32) {
      effects.consume(code3);
      return schemeInsideOrEmailAtext;
    }
    size = 0;
    return emailAtext(code3);
  }
  function urlInside(code3) {
    if (code3 === 62) {
      effects.exit("autolinkProtocol");
      effects.enter("autolinkMarker");
      effects.consume(code3);
      effects.exit("autolinkMarker");
      effects.exit("autolink");
      return ok2;
    }
    if (code3 === null || code3 === 32 || code3 === 60 || asciiControl(code3)) {
      return nok(code3);
    }
    effects.consume(code3);
    return urlInside;
  }
  function emailAtext(code3) {
    if (code3 === 64) {
      effects.consume(code3);
      return emailAtSignOrDot;
    }
    if (asciiAtext(code3)) {
      effects.consume(code3);
      return emailAtext;
    }
    return nok(code3);
  }
  function emailAtSignOrDot(code3) {
    return asciiAlphanumeric(code3) ? emailLabel(code3) : nok(code3);
  }
  function emailLabel(code3) {
    if (code3 === 46) {
      effects.consume(code3);
      size = 0;
      return emailAtSignOrDot;
    }
    if (code3 === 62) {
      effects.exit("autolinkProtocol").type = "autolinkEmail";
      effects.enter("autolinkMarker");
      effects.consume(code3);
      effects.exit("autolinkMarker");
      effects.exit("autolink");
      return ok2;
    }
    return emailValue(code3);
  }
  function emailValue(code3) {
    if ((code3 === 45 || asciiAlphanumeric(code3)) && size++ < 63) {
      const next = code3 === 45 ? emailValue : emailLabel;
      effects.consume(code3);
      return next;
    }
    return nok(code3);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/blank-line.js
var blankLine = {
  tokenize: tokenizeBlankLine,
  partial: true
};
function tokenizeBlankLine(effects, ok2, nok) {
  return start;
  function start(code3) {
    return markdownSpace(code3) ? factorySpace(effects, after, "linePrefix")(code3) : after(code3);
  }
  function after(code3) {
    return code3 === null || markdownLineEnding(code3) ? ok2(code3) : nok(code3);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/block-quote.js
var blockQuote = {
  name: "blockQuote",
  tokenize: tokenizeBlockQuoteStart,
  continuation: {
    tokenize: tokenizeBlockQuoteContinuation
  },
  exit
};
function tokenizeBlockQuoteStart(effects, ok2, nok) {
  const self = this;
  return start;
  function start(code3) {
    if (code3 === 62) {
      const state = self.containerState;
      if (!state.open) {
        effects.enter("blockQuote", {
          _container: true
        });
        state.open = true;
      }
      effects.enter("blockQuotePrefix");
      effects.enter("blockQuoteMarker");
      effects.consume(code3);
      effects.exit("blockQuoteMarker");
      return after;
    }
    return nok(code3);
  }
  function after(code3) {
    if (markdownSpace(code3)) {
      effects.enter("blockQuotePrefixWhitespace");
      effects.consume(code3);
      effects.exit("blockQuotePrefixWhitespace");
      effects.exit("blockQuotePrefix");
      return ok2;
    }
    effects.exit("blockQuotePrefix");
    return ok2(code3);
  }
}
function tokenizeBlockQuoteContinuation(effects, ok2, nok) {
  const self = this;
  return contStart;
  function contStart(code3) {
    if (markdownSpace(code3)) {
      return factorySpace(
        effects,
        contBefore,
        "linePrefix",
        self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      )(code3);
    }
    return contBefore(code3);
  }
  function contBefore(code3) {
    return effects.attempt(blockQuote, ok2, nok)(code3);
  }
}
function exit(effects) {
  effects.exit("blockQuote");
}

// node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/character-escape.js
var characterEscape = {
  name: "characterEscape",
  tokenize: tokenizeCharacterEscape
};
function tokenizeCharacterEscape(effects, ok2, nok) {
  return start;
  function start(code3) {
    effects.enter("characterEscape");
    effects.enter("escapeMarker");
    effects.consume(code3);
    effects.exit("escapeMarker");
    return inside;
  }
  function inside(code3) {
    if (asciiPunctuation(code3)) {
      effects.enter("characterEscapeValue");
      effects.consume(code3);
      effects.exit("characterEscapeValue");
      effects.exit("characterEscape");
      return ok2;
    }
    return nok(code3);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/character-reference.js
var characterReference = {
  name: "characterReference",
  tokenize: tokenizeCharacterReference
};
function tokenizeCharacterReference(effects, ok2, nok) {
  const self = this;
  let size = 0;
  let max;
  let test;
  return start;
  function start(code3) {
    effects.enter("characterReference");
    effects.enter("characterReferenceMarker");
    effects.consume(code3);
    effects.exit("characterReferenceMarker");
    return open;
  }
  function open(code3) {
    if (code3 === 35) {
      effects.enter("characterReferenceMarkerNumeric");
      effects.consume(code3);
      effects.exit("characterReferenceMarkerNumeric");
      return numeric;
    }
    effects.enter("characterReferenceValue");
    max = 31;
    test = asciiAlphanumeric;
    return value(code3);
  }
  function numeric(code3) {
    if (code3 === 88 || code3 === 120) {
      effects.enter("characterReferenceMarkerHexadecimal");
      effects.consume(code3);
      effects.exit("characterReferenceMarkerHexadecimal");
      effects.enter("characterReferenceValue");
      max = 6;
      test = asciiHexDigit;
      return value;
    }
    effects.enter("characterReferenceValue");
    max = 7;
    test = asciiDigit;
    return value(code3);
  }
  function value(code3) {
    if (code3 === 59 && size) {
      const token = effects.exit("characterReferenceValue");
      if (test === asciiAlphanumeric && !decodeNamedCharacterReference(self.sliceSerialize(token))) {
        return nok(code3);
      }
      effects.enter("characterReferenceMarker");
      effects.consume(code3);
      effects.exit("characterReferenceMarker");
      effects.exit("characterReference");
      return ok2;
    }
    if (test(code3) && size++ < max) {
      effects.consume(code3);
      return value;
    }
    return nok(code3);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/code-fenced.js
var nonLazyContinuation = {
  tokenize: tokenizeNonLazyContinuation,
  partial: true
};
var codeFenced = {
  name: "codeFenced",
  tokenize: tokenizeCodeFenced,
  concrete: true
};
function tokenizeCodeFenced(effects, ok2, nok) {
  const self = this;
  const closeStart = {
    tokenize: tokenizeCloseStart,
    partial: true
  };
  let initialPrefix = 0;
  let sizeOpen = 0;
  let marker;
  return start;
  function start(code3) {
    return beforeSequenceOpen(code3);
  }
  function beforeSequenceOpen(code3) {
    const tail = self.events[self.events.length - 1];
    initialPrefix = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
    marker = code3;
    effects.enter("codeFenced");
    effects.enter("codeFencedFence");
    effects.enter("codeFencedFenceSequence");
    return sequenceOpen(code3);
  }
  function sequenceOpen(code3) {
    if (code3 === marker) {
      sizeOpen++;
      effects.consume(code3);
      return sequenceOpen;
    }
    if (sizeOpen < 3) {
      return nok(code3);
    }
    effects.exit("codeFencedFenceSequence");
    return markdownSpace(code3) ? factorySpace(effects, infoBefore, "whitespace")(code3) : infoBefore(code3);
  }
  function infoBefore(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("codeFencedFence");
      return self.interrupt ? ok2(code3) : effects.check(nonLazyContinuation, atNonLazyBreak, after)(code3);
    }
    effects.enter("codeFencedFenceInfo");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return info(code3);
  }
  function info(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceInfo");
      return infoBefore(code3);
    }
    if (markdownSpace(code3)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceInfo");
      return factorySpace(effects, metaBefore, "whitespace")(code3);
    }
    if (code3 === 96 && code3 === marker) {
      return nok(code3);
    }
    effects.consume(code3);
    return info;
  }
  function metaBefore(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return infoBefore(code3);
    }
    effects.enter("codeFencedFenceMeta");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return meta(code3);
  }
  function meta(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceMeta");
      return infoBefore(code3);
    }
    if (code3 === 96 && code3 === marker) {
      return nok(code3);
    }
    effects.consume(code3);
    return meta;
  }
  function atNonLazyBreak(code3) {
    return effects.attempt(closeStart, after, contentBefore)(code3);
  }
  function contentBefore(code3) {
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return contentStart;
  }
  function contentStart(code3) {
    return initialPrefix > 0 && markdownSpace(code3) ? factorySpace(
      effects,
      beforeContentChunk,
      "linePrefix",
      initialPrefix + 1
    )(code3) : beforeContentChunk(code3);
  }
  function beforeContentChunk(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return effects.check(nonLazyContinuation, atNonLazyBreak, after)(code3);
    }
    effects.enter("codeFlowValue");
    return contentChunk(code3);
  }
  function contentChunk(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("codeFlowValue");
      return beforeContentChunk(code3);
    }
    effects.consume(code3);
    return contentChunk;
  }
  function after(code3) {
    effects.exit("codeFenced");
    return ok2(code3);
  }
  function tokenizeCloseStart(effects2, ok3, nok2) {
    let size = 0;
    return startBefore;
    function startBefore(code3) {
      effects2.enter("lineEnding");
      effects2.consume(code3);
      effects2.exit("lineEnding");
      return start2;
    }
    function start2(code3) {
      effects2.enter("codeFencedFence");
      return markdownSpace(code3) ? factorySpace(
        effects2,
        beforeSequenceClose,
        "linePrefix",
        self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      )(code3) : beforeSequenceClose(code3);
    }
    function beforeSequenceClose(code3) {
      if (code3 === marker) {
        effects2.enter("codeFencedFenceSequence");
        return sequenceClose(code3);
      }
      return nok2(code3);
    }
    function sequenceClose(code3) {
      if (code3 === marker) {
        size++;
        effects2.consume(code3);
        return sequenceClose;
      }
      if (size >= sizeOpen) {
        effects2.exit("codeFencedFenceSequence");
        return markdownSpace(code3) ? factorySpace(effects2, sequenceCloseAfter, "whitespace")(code3) : sequenceCloseAfter(code3);
      }
      return nok2(code3);
    }
    function sequenceCloseAfter(code3) {
      if (code3 === null || markdownLineEnding(code3)) {
        effects2.exit("codeFencedFence");
        return ok3(code3);
      }
      return nok2(code3);
    }
  }
}
function tokenizeNonLazyContinuation(effects, ok2, nok) {
  const self = this;
  return start;
  function start(code3) {
    if (code3 === null) {
      return nok(code3);
    }
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return lineStart;
  }
  function lineStart(code3) {
    return self.parser.lazy[self.now().line] ? nok(code3) : ok2(code3);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/code-indented.js
var codeIndented = {
  name: "codeIndented",
  tokenize: tokenizeCodeIndented
};
var furtherStart = {
  tokenize: tokenizeFurtherStart,
  partial: true
};
function tokenizeCodeIndented(effects, ok2, nok) {
  const self = this;
  return start;
  function start(code3) {
    effects.enter("codeIndented");
    return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1)(code3);
  }
  function afterPrefix(code3) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? atBreak(code3) : nok(code3);
  }
  function atBreak(code3) {
    if (code3 === null) {
      return after(code3);
    }
    if (markdownLineEnding(code3)) {
      return effects.attempt(furtherStart, atBreak, after)(code3);
    }
    effects.enter("codeFlowValue");
    return inside(code3);
  }
  function inside(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("codeFlowValue");
      return atBreak(code3);
    }
    effects.consume(code3);
    return inside;
  }
  function after(code3) {
    effects.exit("codeIndented");
    return ok2(code3);
  }
}
function tokenizeFurtherStart(effects, ok2, nok) {
  const self = this;
  return furtherStart2;
  function furtherStart2(code3) {
    if (self.parser.lazy[self.now().line]) {
      return nok(code3);
    }
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return furtherStart2;
    }
    return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1)(code3);
  }
  function afterPrefix(code3) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? ok2(code3) : markdownLineEnding(code3) ? furtherStart2(code3) : nok(code3);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/code-text.js
var codeText = {
  name: "codeText",
  tokenize: tokenizeCodeText,
  resolve: resolveCodeText,
  previous
};
function resolveCodeText(events) {
  let tailExitIndex = events.length - 4;
  let headEnterIndex = 3;
  let index3;
  let enter;
  if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
    index3 = headEnterIndex;
    while (++index3 < tailExitIndex) {
      if (events[index3][1].type === "codeTextData") {
        events[headEnterIndex][1].type = "codeTextPadding";
        events[tailExitIndex][1].type = "codeTextPadding";
        headEnterIndex += 2;
        tailExitIndex -= 2;
        break;
      }
    }
  }
  index3 = headEnterIndex - 1;
  tailExitIndex++;
  while (++index3 <= tailExitIndex) {
    if (enter === void 0) {
      if (index3 !== tailExitIndex && events[index3][1].type !== "lineEnding") {
        enter = index3;
      }
    } else if (index3 === tailExitIndex || events[index3][1].type === "lineEnding") {
      events[enter][1].type = "codeTextData";
      if (index3 !== enter + 2) {
        events[enter][1].end = events[index3 - 1][1].end;
        events.splice(enter + 2, index3 - enter - 2);
        tailExitIndex -= index3 - enter - 2;
        index3 = enter + 2;
      }
      enter = void 0;
    }
  }
  return events;
}
function previous(code3) {
  return code3 !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function tokenizeCodeText(effects, ok2, nok) {
  const self = this;
  let sizeOpen = 0;
  let size;
  let token;
  return start;
  function start(code3) {
    effects.enter("codeText");
    effects.enter("codeTextSequence");
    return sequenceOpen(code3);
  }
  function sequenceOpen(code3) {
    if (code3 === 96) {
      effects.consume(code3);
      sizeOpen++;
      return sequenceOpen;
    }
    effects.exit("codeTextSequence");
    return between(code3);
  }
  function between(code3) {
    if (code3 === null) {
      return nok(code3);
    }
    if (code3 === 32) {
      effects.enter("space");
      effects.consume(code3);
      effects.exit("space");
      return between;
    }
    if (code3 === 96) {
      token = effects.enter("codeTextSequence");
      size = 0;
      return sequenceClose(code3);
    }
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return between;
    }
    effects.enter("codeTextData");
    return data(code3);
  }
  function data(code3) {
    if (code3 === null || code3 === 32 || code3 === 96 || markdownLineEnding(code3)) {
      effects.exit("codeTextData");
      return between(code3);
    }
    effects.consume(code3);
    return data;
  }
  function sequenceClose(code3) {
    if (code3 === 96) {
      effects.consume(code3);
      size++;
      return sequenceClose;
    }
    if (size === sizeOpen) {
      effects.exit("codeTextSequence");
      effects.exit("codeText");
      return ok2(code3);
    }
    token.type = "codeTextData";
    return data(code3);
  }
}

// node_modules/.pnpm/micromark-util-subtokenize@2.0.0/node_modules/micromark-util-subtokenize/index.js
function subtokenize(events) {
  const jumps = {};
  let index3 = -1;
  let event;
  let lineIndex;
  let otherIndex;
  let otherEvent;
  let parameters;
  let subevents;
  let more;
  while (++index3 < events.length) {
    while (index3 in jumps) {
      index3 = jumps[index3];
    }
    event = events[index3];
    if (index3 && event[1].type === "chunkFlow" && events[index3 - 1][1].type === "listItemPrefix") {
      subevents = event[1]._tokenizer.events;
      otherIndex = 0;
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") {
        otherIndex += 2;
      }
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") {
        while (++otherIndex < subevents.length) {
          if (subevents[otherIndex][1].type === "content") {
            break;
          }
          if (subevents[otherIndex][1].type === "chunkText") {
            subevents[otherIndex][1]._isInFirstContentOfListItem = true;
            otherIndex++;
          }
        }
      }
    }
    if (event[0] === "enter") {
      if (event[1].contentType) {
        Object.assign(jumps, subcontent(events, index3));
        index3 = jumps[index3];
        more = true;
      }
    } else if (event[1]._container) {
      otherIndex = index3;
      lineIndex = void 0;
      while (otherIndex--) {
        otherEvent = events[otherIndex];
        if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
          if (otherEvent[0] === "enter") {
            if (lineIndex) {
              events[lineIndex][1].type = "lineEndingBlank";
            }
            otherEvent[1].type = "lineEnding";
            lineIndex = otherIndex;
          }
        } else {
          break;
        }
      }
      if (lineIndex) {
        event[1].end = Object.assign({}, events[lineIndex][1].start);
        parameters = events.slice(lineIndex, index3);
        parameters.unshift(event);
        splice(events, lineIndex, index3 - lineIndex + 1, parameters);
      }
    }
  }
  return !more;
}
function subcontent(events, eventIndex) {
  const token = events[eventIndex][1];
  const context = events[eventIndex][2];
  let startPosition = eventIndex - 1;
  const startPositions = [];
  const tokenizer = token._tokenizer || context.parser[token.contentType](token.start);
  const childEvents = tokenizer.events;
  const jumps = [];
  const gaps = {};
  let stream;
  let previous2;
  let index3 = -1;
  let current = token;
  let adjust = 0;
  let start = 0;
  const breaks = [start];
  while (current) {
    while (events[++startPosition][1] !== current) {
    }
    startPositions.push(startPosition);
    if (!current._tokenizer) {
      stream = context.sliceStream(current);
      if (!current.next) {
        stream.push(null);
      }
      if (previous2) {
        tokenizer.defineSkip(current.start);
      }
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = true;
      }
      tokenizer.write(stream);
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = void 0;
      }
    }
    previous2 = current;
    current = current.next;
  }
  current = token;
  while (++index3 < childEvents.length) {
    if (
      // Find a void token that includes a break.
      childEvents[index3][0] === "exit" && childEvents[index3 - 1][0] === "enter" && childEvents[index3][1].type === childEvents[index3 - 1][1].type && childEvents[index3][1].start.line !== childEvents[index3][1].end.line
    ) {
      start = index3 + 1;
      breaks.push(start);
      current._tokenizer = void 0;
      current.previous = void 0;
      current = current.next;
    }
  }
  tokenizer.events = [];
  if (current) {
    current._tokenizer = void 0;
    current.previous = void 0;
  } else {
    breaks.pop();
  }
  index3 = breaks.length;
  while (index3--) {
    const slice = childEvents.slice(breaks[index3], breaks[index3 + 1]);
    const start2 = startPositions.pop();
    jumps.unshift([start2, start2 + slice.length - 1]);
    splice(events, start2, 2, slice);
  }
  index3 = -1;
  while (++index3 < jumps.length) {
    gaps[adjust + jumps[index3][0]] = adjust + jumps[index3][1];
    adjust += jumps[index3][1] - jumps[index3][0] - 1;
  }
  return gaps;
}

// node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/content.js
var content2 = {
  tokenize: tokenizeContent,
  resolve: resolveContent
};
var continuationConstruct = {
  tokenize: tokenizeContinuation,
  partial: true
};
function resolveContent(events) {
  subtokenize(events);
  return events;
}
function tokenizeContent(effects, ok2) {
  let previous2;
  return chunkStart;
  function chunkStart(code3) {
    effects.enter("content");
    previous2 = effects.enter("chunkContent", {
      contentType: "content"
    });
    return chunkInside(code3);
  }
  function chunkInside(code3) {
    if (code3 === null) {
      return contentEnd(code3);
    }
    if (markdownLineEnding(code3)) {
      return effects.check(
        continuationConstruct,
        contentContinue,
        contentEnd
      )(code3);
    }
    effects.consume(code3);
    return chunkInside;
  }
  function contentEnd(code3) {
    effects.exit("chunkContent");
    effects.exit("content");
    return ok2(code3);
  }
  function contentContinue(code3) {
    effects.consume(code3);
    effects.exit("chunkContent");
    previous2.next = effects.enter("chunkContent", {
      contentType: "content",
      previous: previous2
    });
    previous2 = previous2.next;
    return chunkInside;
  }
}
function tokenizeContinuation(effects, ok2, nok) {
  const self = this;
  return startLookahead;
  function startLookahead(code3) {
    effects.exit("chunkContent");
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return factorySpace(effects, prefixed, "linePrefix");
  }
  function prefixed(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return nok(code3);
    }
    const tail = self.events[self.events.length - 1];
    if (!self.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4) {
      return ok2(code3);
    }
    return effects.interrupt(self.parser.constructs.flow, nok, ok2)(code3);
  }
}

// node_modules/.pnpm/micromark-factory-destination@2.0.0/node_modules/micromark-factory-destination/index.js
function factoryDestination(effects, ok2, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
  const limit = max || Number.POSITIVE_INFINITY;
  let balance = 0;
  return start;
  function start(code3) {
    if (code3 === 60) {
      effects.enter(type);
      effects.enter(literalType);
      effects.enter(literalMarkerType);
      effects.consume(code3);
      effects.exit(literalMarkerType);
      return enclosedBefore;
    }
    if (code3 === null || code3 === 32 || code3 === 41 || asciiControl(code3)) {
      return nok(code3);
    }
    effects.enter(type);
    effects.enter(rawType);
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return raw(code3);
  }
  function enclosedBefore(code3) {
    if (code3 === 62) {
      effects.enter(literalMarkerType);
      effects.consume(code3);
      effects.exit(literalMarkerType);
      effects.exit(literalType);
      effects.exit(type);
      return ok2;
    }
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return enclosed(code3);
  }
  function enclosed(code3) {
    if (code3 === 62) {
      effects.exit("chunkString");
      effects.exit(stringType);
      return enclosedBefore(code3);
    }
    if (code3 === null || code3 === 60 || markdownLineEnding(code3)) {
      return nok(code3);
    }
    effects.consume(code3);
    return code3 === 92 ? enclosedEscape : enclosed;
  }
  function enclosedEscape(code3) {
    if (code3 === 60 || code3 === 62 || code3 === 92) {
      effects.consume(code3);
      return enclosed;
    }
    return enclosed(code3);
  }
  function raw(code3) {
    if (!balance && (code3 === null || code3 === 41 || markdownLineEndingOrSpace(code3))) {
      effects.exit("chunkString");
      effects.exit(stringType);
      effects.exit(rawType);
      effects.exit(type);
      return ok2(code3);
    }
    if (balance < limit && code3 === 40) {
      effects.consume(code3);
      balance++;
      return raw;
    }
    if (code3 === 41) {
      effects.consume(code3);
      balance--;
      return raw;
    }
    if (code3 === null || code3 === 32 || code3 === 40 || asciiControl(code3)) {
      return nok(code3);
    }
    effects.consume(code3);
    return code3 === 92 ? rawEscape : raw;
  }
  function rawEscape(code3) {
    if (code3 === 40 || code3 === 41 || code3 === 92) {
      effects.consume(code3);
      return raw;
    }
    return raw(code3);
  }
}

// node_modules/.pnpm/micromark-factory-label@2.0.0/node_modules/micromark-factory-label/index.js
function factoryLabel(effects, ok2, nok, type, markerType, stringType) {
  const self = this;
  let size = 0;
  let seen;
  return start;
  function start(code3) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code3);
    effects.exit(markerType);
    effects.enter(stringType);
    return atBreak;
  }
  function atBreak(code3) {
    if (size > 999 || code3 === null || code3 === 91 || code3 === 93 && !seen || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    code3 === 94 && !size && "_hiddenFootnoteSupport" in self.parser.constructs) {
      return nok(code3);
    }
    if (code3 === 93) {
      effects.exit(stringType);
      effects.enter(markerType);
      effects.consume(code3);
      effects.exit(markerType);
      effects.exit(type);
      return ok2;
    }
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return atBreak;
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return labelInside(code3);
  }
  function labelInside(code3) {
    if (code3 === null || code3 === 91 || code3 === 93 || markdownLineEnding(code3) || size++ > 999) {
      effects.exit("chunkString");
      return atBreak(code3);
    }
    effects.consume(code3);
    if (!seen)
      seen = !markdownSpace(code3);
    return code3 === 92 ? labelEscape : labelInside;
  }
  function labelEscape(code3) {
    if (code3 === 91 || code3 === 92 || code3 === 93) {
      effects.consume(code3);
      size++;
      return labelInside;
    }
    return labelInside(code3);
  }
}

// node_modules/.pnpm/micromark-factory-title@2.0.0/node_modules/micromark-factory-title/index.js
function factoryTitle(effects, ok2, nok, type, markerType, stringType) {
  let marker;
  return start;
  function start(code3) {
    if (code3 === 34 || code3 === 39 || code3 === 40) {
      effects.enter(type);
      effects.enter(markerType);
      effects.consume(code3);
      effects.exit(markerType);
      marker = code3 === 40 ? 41 : code3;
      return begin;
    }
    return nok(code3);
  }
  function begin(code3) {
    if (code3 === marker) {
      effects.enter(markerType);
      effects.consume(code3);
      effects.exit(markerType);
      effects.exit(type);
      return ok2;
    }
    effects.enter(stringType);
    return atBreak(code3);
  }
  function atBreak(code3) {
    if (code3 === marker) {
      effects.exit(stringType);
      return begin(marker);
    }
    if (code3 === null) {
      return nok(code3);
    }
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return factorySpace(effects, atBreak, "linePrefix");
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return inside(code3);
  }
  function inside(code3) {
    if (code3 === marker || code3 === null || markdownLineEnding(code3)) {
      effects.exit("chunkString");
      return atBreak(code3);
    }
    effects.consume(code3);
    return code3 === 92 ? escape : inside;
  }
  function escape(code3) {
    if (code3 === marker || code3 === 92) {
      effects.consume(code3);
      return inside;
    }
    return inside(code3);
  }
}

// node_modules/.pnpm/micromark-factory-whitespace@2.0.0/node_modules/micromark-factory-whitespace/index.js
function factoryWhitespace(effects, ok2) {
  let seen;
  return start;
  function start(code3) {
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      seen = true;
      return start;
    }
    if (markdownSpace(code3)) {
      return factorySpace(
        effects,
        start,
        seen ? "linePrefix" : "lineSuffix"
      )(code3);
    }
    return ok2(code3);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/definition.js
var definition = {
  name: "definition",
  tokenize: tokenizeDefinition
};
var titleBefore = {
  tokenize: tokenizeTitleBefore,
  partial: true
};
function tokenizeDefinition(effects, ok2, nok) {
  const self = this;
  let identifier;
  return start;
  function start(code3) {
    effects.enter("definition");
    return before(code3);
  }
  function before(code3) {
    return factoryLabel.call(
      self,
      effects,
      labelAfter,
      // Note: we don’t need to reset the way `markdown-rs` does.
      nok,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(code3);
  }
  function labelAfter(code3) {
    identifier = normalizeIdentifier(
      self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
    );
    if (code3 === 58) {
      effects.enter("definitionMarker");
      effects.consume(code3);
      effects.exit("definitionMarker");
      return markerAfter;
    }
    return nok(code3);
  }
  function markerAfter(code3) {
    return markdownLineEndingOrSpace(code3) ? factoryWhitespace(effects, destinationBefore)(code3) : destinationBefore(code3);
  }
  function destinationBefore(code3) {
    return factoryDestination(
      effects,
      destinationAfter,
      // Note: we don’t need to reset the way `markdown-rs` does.
      nok,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(code3);
  }
  function destinationAfter(code3) {
    return effects.attempt(titleBefore, after, after)(code3);
  }
  function after(code3) {
    return markdownSpace(code3) ? factorySpace(effects, afterWhitespace, "whitespace")(code3) : afterWhitespace(code3);
  }
  function afterWhitespace(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("definition");
      self.parser.defined.push(identifier);
      return ok2(code3);
    }
    return nok(code3);
  }
}
function tokenizeTitleBefore(effects, ok2, nok) {
  return titleBefore2;
  function titleBefore2(code3) {
    return markdownLineEndingOrSpace(code3) ? factoryWhitespace(effects, beforeMarker)(code3) : nok(code3);
  }
  function beforeMarker(code3) {
    return factoryTitle(
      effects,
      titleAfter,
      nok,
      "definitionTitle",
      "definitionTitleMarker",
      "definitionTitleString"
    )(code3);
  }
  function titleAfter(code3) {
    return markdownSpace(code3) ? factorySpace(effects, titleAfterOptionalWhitespace, "whitespace")(code3) : titleAfterOptionalWhitespace(code3);
  }
  function titleAfterOptionalWhitespace(code3) {
    return code3 === null || markdownLineEnding(code3) ? ok2(code3) : nok(code3);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var hardBreakEscape = {
  name: "hardBreakEscape",
  tokenize: tokenizeHardBreakEscape
};
function tokenizeHardBreakEscape(effects, ok2, nok) {
  return start;
  function start(code3) {
    effects.enter("hardBreakEscape");
    effects.consume(code3);
    return after;
  }
  function after(code3) {
    if (markdownLineEnding(code3)) {
      effects.exit("hardBreakEscape");
      return ok2(code3);
    }
    return nok(code3);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/heading-atx.js
var headingAtx = {
  name: "headingAtx",
  tokenize: tokenizeHeadingAtx,
  resolve: resolveHeadingAtx
};
function resolveHeadingAtx(events, context) {
  let contentEnd = events.length - 2;
  let contentStart = 3;
  let content3;
  let text3;
  if (events[contentStart][1].type === "whitespace") {
    contentStart += 2;
  }
  if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") {
    contentEnd -= 2;
  }
  if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
  }
  if (contentEnd > contentStart) {
    content3 = {
      type: "atxHeadingText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end
    };
    text3 = {
      type: "chunkText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end,
      contentType: "text"
    };
    splice(events, contentStart, contentEnd - contentStart + 1, [
      ["enter", content3, context],
      ["enter", text3, context],
      ["exit", text3, context],
      ["exit", content3, context]
    ]);
  }
  return events;
}
function tokenizeHeadingAtx(effects, ok2, nok) {
  let size = 0;
  return start;
  function start(code3) {
    effects.enter("atxHeading");
    return before(code3);
  }
  function before(code3) {
    effects.enter("atxHeadingSequence");
    return sequenceOpen(code3);
  }
  function sequenceOpen(code3) {
    if (code3 === 35 && size++ < 6) {
      effects.consume(code3);
      return sequenceOpen;
    }
    if (code3 === null || markdownLineEndingOrSpace(code3)) {
      effects.exit("atxHeadingSequence");
      return atBreak(code3);
    }
    return nok(code3);
  }
  function atBreak(code3) {
    if (code3 === 35) {
      effects.enter("atxHeadingSequence");
      return sequenceFurther(code3);
    }
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("atxHeading");
      return ok2(code3);
    }
    if (markdownSpace(code3)) {
      return factorySpace(effects, atBreak, "whitespace")(code3);
    }
    effects.enter("atxHeadingText");
    return data(code3);
  }
  function sequenceFurther(code3) {
    if (code3 === 35) {
      effects.consume(code3);
      return sequenceFurther;
    }
    effects.exit("atxHeadingSequence");
    return atBreak(code3);
  }
  function data(code3) {
    if (code3 === null || code3 === 35 || markdownLineEndingOrSpace(code3)) {
      effects.exit("atxHeadingText");
      return atBreak(code3);
    }
    effects.consume(code3);
    return data;
  }
}

// node_modules/.pnpm/micromark-util-html-tag-name@2.0.0/node_modules/micromark-util-html-tag-name/index.js
var htmlBlockNames = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
];
var htmlRawNames = ["pre", "script", "style", "textarea"];

// node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/html-flow.js
var htmlFlow = {
  name: "htmlFlow",
  tokenize: tokenizeHtmlFlow,
  resolveTo: resolveToHtmlFlow,
  concrete: true
};
var blankLineBefore = {
  tokenize: tokenizeBlankLineBefore,
  partial: true
};
var nonLazyContinuationStart = {
  tokenize: tokenizeNonLazyContinuationStart,
  partial: true
};
function resolveToHtmlFlow(events) {
  let index3 = events.length;
  while (index3--) {
    if (events[index3][0] === "enter" && events[index3][1].type === "htmlFlow") {
      break;
    }
  }
  if (index3 > 1 && events[index3 - 2][1].type === "linePrefix") {
    events[index3][1].start = events[index3 - 2][1].start;
    events[index3 + 1][1].start = events[index3 - 2][1].start;
    events.splice(index3 - 2, 2);
  }
  return events;
}
function tokenizeHtmlFlow(effects, ok2, nok) {
  const self = this;
  let marker;
  let closingTag;
  let buffer;
  let index3;
  let markerB;
  return start;
  function start(code3) {
    return before(code3);
  }
  function before(code3) {
    effects.enter("htmlFlow");
    effects.enter("htmlFlowData");
    effects.consume(code3);
    return open;
  }
  function open(code3) {
    if (code3 === 33) {
      effects.consume(code3);
      return declarationOpen;
    }
    if (code3 === 47) {
      effects.consume(code3);
      closingTag = true;
      return tagCloseStart;
    }
    if (code3 === 63) {
      effects.consume(code3);
      marker = 3;
      return self.interrupt ? ok2 : continuationDeclarationInside;
    }
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      buffer = String.fromCharCode(code3);
      return tagName;
    }
    return nok(code3);
  }
  function declarationOpen(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      marker = 2;
      return commentOpenInside;
    }
    if (code3 === 91) {
      effects.consume(code3);
      marker = 5;
      index3 = 0;
      return cdataOpenInside;
    }
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      marker = 4;
      return self.interrupt ? ok2 : continuationDeclarationInside;
    }
    return nok(code3);
  }
  function commentOpenInside(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return self.interrupt ? ok2 : continuationDeclarationInside;
    }
    return nok(code3);
  }
  function cdataOpenInside(code3) {
    const value = "CDATA[";
    if (code3 === value.charCodeAt(index3++)) {
      effects.consume(code3);
      if (index3 === value.length) {
        return self.interrupt ? ok2 : continuation;
      }
      return cdataOpenInside;
    }
    return nok(code3);
  }
  function tagCloseStart(code3) {
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      buffer = String.fromCharCode(code3);
      return tagName;
    }
    return nok(code3);
  }
  function tagName(code3) {
    if (code3 === null || code3 === 47 || code3 === 62 || markdownLineEndingOrSpace(code3)) {
      const slash = code3 === 47;
      const name2 = buffer.toLowerCase();
      if (!slash && !closingTag && htmlRawNames.includes(name2)) {
        marker = 1;
        return self.interrupt ? ok2(code3) : continuation(code3);
      }
      if (htmlBlockNames.includes(buffer.toLowerCase())) {
        marker = 6;
        if (slash) {
          effects.consume(code3);
          return basicSelfClosing;
        }
        return self.interrupt ? ok2(code3) : continuation(code3);
      }
      marker = 7;
      return self.interrupt && !self.parser.lazy[self.now().line] ? nok(code3) : closingTag ? completeClosingTagAfter(code3) : completeAttributeNameBefore(code3);
    }
    if (code3 === 45 || asciiAlphanumeric(code3)) {
      effects.consume(code3);
      buffer += String.fromCharCode(code3);
      return tagName;
    }
    return nok(code3);
  }
  function basicSelfClosing(code3) {
    if (code3 === 62) {
      effects.consume(code3);
      return self.interrupt ? ok2 : continuation;
    }
    return nok(code3);
  }
  function completeClosingTagAfter(code3) {
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return completeClosingTagAfter;
    }
    return completeEnd(code3);
  }
  function completeAttributeNameBefore(code3) {
    if (code3 === 47) {
      effects.consume(code3);
      return completeEnd;
    }
    if (code3 === 58 || code3 === 95 || asciiAlpha(code3)) {
      effects.consume(code3);
      return completeAttributeName;
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return completeAttributeNameBefore;
    }
    return completeEnd(code3);
  }
  function completeAttributeName(code3) {
    if (code3 === 45 || code3 === 46 || code3 === 58 || code3 === 95 || asciiAlphanumeric(code3)) {
      effects.consume(code3);
      return completeAttributeName;
    }
    return completeAttributeNameAfter(code3);
  }
  function completeAttributeNameAfter(code3) {
    if (code3 === 61) {
      effects.consume(code3);
      return completeAttributeValueBefore;
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return completeAttributeNameAfter;
    }
    return completeAttributeNameBefore(code3);
  }
  function completeAttributeValueBefore(code3) {
    if (code3 === null || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96) {
      return nok(code3);
    }
    if (code3 === 34 || code3 === 39) {
      effects.consume(code3);
      markerB = code3;
      return completeAttributeValueQuoted;
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return completeAttributeValueBefore;
    }
    return completeAttributeValueUnquoted(code3);
  }
  function completeAttributeValueQuoted(code3) {
    if (code3 === markerB) {
      effects.consume(code3);
      markerB = null;
      return completeAttributeValueQuotedAfter;
    }
    if (code3 === null || markdownLineEnding(code3)) {
      return nok(code3);
    }
    effects.consume(code3);
    return completeAttributeValueQuoted;
  }
  function completeAttributeValueUnquoted(code3) {
    if (code3 === null || code3 === 34 || code3 === 39 || code3 === 47 || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96 || markdownLineEndingOrSpace(code3)) {
      return completeAttributeNameAfter(code3);
    }
    effects.consume(code3);
    return completeAttributeValueUnquoted;
  }
  function completeAttributeValueQuotedAfter(code3) {
    if (code3 === 47 || code3 === 62 || markdownSpace(code3)) {
      return completeAttributeNameBefore(code3);
    }
    return nok(code3);
  }
  function completeEnd(code3) {
    if (code3 === 62) {
      effects.consume(code3);
      return completeAfter;
    }
    return nok(code3);
  }
  function completeAfter(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return continuation(code3);
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return completeAfter;
    }
    return nok(code3);
  }
  function continuation(code3) {
    if (code3 === 45 && marker === 2) {
      effects.consume(code3);
      return continuationCommentInside;
    }
    if (code3 === 60 && marker === 1) {
      effects.consume(code3);
      return continuationRawTagOpen;
    }
    if (code3 === 62 && marker === 4) {
      effects.consume(code3);
      return continuationClose;
    }
    if (code3 === 63 && marker === 3) {
      effects.consume(code3);
      return continuationDeclarationInside;
    }
    if (code3 === 93 && marker === 5) {
      effects.consume(code3);
      return continuationCdataInside;
    }
    if (markdownLineEnding(code3) && (marker === 6 || marker === 7)) {
      effects.exit("htmlFlowData");
      return effects.check(
        blankLineBefore,
        continuationAfter,
        continuationStart
      )(code3);
    }
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("htmlFlowData");
      return continuationStart(code3);
    }
    effects.consume(code3);
    return continuation;
  }
  function continuationStart(code3) {
    return effects.check(
      nonLazyContinuationStart,
      continuationStartNonLazy,
      continuationAfter
    )(code3);
  }
  function continuationStartNonLazy(code3) {
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return continuationBefore;
  }
  function continuationBefore(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      return continuationStart(code3);
    }
    effects.enter("htmlFlowData");
    return continuation(code3);
  }
  function continuationCommentInside(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return continuationDeclarationInside;
    }
    return continuation(code3);
  }
  function continuationRawTagOpen(code3) {
    if (code3 === 47) {
      effects.consume(code3);
      buffer = "";
      return continuationRawEndTag;
    }
    return continuation(code3);
  }
  function continuationRawEndTag(code3) {
    if (code3 === 62) {
      const name2 = buffer.toLowerCase();
      if (htmlRawNames.includes(name2)) {
        effects.consume(code3);
        return continuationClose;
      }
      return continuation(code3);
    }
    if (asciiAlpha(code3) && buffer.length < 8) {
      effects.consume(code3);
      buffer += String.fromCharCode(code3);
      return continuationRawEndTag;
    }
    return continuation(code3);
  }
  function continuationCdataInside(code3) {
    if (code3 === 93) {
      effects.consume(code3);
      return continuationDeclarationInside;
    }
    return continuation(code3);
  }
  function continuationDeclarationInside(code3) {
    if (code3 === 62) {
      effects.consume(code3);
      return continuationClose;
    }
    if (code3 === 45 && marker === 2) {
      effects.consume(code3);
      return continuationDeclarationInside;
    }
    return continuation(code3);
  }
  function continuationClose(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("htmlFlowData");
      return continuationAfter(code3);
    }
    effects.consume(code3);
    return continuationClose;
  }
  function continuationAfter(code3) {
    effects.exit("htmlFlow");
    return ok2(code3);
  }
}
function tokenizeNonLazyContinuationStart(effects, ok2, nok) {
  const self = this;
  return start;
  function start(code3) {
    if (markdownLineEnding(code3)) {
      effects.enter("lineEnding");
      effects.consume(code3);
      effects.exit("lineEnding");
      return after;
    }
    return nok(code3);
  }
  function after(code3) {
    return self.parser.lazy[self.now().line] ? nok(code3) : ok2(code3);
  }
}
function tokenizeBlankLineBefore(effects, ok2, nok) {
  return start;
  function start(code3) {
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return effects.attempt(blankLine, ok2, nok);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/html-text.js
var htmlText = {
  name: "htmlText",
  tokenize: tokenizeHtmlText
};
function tokenizeHtmlText(effects, ok2, nok) {
  const self = this;
  let marker;
  let index3;
  let returnState;
  return start;
  function start(code3) {
    effects.enter("htmlText");
    effects.enter("htmlTextData");
    effects.consume(code3);
    return open;
  }
  function open(code3) {
    if (code3 === 33) {
      effects.consume(code3);
      return declarationOpen;
    }
    if (code3 === 47) {
      effects.consume(code3);
      return tagCloseStart;
    }
    if (code3 === 63) {
      effects.consume(code3);
      return instruction;
    }
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      return tagOpen;
    }
    return nok(code3);
  }
  function declarationOpen(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return commentOpenInside;
    }
    if (code3 === 91) {
      effects.consume(code3);
      index3 = 0;
      return cdataOpenInside;
    }
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      return declaration;
    }
    return nok(code3);
  }
  function commentOpenInside(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return commentEnd;
    }
    return nok(code3);
  }
  function comment(code3) {
    if (code3 === null) {
      return nok(code3);
    }
    if (code3 === 45) {
      effects.consume(code3);
      return commentClose;
    }
    if (markdownLineEnding(code3)) {
      returnState = comment;
      return lineEndingBefore(code3);
    }
    effects.consume(code3);
    return comment;
  }
  function commentClose(code3) {
    if (code3 === 45) {
      effects.consume(code3);
      return commentEnd;
    }
    return comment(code3);
  }
  function commentEnd(code3) {
    return code3 === 62 ? end(code3) : code3 === 45 ? commentClose(code3) : comment(code3);
  }
  function cdataOpenInside(code3) {
    const value = "CDATA[";
    if (code3 === value.charCodeAt(index3++)) {
      effects.consume(code3);
      return index3 === value.length ? cdata : cdataOpenInside;
    }
    return nok(code3);
  }
  function cdata(code3) {
    if (code3 === null) {
      return nok(code3);
    }
    if (code3 === 93) {
      effects.consume(code3);
      return cdataClose;
    }
    if (markdownLineEnding(code3)) {
      returnState = cdata;
      return lineEndingBefore(code3);
    }
    effects.consume(code3);
    return cdata;
  }
  function cdataClose(code3) {
    if (code3 === 93) {
      effects.consume(code3);
      return cdataEnd;
    }
    return cdata(code3);
  }
  function cdataEnd(code3) {
    if (code3 === 62) {
      return end(code3);
    }
    if (code3 === 93) {
      effects.consume(code3);
      return cdataEnd;
    }
    return cdata(code3);
  }
  function declaration(code3) {
    if (code3 === null || code3 === 62) {
      return end(code3);
    }
    if (markdownLineEnding(code3)) {
      returnState = declaration;
      return lineEndingBefore(code3);
    }
    effects.consume(code3);
    return declaration;
  }
  function instruction(code3) {
    if (code3 === null) {
      return nok(code3);
    }
    if (code3 === 63) {
      effects.consume(code3);
      return instructionClose;
    }
    if (markdownLineEnding(code3)) {
      returnState = instruction;
      return lineEndingBefore(code3);
    }
    effects.consume(code3);
    return instruction;
  }
  function instructionClose(code3) {
    return code3 === 62 ? end(code3) : instruction(code3);
  }
  function tagCloseStart(code3) {
    if (asciiAlpha(code3)) {
      effects.consume(code3);
      return tagClose;
    }
    return nok(code3);
  }
  function tagClose(code3) {
    if (code3 === 45 || asciiAlphanumeric(code3)) {
      effects.consume(code3);
      return tagClose;
    }
    return tagCloseBetween(code3);
  }
  function tagCloseBetween(code3) {
    if (markdownLineEnding(code3)) {
      returnState = tagCloseBetween;
      return lineEndingBefore(code3);
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return tagCloseBetween;
    }
    return end(code3);
  }
  function tagOpen(code3) {
    if (code3 === 45 || asciiAlphanumeric(code3)) {
      effects.consume(code3);
      return tagOpen;
    }
    if (code3 === 47 || code3 === 62 || markdownLineEndingOrSpace(code3)) {
      return tagOpenBetween(code3);
    }
    return nok(code3);
  }
  function tagOpenBetween(code3) {
    if (code3 === 47) {
      effects.consume(code3);
      return end;
    }
    if (code3 === 58 || code3 === 95 || asciiAlpha(code3)) {
      effects.consume(code3);
      return tagOpenAttributeName;
    }
    if (markdownLineEnding(code3)) {
      returnState = tagOpenBetween;
      return lineEndingBefore(code3);
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return tagOpenBetween;
    }
    return end(code3);
  }
  function tagOpenAttributeName(code3) {
    if (code3 === 45 || code3 === 46 || code3 === 58 || code3 === 95 || asciiAlphanumeric(code3)) {
      effects.consume(code3);
      return tagOpenAttributeName;
    }
    return tagOpenAttributeNameAfter(code3);
  }
  function tagOpenAttributeNameAfter(code3) {
    if (code3 === 61) {
      effects.consume(code3);
      return tagOpenAttributeValueBefore;
    }
    if (markdownLineEnding(code3)) {
      returnState = tagOpenAttributeNameAfter;
      return lineEndingBefore(code3);
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return tagOpenAttributeNameAfter;
    }
    return tagOpenBetween(code3);
  }
  function tagOpenAttributeValueBefore(code3) {
    if (code3 === null || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96) {
      return nok(code3);
    }
    if (code3 === 34 || code3 === 39) {
      effects.consume(code3);
      marker = code3;
      return tagOpenAttributeValueQuoted;
    }
    if (markdownLineEnding(code3)) {
      returnState = tagOpenAttributeValueBefore;
      return lineEndingBefore(code3);
    }
    if (markdownSpace(code3)) {
      effects.consume(code3);
      return tagOpenAttributeValueBefore;
    }
    effects.consume(code3);
    return tagOpenAttributeValueUnquoted;
  }
  function tagOpenAttributeValueQuoted(code3) {
    if (code3 === marker) {
      effects.consume(code3);
      marker = void 0;
      return tagOpenAttributeValueQuotedAfter;
    }
    if (code3 === null) {
      return nok(code3);
    }
    if (markdownLineEnding(code3)) {
      returnState = tagOpenAttributeValueQuoted;
      return lineEndingBefore(code3);
    }
    effects.consume(code3);
    return tagOpenAttributeValueQuoted;
  }
  function tagOpenAttributeValueUnquoted(code3) {
    if (code3 === null || code3 === 34 || code3 === 39 || code3 === 60 || code3 === 61 || code3 === 96) {
      return nok(code3);
    }
    if (code3 === 47 || code3 === 62 || markdownLineEndingOrSpace(code3)) {
      return tagOpenBetween(code3);
    }
    effects.consume(code3);
    return tagOpenAttributeValueUnquoted;
  }
  function tagOpenAttributeValueQuotedAfter(code3) {
    if (code3 === 47 || code3 === 62 || markdownLineEndingOrSpace(code3)) {
      return tagOpenBetween(code3);
    }
    return nok(code3);
  }
  function end(code3) {
    if (code3 === 62) {
      effects.consume(code3);
      effects.exit("htmlTextData");
      effects.exit("htmlText");
      return ok2;
    }
    return nok(code3);
  }
  function lineEndingBefore(code3) {
    effects.exit("htmlTextData");
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return lineEndingAfter;
  }
  function lineEndingAfter(code3) {
    return markdownSpace(code3) ? factorySpace(
      effects,
      lineEndingAfterPrefix,
      "linePrefix",
      self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(code3) : lineEndingAfterPrefix(code3);
  }
  function lineEndingAfterPrefix(code3) {
    effects.enter("htmlTextData");
    return returnState(code3);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/label-end.js
var labelEnd = {
  name: "labelEnd",
  tokenize: tokenizeLabelEnd,
  resolveTo: resolveToLabelEnd,
  resolveAll: resolveAllLabelEnd
};
var resourceConstruct = {
  tokenize: tokenizeResource
};
var referenceFullConstruct = {
  tokenize: tokenizeReferenceFull
};
var referenceCollapsedConstruct = {
  tokenize: tokenizeReferenceCollapsed
};
function resolveAllLabelEnd(events) {
  let index3 = -1;
  while (++index3 < events.length) {
    const token = events[index3][1];
    if (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd") {
      events.splice(index3 + 1, token.type === "labelImage" ? 4 : 2);
      token.type = "data";
      index3++;
    }
  }
  return events;
}
function resolveToLabelEnd(events, context) {
  let index3 = events.length;
  let offset = 0;
  let token;
  let open;
  let close;
  let media;
  while (index3--) {
    token = events[index3][1];
    if (open) {
      if (token.type === "link" || token.type === "labelLink" && token._inactive) {
        break;
      }
      if (events[index3][0] === "enter" && token.type === "labelLink") {
        token._inactive = true;
      }
    } else if (close) {
      if (events[index3][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced) {
        open = index3;
        if (token.type !== "labelLink") {
          offset = 2;
          break;
        }
      }
    } else if (token.type === "labelEnd") {
      close = index3;
    }
  }
  const group = {
    type: events[open][1].type === "labelLink" ? "link" : "image",
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  const label = {
    type: "label",
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[close][1].end)
  };
  const text3 = {
    type: "labelText",
    start: Object.assign({}, events[open + offset + 2][1].end),
    end: Object.assign({}, events[close - 2][1].start)
  };
  media = [
    ["enter", group, context],
    ["enter", label, context]
  ];
  media = push(media, events.slice(open + 1, open + offset + 3));
  media = push(media, [["enter", text3, context]]);
  media = push(
    media,
    resolveAll(
      context.parser.constructs.insideSpan.null,
      events.slice(open + offset + 4, close - 3),
      context
    )
  );
  media = push(media, [
    ["exit", text3, context],
    events[close - 2],
    events[close - 1],
    ["exit", label, context]
  ]);
  media = push(media, events.slice(close + 1));
  media = push(media, [["exit", group, context]]);
  splice(events, open, events.length, media);
  return events;
}
function tokenizeLabelEnd(effects, ok2, nok) {
  const self = this;
  let index3 = self.events.length;
  let labelStart;
  let defined;
  while (index3--) {
    if ((self.events[index3][1].type === "labelImage" || self.events[index3][1].type === "labelLink") && !self.events[index3][1]._balanced) {
      labelStart = self.events[index3][1];
      break;
    }
  }
  return start;
  function start(code3) {
    if (!labelStart) {
      return nok(code3);
    }
    if (labelStart._inactive) {
      return labelEndNok(code3);
    }
    defined = self.parser.defined.includes(
      normalizeIdentifier(
        self.sliceSerialize({
          start: labelStart.end,
          end: self.now()
        })
      )
    );
    effects.enter("labelEnd");
    effects.enter("labelMarker");
    effects.consume(code3);
    effects.exit("labelMarker");
    effects.exit("labelEnd");
    return after;
  }
  function after(code3) {
    if (code3 === 40) {
      return effects.attempt(
        resourceConstruct,
        labelEndOk,
        defined ? labelEndOk : labelEndNok
      )(code3);
    }
    if (code3 === 91) {
      return effects.attempt(
        referenceFullConstruct,
        labelEndOk,
        defined ? referenceNotFull : labelEndNok
      )(code3);
    }
    return defined ? labelEndOk(code3) : labelEndNok(code3);
  }
  function referenceNotFull(code3) {
    return effects.attempt(
      referenceCollapsedConstruct,
      labelEndOk,
      labelEndNok
    )(code3);
  }
  function labelEndOk(code3) {
    return ok2(code3);
  }
  function labelEndNok(code3) {
    labelStart._balanced = true;
    return nok(code3);
  }
}
function tokenizeResource(effects, ok2, nok) {
  return resourceStart;
  function resourceStart(code3) {
    effects.enter("resource");
    effects.enter("resourceMarker");
    effects.consume(code3);
    effects.exit("resourceMarker");
    return resourceBefore;
  }
  function resourceBefore(code3) {
    return markdownLineEndingOrSpace(code3) ? factoryWhitespace(effects, resourceOpen)(code3) : resourceOpen(code3);
  }
  function resourceOpen(code3) {
    if (code3 === 41) {
      return resourceEnd(code3);
    }
    return factoryDestination(
      effects,
      resourceDestinationAfter,
      resourceDestinationMissing,
      "resourceDestination",
      "resourceDestinationLiteral",
      "resourceDestinationLiteralMarker",
      "resourceDestinationRaw",
      "resourceDestinationString",
      32
    )(code3);
  }
  function resourceDestinationAfter(code3) {
    return markdownLineEndingOrSpace(code3) ? factoryWhitespace(effects, resourceBetween)(code3) : resourceEnd(code3);
  }
  function resourceDestinationMissing(code3) {
    return nok(code3);
  }
  function resourceBetween(code3) {
    if (code3 === 34 || code3 === 39 || code3 === 40) {
      return factoryTitle(
        effects,
        resourceTitleAfter,
        nok,
        "resourceTitle",
        "resourceTitleMarker",
        "resourceTitleString"
      )(code3);
    }
    return resourceEnd(code3);
  }
  function resourceTitleAfter(code3) {
    return markdownLineEndingOrSpace(code3) ? factoryWhitespace(effects, resourceEnd)(code3) : resourceEnd(code3);
  }
  function resourceEnd(code3) {
    if (code3 === 41) {
      effects.enter("resourceMarker");
      effects.consume(code3);
      effects.exit("resourceMarker");
      effects.exit("resource");
      return ok2;
    }
    return nok(code3);
  }
}
function tokenizeReferenceFull(effects, ok2, nok) {
  const self = this;
  return referenceFull;
  function referenceFull(code3) {
    return factoryLabel.call(
      self,
      effects,
      referenceFullAfter,
      referenceFullMissing,
      "reference",
      "referenceMarker",
      "referenceString"
    )(code3);
  }
  function referenceFullAfter(code3) {
    return self.parser.defined.includes(
      normalizeIdentifier(
        self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
      )
    ) ? ok2(code3) : nok(code3);
  }
  function referenceFullMissing(code3) {
    return nok(code3);
  }
}
function tokenizeReferenceCollapsed(effects, ok2, nok) {
  return referenceCollapsedStart;
  function referenceCollapsedStart(code3) {
    effects.enter("reference");
    effects.enter("referenceMarker");
    effects.consume(code3);
    effects.exit("referenceMarker");
    return referenceCollapsedOpen;
  }
  function referenceCollapsedOpen(code3) {
    if (code3 === 93) {
      effects.enter("referenceMarker");
      effects.consume(code3);
      effects.exit("referenceMarker");
      effects.exit("reference");
      return ok2;
    }
    return nok(code3);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/label-start-image.js
var labelStartImage = {
  name: "labelStartImage",
  tokenize: tokenizeLabelStartImage,
  resolveAll: labelEnd.resolveAll
};
function tokenizeLabelStartImage(effects, ok2, nok) {
  const self = this;
  return start;
  function start(code3) {
    effects.enter("labelImage");
    effects.enter("labelImageMarker");
    effects.consume(code3);
    effects.exit("labelImageMarker");
    return open;
  }
  function open(code3) {
    if (code3 === 91) {
      effects.enter("labelMarker");
      effects.consume(code3);
      effects.exit("labelMarker");
      effects.exit("labelImage");
      return after;
    }
    return nok(code3);
  }
  function after(code3) {
    return code3 === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code3) : ok2(code3);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/label-start-link.js
var labelStartLink = {
  name: "labelStartLink",
  tokenize: tokenizeLabelStartLink,
  resolveAll: labelEnd.resolveAll
};
function tokenizeLabelStartLink(effects, ok2, nok) {
  const self = this;
  return start;
  function start(code3) {
    effects.enter("labelLink");
    effects.enter("labelMarker");
    effects.consume(code3);
    effects.exit("labelMarker");
    effects.exit("labelLink");
    return after;
  }
  function after(code3) {
    return code3 === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code3) : ok2(code3);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/line-ending.js
var lineEnding = {
  name: "lineEnding",
  tokenize: tokenizeLineEnding
};
function tokenizeLineEnding(effects, ok2) {
  return start;
  function start(code3) {
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    return factorySpace(effects, ok2, "linePrefix");
  }
}

// node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/thematic-break.js
var thematicBreak = {
  name: "thematicBreak",
  tokenize: tokenizeThematicBreak
};
function tokenizeThematicBreak(effects, ok2, nok) {
  let size = 0;
  let marker;
  return start;
  function start(code3) {
    effects.enter("thematicBreak");
    return before(code3);
  }
  function before(code3) {
    marker = code3;
    return atBreak(code3);
  }
  function atBreak(code3) {
    if (code3 === marker) {
      effects.enter("thematicBreakSequence");
      return sequence(code3);
    }
    if (size >= 3 && (code3 === null || markdownLineEnding(code3))) {
      effects.exit("thematicBreak");
      return ok2(code3);
    }
    return nok(code3);
  }
  function sequence(code3) {
    if (code3 === marker) {
      effects.consume(code3);
      size++;
      return sequence;
    }
    effects.exit("thematicBreakSequence");
    return markdownSpace(code3) ? factorySpace(effects, atBreak, "whitespace")(code3) : atBreak(code3);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/list.js
var list = {
  name: "list",
  tokenize: tokenizeListStart,
  continuation: {
    tokenize: tokenizeListContinuation
  },
  exit: tokenizeListEnd
};
var listItemPrefixWhitespaceConstruct = {
  tokenize: tokenizeListItemPrefixWhitespace,
  partial: true
};
var indentConstruct = {
  tokenize: tokenizeIndent,
  partial: true
};
function tokenizeListStart(effects, ok2, nok) {
  const self = this;
  const tail = self.events[self.events.length - 1];
  let initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let size = 0;
  return start;
  function start(code3) {
    const kind = self.containerState.type || (code3 === 42 || code3 === 43 || code3 === 45 ? "listUnordered" : "listOrdered");
    if (kind === "listUnordered" ? !self.containerState.marker || code3 === self.containerState.marker : asciiDigit(code3)) {
      if (!self.containerState.type) {
        self.containerState.type = kind;
        effects.enter(kind, {
          _container: true
        });
      }
      if (kind === "listUnordered") {
        effects.enter("listItemPrefix");
        return code3 === 42 || code3 === 45 ? effects.check(thematicBreak, nok, atMarker)(code3) : atMarker(code3);
      }
      if (!self.interrupt || code3 === 49) {
        effects.enter("listItemPrefix");
        effects.enter("listItemValue");
        return inside(code3);
      }
    }
    return nok(code3);
  }
  function inside(code3) {
    if (asciiDigit(code3) && ++size < 10) {
      effects.consume(code3);
      return inside;
    }
    if ((!self.interrupt || size < 2) && (self.containerState.marker ? code3 === self.containerState.marker : code3 === 41 || code3 === 46)) {
      effects.exit("listItemValue");
      return atMarker(code3);
    }
    return nok(code3);
  }
  function atMarker(code3) {
    effects.enter("listItemMarker");
    effects.consume(code3);
    effects.exit("listItemMarker");
    self.containerState.marker = self.containerState.marker || code3;
    return effects.check(
      blankLine,
      // Can’t be empty when interrupting.
      self.interrupt ? nok : onBlank,
      effects.attempt(
        listItemPrefixWhitespaceConstruct,
        endOfPrefix,
        otherPrefix
      )
    );
  }
  function onBlank(code3) {
    self.containerState.initialBlankLine = true;
    initialSize++;
    return endOfPrefix(code3);
  }
  function otherPrefix(code3) {
    if (markdownSpace(code3)) {
      effects.enter("listItemPrefixWhitespace");
      effects.consume(code3);
      effects.exit("listItemPrefixWhitespace");
      return endOfPrefix;
    }
    return nok(code3);
  }
  function endOfPrefix(code3) {
    self.containerState.size = initialSize + self.sliceSerialize(effects.exit("listItemPrefix"), true).length;
    return ok2(code3);
  }
}
function tokenizeListContinuation(effects, ok2, nok) {
  const self = this;
  self.containerState._closeFlow = void 0;
  return effects.check(blankLine, onBlank, notBlank);
  function onBlank(code3) {
    self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine;
    return factorySpace(
      effects,
      ok2,
      "listItemIndent",
      self.containerState.size + 1
    )(code3);
  }
  function notBlank(code3) {
    if (self.containerState.furtherBlankLines || !markdownSpace(code3)) {
      self.containerState.furtherBlankLines = void 0;
      self.containerState.initialBlankLine = void 0;
      return notInCurrentItem(code3);
    }
    self.containerState.furtherBlankLines = void 0;
    self.containerState.initialBlankLine = void 0;
    return effects.attempt(indentConstruct, ok2, notInCurrentItem)(code3);
  }
  function notInCurrentItem(code3) {
    self.containerState._closeFlow = true;
    self.interrupt = void 0;
    return factorySpace(
      effects,
      effects.attempt(list, ok2, nok),
      "linePrefix",
      self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(code3);
  }
}
function tokenizeIndent(effects, ok2, nok) {
  const self = this;
  return factorySpace(
    effects,
    afterPrefix,
    "listItemIndent",
    self.containerState.size + 1
  );
  function afterPrefix(code3) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "listItemIndent" && tail[2].sliceSerialize(tail[1], true).length === self.containerState.size ? ok2(code3) : nok(code3);
  }
}
function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type);
}
function tokenizeListItemPrefixWhitespace(effects, ok2, nok) {
  const self = this;
  return factorySpace(
    effects,
    afterPrefix,
    "listItemPrefixWhitespace",
    self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1
  );
  function afterPrefix(code3) {
    const tail = self.events[self.events.length - 1];
    return !markdownSpace(code3) && tail && tail[1].type === "listItemPrefixWhitespace" ? ok2(code3) : nok(code3);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/setext-underline.js
var setextUnderline = {
  name: "setextUnderline",
  tokenize: tokenizeSetextUnderline,
  resolveTo: resolveToSetextUnderline
};
function resolveToSetextUnderline(events, context) {
  let index3 = events.length;
  let content3;
  let text3;
  let definition2;
  while (index3--) {
    if (events[index3][0] === "enter") {
      if (events[index3][1].type === "content") {
        content3 = index3;
        break;
      }
      if (events[index3][1].type === "paragraph") {
        text3 = index3;
      }
    } else {
      if (events[index3][1].type === "content") {
        events.splice(index3, 1);
      }
      if (!definition2 && events[index3][1].type === "definition") {
        definition2 = index3;
      }
    }
  }
  const heading = {
    type: "setextHeading",
    start: Object.assign({}, events[text3][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  events[text3][1].type = "setextHeadingText";
  if (definition2) {
    events.splice(text3, 0, ["enter", heading, context]);
    events.splice(definition2 + 1, 0, ["exit", events[content3][1], context]);
    events[content3][1].end = Object.assign({}, events[definition2][1].end);
  } else {
    events[content3][1] = heading;
  }
  events.push(["exit", heading, context]);
  return events;
}
function tokenizeSetextUnderline(effects, ok2, nok) {
  const self = this;
  let marker;
  return start;
  function start(code3) {
    let index3 = self.events.length;
    let paragraph;
    while (index3--) {
      if (self.events[index3][1].type !== "lineEnding" && self.events[index3][1].type !== "linePrefix" && self.events[index3][1].type !== "content") {
        paragraph = self.events[index3][1].type === "paragraph";
        break;
      }
    }
    if (!self.parser.lazy[self.now().line] && (self.interrupt || paragraph)) {
      effects.enter("setextHeadingLine");
      marker = code3;
      return before(code3);
    }
    return nok(code3);
  }
  function before(code3) {
    effects.enter("setextHeadingLineSequence");
    return inside(code3);
  }
  function inside(code3) {
    if (code3 === marker) {
      effects.consume(code3);
      return inside;
    }
    effects.exit("setextHeadingLineSequence");
    return markdownSpace(code3) ? factorySpace(effects, after, "lineSuffix")(code3) : after(code3);
  }
  function after(code3) {
    if (code3 === null || markdownLineEnding(code3)) {
      effects.exit("setextHeadingLine");
      return ok2(code3);
    }
    return nok(code3);
  }
}

// node_modules/.pnpm/micromark@4.0.0/node_modules/micromark/lib/initialize/flow.js
var flow = {
  tokenize: initializeFlow
};
function initializeFlow(effects) {
  const self = this;
  const initial = effects.attempt(
    // Try to parse a blank line.
    blankLine,
    atBlankEnding,
    // Try to parse initial flow (essentially, only code).
    effects.attempt(
      this.parser.constructs.flowInitial,
      afterConstruct,
      factorySpace(
        effects,
        effects.attempt(
          this.parser.constructs.flow,
          afterConstruct,
          effects.attempt(content2, afterConstruct)
        ),
        "linePrefix"
      )
    )
  );
  return initial;
  function atBlankEnding(code3) {
    if (code3 === null) {
      effects.consume(code3);
      return;
    }
    effects.enter("lineEndingBlank");
    effects.consume(code3);
    effects.exit("lineEndingBlank");
    self.currentConstruct = void 0;
    return initial;
  }
  function afterConstruct(code3) {
    if (code3 === null) {
      effects.consume(code3);
      return;
    }
    effects.enter("lineEnding");
    effects.consume(code3);
    effects.exit("lineEnding");
    self.currentConstruct = void 0;
    return initial;
  }
}

// node_modules/.pnpm/micromark@4.0.0/node_modules/micromark/lib/initialize/text.js
var resolver = {
  resolveAll: createResolver()
};
var string = initializeFactory("string");
var text = initializeFactory("text");
function initializeFactory(field) {
  return {
    tokenize: initializeText,
    resolveAll: createResolver(
      field === "text" ? resolveAllLineSuffixes : void 0
    )
  };
  function initializeText(effects) {
    const self = this;
    const constructs2 = this.parser.constructs[field];
    const text3 = effects.attempt(constructs2, start, notText);
    return start;
    function start(code3) {
      return atBreak(code3) ? text3(code3) : notText(code3);
    }
    function notText(code3) {
      if (code3 === null) {
        effects.consume(code3);
        return;
      }
      effects.enter("data");
      effects.consume(code3);
      return data;
    }
    function data(code3) {
      if (atBreak(code3)) {
        effects.exit("data");
        return text3(code3);
      }
      effects.consume(code3);
      return data;
    }
    function atBreak(code3) {
      if (code3 === null) {
        return true;
      }
      const list2 = constructs2[code3];
      let index3 = -1;
      if (list2) {
        while (++index3 < list2.length) {
          const item = list2[index3];
          if (!item.previous || item.previous.call(self, self.previous)) {
            return true;
          }
        }
      }
      return false;
    }
  }
}
function createResolver(extraResolver) {
  return resolveAllText;
  function resolveAllText(events, context) {
    let index3 = -1;
    let enter;
    while (++index3 <= events.length) {
      if (enter === void 0) {
        if (events[index3] && events[index3][1].type === "data") {
          enter = index3;
          index3++;
        }
      } else if (!events[index3] || events[index3][1].type !== "data") {
        if (index3 !== enter + 2) {
          events[enter][1].end = events[index3 - 1][1].end;
          events.splice(enter + 2, index3 - enter - 2);
          index3 = enter + 2;
        }
        enter = void 0;
      }
    }
    return extraResolver ? extraResolver(events, context) : events;
  }
}
function resolveAllLineSuffixes(events, context) {
  let eventIndex = 0;
  while (++eventIndex <= events.length) {
    if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
      const data = events[eventIndex - 1][1];
      const chunks = context.sliceStream(data);
      let index3 = chunks.length;
      let bufferIndex = -1;
      let size = 0;
      let tabs;
      while (index3--) {
        const chunk = chunks[index3];
        if (typeof chunk === "string") {
          bufferIndex = chunk.length;
          while (chunk.charCodeAt(bufferIndex - 1) === 32) {
            size++;
            bufferIndex--;
          }
          if (bufferIndex)
            break;
          bufferIndex = -1;
        } else if (chunk === -2) {
          tabs = true;
          size++;
        } else if (chunk === -1) {
        } else {
          index3++;
          break;
        }
      }
      if (size) {
        const token = {
          type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size,
            _index: data.start._index + index3,
            _bufferIndex: index3 ? bufferIndex : data.start._bufferIndex + bufferIndex
          },
          end: Object.assign({}, data.end)
        };
        data.end = Object.assign({}, token.start);
        if (data.start.offset === data.end.offset) {
          Object.assign(data, token);
        } else {
          events.splice(
            eventIndex,
            0,
            ["enter", token, context],
            ["exit", token, context]
          );
          eventIndex += 2;
        }
      }
      eventIndex++;
    }
  }
  return events;
}

// node_modules/.pnpm/micromark@4.0.0/node_modules/micromark/lib/create-tokenizer.js
function createTokenizer(parser, initialize, from3) {
  let point3 = Object.assign(
    from3 ? Object.assign({}, from3) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  let consumed = true;
  const effects = {
    consume,
    enter,
    exit: exit2,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write: write2
  };
  let state = initialize.tokenize.call(context, effects);
  let expectedCode;
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write2(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    const { line, column, offset, _index, _bufferIndex } = point3;
    return {
      line,
      column,
      offset,
      _index,
      _bufferIndex
    };
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point3._index < chunks.length) {
      const chunk = chunks[point3._index];
      if (typeof chunk === "string") {
        chunkIndex = point3._index;
        if (point3._bufferIndex < 0) {
          point3._bufferIndex = 0;
        }
        while (point3._index === chunkIndex && point3._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point3._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code3) {
    consumed = void 0;
    expectedCode = code3;
    state = state(code3);
  }
  function consume(code3) {
    if (markdownLineEnding(code3)) {
      point3.line++;
      point3.column = 1;
      point3.offset += code3 === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code3 !== -1) {
      point3.column++;
      point3.offset++;
    }
    if (point3._bufferIndex < 0) {
      point3._index++;
    } else {
      point3._bufferIndex++;
      if (point3._bufferIndex === chunks[point3._index].length) {
        point3._bufferIndex = -1;
        point3._index++;
      }
    }
    context.previous = code3;
    consumed = true;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit2(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_2, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs2, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs2) ? handleListOfConstructs(constructs2) : "tokenize" in constructs2 ? (
        // @ts-expect-error Looks like a construct.
        handleListOfConstructs([constructs2])
      ) : handleMapOfConstructs(constructs2);
      function handleMapOfConstructs(map) {
        return start;
        function start(code3) {
          const def = code3 !== null && map[code3];
          const all2 = code3 !== null && map.null;
          const list2 = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all2) ? all2 : all2 ? [all2] : []
          ];
          return handleListOfConstructs(list2)(code3);
        }
      }
      function handleListOfConstructs(list2) {
        listOfConstructs = list2;
        constructIndex = 0;
        if (list2.length === 0) {
          return bogusState;
        }
        return handleConstruct(list2[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code3) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok(code3);
          }
          return construct.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok2,
            nok
          )(code3);
        }
      }
      function ok2(code3) {
        consumed = true;
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code3) {
        consumed = true;
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from4) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(
        context.events,
        from4,
        context.events.length - from4,
        construct.resolve(context.events.slice(from4), context)
      );
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point3 = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point3.line in columnStart && point3.column < 2) {
      point3.column = columnStart[point3.line];
      point3.offset += columnStart[point3.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      const head = view[0];
      if (typeof head === "string") {
        view[0] = head.slice(startBufferIndex);
      } else {
        view.shift();
      }
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index3 = -1;
  const result = [];
  let atTab;
  while (++index3 < chunks.length) {
    const chunk = chunks[index3];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab)
            continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}

// node_modules/.pnpm/micromark@4.0.0/node_modules/micromark/lib/constructs.js
var constructs_exports = {};
__export(constructs_exports, {
  attentionMarkers: () => attentionMarkers,
  contentInitial: () => contentInitial,
  disable: () => disable,
  document: () => document3,
  flow: () => flow2,
  flowInitial: () => flowInitial,
  insideSpan: () => insideSpan,
  string: () => string2,
  text: () => text2
});
var document3 = {
  [42]: list,
  [43]: list,
  [45]: list,
  [48]: list,
  [49]: list,
  [50]: list,
  [51]: list,
  [52]: list,
  [53]: list,
  [54]: list,
  [55]: list,
  [56]: list,
  [57]: list,
  [62]: blockQuote
};
var contentInitial = {
  [91]: definition
};
var flowInitial = {
  [-2]: codeIndented,
  [-1]: codeIndented,
  [32]: codeIndented
};
var flow2 = {
  [35]: headingAtx,
  [42]: thematicBreak,
  [45]: [setextUnderline, thematicBreak],
  [60]: htmlFlow,
  [61]: setextUnderline,
  [95]: thematicBreak,
  [96]: codeFenced,
  [126]: codeFenced
};
var string2 = {
  [38]: characterReference,
  [92]: characterEscape
};
var text2 = {
  [-5]: lineEnding,
  [-4]: lineEnding,
  [-3]: lineEnding,
  [33]: labelStartImage,
  [38]: characterReference,
  [42]: attention,
  [60]: [autolink, htmlText],
  [91]: labelStartLink,
  [92]: [hardBreakEscape, characterEscape],
  [93]: labelEnd,
  [95]: attention,
  [96]: codeText
};
var insideSpan = {
  null: [attention, resolver]
};
var attentionMarkers = {
  null: [42, 95]
};
var disable = {
  null: []
};

// node_modules/.pnpm/micromark@4.0.0/node_modules/micromark/lib/parse.js
function parse(options) {
  const settings = options || {};
  const constructs2 = (
    /** @type {FullNormalizedExtension} */
    combineExtensions([constructs_exports, ...settings.extensions || []])
  );
  const parser = {
    defined: [],
    lazy: {},
    constructs: constructs2,
    content: create3(content),
    document: create3(document2),
    flow: create3(flow),
    string: create3(string),
    text: create3(text)
  };
  return parser;
  function create3(initial) {
    return creator;
    function creator(from3) {
      return createTokenizer(parser, initial, from3);
    }
  }
}

// node_modules/.pnpm/micromark@4.0.0/node_modules/micromark/lib/postprocess.js
function postprocess(events) {
  while (!subtokenize(events)) {
  }
  return events;
}

// node_modules/.pnpm/micromark@4.0.0/node_modules/micromark/lib/preprocess.js
var search = /[\0\t\n\r]/g;
function preprocess() {
  let column = 1;
  let buffer = "";
  let start = true;
  let atCarriageReturn;
  return preprocessor;
  function preprocessor(value, encoding, end) {
    const chunks = [];
    let match;
    let next;
    let startPosition;
    let endPosition;
    let code3;
    value = buffer + (typeof value === "string" ? value.toString() : new TextDecoder(encoding || void 0).decode(value));
    startPosition = 0;
    buffer = "";
    if (start) {
      if (value.charCodeAt(0) === 65279) {
        startPosition++;
      }
      start = void 0;
    }
    while (startPosition < value.length) {
      search.lastIndex = startPosition;
      match = search.exec(value);
      endPosition = match && match.index !== void 0 ? match.index : value.length;
      code3 = value.charCodeAt(endPosition);
      if (!match) {
        buffer = value.slice(startPosition);
        break;
      }
      if (code3 === 10 && startPosition === endPosition && atCarriageReturn) {
        chunks.push(-3);
        atCarriageReturn = void 0;
      } else {
        if (atCarriageReturn) {
          chunks.push(-5);
          atCarriageReturn = void 0;
        }
        if (startPosition < endPosition) {
          chunks.push(value.slice(startPosition, endPosition));
          column += endPosition - startPosition;
        }
        switch (code3) {
          case 0: {
            chunks.push(65533);
            column++;
            break;
          }
          case 9: {
            next = Math.ceil(column / 4) * 4;
            chunks.push(-2);
            while (column++ < next)
              chunks.push(-1);
            break;
          }
          case 10: {
            chunks.push(-4);
            column = 1;
            break;
          }
          default: {
            atCarriageReturn = true;
            column = 1;
          }
        }
      }
      startPosition = endPosition + 1;
    }
    if (end) {
      if (atCarriageReturn)
        chunks.push(-5);
      if (buffer)
        chunks.push(buffer);
      chunks.push(null);
    }
    return chunks;
  }
}

// node_modules/.pnpm/micromark-util-decode-string@2.0.0/node_modules/micromark-util-decode-string/index.js
var characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function decodeString(value) {
  return value.replace(characterEscapeOrReference, decode);
}
function decode($0, $1, $2) {
  if ($1) {
    return $1;
  }
  const head = $2.charCodeAt(0);
  if (head === 35) {
    const head2 = $2.charCodeAt(1);
    const hex = head2 === 120 || head2 === 88;
    return decodeNumericCharacterReference($2.slice(hex ? 2 : 1), hex ? 16 : 10);
  }
  return decodeNamedCharacterReference($2) || $0;
}

// node_modules/.pnpm/mdast-util-from-markdown@2.0.0/node_modules/mdast-util-from-markdown/lib/index.js
var own2 = {}.hasOwnProperty;
function fromMarkdown(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler(options)(
    postprocess(
      parse(options).document().write(preprocess()(value, encoding, true))
    )
  );
}
function compiler(options) {
  const config3 = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: opener(link),
      autolinkProtocol: onenterdata,
      autolinkEmail: onenterdata,
      atxHeading: opener(heading),
      blockQuote: opener(blockQuote2),
      characterEscape: onenterdata,
      characterReference: onenterdata,
      codeFenced: opener(codeFlow),
      codeFencedFenceInfo: buffer,
      codeFencedFenceMeta: buffer,
      codeIndented: opener(codeFlow, buffer),
      codeText: opener(codeText2, buffer),
      codeTextData: onenterdata,
      data: onenterdata,
      codeFlowValue: onenterdata,
      definition: opener(definition2),
      definitionDestinationString: buffer,
      definitionLabelString: buffer,
      definitionTitleString: buffer,
      emphasis: opener(emphasis),
      hardBreakEscape: opener(hardBreak),
      hardBreakTrailing: opener(hardBreak),
      htmlFlow: opener(html, buffer),
      htmlFlowData: onenterdata,
      htmlText: opener(html, buffer),
      htmlTextData: onenterdata,
      image: opener(image),
      label: buffer,
      link: opener(link),
      listItem: opener(listItem),
      listItemValue: onenterlistitemvalue,
      listOrdered: opener(list2, onenterlistordered),
      listUnordered: opener(list2),
      paragraph: opener(paragraph),
      reference: onenterreference,
      referenceString: buffer,
      resourceDestinationString: buffer,
      resourceTitleString: buffer,
      setextHeading: opener(heading),
      strong: opener(strong),
      thematicBreak: opener(thematicBreak2)
    },
    exit: {
      atxHeading: closer(),
      atxHeadingSequence: onexitatxheadingsequence,
      autolink: closer(),
      autolinkEmail: onexitautolinkemail,
      autolinkProtocol: onexitautolinkprotocol,
      blockQuote: closer(),
      characterEscapeValue: onexitdata,
      characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
      characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
      characterReferenceValue: onexitcharacterreferencevalue,
      codeFenced: closer(onexitcodefenced),
      codeFencedFence: onexitcodefencedfence,
      codeFencedFenceInfo: onexitcodefencedfenceinfo,
      codeFencedFenceMeta: onexitcodefencedfencemeta,
      codeFlowValue: onexitdata,
      codeIndented: closer(onexitcodeindented),
      codeText: closer(onexitcodetext),
      codeTextData: onexitdata,
      data: onexitdata,
      definition: closer(),
      definitionDestinationString: onexitdefinitiondestinationstring,
      definitionLabelString: onexitdefinitionlabelstring,
      definitionTitleString: onexitdefinitiontitlestring,
      emphasis: closer(),
      hardBreakEscape: closer(onexithardbreak),
      hardBreakTrailing: closer(onexithardbreak),
      htmlFlow: closer(onexithtmlflow),
      htmlFlowData: onexitdata,
      htmlText: closer(onexithtmltext),
      htmlTextData: onexitdata,
      image: closer(onexitimage),
      label: onexitlabel,
      labelText: onexitlabeltext,
      lineEnding: onexitlineending,
      link: closer(onexitlink),
      listItem: closer(),
      listOrdered: closer(),
      listUnordered: closer(),
      paragraph: closer(),
      referenceString: onexitreferencestring,
      resourceDestinationString: onexitresourcedestinationstring,
      resourceTitleString: onexitresourcetitlestring,
      resource: onexitresource,
      setextHeading: closer(onexitsetextheading),
      setextHeadingLineSequence: onexitsetextheadinglinesequence,
      setextHeadingText: onexitsetextheadingtext,
      strong: closer(),
      thematicBreak: closer()
    }
  };
  configure(config3, (options || {}).mdastExtensions || []);
  const data = {};
  return compile;
  function compile(events) {
    let tree = {
      type: "root",
      children: []
    };
    const context = {
      stack: [tree],
      tokenStack: [],
      config: config3,
      enter,
      exit: exit2,
      buffer,
      resume,
      data
    };
    const listStack = [];
    let index3 = -1;
    while (++index3 < events.length) {
      if (events[index3][1].type === "listOrdered" || events[index3][1].type === "listUnordered") {
        if (events[index3][0] === "enter") {
          listStack.push(index3);
        } else {
          const tail = listStack.pop();
          index3 = prepareList(events, tail, index3);
        }
      }
    }
    index3 = -1;
    while (++index3 < events.length) {
      const handler = config3[events[index3][0]];
      if (own2.call(handler, events[index3][1].type)) {
        handler[events[index3][1].type].call(
          Object.assign(
            {
              sliceSerialize: events[index3][2].sliceSerialize
            },
            context
          ),
          events[index3][1]
        );
      }
    }
    if (context.tokenStack.length > 0) {
      const tail = context.tokenStack[context.tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point2(
        events.length > 0 ? events[0][1].start : {
          line: 1,
          column: 1,
          offset: 0
        }
      ),
      end: point2(
        events.length > 0 ? events[events.length - 2][1].end : {
          line: 1,
          column: 1,
          offset: 0
        }
      )
    };
    index3 = -1;
    while (++index3 < config3.transforms.length) {
      tree = config3.transforms[index3](tree) || tree;
    }
    return tree;
  }
  function prepareList(events, start, length3) {
    let index3 = start - 1;
    let containerBalance = -1;
    let listSpread = false;
    let listItem2;
    let lineIndex;
    let firstBlankLineIndex;
    let atMarker;
    while (++index3 <= length3) {
      const event = events[index3];
      switch (event[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          if (event[0] === "enter") {
            containerBalance++;
          } else {
            containerBalance--;
          }
          atMarker = void 0;
          break;
        }
        case "lineEndingBlank": {
          if (event[0] === "enter") {
            if (listItem2 && !atMarker && !containerBalance && !firstBlankLineIndex) {
              firstBlankLineIndex = index3;
            }
            atMarker = void 0;
          }
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace": {
          break;
        }
        default: {
          atMarker = void 0;
        }
      }
      if (!containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
        if (listItem2) {
          let tailIndex = index3;
          lineIndex = void 0;
          while (tailIndex--) {
            const tailEvent = events[tailIndex];
            if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
              if (tailEvent[0] === "exit")
                continue;
              if (lineIndex) {
                events[lineIndex][1].type = "lineEndingBlank";
                listSpread = true;
              }
              tailEvent[1].type = "lineEnding";
              lineIndex = tailIndex;
            } else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent") {
            } else {
              break;
            }
          }
          if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
            listItem2._spread = true;
          }
          listItem2.end = Object.assign(
            {},
            lineIndex ? events[lineIndex][1].start : event[1].end
          );
          events.splice(lineIndex || index3, 0, ["exit", listItem2, event[2]]);
          index3++;
          length3++;
        }
        if (event[1].type === "listItemPrefix") {
          const item = {
            type: "listItem",
            _spread: false,
            start: Object.assign({}, event[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          listItem2 = item;
          events.splice(index3, 0, ["enter", item, event[2]]);
          index3++;
          length3++;
          firstBlankLineIndex = void 0;
          atMarker = true;
        }
      }
    }
    events[start][1]._spread = listSpread;
    return length3;
  }
  function opener(create3, and) {
    return open;
    function open(token) {
      enter.call(this, create3(token), token);
      if (and)
        and.call(this, token);
    }
  }
  function buffer() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function enter(node2, token, errorHandler3) {
    const parent = this.stack[this.stack.length - 1];
    const siblings = parent.children;
    siblings.push(node2);
    this.stack.push(node2);
    this.tokenStack.push([token, errorHandler3]);
    node2.position = {
      start: point2(token.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and)
        and.call(this, token);
      exit2.call(this, token);
    }
  }
  function exit2(token, onExitError) {
    const node2 = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error(
        "Cannot close `" + token.type + "` (" + stringifyPosition({
          start: token.start,
          end: token.end
        }) + "): it\u2019s not open"
      );
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node2.position.end = point2(token.end);
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterlistordered() {
    this.data.expectingFirstListItemValue = true;
  }
  function onenterlistitemvalue(token) {
    if (this.data.expectingFirstListItemValue) {
      const ancestor = this.stack[this.stack.length - 2];
      ancestor.start = Number.parseInt(this.sliceSerialize(token), 10);
      this.data.expectingFirstListItemValue = void 0;
    }
  }
  function onexitcodefencedfenceinfo() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.lang = data2;
  }
  function onexitcodefencedfencemeta() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.meta = data2;
  }
  function onexitcodefencedfence() {
    if (this.data.flowCodeInside)
      return;
    this.buffer();
    this.data.flowCodeInside = true;
  }
  function onexitcodefenced() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
    this.data.flowCodeInside = void 0;
  }
  function onexitcodeindented() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2.replace(/(\r?\n|\r)$/g, "");
  }
  function onexitdefinitionlabelstring(token) {
    const label = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.label = label;
    node2.identifier = normalizeIdentifier(
      this.sliceSerialize(token)
    ).toLowerCase();
  }
  function onexitdefinitiontitlestring() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.title = data2;
  }
  function onexitdefinitiondestinationstring() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.url = data2;
  }
  function onexitatxheadingsequence(token) {
    const node2 = this.stack[this.stack.length - 1];
    if (!node2.depth) {
      const depth = this.sliceSerialize(token).length;
      node2.depth = depth;
    }
  }
  function onexitsetextheadingtext() {
    this.data.setextHeadingSlurpLineEnding = true;
  }
  function onexitsetextheadinglinesequence(token) {
    const node2 = this.stack[this.stack.length - 1];
    node2.depth = this.sliceSerialize(token).codePointAt(0) === 61 ? 1 : 2;
  }
  function onexitsetextheading() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function onenterdata(token) {
    const node2 = this.stack[this.stack.length - 1];
    const siblings = node2.children;
    let tail = siblings[siblings.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text3();
      tail.position = {
        start: point2(token.start),
        // @ts-expect-error: we’ll add `end` later.
        end: void 0
      };
      siblings.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token);
    tail.position.end = point2(token.end);
  }
  function onexitlineending(token) {
    const context = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const tail = context.children[context.children.length - 1];
      tail.position.end = point2(token.end);
      this.data.atHardBreak = void 0;
      return;
    }
    if (!this.data.setextHeadingSlurpLineEnding && config3.canContainEols.includes(context.type)) {
      onenterdata.call(this, token);
      onexitdata.call(this, token);
    }
  }
  function onexithardbreak() {
    this.data.atHardBreak = true;
  }
  function onexithtmlflow() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2;
  }
  function onexithtmltext() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2;
  }
  function onexitcodetext() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2;
  }
  function onexitlink() {
    const node2 = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const referenceType = this.data.referenceType || "shortcut";
      node2.type += "Reference";
      node2.referenceType = referenceType;
      delete node2.url;
      delete node2.title;
    } else {
      delete node2.identifier;
      delete node2.label;
    }
    this.data.referenceType = void 0;
  }
  function onexitimage() {
    const node2 = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const referenceType = this.data.referenceType || "shortcut";
      node2.type += "Reference";
      node2.referenceType = referenceType;
      delete node2.url;
      delete node2.title;
    } else {
      delete node2.identifier;
      delete node2.label;
    }
    this.data.referenceType = void 0;
  }
  function onexitlabeltext(token) {
    const string4 = this.sliceSerialize(token);
    const ancestor = this.stack[this.stack.length - 2];
    ancestor.label = decodeString(string4);
    ancestor.identifier = normalizeIdentifier(string4).toLowerCase();
  }
  function onexitlabel() {
    const fragment = this.stack[this.stack.length - 1];
    const value = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    this.data.inReference = true;
    if (node2.type === "link") {
      const children = fragment.children;
      node2.children = children;
    } else {
      node2.alt = value;
    }
  }
  function onexitresourcedestinationstring() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.url = data2;
  }
  function onexitresourcetitlestring() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.title = data2;
  }
  function onexitresource() {
    this.data.inReference = void 0;
  }
  function onenterreference() {
    this.data.referenceType = "collapsed";
  }
  function onexitreferencestring(token) {
    const label = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.label = label;
    node2.identifier = normalizeIdentifier(
      this.sliceSerialize(token)
    ).toLowerCase();
    this.data.referenceType = "full";
  }
  function onexitcharacterreferencemarker(token) {
    this.data.characterReferenceType = token.type;
  }
  function onexitcharacterreferencevalue(token) {
    const data2 = this.sliceSerialize(token);
    const type = this.data.characterReferenceType;
    let value;
    if (type) {
      value = decodeNumericCharacterReference(
        data2,
        type === "characterReferenceMarkerNumeric" ? 10 : 16
      );
      this.data.characterReferenceType = void 0;
    } else {
      const result = decodeNamedCharacterReference(data2);
      value = result;
    }
    const tail = this.stack.pop();
    tail.value += value;
    tail.position.end = point2(token.end);
  }
  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token);
    const node2 = this.stack[this.stack.length - 1];
    node2.url = this.sliceSerialize(token);
  }
  function onexitautolinkemail(token) {
    onexitdata.call(this, token);
    const node2 = this.stack[this.stack.length - 1];
    node2.url = "mailto:" + this.sliceSerialize(token);
  }
  function blockQuote2() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function codeFlow() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function codeText2() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function definition2() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function emphasis() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function heading() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function hardBreak() {
    return {
      type: "break"
    };
  }
  function html() {
    return {
      type: "html",
      value: ""
    };
  }
  function image() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function link() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function list2(token) {
    return {
      type: "list",
      ordered: token.type === "listOrdered",
      start: null,
      spread: token._spread,
      children: []
    };
  }
  function listItem(token) {
    return {
      type: "listItem",
      spread: token._spread,
      checked: null,
      children: []
    };
  }
  function paragraph() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function strong() {
    return {
      type: "strong",
      children: []
    };
  }
  function text3() {
    return {
      type: "text",
      value: ""
    };
  }
  function thematicBreak2() {
    return {
      type: "thematicBreak"
    };
  }
}
function point2(d2) {
  return {
    line: d2.line,
    column: d2.column,
    offset: d2.offset
  };
}
function configure(combined, extensions) {
  let index3 = -1;
  while (++index3 < extensions.length) {
    const value = extensions[index3];
    if (Array.isArray(value)) {
      configure(combined, value);
    } else {
      extension(combined, value);
    }
  }
}
function extension(combined, extension2) {
  let key;
  for (key in extension2) {
    if (own2.call(extension2, key)) {
      switch (key) {
        case "canContainEols": {
          const right = extension2[key];
          if (right) {
            combined[key].push(...right);
          }
          break;
        }
        case "transforms": {
          const right = extension2[key];
          if (right) {
            combined[key].push(...right);
          }
          break;
        }
        case "enter":
        case "exit": {
          const right = extension2[key];
          if (right) {
            Object.assign(combined[key], right);
          }
          break;
        }
      }
    }
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error(
      "Cannot close `" + left.type + "` (" + stringifyPosition({
        start: left.start,
        end: left.end
      }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is open"
    );
  } else {
    throw new Error(
      "Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is still open"
    );
  }
}

// node_modules/.pnpm/remark-parse@11.0.0/node_modules/remark-parse/lib/index.js
function remarkParse(options) {
  const self = this;
  self.parser = parser;
  function parser(doc) {
    return fromMarkdown(doc, {
      ...self.data("settings"),
      ...options,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: self.data("micromarkExtensions") || [],
      mdastExtensions: self.data("fromMarkdownExtensions") || []
    });
  }
}

// node_modules/.pnpm/remark-wiki-link@2.0.1/node_modules/remark-wiki-link/dist/index.js
var e = { d: (t2, r2) => {
  for (var n2 in r2)
    e.o(r2, n2) && !e.o(t2, n2) && Object.defineProperty(t2, n2, { enumerable: true, get: r2[n2] });
}, o: (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2) };
var t = {};
e.d(t, { Z: () => h2, $: () => k2 });
var r = { horizontalTab: -2, virtualSpace: -1, nul: 0, eof: null, space: 32 };
function n(e2) {
  return e2 < r.nul || e2 === r.space;
}
function i(e2) {
  return e2 < r.horizontalTab;
}
var a = { 553: (e2) => {
  e2.exports = function(e3) {
    var t2, r2;
    return e3._compiled || (t2 = e3.before ? "(?:" + e3.before + ")" : "", r2 = e3.after ? "(?:" + e3.after + ")" : "", e3.atBreak && (t2 = "[\\r\\n][\\t ]*" + t2), e3._compiled = new RegExp((t2 ? "(" + t2 + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e3.character) ? "\\" : "") + e3.character + (r2 || ""), "g")), e3._compiled;
  };
}, 112: (e2) => {
  function t2(e3, t3, r2) {
    var n2;
    if (!t3)
      return r2;
    for ("string" == typeof t3 && (t3 = [t3]), n2 = -1; ++n2 < t3.length; )
      if (-1 !== e3.indexOf(t3[n2]))
        return true;
    return false;
  }
  e2.exports = function(e3, r2) {
    return t2(e3, r2.inConstruct, true) && !t2(e3, r2.notInConstruct);
  };
}, 113: (e2, t2, r2) => {
  e2.exports = function(e3, t3, r3) {
    for (var s2, u2, l3, c2, f3, k3, h3, p2, d2 = (r3.before || "") + (t3 || "") + (r3.after || ""), x = [], w = [], v2 = {}, g = -1; ++g < e3.unsafe.length; )
      if (c2 = e3.unsafe[g], i2(e3.stack, c2))
        for (f3 = n2(c2); k3 = f3.exec(d2); )
          s2 = "before" in c2 || c2.atBreak, u2 = "after" in c2, l3 = k3.index + (s2 ? k3[1].length : 0), -1 === x.indexOf(l3) ? (x.push(l3), v2[l3] = { before: s2, after: u2 }) : (v2[l3].before && !s2 && (v2[l3].before = false), v2[l3].after && !u2 && (v2[l3].after = false));
    for (x.sort(a2), h3 = r3.before ? r3.before.length : 0, p2 = d2.length - (r3.after ? r3.after.length : 0), g = -1; ++g < x.length; )
      (l3 = x[g]) < h3 || l3 >= p2 || l3 + 1 < p2 && x[g + 1] === l3 + 1 && v2[l3].after && !v2[l3 + 1].before && !v2[l3 + 1].after || (h3 !== l3 && w.push(o2(d2.slice(h3, l3), "\\")), h3 = l3, !/[!-/:-@[-`{-~]/.test(d2.charAt(l3)) || r3.encode && -1 !== r3.encode.indexOf(d2.charAt(l3)) ? (w.push("&#x" + d2.charCodeAt(l3).toString(16).toUpperCase() + ";"), h3++) : w.push("\\"));
    return w.push(o2(d2.slice(h3, p2), r3.after)), w.join("");
  };
  var n2 = r2(553), i2 = r2(112);
  function a2(e3, t3) {
    return e3 - t3;
  }
  function o2(e3, t3) {
    for (var r3, n3 = /\\(?=[!-/:-@[-`{-~])/g, i3 = [], a3 = [], o3 = -1, s2 = 0, u2 = e3 + t3; r3 = n3.exec(u2); )
      i3.push(r3.index);
    for (; ++o3 < i3.length; )
      s2 !== i3[o3] && a3.push(e3.slice(s2, i3[o3])), a3.push("\\"), s2 = i3[o3];
    return a3.push(e3.slice(s2)), a3.join("");
  }
} };
var o = {};
function s(e2) {
  var t2 = o[e2];
  if (void 0 !== t2)
    return t2.exports;
  var r2 = o[e2] = { exports: {} };
  return a[e2](r2, r2.exports, s), r2.exports;
}
s.n = (e2) => {
  var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
  return s.d(t2, { a: t2 }), t2;
}, s.d = (e2, t2) => {
  for (var r2 in t2)
    s.o(t2, r2) && !s.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
}, s.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2);
var u = {};
(() => {
  function e2(e3 = {}) {
    const t3 = e3.permalinks || [], r3 = e3.pageResolver || ((e4) => [e4.replace(/ /g, "_").toLowerCase()]), n3 = e3.newClassName || "new", i2 = e3.wikiLinkClassName || "internal", a2 = e3.hrefTemplate || ((e4) => `#/page/${e4}`);
    let o2;
    function s2(e4) {
      return e4[e4.length - 1];
    }
    return { enter: { wikiLink: function(e4) {
      o2 = { type: "wikiLink", value: null, data: { alias: null, permalink: null, exists: null } }, this.enter(o2, e4);
    } }, exit: { wikiLinkTarget: function(e4) {
      const t4 = this.sliceSerialize(e4);
      s2(this.stack).value = t4;
    }, wikiLinkAlias: function(e4) {
      const t4 = this.sliceSerialize(e4);
      s2(this.stack).data.alias = t4;
    }, wikiLink: function(e4) {
      this.exit(e4);
      const s3 = o2, u2 = r3(s3.value), l3 = u2.find((e5) => -1 !== t3.indexOf(e5)), c2 = void 0 !== l3;
      let f3;
      f3 = c2 ? l3 : u2[0] || "";
      let k3 = s3.value;
      s3.data.alias && (k3 = s3.data.alias);
      let h3 = i2;
      c2 || (h3 += " " + n3), s3.data.alias = k3, s3.data.permalink = f3, s3.data.exists = c2, s3.data.hName = "a", s3.data.hProperties = { className: h3, href: a2(f3) }, s3.data.hChildren = [{ type: "text", value: k3 }];
    } } };
  }
  s.d(u, { V: () => e2, x: () => n2 });
  var t2 = s(113), r2 = s.n(t2);
  function n2(e3 = {}) {
    const t3 = e3.aliasDivider || ":";
    return { unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }, { character: "]", inConstruct: ["label", "reference"] }], handlers: { wikiLink: function(e4, n3, i2) {
      const a2 = i2.enter("wikiLink"), o2 = r2()(i2, e4.value, { before: "[", after: "]" }), s2 = r2()(i2, e4.data.alias, { before: "[", after: "]" });
      let u2;
      return u2 = s2 !== o2 ? `[[${o2}${t3}${s2}]]` : `[[${o2}]]`, a2(), u2;
    } } };
  }
})();
var l2 = u.V;
var c = u.x;
var f = false;
function k2(e2 = {}) {
  const t2 = this.data();
  function a2(e3, r2) {
    t2[e3] ? t2[e3].push(r2) : t2[e3] = [r2];
  }
  !f && (this.Parser && this.Parser.prototype && this.Parser.prototype.blockTokenizers || this.Compiler && this.Compiler.prototype && this.Compiler.prototype.visitors) && (f = true, console.warn("[remark-wiki-link] Warning: please upgrade to remark 13 to use this plugin")), a2("micromarkExtensions", function() {
    var e3 = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).aliasDivider || ":", t3 = "]]";
    return { text: { 91: { tokenize: function(a3, o2, s2) {
      var u2, l3, c2 = 0, f3 = 0, k3 = 0;
      return function(e4) {
        return e4 !== "[[".charCodeAt(f3) ? s2(e4) : (a3.enter("wikiLink"), a3.enter("wikiLinkMarker"), h3(e4));
      };
      function h3(e4) {
        return 2 === f3 ? (a3.exit("wikiLinkMarker"), function(e5) {
          return i(e5) || e5 === r.eof ? s2(e5) : (a3.enter("wikiLinkData"), a3.enter("wikiLinkTarget"), p2(e5));
        }(e4)) : e4 !== "[[".charCodeAt(f3) ? s2(e4) : (a3.consume(e4), f3++, h3);
      }
      function p2(o3) {
        return o3 === e3.charCodeAt(c2) ? u2 ? (a3.exit("wikiLinkTarget"), a3.enter("wikiLinkAliasMarker"), d2(o3)) : s2(o3) : o3 === t3.charCodeAt(k3) ? u2 ? (a3.exit("wikiLinkTarget"), a3.exit("wikiLinkData"), a3.enter("wikiLinkMarker"), w(o3)) : s2(o3) : i(o3) || o3 === r.eof ? s2(o3) : (n(o3) || (u2 = true), a3.consume(o3), p2);
      }
      function d2(t4) {
        return c2 === e3.length ? (a3.exit("wikiLinkAliasMarker"), a3.enter("wikiLinkAlias"), x(t4)) : t4 !== e3.charCodeAt(c2) ? s2(t4) : (a3.consume(t4), c2++, d2);
      }
      function x(e4) {
        return e4 === t3.charCodeAt(k3) ? l3 ? (a3.exit("wikiLinkAlias"), a3.exit("wikiLinkData"), a3.enter("wikiLinkMarker"), w(e4)) : s2(e4) : i(e4) || e4 === r.eof ? s2(e4) : (n(e4) || (l3 = true), a3.consume(e4), x);
      }
      function w(e4) {
        return 2 === k3 ? (a3.exit("wikiLinkMarker"), a3.exit("wikiLink"), o2(e4)) : e4 !== t3.charCodeAt(k3) ? s2(e4) : (a3.consume(e4), k3++, w);
      }
    } } } };
  }(e2)), a2("fromMarkdownExtensions", l2(e2)), a2("toMarkdownExtensions", c(e2));
}
var h2 = k2;
var p = t.Z;
var d = t.$;

// src/api.ts
var systemTitles = ["bs-home", "bs-sidebar"];

// src/PostForm.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var { TextArea } = import_antd.Input;
var { Option } = import_antd.Select;
var PostForm = ({ onOk, initialIssuer, initialTitle, initialText, initialIndexed }) => {
  const token = import_antd.theme.useToken();
  const [title, setTitle] = (0, import_react14.useState)(initialTitle || "");
  const [shouldBeIndexed, setShouldBeIndexed] = (0, import_react14.useState)(initialIndexed || false);
  const [post, setPost] = (0, import_react14.useState)(initialText || window.localStorage.getItem("bs-post") || "");
  const { agent } = (0, import_veramo_react.useVeramo)();
  const [isSaving, setIsSaving] = (0, import_react14.useState)(false);
  (0, import_react14.useEffect)(() => {
    window.localStorage.setItem("bs-post", post);
  }, [post]);
  const handleCreatePost = async (did, issuerAgent) => {
    setIsSaving(true);
    try {
      let visitWikiLinks2 = function(node2) {
        if (node2.type === "wikiLink") {
          const didHash = node2.value.split("|")[0];
          if (!references.includes(didHash)) {
            references.push(didHash);
          }
        }
        if (node2.children) {
          for (const child of node2.children) {
            visitWikiLinks2(child);
          }
        }
      };
      var visitWikiLinks = visitWikiLinks2;
      const parser = unified().use(remarkParse).use(p, { aliasDivider: "|" });
      const root = parser.parse(post);
      const references = root.children.filter((token2) => {
        return token2.type === "code" && token2.lang === "vc+multihash";
      }).map((token2) => {
        return token2.value;
      });
      visitWikiLinks2(root);
      const credentialSubject = references && references.length > 0 ? {
        title,
        shouldBeIndexed,
        post,
        references
      } : {
        title,
        shouldBeIndexed,
        post
      };
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
          credentialSubject
        }
      });
      if (credential) {
        const hash3 = await agent?.dataStoreSaveVerifiableCredential({ verifiableCredential: credential });
        if (hash3) {
          if (shouldBeIndexed && proofFormat === "jwt") {
            const credentials = await agent?.dataStoreORMGetVerifiableCredentials({
              where: [
                { column: "type", value: ["VerifiableCredential,BrainSharePost"] },
                { column: "issuer", value: [did] }
              ]
            });
            const indexableCreds = credentials?.filter((cred) => cred.verifiableCredential.credentialSubject.shouldBeIndexed);
            if (indexableCreds) {
              const index3 = /* @__PURE__ */ new Map();
              indexableCreds.forEach((cred) => {
                let revisions = index3.get(cred.verifiableCredential.credentialSubject.title);
                if (!revisions) {
                  revisions = [];
                }
                revisions = [...revisions, cred.hash];
                index3.set(cred.verifiableCredential.credentialSubject.title, revisions);
              });
              const indexCred = await issuerAgent.createVerifiableCredential({
                save: true,
                proofFormat,
                credential: {
                  "@context": ["https://www.w3.org/2018/credentials/v1"],
                  type: ["VerifiableCredential", "BrainShareIndex"],
                  issuer: { id: did },
                  issuanceDate: (/* @__PURE__ */ new Date()).toISOString(),
                  credentialSubject: {
                    index: Object.fromEntries(index3.entries())
                  }
                }
              });
              if (indexCred) {
                await agent?.dataStoreSaveVerifiableCredential({ verifiableCredential: indexCred });
              }
            }
          }
          window.localStorage.removeItem("bs-post");
          onOk(did, hash3);
        }
      }
    } catch (e2) {
      console.error(e2);
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
              !systemTitles.includes(title) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Input, { value: title, onChange: (e2) => setTitle(e2.target.value), placeholder: "Title (optional)" }),
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
                  onChange: (e2) => {
                    setPost(e2 || "");
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
      !systemTitles.includes(title) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Checkbox, { defaultChecked: shouldBeIndexed, onChange: (e2) => setShouldBeIndexed(e2.target.checked), children: "Index" })
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
var import_react_query3 = __toESM(require_react_query(), 1);
var import_veramo_react4 = __toESM(require_veramo_react(), 1);
var import_pro_components2 = __toESM(require_pro_components(), 1);
var import_antd5 = __toESM(require_antd(), 1);
var import_agent_explorer_plugin5 = __toESM(require_agent_explorer_plugin(), 1);

// src/ReferencesFeed.tsx
var import_react_query2 = __toESM(require_react_query(), 1);
var import_veramo_react3 = __toESM(require_veramo_react(), 1);
var import_agent_explorer_plugin3 = __toESM(require_agent_explorer_plugin(), 1);
var import_antd3 = __toESM(require_antd(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var ReferencesFeed = ({ referenceHashes }) => {
  const { agent } = (0, import_veramo_react3.useVeramo)();
  const { data: credentials, isLoading } = (0, import_react_query2.useQuery)(
    ["brainshare-posts", { agentId: agent?.context.name }],
    () => agent?.dataStoreORMGetVerifiableCredentials({
      where: [
        { column: "type", value: ["VerifiableCredential,BrainSharePost"] },
        { column: "hash", value: referenceHashes, op: "In" }
      ],
      order: [{ column: "issuanceDate", direction: "DESC" }]
    })
  );
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_antd3.List,
    {
      loading: isLoading,
      itemLayout: "vertical",
      size: "large",
      dataSource: credentials,
      renderItem: (item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_agent_explorer_plugin3.VerifiableCredentialComponent, { credential: item }) })
    }
  );
};

// src/Post.tsx
var import_react18 = __toESM(require_react(), 1);
var import_uuid2 = __toESM(require_uuid(), 1);

// src/didcommUtils.ts
var import_uuid = __toESM(require_uuid(), 1);
async function getPost(agent, did, hash3) {
  let identifier = void 0;
  try {
    identifier = await agent.didManagerGet({ did });
  } catch (e2) {
  }
  if (!identifier) {
    const { didDocument } = await agent.resolveDid({ didUrl: did });
    if (didDocument?.service?.find((service) => service.type === "DIDCommMessaging")) {
      const temporarySender = await agent.didManagerCreate({ provider: "did:key" });
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
        const packedMessage = await agent?.packDIDCommMessage({ message: requestCredMessage, packing: "authcrypt" });
        await agent.sendDIDCommMessage({ packedMessage, messageId: requestCredMessage.id, recipientDidUrl: did });
        await agent.didManagerDelete({ did: temporarySender.did });
      }
    }
  }
  const localCred = await agent.dataStoreGetVerifiableCredential({ hash: hash3 });
  console.log("localCred: ", localCred);
  return localCred;
}
async function getIndex(agent, did) {
  console.log("get index for DID: ", did);
  let identifier = void 0;
  try {
    identifier = await agent.didManagerGet({ did });
  } catch (e2) {
  }
  if (!identifier) {
    const { didDocument } = await agent.resolveDid({ didUrl: did });
    if (didDocument?.service?.find((service) => service.type === "DIDCommMessaging")) {
      const temporarySender = await agent.didManagerCreate({ provider: "did:key" });
      if (temporarySender) {
        const requestCredMessage = {
          type: "https://veramo.io/didcomm/brainshare/1.0/request-index",
          from: temporarySender.did,
          to: did,
          id: (0, import_uuid.v4)(),
          body: {},
          return_route: "all"
        };
        console.log("getIndex 2");
        const packedMessage = await agent?.packDIDCommMessage({ message: requestCredMessage, packing: "authcrypt" });
        await agent?.sendDIDCommMessage({ packedMessage, messageId: requestCredMessage.id, recipientDidUrl: did });
        await agent.didManagerDelete({ did: temporarySender.did });
      }
    }
  }
  console.log("getIndex 3");
  const localCreds = await agent?.dataStoreORMGetVerifiableCredentials({
    where: [
      { column: "type", value: ["VerifiableCredential,BrainShareIndex"] },
      { column: "issuer", value: [did] }
    ]
  });
  console.log("indexes??", localCreds);
  return localCreds[localCreds.length - 1]?.verifiableCredential;
}

// src/BrainSharePost.tsx
var import_agent_explorer_plugin4 = __toESM(require_agent_explorer_plugin(), 1);
var import_antd4 = __toESM(require_antd(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var BrainSharePost = ({ credential, context }) => {
  const { token } = import_antd4.theme.useToken();
  const { title, post } = credential.verifiableCredential.credentialSubject;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { marginTop: token.margin }, children: [
    context?.hideTitle !== true && title && !systemTitles.includes(title) && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { children: title }),
    context?.hideTitle !== true && title && systemTitles.includes(title) && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_antd4.Tag, { children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_agent_explorer_plugin4.MarkDown, { content: post, credential, context })
  ] });
};

// src/Post.tsx
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var Post = () => {
  const { id, did } = (0, import_react_router_dom2.useParams)();
  const { agents } = (0, import_veramo_react4.useVeramo)();
  const [refDrawerOpen, setRefDrawerOpen] = (0, import_react17.useState)(false);
  const [credential, setCredential] = (0, import_react17.useState)(null);
  const [credentialLoading, setCredentialLoading] = (0, import_react17.useState)(true);
  const { token } = import_antd5.theme.useToken();
  const [index3, setIndex] = (0, import_react17.useState)(null);
  const [sidebar, setSidebar] = (0, import_react17.useState)(null);
  const [loading, setLoading] = (0, import_react17.useState)(true);
  const agent = import_react17.default.useMemo(() => {
    return agents.find((agent2) => agent2.context.id === "web3Agent");
  }, [agents]);
  console.log("id: ", id);
  if (!id)
    return null;
  (0, import_react18.useEffect)(() => {
    const loadIndex = async () => {
      if (!agent || !did)
        return;
      const index4 = await getIndex(agent, did);
      if (index4) {
        setIndex(index4);
        console.log("index: ", index4);
        const indexMap = index4.credentialSubject.index;
        if (indexMap["bs-sidebar"]) {
          const sidebarHash = indexMap["bs-sidebar"][indexMap["bs-sidebar"].length - 1];
          console.log("sidebarHash: ", sidebarHash);
          const sidebar2 = await getPost(agent, did, sidebarHash);
          console.log("sidebar: ", sidebar2);
          setSidebar({ hash: sidebarHash, verifiableCredential: sidebar2 });
        }
      }
      setLoading(false);
    };
    loadIndex();
  }, [did, id]);
  (0, import_react18.useEffect)(() => {
    const getCredential = async () => {
      try {
        const localCred = await agent?.dataStoreGetVerifiableCredential({ hash: id });
        setCredential(localCred);
        setCredentialLoading(false);
      } catch (ex) {
        console.log("credential not found locally");
      }
      if (!credential && did) {
        let identifier = void 0;
        try {
          identifier = await agent?.didManagerGet({ did });
        } catch (e2) {
        }
        if (!identifier) {
          const result = await agent?.resolveDid({ didUrl: did });
          if (result?.didDocument?.service?.find((service) => service.type === "DIDCommMessaging")) {
            const temporarySender = await agent?.didManagerCreate({ provider: "did:key" });
            if (temporarySender) {
              const requestCredMessage = {
                type: "https://veramo.io/didcomm/brainshare/1.0/request-credential",
                from: temporarySender.did,
                to: did,
                id: (0, import_uuid2.v4)(),
                body: {
                  hash: id
                },
                return_route: "all"
              };
              const packedMessage = await agent?.packDIDCommMessage({ message: requestCredMessage, packing: "authcrypt" });
              await agent?.sendDIDCommMessage({ packedMessage, messageId: requestCredMessage.id, recipientDidUrl: did });
              await agent?.didManagerDelete({ did: temporarySender.did });
            }
          }
        }
        const localCred = await agent?.dataStoreGetVerifiableCredential({ hash: id });
        setCredential(localCred);
        setCredentialLoading(false);
      }
    };
    getCredential();
  }, [did, id]);
  const { data: references, isLoading: referencesLoading } = (0, import_react_query3.useQuery)(
    ["references", { id }],
    () => {
      return agent?.dataStoreORMGetVerifiableCredentialsByClaims({
        where: [
          {
            column: "type",
            value: ["references"]
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
  if (credentialLoading)
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_antd5.Spin, {});
  if (!credential)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    import_pro_components2.PageContainer,
    {
      loading: credentialLoading,
      style: { paddingTop: 10 },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_antd5.Row, { gutter: 16, children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_antd5.Col, { xs: 24, sm: 16, style: { overflow: "hidden", paddingRight: token.margin }, children: credential && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_agent_explorer_plugin5.VerifiableCredentialComponent, { credential: { hash: id, verifiableCredential: credential } }) }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_antd5.Col, { xs: 24, sm: 8, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_antd5.Collapse,
            {
              accordion: true,
              size: "small",
              defaultActiveKey: ["0"],
              items: [
                {
                  key: "0",
                  label: `Sidebar`,
                  children: sidebar && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(BrainSharePost, { credential: sidebar, context: { hideTitle: true } })
                },
                {
                  key: "1",
                  label: index3 ? `Index (${Object.keys(index3.credentialSubject.index).length})` : "Index",
                  children: index3 && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("ul", { children: Object.keys(index3.credentialSubject.index).map((item, key) => {
                    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: `/brainshare/${did}/${index3.credentialSubject.index[item][0]}`, children: item }) }, key);
                  }) })
                }
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_antd5.Row, { children: references && references.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_antd5.Button, { type: "text", onClick: () => setRefDrawerOpen(true), children: [
          "Referenced by ",
          references.length,
          " other posts"
        ] }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          import_antd5.Drawer,
          {
            title: "Posts that reference this one",
            placement: "right",
            onClose: () => setRefDrawerOpen(false),
            open: refDrawerOpen,
            width: 800,
            destroyOnClose: true,
            children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ReferencesFeed, { referenceHashes: references?.map((cred) => cred.hash) })
          }
        )
      ]
    }
  );
};

// src/Home.tsx
var import_react_router_dom4 = __toESM(require_react_router_dom(), 1);

// src/Landing.tsx
var import_react19 = __toESM(require_react(), 1);
var import_veramo_react5 = __toESM(require_veramo_react(), 1);
var import_antd6 = __toESM(require_antd(), 1);
var import_react_router_dom3 = __toESM(require_react_router_dom(), 1);
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var Landing = ({
  did
}) => {
  const { token } = import_antd6.theme.useToken();
  const navigate = (0, import_react_router_dom3.useNavigate)();
  const { agents } = (0, import_veramo_react5.useVeramo)();
  const [index3, setIndex] = (0, import_react19.useState)(null);
  const [sidebar, setSidebar] = (0, import_react19.useState)(null);
  const [post, setPost] = (0, import_react19.useState)(null);
  const [loading, setLoading] = (0, import_react19.useState)(true);
  const agent = import_react19.default.useMemo(() => {
    return agents.find((agent2) => agent2.context.id === "web3Agent");
  }, [agents]);
  if (!did)
    return null;
  if (!agent)
    return null;
  (0, import_react19.useEffect)(() => {
    const loadIndex = async () => {
      const index4 = await getIndex(agent, did);
      if (index4) {
        setIndex(index4);
        console.log("index: ", index4);
        const indexMap = index4.credentialSubject.index;
        if (indexMap["bs-sidebar"]) {
          const sidebarHash = indexMap["bs-sidebar"][indexMap["bs-sidebar"].length - 1];
          console.log("sidebarHash: ", sidebarHash);
          const sidebar2 = await getPost(agent, did, sidebarHash);
          console.log("sidebar: ", sidebar2);
          setSidebar({ hash: sidebarHash, verifiableCredential: sidebar2 });
        }
        if (indexMap["bs-home"]) {
          const homeHash = indexMap["bs-home"][indexMap["bs-home"].length - 1];
          console.log("home hash: ", homeHash);
          setPost({ hash: homeHash, verifiableCredential: await getPost(agent, did, homeHash) });
        }
      }
      setLoading(false);
    };
    loadIndex();
  }, [did]);
  if (loading)
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_antd6.Spin, {});
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_antd6.Row, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_antd6.Col, { xs: 24, sm: 16, style: { overflow: "hidden", paddingRight: token.margin }, children: [
      post && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(BrainSharePost, { credential: post, context: { hideTitle: true } }),
      !post && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_antd6.Button, { type: "primary", onClick: () => navigate("/brainshare/compose/bs-home"), children: "Compose" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_antd6.Col, { xs: 24, sm: 8, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      import_antd6.Collapse,
      {
        accordion: true,
        size: "small",
        defaultActiveKey: ["0"],
        items: [
          {
            key: "0",
            label: `Sidebar`,
            children: sidebar ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(BrainSharePost, { credential: sidebar, context: { hideTitle: true } }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_antd6.Button, { type: "primary", onClick: () => navigate("/brainshare/compose/bs-sidebar"), children: "Compose" })
          },
          {
            key: "1",
            label: index3 ? `Index (${Object.keys(index3.credentialSubject.index).length})` : "Index",
            children: index3 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { children: Object.keys(index3.credentialSubject.index).map((item, key) => {
              return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", { href: `/brainshare/${did}/${index3.credentialSubject.index[item][0]}`, children: item }) }, key);
            }) })
          }
        ]
      }
    ) })
  ] });
};

// src/Home.tsx
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var Home = () => {
  const { did } = (0, import_react_router_dom4.useParams)();
  if (!did)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Landing, { did });
};

// src/LinkDomain.tsx
var import_react20 = __toESM(require_react(), 1);
var import_react_router_dom5 = __toESM(require_react_router_dom(), 1);
var import_react_query4 = __toESM(require_react_query(), 1);
var import_veramo_react6 = __toESM(require_veramo_react(), 1);
var import_pro_components3 = __toESM(require_pro_components(), 1);
var import_agent_explorer_plugin6 = __toESM(require_agent_explorer_plugin(), 1);
var import_antd7 = __toESM(require_antd(), 1);
var import_uuid3 = __toESM(require_uuid(), 1);
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var LinkDomain = () => {
  const [drawerOpen, setDrawerOpen] = (0, import_react20.useState)(false);
  const [did, setDID] = (0, import_react20.useState)("");
  const [domain, setDomain] = (0, import_react20.useState)("");
  const [selectedDid, setSelectedDid] = (0, import_react20.useState)("");
  const navigate = (0, import_react_router_dom5.useNavigate)();
  const { agent } = (0, import_veramo_react6.useVeramo)();
  const [issuerProfile, setIssuerProfile] = (0, import_react20.useState)();
  const [managedIdentifiers, setManagedIdentifiers] = (0, import_react20.useState)([]);
  const [
    managedIdentifiersWithProfiles,
    setManagedIdentifiersWithProfiles
  ] = (0, import_react20.useState)([]);
  (0, import_react_query4.useQuery)(
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
      id: (0, import_uuid3.v4)(),
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_pro_components3.PageContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_antd7.Input, { value: domain, onChange: (e2) => setDomain(e2.target.value), placeholder: "www.google.com" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_antd7.Input, { value: did, onChange: (e2) => setDID(e2.target.value), placeholder: "did:web:staging.community.veramo.io" }),
    managedIdentifiersWithProfiles.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      import_antd7.Dropdown.Button,
      {
        type: "primary",
        onClick: checkLinkage,
        disabled: domain === "",
        icon: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_antd7.Avatar, { size: "small", src: issuerProfile?.picture }),
        menu: {
          items: [
            ...managedIdentifiersWithProfiles.map((profile) => {
              return {
                key: profile.did,
                onClick: () => {
                  setIssuerProfile(profile);
                  setSelectedDid(profile.did);
                },
                label: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_agent_explorer_plugin6.IdentifierProfile, { did: profile.did })
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
var import_agent_explorer_plugin7 = __toESM(require_agent_explorer_plugin(), 1);
var import_antd8 = __toESM(require_antd(), 1);
var import_react_router_dom6 = __toESM(require_react_router_dom(), 1);
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var getCredentialContextMenuItems = (credential) => {
  const navigate = (0, import_react_router_dom6.useNavigate)();
  const { notification } = import_antd8.App.useApp();
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
${(0, import_agent_explorer_plugin7.getIssuerDID)(credential.verifiableCredential)}/${credential.hash}
\`\`\``;
    navigator.clipboard.writeText(reference);
    notification.success({
      message: "Credential reference copied to clipboard"
    });
  };
  const handleCopyWikilink = () => {
    const wikilink = credential.verifiableCredential.credentialSubject.title ? `[[${(0, import_agent_explorer_plugin7.getIssuerDID)(credential.verifiableCredential)}/${credential.hash}|${credential.verifiableCredential.credentialSubject.title}]]` : `[[${(0, import_agent_explorer_plugin7.getIssuerDID)(credential.verifiableCredential)}/${credential.hash}]]`;
    navigator.clipboard.writeText(wikilink);
    notification.success({
      message: "Credential wikilink copied to clipboard"
    });
  };
  const defaultItems = [
    {
      key: "copy-wiki",
      label: "Copy wiki link",
      icon: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(LinkOutlined_default2, {}),
      onClick: handleCopyWikilink
    },
    {
      key: "embed",
      label: "Copy embed",
      icon: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(PicLeftOutlined_default2, {}),
      onClick: handleCopyEmbed
    },
    {
      key: "reference",
      label: "Copy reference",
      icon: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(PicLeftOutlined_default2, {}),
      onClick: handleCopyReference
    }
  ];
  if (credential.verifiableCredential.type?.includes("BrainSharePost")) {
    return [
      {
        key: "open",
        label: "Open post",
        icon: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(FileSearchOutlined_default2, {}),
        onClick: () => navigate("/brainshare/" + (0, import_agent_explorer_plugin7.getIssuerDID)(credential.verifiableCredential) + "/" + credential.hash)
      },
      {
        key: "edit",
        label: "New revision",
        icon: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(EditOutlined_default2, {}),
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
var import_react_query5 = __toESM(require_react_query(), 1);
var import_veramo_react7 = __toESM(require_veramo_react(), 1);
var import_pro_components4 = __toESM(require_pro_components(), 1);
var import_antd9 = __toESM(require_antd(), 1);
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var Edit = () => {
  const { notification } = import_antd9.App.useApp();
  const { id } = (0, import_react_router_dom7.useParams)();
  const { agent } = (0, import_veramo_react7.useVeramo)();
  const navigate = (0, import_react_router_dom7.useNavigate)();
  const [refDrawerOpen, setRefDrawerOpen] = (0, import_react21.useState)(false);
  if (!id)
    return null;
  const { data: credential, isLoading: credentialLoading } = (0, import_react_query5.useQuery)(
    ["credential", { id }],
    () => agent?.dataStoreGetVerifiableCredential({ hash: id })
  );
  const { data: references, isLoading: referencesLoading } = (0, import_react_query5.useQuery)(
    ["references", { id }],
    () => {
      return agent?.dataStoreORMGetVerifiableCredentialsByClaims({
        where: [
          {
            column: "type",
            value: ["references"]
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
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    import_pro_components4.PageContainer,
    {
      loading: credentialLoading,
      style: { paddingTop: 10 },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_antd9.Space, { direction: "vertical", style: { width: "100%" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            PostForm,
            {
              onOk: handleNewPost,
              initialIssuer: credential.issuer.id,
              initialTitle: credential.credentialSubject.title,
              initialText: credential.credentialSubject.post,
              initialIndexed: credential.credentialSubject.shouldBeIndexed
            }
          ),
          references && references.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_jsx_runtime10.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_antd9.Button, { type: "text", onClick: () => setRefDrawerOpen(true), children: [
            "Referenced by ",
            references.length,
            " other posts"
          ] }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          import_antd9.Drawer,
          {
            title: "Posts that reference this one",
            placement: "right",
            onClose: () => setRefDrawerOpen(false),
            open: refDrawerOpen,
            width: 800,
            destroyOnClose: true,
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ReferencesFeed, { referenceHashes: references?.map((cred) => cred.hash) })
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
  for (var i2 = 0; i2 < ALPHABET.length; i2++) {
    var x = ALPHABET.charAt(i2);
    var xc = x.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) {
      throw new TypeError(x + " is ambiguous");
    }
    BASE_MAP[xc] = i2;
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
      var i3 = 0;
      for (var it1 = size - 1; (carry !== 0 || i3 < length3) && it1 !== -1; it1--, i3++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length3 = i3;
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
      var i3 = 0;
      for (var it3 = size - 1; (carry !== 0 || i3 < length3) && it3 !== -1; it3--, i3++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length3 = i3;
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
  function decode7(string4) {
    var buffer = decodeUnsafe(string4);
    if (buffer) {
      return buffer;
    }
    throw new Error(`Non-${name2} character`);
  }
  return {
    encode: encode6,
    decodeUnsafe,
    decode: decode7
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
var coerce = (o2) => {
  if (o2 instanceof Uint8Array && o2.constructor.name === "Uint8Array")
    return o2;
  if (o2 instanceof ArrayBuffer)
    return new Uint8Array(o2);
  if (ArrayBuffer.isView(o2)) {
    return new Uint8Array(o2.buffer, o2.byteOffset, o2.byteLength);
  }
  throw new Error("Unknown type, must be binary type");
};
var fromString = (str) => new TextEncoder().encode(str);
var toString2 = (b) => new TextDecoder().decode(b);

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
  decode(text3) {
    if (typeof text3 === "string") {
      if (text3.codePointAt(0) !== this.prefixCodePoint) {
        throw Error(`Unable to decode multibase string ${JSON.stringify(text3)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      }
      return this.baseDecode(text3.slice(this.prefix.length));
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
var from = ({ name: name2, prefix, encode: encode6, decode: decode7 }) => new Codec(name2, prefix, encode6, decode7);
var baseX = ({ prefix, name: name2, alphabet: alphabet3 }) => {
  const { encode: encode6, decode: decode7 } = base_x_default(alphabet3, name2);
  return from({
    prefix,
    name: name2,
    encode: encode6,
    /**
     * @param {string} text
     */
    decode: (text3) => coerce(decode7(text3))
  });
};
var decode2 = (string4, alphabet3, bitsPerChar, name2) => {
  const codes = {};
  for (let i2 = 0; i2 < alphabet3.length; ++i2) {
    codes[alphabet3[i2]] = i2;
  }
  let end = string4.length;
  while (string4[end - 1] === "=") {
    --end;
  }
  const out = new Uint8Array(end * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i2 = 0; i2 < end; ++i2) {
    const value = codes[string4[i2]];
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
  for (let i2 = 0; i2 < data.length; ++i2) {
    buffer = buffer << 8 | data[i2];
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
      return decode2(input, alphabet3, bitsPerChar, name2);
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
    (p2, c2, i2) => {
      p2[i2] = c2;
      return p2;
    },
    /** @type {string[]} */
    []
  )
);
var alphabetCharsToBytes = (
  /** @type {number[]} */
  alphabet.reduce(
    (p2, c2, i2) => {
      p2[
        /** @type {number} */
        c2.codePointAt(0)
      ] = i2;
      return p2;
    },
    /** @type {number[]} */
    []
  )
);
function encode2(data) {
  return data.reduce((p2, c2) => {
    p2 += alphabetBytesToChars[c2];
    return p2;
  }, "");
}
function decode3(str) {
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
  decode: decode3
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
  encode: (buf) => toString2(buf),
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
  decode: () => decode5,
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
var decode4 = read;
var MSB$1 = 128;
var REST$1 = 127;
function read(buf, offset) {
  var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l3 = buf.length;
  do {
    if (counter >= l3) {
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
  decode: decode4,
  encodingLength: length
};
var _brrp_varint = varint;
var varint_default = _brrp_varint;

// node_modules/.pnpm/multiformats@12.1.2/node_modules/multiformats/src/varint.js
var decode5 = (data, offset = 0) => {
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
var decode6 = (multihash) => {
  const bytes3 = coerce(multihash);
  const [code3, sizeOffset] = decode5(bytes3);
  const [size, digestOffset] = decode5(bytes3.subarray(sizeOffset));
  const digest2 = bytes3.subarray(sizeOffset + digestOffset);
  if (digest2.byteLength !== size) {
    throw new Error("Incorrect length");
  }
  return new Digest(code3, size, digest2, bytes3);
};
var equals2 = (a2, b) => {
  if (a2 === b) {
    return true;
  } else {
    const data = (
      /** @type {{code?:unknown, size?:unknown, bytes?:unknown}} */
      b
    );
    return a2.code === data.code && a2.size === data.size && data.bytes instanceof Uint8Array && equals(a2.bytes, data.bytes);
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
        decode6(multihash)
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
      const [i2, length3] = decode5(initialBytes.subarray(offset));
      offset += length3;
      return i2;
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
function createCodec(name2, prefix, encode6, decode7) {
  return {
    name: name2,
    prefix,
    encoder: {
      name: name2,
      prefix,
      encode: encode6
    },
    decoder: {
      decode: decode7
    }
  };
}
var string3 = createCodec("utf8", "u", (buf) => {
  const decoder = new TextDecoder("utf8");
  return "u" + decoder.decode(buf);
}, (str) => {
  const encoder = new TextEncoder();
  return encoder.encode(str.substring(1));
});
var ascii = createCodec("ascii", "a", (buf) => {
  let string4 = "a";
  for (let i2 = 0; i2 < buf.length; i2++) {
    string4 += String.fromCharCode(buf[i2]);
  }
  return string4;
}, (str) => {
  str = str.substring(1);
  const buf = allocUnsafe(str.length);
  for (let i2 = 0; i2 < str.length; i2++) {
    buf[i2] = str.charCodeAt(i2);
  }
  return buf;
});
var BASES = {
  utf8: string3,
  "utf-8": string3,
  hex: bases.base16,
  latin1: ascii,
  ascii,
  binary: ascii,
  ...bases
};
var bases_default = BASES;

// node_modules/.pnpm/uint8arrays@4.0.6/node_modules/uint8arrays/dist/src/from-string.js
function fromString2(string4, encoding = "utf8") {
  const base3 = bases_default[encoding];
  if (base3 == null) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return asUint8Array(globalThis.Buffer.from(string4, "utf-8"));
  }
  return base3.decoder.decode(`${base3.prefix}${string4}`);
}

// node_modules/.pnpm/uint8arrays@4.0.6/node_modules/uint8arrays/dist/src/to-string.js
function toString3(array, encoding = "utf8") {
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
function number(n2) {
  if (!Number.isSafeInteger(n2) || n2 < 0)
    throw new Error(`Wrong positive integer: ${n2}`);
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
var u8a = (a2) => a2 instanceof Uint8Array;
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
  const r2 = new Uint8Array(arrays.reduce((sum, a2) => sum + a2.length, 0));
  let pad = 0;
  arrays.forEach((a2) => {
    if (!u8a(a2))
      throw new Error("Uint8Array expected");
    r2.set(a2, pad);
    pad += a2.length;
  });
  return r2;
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
  const h3 = isLE3 ? 4 : 0;
  const l3 = isLE3 ? 0 : 4;
  view.setUint32(byteOffset + h3, wh, isLE3);
  view.setUint32(byteOffset + l3, wl, isLE3);
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
    for (let i2 = pos; i2 < blockLen; i2++)
      buffer[i2] = 0;
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
    for (let i2 = 0; i2 < outLen; i2++)
      oview.setUint32(4 * i2, state[i2], isLE3);
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
function fromBig(n2, le2 = false) {
  if (le2)
    return { h: Number(n2 & U32_MASK64), l: Number(n2 >> _32n & U32_MASK64) };
  return { h: Number(n2 >> _32n & U32_MASK64) | 0, l: Number(n2 & U32_MASK64) | 0 };
}
function split(lst, le2 = false) {
  let Ah = new Uint32Array(lst.length);
  let Al = new Uint32Array(lst.length);
  for (let i2 = 0; i2 < lst.length; i2++) {
    const { h: h3, l: l3 } = fromBig(lst[i2], le2);
    [Ah[i2], Al[i2]] = [h3, l3];
  }
  return [Ah, Al];
}
var toBig = (h3, l3) => BigInt(h3 >>> 0) << _32n | BigInt(l3 >>> 0);
var shrSH = (h3, _l, s2) => h3 >>> s2;
var shrSL = (h3, l3, s2) => h3 << 32 - s2 | l3 >>> s2;
var rotrSH = (h3, l3, s2) => h3 >>> s2 | l3 << 32 - s2;
var rotrSL = (h3, l3, s2) => h3 << 32 - s2 | l3 >>> s2;
var rotrBH = (h3, l3, s2) => h3 << 64 - s2 | l3 >>> s2 - 32;
var rotrBL = (h3, l3, s2) => h3 >>> s2 - 32 | l3 << 64 - s2;
var rotr32H = (_h, l3) => l3;
var rotr32L = (h3, _l) => h3;
var rotlSH = (h3, l3, s2) => h3 << s2 | l3 >>> 32 - s2;
var rotlSL = (h3, l3, s2) => l3 << s2 | h3 >>> 32 - s2;
var rotlBH = (h3, l3, s2) => l3 << s2 - 32 | h3 >>> 64 - s2;
var rotlBL = (h3, l3, s2) => h3 << s2 - 32 | l3 >>> 64 - s2;
function add(Ah, Al, Bh, Bl) {
  const l3 = (Al >>> 0) + (Bl >>> 0);
  return { h: Ah + Bh + (l3 / 2 ** 32 | 0) | 0, l: l3 | 0 };
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
].map((n2) => BigInt(n2))))();
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
    for (let i2 = 0; i2 < 16; i2++, offset += 4) {
      SHA512_W_H[i2] = view.getUint32(offset);
      SHA512_W_L[i2] = view.getUint32(offset += 4);
    }
    for (let i2 = 16; i2 < 80; i2++) {
      const W15h = SHA512_W_H[i2 - 15] | 0;
      const W15l = SHA512_W_L[i2 - 15] | 0;
      const s0h = u64_default.rotrSH(W15h, W15l, 1) ^ u64_default.rotrSH(W15h, W15l, 8) ^ u64_default.shrSH(W15h, W15l, 7);
      const s0l = u64_default.rotrSL(W15h, W15l, 1) ^ u64_default.rotrSL(W15h, W15l, 8) ^ u64_default.shrSL(W15h, W15l, 7);
      const W2h = SHA512_W_H[i2 - 2] | 0;
      const W2l = SHA512_W_L[i2 - 2] | 0;
      const s1h = u64_default.rotrSH(W2h, W2l, 19) ^ u64_default.rotrBH(W2h, W2l, 61) ^ u64_default.shrSH(W2h, W2l, 6);
      const s1l = u64_default.rotrSL(W2h, W2l, 19) ^ u64_default.rotrBL(W2h, W2l, 61) ^ u64_default.shrSL(W2h, W2l, 6);
      const SUMl = u64_default.add4L(s0l, s1l, SHA512_W_L[i2 - 7], SHA512_W_L[i2 - 16]);
      const SUMh = u64_default.add4H(SUMl, s0h, s1h, SHA512_W_H[i2 - 7], SHA512_W_H[i2 - 16]);
      SHA512_W_H[i2] = SUMh | 0;
      SHA512_W_L[i2] = SUMl | 0;
    }
    let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    for (let i2 = 0; i2 < 80; i2++) {
      const sigma1h = u64_default.rotrSH(Eh, El, 14) ^ u64_default.rotrSH(Eh, El, 18) ^ u64_default.rotrBH(Eh, El, 41);
      const sigma1l = u64_default.rotrSL(Eh, El, 14) ^ u64_default.rotrSL(Eh, El, 18) ^ u64_default.rotrBL(Eh, El, 41);
      const CHIh = Eh & Fh ^ ~Eh & Gh;
      const CHIl = El & Fl ^ ~El & Gl;
      const T1ll = u64_default.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i2], SHA512_W_L[i2]);
      const T1h = u64_default.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i2], SHA512_W_H[i2]);
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
var u8a2 = (a2) => a2 instanceof Uint8Array;
var hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_2, i2) => i2.toString(16).padStart(2, "0"));
function bytesToHex(bytes3) {
  if (!u8a2(bytes3))
    throw new Error("Uint8Array expected");
  let hex = "";
  for (let i2 = 0; i2 < bytes3.length; i2++) {
    hex += hexes[bytes3[i2]];
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
  for (let i2 = 0; i2 < array.length; i2++) {
    const j = i2 * 2;
    const hexByte = hex.slice(j, j + 2);
    const byte = Number.parseInt(hexByte, 16);
    if (Number.isNaN(byte) || byte < 0)
      throw new Error("Invalid byte sequence");
    array[i2] = byte;
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
function numberToBytesBE(n2, len) {
  return hexToBytes(n2.toString(16).padStart(len * 2, "0"));
}
function numberToBytesLE(n2, len) {
  return numberToBytesBE(n2, len).reverse();
}
function numberToVarBytesBE(n2) {
  return hexToBytes(numberToHexUnpadded(n2));
}
function ensureBytes(title, hex, expectedLength) {
  let res;
  if (typeof hex === "string") {
    try {
      res = hexToBytes(hex);
    } catch (e2) {
      throw new Error(`${title} must be valid hex string, got "${hex}". Cause: ${e2}`);
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
  const r2 = new Uint8Array(arrays.reduce((sum, a2) => sum + a2.length, 0));
  let pad = 0;
  arrays.forEach((a2) => {
    if (!u8a2(a2))
      throw new Error("Uint8Array expected");
    r2.set(a2, pad);
    pad += a2.length;
  });
  return r2;
}
function equalBytes(b1, b2) {
  if (b1.length !== b2.length)
    return false;
  for (let i2 = 0; i2 < b1.length; i2++)
    if (b1[i2] !== b2[i2])
      return false;
  return true;
}
function utf8ToBytes2(str) {
  if (typeof str !== "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
  return new Uint8Array(new TextEncoder().encode(str));
}
function bitLen(n2) {
  let len;
  for (len = 0; n2 > _0n; n2 >>= _1n, len += 1)
    ;
  return len;
}
function bitGet(n2, pos) {
  return n2 >> BigInt(pos) & _1n;
}
var bitSet = (n2, pos, value) => {
  return n2 | (value ? _1n : _0n) << BigInt(pos);
};
var bitMask = (n2) => (_2n << BigInt(n2 - 1)) - _1n;
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
  let k3 = u8n(hashLen);
  let i2 = 0;
  const reset = () => {
    v2.fill(1);
    k3.fill(0);
    i2 = 0;
  };
  const h3 = (...b) => hmacFn(k3, v2, ...b);
  const reseed = (seed = u8n()) => {
    k3 = h3(u8fr([0]), seed);
    v2 = h3();
    if (seed.length === 0)
      return;
    k3 = h3(u8fr([1]), seed);
    v2 = h3();
  };
  const gen2 = () => {
    if (i2++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let len = 0;
    const out = [];
    while (len < qByteLen) {
      v2 = h3();
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
function mod(a2, b) {
  const result = a2 % b;
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
  let a2 = mod(number3, modulo);
  let b = modulo;
  let x = _0n2, y = _1n2, u2 = _1n2, v2 = _0n2;
  while (a2 !== _0n2) {
    const q = b / a2;
    const r2 = b % a2;
    const m = x - u2 * q;
    const n2 = y - v2 * q;
    b = a2, a2 = r2, x = u2, y = v2, u2 = m, v2 = n2;
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
    return function tonelliFast(Fp4, n2) {
      const root = Fp4.pow(n2, p1div4);
      if (!Fp4.eql(Fp4.sqr(root), n2))
        throw new Error("Cannot find square root");
      return root;
    };
  }
  const Q1div2 = (Q + _1n2) / _2n2;
  return function tonelliSlow(Fp4, n2) {
    if (Fp4.pow(n2, legendreC) === Fp4.neg(Fp4.ONE))
      throw new Error("Cannot find square root");
    let r2 = S2;
    let g = Fp4.pow(Fp4.mul(Fp4.ONE, Z2), Q);
    let x = Fp4.pow(n2, Q1div2);
    let b = Fp4.pow(n2, Q);
    while (!Fp4.eql(b, Fp4.ONE)) {
      if (Fp4.eql(b, Fp4.ZERO))
        return Fp4.ZERO;
      let m = 1;
      for (let t2 = Fp4.sqr(b); m < r2; m++) {
        if (Fp4.eql(t2, Fp4.ONE))
          break;
        t2 = Fp4.sqr(t2);
      }
      const ge2 = Fp4.pow(g, _1n2 << BigInt(r2 - m - 1));
      g = Fp4.sqr(ge2);
      x = Fp4.mul(x, ge2);
      b = Fp4.mul(b, g);
      r2 = m;
    }
    return x;
  };
}
function FpSqrt(P) {
  if (P % _4n === _3n) {
    const p1div4 = (P + _1n2) / _4n;
    return function sqrt3mod4(Fp4, n2) {
      const root = Fp4.pow(n2, p1div4);
      if (!Fp4.eql(Fp4.sqr(root), n2))
        throw new Error("Cannot find square root");
      return root;
    };
  }
  if (P % _8n === _5n) {
    const c1 = (P - _5n) / _8n;
    return function sqrt5mod8(Fp4, n2) {
      const n22 = Fp4.mul(n2, _2n2);
      const v2 = Fp4.pow(n22, c1);
      const nv = Fp4.mul(n2, v2);
      const i2 = Fp4.mul(Fp4.mul(nv, _2n2), v2);
      const root = Fp4.mul(nv, Fp4.sub(i2, Fp4.ONE));
      if (!Fp4.eql(Fp4.sqr(root), n2))
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
function FpPow(f3, num, power) {
  if (power < _0n2)
    throw new Error("Expected power > 0");
  if (power === _0n2)
    return f3.ONE;
  if (power === _1n2)
    return num;
  let p2 = f3.ONE;
  let d2 = num;
  while (power > _0n2) {
    if (power & _1n2)
      p2 = f3.mul(p2, d2);
    d2 = f3.sqr(d2);
    power >>= _1n2;
  }
  return p2;
}
function FpInvertBatch(f3, nums) {
  const tmp = new Array(nums.length);
  const lastMultiplied = nums.reduce((acc, num, i2) => {
    if (f3.is0(num))
      return acc;
    tmp[i2] = acc;
    return f3.mul(acc, num);
  }, f3.ONE);
  const inverted = f3.inv(lastMultiplied);
  nums.reduceRight((acc, num, i2) => {
    if (f3.is0(num))
      return acc;
    tmp[i2] = f3.mul(acc, tmp[i2]);
    return f3.mul(acc, num);
  }, inverted);
  return tmp;
}
function nLength(n2, nBitLength) {
  const _nBitLength = nBitLength !== void 0 ? nBitLength : n2.toString(2).length;
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
  const f3 = Object.freeze({
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
    pow: (num, power) => FpPow(f3, num, power),
    div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
    // Same as above, but doesn't normalize
    sqrN: (num) => num * num,
    addN: (lhs, rhs) => lhs + rhs,
    subN: (lhs, rhs) => lhs - rhs,
    mulN: (lhs, rhs) => lhs * rhs,
    inv: (num) => invert(num, ORDER),
    sqrt: redef.sqrt || ((n2) => sqrtP(f3, n2)),
    invertBatch: (lst) => FpInvertBatch(f3, lst),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (a2, b, c2) => c2 ? b : a2,
    toBytes: (num) => isLE3 ? numberToBytesLE(num, BYTES) : numberToBytesBE(num, BYTES),
    fromBytes: (bytes3) => {
      if (bytes3.length !== BYTES)
        throw new Error(`Fp.fromBytes: expected ${BYTES}, got ${bytes3.length}`);
      return isLE3 ? bytesToNumberLE(bytes3) : bytesToNumberBE(bytes3);
    }
  });
  return Object.freeze(f3);
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
function wNAF(c2, bits) {
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
    unsafeLadder(elm, n2) {
      let p2 = c2.ZERO;
      let d2 = elm;
      while (n2 > _0n3) {
        if (n2 & _1n3)
          p2 = p2.add(d2);
        d2 = d2.double();
        n2 >>= _1n3;
      }
      return p2;
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
      let p2 = elm;
      let base3 = p2;
      for (let window2 = 0; window2 < windows; window2++) {
        base3 = p2;
        points.push(base3);
        for (let i2 = 1; i2 < windowSize; i2++) {
          base3 = base3.add(p2);
          points.push(base3);
        }
        p2 = base3.double();
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
    wNAF(W2, precomputes, n2) {
      const { windows, windowSize } = opts(W2);
      let p2 = c2.ZERO;
      let f3 = c2.BASE;
      const mask = BigInt(2 ** W2 - 1);
      const maxNumber = 2 ** W2;
      const shiftBy = BigInt(W2);
      for (let window2 = 0; window2 < windows; window2++) {
        const offset = window2 * windowSize;
        let wbits = Number(n2 & mask);
        n2 >>= shiftBy;
        if (wbits > windowSize) {
          wbits -= maxNumber;
          n2 += _1n3;
        }
        const offset1 = offset;
        const offset2 = offset + Math.abs(wbits) - 1;
        const cond1 = window2 % 2 !== 0;
        const cond2 = wbits < 0;
        if (wbits === 0) {
          f3 = f3.add(constTimeNegate(cond1, precomputes[offset1]));
        } else {
          p2 = p2.add(constTimeNegate(cond2, precomputes[offset2]));
        }
      }
      return { p: p2, f: f3 };
    },
    wNAFCached(P, precomputesMap, n2, transform) {
      const W2 = P._WINDOW_SIZE || 1;
      let comp = precomputesMap.get(P);
      if (!comp) {
        comp = this.precomputeWindow(P, W2);
        if (W2 !== 1) {
          precomputesMap.set(P, transform(comp));
        }
      }
      return this.wNAF(W2, comp, n2);
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
  const uvRatio2 = CURVE.uvRatio || ((u2, v2) => {
    try {
      return { isValid: true, value: Fp4.sqrt(u2 * Fp4.inv(v2)) };
    } catch (e2) {
      return { isValid: false, value: _0n4 };
    }
  });
  const adjustScalarBytes2 = CURVE.adjustScalarBytes || ((bytes3) => bytes3);
  const domain = CURVE.domain || ((data, ctx, phflag) => {
    if (ctx.length || phflag)
      throw new Error("Contexts/pre-hash are not supported");
    return data;
  });
  const inBig = (n2) => typeof n2 === "bigint" && _0n4 < n2;
  const inRange = (n2, max) => inBig(n2) && inBig(max) && n2 < max;
  const in0MaskRange = (n2) => n2 === _0n4 || inRange(n2, MASK);
  function assertInRange(n2, max) {
    if (inRange(n2, max))
      return n2;
    throw new Error(`Expected valid scalar < ${max}, got ${typeof n2} ${n2}`);
  }
  function assertGE0(n2) {
    return n2 === _0n4 ? n2 : assertInRange(n2, CURVE_ORDER);
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
    static fromAffine(p2) {
      if (p2 instanceof Point2)
        throw new Error("extended point not allowed");
      const { x, y } = p2 || {};
      if (!in0MaskRange(x) || !in0MaskRange(y))
        throw new Error("invalid affine point");
      return new Point2(x, y, _1n4, modP(x * y));
    }
    static normalizeZ(points) {
      const toInv = Fp4.invertBatch(points.map((p2) => p2.ez));
      return points.map((p2, i2) => p2.toAffine(toInv[i2])).map(Point2.fromAffine);
    }
    // "Private method", don't use it directly
    _setWindowSize(windowSize) {
      this._WINDOW_SIZE = windowSize;
      pointPrecomputes.delete(this);
    }
    // Not required for fromHex(), which always creates valid points.
    // Could be useful for fromAffine().
    assertValidity() {
      const { a: a2, d: d2 } = CURVE;
      if (this.is0())
        throw new Error("bad point: ZERO");
      const { ex: X, ey: Y2, ez: Z2, et: T } = this;
      const X2 = modP(X * X);
      const Y22 = modP(Y2 * Y2);
      const Z22 = modP(Z2 * Z2);
      const Z4 = modP(Z22 * Z22);
      const aX2 = modP(X2 * a2);
      const left = modP(Z22 * modP(aX2 + Y22));
      const right = modP(Z4 + modP(d2 * modP(X2 * Y22)));
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
      const { a: a2 } = CURVE;
      const { ex: X1, ey: Y1, ez: Z1 } = this;
      const A = modP(X1 * X1);
      const B = modP(Y1 * Y1);
      const C2 = modP(_2n3 * modP(Z1 * Z1));
      const D2 = modP(a2 * A);
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
      const { a: a2, d: d2 } = CURVE;
      const { ex: X1, ey: Y1, ez: Z1, et: T1 } = this;
      const { ex: X2, ey: Y2, ez: Z2, et: T2 } = other;
      if (a2 === BigInt(-1)) {
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
      const C2 = modP(T1 * d2 * T2);
      const D2 = modP(Z1 * Z2);
      const E = modP((X1 + Y1) * (X2 + Y2) - A - B);
      const F = D2 - C2;
      const G2 = D2 + C2;
      const H2 = modP(B - a2 * A);
      const X3 = modP(E * F);
      const Y3 = modP(G2 * H2);
      const T3 = modP(E * H2);
      const Z3 = modP(F * G2);
      return new Point2(X3, Y3, Z3, T3);
    }
    subtract(other) {
      return this.add(other.negate());
    }
    wNAF(n2) {
      return wnaf.wNAFCached(this, pointPrecomputes, n2, Point2.normalizeZ);
    }
    // Constant-time multiplication.
    multiply(scalar) {
      const { p: p2, f: f3 } = this.wNAF(assertInRange(scalar, CURVE_ORDER));
      return Point2.normalizeZ([p2, f3])[0];
    }
    // Non-constant-time multiplication. Uses double-and-add algorithm.
    // It's faster, but should only be used when you don't care about
    // an exposed private key e.g. sig verification.
    // Does NOT allow scalars higher than CURVE.n.
    multiplyUnsafe(scalar) {
      let n2 = assertGE0(scalar);
      if (n2 === _0n4)
        return I;
      if (this.equals(I) || n2 === _1n4)
        return this;
      if (this.equals(G))
        return this.wNAF(n2).p;
      return wnaf.unsafeLadder(this, n2);
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
      const { d: d2, a: a2 } = CURVE;
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
      const u2 = modP(y2 - _1n4);
      const v2 = modP(d2 * y2 - a2);
      let { isValid, value: x } = uvRatio2(u2, v2);
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
  function modN(a2) {
    return mod(a2, CURVE_ORDER);
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
    const point3 = G.multiply(scalar);
    const pointBytes = point3.toRawBytes();
    return { head, prefix, scalar, point: point3, pointBytes };
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
    const r2 = hashDomainToScalar(options.context, prefix, msg);
    const R = G.multiply(r2).toRawBytes();
    const k3 = hashDomainToScalar(options.context, R, pointBytes, msg);
    const s2 = modN(r2 + k3 * scalar);
    assertGE0(s2);
    const res = concatBytes2(R, numberToBytesLE(s2, Fp4.BYTES));
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
    const s2 = bytesToNumberLE(sig.slice(len, 2 * len));
    let A, R, SB;
    try {
      A = Point2.fromHex(publicKey, zip215);
      R = Point2.fromHex(sig.slice(0, len), zip215);
      SB = G.multiplyUnsafe(s2);
    } catch (error) {
      return false;
    }
    if (!zip215 && A.isSmallOrder())
      return false;
    const k3 = hashDomainToScalar(context, R.toRawBytes(), A.toRawBytes(), msg);
    const RkA = R.add(A.multiplyUnsafe(k3));
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
    precompute(windowSize = 8, point3 = Point2.BASE) {
      point3._setWindowSize(windowSize);
      point3.multiply(BigInt(3));
      return point3;
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
function uvRatio(u2, v2) {
  const P = ED25519_P;
  const v3 = mod(v2 * v2 * v2, P);
  const v7 = mod(v3 * v3 * v2, P);
  const pow3 = ed25519_pow_2_252_3(u2 * v7).pow_p_5_8;
  let x = mod(u2 * v3 * pow3, P);
  const vx2 = mod(v2 * x * x, P);
  const root1 = x;
  const root2 = mod(x * ED25519_SQRT_M1, P);
  const useRoot1 = vx2 === u2;
  const useRoot2 = vx2 === mod(-u2, P);
  const noRoot = vx2 === mod(-u2 * ED25519_SQRT_M1, P);
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
var Chi = (a2, b, c2) => a2 & b ^ ~a2 & c2;
var Maj = (a2, b, c2) => a2 & b ^ a2 & c2 ^ b & c2;
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
    for (let i2 = 0; i2 < 16; i2++, offset += 4)
      SHA256_W[i2] = view.getUint32(offset, false);
    for (let i2 = 16; i2 < 64; i2++) {
      const W15 = SHA256_W[i2 - 15];
      const W2 = SHA256_W[i2 - 2];
      const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
      const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
      SHA256_W[i2] = s1 + SHA256_W[i2 - 7] + s0 + SHA256_W[i2 - 16] | 0;
    }
    let { A, B, C: C2, D: D2, E, F, G, H: H2 } = this;
    for (let i2 = 0; i2 < 64; i2++) {
      const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
      const T1 = H2 + sigma1 + Chi(E, F, G) + SHA256_K[i2] + SHA256_W[i2] | 0;
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
var Id = /* @__PURE__ */ Uint8Array.from({ length: 16 }, (_2, i2) => i2);
var Pi = /* @__PURE__ */ Id.map((i2) => (9 * i2 + 5) % 16);
var idxL = [Id];
var idxR = [Pi];
for (let i2 = 0; i2 < 4; i2++)
  for (let j of [idxL, idxR])
    j.push(j[i2].map((k3) => Rho[k3]));
var shifts = /* @__PURE__ */ [
  [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
  [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
  [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
  [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
  [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]
].map((i2) => new Uint8Array(i2));
var shiftsL = /* @__PURE__ */ idxL.map((idx, i2) => idx.map((j) => shifts[i2][j]));
var shiftsR = /* @__PURE__ */ idxR.map((idx, i2) => idx.map((j) => shifts[i2][j]));
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
function f2(group, x, y, z) {
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
    const { h0, h1, h2: h22, h3, h4 } = this;
    return [h0, h1, h22, h3, h4];
  }
  set(h0, h1, h22, h3, h4) {
    this.h0 = h0 | 0;
    this.h1 = h1 | 0;
    this.h2 = h22 | 0;
    this.h3 = h3 | 0;
    this.h4 = h4 | 0;
  }
  process(view, offset) {
    for (let i2 = 0; i2 < 16; i2++, offset += 4)
      BUF[i2] = view.getUint32(offset, true);
    let al = this.h0 | 0, ar = al, bl = this.h1 | 0, br = bl, cl = this.h2 | 0, cr = cl, dl = this.h3 | 0, dr = dl, el = this.h4 | 0, er = el;
    for (let group = 0; group < 5; group++) {
      const rGroup = 4 - group;
      const hbl = Kl[group], hbr = Kr[group];
      const rl = idxL[group], rr = idxR[group];
      const sl = shiftsL[group], sr = shiftsR[group];
      for (let i2 = 0; i2 < 16; i2++) {
        const tl = rotl(al + f2(group, bl, cl, dl) + BUF[rl[i2]] + hbl, sl[i2]) + el | 0;
        al = el, el = dl, dl = rotl(cl, 10) | 0, cl = bl, bl = tl;
      }
      for (let i2 = 0; i2 < 16; i2++) {
        const tr = rotl(ar + f2(rGroup, br, cr, dr) + BUF[rr[i2]] + hbr, sr[i2]) + er | 0;
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
  let t2 = _0n6;
  for (let j = 0; j < 7; j++) {
    R = (R << _1n6 ^ (R >> _7n) * _0x71n) % _256n;
    if (R & _2n5)
      t2 ^= _1n6 << (_1n6 << /* @__PURE__ */ BigInt(j)) - _1n6;
  }
  _SHA3_IOTA.push(t2);
}
var [SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */ split(_SHA3_IOTA, true);
var rotlH = (h3, l3, s2) => s2 > 32 ? rotlBH(h3, l3, s2) : rotlSH(h3, l3, s2);
var rotlL = (h3, l3, s2) => s2 > 32 ? rotlBL(h3, l3, s2) : rotlSL(h3, l3, s2);
function keccakP(s2, rounds = 24) {
  const B = new Uint32Array(5 * 2);
  for (let round = 24 - rounds; round < 24; round++) {
    for (let x = 0; x < 10; x++)
      B[x] = s2[x] ^ s2[x + 10] ^ s2[x + 20] ^ s2[x + 30] ^ s2[x + 40];
    for (let x = 0; x < 10; x += 2) {
      const idx1 = (x + 8) % 10;
      const idx0 = (x + 2) % 10;
      const B0 = B[idx0];
      const B1 = B[idx0 + 1];
      const Th = rotlH(B0, B1, 1) ^ B[idx1];
      const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
      for (let y = 0; y < 50; y += 10) {
        s2[x + y] ^= Th;
        s2[x + y + 1] ^= Tl;
      }
    }
    let curH = s2[2];
    let curL = s2[3];
    for (let t2 = 0; t2 < 24; t2++) {
      const shift = SHA3_ROTL[t2];
      const Th = rotlH(curH, curL, shift);
      const Tl = rotlL(curH, curL, shift);
      const PI = SHA3_PI[t2];
      curH = s2[PI];
      curL = s2[PI + 1];
      s2[PI] = Th;
      s2[PI + 1] = Tl;
    }
    for (let y = 0; y < 50; y += 10) {
      for (let x = 0; x < 10; x++)
        B[x] = s2[y + x];
      for (let x = 0; x < 10; x++)
        s2[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
    }
    s2[0] ^= SHA3_IOTA_H[round];
    s2[1] ^= SHA3_IOTA_L[round];
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
      for (let i2 = 0; i2 < take; i2++)
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
  const { endo, Fp: Fp4, a: a2 } = opts;
  if (endo) {
    if (!Fp4.eql(a2, Fp4.ZERO)) {
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
    let l3 = data.length;
    if (l3 < 2 || data[0] != 48)
      throw new E("Invalid signature tag");
    if (data[1] !== l3 - 2)
      throw new E("Invalid signature: incorrect length");
    const { d: r2, l: sBytes } = DER._parseInt(data.subarray(2));
    const { d: s2, l: rBytesLeft } = DER._parseInt(sBytes);
    if (rBytesLeft.length)
      throw new E("Invalid signature: left bytes after parsing");
    return { r: r2, s: s2 };
  },
  hexFromSig(sig) {
    const slice = (s3) => Number.parseInt(s3[0], 16) & 8 ? "00" + s3 : s3;
    const h3 = (num) => {
      const hex = num.toString(16);
      return hex.length & 1 ? `0${hex}` : hex;
    };
    const s2 = slice(h3(sig.s));
    const r2 = slice(h3(sig.r));
    const shl = s2.length / 2;
    const rhl = r2.length / 2;
    const sl = h3(shl);
    const rl = h3(rhl);
    return `30${h3(rhl + shl + 4)}02${rl}${r2}02${sl}${s2}`;
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
  const toBytes3 = CURVE.toBytes || ((_c, point3, _isCompressed) => {
    const a2 = point3.toAffine();
    return concatBytes2(Uint8Array.from([4]), Fp4.toBytes(a2.x), Fp4.toBytes(a2.y));
  });
  const fromBytes = CURVE.fromBytes || ((bytes3) => {
    const tail = bytes3.subarray(1);
    const x = Fp4.fromBytes(tail.subarray(0, Fp4.BYTES));
    const y = Fp4.fromBytes(tail.subarray(Fp4.BYTES, 2 * Fp4.BYTES));
    return { x, y };
  });
  function weierstrassEquation(x) {
    const { a: a2, b } = CURVE;
    const x2 = Fp4.sqr(x);
    const x3 = Fp4.mul(x2, x);
    return Fp4.add(Fp4.add(x3, Fp4.mul(x, a2)), b);
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
    const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n: n2 } = CURVE;
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
      num = mod(num, n2);
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
    static fromAffine(p2) {
      const { x, y } = p2 || {};
      if (!p2 || !Fp4.isValid(x) || !Fp4.isValid(y))
        throw new Error("invalid affine point");
      if (p2 instanceof Point2)
        throw new Error("projective point not allowed");
      const is0 = (i2) => Fp4.eql(i2, Fp4.ZERO);
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
      const toInv = Fp4.invertBatch(points.map((p2) => p2.pz));
      return points.map((p2, i2) => p2.toAffine(toInv[i2])).map(Point2.fromAffine);
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
      const { a: a2, b } = CURVE;
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
      X3 = Fp4.mul(a2, Z3);
      Y3 = Fp4.mul(b3, t2);
      Y3 = Fp4.add(X3, Y3);
      X3 = Fp4.sub(t1, Y3);
      Y3 = Fp4.add(t1, Y3);
      Y3 = Fp4.mul(X3, Y3);
      X3 = Fp4.mul(t3, X3);
      Z3 = Fp4.mul(b3, Z3);
      t2 = Fp4.mul(a2, t2);
      t3 = Fp4.sub(t0, t2);
      t3 = Fp4.mul(a2, t3);
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
      const a2 = CURVE.a;
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
      Z3 = Fp4.mul(a2, t4);
      X3 = Fp4.mul(b3, t2);
      Z3 = Fp4.add(X3, Z3);
      X3 = Fp4.sub(t1, Z3);
      Z3 = Fp4.add(t1, Z3);
      Y3 = Fp4.mul(X3, Z3);
      t1 = Fp4.add(t0, t0);
      t1 = Fp4.add(t1, t0);
      t2 = Fp4.mul(a2, t2);
      t4 = Fp4.mul(b3, t4);
      t1 = Fp4.add(t1, t2);
      t2 = Fp4.sub(t0, t2);
      t2 = Fp4.mul(a2, t2);
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
    wNAF(n2) {
      return wnaf.wNAFCached(this, pointPrecomputes, n2, (comp) => {
        const toInv = Fp4.invertBatch(comp.map((p2) => p2.pz));
        return comp.map((p2, i2) => p2.toAffine(toInv[i2])).map(Point2.fromAffine);
      });
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(n2) {
      const I = Point2.ZERO;
      if (n2 === _0n7)
        return I;
      assertGE(n2);
      if (n2 === _1n7)
        return this;
      const { endo } = CURVE;
      if (!endo)
        return wnaf.unsafeLadder(this, n2);
      let { k1neg, k1, k2neg, k2: k22 } = endo.splitScalar(n2);
      let k1p = I;
      let k2p = I;
      let d2 = this;
      while (k1 > _0n7 || k22 > _0n7) {
        if (k1 & _1n7)
          k1p = k1p.add(d2);
        if (k22 & _1n7)
          k2p = k2p.add(d2);
        d2 = d2.double();
        k1 >>= _1n7;
        k22 >>= _1n7;
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
      let n2 = scalar;
      let point3, fake;
      const { endo } = CURVE;
      if (endo) {
        const { k1neg, k1, k2neg, k2: k22 } = endo.splitScalar(n2);
        let { p: k1p, f: f1p } = this.wNAF(k1);
        let { p: k2p, f: f2p } = this.wNAF(k22);
        k1p = wnaf.constTimeNegate(k1neg, k1p);
        k2p = wnaf.constTimeNegate(k2neg, k2p);
        k2p = new Point2(Fp4.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
        point3 = k1p.add(k2p);
        fake = f1p.add(f2p);
      } else {
        const { p: p2, f: f3 } = this.wNAF(n2);
        point3 = p2;
        fake = f3;
      }
      return Point2.normalizeZ([point3, fake])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(Q, a2, b) {
      const G = Point2.BASE;
      const mul = (P, a3) => a3 === _0n7 || a3 === _1n7 || !P.equals(G) ? P.multiplyUnsafe(a3) : P.multiply(a3);
      const sum = mul(this, a2).add(mul(Q, b));
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
  function modN(a2) {
    return mod(a2, CURVE_ORDER);
  }
  function invN(a2) {
    return invert(a2, CURVE_ORDER);
  }
  const { ProjectivePoint: Point2, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder } = weierstrassPoints({
    ...CURVE,
    toBytes(_c, point3, isCompressed) {
      const a2 = point3.toAffine();
      const x = Fp4.toBytes(a2.x);
      const cat = concatBytes2;
      if (isCompressed) {
        return cat(Uint8Array.from([point3.hasEvenY() ? 2 : 3]), x);
      } else {
        return cat(Uint8Array.from([4]), x, Fp4.toBytes(a2.y));
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
  function normalizeS(s2) {
    return isBiggerThanHalfOrder(s2) ? modN(-s2) : s2;
  }
  const slcNum = (b, from3, to) => bytesToNumberBE(b.slice(from3, to));
  class Signature {
    constructor(r2, s2, recovery) {
      this.r = r2;
      this.s = s2;
      this.recovery = recovery;
      this.assertValidity();
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(hex) {
      const l3 = CURVE.nByteLength;
      hex = ensureBytes("compactSignature", hex, l3 * 2);
      return new Signature(slcNum(hex, 0, l3), slcNum(hex, l3, 2 * l3));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(hex) {
      const { r: r2, s: s2 } = DER.toSig(ensureBytes("DER", hex));
      return new Signature(r2, s2);
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
      const { r: r2, s: s2, recovery: rec } = this;
      const h3 = bits2int_modN(ensureBytes("msgHash", msgHash));
      if (rec == null || ![0, 1, 2, 3].includes(rec))
        throw new Error("recovery id invalid");
      const radj = rec === 2 || rec === 3 ? r2 + CURVE.n : r2;
      if (radj >= Fp4.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const prefix = (rec & 1) === 0 ? "02" : "03";
      const R = Point2.fromHex(prefix + numToNByteStr(radj));
      const ir = invN(radj);
      const u1 = modN(-h3 * ir);
      const u2 = modN(s2 * ir);
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
    precompute(windowSize = 8, point3 = Point2.BASE) {
      point3._setWindowSize(windowSize);
      point3.multiply(BigInt(3));
      return point3;
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
    if (["recovered", "canonical"].some((k3) => k3 in opts))
      throw new Error("sign() legacy options not supported");
    const { hash: hash3, randomBytes: randomBytes2 } = CURVE;
    let { lowS, prehash, extraEntropy: ent } = opts;
    if (lowS == null)
      lowS = true;
    msgHash = ensureBytes("msgHash", msgHash);
    if (prehash)
      msgHash = ensureBytes("prehashed msgHash", hash3(msgHash));
    const h1int = bits2int_modN(msgHash);
    const d2 = normPrivateKeyToScalar(privateKey);
    const seedArgs = [int2octets(d2), int2octets(h1int)];
    if (ent != null) {
      const e2 = ent === true ? randomBytes2(Fp4.BYTES) : ent;
      seedArgs.push(ensureBytes("extraEntropy", e2));
    }
    const seed = concatBytes2(...seedArgs);
    const m = h1int;
    function k2sig(kBytes) {
      const k3 = bits2int(kBytes);
      if (!isWithinCurveOrder(k3))
        return;
      const ik = invN(k3);
      const q = Point2.BASE.multiply(k3).toAffine();
      const r2 = modN(q.x);
      if (r2 === _0n7)
        return;
      const s2 = modN(ik * modN(m + r2 * d2));
      if (s2 === _0n7)
        return;
      let recovery = (q.x === r2 ? 0 : 2) | Number(q.y & _1n7);
      let normS = s2;
      if (lowS && isBiggerThanHalfOrder(s2)) {
        normS = normalizeS(s2);
        recovery ^= 1;
      }
      return new Signature(r2, normS, recovery);
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
        const { r: r3, s: s3 } = sg;
        _sig = new Signature(r3, s3);
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
    const { r: r2, s: s2 } = _sig;
    const h3 = bits2int_modN(msgHash);
    const is = invN(s2);
    const u1 = modN(h3 * is);
    const u2 = modN(r2 * is);
    const R = Point2.BASE.multiplyAndAddUnsafe(P, u1, u2)?.toAffine();
    if (!R)
      return false;
    const v2 = modN(R.x);
    return v2 === r2;
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
    for (let i2 = 0; i2 < pad.length; i2++)
      pad[i2] ^= 54;
    this.iHash.update(pad);
    this.oHash = hash3.create();
    for (let i2 = 0; i2 < pad.length; i2++)
      pad[i2] ^= 54 ^ 92;
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
var divNearest = (a2, b) => (a2 + b / _2n7) / b;
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
    splitScalar: (k3) => {
      const n2 = secp256k1N;
      const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
      const b1 = -_1n8 * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
      const a2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
      const b2 = a1;
      const POW_2_128 = BigInt("0x100000000000000000000000000000000");
      const c1 = divNearest(b2 * k3, n2);
      const c2 = divNearest(-b1 * k3, n2);
      let k1 = mod(k3 - c1 * a1 - c2 * a2, n2);
      let k22 = mod(-c1 * b1 - c2 * b2, n2);
      const k1neg = k1 > POW_2_128;
      const k2neg = k22 > POW_2_128;
      if (k1neg)
        k1 = n2 - k1;
      if (k2neg)
        k22 = n2 - k22;
      if (k1 > POW_2_128 || k22 > POW_2_128) {
        throw new Error("splitScalar: Endomorphism failed, k=" + k3);
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
function assertNumber(n2) {
  if (!Number.isSafeInteger(n2))
    throw new Error(`Wrong integer: ${n2}`);
}
// @__NO_SIDE_EFFECTS__
function chain(...args) {
  const wrap2 = (a2, b) => (c2) => a2(b(c2));
  const encode6 = Array.from(args).reverse().reduce((acc, i2) => acc ? wrap2(acc, i2.encode) : i2.encode, void 0);
  const decode7 = args.reduce((acc, i2) => acc ? wrap2(acc, i2.decode) : i2.decode, void 0);
  return { encode: encode6, decode: decode7 };
}
// @__NO_SIDE_EFFECTS__
function alphabet2(alphabet3) {
  return {
    encode: (digits) => {
      if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number")
        throw new Error("alphabet.encode input should be an array of numbers");
      return digits.map((i2) => {
        /* @__PURE__ */ assertNumber(i2);
        if (i2 < 0 || i2 >= alphabet3.length)
          throw new Error(`Digit index outside alphabet: ${i2} (alphabet: ${alphabet3.length})`);
        return alphabet3[i2];
      });
    },
    decode: (input) => {
      if (!Array.isArray(input) || input.length && typeof input[0] !== "string")
        throw new Error("alphabet.decode input should be array of strings");
      return input.map((letter) => {
        if (typeof letter !== "string")
          throw new Error(`alphabet.decode: not string element=${letter}`);
        const index3 = alphabet3.indexOf(letter);
        if (index3 === -1)
          throw new Error(`Unknown letter: "${letter}". Allowed: ${alphabet3}`);
        return index3;
      });
    }
  };
}
// @__NO_SIDE_EFFECTS__
function join2(separator = "") {
  if (typeof separator !== "string")
    throw new Error("join separator should be string");
  return {
    encode: (from3) => {
      if (!Array.isArray(from3) || from3.length && typeof from3[0] !== "string")
        throw new Error("join.encode input should be array of strings");
      for (let i2 of from3)
        if (typeof i2 !== "string")
          throw new Error(`join.encode: non-string input=${i2}`);
      return from3.join(separator);
    },
    decode: (to) => {
      if (typeof to !== "string")
        throw new Error("join.decode input should be string");
      return to.split(separator);
    }
  };
}
var gcd = /* @__NO_SIDE_EFFECTS__ */ (a2, b) => !b ? a2 : /* @__PURE__ */ gcd(b, a2 % b);
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
  for (const n2 of data) {
    /* @__PURE__ */ assertNumber(n2);
    if (n2 >= 2 ** from3)
      throw new Error(`convertRadix2: invalid data word=${n2} from=${from3}`);
    carry = carry << from3 | n2;
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
    } catch (e2) {
    }
  };
}
var BECH_ALPHABET = /* @__PURE__ */ chain(/* @__PURE__ */ alphabet2("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), /* @__PURE__ */ join2(""));
var POLYMOD_GENERATORS = [996825010, 642813549, 513874426, 1027748829, 705979059];
// @__NO_SIDE_EFFECTS__
function bech32Polymod(pre) {
  const b = pre >> 25;
  let chk = (pre & 33554431) << 5;
  for (let i2 = 0; i2 < POLYMOD_GENERATORS.length; i2++) {
    if ((b >> i2 & 1) === 1)
      chk ^= POLYMOD_GENERATORS[i2];
  }
  return chk;
}
// @__NO_SIDE_EFFECTS__
function bechChecksum(prefix, words, encodingConst = 1) {
  const len = prefix.length;
  let chk = 1;
  for (let i2 = 0; i2 < len; i2++) {
    const c2 = prefix.charCodeAt(i2);
    if (c2 < 33 || c2 > 126)
      throw new Error(`Invalid prefix (${prefix})`);
    chk = /* @__PURE__ */ bech32Polymod(chk) ^ c2 >> 5;
  }
  chk = /* @__PURE__ */ bech32Polymod(chk);
  for (let i2 = 0; i2 < len; i2++)
    chk = /* @__PURE__ */ bech32Polymod(chk) ^ prefix.charCodeAt(i2) & 31;
  for (let v2 of words)
    chk = /* @__PURE__ */ bech32Polymod(chk) ^ v2;
  for (let i2 = 0; i2 < 6; i2++)
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
  function decode7(str, limit = 90) {
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
  const decodeUnsafe = /* @__PURE__ */ unsafeWrapper(decode7);
  function decodeToBytes(str) {
    const { prefix, words } = decode7(str, false);
    return { prefix, words, bytes: fromWords(words) };
  }
  return { encode: encode6, decode: decode7, decodeToBytes, decodeUnsafe, fromWords, fromWordsUnsafe, toWords };
}
var bech32 = /* @__PURE__ */ genBech32("bech32");

// node_modules/.pnpm/@noble+ciphers@0.3.0/node_modules/@noble/ciphers/esm/utils.js
var u8a3 = (a2) => a2 instanceof Uint8Array;
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
function number2(n2) {
  if (!Number.isSafeInteger(n2) || n2 < 0)
    throw new Error(`Wrong positive integer: ${n2}`);
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
var u8to16 = (a2, i2) => a2[i2++] & 255 | (a2[i2++] & 255) << 8;
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
    for (let i2 = 0; i2 < 8; i2++)
      this.pad[i2] = u8to16(key, 16 + 2 * i2);
  }
  process(data, offset, isLast = false) {
    const hibit = isLast ? 0 : 1 << 11;
    const { h: h3, r: r2 } = this;
    const r0 = r2[0];
    const r1 = r2[1];
    const r22 = r2[2];
    const r3 = r2[3];
    const r4 = r2[4];
    const r5 = r2[5];
    const r6 = r2[6];
    const r7 = r2[7];
    const r8 = r2[8];
    const r9 = r2[9];
    const t0 = u8to16(data, offset + 0);
    const t1 = u8to16(data, offset + 2);
    const t2 = u8to16(data, offset + 4);
    const t3 = u8to16(data, offset + 6);
    const t4 = u8to16(data, offset + 8);
    const t5 = u8to16(data, offset + 10);
    const t6 = u8to16(data, offset + 12);
    const t7 = u8to16(data, offset + 14);
    let h0 = h3[0] + (t0 & 8191);
    let h1 = h3[1] + ((t0 >>> 13 | t1 << 3) & 8191);
    let h22 = h3[2] + ((t1 >>> 10 | t2 << 6) & 8191);
    let h32 = h3[3] + ((t2 >>> 7 | t3 << 9) & 8191);
    let h4 = h3[4] + ((t3 >>> 4 | t4 << 12) & 8191);
    let h5 = h3[5] + (t4 >>> 1 & 8191);
    let h6 = h3[6] + ((t4 >>> 14 | t5 << 2) & 8191);
    let h7 = h3[7] + ((t5 >>> 11 | t6 << 5) & 8191);
    let h8 = h3[8] + ((t6 >>> 8 | t7 << 8) & 8191);
    let h9 = h3[9] + (t7 >>> 5 | hibit);
    let c2 = 0;
    let d0 = c2 + h0 * r0 + h1 * (5 * r9) + h22 * (5 * r8) + h32 * (5 * r7) + h4 * (5 * r6);
    c2 = d0 >>> 13;
    d0 &= 8191;
    d0 += h5 * (5 * r5) + h6 * (5 * r4) + h7 * (5 * r3) + h8 * (5 * r22) + h9 * (5 * r1);
    c2 += d0 >>> 13;
    d0 &= 8191;
    let d1 = c2 + h0 * r1 + h1 * r0 + h22 * (5 * r9) + h32 * (5 * r8) + h4 * (5 * r7);
    c2 = d1 >>> 13;
    d1 &= 8191;
    d1 += h5 * (5 * r6) + h6 * (5 * r5) + h7 * (5 * r4) + h8 * (5 * r3) + h9 * (5 * r22);
    c2 += d1 >>> 13;
    d1 &= 8191;
    let d2 = c2 + h0 * r22 + h1 * r1 + h22 * r0 + h32 * (5 * r9) + h4 * (5 * r8);
    c2 = d2 >>> 13;
    d2 &= 8191;
    d2 += h5 * (5 * r7) + h6 * (5 * r6) + h7 * (5 * r5) + h8 * (5 * r4) + h9 * (5 * r3);
    c2 += d2 >>> 13;
    d2 &= 8191;
    let d3 = c2 + h0 * r3 + h1 * r22 + h22 * r1 + h32 * r0 + h4 * (5 * r9);
    c2 = d3 >>> 13;
    d3 &= 8191;
    d3 += h5 * (5 * r8) + h6 * (5 * r7) + h7 * (5 * r6) + h8 * (5 * r5) + h9 * (5 * r4);
    c2 += d3 >>> 13;
    d3 &= 8191;
    let d4 = c2 + h0 * r4 + h1 * r3 + h22 * r22 + h32 * r1 + h4 * r0;
    c2 = d4 >>> 13;
    d4 &= 8191;
    d4 += h5 * (5 * r9) + h6 * (5 * r8) + h7 * (5 * r7) + h8 * (5 * r6) + h9 * (5 * r5);
    c2 += d4 >>> 13;
    d4 &= 8191;
    let d5 = c2 + h0 * r5 + h1 * r4 + h22 * r3 + h32 * r22 + h4 * r1;
    c2 = d5 >>> 13;
    d5 &= 8191;
    d5 += h5 * r0 + h6 * (5 * r9) + h7 * (5 * r8) + h8 * (5 * r7) + h9 * (5 * r6);
    c2 += d5 >>> 13;
    d5 &= 8191;
    let d6 = c2 + h0 * r6 + h1 * r5 + h22 * r4 + h32 * r3 + h4 * r22;
    c2 = d6 >>> 13;
    d6 &= 8191;
    d6 += h5 * r1 + h6 * r0 + h7 * (5 * r9) + h8 * (5 * r8) + h9 * (5 * r7);
    c2 += d6 >>> 13;
    d6 &= 8191;
    let d7 = c2 + h0 * r7 + h1 * r6 + h22 * r5 + h32 * r4 + h4 * r3;
    c2 = d7 >>> 13;
    d7 &= 8191;
    d7 += h5 * r22 + h6 * r1 + h7 * r0 + h8 * (5 * r9) + h9 * (5 * r8);
    c2 += d7 >>> 13;
    d7 &= 8191;
    let d8 = c2 + h0 * r8 + h1 * r7 + h22 * r6 + h32 * r5 + h4 * r4;
    c2 = d8 >>> 13;
    d8 &= 8191;
    d8 += h5 * r3 + h6 * r22 + h7 * r1 + h8 * r0 + h9 * (5 * r9);
    c2 += d8 >>> 13;
    d8 &= 8191;
    let d9 = c2 + h0 * r9 + h1 * r8 + h22 * r7 + h32 * r6 + h4 * r5;
    c2 = d9 >>> 13;
    d9 &= 8191;
    d9 += h5 * r4 + h6 * r3 + h7 * r22 + h8 * r1 + h9 * r0;
    c2 += d9 >>> 13;
    d9 &= 8191;
    c2 = (c2 << 2) + c2 | 0;
    c2 = c2 + d0 | 0;
    d0 = c2 & 8191;
    c2 = c2 >>> 13;
    d1 += c2;
    h3[0] = d0;
    h3[1] = d1;
    h3[2] = d2;
    h3[3] = d3;
    h3[4] = d4;
    h3[5] = d5;
    h3[6] = d6;
    h3[7] = d7;
    h3[8] = d8;
    h3[9] = d9;
  }
  finalize() {
    const { h: h3, pad } = this;
    const g = new Uint16Array(10);
    let c2 = h3[1] >>> 13;
    h3[1] &= 8191;
    for (let i2 = 2; i2 < 10; i2++) {
      h3[i2] += c2;
      c2 = h3[i2] >>> 13;
      h3[i2] &= 8191;
    }
    h3[0] += c2 * 5;
    c2 = h3[0] >>> 13;
    h3[0] &= 8191;
    h3[1] += c2;
    c2 = h3[1] >>> 13;
    h3[1] &= 8191;
    h3[2] += c2;
    g[0] = h3[0] + 5;
    c2 = g[0] >>> 13;
    g[0] &= 8191;
    for (let i2 = 1; i2 < 10; i2++) {
      g[i2] = h3[i2] + c2;
      c2 = g[i2] >>> 13;
      g[i2] &= 8191;
    }
    g[9] -= 1 << 13;
    let mask = (c2 ^ 1) - 1;
    for (let i2 = 0; i2 < 10; i2++)
      g[i2] &= mask;
    mask = ~mask;
    for (let i2 = 0; i2 < 10; i2++)
      h3[i2] = h3[i2] & mask | g[i2];
    h3[0] = (h3[0] | h3[1] << 13) & 65535;
    h3[1] = (h3[1] >>> 3 | h3[2] << 10) & 65535;
    h3[2] = (h3[2] >>> 6 | h3[3] << 7) & 65535;
    h3[3] = (h3[3] >>> 9 | h3[4] << 4) & 65535;
    h3[4] = (h3[4] >>> 12 | h3[5] << 1 | h3[6] << 14) & 65535;
    h3[5] = (h3[6] >>> 2 | h3[7] << 11) & 65535;
    h3[6] = (h3[7] >>> 5 | h3[8] << 8) & 65535;
    h3[7] = (h3[8] >>> 8 | h3[9] << 5) & 65535;
    let f3 = h3[0] + pad[0];
    h3[0] = f3 & 65535;
    for (let i2 = 1; i2 < 8; i2++) {
      f3 = (h3[i2] + pad[i2] | 0) + (f3 >>> 16) | 0;
      h3[i2] = f3 & 65535;
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
    const { buffer, h: h3 } = this;
    let { pos } = this;
    if (pos) {
      buffer[pos++] = 1;
      for (; pos < 16; pos++)
        buffer[pos] = 0;
      this.process(buffer, 0, true);
    }
    this.finalize();
    let opos = 0;
    for (let i2 = 0; i2 < 8; i2++) {
      out[opos++] = h3[i2] >>> 0;
      out[opos++] = h3[i2] >>> 8;
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
  toString: toString3,
  fromString: fromString2,
  concat
};
function bytesToBase64url(b) {
  return u8a4.toString(b, "base64url");
}
function base64ToBytes(s2) {
  const inputBase64Url = s2.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  return u8a4.fromString(inputBase64Url, "base64url");
}
function base58ToBytes(s2) {
  return u8a4.fromString(s2, "base58btc");
}
function bytesToBase58(b) {
  return u8a4.toString(b, "base58btc");
}
function multibaseToBytes(s2) {
  const {
    base10: base102,
    base16: base162,
    base16upper: base16upper2,
    base58btc: base58btc2,
    base64: base642,
    base64url: base64url2
  } = bases;
  const baseDecoder = base58btc2.decoder.or(base102.decoder).or(base162.decoder).or(base16upper2.decoder).or(base642.decoder).or(base64url2.decoder);
  const bytes3 = baseDecoder.decode(s2);
  if ([32, 33, 48, 64, 65, 96].includes(bytes3.length)) {
    return bytes3;
  }
  try {
    const [codec, length3] = varint_exports.decode(bytes3);
    return bytes3.slice(length3);
  } catch (e2) {
    return bytes3;
  }
}
function hexToBytes2(s2, minLength) {
  let input = s2.startsWith("0x") ? s2.substring(2) : s2;
  if (input.length % 2 !== 0) {
    input = `0${input}`;
  }
  if (minLength) {
    const paddedLength = Math.max(input.length, minLength * 2);
    input = input.padStart(paddedLength, "00");
  }
  return u8a4.fromString(input.toLowerCase(), "base16");
}
function decodeBase64url(s2) {
  return u8a4.toString(base64ToBytes(s2));
}
function bytesToHex2(b) {
  return u8a4.toString(b, "base16");
}
function bytesToBigInt(b) {
  return BigInt(`0x` + u8a4.toString(b, "base16"));
}
function stringToBytes(s2) {
  return u8a4.fromString(s2);
}
function toJose({
  r: r2,
  s: s2,
  recoveryParam
}, recoverable) {
  const jose = new Uint8Array(recoverable ? 65 : 64);
  jose.set(u8a4.fromString(r2, "base16"), 0);
  jose.set(u8a4.fromString(s2, "base16"), 32);
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
  const r2 = bytesToHex2(signatureBytes.slice(0, 32));
  const s2 = bytesToHex2(signatureBytes.slice(32, 64));
  const recoveryParam = signatureBytes.length === 65 ? signatureBytes[64] : void 0;
  return {
    r: r2,
    s: s2,
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
  return `0x${toString3(keccak(hashInput).slice(-20), "base16")}`;
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
    } catch (e2) {
      return Promise.reject(e2);
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
    } catch (e2) {
      return Promise.reject(e2);
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
    } catch (e2) {
      return Promise.reject(e2);
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
  const r2 = bytesToHex2(rawSig.slice(0, 32));
  const s2 = bytesToHex2(rawSig.slice(32, 64));
  const sigObj = {
    r: r2,
    s: s2
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
  const fullPublicKeys = authenticators.filter((a2) => !a2.ethereumAddress && !a2.blockchainAccountId);
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
  const fullPublicKeys = authenticators.filter((a2) => {
    return !a2.ethereumAddress && !a2.blockchainAccountId;
  });
  const blockchainAddressKeys = authenticators.filter((a2) => {
    return a2.ethereumAddress || a2.blockchainAccountId;
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
    return authenticators.find((a2) => {
      const keyHex = bytesToHex2(extractPublicKeyBytes(a2));
      return keyHex === recoveredPublicKeyHex || keyHex === recoveredCompressedPublicKeyHex || a2.ethereumAddress?.toLowerCase() === recoveredAddress || a2.blockchainAccountId?.split("@eip155")?.[0].toLowerCase() === recoveredAddress || // CAIP-2
      verifyBlockchainAccountId(recoveredPublicKeyHex, a2.blockchainAccountId);
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
  const signer = authenticators.find((a2) => {
    return ed25519.verify(signatureBytes, clear, extractPublicKeyBytes(a2));
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
  } catch (e2) {
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
  return Array.isArray(source) ? source.map((item) => deepCopy(item)) : source instanceof Date ? new Date(source.getTime()) : source && typeof source === "object" ? Object.getOwnPropertyNames(source).reduce((o2, prop) => {
    Object.defineProperty(o2, prop, Object.getOwnPropertyDescriptor(source, prop));
    o2[prop] = deepCopy(source[prop]);
    return o2;
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
  } catch (e2) {
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
      } catch (e2) {
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
  let i2 = bytes3.length;
  if (typeof link.Tsize === "number") {
    if (link.Tsize < 0) {
      throw new Error("Tsize cannot be negative");
    }
    if (!Number.isSafeInteger(link.Tsize)) {
      throw new Error("Tsize too large for encoding");
    }
    i2 = encodeVarint(bytes3, i2, link.Tsize) - 1;
    bytes3[i2] = 24;
  }
  if (typeof link.Name === "string") {
    const nameBytes = textEncoder2.encode(link.Name);
    i2 -= nameBytes.length;
    bytes3.set(nameBytes, i2);
    i2 = encodeVarint(bytes3, i2, nameBytes.length) - 1;
    bytes3[i2] = 18;
  }
  if (link.Hash) {
    i2 -= link.Hash.length;
    bytes3.set(link.Hash, i2);
    i2 = encodeVarint(bytes3, i2, link.Hash.length) - 1;
    bytes3[i2] = 10;
  }
  return bytes3.length - i2;
}
function encodeNode(node2) {
  const size = sizeNode(node2);
  const bytes3 = new Uint8Array(size);
  let i2 = size;
  if (node2.Data) {
    i2 -= node2.Data.length;
    bytes3.set(node2.Data, i2);
    i2 = encodeVarint(bytes3, i2, node2.Data.length) - 1;
    bytes3[i2] = 10;
  }
  if (node2.Links) {
    for (let index3 = node2.Links.length - 1; index3 >= 0; index3--) {
      const size2 = encodeLink(node2.Links[index3], bytes3.subarray(0, i2));
      i2 -= size2;
      i2 = encodeVarint(bytes3, i2, size2) - 1;
      bytes3[i2] = 18;
    }
  }
  return bytes3;
}
function sizeLink(link) {
  let n2 = 0;
  if (link.Hash) {
    const l3 = link.Hash.length;
    n2 += 1 + l3 + sov(l3);
  }
  if (typeof link.Name === "string") {
    const l3 = textEncoder2.encode(link.Name).length;
    n2 += 1 + l3 + sov(l3);
  }
  if (typeof link.Tsize === "number") {
    n2 += 1 + sov(link.Tsize);
  }
  return n2;
}
function sizeNode(node2) {
  let n2 = 0;
  if (node2.Data) {
    const l3 = node2.Data.length;
    n2 += 1 + l3 + sov(l3);
  }
  if (node2.Links) {
    for (const link of node2.Links) {
      const l3 = sizeLink(link);
      n2 += 1 + l3 + sov(l3);
    }
  }
  return n2;
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
  let n2 = 0;
  if (x >= maxInt32) {
    x = Math.floor(x / maxInt32);
    n2 = 32;
  }
  if (x >= 1 << 16) {
    x >>>= 16;
    n2 += 16;
  }
  if (x >= 1 << 8) {
    x >>>= 8;
    n2 += 8;
  }
  return n2 + len8tab[x];
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
function linkComparator(a2, b) {
  if (a2 === b) {
    return 0;
  }
  const abuf = a2.Name ? textEncoder3.encode(a2.Name) : [];
  const bbuf = b.Name ? textEncoder3.encode(b.Name) : [];
  let x = abuf.length;
  let y = bbuf.length;
  for (let i2 = 0, len = Math.min(x, y); i2 < len; ++i2) {
    if (abuf[i2] !== bbuf[i2]) {
      x = abuf[i2];
      y = bbuf[i2];
      break;
    }
  }
  return x < y ? -1 : y < x ? 1 : 0;
}
function hasOnlyProperties(node2, properties) {
  return !Object.keys(node2).some((p2) => !properties.includes(p2));
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
    } catch (e2) {
      throw new TypeError(`Invalid DAG-PB form: ${e2.message}`);
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
function prepare(node2) {
  if (node2 instanceof Uint8Array || typeof node2 === "string") {
    node2 = { Data: node2 };
  }
  if (typeof node2 !== "object" || Array.isArray(node2)) {
    throw new TypeError("Invalid DAG-PB form");
  }
  const pbn = {};
  if (node2.Data !== void 0) {
    if (typeof node2.Data === "string") {
      pbn.Data = textEncoder3.encode(node2.Data);
    } else if (node2.Data instanceof Uint8Array) {
      pbn.Data = node2.Data;
    } else {
      throw new TypeError("Invalid DAG-PB form");
    }
  }
  if (node2.Links !== void 0) {
    if (Array.isArray(node2.Links)) {
      pbn.Links = node2.Links.map(asLink);
      pbn.Links.sort(linkComparator);
    } else {
      throw new TypeError("Invalid DAG-PB form");
    }
  } else {
    pbn.Links = [];
  }
  return pbn;
}
function validate(node2) {
  if (!node2 || typeof node2 !== "object" || Array.isArray(node2) || node2 instanceof Uint8Array || node2["/"] && node2["/"] === node2.bytes) {
    throw new TypeError("Invalid DAG-PB form");
  }
  if (!hasOnlyProperties(node2, pbNodeProperties)) {
    throw new TypeError("Invalid DAG-PB form (extraneous properties)");
  }
  if (node2.Data !== void 0 && !(node2.Data instanceof Uint8Array)) {
    throw new TypeError("Invalid DAG-PB form (Data must be bytes)");
  }
  if (!Array.isArray(node2.Links)) {
    throw new TypeError("Invalid DAG-PB form (Links must be a list)");
  }
  for (let i2 = 0; i2 < node2.Links.length; i2++) {
    const link = node2.Links[i2];
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
    if (i2 > 0 && linkComparator(link, node2.Links[i2 - 1]) === -1) {
      throw new TypeError("Invalid DAG-PB form (links must be sorted by Name bytes)");
    }
  }
}

// node_modules/.pnpm/@ipld+dag-pb@4.0.6/node_modules/@ipld/dag-pb/src/index.js
var code2 = 112;
function encode5(node2) {
  validate(node2);
  const pbn = {};
  if (node2.Links) {
    pbn.Links = node2.Links.map((l3) => {
      const link = {};
      if (l3.Hash) {
        link.Hash = l3.Hash.bytes;
      }
      if (l3.Name !== void 0) {
        link.Name = l3.Name;
      }
      if (l3.Tsize !== void 0) {
        link.Tsize = l3.Tsize;
      }
      return link;
    });
  }
  if (node2.Data) {
    pbn.Data = node2.Data;
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
function length2(string4) {
  let len = 0;
  let c2 = 0;
  for (let i2 = 0; i2 < string4.length; ++i2) {
    c2 = string4.charCodeAt(i2);
    if (c2 < 128) {
      len += 1;
    } else if (c2 < 2048) {
      len += 2;
    } else if ((c2 & 64512) === 55296 && (string4.charCodeAt(i2 + 1) & 64512) === 56320) {
      ++i2;
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
  let i2 = 0;
  let t2;
  while (start < end) {
    t2 = buffer[start++];
    if (t2 < 128) {
      chunk[i2++] = t2;
    } else if (t2 > 191 && t2 < 224) {
      chunk[i2++] = (t2 & 31) << 6 | buffer[start++] & 63;
    } else if (t2 > 239 && t2 < 365) {
      t2 = ((t2 & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 65536;
      chunk[i2++] = 55296 + (t2 >> 10);
      chunk[i2++] = 56320 + (t2 & 1023);
    } else {
      chunk[i2++] = (t2 & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
    }
    if (i2 > 8191) {
      (parts ?? (parts = [])).push(String.fromCharCode.apply(String, chunk));
      i2 = 0;
    }
  }
  if (parts != null) {
    if (i2 > 0) {
      parts.push(String.fromCharCode.apply(String, chunk.slice(0, i2)));
    }
    return parts.join("");
  }
  return String.fromCharCode.apply(String, chunk.slice(0, i2));
}
function write(string4, buffer, offset) {
  const start = offset;
  let c1;
  let c2;
  for (let i2 = 0; i2 < string4.length; ++i2) {
    c1 = string4.charCodeAt(i2);
    if (c1 < 128) {
      buffer[offset++] = c1;
    } else if (c1 < 2048) {
      buffer[offset++] = c1 >> 6 | 192;
      buffer[offset++] = c1 & 63 | 128;
    } else if ((c1 & 64512) === 55296 && ((c2 = string4.charCodeAt(i2 + 1)) & 64512) === 56320) {
      c1 = 65536 + ((c1 & 1023) << 10) + (c2 & 1023);
      ++i2;
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
    let i2 = 0;
    if (this.len - this.pos > 4) {
      for (; i2 < 4; ++i2) {
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i2 * 7) >>> 0;
        if (this.buf[this.pos++] < 128) {
          return bits;
        }
      }
      bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
      bits.hi = (bits.hi | (this.buf[this.pos] & 127) >> 4) >>> 0;
      if (this.buf[this.pos++] < 128) {
        return bits;
      }
      i2 = 0;
    } else {
      for (; i2 < 3; ++i2) {
        if (this.pos >= this.len) {
          throw indexOutOfRange(this);
        }
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i2 * 7) >>> 0;
        if (this.buf[this.pos++] < 128) {
          return bits;
        }
      }
      bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i2 * 7) >>> 0;
      return bits;
    }
    if (this.len - this.pos > 4) {
      for (; i2 < 5; ++i2) {
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i2 * 7 + 3) >>> 0;
        if (this.buf[this.pos++] < 128) {
          return bits;
        }
      }
    } else {
      for (; i2 < 5; ++i2) {
        if (this.pos >= this.len) {
          throw indexOutOfRange(this);
        }
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i2 * 7 + 3) >>> 0;
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
function createCodec2(name2, type, encode6, decode7) {
  return {
    name: name2,
    type,
    encode: encode6,
    decode: decode7
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
  const decode7 = function enumDecode(reader) {
    const val = reader.int32();
    return findValue(val);
  };
  return createCodec2("enum", CODEC_TYPES.VARINT, encode6, decode7);
}

// node_modules/.pnpm/protons-runtime@5.0.5/node_modules/protons-runtime/dist/src/codecs/message.js
function message(encode6, decode7) {
  return createCodec2("message", CODEC_TYPES.LENGTH_DELIMITED, encode6, decode7);
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
  removeBlockSize(index3) {
    this.blockSizes.splice(index3, 1);
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

// node_modules/.pnpm/@veramo+utils@5.5.4-next.20/node_modules/@veramo/utils/build/credential-utils.js
function computeEntryHash(input) {
  let hashable;
  if (typeof input === "string") {
    try {
      const cred = JSON.parse(input);
      hashable = cred?.proof?.jwt || input;
    } catch (e2) {
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

// node_modules/.pnpm/@veramo+utils@5.5.4-next.20/node_modules/@veramo/utils/build/did-utils.js
var import_debug = __toESM(require_browser(), 1);
var debug = (0, import_debug.default)("veramo:utils");

// src/markdown.tsx
var import_agent_explorer_plugin9 = __toESM(require_agent_explorer_plugin(), 1);
var import_use_text_selection = __toESM(require_dist(), 1);
var import_antd11 = __toESM(require_antd(), 1);

// src/CredentialLoader.tsx
var import_agent_explorer_plugin8 = __toESM(require_agent_explorer_plugin(), 1);
var import_veramo_react8 = __toESM(require_veramo_react(), 1);
var import_antd10 = __toESM(require_antd(), 1);
var import_react22 = __toESM(require_react(), 1);
var import_uuid4 = __toESM(require_uuid(), 1);
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var CredentialLoader = ({ hash: hash3, did, context }) => {
  const [credential, setCredential] = (0, import_react22.useState)();
  const { agents } = (0, import_veramo_react8.useVeramo)();
  const agent = import_react22.default.useMemo(() => {
    return agents.find((agent2) => agent2.context.id === "web3Agent");
  }, [agents]);
  console.log("agent: ", agent);
  (0, import_react22.useEffect)(() => {
    const load = async () => {
      let verifiableCredential;
      try {
        verifiableCredential = await agent?.dataStoreGetVerifiableCredential({
          hash: hash3
        });
      } catch (ex) {
        console.log("credential not found locally");
      }
      if (verifiableCredential) {
        setCredential({ hash: hash3, verifiableCredential });
      } else {
        const temporarySender = await agent?.didManagerCreate({ provider: "did:key" });
        if (temporarySender) {
          const requestCredMessage = {
            type: "https://veramo.io/didcomm/brainshare/1.0/request-credential",
            from: temporarySender.did,
            to: did,
            id: (0, import_uuid4.v4)(),
            body: {
              hash: hash3
            },
            return_route: "all"
          };
          const packedMessage = await agent?.packDIDCommMessage({ message: requestCredMessage, packing: "authcrypt" });
          await agent?.sendDIDCommMessage({ packedMessage, messageId: requestCredMessage.id, recipientDidUrl: did });
          await agent?.didManagerDelete({ did: temporarySender.did });
          const localCred = await agent?.dataStoreGetVerifiableCredential({ hash: hash3 });
          setCredential({ hash: hash3, verifiableCredential: localCred });
        }
      }
    };
    load();
  }, [agent, hash3]);
  return credential ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_agent_explorer_plugin8.VerifiableCredentialComponent, { credential, context }) : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_antd10.Spin, {});
};

// src/markdown.tsx
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var getMarkdownComponents = () => {
  return {
    p(props) {
      const { notification } = import_antd11.App.useApp();
      const ref = import_react23.default.useRef(null);
      const { clientRect, isCollapsed, textContent } = (0, import_use_text_selection.useTextSelection)(ref.current === null ? void 0 : ref.current);
      const credential = props.node?.credential;
      const { enabled, start, end } = import_react23.default.useMemo(() => {
        let enabled2 = false;
        let start2 = -1;
        let end2 = -1;
        const originalContent = String(props.children);
        if (textContent) {
          const index3 = originalContent.indexOf(textContent);
          if (index3 >= 0) {
            enabled2 = true;
            start2 = (props.node?.position?.start.offset || 0) + index3;
            end2 = start2 + textContent.length;
          }
        }
        return { enabled: enabled2, start: start2, end: end2 };
      }, [textContent, props.children]);
      const handleCopyReference = () => {
        const reference = `\`\`\`vc+multihash
${(0, import_agent_explorer_plugin9.getIssuerDID)(credential.verifiableCredential)}/${credential.hash}#${start}-${end}
\`\`\``;
        navigator.clipboard.writeText(reference);
        notification.success({
          message: "Credential reference copied to clipboard"
        });
      };
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { style: { position: "relative" }, children: [
        clientRect && !isCollapsed && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          "div",
          {
            style: {
              left: 0,
              top: -40,
              position: "absolute",
              backgroundColor: "black"
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
              import_antd11.Button,
              {
                type: "primary",
                disabled: !enabled,
                onClick: handleCopyReference,
                icon: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(PicLeftOutlined_default2, {}),
                children: "Copy reference"
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { ref, children: props.children })
      ] });
    },
    pre(props) {
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, { children: props.children });
    },
    code(props) {
      const { children, className, node: node2, ...rest } = props;
      switch (className?.toLowerCase()) {
        case "language-vc+jwt":
          const verifiableCredential = normalizeCredential(String(children).replace(/\s/g, ""));
          const hash3 = computeEntryHash(verifiableCredential);
          return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_agent_explorer_plugin9.VerifiableCredentialComponent, { credential: { hash: hash3, verifiableCredential } });
        case "language-vc+json":
          const verifiableCredential2 = JSON.parse(String(children));
          const hash22 = computeEntryHash(verifiableCredential2);
          return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_agent_explorer_plugin9.VerifiableCredentialComponent, { credential: { hash: hash22, verifiableCredential: verifiableCredential2 } });
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
          const a2 = hash32.split("#");
          if (a2.length === 2) {
            hash32 = a2[0];
            context = { textRange: a2[1] };
          }
          return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(CredentialLoader, { hash: hash32, did, context });
        default:
          return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("code", { ...rest, className, children });
      }
    }
  };
};

// src/IdentifierHoverComponent.tsx
var import_react24 = __toESM(require_react(), 1);
var import_veramo_react9 = __toESM(require_veramo_react(), 1);
var import_react_query6 = __toESM(require_react_query(), 1);
var import_antd12 = __toESM(require_antd(), 1);
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var IdentifierHoverComponent = ({ did }) => {
  const { agent } = (0, import_veramo_react9.useVeramo)();
  const { data: credentials, isLoading } = (0, import_react_query6.useQuery)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_antd12.Spin, {});
  }
  if (!domain) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_antd12.Typography.Text, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CheckCircleOutlined_default2, {}),
    " ",
    domain
  ] });
};

// src/BrainShareIndex.tsx
var import_antd13 = __toESM(require_antd(), 1);
var import_agent_explorer_plugin10 = __toESM(require_agent_explorer_plugin(), 1);
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var BrainShareIndex = ({ credential: { verifiableCredential } }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_antd13.Typography.Title, { level: 5, children: "BrainShare Index" }),
    verifiableCredential.credentialSubject.index && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("ul", { children: Object.keys(verifiableCredential.credentialSubject.index).map((item, key) => {
      return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("a", { href: `/brainshare/${(0, import_agent_explorer_plugin10.getIssuerDID)(verifiableCredential)}/${verifiableCredential.credentialSubject.index[item]}`, children: item }) }, key);
    }) })
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
        if (credential.verifiableCredential.type?.includes("BrainShareIndex")) {
          return BrainShareIndex;
        }
        return void 0;
      },
      getCredentialContextMenuItems,
      getMarkdownComponents,
      getRemarkPlugins: () => [[p, {
        aliasDivider: "|",
        hrefTemplate: (permalink) => `${permalink}`,
        pageResolver: (name2) => [`/brainshare/${name2}`]
      }]],
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
