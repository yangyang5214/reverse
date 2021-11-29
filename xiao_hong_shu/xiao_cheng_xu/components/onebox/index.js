var e = require("../../@babel/runtime/helpers/interopRequireWildcard");

require("../../@babel/runtime/helpers/Arrayincludes");

var i = require("../../utils/path"), t = e(require("../../utils/icons")), o = require("../../services/tracker");

Component({
    properties: {
        noteOnebox: {
            type: Object,
            value: {}
        }
    },
    data: {
        officalVerified: (0, t.getAbsoluteUrl)("ci.xiaohongshu.com", t.default.officalVerified)
    },
    methods: {
        handleTapTopic: function(e) {
            var t = e.currentTarget.dataset.topic;
            o.wxTrack.call(this, {
                action: "onebox-tap",
                label: "onebox-block",
                property: t.id
            });
            var r = t && t.link ? t.link : "";
            if (r.includes("xhsdiscover://topic") && (r = r.replace("xhsdiscover://topic", "/page/topics")), 
            r.indexOf("xhsdiscover") > -1 && r.indexOf("wechat_miniprogram") > -1) {
                r = decodeURIComponent(r);
                var a = (0, i.getLinkVariable)(r, "path");
                a && wx.navigateTo({
                    url: "/" + a
                });
            } else (0, i.navigateTo)("Webview", {
                link: r
            });
        },
        handleTriggleFollow: function() {
            this.triggerEvent("handleFollowOneBox", this.data.noteOnebox.box);
        },
        handleTapItem: function() {
            (0, i.navigateTo)("AuthorPage", {
                id: this.data.noteOnebox.box.id
            });
        }
    }
});