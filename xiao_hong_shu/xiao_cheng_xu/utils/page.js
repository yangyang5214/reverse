var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.hasMorePage = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return e = e || {}, Boolean(e.hasMore);
}, exports.createNextPageArgs = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    e && !e.hasMore && console.log("[page] call create next page with hasMore=false");
    return {
        page: e.page + 1,
        pageSize: e.pageSize,
        hasMore: e.hasMore
    };
}, exports.mapPage = function(e) {
    var t, o, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], i = arguments.length > 2 ? arguments[2] : void 0, n = i.page, a = i.pageSize;
    r.length === a ? t = !0 : r.length < a ? t = !1 : (console.log("[page] pageSize is not matched, except: ".concat(a, ", now ").concat(r.length)), 
    t = !0);
    1 === n ? o = r : n > 1 && (o = e.concat(r));
    return {
        list: o,
        pagination: {
            page: n,
            pageSize: a,
            hasMore: t
        }
    };
}, exports.DEFAULT_PAGINATION_ARGS = exports.DEFAULT_PAGINATION = exports.getNavigationBarInfo = exports.getScreenRatio = exports.getTrueFullScreenHeight = exports.getTrueScreenHeight = exports.getTopSectionHeight = exports.getTrueStatusBarHeight = exports.getNavigationBarHeight = exports.getNavigationTabBarHeight = exports.androidDeviationHeight = exports.isShowBackIcon = exports.isShowHomePage = exports.widthHeightLikeWhichPhoneModel = exports.getSystemInfo = exports.IPHONE_X = exports.IPHONE_8P = exports.IPHONE_8 = exports.IPHONE_5 = void 0;

var t = require("./path"), o = require("./string"), r = require("../routes"), i = e(require("./api"));

exports.IPHONE_5 = "iPhone 5";

exports.IPHONE_8 = "iPhone 8";

exports.IPHONE_8P = "iPhone 8P";

exports.IPHONE_X = "iPhone X";

var n = function() {
    return i.default.getSystemInfoSync();
};

exports.getSystemInfo = n;

var a = n(), g = function() {
    return "android" === a.platform;
};

exports.widthHeightLikeWhichPhoneModel = function() {
    var e = a;
    return e.windowWidth <= 320 ? "iPhone 5" : 375 === e.windowWidth && 667 === e.widthHeight ? "iPhone 8" : e.windowWidth >= 375 && e.windowWidth <= 414 ? "iPhone 8P" : 375 === e.windowWidth && e.windowHeight >= 736 ? "iPhone X" : void 0;
};

exports.isShowHomePage = function(e) {
    var t = [ r.RouteMap.HomePage, r.RouteMap.StoreHomePage, r.RouteMap.UserCenterPage, r.RouteMap.ExperienceProduct, r.RouteMap.GameCompetition, r.RouteMap.GameCompetitionChoice, r.RouteMap.GameCompetitionLoading, r.RouteMap.GameCompetitionResult ], o = !0;
    return t.some(function(t) {
        if (t === e) return o = !1, !0;
    }), o;
};

exports.isShowBackIcon = function(e) {
    var t = [ r.RouteMap.GameCompetitionChoice, r.RouteMap.GameCompetitionLoading ], o = !0;
    return t.some(function(t) {
        if (t === e) return o = !1, !0;
    }), o;
};

exports.androidDeviationHeight = 3;

exports.getNavigationTabBarHeight = function() {
    var e = n();
    return e.windowHeight - e.windowHeight;
};

var s = function() {
    var e = 88, t = n().windowWidth;
    return g() && (e = 100), Math.floor(function(e, t) {
        return e * t / 750;
    }(e, t));
};

exports.getNavigationBarHeight = s;

exports.getTrueStatusBarHeight = function() {
    var e = n().statusBarHeight;
    return g() && (e += 3), e;
};

var p = function() {
    var e = n(), t = s(), o = e.statusBarHeight + t;
    return g() && (o -= 5), o;
};

exports.getTopSectionHeight = p;

var u = function() {
    var e = n(), t = e.windowHeight - p();
    return g() && e.windowHeight <= e.windowHeight && (t = e.windowHeight - p()), t;
};

exports.getTrueScreenHeight = u;

exports.getTrueFullScreenHeight = function() {
    var e = n(), t = u();
    return g() && e.windowHeight != e.windowHeight && (t += e.statusBarHeight), t;
};

exports.getScreenRatio = function() {
    var e = n(), t = e.windowWidth;
    return e.windowHeight / t >= 1.9;
};

exports.getNavigationBarInfo = function() {
    var e = {
        canCustom: !0,
        noShow: !1
    }, n = i.default.getSystemInfoSync(), a = n.platform, g = -1 === (0, o.compareVersion)(n.version, "6.6.0") && ("ios" === a || "android" === a);
    e.canCustom = !g;
    var s = (0, t.getPageUrl)();
    return r.NoNavigationBarRoutes.some(function(t) {
        if (s.route === t) return e.noShow = !0, !0;
    }), e;
};

var h = {
    PAGE: 1,
    PAGE_SIZE: 10,
    HAS_MORE: !0
};

exports.DEFAULT_PAGINATION = h;

var c = {
    page: h.PAGE,
    pageSize: h.PAGE_SIZE,
    hasMore: h.HAS_MORE
};

exports.DEFAULT_PAGINATION_ARGS = c;