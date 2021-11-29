var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.sendTrackInfo = S, exports.wxTrack = function(e) {
    var r = e.action, o = e.label, i = e.property, s = e.uid, c = (0, a.getPageUrl)(), u = c.route, d = c.url, l = c.from, p = c.scene, f = (0, 
    t.getCategory)(u);
    return S({
        category: f,
        seAc: r,
        sePr: i,
        url: d,
        from: l,
        co: {
            scene: p
        }
    }), n.default.reportAnalytics("track", {
        category: f || this.$wxpage.route,
        action: r,
        label: o,
        property: i,
        uid: s || this.appUserId
    });
}, exports.goodsDetailTrack = function(e) {
    var r = e.xhsGS, t = n.default.getStorageSync("user_info"), a = t.openid, o = t.appUserId;
    return S({
        openid: a,
        uid: o,
        category: "goods_detail",
        seAc: "click_instance_buy",
        sePr: r,
        url: "pages/goods/index"
    });
}, exports.checkoutTrack = function(e) {
    var r = e.xhsGS, t = e.oid, a = n.default.getStorageSync("user_info"), o = a.openid, i = a.token, s = a.appUserId;
    return S({
        openid: o,
        token: i,
        uid: s,
        category: "order_checked",
        seAc: "pay_success",
        sePr: t,
        url: "pages/checkout/index?xhs_g_s=".concat(r)
    });
}, exports.bindMobileTrack = function(e) {
    var r = e.action, t = e.url, a = e.status, o = n.default.getStorageSync("user_info"), i = o.openid, s = o.token, c = o.appUserId;
    return S({
        openid: i,
        token: s,
        uid: c,
        category: "pages/mine/index" === t ? "My_View" : "goods_detail",
        seAc: r,
        sePr: a,
        url: t
    });
}, exports.launchAppTrack = function(e) {
    var r = e.category, t = e.url, a = e.fail, o = e.label, i = n.default.getStorageSync("user_info"), s = i.openid, c = i.token, u = i.appUserId;
    return S({
        openid: s,
        token: c,
        uid: u,
        category: r,
        seAc: a ? "launch_app_failed" : "launch_app_clicked",
        seLa: o || "launch_app_btn",
        url: t
    });
};

require("../utils/http");

var r = require("../http.config.js"), t = require("../routes"), a = require("../utils/path"), o = e(require("../utils/ab-test")), n = e(require("../utils/api")), i = e(require("../libs/md5")), s = e(require("../libs/uuid")), c = e(require("../utils/user")), u = require("../utils/string"), d = require("../utils/enum"), l = e(require("../project-version")), p = null, f = "", g = "", _ = "", h = "", m = null;

function y() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = {}, t = function e(r, t) {
        Object.keys(t).forEach(function(a) {
            var o = (0, u.toLowerLine)(a);
            "[object Object]" === Object.prototype.toString.call(t[a]) ? (r[o] = {}, e(r[o], t[a])) : r[o] = t[a];
        });
    };
    return t(r, e), r;
}

function S() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.category, a = e.seAc, u = e.seLa, S = e.sePr, x = e.url, k = e.from, v = e.source, A = e.appuid, E = e.e, I = e.co, b = void 0 === I ? {} : I, w = e.aid, q = e.isApm;
    !h && b && b.scene && (h = b.scene), [ d.SHARE_MEESAGE_SCENE, d.APP_OPEN_SCENE ].indexOf(b.scene) > -1 ? (m = !0, 
    h = b.scene) : m = !!(h === d.SHARE_MEESAGE_SCENE && b && [ d.OTHER_MP_BACK_SCENE, d.MAIN_CHAT_SCENE, d.HISTORY_SCENE ].indexOf(b.scene) > -1), 
    k && (f = k), A && (g = A), v && (_ = v);
    var P = {}, T = r.config.API_LIST.TRACKING;
    for (var U in f && (P.from = f), g && (P.appuid = g), _ && (P.source = _), w && (P.aid = w), 
    h && b && b.scene && (P.last_scene = h), null !== m && (P.can_launch_app = m), a = (a = a || "").replace(/-/g, "_"), 
    b = b || {}) Object.prototype.hasOwnProperty.call(b, U) && (P[U] = b[U]);
    if (!p) try {
        (p = n.default.getSystemInfoSync()).brand && "devtools" === p.brand && (T = r.config.API_LIST.TRACKING_TEST);
    } catch (E) {
        p = {};
    }
    var N, O, C = c.default.getUserInfo(), j = C.openid, R = C.appUserId, L = C.isNewWxmpUser, M = C.wxUserInfo, G = C.authorization, H = C.sid, K = C.appUserInfo || {}, z = {
        schema: "xhs_mini_program/1-0-0",
        data: [ {
            schema: "mp-user/1-0-0",
            data: {
                openid: j,
                isNewWxmpUser: L,
                isAppUser: K.isAppUser,
                wxNickname: M && M.nickname,
                sid: H,
                authorization: G
            }
        }, {
            schema: "page-info/1-0-0",
            data: P
        }, {
            schema: "system-info/1-0-0",
            data: {
                model: p.model || "",
                platform: p.platform || "",
                sdk: p.SDKVersion || "",
                system: p.system || "",
                version: p.version || ""
            }
        } ]
    }, D = l.default ? l.default : "1.0";
    try {
        O = R ? (0, i.default)(R) : null, N = s.default.new().hex;
    } catch (e) {}
    var W = {
        tna: "mpT",
        tv: "mp-0.1.0",
        aid: "xhs_marco_mewtwo#".concat(D),
        vp: "".concat(p.windowWidth, "x").concat(p.windowHeight),
        p: "mp",
        e: E || "se",
        exp: "",
        eid: N,
        seCa: t,
        seAc: a,
        uid: O,
        nuid: R || null,
        url: x,
        co: z
    };
    return S && (W.sePr = S), u && (W.seLa = u), W.co = JSON.stringify(W.co), console.log("trackRequestUrl: ".concat(T, ", trackItem:"), W), 
    new Promise(function(e) {
        var r = function() {
            var e = o.default.getExpIds();
            W.exp = e.join("|"), wx.request({
                url: T,
                method: "POST",
                header: {
                    Authorization: G
                },
                data: {
                    schema: "payload",
                    data: [ y(W) ]
                },
                fail: function() {
                    console.error("track request fail");
                }
            });
        };
        q || o.default.checkReady() ? r() : o.default.AddQueue(r), e();
    });
}