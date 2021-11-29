Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.comment = function(t) {
    return (0, e.post)("SEND_COMMENT", t, {
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
};

var e = require("../utils/http");