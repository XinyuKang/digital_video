import {v4 as uuidv4} from 'uuid';
import { Circle, Rect } from './shape';
import { Text } from './text';


// export interface TNode {
//     children: TNode[] | null
//     name: string
//     id: string | null
//     attr(attr: string, val: string): void
//     // treeTraversal(type: string): Array<TNode>
//     // attr: TODO: add possile attributes
// }

export class TNode {

    children: TNode[] | null;
    id: string;
    name: string | null;

    constructor(id?: string){
        this.name = null;
        this.children = null;
        if (!id) this.id = uuidv4();
        else this.id = id;
    }

    attr(attr: string, val: string) {
        if (attr==="id") this.id = val;
    }

    append(name: string) {
        // player object cannot add "player" itself
        if (name == "player") throw new Error("Cannot append 'player' to ")
        let child: TNode;
        if (name=="circle") child = new Circle()
        else if (name=="rect") child = new Rect()
        else if (name=="text") child = new Text()
        else throw new Error("Can't append and object of type " + name)
        if (!this.children) {
            this.children = new Array<TNode>();
        }
        this.children.push(child);
    }

    select(id: string) {
        // if (this.id===id) return this
        // if (!this.children) return null
        // for (let c of this.children) {
        //     if (c.select(id)) return 
        // }
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

// TODO: extend and implement interface  https://www.typescripttutorial.net/typescript-tutorial/typescript-extend-interface/


// interface Tree {
//     root: TNode | null
//     // playerID: string | undefined
// }


export class Player extends TNode{
    // player: Tree;

    constructor(id?: string){
        super(id)
        this.name = "player"
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

    
}
