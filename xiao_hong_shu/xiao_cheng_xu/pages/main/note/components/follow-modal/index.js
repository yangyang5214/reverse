Component({
    options: {
        multipleSlots: !0
    },
    behaviors: [],
    properties: {
        showModal: Boolean,
        user: Object,
        modalWidth: Number,
        background: String
    },
    data: {
        showModal: !1
    },
    attached: function() {},
    moved: function() {},
    detached: function() {},
    ready: function() {},
    show: function() {},
    methods: {
        handleTabCloseModal: function() {
            this.setData({
                showModal: !1
            });
        },
        handleTabConfirm: function() {
            var o = this.data.user;
            this.triggerEvent("unfollowAppUser", {
                user: o
            }), this.setData({
                showModal: !1
            });
        }
    }
});