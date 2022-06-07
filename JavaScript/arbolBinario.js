export class Nodo{
    constructor(id){
        this.id = id
        this.izquierda = null
        this.derecha = null
    }
}

export class ArbolABB{

    constructor(){
        this.raiz = null
    }

    estaVacia(){
        return this.raiz === null
    }

    agregar(id, node = this.raiz){
        if (!node){
            this.raiz = new Nodo(id)
            return
        }
        if (id < node.id){
            if (node.izquierda){
                return this.agregar(id, node.izquierda)
            }
            node.izquierda = new Nodo(id)
            return
        }
        else{
            if (node.derecha){
                return this.agregar(id, node.derecha)
            }
            node.derecha = new Nodo(id)
            return
        }
    }

    preOrden(node=this.raiz){
        if (!node){
            return
        }
        console.log(node.id)
        this.preOrden(node.izquierda)
        this.preOrden(node.derecha)
    }

    postOrden(node=this.root){
        if(!node){
            return
        }
        this.postOrden(node.izquierda)
        this.postOrden(node.derecha)
        console.log(node.id)
    }

    inOrden(node=this.raiz){
        if (!node){
            return
        }
        this.inOrden(node.izquierda)
        console.log(node.id)
        this.inOrden(node.derecha)
    }
}