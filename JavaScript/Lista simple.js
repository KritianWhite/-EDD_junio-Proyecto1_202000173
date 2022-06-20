
class Nodo {
    constructor(dato) {
        this.dato = dato
        this.siguiente = null
    }
}

export class listaSimple {
    constructor() {
        this.primero = null
        this.ultimo = null
    }

    estavacia() {
        return this.primero === null
    }

    agregarAlinicio(dato) {
        if (this.estavacia()) {
            this.primero = this.ultimo = new Nodo(dato)
        } else {
            let auxiliar = new Nodo(dato)
            auxiliar.siguiente = this.primero
            this.primero = auxiliar
        }
        this.ordenamientoBurbuja()
    }

    agregarAlfinal(dato) {
        if (this.estavacia()) {
            this.primero = this.ultimo = new Nodo(dato)
        } else {
            let auxiliar = this.ultimo
            this.ultimo = new Nodo(dato)
            auxiliar.siguiente = this.ultimo
        }
        this.ordenamientoBurbuja()
    }

    eliminarAlinicio() {
        if (this.estavacia()) {
            console.log("Lista vacia")
        }
        else if (this.primero === this.ultimo) {
            this.primero = this.ultimo = null
        }
        else {
            this.primero = this.primero.siguiente
        }
        this.ordenamientoBurbuja()
    }

    eliminarAlfinal() {
        if (this.estavacia()) {
            console.log("Lista vacia")
        }
        else if (this.primero === this.ultimo) {
            this.primero = this.ultimo = null
        }
        else {
            let auxiliar = this.primero
            while (auxiliar.siguiente != this.ultimo) {
                auxiliar = auxiliar.siguiente
            }
            auxiliar.siguiente = null
        }
    }

    recorrerLista() {
        if (this.estavacia()) {
            console.log("La lista esta vacia")
        }
        let auxiliar = this.primero
        while (auxiliar != null) {
            console.log(auxiliar.dato.toString())
            auxiliar = auxiliar.siguiente
        }
        console.log("\n")
    }

    tamanio() {
        var contador = 0
        if (this.estavacia()) {
            return 0
        }
        let auxiliar = this.primero
        while (auxiliar != null) {
            contador += 1
            auxiliar = auxiliar.siguiente
        }
        console.log("Número de elementos de la lista: " + contador)
        return contador
    }

    buscarDato(dato_) {
        if (this.estavacia()) {
            console.log("No hay elementos")
        }
        let auxiliar = this.primero
        while (auxiliar != null) {
            if (auxiliar.dato.nombreLibro === dato_) {
                //console.log((auxiliar.dato.toString()) + ", libro encontrado.")
                return auxiliar.dato
            }
            auxiliar = auxiliar.siguiente
        }
        return dato_ + ", dato no encontrado"
    }

    buscarDato_Categoria(dato_) {
        if (this.estavacia()) {
            console.log("No hay elementos")
        }
        let auxiliar = this.primero
        while (auxiliar != null) {
            if (auxiliar.dato.categoria === dato_) {
                //console.log((auxiliar.dato.toString()) + ", libro encontrado.")
                return auxiliar.dato
            }
            auxiliar = auxiliar.siguiente
        }
        return dato_ + ", dato no encontrado"
    }

    ordenamientoBurbuja() {
        let auxiliar
        let actual = auxiliar = null
        if (!this.estavacia()) {
            actual = this.primero
            while (actual.siguiente) {
                auxiliar = actual.siguiente
                while (auxiliar) {
                    if (auxiliar.dato.nombreLibro < actual.dato.nombreLibro) {
                        let temporal = actual.dato
                        actual.dato = auxiliar.dato
                        auxiliar.dato = temporal
                    }
                    auxiliar = auxiliar.siguiente
                }
                actual = actual.siguiente
            }
        } else {
            console.log("No se encontraron elementos")
        }
    }


    graficar() {
        var temporal, cadena, cont;
        temporal = this.primero;
        cont = 0;
        cadena = "";
        cadena += "digraph G { \n";
        cadena += "rankdir=LR \n";

        while (temporal !== null) {
            cadena += "Node" + cont + "[label=\"" + temporal.dato.nombre + " \n" + temporal.dato.apellido + "\"];\n";

            if (temporal !== this.primero) {
                cadena += "Node" + (cont - 1) + " -> " + "Node" + cont + ";\n";
            }

            temporal = temporal.siguiente;
            cont += 1;
        }


        cadena += "}";
        console.log(cadena);
        d3.select("#lienzo").graphviz().width(1350).height(500).renderDot(cadena);
    }



    graficarDot() {

        let aux = this.primero
        let cont = 0
        let cadena = "";
        cadena += "digraph G { \n";
        cadena += "rankdir=LR \n";

        while (aux !== this.ultimo) {
            cadena += "Node" + String(cont) + '[label="' + aux.dato.nombre + '"];\n';
            cadena += "Node" + String(cont) + " -> " + "Node" + String(cont + 1) + ";\n";
            cont += 1;
            aux = aux.siguiente;
        }

        cadena += "}";
        //console.log(cadena);
        d3.select("#lienzo").graphviz().width(1350).height(500).renderDot(cadena);

    }
}