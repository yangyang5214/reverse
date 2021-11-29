var a = require("../../utils/track");

Component({
    properties: {
        launchAppParameter: String,
        authorId: String,
        otherInfo: String
    },
    data: {
        show: new Date().getTime() < 156528e7,
        showModal: !1,
        source: "tfboys"
    },
    methods: {
        handleTapLaunchApp: function() {
            var t = this.data || {}, o = t.source, r = t.otherInfo;
            (0, a.trackNormalData)({
                action: "launch_app",
                label: o,
                property: r
            });
        },
        handleLaunchAppSuccess: function() {
            var t = this.data || {}, o = t.source, r = t.otherInfo;
            (0, a.trackNormalData)({
                action: "launch_app_success",
                label: o,
                property: r
            });
        },
        handleLaunchAppError: function() {
            var t = this.data || {}, o = t.source, r = t.otherInfo;
            (0, a.trackNormalData)({
                action: "launch_app_fail",
                label: o,
                property: r
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