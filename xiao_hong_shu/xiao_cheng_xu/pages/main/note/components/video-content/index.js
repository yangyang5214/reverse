var t = require("../../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../../utils/api")), e = require("miniprogram-computed").behavior;

Component({
    behaviors: [ e ],
    properties: {
        note: Object
    },
    data: {
        isExpand: !0,
        unexpandHeight: 0,
        showExpand: !0,
        init: !0
    },
    watch: {
        init: function() {
            this.setData({
                isExpand: !1
            });
        }
    },
    methods: {
        handleFocuseOn: function() {
            this.triggerEvent("focuse", this.properties.note);
        },
        handleExpand: function() {
            this.setData({
                isExpand: !0
            });
        },
        handlePackup: function() {
            this.setData({
                isExpand: !1
            });
        },
        setUnexpandHeight: function(t) {
            this.setData({
                unexpandHeight: t.detail
            });
        },
        getTextHeight: function(e) {
            if (e.detail) {
                var i = t.default.$instance.globalData.systemInfo;
                750 * e.detail.height / i.windowWidth <= 92 && this.setData({
                    showExpand: !1
                }), this.setData({
                    init: !1
                });
            }
        }
    }
});