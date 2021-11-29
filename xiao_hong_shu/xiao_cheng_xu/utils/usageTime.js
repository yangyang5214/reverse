Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../@babel/runtime/helpers/classCallCheck"), t = require("../@babel/runtime/helpers/createClass"), a = new (function() {
    function a() {
        e(this, a), this.startTime = 0, this.usageInterval = null, this.usageTime = 0;
    }
    return t(a, [ {
        key: "start",
        value: function() {
            var e = this;
            this.startTime = new Date().getTime() / 1e3, this.usageTime = 0, this.usageInterval && clearInterval(this.usageInterval), 
            this.usageInterval = setInterval(function() {
                e.usageTime += 1;
            }, 1e3);
        }
    }, {
        key: "getUsageTime",
        value: function() {
            return this.usageTime;
        }
    }, {
        key: "isHealthy",
        value: function() {
            return Math.abs(new Date().getTime() / 1e3 - this.startTime - this.usageTime) < 5;
        }
    }, {
        key: "close",
        value: function() {
            clearInterval(this.usageInterval);
        }
    } ]), a;
}())();

exports.default = a;