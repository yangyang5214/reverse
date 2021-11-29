var e, t, o, r = require("../../../@babel/runtime/helpers/typeof");

module.exports = (e = {}, o = function(t, o) {
    if (!e[t]) return require(o);
    if (!e[t].status) {
        var n = e[t].m;
        n._exports = n._tempexports;
        var u = Object.getOwnPropertyDescriptor(n, "exports");
        u && u.configurable && Object.defineProperty(n, "exports", {
            set: function(e) {
                "object" === r(e) && e !== n._exports && (n._exports.__proto__ = e.__proto__, Object.keys(e).forEach(function(t) {
                    n._exports[t] = e[t];
                })), n._tempexports = e;
            },
            get: function() {
                return n._tempexports;
            }
        }), e[t].status = 1, e[t].func(e[t].req, n, n.exports);
    }
    return e[t].m.exports;
}, (t = function(t, o, r) {
    e[t] = {
        status: 0,
        func: o,
        req: r,
        m: {
            exports: {},
            _tempexports: {}
        }
    };
})(1631872123677, function(e, t, o) {
    o.__esModule || Object.defineProperty(o, "__esModule", {
        value: !0
    });
    var r = e("./services");
    Object.keys(r).forEach(function(e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(o, e, {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return r[e];
            }
        });
    });
}, function(e) {
    return o({
        "./services": 1631872123678
    }[e], e);
}), t(1631872123678, function(e, t, o) {
    o.__esModule || Object.defineProperty(o, "__esModule", {
        value: !0
    });
    var r = o.http = void 0;
    o.__esModule || Object.defineProperty(o, "__esModule", {
        value: !0
    }), o.registerHttp = function(e) {
        r = e;
    }, o.__esModule || Object.defineProperty(o, "__esModule", {
        value: !0
    }), o.getFeApiBurdockWeixinV2NoteByNoteIdSingleFeed = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return r.get("/fe_api/burdock/weixin/v2/note/{noteId}/single_feed", e);
    }, o.__esModule || Object.defineProperty(o, "__esModule", {
        value: !0
    }), o.getFeApiBurdockV2NoteByNoteIdTags = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return r.get("/fe_api/burdock/v2/note/{noteId}/tags", e);
    }, o.__esModule || Object.defineProperty(o, "__esModule", {
        value: !0
    }), o.getFeApiBurdockWeixinV2NoteByNoteIdFeed = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return r.get("/fe_api/burdock/weixin/v2/note/{noteId}/feed", e);
    }, o.__esModule || Object.defineProperty(o, "__esModule", {
        value: !0
    }), o.postFeApiBurdockV2NoteByNoteIdLike = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r.post("/fe_api/burdock/v2/note/{noteId}/like", e, t);
    }, o.__esModule || Object.defineProperty(o, "__esModule", {
        value: !0
    }), o.postFeApiBurdockV2NoteByNoteIdCollect = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r.post("/fe_api/burdock/v2/note/{noteId}/collect", e, t);
    }, o.__esModule || Object.defineProperty(o, "__esModule", {
        value: !0
    }), o.getFeApiBurdockWeixinV2NoteByNoteIdRelated = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return r.get("/fe_api/burdock/weixin/v2/note/{noteId}/related", e);
    }, o.__esModule || Object.defineProperty(o, "__esModule", {
        value: !0
    }), o.getFeApiBurdockWeixinV2NoteByNoteIdImageStickers = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return r.get("/fe_api/burdock/weixin/v2/note/{noteId}/image_stickers", e);
    }, o.__esModule || Object.defineProperty(o, "__esModule", {
        value: !0
    }), o.deleteFeApiBurdockV2NoteByNoteIdLike = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return r.del("/fe_api/burdock/v2/note/{noteId}/like", e);
    }, o.__esModule || Object.defineProperty(o, "__esModule", {
        value: !0
    }), o.deleteFeApiBurdockV2NoteByNoteIdCollect = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return r.del("/fe_api/burdock/v2/note/{noteId}/collect", e);
    }, o.__esModule || Object.defineProperty(o, "__esModule", {
        value: !0
    }), o.getFeApiBurdockWeixinV2NotesByNoteIdComments = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return r.get("/fe_api/burdock/weixin/v2/notes/{noteId}/comments", e);
    };
}, function(e) {
    return o({}[e], e);
}), o(1631872123677));