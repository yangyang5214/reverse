var e, t, r, n = require("../../../@babel/runtime/helpers/classCallCheck"), o = require("../../../@babel/runtime/helpers/createClass"), u = require("../../../@babel/runtime/helpers/typeof");

module.exports = (e = {}, r = function(t, r) {
    if (!e[t]) return require(r);
    if (!e[t].status) {
        var n = e[t].m;
        n._exports = n._tempexports;
        var o = Object.getOwnPropertyDescriptor(n, "exports");
        o && o.configurable && Object.defineProperty(n, "exports", {
            set: function(e) {
                "object" === u(e) && e !== n._exports && (n._exports.__proto__ = e.__proto__, Object.keys(e).forEach(function(t) {
                    n._exports[t] = e[t];
                })), n._tempexports = e;
            },
            get: function() {
                return n._tempexports;
            }
        }), e[t].status = 1, e[t].func(e[t].req, n, n.exports);
    }
    return e[t].m.exports;
}, (t = function(t, r, n) {
    e[t] = {
        status: 0,
        func: r,
        req: n,
        m: {
            exports: {},
            _tempexports: {}
        }
    };
})(1631872123671, function(e, t, r) {
    r.__esModule || Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e("./src/index.js");
    Object.defineProperty(r, "Eaglet", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return n.default;
        }
    });
}, function(e) {
    return r({
        "./src/index.js": 1631872123672
    }[e], e);
}), t(1631872123672, function(e, t, r) {
    var u, i = e("./pbBuilder"), s = (u = i) && u.__esModule ? u.default : u, a = (i = e("./utils")).throwError;
    r.__esModule || Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var c = function() {
        function e(t) {
            var r = t.name, o = t.builder, u = t.emitter;
            n(this, e), r || a("missing tracker name"), o || a("missing builder"), u || a("missing emitter"), 
            this.name = r, this.builder = s(o), this.emitter = u;
        }
        return o(e, [ {
            key: "push",
            value: function(e) {
                var t = this.builder.build(this.name, e);
                this.emitter.push(t);
            }
        }, {
            key: "flush",
            value: function() {
                this.emitter.flush();
            }
        } ]), e;
    }();
    r.default = c;
}, function(e) {
    return r({
        "./pbBuilder": 1631872123673,
        "./utils": 1631872123674
    }[e], e);
}), t(1631872123673, function(e, t, r) {
    var u = e("./utils"), i = u.isObject, s = u.toUpperCase, a = u.capitalize, c = u.throwError, l = function() {
        function e(t) {
            n(this, e), this.builder = t;
        }
        return o(e, [ {
            key: "getMessageBuilder",
            value: function(e) {
                return this.builder[e] || c("no message type found: `".concat(e, "`")), new this.builder[e]();
            }
        }, {
            key: "getProtoSetter",
            value: function(e, t, r, n) {
                var o = "set".concat(a(r)), u = n;
                return u && u.value && (u = u.value), Array.isArray(u) && (o += "List"), t[o] || c("no match setter `".concat(o, "` for `").concat(a(r), "` in proto.").concat(e)), 
                o;
            }
        }, {
            key: "format",
            value: function(e, t) {
                var r = this;
                if (Array.isArray(t)) return t.map(function(t) {
                    return r.format(e, t);
                });
                var n = this.getMessageBuilder(e);
                return Object.keys(t).forEach(function(o) {
                    var u = r.getProtoSetter(e, n, o, t[o]);
                    if (i(t[o])) {
                        var a = t[o], l = a.type, f = a.value;
                        if (l && r.builder[l] || c("no match type `".concat(l, "` in `").concat(o, "` field")), 
                        i(f) || Array.isArray(f)) {
                            var p = r.format(l, f);
                            n[u](p);
                        } else {
                            var d = r.builder[l][s(f)];
                            void 0 === d && c("no match enum `".concat(f, "` in `").concat(l, "` field")), n[u](d);
                        }
                    } else n[u](t[o]);
                }), n;
            }
        }, {
            key: "build",
            value: function() {
                var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Tracker", r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                t || c("missing tracker name");
                var n = this.getMessageBuilder(t);
                return Object.keys(r).forEach(function(o) {
                    var u = r[o];
                    u.type && u.value || c("missing `type` or `value` field");
                    var i = e.getProtoSetter(t, n, o, u.value), s = e.format(u.type, u.value);
                    n[i](s);
                }), n;
            }
        } ]), e;
    }();
    r.__esModule || Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.default = function(e) {
        return new l(e);
    };
}, function(e) {
    return r({
        "./utils": 1631872123674
    }[e], e);
}), t(1631872123674, function(e, t, r) {
    r.__esModule || Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.throwError = function(e) {
        throw new Error("[Eaglet Exception] ".concat(e));
    }, r.__esModule || Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.toUpperCase = function(e) {
        return "string" == typeof e ? e.toUpperCase() : e;
    }, r.__esModule || Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.capitalize = function(e) {
        return "string" == typeof e ? e.replace(/\b\w/g, function(e) {
            return e.toUpperCase();
        }) : e;
    }, r.__esModule || Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.isObject = function(e) {
        return e && "[object Object]" === Object.prototype.toString.call(e);
    };
}, function(e) {
    return r({}[e], e);
}), r(1631872123671));