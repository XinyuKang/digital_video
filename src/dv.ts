import {Video} from "./video";

export class dv {
    video: Video;
   
    constructor(url: string) {
      this.video = new Video(url);
    }
  }
   
  let dvElement = new dv("/.../path/to/video");
