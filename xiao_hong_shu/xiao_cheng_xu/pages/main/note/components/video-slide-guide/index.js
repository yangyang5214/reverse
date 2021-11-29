var e = null;

Component({
    behaviors: [],
    properties: {},
    data: {
        sliderData: {},
        show: !1
    },
    attached: function() {
        wx.getStorageSync("video_note_show_slide_guide") || this.setData({
            show: !0
        }), this.data.show && this.sliderAnimation();
    },
    methods: {
        sliderAnimation: function() {
            var t = this;
            wx.setStorage({
                key: "video_note_show_slide_guide",
                data: 1
            });
            var i = wx.createAnimation({
                duration: 1e3,
                timingFunction: "ease"
            });
            this.slider = i;
            var a = 0;
            e = setInterval(function() {
                if (2 === a) return clearInterval(e), void t.closeSlideGuide();
                t.slider.translateY(-100).step({
                    duration: 600
                }), t.slider.translateY(0).step({
                    duration: 300
                }), t.setData({
                    sliderData: t.slider.export()
                }), a += 1;
            }, 1e3);
        },
        closeSlideGuide: function() {
            this.triggerEvent("closeSlideGuide");
        }
    }
});