export class Video {
    // this class loads the video
    url: string;
   
    // each entry stores a list of elements of the same type
    // type A: [];
    // type B: [];
    groups: Array<unknown>;

    constructor(url: string) {
        this.url = url;
        this.load();
        this.groups = new Array();
      }

    load() {
        // load the url into a video ready to be processed
        // .....
    }

    selectAll(element: unknown) {
        // select all elements in the video
        // document.querySelectorAll()

    }

    select() {
        // select the first element
        // document.querySelector()
    }

    append(element: Shape | Text) {    // can add more element types
        // append the specified element to the video
        this.groups.push(element);
        return this;
        // if (this.groups.has(element)) {
        //     let prev = this.groups.get(element)
        //     this.groups.set(element, prev.push())
        // }
        // return this;
    }

    attr(attr: string, style: string) {
        // set the attribute of the appended element
        this.groups.at(-1).setAttr(attr, style);
    }
}