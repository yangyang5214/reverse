var e = require("../../@babel/runtime/helpers/defineProperty"), t = require("../../@babel/runtime/helpers/typeof");

module.exports = function(e) {
    var r = {};
    function n(t) {
        if (r[t]) return r[t].exports;
        var a = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, n), a.l = !0, a.exports;
    }
    return n.m = e, n.c = r, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        });
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, n.t = function(e, r) {
        if (1 & r && (e = n(e)), 8 & r) return e;
        if (4 & r && "object" === t(e) && e && e.__esModule) return e;
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }), 2 & r && "string" != typeof e) for (var i in e) n.d(a, i, function(t) {
            return e[t];
        }.bind(null, i));
        return a;
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return n.d(t, "a", t), t;
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 0);
}([ function(e, t, r) {
    e.exports = r(1);
}, function(e, t, r) {
    t.__esModule = !0, t.ComponentWithComputed = function(e) {
        Array.isArray(e.behaviors) || (e.behaviors = []);
        return e.behaviors.unshift(n.behavior), Component(e);
    }, t.BehaviorWithComputed = function(e) {
        Array.isArray(e.behaviors) || (e.behaviors = []);
        return e.behaviors.unshift(n.behavior), Behavior(e);
    };
    var n = r(2);
    t.behavior = n.behavior;
}, function(r, n, a) {
    n.__esModule = !0, n.behavior = void 0;
    var i = d(a(3)), o = d(a(4)), u = s(a(5)), c = s(a(6));
    function f() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return f = function() {
            return e;
        }, e;
    }
    function s(e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== t(e) && "function" != typeof e) return {
            default: e
        };
        var r = f();
        if (r && r.has(e)) return r.get(e);
        var n = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
            o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i];
        }
        return n.default = e, r && r.set(e, n), n;
    }
    function d(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    var p = (0, i.default)({
        proto: !0
    }), h = 0, l = Behavior({
        lifetimes: {
            attached: function() {
                this.setData({
                    _computedWatchInit: "attached"
                });
            },
            created: function() {
                this.setData({
                    _computedWatchInit: "created"
                });
            }
        },
        definitionFilter: function(r) {
            var n, a = r.computed, i = r.watch, f = [], s = h++;
            (f.push({
                fields: "_computedWatchInit",
                observer: function() {
                    var t = this, r = this.data._computedWatchInit;
                    if ("created" === r) {
                        var n = {
                            computedUpdaters: [],
                            computedRelatedPathValues: {},
                            watchCurVal: {}
                        };
                        this._computedWatchInfo || (this._computedWatchInfo = {}), this._computedWatchInfo[s] = n, 
                        i && Object.keys(i).forEach(function(e) {
                            var r = u.parseMultiDataPaths(e).map(function(e) {
                                var r = e.path, n = e.options, a = u.getDataOnPath(t.data, r);
                                return n.deepCmp ? p(a) : a;
                            });
                            n.watchCurVal[e] = r;
                        });
                    } else if ("attached" === r) {
                        var o = this._computedWatchInfo[s];
                        a && Object.keys(a).forEach(function(r) {
                            var n = a[r], i = [], f = n(c.create(t.data, i)), s = i.map(function(e) {
                                var r = e.path;
                                return {
                                    path: r,
                                    value: u.getDataOnPath(t.data, r)
                                };
                            });
                            t.setData(e({}, r, c.unwrap(f))), o.computedRelatedPathValues[r] = s;
                            o.computedUpdaters.push(function() {
                                for (var a = o.computedRelatedPathValues[r], i = !1, f = 0; f < a.length; f++) {
                                    var s = a[f], d = s.path;
                                    if (s.value !== u.getDataOnPath(t.data, d)) {
                                        i = !0;
                                        break;
                                    }
                                }
                                if (!i) return !1;
                                var p = [], h = n(c.create(t.data, p));
                                return t.setData(e({}, r, c.unwrap(h))), o.computedRelatedPathValues[r] = p, !0;
                            });
                        });
                    }
                }
            }), a && f.push({
                fields: "**",
                observer: function() {
                    var e = this;
                    if (this._computedWatchInfo) {
                        var t, r = this._computedWatchInfo[s];
                        if (r) do {
                            t = r.computedUpdaters.some(function(t) {
                                return t.call(e);
                            });
                        } while (t);
                    }
                }
            }), i && Object.keys(i).forEach(function(e) {
                var t = u.parseMultiDataPaths(e);
                f.push({
                    fields: e,
                    observer: function() {
                        var r = this;
                        if (this._computedWatchInfo) {
                            var n = this._computedWatchInfo[s];
                            if (n) {
                                var a = n.watchCurVal[e], c = t.map(function(e) {
                                    var t = e.path, n = e.options;
                                    return {
                                        val: u.getDataOnPath(r.data, t),
                                        options: n
                                    };
                                }), f = c.map(function(e) {
                                    var t = e.val;
                                    return e.options.deepCmp ? p(t) : t;
                                });
                                n.watchCurVal[e] = f;
                                for (var d = !1, h = 0; h < f.length; h++) {
                                    if (t[h].options.deepCmp ? !(0, o.default)(a[h], f[h]) : a[h] !== f[h]) {
                                        d = !0;
                                        break;
                                    }
                                }
                                d && i[e].apply(this, c.map(function(e) {
                                    return e.val;
                                }));
                            }
                        }
                    }
                });
            }), "object" !== t(r.observers) && (r.observers = {}), Array.isArray(r.observers)) ? (n = r.observers).push.apply(n, f) : f.forEach(function(e) {
                var t = r.observers[e.fields];
                r.observers[e.fields] = t ? function() {
                    e.observer.call(this), t.call(this);
                } : e.observer;
            });
        }
    });
    n.behavior = l;
}, function(e, t) {
    e.exports = require("rfdc");
}, function(e, t) {
    e.exports = require("fast-deep-equal");
}, function(e, r, n) {
    r.__esModule = !0, r.parseMultiDataPaths = function(e) {
        var t = {
            length: e.length,
            index: 0
        }, r = function(e, t) {
            for (;a.test(e[t.index]); ) t.index++;
            var r = [ c(e, t) ], n = !1;
            for (;t.index < t.length; ) {
                var o = e[t.index];
                a.test(o) ? t.index++ : "," === o ? (n = !0, t.index++) : n ? (n = !1, r.push(c(e, t))) : i(e, t.index);
            }
            return r;
        }(e, t);
        return function(e, t) {
            t.index < t.length && i(e, t.index);
        }(e, t), r;
    }, r.getDataOnPath = void 0;
    var a = /^\s/, i = function(e, t) {
        throw new Error('Parsing data path "' + e + '" failed at char "' + e[t] + '" (index ' + t + ")");
    }, o = function(e, t) {
        for (var r = t.index; t.index < t.length; ) {
            var n = e[t.index];
            if (!/^[0-9]/.test(n)) break;
            t.index++;
        }
        return r === t.index && i(e, t.index), parseInt(e.slice(r, t.index), 10);
    }, u = function(e, t) {
        var r = t.index, n = e[r];
        if (/^[_a-zA-Z$]/.test(n)) for (t.index++; t.index < t.length; ) {
            var a = e[t.index];
            if (!/^[_a-zA-Z0-9$]/.test(a)) break;
            t.index++;
        } else i(e, t.index);
        return e.slice(r, t.index);
    }, c = function(e, t) {
        for (var r = [ u(e, t) ], n = {
            deepCmp: !1
        }; t.index < t.length; ) {
            var a = e[t.index];
            if ("[" === a) {
                t.index++, r.push(o(e, t)), "]" !== e[t.index] && i(e, t.index), t.index++;
            } else {
                if ("." !== a) break;
                if (t.index++, "*" === e[t.index]) {
                    if (t.index++, "*" === e[t.index]) {
                        t.index++, n.deepCmp = !0;
                        break;
                    }
                    i(e, t.index);
                }
                r.push(u(e, t));
            }
        }
        return {
            path: r,
            options: n
        };
    };
    r.getDataOnPath = function(e, r) {
        var n = e;
        return r.forEach(function(e) {
            n = "object" !== t(n) || null === n ? void 0 : n[e];
        }), n;
    };
}, function(e, r, n) {
    r.__esModule = !0, r.create = function(e, r) {
        return function e(r, n, a) {
            return "object" !== t(r) || null === r ? r : new Proxy(r, {
                get: function(t, i) {
                    if ("__rawObject__" === i) return r;
                    var o = a.concat(i), u = r[i];
                    return n.push({
                        path: o,
                        value: u
                    }), e(u, n, o);
                }
            });
        }(e, r, []);
    }, r.unwrap = function(e) {
        if ("object" !== t(e) || null === e || "object" !== t(e.__rawObject__)) return e;
        return e.__rawObject__;
    };
} ]);