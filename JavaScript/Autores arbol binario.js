export class Autores{
    constructor(dpi, nombreAutor, correo, telefono, direccion, biografia){
        this._dpi = dpi
        this._nombreAutor = nombreAutor
        this._correo = correo
        this._telefono = telefono
        this._direccion = direccion
        this._biografia = biografia
    }
    get dpi(){
        return this._dpi
    }
    set dpi(dpi){
        this._dpi = dpi
    }
    get nombreAutor(){
        return this._nombreAutor
    }
    set nombreAutor(nombreAutor){
        this._nombreAutor = nombreAutor
    }
    get correo(){
        return this._correo
    }
    set correo(correo){
        this._correo = correo
    }
    get telefono(){
        return this._telefono
    }
    set telefono(telefono){
        this._telefono = telefono
    }
    get direccion(){
        return this._direccion
    }
    set direccion(direccion){
        this._direccion = direccion
    }
    get biografia(){
        return this._biografia
    }
    set biografia(biografia){
        this._biografia = biografia
    }
}

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