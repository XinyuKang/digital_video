// this script implements all kinds of shapes that might be  appended

import {TNode} from "./player";

// interface CircleInterface extends TNode {
//     cx: number
//     cy: number
//     r: number
//     fill: string
//     stroke: string
// }

// interface RectInterface extends TNode {
//     x: number
//     y: number
//     width: number
//     height: number
//     fill: string
//     stroke: string
// }

export class Circle extends TNode {
    
    cx = 0;
    cy = 0;
    r = 1;
    fill = "black"
    stroke = "black"

    constructor(id?: string) {
        super(id)
        this.name = "circle"
    }

    attr(attr: string, val: string) {
        super.attr(attr, val)
        if (attr==="cx") {
            this.cx = +val;
        } else if (attr==="cy") {
            this.cy = +val;
        } else if (attr==="r") {
            this.r = +val;
        } else if (attr==="fill") {
            this.fill = val
        } else if (attr==="stroke") {
            this.stroke = val
        } else {
            throw new Error("No such attribute for circle")
        }
    }
}

export class Rect extends TNode{

    x = 0
    y = 0
    width = 0
    height = 0
    fill = "black"
    stroke = "black"

    constructor(id?: string) {
        super(id)
        this.name = "rect"
    }

    attr(attr: string, val: string){
        super.attr(attr, val)
        if (attr==="x") {
            this.x = +val;
        } else if (attr==="y") {
            this.y = +val;
        } else if (attr==="width") {
            this.width = +val;
        } else if (attr==="height") {
            this.height = +val;
        } else if (attr==="fill") {
            this.fill = val;
        } else if (attr==="stroke") {
            this.stroke = val;
        } else {
            throw new Error("No such attribute for rectangle")
        }
    }
}