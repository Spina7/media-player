"use strict";
exports.__esModule = true;
var MediaPlayer = /** @class */ (function () {
    function MediaPlayer(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlugins();
    }
    MediaPlayer.prototype.initPlugins = function () {
        var _this = this;
        this.plugins.forEach(function (plugin) {
            plugin.run(_this);
        });
    };
    MediaPlayer.prototype.play = function () {
        this.media.play();
    };
    MediaPlayer.prototype.pause = function () {
        this.media.pause();
    };
    MediaPlayer.prototype.togglePlay = function () {
        if (this.media.paused) {
            this.play();
        }
        else {
            this.pause();
        }
    };
    MediaPlayer.prototype.mute = function () {
        this.media.muted = true;
    };
    MediaPlayer.prototype.unmute = function () {
        this.media.muted = false;
    };
    return MediaPlayer;
}());
exports["default"] = MediaPlayer;
