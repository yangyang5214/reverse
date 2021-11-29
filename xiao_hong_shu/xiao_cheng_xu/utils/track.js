var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.trackImpression = exports.trackPageview = exports.trackClick = exports.trackError = exports.trackApm = exports.trackNormalData = void 0;

var r = require("../@babel/runtime/helpers/classCallCheck"), t = require("../@babel/runtime/helpers/createClass"), o = require("../routes"), a = require("./path"), i = require("./enum"), n = e(require("./api")), c = e(require("./user")), s = require("../services/tracker"), u = function() {
    var e = (0, a.getPageUrl)();
    try {
        var r = e.query || {}, t = r.gdt_vid, o = r.weixinadinfo, i = {};
        if (t && o) {
            var n = o.split(".");
            i.aid = n[0];
        }
        return i = Object.assign(i, e);
    } catch (r) {
        return console.warn(r), e;
    }
}, l = function(e) {
    var r = e.action, t = e.label, a = e.property, i = e.context, n = e.sourceRoute, c = e.isApm, l = u();
    if (l && l.route || n) {
        var p = l.route, d = l.url, f = l.from, g = l.aid, m = l.source, h = l.appuid, v = (0, 
        o.getCategory)(p || n);
        (i = i || {}).scene = l.scene, r || console.error("action is required"), (0, s.sendTrackInfo)({
            category: v,
            seAc: r,
            sePr: a,
            seLa: t,
            url: d,
            from: f,
            co: i,
            aid: g,
            isApm: c,
            source: m,
            appuid: h
        });
    }
};

exports.trackNormalData = l;

exports.trackApm = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = e;
    return r.isApm = !0, l(r);
};

exports.trackError = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    try {
        var r = u();
        if (!r || !r.route) return;
        var t = c.default.getUserInfo(), a = t.openid, i = t.appUserId, n = r.route, l = r.url, p = r.from, d = r.aid, f = (0, 
        o.getCategory)(n) || "mpPage";
        wx.reportAnalytics("app_onerror", {
            openid: a,
            category: f,
            message: e,
            user_id: i
        });
        var g = {
            category: f,
            seAc: "error",
            sePr: "",
            seLa: e.substr(0, 60),
            url: l,
            from: p,
            aid: d,
            co: {
                errMsg: e.substr(0, 220)
            },
            isApm: !0
        };
        (0, s.sendTrackInfo)(g);
    } catch (e) {
        wx.reportAnalytics("app_onerror", {
            openid: "",
            category: "",
            message: e
        }), console.error(e);
    }
};

exports.trackClick = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = {}, t = u(), a = t.route, i = t.url, n = t.from, c = t.scene, l = t.aid, p = t.source, d = t.appuid;
    try {
        "[object String]" === Object.prototype.toString.call(e) && (r = JSON.parse(e)), 
        "[object Object]" === Object.prototype.toString.call(e) && (r = e);
    } catch (e) {
        return void console.warn("The id attribute of track element must be json stringify");
    }
    var f = r, g = f.label, m = f.property, h = f.context;
    (h = h || {}).scene = c;
    var v = {
        category: (0, o.getCategory)(a) || "mpPage",
        seAc: "".concat(g, "_click"),
        sePr: m,
        url: i,
        from: n,
        source: p,
        appuid: d,
        co: h,
        aid: l
    };
    (0, s.sendTrackInfo)(v);
};

exports.trackPageview = function() {
    var e = u(), r = e.route, t = e.query, a = e.url, i = e.scene, n = e.from, c = e.aid, l = e.source, p = e.appuid;
    (0, s.sendTrackInfo)({
        category: (0, o.getCategory)(r) || "mpPage",
        seAc: "pv",
        sePr: t.id || "",
        seLa: i,
        co: {
            scene: i
        },
        url: a,
        from: n,
        source: l,
        appuid: p,
        aid: c
    });
};

var p = {}, d = function() {
    function e(t) {
        var o = this;
        r(this, e), this.findTrackFailNum = 0, this.impressedTracker = {}, this.pageInstance = t, 
        this.initWindowSize(), this.countDown = null;
        var a = t.$wxpage.route;
        p[a] || (p[a] = 1, this.countDown = setTimeout(function() {
            o.postData();
        }, 300), this.trackEvent());
    }
    return t(e, [ {
        key: "trackEvent",
        value: function() {
            var e = this, r = this, t = r.pageInstance, o = t.onPageScroll || null;
            if (t.onPageScroll = function(a) {
                o && o.call(t, a), e.countDown && clearTimeout(e.countDown), e.countDown = setTimeout(function() {
                    Object.keys(r.impressedTracker).length > 100 && (r.impressedTracker = {}), r.postData();
                }, 500);
            }, t.onPullDownRefresh) {
                var a = t.onPullDownRefresh;
                t.onPullDownRefresh = function() {
                    r.clearImpressedTracker(), a.call(t);
                };
            } else t.onPullDownRefresh = function() {
                r.clearImpressedTracker();
            };
        }
    }, {
        key: "initWindowSize",
        value: function() {
            var e = this.pageInstance.$root.$parent.globalData.systemInfo;
            this.windowHeight = e.windowHeight, this.windowWidth = e.windowWidth;
        }
    }, {
        key: "postData",
        value: function() {
            var e = this, r = (0, a.getPageUrl)(), t = r.route, c = r.url, u = r.from, l = r.source, p = r.scene, d = r.appuid;
            n.default.canIUse("createSelectorQuery") && n.default.createSelectorQuery && n.default.createSelectorQuery().selectAll("." + i.TRACK.className).boundingClientRect(function(r) {
                r.forEach(function(r) {
                    var a = {};
                    try {
                        a = JSON.parse(r.id);
                    } catch (e) {
                        return void console.warn("The id attribute of track element must be json stringify");
                    }
                    var i = a, n = i.label, f = i.property, g = i.context, m = i.timeStamp;
                    n = n || "", f = f || "", (g = g || {}).scene = p, m = m || 0, e.label = n;
                    var h = "".concat(n).concat(f).concat(m);
                    if (!e.impressedTracker[h] && e.isInnerWindow(r)) {
                        var v = {
                            category: (0, o.getCategory)(t) || "mpPage",
                            seAc: "".concat(n, "_impression"),
                            sePr: f,
                            url: c,
                            co: g,
                            from: u,
                            source: l,
                            appuid: d
                        };
                        e.impressedTracker[h] = 1, (0, s.sendTrackInfo)(v);
                    }
                });
            }).exec();
        }
    }, {
        key: "clearImpressedTracker",
        value: function() {
            this.impressedTracker = {}, this.findTrackFailNum = 0;
        }
    }, {
        key: "isInnerWindow",
        value: function(e) {
            if (e) {
                var r = e.bottom >= 0 && e.top + .3 * e.height < this.windowHeight, t = e.right >= 0 && e.left + .3 * e.width < this.windowWidth;
                return r && t;
            }
        }
    } ]), e;
}();

exports.trackImpression = d;