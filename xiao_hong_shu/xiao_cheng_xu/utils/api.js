Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../@babel/runtime/helpers/classCallCheck"), t = require("../@babel/runtime/helpers/createClass"), n = wx, a = new (function() {
    function a() {
        e(this, a), this.$instance = {};
    }
    return t(a, [ {
        key: "hasMpApi",
        value: function() {
            return !!n;
        }
    }, {
        key: "getGlobalData",
        value: function() {
            return this.$instance && this.$instance.globalData ? this.$instance.globalData : {};
        }
    } ]), a;
}())();

Object.defineProperty(a, "$instance", {
    get: function() {
        return getApp() || {};
    },
    set: function(e) {
        this._instance = e;
    }
});

var i = Object.assign(a, n);

exports.default = i;