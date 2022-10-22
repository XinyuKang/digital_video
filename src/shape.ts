
import {TNode} from "./player";
interface CircleInterface extends TNode {
    cx: number
    cy: number
    r: number
}

export class Shape {
    // this class implements all kinds of shapes that might be added to the video
    // circle, rect, square etc.
    color: string;

    constructor() {
        this.color = "black";
    }

    setAttr(attr: string, style: string) {
        if (attr==="color") {
            this.color = style;
        }
    }
}

export class Circle implements CircleInterface {
    
    name = "circle";
    cx = 0;
    cy = 0;
    r = 1;
    children = null;

    constructor() {
        
    }

    setAttr(attr: string, style: string) {
        if (attr==="cx") {
            this.cx = +style;
        } else if (attr==="cy") {
            this.cy = +style;
        } else if (attr==="r") {
            this.r = +style;
        } else {
            throw new Error("no such attribute for circle")
        }
    }
}

export class Rect {
    x: number;
    y: number;

    constructor() {
        this.x = 0;
        this.y = 0;
    }

    setAttr(attr: string, style: string){
        if (attr==="x") {
            this.x = +style;
        } else if (attr==="y") {
            this.y = +style;
        } else {
            throw new Error("no such attribute for rectangle")
        }
    }
}