import { isConstructorDeclaration } from "typescript";

export class Shape {
    // this class implements all kinds of shapes that might be added to the video
    // circle, rect, square etc.
    color: string;

    constructor() {
        this.color = "black";
    }
}

export class Circle {
    cx: number;
    cy: number;
    r: number;

    constructor() {
        this.cx = 0;
        this.cy = 0;
        this.r = 1;
    }
}

export class Rect {
    x: number;
    y: number;

    constructor() {
        this.x = 0;
        this.y = 0;
    }
}