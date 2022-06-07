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