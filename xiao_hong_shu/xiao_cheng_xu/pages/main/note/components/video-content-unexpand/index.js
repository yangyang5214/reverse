var e = require("../../../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../../../utils/api")), i = e(require("../../../../../utils/user")), n = require("../../../../../utils/path");

Component({
    behaviors: [],
    properties: {
        note: Object,
        showExpand: Boolean
    },
    attached: function() {
        var e = this;
        this.setData({
            showExpandBut: this.properties.showExpand
        });
        var i = t.default.$instance.globalData.systemInfo;
        this.createSelectorQuery().select(".video-content-box").boundingClientRect(function(t) {
            var n = 750 * t.height / i.windowWidth;
            e.triggerEvent("setUnexpandHeight", t.height), n > 92 && e.setData({
                showExpand: !0
            }), e.setData({
                isExpand: !1,
                initFinished: !0
            });
        }).exec();
    },
    data: {
        showExpandBut: !1
    },
    methods: {
        handleFocuseOn: function() {
            this.triggerEvent("focuse", this.properties.note);
        },
        handleExpand: function() {
            this.triggerEvent("expand");
        },
        handleTapAvatar: function() {
            var e = this.properties.note.user.id;
            i.default.ensureLogin().then(function() {
                (0, n.navigateTo)("AuthorPage", {
                    author_id: e
                });
            });
        }
    }
});