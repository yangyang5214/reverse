var a = require("../../../../../../utils/path");

Component({
    properties: {
        note: Object
    },
    data: {
        normalImageClass: "",
        gifImageClass: "hide",
        isLazyLoad: !0
    },
    methods: {
        handlGifLoaded: function() {
            this.setData({
                normalImageClass: "hide",
                gifImageClass: ""
            });
        },
        handleNoteItemTap: function() {
            var e = this.data.note || {}, t = e.id, i = (e.objectPosition, e.trackId, e.eagletClick);
            if (t) {
                try {
                    i && wx.$eaglet.push(i);
                } catch (a) {
                    console.error(a);
                }
                (0, a.navigateTo)("NoteDetail", {
                    id: t
                });
            }
        }
    }
});