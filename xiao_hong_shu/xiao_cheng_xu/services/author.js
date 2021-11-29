Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getUserInfo = function(r) {
    var t = r.userId;
    return (0, e.get)("SNS_USER_INFO", {
        transform: !0,
        resourceParams: {
            userId: t
        }
    });
}, exports.getNoteUser = function(r) {
    var t = r.userId, s = r.page, a = r.pageSize;
    return (0, e.get)("SNS_NOTE_USER", {
        transform: !0,
        params: {
            page: s,
            pageSize: a
        },
        resourceParams: {
            userId: t
        }
    });
}, exports.getUserOtherNotes = function(r) {
    var t = r.userId, s = r.filterNoteIds;
    return (0, e.get)("SNS_OTHER_NOTE_USER", {
        params: {
            filterNoteIds: s
        },
        resourceParams: {
            userId: t
        }
    });
}, exports.getAtTaNote = function(r) {
    var t = r.userId, s = r.page, a = r.pageSize;
    return (0, e.get)("SNS_ATTA_NOTE", {
        transform: !0,
        params: {
            page: s,
            pageSize: a
        },
        resourceParams: {
            userId: t
        }
    });
}, exports.fetchMemberInfo = function() {
    return (0, e.get)("MEMBER_INFO", {
        transform: {
            separateNumber: !0
        }
    });
};

var e = require("../utils/http");