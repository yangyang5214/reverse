var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), r = require("../../../@babel/runtime/helpers/objectSpread2"), t = require("../../../@babel/runtime/helpers/objectWithoutProperties"), i = require("../../../routes"), a = require("../../../utils/track"), o = require("../../../utils/path"), c = require("../../../utils/string"), n = e(require("../../../utils/api")), s = require("../../../services/jumppage"), p = [ "ads", "pageKey" ];

Page({
    data: {},
    onLoad: function() {
        var e, u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, l = u.ads, d = u.pageKey, g = t(u, p);
        if (l) (0, s.getAdsQrCodeUrl)().then(function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = e.ads;
            r.forEach(function(e) {
                if (e.name === l) {
                    var r = e.category, t = e.params;
                    t = t || {}, console.log(">>>>>>>>要跳转的category", r), (0, a.trackApm)({
                        action: "advertisement_pageview",
                        property: e.name,
                        label: e
                    }), (0, i.isSwitchTab)(r) ? (0, o.switchTab)(r) : (0, o.redirectTo)(r, t);
                }
            });
        }); else {
            if (u.scene) {
                var h = decodeURIComponent(u.scene).match(/[0-9A-Fa-f]{24}/);
                "[object Array]" === Object.prototype.toString.call(h) && h.length > 0 && (e = h[0]);
            }
            if (e) (0, s.getJumpPageUrl)({
                pathId: e
            }).then(function(r) {
                var t = decodeURIComponent(r.wxmpQrcodeUrl);
                if ((0, c.isWebViewLink)(t)) (0, o.redirectTo)("Webview", {
                    link: t
                }); else {
                    (0, a.trackApm)({
                        action: "redirect_success",
                        property: e
                    });
                    var s = (0, i.getCategoryByPath)(t);
                    (0, i.isSwitchTab)(s) ? (0, o.switchTab)(s) : n.default.redirectTo({
                        url: "/".concat(t)
                    });
                }
            }).catch(function(r) {
                (0, a.trackApm)({
                    action: "redirect_failure",
                    property: e
                }), console.log(r);
            }); else {
                var b = o.redirectTo, m = "HomePage", f = r({}, g);
                i.RouteMap[d] || (d = m), (0, i.isSwitchTab)(d) && (b = o.switchTab, f = void 0), 
                (0, a.trackApm)({
                    action: "redirect_by_category",
                    property: d
                }), b(d, f);
            }
        }
    }
});