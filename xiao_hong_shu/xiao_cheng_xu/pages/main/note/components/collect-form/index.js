var e = require("../../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../../utils/user"));

Component({
    behaviors: [],
    properties: {
        fromSource: {
            type: String,
            value: "default"
        }
    },
    data: {
        isTaped: !1
    },
    lifetimes: {
        attached: function() {},
        moved: function() {},
        detached: function() {},
        ready: function() {}
    },
    pageLifetimes: {
        show: function() {}
    },
    methods: {
        reset: function() {
            this.setData({
                isTaped: !1
            });
        },
        handleForm: function() {},
        submit: function(t) {
            var i = e.default.getUserInfo(), a = t.detail.formId;
            this.data.fromSource;
            i = i || {}, !this.data.isTaped && i.sid && "the formId is a mock one" !== a ? (this.setData({
                isTaped: !0
            }), this.triggerEvent("submit")) : this.triggerEvent("submit");
        }
    }
});