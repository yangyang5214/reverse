var t = require("../../../../../libs/vuefy.js");

Component({
    properties: {
        current: Number,
        totalImgCount: Number
    },
    data: {
        maxShowNorDoTCount: 3,
        activePosition: Math.ceil(1.5)
    },
    attached: function() {},
    moved: function() {},
    detached: function() {},
    ready: function() {
        (0, t.computed)(this, {
            showSmallDot: function() {
                var t = this.data;
                return t.totalImgCount - 2 > t.maxShowNorDoTCount;
            },
            showLeftSmallDot: function() {
                var t = this.data, o = t.current, n = t.totalImgCount, a = t.maxShowNorDoTCount, r = t.activePosition;
                return o <= a && o < n - (a - r) - 1;
            },
            showRightSmallDot: function() {
                var t = this.data;
                return t.current >= t.totalImgCount - (t.maxShowNorDoTCount - t.activePosition) - 1;
            },
            showBothSideSmallDot: function() {
                var t = this.data, o = t.current, n = t.totalImgCount, a = t.maxShowNorDoTCount, r = t.activePosition;
                return o > a && o < n - (a - r) - 1;
            },
            showFirstActiveDot: function() {
                var t = this.data, o = t.current;
                t.totalImgCount;
                return 1 === o;
            },
            showLastActiveDot: function() {
                var t = this.data;
                return t.current === t.totalImgCount;
            },
            showCenterActiveDot: function() {
                var t = this.data;
                return t.current === t.totalImgCount;
            }
        });
    },
    pageLifetimes: {
        show: function() {}
    },
    methods: {}
});