var a = require("../../@babel/runtime/helpers/interopRequireDefault"), e = require("../../services/tracker"), t = require("../../utils/track"), r = require("../../utils/path"), c = a(require("../../utils/api")), n = require("../../routes"), o = require("../../libs/@xhs/protobuf-mp-chakra-tracker/mp.js"), l = c.default.$instance.globalData.launchOps;

Component({
    properties: {
        launchAppParameter: String,
        show: Boolean,
        authorId: String,
        source: String
    },
    data: {
        showModal: !1
    },
    methods: {
        handleTapLaunchApp: function() {
            var a = (0, r.getPageUrl)().route, c = (0, n.getCategory)(a), u = this.data, s = u.source, i = u.launchAppParameter, p = void 0 === i ? "" : i;
            s ? (0, t.trackNormalData)({
                action: "launch_app",
                label: s
            }) : (0, e.launchAppTrack)({
                category: c,
                url: "".concat(a, "?scene=").concat(l.scene)
            }), wx.$eaglet.push(o.tracker[5624]({
                channelTabName: s.replace(/-/g, "_"),
                channelTabId: (0, r.getIdFromDeeplink)(p)
            }));
        },
        handleLaunchAppSuccess: function() {
            var a = this.data.source;
            (0, t.trackNormalData)({
                action: "launch_app_success",
                label: a
            });
        },
        handleLaunchAppError: function(a) {
            var c = (0, r.getPageUrl)().route, o = (0, n.getCategory)(c);
            console.log(a), (0, e.launchAppTrack)({
                category: o,
                url: "".concat(c, "?scene=").concat(l.scene),
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
    }
});