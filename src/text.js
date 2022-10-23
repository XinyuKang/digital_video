"use strict";
// this script implements texts to be appended
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
exports.Text = void 0;
var player_1 = require("./player");
// interface TextInterface extends TNode {
//     x: number
//     y: number
//     fontSize: number
//     fill: string
//     stroke: string
// }
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(id) {
        var _this = _super.call(this, id) || this;
        _this.x = 0;
        _this.y = 0;
        _this.fontSize = 10;
        _this.fill = "black";
        _this.stroke = "black";
        _this.content = "";
        _this.name = "text";
        return _this;
    }
    Text.prototype.attr = function (attr, val) {
        _super.prototype.attr.call(this, attr, val);
        if (attr === "cx") {
            this.x = +val;
        }
        else if (attr === "cy") {
            this.y = +val;
        }
        else if (attr === "fontSize") {
            this.fontSize = +val;
        }
        else if (attr === "fill") {
            this.fill = val;
        }
        else if (attr === "stroke") {
            this.stroke = val;
        }
        else {
            throw new Error("No such attribute for text");
        }
    };
    Text.prototype.text = function (content) {
        this.content = content;
    };
    return Text;
}(player_1.TNode));
exports.Text = Text;
