Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../../utils/page"), t = Behavior({
    data: {
        marginTop: 0
    },
    ready: function() {
        var t = (0, e.getNavigationBarInfo)();
        t.canCustom && (t.noShow || this.setData({
            marginTop: (0, e.getTopSectionHeight)() + "px"
        }));
    }
});

exports.default = t;