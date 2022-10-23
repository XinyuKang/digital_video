import {Frame} from "./frame"
import {TNode} from "./player";

export class Video {
   
    // groups: Array<TNode>;
    // frames: Tree[]= []
    frames: Array<Frame>;
    
    constructor(url: string) {
        this.frames = this.load(url);  
        // this.groups = new Array();
      }

    load(url: string): Array<Frame>{
        // load the url into a video ready to be processed
        // return all frames in the video
        // each frame has multiple players
        // TODO: should load all frames with players in each frame
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
            
        }

    }

}

