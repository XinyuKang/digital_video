import {v4 as uuidv4} from 'uuid';
import {Shape} from "./shape";


export interface TNode {
    children: TNode[] | null
    name: string
    // treeTraversal(type: string): Array<TNode>
    // attr: TODO: add possile attributes
}

interface PlayerInterface extends TNode {
    playerID: string | null
}

// TODO: extend and implement interface  https://www.typescripttutorial.net/typescript-tutorial/typescript-extend-interface/


// interface Tree {
//     root: TNode | null
//     // playerID: string | undefined
// }


export class Player implements PlayerInterface{
    // player: Tree;
    name: string = "player"
    children: null|TNode[] = null;
    playerID: string|null = null;

    constructor(id?: string){
        if (!id) this.playerID = uuidv4()   // TODO check if not passing an argument causes undefined
        else this.playerID = id
    }

    addChild(child: TNode) {
        if (!this.children) {
            this.children = new Array<TNode>();
        }
        this.children.push(child);
    }

    selectAll(type: string): Array<TNode> {
        // player object cannot select "player" itself
        if (type == "player") throw new Error("Cannot select 'player' on object type Player")
        let ret: Array<TNode>  = new Array<TNode>();
        // traverse the tree and return all nodes of this name type
        if (this.children) {
            for (let i=0; i<this.children.length; i++) {
                ret.concat(this.treeTraversal(this.children[i], type))
            }
        }
        return ret
    }

    treeTraversal(root: TNode, type: string) {
        let ret : Array<TNode>  = new Array<TNode>();
        if (root) {
            if (root.name === type) ret.push(root);
            if (root.children) {
                for (let i=0; i<root.children.length; i++) {
                    ret.concat(this.treeTraversal(root.children[i], type))
                }
            }
        }
        return ret
    }
}
