"use strict";
exports.__esModule = true;
exports.Player = void 0;
var uuid_1 = require("uuid");
// TODO: extend and implement interface  https://www.typescripttutorial.net/typescript-tutorial/typescript-extend-interface/
// interface Tree {
//     root: TNode | null
//     // playerID: string | undefined
// }
var Player = /** @class */ (function () {
    function Player(id) {
        // player: Tree;
        this.name = "player";
        this.children = null;
        this.playerID = null;
        if (!id)
            this.playerID = (0, uuid_1.v4)(); // TODO check if not passing an argument causes undefined
        else
            this.playerID = id;
    }
    Player.prototype.attr = function (attr, val) {
        // TODO: think about what attributes player has
    };
    Player.prototype.addChild = function (child) {
        if (!this.children) {
            this.children = new Array();
        }
        this.children.push(child);
    };
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
    Player.prototype.treeTraversal = function (root, type) {
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
    return Player;
}());
exports.Player = Player;
