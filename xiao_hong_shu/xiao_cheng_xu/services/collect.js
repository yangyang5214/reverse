Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getFaved = function(r) {
    var e = r.num, a = void 0 === e ? 10 : e, s = r.bottomStart;
    return s ? (0, t.get)("FAVED", {
        transform: !0,
        params: {
            num: a,
            bottomStart: s
        }
    }) : (0, t.get)("FAVED", {
        transform: !0,
        params: {
            num: a
        }
    });
}, exports.getAuthorFaved = function(r) {
    var e = r.userId, a = r.num, s = void 0 === a ? 10 : a, o = r.start;
    return (0, t.get)("AUTHORFAVED", {
        transform: !0,
        params: {
            num: s,
            start: o
        },
        resourceParams: {
            userId: e
        }
    });
};

var t = require("../utils/http");