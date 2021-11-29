var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = require("../@babel/runtime/helpers/classCallCheck"), a = require("../@babel/runtime/helpers/createClass"), s = e(require("./api")), i = require("./enum"), r = (require("./fe-api-sign"), 
require("../services/system")), u = new (function() {
    function e() {
        t(this, e), this.gotDataFromApi = !1, this.isFetchingApi = !1, this.queues = [], 
        this.cacheDatas = null;
    }
    return a(e, [ {
        key: "privateGetCacheDatas",
        value: function() {
            if (this.cacheDatas) return this.cacheDatas;
            var e = s.default.getStorageSync(i.STORAGE_KEY.AB_TEST) || {}, t = e.expIds, a = e.flags;
            return this.cacheDatas = {
                expIds: t || [],
                flags: a || {}
            }, this.cacheDatas;
        }
    }, {
        key: "init",
        value: function() {
            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = function() {
                e.gotDataFromApi = !0, e.clearQueue();
            }, u = this;
            return new Promise(function(n) {
                var c = (t || {}).openid;
                if (!c || e.gotDataFromApi) return a(), void n();
                (0, r.getAbTest)({
                    type: "wechat",
                    openid: c
                }).then(function(e) {
                    var t = {
                        expIds: e.expIds || [],
                        flags: e.flags || [],
                        expIdsTrace: e.expIdsTrace || ""
                    };
                    u.cacheDatas = t, s.default.setStorageSync(i.STORAGE_KEY.AB_TEST, t), a(), n();
                }).catch(function() {
                    a(), n();
                });
            });
        }
    }, {
        key: "clearQueue",
        value: function() {
            this.queues && this.queues.length > 0 && (this.queues.forEach(function(e) {
                e && e();
            }), this.queues = []);
        }
    }, {
        key: "AddQueue",
        value: function(e) {
            this.queues.push(e);
        }
    }, {
        key: "checkReady",
        value: function() {
            return this.gotDataFromApi;
        }
    }, {
        key: "getExpIdsTrace",
        value: function() {
            return this.privateGetCacheDatas().expIdsTrace || "";
        }
    }, {
        key: "getExpIds",
        value: function() {
            return this.privateGetCacheDatas().expIds || [];
        }
    }, {
        key: "getABTestFlagValue",
        value: function(e, t) {
            var a, s = this.privateGetCacheDatas() || {}, i = s.expIds, r = s.flags;
            r = r || {}, i = i || [], e && t && "exp" === t && i.some(function(t) {
                if (0 === t.indexOf(e)) return a = t.substr(e.length, 1), !0;
            });
            var u = r[e];
            return void 0 !== u && (a = u), a;
        }
    } ]), e;
}())();

exports.default = u;