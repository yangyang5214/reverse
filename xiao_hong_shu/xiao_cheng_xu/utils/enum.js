Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.contains = function(_, E) {
    for (var e in _) if (_.hasOwnProperty(e) && _[e] === E) return !0;
    return !1;
}, exports.RENEW_DATA = exports.HISTORY_SCENE = exports.MAIN_CHAT_SCENE = exports.APP_OPEN_SCENE = exports.OTHER_MP_BACK_SCENE = exports.SHARE_MEESAGE_SCENE = exports.SHARE_SINGLE_CARD = exports.SHARE_GROUP_CARD = exports.STORAGE_KEY = exports.NOTE_TYPE = exports.TRENDING_TYPE = exports.TRACK = void 0;

exports.TRACK = {
    className: "xhs-track"
};

exports.TRENDING_TYPE = {
    SEARCH_TRENDING: "search_trending",
    GOODS_TRENDING: "goods_trending"
};

exports.NOTE_TYPE = {
    NORMAL: "normal",
    MULTI: "multi",
    VIDEO: "video"
};

exports.STORAGE_KEY = {
    API_TOKEN: "api_token",
    LAST_SEARCH: "last_search",
    USER_INFO: "user_info_v1",
    PRODUCT_SEARCH_RECORDS: "product_search_records_v1",
    NEWBIE_FLAG: "newbie_flag",
    PIN_MINI_PROGRAM_FLAG: "pin_mini_program",
    CATEGORY: "category",
    HOME_PAGE_FEEDS: "homePageFeeds",
    WX_USER_INFO_DETAIL: "wx_user_info_detail",
    IS_GET_NEW_FEEDS: "is_get_new_feeds",
    AB_TEST: "xhs_ab_test",
    IS_NEW_WXMP_UESR: "is_new_wxmp_user",
    SELECTED_STAR: "selected_star",
    CAN_SHOW_FULL_ADD_MP: "canShowFullAddMp"
};

exports.SHARE_GROUP_CARD = 1008;

exports.SHARE_SINGLE_CARD = 1007;

exports.SHARE_MEESAGE_SCENE = 1036;

exports.OTHER_MP_BACK_SCENE = 1038;

exports.APP_OPEN_SCENE = 1069;

exports.MAIN_CHAT_SCENE = 1089;

exports.HISTORY_SCENE = 1090;

exports.RENEW_DATA = {
    scene: 1038,
    appId: "wxbd687630cd02ce1d"
};