import {Shape} from "./shape";
import {Frame} from "./frame"

export class Video {
   
    groups: Array<Shape>;
    // frames: Tree[]= []
    frames: Array<Frame>;
    
    constructor(url: string) {
        this.frames = this.load(url);
        this.groups = new Array();
      }

    load(url: string): Array<Frame>{
        // load the url into a video ready to be processed
        // return all frames in the video
        // each frame has multiple players
        // TODO: should load all frames with players in each frame
        return new Array<Frame>;
    }

    selectAll(element: Shape) {
        // select all elements in the video
        // document.querySelectorAll()

    }

    select() {
        // select the first element
        // document.querySelector()
    }

    append(element: Shape) {    // can add more element types
        // append the specified element to the video
        this.groups.push(element);
        return this;
    }

    attr(attr: string, style: string) {
        // set the attribute of the appended element
        this.groups.at(-1)?.setAttr(attr, style);
        
    }
}

