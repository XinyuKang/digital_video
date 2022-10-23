import {Player, TNode} from "./player";
import {frameObj} from "./video";

export class Frame{
    players: Array<Player>;
    input: frameObj;

    constructor(input: frameObj) {
        this.input = input;
        this.players = new Array<Player>();
        this.addPlayers();
    }
     
  
    addPlayers() {
        // TODO: should load all players inside the frame
        for ( let p of this.input.players) {
            // check duplicate id
            if (!idCollection.has(p.id)) {
                this.players.push(new Player(p));
            }
            else throw new Error("Input contains players of duplicate IDs")
            
        }
    }

    selectAll(type: string):  Array<TNode> {
        if (type=="player") return this.players;
        else {
            let ret = new Array<TNode>();
            for (let p of this.players) {
                ret = ret.concat(p.selectAll(type))   // call internal selectAll in Player
            }
            return ret;
        }
    }

    select(id: string) : TNode | null {
        for (let p of this.players) {
            let subret = p.select(id)
            if (subret) return subret
        }
        return null
    }
}