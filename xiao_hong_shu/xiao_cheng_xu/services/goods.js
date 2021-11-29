Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.fetchItems = function(e) {
    var t = e.itemIds, r = e.type, i = void 0 === r ? 0 : r, s = e.datetime, o = void 0 === s ? 0 : s;
    return get("ITEMS_INFO", {
        transform: !0,
        params: {
            itemIds: t.join(","),
            datetime: o,
            type: i
        }
    });
};

require("../utils/http");