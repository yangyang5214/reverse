var e = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/icons")), t = require("../../utils/track");

Component({
    properties: {
        addMyMp: Object
    },
    data: {
        closeIcon: "https://ci.xiaohongshu.com/".concat(e.default.close),
        addToMyMpStyle: "content"
    },
    methods: {
        handleCloseAddMyMp: function() {
            (0, t.trackClick)({
                label: "close_pin_mini_program",
                context: {},
                timeStamp: new Date().getTime()
            }), this.triggerEvent("closeAddMyMp");
        }
    }
});