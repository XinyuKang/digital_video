"use strict";
exports.__esModule = true;
exports.Rect = exports.Circle = exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape() {
        this.color = "black";
    }
    return Shape;
}());
exports.Shape = Shape;
var Circle = /** @class */ (function () {
    function Circle() {
        this.cx = 0;
        this.cy = 0;
        this.r = 1;
    }
    return Circle;
}());
exports.Circle = Circle;
var Rect = /** @class */ (function () {
    function Rect() {
        this.x = 0;
        this.y = 0;
    }
    return Rect;
}());
exports.Rect = Rect;
