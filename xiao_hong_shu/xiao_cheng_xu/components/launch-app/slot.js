var e = require("../../@babel/runtime/helpers/interopRequireDefault"), a = require("../../services/tracker"), t = require("../../utils/track"), r = require("../../utils/path"), n = e(require("../../utils/api")), o = require("../../routes"), c = n.default.$instance.globalData.launchOps;

Component({
    properties: {
        launchAppParameter: String,
        show: Boolean,
        authorId: String,
        customMessageReplyInfo: Object
    },
    data: {
        showModal: !1,
        openType: "launchApp"
    },
    methods: {
        handleTapLaunchApp: function() {
            var e = (0, r.getPageUrl)().route, t = (0, o.getCategory)(e);
            (0, a.launchAppTrack)({
                category: t,
                url: "".concat(e, "?scene=").concat(c.scene)
            });
        },
        handleLaunchAppError: function(e) {
            var n = (0, r.getPageUrl)().route, l = (0, o.getCategory)(n);
            console.log(e), (0, a.launchAppTrack)({
                category: l,
                url: "".concat(n, "?scene=").concat(c.scene),
                fail: !0
            }), (0, t.trackClick)({
                label: "open_contact_modal",
                timeStamp: new Date().getTime()
            }), this.setData({
                showModal: !0
            });
        },
        handleCloseModal: function() {
            this.setData({
                showModal: !1
            });
        }
    },
    ready: function() {
        this.setData({
            openType: n.default.$instance.globalData.canLaunchApp ? "launchApp" : ""
        });
    }
});