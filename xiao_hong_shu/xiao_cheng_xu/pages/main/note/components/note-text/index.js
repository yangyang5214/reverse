var t = require("../../../../../utils/discovery"), e = require("../../../../../libs/vuefy.js");

Component({
    properties: {
        desc: {
            type: String
        },
        hashTag: {
            type: Array
        },
        ats: {
            type: Array
        },
        noteTags: {
            type: Array
        }
    },
    data: {
        formatedDesc: []
    },
    ready: function() {
        (0, e.computed)(this, {
            formatedDesc: function() {
                var e = this.data.desc, r = this.data.hashTag || [], a = this.data.ats || [];
                return e.split("\n").map(function(e) {
                    return (0, t.getFormatedExpressionArr)(e, r, a);
                });
            }
        });
    }
});