var t = require("../../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../../utils/user")), e = require("../../../../../utils/path");

Component({
    behaviors: [],
    properties: {
        note: Object,
        unexpandHeight: Number
    },
    attached: function() {
        var t = this, e = new Date(), n = this.properties.note.time, i = e.getFullYear() === +n.slice(0, 4) ? n.slice(5, 10) : n.slice(0, 10);
        this.setData({
            showDate: i
        });
        try {
            this.createSelectorQuery().select(".video-content-text").boundingClientRect(function(e) {
                t.triggerEvent("getTextHeight", e);
            }).exec(), this.createSelectorQuery().select(".video-content-box").boundingClientRect(function(e) {
                if (e) {
                    var n = t.properties.unexpandHeight - e.height;
                    t.setData({
                        boxBottom: n,
                        background: !0
                    }), t.expandAnimation();
                }
            }).exec();
        } catch (t) {}
    },
    data: {
        boxBottom: -1e3,
        expandAnimationData: {},
        background: !1,
        showDate: ""
    },
    methods: {
        expandAnimation: function() {
            var t = wx.createAnimation({
                duration: 200,
                timingFunction: "ease"
            });
            t.translateY(this.data.boxBottom).step(), this.setData({
                expandAnimationData: t.export()
            });
        },
        packUpAnimation: function() {
            var t = wx.createAnimation({
                duration: 200,
                timingFunction: "ease"
            });
            t.translateY(0).step(), this.setData({
                expandAnimationData: t.export()
            });
        },
        handleFocuseOn: function() {
            this.triggerEvent("focuse", this.properties.note);
        },
        handlePackUp: function() {
            var t = this;
            this.packUpAnimation(), this.setData({
                background: !1
            }), setTimeout(function() {
                t.triggerEvent("packUp");
            }, 200);
        },
        handleTapAvatar: function() {
            var n = this.properties.note.user.id;
            t.default.ensureLogin().then(function() {
                (0, e.navigateTo)("AuthorPage", {
                    author_id: n
                });
            });
        },
        touchmove: function() {
            return !1;
        }
    }
});