var e = require("../../@babel/runtime/helpers/objectSpread2"), t = require("../../utils/discovery"), i = require("../../utils/string"), o = require("../../libs/vuefy.js");

Component({
    properties: {
        notes: {
            type: Object,
            value: []
        },
        isFirstLogin: {
            type: Boolean,
            value: !1
        },
        isNeverFillInRecommendTagForm: {
            type: Boolean,
            value: !1
        },
        canLike: {
            type: Boolean,
            value: !1
        },
        isCompression: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        isLoading: !1,
        leftNotes: [],
        rightNotes: []
    },
    methods: {
        renderNoteList: function(i) {
            var o = function() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                if (!i.length) return {
                    leftNotes: [],
                    rightNotes: []
                };
                var o = [], r = [], n = 0, s = 0;
                return i.forEach(function(i) {
                    var a, c;
                    (a = i.cover ? i : e({
                        cover: i.image,
                        isLiked: i.isLiked
                    }, i)).cover && a.cover.url && (a.cover.url = a.cover.url.replace("imageView2/2/w/540/", "imageView2/2/w/400/q/85/")), 
                    a.trackData = JSON.stringify({
                        label: "note_card",
                        property: a.id,
                        context: {},
                        timeStamp: new Date().getTime()
                    });
                    var l = "";
                    a.title ? l = a.title : a.desc && (l = a.desc), l = l.trim(), a.title = (0, t.getNoTagNoFaceIconText)(l), 
                    c = a.videoInfo ? a.videoInfo.height / a.videoInfo.width : a.cover.height / a.cover.width, 
                    s < n ? (s += c, r.push(a)) : (n += c, o.push(a));
                }), {
                    leftNotes: o,
                    rightNotes: r
                };
            }(i), r = o.leftNotes, n = o.rightNotes;
            this.setData({
                leftNotes: r,
                rightNotes: n
            });
        },
        handleNoteItemTap: function(e) {
            this.triggerEvent("noteItemTap", e.detail);
        }
    },
    attached: function() {
        var e = wx.getSystemInfoSync().SDKVersion;
        (0, i.compareVersion)(e, "2.6.2") < 0 && (0, o.watch)(this, {
            notes: function(e) {
                this.renderNoteList(e);
            }
        });
    },
    observers: {
        notes: function(e) {
            this.renderNoteList(e);
        }
    }
});