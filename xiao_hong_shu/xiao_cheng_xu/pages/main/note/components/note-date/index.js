var t = require("../../../../../libs/vuefy.js"), e = require("../../../../../utils/date");

Component({
    behaviors: [],
    properties: {
        time: String
    },
    data: {},
    attached: function() {},
    moved: function() {},
    detached: function() {},
    ready: function() {
        (0, t.computed)(this, {
            showNoteTime: function() {
                var t = this.data.time, n = new Date((0, e.dateStringToTimestamp)(t)), a = n.getMonth() + 1 < 10 ? "0".concat(n.getMonth() + 1) : "".concat(n.getMonth() + 1), o = n.getDate() < 10 ? "0".concat(n.getDate()) : "".concat(n.getDate());
                if (this.isToday(n)) {
                    var c = "".concat(n.getHours()), r = "".concat(n.getMinutes());
                    return "今天 ".concat(c > 9 ? c : "0" + c, ":").concat(r > 9 ? r : "0" + r);
                }
                if (this.isCurrentYear(n)) return "".concat(a, "-").concat(o);
                var i = "".concat(n.getFullYear());
                return "".concat(i, "-").concat(a, "-").concat(o);
            }
        });
    },
    show: function() {},
    methods: {
        isToday: function(t) {
            return t.toDateString() === new Date().toDateString();
        },
        isCurrentYear: function(t) {
            return t.getFullYear() === new Date().getFullYear();
        }
    }
});