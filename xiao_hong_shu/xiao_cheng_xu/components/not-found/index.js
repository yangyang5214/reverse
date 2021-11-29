var a = require("miniprogram-computed").behavior, e = "https://ci.xiaohongshu.com", c = {
    goods: {
        imageUrl: "".concat(e, "/e3d4990f-d80f-4adb-a2f6-e056c356c916"),
        title: "没有找到相关商品 换个词试试吧"
    },
    notes: {
        imageUrl: "".concat(e, "/e3d4990f-d80f-4adb-a2f6-e056c356c916"),
        title: "没有找到相关笔记 换个词试试吧"
    },
    collect: {
        imageUrl: "".concat(e, "/6f3fecd4-4282-4448-81a6-af6c26dbc10b"),
        title: "还没有收藏任何笔记哦"
    },
    user: {
        imageUrl: "".concat(e, "/5e9cea27-311c-4be3-ae98-05783e142842"),
        title: "没有找到相关用户 换个词试试吧"
    },
    anthor: {
        imageUrl: "".concat(e, "/6f3fecd4-4282-4448-81a6-af6c26dbc10b"),
        title: "还没有笔记哦"
    },
    atTa: {
        imageUrl: "".concat(e, "/ca061265-40ca-4bb5-a76e-85954168165c"),
        title: "还没有@TA的笔记哦"
    },
    collectPrivate: {
        imageUrl: "https://picasso-static.xiaohongshu.com/fe-platform/cacc0ca222eb191c18736a242a51d53faad027fa.png",
        title: "该用户已设置收藏内容不可见"
    }
};

Component({
    behaviors: [ a ],
    properties: {
        type: {
            type: String,
            value: ""
        }
    },
    data: {
        obj: {
            imageUrl: "".concat(e, "/6f3fecd4-4282-4448-81a6-af6c26dbc10b"),
            title: "还没有笔记哦"
        }
    },
    computed: {
        objC: function(a) {
            var e = a.type || "anthor";
            return c[e];
        }
    }
});