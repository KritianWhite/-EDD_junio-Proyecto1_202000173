export class UsuarioDefault{
    constructor(dpiD=2354168452525, nombreCompletoD="WIlfred Perez", nombreUsuarioD="Wilfred", correoD="", rolD="Administrador" , contrasenaD="123", telefonoD="+502 (123) 123-4567"){
        this._dpiD = dpiD
        this._nombreCompletoD = nombreCompletoD
        this._nombreUsuarioD = nombreUsuarioD
        this._correoD = correoD
        this._rolD = rolD
        this._contrasenaD = contrasenaD
        this._telefonoD = telefonoD
    }
    get dpiD(){
        return this._dpiD
    }
    set dpiD(dpiD){
        this._dpiD = dpiD
    }
    get nombreCompletoD(){
        return this._nombreCompletoD
    }
    set nombreCompletoD(nombreCompletoD){
        this._nombreCompletoD = nombreCompletoD
    }
    get nombreUsuarioD(){
        return this._nombreUsuarioD
    }
    set nombreUsuarioD(nombreUsuarioD){
        this._nombreUsuarioD = nombreUsuarioD
    }
    get correoD(){
        return this._correoD
    }
    set correoD(correoD){
        this._correoD = correoD
    }
    get rolD(){
        return this._rolD
    }
    set rolD(rolD){
        this._rolD = rolD
    }
    get contrasenaD(){
        return this._contrasenaD
    }
    set contrasenaD(contrasenaD){
        this._contrasenaD = contrasenaD
    }
    get telefonoD(){
        return this._telefonoD
    }
    set telefonoD(telefonoD){
        this._telefonoD = telefonoD
    }
    
    toString(){
        return `
        Nombre completo: ${this._nombreCompletoD},
        dpiD: ${this._dpiD},
        rolD: ${this._rolD},
        correoD: ${this._correoD},
        Nombre Usuario: ${this._nombreUsuarioD},
        Contraseña: ${this._contrasenaD},
        telefonoD: ${this._telefonoD}
        `
    }
}