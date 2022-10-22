import {Player} from "./player";
import {Shape} from "./shape";

export class Frame{
    players: Array<Player>;

    constructor() {
        this.players = new Array<Player>(); // TODO: should load all players inside the frame
    }
     
  
    selectAll(name: string) {
        if (name=="player") return this.players;
        else {
            let ret = new Array<Shape>();
            for (let p of this.players) {
                ret = ret.concat(p.selectAll(name))   // call internal selectAll in Player
            }
        }
        // if (name=="circle") {
        //     for (let p in this.players) {

        //     }
        // }
    }

    
}