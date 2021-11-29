var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.fetchMemberInfo = function() {
    return (0, t.get)("MEMBER_INFO", {
        transform: {
            separateNumber: !0
        }
    });
}, exports.fetchMemberCheckout = function() {
    return (0, t.get)("MEMBER_ORDER_CHECKOUT", {
        transform: {
            separateNumber: !0
        },
        params: {}
    });
}, exports.fetchMemberOrderId = function(e) {
    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o = arguments.length > 2 ? arguments[2] : void 0, i = r.default.getUserInfo(), u = i.openid, a = 2;
    return (0, t.post)("MEMBER_ORDER_CREATE", {
        openid: u,
        type: e,
        renew: n ? 1 : 0,
        promotionId: o,
        paymentType: a,
        clientSource: "WXAPP_STORE"
    }, {
        transform: {
            separateNumber: !0
        }
    });
}, exports.fetchMemberInvitation = function(e) {
    var r = e.invitationId;
    return (0, t.get)("REVIEW_MEMBER_INVITATION", {
        transform: !0,
        params: {
            invitationId: r
        }
    });
}, exports.joinMemberInvitation = function(e) {
    var r = e.invitationId;
    return (0, t.post)("JOIN_MEMBER_INVITATION", {
        invitationId: r
    }, {
        transform: !0
    });
}, exports.fetchPopups = function() {
    return (0, t.get)("MEMBER_EVENT_POPUPS");
}, exports.fetchMemberGoodsIds = function() {
    return (0, t.get)("MEMBER_GOODS_IDS");
};

var t = require("../utils/http"), r = e(require("../utils/user"));