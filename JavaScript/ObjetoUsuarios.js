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