var e = require("../../../../../@babel/runtime/helpers/interopRequireWildcard")(require("../../../../../utils/icons"));

Component({
    behaviors: [],
    properties: {
        imageSrc: String,
        isOfficialVerified: Boolean,
        width: {
            type: Number,
            value: 80
        },
        hasBorder: Boolean
    },
    data: {
        officalVerifiedSrc: (0, e.getAbsoluteUrl)("ci.xiaohongshu.com", e.default.officalVerified)
    },
    attached: function() {},
    moved: function() {},
    detached: function() {},
    ready: function() {},
    show: function() {},
    methods: {
        handleAvatarError: function() {
            this.setData({
                imageSrc: "http://ci.xiaohongshu.com/4dbf6dd3-7611-4625-90f3-91928fe0e4b0"
            });
        }
    }
});