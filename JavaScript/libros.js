class Libros{
    constructor(isbn, nombreAutor, nombreLibro, cantidad, fila, columna, paginas, categoria){
        this._isbn = isbn
        this._nombreAutor = nombreAutor
        this._nombreLibro = nombreLibro
        this._cantidad = cantidad
        this._fila = fila
        this._columna = columna
        this._paginas = paginas
        this._categoria = categoria
    }
    get isbn(){
        return this._isbn
    }
    set isbn(isbn){
        this._isbn = isbn
    }
    get nombreAutor(){
        return this._nombreAutor
    }
    set nombreAutor(nombreAutor){
        this._nombreAutor = nombreAutor
    }
    get nombreLibro(){
        return this._nombreLibro
    }
    set nombreLibro(nombreLibro){
        this._nombreLibro = nombreLibro
    }
    get cantidad(){
        return this._cantidad
    }
    set cantidad(cantidad){
        this._cantidad = cantidad
    }
    get fila(){
        return this._fila
    }
    set fila(fila){
        this._fila = fila
    }
    get columna(){
        return this._columna
    }
    set columna(columna){
        this._columna = columna
    }
    get paginas(){
        return this._paginas
    }
    set paginas(paginas){
        this._paginas = paginas
    }
    get categoria(){
        return this._categoria
    }
    set categoria(categoria){
        this._categoria = categoria
    }

    toString(){
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