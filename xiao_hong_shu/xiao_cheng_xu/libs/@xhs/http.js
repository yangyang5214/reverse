var t = require("../../@babel/runtime/helpers/classCallCheck"), r = require("../../@babel/runtime/helpers/createClass"), e = require("../../@babel/runtime/helpers/toConsumableArray"), n = require("../../@babel/runtime/helpers/typeof");

module.exports = function(t) {
    var r = {};
    function e(n) {
        if (r[n]) return r[n].exports;
        var o = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, e), o.l = !0, o.exports;
    }
    return e.m = t, e.c = r, e.d = function(t, r, n) {
        e.o(t, r) || Object.defineProperty(t, r, {
            configurable: !1,
            enumerable: !0,
            get: n
        });
    }, e.n = function(t) {
        var r = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return e.d(r, "a", r), r;
    }, e.o = function(t, r) {
        return Object.prototype.hasOwnProperty.call(t, r);
    }, e.p = "", e(e.s = 60);
}([ function(t, r, e) {
    r.a = {
        FATAL: 60,
        ERROR: 50,
        WARN: 40,
        INFO: 30,
        DEBUG: 20,
        TRACE: 10
    };
}, function(t, r) {
    var e, n, o = t.exports = {};
    function a() {
        throw new Error("setTimeout has not been defined");
    }
    function i() {
        throw new Error("clearTimeout has not been defined");
    }
    function u(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === a || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
        try {
            return e(t, 0);
        } catch (r) {
            try {
                return e.call(null, t, 0);
            } catch (r) {
                return e.call(this, t, 0);
            }
        }
    }
    !function() {
        try {
            e = "function" == typeof setTimeout ? setTimeout : a;
        } catch (t) {
            e = a;
        }
        try {
            n = "function" == typeof clearTimeout ? clearTimeout : i;
        } catch (t) {
            n = i;
        }
    }();
    var c, f = [], s = !1, d = -1;
    function l() {
        s && c && (s = !1, c.length ? f = c.concat(f) : d = -1, f.length && p());
    }
    function p() {
        if (!s) {
            var t = u(l);
            s = !0;
            for (var r = f.length; r; ) {
                for (c = f, f = []; ++d < r; ) c && c[d].run();
                d = -1, r = f.length;
            }
            c = null, s = !1, function(t) {
                if (n === clearTimeout) return clearTimeout(t);
                if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
                try {
                    n(t);
                } catch (r) {
                    try {
                        return n.call(null, t);
                    } catch (r) {
                        return n.call(this, t);
                    }
                }
            }(t);
        }
    }
    function b(t, r) {
        this.fun = t, this.array = r;
    }
    function v() {}
    o.nextTick = function(t) {
        var r = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var e = 1; e < arguments.length; e++) r[e - 1] = arguments[e];
        f.push(new b(t, r)), 1 !== f.length || s || u(p);
    }, b.prototype.run = function() {
        this.fun.apply(null, this.array);
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", 
    o.versions = {}, o.on = v, o.addListener = v, o.once = v, o.off = v, o.removeListener = v, 
    o.removeAllListeners = v, o.emit = v, o.prependListener = v, o.prependOnceListener = v, 
    o.listeners = function(t) {
        return [];
    }, o.binding = function(t) {
        throw new Error("process.binding is not supported");
    }, o.cwd = function() {
        return "/";
    }, o.chdir = function(t) {
        throw new Error("process.chdir is not supported");
    }, o.umask = function() {
        return 0;
    };
}, function(t, r) {
    var e;
    e = function() {
        return this;
    }();
    try {
        e = e || Function("return this")() || (0, eval)("this");
    } catch (t) {
        "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (e = window);
    }
    t.exports = e;
}, function(t, r, e) {
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.configure = function(t) {
        var r = t.transport, e = t.fields;
        Object(o.a)(r) && (f.transport = Object.assign(f.transport, r));
        Object(o.a)(e) && s.forEach(function(t) {
            t in e && (f.fields[t] = e[t]);
        });
    };
    var n = e(0), o = e(4), a = e(9), i = e(10), u = e(11);
    e.d(r, "LOG_LEVEL", function() {
        return n.a;
    });
    var c = Object.assign || function(t) {
        for (var r = 1; r < arguments.length; r++) {
            var e = arguments[r];
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        }
        return t;
    }, f = {
        transport: {
            owl: !1,
            sentry: !1,
            console: !0
        },
        fields: {}
    }, s = [ "app", "prdline" ];
    function d(t, r) {
        return !0 === t || "number" == typeof t && r >= t;
    }
    var l = function(t) {
        return function(r, e, n) {
            return function(t, r, e, n) {
                e = Object(o.a)(e) ? c({}, f.fields, e) : f.fields, d(f.transport.console, t) && Object(a.a)(t, r, e, n), 
                d(f.transport.owl, t) && Object(i.a)(t, r, e, n), d(f.transport.sentry, t) && Object(u.a)(t, r, e, n);
            }(t, r, e, n);
        };
    }, p = l(n.a.ERROR);
    r.error = p;
    var b = l(n.a.WARN);
    r.warn = b;
    var v = l(n.a.INFO);
    r.info = v;
    var h = l(n.a.DEBUG);
    r.debug = h;
    var m = function(t, r, e) {
        throw p(t, r, e), t;
    };
    r.fatal = m;
    r.assert = function(t, r) {
        t || m(r);
    };
}, function(t, r, e) {
    r.a = function(t) {
        return t && "[object Object]" === Object.prototype.toString.call(t);
    };
}, function(t, r, e) {
    r.a = function(t, r) {
        var e = {};
        if (Object(o.a)(r)) for (var a in r) r.hasOwnProperty(a) && (e[a] = r[a]);
        if (Object(n.a)(t)) e.error = !0, e.stack = t.stack || "", e.message = t.message || "", 
        void 0 !== t.code && (e.code = t.code || ""), void 0 !== t.internal && (e.internal = t.internal); else if (Object(o.a)(t)) for (var i in e.message = "no_message", 
        t) t.hasOwnProperty(i) && (e[i] = t[i]); else e.message = String(t);
        var u = 1 === Object.keys(e).length;
        return Object.defineProperty(e, "plain", {
            value: u
        }), e;
    };
    var n = e(6), o = e(4);
}, function(t, r, e) {
    r.a = function(t) {
        if (t instanceof Error) return !0;
        if ("object" === n(t) && t.message && t.stack) return !0;
        return !1;
    };
}, function(t, r, e) {
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e(3);
    e.d(r, "configure", function() {
        return n.configure;
    }), e.d(r, "error", function() {
        return n.error;
    }), e.d(r, "warn", function() {
        return n.warn;
    }), e.d(r, "info", function() {
        return n.info;
    }), e.d(r, "debug", function() {
        return n.debug;
    }), e.d(r, "fatal", function() {
        return n.fatal;
    }), e.d(r, "assert", function() {
        return n.assert;
    }), e.d(r, "LOG_LEVEL", function() {
        return n.LOG_LEVEL;
    }), r.default = n;
}, , function(t, r, e) {
    (function(t) {
        r.a = function(t, r, e) {
            var n = Object(o.a)(r, e);
            !function(t, r) {
                i ? function(t, r) {
                    r.error ? u(t, r.stack) : r.plain ? u(t, r.message) : u(t, r);
                }(t, r) : function(t, r) {
                    r.plain ? u(t, r.message) : u(t, JSON.stringify(r));
                }(t, r);
            }(t, n);
        };
        var n = e(0), o = e(5), a = console.error && console.debug, i = t.env.BROWSER, u = function(t, r) {
            var e = function(t) {
                if (a) {
                    if (t >= n.a.ERROR) return "error";
                    if (t >= n.a.WARN) return "warn";
                    if (t >= n.a.INFO) return "info";
                }
                return "log";
            }(t);
            console[e](r);
        };
    }).call(r, e(1));
}, function(t, r, e) {
    (function(t, n) {
        r.a = function(t, r, e, o) {
            var c = Object(a.a)(r, e);
            !function(t, r, e) {
                !function(t, r, e) {
                    var o = function() {
                        var t;
                        t = i ? window.owl : n.owl;
                        return t || null;
                    }();
                    if (!o) return;
                    o.push({
                        type: u(t),
                        label: e || "",
                        message: r.message || "",
                        context: r
                    });
                }(t, r, e);
            }(t, c, o);
        };
        var o = e(0), a = e(5), i = t.env.BROWSER;
        function u(t) {
            return t >= o.a.ERROR ? "error" : t >= o.a.WARN ? "warn" : t >= o.a.INFO ? "info" : "debug";
        }
    }).call(r, e(1), e(2));
}, function(t, r, e) {
    (function(t, n) {
        r.a = function(t, r, e) {
            var c = i ? window.sentry : n.sentry;
            if (!c) return;
            Object(a.a)(r) ? c.captureException(r) : t >= o.a.ERROR ? c.captureMessage(r, {
                level: u(t),
                extra: e
            }) : c.captureBreadcrumb({
                message: r,
                category: "logger",
                level: u(t),
                data: e
            });
        };
        var o = e(0), a = e(6), i = t.env.BROWSER, u = function(t) {
            return t >= o.a.ERROR ? "error" : t >= o.a.WARN ? "warning" : "info";
        };
    }).call(r, e(1), e(2));
}, function(t, r, e) {
    var n = e(7);
    e.d(r, "a", function() {
        return n.error;
    }), e.d(r, "b", function() {
        return n.info;
    }), e.d(r, "c", function() {
        return n.warn;
    });
}, , , , , , function(t, r, e) {
    e.d(r, "a", function() {
        return s;
    }), e.d(r, "b", function() {
        return d;
    });
    var o = e(66);
    function a(t) {
        return "object" === n(t) && ("[object Object]" === Object.prototype.toString.call(t) || Array.isArray(t));
    }
    function i(t, r, e, n) {
        return a(t) ? n(t, r, e) : t;
    }
    function u(t, r, e) {
        return r(t, e);
    }
    function c(t, r, e) {
        var n = Array.isArray(t), o = n ? [] : {};
        for (var a in t) if (t.hasOwnProperty(a)) {
            var f = n ? a : u(a, r, e), s = i(t[a], r, e, c);
            o[f] = s;
        }
        return o;
    }
    function f(t, r, e) {
        if (!a(t)) return t;
        var o = "function" == typeof r ? r : void 0, i = c(t, e, "object" === n(r) ? r : void 0);
        return o ? o(i) : i;
    }
    function s(t, r) {
        return f(t, r, o.a);
    }
    function d(t, r) {
        return f(t, r, o.b);
    }
    o.a, o.b;
}, function(t, r, e) {
    r.e = function t() {
        var r = {};
        function e(e, o) {
            "object" === n(r[o]) && "object" === n(e) ? r[o] = t(r[o], e) : r[o] = e;
        }
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return a.forEach(function(t) {
            if (void 0 !== t) {
                if ("object" !== n(t) || Array.isArray(t)) throw new Error("[Http Exception] config must be a plain object");
                for (var r in t) t.hasOwnProperty(r) && e(t[r], r);
            }
        }), r;
    }, r.c = function(t) {
        return "object" === n(t) && "function" == typeof t.get;
    }, r.d = function(t) {
        return "number" == typeof t;
    }, r.b = function t(r) {
        if (!r || "object" !== n(r)) return r;
        var e = {};
        return Object.keys(r).forEach(function(a) {
            var i = r[a];
            o.indexOf(a) > -1 && (i = "__encrypted__"), "object" === n(i) && (i = t(i)), e[a] = i;
        }), e;
    };
    var o = [ "password" ];
    r.a = "__encrypted__";
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, r, o) {
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.default = function(t, r) {
        var e = {}, n = {
            request: Object(f.a)(),
            response: Object(f.a)(),
            result: Object(f.a)()
        };
        return O.forEach(function(o) {
            e[o.toLowerCase()] = w(o, t, r, n, !0);
        }), j.forEach(function(o) {
            e[o.toLowerCase()] = w(o, t, r, n, !1);
        }), e.del = e.delete, e.configure = p, e.interceptors = n, e.makeUri = u.b, e;
    };
    var a, i = o(12), u = o(61), c = o(62), f = o(63), s = o(64), d = o(67), l = o(19);
    function p(t) {
        (t.baseURL || t.apiList) && Object(u.a)({
            baseURL: t.baseURL,
            apiList: t.apiList
        }), t.defaults && (a = t.defaults);
    }
    function b(t) {
        var r, e = Object(l.e)(a, t);
        return "object" === n(r = e) && Object(l.c)(r.data) && !Object(l.d)(t.timeout) && Object(l.d)(a.uploadTimeout) && (e.timeout = a.uploadTimeout), 
        e.uploadTimeout && delete e.uploadTimeout, e;
    }
    function v(t, r, e, n) {
        return {
            statusCode: e,
            code: n.code,
            method: t.method,
            url: t.url,
            reqData: t.private ? l.a : Object(l.b)(t.data),
            resData: r
        };
    }
    function h(t, r, e) {
        return e ? "API_".concat(e) : "API_UNKNOW";
    }
    function m(t, r) {
        var e = r.data, o = r.statusCode, a = r.errorMsg, u = r.errorCode, f = "object" === n(e) ? e : {
            success: !1,
            error_code: u || "",
            error_msg: a || "no error msg"
        }, s = Object(c.b)(f, o);
        return Object(i.a)("".concat(t.method, " ").concat(t.url, ' failed: "').concat(s.message, '"'), v(t, f, o, s), h(0, 0, o)), 
        s;
    }
    function g(t, r, n, o) {
        var a = r;
        for (var u = {
            fulfilled: function(r) {
                a = function(t) {
                    return t !== a && Object(i.c)("[Http Exception] config reference has been changed during interceptor"), 
                    Object(s.a)(b(t));
                }(r);
                var e = t(a);
                if (!e || !e.then) throw new Error("[Http Exception] send must return a promise object");
                return e;
            }
        }, f = {
            fulfilled: function(t) {
                var r = n.processResponseData(t), e = r.statusCode, o = r.data;
                if (200 === e && (e = Object(d.a)(o)), e >= 300) throw m(a, {
                    data: o,
                    statusCode: e,
                    errorMsg: "request failed with status ".concat(e)
                });
                return o;
            },
            rejected: function(t) {
                var r = n.processResponseError(t);
                throw m(a, r);
            }
        }, l = {
            fulfilled: function(t) {
                var r = t.success;
                if (void 0 !== r && !1 === Boolean(r)) throw function(t, r) {
                    var e = r.data, n = r.statusCode, o = void 0 === n ? 200 : n, a = Object(c.a)(e, o);
                    throw Object(i.b)("".concat(t.method, " ").concat(t.url, ' failed with biz error: "').concat(a.message, '"'), v(t, e, o, a), h(0, 0, o)), 
                    a;
                }(a, {
                    data: t
                });
                return function(t, r) {
                    return !1 === r.extractData ? t : "function" == typeof r.extractData ? r.extractData(t) : function(t) {
                        return t.data;
                    }(t);
                }(Object(s.b)(t, a), a);
            }
        }, p = [].concat(e(o.request.queue), [ u, f ], e(o.response.queue), [ l ], e(o.result.queue)), g = Promise.resolve(a); p.length; ) {
            var O = p.shift();
            g = g.then(O.fulfilled, O.rejected);
        }
        return g;
    }
    var O = [ "POST", "PUT", "PATCH" ], j = [ "GET", "DELETE", "HEAD" ], w = function(t, r, e, o, a) {
        return function(i, c, f) {
            return i ? (a ? (s = f || {}).data = c : (s = c || {}, "object" === n(f) && (s = Object.assign(s, f))), 
            s.method = t, s.url = Object(u.b)(i, s), s.headers || (s.headers = {}), g(r, s, e, o)) : Promise.reject(new Error("[Http Exception] apiKey is empty"));
            var s;
        };
    };
}, function(t, r, e) {
    r.a = function(t) {
        var r = t.baseURL, e = t.apiList;
        r && (!function(t) {
            if ("string" != typeof t) throw new Error("[Http Exception] baseURL must be string, but now: ".concat(t));
            if ("/" === t.charAt(t.length - 1)) throw Error('[Http Exception] baseURL should not end with "/"');
        }(r), void 0 !== a.baseURL && Object(o.c)("[Http Warning] baseURL defined more than once"), 
        a.baseURL = r);
        e && (!function(t) {
            if ("object" !== n(t)) throw new Error("[Http Exception] apiList must be a map, but now: ".concat(n(t)));
            for (var r in t) t.hasOwnProperty(r) && f(t[r], r);
        }(e), void 0 !== a.apiList && Object(o.c)("[Http Warning] apiList defined more than once"), 
        a.apiList = e);
    }, r.b = function(t) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (u(t) || c(t) || void 0 === a.apiList) return p(t, r);
        if (a.apiList[t]) return p(a.apiList[t], r);
        throw new Error("[Http Exception] ".concat(t, " is not specified on api-list.config"));
    };
    var o = e(12), a = {
        baseURL: void 0,
        apiList: void 0
    }, i = /^https?:/;
    function u(t) {
        return /^\/\//.test(t) || i.test(t);
    }
    function c(t) {
        return "/" === t.charAt(0);
    }
    function f(t, r) {
        var e = "[Http Exception] ".concat(r);
        if ("string" != typeof t) throw new Error("".concat(e, " should be a string"));
        if (!u(t) && "/" !== t.charAt(0)) throw new Error("".concat(e, ' should be start with "/"'));
    }
    function s(t, r) {
        return t + "/" + r;
    }
    var d = /{([^}]+)\}/g;
    function l(t) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n = r && "function" == typeof r.get && "function" == typeof r.has;
        return t.replace(d, function(a, i) {
            return e && e[i] ? e[i] : r && r[i] ? r[i] : n && r.has(i) ? r.get(i) : (Object(o.a)("[Http Exception] could not found placeholder ".concat(i, " in ").concat(t, " from payload")), 
            "undefined");
        });
    }
    function p(t, r) {
        var e = u(t) ? t : function(t) {
            return void 0 === a.baseURL ? t : a.baseURL + t;
        }(t);
        return e = r.resourceParams ? l(e, r.resourceParams) : l(e, r.data, r.params), r.resourceId && (e = s(e, r.resourceId)), 
        r.resourceAction && (e = s(e, r.resourceAction)), e;
    }
}, function(t, r, e) {
    e.d(r, "a", function() {
        return u;
    }), e.d(r, "b", function() {
        return c;
    });
    var n = [ "error_message", "message", "msg" ];
    function o(t) {
        var r = t.error_msg;
        return void 0 === r && n.forEach(function(e) {
            t[e] && (r = t[e]);
        }), void 0 === r && (r = "Error"), r;
    }
    var a = [ "result", "code" ];
    function i(t) {
        var r = t.error_code;
        return void 0 === r && a.forEach(function(e) {
            t[e] && (r = t[e]);
        }), void 0 === r && (r = "N/A"), r;
    }
    function u(t) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200, e = new Error(o(t));
        return e.detail = t, e.statusCode = r, e.internal = !1, e.code = i(t), e;
    }
    function c(t, r) {
        var e = u(t, r);
        return e.internal = !0, e;
    }
}, function(e, n, o) {
    n.a = function() {
        return new a();
    };
    var a = function() {
        function e() {
            t(this, e), this.queue = [];
        }
        return r(e, [ {
            key: "use",
            value: function(t, r) {
                this.queue.push({
                    fulfilled: t,
                    rejected: r
                });
            }
        } ]), e;
    }();
}, function(t, r, e) {
    r.a = function(t) {
        !function(t) {
            t.dataTransform && Object(i.a)("[http] config.dataTransform is deprecated, please use config.transform instead of; and remove data-transform dependency ");
        }(t);
        var r = t.transform;
        r && (u(t.data) && (t.data = Object(o.b)(t.data, r)), u(t.params) && (t.params = Object(o.b)(t.params, r)));
        return t;
    }, r.b = function(t, r) {
        var e = r.transform;
        if (r.transform) return Object(o.a)(t, e);
        return t;
    };
    var o = e(65), a = e(19), i = e(12);
    function u(t) {
        return "object" === n(t) && !Object(a.c)(t);
    }
}, function(t, r, e) {
    var n = e(18);
    e.d(r, "a", function() {
        return n.a;
    }), e.d(r, "b", function() {
        return n.b;
    });
}, function(t, r, e) {
    e.d(r, "b", function() {
        return f;
    }), e.d(r, "a", function() {
        return s;
    });
    var n = e(7), o = /^[A-Z_]{2,}$/, a = /^[A-Z_1-9]{2,}$/, i = /^(_*)(.*?)(_*)$/;
    function u(t) {
        return o.test(t);
    }
    function c(t, r) {
        return function(t) {
            return a.test(t);
        }(t) ? t : t.replace(i, function(t, e, n, o) {
            var a = r(n);
            return "".concat(e).concat(a).concat(o);
        });
    }
    function f(t) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, e = r.separateNumber || !1, n = c(t, function(t) {
            var r = e ? /[A-Z]|[\d]+|h5/g : /[A-Z]|h5/g, n = [], o = t.length, a = 0, i = r.exec(t);
            for (i || n.push(t); i; ) {
                var c = i.index, f = t.substring(a, i.index);
                if (n.push(f), a = c, !(i = r.exec(t))) {
                    var s = t.substring(c, o);
                    n.push(s);
                }
            }
            return n.filter(function(t) {
                return t;
            }).map(function(t, r) {
                return 0 === r || u(t) ? t : t.replace(/^[A-Z]/, function(t) {
                    return t.toLowerCase();
                });
            }).join("_");
        });
        return n;
    }
    function s(t, r) {
        var e = c(t, function(t) {
            return t.split("_").filter(function(t) {
                return t;
            }).map(function(t, r) {
                return 0 === r || u(t) ? t : t.replace(/^[a-z]/, function(t) {
                    return t.toUpperCase();
                });
            }).join("");
        });
        try {} catch (t) {
            Object(n.error)(t);
        }
        return e;
    }
}, function(t, r, e) {
    r.a = function(t) {
        if (t) {
            if (-101 === t.result) return 401;
            if (-101 === t.code) return 401;
        }
        return 200;
    };
} ]);