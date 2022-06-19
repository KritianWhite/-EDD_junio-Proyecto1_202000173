import { listaSimple } from "./Lista simple.js";

export class Libros {
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





// MATRIZ DISPERSA
export class NodoInterno {

    constructor(x = null, y = null, caracter = null) {
        this.caracter = caracter;
        this.x = x;
        this.y = y;
        this.arriba = null;
        this.abajo = null;
        this.derecha = null;
        this.izquierda = null;
    }

}


export class NodoEncabezado {
    constructor(id = null) {
        this.id = id;
        this.siguiente = null;
        this.anterior = null;
        this.acceso = null;
    }

}



export class ListaEncabezado {

    constructor(tipo = null) {
        this.tipo = tipo;
        this.primero = null;
        this.ultimo = null;
        this.size = 0;
    }

    insertarEncabezado(nuevo) {
        var aux;
        this.size += 1;

        if (this.primero === null) {
            this.primero = nuevo;
            this.ultimo = nuevo;
        } else {
            if (nuevo.id < this.primero.id) {
                nuevo.siguiente = this.primero;
                this.primero.anterior = nuevo;
                this.primero = nuevo;
            } else {
                if (nuevo.id > this.ultimo.id) {
                    this.ultimo.siguiente = nuevo;
                    nuevo.anterior = this.ultimo;
                    this.ultimo = nuevo;
                } else {
                    aux = this.primero;

                    while (aux !== null) {
                        if (nuevo.id < aux.id) {
                            nuevo.siguiente = aux;
                            nuevo.anterior = aux.anterior;
                            aux.anterior.siguiente = nuevo;
                            aux.anterior = nuevo;
                            break;
                        } else {
                            if (nuevo.id > aux.id) {
                                aux = aux.siguiente;
                            } else {
                                break;
                            }
                        }
                    }
                }
            }
        }
    }

    mostrarEncabezado() {
        var aux;
        aux = this.primero;

        while (aux !== null) {
            console.log("Encabezado ", this.tipo, aux.id);
            aux = aux.siguiente;
        }
    }

    getEncabezado(id) {
        var aux;
        aux = this.primero;

        while (aux !== null) {
            if (id === aux.id) {
                return aux;
            }

            aux = aux.siguiente;
        }

        return null;
    }

}


export class MatrizDispersa {

    constructor(capa = null) {
        this.capa = capa;
        this.filas = new ListaEncabezado("LISTAS");
        this.columnas = new ListaEncabezado("COLUMNAS");

    }

    insertar(nodoInterno) {
        var aux, aux2, encabezadoX, encabezadoY;
        encabezadoX = this.filas.getEncabezado(nodoInterno.x);
        encabezadoY = this.columnas.getEncabezado(nodoInterno.y);

        if (encabezadoX === null) {
            encabezadoX = new NodoEncabezado(nodoInterno.x);
            this.filas.insertarEncabezado(encabezadoX);
        }

        if (encabezadoY === null) {
            encabezadoY = new NodoEncabezado(nodoInterno.y);
            this.columnas.insertarEncabezado(encabezadoY);
        }

        if (encabezadoX.acceso === null) {
            encabezadoX.acceso = nodoInterno;
        } else {
            if (nodoInterno.y < encabezadoX.acceso.y) {
                nodoInterno.derecha = encabezadoX.acceso;
                encabezadoX.acceso.izquierda = nodoInterno;
                encabezadoX.acceso = nodoInterno;
            } else {
                aux = encabezadoX.acceso;

                while (aux !== null) {
                    if (nodoInterno.y < aux.y) {
                        nodoInterno.derecha = aux;
                        nodoInterno.izquierda = aux.izquierda;
                        aux.izquierda.derecha = nodoInterno;
                        aux.izquierda = nodoInterno;
                        break;
                    } else {
                        if (aux.derecha === null) {
                            aux.derecha = nodoInterno;
                            nodoInterno.izquierda = aux;
                            break;
                        } else {
                            aux = aux.derecha;
                        }
                    }
                }
            }
        }

        if (encabezadoY.acceso === null) {
            encabezadoY.acceso = nodoInterno;
        } else {
            if (nodoInterno.x < encabezadoY.acceso.x) {
                nodoInterno.abajo = encabezadoY.acceso;
                encabezadoY.acceso.arriba = nodoInterno;
                encabezadoY.acceso = nodoInterno;
            } else {
                aux2 = encabezadoY.acceso;

                while (aux2 !== null) {
                    if (nodoInterno.x < aux2.x) {
                        nodoInterno.abajo = aux2;
                        nodoInterno.arriba = aux2.arriba;
                        aux2.arriba.abajo = nodoInterno;
                        aux2.arriba = nodoInterno;
                        break;
                    } else {
                        if (aux2.abajo === null) {
                            aux2.abajo = nodoInterno;
                            nodoInterno.arriba = aux2;
                            break;
                        } else {
                            aux2 = aux2.abajo;
                        }
                    }
                }
            }
        }
    }

    print_matriz() {
        var aux, aux2, cont;
        aux = this.filas.primero;
        aux2 = aux.acceso;
        cont = 0;

        while (aux !== null) {
            cont += 1;

            while (aux2 !== null) {
                console.log(aux2.x, aux2.y, aux2.caracter);
                aux2 = aux2.derecha;
            }

            aux = aux.siguiente;

            if (aux !== null) {
                aux2 = aux.acceso;
            }
        }

        aux = this.filas.primero;
        aux2 = aux.acceso;
        cont = 0;
    }

    print_matriz2() {
        var Matriz2, MatrizAux, aux, aux2, cont;
        aux = this.filas.primero;
        aux2 = aux.acceso;
        Matriz2 = [];
        cont = 0;

        while (aux !== null) {
            MatrizAux = [];
            cont += 1;

            while (aux2 !== null) {
                MatrizAux.append(aux2.caracter);
                aux2 = aux2.derecha;
            }

            aux = aux.siguiente;
            Matriz2.append(MatrizAux);

            if (aux !== null) {
                aux2 = aux.acceso;
            }
        }

        aux = this.filas.primero;
        aux2 = aux.acceso;
        cont = 0;
        return Matriz2;
    }

    graficarDot() {
        var aux, aux2, cont, grafo, group, rank, x_fila, y_columna;

        grafo = "digraph T{ \nnode[shape=box fontname=\"Arial\" fillcolor=\"white\" style=filled ]";
        grafo += "\nroot[label = \"capa: " + this.capa + "\", group=1]\n";
        grafo += "label = \"Matriz Dispersa\" \nfontname=\"Arial Black\" \nfontsize=\"15pt\" \n\n\n";

        x_fila = this.filas.primero;
        while (x_fila != null) {
            grafo += `F${x_fila.id}[label="${x_fila.id}",fillcolor="plum",group=1];\n`;
            x_fila = x_fila.siguiente;
        }

        x_fila = this.filas.primero;
        while (x_fila != null) {
            if (x_fila.siguiente !== null) {
                grafo += `F${x_fila.id}->F${x_fila.siguiente.id};\n`;
                grafo += `F${x_fila.siguiente.id}->F${x_fila.id};\n`;
            }

            x_fila = x_fila.siguiente;
        }

        y_columna = this.columnas.primero;

        while (y_columna != null) {
            group = Number.parseInt(y_columna.id) + 1;
            grafo += `C${y_columna.id}[label="C${y_columna.id}",fillcolor="powderblue",group=${group.toString()}];\n`;
            y_columna = y_columna.siguiente;
        }

        cont = 0;
        y_columna = this.columnas.primero;

        while (y_columna != null) {
            if (y_columna.siguiente !== null) {
                grafo += `C${y_columna.id}->C${y_columna.siguiente.id}\n`;
                grafo += `C${y_columna.siguiente.id}->C${y_columna.id}\n`;
            }

            cont += 1;
            y_columna = y_columna.siguiente;
        }

        y_columna = this.columnas.primero;
        x_fila = this.filas.primero;
        grafo += `root->F${x_fila.id};\n root->C${y_columna.id};\n`;
        grafo += "{rank=same;root;";
        cont = 0;
        y_columna = this.columnas.primero;

        while (y_columna != null) {
            grafo += `C${y_columna.id};`;
            cont += 1;
            y_columna = y_columna.siguiente;
        }

        grafo += "}\n";
        aux = this.filas.primero;
        aux2 = aux.acceso;
        cont = 0;

        while (aux != null) {
            cont += 1;

            while (aux2 != null) {
                grafo += `N${aux2.x}_${aux2.y}[label="${aux2.caracter}",group="${Number.parseInt(aux2.y) + 1}", fillcolor="white"];\n`;
                aux2 = aux2.derecha;
            }

            aux = aux.siguiente;

            if (aux != null) {
                aux2 = aux.acceso;
            }
        }

        aux = this.filas.primero;
        aux2 = aux.acceso;
        cont = 0;

        while (aux != null) {
            rank = "{" + `rank = same;F${aux.id};`;
            cont = 0;

            while (aux2 != null) {
                if (cont == 0) {
                    grafo += `F${aux.id}->N${aux2.x}_${aux2.y};\n`;
                    grafo += `N${aux2.x}_${aux2.y}->F${aux.id};\n`;
                    cont += 1;
                }

                if (aux2.derecha != null) {
                    grafo += `N${aux2.x}_${aux2.y}->N${aux2.derecha.x}_${aux2.derecha.y};\n`;
                    grafo += `N${aux2.derecha.x}_${aux2.derecha.y}->N${aux2.x}_${aux2.y};\n`;
                }

                rank += `N${aux2.x}_${aux2.y};`;
                aux2 = aux2.derecha;
            }

            aux = aux.siguiente;

            if (aux != null) {
                aux2 = aux.acceso;
            }

            grafo += rank + "}\n";
        }

        aux = this.columnas.primero;
        aux2 = aux.acceso;
        cont = 0;

        while (aux != null) {
            cont = 0;
            grafo += "";

            while (aux2 != null) {
                if (cont == 0) {
                    grafo += `C${aux.id}->N${aux2.x}_${aux2.y};\n`;
                    grafo += `N${aux2.x}_${aux2.y}->C${aux.id};\n`;
                    cont += 1;
                }

                if (aux2.abajo != null) {
                    grafo += `N${aux2.abajo.x}_${aux2.abajo.y}->N${aux2.x}_${aux2.y};\n`;
                    grafo += `N${aux2.x}_${aux2.y}->N${aux2.abajo.x}_${aux2.abajo.y};\n`;
                }

                aux2 = aux2.abajo;
            }

            aux = aux.siguiente;

            if (aux != null) {
                aux2 = aux.acceso;
            }
        }
        grafo += "}";

        d3.select("#matriz-dispersa").graphviz()
            .width(1500)
            .height(1500)
            .renderDot(grafo)

    }

}




/*

    MATRIZ ORTOGONAL

*/

class NodoOrtogonal {
    constructor(fila, columna, caracter) {
        this.fila = fila;
        this.columna = columna;
        this.caracter = caracter;
        this.anterior = null;
        this.siguiente = null;
        this.arriba = null;
        this.abajo = null;
    }

    getFila() {
        return this.fila;
    }

    getColumna() {
        return this.columna;
    }

    getCaracter() {
        return this.caracter;
    }

    setArriba(arriba) {
        this.arriba = arriba;
    }

    getArriba() {
        return this.arriba;
    }

    setAbajo(abajo) {
        this.abajo = abajo;
    }

    getAbajo() {
        return this.abajo;
    }

    setSiguiente(siguiente) {
        this.siguiente = siguiente;
    }

    getSiguiente() {
        return this.siguiente;
    }

    setAnterior(anterior) {
        this.anterior = anterior;
    }

    getAnterior() {
        return this.anterior;
    }

    toString() {
        return `Row: ${this.fila}, Column: ${this.columna}, Caracter:${this.caracter}`;
    }

}

export class MatrizOrtogonal {
    constructor() {
        this.head = null;
        this.size = 0;
        this.SizeG = 0;
    }

    getHead() {
        return this.head;
    }

    getSizeG() {
        return this.SizeG;
    }

    vacio() {
        return this.head === null;
    }

    autofilling(fila, columna, caracter) {
        for (let i = 1; i <= fila; i++) {
            for (let j = 1; j <= columna; j++) {
                this.insertData(i, j, caracter);
            }
        }
    }

    insertData(fila, columna, caracter) {
        var aux, aux2, new_node;
        this.SizeG += 1;

        if (this.vacio()) {
            new_node = new NodoOrtogonal(fila, columna, caracter);
            this.head = new_node;
            this.size += 1;
        } else {
            aux = this.head;

            while (aux.abajo !== null) {
                aux = aux.abajo;
            }

            if (this.size !== fila) {
                this.size += 1;
                new_node = new NodoOrtogonal(fila, columna, caracter);
                aux.abajo = new_node;
                new_node.arriba = aux;
            } else {
                while (aux.siguiente !== null) {
                    aux = aux.siguiente;
                }

                new_node = new NodoOrtogonal(fila, columna, caracter);
                aux.siguiente = new_node;
                new_node.anterior = aux;

                if (this.size > 1) {
                    aux2 = aux.arriba.siguiente;
                    aux2.abajo = new_node;
                    new_node.arriba = aux2;
                }
            }
        }
    }

    searchData(fila, columna) {
        var aux, tmp;
        tmp = aux = null;

        if (this.head !== null) {
            tmp = this.head;
            while (tmp !== null) {
                aux = tmp;
                while (aux !== null) {
                    if (parseInt(fila) === parseInt(aux.fila) && parseInt(columna) === parseInt(aux.columna)) {
                        return aux;
                    }
                    aux = aux.siguiente;
                }
                tmp = tmp.abajo;
            }
            return null;
        } else {
            console.log("Matriz vacia");
            return;
        }
    }

    updateData(fila, columna, _caracter) {
        var aux, tmp;
        tmp = aux = null;

        if (this.head !== null) {
            tmp = this.head;
            while (tmp !== null) {
                aux = tmp;
                while (aux !== null) {
                    if (parseInt(fila) === parseInt(aux.fila) && parseInt(columna) === parseInt(aux.columna)) {
                        aux.caracter = _caracter
                    }
                    aux = aux.siguiente;
                }
                tmp = tmp.abajo;
            }
            return null;
        } else {
            console.log("Matriz vacia");
            return;
        }
    }

    __searchNodeForRow(fila) {
        let aux, tmp;
        tmp = aux = null;

        if (this.head !== null) {
            tmp = this.head;
            while (tmp !== null) {
                aux = tmp;
                while (aux !== null) {
                    if (Number.parseInt(fila) === Number.parseInt(aux.fila)) {
                        return aux;
                    }
                    aux = aux.siguiente;
                }
                tmp = tmp.abajo;
            }
            return null;
        } else {
            console.log("Matriz vacia");
            return null;
        }
    }

    __searchNodeForColumn(columna) {
        var aux, tmp;
        tmp = aux = null;
        if (this.head !== null) {
            tmp = this.head;
            while (tmp !== null) {
                aux = tmp;
                while (aux !== null) {
                    if (parseInt(columna) === parseInt(aux.columna)) {
                        return aux;
                    }
                    aux = aux.siguiente;
                }
                tmp = tmp.abajo;
            }
            return null;
        } else {
            console.log("Matriz vacia");
            return null;
        }
    }

    recorrerFila(fila) {
        var aux, tmp;
        tmp = aux = null;
        if (this.head !== null) {
            tmp = this.__searchNodeForRow(fila);
            if (tmp !== null) {
                while (tmp) {
                    console.log(tmp);
                    tmp = tmp.siguiente;
                }
            } else {
                console.log("La fila no existe, creela!!!");
                return;
            }
        } else {
            console.log("Matriz vacia");
            return;
        }
    }

    recorrerColumna(columna) {
        var aux, tmp;
        tmp = aux = null;
        if (this.head !== null) {
            tmp = this.__searchNodeForColumn(columna);
            if (tmp !== null) {
                while (tmp) {
                    console.log(tmp);
                    tmp = tmp.abajo;
                }
            } else {
                console.log("La fila no existe, creela!!!");
                return;
            }
        } else {
            console.log("Matriz vacia");
            return;
        }
    }

    printMatrixO() {
        var aux, tmp;
        tmp = aux = null;
        if (this.head !== null) {
            tmp = this.head;
            while (tmp !== null) {
                aux = tmp;
                while (aux !== null) {
                    console.log("|", aux.fila, "-", aux.columna);
                    aux = aux.siguiente;
                }
                console.log("|");
                tmp = tmp.abajo;
            }
        } else {
            console.log("Matriz vacia");
            return;
        }
    }

    drawMatrix() {
        var aux, cadena, file, rank, sub_cadena, tmp;
        tmp = aux = null;

        if (this.head !== null) {
            cadena = "";
            rank = "{rank=same;";
            sub_cadena = "";
            cadena = cadena + "digraph G { \n" + "\nnode[style=\"filled\", shape=\"box\"]\n";
            tmp = this.head;
            while (tmp !== null) {
                aux = tmp;
                while (aux !== null) {
                    cadena = cadena + `node${aux.fila.toString()}_${aux.columna.toString()}` + `[label="${aux.caracter}"];`;

                    if (aux.siguiente !== null) {
                        cadena = cadena + `node${aux.fila.toString()}_${aux.columna.toString()} -> node${aux.fila.toString()}_${(aux.columna + 1).toString()};`;
                        cadena = cadena + `node${aux.fila.toString()}_${(aux.columna + 1).toString()} -> node${aux.fila.toString()}_${aux.columna.toString()};`;
                    }
                    sub_cadena += `node${aux.fila.toString()}_${aux.columna.toString()};`;
                    aux = aux.siguiente;
                }
                cadena = cadena + rank + sub_cadena + "};\n";
                sub_cadena = "";
                tmp = tmp.abajo;
            }
            tmp = this.head;
            while (tmp !== null) {
                aux = tmp;
                while (aux !== null) {
                    if (aux.abajo !== null) {
                        cadena = cadena + `node${aux.fila.toString()}_${aux.columna.toString()} -> node${(aux.fila + 1).toString()}_${aux.columna.toString()};`;
                        cadena = cadena + `node${(aux.fila + 1).toString()}_${aux.columna.toString()} -> node${aux.fila.toString()}_${aux.columna.toString()};`;
                    }
                    aux = aux.abajo;
                }
                tmp = tmp.siguiente;
            }
            cadena = cadena + "}";
            console.log(cadena);
            d3.select("#matriz-ortogonal").graphviz().width(1350).height(500).renderDot(cadena);

        } else {
            console.log("Matriz vacia");
            return;
        }
    }
}

/*
let matrizz = new MatrizOrtogonal()
let lista_Simple = new listaSimple()
matrizz.autofilling(25, 25, "")

let buscarCategoria = lista_Simple.buscarDato_Categoria("Fantasia")
console.log(buscarCategoria)
/*if (buscarCategoria !== null){
    matrizz.updateData(buscarCategoria.fila, buscarCategoria.columna, buscarCategoria.nombreLibro)
    matrizz.drawMatrix()
}
else{
    alert("Algo ocurrio")
}*/
