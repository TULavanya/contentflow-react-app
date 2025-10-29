import {
  __commonJS,
  __toESM
} from "./chunk-EQCVQC35.js";

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports2, module2) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames34() {
        var classes = "";
        for (var i8 = 0; i8 < arguments.length; i8++) {
          var arg = arguments[i8];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames34.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module2 !== "undefined" && module2.exports) {
        classNames34.default = classNames34;
        module2.exports = classNames34;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames34;
        });
      } else {
        window.classNames = classNames34;
      }
    })();
  }
});

// node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "node_modules/dayjs/dayjs.min.js"(exports2, module2) {
    !function(t5, e6) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = e6() : "function" == typeof define && define.amd ? define(e6) : (t5 = "undefined" != typeof globalThis ? globalThis : t5 || self).dayjs = e6();
    }(exports2, function() {
      "use strict";
      var t5 = 1e3, e6 = 6e4, n5 = 36e5, r5 = "millisecond", i8 = "second", s7 = "minute", u7 = "hour", a7 = "day", o7 = "week", c6 = "month", f8 = "quarter", h6 = "year", d7 = "date", l7 = "Invalid Date", $3 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y5 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M3 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t6) {
        var e7 = ["th", "st", "nd", "rd"], n6 = t6 % 100;
        return "[" + t6 + (e7[(n6 - 20) % 10] || e7[n6] || e7[0]) + "]";
      } }, m5 = function(t6, e7, n6) {
        var r6 = String(t6);
        return !r6 || r6.length >= e7 ? t6 : "" + Array(e7 + 1 - r6.length).join(n6) + t6;
      }, v9 = { s: m5, z: function(t6) {
        var e7 = -t6.utcOffset(), n6 = Math.abs(e7), r6 = Math.floor(n6 / 60), i9 = n6 % 60;
        return (e7 <= 0 ? "+" : "-") + m5(r6, 2, "0") + ":" + m5(i9, 2, "0");
      }, m: function t6(e7, n6) {
        if (e7.date() < n6.date()) return -t6(n6, e7);
        var r6 = 12 * (n6.year() - e7.year()) + (n6.month() - e7.month()), i9 = e7.clone().add(r6, c6), s8 = n6 - i9 < 0, u8 = e7.clone().add(r6 + (s8 ? -1 : 1), c6);
        return +(-(r6 + (n6 - i9) / (s8 ? i9 - u8 : u8 - i9)) || 0);
      }, a: function(t6) {
        return t6 < 0 ? Math.ceil(t6) || 0 : Math.floor(t6);
      }, p: function(t6) {
        return { M: c6, y: h6, w: o7, d: a7, D: d7, h: u7, m: s7, s: i8, ms: r5, Q: f8 }[t6] || String(t6 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t6) {
        return void 0 === t6;
      } }, g7 = "en", D4 = {};
      D4[g7] = M3;
      var p6 = "$isDayjsObject", S2 = function(t6) {
        return t6 instanceof _4 || !(!t6 || !t6[p6]);
      }, w6 = function t6(e7, n6, r6) {
        var i9;
        if (!e7) return g7;
        if ("string" == typeof e7) {
          var s8 = e7.toLowerCase();
          D4[s8] && (i9 = s8), n6 && (D4[s8] = n6, i9 = s8);
          var u8 = e7.split("-");
          if (!i9 && u8.length > 1) return t6(u8[0]);
        } else {
          var a8 = e7.name;
          D4[a8] = e7, i9 = a8;
        }
        return !r6 && i9 && (g7 = i9), i9 || !r6 && g7;
      }, O3 = function(t6, e7) {
        if (S2(t6)) return t6.clone();
        var n6 = "object" == typeof e7 ? e7 : {};
        return n6.date = t6, n6.args = arguments, new _4(n6);
      }, b5 = v9;
      b5.l = w6, b5.i = S2, b5.w = function(t6, e7) {
        return O3(t6, { locale: e7.$L, utc: e7.$u, x: e7.$x, $offset: e7.$offset });
      };
      var _4 = function() {
        function M4(t6) {
          this.$L = w6(t6.locale, null, true), this.parse(t6), this.$x = this.$x || t6.x || {}, this[p6] = true;
        }
        var m6 = M4.prototype;
        return m6.parse = function(t6) {
          this.$d = function(t7) {
            var e7 = t7.date, n6 = t7.utc;
            if (null === e7) return /* @__PURE__ */ new Date(NaN);
            if (b5.u(e7)) return /* @__PURE__ */ new Date();
            if (e7 instanceof Date) return new Date(e7);
            if ("string" == typeof e7 && !/Z$/i.test(e7)) {
              var r6 = e7.match($3);
              if (r6) {
                var i9 = r6[2] - 1 || 0, s8 = (r6[7] || "0").substring(0, 3);
                return n6 ? new Date(Date.UTC(r6[1], i9, r6[3] || 1, r6[4] || 0, r6[5] || 0, r6[6] || 0, s8)) : new Date(r6[1], i9, r6[3] || 1, r6[4] || 0, r6[5] || 0, r6[6] || 0, s8);
              }
            }
            return new Date(e7);
          }(t6), this.init();
        }, m6.init = function() {
          var t6 = this.$d;
          this.$y = t6.getFullYear(), this.$M = t6.getMonth(), this.$D = t6.getDate(), this.$W = t6.getDay(), this.$H = t6.getHours(), this.$m = t6.getMinutes(), this.$s = t6.getSeconds(), this.$ms = t6.getMilliseconds();
        }, m6.$utils = function() {
          return b5;
        }, m6.isValid = function() {
          return !(this.$d.toString() === l7);
        }, m6.isSame = function(t6, e7) {
          var n6 = O3(t6);
          return this.startOf(e7) <= n6 && n6 <= this.endOf(e7);
        }, m6.isAfter = function(t6, e7) {
          return O3(t6) < this.startOf(e7);
        }, m6.isBefore = function(t6, e7) {
          return this.endOf(e7) < O3(t6);
        }, m6.$g = function(t6, e7, n6) {
          return b5.u(t6) ? this[e7] : this.set(n6, t6);
        }, m6.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m6.valueOf = function() {
          return this.$d.getTime();
        }, m6.startOf = function(t6, e7) {
          var n6 = this, r6 = !!b5.u(e7) || e7, f9 = b5.p(t6), l8 = function(t7, e8) {
            var i9 = b5.w(n6.$u ? Date.UTC(n6.$y, e8, t7) : new Date(n6.$y, e8, t7), n6);
            return r6 ? i9 : i9.endOf(a7);
          }, $4 = function(t7, e8) {
            return b5.w(n6.toDate()[t7].apply(n6.toDate("s"), (r6 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e8)), n6);
          }, y6 = this.$W, M5 = this.$M, m7 = this.$D, v10 = "set" + (this.$u ? "UTC" : "");
          switch (f9) {
            case h6:
              return r6 ? l8(1, 0) : l8(31, 11);
            case c6:
              return r6 ? l8(1, M5) : l8(0, M5 + 1);
            case o7:
              var g8 = this.$locale().weekStart || 0, D5 = (y6 < g8 ? y6 + 7 : y6) - g8;
              return l8(r6 ? m7 - D5 : m7 + (6 - D5), M5);
            case a7:
            case d7:
              return $4(v10 + "Hours", 0);
            case u7:
              return $4(v10 + "Minutes", 1);
            case s7:
              return $4(v10 + "Seconds", 2);
            case i8:
              return $4(v10 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m6.endOf = function(t6) {
          return this.startOf(t6, false);
        }, m6.$set = function(t6, e7) {
          var n6, o8 = b5.p(t6), f9 = "set" + (this.$u ? "UTC" : ""), l8 = (n6 = {}, n6[a7] = f9 + "Date", n6[d7] = f9 + "Date", n6[c6] = f9 + "Month", n6[h6] = f9 + "FullYear", n6[u7] = f9 + "Hours", n6[s7] = f9 + "Minutes", n6[i8] = f9 + "Seconds", n6[r5] = f9 + "Milliseconds", n6)[o8], $4 = o8 === a7 ? this.$D + (e7 - this.$W) : e7;
          if (o8 === c6 || o8 === h6) {
            var y6 = this.clone().set(d7, 1);
            y6.$d[l8]($4), y6.init(), this.$d = y6.set(d7, Math.min(this.$D, y6.daysInMonth())).$d;
          } else l8 && this.$d[l8]($4);
          return this.init(), this;
        }, m6.set = function(t6, e7) {
          return this.clone().$set(t6, e7);
        }, m6.get = function(t6) {
          return this[b5.p(t6)]();
        }, m6.add = function(r6, f9) {
          var d8, l8 = this;
          r6 = Number(r6);
          var $4 = b5.p(f9), y6 = function(t6) {
            var e7 = O3(l8);
            return b5.w(e7.date(e7.date() + Math.round(t6 * r6)), l8);
          };
          if ($4 === c6) return this.set(c6, this.$M + r6);
          if ($4 === h6) return this.set(h6, this.$y + r6);
          if ($4 === a7) return y6(1);
          if ($4 === o7) return y6(7);
          var M5 = (d8 = {}, d8[s7] = e6, d8[u7] = n5, d8[i8] = t5, d8)[$4] || 1, m7 = this.$d.getTime() + r6 * M5;
          return b5.w(m7, this);
        }, m6.subtract = function(t6, e7) {
          return this.add(-1 * t6, e7);
        }, m6.format = function(t6) {
          var e7 = this, n6 = this.$locale();
          if (!this.isValid()) return n6.invalidDate || l7;
          var r6 = t6 || "YYYY-MM-DDTHH:mm:ssZ", i9 = b5.z(this), s8 = this.$H, u8 = this.$m, a8 = this.$M, o8 = n6.weekdays, c7 = n6.months, f9 = n6.meridiem, h7 = function(t7, n7, i10, s9) {
            return t7 && (t7[n7] || t7(e7, r6)) || i10[n7].slice(0, s9);
          }, d8 = function(t7) {
            return b5.s(s8 % 12 || 12, t7, "0");
          }, $4 = f9 || function(t7, e8, n7) {
            var r7 = t7 < 12 ? "AM" : "PM";
            return n7 ? r7.toLowerCase() : r7;
          };
          return r6.replace(y5, function(t7, r7) {
            return r7 || function(t8) {
              switch (t8) {
                case "YY":
                  return String(e7.$y).slice(-2);
                case "YYYY":
                  return b5.s(e7.$y, 4, "0");
                case "M":
                  return a8 + 1;
                case "MM":
                  return b5.s(a8 + 1, 2, "0");
                case "MMM":
                  return h7(n6.monthsShort, a8, c7, 3);
                case "MMMM":
                  return h7(c7, a8);
                case "D":
                  return e7.$D;
                case "DD":
                  return b5.s(e7.$D, 2, "0");
                case "d":
                  return String(e7.$W);
                case "dd":
                  return h7(n6.weekdaysMin, e7.$W, o8, 2);
                case "ddd":
                  return h7(n6.weekdaysShort, e7.$W, o8, 3);
                case "dddd":
                  return o8[e7.$W];
                case "H":
                  return String(s8);
                case "HH":
                  return b5.s(s8, 2, "0");
                case "h":
                  return d8(1);
                case "hh":
                  return d8(2);
                case "a":
                  return $4(s8, u8, true);
                case "A":
                  return $4(s8, u8, false);
                case "m":
                  return String(u8);
                case "mm":
                  return b5.s(u8, 2, "0");
                case "s":
                  return String(e7.$s);
                case "ss":
                  return b5.s(e7.$s, 2, "0");
                case "SSS":
                  return b5.s(e7.$ms, 3, "0");
                case "Z":
                  return i9;
              }
              return null;
            }(t7) || i9.replace(":", "");
          });
        }, m6.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m6.diff = function(r6, d8, l8) {
          var $4, y6 = this, M5 = b5.p(d8), m7 = O3(r6), v10 = (m7.utcOffset() - this.utcOffset()) * e6, g8 = this - m7, D5 = function() {
            return b5.m(y6, m7);
          };
          switch (M5) {
            case h6:
              $4 = D5() / 12;
              break;
            case c6:
              $4 = D5();
              break;
            case f8:
              $4 = D5() / 3;
              break;
            case o7:
              $4 = (g8 - v10) / 6048e5;
              break;
            case a7:
              $4 = (g8 - v10) / 864e5;
              break;
            case u7:
              $4 = g8 / n5;
              break;
            case s7:
              $4 = g8 / e6;
              break;
            case i8:
              $4 = g8 / t5;
              break;
            default:
              $4 = g8;
          }
          return l8 ? $4 : b5.a($4);
        }, m6.daysInMonth = function() {
          return this.endOf(c6).$D;
        }, m6.$locale = function() {
          return D4[this.$L];
        }, m6.locale = function(t6, e7) {
          if (!t6) return this.$L;
          var n6 = this.clone(), r6 = w6(t6, e7, true);
          return r6 && (n6.$L = r6), n6;
        }, m6.clone = function() {
          return b5.w(this.$d, this);
        }, m6.toDate = function() {
          return new Date(this.valueOf());
        }, m6.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m6.toISOString = function() {
          return this.$d.toISOString();
        }, m6.toString = function() {
          return this.$d.toUTCString();
        }, M4;
      }(), k5 = _4.prototype;
      return O3.prototype = k5, [["$ms", r5], ["$s", i8], ["$m", s7], ["$H", u7], ["$W", a7], ["$M", c6], ["$y", h6], ["$D", d7]].forEach(function(t6) {
        k5[t6[1]] = function(e7) {
          return this.$g(e7, t6[0], t6[1]);
        };
      }), O3.extend = function(t6, e7) {
        return t6.$i || (t6(e7, _4, O3), t6.$i = true), O3;
      }, O3.locale = w6, O3.isDayjs = S2, O3.unix = function(t6) {
        return O3(1e3 * t6);
      }, O3.en = D4[g7], O3.Ls = D4, O3.p = {}, O3;
    });
  }
});

// node_modules/@contentstack/live-preview-utils/dist/modern/chunk-5WRI5ZAA.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS2 = (cb, mod) => function __require() {
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
var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/lodash-es/_freeGlobal.js
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal_default = freeGlobal;

// node_modules/lodash-es/_root.js
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root;

// node_modules/lodash-es/_Symbol.js
var Symbol2 = root_default.Symbol;
var Symbol_default = Symbol2;

// node_modules/lodash-es/_getRawTag.js
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
  try {
    value[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e6) {
  }
  var result2 = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result2;
}
var getRawTag_default = getRawTag;

// node_modules/lodash-es/_objectToString.js
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value) {
  return nativeObjectToString2.call(value);
}
var objectToString_default = objectToString;

// node_modules/lodash-es/_baseGetTag.js
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
}
var baseGetTag_default = baseGetTag;

// node_modules/lodash-es/isObjectLike.js
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default = isObjectLike;

// node_modules/lodash-es/isSymbol.js
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
}
var isSymbol_default = isSymbol;

// node_modules/lodash-es/_baseToNumber.js
var NAN = 0 / 0;
function baseToNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol_default(value)) {
    return NAN;
  }
  return +value;
}
var baseToNumber_default = baseToNumber;

// node_modules/lodash-es/_arrayMap.js
function arrayMap(array, iteratee2) {
  var index = -1, length = array == null ? 0 : array.length, result2 = Array(length);
  while (++index < length) {
    result2[index] = iteratee2(array[index], index, array);
  }
  return result2;
}
var arrayMap_default = arrayMap;

// node_modules/lodash-es/isArray.js
var isArray = Array.isArray;
var isArray_default = isArray;

// node_modules/lodash-es/_baseToString.js
var INFINITY = 1 / 0;
var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
var symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray_default(value)) {
    return arrayMap_default(value, baseToString) + "";
  }
  if (isSymbol_default(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result2 = value + "";
  return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
}
var baseToString_default = baseToString;

// node_modules/lodash-es/_createMathOperation.js
function createMathOperation(operator, defaultValue) {
  return function(value, other) {
    var result2;
    if (value === void 0 && other === void 0) {
      return defaultValue;
    }
    if (value !== void 0) {
      result2 = value;
    }
    if (other !== void 0) {
      if (result2 === void 0) {
        return other;
      }
      if (typeof value == "string" || typeof other == "string") {
        value = baseToString_default(value);
        other = baseToString_default(other);
      } else {
        value = baseToNumber_default(value);
        other = baseToNumber_default(other);
      }
      result2 = operator(value, other);
    }
    return result2;
  };
}
var createMathOperation_default = createMathOperation;

// node_modules/lodash-es/add.js
var add = createMathOperation_default(function(augend, addend) {
  return augend + addend;
}, 0);
var add_default = add;

// node_modules/lodash-es/_trimmedEndIndex.js
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var trimmedEndIndex_default = trimmedEndIndex;

// node_modules/lodash-es/_baseTrim.js
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex_default(string) + 1).replace(reTrimStart, "") : string;
}
var baseTrim_default = baseTrim;

// node_modules/lodash-es/isObject.js
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_default = isObject;

// node_modules/lodash-es/toNumber.js
var NAN2 = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol_default(value)) {
    return NAN2;
  }
  if (isObject_default(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject_default(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim_default(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN2 : +value;
}
var toNumber_default = toNumber;

// node_modules/lodash-es/toFinite.js
var INFINITY2 = 1 / 0;
var MAX_INTEGER = 17976931348623157e292;
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber_default(value);
  if (value === INFINITY2 || value === -INFINITY2) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
var toFinite_default = toFinite;

// node_modules/lodash-es/toInteger.js
function toInteger(value) {
  var result2 = toFinite_default(value), remainder = result2 % 1;
  return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
}
var toInteger_default = toInteger;

// node_modules/lodash-es/after.js
var FUNC_ERROR_TEXT = "Expected a function";
function after(n5, func) {
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n5 = toInteger_default(n5);
  return function() {
    if (--n5 < 1) {
      return func.apply(this, arguments);
    }
  };
}
var after_default = after;

// node_modules/lodash-es/identity.js
function identity(value) {
  return value;
}
var identity_default = identity;

// node_modules/lodash-es/isFunction.js
var asyncTag = "[object AsyncFunction]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject_default(value)) {
    return false;
  }
  var tag = baseGetTag_default(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction;

// node_modules/lodash-es/_coreJsData.js
var coreJsData = root_default["__core-js_shared__"];
var coreJsData_default = coreJsData;

// node_modules/lodash-es/_isMasked.js
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var isMasked_default = isMasked;

// node_modules/lodash-es/_toSource.js
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e6) {
    }
    try {
      return func + "";
    } catch (e6) {
    }
  }
  return "";
}
var toSource_default = toSource;

// node_modules/lodash-es/_baseIsNative.js
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto2 = Function.prototype;
var objectProto3 = Object.prototype;
var funcToString2 = funcProto2.toString;
var hasOwnProperty2 = objectProto3.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject_default(value) || isMasked_default(value)) {
    return false;
  }
  var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value));
}
var baseIsNative_default = baseIsNative;

// node_modules/lodash-es/_getValue.js
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
var getValue_default = getValue;

// node_modules/lodash-es/_getNative.js
function getNative(object, key) {
  var value = getValue_default(object, key);
  return baseIsNative_default(value) ? value : void 0;
}
var getNative_default = getNative;

// node_modules/lodash-es/_WeakMap.js
var WeakMap2 = getNative_default(root_default, "WeakMap");
var WeakMap_default = WeakMap2;

// node_modules/lodash-es/_metaMap.js
var metaMap = WeakMap_default && new WeakMap_default();
var metaMap_default = metaMap;

// node_modules/lodash-es/_baseSetData.js
var baseSetData = !metaMap_default ? identity_default : function(func, data) {
  metaMap_default.set(func, data);
  return func;
};
var baseSetData_default = baseSetData;

// node_modules/lodash-es/_baseCreate.js
var objectCreate = Object.create;
var baseCreate = /* @__PURE__ */ function() {
  function object() {
  }
  return function(proto) {
    if (!isObject_default(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result2 = new object();
    object.prototype = void 0;
    return result2;
  };
}();
var baseCreate_default = baseCreate;

// node_modules/lodash-es/_createCtor.js
function createCtor(Ctor) {
  return function() {
    var args = arguments;
    switch (args.length) {
      case 0:
        return new Ctor();
      case 1:
        return new Ctor(args[0]);
      case 2:
        return new Ctor(args[0], args[1]);
      case 3:
        return new Ctor(args[0], args[1], args[2]);
      case 4:
        return new Ctor(args[0], args[1], args[2], args[3]);
      case 5:
        return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6:
        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7:
        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate_default(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
    return isObject_default(result2) ? result2 : thisBinding;
  };
}
var createCtor_default = createCtor;

// node_modules/lodash-es/_createBind.js
var WRAP_BIND_FLAG = 1;
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor_default(func);
  function wrapper() {
    var fn2 = this && this !== root_default && this instanceof wrapper ? Ctor : func;
    return fn2.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}
var createBind_default = createBind;

// node_modules/lodash-es/_apply.js
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var apply_default = apply;

// node_modules/lodash-es/_composeArgs.js
var nativeMax = Math.max;
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array(leftLength + rangeLength), isUncurried = !isCurried;
  while (++leftIndex < leftLength) {
    result2[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result2[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result2[leftIndex++] = args[argsIndex++];
  }
  return result2;
}
var composeArgs_default = composeArgs;

// node_modules/lodash-es/_composeArgsRight.js
var nativeMax2 = Math.max;
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax2(argsLength - holdersLength, 0), result2 = Array(rangeLength + rightLength), isUncurried = !isCurried;
  while (++argsIndex < rangeLength) {
    result2[argsIndex] = args[argsIndex];
  }
  var offset3 = argsIndex;
  while (++rightIndex < rightLength) {
    result2[offset3 + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result2[offset3 + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result2;
}
var composeArgsRight_default = composeArgsRight;

// node_modules/lodash-es/_countHolders.js
function countHolders(array, placeholder) {
  var length = array.length, result2 = 0;
  while (length--) {
    if (array[length] === placeholder) {
      ++result2;
    }
  }
  return result2;
}
var countHolders_default = countHolders;

// node_modules/lodash-es/_baseLodash.js
function baseLodash() {
}
var baseLodash_default = baseLodash;

// node_modules/lodash-es/_LazyWrapper.js
var MAX_ARRAY_LENGTH = 4294967295;
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}
LazyWrapper.prototype = baseCreate_default(baseLodash_default.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;
var LazyWrapper_default = LazyWrapper;

// node_modules/lodash-es/noop.js
function noop() {
}
var noop_default = noop;

// node_modules/lodash-es/_getData.js
var getData = !metaMap_default ? noop_default : function(func) {
  return metaMap_default.get(func);
};
var getData_default = getData;

// node_modules/lodash-es/_realNames.js
var realNames = {};
var realNames_default = realNames;

// node_modules/lodash-es/_getFuncName.js
var objectProto4 = Object.prototype;
var hasOwnProperty3 = objectProto4.hasOwnProperty;
function getFuncName(func) {
  var result2 = func.name + "", array = realNames_default[result2], length = hasOwnProperty3.call(realNames_default, result2) ? array.length : 0;
  while (length--) {
    var data = array[length], otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result2;
}
var getFuncName_default = getFuncName;

// node_modules/lodash-es/_LodashWrapper.js
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = void 0;
}
LodashWrapper.prototype = baseCreate_default(baseLodash_default.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;
var LodashWrapper_default = LodashWrapper;

// node_modules/lodash-es/_copyArray.js
function copyArray(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var copyArray_default = copyArray;

// node_modules/lodash-es/_wrapperClone.js
function wrapperClone(wrapper) {
  if (wrapper instanceof LazyWrapper_default) {
    return wrapper.clone();
  }
  var result2 = new LodashWrapper_default(wrapper.__wrapped__, wrapper.__chain__);
  result2.__actions__ = copyArray_default(wrapper.__actions__);
  result2.__index__ = wrapper.__index__;
  result2.__values__ = wrapper.__values__;
  return result2;
}
var wrapperClone_default = wrapperClone;

// node_modules/lodash-es/wrapperLodash.js
var objectProto5 = Object.prototype;
var hasOwnProperty4 = objectProto5.hasOwnProperty;
function lodash(value) {
  if (isObjectLike_default(value) && !isArray_default(value) && !(value instanceof LazyWrapper_default)) {
    if (value instanceof LodashWrapper_default) {
      return value;
    }
    if (hasOwnProperty4.call(value, "__wrapped__")) {
      return wrapperClone_default(value);
    }
  }
  return new LodashWrapper_default(value);
}
lodash.prototype = baseLodash_default.prototype;
lodash.prototype.constructor = lodash;
var wrapperLodash_default = lodash;

// node_modules/lodash-es/_isLaziable.js
function isLaziable(func) {
  var funcName = getFuncName_default(func), other = wrapperLodash_default[funcName];
  if (typeof other != "function" || !(funcName in LazyWrapper_default.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData_default(other);
  return !!data && func === data[0];
}
var isLaziable_default = isLaziable;

// node_modules/lodash-es/_shortOut.js
var HOT_COUNT = 800;
var HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var shortOut_default = shortOut;

// node_modules/lodash-es/_setData.js
var setData = shortOut_default(baseSetData_default);
var setData_default = setData;

// node_modules/lodash-es/_getWrapDetails.js
var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/;
var reSplitDetails = /,? & /;
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}
var getWrapDetails_default = getWrapDetails;

// node_modules/lodash-es/_insertWrapDetails.js
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
function insertWrapDetails(source, details) {
  var length = details.length;
  if (!length) {
    return source;
  }
  var lastIndex = length - 1;
  details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
  details = details.join(length > 2 ? ", " : " ");
  return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
}
var insertWrapDetails_default = insertWrapDetails;

// node_modules/lodash-es/constant.js
function constant(value) {
  return function() {
    return value;
  };
}
var constant_default = constant;

// node_modules/lodash-es/_defineProperty.js
var defineProperty = function() {
  try {
    var func = getNative_default(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e6) {
  }
}();
var defineProperty_default = defineProperty;

// node_modules/lodash-es/_baseSetToString.js
var baseSetToString = !defineProperty_default ? identity_default : function(func, string) {
  return defineProperty_default(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant_default(string),
    "writable": true
  });
};
var baseSetToString_default = baseSetToString;

// node_modules/lodash-es/_setToString.js
var setToString = shortOut_default(baseSetToString_default);
var setToString_default = setToString;

// node_modules/lodash-es/_arrayEach.js
function arrayEach(array, iteratee2) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee2(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var arrayEach_default = arrayEach;

// node_modules/lodash-es/_baseFindIndex.js
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
var baseFindIndex_default = baseFindIndex;

// node_modules/lodash-es/_baseIsNaN.js
function baseIsNaN(value) {
  return value !== value;
}
var baseIsNaN_default = baseIsNaN;

// node_modules/lodash-es/_strictIndexOf.js
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1, length = array.length;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}
var strictIndexOf_default = strictIndexOf;

// node_modules/lodash-es/_baseIndexOf.js
function baseIndexOf(array, value, fromIndex) {
  return value === value ? strictIndexOf_default(array, value, fromIndex) : baseFindIndex_default(array, baseIsNaN_default, fromIndex);
}
var baseIndexOf_default = baseIndexOf;

// node_modules/lodash-es/_arrayIncludes.js
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf_default(array, value, 0) > -1;
}
var arrayIncludes_default = arrayIncludes;

// node_modules/lodash-es/_updateWrapDetails.js
var WRAP_BIND_FLAG2 = 1;
var WRAP_BIND_KEY_FLAG = 2;
var WRAP_CURRY_FLAG = 8;
var WRAP_CURRY_RIGHT_FLAG = 16;
var WRAP_PARTIAL_FLAG = 32;
var WRAP_PARTIAL_RIGHT_FLAG = 64;
var WRAP_ARY_FLAG = 128;
var WRAP_REARG_FLAG = 256;
var WRAP_FLIP_FLAG = 512;
var wrapFlags = [
  ["ary", WRAP_ARY_FLAG],
  ["bind", WRAP_BIND_FLAG2],
  ["bindKey", WRAP_BIND_KEY_FLAG],
  ["curry", WRAP_CURRY_FLAG],
  ["curryRight", WRAP_CURRY_RIGHT_FLAG],
  ["flip", WRAP_FLIP_FLAG],
  ["partial", WRAP_PARTIAL_FLAG],
  ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
  ["rearg", WRAP_REARG_FLAG]
];
function updateWrapDetails(details, bitmask) {
  arrayEach_default(wrapFlags, function(pair) {
    var value = "_." + pair[0];
    if (bitmask & pair[1] && !arrayIncludes_default(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}
var updateWrapDetails_default = updateWrapDetails;

// node_modules/lodash-es/_setWrapToString.js
function setWrapToString(wrapper, reference, bitmask) {
  var source = reference + "";
  return setToString_default(wrapper, insertWrapDetails_default(source, updateWrapDetails_default(getWrapDetails_default(source), bitmask)));
}
var setWrapToString_default = setWrapToString;

// node_modules/lodash-es/_createRecurry.js
var WRAP_BIND_FLAG3 = 1;
var WRAP_BIND_KEY_FLAG2 = 2;
var WRAP_CURRY_BOUND_FLAG = 4;
var WRAP_CURRY_FLAG2 = 8;
var WRAP_PARTIAL_FLAG2 = 32;
var WRAP_PARTIAL_RIGHT_FLAG2 = 64;
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
  var isCurry = bitmask & WRAP_CURRY_FLAG2, newHolders = isCurry ? holders : void 0, newHoldersRight = isCurry ? void 0 : holders, newPartials = isCurry ? partials : void 0, newPartialsRight = isCurry ? void 0 : partials;
  bitmask |= isCurry ? WRAP_PARTIAL_FLAG2 : WRAP_PARTIAL_RIGHT_FLAG2;
  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG2 : WRAP_PARTIAL_FLAG2);
  if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
    bitmask &= ~(WRAP_BIND_FLAG3 | WRAP_BIND_KEY_FLAG2);
  }
  var newData = [
    func,
    bitmask,
    thisArg,
    newPartials,
    newHolders,
    newPartialsRight,
    newHoldersRight,
    argPos,
    ary2,
    arity
  ];
  var result2 = wrapFunc.apply(void 0, newData);
  if (isLaziable_default(func)) {
    setData_default(result2, newData);
  }
  result2.placeholder = placeholder;
  return setWrapToString_default(result2, func, bitmask);
}
var createRecurry_default = createRecurry;

// node_modules/lodash-es/_getHolder.js
function getHolder(func) {
  var object = func;
  return object.placeholder;
}
var getHolder_default = getHolder;

// node_modules/lodash-es/_isIndex.js
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var isIndex_default = isIndex;

// node_modules/lodash-es/_reorder.js
var nativeMin = Math.min;
function reorder(array, indexes) {
  var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray_default(array);
  while (length--) {
    var index = indexes[length];
    array[length] = isIndex_default(index, arrLength) ? oldArray[index] : void 0;
  }
  return array;
}
var reorder_default = reorder;

// node_modules/lodash-es/_replaceHolders.js
var PLACEHOLDER = "__lodash_placeholder__";
function replaceHolders(array, placeholder) {
  var index = -1, length = array.length, resIndex = 0, result2 = [];
  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result2[resIndex++] = index;
    }
  }
  return result2;
}
var replaceHolders_default = replaceHolders;

// node_modules/lodash-es/_createHybrid.js
var WRAP_BIND_FLAG4 = 1;
var WRAP_BIND_KEY_FLAG3 = 2;
var WRAP_CURRY_FLAG3 = 8;
var WRAP_CURRY_RIGHT_FLAG2 = 16;
var WRAP_ARY_FLAG2 = 128;
var WRAP_FLIP_FLAG2 = 512;
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
  var isAry = bitmask & WRAP_ARY_FLAG2, isBind = bitmask & WRAP_BIND_FLAG4, isBindKey = bitmask & WRAP_BIND_KEY_FLAG3, isCurried = bitmask & (WRAP_CURRY_FLAG3 | WRAP_CURRY_RIGHT_FLAG2), isFlip = bitmask & WRAP_FLIP_FLAG2, Ctor = isBindKey ? void 0 : createCtor_default(func);
  function wrapper() {
    var length = arguments.length, args = Array(length), index = length;
    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder_default(wrapper), holdersCount = countHolders_default(args, placeholder);
    }
    if (partials) {
      args = composeArgs_default(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight_default(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders_default(args, placeholder);
      return createRecurry_default(
        func,
        bitmask,
        createHybrid,
        wrapper.placeholder,
        thisArg,
        args,
        newHolders,
        argPos,
        ary2,
        arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this, fn2 = isBindKey ? thisBinding[func] : func;
    length = args.length;
    if (argPos) {
      args = reorder_default(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary2 < length) {
      args.length = ary2;
    }
    if (this && this !== root_default && this instanceof wrapper) {
      fn2 = Ctor || createCtor_default(fn2);
    }
    return fn2.apply(thisBinding, args);
  }
  return wrapper;
}
var createHybrid_default = createHybrid;

// node_modules/lodash-es/_createCurry.js
function createCurry(func, bitmask, arity) {
  var Ctor = createCtor_default(func);
  function wrapper() {
    var length = arguments.length, args = Array(length), index = length, placeholder = getHolder_default(wrapper);
    while (index--) {
      args[index] = arguments[index];
    }
    var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders_default(args, placeholder);
    length -= holders.length;
    if (length < arity) {
      return createRecurry_default(
        func,
        bitmask,
        createHybrid_default,
        wrapper.placeholder,
        void 0,
        args,
        holders,
        void 0,
        void 0,
        arity - length
      );
    }
    var fn2 = this && this !== root_default && this instanceof wrapper ? Ctor : func;
    return apply_default(fn2, this, args);
  }
  return wrapper;
}
var createCurry_default = createCurry;

// node_modules/lodash-es/_createPartial.js
var WRAP_BIND_FLAG5 = 1;
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG5, Ctor = createCtor_default(func);
  function wrapper() {
    var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array(leftLength + argsLength), fn2 = this && this !== root_default && this instanceof wrapper ? Ctor : func;
    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply_default(fn2, isBind ? thisArg : this, args);
  }
  return wrapper;
}
var createPartial_default = createPartial;

// node_modules/lodash-es/_mergeData.js
var PLACEHOLDER2 = "__lodash_placeholder__";
var WRAP_BIND_FLAG6 = 1;
var WRAP_BIND_KEY_FLAG4 = 2;
var WRAP_CURRY_BOUND_FLAG2 = 4;
var WRAP_CURRY_FLAG4 = 8;
var WRAP_ARY_FLAG3 = 128;
var WRAP_REARG_FLAG2 = 256;
var nativeMin2 = Math.min;
function mergeData(data, source) {
  var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG6 | WRAP_BIND_KEY_FLAG4 | WRAP_ARY_FLAG3);
  var isCombo = srcBitmask == WRAP_ARY_FLAG3 && bitmask == WRAP_CURRY_FLAG4 || srcBitmask == WRAP_ARY_FLAG3 && bitmask == WRAP_REARG_FLAG2 && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG3 | WRAP_REARG_FLAG2) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG4;
  if (!(isCommon || isCombo)) {
    return data;
  }
  if (srcBitmask & WRAP_BIND_FLAG6) {
    data[2] = source[2];
    newBitmask |= bitmask & WRAP_BIND_FLAG6 ? 0 : WRAP_CURRY_BOUND_FLAG2;
  }
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? composeArgs_default(partials, value, source[4]) : value;
    data[4] = partials ? replaceHolders_default(data[3], PLACEHOLDER2) : source[4];
  }
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? composeArgsRight_default(partials, value, source[6]) : value;
    data[6] = partials ? replaceHolders_default(data[5], PLACEHOLDER2) : source[6];
  }
  value = source[7];
  if (value) {
    data[7] = value;
  }
  if (srcBitmask & WRAP_ARY_FLAG3) {
    data[8] = data[8] == null ? source[8] : nativeMin2(data[8], source[8]);
  }
  if (data[9] == null) {
    data[9] = source[9];
  }
  data[0] = source[0];
  data[1] = newBitmask;
  return data;
}
var mergeData_default = mergeData;

// node_modules/lodash-es/_createWrap.js
var FUNC_ERROR_TEXT2 = "Expected a function";
var WRAP_BIND_FLAG7 = 1;
var WRAP_BIND_KEY_FLAG5 = 2;
var WRAP_CURRY_FLAG5 = 8;
var WRAP_CURRY_RIGHT_FLAG3 = 16;
var WRAP_PARTIAL_FLAG3 = 32;
var WRAP_PARTIAL_RIGHT_FLAG3 = 64;
var nativeMax3 = Math.max;
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG5;
  if (!isBindKey && typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT2);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(WRAP_PARTIAL_FLAG3 | WRAP_PARTIAL_RIGHT_FLAG3);
    partials = holders = void 0;
  }
  ary2 = ary2 === void 0 ? ary2 : nativeMax3(toInteger_default(ary2), 0);
  arity = arity === void 0 ? arity : toInteger_default(arity);
  length -= holders ? holders.length : 0;
  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG3) {
    var partialsRight = partials, holdersRight = holders;
    partials = holders = void 0;
  }
  var data = isBindKey ? void 0 : getData_default(func);
  var newData = [
    func,
    bitmask,
    thisArg,
    partials,
    holders,
    partialsRight,
    holdersRight,
    argPos,
    ary2,
    arity
  ];
  if (data) {
    mergeData_default(newData, data);
  }
  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] === void 0 ? isBindKey ? 0 : func.length : nativeMax3(newData[9] - length, 0);
  if (!arity && bitmask & (WRAP_CURRY_FLAG5 | WRAP_CURRY_RIGHT_FLAG3)) {
    bitmask &= ~(WRAP_CURRY_FLAG5 | WRAP_CURRY_RIGHT_FLAG3);
  }
  if (!bitmask || bitmask == WRAP_BIND_FLAG7) {
    var result2 = createBind_default(func, bitmask, thisArg);
  } else if (bitmask == WRAP_CURRY_FLAG5 || bitmask == WRAP_CURRY_RIGHT_FLAG3) {
    result2 = createCurry_default(func, bitmask, arity);
  } else if ((bitmask == WRAP_PARTIAL_FLAG3 || bitmask == (WRAP_BIND_FLAG7 | WRAP_PARTIAL_FLAG3)) && !holders.length) {
    result2 = createPartial_default(func, bitmask, thisArg, partials);
  } else {
    result2 = createHybrid_default.apply(void 0, newData);
  }
  var setter = data ? baseSetData_default : setData_default;
  return setWrapToString_default(setter(result2, newData), func, bitmask);
}
var createWrap_default = createWrap;

// node_modules/lodash-es/ary.js
var WRAP_ARY_FLAG4 = 128;
function ary(func, n5, guard) {
  n5 = guard ? void 0 : n5;
  n5 = func && n5 == null ? func.length : n5;
  return createWrap_default(func, WRAP_ARY_FLAG4, void 0, void 0, void 0, void 0, n5);
}
var ary_default = ary;

// node_modules/lodash-es/_baseAssignValue.js
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty_default) {
    defineProperty_default(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var baseAssignValue_default = baseAssignValue;

// node_modules/lodash-es/eq.js
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_default = eq;

// node_modules/lodash-es/_assignValue.js
var objectProto6 = Object.prototype;
var hasOwnProperty5 = objectProto6.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty5.call(object, key) && eq_default(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue_default(object, key, value);
  }
}
var assignValue_default = assignValue;

// node_modules/lodash-es/_copyObject.js
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue_default(object, key, newValue);
    } else {
      assignValue_default(object, key, newValue);
    }
  }
  return object;
}
var copyObject_default = copyObject;

// node_modules/lodash-es/_overRest.js
var nativeMax4 = Math.max;
function overRest(func, start, transform2) {
  start = nativeMax4(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax4(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform2(array);
    return apply_default(func, this, otherArgs);
  };
}
var overRest_default = overRest;

// node_modules/lodash-es/_baseRest.js
function baseRest(func, start) {
  return setToString_default(overRest_default(func, start, identity_default), func + "");
}
var baseRest_default = baseRest;

// node_modules/lodash-es/isLength.js
var MAX_SAFE_INTEGER2 = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
}
var isLength_default = isLength;

// node_modules/lodash-es/isArrayLike.js
function isArrayLike(value) {
  return value != null && isLength_default(value.length) && !isFunction_default(value);
}
var isArrayLike_default = isArrayLike;

// node_modules/lodash-es/_isIterateeCall.js
function isIterateeCall(value, index, object) {
  if (!isObject_default(object)) {
    return false;
  }
  var type = typeof index;
  if (type == "number" ? isArrayLike_default(object) && isIndex_default(index, object.length) : type == "string" && index in object) {
    return eq_default(object[index], value);
  }
  return false;
}
var isIterateeCall_default = isIterateeCall;

// node_modules/lodash-es/_createAssigner.js
function createAssigner(assigner) {
  return baseRest_default(function(object, sources) {
    var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall_default(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
var createAssigner_default = createAssigner;

// node_modules/lodash-es/_isPrototype.js
var objectProto7 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto7;
  return value === proto;
}
var isPrototype_default = isPrototype;

// node_modules/lodash-es/_baseTimes.js
function baseTimes(n5, iteratee2) {
  var index = -1, result2 = Array(n5);
  while (++index < n5) {
    result2[index] = iteratee2(index);
  }
  return result2;
}
var baseTimes_default = baseTimes;

// node_modules/lodash-es/_baseIsArguments.js
var argsTag = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
}
var baseIsArguments_default = baseIsArguments;

// node_modules/lodash-es/isArguments.js
var objectProto8 = Object.prototype;
var hasOwnProperty6 = objectProto8.hasOwnProperty;
var propertyIsEnumerable = objectProto8.propertyIsEnumerable;
var isArguments = baseIsArguments_default(/* @__PURE__ */ function() {
  return arguments;
}()) ? baseIsArguments_default : function(value) {
  return isObjectLike_default(value) && hasOwnProperty6.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_default = isArguments;

// node_modules/lodash-es/stubFalse.js
function stubFalse() {
  return false;
}
var stubFalse_default = stubFalse;

// node_modules/lodash-es/isBuffer.js
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root_default.Buffer : void 0;
var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse_default;
var isBuffer_default = isBuffer;

// node_modules/lodash-es/_baseIsTypedArray.js
var argsTag2 = "[object Arguments]";
var arrayTag = "[object Array]";
var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var funcTag2 = "[object Function]";
var mapTag = "[object Map]";
var numberTag = "[object Number]";
var objectTag = "[object Object]";
var regexpTag = "[object RegExp]";
var setTag = "[object Set]";
var stringTag = "[object String]";
var weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]";
var dataViewTag = "[object DataView]";
var float32Tag = "[object Float32Array]";
var float64Tag = "[object Float64Array]";
var int8Tag = "[object Int8Array]";
var int16Tag = "[object Int16Array]";
var int32Tag = "[object Int32Array]";
var uint8Tag = "[object Uint8Array]";
var uint8ClampedTag = "[object Uint8ClampedArray]";
var uint16Tag = "[object Uint16Array]";
var uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
function baseIsTypedArray(value) {
  return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
}
var baseIsTypedArray_default = baseIsTypedArray;

// node_modules/lodash-es/_baseUnary.js
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var baseUnary_default = baseUnary;

// node_modules/lodash-es/_nodeUtil.js
var freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
var freeProcess = moduleExports2 && freeGlobal_default.process;
var nodeUtil = function() {
  try {
    var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e6) {
  }
}();
var nodeUtil_default = nodeUtil;

// node_modules/lodash-es/isTypedArray.js
var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
var isTypedArray_default = isTypedArray;

// node_modules/lodash-es/_arrayLikeKeys.js
var objectProto9 = Object.prototype;
var hasOwnProperty7 = objectProto9.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes_default(value.length, String) : [], length = result2.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty7.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex_default(key, length)))) {
      result2.push(key);
    }
  }
  return result2;
}
var arrayLikeKeys_default = arrayLikeKeys;

// node_modules/lodash-es/_overArg.js
function overArg(func, transform2) {
  return function(arg) {
    return func(transform2(arg));
  };
}
var overArg_default = overArg;

// node_modules/lodash-es/_nativeKeys.js
var nativeKeys = overArg_default(Object.keys, Object);
var nativeKeys_default = nativeKeys;

// node_modules/lodash-es/_baseKeys.js
var objectProto10 = Object.prototype;
var hasOwnProperty8 = objectProto10.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype_default(object)) {
    return nativeKeys_default(object);
  }
  var result2 = [];
  for (var key in Object(object)) {
    if (hasOwnProperty8.call(object, key) && key != "constructor") {
      result2.push(key);
    }
  }
  return result2;
}
var baseKeys_default = baseKeys;

// node_modules/lodash-es/keys.js
function keys(object) {
  return isArrayLike_default(object) ? arrayLikeKeys_default(object) : baseKeys_default(object);
}
var keys_default = keys;

// node_modules/lodash-es/assign.js
var objectProto11 = Object.prototype;
var hasOwnProperty9 = objectProto11.hasOwnProperty;
var assign = createAssigner_default(function(object, source) {
  if (isPrototype_default(source) || isArrayLike_default(source)) {
    copyObject_default(source, keys_default(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty9.call(source, key)) {
      assignValue_default(object, key, source[key]);
    }
  }
});
var assign_default = assign;

// node_modules/lodash-es/_nativeKeysIn.js
function nativeKeysIn(object) {
  var result2 = [];
  if (object != null) {
    for (var key in Object(object)) {
      result2.push(key);
    }
  }
  return result2;
}
var nativeKeysIn_default = nativeKeysIn;

// node_modules/lodash-es/_baseKeysIn.js
var objectProto12 = Object.prototype;
var hasOwnProperty10 = objectProto12.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject_default(object)) {
    return nativeKeysIn_default(object);
  }
  var isProto = isPrototype_default(object), result2 = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty10.call(object, key)))) {
      result2.push(key);
    }
  }
  return result2;
}
var baseKeysIn_default = baseKeysIn;

// node_modules/lodash-es/keysIn.js
function keysIn(object) {
  return isArrayLike_default(object) ? arrayLikeKeys_default(object, true) : baseKeysIn_default(object);
}
var keysIn_default = keysIn;

// node_modules/lodash-es/assignIn.js
var assignIn = createAssigner_default(function(object, source) {
  copyObject_default(source, keysIn_default(source), object);
});
var assignIn_default = assignIn;

// node_modules/lodash-es/assignInWith.js
var assignInWith = createAssigner_default(function(object, source, srcIndex, customizer) {
  copyObject_default(source, keysIn_default(source), object, customizer);
});
var assignInWith_default = assignInWith;

// node_modules/lodash-es/assignWith.js
var assignWith = createAssigner_default(function(object, source, srcIndex, customizer) {
  copyObject_default(source, keys_default(source), object, customizer);
});
var assignWith_default = assignWith;

// node_modules/lodash-es/_isKey.js
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray_default(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol_default(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var isKey_default = isKey;

// node_modules/lodash-es/_nativeCreate.js
var nativeCreate = getNative_default(Object, "create");
var nativeCreate_default = nativeCreate;

// node_modules/lodash-es/_hashClear.js
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
  this.size = 0;
}
var hashClear_default = hashClear;

// node_modules/lodash-es/_hashDelete.js
function hashDelete(key) {
  var result2 = this.has(key) && delete this.__data__[key];
  this.size -= result2 ? 1 : 0;
  return result2;
}
var hashDelete_default = hashDelete;

// node_modules/lodash-es/_hashGet.js
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var objectProto13 = Object.prototype;
var hasOwnProperty11 = objectProto13.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result2 = data[key];
    return result2 === HASH_UNDEFINED ? void 0 : result2;
  }
  return hasOwnProperty11.call(data, key) ? data[key] : void 0;
}
var hashGet_default = hashGet;

// node_modules/lodash-es/_hashHas.js
var objectProto14 = Object.prototype;
var hasOwnProperty12 = objectProto14.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty12.call(data, key);
}
var hashHas_default = hashHas;

// node_modules/lodash-es/_hashSet.js
var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
  return this;
}
var hashSet_default = hashSet;

// node_modules/lodash-es/_Hash.js
function Hash(entries2) {
  var index = -1, length = entries2 == null ? 0 : entries2.length;
  this.clear();
  while (++index < length) {
    var entry = entries2[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear_default;
Hash.prototype["delete"] = hashDelete_default;
Hash.prototype.get = hashGet_default;
Hash.prototype.has = hashHas_default;
Hash.prototype.set = hashSet_default;
var Hash_default = Hash;

// node_modules/lodash-es/_listCacheClear.js
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var listCacheClear_default = listCacheClear;

// node_modules/lodash-es/_assocIndexOf.js
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_default(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var assocIndexOf_default = assocIndexOf;

// node_modules/lodash-es/_listCacheDelete.js
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var listCacheDelete_default = listCacheDelete;

// node_modules/lodash-es/_listCacheGet.js
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var listCacheGet_default = listCacheGet;

// node_modules/lodash-es/_listCacheHas.js
function listCacheHas(key) {
  return assocIndexOf_default(this.__data__, key) > -1;
}
var listCacheHas_default = listCacheHas;

// node_modules/lodash-es/_listCacheSet.js
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var listCacheSet_default = listCacheSet;

// node_modules/lodash-es/_ListCache.js
function ListCache(entries2) {
  var index = -1, length = entries2 == null ? 0 : entries2.length;
  this.clear();
  while (++index < length) {
    var entry = entries2[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear_default;
ListCache.prototype["delete"] = listCacheDelete_default;
ListCache.prototype.get = listCacheGet_default;
ListCache.prototype.has = listCacheHas_default;
ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache;

// node_modules/lodash-es/_Map.js
var Map2 = getNative_default(root_default, "Map");
var Map_default = Map2;

// node_modules/lodash-es/_mapCacheClear.js
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash_default(),
    "map": new (Map_default || ListCache_default)(),
    "string": new Hash_default()
  };
}
var mapCacheClear_default = mapCacheClear;

// node_modules/lodash-es/_isKeyable.js
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var isKeyable_default = isKeyable;

// node_modules/lodash-es/_getMapData.js
function getMapData(map2, key) {
  var data = map2.__data__;
  return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default = getMapData;

// node_modules/lodash-es/_mapCacheDelete.js
function mapCacheDelete(key) {
  var result2 = getMapData_default(this, key)["delete"](key);
  this.size -= result2 ? 1 : 0;
  return result2;
}
var mapCacheDelete_default = mapCacheDelete;

// node_modules/lodash-es/_mapCacheGet.js
function mapCacheGet(key) {
  return getMapData_default(this, key).get(key);
}
var mapCacheGet_default = mapCacheGet;

// node_modules/lodash-es/_mapCacheHas.js
function mapCacheHas(key) {
  return getMapData_default(this, key).has(key);
}
var mapCacheHas_default = mapCacheHas;

// node_modules/lodash-es/_mapCacheSet.js
function mapCacheSet(key, value) {
  var data = getMapData_default(this, key), size3 = data.size;
  data.set(key, value);
  this.size += data.size == size3 ? 0 : 1;
  return this;
}
var mapCacheSet_default = mapCacheSet;

// node_modules/lodash-es/_MapCache.js
function MapCache(entries2) {
  var index = -1, length = entries2 == null ? 0 : entries2.length;
  this.clear();
  while (++index < length) {
    var entry = entries2[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear_default;
MapCache.prototype["delete"] = mapCacheDelete_default;
MapCache.prototype.get = mapCacheGet_default;
MapCache.prototype.has = mapCacheHas_default;
MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache;

// node_modules/lodash-es/memoize.js
var FUNC_ERROR_TEXT3 = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT3);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result2 = func.apply(this, args);
    memoized.cache = cache.set(key, result2) || cache;
    return result2;
  };
  memoized.cache = new (memoize.Cache || MapCache_default)();
  return memoized;
}
memoize.Cache = MapCache_default;
var memoize_default = memoize;

// node_modules/lodash-es/_memoizeCapped.js
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result2 = memoize_default(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result2.cache;
  return result2;
}
var memoizeCapped_default = memoizeCapped;

// node_modules/lodash-es/_stringToPath.js
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped_default(function(string) {
  var result2 = [];
  if (string.charCodeAt(0) === 46) {
    result2.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result2;
});
var stringToPath_default = stringToPath;

// node_modules/lodash-es/toString.js
function toString(value) {
  return value == null ? "" : baseToString_default(value);
}
var toString_default = toString;

// node_modules/lodash-es/_castPath.js
function castPath(value, object) {
  if (isArray_default(value)) {
    return value;
  }
  return isKey_default(value, object) ? [value] : stringToPath_default(toString_default(value));
}
var castPath_default = castPath;

// node_modules/lodash-es/_toKey.js
var INFINITY3 = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol_default(value)) {
    return value;
  }
  var result2 = value + "";
  return result2 == "0" && 1 / value == -INFINITY3 ? "-0" : result2;
}
var toKey_default = toKey;

// node_modules/lodash-es/_baseGet.js
function baseGet(object, path) {
  path = castPath_default(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey_default(path[index++])];
  }
  return index && index == length ? object : void 0;
}
var baseGet_default = baseGet;

// node_modules/lodash-es/get.js
function get(object, path, defaultValue) {
  var result2 = object == null ? void 0 : baseGet_default(object, path);
  return result2 === void 0 ? defaultValue : result2;
}
var get_default = get;

// node_modules/lodash-es/_baseAt.js
function baseAt(object, paths) {
  var index = -1, length = paths.length, result2 = Array(length), skip = object == null;
  while (++index < length) {
    result2[index] = skip ? void 0 : get_default(object, paths[index]);
  }
  return result2;
}
var baseAt_default = baseAt;

// node_modules/lodash-es/_arrayPush.js
function arrayPush(array, values2) {
  var index = -1, length = values2.length, offset3 = array.length;
  while (++index < length) {
    array[offset3 + index] = values2[index];
  }
  return array;
}
var arrayPush_default = arrayPush;

// node_modules/lodash-es/_isFlattenable.js
var spreadableSymbol = Symbol_default ? Symbol_default.isConcatSpreadable : void 0;
function isFlattenable(value) {
  return isArray_default(value) || isArguments_default(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var isFlattenable_default = isFlattenable;

// node_modules/lodash-es/_baseFlatten.js
function baseFlatten(array, depth, predicate, isStrict, result2) {
  var index = -1, length = array.length;
  predicate || (predicate = isFlattenable_default);
  result2 || (result2 = []);
  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result2);
      } else {
        arrayPush_default(result2, value);
      }
    } else if (!isStrict) {
      result2[result2.length] = value;
    }
  }
  return result2;
}
var baseFlatten_default = baseFlatten;

// node_modules/lodash-es/flatten.js
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten_default(array, 1) : [];
}
var flatten_default = flatten;

// node_modules/lodash-es/_flatRest.js
function flatRest(func) {
  return setToString_default(overRest_default(func, void 0, flatten_default), func + "");
}
var flatRest_default = flatRest;

// node_modules/lodash-es/at.js
var at = flatRest_default(baseAt_default);
var at_default = at;

// node_modules/lodash-es/_getPrototype.js
var getPrototype = overArg_default(Object.getPrototypeOf, Object);
var getPrototype_default = getPrototype;

// node_modules/lodash-es/isPlainObject.js
var objectTag2 = "[object Object]";
var funcProto3 = Function.prototype;
var objectProto15 = Object.prototype;
var funcToString3 = funcProto3.toString;
var hasOwnProperty13 = objectProto15.hasOwnProperty;
var objectCtorString = funcToString3.call(Object);
function isPlainObject(value) {
  if (!isObjectLike_default(value) || baseGetTag_default(value) != objectTag2) {
    return false;
  }
  var proto = getPrototype_default(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty13.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString3.call(Ctor) == objectCtorString;
}
var isPlainObject_default = isPlainObject;

// node_modules/lodash-es/isError.js
var domExcTag = "[object DOMException]";
var errorTag2 = "[object Error]";
function isError(value) {
  if (!isObjectLike_default(value)) {
    return false;
  }
  var tag = baseGetTag_default(value);
  return tag == errorTag2 || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject_default(value);
}
var isError_default = isError;

// node_modules/lodash-es/attempt.js
var attempt = baseRest_default(function(func, args) {
  try {
    return apply_default(func, void 0, args);
  } catch (e6) {
    return isError_default(e6) ? e6 : new Error(e6);
  }
});
var attempt_default = attempt;

// node_modules/lodash-es/before.js
var FUNC_ERROR_TEXT4 = "Expected a function";
function before(n5, func) {
  var result2;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT4);
  }
  n5 = toInteger_default(n5);
  return function() {
    if (--n5 > 0) {
      result2 = func.apply(this, arguments);
    }
    if (n5 <= 1) {
      func = void 0;
    }
    return result2;
  };
}
var before_default = before;

// node_modules/lodash-es/bind.js
var WRAP_BIND_FLAG8 = 1;
var WRAP_PARTIAL_FLAG4 = 32;
var bind = baseRest_default(function(func, thisArg, partials) {
  var bitmask = WRAP_BIND_FLAG8;
  if (partials.length) {
    var holders = replaceHolders_default(partials, getHolder_default(bind));
    bitmask |= WRAP_PARTIAL_FLAG4;
  }
  return createWrap_default(func, bitmask, thisArg, partials, holders);
});
bind.placeholder = {};
var bind_default = bind;

// node_modules/lodash-es/bindAll.js
var bindAll = flatRest_default(function(object, methodNames) {
  arrayEach_default(methodNames, function(key) {
    key = toKey_default(key);
    baseAssignValue_default(object, key, bind_default(object[key], object));
  });
  return object;
});
var bindAll_default = bindAll;

// node_modules/lodash-es/bindKey.js
var WRAP_BIND_FLAG9 = 1;
var WRAP_BIND_KEY_FLAG6 = 2;
var WRAP_PARTIAL_FLAG5 = 32;
var bindKey = baseRest_default(function(object, key, partials) {
  var bitmask = WRAP_BIND_FLAG9 | WRAP_BIND_KEY_FLAG6;
  if (partials.length) {
    var holders = replaceHolders_default(partials, getHolder_default(bindKey));
    bitmask |= WRAP_PARTIAL_FLAG5;
  }
  return createWrap_default(key, bitmask, object, partials, holders);
});
bindKey.placeholder = {};
var bindKey_default = bindKey;

// node_modules/lodash-es/_baseSlice.js
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
  var result2 = Array(length);
  while (++index < length) {
    result2[index] = array[index + start];
  }
  return result2;
}
var baseSlice_default = baseSlice;

// node_modules/lodash-es/_castSlice.js
function castSlice(array, start, end) {
  var length = array.length;
  end = end === void 0 ? length : end;
  return !start && end >= length ? array : baseSlice_default(array, start, end);
}
var castSlice_default = castSlice;

// node_modules/lodash-es/_hasUnicode.js
var rsAstralRange = "\\ud800-\\udfff";
var rsComboMarksRange = "\\u0300-\\u036f";
var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange = "\\u20d0-\\u20ff";
var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
var rsVarRange = "\\ufe0e\\ufe0f";
var rsZWJ = "\\u200d";
var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
function hasUnicode(string) {
  return reHasUnicode.test(string);
}
var hasUnicode_default = hasUnicode;

// node_modules/lodash-es/_asciiToArray.js
function asciiToArray(string) {
  return string.split("");
}
var asciiToArray_default = asciiToArray;

// node_modules/lodash-es/_unicodeToArray.js
var rsAstralRange2 = "\\ud800-\\udfff";
var rsComboMarksRange2 = "\\u0300-\\u036f";
var reComboHalfMarksRange2 = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange2 = "\\u20d0-\\u20ff";
var rsComboRange2 = rsComboMarksRange2 + reComboHalfMarksRange2 + rsComboSymbolsRange2;
var rsVarRange2 = "\\ufe0e\\ufe0f";
var rsAstral = "[" + rsAstralRange2 + "]";
var rsCombo = "[" + rsComboRange2 + "]";
var rsFitz = "\\ud83c[\\udffb-\\udfff]";
var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
var rsNonAstral = "[^" + rsAstralRange2 + "]";
var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var rsZWJ2 = "\\u200d";
var reOptMod = rsModifier + "?";
var rsOptVar = "[" + rsVarRange2 + "]?";
var rsOptJoin = "(?:" + rsZWJ2 + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
var rsSeq = rsOptVar + reOptMod + rsOptJoin;
var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}
var unicodeToArray_default = unicodeToArray;

// node_modules/lodash-es/_stringToArray.js
function stringToArray(string) {
  return hasUnicode_default(string) ? unicodeToArray_default(string) : asciiToArray_default(string);
}
var stringToArray_default = stringToArray;

// node_modules/lodash-es/_createCaseFirst.js
function createCaseFirst(methodName) {
  return function(string) {
    string = toString_default(string);
    var strSymbols = hasUnicode_default(string) ? stringToArray_default(string) : void 0;
    var chr = strSymbols ? strSymbols[0] : string.charAt(0);
    var trailing = strSymbols ? castSlice_default(strSymbols, 1).join("") : string.slice(1);
    return chr[methodName]() + trailing;
  };
}
var createCaseFirst_default = createCaseFirst;

// node_modules/lodash-es/upperFirst.js
var upperFirst = createCaseFirst_default("toUpperCase");
var upperFirst_default = upperFirst;

// node_modules/lodash-es/capitalize.js
function capitalize(string) {
  return upperFirst_default(toString_default(string).toLowerCase());
}
var capitalize_default = capitalize;

// node_modules/lodash-es/_arrayReduce.js
function arrayReduce(array, iteratee2, accumulator, initAccum) {
  var index = -1, length = array == null ? 0 : array.length;
  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee2(accumulator, array[index], index, array);
  }
  return accumulator;
}
var arrayReduce_default = arrayReduce;

// node_modules/lodash-es/_basePropertyOf.js
function basePropertyOf(object) {
  return function(key) {
    return object == null ? void 0 : object[key];
  };
}
var basePropertyOf_default = basePropertyOf;

// node_modules/lodash-es/_deburrLetter.js
var deburredLetters = {
  // Latin-1 Supplement block.
  "À": "A",
  "Á": "A",
  "Â": "A",
  "Ã": "A",
  "Ä": "A",
  "Å": "A",
  "à": "a",
  "á": "a",
  "â": "a",
  "ã": "a",
  "ä": "a",
  "å": "a",
  "Ç": "C",
  "ç": "c",
  "Ð": "D",
  "ð": "d",
  "È": "E",
  "É": "E",
  "Ê": "E",
  "Ë": "E",
  "è": "e",
  "é": "e",
  "ê": "e",
  "ë": "e",
  "Ì": "I",
  "Í": "I",
  "Î": "I",
  "Ï": "I",
  "ì": "i",
  "í": "i",
  "î": "i",
  "ï": "i",
  "Ñ": "N",
  "ñ": "n",
  "Ò": "O",
  "Ó": "O",
  "Ô": "O",
  "Õ": "O",
  "Ö": "O",
  "Ø": "O",
  "ò": "o",
  "ó": "o",
  "ô": "o",
  "õ": "o",
  "ö": "o",
  "ø": "o",
  "Ù": "U",
  "Ú": "U",
  "Û": "U",
  "Ü": "U",
  "ù": "u",
  "ú": "u",
  "û": "u",
  "ü": "u",
  "Ý": "Y",
  "ý": "y",
  "ÿ": "y",
  "Æ": "Ae",
  "æ": "ae",
  "Þ": "Th",
  "þ": "th",
  "ß": "ss",
  // Latin Extended-A block.
  "Ā": "A",
  "Ă": "A",
  "Ą": "A",
  "ā": "a",
  "ă": "a",
  "ą": "a",
  "Ć": "C",
  "Ĉ": "C",
  "Ċ": "C",
  "Č": "C",
  "ć": "c",
  "ĉ": "c",
  "ċ": "c",
  "č": "c",
  "Ď": "D",
  "Đ": "D",
  "ď": "d",
  "đ": "d",
  "Ē": "E",
  "Ĕ": "E",
  "Ė": "E",
  "Ę": "E",
  "Ě": "E",
  "ē": "e",
  "ĕ": "e",
  "ė": "e",
  "ę": "e",
  "ě": "e",
  "Ĝ": "G",
  "Ğ": "G",
  "Ġ": "G",
  "Ģ": "G",
  "ĝ": "g",
  "ğ": "g",
  "ġ": "g",
  "ģ": "g",
  "Ĥ": "H",
  "Ħ": "H",
  "ĥ": "h",
  "ħ": "h",
  "Ĩ": "I",
  "Ī": "I",
  "Ĭ": "I",
  "Į": "I",
  "İ": "I",
  "ĩ": "i",
  "ī": "i",
  "ĭ": "i",
  "į": "i",
  "ı": "i",
  "Ĵ": "J",
  "ĵ": "j",
  "Ķ": "K",
  "ķ": "k",
  "ĸ": "k",
  "Ĺ": "L",
  "Ļ": "L",
  "Ľ": "L",
  "Ŀ": "L",
  "Ł": "L",
  "ĺ": "l",
  "ļ": "l",
  "ľ": "l",
  "ŀ": "l",
  "ł": "l",
  "Ń": "N",
  "Ņ": "N",
  "Ň": "N",
  "Ŋ": "N",
  "ń": "n",
  "ņ": "n",
  "ň": "n",
  "ŋ": "n",
  "Ō": "O",
  "Ŏ": "O",
  "Ő": "O",
  "ō": "o",
  "ŏ": "o",
  "ő": "o",
  "Ŕ": "R",
  "Ŗ": "R",
  "Ř": "R",
  "ŕ": "r",
  "ŗ": "r",
  "ř": "r",
  "Ś": "S",
  "Ŝ": "S",
  "Ş": "S",
  "Š": "S",
  "ś": "s",
  "ŝ": "s",
  "ş": "s",
  "š": "s",
  "Ţ": "T",
  "Ť": "T",
  "Ŧ": "T",
  "ţ": "t",
  "ť": "t",
  "ŧ": "t",
  "Ũ": "U",
  "Ū": "U",
  "Ŭ": "U",
  "Ů": "U",
  "Ű": "U",
  "Ų": "U",
  "ũ": "u",
  "ū": "u",
  "ŭ": "u",
  "ů": "u",
  "ű": "u",
  "ų": "u",
  "Ŵ": "W",
  "ŵ": "w",
  "Ŷ": "Y",
  "ŷ": "y",
  "Ÿ": "Y",
  "Ź": "Z",
  "Ż": "Z",
  "Ž": "Z",
  "ź": "z",
  "ż": "z",
  "ž": "z",
  "Ĳ": "IJ",
  "ĳ": "ij",
  "Œ": "Oe",
  "œ": "oe",
  "ŉ": "'n",
  "ſ": "s"
};
var deburrLetter = basePropertyOf_default(deburredLetters);
var deburrLetter_default = deburrLetter;

// node_modules/lodash-es/deburr.js
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
var rsComboMarksRange3 = "\\u0300-\\u036f";
var reComboHalfMarksRange3 = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange3 = "\\u20d0-\\u20ff";
var rsComboRange3 = rsComboMarksRange3 + reComboHalfMarksRange3 + rsComboSymbolsRange3;
var rsCombo2 = "[" + rsComboRange3 + "]";
var reComboMark = RegExp(rsCombo2, "g");
function deburr(string) {
  string = toString_default(string);
  return string && string.replace(reLatin, deburrLetter_default).replace(reComboMark, "");
}
var deburr_default = deburr;

// node_modules/lodash-es/_asciiWords.js
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}
var asciiWords_default = asciiWords;

// node_modules/lodash-es/_hasUnicodeWord.js
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}
var hasUnicodeWord_default = hasUnicodeWord;

// node_modules/lodash-es/_unicodeWords.js
var rsAstralRange3 = "\\ud800-\\udfff";
var rsComboMarksRange4 = "\\u0300-\\u036f";
var reComboHalfMarksRange4 = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange4 = "\\u20d0-\\u20ff";
var rsComboRange4 = rsComboMarksRange4 + reComboHalfMarksRange4 + rsComboSymbolsRange4;
var rsDingbatRange = "\\u2700-\\u27bf";
var rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
var rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
var rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
var rsPunctuationRange = "\\u2000-\\u206f";
var rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
var rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
var rsVarRange3 = "\\ufe0e\\ufe0f";
var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
var rsApos = "['’]";
var rsBreak = "[" + rsBreakRange + "]";
var rsCombo3 = "[" + rsComboRange4 + "]";
var rsDigits = "\\d+";
var rsDingbat = "[" + rsDingbatRange + "]";
var rsLower = "[" + rsLowerRange + "]";
var rsMisc = "[^" + rsAstralRange3 + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]";
var rsFitz2 = "\\ud83c[\\udffb-\\udfff]";
var rsModifier2 = "(?:" + rsCombo3 + "|" + rsFitz2 + ")";
var rsNonAstral2 = "[^" + rsAstralRange3 + "]";
var rsRegional2 = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var rsSurrPair2 = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var rsUpper = "[" + rsUpperRange + "]";
var rsZWJ3 = "\\u200d";
var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")";
var rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")";
var rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?";
var rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?";
var reOptMod2 = rsModifier2 + "?";
var rsOptVar2 = "[" + rsVarRange3 + "]?";
var rsOptJoin2 = "(?:" + rsZWJ3 + "(?:" + [rsNonAstral2, rsRegional2, rsSurrPair2].join("|") + ")" + rsOptVar2 + reOptMod2 + ")*";
var rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])";
var rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])";
var rsSeq2 = rsOptVar2 + reOptMod2 + rsOptJoin2;
var rsEmoji = "(?:" + [rsDingbat, rsRegional2, rsSurrPair2].join("|") + ")" + rsSeq2;
var reUnicodeWord = RegExp([
  rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
  rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
  rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
  rsUpper + "+" + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join("|"), "g");
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}
var unicodeWords_default = unicodeWords;

// node_modules/lodash-es/words.js
function words(string, pattern, guard) {
  string = toString_default(string);
  pattern = guard ? void 0 : pattern;
  if (pattern === void 0) {
    return hasUnicodeWord_default(string) ? unicodeWords_default(string) : asciiWords_default(string);
  }
  return string.match(pattern) || [];
}
var words_default = words;

// node_modules/lodash-es/_createCompounder.js
var rsApos2 = "['’]";
var reApos = RegExp(rsApos2, "g");
function createCompounder(callback) {
  return function(string) {
    return arrayReduce_default(words_default(deburr_default(string).replace(reApos, "")), callback, "");
  };
}
var createCompounder_default = createCompounder;

// node_modules/lodash-es/camelCase.js
var camelCase = createCompounder_default(function(result2, word, index) {
  word = word.toLowerCase();
  return result2 + (index ? capitalize_default(word) : word);
});
var camelCase_default = camelCase;

// node_modules/lodash-es/castArray.js
function castArray() {
  if (!arguments.length) {
    return [];
  }
  var value = arguments[0];
  return isArray_default(value) ? value : [value];
}
var castArray_default = castArray;

// node_modules/lodash-es/_createRound.js
var nativeIsFinite = root_default.isFinite;
var nativeMin3 = Math.min;
function createRound(methodName) {
  var func = Math[methodName];
  return function(number, precision) {
    number = toNumber_default(number);
    precision = precision == null ? 0 : nativeMin3(toInteger_default(precision), 292);
    if (precision && nativeIsFinite(number)) {
      var pair = (toString_default(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
      pair = (toString_default(value) + "e").split("e");
      return +(pair[0] + "e" + (+pair[1] - precision));
    }
    return func(number);
  };
}
var createRound_default = createRound;

// node_modules/lodash-es/ceil.js
var ceil = createRound_default("ceil");
var ceil_default = ceil;

// node_modules/lodash-es/chain.js
function chain(value) {
  var result2 = wrapperLodash_default(value);
  result2.__chain__ = true;
  return result2;
}
var chain_default = chain;

// node_modules/lodash-es/chunk.js
var nativeCeil = Math.ceil;
var nativeMax5 = Math.max;
function chunk(array, size3, guard) {
  if (guard ? isIterateeCall_default(array, size3, guard) : size3 === void 0) {
    size3 = 1;
  } else {
    size3 = nativeMax5(toInteger_default(size3), 0);
  }
  var length = array == null ? 0 : array.length;
  if (!length || size3 < 1) {
    return [];
  }
  var index = 0, resIndex = 0, result2 = Array(nativeCeil(length / size3));
  while (index < length) {
    result2[resIndex++] = baseSlice_default(array, index, index += size3);
  }
  return result2;
}
var chunk_default = chunk;

// node_modules/lodash-es/_baseClamp.js
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== void 0) {
      number = number <= upper ? number : upper;
    }
    if (lower !== void 0) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}
var baseClamp_default = baseClamp;

// node_modules/lodash-es/clamp.js
function clamp(number, lower, upper) {
  if (upper === void 0) {
    upper = lower;
    lower = void 0;
  }
  if (upper !== void 0) {
    upper = toNumber_default(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower !== void 0) {
    lower = toNumber_default(lower);
    lower = lower === lower ? lower : 0;
  }
  return baseClamp_default(toNumber_default(number), lower, upper);
}
var clamp_default = clamp;

// node_modules/lodash-es/_stackClear.js
function stackClear() {
  this.__data__ = new ListCache_default();
  this.size = 0;
}
var stackClear_default = stackClear;

// node_modules/lodash-es/_stackDelete.js
function stackDelete(key) {
  var data = this.__data__, result2 = data["delete"](key);
  this.size = data.size;
  return result2;
}
var stackDelete_default = stackDelete;

// node_modules/lodash-es/_stackGet.js
function stackGet(key) {
  return this.__data__.get(key);
}
var stackGet_default = stackGet;

// node_modules/lodash-es/_stackHas.js
function stackHas(key) {
  return this.__data__.has(key);
}
var stackHas_default = stackHas;

// node_modules/lodash-es/_stackSet.js
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache_default) {
    var pairs = data.__data__;
    if (!Map_default || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache_default(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var stackSet_default = stackSet;

// node_modules/lodash-es/_Stack.js
function Stack(entries2) {
  var data = this.__data__ = new ListCache_default(entries2);
  this.size = data.size;
}
Stack.prototype.clear = stackClear_default;
Stack.prototype["delete"] = stackDelete_default;
Stack.prototype.get = stackGet_default;
Stack.prototype.has = stackHas_default;
Stack.prototype.set = stackSet_default;
var Stack_default = Stack;

// node_modules/lodash-es/_baseAssign.js
function baseAssign(object, source) {
  return object && copyObject_default(source, keys_default(source), object);
}
var baseAssign_default = baseAssign;

// node_modules/lodash-es/_baseAssignIn.js
function baseAssignIn(object, source) {
  return object && copyObject_default(source, keysIn_default(source), object);
}
var baseAssignIn_default = baseAssignIn;

// node_modules/lodash-es/_cloneBuffer.js
var freeExports3 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule3 = freeExports3 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports3 = freeModule3 && freeModule3.exports === freeExports3;
var Buffer2 = moduleExports3 ? root_default.Buffer : void 0;
var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result2);
  return result2;
}
var cloneBuffer_default = cloneBuffer;

// node_modules/lodash-es/_arrayFilter.js
function arrayFilter(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result2[resIndex++] = value;
    }
  }
  return result2;
}
var arrayFilter_default = arrayFilter;

// node_modules/lodash-es/stubArray.js
function stubArray() {
  return [];
}
var stubArray_default = stubArray;

// node_modules/lodash-es/_getSymbols.js
var objectProto16 = Object.prototype;
var propertyIsEnumerable2 = objectProto16.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray_default : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter_default(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable2.call(object, symbol);
  });
};
var getSymbols_default = getSymbols;

// node_modules/lodash-es/_copySymbols.js
function copySymbols(source, object) {
  return copyObject_default(source, getSymbols_default(source), object);
}
var copySymbols_default = copySymbols;

// node_modules/lodash-es/_getSymbolsIn.js
var nativeGetSymbols2 = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols2 ? stubArray_default : function(object) {
  var result2 = [];
  while (object) {
    arrayPush_default(result2, getSymbols_default(object));
    object = getPrototype_default(object);
  }
  return result2;
};
var getSymbolsIn_default = getSymbolsIn;

// node_modules/lodash-es/_copySymbolsIn.js
function copySymbolsIn(source, object) {
  return copyObject_default(source, getSymbolsIn_default(source), object);
}
var copySymbolsIn_default = copySymbolsIn;

// node_modules/lodash-es/_baseGetAllKeys.js
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result2 = keysFunc(object);
  return isArray_default(object) ? result2 : arrayPush_default(result2, symbolsFunc(object));
}
var baseGetAllKeys_default = baseGetAllKeys;

// node_modules/lodash-es/_getAllKeys.js
function getAllKeys(object) {
  return baseGetAllKeys_default(object, keys_default, getSymbols_default);
}
var getAllKeys_default = getAllKeys;

// node_modules/lodash-es/_getAllKeysIn.js
function getAllKeysIn(object) {
  return baseGetAllKeys_default(object, keysIn_default, getSymbolsIn_default);
}
var getAllKeysIn_default = getAllKeysIn;

// node_modules/lodash-es/_DataView.js
var DataView = getNative_default(root_default, "DataView");
var DataView_default = DataView;

// node_modules/lodash-es/_Promise.js
var Promise2 = getNative_default(root_default, "Promise");
var Promise_default = Promise2;

// node_modules/lodash-es/_Set.js
var Set2 = getNative_default(root_default, "Set");
var Set_default = Set2;

// node_modules/lodash-es/_getTag.js
var mapTag2 = "[object Map]";
var objectTag3 = "[object Object]";
var promiseTag = "[object Promise]";
var setTag2 = "[object Set]";
var weakMapTag2 = "[object WeakMap]";
var dataViewTag2 = "[object DataView]";
var dataViewCtorString = toSource_default(DataView_default);
var mapCtorString = toSource_default(Map_default);
var promiseCtorString = toSource_default(Promise_default);
var setCtorString = toSource_default(Set_default);
var weakMapCtorString = toSource_default(WeakMap_default);
var getTag = baseGetTag_default;
if (DataView_default && getTag(new DataView_default(new ArrayBuffer(1))) != dataViewTag2 || Map_default && getTag(new Map_default()) != mapTag2 || Promise_default && getTag(Promise_default.resolve()) != promiseTag || Set_default && getTag(new Set_default()) != setTag2 || WeakMap_default && getTag(new WeakMap_default()) != weakMapTag2) {
  getTag = function(value) {
    var result2 = baseGetTag_default(value), Ctor = result2 == objectTag3 ? value.constructor : void 0, ctorString = Ctor ? toSource_default(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag2;
        case mapCtorString:
          return mapTag2;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag2;
        case weakMapCtorString:
          return weakMapTag2;
      }
    }
    return result2;
  };
}
var getTag_default = getTag;

// node_modules/lodash-es/_initCloneArray.js
var objectProto17 = Object.prototype;
var hasOwnProperty14 = objectProto17.hasOwnProperty;
function initCloneArray(array) {
  var length = array.length, result2 = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty14.call(array, "index")) {
    result2.index = array.index;
    result2.input = array.input;
  }
  return result2;
}
var initCloneArray_default = initCloneArray;

// node_modules/lodash-es/_Uint8Array.js
var Uint8Array2 = root_default.Uint8Array;
var Uint8Array_default = Uint8Array2;

// node_modules/lodash-es/_cloneArrayBuffer.js
function cloneArrayBuffer(arrayBuffer) {
  var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array_default(result2).set(new Uint8Array_default(arrayBuffer));
  return result2;
}
var cloneArrayBuffer_default = cloneArrayBuffer;

// node_modules/lodash-es/_cloneDataView.js
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer_default(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var cloneDataView_default = cloneDataView;

// node_modules/lodash-es/_cloneRegExp.js
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result2.lastIndex = regexp.lastIndex;
  return result2;
}
var cloneRegExp_default = cloneRegExp;

// node_modules/lodash-es/_cloneSymbol.js
var symbolProto2 = Symbol_default ? Symbol_default.prototype : void 0;
var symbolValueOf = symbolProto2 ? symbolProto2.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
var cloneSymbol_default = cloneSymbol;

// node_modules/lodash-es/_cloneTypedArray.js
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer_default(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var cloneTypedArray_default = cloneTypedArray;

// node_modules/lodash-es/_initCloneByTag.js
var boolTag2 = "[object Boolean]";
var dateTag2 = "[object Date]";
var mapTag3 = "[object Map]";
var numberTag2 = "[object Number]";
var regexpTag2 = "[object RegExp]";
var setTag3 = "[object Set]";
var stringTag2 = "[object String]";
var symbolTag2 = "[object Symbol]";
var arrayBufferTag2 = "[object ArrayBuffer]";
var dataViewTag3 = "[object DataView]";
var float32Tag2 = "[object Float32Array]";
var float64Tag2 = "[object Float64Array]";
var int8Tag2 = "[object Int8Array]";
var int16Tag2 = "[object Int16Array]";
var int32Tag2 = "[object Int32Array]";
var uint8Tag2 = "[object Uint8Array]";
var uint8ClampedTag2 = "[object Uint8ClampedArray]";
var uint16Tag2 = "[object Uint16Array]";
var uint32Tag2 = "[object Uint32Array]";
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag2:
      return cloneArrayBuffer_default(object);
    case boolTag2:
    case dateTag2:
      return new Ctor(+object);
    case dataViewTag3:
      return cloneDataView_default(object, isDeep);
    case float32Tag2:
    case float64Tag2:
    case int8Tag2:
    case int16Tag2:
    case int32Tag2:
    case uint8Tag2:
    case uint8ClampedTag2:
    case uint16Tag2:
    case uint32Tag2:
      return cloneTypedArray_default(object, isDeep);
    case mapTag3:
      return new Ctor();
    case numberTag2:
    case stringTag2:
      return new Ctor(object);
    case regexpTag2:
      return cloneRegExp_default(object);
    case setTag3:
      return new Ctor();
    case symbolTag2:
      return cloneSymbol_default(object);
  }
}
var initCloneByTag_default = initCloneByTag;

// node_modules/lodash-es/_initCloneObject.js
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype_default(object) ? baseCreate_default(getPrototype_default(object)) : {};
}
var initCloneObject_default = initCloneObject;

// node_modules/lodash-es/_baseIsMap.js
var mapTag4 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike_default(value) && getTag_default(value) == mapTag4;
}
var baseIsMap_default = baseIsMap;

// node_modules/lodash-es/isMap.js
var nodeIsMap = nodeUtil_default && nodeUtil_default.isMap;
var isMap = nodeIsMap ? baseUnary_default(nodeIsMap) : baseIsMap_default;
var isMap_default = isMap;

// node_modules/lodash-es/_baseIsSet.js
var setTag4 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike_default(value) && getTag_default(value) == setTag4;
}
var baseIsSet_default = baseIsSet;

// node_modules/lodash-es/isSet.js
var nodeIsSet = nodeUtil_default && nodeUtil_default.isSet;
var isSet = nodeIsSet ? baseUnary_default(nodeIsSet) : baseIsSet_default;
var isSet_default = isSet;

// node_modules/lodash-es/_baseClone.js
var CLONE_DEEP_FLAG = 1;
var CLONE_FLAT_FLAG = 2;
var CLONE_SYMBOLS_FLAG = 4;
var argsTag3 = "[object Arguments]";
var arrayTag2 = "[object Array]";
var boolTag3 = "[object Boolean]";
var dateTag3 = "[object Date]";
var errorTag3 = "[object Error]";
var funcTag3 = "[object Function]";
var genTag2 = "[object GeneratorFunction]";
var mapTag5 = "[object Map]";
var numberTag3 = "[object Number]";
var objectTag4 = "[object Object]";
var regexpTag3 = "[object RegExp]";
var setTag5 = "[object Set]";
var stringTag3 = "[object String]";
var symbolTag3 = "[object Symbol]";
var weakMapTag3 = "[object WeakMap]";
var arrayBufferTag3 = "[object ArrayBuffer]";
var dataViewTag4 = "[object DataView]";
var float32Tag3 = "[object Float32Array]";
var float64Tag3 = "[object Float64Array]";
var int8Tag3 = "[object Int8Array]";
var int16Tag3 = "[object Int16Array]";
var int32Tag3 = "[object Int32Array]";
var uint8Tag3 = "[object Uint8Array]";
var uint8ClampedTag3 = "[object Uint8ClampedArray]";
var uint16Tag3 = "[object Uint16Array]";
var uint32Tag3 = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag3] = cloneableTags[arrayTag2] = cloneableTags[arrayBufferTag3] = cloneableTags[dataViewTag4] = cloneableTags[boolTag3] = cloneableTags[dateTag3] = cloneableTags[float32Tag3] = cloneableTags[float64Tag3] = cloneableTags[int8Tag3] = cloneableTags[int16Tag3] = cloneableTags[int32Tag3] = cloneableTags[mapTag5] = cloneableTags[numberTag3] = cloneableTags[objectTag4] = cloneableTags[regexpTag3] = cloneableTags[setTag5] = cloneableTags[stringTag3] = cloneableTags[symbolTag3] = cloneableTags[uint8Tag3] = cloneableTags[uint8ClampedTag3] = cloneableTags[uint16Tag3] = cloneableTags[uint32Tag3] = true;
cloneableTags[errorTag3] = cloneableTags[funcTag3] = cloneableTags[weakMapTag3] = false;
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
  if (customizer) {
    result2 = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result2 !== void 0) {
    return result2;
  }
  if (!isObject_default(value)) {
    return value;
  }
  var isArr = isArray_default(value);
  if (isArr) {
    result2 = initCloneArray_default(value);
    if (!isDeep) {
      return copyArray_default(value, result2);
    }
  } else {
    var tag = getTag_default(value), isFunc = tag == funcTag3 || tag == genTag2;
    if (isBuffer_default(value)) {
      return cloneBuffer_default(value, isDeep);
    }
    if (tag == objectTag4 || tag == argsTag3 || isFunc && !object) {
      result2 = isFlat || isFunc ? {} : initCloneObject_default(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn_default(value, baseAssignIn_default(result2, value)) : copySymbols_default(value, baseAssign_default(result2, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result2 = initCloneByTag_default(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack_default());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result2);
  if (isSet_default(value)) {
    value.forEach(function(subValue) {
      result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap_default(value)) {
    value.forEach(function(subValue, key2) {
      result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn_default : getAllKeys_default : isFlat ? keysIn_default : keys_default;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach_default(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue_default(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result2;
}
var baseClone_default = baseClone;

// node_modules/lodash-es/clone.js
var CLONE_SYMBOLS_FLAG2 = 4;
function clone(value) {
  return baseClone_default(value, CLONE_SYMBOLS_FLAG2);
}
var clone_default = clone;

// node_modules/lodash-es/cloneDeep.js
var CLONE_DEEP_FLAG2 = 1;
var CLONE_SYMBOLS_FLAG3 = 4;
function cloneDeep(value) {
  return baseClone_default(value, CLONE_DEEP_FLAG2 | CLONE_SYMBOLS_FLAG3);
}
var cloneDeep_default = cloneDeep;

// node_modules/lodash-es/cloneDeepWith.js
var CLONE_DEEP_FLAG3 = 1;
var CLONE_SYMBOLS_FLAG4 = 4;
function cloneDeepWith(value, customizer) {
  customizer = typeof customizer == "function" ? customizer : void 0;
  return baseClone_default(value, CLONE_DEEP_FLAG3 | CLONE_SYMBOLS_FLAG4, customizer);
}
var cloneDeepWith_default = cloneDeepWith;

// node_modules/lodash-es/cloneWith.js
var CLONE_SYMBOLS_FLAG5 = 4;
function cloneWith(value, customizer) {
  customizer = typeof customizer == "function" ? customizer : void 0;
  return baseClone_default(value, CLONE_SYMBOLS_FLAG5, customizer);
}
var cloneWith_default = cloneWith;

// node_modules/lodash-es/commit.js
function wrapperCommit() {
  return new LodashWrapper_default(this.value(), this.__chain__);
}
var commit_default = wrapperCommit;

// node_modules/lodash-es/compact.js
function compact(array) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
  while (++index < length) {
    var value = array[index];
    if (value) {
      result2[resIndex++] = value;
    }
  }
  return result2;
}
var compact_default = compact;

// node_modules/lodash-es/concat.js
function concat() {
  var length = arguments.length;
  if (!length) {
    return [];
  }
  var args = Array(length - 1), array = arguments[0], index = length;
  while (index--) {
    args[index - 1] = arguments[index];
  }
  return arrayPush_default(isArray_default(array) ? copyArray_default(array) : [array], baseFlatten_default(args, 1));
}
var concat_default = concat;

// node_modules/lodash-es/_setCacheAdd.js
var HASH_UNDEFINED3 = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED3);
  return this;
}
var setCacheAdd_default = setCacheAdd;

// node_modules/lodash-es/_setCacheHas.js
function setCacheHas(value) {
  return this.__data__.has(value);
}
var setCacheHas_default = setCacheHas;

// node_modules/lodash-es/_SetCache.js
function SetCache(values2) {
  var index = -1, length = values2 == null ? 0 : values2.length;
  this.__data__ = new MapCache_default();
  while (++index < length) {
    this.add(values2[index]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd_default;
SetCache.prototype.has = setCacheHas_default;
var SetCache_default = SetCache;

// node_modules/lodash-es/_arraySome.js
function arraySome(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
var arraySome_default = arraySome;

// node_modules/lodash-es/_cacheHas.js
function cacheHas(cache, key) {
  return cache.has(key);
}
var cacheHas_default = cacheHas;

// node_modules/lodash-es/_equalArrays.js
var COMPARE_PARTIAL_FLAG = 1;
var COMPARE_UNORDERED_FLAG = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache_default() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result2 = false;
      break;
    }
    if (seen) {
      if (!arraySome_default(other, function(othValue2, othIndex) {
        if (!cacheHas_default(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result2 = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result2 = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result2;
}
var equalArrays_default = equalArrays;

// node_modules/lodash-es/_mapToArray.js
function mapToArray(map2) {
  var index = -1, result2 = Array(map2.size);
  map2.forEach(function(value, key) {
    result2[++index] = [key, value];
  });
  return result2;
}
var mapToArray_default = mapToArray;

// node_modules/lodash-es/_setToArray.js
function setToArray(set2) {
  var index = -1, result2 = Array(set2.size);
  set2.forEach(function(value) {
    result2[++index] = value;
  });
  return result2;
}
var setToArray_default = setToArray;

// node_modules/lodash-es/_equalByTag.js
var COMPARE_PARTIAL_FLAG2 = 1;
var COMPARE_UNORDERED_FLAG2 = 2;
var boolTag4 = "[object Boolean]";
var dateTag4 = "[object Date]";
var errorTag4 = "[object Error]";
var mapTag6 = "[object Map]";
var numberTag4 = "[object Number]";
var regexpTag4 = "[object RegExp]";
var setTag6 = "[object Set]";
var stringTag4 = "[object String]";
var symbolTag4 = "[object Symbol]";
var arrayBufferTag4 = "[object ArrayBuffer]";
var dataViewTag5 = "[object DataView]";
var symbolProto3 = Symbol_default ? Symbol_default.prototype : void 0;
var symbolValueOf2 = symbolProto3 ? symbolProto3.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag5:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag4:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array_default(object), new Uint8Array_default(other))) {
        return false;
      }
      return true;
    case boolTag4:
    case dateTag4:
    case numberTag4:
      return eq_default(+object, +other);
    case errorTag4:
      return object.name == other.name && object.message == other.message;
    case regexpTag4:
    case stringTag4:
      return object == other + "";
    case mapTag6:
      var convert = mapToArray_default;
    case setTag6:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG2;
      convert || (convert = setToArray_default);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG2;
      stack.set(object, other);
      var result2 = equalArrays_default(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result2;
    case symbolTag4:
      if (symbolValueOf2) {
        return symbolValueOf2.call(object) == symbolValueOf2.call(other);
      }
  }
  return false;
}
var equalByTag_default = equalByTag;

// node_modules/lodash-es/_equalObjects.js
var COMPARE_PARTIAL_FLAG3 = 1;
var objectProto18 = Object.prototype;
var hasOwnProperty15 = objectProto18.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG3, objProps = getAllKeys_default(object), objLength = objProps.length, othProps = getAllKeys_default(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty15.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result2 = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result2 = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result2 && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result2 = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result2;
}
var equalObjects_default = equalObjects;

// node_modules/lodash-es/_baseIsEqualDeep.js
var COMPARE_PARTIAL_FLAG4 = 1;
var argsTag4 = "[object Arguments]";
var arrayTag3 = "[object Array]";
var objectTag5 = "[object Object]";
var objectProto19 = Object.prototype;
var hasOwnProperty16 = objectProto19.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_default(object), othIsArr = isArray_default(other), objTag = objIsArr ? arrayTag3 : getTag_default(object), othTag = othIsArr ? arrayTag3 : getTag_default(other);
  objTag = objTag == argsTag4 ? objectTag5 : objTag;
  othTag = othTag == argsTag4 ? objectTag5 : othTag;
  var objIsObj = objTag == objectTag5, othIsObj = othTag == objectTag5, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer_default(object)) {
    if (!isBuffer_default(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack_default());
    return objIsArr || isTypedArray_default(object) ? equalArrays_default(object, other, bitmask, customizer, equalFunc, stack) : equalByTag_default(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG4)) {
    var objIsWrapped = objIsObj && hasOwnProperty16.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty16.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack_default());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack_default());
  return equalObjects_default(object, other, bitmask, customizer, equalFunc, stack);
}
var baseIsEqualDeep_default = baseIsEqualDeep;

// node_modules/lodash-es/_baseIsEqual.js
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike_default(value) && !isObjectLike_default(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep_default(value, other, bitmask, customizer, baseIsEqual, stack);
}
var baseIsEqual_default = baseIsEqual;

// node_modules/lodash-es/_baseIsMatch.js
var COMPARE_PARTIAL_FLAG5 = 1;
var COMPARE_UNORDERED_FLAG3 = 2;
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length, length = index, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0], objValue = object[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack_default();
      if (customizer) {
        var result2 = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result2 === void 0 ? baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG5 | COMPARE_UNORDERED_FLAG3, customizer, stack) : result2)) {
        return false;
      }
    }
  }
  return true;
}
var baseIsMatch_default = baseIsMatch;

// node_modules/lodash-es/_isStrictComparable.js
function isStrictComparable(value) {
  return value === value && !isObject_default(value);
}
var isStrictComparable_default = isStrictComparable;

// node_modules/lodash-es/_getMatchData.js
function getMatchData(object) {
  var result2 = keys_default(object), length = result2.length;
  while (length--) {
    var key = result2[length], value = object[key];
    result2[length] = [key, value, isStrictComparable_default(value)];
  }
  return result2;
}
var getMatchData_default = getMatchData;

// node_modules/lodash-es/_matchesStrictComparable.js
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
var matchesStrictComparable_default = matchesStrictComparable;

// node_modules/lodash-es/_baseMatches.js
function baseMatches(source) {
  var matchData = getMatchData_default(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable_default(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch_default(object, source, matchData);
  };
}
var baseMatches_default = baseMatches;

// node_modules/lodash-es/_baseHasIn.js
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
var baseHasIn_default = baseHasIn;

// node_modules/lodash-es/_hasPath.js
function hasPath(object, path, hasFunc) {
  path = castPath_default(path, object);
  var index = -1, length = path.length, result2 = false;
  while (++index < length) {
    var key = toKey_default(path[index]);
    if (!(result2 = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result2 || ++index != length) {
    return result2;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_default(length) && isIndex_default(key, length) && (isArray_default(object) || isArguments_default(object));
}
var hasPath_default = hasPath;

// node_modules/lodash-es/hasIn.js
function hasIn(object, path) {
  return object != null && hasPath_default(object, path, baseHasIn_default);
}
var hasIn_default = hasIn;

// node_modules/lodash-es/_baseMatchesProperty.js
var COMPARE_PARTIAL_FLAG6 = 1;
var COMPARE_UNORDERED_FLAG4 = 2;
function baseMatchesProperty(path, srcValue) {
  if (isKey_default(path) && isStrictComparable_default(srcValue)) {
    return matchesStrictComparable_default(toKey_default(path), srcValue);
  }
  return function(object) {
    var objValue = get_default(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn_default(object, path) : baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG6 | COMPARE_UNORDERED_FLAG4);
  };
}
var baseMatchesProperty_default = baseMatchesProperty;

// node_modules/lodash-es/_baseProperty.js
function baseProperty(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
var baseProperty_default = baseProperty;

// node_modules/lodash-es/_basePropertyDeep.js
function basePropertyDeep(path) {
  return function(object) {
    return baseGet_default(object, path);
  };
}
var basePropertyDeep_default = basePropertyDeep;

// node_modules/lodash-es/property.js
function property(path) {
  return isKey_default(path) ? baseProperty_default(toKey_default(path)) : basePropertyDeep_default(path);
}
var property_default = property;

// node_modules/lodash-es/_baseIteratee.js
function baseIteratee(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity_default;
  }
  if (typeof value == "object") {
    return isArray_default(value) ? baseMatchesProperty_default(value[0], value[1]) : baseMatches_default(value);
  }
  return property_default(value);
}
var baseIteratee_default = baseIteratee;

// node_modules/lodash-es/cond.js
var FUNC_ERROR_TEXT5 = "Expected a function";
function cond(pairs) {
  var length = pairs == null ? 0 : pairs.length, toIteratee = baseIteratee_default;
  pairs = !length ? [] : arrayMap_default(pairs, function(pair) {
    if (typeof pair[1] != "function") {
      throw new TypeError(FUNC_ERROR_TEXT5);
    }
    return [toIteratee(pair[0]), pair[1]];
  });
  return baseRest_default(function(args) {
    var index = -1;
    while (++index < length) {
      var pair = pairs[index];
      if (apply_default(pair[0], this, args)) {
        return apply_default(pair[1], this, args);
      }
    }
  });
}
var cond_default = cond;

// node_modules/lodash-es/_baseConformsTo.js
function baseConformsTo(object, source, props) {
  var length = props.length;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (length--) {
    var key = props[length], predicate = source[key], value = object[key];
    if (value === void 0 && !(key in object) || !predicate(value)) {
      return false;
    }
  }
  return true;
}
var baseConformsTo_default = baseConformsTo;

// node_modules/lodash-es/_baseConforms.js
function baseConforms(source) {
  var props = keys_default(source);
  return function(object) {
    return baseConformsTo_default(object, source, props);
  };
}
var baseConforms_default = baseConforms;

// node_modules/lodash-es/conforms.js
var CLONE_DEEP_FLAG4 = 1;
function conforms(source) {
  return baseConforms_default(baseClone_default(source, CLONE_DEEP_FLAG4));
}
var conforms_default = conforms;

// node_modules/lodash-es/conformsTo.js
function conformsTo(object, source) {
  return source == null || baseConformsTo_default(object, source, keys_default(source));
}
var conformsTo_default = conformsTo;

// node_modules/lodash-es/_arrayAggregator.js
function arrayAggregator(array, setter, iteratee2, accumulator) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee2(value), array);
  }
  return accumulator;
}
var arrayAggregator_default = arrayAggregator;

// node_modules/lodash-es/_createBaseFor.js
function createBaseFor(fromRight) {
  return function(object, iteratee2, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee2(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var createBaseFor_default = createBaseFor;

// node_modules/lodash-es/_baseFor.js
var baseFor = createBaseFor_default();
var baseFor_default = baseFor;

// node_modules/lodash-es/_baseForOwn.js
function baseForOwn(object, iteratee2) {
  return object && baseFor_default(object, iteratee2, keys_default);
}
var baseForOwn_default = baseForOwn;

// node_modules/lodash-es/_createBaseEach.js
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee2) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike_default(collection)) {
      return eachFunc(collection, iteratee2);
    }
    var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index-- : ++index < length) {
      if (iteratee2(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var createBaseEach_default = createBaseEach;

// node_modules/lodash-es/_baseEach.js
var baseEach = createBaseEach_default(baseForOwn_default);
var baseEach_default = baseEach;

// node_modules/lodash-es/_baseAggregator.js
function baseAggregator(collection, setter, iteratee2, accumulator) {
  baseEach_default(collection, function(value, key, collection2) {
    setter(accumulator, value, iteratee2(value), collection2);
  });
  return accumulator;
}
var baseAggregator_default = baseAggregator;

// node_modules/lodash-es/_createAggregator.js
function createAggregator(setter, initializer) {
  return function(collection, iteratee2) {
    var func = isArray_default(collection) ? arrayAggregator_default : baseAggregator_default, accumulator = initializer ? initializer() : {};
    return func(collection, setter, baseIteratee_default(iteratee2, 2), accumulator);
  };
}
var createAggregator_default = createAggregator;

// node_modules/lodash-es/countBy.js
var objectProto20 = Object.prototype;
var hasOwnProperty17 = objectProto20.hasOwnProperty;
var countBy = createAggregator_default(function(result2, value, key) {
  if (hasOwnProperty17.call(result2, key)) {
    ++result2[key];
  } else {
    baseAssignValue_default(result2, key, 1);
  }
});
var countBy_default = countBy;

// node_modules/lodash-es/create.js
function create(prototype, properties) {
  var result2 = baseCreate_default(prototype);
  return properties == null ? result2 : baseAssign_default(result2, properties);
}
var create_default = create;

// node_modules/lodash-es/curry.js
var WRAP_CURRY_FLAG6 = 8;
function curry(func, arity, guard) {
  arity = guard ? void 0 : arity;
  var result2 = createWrap_default(func, WRAP_CURRY_FLAG6, void 0, void 0, void 0, void 0, void 0, arity);
  result2.placeholder = curry.placeholder;
  return result2;
}
curry.placeholder = {};
var curry_default = curry;

// node_modules/lodash-es/curryRight.js
var WRAP_CURRY_RIGHT_FLAG4 = 16;
function curryRight(func, arity, guard) {
  arity = guard ? void 0 : arity;
  var result2 = createWrap_default(func, WRAP_CURRY_RIGHT_FLAG4, void 0, void 0, void 0, void 0, void 0, arity);
  result2.placeholder = curryRight.placeholder;
  return result2;
}
curryRight.placeholder = {};
var curryRight_default = curryRight;

// node_modules/lodash-es/now.js
var now = function() {
  return root_default.Date.now();
};
var now_default = now;

// node_modules/lodash-es/debounce.js
var FUNC_ERROR_TEXT6 = "Expected a function";
var nativeMax6 = Math.max;
var nativeMin4 = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT6);
  }
  wait = toNumber_default(wait) || 0;
  if (isObject_default(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax6(toNumber_default(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result2 = func.apply(thisArg, args);
    return result2;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result2;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin4(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now_default();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result2;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result2 : trailingEdge(now_default());
  }
  function debounced() {
    var time = now_default(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
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
    return result2;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var debounce_default = debounce;

// node_modules/lodash-es/defaultTo.js
function defaultTo(value, defaultValue) {
  return value == null || value !== value ? defaultValue : value;
}
var defaultTo_default = defaultTo;

// node_modules/lodash-es/defaults.js
var objectProto21 = Object.prototype;
var hasOwnProperty18 = objectProto21.hasOwnProperty;
var defaults = baseRest_default(function(object, sources) {
  object = Object(object);
  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : void 0;
  if (guard && isIterateeCall_default(sources[0], sources[1], guard)) {
    length = 1;
  }
  while (++index < length) {
    var source = sources[index];
    var props = keysIn_default(source);
    var propsIndex = -1;
    var propsLength = props.length;
    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];
      if (value === void 0 || eq_default(value, objectProto21[key]) && !hasOwnProperty18.call(object, key)) {
        object[key] = source[key];
      }
    }
  }
  return object;
});
var defaults_default = defaults;

// node_modules/lodash-es/_assignMergeValue.js
function assignMergeValue(object, key, value) {
  if (value !== void 0 && !eq_default(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue_default(object, key, value);
  }
}
var assignMergeValue_default = assignMergeValue;

// node_modules/lodash-es/isArrayLikeObject.js
function isArrayLikeObject(value) {
  return isObjectLike_default(value) && isArrayLike_default(value);
}
var isArrayLikeObject_default = isArrayLikeObject;

// node_modules/lodash-es/_safeGet.js
function safeGet(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
var safeGet_default = safeGet;

// node_modules/lodash-es/toPlainObject.js
function toPlainObject(value) {
  return copyObject_default(value, keysIn_default(value));
}
var toPlainObject_default = toPlainObject;

// node_modules/lodash-es/_baseMergeDeep.js
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet_default(object, key), srcValue = safeGet_default(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue_default(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray_default(srcValue), isBuff = !isArr && isBuffer_default(srcValue), isTyped = !isArr && !isBuff && isTypedArray_default(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray_default(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject_default(objValue)) {
        newValue = copyArray_default(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer_default(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray_default(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject_default(srcValue) || isArguments_default(srcValue)) {
      newValue = objValue;
      if (isArguments_default(objValue)) {
        newValue = toPlainObject_default(objValue);
      } else if (!isObject_default(objValue) || isFunction_default(objValue)) {
        newValue = initCloneObject_default(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue_default(object, key, newValue);
}
var baseMergeDeep_default = baseMergeDeep;

// node_modules/lodash-es/_baseMerge.js
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor_default(source, function(srcValue, key) {
    stack || (stack = new Stack_default());
    if (isObject_default(srcValue)) {
      baseMergeDeep_default(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet_default(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue_default(object, key, newValue);
    }
  }, keysIn_default);
}
var baseMerge_default = baseMerge;

// node_modules/lodash-es/_customDefaultsMerge.js
function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
  if (isObject_default(objValue) && isObject_default(srcValue)) {
    stack.set(srcValue, objValue);
    baseMerge_default(objValue, srcValue, void 0, customDefaultsMerge, stack);
    stack["delete"](srcValue);
  }
  return objValue;
}
var customDefaultsMerge_default = customDefaultsMerge;

// node_modules/lodash-es/mergeWith.js
var mergeWith = createAssigner_default(function(object, source, srcIndex, customizer) {
  baseMerge_default(object, source, srcIndex, customizer);
});
var mergeWith_default = mergeWith;

// node_modules/lodash-es/defaultsDeep.js
var defaultsDeep = baseRest_default(function(args) {
  args.push(void 0, customDefaultsMerge_default);
  return apply_default(mergeWith_default, void 0, args);
});
var defaultsDeep_default = defaultsDeep;

// node_modules/lodash-es/_baseDelay.js
var FUNC_ERROR_TEXT7 = "Expected a function";
function baseDelay(func, wait, args) {
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT7);
  }
  return setTimeout(function() {
    func.apply(void 0, args);
  }, wait);
}
var baseDelay_default = baseDelay;

// node_modules/lodash-es/defer.js
var defer = baseRest_default(function(func, args) {
  return baseDelay_default(func, 1, args);
});
var defer_default = defer;

// node_modules/lodash-es/delay.js
var delay = baseRest_default(function(func, wait, args) {
  return baseDelay_default(func, toNumber_default(wait) || 0, args);
});
var delay_default = delay;

// node_modules/lodash-es/_arrayIncludesWith.js
function arrayIncludesWith(array, value, comparator) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}
var arrayIncludesWith_default = arrayIncludesWith;

// node_modules/lodash-es/_baseDifference.js
var LARGE_ARRAY_SIZE2 = 200;
function baseDifference(array, values2, iteratee2, comparator) {
  var index = -1, includes2 = arrayIncludes_default, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
  if (!length) {
    return result2;
  }
  if (iteratee2) {
    values2 = arrayMap_default(values2, baseUnary_default(iteratee2));
  }
  if (comparator) {
    includes2 = arrayIncludesWith_default;
    isCommon = false;
  } else if (values2.length >= LARGE_ARRAY_SIZE2) {
    includes2 = cacheHas_default;
    isCommon = false;
    values2 = new SetCache_default(values2);
  }
  outer:
    while (++index < length) {
      var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed === computed) {
        var valuesIndex = valuesLength;
        while (valuesIndex--) {
          if (values2[valuesIndex] === computed) {
            continue outer;
          }
        }
        result2.push(value);
      } else if (!includes2(values2, computed, comparator)) {
        result2.push(value);
      }
    }
  return result2;
}
var baseDifference_default = baseDifference;

// node_modules/lodash-es/difference.js
var difference = baseRest_default(function(array, values2) {
  return isArrayLikeObject_default(array) ? baseDifference_default(array, baseFlatten_default(values2, 1, isArrayLikeObject_default, true)) : [];
});
var difference_default = difference;

// node_modules/lodash-es/last.js
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
var last_default = last;

// node_modules/lodash-es/differenceBy.js
var differenceBy = baseRest_default(function(array, values2) {
  var iteratee2 = last_default(values2);
  if (isArrayLikeObject_default(iteratee2)) {
    iteratee2 = void 0;
  }
  return isArrayLikeObject_default(array) ? baseDifference_default(array, baseFlatten_default(values2, 1, isArrayLikeObject_default, true), baseIteratee_default(iteratee2, 2)) : [];
});
var differenceBy_default = differenceBy;

// node_modules/lodash-es/differenceWith.js
var differenceWith = baseRest_default(function(array, values2) {
  var comparator = last_default(values2);
  if (isArrayLikeObject_default(comparator)) {
    comparator = void 0;
  }
  return isArrayLikeObject_default(array) ? baseDifference_default(array, baseFlatten_default(values2, 1, isArrayLikeObject_default, true), void 0, comparator) : [];
});
var differenceWith_default = differenceWith;

// node_modules/lodash-es/divide.js
var divide = createMathOperation_default(function(dividend, divisor) {
  return dividend / divisor;
}, 1);
var divide_default = divide;

// node_modules/lodash-es/drop.js
function drop(array, n5, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n5 = guard || n5 === void 0 ? 1 : toInteger_default(n5);
  return baseSlice_default(array, n5 < 0 ? 0 : n5, length);
}
var drop_default = drop;

// node_modules/lodash-es/dropRight.js
function dropRight(array, n5, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n5 = guard || n5 === void 0 ? 1 : toInteger_default(n5);
  n5 = length - n5;
  return baseSlice_default(array, 0, n5 < 0 ? 0 : n5);
}
var dropRight_default = dropRight;

// node_modules/lodash-es/_baseWhile.js
function baseWhile(array, predicate, isDrop, fromRight) {
  var length = array.length, index = fromRight ? length : -1;
  while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
  }
  return isDrop ? baseSlice_default(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice_default(array, fromRight ? index + 1 : 0, fromRight ? length : index);
}
var baseWhile_default = baseWhile;

// node_modules/lodash-es/dropRightWhile.js
function dropRightWhile(array, predicate) {
  return array && array.length ? baseWhile_default(array, baseIteratee_default(predicate, 3), true, true) : [];
}
var dropRightWhile_default = dropRightWhile;

// node_modules/lodash-es/dropWhile.js
function dropWhile(array, predicate) {
  return array && array.length ? baseWhile_default(array, baseIteratee_default(predicate, 3), true) : [];
}
var dropWhile_default = dropWhile;

// node_modules/lodash-es/_castFunction.js
function castFunction(value) {
  return typeof value == "function" ? value : identity_default;
}
var castFunction_default = castFunction;

// node_modules/lodash-es/forEach.js
function forEach(collection, iteratee2) {
  var func = isArray_default(collection) ? arrayEach_default : baseEach_default;
  return func(collection, castFunction_default(iteratee2));
}
var forEach_default = forEach;

// node_modules/lodash-es/_arrayEachRight.js
function arrayEachRight(array, iteratee2) {
  var length = array == null ? 0 : array.length;
  while (length--) {
    if (iteratee2(array[length], length, array) === false) {
      break;
    }
  }
  return array;
}
var arrayEachRight_default = arrayEachRight;

// node_modules/lodash-es/_baseForRight.js
var baseForRight = createBaseFor_default(true);
var baseForRight_default = baseForRight;

// node_modules/lodash-es/_baseForOwnRight.js
function baseForOwnRight(object, iteratee2) {
  return object && baseForRight_default(object, iteratee2, keys_default);
}
var baseForOwnRight_default = baseForOwnRight;

// node_modules/lodash-es/_baseEachRight.js
var baseEachRight = createBaseEach_default(baseForOwnRight_default, true);
var baseEachRight_default = baseEachRight;

// node_modules/lodash-es/forEachRight.js
function forEachRight(collection, iteratee2) {
  var func = isArray_default(collection) ? arrayEachRight_default : baseEachRight_default;
  return func(collection, castFunction_default(iteratee2));
}
var forEachRight_default = forEachRight;

// node_modules/lodash-es/endsWith.js
function endsWith(string, target, position) {
  string = toString_default(string);
  target = baseToString_default(target);
  var length = string.length;
  position = position === void 0 ? length : baseClamp_default(toInteger_default(position), 0, length);
  var end = position;
  position -= target.length;
  return position >= 0 && string.slice(position, end) == target;
}
var endsWith_default = endsWith;

// node_modules/lodash-es/_baseToPairs.js
function baseToPairs(object, props) {
  return arrayMap_default(props, function(key) {
    return [key, object[key]];
  });
}
var baseToPairs_default = baseToPairs;

// node_modules/lodash-es/_setToPairs.js
function setToPairs(set2) {
  var index = -1, result2 = Array(set2.size);
  set2.forEach(function(value) {
    result2[++index] = [value, value];
  });
  return result2;
}
var setToPairs_default = setToPairs;

// node_modules/lodash-es/_createToPairs.js
var mapTag7 = "[object Map]";
var setTag7 = "[object Set]";
function createToPairs(keysFunc) {
  return function(object) {
    var tag = getTag_default(object);
    if (tag == mapTag7) {
      return mapToArray_default(object);
    }
    if (tag == setTag7) {
      return setToPairs_default(object);
    }
    return baseToPairs_default(object, keysFunc(object));
  };
}
var createToPairs_default = createToPairs;

// node_modules/lodash-es/toPairs.js
var toPairs = createToPairs_default(keys_default);
var toPairs_default = toPairs;

// node_modules/lodash-es/toPairsIn.js
var toPairsIn = createToPairs_default(keysIn_default);
var toPairsIn_default = toPairsIn;

// node_modules/lodash-es/_escapeHtmlChar.js
var htmlEscapes = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var escapeHtmlChar = basePropertyOf_default(htmlEscapes);
var escapeHtmlChar_default = escapeHtmlChar;

// node_modules/lodash-es/escape.js
var reUnescapedHtml = /[&<>"']/g;
var reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
function escape(string) {
  string = toString_default(string);
  return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar_default) : string;
}
var escape_default = escape;

// node_modules/lodash-es/escapeRegExp.js
var reRegExpChar2 = /[\\^$.*+?()[\]{}|]/g;
var reHasRegExpChar = RegExp(reRegExpChar2.source);
function escapeRegExp(string) {
  string = toString_default(string);
  return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar2, "\\$&") : string;
}
var escapeRegExp_default = escapeRegExp;

// node_modules/lodash-es/_arrayEvery.js
function arrayEvery(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (!predicate(array[index], index, array)) {
      return false;
    }
  }
  return true;
}
var arrayEvery_default = arrayEvery;

// node_modules/lodash-es/_baseEvery.js
function baseEvery(collection, predicate) {
  var result2 = true;
  baseEach_default(collection, function(value, index, collection2) {
    result2 = !!predicate(value, index, collection2);
    return result2;
  });
  return result2;
}
var baseEvery_default = baseEvery;

// node_modules/lodash-es/every.js
function every(collection, predicate, guard) {
  var func = isArray_default(collection) ? arrayEvery_default : baseEvery_default;
  if (guard && isIterateeCall_default(collection, predicate, guard)) {
    predicate = void 0;
  }
  return func(collection, baseIteratee_default(predicate, 3));
}
var every_default = every;

// node_modules/lodash-es/toLength.js
var MAX_ARRAY_LENGTH2 = 4294967295;
function toLength(value) {
  return value ? baseClamp_default(toInteger_default(value), 0, MAX_ARRAY_LENGTH2) : 0;
}
var toLength_default = toLength;

// node_modules/lodash-es/_baseFill.js
function baseFill(array, value, start, end) {
  var length = array.length;
  start = toInteger_default(start);
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end === void 0 || end > length ? length : toInteger_default(end);
  if (end < 0) {
    end += length;
  }
  end = start > end ? 0 : toLength_default(end);
  while (start < end) {
    array[start++] = value;
  }
  return array;
}
var baseFill_default = baseFill;

// node_modules/lodash-es/fill.js
function fill(array, value, start, end) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  if (start && typeof start != "number" && isIterateeCall_default(array, value, start)) {
    start = 0;
    end = length;
  }
  return baseFill_default(array, value, start, end);
}
var fill_default = fill;

// node_modules/lodash-es/_baseFilter.js
function baseFilter(collection, predicate) {
  var result2 = [];
  baseEach_default(collection, function(value, index, collection2) {
    if (predicate(value, index, collection2)) {
      result2.push(value);
    }
  });
  return result2;
}
var baseFilter_default = baseFilter;

// node_modules/lodash-es/filter.js
function filter(collection, predicate) {
  var func = isArray_default(collection) ? arrayFilter_default : baseFilter_default;
  return func(collection, baseIteratee_default(predicate, 3));
}
var filter_default = filter;

// node_modules/lodash-es/_createFind.js
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike_default(collection)) {
      var iteratee2 = baseIteratee_default(predicate, 3);
      collection = keys_default(collection);
      predicate = function(key) {
        return iteratee2(iterable[key], key, iterable);
      };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee2 ? collection[index] : index] : void 0;
  };
}
var createFind_default = createFind;

// node_modules/lodash-es/findIndex.js
var nativeMax7 = Math.max;
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger_default(fromIndex);
  if (index < 0) {
    index = nativeMax7(length + index, 0);
  }
  return baseFindIndex_default(array, baseIteratee_default(predicate, 3), index);
}
var findIndex_default = findIndex;

// node_modules/lodash-es/find.js
var find = createFind_default(findIndex_default);
var find_default = find;

// node_modules/lodash-es/_baseFindKey.js
function baseFindKey(collection, predicate, eachFunc) {
  var result2;
  eachFunc(collection, function(value, key, collection2) {
    if (predicate(value, key, collection2)) {
      result2 = key;
      return false;
    }
  });
  return result2;
}
var baseFindKey_default = baseFindKey;

// node_modules/lodash-es/findKey.js
function findKey(object, predicate) {
  return baseFindKey_default(object, baseIteratee_default(predicate, 3), baseForOwn_default);
}
var findKey_default = findKey;

// node_modules/lodash-es/findLastIndex.js
var nativeMax8 = Math.max;
var nativeMin5 = Math.min;
function findLastIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = length - 1;
  if (fromIndex !== void 0) {
    index = toInteger_default(fromIndex);
    index = fromIndex < 0 ? nativeMax8(length + index, 0) : nativeMin5(index, length - 1);
  }
  return baseFindIndex_default(array, baseIteratee_default(predicate, 3), index, true);
}
var findLastIndex_default = findLastIndex;

// node_modules/lodash-es/findLast.js
var findLast = createFind_default(findLastIndex_default);
var findLast_default = findLast;

// node_modules/lodash-es/findLastKey.js
function findLastKey(object, predicate) {
  return baseFindKey_default(object, baseIteratee_default(predicate, 3), baseForOwnRight_default);
}
var findLastKey_default = findLastKey;

// node_modules/lodash-es/head.js
function head(array) {
  return array && array.length ? array[0] : void 0;
}
var head_default = head;

// node_modules/lodash-es/_baseMap.js
function baseMap(collection, iteratee2) {
  var index = -1, result2 = isArrayLike_default(collection) ? Array(collection.length) : [];
  baseEach_default(collection, function(value, key, collection2) {
    result2[++index] = iteratee2(value, key, collection2);
  });
  return result2;
}
var baseMap_default = baseMap;

// node_modules/lodash-es/map.js
function map(collection, iteratee2) {
  var func = isArray_default(collection) ? arrayMap_default : baseMap_default;
  return func(collection, baseIteratee_default(iteratee2, 3));
}
var map_default = map;

// node_modules/lodash-es/flatMap.js
function flatMap(collection, iteratee2) {
  return baseFlatten_default(map_default(collection, iteratee2), 1);
}
var flatMap_default = flatMap;

// node_modules/lodash-es/flatMapDeep.js
var INFINITY4 = 1 / 0;
function flatMapDeep(collection, iteratee2) {
  return baseFlatten_default(map_default(collection, iteratee2), INFINITY4);
}
var flatMapDeep_default = flatMapDeep;

// node_modules/lodash-es/flatMapDepth.js
function flatMapDepth(collection, iteratee2, depth) {
  depth = depth === void 0 ? 1 : toInteger_default(depth);
  return baseFlatten_default(map_default(collection, iteratee2), depth);
}
var flatMapDepth_default = flatMapDepth;

// node_modules/lodash-es/flattenDeep.js
var INFINITY5 = 1 / 0;
function flattenDeep(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten_default(array, INFINITY5) : [];
}
var flattenDeep_default = flattenDeep;

// node_modules/lodash-es/flattenDepth.js
function flattenDepth(array, depth) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  depth = depth === void 0 ? 1 : toInteger_default(depth);
  return baseFlatten_default(array, depth);
}
var flattenDepth_default = flattenDepth;

// node_modules/lodash-es/flip.js
var WRAP_FLIP_FLAG3 = 512;
function flip(func) {
  return createWrap_default(func, WRAP_FLIP_FLAG3);
}
var flip_default = flip;

// node_modules/lodash-es/floor.js
var floor = createRound_default("floor");
var floor_default = floor;

// node_modules/lodash-es/_createFlow.js
var FUNC_ERROR_TEXT8 = "Expected a function";
var WRAP_CURRY_FLAG7 = 8;
var WRAP_PARTIAL_FLAG6 = 32;
var WRAP_ARY_FLAG5 = 128;
var WRAP_REARG_FLAG3 = 256;
function createFlow(fromRight) {
  return flatRest_default(function(funcs) {
    var length = funcs.length, index = length, prereq = LodashWrapper_default.prototype.thru;
    if (fromRight) {
      funcs.reverse();
    }
    while (index--) {
      var func = funcs[index];
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT8);
      }
      if (prereq && !wrapper && getFuncName_default(func) == "wrapper") {
        var wrapper = new LodashWrapper_default([], true);
      }
    }
    index = wrapper ? index : length;
    while (++index < length) {
      func = funcs[index];
      var funcName = getFuncName_default(func), data = funcName == "wrapper" ? getData_default(func) : void 0;
      if (data && isLaziable_default(data[0]) && data[1] == (WRAP_ARY_FLAG5 | WRAP_CURRY_FLAG7 | WRAP_PARTIAL_FLAG6 | WRAP_REARG_FLAG3) && !data[4].length && data[9] == 1) {
        wrapper = wrapper[getFuncName_default(data[0])].apply(wrapper, data[3]);
      } else {
        wrapper = func.length == 1 && isLaziable_default(func) ? wrapper[funcName]() : wrapper.thru(func);
      }
    }
    return function() {
      var args = arguments, value = args[0];
      if (wrapper && args.length == 1 && isArray_default(value)) {
        return wrapper.plant(value).value();
      }
      var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
      while (++index2 < length) {
        result2 = funcs[index2].call(this, result2);
      }
      return result2;
    };
  });
}
var createFlow_default = createFlow;

// node_modules/lodash-es/flow.js
var flow = createFlow_default();
var flow_default = flow;

// node_modules/lodash-es/flowRight.js
var flowRight = createFlow_default(true);
var flowRight_default = flowRight;

// node_modules/lodash-es/forIn.js
function forIn(object, iteratee2) {
  return object == null ? object : baseFor_default(object, castFunction_default(iteratee2), keysIn_default);
}
var forIn_default = forIn;

// node_modules/lodash-es/forInRight.js
function forInRight(object, iteratee2) {
  return object == null ? object : baseForRight_default(object, castFunction_default(iteratee2), keysIn_default);
}
var forInRight_default = forInRight;

// node_modules/lodash-es/forOwn.js
function forOwn(object, iteratee2) {
  return object && baseForOwn_default(object, castFunction_default(iteratee2));
}
var forOwn_default = forOwn;

// node_modules/lodash-es/forOwnRight.js
function forOwnRight(object, iteratee2) {
  return object && baseForOwnRight_default(object, castFunction_default(iteratee2));
}
var forOwnRight_default = forOwnRight;

// node_modules/lodash-es/fromPairs.js
function fromPairs(pairs) {
  var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
  while (++index < length) {
    var pair = pairs[index];
    result2[pair[0]] = pair[1];
  }
  return result2;
}
var fromPairs_default = fromPairs;

// node_modules/lodash-es/_baseFunctions.js
function baseFunctions(object, props) {
  return arrayFilter_default(props, function(key) {
    return isFunction_default(object[key]);
  });
}
var baseFunctions_default = baseFunctions;

// node_modules/lodash-es/functions.js
function functions(object) {
  return object == null ? [] : baseFunctions_default(object, keys_default(object));
}
var functions_default = functions;

// node_modules/lodash-es/functionsIn.js
function functionsIn(object) {
  return object == null ? [] : baseFunctions_default(object, keysIn_default(object));
}
var functionsIn_default = functionsIn;

// node_modules/lodash-es/groupBy.js
var objectProto22 = Object.prototype;
var hasOwnProperty19 = objectProto22.hasOwnProperty;
var groupBy = createAggregator_default(function(result2, value, key) {
  if (hasOwnProperty19.call(result2, key)) {
    result2[key].push(value);
  } else {
    baseAssignValue_default(result2, key, [value]);
  }
});
var groupBy_default = groupBy;

// node_modules/lodash-es/_baseGt.js
function baseGt(value, other) {
  return value > other;
}
var baseGt_default = baseGt;

// node_modules/lodash-es/_createRelationalOperation.js
function createRelationalOperation(operator) {
  return function(value, other) {
    if (!(typeof value == "string" && typeof other == "string")) {
      value = toNumber_default(value);
      other = toNumber_default(other);
    }
    return operator(value, other);
  };
}
var createRelationalOperation_default = createRelationalOperation;

// node_modules/lodash-es/gt.js
var gt = createRelationalOperation_default(baseGt_default);
var gt_default = gt;

// node_modules/lodash-es/gte.js
var gte = createRelationalOperation_default(function(value, other) {
  return value >= other;
});
var gte_default = gte;

// node_modules/lodash-es/_baseHas.js
var objectProto23 = Object.prototype;
var hasOwnProperty20 = objectProto23.hasOwnProperty;
function baseHas(object, key) {
  return object != null && hasOwnProperty20.call(object, key);
}
var baseHas_default = baseHas;

// node_modules/lodash-es/has.js
function has(object, path) {
  return object != null && hasPath_default(object, path, baseHas_default);
}
var has_default = has;

// node_modules/lodash-es/_baseInRange.js
var nativeMax9 = Math.max;
var nativeMin6 = Math.min;
function baseInRange(number, start, end) {
  return number >= nativeMin6(start, end) && number < nativeMax9(start, end);
}
var baseInRange_default = baseInRange;

// node_modules/lodash-es/inRange.js
function inRange(number, start, end) {
  start = toFinite_default(start);
  if (end === void 0) {
    end = start;
    start = 0;
  } else {
    end = toFinite_default(end);
  }
  number = toNumber_default(number);
  return baseInRange_default(number, start, end);
}
var inRange_default = inRange;

// node_modules/lodash-es/isString.js
var stringTag5 = "[object String]";
function isString(value) {
  return typeof value == "string" || !isArray_default(value) && isObjectLike_default(value) && baseGetTag_default(value) == stringTag5;
}
var isString_default = isString;

// node_modules/lodash-es/_baseValues.js
function baseValues(object, props) {
  return arrayMap_default(props, function(key) {
    return object[key];
  });
}
var baseValues_default = baseValues;

// node_modules/lodash-es/values.js
function values(object) {
  return object == null ? [] : baseValues_default(object, keys_default(object));
}
var values_default = values;

// node_modules/lodash-es/includes.js
var nativeMax10 = Math.max;
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike_default(collection) ? collection : values_default(collection);
  fromIndex = fromIndex && !guard ? toInteger_default(fromIndex) : 0;
  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax10(length + fromIndex, 0);
  }
  return isString_default(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf_default(collection, value, fromIndex) > -1;
}
var includes_default = includes;

// node_modules/lodash-es/indexOf.js
var nativeMax11 = Math.max;
function indexOf(array, value, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger_default(fromIndex);
  if (index < 0) {
    index = nativeMax11(length + index, 0);
  }
  return baseIndexOf_default(array, value, index);
}
var indexOf_default = indexOf;

// node_modules/lodash-es/initial.js
function initial(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseSlice_default(array, 0, -1) : [];
}
var initial_default = initial;

// node_modules/lodash-es/_baseIntersection.js
var nativeMin7 = Math.min;
function baseIntersection(arrays, iteratee2, comparator) {
  var includes2 = comparator ? arrayIncludesWith_default : arrayIncludes_default, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array(othLength), maxLength = Infinity, result2 = [];
  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee2) {
      array = arrayMap_default(array, baseUnary_default(iteratee2));
    }
    maxLength = nativeMin7(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache_default(othIndex && array) : void 0;
  }
  array = arrays[0];
  var index = -1, seen = caches[0];
  outer:
    while (++index < length && result2.length < maxLength) {
      var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
      value = comparator || value !== 0 ? value : 0;
      if (!(seen ? cacheHas_default(seen, computed) : includes2(result2, computed, comparator))) {
        othIndex = othLength;
        while (--othIndex) {
          var cache = caches[othIndex];
          if (!(cache ? cacheHas_default(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
            continue outer;
          }
        }
        if (seen) {
          seen.push(computed);
        }
        result2.push(value);
      }
    }
  return result2;
}
var baseIntersection_default = baseIntersection;

// node_modules/lodash-es/_castArrayLikeObject.js
function castArrayLikeObject(value) {
  return isArrayLikeObject_default(value) ? value : [];
}
var castArrayLikeObject_default = castArrayLikeObject;

// node_modules/lodash-es/intersection.js
var intersection = baseRest_default(function(arrays) {
  var mapped = arrayMap_default(arrays, castArrayLikeObject_default);
  return mapped.length && mapped[0] === arrays[0] ? baseIntersection_default(mapped) : [];
});
var intersection_default = intersection;

// node_modules/lodash-es/intersectionBy.js
var intersectionBy = baseRest_default(function(arrays) {
  var iteratee2 = last_default(arrays), mapped = arrayMap_default(arrays, castArrayLikeObject_default);
  if (iteratee2 === last_default(mapped)) {
    iteratee2 = void 0;
  } else {
    mapped.pop();
  }
  return mapped.length && mapped[0] === arrays[0] ? baseIntersection_default(mapped, baseIteratee_default(iteratee2, 2)) : [];
});
var intersectionBy_default = intersectionBy;

// node_modules/lodash-es/intersectionWith.js
var intersectionWith = baseRest_default(function(arrays) {
  var comparator = last_default(arrays), mapped = arrayMap_default(arrays, castArrayLikeObject_default);
  comparator = typeof comparator == "function" ? comparator : void 0;
  if (comparator) {
    mapped.pop();
  }
  return mapped.length && mapped[0] === arrays[0] ? baseIntersection_default(mapped, void 0, comparator) : [];
});
var intersectionWith_default = intersectionWith;

// node_modules/lodash-es/_baseInverter.js
function baseInverter(object, setter, iteratee2, accumulator) {
  baseForOwn_default(object, function(value, key, object2) {
    setter(accumulator, iteratee2(value), key, object2);
  });
  return accumulator;
}
var baseInverter_default = baseInverter;

// node_modules/lodash-es/_createInverter.js
function createInverter(setter, toIteratee) {
  return function(object, iteratee2) {
    return baseInverter_default(object, setter, toIteratee(iteratee2), {});
  };
}
var createInverter_default = createInverter;

// node_modules/lodash-es/invert.js
var objectProto24 = Object.prototype;
var nativeObjectToString3 = objectProto24.toString;
var invert = createInverter_default(function(result2, value, key) {
  if (value != null && typeof value.toString != "function") {
    value = nativeObjectToString3.call(value);
  }
  result2[value] = key;
}, constant_default(identity_default));
var invert_default = invert;

// node_modules/lodash-es/invertBy.js
var objectProto25 = Object.prototype;
var hasOwnProperty21 = objectProto25.hasOwnProperty;
var nativeObjectToString4 = objectProto25.toString;
var invertBy = createInverter_default(function(result2, value, key) {
  if (value != null && typeof value.toString != "function") {
    value = nativeObjectToString4.call(value);
  }
  if (hasOwnProperty21.call(result2, value)) {
    result2[value].push(key);
  } else {
    result2[value] = [key];
  }
}, baseIteratee_default);
var invertBy_default = invertBy;

// node_modules/lodash-es/_parent.js
function parent(object, path) {
  return path.length < 2 ? object : baseGet_default(object, baseSlice_default(path, 0, -1));
}
var parent_default = parent;

// node_modules/lodash-es/_baseInvoke.js
function baseInvoke(object, path, args) {
  path = castPath_default(path, object);
  object = parent_default(object, path);
  var func = object == null ? object : object[toKey_default(last_default(path))];
  return func == null ? void 0 : apply_default(func, object, args);
}
var baseInvoke_default = baseInvoke;

// node_modules/lodash-es/invoke.js
var invoke = baseRest_default(baseInvoke_default);
var invoke_default = invoke;

// node_modules/lodash-es/invokeMap.js
var invokeMap = baseRest_default(function(collection, path, args) {
  var index = -1, isFunc = typeof path == "function", result2 = isArrayLike_default(collection) ? Array(collection.length) : [];
  baseEach_default(collection, function(value) {
    result2[++index] = isFunc ? apply_default(path, value, args) : baseInvoke_default(value, path, args);
  });
  return result2;
});
var invokeMap_default = invokeMap;

// node_modules/lodash-es/_baseIsArrayBuffer.js
var arrayBufferTag5 = "[object ArrayBuffer]";
function baseIsArrayBuffer(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == arrayBufferTag5;
}
var baseIsArrayBuffer_default = baseIsArrayBuffer;

// node_modules/lodash-es/isArrayBuffer.js
var nodeIsArrayBuffer = nodeUtil_default && nodeUtil_default.isArrayBuffer;
var isArrayBuffer = nodeIsArrayBuffer ? baseUnary_default(nodeIsArrayBuffer) : baseIsArrayBuffer_default;
var isArrayBuffer_default = isArrayBuffer;

// node_modules/lodash-es/isBoolean.js
var boolTag5 = "[object Boolean]";
function isBoolean(value) {
  return value === true || value === false || isObjectLike_default(value) && baseGetTag_default(value) == boolTag5;
}
var isBoolean_default = isBoolean;

// node_modules/lodash-es/_baseIsDate.js
var dateTag5 = "[object Date]";
function baseIsDate(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == dateTag5;
}
var baseIsDate_default = baseIsDate;

// node_modules/lodash-es/isDate.js
var nodeIsDate = nodeUtil_default && nodeUtil_default.isDate;
var isDate = nodeIsDate ? baseUnary_default(nodeIsDate) : baseIsDate_default;
var isDate_default = isDate;

// node_modules/lodash-es/isElement.js
function isElement(value) {
  return isObjectLike_default(value) && value.nodeType === 1 && !isPlainObject_default(value);
}
var isElement_default = isElement;

// node_modules/lodash-es/isEmpty.js
var mapTag8 = "[object Map]";
var setTag8 = "[object Set]";
var objectProto26 = Object.prototype;
var hasOwnProperty22 = objectProto26.hasOwnProperty;
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike_default(value) && (isArray_default(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer_default(value) || isTypedArray_default(value) || isArguments_default(value))) {
    return !value.length;
  }
  var tag = getTag_default(value);
  if (tag == mapTag8 || tag == setTag8) {
    return !value.size;
  }
  if (isPrototype_default(value)) {
    return !baseKeys_default(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty22.call(value, key)) {
      return false;
    }
  }
  return true;
}
var isEmpty_default = isEmpty;

// node_modules/lodash-es/isEqual.js
function isEqual(value, other) {
  return baseIsEqual_default(value, other);
}
var isEqual_default = isEqual;

// node_modules/lodash-es/isEqualWith.js
function isEqualWith(value, other, customizer) {
  customizer = typeof customizer == "function" ? customizer : void 0;
  var result2 = customizer ? customizer(value, other) : void 0;
  return result2 === void 0 ? baseIsEqual_default(value, other, void 0, customizer) : !!result2;
}
var isEqualWith_default = isEqualWith;

// node_modules/lodash-es/isFinite.js
var nativeIsFinite2 = root_default.isFinite;
function isFinite(value) {
  return typeof value == "number" && nativeIsFinite2(value);
}
var isFinite_default = isFinite;

// node_modules/lodash-es/isInteger.js
function isInteger(value) {
  return typeof value == "number" && value == toInteger_default(value);
}
var isInteger_default = isInteger;

// node_modules/lodash-es/isMatch.js
function isMatch(object, source) {
  return object === source || baseIsMatch_default(object, source, getMatchData_default(source));
}
var isMatch_default = isMatch;

// node_modules/lodash-es/isMatchWith.js
function isMatchWith(object, source, customizer) {
  customizer = typeof customizer == "function" ? customizer : void 0;
  return baseIsMatch_default(object, source, getMatchData_default(source), customizer);
}
var isMatchWith_default = isMatchWith;

// node_modules/lodash-es/isNumber.js
var numberTag5 = "[object Number]";
function isNumber(value) {
  return typeof value == "number" || isObjectLike_default(value) && baseGetTag_default(value) == numberTag5;
}
var isNumber_default = isNumber;

// node_modules/lodash-es/isNaN.js
function isNaN(value) {
  return isNumber_default(value) && value != +value;
}
var isNaN_default = isNaN;

// node_modules/lodash-es/_isMaskable.js
var isMaskable = coreJsData_default ? isFunction_default : stubFalse_default;
var isMaskable_default = isMaskable;

// node_modules/lodash-es/isNative.js
var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.";
function isNative(value) {
  if (isMaskable_default(value)) {
    throw new Error(CORE_ERROR_TEXT);
  }
  return baseIsNative_default(value);
}
var isNative_default = isNative;

// node_modules/lodash-es/isNil.js
function isNil(value) {
  return value == null;
}
var isNil_default = isNil;

// node_modules/lodash-es/isNull.js
function isNull(value) {
  return value === null;
}
var isNull_default = isNull;

// node_modules/lodash-es/_baseIsRegExp.js
var regexpTag5 = "[object RegExp]";
function baseIsRegExp(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == regexpTag5;
}
var baseIsRegExp_default = baseIsRegExp;

// node_modules/lodash-es/isRegExp.js
var nodeIsRegExp = nodeUtil_default && nodeUtil_default.isRegExp;
var isRegExp = nodeIsRegExp ? baseUnary_default(nodeIsRegExp) : baseIsRegExp_default;
var isRegExp_default = isRegExp;

// node_modules/lodash-es/isSafeInteger.js
var MAX_SAFE_INTEGER3 = 9007199254740991;
function isSafeInteger(value) {
  return isInteger_default(value) && value >= -MAX_SAFE_INTEGER3 && value <= MAX_SAFE_INTEGER3;
}
var isSafeInteger_default = isSafeInteger;

// node_modules/lodash-es/isUndefined.js
function isUndefined(value) {
  return value === void 0;
}
var isUndefined_default = isUndefined;

// node_modules/lodash-es/isWeakMap.js
var weakMapTag4 = "[object WeakMap]";
function isWeakMap(value) {
  return isObjectLike_default(value) && getTag_default(value) == weakMapTag4;
}
var isWeakMap_default = isWeakMap;

// node_modules/lodash-es/isWeakSet.js
var weakSetTag = "[object WeakSet]";
function isWeakSet(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == weakSetTag;
}
var isWeakSet_default = isWeakSet;

// node_modules/lodash-es/iteratee.js
var CLONE_DEEP_FLAG5 = 1;
function iteratee(func) {
  return baseIteratee_default(typeof func == "function" ? func : baseClone_default(func, CLONE_DEEP_FLAG5));
}
var iteratee_default = iteratee;

// node_modules/lodash-es/join.js
var arrayProto2 = Array.prototype;
var nativeJoin = arrayProto2.join;
function join(array, separator) {
  return array == null ? "" : nativeJoin.call(array, separator);
}
var join_default = join;

// node_modules/lodash-es/kebabCase.js
var kebabCase = createCompounder_default(function(result2, word, index) {
  return result2 + (index ? "-" : "") + word.toLowerCase();
});
var kebabCase_default = kebabCase;

// node_modules/lodash-es/keyBy.js
var keyBy = createAggregator_default(function(result2, value, key) {
  baseAssignValue_default(result2, key, value);
});
var keyBy_default = keyBy;

// node_modules/lodash-es/_strictLastIndexOf.js
function strictLastIndexOf(array, value, fromIndex) {
  var index = fromIndex + 1;
  while (index--) {
    if (array[index] === value) {
      return index;
    }
  }
  return index;
}
var strictLastIndexOf_default = strictLastIndexOf;

// node_modules/lodash-es/lastIndexOf.js
var nativeMax12 = Math.max;
var nativeMin8 = Math.min;
function lastIndexOf(array, value, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = length;
  if (fromIndex !== void 0) {
    index = toInteger_default(fromIndex);
    index = index < 0 ? nativeMax12(length + index, 0) : nativeMin8(index, length - 1);
  }
  return value === value ? strictLastIndexOf_default(array, value, index) : baseFindIndex_default(array, baseIsNaN_default, index, true);
}
var lastIndexOf_default = lastIndexOf;

// node_modules/lodash-es/lowerCase.js
var lowerCase = createCompounder_default(function(result2, word, index) {
  return result2 + (index ? " " : "") + word.toLowerCase();
});
var lowerCase_default = lowerCase;

// node_modules/lodash-es/lowerFirst.js
var lowerFirst = createCaseFirst_default("toLowerCase");
var lowerFirst_default = lowerFirst;

// node_modules/lodash-es/_baseLt.js
function baseLt(value, other) {
  return value < other;
}
var baseLt_default = baseLt;

// node_modules/lodash-es/lt.js
var lt = createRelationalOperation_default(baseLt_default);
var lt_default = lt;

// node_modules/lodash-es/lte.js
var lte = createRelationalOperation_default(function(value, other) {
  return value <= other;
});
var lte_default = lte;

// node_modules/lodash-es/mapKeys.js
function mapKeys(object, iteratee2) {
  var result2 = {};
  iteratee2 = baseIteratee_default(iteratee2, 3);
  baseForOwn_default(object, function(value, key, object2) {
    baseAssignValue_default(result2, iteratee2(value, key, object2), value);
  });
  return result2;
}
var mapKeys_default = mapKeys;

// node_modules/lodash-es/mapValues.js
function mapValues(object, iteratee2) {
  var result2 = {};
  iteratee2 = baseIteratee_default(iteratee2, 3);
  baseForOwn_default(object, function(value, key, object2) {
    baseAssignValue_default(result2, key, iteratee2(value, key, object2));
  });
  return result2;
}
var mapValues_default = mapValues;

// node_modules/lodash-es/matches.js
var CLONE_DEEP_FLAG6 = 1;
function matches(source) {
  return baseMatches_default(baseClone_default(source, CLONE_DEEP_FLAG6));
}
var matches_default = matches;

// node_modules/lodash-es/matchesProperty.js
var CLONE_DEEP_FLAG7 = 1;
function matchesProperty(path, srcValue) {
  return baseMatchesProperty_default(path, baseClone_default(srcValue, CLONE_DEEP_FLAG7));
}
var matchesProperty_default = matchesProperty;

// node_modules/lodash-es/_baseExtremum.js
function baseExtremum(array, iteratee2, comparator) {
  var index = -1, length = array.length;
  while (++index < length) {
    var value = array[index], current = iteratee2(value);
    if (current != null && (computed === void 0 ? current === current && !isSymbol_default(current) : comparator(current, computed))) {
      var computed = current, result2 = value;
    }
  }
  return result2;
}
var baseExtremum_default = baseExtremum;

// node_modules/lodash-es/max.js
function max(array) {
  return array && array.length ? baseExtremum_default(array, identity_default, baseGt_default) : void 0;
}
var max_default = max;

// node_modules/lodash-es/maxBy.js
function maxBy(array, iteratee2) {
  return array && array.length ? baseExtremum_default(array, baseIteratee_default(iteratee2, 2), baseGt_default) : void 0;
}
var maxBy_default = maxBy;

// node_modules/lodash-es/_baseSum.js
function baseSum(array, iteratee2) {
  var result2, index = -1, length = array.length;
  while (++index < length) {
    var current = iteratee2(array[index]);
    if (current !== void 0) {
      result2 = result2 === void 0 ? current : result2 + current;
    }
  }
  return result2;
}
var baseSum_default = baseSum;

// node_modules/lodash-es/_baseMean.js
var NAN3 = 0 / 0;
function baseMean(array, iteratee2) {
  var length = array == null ? 0 : array.length;
  return length ? baseSum_default(array, iteratee2) / length : NAN3;
}
var baseMean_default = baseMean;

// node_modules/lodash-es/mean.js
function mean(array) {
  return baseMean_default(array, identity_default);
}
var mean_default = mean;

// node_modules/lodash-es/meanBy.js
function meanBy(array, iteratee2) {
  return baseMean_default(array, baseIteratee_default(iteratee2, 2));
}
var meanBy_default = meanBy;

// node_modules/lodash-es/merge.js
var merge = createAssigner_default(function(object, source, srcIndex) {
  baseMerge_default(object, source, srcIndex);
});
var merge_default = merge;

// node_modules/lodash-es/method.js
var method = baseRest_default(function(path, args) {
  return function(object) {
    return baseInvoke_default(object, path, args);
  };
});
var method_default = method;

// node_modules/lodash-es/methodOf.js
var methodOf = baseRest_default(function(object, args) {
  return function(path) {
    return baseInvoke_default(object, path, args);
  };
});
var methodOf_default = methodOf;

// node_modules/lodash-es/min.js
function min(array) {
  return array && array.length ? baseExtremum_default(array, identity_default, baseLt_default) : void 0;
}
var min_default = min;

// node_modules/lodash-es/minBy.js
function minBy(array, iteratee2) {
  return array && array.length ? baseExtremum_default(array, baseIteratee_default(iteratee2, 2), baseLt_default) : void 0;
}
var minBy_default = minBy;

// node_modules/lodash-es/mixin.js
function mixin(object, source, options) {
  var props = keys_default(source), methodNames = baseFunctions_default(source, props);
  var chain2 = !(isObject_default(options) && "chain" in options) || !!options.chain, isFunc = isFunction_default(object);
  arrayEach_default(methodNames, function(methodName) {
    var func = source[methodName];
    object[methodName] = func;
    if (isFunc) {
      object.prototype[methodName] = function() {
        var chainAll = this.__chain__;
        if (chain2 || chainAll) {
          var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray_default(this.__actions__);
          actions.push({ "func": func, "args": arguments, "thisArg": object });
          result2.__chain__ = chainAll;
          return result2;
        }
        return func.apply(object, arrayPush_default([this.value()], arguments));
      };
    }
  });
  return object;
}
var mixin_default = mixin;

// node_modules/lodash-es/multiply.js
var multiply = createMathOperation_default(function(multiplier, multiplicand) {
  return multiplier * multiplicand;
}, 1);
var multiply_default = multiply;

// node_modules/lodash-es/negate.js
var FUNC_ERROR_TEXT9 = "Expected a function";
function negate(predicate) {
  if (typeof predicate != "function") {
    throw new TypeError(FUNC_ERROR_TEXT9);
  }
  return function() {
    var args = arguments;
    switch (args.length) {
      case 0:
        return !predicate.call(this);
      case 1:
        return !predicate.call(this, args[0]);
      case 2:
        return !predicate.call(this, args[0], args[1]);
      case 3:
        return !predicate.call(this, args[0], args[1], args[2]);
    }
    return !predicate.apply(this, args);
  };
}
var negate_default = negate;

// node_modules/lodash-es/_iteratorToArray.js
function iteratorToArray(iterator) {
  var data, result2 = [];
  while (!(data = iterator.next()).done) {
    result2.push(data.value);
  }
  return result2;
}
var iteratorToArray_default = iteratorToArray;

// node_modules/lodash-es/toArray.js
var mapTag9 = "[object Map]";
var setTag9 = "[object Set]";
var symIterator = Symbol_default ? Symbol_default.iterator : void 0;
function toArray(value) {
  if (!value) {
    return [];
  }
  if (isArrayLike_default(value)) {
    return isString_default(value) ? stringToArray_default(value) : copyArray_default(value);
  }
  if (symIterator && value[symIterator]) {
    return iteratorToArray_default(value[symIterator]());
  }
  var tag = getTag_default(value), func = tag == mapTag9 ? mapToArray_default : tag == setTag9 ? setToArray_default : values_default;
  return func(value);
}
var toArray_default = toArray;

// node_modules/lodash-es/next.js
function wrapperNext() {
  if (this.__values__ === void 0) {
    this.__values__ = toArray_default(this.value());
  }
  var done = this.__index__ >= this.__values__.length, value = done ? void 0 : this.__values__[this.__index__++];
  return { "done": done, "value": value };
}
var next_default = wrapperNext;

// node_modules/lodash-es/_baseNth.js
function baseNth(array, n5) {
  var length = array.length;
  if (!length) {
    return;
  }
  n5 += n5 < 0 ? length : 0;
  return isIndex_default(n5, length) ? array[n5] : void 0;
}
var baseNth_default = baseNth;

// node_modules/lodash-es/nth.js
function nth(array, n5) {
  return array && array.length ? baseNth_default(array, toInteger_default(n5)) : void 0;
}
var nth_default = nth;

// node_modules/lodash-es/nthArg.js
function nthArg(n5) {
  n5 = toInteger_default(n5);
  return baseRest_default(function(args) {
    return baseNth_default(args, n5);
  });
}
var nthArg_default = nthArg;

// node_modules/lodash-es/_baseUnset.js
function baseUnset(object, path) {
  path = castPath_default(path, object);
  object = parent_default(object, path);
  return object == null || delete object[toKey_default(last_default(path))];
}
var baseUnset_default = baseUnset;

// node_modules/lodash-es/_customOmitClone.js
function customOmitClone(value) {
  return isPlainObject_default(value) ? void 0 : value;
}
var customOmitClone_default = customOmitClone;

// node_modules/lodash-es/omit.js
var CLONE_DEEP_FLAG8 = 1;
var CLONE_FLAT_FLAG2 = 2;
var CLONE_SYMBOLS_FLAG6 = 4;
var omit = flatRest_default(function(object, paths) {
  var result2 = {};
  if (object == null) {
    return result2;
  }
  var isDeep = false;
  paths = arrayMap_default(paths, function(path) {
    path = castPath_default(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject_default(object, getAllKeysIn_default(object), result2);
  if (isDeep) {
    result2 = baseClone_default(result2, CLONE_DEEP_FLAG8 | CLONE_FLAT_FLAG2 | CLONE_SYMBOLS_FLAG6, customOmitClone_default);
  }
  var length = paths.length;
  while (length--) {
    baseUnset_default(result2, paths[length]);
  }
  return result2;
});
var omit_default = omit;

// node_modules/lodash-es/_baseSet.js
function baseSet(object, path, value, customizer) {
  if (!isObject_default(object)) {
    return object;
  }
  path = castPath_default(path, object);
  var index = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index < length) {
    var key = toKey_default(path[index]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject_default(objValue) ? objValue : isIndex_default(path[index + 1]) ? [] : {};
      }
    }
    assignValue_default(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
var baseSet_default = baseSet;

// node_modules/lodash-es/_basePickBy.js
function basePickBy(object, paths, predicate) {
  var index = -1, length = paths.length, result2 = {};
  while (++index < length) {
    var path = paths[index], value = baseGet_default(object, path);
    if (predicate(value, path)) {
      baseSet_default(result2, castPath_default(path, object), value);
    }
  }
  return result2;
}
var basePickBy_default = basePickBy;

// node_modules/lodash-es/pickBy.js
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap_default(getAllKeysIn_default(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee_default(predicate);
  return basePickBy_default(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}
var pickBy_default = pickBy;

// node_modules/lodash-es/omitBy.js
function omitBy(object, predicate) {
  return pickBy_default(object, negate_default(baseIteratee_default(predicate)));
}
var omitBy_default = omitBy;

// node_modules/lodash-es/once.js
function once(func) {
  return before_default(2, func);
}
var once_default = once;

// node_modules/lodash-es/_baseSortBy.js
function baseSortBy(array, comparer) {
  var length = array.length;
  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}
var baseSortBy_default = baseSortBy;

// node_modules/lodash-es/_compareAscending.js
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== void 0, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol_default(value);
    var othIsDefined = other !== void 0, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol_default(other);
    if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
      return 1;
    }
    if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}
var compareAscending_default = compareAscending;

// node_modules/lodash-es/_compareMultiple.js
function compareMultiple(object, other, orders) {
  var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
  while (++index < length) {
    var result2 = compareAscending_default(objCriteria[index], othCriteria[index]);
    if (result2) {
      if (index >= ordersLength) {
        return result2;
      }
      var order = orders[index];
      return result2 * (order == "desc" ? -1 : 1);
    }
  }
  return object.index - other.index;
}
var compareMultiple_default = compareMultiple;

// node_modules/lodash-es/_baseOrderBy.js
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap_default(iteratees, function(iteratee2) {
      if (isArray_default(iteratee2)) {
        return function(value) {
          return baseGet_default(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
        };
      }
      return iteratee2;
    });
  } else {
    iteratees = [identity_default];
  }
  var index = -1;
  iteratees = arrayMap_default(iteratees, baseUnary_default(baseIteratee_default));
  var result2 = baseMap_default(collection, function(value, key, collection2) {
    var criteria = arrayMap_default(iteratees, function(iteratee2) {
      return iteratee2(value);
    });
    return { "criteria": criteria, "index": ++index, "value": value };
  });
  return baseSortBy_default(result2, function(object, other) {
    return compareMultiple_default(object, other, orders);
  });
}
var baseOrderBy_default = baseOrderBy;

// node_modules/lodash-es/orderBy.js
function orderBy(collection, iteratees, orders, guard) {
  if (collection == null) {
    return [];
  }
  if (!isArray_default(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }
  orders = guard ? void 0 : orders;
  if (!isArray_default(orders)) {
    orders = orders == null ? [] : [orders];
  }
  return baseOrderBy_default(collection, iteratees, orders);
}
var orderBy_default = orderBy;

// node_modules/lodash-es/_createOver.js
function createOver(arrayFunc) {
  return flatRest_default(function(iteratees) {
    iteratees = arrayMap_default(iteratees, baseUnary_default(baseIteratee_default));
    return baseRest_default(function(args) {
      var thisArg = this;
      return arrayFunc(iteratees, function(iteratee2) {
        return apply_default(iteratee2, thisArg, args);
      });
    });
  });
}
var createOver_default = createOver;

// node_modules/lodash-es/over.js
var over = createOver_default(arrayMap_default);
var over_default = over;

// node_modules/lodash-es/_castRest.js
var castRest = baseRest_default;
var castRest_default = castRest;

// node_modules/lodash-es/overArgs.js
var nativeMin9 = Math.min;
var overArgs = castRest_default(function(func, transforms) {
  transforms = transforms.length == 1 && isArray_default(transforms[0]) ? arrayMap_default(transforms[0], baseUnary_default(baseIteratee_default)) : arrayMap_default(baseFlatten_default(transforms, 1), baseUnary_default(baseIteratee_default));
  var funcsLength = transforms.length;
  return baseRest_default(function(args) {
    var index = -1, length = nativeMin9(args.length, funcsLength);
    while (++index < length) {
      args[index] = transforms[index].call(this, args[index]);
    }
    return apply_default(func, this, args);
  });
});
var overArgs_default = overArgs;

// node_modules/lodash-es/overEvery.js
var overEvery = createOver_default(arrayEvery_default);
var overEvery_default = overEvery;

// node_modules/lodash-es/overSome.js
var overSome = createOver_default(arraySome_default);
var overSome_default = overSome;

// node_modules/lodash-es/_baseRepeat.js
var MAX_SAFE_INTEGER4 = 9007199254740991;
var nativeFloor = Math.floor;
function baseRepeat(string, n5) {
  var result2 = "";
  if (!string || n5 < 1 || n5 > MAX_SAFE_INTEGER4) {
    return result2;
  }
  do {
    if (n5 % 2) {
      result2 += string;
    }
    n5 = nativeFloor(n5 / 2);
    if (n5) {
      string += string;
    }
  } while (n5);
  return result2;
}
var baseRepeat_default = baseRepeat;

// node_modules/lodash-es/_asciiSize.js
var asciiSize = baseProperty_default("length");
var asciiSize_default = asciiSize;

// node_modules/lodash-es/_unicodeSize.js
var rsAstralRange4 = "\\ud800-\\udfff";
var rsComboMarksRange5 = "\\u0300-\\u036f";
var reComboHalfMarksRange5 = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange5 = "\\u20d0-\\u20ff";
var rsComboRange5 = rsComboMarksRange5 + reComboHalfMarksRange5 + rsComboSymbolsRange5;
var rsVarRange4 = "\\ufe0e\\ufe0f";
var rsAstral2 = "[" + rsAstralRange4 + "]";
var rsCombo4 = "[" + rsComboRange5 + "]";
var rsFitz3 = "\\ud83c[\\udffb-\\udfff]";
var rsModifier3 = "(?:" + rsCombo4 + "|" + rsFitz3 + ")";
var rsNonAstral3 = "[^" + rsAstralRange4 + "]";
var rsRegional3 = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var rsSurrPair3 = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var rsZWJ4 = "\\u200d";
var reOptMod3 = rsModifier3 + "?";
var rsOptVar3 = "[" + rsVarRange4 + "]?";
var rsOptJoin3 = "(?:" + rsZWJ4 + "(?:" + [rsNonAstral3, rsRegional3, rsSurrPair3].join("|") + ")" + rsOptVar3 + reOptMod3 + ")*";
var rsSeq3 = rsOptVar3 + reOptMod3 + rsOptJoin3;
var rsSymbol2 = "(?:" + [rsNonAstral3 + rsCombo4 + "?", rsCombo4, rsRegional3, rsSurrPair3, rsAstral2].join("|") + ")";
var reUnicode2 = RegExp(rsFitz3 + "(?=" + rsFitz3 + ")|" + rsSymbol2 + rsSeq3, "g");
function unicodeSize(string) {
  var result2 = reUnicode2.lastIndex = 0;
  while (reUnicode2.test(string)) {
    ++result2;
  }
  return result2;
}
var unicodeSize_default = unicodeSize;

// node_modules/lodash-es/_stringSize.js
function stringSize(string) {
  return hasUnicode_default(string) ? unicodeSize_default(string) : asciiSize_default(string);
}
var stringSize_default = stringSize;

// node_modules/lodash-es/_createPadding.js
var nativeCeil2 = Math.ceil;
function createPadding(length, chars) {
  chars = chars === void 0 ? " " : baseToString_default(chars);
  var charsLength = chars.length;
  if (charsLength < 2) {
    return charsLength ? baseRepeat_default(chars, length) : chars;
  }
  var result2 = baseRepeat_default(chars, nativeCeil2(length / stringSize_default(chars)));
  return hasUnicode_default(chars) ? castSlice_default(stringToArray_default(result2), 0, length).join("") : result2.slice(0, length);
}
var createPadding_default = createPadding;

// node_modules/lodash-es/pad.js
var nativeCeil3 = Math.ceil;
var nativeFloor2 = Math.floor;
function pad(string, length, chars) {
  string = toString_default(string);
  length = toInteger_default(length);
  var strLength = length ? stringSize_default(string) : 0;
  if (!length || strLength >= length) {
    return string;
  }
  var mid = (length - strLength) / 2;
  return createPadding_default(nativeFloor2(mid), chars) + string + createPadding_default(nativeCeil3(mid), chars);
}
var pad_default = pad;

// node_modules/lodash-es/padEnd.js
function padEnd(string, length, chars) {
  string = toString_default(string);
  length = toInteger_default(length);
  var strLength = length ? stringSize_default(string) : 0;
  return length && strLength < length ? string + createPadding_default(length - strLength, chars) : string;
}
var padEnd_default = padEnd;

// node_modules/lodash-es/padStart.js
function padStart(string, length, chars) {
  string = toString_default(string);
  length = toInteger_default(length);
  var strLength = length ? stringSize_default(string) : 0;
  return length && strLength < length ? createPadding_default(length - strLength, chars) + string : string;
}
var padStart_default = padStart;

// node_modules/lodash-es/parseInt.js
var reTrimStart2 = /^\s+/;
var nativeParseInt = root_default.parseInt;
function parseInt2(string, radix, guard) {
  if (guard || radix == null) {
    radix = 0;
  } else if (radix) {
    radix = +radix;
  }
  return nativeParseInt(toString_default(string).replace(reTrimStart2, ""), radix || 0);
}
var parseInt_default = parseInt2;

// node_modules/lodash-es/partial.js
var WRAP_PARTIAL_FLAG7 = 32;
var partial = baseRest_default(function(func, partials) {
  var holders = replaceHolders_default(partials, getHolder_default(partial));
  return createWrap_default(func, WRAP_PARTIAL_FLAG7, void 0, partials, holders);
});
partial.placeholder = {};
var partial_default = partial;

// node_modules/lodash-es/partialRight.js
var WRAP_PARTIAL_RIGHT_FLAG4 = 64;
var partialRight = baseRest_default(function(func, partials) {
  var holders = replaceHolders_default(partials, getHolder_default(partialRight));
  return createWrap_default(func, WRAP_PARTIAL_RIGHT_FLAG4, void 0, partials, holders);
});
partialRight.placeholder = {};
var partialRight_default = partialRight;

// node_modules/lodash-es/partition.js
var partition = createAggregator_default(function(result2, value, key) {
  result2[key ? 0 : 1].push(value);
}, function() {
  return [[], []];
});
var partition_default = partition;

// node_modules/lodash-es/_basePick.js
function basePick(object, paths) {
  return basePickBy_default(object, paths, function(value, path) {
    return hasIn_default(object, path);
  });
}
var basePick_default = basePick;

// node_modules/lodash-es/pick.js
var pick = flatRest_default(function(object, paths) {
  return object == null ? {} : basePick_default(object, paths);
});
var pick_default = pick;

// node_modules/lodash-es/plant.js
function wrapperPlant(value) {
  var result2, parent2 = this;
  while (parent2 instanceof baseLodash_default) {
    var clone3 = wrapperClone_default(parent2);
    clone3.__index__ = 0;
    clone3.__values__ = void 0;
    if (result2) {
      previous.__wrapped__ = clone3;
    } else {
      result2 = clone3;
    }
    var previous = clone3;
    parent2 = parent2.__wrapped__;
  }
  previous.__wrapped__ = value;
  return result2;
}
var plant_default = wrapperPlant;

// node_modules/lodash-es/propertyOf.js
function propertyOf(object) {
  return function(path) {
    return object == null ? void 0 : baseGet_default(object, path);
  };
}
var propertyOf_default = propertyOf;

// node_modules/lodash-es/_baseIndexOfWith.js
function baseIndexOfWith(array, value, fromIndex, comparator) {
  var index = fromIndex - 1, length = array.length;
  while (++index < length) {
    if (comparator(array[index], value)) {
      return index;
    }
  }
  return -1;
}
var baseIndexOfWith_default = baseIndexOfWith;

// node_modules/lodash-es/_basePullAll.js
var arrayProto3 = Array.prototype;
var splice2 = arrayProto3.splice;
function basePullAll(array, values2, iteratee2, comparator) {
  var indexOf2 = comparator ? baseIndexOfWith_default : baseIndexOf_default, index = -1, length = values2.length, seen = array;
  if (array === values2) {
    values2 = copyArray_default(values2);
  }
  if (iteratee2) {
    seen = arrayMap_default(array, baseUnary_default(iteratee2));
  }
  while (++index < length) {
    var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
    while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
      if (seen !== array) {
        splice2.call(seen, fromIndex, 1);
      }
      splice2.call(array, fromIndex, 1);
    }
  }
  return array;
}
var basePullAll_default = basePullAll;

// node_modules/lodash-es/pullAll.js
function pullAll(array, values2) {
  return array && array.length && values2 && values2.length ? basePullAll_default(array, values2) : array;
}
var pullAll_default = pullAll;

// node_modules/lodash-es/pull.js
var pull = baseRest_default(pullAll_default);
var pull_default = pull;

// node_modules/lodash-es/pullAllBy.js
function pullAllBy(array, values2, iteratee2) {
  return array && array.length && values2 && values2.length ? basePullAll_default(array, values2, baseIteratee_default(iteratee2, 2)) : array;
}
var pullAllBy_default = pullAllBy;

// node_modules/lodash-es/pullAllWith.js
function pullAllWith(array, values2, comparator) {
  return array && array.length && values2 && values2.length ? basePullAll_default(array, values2, void 0, comparator) : array;
}
var pullAllWith_default = pullAllWith;

// node_modules/lodash-es/_basePullAt.js
var arrayProto4 = Array.prototype;
var splice3 = arrayProto4.splice;
function basePullAt(array, indexes) {
  var length = array ? indexes.length : 0, lastIndex = length - 1;
  while (length--) {
    var index = indexes[length];
    if (length == lastIndex || index !== previous) {
      var previous = index;
      if (isIndex_default(index)) {
        splice3.call(array, index, 1);
      } else {
        baseUnset_default(array, index);
      }
    }
  }
  return array;
}
var basePullAt_default = basePullAt;

// node_modules/lodash-es/pullAt.js
var pullAt = flatRest_default(function(array, indexes) {
  var length = array == null ? 0 : array.length, result2 = baseAt_default(array, indexes);
  basePullAt_default(array, arrayMap_default(indexes, function(index) {
    return isIndex_default(index, length) ? +index : index;
  }).sort(compareAscending_default));
  return result2;
});
var pullAt_default = pullAt;

// node_modules/lodash-es/_baseRandom.js
var nativeFloor3 = Math.floor;
var nativeRandom = Math.random;
function baseRandom(lower, upper) {
  return lower + nativeFloor3(nativeRandom() * (upper - lower + 1));
}
var baseRandom_default = baseRandom;

// node_modules/lodash-es/random.js
var freeParseFloat = parseFloat;
var nativeMin10 = Math.min;
var nativeRandom2 = Math.random;
function random(lower, upper, floating) {
  if (floating && typeof floating != "boolean" && isIterateeCall_default(lower, upper, floating)) {
    upper = floating = void 0;
  }
  if (floating === void 0) {
    if (typeof upper == "boolean") {
      floating = upper;
      upper = void 0;
    } else if (typeof lower == "boolean") {
      floating = lower;
      lower = void 0;
    }
  }
  if (lower === void 0 && upper === void 0) {
    lower = 0;
    upper = 1;
  } else {
    lower = toFinite_default(lower);
    if (upper === void 0) {
      upper = lower;
      lower = 0;
    } else {
      upper = toFinite_default(upper);
    }
  }
  if (lower > upper) {
    var temp = lower;
    lower = upper;
    upper = temp;
  }
  if (floating || lower % 1 || upper % 1) {
    var rand = nativeRandom2();
    return nativeMin10(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
  }
  return baseRandom_default(lower, upper);
}
var random_default = random;

// node_modules/lodash-es/_baseRange.js
var nativeCeil4 = Math.ceil;
var nativeMax13 = Math.max;
function baseRange(start, end, step, fromRight) {
  var index = -1, length = nativeMax13(nativeCeil4((end - start) / (step || 1)), 0), result2 = Array(length);
  while (length--) {
    result2[fromRight ? length : ++index] = start;
    start += step;
  }
  return result2;
}
var baseRange_default = baseRange;

// node_modules/lodash-es/_createRange.js
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != "number" && isIterateeCall_default(start, end, step)) {
      end = step = void 0;
    }
    start = toFinite_default(start);
    if (end === void 0) {
      end = start;
      start = 0;
    } else {
      end = toFinite_default(end);
    }
    step = step === void 0 ? start < end ? 1 : -1 : toFinite_default(step);
    return baseRange_default(start, end, step, fromRight);
  };
}
var createRange_default = createRange;

// node_modules/lodash-es/range.js
var range = createRange_default();
var range_default = range;

// node_modules/lodash-es/rangeRight.js
var rangeRight = createRange_default(true);
var rangeRight_default = rangeRight;

// node_modules/lodash-es/rearg.js
var WRAP_REARG_FLAG4 = 256;
var rearg = flatRest_default(function(func, indexes) {
  return createWrap_default(func, WRAP_REARG_FLAG4, void 0, void 0, void 0, indexes);
});
var rearg_default = rearg;

// node_modules/lodash-es/_baseReduce.js
function baseReduce(collection, iteratee2, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection2) {
    accumulator = initAccum ? (initAccum = false, value) : iteratee2(accumulator, value, index, collection2);
  });
  return accumulator;
}
var baseReduce_default = baseReduce;

// node_modules/lodash-es/reduce.js
function reduce(collection, iteratee2, accumulator) {
  var func = isArray_default(collection) ? arrayReduce_default : baseReduce_default, initAccum = arguments.length < 3;
  return func(collection, baseIteratee_default(iteratee2, 4), accumulator, initAccum, baseEach_default);
}
var reduce_default = reduce;

// node_modules/lodash-es/_arrayReduceRight.js
function arrayReduceRight(array, iteratee2, accumulator, initAccum) {
  var length = array == null ? 0 : array.length;
  if (initAccum && length) {
    accumulator = array[--length];
  }
  while (length--) {
    accumulator = iteratee2(accumulator, array[length], length, array);
  }
  return accumulator;
}
var arrayReduceRight_default = arrayReduceRight;

// node_modules/lodash-es/reduceRight.js
function reduceRight(collection, iteratee2, accumulator) {
  var func = isArray_default(collection) ? arrayReduceRight_default : baseReduce_default, initAccum = arguments.length < 3;
  return func(collection, baseIteratee_default(iteratee2, 4), accumulator, initAccum, baseEachRight_default);
}
var reduceRight_default = reduceRight;

// node_modules/lodash-es/reject.js
function reject(collection, predicate) {
  var func = isArray_default(collection) ? arrayFilter_default : baseFilter_default;
  return func(collection, negate_default(baseIteratee_default(predicate, 3)));
}
var reject_default = reject;

// node_modules/lodash-es/remove.js
function remove(array, predicate) {
  var result2 = [];
  if (!(array && array.length)) {
    return result2;
  }
  var index = -1, indexes = [], length = array.length;
  predicate = baseIteratee_default(predicate, 3);
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result2.push(value);
      indexes.push(index);
    }
  }
  basePullAt_default(array, indexes);
  return result2;
}
var remove_default = remove;

// node_modules/lodash-es/repeat.js
function repeat(string, n5, guard) {
  if (guard ? isIterateeCall_default(string, n5, guard) : n5 === void 0) {
    n5 = 1;
  } else {
    n5 = toInteger_default(n5);
  }
  return baseRepeat_default(toString_default(string), n5);
}
var repeat_default = repeat;

// node_modules/lodash-es/replace.js
function replace() {
  var args = arguments, string = toString_default(args[0]);
  return args.length < 3 ? string : string.replace(args[1], args[2]);
}
var replace_default = replace;

// node_modules/lodash-es/rest.js
var FUNC_ERROR_TEXT10 = "Expected a function";
function rest(func, start) {
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT10);
  }
  start = start === void 0 ? start : toInteger_default(start);
  return baseRest_default(func, start);
}
var rest_default = rest;

// node_modules/lodash-es/result.js
function result(object, path, defaultValue) {
  path = castPath_default(path, object);
  var index = -1, length = path.length;
  if (!length) {
    length = 1;
    object = void 0;
  }
  while (++index < length) {
    var value = object == null ? void 0 : object[toKey_default(path[index])];
    if (value === void 0) {
      index = length;
      value = defaultValue;
    }
    object = isFunction_default(value) ? value.call(object) : value;
  }
  return object;
}
var result_default = result;

// node_modules/lodash-es/reverse.js
var arrayProto5 = Array.prototype;
var nativeReverse = arrayProto5.reverse;
function reverse(array) {
  return array == null ? array : nativeReverse.call(array);
}
var reverse_default = reverse;

// node_modules/lodash-es/round.js
var round = createRound_default("round");
var round_default = round;

// node_modules/lodash-es/_arraySample.js
function arraySample(array) {
  var length = array.length;
  return length ? array[baseRandom_default(0, length - 1)] : void 0;
}
var arraySample_default = arraySample;

// node_modules/lodash-es/_baseSample.js
function baseSample(collection) {
  return arraySample_default(values_default(collection));
}
var baseSample_default = baseSample;

// node_modules/lodash-es/sample.js
function sample(collection) {
  var func = isArray_default(collection) ? arraySample_default : baseSample_default;
  return func(collection);
}
var sample_default = sample;

// node_modules/lodash-es/_shuffleSelf.js
function shuffleSelf(array, size3) {
  var index = -1, length = array.length, lastIndex = length - 1;
  size3 = size3 === void 0 ? length : size3;
  while (++index < size3) {
    var rand = baseRandom_default(index, lastIndex), value = array[rand];
    array[rand] = array[index];
    array[index] = value;
  }
  array.length = size3;
  return array;
}
var shuffleSelf_default = shuffleSelf;

// node_modules/lodash-es/_arraySampleSize.js
function arraySampleSize(array, n5) {
  return shuffleSelf_default(copyArray_default(array), baseClamp_default(n5, 0, array.length));
}
var arraySampleSize_default = arraySampleSize;

// node_modules/lodash-es/_baseSampleSize.js
function baseSampleSize(collection, n5) {
  var array = values_default(collection);
  return shuffleSelf_default(array, baseClamp_default(n5, 0, array.length));
}
var baseSampleSize_default = baseSampleSize;

// node_modules/lodash-es/sampleSize.js
function sampleSize(collection, n5, guard) {
  if (guard ? isIterateeCall_default(collection, n5, guard) : n5 === void 0) {
    n5 = 1;
  } else {
    n5 = toInteger_default(n5);
  }
  var func = isArray_default(collection) ? arraySampleSize_default : baseSampleSize_default;
  return func(collection, n5);
}
var sampleSize_default = sampleSize;

// node_modules/lodash-es/set.js
function set(object, path, value) {
  return object == null ? object : baseSet_default(object, path, value);
}
var set_default = set;

// node_modules/lodash-es/setWith.js
function setWith(object, path, value, customizer) {
  customizer = typeof customizer == "function" ? customizer : void 0;
  return object == null ? object : baseSet_default(object, path, value, customizer);
}
var setWith_default = setWith;

// node_modules/lodash-es/_arrayShuffle.js
function arrayShuffle(array) {
  return shuffleSelf_default(copyArray_default(array));
}
var arrayShuffle_default = arrayShuffle;

// node_modules/lodash-es/_baseShuffle.js
function baseShuffle(collection) {
  return shuffleSelf_default(values_default(collection));
}
var baseShuffle_default = baseShuffle;

// node_modules/lodash-es/shuffle.js
function shuffle(collection) {
  var func = isArray_default(collection) ? arrayShuffle_default : baseShuffle_default;
  return func(collection);
}
var shuffle_default = shuffle;

// node_modules/lodash-es/size.js
var mapTag10 = "[object Map]";
var setTag10 = "[object Set]";
function size(collection) {
  if (collection == null) {
    return 0;
  }
  if (isArrayLike_default(collection)) {
    return isString_default(collection) ? stringSize_default(collection) : collection.length;
  }
  var tag = getTag_default(collection);
  if (tag == mapTag10 || tag == setTag10) {
    return collection.size;
  }
  return baseKeys_default(collection).length;
}
var size_default = size;

// node_modules/lodash-es/slice.js
function slice(array, start, end) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  if (end && typeof end != "number" && isIterateeCall_default(array, start, end)) {
    start = 0;
    end = length;
  } else {
    start = start == null ? 0 : toInteger_default(start);
    end = end === void 0 ? length : toInteger_default(end);
  }
  return baseSlice_default(array, start, end);
}
var slice_default = slice;

// node_modules/lodash-es/snakeCase.js
var snakeCase = createCompounder_default(function(result2, word, index) {
  return result2 + (index ? "_" : "") + word.toLowerCase();
});
var snakeCase_default = snakeCase;

// node_modules/lodash-es/_baseSome.js
function baseSome(collection, predicate) {
  var result2;
  baseEach_default(collection, function(value, index, collection2) {
    result2 = predicate(value, index, collection2);
    return !result2;
  });
  return !!result2;
}
var baseSome_default = baseSome;

// node_modules/lodash-es/some.js
function some(collection, predicate, guard) {
  var func = isArray_default(collection) ? arraySome_default : baseSome_default;
  if (guard && isIterateeCall_default(collection, predicate, guard)) {
    predicate = void 0;
  }
  return func(collection, baseIteratee_default(predicate, 3));
}
var some_default = some;

// node_modules/lodash-es/sortBy.js
var sortBy = baseRest_default(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall_default(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall_default(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy_default(collection, baseFlatten_default(iteratees, 1), []);
});
var sortBy_default = sortBy;

// node_modules/lodash-es/_baseSortedIndexBy.js
var MAX_ARRAY_LENGTH3 = 4294967295;
var MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH3 - 1;
var nativeFloor4 = Math.floor;
var nativeMin11 = Math.min;
function baseSortedIndexBy(array, value, iteratee2, retHighest) {
  var low = 0, high = array == null ? 0 : array.length;
  if (high === 0) {
    return 0;
  }
  value = iteratee2(value);
  var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol_default(value), valIsUndefined = value === void 0;
  while (low < high) {
    var mid = nativeFloor4((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== void 0, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol_default(computed);
    if (valIsNaN) {
      var setLow = retHighest || othIsReflexive;
    } else if (valIsUndefined) {
      setLow = othIsReflexive && (retHighest || othIsDefined);
    } else if (valIsNull) {
      setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
    } else if (valIsSymbol) {
      setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
    } else if (othIsNull || othIsSymbol) {
      setLow = false;
    } else {
      setLow = retHighest ? computed <= value : computed < value;
    }
    if (setLow) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return nativeMin11(high, MAX_ARRAY_INDEX);
}
var baseSortedIndexBy_default = baseSortedIndexBy;

// node_modules/lodash-es/_baseSortedIndex.js
var MAX_ARRAY_LENGTH4 = 4294967295;
var HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH4 >>> 1;
function baseSortedIndex(array, value, retHighest) {
  var low = 0, high = array == null ? low : array.length;
  if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
    while (low < high) {
      var mid = low + high >>> 1, computed = array[mid];
      if (computed !== null && !isSymbol_default(computed) && (retHighest ? computed <= value : computed < value)) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return high;
  }
  return baseSortedIndexBy_default(array, value, identity_default, retHighest);
}
var baseSortedIndex_default = baseSortedIndex;

// node_modules/lodash-es/sortedIndex.js
function sortedIndex(array, value) {
  return baseSortedIndex_default(array, value);
}
var sortedIndex_default = sortedIndex;

// node_modules/lodash-es/sortedIndexBy.js
function sortedIndexBy(array, value, iteratee2) {
  return baseSortedIndexBy_default(array, value, baseIteratee_default(iteratee2, 2));
}
var sortedIndexBy_default = sortedIndexBy;

// node_modules/lodash-es/sortedIndexOf.js
function sortedIndexOf(array, value) {
  var length = array == null ? 0 : array.length;
  if (length) {
    var index = baseSortedIndex_default(array, value);
    if (index < length && eq_default(array[index], value)) {
      return index;
    }
  }
  return -1;
}
var sortedIndexOf_default = sortedIndexOf;

// node_modules/lodash-es/sortedLastIndex.js
function sortedLastIndex(array, value) {
  return baseSortedIndex_default(array, value, true);
}
var sortedLastIndex_default = sortedLastIndex;

// node_modules/lodash-es/sortedLastIndexBy.js
function sortedLastIndexBy(array, value, iteratee2) {
  return baseSortedIndexBy_default(array, value, baseIteratee_default(iteratee2, 2), true);
}
var sortedLastIndexBy_default = sortedLastIndexBy;

// node_modules/lodash-es/sortedLastIndexOf.js
function sortedLastIndexOf(array, value) {
  var length = array == null ? 0 : array.length;
  if (length) {
    var index = baseSortedIndex_default(array, value, true) - 1;
    if (eq_default(array[index], value)) {
      return index;
    }
  }
  return -1;
}
var sortedLastIndexOf_default = sortedLastIndexOf;

// node_modules/lodash-es/_baseSortedUniq.js
function baseSortedUniq(array, iteratee2) {
  var index = -1, length = array.length, resIndex = 0, result2 = [];
  while (++index < length) {
    var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
    if (!index || !eq_default(computed, seen)) {
      var seen = computed;
      result2[resIndex++] = value === 0 ? 0 : value;
    }
  }
  return result2;
}
var baseSortedUniq_default = baseSortedUniq;

// node_modules/lodash-es/sortedUniq.js
function sortedUniq(array) {
  return array && array.length ? baseSortedUniq_default(array) : [];
}
var sortedUniq_default = sortedUniq;

// node_modules/lodash-es/sortedUniqBy.js
function sortedUniqBy(array, iteratee2) {
  return array && array.length ? baseSortedUniq_default(array, baseIteratee_default(iteratee2, 2)) : [];
}
var sortedUniqBy_default = sortedUniqBy;

// node_modules/lodash-es/split.js
var MAX_ARRAY_LENGTH5 = 4294967295;
function split(string, separator, limit) {
  if (limit && typeof limit != "number" && isIterateeCall_default(string, separator, limit)) {
    separator = limit = void 0;
  }
  limit = limit === void 0 ? MAX_ARRAY_LENGTH5 : limit >>> 0;
  if (!limit) {
    return [];
  }
  string = toString_default(string);
  if (string && (typeof separator == "string" || separator != null && !isRegExp_default(separator))) {
    separator = baseToString_default(separator);
    if (!separator && hasUnicode_default(string)) {
      return castSlice_default(stringToArray_default(string), 0, limit);
    }
  }
  return string.split(separator, limit);
}
var split_default = split;

// node_modules/lodash-es/spread.js
var FUNC_ERROR_TEXT11 = "Expected a function";
var nativeMax14 = Math.max;
function spread(func, start) {
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT11);
  }
  start = start == null ? 0 : nativeMax14(toInteger_default(start), 0);
  return baseRest_default(function(args) {
    var array = args[start], otherArgs = castSlice_default(args, 0, start);
    if (array) {
      arrayPush_default(otherArgs, array);
    }
    return apply_default(func, this, otherArgs);
  });
}
var spread_default = spread;

// node_modules/lodash-es/startCase.js
var startCase = createCompounder_default(function(result2, word, index) {
  return result2 + (index ? " " : "") + upperFirst_default(word);
});
var startCase_default = startCase;

// node_modules/lodash-es/startsWith.js
function startsWith(string, target, position) {
  string = toString_default(string);
  position = position == null ? 0 : baseClamp_default(toInteger_default(position), 0, string.length);
  target = baseToString_default(target);
  return string.slice(position, position + target.length) == target;
}
var startsWith_default = startsWith;

// node_modules/lodash-es/stubObject.js
function stubObject() {
  return {};
}
var stubObject_default = stubObject;

// node_modules/lodash-es/stubString.js
function stubString() {
  return "";
}
var stubString_default = stubString;

// node_modules/lodash-es/stubTrue.js
function stubTrue() {
  return true;
}
var stubTrue_default = stubTrue;

// node_modules/lodash-es/subtract.js
var subtract = createMathOperation_default(function(minuend, subtrahend) {
  return minuend - subtrahend;
}, 0);
var subtract_default = subtract;

// node_modules/lodash-es/sum.js
function sum(array) {
  return array && array.length ? baseSum_default(array, identity_default) : 0;
}
var sum_default = sum;

// node_modules/lodash-es/sumBy.js
function sumBy(array, iteratee2) {
  return array && array.length ? baseSum_default(array, baseIteratee_default(iteratee2, 2)) : 0;
}
var sumBy_default = sumBy;

// node_modules/lodash-es/tail.js
function tail(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseSlice_default(array, 1, length) : [];
}
var tail_default = tail;

// node_modules/lodash-es/take.js
function take(array, n5, guard) {
  if (!(array && array.length)) {
    return [];
  }
  n5 = guard || n5 === void 0 ? 1 : toInteger_default(n5);
  return baseSlice_default(array, 0, n5 < 0 ? 0 : n5);
}
var take_default = take;

// node_modules/lodash-es/takeRight.js
function takeRight(array, n5, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n5 = guard || n5 === void 0 ? 1 : toInteger_default(n5);
  n5 = length - n5;
  return baseSlice_default(array, n5 < 0 ? 0 : n5, length);
}
var takeRight_default = takeRight;

// node_modules/lodash-es/takeRightWhile.js
function takeRightWhile(array, predicate) {
  return array && array.length ? baseWhile_default(array, baseIteratee_default(predicate, 3), false, true) : [];
}
var takeRightWhile_default = takeRightWhile;

// node_modules/lodash-es/takeWhile.js
function takeWhile(array, predicate) {
  return array && array.length ? baseWhile_default(array, baseIteratee_default(predicate, 3)) : [];
}
var takeWhile_default = takeWhile;

// node_modules/lodash-es/tap.js
function tap(value, interceptor) {
  interceptor(value);
  return value;
}
var tap_default = tap;

// node_modules/lodash-es/_customDefaultsAssignIn.js
var objectProto27 = Object.prototype;
var hasOwnProperty23 = objectProto27.hasOwnProperty;
function customDefaultsAssignIn(objValue, srcValue, key, object) {
  if (objValue === void 0 || eq_default(objValue, objectProto27[key]) && !hasOwnProperty23.call(object, key)) {
    return srcValue;
  }
  return objValue;
}
var customDefaultsAssignIn_default = customDefaultsAssignIn;

// node_modules/lodash-es/_escapeStringChar.js
var stringEscapes = {
  "\\": "\\",
  "'": "'",
  "\n": "n",
  "\r": "r",
  "\u2028": "u2028",
  "\u2029": "u2029"
};
function escapeStringChar(chr) {
  return "\\" + stringEscapes[chr];
}
var escapeStringChar_default = escapeStringChar;

// node_modules/lodash-es/_reInterpolate.js
var reInterpolate = /<%=([\s\S]+?)%>/g;
var reInterpolate_default = reInterpolate;

// node_modules/lodash-es/_reEscape.js
var reEscape = /<%-([\s\S]+?)%>/g;
var reEscape_default = reEscape;

// node_modules/lodash-es/_reEvaluate.js
var reEvaluate = /<%([\s\S]+?)%>/g;
var reEvaluate_default = reEvaluate;

// node_modules/lodash-es/templateSettings.js
var templateSettings = {
  /**
   * Used to detect `data` property values to be HTML-escaped.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  "escape": reEscape_default,
  /**
   * Used to detect code to be evaluated.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  "evaluate": reEvaluate_default,
  /**
   * Used to detect `data` property values to inject.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  "interpolate": reInterpolate_default,
  /**
   * Used to reference the data object in the template text.
   *
   * @memberOf _.templateSettings
   * @type {string}
   */
  "variable": "",
  /**
   * Used to import variables into the compiled template.
   *
   * @memberOf _.templateSettings
   * @type {Object}
   */
  "imports": {
    /**
     * A reference to the `lodash` function.
     *
     * @memberOf _.templateSettings.imports
     * @type {Function}
     */
    "_": { "escape": escape_default }
  }
};
var templateSettings_default = templateSettings;

// node_modules/lodash-es/template.js
var INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
var reEmptyStringLeading = /\b__p \+= '';/g;
var reEmptyStringMiddle = /\b(__p \+=) '' \+/g;
var reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
var reNoMatch = /($^)/;
var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
var objectProto28 = Object.prototype;
var hasOwnProperty24 = objectProto28.hasOwnProperty;
function template(string, options, guard) {
  var settings = templateSettings_default.imports._.templateSettings || templateSettings_default;
  if (guard && isIterateeCall_default(string, options, guard)) {
    options = void 0;
  }
  string = toString_default(string);
  options = assignInWith_default({}, options, settings, customDefaultsAssignIn_default);
  var imports = assignInWith_default({}, options.imports, settings.imports, customDefaultsAssignIn_default), importsKeys = keys_default(imports), importsValues = baseValues_default(imports, importsKeys);
  var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
  var reDelimiters = RegExp(
    (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate_default ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
    "g"
  );
  var sourceURL = hasOwnProperty24.call(options, "sourceURL") ? "//# sourceURL=" + (options.sourceURL + "").replace(/\s/g, " ") + "\n" : "";
  string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset3) {
    interpolateValue || (interpolateValue = esTemplateValue);
    source += string.slice(index, offset3).replace(reUnescapedString, escapeStringChar_default);
    if (escapeValue) {
      isEscaping = true;
      source += "' +\n__e(" + escapeValue + ") +\n'";
    }
    if (evaluateValue) {
      isEvaluating = true;
      source += "';\n" + evaluateValue + ";\n__p += '";
    }
    if (interpolateValue) {
      source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
    }
    index = offset3 + match.length;
    return match;
  });
  source += "';\n";
  var variable = hasOwnProperty24.call(options, "variable") && options.variable;
  if (!variable) {
    source = "with (obj) {\n" + source + "\n}\n";
  } else if (reForbiddenIdentifierChars.test(variable)) {
    throw new Error(INVALID_TEMPL_VAR_ERROR_TEXT);
  }
  source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
  source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
  var result2 = attempt_default(function() {
    return Function(importsKeys, sourceURL + "return " + source).apply(void 0, importsValues);
  });
  result2.source = source;
  if (isError_default(result2)) {
    throw result2;
  }
  return result2;
}
var template_default = template;

// node_modules/lodash-es/throttle.js
var FUNC_ERROR_TEXT12 = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT12);
  }
  if (isObject_default(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce_default(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
var throttle_default = throttle;

// node_modules/lodash-es/thru.js
function thru(value, interceptor) {
  return interceptor(value);
}
var thru_default = thru;

// node_modules/lodash-es/times.js
var MAX_SAFE_INTEGER5 = 9007199254740991;
var MAX_ARRAY_LENGTH6 = 4294967295;
var nativeMin12 = Math.min;
function times(n5, iteratee2) {
  n5 = toInteger_default(n5);
  if (n5 < 1 || n5 > MAX_SAFE_INTEGER5) {
    return [];
  }
  var index = MAX_ARRAY_LENGTH6, length = nativeMin12(n5, MAX_ARRAY_LENGTH6);
  iteratee2 = castFunction_default(iteratee2);
  n5 -= MAX_ARRAY_LENGTH6;
  var result2 = baseTimes_default(length, iteratee2);
  while (++index < n5) {
    iteratee2(index);
  }
  return result2;
}
var times_default = times;

// node_modules/lodash-es/toIterator.js
function wrapperToIterator() {
  return this;
}
var toIterator_default = wrapperToIterator;

// node_modules/lodash-es/_baseWrapperValue.js
function baseWrapperValue(value, actions) {
  var result2 = value;
  if (result2 instanceof LazyWrapper_default) {
    result2 = result2.value();
  }
  return arrayReduce_default(actions, function(result3, action) {
    return action.func.apply(action.thisArg, arrayPush_default([result3], action.args));
  }, result2);
}
var baseWrapperValue_default = baseWrapperValue;

// node_modules/lodash-es/wrapperValue.js
function wrapperValue() {
  return baseWrapperValue_default(this.__wrapped__, this.__actions__);
}
var wrapperValue_default = wrapperValue;

// node_modules/lodash-es/toLower.js
function toLower(value) {
  return toString_default(value).toLowerCase();
}
var toLower_default = toLower;

// node_modules/lodash-es/toPath.js
function toPath(value) {
  if (isArray_default(value)) {
    return arrayMap_default(value, toKey_default);
  }
  return isSymbol_default(value) ? [value] : copyArray_default(stringToPath_default(toString_default(value)));
}
var toPath_default = toPath;

// node_modules/lodash-es/toSafeInteger.js
var MAX_SAFE_INTEGER6 = 9007199254740991;
function toSafeInteger(value) {
  return value ? baseClamp_default(toInteger_default(value), -MAX_SAFE_INTEGER6, MAX_SAFE_INTEGER6) : value === 0 ? value : 0;
}
var toSafeInteger_default = toSafeInteger;

// node_modules/lodash-es/toUpper.js
function toUpper(value) {
  return toString_default(value).toUpperCase();
}
var toUpper_default = toUpper;

// node_modules/lodash-es/transform.js
function transform(object, iteratee2, accumulator) {
  var isArr = isArray_default(object), isArrLike = isArr || isBuffer_default(object) || isTypedArray_default(object);
  iteratee2 = baseIteratee_default(iteratee2, 4);
  if (accumulator == null) {
    var Ctor = object && object.constructor;
    if (isArrLike) {
      accumulator = isArr ? new Ctor() : [];
    } else if (isObject_default(object)) {
      accumulator = isFunction_default(Ctor) ? baseCreate_default(getPrototype_default(object)) : {};
    } else {
      accumulator = {};
    }
  }
  (isArrLike ? arrayEach_default : baseForOwn_default)(object, function(value, index, object2) {
    return iteratee2(accumulator, value, index, object2);
  });
  return accumulator;
}
var transform_default = transform;

// node_modules/lodash-es/_charsEndIndex.js
function charsEndIndex(strSymbols, chrSymbols) {
  var index = strSymbols.length;
  while (index-- && baseIndexOf_default(chrSymbols, strSymbols[index], 0) > -1) {
  }
  return index;
}
var charsEndIndex_default = charsEndIndex;

// node_modules/lodash-es/_charsStartIndex.js
function charsStartIndex(strSymbols, chrSymbols) {
  var index = -1, length = strSymbols.length;
  while (++index < length && baseIndexOf_default(chrSymbols, strSymbols[index], 0) > -1) {
  }
  return index;
}
var charsStartIndex_default = charsStartIndex;

// node_modules/lodash-es/trim.js
function trim(string, chars, guard) {
  string = toString_default(string);
  if (string && (guard || chars === void 0)) {
    return baseTrim_default(string);
  }
  if (!string || !(chars = baseToString_default(chars))) {
    return string;
  }
  var strSymbols = stringToArray_default(string), chrSymbols = stringToArray_default(chars), start = charsStartIndex_default(strSymbols, chrSymbols), end = charsEndIndex_default(strSymbols, chrSymbols) + 1;
  return castSlice_default(strSymbols, start, end).join("");
}
var trim_default = trim;

// node_modules/lodash-es/trimEnd.js
function trimEnd(string, chars, guard) {
  string = toString_default(string);
  if (string && (guard || chars === void 0)) {
    return string.slice(0, trimmedEndIndex_default(string) + 1);
  }
  if (!string || !(chars = baseToString_default(chars))) {
    return string;
  }
  var strSymbols = stringToArray_default(string), end = charsEndIndex_default(strSymbols, stringToArray_default(chars)) + 1;
  return castSlice_default(strSymbols, 0, end).join("");
}
var trimEnd_default = trimEnd;

// node_modules/lodash-es/trimStart.js
var reTrimStart3 = /^\s+/;
function trimStart(string, chars, guard) {
  string = toString_default(string);
  if (string && (guard || chars === void 0)) {
    return string.replace(reTrimStart3, "");
  }
  if (!string || !(chars = baseToString_default(chars))) {
    return string;
  }
  var strSymbols = stringToArray_default(string), start = charsStartIndex_default(strSymbols, stringToArray_default(chars));
  return castSlice_default(strSymbols, start).join("");
}
var trimStart_default = trimStart;

// node_modules/lodash-es/truncate.js
var DEFAULT_TRUNC_LENGTH = 30;
var DEFAULT_TRUNC_OMISSION = "...";
var reFlags2 = /\w*$/;
function truncate(string, options) {
  var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
  if (isObject_default(options)) {
    var separator = "separator" in options ? options.separator : separator;
    length = "length" in options ? toInteger_default(options.length) : length;
    omission = "omission" in options ? baseToString_default(options.omission) : omission;
  }
  string = toString_default(string);
  var strLength = string.length;
  if (hasUnicode_default(string)) {
    var strSymbols = stringToArray_default(string);
    strLength = strSymbols.length;
  }
  if (length >= strLength) {
    return string;
  }
  var end = length - stringSize_default(omission);
  if (end < 1) {
    return omission;
  }
  var result2 = strSymbols ? castSlice_default(strSymbols, 0, end).join("") : string.slice(0, end);
  if (separator === void 0) {
    return result2 + omission;
  }
  if (strSymbols) {
    end += result2.length - end;
  }
  if (isRegExp_default(separator)) {
    if (string.slice(end).search(separator)) {
      var match, substring = result2;
      if (!separator.global) {
        separator = RegExp(separator.source, toString_default(reFlags2.exec(separator)) + "g");
      }
      separator.lastIndex = 0;
      while (match = separator.exec(substring)) {
        var newEnd = match.index;
      }
      result2 = result2.slice(0, newEnd === void 0 ? end : newEnd);
    }
  } else if (string.indexOf(baseToString_default(separator), end) != end) {
    var index = result2.lastIndexOf(separator);
    if (index > -1) {
      result2 = result2.slice(0, index);
    }
  }
  return result2 + omission;
}
var truncate_default = truncate;

// node_modules/lodash-es/unary.js
function unary(func) {
  return ary_default(func, 1);
}
var unary_default = unary;

// node_modules/lodash-es/_unescapeHtmlChar.js
var htmlUnescapes = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'"
};
var unescapeHtmlChar = basePropertyOf_default(htmlUnescapes);
var unescapeHtmlChar_default = unescapeHtmlChar;

// node_modules/lodash-es/unescape.js
var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g;
var reHasEscapedHtml = RegExp(reEscapedHtml.source);
function unescape2(string) {
  string = toString_default(string);
  return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar_default) : string;
}
var unescape_default = unescape2;

// node_modules/lodash-es/_createSet.js
var INFINITY6 = 1 / 0;
var createSet = !(Set_default && 1 / setToArray_default(new Set_default([, -0]))[1] == INFINITY6) ? noop_default : function(values2) {
  return new Set_default(values2);
};
var createSet_default = createSet;

// node_modules/lodash-es/_baseUniq.js
var LARGE_ARRAY_SIZE3 = 200;
function baseUniq(array, iteratee2, comparator) {
  var index = -1, includes2 = arrayIncludes_default, length = array.length, isCommon = true, result2 = [], seen = result2;
  if (comparator) {
    isCommon = false;
    includes2 = arrayIncludesWith_default;
  } else if (length >= LARGE_ARRAY_SIZE3) {
    var set2 = iteratee2 ? null : createSet_default(array);
    if (set2) {
      return setToArray_default(set2);
    }
    isCommon = false;
    includes2 = cacheHas_default;
    seen = new SetCache_default();
  } else {
    seen = iteratee2 ? [] : result2;
  }
  outer:
    while (++index < length) {
      var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed === computed) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }
        if (iteratee2) {
          seen.push(computed);
        }
        result2.push(value);
      } else if (!includes2(seen, computed, comparator)) {
        if (seen !== result2) {
          seen.push(computed);
        }
        result2.push(value);
      }
    }
  return result2;
}
var baseUniq_default = baseUniq;

// node_modules/lodash-es/union.js
var union = baseRest_default(function(arrays) {
  return baseUniq_default(baseFlatten_default(arrays, 1, isArrayLikeObject_default, true));
});
var union_default = union;

// node_modules/lodash-es/unionBy.js
var unionBy = baseRest_default(function(arrays) {
  var iteratee2 = last_default(arrays);
  if (isArrayLikeObject_default(iteratee2)) {
    iteratee2 = void 0;
  }
  return baseUniq_default(baseFlatten_default(arrays, 1, isArrayLikeObject_default, true), baseIteratee_default(iteratee2, 2));
});
var unionBy_default = unionBy;

// node_modules/lodash-es/unionWith.js
var unionWith = baseRest_default(function(arrays) {
  var comparator = last_default(arrays);
  comparator = typeof comparator == "function" ? comparator : void 0;
  return baseUniq_default(baseFlatten_default(arrays, 1, isArrayLikeObject_default, true), void 0, comparator);
});
var unionWith_default = unionWith;

// node_modules/lodash-es/uniq.js
function uniq(array) {
  return array && array.length ? baseUniq_default(array) : [];
}
var uniq_default = uniq;

// node_modules/lodash-es/uniqBy.js
function uniqBy(array, iteratee2) {
  return array && array.length ? baseUniq_default(array, baseIteratee_default(iteratee2, 2)) : [];
}
var uniqBy_default = uniqBy;

// node_modules/lodash-es/uniqWith.js
function uniqWith(array, comparator) {
  comparator = typeof comparator == "function" ? comparator : void 0;
  return array && array.length ? baseUniq_default(array, void 0, comparator) : [];
}
var uniqWith_default = uniqWith;

// node_modules/lodash-es/uniqueId.js
var idCounter = 0;
function uniqueId(prefix) {
  var id = ++idCounter;
  return toString_default(prefix) + id;
}
var uniqueId_default = uniqueId;

// node_modules/lodash-es/unset.js
function unset(object, path) {
  return object == null ? true : baseUnset_default(object, path);
}
var unset_default = unset;

// node_modules/lodash-es/unzip.js
var nativeMax15 = Math.max;
function unzip(array) {
  if (!(array && array.length)) {
    return [];
  }
  var length = 0;
  array = arrayFilter_default(array, function(group) {
    if (isArrayLikeObject_default(group)) {
      length = nativeMax15(group.length, length);
      return true;
    }
  });
  return baseTimes_default(length, function(index) {
    return arrayMap_default(array, baseProperty_default(index));
  });
}
var unzip_default = unzip;

// node_modules/lodash-es/unzipWith.js
function unzipWith(array, iteratee2) {
  if (!(array && array.length)) {
    return [];
  }
  var result2 = unzip_default(array);
  if (iteratee2 == null) {
    return result2;
  }
  return arrayMap_default(result2, function(group) {
    return apply_default(iteratee2, void 0, group);
  });
}
var unzipWith_default = unzipWith;

// node_modules/lodash-es/_baseUpdate.js
function baseUpdate(object, path, updater, customizer) {
  return baseSet_default(object, path, updater(baseGet_default(object, path)), customizer);
}
var baseUpdate_default = baseUpdate;

// node_modules/lodash-es/update.js
function update(object, path, updater) {
  return object == null ? object : baseUpdate_default(object, path, castFunction_default(updater));
}
var update_default = update;

// node_modules/lodash-es/updateWith.js
function updateWith(object, path, updater, customizer) {
  customizer = typeof customizer == "function" ? customizer : void 0;
  return object == null ? object : baseUpdate_default(object, path, castFunction_default(updater), customizer);
}
var updateWith_default = updateWith;

// node_modules/lodash-es/upperCase.js
var upperCase = createCompounder_default(function(result2, word, index) {
  return result2 + (index ? " " : "") + word.toUpperCase();
});
var upperCase_default = upperCase;

// node_modules/lodash-es/valuesIn.js
function valuesIn(object) {
  return object == null ? [] : baseValues_default(object, keysIn_default(object));
}
var valuesIn_default = valuesIn;

// node_modules/lodash-es/without.js
var without = baseRest_default(function(array, values2) {
  return isArrayLikeObject_default(array) ? baseDifference_default(array, values2) : [];
});
var without_default = without;

// node_modules/lodash-es/wrap.js
function wrap(value, wrapper) {
  return partial_default(castFunction_default(wrapper), value);
}
var wrap_default = wrap;

// node_modules/lodash-es/wrapperAt.js
var wrapperAt = flatRest_default(function(paths) {
  var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
    return baseAt_default(object, paths);
  };
  if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper_default) || !isIndex_default(start)) {
    return this.thru(interceptor);
  }
  value = value.slice(start, +start + (length ? 1 : 0));
  value.__actions__.push({
    "func": thru_default,
    "args": [interceptor],
    "thisArg": void 0
  });
  return new LodashWrapper_default(value, this.__chain__).thru(function(array) {
    if (length && !array.length) {
      array.push(void 0);
    }
    return array;
  });
});
var wrapperAt_default = wrapperAt;

// node_modules/lodash-es/wrapperChain.js
function wrapperChain() {
  return chain_default(this);
}
var wrapperChain_default = wrapperChain;

// node_modules/lodash-es/wrapperReverse.js
function wrapperReverse() {
  var value = this.__wrapped__;
  if (value instanceof LazyWrapper_default) {
    var wrapped = value;
    if (this.__actions__.length) {
      wrapped = new LazyWrapper_default(this);
    }
    wrapped = wrapped.reverse();
    wrapped.__actions__.push({
      "func": thru_default,
      "args": [reverse_default],
      "thisArg": void 0
    });
    return new LodashWrapper_default(wrapped, this.__chain__);
  }
  return this.thru(reverse_default);
}
var wrapperReverse_default = wrapperReverse;

// node_modules/lodash-es/_baseXor.js
function baseXor(arrays, iteratee2, comparator) {
  var length = arrays.length;
  if (length < 2) {
    return length ? baseUniq_default(arrays[0]) : [];
  }
  var index = -1, result2 = Array(length);
  while (++index < length) {
    var array = arrays[index], othIndex = -1;
    while (++othIndex < length) {
      if (othIndex != index) {
        result2[index] = baseDifference_default(result2[index] || array, arrays[othIndex], iteratee2, comparator);
      }
    }
  }
  return baseUniq_default(baseFlatten_default(result2, 1), iteratee2, comparator);
}
var baseXor_default = baseXor;

// node_modules/lodash-es/xor.js
var xor = baseRest_default(function(arrays) {
  return baseXor_default(arrayFilter_default(arrays, isArrayLikeObject_default));
});
var xor_default = xor;

// node_modules/lodash-es/xorBy.js
var xorBy = baseRest_default(function(arrays) {
  var iteratee2 = last_default(arrays);
  if (isArrayLikeObject_default(iteratee2)) {
    iteratee2 = void 0;
  }
  return baseXor_default(arrayFilter_default(arrays, isArrayLikeObject_default), baseIteratee_default(iteratee2, 2));
});
var xorBy_default = xorBy;

// node_modules/lodash-es/xorWith.js
var xorWith = baseRest_default(function(arrays) {
  var comparator = last_default(arrays);
  comparator = typeof comparator == "function" ? comparator : void 0;
  return baseXor_default(arrayFilter_default(arrays, isArrayLikeObject_default), void 0, comparator);
});
var xorWith_default = xorWith;

// node_modules/lodash-es/zip.js
var zip = baseRest_default(unzip_default);
var zip_default = zip;

// node_modules/lodash-es/_baseZipObject.js
function baseZipObject(props, values2, assignFunc) {
  var index = -1, length = props.length, valsLength = values2.length, result2 = {};
  while (++index < length) {
    var value = index < valsLength ? values2[index] : void 0;
    assignFunc(result2, props[index], value);
  }
  return result2;
}
var baseZipObject_default = baseZipObject;

// node_modules/lodash-es/zipObject.js
function zipObject(props, values2) {
  return baseZipObject_default(props || [], values2 || [], assignValue_default);
}
var zipObject_default = zipObject;

// node_modules/lodash-es/zipObjectDeep.js
function zipObjectDeep(props, values2) {
  return baseZipObject_default(props || [], values2 || [], baseSet_default);
}
var zipObjectDeep_default = zipObjectDeep;

// node_modules/lodash-es/zipWith.js
var zipWith = baseRest_default(function(arrays) {
  var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : void 0;
  iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : void 0;
  return unzipWith_default(arrays, iteratee2);
});
var zipWith_default = zipWith;

// node_modules/lodash-es/array.default.js
var array_default_default = {
  chunk: chunk_default,
  compact: compact_default,
  concat: concat_default,
  difference: difference_default,
  differenceBy: differenceBy_default,
  differenceWith: differenceWith_default,
  drop: drop_default,
  dropRight: dropRight_default,
  dropRightWhile: dropRightWhile_default,
  dropWhile: dropWhile_default,
  fill: fill_default,
  findIndex: findIndex_default,
  findLastIndex: findLastIndex_default,
  first: head_default,
  flatten: flatten_default,
  flattenDeep: flattenDeep_default,
  flattenDepth: flattenDepth_default,
  fromPairs: fromPairs_default,
  head: head_default,
  indexOf: indexOf_default,
  initial: initial_default,
  intersection: intersection_default,
  intersectionBy: intersectionBy_default,
  intersectionWith: intersectionWith_default,
  join: join_default,
  last: last_default,
  lastIndexOf: lastIndexOf_default,
  nth: nth_default,
  pull: pull_default,
  pullAll: pullAll_default,
  pullAllBy: pullAllBy_default,
  pullAllWith: pullAllWith_default,
  pullAt: pullAt_default,
  remove: remove_default,
  reverse: reverse_default,
  slice: slice_default,
  sortedIndex: sortedIndex_default,
  sortedIndexBy: sortedIndexBy_default,
  sortedIndexOf: sortedIndexOf_default,
  sortedLastIndex: sortedLastIndex_default,
  sortedLastIndexBy: sortedLastIndexBy_default,
  sortedLastIndexOf: sortedLastIndexOf_default,
  sortedUniq: sortedUniq_default,
  sortedUniqBy: sortedUniqBy_default,
  tail: tail_default,
  take: take_default,
  takeRight: takeRight_default,
  takeRightWhile: takeRightWhile_default,
  takeWhile: takeWhile_default,
  union: union_default,
  unionBy: unionBy_default,
  unionWith: unionWith_default,
  uniq: uniq_default,
  uniqBy: uniqBy_default,
  uniqWith: uniqWith_default,
  unzip: unzip_default,
  unzipWith: unzipWith_default,
  without: without_default,
  xor: xor_default,
  xorBy: xorBy_default,
  xorWith: xorWith_default,
  zip: zip_default,
  zipObject: zipObject_default,
  zipObjectDeep: zipObjectDeep_default,
  zipWith: zipWith_default
};

// node_modules/lodash-es/collection.default.js
var collection_default_default = {
  countBy: countBy_default,
  each: forEach_default,
  eachRight: forEachRight_default,
  every: every_default,
  filter: filter_default,
  find: find_default,
  findLast: findLast_default,
  flatMap: flatMap_default,
  flatMapDeep: flatMapDeep_default,
  flatMapDepth: flatMapDepth_default,
  forEach: forEach_default,
  forEachRight: forEachRight_default,
  groupBy: groupBy_default,
  includes: includes_default,
  invokeMap: invokeMap_default,
  keyBy: keyBy_default,
  map: map_default,
  orderBy: orderBy_default,
  partition: partition_default,
  reduce: reduce_default,
  reduceRight: reduceRight_default,
  reject: reject_default,
  sample: sample_default,
  sampleSize: sampleSize_default,
  shuffle: shuffle_default,
  size: size_default,
  some: some_default,
  sortBy: sortBy_default
};

// node_modules/lodash-es/date.default.js
var date_default_default = {
  now: now_default
};

// node_modules/lodash-es/function.default.js
var function_default_default = {
  after: after_default,
  ary: ary_default,
  before: before_default,
  bind: bind_default,
  bindKey: bindKey_default,
  curry: curry_default,
  curryRight: curryRight_default,
  debounce: debounce_default,
  defer: defer_default,
  delay: delay_default,
  flip: flip_default,
  memoize: memoize_default,
  negate: negate_default,
  once: once_default,
  overArgs: overArgs_default,
  partial: partial_default,
  partialRight: partialRight_default,
  rearg: rearg_default,
  rest: rest_default,
  spread: spread_default,
  throttle: throttle_default,
  unary: unary_default,
  wrap: wrap_default
};

// node_modules/lodash-es/lang.default.js
var lang_default_default = {
  castArray: castArray_default,
  clone: clone_default,
  cloneDeep: cloneDeep_default,
  cloneDeepWith: cloneDeepWith_default,
  cloneWith: cloneWith_default,
  conformsTo: conformsTo_default,
  eq: eq_default,
  gt: gt_default,
  gte: gte_default,
  isArguments: isArguments_default,
  isArray: isArray_default,
  isArrayBuffer: isArrayBuffer_default,
  isArrayLike: isArrayLike_default,
  isArrayLikeObject: isArrayLikeObject_default,
  isBoolean: isBoolean_default,
  isBuffer: isBuffer_default,
  isDate: isDate_default,
  isElement: isElement_default,
  isEmpty: isEmpty_default,
  isEqual: isEqual_default,
  isEqualWith: isEqualWith_default,
  isError: isError_default,
  isFinite: isFinite_default,
  isFunction: isFunction_default,
  isInteger: isInteger_default,
  isLength: isLength_default,
  isMap: isMap_default,
  isMatch: isMatch_default,
  isMatchWith: isMatchWith_default,
  isNaN: isNaN_default,
  isNative: isNative_default,
  isNil: isNil_default,
  isNull: isNull_default,
  isNumber: isNumber_default,
  isObject: isObject_default,
  isObjectLike: isObjectLike_default,
  isPlainObject: isPlainObject_default,
  isRegExp: isRegExp_default,
  isSafeInteger: isSafeInteger_default,
  isSet: isSet_default,
  isString: isString_default,
  isSymbol: isSymbol_default,
  isTypedArray: isTypedArray_default,
  isUndefined: isUndefined_default,
  isWeakMap: isWeakMap_default,
  isWeakSet: isWeakSet_default,
  lt: lt_default,
  lte: lte_default,
  toArray: toArray_default,
  toFinite: toFinite_default,
  toInteger: toInteger_default,
  toLength: toLength_default,
  toNumber: toNumber_default,
  toPlainObject: toPlainObject_default,
  toSafeInteger: toSafeInteger_default,
  toString: toString_default
};

// node_modules/lodash-es/math.default.js
var math_default_default = {
  add: add_default,
  ceil: ceil_default,
  divide: divide_default,
  floor: floor_default,
  max: max_default,
  maxBy: maxBy_default,
  mean: mean_default,
  meanBy: meanBy_default,
  min: min_default,
  minBy: minBy_default,
  multiply: multiply_default,
  round: round_default,
  subtract: subtract_default,
  sum: sum_default,
  sumBy: sumBy_default
};

// node_modules/lodash-es/number.default.js
var number_default_default = {
  clamp: clamp_default,
  inRange: inRange_default,
  random: random_default
};

// node_modules/lodash-es/object.default.js
var object_default_default = {
  assign: assign_default,
  assignIn: assignIn_default,
  assignInWith: assignInWith_default,
  assignWith: assignWith_default,
  at: at_default,
  create: create_default,
  defaults: defaults_default,
  defaultsDeep: defaultsDeep_default,
  entries: toPairs_default,
  entriesIn: toPairsIn_default,
  extend: assignIn_default,
  extendWith: assignInWith_default,
  findKey: findKey_default,
  findLastKey: findLastKey_default,
  forIn: forIn_default,
  forInRight: forInRight_default,
  forOwn: forOwn_default,
  forOwnRight: forOwnRight_default,
  functions: functions_default,
  functionsIn: functionsIn_default,
  get: get_default,
  has: has_default,
  hasIn: hasIn_default,
  invert: invert_default,
  invertBy: invertBy_default,
  invoke: invoke_default,
  keys: keys_default,
  keysIn: keysIn_default,
  mapKeys: mapKeys_default,
  mapValues: mapValues_default,
  merge: merge_default,
  mergeWith: mergeWith_default,
  omit: omit_default,
  omitBy: omitBy_default,
  pick: pick_default,
  pickBy: pickBy_default,
  result: result_default,
  set: set_default,
  setWith: setWith_default,
  toPairs: toPairs_default,
  toPairsIn: toPairsIn_default,
  transform: transform_default,
  unset: unset_default,
  update: update_default,
  updateWith: updateWith_default,
  values: values_default,
  valuesIn: valuesIn_default
};

// node_modules/lodash-es/seq.default.js
var seq_default_default = {
  at: wrapperAt_default,
  chain: chain_default,
  commit: commit_default,
  lodash: wrapperLodash_default,
  next: next_default,
  plant: plant_default,
  reverse: wrapperReverse_default,
  tap: tap_default,
  thru: thru_default,
  toIterator: toIterator_default,
  toJSON: wrapperValue_default,
  value: wrapperValue_default,
  valueOf: wrapperValue_default,
  wrapperChain: wrapperChain_default
};

// node_modules/lodash-es/string.default.js
var string_default_default = {
  camelCase: camelCase_default,
  capitalize: capitalize_default,
  deburr: deburr_default,
  endsWith: endsWith_default,
  escape: escape_default,
  escapeRegExp: escapeRegExp_default,
  kebabCase: kebabCase_default,
  lowerCase: lowerCase_default,
  lowerFirst: lowerFirst_default,
  pad: pad_default,
  padEnd: padEnd_default,
  padStart: padStart_default,
  parseInt: parseInt_default,
  repeat: repeat_default,
  replace: replace_default,
  snakeCase: snakeCase_default,
  split: split_default,
  startCase: startCase_default,
  startsWith: startsWith_default,
  template: template_default,
  templateSettings: templateSettings_default,
  toLower: toLower_default,
  toUpper: toUpper_default,
  trim: trim_default,
  trimEnd: trimEnd_default,
  trimStart: trimStart_default,
  truncate: truncate_default,
  unescape: unescape_default,
  upperCase: upperCase_default,
  upperFirst: upperFirst_default,
  words: words_default
};

// node_modules/lodash-es/util.default.js
var util_default_default = {
  attempt: attempt_default,
  bindAll: bindAll_default,
  cond: cond_default,
  conforms: conforms_default,
  constant: constant_default,
  defaultTo: defaultTo_default,
  flow: flow_default,
  flowRight: flowRight_default,
  identity: identity_default,
  iteratee: iteratee_default,
  matches: matches_default,
  matchesProperty: matchesProperty_default,
  method: method_default,
  methodOf: methodOf_default,
  mixin: mixin_default,
  noop: noop_default,
  nthArg: nthArg_default,
  over: over_default,
  overEvery: overEvery_default,
  overSome: overSome_default,
  property: property_default,
  propertyOf: propertyOf_default,
  range: range_default,
  rangeRight: rangeRight_default,
  stubArray: stubArray_default,
  stubFalse: stubFalse_default,
  stubObject: stubObject_default,
  stubString: stubString_default,
  stubTrue: stubTrue_default,
  times: times_default,
  toPath: toPath_default,
  uniqueId: uniqueId_default
};

// node_modules/lodash-es/_lazyClone.js
function lazyClone() {
  var result2 = new LazyWrapper_default(this.__wrapped__);
  result2.__actions__ = copyArray_default(this.__actions__);
  result2.__dir__ = this.__dir__;
  result2.__filtered__ = this.__filtered__;
  result2.__iteratees__ = copyArray_default(this.__iteratees__);
  result2.__takeCount__ = this.__takeCount__;
  result2.__views__ = copyArray_default(this.__views__);
  return result2;
}
var lazyClone_default = lazyClone;

// node_modules/lodash-es/_lazyReverse.js
function lazyReverse() {
  if (this.__filtered__) {
    var result2 = new LazyWrapper_default(this);
    result2.__dir__ = -1;
    result2.__filtered__ = true;
  } else {
    result2 = this.clone();
    result2.__dir__ *= -1;
  }
  return result2;
}
var lazyReverse_default = lazyReverse;

// node_modules/lodash-es/_getView.js
var nativeMax16 = Math.max;
var nativeMin13 = Math.min;
function getView(start, end, transforms) {
  var index = -1, length = transforms.length;
  while (++index < length) {
    var data = transforms[index], size3 = data.size;
    switch (data.type) {
      case "drop":
        start += size3;
        break;
      case "dropRight":
        end -= size3;
        break;
      case "take":
        end = nativeMin13(end, start + size3);
        break;
      case "takeRight":
        start = nativeMax16(start, end - size3);
        break;
    }
  }
  return { "start": start, "end": end };
}
var getView_default = getView;

// node_modules/lodash-es/_lazyValue.js
var LAZY_FILTER_FLAG = 1;
var LAZY_MAP_FLAG = 2;
var nativeMin14 = Math.min;
function lazyValue() {
  var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray_default(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView_default(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin14(length, this.__takeCount__);
  if (!isArr || !isRight && arrLength == length && takeCount == length) {
    return baseWrapperValue_default(array, this.__actions__);
  }
  var result2 = [];
  outer:
    while (length-- && resIndex < takeCount) {
      index += dir;
      var iterIndex = -1, value = array[index];
      while (++iterIndex < iterLength) {
        var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
        if (type == LAZY_MAP_FLAG) {
          value = computed;
        } else if (!computed) {
          if (type == LAZY_FILTER_FLAG) {
            continue outer;
          } else {
            break outer;
          }
        }
      }
      result2[resIndex++] = value;
    }
  return result2;
}
var lazyValue_default = lazyValue;

// node_modules/lodash-es/lodash.default.js
var VERSION = "4.17.21";
var WRAP_BIND_KEY_FLAG7 = 2;
var LAZY_FILTER_FLAG2 = 1;
var LAZY_WHILE_FLAG = 3;
var MAX_ARRAY_LENGTH7 = 4294967295;
var arrayProto6 = Array.prototype;
var objectProto29 = Object.prototype;
var hasOwnProperty25 = objectProto29.hasOwnProperty;
var symIterator2 = Symbol_default ? Symbol_default.iterator : void 0;
var nativeMax17 = Math.max;
var nativeMin15 = Math.min;
var mixin2 = /* @__PURE__ */ function(func) {
  return function(object, source, options) {
    if (options == null) {
      var isObj = isObject_default(source), props = isObj && keys_default(source), methodNames = props && props.length && baseFunctions_default(source, props);
      if (!(methodNames ? methodNames.length : isObj)) {
        options = source;
        source = object;
        object = this;
      }
    }
    return func(object, source, options);
  };
}(mixin_default);
wrapperLodash_default.after = function_default_default.after;
wrapperLodash_default.ary = function_default_default.ary;
wrapperLodash_default.assign = object_default_default.assign;
wrapperLodash_default.assignIn = object_default_default.assignIn;
wrapperLodash_default.assignInWith = object_default_default.assignInWith;
wrapperLodash_default.assignWith = object_default_default.assignWith;
wrapperLodash_default.at = object_default_default.at;
wrapperLodash_default.before = function_default_default.before;
wrapperLodash_default.bind = function_default_default.bind;
wrapperLodash_default.bindAll = util_default_default.bindAll;
wrapperLodash_default.bindKey = function_default_default.bindKey;
wrapperLodash_default.castArray = lang_default_default.castArray;
wrapperLodash_default.chain = seq_default_default.chain;
wrapperLodash_default.chunk = array_default_default.chunk;
wrapperLodash_default.compact = array_default_default.compact;
wrapperLodash_default.concat = array_default_default.concat;
wrapperLodash_default.cond = util_default_default.cond;
wrapperLodash_default.conforms = util_default_default.conforms;
wrapperLodash_default.constant = util_default_default.constant;
wrapperLodash_default.countBy = collection_default_default.countBy;
wrapperLodash_default.create = object_default_default.create;
wrapperLodash_default.curry = function_default_default.curry;
wrapperLodash_default.curryRight = function_default_default.curryRight;
wrapperLodash_default.debounce = function_default_default.debounce;
wrapperLodash_default.defaults = object_default_default.defaults;
wrapperLodash_default.defaultsDeep = object_default_default.defaultsDeep;
wrapperLodash_default.defer = function_default_default.defer;
wrapperLodash_default.delay = function_default_default.delay;
wrapperLodash_default.difference = array_default_default.difference;
wrapperLodash_default.differenceBy = array_default_default.differenceBy;
wrapperLodash_default.differenceWith = array_default_default.differenceWith;
wrapperLodash_default.drop = array_default_default.drop;
wrapperLodash_default.dropRight = array_default_default.dropRight;
wrapperLodash_default.dropRightWhile = array_default_default.dropRightWhile;
wrapperLodash_default.dropWhile = array_default_default.dropWhile;
wrapperLodash_default.fill = array_default_default.fill;
wrapperLodash_default.filter = collection_default_default.filter;
wrapperLodash_default.flatMap = collection_default_default.flatMap;
wrapperLodash_default.flatMapDeep = collection_default_default.flatMapDeep;
wrapperLodash_default.flatMapDepth = collection_default_default.flatMapDepth;
wrapperLodash_default.flatten = array_default_default.flatten;
wrapperLodash_default.flattenDeep = array_default_default.flattenDeep;
wrapperLodash_default.flattenDepth = array_default_default.flattenDepth;
wrapperLodash_default.flip = function_default_default.flip;
wrapperLodash_default.flow = util_default_default.flow;
wrapperLodash_default.flowRight = util_default_default.flowRight;
wrapperLodash_default.fromPairs = array_default_default.fromPairs;
wrapperLodash_default.functions = object_default_default.functions;
wrapperLodash_default.functionsIn = object_default_default.functionsIn;
wrapperLodash_default.groupBy = collection_default_default.groupBy;
wrapperLodash_default.initial = array_default_default.initial;
wrapperLodash_default.intersection = array_default_default.intersection;
wrapperLodash_default.intersectionBy = array_default_default.intersectionBy;
wrapperLodash_default.intersectionWith = array_default_default.intersectionWith;
wrapperLodash_default.invert = object_default_default.invert;
wrapperLodash_default.invertBy = object_default_default.invertBy;
wrapperLodash_default.invokeMap = collection_default_default.invokeMap;
wrapperLodash_default.iteratee = util_default_default.iteratee;
wrapperLodash_default.keyBy = collection_default_default.keyBy;
wrapperLodash_default.keys = keys_default;
wrapperLodash_default.keysIn = object_default_default.keysIn;
wrapperLodash_default.map = collection_default_default.map;
wrapperLodash_default.mapKeys = object_default_default.mapKeys;
wrapperLodash_default.mapValues = object_default_default.mapValues;
wrapperLodash_default.matches = util_default_default.matches;
wrapperLodash_default.matchesProperty = util_default_default.matchesProperty;
wrapperLodash_default.memoize = function_default_default.memoize;
wrapperLodash_default.merge = object_default_default.merge;
wrapperLodash_default.mergeWith = object_default_default.mergeWith;
wrapperLodash_default.method = util_default_default.method;
wrapperLodash_default.methodOf = util_default_default.methodOf;
wrapperLodash_default.mixin = mixin2;
wrapperLodash_default.negate = negate_default;
wrapperLodash_default.nthArg = util_default_default.nthArg;
wrapperLodash_default.omit = object_default_default.omit;
wrapperLodash_default.omitBy = object_default_default.omitBy;
wrapperLodash_default.once = function_default_default.once;
wrapperLodash_default.orderBy = collection_default_default.orderBy;
wrapperLodash_default.over = util_default_default.over;
wrapperLodash_default.overArgs = function_default_default.overArgs;
wrapperLodash_default.overEvery = util_default_default.overEvery;
wrapperLodash_default.overSome = util_default_default.overSome;
wrapperLodash_default.partial = function_default_default.partial;
wrapperLodash_default.partialRight = function_default_default.partialRight;
wrapperLodash_default.partition = collection_default_default.partition;
wrapperLodash_default.pick = object_default_default.pick;
wrapperLodash_default.pickBy = object_default_default.pickBy;
wrapperLodash_default.property = util_default_default.property;
wrapperLodash_default.propertyOf = util_default_default.propertyOf;
wrapperLodash_default.pull = array_default_default.pull;
wrapperLodash_default.pullAll = array_default_default.pullAll;
wrapperLodash_default.pullAllBy = array_default_default.pullAllBy;
wrapperLodash_default.pullAllWith = array_default_default.pullAllWith;
wrapperLodash_default.pullAt = array_default_default.pullAt;
wrapperLodash_default.range = util_default_default.range;
wrapperLodash_default.rangeRight = util_default_default.rangeRight;
wrapperLodash_default.rearg = function_default_default.rearg;
wrapperLodash_default.reject = collection_default_default.reject;
wrapperLodash_default.remove = array_default_default.remove;
wrapperLodash_default.rest = function_default_default.rest;
wrapperLodash_default.reverse = array_default_default.reverse;
wrapperLodash_default.sampleSize = collection_default_default.sampleSize;
wrapperLodash_default.set = object_default_default.set;
wrapperLodash_default.setWith = object_default_default.setWith;
wrapperLodash_default.shuffle = collection_default_default.shuffle;
wrapperLodash_default.slice = array_default_default.slice;
wrapperLodash_default.sortBy = collection_default_default.sortBy;
wrapperLodash_default.sortedUniq = array_default_default.sortedUniq;
wrapperLodash_default.sortedUniqBy = array_default_default.sortedUniqBy;
wrapperLodash_default.split = string_default_default.split;
wrapperLodash_default.spread = function_default_default.spread;
wrapperLodash_default.tail = array_default_default.tail;
wrapperLodash_default.take = array_default_default.take;
wrapperLodash_default.takeRight = array_default_default.takeRight;
wrapperLodash_default.takeRightWhile = array_default_default.takeRightWhile;
wrapperLodash_default.takeWhile = array_default_default.takeWhile;
wrapperLodash_default.tap = seq_default_default.tap;
wrapperLodash_default.throttle = function_default_default.throttle;
wrapperLodash_default.thru = thru_default;
wrapperLodash_default.toArray = lang_default_default.toArray;
wrapperLodash_default.toPairs = object_default_default.toPairs;
wrapperLodash_default.toPairsIn = object_default_default.toPairsIn;
wrapperLodash_default.toPath = util_default_default.toPath;
wrapperLodash_default.toPlainObject = lang_default_default.toPlainObject;
wrapperLodash_default.transform = object_default_default.transform;
wrapperLodash_default.unary = function_default_default.unary;
wrapperLodash_default.union = array_default_default.union;
wrapperLodash_default.unionBy = array_default_default.unionBy;
wrapperLodash_default.unionWith = array_default_default.unionWith;
wrapperLodash_default.uniq = array_default_default.uniq;
wrapperLodash_default.uniqBy = array_default_default.uniqBy;
wrapperLodash_default.uniqWith = array_default_default.uniqWith;
wrapperLodash_default.unset = object_default_default.unset;
wrapperLodash_default.unzip = array_default_default.unzip;
wrapperLodash_default.unzipWith = array_default_default.unzipWith;
wrapperLodash_default.update = object_default_default.update;
wrapperLodash_default.updateWith = object_default_default.updateWith;
wrapperLodash_default.values = object_default_default.values;
wrapperLodash_default.valuesIn = object_default_default.valuesIn;
wrapperLodash_default.without = array_default_default.without;
wrapperLodash_default.words = string_default_default.words;
wrapperLodash_default.wrap = function_default_default.wrap;
wrapperLodash_default.xor = array_default_default.xor;
wrapperLodash_default.xorBy = array_default_default.xorBy;
wrapperLodash_default.xorWith = array_default_default.xorWith;
wrapperLodash_default.zip = array_default_default.zip;
wrapperLodash_default.zipObject = array_default_default.zipObject;
wrapperLodash_default.zipObjectDeep = array_default_default.zipObjectDeep;
wrapperLodash_default.zipWith = array_default_default.zipWith;
wrapperLodash_default.entries = object_default_default.toPairs;
wrapperLodash_default.entriesIn = object_default_default.toPairsIn;
wrapperLodash_default.extend = object_default_default.assignIn;
wrapperLodash_default.extendWith = object_default_default.assignInWith;
mixin2(wrapperLodash_default, wrapperLodash_default);
wrapperLodash_default.add = math_default_default.add;
wrapperLodash_default.attempt = util_default_default.attempt;
wrapperLodash_default.camelCase = string_default_default.camelCase;
wrapperLodash_default.capitalize = string_default_default.capitalize;
wrapperLodash_default.ceil = math_default_default.ceil;
wrapperLodash_default.clamp = number_default_default.clamp;
wrapperLodash_default.clone = lang_default_default.clone;
wrapperLodash_default.cloneDeep = lang_default_default.cloneDeep;
wrapperLodash_default.cloneDeepWith = lang_default_default.cloneDeepWith;
wrapperLodash_default.cloneWith = lang_default_default.cloneWith;
wrapperLodash_default.conformsTo = lang_default_default.conformsTo;
wrapperLodash_default.deburr = string_default_default.deburr;
wrapperLodash_default.defaultTo = util_default_default.defaultTo;
wrapperLodash_default.divide = math_default_default.divide;
wrapperLodash_default.endsWith = string_default_default.endsWith;
wrapperLodash_default.eq = lang_default_default.eq;
wrapperLodash_default.escape = string_default_default.escape;
wrapperLodash_default.escapeRegExp = string_default_default.escapeRegExp;
wrapperLodash_default.every = collection_default_default.every;
wrapperLodash_default.find = collection_default_default.find;
wrapperLodash_default.findIndex = array_default_default.findIndex;
wrapperLodash_default.findKey = object_default_default.findKey;
wrapperLodash_default.findLast = collection_default_default.findLast;
wrapperLodash_default.findLastIndex = array_default_default.findLastIndex;
wrapperLodash_default.findLastKey = object_default_default.findLastKey;
wrapperLodash_default.floor = math_default_default.floor;
wrapperLodash_default.forEach = collection_default_default.forEach;
wrapperLodash_default.forEachRight = collection_default_default.forEachRight;
wrapperLodash_default.forIn = object_default_default.forIn;
wrapperLodash_default.forInRight = object_default_default.forInRight;
wrapperLodash_default.forOwn = object_default_default.forOwn;
wrapperLodash_default.forOwnRight = object_default_default.forOwnRight;
wrapperLodash_default.get = object_default_default.get;
wrapperLodash_default.gt = lang_default_default.gt;
wrapperLodash_default.gte = lang_default_default.gte;
wrapperLodash_default.has = object_default_default.has;
wrapperLodash_default.hasIn = object_default_default.hasIn;
wrapperLodash_default.head = array_default_default.head;
wrapperLodash_default.identity = identity_default;
wrapperLodash_default.includes = collection_default_default.includes;
wrapperLodash_default.indexOf = array_default_default.indexOf;
wrapperLodash_default.inRange = number_default_default.inRange;
wrapperLodash_default.invoke = object_default_default.invoke;
wrapperLodash_default.isArguments = lang_default_default.isArguments;
wrapperLodash_default.isArray = isArray_default;
wrapperLodash_default.isArrayBuffer = lang_default_default.isArrayBuffer;
wrapperLodash_default.isArrayLike = lang_default_default.isArrayLike;
wrapperLodash_default.isArrayLikeObject = lang_default_default.isArrayLikeObject;
wrapperLodash_default.isBoolean = lang_default_default.isBoolean;
wrapperLodash_default.isBuffer = lang_default_default.isBuffer;
wrapperLodash_default.isDate = lang_default_default.isDate;
wrapperLodash_default.isElement = lang_default_default.isElement;
wrapperLodash_default.isEmpty = lang_default_default.isEmpty;
wrapperLodash_default.isEqual = lang_default_default.isEqual;
wrapperLodash_default.isEqualWith = lang_default_default.isEqualWith;
wrapperLodash_default.isError = lang_default_default.isError;
wrapperLodash_default.isFinite = lang_default_default.isFinite;
wrapperLodash_default.isFunction = lang_default_default.isFunction;
wrapperLodash_default.isInteger = lang_default_default.isInteger;
wrapperLodash_default.isLength = lang_default_default.isLength;
wrapperLodash_default.isMap = lang_default_default.isMap;
wrapperLodash_default.isMatch = lang_default_default.isMatch;
wrapperLodash_default.isMatchWith = lang_default_default.isMatchWith;
wrapperLodash_default.isNaN = lang_default_default.isNaN;
wrapperLodash_default.isNative = lang_default_default.isNative;
wrapperLodash_default.isNil = lang_default_default.isNil;
wrapperLodash_default.isNull = lang_default_default.isNull;
wrapperLodash_default.isNumber = lang_default_default.isNumber;
wrapperLodash_default.isObject = isObject_default;
wrapperLodash_default.isObjectLike = lang_default_default.isObjectLike;
wrapperLodash_default.isPlainObject = lang_default_default.isPlainObject;
wrapperLodash_default.isRegExp = lang_default_default.isRegExp;
wrapperLodash_default.isSafeInteger = lang_default_default.isSafeInteger;
wrapperLodash_default.isSet = lang_default_default.isSet;
wrapperLodash_default.isString = lang_default_default.isString;
wrapperLodash_default.isSymbol = lang_default_default.isSymbol;
wrapperLodash_default.isTypedArray = lang_default_default.isTypedArray;
wrapperLodash_default.isUndefined = lang_default_default.isUndefined;
wrapperLodash_default.isWeakMap = lang_default_default.isWeakMap;
wrapperLodash_default.isWeakSet = lang_default_default.isWeakSet;
wrapperLodash_default.join = array_default_default.join;
wrapperLodash_default.kebabCase = string_default_default.kebabCase;
wrapperLodash_default.last = last_default;
wrapperLodash_default.lastIndexOf = array_default_default.lastIndexOf;
wrapperLodash_default.lowerCase = string_default_default.lowerCase;
wrapperLodash_default.lowerFirst = string_default_default.lowerFirst;
wrapperLodash_default.lt = lang_default_default.lt;
wrapperLodash_default.lte = lang_default_default.lte;
wrapperLodash_default.max = math_default_default.max;
wrapperLodash_default.maxBy = math_default_default.maxBy;
wrapperLodash_default.mean = math_default_default.mean;
wrapperLodash_default.meanBy = math_default_default.meanBy;
wrapperLodash_default.min = math_default_default.min;
wrapperLodash_default.minBy = math_default_default.minBy;
wrapperLodash_default.stubArray = util_default_default.stubArray;
wrapperLodash_default.stubFalse = util_default_default.stubFalse;
wrapperLodash_default.stubObject = util_default_default.stubObject;
wrapperLodash_default.stubString = util_default_default.stubString;
wrapperLodash_default.stubTrue = util_default_default.stubTrue;
wrapperLodash_default.multiply = math_default_default.multiply;
wrapperLodash_default.nth = array_default_default.nth;
wrapperLodash_default.noop = util_default_default.noop;
wrapperLodash_default.now = date_default_default.now;
wrapperLodash_default.pad = string_default_default.pad;
wrapperLodash_default.padEnd = string_default_default.padEnd;
wrapperLodash_default.padStart = string_default_default.padStart;
wrapperLodash_default.parseInt = string_default_default.parseInt;
wrapperLodash_default.random = number_default_default.random;
wrapperLodash_default.reduce = collection_default_default.reduce;
wrapperLodash_default.reduceRight = collection_default_default.reduceRight;
wrapperLodash_default.repeat = string_default_default.repeat;
wrapperLodash_default.replace = string_default_default.replace;
wrapperLodash_default.result = object_default_default.result;
wrapperLodash_default.round = math_default_default.round;
wrapperLodash_default.sample = collection_default_default.sample;
wrapperLodash_default.size = collection_default_default.size;
wrapperLodash_default.snakeCase = string_default_default.snakeCase;
wrapperLodash_default.some = collection_default_default.some;
wrapperLodash_default.sortedIndex = array_default_default.sortedIndex;
wrapperLodash_default.sortedIndexBy = array_default_default.sortedIndexBy;
wrapperLodash_default.sortedIndexOf = array_default_default.sortedIndexOf;
wrapperLodash_default.sortedLastIndex = array_default_default.sortedLastIndex;
wrapperLodash_default.sortedLastIndexBy = array_default_default.sortedLastIndexBy;
wrapperLodash_default.sortedLastIndexOf = array_default_default.sortedLastIndexOf;
wrapperLodash_default.startCase = string_default_default.startCase;
wrapperLodash_default.startsWith = string_default_default.startsWith;
wrapperLodash_default.subtract = math_default_default.subtract;
wrapperLodash_default.sum = math_default_default.sum;
wrapperLodash_default.sumBy = math_default_default.sumBy;
wrapperLodash_default.template = string_default_default.template;
wrapperLodash_default.times = util_default_default.times;
wrapperLodash_default.toFinite = lang_default_default.toFinite;
wrapperLodash_default.toInteger = toInteger_default;
wrapperLodash_default.toLength = lang_default_default.toLength;
wrapperLodash_default.toLower = string_default_default.toLower;
wrapperLodash_default.toNumber = lang_default_default.toNumber;
wrapperLodash_default.toSafeInteger = lang_default_default.toSafeInteger;
wrapperLodash_default.toString = lang_default_default.toString;
wrapperLodash_default.toUpper = string_default_default.toUpper;
wrapperLodash_default.trim = string_default_default.trim;
wrapperLodash_default.trimEnd = string_default_default.trimEnd;
wrapperLodash_default.trimStart = string_default_default.trimStart;
wrapperLodash_default.truncate = string_default_default.truncate;
wrapperLodash_default.unescape = string_default_default.unescape;
wrapperLodash_default.uniqueId = util_default_default.uniqueId;
wrapperLodash_default.upperCase = string_default_default.upperCase;
wrapperLodash_default.upperFirst = string_default_default.upperFirst;
wrapperLodash_default.each = collection_default_default.forEach;
wrapperLodash_default.eachRight = collection_default_default.forEachRight;
wrapperLodash_default.first = array_default_default.head;
mixin2(wrapperLodash_default, function() {
  var source = {};
  baseForOwn_default(wrapperLodash_default, function(func, methodName) {
    if (!hasOwnProperty25.call(wrapperLodash_default.prototype, methodName)) {
      source[methodName] = func;
    }
  });
  return source;
}(), { "chain": false });
wrapperLodash_default.VERSION = VERSION;
(wrapperLodash_default.templateSettings = string_default_default.templateSettings).imports._ = wrapperLodash_default;
arrayEach_default(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
  wrapperLodash_default[methodName].placeholder = wrapperLodash_default;
});
arrayEach_default(["drop", "take"], function(methodName, index) {
  LazyWrapper_default.prototype[methodName] = function(n5) {
    n5 = n5 === void 0 ? 1 : nativeMax17(toInteger_default(n5), 0);
    var result2 = this.__filtered__ && !index ? new LazyWrapper_default(this) : this.clone();
    if (result2.__filtered__) {
      result2.__takeCount__ = nativeMin15(n5, result2.__takeCount__);
    } else {
      result2.__views__.push({
        "size": nativeMin15(n5, MAX_ARRAY_LENGTH7),
        "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
      });
    }
    return result2;
  };
  LazyWrapper_default.prototype[methodName + "Right"] = function(n5) {
    return this.reverse()[methodName](n5).reverse();
  };
});
arrayEach_default(["filter", "map", "takeWhile"], function(methodName, index) {
  var type = index + 1, isFilter = type == LAZY_FILTER_FLAG2 || type == LAZY_WHILE_FLAG;
  LazyWrapper_default.prototype[methodName] = function(iteratee2) {
    var result2 = this.clone();
    result2.__iteratees__.push({
      "iteratee": baseIteratee_default(iteratee2, 3),
      "type": type
    });
    result2.__filtered__ = result2.__filtered__ || isFilter;
    return result2;
  };
});
arrayEach_default(["head", "last"], function(methodName, index) {
  var takeName = "take" + (index ? "Right" : "");
  LazyWrapper_default.prototype[methodName] = function() {
    return this[takeName](1).value()[0];
  };
});
arrayEach_default(["initial", "tail"], function(methodName, index) {
  var dropName = "drop" + (index ? "" : "Right");
  LazyWrapper_default.prototype[methodName] = function() {
    return this.__filtered__ ? new LazyWrapper_default(this) : this[dropName](1);
  };
});
LazyWrapper_default.prototype.compact = function() {
  return this.filter(identity_default);
};
LazyWrapper_default.prototype.find = function(predicate) {
  return this.filter(predicate).head();
};
LazyWrapper_default.prototype.findLast = function(predicate) {
  return this.reverse().find(predicate);
};
LazyWrapper_default.prototype.invokeMap = baseRest_default(function(path, args) {
  if (typeof path == "function") {
    return new LazyWrapper_default(this);
  }
  return this.map(function(value) {
    return baseInvoke_default(value, path, args);
  });
});
LazyWrapper_default.prototype.reject = function(predicate) {
  return this.filter(negate_default(baseIteratee_default(predicate)));
};
LazyWrapper_default.prototype.slice = function(start, end) {
  start = toInteger_default(start);
  var result2 = this;
  if (result2.__filtered__ && (start > 0 || end < 0)) {
    return new LazyWrapper_default(result2);
  }
  if (start < 0) {
    result2 = result2.takeRight(-start);
  } else if (start) {
    result2 = result2.drop(start);
  }
  if (end !== void 0) {
    end = toInteger_default(end);
    result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
  }
  return result2;
};
LazyWrapper_default.prototype.takeRightWhile = function(predicate) {
  return this.reverse().takeWhile(predicate).reverse();
};
LazyWrapper_default.prototype.toArray = function() {
  return this.take(MAX_ARRAY_LENGTH7);
};
baseForOwn_default(LazyWrapper_default.prototype, function(func, methodName) {
  var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = wrapperLodash_default[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
  if (!lodashFunc) {
    return;
  }
  wrapperLodash_default.prototype[methodName] = function() {
    var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper_default, iteratee2 = args[0], useLazy = isLazy || isArray_default(value);
    var interceptor = function(value2) {
      var result3 = lodashFunc.apply(wrapperLodash_default, arrayPush_default([value2], args));
      return isTaker && chainAll ? result3[0] : result3;
    };
    if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
      isLazy = useLazy = false;
    }
    var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
    if (!retUnwrapped && useLazy) {
      value = onlyLazy ? value : new LazyWrapper_default(this);
      var result2 = func.apply(value, args);
      result2.__actions__.push({ "func": thru_default, "args": [interceptor], "thisArg": void 0 });
      return new LodashWrapper_default(result2, chainAll);
    }
    if (isUnwrapped && onlyLazy) {
      return func.apply(this, args);
    }
    result2 = this.thru(interceptor);
    return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
  };
});
arrayEach_default(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
  var func = arrayProto6[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
  wrapperLodash_default.prototype[methodName] = function() {
    var args = arguments;
    if (retUnwrapped && !this.__chain__) {
      var value = this.value();
      return func.apply(isArray_default(value) ? value : [], args);
    }
    return this[chainName](function(value2) {
      return func.apply(isArray_default(value2) ? value2 : [], args);
    });
  };
});
baseForOwn_default(LazyWrapper_default.prototype, function(func, methodName) {
  var lodashFunc = wrapperLodash_default[methodName];
  if (lodashFunc) {
    var key = lodashFunc.name + "";
    if (!hasOwnProperty25.call(realNames_default, key)) {
      realNames_default[key] = [];
    }
    realNames_default[key].push({ "name": methodName, "func": lodashFunc });
  }
});
realNames_default[createHybrid_default(void 0, WRAP_BIND_KEY_FLAG7).name] = [{
  "name": "wrapper",
  "func": void 0
}];
LazyWrapper_default.prototype.clone = lazyClone_default;
LazyWrapper_default.prototype.reverse = lazyReverse_default;
LazyWrapper_default.prototype.value = lazyValue_default;
wrapperLodash_default.prototype.at = seq_default_default.at;
wrapperLodash_default.prototype.chain = seq_default_default.wrapperChain;
wrapperLodash_default.prototype.commit = seq_default_default.commit;
wrapperLodash_default.prototype.next = seq_default_default.next;
wrapperLodash_default.prototype.plant = seq_default_default.plant;
wrapperLodash_default.prototype.reverse = seq_default_default.reverse;
wrapperLodash_default.prototype.toJSON = wrapperLodash_default.prototype.valueOf = wrapperLodash_default.prototype.value = seq_default_default.value;
wrapperLodash_default.prototype.first = wrapperLodash_default.prototype.head;
if (symIterator2) {
  wrapperLodash_default.prototype[symIterator2] = seq_default_default.toIterator;
}

// node_modules/uuid/dist/esm-browser/rng.js
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}

// node_modules/uuid/dist/esm-browser/regex.js
var regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

// node_modules/uuid/dist/esm-browser/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
var validate_default = validate;

// node_modules/uuid/dist/esm-browser/stringify.js
var byteToHex = [];
for (i8 = 0; i8 < 256; ++i8) {
  byteToHex.push((i8 + 256).toString(16).substr(1));
}
var i8;
function stringify(arr) {
  var offset3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex[arr[offset3 + 0]] + byteToHex[arr[offset3 + 1]] + byteToHex[arr[offset3 + 2]] + byteToHex[arr[offset3 + 3]] + "-" + byteToHex[arr[offset3 + 4]] + byteToHex[arr[offset3 + 5]] + "-" + byteToHex[arr[offset3 + 6]] + byteToHex[arr[offset3 + 7]] + "-" + byteToHex[arr[offset3 + 8]] + byteToHex[arr[offset3 + 9]] + "-" + byteToHex[arr[offset3 + 10]] + byteToHex[arr[offset3 + 11]] + byteToHex[arr[offset3 + 12]] + byteToHex[arr[offset3 + 13]] + byteToHex[arr[offset3 + 14]] + byteToHex[arr[offset3 + 15]]).toLowerCase();
  if (!validate_default(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
var stringify_default = stringify;

// node_modules/uuid/dist/esm-browser/parse.js
function parse(uuid) {
  if (!validate_default(uuid)) {
    throw TypeError("Invalid UUID");
  }
  var v9;
  var arr = new Uint8Array(16);
  arr[0] = (v9 = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v9 >>> 16 & 255;
  arr[2] = v9 >>> 8 & 255;
  arr[3] = v9 & 255;
  arr[4] = (v9 = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v9 & 255;
  arr[6] = (v9 = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v9 & 255;
  arr[8] = (v9 = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v9 & 255;
  arr[10] = (v9 = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
  arr[11] = v9 / 4294967296 & 255;
  arr[12] = v9 >>> 24 & 255;
  arr[13] = v9 >>> 16 & 255;
  arr[14] = v9 >>> 8 & 255;
  arr[15] = v9 & 255;
  return arr;
}
var parse_default = parse;

// node_modules/uuid/dist/esm-browser/v35.js
function stringToBytes(str) {
  str = unescape(encodeURIComponent(str));
  var bytes = [];
  for (var i8 = 0; i8 < str.length; ++i8) {
    bytes.push(str.charCodeAt(i8));
  }
  return bytes;
}
var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
var URL2 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function v35_default(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset3) {
    if (typeof value === "string") {
      value = stringToBytes(value);
    }
    if (typeof namespace === "string") {
      namespace = parse_default(namespace);
    }
    if (namespace.length !== 16) {
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    }
    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 15 | version;
    bytes[8] = bytes[8] & 63 | 128;
    if (buf) {
      offset3 = offset3 || 0;
      for (var i8 = 0; i8 < 16; ++i8) {
        buf[offset3 + i8] = bytes[i8];
      }
      return buf;
    }
    return stringify_default(bytes);
  }
  try {
    generateUUID.name = name;
  } catch (err) {
  }
  generateUUID.DNS = DNS;
  generateUUID.URL = URL2;
  return generateUUID;
}

// node_modules/uuid/dist/esm-browser/md5.js
function md5(bytes) {
  if (typeof bytes === "string") {
    var msg = unescape(encodeURIComponent(bytes));
    bytes = new Uint8Array(msg.length);
    for (var i8 = 0; i8 < msg.length; ++i8) {
      bytes[i8] = msg.charCodeAt(i8);
    }
  }
  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = "0123456789abcdef";
  for (var i8 = 0; i8 < length32; i8 += 8) {
    var x4 = input[i8 >> 5] >>> i8 % 32 & 255;
    var hex = parseInt(hexTab.charAt(x4 >>> 4 & 15) + hexTab.charAt(x4 & 15), 16);
    output.push(hex);
  }
  return output;
}
function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
function wordsToMd5(x4, len) {
  x4[len >> 5] |= 128 << len % 32;
  x4[getOutputLength(len) - 1] = len;
  var a7 = 1732584193;
  var b5 = -271733879;
  var c6 = -1732584194;
  var d7 = 271733878;
  for (var i8 = 0; i8 < x4.length; i8 += 16) {
    var olda = a7;
    var oldb = b5;
    var oldc = c6;
    var oldd = d7;
    a7 = md5ff(a7, b5, c6, d7, x4[i8], 7, -680876936);
    d7 = md5ff(d7, a7, b5, c6, x4[i8 + 1], 12, -389564586);
    c6 = md5ff(c6, d7, a7, b5, x4[i8 + 2], 17, 606105819);
    b5 = md5ff(b5, c6, d7, a7, x4[i8 + 3], 22, -1044525330);
    a7 = md5ff(a7, b5, c6, d7, x4[i8 + 4], 7, -176418897);
    d7 = md5ff(d7, a7, b5, c6, x4[i8 + 5], 12, 1200080426);
    c6 = md5ff(c6, d7, a7, b5, x4[i8 + 6], 17, -1473231341);
    b5 = md5ff(b5, c6, d7, a7, x4[i8 + 7], 22, -45705983);
    a7 = md5ff(a7, b5, c6, d7, x4[i8 + 8], 7, 1770035416);
    d7 = md5ff(d7, a7, b5, c6, x4[i8 + 9], 12, -1958414417);
    c6 = md5ff(c6, d7, a7, b5, x4[i8 + 10], 17, -42063);
    b5 = md5ff(b5, c6, d7, a7, x4[i8 + 11], 22, -1990404162);
    a7 = md5ff(a7, b5, c6, d7, x4[i8 + 12], 7, 1804603682);
    d7 = md5ff(d7, a7, b5, c6, x4[i8 + 13], 12, -40341101);
    c6 = md5ff(c6, d7, a7, b5, x4[i8 + 14], 17, -1502002290);
    b5 = md5ff(b5, c6, d7, a7, x4[i8 + 15], 22, 1236535329);
    a7 = md5gg(a7, b5, c6, d7, x4[i8 + 1], 5, -165796510);
    d7 = md5gg(d7, a7, b5, c6, x4[i8 + 6], 9, -1069501632);
    c6 = md5gg(c6, d7, a7, b5, x4[i8 + 11], 14, 643717713);
    b5 = md5gg(b5, c6, d7, a7, x4[i8], 20, -373897302);
    a7 = md5gg(a7, b5, c6, d7, x4[i8 + 5], 5, -701558691);
    d7 = md5gg(d7, a7, b5, c6, x4[i8 + 10], 9, 38016083);
    c6 = md5gg(c6, d7, a7, b5, x4[i8 + 15], 14, -660478335);
    b5 = md5gg(b5, c6, d7, a7, x4[i8 + 4], 20, -405537848);
    a7 = md5gg(a7, b5, c6, d7, x4[i8 + 9], 5, 568446438);
    d7 = md5gg(d7, a7, b5, c6, x4[i8 + 14], 9, -1019803690);
    c6 = md5gg(c6, d7, a7, b5, x4[i8 + 3], 14, -187363961);
    b5 = md5gg(b5, c6, d7, a7, x4[i8 + 8], 20, 1163531501);
    a7 = md5gg(a7, b5, c6, d7, x4[i8 + 13], 5, -1444681467);
    d7 = md5gg(d7, a7, b5, c6, x4[i8 + 2], 9, -51403784);
    c6 = md5gg(c6, d7, a7, b5, x4[i8 + 7], 14, 1735328473);
    b5 = md5gg(b5, c6, d7, a7, x4[i8 + 12], 20, -1926607734);
    a7 = md5hh(a7, b5, c6, d7, x4[i8 + 5], 4, -378558);
    d7 = md5hh(d7, a7, b5, c6, x4[i8 + 8], 11, -2022574463);
    c6 = md5hh(c6, d7, a7, b5, x4[i8 + 11], 16, 1839030562);
    b5 = md5hh(b5, c6, d7, a7, x4[i8 + 14], 23, -35309556);
    a7 = md5hh(a7, b5, c6, d7, x4[i8 + 1], 4, -1530992060);
    d7 = md5hh(d7, a7, b5, c6, x4[i8 + 4], 11, 1272893353);
    c6 = md5hh(c6, d7, a7, b5, x4[i8 + 7], 16, -155497632);
    b5 = md5hh(b5, c6, d7, a7, x4[i8 + 10], 23, -1094730640);
    a7 = md5hh(a7, b5, c6, d7, x4[i8 + 13], 4, 681279174);
    d7 = md5hh(d7, a7, b5, c6, x4[i8], 11, -358537222);
    c6 = md5hh(c6, d7, a7, b5, x4[i8 + 3], 16, -722521979);
    b5 = md5hh(b5, c6, d7, a7, x4[i8 + 6], 23, 76029189);
    a7 = md5hh(a7, b5, c6, d7, x4[i8 + 9], 4, -640364487);
    d7 = md5hh(d7, a7, b5, c6, x4[i8 + 12], 11, -421815835);
    c6 = md5hh(c6, d7, a7, b5, x4[i8 + 15], 16, 530742520);
    b5 = md5hh(b5, c6, d7, a7, x4[i8 + 2], 23, -995338651);
    a7 = md5ii(a7, b5, c6, d7, x4[i8], 6, -198630844);
    d7 = md5ii(d7, a7, b5, c6, x4[i8 + 7], 10, 1126891415);
    c6 = md5ii(c6, d7, a7, b5, x4[i8 + 14], 15, -1416354905);
    b5 = md5ii(b5, c6, d7, a7, x4[i8 + 5], 21, -57434055);
    a7 = md5ii(a7, b5, c6, d7, x4[i8 + 12], 6, 1700485571);
    d7 = md5ii(d7, a7, b5, c6, x4[i8 + 3], 10, -1894986606);
    c6 = md5ii(c6, d7, a7, b5, x4[i8 + 10], 15, -1051523);
    b5 = md5ii(b5, c6, d7, a7, x4[i8 + 1], 21, -2054922799);
    a7 = md5ii(a7, b5, c6, d7, x4[i8 + 8], 6, 1873313359);
    d7 = md5ii(d7, a7, b5, c6, x4[i8 + 15], 10, -30611744);
    c6 = md5ii(c6, d7, a7, b5, x4[i8 + 6], 15, -1560198380);
    b5 = md5ii(b5, c6, d7, a7, x4[i8 + 13], 21, 1309151649);
    a7 = md5ii(a7, b5, c6, d7, x4[i8 + 4], 6, -145523070);
    d7 = md5ii(d7, a7, b5, c6, x4[i8 + 11], 10, -1120210379);
    c6 = md5ii(c6, d7, a7, b5, x4[i8 + 2], 15, 718787259);
    b5 = md5ii(b5, c6, d7, a7, x4[i8 + 9], 21, -343485551);
    a7 = safeAdd(a7, olda);
    b5 = safeAdd(b5, oldb);
    c6 = safeAdd(c6, oldc);
    d7 = safeAdd(d7, oldd);
  }
  return [a7, b5, c6, d7];
}
function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }
  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));
  for (var i8 = 0; i8 < length8; i8 += 8) {
    output[i8 >> 5] |= (input[i8 / 8] & 255) << i8 % 32;
  }
  return output;
}
function safeAdd(x4, y5) {
  var lsw = (x4 & 65535) + (y5 & 65535);
  var msw = (x4 >> 16) + (y5 >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 65535;
}
function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
function md5cmn(q4, a7, b5, x4, s7, t5) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a7, q4), safeAdd(x4, t5)), s7), b5);
}
function md5ff(a7, b5, c6, d7, x4, s7, t5) {
  return md5cmn(b5 & c6 | ~b5 & d7, a7, b5, x4, s7, t5);
}
function md5gg(a7, b5, c6, d7, x4, s7, t5) {
  return md5cmn(b5 & d7 | c6 & ~d7, a7, b5, x4, s7, t5);
}
function md5hh(a7, b5, c6, d7, x4, s7, t5) {
  return md5cmn(b5 ^ c6 ^ d7, a7, b5, x4, s7, t5);
}
function md5ii(a7, b5, c6, d7, x4, s7, t5) {
  return md5cmn(c6 ^ (b5 | ~d7), a7, b5, x4, s7, t5);
}
var md5_default = md5;

// node_modules/uuid/dist/esm-browser/v3.js
var v3 = v35_default("v3", 48, md5_default);

// node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset3) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset3 = offset3 || 0;
    for (var i8 = 0; i8 < 16; ++i8) {
      buf[offset3 + i8] = rnds[i8];
    }
    return buf;
  }
  return stringify_default(rnds);
}
var v4_default = v4;

// node_modules/uuid/dist/esm-browser/sha1.js
function f(s7, x4, y5, z4) {
  switch (s7) {
    case 0:
      return x4 & y5 ^ ~x4 & z4;
    case 1:
      return x4 ^ y5 ^ z4;
    case 2:
      return x4 & y5 ^ x4 & z4 ^ y5 & z4;
    case 3:
      return x4 ^ y5 ^ z4;
  }
}
function ROTL(x4, n5) {
  return x4 << n5 | x4 >>> 32 - n5;
}
function sha1(bytes) {
  var K2 = [1518500249, 1859775393, 2400959708, 3395469782];
  var H3 = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof bytes === "string") {
    var msg = unescape(encodeURIComponent(bytes));
    bytes = [];
    for (var i8 = 0; i8 < msg.length; ++i8) {
      bytes.push(msg.charCodeAt(i8));
    }
  } else if (!Array.isArray(bytes)) {
    bytes = Array.prototype.slice.call(bytes);
  }
  bytes.push(128);
  var l7 = bytes.length / 4 + 2;
  var N3 = Math.ceil(l7 / 16);
  var M3 = new Array(N3);
  for (var _i = 0; _i < N3; ++_i) {
    var arr = new Uint32Array(16);
    for (var j4 = 0; j4 < 16; ++j4) {
      arr[j4] = bytes[_i * 64 + j4 * 4] << 24 | bytes[_i * 64 + j4 * 4 + 1] << 16 | bytes[_i * 64 + j4 * 4 + 2] << 8 | bytes[_i * 64 + j4 * 4 + 3];
    }
    M3[_i] = arr;
  }
  M3[N3 - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M3[N3 - 1][14] = Math.floor(M3[N3 - 1][14]);
  M3[N3 - 1][15] = (bytes.length - 1) * 8 & 4294967295;
  for (var _i2 = 0; _i2 < N3; ++_i2) {
    var W2 = new Uint32Array(80);
    for (var t5 = 0; t5 < 16; ++t5) {
      W2[t5] = M3[_i2][t5];
    }
    for (var _t = 16; _t < 80; ++_t) {
      W2[_t] = ROTL(W2[_t - 3] ^ W2[_t - 8] ^ W2[_t - 14] ^ W2[_t - 16], 1);
    }
    var a7 = H3[0];
    var b5 = H3[1];
    var c6 = H3[2];
    var d7 = H3[3];
    var e6 = H3[4];
    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s7 = Math.floor(_t2 / 20);
      var T4 = ROTL(a7, 5) + f(s7, b5, c6, d7) + e6 + K2[s7] + W2[_t2] >>> 0;
      e6 = d7;
      d7 = c6;
      c6 = ROTL(b5, 30) >>> 0;
      b5 = a7;
      a7 = T4;
    }
    H3[0] = H3[0] + a7 >>> 0;
    H3[1] = H3[1] + b5 >>> 0;
    H3[2] = H3[2] + c6 >>> 0;
    H3[3] = H3[3] + d7 >>> 0;
    H3[4] = H3[4] + e6 >>> 0;
  }
  return [H3[0] >> 24 & 255, H3[0] >> 16 & 255, H3[0] >> 8 & 255, H3[0] & 255, H3[1] >> 24 & 255, H3[1] >> 16 & 255, H3[1] >> 8 & 255, H3[1] & 255, H3[2] >> 24 & 255, H3[2] >> 16 & 255, H3[2] >> 8 & 255, H3[2] & 255, H3[3] >> 24 & 255, H3[3] >> 16 & 255, H3[3] >> 8 & 255, H3[3] & 255, H3[4] >> 24 & 255, H3[4] >> 16 & 255, H3[4] >> 8 & 255, H3[4] & 255];
}
var sha1_default = sha1;

// node_modules/uuid/dist/esm-browser/v5.js
var v5 = v35_default("v5", 80, sha1_default);

// node_modules/@contentstack/live-preview-utils/dist/modern/types/types.js
var ILivePreviewModeConfig = ((ILivePreviewModeConfig2) => {
  ILivePreviewModeConfig2[ILivePreviewModeConfig2["PREVIEW"] = 1] = "PREVIEW";
  ILivePreviewModeConfig2[ILivePreviewModeConfig2["BUILDER"] = 2] = "BUILDER";
  return ILivePreviewModeConfig2;
})(ILivePreviewModeConfig || {});
var ILivePreviewWindowType = ((ILivePreviewWindowType2) => {
  ILivePreviewWindowType2["PREVIEW"] = "preview";
  ILivePreviewWindowType2["PREVIEW_SHARE"] = "preview-share";
  ILivePreviewWindowType2["BUILDER"] = "builder";
  ILivePreviewWindowType2["INDEPENDENT"] = "independent";
  return ILivePreviewWindowType2;
})(ILivePreviewWindowType || {});

// node_modules/@contentstack/live-preview-utils/dist/modern/configManager/config.default.js
function getUserInitData() {
  return {
    ssr: true,
    enable: true,
    debug: false,
    cleanCslpOnProduction: true,
    editButton: {
      enable: true,
      exclude: [],
      position: "top",
      includeByQueryParameter: true
    },
    editInVisualBuilderButton: {
      enable: true,
      position: "bottom-right"
    },
    mode: "preview",
    stackDetails: {
      apiKey: "",
      environment: "",
      branch: ""
    },
    clientUrlParams: {
      protocol: "https",
      host: "app.contentstack.com",
      port: 443
    },
    stackSdk: {
      live_preview: {},
      environment: ""
    },
    runScriptsOnUpdate: false
  };
}
function getDefaultConfig() {
  return {
    ssr: true,
    enable: true,
    debug: false,
    cleanCslpOnProduction: true,
    editButton: {
      enable: true,
      exclude: [],
      position: "top",
      includeByQueryParameter: true
    },
    editInVisualBuilderButton: {
      enable: true,
      position: "bottom-right"
    },
    hash: "",
    mode: 1,
    windowType: ILivePreviewWindowType.INDEPENDENT,
    stackDetails: {
      apiKey: "",
      environment: "",
      contentTypeUid: "",
      entryUid: "",
      locale: "en-us",
      branch: "main",
      masterLocale: "en-us"
    },
    clientUrlParams: {
      protocol: "https",
      host: "app.contentstack.com",
      port: 443,
      url: "https://app.contentstack.com:443"
    },
    stackSdk: {
      live_preview: {},
      headers: {
        api_key: ""
      },
      environment: ""
    },
    runScriptsOnUpdate: false,
    onChange() {
      return;
    },
    elements: {
      highlightedElement: null
    },
    collab: {
      enable: false,
      fromShare: false,
      pauseFeedback: false,
      isFeedbackMode: false,
      inviteMetadata: {
        currentUser: {
          email: "",
          uid: ""
        },
        users: [],
        inviteUid: ""
      },
      payload: []
    }
  };
}

// node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var t;
var i;
var o;
var r;
var f2;
var e;
var c = {};
var s = [];
var a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var h = Array.isArray;
function v(n5, l7) {
  for (var u7 in l7) n5[u7] = l7[u7];
  return n5;
}
function p(n5) {
  var l7 = n5.parentNode;
  l7 && l7.removeChild(n5);
}
function y(l7, u7, t5) {
  var i8, o7, r5, f8 = {};
  for (r5 in u7) "key" == r5 ? i8 = u7[r5] : "ref" == r5 ? o7 = u7[r5] : f8[r5] = u7[r5];
  if (arguments.length > 2 && (f8.children = arguments.length > 3 ? n.call(arguments, 2) : t5), "function" == typeof l7 && null != l7.defaultProps) for (r5 in l7.defaultProps) void 0 === f8[r5] && (f8[r5] = l7.defaultProps[r5]);
  return d(l7, f8, i8, o7, null);
}
function d(n5, t5, i8, o7, r5) {
  var f8 = { type: n5, props: t5, key: i8, ref: o7, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r5 ? ++u : r5, __i: -1, __u: 0 };
  return null == r5 && null != l.vnode && l.vnode(f8), f8;
}
function _() {
  return { current: null };
}
function g(n5) {
  return n5.children;
}
function b(n5, l7) {
  this.props = n5, this.context = l7;
}
function m(n5, l7) {
  if (null == l7) return n5.__ ? m(n5.__, n5.__i + 1) : null;
  for (var u7; l7 < n5.__k.length; l7++) if (null != (u7 = n5.__k[l7]) && null != u7.__e) return u7.__e;
  return "function" == typeof n5.type ? m(n5) : null;
}
function w(n5, u7, t5) {
  var i8, o7 = n5.__v, r5 = o7.__e, f8 = n5.__P;
  if (f8) return (i8 = v({}, o7)).__v = o7.__v + 1, l.vnode && l.vnode(i8), M(f8, i8, o7, n5.__n, void 0 !== f8.ownerSVGElement, 32 & o7.__u ? [r5] : null, u7, null == r5 ? m(o7) : r5, !!(32 & o7.__u), t5), i8.__v = o7.__v, i8.__.__k[i8.__i] = i8, i8.__d = void 0, i8.__e != r5 && k(i8), i8;
}
function k(n5) {
  var l7, u7;
  if (null != (n5 = n5.__) && null != n5.__c) {
    for (n5.__e = n5.__c.base = null, l7 = 0; l7 < n5.__k.length; l7++) if (null != (u7 = n5.__k[l7]) && null != u7.__e) {
      n5.__e = n5.__c.base = u7.__e;
      break;
    }
    return k(n5);
  }
}
function x(n5) {
  (!n5.__d && (n5.__d = true) && i.push(n5) && !C.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(C);
}
function C() {
  var n5, u7, t5, o7 = [], r5 = [];
  for (i.sort(f2); n5 = i.shift(); ) n5.__d && (t5 = i.length, u7 = w(n5, o7, r5) || u7, 0 === t5 || i.length > t5 ? (j(o7, u7, r5), r5.length = o7.length = 0, u7 = void 0, i.sort(f2)) : u7 && l.__c && l.__c(u7, s));
  u7 && j(o7, u7, r5), C.__r = 0;
}
function P(n5, l7, u7, t5, i8, o7, r5, f8, e6, a7, h6) {
  var v9, p6, y5, d7, _4, g7 = t5 && t5.__k || s, b5 = l7.length;
  for (u7.__d = e6, S(u7, l7, g7), e6 = u7.__d, v9 = 0; v9 < b5; v9++) null != (y5 = u7.__k[v9]) && "boolean" != typeof y5 && "function" != typeof y5 && (p6 = -1 === y5.__i ? c : g7[y5.__i] || c, y5.__i = v9, M(n5, y5, p6, i8, o7, r5, f8, e6, a7, h6), d7 = y5.__e, y5.ref && p6.ref != y5.ref && (p6.ref && N(p6.ref, null, y5), h6.push(y5.ref, y5.__c || d7, y5)), null == _4 && null != d7 && (_4 = d7), 65536 & y5.__u || p6.__k === y5.__k ? e6 = $(y5, e6, n5) : "function" == typeof y5.type && void 0 !== y5.__d ? e6 = y5.__d : d7 && (e6 = d7.nextSibling), y5.__d = void 0, y5.__u &= -196609);
  u7.__d = e6, u7.__e = _4;
}
function S(n5, l7, u7) {
  var t5, i8, o7, r5, f8, e6 = l7.length, c6 = u7.length, s7 = c6, a7 = 0;
  for (n5.__k = [], t5 = 0; t5 < e6; t5++) null != (i8 = n5.__k[t5] = null == (i8 = l7[t5]) || "boolean" == typeof i8 || "function" == typeof i8 ? null : "string" == typeof i8 || "number" == typeof i8 || "bigint" == typeof i8 || i8.constructor == String ? d(null, i8, null, null, i8) : h(i8) ? d(g, { children: i8 }, null, null, null) : void 0 === i8.constructor && i8.__b > 0 ? d(i8.type, i8.props, i8.key, i8.ref ? i8.ref : null, i8.__v) : i8) ? (i8.__ = n5, i8.__b = n5.__b + 1, f8 = I(i8, u7, r5 = t5 + a7, s7), i8.__i = f8, o7 = null, -1 !== f8 && (s7--, (o7 = u7[f8]) && (o7.__u |= 131072)), null == o7 || null === o7.__v ? (-1 == f8 && a7--, "function" != typeof i8.type && (i8.__u |= 65536)) : f8 !== r5 && (f8 === r5 + 1 ? a7++ : f8 > r5 ? s7 > e6 - r5 ? a7 += f8 - r5 : a7-- : a7 = f8 < r5 && f8 == r5 - 1 ? f8 - r5 : 0, f8 !== t5 + a7 && (i8.__u |= 65536))) : (o7 = u7[t5]) && null == o7.key && o7.__e && 0 == (131072 & o7.__u) && (o7.__e == n5.__d && (n5.__d = m(o7)), O(o7, o7, false), u7[t5] = null, s7--);
  if (s7) for (t5 = 0; t5 < c6; t5++) null != (o7 = u7[t5]) && 0 == (131072 & o7.__u) && (o7.__e == n5.__d && (n5.__d = m(o7)), O(o7, o7));
}
function $(n5, l7, u7) {
  var t5, i8;
  if ("function" == typeof n5.type) {
    for (t5 = n5.__k, i8 = 0; t5 && i8 < t5.length; i8++) t5[i8] && (t5[i8].__ = n5, l7 = $(t5[i8], l7, u7));
    return l7;
  }
  n5.__e != l7 && (u7.insertBefore(n5.__e, l7 || null), l7 = n5.__e);
  do {
    l7 = l7 && l7.nextSibling;
  } while (null != l7 && 8 === l7.nodeType);
  return l7;
}
function H(n5, l7) {
  return l7 = l7 || [], null == n5 || "boolean" == typeof n5 || (h(n5) ? n5.some(function(n6) {
    H(n6, l7);
  }) : l7.push(n5)), l7;
}
function I(n5, l7, u7, t5) {
  var i8 = n5.key, o7 = n5.type, r5 = u7 - 1, f8 = u7 + 1, e6 = l7[u7];
  if (null === e6 || e6 && i8 == e6.key && o7 === e6.type) return u7;
  if (t5 > (null != e6 && 0 == (131072 & e6.__u) ? 1 : 0)) for (; r5 >= 0 || f8 < l7.length; ) {
    if (r5 >= 0) {
      if ((e6 = l7[r5]) && 0 == (131072 & e6.__u) && i8 == e6.key && o7 === e6.type) return r5;
      r5--;
    }
    if (f8 < l7.length) {
      if ((e6 = l7[f8]) && 0 == (131072 & e6.__u) && i8 == e6.key && o7 === e6.type) return f8;
      f8++;
    }
  }
  return -1;
}
function T(n5, l7, u7) {
  "-" === l7[0] ? n5.setProperty(l7, null == u7 ? "" : u7) : n5[l7] = null == u7 ? "" : "number" != typeof u7 || a.test(l7) ? u7 : u7 + "px";
}
function A(n5, l7, u7, t5, i8) {
  var o7;
  n: if ("style" === l7) if ("string" == typeof u7) n5.style.cssText = u7;
  else {
    if ("string" == typeof t5 && (n5.style.cssText = t5 = ""), t5) for (l7 in t5) u7 && l7 in u7 || T(n5.style, l7, "");
    if (u7) for (l7 in u7) t5 && u7[l7] === t5[l7] || T(n5.style, l7, u7[l7]);
  }
  else if ("o" === l7[0] && "n" === l7[1]) o7 = l7 !== (l7 = l7.replace(/(PointerCapture)$|Capture$/i, "$1")), l7 = l7.toLowerCase() in n5 ? l7.toLowerCase().slice(2) : l7.slice(2), n5.l || (n5.l = {}), n5.l[l7 + o7] = u7, u7 ? t5 ? u7.u = t5.u : (u7.u = Date.now(), n5.addEventListener(l7, o7 ? L : D, o7)) : n5.removeEventListener(l7, o7 ? L : D, o7);
  else {
    if (i8) l7 = l7.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" !== l7 && "height" !== l7 && "href" !== l7 && "list" !== l7 && "form" !== l7 && "tabIndex" !== l7 && "download" !== l7 && "rowSpan" !== l7 && "colSpan" !== l7 && "role" !== l7 && l7 in n5) try {
      n5[l7] = null == u7 ? "" : u7;
      break n;
    } catch (n6) {
    }
    "function" == typeof u7 || (null == u7 || false === u7 && "-" !== l7[4] ? n5.removeAttribute(l7) : n5.setAttribute(l7, u7));
  }
}
function D(n5) {
  if (this.l) {
    var u7 = this.l[n5.type + false];
    if (n5.t) {
      if (n5.t <= u7.u) return;
    } else n5.t = Date.now();
    return u7(l.event ? l.event(n5) : n5);
  }
}
function L(n5) {
  if (this.l) return this.l[n5.type + true](l.event ? l.event(n5) : n5);
}
function M(n5, u7, t5, i8, o7, r5, f8, e6, c6, s7) {
  var a7, p6, y5, d7, _4, m5, w6, k5, x4, C4, S2, $3, H3, I3, T4, A4 = u7.type;
  if (void 0 !== u7.constructor) return null;
  128 & t5.__u && (c6 = !!(32 & t5.__u), r5 = [e6 = u7.__e = t5.__e]), (a7 = l.__b) && a7(u7);
  n: if ("function" == typeof A4) try {
    if (k5 = u7.props, x4 = (a7 = A4.contextType) && i8[a7.__c], C4 = a7 ? x4 ? x4.props.value : a7.__ : i8, t5.__c ? w6 = (p6 = u7.__c = t5.__c).__ = p6.__E : ("prototype" in A4 && A4.prototype.render ? u7.__c = p6 = new A4(k5, C4) : (u7.__c = p6 = new b(k5, C4), p6.constructor = A4, p6.render = q), x4 && x4.sub(p6), p6.props = k5, p6.state || (p6.state = {}), p6.context = C4, p6.__n = i8, y5 = p6.__d = true, p6.__h = [], p6._sb = []), null == p6.__s && (p6.__s = p6.state), null != A4.getDerivedStateFromProps && (p6.__s == p6.state && (p6.__s = v({}, p6.__s)), v(p6.__s, A4.getDerivedStateFromProps(k5, p6.__s))), d7 = p6.props, _4 = p6.state, p6.__v = u7, y5) null == A4.getDerivedStateFromProps && null != p6.componentWillMount && p6.componentWillMount(), null != p6.componentDidMount && p6.__h.push(p6.componentDidMount);
    else {
      if (null == A4.getDerivedStateFromProps && k5 !== d7 && null != p6.componentWillReceiveProps && p6.componentWillReceiveProps(k5, C4), !p6.__e && (null != p6.shouldComponentUpdate && false === p6.shouldComponentUpdate(k5, p6.__s, C4) || u7.__v === t5.__v)) {
        for (u7.__v !== t5.__v && (p6.props = k5, p6.state = p6.__s, p6.__d = false), u7.__e = t5.__e, u7.__k = t5.__k, u7.__k.forEach(function(n6) {
          n6 && (n6.__ = u7);
        }), S2 = 0; S2 < p6._sb.length; S2++) p6.__h.push(p6._sb[S2]);
        p6._sb = [], p6.__h.length && f8.push(p6);
        break n;
      }
      null != p6.componentWillUpdate && p6.componentWillUpdate(k5, p6.__s, C4), null != p6.componentDidUpdate && p6.__h.push(function() {
        p6.componentDidUpdate(d7, _4, m5);
      });
    }
    if (p6.context = C4, p6.props = k5, p6.__P = n5, p6.__e = false, $3 = l.__r, H3 = 0, "prototype" in A4 && A4.prototype.render) {
      for (p6.state = p6.__s, p6.__d = false, $3 && $3(u7), a7 = p6.render(p6.props, p6.state, p6.context), I3 = 0; I3 < p6._sb.length; I3++) p6.__h.push(p6._sb[I3]);
      p6._sb = [];
    } else do {
      p6.__d = false, $3 && $3(u7), a7 = p6.render(p6.props, p6.state, p6.context), p6.state = p6.__s;
    } while (p6.__d && ++H3 < 25);
    p6.state = p6.__s, null != p6.getChildContext && (i8 = v(v({}, i8), p6.getChildContext())), y5 || null == p6.getSnapshotBeforeUpdate || (m5 = p6.getSnapshotBeforeUpdate(d7, _4)), P(n5, h(T4 = null != a7 && a7.type === g && null == a7.key ? a7.props.children : a7) ? T4 : [T4], u7, t5, i8, o7, r5, f8, e6, c6, s7), p6.base = u7.__e, u7.__u &= -161, p6.__h.length && f8.push(p6), w6 && (p6.__E = p6.__ = null);
  } catch (n6) {
    u7.__v = null, c6 || null != r5 ? (u7.__e = e6, u7.__u |= c6 ? 160 : 32, r5[r5.indexOf(e6)] = null) : (u7.__e = t5.__e, u7.__k = t5.__k), l.__e(n6, u7, t5);
  }
  else null == r5 && u7.__v === t5.__v ? (u7.__k = t5.__k, u7.__e = t5.__e) : u7.__e = z(t5.__e, u7, t5, i8, o7, r5, f8, c6, s7);
  (a7 = l.diffed) && a7(u7);
}
function j(n5, u7, t5) {
  for (var i8 = 0; i8 < t5.length; i8++) N(t5[i8], t5[++i8], t5[++i8]);
  l.__c && l.__c(u7, n5), n5.some(function(u8) {
    try {
      n5 = u8.__h, u8.__h = [], n5.some(function(n6) {
        n6.call(u8);
      });
    } catch (n6) {
      l.__e(n6, u8.__v);
    }
  });
}
function z(l7, u7, t5, i8, o7, r5, f8, e6, s7) {
  var a7, v9, y5, d7, _4, g7, b5, w6 = t5.props, k5 = u7.props, x4 = u7.type;
  if ("svg" === x4 && (o7 = true), null != r5) {
    for (a7 = 0; a7 < r5.length; a7++) if ((_4 = r5[a7]) && "setAttribute" in _4 == !!x4 && (x4 ? _4.localName === x4 : 3 === _4.nodeType)) {
      l7 = _4, r5[a7] = null;
      break;
    }
  }
  if (null == l7) {
    if (null === x4) return document.createTextNode(k5);
    l7 = o7 ? document.createElementNS("http://www.w3.org/2000/svg", x4) : document.createElement(x4, k5.is && k5), r5 = null, e6 = false;
  }
  if (null === x4) w6 === k5 || e6 && l7.data === k5 || (l7.data = k5);
  else {
    if (r5 = r5 && n.call(l7.childNodes), w6 = t5.props || c, !e6 && null != r5) for (w6 = {}, a7 = 0; a7 < l7.attributes.length; a7++) w6[(_4 = l7.attributes[a7]).name] = _4.value;
    for (a7 in w6) _4 = w6[a7], "children" == a7 || ("dangerouslySetInnerHTML" == a7 ? y5 = _4 : "key" === a7 || a7 in k5 || A(l7, a7, null, _4, o7));
    for (a7 in k5) _4 = k5[a7], "children" == a7 ? d7 = _4 : "dangerouslySetInnerHTML" == a7 ? v9 = _4 : "value" == a7 ? g7 = _4 : "checked" == a7 ? b5 = _4 : "key" === a7 || e6 && "function" != typeof _4 || w6[a7] === _4 || A(l7, a7, _4, w6[a7], o7);
    if (v9) e6 || y5 && (v9.__html === y5.__html || v9.__html === l7.innerHTML) || (l7.innerHTML = v9.__html), u7.__k = [];
    else if (y5 && (l7.innerHTML = ""), P(l7, h(d7) ? d7 : [d7], u7, t5, i8, o7 && "foreignObject" !== x4, r5, f8, r5 ? r5[0] : t5.__k && m(t5, 0), e6, s7), null != r5) for (a7 = r5.length; a7--; ) null != r5[a7] && p(r5[a7]);
    e6 || (a7 = "value", void 0 !== g7 && (g7 !== l7[a7] || "progress" === x4 && !g7 || "option" === x4 && g7 !== w6[a7]) && A(l7, a7, g7, w6[a7], false), a7 = "checked", void 0 !== b5 && b5 !== l7[a7] && A(l7, a7, b5, w6[a7], false));
  }
  return l7;
}
function N(n5, u7, t5) {
  try {
    "function" == typeof n5 ? n5(u7) : n5.current = u7;
  } catch (n6) {
    l.__e(n6, t5);
  }
}
function O(n5, u7, t5) {
  var i8, o7;
  if (l.unmount && l.unmount(n5), (i8 = n5.ref) && (i8.current && i8.current !== n5.__e || N(i8, null, u7)), null != (i8 = n5.__c)) {
    if (i8.componentWillUnmount) try {
      i8.componentWillUnmount();
    } catch (n6) {
      l.__e(n6, u7);
    }
    i8.base = i8.__P = null, n5.__c = void 0;
  }
  if (i8 = n5.__k) for (o7 = 0; o7 < i8.length; o7++) i8[o7] && O(i8[o7], u7, t5 || "function" != typeof n5.type);
  t5 || null == n5.__e || p(n5.__e), n5.__ = n5.__e = n5.__d = void 0;
}
function q(n5, l7, u7) {
  return this.constructor(n5, u7);
}
function B(u7, t5, i8) {
  var o7, r5, f8, e6;
  l.__ && l.__(u7, t5), r5 = (o7 = "function" == typeof i8) ? null : i8 && i8.__k || t5.__k, f8 = [], e6 = [], M(t5, u7 = (!o7 && i8 || t5).__k = y(g, null, [u7]), r5 || c, c, void 0 !== t5.ownerSVGElement, !o7 && i8 ? [i8] : r5 ? null : t5.firstChild ? n.call(t5.childNodes) : null, f8, !o7 && i8 ? i8 : r5 ? r5.__e : t5.firstChild, o7, e6), u7.__d = void 0, j(f8, u7, e6);
}
function E(n5, l7) {
  B(n5, l7, E);
}
function F(l7, u7, t5) {
  var i8, o7, r5, f8, e6 = v({}, l7.props);
  for (r5 in l7.type && l7.type.defaultProps && (f8 = l7.type.defaultProps), u7) "key" == r5 ? i8 = u7[r5] : "ref" == r5 ? o7 = u7[r5] : e6[r5] = void 0 === u7[r5] && void 0 !== f8 ? f8[r5] : u7[r5];
  return arguments.length > 2 && (e6.children = arguments.length > 3 ? n.call(arguments, 2) : t5), d(l7.type, e6, i8 || l7.key, o7 || l7.ref, null);
}
function G(n5, l7) {
  var u7 = { __c: l7 = "__cC" + e++, __: n5, Consumer: function(n6, l8) {
    return n6.children(l8);
  }, Provider: function(n6) {
    var u8, t5;
    return this.getChildContext || (u8 = [], (t5 = {})[l7] = this, this.getChildContext = function() {
      return t5;
    }, this.shouldComponentUpdate = function(n7) {
      this.props.value !== n7.value && u8.some(function(n8) {
        n8.__e = true, x(n8);
      });
    }, this.sub = function(n7) {
      u8.push(n7);
      var l8 = n7.componentWillUnmount;
      n7.componentWillUnmount = function() {
        u8.splice(u8.indexOf(n7), 1), l8 && l8.call(n7);
      };
    }), n6.children;
  } };
  return u7.Provider.__ = u7.Consumer.contextType = u7;
}
n = s.slice, l = { __e: function(n5, l7, u7, t5) {
  for (var i8, o7, r5; l7 = l7.__; ) if ((i8 = l7.__c) && !i8.__) try {
    if ((o7 = i8.constructor) && null != o7.getDerivedStateFromError && (i8.setState(o7.getDerivedStateFromError(n5)), r5 = i8.__d), null != i8.componentDidCatch && (i8.componentDidCatch(n5, t5 || {}), r5 = i8.__d), r5) return i8.__E = i8;
  } catch (l8) {
    n5 = l8;
  }
  throw n5;
} }, u = 0, t = function(n5) {
  return null != n5 && null == n5.constructor;
}, b.prototype.setState = function(n5, l7) {
  var u7;
  u7 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), "function" == typeof n5 && (n5 = n5(v({}, u7), this.props)), n5 && v(u7, n5), null != n5 && this.__v && (l7 && this._sb.push(l7), x(this));
}, b.prototype.forceUpdate = function(n5) {
  this.__v && (this.__e = true, n5 && this.__h.push(n5), x(this));
}, b.prototype.render = g, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f2 = function(n5, l7) {
  return n5.__v.__b - l7.__v.__b;
}, C.__r = 0, e = 0;

// node_modules/preact/hooks/dist/hooks.module.js
var t2;
var r2;
var u2;
var i2;
var o2 = 0;
var f3 = [];
var c2 = [];
var e2 = l;
var a2 = e2.__b;
var v2 = e2.__r;
var l2 = e2.diffed;
var m2 = e2.__c;
var s2 = e2.unmount;
var d2 = e2.__;
function h2(n5, t5) {
  e2.__h && e2.__h(r2, n5, o2 || t5), o2 = 0;
  var u7 = r2.__H || (r2.__H = { __: [], __h: [] });
  return n5 >= u7.__.length && u7.__.push({ __V: c2 }), u7.__[n5];
}
function p2(n5) {
  return o2 = 1, y2(D2, n5);
}
function y2(n5, u7, i8) {
  var o7 = h2(t2++, 2);
  if (o7.t = n5, !o7.__c && (o7.__ = [i8 ? i8(u7) : D2(void 0, u7), function(n6) {
    var t5 = o7.__N ? o7.__N[0] : o7.__[0], r5 = o7.t(t5, n6);
    t5 !== r5 && (o7.__N = [r5, o7.__[1]], o7.__c.setState({}));
  }], o7.__c = r2, !r2.u)) {
    var f8 = function(n6, t5, r5) {
      if (!o7.__c.__H) return true;
      var u8 = o7.__c.__H.__.filter(function(n7) {
        return !!n7.__c;
      });
      if (u8.every(function(n7) {
        return !n7.__N;
      })) return !c6 || c6.call(this, n6, t5, r5);
      var i9 = false;
      return u8.forEach(function(n7) {
        if (n7.__N) {
          var t6 = n7.__[0];
          n7.__ = n7.__N, n7.__N = void 0, t6 !== n7.__[0] && (i9 = true);
        }
      }), !(!i9 && o7.__c.props === n6) && (!c6 || c6.call(this, n6, t5, r5));
    };
    r2.u = true;
    var c6 = r2.shouldComponentUpdate, e6 = r2.componentWillUpdate;
    r2.componentWillUpdate = function(n6, t5, r5) {
      if (this.__e) {
        var u8 = c6;
        c6 = void 0, f8(n6, t5, r5), c6 = u8;
      }
      e6 && e6.call(this, n6, t5, r5);
    }, r2.shouldComponentUpdate = f8;
  }
  return o7.__N || o7.__;
}
function _2(n5, u7) {
  var i8 = h2(t2++, 3);
  !e2.__s && C2(i8.__H, u7) && (i8.__ = n5, i8.i = u7, r2.__H.__h.push(i8));
}
function A2(n5, u7) {
  var i8 = h2(t2++, 4);
  !e2.__s && C2(i8.__H, u7) && (i8.__ = n5, i8.i = u7, r2.__h.push(i8));
}
function F2(n5) {
  return o2 = 5, q2(function() {
    return { current: n5 };
  }, []);
}
function T2(n5, t5, r5) {
  o2 = 6, A2(function() {
    return "function" == typeof n5 ? (n5(t5()), function() {
      return n5(null);
    }) : n5 ? (n5.current = t5(), function() {
      return n5.current = null;
    }) : void 0;
  }, null == r5 ? r5 : r5.concat(n5));
}
function q2(n5, r5) {
  var u7 = h2(t2++, 7);
  return C2(u7.__H, r5) ? (u7.__V = n5(), u7.i = r5, u7.__h = n5, u7.__V) : u7.__;
}
function x2(n5, t5) {
  return o2 = 8, q2(function() {
    return n5;
  }, t5);
}
function P2(n5) {
  var u7 = r2.context[n5.__c], i8 = h2(t2++, 9);
  return i8.c = n5, u7 ? (null == i8.__ && (i8.__ = true, u7.sub(r2)), u7.props.value) : n5.__;
}
function V(n5, t5) {
  e2.useDebugValue && e2.useDebugValue(t5 ? t5(n5) : n5);
}
function g2() {
  var n5 = h2(t2++, 11);
  if (!n5.__) {
    for (var u7 = r2.__v; null !== u7 && !u7.__m && null !== u7.__; ) u7 = u7.__;
    var i8 = u7.__m || (u7.__m = [0, 0]);
    n5.__ = "P" + i8[0] + "-" + i8[1]++;
  }
  return n5.__;
}
function j2() {
  for (var n5; n5 = f3.shift(); ) if (n5.__P && n5.__H) try {
    n5.__H.__h.forEach(z2), n5.__H.__h.forEach(B2), n5.__H.__h = [];
  } catch (t5) {
    n5.__H.__h = [], e2.__e(t5, n5.__v);
  }
}
e2.__b = function(n5) {
  r2 = null, a2 && a2(n5);
}, e2.__ = function(n5, t5) {
  n5 && t5.__k && t5.__k.__m && (n5.__m = t5.__k.__m), d2 && d2(n5, t5);
}, e2.__r = function(n5) {
  v2 && v2(n5), t2 = 0;
  var i8 = (r2 = n5.__c).__H;
  i8 && (u2 === r2 ? (i8.__h = [], r2.__h = [], i8.__.forEach(function(n6) {
    n6.__N && (n6.__ = n6.__N), n6.__V = c2, n6.__N = n6.i = void 0;
  })) : (i8.__h.forEach(z2), i8.__h.forEach(B2), i8.__h = [], t2 = 0)), u2 = r2;
}, e2.diffed = function(n5) {
  l2 && l2(n5);
  var t5 = n5.__c;
  t5 && t5.__H && (t5.__H.__h.length && (1 !== f3.push(t5) && i2 === e2.requestAnimationFrame || ((i2 = e2.requestAnimationFrame) || w2)(j2)), t5.__H.__.forEach(function(n6) {
    n6.i && (n6.__H = n6.i), n6.__V !== c2 && (n6.__ = n6.__V), n6.i = void 0, n6.__V = c2;
  })), u2 = r2 = null;
}, e2.__c = function(n5, t5) {
  t5.some(function(n6) {
    try {
      n6.__h.forEach(z2), n6.__h = n6.__h.filter(function(n7) {
        return !n7.__ || B2(n7);
      });
    } catch (r5) {
      t5.some(function(n7) {
        n7.__h && (n7.__h = []);
      }), t5 = [], e2.__e(r5, n6.__v);
    }
  }), m2 && m2(n5, t5);
}, e2.unmount = function(n5) {
  s2 && s2(n5);
  var t5, r5 = n5.__c;
  r5 && r5.__H && (r5.__H.__.forEach(function(n6) {
    try {
      z2(n6);
    } catch (n7) {
      t5 = n7;
    }
  }), r5.__H = void 0, t5 && e2.__e(t5, r5.__v));
};
var k2 = "function" == typeof requestAnimationFrame;
function w2(n5) {
  var t5, r5 = function() {
    clearTimeout(u7), k2 && cancelAnimationFrame(t5), setTimeout(n5);
  }, u7 = setTimeout(r5, 100);
  k2 && (t5 = requestAnimationFrame(r5));
}
function z2(n5) {
  var t5 = r2, u7 = n5.__c;
  "function" == typeof u7 && (n5.__c = void 0, u7()), r2 = t5;
}
function B2(n5) {
  var t5 = r2;
  n5.__c = n5.__(), r2 = t5;
}
function C2(n5, t5) {
  return !n5 || n5.length !== t5.length || t5.some(function(t6, r5) {
    return t6 !== n5[r5];
  });
}
function D2(n5, t5) {
  return "function" == typeof t5 ? t5(n5) : t5;
}

// node_modules/@preact/signals-core/dist/signals-core.module.js
var i3 = Symbol.for("preact-signals");
function t3() {
  if (!(s3 > 1)) {
    var i8, t5 = false;
    while (void 0 !== h3) {
      var r5 = h3;
      h3 = void 0;
      f4++;
      while (void 0 !== r5) {
        var o7 = r5.o;
        r5.o = void 0;
        r5.f &= -3;
        if (!(8 & r5.f) && c3(r5)) try {
          r5.c();
        } catch (r6) {
          if (!t5) {
            i8 = r6;
            t5 = true;
          }
        }
        r5 = o7;
      }
    }
    f4 = 0;
    s3--;
    if (t5) throw i8;
  } else s3--;
}
var o3 = void 0;
function n2(i8) {
  var t5 = o3;
  o3 = void 0;
  try {
    return i8();
  } finally {
    o3 = t5;
  }
}
var h3 = void 0;
var s3 = 0;
var f4 = 0;
var v6 = 0;
function e3(i8) {
  if (void 0 !== o3) {
    var t5 = i8.n;
    if (void 0 === t5 || t5.t !== o3) {
      t5 = { i: 0, S: i8, p: o3.s, n: void 0, t: o3, e: void 0, x: void 0, r: t5 };
      if (void 0 !== o3.s) o3.s.n = t5;
      o3.s = t5;
      i8.n = t5;
      if (32 & o3.f) i8.S(t5);
      return t5;
    } else if (-1 === t5.i) {
      t5.i = 0;
      if (void 0 !== t5.n) {
        t5.n.p = t5.p;
        if (void 0 !== t5.p) t5.p.n = t5.n;
        t5.p = o3.s;
        t5.n = void 0;
        o3.s.n = t5;
        o3.s = t5;
      }
      return t5;
    }
  }
}
function u3(i8, t5) {
  this.v = i8;
  this.i = 0;
  this.n = void 0;
  this.t = void 0;
  this.W = null == t5 ? void 0 : t5.watched;
  this.Z = null == t5 ? void 0 : t5.unwatched;
  this.name = null == t5 ? void 0 : t5.name;
}
u3.prototype.brand = i3;
u3.prototype.h = function() {
  return true;
};
u3.prototype.S = function(i8) {
  var t5 = this, r5 = this.t;
  if (r5 !== i8 && void 0 === i8.e) {
    i8.x = r5;
    this.t = i8;
    if (void 0 !== r5) r5.e = i8;
    else n2(function() {
      var i9;
      null == (i9 = t5.W) || i9.call(t5);
    });
  }
};
u3.prototype.U = function(i8) {
  var t5 = this;
  if (void 0 !== this.t) {
    var r5 = i8.e, o7 = i8.x;
    if (void 0 !== r5) {
      r5.x = o7;
      i8.e = void 0;
    }
    if (void 0 !== o7) {
      o7.e = r5;
      i8.x = void 0;
    }
    if (i8 === this.t) {
      this.t = o7;
      if (void 0 === o7) n2(function() {
        var i9;
        null == (i9 = t5.Z) || i9.call(t5);
      });
    }
  }
};
u3.prototype.subscribe = function(i8) {
  var t5 = this;
  return E2(function() {
    var r5 = t5.value, n5 = o3;
    o3 = void 0;
    try {
      i8(r5);
    } finally {
      o3 = n5;
    }
  }, { name: "sub" });
};
u3.prototype.valueOf = function() {
  return this.value;
};
u3.prototype.toString = function() {
  return this.value + "";
};
u3.prototype.toJSON = function() {
  return this.value;
};
u3.prototype.peek = function() {
  var i8 = o3;
  o3 = void 0;
  try {
    return this.value;
  } finally {
    o3 = i8;
  }
};
Object.defineProperty(u3.prototype, "value", { get: function() {
  var i8 = e3(this);
  if (void 0 !== i8) i8.i = this.i;
  return this.v;
}, set: function(i8) {
  if (i8 !== this.v) {
    if (f4 > 100) throw new Error("Cycle detected");
    this.v = i8;
    this.i++;
    v6++;
    s3++;
    try {
      for (var r5 = this.t; void 0 !== r5; r5 = r5.x) r5.t.N();
    } finally {
      t3();
    }
  }
} });
function d3(i8, t5) {
  return new u3(i8, t5);
}
function c3(i8) {
  for (var t5 = i8.s; void 0 !== t5; t5 = t5.n) if (t5.S.i !== t5.i || !t5.S.h() || t5.S.i !== t5.i) return true;
  return false;
}
function a3(i8) {
  for (var t5 = i8.s; void 0 !== t5; t5 = t5.n) {
    var r5 = t5.S.n;
    if (void 0 !== r5) t5.r = r5;
    t5.S.n = t5;
    t5.i = -1;
    if (void 0 === t5.n) {
      i8.s = t5;
      break;
    }
  }
}
function l3(i8) {
  var t5 = i8.s, r5 = void 0;
  while (void 0 !== t5) {
    var o7 = t5.p;
    if (-1 === t5.i) {
      t5.S.U(t5);
      if (void 0 !== o7) o7.n = t5.n;
      if (void 0 !== t5.n) t5.n.p = o7;
    } else r5 = t5;
    t5.S.n = t5.r;
    if (void 0 !== t5.r) t5.r = void 0;
    t5 = o7;
  }
  i8.s = r5;
}
function y3(i8, t5) {
  u3.call(this, void 0);
  this.x = i8;
  this.s = void 0;
  this.g = v6 - 1;
  this.f = 4;
  this.W = null == t5 ? void 0 : t5.watched;
  this.Z = null == t5 ? void 0 : t5.unwatched;
  this.name = null == t5 ? void 0 : t5.name;
}
y3.prototype = new u3();
y3.prototype.h = function() {
  this.f &= -3;
  if (1 & this.f) return false;
  if (32 == (36 & this.f)) return true;
  this.f &= -5;
  if (this.g === v6) return true;
  this.g = v6;
  this.f |= 1;
  if (this.i > 0 && !c3(this)) {
    this.f &= -2;
    return true;
  }
  var i8 = o3;
  try {
    a3(this);
    o3 = this;
    var t5 = this.x();
    if (16 & this.f || this.v !== t5 || 0 === this.i) {
      this.v = t5;
      this.f &= -17;
      this.i++;
    }
  } catch (i9) {
    this.v = i9;
    this.f |= 16;
    this.i++;
  }
  o3 = i8;
  l3(this);
  this.f &= -2;
  return true;
};
y3.prototype.S = function(i8) {
  if (void 0 === this.t) {
    this.f |= 36;
    for (var t5 = this.s; void 0 !== t5; t5 = t5.n) t5.S.S(t5);
  }
  u3.prototype.S.call(this, i8);
};
y3.prototype.U = function(i8) {
  if (void 0 !== this.t) {
    u3.prototype.U.call(this, i8);
    if (void 0 === this.t) {
      this.f &= -33;
      for (var t5 = this.s; void 0 !== t5; t5 = t5.n) t5.S.U(t5);
    }
  }
};
y3.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var i8 = this.t; void 0 !== i8; i8 = i8.x) i8.t.N();
  }
};
Object.defineProperty(y3.prototype, "value", { get: function() {
  if (1 & this.f) throw new Error("Cycle detected");
  var i8 = e3(this);
  this.h();
  if (void 0 !== i8) i8.i = this.i;
  if (16 & this.f) throw this.v;
  return this.v;
} });
function w3(i8, t5) {
  return new y3(i8, t5);
}
function _3(i8) {
  var r5 = i8.u;
  i8.u = void 0;
  if ("function" == typeof r5) {
    s3++;
    var n5 = o3;
    o3 = void 0;
    try {
      r5();
    } catch (t5) {
      i8.f &= -2;
      i8.f |= 8;
      b2(i8);
      throw t5;
    } finally {
      o3 = n5;
      t3();
    }
  }
}
function b2(i8) {
  for (var t5 = i8.s; void 0 !== t5; t5 = t5.n) t5.S.U(t5);
  i8.x = void 0;
  i8.s = void 0;
  _3(i8);
}
function g3(i8) {
  if (o3 !== this) throw new Error("Out-of-order effect");
  l3(this);
  o3 = i8;
  this.f &= -2;
  if (8 & this.f) b2(this);
  t3();
}
function p3(i8, t5) {
  this.x = i8;
  this.u = void 0;
  this.s = void 0;
  this.o = void 0;
  this.f = 32;
  this.name = null == t5 ? void 0 : t5.name;
}
p3.prototype.c = function() {
  var i8 = this.S();
  try {
    if (8 & this.f) return;
    if (void 0 === this.x) return;
    var t5 = this.x();
    if ("function" == typeof t5) this.u = t5;
  } finally {
    i8();
  }
};
p3.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= 1;
  this.f &= -9;
  _3(this);
  a3(this);
  s3++;
  var i8 = o3;
  o3 = this;
  return g3.bind(this, i8);
};
p3.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 2;
    this.o = h3;
    h3 = this;
  }
};
p3.prototype.d = function() {
  this.f |= 8;
  if (!(1 & this.f)) b2(this);
};
p3.prototype.dispose = function() {
  this.d();
};
function E2(i8, t5) {
  var r5 = new p3(i8, t5);
  try {
    r5.c();
  } catch (i9) {
    r5.d();
    throw i9;
  }
  var o7 = r5.d.bind(r5);
  o7[Symbol.dispose] = o7;
  return o7;
}

// node_modules/@preact/signals/dist/signals.module.js
var v7;
var s4;
function l4(i8, n5) {
  l[i8] = n5.bind(null, l[i8] || function() {
  });
}
function d4(i8) {
  if (s4) s4();
  s4 = i8 && i8.S();
}
function h4(i8) {
  var r5 = this, f8 = i8.data, o7 = useSignal(f8);
  o7.value = f8;
  var e6 = q2(function() {
    var i9 = r5.__v;
    while (i9 = i9.__) if (i9.__c) {
      i9.__c.__$f |= 4;
      break;
    }
    r5.__$u.c = function() {
      var i10, t5 = r5.__$u.S(), f9 = e6.value;
      t5();
      if (t(f9) || 3 !== (null == (i10 = r5.base) ? void 0 : i10.nodeType)) {
        r5.__$f |= 1;
        r5.setState({});
      } else r5.base.data = f9;
    };
    return w3(function() {
      var i10 = o7.value.value;
      return 0 === i10 ? 0 : true === i10 ? "" : i10 || "";
    });
  }, []);
  return e6.value;
}
h4.displayName = "_st";
Object.defineProperties(u3.prototype, { constructor: { configurable: true, value: void 0 }, type: { configurable: true, value: h4 }, props: { configurable: true, get: function() {
  return { data: this };
} }, __b: { configurable: true, value: 1 } });
l4("__b", function(i8, r5) {
  if ("string" == typeof r5.type) {
    var n5, t5 = r5.props;
    for (var f8 in t5) if ("children" !== f8) {
      var o7 = t5[f8];
      if (o7 instanceof u3) {
        if (!n5) r5.__np = n5 = {};
        n5[f8] = o7;
        t5[f8] = o7.peek();
      }
    }
  }
  i8(r5);
});
l4("__r", function(i8, r5) {
  d4();
  var n5, t5 = r5.__c;
  if (t5) {
    t5.__$f &= -2;
    if (void 0 === (n5 = t5.__$u)) t5.__$u = n5 = function(i9) {
      var r6;
      E2(function() {
        r6 = this;
      });
      r6.c = function() {
        t5.__$f |= 1;
        t5.setState({});
      };
      return r6;
    }();
  }
  v7 = t5;
  d4(n5);
  i8(r5);
});
l4("__e", function(i8, r5, n5, t5) {
  d4();
  v7 = void 0;
  i8(r5, n5, t5);
});
l4("diffed", function(i8, r5) {
  d4();
  v7 = void 0;
  var n5;
  if ("string" == typeof r5.type && (n5 = r5.__e)) {
    var t5 = r5.__np, f8 = r5.props;
    if (t5) {
      var o7 = n5.U;
      if (o7) for (var e6 in o7) {
        var u7 = o7[e6];
        if (void 0 !== u7 && !(e6 in t5)) {
          u7.d();
          o7[e6] = void 0;
        }
      }
      else n5.U = o7 = {};
      for (var a7 in t5) {
        var c6 = o7[a7], s7 = t5[a7];
        if (void 0 === c6) {
          c6 = p4(n5, a7, s7, f8);
          o7[a7] = c6;
        } else c6.o(s7, f8);
      }
    }
  }
  i8(r5);
});
function p4(i8, r5, n5, t5) {
  var f8 = r5 in i8 && void 0 === i8.ownerSVGElement, o7 = d3(n5);
  return { o: function(i9, r6) {
    o7.value = i9;
    t5 = r6;
  }, d: E2(function() {
    var n6 = o7.value.value;
    if (t5[r5] !== n6) {
      t5[r5] = n6;
      if (f8) i8[r5] = n6;
      else if (n6) i8.setAttribute(r5, n6);
      else i8.removeAttribute(r5);
    }
  }) };
}
l4("unmount", function(i8, r5) {
  if ("string" == typeof r5.type) {
    var n5 = r5.__e;
    if (n5) {
      var t5 = n5.U;
      if (t5) {
        n5.U = void 0;
        for (var f8 in t5) {
          var o7 = t5[f8];
          if (o7) o7.d();
        }
      }
    }
  } else {
    var e6 = r5.__c;
    if (e6) {
      var u7 = e6.__$u;
      if (u7) {
        e6.__$u = void 0;
        u7.d();
      }
    }
  }
  i8(r5);
});
l4("__h", function(i8, r5, n5, t5) {
  if (t5 < 3 || 9 === t5) r5.__$f |= 2;
  i8(r5, n5, t5);
});
b.prototype.shouldComponentUpdate = function(i8, r5) {
  var n5 = this.__$u, t5 = n5 && void 0 !== n5.s;
  for (var f8 in r5) return true;
  if (this.__f || "boolean" == typeof this.u && true === this.u) {
    if (!(t5 || 2 & this.__$f || 4 & this.__$f)) return true;
    if (1 & this.__$f) return true;
  } else {
    if (!(t5 || 4 & this.__$f)) return true;
    if (3 & this.__$f) return true;
  }
  for (var o7 in i8) if ("__source" !== o7 && i8[o7] !== this.props[o7]) return true;
  for (var e6 in this.props) if (!(e6 in i8)) return true;
  return false;
};
function useSignal(i8) {
  return q2(function() {
    return d3(i8);
  }, []);
}

// node_modules/deepsignal/dist/deepsignal.module.js
var a4 = /* @__PURE__ */ new WeakMap();
var o4 = /* @__PURE__ */ new WeakMap();
var s5 = /* @__PURE__ */ new WeakMap();
var u4 = /* @__PURE__ */ new WeakSet();
var c4 = /* @__PURE__ */ new WeakMap();
var f5 = /^\$/;
var i4 = Object.getOwnPropertyDescriptor;
var l5 = false;
var g4 = function(e6) {
  if (!k3(e6)) throw new Error("This object can't be observed.");
  return o4.has(e6) || o4.set(e6, v8(e6, d5)), o4.get(e6);
};
var v8 = function(e6, t5) {
  var r5 = new Proxy(e6, t5);
  return u4.add(r5), r5;
};
var y4 = function() {
  throw new Error("Don't mutate the signals directly.");
};
var w4 = function(e6) {
  return function(t5, u7, c6) {
    var g7;
    if (l5) return Reflect.get(t5, u7, c6);
    var p6 = e6 || "$" === u7[0];
    if (!e6 && p6 && Array.isArray(t5)) {
      if ("$" === u7) return s5.has(t5) || s5.set(t5, v8(t5, m3)), s5.get(t5);
      p6 = "$length" === u7;
    }
    a4.has(c6) || a4.set(c6, /* @__PURE__ */ new Map());
    var h6 = a4.get(c6), y5 = p6 ? u7.replace(f5, "") : u7;
    if (h6.has(y5) || "function" != typeof (null == (g7 = i4(t5, y5)) ? void 0 : g7.get)) {
      var w6 = Reflect.get(t5, y5, c6);
      if (p6 && "function" == typeof w6) return;
      if ("symbol" == typeof y5 && b3.has(y5)) return w6;
      h6.has(y5) || (k3(w6) && (o4.has(w6) || o4.set(w6, v8(w6, d5)), w6 = o4.get(w6)), h6.set(y5, d3(w6)));
    } else h6.set(y5, w3(function() {
      return Reflect.get(t5, y5, c6);
    }));
    return p6 ? h6.get(y5) : h6.get(y5).value;
  };
};
var d5 = { get: w4(false), set: function(e6, n5, s7, u7) {
  var l7;
  if ("function" == typeof (null == (l7 = i4(e6, n5)) ? void 0 : l7.set)) return Reflect.set(e6, n5, s7, u7);
  a4.has(u7) || a4.set(u7, /* @__PURE__ */ new Map());
  var g7 = a4.get(u7);
  if ("$" === n5[0]) {
    s7 instanceof u3 || y4();
    var p6 = n5.replace(f5, "");
    return g7.set(p6, s7), Reflect.set(e6, p6, s7.peek(), u7);
  }
  var h6 = s7;
  k3(s7) && (o4.has(s7) || o4.set(s7, v8(s7, d5)), h6 = o4.get(s7));
  var w6 = !(n5 in e6), m5 = Reflect.set(e6, n5, s7, u7);
  return g7.has(n5) ? g7.get(n5).value = h6 : g7.set(n5, d3(h6)), w6 && c4.has(e6) && c4.get(e6).value++, Array.isArray(e6) && g7.has("length") && (g7.get("length").value = e6.length), m5;
}, deleteProperty: function(e6, t5) {
  "$" === t5[0] && y4();
  var r5 = a4.get(o4.get(e6)), n5 = Reflect.deleteProperty(e6, t5);
  return r5 && r5.has(t5) && (r5.get(t5).value = void 0), c4.has(e6) && c4.get(e6).value++, n5;
}, ownKeys: function(e6) {
  return c4.has(e6) || c4.set(e6, d3(0)), c4._ = c4.get(e6).value, Reflect.ownKeys(e6);
} };
var m3 = { get: w4(true), set: y4, deleteProperty: y4 };
var b3 = new Set(Object.getOwnPropertyNames(Symbol).map(function(e6) {
  return Symbol[e6];
}).filter(function(e6) {
  return "symbol" == typeof e6;
}));
var R = /* @__PURE__ */ new Set([Object, Array]);
var k3 = function(e6) {
  return "object" == typeof e6 && null !== e6 && R.has(e6.constructor) && !u4.has(e6);
};

// node_modules/@contentstack/live-preview-utils/dist/modern/configManager/handleUserConfig.js
var handleClientUrlParams = (userConfig) => {
  const config2 = configManager_default.get();
  const clientUrlParams = config2.clientUrlParams;
  configManager_default.set(
    "clientUrlParams.host",
    userConfig.host ?? config2.clientUrlParams.host
  );
  configManager_default.set(
    "clientUrlParams.protocol",
    userConfig.protocol ?? clientUrlParams.protocol
  );
  configManager_default.set("clientUrlParams.port", userConfig.port ?? clientUrlParams.port);
  if (userConfig.protocol !== void 0 && userConfig.port === void 0) {
    switch (userConfig.protocol) {
      case "http": {
        configManager_default.set("clientUrlParams.port", 80);
        break;
      }
      case "https": {
        configManager_default.set("clientUrlParams.port", 443);
        break;
      }
    }
  }
  let host = config2.clientUrlParams.host;
  if (typeof host == "string" && host.endsWith("/")) {
    host = host.slice(0, -1);
    configManager_default.set("clientUrlParams.host", host);
  }
  const url2 = `${clientUrlParams.protocol}://${config2.clientUrlParams.host}:${clientUrlParams.port}`;
  configManager_default.set("clientUrlParams.url", url2);
};
var handleInitData = (initData) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
  const config2 = configManager_default.get();
  const stackSdk = initData.stackSdk || config2.stackSdk;
  configManager_default.set(
    "enable",
    initData.enable ?? ((_a = stackSdk.live_preview) == null ? void 0 : _a.enable) ?? config2.enable
  );
  configManager_default.set(
    "ssr",
    ((_b = stackSdk.live_preview) == null ? void 0 : _b.ssr) ?? initData.ssr ?? (typeof initData.stackSdk === "object" ? false : true) ?? true
  );
  configManager_default.set(
    "runScriptsOnUpdate",
    initData.runScriptsOnUpdate ?? ((_c = stackSdk.live_preview) == null ? void 0 : _c.runScriptsOnUpdate) ?? config2.runScriptsOnUpdate
  );
  configManager_default.set("stackSdk", initData.stackSdk ?? config2.stackSdk);
  configManager_default.set(
    "cleanCslpOnProduction",
    initData.cleanCslpOnProduction ?? ((_d = stackSdk.live_preview) == null ? void 0 : _d.cleanCslpOnProduction) ?? config2.cleanCslpOnProduction
  );
  configManager_default.set("editButton", {
    enable: ((_e = initData.editButton) == null ? void 0 : _e.enable) ?? ((_g = (_f = stackSdk.live_preview) == null ? void 0 : _f.editButton) == null ? void 0 : _g.enable) ?? config2.editButton.enable,
    // added extra check if exclude data passed by user is array or not
    exclude: Array.isArray((_h = initData.editButton) == null ? void 0 : _h.exclude) && ((_i = initData.editButton) == null ? void 0 : _i.exclude) ? (_j = initData.editButton) == null ? void 0 : _j.exclude : Array.isArray((_k = stackSdk.live_preview) == null ? void 0 : _k.exclude) && ((_l = stackSdk.live_preview) == null ? void 0 : _l.exclude) ? (_m = stackSdk.live_preview) == null ? void 0 : _m.exclude : config2.editButton.exclude ?? [],
    position: ((_n2 = initData.editButton) == null ? void 0 : _n2.position) ?? ((_o = stackSdk.live_preview) == null ? void 0 : _o.position) ?? config2.editButton.position ?? "top",
    includeByQueryParameter: ((_p = initData.editButton) == null ? void 0 : _p.includeByQueryParameter) ?? ((_q = stackSdk.live_preview) == null ? void 0 : _q.includeByQueryParameter) ?? config2.editButton.includeByQueryParameter ?? true
  });
  configManager_default.set("editInVisualBuilderButton", {
    enable: ((_r = initData.editInVisualBuilderButton) == null ? void 0 : _r.enable) ?? ((_t = (_s = stackSdk.live_preview) == null ? void 0 : _s.editInVisualBuilderButton) == null ? void 0 : _t.enable) ?? config2.editInVisualBuilderButton.enable,
    position: ((_u = initData.editInVisualBuilderButton) == null ? void 0 : _u.position) ?? ((_v = stackSdk.live_preview) == null ? void 0 : _v.position) ?? config2.editInVisualBuilderButton.position ?? "bottom-right"
  });
  handleClientUrlParams(
    initData.clientUrlParams ?? ((_w = stackSdk.live_preview) == null ? void 0 : _w.clientUrlParams) ?? config2.clientUrlParams
  );
  if (initData.mode) {
    switch (initData.mode) {
      case "preview": {
        configManager_default.set("mode", ILivePreviewModeConfig.PREVIEW);
        break;
      }
      case "builder": {
        configManager_default.set("mode", ILivePreviewModeConfig.BUILDER);
        break;
      }
      default: {
        throw new TypeError(
          "Live Preview SDK: The mode must be either 'builder' or 'preview'"
        );
      }
    }
  }
  configManager_default.set(
    "debug",
    initData.debug ?? ((_x = stackSdk.live_preview) == null ? void 0 : _x.debug) ?? config2.debug
  );
  handleStackDetails(initData, stackSdk);
};
function handleStackDetails(initData, stackSdk) {
  var _a, _b, _c, _d, _e;
  const config2 = configManager_default.get();
  configManager_default.set(
    "stackDetails.apiKey",
    ((_a = initData.stackDetails) == null ? void 0 : _a.apiKey) ?? config2.stackDetails.apiKey
  );
  configManager_default.set(
    "stackDetails.environment",
    ((_b = initData.stackDetails) == null ? void 0 : _b.environment) ?? stackSdk.environment ?? config2.stackDetails.environment
  );
  configManager_default.set(
    "stackDetails.branch",
    ((_c = initData.stackDetails) == null ? void 0 : _c.branch) ?? stackSdk.branch ?? ((_d = stackSdk.headers) == null ? void 0 : _d.branch) ?? config2.stackDetails.branch
  );
  configManager_default.set(
    "stackDetails.locale",
    ((_e = initData.stackDetails) == null ? void 0 : _e.locale) ?? config2.stackDetails.locale
  );
  if (config2.mode >= ILivePreviewModeConfig.BUILDER) {
    if (!config2.stackDetails.environment) {
      throw Error("Live preview SDK: environment is required");
    }
    if (!config2.stackDetails.apiKey) {
      throw Error("Live preview SDK: api key is required");
    }
  }
}

// node_modules/@contentstack/live-preview-utils/dist/modern/configManager/configManager.js
var Config = class {
  static replace(userInput = getUserInitData()) {
    handleInitData(userInput);
  }
  static set(key, value) {
    if (!has_default(this.config.state, key)) {
      throw new Error(`Invalid key: ${key}`);
    }
    set_default(this.config.state, key, value);
  }
  static get() {
    return this.config.state;
  }
  static reset() {
    set_default(this.config, "state", getDefaultConfig());
  }
};
Config.config = {
  state: g4(getDefaultConfig())
};
var configManager_default = Config;
function updateConfigFromUrl() {
  const searchParams = new URLSearchParams(window.location.search);
  setConfigFromParams(searchParams.toString());
}
function setConfigFromParams(params = {}) {
  const urlParams = new URLSearchParams(params);
  const live_preview = urlParams.get("live_preview");
  const content_type_uid = urlParams.get("content_type_uid");
  const entry_uid = urlParams.get("entry_uid");
  const stackSdkLivePreview = Config.get().stackSdk.live_preview;
  if (live_preview) {
    Config.set("hash", live_preview);
    stackSdkLivePreview.hash = live_preview;
    stackSdkLivePreview.live_preview = live_preview;
  }
  if (content_type_uid) {
    Config.set("stackDetails.contentTypeUid", content_type_uid);
    stackSdkLivePreview.content_type_uid = content_type_uid;
  }
  if (entry_uid) {
    Config.set("stackDetails.entryUid", entry_uid);
    stackSdkLivePreview.entry_uid = entry_uid;
  }
  Config.set("stackSdk.live_preview", stackSdkLivePreview);
}

// node_modules/@contentstack/live-preview-utils/dist/modern/logger/logger.js
var PublicLogger = class {
  static logEvent(logCallback, message) {
    if (typeof process !== "undefined" && true) {
      logCallback("Live_Preview_SDK:", ...message);
    }
  }
  static error(...data) {
    this.logEvent(console.error, data);
  }
  static warn(...data) {
    this.logEvent(console.warn, data);
  }
  static debug(...data) {
    this.logEvent(console.debug, data);
  }
};

// node_modules/@contentstack/live-preview-utils/dist/modern/utils/addLivePreviewQueryTags.js
function addLivePreviewQueryTags(link) {
  try {
    const docUrl = new URL(document.location.href);
    const newUrl = new URL(link);
    const livePreviewHash = docUrl.searchParams.get("live_preview");
    const ctUid = docUrl.searchParams.get("content_type_uid");
    const entryUid = docUrl.searchParams.get("entry_uid");
    const previewTimestamp = docUrl.searchParams.get("preview_timestamp");
    if (livePreviewHash) {
      newUrl.searchParams.set("live_preview", livePreviewHash);
    }
    if (ctUid && entryUid) {
      newUrl.searchParams.set("content_type_uid", ctUid);
      newUrl.searchParams.set("entry_uid", entryUid);
    }
    if (previewTimestamp) {
      newUrl.searchParams.set("preview_timestamp", previewTimestamp);
    }
    return newUrl.href;
  } catch (error) {
    PublicLogger.error("Error while adding live preview to URL");
    return link;
  }
}

// node_modules/@contentstack/live-preview-utils/dist/modern/utils/index.js
function hasWindow() {
  return typeof window !== "undefined";
}
function addParamsToUrl() {
  window.addEventListener("click", (event) => {
    const clickedElement = event.target;
    const anchorElement = clickedElement.closest("a");
    if (!anchorElement || !anchorElement.contains(clickedElement)) {
      return;
    }
    const targetHref = anchorElement.href;
    const docOrigin = document.location.origin;
    if (targetHref && targetHref.includes(docOrigin) && !targetHref.includes("live_preview")) {
      const newUrl = addLivePreviewQueryTags(targetHref);
      anchorElement.href = newUrl || targetHref;
    }
  });
}
function isOpeningInTimeline() {
  if (hasWindow()) {
    const urlParams = new URLSearchParams(window.location.search);
    const previewTimestamp = urlParams.get("preview_timestamp");
    return !!previewTimestamp;
  }
  return false;
}
function isOpenInBuilder() {
  if (hasWindow()) {
    const urlParams = new URLSearchParams(window.location.search);
    const builder = urlParams.get("builder");
    return !!builder;
  }
  return false;
}
function isOpenInPreviewShare() {
  if (hasWindow()) {
    const urlParams = new URLSearchParams(window.location.search);
    const previewShare = urlParams.get("preview_share");
    return !!previewShare;
  }
  return false;
}

// node_modules/@contentstack/live-preview-utils/dist/modern/common/inIframe.js
function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e6) {
    return true;
  }
}
function isOpeningInNewTab() {
  try {
    if (hasWindow()) {
      return !!window.opener;
    }
    return false;
  } catch (e6) {
    return false;
  }
}

// node_modules/goober/dist/goober.modern.js
var e4 = { data: "" };
var t4 = (t5) => {
  if ("object" == typeof window) {
    let e6 = (t5 ? t5.querySelector("#_goober") : window._goober) || Object.assign(document.createElement("style"), { innerHTML: " ", id: "_goober" });
    return e6.nonce = window.__nonce__, e6.parentNode || (t5 || document.head).appendChild(e6), e6.firstChild;
  }
  return t5 || e4;
};
var l6 = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g;
var a5 = /\/\*[^]*?\*\/|  +/g;
var n3 = /\n+/g;
var o5 = (e6, t5) => {
  let r5 = "", l7 = "", a7 = "";
  for (let n5 in e6) {
    let c6 = e6[n5];
    "@" == n5[0] ? "i" == n5[1] ? r5 = n5 + " " + c6 + ";" : l7 += "f" == n5[1] ? o5(c6, n5) : n5 + "{" + o5(c6, "k" == n5[1] ? "" : t5) + "}" : "object" == typeof c6 ? l7 += o5(c6, t5 ? t5.replace(/([^,])+/g, (e7) => n5.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (t6) => /&/.test(t6) ? t6.replace(/&/g, e7) : e7 ? e7 + " " + t6 : t6)) : n5) : null != c6 && (n5 = /^--/.test(n5) ? n5 : n5.replace(/[A-Z]/g, "-$&").toLowerCase(), a7 += o5.p ? o5.p(n5, c6) : n5 + ":" + c6 + ";");
  }
  return r5 + (t5 && a7 ? t5 + "{" + a7 + "}" : a7) + l7;
};
var c5 = {};
var s6 = (e6) => {
  if ("object" == typeof e6) {
    let t5 = "";
    for (let r5 in e6) t5 += r5 + s6(e6[r5]);
    return t5;
  }
  return e6;
};
var i5 = (e6, t5, r5, i8, p6) => {
  let u7 = s6(e6), d7 = c5[u7] || (c5[u7] = ((e7) => {
    let t6 = 0, r6 = 11;
    for (; t6 < e7.length; ) r6 = 101 * r6 + e7.charCodeAt(t6++) >>> 0;
    return "go" + r6;
  })(u7));
  if (!c5[d7]) {
    let t6 = u7 !== e6 ? e6 : ((e7) => {
      let t7, r6, o7 = [{}];
      for (; t7 = l6.exec(e7.replace(a5, "")); ) t7[4] ? o7.shift() : t7[3] ? (r6 = t7[3].replace(n3, " ").trim(), o7.unshift(o7[0][r6] = o7[0][r6] || {})) : o7[0][t7[1]] = t7[2].replace(n3, " ").trim();
      return o7[0];
    })(e6);
    c5[d7] = o5(p6 ? { ["@keyframes " + d7]: t6 } : t6, r5 ? "" : "." + d7);
  }
  let f8 = r5 && c5.g ? c5.g : null;
  return r5 && (c5.g = c5[d7]), ((e7, t6, r6, l7) => {
    l7 ? t6.data = t6.data.replace(l7, e7) : -1 === t6.data.indexOf(e7) && (t6.data = r6 ? e7 + t6.data : t6.data + e7);
  })(c5[d7], t5, i8, f8), d7;
};
var p5 = (e6, t5, r5) => e6.reduce((e7, l7, a7) => {
  let n5 = t5[a7];
  if (n5 && n5.call) {
    let e8 = n5(r5), t6 = e8 && e8.props && e8.props.className || /^go/.test(e8) && e8;
    n5 = t6 ? "." + t6 : e8 && "object" == typeof e8 ? e8.props ? "" : o5(e8, "") : false === e8 ? "" : e8;
  }
  return e7 + l7 + (null == n5 ? "" : n5);
}, "");
function u5(e6) {
  let r5 = this || {}, l7 = e6.call ? e6(r5.p) : e6;
  return i5(l7.unshift ? l7.raw ? p5(l7, [].slice.call(arguments, 1), r5.p) : l7.reduce((e7, t5) => Object.assign(e7, t5 && t5.call ? t5(r5.p) : t5), {}) : l7, t4(r5.target), r5.g, r5.o, r5.k);
}
var d6;
var f6;
var g5;
var b4 = u5.bind({ g: 1 });
var h5 = u5.bind({ k: 1 });
function m4(e6, t5, r5, l7) {
  o5.p = t5, d6 = e6, f6 = r5, g5 = l7;
}

// node_modules/@contentstack/live-preview-utils/dist/modern/livePreview/editButton/editButton.style.js
function cslpTagStyles() {
  return {
    "cslp-edit-mode": u5`
            outline: 1px dashed #6c5ce7 !important;
        `,
    "cslp-tooltip": u5`
            padding: 0;
            display: flex;
            outline: none;
            border: none;
            z-index: 200 !important;
            position: fixed;
            margin: 0;
            height: 35px;
            width: 72px;
            background: white;
            font-weight: 400 !important;
            color: #718096 !important;
            transition: background 0.2s;
            text-align: center !important;
            border-radius: 8px !important;
            font-size: 14px !important;
            justify-content: space-around;
            align-items: center;
            box-shadow: 0px 8px 20px 0px #2222221a;
            box-sizing: border-box;
            top: -100%;
            & div {
                display: flex;
                justify-content: space-around;
                border-radius: 6px !important;
                cursor: pointer;
            }

            & div.cslp-tooltip-child:hover {
                background: #edf2f7;
            }

            & div.cslp-tooltip-child:active:hover {
                background: #c7d0e1;
            }

            & > div {
                display: flex;
                justify-content: space-evenly;
                white-space: nowrap;
                width: 70px;
            }

            & .cslp-tooltip-child.singular {
                padding: 9px 1px;
            }
        `,
    multiple: u5`
            & div.cslp-tooltip-child {
                padding: 9px;
            }

            & div.cslp-tooltip-child:before {
                opacity: 0;
                font-size: 12px;
                font-weight: 400;
                pointer-events: none;
                content: attr(data-title);
                color: white;
                padding: 5px 10px;
                border-radius: 4px;
                position: absolute;
                background: #4a5568;
                top: -30px;
                transition: 0.2s all ease-in-out;
            }

            & div.cslp-tooltip-child:hover:before {
                opacity: 1;
            }
        `
  };
}

// node_modules/@contentstack/live-preview-utils/dist/modern/cslp/cslpdata.js
function extractDetailsFromCslp(cslpValue) {
  let [cslpVersion, cslpData] = cslpValue.split(":");
  if (cslpVersion.length > 2) {
    cslpData = cslpVersion;
    cslpVersion = "v1";
  }
  const [content_type_uid, entryInfo, locale, ...fieldPath] = cslpData.split(".");
  let entry_uid;
  let variant;
  switch (cslpVersion) {
    case "v2": {
      const [uid, variant_uid] = entryInfo.split("_");
      entry_uid = uid;
      variant = variant_uid;
      break;
    }
    default: {
      entry_uid = entryInfo;
      break;
    }
  }
  const instancePathWithInstance = fieldPath.join(".");
  const calculatedPath = fieldPath.filter((path) => {
    const isEmpty2 = isNil_default(path);
    const isNumber2 = isFinite_default(+path);
    return !isEmpty2 && !isNumber2 || false;
  });
  const multipleFieldMetadata = getMultipleFieldMetadata(
    content_type_uid,
    entry_uid,
    locale,
    fieldPath
  );
  if (isFinite_default(+fieldPath[fieldPath.length - 1])) {
    fieldPath.pop();
  }
  return {
    entry_uid,
    content_type_uid,
    variant,
    locale,
    cslpValue,
    fieldPath: calculatedPath.join("."),
    fieldPathWithIndex: fieldPath.join("."),
    multipleFieldMetadata,
    instance: {
      fieldPathWithIndex: instancePathWithInstance
    }
  };
}
function getParentPathDetails(content_type_uid, entry_uid, locale, fieldPath) {
  const index = findLastIndex_default(fieldPath, (path) => isFinite_default(+path));
  if (index === -1) return null;
  const parentPath = fieldPath.slice(0, index);
  return {
    parentPath: parentPath.join("."),
    parentCslpValue: [
      content_type_uid,
      entry_uid,
      locale,
      ...parentPath
    ].join(".")
  };
}
function getMultipleFieldMetadata(content_type_uid, entry_uid, locale, fieldPath) {
  const parentDetails = getParentPathDetails(
    content_type_uid,
    entry_uid,
    locale,
    fieldPath
  );
  const index = findLast_default(fieldPath, (path) => isFinite_default(+path));
  return {
    parentDetails,
    index: isNil_default(index) ? -1 : +index
  };
}
function addCslpOutline(e6, callback) {
  const elements = configManager_default.get().elements;
  let trigger = true;
  const eventTargets = e6.composedPath();
  for (const eventTarget of eventTargets) {
    const element = eventTarget;
    if (element.nodeName === "BODY") break;
    if (typeof (element == null ? void 0 : element.getAttribute) !== "function") continue;
    const cslpTag = element.getAttribute("data-cslp");
    if (trigger && cslpTag) {
      if (elements.highlightedElement)
        elements.highlightedElement.classList.remove(
          cslpTagStyles()["cslp-edit-mode"]
        );
      element.classList.add(cslpTagStyles()["cslp-edit-mode"]);
      const updatedElements = elements;
      updatedElements.highlightedElement = element;
      configManager_default.set("elements", updatedElements);
      callback == null ? void 0 : callback({
        cslpTag,
        highlightedElement: element
      });
      trigger = false;
    } else if (!trigger) {
      element.classList.remove(cslpTagStyles()["cslp-edit-mode"]);
    }
  }
}

// node_modules/@contentstack/live-preview-utils/dist/modern/chunk-LNSFZGX4.js
var require_dist = __commonJS2({
  "node_modules/@contentstack/advanced-post-message/dist/index.js"(exports2, module2) {
    "use strict";
    !function(e6, t5) {
      "object" == typeof exports2 && "object" == typeof module2 ? module2.exports = t5() : "function" == typeof define && define.amd ? define([], t5) : "object" == typeof exports2 ? exports2.ContentstackAdvPostMessage = t5() : e6.ContentstackAdvPostMessage = t5();
    }(exports2, () => {
      return e6 = { 706: (e22, t22, r5) => {
        "use strict";
        Object.defineProperty(t22, "__esModule", { value: true }), t22.Config = void 0;
        var n5 = r5(450), o7 = r5(666), i8 = r5(628), s7 = function() {
          function e32() {
            this.config = (0, o7.getDefaultConfig)();
          }
          return e32.prototype.replace = function(e42) {
            !function(e52, t32) {
              var r22, o22, s22, u7;
              if (t32.debug = null !== (r22 = e52.debug) && void 0 !== r22 ? r22 : t32.debug, "" === e52.channelId) throw new Error((0, i8.getErrorMessage)(n5.ERROR_MESSAGES.common.channelIdRequired));
              t32.channelId = null !== (o22 = e52.channelId) && void 0 !== o22 ? o22 : t32.channelId, t32.suppressErrors = null !== (s22 = e52.suppressErrors) && void 0 !== s22 ? s22 : t32.suppressErrors, t32.targetOrigin = null !== (u7 = e52.targetOrigin) && void 0 !== u7 ? u7 : t32.targetOrigin, e52.target ? t32.targetWindow = e52.target : window ? t32.targetWindow = window : t32.targetWindow = { postMessage: function() {
              } };
            }(e42, this.config);
          }, e32.prototype.set = function(e42, t32) {
            this.config[e42] = t32;
          }, e32.prototype.get = function(e42) {
            return this.config[e42];
          }, e32.prototype.getAll = function() {
            return this.config;
          }, e32.prototype.reset = function() {
            this.config = (0, o7.getDefaultConfig)();
          }, e32;
        }();
        t22.Config = s7;
      }, 851: (e22, t22) => {
        "use strict";
        Object.defineProperty(t22, "__esModule", { value: true }), t22.ERROR_CODES = t22.ERROR_MESSAGES = void 0, t22.ERROR_MESSAGES = { common: { windowClosed: "The window closed before the response was received", windowNotFound: "The window was not found.", channelIdRequired: "The channelId is required" }, sendEvent: { receiverReturnedError: "The receiver returned an error", eventCancelled: "The event was cancelled", noAckReceived: "The ACK was not received" }, receiveEvent: { noRequestListenerFound: function(e32) {
          return 'No request listener found for event "'.concat(e32, '"');
        }, codeReturnedError: "The code returned an error", noResponseListenerFound: function(e32) {
          return 'No response listener found for hash "'.concat(e32, '"');
        }, noAckListenerFound: function(e32) {
          return 'No ack listener found for hash "'.concat(e32, '"');
        }, unknownNature: function(e32) {
          return 'The nature "'.concat(e32, '" is unknown');
        } }, registerEvent: { eventAlreadyRegistered: function(e32) {
          return 'The event "'.concat(e32, '" is already registered');
        } }, unregisterEvent: { eventDoesNotExist: function(e32) {
          return 'The event "'.concat(e32, '" does not exist');
        } } }, t22.ERROR_CODES = { common: { windowClosed: "WINDOW_CLOSED", windowNotFound: "WINDOW_NOT_FOUND" }, sendEvent: { receiverReturnedError: "RECEIVER_RETURNED_ERROR", eventCancelled: "EVENT_CANCELLED", noAckReceived: "NO_ACK_RECEIVED" }, receiveEvent: { noRequestListenerFound: "NO_REQUEST_LISTENER_FOUND", codeReturnedError: "CODE_RETURNED_ERROR", noResponseListenerFound: "NO_RESPONSE_LISTENER_FOUND", noAckListenerFound: "NO_ACK_LISTENER_FOUND", unknownNature: "UNKNOWN_NATURE" }, registerEvent: { eventAlreadyRegistered: "EVENT_ALREADY_REGISTERED" }, unregisterEvent: { eventDoesNotExist: "EVENT_DOES_NOT_EXIST" } };
      }, 450: function(e22, t22, r5) {
        "use strict";
        var n5 = this && this.__createBinding || (Object.create ? function(e32, t32, r22, n22) {
          void 0 === n22 && (n22 = r22);
          var o22 = Object.getOwnPropertyDescriptor(t32, r22);
          o22 && !("get" in o22 ? !t32.__esModule : o22.writable || o22.configurable) || (o22 = { enumerable: true, get: function() {
            return t32[r22];
          } }), Object.defineProperty(e32, n22, o22);
        } : function(e32, t32, r22, n22) {
          void 0 === n22 && (n22 = r22), e32[n22] = t32[r22];
        }), o7 = this && this.__exportStar || function(e32, t32) {
          for (var r22 in e32) "default" === r22 || Object.prototype.hasOwnProperty.call(t32, r22) || n5(t32, e32, r22);
        };
        Object.defineProperty(t22, "__esModule", { value: true }), t22.EVENT_MANAGER_NAME = t22.ANY_ORIGIN = t22.RESPONSE_CYCLE = void 0, t22.RESPONSE_CYCLE = 500, t22.ANY_ORIGIN = "*", t22.EVENT_MANAGER_NAME = "contentstack-adv-post-message", o7(r5(851), t22);
      }, 666: (e22, t22, r5) => {
        "use strict";
        Object.defineProperty(t22, "__esModule", { value: true }), t22.getDefaultConfig = void 0;
        var n5 = r5(450);
        t22.getDefaultConfig = function() {
          return { targetOrigin: n5.ANY_ORIGIN, targetWindow: { postMessage: function() {
          } }, debug: false, channelId: "", suppressErrors: false };
        };
      }, 156: function(e22, t22, r5) {
        "use strict";
        var n5 = this && this.__assign || function() {
          return n5 = Object.assign || function(e32) {
            for (var t32, r22 = 1, n22 = arguments.length; r22 < n22; r22++) for (var o22 in t32 = arguments[r22]) Object.prototype.hasOwnProperty.call(t32, o22) && (e32[o22] = t32[o22]);
            return e32;
          }, n5.apply(this, arguments);
        }, o7 = this && this.__createBinding || (Object.create ? function(e32, t32, r22, n22) {
          void 0 === n22 && (n22 = r22);
          var o22 = Object.getOwnPropertyDescriptor(t32, r22);
          o22 && !("get" in o22 ? !t32.__esModule : o22.writable || o22.configurable) || (o22 = { enumerable: true, get: function() {
            return t32[r22];
          } }), Object.defineProperty(e32, n22, o22);
        } : function(e32, t32, r22, n22) {
          void 0 === n22 && (n22 = r22), e32[n22] = t32[r22];
        }), i8 = this && this.__exportStar || function(e32, t32) {
          for (var r22 in e32) "default" === r22 || Object.prototype.hasOwnProperty.call(t32, r22) || o7(t32, e32, r22);
        }, s7 = this && this.__awaiter || function(e32, t32, r22, n22) {
          return new (r22 || (r22 = Promise))(function(o22, i22) {
            function s22(e42) {
              try {
                a22(n22.next(e42));
              } catch (e52) {
                i22(e52);
              }
            }
            function u22(e42) {
              try {
                a22(n22.throw(e42));
              } catch (e52) {
                i22(e52);
              }
            }
            function a22(e42) {
              var t42;
              e42.done ? o22(e42.value) : (t42 = e42.value, t42 instanceof r22 ? t42 : new r22(function(e52) {
                e52(t42);
              })).then(s22, u22);
            }
            a22((n22 = n22.apply(e32, t32 || [])).next());
          });
        }, u7 = this && this.__generator || function(e32, t32) {
          var r22, n22, o22, i22, s22 = { label: 0, sent: function() {
            if (1 & o22[0]) throw o22[1];
            return o22[1];
          }, trys: [], ops: [] };
          return i22 = { next: u22(0), throw: u22(1), return: u22(2) }, "function" == typeof Symbol && (i22[Symbol.iterator] = function() {
            return this;
          }), i22;
          function u22(u32) {
            return function(a22) {
              return function(u42) {
                if (r22) throw new TypeError("Generator is already executing.");
                for (; i22 && (i22 = 0, u42[0] && (s22 = 0)), s22; ) try {
                  if (r22 = 1, n22 && (o22 = 2 & u42[0] ? n22.return : u42[0] ? n22.throw || ((o22 = n22.return) && o22.call(n22), 0) : n22.next) && !(o22 = o22.call(n22, u42[1])).done) return o22;
                  switch (n22 = 0, o22 && (u42 = [2 & u42[0], o22.value]), u42[0]) {
                    case 0:
                    case 1:
                      o22 = u42;
                      break;
                    case 4:
                      return s22.label++, { value: u42[1], done: false };
                    case 5:
                      s22.label++, n22 = u42[1], u42 = [0];
                      continue;
                    case 7:
                      u42 = s22.ops.pop(), s22.trys.pop();
                      continue;
                    default:
                      if (!((o22 = (o22 = s22.trys).length > 0 && o22[o22.length - 1]) || 6 !== u42[0] && 2 !== u42[0])) {
                        s22 = 0;
                        continue;
                      }
                      if (3 === u42[0] && (!o22 || u42[1] > o22[0] && u42[1] < o22[3])) {
                        s22.label = u42[1];
                        break;
                      }
                      if (6 === u42[0] && s22.label < o22[1]) {
                        s22.label = o22[1], o22 = u42;
                        break;
                      }
                      if (o22 && s22.label < o22[2]) {
                        s22.label = o22[2], s22.ops.push(u42);
                        break;
                      }
                      o22[2] && s22.ops.pop(), s22.trys.pop();
                      continue;
                  }
                  u42 = t32.call(e32, s22);
                } catch (e42) {
                  u42 = [6, e42], n22 = 0;
                } finally {
                  r22 = o22 = 0;
                }
                if (5 & u42[0]) throw u42[1];
                return { value: u42[0] ? u42[1] : void 0, done: true };
              }([u32, a22]);
            };
          }
        };
        Object.defineProperty(t22, "__esModule", { value: true }), t22.EventManager = void 0;
        var a7 = r5(834), c6 = r5(706), d7 = r5(450), l7 = r5(897), f8 = r5(628), h6 = r5(768), g7 = r5(610), p6 = r5(574), v9 = function() {
          function e32(e42, t32) {
            if (void 0 === t32 && (t32 = {}), this.requestMessageHandlers = /* @__PURE__ */ new Map(), this.responseMessageHandlers = /* @__PURE__ */ new Map(), !e42) throw new Error((0, f8.getErrorMessage)(d7.ERROR_MESSAGES.common.channelIdRequired));
            this.config = new c6.Config(), this.config.replace(n5(n5({}, t32), { channelId: e42 })), this.logger = new f8.Logger(this.config), this.postMessage = new l7.PostMessage(this.logger, this.config), this.handleIncomingMessage = this.handleIncomingMessage.bind(this), this.send = this.send.bind(this), this.on = this.on.bind(this), this.unregisterEvent = this.unregisterEvent.bind(this), window ? window.addEventListener("message", this.handleIncomingMessage) : this.logger.debug((0, f8.getErrorMessage)(d7.ERROR_MESSAGES.common.windowNotFound));
          }
          return e32.prototype.handleIncomingMessage = function(e42) {
            return s7(this, void 0, void 0, function() {
              var t32, r22, n22, o22, i22, s22, c22, l22, h22, g22, v22, E4, y5 = this;
              return u7(this, function(u22) {
                if (t32 = e42.data, r22 = t32.type, n22 = t32.channel, o22 = t32.payload, i22 = t32.eventManager, s22 = t32.metadata, c22 = t32.error, i22 !== d7.EVENT_MANAGER_NAME || n22 !== this.config.get("channelId")) return [2];
                switch (l22 = s22.hash, h22 = s22.nature) {
                  case p6.EditorPostMessageNature.REQUEST:
                    return this.logger.debug("REQUEST received", e42.data), this.config.get("targetWindow").closed && this.logger.error((0, f8.getErrorMessage)(d7.ERROR_MESSAGES.common.windowClosed)), this.postMessage.sendAck({ type: r22, hash: l22 }), this.requestMessageHandlers.has(r22) ? (g22 = this.requestMessageHandlers.get(r22).handler, v22 = { data: o22 }, [2, a7.ZalgoPromise.all([a7.ZalgoPromise.try(function() {
                      return g22(v22);
                    }).then(function(e52) {
                      y5.postMessage.sendResponse({ type: r22, hash: l22, payload: e52, error: void 0 });
                    }).catch(function(e52) {
                      y5.logger.error((0, f8.getErrorMessage)(d7.ERROR_MESSAGES.receiveEvent.codeReturnedError), e52);
                    })])]) : (this.logger.debug((0, f8.getErrorMessage)(d7.ERROR_MESSAGES.receiveEvent.noRequestListenerFound(r22))), this.postMessage.sendResponse({ type: r22, hash: l22, payload: void 0, error: { code: d7.ERROR_CODES.receiveEvent.noRequestListenerFound, message: (0, f8.getErrorMessage)(d7.ERROR_MESSAGES.receiveEvent.noRequestListenerFound(r22)) } }), [2]);
                  case p6.EditorPostMessageNature.RESPONSE:
                    if (this.logger.debug("RESPONSE received", e42.data), !this.responseMessageHandlers.has(l22)) return this.logger.error((0, f8.getErrorMessage)(d7.ERROR_MESSAGES.receiveEvent.noResponseListenerFound(l22))), [2];
                    E4 = this.responseMessageHandlers.get(l22), c22 ? E4.promise.reject(c22) : E4.promise.resolve(o22);
                    break;
                  case p6.EditorPostMessageNature.ACK:
                    if (this.logger.debug("ACK received", e42.data), !this.responseMessageHandlers.has(l22)) return this.logger.error((0, f8.getErrorMessage)(d7.ERROR_MESSAGES.receiveEvent.noAckListenerFound(l22))), [2];
                    (E4 = this.responseMessageHandlers.get(l22)).hasReceivedAck = true;
                    break;
                  default:
                    this.logger.error((0, f8.getErrorMessage)(d7.ERROR_MESSAGES.receiveEvent.unknownNature(h22)), e42.data);
                }
                return [2];
              });
            });
          }, e32.prototype.send = function(e42, t32) {
            return s7(this, void 0, void 0, function() {
              var r22, n22, o22, i22, s22, c22 = this;
              return u7(this, function(u22) {
                return r22 = new a7.ZalgoPromise(), n22 = (0, g7.uniqueId)(e42), o22 = { type: e42, promise: r22, hasCancelled: false, hasReceivedAck: false }, this.responseMessageHandlers.set(n22, o22), i22 = 1e3, s22 = (0, h6.safeInterval)(function() {
                  return c22.config.get("targetWindow").closed ? r22.reject(new Error((0, f8.getErrorMessage)(d7.ERROR_MESSAGES.common.windowClosed))) : (i22 = Math.max(i22 - d7.RESPONSE_CYCLE, 0), !o22.hasReceivedAck && i22 <= 0 ? r22.reject((0, f8.getErrorMessage)(d7.ERROR_MESSAGES.sendEvent.noAckReceived)) : void 0);
                }, d7.RESPONSE_CYCLE), r22.finally(function() {
                  c22.responseMessageHandlers.delete(n22), s22.cancel();
                }).catch(function(e52) {
                  c22.logger.debug((0, f8.getErrorMessage)(d7.ERROR_MESSAGES.sendEvent.receiverReturnedError), e52);
                }), this.postMessage.sendRequest({ type: e42, hash: n22, error: void 0, payload: t32 }), [2, r22];
              });
            });
          }, e32.prototype.on = function(e42, t32) {
            var r22 = this;
            this.requestMessageHandlers.has(e42) && this.logger.error((0, f8.getErrorMessage)(d7.ERROR_MESSAGES.registerEvent.eventAlreadyRegistered(e42)));
            var n22 = { handler: t32 };
            return this.requestMessageHandlers.set(e42, n22), { unregister: function() {
              r22.unregisterEvent(e42);
            } };
          }, e32.prototype.unregisterEvent = function(e42) {
            this.requestMessageHandlers.has(e42) ? (this.logger.debug("Unregistering event", e42), this.requestMessageHandlers.delete(e42)) : this.logger.error((0, f8.getErrorMessage)(d7.ERROR_MESSAGES.unregisterEvent.eventDoesNotExist(e42)));
          }, e32.prototype.updateConfig = function(e42) {
            this.config.replace(e42);
          }, e32.prototype.destroy = function(e42) {
            this.requestMessageHandlers.clear(), this.responseMessageHandlers.clear(), (null == e42 ? void 0 : e42.soft) || window.removeEventListener("message", this.handleIncomingMessage);
          }, e32;
        }();
        t22.EventManager = v9, i8(r5(574), t22);
      }, 897: function(e22, t22, r5) {
        "use strict";
        var n5 = this && this.__assign || function() {
          return n5 = Object.assign || function(e32) {
            for (var t32, r22 = 1, n22 = arguments.length; r22 < n22; r22++) for (var o22 in t32 = arguments[r22]) Object.prototype.hasOwnProperty.call(t32, o22) && (e32[o22] = t32[o22]);
            return e32;
          }, n5.apply(this, arguments);
        };
        Object.defineProperty(t22, "__esModule", { value: true }), t22.PostMessage = void 0;
        var o7 = r5(574), i8 = function() {
          function e32(e42, t32) {
            this.logger = e42, this.sendResponse = this.sendResponse.bind(this), this.sendRequest = this.sendRequest.bind(this), this.sendAck = this.sendAck.bind(this), this.getMessage = this.getMessage.bind(this), this.config = t32.getAll();
          }
          return e32.prototype.sendRequest = function(e42) {
            var t32 = n5(n5({}, e42), { nature: o7.EditorPostMessageNature.REQUEST });
            this.logger.debug("Sending REQUEST", t32);
            var r22 = this.getMessage(t32);
            this.config.targetWindow.postMessage(r22, this.config.targetOrigin);
          }, e32.prototype.sendResponse = function(e42) {
            var t32 = n5(n5({}, e42), { nature: o7.EditorPostMessageNature.RESPONSE });
            this.logger.debug("Sending RESPONSE", t32);
            var r22 = this.getMessage(t32);
            this.config.targetWindow.postMessage(r22, this.config.targetOrigin);
          }, e32.prototype.sendAck = function(e42) {
            var t32 = n5(n5({}, e42), { payload: void 0, error: void 0, nature: o7.EditorPostMessageNature.ACK });
            this.logger.debug("Sending ACK", t32);
            var r22 = this.getMessage(t32);
            this.config.targetWindow.postMessage(r22, this.config.targetOrigin);
          }, e32.prototype.getMessage = function(e42) {
            var t32 = e42.nature, r22 = e42.hash, n22 = e42.payload, o22 = e42.type, i22 = e42.error;
            return { eventManager: "contentstack-adv-post-message", metadata: { hash: r22, nature: t32 }, channel: this.config.channelId, error: i22, payload: n22, type: o22 };
          }, e32;
        }();
        t22.PostMessage = i8;
      }, 255: (e22, t22) => {
        "use strict";
        Object.defineProperty(t22, "__esModule", { value: true });
      }, 884: (e22, t22) => {
        "use strict";
        Object.defineProperty(t22, "__esModule", { value: true });
      }, 574: function(e22, t22, r5) {
        "use strict";
        var n5 = this && this.__createBinding || (Object.create ? function(e32, t32, r22, n22) {
          void 0 === n22 && (n22 = r22);
          var o22 = Object.getOwnPropertyDescriptor(t32, r22);
          o22 && !("get" in o22 ? !t32.__esModule : o22.writable || o22.configurable) || (o22 = { enumerable: true, get: function() {
            return t32[r22];
          } }), Object.defineProperty(e32, n22, o22);
        } : function(e32, t32, r22, n22) {
          void 0 === n22 && (n22 = r22), e32[n22] = t32[r22];
        }), o7 = this && this.__exportStar || function(e32, t32) {
          for (var r22 in e32) "default" === r22 || Object.prototype.hasOwnProperty.call(t32, r22) || n5(t32, e32, r22);
        };
        Object.defineProperty(t22, "__esModule", { value: true }), o7(r5(884), t22), o7(r5(145), t22), o7(r5(255), t22);
      }, 145: (e22, t22) => {
        "use strict";
        var r5;
        Object.defineProperty(t22, "__esModule", { value: true }), t22.EditorPostMessageNature = void 0, function(e32) {
          e32.ACK = "ACK", e32.RESPONSE = "RESPONSE", e32.REQUEST = "REQUEST";
        }(r5 || (t22.EditorPostMessageNature = r5 = {}));
      }, 628: function(e22, t22, r5) {
        "use strict";
        var n5 = this && this.__spreadArray || function(e32, t32, r22) {
          if (r22 || 2 === arguments.length) for (var n22, o22 = 0, i22 = t32.length; o22 < i22; o22++) !n22 && o22 in t32 || (n22 || (n22 = Array.prototype.slice.call(t32, 0, o22)), n22[o22] = t32[o22]);
          return e32.concat(n22 || Array.prototype.slice.call(t32));
        };
        Object.defineProperty(t22, "__esModule", { value: true }), t22.getErrorMessage = t22.Logger = void 0;
        var o7 = r5(450), i8 = function() {
          function e32(e42) {
            this.config = e42, this.prefix = o7.EVENT_MANAGER_NAME, this.log = this.log.bind(this), this.info = this.info.bind(this), this.debug = this.debug.bind(this), this.error = this.error.bind(this);
          }
          return e32.prototype.log = function() {
            for (var e42 = [], t32 = 0; t32 < arguments.length; t32++) e42[t32] = arguments[t32];
            console.log.apply(console, n5([this.prefix], e42, false));
          }, e32.prototype.info = function() {
            for (var e42 = [], t32 = 0; t32 < arguments.length; t32++) e42[t32] = arguments[t32];
            console.info.apply(console, n5([this.prefix], e42, false));
          }, e32.prototype.debug = function() {
            for (var e42 = [], t32 = 0; t32 < arguments.length; t32++) e42[t32] = arguments[t32];
            this.config.get("debug") && console.debug.apply(console, n5(n5([this.prefix, "DEBUG:"], e42, false), [this.getDebugOptions()], false));
          }, e32.prototype.error = function() {
            for (var e42 = [], t32 = 0; t32 < arguments.length; t32++) e42[t32] = arguments[t32];
            this.config.get("suppressErrors") || console.error.apply(console, n5([this.prefix], e42, false));
          }, e32.prototype.getDebugOptions = function() {
            return { targetOrigin: this.config.get("targetOrigin"), targetWindow: this.config.get("targetWindow") };
          }, e32;
        }();
        t22.Logger = i8, t22.getErrorMessage = function(e32) {
          return o7.EVENT_MANAGER_NAME + ": " + e32;
        };
      }, 768: (e22, t22) => {
        "use strict";
        Object.defineProperty(t22, "__esModule", { value: true }), t22.safeInterval = void 0, t22.safeInterval = function(e32, t32) {
          var r5;
          return function n5() {
            r5 = setTimeout(function() {
              e32(), n5();
            }, t32);
          }(), { cancel: function() {
            clearTimeout(r5);
          } };
        };
      }, 610: (e22, t22, r5) => {
        "use strict";
        Object.defineProperty(t22, "__esModule", { value: true }), t22.uniqueId = void 0;
        var n5 = r5(831);
        t22.uniqueId = function(e32) {
          var t32 = (0, n5.v4)().split("-")[0];
          return e32 ? "".concat(e32, "-").concat(t32) : t32;
        };
      }, 831: (e22, t22, r5) => {
        "use strict";
        Object.defineProperty(t22, "__esModule", { value: true }), Object.defineProperty(t22, "NIL", { enumerable: true, get: function() {
          return u7.default;
        } }), Object.defineProperty(t22, "parse", { enumerable: true, get: function() {
          return l7.default;
        } }), Object.defineProperty(t22, "stringify", { enumerable: true, get: function() {
          return d7.default;
        } }), Object.defineProperty(t22, "v1", { enumerable: true, get: function() {
          return n5.default;
        } }), Object.defineProperty(t22, "v3", { enumerable: true, get: function() {
          return o7.default;
        } }), Object.defineProperty(t22, "v4", { enumerable: true, get: function() {
          return i8.default;
        } }), Object.defineProperty(t22, "v5", { enumerable: true, get: function() {
          return s7.default;
        } }), Object.defineProperty(t22, "validate", { enumerable: true, get: function() {
          return c6.default;
        } }), Object.defineProperty(t22, "version", { enumerable: true, get: function() {
          return a7.default;
        } });
        var n5 = f8(r5(518)), o7 = f8(r5(948)), i8 = f8(r5(73)), s7 = f8(r5(186)), u7 = f8(r5(808)), a7 = f8(r5(775)), c6 = f8(r5(37)), d7 = f8(r5(910)), l7 = f8(r5(792));
        function f8(e32) {
          return e32 && e32.__esModule ? e32 : { default: e32 };
        }
      }, 311: (e22, t22) => {
        "use strict";
        function r5(e32) {
          return 14 + (e32 + 64 >>> 9 << 4) + 1;
        }
        function n5(e32, t32) {
          const r22 = (65535 & e32) + (65535 & t32);
          return (e32 >> 16) + (t32 >> 16) + (r22 >> 16) << 16 | 65535 & r22;
        }
        function o7(e32, t32, r22, o22, i22, s22) {
          return n5((u22 = n5(n5(t32, e32), n5(o22, s22))) << (a22 = i22) | u22 >>> 32 - a22, r22);
          var u22, a22;
        }
        function i8(e32, t32, r22, n22, i22, s22, u22) {
          return o7(t32 & r22 | ~t32 & n22, e32, t32, i22, s22, u22);
        }
        function s7(e32, t32, r22, n22, i22, s22, u22) {
          return o7(t32 & n22 | r22 & ~n22, e32, t32, i22, s22, u22);
        }
        function u7(e32, t32, r22, n22, i22, s22, u22) {
          return o7(t32 ^ r22 ^ n22, e32, t32, i22, s22, u22);
        }
        function a7(e32, t32, r22, n22, i22, s22, u22) {
          return o7(r22 ^ (t32 | ~n22), e32, t32, i22, s22, u22);
        }
        Object.defineProperty(t22, "__esModule", { value: true }), t22.default = void 0;
        t22.default = function(e32) {
          if ("string" == typeof e32) {
            const t32 = unescape(encodeURIComponent(e32));
            e32 = new Uint8Array(t32.length);
            for (let r22 = 0; r22 < t32.length; ++r22) e32[r22] = t32.charCodeAt(r22);
          }
          return function(e42) {
            const t32 = [], r22 = 32 * e42.length, n22 = "0123456789abcdef";
            for (let o22 = 0; o22 < r22; o22 += 8) {
              const r32 = e42[o22 >> 5] >>> o22 % 32 & 255, i22 = parseInt(n22.charAt(r32 >>> 4 & 15) + n22.charAt(15 & r32), 16);
              t32.push(i22);
            }
            return t32;
          }(function(e42, t32) {
            e42[t32 >> 5] |= 128 << t32 % 32, e42[r5(t32) - 1] = t32;
            let o22 = 1732584193, c6 = -271733879, d7 = -1732584194, l7 = 271733878;
            for (let t42 = 0; t42 < e42.length; t42 += 16) {
              const r22 = o22, f8 = c6, h6 = d7, g7 = l7;
              o22 = i8(o22, c6, d7, l7, e42[t42], 7, -680876936), l7 = i8(l7, o22, c6, d7, e42[t42 + 1], 12, -389564586), d7 = i8(d7, l7, o22, c6, e42[t42 + 2], 17, 606105819), c6 = i8(c6, d7, l7, o22, e42[t42 + 3], 22, -1044525330), o22 = i8(o22, c6, d7, l7, e42[t42 + 4], 7, -176418897), l7 = i8(l7, o22, c6, d7, e42[t42 + 5], 12, 1200080426), d7 = i8(d7, l7, o22, c6, e42[t42 + 6], 17, -1473231341), c6 = i8(c6, d7, l7, o22, e42[t42 + 7], 22, -45705983), o22 = i8(o22, c6, d7, l7, e42[t42 + 8], 7, 1770035416), l7 = i8(l7, o22, c6, d7, e42[t42 + 9], 12, -1958414417), d7 = i8(d7, l7, o22, c6, e42[t42 + 10], 17, -42063), c6 = i8(c6, d7, l7, o22, e42[t42 + 11], 22, -1990404162), o22 = i8(o22, c6, d7, l7, e42[t42 + 12], 7, 1804603682), l7 = i8(l7, o22, c6, d7, e42[t42 + 13], 12, -40341101), d7 = i8(d7, l7, o22, c6, e42[t42 + 14], 17, -1502002290), c6 = i8(c6, d7, l7, o22, e42[t42 + 15], 22, 1236535329), o22 = s7(o22, c6, d7, l7, e42[t42 + 1], 5, -165796510), l7 = s7(l7, o22, c6, d7, e42[t42 + 6], 9, -1069501632), d7 = s7(d7, l7, o22, c6, e42[t42 + 11], 14, 643717713), c6 = s7(c6, d7, l7, o22, e42[t42], 20, -373897302), o22 = s7(o22, c6, d7, l7, e42[t42 + 5], 5, -701558691), l7 = s7(l7, o22, c6, d7, e42[t42 + 10], 9, 38016083), d7 = s7(d7, l7, o22, c6, e42[t42 + 15], 14, -660478335), c6 = s7(c6, d7, l7, o22, e42[t42 + 4], 20, -405537848), o22 = s7(o22, c6, d7, l7, e42[t42 + 9], 5, 568446438), l7 = s7(l7, o22, c6, d7, e42[t42 + 14], 9, -1019803690), d7 = s7(d7, l7, o22, c6, e42[t42 + 3], 14, -187363961), c6 = s7(c6, d7, l7, o22, e42[t42 + 8], 20, 1163531501), o22 = s7(o22, c6, d7, l7, e42[t42 + 13], 5, -1444681467), l7 = s7(l7, o22, c6, d7, e42[t42 + 2], 9, -51403784), d7 = s7(d7, l7, o22, c6, e42[t42 + 7], 14, 1735328473), c6 = s7(c6, d7, l7, o22, e42[t42 + 12], 20, -1926607734), o22 = u7(o22, c6, d7, l7, e42[t42 + 5], 4, -378558), l7 = u7(l7, o22, c6, d7, e42[t42 + 8], 11, -2022574463), d7 = u7(d7, l7, o22, c6, e42[t42 + 11], 16, 1839030562), c6 = u7(c6, d7, l7, o22, e42[t42 + 14], 23, -35309556), o22 = u7(o22, c6, d7, l7, e42[t42 + 1], 4, -1530992060), l7 = u7(l7, o22, c6, d7, e42[t42 + 4], 11, 1272893353), d7 = u7(d7, l7, o22, c6, e42[t42 + 7], 16, -155497632), c6 = u7(c6, d7, l7, o22, e42[t42 + 10], 23, -1094730640), o22 = u7(o22, c6, d7, l7, e42[t42 + 13], 4, 681279174), l7 = u7(l7, o22, c6, d7, e42[t42], 11, -358537222), d7 = u7(d7, l7, o22, c6, e42[t42 + 3], 16, -722521979), c6 = u7(c6, d7, l7, o22, e42[t42 + 6], 23, 76029189), o22 = u7(o22, c6, d7, l7, e42[t42 + 9], 4, -640364487), l7 = u7(l7, o22, c6, d7, e42[t42 + 12], 11, -421815835), d7 = u7(d7, l7, o22, c6, e42[t42 + 15], 16, 530742520), c6 = u7(c6, d7, l7, o22, e42[t42 + 2], 23, -995338651), o22 = a7(o22, c6, d7, l7, e42[t42], 6, -198630844), l7 = a7(l7, o22, c6, d7, e42[t42 + 7], 10, 1126891415), d7 = a7(d7, l7, o22, c6, e42[t42 + 14], 15, -1416354905), c6 = a7(c6, d7, l7, o22, e42[t42 + 5], 21, -57434055), o22 = a7(o22, c6, d7, l7, e42[t42 + 12], 6, 1700485571), l7 = a7(l7, o22, c6, d7, e42[t42 + 3], 10, -1894986606), d7 = a7(d7, l7, o22, c6, e42[t42 + 10], 15, -1051523), c6 = a7(c6, d7, l7, o22, e42[t42 + 1], 21, -2054922799), o22 = a7(o22, c6, d7, l7, e42[t42 + 8], 6, 1873313359), l7 = a7(l7, o22, c6, d7, e42[t42 + 15], 10, -30611744), d7 = a7(d7, l7, o22, c6, e42[t42 + 6], 15, -1560198380), c6 = a7(c6, d7, l7, o22, e42[t42 + 13], 21, 1309151649), o22 = a7(o22, c6, d7, l7, e42[t42 + 4], 6, -145523070), l7 = a7(l7, o22, c6, d7, e42[t42 + 11], 10, -1120210379), d7 = a7(d7, l7, o22, c6, e42[t42 + 2], 15, 718787259), c6 = a7(c6, d7, l7, o22, e42[t42 + 9], 21, -343485551), o22 = n5(o22, r22), c6 = n5(c6, f8), d7 = n5(d7, h6), l7 = n5(l7, g7);
            }
            return [o22, c6, d7, l7];
          }(function(e42) {
            if (0 === e42.length) return [];
            const t32 = 8 * e42.length, n22 = new Uint32Array(r5(t32));
            for (let r22 = 0; r22 < t32; r22 += 8) n22[r22 >> 5] |= (255 & e42[r22 / 8]) << r22 % 32;
            return n22;
          }(e32), 8 * e32.length));
        };
      }, 140: (e22, t22) => {
        "use strict";
        Object.defineProperty(t22, "__esModule", { value: true }), t22.default = void 0;
        var r5 = { randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
        t22.default = r5;
      }, 808: (e22, t22) => {
        "use strict";
        Object.defineProperty(t22, "__esModule", { value: true }), t22.default = void 0, t22.default = "00000000-0000-0000-0000-000000000000";
      }, 792: (e22, t22, r5) => {
        "use strict";
        Object.defineProperty(t22, "__esModule", { value: true }), t22.default = void 0;
        var n5, o7 = (n5 = r5(37)) && n5.__esModule ? n5 : { default: n5 };
        t22.default = function(e32) {
          if (!(0, o7.default)(e32)) throw TypeError("Invalid UUID");
          let t32;
          const r22 = new Uint8Array(16);
          return r22[0] = (t32 = parseInt(e32.slice(0, 8), 16)) >>> 24, r22[1] = t32 >>> 16 & 255, r22[2] = t32 >>> 8 & 255, r22[3] = 255 & t32, r22[4] = (t32 = parseInt(e32.slice(9, 13), 16)) >>> 8, r22[5] = 255 & t32, r22[6] = (t32 = parseInt(e32.slice(14, 18), 16)) >>> 8, r22[7] = 255 & t32, r22[8] = (t32 = parseInt(e32.slice(19, 23), 16)) >>> 8, r22[9] = 255 & t32, r22[10] = (t32 = parseInt(e32.slice(24, 36), 16)) / 1099511627776 & 255, r22[11] = t32 / 4294967296 & 255, r22[12] = t32 >>> 24 & 255, r22[13] = t32 >>> 16 & 255, r22[14] = t32 >>> 8 & 255, r22[15] = 255 & t32, r22;
        };
      }, 656: (e22, t22) => {
        "use strict";
        Object.defineProperty(t22, "__esModule", { value: true }), t22.default = void 0, t22.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      }, 858: (e22, t22) => {
        "use strict";
        let r5;
        Object.defineProperty(t22, "__esModule", { value: true }), t22.default = function() {
          if (!r5 && (r5 = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !r5)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
          return r5(n5);
        };
        const n5 = new Uint8Array(16);
      }, 42: (e22, t22) => {
        "use strict";
        function r5(e32, t32, r22, n22) {
          switch (e32) {
            case 0:
              return t32 & r22 ^ ~t32 & n22;
            case 1:
            case 3:
              return t32 ^ r22 ^ n22;
            case 2:
              return t32 & r22 ^ t32 & n22 ^ r22 & n22;
          }
        }
        function n5(e32, t32) {
          return e32 << t32 | e32 >>> 32 - t32;
        }
        Object.defineProperty(t22, "__esModule", { value: true }), t22.default = void 0;
        t22.default = function(e32) {
          const t32 = [1518500249, 1859775393, 2400959708, 3395469782], o7 = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
          if ("string" == typeof e32) {
            const t42 = unescape(encodeURIComponent(e32));
            e32 = [];
            for (let r22 = 0; r22 < t42.length; ++r22) e32.push(t42.charCodeAt(r22));
          } else Array.isArray(e32) || (e32 = Array.prototype.slice.call(e32));
          e32.push(128);
          const i8 = e32.length / 4 + 2, s7 = Math.ceil(i8 / 16), u7 = new Array(s7);
          for (let t42 = 0; t42 < s7; ++t42) {
            const r22 = new Uint32Array(16);
            for (let n22 = 0; n22 < 16; ++n22) r22[n22] = e32[64 * t42 + 4 * n22] << 24 | e32[64 * t42 + 4 * n22 + 1] << 16 | e32[64 * t42 + 4 * n22 + 2] << 8 | e32[64 * t42 + 4 * n22 + 3];
            u7[t42] = r22;
          }
          u7[s7 - 1][14] = 8 * (e32.length - 1) / Math.pow(2, 32), u7[s7 - 1][14] = Math.floor(u7[s7 - 1][14]), u7[s7 - 1][15] = 8 * (e32.length - 1) & 4294967295;
          for (let e42 = 0; e42 < s7; ++e42) {
            const i22 = new Uint32Array(80);
            for (let t42 = 0; t42 < 16; ++t42) i22[t42] = u7[e42][t42];
            for (let e52 = 16; e52 < 80; ++e52) i22[e52] = n5(i22[e52 - 3] ^ i22[e52 - 8] ^ i22[e52 - 14] ^ i22[e52 - 16], 1);
            let s22 = o7[0], a7 = o7[1], c6 = o7[2], d7 = o7[3], l7 = o7[4];
            for (let e52 = 0; e52 < 80; ++e52) {
              const o22 = Math.floor(e52 / 20), u22 = n5(s22, 5) + r5(o22, a7, c6, d7) + l7 + t32[o22] + i22[e52] >>> 0;
              l7 = d7, d7 = c6, c6 = n5(a7, 30) >>> 0, a7 = s22, s22 = u22;
            }
            o7[0] = o7[0] + s22 >>> 0, o7[1] = o7[1] + a7 >>> 0, o7[2] = o7[2] + c6 >>> 0, o7[3] = o7[3] + d7 >>> 0, o7[4] = o7[4] + l7 >>> 0;
          }
          return [o7[0] >> 24 & 255, o7[0] >> 16 & 255, o7[0] >> 8 & 255, 255 & o7[0], o7[1] >> 24 & 255, o7[1] >> 16 & 255, o7[1] >> 8 & 255, 255 & o7[1], o7[2] >> 24 & 255, o7[2] >> 16 & 255, o7[2] >> 8 & 255, 255 & o7[2], o7[3] >> 24 & 255, o7[3] >> 16 & 255, o7[3] >> 8 & 255, 255 & o7[3], o7[4] >> 24 & 255, o7[4] >> 16 & 255, o7[4] >> 8 & 255, 255 & o7[4]];
        };
      }, 910: (e22, t22, r5) => {
        "use strict";
        Object.defineProperty(t22, "__esModule", { value: true }), t22.default = void 0, t22.unsafeStringify = s7;
        var n5, o7 = (n5 = r5(37)) && n5.__esModule ? n5 : { default: n5 };
        const i8 = [];
        for (let e32 = 0; e32 < 256; ++e32) i8.push((e32 + 256).toString(16).slice(1));
        function s7(e32, t32 = 0) {
          return (i8[e32[t32 + 0]] + i8[e32[t32 + 1]] + i8[e32[t32 + 2]] + i8[e32[t32 + 3]] + "-" + i8[e32[t32 + 4]] + i8[e32[t32 + 5]] + "-" + i8[e32[t32 + 6]] + i8[e32[t32 + 7]] + "-" + i8[e32[t32 + 8]] + i8[e32[t32 + 9]] + "-" + i8[e32[t32 + 10]] + i8[e32[t32 + 11]] + i8[e32[t32 + 12]] + i8[e32[t32 + 13]] + i8[e32[t32 + 14]] + i8[e32[t32 + 15]]).toLowerCase();
        }
        t22.default = function(e32, t32 = 0) {
          const r22 = s7(e32, t32);
          if (!(0, o7.default)(r22)) throw TypeError("Stringified UUID is invalid");
          return r22;
        };
      }, 518: (e22, t22, r5) => {
        "use strict";
        Object.defineProperty(t22, "__esModule", { value: true }), t22.default = void 0;
        var n5, o7 = (n5 = r5(858)) && n5.__esModule ? n5 : { default: n5 }, i8 = r5(910);
        let s7, u7, a7 = 0, c6 = 0;
        t22.default = function(e32, t32, r22) {
          let n22 = t32 && r22 || 0;
          const d7 = t32 || new Array(16);
          let l7 = (e32 = e32 || {}).node || s7, f8 = void 0 !== e32.clockseq ? e32.clockseq : u7;
          if (null == l7 || null == f8) {
            const t42 = e32.random || (e32.rng || o7.default)();
            null == l7 && (l7 = s7 = [1 | t42[0], t42[1], t42[2], t42[3], t42[4], t42[5]]), null == f8 && (f8 = u7 = 16383 & (t42[6] << 8 | t42[7]));
          }
          let h6 = void 0 !== e32.msecs ? e32.msecs : Date.now(), g7 = void 0 !== e32.nsecs ? e32.nsecs : c6 + 1;
          const p6 = h6 - a7 + (g7 - c6) / 1e4;
          if (p6 < 0 && void 0 === e32.clockseq && (f8 = f8 + 1 & 16383), (p6 < 0 || h6 > a7) && void 0 === e32.nsecs && (g7 = 0), g7 >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
          a7 = h6, c6 = g7, u7 = f8, h6 += 122192928e5;
          const v9 = (1e4 * (268435455 & h6) + g7) % 4294967296;
          d7[n22++] = v9 >>> 24 & 255, d7[n22++] = v9 >>> 16 & 255, d7[n22++] = v9 >>> 8 & 255, d7[n22++] = 255 & v9;
          const E4 = h6 / 4294967296 * 1e4 & 268435455;
          d7[n22++] = E4 >>> 8 & 255, d7[n22++] = 255 & E4, d7[n22++] = E4 >>> 24 & 15 | 16, d7[n22++] = E4 >>> 16 & 255, d7[n22++] = f8 >>> 8 | 128, d7[n22++] = 255 & f8;
          for (let e42 = 0; e42 < 6; ++e42) d7[n22 + e42] = l7[e42];
          return t32 || (0, i8.unsafeStringify)(d7);
        };
      }, 948: (e22, t22, r5) => {
        "use strict";
        Object.defineProperty(t22, "__esModule", { value: true }), t22.default = void 0;
        var n5 = i8(r5(25)), o7 = i8(r5(311));
        function i8(e32) {
          return e32 && e32.__esModule ? e32 : { default: e32 };
        }
        var s7 = (0, n5.default)("v3", 48, o7.default);
        t22.default = s7;
      }, 25: (e22, t22, r5) => {
        "use strict";
        Object.defineProperty(t22, "__esModule", { value: true }), t22.URL = t22.DNS = void 0, t22.default = function(e32, t32, r22) {
          function n22(e42, n32, s22, u22) {
            var a7;
            if ("string" == typeof e42 && (e42 = function(e52) {
              e52 = unescape(encodeURIComponent(e52));
              const t42 = [];
              for (let r32 = 0; r32 < e52.length; ++r32) t42.push(e52.charCodeAt(r32));
              return t42;
            }(e42)), "string" == typeof n32 && (n32 = (0, i8.default)(n32)), 16 !== (null === (a7 = n32) || void 0 === a7 ? void 0 : a7.length)) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
            let c6 = new Uint8Array(16 + e42.length);
            if (c6.set(n32), c6.set(e42, n32.length), c6 = r22(c6), c6[6] = 15 & c6[6] | t32, c6[8] = 63 & c6[8] | 128, s22) {
              u22 = u22 || 0;
              for (let e52 = 0; e52 < 16; ++e52) s22[u22 + e52] = c6[e52];
              return s22;
            }
            return (0, o7.unsafeStringify)(c6);
          }
          try {
            n22.name = e32;
          } catch (e42) {
          }
          return n22.DNS = s7, n22.URL = u7, n22;
        };
        var n5, o7 = r5(910), i8 = (n5 = r5(792)) && n5.__esModule ? n5 : { default: n5 };
        const s7 = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
        t22.DNS = s7;
        const u7 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
        t22.URL = u7;
      }, 73: (e22, t22, r5) => {
        "use strict";
        Object.defineProperty(t22, "__esModule", { value: true }), t22.default = void 0;
        var n5 = s7(r5(140)), o7 = s7(r5(858)), i8 = r5(910);
        function s7(e32) {
          return e32 && e32.__esModule ? e32 : { default: e32 };
        }
        t22.default = function(e32, t32, r22) {
          if (n5.default.randomUUID && !t32 && !e32) return n5.default.randomUUID();
          const s22 = (e32 = e32 || {}).random || (e32.rng || o7.default)();
          if (s22[6] = 15 & s22[6] | 64, s22[8] = 63 & s22[8] | 128, t32) {
            r22 = r22 || 0;
            for (let e42 = 0; e42 < 16; ++e42) t32[r22 + e42] = s22[e42];
            return t32;
          }
          return (0, i8.unsafeStringify)(s22);
        };
      }, 186: (e22, t22, r5) => {
        "use strict";
        Object.defineProperty(t22, "__esModule", { value: true }), t22.default = void 0;
        var n5 = i8(r5(25)), o7 = i8(r5(42));
        function i8(e32) {
          return e32 && e32.__esModule ? e32 : { default: e32 };
        }
        var s7 = (0, n5.default)("v5", 80, o7.default);
        t22.default = s7;
      }, 37: (e22, t22, r5) => {
        "use strict";
        Object.defineProperty(t22, "__esModule", { value: true }), t22.default = void 0;
        var n5, o7 = (n5 = r5(656)) && n5.__esModule ? n5 : { default: n5 };
        t22.default = function(e32) {
          return "string" == typeof e32 && o7.default.test(e32);
        };
      }, 775: (e22, t22, r5) => {
        "use strict";
        Object.defineProperty(t22, "__esModule", { value: true }), t22.default = void 0;
        var n5, o7 = (n5 = r5(37)) && n5.__esModule ? n5 : { default: n5 };
        t22.default = function(e32) {
          if (!(0, o7.default)(e32)) throw TypeError("Invalid UUID");
          return parseInt(e32.slice(14, 15), 16);
        };
      }, 994: function(e22) {
        "undefined" != typeof self && self, e22.exports = function(e32) {
          var t22 = {};
          function r5(n5) {
            if (t22[n5]) return t22[n5].exports;
            var o7 = t22[n5] = { i: n5, l: false, exports: {} };
            return e32[n5].call(o7.exports, o7, o7.exports, r5), o7.l = true, o7.exports;
          }
          return r5.m = e32, r5.c = t22, r5.d = function(e42, t32, n5) {
            r5.o(e42, t32) || Object.defineProperty(e42, t32, { enumerable: true, get: n5 });
          }, r5.r = function(e42) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e42, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e42, "__esModule", { value: true });
          }, r5.t = function(e42, t32) {
            if (1 & t32 && (e42 = r5(e42)), 8 & t32) return e42;
            if (4 & t32 && "object" == typeof e42 && e42 && e42.__esModule) return e42;
            var n5 = /* @__PURE__ */ Object.create(null);
            if (r5.r(n5), Object.defineProperty(n5, "default", { enumerable: true, value: e42 }), 2 & t32 && "string" != typeof e42) for (var o7 in e42) r5.d(n5, o7, (function(t42) {
              return e42[t42];
            }).bind(null, o7));
            return n5;
          }, r5.n = function(e42) {
            var t32 = e42 && e42.__esModule ? function() {
              return e42.default;
            } : function() {
              return e42;
            };
            return r5.d(t32, "a", t32), t32;
          }, r5.o = function(e42, t32) {
            return {}.hasOwnProperty.call(e42, t32);
          }, r5.p = "", r5(r5.s = 0);
        }([function(e32, t22, r5) {
          "use strict";
          function n5(e42) {
            try {
              if (!e42) return false;
              if ("undefined" != typeof Promise && e42 instanceof Promise) return true;
              if ("undefined" != typeof window && "function" == typeof window.Window && e42 instanceof window.Window) return false;
              if ("undefined" != typeof window && "function" == typeof window.constructor && e42 instanceof window.constructor) return false;
              var t32 = {}.toString;
              if (t32) {
                var r22 = t32.call(e42);
                if ("[object Window]" === r22 || "[object global]" === r22 || "[object DOMWindow]" === r22) return false;
              }
              if ("function" == typeof e42.then) return true;
            } catch (e52) {
              return false;
            }
            return false;
          }
          r5.r(t22), r5.d(t22, "ZalgoPromise", function() {
            return l7;
          });
          var o7, i8 = [], s7 = [], u7 = 0;
          function a7() {
            if (!u7 && o7) {
              var e42 = o7;
              o7 = null, e42.resolve();
            }
          }
          function c6() {
            u7 += 1;
          }
          function d7() {
            u7 -= 1, a7();
          }
          var l7 = function() {
            function e42(e52) {
              var t42 = this;
              if (this.resolved = void 0, this.rejected = void 0, this.errorHandled = void 0, this.value = void 0, this.error = void 0, this.handlers = void 0, this.dispatching = void 0, this.stack = void 0, this.resolved = false, this.rejected = false, this.errorHandled = false, this.handlers = [], e52) {
                var r22, n22, o22 = false, i22 = false, s22 = false;
                c6();
                try {
                  e52(function(e62) {
                    s22 ? t42.resolve(e62) : (o22 = true, r22 = e62);
                  }, function(e62) {
                    s22 ? t42.reject(e62) : (i22 = true, n22 = e62);
                  });
                } catch (e62) {
                  return d7(), void this.reject(e62);
                }
                d7(), s22 = true, o22 ? this.resolve(r22) : i22 && this.reject(n22);
              }
            }
            var t32 = e42.prototype;
            return t32.resolve = function(e52) {
              if (this.resolved || this.rejected) return this;
              if (n5(e52)) throw new Error("Can not resolve promise with another promise");
              return this.resolved = true, this.value = e52, this.dispatch(), this;
            }, t32.reject = function(e52) {
              var t42 = this;
              if (this.resolved || this.rejected) return this;
              if (n5(e52)) throw new Error("Can not reject promise with another promise");
              if (!e52) {
                var r22 = e52 && "function" == typeof e52.toString ? e52.toString() : {}.toString.call(e52);
                e52 = new Error("Expected reject to be called with Error, got " + r22);
              }
              return this.rejected = true, this.error = e52, this.errorHandled || setTimeout(function() {
                t42.errorHandled || function(e62, t52) {
                  if (-1 === i8.indexOf(e62)) {
                    i8.push(e62), setTimeout(function() {
                      throw e62;
                    }, 1);
                    for (var r32 = 0; r32 < s7.length; r32++) s7[r32](e62, t52);
                  }
                }(e52, t42);
              }, 1), this.dispatch(), this;
            }, t32.asyncReject = function(e52) {
              return this.errorHandled = true, this.reject(e52), this;
            }, t32.dispatch = function() {
              var t42 = this.resolved, r22 = this.rejected, o22 = this.handlers;
              if (!this.dispatching && (t42 || r22)) {
                this.dispatching = true, c6();
                for (var i22 = function(e52, t52) {
                  return e52.then(function(e62) {
                    t52.resolve(e62);
                  }, function(e62) {
                    t52.reject(e62);
                  });
                }, s22 = 0; s22 < o22.length; s22++) {
                  var u22 = o22[s22], a22 = u22.onSuccess, l22 = u22.onError, f8 = u22.promise, h6 = void 0;
                  if (t42) try {
                    h6 = a22 ? a22(this.value) : this.value;
                  } catch (e52) {
                    f8.reject(e52);
                    continue;
                  }
                  else if (r22) {
                    if (!l22) {
                      f8.reject(this.error);
                      continue;
                    }
                    try {
                      h6 = l22(this.error);
                    } catch (e52) {
                      f8.reject(e52);
                      continue;
                    }
                  }
                  if (h6 instanceof e42 && (h6.resolved || h6.rejected)) {
                    var g7 = h6;
                    g7.resolved ? f8.resolve(g7.value) : f8.reject(g7.error), g7.errorHandled = true;
                  } else n5(h6) ? h6 instanceof e42 && (h6.resolved || h6.rejected) ? h6.resolved ? f8.resolve(h6.value) : f8.reject(h6.error) : i22(h6, f8) : f8.resolve(h6);
                }
                o22.length = 0, this.dispatching = false, d7();
              }
            }, t32.then = function(t42, r22) {
              if (t42 && "function" != typeof t42 && !t42.call) throw new Error("Promise.then expected a function for success handler");
              if (r22 && "function" != typeof r22 && !r22.call) throw new Error("Promise.then expected a function for error handler");
              var n22 = new e42();
              return this.handlers.push({ promise: n22, onSuccess: t42, onError: r22 }), this.errorHandled = true, this.dispatch(), n22;
            }, t32.catch = function(e52) {
              return this.then(void 0, e52);
            }, t32.finally = function(t42) {
              if (t42 && "function" != typeof t42 && !t42.call) throw new Error("Promise.finally expected a function");
              return this.then(function(r22) {
                return e42.try(t42).then(function() {
                  return r22;
                });
              }, function(r22) {
                return e42.try(t42).then(function() {
                  throw r22;
                });
              });
            }, t32.timeout = function(e52, t42) {
              var r22 = this;
              if (this.resolved || this.rejected) return this;
              var n22 = setTimeout(function() {
                r22.resolved || r22.rejected || r22.reject(t42 || new Error("Promise timed out after " + e52 + "ms"));
              }, e52);
              return this.then(function(e62) {
                return clearTimeout(n22), e62;
              });
            }, t32.toPromise = function() {
              if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
              return Promise.resolve(this);
            }, t32.lazy = function() {
              return this.errorHandled = true, this;
            }, e42.resolve = function(t42) {
              return t42 instanceof e42 ? t42 : n5(t42) ? new e42(function(e52, r22) {
                return t42.then(e52, r22);
              }) : new e42().resolve(t42);
            }, e42.reject = function(t42) {
              return new e42().reject(t42);
            }, e42.asyncReject = function(t42) {
              return new e42().asyncReject(t42);
            }, e42.all = function(t42) {
              var r22 = new e42(), o22 = t42.length, i22 = [].slice();
              if (!o22) return r22.resolve(i22), r22;
              for (var s22 = function(e52, t52, n22) {
                return t52.then(function(t6) {
                  i22[e52] = t6, 0 == (o22 -= 1) && r22.resolve(i22);
                }, function(e62) {
                  n22.reject(e62);
                });
              }, u22 = 0; u22 < t42.length; u22++) {
                var a22 = t42[u22];
                if (a22 instanceof e42) {
                  if (a22.resolved) {
                    i22[u22] = a22.value, o22 -= 1;
                    continue;
                  }
                } else if (!n5(a22)) {
                  i22[u22] = a22, o22 -= 1;
                  continue;
                }
                s22(u22, e42.resolve(a22), r22);
              }
              return 0 === o22 && r22.resolve(i22), r22;
            }, e42.hash = function(t42) {
              var r22 = {}, o22 = [], i22 = function(e52) {
                if (t42.hasOwnProperty(e52)) {
                  var i32 = t42[e52];
                  n5(i32) ? o22.push(i32.then(function(t52) {
                    r22[e52] = t52;
                  })) : r22[e52] = i32;
                }
              };
              for (var s22 in t42) i22(s22);
              return e42.all(o22).then(function() {
                return r22;
              });
            }, e42.map = function(t42, r22) {
              return e42.all(t42.map(r22));
            }, e42.onPossiblyUnhandledException = function(e52) {
              return function(e62) {
                return s7.push(e62), { cancel: function() {
                  s7.splice(s7.indexOf(e62), 1);
                } };
              }(e52);
            }, e42.try = function(t42, r22, n22) {
              if (t42 && "function" != typeof t42 && !t42.call) throw new Error("Promise.try expected a function");
              var o22;
              c6();
              try {
                o22 = t42.apply(r22, n22 || []);
              } catch (t52) {
                return d7(), e42.reject(t52);
              }
              return d7(), e42.resolve(o22);
            }, e42.delay = function(t42) {
              return new e42(function(e52) {
                setTimeout(e52, t42);
              });
            }, e42.isPromise = function(t42) {
              return !!(t42 && t42 instanceof e42) || n5(t42);
            }, e42.flush = function() {
              return t42 = o7 = o7 || new e42(), a7(), t42;
              var t42;
            }, e42;
          }();
        }]);
      }, 834: (e22, t22, r5) => {
        e22.exports = r5(994);
      } }, t5 = {}, function r5(n5) {
        var o7 = t5[n5];
        if (void 0 !== o7) return o7.exports;
        var i8 = t5[n5] = { exports: {} };
        return e6[n5].call(i8.exports, i8, i8.exports, r5), i8.exports;
      }(156);
      var e6, t5;
    });
  }
});

// node_modules/@contentstack/live-preview-utils/dist/modern/livePreview/eventManager/livePreviewEventManager.constant.js
var LIVE_PREVIEW_POST_MESSAGE_EVENTS = {
  INIT: "init",
  ON_CHANGE: "client-data-send",
  HISTORY: "history",
  CHECK_ENTRY_PAGE: "check-entry-page",
  URL_CHANGE: "url-change",
  VARIANT_PATCH: "variant-patch-update"
};
var LIVE_PREVIEW_CHANNEL_ID = "live-preview";

// node_modules/@contentstack/live-preview-utils/dist/modern/livePreview/eventManager/livePreviewEventManager.js
var import_advanced_post_message = __toESM2(require_dist(), 1);
var livePreviewPostMessage;
if (typeof window !== "undefined") {
  const eventOptions = {
    target: window.parent,
    debug: false,
    suppressErrors: true
  };
  if (isOpeningInNewTab()) {
    eventOptions.target = window.opener;
  }
  livePreviewPostMessage = new import_advanced_post_message.EventManager(LIVE_PREVIEW_CHANNEL_ID, eventOptions);
}
var livePreviewEventManager_default = livePreviewPostMessage;

// node_modules/@contentstack/live-preview-utils/dist/modern/livePreview/editButton/editButton.constant.js
var EDIT_BUTTON_TOOLTIP_ID = "cslp-tooltip";

// node_modules/@contentstack/live-preview-utils/dist/modern/livePreview/editButton/editButton.js
function calculateEditButtonPosition(currentHoveredElement, cslpButtonPosition) {
  const editButtonPosition = {
    upperBoundOfTooltip: 0,
    leftBoundOfTooltip: 0
  };
  const currentRectOfElement = currentHoveredElement.getBoundingClientRect();
  try {
    const buttonMeasurementValues = {
      width: 72,
      halfWidth: 36,
      height: 40,
      basicMargin: 5,
      widthWithMargin: 77
    };
    switch (cslpButtonPosition) {
      case "top-center":
        editButtonPosition.upperBoundOfTooltip = currentRectOfElement.top - buttonMeasurementValues.height;
        editButtonPosition.leftBoundOfTooltip = currentRectOfElement.width / 2 - buttonMeasurementValues.halfWidth + currentRectOfElement.left;
        break;
      case "top-right":
        editButtonPosition.upperBoundOfTooltip = currentRectOfElement.top - buttonMeasurementValues.height;
        editButtonPosition.leftBoundOfTooltip = currentRectOfElement.right - buttonMeasurementValues.width;
        break;
      case "right":
        editButtonPosition.upperBoundOfTooltip = currentRectOfElement.top - buttonMeasurementValues.basicMargin;
        editButtonPosition.leftBoundOfTooltip = currentRectOfElement.right + buttonMeasurementValues.basicMargin;
        break;
      case "bottom":
        editButtonPosition.upperBoundOfTooltip = currentRectOfElement.bottom + buttonMeasurementValues.basicMargin;
        editButtonPosition.leftBoundOfTooltip = currentRectOfElement.left - buttonMeasurementValues.basicMargin;
        break;
      case "bottom-left":
        editButtonPosition.upperBoundOfTooltip = currentRectOfElement.bottom + buttonMeasurementValues.basicMargin;
        editButtonPosition.leftBoundOfTooltip = currentRectOfElement.left - buttonMeasurementValues.basicMargin;
        break;
      case "bottom-center":
        editButtonPosition.upperBoundOfTooltip = currentRectOfElement.bottom + buttonMeasurementValues.basicMargin;
        editButtonPosition.leftBoundOfTooltip = currentRectOfElement.width / 2 - buttonMeasurementValues.halfWidth + currentRectOfElement.left;
        break;
      case "bottom-right":
        editButtonPosition.upperBoundOfTooltip = currentRectOfElement.bottom + buttonMeasurementValues.basicMargin;
        editButtonPosition.leftBoundOfTooltip = currentRectOfElement.right - buttonMeasurementValues.width;
        break;
      case "left":
        editButtonPosition.upperBoundOfTooltip = currentRectOfElement.top - buttonMeasurementValues.basicMargin;
        editButtonPosition.leftBoundOfTooltip = currentRectOfElement.left - buttonMeasurementValues.widthWithMargin;
        break;
      default:
        editButtonPosition.upperBoundOfTooltip = currentRectOfElement.top - buttonMeasurementValues.height;
        editButtonPosition.leftBoundOfTooltip = currentRectOfElement.left - buttonMeasurementValues.basicMargin;
        break;
    }
    return editButtonPosition;
  } catch (error) {
    PublicLogger.error(error);
    return editButtonPosition;
  }
}
var createSingularEditButton = (editCallback) => {
  const singularEditButton = document.createElement("div");
  singularEditButton.classList.add("cslp-tooltip-child", "singular");
  singularEditButton.setAttribute(
    "data-test-id",
    "cslp-singular-edit-button"
  );
  singularEditButton.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.1 3.5L0.3 11.3C0.1 11.5 0 11.7 0 12V15C0 15.6 0.4 16 1 16H4C4.3 16 4.5 15.9 4.7 15.7L12.5 7.9L8.1 3.5Z" fill="#718096"></path>
      <path d="M15.7 3.3L12.7 0.3C12.3 -0.1 11.7 -0.1 11.3 0.3L9.5 2.1L13.9 6.5L15.7 4.7C16.1 4.3 16.1 3.7 15.7 3.3Z" fill="#718096"></path>
    </svg>Edit`;
  singularEditButton.addEventListener("click", editCallback);
  return singularEditButton;
};
var createMultipleEditButton = (editCallback, linkCallback) => {
  const multipleEditButton = document.createElement("div");
  multipleEditButton.classList.add("cslp-tooltip-child");
  multipleEditButton.setAttribute("data-title", "Edit");
  multipleEditButton.setAttribute(
    "data-test-id",
    "cslp-multiple-edit-button"
  );
  multipleEditButton.innerHTML = ` <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.1 3.5L0.3 11.3C0.1 11.5 0 11.7 0 12V15C0 15.6 0.4 16 1 16H4C4.3 16 4.5 15.9 4.7 15.7L12.5 7.9L8.1 3.5Z" fill="#718096"></path>
      <path d="M15.7 3.3L12.7 0.3C12.3 -0.1 11.7 -0.1 11.3 0.3L9.5 2.1L13.9 6.5L15.7 4.7C16.1 4.3 16.1 3.7 15.7 3.3Z" fill="#718096"></path>
    </svg>`;
  multipleEditButton.addEventListener("click", editCallback);
  const multipleExternalLinkButton = document.createElement("div");
  multipleExternalLinkButton.classList.add("cslp-tooltip-child");
  multipleExternalLinkButton.setAttribute("data-title", "Go to link");
  multipleExternalLinkButton.setAttribute(
    "data-test-id",
    "cslp-multiple-external-link-button"
  );
  multipleExternalLinkButton.innerHTML = ` <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.66654 2.66758H13.3332V13.3342H6.66654V16.0009H13.3332C14.0405 16.0009 14.7187 15.72 15.2188 15.2199C15.7189 14.7198 15.9999 14.0415 15.9999 13.3342V2.66758C15.9999 1.96034 15.7189 1.28206 15.2188 0.781964C14.7187 0.281867 14.0405 0.000915527 13.3332 0.000915527H2.66654C1.9593 0.000915527 1.28102 0.281867 0.780927 0.781964C0.280829 1.28206 -0.00012207 1.96034 -0.00012207 2.66758V9.33425H2.66654V2.66758Z" fill="#718096" />
      <path d="M6.94263 7.05734L0.999958 13L2.88529 14.8853L8.82796 8.94267L10.8853 11V5.00001H4.88529L6.94263 7.05734Z" fill="#718096" />
    </svg>`;
  multipleExternalLinkButton.addEventListener("click", linkCallback);
  const multipleEditFragment = document.createDocumentFragment();
  multipleEditFragment.appendChild(multipleEditButton);
  multipleEditFragment.appendChild(multipleExternalLinkButton);
  const multipleDiv = document.createElement("div");
  multipleDiv.appendChild(multipleEditFragment);
  multipleDiv.classList.add(cslpTagStyles()["multiple"]);
  return multipleDiv;
};
function getEditButtonPosition(currentHoveredElement, defaultPosition) {
  if (!currentHoveredElement)
    return { upperBoundOfTooltip: 0, leftBoundOfTooltip: 0 };
  const cslpButtonPosition = currentHoveredElement.getAttribute(
    "data-cslp-button-position"
  );
  if (cslpButtonPosition) {
    return calculateEditButtonPosition(
      currentHoveredElement,
      cslpButtonPosition
    );
  }
  return calculateEditButtonPosition(
    currentHoveredElement,
    defaultPosition || "top"
  );
}
function shouldRenderEditButton() {
  var _a, _b;
  const config2 = configManager_default.get();
  if (!config2.editButton.enable) {
    if (config2.editButton.enable === void 0)
      PublicLogger.error(
        "enable key is required inside editButton object"
      );
    return false;
  }
  try {
    const currentLocation = new URL(window.location.href);
    const cslpButtonQueryValue = currentLocation.searchParams.get("cslp-buttons");
    if (cslpButtonQueryValue !== null && config2.editButton.includeByQueryParameter !== false)
      return cslpButtonQueryValue === "false" ? false : true;
  } catch (error) {
    PublicLogger.error(error);
  }
  const iFrameCheck = inIframe();
  if (!iFrameCheck && ((_a = config2.editButton.exclude) == null ? void 0 : _a.find(
    (exclude) => exclude === "outsideLivePreviewPortal"
  ))) {
    return false;
  }
  if (iFrameCheck && ((_b = config2.editButton.exclude) == null ? void 0 : _b.find(
    (exclude) => exclude === "insideLivePreviewPortal"
  ))) {
    return false;
  } else if (iFrameCheck) {
    if (config2.windowType === "builder") {
      return false;
    }
    return true;
  }
  return true;
}
function toggleEditButtonElement() {
  var _a;
  const render = shouldRenderEditButton();
  const exists = doesEditButtonExist();
  if (render && !exists) {
    LivePreviewEditButton.livePreviewEditButton = new LivePreviewEditButton();
  } else if (!render && exists) {
    (_a = LivePreviewEditButton.livePreviewEditButton) == null ? void 0 : _a.destroy();
  }
}
function doesEditButtonExist() {
  return document.getElementById(EDIT_BUTTON_TOOLTIP_ID) !== null;
}
var LivePreviewEditButton = class {
  constructor() {
    this.tooltip = null;
    this.typeOfCurrentChild = "singular";
    this.tooltipChild = {
      singular: null,
      multiple: null
    };
    this.createCslpTooltip = this.createCslpTooltip.bind(this);
    this.updateTooltipPosition = this.updateTooltipPosition.bind(this);
    this.addEditStyleOnHover = this.addEditStyleOnHover.bind(this);
    this.scrollHandler = this.scrollHandler.bind(this);
    this.generateRedirectUrl = this.generateRedirectUrl.bind(this);
    this.linkClickHandler = this.linkClickHandler.bind(this);
    this.destroy = this.destroy.bind(this);
    if (this.createCslpTooltip()) {
      this.updateTooltipPosition();
      window.addEventListener("scroll", this.updateTooltipPosition);
      window.addEventListener("mouseover", this.addEditStyleOnHover);
    }
  }
  createCslpTooltip() {
    const editButton = configManager_default.get().editButton;
    if (!document.getElementById(EDIT_BUTTON_TOOLTIP_ID) && editButton.enable && shouldRenderEditButton()) {
      const tooltip = document.createElement("button");
      this.tooltip = tooltip;
      this.tooltip.classList.add(cslpTagStyles()["cslp-tooltip"]);
      this.tooltip.setAttribute("data-test-id", "cs-cslp-tooltip");
      this.tooltip.id = EDIT_BUTTON_TOOLTIP_ID;
      window.document.body.insertAdjacentElement(
        "beforeend",
        this.tooltip
      );
      this.tooltipChild.singular = createSingularEditButton(
        this.scrollHandler
      );
      this.tooltipChild.multiple = createMultipleEditButton(
        this.scrollHandler,
        this.linkClickHandler
      );
      this.tooltip.appendChild(this.tooltipChild.singular);
      return true;
    }
    return false;
  }
  updateTooltipPosition() {
    var _a;
    if (!document.getElementById("cslp-tooltip")) {
      this.createCslpTooltip();
    }
    const editButton = configManager_default.get().editButton;
    const elements = configManager_default.get().elements;
    if (!elements.highlightedElement || !this.tooltip) return false;
    const currentRectOfElement = elements.highlightedElement.getBoundingClientRect();
    const currentRectOfParentOfElement = (_a = this.tooltip.parentElement) == null ? void 0 : _a.getBoundingClientRect();
    if (currentRectOfElement && currentRectOfParentOfElement) {
      const editButtonPosition = getEditButtonPosition(
        elements.highlightedElement,
        editButton.position
      );
      let upperBoundOfTooltip = editButtonPosition.upperBoundOfTooltip;
      const leftBoundOfTooltip = editButtonPosition.leftBoundOfTooltip;
      if (upperBoundOfTooltip < 0) {
        if (currentRectOfElement.top < 0)
          upperBoundOfTooltip = currentRectOfElement.top;
        else upperBoundOfTooltip = 0;
      }
      this.tooltip.style.top = upperBoundOfTooltip + "px";
      this.tooltip.style.zIndex = elements.highlightedElement.style.zIndex || "200";
      this.tooltip.style.left = leftBoundOfTooltip + "px";
      if (this.tooltipChild.singular && this.tooltipChild.multiple) {
        if (elements.highlightedElement.hasAttribute("href") && this.typeOfCurrentChild !== "multiple") {
          this.tooltip.innerHTML = "";
          this.tooltip.appendChild(this.tooltipChild.multiple);
          this.typeOfCurrentChild = "multiple";
        } else if (this.typeOfCurrentChild !== "singular") {
          this.tooltip.innerHTML = "";
          this.tooltip.appendChild(this.tooltipChild.singular);
          this.typeOfCurrentChild = "singular";
        }
      }
      return true;
    }
    return false;
  }
  addEditStyleOnHover(e6) {
    const updateStyles = this.shouldUpdateStyle(e6);
    const shouldRedraw = typeof updateStyles === "undefined" ? true : updateStyles;
    if (!shouldRedraw) {
      return;
    }
    const updateTooltipPosition = ({
      cslpTag,
      highlightedElement
    }) => {
      var _a, _b;
      if (this.updateTooltipPosition()) {
        (_a = this.tooltip) == null ? void 0 : _a.setAttribute("current-data-cslp", cslpTag);
        (_b = this.tooltip) == null ? void 0 : _b.setAttribute(
          "current-href",
          highlightedElement.getAttribute("href") ?? ""
        );
      }
    };
    const editButton = configManager_default.get().editButton;
    const windowType = configManager_default.get().windowType;
    if ((windowType === ILivePreviewWindowType.PREVIEW || windowType === ILivePreviewWindowType.INDEPENDENT) && editButton.enable) {
      addCslpOutline(e6, updateTooltipPosition);
    }
  }
  shouldUpdateStyle(event) {
    var _a;
    const editButtonPos = configManager_default.get().editButton.position;
    const editButtonDomRect = (_a = this.tooltip) == null ? void 0 : _a.getBoundingClientRect();
    return isPointerWithinEditButtonSafeZone({
      event,
      editButtonPos,
      editButtonDomRect
    });
  }
  scrollHandler() {
    var _a;
    if (!this.tooltip) return;
    const cslpTag = this.tooltip.getAttribute("current-data-cslp");
    if (cslpTag) {
      const {
        content_type_uid,
        entry_uid,
        locale,
        variant,
        fieldPathWithIndex
      } = extractDetailsFromCslp(cslpTag);
      if (inIframe() || isOpeningInNewTab()) {
        (_a = livePreviewEventManager_default) == null ? void 0 : _a.send("scroll", {
          field: fieldPathWithIndex,
          content_type_uid,
          entry_uid,
          variant,
          locale
        });
      } else {
        try {
          const redirectUrl = this.generateRedirectUrl(
            content_type_uid,
            locale,
            entry_uid,
            variant,
            fieldPathWithIndex
          );
          window.open(redirectUrl, "_blank");
        } catch (error) {
          PublicLogger.error(error);
        }
      }
    }
  }
  /**
   * Generates the redirect URL for editing a specific entry in the Live Preview SDK.
   * @param content_type_uid - The UID of the content type.
   * @param locale - The locale of the entry (default: "en-us").
   * @param entry_uid - The UID of the entry.
   * @param preview_field - The field to be previewed.
   * @returns The redirect URL for editing the entry.
   */
  generateRedirectUrl(content_type_uid, locale = "en-us", entry_uid, variant, preview_field) {
    const config2 = configManager_default.get();
    if (!config2.stackDetails.apiKey) {
      throw `To use edit tags, you must provide the stack API key. Specify the API key while initializing the Live Preview SDK.

                ContentstackLivePreview.init({
                    ...,
                    stackDetails: {
                        apiKey: 'your-api-key'
                    },
                    ...
                })`;
    }
    if (!config2.stackDetails.environment) {
      throw `To use edit tags, you must provide the preview environment. Specify the preview environment while initializing the Live Preview SDK.

                ContentstackLivePreview.init({
                    ...,
                    stackDetails: {
                        environment: 'Your-environment'
                    },
                    ...
                })`;
    }
    const protocol = String(config2.clientUrlParams.protocol);
    const host = String(config2.clientUrlParams.host);
    const port = String(config2.clientUrlParams.port);
    const environment = String(config2.stackDetails.environment);
    const branch = String(config2.stackDetails.branch || "main");
    let urlHash = `!/stack/${config2.stackDetails.apiKey}/content-type/${content_type_uid}/${locale ?? "en-us"}/entry/${entry_uid}`;
    if (variant) {
      urlHash += `/variant/${variant}/edit`;
    } else {
      urlHash += `/edit`;
    }
    const url2 = new URL(`${protocol}://${host}`);
    url2.port = port;
    url2.hash = urlHash;
    if (config2.stackDetails.branch) {
      url2.searchParams.append("branch", branch);
    }
    url2.searchParams.append("preview-field", preview_field);
    url2.searchParams.append("preview-locale", locale ?? "en-us");
    url2.searchParams.append("preview-environment", environment);
    return `${url2.origin}/${url2.hash}${url2.search}`;
  }
  linkClickHandler() {
    if (!this.tooltip) return;
    const hrefAttribute = this.tooltip.getAttribute("current-href");
    if (hrefAttribute) {
      window.location.assign(hrefAttribute);
    }
  }
  /**
   * Destroys the edit button by removing event listeners and removing the tooltip.
   */
  destroy() {
    var _a;
    window.removeEventListener("scroll", this.updateTooltipPosition);
    window.removeEventListener("mouseover", this.addEditStyleOnHover);
    (_a = this.tooltip) == null ? void 0 : _a.remove();
  }
};
LivePreviewEditButton.livePreviewEditButton = null;
E2(function handleWindowTypeChange() {
  if (typeof window === "undefined") return;
  configManager_default.get().windowType;
  if (LivePreviewEditButton && !isOpeningInTimeline()) {
    toggleEditButtonElement();
  }
});
function isPointerWithinEditButtonSafeZone({
  event,
  editButtonDomRect,
  editButtonPos
}) {
  const SAFE_ZONE_RATIO = 0.1;
  const MAX_SAFE_ZONE_DISTANCE = 30;
  if (!editButtonDomRect || !editButtonPos) {
    return void 0;
  }
  if (!(editButtonDomRect.x > 0) || !(editButtonDomRect.y > 0)) {
    return void 0;
  }
  const isTop = editButtonPos.includes("top");
  const isLeft = editButtonPos.includes("left");
  const isBottom = editButtonPos.includes("bottom");
  const isVertical = isTop || isBottom;
  const cslpElement = event.composedPath().find((target) => {
    const element2 = target;
    if (element2.nodeName === "BODY") {
      return false;
    }
    if (typeof (element2 == null ? void 0 : element2.hasAttribute) !== "function") {
      return false;
    }
    return element2.hasAttribute("data-cslp");
  });
  if (!cslpElement) {
    return void 0;
  }
  const element = cslpElement;
  const elementRect = element.getBoundingClientRect();
  let safeZoneDistance = isVertical ? (
    // if vertical positioning ("top"/"bottom")
    // button is rendered along the width
    elementRect.width * SAFE_ZONE_RATIO
  ) : (
    // button is rendered along the height
    elementRect.height * SAFE_ZONE_RATIO
  );
  safeZoneDistance = safeZoneDistance > MAX_SAFE_ZONE_DISTANCE ? MAX_SAFE_ZONE_DISTANCE : safeZoneDistance;
  const tooltipX2 = editButtonDomRect.x + editButtonDomRect.width;
  const tooltipY2 = editButtonDomRect.y + editButtonDomRect.height;
  const safeX1 = editButtonDomRect.x - safeZoneDistance;
  const safeX2 = tooltipX2 + safeZoneDistance;
  const safeY1 = editButtonDomRect.y - safeZoneDistance;
  const safeY2 = tooltipY2 + safeZoneDistance;
  if (isTop || isBottom) {
    const verticalSafeDistance = isTop ? Math.abs(tooltipY2 - event.clientY) : Math.abs(editButtonDomRect.y - event.clientY);
    const isInSafeZone = event.clientX > safeX1 && event.clientX < safeX2 && verticalSafeDistance < safeZoneDistance;
    if (isInSafeZone) {
      return false;
    }
  } else {
    const horizontalSafeDistance = isLeft ? Math.abs(tooltipX2 - event.clientX) : Math.abs(editButtonDomRect.x - event.clientX);
    const isInSafeZone = event.clientY > safeY1 && event.clientY < safeY2 && horizontalSafeDistance < safeZoneDistance;
    if (isInSafeZone) {
      return false;
    }
  }
  return true;
}

// node_modules/@contentstack/live-preview-utils/dist/modern/livePreview/eventManager/types/livePreviewPostMessageEvent.type.js
var OnChangeLivePreviewPostMessageEventTypes = {
  HASH_CHANGE: "hash_change",
  URL_CHANGE: "url_change"
};

// node_modules/@contentstack/live-preview-utils/dist/modern/livePreview/eventManager/postMessageEvent.hooks.js
function useHistoryPostMessageEvent() {
  var _a;
  (_a = livePreviewEventManager_default) == null ? void 0 : _a.on(
    LIVE_PREVIEW_POST_MESSAGE_EVENTS.HISTORY,
    (event) => {
      switch (event.data.type) {
        case "forward": {
          window.history.forward();
          break;
        }
        case "backward": {
          window.history.back();
          break;
        }
        case "reload": {
          window.history.go();
          break;
        }
        default: {
          const exhaustiveCheck = event.data.type;
          throw new Error(`Unhandled event: ${exhaustiveCheck}`);
        }
      }
    }
  );
}
function useOnEntryUpdatePostMessageEvent() {
  var _a;
  (_a = livePreviewEventManager_default) == null ? void 0 : _a.on(
    LIVE_PREVIEW_POST_MESSAGE_EVENTS.ON_CHANGE,
    (event) => {
      var _a2, _b, _c;
      try {
        const { ssr, onChange, stackDetails } = configManager_default.get();
        const event_type = (_a2 = event.data._metadata) == null ? void 0 : _a2.event_type;
        setConfigFromParams({
          live_preview: event.data.hash
        });
        if (!ssr && !event_type) {
          onChange();
        }
        if (isOpeningInNewTab()) {
          if (!window) {
            PublicLogger.error("window is not defined");
            return;
          }
          ;
          if (ssr && !event_type) {
            const url2 = new URL(window.location.href);
            let live_preview = url2.searchParams.get("live_preview");
            let content_type_uid = url2.searchParams.get("content_type_uid");
            let entry_uid = url2.searchParams.get("entry_uid");
            if (live_preview && content_type_uid && entry_uid) {
              window.location.reload();
            } else {
              live_preview = event.data.hash;
              content_type_uid = event.data.content_type_uid || ((_b = stackDetails.$contentTypeUid) == null ? void 0 : _b.toString()) || "";
              entry_uid = event.data.entry_uid || ((_c = stackDetails.$entryUid) == null ? void 0 : _c.toString()) || "";
              url2.searchParams.set("live_preview", live_preview);
              if (content_type_uid) {
                url2.searchParams.set(
                  "content_type_uid",
                  content_type_uid
                );
              }
              if (entry_uid) {
                url2.searchParams.set(
                  "entry_uid",
                  entry_uid
                );
              }
              window.location.href = url2.toString();
            }
          }
          if (event_type === OnChangeLivePreviewPostMessageEventTypes.HASH_CHANGE) {
            const newUrl = new URL(window.location.href);
            newUrl.searchParams.set("live_preview", event.data.hash);
            window.history.pushState({}, "", newUrl.toString());
          }
          if (event_type === OnChangeLivePreviewPostMessageEventTypes.URL_CHANGE && event.data.url) {
            window.location.href = event.data.url;
          }
        }
      } catch (error) {
        PublicLogger.error("Error handling live preview update:", error);
        return;
      }
    }
  );
}
function sendInitializeLivePreviewPostMessageEvent() {
  var _a;
  (_a = livePreviewEventManager_default) == null ? void 0 : _a.send(
    LIVE_PREVIEW_POST_MESSAGE_EVENTS.INIT,
    {
      config: {
        shouldReload: configManager_default.get().ssr,
        href: window.location.href,
        sdkVersion: "4.1.1",
        mode: configManager_default.get().mode
      }
    }
  ).then((data) => {
    var _a2, _b;
    const {
      contentTypeUid,
      entryUid,
      windowType = ILivePreviewWindowType.PREVIEW
    } = data || {};
    if (((_b = (_a2 = configManager_default) == null ? void 0 : _a2.get()) == null ? void 0 : _b.windowType) && configManager_default.get().windowType === ILivePreviewWindowType.BUILDER) {
      return;
    }
    if (contentTypeUid && entryUid) {
      setConfigFromParams({
        content_type_uid: contentTypeUid,
        entry_uid: entryUid
      });
    } else {
    }
    if (configManager_default.get().ssr || isOpeningInTimeline() || isOpeningInNewTab()) {
      addParamsToUrl();
    }
    configManager_default.set("windowType", windowType);
    if (!configManager_default.get().ssr) {
      setInterval(() => {
        sendCurrentPageUrlPostMessageEvent();
      }, 1500);
    }
    useHistoryPostMessageEvent();
    useOnEntryUpdatePostMessageEvent();
  }).catch((e6) => {
  });
}
function sendCurrentPageUrlPostMessageEvent() {
  var _a;
  (_a = livePreviewEventManager_default) == null ? void 0 : _a.send(LIVE_PREVIEW_POST_MESSAGE_EVENTS.CHECK_ENTRY_PAGE, {
    href: window.location.href
  }).catch(() => {
  });
}

// node_modules/@contentstack/live-preview-utils/dist/modern/livePreview/livePreviewProductionCleanup.js
function removeDataCslp() {
  const nodes = document.querySelectorAll("[data-cslp]");
  nodes.forEach((node) => {
    node.removeAttribute("data-cslp");
    node.removeAttribute("data-cslp-button-position");
  });
}

// node_modules/@contentstack/live-preview-utils/dist/modern/livePreview/removeFromOnChangeSubscribers.js
function removeFromOnChangeSubscribers(callbackStack, callback) {
  if (typeof callback === "string") {
    if (!callbackStack[callback]) {
      PublicLogger.warn("No subscriber found with the given id.");
    }
    delete callbackStack[callback];
  } else if (typeof callback === "function") {
    const isCallbackDeleted = Object.entries(
      callbackStack
    ).some(([uid, func]) => {
      if (func === callback) {
        delete callbackStack[uid];
        return true;
      }
      return false;
    });
    if (!isCallbackDeleted) {
      PublicLogger.warn("No subscriber found with the given callback.");
    }
  }
}

// node_modules/@contentstack/live-preview-utils/dist/modern/livePreview/live-preview.js
var LivePreview = class {
  constructor() {
    this.subscribers = {};
    this.requestDataSync = this.requestDataSync.bind(this);
    this.subscribeToOnEntryChange = this.subscribeToOnEntryChange.bind(this);
    this.publish = this.publish.bind(this);
    this.unsubscribeOnEntryChange = this.unsubscribeOnEntryChange.bind(this);
    const config2 = configManager_default.get();
    if (config2.debug) {
      PublicLogger.debug(
        "Contentstack Live Preview Debugging mode: config --",
        configManager_default.config
      );
    }
    if (config2.enable) {
      if (typeof document !== void 0) {
        if (document.readyState === "interactive" || document.readyState === "complete") {
          this.requestDataSync();
        } else {
          document.addEventListener("DOMContentLoaded", this.requestDataSync);
        }
      } else {
        window.addEventListener("load", this.requestDataSync);
      }
      if (!isOpeningInTimeline() && (config2.editButton.enable || config2.mode >= ILivePreviewModeConfig.BUILDER)) {
        LivePreviewEditButton.livePreviewEditButton = new LivePreviewEditButton();
      }
    } else if (config2.cleanCslpOnProduction) {
      removeDataCslp();
    }
  }
  // Request parent for data sync when document loads
  requestDataSync() {
    const config2 = configManager_default.get();
    configManager_default.set("onChange", this.publish);
    config2.onChange();
    sendInitializeLivePreviewPostMessageEvent();
  }
  subscribeToOnEntryChange(callback, callbackUid) {
    this.subscribers[callbackUid] = callback;
    return callbackUid;
  }
  publish() {
    Object.values(this.subscribers).forEach(
      (func) => {
        func();
      }
    );
  }
  unsubscribeOnEntryChange(callback) {
    removeFromOnChangeSubscribers(this.subscribers, callback);
  }
};

// node_modules/@contentstack/live-preview-utils/dist/modern/livePreview/onPageTraversal.js
function handlePageTraversal() {
  window.addEventListener("unload", () => {
    var _a;
    const targetURL = document.activeElement.href;
    if (targetURL) {
      (_a = livePreviewEventManager_default) == null ? void 0 : _a.send(
        LIVE_PREVIEW_POST_MESSAGE_EVENTS.URL_CHANGE,
        {
          targetURL
        }
      );
    }
  });
}

// node_modules/@contentstack/live-preview-utils/dist/modern/timeline/timelinePostMessage/timelinePostMessage.constant.js
var TIMELINE_CHANNEL_ID = "timeline";
var timelinePostMessageEvents = {
  SEND_CURRENT_BASE_ROUTE: "send-current-base-route",
  SEND_CSLP_DATA: "send-cslp-data",
  DIFF_VALUE: "diff-value",
  REMOVE_DIFF: "remove-diff"
};

// node_modules/@contentstack/live-preview-utils/dist/modern/timeline/timelinePostMessage/timelinePostMessage.js
var import_advanced_post_message2 = __toESM2(require_dist(), 1);
var timelinePostMessage;
if (typeof window !== "undefined") {
  timelinePostMessage = new import_advanced_post_message2.EventManager(TIMELINE_CHANNEL_ID, {
    target: window.parent,
    debug: false
  });
}
var timelinePostMessage_default = timelinePostMessage;

// node_modules/@contentstack/live-preview-utils/dist/modern/timeline/compare/compare.style.js
var compareGlobalStyles = () => {
  const css = b4;
  css`
        cs-compare {
            &.cs-compare--added {
                background: rgba(0, 122, 82, 0.2);
                border-bottom: 2px solid rgba(0, 122, 82);
            }

            &.cs-compare--removed {
                background: rgba(214, 36, 0, 0.2);
                text-decoration: line-through 2px solid rgba(214, 36, 0, 1);
            }
        }
        .cs-compare__void--added {
            background: rgba(0, 122, 82, 0.2);
            outline: 2px solid rgba(0, 122, 82);
        }

        .cs-compare__void--removed {
            background: rgba(214, 36, 0, 0.2);
            outline: 2px solid rgba(214, 36, 0, 1);
        }
    `;
};

// node_modules/@contentstack/live-preview-utils/dist/modern/timeline/compare/compare.js
var voidElements = /* @__PURE__ */ new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
  "video"
]);
var LEAF_CSLP_SELECTOR = "[data-cslp]:not(:has([data-cslp]))";
var DIFF_WRAPPER = "cs-compare";
function registerCompareElement() {
  class Compare extends HTMLSpanElement {
    constructor() {
      super();
    }
  }
  if (!customElements.get(DIFF_WRAPPER)) {
    customElements.define(DIFF_WRAPPER, Compare, {
      extends: "span"
    });
  }
}
function handleWebCompare() {
  var _a, _b, _c, _d;
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }
  compareGlobalStyles();
  registerCompareElement();
  (_a = timelinePostMessage_default) == null ? void 0 : _a.on(
    timelinePostMessageEvents.SEND_CURRENT_BASE_ROUTE,
    async () => {
      return { url: window.location.href.split("?")[0] };
    }
  );
  (_b = timelinePostMessage_default) == null ? void 0 : _b.on(
    timelinePostMessageEvents.SEND_CSLP_DATA,
    async () => {
      const elements = Array.from(
        document.querySelectorAll(LEAF_CSLP_SELECTOR)
      );
      const map2 = {};
      for (const element of elements) {
        const cslp = element.getAttribute("data-cslp");
        if (element.hasAttributes() && voidElements.has(element.tagName.toLowerCase())) {
          let attributes = "";
          for (const attr of element.attributes) {
            attributes += `${attr.name} -> ${attr.value}
`;
          }
          map2[cslp] = attributes;
        } else {
          map2[cslp] = element.innerHTML;
        }
      }
      return map2;
    }
  );
  const mergeColors = (className = ".cs-compare--added") => {
    const elements = Array.from(document.querySelectorAll(className));
    for (let i8 = 1; i8 < elements.length; i8++) {
      const prev = elements[i8 - 1];
      const next = elements[i8];
      if (prev.nextElementSibling === next)
        prev.appendChild(prev.nextSibling);
    }
  };
  (_c = timelinePostMessage_default) == null ? void 0 : _c.on(timelinePostMessageEvents.DIFF_VALUE, async (event) => {
    const { diff, type } = event.data;
    const operation = type === "base" ? "removed" : "added";
    const elements = Array.from(
      document.querySelectorAll(LEAF_CSLP_SELECTOR)
    );
    for (const element of elements) {
      const path = element.getAttribute("data-cslp");
      if (!diff[path]) continue;
      if (voidElements.has(element.tagName.toLowerCase())) {
        element.classList.add(`cs-compare__void--${operation}`);
      } else {
        element.innerHTML = diff[path];
      }
    }
    ;
    mergeColors(`.cs-compare--${operation}`);
  });
  (_d = timelinePostMessage_default) == null ? void 0 : _d.on(timelinePostMessageEvents.REMOVE_DIFF, async () => {
    const elements = Array.from(document.querySelectorAll("cs-compare"));
    for (const element of elements) {
      const parent2 = element.parentElement;
      while (element.firstChild) {
        parent2.insertBefore(element.firstChild, element);
      }
      parent2.removeChild(element);
    }
    const voidElements2 = Array.from(
      document.querySelectorAll(
        ".cs-compare__void--added, .cs-compare__void--removed"
      )
    );
    for (const element of voidElements2) {
      element.classList.remove("cs-compare__void--added");
      element.classList.remove("cs-compare__void--removed");
    }
  });
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/startEditingButton.js
var import_classnames2 = __toESM(require_classnames(), 1);

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/getVisualBuilderRedirectionUrl.js
function getVisualBuilderRedirectionUrl() {
  const { stackDetails, clientUrlParams } = configManager_default.get();
  const { branch, apiKey, environment, locale } = stackDetails;
  const { url: appUrl } = clientUrlParams;
  const searchParams = new URLSearchParams();
  if (branch) {
    searchParams.set("branch", branch);
  }
  if (environment) {
    searchParams.set("environment", environment);
  }
  searchParams.set("target-url", window.location.href);
  const elementWithDataCslp = document.querySelector(`[data-cslp]`);
  if (elementWithDataCslp) {
    const cslpData = elementWithDataCslp.getAttribute(
      "data-cslp"
    );
    const { locale: locale2 } = extractDetailsFromCslp(cslpData);
    searchParams.set("locale", locale2);
  } else if (locale) {
    searchParams.set("locale", locale);
  }
  const completeURL = new URL(
    `/#!/stack/${apiKey}/visual-builder?${searchParams.toString()}`,
    appUrl
  );
  return completeURL;
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/visualBuilder.style.js
var tooltipBaseStyle = `
    pointer-events: all;
    svg {
        pointer-events: none;
    }
    &:before {
        content: attr(data-tooltip);
        position: absolute;
        bottom: 20px;
        margin-bottom: 24px;
        padding: 12px;
        border-radius: 4px;
        width: max-content;
        max-width: 200px;
        color: #fff;
        font-family: Inter;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: 132%; /* 0.99rem */
        letter-spacing: 0.015rem;
        background: #767676;
    }
    &:after {
        content: "";
        position: absolute;
        bottom: 28px;
        /* the arrow */
        border: 10px solid #000;
        border-color: #767676 transparent transparent transparent;
    }
`;
function visualBuilderStyles() {
  return {
    "visual-builder__container": u5`
            --outline-transition: all 0.15s ease-in;
            font-family: "Inter", sans-serif;
        `,
    "visual-builder__cursor": u5`
            visibility: hidden;
            height: 0;

            &.visible {
                visibility: visible;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 2147483647 !important;

                color: #fff;

                height: auto;
                padding: 0 10px;

                display: flex;
                align-items: center;
                justify-content: center;

                pointer-events: none !important;
                position: fixed !important;
                cursor: none;
            }
        `,
    "tooltip-container": u5`
            position: absolute;
            background-color: #767676;
            color: white;
            padding: 12px;
            border-radius: 4px;
            font-size: 12px;
            line-height: 1.4;
            z-index: 1000;
            pointer-events: none;
            max-width: 250px;
            text-align: center;
        `,
    "tooltip-arrow": u5`
            position: absolute;
            background: #767676;
            width: 8px;
            height: 8px;
            transform: rotate(45deg);
        `,
    "toolbar-tooltip-content": u5`
            display: flex;
            flex-direction: column;
            gap: 4px;
        `,
    "toolbar-tooltip-content-item": u5`
            display: flex;
            align-items: center;
            justify-content: start;
            gap: 4px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            p {
                margin: 0;
                color: #fff;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 100%;
            }
        `,
    "visual-builder__overlay__wrapper": u5`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            visibility: hidden;
            z-index: 99999;

            pointer-events: none;

            &.visible {
                visibility: visible;
            }
        `,
    "visual-builder__empty-block-plus-icon": u5`
            font-size: 22px;
            font-weight: 300;
            display: flex;
            align-items: center;
            justify-content: center;
        `,
    "visual-builder__overlay--outline": u5`
            position: absolute;
            outline: 4px solid #715cdd;
            transition: var(--outline-transition);
        `,
    "visual-builder__overlay": u5`
            background: rgba(0, 0, 0, 0.3);
            box-sizing: content-box;
            pointer-events: all;
            position: absolute;
            transition: var(--outline-transition);
        `,
    "visual-builder__add-button": u5`
            position: absolute;
            pointer-events: all;

            background: #ffffff;
            color: #475161;

            border-radius: 4px;
            border: 1px solid #6c5ce7;

            height: 32px;
            min-width: 32px;
            max-width: 180px;
            padding: 8px 6px;
            transform: translate(-50%, -50%);

            font-weight: 600;
            color: #6c5ce7;
            overflow: hidden;

            z-index: 2147483646 !important;

            display: grid;
            grid-template-columns: min-content 0fr;
            align-content: center;
            gap: 0;

            transition:
                grid-template-columns 0.25s,
                left 0.15s ease-in,
                top 0.15s ease-in,
                gap 0.15s ease-in;

            &:has(.visual-builder__add-button-label):hover {
                grid-template-columns: min-content 1fr;
                gap: 8px;
                padding: 8px 16px;
            }

            svg {
                fill: #6c5ce7;
            }

            &:disabled {
                border-color: #bbbec3;
                cursor: not-allowed;
            }

            &:disabled svg {
                fill: #bbbec3;
            }
        `,
    "visual-builder__add-button-label": u5`
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        `,
    "visual-builder__add-button--loading": u5`
            cursor: wait;
            /* we have not-allowed on disabled, so we need this */
            &:disabled {
                cursor: wait;
            }
        `,
    "visual-builder__start-editing-btn": u5`
            z-index: 1000;
            text-decoration: none;
            position: fixed;
            box-shadow:
                0px 4px 15px 0px rgba(108, 92, 231, 0.2),
                0px 3px 14px 3px rgba(0, 0, 0, 0.12),
                0px 8px 10px 1px rgba(0, 0, 0, 0.14);
            display: inline-flex;
            padding: 0.5rem 1rem;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;

            border-radius: 4px;
            border: 1px solid transparent;
            background: #6c5ce7;
            transition:
                background-color 0.15s ease-in-out,
                border-color 0.15s ease-in-out,
                box-shadow 0.15s ease-in-out,
                -webkit-box-shadow 0.15s ease-in-out;

            &:hover {
                background-color: #5d50be;
            }
            &:focus {
                outline: none;
                box-shadow: 0 0 0 2px #ada4f4;
            }
            & > span {
                color: #fff;
                /* Body/P1 Bold */
                font-size: 1rem;
                font-family: Inter;
                font-weight: 600;
                line-height: 150%;
                letter-spacing: 0.01rem;
                text-transform: capitalize;
            }

            & > svg {
                color: #fff;
                font-size: 1rem;
                font-family: Inter;
                font-weight: 600;
                line-height: 150%;
                letter-spacing: 0.01rem;
                text-transform: capitalize;
            }
        `,
    "visual-builder__start-editing-btn__bottom-right": u5`
            bottom: 30px;
            right: 30px;
        `,
    "visual-builder__start-editing-btn__bottom-left": u5`
            bottom: 30px;
            left: 30px;
        `,
    "visual-builder__start-editing-btn__top-right": u5`
            top: 30px;
            right: 30px;
        `,
    "visual-builder__start-editing-btn__top-left": u5`
            top: 30px;
            left: 30px;
        `,
    "visual-builder__cursor-icon": u5`
            height: 40px;
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #5d50be;
            border-radius: 50%;
            position: absolute;
            top: 0;
            left: 0;
        `,
    "visual-builder__cursor-pointer": u5`
            position: absolute;
            top: -8px;
            left: -8px;
        `,
    "visual-builder__cursor-icon--loader": u5`
            animation: visual-builder__spinner 1s linear infinite;
        `,
    "visual-builder__variant-indicator": u5`
            height: calc(100% - 1px);
            aspect-ratio: 1;
            background: white;
            border-radius: 2px;
            border-width: 2px;
            border-style: solid;
            align-content: center;
            text-align: center;
            border-color: #BD59FA;

            svg {
                color: #BD59FA;
            }
        `,
    "visual-builder__focused-toolbar": u5`
            position: absolute;
            transform: translateY(-100%);
            z-index: 100000;
            gap: 8px;
            width: 0;
            display: flex;
            align-items: end;
            transition: var(--outline-transition);
        `,
    "visual-builder__focused-toolbar__field-label-wrapper__current-field": u5`
            padding: 4px 8px !important;
            background: #6c5ce7;
            color: #fff;
            z-index: 1;
            border-radius: 2px !important;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: fit-content;

            &:disabled {
                filter: contrast(0.7);
            }

            .visual-builder__focused-toolbar__text {
                padding-right: 3px;
                height: 16px;
            }
        `,
    "visual-builder__focused-toolbar__field-label-wrapper__parent-field": u5`
            pointer-events: none;
            color: #5d50be;
            padding: 4px !important;
            margin-bottom: 3px;
            display: none;
            width: fit-content;
            position: absolute;
            z-index: 100000;
        `,
    "field-label-dropdown-open": u5`
            .visual-builder__focused-toolbar__field-label-wrapper__parent-field {
                pointer-events: all;
                visibility: visible;
                display: initial;
            }

            .visual-builder__button--secondary:hover {
                background-color: #6c5ce7;
                color: #f9f8ff;
            }
        `,
    "visual-builder__focused-toolbar__field-label-wrapper": u5`
            display: flex;
            flex-direction: column-reverse;
            position: relative;
            margin-right: 0.5rem;
        `,
    "visual-builder__focused-toolbar__field-label-container": u5`
            display: flex;
            height: 1.75rem;
            align-items: center;
        `,
    "visual-builder__button": u5`
            background-color: transparent;
            border: 1px solid transparent;
            border-radius: 4px;
            font-size: 16px;
            font-weight: 600;
            line-height: 100%;
            padding: 8px 16px;
            text-align: center;
            z-index: 2147483647 !important;
            transition:
                color 0.15s ease-in-out,
                background-color 0.15s ease-in-out,
                border-color 0.15s ease-in-out,
                box-shadow 0.15s ease-in-out;
            // vertical-align: middle;
            &:disabled {
                cursor: not-allowed;
                svg {
                    fill: #999;
                    path {
                        fill: #999;
                    }
                }
            }
        `,
    "visual-builder__button--primary": u5`
            background-color: #6c5ce7;
            color: #fff;

            &:hover {
                background-color: #5d50be;
            }
        `,
    "visual-builder__button--secondary": u5`
            background-color: #f9f8ff;
            border: 1px solid #6c5ce7;
            color: #6c5ce7;
        `,
    "visual-builder__button--edit": u5`
            svg {
                height: 16px;
                width: 16px;

                path {
                    fill: #475161;
                }
            }
        `,
    "visual-builder__button-loader": u5`
            svg.loader {
                height: 16px;
                width: 16px;

                path {
                    fill: #ffffff;
                }
            }
        `,
    "visual-builder__button--comment-loader": u5`
            cursor: wait !important;
            svg.loader {
                height: 16px;
                width: 16px;

                path {
                    fill: #475161;
                }
            }
        `,
    "visual-builder__field-icon": u5`
            svg {
                height: 16px;
                width: 16px;
                margin-right: 3px;
            }
        `,
    "visual-builder__content-type-icon": u5`
            svg {
                height: 16px;
                width: 16px;
                margin-right: 3px;
            }
        `,
    "visual-builder__caret-right-icon": u5`
            svg {
                height: 16px;
                width: 16px;
            }
        `,
    "visual-builder__reference-icon-container": u5`
            display: flex;
            align-items: center;

            .visual-builder__field-icon {
                svg {
                    margin-right: 0px;
                }
            }
        `,
    "visual-builder__focused-toolbar__button-group": u5`
            display: flex;
            background: #fff;
            border-radius: 2px;
            height: 100%;
            padding: 4px !important;
            z-index: 2147483647 !important;

            &:has(.visual-builder__button) {
                padding: 2px;
                gap: 8px;
            }

            .visual-builder__button:enabled:hover {
                background-color: #f5f5f5;

                svg {
                    color: #5d50be;
                }
            }

            .visual-builder__button {
                background-color: #fff;
                border-color: transparent;
                color: #475161;
                padding: 4px;
                min-width: 32px;
                min-height: 32px;
            }
        `,
    "visual-builder__focused-toolbar__text": u5`
            font-family: Inter, "sans-serif";
            font-size: 0.75rem;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.015rem;
            max-width: 150px;
            overflow: hidden;
            text-overflow: ellipsis;
            text-wrap: nowrap;
        `,
    "visual-builder__focused-toolbar__multiple-field-toolbar": u5`
            height: 40px;
            z-index: 2147483647 !important;

            svg {
                height: 100%;
                width: 100%;
            }
        `,
    "visual-builder__rotate--90": u5`
            transform: rotate(90deg);
        `,
    "visual-builder__focused-toolbar--field-disabled": u5`
            pointer-events: none;
            cursor: not-allowed;
            .visual-builder__focused-toolbar__field-label-wrapper__current-field {
                background: #909090;
            }
        `,
    "visual-builder__focused-toolbar--variant": u5`
            .visual-builder__focused-toolbar__field-label-wrapper__current-field {
                background: #BD59FA;
            }

        `,
    "visual-builder__cursor-disabled": u5`
            .visual-builder__cursor-icon {
                background: #909090;
            }

            .visual-builder__cursor-pointer path {
                fill: #909090;
            }
        `,
    "visual-builder__tooltip": u5`
            ${tooltipBaseStyle}

            &:before {
                display: none;
            }

            &:hover:before,
            &:hover:after {
                display: block;
                z-index: 2147483647 !important;
            }

            &:after {
                display: none;
            }
        `,
    "visual-builder__tooltip--bottom": u5`
            &:before {
                bottom: -66px;
            }
            &:after {
                bottom: -6px;
                transform: rotate(180deg);
            }
        `,
    "visual-builder__tooltip--persistent": u5`
            ${tooltipBaseStyle}

            &:before {
                display: block;
            }

            &:after {
                display: block;
            }
        `,
    "visual-builder__empty-block": u5`
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 1rem;
            min-height: 100px;
        `,
    "visual-builder__empty-block-title": u5`
            font-size: 0.95rem;
            font-family: Inter;
            font-weight: 400;
            line-height: 100%;
            color: #647696;
        `,
    "visual-builder__empty-block-field-name": u5`
            font-weight: 700;
        `,
    "visual-builder__empty-block-add-button": u5`
            height: 32px;
            border-radius: 4px;
            background: #f9f8ff;
            border-color: #6c5ce7;
            border-width: 1px;
            padding: 0 16px;
            font-size: 0.9rem;
            font-family: Inter;
            font-weight: 600;
            color: #6c5ce7;
            letter-spacing: 0.01rem;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        `,
    "visual-builder__hover-outline": u5`
            position: absolute;
            outline: 2px dashed #6c5ce7;
            transition: var(--outline-transition);
            z-index: 2147483646 !important;
        `,
    "visual-builder__hover-outline--hidden": u5`
            visibility: hidden;
        `,
    "visual-builder__hover-outline--unclickable": u5`
            pointer-events: none;
        `,
    "visual-builder__hover-outline--disabled": u5`
            outline: 2px dashed #909090;
        `,
    "visual-builder__hover-outline--variant": u5`
            outline: 2px dashed #BD59FA;
        `,
    "visual-builder__default-cursor--disabled": u5`
            cursor: none;
        `,
    "visual-builder__draft-field": u5`
            outline: 2px dashed #eb5646;
        `,
    "visual-builder__variant-field": u5`
            outline: 2px solid #bd59fa;
            outline-offset: -2px;
        `,
    "visual-builder__pseudo-editable-element": u5`
            z-index: 99999 !important;
        `,
    // cslp error styles
    "visual-builder__button-error": u5`
            background-color: #ffeeeb;
            padding: 0px !important;
            &:hover {
                background-color: #ffeeeb;
            }
        `,
    "visual-builder__focused-toolbar__error": u5`
            display: flex;
            justify-content: center;
            align-items: center;
            column-gap: 3px;
            padding: 4px 8px;
        `,
    "visual-builder__focused-toolbar__error-text": u5`
            font-weight: 400;
            font-size: 12px;
            line-height: 18px;
            color: #a31b00;
        `,
    "visual-builder__focused-toolbar__error-toolip": u5`
            position: absolute;
            width: 400px;
            background-color: red;
            left: 0;
            top: -7px;
            transform: translateY(-100%);
            background-color: #767676;
            border-radius: 4px;
            box-shadow:
                0px 1px 10px 0px #6c5ce733,
                0px 5px 5px 0px #0000001f,
                0px 2px 4px 0px #00000024;
            padding: 12px;
            text-align: left;

            &:before {
                content: "";
                position: absolute;
                bottom: -3px;
                left: 4%;
                transform: translateX(-50%) rotate(45deg);
                width: 10px;
                height: 10px;
                background-color: #767676;
            }

            > p {
                margin: 0;
                color: #ffffff;
                font-size: 14px;
                font-weight: 600;
                line-height: 21px;
                margin-bottom: 4px;
            }

            > span {
                color: #ffffff;
                font-size: 12px;
                font-weight: 400;
                line-height: 18px;
            }
        `,
    "variant-field-revert-component": u5`
            position: relative;
            display: inline-block;
            z-index: 2147483647 !important;
        `,
    "variant-field-revert-component__dropdown-content": u5`
            position: absolute;
            top: -12px;
            left: -4px;
            background-color: #ffffff;
            min-width: max-content;
            box-shadow:
                0 4px 15px 0 rgba(108, 92, 231, 0.2),
                0 3px 14px 3px rgba(0, 0, 0, 0.12),
                0 8px 10px 1px rgba(0, 0, 0, 0.14);
            z-index: 2147483647 !important;
            margin-top: 4px;
            padding: 4px 0px;
            border-radius: 2px;
        `,
    "variant-field-revert-component__dropdown-content__list-item": u5`
            color: black;
            font-weight: 400;
            padding: 9.6px 16px;
            text-decoration: none;
            display: block;
            font-size: 0.75rem;
            height: 32px;
            line-height: 2rem;
            display: flex;
            align-items: center;
            z-index: 2147483647 !important;
            cursor: pointer;
            &:hover {
                background-color: #f1f1f1;
            }
            &:hover > span {
                color: #5d50be;
            }
            & > span {
                margin-top: 4px;
                margin-bottom: 4px;
            }
        `,
    "visual-builder__no-cursor-style": u5`
            cursor: none !important;
        `,
    "visual-builder__field-toolbar-container": u5`
            display: flex;
            flex-direction: column-reverse;
            z-index: 2147483647 !important;
            position: relative;
        `,
    "visual-builder__variant-button": u5`
            display: flex;
            min-width: 3rem !important;
            gap: 0.25rem;
            align-items: center;
            justify-content: center;
            display: flex;
            & svg path {
                fill: #475161;
            }
        `,
    "visual-builder__field-location-icons-container": u5`
            display: flex;
            gap: 0.25rem;
            align-items: center;
            justify-content: center;
            margin-left: 0.25rem;
        `,
    "visual-builder__field-location-icons-container__divider": u5`
            height: 32px !important;
            width: 1px;
            border-radius: 2px;
            background-color: #8a8f99;
        `,
    "visual-builder__field-location-icons-container__app-icon": u5`
            width: 24px;
            height: 24px;
            object-fit: cover;
        `,
    "visual-builder__field-location-app-list": u5`
            position: absolute;
            top: 0;
            background: #fff;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            z-index: 1000;
            min-width: 230px;
            max-height: 250px;
            min-height: 250px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
        `,
    "visual-builder__field-location-app-list--left": u5`
            right: 100%;
            margin-right: 8px;
        `,
    "visual-builder__field-location-app-list--right": u5`
            left: 100%;
            margin-left: 8px;
        `,
    "visual-builder__field-location-app-list__search-container": u5`
            display: flex;
            align-items: center;
            padding: 10px 16px 0px 16px;
            border: none;
            border-bottom: 1px solid #f0f0f0;
        `,
    "visual-builder__field-location-app-list__search-input": u5`
            width: 100%;
            padding: 10px 12px;
            font-size: 14px;
            outline: none;
            box-sizing: border-box;
            border: none;
        `,
    "visual-builder__field-location-app-list__search-icon": u5`
            width: 14px;
            height: 14px;
        `,
    "visual-builder__field-location-app-list__content": u5`
            flex: 1;
            overflow-y: auto;
        `,
    "visual-builder__field-location-app-list__no-results": u5`
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
            text-align: center;
        `,
    "visual-builder__field-location-app-list__no-results-text": u5`
            color: #373b40;
            font-weight: 400;
        `,
    "visual-builder__field-location-app-list__item": u5`
            display: flex;
            align-items: center;
            padding: 10px 16px;
            cursor: pointer;
            font-size: 14px;
        `,
    "visual-builder__field-location-app-list__item-icon-container": u5`
            width: 24px;
            height: 24px;
            margin-right: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
        `,
    "visual-builder__field-location-app-list__item-icon": u5`
            width: 24px;
            height: 24px;
            border-radius: 50%;
            object-fit: cover;
        `,
    "visual-builder__field-location-app-list__item-title": u5`
            color: #373b40;
            font-weight: 400;
        `
  };
}
var VisualBuilderGlobalStyles = `
       @import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

       [data-cslp] [contenteditable="true"] {
            outline: none;
        }

        @keyframes visual-builder__spinner {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }

`;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/icons/index.js
var import_classnames = __toESM(require_classnames(), 1);

// node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var f7 = 0;
var i6 = Array.isArray;
function u6(e6, t5, n5, o7, i8, u7) {
  var a7, c6, p6 = {};
  for (c6 in t5) "ref" == c6 ? a7 = t5[c6] : p6[c6] = t5[c6];
  var l7 = { type: e6, props: p6, key: n5, ref: a7, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --f7, __i: -1, __u: 0, __source: i8, __self: u7 };
  if ("function" == typeof e6 && (a7 = e6.defaultProps)) for (c6 in a7) void 0 === p6[c6] && (p6[c6] = a7[c6]);
  return l.vnode && l.vnode(l7), l7;
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/icons/index.js
var generateIconStyles = ({ disabled = false }) => ({
  opacity: disabled ? 0.5 : 1,
  cursor: disabled ? "not-allowed" : "pointer"
});
function CaretIcon({ open = false }) {
  return u6(
    "svg",
    {
      "data-testid": "visual-builder__caret-icon",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { transform: open ? "rotate(180deg)" : "rotate(0deg)" },
      children: u6(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M2.73483 5.73483C2.88128 5.58839 3.11872 5.58839 3.26517 5.73483L8 10.4697L12.7348 5.73483C12.8813 5.58839 13.1187 5.58839 13.2652 5.73483C13.4116 5.88128 13.4116 6.11872 13.2652 6.26517L8.26516 11.2652C8.11872 11.4116 7.88128 11.4116 7.73484 11.2652L2.73483 6.26517C2.58839 6.11872 2.58839 5.88128 2.73483 5.73483Z",
          fill: "white"
        }
      )
    }
  );
}
function DeleteIcon() {
  return u6(
    "svg",
    {
      "data-testid": "visual-builder__delete-icon",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        u6(
          "path",
          {
            d: "M6.5 6.125C6.70711 6.125 6.875 6.29289 6.875 6.5V10.5C6.875 10.7071 6.70711 10.875 6.5 10.875C6.29289 10.875 6.125 10.7071 6.125 10.5V6.5C6.125 6.29289 6.29289 6.125 6.5 6.125Z",
            fill: "currentColor"
          }
        ),
        u6(
          "path",
          {
            d: "M9.875 6.5C9.875 6.29289 9.70711 6.125 9.5 6.125C9.29289 6.125 9.125 6.29289 9.125 6.5V10.5C9.125 10.7071 9.29289 10.875 9.5 10.875C9.70711 10.875 9.875 10.7071 9.875 10.5V6.5Z",
            fill: "currentColor"
          }
        ),
        u6(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M6.5 1.125C6.13533 1.125 5.78559 1.26987 5.52773 1.52773C5.26987 1.78559 5.125 2.13533 5.125 2.5V3.125H2.5C2.29289 3.125 2.125 3.29289 2.125 3.5C2.125 3.70711 2.29289 3.875 2.5 3.875H3.125V13C3.125 13.2321 3.21719 13.4546 3.38128 13.6187C3.54538 13.7828 3.76794 13.875 4 13.875H12C12.2321 13.875 12.4546 13.7828 12.6187 13.6187C12.7828 13.4546 12.875 13.2321 12.875 13V3.875H13.5C13.7071 3.875 13.875 3.70711 13.875 3.5C13.875 3.29289 13.7071 3.125 13.5 3.125H10.875V2.5C10.875 2.13533 10.7301 1.78559 10.4723 1.52773C10.2144 1.26987 9.86467 1.125 9.5 1.125H6.5ZM10.125 3.125V2.5C10.125 2.33424 10.0592 2.17527 9.94194 2.05806C9.82473 1.94085 9.66576 1.875 9.5 1.875H6.5C6.33424 1.875 6.17527 1.94085 6.05806 2.05806C5.94085 2.17527 5.875 2.33424 5.875 2.5V3.125H10.125ZM3.875 3.875V13C3.875 13.0332 3.88817 13.0649 3.91161 13.0884C3.93505 13.1118 3.96685 13.125 4 13.125H12C12.0332 13.125 12.0649 13.1118 12.0884 13.0884C12.1118 13.0649 12.125 13.0332 12.125 13V3.875H3.875Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
}
function FormIcon() {
  return u6("svg", { width: "17", height: "21", viewBox: "0 0 17 21", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: [
    u6("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.75223 0.900517C5.05206 0.712906 4.33237 1.12842 4.14475 1.82859L3.44577 4.43724H1.75C1.02513 4.43724 0.4375 5.02486 0.4375 5.74974V19.2497C0.4375 19.9746 1.02513 20.5622 1.75 20.5622H12.25C12.9749 20.5622 13.5625 19.9746 13.5625 19.2497V17.3922L16.8225 5.22559C17.0101 4.52542 16.5946 3.80573 15.8945 3.61812L5.75223 0.900517ZM13.5625 13.0455L15.7359 4.93442C15.7627 4.8344 15.7033 4.73158 15.6033 4.70478L5.46106 1.98718C5.36104 1.96038 5.25822 2.01974 5.23142 2.11977L4.61046 4.43724H12.25C12.9749 4.43724 13.5625 5.02486 13.5625 5.74974V13.0455ZM1.5625 5.74974C1.5625 5.64618 1.64645 5.56224 1.75 5.56224H12.25C12.3536 5.56224 12.4375 5.64618 12.4375 5.74974V19.2497C12.4375 19.3533 12.3536 19.4372 12.25 19.4372H1.75C1.64645 19.4372 1.5625 19.3533 1.5625 19.2497V5.74974Z", fill: "currentColor" }),
    u6("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M3.4375 8.74974C3.4375 8.43908 3.68934 8.18724 4 8.18724H10C10.3107 8.18724 10.5625 8.43908 10.5625 8.74974C10.5625 9.0604 10.3107 9.31224 10 9.31224H4C3.68934 9.31224 3.4375 9.0604 3.4375 8.74974Z", fill: "currentColor" }),
    u6("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M3.4375 11.7497C3.4375 11.4391 3.68934 11.1872 4 11.1872H10C10.3107 11.1872 10.5625 11.4391 10.5625 11.7497C10.5625 12.0604 10.3107 12.3122 10 12.3122H4C3.68934 12.3122 3.4375 12.0604 3.4375 11.7497Z", fill: "currentColor" }),
    u6("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M3.4375 14.7497C3.4375 14.4391 3.68934 14.1872 4 14.1872H10C10.3107 14.1872 10.5625 14.4391 10.5625 14.7497C10.5625 15.0604 10.3107 15.3122 10 15.3122H4C3.68934 15.3122 3.4375 15.0604 3.4375 14.7497Z", fill: "currentColor" })
  ] });
}
function MoveLeftIcon(props) {
  return u6(
    "svg",
    {
      "data-testid": "visual-builder__move-left-icon",
      className: props.className,
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      style: generateIconStyles(props),
      children: [
        u6(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M2.125 8C2.125 7.79289 2.29289 7.625 2.5 7.625H13.5C13.7071 7.625 13.875 7.79289 13.875 8C13.875 8.20711 13.7071 8.375 13.5 8.375H2.5C2.29289 8.375 2.125 8.20711 2.125 8Z",
            fill: "currentColor"
          }
        ),
        u6(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M7.26516 3.23483C7.41161 3.38128 7.41161 3.61872 7.26516 3.76517L3.03033 8L7.26516 12.2348C7.41161 12.3813 7.41161 12.6187 7.26516 12.7652C7.11872 12.9116 6.88128 12.9116 6.73484 12.7652L2.23483 8.26516C2.08839 8.11872 2.08839 7.88128 2.23483 7.73484L6.73484 3.23483C6.88128 3.08839 7.11872 3.08839 7.26516 3.23483Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
}
function MoveRightIcon(props) {
  return u6(
    "svg",
    {
      className: props.className,
      "data-testid": "visual-builder__move-right-icon",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      style: generateIconStyles(props),
      children: [
        u6(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M2.125 8C2.125 7.79289 2.29289 7.625 2.5 7.625H13.5C13.7071 7.625 13.875 7.79289 13.875 8C13.875 8.20711 13.7071 8.375 13.5 8.375H2.5C2.29289 8.375 2.125 8.20711 2.125 8Z",
            fill: "currentColor"
          }
        ),
        u6(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M8.73484 3.23483C8.88128 3.08839 9.11872 3.08839 9.26516 3.23483L13.7652 7.73484C13.9116 7.88128 13.9116 8.11872 13.7652 8.26516L9.26516 12.7652C9.11872 12.9116 8.88128 12.9116 8.73484 12.7652C8.58839 12.6187 8.58839 12.3813 8.73484 12.2348L12.9697 8L8.73484 3.76517C8.58839 3.61872 8.58839 3.38128 8.73484 3.23483Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
}
function InfoIcon() {
  return u6(
    "svg",
    {
      "data-testid": "visual-builder__info-icon",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        u6(
          "path",
          {
            d: "M8 5.5C7.72386 5.5 7.5 5.72386 7.5 6C7.5 6.27614 7.72386 6.5 8 6.5C8.27614 6.5 8.5 6.27614 8.5 6C8.5 5.72386 8.27614 5.5 8 5.5Z",
            fill: "white"
          }
        ),
        u6(
          "path",
          {
            d: "M8 10.875C7.79289 10.875 7.625 10.7071 7.625 10.5V7.5C7.625 7.29289 7.79289 7.125 8 7.125C8.20711 7.125 8.375 7.29289 8.375 7.5V10.5C8.375 10.7071 8.20711 10.875 8 10.875Z",
            fill: "white"
          }
        ),
        u6(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8ZM13.25 8C13.25 10.8995 10.8995 13.25 8 13.25C5.10051 13.25 2.75 10.8995 2.75 8C2.75 5.10051 5.10051 2.75 8 2.75C10.8995 2.75 13.25 5.10051 13.25 8Z",
            fill: "white"
          }
        )
      ]
    }
  );
}
function EditIcon() {
  return u6(
    "svg",
    {
      "data-testid": "visual-builder__edit-icon",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      children: u6("g", { id: "Edit", children: u6(
        "path",
        {
          id: "Edit_2",
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M3.58347 15.3803C3.35617 15.6076 3.22019 15.9104 3.20131 16.2313L3.00244 19.6122C2.95629 20.3967 3.60524 21.0456 4.38975 20.9995L7.7706 20.8006C8.0915 20.7817 8.39431 20.6458 8.62161 20.4185L20.6176 8.4225C21.1301 7.90993 21.1301 7.07891 20.6176 6.56634L17.4356 3.38436C16.923 2.8718 16.092 2.8718 15.5794 3.38436L3.58347 15.3803ZM4.32437 16.2974C4.32707 16.2515 4.3465 16.2083 4.37897 16.1758L14.2003 6.35446L17.4954 9.64949C17.5492 9.70337 17.6113 9.74403 17.6776 9.77148L7.82611 19.623C7.79364 19.6554 7.75038 19.6749 7.70454 19.6776L4.32369 19.8764C4.21161 19.883 4.11891 19.7903 4.1255 19.6782L4.32437 16.2974ZM18.4128 9.03624L19.8221 7.627C19.8953 7.55378 19.8953 7.43506 19.8221 7.36184L16.6401 4.17986C16.5669 4.10663 16.4481 4.10663 16.3749 4.17986L14.9958 5.55897L18.2908 8.854C18.3447 8.90788 18.3854 8.96996 18.4128 9.03624Z",
          fill: "currentColor"
        }
      ) })
    }
  );
}
function PlusIcon() {
  return u6(
    "svg",
    {
      "data-testid": "visual-builder__plus-icon",
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      children: u6("path", { d: "M10.4688 4.375C10.4688 4.11612 10.259 3.90625 10.0001 3.90625C9.74121 3.90625 9.53135 4.11612 9.53135 4.375V9.27307H4.37402C4.11514 9.27307 3.90527 9.48294 3.90527 9.74182C3.90527 10.0007 4.11514 10.2106 4.37402 10.2106H9.53135V15.625C9.53135 15.8839 9.74121 16.0937 10.0001 16.0937C10.259 16.0937 10.4688 15.8839 10.4688 15.625V10.2106H15.6259C15.8847 10.2106 16.0946 10.0007 16.0946 9.74182C16.0946 9.48294 15.8847 9.27307 15.6259 9.27307H10.4688V4.375Z" })
    }
  );
}
function ReplaceAssetIcon() {
  return u6("svg", { width: "18", height: "18", viewBox: "-1 -1 20 20", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: [
    u6("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M9.88235 1.23529C9.88235 0.942908 10.1194 0.705882 10.4118 0.705882H14.1641C14.8463 0.705882 15.3994 1.25894 15.3994 1.94118V6.47441L17.1363 5.06006C17.363 4.87544 17.6965 4.90958 17.8811 5.1363C18.0657 5.36303 18.0316 5.69649 17.8049 5.88111L15.2042 7.99876C15.0096 8.15728 14.7303 8.15728 14.5357 7.99876L11.9351 5.88111C11.7083 5.69649 11.6742 5.36303 11.8588 5.1363C12.0434 4.90958 12.3769 4.87544 12.6036 5.06006L14.3405 6.47441V1.94118C14.3405 1.84371 14.2615 1.76471 14.1641 1.76471H10.4118C10.1194 1.76471 9.88235 1.52768 9.88235 1.23529Z", fill: "currentColor" }),
    u6("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.11765 16.7647C8.11765 17.0571 7.88062 17.2941 7.58824 17.2941H3.83592C3.15369 17.2941 2.60063 16.7411 2.60063 16.0588V11.5256L0.863711 12.9399C0.636985 13.1246 0.303523 13.0904 0.118903 12.8637C-0.0657165 12.637 -0.0315828 12.3035 0.195144 12.1189L2.79576 10.0012C2.99043 9.84272 3.26966 9.84272 3.46433 10.0012L6.06494 12.1189C6.29167 12.3035 6.3258 12.637 6.14118 12.8637C5.95656 13.0904 5.6231 13.1246 5.39637 12.9399L3.65945 11.5256V16.0588C3.65945 16.1563 3.73846 16.2353 3.83592 16.2353H7.58824C7.88062 16.2353 8.11765 16.4723 8.11765 16.7647Z", fill: "currentColor" }),
    u6("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.11765 1.23529C8.11765 0.55306 7.56459 0 6.88236 0H1.23531C0.553077 0 1.69415e-05 0.55306 1.69415e-05 1.23529V6.88235C1.69415e-05 7.56459 0.553076 8.11765 1.23531 8.11765H6.88236C7.56459 8.11765 8.11765 7.56459 8.11765 6.88235V1.23529ZM6.88236 1.05882C6.97982 1.05882 7.05883 1.13783 7.05883 1.23529V6.88235C7.05883 6.97982 6.97982 7.05882 6.88236 7.05882H1.23531C1.13785 7.05882 1.05884 6.97982 1.05884 6.88235V1.23529C1.05884 1.13783 1.13785 1.05882 1.23531 1.05882H6.88236Z", fill: "currentColor" }),
    u6("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M18 11.1176C18 10.4354 17.4469 9.88235 16.7647 9.88235H11.1176C10.4354 9.88235 9.88235 10.4354 9.88235 11.1176V16.7647C9.88235 17.4469 10.4354 18 11.1176 18H16.7647C17.4469 18 18 17.4469 18 16.7647V11.1176ZM16.7647 10.9412C16.8622 10.9412 16.9412 11.0202 16.9412 11.1176V16.7647C16.9412 16.8622 16.8622 16.9412 16.7647 16.9412H11.1176C11.0202 16.9412 10.9412 16.8622 10.9412 16.7647V11.1176C10.9412 11.0202 11.0202 10.9412 11.1176 10.9412H16.7647Z", fill: "currentColor" })
  ] });
}
function HighlightCommentIcon() {
  return u6("svg", { className: "collab-icon__svg", width: "50", height: "50", viewBox: "0 0 50 50", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    u6("g", { className: "collab-icon__svg", filter: "url(#filter0_d_13652_461491)", children: u6("circle", { className: "collab-icon__svg", cx: "25", cy: "21", r: "21", fill: "#777777", "fill-opacity": "0.84", "shape-rendering": "crispEdges" }) }),
    u6("path", { className: "collab-icon__svg", d: "M21.4375 20C21.4375 19.6893 21.6893 19.4375 22 19.4375H28C28.3107 19.4375 28.5625 19.6893 28.5625 20C28.5625 20.3107 28.3107 20.5625 28 20.5625H22C21.6893 20.5625 21.4375 20.3107 21.4375 20Z", fill: "white" }),
    u6("path", { className: "collab-icon__svg", d: "M21.4375 23C21.4375 22.6893 21.6893 22.4375 22 22.4375H28C28.3107 22.4375 28.5625 22.6893 28.5625 23C28.5625 23.3107 28.3107 23.5625 28 23.5625H22C21.6893 23.5625 21.4375 23.3107 21.4375 23Z", fill: "white" }),
    u6("path", { className: "collab-icon__svg", "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M16 16.25C16 15.8358 16.3358 15.5 16.75 15.5H33.25C33.6642 15.5 34 15.8358 34 16.25V27.4423C34 27.8565 33.6642 28.1923 33.25 28.1923H27.9804C27.853 28.1923 27.7343 28.257 27.6652 28.3641L25.9633 31.0042C25.6651 31.4669 24.9866 31.4613 24.696 30.9938L23.1746 28.5464C23.0378 28.3262 22.7969 28.1923 22.5377 28.1923H16.75C16.3358 28.1923 16 27.8565 16 27.4423V16.25ZM17.125 27.0673V16.625H32.875V27.0673H27.9804C27.4707 27.0673 26.9958 27.3262 26.7197 27.7546L25.3387 29.8968L24.1301 27.9524C23.7879 27.402 23.1858 27.0673 22.5377 27.0673H17.125Z", fill: "white" }),
    u6("circle", { className: "collab-icon__svg", cx: "34", cy: "15", r: "4", fill: "#EB5646" }),
    u6("circle", { className: "collab-icon__svg", cx: "34", cy: "15", r: "4.5", stroke: "white", "stroke-opacity": "0.6" }),
    u6("defs", { className: "collab-icon__svg", children: u6("filter", { className: "collab-icon__svg", id: "filter0_d_13652_461491", x: "0", y: "0", width: "50", height: "50", filterUnits: "userSpaceOnUse", "color-interpolation-filters": "sRGB", children: [
      u6("feFlood", { className: "collab-icon__svg", "flood-opacity": "0", result: "BackgroundImageFix" }),
      u6("feColorMatrix", { className: "collab-icon__svg", in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
      u6("feOffset", { className: "collab-icon__svg", dy: "4" }),
      u6("feGaussianBlur", { className: "collab-icon__svg", stdDeviation: "2" }),
      u6("feComposite", { className: "collab-icon__svg", in2: "hardAlpha", operator: "out" }),
      u6("feColorMatrix", { className: "collab-icon__svg", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
      u6("feBlend", { className: "collab-icon__svg", mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_13652_461491" }),
      u6("feBlend", { className: "collab-icon__svg", mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_13652_461491", result: "shape" })
    ] }) })
  ] });
}
function ReadCommentIcon() {
  return u6(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 32 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        u6(
          "path",
          {
            d: "M11.25 12C11.25 11.5858 11.5858 11.25 12 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H12C11.5858 12.75 11.25 12.4142 11.25 12Z",
            fill: "#475161"
          }
        ),
        u6(
          "path",
          {
            d: "M11.25 16C11.25 15.5858 11.5858 15.25 12 15.25H20C20.4142 15.25 20.75 15.5858 20.75 16C20.75 16.4142 20.4142 16.75 20 16.75H12C11.5858 16.75 11.25 16.4142 11.25 16Z",
            fill: "#475161"
          }
        ),
        u6(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M4 7C4 6.44772 4.44772 6 5 6H27C27.5523 6 28 6.44772 28 7V21.9231C28 22.4754 27.5523 22.9231 27 22.9231H19.9739C19.804 22.9231 19.6457 23.0094 19.5536 23.1522L17.2844 26.6723C16.8868 27.2892 15.9821 27.2818 15.5946 26.6584L13.5662 23.3952C13.3837 23.1016 13.0625 22.9231 12.7169 22.9231H5C4.44771 22.9231 4 22.4754 4 21.9231V7ZM5.5 21.4231V7.5H26.5V21.4231H19.9739C19.2942 21.4231 18.6611 21.7682 18.2929 22.3395L16.4516 25.1958L14.8401 22.6033C14.3839 21.8694 13.581 21.4231 12.7169 21.4231H5.5Z",
            fill: "#475161"
          }
        )
      ]
    }
  );
}
function AddCommentIcon() {
  return u6(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 32 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        u6(
          "path",
          {
            d: "M16 10.25C16.4142 10.25 16.75 10.5858 16.75 11V13.25H19C19.4142 13.25 19.75 13.5858 19.75 14C19.75 14.4142 19.4142 14.75 19 14.75H16.75V17C16.75 17.4142 16.4142 17.75 16 17.75C15.5858 17.75 15.25 17.4142 15.25 17V14.75H13C12.5858 14.75 12.25 14.4142 12.25 14C12.25 13.5858 12.5858 13.25 13 13.25H15.25V11C15.25 10.5858 15.5858 10.25 16 10.25Z",
            fill: "#475161"
          }
        ),
        u6(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M4 7C4 6.44772 4.44772 6 5 6H27C27.5523 6 28 6.44772 28 7V21.9231C28 22.4754 27.5523 22.9231 27 22.9231H19.9739C19.804 22.9231 19.6457 23.0094 19.5536 23.1522L17.2844 26.6723C16.8868 27.2892 15.9821 27.2818 15.5946 26.6584L13.5662 23.3952C13.3837 23.1016 13.0625 22.9231 12.7169 22.9231H5C4.44771 22.9231 4 22.4754 4 21.9231V7ZM5.5 21.4231V7.5H26.5V21.4231H19.9739C19.2942 21.4231 18.6611 21.7682 18.2929 22.3395L16.4516 25.1958L14.8401 22.6033C14.3839 21.8694 13.581 21.4231 12.7169 21.4231H5.5Z",
            fill: "#475161"
          }
        )
      ]
    }
  );
}
function WarningOctagonIcon() {
  return u6(
    "svg",
    {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        u6(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M8.49999 5.00389C8.71574 5.00389 8.89065 5.1788 8.89065 5.39456V9.04076C8.89065 9.25652 8.71574 9.43142 8.49999 9.43142C8.28423 9.43142 8.10932 9.25652 8.10932 9.04076V5.39456C8.10932 5.1788 8.28423 5.00389 8.49999 5.00389Z",
            fill: "#A31B00"
          }
        ),
        u6(
          "path",
          {
            d: "M8.49999 12.0359C8.85958 12.0359 9.15109 11.7443 9.15109 11.3847C9.15109 11.0252 8.85958 10.7336 8.49999 10.7336C8.14039 10.7336 7.84888 11.0252 7.84888 11.3847C7.84888 11.7443 8.14039 12.0359 8.49999 12.0359Z",
            fill: "#A31B00"
          }
        ),
        u6(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M5.54062 2.26699C5.71157 2.09604 5.94343 2 6.18519 2L10.8148 2C11.0566 2 11.2884 2.09604 11.4594 2.26699L14.733 5.54062C14.904 5.71157 15 5.94343 15 6.18519L15 10.8148C15 11.0566 14.904 11.2884 14.733 11.4594L11.4594 14.733C11.2884 14.904 11.0566 15 10.8148 15L6.18519 15C5.94343 15 5.71157 14.904 5.54062 14.733L2.26699 11.4594C2.09604 11.2884 2 11.0566 2 10.8148L2 6.18519C2 5.94343 2.09604 5.71157 2.26699 5.54062L5.54062 2.26699ZM6.18519 2.78133C6.15065 2.78133 6.11753 2.79505 6.09311 2.81947L2.81947 6.09311C2.79505 6.11753 2.78133 6.15065 2.78133 6.18519V10.8148C2.78133 10.8493 2.79505 10.8825 2.81947 10.9069L6.09311 14.1805C6.11753 14.205 6.15065 14.2187 6.18519 14.2187H10.8148C10.8493 14.2187 10.8825 14.205 10.9069 14.1805L14.1805 10.9069C14.205 10.8825 14.2187 10.8493 14.2187 10.8148V6.18519C14.2187 6.15065 14.205 6.11753 14.1805 6.09311L10.9069 2.81947C10.8825 2.79505 10.8493 2.78133 10.8148 2.78133L6.18519 2.78133Z",
            fill: "#A31B00"
          }
        )
      ]
    }
  );
}
function MoreIcon() {
  return u6(
    "svg",
    {
      width: "32",
      height: "32",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        u6("circle", { cx: "12", cy: "6", r: "2", fill: "#475161" }),
        u6("circle", { cx: "12", cy: "12", r: "2", fill: "#475161" }),
        u6("circle", { cx: "12", cy: "18", r: "2", fill: "#475161" })
      ]
    }
  );
}
function ContentTypeIcon() {
  return u6(
    "div",
    {
      className: (0, import_classnames.default)(
        "visual-builder__content-type-icon",
        visualBuilderStyles()["visual-builder__content-type-icon"]
      ),
      children: u6("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        u6("path", { d: "M4 22L16 29L28 22", stroke: "#fff", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        u6("path", { d: "M4 16L16 23L28 16", stroke: "#fff", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        u6("path", { d: "M4 10L16 17L28 10L16 3L4 10Z", stroke: "#fff", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })
      ] })
    }
  );
}
function CaretRightIcon() {
  return u6(
    "div",
    {
      className: (0, import_classnames.default)(
        "visual-builder__caret-right-icon",
        visualBuilderStyles()["visual-builder__caret-right-icon"]
      ),
      children: u6("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: u6("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M11.4697 5.46967C11.7626 5.17678 12.2374 5.17678 12.5303 5.46967L22.5303 15.4697C22.8232 15.7626 22.8232 16.2374 22.5303 16.5303L12.5303 26.5303C12.2374 26.8232 11.7626 26.8232 11.4697 26.5303C11.1768 26.2374 11.1768 25.7626 11.4697 25.4697L20.9393 16L11.4697 6.53033C11.1768 6.23744 11.1768 5.76256 11.4697 5.46967Z", fill: "#fff" }) })
    }
  );
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/startEditingButton.js
var positionStyles = {
  "bottom-right": visualBuilderStyles()["visual-builder__start-editing-btn__bottom-right"],
  "bottom-left": visualBuilderStyles()["visual-builder__start-editing-btn__bottom-left"],
  "top-left": visualBuilderStyles()["visual-builder__start-editing-btn__top-left"],
  "top-right": visualBuilderStyles()["visual-builder__start-editing-btn__top-right"]
};
function getEditButtonPosition2(position) {
  const validPositions2 = ["bottom-left", "bottom-right", "top-left", "top-right"];
  if (validPositions2.includes(position)) {
    return position;
  } else {
    return "bottom-right";
  }
}
function StartEditingButtonComponent() {
  const config2 = configManager_default.get();
  const enable = config2.editInVisualBuilderButton.enable;
  const position = config2.editInVisualBuilderButton.position || "bottom-right";
  function updateTargetUrl(e6) {
    const targetElement = e6.target;
    targetElement.setAttribute(
      "href",
      getVisualBuilderRedirectionUrl().toString()
    );
  }
  return enable ? u6(
    "a",
    {
      href: getVisualBuilderRedirectionUrl().toString(),
      className: (0, import_classnames2.default)(
        "visual-builder__start-editing-btn",
        visualBuilderStyles()["visual-builder__start-editing-btn"],
        positionStyles[getEditButtonPosition2(position)]
      ),
      "data-testid": "vcms-start-editing-btn",
      onMouseEnter: (e6) => updateTargetUrl(e6),
      onFocus: (e6) => updateTargetUrl(e6),
      onClick: (e6) => updateTargetUrl(e6),
      children: [
        u6(EditIcon, {}),
        u6("span", { children: "Start Editing" })
      ]
    }
  ) : null;
}
var startEditingButton_default = StartEditingButtonComponent;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/generators/generateStartEditingButton.js
function generateStartEditingButton() {
  const existingButton = document.querySelector(
    ".visual-builder__start-editing-btn"
  );
  if (existingButton) {
    return existingButton;
  }
  const wrapper = document.createDocumentFragment();
  B(u6(startEditingButton_default, {}), wrapper);
  if (wrapper.children.length === 0) {
    return void 0;
  }
  document.body.appendChild(wrapper);
  const startEditingButton = document.querySelector(
    ".visual-builder__start-editing-btn"
  );
  return startEditingButton;
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/types/index.types.js
var FieldDataType = ((FieldDataType2) => {
  FieldDataType2["CUSTOM_FIELD"] = "custom_field";
  FieldDataType2["MULTILINE"] = "multiline";
  FieldDataType2["HTML_RTE"] = "html_rte";
  FieldDataType2["MARKDOWN_RTE"] = "markdown_rte";
  FieldDataType2["SELECT"] = "select";
  FieldDataType2["URL"] = "url";
  FieldDataType2["SINGLELINE"] = "singleline";
  FieldDataType2["JSON_RTE"] = "json_rte";
  FieldDataType2["MODULAR_BLOCK"] = "modular_block";
  FieldDataType2["LINK"] = "link";
  FieldDataType2["ISODATE"] = "isodate";
  FieldDataType2["BOOLEAN"] = "boolean";
  FieldDataType2["BLOCK"] = "block";
  FieldDataType2["NUMBER"] = "number";
  FieldDataType2["REFERENCE"] = "reference";
  FieldDataType2["GROUP"] = "group";
  FieldDataType2["EXPERIENCE_CONTAINER"] = "experience_container";
  FieldDataType2["FILE"] = "file";
  FieldDataType2["GLOBAL_FIELD"] = "global_field";
  FieldDataType2["TAXONOMY"] = "taxonomy";
  return FieldDataType2;
})(FieldDataType || {});

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/constants.js
var numericInputRegex = /^-?\d*(\.\d*)?([eE][-+]?\d*)?$/;
var VISUAL_BUILDER_FIELD_TYPE_ATTRIBUTE_KEY = "data-cslp-field-type";
var VISUAL_BUILDER_CHANNEL_ID = "visual-builder";
var LIVE_PREVIEW_OUTLINE_WIDTH_IN_PX = 2;
var TOP_EDGE_BUFFER = 42;
var RIGHT_EDGE_BUFFER = 180;
var TOOLBAR_EDGE_BUFFER = 8;
var DATA_CSLP_ATTR_SELECTOR = "data-cslp";
var ALLOWED_INLINE_EDITABLE_FIELD = [
  FieldDataType.SINGLELINE,
  FieldDataType.MULTILINE,
  FieldDataType.NUMBER
];
var ALLOWED_MODAL_EDITABLE_FIELD = [
  FieldDataType.HTML_RTE,
  FieldDataType.MARKDOWN_RTE,
  FieldDataType.JSON_RTE,
  FieldDataType.CUSTOM_FIELD,
  FieldDataType.LINK,
  FieldDataType.ISODATE,
  FieldDataType.URL
];
var ALLOWED_REPLACE_FIELDS = [
  FieldDataType.REFERENCE,
  FieldDataType.FILE
];
var DEFAULT_MULTIPLE_FIELDS = [
  FieldDataType.GLOBAL_FIELD,
  FieldDataType.GROUP,
  FieldDataType.BLOCK
];
var unicodeNonBreakingSpace = " ";
var mentionLimit = 20;
var maxMessageLength = 500;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/visualBuilderPostMessage.js
var import_advanced_post_message3 = __toESM2(require_dist(), 1);
var visualBuilderPostMessage;
if (typeof window !== "undefined") {
  visualBuilderPostMessage = new import_advanced_post_message3.EventManager(VISUAL_BUILDER_CHANNEL_ID, {
    target: window.parent,
    debug: false
    // suppressErrors: true,
  });
}
var visualBuilderPostMessage_default = visualBuilderPostMessage;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/types/postMessage.types.js
var VisualBuilderPostMessageEvents = ((VisualBuilderPostMessageEvents2) => {
  VisualBuilderPostMessageEvents2["INIT"] = "init";
  VisualBuilderPostMessageEvents2["ADD_INSTANCE"] = "add-instance";
  VisualBuilderPostMessageEvents2["UPDATE_FIELD"] = "update-field";
  VisualBuilderPostMessageEvents2["SYNC_FIELD"] = "sync-field";
  VisualBuilderPostMessageEvents2["OPEN_ASSET_MODAL"] = "open-asset-modal";
  VisualBuilderPostMessageEvents2["OPEN_REFERENCE_MODAL"] = "open-reference-modal";
  VisualBuilderPostMessageEvents2["OPEN_QUICK_FORM"] = "open-quick-form";
  VisualBuilderPostMessageEvents2["TOGGLE_FORM"] = "toggle-quick-form";
  VisualBuilderPostMessageEvents2["GET_FIELD_SCHEMA"] = "get-field-schema";
  VisualBuilderPostMessageEvents2["GET_FIELD_DATA"] = "get-field-data";
  VisualBuilderPostMessageEvents2["GET_FIELD_PATH_WITH_UID"] = "get-field-path-with-uid";
  VisualBuilderPostMessageEvents2["GET_FIELD_DISPLAY_NAMES"] = "get-field-display-names";
  VisualBuilderPostMessageEvents2["MOUSE_CLICK"] = "mouse-click";
  VisualBuilderPostMessageEvents2["FOCUS_FIELD"] = "focus-field";
  VisualBuilderPostMessageEvents2["OPEN_FIELD_EDIT_MODAL"] = "open-field-edit-modal";
  VisualBuilderPostMessageEvents2["DELETE_INSTANCE"] = "delete-instance";
  VisualBuilderPostMessageEvents2["MOVE_INSTANCE"] = "move-instance";
  VisualBuilderPostMessageEvents2["GET_DISCUSSION_ID"] = "get-discussion-id-for-comment-modal";
  VisualBuilderPostMessageEvents2["OPEN_FIELD_COMMENT_MODAL"] = "open-field-comment-modal";
  VisualBuilderPostMessageEvents2["COLLAB_CREATE_THREAD"] = "collab-create-thread";
  VisualBuilderPostMessageEvents2["COLLAB_CREATE_COMMENT"] = "collab-create-comment";
  VisualBuilderPostMessageEvents2["COLLAB_FETCH_COMMENTS"] = "collab-fetch-comments";
  VisualBuilderPostMessageEvents2["COLLAB_EDIT_COMMENT"] = "collab-edit-comment";
  VisualBuilderPostMessageEvents2["COLLAB_DELETE_COMMENT"] = "collab-delete-comment";
  VisualBuilderPostMessageEvents2["COLLAB_RESOLVE_THREAD"] = "collab-resolve-thread";
  VisualBuilderPostMessageEvents2["COLLAB_DELETE_THREAD"] = "collab-delete-thread";
  VisualBuilderPostMessageEvents2["COLLAB_MISSING_THREADS"] = "collab-missing-threads";
  VisualBuilderPostMessageEvents2["FIELD_LOCATION_DATA"] = "field-location-data";
  VisualBuilderPostMessageEvents2["FIELD_LOCATION_SELECTED_APP"] = "field-location-selected-app";
  VisualBuilderPostMessageEvents2["GET_PERMISSIONS"] = "get-permissions";
  VisualBuilderPostMessageEvents2["GET_WORKFLOW_STAGE_DETAILS"] = "get-workflow-stage-details";
  VisualBuilderPostMessageEvents2["GET_ALL_ENTRIES_IN_CURRENT_PAGE"] = "get-entries-in-current-page";
  VisualBuilderPostMessageEvents2["HIDE_FOCUS_OVERLAY"] = "hide-focus-overlay";
  VisualBuilderPostMessageEvents2["SHOW_DRAFT_FIELDS"] = "show-draft-fields";
  VisualBuilderPostMessageEvents2["REMOVE_DRAFT_FIELDS"] = "remove-draft-fields";
  VisualBuilderPostMessageEvents2["SHOW_VARIANT_FIELDS"] = "show-variant-fields";
  VisualBuilderPostMessageEvents2["REMOVE_VARIANT_FIELDS"] = "remove-variant-fields";
  VisualBuilderPostMessageEvents2["SET_AUDIENCE_MODE"] = "set-audience-mode";
  VisualBuilderPostMessageEvents2["UPDATE_DISCUSSION_ID"] = "update-discussion-id-for-focus-field";
  VisualBuilderPostMessageEvents2["SCROLL_TO_FIELD"] = "scroll-to-view-field-by-cslp-value";
  VisualBuilderPostMessageEvents2["HIGHLIGHT_ACTIVE_COMMENTS"] = "highlight-active-comments-by-data-cs";
  VisualBuilderPostMessageEvents2["REMOVE_HIGHLIGHTED_COMMENTS"] = "remove-highlighted-comments";
  VisualBuilderPostMessageEvents2["GET_VARIANT_ID"] = "get-variant-id";
  VisualBuilderPostMessageEvents2["GET_LOCALE"] = "get-locale";
  VisualBuilderPostMessageEvents2["SEND_VARIANT_AND_LOCALE"] = "send-variant-and-locale";
  VisualBuilderPostMessageEvents2["GET_CONTENT_TYPE_NAME"] = "get-content-type-name";
  VisualBuilderPostMessageEvents2["REFERENCE_MAP"] = "get-reference-map";
  VisualBuilderPostMessageEvents2["COLLAB_ENABLE"] = "collab-enable";
  VisualBuilderPostMessageEvents2["COLLAB_DATA_UPDATE"] = "collab-data-update";
  VisualBuilderPostMessageEvents2["COLLAB_DISABLE"] = "collab-disable";
  VisualBuilderPostMessageEvents2["COLLAB_THREADS_REMOVE"] = "collab-threads-remove";
  VisualBuilderPostMessageEvents2["COLLAB_THREAD_REOPEN"] = "collab-thread-reopen";
  VisualBuilderPostMessageEvents2["COLLAB_THREAD_HIGHLIGHT"] = "collab-thread-highlight";
  VisualBuilderPostMessageEvents2["TOGGLE_SCROLL"] = "toggle-scroll";
  return VisualBuilderPostMessageEvents2;
})(VisualBuilderPostMessageEvents || {});

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/fieldSchemaMap.js
var _FieldSchemaMap = class _FieldSchemaMap2 {
  static async fetchFieldSchema(content_type_uid) {
    var _a, _b;
    if (!((_a = _FieldSchemaMap2.fieldSchemaPromise) == null ? void 0 : _a[content_type_uid])) {
      _FieldSchemaMap2.fieldSchemaPromise[content_type_uid] = (_b = visualBuilderPostMessage_default) == null ? void 0 : _b.send(
        VisualBuilderPostMessageEvents.GET_FIELD_SCHEMA,
        {
          contentTypeUid: content_type_uid
        }
      );
    }
    return _FieldSchemaMap2.fieldSchemaPromise[content_type_uid];
  }
  /**
   * Retrieves the schema field map for a given content type and field Cslp.
   * @param contentTypeUid - The unique identifier of the content type.
   * @param fieldCslp - The Cslp of the field.
   * @returns The schema field map.
   */
  static async getFieldSchema(contentTypeUid, fieldCslp) {
    var _a, _b;
    if (_FieldSchemaMap2.hasFieldSchema(contentTypeUid, fieldCslp)) {
      return Promise.resolve(
        _FieldSchemaMap2.fieldSchema[contentTypeUid][fieldCslp]
      );
    }
    const data = await _FieldSchemaMap2.fetchFieldSchema(contentTypeUid);
    if (data == null ? void 0 : data.fieldSchemaMap) {
      _FieldSchemaMap2.fieldSchema[contentTypeUid] = data.fieldSchemaMap;
    }
    return ((_b = (_a = _FieldSchemaMap2 == null ? void 0 : _FieldSchemaMap2.fieldSchema) == null ? void 0 : _a[contentTypeUid]) == null ? void 0 : _b[fieldCslp]) || null;
  }
  static hasFieldSchema(contentTypeUid, fieldCslp) {
    return has_default(_FieldSchemaMap2.fieldSchema, [contentTypeUid, fieldCslp]);
  }
  /**
   * Checks if two field schemas are equal.
   * @param firstFieldSchema - The first field schema to compare.
   * @param secondFieldSchema - The second field schema to compare.
   * @returns True if the field schemas are equal, false otherwise.
   */
  static areFieldSchemaEqual(firstFieldSchema, secondFieldSchema) {
    return isEqual_default(firstFieldSchema, secondFieldSchema);
  }
  /**
   * Sets the field schema for a given content type.
   * @param contentTypeUid The unique identifier of the content type.
   * @param fieldSchemaMap The map of individual field schemas.
   */
  static setFieldSchema(contentTypeUid, fieldSchemaMap) {
    _FieldSchemaMap2.fieldSchema[contentTypeUid] = fieldSchemaMap;
  }
  /**
   * Clears the field schema cache.
   */
  static clear() {
    _FieldSchemaMap2.fieldSchema = {};
    _FieldSchemaMap2.fieldSchemaPromise = {};
  }
};
_FieldSchemaMap.fieldSchema = {};
_FieldSchemaMap.fieldSchemaPromise = {};
var FieldSchemaMap = _FieldSchemaMap;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/errorHandling.js
function hasPostMessageError(obj) {
  return (obj == null ? void 0 : obj.error) === true;
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/getFieldData.js
async function getFieldData(fieldMetadata, entryPath) {
  var _a;
  const data = await ((_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send(
    VisualBuilderPostMessageEvents.GET_FIELD_DATA,
    { fieldMetadata, entryPath: entryPath ?? "" }
  ));
  if (hasPostMessageError(data)) {
    return "";
  }
  return data == null ? void 0 : data.fieldData;
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/getFieldType.js
function getFieldType(fieldSchema) {
  var _a, _b, _c, _d, _e;
  if (!fieldSchema) return;
  if (Object.hasOwnProperty.call(fieldSchema, "extension_uid")) {
    return FieldDataType.CUSTOM_FIELD;
  }
  switch (fieldSchema.data_type) {
    case "text": {
      if ((_a = fieldSchema.field_metadata) == null ? void 0 : _a.multiline) {
        return FieldDataType.MULTILINE;
      } else if ((_b = fieldSchema.field_metadata) == null ? void 0 : _b.allow_rich_text) {
        return FieldDataType.HTML_RTE;
      } else if ((_c = fieldSchema.field_metadata) == null ? void 0 : _c.markdown) {
        return FieldDataType.MARKDOWN_RTE;
      } else if (fieldSchema.enum) {
        return FieldDataType.SELECT;
      } else if (fieldSchema.uid === "url" && ((_d = fieldSchema.field_metadata) == null ? void 0 : _d._default)) {
        return FieldDataType.URL;
      } else {
        return FieldDataType.SINGLELINE;
      }
    }
    case "json": {
      if ((_e = fieldSchema.field_metadata) == null ? void 0 : _e.allow_json_rte) {
        return FieldDataType.JSON_RTE;
      }
      break;
    }
    case "blocks": {
      return "modular_block";
    }
    case "link":
    case "isodate":
    case "boolean":
    case "block":
    case "number":
    case "reference":
    case "group":
    case "experience_container":
    case "file":
    case "taxonomy":
    case "global_field": {
      return FieldDataType[fieldSchema.data_type.toUpperCase()];
    }
  }
  return "";
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/insertSpaceAtCursor.js
function insertSpaceAtCursor(element) {
  const selection = window.getSelection();
  if (selection && selection.rangeCount > 0) {
    const range2 = selection.getRangeAt(0);
    const spaceNode = document.createTextNode(unicodeNonBreakingSpace);
    range2.deleteContents();
    range2.insertNode(spaceNode);
    range2.setStartAfter(spaceNode);
    range2.setEndAfter(spaceNode);
    selection.removeAllRanges();
    selection.addRange(range2);
  }
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/handleFieldMouseDown.js
function handleFieldInput(e6) {
  const event = e6;
  const targetElement = event.target;
  const fieldType = targetElement.getAttribute(
    VISUAL_BUILDER_FIELD_TYPE_ATTRIBUTE_KEY
  );
  const previousLastEditedElement = document.querySelector("[data-cs-last-edited]");
  if (previousLastEditedElement !== targetElement) {
    previousLastEditedElement == null ? void 0 : previousLastEditedElement.removeAttribute("data-cs-last-edited");
    targetElement.setAttribute("data-cs-last-edited", "true");
  }
  if (event.type === "input" && ALLOWED_INLINE_EDITABLE_FIELD.includes(fieldType)) {
    if (!VisualBuilder.VisualBuilderGlobalState.value.focusFieldReceivedInput) {
      VisualBuilder.VisualBuilderGlobalState.value.focusFieldReceivedInput = true;
    }
    throttledFieldSync();
  }
}
var throttledFieldSync = throttle_default(() => {
  try {
    const visualBuilderContainer = document.querySelector(
      ".visual-builder__container"
    );
    if (!visualBuilderContainer) return;
    sendFieldEvent({
      visualBuilderContainer,
      eventType: VisualBuilderPostMessageEvents.SYNC_FIELD
    });
  } catch (error) {
    console.error("Error in throttledFieldSync", error);
  }
}, 300);
function handleFieldKeyDown(e6) {
  const event = e6;
  const targetElement = event.target;
  const fieldType = targetElement.getAttribute(
    VISUAL_BUILDER_FIELD_TYPE_ATTRIBUTE_KEY
  );
  if (event.composedPath().some(
    (element) => element instanceof Element && element.tagName === "BUTTON"
  )) {
    handleKeyDownOnButton(event);
  }
  if (fieldType === FieldDataType.NUMBER) {
    handleNumericFieldKeyDown(event);
  } else if (fieldType === FieldDataType.SINGLELINE) {
    handleSingleLineFieldKeyDown(event);
  }
}
function handleKeyDownOnButton(e6) {
  if (e6.code === "Space" && e6.target) {
    e6.preventDefault();
    insertSpaceAtCursor(e6.target);
    throttledFieldSync();
  }
}
function handleSingleLineFieldKeyDown(e6) {
  if (e6.code === "Enter") {
    e6.preventDefault();
  }
}
function handleNumericFieldKeyDown(event) {
  var _a, _b;
  const targetElement = event.target;
  const allowedKeys = [
    "Backspace",
    "Tab",
    "Enter",
    "End",
    "Home",
    "ArrowLeft",
    "ArrowRight",
    "Delete"
  ];
  if (event.ctrlKey || event.metaKey || event.altKey || allowedKeys.includes(event.code)) {
    return;
  }
  if (event.code.includes("Digit")) {
    return;
  }
  const nonNumericAllowedCharacters = ["-", ".", "e", "E"];
  if (!nonNumericAllowedCharacters.includes(event.key)) {
    event.preventDefault();
    return;
  }
  const selection = {
    startOffset: ((_a = window.getSelection()) == null ? void 0 : _a.getRangeAt(0).startOffset) || 0,
    endOffset: ((_b = window.getSelection()) == null ? void 0 : _b.getRangeAt(0).endOffset) || 0
  };
  const existingInput = targetElement.textContent || "";
  const currentOutputArr = existingInput.split("");
  currentOutputArr.splice(
    selection.startOffset,
    selection.endOffset - selection.startOffset,
    event.key
  );
  const currentInput = currentOutputArr.join("");
  if (!numericInputRegex.test(currentInput)) {
    event.preventDefault();
  }
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/isFieldDisabled.js
var DisableReason = {
  ReadOnly: "You have only read access to this field",
  LocalizedEntry: "Editing this field is restricted in localized entries",
  UnlinkedVariant: "This field is not editable as it is not linked to the selected variant",
  AudienceMode: "To edit an experience, open the Audience widget and click the Edit icon.",
  DisabledVariant: "This field is not editable as it doesn't match the selected variant",
  UnlocalizedVariant: "This field is not editable as it is not localized",
  None: "",
  EntryUpdateRestricted: "You do not have permission to edit this entry",
  WorkflowStagePermission: ({ stageName }) => `You do not have Edit access to this entry on the '${stageName}' workflow stage`,
  EntryUpdateRestrictedRoleAndWorkflowStage: ({
    stageName
  }) => `Editing is restricted for your role or by the rules for the '${stageName}' stage. Contact your admin for edit access.`
};
var getDisableReason = (flags, params) => {
  if (flags.updateRestrictDueToRole) return DisableReason.ReadOnly;
  if (flags.updateRestrictDueToNonLocalizableFields)
    return DisableReason.LocalizedEntry;
  if (flags.updateRestrictDueToUnlocalizedVariant)
    return DisableReason.UnlocalizedVariant;
  if (flags.updateRestrictDueToUnlinkVariant)
    return DisableReason.UnlinkedVariant;
  if (flags.updateRestrictDueToAudienceMode)
    return DisableReason.AudienceMode;
  if (flags.updateRestrictDueToDisabledVariant)
    return DisableReason.DisabledVariant;
  if (flags.updateRestrictDueToEntryUpdateRestriction && flags.updateRestrictDueToWorkflowStagePermission) {
    return DisableReason.EntryUpdateRestrictedRoleAndWorkflowStage({
      stageName: (params == null ? void 0 : params.stageName) ? params.stageName : "Unknown"
    });
  }
  if (flags.updateRestrictDueToEntryUpdateRestriction) {
    return DisableReason.EntryUpdateRestricted;
  }
  if (flags.updateRestrictDueToWorkflowStagePermission) {
    return DisableReason.WorkflowStagePermission({
      stageName: (params == null ? void 0 : params.stageName) ? params.stageName : "Unknown"
    });
  }
  return DisableReason.None;
};
var isFieldDisabled = (fieldSchemaMap, eventFieldDetails, entryPermissions, entryWorkflowStageDetails) => {
  var _a, _b, _c;
  const { editableElement, fieldMetadata } = eventFieldDetails;
  const masterLocale = configManager_default.get().stackDetails.masterLocale || "en-us";
  const { locale: cmsLocale, variant } = VisualBuilder.VisualBuilderGlobalState.value;
  const flags = {
    updateRestrictDueToRole: Boolean(
      (_a = fieldSchemaMap == null ? void 0 : fieldSchemaMap.field_metadata) == null ? void 0 : _a.updateRestrict
    ),
    updateRestrictDueToUnlinkVariant: Boolean(
      (_b = fieldSchemaMap == null ? void 0 : fieldSchemaMap.field_metadata) == null ? void 0 : _b.isUnlinkedVariant
    ),
    updateRestrictDueToUnlocalizedVariant: Boolean(
      variant && fieldMetadata.locale !== cmsLocale
    ),
    updateRestrictDueToNonLocalizableFields: Boolean(
      (fieldSchemaMap == null ? void 0 : fieldSchemaMap.non_localizable) && masterLocale !== fieldMetadata.locale
    ),
    updateRestrictDueToAudienceMode: false,
    updateRestrictDueToDisabledVariant: false
  };
  if (entryPermissions && !entryPermissions.update) {
    flags.updateRestrictDueToEntryUpdateRestriction = true;
  }
  if (entryWorkflowStageDetails && !entryWorkflowStageDetails.permissions.entry.update) {
    flags.updateRestrictDueToWorkflowStagePermission = true;
  }
  if (VisualBuilder.VisualBuilderGlobalState.value.audienceMode && !editableElement.classList.contains("visual-builder__variant-field") && !editableElement.classList.contains("visual-builder__base-field")) {
    if (editableElement.classList.contains(
      "visual-builder__disabled-variant-field"
    )) {
      flags.updateRestrictDueToDisabledVariant = true;
    } else {
      flags.updateRestrictDueToAudienceMode = true;
    }
  }
  const isDisabled = Object.values(flags).some(Boolean);
  const reason = getDisableReason(flags, {
    stageName: (_c = entryWorkflowStageDetails == null ? void 0 : entryWorkflowStageDetails.stage) == null ? void 0 : _c.name
  });
  return { isDisabled, reason };
};

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/addInstanceButton.js
var import_classnames3 = __toESM(require_classnames(), 1);
function AddInstanceButtonComponent(props) {
  const fieldSchema = props.fieldSchema;
  const fieldMetadata = props.fieldMetadata;
  const index = props.index;
  const loading = props.loading;
  const onClick = async (event) => {
    var _a;
    loading.value = true;
    try {
      await ((_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send(
        VisualBuilderPostMessageEvents.ADD_INSTANCE,
        {
          fieldMetadata,
          index
        }
      ));
    } catch (error) {
      console.error("Visual Builder: Failed to add instance", error);
    }
    loading.value = false;
    props.onClick(event);
  };
  const buttonClassName = (0, import_classnames3.default)(
    "visual-builder__add-button",
    visualBuilderStyles()["visual-builder__add-button"],
    {
      "visual-builder__add-button--with-label": props.label
    },
    {
      [visualBuilderStyles()["visual-builder__add-button--loading"]]: loading.value
    },
    visualBuilderStyles()["visual-builder__tooltip"]
  );
  const maxInstances = fieldSchema && fieldSchema.data_type !== "block" ? fieldSchema.max_instance : void 0;
  const isMaxInstances = maxInstances ? props.value.length >= maxInstances : false;
  const disabled = loading.value || isMaxInstances;
  return u6(
    "button",
    {
      className: buttonClassName,
      "data-tooltip": "Add section",
      "data-testid": "visual-builder-add-instance-button",
      disabled,
      title: maxInstances && isMaxInstances ? `Max ${maxInstances} instances allowed` : void 0,
      onClick: (e6) => {
        const event = e6;
        onClick(event);
      },
      children: [
        u6(PlusIcon, {}),
        props.label ? u6(
          "span",
          {
            title: props.label,
            className: (0, import_classnames3.default)(
              "visual-builder__add-button-label",
              visualBuilderStyles()["visual-builder__add-button-label"]
            ),
            children: props.label
          }
        ) : null
      ]
    }
  );
}
var addInstanceButton_default = AddInstanceButtonComponent;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/generators/generateAddInstanceButtons.js
function generateAddInstanceButton({
  value,
  fieldSchema,
  fieldMetadata,
  index,
  loading,
  onClick,
  label
}) {
  const wrapper = document.createDocumentFragment();
  B(
    u6(
      addInstanceButton_default,
      {
        loading,
        index,
        value,
        label,
        onClick,
        fieldSchema,
        fieldMetadata
      }
    ),
    wrapper
  );
  const button = wrapper.children[0];
  return button;
}
function getAddInstanceButtons(visualBuilderContainer, getAllButtons = false) {
  const buttons = visualBuilderContainer.getElementsByClassName(
    "visual-builder__add-button"
  );
  if (getAllButtons) {
    return Array.from(buttons);
  }
  if (buttons.length < 2) {
    return null;
  }
  const previousButton = buttons[0];
  const nextButton = buttons[1];
  return [previousButton, nextButton];
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/getChildElements.js
function getChildElements(parentElement, parentCslpValue) {
  const childElements = parentElement.querySelectorAll(
    `[data-cslp^="${parentCslpValue + "."}"]`
  );
  const filteredChildElements = Array.from(childElements).filter(
    (childElement) => {
      var _a;
      return ((_a = childElement.getAttribute("data-cslp")) == null ? void 0 : _a.match(/\.\d+$/)) !== null;
    }
  );
  const firstChild = filteredChildElements.at(0);
  if (!firstChild) return [null, null, () => {
  }];
  const secondChild = filteredChildElements.at(1);
  if (secondChild) return [firstChild, secondChild, () => {
  }];
  const firstChildClone = document.createElement(firstChild.tagName);
  firstChildClone.setAttribute(
    "class",
    firstChild.getAttribute("class") ?? ""
  );
  const HIDE_ELEMENT_CSS = "overflow: hidden !important; width: 0 !important; height: 0 !important; padding: 0 !important; border: 0 !important;";
  firstChildClone.setAttribute("style", HIDE_ELEMENT_CSS);
  parentElement.appendChild(firstChildClone);
  function removeClone() {
    parentElement.removeChild(firstChildClone);
  }
  return [firstChild, firstChildClone, removeClone];
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/getChildrenDirection.js
var validPositions = ["vertical", "horizontal", "none"];
function getChildrenDirection(editableElement, parentCslpValue) {
  if (!editableElement) {
    return "none";
  }
  const parentElement = editableElement.closest(
    `[data-cslp="${parentCslpValue}"]`
  );
  if (!parentElement) {
    return "none";
  }
  const directionFromParentElement = parentElement.getAttribute("data-add-direction");
  const isValidParentDirection = validPositions.includes(
    directionFromParentElement
  );
  if (directionFromParentElement && isValidParentDirection) {
    return directionFromParentElement;
  }
  const [firstChildElement, secondChildElement, removeClone] = getChildElements(parentElement, parentCslpValue);
  if (!firstChildElement) return "none";
  const firstChildBounds = firstChildElement.getBoundingClientRect();
  const secondChildBounds = secondChildElement.getBoundingClientRect();
  const deltaX = Math.abs(firstChildBounds.left - secondChildBounds.left);
  const deltaY = Math.abs(firstChildBounds.top - secondChildBounds.top);
  const dir = deltaX > deltaY ? "horizontal" : "vertical";
  removeClone();
  return dir;
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/getCsDataOfElement.js
function getCsDataOfElement(event) {
  const targetElement = event.target;
  if (!targetElement) {
    return;
  }
  const editableElement = targetElement.closest("[data-cslp]");
  if (!editableElement) {
    return;
  }
  const cslpData = editableElement.getAttribute("data-cslp");
  if (!cslpData) {
    return;
  }
  const fieldMetadata = extractDetailsFromCslp(cslpData);
  return {
    editableElement,
    cslpData,
    fieldMetadata
  };
}
function getPrefix(cslp) {
  let prefix;
  if (cslp.startsWith("v2:")) {
    const variantPrefix = cslp.split(":")[1];
    const content_type_uid = variantPrefix.split(".")[0];
    const euid = variantPrefix.split(".")[1].split("_")[0];
    const locale = variantPrefix.split(".")[2];
    prefix = `${content_type_uid}.${euid}.${locale}`;
  } else {
    prefix = cslp;
  }
  return prefix.split(".").slice(0, 3).join(".");
}
function getDOMEditStack(ele) {
  var _a;
  const cslpSet = [];
  let curr = ele.closest(`[${DATA_CSLP_ATTR_SELECTOR}]`);
  while (curr) {
    const cslp = curr.getAttribute(DATA_CSLP_ATTR_SELECTOR);
    const entryPrefix = getPrefix(cslp);
    const hasSamePrevPrefix = getPrefix(cslpSet.at(0) || "").startsWith(
      entryPrefix
    );
    if (!hasSamePrevPrefix) {
      cslpSet.unshift(cslp);
    }
    curr = (_a = curr.parentElement) == null ? void 0 : _a.closest(`[${DATA_CSLP_ATTR_SELECTOR}]`);
  }
  return cslpSet.map((cslp) => extractDetailsFromCslp(cslp));
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/generators/generateCustomCursor.js
var import_classnames4 = __toESM(require_classnames(), 1);
var modular_block = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 3.5625C2.25 2.83763 2.83763 2.25 3.5625 2.25H20.441C21.1659 2.25 21.7535 2.83763 21.7535 3.5625V20.441C21.7535 21.1659 21.1659 21.7535 20.441 21.7535H3.5625C2.83763 21.7535 2.25 21.1659 2.25 20.441V3.5625ZM3.375 12.5643V20.441C3.375 20.5446 3.45895 20.6285 3.5625 20.6285H11.4393V12.5643L3.375 12.5643ZM11.4393 11.4393L3.375 11.4393V3.5625C3.375 3.45895 3.45895 3.375 3.5625 3.375H11.4393V11.4393ZM12.5643 12.5643V20.6285H20.441C20.5446 20.6285 20.6285 20.5446 20.6285 20.441V12.5643L12.5643 12.5643ZM20.6285 11.4393L12.5643 11.4393V3.375H20.441C20.5446 3.375 20.6285 3.45895 20.6285 3.5625V11.4393Z" fill="white"/></svg>`;
var url = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5747 8.4136C15.7945 8.63311 15.7948 8.98927 15.5753 9.2091L9.21902 15.5747C8.99952 15.7946 8.64336 15.7948 8.42353 15.5753C8.2037 15.3558 8.20344 14.9996 8.42294 14.7798L14.7792 8.41419C14.9987 8.19436 15.3549 8.1941 15.5747 8.4136Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.6251 10.0076C7.84477 10.2273 7.84477 10.5835 7.6251 10.8031L4.97197 13.4563C4.23333 14.1949 3.81836 15.1967 3.81836 16.2413C3.81836 17.2859 4.23333 18.2878 4.97197 19.0264C5.71062 19.765 6.71243 20.18 7.75704 20.18C8.27427 20.18 8.78644 20.0781 9.2643 19.8802C9.74216 19.6823 10.1764 19.3921 10.5421 19.0264L13.1952 16.3733C13.4149 16.1536 13.7711 16.1536 13.9907 16.3733C14.2104 16.5929 14.2104 16.9491 13.9907 17.1688L11.3376 19.8219C10.8674 20.2921 10.3092 20.6651 9.69482 20.9196C9.08047 21.174 8.42201 21.305 7.75704 21.305C6.41406 21.305 5.1261 20.7715 4.17648 19.8219C3.22685 18.8723 2.69336 17.5843 2.69336 16.2413C2.69336 14.8984 3.22685 13.6104 4.17648 12.6608L6.8296 10.0076C7.04927 9.78798 7.40543 9.78798 7.6251 10.0076Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.6608 4.17648C13.6104 3.22685 14.8984 2.69336 16.2413 2.69336C17.5843 2.69336 18.8723 3.22685 19.8219 4.17648C20.7715 5.1261 21.305 6.41406 21.305 7.75704C21.305 9.10001 20.7715 10.388 19.8219 11.3376L17.1688 13.9907C16.9491 14.2104 16.5929 14.2104 16.3733 13.9907C16.1536 13.7711 16.1536 13.4149 16.3733 13.1952L19.0264 10.5421C19.765 9.80345 20.18 8.80164 20.18 7.75704C20.18 6.71243 19.765 5.71062 19.0264 4.97197C18.2878 4.23333 17.2859 3.81836 16.2413 3.81836C15.1967 3.81836 14.1949 4.23333 13.4563 4.97197L10.8031 7.6251C10.5835 7.84477 10.2273 7.84477 10.0076 7.6251C9.78798 7.40543 9.78798 7.04927 10.0076 6.8296L12.6608 4.17648Z" fill="white"/></svg>`;
var FieldTypeIconsMap = {
  singleline: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.94958 7.8294C5.85419 7.6199 5.64077 7.48967 5.41084 7.50064C5.1809 7.51162 4.98086 7.66158 4.90585 7.87921L3.19036 12.8566L2.2835 15.3717C2.17813 15.664 2.32962 15.9863 2.62186 16.0917C2.9141 16.197 3.23643 16.0455 3.34181 15.7533L3.95144 14.0625H7.53908L8.29768 15.7888C8.42266 16.0732 8.75454 16.2025 9.03895 16.0775C9.32336 15.9525 9.4526 15.6206 9.32762 15.3362L8.22073 12.8173L8.21769 12.8105L5.94958 7.8294ZM7.03937 12.9375L5.51002 9.57881L4.35242 12.9375H7.03937Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.625 8.0625C11.625 7.75184 11.3732 7.5 11.0625 7.5C10.7518 7.5 10.5 7.75184 10.5 8.0625V15.5625C10.5 15.8732 10.7518 16.125 11.0625 16.125C11.3731 16.125 11.6249 15.8733 11.625 15.5627C12.0951 15.9158 12.6793 16.125 13.3125 16.125C14.8658 16.125 16.125 14.8658 16.125 13.3125C16.125 11.7592 14.8658 10.5 13.3125 10.5C12.6793 10.5 12.0951 10.7092 11.625 11.0623V8.0625ZM11.625 13.3116C11.625 13.3119 11.625 13.3122 11.625 13.3125C11.625 13.3128 11.625 13.3131 11.625 13.3134C11.6255 14.245 12.3808 15 13.3125 15C14.2445 15 15 14.2445 15 13.3125C15 12.3805 14.2445 11.625 13.3125 11.625C12.3808 11.625 11.6255 12.38 11.625 13.3116Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M19.9448 10.5025C20.4222 10.4825 20.8969 10.5844 21.324 10.7988C21.6017 10.9381 21.7138 11.2762 21.5744 11.5538C21.4351 11.8315 21.0971 11.9436 20.8194 11.8043C20.5631 11.6757 20.2783 11.6145 19.9919 11.6265C19.7054 11.6385 19.4267 11.7233 19.1821 11.8729C18.9375 12.0224 18.735 12.2319 18.5938 12.4814C18.4526 12.731 18.3773 13.0124 18.375 13.2991C18.3728 13.5858 18.4436 13.8684 18.5808 14.1201C18.718 14.3719 18.9171 14.5845 19.1593 14.738C19.4015 14.8914 19.6788 14.9806 19.9651 14.9972C20.2513 15.0137 20.5371 14.9571 20.7953 14.8326C21.0752 14.6977 21.4114 14.8151 21.5463 15.095C21.6812 15.3748 21.5637 15.711 21.2839 15.846C20.8534 16.0535 20.3772 16.1479 19.9001 16.1203C19.423 16.0927 18.9609 15.944 18.5572 15.6883C18.1535 15.4325 17.8217 15.0781 17.593 14.6585C17.3643 14.2389 17.2463 13.768 17.2501 13.2901C17.2539 12.8123 17.3794 12.3433 17.6147 11.9274C17.8501 11.5115 18.1875 11.1624 18.5952 10.9131C19.0029 10.6638 19.4673 10.5225 19.9448 10.5025Z" fill="white"/></svg>`,
  multiline: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.8125 6.75C20.8125 7.06066 20.5607 7.3125 20.25 7.3125L12.75 7.3125C12.4393 7.3125 12.1875 7.06066 12.1875 6.75C12.1875 6.43934 12.4393 6.1875 12.75 6.1875L20.25 6.1875C20.5607 6.1875 20.8125 6.43934 20.8125 6.75Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.8125 11.25C20.8125 11.5607 20.5607 11.8125 20.25 11.8125H12.75C12.4393 11.8125 12.1875 11.5607 12.1875 11.25C12.1875 10.9393 12.4393 10.6875 12.75 10.6875H20.25C20.5607 10.6875 20.8125 10.9393 20.8125 11.25Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.8125 15.75C20.8125 16.0607 20.5607 16.3125 20.25 16.3125L3.75 16.3125C3.43934 16.3125 3.1875 16.0607 3.1875 15.75C3.1875 15.4393 3.43934 15.1875 3.75 15.1875L20.25 15.1875C20.5607 15.1875 20.8125 15.4393 20.8125 15.75Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.8125 20.25C20.8125 20.5607 20.5607 20.8125 20.25 20.8125L3.75 20.8125C3.43934 20.8125 3.1875 20.5607 3.1875 20.25C3.1875 19.9393 3.43934 19.6875 3.75 19.6875L20.25 19.6875C20.5607 19.6875 20.8125 19.9393 20.8125 20.25Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.69958 4.0794C6.60419 3.8699 6.39077 3.73967 6.16084 3.75064C5.9309 3.76162 5.73086 3.91158 5.65585 4.12921L3.94036 9.10658L3.0335 11.6217C2.92813 11.914 3.07962 12.2363 3.37186 12.3417C3.6641 12.447 3.98643 12.2955 4.09181 12.0033L4.70145 10.3125H8.28908L9.04768 12.0388C9.17266 12.3232 9.50454 12.4525 9.78895 12.3275C10.0734 12.2025 10.2026 11.8706 10.0776 11.5862L8.97074 9.06732L8.96769 9.06052L6.69958 4.0794ZM7.78938 9.1875L6.26002 5.8288L5.10242 9.1875H7.78938Z" fill="white"/></svg>`,
  html_rte: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.5625 11.4375V5.0625H11.4375V10.7422L10.1108 8.0888C9.82462 7.51646 9.06183 7.39267 8.60936 7.84515L5.017 11.4375H3.5625ZM6.608 11.4375H10.5274L9.2209 8.82459L6.608 11.4375ZM3.375 3.9375C2.85723 3.9375 2.4375 4.35723 2.4375 4.875V11.625C2.4375 12.1428 2.85723 12.5625 3.375 12.5625H11.625C12.1428 12.5625 12.5625 12.1428 12.5625 11.625V4.875C12.5625 4.35723 12.1428 3.9375 11.625 3.9375H3.375Z" fill="white"/><path d="M6.11566 7.73132C6.59375 7.73132 6.98132 7.34375 6.98132 6.86566C6.98132 6.38757 6.59375 6 6.11566 6C5.63757 6 5.25 6.38757 5.25 6.86566C5.25 7.34375 5.63757 7.73132 6.11566 7.73132Z" fill="#475161"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5625 6C21.5625 6.31066 21.3107 6.5625 21 6.5625L15 6.5625C14.6893 6.5625 14.4375 6.31066 14.4375 6C14.4375 5.68934 14.6893 5.4375 15 5.4375L21 5.4375C21.3107 5.4375 21.5625 5.68934 21.5625 6Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5625 10.5C21.5625 10.8107 21.3107 11.0625 21 11.0625H15C14.6893 11.0625 14.4375 10.8107 14.4375 10.5C14.4375 10.1893 14.6893 9.9375 15 9.9375L21 9.9375C21.3107 9.9375 21.5625 10.1893 21.5625 10.5Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5625 15C21.5625 15.3107 21.3107 15.5625 21 15.5625L3.75 15.5625C3.43934 15.5625 3.1875 15.3107 3.1875 15C3.1875 14.6893 3.43934 14.4375 3.75 14.4375L21 14.4375C21.3107 14.4375 21.5625 14.6893 21.5625 15Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5625 19.5C21.5625 19.8107 21.3107 20.0625 21 20.0625L3.75 20.0625C3.43934 20.0625 3.1875 19.8107 3.1875 19.5C3.1875 19.1893 3.43934 18.9375 3.75 18.9375L21 18.9375C21.3107 18.9375 21.5625 19.1893 21.5625 19.5Z" fill="white"/></svg>`,
  json_rte: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.67113 7.5005C7.94625 7.5005 7.35863 8.08812 7.35863 8.813V9.87593C7.35863 10.1866 7.61047 10.4384 7.92113 10.4384C8.23179 10.4384 8.48363 10.1866 8.48363 9.87593V8.813C8.48363 8.70944 8.56757 8.6255 8.67113 8.6255H11.4375V15.6584H10.3575C10.0468 15.6584 9.79501 15.9103 9.79501 16.2209C9.79501 16.5316 10.0468 16.7834 10.3575 16.7834H13.9834C14.294 16.7834 14.5459 16.5316 14.5459 16.2209C14.5459 15.9103 14.294 15.6584 13.9834 15.6584H12.5625V8.6255H15.3293C15.4329 8.6255 15.5168 8.70945 15.5168 8.813V9.87593C15.5168 10.1866 15.7687 10.4384 16.0793 10.4384C16.39 10.4384 16.6418 10.1866 16.6418 9.87593V8.813C16.6418 8.08812 16.0542 7.5005 15.3293 7.5005H8.67113Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.97059 2.99805C5.00307 2.99805 3.40809 4.59303 3.40809 6.56055V9.51691C3.40809 10.5707 2.55381 11.425 1.5 11.425V12.55C2.55381 12.55 3.40809 13.4043 3.40809 14.4581V17.4145C3.40809 19.382 5.00307 20.977 6.97059 20.977H7.5V19.852H6.97059C5.6244 19.852 4.53309 18.7607 4.53309 17.4145V14.4581C4.53309 13.4391 4.03059 12.5375 3.25988 11.9875C4.03059 11.4375 4.53309 10.5359 4.53309 9.51691V6.56055C4.53309 5.21435 5.6244 4.12305 6.97059 4.12305H7.5V2.99805H6.97059Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.0294 2.99805C18.9969 2.99805 20.5919 4.59303 20.5919 6.56055V9.51691C20.5919 10.5707 21.4462 11.425 22.5 11.425V12.55C21.4462 12.55 20.5919 13.4043 20.5919 14.4581V17.4145C20.5919 19.382 18.9969 20.977 17.0294 20.977H16.5V19.852H17.0294C18.3756 19.852 19.4669 18.7607 19.4669 17.4145V14.4581C19.4669 13.4391 19.9694 12.5375 20.7401 11.9875C19.9694 11.4375 19.4669 10.5359 19.4669 9.51691V6.56055C19.4669 5.21435 18.3756 4.12305 17.0294 4.12305H16.5V2.99805H17.0294Z" fill="white"/></svg>`,
  markdown_rte: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.3163 16.1134L11.3051 11.4011L8.9938 15.2831H8.17475L5.87469 11.502V16.1134H4.16928V8.25951H5.67273L8.61232 13.1401L11.507 8.25951H12.9993L13.0217 16.1134H11.3163Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1.6875 6C1.6875 5.27513 2.27513 4.6875 3 4.6875H21C21.7249 4.6875 22.3125 5.27513 22.3125 6V18C22.3125 18.7249 21.7249 19.3125 21 19.3125H3C2.27513 19.3125 1.6875 18.7249 1.6875 18V6ZM3 5.8125C2.89645 5.8125 2.8125 5.89645 2.8125 6V18C2.8125 18.1036 2.89645 18.1875 3 18.1875H21C21.1036 18.1875 21.1875 18.1036 21.1875 18V6C21.1875 5.89645 21.1036 5.8125 21 5.8125H3Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.1818 12.408H20.1013L17.4168 16.1134L14.7323 12.408H16.6518V8.27225H18.1818V12.408Z" fill="white"/></svg>`,
  select: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 8.8125C2.89645 8.8125 2.8125 8.89645 2.8125 9V10.5C2.8125 10.8107 2.56066 11.0625 2.25 11.0625C1.93934 11.0625 1.6875 10.8107 1.6875 10.5V9C1.6875 8.27513 2.27513 7.6875 3 7.6875H4.5C4.81066 7.6875 5.0625 7.93934 5.0625 8.25C5.0625 8.56066 4.81066 8.8125 4.5 8.8125H3ZM6.9375 8.25C6.9375 7.93934 7.18934 7.6875 7.5 7.6875H10.5C10.8107 7.6875 11.0625 7.93934 11.0625 8.25C11.0625 8.56066 10.8107 8.8125 10.5 8.8125H7.5C7.18934 8.8125 6.9375 8.56066 6.9375 8.25ZM12.9375 8.25C12.9375 7.93934 13.1893 7.6875 13.5 7.6875H16.5C16.8107 7.6875 17.0625 7.93934 17.0625 8.25C17.0625 8.56066 16.8107 8.8125 16.5 8.8125H13.5C13.1893 8.8125 12.9375 8.56066 12.9375 8.25ZM18.9375 8.25C18.9375 7.93934 19.1893 7.6875 19.5 7.6875H21C21.7249 7.6875 22.3125 8.27513 22.3125 9V10.6875C22.3125 10.9982 22.0607 11.25 21.75 11.25C21.4393 11.25 21.1875 10.9982 21.1875 10.6875V9C21.1875 8.89645 21.1036 8.8125 21 8.8125H19.5C19.1893 8.8125 18.9375 8.56066 18.9375 8.25ZM2.25 12.9375C2.56066 12.9375 2.8125 13.1893 2.8125 13.5V15C2.8125 15.1036 2.89645 15.1875 3 15.1875H4.125C4.43566 15.1875 4.6875 15.4393 4.6875 15.75C4.6875 16.0607 4.43566 16.3125 4.125 16.3125H3C2.27513 16.3125 1.6875 15.7249 1.6875 15V13.5C1.6875 13.1893 1.93934 12.9375 2.25 12.9375ZM21.75 13.5C22.0607 13.5 22.3125 13.7518 22.3125 14.0625V15.75C22.3125 16.0607 22.0607 16.3125 21.75 16.3125C21.4393 16.3125 21.1875 16.0607 21.1875 15.75V14.0625C21.1875 13.7518 21.4393 13.5 21.75 13.5ZM5.8125 15.75C5.8125 15.4393 6.06434 15.1875 6.375 15.1875H8.625C8.93566 15.1875 9.1875 15.4393 9.1875 15.75C9.1875 16.0607 8.93566 16.3125 8.625 16.3125H6.375C6.06434 16.3125 5.8125 16.0607 5.8125 15.75ZM10.3125 15.75C10.3125 15.4393 10.5643 15.1875 10.875 15.1875H12C12.3107 15.1875 12.5625 15.4393 12.5625 15.75C12.5625 16.0607 12.3107 16.3125 12 16.3125H10.875C10.5643 16.3125 10.3125 16.0607 10.3125 15.75Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.4457 13.3706C13.3603 12.5628 14.2727 12.036 14.9296 12.5139L21.2889 17.1406C21.9906 17.6511 21.6818 18.7589 20.8172 18.8328L17.7404 19.0958L15.9742 21.6289C15.4779 22.3407 14.3642 22.0543 14.2729 21.1913L13.4457 13.3706ZM14.6089 13.6718L15.3388 20.5732L16.8678 18.3803C17.027 18.1519 17.2796 18.0061 17.557 17.9823L20.2207 17.7547L14.6089 13.6718Z" fill="white"/></svg>`,
  modular_block,
  block: modular_block,
  number: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.46172 8.08704C6.45117 8.02147 6.42928 7.9597 6.39813 7.90379C6.35727 7.8301 6.3012 7.7682 6.23536 7.72082C6.16973 7.67343 6.09347 7.63985 6.01084 7.62433C5.94777 7.61236 5.88203 7.61108 5.81629 7.62183C5.78173 7.6274 5.74822 7.63611 5.71607 7.64767L3.47852 8.39352C3.18381 8.49176 3.02453 8.81031 3.12277 9.10503C3.22101 9.39975 3.53956 9.55903 3.83428 9.46079L5.3439 8.95758L5.3439 15.302H4.59375C4.28309 15.302 4.03125 15.5538 4.03125 15.8645C4.03125 16.1752 4.28309 16.427 4.59375 16.427H7.33594C7.6466 16.427 7.89844 16.1752 7.89844 15.8645C7.89844 15.5538 7.6466 15.302 7.33594 15.302H6.4689L6.4689 8.19029C6.4697 8.15613 6.46737 8.12159 6.46172 8.08704Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.51562 9.32004C9.51562 8.35585 10.2973 7.57422 11.2614 7.57422H12.8054C13.6809 7.57422 14.3906 8.28395 14.3906 9.15945V10.9828C14.3906 11.6816 13.9922 12.3191 13.3642 12.6254L12.2817 13.1533C12.2739 13.1571 12.266 13.1607 12.258 13.1641L11.3359 13.562C10.6003 13.8794 10.0831 14.537 9.93348 15.302H13.8281C14.1388 15.302 14.3906 15.5538 14.3906 15.8645C14.3906 16.1752 14.1388 16.427 13.8281 16.427H9.36208C9.03756 16.427 8.77241 16.1679 8.76493 15.8435C8.73182 14.4088 9.57261 13.0976 10.8902 12.5291L11.8003 12.1364L12.8711 11.6142C13.1125 11.4965 13.2656 11.2514 13.2656 10.9828V9.15945C13.2656 8.90527 13.0596 8.69922 12.8054 8.69922H11.2614C10.9186 8.69922 10.6406 8.97717 10.6406 9.32004C10.6406 9.6307 10.3888 9.88254 10.0781 9.88254C9.76746 9.88254 9.51562 9.6307 9.51562 9.32004Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5938 7.62677C16.2831 7.62677 16.0312 7.87861 16.0312 8.18927C16.0312 8.49993 16.2831 8.75177 16.5938 8.75177H19.5938C19.6973 8.75177 19.7812 8.83572 19.7812 8.93927V11.4583H16.5938C16.2831 11.4583 16.0312 11.7101 16.0312 12.0208C16.0312 12.3315 16.2831 12.5833 16.5938 12.5833H19.7812V15.1023C19.7812 15.2059 19.6973 15.2898 19.5938 15.2898H16.5938C16.2831 15.2898 16.0312 15.5417 16.0312 15.8523C16.0312 16.163 16.2831 16.4148 16.5938 16.4148H19.5938C20.3186 16.4148 20.9062 15.8272 20.9062 15.1023V8.93927C20.9062 8.2144 20.3186 7.62677 19.5938 7.62677H16.5938Z" fill="white"/></svg>`,
  boolean: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.6875 12C1.6875 8.78984 4.28985 6.1875 7.5 6.1875H16.5C19.7102 6.1875 22.3125 8.78984 22.3125 12C22.3125 15.2102 19.7102 17.8125 16.5 17.8125H7.5C4.28985 17.8125 1.6875 15.2102 1.6875 12ZM7.5 7.3125C4.91117 7.3125 2.8125 9.41117 2.8125 12C2.8125 14.5888 4.91117 16.6875 7.5 16.6875H16.5C19.0888 16.6875 21.1875 14.5888 21.1875 12C21.1875 9.41117 19.0888 7.3125 16.5 7.3125H7.5Z" fill="white"/><path d="M19.5 12C19.5 13.6569 18.1569 15 16.5 15C14.8431 15 13.5 13.6569 13.5 12C13.5 10.3431 14.8431 9 16.5 9C18.1569 9 19.5 10.3431 19.5 12Z" fill="white"/></svg>`,
  isodate: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.18616 2.22852C7.49682 2.22852 7.74866 2.48036 7.74866 2.79102V3.90302H14.9956V2.79102C14.9956 2.48036 15.2474 2.22852 15.5581 2.22852C15.8688 2.22852 16.1206 2.48036 16.1206 2.79102V3.90302H18.9942C19.7191 3.90302 20.3067 4.49064 20.3067 5.21552V11.1632C20.3067 11.4739 20.0548 11.7257 19.7442 11.7257C19.4335 11.7257 19.1817 11.4739 19.1817 11.1632V9.48865L3.5625 9.48865V18.7853C3.5625 18.8888 3.64645 18.9728 3.75 18.9728H10.5349C10.8455 18.9728 11.0974 19.2246 11.0974 19.5353C11.0974 19.8459 10.8455 20.0978 10.5349 20.0978H3.75C3.02513 20.0978 2.4375 19.5102 2.4375 18.7853V5.21551C2.4375 4.49064 3.02513 3.90302 3.75 3.90302H6.62366V2.79102C6.62366 2.48036 6.8755 2.22852 7.18616 2.22852ZM14.9956 5.02802V6.13985C14.9956 6.45051 15.2474 6.70235 15.5581 6.70235C15.8688 6.70235 16.1206 6.45051 16.1206 6.13985V5.02802H18.9942C19.0977 5.02802 19.1817 5.11196 19.1817 5.21552V8.36365L3.5625 8.36365V5.21551C3.5625 5.11196 3.64645 5.02802 3.75 5.02802H6.62366V6.13985C6.62366 6.45051 6.8755 6.70235 7.18616 6.70235C7.49682 6.70235 7.74866 6.45051 7.74866 6.13985V5.02802H14.9956Z" fill="white"/><path d="M7.18589 12.0004C7.18589 12.4627 6.81106 12.8376 6.34868 12.8376C5.88631 12.8376 5.51147 12.4627 5.51147 12.0004C5.51147 11.538 5.88631 11.1631 6.34868 11.1631C6.81106 11.1631 7.18589 11.538 7.18589 12.0004Z" fill="white"/><path d="M11.3721 12.0004C11.3721 12.4627 10.9972 12.8376 10.5348 12.8376C10.0725 12.8376 9.69763 12.4627 9.69763 12.0004C9.69763 11.538 10.0725 11.1631 10.5348 11.1631C10.9972 11.1631 11.3721 11.538 11.3721 12.0004Z" fill="white"/><path d="M7.18589 16.1863C7.18589 16.6487 6.81106 17.0235 6.34868 17.0235C5.88631 17.0235 5.51147 16.6487 5.51147 16.1863C5.51147 15.724 5.88631 15.3491 6.34868 15.3491C6.81106 15.3491 7.18589 15.724 7.18589 16.1863Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.8141 13.4C14.8129 13.4 13.1906 15.0223 13.1906 17.0235C13.1906 19.0247 14.8129 20.6471 16.8141 20.6471C18.8153 20.6471 20.4376 19.0247 20.4376 17.0235C20.4376 15.0223 18.8153 13.4 16.8141 13.4ZM12.0656 17.0235C12.0656 14.401 14.1915 12.275 16.8141 12.275C19.4366 12.275 21.5626 14.401 21.5626 17.0235C21.5626 19.6461 19.4366 21.7721 16.8141 21.7721C14.1915 21.7721 12.0656 19.6461 12.0656 17.0235Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.6307 14.9959C16.9414 14.9959 17.1932 15.2478 17.1932 15.5584V17.2959L17.9186 17.6404C18.1992 17.7737 18.3186 18.1093 18.1853 18.3899C18.0521 18.6705 17.7165 18.7899 17.4359 18.6566L16.3894 18.1595C16.1932 18.0664 16.0682 17.8686 16.0682 17.6514V15.5584C16.0682 15.2478 16.3201 14.9959 16.6307 14.9959Z" fill="white"/></svg>`,
  file: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 3.5625C5.20027 3.5625 5.15258 3.58225 5.11742 3.61742C5.08225 3.65258 5.0625 3.70027 5.0625 3.75V20.25C5.0625 20.2997 5.08225 20.3474 5.11742 20.3826C5.15258 20.4177 5.20027 20.4375 5.25 20.4375H18.75C18.7997 20.4375 18.8474 20.4177 18.8826 20.3826C18.9177 20.3474 18.9375 20.2997 18.9375 20.25V8.483L14.017 3.5625H5.25ZM4.32192 2.82192C4.56806 2.57578 4.9019 2.4375 5.25 2.4375H14.25C14.3992 2.4375 14.5423 2.49676 14.6477 2.60225L19.8977 7.85225C20.0032 7.95774 20.0625 8.10082 20.0625 8.25V20.25C20.0625 20.5981 19.9242 20.9319 19.6781 21.1781C19.4319 21.4242 19.0981 21.5625 18.75 21.5625H5.25C4.9019 21.5625 4.56806 21.4242 4.32192 21.1781C4.07578 20.9319 3.9375 20.5981 3.9375 20.25V3.75C3.9375 3.4019 4.07578 3.06806 4.32192 2.82192Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.25 2.4375C14.5607 2.4375 14.8125 2.68934 14.8125 3V7.6875H19.5C19.8107 7.6875 20.0625 7.93934 20.0625 8.25C20.0625 8.56066 19.8107 8.8125 19.5 8.8125H14.25C13.9393 8.8125 13.6875 8.56066 13.6875 8.25V3C13.6875 2.68934 13.9393 2.4375 14.25 2.4375Z" fill="white"/></svg>`,
  link: url,
  url,
  reference: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 3.9375C4.81066 3.9375 5.0625 4.18934 5.0625 4.5V18.9375H19.5C19.8107 18.9375 20.0625 19.1893 20.0625 19.5C20.0625 19.8107 19.8107 20.0625 19.5 20.0625H4.5C4.18934 20.0625 3.9375 19.8107 3.9375 19.5V4.5C3.9375 4.18934 4.18934 3.9375 4.5 3.9375Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.3756 7.08021C15.6074 6.87343 15.963 6.89375 16.1698 7.12559L18.4198 9.64832C18.6151 9.86727 18.6093 10.1995 18.4065 10.4115L16.1565 12.7638C15.9417 12.9883 15.5857 12.9962 15.3612 12.7815C15.1367 12.5668 15.1288 12.2107 15.3435 11.9862L16.6836 10.5852H11.3182C9.52012 10.5852 8.0625 12.0428 8.0625 13.8409V15.75C8.0625 16.0607 7.81066 16.3125 7.5 16.3125C7.18934 16.3125 6.9375 16.0607 6.9375 15.75V13.8409C6.9375 11.4215 8.8988 9.46023 11.3182 9.46023H16.7446L15.3302 7.87441C15.1234 7.64256 15.1437 7.28699 15.3756 7.08021Z" fill="white"/></svg>`,
  group: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.8125 3.75C2.8125 3.23223 3.23223 2.8125 3.75 2.8125C4.26777 2.8125 4.6875 3.23223 4.6875 3.75C4.6875 4.26777 4.26777 4.6875 3.75 4.6875C3.23223 4.6875 2.8125 4.26777 2.8125 3.75ZM3.75 1.6875C4.69408 1.6875 5.49001 2.32181 5.73486 3.1875H18.2651C18.51 2.32181 19.3059 1.6875 20.25 1.6875C21.3891 1.6875 22.3125 2.61091 22.3125 3.75C22.3125 4.69408 21.6782 5.49002 20.8125 5.73486V18.2651C21.6782 18.51 22.3125 19.3059 22.3125 20.25C22.3125 21.3891 21.3891 22.3125 20.25 22.3125C19.3059 22.3125 18.51 21.6782 18.2651 20.8125H5.73486C5.49001 21.6782 4.69408 22.3125 3.75 22.3125C2.61091 22.3125 1.6875 21.3891 1.6875 20.25C1.6875 19.3059 2.32181 18.51 3.1875 18.2651V5.73486C2.32181 5.49001 1.6875 4.69408 1.6875 3.75C1.6875 2.61091 2.61091 1.6875 3.75 1.6875ZM20.25 4.6875C20.7678 4.6875 21.1875 4.26777 21.1875 3.75C21.1875 3.23223 20.7678 2.8125 20.25 2.8125C19.7322 2.8125 19.3125 3.23223 19.3125 3.75C19.3125 4.26777 19.7322 4.6875 20.25 4.6875ZM18.2651 4.3125C18.4594 4.99938 19.0006 5.54059 19.6875 5.73486V18.2651C19.0006 18.4594 18.4594 19.0006 18.2651 19.6875H5.73486C5.54059 19.0006 4.99938 18.4594 4.3125 18.2651V5.73486C4.99938 5.54059 5.54059 4.99938 5.73486 4.3125H18.2651ZM19.3125 20.25C19.3125 19.7322 19.7322 19.3125 20.25 19.3125C20.7678 19.3125 21.1875 19.7322 21.1875 20.25C21.1875 20.7678 20.7678 21.1875 20.25 21.1875C19.7322 21.1875 19.3125 20.7678 19.3125 20.25ZM4.6875 20.25C4.6875 19.7322 4.26777 19.3125 3.75 19.3125C3.23223 19.3125 2.8125 19.7322 2.8125 20.25C2.8125 20.7678 3.23223 21.1875 3.75 21.1875C4.26777 21.1875 4.6875 20.7678 4.6875 20.25ZM9.75 7.6875C9.75 6.96263 10.3376 6.375 11.0625 6.375H15.5625C16.2874 6.375 16.875 6.96263 16.875 7.6875V13.6875C16.875 14.4124 16.2874 15 15.5625 15H14.625V15.9375C14.625 16.6624 14.0374 17.25 13.3125 17.25H8.8125C8.08763 17.25 7.5 16.6624 7.5 15.9375V9.1875C7.5 8.46263 8.08763 7.875 8.8125 7.875H9.75V7.6875ZM9.75 9H8.8125C8.70895 9 8.625 9.08395 8.625 9.1875V15.9375C8.625 16.0411 8.70895 16.125 8.8125 16.125H13.3125C13.4161 16.125 13.5 16.0411 13.5 15.9375V15H11.0625C10.3376 15 9.75 14.4124 9.75 13.6875V9ZM11.0625 7.5C10.9589 7.5 10.875 7.58395 10.875 7.6875V13.6875C10.875 13.7911 10.9589 13.875 11.0625 13.875H15.5625C15.6661 13.875 15.75 13.7911 15.75 13.6875V7.6875C15.75 7.58395 15.6661 7.5 15.5625 7.5H11.0625Z" fill="white"/></svg>`,
  global_field: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.375 3C17.3456 3 21.375 7.02944 21.375 12C21.375 16.9706 17.3456 21 12.375 21C7.40444 21 3.375 16.9706 3.375 12C3.375 7.02944 7.40444 3 12.375 3ZM12.375 19.875C12.5009 19.875 12.7226 19.8185 13.0332 19.5032C13.3478 19.184 13.6828 18.6642 13.9882 17.9313C14.1866 17.455 14.3632 16.9113 14.5111 16.3125H10.2389C10.3868 16.9113 10.5634 17.455 10.7618 17.9313C11.0672 18.6642 11.4022 19.184 11.7168 19.5032C12.0274 19.8185 12.2491 19.875 12.375 19.875ZM10.0068 15.1875C9.84289 14.2154 9.75 13.1397 9.75 12C9.75 10.8603 9.84289 9.78464 10.0068 8.8125H14.7432C14.9071 9.78464 15 10.8603 15 12C15 13.1397 14.9071 14.2154 14.7432 15.1875H10.0068ZM15.6673 16.3125C15.3597 17.6622 14.9122 18.8021 14.3716 19.6197C16.2825 19.1203 17.9105 17.9212 18.9653 16.3125H15.6673ZM19.5782 15.1875H15.883C16.0394 14.1967 16.125 13.1223 16.125 12C16.125 10.8777 16.0394 9.80332 15.883 8.8125H19.5782C20.0101 9.78699 20.25 10.8655 20.25 12C20.25 13.1345 20.0101 14.213 19.5782 15.1875ZM8.86698 15.1875H5.17177C4.73991 14.213 4.5 13.1345 4.5 12C4.5 10.8655 4.73991 9.78699 5.17177 8.8125H8.86698C8.7106 9.80332 8.625 10.8777 8.625 12C8.625 13.1223 8.7106 14.1967 8.86698 15.1875ZM5.7847 16.3125H9.08273C9.39032 17.6622 9.83781 18.8021 10.3784 19.6197C8.46751 19.1203 6.83953 17.9212 5.7847 16.3125ZM10.2389 7.6875H14.5111C14.3632 7.08867 14.1866 6.54495 13.9882 6.06873C13.6828 5.33576 13.3478 4.81605 13.0332 4.49677C12.7226 4.18146 12.5009 4.125 12.375 4.125C12.2491 4.125 12.0274 4.18146 11.7168 4.49677C11.4022 4.81605 11.0672 5.33576 10.7618 6.06873C10.5634 6.54495 10.3868 7.08867 10.2389 7.6875ZM15.6673 7.6875H18.9653C17.9105 6.07879 16.2825 4.87965 14.3716 4.38032C14.9122 5.19795 15.3597 6.33778 15.6673 7.6875ZM10.3784 4.38032C9.83781 5.19795 9.39032 6.33778 9.08273 7.6875H5.7847C6.83953 6.07879 8.46751 4.87965 10.3784 4.38032Z" fill="white"/></svg>`,
  custom_field: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 3.9375H9.05319C9.16513 3.35112 9.45051 2.80685 9.87868 2.37868C10.4413 1.81607 11.2044 1.5 12 1.5C12.7956 1.5 13.5587 1.81607 14.1213 2.37868C14.5495 2.80685 14.8349 3.35112 14.9468 3.9375H18.75C19.4749 3.9375 20.0625 4.52513 20.0625 5.25V9.05319C20.6489 9.16513 21.1931 9.45051 21.6213 9.87868C22.1839 10.4413 22.5 11.2044 22.5 12C22.5 12.7956 22.1839 13.5587 21.6213 14.1213C21.1931 14.5495 20.6489 14.8349 20.0625 14.9468V18.75C20.0625 19.4749 19.4749 20.0625 18.75 20.0625H14.7137C14.4215 20.0625 14.1613 19.8779 14.0648 19.6021C13.3812 17.6489 10.6188 17.6489 9.93522 19.6021C9.83871 19.8779 9.57846 20.0625 9.28631 20.0625H5.25C4.52513 20.0625 3.9375 19.4749 3.9375 18.75V14.7343C3.9375 14.4269 4.13421 14.154 4.42585 14.0568C6.40245 13.3979 6.40245 10.6021 4.42585 9.94321C4.13421 9.846 3.9375 9.57307 3.9375 9.26566V5.25C3.9375 4.52513 4.52513 3.9375 5.25 3.9375ZM5.25 5.0625C5.14645 5.0625 5.0625 5.14645 5.0625 5.25V8.98259C7.69023 10.1082 7.69023 13.8918 5.0625 15.0174V18.75C5.0625 18.8536 5.14645 18.9375 5.25 18.9375H8.99033C10.1484 16.3704 13.8516 16.3704 15.0097 18.9375H18.75C18.8536 18.9375 18.9375 18.8536 18.9375 18.75V5.25C18.9375 5.14645 18.8536 5.0625 18.75 5.0625H5.25Z" fill="white"/></svg>`,
  experience_container: "",
  empty: "",
  loading: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="${(0, import_classnames4.default)(
    "visual-builder__cursor-icon--loader",
    visualBuilderStyles()["visual-builder__cursor-icon--loader"]
  )}"><path d="M15.5023 18.3501C13.5466 19.6388 11.2007 20.2002 8.87354 19.9364C6.54637 19.6725 4.38563 18.6002 2.76808 16.9065C1.15053 15.2127 0.178807 13.0049 0.0223406 10.6681C-0.134126 8.33122 0.534595 6.0136 1.9119 4.1193C3.2892 2.22501 5.2877 0.874235 7.55893 0.302518C9.83015 -0.2692 12.23 -0.0255895 14.34 0.990871C16.45 2.00733 18.1363 3.73215 19.1048 5.86457C20.0734 7.997 20.2627 10.4017 19.6399 12.6595L17.7119 12.1276C18.2102 10.3214 18.0587 8.3976 17.2839 6.69166C16.509 4.98572 15.16 3.60586 13.472 2.7927C11.784 1.97953 9.86412 1.78464 8.04714 2.24201C6.23016 2.69939 4.63136 3.78001 3.52952 5.29544C2.42768 6.81088 1.8927 8.66498 2.01787 10.5345C2.14305 12.4039 2.92043 14.1702 4.21446 15.5252C5.5085 16.8802 7.23709 17.738 9.09883 17.9491C10.9606 18.1601 12.8373 17.711 14.4018 16.6801L15.5023 18.3501Z" fill="white"/></svg>`,
  taxonomy: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.52727C0 0.683783 0.683783 0 1.52727 0H22.4727C23.3162 0 24 0.683783 24 1.52727V5.01818C24 5.86167 23.3162 6.54545 22.4727 6.54545H4.8V11.3455H8.72727V10.2545C8.72727 9.41106 9.41106 8.72727 10.2545 8.72727H17.2364C18.0799 8.72727 18.7636 9.41106 18.7636 10.2545V13.7455C18.7636 14.5889 18.0799 15.2727 17.2364 15.2727H10.2545C9.41106 15.2727 8.72727 14.5889 8.72727 13.7455V12.6545H4.8V20.0727H8.72727V18.9818C8.72727 18.1383 9.41106 17.4545 10.2545 17.4545H17.2364C18.0799 17.4545 18.7636 18.1383 18.7636 18.9818V22.4727C18.7636 23.3162 18.0799 24 17.2364 24H10.2545C9.41106 24 8.72727 23.3162 8.72727 22.4727V21.3818H4.14545C3.78396 21.3818 3.49091 21.0888 3.49091 20.7273V6.54545H1.52727C0.683785 6.54545 0 5.86167 0 5.01818V1.52727ZM10.0364 22.4727C10.0364 22.5932 10.134 22.6909 10.2545 22.6909H17.2364C17.3569 22.6909 17.4545 22.5932 17.4545 22.4727V18.9818C17.4545 18.8613 17.3569 18.7636 17.2364 18.7636H10.2545C10.134 18.7636 10.0364 18.8613 10.0364 18.9818V22.4727ZM10.0364 13.7455V10.2545C10.0364 10.134 10.134 10.0364 10.2545 10.0364H17.2364C17.3569 10.0364 17.4545 10.134 17.4545 10.2545V13.7455C17.4545 13.866 17.3569 13.9636 17.2364 13.9636H10.2545C10.134 13.9636 10.0364 13.866 10.0364 13.7455ZM22.4727 5.23636H1.52727C1.40677 5.23636 1.30909 5.13868 1.30909 5.01818V1.52727C1.30909 1.40677 1.40677 1.30909 1.52727 1.30909H22.4727C22.5932 1.30909 22.6909 1.40677 22.6909 1.52727V5.01818C22.6909 5.13868 22.5932 5.23636 22.4727 5.23636Z" fill="white"/></svg>`,
  discussion: `<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.15007 0.985773C1.1065 0.985773 1.06471 1.00308 1.03389 1.03389C1.00308 1.06471 0.985773 1.1065 0.985773 1.15007V14.1925C0.986259 14.2231 0.995289 14.253 1.01186 14.2788C1.02866 14.3049 1.05253 14.3258 1.08069 14.3389C1.10886 14.352 1.14017 14.3568 1.17098 14.3529C1.20142 14.349 1.23014 14.3366 1.25391 14.3172L1.25479 14.3165L3.95491 12.0514C4.00036 12.0132 4.05232 11.9836 4.1083 11.9639L4.41225 11.8571C4.46474 11.8387 4.51999 11.8293 4.57563 11.8293H15.6081C15.6517 11.8293 15.6934 11.812 15.7243 11.7812C15.7551 11.7503 15.7724 11.7086 15.7724 11.665V1.15007C15.7724 1.10649 15.7551 1.06471 15.7243 1.03389C15.6934 1.00308 15.6517 0.985773 15.6081 0.985773H1.15007ZM0.336848 0.336848C0.552527 0.121168 0.845051 0 1.15007 0H15.6081C15.9131 0 16.2056 0.121168 16.4213 0.336848C16.637 0.552528 16.7581 0.845053 16.7581 1.15007V11.665C16.7581 11.97 16.637 12.2625 16.4213 12.4782C16.2056 12.6939 15.9131 12.8151 15.6081 12.8151H4.6597L4.51972 12.8642L1.88326 15.076C1.71571 15.2146 1.51228 15.3029 1.29657 15.3306C1.08086 15.3583 0.861722 15.3243 0.664572 15.2325C0.467421 15.1407 0.300341 14.9949 0.182714 14.812C0.0650888 14.629 0.00173885 14.4165 1.54726e-05 14.199L0 14.1951V1.15007C0 0.845051 0.121168 0.552527 0.336848 0.336848Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.25746 5.09316C5.25746 4.82095 5.47813 4.60028 5.75034 4.60028H11.0078C11.28 4.60028 11.5007 4.82095 11.5007 5.09316C11.5007 5.36538 11.28 5.58605 11.0078 5.58605H5.75034C5.47813 5.58605 5.25746 5.36538 5.25746 5.09316Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.25746 7.72189C5.25746 7.44968 5.47813 7.229 5.75034 7.229H11.0078C11.28 7.229 11.5007 7.44968 11.5007 7.72189C11.5007 7.99411 11.28 8.21478 11.0078 8.21478H5.75034C5.47813 8.21478 5.25746 7.99411 5.25746 7.72189Z" fill="white"/></svg>`
};
var cursor = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M0.0167948 0.602214C-0.0784404 0.246792 0.246794 -0.0784402 0.602216 0.0167948L15.6457 4.04767C16.0914 4.1671 16.1259 4.78625 15.6962 4.95447L8.17161 7.90048C8.04753 7.94906 7.94936 8.04723 7.90078 8.17131L4.95449 15.6962C4.78627 16.1259 4.16712 16.0914 4.04769 15.6457L0.0167948 0.602214Z" fill="#5D50BE"/></svg>`;
function generateCustomCursor({
  fieldType,
  customCursor,
  fieldDisabled = false
}) {
  const icon = fieldType ? FieldTypeIconsMap[fieldType] : "";
  const prevDataIcon = customCursor.getAttribute("data-icon");
  if (prevDataIcon === fieldType) {
    return;
  }
  customCursor.innerHTML = `<div class="${(0, import_classnames4.default)(
    "visual-builder__cursor-wrapper",
    {
      "visual-builder__cursor-disabled": fieldDisabled,
      [visualBuilderStyles()["visual-builder__cursor-disabled"]]: fieldDisabled
    }
  )}"><div class="${(0, import_classnames4.default)(
    "visual-builder__cursor-pointer",
    visualBuilderStyles()["visual-builder__cursor-pointer"]
  )}">${cursor}</div><div class="${(0, import_classnames4.default)(
    "visual-builder__cursor-icon",
    visualBuilderStyles()["visual-builder__cursor-icon"]
  )}">${icon}</div>`;
  customCursor.setAttribute("data-icon", fieldType);
}
function getFieldIcon(fieldSchema) {
  const fieldType = getFieldType(fieldSchema);
  return FieldTypeIconsMap[fieldType];
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/generators/generateHoverOutline.js
function addHoverOutline(targetElement, disabled, isVariant) {
  const targetElementDimension = targetElement.getBoundingClientRect();
  const hoverOutline = document.querySelector(
    ".visual-builder__hover-outline"
  );
  if (hoverOutline) {
    hoverOutline.classList.remove(
      visualBuilderStyles()["visual-builder__hover-outline--hidden"]
    );
    if (disabled) {
      hoverOutline.classList.add(
        visualBuilderStyles()["visual-builder__hover-outline--disabled"]
      );
    } else {
      hoverOutline.classList.remove(
        visualBuilderStyles()["visual-builder__hover-outline--disabled"]
      );
      if (isVariant) {
        hoverOutline.classList.add(
          visualBuilderStyles()["visual-builder__hover-outline--variant"]
        );
      } else {
        hoverOutline.classList.remove(
          visualBuilderStyles()["visual-builder__hover-outline--variant"]
        );
      }
    }
    hoverOutline.style.top = `${targetElementDimension.top + window.scrollY}px`;
    hoverOutline.style.left = `${targetElementDimension.left}px`;
    hoverOutline.style.width = `${targetElementDimension.width}px`;
    hoverOutline.style.height = `${targetElementDimension.height}px`;
  }
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/collab.style.js
var skeletonTileProgressSlide = h5`
    0%, 100% {
        fill: #edf1f7;
    }
    60% {
        opacity: 0.4;
    }
`;
var dotKeyframes = h5`
  0% {
    opacity: 0.2;
    transform: scale(0.8, 0.8);
  }

  50% {
    opacity: 1;
    transform: scale(1.2, 1.2);
  }

  100% {
    opacity: 0;
    transform: scale(1, 1);
  }
`;
function collabStyles() {
  return {
    "collab-indicator": u5`
            width: 2.25rem;
            height: 2.25rem;
            background-color: gray;
            border-radius: 50% 50% 50% 0%;
            border: 2px solid white;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        `,
    "collab-popup": u5`
            position: fixed;
            z-index: 1000;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            border: 1px solid #e5e7eb;
            overflow: auto;
        `,
    "collab-avatar": u5`
            background-color: #edf1f7;
            border: 1.5px solid #ffffff;
            border-radius: 50%;
            font-family: Inter;
            font-weight: 600;
            justify-content: center;
            position: relative;
        `,
    "collab-avatar--single": u5`
            border: none;
            font-size: 0.6875rem;
            height: 2rem;
            width: 2rem;
            border-radius: 22.5rem;
            border: 0.125rem solid #dde3ee;
            background: #ffffff;
            position: relative;
            overflow: hidden;

            &:hover .collab-avatar__image {
                filter: grayscale(0);
            }
        `,
    "collab-avatar__image": u5`
            filter: grayscale(1);
            transition: filter 300ms ease;
            border-radius: 50%;
            height: 0;
            left: 50%;
            min-width: 100%;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 0;
        `,
    "collab-avatar__link": u5`
            color: #475161;
            cursor: pointer;
            height: 100%;
            justify-content: center;
            overflow: hidden;
            text-decoration: none;
            text-transform: uppercase;
            transition:
                background-color 300ms ease,
                color 300ms ease;
            width: 100%;
            font-weight: 600;
            font-size: 0.75rem;
        `,
    "collab-tooltip--wrapper": u5`
            position: relative;
            display: inline-block;
        `,
    "collab-tooltip": u5`
            position: fixed;
            z-index: 2147483647 !important;
            padding: 8px 12px;
            font-size: 14px;
            color: #f7f9fc;
            background-color: #767676;
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

            opacity: 0;
            animation: simpleFade 0.15s ease-in forwards;

            @keyframes simpleFade {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
        `,
    "collab-tooltip--top": u5`
            &::before {
                content: "";
                position: absolute;
                bottom: -5px;
                left: 50%;
                transform: translateX(-50%);
                border-width: 5px 5px 0;
                border-style: solid;
                border-color: #767676 transparent transparent;
            }
        `,
    "collab-tooltip--bottom": u5`
            &::before {
                content: "";
                position: absolute;
                top: -5px;
                left: 50%;
                transform: translateX(-50%);
                border-width: 0 5px 5px;
                border-style: solid;
                border-color: transparent transparent #767676;
            }
        `,
    "collab-tooltip--left": u5`
            &::before {
                content: "";
                position: absolute;
                right: -5px;
                top: 50%;
                transform: translateY(-50%);
                border-width: 5px 0 5px 5px;
                border-style: solid;
                border-color: transparent transparent transparent #767676;
            }
        `,
    "collab-tooltip--right": u5`
            &::before {
                content: "";
                position: absolute;
                left: -5px;
                top: 50%;
                transform: translateY(-50%);
                border-width: 5px 5px 5px 0;
                border-style: solid;
                border-color: transparent #767676 transparent transparent;
            }
        `,
    "collab-icon": u5`
            height: 1.25rem;
            width: 1.25rem;
            cursor: pointer;
        `,
    "collab-icon-wrapper": u5`
            padding: 0 0.5rem;
        `,
    "collab-button--basestyle": u5`
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            background-color: transparent;
            border: 1px solid transparent;
            border-radius: 4px;
            cursor: pointer;
            font-family: Inter, sans-serif;
            font-size: 1rem;
            font-weight: 600;
            line-height: 1;
            min-height: 2rem;
            min-width: 2rem;
            padding: 0.5rem 1rem;
            position: relative;
            text-align: center;
            transition:
                color 0.15s ease-in-out,
                background-color 0.15s ease-in-out,
                border-color 0.15s ease-in-out,
                box-shadow 0.15s ease-in-out;
            vertical-align: middle;
            cursor: pointer;
            opacity: 1;
            pointer-events: auto;
        `,
    "collab-button--disabled": u5`
            cursor: not-allowed;
            opacity: 0.4;
            pointer-events: auto;
        `,
    "collab-button--loading": u5`
            cursor: default;
            pointer-events: none;
        `,
    "collab-button--loader": u5`
            display: flex;
            justify-content: center;
            text-align: center;
        `,
    "collab-button--loader--wrapper": u5`
            left: 50%;
            position: absolute;
            top: 50%;
            -webkit-transform: translateX(-50%) translateY(-50%);
            -moz-transform: translateX(-50%) translateY(-50%);
        `,
    "collab-button--loader--animation": u5`
            animation: ${dotKeyframes} 1.5s infinite ease-in-out;

            border-radius: 0.625rem;
            display: inline-block;
            height: 0.3125rem;
            margin-right: 0.25rem;
            width: 0.3125rem;

            &:nth-child(2) {
                animation-delay: 0.5s;
            }

            &:nth-child(3) {
                animation-delay: 1s;
                margin-right: 0;
            }
        `,
    "collab-button--visible": u5`
            visibility: visible;
        `,
    "collab-button--hidden": u5`
            visibility: hidden;
        `,
    "collab-button--loading--color": {
      primary: u5`
                background-color: #f9f8ff !important;
            `,
      secondary: u5`
                background-color: #6c5ce7 !important;
            `,
      tertiary: u5`
                background-color: #6c5ce7 !important;
            `,
      destructive: u5`
                background-color: #f9f8ff !important;
            `
    },
    "collab-button--type": {
      primary: u5`
                background-color: #6c5ce7 !important;
                color: #ffffff;
                &:hover {
                    background-color: #5d50be !important;
                }
                &:focus {
                    box-shadow: 0px 0px 0px 2px #ada4f4 !important;
                }
                &:active {
                    background-color: #3e3871 !important;
                }
            `,
      secondary: u5`
                background-color: #f9f8ff !important;
                border: 1px solid #6c5ce7 !important;
                color: #6c5ce7 !important;
                &:hover {
                    border-color: #5d50be !important;
                    color: #5d50be !important;
                }
                &:focus {
                    box-shadow: 0px 0px 0px 2px #ada4f4 !important;
                }
                &:active {
                    border-color: #3e3871 !important;
                    color: #3e3871 !important;
                }
            `,
      tertiary: u5`
                color: #6c5ce7 !important;
                &:hover {
                    color: #5d50be !important;
                }
                &:focus {
                    box-shadow: 0px 0px 0px 2px #ada4f4 !important;
                }
            `,
      destructive: u5`
                background-color: #a31b00 !important;
                color: #ffffff !important;
                &:hover {
                    background-color: #701300 !important;
                }
                &:focus {
                    box-shadow: 0px 0px 0px 2px #ada4f4 !important;
                }
            `
    },
    "collab-button--size": {
      large: u5`
                font-size: 1rem;
                min-height: 2.5rem;
                max-height: 2.5rem;
            `,
      regular: u5`
                margin-top: -1px;
            `,
      small: u5`
                font-size: 0.875rem;
                min-height: 2rem;
                max-height: 2rem;
                padding: 0.3125rem 1rem;
            `
    },
    "collab-button--icon-allignment": {
      left: u5`
                svg:first-child {
                    float: left;
                    margin-left: 0;
                    margin-right: 0.5rem;
                }
            `,
      right: u5`
                svg:first-child {
                    float: right;
                    margin-left: 0.5rem;
                    margin-right: 0;
                }
            `,
      both: u5`
                svg:first-child {
                    float: left;
                    margin-right: 0.5rem;
                    margin-left: 0;
                }
                svg:last-child {
                    float: right;
                    margin-left: 0.5rem;
                    margin-right: 0;
                }
            `
    },
    "collab-button-group": u5`
            display: flex;
            & > button {
                margin-right: 1rem;
                &:last-child {
                    margin-right: 0;
                }
            }
        `,
    "collab-skeletonTileSvgClass": u5`
            & > g rect {
                animation: ${skeletonTileProgressSlide} 1.8s infinite;
            }
        `,
    "collab-thread-body-comment--loader": u5`
            padding: 0.625rem;
        `,
    "collab-thread--wrapper": u5`
            cursor: default;
            position: relative;
            padding: 0 !important;
            font-family: Inter;
            color: #475161;
            width: 20.75rem;
        `,
    "collab-thread--container": u5`
            max-height: 23.125rem;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        `,
    "collab-thread-header--wrapper": u5`
            height: 2.5rem;
            padding: 0.2rem 0.1rem 0rem 0.625rem;
        `,
    "collab-thread-header--container": u5`
            justify-content: space-between;
            width: 100%;
        `,
    "collab-thread-header--title": u5`
            font-weight: 600;
            font-size: 0.875rem;
        `,
    "collab-thread-header--resolve": u5`
            border-radius: 6px !important;
        `,
    "collab-thread-header--resolve--icon": u5`
            width: 1.25rem;
            height: 1.25rem;
            margin-right: 0.5rem !important;
        `,
    "collab-thread-header--resolve--text": u5`
            font-size: 0.875rem;
        `,
    "collab-thread-footer--wrapper": u5`
            height: 3.5rem;
            width: 100%;
            flex-direction: row-reverse;
            padding: 0 0.9375rem;
            flex-shrink: 0;
        `,
    "collab-thread-body--wrapper": u5`
            border: solid #edf1f7;
            border-width: 0.0625rem 0;
            flex: 1;
            overflow: auto;
            display: flex;
            flex-direction: column;
        `,
    "collab-thread-input-indicator--wrapper": u5`
            padding: 0 0.5rem;
            font-weight: 400;
            font-size: 0.875rem;
            line-height: 150%;
            letter-spacing: 0.01em;
            min-height: 1.3125rem !important;
        `,
    "collab-thread-input-indicator--error": u5`
            width: 100%;
            margin-right: 0.5rem;
            color: #d62400;
        `,
    "collab-thread-input-indicator--count": u5`
            color: #475161;
        `,
    "collab-thread-comment--user-details": u5`
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        `,
    "collab-thread-comment--user-details__text": u5`
            padding-left: 0.625rem;
            flex-grow: 1;
            min-width: 0;
        `,
    "collab-thread-comment--user-name": u5`
            font-style: normal;
            font-weight: 600;
            font-size: 0.75rem;
            line-height: 150%;
            letter-spacing: 0.015rem;
            color: #475161;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        `,
    "collab-thread-comment--list": u5`
            max-height: 10.9rem;
            display: flex;
            overflow: auto;
            flex-flow: column-reverse;
        `,
    "collab-thread-comment-seperator": u5`
            width: 100%;
            height: 1.5rem;
            stroke-width: 0.0625rem;
            stroke: #dde3ee;
        `,
    "collab-thread-comment--time-details": u5`
            font-weight: 400;
            font-size: 0.75rem;
            line-height: 150%;
            font-style: Inter;
            letter-spacing: 0.015rem;
            color: #6e6b86;
        `,
    "collab-thread-comment--message": u5`
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.5rem;
            color: #475161;
            word-break: break-all;
            width: calc(100% - 10px);
            min-height: 2.25rem;
            white-space: pre-wrap;

            b {
                color: #6c5ce7;
                font-weight: 400;
            }
        `,
    "collab-thread-comment--wrapper": u5`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.625rem;
            padding: 0.625rem;
        `,
    "collab-thread-comment-action--wrapper": u5`
            margin-left: auto;
            display: flex;
        `,
    "collab-thread-body--input--wrapper": u5`
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
            grid-gap: 0.25rem;
        `,
    "collab-thread-body--input": u5`
            position: relative;
            overflow-y: visible;
        `,
    "collab-thread-body--input--textarea--wrapper": u5`
            width: 100%;
            transition: height 0.2s ease-in 0s;
        `,
    "collab-thread-body--input--textarea": u5`
            display: block;
            width: 100%;
            position: relative;
            top: 0;
            left: 0;
            box-sizing: border-box;
            background-color: #ffffff;
            font-family: inherit;
            font-size: 1rem;
            letter-spacing: inherit;
            height: 100%;
            bottom: 0;
            overflow: auto;
            resize: vertical;
            border-radius: 4px;
            border: 0.0625rem solid #dde3ee;
            line-height: 1.375rem;
            color: #222222;
            padding: 0.5rem 1rem;
            max-height: 6.25rem;
            min-height: 4.125rem;
            transition:
                border 0.2s ease,
                box-shadow 0.2s ease,
                background-color 0.2s ease;
        `,
    "collab-thread-body--input--textarea--focus": u5`
            background-color: #ffffff !important;
            border: 0.0625rem solid #5d50be !important;
            box-shadow: 0 0 0 0.0625rem #5d50be !important;
            border-radius: 4px !important;
            outline: none;
        `,
    "collab-thread-body--input--textarea--hover": u5`
            background-color: #edf1f7;
            border: 0.0625rem solid #5d50be !important;
            box-shadow: 0 0 0 0.0625rem #5d50be !important;
        `,
    "collab-thread-body--input--textarea--suggestionsList": u5`
            list-style: none;
            padding-inline: unset;
            position: fixed;
            background-color: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            box-shadow:
                0 4px 6px -1px rgba(0, 0, 0, 0.1),
                0 2px 4px -1px rgba(0, 0, 0, 0.06);
            max-height: 192px;
            overflow-y: auto;
            width: 256px;
            max-height: 160px;
            z-index: 50;
            animation: fadeIn 0.2s ease-in-out;

            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(-4px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `,
    "collab-thread-body--input--textarea--suggestionsList--item": u5`
            width: 100%;
            padding: 8px 16px;
            text-align: left;
            border: none;
            background: none;
            cursor: pointer;
            font-size: 14px;
            transition: background-color 0.2s;

            &:hover {
                background-color: #f3f4f6;
                color: #5d50be;
            }
        `,
    "collab-thread-body--input--textarea--suggestionsList--item-selected": u5`
            background-color: #f3f4f6;
            color: #5d50be;
        `
  };
}
var flexCentered = u5`
    display: flex;
    align-items: center;
    justify-content: center;
`;
var flexAlignCenter = u5`
    display: flex;
    align-items: center;
`;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/Collab/CollabIndicator.js
var import_classnames22 = __toESM(require_classnames(), 1);

// node_modules/preact/compat/dist/compat.module.js
function g6(n5, t5) {
  for (var e6 in t5) n5[e6] = t5[e6];
  return n5;
}
function C3(n5, t5) {
  for (var e6 in n5) if ("__source" !== e6 && !(e6 in t5)) return true;
  for (var r5 in t5) if ("__source" !== r5 && n5[r5] !== t5[r5]) return true;
  return false;
}
function E3(n5, t5) {
  this.props = n5, this.context = t5;
}
function w5(n5, e6) {
  function r5(n6) {
    var t5 = this.props.ref, r6 = t5 == n6.ref;
    return !r6 && t5 && (t5.call ? t5(null) : t5.current = null), e6 ? !e6(this.props, n6) || !r6 : C3(this.props, n6);
  }
  function u7(e7) {
    return this.shouldComponentUpdate = r5, y(n5, e7);
  }
  return u7.displayName = "Memo(" + (n5.displayName || n5.name) + ")", u7.prototype.isReactComponent = true, u7.__f = true, u7;
}
(E3.prototype = new b()).isPureReactComponent = true, E3.prototype.shouldComponentUpdate = function(n5, t5) {
  return C3(this.props, n5) || C3(this.state, t5);
};
var x3 = l.__b;
l.__b = function(n5) {
  n5.type && n5.type.__f && n5.ref && (n5.props.ref = n5.ref, n5.ref = null), x3 && x3(n5);
};
var R2 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function N2(n5) {
  function t5(t6) {
    var e6 = g6({}, t6);
    return delete e6.ref, n5(e6, t6.ref || null);
  }
  return t5.$$typeof = R2, t5.render = t5, t5.prototype.isReactComponent = t5.__f = true, t5.displayName = "ForwardRef(" + (n5.displayName || n5.name) + ")", t5;
}
var k4 = function(n5, t5) {
  return null == n5 ? null : H(H(n5).map(t5));
};
var A3 = { map: k4, forEach: k4, count: function(n5) {
  return n5 ? H(n5).length : 0;
}, only: function(n5) {
  var t5 = H(n5);
  if (1 !== t5.length) throw "Children.only";
  return t5[0];
}, toArray: H };
var O2 = l.__e;
l.__e = function(n5, t5, e6, r5) {
  if (n5.then) {
    for (var u7, o7 = t5; o7 = o7.__; ) if ((u7 = o7.__c) && u7.__c) return null == t5.__e && (t5.__e = e6.__e, t5.__k = e6.__k), u7.__c(n5, t5);
  }
  O2(n5, t5, e6, r5);
};
var T3 = l.unmount;
function F3(n5, t5, e6) {
  return n5 && (n5.__c && n5.__c.__H && (n5.__c.__H.__.forEach(function(n6) {
    "function" == typeof n6.__c && n6.__c();
  }), n5.__c.__H = null), null != (n5 = g6({}, n5)).__c && (n5.__c.__P === e6 && (n5.__c.__P = t5), n5.__c = null), n5.__k = n5.__k && n5.__k.map(function(n6) {
    return F3(n6, t5, e6);
  })), n5;
}
function I2(n5, t5, e6) {
  return n5 && e6 && (n5.__v = null, n5.__k = n5.__k && n5.__k.map(function(n6) {
    return I2(n6, t5, e6);
  }), n5.__c && n5.__c.__P === t5 && (n5.__e && e6.appendChild(n5.__e), n5.__c.__e = true, n5.__c.__P = e6)), n5;
}
function L2() {
  this.__u = 0, this.t = null, this.__b = null;
}
function U(n5) {
  var t5 = n5.__.__c;
  return t5 && t5.__a && t5.__a(n5);
}
function D3(n5) {
  var e6, r5, u7;
  function o7(o8) {
    if (e6 || (e6 = n5()).then(function(n6) {
      r5 = n6.default || n6;
    }, function(n6) {
      u7 = n6;
    }), u7) throw u7;
    if (!r5) throw e6;
    return y(r5, o8);
  }
  return o7.displayName = "Lazy", o7.__f = true, o7;
}
function M2() {
  this.u = null, this.o = null;
}
l.unmount = function(n5) {
  var t5 = n5.__c;
  t5 && t5.__R && t5.__R(), t5 && 32 & n5.__u && (n5.type = null), T3 && T3(n5);
}, (L2.prototype = new b()).__c = function(n5, t5) {
  var e6 = t5.__c, r5 = this;
  null == r5.t && (r5.t = []), r5.t.push(e6);
  var u7 = U(r5.__v), o7 = false, i8 = function() {
    o7 || (o7 = true, e6.__R = null, u7 ? u7(l7) : l7());
  };
  e6.__R = i8;
  var l7 = function() {
    if (!--r5.__u) {
      if (r5.state.__a) {
        var n6 = r5.state.__a;
        r5.__v.__k[0] = I2(n6, n6.__c.__P, n6.__c.__O);
      }
      var t6;
      for (r5.setState({ __a: r5.__b = null }); t6 = r5.t.pop(); ) t6.forceUpdate();
    }
  };
  r5.__u++ || 32 & t5.__u || r5.setState({ __a: r5.__b = r5.__v.__k[0] }), n5.then(i8, i8);
}, L2.prototype.componentWillUnmount = function() {
  this.t = [];
}, L2.prototype.render = function(n5, e6) {
  if (this.__b) {
    if (this.__v.__k) {
      var r5 = document.createElement("div"), o7 = this.__v.__k[0].__c;
      this.__v.__k[0] = F3(this.__b, r5, o7.__O = o7.__P);
    }
    this.__b = null;
  }
  var i8 = e6.__a && y(g, null, n5.fallback);
  return i8 && (i8.__u &= -33), [y(g, null, e6.__a ? null : n5.children), i8];
};
var V2 = function(n5, t5, e6) {
  if (++e6[1] === e6[0] && n5.o.delete(t5), n5.props.revealOrder && ("t" !== n5.props.revealOrder[0] || !n5.o.size)) for (e6 = n5.u; e6; ) {
    for (; e6.length > 3; ) e6.pop()();
    if (e6[1] < e6[0]) break;
    n5.u = e6 = e6[2];
  }
};
function W(n5) {
  return this.getChildContext = function() {
    return n5.context;
  }, n5.children;
}
function P3(n5) {
  var e6 = this, r5 = n5.i;
  e6.componentWillUnmount = function() {
    B(null, e6.l), e6.l = null, e6.i = null;
  }, e6.i && e6.i !== r5 && e6.componentWillUnmount(), e6.l || (e6.i = r5, e6.l = { nodeType: 1, parentNode: r5, childNodes: [], appendChild: function(n6) {
    this.childNodes.push(n6), e6.i.appendChild(n6);
  }, insertBefore: function(n6, t5) {
    this.childNodes.push(n6), e6.i.appendChild(n6);
  }, removeChild: function(n6) {
    this.childNodes.splice(this.childNodes.indexOf(n6) >>> 1, 1), e6.i.removeChild(n6);
  } }), B(y(W, { context: e6.context }, n5.__v), e6.l);
}
function j3(n5, e6) {
  var r5 = y(P3, { __v: n5, i: e6 });
  return r5.containerInfo = e6, r5;
}
(M2.prototype = new b()).__a = function(n5) {
  var t5 = this, e6 = U(t5.__v), r5 = t5.o.get(n5);
  return r5[0]++, function(u7) {
    var o7 = function() {
      t5.props.revealOrder ? (r5.push(u7), V2(t5, n5, r5)) : u7();
    };
    e6 ? e6(o7) : o7();
  };
}, M2.prototype.render = function(n5) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t5 = H(n5.children);
  n5.revealOrder && "b" === n5.revealOrder[0] && t5.reverse();
  for (var e6 = t5.length; e6--; ) this.o.set(t5[e6], this.u = [1, 0, this.u]);
  return n5.children;
}, M2.prototype.componentDidUpdate = M2.prototype.componentDidMount = function() {
  var n5 = this;
  this.o.forEach(function(t5, e6) {
    V2(n5, e6, t5);
  });
};
var z3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
var B3 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
var H2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
var Z = /[A-Z0-9]/g;
var Y = "undefined" != typeof document;
var $2 = function(n5) {
  return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n5);
};
function q3(n5, t5, e6) {
  return null == t5.__k && (t5.textContent = ""), B(n5, t5), "function" == typeof e6 && e6(), n5 ? n5.__c : null;
}
function G2(n5, t5, e6) {
  return E(n5, t5), "function" == typeof e6 && e6(), n5 ? n5.__c : null;
}
b.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t5) {
  Object.defineProperty(b.prototype, t5, { configurable: true, get: function() {
    return this["UNSAFE_" + t5];
  }, set: function(n5) {
    Object.defineProperty(this, t5, { configurable: true, writable: true, value: n5 });
  } });
});
var J = l.event;
function K() {
}
function Q() {
  return this.cancelBubble;
}
function X() {
  return this.defaultPrevented;
}
l.event = function(n5) {
  return J && (n5 = J(n5)), n5.persist = K, n5.isPropagationStopped = Q, n5.isDefaultPrevented = X, n5.nativeEvent = n5;
};
var nn;
var tn = { enumerable: false, configurable: true, get: function() {
  return this.class;
} };
var en = l.vnode;
l.vnode = function(n5) {
  "string" == typeof n5.type && function(n6) {
    var t5 = n6.props, e6 = n6.type, u7 = {};
    for (var o7 in t5) {
      var i8 = t5[o7];
      if (!("value" === o7 && "defaultValue" in t5 && null == i8 || Y && "children" === o7 && "noscript" === e6 || "class" === o7 || "className" === o7)) {
        var l7 = o7.toLowerCase();
        "defaultValue" === o7 && "value" in t5 && null == t5.value ? o7 = "value" : "download" === o7 && true === i8 ? i8 = "" : "translate" === l7 && "no" === i8 ? i8 = false : "ondoubleclick" === l7 ? o7 = "ondblclick" : "onchange" !== l7 || "input" !== e6 && "textarea" !== e6 || $2(t5.type) ? "onfocus" === l7 ? o7 = "onfocusin" : "onblur" === l7 ? o7 = "onfocusout" : H2.test(o7) ? o7 = l7 : -1 === e6.indexOf("-") && B3.test(o7) ? o7 = o7.replace(Z, "-$&").toLowerCase() : null === i8 && (i8 = void 0) : l7 = o7 = "oninput", "oninput" === l7 && u7[o7 = l7] && (o7 = "oninputCapture"), u7[o7] = i8;
      }
    }
    "select" == e6 && u7.multiple && Array.isArray(u7.value) && (u7.value = H(t5.children).forEach(function(n7) {
      n7.props.selected = -1 != u7.value.indexOf(n7.props.value);
    })), "select" == e6 && null != u7.defaultValue && (u7.value = H(t5.children).forEach(function(n7) {
      n7.props.selected = u7.multiple ? -1 != u7.defaultValue.indexOf(n7.props.value) : u7.defaultValue == n7.props.value;
    })), t5.class && !t5.className ? (u7.class = t5.class, Object.defineProperty(u7, "className", tn)) : (t5.className && !t5.class || t5.class && t5.className) && (u7.class = u7.className = t5.className), n6.props = u7;
  }(n5), n5.$$typeof = z3, en && en(n5);
};
var rn = l.__r;
l.__r = function(n5) {
  rn && rn(n5), nn = n5.__c;
};
var un = l.diffed;
l.diffed = function(n5) {
  un && un(n5);
  var t5 = n5.props, e6 = n5.__e;
  null != e6 && "textarea" === n5.type && "value" in t5 && t5.value !== e6.value && (e6.value = null == t5.value ? "" : t5.value), nn = null;
};
var on = { ReactCurrentDispatcher: { current: { readContext: function(n5) {
  return nn.__n[n5.__c].props.value;
} } } };
function cn(n5) {
  return y.bind(null, n5);
}
function fn(n5) {
  return !!n5 && n5.$$typeof === z3;
}
function an(n5) {
  return fn(n5) && n5.type === g;
}
function sn(n5) {
  return fn(n5) ? F.apply(null, arguments) : n5;
}
function hn(n5) {
  return !!n5.__k && (B(null, n5), true);
}
function vn(n5) {
  return n5 && (n5.base || 1 === n5.nodeType && n5) || null;
}
var dn = function(n5, t5) {
  return n5(t5);
};
var pn = function(n5, t5) {
  return n5(t5);
};
var mn = g;
function yn(n5) {
  n5();
}
function _n(n5) {
  return n5;
}
function bn() {
  return [false, yn];
}
var Sn = A2;
var gn = fn;
function Cn(n5, t5) {
  var e6 = t5(), r5 = p2({ h: { __: e6, v: t5 } }), u7 = r5[0].h, o7 = r5[1];
  return A2(function() {
    u7.__ = e6, u7.v = t5, En(u7) && o7({ h: u7 });
  }, [n5, e6, t5]), _2(function() {
    return En(u7) && o7({ h: u7 }), n5(function() {
      En(u7) && o7({ h: u7 });
    });
  }, [n5]), e6;
}
function En(n5) {
  var t5, e6, r5 = n5.v, u7 = n5.__;
  try {
    var o7 = r5();
    return !((t5 = u7) === (e6 = o7) && (0 !== t5 || 1 / t5 == 1 / e6) || t5 != t5 && e6 != e6);
  } catch (n6) {
    return true;
  }
}
var wn = { useState: p2, useId: g2, useReducer: y2, useEffect: _2, useLayoutEffect: A2, useInsertionEffect: Sn, useTransition: bn, useDeferredValue: _n, useSyncExternalStore: Cn, startTransition: yn, useRef: F2, useImperativeHandle: T2, useMemo: q2, useCallback: x2, useContext: P2, useDebugValue: V, version: "17.0.2", Children: A3, render: q3, hydrate: G2, unmountComponentAtNode: hn, createPortal: j3, createElement: y, createContext: G, createFactory: cn, cloneElement: sn, createRef: _, Fragment: g, isValidElement: fn, isElement: gn, isFragment: an, findDOMNode: vn, Component: b, PureComponent: E3, memo: w5, forwardRef: N2, flushSync: pn, unstable_batchedUpdates: dn, StrictMode: mn, Suspense: L2, SuspenseList: M2, lazy: D3, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: on };

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/Collab/ThreadPopup/ThreadHeader.js
var import_classnames10 = __toESM(require_classnames(), 1);

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/Collab/ThreadPopup/ThreadActionBar.js
var import_classnames9 = __toESM(require_classnames(), 1);

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/Collab/Button/Button.js
var import_classnames8 = __toESM(require_classnames(), 1);

// node_modules/dompurify/dist/purify.es.mjs
var {
  entries,
  setPrototypeOf,
  isFrozen,
  getPrototypeOf,
  getOwnPropertyDescriptor
} = Object;
var {
  freeze,
  seal,
  create: create2
} = Object;
var {
  apply: apply2,
  construct
} = typeof Reflect !== "undefined" && Reflect;
if (!freeze) {
  freeze = function freeze2(x4) {
    return x4;
  };
}
if (!seal) {
  seal = function seal2(x4) {
    return x4;
  };
}
if (!apply2) {
  apply2 = function apply3(func, thisArg) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    return func.apply(thisArg, args);
  };
}
if (!construct) {
  construct = function construct2(Func) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    return new Func(...args);
  };
}
var arrayForEach = unapply(Array.prototype.forEach);
var arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
var arrayPop = unapply(Array.prototype.pop);
var arrayPush2 = unapply(Array.prototype.push);
var arraySplice = unapply(Array.prototype.splice);
var stringToLowerCase = unapply(String.prototype.toLowerCase);
var stringToString = unapply(String.prototype.toString);
var stringMatch = unapply(String.prototype.match);
var stringReplace = unapply(String.prototype.replace);
var stringIndexOf = unapply(String.prototype.indexOf);
var stringTrim = unapply(String.prototype.trim);
var objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
var regExpTest = unapply(RegExp.prototype.test);
var typeErrorCreate = unconstruct(TypeError);
function unapply(func) {
  return function(thisArg) {
    if (thisArg instanceof RegExp) {
      thisArg.lastIndex = 0;
    }
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    return apply2(func, thisArg, args);
  };
}
function unconstruct(Func) {
  return function() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return construct(Func, args);
  };
}
function addToSet(set2, array) {
  let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
  if (setPrototypeOf) {
    setPrototypeOf(set2, null);
  }
  let l7 = array.length;
  while (l7--) {
    let element = array[l7];
    if (typeof element === "string") {
      const lcElement = transformCaseFunc(element);
      if (lcElement !== element) {
        if (!isFrozen(array)) {
          array[l7] = lcElement;
        }
        element = lcElement;
      }
    }
    set2[element] = true;
  }
  return set2;
}
function cleanArray(array) {
  for (let index = 0; index < array.length; index++) {
    const isPropertyExist = objectHasOwnProperty(array, index);
    if (!isPropertyExist) {
      array[index] = null;
    }
  }
  return array;
}
function clone2(object) {
  const newObject = create2(null);
  for (const [property2, value] of entries(object)) {
    const isPropertyExist = objectHasOwnProperty(object, property2);
    if (isPropertyExist) {
      if (Array.isArray(value)) {
        newObject[property2] = cleanArray(value);
      } else if (value && typeof value === "object" && value.constructor === Object) {
        newObject[property2] = clone2(value);
      } else {
        newObject[property2] = value;
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
  function fallbackValue() {
    return null;
  }
  return fallbackValue;
}
var html$1 = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
var svg$1 = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
var svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
var svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
var mathMl$1 = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
var mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
var text = freeze(["#text"]);
var html = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]);
var svg = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
var mathMl = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
var xml = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
var TMPLIT_EXPR = seal(/\$\{[\w\W]*/gm);
var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/);
var ARIA_ATTR = seal(/^aria-[\-\w]+$/);
var IS_ALLOWED_URI = seal(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
);
var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
var ATTR_WHITESPACE = seal(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
);
var DOCTYPE_NAME = seal(/^html$/i);
var CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
var EXPRESSIONS = Object.freeze({
  __proto__: null,
  ARIA_ATTR,
  ATTR_WHITESPACE,
  CUSTOM_ELEMENT,
  DATA_ATTR,
  DOCTYPE_NAME,
  ERB_EXPR,
  IS_ALLOWED_URI,
  IS_SCRIPT_OR_DATA,
  MUSTACHE_EXPR,
  TMPLIT_EXPR
});
var NODE_TYPE = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
};
var getGlobal = function getGlobal2() {
  return typeof window === "undefined" ? null : window;
};
var _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, purifyHostElement) {
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
  } catch (_4) {
    console.warn("TrustedTypes policy " + policyName + " could not be created.");
    return null;
  }
};
var _createHooksMap = function _createHooksMap2() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function createDOMPurify() {
  let window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
  const DOMPurify = (root2) => createDOMPurify(root2);
  DOMPurify.version = "3.3.0";
  DOMPurify.removed = [];
  if (!window2 || !window2.document || window2.document.nodeType !== NODE_TYPE.document || !window2.Element) {
    DOMPurify.isSupported = false;
    return DOMPurify;
  }
  let {
    document: document2
  } = window2;
  const originalDocument = document2;
  const currentScript = originalDocument.currentScript;
  const {
    DocumentFragment,
    HTMLTemplateElement,
    Node: Node2,
    Element: Element2,
    NodeFilter,
    NamedNodeMap = window2.NamedNodeMap || window2.MozNamedAttrMap,
    HTMLFormElement,
    DOMParser,
    trustedTypes
  } = window2;
  const ElementPrototype = Element2.prototype;
  const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
  const remove2 = lookupGetter(ElementPrototype, "remove");
  const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
  const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
  const getParentNode2 = lookupGetter(ElementPrototype, "parentNode");
  if (typeof HTMLTemplateElement === "function") {
    const template2 = document2.createElement("template");
    if (template2.content && template2.content.ownerDocument) {
      document2 = template2.content.ownerDocument;
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
  let hooks = _createHooksMap();
  DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode2 === "function" && implementation && implementation.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: MUSTACHE_EXPR2,
    ERB_EXPR: ERB_EXPR2,
    TMPLIT_EXPR: TMPLIT_EXPR2,
    DATA_ATTR: DATA_ATTR2,
    ARIA_ATTR: ARIA_ATTR2,
    IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA2,
    ATTR_WHITESPACE: ATTR_WHITESPACE2,
    CUSTOM_ELEMENT: CUSTOM_ELEMENT2
  } = EXPRESSIONS;
  let {
    IS_ALLOWED_URI: IS_ALLOWED_URI$1
  } = EXPRESSIONS;
  let ALLOWED_TAGS = null;
  const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);
  let ALLOWED_ATTR = null;
  const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html, ...svg, ...mathMl, ...xml]);
  let CUSTOM_ELEMENT_HANDLING = Object.seal(create2(null, {
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
  const EXTRA_ELEMENT_HANDLING = Object.seal(create2(null, {
    tagCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    }
  }));
  let ALLOW_ARIA_ATTR = true;
  let ALLOW_DATA_ATTR = true;
  let ALLOW_UNKNOWN_PROTOCOLS = false;
  let ALLOW_SELF_CLOSE_IN_ATTR = true;
  let SAFE_FOR_TEMPLATES = false;
  let SAFE_FOR_XML = true;
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
  let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
  let HTML_INTEGRATION_POINTS = addToSet({}, ["annotation-xml"]);
  const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ["title", "style", "font", "a", "script"]);
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
    cfg = clone2(cfg);
    PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
    SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
    transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
    ALLOWED_TAGS = objectHasOwnProperty(cfg, "ALLOWED_TAGS") ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
    ALLOWED_ATTR = objectHasOwnProperty(cfg, "ALLOWED_ATTR") ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
    ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, "ALLOWED_NAMESPACES") ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
    URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, "ADD_URI_SAFE_ATTR") ? addToSet(clone2(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR, transformCaseFunc) : DEFAULT_URI_SAFE_ATTRIBUTES;
    DATA_URI_TAGS = objectHasOwnProperty(cfg, "ADD_DATA_URI_TAGS") ? addToSet(clone2(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS, transformCaseFunc) : DEFAULT_DATA_URI_TAGS;
    FORBID_CONTENTS = objectHasOwnProperty(cfg, "FORBID_CONTENTS") ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
    FORBID_TAGS = objectHasOwnProperty(cfg, "FORBID_TAGS") ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : clone2({});
    FORBID_ATTR = objectHasOwnProperty(cfg, "FORBID_ATTR") ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : clone2({});
    USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
    ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
    SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
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
    MATHML_TEXT_INTEGRATION_POINTS = cfg.MATHML_TEXT_INTEGRATION_POINTS || MATHML_TEXT_INTEGRATION_POINTS;
    HTML_INTEGRATION_POINTS = cfg.HTML_INTEGRATION_POINTS || HTML_INTEGRATION_POINTS;
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
      if (typeof cfg.ADD_TAGS === "function") {
        EXTRA_ELEMENT_HANDLING.tagCheck = cfg.ADD_TAGS;
      } else {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone2(ALLOWED_TAGS);
        }
        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
      }
    }
    if (cfg.ADD_ATTR) {
      if (typeof cfg.ADD_ATTR === "function") {
        EXTRA_ELEMENT_HANDLING.attributeCheck = cfg.ADD_ATTR;
      } else {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone2(ALLOWED_ATTR);
        }
        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
      }
    }
    if (cfg.ADD_URI_SAFE_ATTR) {
      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
    }
    if (cfg.FORBID_CONTENTS) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
        FORBID_CONTENTS = clone2(FORBID_CONTENTS);
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
  const ALL_SVG_TAGS = addToSet({}, [...svg$1, ...svgFilters, ...svgDisallowed]);
  const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
  const _checkValidNamespace = function _checkValidNamespace2(element) {
    let parent2 = getParentNode2(element);
    if (!parent2 || !parent2.tagName) {
      parent2 = {
        namespaceURI: NAMESPACE,
        tagName: "template"
      };
    }
    const tagName = stringToLowerCase(element.tagName);
    const parentTagName = stringToLowerCase(parent2.tagName);
    if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
      return false;
    }
    if (element.namespaceURI === SVG_NAMESPACE) {
      if (parent2.namespaceURI === HTML_NAMESPACE) {
        return tagName === "svg";
      }
      if (parent2.namespaceURI === MATHML_NAMESPACE) {
        return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
      }
      return Boolean(ALL_SVG_TAGS[tagName]);
    }
    if (element.namespaceURI === MATHML_NAMESPACE) {
      if (parent2.namespaceURI === HTML_NAMESPACE) {
        return tagName === "math";
      }
      if (parent2.namespaceURI === SVG_NAMESPACE) {
        return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
      }
      return Boolean(ALL_MATHML_TAGS[tagName]);
    }
    if (element.namespaceURI === HTML_NAMESPACE) {
      if (parent2.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      if (parent2.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
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
    arrayPush2(DOMPurify.removed, {
      element: node
    });
    try {
      getParentNode2(node).removeChild(node);
    } catch (_4) {
      remove2(node);
    }
  };
  const _removeAttribute = function _removeAttribute2(name, element) {
    try {
      arrayPush2(DOMPurify.removed, {
        attribute: element.getAttributeNode(name),
        from: element
      });
    } catch (_4) {
      arrayPush2(DOMPurify.removed, {
        attribute: null,
        from: element
      });
    }
    element.removeAttribute(name);
    if (name === "is") {
      if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
        try {
          _forceRemove(element);
        } catch (_4) {
        }
      } else {
        try {
          element.setAttribute(name, "");
        } catch (_4) {
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
      const matches2 = stringMatch(dirty, /^[\r\n\t ]+/);
      leadingWhitespace = matches2 && matches2[0];
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) {
      dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
    }
    const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
    if (NAMESPACE === HTML_NAMESPACE) {
      try {
        doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
      } catch (_4) {
      }
    }
    if (!doc || !doc.documentElement) {
      doc = implementation.createDocument(NAMESPACE, "template", null);
      try {
        doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
      } catch (_4) {
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
  const _createNodeIterator = function _createNodeIterator2(root2) {
    return createNodeIterator.call(
      root2.ownerDocument || root2,
      root2,
      // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION,
      null
    );
  };
  const _isClobbered = function _isClobbered2(element) {
    return element instanceof HTMLFormElement && (typeof element.nodeName !== "string" || typeof element.textContent !== "string" || typeof element.removeChild !== "function" || !(element.attributes instanceof NamedNodeMap) || typeof element.removeAttribute !== "function" || typeof element.setAttribute !== "function" || typeof element.namespaceURI !== "string" || typeof element.insertBefore !== "function" || typeof element.hasChildNodes !== "function");
  };
  const _isNode = function _isNode2(value) {
    return typeof Node2 === "function" && value instanceof Node2;
  };
  function _executeHooks(hooks2, currentNode, data) {
    arrayForEach(hooks2, (hook) => {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  }
  const _sanitizeElements = function _sanitizeElements2(currentNode) {
    let content = null;
    _executeHooks(hooks.beforeSanitizeElements, currentNode, null);
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    const tagName = transformCaseFunc(currentNode.nodeName);
    _executeHooks(hooks.uponSanitizeElement, currentNode, {
      tagName,
      allowedTags: ALLOWED_TAGS
    });
    if (SAFE_FOR_XML && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w!]/g, currentNode.innerHTML) && regExpTest(/<[/\w!]/g, currentNode.textContent)) {
      _forceRemove(currentNode);
      return true;
    }
    if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, currentNode.data)) {
      _forceRemove(currentNode);
      return true;
    }
    if (!(EXTRA_ELEMENT_HANDLING.tagCheck instanceof Function && EXTRA_ELEMENT_HANDLING.tagCheck(tagName)) && (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName])) {
      if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) {
          return false;
        }
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) {
          return false;
        }
      }
      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
        const parentNode = getParentNode2(currentNode) || currentNode.parentNode;
        const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
        if (childNodes && parentNode) {
          const childCount = childNodes.length;
          for (let i8 = childCount - 1; i8 >= 0; --i8) {
            const childClone = cloneNode(childNodes[i8], true);
            childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
            parentNode.insertBefore(childClone, getNextSibling(currentNode));
          }
        }
      }
      _forceRemove(currentNode);
      return true;
    }
    if (currentNode instanceof Element2 && !_checkValidNamespace(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
      content = currentNode.textContent;
      arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
        content = stringReplace(content, expr, " ");
      });
      if (currentNode.textContent !== content) {
        arrayPush2(DOMPurify.removed, {
          element: currentNode.cloneNode()
        });
        currentNode.textContent = content;
      }
    }
    _executeHooks(hooks.afterSanitizeElements, currentNode, null);
    return false;
  };
  const _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
    if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) {
      return false;
    }
    if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR2, lcName)) ;
    else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR2, lcName)) ;
    else if (EXTRA_ELEMENT_HANDLING.attributeCheck instanceof Function && EXTRA_ELEMENT_HANDLING.attributeCheck(lcName, lcTag)) ;
    else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
      if (
        // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName, lcTag)) || // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))
      ) ;
      else {
        return false;
      }
    } else if (URI_SAFE_ATTRIBUTES[lcName]) ;
    else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE2, ""))) ;
    else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]) ;
    else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA2, stringReplace(value, ATTR_WHITESPACE2, ""))) ;
    else if (value) {
      return false;
    } else ;
    return true;
  };
  const _isBasicCustomElement = function _isBasicCustomElement2(tagName) {
    return tagName !== "annotation-xml" && stringMatch(tagName, CUSTOM_ELEMENT2);
  };
  const _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
    _executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
    const {
      attributes
    } = currentNode;
    if (!attributes || _isClobbered(currentNode)) {
      return;
    }
    const hookEvent = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR,
      forceKeepAttr: void 0
    };
    let l7 = attributes.length;
    while (l7--) {
      const attr = attributes[l7];
      const {
        name,
        namespaceURI,
        value: attrValue
      } = attr;
      const lcName = transformCaseFunc(name);
      const initValue = attrValue;
      let value = name === "value" ? initValue : stringTrim(initValue);
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      hookEvent.forceKeepAttr = void 0;
      _executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
      value = hookEvent.attrValue;
      if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
        _removeAttribute(name, currentNode);
        value = SANITIZE_NAMED_PROPS_PREFIX + value;
      }
      if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|title|textarea)/i, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (lcName === "attributename" && stringMatch(value, "href")) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (hookEvent.forceKeepAttr) {
        continue;
      }
      if (!hookEvent.keepAttr) {
        _removeAttribute(name, currentNode);
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
        _removeAttribute(name, currentNode);
        continue;
      }
      if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function") {
        if (namespaceURI) ;
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
      if (value !== initValue) {
        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            currentNode.setAttribute(name, value);
          }
          if (_isClobbered(currentNode)) {
            _forceRemove(currentNode);
          } else {
            arrayPop(DOMPurify.removed);
          }
        } catch (_4) {
          _removeAttribute(name, currentNode);
        }
      }
    }
    _executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
  };
  const _sanitizeShadowDOM = function _sanitizeShadowDOM2(fragment) {
    let shadowNode = null;
    const shadowIterator = _createNodeIterator(fragment);
    _executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
    while (shadowNode = shadowIterator.nextNode()) {
      _executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
      _sanitizeElements(shadowNode);
      _sanitizeAttributes(shadowNode);
      if (shadowNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM2(shadowNode.content);
      }
    }
    _executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
  };
  DOMPurify.sanitize = function(dirty) {
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
    if (!DOMPurify.isSupported) {
      return dirty;
    }
    if (!SET_CONFIG) {
      _parseConfig(cfg);
    }
    DOMPurify.removed = [];
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
    } else if (dirty instanceof Node2) {
      body = _initDocument("<!---->");
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") {
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
      _sanitizeElements(currentNode);
      _sanitizeAttributes(currentNode);
      if (currentNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(currentNode.content);
      }
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
  DOMPurify.setConfig = function() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _parseConfig(cfg);
    SET_CONFIG = true;
  };
  DOMPurify.clearConfig = function() {
    CONFIG = null;
    SET_CONFIG = false;
  };
  DOMPurify.isValidAttribute = function(tag, attr, value) {
    if (!CONFIG) {
      _parseConfig({});
    }
    const lcTag = transformCaseFunc(tag);
    const lcName = transformCaseFunc(attr);
    return _isValidAttribute(lcTag, lcName, value);
  };
  DOMPurify.addHook = function(entryPoint, hookFunction) {
    if (typeof hookFunction !== "function") {
      return;
    }
    arrayPush2(hooks[entryPoint], hookFunction);
  };
  DOMPurify.removeHook = function(entryPoint, hookFunction) {
    if (hookFunction !== void 0) {
      const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
      return index === -1 ? void 0 : arraySplice(hooks[entryPoint], index, 1)[0];
    }
    return arrayPop(hooks[entryPoint]);
  };
  DOMPurify.removeHooks = function(entryPoint) {
    hooks[entryPoint] = [];
  };
  DOMPurify.removeAllHooks = function() {
    hooks = _createHooksMap();
  };
  return DOMPurify;
}
var purify = createDOMPurify();

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/collabUtils.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var escapeRegExp2 = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};
var getThreadTitle = (commentCount) => {
  if (commentCount === 0) return "Add New Comment";
  return commentCount === 1 ? "1 Comment" : `${commentCount} Comments`;
};
var getUserName = (user) => {
  return user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : user.firstName || user.lastName || user.email;
};
var validateCommentAndMentions = (comment, toUsers) => {
  if (comment.length > maxMessageLength) {
    return `Limit exceeded. You can have a maximum length of ${maxMessageLength} characters.`;
  }
  if (toUsers.length > mentionLimit) {
    return `Limit exceeded. You can tag a maximum of ${mentionLimit} users.`;
  }
  return "";
};
var filterOutInvalidMentions = (message, toUsers) => {
  const to_users_temp = toUsers.filter(
    (user) => message.includes(user.display)
  );
  return {
    toUsers: uniqBy_default(to_users_temp, "id")
  };
};
var getMessageWithDisplayName = (comment, userState, profile) => {
  var _a;
  if (!comment) return void 0;
  let tempText = sanitizeData(comment.message).replace(/<[^>]*>/g, "");
  (_a = comment.toUsers) == null ? void 0 : _a.forEach((user) => {
    const userPattern = new RegExp(`{{${user}}}`, "g");
    const userData = userState.userMap[user];
    const displayName = userData ? userData.display || getUserName(userData) : `unknown user`;
    const replacement = profile === "html" ? `<b class="collab-thread-comment--message">@${displayName}</b>` : `@${displayName}`;
    tempText = tempText.replace(userPattern, replacement);
  });
  return tempText;
};
var sanitizeData = (dirty) => {
  return purify.sanitize(dirty, { USE_PROFILES: { html: true } });
};
var getCommentBody = (state) => {
  var _a;
  let finalMessage = sanitizeData(state.message).replace(/[^\S\r\n]+/g, " ").replace(/ *\n */g, "\n").replace(/<[^>]*>/g, "").trim();
  const comment = {
    message: finalMessage,
    toUsers: [],
    images: [],
    createdBy: state.createdBy,
    author: state.author
  };
  const updateMentionToUID = (entity, result2) => {
    const displayName = entity.display;
    const escapedDisplayName = escapeRegExp2(`@${displayName}`);
    const regexUser = new RegExp(escapedDisplayName, "g");
    finalMessage = finalMessage.replace(regexUser, `{{${entity.id}}}`);
    result2.push(entity.id);
  };
  (_a = state.toUsers) == null ? void 0 : _a.forEach((user) => updateMentionToUID(user, comment.toUsers));
  comment.message = finalMessage;
  return comment;
};
function normalizePath(path) {
  if (path === "/") return path;
  return path.endsWith("/") ? path.slice(0, -1) : path;
}
function fixSvgXPath(xpath) {
  if (!xpath) return "";
  return xpath.replace(/\/svg/g, "/*[name()='svg']");
}
function adjustPositionToViewport(position, options = {}) {
  const { top, left } = position;
  const viewportWidth = window.innerWidth;
  const safeMargin = options.safeMargin ?? 16;
  const topSafeMargin = options.topSafeMargin ?? 42;
  const threadWidth = options.threadWidth ?? 16;
  let adjustedLeft = left;
  let adjustedTop = top;
  if (adjustedLeft + threadWidth > viewportWidth - safeMargin) {
    adjustedLeft = viewportWidth - safeMargin - threadWidth;
  }
  if (adjustedTop - window.scrollY < topSafeMargin) {
    adjustedTop = window.scrollY + topSafeMargin;
  }
  return { top: adjustedTop, left: adjustedLeft };
}
function formatDate(dateString) {
  if (!dateString) return "";
  return (0, import_dayjs.default)(dateString).format("MMM DD, YYYY, hh:mm A");
}
var positionTooltip = (tooltipRef, targetRef, position, setActualPosition) => {
  if (!tooltipRef.current || !targetRef.current) return;
  const targetRect = targetRef.current.getBoundingClientRect();
  const tooltipRect = tooltipRef.current.getBoundingClientRect();
  const margin = 8;
  const positions = {
    bottom: {
      top: targetRect.bottom + margin,
      left: targetRect.left + (targetRect.width - tooltipRect.width) / 2
    },
    top: {
      top: targetRect.top - tooltipRect.height - margin,
      left: targetRect.left + (targetRect.width - tooltipRect.width) / 2
    },
    left: {
      top: targetRect.top + (targetRect.height - tooltipRect.height) / 2,
      left: targetRect.left - tooltipRect.width - margin
    },
    right: {
      top: targetRect.top + (targetRect.height - tooltipRect.height) / 2,
      left: targetRect.right + margin
    }
  };
  let bestPosition = position;
  let coords = positions[position];
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const wouldBeOutsideViewport = {
    bottom: coords.top + tooltipRect.height > viewportHeight,
    top: coords.top < 0,
    left: coords.left < 0,
    right: coords.left + tooltipRect.width > viewportWidth
  };
  const horizontalOutOfBounds = coords.left < 0 || coords.left + tooltipRect.width > viewportWidth;
  if (wouldBeOutsideViewport[position] || horizontalOutOfBounds) {
    const positionPriority = ["bottom", "top", "right", "left"];
    positionPriority.splice(positionPriority.indexOf(position), 1);
    positionPriority.push(position);
    for (const pos of positionPriority) {
      const testCoords = positions[pos];
      const isVisible = testCoords.top >= 0 && testCoords.top + tooltipRect.height <= viewportHeight && testCoords.left >= 0 && testCoords.left + tooltipRect.width <= viewportWidth;
      if (isVisible) {
        bestPosition = pos;
        coords = testCoords;
        break;
      }
    }
  }
  if (coords.left < 0) {
    coords.left = margin;
  } else if (coords.left + tooltipRect.width > viewportWidth) {
    coords.left = viewportWidth - tooltipRect.width - margin;
  }
  if (coords.top < 0) {
    coords.top = margin;
  } else if (coords.top + tooltipRect.height > viewportHeight) {
    coords.top = viewportHeight - tooltipRect.height - margin;
  }
  setActualPosition(bestPosition);
  Object.assign(tooltipRef.current.style, {
    top: `${coords.top}px`,
    left: `${coords.left}px`
  });
};

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/Collab/Tooltip/Tooltip.js
var import_classnames5 = __toESM(require_classnames(), 1);
var Tooltip = (props) => {
  const {
    content,
    children,
    position = "bottom",
    className,
    testId,
    ...otherProps
  } = props;
  const [isVisible, setIsVisible] = p2(false);
  const [actualPosition, setActualPosition] = p2(position);
  const tooltipRef = F2(null);
  const targetRef = F2(null);
  const prevChildrenRef = F2(children);
  _2(() => {
    if (prevChildrenRef.current !== children) {
      setIsVisible(false);
      prevChildrenRef.current = children;
    }
  }, [children]);
  _2(() => {
    const updateTooltip = () => positionTooltip(tooltipRef, targetRef, position, setActualPosition);
    updateTooltip();
    window.addEventListener("scroll", updateTooltip);
    window.addEventListener("resize", updateTooltip);
    return () => {
      window.removeEventListener("scroll", updateTooltip);
      window.removeEventListener("resize", updateTooltip);
    };
  }, [isVisible, position]);
  return u6(
    "div",
    {
      ref: targetRef,
      className: (0, import_classnames5.default)(
        "collab-tooltip--wrapper",
        collabStyles()["collab-tooltip--wrapper"],
        className
      ),
      onMouseEnter: () => setIsVisible(true),
      onMouseLeave: () => setIsVisible(false),
      "data-testid": testId,
      ...otherProps,
      children: [
        children,
        isVisible && u6(
          "div",
          {
            ref: tooltipRef,
            className: (0, import_classnames5.default)(
              "collab-tooltip",
              `collab-tooltip--${actualPosition}`,
              collabStyles()["collab-tooltip"],
              collabStyles()[`collab-tooltip--${actualPosition}`]
            ),
            role: "tooltip",
            "aria-hidden": !isVisible,
            "data-position": actualPosition,
            children: content
          }
        )
      ]
    }
  );
};
Tooltip.defaultProps = {
  testId: "collab-tooltip"
};
var Tooltip_default = Tooltip;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/icons/CollabIcons.js
var iconComponents = {
  Cancel: (props) => u6(
    "svg",
    {
      ...props,
      width: "32",
      height: "32",
      viewBox: "0 0 32 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: u6(
        "path",
        {
          class: "collab-icon__svg",
          d: "M25.5303 7.53033C25.8232 7.23744 25.8232 6.76256 25.5303 6.46967C25.2374 6.17678 24.7626 6.17678 24.4697 6.46967L16 14.9393L7.53033 6.46967C7.23744 6.17678 6.76256 6.17678 6.46967 6.46967C6.17678 6.76256 6.17678 7.23744 6.46967 7.53033L14.9393 16L6.46967 24.4697C6.17678 24.7626 6.17678 25.2374 6.46967 25.5303C6.76256 25.8232 7.23744 25.8232 7.53033 25.5303L16 17.0607L24.4697 25.5303C24.7626 25.8232 25.2374 25.8232 25.5303 25.5303C25.8232 25.2374 25.8232 24.7626 25.5303 24.4697L17.0607 16L25.5303 7.53033Z",
          fill: "#475161"
        }
      )
    }
  ),
  Delete: (props) => u6(
    "svg",
    {
      ...props,
      width: "32",
      height: "32",
      viewBox: "0 0 32 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        u6(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            class: "collab-icon__svg",
            d: "M4.25 7C4.25 6.58579 4.58579 6.25 5 6.25H27C27.4142 6.25 27.75 6.58579 27.75 7C27.75 7.41421 27.4142 7.75 27 7.75H5C4.58579 7.75 4.25 7.41421 4.25 7Z",
            fill: "#475161"
          }
        ),
        u6(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            class: "collab-icon__svg",
            d: "M13 12.25C13.4142 12.25 13.75 12.5858 13.75 13V21C13.75 21.4142 13.4142 21.75 13 21.75C12.5858 21.75 12.25 21.4142 12.25 21V13C12.25 12.5858 12.5858 12.25 13 12.25Z",
            fill: "#475161"
          }
        ),
        u6(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            class: "collab-icon__svg",
            d: "M19 12.25C19.4142 12.25 19.75 12.5858 19.75 13V21C19.75 21.4142 19.4142 21.75 19 21.75C18.5858 21.75 18.25 21.4142 18.25 21V13C18.25 12.5858 18.5858 12.25 19 12.25Z",
            fill: "#475161"
          }
        ),
        u6(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            class: "collab-icon__svg",
            d: "M7 6.25C7.41421 6.25 7.75 6.58579 7.75 7V26C7.75 26.0663 7.77634 26.1299 7.82322 26.1768C7.87011 26.2237 7.93369 26.25 8 26.25H24C24.0663 26.25 24.1299 26.2237 24.1768 26.1768C24.2237 26.1299 24.25 26.0663 24.25 26V7C24.25 6.58579 24.5858 6.25 25 6.25C25.4142 6.25 25.75 6.58579 25.75 7V26C25.75 26.4641 25.5656 26.9092 25.2374 27.2374C24.9092 27.5656 24.4641 27.75 24 27.75H8C7.53587 27.75 7.09075 27.5656 6.76256 27.2374C6.43437 26.9092 6.25 26.4641 6.25 26V7C6.25 6.58579 6.58579 6.25 7 6.25Z",
            fill: "#475161"
          }
        ),
        u6(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            class: "collab-icon__svg",
            d: "M11.0555 3.05546C11.5712 2.53973 12.2707 2.25 13 2.25H19C19.7293 2.25 20.4288 2.53973 20.9445 3.05546C21.4603 3.57118 21.75 4.27065 21.75 5V7C21.75 7.41421 21.4142 7.75 21 7.75C20.5858 7.75 20.25 7.41421 20.25 7V5C20.25 4.66848 20.1183 4.35054 19.8839 4.11612C19.6495 3.8817 19.3315 3.75 19 3.75H13C12.6685 3.75 12.3505 3.8817 12.1161 4.11612C11.8817 4.35054 11.75 4.66848 11.75 5V7C11.75 7.41421 11.4142 7.75 11 7.75C10.5858 7.75 10.25 7.41421 10.25 7V5C10.25 4.27065 10.5397 3.57118 11.0555 3.05546Z",
            fill: "#475161"
          }
        )
      ]
    }
  ),
  Edit: (props) => u6(
    "svg",
    {
      ...props,
      width: "32",
      height: "32",
      viewBox: "0 0 32 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: u6(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          class: "collab-icon__svg",
          d: "M4.7778 20.5072C4.47473 20.8102 4.29342 21.214 4.26826 21.6418L4.00309 26.1497C3.94156 27.1957 4.80682 28.0609 5.85284 27.9994L10.3606 27.7342C10.7885 27.7091 11.1922 27.5278 11.4953 27.2247L27.4899 11.2301C28.1733 10.5467 28.1733 9.43862 27.4899 8.7552L23.2473 4.51256C22.5639 3.82915 21.4558 3.82915 20.7724 4.51256L4.7778 20.5072ZM5.76567 21.7299C5.76926 21.6688 5.79516 21.6111 5.83846 21.5678L18.9336 8.4727L23.327 12.8661C23.3988 12.9379 23.4816 12.9921 23.57 13.0287L10.4347 26.164C10.3914 26.2073 10.3337 26.2332 10.2726 26.2368L5.76475 26.502C5.61532 26.5108 5.49171 26.3872 5.5005 26.2377L5.76567 21.7299ZM24.5503 12.0484L26.4293 10.1694C26.5269 10.0718 26.5269 9.9135 26.4293 9.81586L22.1866 5.57322C22.089 5.47559 21.9307 5.47559 21.8331 5.57322L19.9943 7.41204L24.3876 11.8054C24.4595 11.8772 24.5137 11.96 24.5503 12.0484Z",
          fill: "#475161"
        }
      )
    }
  ),
  RightMarkActive: (props) => u6(
    "svg",
    {
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      children: u6(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          class: "collab-icon__svg",
          d: "M17.2065 5.29354C17.3895 5.4766 17.3895 5.7734 17.2065 5.95646L8.45646 14.7065C8.2734 14.8895 7.9766 14.8895 7.79354 14.7065L3.41854 10.3315C3.23549 10.1484 3.23549 9.8516 3.41854 9.66854C3.6016 9.48549 3.8984 9.48549 4.08146 9.66854L8.125 13.7121L16.5435 5.29354C16.7266 5.11049 17.0234 5.11049 17.2065 5.29354Z",
          fill: "#6C5CE7"
        }
      )
    }
  ),
  Indicator: ({ active }) => u6(
    "svg",
    {
      width: active ? "25" : "24",
      height: "24",
      viewBox: `0 0 ${active ? 25 : 24} 24`,
      fill: "none",
      class: "collab-icon",
      xmlns: "http://www.w3.org/2000/svg",
      style: { marginTop: "2px" },
      children: [
        u6(
          "path",
          {
            class: "collab-icon__svg",
            d: "M8.4375 9C8.4375 8.68934 8.68934 8.4375 9 8.4375H15C15.3107 8.4375 15.5625 8.68934 15.5625 9C15.5625 9.31066 15.3107 9.5625 15 9.5625H9C8.68934 9.5625 8.4375 9.31066 8.4375 9Z",
            fill: "white"
          }
        ),
        u6(
          "path",
          {
            class: "collab-icon__svg",
            d: "M8.4375 12C8.4375 11.6893 8.68934 11.4375 9 11.4375H15C15.3107 11.4375 15.5625 11.6893 15.5625 12C15.5625 12.3107 15.3107 12.5625 15 12.5625H9C8.68934 12.5625 8.4375 12.3107 8.4375 12Z",
            fill: "white"
          }
        ),
        u6(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            class: "collab-icon__svg",
            d: "M3 5.25C3 4.83579 3.33579 4.5 3.75 4.5H20.25C20.6642 4.5 21 4.83579 21 5.25V16.4423C21 16.8565 20.6642 17.1923 20.25 17.1923H14.9804C14.853 17.1923 14.7343 17.257 14.6652 17.3641L12.9633 20.0042C12.6651 20.4669 11.9866 20.4613 11.696 19.9938L10.1746 17.5464C10.0378 17.3262 9.79691 17.1923 9.53766 17.1923H3.75C3.33579 17.1923 3 16.8565 3 16.4423V5.25ZM4.125 16.0673V5.625H19.875V16.0673H14.9804C14.4707 16.0673 13.9958 16.3262 13.7197 16.7546L12.3387 18.8968L11.1301 16.9524C10.7879 16.402 10.1858 16.0673 9.53766 16.0673H4.125Z",
            fill: "white"
          }
        ),
        active && u6("g", { children: [
          u6(
            "circle",
            {
              cx: "20",
              cy: "5",
              r: "4",
              fill: "#EB5646",
              class: "collab-icon__svg"
            }
          ),
          u6(
            "circle",
            {
              cx: "20",
              cy: "5",
              r: "4.5",
              stroke: "white",
              "stroke-opacity": "0.6",
              class: "collab-icon__svg"
            }
          )
        ] })
      ]
    }
  )
};

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/Collab/Icon/Icon.js
var import_classnames6 = __toESM(require_classnames(), 1);
var IconWrapper = ({
  icon,
  className,
  onClick,
  testId,
  disabled,
  ...otherProps
}) => {
  const IconComponent = iconComponents[icon];
  const handleClick = (e6) => {
    if (disabled) return;
    onClick == null ? void 0 : onClick(e6);
  };
  return u6(
    "div",
    {
      className: (0, import_classnames6.default)(
        "collab-icon-wrapper",
        collabStyles()["collab-icon-wrapper"]
      ),
      onClick: handleClick,
      "data-testid": testId,
      ...otherProps,
      children: IconComponent ? u6(
        IconComponent,
        {
          className: (0, import_classnames6.default)(
            "collab-icon",
            collabStyles()["collab-icon"],
            className
          )
        }
      ) : null
    }
  );
};
var withTooltip = (Component) => ({
  withTooltip: withTooltip2 = false,
  tooltipContent = "",
  testId = "collab-icon",
  ...props
}) => {
  return withTooltip2 && tooltipContent ? u6("div", { "data-testid": testId, children: u6(Tooltip_default, { content: tooltipContent, position: "bottom", testId: "collab-icon-tooltip", children: u6(Component, { ...props }) }) }) : u6(Component, { ...props, testId });
};
var Icon = withTooltip(IconWrapper);
var Icon_default = Icon;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/Collab/AsyncLoader/AsyncLoader.js
var import_classnames7 = __toESM(require_classnames(), 1);
var AsyncLoader = ({
  className,
  color = "primary",
  testId = "collab-async-loader",
  ...otherProps
}) => {
  const combinedClassName = (0, import_classnames7.default)(
    collabStyles()["collab-button--loader--animation"],
    collabStyles()["collab-button--loading--color"][color],
    "collab-button--loader--animation",
    `collab-button--loading--${color}`
  );
  return u6(
    "div",
    {
      className: (0, import_classnames7.default)(
        "collab-button--loader",
        collabStyles()["collab-button--loader"],
        className
      ),
      ...otherProps,
      "data-testid": testId,
      children: [
        u6("div", { className: combinedClassName }),
        u6("div", { className: combinedClassName }),
        u6("div", { className: combinedClassName })
      ]
    }
  );
};
var AsyncLoader_default = AsyncLoader;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/Collab/Button/Button.js
var Button = ({
  buttonType = "primary",
  children,
  className = "",
  testId,
  onClick,
  isLoading,
  loadingColor = "primary",
  disabled = false,
  type = "button",
  style,
  href,
  id,
  size: size3 = "large",
  icon,
  iconProps,
  iconAlignment = "left"
}) => {
  const Element2 = href ? "a" : "button";
  let nestedChildren = children && wn.Children.toArray([children]);
  if (icon) {
    let iconChild = u6(Icon_default, { icon, ...iconProps });
    switch (iconAlignment) {
      case "left":
        nestedChildren = wn.Children.toArray([
          iconChild,
          nestedChildren
        ]);
        break;
      case "right":
        nestedChildren = wn.Children.toArray([
          nestedChildren,
          iconChild
        ]);
        break;
      case "both":
        nestedChildren = wn.Children.toArray([
          iconChild,
          nestedChildren,
          iconChild
        ]);
        break;
      default:
        break;
    }
  }
  const combinedClassName = (0, import_classnames8.default)(
    collabStyles()["collab-button--basestyle"],
    collabStyles()["collab-button--type"][buttonType],
    collabStyles()["collab-button--size"][size3],
    icon && collabStyles()["collab-button--icon-allignment"][iconAlignment],
    disabled && collabStyles()["collab-button--disabled"],
    isLoading && collabStyles()["collab-button--loading"],
    className,
    `collab-button collab-button--${buttonType} collab-button--${size3} ${icon ? `collab-button--icon-${iconAlignment}` : ""} ${disabled ? "collab-button--disabled" : ""}
        ${isLoading ? "collab-button--loading" : ""}`
  );
  const validStyle = Object.fromEntries(
    Object.entries(style || {}).filter(([_4, value]) => value != null)
  );
  return u6(
    Element2,
    {
      className: combinedClassName,
      id,
      onClick,
      type,
      style: validStyle,
      disabled,
      href,
      "data-testid": testId,
      children: u6("div", { className: (0, import_classnames8.default)("flex-center", flexCentered), children: [
        isLoading && u6(
          "div",
          {
            className: (0, import_classnames8.default)(
              collabStyles()["collab-button--loader--wrapper"],
              "collab-button--loader--wrapper"
            ),
            children: u6(AsyncLoader_default, { color: loadingColor })
          }
        ),
        u6(
          "div",
          {
            className: (0, import_classnames8.default)(
              "flex-v-center",
              flexAlignCenter,
              {
                [`${collabStyles()["collab-button--size"]["regular"]} collab-button--regular`]: size3 !== "small"
              },
              !isLoading ? `${collabStyles()["collab-button--visible"]} collab-button--visible` : `${collabStyles()["collab-button--hidden"]} collab-button--hidden`
            ),
            children: nestedChildren
          }
        )
      ] })
    }
  );
};
var Button_default = Button;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/Collab/ThreadPopup/ThreadActionBar.js
var ThreadActionBar = ({
  commentCount,
  displayResolve,
  handleResolve,
  isResolving
}) => {
  return u6(g, { children: [
    u6(
      "div",
      {
        className: (0, import_classnames9.default)(
          "collab-thread-header--title",
          collabStyles()["collab-thread-header--title"]
        ),
        children: getThreadTitle(commentCount)
      }
    ),
    displayResolve && u6(
      Button_default,
      {
        buttonType: "tertiary",
        className: (0, import_classnames9.default)(
          "collab-thread-header--resolve",
          collabStyles()["collab-thread-header--resolve"]
        ),
        icon: "RightMarkActive",
        iconProps: {
          className: (0, import_classnames9.default)(
            collabStyles()["collab-thread-header--resolve--icon"],
            "collab-thread-header--resolve--icon"
          )
        },
        onClick: handleResolve,
        testId: "collab-thread-resolve-btn",
        isLoading: isResolving,
        loadingColor: "secondary",
        children: u6(
          "span",
          {
            className: (0, import_classnames9.default)(
              "collab-thread-header--resolve--text",
              collabStyles()["collab-thread-header--resolve--text"]
            ),
            children: "Resolve"
          }
        )
      }
    )
  ] });
};
var ThreadActionBar_default = ThreadActionBar;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/Collab/ThreadPopup/ThreadHeader.js
var ThreadHeader = wn.memo(
  ({ onClose, displayResolve, onResolve, commentCount, activeThread }) => {
    const [isResolving, setIsResolving] = p2(false);
    const handleResolve = x2(async () => {
      if (isResolving) return;
      try {
        setIsResolving(true);
        const payload = {
          threadUid: activeThread._id,
          payload: { threadState: 2 }
        };
        await onResolve(payload);
      } finally {
        onClose(true);
        setIsResolving(false);
      }
    }, [activeThread, isResolving, onResolve, onClose]);
    return u6(
      "div",
      {
        className: (0, import_classnames10.default)(
          "collab-thread-header--wrapper",
          "flex-v-center",
          collabStyles()["collab-thread-header--wrapper"],
          flexAlignCenter
        ),
        children: u6(
          "div",
          {
            className: (0, import_classnames10.default)(
              "collab-thread-header--container",
              "flex-v-center",
              collabStyles()["collab-thread-header--container"],
              flexAlignCenter
            ),
            children: u6(
              ThreadActionBar_default,
              {
                commentCount,
                displayResolve,
                handleResolve,
                isResolving
              }
            )
          }
        )
      }
    );
  }
);
var ThreadHeader_default = ThreadHeader;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/Collab/ButtonGroup/ButtonGroup.js
var import_classnames11 = __toESM(require_classnames(), 1);
var ButtonGroup = (props) => {
  const { className, children, style, testId, ...otherProps } = props;
  const classNames34 = (0, import_classnames11.default)(
    "collab-button-group",
    collabStyles()["collab-button-group"],
    className
  );
  return u6(
    "div",
    {
      className: classNames34,
      style,
      "data-testid": testId,
      ...otherProps,
      children
    }
  );
};
ButtonGroup.defaultProps = {
  testId: "collab-button-group"
};
var ButtonGroup_default = ButtonGroup;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/Collab/ThreadPopup/ThreadFooter.js
var import_classnames12 = __toESM(require_classnames(), 1);
var ThreadFooter = ({
  onClose,
  handleOnSaveRef,
  isDisabled,
  editComment
}) => {
  const [loading, setLoading] = p2(false);
  const onSubmit = async (event) => {
    var _a;
    setLoading(true);
    event.preventDefault();
    await ((_a = handleOnSaveRef.current) == null ? void 0 : _a.call(handleOnSaveRef));
    setLoading(false);
  };
  return u6(
    "div",
    {
      className: (0, import_classnames12.default)(
        "collab-thread-footer--wrapper",
        "flex-v-center",
        collabStyles()["collab-thread-footer--wrapper"],
        flexAlignCenter
      ),
      children: u6(ButtonGroup_default, { children: [
        u6(
          Button_default,
          {
            type: "button",
            buttonType: "tertiary",
            testId: "thread-cancel-btn",
            onClick: () => onClose(false),
            children: "Cancel"
          }
        ),
        u6(
          Button_default,
          {
            type: "button",
            buttonType: "primary",
            onClick: onSubmit,
            testId: "thread-save-btn",
            disabled: isDisabled || loading,
            isLoading: loading,
            children: editComment === "" ? "Post" : "Update"
          }
        )
      ] })
    }
  );
};
var ThreadFooter_default = ThreadFooter;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/Collab/SkeletonTile/SkeletonTile.js
var import_classnames13 = __toESM(require_classnames(), 1);
var SkeletonTile = (props) => {
  const {
    numberOfTiles,
    tileleftSpace,
    tileTopSpace,
    tileHeight,
    tileBottomSpace,
    tileWidth,
    testId,
    tileRadius = 7
  } = props;
  const svgHeight = numberOfTiles * tileHeight + numberOfTiles * tileBottomSpace + numberOfTiles * tileTopSpace;
  const svgWidth = typeof tileWidth === "string" ? tileWidth : tileWidth + tileleftSpace;
  return u6(
    "svg",
    {
      "data-testid": testId,
      height: svgHeight,
      width: svgWidth,
      className: (0, import_classnames13.default)(
        "collab-skeletonTileSvgClass",
        collabStyles()["collab-skeletonTileSvgClass"]
      ),
      fill: "#EDF1F7",
      children: Array.from({ length: numberOfTiles }).map((_4, index) => u6("g", { children: u6(
        "rect",
        {
          "data-testid": "rect",
          x: tileleftSpace,
          y: index * (tileHeight + tileBottomSpace) + tileTopSpace,
          rx: tileRadius,
          width: tileWidth,
          height: tileHeight
        }
      ) }, index))
    }
  );
};
SkeletonTile.defaultProps = {
  testId: "collab-skeletonTile"
};
var SkeletonTile_default = SkeletonTile;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/Collab/ThreadPopup/loader/ThreadBody.js
var import_classnames14 = __toESM(require_classnames(), 1);
var ThreadBodyLoader = () => {
  return u6(
    "div",
    {
      className: (0, import_classnames14.default)(
        "collab-thread-body-comment--loader",
        collabStyles()["collab-thread-body-comment--loader"]
      ),
      children: [
        u6("div", { style: { display: "flex" }, children: [
          u6(
            SkeletonTile_default,
            {
              numberOfTiles: 1,
              tileHeight: 32,
              tileWidth: 32,
              tileBottomSpace: 0,
              tileTopSpace: 0,
              tileleftSpace: 0,
              tileRadius: 50
            }
          ),
          u6(
            SkeletonTile_default,
            {
              numberOfTiles: 2,
              tileHeight: 10,
              tileWidth: 130,
              tileBottomSpace: 7,
              tileTopSpace: 3,
              tileleftSpace: 10
            }
          )
        ] }),
        u6(
          SkeletonTile_default,
          {
            numberOfTiles: 1,
            tileHeight: 14,
            tileWidth: 300,
            tileBottomSpace: 5,
            tileTopSpace: 0,
            tileleftSpace: 0
          }
        ),
        u6(
          SkeletonTile_default,
          {
            numberOfTiles: 1,
            tileHeight: 14,
            tileWidth: 230,
            tileBottomSpace: 0,
            tileTopSpace: 0,
            tileleftSpace: 0
          }
        )
      ]
    }
  );
};
var ThreadBody_default = ThreadBodyLoader;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/Collab/ThreadPopup/ContextProvider/ThreadProvider.js
var ThreadProvider = wn.createContext(null);

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/hooks/useDynamicTextareaRows.js
var useDynamicTextareaRows = (selector, dependency, defaultRows = 1, expandedRows = 3) => {
  _2(() => {
    const textAreaElement = document.querySelector(selector);
    if (textAreaElement) {
      textAreaElement.setAttribute(
        "rows",
        dependency.length > 0 ? `${expandedRows}` : `${defaultRows}`
      );
    }
    return () => {
      textAreaElement == null ? void 0 : textAreaElement.setAttribute("rows", `${defaultRows}`);
    };
  }, [dependency, selector, defaultRows, expandedRows]);
};
var useDynamicTextareaRows_default = useDynamicTextareaRows;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/hooks/useCommentTextArea.js
var initialState = {
  message: "",
  toUsers: [],
  images: [],
  createdBy: "",
  author: ""
};
var useCommentTextArea = (userState, comment, onClose) => {
  const [state, setState] = p2(initialState);
  const [showSuggestions, setShowSuggestions] = p2(false);
  const [cursorPosition, setCursorPosition] = p2({
    top: 0,
    left: 0,
    showAbove: false
  });
  const [searchTerm, setSearchTerm] = p2("");
  const [selectedIndex, setSelectedIndex] = p2(0);
  const [filteredUsers, setFilteredUsers] = p2([]);
  const inputRef = F2(null);
  const listRef = F2(null);
  const itemRefs = F2([]);
  const {
    error,
    setError,
    onCreateComment,
    onEditComment,
    editComment,
    setThreadState,
    activeThread,
    setActiveThread,
    createNewThread
  } = P2(ThreadProvider);
  useDynamicTextareaRows_default(
    ".collab-thread-body--input--textarea",
    state.message
  );
  _2(() => {
    itemRefs.current = itemRefs.current.slice(
      0,
      userState.mentionsList.length
    );
  }, [userState.mentionsList]);
  _2(() => {
    const filteredUsersList = userState.mentionsList.filter((user) => {
      if (!searchTerm) return true;
      return user.display.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredUsers(filteredUsersList);
  }, [searchTerm, userState.mentionsList]);
  _2(() => {
    const textArea = document.getElementById(
      "collab-thread-body--input--textarea"
    );
    if (!textArea) return;
    const baseClasses = {
      focus: {
        base: "collab-thread-body--input--textarea--focus",
        goober: collabStyles()["collab-thread-body--input--textarea--focus"]
      },
      hover: {
        base: "collab-thread-body--input--textarea--hover",
        goober: collabStyles()["collab-thread-body--input--textarea--hover"]
      }
    };
    const handleFocus = () => {
      textArea.classList.add(
        baseClasses.focus.base,
        baseClasses.focus.goober
      );
    };
    const handleBlur = () => {
      textArea.classList.remove(
        baseClasses.focus.base,
        baseClasses.focus.goober
      );
    };
    const handleMouseEnter = () => {
      textArea.classList.add(
        baseClasses.hover.base,
        baseClasses.hover.goober
      );
    };
    const handleMouseLeave = () => {
      textArea.classList.remove(
        baseClasses.hover.base,
        baseClasses.hover.goober
      );
    };
    textArea.addEventListener("focus", handleFocus);
    textArea.addEventListener("blur", handleBlur);
    textArea.addEventListener("mouseenter", handleMouseEnter);
    textArea.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      textArea.removeEventListener("focus", handleFocus);
      textArea.removeEventListener("blur", handleBlur);
      textArea.removeEventListener("mouseenter", handleMouseEnter);
      textArea.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  _2(() => {
    var _a;
    if (!comment) return;
    const toUsers = [];
    (_a = comment == null ? void 0 : comment.toUsers) == null ? void 0 : _a.forEach((userId) => {
      const user = userState.userMap[userId];
      toUsers.push({
        display: `${user.display || getUserName(user)}`,
        id: userId
      });
    });
    setState({
      message: getMessageWithDisplayName(comment, userState, "text") ?? "",
      toUsers,
      images: (comment == null ? void 0 : comment.images) ?? [],
      createdBy: (comment == null ? void 0 : comment.createdBy) ?? "",
      author: (comment == null ? void 0 : comment.author) ?? ""
    });
  }, [comment, userState]);
  const findMentionSearchPosition = x2(
    (text2, cursorPos) => {
      const textBeforeCursor = text2.slice(0, cursorPos);
      const atSymbolIndex = textBeforeCursor.lastIndexOf("@");
      if (atSymbolIndex === -1) return null;
      const textBetweenAtAndCursor = textBeforeCursor.slice(
        atSymbolIndex + 1
      );
      if (textBetweenAtAndCursor.includes(" ")) return null;
      return {
        start: atSymbolIndex,
        searchTerm: textBetweenAtAndCursor
      };
    },
    []
  );
  const calculatePosition = x2(
    (textarea, cursorPosition2) => {
      const text2 = textarea == null ? void 0 : textarea.value;
      const textBeforeCursor = text2 == null ? void 0 : text2.slice(0, cursorPosition2);
      const lines = textBeforeCursor == null ? void 0 : textBeforeCursor.split("\n");
      const currentLineNumber = ((lines == null ? void 0 : lines.length) || 0) - 1;
      const currentLine = lines == null ? void 0 : lines[currentLineNumber];
      const style = window.getComputedStyle(textarea);
      const lineHeight = parseInt(style.lineHeight);
      const paddingLeft = parseInt(style.paddingLeft);
      const paddingTop = parseInt(style.paddingTop);
      const span = document.createElement("span");
      span.style.font = style.font;
      span.style.visibility = "hidden";
      span.style.position = "absolute";
      span.style.whiteSpace = "pre";
      span.textContent = currentLine ? currentLine : "";
      document.body.appendChild(span);
      const left = Math.min(
        span.offsetWidth + paddingLeft,
        textarea.offsetWidth - 200
      );
      document.body.removeChild(span);
      const scrollTop = textarea.scrollTop;
      const currentLineY = currentLineNumber * lineHeight + paddingTop - scrollTop;
      const nextLineY = currentLineY + lineHeight;
      const viewportHeight = window.innerHeight;
      const suggestionsHeight = 160;
      const textareaRect = textarea.getBoundingClientRect();
      const absoluteTop = textareaRect.top + nextLineY;
      const spaceBelow = viewportHeight - absoluteTop;
      const showAbove = spaceBelow < suggestionsHeight;
      const top = showAbove ? currentLineY : nextLineY;
      return {
        top,
        left,
        showAbove,
        absoluteTop,
        scrollTop,
        currentLineNumber
      };
    },
    []
  );
  const insertMention = x2(
    (user) => {
      var _a, _b;
      const mention = findMentionSearchPosition(
        state.message,
        ((_a = inputRef.current) == null ? void 0 : _a.selectionStart) || 0
      );
      if (!mention) return;
      const beforeMention = state.message.slice(0, mention.start);
      const afterMention = state.message.slice(
        ((_b = inputRef.current) == null ? void 0 : _b.selectionStart) || 0
      );
      const newValue = `${beforeMention}@${user.display} ${afterMention}`;
      const updatedMentions = filterOutInvalidMentions(newValue, [
        ...state.toUsers || [],
        { display: user.display, id: user.uid || "" }
      ]);
      setState((prevState) => ({
        ...prevState,
        message: newValue,
        toUsers: updatedMentions.toUsers
      }));
      setShowSuggestions(false);
      const ele = inputRef.current;
      if (ele) {
        ele.focus();
      }
    },
    [state.message, state.toUsers, findMentionSearchPosition]
  );
  const handleInputChange = x2(
    (event) => {
      const target = event.target;
      if (!target) return;
      const newPlainTextValue = target.value;
      const trimmedValue = newPlainTextValue.trim();
      const newPosition = target.selectionStart;
      const mention = findMentionSearchPosition(
        newPlainTextValue,
        newPosition
      );
      if (mention) {
        setSearchTerm(mention.searchTerm);
        setShowSuggestions(true);
        setCursorPosition(
          calculatePosition(
            inputRef.current,
            newPosition
          )
        );
        setSelectedIndex(0);
      } else {
        setShowSuggestions(false);
      }
      const errorMessage = validateCommentAndMentions(
        newPlainTextValue,
        state.toUsers ?? []
      );
      setError({
        hasError: errorMessage !== "" || trimmedValue === "",
        message: errorMessage
      });
      setState((prevState) => ({
        ...prevState,
        message: newPlainTextValue
      }));
    },
    [state.toUsers, findMentionSearchPosition, calculatePosition, setError]
  );
  const handleKeyDown = x2(
    (e6) => {
      var _a;
      if (e6.key === "@") {
        const position = calculatePosition(
          inputRef.current,
          e6.target.selectionStart
        );
        setCursorPosition(position);
        setSelectedIndex(0);
      }
      if (!showSuggestions) return;
      switch (e6.key) {
        case "ArrowDown":
          e6.preventDefault();
          setSelectedIndex(
            (prev) => prev < filteredUsers.length - 1 ? prev + 1 : prev
          );
          break;
        case "ArrowUp":
          e6.preventDefault();
          setSelectedIndex((prev) => prev > 0 ? prev - 1 : prev);
          break;
        case "Enter":
          e6.preventDefault();
          if (showSuggestions) {
            insertMention(filteredUsers[selectedIndex]);
          }
          break;
        case "Escape":
          setShowSuggestions(false);
          (_a = inputRef.current) == null ? void 0 : _a.focus();
          break;
      }
    },
    [
      showSuggestions,
      filteredUsers,
      selectedIndex,
      insertMention,
      calculatePosition
    ]
  );
  _2(() => {
    var _a;
    (_a = itemRefs.current[selectedIndex]) == null ? void 0 : _a.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest"
    });
  }, [selectedIndex]);
  const handleSubmit = x2(async () => {
    var _a;
    if (error.hasError) return;
    try {
      let threadUID = activeThread == null ? void 0 : activeThread._id;
      if ((activeThread == null ? void 0 : activeThread._id) == "new") {
        let currentThread = await createNewThread();
        threadUID = (_a = currentThread == null ? void 0 : currentThread.thread) == null ? void 0 : _a._id;
        setActiveThread(currentThread == null ? void 0 : currentThread.thread);
      }
      const commentState = {
        ...state,
        createdBy: userState.currentUser.uid,
        author: userState.currentUser.email
      };
      const commentPayload = {
        ...getCommentBody(commentState)
      };
      const commentData = {
        threadUid: threadUID,
        commentPayload
      };
      if (editComment) {
        let commentResponse = await onEditComment({
          threadUid: threadUID,
          commentUid: editComment,
          payload: commentPayload
        });
        setThreadState((prevState) => {
          const updatedComments = cloneDeep_default(prevState.comments);
          const commentIndex = findIndex_default(
            updatedComments,
            (c6) => c6._id === (comment == null ? void 0 : comment._id)
          );
          updatedComments.splice(
            commentIndex,
            1,
            commentResponse == null ? void 0 : commentResponse.comment
          );
          return {
            ...prevState,
            editComment: "",
            comments: updatedComments
          };
        });
        onClose(false);
      } else {
        let commentResponse = await onCreateComment(commentData);
        setThreadState((prevState) => ({
          ...prevState,
          comments: [commentResponse.comment, ...prevState.comments],
          commentCount: prevState.commentCount + 1
        }));
        setState(initialState);
        onClose(false);
      }
    } catch (error2) {
      console.error("Error submitting comment:", error2);
    }
  }, [error.hasError, state, activeThread]);
  _2(() => {
    if (state.message.length === 0) {
      setError({ hasError: true, message: "" });
    }
  }, [state.message, setError]);
  return {
    state,
    setState,
    error,
    showSuggestions,
    cursorPosition,
    selectedIndex,
    filteredUsers,
    inputRef,
    listRef,
    itemRefs,
    handleInputChange,
    handleKeyDown,
    handleSubmit,
    insertMention,
    maxMessageLength
  };
};

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/Collab/ThreadPopup/CommentTextArea.js
var import_classnames15 = __toESM(require_classnames(), 1);
var ErrorIndicator = ({
  errorMessage
}) => u6(
  "div",
  {
    className: (0, import_classnames15.default)(
      "collab-thread-input-indicator--error",
      collabStyles()["collab-thread-input-indicator--error"]
    ),
    children: errorMessage
  }
);
var CharacterCounter = ({ currentLength, maxLength }) => u6(
  "div",
  {
    className: (0, import_classnames15.default)(
      "collab-thread-input-indicator--count",
      collabStyles()["collab-thread-input-indicator--count"]
    ),
    children: [
      currentLength,
      "/",
      maxLength
    ]
  }
);
var MentionSuggestionsList = ({
  filteredUsers,
  selectedIndex,
  cursorPosition,
  inputRef,
  listRef,
  itemRefs,
  insertMention,
  handleKeyDown
}) => {
  var _a, _b;
  if (filteredUsers.length === 0) return null;
  return u6(
    "ul",
    {
      className: (0, import_classnames15.default)(
        "collab-thread-body--input--textarea--suggestionsList",
        collabStyles()["collab-thread-body--input--textarea--suggestionsList"]
      ),
      style: {
        ...cursorPosition.showAbove ? {
          bottom: `${window.innerHeight - (((_a = inputRef.current) == null ? void 0 : _a.getBoundingClientRect().top) || 0) - cursorPosition.top}px`,
          top: "auto"
        } : {
          top: `${(((_b = inputRef.current) == null ? void 0 : _b.getBoundingClientRect().top) || 0) + cursorPosition.top}px`
        }
      },
      ref: listRef,
      children: filteredUsers.map((user, index) => u6(
        "li",
        {
          onClick: () => insertMention(user),
          className: (0, import_classnames15.default)(
            "collab-thread-body--input--textarea--suggestionsList--item",
            collabStyles()["collab-thread-body--input--textarea--suggestionsList--item"],
            index === selectedIndex ? collabStyles()["collab-thread-body--input--textarea--suggestionsList--item-selected"] : ""
          ),
          ref: (el) => itemRefs.current[index] = el,
          onKeyDown: (e6) => e6.key === "Enter" ? insertMention(user) : handleKeyDown(e6),
          tabIndex: -1,
          "aria-selected": index === selectedIndex,
          children: user.display === user.email ? user.display.length > 20 ? u6(Tooltip_default, { content: user.display || "", children: (user.display || "").substring(0, 18) + "..." }) : user.display : u6(
            Tooltip_default,
            {
              content: user.display + " - " + user.email || "",
              children: user.display.length > 20 ? (user.display || "").substring(0, 18) + "..." : user.display
            }
          )
        },
        user.uid
      ))
    }
  );
};
var CommentTextArea = wn.memo(
  ({ userState, handleOnSaveRef, comment, onClose }) => {
    const {
      state,
      error,
      showSuggestions,
      cursorPosition,
      selectedIndex,
      filteredUsers,
      inputRef,
      listRef,
      itemRefs,
      handleInputChange,
      handleKeyDown,
      handleSubmit,
      insertMention,
      maxMessageLength: maxMessageLength2
    } = useCommentTextArea(userState, comment, onClose);
    const onChangeHandler = (event) => handleInputChange(event);
    const onKeyDownHandler = (event) => handleKeyDown(event);
    _2(() => {
      handleOnSaveRef.current = handleSubmit;
    }, [handleSubmit, handleOnSaveRef]);
    return u6(
      "div",
      {
        className: (0, import_classnames15.default)(
          "collab-thread-body--input--wrapper",
          collabStyles()["collab-thread-body--input--wrapper"]
        ),
        children: [
          u6(
            "div",
            {
              className: (0, import_classnames15.default)(
                "collab-thread-body--input",
                collabStyles()["collab-thread-body--input"]
              ),
              children: u6(
                "div",
                {
                  className: (0, import_classnames15.default)(
                    "collab-thread-body--input--textarea--wrapper",
                    collabStyles()["collab-thread-body--input--textarea--wrapper"]
                  ),
                  children: [
                    u6(
                      "textarea",
                      {
                        name: "collab-thread-body--input--textarea",
                        id: "collab-thread-body--input--textarea",
                        rows: 1,
                        className: (0, import_classnames15.default)(
                          "collab-thread-body--input--textarea",
                          collabStyles()["collab-thread-body--input--textarea"]
                        ),
                        value: state.message,
                        onChange: onChangeHandler,
                        onKeyDown: onKeyDownHandler,
                        maxLength: maxMessageLength2,
                        placeholder: "Enter a comment or tag others using “@”",
                        ref: inputRef
                      }
                    ),
                    showSuggestions && u6(
                      MentionSuggestionsList,
                      {
                        filteredUsers,
                        selectedIndex,
                        cursorPosition,
                        inputRef,
                        listRef,
                        itemRefs,
                        insertMention,
                        handleKeyDown
                      }
                    )
                  ]
                }
              )
            }
          ),
          u6(
            "div",
            {
              className: (0, import_classnames15.default)(
                "collab-thread-input-indicator--wrapper",
                "flex-v-center",
                collabStyles()["collab-thread-input-indicator--wrapper"],
                flexAlignCenter
              ),
              children: [
                u6(ErrorIndicator, { errorMessage: error.message }),
                u6(
                  CharacterCounter,
                  {
                    currentLength: state.message.length,
                    maxLength: maxMessageLength2
                  }
                )
              ]
            }
          )
        ]
      }
    );
  }
);
var CommentTextArea_default = CommentTextArea;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/Collab/ThreadPopup/CommentActionBar.js
var import_classnames16 = __toESM(require_classnames(), 1);
var CommentActionBar = ({
  mode,
  commentUser,
  currentUser,
  commentUID
}) => {
  const { setThreadState, onDeleteComment, activeThread, onDeleteThread } = P2(ThreadProvider);
  const [isDeleting, setIsDeleting] = p2(false);
  const setEditComment = (uid) => {
    setThreadState((prevState) => ({
      ...prevState,
      editComment: uid || ""
    }));
  };
  const handleCancel = () => {
    setEditComment(null);
  };
  const handleCommentEdit = () => {
    if (commentUID) {
      setEditComment(commentUID);
    }
  };
  const handleCommentDelete = async () => {
    if (!commentUID || isDeleting) {
      return;
    }
    setIsDeleting(true);
    try {
      const deleteResponse = await onDeleteComment({
        threadUid: activeThread == null ? void 0 : activeThread._id,
        commentUid: commentUID
      });
      setThreadState((prevState) => {
        const updatedComments = prevState.comments.filter(
          (comment) => comment._id !== commentUID
        );
        if (prevState.commentCount - 1 === 0) {
          onDeleteThread({ threadUid: activeThread == null ? void 0 : activeThread._id });
        }
        return {
          ...prevState,
          comments: updatedComments,
          commentCount: prevState.commentCount - 1
        };
      });
    } catch (error) {
    } finally {
      setIsDeleting(false);
    }
  };
  if (mode === "edit" && commentUID) {
    return u6(
      "div",
      {
        className: (0, import_classnames16.default)(
          "collab-thread-comment-action--wrapper",
          collabStyles()["collab-thread-comment-action--wrapper"]
        ),
        children: u6(
          Icon_default,
          {
            icon: "Cancel",
            withTooltip: true,
            tooltipContent: "Cancel",
            onClick: handleCancel
          }
        )
      }
    );
  }
  if ((commentUser == null ? void 0 : commentUser.uid) !== (currentUser == null ? void 0 : currentUser.uid) || !commentUID) {
    return null;
  }
  return u6(
    "div",
    {
      className: (0, import_classnames16.default)(
        "collab-thread-comment-action--wrapper",
        collabStyles()["collab-thread-comment-action--wrapper"]
      ),
      "data-testid": "collab-thread-comment-action--wrapper",
      children: [
        u6(
          Icon_default,
          {
            icon: "Edit",
            tooltipContent: "Edit",
            withTooltip: true,
            testId: "collab-thread-comment-edit",
            onClick: handleCommentEdit
          }
        ),
        u6(
          Icon_default,
          {
            icon: "Delete",
            tooltipContent: "Delete",
            withTooltip: true,
            testId: "collab-thread-comment-delete",
            onClick: handleCommentDelete,
            disabled: isDeleting
          }
        )
      ]
    }
  );
};
var CommentActionBar_default = CommentActionBar;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/Collab/ThreadPopup/CommentResolvedText.js
var import_classnames17 = __toESM(require_classnames(), 1);
var CommentResolvedText = ({ comment, userState }) => {
  const sanitizedText = q2(() => {
    return getMessageWithDisplayName(comment, userState, "html") ?? "";
  }, [comment.message, userState.userMap, comment.toUsers]);
  return u6(
    "div",
    {
      "data-testid": "collab-thread-comment--message",
      className: (0, import_classnames17.default)(
        "collab-thread-comment--message",
        collabStyles()["collab-thread-comment--message"]
      ),
      dangerouslySetInnerHTML: { __html: sanitizedText }
    }
  );
};
var CommentResolvedText_default = CommentResolvedText;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/Collab/Avatar/Avatar.js
var import_classnames18 = __toESM(require_classnames(), 1);
function getInitials(name) {
  if (!name) return "";
  const nameParts = name.trim().split(" ");
  if (nameParts.length === 1) {
    return name.substring(0, 2);
  }
  return nameParts[0][0] + nameParts[nameParts.length - 1][0];
}
function DisplayAvatarContent({
  type,
  avatar,
  initials
}) {
  if (type === "image" && avatar.image) {
    return u6(
      "img",
      {
        "data-testid": "collab-avatar-image",
        src: avatar.image,
        alt: avatar.name,
        className: (0, import_classnames18.default)(
          "collab-avatar__image",
          collabStyles()["collab-avatar__image"]
        )
      }
    );
  }
  return u6("span", { className: `collab-avatar-link__initials`, children: initials });
}
function Avatar({
  avatar,
  type = "text",
  testId = "collab-avatar"
}) {
  const initials = getInitials(avatar.name);
  return u6("div", { "data-testid": testId, children: u6(
    Tooltip_default,
    {
      content: avatar.name || avatar.email || "",
      position: "bottom",
      children: u6(
        "div",
        {
          className: (0, import_classnames18.default)(
            "collab-avatar",
            "collab-avatar--single",
            "flex-v-center",
            collabStyles()["collab-avatar"],
            collabStyles()["collab-avatar--single"],
            flexAlignCenter
          ),
          children: u6(
            "span",
            {
              className: (0, import_classnames18.default)(
                "collab-avatar__link",
                "flex-v-center",
                collabStyles()["collab-avatar__link"],
                flexAlignCenter
              ),
              children: u6(
                DisplayAvatarContent,
                {
                  type,
                  avatar,
                  initials
                }
              )
            }
          )
        }
      )
    }
  ) });
}
var Avatar_default = Avatar;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/Collab/ThreadPopup/CommentCard.js
var import_classnames19 = __toESM(require_classnames(), 1);
var formatCommentDate = (comment) => {
  return comment ? formatDate(comment.updatedAt || comment.createdAt) : "";
};
var CommentCard = ({
  userState,
  comment,
  onClose,
  handleOnSaveRef,
  mode
}) => {
  const [commentUser, setCommentUser] = p2(null);
  const [isHovered, setIsHovered] = p2(false);
  _2(() => {
    setCommentUser(
      comment ? userState.userMap[comment.createdBy] : userState.currentUser
    );
  }, [comment, userState]);
  const formattedDate = q2(() => formatCommentDate(comment), [comment]);
  if (!commentUser) {
    return u6(ThreadBody_default, {}, "collab-thread-body--comment-loader");
  }
  return u6(
    "div",
    {
      className: (0, import_classnames19.default)(
        "collab-thread-comment--wrapper",
        collabStyles()["collab-thread-comment--wrapper"]
      ),
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      children: [
        u6(
          "div",
          {
            className: (0, import_classnames19.default)(
              "collab-thread-comment--user-details",
              "flex-v-center",
              collabStyles()["collab-thread-comment--user-details"],
              flexAlignCenter
            ),
            children: [
              u6(
                Avatar_default,
                {
                  avatar: {
                    name: getUserName(commentUser),
                    id: commentUser.uid
                  }
                }
              ),
              u6(
                "div",
                {
                  className: (0, import_classnames19.default)(
                    "collab-thread-comment--user-details__text",
                    collabStyles()["collab-thread-comment--user-details__text"]
                  ),
                  children: [
                    u6(
                      "div",
                      {
                        className: (0, import_classnames19.default)(
                          "collab-thread-comment--user-name",
                          collabStyles()["collab-thread-comment--user-name"]
                        ),
                        children: getUserName(commentUser)
                      }
                    ),
                    comment && u6(
                      "div",
                      {
                        className: (0, import_classnames19.default)(
                          "collab-thread-comment--time-details",
                          collabStyles()["collab-thread-comment--time-details"]
                        ),
                        children: formattedDate
                      }
                    )
                  ]
                }
              ),
              isHovered && u6(
                CommentActionBar_default,
                {
                  mode,
                  commentUser,
                  currentUser: userState.currentUser,
                  commentUID: comment == null ? void 0 : comment._id
                }
              )
            ]
          }
        ),
        mode === "edit" ? u6(
          CommentTextArea_default,
          {
            onClose,
            userState,
            handleOnSaveRef,
            comment
          }
        ) : comment && u6(
          CommentResolvedText_default,
          {
            comment,
            userState
          }
        )
      ]
    }
  );
};
var CommentCard_default = CommentCard;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/Collab/ThreadPopup/ThreadBody.js
var import_classnames20 = __toESM(require_classnames(), 1);
var Loader = ({ isLoading, children }) => {
  return isLoading ? u6(ThreadBody_default, {}, "collab-thread-body--comment-loader") : u6(g, { children });
};
var CommentList = ({
  comments,
  userState,
  onClose,
  handleOnSaveRef,
  editComment,
  fetchingMore
}) => {
  return u6(
    "div",
    {
      className: (0, import_classnames20.default)(
        "collab-thread-comment--list",
        collabStyles()["collab-thread-comment--list"]
      ),
      id: "collab-thread-comment--list",
      children: [
        comments == null ? void 0 : comments.map((comment) => u6(g, { children: [
          u6(
            "div",
            {
              className: (0, import_classnames20.default)(
                "collab-thread-comment-seperator",
                "flex-v-center",
                collabStyles()["collab-thread-comment-seperator"],
                flexAlignCenter
              ),
              children: u6(
                "svg",
                {
                  class: "collab-thread-comment-seperator--svg",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "100%",
                  height: "2",
                  viewBox: "0 0 332 2",
                  fill: "none",
                  preserveAspectRatio: "none",
                  children: u6(
                    "path",
                    {
                      d: "M0 1H332",
                      stroke: "#DDE3EE",
                      strokeDasharray: "2 2"
                    }
                  )
                }
              )
            }
          ),
          u6(
            CommentCard_default,
            {
              userState,
              comment,
              onClose,
              handleOnSaveRef,
              mode: editComment === comment._id ? "edit" : "view"
            }
          )
        ] })),
        fetchingMore && u6(ThreadBody_default, {})
      ]
    }
  );
};
var ThreadBody = wn.memo(
  ({
    handleOnSaveRef,
    onClose,
    userState,
    isLoading,
    comments,
    fetchingMore,
    editComment
  }) => {
    return u6(
      "div",
      {
        className: (0, import_classnames20.default)(
          "collab-thread-body--wrapper",
          collabStyles()["collab-thread-body--wrapper"]
        ),
        children: [
          u6(Loader, { isLoading, children: u6(
            CommentList,
            {
              comments,
              userState,
              onClose,
              handleOnSaveRef,
              editComment,
              fetchingMore
            }
          ) }),
          editComment === "" && u6(
            CommentCard_default,
            {
              userState,
              comment: null,
              onClose,
              handleOnSaveRef,
              mode: "edit"
            }
          )
        ]
      }
    );
  }
);
var ThreadBody_default2 = ThreadBody;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/hooks/use-infinite-scroll/useInfiniteScroll.js
var scrollOffset = 3;
var useInfiniteScroll = ({
  containerId,
  isFetching,
  canFetchMore,
  loadMore,
  offset: offset3,
  limit
}) => {
  const [fetchingState, setFetchingState] = p2(isFetching);
  _2(() => {
    const commentListContainer = document.getElementById(containerId);
    if (!commentListContainer) return;
    const scrollEvent = async () => {
      if (commentListContainer.scrollHeight + commentListContainer.scrollTop - commentListContainer.clientHeight < scrollOffset && // Adjust this offset if needed
      !fetchingState && canFetchMore) {
        setFetchingState(true);
        try {
          await loadMore(offset3, limit);
        } finally {
          setFetchingState(false);
        }
      }
    };
    commentListContainer.addEventListener("scroll", scrollEvent, true);
    return () => {
      commentListContainer.removeEventListener(
        "scroll",
        scrollEvent,
        true
      );
    };
  }, [containerId, fetchingState, canFetchMore, loadMore, offset3, limit]);
  return fetchingState;
};
var useInfiniteScroll_default = useInfiniteScroll;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/Collab/ThreadPopup/index.js
var import_classnames21 = __toESM(require_classnames(), 1);
var initialErrorState = {
  hasError: false,
  message: ""
};
var ThreadPopup = wn.memo(
  ({
    onCreateComment,
    onEditComment,
    onDeleteComment,
    onDeleteThread,
    onClose,
    onResolve,
    inviteMetadata,
    loadMoreMessages,
    activeThread,
    setActiveThread,
    createNewThread
  }) => {
    const handleOnSaveRef = F2(null);
    const [state, setState] = p2({
      isLoading: false,
      commentCount: 0,
      comments: [],
      editComment: "",
      userState: {
        mentionsList: [],
        currentUser: inviteMetadata == null ? void 0 : inviteMetadata.currentUser,
        userMap: {}
      }
    });
    const [error, setError] = p2(initialErrorState);
    const isFetchingMore = useInfiniteScroll_default({
      containerId: "collab-thread-comment--list",
      isFetching: false,
      canFetchMore: state.commentCount > state.comments.length,
      loadMore: async (offset3, limit) => {
        try {
          let payload = {
            offset: offset3,
            limit,
            threadUid: activeThread == null ? void 0 : activeThread._id
          };
          const res = await loadMoreMessages(payload);
          setState((prevState) => ({
            ...prevState,
            commentCount: res.count,
            comments: [...prevState.comments, ...res.comments]
          }));
        } catch (error2) {
          console.error(error2);
        }
      },
      offset: state.comments.length,
      limit: 10
    });
    _2(() => {
      var _a;
      const userList = [];
      const userMap = {};
      (_a = inviteMetadata == null ? void 0 : inviteMetadata.users) == null ? void 0 : _a.forEach((user) => {
        if (user) {
          const userName = getUserName(user);
          userList.push({
            display: userName,
            email: user.email,
            uid: user.uid
          });
          userMap[user.uid] = { ...user, display: userName };
        }
      });
      setState((prevState) => ({
        ...prevState,
        userState: {
          mentionsList: userList,
          userMap,
          currentUser: inviteMetadata == null ? void 0 : inviteMetadata.currentUser
        }
      }));
    }, [inviteMetadata]);
    _2(() => {
      if (!activeThread) {
        setState((prevState) => ({ ...prevState, isLoading: true }));
        return;
      }
      if ((activeThread == null ? void 0 : activeThread._id) == "new") {
        return;
      }
      const fetchInitialMessages = async () => {
        setState((prevState) => ({ ...prevState, isLoading: true }));
        try {
          let payload = {
            offset: 0,
            limit: 10,
            threadUid: activeThread == null ? void 0 : activeThread._id
          };
          const res = await loadMoreMessages(payload);
          setState((prevState) => ({
            ...prevState,
            isLoading: false,
            commentCount: res.count,
            comments: res.comments
          }));
        } catch (error2) {
          setState((prevState) => ({
            ...prevState,
            isLoading: false
          }));
          console.error(error2);
        }
      };
      fetchInitialMessages();
    }, []);
    const contextValue = q2(
      () => ({
        inviteMetadata,
        userState: state.userState,
        commentCount: state.commentCount,
        setThreadState: setState,
        error,
        setError,
        onCreateComment,
        onEditComment,
        onDeleteComment,
        onDeleteThread,
        onClose,
        editComment: state.editComment,
        activeThread,
        setActiveThread,
        createNewThread
      }),
      [
        inviteMetadata,
        state.userState,
        state.commentCount,
        error,
        state.editComment,
        activeThread
      ]
    );
    return u6(ThreadProvider.Provider, { value: contextValue, children: u6(
      "div",
      {
        className: (0, import_classnames21.default)(
          "collab-thread--wrapper",
          collabStyles()["collab-thread--wrapper"]
        ),
        children: [
          u6(
            ThreadHeader_default,
            {
              onClose,
              onResolve,
              displayResolve: !!activeThread && (activeThread == null ? void 0 : activeThread._id) !== "new",
              commentCount: state.commentCount,
              activeThread
            }
          ),
          u6(
            "div",
            {
              class: (0, import_classnames21.default)(
                "collab-thread--container",
                collabStyles()["collab-thread--container"]
              ),
              children: [
                u6(
                  ThreadBody_default2,
                  {
                    handleOnSaveRef,
                    onClose,
                    userState: state.userState,
                    isLoading: state.isLoading,
                    comments: state.comments,
                    fetchingMore: isFetchingMore,
                    editComment: state.editComment
                  }
                ),
                u6(
                  ThreadFooter_default,
                  {
                    onClose,
                    handleOnSaveRef,
                    isDisabled: error.hasError,
                    editComment: state.editComment
                  }
                )
              ]
            }
          )
        ]
      }
    ) });
  }
);
var ThreadPopup_default = ThreadPopup;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/hooks/useCollabIndicator.js
var useCollabIndicator = ({
  newThread,
  thread
}) => {
  const buttonRef = F2(null);
  const popupRef = F2(null);
  const config2 = configManager_default.get();
  const [showPopup, setShowPopup] = p2(newThread || false);
  const [activeThread, setActiveThread] = p2(() => {
    if (newThread) return { _id: "new" };
    return thread || { _id: "new" };
  });
  const updatePopupPosition = () => {
    if (buttonRef.current && popupRef.current) {
      calculatePopupPosition(buttonRef.current, popupRef.current);
    }
  };
  _2(() => {
    if (!showPopup) return;
    updatePopupPosition();
  }, [showPopup]);
  _2(() => {
    const handleTogglePopup = (event) => {
      var _a, _b, _c;
      const { threadUid, action } = event.detail;
      const thread2 = document.querySelector(
        `div[threaduid='${threadUid}']`
      );
      handleEmptyThreads();
      const closestDiv = (_a = buttonRef.current) == null ? void 0 : _a.closest("div[field-path]");
      if (closestDiv) {
        closestDiv.style.zIndex = "999";
      }
      setShowPopup(false);
      if (action === "open" && thread2 && thread2.contains(buttonRef.current)) {
        setShowPopup(true);
        const closestDiv2 = (_b = buttonRef.current) == null ? void 0 : _b.closest("div[field-path]");
        thread2.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
        if (closestDiv2) {
          closestDiv2.style.zIndex = "1000";
        }
        if (((_c = config2 == null ? void 0 : config2.collab) == null ? void 0 : _c.isFeedbackMode) === true) {
          configManager_default.set("collab.isFeedbackMode", false);
        }
      }
    };
    document.addEventListener("toggleCollabPopup", handleTogglePopup);
    return () => {
      document.removeEventListener(
        "toggleCollabPopup",
        handleTogglePopup
      );
    };
  }, []);
  const togglePopup = () => {
    var _a, _b, _c;
    if (!showPopup) {
      toggleCollabPopup({ threadUid: "", action: "close" });
      setShowPopup(true);
      const closestDiv = (_a = buttonRef.current) == null ? void 0 : _a.closest("div[field-path]");
      if (closestDiv) {
        closestDiv.style.zIndex = "1000";
      }
    } else {
      setShowPopup(false);
      const closestDiv = (_b = buttonRef.current) == null ? void 0 : _b.closest("div[field-path]");
      if (!(closestDiv == null ? void 0 : closestDiv.hasAttribute("threaduid"))) closestDiv == null ? void 0 : closestDiv.remove();
      if (((_c = config2 == null ? void 0 : config2.collab) == null ? void 0 : _c.isFeedbackMode) === false) {
        configManager_default.set("collab.isFeedbackMode", true);
      }
    }
  };
  return {
    buttonRef,
    popupRef,
    showPopup,
    setShowPopup,
    activeThread,
    setActiveThread,
    togglePopup
  };
};

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/hooks/useCollabOperations.js
var useCollabOperations = () => {
  const createComment = async (payload) => {
    var _a;
    const data = await ((_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send(
      VisualBuilderPostMessageEvents.COLLAB_CREATE_COMMENT,
      payload
    ));
    if (!data) throw new Error("Failed to create comment");
    return data;
  };
  const editComment = async (payload) => {
    var _a;
    const data = await ((_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send(
      VisualBuilderPostMessageEvents.COLLAB_EDIT_COMMENT,
      payload
    ));
    if (!data) throw new Error("Failed to update comment");
    return data;
  };
  const deleteComment = async (payload) => {
    var _a;
    const data = await ((_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send(
      VisualBuilderPostMessageEvents.COLLAB_DELETE_COMMENT,
      payload
    ));
    if (!data) throw new Error("Failed to delete comment");
    return data;
  };
  const resolveThread = async (payload) => {
    var _a;
    const data = await ((_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send(
      VisualBuilderPostMessageEvents.COLLAB_RESOLVE_THREAD,
      payload
    ));
    if (!data) throw new Error("Failed to resolve thread");
    return data;
  };
  const fetchComments = async (payload) => {
    var _a;
    return await ((_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send(
      VisualBuilderPostMessageEvents.COLLAB_FETCH_COMMENTS,
      payload
    ));
  };
  const createNewThread = async (buttonRef, inviteMetadata) => {
    var _a;
    if (!buttonRef.current) {
      throw new Error("Button ref not found");
    }
    const parentDiv = buttonRef.current.closest("div[field-path]");
    if (!parentDiv) {
      throw new Error("Count not find parent div");
    }
    const fieldPath = parentDiv.getAttribute("field-path");
    const relative = parentDiv.getAttribute("relative");
    if (!fieldPath || !relative)
      throw new Error("Invalid field attributes");
    const match = relative == null ? void 0 : relative.match(/x: ([\d.]+), y: ([\d.]+)/);
    if (!match) {
      throw new Error("Invalid relative attribute");
    }
    const relativeX = parseFloat(match[1]);
    const relativeY = parseFloat(match[2]);
    const payload = {
      elementXPath: fieldPath,
      position: { x: relativeX, y: relativeY },
      author: inviteMetadata.currentUser.email,
      pageRoute: normalizePath(window.location.pathname),
      inviteUid: inviteMetadata.inviteUid,
      createdBy: inviteMetadata.currentUser.uid
    };
    const data = await ((_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send(
      VisualBuilderPostMessageEvents.COLLAB_CREATE_THREAD,
      payload
    ));
    parentDiv.setAttribute("threaduid", data.thread._id);
    return data;
  };
  const deleteThread = async (payload) => {
    var _a, _b;
    const data = await ((_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send(
      VisualBuilderPostMessageEvents.COLLAB_DELETE_THREAD,
      payload
    ));
    if (!data) throw new Error("Failed to delete thread");
    removeCollabIcon(payload.threadUid);
    const config2 = configManager_default.get();
    if (((_b = config2 == null ? void 0 : config2.collab) == null ? void 0 : _b.isFeedbackMode) === false) {
      configManager_default.set("collab.isFeedbackMode", true);
    }
    return data;
  };
  return {
    createComment,
    editComment,
    deleteComment,
    resolveThread,
    fetchComments,
    createNewThread,
    deleteThread
  };
};

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/Collab/CollabIndicator.js
var CollabIndicator = (props) => {
  var _a, _b;
  const config2 = configManager_default.get();
  const [inviteMetadata, setInviteMetadata] = p2(
    (_a = config2 == null ? void 0 : config2.collab) == null ? void 0 : _a.inviteMetadata
  );
  _2(() => {
    var _a2;
    setInviteMetadata((_a2 = config2 == null ? void 0 : config2.collab) == null ? void 0 : _a2.inviteMetadata);
  }, [(_b = config2 == null ? void 0 : config2.collab) == null ? void 0 : _b.inviteMetadata]);
  const {
    buttonRef,
    popupRef,
    showPopup,
    setShowPopup,
    activeThread,
    setActiveThread,
    togglePopup
  } = useCollabIndicator({
    newThread: props.newThread ?? false,
    thread: props.activeThread || { _id: "new" }
  });
  const {
    createComment,
    editComment,
    deleteComment,
    resolveThread,
    fetchComments,
    createNewThread,
    deleteThread
  } = useCollabOperations();
  const handleClose = (isResolved = false) => {
    var _a2, _b2, _c;
    if (isResolved) {
      (_b2 = (_a2 = buttonRef.current) == null ? void 0 : _a2.closest("div[field-path]")) == null ? void 0 : _b2.remove();
    }
    handleEmptyThreads();
    setShowPopup(false);
    if (((_c = config2 == null ? void 0 : config2.collab) == null ? void 0 : _c.isFeedbackMode) === false) {
      configManager_default.set("collab.isFeedbackMode", true);
    }
  };
  const IconComponent = iconComponents["Indicator"];
  return u6(g, { children: [
    u6(
      "button",
      {
        ref: buttonRef,
        "data-testid": "collab-indicator",
        className: (0, import_classnames22.default)(
          "collab-indicator",
          collabStyles()["collab-indicator"]
        ),
        onClick: togglePopup,
        children: u6(IconComponent, { active: !showPopup })
      }
    ),
    showPopup && u6(
      "div",
      {
        ref: popupRef,
        className: (0, import_classnames22.default)(
          "collab-popup",
          collabStyles()["collab-popup"]
        ),
        "data-testid": "collab-popup",
        children: u6(
          ThreadPopup_default,
          {
            onCreateComment: createComment,
            onEditComment: editComment,
            onDeleteComment: deleteComment,
            onClose: handleClose,
            onResolve: resolveThread,
            inviteMetadata,
            loadMoreMessages: fetchComments,
            activeThread,
            setActiveThread,
            onDeleteThread: deleteThread,
            createNewThread: () => createNewThread(buttonRef, inviteMetadata)
          }
        )
      }
    )
  ] });
};
var CollabIndicator_default = CollabIndicator;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/generators/generateThread.js
var popupTopOffset = 43;
var popupLeftOffset = 9;
var hiddenClass = u5`
    display: none;
`;
function createPopupContainer(resolvedXPath, relativeX, relativeY, top, left, updateConfig, hidden, payload) {
  const popupContainer = document.createElement("div");
  popupContainer.setAttribute("field-path", resolvedXPath);
  popupContainer.setAttribute("relative", `x: ${relativeX}, y: ${relativeY}`);
  popupContainer.style.position = "absolute";
  popupContainer.style.top = `${top - popupTopOffset}px`;
  popupContainer.style.left = `${left - popupLeftOffset}px`;
  popupContainer.style.zIndex = updateConfig ? "1000" : "999";
  popupContainer.style.cursor = "pointer";
  popupContainer.className = "collab-thread";
  if (hidden) popupContainer.classList.add(hiddenClass);
  if (payload == null ? void 0 : payload._id) popupContainer.setAttribute("threaduid", payload._id);
  return popupContainer;
}
function appendPopupContainer(popupContainer) {
  const visualBuilderContainer = document.querySelector(
    ".visual-builder__container"
  );
  if (visualBuilderContainer) {
    let highlightCommentWrapper = visualBuilderContainer.querySelector(
      ".visual-builder__collab-wrapper"
    );
    if (!highlightCommentWrapper) {
      highlightCommentWrapper = document.createElement("div");
      highlightCommentWrapper.className = "visual-builder__collab-wrapper";
      visualBuilderContainer.appendChild(highlightCommentWrapper);
    }
    highlightCommentWrapper.appendChild(popupContainer);
  } else {
    document.body.appendChild(popupContainer);
  }
}
function generateThread(payload, options = {}) {
  var _a, _b, _c;
  const {
    isNewThread = false,
    updateConfig = false,
    hidden = false
  } = options;
  const config2 = (_b = (_a = configManager_default).get) == null ? void 0 : _b.call(_a);
  let relativeX, relativeY, resolvedXPath;
  if (isNewThread) {
    ({ relativeX, relativeY, xpath: resolvedXPath } = payload);
  } else {
    const { position, elementXPath } = payload;
    ({ x: relativeX, y: relativeY } = position);
    resolvedXPath = elementXPath;
  }
  if (payload == null ? void 0 : payload._id) {
    const existingThread = document.querySelector(
      `div[threaduid='${payload._id}']`
    );
    if (existingThread) {
      return void 0;
    }
  }
  const element = getElementByXpath(resolvedXPath);
  if (!element) {
    return payload._id;
  }
  const rect = element.getBoundingClientRect();
  let top = rect.top + window.scrollY + relativeY * rect.height;
  let left = rect.left + window.scrollX + relativeX * rect.width;
  const adjustedPosition = adjustPositionToViewport({ top, left });
  top = adjustedPosition.top;
  left = adjustedPosition.left;
  const popupContainer = createPopupContainer(
    resolvedXPath,
    relativeX,
    relativeY,
    top,
    left,
    updateConfig,
    hidden,
    payload
  );
  if (updateConfig && ((_c = config2 == null ? void 0 : config2.collab) == null ? void 0 : _c.enable)) {
    if (config2 == null ? void 0 : config2.collab.isFeedbackMode) {
      configManager_default.set("collab.isFeedbackMode", false);
    }
  }
  B(
    u6(
      CollabIndicator_default,
      {
        activeThread: !isNewThread ? payload : void 0,
        newThread: isNewThread
      }
    ),
    popupContainer
  );
  appendPopupContainer(popupContainer);
  return void 0;
}
function updateCollabIconPosition() {
  var _a, _b, _c;
  const icons = document.querySelectorAll(
    ".visual-builder__collab-wrapper .collab-thread"
  );
  const config2 = (_b = (_a = configManager_default).get) == null ? void 0 : _b.call(_a);
  if ((_c = config2 == null ? void 0 : config2.collab) == null ? void 0 : _c.pauseFeedback) return;
  icons.forEach((icon) => {
    if (!(icon instanceof HTMLElement)) return;
    const path = icon.getAttribute("field-path");
    const relative = icon.getAttribute("relative");
    if (!path || !relative) {
      console.error("Missing field-path or relative attribute.");
      return;
    }
    const match = relative.match(/x: ([\d.]+), y: ([\d.]+)/);
    if (!match) {
      console.error("Invalid relative attribute format.");
      return;
    }
    const relativeX = parseFloat(match[1]);
    const relativeY = parseFloat(match[2]);
    const targetElement = getElementByXpath(path);
    if (!targetElement) {
      icon.classList.add(hiddenClass);
      return;
    }
    const rect = targetElement.getBoundingClientRect();
    let left = rect.left + rect.width * relativeX + window.scrollX;
    let top = rect.top + rect.height * relativeY + window.scrollY;
    const adjustedPosition = adjustPositionToViewport({ top, left });
    top = adjustedPosition.top;
    left = adjustedPosition.left;
    icon.style.top = `${top - popupTopOffset}px`;
    icon.style.left = `${left - popupLeftOffset}px`;
    icon.classList.remove(hiddenClass);
  });
}
function updatePopupPositions() {
  var _a, _b, _c;
  const popups = document.querySelectorAll(
    ".visual-builder__collab-wrapper .collab-thread .collab-popup"
  );
  const config2 = (_b = (_a = configManager_default).get) == null ? void 0 : _b.call(_a);
  if ((_c = config2 == null ? void 0 : config2.collab) == null ? void 0 : _c.pauseFeedback) return;
  popups.forEach((popup) => {
    if (popup && popup instanceof HTMLElement) {
      const parent2 = popup.closest(
        ".visual-builder__collab-wrapper .collab-thread"
      );
      if (!parent2) {
        console.error(
          "Parent element with class 'collab-thread' not found."
        );
        return;
      }
      const button = parent2.querySelector(
        ".visual-builder__collab-wrapper .collab-thread .collab-indicator"
      );
      if (!button || !(button instanceof HTMLElement)) {
        console.error(
          "Button with class 'collab-indicator' not found."
        );
        return;
      }
      calculatePopupPosition(button, popup);
    }
  });
}
function updateSuggestionListPosition() {
  const suggestionLists = document.querySelectorAll(
    ".collab-thread-body--input--textarea--suggestionsList"
  );
  if (!suggestionLists.length) return;
  suggestionLists.forEach((list) => {
    if (!(list instanceof HTMLElement)) return;
    const textarea = document.querySelector(
      ".collab-thread-body--input--textarea"
    );
    if (!textarea) return;
    const positionData = list.getAttribute("data-position");
    const parsedData = positionData ? JSON.parse(positionData) : null;
    const showAbove = window.getComputedStyle(list).bottom !== "auto";
    const textareaRect = textarea.getBoundingClientRect();
    if (showAbove) {
      const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight) || 20;
      const paddingTop = parseInt(window.getComputedStyle(textarea).paddingTop) || 8;
      const cursorLineY = (parsedData == null ? void 0 : parsedData.cursorLineY) || paddingTop + lineHeight;
      list.style.position = "fixed";
      list.style.bottom = `${window.innerHeight - textareaRect.top - cursorLineY + lineHeight}px`;
      list.style.top = "auto";
    } else {
      const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight) || 20;
      const paddingTop = parseInt(window.getComputedStyle(textarea).paddingTop) || 8;
      const cursorLineY = (parsedData == null ? void 0 : parsedData.cursorLineY) || paddingTop + lineHeight;
      list.style.position = "fixed";
      list.style.top = `${textareaRect.top + cursorLineY}px`;
      list.style.bottom = "auto";
    }
    if (!positionData && textareaRect) {
      const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight) || 20;
      const paddingTop = parseInt(window.getComputedStyle(textarea).paddingTop) || 8;
      const positionInfo = {
        showAbove,
        cursorLineY: paddingTop + lineHeight
      };
      list.setAttribute("data-position", JSON.stringify(positionInfo));
    }
    const listRect = list.getBoundingClientRect();
    if (!showAbove && listRect.bottom > window.innerHeight) {
      const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight) || 20;
      const paddingTop = parseInt(window.getComputedStyle(textarea).paddingTop) || 8;
      const cursorLineY = (parsedData == null ? void 0 : parsedData.cursorLineY) || paddingTop + lineHeight;
      list.style.bottom = `${window.innerHeight - textareaRect.top - cursorLineY + lineHeight}px`;
      list.style.top = "auto";
      if (positionData) {
        const updatedData = JSON.parse(positionData);
        updatedData.showAbove = true;
        list.setAttribute("data-position", JSON.stringify(updatedData));
      }
    } else if (showAbove && listRect.top < 0) {
      const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight) || 20;
      const paddingTop = parseInt(window.getComputedStyle(textarea).paddingTop) || 8;
      const cursorLineY = (parsedData == null ? void 0 : parsedData.cursorLineY) || paddingTop + lineHeight;
      list.style.top = `${textareaRect.top + cursorLineY}px`;
      list.style.bottom = "auto";
      if (positionData) {
        const updatedData = JSON.parse(positionData);
        updatedData.showAbove = false;
        list.setAttribute("data-position", JSON.stringify(updatedData));
      }
    }
  });
}
function calculatePopupPosition(button, popup) {
  const buttonRect = button.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;
  let popupHeight = popup.offsetHeight || 198;
  let popupWidth = popup.offsetWidth || 334;
  const spaceAbove = buttonRect.top;
  const spaceBelow = viewportHeight - buttonRect.bottom;
  let top, left;
  if (spaceAbove >= popupHeight) {
    top = buttonRect.top - popupHeight - 8;
  } else if (spaceBelow >= popupHeight) {
    top = buttonRect.bottom + 8;
  } else {
    top = spaceBelow > spaceAbove ? buttonRect.bottom + 8 : Math.max(buttonRect.top - popupHeight - 8, 0);
  }
  left = buttonRect.left + buttonRect.width / 2 - popupWidth / 2;
  top = Math.max(top, 0);
  left = Math.max(left, 0);
  left = Math.min(left, viewportWidth - popupWidth);
  popup.style.top = `${top}px`;
  popup.style.left = `${left}px`;
  requestAnimationFrame(() => {
    const newPopupHeight = popup.offsetHeight;
    if (newPopupHeight !== popupHeight) {
      calculatePopupPosition(button, popup);
    }
  });
}
function removeAllCollabIcons() {
  const icons = document.querySelectorAll(
    ".visual-builder__collab-wrapper .collab-thread"
  );
  icons == null ? void 0 : icons.forEach((icon) => icon == null ? void 0 : icon.remove());
}
function hideAllCollabIcons() {
  const icons = document.querySelectorAll(
    ".visual-builder__collab-wrapper .collab-thread"
  );
  icons == null ? void 0 : icons.forEach((icon) => icon == null ? void 0 : icon.classList.add(hiddenClass));
  toggleCollabPopup({ threadUid: "", action: "close" });
}
function showAllCollabIcons() {
  const icons = document.querySelectorAll(
    ".visual-builder__collab-wrapper .collab-thread"
  );
  icons == null ? void 0 : icons.forEach((icon) => icon == null ? void 0 : icon.classList.remove(hiddenClass));
}
function removeCollabIcon(threadUid) {
  const thread = document.querySelector(`div[threaduid='${threadUid}']`);
  thread == null ? void 0 : thread.remove();
}
function toggleCollabPopup({
  threadUid = "",
  action
}) {
  document.dispatchEvent(
    new CustomEvent("toggleCollabPopup", {
      detail: { threadUid, action }
    })
  );
}
function HighlightThread(threadUid) {
  toggleCollabPopup({ threadUid, action: "open" });
}
function isCollabThread(target) {
  return Array.from(target.classList).some(
    (className) => className.startsWith("collab")
  );
}
function handleMissingThreads(payload) {
  var _a;
  (_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send(
    VisualBuilderPostMessageEvents.COLLAB_MISSING_THREADS,
    payload
  );
}
function handleEmptyThreads() {
  const icons = document.querySelectorAll(
    ".visual-builder__collab-wrapper .collab-thread"
  );
  icons == null ? void 0 : icons.forEach((icon) => {
    if (!icon.hasAttribute("threaduid")) {
      icon.remove();
    }
  });
}
var retryConfig = {
  maxRetries: 5,
  retryDelay: 1e3
};
var isProcessingThreads = false;
var threadRenderStatus = /* @__PURE__ */ new Map();
function delay2(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function getRenderStatus(threadId) {
  if (!threadRenderStatus.has(threadId)) {
    threadRenderStatus.set(threadId, {
      threadId,
      attempts: 0,
      isRendered: false
    });
  }
  return threadRenderStatus.get(threadId);
}
function updateRenderStatus(threadId, isRendered) {
  const status = getRenderStatus(threadId);
  status.isRendered = isRendered;
  threadRenderStatus.set(threadId, status);
}
function clearThreadStatus(threadId) {
  threadRenderStatus.delete(threadId);
}
async function processThread(thread) {
  let status = getRenderStatus(thread._id);
  while (status.attempts < retryConfig.maxRetries) {
    try {
      const result2 = generateThread(thread);
      if (result2 === void 0) {
        updateRenderStatus(thread._id, true);
        return void 0;
      }
      status.attempts++;
      updateRenderStatus(thread._id, false);
      if (status.attempts < retryConfig.maxRetries) {
        await delay2(retryConfig.retryDelay);
      }
    } catch (error) {
      console.error(`Error rendering thread ${thread._id}:`, error);
      status.attempts++;
      if (status.attempts >= retryConfig.maxRetries) {
        break;
      }
      await delay2(retryConfig.retryDelay);
    }
  }
  return thread._id;
}
async function processThreadsBatch(threads) {
  if (isProcessingThreads) return [];
  try {
    isProcessingThreads = true;
    const unrenderedThreads = filterUnrenderedThreads(threads);
    if (unrenderedThreads.length === 0) return [];
    const missingThreadIds = (await Promise.all(
      unrenderedThreads.map((thread) => processThread(thread))
    )).filter(Boolean);
    missingThreadIds.forEach(clearThreadStatus);
    return missingThreadIds;
  } finally {
    isProcessingThreads = false;
  }
}
function filterUnrenderedThreads(threads) {
  return threads.filter((thread) => {
    const existingThread = document.querySelector(
      `[threaduid="${thread._id}"]`
    );
    if (existingThread) {
      updateRenderStatus(thread._id, true);
      return false;
    }
    return true;
  });
}
function getElementByXpath(xpath) {
  const result2 = document.evaluate(
    xpath,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  );
  return result2.singleNodeValue;
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/instanceHandlers.js
function handleDeleteInstance(fieldMetadata) {
  var _a;
  (_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send(VisualBuilderPostMessageEvents.DELETE_INSTANCE, {
    data: fieldMetadata.fieldPathWithIndex + "." + fieldMetadata.multipleFieldMetadata.index,
    fieldMetadata
  }).finally(closeOverlay);
}
function handleMoveInstance(fieldMetadata, direction) {
  var _a;
  (_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send(VisualBuilderPostMessageEvents.MOVE_INSTANCE, {
    data: fieldMetadata.fieldPathWithIndex + "." + fieldMetadata.multipleFieldMetadata.index,
    direction,
    fieldMetadata
  }).finally(closeOverlay);
}
function closeOverlay() {
  var _a;
  (_a = document.querySelector(".visual-builder__overlay--top")) == null ? void 0 : _a.click();
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/icons/fields/index.js
var fieldIcons = {
  link: EditIcon,
  json_rte: EditIcon,
  html_rte: EditIcon,
  markdown_rte: EditIcon,
  custom_field: EditIcon,
  isodate: EditIcon,
  url: EditIcon
};

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/FieldToolbar.js
var import_classnames28 = __toESM(require_classnames(), 1);

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/getDiscussionIdByFieldMetaData.js
async function getDiscussionIdByFieldMetaData(params) {
  var _a;
  const { fieldMetadata, fieldSchema } = params;
  const discussion = await ((_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send(
    VisualBuilderPostMessageEvents.GET_DISCUSSION_ID,
    { fieldMetadata, fieldSchema }
  )) ?? null;
  if (hasPostMessageError(discussion)) {
    return null;
  }
  return discussion;
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/icons/loading.js
var import_classnames23 = __toESM(require_classnames(), 1);
function LoadingIcon() {
  return u6(
    "svg",
    {
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: (0, import_classnames23.default)(
        "visual-builder__cursor-icon--loader loader",
        visualBuilderStyles()["visual-builder__cursor-icon--loader"]
      ),
      children: u6("path", { d: "M15.5023 18.3501C13.5466 19.6388 11.2007 20.2002 8.87354 19.9364C6.54637 19.6725 4.38563 18.6002 2.76808 16.9065C1.15053 15.2127 0.178807 13.0049 0.0223406 10.6681C-0.134126 8.33122 0.534595 6.0136 1.9119 4.1193C3.2892 2.22501 5.2877 0.874235 7.55893 0.302518C9.83015 -0.2692 12.23 -0.0255895 14.34 0.990871C16.45 2.00733 18.1363 3.73215 19.1048 5.86457C20.0734 7.997 20.2627 10.4017 19.6399 12.6595L17.7119 12.1276C18.2102 10.3214 18.0587 8.3976 17.2839 6.69166C16.509 4.98572 15.16 3.60586 13.472 2.7927C11.784 1.97953 9.86412 1.78464 8.04714 2.24201C6.23016 2.69939 4.63136 3.78001 3.52952 5.29544C2.42768 6.81088 1.8927 8.66498 2.01787 10.5345C2.14305 12.4039 2.92043 14.1702 4.21446 15.5252C5.5085 16.8802 7.23709 17.738 9.09883 17.9491C10.9606 18.1601 12.8373 17.711 14.4018 16.6801L15.5023 18.3501Z" })
    }
  );
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/CommentIcon.js
var import_classnames24 = __toESM(require_classnames(), 1);
function CommentIcon(props) {
  const { fieldMetadata, fieldSchema, invertTooltipPosition = false } = props;
  const [activeDiscussion, setActiveDiscussion] = p2(null);
  const [isLoading, setIsLoading] = p2(false);
  _2(() => {
    const fetchDiscussionId = async () => {
      try {
        setIsLoading(true);
        const discussion = await getDiscussionIdByFieldMetaData({
          fieldMetadata,
          fieldSchema
        });
        setActiveDiscussion(discussion);
      } catch (error) {
        console.error("Failed to fetch discussion ID:", error);
        setActiveDiscussion({ uid: "new" });
      } finally {
        setIsLoading(false);
      }
    };
    fetchDiscussionId();
  }, [fieldMetadata]);
  _2(() => {
    var _a;
    const handleReceiveDiscussionId = (response) => {
      const { entryId, discussion, contentTypeId, fieldPath } = response.data;
      if (fieldMetadata.entry_uid === entryId && fieldMetadata.content_type_uid === contentTypeId && fieldMetadata.fieldPathWithIndex === fieldPath) {
        setActiveDiscussion(discussion ?? { uid: "new" });
      }
    };
    const recieveDiscussionIDEvent = (_a = visualBuilderPostMessage_default) == null ? void 0 : _a.on(
      VisualBuilderPostMessageEvents.UPDATE_DISCUSSION_ID,
      handleReceiveDiscussionId
    );
    return () => {
      recieveDiscussionIDEvent == null ? void 0 : recieveDiscussionIDEvent.unregister();
    };
  }, []);
  const handleCommentModal = async () => {
    var _a;
    (_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send(
      VisualBuilderPostMessageEvents.OPEN_FIELD_COMMENT_MODAL,
      {
        fieldMetadata,
        discussion: activeDiscussion,
        fieldSchema
      }
    );
  };
  if (isLoading) {
    return u6(
      "button",
      {
        "data-testid": "visual-builder__focused-toolbar__multiple-field-toolbar__comment-button-loading",
        className: (0, import_classnames24.default)(
          "visual-builder__button visual-builder__button--secondary visual-builder__button--comment-loader",
          visualBuilderStyles()["visual-builder__button"],
          visualBuilderStyles()["visual-builder__button--secondary"],
          visualBuilderStyles()["visual-builder__button--comment-loader"]
        ),
        children: u6(LoadingIcon, {})
      }
    );
  }
  if (!(activeDiscussion == null ? void 0 : activeDiscussion.uid)) {
    return;
  }
  return u6(
    "button",
    {
      "data-testid": "visual-builder__focused-toolbar__multiple-field-toolbar__comment-button",
      className: (0, import_classnames24.default)(
        "visual-builder__button visual-builder__button--secondary",
        visualBuilderStyles()["visual-builder__button"],
        visualBuilderStyles()["visual-builder__button--secondary"],
        visualBuilderStyles()["visual-builder__tooltip"],
        {
          "visual-builder__tooltip--bottom": invertTooltipPosition,
          [visualBuilderStyles()["visual-builder__tooltip--bottom"]]: invertTooltipPosition
        }
      ),
      "data-tooltip": "Add comment",
      onClick: (e6) => {
        e6.preventDefault();
        e6.stopPropagation();
        handleCommentModal();
      },
      children: (activeDiscussion == null ? void 0 : activeDiscussion.uid) === "new" ? u6(AddCommentIcon, {}) : u6(ReadCommentIcon, {})
    }
  );
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/icons/variant.js
function VariantIcon(props) {
  return u6(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 12 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        width: props.size,
        height: props.size
      },
      children: u6(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M4.41131 0.157165C4.34585 0.0589769 4.23565 0 4.11765 0C3.99964 0 3.88944 0.0589769 3.82398 0.157165L0.0592764 5.80422C-0.0197588 5.92278 -0.0197588 6.07722 0.0592764 6.19578L3.82398 11.8428C3.88944 11.941 3.99964 12 4.11765 12C4.23565 12 4.34585 11.941 4.41131 11.8428L6 9.4598L7.58869 11.8428C7.65415 11.941 7.76435 12 7.88235 12C8.00036 12 8.11056 11.941 8.17602 11.8428L11.9407 6.19578C12.0198 6.07722 12.0198 5.92278 11.9407 5.80422L8.17602 0.157165C8.11056 0.0589769 8.00036 0 7.88235 0C7.76435 0 7.65415 0.0589769 7.58869 0.157165L6 2.5402L4.41131 0.157165ZM5.57582 3.17647L4.11765 0.989215L0.777124 6L4.11765 11.0108L5.57582 8.82353L3.82398 6.19578C3.74495 6.07722 3.74495 5.92278 3.82398 5.80422L5.57582 3.17647ZM6 8.18726L4.54183 6L6 3.81274L7.45817 6L6 8.18726ZM6.42418 8.82353L8.17602 6.19578C8.25505 6.07722 8.25505 5.92278 8.17602 5.80422L6.42418 3.17647L7.88235 0.989215L11.2229 6L7.88235 11.0108L6.42418 8.82353Z",
          fill: "currentColor"
        }
      )
    }
  );
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/FieldRevert/FieldRevertComponent.js
var import_classnames25 = __toESM(require_classnames(), 1);

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/FieldRevert/useHandleOutsideClick.js
var useHandleOutsideClick = (ref, callback) => {
  _2(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};
var useHandleOutsideClick_default = useHandleOutsideClick;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/FieldRevert/FieldRevertComponent.js
var BASE_VARIANT_STATUS = {
  isAddedInstances: false,
  isBaseModified: false,
  isDeletedInstances: false,
  isOrderChanged: false,
  fieldLevelCustomizations: false
};
async function getFieldVariantStatus(fieldMetadata) {
  var _a;
  try {
    const result2 = await ((_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send(
      "get-field-variant-status",
      fieldMetadata
    ));
    return result2;
  } catch (error) {
    console.error("Failed to get field variant status:", error);
  }
}
var FieldRevertComponent = (props) => {
  const {
    fieldDataName,
    fieldMetadata,
    variantStatus = BASE_VARIANT_STATUS,
    isOpen,
    closeDropdown
  } = props;
  const getDropdownItems = () => {
    const {
      isAddedInstances,
      isDeletedInstances,
      isBaseModified,
      isOrderChanged,
      fieldLevelCustomizations
    } = variantStatus;
    const dropdownItems2 = [];
    if (isBaseModified) {
      dropdownItems2.push({
        label: "Revert to base entry value",
        action: "revert_to_base_entry_value",
        id: `iframe-cs-variant-field-${fieldDataName}-revert`,
        testId: `iframe-cs-variant-field-${fieldDataName}-revert`,
        fieldDataName
      });
    }
    if (isAddedInstances) {
      dropdownItems2.push({
        label: "Revert added instances",
        action: "revert_added_instances",
        id: `iframe-cs-variant-field-${fieldDataName}-revert-added-instances`,
        testId: `iframe-cs-variant-field-${fieldDataName}-revert-added-instances`,
        fieldDataName
      });
    }
    if (isDeletedInstances) {
      dropdownItems2.push({
        label: "Restore deleted instances",
        action: "restore_deleted_instances",
        id: `iframe-cs-variant-field-${fieldDataName}-restore-deleted-instances`,
        testId: `iframe-cs-variant-field-${fieldDataName}-restore-deleted-instances`,
        fieldDataName
      });
    }
    if (fieldLevelCustomizations) {
      dropdownItems2.push({
        label: "Reset field-level customizations",
        action: "reset_field_level_customizations",
        id: `iframe-cs-variant-field-${fieldDataName}-reset-field-level-customizations`,
        testId: `iframe-cs-variant-field-${fieldDataName}-reset-field-level-customizations`,
        fieldDataName
      });
    }
    if (isOrderChanged) {
      dropdownItems2.push({
        label: "Restore sorted instances",
        action: "restore_sorted_instances",
        id: `iframe-cs-variant-field-${fieldDataName}-restore-sorted-instances`,
        testId: `iframe-cs-variant-field-${fieldDataName}-restore-sorted-instances`,
        fieldDataName
      });
    }
    return dropdownItems2;
  };
  const dropdownItems = getDropdownItems();
  function handleOnClick(item) {
    var _a;
    const { fieldDataName: fieldDataName2, action } = item;
    (_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send("send-variant-revert-action-trigger", {
      fieldDataName: fieldDataName2,
      action,
      euid: fieldMetadata.entry_uid,
      ct_uid: fieldMetadata.content_type_uid,
      locale: fieldMetadata.locale
    });
  }
  return u6(
    "div",
    {
      className: (0, import_classnames25.default)(
        "variant-field-revert-component",
        visualBuilderStyles()["variant-field-revert-component"]
      ),
      onClick: (e6) => e6.stopPropagation(),
      children: isOpen && u6(
        "div",
        {
          "data-testid": "variant-field-revert-component__dropdown-content",
          className: (0, import_classnames25.default)(
            "variant-field-revert-component__dropdown-content",
            visualBuilderStyles()["variant-field-revert-component__dropdown-content"]
          ),
          children: dropdownItems.map((item) => u6(
            "div",
            {
              className: (0, import_classnames25.default)(
                "variant-field-revert-component__dropdown-content__list-item",
                visualBuilderStyles()["variant-field-revert-component__dropdown-content__list-item"]
              ),
              onClick: (e6) => {
                e6.preventDefault();
                handleOnClick(item);
                closeDropdown();
              },
              "data-testid": item.testId,
              children: u6("span", { children: item.label })
            },
            item.id
          ))
        }
      )
    }
  );
};
var VariantRevertDropdown = (props) => {
  const {
    closeDropdown,
    invertTooltipPosition,
    toggleVariantDropdown,
    variantStatus = BASE_VARIANT_STATUS,
    disabled
  } = props;
  const dropdownRef = F2(null);
  useHandleOutsideClick_default(dropdownRef, closeDropdown);
  const hasDropdownItems = Object.values(variantStatus).some(
    (value) => value
  );
  const buttonClassNames = (0, import_classnames25.default)(
    "visual-builder__button visual-builder__button--secondary",
    visualBuilderStyles()["visual-builder__button"],
    visualBuilderStyles()["visual-builder__button--secondary"],
    visualBuilderStyles()["visual-builder__tooltip"],
    {
      "visual-builder__tooltip--bottom": invertTooltipPosition,
      [visualBuilderStyles()["visual-builder__tooltip--bottom"]]: invertTooltipPosition
    }
  );
  if (!hasDropdownItems) {
    return u6(
      "button",
      {
        className: (0, import_classnames25.default)(buttonClassNames),
        style: { padding: "6px" },
        "data-tooltip": "Variant",
        "data-testid": `visual-builder-canvas-variant-icon`,
        disabled,
        children: u6(VariantIcon, {})
      }
    );
  }
  return u6("div", { ref: dropdownRef, children: [
    u6(
      "button",
      {
        className: (0, import_classnames25.default)(
          buttonClassNames,
          visualBuilderStyles()["visual-builder__variant-button"]
        ),
        "data-tooltip": "Variant Revert",
        "data-testid": `visual-builder-canvas-variant-revert`,
        onClick: toggleVariantDropdown,
        disabled,
        children: [
          u6(VariantIcon, {}),
          u6(CaretIcon, { open: props.isOpen })
        ]
      }
    ),
    u6(FieldRevertComponent, { ...props })
  ] });
};

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/icons/EmptyAppIcon.js
var EmptyAppIcon = ({
  id = "",
  ...props
}) => {
  return u6(
    "svg",
    {
      width: "35",
      height: "35",
      viewBox: "0 0 72 72",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        u6("circle", { cx: "36", cy: "36", r: "36", fill: getColorFromString(id) }),
        u6(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M32.0577 27.3091H25.7747C25.1627 27.3091 24.6667 27.8052 24.6667 28.4171V31.6933H25.4351C28.2423 31.6933 30.9099 33.6523 30.9099 36.8808C30.9099 40.0525 28.3048 42.1467 25.4351 42.1467H24.6667V47.2253C24.6667 47.8372 25.1627 48.3333 25.7747 48.3333H30.8533V47.5649C30.8533 44.6952 32.9475 42.0901 36.1192 42.0901C39.3477 42.0901 41.3067 44.7577 41.3067 47.5649V48.3333H44.5829C45.1948 48.3333 45.6909 47.8372 45.6909 47.2253V40.8782L47.9921 40.5598C49.9596 40.2875 51.3333 38.7771 51.3333 36.8808C51.3333 35.0149 49.9935 33.5515 47.9984 33.2804L45.6909 32.9668V28.4171C45.6909 27.8052 45.1948 27.3091 44.5829 27.3091H40.0974L39.7801 25.0065C39.5081 23.0327 38.0085 21.6667 36.1192 21.6667C34.1999 21.6667 32.6528 23.0659 32.3798 25.0128L32.0577 27.3091ZM38.64 51V47.5649C38.64 45.9382 37.5988 44.7567 36.1192 44.7567C34.6198 44.7567 33.52 45.9602 33.52 47.5649V51H25.7747C23.69 51 22 49.31 22 47.2253V39.48H25.4351C27.0398 39.48 28.2433 38.3802 28.2433 36.8808C28.2433 35.4012 27.0618 34.36 25.4351 34.36H22V28.4171C22 26.3324 23.69 24.6424 25.7747 24.6424H29.739C30.1842 21.4681 32.7819 19 36.1192 19C39.4662 19 41.9856 21.4774 42.4218 24.6424H44.5829C46.6676 24.6424 48.3576 26.3324 48.3576 28.4171V30.638C51.5153 31.0671 54 33.5263 54 36.8808C54 40.2256 51.5248 42.763 48.3576 43.2013V47.2253C48.3576 49.31 46.6676 51 44.5829 51H38.64Z",
            fill: "white"
          }
        )
      ]
    }
  );
};
var sumOfAscii = (str) => [...str].reduce((a7, b5) => a7 + b5.charCodeAt(0), 0);
var getColorFromString = (str = "") => {
  const colorList = [
    "#99D8CE",
    "#6BC3FE",
    "#5060C1",
    "#835EC3",
    "#B16DBD",
    "#FF85BC",
    "#FF7E83",
    "#A2D959",
    "#59BA5E"
  ];
  return colorList[sumOfAscii(str) % colorList.length];
};

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/FieldLocationAppList.js
var import_classnames26 = __toESM(require_classnames(), 1);
var normalize = (text2) => text2.toLowerCase().replace(/[^a-z0-9 ]/gi, "").trim();
var FieldLocationAppList = ({
  apps,
  position,
  toolbarRef,
  domEditStack,
  setDisplayAllApps
}) => {
  const remainingApps = apps.filter((app, index) => index !== 0);
  const [search, setSearch] = p2("");
  const filteredApps = q2(() => {
    if (!search.trim()) return remainingApps;
    const normalizedSearch = normalize(search);
    return remainingApps.filter((app) => {
      return normalize(app.title).includes(normalizedSearch);
    });
  }, [search, remainingApps]);
  const handleAppClick = (app) => {
    var _a, _b;
    (_b = visualBuilderPostMessage_default) == null ? void 0 : _b.send(
      VisualBuilderPostMessageEvents.FIELD_LOCATION_SELECTED_APP,
      {
        app,
        position: (_a = toolbarRef.current) == null ? void 0 : _a.getBoundingClientRect(),
        DomEditStack: domEditStack
      }
    );
    setDisplayAllApps(false);
  };
  return u6(
    "div",
    {
      className: (0, import_classnames26.default)(
        visualBuilderStyles()["visual-builder__field-location-app-list"],
        {
          [visualBuilderStyles()["visual-builder__field-location-app-list--left"]]: position === "left",
          [visualBuilderStyles()["visual-builder__field-location-app-list--right"]]: position === "right"
        }
      ),
      children: [
        u6(
          "div",
          {
            className: visualBuilderStyles()["visual-builder__field-location-app-list__search-container"],
            children: [
              u6(
                "svg",
                {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 14 14",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: (0, import_classnames26.default)(
                    "Search__search-icon Icon--mini",
                    visualBuilderStyles()["visual-builder__field-location-app-list__search-icon"]
                  ),
                  children: u6(
                    "path",
                    {
                      d: "M12.438 12.438L9.624 9.624M6.25 10.75a4.5 4.5 0 100-9 4.5 4.5 0 000 9z",
                      stroke: "#A9B6CB",
                      strokeWidth: "2",
                      strokeMiterlimit: "10",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    }
                  )
                }
              ),
              u6(
                "input",
                {
                  type: "text",
                  value: search,
                  onInput: (e6) => setSearch(e6.target.value),
                  placeholder: "Search for Apps",
                  className: visualBuilderStyles()["visual-builder__field-location-app-list__search-input"]
                }
              )
            ]
          }
        ),
        u6(
          "div",
          {
            className: visualBuilderStyles()["visual-builder__field-location-app-list__content"],
            children: [
              filteredApps.length === 0 && u6(
                "div",
                {
                  className: visualBuilderStyles()["visual-builder__field-location-app-list__no-results"],
                  children: u6(
                    "span",
                    {
                      className: visualBuilderStyles()["visual-builder__field-location-app-list__no-results-text"],
                      children: "No matching results found!"
                    }
                  )
                }
              ),
              filteredApps.map((app) => u6(
                "div",
                {
                  className: visualBuilderStyles()["visual-builder__field-location-app-list__item"],
                  onClick: () => handleAppClick(app),
                  children: [
                    u6(
                      "div",
                      {
                        className: visualBuilderStyles()["visual-builder__field-location-app-list__item-icon-container"],
                        children: app.icon ? u6(
                          "img",
                          {
                            src: app.icon,
                            alt: app.title,
                            className: visualBuilderStyles()["visual-builder__field-location-app-list__item-icon"]
                          }
                        ) : u6(EmptyAppIcon, { id: app.app_installation_uid })
                      }
                    ),
                    u6(
                      "span",
                      {
                        className: visualBuilderStyles()["visual-builder__field-location-app-list__item-title"],
                        children: app.title
                      }
                    )
                  ]
                },
                app.uid
              ))
            ]
          }
        )
      ]
    }
  );
};

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/FieldLocationIcon.js
var import_classnames27 = __toESM(require_classnames(), 1);
var FieldLocationIcon = ({
  fieldLocationData,
  multipleFieldToolbarButtonClasses,
  handleMoreIconClick,
  moreButtonRef,
  toolbarRef,
  domEditStack
}) => {
  var _a;
  if (!(fieldLocationData == null ? void 0 : fieldLocationData.apps) || ((_a = fieldLocationData == null ? void 0 : fieldLocationData.apps) == null ? void 0 : _a.length) === 0) {
    return null;
  }
  const handleAppClick = (app) => {
    var _a2, _b;
    if (!toolbarRef.current) return;
    (_b = visualBuilderPostMessage_default) == null ? void 0 : _b.send(VisualBuilderPostMessageEvents.FIELD_LOCATION_SELECTED_APP, {
      app,
      position: (_a2 = toolbarRef.current) == null ? void 0 : _a2.getBoundingClientRect(),
      DomEditStack: domEditStack
    });
  };
  return u6(
    "div",
    {
      ref: toolbarRef,
      className: (0, import_classnames27.default)(
        visualBuilderStyles()["visual-builder__field-location-icons-container"]
      ),
      children: [
        u6(
          "hr",
          {
            className: visualBuilderStyles()["visual-builder__field-location-icons-container__divider"]
          }
        ),
        u6(
          "button",
          {
            title: fieldLocationData.apps[0].title,
            className: multipleFieldToolbarButtonClasses,
            "data-tooltip": fieldLocationData.apps[0].title,
            onClick: (e6) => {
              e6.preventDefault();
              e6.stopPropagation();
              handleAppClick(fieldLocationData.apps[0]);
            },
            "data-testid": "field-location-icon",
            children: fieldLocationData.apps[0].icon ? u6(
              "img",
              {
                src: fieldLocationData.apps[0].icon,
                alt: fieldLocationData.apps[0].title,
                className: visualBuilderStyles()["visual-builder__field-location-icons-container__app-icon"]
              }
            ) : u6(
              EmptyAppIcon,
              {
                id: fieldLocationData.apps[0].app_installation_uid
              }
            )
          },
          `${fieldLocationData.apps[0].uid}`
        ),
        fieldLocationData.apps.length > 1 && u6(
          "button",
          {
            ref: moreButtonRef,
            className: multipleFieldToolbarButtonClasses,
            "data-tooltip": "More",
            onClick: handleMoreIconClick,
            "data-testid": "field-location-more-button",
            children: u6(MoreIcon, {})
          }
        )
      ]
    }
  );
};

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/FieldToolbar.js
var TOOLTIP_TOP_EDGE_BUFFER = 96;
function handleReplaceAsset(fieldMetadata) {
  var _a;
  (_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send(
    VisualBuilderPostMessageEvents.OPEN_ASSET_MODAL,
    {
      fieldMetadata
    }
  );
}
function handleReplaceReference(fieldMetadata) {
  var _a, _b;
  const isMultipleInstance = fieldMetadata.multipleFieldMetadata.index > -1 && fieldMetadata.fieldPathWithIndex === ((_a = fieldMetadata.multipleFieldMetadata.parentDetails) == null ? void 0 : _a.parentPath);
  const entryPath = isMultipleInstance ? fieldMetadata.instance.fieldPathWithIndex : fieldMetadata.fieldPathWithIndex;
  (_b = visualBuilderPostMessage_default) == null ? void 0 : _b.send(
    VisualBuilderPostMessageEvents.OPEN_REFERENCE_MODAL,
    {
      entry_uid: fieldMetadata.entry_uid,
      content_type_uid: fieldMetadata.content_type_uid,
      locale: fieldMetadata.locale,
      fieldPath: fieldMetadata.fieldPath,
      fieldPathWithIndex: fieldMetadata.fieldPathWithIndex,
      entryPath
    }
  );
}
function handleEdit(fieldMetadata) {
  var _a;
  (_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send(
    VisualBuilderPostMessageEvents.OPEN_FIELD_EDIT_MODAL,
    { fieldMetadata }
  );
}
function handleFormFieldFocus(eventDetails) {
  var _a;
  const { editableElement } = eventDetails;
  return (_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send(
    VisualBuilderPostMessageEvents.FOCUS_FIELD,
    {
      DOMEditStack: getDOMEditStack(editableElement),
      toggleVisibility: true
    }
  );
}
function FieldToolbarComponent(props) {
  var _a, _b, _c, _d, _e;
  const {
    eventDetails,
    isVariant: isVariantOrParentOfVariant,
    entryPermissions,
    entryWorkflowStageDetails
  } = props;
  const { fieldMetadata, editableElement: targetElement } = eventDetails;
  const [isFormLoading, setIsFormLoading] = p2(false);
  const [fieldLocationData, setFieldLocationData] = p2(null);
  const [displayAllApps, setDisplayAllApps] = p2(false);
  const moreButtonRef = F2(null);
  const toolbarRef = F2(null);
  const [appListPosition, setAppListPosition] = p2(
    "right"
  );
  const parentPath = ((_b = (_a = fieldMetadata == null ? void 0 : fieldMetadata.multipleFieldMetadata) == null ? void 0 : _a.parentDetails) == null ? void 0 : _b.parentCslpValue) || "";
  const isVariant = !!(fieldMetadata == null ? void 0 : fieldMetadata.variant) || isVariantOrParentOfVariant;
  const direction = getChildrenDirection(targetElement, parentPath);
  const [fieldSchema, setFieldSchema] = p2(
    null
  );
  const [fieldVariantStatus, setFieldVariantStatus] = p2(BASE_VARIANT_STATUS);
  const [isOpenVariantRevert, setIsOpenVariantRevert] = p2(false);
  let isModalEditable = false;
  let isReplaceAllowed = false;
  let isMultiple = false;
  let Icon2 = null;
  let fieldType = null;
  let isWholeMultipleField = false;
  const APP_LIST_MIN_WIDTH = 230;
  let disableFieldActions = false;
  if (fieldSchema) {
    const { isDisabled } = isFieldDisabled(
      fieldSchema,
      {
        editableElement: targetElement,
        fieldMetadata
      },
      entryPermissions,
      entryWorkflowStageDetails
    );
    disableFieldActions = isDisabled;
    fieldType = getFieldType(fieldSchema);
    Icon2 = fieldIcons[fieldType];
    isMultiple = fieldSchema.multiple || false;
    if (fieldType === FieldDataType.REFERENCE)
      isMultiple = fieldSchema.field_metadata.ref_multiple;
    isWholeMultipleField = isMultiple && (fieldMetadata.fieldPathWithIndex === fieldMetadata.instance.fieldPathWithIndex || ((_c = fieldMetadata.multipleFieldMetadata) == null ? void 0 : _c.index) === -1);
    isModalEditable = ALLOWED_MODAL_EDITABLE_FIELD.includes(fieldType) && !isWholeMultipleField;
    isReplaceAllowed = ALLOWED_REPLACE_FIELDS.includes(fieldType) && !isWholeMultipleField;
  }
  const domEditStack = getDOMEditStack(eventDetails.editableElement);
  const invertTooltipPosition = targetElement.getBoundingClientRect().top <= TOOLTIP_TOP_EDGE_BUFFER;
  const handleMoreIconClick = () => {
    if (toolbarRef.current) {
      const rect = toolbarRef.current.getBoundingClientRect();
      const spaceRight = window.innerWidth - rect.right;
      const spaceLeft = rect.left;
      let position = "";
      if (spaceRight < APP_LIST_MIN_WIDTH) {
        position = "left";
      } else if (spaceRight > APP_LIST_MIN_WIDTH) {
        position = "right";
      } else {
        position = spaceRight > spaceLeft ? "right" : "left";
      }
      setAppListPosition(position);
    }
    setDisplayAllApps(!displayAllApps);
  };
  const editButton = Icon2 ? u6(
    "button",
    {
      "data-testid": "visual-builder__focused-toolbar__multiple-field-toolbar__edit-button",
      className: (0, import_classnames28.default)(
        "visual-builder__button visual-builder__button--secondary visual-builder__button--edit",
        visualBuilderStyles()["visual-builder__button"],
        visualBuilderStyles()["visual-builder__button--secondary"],
        visualBuilderStyles()["visual-builder__button--edit"],
        visualBuilderStyles()["visual-builder__tooltip"],
        {
          "visual-builder__tooltip--bottom": invertTooltipPosition,
          [visualBuilderStyles()["visual-builder__tooltip--bottom"]]: invertTooltipPosition
        }
      ),
      "data-tooltip": "Edit",
      onClick: (e6) => {
        e6.preventDefault();
        e6.stopPropagation();
        handleEdit(fieldMetadata);
      },
      disabled: disableFieldActions,
      children: u6(Icon2, {})
    }
  ) : null;
  const replaceButton = fieldType ? u6(
    "button",
    {
      className: (0, import_classnames28.default)(
        "visual-builder__replace-button visual-builder__button visual-builder__button--secondary",
        visualBuilderStyles()["visual-builder__button"],
        visualBuilderStyles()["visual-builder__button--secondary"],
        visualBuilderStyles()["visual-builder__tooltip"],
        {
          "visual-builder__tooltip--bottom": invertTooltipPosition,
          [visualBuilderStyles()["visual-builder__tooltip--bottom"]]: invertTooltipPosition
        }
      ),
      "data-tooltip": "Replace",
      "data-testid": `visual-builder-replace-${fieldType}`,
      onClick: (e6) => {
        e6.stopPropagation();
        e6.preventDefault();
        if (fieldType === FieldDataType.REFERENCE) {
          handleReplaceReference(fieldMetadata);
          return;
        } else if (fieldType === FieldDataType.FILE) {
          handleReplaceAsset(fieldMetadata);
          return;
        }
      },
      disabled: disableFieldActions,
      children: u6(ReplaceAssetIcon, {})
    }
  ) : null;
  const formButton = u6(
    "button",
    {
      className: (0, import_classnames28.default)(
        "visual-builder__replace-button visual-builder__button visual-builder__button--secondary",
        visualBuilderStyles()["visual-builder__button"],
        visualBuilderStyles()["visual-builder__button--secondary"],
        visualBuilderStyles()["visual-builder__tooltip"],
        {
          "visual-builder__tooltip--bottom": invertTooltipPosition,
          [visualBuilderStyles()["visual-builder__tooltip--bottom"]]: invertTooltipPosition
        },
        {
          [visualBuilderStyles()["visual-builder__button--comment-loader"]]: isFormLoading,
          "visual-builder__button--comment-loader": isFormLoading
        }
      ),
      "data-tooltip": "Form",
      "data-testid": `visual-builder-form`,
      onClick: async (e6) => {
        e6.preventDefault();
        e6.stopPropagation();
        setIsFormLoading(true);
        try {
          await handleFormFieldFocus(eventDetails);
        } finally {
          setIsFormLoading(false);
        }
      },
      disabled: isFormLoading,
      children: isFormLoading ? u6(LoadingIcon, {}) : u6(FormIcon, {})
    }
  );
  const toggleVariantDropdown = () => {
    setIsOpenVariantRevert(!isOpenVariantRevert);
  };
  const closeVariantDropdown = () => {
    setIsOpenVariantRevert(false);
  };
  const variantButton = u6(
    "button",
    {
      className: (0, import_classnames28.default)(
        "visual-builder__variant-button visual-builder__button visual-builder__button--secondary",
        visualBuilderStyles()["visual-builder__button"],
        visualBuilderStyles()["visual-builder__button--secondary"],
        visualBuilderStyles()["visual-builder__tooltip"],
        visualBuilderStyles()["visual-builder__variant-button"],
        {
          "visual-builder__tooltip--bottom": invertTooltipPosition,
          [visualBuilderStyles()["visual-builder__tooltip--bottom"]]: invertTooltipPosition
        }
      ),
      "data-tooltip": "Variant Revert",
      "data-testid": `visual-builder-canvas-variant-revert`,
      onClick: toggleVariantDropdown,
      children: [
        u6(VariantIcon, {}),
        u6(CaretIcon, { open: isOpenVariantRevert })
      ]
    }
  );
  const totalElementCount = ((_d = targetElement == null ? void 0 : targetElement.parentNode) == null ? void 0 : _d.childElementCount) ?? 1;
  const indexOfElement = (_e = fieldMetadata == null ? void 0 : fieldMetadata.multipleFieldMetadata) == null ? void 0 : _e.index;
  const disableMoveLeft = indexOfElement === 0;
  const disableMoveRight = indexOfElement === totalElementCount - 1;
  _2(() => {
    async function fetchFieldSchema() {
      const fieldSchema2 = await FieldSchemaMap.getFieldSchema(
        fieldMetadata.content_type_uid,
        fieldMetadata.fieldPath
      );
      if (fieldSchema2) {
        setFieldSchema(fieldSchema2);
      }
      const variantStatus = await getFieldVariantStatus(fieldMetadata);
      setFieldVariantStatus(variantStatus ?? BASE_VARIANT_STATUS);
    }
    fetchFieldSchema();
  }, [fieldMetadata]);
  _2(() => {
    var _a2;
    const event = (_a2 = visualBuilderPostMessage_default) == null ? void 0 : _a2.on(
      VisualBuilderPostMessageEvents.DELETE_INSTANCE,
      (args) => {
        var _a3;
        if (((_a3 = args.data) == null ? void 0 : _a3.path) === fieldMetadata.instance.fieldPathWithIndex) {
          props.hideOverlay();
        }
      }
    );
    return () => {
      event == null ? void 0 : event.unregister();
    };
  }, []);
  _2(() => {
    const fetchFieldLocationData = async () => {
      var _a2;
      try {
        const event = await ((_a2 = visualBuilderPostMessage_default) == null ? void 0 : _a2.send(VisualBuilderPostMessageEvents.FIELD_LOCATION_DATA, {
          domEditStack: getDOMEditStack(eventDetails.editableElement)
        }));
        setFieldLocationData(event);
      } catch (error) {
        console.error("Error fetching field location data:", error);
      }
    };
    fetchFieldLocationData();
  }, [eventDetails.editableElement]);
  const multipleFieldToolbarButtonClasses = (0, import_classnames28.default)(
    "visual-builder__button visual-builder__button--secondary",
    visualBuilderStyles()["visual-builder__button"],
    visualBuilderStyles()["visual-builder__button--secondary"],
    visualBuilderStyles()["visual-builder__tooltip"],
    {
      "visual-builder__tooltip--bottom": invertTooltipPosition,
      [visualBuilderStyles()["visual-builder__tooltip--bottom"]]: invertTooltipPosition
    }
  );
  return u6(
    "div",
    {
      className: (0, import_classnames28.default)(
        "visual-builder__field-toolbar-container",
        visualBuilderStyles()["visual-builder__field-toolbar-container"]
      ),
      children: [
        u6(
          "div",
          {
            className: (0, import_classnames28.default)(
              "visual-builder__focused-toolbar__multiple-field-toolbar",
              visualBuilderStyles()["visual-builder__focused-toolbar__multiple-field-toolbar"]
            ),
            "data-testid": "visual-builder__focused-toolbar__multiple-field-toolbar",
            children: u6(
              "div",
              {
                className: (0, import_classnames28.default)(
                  "visual-builder__focused-toolbar__button-group",
                  visualBuilderStyles()["visual-builder__focused-toolbar__button-group"]
                ),
                children: u6(g, { children: [
                  isVariant ? u6(
                    VariantRevertDropdown,
                    {
                      fieldDataName: fieldMetadata.fieldPathWithIndex,
                      fieldMetadata,
                      variantStatus: fieldVariantStatus,
                      isOpen: isOpenVariantRevert,
                      closeDropdown: closeVariantDropdown,
                      invertTooltipPosition,
                      toggleVariantDropdown,
                      disabled: disableFieldActions
                    }
                  ) : null,
                  isMultiple && !isWholeMultipleField ? u6(g, { children: [
                    u6(
                      "button",
                      {
                        "data-testid": "visual-builder__focused-toolbar__multiple-field-toolbar__move-left-button",
                        className: multipleFieldToolbarButtonClasses,
                        "data-tooltip": direction === "vertical" ? "Move up" : "Move left",
                        onClick: (e6) => {
                          e6.preventDefault();
                          e6.stopPropagation();
                          handleMoveInstance(
                            fieldMetadata,
                            "previous"
                          );
                        },
                        disabled: disableFieldActions || disableMoveLeft,
                        children: u6(
                          MoveLeftIcon,
                          {
                            className: (0, import_classnames28.default)({
                              "visual-builder__rotate--90": direction === "vertical",
                              [visualBuilderStyles()["visual-builder__rotate--90"]]: direction === "vertical"
                            }),
                            disabled: disableFieldActions || disableMoveLeft
                          }
                        )
                      }
                    ),
                    u6(
                      "button",
                      {
                        "data-testid": "visual-builder__focused-toolbar__multiple-field-toolbar__move-right-button",
                        className: multipleFieldToolbarButtonClasses,
                        "data-tooltip": direction === "vertical" ? "Move down" : "Move right",
                        onClick: (e6) => {
                          e6.preventDefault();
                          e6.stopPropagation();
                          handleMoveInstance(
                            fieldMetadata,
                            "next"
                          );
                        },
                        disabled: disableFieldActions || disableMoveRight,
                        children: u6(
                          MoveRightIcon,
                          {
                            className: (0, import_classnames28.default)({
                              "visual-builder__rotate--90": direction === "vertical",
                              [visualBuilderStyles()["visual-builder__rotate--90"]]: direction === "vertical"
                            }),
                            disabled: disableFieldActions || disableMoveRight
                          }
                        )
                      }
                    ),
                    isModalEditable ? editButton : null,
                    formButton,
                    isReplaceAllowed ? replaceButton : null,
                    u6(
                      "button",
                      {
                        "data-testid": "visual-builder__focused-toolbar__multiple-field-toolbar__delete-button",
                        className: multipleFieldToolbarButtonClasses,
                        "data-tooltip": "Delete",
                        onClick: (e6) => {
                          e6.preventDefault();
                          e6.stopPropagation();
                          handleDeleteInstance(fieldMetadata);
                        },
                        disabled: disableFieldActions,
                        children: u6(DeleteIcon, {})
                      }
                    )
                  ] }) : u6(g, { children: [
                    isModalEditable ? editButton : null,
                    isReplaceAllowed ? replaceButton : null,
                    formButton,
                    fieldSchema ? u6(
                      CommentIcon,
                      {
                        fieldMetadata,
                        fieldSchema,
                        invertTooltipPosition
                      }
                    ) : null
                  ] }),
                  u6(
                    FieldLocationIcon,
                    {
                      fieldLocationData,
                      multipleFieldToolbarButtonClasses,
                      handleMoreIconClick,
                      moreButtonRef,
                      toolbarRef,
                      domEditStack
                    }
                  )
                ] })
              }
            )
          }
        ),
        displayAllApps && u6(
          FieldLocationAppList,
          {
            toolbarRef,
            apps: (fieldLocationData == null ? void 0 : fieldLocationData.apps) || [],
            position: appListPosition,
            domEditStack,
            setDisplayAllApps,
            displayAllApps
          }
        )
      ]
    }
  );
}
var FieldToolbar_default = FieldToolbarComponent;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/fieldLabelWrapper.js
var import_classnames31 = __toESM(require_classnames(), 1);

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/CslpError.js
var import_classnames29 = __toESM(require_classnames(), 1);
function CslpError({}) {
  const errorRef = F2(null);
  const [showTooltip, setShowTooltip] = p2(false);
  _2(() => {
    const errorElement = errorRef.current;
    const showTooltip2 = () => {
      setShowTooltip(true);
    };
    const hideTooltip = () => {
      setShowTooltip(false);
    };
    if (errorElement) {
      errorElement.addEventListener("mouseenter", showTooltip2);
      errorElement.addEventListener("mouseleave", hideTooltip);
    }
    return () => {
      if (errorElement) {
        errorElement.removeEventListener("mouseenter", showTooltip2);
        errorElement.removeEventListener("mouseleave", hideTooltip);
      }
    };
  }, []);
  return u6(
    "div",
    {
      className: (0, import_classnames29.default)(
        visualBuilderStyles()["visual-builder__focused-toolbar__error"]
      ),
      ref: errorRef,
      children: [
        u6(WarningOctagonIcon, {}),
        u6(
          "span",
          {
            className: (0, import_classnames29.default)(
              visualBuilderStyles()["visual-builder__focused-toolbar__error-text"]
            ),
            children: "Error"
          }
        ),
        showTooltip ? u6(
          "div",
          {
            className: (0, import_classnames29.default)(
              visualBuilderStyles()["visual-builder__focused-toolbar__error-toolip"]
            ),
            children: [
              u6("p", { children: "Invalid CSLP tag" }),
              u6("span", { children: "The CSLP is invalid or incorrectly generated." })
            ]
          }
        ) : null
      ]
    }
  );
}

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var alignments = ["start", "end"];
var placements = sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
var min2 = Math.min;
var max2 = Math.max;
var round2 = Math.round;
var createCoords = (v9) => ({
  x: v9,
  y: v9
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp2(start, value, end) {
  return max2(start, min2(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
var yAxisSides = /* @__PURE__ */ new Set(["top", "bottom"]);
function getSideAxis(placement) {
  return yAxisSides.has(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
var lrPlacement = ["left", "right"];
var rlPlacement = ["right", "left"];
var tbPlacement = ["top", "bottom"];
var btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x: x4,
    y: y5,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y5,
    left: x4,
    right: x4 + width,
    bottom: y5 + height,
    x: x4,
    y: y5
  };
}

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config2) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config2;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x: x4,
    y: y5
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i8 = 0; i8 < validMiddleware.length; i8++) {
    const {
      name,
      fn: fn2
    } = validMiddleware[i8];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn2({
      x: x4,
      y: y5,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x4 = nextX != null ? nextX : x4;
    y5 = nextY != null ? nextY : y5;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x: x4,
          y: y5
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i8 = -1;
    }
  }
  return {
    x: x4,
    y: y5,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x: x4,
    y: y5,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x: x4,
    y: y5,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x: x4,
      y: y5,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x: x4,
      y: y5
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min2(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min2(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max3 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset3 = clamp2(min$1, center, max3);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset3 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max3 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset3,
        centerOffset: center - offset3 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var flip2 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every((d7) => getSideAxis(d7.placement) === initialSideAxis ? d7.overflows[0] > 0 : true)) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d7) => d7.overflows[0] <= 0).sort((a7, b5) => a7.overflows[1] - b5.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d7) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d7.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d7) => [d7.placement, d7.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a7, b5) => a7[1] - b5[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
var originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x: x4,
        y: y5,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x4 + diffCoords.x,
        y: y5 + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x: x4,
        y: y5,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x5,
              y: y6
            } = _ref;
            return {
              x: x5,
              y: y6
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x: x4,
        y: y5
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min3 = mainAxisCoord + overflow[minSide];
        const max3 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp2(min3, mainAxisCoord, max3);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min3 = crossAxisCoord + overflow[minSide];
        const max3 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp2(min3, crossAxisCoord, max3);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x4,
          y: limitedCoords.y - y5,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow2() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow2()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement2(value) {
  if (!hasWindow2()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow2()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow2() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
var invalidOverflowDisplayValues = /* @__PURE__ */ new Set(["inline", "contents"]);
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
var tableElements = /* @__PURE__ */ new Set(["table", "td", "th"]);
function isTableElement(element) {
  return tableElements.has(getNodeName(element));
}
var topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(element) {
  return topLayerSelectors.some((selector) => {
    try {
      return element.matches(selector);
    } catch (_e) {
      return false;
    }
  });
}
var transformProperties = ["transform", "translate", "scale", "rotate", "perspective"];
var willChangeValues = ["transform", "translate", "scale", "rotate", "perspective", "filter"];
var containValues = ["paint", "layout", "strict", "content"];
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement2(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return transformProperties.some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || willChangeValues.some((value) => (css.willChange || "").includes(value)) || containValues.some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
var lastTraversableNodeNames = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function isLastTraversableNode(node) {
  return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement2(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result2 = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result2) ? result2.host : result2;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round2(width) !== offsetWidth || round2(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement2(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $: $3
  } = getCssDimensions(domElement);
  let x4 = ($3 ? round2(rect.width) : rect.width) / width;
  let y5 = ($3 ? round2(rect.height) : rect.height) / height;
  if (!x4 || !Number.isFinite(x4)) {
    x4 = 1;
  }
  if (!y5 || !Number.isFinite(y5)) {
    y5 = 1;
  }
  return {
    x: x4,
    y: y5
  };
}
var noOffsets = createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement2(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x4 = (clientRect.left + visualOffsets.x) / scale.x;
  let y5 = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement2(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x4 *= iframeScale.x;
      y5 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x4 += left;
      y5 += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x: x4,
    y: y5
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x4 = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
  const y5 = htmlRect.top + scroll.scrollTop;
  return {
    x: x4,
    y: y5
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
  const html2 = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max2(html2.scrollWidth, html2.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max2(html2.scrollHeight, html2.clientHeight, body.scrollHeight, body.clientHeight);
  let x4 = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y5 = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x4 += max2(html2.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x: x4,
    y: y5
  };
}
var SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html2 = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html2.clientWidth;
  let height = html2.clientHeight;
  let x4 = 0;
  let y5 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x4 = visualViewport.offsetLeft;
      y5 = visualViewport.offsetTop;
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html2);
  if (windowScrollbarX <= 0) {
    const doc = html2.ownerDocument;
    const body = doc.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
    const clippingStableScrollbarWidth = Math.abs(html2.clientWidth - body.clientWidth - bodyMarginInline);
    if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
      width -= clippingStableScrollbarWidth;
    }
  } else if (windowScrollbarX <= SCROLLBAR_MAX) {
    width += windowScrollbarX;
  }
  return {
    width,
    height,
    x: x4,
    y: y5
  };
}
var absoluteOrFixed = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x4 = left * scale.x;
  const y5 = top * scale.y;
  return {
    width,
    height,
    x: x4,
    y: y5
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement2(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement2(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result2 = getOverflowAncestors(element, [], false).filter((el) => isElement2(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement2(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result2 = result2.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result2);
  return result2;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max2(rect.top, accRect.top);
    accRect.right = min2(rect.right, accRect.right);
    accRect.bottom = min2(rect.bottom, accRect.bottom);
    accRect.left = max2(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x4 = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y5 = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x: x4,
    y: y5,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement2(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement: isElement2,
  isRTL
};
var offset2 = offset;
var shift2 = shift;
var flip3 = flip2;
var arrow2 = arrow;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/Tooltip.js
var import_classnames30 = __toESM(require_classnames(), 1);
var Tooltip2 = ({ children, content, placement = "top-start" }) => {
  const [isVisible, setIsVisible] = p2(false);
  const triggerRef = F2(null);
  const tooltipRef = F2(null);
  const arrowRef = F2(null);
  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);
  _2(() => {
    if (!isVisible || !triggerRef.current || !tooltipRef.current) {
      return;
    }
    const trigger = triggerRef.current;
    const tooltip = tooltipRef.current;
    computePosition2(trigger, tooltip, {
      placement,
      // Middleware runs in order to modify the position
      middleware: [
        offset2(8),
        // Add 8px of space between the trigger and tooltip
        flip3(),
        // Flip to the opposite side if it overflows
        shift2({ padding: 5 }),
        // Shift to keep it in view
        ...arrowRef.current ? [arrow2({ element: arrowRef.current })] : []
        // Handle arrow positioning
      ]
    }).then(({ x: x4, y: y5, placement: placement2, middlewareData }) => {
      Object.assign(tooltip.style, {
        left: `${x4}px`,
        top: `${y5}px`
      });
      if (middlewareData.arrow && arrowRef.current) {
        const { x: arrowX, y: arrowY } = middlewareData.arrow;
        const side = placement2.split("-")[0];
        const staticSide = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[side];
        const arrowElement = arrowRef.current;
        Object.assign(arrowElement.style, {
          left: "",
          top: "",
          right: "",
          bottom: ""
        });
        if (placement2.includes("-start") || placement2.includes("-end")) {
          const tooltipRect = tooltip.getBoundingClientRect();
          if (side === "top" || side === "bottom") {
            arrowElement.style.left = `${14}px`;
            if (arrowY != null) {
              arrowElement.style.top = `${arrowY}px`;
            }
          } else {
            arrowElement.style.top = `${tooltipRect.height / 2 - 4}px`;
            if (arrowX != null) {
              arrowElement.style.left = `${arrowX}px`;
            }
          }
        } else {
          if (arrowX != null) {
            arrowElement.style.left = `${arrowX}px`;
          }
          if (arrowY != null) {
            arrowElement.style.top = `${arrowY}px`;
          }
        }
        arrowElement.style[staticSide] = "-4px";
      }
    });
  }, [isVisible, placement, content]);
  const triggerWithListeners = F(children, {
    ref: triggerRef,
    onMouseEnter: showTooltip,
    onMouseLeave: hideTooltip,
    onFocus: showTooltip,
    onBlur: hideTooltip,
    "aria-describedby": "lightweight-tooltip"
    // for accessibility
  });
  return u6(g, { children: [
    triggerWithListeners,
    isVisible && u6(
      "div",
      {
        ref: tooltipRef,
        role: "tooltip",
        id: "lightweight-tooltip",
        className: (0, import_classnames30.default)("tooltip-container", visualBuilderStyles()["tooltip-container"]),
        children: [
          content,
          u6("div", { ref: arrowRef, className: (0, import_classnames30.default)("tooltip-arrow", visualBuilderStyles()["tooltip-arrow"]) })
        ]
      }
    )
  ] });
};
function ToolbarTooltipContent({ contentTypeName, referenceFieldName }) {
  return u6("div", { className: (0, import_classnames30.default)("toolbar-tooltip-content", visualBuilderStyles()["toolbar-tooltip-content"]), children: [
    contentTypeName && u6("div", { className: (0, import_classnames30.default)("toolbar-tooltip-content-item", visualBuilderStyles()["toolbar-tooltip-content-item"]), children: [
      u6(ContentTypeIcon, {}),
      u6("p", { children: contentTypeName })
    ] }),
    referenceFieldName && u6("div", { className: (0, import_classnames30.default)("toolbar-tooltip-content-item", visualBuilderStyles()["toolbar-tooltip-content-item"]), children: [
      u6("div", { dangerouslySetInnerHTML: { __html: FieldTypeIconsMap.reference }, className: (0, import_classnames30.default)("visual-builder__field-icon", visualBuilderStyles()["visual-builder__field-icon"]) }),
      u6("p", { children: referenceFieldName })
    ] })
  ] });
}
function ToolbarTooltip({ children, data, disabled = false }) {
  if (disabled) {
    return children;
  }
  const { contentTypeName, referenceFieldName } = data;
  return u6(Tooltip2, { content: u6(ToolbarTooltipContent, { contentTypeName, referenceFieldName }), children });
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/getEntryPermissions.js
async function getEntryPermissions({
  entryUid,
  contentTypeUid,
  locale
}) {
  var _a;
  try {
    const permissions = await ((_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send(
      VisualBuilderPostMessageEvents.GET_PERMISSIONS,
      {
        type: "entry",
        entryUid,
        contentTypeUid,
        locale
      }
    ));
    if (permissions) {
      return permissions;
    }
  } catch (error) {
    console.debug("[Visual Builder] Error fetching permissions", error);
  }
  return {
    create: true,
    read: true,
    update: true,
    delete: true,
    publish: true
  };
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/createCachedFetch.js
function createCachedFetch(fetchFn, uidResolver = (...args) => JSON.stringify(args)) {
  const cache = /* @__PURE__ */ new Map();
  const pendingPromises = /* @__PURE__ */ new Map();
  async function cachedFetch(...args) {
    const uid = uidResolver(...args);
    if (cache.has(uid)) {
      return cache.get(uid);
    }
    if (pendingPromises.has(uid)) {
      return pendingPromises.get(uid);
    }
    const promise = fetchFn(...args).then((data) => {
      cache.set(uid, data);
      pendingPromises.delete(uid);
      return data;
    }).catch((error) => {
      pendingPromises.delete(uid);
      throw error;
    });
    pendingPromises.set(uid, promise);
    return promise;
  }
  cachedFetch.clearCache = () => {
    cache.clear();
    pendingPromises.clear();
  };
  return cachedFetch;
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/getEntryPermissionsCached.js
var getEntryPermissionsCached = createCachedFetch(
  getEntryPermissions,
  ({ entryUid, contentTypeUid, locale }) => `${entryUid}.${contentTypeUid}.${locale}`
);

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/getWorkflowStageDetails.js
async function getWorkflowStageDetails({
  entryUid,
  contentTypeUid,
  locale,
  variantUid
}) {
  var _a;
  try {
    const result2 = await ((_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send(
      VisualBuilderPostMessageEvents.GET_WORKFLOW_STAGE_DETAILS,
      {
        entryUid,
        contentTypeUid,
        locale,
        variantUid
      }
    ));
    if (result2) {
      return result2;
    }
  } catch (e6) {
    console.debug(
      "[Visual Builder] Error fetching workflow stage details",
      e6
    );
  }
  return {
    stage: {
      name: "Unknown"
    },
    permissions: {
      entry: {
        update: true
      }
    }
  };
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/fetchEntryPermissionsAndStageDetails.js
async function fetchEntryPermissionsAndStageDetails({
  entryUid,
  contentTypeUid,
  locale,
  variantUid
}) {
  const entryAclPromise = getEntryPermissionsCached({
    entryUid,
    contentTypeUid,
    locale
  });
  const entryWorkflowStageDetailsPromise = getWorkflowStageDetails({
    entryUid,
    contentTypeUid,
    locale,
    variantUid
  });
  const results = await Promise.allSettled([
    entryAclPromise,
    entryWorkflowStageDetailsPromise
  ]);
  if (results[0].status === "rejected") {
    console.debug(
      "[Visual Builder] Error retrieving entry permissions",
      results[0].reason
    );
  }
  if (results[1].status === "rejected") {
    console.debug(
      "[Visual Builder] Error retrieving entry stage details",
      results[1].reason
    );
  }
  const acl = results[0].status === "fulfilled" ? results[0].value : void 0;
  const workflowStage = results[1].status === "fulfilled" ? results[1].value : void 0;
  return {
    acl,
    workflowStage
  };
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/VariantIndicator.js
function VariantIndicator() {
  return u6("div", { className: visualBuilderStyles()["visual-builder__variant-indicator"], children: u6(VariantIcon, { size: "18px" }) });
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/fieldLabelWrapper.js
async function getFieldDisplayNames(fieldMetadata) {
  var _a;
  const result2 = await ((_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send(VisualBuilderPostMessageEvents.GET_FIELD_DISPLAY_NAMES, fieldMetadata));
  return result2;
}
async function getContentTypeName(contentTypeUid) {
  var _a;
  try {
    const result2 = await ((_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send(VisualBuilderPostMessageEvents.GET_CONTENT_TYPE_NAME, {
      content_type_uid: contentTypeUid
    }));
    return result2 == null ? void 0 : result2.contentTypeName;
  } catch (e6) {
    console.warn("[getFieldLabelWrapper] Error getting content type name", e6);
    return "";
  }
}
async function getReferenceParentMap() {
  var _a;
  try {
    const result2 = await ((_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send(VisualBuilderPostMessageEvents.REFERENCE_MAP, {})) ?? {};
    return result2;
  } catch (e6) {
    console.warn("[getFieldLabelWrapper] Error getting reference parent map", e6);
    return {};
  }
}
function FieldLabelWrapperComponent(props) {
  const { eventDetails } = props;
  const [currentField, setCurrentField] = p2({
    text: "",
    contentTypeName: "",
    icon: u6(CaretIcon, {}),
    prefixIcon: null,
    disabled: false,
    isVariant: false,
    isReference: false,
    referenceFieldName: "",
    parentContentTypeName: ""
  });
  const [displayNames, setDisplayNames] = p2(
    {}
  );
  const [dataLoading, setDataLoading] = p2(true);
  const [error, setError] = p2(false);
  const [isDropdownOpen, setIsDropdownOpen] = p2(false);
  function calculateTopOffset(index) {
    const height = -30;
    const offset3 = (index + 1) * height;
    return `${offset3}px`;
  }
  _2(() => {
    const fetchData = async () => {
      var _a, _b;
      setDataLoading(true);
      const allPaths = uniqBy_default(
        [
          props.fieldMetadata,
          ...props.parentPaths.map((path) => {
            return extractDetailsFromCslp(path);
          })
        ],
        "cslpValue"
      );
      const [displayNames2, fieldSchema, contentTypeName, referenceParentMap] = await Promise.all([
        getFieldDisplayNames(allPaths),
        FieldSchemaMap.getFieldSchema(
          props.fieldMetadata.content_type_uid,
          props.fieldMetadata.fieldPath
        ),
        getContentTypeName(
          props.fieldMetadata.content_type_uid
        ),
        getReferenceParentMap()
      ]);
      const entryUid = props.fieldMetadata.entry_uid;
      const referenceData = referenceParentMap[entryUid];
      const isReference = !!referenceData;
      let referenceFieldName = referenceData ? referenceData[0].referenceFieldName : "";
      let parentContentTypeName = referenceData ? referenceData[0].contentTypeTitle : "";
      if (isReference) {
        const domAncestor = eventDetails.editableElement.closest(`[data-cslp]:not([data-cslp^="${props.fieldMetadata.content_type_uid}"])`);
        if (domAncestor) {
          const domAncestorCslp = domAncestor.getAttribute("data-cslp");
          const domAncestorDetails = extractDetailsFromCslp(domAncestorCslp);
          const domAncestorContentTypeUid = domAncestorDetails.content_type_uid;
          const domAncestorContentParent = referenceData == null ? void 0 : referenceData.find((data) => data.contentTypeUid === domAncestorContentTypeUid);
          if (domAncestorContentParent) {
            referenceFieldName = domAncestorContentParent.referenceFieldName;
            parentContentTypeName = domAncestorContentParent.contentTypeTitle;
          }
        }
      }
      if (hasPostMessageError(displayNames2) || !fieldSchema) {
        setDataLoading(false);
        setError(true);
        return;
      }
      const { acl: entryAcl, workflowStage: entryWorkflowStageDetails } = await fetchEntryPermissionsAndStageDetails({
        entryUid: props.fieldMetadata.entry_uid,
        contentTypeUid: props.fieldMetadata.content_type_uid,
        locale: props.fieldMetadata.locale,
        variantUid: props.fieldMetadata.variant
      });
      const { isDisabled: fieldDisabled, reason } = isFieldDisabled(
        fieldSchema,
        eventDetails,
        entryAcl,
        entryWorkflowStageDetails
      );
      const currentFieldDisplayName = (displayNames2 == null ? void 0 : displayNames2[props.fieldMetadata.cslpValue]) ?? fieldSchema.display_name;
      const hasParentPaths = !!((_a = props == null ? void 0 : props.parentPaths) == null ? void 0 : _a.length);
      const isVariant = props.fieldMetadata.variant ? true : false;
      setCurrentField({
        text: currentFieldDisplayName,
        contentTypeName: contentTypeName ?? "",
        icon: fieldDisabled ? u6(
          "div",
          {
            className: (0, import_classnames31.default)(
              visualBuilderStyles()["visual-builder__tooltip--persistent"]
            ),
            "data-tooltip": reason,
            children: u6(InfoIcon, {})
          }
        ) : hasParentPaths ? u6(CaretIcon, {}) : u6(g, {}),
        isReference,
        prefixIcon: getFieldIcon(fieldSchema),
        disabled: fieldDisabled,
        referenceFieldName,
        parentContentTypeName,
        isVariant
      });
      if (displayNames2) {
        setDisplayNames(displayNames2);
      }
      if (((_b = Object.keys(displayNames2 || {})) == null ? void 0 : _b.length) === allPaths.length) {
        setDataLoading(false);
      }
    };
    try {
      fetchData();
    } catch (e6) {
      console.warn("[getFieldLabelWrapper] Error fetching field label data", e6);
    }
  }, [props]);
  const onParentPathClick = (cslp) => {
    const parentElement = props.getParentEditableElement(cslp);
    if (parentElement) {
      parentElement.click();
    }
  };
  function getCurrentFieldIcon() {
    if (error) {
      return null;
    } else if (dataLoading) {
      return u6(LoadingIcon, {});
    } else {
      return currentField.icon;
    }
  }
  return u6(
    "div",
    {
      className: (0, import_classnames31.default)(
        "visual-builder__focused-toolbar__field-label-container",
        visualBuilderStyles()["visual-builder__focused-toolbar__field-label-container"]
      ),
      children: [
        currentField.isVariant ? u6(VariantIndicator, {}) : null,
        u6(ToolbarTooltip, { data: { contentTypeName: currentField.parentContentTypeName, referenceFieldName: currentField.referenceFieldName }, disabled: !currentField.isReference || isDropdownOpen, children: u6(
          "div",
          {
            className: (0, import_classnames31.default)(
              "visual-builder__focused-toolbar__field-label-wrapper",
              visualBuilderStyles()["visual-builder__focused-toolbar__field-label-wrapper"],
              {
                "visual-builder__focused-toolbar--field-disabled": currentField.disabled
              },
              {
                [visualBuilderStyles()["visual-builder__focused-toolbar--field-disabled"]]: currentField.disabled
              },
              {
                "field-label-dropdown-open": isDropdownOpen,
                [visualBuilderStyles()["field-label-dropdown-open"]]: isDropdownOpen
              },
              {
                "visual-builder__focused-toolbar--variant": currentField.isVariant
              },
              {
                [visualBuilderStyles()["visual-builder__focused-toolbar--variant"]]: currentField.isVariant
              }
            ),
            onClick: () => setIsDropdownOpen((prev) => !prev),
            "data-testid": "visual-builder__focused-toolbar__field-label-wrapper",
            "data-hovered-cslp": props.fieldMetadata.cslpValue,
            children: [
              u6(
                "button",
                {
                  className: (0, import_classnames31.default)(
                    "visual-builder__focused-toolbar__field-label-wrapper__current-field visual-builder__button visual-builder__button--primary visual-builder__button-loader",
                    visualBuilderStyles()["visual-builder__focused-toolbar__field-label-wrapper__current-field"],
                    visualBuilderStyles()["visual-builder__button"],
                    visualBuilderStyles()["visual-builder__button--primary"],
                    visualBuilderStyles()["visual-builder__button-loader"],
                    error && visualBuilderStyles()["visual-builder__button-error"]
                  ),
                  disabled: dataLoading,
                  children: [
                    currentField.isReference && !dataLoading && !error ? u6(
                      "div",
                      {
                        className: (0, import_classnames31.default)(
                          "visual-builder__reference-icon-container",
                          visualBuilderStyles()["visual-builder__reference-icon-container"]
                        ),
                        children: [
                          u6(
                            "div",
                            {
                              className: (0, import_classnames31.default)(
                                "visual-builder__field-icon",
                                visualBuilderStyles()["visual-builder__field-icon"]
                              ),
                              dangerouslySetInnerHTML: {
                                __html: FieldTypeIconsMap.reference
                              },
                              "data-testid": "visual-builder__field-icon-caret"
                            }
                          ),
                          u6(CaretRightIcon, {})
                        ]
                      }
                    ) : null,
                    currentField.contentTypeName && !dataLoading && !error ? u6(g, { children: [
                      u6(ContentTypeIcon, {}),
                      u6(
                        "div",
                        {
                          className: (0, import_classnames31.default)(
                            "visual-builder__focused-toolbar__text",
                            visualBuilderStyles()["visual-builder__focused-toolbar__text"]
                          ),
                          "data-testid": "visual-builder__focused-toolbar__ct-name",
                          children: currentField.contentTypeName + " : "
                        }
                      )
                    ] }) : null,
                    currentField.prefixIcon ? u6(
                      "div",
                      {
                        className: (0, import_classnames31.default)(
                          "visual-builder__field-icon",
                          visualBuilderStyles()["visual-builder__field-icon"]
                        ),
                        dangerouslySetInnerHTML: {
                          __html: currentField.prefixIcon
                        },
                        "data-testid": "visual-builder__field-icon"
                      }
                    ) : null,
                    currentField.text ? u6(
                      "div",
                      {
                        className: (0, import_classnames31.default)(
                          "visual-builder__focused-toolbar__text",
                          visualBuilderStyles()["visual-builder__focused-toolbar__text"]
                        ),
                        "data-testid": "visual-builder__focused-toolbar__text",
                        children: currentField.text
                      }
                    ) : null,
                    getCurrentFieldIcon(),
                    error ? u6(CslpError, {}) : null
                  ]
                }
              ),
              props.parentPaths.map((path, index) => u6(
                "button",
                {
                  className: (0, import_classnames31.default)(
                    "visual-builder__focused-toolbar__field-label-wrapper__parent-field visual-builder__button visual-builder__button--secondary visual-builder__focused-toolbar__text",
                    visualBuilderStyles()["visual-builder__focused-toolbar__field-label-wrapper__parent-field"],
                    visualBuilderStyles()["visual-builder__button"],
                    visualBuilderStyles()["visual-builder__button--secondary"],
                    visualBuilderStyles()["visual-builder__focused-toolbar__text"]
                  ),
                  "data-target-cslp": path,
                  style: { top: calculateTopOffset(index) },
                  onClick: () => onParentPathClick(path),
                  children: displayNames[path]
                },
                path
              ))
            ]
          }
        ) })
      ]
    }
  );
}
var fieldLabelWrapper_default = FieldLabelWrapperComponent;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/generators/generateToolbar.js
function appendFocusedToolbar(eventDetails, focusedToolbarElement, hideOverlay2, isVariant = false, options) {
  appendFieldPathDropdown(eventDetails, focusedToolbarElement, options);
  if (options == null ? void 0 : options.isHover) {
    return;
  }
  appendFieldToolbar(
    eventDetails,
    focusedToolbarElement,
    hideOverlay2,
    isVariant
  );
}
async function appendFieldToolbar(eventDetails, focusedToolbarElement, hideOverlay2, isVariant = false, options) {
  const { isHover } = options || {};
  if (focusedToolbarElement.querySelector(
    ".visual-builder__focused-toolbar__multiple-field-toolbar"
  ) && !isHover)
    return;
  const { acl: entryPermissions, workflowStage: entryWorkflowStageDetails } = await fetchEntryPermissionsAndStageDetails({
    entryUid: eventDetails.fieldMetadata.entry_uid,
    contentTypeUid: eventDetails.fieldMetadata.content_type_uid,
    locale: eventDetails.fieldMetadata.locale,
    variantUid: eventDetails.fieldMetadata.variant
  });
  const wrapper = document.createDocumentFragment();
  B(
    u6(
      FieldToolbar_default,
      {
        eventDetails,
        hideOverlay: hideOverlay2,
        isVariant,
        entryPermissions,
        entryWorkflowStageDetails
      }
    ),
    wrapper
  );
  focusedToolbarElement.append(wrapper);
}
function appendFieldPathDropdown(eventDetails, focusedToolbarElement, options) {
  const { isHover } = options || {};
  const fieldLabelWrapper = document.querySelector(
    ".visual-builder__focused-toolbar__field-label-wrapper"
  );
  const { editableElement: targetElement, fieldMetadata } = eventDetails;
  if (fieldLabelWrapper) {
    if (isHover) {
      const fieldCslp = fieldLabelWrapper.getAttribute("data-hovered-cslp");
      if (fieldCslp === fieldMetadata.cslpValue) {
        return;
      } else {
        removeFieldToolbar(focusedToolbarElement);
      }
    } else {
      return;
    }
  }
  const targetElementDimension = targetElement.getBoundingClientRect();
  const distanceFromTop = targetElementDimension.top + window.scrollY - TOOLBAR_EDGE_BUFFER;
  const adjustedDistanceFromTop = targetElementDimension.top + window.scrollY < TOP_EDGE_BUFFER ? distanceFromTop + targetElementDimension.height + TOP_EDGE_BUFFER : distanceFromTop;
  const distanceFromLeft = targetElementDimension.left - LIVE_PREVIEW_OUTLINE_WIDTH_IN_PX;
  const adjustedDistanceFromLeft = Math.max(
    distanceFromLeft,
    TOOLBAR_EDGE_BUFFER
  );
  const targetElementRightEdgeOffset = window.scrollX + window.innerWidth - targetElementDimension.left;
  if (targetElementRightEdgeOffset < RIGHT_EDGE_BUFFER) {
    focusedToolbarElement.style.justifyContent = "flex-end";
    focusedToolbarElement.style.left = `${targetElementDimension.right + LIVE_PREVIEW_OUTLINE_WIDTH_IN_PX}px`;
  } else {
    focusedToolbarElement.style.justifyContent = "flex-start";
    focusedToolbarElement.style.left = `${adjustedDistanceFromLeft}px`;
  }
  focusedToolbarElement.style.top = `${adjustedDistanceFromTop}px`;
  const parentPaths = collectParentCSLPPaths(targetElement, 2);
  const wrapper = document.createDocumentFragment();
  B(
    u6(
      fieldLabelWrapper_default,
      {
        fieldMetadata,
        eventDetails,
        parentPaths,
        getParentEditableElement: (cslp) => {
          const parentElement = targetElement.closest(
            `[${DATA_CSLP_ATTR_SELECTOR}="${cslp}"]`
          );
          return parentElement;
        }
      }
    ),
    wrapper
  );
  focusedToolbarElement.appendChild(wrapper);
}
function collectParentCSLPPaths(targetElement, count) {
  const cslpPaths = [];
  let currentElement = targetElement.parentElement;
  while (count > 0 || currentElement === window.document.body) {
    if (!currentElement) {
      return cslpPaths;
    }
    if (currentElement.hasAttribute(DATA_CSLP_ATTR_SELECTOR)) {
      cslpPaths.push(
        currentElement.getAttribute(DATA_CSLP_ATTR_SELECTOR)
      );
      count--;
    }
    currentElement = currentElement.parentElement;
  }
  return cslpPaths;
}
function removeFieldToolbar(toolbar) {
  toolbar.innerHTML = "";
  const toolbarEvents = [
    VisualBuilderPostMessageEvents.DELETE_INSTANCE,
    VisualBuilderPostMessageEvents.UPDATE_DISCUSSION_ID,
    VisualBuilderPostMessageEvents.FIELD_LOCATION_DATA
  ];
  toolbarEvents.forEach((event) => {
    var _a, _b, _c, _d;
    if ((_b = (_a = visualBuilderPostMessage_default) == null ? void 0 : _a.requestMessageHandlers) == null ? void 0 : _b.has(event)) {
      (_d = (_c = visualBuilderPostMessage_default) == null ? void 0 : _c.unregisterEvent) == null ? void 0 : _d.call(_c, event);
    }
  });
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/listeners/mouseHover.js
var config = configManager_default.get();
function resetCustomCursor(customCursor) {
  if (customCursor) {
    generateCustomCursor({
      fieldType: "empty",
      customCursor
    });
  }
}
function collabCustomCursor(customCursor) {
  if (!customCursor) return;
  generateCustomCursor({
    fieldType: "discussion",
    customCursor
  });
}
function handleCursorPosition(event, customCursor) {
  if (customCursor) {
    const mouseY = event.clientY;
    const mouseX = event.clientX;
    customCursor.style.left = `${mouseX}px`;
    customCursor.style.top = `${mouseY}px`;
  }
}
async function addOutline(params) {
  if (!params) {
    return;
  }
  const {
    editableElement,
    eventDetails,
    content_type_uid,
    fieldPath,
    fieldMetadata,
    fieldDisabled
  } = params;
  if (!editableElement) return;
  const isVariant = !!fieldMetadata.variant;
  addHoverOutline(editableElement, fieldDisabled, isVariant);
  const fieldSchema = await FieldSchemaMap.getFieldSchema(
    content_type_uid,
    fieldPath
  );
  if (!fieldSchema) return;
  const { acl: entryAcl, workflowStage: entryWorkflowStageDetails } = await fetchEntryPermissionsAndStageDetails({
    entryUid: fieldMetadata.entry_uid,
    contentTypeUid: fieldMetadata.content_type_uid,
    locale: fieldMetadata.locale,
    variantUid: fieldMetadata.variant
  });
  const { isDisabled } = isFieldDisabled(
    fieldSchema,
    eventDetails,
    entryAcl,
    entryWorkflowStageDetails
  );
  addHoverOutline(editableElement, fieldDisabled || isDisabled, isVariant);
}
var debouncedAddOutline = debounce_default(addOutline, 50, { trailing: true });
var showOutline = (params) => debouncedAddOutline(params);
function hideDefaultCursor() {
  if ((document == null ? void 0 : document.body) && !document.body.classList.contains(
    visualBuilderStyles()["visual-builder__default-cursor--disabled"]
  ))
    document.body.classList.add(
      visualBuilderStyles()["visual-builder__default-cursor--disabled"]
    );
}
function showDefaultCursor() {
  if ((document == null ? void 0 : document.body) && document.body.classList.contains(
    visualBuilderStyles()["visual-builder__default-cursor--disabled"]
  ))
    document.body.classList.remove(
      visualBuilderStyles()["visual-builder__default-cursor--disabled"]
    );
}
function hideHoverOutline(visualBuilderContainer) {
  if (!visualBuilderContainer) {
    return;
  }
  const hoverOutline = visualBuilderContainer.querySelector(
    ".visual-builder__hover-outline"
  );
  if (!hoverOutline) {
    return;
  }
  hoverOutline.classList.add(
    visualBuilderStyles()["visual-builder__hover-outline--hidden"]
  );
}
function hideCustomCursor(customCursor) {
  showDefaultCursor();
  customCursor == null ? void 0 : customCursor.classList.remove("visible");
}
function showCustomCursor(customCursor) {
  hideDefaultCursor();
  if (config.collab.enable && (!config.collab.isFeedbackMode || config.collab.pauseFeedback))
    return;
  customCursor == null ? void 0 : customCursor.classList.add("visible");
}
var debouncedRenderHoverToolbar = debounce_default(async (params) => {
  const eventDetails = getCsDataOfElement(params.event);
  if (!eventDetails || !params.overlayWrapper || !params.visualBuilderContainer || !params.focusedToolbar) {
    return;
  }
  appendFieldPathDropdown(eventDetails, params.focusedToolbar, {
    isHover: true
  });
}, 50, { trailing: true });
var showHoverToolbar = async (params) => await debouncedRenderHoverToolbar(params);
function isOverlay(target) {
  return target.classList.contains("visual-builder__overlay");
}
function isContentEditable(target) {
  if (target.hasAttribute("contenteditable"))
    return target.getAttribute("contenteditable") === "true";
  return false;
}
function isFieldPathDropdown(target) {
  return target.classList.contains("visual-builder__focused-toolbar__field-label-wrapper") || target.classList.contains("visual-builder__focused-toolbar__field-label-wrapper__current-field");
}
function isFieldPathParent(target) {
  return target.classList.contains("visual-builder__focused-toolbar__field-label-wrapper__parent-field");
}
var throttledMouseHover = throttle_default(async (params) => {
  const eventDetails = getCsDataOfElement(params.event);
  const eventTarget = params.event.target;
  if ((config == null ? void 0 : config.collab.enable) && (config == null ? void 0 : config.collab.pauseFeedback)) {
    hideCustomCursor(params.customCursor);
    return;
  }
  if (!eventDetails) {
    if (eventTarget && (isOverlay(eventTarget) || isContentEditable(eventTarget) || isCollabThread(eventTarget))) {
      handleCursorPosition(params.event, params.customCursor);
      hideCustomCursor(params.customCursor);
      return;
    }
    if (eventTarget && (isFieldPathDropdown(eventTarget) || isFieldPathParent(eventTarget))) {
      params.customCursor && hideCustomCursor(params.customCursor);
      showOutline();
      showHoverToolbar({
        event: params.event,
        overlayWrapper: params.overlayWrapper,
        visualBuilderContainer: params.visualBuilderContainer,
        previousSelectedEditableDOM: VisualBuilder.VisualBuilderGlobalState.value.previousSelectedEditableDOM,
        focusedToolbar: params.focusedToolbar,
        resizeObserver: params.resizeObserver
      });
    }
    if (!(config == null ? void 0 : config.collab.enable)) {
      resetCustomCursor(params.customCursor);
    }
    removeAddInstanceButtons({
      eventTarget: params.event.target,
      visualBuilderContainer: params.visualBuilderContainer,
      overlayWrapper: params.overlayWrapper
    });
    handleCursorPosition(params.event, params.customCursor);
    if ((config == null ? void 0 : config.collab.enable) && (config == null ? void 0 : config.collab.isFeedbackMode)) {
      showCustomCursor(params.customCursor);
      collabCustomCursor(params.customCursor);
    }
    return;
  }
  const { editableElement, fieldMetadata } = eventDetails;
  const { content_type_uid, fieldPath } = fieldMetadata;
  if (VisualBuilder.VisualBuilderGlobalState.value.previousSelectedEditableDOM && VisualBuilder.VisualBuilderGlobalState.value.previousSelectedEditableDOM.isSameNode(
    editableElement
  )) {
    hideCustomCursor(params.customCursor);
    return;
  }
  if (params.customCursor) {
    const elementUnderCursor = document.elementFromPoint(
      params.event.clientX,
      params.event.clientY
    );
    if (elementUnderCursor) {
      if (elementUnderCursor.nodeName === "A" || elementUnderCursor.nodeName === "BUTTON") {
        elementUnderCursor.classList.add(
          visualBuilderStyles()["visual-builder__no-cursor-style"]
        );
      }
    }
    if ((config == null ? void 0 : config.collab.enable) && (config == null ? void 0 : config.collab.isFeedbackMode)) {
      collabCustomCursor(params.customCursor);
      handleCursorPosition(params.event, params.customCursor);
      showCustomCursor(params.customCursor);
      return;
    } else if ((config == null ? void 0 : config.collab.enable) && !(config == null ? void 0 : config.collab.isFeedbackMode)) {
      hideCustomCursor(params.customCursor);
      return;
    }
    if (VisualBuilder.VisualBuilderGlobalState.value.previousHoveredTargetDOM !== editableElement) {
      resetCustomCursor(params.customCursor);
      removeAddInstanceButtons({
        eventTarget: params.event.target,
        visualBuilderContainer: params.visualBuilderContainer,
        overlayWrapper: params.overlayWrapper
      });
    }
    if (!FieldSchemaMap.hasFieldSchema(content_type_uid, fieldPath)) {
      generateCustomCursor({
        fieldType: "loading",
        customCursor: params.customCursor
      });
    }
    generateCursor({
      eventDetails,
      customCursor: params.customCursor
    });
    handleCursorPosition(params.event, params.customCursor);
    showCustomCursor(params.customCursor);
  }
  if (!editableElement.classList.contains(VB_EmptyBlockParentClass) && !editableElement.classList.contains("visual-builder__empty-block")) {
    showOutline({
      editableElement,
      eventDetails,
      content_type_uid,
      fieldPath,
      fieldMetadata
    });
    const isFocussed = VisualBuilder.VisualBuilderGlobalState.value.isFocussed;
    if (!isFocussed) {
      showHoverToolbar(
        {
          event: params.event,
          overlayWrapper: params.overlayWrapper,
          visualBuilderContainer: params.visualBuilderContainer,
          previousSelectedEditableDOM: VisualBuilder.VisualBuilderGlobalState.value.previousSelectedEditableDOM,
          focusedToolbar: params.focusedToolbar,
          resizeObserver: params.resizeObserver
        }
      );
    }
  }
  if (VisualBuilder.VisualBuilderGlobalState.value.previousHoveredTargetDOM === editableElement) {
    return;
  }
  VisualBuilder.VisualBuilderGlobalState.value.previousHoveredTargetDOM = editableElement;
}, 10);
async function generateCursor({
  eventDetails,
  customCursor
}) {
  if (!customCursor) return;
  const { fieldMetadata } = eventDetails;
  const fieldSchema = await FieldSchemaMap.getFieldSchema(
    fieldMetadata.content_type_uid,
    fieldMetadata.fieldPath
  );
  if (!fieldSchema) {
    return;
  }
  const { acl: entryAcl, workflowStage: entryWorkflowStageDetails } = await fetchEntryPermissionsAndStageDetails({
    entryUid: fieldMetadata.entry_uid,
    contentTypeUid: fieldMetadata.content_type_uid,
    locale: fieldMetadata.locale,
    variantUid: fieldMetadata.variant
  });
  const { isDisabled: fieldDisabled } = isFieldDisabled(
    fieldSchema,
    eventDetails,
    entryAcl,
    entryWorkflowStageDetails
  );
  const fieldType = getFieldType(fieldSchema);
  generateCustomCursor({
    fieldType,
    customCursor,
    fieldDisabled
  });
}
var handleMouseHover = async (params) => await throttledMouseHover(params);
var mouseHover_default = handleMouseHover;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/multipleElementAddButton.js
var WAIT_FOR_NEW_INSTANCE_TIMEOUT = 4e3;
function handleAddButtonsForMultiple(eventDetails, elements, config2) {
  var _a, _b;
  const { editableElement, visualBuilderContainer, resizeObserver } = elements;
  const { expectedFieldData, fieldSchema, disabled, label } = config2;
  const parentCslpValue = (_b = (_a = eventDetails.fieldMetadata.multipleFieldMetadata) == null ? void 0 : _a.parentDetails) == null ? void 0 : _b.parentCslpValue;
  if (!editableElement || !parentCslpValue) {
    return;
  }
  const direction = getChildrenDirection(editableElement, parentCslpValue);
  if (direction === "none" || !visualBuilderContainer) {
    return;
  }
  const targetDOMDimension = editableElement.getBoundingClientRect();
  removeAddInstanceButtons(
    {
      visualBuilderContainer,
      eventTarget: null,
      overlayWrapper: null
    },
    true
  );
  const overlayWrapper = visualBuilderContainer.querySelector(
    ".visual-builder__overlay__wrapper"
  );
  const focusedToolbar = visualBuilderContainer.querySelector(
    ".visual-builder__focused-toolbar"
  );
  const hideOverlayAndHoverOutline = () => {
    hideHoverOutline(visualBuilderContainer);
    hideOverlay({
      visualBuilderContainer,
      visualBuilderOverlayWrapper: overlayWrapper,
      focusedToolbar,
      resizeObserver
    });
  };
  if (disabled) {
    return;
  }
  const isField = eventDetails.fieldMetadata.instance.fieldPathWithIndex === eventDetails.fieldMetadata.fieldPathWithIndex;
  const prevIndex = isField ? 0 : eventDetails.fieldMetadata.multipleFieldMetadata.index;
  const nextIndex = isField ? expectedFieldData.length : eventDetails.fieldMetadata.multipleFieldMetadata.index + 1;
  const parentCslp = isField ? eventDetails.cslpData : parentCslpValue;
  const onMessageSent = (index) => {
    hideOverlayAndHoverOutline();
    observeParentAndFocusNewInstance({
      parentCslp,
      index
    });
  };
  const loading = d3(false);
  const previousButton = generateAddInstanceButton({
    fieldSchema,
    value: expectedFieldData,
    fieldMetadata: eventDetails.fieldMetadata,
    index: prevIndex,
    onClick: onMessageSent.bind(null, prevIndex),
    loading,
    label
  });
  const nextButton = generateAddInstanceButton({
    fieldSchema,
    value: expectedFieldData,
    fieldMetadata: eventDetails.fieldMetadata,
    index: nextIndex,
    onClick: onMessageSent.bind(null, nextIndex),
    loading,
    label
  });
  if (!visualBuilderContainer.contains(previousButton)) {
    visualBuilderContainer.appendChild(previousButton);
  }
  if (!visualBuilderContainer.contains(nextButton)) {
    visualBuilderContainer.appendChild(nextButton);
  }
  if (direction === "horizontal") {
    const middleHeight = targetDOMDimension.top + (targetDOMDimension.bottom - targetDOMDimension.top) / 2 + window.scrollY;
    previousButton.style.left = `${targetDOMDimension.left}px`;
    previousButton.style.top = `${middleHeight}px`;
    nextButton.style.left = `${targetDOMDimension.right}px`;
    nextButton.style.top = `${middleHeight}px`;
  } else {
    const middleWidth = targetDOMDimension.left + (targetDOMDimension.right - targetDOMDimension.left) / 2;
    previousButton.style.left = `${middleWidth}px`;
    previousButton.style.top = `${targetDOMDimension.top + window.scrollY}px`;
    nextButton.style.left = `${middleWidth}px`;
    nextButton.style.top = `${targetDOMDimension.bottom + window.scrollY}px`;
  }
}
function removeAddInstanceButtons(elements, forceRemoveAll = false) {
  const { visualBuilderContainer, overlayWrapper, eventTarget } = elements;
  if (!visualBuilderContainer) {
    return;
  }
  if (forceRemoveAll) {
    const addInstanceButtons2 = getAddInstanceButtons(
      visualBuilderContainer,
      true
    );
    addInstanceButtons2 == null ? void 0 : addInstanceButtons2.forEach((button) => button.remove());
  }
  const addInstanceButtons = getAddInstanceButtons(visualBuilderContainer);
  if (!addInstanceButtons) {
    return;
  }
  const [previousButton, nextButton] = addInstanceButtons;
  if (overlayWrapper == null ? void 0 : overlayWrapper.classList.contains("visible")) {
    return;
  }
  if (eventTarget && (previousButton.contains(eventTarget) || nextButton.contains(eventTarget))) {
    return;
  }
  nextButton.remove();
  previousButton.remove();
}
function observeParentAndFocusNewInstance({
  parentCslp,
  index
}) {
  const parent2 = document.querySelector(
    `[data-cslp='${parentCslp}']`
  );
  if (parent2) {
    const expectedCslp = [parentCslp, index].join(".");
    let hasObserverDisconnected = false;
    let timeoutId = null;
    const mutationObserver = new MutationObserver(
      (_mutations, observer) => {
        const newInstance = parent2.querySelector(
          `[data-cslp='${expectedCslp}']`
        );
        if (newInstance) {
          setTimeout(() => newInstance.click(), 350);
          observer.disconnect();
          hasObserverDisconnected = true;
          return;
        }
        if (!hasObserverDisconnected && !timeoutId) {
          timeoutId = setTimeout(() => {
            observer.disconnect();
            hasObserverDisconnected = false;
          }, WAIT_FOR_NEW_INSTANCE_TIMEOUT);
        }
      }
    );
    mutationObserver.observe(parent2, {
      childList: true,
      // watch subtrees as there may be wrapper elements
      subtree: true,
      // we don't need to watch for attribute changes
      attributes: false
    });
  }
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/isFieldMultiple.js
function isFieldMultiple(fieldSchema) {
  return fieldSchema && (fieldSchema.multiple || fieldSchema.data_type === "reference" && // @ts-expect-error field_metadata will contain ref_multiple
  // for reference fields
  fieldSchema.field_metadata.ref_multiple);
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/pseudoEditableField.js
var import_classnames32 = __toESM(require_classnames(), 1);

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/getCamelCaseStyles.js
function getCamelCaseStyles(styles) {
  return Object.keys(styles).reduce((acc, key) => {
    acc[camelCase_default(key)] = styles[key];
    return acc;
  }, {});
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/getPsuedoEditableEssentialStyles.js
function getPsuedoEditableEssentialStyles({
  rect,
  camelCase: camelCase2
}) {
  const overrides = {
    position: "absolute",
    top: `${rect.top + window.scrollY}px`,
    left: `${rect.left + window.scrollX}px`,
    height: "auto",
    "min-height": `${Math.abs(rect.height)}px`,
    "white-space": "normal",
    "text-transform": "none",
    "text-wrap-mode": "wrap",
    "text-overflow": "visible"
  };
  return camelCase2 ? getCamelCaseStyles(overrides) : overrides;
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/getStyleOfAnElement.js
function getStyleOfAnElement(element) {
  const styleSheetDeclaration = window.getComputedStyle(element);
  const styleSheetArray = Array.from(styleSheetDeclaration);
  const FILTER_STYLES = [
    "position",
    "left",
    "top",
    "right",
    "bottom",
    "text-overflow",
    // allows seeing the text from CMS field as-is
    "text-transform",
    "margin",
    "margin-block-end",
    "margin-block-start",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "margin-bottom",
    "-webkit-user-modify",
    "cursor"
  ];
  const styles = {};
  styleSheetArray.forEach((style) => {
    if (!FILTER_STYLES.includes(style)) {
      const styleValue = styleSheetDeclaration.getPropertyValue(style);
      styles[style] = styleValue;
    }
  });
  return styles;
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/getPsuedoEditableStylesElement.js
function getPsuedoEditableElementStyles(psuedoEditableElement, camelCase2) {
  let styles = getStyleOfAnElement(psuedoEditableElement);
  const rect = psuedoEditableElement.getBoundingClientRect();
  if (camelCase2) {
    styles = getCamelCaseStyles(styles);
  }
  const overrides = getPsuedoEditableEssentialStyles({ rect, camelCase: camelCase2 });
  return { ...styles, ...overrides };
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/pseudoEditableField.js
function PseudoEditableFieldComponent(props) {
  const styles = getPsuedoEditableElementStyles(props.editableElement, true);
  return u6(
    "div",
    {
      className: (0, import_classnames32.default)(
        "visual-builder__pseudo-editable-element",
        visualBuilderStyles()["visual-builder__pseudo-editable-element"]
      ),
      "data-testid": "visual-builder__pseudo-editable-element",
      style: styles,
      children: props.config.textContent
    }
  );
}
var pseudoEditableField_default = PseudoEditableFieldComponent;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/generators/generatePseudoEditableField.js
function isEllipsisActive(element) {
  return element.offsetWidth < element.scrollWidth;
}
function generatePseudoEditableElement(elements, config2) {
  const { editableElement } = elements;
  const visualBuilderContainer = document.querySelector(
    ".visual-builder__container"
  );
  const wrapper = document.createDocumentFragment();
  B(
    u6(
      pseudoEditableField_default,
      {
        editableElement,
        config: config2
      }
    ),
    wrapper
  );
  visualBuilderContainer == null ? void 0 : visualBuilderContainer.appendChild(wrapper);
  const pseudoEditableElement = document.querySelector(
    ".visual-builder__pseudo-editable-element"
  );
  return pseudoEditableElement;
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/getMultilinePlaintext.js
function getMultilinePlaintext(editableElement) {
  let newValue = "";
  let isOnFreshLine = true;
  function parseChildNodesForValueAndLines(childNodes) {
    for (let i8 = 0; i8 < childNodes.length; i8++) {
      const childNode = childNodes[i8];
      if (childNode.nodeName === "BR") {
        newValue += "\n";
        isOnFreshLine = true;
        continue;
      }
      if (childNode.nodeName === "DIV" && isOnFreshLine === false && i8 !== 0) {
        newValue += "\n";
      }
      isOnFreshLine = false;
      if (childNode.nodeType === 3 && childNode.textContent && childNode.textContent.trim() !== "") {
        newValue += childNode.textContent;
      }
      parseChildNodesForValueAndLines(childNode.childNodes);
    }
  }
  parseChildNodesForValueAndLines(editableElement.childNodes);
  return newValue;
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/updateFocussedState.js
function positionToolbar({
  focusedToolbar,
  selectedElementDimension
}) {
  if (focusedToolbar) {
    const targetElementRightEdgeOffset = window.scrollX + window.innerWidth - selectedElementDimension.left;
    const distanceFromTop = selectedElementDimension.top + window.scrollY - TOOLBAR_EDGE_BUFFER;
    const adjustedDistanceFromTop = selectedElementDimension.top + window.scrollY < TOP_EDGE_BUFFER ? distanceFromTop + selectedElementDimension.height + TOP_EDGE_BUFFER : distanceFromTop;
    const distanceFromLeft = selectedElementDimension.left - LIVE_PREVIEW_OUTLINE_WIDTH_IN_PX;
    const adjustedDistanceFromLeft = Math.max(
      distanceFromLeft,
      TOOLBAR_EDGE_BUFFER
    );
    if (targetElementRightEdgeOffset < RIGHT_EDGE_BUFFER && (focusedToolbar.style.justifyContent !== "flex-end" || focusedToolbar.style.left !== `${selectedElementDimension.right + LIVE_PREVIEW_OUTLINE_WIDTH_IN_PX}px`)) {
      focusedToolbar.style.justifyContent = "flex-end";
      focusedToolbar.style.left = `${selectedElementDimension.right + LIVE_PREVIEW_OUTLINE_WIDTH_IN_PX}px`;
    } else if (focusedToolbar.style.justifyContent !== "flex-start" || focusedToolbar.style.left !== `${adjustedDistanceFromLeft}px`) {
      focusedToolbar.style.justifyContent = "flex-start";
      focusedToolbar.style.left = `${adjustedDistanceFromLeft}px`;
    }
    if (focusedToolbar.style.top !== `${adjustedDistanceFromTop}px`) {
      focusedToolbar.style.top = `${adjustedDistanceFromTop}px`;
    }
  }
}
async function updateFocussedState({
  editableElement,
  visualBuilderContainer,
  overlayWrapper,
  focusedToolbar,
  resizeObserver
}) {
  var _a, _b;
  let previousSelectedEditableDOM = VisualBuilder.VisualBuilderGlobalState.value.previousSelectedEditableDOM;
  if (!visualBuilderContainer || !editableElement || !previousSelectedEditableDOM || !overlayWrapper) {
    return;
  }
  const previousSelectedElementCslp = (editableElement == null ? void 0 : editableElement.getAttribute("data-cslp")) || "";
  const previousSelectedElementCslpUniqueId = previousSelectedEditableDOM == null ? void 0 : previousSelectedEditableDOM.getAttribute("data-cslp-unique-id");
  const newPreviousSelectedElement = document.querySelector(
    `[data-cslp-unique-id="${previousSelectedElementCslpUniqueId}"]`
  ) || document.querySelector(`[data-cslp="${previousSelectedElementCslp}"]`);
  if (!newPreviousSelectedElement && resizeObserver) {
    hideFocusOverlay({
      visualBuilderOverlayWrapper: overlayWrapper,
      focusedToolbar,
      visualBuilderContainer,
      resizeObserver,
      noTrigger: true
    });
    return;
  }
  if (newPreviousSelectedElement !== previousSelectedEditableDOM) {
    previousSelectedEditableDOM = newPreviousSelectedElement;
    VisualBuilder.VisualBuilderGlobalState.value.previousSelectedEditableDOM = previousSelectedEditableDOM;
  }
  const cslp = (editableElement == null ? void 0 : editableElement.getAttribute("data-cslp")) || "";
  const fieldMetadata = extractDetailsFromCslp(cslp);
  hideHoverOutline(visualBuilderContainer);
  const fieldSchema = await FieldSchemaMap.getFieldSchema(
    fieldMetadata.content_type_uid,
    fieldMetadata.fieldPath
  );
  const { acl: entryAcl, workflowStage: entryWorkflowStageDetails } = await fetchEntryPermissionsAndStageDetails({
    entryUid: fieldMetadata.entry_uid,
    contentTypeUid: fieldMetadata.content_type_uid,
    locale: fieldMetadata.locale,
    variantUid: fieldMetadata.variant
  });
  const { isDisabled } = isFieldDisabled(
    fieldSchema,
    { editableElement, fieldMetadata },
    entryAcl,
    entryWorkflowStageDetails
  );
  addFocusOverlay(previousSelectedEditableDOM, overlayWrapper, isDisabled);
  const psuedoEditableElement = visualBuilderContainer.querySelector(
    ".visual-builder__pseudo-editable-element"
  );
  if (psuedoEditableElement) {
    const styles = getPsuedoEditableElementStyles(editableElement);
    const styleString = Object.entries(styles).reduce(
      (acc, [key, value]) => {
        return `${acc}${key}:${value};`;
      },
      ""
    );
    psuedoEditableElement.style.cssText = styleString;
    psuedoEditableElement.style.visibility = "visible";
  }
  const targetElementDimension = editableElement.getBoundingClientRect();
  if (targetElementDimension.width && targetElementDimension.height) {
    const selectedElement = VisualBuilder.VisualBuilderGlobalState.value.previousSelectedEditableDOM;
    if (!selectedElement) return;
    positionToolbar({
      focusedToolbar,
      selectedElementDimension: selectedElement.getBoundingClientRect()
    });
  }
  const buttons = getAddInstanceButtons(visualBuilderContainer);
  const parentCslpValue = (_b = (_a = fieldMetadata.multipleFieldMetadata) == null ? void 0 : _a.parentDetails) == null ? void 0 : _b.parentCslpValue;
  if (buttons && parentCslpValue && buttons.length > 1 && buttons[0] && buttons[1]) {
    const [previousButton, nextButton] = buttons;
    const direction = getChildrenDirection(
      editableElement,
      parentCslpValue
    );
    const targetDOMDimension = editableElement.getBoundingClientRect();
    if (direction === "horizontal") {
      const middleHeight = targetDOMDimension.top + (targetDOMDimension.bottom - targetDOMDimension.top) / 2 + window.scrollY;
      previousButton.style.left = `${targetDOMDimension.left}px`;
      previousButton.style.top = `${middleHeight}px`;
      nextButton.style.left = `${targetDOMDimension.right}px`;
      nextButton.style.top = `${middleHeight}px`;
    } else if (direction === "vertical") {
      const middleWidth = targetDOMDimension.left + (targetDOMDimension.right - targetDOMDimension.left) / 2;
      previousButton.style.left = `${middleWidth}px`;
      previousButton.style.top = `${targetDOMDimension.top + window.scrollY}px`;
      nextButton.style.left = `${middleWidth}px`;
      nextButton.style.top = `${targetDOMDimension.bottom + window.scrollY}px`;
    }
  }
}
function updateFocussedStateOnMutation(focusOverlayWrapper, focusedToolbar, visualBuilderContainer, resizeObserver) {
  if (!focusOverlayWrapper) return;
  let selectedElement = VisualBuilder.VisualBuilderGlobalState.value.previousSelectedEditableDOM;
  if (!selectedElement) return;
  const selectedElementCslp = selectedElement == null ? void 0 : selectedElement.getAttribute("data-cslp");
  const selectedElementCslpUniqueId = selectedElement == null ? void 0 : selectedElement.getAttribute(
    "data-cslp-unique-id"
  );
  const newSelectedElement = document.querySelector(
    `[data-cslp-unique-id="${selectedElementCslpUniqueId}"]`
  ) || document.querySelector(`[data-cslp="${selectedElementCslp}"]`);
  if (!newSelectedElement && resizeObserver) {
    hideFocusOverlay({
      visualBuilderOverlayWrapper: focusOverlayWrapper,
      focusedToolbar,
      visualBuilderContainer,
      resizeObserver,
      noTrigger: true
    });
    return;
  }
  if (newSelectedElement !== selectedElement) {
    selectedElement = newSelectedElement;
    VisualBuilder.VisualBuilderGlobalState.value.previousSelectedEditableDOM = selectedElement;
  }
  const selectedElementDimension = selectedElement.getBoundingClientRect();
  const focusOutline = focusOverlayWrapper.querySelector(
    ".visual-builder__overlay--outline"
  );
  if (focusOutline) {
    const focusOutlineDimension = focusOutline.getBoundingClientRect();
    if (!isSameRect(selectedElementDimension, focusOutlineDimension)) {
      focusOutline.style.top = `${selectedElementDimension.top + window.scrollY}px`;
      focusOutline.style.left = `${selectedElementDimension.left}px`;
      focusOutline.style.width = `${selectedElementDimension.width}px`;
      focusOutline.style.height = `${selectedElementDimension.height}px`;
    }
  }
  const focusedOverlayTop = focusOverlayWrapper.querySelector(
    ".visual-builder__overlay--top"
  );
  const focusedOverlayBottom = focusOverlayWrapper.querySelector(
    ".visual-builder__overlay--bottom"
  );
  const focusedOverlayLeft = focusOverlayWrapper.querySelector(
    ".visual-builder__overlay--left"
  );
  const focusedOverlayRight = focusOverlayWrapper.querySelector(
    ".visual-builder__overlay--right"
  );
  const distanceFromTop = selectedElementDimension.top + window.scrollY;
  if (focusedOverlayTop) {
    const dimension = focusedOverlayTop.getBoundingClientRect();
    if (dimension.height !== distanceFromTop) {
      focusedOverlayTop.style.height = `calc(${distanceFromTop}px)`;
    }
  }
  if (focusedOverlayBottom) {
    const dimension = focusedOverlayBottom.getBoundingClientRect();
    if (dimension.top !== selectedElementDimension.bottom || dimension.height !== window.document.body.scrollHeight - selectedElementDimension.bottom - window.scrollY) {
      focusedOverlayBottom.style.top = `${selectedElementDimension.bottom + window.scrollY}px`;
      focusedOverlayBottom.style.height = `${window.document.body.scrollHeight - selectedElementDimension.bottom - window.scrollY}px`;
    }
  }
  if (focusedOverlayLeft) {
    const dimension = focusedOverlayLeft.getBoundingClientRect();
    if (dimension.top + window.scrollY !== distanceFromTop || dimension.height !== selectedElementDimension.height || dimension.width !== selectedElementDimension.left) {
      focusedOverlayLeft.style.top = `${distanceFromTop}px`;
      focusedOverlayLeft.style.height = `${selectedElementDimension.height}px`;
      focusedOverlayLeft.style.width = `${selectedElementDimension.left}px`;
    }
  }
  if (focusedOverlayRight) {
    const dimension = focusedOverlayRight.getBoundingClientRect();
    if (dimension.left !== selectedElementDimension.right || dimension.top + window.scrollY !== distanceFromTop || dimension.height !== selectedElementDimension.height || dimension.width !== document.documentElement.clientWidth - selectedElementDimension.right) {
      focusedOverlayRight.style.left = `${selectedElementDimension.right}px`;
      focusedOverlayRight.style.top = `${distanceFromTop}px`;
      focusedOverlayRight.style.height = `${selectedElementDimension.height}px`;
      focusedOverlayRight.style.width = `${document.documentElement.clientWidth - selectedElementDimension.right}px`;
    }
  }
  if (focusedToolbar) {
    const targetElementRightEdgeOffset = window.scrollX + window.innerWidth - selectedElementDimension.left;
    const distanceFromTop2 = selectedElementDimension.top + window.scrollY - TOOLBAR_EDGE_BUFFER;
    const adjustedDistanceFromTop = selectedElementDimension.top + window.scrollY < TOP_EDGE_BUFFER ? distanceFromTop2 + selectedElementDimension.height + TOP_EDGE_BUFFER : distanceFromTop2;
    const distanceFromLeft = selectedElementDimension.left - LIVE_PREVIEW_OUTLINE_WIDTH_IN_PX;
    const adjustedDistanceFromLeft = Math.max(
      distanceFromLeft,
      TOOLBAR_EDGE_BUFFER
    );
    if (targetElementRightEdgeOffset < RIGHT_EDGE_BUFFER && (focusedToolbar.style.justifyContent !== "flex-end" || focusedToolbar.style.left !== `${selectedElementDimension.right + LIVE_PREVIEW_OUTLINE_WIDTH_IN_PX}px`)) {
      focusedToolbar.style.justifyContent = "flex-end";
      focusedToolbar.style.left = `${selectedElementDimension.right + LIVE_PREVIEW_OUTLINE_WIDTH_IN_PX}px`;
    } else if (focusedToolbar.style.justifyContent !== "flex-start" || focusedToolbar.style.left !== `${adjustedDistanceFromLeft}px`) {
      focusedToolbar.style.justifyContent = "flex-start";
      focusedToolbar.style.left = `${adjustedDistanceFromLeft}px`;
    }
    if (focusedToolbar.style.top !== `${adjustedDistanceFromTop}px`) {
      focusedToolbar.style.top = `${adjustedDistanceFromTop}px`;
    }
  }
  if (visualBuilderContainer) {
    const psuedoEditableElement = visualBuilderContainer.querySelector(
      ".visual-builder__pseudo-editable-element"
    );
    const editableElement = selectedElement;
    const styles = getPsuedoEditableElementStyles(editableElement);
    const styleString = Object.entries(styles).reduce(
      (acc, [key, value]) => {
        return `${acc}${key}:${value};`;
      },
      ""
    );
    if (psuedoEditableElement && (psuedoEditableElement.style.cssText !== styleString || psuedoEditableElement.style.visibility !== "visible")) {
      psuedoEditableElement.style.cssText = styleString;
      psuedoEditableElement.style.visibility = "visible";
    }
  }
}
function isSameRect(rect1, rect2) {
  return rect1.top === rect2.top && rect1.left === rect2.left && rect1.width === rect2.width && rect1.height === rect2.height;
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/pasteAsPlainText.js
var pasteAsPlainText = debounce_default(
  (e6) => {
    e6.preventDefault();
    const clipboardData = e6.clipboardData;
    document.execCommand(
      "inserttext",
      false,
      clipboardData == null ? void 0 : clipboardData.getData("text/plain")
    );
  },
  100,
  { leading: true }
);

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/enableInlineEditing.js
function enableInlineEditing({
  expectedFieldData,
  editableElement,
  fieldType,
  elements
}) {
  const { visualBuilderContainer, resizeObserver } = elements;
  let actualEditableField = editableElement;
  VisualBuilder.VisualBuilderGlobalState.value.focusFieldValue = actualEditableField == null ? void 0 : actualEditableField.innerText;
  const elementComputedDisplay = window.getComputedStyle(actualEditableField).display;
  let textContent = editableElement.innerText || editableElement.textContent || "";
  if (fieldType === FieldDataType.MULTILINE) {
    textContent = getMultilinePlaintext(actualEditableField);
    actualEditableField.addEventListener("paste", pasteAsPlainText);
  }
  const expectedTextContent = expectedFieldData;
  const isFieldLastEdited = document.querySelector("[data-cs-last-edited]") === editableElement;
  if (expectedTextContent && textContent !== expectedTextContent || isEllipsisActive(editableElement) || isFieldLastEdited) {
    const pseudoEditableField = generatePseudoEditableElement(
      { editableElement },
      { textContent: expectedFieldData }
    );
    editableElement.style.visibility = "hidden";
    pseudoEditableField.setAttribute(
      VISUAL_BUILDER_FIELD_TYPE_ATTRIBUTE_KEY,
      fieldType
    );
    visualBuilderContainer.appendChild(pseudoEditableField);
    actualEditableField = pseudoEditableField;
    if (fieldType === FieldDataType.MULTILINE)
      actualEditableField.addEventListener("paste", pasteAsPlainText);
    elements.resizeObserver.observe(pseudoEditableField);
  } else if (elementComputedDisplay === "inline") {
    const onInlineElementInput = throttle_default(() => {
      const overlayWrapper = visualBuilderContainer.querySelector(
        ".visual-builder__overlay__wrapper"
      );
      const focusedToolbar = visualBuilderContainer.querySelector(
        ".visual-builder__focused-toolbar"
      );
      updateFocussedState({
        editableElement: actualEditableField,
        visualBuilderContainer,
        overlayWrapper,
        focusedToolbar,
        resizeObserver
      });
    }, 200);
    actualEditableField.addEventListener("input", onInlineElementInput);
  }
  actualEditableField.setAttribute("contenteditable", "true");
  actualEditableField.addEventListener("input", handleFieldInput);
  actualEditableField.addEventListener("keydown", handleFieldKeyDown);
  editableElement.setAttribute("data-cs-last-edited", "true");
  actualEditableField.focus();
  return;
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/handleInlineEditableField.js
function handleInlineEditableField({
  fieldType,
  fieldSchema,
  fieldMetadata,
  expectedFieldData,
  editableElement,
  elements
}) {
  if (!ALLOWED_INLINE_EDITABLE_FIELD.includes(fieldType)) return;
  const index = Number(
    fieldMetadata.instance.fieldPathWithIndex.split(".").at(-1)
  );
  const isInstance = Number.isFinite(index);
  if (isFieldMultiple(fieldSchema)) {
    let expectedFieldInstanceData = null;
    if (Array.isArray(expectedFieldData)) {
      if (!isInstance) {
        return;
      }
      if (index >= expectedFieldData.length) {
      } else {
        expectedFieldInstanceData = expectedFieldData.at(index);
      }
    } else {
      expectedFieldInstanceData = expectedFieldData;
    }
    enableInlineEditing({
      fieldType,
      expectedFieldData: expectedFieldInstanceData,
      editableElement,
      elements
    });
  } else {
    let expectedFieldInstanceData = null;
    if (isInstance) {
      if (index !== 0) {
        return;
      }
      expectedFieldInstanceData = Array.isArray(expectedFieldData) ? expectedFieldData.at(0) : expectedFieldData;
    }
    enableInlineEditing({
      fieldType,
      expectedFieldData: expectedFieldInstanceData ?? expectedFieldData,
      editableElement,
      elements
    });
  }
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/handleIndividualFields.js
async function handleIndividualFields(eventDetails, elements) {
  const { fieldMetadata, editableElement } = eventDetails;
  const { visualBuilderContainer, lastEditedField, resizeObserver } = elements;
  const {
    content_type_uid,
    entry_uid,
    locale,
    fieldPath,
    fieldPathWithIndex
  } = fieldMetadata;
  const [fieldSchema, expectedFieldData] = await Promise.all([
    FieldSchemaMap.getFieldSchema(content_type_uid, fieldPath),
    getFieldData(
      { content_type_uid, entry_uid, locale },
      fieldPathWithIndex
    )
  ]);
  const fieldType = getFieldType(fieldSchema);
  const { acl: entryAcl, workflowStage: entryWorkflowStageDetails } = await fetchEntryPermissionsAndStageDetails({
    entryUid: entry_uid,
    contentTypeUid: content_type_uid,
    locale
  });
  const { isDisabled: disabled } = isFieldDisabled(
    fieldSchema,
    eventDetails,
    entryAcl,
    entryWorkflowStageDetails
  );
  editableElement.setAttribute(
    VISUAL_BUILDER_FIELD_TYPE_ATTRIBUTE_KEY,
    fieldType
  );
  if (isFieldMultiple(fieldSchema)) {
    if (lastEditedField !== editableElement) {
      const addButtonLabel = fieldSchema.data_type === "blocks" ? (
        // ? `Add ${fieldSchema.display_name ?? "Modular Block"}`
        "Add Section"
      ) : void 0;
      handleAddButtonsForMultiple(
        eventDetails,
        {
          editableElement: eventDetails.editableElement,
          visualBuilderContainer,
          resizeObserver
        },
        {
          fieldSchema,
          expectedFieldData,
          disabled,
          label: addButtonLabel
        }
      );
    }
  }
  if (disabled) {
    return;
  }
  handleInlineEditableField({
    fieldType,
    fieldSchema,
    fieldMetadata,
    expectedFieldData,
    editableElement,
    elements
  });
}
function cleanIndividualFieldResidual(elements) {
  const { overlayWrapper, visualBuilderContainer, focusedToolbar } = elements;
  removeAddInstanceButtons(
    {
      eventTarget: null,
      visualBuilderContainer,
      overlayWrapper
    },
    true
  );
  const previousSelectedEditableDOM = VisualBuilder.VisualBuilderGlobalState.value.previousSelectedEditableDOM;
  if (previousSelectedEditableDOM) {
    previousSelectedEditableDOM.removeAttribute(
      VISUAL_BUILDER_FIELD_TYPE_ATTRIBUTE_KEY
    );
    previousSelectedEditableDOM.removeAttribute("contenteditable");
    previousSelectedEditableDOM.removeEventListener(
      "input",
      handleFieldInput
    );
    previousSelectedEditableDOM.removeEventListener(
      "keydown",
      handleFieldKeyDown
    );
    previousSelectedEditableDOM.removeEventListener(
      "paste",
      pasteAsPlainText
    );
    elements.resizeObserver.unobserve(previousSelectedEditableDOM);
  }
  const pseudoEditableElement = visualBuilderContainer == null ? void 0 : visualBuilderContainer.querySelector(
    ".visual-builder__pseudo-editable-element"
  );
  if (pseudoEditableElement) {
    elements.resizeObserver.unobserve(pseudoEditableElement);
    pseudoEditableElement.removeEventListener("paste", pasteAsPlainText);
    pseudoEditableElement.remove();
    if (previousSelectedEditableDOM) {
      previousSelectedEditableDOM.style.removeProperty(
        "visibility"
      );
    }
  }
  if (focusedToolbar) {
    removeFieldToolbar(focusedToolbar);
  }
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/HighlightedCommentIcon.js
var HighlightedCommentIcon = (props) => {
  const { data } = props;
  const config2 = configManager_default.get();
  const handleCommentModal = async () => {
    var _a;
    (_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send(
      VisualBuilderPostMessageEvents.OPEN_FIELD_COMMENT_MODAL,
      {
        fieldMetadata: data == null ? void 0 : data.fieldMetadata,
        discussion: data == null ? void 0 : data.discussion,
        fieldSchema: data == null ? void 0 : data.fieldSchema,
        absolutePath: data.absolutePath
      }
    );
    toggleCollabPopup({ threadUid: "", action: "close" });
    configManager_default.set("collab.isFeedbackMode", true);
  };
  return u6("div", { className: "collab-icon", onClick: handleCommentModal, children: u6(HighlightCommentIcon, {}) });
};
var HighlightedCommentIcon_default = HighlightedCommentIcon;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/generators/generateHighlightedComment.js
var highlighCommentOffset = 25;
function highlightCommentIconOnCanvas(payload) {
  const uniquePaths = {};
  payload.forEach((data) => {
    var _a;
    const cslpValue = (_a = data == null ? void 0 : data.fieldMetadata) == null ? void 0 : _a.cslpValue;
    if (!cslpValue || uniquePaths[cslpValue]) {
      return;
    }
    uniquePaths[cslpValue] = true;
    const element = document.querySelector(`[data-cslp="${cslpValue}"]`);
    if (element && element instanceof HTMLElement) {
      const { top, left } = element.getBoundingClientRect();
      const iconContainer = document.createElement("div");
      iconContainer.setAttribute("field-path", cslpValue);
      iconContainer.style.position = "fixed";
      iconContainer.style.top = `${top - highlighCommentOffset}px`;
      iconContainer.style.left = `${left - highlighCommentOffset}px`;
      iconContainer.style.zIndex = "900";
      iconContainer.style.cursor = "pointer";
      iconContainer.className = "highlighted-comment collab-icon";
      B(
        y(HighlightedCommentIcon_default, { data }),
        // Use h directly with Preact
        iconContainer
      );
      const visualBuilderContainer = document.querySelector(
        ".visual-builder__container"
      );
      if (visualBuilderContainer) {
        let highlightCommentWrapper = visualBuilderContainer.querySelector(
          ".visual-builder__highlighted-comment-wrapper"
        );
        if (!highlightCommentWrapper) {
          highlightCommentWrapper = document.createElement("div");
          highlightCommentWrapper.className = "visual-builder__highlighted-comment-wrapper";
          visualBuilderContainer.appendChild(highlightCommentWrapper);
        }
        highlightCommentWrapper.appendChild(iconContainer);
      }
    }
  });
}
function updateHighlightedCommentIconPosition() {
  const icons = document.querySelectorAll(".highlighted-comment");
  icons.forEach((icon) => {
    if (icon && icon instanceof HTMLElement) {
      const path = icon.getAttribute("field-path");
      if (path) {
        const targetElement = document.querySelector(
          `[data-cslp="${path}"]`
        );
        if (targetElement && targetElement instanceof HTMLElement) {
          const { top, left } = targetElement.getBoundingClientRect();
          icon.style.top = `${top - highlighCommentOffset}px`;
          icon.style.left = `${left - highlighCommentOffset}px`;
        }
      }
    }
  });
}
function removeAllHighlightedCommentIcons() {
  const icons = document.querySelectorAll(".highlighted-comment");
  icons == null ? void 0 : icons.forEach((icon) => icon == null ? void 0 : icon.remove());
}
var hiddenClass2 = u5`
    display: none;
`;
function toggleHighlightedCommentIconDisplay(path, shouldShow) {
  const icons = document.querySelectorAll(
    `.highlighted-comment[field-path="${path}"]`
  );
  icons.forEach((icon) => {
    if (shouldShow) {
      icon.classList.remove(hiddenClass2);
    } else {
      icon.classList.add(hiddenClass2);
    }
  });
}
function showAllHiddenHighlightedCommentIcons() {
  const hiddenIcons = document.querySelectorAll(
    `.highlighted-comment.${hiddenClass2}`
  );
  hiddenIcons.forEach((icon) => {
    icon.classList.remove(hiddenClass2);
  });
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/generators/generateOverlay.js
function addFocusOverlay(targetElement, focusOverlayWrapper, disabled) {
  const targetElementDimension = targetElement.getBoundingClientRect();
  if (targetElementDimension.width === 0 || targetElementDimension.height === 0)
    return;
  focusOverlayWrapper.classList.add("visible");
  const distanceFromTop = targetElementDimension.top + window.scrollY;
  const topOverlayDOM = focusOverlayWrapper.querySelector(
    ".visual-builder__overlay--top"
  );
  if (topOverlayDOM) {
    topOverlayDOM.style.top = "0";
    topOverlayDOM.style.left = "0";
    topOverlayDOM.style.width = "100%";
    topOverlayDOM.style.height = `calc(${distanceFromTop}px)`;
  }
  const bottomOverlayDOM = focusOverlayWrapper.querySelector(
    ".visual-builder__overlay--bottom"
  );
  if (bottomOverlayDOM) {
    bottomOverlayDOM.style.top = `${targetElementDimension.bottom + window.scrollY}px`;
    bottomOverlayDOM.style.height = `${window.document.body.scrollHeight - targetElementDimension.bottom - window.scrollY}px`;
    bottomOverlayDOM.style.left = "0";
    bottomOverlayDOM.style.width = "100%";
  }
  const leftOverlayDOM = focusOverlayWrapper.querySelector(
    ".visual-builder__overlay--left"
  );
  if (leftOverlayDOM) {
    leftOverlayDOM.style.left = "0";
    leftOverlayDOM.style.top = `${distanceFromTop}px`;
    leftOverlayDOM.style.height = `${targetElementDimension.height}px`;
    leftOverlayDOM.style.width = `${targetElementDimension.left}px`;
  }
  const rightOverlayDOM = focusOverlayWrapper.querySelector(
    ".visual-builder__overlay--right"
  );
  if (rightOverlayDOM) {
    rightOverlayDOM.style.left = `${targetElementDimension.right}px`;
    rightOverlayDOM.style.top = `${distanceFromTop}px`;
    rightOverlayDOM.style.height = `${targetElementDimension.height}px`;
    rightOverlayDOM.style.width = `${document.documentElement.clientWidth - targetElementDimension.right}px`;
  }
  const outlineDOM = focusOverlayWrapper.querySelector(
    ".visual-builder__overlay--outline"
  );
  if (outlineDOM) {
    outlineDOM.style.top = `${targetElementDimension.top + window.scrollY}px`;
    outlineDOM.style.height = `${targetElementDimension.height}px`;
    outlineDOM.style.width = `${targetElementDimension.width}px`;
    outlineDOM.style.left = `${targetElementDimension.left}px`;
    outlineDOM.style.outlineColor = disabled ? "#909090" : "#715cdd";
  }
}
function hideFocusOverlay(elements) {
  const {
    visualBuilderContainer,
    visualBuilderOverlayWrapper,
    focusedToolbar,
    resizeObserver,
    noTrigger
  } = elements;
  if (visualBuilderOverlayWrapper) {
    visualBuilderOverlayWrapper.classList.remove("visible");
    visualBuilderOverlayWrapper.childNodes.forEach((childNode) => {
      if (childNode instanceof Element) {
        childNode.removeAttribute("style");
      }
    });
    if (!noTrigger && // send update when focussed field has received input
    VisualBuilder.VisualBuilderGlobalState.value.focusFieldReceivedInput) {
      sendFieldEvent({
        visualBuilderContainer,
        eventType: VisualBuilderPostMessageEvents.UPDATE_FIELD
      });
    } else if (noTrigger) {
      const { previousSelectedEditableDOM, focusFieldValue } = VisualBuilder.VisualBuilderGlobalState.value || {};
      if (previousSelectedEditableDOM && "innerText" in previousSelectedEditableDOM && focusFieldValue != null) {
        previousSelectedEditableDOM.innerText = focusFieldValue;
      }
    }
    VisualBuilder.VisualBuilderGlobalState.value.focusFieldValue = null;
    VisualBuilder.VisualBuilderGlobalState.value.focusFieldReceivedInput = false;
    cleanIndividualFieldResidual({
      overlayWrapper: visualBuilderOverlayWrapper,
      visualBuilderContainer,
      focusedToolbar,
      resizeObserver
    });
  }
}
function sendFieldEvent(options) {
  const { visualBuilderContainer, eventType } = options;
  const previousSelectedEditableDOM = VisualBuilder.VisualBuilderGlobalState.value.previousSelectedEditableDOM;
  const pseudoEditableElement = visualBuilderContainer == null ? void 0 : visualBuilderContainer.querySelector(
    "div.visual-builder__pseudo-editable-element"
  );
  if (previousSelectedEditableDOM && (previousSelectedEditableDOM.hasAttribute("contenteditable") || pseudoEditableElement)) {
    const actualEditedElement = pseudoEditableElement || previousSelectedEditableDOM;
    let data = "innerText" in actualEditedElement ? actualEditedElement.innerText : actualEditedElement.textContent;
    const fieldMetadata = extractDetailsFromCslp(
      previousSelectedEditableDOM.getAttribute("data-cslp")
    );
    FieldSchemaMap.getFieldSchema(
      fieldMetadata.content_type_uid,
      fieldMetadata.fieldPath
    ).then((fieldSchema) => {
      if (fieldSchema && eventType === VisualBuilderPostMessageEvents.UPDATE_FIELD) {
        const fieldType = getFieldType(fieldSchema);
        if (fieldType && fieldType === FieldDataType.MULTILINE) {
          data = getMultilinePlaintext(actualEditedElement);
          actualEditedElement.innerText = data;
        }
      }
    }).finally(() => {
      var _a;
      (_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send(eventType, {
        data,
        fieldMetadata
      });
    });
  }
}
function hideOverlay(params) {
  VisualBuilder.VisualBuilderGlobalState.value.isFocussed = false;
  const focusElementObserver = VisualBuilder.VisualBuilderGlobalState.value.focusElementObserver;
  if (focusElementObserver) {
    focusElementObserver.disconnect();
    VisualBuilder.VisualBuilderGlobalState.value.focusElementObserver = null;
  }
  hideFocusOverlay({
    visualBuilderContainer: params.visualBuilderContainer,
    visualBuilderOverlayWrapper: params.visualBuilderOverlayWrapper,
    focusedToolbar: params.focusedToolbar,
    resizeObserver: params.resizeObserver,
    noTrigger: Boolean(params.noTrigger)
  });
  showAllHiddenHighlightedCommentIcons();
  if (!VisualBuilder.VisualBuilderGlobalState.value.previousSelectedEditableDOM)
    return;
  params.resizeObserver.unobserve(
    VisualBuilder.VisualBuilderGlobalState.value.previousSelectedEditableDOM
  );
  VisualBuilder.VisualBuilderGlobalState.value.previousSelectedEditableDOM = null;
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/utils/getEntryIdentifiersInCurrentPage.js
function getEntryIdentifiersInCurrentPage() {
  const elementsWithCslp = Array.from(
    document.querySelectorAll("[data-cslp]")
  );
  const uniqueEntriesMap = /* @__PURE__ */ new Map();
  elementsWithCslp.forEach((element) => {
    const cslpData = extractDetailsFromCslp(
      element.getAttribute("data-cslp")
    );
    uniqueEntriesMap.set(
      cslpData.entry_uid,
      {
        entryUid: cslpData.entry_uid,
        contentTypeUid: cslpData.content_type_uid,
        locale: cslpData.locale
      }
    );
  });
  const uniqueEntriesArray = Array.from(uniqueEntriesMap.values());
  return {
    entriesInCurrentPage: uniqueEntriesArray
  };
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/VisualBuilder.js
var import_classnames33 = __toESM(require_classnames(), 1);
function VisualBuilderComponent(props) {
  const isInBuilder = isOpenInBuilder();
  const isInPreviewShare = isOpenInPreviewShare();
  if (!isInBuilder && !isInPreviewShare) {
    return null;
  }
  return u6(g, { children: [
    u6(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: VisualBuilderGlobalStyles
        }
      }
    ),
    u6(
      "div",
      {
        className: (0, import_classnames33.default)(
          visualBuilderStyles()["visual-builder__cursor"],
          "visual-builder__cursor"
        ),
        "data-testid": "visual-builder__cursor"
      }
    ),
    u6(
      "div",
      {
        className: (0, import_classnames33.default)(
          visualBuilderStyles()["visual-builder__overlay__wrapper"],
          "visual-builder__overlay__wrapper"
        ),
        "data-testid": "visual-builder__overlay__wrapper",
        onClick: (event) => {
          const targetElement = event.currentTarget;
          const focusedToolbar = document.querySelector(
            ".visual-builder__focused-toolbar"
          );
          hideOverlay({
            visualBuilderContainer: props.visualBuilderContainer,
            visualBuilderOverlayWrapper: targetElement,
            focusedToolbar,
            resizeObserver: props.resizeObserver
          });
        },
        children: [
          u6(
            "div",
            {
              className: (0, import_classnames33.default)(
                "visual-builder__overlay visual-builder__overlay--top",
                visualBuilderStyles()["visual-builder__overlay"]
              ),
              "data-testid": "visual-builder__overlay--top"
            }
          ),
          u6(
            "div",
            {
              "data-testid": "visual-builder__overlay--left",
              className: (0, import_classnames33.default)(
                "visual-builder__overlay visual-builder__overlay--left",
                visualBuilderStyles()["visual-builder__overlay"]
              )
            }
          ),
          u6(
            "div",
            {
              "data-testid": "visual-builder__overlay--right",
              className: (0, import_classnames33.default)(
                "visual-builder__overlay visual-builder__overlay--right",
                visualBuilderStyles()["visual-builder__overlay"]
              )
            }
          ),
          u6(
            "div",
            {
              "data-testid": "visual-builder__overlay--bottom",
              className: (0, import_classnames33.default)(
                "visual-builder__overlay visual-builder__overlay--bottom",
                visualBuilderStyles()["visual-builder__overlay"]
              )
            }
          ),
          u6(
            "div",
            {
              "data-testid": "visual-builder__overlay--outline",
              className: (0, import_classnames33.default)(
                "visual-builder__overlay--outline",
                visualBuilderStyles()["visual-builder__overlay--outline"]
              )
            }
          )
        ]
      }
    ),
    u6(
      "div",
      {
        className: (0, import_classnames33.default)(
          "visual-builder__hover-outline visual-builder__hover-outline--unclickable",
          visualBuilderStyles()["visual-builder__hover-outline"],
          visualBuilderStyles()["visual-builder__hover-outline--unclickable"]
        ),
        "data-testid": "visual-builder__hover-outline"
      }
    ),
    u6(
      "div",
      {
        className: (0, import_classnames33.default)(
          "visual-builder__focused-toolbar",
          visualBuilderStyles()["visual-builder__focused-toolbar"]
        ),
        "data-testid": "visual-builder__focused-toolbar"
      }
    )
  ] });
}
var VisualBuilder_default = VisualBuilderComponent;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/index.js
function initUI(props) {
  const visualBuilderDOM = document.querySelector(
    `.visual-builder__container`
  );
  const isInBuilder = isOpenInBuilder();
  const isInPreviewShare = isOpenInPreviewShare();
  if (!visualBuilderDOM && (isInBuilder || isInPreviewShare)) {
    const visualBuilderContainer = document.createElement("div");
    visualBuilderContainer.classList.add(
      visualBuilderStyles()["visual-builder__container"],
      "visual-builder__container"
    );
    visualBuilderContainer.setAttribute(
      "data-testid",
      "visual-builder__container"
    );
    document.body.appendChild(visualBuilderContainer);
    B(
      u6(
        VisualBuilder_default,
        {
          visualBuilderContainer,
          resizeObserver: props.resizeObserver
        }
      ),
      visualBuilderContainer
    );
  }
  return;
}
var components_default = initUI;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/eventManager/useDraftFieldsPostMessageEvent.js
function removeDraftFieldClass() {
  const draftFieldElements = document.querySelectorAll(
    `.${visualBuilderStyles()["visual-builder__draft-field"]}`
  );
  draftFieldElements.forEach((element) => {
    element.classList.remove(
      visualBuilderStyles()["visual-builder__draft-field"]
    );
  });
}
function addDraftFieldClass(fields) {
  fields.forEach((field) => {
    const element = document.querySelector(`[data-cslp="${field}"]`);
    if (element) {
      element.classList.add(
        visualBuilderStyles()["visual-builder__draft-field"]
      );
    }
  });
}
function useDraftFieldsPostMessageEvent() {
  var _a, _b;
  (_a = visualBuilderPostMessage_default) == null ? void 0 : _a.on(
    VisualBuilderPostMessageEvents.SHOW_DRAFT_FIELDS,
    (event) => {
      removeDraftFieldClass();
      addDraftFieldClass(event.data.fields);
    }
  );
  (_b = visualBuilderPostMessage_default) == null ? void 0 : _b.on(
    VisualBuilderPostMessageEvents.REMOVE_DRAFT_FIELDS,
    () => {
      removeDraftFieldClass();
    }
  );
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/eventManager/useHideFocusOverlayPostMessageEvent.js
function useHideFocusOverlayPostMessageEvent({
  visualBuilderContainer,
  overlayWrapper,
  focusedToolbar,
  resizeObserver
}) {
  var _a;
  (_a = visualBuilderPostMessage_default) == null ? void 0 : _a.on(
    VisualBuilderPostMessageEvents.HIDE_FOCUS_OVERLAY,
    (args) => {
      var _a2, _b;
      if (Boolean((_a2 = args == null ? void 0 : args.data) == null ? void 0 : _a2.fromCollab)) {
        configManager_default.set("collab.enable", true);
        configManager_default.set("collab.pauseFeedback", true);
      }
      hideOverlay({
        visualBuilderOverlayWrapper: overlayWrapper,
        visualBuilderContainer,
        focusedToolbar,
        resizeObserver,
        noTrigger: Boolean((_b = args == null ? void 0 : args.data) == null ? void 0 : _b.noTrigger)
      });
    }
  );
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/eventManager/useScrollToField.js
var handleScrollToField = (event) => {
  const { content_type_uid, entry_uid, locale, path } = event.data.cslpData;
  const cslpValue = `${content_type_uid}.${entry_uid}.${locale}.${path}`;
  const element = document.querySelector(`[data-cslp="${cslpValue}"]`);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};
var useScrollToField = () => {
  var _a;
  (_a = visualBuilderPostMessage_default) == null ? void 0 : _a.on(
    VisualBuilderPostMessageEvents.SCROLL_TO_FIELD,
    handleScrollToField
  );
};

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/eventManager/useVariantsPostMessageEvent.js
function addVariantFieldClass(variant_uid, highlightVariantFields) {
  const elements = document.querySelectorAll(`[data-cslp]`);
  elements.forEach((element) => {
    const dataCslp = element.getAttribute("data-cslp");
    if (!dataCslp) return;
    if (dataCslp == null ? void 0 : dataCslp.includes(variant_uid)) {
      highlightVariantFields && element.classList.add(
        visualBuilderStyles()["visual-builder__variant-field"]
      );
      element.classList.add("visual-builder__variant-field");
    } else if (!dataCslp.startsWith("v2:")) {
      element.classList.add("visual-builder__base-field");
    } else {
      element.classList.add("visual-builder__disabled-variant-field");
    }
  });
}
function removeVariantFieldClass(onlyHighlighted = false) {
  if (onlyHighlighted) {
    const variantElements = document.querySelectorAll(
      `.${visualBuilderStyles()["visual-builder__variant-field"]}`
    );
    variantElements.forEach((element) => {
      element.classList.remove(
        visualBuilderStyles()["visual-builder__variant-field"]
      );
    });
  } else {
    const variantAndBaseFieldElements = document.querySelectorAll(
      ".visual-builder__disabled-variant-field, .visual-builder__variant-field, .visual-builder__base-field"
    );
    variantAndBaseFieldElements.forEach((element) => {
      element.classList.remove(
        "visual-builder__disabled-variant-field",
        "visual-builder__variant-field",
        visualBuilderStyles()["visual-builder__variant-field"],
        "visual-builder__base-field"
      );
    });
  }
}
function setAudienceMode(mode) {
  VisualBuilder.VisualBuilderGlobalState.value.audienceMode = mode;
}
function setVariant(uid) {
  VisualBuilder.VisualBuilderGlobalState.value.variant = uid;
}
function setLocale(locale) {
  VisualBuilder.VisualBuilderGlobalState.value.locale = locale;
}
function useVariantFieldsPostMessageEvent() {
  var _a, _b, _c, _d, _e;
  (_a = visualBuilderPostMessage_default) == null ? void 0 : _a.on(
    VisualBuilderPostMessageEvents.GET_VARIANT_ID,
    (event) => {
      setVariant(event.data.variant);
      FieldSchemaMap.clear();
    }
  );
  (_b = visualBuilderPostMessage_default) == null ? void 0 : _b.on(
    VisualBuilderPostMessageEvents.GET_LOCALE,
    (event) => {
      setLocale(event.data.locale);
    }
  );
  (_c = visualBuilderPostMessage_default) == null ? void 0 : _c.on(
    VisualBuilderPostMessageEvents.SET_AUDIENCE_MODE,
    (event) => {
      setAudienceMode(event.data.audienceMode);
    }
  );
  (_d = visualBuilderPostMessage_default) == null ? void 0 : _d.on(
    VisualBuilderPostMessageEvents.SHOW_VARIANT_FIELDS,
    (event) => {
      removeVariantFieldClass();
      addVariantFieldClass(
        event.data.variant_data.variant,
        event.data.variant_data.highlightVariantFields
      );
    }
  );
  (_e = visualBuilderPostMessage_default) == null ? void 0 : _e.on(
    VisualBuilderPostMessageEvents.REMOVE_VARIANT_FIELDS,
    (event) => {
      var _a2;
      removeVariantFieldClass((_a2 = event == null ? void 0 : event.data) == null ? void 0 : _a2.onlyHighlighted);
    }
  );
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/components/emptyBlock.js
var import_classnames34 = __toESM(require_classnames(), 1);
function EmptyBlock(props) {
  const { details } = props;
  const blockParentName = details.fieldSchema.display_name;
  async function sendAddInstanceEvent() {
    var _a;
    await ((_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send(
      VisualBuilderPostMessageEvents.ADD_INSTANCE,
      {
        fieldMetadata: details.fieldMetadata,
        index: 0
      }
    ));
    observeParentAndFocusNewInstance({
      parentCslp: details.fieldMetadata.cslpValue,
      index: 0
    });
  }
  return u6(
    "div",
    {
      className: (0, import_classnames34.default)(
        "visual-builder__empty-block",
        visualBuilderStyles()["visual-builder__empty-block"]
      ),
      children: [
        u6(
          "div",
          {
            className: (0, import_classnames34.default)(
              "visual-builder__empty-block-title",
              visualBuilderStyles()["visual-builder__empty-block-title"]
            ),
            children: [
              "This page doesn’t have any",
              " ",
              u6(
                "span",
                {
                  className: (0, import_classnames34.default)(
                    "visual-builder__empty-block-field-name",
                    visualBuilderStyles()["visual-builder__empty-block-field-name"]
                  ),
                  children: startCase_default(toLower_default(blockParentName))
                }
              ),
              " ",
              "added. Click the button below to add one."
            ]
          }
        ),
        u6(
          "button",
          {
            className: (0, import_classnames34.default)(
              "visual-builder__empty-block-add-button",
              visualBuilderStyles()["visual-builder__empty-block-add-button"]
            ),
            onClick: () => sendAddInstanceEvent(),
            type: "button",
            "data-testid": "visual-builder__empty-block-add-button",
            children: [
              u6(
                "span",
                {
                  className: (0, import_classnames34.default)(
                    "visual-builder__empty-block-plus-icon",
                    visualBuilderStyles()["visual-builder__empty-block-plus-icon"]
                  ),
                  children: "+"
                }
              ),
              "  Add ",
              blockParentName
            ]
          }
        )
      ]
    }
  );
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/generators/generateEmptyBlock.js
async function generateEmptyBlocks(emptyBlockParents) {
  for (const emptyBlockParent of emptyBlockParents) {
    const cslpData = emptyBlockParent.getAttribute("data-cslp");
    if (!cslpData) {
      return;
    }
    const fieldMetadata = extractDetailsFromCslp(cslpData);
    const fieldSchema = await FieldSchemaMap.getFieldSchema(
      fieldMetadata.content_type_uid,
      fieldMetadata.fieldPath
    );
    if (!fieldSchema) {
      return;
    }
    E(
      u6(
        EmptyBlock,
        {
          details: {
            fieldSchema,
            fieldMetadata
          }
        }
      ),
      emptyBlockParent
    );
  }
}
function removeEmptyBlocks(emptyBlockParents) {
  emptyBlockParents == null ? void 0 : emptyBlockParents.forEach((emptyBlockParent) => {
    const emptyBlock = emptyBlockParent.querySelector(
      ".visual-builder__empty-block"
    );
    if (emptyBlock) {
      emptyBlock.remove();
    }
  });
}

// node_modules/get-xpath/index.esm.js
function e5() {
  return (e5 = Object.assign ? Object.assign.bind() : function(e6) {
    for (var n5 = 1; n5 < arguments.length; n5++) {
      var r5 = arguments[n5];
      for (var o7 in r5) ({}).hasOwnProperty.call(r5, o7) && (e6[o7] = r5[o7]);
    }
    return e6;
  }).apply(null, arguments);
}
var n4 = { ignoreId: false };
var r4 = "undefined" != typeof Node;
var o6 = r4 ? Node.ELEMENT_NODE : 1;
var i7 = r4 ? Node.TEXT_NODE : 3;
var a6 = r4 ? Node.DOCUMENT_TYPE_NODE : 10;
function index_esm_default(r5, d7) {
  var t5 = e5({}, n4, d7), f8 = r5;
  if (f8 && f8.id && !t5.ignoreId) return '//*[@id="' + f8.id + '"]';
  for (var p6 = []; f8 && (o6 === f8.nodeType || i7 === f8.nodeType); ) {
    for (var N3 = 0, l7 = false, u7 = f8.previousSibling; u7; ) u7.nodeType !== a6 && u7.nodeName === f8.nodeName && N3++, u7 = u7.previousSibling;
    for (u7 = f8.nextSibling; u7; ) {
      if (u7.nodeName === f8.nodeName) {
        l7 = true;
        break;
      }
      u7 = u7.nextSibling;
    }
    var v9 = N3 || l7 ? "[" + (N3 + 1) + "]" : "";
    p6.push(f8.nodeType != i7 ? (f8.prefix ? f8.prefix + ":" : "") + f8.localName + v9 : "text()" + (v9 || "[1]")), f8 = f8.parentNode;
  }
  return p6.length ? "/" + p6.reverse().join("/") : "";
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/listeners/mouseClick.js
function addOverlay(params) {
  if (!params.overlayWrapper || !params.editableElement) return;
  addFocusOverlay(
    params.editableElement,
    params.overlayWrapper,
    params.isFieldDisabled
  );
  params.resizeObserver.observe(params.editableElement);
}
function addFocusedToolbar(params) {
  const { editableElement } = params.eventDetails;
  if (!editableElement || !params.focusedToolbar) return;
  appendFocusedToolbar(
    params.eventDetails,
    params.focusedToolbar,
    params.hideOverlay,
    params.isVariant,
    params.options
  );
}
async function handleBuilderInteraction(params) {
  const eventTarget = params.event.target;
  const isAnchorElement = eventTarget instanceof HTMLAnchorElement;
  const elementHasCslp = eventTarget && (eventTarget.hasAttribute("data-cslp") || eventTarget.closest("[data-cslp]"));
  const duplicates = document.querySelectorAll(
    `[data-cslp="${eventTarget == null ? void 0 : eventTarget.getAttribute("data-cslp")}"]`
  );
  if (duplicates.length > 1) {
    duplicates.forEach((ele) => {
      if (!ele.hasAttribute("data-cslp-unique-id")) {
        const uniqueId2 = `cslp-${v4_default()}`;
        ele.setAttribute("data-cslp-unique-id", uniqueId2);
      }
    });
  }
  if ((eventTarget == null ? void 0 : eventTarget.getAttribute("data-studio-ui")) === "true") {
    return;
  }
  if (params.event.altKey) {
    if (isAnchorElement) {
      params.event.preventDefault();
      params.event.stopPropagation();
    }
    return;
  }
  if (isAnchorElement || elementHasCslp && !eventTarget.closest(".visual-builder__empty-block")) {
    params.event.preventDefault();
    params.event.stopPropagation();
  }
  const config2 = configManager_default.get();
  if ((config2 == null ? void 0 : config2.collab.enable) === true) {
    if (config2 == null ? void 0 : config2.collab.pauseFeedback) return;
    const xpath = fixSvgXPath(index_esm_default(eventTarget));
    if (!eventTarget) return;
    const rect = eventTarget.getBoundingClientRect();
    const relativeX = (params.event.clientX - rect.left) / rect.width;
    const relativeY = (params.event.clientY - rect.top) / rect.height;
    if (!isCollabThread(eventTarget)) {
      params.event.preventDefault();
      params.event.stopPropagation();
    }
    if (isCollabThread(eventTarget)) {
      configManager_default.set("collab.isFeedbackMode", false);
    } else if (config2 == null ? void 0 : config2.collab.isFeedbackMode) {
      generateThread(
        { xpath, relativeX, relativeY },
        {
          isNewThread: true,
          updateConfig: true
        }
      );
    } else {
      toggleCollabPopup({ threadUid: "", action: "close" });
      configManager_default.set("collab.isFeedbackMode", true);
    }
    return;
  }
  const eventDetails = getCsDataOfElement(params.event);
  sendMouseClickPostMessage(eventDetails);
  if (!eventDetails || !params.overlayWrapper || !params.visualBuilderContainer) {
    return;
  }
  const { editableElement, fieldMetadata } = eventDetails;
  const variantStatus = await getFieldVariantStatus(fieldMetadata);
  const isVariant = variantStatus ? Object.values(variantStatus).some((value) => value === true) : false;
  cleanResidualsIfNeeded(params, editableElement);
  if (isEmptyBlockElement(editableElement)) {
    return;
  }
  const previousSelectedElement = VisualBuilder.VisualBuilderGlobalState.value.previousSelectedEditableDOM;
  if (isSameSelectedElement(previousSelectedElement, editableElement, params)) {
    return;
  }
  VisualBuilder.VisualBuilderGlobalState.value.previousSelectedEditableDOM = editableElement;
  addOverlayAndToolbar(params, eventDetails, editableElement, isVariant);
  const { cslpValue } = fieldMetadata;
  toggleHighlightedCommentIconDisplay(cslpValue, false);
  await handleFieldSchemaAndIndividualFields(
    params,
    eventDetails,
    fieldMetadata,
    editableElement,
    previousSelectedElement
  );
  observeEditableElementChanges(params, editableElement);
}
function sendMouseClickPostMessage(eventDetails) {
  var _a;
  (_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send(VisualBuilderPostMessageEvents.MOUSE_CLICK, {
    cslpData: eventDetails == null ? void 0 : eventDetails.cslpData,
    fieldMetadata: eventDetails == null ? void 0 : eventDetails.fieldMetadata
  }).catch((err) => {
    console.warn("Error while sending post message", err);
  });
}
function cleanResidualsIfNeeded(params, editableElement) {
  const previousSelectedElement = VisualBuilder.VisualBuilderGlobalState.value.previousSelectedEditableDOM;
  if (previousSelectedElement && previousSelectedElement !== editableElement || params.reEvaluate) {
    cleanIndividualFieldResidual({
      overlayWrapper: params.overlayWrapper,
      visualBuilderContainer: params.visualBuilderContainer,
      focusedToolbar: params.focusedToolbar,
      resizeObserver: params.resizeObserver
    });
  }
}
function isEmptyBlockElement(editableElement) {
  return editableElement.classList.contains(VB_EmptyBlockParentClass) || editableElement.classList.contains("visual-builder__empty-block");
}
function isSameSelectedElement(previousSelectedElement, editableElement, params) {
  return !!(previousSelectedElement && previousSelectedElement === editableElement && !params.reEvaluate);
}
function addOverlayAndToolbar(params, eventDetails, editableElement, isVariant) {
  VisualBuilder.VisualBuilderGlobalState.value.isFocussed = true;
  addOverlay({
    overlayWrapper: params.overlayWrapper,
    resizeObserver: params.resizeObserver,
    editableElement
  });
  addFocusedToolbar({
    eventDetails,
    focusedToolbar: params.focusedToolbar,
    hideOverlay: () => {
      hideOverlay({
        visualBuilderContainer: params.visualBuilderContainer,
        visualBuilderOverlayWrapper: params.overlayWrapper,
        focusedToolbar: params.focusedToolbar,
        resizeObserver: params.resizeObserver
      });
    },
    isVariant
  });
}
async function handleFieldSchemaAndIndividualFields(params, eventDetails, fieldMetadata, editableElement, previousSelectedElement) {
  var _a;
  const {
    content_type_uid,
    entry_uid,
    fieldPath,
    locale,
    variant: variantUid
  } = fieldMetadata;
  const fieldSchema = await FieldSchemaMap.getFieldSchema(
    content_type_uid,
    fieldPath
  );
  const { acl: entryAcl, workflowStage: entryWorkflowStageDetails } = await fetchEntryPermissionsAndStageDetails({
    entryUid: entry_uid,
    contentTypeUid: content_type_uid,
    locale,
    variantUid
  });
  if (fieldSchema) {
    const { isDisabled } = isFieldDisabled(
      fieldSchema,
      eventDetails,
      entryAcl,
      entryWorkflowStageDetails
    );
    if (isDisabled) {
      addOverlay({
        overlayWrapper: params.overlayWrapper,
        resizeObserver: params.resizeObserver,
        editableElement,
        isFieldDisabled: true
      });
    }
  }
  (_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send(VisualBuilderPostMessageEvents.FOCUS_FIELD, {
    DOMEditStack: getDOMEditStack(editableElement)
  });
  await handleIndividualFields(eventDetails, {
    visualBuilderContainer: params.visualBuilderContainer,
    resizeObserver: params.resizeObserver,
    lastEditedField: previousSelectedElement
  });
}
function observeEditableElementChanges(params, editableElement) {
  const focusElementObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "attributes" && mutation.attributeName === "data-cslp") {
        focusElementObserver == null ? void 0 : focusElementObserver.disconnect();
        VisualBuilder.VisualBuilderGlobalState.value.focusElementObserver = null;
        handleBuilderInteraction({ ...params, reEvaluate: true });
      }
    });
  });
  VisualBuilder.VisualBuilderGlobalState.value.focusElementObserver = focusElementObserver;
  focusElementObserver.observe(editableElement, { attributes: true });
}
var mouseClick_default = handleBuilderInteraction;

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/listeners/index.js
var eventHandlers = {
  click: (params) => (event) => {
    mouseClick_default({
      event,
      overlayWrapper: params.overlayWrapper,
      visualBuilderContainer: params.visualBuilderContainer,
      previousSelectedEditableDOM: VisualBuilder.VisualBuilderGlobalState.value.previousSelectedEditableDOM,
      focusedToolbar: params.focusedToolbar,
      resizeObserver: params.resizeObserver
    });
  },
  mousemove: (params) => (event) => {
    mouseHover_default({
      event,
      overlayWrapper: params.overlayWrapper,
      visualBuilderContainer: params.visualBuilderContainer,
      customCursor: params.customCursor,
      resizeObserver: params.resizeObserver,
      focusedToolbar: params.focusedToolbar
    });
  },
  mouseleave: (params) => () => {
    hideCustomCursor(params.customCursor);
    hideHoverOutline(params.visualBuilderContainer);
  },
  mouseenter: (params) => () => {
    showCustomCursor(params.customCursor);
  }
};
var eventListenersMap = /* @__PURE__ */ new Map();
function addEventListeners(params) {
  const clickHandler = eventHandlers.click(params);
  const mousemoveHandler = eventHandlers.mousemove(params);
  const mouseleaveHandler = eventHandlers.mouseleave(params);
  const mouseenterHandler = eventHandlers.mouseenter(params);
  eventListenersMap.set("click", clickHandler);
  eventListenersMap.set("mousemove", mousemoveHandler);
  eventListenersMap.set("mouseleave", mouseleaveHandler);
  eventListenersMap.set("mouseenter", mouseenterHandler);
  window.addEventListener("click", clickHandler, { capture: true });
  window.addEventListener("mousemove", mousemoveHandler);
  document.documentElement.addEventListener("mouseleave", mouseleaveHandler);
  document.documentElement.addEventListener("mouseenter", mouseenterHandler);
}
function removeEventListeners(params) {
  const clickHandler = eventListenersMap.get("click");
  const mousemoveHandler = eventListenersMap.get("mousemove");
  const mouseleaveHandler = eventListenersMap.get("mouseleave");
  const mouseenterHandler = eventListenersMap.get("mouseenter");
  if (clickHandler) {
    window.removeEventListener("click", clickHandler, { capture: true });
  }
  if (mousemoveHandler) {
    window.removeEventListener("mousemove", mousemoveHandler);
  }
  if (mouseleaveHandler) {
    document.documentElement.removeEventListener(
      "mouseleave",
      mouseleaveHandler
    );
  }
  if (mouseenterHandler) {
    document.documentElement.removeEventListener(
      "mouseenter",
      mouseenterHandler
    );
  }
  eventListenersMap.clear();
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/listeners/keyboardShortcuts.js
function addKeyboardShortcuts({
  overlayWrapper,
  visualBuilderContainer,
  focusedToolbar,
  resizeObserver
}) {
  document.addEventListener("keydown", (e6) => {
    const event = e6;
    if (event.key === "Escape") {
      hideOverlay({
        visualBuilderOverlayWrapper: overlayWrapper,
        visualBuilderContainer,
        focusedToolbar,
        resizeObserver
      });
    }
  });
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/eventManager/useHighlightCommentIcon.js
var handleAddCommentIcons = (event) => {
  const { payload } = event.data;
  highlightCommentIconOnCanvas(payload);
};
var handleRemoveCommentIcons = () => {
  removeAllHighlightedCommentIcons();
};
var useHighlightCommentIcon = () => {
  var _a, _b;
  (_a = visualBuilderPostMessage_default) == null ? void 0 : _a.on(
    VisualBuilderPostMessageEvents.HIGHLIGHT_ACTIVE_COMMENTS,
    handleAddCommentIcons
  );
  (_b = visualBuilderPostMessage_default) == null ? void 0 : _b.on(
    VisualBuilderPostMessageEvents.REMOVE_HIGHLIGHTED_COMMENTS,
    handleRemoveCommentIcons
  );
};

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/eventManager/useRecalculateVariantDataCSLPValues.js
var VARIANT_UPDATE_DELAY_MS = 8e3;
function useRecalculateVariantDataCSLPValues() {
  var _a;
  (_a = livePreviewEventManager_default) == null ? void 0 : _a.on(
    LIVE_PREVIEW_POST_MESSAGE_EVENTS.VARIANT_PATCH,
    (event) => {
      if (VisualBuilder.VisualBuilderGlobalState.value.audienceMode) {
        updateVariantClasses(event.data);
      }
    }
  );
}
function updateVariantClasses({
  highlightVariantFields,
  expectedCSLPValues
}) {
  const variant = VisualBuilder.VisualBuilderGlobalState.value.variant;
  const observers = [];
  const updateElementClasses = (element, dataCslp, observer) => {
    if (!dataCslp) return;
    if (dataCslp.startsWith("v2:") && !element.classList.contains("visual-builder__variant-field")) {
      if (element.classList.contains("visual-builder__base-field")) {
        element.classList.remove("visual-builder__base-field");
      }
      if (highlightVariantFields) {
        element.classList.add(
          visualBuilderStyles()["visual-builder__variant-field"],
          "visual-builder__variant-field"
        );
      } else {
        element.classList.add("visual-builder__variant-field");
      }
    } else if (!dataCslp.startsWith("v2:") && element.classList.contains("visual-builder__variant-field")) {
      element.classList.remove(
        visualBuilderStyles()["visual-builder__variant-field"],
        "visual-builder__variant-field"
      );
      element.classList.add("visual-builder__base-field");
    } else if (dataCslp.startsWith("v2:") && variant && !dataCslp.includes(variant) && element.classList.contains("visual-builder__variant-field")) {
      element.classList.remove(
        visualBuilderStyles()["visual-builder__variant-field"],
        "visual-builder__variant-field"
      );
      element.classList.add("visual-builder__disabled-variant-field");
    }
    if (!observer) return;
    observer.disconnect();
    const index = observers.indexOf(observer);
    if (index > -1) {
      observers.splice(index, 1);
    }
  };
  const addElementClasses = (element) => {
    const dataCslp = element.getAttribute(DATA_CSLP_ATTR_SELECTOR);
    if (!dataCslp) {
      element.childNodes.forEach((child) => {
        if (child instanceof HTMLElement) {
          addElementClasses(child);
        }
      });
      return;
    }
    if (dataCslp.startsWith("v2:") && element.classList.contains("visual-builder__variant-field")) {
      return;
    }
    if (dataCslp.startsWith("v2:") && !element.classList.contains("visual-builder__variant-field")) {
      if (element.classList.contains("visual-builder__base-field")) {
        element.classList.remove("visual-builder__base-field");
      }
      if (highlightVariantFields) {
        element.classList.add(
          visualBuilderStyles()["visual-builder__variant-field"],
          "visual-builder__variant-field"
        );
      } else {
        element.classList.add("visual-builder__variant-field");
      }
    } else if (!dataCslp.startsWith("v2:")) {
      if (element.classList.contains("visual-builder__variant-field")) {
        element.classList.remove(
          visualBuilderStyles()["visual-builder__variant-field"],
          "visual-builder__variant-field"
        );
      }
      element.classList.add("visual-builder__base-field");
    }
    element.childNodes.forEach((child) => {
      if (child instanceof HTMLElement) {
        addElementClasses(child);
      }
    });
  };
  const elementsWithCslp = document.querySelectorAll(
    `[${DATA_CSLP_ATTR_SELECTOR}]`
  );
  elementsWithCslp.forEach((elementNode) => {
    const element = elementNode;
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === DATA_CSLP_ATTR_SELECTOR || mutation.type === "childList") {
          if (mutation.addedNodes.length > 0) {
            mutation.addedNodes.forEach((node) => {
              if (node instanceof HTMLElement) {
                addElementClasses(node);
              }
            });
          }
          const dataCslp = element.getAttribute(
            DATA_CSLP_ATTR_SELECTOR
          );
          updateElementClasses(element, dataCslp || "", observer);
        }
      });
    });
    observers.push(observer);
    observer.observe(element, {
      attributes: true,
      childList: true,
      // Observe direct children
      subtree: true
    });
  });
  setTimeout(() => {
    if (observers.length > 0) {
      observers.forEach((observer) => observer.disconnect());
      observers.length = 0;
    }
  }, VARIANT_UPDATE_DELAY_MS);
}

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/eventManager/useCollab.js
var handleRemoveCommentIcons2 = (fromShare = false) => {
  if (fromShare) {
    hideAllCollabIcons();
    return;
  }
  removeAllCollabIcons();
};
var useCollab = () => {
  var _a, _b, _c, _d, _e, _f;
  const config2 = configManager_default.get();
  const collabEnable = (_a = visualBuilderPostMessage_default) == null ? void 0 : _a.on(
    VisualBuilderPostMessageEvents.COLLAB_ENABLE,
    (data) => {
      var _a2, _b2, _c2, _d2, _e2, _f2, _g, _h, _i;
      if (!((_a2 = data == null ? void 0 : data.data) == null ? void 0 : _a2.collab)) {
        console.error("Invalid collab data structure:", data);
        return;
      }
      if ((_c2 = (_b2 = data == null ? void 0 : data.data) == null ? void 0 : _b2.collab) == null ? void 0 : _c2.fromShare) {
        configManager_default.set(
          "collab.pauseFeedback",
          (_e2 = (_d2 = data == null ? void 0 : data.data) == null ? void 0 : _d2.collab) == null ? void 0 : _e2.pauseFeedback
        );
        configManager_default.set(
          "collab.isFeedbackMode",
          (_g = (_f2 = data == null ? void 0 : data.data) == null ? void 0 : _f2.collab) == null ? void 0 : _g.isFeedbackMode
        );
        showAllCollabIcons();
        return;
      }
      configManager_default.set("collab.enable", data.data.collab.enable ?? false);
      configManager_default.set(
        "collab.isFeedbackMode",
        data.data.collab.isFeedbackMode ?? false
      );
      configManager_default.set(
        "collab.pauseFeedback",
        (_i = (_h = data == null ? void 0 : data.data) == null ? void 0 : _h.collab) == null ? void 0 : _i.pauseFeedback
      );
      configManager_default.set(
        "collab.inviteMetadata",
        data.data.collab.inviteMetadata
      );
    }
  );
  const collabPayload = (_b = visualBuilderPostMessage_default) == null ? void 0 : _b.on(
    VisualBuilderPostMessageEvents.COLLAB_DATA_UPDATE,
    (data) => {
      var _a2, _b2, _c2, _d2, _e2, _f2, _g, _h, _i;
      if (!((_a2 = config2 == null ? void 0 : config2.collab) == null ? void 0 : _a2.enable)) return;
      if (!((_b2 = data == null ? void 0 : data.data) == null ? void 0 : _b2.collab)) {
        console.error("Invalid collab data structure:", data);
        return;
      }
      if ((_d2 = (_c2 = data == null ? void 0 : data.data) == null ? void 0 : _c2.collab) == null ? void 0 : _d2.inviteMetadata) {
        configManager_default.set(
          "collab.inviteMetadata",
          (_f2 = (_e2 = data == null ? void 0 : data.data) == null ? void 0 : _e2.collab) == null ? void 0 : _f2.inviteMetadata
        );
        return;
      }
      const missingThreadIds = ((_i = (_h = (_g = data == null ? void 0 : data.data) == null ? void 0 : _g.collab) == null ? void 0 : _h.payload) == null ? void 0 : _i.map((payload) => generateThread(payload)).filter((id) => id !== void 0)) || [];
      if (missingThreadIds.length > 0) {
        handleMissingThreads({
          payload: { isElementPresent: false },
          threadUids: missingThreadIds
        });
      }
    }
  );
  const collabDisable = (_c = visualBuilderPostMessage_default) == null ? void 0 : _c.on(
    VisualBuilderPostMessageEvents.COLLAB_DISABLE,
    (data) => {
      var _a2, _b2, _c2, _d2;
      if ((_b2 = (_a2 = data == null ? void 0 : data.data) == null ? void 0 : _a2.collab) == null ? void 0 : _b2.fromShare) {
        configManager_default.set(
          "collab.pauseFeedback",
          (_d2 = (_c2 = data == null ? void 0 : data.data) == null ? void 0 : _c2.collab) == null ? void 0 : _d2.pauseFeedback
        );
        handleRemoveCommentIcons2(true);
        return;
      }
      configManager_default.set("collab.enable", false);
      configManager_default.set("collab.isFeedbackMode", false);
      handleRemoveCommentIcons2();
    }
  );
  const collabThreadRemove = (_d = visualBuilderPostMessage_default) == null ? void 0 : _d.on(
    VisualBuilderPostMessageEvents.COLLAB_THREADS_REMOVE,
    (data) => {
      var _a2, _b2, _c2;
      const threadUids = (_a2 = data == null ? void 0 : data.data) == null ? void 0 : _a2.threadUids;
      if (!((_b2 = config2 == null ? void 0 : config2.collab) == null ? void 0 : _b2.enable)) return;
      if ((_c2 = data == null ? void 0 : data.data) == null ? void 0 : _c2.updateConfig) {
        configManager_default.set("collab.isFeedbackMode", true);
      }
      if (threadUids.length > 0) {
        threadUids.forEach((threadUid) => {
          removeCollabIcon(threadUid);
        });
      }
    }
  );
  const collabThreadReopen = (_e = visualBuilderPostMessage_default) == null ? void 0 : _e.on(
    VisualBuilderPostMessageEvents.COLLAB_THREAD_REOPEN,
    (data) => {
      var _a2, _b2;
      const thread = data.data.thread;
      if (!((_a2 = config2 == null ? void 0 : config2.collab) == null ? void 0 : _a2.enable)) return;
      const result2 = generateThread(thread, {
        hidden: Boolean((_b2 = config2 == null ? void 0 : config2.collab) == null ? void 0 : _b2.pauseFeedback)
      });
      if (result2) {
        handleMissingThreads({
          payload: { isElementPresent: false },
          threadUids: [result2]
        });
      }
    }
  );
  const collabThreadHighlight = (_f = visualBuilderPostMessage_default) == null ? void 0 : _f.on(
    VisualBuilderPostMessageEvents.COLLAB_THREAD_HIGHLIGHT,
    (data) => {
      var _a2, _b2;
      const { threadUid } = data.data;
      if (!((_a2 = config2 == null ? void 0 : config2.collab) == null ? void 0 : _a2.enable) || ((_b2 = config2 == null ? void 0 : config2.collab) == null ? void 0 : _b2.pauseFeedback))
        return;
      HighlightThread(threadUid);
    }
  );
  return () => {
    collabEnable == null ? void 0 : collabEnable.unregister();
    collabPayload == null ? void 0 : collabPayload.unregister();
    collabDisable == null ? void 0 : collabDisable.unregister();
    collabThreadRemove == null ? void 0 : collabThreadRemove.unregister();
    collabThreadReopen == null ? void 0 : collabThreadReopen.unregister();
    collabThreadHighlight == null ? void 0 : collabThreadHighlight.unregister();
  };
};

// node_modules/@contentstack/live-preview-utils/dist/modern/visualBuilder/index.js
var threadsPayload = [];
var _VisualBuilder = class _VisualBuilder2 {
  constructor() {
    var _a;
    this.customCursor = null;
    this.overlayWrapper = null;
    this.visualBuilderContainer = null;
    this.focusedToolbar = null;
    this.scrollEventHandler = () => {
      updateCollabIconPosition();
      updatePopupPositions();
      updateSuggestionListPosition();
      updateHighlightedCommentIconPosition();
    };
    this.resizeEventHandler = () => {
      const previousSelectedEditableDOM = _VisualBuilder2.VisualBuilderGlobalState.value.previousSelectedEditableDOM;
      updateHighlightedCommentIconPosition();
      updateCollabIconPosition();
      updatePopupPositions();
      updateSuggestionListPosition();
      if (previousSelectedEditableDOM) {
        this.handlePositionChange(
          previousSelectedEditableDOM
        );
      }
    };
    this.resizeObserver = new ResizeObserver(([entry]) => {
      const previousSelectedEditableDOM = _VisualBuilder2.VisualBuilderGlobalState.value.previousSelectedEditableDOM;
      if (!this.overlayWrapper || !previousSelectedEditableDOM) {
        return;
      }
      if (!entry.target.isSameNode(previousSelectedEditableDOM) && !entry.target.classList.contains(
        "visual-builder__pseudo-editable-element"
      )) {
        return;
      }
      const isPsuedoEditableElement = entry.target.classList.contains(
        "visual-builder__pseudo-editable-element"
      );
      const editableElement = isPsuedoEditableElement ? previousSelectedEditableDOM : entry.target.closest("[data-cslp]");
      if (isPsuedoEditableElement) {
        addFocusOverlay(entry.target, this.overlayWrapper);
      } else if (editableElement) {
        this.handlePositionChange(editableElement);
      }
      const cslpData = editableElement && editableElement.getAttribute("data-cslp");
      if (!editableElement || !cslpData) {
        return;
      }
      const fieldMetadata = extractDetailsFromCslp(cslpData);
      FieldSchemaMap.getFieldSchema(
        fieldMetadata.content_type_uid,
        fieldMetadata.fieldPath
      ).then((fieldSchema) => {
        if (!fieldSchema) {
          return;
        }
        const { isDisabled } = isFieldDisabled(fieldSchema, {
          editableElement,
          fieldMetadata
        });
        if (isDisabled) {
          addFocusOverlay(
            editableElement,
            this.overlayWrapper,
            isDisabled
          );
        }
      });
    });
    this.mutationObserver = new MutationObserver(
      debounce_default(
        async () => {
          updateFocussedStateOnMutation(
            this.overlayWrapper,
            this.focusedToolbar,
            this.visualBuilderContainer,
            this.resizeObserver
          );
          const emptyBlockParents = Array.from(
            document.querySelectorAll(`.${VB_EmptyBlockParentClass}`)
          );
          const previousEmptyBlockParents = _VisualBuilder2.VisualBuilderGlobalState.value.previousEmptyBlockParents;
          if (!isEqual_default(emptyBlockParents, previousEmptyBlockParents)) {
            const noMoreEmptyBlockParent = previousEmptyBlockParents.filter(
              (x4) => !emptyBlockParents.includes(x4)
            );
            const newEmptyBlockParent = emptyBlockParents.filter(
              (x4) => !previousEmptyBlockParents.includes(x4)
            );
            removeEmptyBlocks(noMoreEmptyBlockParent);
            await generateEmptyBlocks(newEmptyBlockParent);
            _VisualBuilder2.VisualBuilderGlobalState.value = {
              ..._VisualBuilder2.VisualBuilderGlobalState.value,
              previousEmptyBlockParents: emptyBlockParents
            };
          }
        },
        100,
        { trailing: true }
      )
    );
    this.threadMutationObserver = new MutationObserver(
      debounce_default(() => {
        const container = document.querySelector(
          ".visual-builder__container"
        );
        if (container && threadsPayload) {
          const unrenderedThreads = filterUnrenderedThreads(threadsPayload);
          if (unrenderedThreads.length > 0) {
            processThreadsBatch(threadsPayload).then(
              (missingThreadIds) => {
                missingThreadIds.forEach(clearThreadStatus);
                if (missingThreadIds.length > 0) {
                  handleMissingThreads({
                    payload: { isElementPresent: false },
                    threadUids: missingThreadIds
                  });
                }
              }
            );
          }
          threadsPayload = [];
        }
      }, 1e3)
    );
    this.destroy = () => {
      window.removeEventListener("resize", this.resizeEventHandler);
      window.removeEventListener("scroll", this.scrollEventHandler);
      removeEventListeners({
        overlayWrapper: this.overlayWrapper,
        visualBuilderContainer: this.visualBuilderContainer,
        previousSelectedEditableDOM: _VisualBuilder2.VisualBuilderGlobalState.value.previousSelectedEditableDOM,
        focusedToolbar: this.focusedToolbar,
        resizeObserver: this.resizeObserver,
        customCursor: this.customCursor
      });
      this.resizeObserver.disconnect();
      this.mutationObserver.disconnect();
      this.threadMutationObserver.disconnect();
      _VisualBuilder2.VisualBuilderGlobalState.value = {
        previousSelectedEditableDOM: null,
        previousHoveredTargetDOM: null,
        previousEmptyBlockParents: [],
        focusFieldValue: null,
        focusFieldReceivedInput: false,
        audienceMode: false,
        locale: "en-us",
        variant: null,
        focusElementObserver: null,
        referenceParentMap: {},
        isFocussed: false
      };
      if (this.visualBuilderContainer) {
        window.document.body.removeChild(this.visualBuilderContainer);
      }
      if (this.customCursor) {
        this.customCursor.remove();
      }
      if (this.overlayWrapper) {
        this.overlayWrapper.remove();
      }
      if (this.focusedToolbar) {
        this.focusedToolbar.remove();
      }
      this.customCursor = null;
      this.overlayWrapper = null;
      this.visualBuilderContainer = null;
      this.focusedToolbar = null;
    };
    window.addEventListener("resize", this.resizeEventHandler);
    window.addEventListener("scroll", this.scrollEventHandler);
    components_default({
      resizeObserver: this.resizeObserver
    });
    m4(y);
    this.visualBuilderContainer = document.querySelector(
      ".visual-builder__container"
    );
    this.overlayWrapper = document.querySelector(
      ".visual-builder__overlay__wrapper"
    );
    this.customCursor = document.querySelector(".visual-builder__cursor");
    this.focusedToolbar = document.querySelector(
      ".visual-builder__focused-toolbar"
    );
    const config2 = configManager_default.get();
    if (!config2.enable || config2.mode < ILivePreviewModeConfig.BUILDER) {
      return;
    }
    (_a = visualBuilderPostMessage_default) == null ? void 0 : _a.send("init", {
      isSSR: config2.ssr,
      href: window.location.href
    }).then((data) => {
      var _a2, _b, _c;
      const {
        windowType = ILivePreviewWindowType.BUILDER,
        stackDetails,
        collab
      } = data || {};
      configManager_default.set("windowType", windowType);
      configManager_default.set(
        "stackDetails.masterLocale",
        (stackDetails == null ? void 0 : stackDetails.masterLocale) || "en-us"
      );
      if (collab) {
        configManager_default.set("collab.enable", collab.enable);
        configManager_default.set("collab.isFeedbackMode", collab.isFeedbackMode);
        configManager_default.set("collab.inviteMetadata", collab.inviteMetadata);
      }
      if (collab == null ? void 0 : collab.payload) {
        threadsPayload = collab == null ? void 0 : collab.payload;
      }
      addEventListeners({
        overlayWrapper: this.overlayWrapper,
        visualBuilderContainer: this.visualBuilderContainer,
        previousSelectedEditableDOM: _VisualBuilder2.VisualBuilderGlobalState.value.previousSelectedEditableDOM,
        focusedToolbar: this.focusedToolbar,
        resizeObserver: this.resizeObserver,
        customCursor: this.customCursor
      });
      this.threadMutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false
      });
      useHistoryPostMessageEvent();
      useCollab();
      if (windowType === ILivePreviewWindowType.BUILDER) {
        addKeyboardShortcuts({
          overlayWrapper: this.overlayWrapper,
          visualBuilderContainer: this.visualBuilderContainer,
          focusedToolbar: this.focusedToolbar,
          resizeObserver: this.resizeObserver
        });
        useScrollToField();
        useHighlightCommentIcon();
        this.mutationObserver.observe(document.body, {
          childList: true,
          subtree: true
        });
        (_a2 = visualBuilderPostMessage_default) == null ? void 0 : _a2.on(
          VisualBuilderPostMessageEvents.GET_ALL_ENTRIES_IN_CURRENT_PAGE,
          getEntryIdentifiersInCurrentPage
        );
        (_b = visualBuilderPostMessage_default) == null ? void 0 : _b.send(
          VisualBuilderPostMessageEvents.SEND_VARIANT_AND_LOCALE
        );
        (_c = visualBuilderPostMessage_default) == null ? void 0 : _c.on(
          VisualBuilderPostMessageEvents.TOGGLE_SCROLL,
          (event) => {
            if (!event.data.scroll) {
              document.body.style.overflow = "hidden";
            } else {
              document.body.style.overflow = "auto";
            }
          }
        );
        useHideFocusOverlayPostMessageEvent({
          overlayWrapper: this.overlayWrapper,
          visualBuilderContainer: this.visualBuilderContainer,
          focusedToolbar: this.focusedToolbar,
          resizeObserver: this.resizeObserver
        });
        useOnEntryUpdatePostMessageEvent();
        useRecalculateVariantDataCSLPValues();
        useDraftFieldsPostMessageEvent();
        useVariantFieldsPostMessageEvent();
      }
    }).catch(() => {
      if (!inIframe()) {
        generateStartEditingButton();
      }
    });
  }
  handlePositionChange(editableElement) {
    updateFocussedState({
      editableElement,
      visualBuilderContainer: this.visualBuilderContainer,
      overlayWrapper: this.overlayWrapper,
      focusedToolbar: this.focusedToolbar,
      resizeObserver: this.resizeObserver
    });
  }
};
_VisualBuilder.VisualBuilderGlobalState = d3({
  previousSelectedEditableDOM: null,
  previousHoveredTargetDOM: null,
  previousEmptyBlockParents: [],
  focusFieldValue: null,
  focusFieldReceivedInput: false,
  audienceMode: false,
  locale: configManager_default.get().stackDetails.masterLocale || "en-us",
  variant: null,
  focusElementObserver: null,
  referenceParentMap: {},
  isFocussed: false
});
var VisualBuilder = _VisualBuilder;

// node_modules/@contentstack/live-preview-utils/dist/modern/preview/contentstack-live-preview-HOC.js
var _ContentstackLivePreview = class _ContentstackLivePreview2 {
  /**
   * Initializes the Live Preview SDK with the provided user configuration.
   * If the SDK is already initialized, subsequent calls to this method will return the existing SDK instance.
   * @param userConfig - The user configuration to initialize the SDK with. See {@link https://github.com/contentstack/live-preview-sdk/blob/main/docs/live-preview-configs.md#initconfig-iconfig|Live preview User config} for more details.
   * @returns A promise that resolves to the constructors of the Live Preview SDK.
   */
  static init(userConfig = getUserInitData()) {
    if (typeof window === "undefined") {
      PublicLogger.warn("The SDK is not initialized in the browser.");
      return Promise.resolve(_ContentstackLivePreview2.previewConstructors);
    }
    configManager_default.replace(userConfig);
    updateConfigFromUrl();
    if (_ContentstackLivePreview2.isInitialized()) {
      PublicLogger.warn(
        "You have already initialized the Live Preview SDK. So, any subsequent initialization returns the existing SDK instance."
      );
      return Promise.resolve(_ContentstackLivePreview2.previewConstructors);
    } else {
      return _ContentstackLivePreview2.initializePreview();
    }
  }
  /**
   * It is the live preview hash.
   * This hash could be used when data is fetched manually.
   */
  static get hash() {
    if (!_ContentstackLivePreview2.isInitialized()) {
      updateConfigFromUrl();
    }
    return configManager_default.get().hash;
  }
  static get config() {
    if (!_ContentstackLivePreview2.isInitialized()) {
      updateConfigFromUrl();
    }
    const config2 = configManager_default.get();
    const clonedConfig = cloneDeep_default(config2);
    const configToShare = pick_default(clonedConfig, [
      "ssr",
      "enable",
      "cleanCslpOnProduction",
      "stackDetails",
      "clientUrlParams",
      "windowType",
      "hash",
      "editButton",
      "mode"
    ]);
    return configToShare;
  }
  static isInitialized() {
    return !isEmpty_default(_ContentstackLivePreview2.previewConstructors);
  }
  static initializePreview() {
    _ContentstackLivePreview2.previewConstructors = {
      livePreview: new LivePreview(),
      visualBuilder: new VisualBuilder()
    };
    const livePreview = _ContentstackLivePreview2.previewConstructors.livePreview;
    Object.entries(_ContentstackLivePreview2.onEntryChangeCallbacks).forEach(
      ([callbackUid, callback]) => {
        livePreview.subscribeToOnEntryChange(callback, callbackUid);
      }
    );
    _ContentstackLivePreview2.onEntryChangeCallbacks = {};
    handlePageTraversal();
    handleWebCompare();
    return Promise.resolve(_ContentstackLivePreview2.previewConstructors);
  }
  /**
   * Registers a callback function to be called when an entry changes.
   * @param onChangeCallback The callback function to be called when an entry changes.
   * @param config Optional configuration for the callback.
   * @param config.skipInitialRender If true, the callback will not be called when it is first registered.
   * @returns A unique identifier for the registered callback.
   *
   * @example
   * ```js
   * const callbackUid = ContentstackLivePreview.onEntryChange(() => {
   *    console.log("Entry changed");
   * });
   *
   * // Unsubscribe the callback
   * ContentstackLivePreview.unsubscribeOnEntryChange(callbackUid);
   * ```
   */
  static onEntryChange(onChangeCallback, config2 = {}) {
    const { skipInitialRender = false } = config2;
    const callbackUid = v4_default();
    if (_ContentstackLivePreview2.isInitialized()) {
      _ContentstackLivePreview2.previewConstructors.livePreview.subscribeToOnEntryChange(
        onChangeCallback,
        callbackUid
      );
    } else {
      _ContentstackLivePreview2.onEntryChangeCallbacks[callbackUid] = onChangeCallback;
    }
    const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
    const hasLivePreviewHash = searchParams && searchParams.has("live_preview");
    const isBuilder = searchParams && searchParams.has("builder");
    const shouldCallCallback = hasLivePreviewHash && isBuilder;
    if (!skipInitialRender || shouldCallCallback) {
      onChangeCallback();
    }
    return callbackUid;
  }
  /**
   * Registers a callback function to be called when there is a change in the entry being edited in live preview mode. The difference between this and `onEntryChange` is that this callback will not be called when it is first registered.
   * @param onChangeCallback The callback function to be called when there is a change in the entry.
   * @returns A unique identifier for the registered callback.
   *
   * @example
   * ```js
   * const callbackUid = ContentstackLivePreview.onLiveEdit(() => {
   *   console.log("Entry changed");
   * });
   *
   * // Unsubscribe the callback
   * ContentstackLivePreview.unsubscribeOnEntryChange(callbackUid);
   * ```
   *
   */
  static onLiveEdit(onChangeCallback) {
    return _ContentstackLivePreview2.onEntryChange(onChangeCallback, {
      skipInitialRender: true
    });
  }
  /**
   * Unsubscribes from the entry change event.
   * @param callback - The callback function to be unsubscribed.
   *
   * @example
   * ```js
   * // unsubscribing using the Callback UID
   * const callbackUid = ContentstackLivePreview.onEntryChange(() => {
   *  console.log("Entry changed");
   * });
   *
   * // Unsubscribe the callback
   * ContentstackLivePreview.unsubscribeOnEntryChange(callbackUid);
   * ```
   *
   * @example
   * ```js
   * // unsubscribing using the callback function
   * const callback = () => {console.log("Entry changed")};
   * ContentstackLivePreview.onEntryChange(callback);
   *
   * // Unsubscribe the callback
   * ContentstackLivePreview.unsubscribeOnEntryChange(callback);
   * ```
   *
   * @example
   * ```js
   * // The same is applicable to onLiveEdit
   * const callbackUid = ContentstackLivePreview.onLiveEdit(() => {
   * console.log("Entry changed");
   * });
   *
   * // Unsubscribe the callback
   * ContentstackLivePreview.unsubscribeOnEntryChange(callbackUid);
   * ```
   *
   *
   */
  static unsubscribeOnEntryChange(callback) {
    if (!_ContentstackLivePreview2.isInitialized()) {
      removeFromOnChangeSubscribers(
        _ContentstackLivePreview2.onEntryChangeCallbacks,
        callback
      );
      return;
    }
    _ContentstackLivePreview2.previewConstructors.livePreview.unsubscribeOnEntryChange(
      callback
    );
  }
  /**
   * Retrieves the version of the SDK.
   * @returns The version of the SDK as a string.
   */
  static getSdkVersion() {
    return "4.1.1";
  }
};
_ContentstackLivePreview.previewConstructors = {};
_ContentstackLivePreview.onEntryChangeCallbacks = {};
var ContentstackLivePreview = _ContentstackLivePreview;
var contentstack_live_preview_HOC_default = ContentstackLivePreview;

// node_modules/@contentstack/live-preview-utils/dist/modern/light-sdk.js
var _LightLivePreviewHoC = class _LightLivePreviewHoC2 {
  static init() {
    if (typeof window === "undefined") {
      return Promise.resolve(_LightLivePreviewHoC2.previewConstructors);
    }
    return _LightLivePreviewHoC2.initializePreview();
  }
  static initializePreview() {
    _LightLivePreviewHoC2.previewConstructors = {
      livePreview: {},
      visualBuilder: {}
    };
    _LightLivePreviewHoC2.onEntryChangeCallbacks = {};
    return Promise.resolve(_LightLivePreviewHoC2.previewConstructors);
  }
  static get hash() {
    return "";
  }
  static get config() {
    return {};
  }
  static isInitialized() {
    return false;
  }
  static onEntryChange(callback, config2 = {}) {
    const { skipInitialRender = false } = config2;
    if (!skipInitialRender) {
      callback();
    }
    return "live-preview-id";
  }
  static onLiveEdit(callback) {
    return "live-preview-id";
  }
  static unsubscribeOnEntryChange() {
  }
  static getSdkVersion() {
    return "4.1.1";
  }
};
_LightLivePreviewHoC.previewConstructors = {};
_LightLivePreviewHoC.onEntryChangeCallbacks = {};
var LightLivePreviewHoC = _LightLivePreviewHoC;
var light_sdk_default = LightLivePreviewHoC;

// node_modules/@contentstack/live-preview-utils/dist/modern/index.js
var ContentstackLivePreview2 = typeof process !== "undefined" && (process.env.PURGE_PREVIEW_SDK === "true" || process.env.REACT_APP_PURGE_PREVIEW_SDK === "true") ? light_sdk_default : contentstack_live_preview_HOC_default;
var VB_EmptyBlockParentClass = "visual-builder__empty-block-parent";
var index_default = ContentstackLivePreview2;
export {
  VB_EmptyBlockParentClass,
  index_default as default
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

lodash-es/lodash.default.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)

@contentstack/live-preview-utils/dist/modern/livePreview/live-preview.js:
  (*! TODO: we replaced the handleOnChange() with this. *)
  (*! I don't think we need this. Confirm and remove it. *)

dompurify/dist/purify.es.mjs:
  (*! @license DOMPurify 3.3.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.0/LICENSE *)
*/
//# sourceMappingURL=@contentstack_live-preview-utils.js.map
