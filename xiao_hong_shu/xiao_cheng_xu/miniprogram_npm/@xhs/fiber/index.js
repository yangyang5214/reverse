var e, n, r, o = require("../../../@babel/runtime/helpers/objectSpread2"), t = require("../../../@babel/runtime/helpers/objectWithoutProperties"), i = require("../../../@babel/runtime/helpers/typeof"), s = [ "mixins" ], c = [ "mixins" ];

module.exports = (e = {}, r = function(n, r) {
    if (!e[n]) return require(r);
    if (!e[n].status) {
        var o = e[n].m;
        o._exports = o._tempexports;
        var t = Object.getOwnPropertyDescriptor(o, "exports");
        t && t.configurable && Object.defineProperty(o, "exports", {
            set: function(e) {
                "object" === i(e) && e !== o._exports && (o._exports.__proto__ = e.__proto__, Object.keys(e).forEach(function(n) {
                    o._exports[n] = e[n];
                })), o._tempexports = e;
            },
            get: function() {
                return o._tempexports;
            }
        }), e[n].status = 1, e[n].func(e[n].req, o, o.exports);
    }
    return e[n].m.exports;
}, (n = function(n, r, o) {
    e[n] = {
        status: 0,
        func: r,
        req: o,
        m: {
            exports: {},
            _tempexports: {}
        }
    };
})(1631872123675, function(e, n, r) {
    var o = e("./src/index"), t = o.FiberApp, i = o.FiberPage;
    r.__esModule || Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "FiberApp", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return t;
        }
    }), Object.defineProperty(r, "FiberPage", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return i;
        }
    });
}, function(e) {
    return r({
        "./src/index": 1631872123676
    }[e], e);
}), n(1631872123676, function(e, n, r) {
    var i = [ "onLaunch", "onShow", "onHide", "onError", "onPageNotFound" ], u = [], p = [ "onLoad", "onShow", "onReady", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onPageScroll", "onResize", "onTabItemTap", "onError" ], a = [ "data" ], f = App, l = Page, d = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.mixins, r = e.lifecycleKeys, o = e.assignKeys, t = e.app, i = {};
        return n.forEach(function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.childApp, s = e.childAppConfig;
            t = Object.assign(t, s), Object.keys(n).forEach(function(e) {
                r.indexOf(e) > -1 ? (i[e] || (i[e] = []), i[e].push(n[e])) : o.indexOf(e) > -1 ? t[e] = Object.assign(t[e] || {}, n[e]) : t[e] = n[e];
            });
        }), r.forEach(function(e) {
            var n = t[e];
            t[e] = function() {
                var r = this, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                i[e] && i[e].forEach(function(e) {
                    e.call(r, o);
                }), "function" == typeof n && n.call(this, o);
            };
        }), t;
    };
    r.__esModule || Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.FiberApp = function(e) {
        var n = [], r = e.mixins, c = void 0 === r ? [] : r, p = t(e, s);
        c.forEach(function(e) {
            n.push({
                childApp: e
            });
        });
        var a = d({
            app: o({}, p),
            mixins: n,
            lifecycleKeys: i,
            assignKeys: u
        });
        return a.mixins = c, f(a);
    }, r.__esModule || Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.FiberPage = function(e) {
        var n = [], r = e.mixins, i = void 0 === r ? [] : r, s = t(e, c);
        i.forEach(function(e) {
            n.push({
                childApp: e
            });
        });
        var u = d({
            app: o({}, s),
            mixins: n,
            lifecycleKeys: p,
            assignKeys: a
        });
        return u.mixins = i, l(u);
    };
}, function(e) {
    return r({}[e], e);
}), r(1631872123675));