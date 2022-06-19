export class UsuariosCon_Libros {
    constructor(nombre, nombre_Libro, cantidad_Libros) {
        this._nombre = nombre
        this._nombre_Libro = nombre_Libro
        this._cantidad_Libros = cantidad_Libros
    }
    get nombre() {
        return this._cantidad_Libros
    }
    set nombre(nombre) {
        this._nombre = nombre
    }
    get nombre_Libro(){
        return this._nombre_Libro
    }
    set nombre_Libro(nombre_Libro){
        this._nombre_Libro = nombre_Libro
    }
    get cantidad_Libros() {
        return this._cantidad_Libros
    }
    set cantidad_Libros(cantidad_Libros) {
        this._cantidad_Libros = cantidad_Libros
    }

    toString() {
        return `
        Nombre del libro: ${this._nombre}
        Total de libros: ${this._cantidad_Libros}
        `
    }
}

export class usuarioEn_Cola{
    constructor(name, nombre_LibroC, cantidad_LibrosC){
        this._name = name
        this._nombre_LibroC = nombre_LibroC
        this._cantidad_LibrosC = cantidad_LibrosC
    }
    get name(){
        return this._name
    }
    set name(name){
        this._name = name
    }
    get nombre_LibroC(){
        return this._nombre_LibroC
    }
    set nombre_LibroC(nombre_LibroC){
        this._nombre_LibroC = nombre_LibroC
    }
    get cantidad_LibrosC(){
        return this._cantidad_LibrosC
    }
    set cantidad_LibrosC(cantidad_LibrosC){
        this._cantidad_LibrosC = cantidad_LibrosC
    }

}



/*

    LISTA DOBLEMENTE ENLAZADA PARA EL SLIDER DEL HOME
    PARA EL TOP DE LIBROS MAS VENDIDOS

*/


class Nodo {
    constructor(dato) {
        this.dato = dato
        this.siguiente = null
        this.anterior = null
    }
}

export class listaDoble {

    constructor() {
        this.primero = null
        this.ultimo = null
        this.size = 0
    }

    estaVacia() {
        return this.primero === null
    }

    tamanio() {
        return this.size
    }

    agregarAlinicio(dato) {
        if (this.estaVacia()) {
            this.primero = this.ultimo = new Nodo(dato)
        }
        else {
            let auxiliar = new Nodo(dato)
            auxiliar.siguiente = this.primero
            this.primero.anterior = auxiliar
            this.primero = auxiliar
        }
        this.size += 1
    }

    agregarAlfinal(dato) {
        if (this.estaVacia()) {
            this.primero = this.ultimo = new Nodo(dato)
        }
        else {
            let auxiliar = this.ultimo
            this.ultimo = auxiliar.siguiente = new Nodo(dato)
            this.ultimo.anterior = auxiliar
        }
        this.size += 1
    }

    eliminarAlinicio() {
        if (this.estaVacia()) {
            console.log("Lista vacia")
        }
        else if (this.primero.siguiente === null) {
            this.primero = this.ultimo = null
            this.size = 0
        }
        else {
            this.primero = this.primero.siguiente
            this.primero.anterior = null
            this.size -= 1
        }
    }

    eliminarAlfinal() {
        if (this.estaVacia()) {
            console.log("Lista vacia")
        }
        else if (this.primero.siguiente === null) {
            this.primero = this.ultimo = null
            this.size = 0
        }
        else {
            this.ultimo = this.ultimo.anterior
            this.ultimo.siguiente = null
            this.size -= 1
        }
    }

    recorrerLista() {
        if (this.estaVacia()) {
            console.log("No hay elementos en la lista")
        }
        let auxiliar = this.primero
        while (auxiliar != null) {
            console.log((auxiliar.dato.toString()))
            auxiliar = auxiliar.siguiente
        }
        console.log("\n")
    }

    buscarDato(dato_) {
        if (this.primero === null) {
            console.log("No se encontraron elementos en la lista")
            return null
        }
        let auxiliar = this.primero
        while (auxiliar != null) {
            if (auxiliar.dato._nombre === dato_) {
                return auxiliar.dato
                //return auxiliar.dato.toString()+ ", dato encontrado"
            }
            auxiliar = auxiliar.siguiente
        }
        return null
    }

    slide() { 

        let nuevoSlide = document.querySelector(".slideshow-container")
        let textSlide = ""
        let contador = 1

        if (this.estaVacia()) {
            textSlide += `
                <div class="mySlides fade">
                    <div class="numbertext">0 / 0}</div>
                    <img src="./img/image1.png" style="width:100%">
                    <div class="text">
                        Usuario: null
                        <br>
                        Libros obtenidos: null
                    </div>
                </div>
                `
            nuevoSlide.innerHTML = textSlide
        }
        let auxiliar = this.primero
        while (auxiliar != null) {
            textSlide += `
            <div class="mySlides fade">
                <div class="numbertext">${contador} / ${this.tamanio()}</div>
                <img src="./img/image${contador}.png" style="width:100%">
                <div class="text">
                    Usuario: ${auxiliar.dato._nombre}
                    <br>
                    Libros obtenidos: ${(auxiliar.dato._cantidad_Libros)}
                </div>
            </div>
            `
            contador += 1
            auxiliar = auxiliar.siguiente
        }
        nuevoSlide.innerHTML = textSlide

    }

    ordenamientoBurbuja() {
        let auxiliar
        let actual = auxiliar = null
        if (!this.estaVacia()) {
            actual = this.primero
            while (actual.siguiente) {
                auxiliar = actual.siguiente
                while (auxiliar) {
                    if (auxiliar.dato._cantidad_Libros > actual.dato._cantidad_Libros) {
                        let temporal = actual.dato
                        actual.dato = auxiliar.dato
                        auxiliar.dato = temporal
                    }
                    auxiliar = auxiliar.siguiente
                }
                actual = actual.siguiente
            }
        }
        else {
            console.log("No se encontraron elementos")
        }
    }

    graficarDobleDot() {
        let temporal = this.primero
        let cont = 0
        let cadena = "";
        cadena += "digraph G { \n";
        cadena += "rankdir=LR \n";

        while (temporal !== null) {

            cadena += "Node" + cont + "[label=\"Cliente: " + temporal.dato._nombre + " \nCantidad Libros: " + temporal.dato._cantidad_Libros + "\"];\n";

            if (temporal !== this.primero) {
                cadena += "Node" + (cont - 1) + " -> " + "Node" + (cont) + ";\n";
                cadena += "Node" + (cont) + " -> " + "Node" + (cont - 1) + ";\n";
            }

            temporal = temporal.siguiente;
            cont += 1;
        }

        cadena += "}";
        console.log(cadena);
        d3.select("#lista-doblemente").graphviz().width(1350).height(500).renderDot(cadena);
    }
}



/*

    COLA PARA CUANDO YA NO HAY EXISTENCIAS DE LIBROS

*/


class NodoC {
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
    }

}

export class Cola {
    constructor() {
        this.frente = null;
        this.atras = null;
        this.tamanio = 0;
    }

    getTamanio() {
        return this.tamanio;
    }

    arribo(dato) {
        var nodo_nuevo;
        nodo_nuevo = new NodoC(dato);

        if (this.frente === null) {
            this.frente = nodo_nuevo;
        } else {
            this.atras.siguiente = nodo_nuevo;
        }

        this.atras = nodo_nuevo;
        this.tamanio += 1;
    }

    atencion() {
        var dato;
        dato = this.frente.dato;
        this.frente = this.frente.siguiente;

        if (this.frente === null) {
            this.atras = null;
        }

        this.tamanio -= 1;
        return dato;
    }

    esVacio() {
        return this.frente === null;
    }

    en_frente() {
        return this.frente.dato.toString();
    }

    getTamanio() {
        return this.tamanio;
    }

    mover_al_final() {
        var dato;
        dato = this.atencion();
        this.arribo(dato);
        return dato;
    }

    listar() {
        var aux;
        aux = this.frente;

        if (this.esVacio()) {
            return console.log("La cola esta vacia");
        }

        this.temp = [];

        while (aux !== null) {
            this.temp.append(aux.dato);
            aux = aux.siguiente;
        }

        console.log(this.temp);
    }

    graficarDot() {
        var temporal, cadena, cont
        temporal = this.frente
        cont = 0
        cadena = ""
        cadena += "digraph G { \n";
        cadena += "rankdir=RL \n";

        while (temporal !== null) {
            cadena += "Node" + cont + "[label=\"Usuario" + temporal.dato.name+"\nLibro: "+temporal.dato.nombre_LibroC+ "\nCantidad: "+temporal.dato.cantidad_LibrosC + " libros\"];\n";

            if (temporal !== this.frente) {
                cadena += "Node" + (cont) + " -> " + "Node" + (cont - 1) + ";\n";
            }

            temporal = temporal.siguiente;
            cont += 1;
        }


        cadena += "}";
        console.log(cadena);
        d3.select("#cola-espera").graphviz().width(1000).height(300).renderDot(cadena);
    }

}

//.nommbre+ " \n" + temporal.dato.nommbre_Libro+ "\nCantidad: "+ temporal.dato.cantidad_Libros + 
