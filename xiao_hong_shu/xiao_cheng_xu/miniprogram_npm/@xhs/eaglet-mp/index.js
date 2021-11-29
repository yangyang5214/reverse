var e, t, n, r, i = require("../../../@babel/runtime/helpers/slicedToArray"), a = require("../../../@babel/runtime/helpers/objectWithoutProperties"), o = require("../../../@babel/runtime/helpers/classCallCheck"), u = require("../../../@babel/runtime/helpers/createClass"), s = require("../../../@babel/runtime/helpers/objectSpread2"), c = require("../../../@babel/runtime/helpers/typeof"), l = [ "mpIsAppUser", "mpIsNewMpUser", "exp", "expIdsTrace", "wxUnionid" ], f = [ "flags" ], p = [ "flags" ];

module.exports = (e = {}, n = function(t, n) {
    if (!e[t]) return require(n);
    if (!e[t].status) {
        var r = e[t].m;
        r._exports = r._tempexports;
        var i = Object.getOwnPropertyDescriptor(r, "exports");
        i && i.configurable && Object.defineProperty(r, "exports", {
            set: function(e) {
                "object" === c(e) && e !== r._exports && (r._exports.__proto__ = e.__proto__, Object.keys(e).forEach(function(t) {
                    r._exports[t] = e[t];
                })), r._tempexports = e;
            },
            get: function() {
                return r._tempexports;
            }
        }), e[t].status = 1, e[t].func(e[t].req, r, r.exports);
    }
    return e[t].m.exports;
}, r = function(e) {
    return e && e.__esModule ? e.default : e;
}, (t = function(t, n, r) {
    e[t] = {
        status: 0,
        func: n,
        req: r,
        m: {
            exports: {},
            _tempexports: {}
        }
    };
})(1631872123648, function(e, t, n) {
    var i, a = e("./src/utils/mpApi"), o = r(a), u = (a = e("./src/eaglet/app"), r(a)), c = (a = e("./src/eaglet/page"), 
    r(a)), l = (a = e("./src/eaglet/api"), r(a));
    i = s(s({}, l), {}, {
        page: s({}, c),
        app: s({}, u)
    }), o.setApi("$eaglet", i), n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.defineProperty(n, "eagletApp", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return u;
        }
    }), Object.defineProperty(n, "eagletPage", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return c;
        }
    });
}, function(e) {
    return n({
        "./src/utils/mpApi": 1631872123649,
        "./src/eaglet/app": 1631872123650,
        "./src/eaglet/page": 1631872123667,
        "./src/eaglet/api": 1631872123655
    }[e], e);
}), t(1631872123649, function(e, t, n) {
    n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = n.isWeixin = function() {
        return "undefined" != typeof wx;
    };
    n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = n.isQQ = function() {
        return "undefined" != typeof qq;
    };
    n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var a = n.isBaidu = function() {
        return "undefined" != typeof swan;
    };
    n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var s = n.isToutiao = function() {
        return "undefined" != typeof tt;
    };
    n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var c = n.isAlipay = function() {
        return "undefined" != typeof my;
    }, l = s() ? tt : i() ? qq : a() ? swan : c() ? my : r() && !i() ? wx : null, f = function() {
        function e() {
            var t = this;
            if (o(this, e), this.hasMpApi()) {
                var n = function(e) {
                    ({}).hasOwnProperty.call(l, e) && (t[e] = function() {
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return l[e].apply(this, n);
                    });
                };
                for (var r in l) n(r);
            }
        }
        return u(e, [ {
            key: "setApi",
            value: function(e, t) {
                l[e] = t;
            }
        }, {
            key: "hasMpApi",
            value: function() {
                return !!l;
            }
        } ]), e;
    }();
    n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = new f();
}, function(e) {
    return n({}[e], e);
}), t(1631872123650, function(e, t, n) {
    var i = e("../dataBase/index"), a = r(i), o = (i = e("../utils/mpApi"), r(i)), u = i.isWeixin, s = i.isQQ, c = i.isBaidu, l = i.isToutiao, f = i.isAlipay, p = (i = e("../utils/user-info"), 
    r(i)), d = (i = e("../utils/logger"), r(i)), g = (i = e("./api"), r(i)), h = null, v = function(e) {
        return e.toLowerCase().indexOf("ios") > -1 ? "iOS" : "Android";
    }, m = function() {
        if (s()) return "qqmpT";
        if (c()) return "bdmpT";
        if (l()) return "ttmpT";
        if (f()) return "apmpT";
        if (u()) return "wxmpT";
        throw new Error("unknown platform name");
    }, y = {
        setConfig: function(e) {
            var t = e.$eagletAppMeta, n = e.$eagletGetUserInfo;
            this.$eagletAppMeta = t, this.$eagletGetUserInfo = n;
        },
        initApp: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.scene, n = this.$eagletAppMeta, r = this.$eagletGetUserInfo, i = n.artifactName, u = n.artifactVersion, s = o.getSystemInfoSync(), c = s.platform, l = s.model, f = s.system, g = s.screenHeight, h = s.screenWidth, y = s.brand, _ = "devtools" === c;
            d.info("当前是否是开发环境： ".concat(_)), p.init(r), a.setApp({
                appVersion: "xhs-mp",
                trackerVersion: "0.1.0",
                nameTracker: {
                    type: "NameTracker",
                    value: m()
                },
                platform: {
                    type: "Platform",
                    value: v(f)
                },
                artifactName: i,
                artifactVersion: u(),
                mpScene: "".concat(t)
            }), a.setMobile({
                osVersion: f,
                dvceModel: l,
                dvceScreenWidth: h,
                dvceScreenHeight: g,
                dvceManufacture: y
            }), o.getNetworkType({
                success: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.networkType;
                    if (t) {
                        var n = "offline", r = {
                            wifi: "wifi",
                            "2g": "mobile",
                            "3g": "mobile",
                            "4g": "mobile",
                            "5g": "mobile",
                            unknown: "unknow"
                        };
                        r[t] && (n = r[t]), a.setNetWork({
                            networkType: {
                                type: "NetworkType",
                                value: n
                            }
                        });
                    }
                }
            });
        },
        startFlushInterval: function() {
            h && clearInterval(h), h = setInterval(function() {
                g.flush();
            }, 7e3);
        },
        stopFlushInterval: function() {
            g.flush(), h && (clearInterval(h), h = null);
        },
        onLaunch: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.initApp(e);
        },
        onShow: function() {
            this.startFlushInterval();
        },
        onHide: function() {
            this.stopFlushInterval();
        }
    };
    n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = y;
}, function(e) {
    return n({
        "../dataBase/index": 1631872123651,
        "../utils/mpApi": 1631872123649,
        "../utils/user-info": 1631872123654,
        "../utils/logger": 1631872123652,
        "./api": 1631872123655
    }[e], e);
}), t(1631872123651, function(e, t, n) {
    var i = e("../utils/logger"), c = r(i), f = (i = e("../libs/md5"), r(i)), p = function() {
        function e() {
            o(this, e), this.app = {
                type: "App",
                value: {}
            }, this.mob = {
                type: "Mobile",
                value: {}
            }, this.user = {
                type: "User",
                value: {}
            }, this.page = {
                type: "Page",
                value: {}
            }, this.network = {
                type: "Network",
                value: {}
            }, this.browser = {
                type: "Browser",
                value: {}
            }, this.wxUnionid = "";
        }
        return u(e, [ {
            key: "setApp",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e;
                this.app = {
                    type: "App",
                    value: t
                };
            }
        }, {
            key: "setUser",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.mpIsAppUser, n = e.mpIsNewMpUser, r = e.exp, i = void 0 === r ? [] : r, o = e.expIdsTrace, u = void 0 === o ? "" : o, c = e.wxUnionid, p = void 0 === c ? "" : c, d = a(e, l);
                this.user = {
                    type: "User",
                    value: s({
                        exp: i
                    }, d)
                }, p && (this.wxUnionid = p), u && (this.user.value.expV4 = u), this.user.value.userId && void 0 !== t && (this.user.value.mpIsAppUser = t), 
                void 0 !== n && (this.user.value.mpIsNewMpUser = n), this.user.value.userId && (this.user.value.hashUserId = f(this.user.value.userId));
            }
        }, {
            key: "setMobile",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.mob = {
                    type: "Mobile",
                    value: e
                };
            }
        }, {
            key: "setNetWork",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.network = {
                    type: "Network",
                    value: e
                };
            }
        }, {
            key: "setPage",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                try {
                    var t = e.pageInstance, n = e.instanceId;
                    this.page = {
                        type: "Page",
                        value: {
                            pageInstance: t,
                            instanceId: n
                        }
                    };
                } catch (e) {
                    c.error(e);
                }
            }
        }, {
            key: "setBrowser",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.browser = {
                    type: "Browser",
                    value: s(s({}, e), {}, {
                        domainUserId: this.wxUnionid
                    })
                };
            }
        }, {
            key: "getAllData",
            value: function() {
                return {
                    app: this.app,
                    mob: this.mob,
                    user: this.user,
                    page: this.page,
                    network: this.network,
                    browser: this.browser
                };
            }
        } ]), e;
    }();
    n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = new p();
}, function(e) {
    return n({
        "../utils/logger": 1631872123652,
        "../libs/md5": 1631872123653
    }[e], e);
}), t(1631872123652, function(e, t, n) {
    n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = {
        message: function(e) {
            e();
        },
        error: function(e) {
            this.message(function() {
                console.error(e);
            });
        },
        warn: function(e) {
            this.message(function() {
                console.warn(e);
            });
        },
        info: function(e) {
            this.message(function() {
                console.info(e);
            });
        },
        log: function(e) {
            this.message(function() {
                console.log(e);
            });
        }
    };
}, function(e) {
    return n({}[e], e);
}), t(1631872123653, function(e, t, n) {
    function r(e, t) {
        var n = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
    }
    function i(e, t, n, i, a, o) {
        return r((u = r(r(t, e), r(i, o))) << (s = a) | u >>> 32 - s, n);
        var u, s;
    }
    function a(e, t, n, r, a, o, u) {
        return i(t & n | ~t & r, e, t, a, o, u);
    }
    function o(e, t, n, r, a, o, u) {
        return i(t & r | n & ~r, e, t, a, o, u);
    }
    function u(e, t, n, r, a, o, u) {
        return i(t ^ n ^ r, e, t, a, o, u);
    }
    function s(e, t, n, r, a, o, u) {
        return i(n ^ (t | ~r), e, t, a, o, u);
    }
    function c(e, t) {
        var n, i, c, l, f;
        e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
        var p = 1732584193, d = -271733879, g = -1732584194, h = 271733878;
        for (n = 0; n < e.length; n += 16) i = p, c = d, l = g, f = h, p = a(p, d, g, h, e[n], 7, -680876936), 
        h = a(h, p, d, g, e[n + 1], 12, -389564586), g = a(g, h, p, d, e[n + 2], 17, 606105819), 
        d = a(d, g, h, p, e[n + 3], 22, -1044525330), p = a(p, d, g, h, e[n + 4], 7, -176418897), 
        h = a(h, p, d, g, e[n + 5], 12, 1200080426), g = a(g, h, p, d, e[n + 6], 17, -1473231341), 
        d = a(d, g, h, p, e[n + 7], 22, -45705983), p = a(p, d, g, h, e[n + 8], 7, 1770035416), 
        h = a(h, p, d, g, e[n + 9], 12, -1958414417), g = a(g, h, p, d, e[n + 10], 17, -42063), 
        d = a(d, g, h, p, e[n + 11], 22, -1990404162), p = a(p, d, g, h, e[n + 12], 7, 1804603682), 
        h = a(h, p, d, g, e[n + 13], 12, -40341101), g = a(g, h, p, d, e[n + 14], 17, -1502002290), 
        p = o(p, d = a(d, g, h, p, e[n + 15], 22, 1236535329), g, h, e[n + 1], 5, -165796510), 
        h = o(h, p, d, g, e[n + 6], 9, -1069501632), g = o(g, h, p, d, e[n + 11], 14, 643717713), 
        d = o(d, g, h, p, e[n], 20, -373897302), p = o(p, d, g, h, e[n + 5], 5, -701558691), 
        h = o(h, p, d, g, e[n + 10], 9, 38016083), g = o(g, h, p, d, e[n + 15], 14, -660478335), 
        d = o(d, g, h, p, e[n + 4], 20, -405537848), p = o(p, d, g, h, e[n + 9], 5, 568446438), 
        h = o(h, p, d, g, e[n + 14], 9, -1019803690), g = o(g, h, p, d, e[n + 3], 14, -187363961), 
        d = o(d, g, h, p, e[n + 8], 20, 1163531501), p = o(p, d, g, h, e[n + 13], 5, -1444681467), 
        h = o(h, p, d, g, e[n + 2], 9, -51403784), g = o(g, h, p, d, e[n + 7], 14, 1735328473), 
        p = u(p, d = o(d, g, h, p, e[n + 12], 20, -1926607734), g, h, e[n + 5], 4, -378558), 
        h = u(h, p, d, g, e[n + 8], 11, -2022574463), g = u(g, h, p, d, e[n + 11], 16, 1839030562), 
        d = u(d, g, h, p, e[n + 14], 23, -35309556), p = u(p, d, g, h, e[n + 1], 4, -1530992060), 
        h = u(h, p, d, g, e[n + 4], 11, 1272893353), g = u(g, h, p, d, e[n + 7], 16, -155497632), 
        d = u(d, g, h, p, e[n + 10], 23, -1094730640), p = u(p, d, g, h, e[n + 13], 4, 681279174), 
        h = u(h, p, d, g, e[n], 11, -358537222), g = u(g, h, p, d, e[n + 3], 16, -722521979), 
        d = u(d, g, h, p, e[n + 6], 23, 76029189), p = u(p, d, g, h, e[n + 9], 4, -640364487), 
        h = u(h, p, d, g, e[n + 12], 11, -421815835), g = u(g, h, p, d, e[n + 15], 16, 530742520), 
        p = s(p, d = u(d, g, h, p, e[n + 2], 23, -995338651), g, h, e[n], 6, -198630844), 
        h = s(h, p, d, g, e[n + 7], 10, 1126891415), g = s(g, h, p, d, e[n + 14], 15, -1416354905), 
        d = s(d, g, h, p, e[n + 5], 21, -57434055), p = s(p, d, g, h, e[n + 12], 6, 1700485571), 
        h = s(h, p, d, g, e[n + 3], 10, -1894986606), g = s(g, h, p, d, e[n + 10], 15, -1051523), 
        d = s(d, g, h, p, e[n + 1], 21, -2054922799), p = s(p, d, g, h, e[n + 8], 6, 1873313359), 
        h = s(h, p, d, g, e[n + 15], 10, -30611744), g = s(g, h, p, d, e[n + 6], 15, -1560198380), 
        d = s(d, g, h, p, e[n + 13], 21, 1309151649), p = s(p, d, g, h, e[n + 4], 6, -145523070), 
        h = s(h, p, d, g, e[n + 11], 10, -1120210379), g = s(g, h, p, d, e[n + 2], 15, 718787259), 
        d = s(d, g, h, p, e[n + 9], 21, -343485551), p = r(p, i), d = r(d, c), g = r(g, l), 
        h = r(h, f);
        return [ p, d, g, h ];
    }
    function l(e) {
        var t, n = "", r = 32 * e.length;
        for (t = 0; t < r; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
        return n;
    }
    function f(e) {
        var t, n = [];
        for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
        var r = 8 * e.length;
        for (t = 0; t < r; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
        return n;
    }
    function p(e) {
        var t, n, r = "";
        for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), r += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
        return r;
    }
    function d(e) {
        return unescape(encodeURIComponent(e));
    }
    function g(e) {
        return function(e) {
            return l(c(f(e), 8 * e.length));
        }(d(e));
    }
    function h(e, t) {
        return function(e, t) {
            var n, r, i = f(e), a = [], o = [];
            for (a[15] = o[15] = void 0, i.length > 16 && (i = c(i, 8 * e.length)), n = 0; n < 16; n += 1) a[n] = 909522486 ^ i[n], 
            o[n] = 1549556828 ^ i[n];
            return r = c(a.concat(f(t)), 512 + 8 * t.length), l(c(o.concat(r), 640));
        }(d(e), d(t));
    }
    n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = function(e, t, n) {
        return t ? n ? h(t, e) : p(h(t, e)) : n ? g(e) : p(g(e));
    };
}, function(e) {
    return n({}[e], e);
}), t(1631872123654, function(e, t, n) {
    var i = e("./logger"), s = r(i), c = (i = e("../dataBase/index"), r(i)), l = function() {
        function e() {
            o(this, e), this.gotDataFromApi = !1, this.queues = [], this.cacheData = {};
        }
        return u(e, [ {
            key: "init",
            value: function(e) {
                var t = this;
                return new Promise(function(n) {
                    if (t.gotDataFromApi) n(t.cacheData); else {
                        var r = function() {
                            t.gotDataFromApi = !0, n(t.cacheData), t.clearQueue();
                        };
                        e ? e().then(function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            t.cacheData = e, e.flags;
                            var n = a(e, f);
                            c.setUser(n), r();
                        }).catch(function(e) {
                            s.error(e), r();
                        }) : r();
                    }
                });
            }
        }, {
            key: "resetUserInfo",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = (e.flags, 
                a(e, p));
                (e.wxOpenid || e.userId) && (c.setUser(t), this.cacheData = e);
            }
        }, {
            key: "getUserInfo",
            value: function() {
                var e = this;
                return new Promise(function(t) {
                    e.gotDataFromApi ? t(e.cacheData) : e.queues.push(t);
                });
            }
        }, {
            key: "clearQueue",
            value: function() {
                var e = this;
                this.queues && this.queues.length > 0 && (this.queues.forEach(function(t) {
                    t && t(e.cacheData);
                }), this.queues = []);
            }
        } ]), e;
    }();
    n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = new l();
}, function(e) {
    return n({
        "./logger": 1631872123652,
        "../dataBase/index": 1631872123651
    }[e], e);
}), t(1631872123655, function(e, t, n) {
    var i, a = e("../utils/logger"), o = r(a), u = (a = e("../utils/user-info"), r(a)), c = (a = e("../utils/create-tracker"), 
    r(a)), l = (a = e("../libs/object-merge"), r(a)), f = (a = e("../dataBase/index"), 
    r(a)), p = (a = e("../data/event"), r(a)), d = (a = e("./google-protobuf"), r(a)), g = (a = e("../const")).tracker, h = {}, v = {};
    n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = {
        init: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.tracker, n = e.apmTracker, r = [ t ];
            t || n || o.error("no tracker found"), n && r.push(n), i = Promise.all(r.map(function(e) {
                return "function" == typeof e ? t() : e;
            })).then(function(e) {
                return e.forEach(function(e) {
                    e.jspb && d.set(e.jspb), h[e.NAME] = c(e);
                }), e;
            });
        },
        resetABInfo: function(e) {
            u.resetUserInfo(e);
        },
        setABInfo: function(e) {
            u.init(e);
        },
        getABInfo: function() {
            return new Promise(function(e) {
                u.getUserInfo().then(function(t) {
                    var n = t.flags;
                    e(void 0 === n ? {} : n);
                });
            });
        },
        getTrackerName: function(e) {
            return i.then(function(t) {
                return e || t[0].tracker.NAME;
            });
        },
        pushData: function(e, t) {
            u.getUserInfo().then(function() {
                var n = f.getAllData().user, r = l(e, {
                    user: s({}, n)
                });
                h[t].push(r);
            });
        },
        push: function() {
            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Tracker", r = p(t), i = f.getAllData(), a = l(i, v[n], r);
            return this.getTrackerName(n).then(function(t) {
                return h[t] ? e.pushData(a, t) : o.error("argument `trackerName` is missing"), t;
            });
        },
        flush: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Tracker";
            return e ? this.push(e, t).then(function(e) {
                u.getUserInfo().then(function() {
                    h[e].flush();
                });
            }) : this.getTrackerName(t).then(function(e) {
                u.getUserInfo().then(function() {
                    h[e].flush();
                });
            });
        },
        config: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Tracker";
            return this.getTrackerName(n).then(function(n) {
                var r = JSON.parse(JSON.stringify(t));
                n !== g.NAME && "page" === e && delete r.value.pageInstance, v[n] || (v[n] = {}), 
                v[n][e] || (v[n][e] = {}), v[n][e] = Object.assign(v[n][e], r);
            });
        },
        extend: function(e, t) {
            var n = this;
            Object.keys(e).forEach(function(r) {
                n.config(r, e[r], t);
            });
        }
    };
}, function(e) {
    return n({
        "../utils/logger": 1631872123652,
        "../utils/user-info": 1631872123654,
        "../utils/create-tracker": 1631872123656,
        "../libs/object-merge": 1631872123664,
        "../dataBase/index": 1631872123651,
        "../data/event": 1631872123665,
        "./google-protobuf": 1631872123662,
        "../const": 1631872123663
    }[e], e);
}), t(1631872123656, function(e, t, n) {
    var r, i = (r = e("../libs/@xhs/eaglet/index.js")).Eaglet, a = (r = e("../emitter/index.js")).DefaultEmitter, o = r.ApmEmitter, u = (r = e("../const")).tracker, s = r.apmTracker;
    n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = function(e) {
        var t = e.NAME === u.NAME, n = {
            endpoint: t ? u.ENDPOINT : s.ENDPOINT,
            versionHash: e.PROTOBUF_HASH
        }, r = new i({
            name: e.NAME,
            builder: e.builder,
            emitter: t ? new a(n) : new o(n)
        });
        return {
            push: function(t) {
                t.app.value.trackerVersion = e.VERSION, r.push(t);
            },
            flush: function() {
                r.flush();
            }
        };
    };
}, function(e) {
    return n({
        "../libs/@xhs/eaglet/index.js": 1631872123657,
        "../emitter/index.js": 1631872123661,
        "../const": 1631872123663
    }[e], e);
}), t(1631872123657, function(e, t, n) {
    n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = e("./src/index.js");
    Object.defineProperty(n, "Eaglet", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return r.default;
        }
    });
}, function(e) {
    return n({
        "./src/index.js": 1631872123658
    }[e], e);
}), t(1631872123658, function(e, t, n) {
    var i = e("./pbBuilder"), a = r(i), s = (i = e("./utils")).throwError;
    n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var c = function() {
        function e(t) {
            var n = t.name, r = t.builder, i = t.emitter;
            o(this, e), n || s("missing tracker name"), r || s("missing builder"), i || s("missing emitter"), 
            this.name = n, this.builder = a(r), this.emitter = i;
        }
        return u(e, [ {
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
    n.default = c;
}, function(e) {
    return n({
        "./pbBuilder": 1631872123659,
        "./utils": 1631872123660
    }[e], e);
}), t(1631872123659, function(e, t, n) {
    var r = e("./utils"), i = r.isObject, a = r.toUpperCase, s = r.capitalize, c = r.throwError, l = function() {
        function e(t) {
            o(this, e), this.builder = t;
        }
        return u(e, [ {
            key: "getMessageBuilder",
            value: function(e) {
                return this.builder[e] || c("no message type found: `".concat(e, "`")), new this.builder[e]();
            }
        }, {
            key: "getProtoSetter",
            value: function(e, t, n, r) {
                var i = "set".concat(s(n)), a = r;
                return a && a.value && (a = a.value), Array.isArray(a) && (i += "List"), t[i] || c("no match setter `".concat(i, "` for `").concat(s(n), "` in proto.").concat(e)), 
                i;
            }
        }, {
            key: "format",
            value: function(e, t) {
                var n = this;
                if (Array.isArray(t)) return t.map(function(t) {
                    return n.format(e, t);
                });
                var r = this.getMessageBuilder(e);
                return Object.keys(t).forEach(function(o) {
                    var u = n.getProtoSetter(e, r, o, t[o]);
                    if (i(t[o])) {
                        var s = t[o], l = s.type, f = s.value;
                        if (l && n.builder[l] || c("no match type `".concat(l, "` in `").concat(o, "` field")), 
                        i(f) || Array.isArray(f)) {
                            var p = n.format(l, f);
                            r[u](p);
                        } else {
                            var d = n.builder[l][a(f)];
                            void 0 === d && c("no match enum `".concat(f, "` in `").concat(l, "` field")), r[u](d);
                        }
                    } else r[u](t[o]);
                }), r;
            }
        }, {
            key: "build",
            value: function() {
                var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Tracker", n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                t || c("missing tracker name");
                var r = this.getMessageBuilder(t);
                return Object.keys(n).forEach(function(i) {
                    var a = n[i];
                    a.type && a.value || c("missing `type` or `value` field");
                    var o = e.getProtoSetter(t, r, i, a.value), u = e.format(a.type, a.value);
                    r[o](u);
                }), r;
            }
        } ]), e;
    }();
    n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = function(e) {
        return new l(e);
    };
}, function(e) {
    return n({
        "./utils": 1631872123660
    }[e], e);
}), t(1631872123660, function(e, t, n) {
    n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.throwError = function(e) {
        throw new Error("[Eaglet Exception] ".concat(e));
    }, n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.toUpperCase = function(e) {
        return "string" == typeof e ? e.toUpperCase() : e;
    }, n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.capitalize = function(e) {
        return "string" == typeof e ? e.replace(/\b\w/g, function(e) {
            return e.toUpperCase();
        }) : e;
    }, n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.isObject = function(e) {
        return e && "[object Object]" === Object.prototype.toString.call(e);
    };
}, function(e) {
    return n({}[e], e);
}), t(1631872123661, function(e, t, n) {
    var i = e("../utils/mpApi"), a = r(i), s = (i = e("../utils/logger"), r(i)), c = (i = e("../eaglet/google-protobuf"), 
    r(i));
    n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var l = function() {
        function e(t) {
            var n = t.versionHash;
            o(this, e), this.endpoint = {
                production: "https://t2.xiaohongshu.com/api/v5/collect",
                development: "https://t2-test.xiaohongshu.com/api/v5/collect"
            }, this.versionHash = n, this.buffers = [], this.isDevEnv = !1;
        }
        return u(e, [ {
            key: "push",
            value: function(e) {
                this.buffers.push(e), this.buffers.length >= 1 && this.flush();
            }
        }, {
            key: "flush",
            value: function() {
                var e = this, t = this.isDevEnv, n = Array.prototype.slice.call(this.buffers);
                if (n && 0 !== n.length) {
                    var r = "";
                    this.buffers = [], r = t ? "development" : "production";
                    var i = new (c.get().BinaryWriter)();
                    n.forEach(function(n) {
                        var r = n.serializeBinary();
                        t && s.info(n.toObject()), i.encoder_.writeSignedVarint64(r.byteLength + 4), i.encoder_.writeInt32(e.versionHash), 
                        i.encoder_.writeBytes(r);
                    });
                    var o = i.getResultBase64String();
                    return new Promise(function(i, u) {
                        a.request({
                            method: "POST",
                            url: e.endpoint[r],
                            header: {
                                "content-type": "application/json"
                            },
                            data: JSON.stringify({
                                data: o
                            }),
                            success: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.data, n = t.success;
                                if (!n) return s.error(t), void u(t);
                                i();
                            },
                            fail: function() {
                                t && s.error("trackMethod: ".concat(r, ", trackItem:"), n), u("服务器错误");
                            }
                        });
                    });
                }
            }
        } ]), e;
    }();
    n.DefaultEmitter = l, n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.ApmEmitter = function e() {
        o(this, e);
    };
}, function(e) {
    return n({
        "../utils/mpApi": 1631872123649,
        "../utils/logger": 1631872123652,
        "../eaglet/google-protobuf": 1631872123662
    }[e], e);
}), t(1631872123662, function(e, t, n) {
    var r = function() {
        function e() {
            o(this, e), this.jspb = null;
        }
        return u(e, [ {
            key: "set",
            value: function(e) {
                this.jspb = e;
            }
        }, {
            key: "get",
            value: function() {
                return this.jspb;
            }
        } ]), e;
    }();
    n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = new r();
}, function(e) {
    return n({}[e], e);
}), t(1631872123663, function(e, t, n) {
    n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.tracker = {
        NAME: "Tracker",
        ENDPOINT: {
            production: "https://t2.xiaohongshu.com/api/v2/collect",
            development: "https://t2-test.xiaohongshu.com/api/v2/collect"
        }
    }, n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.apmTracker = {
        NAME: "ApmTracker",
        ENDPOINT: {
            production: "https://apm-track.xiaohongshu.com/api/collect",
            development: "https://apm-track-test.xiaohongshu.com/api/collect"
        }
    };
}, function(e) {
    return n({}[e], e);
}), t(1631872123664, function(e, t, n) {
    n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = function e() {
        var t = {};
        function n(n, r) {
            "[object Object]" === Object.prototype.toString.call(t[r]) ? t[r] = e(t[r], n) : void 0 === t[r] ? t[r] = n : Array.isArray(n) ? n.length > 0 && (t[r] = n) : "" !== n && null != n && (t[r] = n);
        }
        for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
        return i.forEach(function(e) {
            if (void 0 !== e) {
                if ("object" !== c(e) || Array.isArray(e)) throw new Error("[Http Exception] config must be a plain object");
                for (var t in e) e.hasOwnProperty(t) && n(e[t], t);
            }
        }), t;
    };
}, function(e) {
    return n({}[e], e);
}), t(1631872123665, function(e, t, n) {
    var i = e("../libs/uuid-v4"), a = r(i);
    n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.event && e.event.value ? (e.event.value.eventId = a(), e.event.value.dvceMicroTs = 1e3 * Date.now()) : e.event = {
            type: "Event",
            value: {
                eventId: a(),
                dvceMicroTs: 1e3 * Date.now()
            }
        }, e;
    };
}, function(e) {
    return n({
        "../libs/uuid-v4": 1631872123666
    }[e], e);
}), t(1631872123666, function(e, t, n) {
    !function(e) {
        for (var r = [], i = 0; i <= 15; i++) r[i] = i.toString(16);
        var a = function() {
            for (var e = "", t = 1; t <= 36; t++) e += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? 4 : 20 === t ? r[4 * Math.random() | 8] : r[16 * Math.random() | 0];
            return e;
        };
        void 0 !== n ? t.exports = a : e.UUID = a;
    }(this);
}, function(e) {
    return n({}[e], e);
}), t(1631872123667, function(e, t, n) {
    var i = e("./api"), a = r(i), o = (i = e("../dataBase/index"), r(i)), u = (i = e("../collector/impression"), 
    r(i)), s = (i = e("../utils/debounce"), r(i)), c = (i = e("../utils/logger"), r(i)), l = s(u.check, 500), f = function() {
        var e = getCurrentPages();
        if (e && e[0]) {
            var t = e[e.length - 1], n = t.options, r = void 0 === n ? {} : n, i = t.route, a = t.__route__, o = i || a, u = [];
            Object.keys(r).forEach(function(e) {
                u.push("".concat(e, "=").concat(r[e]));
            });
            var s = u.length > 0 ? "?".concat(u.join("&")) : "";
            return "".concat(o).concat(s);
        }
        return "";
    }, p = {
        $eagletCurrentPageData: {},
        $eagletCurrentPageDataMap: {},
        getEagletCurrentPageDataItem: function() {
            var e = f(), t = this.$eagletCurrentPageDataMap;
            return t[e] ? t[e] : null;
        },
        isPageNeedImpression: function() {
            return this.$eagletPageMeta && this.$eagletPageMeta.needImpression;
        },
        debounceImpression: function() {
            this.isPageNeedImpression() && this.$eagletPageMeta && this.$eagletPageMeta.pageInstance && l(this.$eagletPageMeta.pageInstance, this.$eagletPageMeta.impressionSelector);
        },
        startImpression: function() {
            var e = this;
            this.isPageNeedImpression() && this.$eagletPageMeta && this.$eagletPageMeta.pageInstance && (u.check(this.$eagletPageMeta.pageInstance, this.$eagletPageMeta.impressionSelector), 
            this.checkInterval = setInterval(function() {
                u.check(e.$eagletPageMeta.pageInstance, e.$eagletPageMeta.impressionSelector);
            }, 500));
        },
        setConfig: function(e) {
            var t = e.$eagletPageMeta;
            this.$eagletPageMeta = t;
        },
        stopImpression: function() {
            this.$eagletPageMeta && this.$eagletPageMeta.pageInstance && (u.clearImpressionMap(this.$eagletPageMeta.pageInstance), 
            clearInterval(this.checkInterval));
        },
        initPage: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = this.$eagletPageMeta, n = t.pageInstance, r = t.instanceId, i = f(), a = {
                pageInstance: {
                    type: "PageInstance",
                    value: n
                },
                instanceId: r(e),
                route: i
            };
            this.$eagletCurrentPageData = a, o.setBrowser({
                route: i
            }), o.setPage(a), this.$eagletCurrentPageDataMap[i] = {
                page: JSON.parse(JSON.stringify(a)),
                meta: t
            };
        },
        resetPage: function() {
            var e = f();
            this.$eagletCurrentPageDataMap[e] && (this.$eagletCurrentPageData = this.$eagletCurrentPageDataMap[e], 
            this.$eagletPageMeta = this.$eagletCurrentPageData.meta, o.setBrowser({
                route: e
            }), o.setPage(this.$eagletCurrentPageData.page));
        },
        destroyPage: function() {
            var e = (this.$eagletCurrentPageData || {}).route;
            this.$eagletCurrentPageDataMap[e] && delete this.$eagletCurrentPageDataMap[e];
        },
        trackPageView: function(e) {
            var t = this.$eagletCurrentPageData.pageInstance;
            e ? a.push(e) : t && a.push({
                event: {
                    type: "Event",
                    value: {
                        action: {
                            type: "NormalizedAction",
                            value: "pageview"
                        }
                    }
                }
            });
        },
        onShow: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.initPage(e), this.startImpression();
        },
        onHide: function() {
            a.flush();
        },
        onLoad: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.$eagletPageMeta ? (this.initPage(e), this.trackPageView()) : c.warn("[eaglet-mp]: page need $eagletPageMeta");
        },
        onUnload: function() {
            this.stopImpression(), this.destroyPage();
        },
        onPageScroll: function() {
            this.debounceImpression();
        }
    };
    n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = p;
}, function(e) {
    return n({
        "./api": 1631872123655,
        "../dataBase/index": 1631872123651,
        "../collector/impression": 1631872123668,
        "../utils/debounce": 1631872123670,
        "../utils/logger": 1631872123652
    }[e], e);
}), t(1631872123668, function(e, t, n) {
    var a = e("../eaglet/api"), s = r(a), c = (a = e("../utils/logger"), r(a)), l = (a = e("../utils/pageElement")).getElementsAsync, f = a.isElementInView, p = function() {
        function e() {
            o(this, e), this.impressionMap = {};
        }
        return u(e, [ {
            key: "check",
            value: function(e, t) {
                var n = this;
                l(t || ".eaglet-impressio").then(function(t) {
                    t.forEach(function(t) {
                        var r, a = t.dataset, o = a.eagletImpression, u = void 0 === o ? "{}" : o, l = a.eagletOffset, p = void 0 === l ? "0/0/y" : l, d = a.eagletIdentifier, g = p.split("/"), h = i(g, 3), v = h[0], m = h[1], y = h[2];
                        try {
                            r = JSON.parse(u);
                        } catch (e) {
                            return void c.error(e);
                        }
                        d || c.warn("曝光点缺少 identifier"), n.impressionMap[e] || (n.impressionMap[e] = {}), 
                        n.impressionMap[e][d] || f({
                            element: t,
                            direction: y,
                            offsetTop: parseInt(v, 10),
                            offsetBottom: parseInt(m, 10)
                        }) && (n.impressionMap[e][d] = !0, s.push(r));
                    });
                });
            }
        }, {
            key: "clearImpressionMap",
            value: function(e) {
                delete this.impressionMap[e];
            }
        } ]), e;
    }();
    n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = new p();
}, function(e) {
    return n({
        "../eaglet/api": 1631872123655,
        "../utils/logger": 1631872123652,
        "../utils/pageElement": 1631872123669
    }[e], e);
}), t(1631872123669, function(e, t, n) {
    var i, a = e("./mpApi"), o = r(a);
    n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.isElementInView = function(e) {
        var t, n, r, a = e.element, u = e.offsetTop, s = void 0 === u ? 0 : u, c = e.offsetBottom, l = void 0 === c ? 0 : c, f = e.direction, p = void 0 === f ? "y" : f;
        return !!a && (i && i.windowHeight || (i = o.getSystemInfoSync()), "y" === p ? (t = i.windowHeight, 
        n = a.top, r = a.bottom) : (t = i.windowWidth, n = a.left, r = a.right), r + s > 0 && n <= t + l);
    }, n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.getElementsAsync = function(e) {
        return o.createSelectorQuery ? new Promise(function(t) {
            var n = o.createSelectorQuery();
            n.selectAll(e).boundingClientRect(), n.exec(function(e) {
                t(e[0]);
            });
        }) : [];
    };
}, function(e) {
    return n({
        "./mpApi": 1631872123649
    }[e], e);
}), t(1631872123670, function(e, t, n) {
    n.__esModule || Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = function(e, t, n) {
        var r;
        return function() {
            clearTimeout(r), n && (e.call.apply(e, [ this ].concat(Array.prototype.slice.call(arguments))), 
            n = !1), r = setTimeout(e.bind.apply(e, [ this ].concat(Array.prototype.slice.call(arguments))), t);
        };
    };
}, function(e) {
    return n({}[e], e);
}), n(1631872123648));