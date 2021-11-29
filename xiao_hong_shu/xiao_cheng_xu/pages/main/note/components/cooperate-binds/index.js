var e = require("../../../../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../../../../utils/path"), n = e(require("../../../../../utils/user")), a = require("../../../../../libs/vuefy.js");

Component({
    options: {},
    behaviors: [],
    properties: {
        cooperateBinds: Array
    },
    data: {},
    attached: function() {},
    moved: function() {},
    detached: function() {},
    ready: function() {
        (0, a.computed)(this, {
            formatedBrands: function() {
                var e = this.data.cooperateBinds;
                return e.length > 0 && e.map(function(t, n) {
                    n < e.length - 1 && (t.name = "".concat(t.name, "、"));
                }), e;
            }
        });
    },
    show: function() {},
    methods: {
        handleTapedCooperate: function(e) {
            var a = e.target.dataset, r = a.cooperateid;
            a.link && n.default.ensureLogin().then(function() {
                (0, t.navigateTo)("AuthorPage", {
                    id: r
                });
            });
        }
    }
});