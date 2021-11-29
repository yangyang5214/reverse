Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.sendFeedback = function(t) {
    var r = t.sid, i = t.content, n = t.type, o = t.deviceinfo, s = t.imageList;
    return (0, e.post)("FEEDBACK", {
        content: i,
        type: n,
        deviceinfo: o,
        imageList: s,
        sid: r
    }, {
        transform: !0
    });
}, exports.getUploadToken = function() {
    return (0, e.get)("CI_TOKEN", {
        extractData: !1
    });
};

var e = require("../utils/http");