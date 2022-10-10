import {v4 as uuidv4} from 'uuid';
import {Shape} from "./shape";


interface Node {
    children: Node[]
}

interface Tree {
    root: Node | null
    playerID: string | undefined
}


export class Player{
    player: Tree;
    constructor(id?: string){
        if (id ==undefined) id = uuidv4()
        this.player = {
            playerID: id,
            root: null
        }
    }

    selectAll(name:string): Array<Shape> {
        // traverse throught the tree and return all nodes of this name type
        // if (name=="cirlce")
        return new Array<Shape>;
    }
}