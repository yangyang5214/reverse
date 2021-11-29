Component({
    behaviors: [],
    properties: {
        commentsData: Object,
        isNoMoreComments: Boolean
    },
    data: {
        commentAnimationData: {}
    },
    attached: function() {
        this.popupAnimation();
    },
    methods: {
        popupAnimation: function() {
            var t = wx.createAnimation({
                duration: 400,
                timingFunction: "ease"
            });
            t.translateY(0).step(), this.setData({
                commentAnimationData: t.export()
            });
        },
        backAnimation: function() {
            var t = wx.createAnimation({
                duration: 400,
                timingFunction: "ease"
            });
            t.translateY(1e3).step(), this.setData({
                commentAnimationData: t.export()
            });
        },
        closeComments: function() {
            var t = this;
            this.backAnimation(), setTimeout(function() {
                t.triggerEvent("closeComments");
            }, 400);
        },
        handleFetchMore: function() {
            this.triggerEvent("fetchMoreComment");
        }
    }
});