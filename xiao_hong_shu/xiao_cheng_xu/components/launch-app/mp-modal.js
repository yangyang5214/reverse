var t = require("../../utils/track");

Component({
    properties: {
        showModal: Boolean,
        modalWidth: String,
        background: String
    },
    methods: {
        handleTabCloseModal: function() {
            (0, t.trackClick)({
                label: "cancel_to_contact",
                timeStamp: new Date().getTime()
            }), this.triggerEvent("closeModal");
        },
        handleToContact: function() {
            (0, t.trackClick)({
                label: "to_contact",
                timeStamp: new Date().getTime()
            });
        }
    }
});