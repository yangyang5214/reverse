var e = require("../../@babel/runtime/helpers/interopRequireWildcard"), t = require("../../@babel/runtime/helpers/interopRequireDefault"), i = require("../../utils/path"), r = t(require("../../utils/user")), a = e(require("../../utils/icons"));

Component({
    properties: {
        item: Object
    },
    data: {
        officalVerified: (0, a.getAbsoluteUrl)("ci.xiaohongshu.com", a.default.officalVerified)
    },
    methods: {
        handleTapItem: function() {
            var e = this.data.item || {};
            e.id && (0, i.navigateTo)("AuthorPage", {
                id: e.id
            });
        },
        handleTriggleFollow: function() {
            var e = r.default.getUserInfo().appUserId;
            e ? e === this.data.item.id ? wx.showToast({
                title: "不能关注自己",
                icon: "none"
            }) : this.triggerEvent("followUserListItem", this.data.item) : wx.showToast({
                title: "请先登录",
                icon: "none"
            });
        },
        handleAvatarError: function() {
            this.data.item && (this.data.item.images = "https://ci.xiaohongshu.com/4dbf6dd3-7611-4625-90f3-91928fe0e4b0");
        }
    }
});