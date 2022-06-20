export class Usuario{
    constructor(dpi, nombreCompleto, nombreUsuario, correo, rol, contrasena, telefono){
        this._dpi = dpi
        this._nombreCompleto = nombreCompleto
        this._nombreUsuario = nombreUsuario
        this._correo = correo
        this._rol = rol
        this._contrasena = contrasena
        this._telefono = telefono
    }
    get dpi(){
        return this._dpi
    }
    set dpi(dpi){
        this._dpi = dpi
    }
    get nombreCompleto(){
        return this._nombreCompleto
    }
    set nombreCompleto(nombreCompleto){
        this._nombreCompleto = nombreCompleto
    }
    get nombreUsuario(){
        return this._nombreUsuario
    }
    set nombreUsuario(nombreUsuario){
        this._nombreUsuario = nombreUsuario
    }
    get correo(){
        return this._correo
    }
    set correo(correo){
        this._correo = correo
    }
    get rol(){
        return this._rol
    }
    set rol(rol){
        this._rol = rol
    }
    get contrasena(){
        return this._contrasena
    }
    set contrasena(contrasena){
        this._contrasena = contrasena
    }
    get telefono(){
        return this._telefono
    }
    set telefono(telefono){
        this._telefono = telefono
    }
    
    toString(){
        return `
        Nombre completo: ${this._nombreCompleto},
        DPI: ${this._dpi},
        Rol: ${this._rol},
        Correo: ${this._correo},
        Nombre Usuario: ${this._nombreUsuario},
        Contraseña: ${this._contrasena},
        Telefono: ${this._telefono}
        `
    }
}

export class Nodo {
    constructor(dato) {
        this.dato = dato
        this.siguiente = null
    }
}

export class listaCircularSimple {
    constructor() {
        this.primero = null
        this.ultimo = null
    }

    estaVacia() {
        return this.primero === null
    }

    agregarAlinicio(dato) {
        if (this.estaVacia()) {
            this.primero = this.ultimo = new Nodo(dato)
            this.ultimo.siguiente = this.primero
        }
        else {
            let auxiliar = new Nodo(dato)
            auxiliar.siguiente = this.primero
            this.primero = auxiliar
            this.ultimo.siguiente = this.primero
        }
    }

    agregarAlfinal(dato) {
        if (this.estaVacia()) {
            this.primero = this.ultimo = new Nodo(dato)
            this.ultimo.siguiente = this.primero
        }
        else {
            let auxiliar = this.ultimo
            this.ultimo = auxiliar.siguiente = new Nodo(dato)
            this.ultimo.siguiente = this.primero
        }
    }

    eliminarAlinicio() {
        if (this.estaVacia()) {
            console.log("No se encontraron datos en la lista")
        }
        else if (this.primero === this.ultimo) {
            this.primero = this.ultimo = null
        }
        else {
            this.primero = this.primero.siguiente
            this.ultimo.siguiente = this.primero
        }
    }

    eliminarAlfinal() {
        if (this.estaVacia()) {
            console.log("No se encontraron datos")
        }
        else if (this.primero = this.ultimo) {
            this.primero = this.ultimo = null
        }
        else {
            let auxiliar = this.primero
            while (auxiliar.siguiente != this.ultimo) {
                auxiliar = auxiliar.siguiente
            }
            auxiliar.siguiente = this.primero
            this.ultimo = auxiliar
        }
    }

    recorrerLista() {
        if (this.estaVacia()) {
            console.log("No se encontraron datos")
        }
        let auxiliar = this.primero
        while (auxiliar != null) {
            console.log(auxiliar.dato.toString())
            auxiliar = auxiliar.siguiente
            if (auxiliar === this.primero) {
                break
            }
        }
        console.log("\n")
    }

    buscarDato(dato_) {
        if (this.estaVacia()) {
            console.log("No se encontraron datos")
        }
        let auxiliar = this.primero
        while (auxiliar != null) {
            if (auxiliar.dato.nombreUsuario === dato_) {
                return ((auxiliar.dato) + ", dato encontrado.")
            }
            auxiliar = auxiliar.siguiente
            if (auxiliar === this.primero) {
                return ((dato_) + ", dato no encontrado.")
            }
        }
    }

    tamanio() {
        let contador = 0
        if (this.estaVacia()) {
            return 0
        }
        let auxiliar = this.primero
        while (auxiliar != null) {
            contador += 1
            auxiliar = auxiliar.siguiente
            if (auxiliar === this.primero) {
                console.log(contador)
            }
        }
    }

    ordenamientoBurbuja() {
        let auxiliar
        let actual = auxiliar = null
        if (!this.estaVacia()) {
            actual = this.primero
            while (actual.siguiente !== this.primero) {
                auxiliar = actual.siguiente
                while (auxiliar !== this.primero) {
                    if (auxiliar.dato.tiempoSong < actual.dato.tiempoSong) {
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

    graficarDot() {
        const MAXVALUE = 1;
        let aux = this.primero,
            cont = 0,
            cont_aux = 0,
            cadena = "";
        cadena += "digraph G { \n";
        cadena += "rankdir=LR \n";

        while (aux) {
            cadena += "Node" + String(cont) + '[label="' + aux.dato.nombreCompleto + '"];\n';
            cont += 1;
            aux = aux.siguiente;
            if (aux === this.primero) {
                cont_aux += 1;
                if (cont_aux === MAXVALUE) break;
            }
        }
        cont = cont_aux = 0
        while (aux) {
            cadena += "Node" + String(cont) + " -> " + "Node" + String(cont + 1) + ";\n";
            cont += 1;
            aux = aux.siguiente;
            if (aux === this.ultimo) {
                cont_aux += 1;
                if (cont_aux === MAXVALUE) break;
            }
        }
        cadena += "Node" + String(cont) + " -> " + "Node" + String(0) + ";\n"
        cadena += "}";
        //console.log(cadena);
        d3.select("#usuarios-circular-simple").graphviz().width(1500).height(300).renderDot(cadena);

    }

}