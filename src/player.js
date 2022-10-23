"use strict";
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
exports.Player = exports.TNode = void 0;
var uuid_1 = require("uuid");
var shape_1 = require("./shape");
var text_1 = require("./text");
// export interface TNode {
//     children: TNode[] | null
//     name: string
//     id: string | null
//     attr(attr: string, val: string): void
//     // treeTraversal(type: string): Array<TNode>
//     // attr: TODO: add possile attributes
// }
var TNode = /** @class */ (function () {
    function TNode(id) {
        this.name = null;
        this.children = null;
        if (id && idCollection.has(id))
            throw new Error("ID " + id + " already exists");
        else if (!id)
            id = (0, uuid_1.v4)();
        this.id = id;
    }
    TNode.prototype.attr = function (attr, val) {
        if (attr === "id") {
            // check if id already exists
            if (idCollection.has(val))
                throw new Error("ID " + val + " already exists");
            else
                this.id = val;
        }
    };
    TNode.prototype.append = function (name) {
        //  cannot add "player" type itself
        if (name == "player")
            throw new Error("Cannot append 'player' to ");
        var child;
        if (name == "circle")
            child = new shape_1.Circle();
        else if (name == "rect")
            child = new shape_1.Rect();
        else if (name == "text")
            child = new text_1.Text();
        else
            throw new Error("Object of type " + name + " is  not defined");
        if (!this.children) {
            this.children = new Array();
        }
        this.children.push(child);
    };
    TNode.prototype.select = function (id) {
        if (this.id === id)
            return this;
        if (!this.children)
            return null;
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var c = _a[_i];
            var subret = c.select(id);
            if (subret)
                return subret;
        }
        return null;
    };
    TNode.prototype.treeTraversal = function (root, type) {
        var ret = new Array();
        if (root) {
            if (root.name === type)
                ret.push(root);
            if (root.children) {
                for (var i = 0; i < root.children.length; i++) {
                    ret.concat(this.treeTraversal(root.children[i], type));
                }
            }
        }
        return ret;
    };
    return TNode;
}());
exports.TNode = TNode;
// TODO: extend and implement interface  https://www.typescripttutorial.net/typescript-tutorial/typescript-extend-interface/
// interface Tree {
//     root: TNode | null
//     // playerID: string | undefined
// }
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(player, id) {
        var _this = _super.call(this, id) || this;
        _this.name = "player";
        _this.player = player;
        return _this;
    }
    Player.prototype.selectAll = function (type) {
        // player object cannot select "player" itself
        if (type == "player")
            throw new Error("Cannot select 'player' on object type Player");
        var ret = new Array();
        // traverse the tree and return all nodes of this name type
        if (this.children) {
            for (var i = 0; i < this.children.length; i++) {
                ret.concat(this.treeTraversal(this.children[i], type));
            }
        }
        return ret;
    };
    return Player;
}(TNode));
exports.Player = Player;
