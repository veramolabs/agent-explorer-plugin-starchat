var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
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

// node_modules/.pnpm/lodash.camelcase@4.3.0/node_modules/lodash.camelcase/index.js
var require_lodash = __commonJS({
  "node_modules/.pnpm/lodash.camelcase@4.3.0/node_modules/lodash.camelcase/index.js"(exports, module) {
    var INFINITY = 1 / 0;
    var symbolTag = "[object Symbol]";
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
    var rsComboSymbolsRange = "\\u20d0-\\u20f0";
    var rsDingbatRange = "\\u2700-\\u27bf";
    var rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
    var rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
    var rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
    var rsPunctuationRange = "\\u2000-\\u206f";
    var rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
    var rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    var rsApos = "['\u2019]";
    var rsAstral = "[" + rsAstralRange + "]";
    var rsBreak = "[" + rsBreakRange + "]";
    var rsCombo = "[" + rsComboMarksRange + rsComboSymbolsRange + "]";
    var rsDigits = "\\d+";
    var rsDingbat = "[" + rsDingbatRange + "]";
    var rsLower = "[" + rsLowerRange + "]";
    var rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]";
    var rsFitz = "\\ud83c[\\udffb-\\udfff]";
    var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
    var rsNonAstral = "[^" + rsAstralRange + "]";
    var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
    var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
    var rsUpper = "[" + rsUpperRange + "]";
    var rsZWJ = "\\u200d";
    var rsLowerMisc = "(?:" + rsLower + "|" + rsMisc + ")";
    var rsUpperMisc = "(?:" + rsUpper + "|" + rsMisc + ")";
    var rsOptLowerContr = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?";
    var rsOptUpperContr = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?";
    var reOptMod = rsModifier + "?";
    var rsOptVar = "[" + rsVarRange + "]?";
    var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
    var rsSeq = rsOptVar + reOptMod + rsOptJoin;
    var rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq;
    var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reApos = RegExp(rsApos, "g");
    var reComboMark = RegExp(rsCombo, "g");
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    var reUnicodeWord = RegExp([
      rsUpper + "?" + rsLower + "+" + rsOptLowerContr + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
      rsUpperMisc + "+" + rsOptUpperContr + "(?=" + [rsBreak, rsUpper + rsLowerMisc, "$"].join("|") + ")",
      rsUpper + "?" + rsLowerMisc + "+" + rsOptLowerContr,
      rsUpper + "+" + rsOptUpperContr,
      rsDigits,
      rsEmoji
    ].join("|"), "g");
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + "]");
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    var deburredLetters = {
      // Latin-1 Supplement block.
      "\xC0": "A",
      "\xC1": "A",
      "\xC2": "A",
      "\xC3": "A",
      "\xC4": "A",
      "\xC5": "A",
      "\xE0": "a",
      "\xE1": "a",
      "\xE2": "a",
      "\xE3": "a",
      "\xE4": "a",
      "\xE5": "a",
      "\xC7": "C",
      "\xE7": "c",
      "\xD0": "D",
      "\xF0": "d",
      "\xC8": "E",
      "\xC9": "E",
      "\xCA": "E",
      "\xCB": "E",
      "\xE8": "e",
      "\xE9": "e",
      "\xEA": "e",
      "\xEB": "e",
      "\xCC": "I",
      "\xCD": "I",
      "\xCE": "I",
      "\xCF": "I",
      "\xEC": "i",
      "\xED": "i",
      "\xEE": "i",
      "\xEF": "i",
      "\xD1": "N",
      "\xF1": "n",
      "\xD2": "O",
      "\xD3": "O",
      "\xD4": "O",
      "\xD5": "O",
      "\xD6": "O",
      "\xD8": "O",
      "\xF2": "o",
      "\xF3": "o",
      "\xF4": "o",
      "\xF5": "o",
      "\xF6": "o",
      "\xF8": "o",
      "\xD9": "U",
      "\xDA": "U",
      "\xDB": "U",
      "\xDC": "U",
      "\xF9": "u",
      "\xFA": "u",
      "\xFB": "u",
      "\xFC": "u",
      "\xDD": "Y",
      "\xFD": "y",
      "\xFF": "y",
      "\xC6": "Ae",
      "\xE6": "ae",
      "\xDE": "Th",
      "\xFE": "th",
      "\xDF": "ss",
      // Latin Extended-A block.
      "\u0100": "A",
      "\u0102": "A",
      "\u0104": "A",
      "\u0101": "a",
      "\u0103": "a",
      "\u0105": "a",
      "\u0106": "C",
      "\u0108": "C",
      "\u010A": "C",
      "\u010C": "C",
      "\u0107": "c",
      "\u0109": "c",
      "\u010B": "c",
      "\u010D": "c",
      "\u010E": "D",
      "\u0110": "D",
      "\u010F": "d",
      "\u0111": "d",
      "\u0112": "E",
      "\u0114": "E",
      "\u0116": "E",
      "\u0118": "E",
      "\u011A": "E",
      "\u0113": "e",
      "\u0115": "e",
      "\u0117": "e",
      "\u0119": "e",
      "\u011B": "e",
      "\u011C": "G",
      "\u011E": "G",
      "\u0120": "G",
      "\u0122": "G",
      "\u011D": "g",
      "\u011F": "g",
      "\u0121": "g",
      "\u0123": "g",
      "\u0124": "H",
      "\u0126": "H",
      "\u0125": "h",
      "\u0127": "h",
      "\u0128": "I",
      "\u012A": "I",
      "\u012C": "I",
      "\u012E": "I",
      "\u0130": "I",
      "\u0129": "i",
      "\u012B": "i",
      "\u012D": "i",
      "\u012F": "i",
      "\u0131": "i",
      "\u0134": "J",
      "\u0135": "j",
      "\u0136": "K",
      "\u0137": "k",
      "\u0138": "k",
      "\u0139": "L",
      "\u013B": "L",
      "\u013D": "L",
      "\u013F": "L",
      "\u0141": "L",
      "\u013A": "l",
      "\u013C": "l",
      "\u013E": "l",
      "\u0140": "l",
      "\u0142": "l",
      "\u0143": "N",
      "\u0145": "N",
      "\u0147": "N",
      "\u014A": "N",
      "\u0144": "n",
      "\u0146": "n",
      "\u0148": "n",
      "\u014B": "n",
      "\u014C": "O",
      "\u014E": "O",
      "\u0150": "O",
      "\u014D": "o",
      "\u014F": "o",
      "\u0151": "o",
      "\u0154": "R",
      "\u0156": "R",
      "\u0158": "R",
      "\u0155": "r",
      "\u0157": "r",
      "\u0159": "r",
      "\u015A": "S",
      "\u015C": "S",
      "\u015E": "S",
      "\u0160": "S",
      "\u015B": "s",
      "\u015D": "s",
      "\u015F": "s",
      "\u0161": "s",
      "\u0162": "T",
      "\u0164": "T",
      "\u0166": "T",
      "\u0163": "t",
      "\u0165": "t",
      "\u0167": "t",
      "\u0168": "U",
      "\u016A": "U",
      "\u016C": "U",
      "\u016E": "U",
      "\u0170": "U",
      "\u0172": "U",
      "\u0169": "u",
      "\u016B": "u",
      "\u016D": "u",
      "\u016F": "u",
      "\u0171": "u",
      "\u0173": "u",
      "\u0174": "W",
      "\u0175": "w",
      "\u0176": "Y",
      "\u0177": "y",
      "\u0178": "Y",
      "\u0179": "Z",
      "\u017B": "Z",
      "\u017D": "Z",
      "\u017A": "z",
      "\u017C": "z",
      "\u017E": "z",
      "\u0132": "IJ",
      "\u0133": "ij",
      "\u0152": "Oe",
      "\u0153": "oe",
      "\u0149": "'n",
      "\u017F": "ss"
    };
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1, length = array ? array.length : 0;
      if (initAccum && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }
    function asciiToArray(string) {
      return string.split("");
    }
    function asciiWords(string) {
      return string.match(reAsciiWord) || [];
    }
    function basePropertyOf(object) {
      return function(key) {
        return object == null ? void 0 : object[key];
      };
    }
    var deburrLetter = basePropertyOf(deburredLetters);
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    function hasUnicodeWord(string) {
      return reHasUnicodeWord.test(string);
    }
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    function unicodeWords(string) {
      return string.match(reUnicodeWord) || [];
    }
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var Symbol2 = root.Symbol;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseSlice(array, start, end) {
      var index = -1, length = array.length;
      if (start < 0) {
        start = -start > length ? 0 : length + start;
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : end - start >>> 0;
      start >>>= 0;
      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === void 0 ? length : end;
      return !start && end >= length ? array : baseSlice(array, start, end);
    }
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);
        var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
        var chr = strSymbols ? strSymbols[0] : string.charAt(0);
        var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
        return chr[methodName]() + trailing;
      };
    }
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
      };
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    var camelCase2 = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
    }
    var upperFirst = createCaseFirst("toUpperCase");
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? void 0 : pattern;
      if (pattern === void 0) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }
    module.exports = camelCase2;
  }
});

// external-global-plugin:antd
var require_antd = __commonJS({
  "external-global-plugin:antd"(exports, module) {
    module.exports = window.antd;
  }
});

// external-global-plugin:@veramo-community/veramo-react
var require_veramo_react = __commonJS({
  "external-global-plugin:@veramo-community/veramo-react"(exports, module) {
    module.exports = window.veramoreact;
  }
});

// external-global-plugin:react-query
var require_react_query = __commonJS({
  "external-global-plugin:react-query"(exports, module) {
    module.exports = window.reactquery;
  }
});

// node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/alea.js
var require_alea = __commonJS({
  "node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/alea.js"(exports, module) {
    (function(global2, module2, define2) {
      function Alea(seed) {
        var me = this, mash = Mash();
        me.next = function() {
          var t = 2091639 * me.s0 + me.c * 23283064365386963e-26;
          me.s0 = me.s1;
          me.s1 = me.s2;
          return me.s2 = t - (me.c = t | 0);
        };
        me.c = 1;
        me.s0 = mash(" ");
        me.s1 = mash(" ");
        me.s2 = mash(" ");
        me.s0 -= mash(seed);
        if (me.s0 < 0) {
          me.s0 += 1;
        }
        me.s1 -= mash(seed);
        if (me.s1 < 0) {
          me.s1 += 1;
        }
        me.s2 -= mash(seed);
        if (me.s2 < 0) {
          me.s2 += 1;
        }
        mash = null;
      }
      function copy(f, t) {
        t.c = f.c;
        t.s0 = f.s0;
        t.s1 = f.s1;
        t.s2 = f.s2;
        return t;
      }
      function impl(seed, opts) {
        var xg = new Alea(seed), state = opts && opts.state, prng = xg.next;
        prng.int32 = function() {
          return xg.next() * 4294967296 | 0;
        };
        prng.double = function() {
          return prng() + (prng() * 2097152 | 0) * 11102230246251565e-32;
        };
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      function Mash() {
        var n = 4022871197;
        var mash = function(data) {
          data = String(data);
          for (var i = 0; i < data.length; i++) {
            n += data.charCodeAt(i);
            var h = 0.02519603282416938 * n;
            n = h >>> 0;
            h -= n;
            h *= n;
            n = h >>> 0;
            h -= n;
            n += h * 4294967296;
          }
          return (n >>> 0) * 23283064365386963e-26;
        };
        return mash;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.alea = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xor128.js
var require_xor128 = __commonJS({
  "node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xor128.js"(exports, module) {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        me.next = function() {
          var t = me.x ^ me.x << 11;
          me.x = me.y;
          me.y = me.z;
          me.z = me.w;
          return me.w ^= me.w >>> 19 ^ t ^ t >>> 8;
        };
        if (seed === (seed | 0)) {
          me.x = seed;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 64; k++) {
          me.x ^= strseed.charCodeAt(k) | 0;
          me.next();
        }
      }
      function copy(f, t) {
        t.x = f.x;
        t.y = f.y;
        t.z = f.z;
        t.w = f.w;
        return t;
      }
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xor128 = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xorwow.js
var require_xorwow = __commonJS({
  "node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xorwow.js"(exports, module) {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.next = function() {
          var t = me.x ^ me.x >>> 2;
          me.x = me.y;
          me.y = me.z;
          me.z = me.w;
          me.w = me.v;
          return (me.d = me.d + 362437 | 0) + (me.v = me.v ^ me.v << 4 ^ (t ^ t << 1)) | 0;
        };
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        me.v = 0;
        if (seed === (seed | 0)) {
          me.x = seed;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 64; k++) {
          me.x ^= strseed.charCodeAt(k) | 0;
          if (k == strseed.length) {
            me.d = me.x << 10 ^ me.x >>> 4;
          }
          me.next();
        }
      }
      function copy(f, t) {
        t.x = f.x;
        t.y = f.y;
        t.z = f.z;
        t.w = f.w;
        t.v = f.v;
        t.d = f.d;
        return t;
      }
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xorwow = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xorshift7.js
var require_xorshift7 = __commonJS({
  "node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xorshift7.js"(exports, module) {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this;
        me.next = function() {
          var X = me.x, i = me.i, t, v, w;
          t = X[i];
          t ^= t >>> 7;
          v = t ^ t << 24;
          t = X[i + 1 & 7];
          v ^= t ^ t >>> 10;
          t = X[i + 3 & 7];
          v ^= t ^ t >>> 3;
          t = X[i + 4 & 7];
          v ^= t ^ t << 7;
          t = X[i + 7 & 7];
          t = t ^ t << 13;
          v ^= t ^ t << 9;
          X[i] = v;
          me.i = i + 1 & 7;
          return v;
        };
        function init(me2, seed2) {
          var j, w, X = [];
          if (seed2 === (seed2 | 0)) {
            w = X[0] = seed2;
          } else {
            seed2 = "" + seed2;
            for (j = 0; j < seed2.length; ++j) {
              X[j & 7] = X[j & 7] << 15 ^ seed2.charCodeAt(j) + X[j + 1 & 7] << 13;
            }
          }
          while (X.length < 8)
            X.push(0);
          for (j = 0; j < 8 && X[j] === 0; ++j)
            ;
          if (j == 8)
            w = X[7] = -1;
          else
            w = X[j];
          me2.x = X;
          me2.i = 0;
          for (j = 256; j > 0; --j) {
            me2.next();
          }
        }
        init(me, seed);
      }
      function copy(f, t) {
        t.x = f.x.slice();
        t.i = f.i;
        return t;
      }
      function impl(seed, opts) {
        if (seed == null)
          seed = +/* @__PURE__ */ new Date();
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (state.x)
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xorshift7 = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xor4096.js
var require_xor4096 = __commonJS({
  "node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xor4096.js"(exports, module) {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this;
        me.next = function() {
          var w = me.w, X = me.X, i = me.i, t, v;
          me.w = w = w + 1640531527 | 0;
          v = X[i + 34 & 127];
          t = X[i = i + 1 & 127];
          v ^= v << 13;
          t ^= t << 17;
          v ^= v >>> 15;
          t ^= t >>> 12;
          v = X[i] = v ^ t;
          me.i = i;
          return v + (w ^ w >>> 16) | 0;
        };
        function init(me2, seed2) {
          var t, v, i, j, w, X = [], limit = 128;
          if (seed2 === (seed2 | 0)) {
            v = seed2;
            seed2 = null;
          } else {
            seed2 = seed2 + "\0";
            v = 0;
            limit = Math.max(limit, seed2.length);
          }
          for (i = 0, j = -32; j < limit; ++j) {
            if (seed2)
              v ^= seed2.charCodeAt((j + 32) % seed2.length);
            if (j === 0)
              w = v;
            v ^= v << 10;
            v ^= v >>> 15;
            v ^= v << 4;
            v ^= v >>> 13;
            if (j >= 0) {
              w = w + 1640531527 | 0;
              t = X[j & 127] ^= v + w;
              i = 0 == t ? i + 1 : 0;
            }
          }
          if (i >= 128) {
            X[(seed2 && seed2.length || 0) & 127] = -1;
          }
          i = 127;
          for (j = 4 * 128; j > 0; --j) {
            v = X[i + 34 & 127];
            t = X[i = i + 1 & 127];
            v ^= v << 13;
            t ^= t << 17;
            v ^= v >>> 15;
            t ^= t >>> 12;
            X[i] = v ^ t;
          }
          me2.w = w;
          me2.X = X;
          me2.i = i;
        }
        init(me, seed);
      }
      function copy(f, t) {
        t.i = f.i;
        t.w = f.w;
        t.X = f.X.slice();
        return t;
      }
      ;
      function impl(seed, opts) {
        if (seed == null)
          seed = +/* @__PURE__ */ new Date();
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (state.X)
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xor4096 = impl;
      }
    })(
      exports,
      // window object or global
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/tychei.js
var require_tychei = __commonJS({
  "node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/tychei.js"(exports, module) {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.next = function() {
          var b = me.b, c = me.c, d = me.d, a = me.a;
          b = b << 25 ^ b >>> 7 ^ c;
          c = c - d | 0;
          d = d << 24 ^ d >>> 8 ^ a;
          a = a - b | 0;
          me.b = b = b << 20 ^ b >>> 12 ^ c;
          me.c = c = c - d | 0;
          me.d = d << 16 ^ c >>> 16 ^ a;
          return me.a = a - b | 0;
        };
        me.a = 0;
        me.b = 0;
        me.c = 2654435769 | 0;
        me.d = 1367130551;
        if (seed === Math.floor(seed)) {
          me.a = seed / 4294967296 | 0;
          me.b = seed | 0;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 20; k++) {
          me.b ^= strseed.charCodeAt(k) | 0;
          me.next();
        }
      }
      function copy(f, t) {
        t.a = f.a;
        t.b = f.b;
        t.c = f.c;
        t.d = f.d;
        return t;
      }
      ;
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.tychei = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// (disabled):crypto
var require_crypto = __commonJS({
  "(disabled):crypto"() {
  }
});

// node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/seedrandom.js
var require_seedrandom = __commonJS({
  "node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/seedrandom.js"(exports, module) {
    (function(global2, pool, math) {
      var width = 256, chunks = 6, digits = 52, rngname = "random", startdenom = math.pow(width, chunks), significance = math.pow(2, digits), overflow = significance * 2, mask = width - 1, nodecrypto;
      function seedrandom(seed, options, callback) {
        var key = [];
        options = options == true ? { entropy: true } : options || {};
        var shortseed = mixkey(flatten(
          options.entropy ? [seed, tostring(pool)] : seed == null ? autoseed() : seed,
          3
        ), key);
        var arc4 = new ARC4(key);
        var prng = function() {
          var n = arc4.g(chunks), d = startdenom, x = 0;
          while (n < significance) {
            n = (n + x) * width;
            d *= width;
            x = arc4.g(1);
          }
          while (n >= overflow) {
            n /= 2;
            d /= 2;
            x >>>= 1;
          }
          return (n + x) / d;
        };
        prng.int32 = function() {
          return arc4.g(4) | 0;
        };
        prng.quick = function() {
          return arc4.g(4) / 4294967296;
        };
        prng.double = prng;
        mixkey(tostring(arc4.S), pool);
        return (options.pass || callback || function(prng2, seed2, is_math_call, state) {
          if (state) {
            if (state.S) {
              copy(state, arc4);
            }
            prng2.state = function() {
              return copy(arc4, {});
            };
          }
          if (is_math_call) {
            math[rngname] = prng2;
            return seed2;
          } else
            return prng2;
        })(
          prng,
          shortseed,
          "global" in options ? options.global : this == math,
          options.state
        );
      }
      function ARC4(key) {
        var t, keylen = key.length, me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];
        if (!keylen) {
          key = [keylen++];
        }
        while (i < width) {
          s[i] = i++;
        }
        for (i = 0; i < width; i++) {
          s[i] = s[j = mask & j + key[i % keylen] + (t = s[i])];
          s[j] = t;
        }
        (me.g = function(count) {
          var t2, r = 0, i2 = me.i, j2 = me.j, s2 = me.S;
          while (count--) {
            t2 = s2[i2 = mask & i2 + 1];
            r = r * width + s2[mask & (s2[i2] = s2[j2 = mask & j2 + t2]) + (s2[j2] = t2)];
          }
          me.i = i2;
          me.j = j2;
          return r;
        })(width);
      }
      function copy(f, t) {
        t.i = f.i;
        t.j = f.j;
        t.S = f.S.slice();
        return t;
      }
      ;
      function flatten(obj, depth) {
        var result = [], typ = typeof obj, prop;
        if (depth && typ == "object") {
          for (prop in obj) {
            try {
              result.push(flatten(obj[prop], depth - 1));
            } catch (e) {
            }
          }
        }
        return result.length ? result : typ == "string" ? obj : obj + "\0";
      }
      function mixkey(seed, key) {
        var stringseed = seed + "", smear, j = 0;
        while (j < stringseed.length) {
          key[mask & j] = mask & (smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++);
        }
        return tostring(key);
      }
      function autoseed() {
        try {
          var out;
          if (nodecrypto && (out = nodecrypto.randomBytes)) {
            out = out(width);
          } else {
            out = new Uint8Array(width);
            (global2.crypto || global2.msCrypto).getRandomValues(out);
          }
          return tostring(out);
        } catch (e) {
          var browser = global2.navigator, plugins = browser && browser.plugins;
          return [+/* @__PURE__ */ new Date(), global2, plugins, global2.screen, tostring(pool)];
        }
      }
      function tostring(a) {
        return String.fromCharCode.apply(0, a);
      }
      mixkey(math.random(), pool);
      if (typeof module == "object" && module.exports) {
        module.exports = seedrandom;
        try {
          nodecrypto = require_crypto();
        } catch (ex) {
        }
      } else if (typeof define == "function" && define.amd) {
        define(function() {
          return seedrandom;
        });
      } else {
        math["seed" + rngname] = seedrandom;
      }
    })(
      // global: `self` in browsers (including strict mode and web workers),
      // otherwise `this` in Node and other environments
      typeof self !== "undefined" ? self : exports,
      [],
      // pool: entropy pool starts empty
      Math
      // math: package containing random, pow, and seedrandom
    );
  }
});

// node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/index.js
var require_seedrandom2 = __commonJS({
  "node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/index.js"(exports, module) {
    var alea = require_alea();
    var xor128 = require_xor128();
    var xorwow = require_xorwow();
    var xorshift7 = require_xorshift7();
    var xor4096 = require_xor4096();
    var tychei = require_tychei();
    var sr = require_seedrandom();
    sr.alea = alea;
    sr.xor128 = xor128;
    sr.xorwow = xorwow;
    sr.xorshift7 = xorshift7;
    sr.xor4096 = xor4096;
    sr.tychei = tychei;
    module.exports = sr;
  }
});

// node_modules/.pnpm/random-words@1.3.0/node_modules/random-words/index.js
var require_random_words = __commonJS({
  "node_modules/.pnpm/random-words@1.3.0/node_modules/random-words/index.js"(exports, module) {
    var seedrandom = require_seedrandom2();
    var wordList = [
      // Borrowed from xkcd password generator which borrowed it from wherever
      "ability",
      "able",
      "aboard",
      "about",
      "above",
      "accept",
      "accident",
      "according",
      "account",
      "accurate",
      "acres",
      "across",
      "act",
      "action",
      "active",
      "activity",
      "actual",
      "actually",
      "add",
      "addition",
      "additional",
      "adjective",
      "adult",
      "adventure",
      "advice",
      "affect",
      "afraid",
      "after",
      "afternoon",
      "again",
      "against",
      "age",
      "ago",
      "agree",
      "ahead",
      "aid",
      "air",
      "airplane",
      "alike",
      "alive",
      "all",
      "allow",
      "almost",
      "alone",
      "along",
      "aloud",
      "alphabet",
      "already",
      "also",
      "although",
      "am",
      "among",
      "amount",
      "ancient",
      "angle",
      "angry",
      "animal",
      "announced",
      "another",
      "answer",
      "ants",
      "any",
      "anybody",
      "anyone",
      "anything",
      "anyway",
      "anywhere",
      "apart",
      "apartment",
      "appearance",
      "apple",
      "applied",
      "appropriate",
      "are",
      "area",
      "arm",
      "army",
      "around",
      "arrange",
      "arrangement",
      "arrive",
      "arrow",
      "art",
      "article",
      "as",
      "aside",
      "ask",
      "asleep",
      "at",
      "ate",
      "atmosphere",
      "atom",
      "atomic",
      "attached",
      "attack",
      "attempt",
      "attention",
      "audience",
      "author",
      "automobile",
      "available",
      "average",
      "avoid",
      "aware",
      "away",
      "baby",
      "back",
      "bad",
      "badly",
      "bag",
      "balance",
      "ball",
      "balloon",
      "band",
      "bank",
      "bar",
      "bare",
      "bark",
      "barn",
      "base",
      "baseball",
      "basic",
      "basis",
      "basket",
      "bat",
      "battle",
      "be",
      "bean",
      "bear",
      "beat",
      "beautiful",
      "beauty",
      "became",
      "because",
      "become",
      "becoming",
      "bee",
      "been",
      "before",
      "began",
      "beginning",
      "begun",
      "behavior",
      "behind",
      "being",
      "believed",
      "bell",
      "belong",
      "below",
      "belt",
      "bend",
      "beneath",
      "bent",
      "beside",
      "best",
      "bet",
      "better",
      "between",
      "beyond",
      "bicycle",
      "bigger",
      "biggest",
      "bill",
      "birds",
      "birth",
      "birthday",
      "bit",
      "bite",
      "black",
      "blank",
      "blanket",
      "blew",
      "blind",
      "block",
      "blood",
      "blow",
      "blue",
      "board",
      "boat",
      "body",
      "bone",
      "book",
      "border",
      "born",
      "both",
      "bottle",
      "bottom",
      "bound",
      "bow",
      "bowl",
      "box",
      "boy",
      "brain",
      "branch",
      "brass",
      "brave",
      "bread",
      "break",
      "breakfast",
      "breath",
      "breathe",
      "breathing",
      "breeze",
      "brick",
      "bridge",
      "brief",
      "bright",
      "bring",
      "broad",
      "broke",
      "broken",
      "brother",
      "brought",
      "brown",
      "brush",
      "buffalo",
      "build",
      "building",
      "built",
      "buried",
      "burn",
      "burst",
      "bus",
      "bush",
      "business",
      "busy",
      "but",
      "butter",
      "buy",
      "by",
      "cabin",
      "cage",
      "cake",
      "call",
      "calm",
      "came",
      "camera",
      "camp",
      "can",
      "canal",
      "cannot",
      "cap",
      "capital",
      "captain",
      "captured",
      "car",
      "carbon",
      "card",
      "care",
      "careful",
      "carefully",
      "carried",
      "carry",
      "case",
      "cast",
      "castle",
      "cat",
      "catch",
      "cattle",
      "caught",
      "cause",
      "cave",
      "cell",
      "cent",
      "center",
      "central",
      "century",
      "certain",
      "certainly",
      "chain",
      "chair",
      "chamber",
      "chance",
      "change",
      "changing",
      "chapter",
      "character",
      "characteristic",
      "charge",
      "chart",
      "check",
      "cheese",
      "chemical",
      "chest",
      "chicken",
      "chief",
      "child",
      "children",
      "choice",
      "choose",
      "chose",
      "chosen",
      "church",
      "circle",
      "circus",
      "citizen",
      "city",
      "class",
      "classroom",
      "claws",
      "clay",
      "clean",
      "clear",
      "clearly",
      "climate",
      "climb",
      "clock",
      "close",
      "closely",
      "closer",
      "cloth",
      "clothes",
      "clothing",
      "cloud",
      "club",
      "coach",
      "coal",
      "coast",
      "coat",
      "coffee",
      "cold",
      "collect",
      "college",
      "colony",
      "color",
      "column",
      "combination",
      "combine",
      "come",
      "comfortable",
      "coming",
      "command",
      "common",
      "community",
      "company",
      "compare",
      "compass",
      "complete",
      "completely",
      "complex",
      "composed",
      "composition",
      "compound",
      "concerned",
      "condition",
      "congress",
      "connected",
      "consider",
      "consist",
      "consonant",
      "constantly",
      "construction",
      "contain",
      "continent",
      "continued",
      "contrast",
      "control",
      "conversation",
      "cook",
      "cookies",
      "cool",
      "copper",
      "copy",
      "corn",
      "corner",
      "correct",
      "correctly",
      "cost",
      "cotton",
      "could",
      "count",
      "country",
      "couple",
      "courage",
      "course",
      "court",
      "cover",
      "cow",
      "cowboy",
      "crack",
      "cream",
      "create",
      "creature",
      "crew",
      "crop",
      "cross",
      "crowd",
      "cry",
      "cup",
      "curious",
      "current",
      "curve",
      "customs",
      "cut",
      "cutting",
      "daily",
      "damage",
      "dance",
      "danger",
      "dangerous",
      "dark",
      "darkness",
      "date",
      "daughter",
      "dawn",
      "day",
      "dead",
      "deal",
      "dear",
      "death",
      "decide",
      "declared",
      "deep",
      "deeply",
      "deer",
      "definition",
      "degree",
      "depend",
      "depth",
      "describe",
      "desert",
      "design",
      "desk",
      "detail",
      "determine",
      "develop",
      "development",
      "diagram",
      "diameter",
      "did",
      "die",
      "differ",
      "difference",
      "different",
      "difficult",
      "difficulty",
      "dig",
      "dinner",
      "direct",
      "direction",
      "directly",
      "dirt",
      "dirty",
      "disappear",
      "discover",
      "discovery",
      "discuss",
      "discussion",
      "disease",
      "dish",
      "distance",
      "distant",
      "divide",
      "division",
      "do",
      "doctor",
      "does",
      "dog",
      "doing",
      "doll",
      "dollar",
      "done",
      "donkey",
      "door",
      "dot",
      "double",
      "doubt",
      "down",
      "dozen",
      "draw",
      "drawn",
      "dream",
      "dress",
      "drew",
      "dried",
      "drink",
      "drive",
      "driven",
      "driver",
      "driving",
      "drop",
      "dropped",
      "drove",
      "dry",
      "duck",
      "due",
      "dug",
      "dull",
      "during",
      "dust",
      "duty",
      "each",
      "eager",
      "ear",
      "earlier",
      "early",
      "earn",
      "earth",
      "easier",
      "easily",
      "east",
      "easy",
      "eat",
      "eaten",
      "edge",
      "education",
      "effect",
      "effort",
      "egg",
      "eight",
      "either",
      "electric",
      "electricity",
      "element",
      "elephant",
      "eleven",
      "else",
      "empty",
      "end",
      "enemy",
      "energy",
      "engine",
      "engineer",
      "enjoy",
      "enough",
      "enter",
      "entire",
      "entirely",
      "environment",
      "equal",
      "equally",
      "equator",
      "equipment",
      "escape",
      "especially",
      "essential",
      "establish",
      "even",
      "evening",
      "event",
      "eventually",
      "ever",
      "every",
      "everybody",
      "everyone",
      "everything",
      "everywhere",
      "evidence",
      "exact",
      "exactly",
      "examine",
      "example",
      "excellent",
      "except",
      "exchange",
      "excited",
      "excitement",
      "exciting",
      "exclaimed",
      "exercise",
      "exist",
      "expect",
      "experience",
      "experiment",
      "explain",
      "explanation",
      "explore",
      "express",
      "expression",
      "extra",
      "eye",
      "face",
      "facing",
      "fact",
      "factor",
      "factory",
      "failed",
      "fair",
      "fairly",
      "fall",
      "fallen",
      "familiar",
      "family",
      "famous",
      "far",
      "farm",
      "farmer",
      "farther",
      "fast",
      "fastened",
      "faster",
      "fat",
      "father",
      "favorite",
      "fear",
      "feathers",
      "feature",
      "fed",
      "feed",
      "feel",
      "feet",
      "fell",
      "fellow",
      "felt",
      "fence",
      "few",
      "fewer",
      "field",
      "fierce",
      "fifteen",
      "fifth",
      "fifty",
      "fight",
      "fighting",
      "figure",
      "fill",
      "film",
      "final",
      "finally",
      "find",
      "fine",
      "finest",
      "finger",
      "finish",
      "fire",
      "fireplace",
      "firm",
      "first",
      "fish",
      "five",
      "fix",
      "flag",
      "flame",
      "flat",
      "flew",
      "flies",
      "flight",
      "floating",
      "floor",
      "flow",
      "flower",
      "fly",
      "fog",
      "folks",
      "follow",
      "food",
      "foot",
      "football",
      "for",
      "force",
      "foreign",
      "forest",
      "forget",
      "forgot",
      "forgotten",
      "form",
      "former",
      "fort",
      "forth",
      "forty",
      "forward",
      "fought",
      "found",
      "four",
      "fourth",
      "fox",
      "frame",
      "free",
      "freedom",
      "frequently",
      "fresh",
      "friend",
      "friendly",
      "frighten",
      "frog",
      "from",
      "front",
      "frozen",
      "fruit",
      "fuel",
      "full",
      "fully",
      "fun",
      "function",
      "funny",
      "fur",
      "furniture",
      "further",
      "future",
      "gain",
      "game",
      "garage",
      "garden",
      "gas",
      "gasoline",
      "gate",
      "gather",
      "gave",
      "general",
      "generally",
      "gentle",
      "gently",
      "get",
      "getting",
      "giant",
      "gift",
      "girl",
      "give",
      "given",
      "giving",
      "glad",
      "glass",
      "globe",
      "go",
      "goes",
      "gold",
      "golden",
      "gone",
      "good",
      "goose",
      "got",
      "government",
      "grabbed",
      "grade",
      "gradually",
      "grain",
      "grandfather",
      "grandmother",
      "graph",
      "grass",
      "gravity",
      "gray",
      "great",
      "greater",
      "greatest",
      "greatly",
      "green",
      "grew",
      "ground",
      "group",
      "grow",
      "grown",
      "growth",
      "guard",
      "guess",
      "guide",
      "gulf",
      "gun",
      "habit",
      "had",
      "hair",
      "half",
      "halfway",
      "hall",
      "hand",
      "handle",
      "handsome",
      "hang",
      "happen",
      "happened",
      "happily",
      "happy",
      "harbor",
      "hard",
      "harder",
      "hardly",
      "has",
      "hat",
      "have",
      "having",
      "hay",
      "he",
      "headed",
      "heading",
      "health",
      "heard",
      "hearing",
      "heart",
      "heat",
      "heavy",
      "height",
      "held",
      "hello",
      "help",
      "helpful",
      "her",
      "herd",
      "here",
      "herself",
      "hidden",
      "hide",
      "high",
      "higher",
      "highest",
      "highway",
      "hill",
      "him",
      "himself",
      "his",
      "history",
      "hit",
      "hold",
      "hole",
      "hollow",
      "home",
      "honor",
      "hope",
      "horn",
      "horse",
      "hospital",
      "hot",
      "hour",
      "house",
      "how",
      "however",
      "huge",
      "human",
      "hundred",
      "hung",
      "hungry",
      "hunt",
      "hunter",
      "hurried",
      "hurry",
      "hurt",
      "husband",
      "ice",
      "idea",
      "identity",
      "if",
      "ill",
      "image",
      "imagine",
      "immediately",
      "importance",
      "important",
      "impossible",
      "improve",
      "in",
      "inch",
      "include",
      "including",
      "income",
      "increase",
      "indeed",
      "independent",
      "indicate",
      "individual",
      "industrial",
      "industry",
      "influence",
      "information",
      "inside",
      "instance",
      "instant",
      "instead",
      "instrument",
      "interest",
      "interior",
      "into",
      "introduced",
      "invented",
      "involved",
      "iron",
      "is",
      "island",
      "it",
      "its",
      "itself",
      "jack",
      "jar",
      "jet",
      "job",
      "join",
      "joined",
      "journey",
      "joy",
      "judge",
      "jump",
      "jungle",
      "just",
      "keep",
      "kept",
      "key",
      "kids",
      "kill",
      "kind",
      "kitchen",
      "knew",
      "knife",
      "know",
      "knowledge",
      "known",
      "label",
      "labor",
      "lack",
      "lady",
      "laid",
      "lake",
      "lamp",
      "land",
      "language",
      "large",
      "larger",
      "largest",
      "last",
      "late",
      "later",
      "laugh",
      "law",
      "lay",
      "layers",
      "lead",
      "leader",
      "leaf",
      "learn",
      "least",
      "leather",
      "leave",
      "leaving",
      "led",
      "left",
      "leg",
      "length",
      "lesson",
      "let",
      "letter",
      "level",
      "library",
      "lie",
      "life",
      "lift",
      "light",
      "like",
      "likely",
      "limited",
      "line",
      "lion",
      "lips",
      "liquid",
      "list",
      "listen",
      "little",
      "live",
      "living",
      "load",
      "local",
      "locate",
      "location",
      "log",
      "lonely",
      "long",
      "longer",
      "look",
      "loose",
      "lose",
      "loss",
      "lost",
      "lot",
      "loud",
      "love",
      "lovely",
      "low",
      "lower",
      "luck",
      "lucky",
      "lunch",
      "lungs",
      "lying",
      "machine",
      "machinery",
      "mad",
      "made",
      "magic",
      "magnet",
      "mail",
      "main",
      "mainly",
      "major",
      "make",
      "making",
      "man",
      "managed",
      "manner",
      "manufacturing",
      "many",
      "map",
      "mark",
      "market",
      "married",
      "mass",
      "massage",
      "master",
      "material",
      "mathematics",
      "matter",
      "may",
      "maybe",
      "me",
      "meal",
      "mean",
      "means",
      "meant",
      "measure",
      "meat",
      "medicine",
      "meet",
      "melted",
      "member",
      "memory",
      "men",
      "mental",
      "merely",
      "met",
      "metal",
      "method",
      "mice",
      "middle",
      "might",
      "mighty",
      "mile",
      "military",
      "milk",
      "mill",
      "mind",
      "mine",
      "minerals",
      "minute",
      "mirror",
      "missing",
      "mission",
      "mistake",
      "mix",
      "mixture",
      "model",
      "modern",
      "molecular",
      "moment",
      "money",
      "monkey",
      "month",
      "mood",
      "moon",
      "more",
      "morning",
      "most",
      "mostly",
      "mother",
      "motion",
      "motor",
      "mountain",
      "mouse",
      "mouth",
      "move",
      "movement",
      "movie",
      "moving",
      "mud",
      "muscle",
      "music",
      "musical",
      "must",
      "my",
      "myself",
      "mysterious",
      "nails",
      "name",
      "nation",
      "national",
      "native",
      "natural",
      "naturally",
      "nature",
      "near",
      "nearby",
      "nearer",
      "nearest",
      "nearly",
      "necessary",
      "neck",
      "needed",
      "needle",
      "needs",
      "negative",
      "neighbor",
      "neighborhood",
      "nervous",
      "nest",
      "never",
      "new",
      "news",
      "newspaper",
      "next",
      "nice",
      "night",
      "nine",
      "no",
      "nobody",
      "nodded",
      "noise",
      "none",
      "noon",
      "nor",
      "north",
      "nose",
      "not",
      "note",
      "noted",
      "nothing",
      "notice",
      "noun",
      "now",
      "number",
      "numeral",
      "nuts",
      "object",
      "observe",
      "obtain",
      "occasionally",
      "occur",
      "ocean",
      "of",
      "off",
      "offer",
      "office",
      "officer",
      "official",
      "oil",
      "old",
      "older",
      "oldest",
      "on",
      "once",
      "one",
      "only",
      "onto",
      "open",
      "operation",
      "opinion",
      "opportunity",
      "opposite",
      "or",
      "orange",
      "orbit",
      "order",
      "ordinary",
      "organization",
      "organized",
      "origin",
      "original",
      "other",
      "ought",
      "our",
      "ourselves",
      "out",
      "outer",
      "outline",
      "outside",
      "over",
      "own",
      "owner",
      "oxygen",
      "pack",
      "package",
      "page",
      "paid",
      "pain",
      "paint",
      "pair",
      "palace",
      "pale",
      "pan",
      "paper",
      "paragraph",
      "parallel",
      "parent",
      "park",
      "part",
      "particles",
      "particular",
      "particularly",
      "partly",
      "parts",
      "party",
      "pass",
      "passage",
      "past",
      "path",
      "pattern",
      "pay",
      "peace",
      "pen",
      "pencil",
      "people",
      "per",
      "percent",
      "perfect",
      "perfectly",
      "perhaps",
      "period",
      "person",
      "personal",
      "pet",
      "phrase",
      "physical",
      "piano",
      "pick",
      "picture",
      "pictured",
      "pie",
      "piece",
      "pig",
      "pile",
      "pilot",
      "pine",
      "pink",
      "pipe",
      "pitch",
      "place",
      "plain",
      "plan",
      "plane",
      "planet",
      "planned",
      "planning",
      "plant",
      "plastic",
      "plate",
      "plates",
      "play",
      "pleasant",
      "please",
      "pleasure",
      "plenty",
      "plural",
      "plus",
      "pocket",
      "poem",
      "poet",
      "poetry",
      "point",
      "pole",
      "police",
      "policeman",
      "political",
      "pond",
      "pony",
      "pool",
      "poor",
      "popular",
      "population",
      "porch",
      "port",
      "position",
      "positive",
      "possible",
      "possibly",
      "post",
      "pot",
      "potatoes",
      "pound",
      "pour",
      "powder",
      "power",
      "powerful",
      "practical",
      "practice",
      "prepare",
      "present",
      "president",
      "press",
      "pressure",
      "pretty",
      "prevent",
      "previous",
      "price",
      "pride",
      "primitive",
      "principal",
      "principle",
      "printed",
      "private",
      "prize",
      "probably",
      "problem",
      "process",
      "produce",
      "product",
      "production",
      "program",
      "progress",
      "promised",
      "proper",
      "properly",
      "property",
      "protection",
      "proud",
      "prove",
      "provide",
      "public",
      "pull",
      "pupil",
      "pure",
      "purple",
      "purpose",
      "push",
      "put",
      "putting",
      "quarter",
      "queen",
      "question",
      "quick",
      "quickly",
      "quiet",
      "quietly",
      "quite",
      "rabbit",
      "race",
      "radio",
      "railroad",
      "rain",
      "raise",
      "ran",
      "ranch",
      "range",
      "rapidly",
      "rate",
      "rather",
      "raw",
      "rays",
      "reach",
      "read",
      "reader",
      "ready",
      "real",
      "realize",
      "rear",
      "reason",
      "recall",
      "receive",
      "recent",
      "recently",
      "recognize",
      "record",
      "red",
      "refer",
      "refused",
      "region",
      "regular",
      "related",
      "relationship",
      "religious",
      "remain",
      "remarkable",
      "remember",
      "remove",
      "repeat",
      "replace",
      "replied",
      "report",
      "represent",
      "require",
      "research",
      "respect",
      "rest",
      "result",
      "return",
      "review",
      "rhyme",
      "rhythm",
      "rice",
      "rich",
      "ride",
      "riding",
      "right",
      "ring",
      "rise",
      "rising",
      "river",
      "road",
      "roar",
      "rock",
      "rocket",
      "rocky",
      "rod",
      "roll",
      "roof",
      "room",
      "root",
      "rope",
      "rose",
      "rough",
      "round",
      "route",
      "row",
      "rubbed",
      "rubber",
      "rule",
      "ruler",
      "run",
      "running",
      "rush",
      "sad",
      "saddle",
      "safe",
      "safety",
      "said",
      "sail",
      "sale",
      "salmon",
      "salt",
      "same",
      "sand",
      "sang",
      "sat",
      "satellites",
      "satisfied",
      "save",
      "saved",
      "saw",
      "say",
      "scale",
      "scared",
      "scene",
      "school",
      "science",
      "scientific",
      "scientist",
      "score",
      "screen",
      "sea",
      "search",
      "season",
      "seat",
      "second",
      "secret",
      "section",
      "see",
      "seed",
      "seeing",
      "seems",
      "seen",
      "seldom",
      "select",
      "selection",
      "sell",
      "send",
      "sense",
      "sent",
      "sentence",
      "separate",
      "series",
      "serious",
      "serve",
      "service",
      "sets",
      "setting",
      "settle",
      "settlers",
      "seven",
      "several",
      "shade",
      "shadow",
      "shake",
      "shaking",
      "shall",
      "shallow",
      "shape",
      "share",
      "sharp",
      "she",
      "sheep",
      "sheet",
      "shelf",
      "shells",
      "shelter",
      "shine",
      "shinning",
      "ship",
      "shirt",
      "shoe",
      "shoot",
      "shop",
      "shore",
      "short",
      "shorter",
      "shot",
      "should",
      "shoulder",
      "shout",
      "show",
      "shown",
      "shut",
      "sick",
      "sides",
      "sight",
      "sign",
      "signal",
      "silence",
      "silent",
      "silk",
      "silly",
      "silver",
      "similar",
      "simple",
      "simplest",
      "simply",
      "since",
      "sing",
      "single",
      "sink",
      "sister",
      "sit",
      "sitting",
      "situation",
      "six",
      "size",
      "skill",
      "skin",
      "sky",
      "slabs",
      "slave",
      "sleep",
      "slept",
      "slide",
      "slight",
      "slightly",
      "slip",
      "slipped",
      "slope",
      "slow",
      "slowly",
      "small",
      "smaller",
      "smallest",
      "smell",
      "smile",
      "smoke",
      "smooth",
      "snake",
      "snow",
      "so",
      "soap",
      "social",
      "society",
      "soft",
      "softly",
      "soil",
      "solar",
      "sold",
      "soldier",
      "solid",
      "solution",
      "solve",
      "some",
      "somebody",
      "somehow",
      "someone",
      "something",
      "sometime",
      "somewhere",
      "son",
      "song",
      "soon",
      "sort",
      "sound",
      "source",
      "south",
      "southern",
      "space",
      "speak",
      "special",
      "species",
      "specific",
      "speech",
      "speed",
      "spell",
      "spend",
      "spent",
      "spider",
      "spin",
      "spirit",
      "spite",
      "split",
      "spoken",
      "sport",
      "spread",
      "spring",
      "square",
      "stage",
      "stairs",
      "stand",
      "standard",
      "star",
      "stared",
      "start",
      "state",
      "statement",
      "station",
      "stay",
      "steady",
      "steam",
      "steel",
      "steep",
      "stems",
      "step",
      "stepped",
      "stick",
      "stiff",
      "still",
      "stock",
      "stomach",
      "stone",
      "stood",
      "stop",
      "stopped",
      "store",
      "storm",
      "story",
      "stove",
      "straight",
      "strange",
      "stranger",
      "straw",
      "stream",
      "street",
      "strength",
      "stretch",
      "strike",
      "string",
      "strip",
      "strong",
      "stronger",
      "struck",
      "structure",
      "struggle",
      "stuck",
      "student",
      "studied",
      "studying",
      "subject",
      "substance",
      "success",
      "successful",
      "such",
      "sudden",
      "suddenly",
      "sugar",
      "suggest",
      "suit",
      "sum",
      "summer",
      "sun",
      "sunlight",
      "supper",
      "supply",
      "support",
      "suppose",
      "sure",
      "surface",
      "surprise",
      "surrounded",
      "swam",
      "sweet",
      "swept",
      "swim",
      "swimming",
      "swing",
      "swung",
      "syllable",
      "symbol",
      "system",
      "table",
      "tail",
      "take",
      "taken",
      "tales",
      "talk",
      "tall",
      "tank",
      "tape",
      "task",
      "taste",
      "taught",
      "tax",
      "tea",
      "teach",
      "teacher",
      "team",
      "tears",
      "teeth",
      "telephone",
      "television",
      "tell",
      "temperature",
      "ten",
      "tent",
      "term",
      "terrible",
      "test",
      "than",
      "thank",
      "that",
      "thee",
      "them",
      "themselves",
      "then",
      "theory",
      "there",
      "therefore",
      "these",
      "they",
      "thick",
      "thin",
      "thing",
      "think",
      "third",
      "thirty",
      "this",
      "those",
      "thou",
      "though",
      "thought",
      "thousand",
      "thread",
      "three",
      "threw",
      "throat",
      "through",
      "throughout",
      "throw",
      "thrown",
      "thumb",
      "thus",
      "thy",
      "tide",
      "tie",
      "tight",
      "tightly",
      "till",
      "time",
      "tin",
      "tiny",
      "tip",
      "tired",
      "title",
      "to",
      "tobacco",
      "today",
      "together",
      "told",
      "tomorrow",
      "tone",
      "tongue",
      "tonight",
      "too",
      "took",
      "tool",
      "top",
      "topic",
      "torn",
      "total",
      "touch",
      "toward",
      "tower",
      "town",
      "toy",
      "trace",
      "track",
      "trade",
      "traffic",
      "trail",
      "train",
      "transportation",
      "trap",
      "travel",
      "treated",
      "tree",
      "triangle",
      "tribe",
      "trick",
      "tried",
      "trip",
      "troops",
      "tropical",
      "trouble",
      "truck",
      "trunk",
      "truth",
      "try",
      "tube",
      "tune",
      "turn",
      "twelve",
      "twenty",
      "twice",
      "two",
      "type",
      "typical",
      "uncle",
      "under",
      "underline",
      "understanding",
      "unhappy",
      "union",
      "unit",
      "universe",
      "unknown",
      "unless",
      "until",
      "unusual",
      "up",
      "upon",
      "upper",
      "upward",
      "us",
      "use",
      "useful",
      "using",
      "usual",
      "usually",
      "valley",
      "valuable",
      "value",
      "vapor",
      "variety",
      "various",
      "vast",
      "vegetable",
      "verb",
      "vertical",
      "very",
      "vessels",
      "victory",
      "view",
      "village",
      "visit",
      "visitor",
      "voice",
      "volume",
      "vote",
      "vowel",
      "voyage",
      "wagon",
      "wait",
      "walk",
      "wall",
      "want",
      "war",
      "warm",
      "warn",
      "was",
      "wash",
      "waste",
      "watch",
      "water",
      "wave",
      "way",
      "we",
      "weak",
      "wealth",
      "wear",
      "weather",
      "week",
      "weigh",
      "weight",
      "welcome",
      "well",
      "went",
      "were",
      "west",
      "western",
      "wet",
      "whale",
      "what",
      "whatever",
      "wheat",
      "wheel",
      "when",
      "whenever",
      "where",
      "wherever",
      "whether",
      "which",
      "while",
      "whispered",
      "whistle",
      "white",
      "who",
      "whole",
      "whom",
      "whose",
      "why",
      "wide",
      "widely",
      "wife",
      "wild",
      "will",
      "willing",
      "win",
      "wind",
      "window",
      "wing",
      "winter",
      "wire",
      "wise",
      "wish",
      "with",
      "within",
      "without",
      "wolf",
      "women",
      "won",
      "wonder",
      "wonderful",
      "wood",
      "wooden",
      "wool",
      "word",
      "wore",
      "work",
      "worker",
      "world",
      "worried",
      "worry",
      "worse",
      "worth",
      "would",
      "wrapped",
      "write",
      "writer",
      "writing",
      "written",
      "wrong",
      "wrote",
      "yard",
      "year",
      "yellow",
      "yes",
      "yesterday",
      "yet",
      "you",
      "young",
      "younger",
      "your",
      "yourself",
      "youth",
      "zero",
      "zebra",
      "zipper",
      "zoo",
      "zulu"
    ];
    function words(options) {
      const random = options?.seed ? new seedrandom(options.seed) : null;
      function word() {
        if (options && options.maxLength > 1) {
          return generateWordWithMaxLength();
        } else {
          return generateRandomWord();
        }
      }
      function generateWordWithMaxLength() {
        var rightSize = false;
        var wordUsed;
        while (!rightSize) {
          wordUsed = generateRandomWord();
          if (wordUsed.length <= options.maxLength) {
            rightSize = true;
          }
        }
        return wordUsed;
      }
      function generateRandomWord() {
        return wordList[randInt(wordList.length)];
      }
      function randInt(lessThan) {
        const r = random ? random() : Math.random();
        return Math.floor(r * lessThan);
      }
      if (typeof options === "undefined") {
        return word();
      }
      if (typeof options === "number") {
        options = { exactly: options };
      }
      if (options.exactly) {
        options.min = options.exactly;
        options.max = options.exactly;
      }
      if (typeof options.wordsPerString !== "number") {
        options.wordsPerString = 1;
      }
      if (typeof options.formatter !== "function") {
        options.formatter = (word2) => word2;
      }
      if (typeof options.separator !== "string") {
        options.separator = " ";
      }
      var total = options.min + randInt(options.max + 1 - options.min);
      var results = [];
      var token = "";
      var relativeIndex = 0;
      for (var i = 0; i < total * options.wordsPerString; i++) {
        if (relativeIndex === options.wordsPerString - 1) {
          token += options.formatter(word(), relativeIndex);
        } else {
          token += options.formatter(word(), relativeIndex) + options.separator;
        }
        relativeIndex++;
        if ((i + 1) % options.wordsPerString === 0) {
          results.push(token);
          token = "";
          relativeIndex = 0;
        }
      }
      if (typeof options.join === "string") {
        results = results.join(options.join);
      }
      return results;
    }
    module.exports = words;
    words.wordList = wordList;
  }
});

// external-global-plugin:@ant-design/pro-components
var require_pro_components = __commonJS({
  "external-global-plugin:@ant-design/pro-components"(exports, module) {
    module.exports = window.antdPro;
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

// external-global-plugin:date-fns
var require_date_fns = __commonJS({
  "external-global-plugin:date-fns"(exports, module) {
    module.exports = window.datefns;
  }
});

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/Context.js
var import_react = __toESM(require_react());
var IconContext = /* @__PURE__ */ (0, import_react.createContext)({});
var Context_default = IconContext;

// node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/extends.js
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

// node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}

// node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}

// node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}

// node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
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

// node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

// node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}

// node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
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

// node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

// node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js
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

// node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
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

// node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
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

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/AntdIcon.js
var React3 = __toESM(require_react());
var import_classnames = __toESM(require_classnames());

// node_modules/.pnpm/@ctrl+tinycolor@3.6.0/node_modules/@ctrl/tinycolor/dist/module/util.js
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

// node_modules/.pnpm/@ctrl+tinycolor@3.6.0/node_modules/@ctrl/tinycolor/dist/module/conversion.js
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
function hslToRgb(h, s, l) {
  var r;
  var g;
  var b;
  h = bound01(h, 360);
  s = bound01(s, 100);
  l = bound01(l, 100);
  if (s === 0) {
    g = l;
    b = l;
    r = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h = 0;
  var v = max;
  var d = max - min;
  var s = max === 0 ? 0 : d / max;
  if (max === min) {
    h = 0;
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }
  return { h, s, v };
}
function hsvToRgb(h, s, v) {
  h = bound01(h, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);
  var i = Math.floor(h);
  var f = h - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);
  var mod = i % 6;
  var r = [v, q, p, p, t, v][mod];
  var g = [t, v, v, q, p, p][mod];
  var b = [p, p, t, v, v, q][mod];
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
function convertHexToDecimal(h) {
  return parseIntFromHex(h) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}

// node_modules/.pnpm/@ctrl+tinycolor@3.6.0/node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
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

// node_modules/.pnpm/@ctrl+tinycolor@3.6.0/node_modules/@ctrl/tinycolor/dist/module/format-input.js
function inputToRGB(color) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a = 1;
  var s = null;
  var v = null;
  var l = null;
  var ok = false;
  var format2 = false;
  if (typeof color === "string") {
    color = stringInputToObject(color);
  }
  if (typeof color === "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format2 = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s = convertToPercentage(color.s);
      v = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s, v);
      ok = true;
      format2 = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s = convertToPercentage(color.s);
      l = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s, l);
      ok = true;
      format2 = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color, "a")) {
      a = color.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok,
    format: color.format || format2,
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
function generate(color) {
  var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);
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
      var index = _ref3.index, opacity = _ref3.opacity;
      var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || "#141414"), inputToRGB(patterns[index]), opacity * 100));
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

// node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/IconBase.js
var React2 = __toESM(require_react());

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/utils.js
var import_lodash = __toESM(require_lodash());

// node_modules/.pnpm/rc-util@5.36.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/canUseDom.js
function canUseDom() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}

// node_modules/.pnpm/rc-util@5.36.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/contains.js
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

// node_modules/.pnpm/rc-util@5.36.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/dynamicCSS.js
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

// node_modules/.pnpm/rc-util@5.36.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/shadow.js
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

// node_modules/.pnpm/rc-util@5.36.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/warning.js
var warned = {};
var preWarningFns = [];
var preMessage = function preMessage2(fn) {
  preWarningFns.push(fn);
};
function warning(valid, message) {
  if (!valid && console !== void 0) {
    var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
      return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "warning");
    }, message);
    if (finalMessage) {
      console.error("Warning: ".concat(finalMessage));
    }
  }
}
function note(valid, message) {
  if (!valid && console !== void 0) {
    var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
      return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "note");
    }, message);
    if (finalMessage) {
      console.warn("Note: ".concat(finalMessage));
    }
  }
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
warningOnce.preMessage = preMessage;
warningOnce.resetWarned = resetWarned;
warningOnce.noteOnce = noteOnce;
var warning_default = warningOnce;

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/utils.js
var import_react2 = __toESM(require_react());
function warning2(valid, message) {
  warning_default(valid, "[@ant-design/icons] ".concat(message));
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
        acc[(0, import_lodash.default)(key)] = val;
    }
    return acc;
  }, {});
}
function generate2(node, key, rootProps) {
  if (!rootProps) {
    return /* @__PURE__ */ import_react2.default.createElement(node.tag, _objectSpread2({
      key
    }, normalizeAttrs(node.attrs)), (node.children || []).map(function(child, index) {
      return generate2(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }
  return /* @__PURE__ */ import_react2.default.createElement(node.tag, _objectSpread2(_objectSpread2({
    key
  }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function(child, index) {
    return generate2(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
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

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/IconBase.js
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

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/twoTonePrimaryColor.js
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

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/AntdIcon.js
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

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/CodeOutlined.js
var React4 = __toESM(require_react());

// node_modules/.pnpm/@ant-design+icons-svg@4.3.0/node_modules/@ant-design/icons-svg/es/asn/CodeOutlined.js
var CodeOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48zm-194.9 6.1l192-161c3.8-3.2 3.8-9.1 0-12.3l-192-160.9A7.95 7.95 0 00308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 00-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, "name": "code", "theme": "outlined" };
var CodeOutlined_default = CodeOutlined;

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/CodeOutlined.js
var CodeOutlined2 = function CodeOutlined3(props, ref) {
  return /* @__PURE__ */ React4.createElement(AntdIcon_default, _extends({}, props, {
    ref,
    icon: CodeOutlined_default
  }));
};
if (true) {
  CodeOutlined2.displayName = "CodeOutlined";
}
var CodeOutlined_default2 = /* @__PURE__ */ React4.forwardRef(CodeOutlined2);

// src/DataGenerator.tsx
var import_react4 = __toESM(require_react(), 1);
var import_antd = __toESM(require_antd(), 1);
var import_veramo_react = __toESM(require_veramo_react(), 1);
var import_react_query = __toESM(require_react_query(), 1);

// src/utils/dataGenerator.ts
var import_random_words = __toESM(require_random_words(), 1);

// src/utils/kudos-messages.ts
var kudosMessages = [
  "Great job on that project; your expertise really shined through!",
  "Your creativity never ceases to amaze me; well done!",
  "Thanks for stepping up; you're a team player.",
  "Outstanding presentation; you nailed it!",
  "Your hard work is paying off; keep it up!",
  "Excellent problem-solving; you found a solution no one else could.",
  "Your dedication to quality is commendable.",
  "Thanks for going the extra mile; it didn't go unnoticed.",
  "Your leadership skills are inspiring to us all.",
  "You have a knack for making complex issues look easy; kudos!",
  "Consistent performance, well done!",
  "Your enthusiasm is contagious.",
  "You've got a great attitude, and it shows.",
  "Thanks for always being so dependable.",
  "You make teamwork look easy.",
  "Fantastic effort on the latest project.",
  "You're setting the bar high for the rest of us.",
  "You're a rockstar at what you do.",
  "Excellent execution; couldn't ask for more.",
  "Your drive for success is admirable.",
  "You've outdone yourself, again.",
  "Your focus and precision are remarkable.",
  "You're a great communicator; thanks for the clarity.",
  "Your work ethic is second to none.",
  "Your commitment to our mission is impressive.",
  "Your resilience during challenges is commendable.",
  "You've really mastered your craft.",
  "Your adaptability is a key asset.",
  "Thanks for taking ownership and seeing it through.",
  "Your positivity lights up the room.",
  "You made sense of the chaos; well played.",
  "Your contribution to the team is invaluable.",
  "Great collaboration skills; you make us better.",
  "You're always two steps ahead; keep it up.",
  "Exceptional attention to detail; it makes a difference.",
  "Your insights are always so helpful.",
  "You handled that difficult situation with grace.",
  "Thanks for the quick turnaround; it saved the day.",
  "Your humility adds to your greatness.",
  "Your initiative shows your dedication.",
  "Your mentorship has been invaluable.",
  "Thanks for being a standout colleague.",
  "You make a real difference; thank you.",
  "Your discipline is admirable.",
  "You bring out the best in others.",
  "You're a great example to us all.",
  "Thanks for always respecting deadlines.",
  "Your work always exceeds expectations.",
  "You're a pro at customer service.",
  "You have a great knack for problem-solving.",
  "You're very resourceful; it doesn't go unnoticed.",
  "Your passion for the work is inspiring.",
  "You keep the team focused and on track.",
  "Your technical skills are unmatched.",
  "You make challenging tasks look easy.",
  "Your innovation is a game-changer.",
  "Thanks for always being so organized.",
  "Your ability to lead is truly remarkable.",
  "You're great at making the workplace enjoyable.",
  "Thanks for the unwavering professionalism.",
  "Your strategic thinking is exceptional.",
  "You're the go-to person for sound advice.",
  "Your dependability is rock-solid.",
  "You're a quick learner; it's impressive.",
  "Thanks for adding value to every team meeting.",
  "Your confidence boosts the team's morale.",
  "You're the epitome of reliability.",
  "You make success look effortless.",
  "You have an eye for quality; it's refreshing.",
  "Your empathy makes you a great teammate.",
  "Your perseverance has paid off; well done.",
  "You're a visionary; you see the bigger picture.",
  "You've set a new standard for excellence.",
  "Your contributions to the project were key.",
  "You have a strong sense of responsibility.",
  "You're great at juggling multiple tasks.",
  "You've really fine-tuned your skills.",
  "You make the impossible look possible.",
  "Your ability to stay calm under pressure is admirable.",
  "Thanks for always bringing your A-game.",
  "Your positive energy is infectious.",
  "You're an excellent role model for the team.",
  "You're a catalyst for change; great work.",
  "Your work always hits the mark.",
  "Your ability to handle stress is inspiring.",
  "Your fearlessness in taking risks is commendable.",
  "You're the definition of a team player.",
  "You keep setting new benchmarks; amazing.",
  "Your humility makes you an even greater leader.",
  "Your time management skills are top-notch.",
  "You always bring fresh ideas to the table.",
  "Your professionalism sets you apart.",
  "Thanks for always stepping in when needed.",
  "You're an incredible asset to this team."
];

// src/utils/dataGenerator.ts
function getRandomDate(from, to) {
  const fromTime = from.getTime();
  const toTime = to.getTime();
  return new Date(fromTime + Math.random() * (toTime - fromTime));
}
function selectRandomIndexes(total, count) {
  const min = Math.ceil(0);
  const max = Math.floor(total);
  let selected = [];
  let n;
  for (n = 1; n <= count; n++) {
    var i = Math.floor(Math.random() * (max - min) + min);
    selected.push(i);
  }
  return selected;
}
async function createIdentifiers(createIdentifer, domain, provider, count, alias) {
  let promises = [];
  if (count) {
    let i;
    for (i = 0; i < count; i++) {
      promises.push(i);
    }
    return Promise.all(
      promises.map(async () => {
        const _alias = (0, import_random_words.default)({
          exactly: 1,
          wordsPerString: 2,
          join: "-"
        });
        const generatedAlias = provider === "did:web" ? domain + ":" + _alias : _alias;
        if (provider === "did:peer") {
          return await createIdentifer({
            provider,
            alias: generatedAlias,
            options: {
              num_algo: 2,
              service: {
                id: "1234",
                type: "DIDCommMessaging",
                serviceEndpoint: "did:web:dev-didcomm-mediator.herokuapp.com",
                description: "a DIDComm endpoint"
              }
            }
          });
        }
        return await createIdentifer({
          provider,
          alias: count === 1 && alias ? provider === "did:web" ? domain + ":" + alias : alias : generatedAlias
        });
      })
    );
  }
}
async function getRandomProfiles(count) {
  const url = `https://randomuser.me/api/?results=${count}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Cache-Control": "no-cache"
    }
  });
  return await response.json();
}
async function createProfileCredentials(createVerifiableCredential, identifiers) {
  if (!identifiers)
    return;
  const { results } = await getRandomProfiles(identifiers?.length);
  return Promise.all(
    results.map(async (profile, key) => {
      return await createVerifiableCredential({
        save: true,
        proofFormat: "jwt",
        credential: {
          "@context": ["https://www.w3.org/2018/credentials/v1"],
          type: ["VerifiableCredential", "Profile"],
          issuer: { id: identifiers[key].did },
          issuanceDate: (/* @__PURE__ */ new Date()).toISOString(),
          credentialSubject: {
            id: identifiers[key].did,
            name: profile.name.first + " " + profile.name.last,
            firstName: profile.name.first,
            lastName: profile.name.last,
            nickname: profile.username,
            email: profile.email,
            picture: profile.picture.large
          }
        }
      });
    })
  );
}
async function createKudosCredentials(identifiers, createVerifiableCredential, count, date, agent) {
  if (!identifiers)
    return;
  const fromSelected = selectRandomIndexes(identifiers.length, count.from);
  const toSelected = selectRandomIndexes(identifiers.length, count.to);
  return Promise.all(
    fromSelected.map(async (fromIndex) => {
      const issuerProfile = await agent.getIdentifierProfile({ did: identifiers[fromIndex].did });
      return await Promise.all(
        toSelected.map(async (toIndex) => {
          const subjectProfile = await agent.getIdentifierProfile({ did: identifiers[toIndex].did });
          const kudos = kudosMessages[Math.floor(Math.random() * kudosMessages.length)];
          return await createVerifiableCredential({
            save: true,
            proofFormat: "jwt",
            credential: {
              "@context": ["https://www.w3.org/2018/credentials/v1"],
              type: ["VerifiableCredential", "Kudos"],
              issuer: { id: identifiers[fromIndex].did },
              issuanceDate: getRandomDate(
                new Date(date.from),
                new Date(date.to)
              ).toISOString(),
              credentialSubject: {
                id: identifiers[toIndex].did,
                name: subjectProfile?.name,
                avatar: subjectProfile?.picture,
                kudos,
                "authorId": issuerProfile?.did,
                "authorName": issuerProfile?.name,
                "authorAvatar": issuerProfile?.picture,
                "channelId": "878293684620234755",
                "channelName": "\u{1F4AC}\uFF5Cgeneral-chats",
                "guildId": "878293684620234752",
                "guildName": "Veramolabs",
                "guildAvatar": "https://cdn.discordapp.com/icons/878293684620234752/3a6e2e86c563b4f327e86d51289dd294.png"
              }
            }
          });
        })
      );
    })
  );
}

// src/utils/useGenerator.ts
var import_react3 = __toESM(require_react(), 1);
function useGenerator() {
  const [identifierProvider, setIdentifierProvider] = (0, import_react3.useState)("did:ethr:goerli");
  const [identifierCount, setIdentifierCount] = (0, import_react3.useState)(50);
  const [identifiersGenerating, setIdentifiersGenerating] = (0, import_react3.useState)(false);
  const [alias, setAlias] = (0, import_react3.useState)("");
  const [domain, setDomain] = (0, import_react3.useState)("");
  const [credentialProfilesGenerating, setCredentialProfilesGenerating] = (0, import_react3.useState)(false);
  const [credentialIssueFromCount, setCredentialIssueFromCount] = (0, import_react3.useState)(1);
  const [credentialIssueToCount, setCredentialIssueToCount] = (0, import_react3.useState)(1);
  const [credentialsP2PGenerating, setCredentialsP2PGenerating] = (0, import_react3.useState)(false);
  return {
    domain,
    identifierProvider,
    identifierCount,
    identifiersGenerating,
    credentialProfilesGenerating,
    credentialIssueFromCount,
    credentialIssueToCount,
    credentialsP2PGenerating,
    alias,
    setDomain,
    setCredentialsP2PGenerating,
    setCredentialIssueToCount,
    setCredentialIssueFromCount,
    setCredentialProfilesGenerating,
    setIdentifierProvider,
    setIdentifierCount,
    setIdentifiersGenerating,
    setAlias
  };
}

// src/DataGenerator.tsx
var import_pro_components = __toESM(require_pro_components(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var { Title, Text } = import_antd.Typography;
var { Panel } = import_antd.Collapse;
var DataGenerator = () => {
  const queryClient = (0, import_react_query.useQueryClient)();
  const { agent } = (0, import_veramo_react.useVeramo)();
  const { data: identifiers } = (0, import_react_query.useQuery)(
    ["identifiers", { agentId: agent?.context.id }],
    () => agent?.didManagerFind()
  );
  const { data: providers } = (0, import_react_query.useQuery)(
    ["providers", { agentId: agent?.context.id }],
    () => agent?.didManagerGetProviders()
  );
  const {
    domain,
    identifierProvider,
    identifierCount,
    identifiersGenerating,
    credentialProfilesGenerating,
    credentialIssueFromCount,
    credentialIssueToCount,
    credentialsP2PGenerating,
    setDomain,
    setCredentialsP2PGenerating,
    setCredentialIssueToCount,
    setCredentialIssueFromCount,
    setCredentialProfilesGenerating,
    setIdentifierProvider,
    setIdentifierCount,
    setIdentifiersGenerating
  } = useGenerator();
  const generateIdentifiers = async () => {
    setIdentifiersGenerating(true);
    await createIdentifiers(
      agent?.didManagerCreate,
      domain,
      identifierProvider,
      identifierCount
    );
    setIdentifiersGenerating(false);
    queryClient.invalidateQueries("identifiers");
  };
  const generateProfileCredentials = async () => {
    if (identifiers) {
      setCredentialProfilesGenerating(true);
      await createProfileCredentials(
        // @ts-ignore
        agent?.createVerifiableCredential,
        // @ts-ignore
        identifiers
      );
      setCredentialProfilesGenerating(false);
    }
  };
  const generateP2PCredentials = async () => {
    if (identifiers) {
      setCredentialsP2PGenerating(true);
      const fromCount = credentialIssueFromCount > identifiers.length ? identifiers.length : credentialIssueFromCount;
      const toCount = credentialIssueToCount > identifiers.length ? identifiers.length : credentialIssueToCount;
      await createKudosCredentials(
        // @ts-ignore
        identifiers,
        // @ts-ignore
        agent?.createVerifiableCredential,
        { from: fromCount, to: toCount },
        // @todo allow date to be user selectable
        { from: "2019-01-01T00:00:00.271Z", to: "2021-02-01T01:00:00.271Z" },
        agent
      );
      setCredentialsP2PGenerating(false);
    }
  };
  (0, import_react4.useEffect)(() => {
    setIdentifierProvider("did:ethr:goerli");
  }, [setIdentifierProvider]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_pro_components.PageContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_antd.Collapse, { bordered: false, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { header: `Identifiers (${identifiers?.length})`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_antd.Form,
      {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
        layout: "vertical",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: "Generate multiple identifiers" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Form.Item, { label: "Identifier count", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_antd.Input,
            {
              defaultValue: identifierCount,
              onChange: (e) => setIdentifierCount(parseInt(e.target.value))
            }
          ) }),
          identifierProvider === "did:web" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Form.Item, { label: "Domain", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_antd.Input,
            {
              defaultValue: domain,
              onChange: (e) => setDomain(e.target.value)
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Form.Item, { label: "Provider", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_antd.Select,
            {
              onSelect: (value) => setIdentifierProvider(value),
              defaultValue: "did:ethr:goerli",
              children: providers?.map((provider) => {
                return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Select.Option, { value: provider, children: provider }, provider);
              })
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_antd.Button,
            {
              onClick: () => generateIdentifiers(),
              disabled: identifierProvider === "did:web" && !domain || identifiersGenerating || !identifierCount || !identifierProvider,
              children: "Generate"
            }
          ) }),
          identifiersGenerating && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, { children: [
            "Generating ",
            identifierCount,
            " identifiers.."
          ] })
        ]
      }
    ) }, "1"),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { header: "Credentials", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { level: 5, children: "Profile Credentials" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_antd.Form,
        {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
          layout: "vertical",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_antd.Space, { direction: "vertical", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, { children: [
              "Generate self-signed random profile credentials for",
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: identifiers?.length }),
              " identifiers. Note profiles will be different everytime this is run."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_antd.Button,
              {
                onClick: () => generateProfileCredentials(),
                disabled: credentialProfilesGenerating || !identifiers,
                children: "Generate Credentials"
              }
            ) }),
            credentialProfilesGenerating && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, { children: [
              "Generating ",
              identifierCount,
              " credentials.."
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Divider, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { level: 5, children: "Peer to Peer Credentials" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Form, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_antd.Space, { direction: "vertical", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: "Issue Kudos credential schema between identifiers" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: "Issue Kudos credential schema between identifiers. Using higher numbers of identifiers will take longer. Run multiple times with lower numbers for varying results. Number should not be more that the amount of identifiers in your agent. Putting 2 and 5 in the boxes below will issue 1 credential from 2 random identifiers to 5 random identifers." }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Form.Item, { label: "Issuer count", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_antd.Input,
          {
            width: 200,
            defaultValue: credentialIssueFromCount,
            onChange: (e) => setCredentialIssueFromCount(parseInt(e.target.value))
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Form.Item, { label: "Subject count", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_antd.Input,
          {
            width: 200,
            defaultValue: credentialIssueToCount,
            onChange: (e) => setCredentialIssueToCount(parseInt(e.target.value))
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_antd.Button,
          {
            disabled: credentialsP2PGenerating || !identifiers,
            onClick: () => generateP2PCredentials(),
            children: "Generate Credentials"
          }
        ) }),
        credentialsP2PGenerating && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, { children: [
          "Issuing credentials from ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: credentialIssueFromCount }),
          " ",
          "identifiers to ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: credentialIssueToCount }),
          " identifers"
        ] })
      ] }) })
    ] }, "2")
  ] }) });
};
var DataGenerator_default = DataGenerator;

// src/CreateProfileCredential.tsx
var import_react5 = __toESM(require_react(), 1);
var import_antd2 = __toESM(require_antd(), 1);
var import_veramo_react2 = __toESM(require_veramo_react(), 1);
var import_react_query2 = __toESM(require_react_query(), 1);

// src/utils/signing.ts
var claimToObject = (arr) => {
  return arr.reduce(
    (obj, item) => Object.assign(obj, { [item.type]: item.value }),
    {}
  );
};
var issueCredential = async (agent, iss, sub, claims, proofFormat, customContext, type, credentialSchemaId) => {
  let credentialObj = {
    credential: {
      issuer: { id: iss },
      issuanceDate: (/* @__PURE__ */ new Date()).toISOString(),
      "@context": customContext ? ["https://www.w3.org/2018/credentials/v1", customContext] : ["https://www.w3.org/2018/credentials/v1"],
      type: type ? ["VerifiableCredential", type] : ["VerifiableCredential"],
      credentialSubject: { id: sub, ...claimToObject(claims) }
    },
    proofFormat,
    save: true
  };
  if (credentialSchemaId) {
    credentialObj = {
      ...credentialObj,
      credentialSchema: {
        id: credentialSchemaId,
        type: "JsonSchemaValidator2018"
      }
    };
  }
  return await agent?.createVerifiableCredential(credentialObj);
};
var signVerifiablePresentation = async (agent, did, verifier, selected, proofFormat) => {
  return await agent?.createVerifiablePresentation({
    presentation: {
      holder: did,
      verifier,
      "@context": ["https://www.w3.org/2018/credentials/v1"],
      verifiableCredential: selected
    },
    proofFormat,
    save: true
  });
};

// src/CreateProfileCredential.tsx
var import_uuid = __toESM(require_uuid(), 1);
var import_pro_components2 = __toESM(require_pro_components(), 1);
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var { TextArea } = import_antd2.Input;
var { Option } = import_antd2.Select;
var CreateProfileCredential = () => {
  const { agent } = (0, import_veramo_react2.useVeramo)();
  const { data: identifiers, isLoading: identifiersLoading } = (0, import_react_query2.useQuery)(
    ["identifiers", { agentId: agent?.context.id }],
    () => agent?.didManagerFind()
  );
  const [issuer, setIssuer] = (0, import_react5.useState)("");
  const [proofFormat, setProofFormat] = (0, import_react5.useState)("");
  const [name, setName] = (0, import_react5.useState)("");
  const [bio, setBio] = (0, import_react5.useState)("");
  const [recipient, setRecipient] = (0, import_react5.useState)("");
  const [inFlight, setInFlight] = (0, import_react5.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_pro_components2.PageContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_antd2.Card, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_antd2.Select,
      {
        style: { width: "60%" },
        loading: identifiersLoading,
        onChange: (e) => setIssuer(e),
        placeholder: "issuer DID",
        defaultActiveFirstOption: true,
        children: identifiers && identifiers.map((id) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Option, { value: id.did, children: id.did }, id.did))
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Input, { placeholder: "Name", onChange: (e) => setName(e.target.value) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TextArea, { placeholder: "Bio", onChange: (e) => setBio(e.target.value) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      import_antd2.Select,
      {
        style: { width: "60%" },
        onChange: (e) => setProofFormat(e),
        placeholder: "Proof type",
        defaultActiveFirstOption: true,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            Option,
            {
              value: "EthereumEip712Signature2021",
              children: "EthereumEip712Signature2021"
            },
            "EthereumEip712Signature2021lds"
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Option, { value: "jwt", children: "jwt" }, "jwt"),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Option, { value: "lds", children: "lds" }, "lds")
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_antd2.Input,
      {
        placeholder: "Recipient DID",
        onChange: (e) => setRecipient(e.target.value)
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_antd2.Button,
      {
        type: "primary",
        disabled: inFlight || !proofFormat || !issuer,
        onClick: async () => {
          try {
            setInFlight(true);
            const cred = await issueCredential(
              agent,
              issuer,
              issuer,
              [
                { type: "name", value: name },
                { type: "bio", value: bio }
              ],
              proofFormat,
              "",
              "ProfileCredentialSchema",
              "did:web:veramo.io;id=62a8ca5d-7e78-4e7b-a2c1-0bf2d37437ad;version=1.0"
            );
            console.log("cred: ", cred);
            if (recipient) {
              const packedMessage = await agent?.packDIDCommMessage({
                packing: "none",
                message: {
                  from: issuer,
                  to: recipient,
                  id: (0, import_uuid.v4)(),
                  type: "w3c.vc",
                  body: cred
                }
              });
              console.log("packedMessage: ", packedMessage);
              const res = await agent?.sendDIDCommMessage({
                messageId: (0, import_uuid.v4)(),
                packedMessage,
                recipientDidUrl: recipient
              });
              console.log("res: ", res);
            }
            setInFlight(false);
          } catch (ex) {
            console.error("ex: ", ex);
            setInFlight(false);
          }
        },
        children: "Create Profile"
      }
    )
  ] }) });
};
var CreateProfileCredential_default = CreateProfileCredential;

// src/IssueCredential.tsx
var import_react6 = __toESM(require_react(), 1);
var import_antd3 = __toESM(require_antd(), 1);
var import_veramo_react3 = __toESM(require_veramo_react(), 1);
var import_react_query3 = __toESM(require_react_query(), 1);
var import_uuid2 = __toESM(require_uuid(), 1);
var import_pro_components3 = __toESM(require_pro_components(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var { Option: Option2 } = import_antd3.Select;
var formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 }
  }
};
var IssueCredential = () => {
  const { agent } = (0, import_veramo_react3.useVeramo)();
  const [claimType, setClaimType] = (0, import_react6.useState)("");
  const [claimValue, setClaimValue] = (0, import_react6.useState)("");
  const [credentialType, setCredentialType] = (0, import_react6.useState)("");
  const [customContext, setCustomContext] = (0, import_react6.useState)("");
  const [errorMessage, setErrorMessage] = (0, import_react6.useState)();
  const [sending] = (0, import_react6.useState)(false);
  const [issuer, setIssuer] = (0, import_react6.useState)("");
  const [subject, setSubject] = (0, import_react6.useState)();
  const [fields, updateFields] = (0, import_react6.useState)([]);
  const [proofFormat, setProofFormat] = (0, import_react6.useState)("jwt");
  const { data: identifiers, isLoading: identifiersLoading } = (0, import_react_query3.useQuery)(
    ["identifiers", { agentId: agent?.context.id }],
    () => agent?.didManagerFind()
  );
  const updateClaimFields = (field) => {
    const claimTypes = fields.map((field2) => field2.type);
    const newFields = fields.concat([field]);
    setErrorMessage(null);
    if (!field.type) {
      setErrorMessage("Enter claim type");
      return;
    }
    if (!field.value) {
      setErrorMessage("Enter claim value");
      return;
    }
    if (claimTypes.includes(field.type)) {
      setErrorMessage("Claim type already exists");
      return;
    }
    updateFields(newFields);
    setClaimValue("");
    setClaimType("");
  };
  const signVc = async (send) => {
    const credential = await issueCredential(
      agent,
      issuer,
      subject,
      fields,
      proofFormat,
      customContext,
      credentialType
    );
    setIssuer("");
    setSubject("");
    updateFields([]);
    if (send) {
      sendVC(credential);
    }
  };
  const sendVC = async (body) => {
    try {
      const messageId = (0, import_uuid2.v4)();
      const message = {
        type: "veramo.io/chat/v1/basicmessage",
        to: subject,
        from: issuer,
        id: messageId,
        body
      };
      const packedMessage = await agent?.packDIDCommMessage({
        packing: "authcrypt",
        message
      });
      if (packedMessage) {
        console.log(packedMessage);
        await agent?.sendDIDCommMessage({
          messageId,
          packedMessage,
          recipientDidUrl: subject
        });
      }
    } catch (err) {
      console.error(err);
      agent?.handleMessage({ raw: body.proof.jwt, save: true });
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_pro_components3.PageContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Typography.Text, { children: "Credential preview" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_antd3.Form, { ...formItemLayout, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("code", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("pre", { children: JSON.stringify(claimToObject(fields), null, 2) }) }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        import_antd3.Input,
        {
          value: subject,
          placeholder: "subject DID",
          style: { width: "60%" },
          onChange: (e) => setSubject(e.target.value)
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        import_antd3.Select,
        {
          style: { width: "60%" },
          loading: identifiersLoading,
          onChange: (e) => setIssuer(e),
          placeholder: "issuer DID",
          defaultActiveFirstOption: true,
          children: identifiers && identifiers.map((id) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Option2, { value: id.did, children: id.did }, id.did))
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        import_antd3.Input,
        {
          value: credentialType,
          placeholder: "credential type e.g Profile",
          style: { width: "60%" },
          onChange: (e) => setCredentialType(e.target.value)
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        import_antd3.Input,
        {
          value: customContext,
          placeholder: "custom context url",
          style: { width: "60%" },
          onChange: (e) => setCustomContext(e.target.value)
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        import_antd3.Select,
        {
          style: { width: "60%" },
          onChange: (e) => setProofFormat(e),
          placeholder: "Proof type",
          defaultActiveFirstOption: true,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Option2, { value: "jwt", children: "jwt" }, "jwt"),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Option2, { value: "lds", children: "lds" }, "lds"),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              Option2,
              {
                value: "EthereumEip712Signature2021",
                children: "EthereumEip712Signature2021"
              },
              "EthereumEip712Signature2021lds"
            )
          ]
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_antd3.Form.Item, { style: { padding: 15 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_antd3.Input,
          {
            placeholder: "claim type e.g. 'name'",
            value: claimType,
            style: { width: "60%" },
            onChange: (e) => setClaimType(e.target.value)
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_antd3.Input,
          {
            placeholder: "claim value e.g. Alice",
            value: claimValue,
            style: { width: "60%" },
            onChange: (e) => setClaimValue(e.target.value)
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_antd3.Button,
          {
            type: "primary",
            htmlType: "submit",
            onClick: () => {
              updateClaimFields({
                type: claimType,
                value: claimValue
              });
            },
            children: "Add"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Typography.Text, { children: errorMessage })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_antd3.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_antd3.Button,
          {
            type: "primary",
            onClick: () => signVc(),
            style: { marginRight: 5 },
            disabled: sending || fields.length === 0 || !subject || !issuer,
            children: "Issue"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_antd3.Button,
          {
            onClick: () => signVc(true),
            type: "primary",
            disabled: sending || fields.length === 0 || !subject || !issuer,
            children: "Issue & Send"
          }
        ) })
      ] }) })
    ] })
  ] });
};
var IssueCredential_default = IssueCredential;

// src/CreatePresentation.tsx
var import_react7 = __toESM(require_react(), 1);
var import_antd4 = __toESM(require_antd(), 1);
var import_veramo_react4 = __toESM(require_veramo_react(), 1);
var import_react_query4 = __toESM(require_react_query(), 1);
var import_date_fns = __toESM(require_date_fns(), 1);
var import_uuid3 = __toESM(require_uuid(), 1);
var import_pro_components4 = __toESM(require_pro_components(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var { Option: Option3 } = import_antd4.Select;
var formItemLayout2 = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 }
  }
};
var historyColumns = [
  {
    title: "Issuance Date",
    dataIndex: "verifiableCredential",
    sorter: {
      compare: (a, b) => new Date(a.verifiableCredential.issuanceDate).getTime() - new Date(b.verifiableCredential.issuanceDate).getTime(),
      multiple: 1
    },
    render: (verifiableCredential) => (0, import_date_fns.format)(new Date(verifiableCredential.issuanceDate), "PPP")
  },
  {
    title: "Type",
    dataIndex: "verifiableCredential",
    render: (verifiableCredential) => verifiableCredential.type.map((type, i) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_antd4.Tag, { color: "geekblue", children: type }, i))
  }
];
var CreatePresentation = () => {
  const { agent } = (0, import_veramo_react4.useVeramo)();
  if (!agent)
    throw Error("No agent");
  const [selectedCredentials, setSelectedCredentials] = (0, import_react7.useState)([]);
  const [sending] = (0, import_react7.useState)(false);
  const [issuer, setIssuer] = (0, import_react7.useState)("");
  const [subject, setSubject] = (0, import_react7.useState)("");
  const [proofFormat, setProofFormat] = (0, import_react7.useState)("jwt");
  const { data: credentials, isLoading: credentialHistoryLoading } = (0, import_react_query4.useQuery)(
    ["credentials"],
    () => agent?.dataStoreORMGetVerifiableCredentials()
  );
  const { data: identifiers, isLoading: identifiersLoading } = (0, import_react_query4.useQuery)(
    ["identifiers", { agentId: agent?.context.id }],
    () => agent?.didManagerFind()
  );
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedCredentials(
        selectedRows.map((row) => row.verifiableCredential)
      );
    }
  };
  const signVP = async (send) => {
    const vp = await signVerifiablePresentation(
      agent,
      issuer,
      [subject],
      selectedCredentials,
      proofFormat
    );
    setIssuer("");
    setSubject("");
    setSelectedCredentials([]);
    if (send) {
      await sendVP(vp);
    }
  };
  const sendVP = async (body) => {
    try {
      const messageId = (0, import_uuid3.v4)();
      const message = {
        type: "veramo.io/chat/v1/basicmessage",
        to: subject,
        from: issuer,
        id: messageId,
        body
      };
      const packedMessage = await agent?.packDIDCommMessage({
        packing: "authcrypt",
        message
      });
      if (packedMessage) {
        await agent?.sendDIDCommMessage({
          messageId,
          packedMessage,
          recipientDidUrl: subject
        });
      }
    } catch (err) {
      console.log(err);
      agent?.handleMessage({ raw: body.proof.jwt, save: true });
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_pro_components4.PageContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_antd4.Card, { bordered: false, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_antd4.Typography.Text, { children: "Select credentials to create presentation" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_antd4.Form.Item, { noStyle: true, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        import_antd4.Input,
        {
          value: subject,
          placeholder: "verifier DID",
          style: { width: "60%", marginBottom: 15 },
          onChange: (e) => setSubject(e.target.value)
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_antd4.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        import_antd4.Select,
        {
          style: { width: "60%" },
          loading: identifiersLoading,
          onChange: (e) => setIssuer(e),
          placeholder: "issuer DID",
          defaultActiveFirstOption: true,
          children: identifiers && identifiers.map((id) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Option3, { value: id.did, children: id.did }, id.did))
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_antd4.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
        import_antd4.Select,
        {
          style: { width: "60%" },
          onChange: (e) => setProofFormat(e),
          placeholder: "jwt or lds",
          defaultActiveFirstOption: true,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Option3, { value: "jwt", children: "jwt" }, "jwt"),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Option3, { value: "lds", children: "lds" }, "lds")
          ]
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_antd4.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          import_antd4.Button,
          {
            type: "primary",
            onClick: () => signVP(),
            style: { marginRight: 5 },
            disabled: sending || selectedCredentials.length === 0 || !subject || !issuer,
            children: "Create Presentation"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          import_antd4.Button,
          {
            onClick: () => signVP(true),
            type: "primary",
            disabled: sending || selectedCredentials.length === 0 || !subject || !issuer,
            children: "Create Presentation & Send"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_antd4.Form, { ...formItemLayout2, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_antd4.Form.Item, { noStyle: true, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_antd4.Table,
      {
        loading: credentialHistoryLoading,
        rowSelection,
        expandable: {
          expandedRowRender: (record) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("pre", { children: JSON.stringify(
            record.verifiableCredential.credentialSubject,
            null,
            2
          ) })
        },
        rowKey: (record) => record.hash,
        columns: historyColumns,
        dataSource: credentials,
        pagination: false
      }
    ) }) }) })
  ] });
};
var CreatePresentation_default = CreatePresentation;

// src/index.tsx
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var Plugin = {
  //@ts-ignore
  init: (agent) => {
    return {
      name: "Developer tools",
      description: "Collection of tools for experimenting with verifiable data",
      routes: [
        {
          path: "/developer/data-generator",
          element: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DataGenerator_default, {})
        },
        {
          path: "/developer/issue-profile-credential",
          element: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CreateProfileCredential_default, {})
        },
        {
          path: "/developer/issue-credential",
          element: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(IssueCredential_default, {})
        },
        {
          path: "/developer/create-presentation",
          element: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CreatePresentation_default, {})
        }
      ],
      menuItems: [
        {
          name: "Developer tools",
          path: "/developer",
          icon: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CodeOutlined_default2, {}),
          routes: [
            {
              path: "/developer/data-generator",
              name: "Data generator"
            },
            {
              path: "/developer/issue-profile-credential",
              name: "Issue profile credential"
            },
            {
              path: "/developer/issue-credential",
              name: "Issue credential"
            },
            {
              path: "/developer/create-presentation",
              name: "Create presentation"
            }
          ]
        }
      ]
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
*/
