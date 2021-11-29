var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("./mixin")), a = require("../../utils/enum"), i = require("../../utils/track"), r = t(require("../../utils/api"));

Component({
    behaviors: [ e.default ],
    properties: {
        buttonClass: {
            type: String,
            value: ""
        },
        fromSource: {
            type: String,
            value: "default"
        },
        formData: {
            type: Object
        }
    },
    data: {
        isTaped: !1
    },
    methods: {
        reset: function() {
            this.setData({
                isTaped: !1
            });
        },
        handleForm: function() {},
        submit: function(t) {
            var e = r.default.getStorageSync(a.STORAGE_KEY.USER_INFO), s = t.detail.formId;
            e = e || {}, !this.data.isTaped && e.sid && "the formId is a mock one" !== s ? (this.setData({
                isTaped: !0
            }), (0, i.trackNormalData)({
                action: "collect_form_id",
                label: this.data.fromSource
            }), this.triggerEvent("submit", this.data.formData)) : this.triggerEvent("submit", this.formData);
        }
    }
});