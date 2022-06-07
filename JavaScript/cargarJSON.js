import { Usuario } from './ObjetoUsuarios.js'
import { listaDoble } from './listaDoble.js'

import { Autores } from './autores.js'
import { ArbolABB } from './arbolBinario.js'
//alert("Hola bb")


// USUARIOS
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


// AUTORES
var arbolito = new ArbolABB()
var contenidoAutoresJSON = []

window.addEventListener("load", () => {
    document
        .getElementById("fichero-a")
        .addEventListener("change", abrirAutoresJSON)
})
window.addEventListener("load", () => {
    document
        .getElementById("cargar-autores")
        .addEventListener("click", cargarAutores)
})

function abrirAutoresJSON(evento){
    let archivo = evento.target.files[0]
    if (archivo) {
        let reader = new FileReader()
        reader.onload = function (e) {
            let contenido = e.target.result
            contenidoAutoresJSON = JSON.parse(contenido)
        }
        reader.readAsText(archivo)
    }
    else {
        alert("No se selecciono ningún archivo")
    }
}

function cargarAutores(){
    alert("Cargando autores....!!!")
    contenidoAutoresJSON.forEach(e => {
        arbolito.agregar(e.nombre_autor)
    })
    arbolito.postOrden(arbolito.raiz)
    arbolito.postOrden(arbolito.raiz)
    arbolito.inOrden(arbolito.raiz)
}