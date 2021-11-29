var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../utils/path"), i = require("../../utils/enum"), a = require("../../utils/track"), r = e(require("../../libs/event-bus")), o = e(require("../../libs/debounce")), n = e(require("../../utils/user")), l = require("../../services/system");

Component({
    properties: {
        item: Object,
        index: {
            type: Boolean,
            value: 0
        },
        canLike: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        isTaped: !1,
        isLazyLoad: !0,
        loadedGifMap: {}
    },
    methods: {
        collectFormId: function(e, t) {
            "the formId is a mock one" !== e.detail.formId && ((0, a.trackNormalData)({
                action: "collect_form_id",
                label: t
            }), (0, l.collectFormId)(e.detail.formId));
        },
        tapNoteItem: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = e.type, r = e.id, o = e.image, n = "NoteDetail";
            if (a !== i.NOTE_TYPE.MULTI) {
                var l = getCurrentPages(), d = o = o || {}, c = d.width, s = d.height, u = 1, m = "normal" === a && e.cover && e.cover.originalUrl ? encodeURIComponent(e.cover.originalUrl) : "", f = e.user && e.user.nickname ? e.user.nickname : "", p = e.user && e.user.userid ? e.user.userid : "", h = e.user && e.user.followed, g = e.user && e.user.redOfficialVerified;
                c && s && (u = s / c);
                var v = 10 === l.length ? t.redirectTo : t.navigateTo;
                v(n, {
                    id: r,
                    type: a,
                    firstImageRatio: u,
                    firstImageOriginalPath: m,
                    nickname: f,
                    followed: h,
                    redOfficialVerified: g,
                    userid: p
                });
            } else console.log("[discover-note] non-supported note type ".concat(a));
        },
        handlGifLoaded: function(e) {
            var t = e.target.dataset.id;
            this.data.loadedGifMap[t] = !0;
        },
        handleUserTap: function(e) {
            var i = this;
            (0, o.default)(function() {
                var r = (i.data.item || {}).user || {}, o = r.userid || r.id;
                n.default.ensureLogin().then(function() {
                    i.collectFormId(e, "note_card_userinfo"), (0, a.trackClick)({
                        label: "author_info",
                        property: o,
                        context: {},
                        timeStamp: new Date().getTime()
                    }), (0, t.navigateTo)("AuthorPage", {
                        author_id: o
                    });
                });
            }, 1e3, !0)();
        },
        handleNoteItemTap: function(e) {
            var t = this.data.item || {}, i = t.type, r = t.id, o = t.trackData;
            if (this.data.isTaped || this.collectFormId(e, "note_card"), this.data.isTaped = !0, 
            i && r && o) {
                try {
                    (0, a.trackClick)(o);
                } catch (e) {}
                this.triggerEvent("noteItemTap", t), this.tapNoteItem(t);
            }
        },
        handleGoInterestTap: function(e) {
            this.collectFormId(e, "note_card_interest"), (0, t.navigateTo)("InterestCollectPage");
        },
        handleLikeTap: function(e) {
            if (n.default.checkLogin()) {
                this.collectFormId(e, "note_card_like");
                var i = this.data.item || {}, o = i.id;
                (0, a.trackClick)({
                    label: "note_card_like",
                    property: o,
                    context: {},
                    timeStamp: new Date().getTime()
                }), this.data.canLike ? r.default.emit("likeTaped", o) : this.tapNoteItem(i);
            } else (0, t.navigateTo)("LoginIndex");
        }
    }
});