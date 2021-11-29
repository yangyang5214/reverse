Component({
    properties: {
        noteList: Array,
        noteTags: Array,
        imageTags: Array,
        navigationBarTrueHeight: String,
        note: Object,
        fetchedRelatedNotes: Boolean,
        isShowSkeleton: Boolean,
        isIphoneX: Boolean,
        illegalInfo: String || Object,
        shareUserId: String,
        isShowShareInfoBar: Boolean,
        swiperHeight: Number
    },
    data: {
        navigationBarConfig: {
            titleText: "笔记详情",
            backgroundColor: "#FFFFFF",
            textStyle: "black"
        }
    }
});