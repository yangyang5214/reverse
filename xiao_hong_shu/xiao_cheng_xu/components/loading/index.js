var a = require("miniprogram-computed").behavior;

Component({
    behaviors: [ a ],
    properties: {
        type: String,
        text: String
    },
    computed: {
        loadingSrc: function(a) {
            var e = "";
            switch (a.type) {
              case "defeat":
                e = "https://picasso-static.xiaohongshu.com/fe-platform/af21828d74b72af0f13f528c4031457ab6aa44a5.gif";
                break;

              case "red":
                e = "https://picasso-static.xiaohongshu.com/fe-platform/798673d4cfc27421ef20543e1bc70de04b1d4f6f.gif";
                break;

              case "gray":
              default:
                e = "https://picasso-static.xiaohongshu.com/fe-platform/af21828d74b72af0f13f528c4031457ab6aa44a5.gif";
            }
            return e;
        },
        loadingClass: function(a) {
            var e = "";
            switch (a.type) {
              case "defeat":
                e = "loading-defeat";
                break;

              case "red":
                e = "loading-red";
                break;

              case "gray":
                e = "loading-gray";
                break;

              default:
                e = "loading-defeat";
            }
            return e;
        }
    }
});