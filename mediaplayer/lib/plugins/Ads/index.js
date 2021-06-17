"use strict";
exports.__esModule = true;
var Ads_1 = require("./Ads");
var AdsPlugin = /** @class */ (function () {
    function AdsPlugin() {
        this.ads = Ads_1["default"].getInstance();
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }
    AdsPlugin.prototype.run = function (player) {
        this.player = player;
        this.media = this.player.media;
        this.media.addEventListener('timeupdate', this.handleTimeUpdate);
    };
    AdsPlugin.prototype.handleTimeUpdate = function () {
        var currentTime = Math.floor(this.media.currentTime);
        if (currentTime % 30 === 0) {
            this.renderAd();
        }
    };
    AdsPlugin.prototype.renderAd = function () {
        if (this.currentAd) {
            return;
        }
        var ad = this.ads.getAd();
        this.currentAd = ad;
        console.log(this.currentAd);
    };
    return AdsPlugin;
}());
exports["default"] = AdsPlugin;
