var e = require("../../libs/vuefy.js");

Component({
    properties: {
        hide: {
            type: Boolean,
            value: !0
        }
    },
    options: {
        multipleSlots: !0
    },
    methods: {
        handleStopBubble: function() {}
    },
    ready: function() {
        (0, e.computed)(this, {
            showModal: function() {
                return !this.data.hide;
            }
        });
    }
});