"use strict";
// this script implements texts to be appended
exports.__esModule = true;
exports.Text = void 0;
var Text = /** @class */ (function () {
    function Text() {
        this.name = "circle";
        this.children = null;
        this.x = 0;
        this.y = 0;
        this.fontSize = 10;
        this.fill = "black";
        this.stroke = "black";
    }
    Text.prototype.attr = function (attr, val) {
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
    return Text;
}());
exports.Text = Text;
