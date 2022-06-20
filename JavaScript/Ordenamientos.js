/* 

    ORDENAMIENTO ASCENDENTE

*/
export class Libros_B {
    constructor(isbn, nombreAutor, nombreLibro, cantidad, fila, columna, paginas, categoria) {
        this._isbn = isbn
        this._nombreAutor = nombreAutor
        this._nombreLibro = nombreLibro
        this._cantidad = cantidad
        this._fila = fila
        this._columna = columna
        this._paginas = paginas
        this._categoria = categoria
    }
    get isbn() {
        return this._isbn
    }
    set isbn(isbn) {
        this._isbn = isbn
    }
    get nombreAutor() {
        return this._nombreAutor
    }
    set nombreAutor(nombreAutor) {
        this._nombreAutor = nombreAutor
    }
    get nombreLibro() {
        return this._nombreLibro
    }
    set nombreLibro(nombreLibro) {
        this._nombreLibro = nombreLibro
    }
    get cantidad() {
        return this._cantidad
    }
    set cantidad(cantidad) {
        this._cantidad = cantidad
    }
    get fila() {
        return this._fila
    }
    set fila(fila) {
        this._fila = fila
    }
    get columna() {
        return this._columna
    }
    set columna(columna) {
        this._columna = columna
    }
    get paginas() {
        return this._paginas
    }
    set paginas(paginas) {
        this._paginas = paginas
    }
    get categoria() {
        return this._categoria
    }
    set categoria(categoria) {
        this._categoria = categoria
    }

    toString() {
        return `
        Nombre Libro: ${this._nombreLibro},
        Autor: ${this._nombreAutor},
        Categoria: ${this._categoria},
        Páginas: ${this._paginas},
        ISBN: ${this._isbn},
        Cantidad: ${this._cantidad},
        Fila: ${this._fila}, Columna: ${this._columna}
        `
    }
}


class Nodo_B {
    constructor(dato) {
        this.dato = dato
        this.siguiente = null
    }
}

export class listaSimple_B {
    constructor() {
        this.primero = null
        this.ultimo = null
    }

    estavacia() {
        return this.primero === null
    }

    agregarAlinicio(dato) {
        if (this.estavacia()) {
            this.primero = this.ultimo = new Nodo_B(dato)
        } else {
            let auxiliar = new Nodo_B(dato)
            auxiliar.siguiente = this.primero
            this.primero = auxiliar
        }
        this.ordenamientoBurbuja()
    }

    agregarAlfinal(dato) {
        if (this.estavacia()) {
            this.primero = this.ultimo = new Nodo_B(dato)
        } else {
            let auxiliar = this.ultimo
            this.ultimo = new Nodo_B(dato)
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
        function random(min, max) {
            return Math.floor((Math.random() * (max - min + 1)) + min);
        }

        let newElement = document.getElementById("libros-Fantasia")
        let newText = ""

        if (this.estavacia()) {
            console.log("La lista esta vacia")
        }
        let auxiliar = this.primero
        while (auxiliar != null) {
            newText += `
                    <div class="col-md-3 col-sm-6">
                                <div class="box">
                                    <div class="our-team">
                                        <div class="pic">
                                            <img src="./img/Libro${random(1, 70)}.jpg">
                                            </div>
                                        <h3 class="title">${auxiliar.dato.nombreLibro}</h3>
                                        <span class="post">${auxiliar.dato.nombreAutor}</span>
                                    </div>
                                </div>
                            </div>
                    `
            auxiliar = auxiliar.siguiente
        }
        newElement.innerHTML = newText
        //console.log("\n")
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
        //console.log(cadena);
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


/**
 
    ORDENAMIENTO DESCENDENTE

 */

    export class Libros_Q {
        constructor(isbn, nombreAutor, nombreLibro, cantidad, fila, columna, paginas, categoria) {
            this._isbn = isbn
            this._nombreAutor = nombreAutor
            this._nombreLibro = nombreLibro
            this._cantidad = cantidad
            this._fila = fila
            this._columna = columna
            this._paginas = paginas
            this._categoria = categoria
        }
        get isbn() {
            return this._isbn
        }
        set isbn(isbn) {
            this._isbn = isbn
        }
        get nombreAutor() {
            return this._nombreAutor
        }
        set nombreAutor(nombreAutor) {
            this._nombreAutor = nombreAutor
        }
        get nombreLibro() {
            return this._nombreLibro
        }
        set nombreLibro(nombreLibro) {
            this._nombreLibro = nombreLibro
        }
        get cantidad() {
            return this._cantidad
        }
        set cantidad(cantidad) {
            this._cantidad = cantidad
        }
        get fila() {
            return this._fila
        }
        set fila(fila) {
            this._fila = fila
        }
        get columna() {
            return this._columna
        }
        set columna(columna) {
            this._columna = columna
        }
        get paginas() {
            return this._paginas
        }
        set paginas(paginas) {
            this._paginas = paginas
        }
        get categoria() {
            return this._categoria
        }
        set categoria(categoria) {
            this._categoria = categoria
        }
    
        toString() {
            return `
            Nombre Libro: ${this._nombreLibro},
            Autor: ${this._nombreAutor},
            Categoria: ${this._categoria},
            Páginas: ${this._paginas},
            ISBN: ${this._isbn},
            Cantidad: ${this._cantidad},
            Fila: ${this._fila}, Columna: ${this._columna}
            `
        }
    }
    
    
    class Nodo_Q {
        constructor(dato) {
            this.dato = dato
            this.siguiente = null
        }
    }
    
    export class listaSimple_Q {
        constructor() {
            this.primero = null
            this.ultimo = null
        }
    
        estavacia() {
            return this.primero === null
        }
    
        agregarAlinicio(dato) {
            if (this.estavacia()) {
                this.primero = this.ultimo = new Nodo_Q(dato)
            } else {
                let auxiliar = new Nodo_Q(dato)
                auxiliar.siguiente = this.primero
                this.primero = auxiliar
            }
            this.ordenamientoBurbuja()
        }
    
        agregarAlfinal(dato) {
            if (this.estavacia()) {
                this.primero = this.ultimo = new Nodo_Q(dato)
            } else {
                let auxiliar = this.ultimo
                this.ultimo = new Nodo_Q(dato)
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
            function random(min, max) {
                return Math.floor((Math.random() * (max - min + 1)) + min);
            }

            let newElement = document.getElementById("libros-Thriller")
            let newText = ""
            if (this.estavacia()) {
                console.log("La lista esta vacia")
            }
            let auxiliar = this.primero
            while (auxiliar != null) {
                newText += `
                        <div class="col-md-3 col-sm-6">
                                    <div class="box">
                                        <div class="our-team">
                                            <div class="pic">
                                                <img src="./img/Libro${random(1, 70)}.jpg">
                                                </div>
                                            <h3 class="title">${auxiliar.dato.nombreLibro}</h3>
                                            <span class="post">${auxiliar.dato.nombreAutor}</span>
                                        </div>
                                    </div>
                                </div>
                        `
                auxiliar = auxiliar.siguiente
            }
            newElement.innerHTML = newText
            //console.log("\n")
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
                        if (auxiliar.dato.nombreLibro > actual.dato.nombreLibro) {
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
            //console.log(cadena);
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