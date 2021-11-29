var t = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/api"));

Component({
    data: {
        content: "",
        animationData: {},
        display: !1
    },
    methods: {
        show: function(t) {
            var a = this;
            this.setData({
                display: !0,
                content: t.content
            }), this.createAnimation(1), setTimeout(function() {
                a.setData({
                    display: !1
                }), a.createAnimation(0);
            }, t.duration || 850);
        },
        createAnimation: function(a) {
            var e = t.default.createAnimation();
            this.setData({
                animationData: e.opacity(a).step().export()
            });
        }
    }
});