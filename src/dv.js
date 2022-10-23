"use strict";
exports.__esModule = true;
exports.dv = void 0;
var video_1 = require("./video");
var dv = /** @class */ (function () {
    function dv(url) {
        this.video = new video_1.Video(url);
    }
    return dv;
}());
exports.dv = dv;
var dvElement = new dv("/.../path/to/video");
