var t = require("../../utils/page"), o = require("miniprogram-computed").behavior;

Component({
    behaviors: [ o ],
    properties: {
        isRefreshing: {
            type: Boolean,
            value: !1
        },
        isFetchingNoteList: {
            type: Boolean,
            value: !1
        },
        isLoadMoreNoteList: {
            type: Boolean,
            value: !1
        },
        scrollIntoView: {
            type: String,
            value: ""
        }
    },
    data: {
        firstTouchY: 0,
        touchYDelta: 0,
        triggerDistance: 100,
        scrollTopStatus: !0,
        showPullDownLoading: !1,
        scrollBottomStatus: !1,
        bottomDistance: 1e3,
        isInitReachBottomObserver: !1
    },
    computed: {
        scrollHeight: function() {
            var o = (0, t.getTopSectionHeight)();
            return "calc(100vh - ".concat(o, "px)");
        }
    },
    watch: {
        isRefreshing: function(t) {
            t || this.setData({
                showPullDownLoading: !1
            });
        },
        isLoadMoreNoteList: function(t, o) {
            console.log(o), o && this.setData({
                scrollBottomStatus: !1
            });
        }
    },
    methods: {
        initReachBottomObserver: function() {
            var t = this;
            if (this.createIntersectionObserver && !this.data.isInitReachBottomObserver) {
                this.data.isInitReachBottomObserver = !0;
                try {
                    this.createIntersectionObserver().relativeToViewport({
                        bottom: 10
                    }).observe(".page-scroll-end", function() {
                        t.triggerEvent("scrollBottom");
                    });
                } catch (t) {
                    console.warn("initReachBottomObserver error");
                }
            }
        },
        handleScrollTop: function() {
            this.setData({
                scrollTopStatus: !0
            });
        },
        handleScrollBottom: function() {
            this.initReachBottomObserver(), this.data.scrollBottomStatus || this.setData({
                scrollBottomStatus: !0
            });
        },
        touchstart: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (t.touches && t.touches.length > 0) {
                var o = t.touches[0];
                this.setData({
                    firstTouchY: parseInt(o.clientY, 10)
                });
            }
        },
        touchmove: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (t.touches && t.touches.length > 0) {
                var o = t.touches[0], e = parseInt(o.clientY, 10);
                this.setData({
                    touchYDelta: e - this.data.firstTouchY
                });
            }
        },
        touchend: function() {
            this.data.touchYDelta >= this.data.triggerDistance && this.data.scrollTopStatus && (this.setData({
                showPullDownLoading: !0
            }), this.triggerEvent("scrollPullDown")), this.data.touchYDelta < 0 && this.data.scrollTopStatus && this.setData({
                scrollTopStatus: !1
            }), this.data.touchYDelta < 0 && this.data.scrollBottomStatus && (this.triggerEvent("scrollBottom"), 
            this.setData({
                scrollBottomStatus: !1
            })), this.setData({
                firstTouchY: 0,
                touchYDelta: 0
            });
        }
    }
});