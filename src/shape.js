"use strict";
// this script implements all kinds of shapes that might be  appended
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Rect = exports.Circle = void 0;
var player_1 = require("./player");
// interface CircleInterface extends TNode {
//     cx: number
//     cy: number
//     r: number
//     fill: string
//     stroke: string
// }
// interface RectInterface extends TNode {
//     x: number
//     y: number
//     width: number
//     height: number
//     fill: string
//     stroke: string
// }
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(id) {
        var _this = _super.call(this, id) || this;
        _this.cx = 0;
        _this.cy = 0;
        _this.r = 1;
        _this.fill = "black";
        _this.stroke = "black";
        _this.name = "circle";
        return _this;
    }
    Circle.prototype.attr = function (attr, val) {
        _super.prototype.attr.call(this, attr, val);
        if (attr === "cx") {
            this.cx = +val;
        }
        else if (attr === "cy") {
            this.cy = +val;
        }
        else if (attr === "r") {
            this.r = +val;
        }
        else if (attr === "fill") {
            this.fill = val;
        }
        else if (attr === "stroke") {
            this.stroke = val;
        }
        else {
            throw new Error("No such attribute for circle");
        }
    };
    return Circle;
}(player_1.TNode));
exports.Circle = Circle;
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect(id) {
        var _this = _super.call(this, id) || this;
        _this.x = 0;
        _this.y = 0;
        _this.width = 0;
        _this.height = 0;
        _this.fill = "black";
        _this.stroke = "black";
        _this.name = "rect";
        return _this;
    }
    Rect.prototype.attr = function (attr, val) {
        _super.prototype.attr.call(this, attr, val);
        if (attr === "x") {
            this.x = +val;
        }
        else if (attr === "y") {
            this.y = +val;
        }
        else if (attr === "width") {
            this.width = +val;
        }
        else if (attr === "height") {
            this.height = +val;
        }
        else if (attr === "fill") {
            this.fill = val;
        }
        else if (attr === "stroke") {
            this.stroke = val;
        }
        else {
            throw new Error("No such attribute for rectangle");
        }
    };
    return Rect;
}(player_1.TNode));
exports.Rect = Rect;
