Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.sendVertifyCode = function(t) {
    return (0, e.post)("VERTIFICATION_CODE", t, {
        params: {}
    });
}, exports.initGeeTest = function() {
    return (0, e.post)("INIT_GEETEST");
};

var e = require("../utils/http");