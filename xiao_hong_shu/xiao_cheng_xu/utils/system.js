Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../@babel/runtime/helpers/classCallCheck"), t = require("../@babel/runtime/helpers/createClass"), r = new (function() {
    function r() {
        e(this, r), this.systemInfo = wx.getSystemInfoSync();
    }
    return t(r, [ {
        key: "isAndroid",
        value: function() {
            return "android" === this.systemInfo.platform;
        }
    }, {
        key: "getSystemInfo",
        value: function() {
            return this.systemInfo;
        }
    } ]), r;
}())();

exports.default = r;