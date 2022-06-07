import { Usuario } from './ObjetoUsuarios.js'
import { Nodo, listaDoble } from './listaDoble.js'
//alert("Hola bb")

var listaDoblemente = new listaDoble()
var contenidoUsuariosJSON = []


window.addEventListener("load", () => {
    document
        .getElementById("fichero-u")
        .addEventListener("change", abrirUsuariosJSON)
})
window.addEventListener("load", () => {
    document
        .getElementById("cargar-usuarios")
        .addEventListener("click", cargarUsuarios)
})

function abrirUsuariosJSON(evento) {
    let archivo = evento.target.files[0]
    if (archivo) {
        let reader = new FileReader()
        reader.onload = function (e) {
            let contenido = e.target.result
            contenidoUsuariosJSON = JSON.parse(contenido)
        }
        reader.readAsText(archivo)
    }
    else {
        alert("No se selecciono ningún archivo")
    }
}

function cargarUsuarios() {
    alert("Cargando archivos....!!!")
    contenidoUsuariosJSON.forEach(e => {
        listaDoblemente.agregarAlfinal(new Usuario(
            e.dpi,
            e.nombre_completo,
            e.nombre_usuaio,
            e.correo,
            e.rol,
            e.contrasenia,
            e.telefono
        ))
    })
    listaDoblemente.recorrerLista()
}
