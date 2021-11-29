var e = require("./google-protobuf"), t = e, r = {}, a = Function("return this")();

t.exportSymbol("proto.ActionInteractionType", null, a), t.exportSymbol("proto.AdsTarget", null, a), 
t.exportSymbol("proto.AdsType", null, a), t.exportSymbol("proto.App", null, a), 
t.exportSymbol("proto.AppOSMode", null, a), t.exportSymbol("proto.AppStartMode", null, a), 
t.exportSymbol("proto.BrandingUserTarget", null, a), t.exportSymbol("proto.Browser", null, a), 
t.exportSymbol("proto.BrowserTarget", null, a), t.exportSymbol("proto.ChannelTabTarget", null, a), 
t.exportSymbol("proto.DanmakuTarget", null, a), t.exportSymbol("proto.Device", null, a), 
t.exportSymbol("proto.Environment", null, a), t.exportSymbol("proto.Event", null, a), 
t.exportSymbol("proto.HeyTarget", null, a), t.exportSymbol("proto.Index", null, a), 
t.exportSymbol("proto.LiveTarget", null, a), t.exportSymbol("proto.LoginRole", null, a), 
t.exportSymbol("proto.MallBannerTarget", null, a), t.exportSymbol("proto.MallCouponTarget", null, a), 
t.exportSymbol("proto.MallGoodsTarget", null, a), t.exportSymbol("proto.MallUserType", null, a), 
t.exportSymbol("proto.MallVendorTarget", null, a), t.exportSymbol("proto.Mobile", null, a), 
t.exportSymbol("proto.NameTracker", null, a), t.exportSymbol("proto.Network", null, a), 
t.exportSymbol("proto.NetworkType", null, a), t.exportSymbol("proto.NormalizedAction", null, a), 
t.exportSymbol("proto.NoteCommentTarget", null, a), t.exportSymbol("proto.NoteSortType", null, a), 
t.exportSymbol("proto.NoteTarget", null, a), t.exportSymbol("proto.NoteType", null, a), 
t.exportSymbol("proto.Page", null, a), t.exportSymbol("proto.PageInstance", null, a), 
t.exportSymbol("proto.PageLoadType", null, a), t.exportSymbol("proto.Platform", null, a), 
t.exportSymbol("proto.ReportTarget", null, a), t.exportSymbol("proto.RichTargetType", null, a), 
t.exportSymbol("proto.SearchTarget", null, a), t.exportSymbol("proto.SearchWordFrom", null, a), 
t.exportSymbol("proto.TargetDisplayType", null, a), t.exportSymbol("proto.Tracker", null, a), 
t.exportSymbol("proto.User", null, a), t.exportSymbol("proto.UserTarget", null, a), 
t.exportSymbol("proto.VideoPlaySource", null, a), r.Network = function(t) {
    e.Message.initialize(this, t, 0, -1, null, null);
}, t.inherits(r.Network, e.Message), t.DEBUG && !COMPILED && (r.Network.displayName = "proto.Network"), 
e.Message.GENERATE_TO_OBJECT && (r.Network.prototype.toObject = function(e) {
    return r.Network.toObject(e, this);
}, r.Network.toObject = function(t, r) {
    var a = {
        networkType: e.Message.getFieldWithDefault(r, 1, 0),
        ispName: e.Message.getFieldWithDefault(r, 2, ""),
        isFreeSim: e.Message.getFieldWithDefault(r, 3, !1),
        wifiName: e.Message.getFieldWithDefault(r, 4, "")
    };
    return t && (a.$jspbMessageInstance = r), a;
}), r.Network.deserializeBinary = function(t) {
    var a = new e.BinaryReader(t), i = new r.Network();
    return r.Network.deserializeBinaryFromReader(i, a);
}, r.Network.deserializeBinaryFromReader = function(e, t) {
    for (;t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 1:
            var r = t.readEnum();
            e.setNetworkType(r);
            break;

          case 2:
            r = t.readString();
            e.setIspName(r);
            break;

          case 3:
            r = t.readBool();
            e.setIsFreeSim(r);
            break;

          case 4:
            r = t.readString();
            e.setWifiName(r);
            break;

          default:
            t.skipField();
        }
    }
    return e;
}, r.Network.prototype.serializeBinary = function() {
    var t = new e.BinaryWriter();
    return r.Network.serializeBinaryToWriter(this, t), t.getResultBuffer();
}, r.Network.serializeBinaryToWriter = function(e, t) {
    var r = void 0;
    0 !== (r = e.getNetworkType()) && t.writeEnum(1, r), (r = e.getIspName()).length > 0 && t.writeString(2, r), 
    (r = e.getIsFreeSim()) && t.writeBool(3, r), (r = e.getWifiName()).length > 0 && t.writeString(4, r);
}, r.Network.prototype.getNetworkType = function() {
    return e.Message.getFieldWithDefault(this, 1, 0);
}, r.Network.prototype.setNetworkType = function(t) {
    e.Message.setField(this, 1, t);
}, r.Network.prototype.getIspName = function() {
    return e.Message.getFieldWithDefault(this, 2, "");
}, r.Network.prototype.setIspName = function(t) {
    e.Message.setField(this, 2, t);
}, r.Network.prototype.getIsFreeSim = function() {
    return e.Message.getFieldWithDefault(this, 3, !1);
}, r.Network.prototype.setIsFreeSim = function(t) {
    e.Message.setField(this, 3, t);
}, r.Network.prototype.getWifiName = function() {
    return e.Message.getFieldWithDefault(this, 4, "");
}, r.Network.prototype.setWifiName = function(t) {
    e.Message.setField(this, 4, t);
}, r.BrandingUserTarget = function(t) {
    e.Message.initialize(this, t, 0, -1, null, null);
}, t.inherits(r.BrandingUserTarget, e.Message), t.DEBUG && !COMPILED && (r.BrandingUserTarget.displayName = "proto.BrandingUserTarget"), 
e.Message.GENERATE_TO_OBJECT && (r.BrandingUserTarget.prototype.toObject = function(e) {
    return r.BrandingUserTarget.toObject(e, this);
}, r.BrandingUserTarget.toObject = function(t, r) {
    var a = {
        userId: e.Message.getFieldWithDefault(r, 1, ""),
        fansCount: e.Message.getFieldWithDefault(r, 3, 0),
        ownNotesCount: e.Message.getFieldWithDefault(r, 6, 0)
    };
    return t && (a.$jspbMessageInstance = r), a;
}), r.BrandingUserTarget.deserializeBinary = function(t) {
    var a = new e.BinaryReader(t), i = new r.BrandingUserTarget();
    return r.BrandingUserTarget.deserializeBinaryFromReader(i, a);
}, r.BrandingUserTarget.deserializeBinaryFromReader = function(e, t) {
    for (;t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 1:
            var r = t.readString();
            e.setUserId(r);
            break;

          case 3:
            r = t.readInt32();
            e.setFansCount(r);
            break;

          case 6:
            r = t.readInt32();
            e.setOwnNotesCount(r);
            break;

          default:
            t.skipField();
        }
    }
    return e;
}, r.BrandingUserTarget.prototype.serializeBinary = function() {
    var t = new e.BinaryWriter();
    return r.BrandingUserTarget.serializeBinaryToWriter(this, t), t.getResultBuffer();
}, r.BrandingUserTarget.serializeBinaryToWriter = function(e, t) {
    var r = void 0;
    (r = e.getUserId()).length > 0 && t.writeString(1, r), 0 !== (r = e.getFansCount()) && t.writeInt32(3, r), 
    0 !== (r = e.getOwnNotesCount()) && t.writeInt32(6, r);
}, r.BrandingUserTarget.prototype.getUserId = function() {
    return e.Message.getFieldWithDefault(this, 1, "");
}, r.BrandingUserTarget.prototype.setUserId = function(t) {
    e.Message.setField(this, 1, t);
}, r.BrandingUserTarget.prototype.getFansCount = function() {
    return e.Message.getFieldWithDefault(this, 3, 0);
}, r.BrandingUserTarget.prototype.setFansCount = function(t) {
    e.Message.setField(this, 3, t);
}, r.BrandingUserTarget.prototype.getOwnNotesCount = function() {
    return e.Message.getFieldWithDefault(this, 6, 0);
}, r.BrandingUserTarget.prototype.setOwnNotesCount = function(t) {
    e.Message.setField(this, 6, t);
}, r.MallCouponTarget = function(t) {
    e.Message.initialize(this, t, 0, -1, null, null);
}, t.inherits(r.MallCouponTarget, e.Message), t.DEBUG && !COMPILED && (r.MallCouponTarget.displayName = "proto.MallCouponTarget"), 
e.Message.GENERATE_TO_OBJECT && (r.MallCouponTarget.prototype.toObject = function(e) {
    return r.MallCouponTarget.toObject(e, this);
}, r.MallCouponTarget.toObject = function(t, r) {
    var a = {
        trackId: e.Message.getFieldWithDefault(r, 3, "")
    };
    return t && (a.$jspbMessageInstance = r), a;
}), r.MallCouponTarget.deserializeBinary = function(t) {
    var a = new e.BinaryReader(t), i = new r.MallCouponTarget();
    return r.MallCouponTarget.deserializeBinaryFromReader(i, a);
}, r.MallCouponTarget.deserializeBinaryFromReader = function(e, t) {
    for (;t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 3:
            var r = t.readString();
            e.setTrackId(r);
            break;

          default:
            t.skipField();
        }
    }
    return e;
}, r.MallCouponTarget.prototype.serializeBinary = function() {
    var t = new e.BinaryWriter();
    return r.MallCouponTarget.serializeBinaryToWriter(this, t), t.getResultBuffer();
}, r.MallCouponTarget.serializeBinaryToWriter = function(e, t) {
    var r;
    (r = e.getTrackId()).length > 0 && t.writeString(3, r);
}, r.MallCouponTarget.prototype.getTrackId = function() {
    return e.Message.getFieldWithDefault(this, 3, "");
}, r.MallCouponTarget.prototype.setTrackId = function(t) {
    e.Message.setField(this, 3, t);
}, r.Tracker = function(t) {
    e.Message.initialize(this, t, 0, -1, null, null);
}, t.inherits(r.Tracker, e.Message), t.DEBUG && !COMPILED && (r.Tracker.displayName = "proto.Tracker"), 
e.Message.GENERATE_TO_OBJECT && (r.Tracker.prototype.toObject = function(e) {
    return r.Tracker.toObject(e, this);
}, r.Tracker.toObject = function(e, t) {
    var a, i = {
        app: (a = t.getApp()) && r.App.toObject(e, a),
        mob: (a = t.getMob()) && r.Mobile.toObject(e, a),
        dvc: (a = t.getDvc()) && r.Device.toObject(e, a),
        user: (a = t.getUser()) && r.User.toObject(e, a),
        network: (a = t.getNetwork()) && r.Network.toObject(e, a),
        page: (a = t.getPage()) && r.Page.toObject(e, a),
        event: (a = t.getEvent()) && r.Event.toObject(e, a),
        index: (a = t.getIndex()) && r.Index.toObject(e, a),
        browser: (a = t.getBrowser()) && r.Browser.toObject(e, a),
        noteTarget: (a = t.getNoteTarget()) && r.NoteTarget.toObject(e, a),
        noteCommentTarget: (a = t.getNoteCommentTarget()) && r.NoteCommentTarget.toObject(e, a),
        userTarget: (a = t.getUserTarget()) && r.UserTarget.toObject(e, a),
        mallBannerTarget: (a = t.getMallBannerTarget()) && r.MallBannerTarget.toObject(e, a),
        mallGoodsTarget: (a = t.getMallGoodsTarget()) && r.MallGoodsTarget.toObject(e, a),
        mallVendorTarget: (a = t.getMallVendorTarget()) && r.MallVendorTarget.toObject(e, a),
        mallCouponTarget: (a = t.getMallCouponTarget()) && r.MallCouponTarget.toObject(e, a),
        searchTarget: (a = t.getSearchTarget()) && r.SearchTarget.toObject(e, a),
        brandingUserTarget: (a = t.getBrandingUserTarget()) && r.BrandingUserTarget.toObject(e, a),
        channelTabTarget: (a = t.getChannelTabTarget()) && r.ChannelTabTarget.toObject(e, a),
        adsTarget: (a = t.getAdsTarget()) && r.AdsTarget.toObject(e, a),
        heyTarget: (a = t.getHeyTarget()) && r.HeyTarget.toObject(e, a),
        liveTarget: (a = t.getLiveTarget()) && r.LiveTarget.toObject(e, a),
        browserTarget: (a = t.getBrowserTarget()) && r.BrowserTarget.toObject(e, a),
        danmakuTarget: (a = t.getDanmakuTarget()) && r.DanmakuTarget.toObject(e, a),
        reportTarget: (a = t.getReportTarget()) && r.ReportTarget.toObject(e, a)
    };
    return e && (i.$jspbMessageInstance = t), i;
}), r.Tracker.deserializeBinary = function(t) {
    var a = new e.BinaryReader(t), i = new r.Tracker();
    return r.Tracker.deserializeBinaryFromReader(i, a);
}, r.Tracker.deserializeBinaryFromReader = function(e, t) {
    for (;t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 1:
            var a = new r.App();
            t.readMessage(a, r.App.deserializeBinaryFromReader), e.setApp(a);
            break;

          case 2:
            a = new r.Mobile();
            t.readMessage(a, r.Mobile.deserializeBinaryFromReader), e.setMob(a);
            break;

          case 3:
            a = new r.Device();
            t.readMessage(a, r.Device.deserializeBinaryFromReader), e.setDvc(a);
            break;

          case 4:
            a = new r.User();
            t.readMessage(a, r.User.deserializeBinaryFromReader), e.setUser(a);
            break;

          case 5:
            a = new r.Network();
            t.readMessage(a, r.Network.deserializeBinaryFromReader), e.setNetwork(a);
            break;

          case 6:
            a = new r.Page();
            t.readMessage(a, r.Page.deserializeBinaryFromReader), e.setPage(a);
            break;

          case 7:
            a = new r.Event();
            t.readMessage(a, r.Event.deserializeBinaryFromReader), e.setEvent(a);
            break;

          case 8:
            a = new r.Index();
            t.readMessage(a, r.Index.deserializeBinaryFromReader), e.setIndex(a);
            break;

          case 9:
            a = new r.Browser();
            t.readMessage(a, r.Browser.deserializeBinaryFromReader), e.setBrowser(a);
            break;

          case 11:
            a = new r.NoteTarget();
            t.readMessage(a, r.NoteTarget.deserializeBinaryFromReader), e.setNoteTarget(a);
            break;

          case 12:
            a = new r.NoteCommentTarget();
            t.readMessage(a, r.NoteCommentTarget.deserializeBinaryFromReader), e.setNoteCommentTarget(a);
            break;

          case 14:
            a = new r.UserTarget();
            t.readMessage(a, r.UserTarget.deserializeBinaryFromReader), e.setUserTarget(a);
            break;

          case 15:
            a = new r.MallBannerTarget();
            t.readMessage(a, r.MallBannerTarget.deserializeBinaryFromReader), e.setMallBannerTarget(a);
            break;

          case 16:
            a = new r.MallGoodsTarget();
            t.readMessage(a, r.MallGoodsTarget.deserializeBinaryFromReader), e.setMallGoodsTarget(a);
            break;

          case 17:
            a = new r.MallVendorTarget();
            t.readMessage(a, r.MallVendorTarget.deserializeBinaryFromReader), e.setMallVendorTarget(a);
            break;

          case 18:
            a = new r.MallCouponTarget();
            t.readMessage(a, r.MallCouponTarget.deserializeBinaryFromReader), e.setMallCouponTarget(a);
            break;

          case 30:
            a = new r.SearchTarget();
            t.readMessage(a, r.SearchTarget.deserializeBinaryFromReader), e.setSearchTarget(a);
            break;

          case 40:
            a = new r.BrandingUserTarget();
            t.readMessage(a, r.BrandingUserTarget.deserializeBinaryFromReader), e.setBrandingUserTarget(a);
            break;

          case 100:
            a = new r.ChannelTabTarget();
            t.readMessage(a, r.ChannelTabTarget.deserializeBinaryFromReader), e.setChannelTabTarget(a);
            break;

          case 152:
            a = new r.AdsTarget();
            t.readMessage(a, r.AdsTarget.deserializeBinaryFromReader), e.setAdsTarget(a);
            break;

          case 153:
            a = new r.HeyTarget();
            t.readMessage(a, r.HeyTarget.deserializeBinaryFromReader), e.setHeyTarget(a);
            break;

          case 164:
            a = new r.LiveTarget();
            t.readMessage(a, r.LiveTarget.deserializeBinaryFromReader), e.setLiveTarget(a);
            break;

          case 51:
            a = new r.BrowserTarget();
            t.readMessage(a, r.BrowserTarget.deserializeBinaryFromReader), e.setBrowserTarget(a);
            break;

          case 196:
            a = new r.DanmakuTarget();
            t.readMessage(a, r.DanmakuTarget.deserializeBinaryFromReader), e.setDanmakuTarget(a);
            break;

          case 207:
            a = new r.ReportTarget();
            t.readMessage(a, r.ReportTarget.deserializeBinaryFromReader), e.setReportTarget(a);
            break;

          default:
            t.skipField();
        }
    }
    return e;
}, r.Tracker.prototype.serializeBinary = function() {
    var t = new e.BinaryWriter();
    return r.Tracker.serializeBinaryToWriter(this, t), t.getResultBuffer();
}, r.Tracker.serializeBinaryToWriter = function(e, t) {
    var a = void 0;
    null != (a = e.getApp()) && t.writeMessage(1, a, r.App.serializeBinaryToWriter), 
    null != (a = e.getMob()) && t.writeMessage(2, a, r.Mobile.serializeBinaryToWriter), 
    null != (a = e.getDvc()) && t.writeMessage(3, a, r.Device.serializeBinaryToWriter), 
    null != (a = e.getUser()) && t.writeMessage(4, a, r.User.serializeBinaryToWriter), 
    null != (a = e.getNetwork()) && t.writeMessage(5, a, r.Network.serializeBinaryToWriter), 
    null != (a = e.getPage()) && t.writeMessage(6, a, r.Page.serializeBinaryToWriter), 
    null != (a = e.getEvent()) && t.writeMessage(7, a, r.Event.serializeBinaryToWriter), 
    null != (a = e.getIndex()) && t.writeMessage(8, a, r.Index.serializeBinaryToWriter), 
    null != (a = e.getBrowser()) && t.writeMessage(9, a, r.Browser.serializeBinaryToWriter), 
    null != (a = e.getNoteTarget()) && t.writeMessage(11, a, r.NoteTarget.serializeBinaryToWriter), 
    null != (a = e.getNoteCommentTarget()) && t.writeMessage(12, a, r.NoteCommentTarget.serializeBinaryToWriter), 
    null != (a = e.getUserTarget()) && t.writeMessage(14, a, r.UserTarget.serializeBinaryToWriter), 
    null != (a = e.getMallBannerTarget()) && t.writeMessage(15, a, r.MallBannerTarget.serializeBinaryToWriter), 
    null != (a = e.getMallGoodsTarget()) && t.writeMessage(16, a, r.MallGoodsTarget.serializeBinaryToWriter), 
    null != (a = e.getMallVendorTarget()) && t.writeMessage(17, a, r.MallVendorTarget.serializeBinaryToWriter), 
    null != (a = e.getMallCouponTarget()) && t.writeMessage(18, a, r.MallCouponTarget.serializeBinaryToWriter), 
    null != (a = e.getSearchTarget()) && t.writeMessage(30, a, r.SearchTarget.serializeBinaryToWriter), 
    null != (a = e.getBrandingUserTarget()) && t.writeMessage(40, a, r.BrandingUserTarget.serializeBinaryToWriter), 
    null != (a = e.getChannelTabTarget()) && t.writeMessage(100, a, r.ChannelTabTarget.serializeBinaryToWriter), 
    null != (a = e.getAdsTarget()) && t.writeMessage(152, a, r.AdsTarget.serializeBinaryToWriter), 
    null != (a = e.getHeyTarget()) && t.writeMessage(153, a, r.HeyTarget.serializeBinaryToWriter), 
    null != (a = e.getLiveTarget()) && t.writeMessage(164, a, r.LiveTarget.serializeBinaryToWriter), 
    null != (a = e.getBrowserTarget()) && t.writeMessage(51, a, r.BrowserTarget.serializeBinaryToWriter), 
    null != (a = e.getDanmakuTarget()) && t.writeMessage(196, a, r.DanmakuTarget.serializeBinaryToWriter), 
    null != (a = e.getReportTarget()) && t.writeMessage(207, a, r.ReportTarget.serializeBinaryToWriter);
}, r.Tracker.prototype.getApp = function() {
    return e.Message.getWrapperField(this, r.App, 1);
}, r.Tracker.prototype.setApp = function(t) {
    e.Message.setWrapperField(this, 1, t);
}, r.Tracker.prototype.clearApp = function() {
    this.setApp(void 0);
}, r.Tracker.prototype.hasApp = function() {
    return null != e.Message.getField(this, 1);
}, r.Tracker.prototype.getMob = function() {
    return e.Message.getWrapperField(this, r.Mobile, 2);
}, r.Tracker.prototype.setMob = function(t) {
    e.Message.setWrapperField(this, 2, t);
}, r.Tracker.prototype.clearMob = function() {
    this.setMob(void 0);
}, r.Tracker.prototype.hasMob = function() {
    return null != e.Message.getField(this, 2);
}, r.Tracker.prototype.getDvc = function() {
    return e.Message.getWrapperField(this, r.Device, 3);
}, r.Tracker.prototype.setDvc = function(t) {
    e.Message.setWrapperField(this, 3, t);
}, r.Tracker.prototype.clearDvc = function() {
    this.setDvc(void 0);
}, r.Tracker.prototype.hasDvc = function() {
    return null != e.Message.getField(this, 3);
}, r.Tracker.prototype.getUser = function() {
    return e.Message.getWrapperField(this, r.User, 4);
}, r.Tracker.prototype.setUser = function(t) {
    e.Message.setWrapperField(this, 4, t);
}, r.Tracker.prototype.clearUser = function() {
    this.setUser(void 0);
}, r.Tracker.prototype.hasUser = function() {
    return null != e.Message.getField(this, 4);
}, r.Tracker.prototype.getNetwork = function() {
    return e.Message.getWrapperField(this, r.Network, 5);
}, r.Tracker.prototype.setNetwork = function(t) {
    e.Message.setWrapperField(this, 5, t);
}, r.Tracker.prototype.clearNetwork = function() {
    this.setNetwork(void 0);
}, r.Tracker.prototype.hasNetwork = function() {
    return null != e.Message.getField(this, 5);
}, r.Tracker.prototype.getPage = function() {
    return e.Message.getWrapperField(this, r.Page, 6);
}, r.Tracker.prototype.setPage = function(t) {
    e.Message.setWrapperField(this, 6, t);
}, r.Tracker.prototype.clearPage = function() {
    this.setPage(void 0);
}, r.Tracker.prototype.hasPage = function() {
    return null != e.Message.getField(this, 6);
}, r.Tracker.prototype.getEvent = function() {
    return e.Message.getWrapperField(this, r.Event, 7);
}, r.Tracker.prototype.setEvent = function(t) {
    e.Message.setWrapperField(this, 7, t);
}, r.Tracker.prototype.clearEvent = function() {
    this.setEvent(void 0);
}, r.Tracker.prototype.hasEvent = function() {
    return null != e.Message.getField(this, 7);
}, r.Tracker.prototype.getIndex = function() {
    return e.Message.getWrapperField(this, r.Index, 8);
}, r.Tracker.prototype.setIndex = function(t) {
    e.Message.setWrapperField(this, 8, t);
}, r.Tracker.prototype.clearIndex = function() {
    this.setIndex(void 0);
}, r.Tracker.prototype.hasIndex = function() {
    return null != e.Message.getField(this, 8);
}, r.Tracker.prototype.getBrowser = function() {
    return e.Message.getWrapperField(this, r.Browser, 9);
}, r.Tracker.prototype.setBrowser = function(t) {
    e.Message.setWrapperField(this, 9, t);
}, r.Tracker.prototype.clearBrowser = function() {
    this.setBrowser(void 0);
}, r.Tracker.prototype.hasBrowser = function() {
    return null != e.Message.getField(this, 9);
}, r.Tracker.prototype.getNoteTarget = function() {
    return e.Message.getWrapperField(this, r.NoteTarget, 11);
}, r.Tracker.prototype.setNoteTarget = function(t) {
    e.Message.setWrapperField(this, 11, t);
}, r.Tracker.prototype.clearNoteTarget = function() {
    this.setNoteTarget(void 0);
}, r.Tracker.prototype.hasNoteTarget = function() {
    return null != e.Message.getField(this, 11);
}, r.Tracker.prototype.getNoteCommentTarget = function() {
    return e.Message.getWrapperField(this, r.NoteCommentTarget, 12);
}, r.Tracker.prototype.setNoteCommentTarget = function(t) {
    e.Message.setWrapperField(this, 12, t);
}, r.Tracker.prototype.clearNoteCommentTarget = function() {
    this.setNoteCommentTarget(void 0);
}, r.Tracker.prototype.hasNoteCommentTarget = function() {
    return null != e.Message.getField(this, 12);
}, r.Tracker.prototype.getUserTarget = function() {
    return e.Message.getWrapperField(this, r.UserTarget, 14);
}, r.Tracker.prototype.setUserTarget = function(t) {
    e.Message.setWrapperField(this, 14, t);
}, r.Tracker.prototype.clearUserTarget = function() {
    this.setUserTarget(void 0);
}, r.Tracker.prototype.hasUserTarget = function() {
    return null != e.Message.getField(this, 14);
}, r.Tracker.prototype.getMallBannerTarget = function() {
    return e.Message.getWrapperField(this, r.MallBannerTarget, 15);
}, r.Tracker.prototype.setMallBannerTarget = function(t) {
    e.Message.setWrapperField(this, 15, t);
}, r.Tracker.prototype.clearMallBannerTarget = function() {
    this.setMallBannerTarget(void 0);
}, r.Tracker.prototype.hasMallBannerTarget = function() {
    return null != e.Message.getField(this, 15);
}, r.Tracker.prototype.getMallGoodsTarget = function() {
    return e.Message.getWrapperField(this, r.MallGoodsTarget, 16);
}, r.Tracker.prototype.setMallGoodsTarget = function(t) {
    e.Message.setWrapperField(this, 16, t);
}, r.Tracker.prototype.clearMallGoodsTarget = function() {
    this.setMallGoodsTarget(void 0);
}, r.Tracker.prototype.hasMallGoodsTarget = function() {
    return null != e.Message.getField(this, 16);
}, r.Tracker.prototype.getMallVendorTarget = function() {
    return e.Message.getWrapperField(this, r.MallVendorTarget, 17);
}, r.Tracker.prototype.setMallVendorTarget = function(t) {
    e.Message.setWrapperField(this, 17, t);
}, r.Tracker.prototype.clearMallVendorTarget = function() {
    this.setMallVendorTarget(void 0);
}, r.Tracker.prototype.hasMallVendorTarget = function() {
    return null != e.Message.getField(this, 17);
}, r.Tracker.prototype.getMallCouponTarget = function() {
    return e.Message.getWrapperField(this, r.MallCouponTarget, 18);
}, r.Tracker.prototype.setMallCouponTarget = function(t) {
    e.Message.setWrapperField(this, 18, t);
}, r.Tracker.prototype.clearMallCouponTarget = function() {
    this.setMallCouponTarget(void 0);
}, r.Tracker.prototype.hasMallCouponTarget = function() {
    return null != e.Message.getField(this, 18);
}, r.Tracker.prototype.getSearchTarget = function() {
    return e.Message.getWrapperField(this, r.SearchTarget, 30);
}, r.Tracker.prototype.setSearchTarget = function(t) {
    e.Message.setWrapperField(this, 30, t);
}, r.Tracker.prototype.clearSearchTarget = function() {
    this.setSearchTarget(void 0);
}, r.Tracker.prototype.hasSearchTarget = function() {
    return null != e.Message.getField(this, 30);
}, r.Tracker.prototype.getBrandingUserTarget = function() {
    return e.Message.getWrapperField(this, r.BrandingUserTarget, 40);
}, r.Tracker.prototype.setBrandingUserTarget = function(t) {
    e.Message.setWrapperField(this, 40, t);
}, r.Tracker.prototype.clearBrandingUserTarget = function() {
    this.setBrandingUserTarget(void 0);
}, r.Tracker.prototype.hasBrandingUserTarget = function() {
    return null != e.Message.getField(this, 40);
}, r.Tracker.prototype.getChannelTabTarget = function() {
    return e.Message.getWrapperField(this, r.ChannelTabTarget, 100);
}, r.Tracker.prototype.setChannelTabTarget = function(t) {
    e.Message.setWrapperField(this, 100, t);
}, r.Tracker.prototype.clearChannelTabTarget = function() {
    this.setChannelTabTarget(void 0);
}, r.Tracker.prototype.hasChannelTabTarget = function() {
    return null != e.Message.getField(this, 100);
}, r.Tracker.prototype.getAdsTarget = function() {
    return e.Message.getWrapperField(this, r.AdsTarget, 152);
}, r.Tracker.prototype.setAdsTarget = function(t) {
    e.Message.setWrapperField(this, 152, t);
}, r.Tracker.prototype.clearAdsTarget = function() {
    this.setAdsTarget(void 0);
}, r.Tracker.prototype.hasAdsTarget = function() {
    return null != e.Message.getField(this, 152);
}, r.Tracker.prototype.getHeyTarget = function() {
    return e.Message.getWrapperField(this, r.HeyTarget, 153);
}, r.Tracker.prototype.setHeyTarget = function(t) {
    e.Message.setWrapperField(this, 153, t);
}, r.Tracker.prototype.clearHeyTarget = function() {
    this.setHeyTarget(void 0);
}, r.Tracker.prototype.hasHeyTarget = function() {
    return null != e.Message.getField(this, 153);
}, r.Tracker.prototype.getLiveTarget = function() {
    return e.Message.getWrapperField(this, r.LiveTarget, 164);
}, r.Tracker.prototype.setLiveTarget = function(t) {
    e.Message.setWrapperField(this, 164, t);
}, r.Tracker.prototype.clearLiveTarget = function() {
    this.setLiveTarget(void 0);
}, r.Tracker.prototype.hasLiveTarget = function() {
    return null != e.Message.getField(this, 164);
}, r.Tracker.prototype.getBrowserTarget = function() {
    return e.Message.getWrapperField(this, r.BrowserTarget, 51);
}, r.Tracker.prototype.setBrowserTarget = function(t) {
    e.Message.setWrapperField(this, 51, t);
}, r.Tracker.prototype.clearBrowserTarget = function() {
    this.setBrowserTarget(void 0);
}, r.Tracker.prototype.hasBrowserTarget = function() {
    return null != e.Message.getField(this, 51);
}, r.Tracker.prototype.getDanmakuTarget = function() {
    return e.Message.getWrapperField(this, r.DanmakuTarget, 196);
}, r.Tracker.prototype.setDanmakuTarget = function(t) {
    e.Message.setWrapperField(this, 196, t);
}, r.Tracker.prototype.clearDanmakuTarget = function() {
    this.setDanmakuTarget(void 0);
}, r.Tracker.prototype.hasDanmakuTarget = function() {
    return null != e.Message.getField(this, 196);
}, r.Tracker.prototype.getReportTarget = function() {
    return e.Message.getWrapperField(this, r.ReportTarget, 207);
}, r.Tracker.prototype.setReportTarget = function(t) {
    e.Message.setWrapperField(this, 207, t);
}, r.Tracker.prototype.clearReportTarget = function() {
    this.setReportTarget(void 0);
}, r.Tracker.prototype.hasReportTarget = function() {
    return null != e.Message.getField(this, 207);
}, r.UserTarget = function(t) {
    e.Message.initialize(this, t, 0, -1, null, null);
}, t.inherits(r.UserTarget, e.Message), t.DEBUG && !COMPILED && (r.UserTarget.displayName = "proto.UserTarget"), 
e.Message.GENERATE_TO_OBJECT && (r.UserTarget.prototype.toObject = function(e) {
    return r.UserTarget.toObject(e, this);
}, r.UserTarget.toObject = function(t, r) {
    var a = {
        userId: e.Message.getFieldWithDefault(r, 1, ""),
        trackId: e.Message.getFieldWithDefault(r, 3, ""),
        isSearchCustomized: e.Message.getFieldWithDefault(r, 11, !1)
    };
    return t && (a.$jspbMessageInstance = r), a;
}), r.UserTarget.deserializeBinary = function(t) {
    var a = new e.BinaryReader(t), i = new r.UserTarget();
    return r.UserTarget.deserializeBinaryFromReader(i, a);
}, r.UserTarget.deserializeBinaryFromReader = function(e, t) {
    for (;t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 1:
            var r = t.readString();
            e.setUserId(r);
            break;

          case 3:
            r = t.readString();
            e.setTrackId(r);
            break;

          case 11:
            r = t.readBool();
            e.setIsSearchCustomized(r);
            break;

          default:
            t.skipField();
        }
    }
    return e;
}, r.UserTarget.prototype.serializeBinary = function() {
    var t = new e.BinaryWriter();
    return r.UserTarget.serializeBinaryToWriter(this, t), t.getResultBuffer();
}, r.UserTarget.serializeBinaryToWriter = function(e, t) {
    var r = void 0;
    (r = e.getUserId()).length > 0 && t.writeString(1, r), (r = e.getTrackId()).length > 0 && t.writeString(3, r), 
    (r = e.getIsSearchCustomized()) && t.writeBool(11, r);
}, r.UserTarget.prototype.getUserId = function() {
    return e.Message.getFieldWithDefault(this, 1, "");
}, r.UserTarget.prototype.setUserId = function(t) {
    e.Message.setField(this, 1, t);
}, r.UserTarget.prototype.getTrackId = function() {
    return e.Message.getFieldWithDefault(this, 3, "");
}, r.UserTarget.prototype.setTrackId = function(t) {
    e.Message.setField(this, 3, t);
}, r.UserTarget.prototype.getIsSearchCustomized = function() {
    return e.Message.getFieldWithDefault(this, 11, !1);
}, r.UserTarget.prototype.setIsSearchCustomized = function(t) {
    e.Message.setField(this, 11, t);
}, r.User = function(t) {
    e.Message.initialize(this, t, 0, -1, r.User.repeatedFields_, null);
}, t.inherits(r.User, e.Message), t.DEBUG && !COMPILED && (r.User.displayName = "proto.User"), 
r.User.repeatedFields_ = [ 5 ], e.Message.GENERATE_TO_OBJECT && (r.User.prototype.toObject = function(e) {
    return r.User.toObject(e, this);
}, r.User.toObject = function(t, r) {
    var a = {
        userId: e.Message.getFieldWithDefault(r, 1, ""),
        hashUserId: e.Message.getFieldWithDefault(r, 2, ""),
        lat: +e.Message.getFieldWithDefault(r, 3, 0),
        lon: +e.Message.getFieldWithDefault(r, 4, 0),
        expList: e.Message.getRepeatedField(r, 5),
        expConfigVersion: e.Message.getFieldWithDefault(r, 6, ""),
        wxOpenid: e.Message.getFieldWithDefault(r, 7, ""),
        mallUserType: e.Message.getFieldWithDefault(r, 11, 0),
        isMallMember: e.Message.getFieldWithDefault(r, 12, !1),
        loginRole: e.Message.getFieldWithDefault(r, 13, 0),
        mpIsAppUser: e.Message.getFieldWithDefault(r, 14, !1),
        mpIsNewMpUser: e.Message.getFieldWithDefault(r, 15, !1),
        expV3: r.getExpV3_asB64(),
        expV4: e.Message.getFieldWithDefault(r, 9, ""),
        isPhone: e.Message.getFieldWithDefault(r, 16, !1),
        loginUserType: e.Message.getFieldWithDefault(r, 17, ""),
        wxUnionid: e.Message.getFieldWithDefault(r, 18, "")
    };
    return t && (a.$jspbMessageInstance = r), a;
}), r.User.deserializeBinary = function(t) {
    var a = new e.BinaryReader(t), i = new r.User();
    return r.User.deserializeBinaryFromReader(i, a);
}, r.User.deserializeBinaryFromReader = function(e, t) {
    for (;t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 1:
            var r = t.readString();
            e.setUserId(r);
            break;

          case 2:
            r = t.readString();
            e.setHashUserId(r);
            break;

          case 3:
            r = t.readDouble();
            e.setLat(r);
            break;

          case 4:
            r = t.readDouble();
            e.setLon(r);
            break;

          case 5:
            r = t.readString();
            e.addExp(r);
            break;

          case 6:
            r = t.readString();
            e.setExpConfigVersion(r);
            break;

          case 7:
            r = t.readString();
            e.setWxOpenid(r);
            break;

          case 11:
            r = t.readEnum();
            e.setMallUserType(r);
            break;

          case 12:
            r = t.readBool();
            e.setIsMallMember(r);
            break;

          case 13:
            r = t.readEnum();
            e.setLoginRole(r);
            break;

          case 14:
            r = t.readBool();
            e.setMpIsAppUser(r);
            break;

          case 15:
            r = t.readBool();
            e.setMpIsNewMpUser(r);
            break;

          case 8:
            r = t.readBytes();
            e.setExpV3(r);
            break;

          case 9:
            r = t.readString();
            e.setExpV4(r);
            break;

          case 16:
            r = t.readBool();
            e.setIsPhone(r);
            break;

          case 17:
            r = t.readString();
            e.setLoginUserType(r);
            break;

          case 18:
            r = t.readString();
            e.setWxUnionid(r);
            break;

          default:
            t.skipField();
        }
    }
    return e;
}, r.User.prototype.serializeBinary = function() {
    var t = new e.BinaryWriter();
    return r.User.serializeBinaryToWriter(this, t), t.getResultBuffer();
}, r.User.serializeBinaryToWriter = function(e, t) {
    var r = void 0;
    (r = e.getUserId()).length > 0 && t.writeString(1, r), (r = e.getHashUserId()).length > 0 && t.writeString(2, r), 
    0 !== (r = e.getLat()) && t.writeDouble(3, r), 0 !== (r = e.getLon()) && t.writeDouble(4, r), 
    (r = e.getExpList()).length > 0 && t.writeRepeatedString(5, r), (r = e.getExpConfigVersion()).length > 0 && t.writeString(6, r), 
    (r = e.getWxOpenid()).length > 0 && t.writeString(7, r), 0 !== (r = e.getMallUserType()) && t.writeEnum(11, r), 
    (r = e.getIsMallMember()) && t.writeBool(12, r), 0 !== (r = e.getLoginRole()) && t.writeEnum(13, r), 
    (r = e.getMpIsAppUser()) && t.writeBool(14, r), (r = e.getMpIsNewMpUser()) && t.writeBool(15, r), 
    (r = e.getExpV3_asU8()).length > 0 && t.writeBytes(8, r), (r = e.getExpV4()).length > 0 && t.writeString(9, r), 
    (r = e.getIsPhone()) && t.writeBool(16, r), (r = e.getLoginUserType()).length > 0 && t.writeString(17, r), 
    (r = e.getWxUnionid()).length > 0 && t.writeString(18, r);
}, r.User.prototype.getUserId = function() {
    return e.Message.getFieldWithDefault(this, 1, "");
}, r.User.prototype.setUserId = function(t) {
    e.Message.setField(this, 1, t);
}, r.User.prototype.getHashUserId = function() {
    return e.Message.getFieldWithDefault(this, 2, "");
}, r.User.prototype.setHashUserId = function(t) {
    e.Message.setField(this, 2, t);
}, r.User.prototype.getLat = function() {
    return +e.Message.getFieldWithDefault(this, 3, 0);
}, r.User.prototype.setLat = function(t) {
    e.Message.setField(this, 3, t);
}, r.User.prototype.getLon = function() {
    return +e.Message.getFieldWithDefault(this, 4, 0);
}, r.User.prototype.setLon = function(t) {
    e.Message.setField(this, 4, t);
}, r.User.prototype.getExpList = function() {
    return e.Message.getRepeatedField(this, 5);
}, r.User.prototype.setExpList = function(t) {
    e.Message.setField(this, 5, t || []);
}, r.User.prototype.addExp = function(t, r) {
    e.Message.addToRepeatedField(this, 5, t, r);
}, r.User.prototype.clearExpList = function() {
    this.setExpList([]);
}, r.User.prototype.getExpConfigVersion = function() {
    return e.Message.getFieldWithDefault(this, 6, "");
}, r.User.prototype.setExpConfigVersion = function(t) {
    e.Message.setField(this, 6, t);
}, r.User.prototype.getWxOpenid = function() {
    return e.Message.getFieldWithDefault(this, 7, "");
}, r.User.prototype.setWxOpenid = function(t) {
    e.Message.setField(this, 7, t);
}, r.User.prototype.getMallUserType = function() {
    return e.Message.getFieldWithDefault(this, 11, 0);
}, r.User.prototype.setMallUserType = function(t) {
    e.Message.setField(this, 11, t);
}, r.User.prototype.getIsMallMember = function() {
    return e.Message.getFieldWithDefault(this, 12, !1);
}, r.User.prototype.setIsMallMember = function(t) {
    e.Message.setField(this, 12, t);
}, r.User.prototype.getLoginRole = function() {
    return e.Message.getFieldWithDefault(this, 13, 0);
}, r.User.prototype.setLoginRole = function(t) {
    e.Message.setField(this, 13, t);
}, r.User.prototype.getMpIsAppUser = function() {
    return e.Message.getFieldWithDefault(this, 14, !1);
}, r.User.prototype.setMpIsAppUser = function(t) {
    e.Message.setField(this, 14, t);
}, r.User.prototype.getMpIsNewMpUser = function() {
    return e.Message.getFieldWithDefault(this, 15, !1);
}, r.User.prototype.setMpIsNewMpUser = function(t) {
    e.Message.setField(this, 15, t);
}, r.User.prototype.getExpV3 = function() {
    return e.Message.getFieldWithDefault(this, 8, "");
}, r.User.prototype.getExpV3_asB64 = function() {
    return e.Message.bytesAsB64(this.getExpV3());
}, r.User.prototype.getExpV3_asU8 = function() {
    return e.Message.bytesAsU8(this.getExpV3());
}, r.User.prototype.setExpV3 = function(t) {
    e.Message.setField(this, 8, t);
}, r.User.prototype.getExpV4 = function() {
    return e.Message.getFieldWithDefault(this, 9, "");
}, r.User.prototype.setExpV4 = function(t) {
    e.Message.setField(this, 9, t);
}, r.User.prototype.getIsPhone = function() {
    return e.Message.getFieldWithDefault(this, 16, !1);
}, r.User.prototype.setIsPhone = function(t) {
    e.Message.setField(this, 16, t);
}, r.User.prototype.getLoginUserType = function() {
    return e.Message.getFieldWithDefault(this, 17, "");
}, r.User.prototype.setLoginUserType = function(t) {
    e.Message.setField(this, 17, t);
}, r.User.prototype.getWxUnionid = function() {
    return e.Message.getFieldWithDefault(this, 18, "");
}, r.User.prototype.setWxUnionid = function(t) {
    e.Message.setField(this, 18, t);
}, r.Device = function(t) {
    e.Message.initialize(this, t, 0, -1, r.Device.repeatedFields_, null);
}, t.inherits(r.Device, e.Message), t.DEBUG && !COMPILED && (r.Device.displayName = "proto.Device"), 
r.Device.repeatedFields_ = [ 15 ], e.Message.GENERATE_TO_OBJECT && (r.Device.prototype.toObject = function(e) {
    return r.Device.toObject(e, this);
}, r.Device.toObject = function(t, r) {
    var a = {
        dvceId: e.Message.getFieldWithDefault(r, 1, ""),
        idfa: e.Message.getFieldWithDefault(r, 2, ""),
        idfv: e.Message.getFieldWithDefault(r, 3, ""),
        imei: e.Message.getFieldWithDefault(r, 4, ""),
        dvceSize: e.Message.getFieldWithDefault(r, 5, ""),
        androidId: e.Message.getFieldWithDefault(r, 6, ""),
        macAddr: e.Message.getFieldWithDefault(r, 7, ""),
        imsi: e.Message.getFieldWithDefault(r, 8, ""),
        udid: e.Message.getFieldWithDefault(r, 9, ""),
        oaid: e.Message.getFieldWithDefault(r, 10, ""),
        vaid: e.Message.getFieldWithDefault(r, 11, ""),
        aaid: e.Message.getFieldWithDefault(r, 12, ""),
        fid: e.Message.getFieldWithDefault(r, 13, ""),
        ipV4: e.Message.getFieldWithDefault(r, 14, ""),
        ipV6List: r.getIpV6List_asB64()
    };
    return t && (a.$jspbMessageInstance = r), a;
}), r.Device.deserializeBinary = function(t) {
    var a = new e.BinaryReader(t), i = new r.Device();
    return r.Device.deserializeBinaryFromReader(i, a);
}, r.Device.deserializeBinaryFromReader = function(e, t) {
    for (;t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 1:
            var r = t.readString();
            e.setDvceId(r);
            break;

          case 2:
            r = t.readString();
            e.setIdfa(r);
            break;

          case 3:
            r = t.readString();
            e.setIdfv(r);
            break;

          case 4:
            r = t.readString();
            e.setImei(r);
            break;

          case 5:
            r = t.readString();
            e.setDvceSize(r);
            break;

          case 6:
            r = t.readString();
            e.setAndroidId(r);
            break;

          case 7:
            r = t.readString();
            e.setMacAddr(r);
            break;

          case 8:
            r = t.readString();
            e.setImsi(r);
            break;

          case 9:
            r = t.readString();
            e.setUdid(r);
            break;

          case 10:
            r = t.readString();
            e.setOaid(r);
            break;

          case 11:
            r = t.readString();
            e.setVaid(r);
            break;

          case 12:
            r = t.readString();
            e.setAaid(r);
            break;

          case 13:
            r = t.readString();
            e.setFid(r);
            break;

          case 14:
            r = t.readString();
            e.setIpV4(r);
            break;

          case 15:
            r = t.readBytes();
            e.addIpV6(r);
            break;

          default:
            t.skipField();
        }
    }
    return e;
}, r.Device.prototype.serializeBinary = function() {
    var t = new e.BinaryWriter();
    return r.Device.serializeBinaryToWriter(this, t), t.getResultBuffer();
}, r.Device.serializeBinaryToWriter = function(e, t) {
    var r = void 0;
    (r = e.getDvceId()).length > 0 && t.writeString(1, r), (r = e.getIdfa()).length > 0 && t.writeString(2, r), 
    (r = e.getIdfv()).length > 0 && t.writeString(3, r), (r = e.getImei()).length > 0 && t.writeString(4, r), 
    (r = e.getDvceSize()).length > 0 && t.writeString(5, r), (r = e.getAndroidId()).length > 0 && t.writeString(6, r), 
    (r = e.getMacAddr()).length > 0 && t.writeString(7, r), (r = e.getImsi()).length > 0 && t.writeString(8, r), 
    (r = e.getUdid()).length > 0 && t.writeString(9, r), (r = e.getOaid()).length > 0 && t.writeString(10, r), 
    (r = e.getVaid()).length > 0 && t.writeString(11, r), (r = e.getAaid()).length > 0 && t.writeString(12, r), 
    (r = e.getFid()).length > 0 && t.writeString(13, r), (r = e.getIpV4()).length > 0 && t.writeString(14, r), 
    (r = e.getIpV6List_asU8()).length > 0 && t.writeRepeatedBytes(15, r);
}, r.Device.prototype.getDvceId = function() {
    return e.Message.getFieldWithDefault(this, 1, "");
}, r.Device.prototype.setDvceId = function(t) {
    e.Message.setField(this, 1, t);
}, r.Device.prototype.getIdfa = function() {
    return e.Message.getFieldWithDefault(this, 2, "");
}, r.Device.prototype.setIdfa = function(t) {
    e.Message.setField(this, 2, t);
}, r.Device.prototype.getIdfv = function() {
    return e.Message.getFieldWithDefault(this, 3, "");
}, r.Device.prototype.setIdfv = function(t) {
    e.Message.setField(this, 3, t);
}, r.Device.prototype.getImei = function() {
    return e.Message.getFieldWithDefault(this, 4, "");
}, r.Device.prototype.setImei = function(t) {
    e.Message.setField(this, 4, t);
}, r.Device.prototype.getDvceSize = function() {
    return e.Message.getFieldWithDefault(this, 5, "");
}, r.Device.prototype.setDvceSize = function(t) {
    e.Message.setField(this, 5, t);
}, r.Device.prototype.getAndroidId = function() {
    return e.Message.getFieldWithDefault(this, 6, "");
}, r.Device.prototype.setAndroidId = function(t) {
    e.Message.setField(this, 6, t);
}, r.Device.prototype.getMacAddr = function() {
    return e.Message.getFieldWithDefault(this, 7, "");
}, r.Device.prototype.setMacAddr = function(t) {
    e.Message.setField(this, 7, t);
}, r.Device.prototype.getImsi = function() {
    return e.Message.getFieldWithDefault(this, 8, "");
}, r.Device.prototype.setImsi = function(t) {
    e.Message.setField(this, 8, t);
}, r.Device.prototype.getUdid = function() {
    return e.Message.getFieldWithDefault(this, 9, "");
}, r.Device.prototype.setUdid = function(t) {
    e.Message.setField(this, 9, t);
}, r.Device.prototype.getOaid = function() {
    return e.Message.getFieldWithDefault(this, 10, "");
}, r.Device.prototype.setOaid = function(t) {
    e.Message.setField(this, 10, t);
}, r.Device.prototype.getVaid = function() {
    return e.Message.getFieldWithDefault(this, 11, "");
}, r.Device.prototype.setVaid = function(t) {
    e.Message.setField(this, 11, t);
}, r.Device.prototype.getAaid = function() {
    return e.Message.getFieldWithDefault(this, 12, "");
}, r.Device.prototype.setAaid = function(t) {
    e.Message.setField(this, 12, t);
}, r.Device.prototype.getFid = function() {
    return e.Message.getFieldWithDefault(this, 13, "");
}, r.Device.prototype.setFid = function(t) {
    e.Message.setField(this, 13, t);
}, r.Device.prototype.getIpV4 = function() {
    return e.Message.getFieldWithDefault(this, 14, "");
}, r.Device.prototype.setIpV4 = function(t) {
    e.Message.setField(this, 14, t);
}, r.Device.prototype.getIpV6List = function() {
    return e.Message.getRepeatedField(this, 15);
}, r.Device.prototype.getIpV6List_asB64 = function() {
    return e.Message.bytesListAsB64(this.getIpV6List());
}, r.Device.prototype.getIpV6List_asU8 = function() {
    return e.Message.bytesListAsU8(this.getIpV6List());
}, r.Device.prototype.setIpV6List = function(t) {
    e.Message.setField(this, 15, t || []);
}, r.Device.prototype.addIpV6 = function(t, r) {
    e.Message.addToRepeatedField(this, 15, t, r);
}, r.Device.prototype.clearIpV6List = function() {
    this.setIpV6List([]);
}, r.Mobile = function(t) {
    e.Message.initialize(this, t, 0, 500, null, null);
}, t.inherits(r.Mobile, e.Message), t.DEBUG && !COMPILED && (r.Mobile.displayName = "proto.Mobile"), 
e.Message.GENERATE_TO_OBJECT && (r.Mobile.prototype.toObject = function(e) {
    return r.Mobile.toObject(e, this);
}, r.Mobile.toObject = function(t, r) {
    var a = {
        osVersion: e.Message.getFieldWithDefault(r, 1, ""),
        dvceModel: e.Message.getFieldWithDefault(r, 2, ""),
        dvceManufacture: e.Message.getFieldWithDefault(r, 3, ""),
        timezone: e.Message.getFieldWithDefault(r, 4, ""),
        dvceScreenWidth: e.Message.getFieldWithDefault(r, 5, 0),
        dvceScreenHeight: e.Message.getFieldWithDefault(r, 6, 0),
        osName: e.Message.getFieldWithDefault(r, 1e3, ""),
        osBuild: e.Message.getFieldWithDefault(r, 1001, ""),
        osBoard: e.Message.getFieldWithDefault(r, 1002, ""),
        osHardware: e.Message.getFieldWithDefault(r, 1003, ""),
        osSerialno: e.Message.getFieldWithDefault(r, 1004, ""),
        osCpuAbilist: e.Message.getFieldWithDefault(r, 1005, ""),
        osSdkVersion: e.Message.getFieldWithDefault(r, 1006, ""),
        osArchitecture: e.Message.getFieldWithDefault(r, 1007, ""),
        osRuntime: e.Message.getFieldWithDefault(r, 1008, ""),
        osLang: e.Message.getFieldWithDefault(r, 7, ""),
        isRooted: e.Message.getFieldWithDefault(r, 8, !1)
    };
    return t && (a.$jspbMessageInstance = r), a;
}), r.Mobile.deserializeBinary = function(t) {
    var a = new e.BinaryReader(t), i = new r.Mobile();
    return r.Mobile.deserializeBinaryFromReader(i, a);
}, r.Mobile.deserializeBinaryFromReader = function(e, t) {
    for (;t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 1:
            var r = t.readString();
            e.setOsVersion(r);
            break;

          case 2:
            r = t.readString();
            e.setDvceModel(r);
            break;

          case 3:
            r = t.readString();
            e.setDvceManufacture(r);
            break;

          case 4:
            r = t.readString();
            e.setTimezone(r);
            break;

          case 5:
            r = t.readInt32();
            e.setDvceScreenWidth(r);
            break;

          case 6:
            r = t.readInt32();
            e.setDvceScreenHeight(r);
            break;

          case 1e3:
            r = t.readString();
            e.setOsName(r);
            break;

          case 1001:
            r = t.readString();
            e.setOsBuild(r);
            break;

          case 1002:
            r = t.readString();
            e.setOsBoard(r);
            break;

          case 1003:
            r = t.readString();
            e.setOsHardware(r);
            break;

          case 1004:
            r = t.readString();
            e.setOsSerialno(r);
            break;

          case 1005:
            r = t.readString();
            e.setOsCpuAbilist(r);
            break;

          case 1006:
            r = t.readString();
            e.setOsSdkVersion(r);
            break;

          case 1007:
            r = t.readString();
            e.setOsArchitecture(r);
            break;

          case 1008:
            r = t.readString();
            e.setOsRuntime(r);
            break;

          case 7:
            r = t.readString();
            e.setOsLang(r);
            break;

          case 8:
            r = t.readBool();
            e.setIsRooted(r);
            break;

          default:
            t.skipField();
        }
    }
    return e;
}, r.Mobile.prototype.serializeBinary = function() {
    var t = new e.BinaryWriter();
    return r.Mobile.serializeBinaryToWriter(this, t), t.getResultBuffer();
}, r.Mobile.serializeBinaryToWriter = function(e, t) {
    var r = void 0;
    (r = e.getOsVersion()).length > 0 && t.writeString(1, r), (r = e.getDvceModel()).length > 0 && t.writeString(2, r), 
    (r = e.getDvceManufacture()).length > 0 && t.writeString(3, r), (r = e.getTimezone()).length > 0 && t.writeString(4, r), 
    0 !== (r = e.getDvceScreenWidth()) && t.writeInt32(5, r), 0 !== (r = e.getDvceScreenHeight()) && t.writeInt32(6, r), 
    (r = e.getOsName()).length > 0 && t.writeString(1e3, r), (r = e.getOsBuild()).length > 0 && t.writeString(1001, r), 
    (r = e.getOsBoard()).length > 0 && t.writeString(1002, r), (r = e.getOsHardware()).length > 0 && t.writeString(1003, r), 
    (r = e.getOsSerialno()).length > 0 && t.writeString(1004, r), (r = e.getOsCpuAbilist()).length > 0 && t.writeString(1005, r), 
    (r = e.getOsSdkVersion()).length > 0 && t.writeString(1006, r), (r = e.getOsArchitecture()).length > 0 && t.writeString(1007, r), 
    (r = e.getOsRuntime()).length > 0 && t.writeString(1008, r), (r = e.getOsLang()).length > 0 && t.writeString(7, r), 
    (r = e.getIsRooted()) && t.writeBool(8, r);
}, r.Mobile.prototype.getOsVersion = function() {
    return e.Message.getFieldWithDefault(this, 1, "");
}, r.Mobile.prototype.setOsVersion = function(t) {
    e.Message.setField(this, 1, t);
}, r.Mobile.prototype.getDvceModel = function() {
    return e.Message.getFieldWithDefault(this, 2, "");
}, r.Mobile.prototype.setDvceModel = function(t) {
    e.Message.setField(this, 2, t);
}, r.Mobile.prototype.getDvceManufacture = function() {
    return e.Message.getFieldWithDefault(this, 3, "");
}, r.Mobile.prototype.setDvceManufacture = function(t) {
    e.Message.setField(this, 3, t);
}, r.Mobile.prototype.getTimezone = function() {
    return e.Message.getFieldWithDefault(this, 4, "");
}, r.Mobile.prototype.setTimezone = function(t) {
    e.Message.setField(this, 4, t);
}, r.Mobile.prototype.getDvceScreenWidth = function() {
    return e.Message.getFieldWithDefault(this, 5, 0);
}, r.Mobile.prototype.setDvceScreenWidth = function(t) {
    e.Message.setField(this, 5, t);
}, r.Mobile.prototype.getDvceScreenHeight = function() {
    return e.Message.getFieldWithDefault(this, 6, 0);
}, r.Mobile.prototype.setDvceScreenHeight = function(t) {
    e.Message.setField(this, 6, t);
}, r.Mobile.prototype.getOsName = function() {
    return e.Message.getFieldWithDefault(this, 1e3, "");
}, r.Mobile.prototype.setOsName = function(t) {
    e.Message.setField(this, 1e3, t);
}, r.Mobile.prototype.getOsBuild = function() {
    return e.Message.getFieldWithDefault(this, 1001, "");
}, r.Mobile.prototype.setOsBuild = function(t) {
    e.Message.setField(this, 1001, t);
}, r.Mobile.prototype.getOsBoard = function() {
    return e.Message.getFieldWithDefault(this, 1002, "");
}, r.Mobile.prototype.setOsBoard = function(t) {
    e.Message.setField(this, 1002, t);
}, r.Mobile.prototype.getOsHardware = function() {
    return e.Message.getFieldWithDefault(this, 1003, "");
}, r.Mobile.prototype.setOsHardware = function(t) {
    e.Message.setField(this, 1003, t);
}, r.Mobile.prototype.getOsSerialno = function() {
    return e.Message.getFieldWithDefault(this, 1004, "");
}, r.Mobile.prototype.setOsSerialno = function(t) {
    e.Message.setField(this, 1004, t);
}, r.Mobile.prototype.getOsCpuAbilist = function() {
    return e.Message.getFieldWithDefault(this, 1005, "");
}, r.Mobile.prototype.setOsCpuAbilist = function(t) {
    e.Message.setField(this, 1005, t);
}, r.Mobile.prototype.getOsSdkVersion = function() {
    return e.Message.getFieldWithDefault(this, 1006, "");
}, r.Mobile.prototype.setOsSdkVersion = function(t) {
    e.Message.setField(this, 1006, t);
}, r.Mobile.prototype.getOsArchitecture = function() {
    return e.Message.getFieldWithDefault(this, 1007, "");
}, r.Mobile.prototype.setOsArchitecture = function(t) {
    e.Message.setField(this, 1007, t);
}, r.Mobile.prototype.getOsRuntime = function() {
    return e.Message.getFieldWithDefault(this, 1008, "");
}, r.Mobile.prototype.setOsRuntime = function(t) {
    e.Message.setField(this, 1008, t);
}, r.Mobile.prototype.getOsLang = function() {
    return e.Message.getFieldWithDefault(this, 7, "");
}, r.Mobile.prototype.setOsLang = function(t) {
    e.Message.setField(this, 7, t);
}, r.Mobile.prototype.getIsRooted = function() {
    return e.Message.getFieldWithDefault(this, 8, !1);
}, r.Mobile.prototype.setIsRooted = function(t) {
    e.Message.setField(this, 8, t);
}, r.HeyTarget = function(t) {
    e.Message.initialize(this, t, 0, -1, null, null);
}, t.inherits(r.HeyTarget, e.Message), t.DEBUG && !COMPILED && (r.HeyTarget.displayName = "proto.HeyTarget"), 
e.Message.GENERATE_TO_OBJECT && (r.HeyTarget.prototype.toObject = function(e) {
    return r.HeyTarget.toObject(e, this);
}, r.HeyTarget.toObject = function(t, r) {
    var a = {
        trackId: e.Message.getFieldWithDefault(r, 3, "")
    };
    return t && (a.$jspbMessageInstance = r), a;
}), r.HeyTarget.deserializeBinary = function(t) {
    var a = new e.BinaryReader(t), i = new r.HeyTarget();
    return r.HeyTarget.deserializeBinaryFromReader(i, a);
}, r.HeyTarget.deserializeBinaryFromReader = function(e, t) {
    for (;t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 3:
            var r = t.readString();
            e.setTrackId(r);
            break;

          default:
            t.skipField();
        }
    }
    return e;
}, r.HeyTarget.prototype.serializeBinary = function() {
    var t = new e.BinaryWriter();
    return r.HeyTarget.serializeBinaryToWriter(this, t), t.getResultBuffer();
}, r.HeyTarget.serializeBinaryToWriter = function(e, t) {
    var r;
    (r = e.getTrackId()).length > 0 && t.writeString(3, r);
}, r.HeyTarget.prototype.getTrackId = function() {
    return e.Message.getFieldWithDefault(this, 3, "");
}, r.HeyTarget.prototype.setTrackId = function(t) {
    e.Message.setField(this, 3, t);
}, r.AdsTarget = function(t) {
    e.Message.initialize(this, t, 0, -1, null, null);
}, t.inherits(r.AdsTarget, e.Message), t.DEBUG && !COMPILED && (r.AdsTarget.displayName = "proto.AdsTarget"), 
e.Message.GENERATE_TO_OBJECT && (r.AdsTarget.prototype.toObject = function(e) {
    return r.AdsTarget.toObject(e, this);
}, r.AdsTarget.toObject = function(t, r) {
    var a = {
        trackId: e.Message.getFieldWithDefault(r, 4, ""),
        adsId: e.Message.getFieldWithDefault(r, 1, ""),
        adsName: e.Message.getFieldWithDefault(r, 2, ""),
        adsType: e.Message.getFieldWithDefault(r, 3, 0),
        landingUrl: e.Message.getFieldWithDefault(r, 6, ""),
        trackUrl: e.Message.getFieldWithDefault(r, 20, "")
    };
    return t && (a.$jspbMessageInstance = r), a;
}), r.AdsTarget.deserializeBinary = function(t) {
    var a = new e.BinaryReader(t), i = new r.AdsTarget();
    return r.AdsTarget.deserializeBinaryFromReader(i, a);
}, r.AdsTarget.deserializeBinaryFromReader = function(e, t) {
    for (;t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 4:
            var r = t.readString();
            e.setTrackId(r);
            break;

          case 1:
            r = t.readString();
            e.setAdsId(r);
            break;

          case 2:
            r = t.readString();
            e.setAdsName(r);
            break;

          case 3:
            r = t.readEnum();
            e.setAdsType(r);
            break;

          case 6:
            r = t.readString();
            e.setLandingUrl(r);
            break;

          case 20:
            r = t.readString();
            e.setTrackUrl(r);
            break;

          default:
            t.skipField();
        }
    }
    return e;
}, r.AdsTarget.prototype.serializeBinary = function() {
    var t = new e.BinaryWriter();
    return r.AdsTarget.serializeBinaryToWriter(this, t), t.getResultBuffer();
}, r.AdsTarget.serializeBinaryToWriter = function(e, t) {
    var r = void 0;
    (r = e.getTrackId()).length > 0 && t.writeString(4, r), (r = e.getAdsId()).length > 0 && t.writeString(1, r), 
    (r = e.getAdsName()).length > 0 && t.writeString(2, r), 0 !== (r = e.getAdsType()) && t.writeEnum(3, r), 
    (r = e.getLandingUrl()).length > 0 && t.writeString(6, r), (r = e.getTrackUrl()).length > 0 && t.writeString(20, r);
}, r.AdsTarget.prototype.getTrackId = function() {
    return e.Message.getFieldWithDefault(this, 4, "");
}, r.AdsTarget.prototype.setTrackId = function(t) {
    e.Message.setField(this, 4, t);
}, r.AdsTarget.prototype.getAdsId = function() {
    return e.Message.getFieldWithDefault(this, 1, "");
}, r.AdsTarget.prototype.setAdsId = function(t) {
    e.Message.setField(this, 1, t);
}, r.AdsTarget.prototype.getAdsName = function() {
    return e.Message.getFieldWithDefault(this, 2, "");
}, r.AdsTarget.prototype.setAdsName = function(t) {
    e.Message.setField(this, 2, t);
}, r.AdsTarget.prototype.getAdsType = function() {
    return e.Message.getFieldWithDefault(this, 3, 0);
}, r.AdsTarget.prototype.setAdsType = function(t) {
    e.Message.setField(this, 3, t);
}, r.AdsTarget.prototype.getLandingUrl = function() {
    return e.Message.getFieldWithDefault(this, 6, "");
}, r.AdsTarget.prototype.setLandingUrl = function(t) {
    e.Message.setField(this, 6, t);
}, r.AdsTarget.prototype.getTrackUrl = function() {
    return e.Message.getFieldWithDefault(this, 20, "");
}, r.AdsTarget.prototype.setTrackUrl = function(t) {
    e.Message.setField(this, 20, t);
}, r.MallBannerTarget = function(t) {
    e.Message.initialize(this, t, 0, -1, null, null);
}, t.inherits(r.MallBannerTarget, e.Message), t.DEBUG && !COMPILED && (r.MallBannerTarget.displayName = "proto.MallBannerTarget"), 
e.Message.GENERATE_TO_OBJECT && (r.MallBannerTarget.prototype.toObject = function(e) {
    return r.MallBannerTarget.toObject(e, this);
}, r.MallBannerTarget.toObject = function(t, r) {
    var a = {
        trackId: e.Message.getFieldWithDefault(r, 2, "")
    };
    return t && (a.$jspbMessageInstance = r), a;
}), r.MallBannerTarget.deserializeBinary = function(t) {
    var a = new e.BinaryReader(t), i = new r.MallBannerTarget();
    return r.MallBannerTarget.deserializeBinaryFromReader(i, a);
}, r.MallBannerTarget.deserializeBinaryFromReader = function(e, t) {
    for (;t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 2:
            var r = t.readString();
            e.setTrackId(r);
            break;

          default:
            t.skipField();
        }
    }
    return e;
}, r.MallBannerTarget.prototype.serializeBinary = function() {
    var t = new e.BinaryWriter();
    return r.MallBannerTarget.serializeBinaryToWriter(this, t), t.getResultBuffer();
}, r.MallBannerTarget.serializeBinaryToWriter = function(e, t) {
    var r;
    (r = e.getTrackId()).length > 0 && t.writeString(2, r);
}, r.MallBannerTarget.prototype.getTrackId = function() {
    return e.Message.getFieldWithDefault(this, 2, "");
}, r.MallBannerTarget.prototype.setTrackId = function(t) {
    e.Message.setField(this, 2, t);
}, r.Page = function(t) {
    e.Message.initialize(this, t, 0, -1, null, null);
}, t.inherits(r.Page, e.Message), t.DEBUG && !COMPILED && (r.Page.displayName = "proto.Page"), 
e.Message.GENERATE_TO_OBJECT && (r.Page.prototype.toObject = function(e) {
    return r.Page.toObject(e, this);
}, r.Page.toObject = function(t, r) {
    var a = {
        pageInstance: e.Message.getFieldWithDefault(r, 1, 0),
        instanceId: e.Message.getFieldWithDefault(r, 2, ""),
        durationMs: e.Message.getFieldWithDefault(r, 3, 0),
        pageTitle: e.Message.getFieldWithDefault(r, 4, ""),
        pageScopeId: e.Message.getFieldWithDefault(r, 5, ""),
        sourceStr: e.Message.getFieldWithDefault(r, 6, ""),
        contentFillInfo: e.Message.getFieldWithDefault(r, 7, ""),
        queryId: e.Message.getFieldWithDefault(r, 8, "")
    };
    return t && (a.$jspbMessageInstance = r), a;
}), r.Page.deserializeBinary = function(t) {
    var a = new e.BinaryReader(t), i = new r.Page();
    return r.Page.deserializeBinaryFromReader(i, a);
}, r.Page.deserializeBinaryFromReader = function(e, t) {
    for (;t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 1:
            var r = t.readEnum();
            e.setPageInstance(r);
            break;

          case 2:
            r = t.readString();
            e.setInstanceId(r);
            break;

          case 3:
            r = t.readInt32();
            e.setDurationMs(r);
            break;

          case 4:
            r = t.readString();
            e.setPageTitle(r);
            break;

          case 5:
            r = t.readString();
            e.setPageScopeId(r);
            break;

          case 6:
            r = t.readString();
            e.setSourceStr(r);
            break;

          case 7:
            r = t.readString();
            e.setContentFillInfo(r);
            break;

          case 8:
            r = t.readString();
            e.setQueryId(r);
            break;

          default:
            t.skipField();
        }
    }
    return e;
}, r.Page.prototype.serializeBinary = function() {
    var t = new e.BinaryWriter();
    return r.Page.serializeBinaryToWriter(this, t), t.getResultBuffer();
}, r.Page.serializeBinaryToWriter = function(e, t) {
    var r = void 0;
    0 !== (r = e.getPageInstance()) && t.writeEnum(1, r), (r = e.getInstanceId()).length > 0 && t.writeString(2, r), 
    0 !== (r = e.getDurationMs()) && t.writeInt32(3, r), (r = e.getPageTitle()).length > 0 && t.writeString(4, r), 
    (r = e.getPageScopeId()).length > 0 && t.writeString(5, r), (r = e.getSourceStr()).length > 0 && t.writeString(6, r), 
    (r = e.getContentFillInfo()).length > 0 && t.writeString(7, r), (r = e.getQueryId()).length > 0 && t.writeString(8, r);
}, r.Page.prototype.getPageInstance = function() {
    return e.Message.getFieldWithDefault(this, 1, 0);
}, r.Page.prototype.setPageInstance = function(t) {
    e.Message.setField(this, 1, t);
}, r.Page.prototype.getInstanceId = function() {
    return e.Message.getFieldWithDefault(this, 2, "");
}, r.Page.prototype.setInstanceId = function(t) {
    e.Message.setField(this, 2, t);
}, r.Page.prototype.getDurationMs = function() {
    return e.Message.getFieldWithDefault(this, 3, 0);
}, r.Page.prototype.setDurationMs = function(t) {
    e.Message.setField(this, 3, t);
}, r.Page.prototype.getPageTitle = function() {
    return e.Message.getFieldWithDefault(this, 4, "");
}, r.Page.prototype.setPageTitle = function(t) {
    e.Message.setField(this, 4, t);
}, r.Page.prototype.getPageScopeId = function() {
    return e.Message.getFieldWithDefault(this, 5, "");
}, r.Page.prototype.setPageScopeId = function(t) {
    e.Message.setField(this, 5, t);
}, r.Page.prototype.getSourceStr = function() {
    return e.Message.getFieldWithDefault(this, 6, "");
}, r.Page.prototype.setSourceStr = function(t) {
    e.Message.setField(this, 6, t);
}, r.Page.prototype.getContentFillInfo = function() {
    return e.Message.getFieldWithDefault(this, 7, "");
}, r.Page.prototype.setContentFillInfo = function(t) {
    e.Message.setField(this, 7, t);
}, r.Page.prototype.getQueryId = function() {
    return e.Message.getFieldWithDefault(this, 8, "");
}, r.Page.prototype.setQueryId = function(t) {
    e.Message.setField(this, 8, t);
}, r.Browser = function(t) {
    e.Message.initialize(this, t, 0, -1, null, null);
}, t.inherits(r.Browser, e.Message), t.DEBUG && !COMPILED && (r.Browser.displayName = "proto.Browser"), 
e.Message.GENERATE_TO_OBJECT && (r.Browser.prototype.toObject = function(e) {
    return r.Browser.toObject(e, this);
}, r.Browser.toObject = function(t, r) {
    var a = {
        sessionId: e.Message.getFieldWithDefault(r, 1, ""),
        userAgent: e.Message.getFieldWithDefault(r, 2, ""),
        route: e.Message.getFieldWithDefault(r, 3, ""),
        matchedPath: e.Message.getFieldWithDefault(r, 4, ""),
        fixedReferer: e.Message.getFieldWithDefault(r, 5, ""),
        domainUserId: e.Message.getFieldWithDefault(r, 6, "")
    };
    return t && (a.$jspbMessageInstance = r), a;
}), r.Browser.deserializeBinary = function(t) {
    var a = new e.BinaryReader(t), i = new r.Browser();
    return r.Browser.deserializeBinaryFromReader(i, a);
}, r.Browser.deserializeBinaryFromReader = function(e, t) {
    for (;t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 1:
            var r = t.readString();
            e.setSessionId(r);
            break;

          case 2:
            r = t.readString();
            e.setUserAgent(r);
            break;

          case 3:
            r = t.readString();
            e.setRoute(r);
            break;

          case 4:
            r = t.readString();
            e.setMatchedPath(r);
            break;

          case 5:
            r = t.readString();
            e.setFixedReferer(r);
            break;

          case 6:
            r = t.readString();
            e.setDomainUserId(r);
            break;

          default:
            t.skipField();
        }
    }
    return e;
}, r.Browser.prototype.serializeBinary = function() {
    var t = new e.BinaryWriter();
    return r.Browser.serializeBinaryToWriter(this, t), t.getResultBuffer();
}, r.Browser.serializeBinaryToWriter = function(e, t) {
    var r = void 0;
    (r = e.getSessionId()).length > 0 && t.writeString(1, r), (r = e.getUserAgent()).length > 0 && t.writeString(2, r), 
    (r = e.getRoute()).length > 0 && t.writeString(3, r), (r = e.getMatchedPath()).length > 0 && t.writeString(4, r), 
    (r = e.getFixedReferer()).length > 0 && t.writeString(5, r), (r = e.getDomainUserId()).length > 0 && t.writeString(6, r);
}, r.Browser.prototype.getSessionId = function() {
    return e.Message.getFieldWithDefault(this, 1, "");
}, r.Browser.prototype.setSessionId = function(t) {
    e.Message.setField(this, 1, t);
}, r.Browser.prototype.getUserAgent = function() {
    return e.Message.getFieldWithDefault(this, 2, "");
}, r.Browser.prototype.setUserAgent = function(t) {
    e.Message.setField(this, 2, t);
}, r.Browser.prototype.getRoute = function() {
    return e.Message.getFieldWithDefault(this, 3, "");
}, r.Browser.prototype.setRoute = function(t) {
    e.Message.setField(this, 3, t);
}, r.Browser.prototype.getMatchedPath = function() {
    return e.Message.getFieldWithDefault(this, 4, "");
}, r.Browser.prototype.setMatchedPath = function(t) {
    e.Message.setField(this, 4, t);
}, r.Browser.prototype.getFixedReferer = function() {
    return e.Message.getFieldWithDefault(this, 5, "");
}, r.Browser.prototype.setFixedReferer = function(t) {
    e.Message.setField(this, 5, t);
}, r.Browser.prototype.getDomainUserId = function() {
    return e.Message.getFieldWithDefault(this, 6, "");
}, r.Browser.prototype.setDomainUserId = function(t) {
    e.Message.setField(this, 6, t);
}, r.MallGoodsTarget = function(t) {
    e.Message.initialize(this, t, 0, -1, null, null);
}, t.inherits(r.MallGoodsTarget, e.Message), t.DEBUG && !COMPILED && (r.MallGoodsTarget.displayName = "proto.MallGoodsTarget"), 
e.Message.GENERATE_TO_OBJECT && (r.MallGoodsTarget.prototype.toObject = function(e) {
    return r.MallGoodsTarget.toObject(e, this);
}, r.MallGoodsTarget.toObject = function(t, r) {
    var a = {
        trackId: e.Message.getFieldWithDefault(r, 2, "")
    };
    return t && (a.$jspbMessageInstance = r), a;
}), r.MallGoodsTarget.deserializeBinary = function(t) {
    var a = new e.BinaryReader(t), i = new r.MallGoodsTarget();
    return r.MallGoodsTarget.deserializeBinaryFromReader(i, a);
}, r.MallGoodsTarget.deserializeBinaryFromReader = function(e, t) {
    for (;t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 2:
            var r = t.readString();
            e.setTrackId(r);
            break;

          default:
            t.skipField();
        }
    }
    return e;
}, r.MallGoodsTarget.prototype.serializeBinary = function() {
    var t = new e.BinaryWriter();
    return r.MallGoodsTarget.serializeBinaryToWriter(this, t), t.getResultBuffer();
}, r.MallGoodsTarget.serializeBinaryToWriter = function(e, t) {
    var r;
    (r = e.getTrackId()).length > 0 && t.writeString(2, r);
}, r.MallGoodsTarget.prototype.getTrackId = function() {
    return e.Message.getFieldWithDefault(this, 2, "");
}, r.MallGoodsTarget.prototype.setTrackId = function(t) {
    e.Message.setField(this, 2, t);
}, r.App = function(t) {
    e.Message.initialize(this, t, 0, 500, null, null);
}, t.inherits(r.App, e.Message), t.DEBUG && !COMPILED && (r.App.displayName = "proto.App"), 
e.Message.GENERATE_TO_OBJECT && (r.App.prototype.toObject = function(e) {
    return r.App.toObject(e, this);
}, r.App.toObject = function(t, r) {
    var a = {
        nameTracker: e.Message.getFieldWithDefault(r, 1, 0),
        appVersion: e.Message.getFieldWithDefault(r, 2, ""),
        trackerVersion: e.Message.getFieldWithDefault(r, 3, ""),
        sessionId: e.Message.getFieldWithDefault(r, 4, ""),
        appMarket: e.Message.getFieldWithDefault(r, 5, ""),
        platform: e.Message.getFieldWithDefault(r, 6, 0),
        artifactName: e.Message.getFieldWithDefault(r, 7, ""),
        artifactVersion: e.Message.getFieldWithDefault(r, 8, ""),
        appMode: e.Message.getFieldWithDefault(r, 9, 0),
        buildId: e.Message.getFieldWithDefault(r, 1001, ""),
        pb_package: e.Message.getFieldWithDefault(r, 1002, ""),
        appName: e.Message.getFieldWithDefault(r, 1003, ""),
        sdkName: e.Message.getFieldWithDefault(r, 1004, ""),
        sdkVersion: e.Message.getFieldWithDefault(r, 1005, ""),
        launchId: e.Message.getFieldWithDefault(r, 10, ""),
        mpScene: e.Message.getFieldWithDefault(r, 11, ""),
        appStartMode: e.Message.getFieldWithDefault(r, 12, 0),
        buildVersion: e.Message.getFieldWithDefault(r, 13, ""),
        eventSeqIdInSession: e.Message.getFieldWithDefault(r, 14, 0),
        darkMode: e.Message.getFieldWithDefault(r, 15, !1),
        startupId: e.Message.getFieldWithDefault(r, 16, ""),
        environment: e.Message.getFieldWithDefault(r, 1006, 0)
    };
    return t && (a.$jspbMessageInstance = r), a;
}), r.App.deserializeBinary = function(t) {
    var a = new e.BinaryReader(t), i = new r.App();
    return r.App.deserializeBinaryFromReader(i, a);
}, r.App.deserializeBinaryFromReader = function(e, t) {
    for (;t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 1:
            var r = t.readEnum();
            e.setNameTracker(r);
            break;

          case 2:
            r = t.readString();
            e.setAppVersion(r);
            break;

          case 3:
            r = t.readString();
            e.setTrackerVersion(r);
            break;

          case 4:
            r = t.readString();
            e.setSessionId(r);
            break;

          case 5:
            r = t.readString();
            e.setAppMarket(r);
            break;

          case 6:
            r = t.readEnum();
            e.setPlatform(r);
            break;

          case 7:
            r = t.readString();
            e.setArtifactName(r);
            break;

          case 8:
            r = t.readString();
            e.setArtifactVersion(r);
            break;

          case 9:
            r = t.readEnum();
            e.setAppMode(r);
            break;

          case 1001:
            r = t.readString();
            e.setBuildId(r);
            break;

          case 1002:
            r = t.readString();
            e.setPackage(r);
            break;

          case 1003:
            r = t.readString();
            e.setAppName(r);
            break;

          case 1004:
            r = t.readString();
            e.setSdkName(r);
            break;

          case 1005:
            r = t.readString();
            e.setSdkVersion(r);
            break;

          case 10:
            r = t.readString();
            e.setLaunchId(r);
            break;

          case 11:
            r = t.readString();
            e.setMpScene(r);
            break;

          case 12:
            r = t.readEnum();
            e.setAppStartMode(r);
            break;

          case 13:
            r = t.readString();
            e.setBuildVersion(r);
            break;

          case 14:
            r = t.readInt32();
            e.setEventSeqIdInSession(r);
            break;

          case 15:
            r = t.readBool();
            e.setDarkMode(r);
            break;

          case 16:
            r = t.readString();
            e.setStartupId(r);
            break;

          case 1006:
            r = t.readEnum();
            e.setEnvironment(r);
            break;

          default:
            t.skipField();
        }
    }
    return e;
}, r.App.prototype.serializeBinary = function() {
    var t = new e.BinaryWriter();
    return r.App.serializeBinaryToWriter(this, t), t.getResultBuffer();
}, r.App.serializeBinaryToWriter = function(e, t) {
    var r = void 0;
    0 !== (r = e.getNameTracker()) && t.writeEnum(1, r), (r = e.getAppVersion()).length > 0 && t.writeString(2, r), 
    (r = e.getTrackerVersion()).length > 0 && t.writeString(3, r), (r = e.getSessionId()).length > 0 && t.writeString(4, r), 
    (r = e.getAppMarket()).length > 0 && t.writeString(5, r), 0 !== (r = e.getPlatform()) && t.writeEnum(6, r), 
    (r = e.getArtifactName()).length > 0 && t.writeString(7, r), (r = e.getArtifactVersion()).length > 0 && t.writeString(8, r), 
    0 !== (r = e.getAppMode()) && t.writeEnum(9, r), (r = e.getBuildId()).length > 0 && t.writeString(1001, r), 
    (r = e.getPackage()).length > 0 && t.writeString(1002, r), (r = e.getAppName()).length > 0 && t.writeString(1003, r), 
    (r = e.getSdkName()).length > 0 && t.writeString(1004, r), (r = e.getSdkVersion()).length > 0 && t.writeString(1005, r), 
    (r = e.getLaunchId()).length > 0 && t.writeString(10, r), (r = e.getMpScene()).length > 0 && t.writeString(11, r), 
    0 !== (r = e.getAppStartMode()) && t.writeEnum(12, r), (r = e.getBuildVersion()).length > 0 && t.writeString(13, r), 
    0 !== (r = e.getEventSeqIdInSession()) && t.writeInt32(14, r), (r = e.getDarkMode()) && t.writeBool(15, r), 
    (r = e.getStartupId()).length > 0 && t.writeString(16, r), 0 !== (r = e.getEnvironment()) && t.writeEnum(1006, r);
}, r.App.prototype.getNameTracker = function() {
    return e.Message.getFieldWithDefault(this, 1, 0);
}, r.App.prototype.setNameTracker = function(t) {
    e.Message.setField(this, 1, t);
}, r.App.prototype.getAppVersion = function() {
    return e.Message.getFieldWithDefault(this, 2, "");
}, r.App.prototype.setAppVersion = function(t) {
    e.Message.setField(this, 2, t);
}, r.App.prototype.getTrackerVersion = function() {
    return e.Message.getFieldWithDefault(this, 3, "");
}, r.App.prototype.setTrackerVersion = function(t) {
    e.Message.setField(this, 3, t);
}, r.App.prototype.getSessionId = function() {
    return e.Message.getFieldWithDefault(this, 4, "");
}, r.App.prototype.setSessionId = function(t) {
    e.Message.setField(this, 4, t);
}, r.App.prototype.getAppMarket = function() {
    return e.Message.getFieldWithDefault(this, 5, "");
}, r.App.prototype.setAppMarket = function(t) {
    e.Message.setField(this, 5, t);
}, r.App.prototype.getPlatform = function() {
    return e.Message.getFieldWithDefault(this, 6, 0);
}, r.App.prototype.setPlatform = function(t) {
    e.Message.setField(this, 6, t);
}, r.App.prototype.getArtifactName = function() {
    return e.Message.getFieldWithDefault(this, 7, "");
}, r.App.prototype.setArtifactName = function(t) {
    e.Message.setField(this, 7, t);
}, r.App.prototype.getArtifactVersion = function() {
    return e.Message.getFieldWithDefault(this, 8, "");
}, r.App.prototype.setArtifactVersion = function(t) {
    e.Message.setField(this, 8, t);
}, r.App.prototype.getAppMode = function() {
    return e.Message.getFieldWithDefault(this, 9, 0);
}, r.App.prototype.setAppMode = function(t) {
    e.Message.setField(this, 9, t);
}, r.App.prototype.getBuildId = function() {
    return e.Message.getFieldWithDefault(this, 1001, "");
}, r.App.prototype.setBuildId = function(t) {
    e.Message.setField(this, 1001, t);
}, r.App.prototype.getPackage = function() {
    return e.Message.getFieldWithDefault(this, 1002, "");
}, r.App.prototype.setPackage = function(t) {
    e.Message.setField(this, 1002, t);
}, r.App.prototype.getAppName = function() {
    return e.Message.getFieldWithDefault(this, 1003, "");
}, r.App.prototype.setAppName = function(t) {
    e.Message.setField(this, 1003, t);
}, r.App.prototype.getSdkName = function() {
    return e.Message.getFieldWithDefault(this, 1004, "");
}, r.App.prototype.setSdkName = function(t) {
    e.Message.setField(this, 1004, t);
}, r.App.prototype.getSdkVersion = function() {
    return e.Message.getFieldWithDefault(this, 1005, "");
}, r.App.prototype.setSdkVersion = function(t) {
    e.Message.setField(this, 1005, t);
}, r.App.prototype.getLaunchId = function() {
    return e.Message.getFieldWithDefault(this, 10, "");
}, r.App.prototype.setLaunchId = function(t) {
    e.Message.setField(this, 10, t);
}, r.App.prototype.getMpScene = function() {
    return e.Message.getFieldWithDefault(this, 11, "");
}, r.App.prototype.setMpScene = function(t) {
    e.Message.setField(this, 11, t);
}, r.App.prototype.getAppStartMode = function() {
    return e.Message.getFieldWithDefault(this, 12, 0);
}, r.App.prototype.setAppStartMode = function(t) {
    e.Message.setField(this, 12, t);
}, r.App.prototype.getBuildVersion = function() {
    return e.Message.getFieldWithDefault(this, 13, "");
}, r.App.prototype.setBuildVersion = function(t) {
    e.Message.setField(this, 13, t);
}, r.App.prototype.getEventSeqIdInSession = function() {
    return e.Message.getFieldWithDefault(this, 14, 0);
}, r.App.prototype.setEventSeqIdInSession = function(t) {
    e.Message.setField(this, 14, t);
}, r.App.prototype.getDarkMode = function() {
    return e.Message.getFieldWithDefault(this, 15, !1);
}, r.App.prototype.setDarkMode = function(t) {
    e.Message.setField(this, 15, t);
}, r.App.prototype.getStartupId = function() {
    return e.Message.getFieldWithDefault(this, 16, "");
}, r.App.prototype.setStartupId = function(t) {
    e.Message.setField(this, 16, t);
}, r.App.prototype.getEnvironment = function() {
    return e.Message.getFieldWithDefault(this, 1006, 0);
}, r.App.prototype.setEnvironment = function(t) {
    e.Message.setField(this, 1006, t);
}, r.MallVendorTarget = function(t) {
    e.Message.initialize(this, t, 0, -1, null, null);
}, t.inherits(r.MallVendorTarget, e.Message), t.DEBUG && !COMPILED && (r.MallVendorTarget.displayName = "proto.MallVendorTarget"), 
e.Message.GENERATE_TO_OBJECT && (r.MallVendorTarget.prototype.toObject = function(e) {
    return r.MallVendorTarget.toObject(e, this);
}, r.MallVendorTarget.toObject = function(t, r) {
    var a = {
        trackId: e.Message.getFieldWithDefault(r, 2, "")
    };
    return t && (a.$jspbMessageInstance = r), a;
}), r.MallVendorTarget.deserializeBinary = function(t) {
    var a = new e.BinaryReader(t), i = new r.MallVendorTarget();
    return r.MallVendorTarget.deserializeBinaryFromReader(i, a);
}, r.MallVendorTarget.deserializeBinaryFromReader = function(e, t) {
    for (;t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 2:
            var r = t.readString();
            e.setTrackId(r);
            break;

          default:
            t.skipField();
        }
    }
    return e;
}, r.MallVendorTarget.prototype.serializeBinary = function() {
    var t = new e.BinaryWriter();
    return r.MallVendorTarget.serializeBinaryToWriter(this, t), t.getResultBuffer();
}, r.MallVendorTarget.serializeBinaryToWriter = function(e, t) {
    var r;
    (r = e.getTrackId()).length > 0 && t.writeString(2, r);
}, r.MallVendorTarget.prototype.getTrackId = function() {
    return e.Message.getFieldWithDefault(this, 2, "");
}, r.MallVendorTarget.prototype.setTrackId = function(t) {
    e.Message.setField(this, 2, t);
}, r.Event = function(t) {
    e.Message.initialize(this, t, 0, -1, null, null);
}, t.inherits(r.Event, e.Message), t.DEBUG && !COMPILED && (r.Event.displayName = "proto.Event"), 
e.Message.GENERATE_TO_OBJECT && (r.Event.prototype.toObject = function(e) {
    return r.Event.toObject(e, this);
}, r.Event.toObject = function(t, r) {
    var a = {
        eventId: e.Message.getFieldWithDefault(r, 1, ""),
        requestId: e.Message.getFieldWithDefault(r, 9, ""),
        targetType: e.Message.getFieldWithDefault(r, 4, 0),
        targetDisplayType: e.Message.getFieldWithDefault(r, 5, 0),
        parentTargetDisplayType: e.Message.getFieldWithDefault(r, 21, 0),
        action: e.Message.getFieldWithDefault(r, 6, 0),
        actionInteractionType: e.Message.getFieldWithDefault(r, 8, 0),
        seAction: e.Message.getFieldWithDefault(r, 7, ""),
        dvceMicroTs: e.Message.getFieldWithDefault(r, 11, 0),
        interactionPaddingLeftPx: e.Message.getFieldWithDefault(r, 12, 0),
        interactionPaddingTopPx: e.Message.getFieldWithDefault(r, 13, 0),
        pageLoadType: e.Message.getFieldWithDefault(r, 14, 0),
        phoneNumber: e.Message.getFieldWithDefault(r, 22, ""),
        addressInfo: e.Message.getFieldWithDefault(r, 23, ""),
        pointId: e.Message.getFieldWithDefault(r, 15, 0),
        clickReferrerId: e.Message.getFieldWithDefault(r, 16, ""),
        trackId: e.Message.getFieldWithDefault(r, 17, "")
    };
    return t && (a.$jspbMessageInstance = r), a;
}), r.Event.deserializeBinary = function(t) {
    var a = new e.BinaryReader(t), i = new r.Event();
    return r.Event.deserializeBinaryFromReader(i, a);
}, r.Event.deserializeBinaryFromReader = function(e, t) {
    for (;t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 1:
            var r = t.readString();
            e.setEventId(r);
            break;

          case 9:
            r = t.readString();
            e.setRequestId(r);
            break;

          case 4:
            r = t.readEnum();
            e.setTargetType(r);
            break;

          case 5:
            r = t.readEnum();
            e.setTargetDisplayType(r);
            break;

          case 21:
            r = t.readEnum();
            e.setParentTargetDisplayType(r);
            break;

          case 6:
            r = t.readEnum();
            e.setAction(r);
            break;

          case 8:
            r = t.readEnum();
            e.setActionInteractionType(r);
            break;

          case 7:
            r = t.readString();
            e.setSeAction(r);
            break;

          case 11:
            r = t.readInt64();
            e.setDvceMicroTs(r);
            break;

          case 12:
            r = t.readInt32();
            e.setInteractionPaddingLeftPx(r);
            break;

          case 13:
            r = t.readInt32();
            e.setInteractionPaddingTopPx(r);
            break;

          case 14:
            r = t.readEnum();
            e.setPageLoadType(r);
            break;

          case 22:
            r = t.readString();
            e.setPhoneNumber(r);
            break;

          case 23:
            r = t.readString();
            e.setAddressInfo(r);
            break;

          case 15:
            r = t.readInt32();
            e.setPointId(r);
            break;

          case 16:
            r = t.readString();
            e.setClickReferrerId(r);
            break;

          case 17:
            r = t.readString();
            e.setTrackId(r);
            break;

          default:
            t.skipField();
        }
    }
    return e;
}, r.Event.prototype.serializeBinary = function() {
    var t = new e.BinaryWriter();
    return r.Event.serializeBinaryToWriter(this, t), t.getResultBuffer();
}, r.Event.serializeBinaryToWriter = function(e, t) {
    var r = void 0;
    (r = e.getEventId()).length > 0 && t.writeString(1, r), (r = e.getRequestId()).length > 0 && t.writeString(9, r), 
    0 !== (r = e.getTargetType()) && t.writeEnum(4, r), 0 !== (r = e.getTargetDisplayType()) && t.writeEnum(5, r), 
    0 !== (r = e.getParentTargetDisplayType()) && t.writeEnum(21, r), 0 !== (r = e.getAction()) && t.writeEnum(6, r), 
    0 !== (r = e.getActionInteractionType()) && t.writeEnum(8, r), (r = e.getSeAction()).length > 0 && t.writeString(7, r), 
    0 !== (r = e.getDvceMicroTs()) && t.writeInt64(11, r), 0 !== (r = e.getInteractionPaddingLeftPx()) && t.writeInt32(12, r), 
    0 !== (r = e.getInteractionPaddingTopPx()) && t.writeInt32(13, r), 0 !== (r = e.getPageLoadType()) && t.writeEnum(14, r), 
    (r = e.getPhoneNumber()).length > 0 && t.writeString(22, r), (r = e.getAddressInfo()).length > 0 && t.writeString(23, r), 
    0 !== (r = e.getPointId()) && t.writeInt32(15, r), (r = e.getClickReferrerId()).length > 0 && t.writeString(16, r), 
    (r = e.getTrackId()).length > 0 && t.writeString(17, r);
}, r.Event.prototype.getEventId = function() {
    return e.Message.getFieldWithDefault(this, 1, "");
}, r.Event.prototype.setEventId = function(t) {
    e.Message.setField(this, 1, t);
}, r.Event.prototype.getRequestId = function() {
    return e.Message.getFieldWithDefault(this, 9, "");
}, r.Event.prototype.setRequestId = function(t) {
    e.Message.setField(this, 9, t);
}, r.Event.prototype.getTargetType = function() {
    return e.Message.getFieldWithDefault(this, 4, 0);
}, r.Event.prototype.setTargetType = function(t) {
    e.Message.setField(this, 4, t);
}, r.Event.prototype.getTargetDisplayType = function() {
    return e.Message.getFieldWithDefault(this, 5, 0);
}, r.Event.prototype.setTargetDisplayType = function(t) {
    e.Message.setField(this, 5, t);
}, r.Event.prototype.getParentTargetDisplayType = function() {
    return e.Message.getFieldWithDefault(this, 21, 0);
}, r.Event.prototype.setParentTargetDisplayType = function(t) {
    e.Message.setField(this, 21, t);
}, r.Event.prototype.getAction = function() {
    return e.Message.getFieldWithDefault(this, 6, 0);
}, r.Event.prototype.setAction = function(t) {
    e.Message.setField(this, 6, t);
}, r.Event.prototype.getActionInteractionType = function() {
    return e.Message.getFieldWithDefault(this, 8, 0);
}, r.Event.prototype.setActionInteractionType = function(t) {
    e.Message.setField(this, 8, t);
}, r.Event.prototype.getSeAction = function() {
    return e.Message.getFieldWithDefault(this, 7, "");
}, r.Event.prototype.setSeAction = function(t) {
    e.Message.setField(this, 7, t);
}, r.Event.prototype.getDvceMicroTs = function() {
    return e.Message.getFieldWithDefault(this, 11, 0);
}, r.Event.prototype.setDvceMicroTs = function(t) {
    e.Message.setField(this, 11, t);
}, r.Event.prototype.getInteractionPaddingLeftPx = function() {
    return e.Message.getFieldWithDefault(this, 12, 0);
}, r.Event.prototype.setInteractionPaddingLeftPx = function(t) {
    e.Message.setField(this, 12, t);
}, r.Event.prototype.getInteractionPaddingTopPx = function() {
    return e.Message.getFieldWithDefault(this, 13, 0);
}, r.Event.prototype.setInteractionPaddingTopPx = function(t) {
    e.Message.setField(this, 13, t);
}, r.Event.prototype.getPageLoadType = function() {
    return e.Message.getFieldWithDefault(this, 14, 0);
}, r.Event.prototype.setPageLoadType = function(t) {
    e.Message.setField(this, 14, t);
}, r.Event.prototype.getPhoneNumber = function() {
    return e.Message.getFieldWithDefault(this, 22, "");
}, r.Event.prototype.setPhoneNumber = function(t) {
    e.Message.setField(this, 22, t);
}, r.Event.prototype.getAddressInfo = function() {
    return e.Message.getFieldWithDefault(this, 23, "");
}, r.Event.prototype.setAddressInfo = function(t) {
    e.Message.setField(this, 23, t);
}, r.Event.prototype.getPointId = function() {
    return e.Message.getFieldWithDefault(this, 15, 0);
}, r.Event.prototype.setPointId = function(t) {
    e.Message.setField(this, 15, t);
}, r.Event.prototype.getClickReferrerId = function() {
    return e.Message.getFieldWithDefault(this, 16, "");
}, r.Event.prototype.setClickReferrerId = function(t) {
    e.Message.setField(this, 16, t);
}, r.Event.prototype.getTrackId = function() {
    return e.Message.getFieldWithDefault(this, 17, "");
}, r.Event.prototype.setTrackId = function(t) {
    e.Message.setField(this, 17, t);
}, r.NoteTarget = function(t) {
    e.Message.initialize(this, t, 0, -1, null, null);
}, t.inherits(r.NoteTarget, e.Message), t.DEBUG && !COMPILED && (r.NoteTarget.displayName = "proto.NoteTarget"), 
e.Message.GENERATE_TO_OBJECT && (r.NoteTarget.prototype.toObject = function(e) {
    return r.NoteTarget.toObject(e, this);
}, r.NoteTarget.toObject = function(t, r) {
    var a = {
        trackId: e.Message.getFieldWithDefault(r, 3, ""),
        noteId: e.Message.getFieldWithDefault(r, 1, ""),
        noteType: e.Message.getFieldWithDefault(r, 2, 0),
        authorId: e.Message.getFieldWithDefault(r, 4, ""),
        noteFeedTypeStr: e.Message.getFieldWithDefault(r, 14, ""),
        likeNum: e.Message.getFieldWithDefault(r, 20, 0),
        picLoadStatus: e.Message.getFieldWithDefault(r, 16, 0),
        inDemoMode: e.Message.getFieldWithDefault(r, 26, !1),
        recommendReason: e.Message.getFieldWithDefault(r, 37, ""),
        shareUserId: e.Message.getFieldWithDefault(r, 43, ""),
        imageNum: e.Message.getFieldWithDefault(r, 45, 0),
        noteFeedTypeExtraInfo: e.Message.getFieldWithDefault(r, 46, ""),
        impFromCache: e.Message.getFieldWithDefault(r, 57, 0),
        isRelatedNote: e.Message.getFieldWithDefault(r, 62, !1),
        relatedNoteId: e.Message.getFieldWithDefault(r, 63, ""),
        videoPlaySource: e.Message.getFieldWithDefault(r, 65, 0),
        videoPause: e.Message.getFieldWithDefault(r, 68, !1)
    };
    return t && (a.$jspbMessageInstance = r), a;
}), r.NoteTarget.deserializeBinary = function(t) {
    var a = new e.BinaryReader(t), i = new r.NoteTarget();
    return r.NoteTarget.deserializeBinaryFromReader(i, a);
}, r.NoteTarget.deserializeBinaryFromReader = function(e, t) {
    for (;t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 3:
            var r = t.readString();
            e.setTrackId(r);
            break;

          case 1:
            r = t.readString();
            e.setNoteId(r);
            break;

          case 2:
            r = t.readEnum();
            e.setNoteType(r);
            break;

          case 4:
            r = t.readString();
            e.setAuthorId(r);
            break;

          case 14:
            r = t.readString();
            e.setNoteFeedTypeStr(r);
            break;

          case 20:
            r = t.readInt32();
            e.setLikeNum(r);
            break;

          case 16:
            r = t.readInt32();
            e.setPicLoadStatus(r);
            break;

          case 26:
            r = t.readBool();
            e.setInDemoMode(r);
            break;

          case 37:
            r = t.readString();
            e.setRecommendReason(r);
            break;

          case 43:
            r = t.readString();
            e.setShareUserId(r);
            break;

          case 45:
            r = t.readInt32();
            e.setImageNum(r);
            break;

          case 46:
            r = t.readString();
            e.setNoteFeedTypeExtraInfo(r);
            break;

          case 57:
            r = t.readInt32();
            e.setImpFromCache(r);
            break;

          case 62:
            r = t.readBool();
            e.setIsRelatedNote(r);
            break;

          case 63:
            r = t.readString();
            e.setRelatedNoteId(r);
            break;

          case 65:
            r = t.readEnum();
            e.setVideoPlaySource(r);
            break;

          case 68:
            r = t.readBool();
            e.setVideoPause(r);
            break;

          default:
            t.skipField();
        }
    }
    return e;
}, r.NoteTarget.prototype.serializeBinary = function() {
    var t = new e.BinaryWriter();
    return r.NoteTarget.serializeBinaryToWriter(this, t), t.getResultBuffer();
}, r.NoteTarget.serializeBinaryToWriter = function(e, t) {
    var r = void 0;
    (r = e.getTrackId()).length > 0 && t.writeString(3, r), (r = e.getNoteId()).length > 0 && t.writeString(1, r), 
    0 !== (r = e.getNoteType()) && t.writeEnum(2, r), (r = e.getAuthorId()).length > 0 && t.writeString(4, r), 
    (r = e.getNoteFeedTypeStr()).length > 0 && t.writeString(14, r), 0 !== (r = e.getLikeNum()) && t.writeInt32(20, r), 
    0 !== (r = e.getPicLoadStatus()) && t.writeInt32(16, r), (r = e.getInDemoMode()) && t.writeBool(26, r), 
    (r = e.getRecommendReason()).length > 0 && t.writeString(37, r), (r = e.getShareUserId()).length > 0 && t.writeString(43, r), 
    0 !== (r = e.getImageNum()) && t.writeInt32(45, r), (r = e.getNoteFeedTypeExtraInfo()).length > 0 && t.writeString(46, r), 
    0 !== (r = e.getImpFromCache()) && t.writeInt32(57, r), (r = e.getIsRelatedNote()) && t.writeBool(62, r), 
    (r = e.getRelatedNoteId()).length > 0 && t.writeString(63, r), 0 !== (r = e.getVideoPlaySource()) && t.writeEnum(65, r), 
    (r = e.getVideoPause()) && t.writeBool(68, r);
}, r.NoteTarget.prototype.getTrackId = function() {
    return e.Message.getFieldWithDefault(this, 3, "");
}, r.NoteTarget.prototype.setTrackId = function(t) {
    e.Message.setField(this, 3, t);
}, r.NoteTarget.prototype.getNoteId = function() {
    return e.Message.getFieldWithDefault(this, 1, "");
}, r.NoteTarget.prototype.setNoteId = function(t) {
    e.Message.setField(this, 1, t);
}, r.NoteTarget.prototype.getNoteType = function() {
    return e.Message.getFieldWithDefault(this, 2, 0);
}, r.NoteTarget.prototype.setNoteType = function(t) {
    e.Message.setField(this, 2, t);
}, r.NoteTarget.prototype.getAuthorId = function() {
    return e.Message.getFieldWithDefault(this, 4, "");
}, r.NoteTarget.prototype.setAuthorId = function(t) {
    e.Message.setField(this, 4, t);
}, r.NoteTarget.prototype.getNoteFeedTypeStr = function() {
    return e.Message.getFieldWithDefault(this, 14, "");
}, r.NoteTarget.prototype.setNoteFeedTypeStr = function(t) {
    e.Message.setField(this, 14, t);
}, r.NoteTarget.prototype.getLikeNum = function() {
    return e.Message.getFieldWithDefault(this, 20, 0);
}, r.NoteTarget.prototype.setLikeNum = function(t) {
    e.Message.setField(this, 20, t);
}, r.NoteTarget.prototype.getPicLoadStatus = function() {
    return e.Message.getFieldWithDefault(this, 16, 0);
}, r.NoteTarget.prototype.setPicLoadStatus = function(t) {
    e.Message.setField(this, 16, t);
}, r.NoteTarget.prototype.getInDemoMode = function() {
    return e.Message.getFieldWithDefault(this, 26, !1);
}, r.NoteTarget.prototype.setInDemoMode = function(t) {
    e.Message.setField(this, 26, t);
}, r.NoteTarget.prototype.getRecommendReason = function() {
    return e.Message.getFieldWithDefault(this, 37, "");
}, r.NoteTarget.prototype.setRecommendReason = function(t) {
    e.Message.setField(this, 37, t);
}, r.NoteTarget.prototype.getShareUserId = function() {
    return e.Message.getFieldWithDefault(this, 43, "");
}, r.NoteTarget.prototype.setShareUserId = function(t) {
    e.Message.setField(this, 43, t);
}, r.NoteTarget.prototype.getImageNum = function() {
    return e.Message.getFieldWithDefault(this, 45, 0);
}, r.NoteTarget.prototype.setImageNum = function(t) {
    e.Message.setField(this, 45, t);
}, r.NoteTarget.prototype.getNoteFeedTypeExtraInfo = function() {
    return e.Message.getFieldWithDefault(this, 46, "");
}, r.NoteTarget.prototype.setNoteFeedTypeExtraInfo = function(t) {
    e.Message.setField(this, 46, t);
}, r.NoteTarget.prototype.getImpFromCache = function() {
    return e.Message.getFieldWithDefault(this, 57, 0);
}, r.NoteTarget.prototype.setImpFromCache = function(t) {
    e.Message.setField(this, 57, t);
}, r.NoteTarget.prototype.getIsRelatedNote = function() {
    return e.Message.getFieldWithDefault(this, 62, !1);
}, r.NoteTarget.prototype.setIsRelatedNote = function(t) {
    e.Message.setField(this, 62, t);
}, r.NoteTarget.prototype.getRelatedNoteId = function() {
    return e.Message.getFieldWithDefault(this, 63, "");
}, r.NoteTarget.prototype.setRelatedNoteId = function(t) {
    e.Message.setField(this, 63, t);
}, r.NoteTarget.prototype.getVideoPlaySource = function() {
    return e.Message.getFieldWithDefault(this, 65, 0);
}, r.NoteTarget.prototype.setVideoPlaySource = function(t) {
    e.Message.setField(this, 65, t);
}, r.NoteTarget.prototype.getVideoPause = function() {
    return e.Message.getFieldWithDefault(this, 68, !1);
}, r.NoteTarget.prototype.setVideoPause = function(t) {
    e.Message.setField(this, 68, t);
}, r.BrowserTarget = function(t) {
    e.Message.initialize(this, t, 0, -1, null, null);
}, t.inherits(r.BrowserTarget, e.Message), t.DEBUG && !COMPILED && (r.BrowserTarget.displayName = "proto.BrowserTarget"), 
e.Message.GENERATE_TO_OBJECT && (r.BrowserTarget.prototype.toObject = function(e) {
    return r.BrowserTarget.toObject(e, this);
}, r.BrowserTarget.toObject = function(t, r) {
    var a = {
        route: e.Message.getFieldWithDefault(r, 1, "")
    };
    return t && (a.$jspbMessageInstance = r), a;
}), r.BrowserTarget.deserializeBinary = function(t) {
    var a = new e.BinaryReader(t), i = new r.BrowserTarget();
    return r.BrowserTarget.deserializeBinaryFromReader(i, a);
}, r.BrowserTarget.deserializeBinaryFromReader = function(e, t) {
    for (;t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 1:
            var r = t.readString();
            e.setRoute(r);
            break;

          default:
            t.skipField();
        }
    }
    return e;
}, r.BrowserTarget.prototype.serializeBinary = function() {
    var t = new e.BinaryWriter();
    return r.BrowserTarget.serializeBinaryToWriter(this, t), t.getResultBuffer();
}, r.BrowserTarget.serializeBinaryToWriter = function(e, t) {
    var r;
    (r = e.getRoute()).length > 0 && t.writeString(1, r);
}, r.BrowserTarget.prototype.getRoute = function() {
    return e.Message.getFieldWithDefault(this, 1, "");
}, r.BrowserTarget.prototype.setRoute = function(t) {
    e.Message.setField(this, 1, t);
}, r.LiveTarget = function(t) {
    e.Message.initialize(this, t, 0, -1, null, null);
}, t.inherits(r.LiveTarget, e.Message), t.DEBUG && !COMPILED && (r.LiveTarget.displayName = "proto.LiveTarget"), 
e.Message.GENERATE_TO_OBJECT && (r.LiveTarget.prototype.toObject = function(e) {
    return r.LiveTarget.toObject(e, this);
}, r.LiveTarget.toObject = function(t, r) {
    var a = {
        trackId: e.Message.getFieldWithDefault(r, 16, ""),
        liveSubscribe: e.Message.getFieldWithDefault(r, 15, 0)
    };
    return t && (a.$jspbMessageInstance = r), a;
}), r.LiveTarget.deserializeBinary = function(t) {
    var a = new e.BinaryReader(t), i = new r.LiveTarget();
    return r.LiveTarget.deserializeBinaryFromReader(i, a);
}, r.LiveTarget.deserializeBinaryFromReader = function(e, t) {
    for (;t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 16:
            var r = t.readString();
            e.setTrackId(r);
            break;

          case 15:
            r = t.readInt32();
            e.setLiveSubscribe(r);
            break;

          default:
            t.skipField();
        }
    }
    return e;
}, r.LiveTarget.prototype.serializeBinary = function() {
    var t = new e.BinaryWriter();
    return r.LiveTarget.serializeBinaryToWriter(this, t), t.getResultBuffer();
}, r.LiveTarget.serializeBinaryToWriter = function(e, t) {
    var r = void 0;
    (r = e.getTrackId()).length > 0 && t.writeString(16, r), 0 !== (r = e.getLiveSubscribe()) && t.writeInt32(15, r);
}, r.LiveTarget.prototype.getTrackId = function() {
    return e.Message.getFieldWithDefault(this, 16, "");
}, r.LiveTarget.prototype.setTrackId = function(t) {
    e.Message.setField(this, 16, t);
}, r.LiveTarget.prototype.getLiveSubscribe = function() {
    return e.Message.getFieldWithDefault(this, 15, 0);
}, r.LiveTarget.prototype.setLiveSubscribe = function(t) {
    e.Message.setField(this, 15, t);
}, r.Index = function(t) {
    e.Message.initialize(this, t, 0, -1, null, null);
}, t.inherits(r.Index, e.Message), t.DEBUG && !COMPILED && (r.Index.displayName = "proto.Index"), 
e.Message.GENERATE_TO_OBJECT && (r.Index.prototype.toObject = function(e) {
    return r.Index.toObject(e, this);
}, r.Index.toObject = function(t, r) {
    var a = {
        channelTabId: e.Message.getFieldWithDefault(r, 1, ""),
        channelTabName: e.Message.getFieldWithDefault(r, 2, ""),
        channelTabIndex: e.Message.getFieldWithDefault(r, 3, 0),
        objectPosition: e.Message.getFieldWithDefault(r, 4, 0),
        isOnTop: e.Message.getFieldWithDefault(r, 6, !1)
    };
    return t && (a.$jspbMessageInstance = r), a;
}), r.Index.deserializeBinary = function(t) {
    var a = new e.BinaryReader(t), i = new r.Index();
    return r.Index.deserializeBinaryFromReader(i, a);
}, r.Index.deserializeBinaryFromReader = function(e, t) {
    for (;t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 1:
            var r = t.readString();
            e.setChannelTabId(r);
            break;

          case 2:
            r = t.readString();
            e.setChannelTabName(r);
            break;

          case 3:
            r = t.readInt32();
            e.setChannelTabIndex(r);
            break;

          case 4:
            r = t.readInt32();
            e.setObjectPosition(r);
            break;

          case 6:
            r = t.readBool();
            e.setIsOnTop(r);
            break;

          default:
            t.skipField();
        }
    }
    return e;
}, r.Index.prototype.serializeBinary = function() {
    var t = new e.BinaryWriter();
    return r.Index.serializeBinaryToWriter(this, t), t.getResultBuffer();
}, r.Index.serializeBinaryToWriter = function(e, t) {
    var r = void 0;
    (r = e.getChannelTabId()).length > 0 && t.writeString(1, r), (r = e.getChannelTabName()).length > 0 && t.writeString(2, r), 
    0 !== (r = e.getChannelTabIndex()) && t.writeInt32(3, r), 0 !== (r = e.getObjectPosition()) && t.writeInt32(4, r), 
    (r = e.getIsOnTop()) && t.writeBool(6, r);
}, r.Index.prototype.getChannelTabId = function() {
    return e.Message.getFieldWithDefault(this, 1, "");
}, r.Index.prototype.setChannelTabId = function(t) {
    e.Message.setField(this, 1, t);
}, r.Index.prototype.getChannelTabName = function() {
    return e.Message.getFieldWithDefault(this, 2, "");
}, r.Index.prototype.setChannelTabName = function(t) {
    e.Message.setField(this, 2, t);
}, r.Index.prototype.getChannelTabIndex = function() {
    return e.Message.getFieldWithDefault(this, 3, 0);
}, r.Index.prototype.setChannelTabIndex = function(t) {
    e.Message.setField(this, 3, t);
}, r.Index.prototype.getObjectPosition = function() {
    return e.Message.getFieldWithDefault(this, 4, 0);
}, r.Index.prototype.setObjectPosition = function(t) {
    e.Message.setField(this, 4, t);
}, r.Index.prototype.getIsOnTop = function() {
    return e.Message.getFieldWithDefault(this, 6, !1);
}, r.Index.prototype.setIsOnTop = function(t) {
    e.Message.setField(this, 6, t);
}, r.SearchTarget = function(t) {
    e.Message.initialize(this, t, 0, -1, r.SearchTarget.repeatedFields_, null);
}, t.inherits(r.SearchTarget, e.Message), t.DEBUG && !COMPILED && (r.SearchTarget.displayName = "proto.SearchTarget"), 
r.SearchTarget.repeatedFields_ = [ 7, 13, 48, 50 ], e.Message.GENERATE_TO_OBJECT && (r.SearchTarget.prototype.toObject = function(e) {
    return r.SearchTarget.toObject(e, this);
}, r.SearchTarget.toObject = function(t, r) {
    var a = {
        searchSessionId: e.Message.getFieldWithDefault(r, 2, ""),
        searchWord: e.Message.getFieldWithDefault(r, 3, ""),
        searchWordFrom: e.Message.getFieldWithDefault(r, 4, 0),
        noteSortType: e.Message.getFieldWithDefault(r, 6, 0),
        recommendSearchWordsList: e.Message.getRepeatedField(r, 7),
        searchLandingPage: e.Message.getFieldWithDefault(r, 8, 0),
        filterOptionsList: e.Message.getRepeatedField(r, 13),
        searchCplId: e.Message.getFieldWithDefault(r, 34, ""),
        wordRequestId: e.Message.getFieldWithDefault(r, 39, ""),
        recommendSearchWordsTypeArrayList: e.Message.getRepeatedField(r, 48),
        recommendDisplaySearchWordsList: e.Message.getRepeatedField(r, 50)
    };
    return t && (a.$jspbMessageInstance = r), a;
}), r.SearchTarget.deserializeBinary = function(t) {
    var a = new e.BinaryReader(t), i = new r.SearchTarget();
    return r.SearchTarget.deserializeBinaryFromReader(i, a);
}, r.SearchTarget.deserializeBinaryFromReader = function(e, t) {
    for (;t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 2:
            var r = t.readString();
            e.setSearchSessionId(r);
            break;

          case 3:
            r = t.readString();
            e.setSearchWord(r);
            break;

          case 4:
            r = t.readEnum();
            e.setSearchWordFrom(r);
            break;

          case 6:
            r = t.readEnum();
            e.setNoteSortType(r);
            break;

          case 7:
            r = t.readString();
            e.addRecommendSearchWords(r);
            break;

          case 8:
            r = t.readEnum();
            e.setSearchLandingPage(r);
            break;

          case 13:
            r = t.readString();
            e.addFilterOptions(r);
            break;

          case 34:
            r = t.readString();
            e.setSearchCplId(r);
            break;

          case 39:
            r = t.readString();
            e.setWordRequestId(r);
            break;

          case 48:
            r = t.readString();
            e.addRecommendSearchWordsTypeArray(r);
            break;

          case 50:
            r = t.readString();
            e.addRecommendDisplaySearchWords(r);
            break;

          default:
            t.skipField();
        }
    }
    return e;
}, r.SearchTarget.prototype.serializeBinary = function() {
    var t = new e.BinaryWriter();
    return r.SearchTarget.serializeBinaryToWriter(this, t), t.getResultBuffer();
}, r.SearchTarget.serializeBinaryToWriter = function(e, t) {
    var r = void 0;
    (r = e.getSearchSessionId()).length > 0 && t.writeString(2, r), (r = e.getSearchWord()).length > 0 && t.writeString(3, r), 
    0 !== (r = e.getSearchWordFrom()) && t.writeEnum(4, r), 0 !== (r = e.getNoteSortType()) && t.writeEnum(6, r), 
    (r = e.getRecommendSearchWordsList()).length > 0 && t.writeRepeatedString(7, r), 
    0 !== (r = e.getSearchLandingPage()) && t.writeEnum(8, r), (r = e.getFilterOptionsList()).length > 0 && t.writeRepeatedString(13, r), 
    (r = e.getSearchCplId()).length > 0 && t.writeString(34, r), (r = e.getWordRequestId()).length > 0 && t.writeString(39, r), 
    (r = e.getRecommendSearchWordsTypeArrayList()).length > 0 && t.writeRepeatedString(48, r), 
    (r = e.getRecommendDisplaySearchWordsList()).length > 0 && t.writeRepeatedString(50, r);
}, r.SearchTarget.prototype.getSearchSessionId = function() {
    return e.Message.getFieldWithDefault(this, 2, "");
}, r.SearchTarget.prototype.setSearchSessionId = function(t) {
    e.Message.setField(this, 2, t);
}, r.SearchTarget.prototype.getSearchWord = function() {
    return e.Message.getFieldWithDefault(this, 3, "");
}, r.SearchTarget.prototype.setSearchWord = function(t) {
    e.Message.setField(this, 3, t);
}, r.SearchTarget.prototype.getSearchWordFrom = function() {
    return e.Message.getFieldWithDefault(this, 4, 0);
}, r.SearchTarget.prototype.setSearchWordFrom = function(t) {
    e.Message.setField(this, 4, t);
}, r.SearchTarget.prototype.getNoteSortType = function() {
    return e.Message.getFieldWithDefault(this, 6, 0);
}, r.SearchTarget.prototype.setNoteSortType = function(t) {
    e.Message.setField(this, 6, t);
}, r.SearchTarget.prototype.getRecommendSearchWordsList = function() {
    return e.Message.getRepeatedField(this, 7);
}, r.SearchTarget.prototype.setRecommendSearchWordsList = function(t) {
    e.Message.setField(this, 7, t || []);
}, r.SearchTarget.prototype.addRecommendSearchWords = function(t, r) {
    e.Message.addToRepeatedField(this, 7, t, r);
}, r.SearchTarget.prototype.clearRecommendSearchWordsList = function() {
    this.setRecommendSearchWordsList([]);
}, r.SearchTarget.prototype.getSearchLandingPage = function() {
    return e.Message.getFieldWithDefault(this, 8, 0);
}, r.SearchTarget.prototype.setSearchLandingPage = function(t) {
    e.Message.setField(this, 8, t);
}, r.SearchTarget.prototype.getFilterOptionsList = function() {
    return e.Message.getRepeatedField(this, 13);
}, r.SearchTarget.prototype.setFilterOptionsList = function(t) {
    e.Message.setField(this, 13, t || []);
}, r.SearchTarget.prototype.addFilterOptions = function(t, r) {
    e.Message.addToRepeatedField(this, 13, t, r);
}, r.SearchTarget.prototype.clearFilterOptionsList = function() {
    this.setFilterOptionsList([]);
}, r.SearchTarget.prototype.getSearchCplId = function() {
    return e.Message.getFieldWithDefault(this, 34, "");
}, r.SearchTarget.prototype.setSearchCplId = function(t) {
    e.Message.setField(this, 34, t);
}, r.SearchTarget.prototype.getWordRequestId = function() {
    return e.Message.getFieldWithDefault(this, 39, "");
}, r.SearchTarget.prototype.setWordRequestId = function(t) {
    e.Message.setField(this, 39, t);
}, r.SearchTarget.prototype.getRecommendSearchWordsTypeArrayList = function() {
    return e.Message.getRepeatedField(this, 48);
}, r.SearchTarget.prototype.setRecommendSearchWordsTypeArrayList = function(t) {
    e.Message.setField(this, 48, t || []);
}, r.SearchTarget.prototype.addRecommendSearchWordsTypeArray = function(t, r) {
    e.Message.addToRepeatedField(this, 48, t, r);
}, r.SearchTarget.prototype.clearRecommendSearchWordsTypeArrayList = function() {
    this.setRecommendSearchWordsTypeArrayList([]);
}, r.SearchTarget.prototype.getRecommendDisplaySearchWordsList = function() {
    return e.Message.getRepeatedField(this, 50);
}, r.SearchTarget.prototype.setRecommendDisplaySearchWordsList = function(t) {
    e.Message.setField(this, 50, t || []);
}, r.SearchTarget.prototype.addRecommendDisplaySearchWords = function(t, r) {
    e.Message.addToRepeatedField(this, 50, t, r);
}, r.SearchTarget.prototype.clearRecommendDisplaySearchWordsList = function() {
    this.setRecommendDisplaySearchWordsList([]);
}, r.NoteCommentTarget = function(t) {
    e.Message.initialize(this, t, 0, -1, null, null);
}, t.inherits(r.NoteCommentTarget, e.Message), t.DEBUG && !COMPILED && (r.NoteCommentTarget.displayName = "proto.NoteCommentTarget"), 
e.Message.GENERATE_TO_OBJECT && (r.NoteCommentTarget.prototype.toObject = function(e) {
    return r.NoteCommentTarget.toObject(e, this);
}, r.NoteCommentTarget.toObject = function(t, r) {
    var a = {
        commentId: e.Message.getFieldWithDefault(r, 1, ""),
        isReply: e.Message.getFieldWithDefault(r, 3, !1),
        parentCommentId: e.Message.getFieldWithDefault(r, 4, ""),
        commentPosition: e.Message.getFieldWithDefault(r, 5, 0),
        rootCommentId: e.Message.getFieldWithDefault(r, 7, "")
    };
    return t && (a.$jspbMessageInstance = r), a;
}), r.NoteCommentTarget.deserializeBinary = function(t) {
    var a = new e.BinaryReader(t), i = new r.NoteCommentTarget();
    return r.NoteCommentTarget.deserializeBinaryFromReader(i, a);
}, r.NoteCommentTarget.deserializeBinaryFromReader = function(e, t) {
    for (;t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 1:
            var r = t.readString();
            e.setCommentId(r);
            break;

          case 3:
            r = t.readBool();
            e.setIsReply(r);
            break;

          case 4:
            r = t.readString();
            e.setParentCommentId(r);
            break;

          case 5:
            r = t.readInt32();
            e.setCommentPosition(r);
            break;

          case 7:
            r = t.readString();
            e.setRootCommentId(r);
            break;

          default:
            t.skipField();
        }
    }
    return e;
}, r.NoteCommentTarget.prototype.serializeBinary = function() {
    var t = new e.BinaryWriter();
    return r.NoteCommentTarget.serializeBinaryToWriter(this, t), t.getResultBuffer();
}, r.NoteCommentTarget.serializeBinaryToWriter = function(e, t) {
    var r = void 0;
    (r = e.getCommentId()).length > 0 && t.writeString(1, r), (r = e.getIsReply()) && t.writeBool(3, r), 
    (r = e.getParentCommentId()).length > 0 && t.writeString(4, r), 0 !== (r = e.getCommentPosition()) && t.writeInt32(5, r), 
    (r = e.getRootCommentId()).length > 0 && t.writeString(7, r);
}, r.NoteCommentTarget.prototype.getCommentId = function() {
    return e.Message.getFieldWithDefault(this, 1, "");
}, r.NoteCommentTarget.prototype.setCommentId = function(t) {
    e.Message.setField(this, 1, t);
}, r.NoteCommentTarget.prototype.getIsReply = function() {
    return e.Message.getFieldWithDefault(this, 3, !1);
}, r.NoteCommentTarget.prototype.setIsReply = function(t) {
    e.Message.setField(this, 3, t);
}, r.NoteCommentTarget.prototype.getParentCommentId = function() {
    return e.Message.getFieldWithDefault(this, 4, "");
}, r.NoteCommentTarget.prototype.setParentCommentId = function(t) {
    e.Message.setField(this, 4, t);
}, r.NoteCommentTarget.prototype.getCommentPosition = function() {
    return e.Message.getFieldWithDefault(this, 5, 0);
}, r.NoteCommentTarget.prototype.setCommentPosition = function(t) {
    e.Message.setField(this, 5, t);
}, r.NoteCommentTarget.prototype.getRootCommentId = function() {
    return e.Message.getFieldWithDefault(this, 7, "");
}, r.NoteCommentTarget.prototype.setRootCommentId = function(t) {
    e.Message.setField(this, 7, t);
}, r.ChannelTabTarget = function(t) {
    e.Message.initialize(this, t, 0, -1, null, null);
}, t.inherits(r.ChannelTabTarget, e.Message), t.DEBUG && !COMPILED && (r.ChannelTabTarget.displayName = "proto.ChannelTabTarget"), 
e.Message.GENERATE_TO_OBJECT && (r.ChannelTabTarget.prototype.toObject = function(e) {
    return r.ChannelTabTarget.toObject(e, this);
}, r.ChannelTabTarget.toObject = function(t, r) {
    var a = {
        channelTabId: e.Message.getFieldWithDefault(r, 1, ""),
        channelTabName: e.Message.getFieldWithDefault(r, 2, ""),
        channelTabIndex: e.Message.getFieldWithDefault(r, 3, 0)
    };
    return t && (a.$jspbMessageInstance = r), a;
}), r.ChannelTabTarget.deserializeBinary = function(t) {
    var a = new e.BinaryReader(t), i = new r.ChannelTabTarget();
    return r.ChannelTabTarget.deserializeBinaryFromReader(i, a);
}, r.ChannelTabTarget.deserializeBinaryFromReader = function(e, t) {
    for (;t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 1:
            var r = t.readString();
            e.setChannelTabId(r);
            break;

          case 2:
            r = t.readString();
            e.setChannelTabName(r);
            break;

          case 3:
            r = t.readInt32();
            e.setChannelTabIndex(r);
            break;

          default:
            t.skipField();
        }
    }
    return e;
}, r.ChannelTabTarget.prototype.serializeBinary = function() {
    var t = new e.BinaryWriter();
    return r.ChannelTabTarget.serializeBinaryToWriter(this, t), t.getResultBuffer();
}, r.ChannelTabTarget.serializeBinaryToWriter = function(e, t) {
    var r = void 0;
    (r = e.getChannelTabId()).length > 0 && t.writeString(1, r), (r = e.getChannelTabName()).length > 0 && t.writeString(2, r), 
    0 !== (r = e.getChannelTabIndex()) && t.writeInt32(3, r);
}, r.ChannelTabTarget.prototype.getChannelTabId = function() {
    return e.Message.getFieldWithDefault(this, 1, "");
}, r.ChannelTabTarget.prototype.setChannelTabId = function(t) {
    e.Message.setField(this, 1, t);
}, r.ChannelTabTarget.prototype.getChannelTabName = function() {
    return e.Message.getFieldWithDefault(this, 2, "");
}, r.ChannelTabTarget.prototype.setChannelTabName = function(t) {
    e.Message.setField(this, 2, t);
}, r.ChannelTabTarget.prototype.getChannelTabIndex = function() {
    return e.Message.getFieldWithDefault(this, 3, 0);
}, r.ChannelTabTarget.prototype.setChannelTabIndex = function(t) {
    e.Message.setField(this, 3, t);
}, r.DanmakuTarget = function(t) {
    e.Message.initialize(this, t, 0, -1, null, null);
}, t.inherits(r.DanmakuTarget, e.Message), t.DEBUG && !COMPILED && (r.DanmakuTarget.displayName = "proto.DanmakuTarget"), 
e.Message.GENERATE_TO_OBJECT && (r.DanmakuTarget.prototype.toObject = function(e) {
    return r.DanmakuTarget.toObject(e, this);
}, r.DanmakuTarget.toObject = function(t, r) {
    var a = {
        danmakuId: e.Message.getFieldWithDefault(r, 1, ""),
        danmakuUserid: e.Message.getFieldWithDefault(r, 2, ""),
        danmakuContent: e.Message.getFieldWithDefault(r, 3, ""),
        danmakuTime: +e.Message.getFieldWithDefault(r, 4, 0)
    };
    return t && (a.$jspbMessageInstance = r), a;
}), r.DanmakuTarget.deserializeBinary = function(t) {
    var a = new e.BinaryReader(t), i = new r.DanmakuTarget();
    return r.DanmakuTarget.deserializeBinaryFromReader(i, a);
}, r.DanmakuTarget.deserializeBinaryFromReader = function(e, t) {
    for (;t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 1:
            var r = t.readString();
            e.setDanmakuId(r);
            break;

          case 2:
            r = t.readString();
            e.setDanmakuUserid(r);
            break;

          case 3:
            r = t.readString();
            e.setDanmakuContent(r);
            break;

          case 4:
            r = t.readDouble();
            e.setDanmakuTime(r);
            break;

          default:
            t.skipField();
        }
    }
    return e;
}, r.DanmakuTarget.prototype.serializeBinary = function() {
    var t = new e.BinaryWriter();
    return r.DanmakuTarget.serializeBinaryToWriter(this, t), t.getResultBuffer();
}, r.DanmakuTarget.serializeBinaryToWriter = function(e, t) {
    var r = void 0;
    (r = e.getDanmakuId()).length > 0 && t.writeString(1, r), (r = e.getDanmakuUserid()).length > 0 && t.writeString(2, r), 
    (r = e.getDanmakuContent()).length > 0 && t.writeString(3, r), 0 !== (r = e.getDanmakuTime()) && t.writeDouble(4, r);
}, r.DanmakuTarget.prototype.getDanmakuId = function() {
    return e.Message.getFieldWithDefault(this, 1, "");
}, r.DanmakuTarget.prototype.setDanmakuId = function(t) {
    e.Message.setField(this, 1, t);
}, r.DanmakuTarget.prototype.getDanmakuUserid = function() {
    return e.Message.getFieldWithDefault(this, 2, "");
}, r.DanmakuTarget.prototype.setDanmakuUserid = function(t) {
    e.Message.setField(this, 2, t);
}, r.DanmakuTarget.prototype.getDanmakuContent = function() {
    return e.Message.getFieldWithDefault(this, 3, "");
}, r.DanmakuTarget.prototype.setDanmakuContent = function(t) {
    e.Message.setField(this, 3, t);
}, r.DanmakuTarget.prototype.getDanmakuTime = function() {
    return +e.Message.getFieldWithDefault(this, 4, 0);
}, r.DanmakuTarget.prototype.setDanmakuTime = function(t) {
    e.Message.setField(this, 4, t);
}, r.ReportTarget = function(t) {
    e.Message.initialize(this, t, 0, -1, null, null);
}, t.inherits(r.ReportTarget, e.Message), t.DEBUG && !COMPILED && (r.ReportTarget.displayName = "proto.ReportTarget"), 
e.Message.GENERATE_TO_OBJECT && (r.ReportTarget.prototype.toObject = function(e) {
    return r.ReportTarget.toObject(e, this);
}, r.ReportTarget.toObject = function(t, r) {
    var a = {
        reportType: e.Message.getFieldWithDefault(r, 2, ""),
        reportSource: e.Message.getFieldWithDefault(r, 3, ""),
        reportTargetId: e.Message.getFieldWithDefault(r, 4, ""),
        reportSourceId: e.Message.getFieldWithDefault(r, 5, ""),
        reportEntrance: e.Message.getFieldWithDefault(r, 6, "")
    };
    return t && (a.$jspbMessageInstance = r), a;
}), r.ReportTarget.deserializeBinary = function(t) {
    var a = new e.BinaryReader(t), i = new r.ReportTarget();
    return r.ReportTarget.deserializeBinaryFromReader(i, a);
}, r.ReportTarget.deserializeBinaryFromReader = function(e, t) {
    for (;t.nextField() && !t.isEndGroup(); ) {
        switch (t.getFieldNumber()) {
          case 2:
            var r = t.readString();
            e.setReportType(r);
            break;

          case 3:
            r = t.readString();
            e.setReportSource(r);
            break;

          case 4:
            r = t.readString();
            e.setReportTargetId(r);
            break;

          case 5:
            r = t.readString();
            e.setReportSourceId(r);
            break;

          case 6:
            r = t.readString();
            e.setReportEntrance(r);
            break;

          default:
            t.skipField();
        }
    }
    return e;
}, r.ReportTarget.prototype.serializeBinary = function() {
    var t = new e.BinaryWriter();
    return r.ReportTarget.serializeBinaryToWriter(this, t), t.getResultBuffer();
}, r.ReportTarget.serializeBinaryToWriter = function(e, t) {
    var r = void 0;
    (r = e.getReportType()).length > 0 && t.writeString(2, r), (r = e.getReportSource()).length > 0 && t.writeString(3, r), 
    (r = e.getReportTargetId()).length > 0 && t.writeString(4, r), (r = e.getReportSourceId()).length > 0 && t.writeString(5, r), 
    (r = e.getReportEntrance()).length > 0 && t.writeString(6, r);
}, r.ReportTarget.prototype.getReportType = function() {
    return e.Message.getFieldWithDefault(this, 2, "");
}, r.ReportTarget.prototype.setReportType = function(t) {
    e.Message.setField(this, 2, t);
}, r.ReportTarget.prototype.getReportSource = function() {
    return e.Message.getFieldWithDefault(this, 3, "");
}, r.ReportTarget.prototype.setReportSource = function(t) {
    e.Message.setField(this, 3, t);
}, r.ReportTarget.prototype.getReportTargetId = function() {
    return e.Message.getFieldWithDefault(this, 4, "");
}, r.ReportTarget.prototype.setReportTargetId = function(t) {
    e.Message.setField(this, 4, t);
}, r.ReportTarget.prototype.getReportSourceId = function() {
    return e.Message.getFieldWithDefault(this, 5, "");
}, r.ReportTarget.prototype.setReportSourceId = function(t) {
    e.Message.setField(this, 5, t);
}, r.ReportTarget.prototype.getReportEntrance = function() {
    return e.Message.getFieldWithDefault(this, 6, "");
}, r.ReportTarget.prototype.setReportEntrance = function(t) {
    e.Message.setField(this, 6, t);
}, r.TargetDisplayType = {
    DEFAULT_5: 0,
    MIDDLE_ENTRANCE: 1041,
    NOTE_IMAGE_IN_RECOMMEND: 1123,
    NOTE_IN_USER_PAGE_BOARD_TAB: 48,
    NOTE_IN_USER_PAGE_NOTE_TAB: 45,
    NOTE_RELATED_NOTES: 42,
    NOTE_SOURCE: 41,
    SEARCH_RESULT: 72,
    SEARCH_WORD_DISPLAY_AFTER_DISCOVERY_RETURN: 1310,
    SEARCH_WORD_DISPLAY_STYLE_AUTO_COMPLETE: 76,
    SEARCH_WORD_DISPLAY_STYLE_CONFIRM: 77,
    SEARCH_WORD_DISPLAY_STYLE_HISTORY: 74,
    SEARCH_WORD_DISPLAY_STYLE_TRENDING: 75,
    TARGET_IN_PAGE_OUTAPP: 1225,
    USER_IN_NOTE_COMMENT_AT: 12,
    USER_IN_NOTE_COMMENT_AUTHOR: 11
}, r.Platform = {
    DEFAULT_13: 0,
    IOS: 1,
    ANDROID: 2,
    REACTNATIVE: 3,
    MOBILEBROWSER: 4,
    WECHATBROWSER: 5,
    WECHATMINIPROGRAM: 6,
    PC: 7,
    IOSBROWSER: 8,
    ANDROIDBROWSER: 9,
    FLUTTER: 10
}, r.PageInstance = {
    DEFAULT_2: 0,
    EXPLORE_FEED: 1,
    NOTE_COMMENT_PAGE: 80,
    NOTE_DETAIL_R10: 36,
    PROFILE_PAGE: 50,
    SEARCH_ENTRY: 31,
    SEARCH_RESULT_NOTES: 32,
    USER_PAGE: 52,
    VIDEO_FEED: 13
}, r.RichTargetType = {
    DEFAULT_3: 0,
    ADS_TARGET: 6,
    CHANNEL_TAB_TARGET: 5,
    DANMAKU: 1420,
    JUST_READ_TAG: 10338,
    LAUNCH_APP_TARGET: 1273,
    MORE_NOTES_PAGE_TARGET: 1151,
    NOTE: 1,
    NOTE_AUTHOR: 12,
    NOTE_COMMENT: 11,
    NOTE_COMMENT_PAGE_TARGET: 120,
    NOTE_IMAGE: 13,
    NOTE_VIDEO: 14,
    REPORT_TARGET: 10370,
    RETURN_TOP_BUTTON: 10426,
    SEARCH_CUSTOM_PAGE_TARGET: 10235,
    SEARCH_ENTRY_TARGET: 51,
    SEARCH_RESULT_POIS_TARGET: 1374,
    SEARCH_WORD_TARGET: 55,
    USER: 3,
    USER_IMAGE: 16
}, r.NoteSortType = {
    DEFAULT_18: 0,
    NOTE_SORT_BY_AI: 3,
    NOTE_SORT_BY_CREATE_TIME: 2,
    NOTE_SORT_BY_POPULARITY: 4,
    NOTE_SORT_BY_TRENDING: 1
}, r.AdsType = {
    DEFAULT_33: 0,
    ADS_TYPE_GIF: 3,
    ADS_TYPE_GOODS: 10,
    ADS_TYPE_HUATI_PAGE_VIDEO: 12,
    ADS_TYPE_LANDING_PAGE: 4,
    ADS_TYPE_NATIVE_WEBVIEW: 11,
    ADS_TYPE_NOTE: 5,
    ADS_TYPE_NOTE_FEED_URL_LINK: 8,
    ADS_TYPE_PIC: 2,
    ADS_TYPE_SEARCH_BRAND_ZONE: 7,
    ADS_TYPE_VIDEO: 1,
    ADS_TYPE_VIDEO_FEED_URL_LINK: 9,
    ADS_TYPE_WEBVIEW: 6
}, r.NameTracker = {
    DEFAULT_1: 0,
    IOST: 1,
    ANDRT: 2,
    RNT: 3,
    MPT: 4,
    WAPT: 5,
    WXMPT: 6,
    BDMPT: 7,
    TTMPT: 8,
    QQMPT: 9,
    APMPT: 10
}, r.LoginRole = {
    DEFAULT_38: 0,
    LOGIN_ROLE_VISITOR: 1,
    LOGIN_ROLE_LOGOUT: 2,
    LOGIN_ROLE_LOGIN: 3,
    LOGIN_ROLE_VISITOR_PRELOADED: 4,
    LOGIN_ROLE_VISITOR_NONPRELOADED: 5
}, r.SearchWordFrom = {
    DEFAULT_17: 0,
    SEARCH_WORD_FROM_AUTO_COMPLETE: 1,
    SEARCH_WORD_FROM_AUTO_COMPLETE_DIRECT: 33,
    SEARCH_WORD_FROM_AUTO_QUERIES: 12,
    SEARCH_WORD_FROM_CART_COUPON: 30,
    SEARCH_WORD_FROM_CLASSIFICATION_PAGE: 9,
    SEARCH_WORD_FROM_CLICK_NOTE_FEED: 24,
    SEARCH_WORD_FROM_CLICK_NOTE_SEARCH: 25,
    SEARCH_WORD_FROM_CONFIRM: 2,
    SEARCH_WORD_FROM_DEFAULT: 10,
    SEARCH_WORD_FROM_DYNAMIC_RECOMMEND_QUERY: 26,
    SEARCH_WORD_FROM_ENTRY_RECOMMEND_QUERY: 28,
    SEARCH_WORD_FROM_GOODS_DETAIL: 11,
    SEARCH_WORD_FROM_GOODS_LISTS: 14,
    SEARCH_WORD_FROM_GRAPHIC_TRENDING: 15,
    SEARCH_WORD_FROM_HISTORY: 3,
    SEARCH_WORD_FROM_HOMEFEED: 17,
    SEARCH_WORD_FROM_HOT_ISSUE: 21,
    SEARCH_WORD_FROM_IMAGE_TAG: 6,
    SEARCH_WORD_FROM_OPENURL: 27,
    SEARCH_WORD_FROM_ORDER_DETAIL_COUPON: 32,
    SEARCH_WORD_FROM_ORDER_LIST_COUPON: 31,
    SEARCH_WORD_FROM_PUSH: 19,
    SEARCH_WORD_FROM_RANKING_PAGE: 20,
    SEARCH_WORD_FROM_RECOMMEND_QUERY: 5,
    SEARCH_WORD_FROM_RECOMMEND_QUERY_FOR_LESS_RESULT: 16,
    SEARCH_WORD_FROM_REPEAT_SEARCH_PUSH: 23,
    SEARCH_WORD_FROM_REWRITE_QUERY: 29,
    SEARCH_WORD_FROM_SEARCH_RESULT: 7,
    SEARCH_WORD_FROM_SPLASHADS: 18,
    SEARCH_WORD_FROM_SPOTLIGHT: 8,
    SEARCH_WORD_FROM_TOPIC_GROUPS: 13,
    SEARCH_WORD_FROM_TRENDING: 4,
    SEARCH_WORD_FROM_TREND_FEED: 22
}, r.MallUserType = {
    DEFAULT_10: 0,
    NEW_CUSTOMER: 1,
    OLD_CUSTOMER: 2
}, r.NoteType = {
    DEFAULT_6: 0,
    LONG_NOTE: 2,
    SHORT_NOTE: 1,
    VIDEO_NOTE: 3
}, r.AppOSMode = {
    DEFAULT_34: 0,
    APP_OS_MODE_NORMAL: 1,
    APP_OS_MODE_SILENT: 2
}, r.NetworkType = {
    DEFAULT_7: 0,
    WIFI: 1,
    MOBILE: 2,
    OFFLINE: 3,
    UNKNOW: 4
}, r.ActionInteractionType = {
    DEFAULT_12: 0,
    ADD_COMMENT_ENGAGE_BAR: 1002,
    ENTER_CMT_LIST_BY_CLICK_CMT_BUTTON: 70,
    GOTO_SEARCH_ENTRY_BY_CLEAR_INPUT: 61,
    GOTO_SEARCH_ENTRY_BY_CLICK_INPUT: 60,
    LIKE_BTN_ONCLICK: 1,
    LIKE_NOTE_IMAGE_DOUBLE_CLICK: 2,
    SHARE_FEED_NOTE_HEAD: 11
}, r.NormalizedAction = {
    DEFAULT_4: 0,
    ADD_COMMENT: 23,
    CLICK: 2,
    COMMENT_API: 14,
    DELETE_ATTEMPT: 3001,
    DELETE_CONFIRM: 3003,
    DOWNLOAD_ATTEMPT: 10071,
    FAV: 7,
    FOLLOW: 15,
    GOTO_CHANNEL_TAB: 142,
    GOTO_PAGE: 141,
    IMPRESSION: 1,
    LAUNCH_APP: 10173,
    LIKE: 4,
    LIKE_API: 31,
    LOGIN_ATTEMPT: 1100,
    LOGIN_ATTEMPT_SUCCESS: 10047,
    LOGIN_AUTH_DENY: 10111,
    LOGIN_GOT_PHONE: 10110,
    PAGE_END: 151,
    PAGEVIEW: 18,
    REPORT_ATTEMPT: 10227,
    SEARCH: 131,
    SEND_COMMENT: 24,
    SHARE_ATTEMPT: 71,
    SLIDE_TO_BOTTOM: 64,
    SLIDE_TO_LEFT: 61,
    SLIDE_TO_RIGHT: 62,
    SLIDE_TO_TOP: 63,
    TAKE_SCREENSHOT: 300,
    TARGET_CLOSE: 272,
    TARGET_EDIT: 189,
    TARGET_UNFOLD: 111,
    UNFAV: 8,
    UNLIKE: 5,
    UNLIKE_API: 32,
    VIDEO_END: 104,
    VIDEO_PAUSE: 102
}, r.AppStartMode = {
    DEFAULT_45: 0,
    APP_START_MODE_COLD: 1,
    APP_START_MODE_HOT: 2
}, r.PageLoadType = {
    DEFAULT_56: 0
}, r.Environment = {
    DEFAULT_64: 0,
    ENVIRONMENT_DEVELOP: 1,
    ENVIRONMENT_RELEASE: 2
}, r.VideoPlaySource = {
    DEFAULT_89: 0,
    AUTO_PLAY_NEXT: 1,
    CLICK_PLAY: 2,
    PLAY_ALL_PORTFOLIO: 3
}, t.object.extend(exports, r);