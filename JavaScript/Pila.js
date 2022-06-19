export class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
    }

}

export class Pila {
    constructor() {
        this.cima = null;
        this.tamanio = 0;
    }

    getTamanio() {
        return this.tamanio;
    }

    esVacio() {
        return this.cima === null;
    }

    Cima() {
        if (this.cima !== null) {
            return this.cima.dato;
        } else {
            return null;
        }
    }

    apilar(dato) {
        var nuevo_nodo;
        this.tamanio += 1;
        nuevo_nodo = new Nodo(dato);

        if (this.esVacio()) {
            this.cima = nuevo_nodo;
        } else {
            nuevo_nodo.siguiente = this.cima;
            this.cima = nuevo_nodo;
        }
    }

    desapilar() {
        var nodo_a_retirar;
        nodo_a_retirar = null;

        if (!this.esVacio()) {
            nodo_a_retirar = this.cima;
            this.cima = this.cima.siguiente;
            this.tamanio -= 1;
        }

        return nodo_a_retirar;
    }

    listar() {
        var aux;
        aux = this.cima;

        if (this.esVacio()) {
            return console.log("La pila esta vacia");
        }

        console.log("-----------------");

        while (aux !== null) {
            console.log("|\t" + aux.dato.toString() + "\t|");
            console.log("-----------------");
            aux = aux.siguiente;
        }
    }

    limpiarPila(){
        this.cima = null
    }

    graficarDot(nombreL){
        let temporal = this.cima
        let cadena = ""
        let nodo = ""

        while(temporal !== null){
            nodo += temporal.dato + " | "
            temporal = temporal.siguiente
        }

        cadena += `digraph G {\nlabel = \"${nombreL}\" \n rankdir=LR;nodo1 [label="${nodo}#" shape = "record" ];\n}`

        d3.select("#area-pila").graphviz().height(600).width(155).renderDot(cadena)

        this.limpiarPila()
    }

}