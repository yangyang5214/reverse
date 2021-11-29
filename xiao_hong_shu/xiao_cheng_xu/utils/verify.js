Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e, a = require("../@babel/runtime/helpers/classCallCheck"), r = require("../@babel/runtime/helpers/createClass"), t = require("./path"), u = new (function() {
    function u() {
        a(this, u), this.canJumpToVerifyPageValue = !0, this.lastJumpPageUrl = "";
    }
    return r(u, [ {
        key: "canJumpToVerifyPage",
        value: function() {
            return this.canJumpToVerifyPageValue;
        }
    }, {
        key: "setRelaunchBeforeVerifyPage",
        value: function() {
            var e = getCurrentPages() || [], a = "";
            if (e && e.length > 0) {
                var r = e[e.length - 1], u = r && r.route, i = r && r.options;
                u && i && (a = "/" + (0, t.makePath)(u, i));
            }
            console.log("###############", a), this.lastJumpPageUrl = a;
        }
    }, {
        key: "relaunchBeforeVerifyPage",
        value: function() {
            this.lastJumpPageUrl ? wx.reLaunch({
                url: this.lastJumpPageUrl
            }) : (0, t.switchTab)("HomePage");
        }
    }, {
        key: "setDisableVerifyPage",
        value: function() {
            this.canJumpToVerifyPageValue = !1;
        }
    }, {
        key: "setAvailableVerifyPage",
        value: function() {
            this.canJumpToVerifyPageValue = !0;
        }
    }, {
        key: "goToVerifyPage",
        value: function(a) {
            e && clearTimeout(e), e = setTimeout(function() {
                var e = getCurrentPages() || [];
                if (e.length > 0) {
                    var r = e[e.length - 1];
                    if ("pages/secondary/verify/index" === (r && r.route)) return;
                }
                (0, t.redirectTo)("VerPage", {
                    verifyType: a
                });
            }, 800);
        }
    } ]), u;
}())();

exports.default = u;