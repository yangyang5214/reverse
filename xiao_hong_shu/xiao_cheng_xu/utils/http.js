var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.configure = exports.interceptors = exports.makeUri = exports.patch = exports.put = exports.post = exports.head = exports.del = exports.get = void 0;

var t = e(require("./api")), r = e(require("../libs/@xhs/http")), o = e(require("../libs/deep-clone")), a = require("./enum"), n = require("../utils/path"), s = e(require("../utils/user")), i = e(require("../utils/verify")), u = require("../http.config"), c = require("./fe-api-sign"), d = require("@xhs/logan-services-mewtwo"), p = !1, l = !1;

if (!t.default.hasMpApi()) throw new Error("[Http Exception] could not found wepy instance");

var f = function(e) {
    var r = (t.default.getStorageSync(a.STORAGE_KEY.USER_INFO) || {}).authorization, d = [ u.config.API_LIST.LOGIN, u.config.API_LIST.MOBILE_LOGIN, u.config.API_LIST.CI_TOKEN ], f = !0;
    if (d.some(function(t) {
        if (e.url.indexOf(t) > -1) return f = !1, !0;
    }), r && f && (e.header ? e.header.Authorization = r : e.header = {
        Authorization: r
    }), e.url.indexOf(c.DEFAULT_SIGN_API_PATH) > -1) {
        var g = (0, o.default)(e);
        e.header ? e.header["X-Sign"] = (0, c.encryptFeApiToken)(g) : e.header = {
            "X-Sign": (0, c.encryptFeApiToken)(g)
        };
    }
    var h = (0, o.default)(e);
    return new Promise(function(r, o) {
        h.success = function() {
            var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, u = a.data;
            if (l || -103 === u.result || -103 === u.errCode) {
                if (wx.showToast({
                    icon: "none",
                    title: "账号已封禁"
                }), !p) {
                    var c = u.msg || "违规情形", d = encodeURIComponent("https://www.xiaohongshu.com/crown/account/forbidden?reason=".concat(c));
                    l = !0, wx.reLaunch({
                        url: "/pages/main/webview/index?link=".concat(d)
                    }), p = !0;
                }
            } else {
                if ((-100 === u.result || -100 === u.errCode) && !p) return p = !0, s.default.loginWithCode().then(function() {
                    p = !1, s.default.ensureLogin().then(function() {
                        var e = s.default.getEagletUserInfo();
                        wx.$eaglet.resetABInfo(e), t.default.reLaunch({
                            url: "/".concat((0, n.getPageUrl)().url)
                        });
                    });
                }).catch(function() {
                    p = !1;
                }), void o(a);
                if (200 !== a.statusCode) {
                    if (461 === a.statusCode) {
                        var f = "sm";
                        console.log("###############", i.default.canJumpToVerifyPage()), i.default.canJumpToVerifyPage() && (i.default.setDisableVerifyPage(), 
                        i.default.setRelaunchBeforeVerifyPage()), i.default.goToVerifyPage(f);
                    }
                    o(a);
                } else {
                    var g = a.data;
                    if ("[object String]" === Object.prototype.toString.call(g) && "{" === g[0] && "}" === g[g.length - 1]) {
                        g = g.replace(/\s/g, "");
                        try {
                            a.data = JSON.parse(g);
                        } catch (e) {}
                    }
                    try {
                        a.data.requestUrl = e.url;
                    } catch (e) {
                        console.error(e);
                    }
                    r(a);
                }
            }
        }, h.fail = function() {
            r({});
        }, t.default.request(h);
    });
}, g = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (e.params && Object.keys(e.params).length > 0) {
        var t = Object.keys(e.params).map(function(t) {
            var r = encodeURI(decodeURI(t)), o = encodeURI(decodeURI(e.params[t]));
            return "".concat(r, "=").concat(o);
        });
        e.url = e.url + "?" + t.join("&"), delete e.params;
    }
    return f(e);
}, h = {
    processResponseData: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.data, r = e.statusCode;
        return {
            data: t,
            statusCode: r
        };
    },
    processResponseError: function(e) {
        var t = e.response;
        return {
            data: t && t.data || e.data,
            statusCode: t && t.status || e.statusCode,
            errorMsg: e.message || e.errMsg,
            errorCode: e.code
        };
    }
}, x = (0, r.default)(g, h), v = x.get, m = x.del, I = x.head, w = x.post, y = x.put, q = x.patch, A = x.makeUri, O = x.interceptors, P = x.configure;

exports.interceptors = O, exports.makeUri = A, exports.patch = q, exports.put = y, 
exports.post = w, exports.head = I, exports.del = m, exports.get = v;

var S = (0, r.default)(g, h);

(0, d.registerHttp)(S);

exports.configure = function(e) {
    return P(e);
};