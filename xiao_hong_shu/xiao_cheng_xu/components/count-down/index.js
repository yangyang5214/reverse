var t = require("../../utils/date"), i = require("miniprogram-computed").behavior;

Component({
    behaviors: [ i ],
    properties: {
        timeStamp: {
            type: Number,
            require: !0
        },
        fmt: {
            type: String,
            value: "shortTime"
        },
        interval: {
            type: String,
            value: "1000"
        }
    },
    data: {
        timer: void 0,
        time: void 0,
        endTime: void 0
    },
    watch: {
        timeStamp: function() {
            this.data.endTime = Number(this.data.timeStamp) + new Date().getTime(), this.data.timer && clearInterval(this.data.timer), 
            this.data.timer = setInterval(this.tick.bind(this), Number(this.interval)), setTimeout(this.tick.bind(this), 0);
        }
    },
    ready: function() {
        this.data.timer = setInterval(this.tick.bind(this), Number(this.interval)), setTimeout(this.tick.bind(this), 0);
    },
    methods: {
        invokeTick: function() {
            this.data.endTime = Number(this.data.timeStamp) + new Date().getTime(), this.data.timer && clearInterval(this.data.timer), 
            this.data.timer = setInterval(this.tick.bind(this), Number(this.interval)), setTimeout(this.tick.bind(this), 0);
        },
        getFormatTime: function() {
            var i = +new Date(), e = this.endTime - i;
            return e < 0 && (e = 0), {
                formatTime: (0, t.formatTime)(e, this.fmt, !0),
                delta: e
            };
        },
        tick: function() {
            if (this.endTime) {
                var t = this.getFormatTime();
                this.setData({
                    time: t.formatTime
                }), this.triggerEvent("tick", t), 0 === t.delta && (clearInterval(this.timer), this.triggerEvent("end"));
            } else clearInterval(this.timer);
        },
        clearDownTime: function() {
            clearInterval(this.data.timer);
        }
    }
});