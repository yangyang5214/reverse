Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.REFRESH_FEEDS_NOTES_LENGTH = exports.PUSH_MORE_SCOLL_TOP = void 0;

exports.PUSH_MORE_SCOLL_TOP = 2e3;

exports.REFRESH_FEEDS_NOTES_LENGTH = 100, Component({
    properties: {
        notes: {
            type: Object,
            value: []
        },
        scrollTop: {
            type: Number,
            value: 0
        },
        isFirstLogin: {
            type: Boolean,
            value: !1
        },
        isNeverFillInRecommendTagForm: {
            type: Boolean,
            value: !1
        },
        canLike: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        isLoading: !1
    },
    methods: {
        handleScroll: function(e) {
            this.triggerEvent("scroll", e), this.data.notes.length > 100 && this.triggerEvent("cleanFeeds"), 
            e.detail.scrollHeight - e.detail.scrollTop < 2e3 ? this.data.isLoading || (this.data.isLoading = !0, 
            this.triggerEvent("pushMoreFeeds")) : this.data.isLoading = !1;
        },
        handleScrollToLower: function() {
            this.triggerEvent("pushMoreFeeds");
        },
        handleNoteItemTap: function(e) {
            this.triggerEvent("noteItemTap", e.detail);
        }
    }
});