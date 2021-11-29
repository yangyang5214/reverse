Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getAbsoluteUrl = c, exports.getPageTagIconUrl = function(a) {
    var b = "b410dd9d-c255-40b4-9495-a3c44c1e7beb";
    -1 === a.indexOf("_page") && (a += "_page");
    switch (a) {
      case "brand_page":
        b = "fff6413c-1cd2-4f9a-ad19-656e3c15b89e";
        break;

      case "goods_page":
        b = "c99c0cc9-6ff3-43ca-89a4-37f19922f71e";
        break;

      case "location_page":
        b = "2e22a713-ade2-42d8-8b65-aef197b1b78c";
        break;

      case "vendor_page":
        b = "4b27b05d-4b37-4251-b523-70982c059f56";
        break;

      case "user_page":
        b = "5b267514-0ab0-4ce6-a0fc-5cfc45674bed";
    }
    return c(e, b);
}, exports.getStickerUrl = function(a) {
    var b = "", o = {
        destination_page: "location_page",
        good_page: "goods_page",
        huati_page: "topic_page",
        user: "user_page"
    };
    o[a] && (a = o[a]);
    switch (a) {
      case "brand_page":
        b = "02650716-93ca-4adc-b9db-c2b06f2c6ce2";
        break;

      case "goods_page":
        b = "e600c23d-16a4-4f83-8bb5-8d45b6aafa06";
        break;

      case "location_page":
        b = "dc8ffb79-0551-4707-b4cd-058057160d7e";
        break;

      case "movie_page":
        b = "3e8672c8-e84d-46b8-b0b9-6a8fb945b9d1";
        break;

      case "topic_page":
        b = "953eac9f-974e-49e7-b74a-4ad38391f9a3";
        break;

      case "vendor_page":
        b = "7d152c8c-8a7d-448d-b8d6-63a438cbbfd9";
        break;

      case "user_page":
        b = "233eeecb-1a3d-4907-ad1d-318efec91e8c";
    }
    if (!b) return b;
    return c(e, b);
}, exports.getIconUrl = function(c) {
    return "".concat("https://").concat(e, "/").concat(c);
}, exports.default = void 0;

var e = "ci.xiaohongshu.com";

function c(e, c) {
    return "".concat("https://").concat(e, "/").concat(c);
}

exports.default = {
    collect: "b34944e0-b72c-4c88-8e70-efb2825f2690",
    address: "c417021b-c085-4ae9-8e03-9c1072bf78b3",
    order: "1fa4e09b-701a-4ed8-88e6-b4a2a8aa2742",
    feedback: "76bf1f0f-ba09-4320-bac0-52ee5f9b3118",
    coupon: "cb9537a1-ef04-49c5-b3bc-9d3737bedd32",
    close: "55d0f141-0130-4f85-b97d-ce3f02b3cbb3",
    zanIcon: "4x_icon_zan_grey.png",
    likeGreyIcon: "4x_icon_like_grey_20.png",
    likedRedIcon: "4x_icon_like_red_20.png",
    likeIcon: "4x_icon_like_white_20.png",
    likedIcon: "4x_icon_like_red_20.png",
    likeFullWhiteIcon: "4x_icon_like_full_white_20.png",
    commentIcon: "896f2408-56ff-4992-8898-47c3d67d9435",
    arrowLeftWhiteIcon: "df77d29e-6449-4d70-bf59-004fa2af0d20",
    arrowLeftGreyIcon: "536581f4-8d5a-4b10-a68e-401d73efbe63",
    wxShare: "81544002-c171-4b3c-8bba-dfaa7638baed",
    wxShareGreen: "5b5d00b6-0759-4c64-b66f-66ee74898f1f",
    collectIcon: "4x_icon_collect_white_20.png",
    collectGreyIcon: "4x_icon_collect_grey_20.png",
    collectFullWhiteIcon: "4x_icon_collect_full_white_20.png",
    collectedIcon: "4x_icon_collect_yellow_20.png",
    shareIcon: "4x_icon_share_white_20.png",
    shareGreyIcon: "4x_icon_share_grey_20.png",
    weChatshare: "4x_icon_weChat_share_white.png",
    hintTapAvatarMine: "0eb28e6a-d4b7-468e-bcbb-b91366998be0",
    hintTapAvatarNote: "d2d43800-f5db-43f4-a12a-d4d3ee18493d",
    interestUnselected: "27de0972-3c87-46fd-8515-88cea3e0b16f",
    interestCover: "a75fa7a0-0b33-4f95-ab1f-378ed80bfae3",
    genderMaleIcon: "8ea0bba8-50ef-4ebc-9474-d66c0512a9df",
    genderFemaleIcon: "f23268db-4633-4548-8bb8-1fd54f020e86",
    settings: "6b61da4e-328f-462a-a517-b5cc6ffe47ad",
    settingsGrey: "1c494087-5154-4012-9a01-57fe79b45f8f",
    officalVerified: "2bc94925-cef4-4d06-b4c7-0edfc3148fdf"
};