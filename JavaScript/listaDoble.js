export class Nodo{
    constructor(dato){
        this.dato = dato 
        this.siguiente = null
        this.anterior = null
    }
}

export class listaDoble{

    constructor(){
        this.primero = null
        this.ultimo = null
        this.size = 0
    }

    estaVacia(){
        return this.primero === null
    }

    tamanio(){
        return this.size
    }

    agregarAlinicio(dato){
        if (this.estaVacia()){
            this.primero = this.ultimo = new Nodo(dato)
        }
        else{
            let auxiliar = new Nodo(dato)
            auxiliar.siguiente = this.primero
            this.primero.anterior = auxiliar
            this.primero = auxiliar
        }
        this.size += 1
    }

    agregarAlfinal(dato){
        if (this.estaVacia()){
            this.primero = this.ultimo = new Nodo(dato)
        }
        else{
            let auxiliar = this.ultimo
            this.ultimo = auxiliar.siguiente = new Nodo(dato)
            this.ultimo.anterior = auxiliar
        }
        this.size += 1
    }

    eliminarAlinicio(){
        if (this.estaVacia()){
            console.log("Lista vacia")
        }
        else if(this.primero.siguiente === null){
            this.primero = this.ultimo = null
            this.size = 0
        }
        else{
            this.primero = this.primero.siguiente
            this.primero.anterior = null
            this.size -= 1
        }
    }

    eliminarAlfinal(){
        if (this.estaVacia()){
            console.log("Lista vacia")
        }
        else if (this.primero.siguiente === null){
            this.primero = this.ultimo = null
            this.size = 0
        }
        else{
            this.ultimo = this.ultimo.anterior
            this.ultimo.siguiente = null
            this.size -= 1
        }
    }

    recorrerLista(){
        if (this.estaVacia()){
            console.log("No hay elementos en la lista")
        }
        let auxiliar = this.primero
        while (auxiliar != null){
            console.log((auxiliar.dato.toString()))
            auxiliar = auxiliar.siguiente
        }
        console.log("\n")
    }

    buscarDato(dato_){
        if (this.primero === null){
            console.log("No se encontraron elementos en la lista")
        }
        let auxiliar = this.primero
        while (auxiliar != null){
            if (auxiliar.dato.nombre === dato_){
                console.log(auxiliar.dato.toString()+ ", dato encontrado")
            }
            auxiliar = auxiliar.siguiente
        }
        return dato_ + ", dato no encontrado"
    }

    ordenamientoBurbuja(){
        let auxiliar
        let actual = auxiliar = null
        if (!this.estaVacia()){
            actual = this.primero
            while (actual.siguiente){
                auxiliar = actual.siguiente
                while (auxiliar){
                    if (auxiliar.dato.apellido < actual.dato.apellido){
                        let temporal = actual.dato
                        actual.dato = auxiliar.dato
                        auxiliar.dato = temporal
                    }
                    auxiliar = auxiliar.siguiente
                }
                actual = actual.siguiente
            }
        }
        else{
            console.log("No se encontraron elementos")
        }
    }
}