var e = require("../../@babel/runtime/helpers/interopRequireWildcard")(require("../../utils/icons"));

Component({
    properties: {
        item: Object,
        width: {
            type: String,
            value: 80
        },
        hasBorder: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        officalVerified: (0, e.getAbsoluteUrl)("ci.xiaohongshu.com", e.default.officalVerified)
    },
    methods: {
        handleAvatarError: function() {
            this.data.item.avatarImage = "http://ci.xiaohongshu.com/4dbf6dd3-7611-4625-90f3-91928fe0e4b0";
        },
        handleTapAvatar: function() {
            this.triggerEvent("avatarTapped");
        }
    }
});