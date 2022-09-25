import {Video} from "./video.js";

export class dv {
    video: Video;
   
    constructor(url: string) {
      this.video = url
    }
   
    // greet() {
    //   return "Hello, " + this.greeting;
    // }
  }
   
  let greeter = new dv("/.../path/to/video");