import { Usuario, listaCircularSimple } from './Usuarios lista circular simple.js'
import { Autores, ArbolABB } from "./Autores arbol binario.js";
import { Libros, NodoInterno, MatrizDispersa, MatrizOrtogonal } from "./Libros matrices dispersa y ortogonal.js";



//alert("Hola bb")


// USUARIOS
var listaCircular_Simple = new listaCircularSimple()
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

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function cargarUsuarios() {
    alert("Cargando archivos....!!!")
    let newElement = document.getElementById("perfiles")
    let newText = ""
    let contador = 1
    contenidoUsuariosJSON.forEach(e => {
        listaCircular_Simple.agregarAlfinal(new Usuario(
            e.dpi,
            e.nombre_completo,
            e.nombre_usuario,
            e.correo,
            e.rol,
            e.contrasenia,
            e.telefono
        ))
        newText += `
            <div class="col-md-3 col-sm-6">
                <div class="our-team">
                    <div class="pic">
                        <img src="./img/image${random(1,50)}.png">
                    </div>
                    <h3 class="title">${e.nombre_completo}</h3>
                    <span class="post">${e.nombre_usuario}</span>
                    <ul class="social">
                        <li><a class="fa fa-facebook"></a></li>
                        <li><a class="fa fa-twitter"></a></li>
                        <li><a class="fa fa-google-plus"></a></li>
                        <li><a class="fa fa-linkedin"></a></li>
                    </ul>
                </div>
            </div>
        `
        contador += 1
        newElement.innerHTML = newText
    })
    listaCircular_Simple.recorrerLista()
    listaCircular_Simple.graficarDot()
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

function abrirAutoresJSON(evento) {
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

function cargarAutores() {
    alert("Cargando autores....!!!")
    contenidoAutoresJSON.forEach(e => {
        let listAutores = new Autores(
            e.dpi,
            e.nombre_autor,
            e.correo,
            e.telefono,
            e.direccion,
            e.biografia
        )
        arbolito.agregar(e.nombre_autor)
        console.log(listAutores)
    })
    arbolito.postOrden(arbolito.raiz)
    arbolito.postOrden(arbolito.raiz)
    arbolito.inOrden(arbolito.raiz)
}


// Cargar Libros

var autoress = new Autores()
var matriz_Dispersa = new MatrizDispersa()
var matriz_Ortogonal = new MatrizOrtogonal()
var contenidoLibrosJSON = []

window.addEventListener("load", () => {
    document
        .getElementById("fichero-l")
        .addEventListener("change", abrirLibrosJSON)
})
window.addEventListener("load", () => {
    document
        .getElementById("cargar-libros")
        .addEventListener("click", cargarLibros)
})

function abrirLibrosJSON(evento) {
    let archivo = evento.target.files[0]
    if (archivo) {
        let reader = new FileReader()
        reader.onload = function (e) {
            let contenido = e.target.result
            contenidoLibrosJSON = JSON.parse(contenido)
        }
        reader.readAsText(archivo)
    }
    else {
        alert("No se seleccionó ningún archivo")
    }
}

function cargarLibros() {
    alert("Cargando libros...!!!")
    contenidoLibrosJSON.forEach(e => {
        if (e.categoria === "Fantasia") {
            matriz_Ortogonal.insertData(e.fila, e.columna, e.nombre_libro)
        }
        else if (e.categoria === "Thriller") {
            matriz_Dispersa.insertar(new NodoInterno(
                e.fila,
                e.columna,
                e.nombre_libro
            ))
        }

        console.log(e.nombre_autor)
    })
    matriz_Ortogonal.drawMatrix()
    matriz_Dispersa.graficarDot()

}