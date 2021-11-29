Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getTags = function() {
    return (0, e.get)("INTEREST_TAGS", {
        transform: !0
    });
}, exports.likeTags = function(r) {
    return (0, e.post)("INTEREST_TAGS", {
        tags: r
    }, {
        transform: !0
    });
};

var e = require("../utils/http");

require("../utils/enum"), require("../utils/parse-url");