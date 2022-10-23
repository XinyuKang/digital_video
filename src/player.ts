import {v4 as uuidv4} from 'uuid';
import { Circle, Rect } from './shape';
import { Text } from './text';
import { playerObj } from "./video";


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
        if (id && idCollection.has(id)) throw new Error("ID " + id + " already exists")
        else if (!id) id = uuidv4();
        this.id = id;
    }

    attr(attr: string, val: string) {
        if (attr==="id") {
            // check if id already exists
            if (idCollection.has(val)) throw new Error("ID " + val + " already exists")
            else this.id = val;
        }
    }

    append(name: string) {
        //  cannot add "player" type itself
        if (name == "player") throw new Error("Cannot append 'player' to ")
        let child: TNode;
        if (name=="circle") child = new Circle()
        else if (name=="rect") child = new Rect()
        else if (name=="text") child = new Text()
        else throw new Error("Object of type " + name + " is  not defined")
        if (!this.children) {
            this.children = new Array<TNode>();
        }
        this.children.push(child);
    }

    select(id: string) : TNode | null {
        if (this.id===id) return this
        if (!this.children) return null
        for (let c of this.children) {
            let subret = c.select(id)
            if (subret) return subret
        }
        return null
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
    player: playerObj;

    constructor(player: playerObj, id?: string){
        super(id)
        this.name = "player";
        this.player = player;
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
