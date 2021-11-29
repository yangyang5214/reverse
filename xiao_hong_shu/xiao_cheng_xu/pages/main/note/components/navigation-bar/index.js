var a = require("../../../../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../../../../utils/path"), i = a(require("../../../../../utils/api")), e = require("../../../../../utils/page"), o = wx.getSystemInfoSync(), n = "android" === o.platform, s = (i.default.$instance.globalData.systemInfo, 
function(a) {
    return a * o.windowWidth / 750;
});

Component({
    behaviors: [],
    properties: {
        navigationBarConfig: {
            type: Object,
            observer: function(a, t) {
                null != t && this.setNavigationBar(a, !0);
            }
        }
    },
    data: {
        title: "",
        isIphoneX: !1,
        navigationBarTrueHeight: (0, e.getTopSectionHeight)(),
        navigationBarStyles: "",
        navigationBarIconsNum: 0,
        canUseCustomNavigationBar: !0,
        noShowNavigationBar: !1,
        showBackIcon: !1,
        showHomePageIcon: !1,
        leftSideInnerStyle: "",
        type: ""
    },
    ready: function() {
        this.data.isIphoneX = i.default.$instance.globalData.isIPhoneX;
        var a = getCurrentPages(), t = (0, e.getNavigationBarInfo)();
        this.data.showBackIcon = a.length > 1, this.data.showBackIcon && (this.data.navigationBarIconsNum += 1), 
        this.data.canUseCustomNavigationBar = t.canCustom, this.data.noShowNavigationBar = t.noShow;
        this.canUseCustomNavigationBar && this.noShowNavigationBar && (this.data.navigationBarTrueHeight = 0), 
        this.data.pageContentClass = "", this.data.pageContainerClass = " ready";
        var o = s(64) - 2, r = s(174) - 2;
        n && (o -= 1, r -= 1), o += "px", r += "px", this.data.leftSideInnerStyle = "height: ".concat(o, ";max-width: ").concat(r, ";"), 
        this.setNavigationBar(this.properties.navigationBarConfig);
    },
    moved: function() {},
    detached: function() {},
    show: function() {},
    methods: {
        handleGoLastPage: function() {
            this.triggerEvent("navigateBack"), (0, t.navigateBack)();
        },
        handleHomePage: function() {
            this.triggerEvent("switchHomePage"), (0, t.switchTab)("HomePage");
        },
        setAllData: function() {
            this.setData({
                title: this.data.title,
                isIphoneX: this.data.isIphoneX,
                navigationBarTrueHeight: this.data.navigationBarTrueHeight,
                navigationBarStyles: this.data.navigationBarStyles,
                navigationBarIconsNum: this.data.navigationBarIconsNum,
                canUseCustomNavigationBar: this.data.canUseCustomNavigationBar,
                noShowNavigationBar: this.data.noShowNavigationBar,
                showBackIcon: this.data.showBackIcon,
                showHomePageIcon: this.data.showHomePageIcon,
                leftSideInnerStyle: this.data.leftSideInnerStyle
            });
        },
        setNavigationBar: function() {
            var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (a.textStyle) {
                var i = (0, t.getPageUrl)(), o = {};
                o.type = a.textStyle, o.showHomePageIcon = (0, e.isShowHomePage)(i.route), o.showHomePageIcon && (o.navigationBarIconsNum = this.data.navigationBarIconsNum + 1), 
                void 0 !== a.titleText && (o.title = a.titleText, wx.setNavigationBarTitle({
                    title: a.titleText
                }));
                var n = "#ff2741", s = "#ffffff";
                a.backgroundColor && (n = a.backgroundColor);
                var r = {
                    black: "#000000",
                    white: "#ffffff"
                };
                r[a.textStyle] && (s = r[a.textStyle]);
                var g = (0, e.getTrueStatusBarHeight)();
                o.navigationBarStyles = "color: ".concat(s, ";background-color: ").concat(n, ";padding-top: ").concat(g, "px;"), 
                wx.setNavigationBarColor && wx.setNavigationBarColor({
                    frontColor: s,
                    backgroundColor: n
                }), this.setData(o), this.setAllData();
            }
        }
    }
});