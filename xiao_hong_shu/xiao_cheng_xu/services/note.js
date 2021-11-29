Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getVideoNoteFeed = function(e) {
    var t = e.id, o = e.num, n = void 0 === o ? 10 : o, a = e.page, s = void 0 === a ? 1 : a;
    return (0, r.get)("VIDEO_NOTE_FEED", {
        transform: !0,
        params: {
            pageSize: n,
            page: s
        },
        resourceParams: {
            noteId: t
        }
    });
}, exports.getSingleNote = function(e) {
    var t = e.id;
    return (0, r.get)("SINGLE_FEED", {
        transform: !0,
        resourceParams: {
            noteId: t
        }
    });
}, exports.getRelatedNotes = function() {
    var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = o.id, a = e(o, t);
    return (0, r.get)("RELATED_NOTES", {
        transform: !1,
        params: a,
        resourceParams: {
            noteId: n
        }
    });
}, exports.getRelatedNoteFeed = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.id, a = e(t, o);
    return (0, r.get)("RELATED_NOTE_FEEDS", {
        transform: !1,
        params: a,
        resourceParams: {
            noteId: n
        }
    });
}, exports.likeNote = function(e) {
    var t = e.noteId;
    return (0, r.post)("LIKE_NOTE", {
        noteId: t
    }, {
        transform: !0,
        resourceParams: {
            noteId: t
        }
    });
}, exports.dislikeNote = function(e) {
    var t = e.noteId;
    return (0, r.del)("LIKE_NOTE", {
        transform: !0,
        resourceParams: {
            noteId: t
        }
    });
}, exports.collectNote = function(e) {
    var t = e.noteId, o = e.sid;
    return (0, r.post)("COLLECT_NOTE", {
        noteId: t
    }, {
        transform: !0,
        resourceParams: {
            noteId: t,
            sid: o
        }
    });
}, exports.deleteCollectNote = function(e) {
    var t = e.noteId, o = e.sid;
    return (0, r.del)("COLLECT_NOTE", {
        transform: !0,
        params: {
            noteId: t
        },
        resourceParams: {
            noteId: t,
            sid: o
        }
    });
}, exports.getNoteImageStickers = function(e) {
    return (0, r.get)("IMAGE_STICKERS", {
        transform: !0,
        resourceParams: {
            id: e
        }
    });
}, exports.getNoteDetailSwitch = function() {
    return (0, r.get)("NOTE_DETAIL_ACTIVITY_SWITCH", {
        transform: !0
    });
}, exports.getBrandLotteryInfo = function(e) {
    return (0, r.get)("GET_BRAND_LOTTERY_INFO", {
        transform: !0,
        params: e
    });
}, exports.getNoteCommentDetail = function(e) {
    var t = e.noteId, o = e.pageSize, n = e.endId, a = {
        pageSize: o || 10
    };
    n && (a.endId = n);
    return (0, r.get)("NOTE_COMMENT_DETAIL", {
        params: a,
        resourceParams: {
            noteId: t
        }
    });
}, exports.getPinchNum = function(e) {
    return (0, r.get)("PINCH_READ_NUM", {
        transform: !0,
        resourceParams: {
            id: e.id
        }
    });
}, exports.getNoteTags = function(e) {
    var t = e.id;
    return (0, r.get)("NOTE_TAGS", {
        resourceParams: {
            noteId: t
        }
    });
};

var e = require("../@babel/runtime/helpers/objectWithoutProperties"), r = require("../utils/http"), t = [ "id" ], o = [ "id" ];