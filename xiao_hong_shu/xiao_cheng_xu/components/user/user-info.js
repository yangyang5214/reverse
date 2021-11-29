var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../@babel/runtime/helpers/interopRequireWildcard"), i = require("../../utils/track"), n = require("../../utils/path"), a = t(require("../../utils/icons")), o = e(require("../../utils/user")), r = e(require("../../utils/api")), s = require("miniprogram-computed").behavior, l = "https://ci.xiaohongshu.com", u = r.default.$instance.globalData.isIPhoneX, c = function(e) {
    var t = e.id;
    return e.isMinePage ? "xhsdiscover://profile" : "xhsdiscover://user/".concat(t, "?sourceId=miniprogram");
};

function d() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return e >= 1e4 ? (e = Math.round(10 * (e / 1e4).toFixed(1)) / 10, "".concat(e, "万")) : e;
}

Component({
    behaviors: [ s ],
    properties: {
        noteList: {
            type: Array,
            value: []
        },
        userInfo: {
            type: Object,
            value: {}
        },
        isMembership: {
            type: Boolean,
            value: !1
        },
        switchTab: {
            type: String,
            value: "notes"
        },
        isFetching: {
            type: Boolean,
            value: !1
        },
        isFetchEnd: {
            type: Boolean,
            value: !1
        },
        isBrand: {
            type: Boolean,
            value: !1
        },
        isMinePage: {
            type: Boolean,
            value: !1
        }
    },
    options: {
        multipleSlots: !0
    },
    data: {
        type: "red",
        text: "加载中",
        listType: "anthor",
        isIPhoneX: !1,
        canLike: !0,
        defaultImage: "".concat(l, "/8c47df99-484e-448d-9226-430e46641d53"),
        isLogin: !1,
        noFoundImg: "".concat(l, "/6f3fecd4-4282-4448-81a6-af6c26dbc10b"),
        officalVerified: (0, a.getAbsoluteUrl)("ci.xiaohongshu.com", a.default.officalVerified)
    },
    computed: {
        followingsCustomMessageReplyInfo: function(e) {
            var t = (e.userInfo || {}).id;
            return t ? {
                sessionFrom: JSON.stringify({
                    title: "点我，查看关注详情",
                    thumbUrl: e.userInfo.image || e.defaultImag,
                    description: "",
                    deeplink: c({
                        isMinePage: e.isMinePage,
                        id: t
                    })
                })
            } : {};
        },
        showLabels: function(e) {
            var t = !0;
            return (e.isBrand || e.userInfo && (2 === e.userInfo.redOfficialVerifyIconType || e.userInfo.verifyContent && e.userInfo.verifyContent.includes("官方账号"))) && (t = !1), 
            t;
        },
        followersCustomMessageReplyInfo: function(e) {
            var t = (e.userInfo || {}).id;
            return t ? {
                sessionFrom: JSON.stringify({
                    title: "点我，查看粉丝详情",
                    thumbUrl: e.userInfo.image || e.defaultImag,
                    description: "",
                    deeplink: c({
                        isMinePage: e.isMinePage,
                        id: t
                    })
                })
            } : {};
        },
        launchAppParameter: function(e) {
            var t = (e.userInfo || {}).id;
            return t ? c({
                isMinePage: e.isMinePage,
                id: t
            }) : "";
        },
        likedAndCollected: function(e) {
            var t = e.userInfo || {};
            return d(t.liked + t.collected) || 0;
        },
        fansNum: function(e) {
            return d((e.userInfo || {}).fans);
        },
        genderIcon: function(e) {
            var t = (e.userInfo || {}).gender;
            return void 0 === t ? "" : 1 === t ? "".concat(l, "/").concat(a.default.genderFemaleIcon) : "".concat(l, "/").concat(a.default.genderMaleIcon);
        }
    },
    methods: {
        handleTapSwitchTab: function(e) {
            if (this.data.isLogin) {
                var t = e.currentTarget.dataset.type;
                (0, i.trackNormalData)({
                    action: "switchTab",
                    property: t
                });
                var n, a = "";
                if ("collect" === t) a = null !== (n = this.data.userInfo) && void 0 !== n && n.noteCollectionIsPublic ? "collect" : "collectPrivate"; else a = "atTa" === t ? "atTa" : "anthor";
                this.setData({
                    listType: a
                }), this.triggerEvent("tapSwitchTab", t);
            }
        },
        handleTapSettings: function() {
            this.data.isLogin ? ((0, i.trackClick)({
                label: "settings",
                context: {},
                timeStamp: new Date().getTime()
            }), (0, n.navigateTo)("SETTINGS")) : (0, n.navigateTo)("LoginIndex");
        },
        handleTapFollowings: function() {
            this.data.isLogin && (0, i.trackClick)({
                label: "followings",
                context: {},
                timeStamp: new Date().getTime()
            });
        },
        handleTapFollowers: function() {
            this.data.isLogin && (0, i.trackClick)({
                label: "followers",
                context: {},
                timeStamp: new Date().getTime()
            });
        },
        handleToLogin: function() {
            (0, n.navigateTo)("LoginIndex");
        },
        handleTapUserImage: function() {
            this.data.isLogin || (0, n.navigateTo)("LoginIndex");
        },
        jumpToMemberWebview: function() {
            o.default.ensureLogin().then(function() {
                (0, n.navigateTo)("Webview", {
                    link: "/store/mc/landing"
                });
            });
        }
    },
    ready: function() {
        this.setData({
            isIPhoneX: u,
            isLogin: o.default.getUserId()
        });
    }
});