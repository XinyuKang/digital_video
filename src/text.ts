// this script implements texts to be appended

import {TNode} from "./player";

// interface TextInterface extends TNode {
//     x: number
//     y: number
//     fontSize: number
//     fill: string
//     stroke: string
// }

export class Text extends TNode {
    
    x = 0;
    y = 0;
    fontSize = 10;
    fill = "black";
    stroke = "black";
    content: string | null = ""

    constructor(id?: string) {
        super(id)
        this.name = "text"
    }

    attr(attr: string, val: string) {
        super.attr(attr, val)
        if (attr==="cx") {
            this.x = +val;
        } else if (attr==="cy") {
            this.y = +val;
        } else if (attr==="fontSize") {
            this.fontSize = +val;
        } else if (attr==="fill") {
            this.fill = val
        } else if (attr==="stroke") {
            this.stroke = val
        } else {
            throw new Error("No such attribute for text")
        }
    }

    text(content: string) {
        this.content = content
    }
}