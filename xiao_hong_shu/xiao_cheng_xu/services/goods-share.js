Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getGoodsShareInfo = function(r) {
    return (0, e.get)("GOODS_SHARE", {
        transform: !1,
        params: {
            goods_id: r
        }
    });
};

var e = require("../utils/http");