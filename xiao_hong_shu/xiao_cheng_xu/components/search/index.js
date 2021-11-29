Component({
    properties: {
        type: {
            type: String,
            value: "search"
        },
        focus: {
            type: Boolean,
            value: !1
        },
        searchValue: {
            type: String,
            value: ""
        },
        hasSearch: {
            type: Boolean,
            value: !1
        },
        placeHolder: {
            type: String,
            value: ""
        }
    },
    methods: {
        handleInput: function(e) {
            var a = e.detail.value;
            this.data.searchValue = a, this.triggerEvent("handleInput", a);
        },
        handleCancel: function() {
            this.triggerEvent("handleCancel");
        },
        handleFocus: function(e) {
            var a = e.detail.value;
            this.triggerEvent("handleFocus", a);
        },
        handleConfirm: function(e) {
            var a = e.detail.value;
            this.triggerEvent("handleConfirm", a);
        },
        search: function() {
            this.triggerEvent("handleSearch", this.data.searchValue);
        },
        goSearchPage: function() {
            this.triggerEvent("goSearchPage");
        }
    }
});