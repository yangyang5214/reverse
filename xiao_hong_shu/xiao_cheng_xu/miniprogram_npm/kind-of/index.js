var r, t, e = require("../../@babel/runtime/helpers/typeof");

module.exports = (r = {}, t = function(t, n) {
    if (!r[t]) return require(n);
    if (!r[t].status) {
        var o = r[t].m;
        o._exports = o._tempexports;
        var a = Object.getOwnPropertyDescriptor(o, "exports");
        a && a.configurable && Object.defineProperty(o, "exports", {
            set: function(r) {
                "object" === e(r) && r !== o._exports && (o._exports.__proto__ = r.__proto__, Object.keys(r).forEach(function(t) {
                    o._exports[t] = r[t];
                })), o._tempexports = r;
            },
            get: function() {
                return o._tempexports;
            }
        }), r[t].status = 1, r[t].func(r[t].req, o, o.exports);
    }
    return r[t].m.exports;
}, function(t, e, n) {
    r[t] = {
        status: 0,
        func: e,
        req: n,
        m: {
            exports: {},
            _tempexports: {}
        }
    };
}(1631872123681, function(r, t, n) {
    var o = Object.prototype.toString;
    function a(r) {
        return "function" == typeof r.constructor ? r.constructor.name : null;
    }
    t.exports = function(r) {
        if (void 0 === r) return "undefined";
        if (null === r) return "null";
        var t = e(r);
        if ("boolean" === t) return "boolean";
        if ("string" === t) return "string";
        if ("number" === t) return "number";
        if ("symbol" === t) return "symbol";
        if ("function" === t) return "GeneratorFunction" === a(r) ? "generatorfunction" : "function";
        if (function(r) {
            return Array.isArray ? Array.isArray(r) : r instanceof Array;
        }(r)) return "array";
        if (function(r) {
            return !(!r.constructor || "function" != typeof r.constructor.isBuffer) && r.constructor.isBuffer(r);
        }(r)) return "buffer";
        if (function(r) {
            try {
                if ("number" == typeof r.length && "function" == typeof r.callee) return !0;
            } catch (r) {
                if (-1 !== r.message.indexOf("callee")) return !0;
            }
            return !1;
        }(r)) return "arguments";
        if (function(r) {
            return r instanceof Date || "function" == typeof r.toDateString && "function" == typeof r.getDate && "function" == typeof r.setDate;
        }(r)) return "date";
        if (function(r) {
            return r instanceof Error || "string" == typeof r.message && r.constructor && "number" == typeof r.constructor.stackTraceLimit;
        }(r)) return "error";
        if (function(r) {
            return r instanceof RegExp || "string" == typeof r.flags && "boolean" == typeof r.ignoreCase && "boolean" == typeof r.multiline && "boolean" == typeof r.global;
        }(r)) return "regexp";
        switch (a(r)) {
          case "Symbol":
            return "symbol";

          case "Promise":
            return "promise";

          case "WeakMap":
            return "weakmap";

          case "WeakSet":
            return "weakset";

          case "Map":
            return "map";

          case "Set":
            return "set";

          case "Int8Array":
            return "int8array";

          case "Uint8Array":
            return "uint8array";

          case "Uint8ClampedArray":
            return "uint8clampedarray";

          case "Int16Array":
            return "int16array";

          case "Uint16Array":
            return "uint16array";

          case "Int32Array":
            return "int32array";

          case "Uint32Array":
            return "uint32array";

          case "Float32Array":
            return "float32array";

          case "Float64Array":
            return "float64array";
        }
        if (function(r) {
            return "function" == typeof r.throw && "function" == typeof r.return && "function" == typeof r.next;
        }(r)) return "generator";
        switch (t = o.call(r)) {
          case "[object Object]":
            return "object";

          case "[object Map Iterator]":
            return "mapiterator";

          case "[object Set Iterator]":
            return "setiterator";

          case "[object String Iterator]":
            return "stringiterator";

          case "[object Array Iterator]":
            return "arrayiterator";
        }
        return t.slice(8, -1).toLowerCase().replace(/\s/g, "");
    };
}, function(r) {
    return t({}[r], r);
}), t(1631872123681));