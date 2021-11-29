var e = require("../../../../../libs/vuefy"), t = require("../../../../../utils/discovery"), o = require("../../../../../libs/@xhs/protobuf-mp-chakra-tracker/mp.js"), i = {
    normal: "short_note",
    video: "video_note",
    multi: "long_note"
};

Component({
    properties: {
        noteList: Array
    },
    ready: function() {
        (0, e.computed)(this, {
            doubleColumnNotes: function() {
                return function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    if (!e.length) return {
                        leftNotes: [],
                        rightNotes: []
                    };
                    var r = [], n = [], s = 0, a = 0;
                    return e.forEach(function(e, c) {
                        var d, l = c + 1;
                        e.objectPosition = l, e.trackData = JSON.stringify({
                            label: "note_card",
                            property: e.id,
                            context: {},
                            timeStamp: new Date().getTime()
                        }), e.impression = {
                            id: e.id,
                            eagletImpression: JSON.stringify(o.tracker[2577]({
                                objectPosition: l,
                                noteId: e.id,
                                trackId: e.trackId,
                                noteType: i[e.type] || "short_note",
                                authorId: e.user.id
                            })),
                            offset: "-82/0/y"
                        }, e.eagletClick = o.tracker[2578]({
                            objectPosition: l,
                            noteId: e.id,
                            trackId: e.trackId,
                            noteType: i[e.type] || "short_note",
                            authorId: e.user.id
                        }), e.cover && e.cover.url && (e.cover.url = e.cover.url.replace("imageView2/2/w/540/", "imageView2/2/w/400/q/85/")), 
                        e.title ? e.title = (0, t.getNoTagNoFaceIconText)(e.title) : e.title = (0, t.getNoTagNoFaceIconText)(e.desc), 
                        d = e.videoInfo ? e.videoInfo.height / e.videoInfo.width : e.cover.height / e.cover.width, 
                        a < s ? (a += d, n.push(e)) : (s += d, r.push(e));
                    }), {
                        leftNotes: r,
                        rightNotes: n
                    };
                }(this.data.noteList, this.isFirstLogin, this.isNeverFillInRecommendTagForm);
            }
        });
    }
});