var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), a = require("../../../utils/track"), t = require("../../../utils/path"), n = e(require("../../../utils/api")), i = require("../../../utils/enum"), r = require("../../../utils/parse-url");

Page({
    data: {
        link: "",
        shareInfo: {}
    },
    bindmessage: function(e) {
        var a = this, t = e.detail;
        ((t = t || {}).data || []).forEach(function(e) {
            var t = e.methodName, n = e.data;
            if ("setShareInfo" === t) {
                var i = n = n || {}, r = i.title, o = i.linkurl, l = i.image, s = i.imageurl, c = a.data.shareInfo;
                r && (c.title = r), l && -1 === l.indexOf("logo-normal") && (c.imageUrl = l), s && -1 === s.indexOf("logo-normal") && (c.imageUrl = s), 
                o && (c.link = encodeURIComponent(decodeURIComponent(o))), a.setData({
                    shareInfo: c
                });
            }
        });
    },
    onShareAppMessage: function() {
        var e = (0, t.makeSharePath)("HomePage");
        try {
            var n = this.route, i = this.options, o = [], l = [ "sid", "scene" ];
            for (var s in i) if ({}.hasOwnProperty.call(i, s)) {
                var c = i[s];
                "link" === s && c && (this.data.shareInfo.link && (c = this.data.shareInfo.link), 
                c = decodeURIComponent(c), c = (0, r.cleanSpecialKeys)(c), c = encodeURIComponent(c)), 
                -1 === l.indexOf(s) && o.push("".concat(s, "=").concat(c));
            }
            e = "".concat(n, "?").concat(o.join("&"));
        } catch (e) {
            console.log(e);
        }
        (0, a.trackNormalData)({
            action: "share",
            property: e
        });
        var u = {
            path: e
        };
        return this.data.shareInfo.title && (u.title = this.data.shareInfo.title), this.data.shareInfo.imageUrl && (u.imageUrl = this.data.shareInfo.imageUrl), 
        u;
    },
    onLoad: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        console.log("!!!!!!!!!!!!!!!webview", e);
        var t = "canLaunchAppFromMp", o = e.link || "", l = e.canShare, s = (0, r.getAbsoluteLink)({
            link: decodeURIComponent(o)
        }), c = [ /\/vendor\/[\S]{24}\/events\/[\S]{24}/, /\/vendor\/[\S]{24}/, /\/goods\/[\S]{24}/, /\/event\/page\/sale_event\/[\S]{24}/, /\/store\/cs\/index/, /\/page\//, /\/activity\//, /\/tag\/custom/, /picasso_pages/ ], u = wx.getStorageSync(i.STORAGE_KEY.USER_INFO) || {}, h = wx.getStorageSync(i.STORAGE_KEY.USER_INFO), d = h.sid;
        s = (0, r.cleanSpecialKeys)(s), s = (0, r.changeQuery)({
            link: s,
            type: "set",
            key: "_mpversion",
            value: new Date().getTime()
        }), u.authorization && (s = (0, r.changeQuery)({
            link: s,
            type: "set",
            key: "authorization",
            value: u.authorization
        })), s = (0, r.changeQuery)({
            link: s,
            type: "set",
            key: "sid",
            value: d
        });
        var p = !1;
        s.indexOf("noShare=yes") > -1 && (p = !1), (l || s.indexOf("canShare") > -1) && (p = !0), 
        c.some(function(e) {
            if (e.test(s)) return p = !0, !0;
        }), !p && wx.canIUse("hideShareMenu") && wx.hideShareMenu(), (0, a.trackPageview)(), 
        (0, a.trackNormalData)({
            action: "webview_pv",
            label: s
        });
        var g = u.openid, v = n.default.$instance.globalData.canLaunchApp, m = n.default.$instance.globalData.version;
        v && (s = (0, r.changeQuery)({
            link: s,
            type: "set",
            key: t,
            value: !0
        })), g && (s = (0, r.changeQuery)({
            link: s,
            type: "set",
            key: "openid",
            value: g
        })), m && (s = (0, r.changeQuery)({
            link: s,
            type: "set",
            key: "mpVersion",
            value: version
        })), s = (0, r.changeQuery)({
            link: s,
            type: "set",
            key: "isMiniProgram",
            value: "true"
        }), this.setData({
            link: s
        });
    },
    onUnload: function() {
        (0, a.trackNormalData)({
            action: "page_unload"
        });
    }
});