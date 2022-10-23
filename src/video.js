"use strict";
exports.__esModule = true;
exports.Video = void 0;
globalThis.idCollection = new Set();
var Video = /** @class */ (function () {
    function Video(url) {
        this.frames = this.load(url);
    }
    Video.prototype.load = function (url) {
        // load the url into a video ready to be processed
        // return all frames in the video
        // each frame has multiple players
        // each frame's parent should be this video
        // TODO: should load all frames with players in each frame
        // I image url contains a set of frame objects
        // each frame object contains a set of player objects
        // parsedUrl = someMethod(url)   // this is a set of frame objects
        // vid = this
        // for (let frameObj of ...) {
        // frame = new Frame(vid, frameObj)   // pass both video and parsed frameObj
        // }
        return new Array();
    };
    Video.prototype.selectAll = function (type) {
        var ret = new Array();
        for (var _i = 0, _a = this.frames; _i < _a.length; _i++) {
            var f = _a[_i];
            ret = ret.concat(f.selectAll(type));
        }
        return ret;
    };
    Video.prototype.select = function (id) {
        for (var _i = 0, _a = this.frames; _i < _a.length; _i++) {
            var f = _a[_i];
            var subret = f.select(id);
            if (subret)
                return subret;
        }
        return null;
    };
    return Video;
}());
exports.Video = Video;
