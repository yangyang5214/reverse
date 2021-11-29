var a = require("../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../@babel/runtime/helpers/objectSpread2"), e = require("../../utils/path"), i = require("../../utils/track"), n = require("../../utils/page"), o = require("../../utils/enum"), s = require("../../utils/datetime"), r = a(require("../../utils/user")), g = a(require("../../utils/api")), d = require("miniprogram-computed").behavior;

Component({
    behaviors: [ d ],
    properties: {
        type: {
            type: String,
            value: ""
        },
        navigationBarConfig: {
            type: Object,
            value: {}
        },
        pageConfig: Object
    },
    computed: {
        leftSideInnerClass: function(a) {
            var t = "";
            switch (a.type) {
              case "defeat":
                t = "back-defeat";
                break;

              case "white":
                t = "back-white";
                break;

              default:
                t = "back-defeat";
            }
            return t;
        },
        navIconContainerClass: function(a) {
            var t = "";
            switch (a.type) {
              case "defeat":
                t = "back-icon-container-defeat";
                break;

              case "white":
                t = "back-icon-container--white";
                break;

              default:
                t = "back-icon-container-defeat";
            }
            return t;
        }
    },
    watch: {
        navigationBarConfig: function(a) {
            this.setNavigationBar(a);
        },
        pageConfig: function(a) {
            this.setPageConfig(a);
        }
    },
    data: {
        title: "",
        isIphoneX: !1,
        navigationBarTrueHeight: (0, n.getTopSectionHeight)(),
        navigationBarStyles: "",
        navigationBarIconsNum: 0,
        canUseCustomNavigationBar: !0,
        noShowNavigationBar: !1,
        showBackIcon: !1,
        showHomePageIcon: !1,
        pageContentStyle: "",
        pageContainerClass: "",
        pageContentMinHeight: 0,
        leftSideInnerStyle: "",
        addMyMp: {
            hasClose: !1,
            isShowAddMp: !1
        },
        backPage: ""
    },
    ready: function() {
        var a = (0, n.getSystemInfo)(), t = "android" === a.platform, e = function(t) {
            return t * a.windowWidth / 750;
        }, i = {};
        this.initPageScrollEvent(), this.data.isIphoneX = g.default.$instance.globalData.isIPhoneX;
        var o = (0, n.getNavigationBarInfo)(), s = getCurrentPages();
        this.setData({
            showBackIcon: s.length > 1
        }), i.canUseCustomNavigationBar = o.canCustom, i.noShowNavigationBar = o.noShow, 
        this.data.canUseCustomNavigationBar && this.data.noShowNavigationBar && (i.navigationBarTrueHeight = 0), 
        i.pageContainerClass = " ready", this.data.isIphoneX && this.data.canUseCustomNavigationBar && this.data.noShowNavigationBar && (i.navigationBarTrueHeight = (0, 
        n.getTopSectionHeight)()), this.setNavigationBar(this.data.navigationBarConfig), 
        i.pageContentMinHeight = a.windowHeight - (a.windowHeight - a.windowHeight) - this.data.navigationBarTrueHeight + "px", 
        this.triggerEvent("pageSizeInfo", {
            contentViewHeight: this.pageContentMinHeight
        });
        var r = e(64) - 2, d = e(174) - 2;
        t && (r -= 1, d -= 1), r += "px", d += "px", i.leftSideInnerStyle = "height: ".concat(r, ";max-width: ").concat(d, ";"), 
        this.setPageConfig(this.data.pageConfig || {}), this.initAddMyMp(), this.setData(i);
    },
    methods: {
        checkAddMyMp: function() {
            this.data.addMyMp.isShowAddMp && !this.data.addMyMp.hasClose && this.setData({
                addMyMp: t(t({}, this.data.addMyMp), {}, {
                    isShowAddMp: !1
                })
            });
        },
        initAddMyMp: function() {
            var a = this, e = wx.getStorageSync(o.STORAGE_KEY.PIN_MINI_PROGRAM_FLAG), i = wx.getStorageSync(o.STORAGE_KEY.USER_INFO) || {}, n = i.isNewWxmpUser, g = new Date().getTime();
            if (!e) return e = g, this.setData({
                addMyMp: t(t({}, this.data.addMyMp), {}, {
                    isShowAddMp: !0
                })
            }), n ? this.setData({
                addMyMp: t(t({}, this.data.addMyMp), {}, {
                    hasClose: !0
                })
            }) : setTimeout(function() {
                a.setData({
                    addMyMp: t(t({}, a.data.addMyMp), {}, {
                        isShowAddMp: !1
                    })
                });
            }, 3e3), void wx.setStorage({
                key: o.STORAGE_KEY.PIN_MINI_PROGRAM_FLAG,
                data: e
            });
            e && g - e > (0, s.getTimeStampByDay)(7) && (this.setData({
                addMyMp: t(t({}, this.data.addMyMp), {}, {
                    isShowAddMp: !0
                })
            }), n ? (this.setData({
                addMyMp: t(t({}, this.data.addMyMp), {}, {
                    hasClose: !0
                })
            }), i.isNewWxmpUser = !1, r.default.setUserInfo(i)) : setTimeout(function() {
                a.setData({
                    addMyMp: t(t({}, a.data.addMyMp), {}, {
                        isShowAddMp: !1
                    })
                });
            }, 3e3), e = g, wx.setStorage({
                key: o.STORAGE_KEY.PIN_MINI_PROGRAM_FLAG,
                data: e
            }));
        },
        setNavigationBar: function() {
            var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = (0, 
            e.getPageUrl)(), i = {}, o = 0;
            i.showHomePageIcon = (0, n.isShowHomePage)(t.route), this.data.showBackIcon && (o += 1), 
            a.hideHomePageIcon && (i.showHomePageIcon = !1), i.showHomePageIcon && (o += 1), 
            i.navigationBarIconsNum = o, void 0 !== a.titleText && (i.title = a.titleText, wx.setNavigationBarTitle({
                title: a.titleText
            })), a.backPagePath && (i.backPage = a.backPagePath);
            var s = "#000000", r = s, g = "#ffffff";
            a.backgroundColor && (r = a.backgroundColor);
            var d = {
                black: "#000000",
                white: "#ffffff"
            };
            d[a.textStyle] && (g = d[a.textStyle]);
            var h = (0, n.getTrueStatusBarHeight)();
            i.navigationBarStyles = "color: ".concat(g, ";background-color: ").concat(r, ";padding-top: ").concat(h, "px;"), 
            wx.setNavigationBarColor && ("none" === r && (r = s), wx.setNavigationBarColor({
                frontColor: g,
                backgroundColor: r
            })), this.setData(i);
        },
        setPageConfig: function() {
            var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = a.fullScreen, e = a.pageContentPadding, i = [ "min-height: ".concat(this.data.pageContentMinHeight) ];
            t ? (e && i.push("padding-top: ".concat(this.data.navigationBarTrueHeight, "px")), 
            i.push("height: 100%")) : i.push("margin-top: ".concat(this.data.navigationBarTrueHeight, "px")), 
            this.setData({
                pageContentStyle: i.join(";")
            });
        },
        initPageScrollEvent: function() {
            var a = this, t = (0, e.getCurrentPage)(), i = t.onPageScroll || null;
            t.onPageScroll = function(e) {
                i && i.call(t, e), a.checkAddMyMp();
            };
        },
        handleCloseAddMyMp: function() {
            this.setData({
                addMyMp: t(t({}, this.data.addMyMp), {}, {
                    isShowAddMp: !1
                })
            });
        },
        handleGoLastPage: function() {
            this.data.backPage ? ((0, i.trackNormalData)({
                action: "navigate_back_another_page"
            }), "HOME" === this.data.backPage || "HomePage" === this.data.backPage ? (0, e.switchTab)(this.data.backPage, {
                isSpecifiedPath: !0
            }) : (0, e.navigateTo)(this.data.backPage, {
                isSpecifiedPath: !0
            })) : (this.triggerEvent("navigateBack"), (0, i.trackNormalData)({
                action: "navigate_back"
            }), (0, e.navigateBack)());
        },
        handleHomePage: function() {
            this.triggerEvent("switchHomePage"), (0, i.trackNormalData)({
                action: "navigate_home_page"
            }), (0, e.switchTab)("HomePage");
        }
    }
});