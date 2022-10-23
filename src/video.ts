import {Frame} from "./frame"
import {TNode} from "./player";

// global variable: a set of IDs
declare global {
    var idCollection: Set<string>
}
globalThis.idCollection = new Set<string>();

export interface videoObj {
    frames: Array<frameObj>;
}

export interface frameObj {
    idx: number; // indicates the index of the frame in the video
    players: Array<playerObj>;
}

export interface playerObj {
    id: string
    // might have other attributes
}

export class Video {
    
    frames: Array<Frame>;
    
    
    constructor(url: string) {
        this.frames = this.load(url);  
      }

    load(url: string): Array<Frame>{
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
        return new Array<Frame>();
    }

    selectAll(type: string): Array<TNode> {
        let ret = new Array<TNode>();
        for (let f of this.frames) {
            ret = ret.concat(f.selectAll(type));
        }
        return ret;
    }

    select(id: string) {
        for (let f of this.frames) {
            let subret = f.select(id)
            if (subret) return subret
        }
        return null
    }

}

