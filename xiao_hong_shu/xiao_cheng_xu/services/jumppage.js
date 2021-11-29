Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getJumpPageUrl = function(t) {
    var e = t.pathId;
    return (0, r.get)("QR_LINK", {
        transform: !0,
        params: {
            pathId: e
        }
    });
}, exports.getAdsQrCodeUrl = function() {
    return (0, r.get)("ADS_QR_LINK", {
        transform: !0
    });
};

var r = require("../utils/http");