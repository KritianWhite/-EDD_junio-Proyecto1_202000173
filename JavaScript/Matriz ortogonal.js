
class NodoInterno_O {

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


class NodoEncabezado_O {
    constructor(id = null) {
        this.id = id;
        this.siguiente = null;
        this.anterior = null;
        this.acceso = null;
    }
    getAcceso() {
        return this.acceso
    }
    setAcceso(nuevo_acceso) {
        this.acceso = nuevo_acceso
    }

}



class ListaEncabezado_O {

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


class MatrizOrtogonal {

    constructor(capa = null) {
        this.capa = capa;
        this.filas = new ListaEncabezado_O("LISTAS");
        this.columnas = new ListaEncabezado_O("COLUMNAS");

    }

    insertar(nodoInterno) {
        var aux, aux2, encabezadoX, encabezadoY;
        encabezadoX = this.filas.getEncabezado(nodoInterno.x);
        encabezadoY = this.columnas.getEncabezado(nodoInterno.y);

        if (encabezadoX === null) {
            encabezadoX = new NodoEncabezado_O(nodoInterno.x);
            this.filas.insertarEncabezado(encabezadoX);
        }

        if (encabezadoY === null) {
            encabezadoY = new NodoEncabezado_O(nodoInterno.y);
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

        d3.select("#matriz-ortogonal").graphviz()
            .width(1000)
            .height(700)
            .renderDot(grafo)

    }
    ubicarCoordenada(fila, columna, dato_nuevo) {
        var tmp;
        for (let i = 1; i <= 25; i++) {
            tmp = this.filas.getEncabezado(i).getAcceso()
            while (tmp !== null) {
                if (tmp.x == fila && tmp.y == columna) {
                    tmp.caracter = dato_nuevo;
                }
                tmp = tmp.derecha;
            }
        }
        /*try {
          tmp = this.filas.getEncabezado(fila).getAcceso();
    
          while (tmp !== null) {
            console.log(tmp.x)
            console.log(tmp.y)
            var inicio, tmp2;
            inicio = this.columnas.getEncabezado(columna);

            tmp2 = inicio.getAcceso();

            while (tmp2 !== null) {
                if (tmp.x === fila && tmp2.y === columna) {
                    tmp.caracter = dato_nuevo;
                  return tmp2;
                }
            tmp2 = tmp2.getAbajo();
            }
            
    
            tmp = tmp.derecha();
          }
    
          return null;
        } catch (e) {
          console.log("Coordenada no encontrada");
          return null;
        }*/
    }

    llenarMatriz() {
        for (let i = 1; i <= 25; i++) {
            for (let j = 1; j <= 25; j++) {
                matrizz.insertar(new NodoInterno_O(i, j, " "));
            }
        }
    }


}
let matrizz = new MatrizOrtogonal()


matrizz.llenarMatriz()
matrizz.ubicarCoordenada(5, 2, "Zounds")
matrizz.ubicarCoordenada(9, 1, "Isosure")
matrizz.ubicarCoordenada(8, 20, "Crustatia")
matrizz.graficarDot()