Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.postVideoPacket = function(e) {
    return (0, r.post)("VIDEO_PACKET_OPEN", {
        noteId: e
    }, {
        transform: !0,
        params: {
            noteId: e
        }
    });
}, exports.checkRedPacket = function(e) {
    return (0, r.get)("VIDEO_PACKET_CHECK_RED_PACKET", {
        transform: !0,
        params: {
            noteId: e
        },
        resourceParams: {
            noteId: e
        }
    });
}, exports.postBrandPacket = function(e, t, n) {
    return (0, r.post)("BRAND_PACKET_OPEN", {
        noteId: e,
        brandId: t,
        brandUserId: n
    }, {
        transform: !0,
        params: {
            noteId: e,
            brandId: t,
            brandUserId: n
        }
    });
}, exports.getBrandPacketPrepare = function(e, t) {
    return (0, r.get)("BRAND_PACKET_PREPARE", {
        transform: !0,
        params: {
            noteId: e,
            redPacketType: t
        }
    });
}, exports.followBrandUser = function(e) {
    return (0, r.post)("BRAND_PACKET_FOLLOW", {
        userId: e
    }, {
        transform: !0,
        params: {
            userId: e
        }
    });
};

var r = require("../utils/http");