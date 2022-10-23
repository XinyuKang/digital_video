"use strict";
exports.__esModule = true;
exports.Frame = void 0;
var player_1 = require("./player");
var Frame = /** @class */ (function () {
    function Frame(input) {
        this.input = input;
        this.players = new Array();
        this.addPlayers();
    }
    Frame.prototype.addPlayers = function () {
        // TODO: should load all players inside the frame
        for (var _i = 0, _a = this.input.players; _i < _a.length; _i++) {
            var p = _a[_i];
            // check duplicate id
            if (!idCollection.has(p.id)) {
                this.players.push(new player_1.Player(p));
            }
            else
                throw new Error("Input contains players of duplicate IDs");
        }
    };
    Frame.prototype.selectAll = function (type) {
        if (type == "player")
            return this.players;
        else {
            var ret = new Array();
            for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
                var p = _a[_i];
                ret = ret.concat(p.selectAll(type)); // call internal selectAll in Player
            }
            return ret;
        }
    };
    Frame.prototype.select = function (id) {
        for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
            var p = _a[_i];
            var subret = p.select(id);
            if (subret)
                return subret;
        }
        return null;
    };
    return Frame;
}());
exports.Frame = Frame;
