import { Usuario, listaCircularSimple } from './Usuarios lista circular simple.js'
import { Autores, ArbolABB } from "./Autores arbol binario.js";
import { Libros, NodoInterno, MatrizDispersa, MatrizOrtogonal } from "./Libros matrices dispersa.js";
import { listaSimple } from "./Lista simple.js";
import { Pila } from "./Pila.js";
import { UsuariosCon_Libros, usuarioEn_Cola, listaDoble, Cola } from "./Lista doblemente enlazada.js";
import { Lista_Listas } from "./Lista de listas.js";


document.getElementById("apilar-libro").onclick = apilarLibro
document.getElementById("comprar-libro").onclick = comprarLibro

// USUARIOS
var listaCircular_Simple = new listaCircularSimple()
var contenidoUsuariosJSON = []
//console.log(contenidoUsuariosJSON)

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
                        <img src="./img/image${random(1, 50)}.png">
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
    let newElement = document.getElementById("autores")
    let newText = ""

    contenidoAutoresJSON.forEach(e => {
        let listAutores = new Autores(
            e.dpi,
            e.nombre_autor,
            e.correo,
            e.telefono,
            e.direccion,
            e.about
        )

        newText += `
            <div class="col-md-4 col-sm-6 col-xs-12">
                        <div class="single-team">
                            <div class="img-area">
                                <img src="./img/Autor${random(1, 50)}.jpg" class="img-responsive">
                                <div class="social">
                                    <ul class="list-inline">
                                        <li><a><i class="fa fa-facebook"></i></a></li>
                                        <li><a><i class="fa fa-twitter"></i></a></li>
                                        <li><a><i class="fa fa-pinterest"></i></a></li>
                                        <li><a><i class="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="img-text">
                                <h4>${e.nombre_autor}</h4>
                                <h5>${e.about}</h5>
                            </div>
                        </div>
                    </div>
        `
        newElement.innerHTML = newText

        arbolito.agregar(e.nombre_autor)
        console.log(listAutores)
    })
    arbolito.postOrden(arbolito.raiz)
    arbolito.postOrden(arbolito.raiz)
    arbolito.inOrden(arbolito.raiz)
    arbolito.graficar(arbolito.raiz)
}


// Cargar Libros
var matriz_Ortogonal = new MatrizOrtogonal()
var matriz_Dispersa = new MatrizDispersa()
var Pila_1 = new Pila()
var lista_Simple = new listaSimple()
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
    let contador = 1

    let newElement = document.getElementById("libros-Fantasia")
    let newText = ""
    let newElement2 = document.getElementById("libros-Thriller")
    let newText2 = ""

    contenidoLibrosJSON.forEach(e => {

        /*Mandamos nuestro objeto de libros a una lista simple para el
        ordenamiento y asi mismo poder hacer la cola */
        lista_Simple.agregarAlinicio(new Libros(e.isbn,
            e.nombre_autor,
            e.nombre_libro,
            e.cantidad,
            e.fila,
            e.columna,
            e.paginas,
            e.categoria))

        if (e.categoria === "Fantasia") {
            newText += `
                        <div class="col-md-3 col-sm-6">
                                    <div class="box">
                                        <div class="our-team">
                                            <div class="pic">
                                                <img src="./img/Libro${random(1, 70)}.jpg">
                                                </div>
                                            <h3 class="title">${e.nombre_libro}</h3>
                                            <span class="post">${e.nombre_autor}</span>
                                            <p>Cantidad: ${e.cantidad}</p>
                                        </div>
                                    </div>
                                </div>
                        `
            newElement.innerHTML = newText

        }
        else if (e.categoria === "Thriller") {
            matriz_Dispersa.insertar(new NodoInterno(
                e.fila,
                e.columna,
                e.nombre_libro
            ))
            newText2 += `
                    <div class="col-md-3 col-sm-6">
                    <div class="box">
                    <div class="our-team">
                    <div class="pic">
                    <img src="./img/Libro${random(1, 70)}.jpg">
                    </div>
                    <h3 class="title">${e.nombre_libro}</h3>
                    <span class="post">${e.nombre_autor}</span>
                    <p>Cantidad: ${e.cantidad}</p>
                    </div>
                    </div>
                    </div>
                    `
            newElement2.innerHTML = newText2

        }

        lista_Simple.ordenamientoBurbuja()
        contador += 1
    })
    lista_Simple.recorrerLista()
    matriz_Dispersa.graficarDot()
    matrizO()


    function matrizO(){
        let lista = lista_Simple.buscarDato_Categoria("Fantasia")
        if (lista != null){
            matriz_Ortogonal.autofilling(25,25," ")
            matriz_Ortogonal.updateData(lista.fila, lista.columna, lista.nombreLibro)
            matriz_Ortogonal.drawMatrix()
        }
    }

}

function apilarLibro() {
    let inputOut = document.querySelector("#input-libro").value
    let libroObtenido = lista_Simple.buscarDato(inputOut)


    let nombreL, cantidadL
    nombreL = libroObtenido.nombreLibro
    cantidadL = libroObtenido.cantidad

    console.log(nombreL, cantidadL)
    for (let i = 1; i <= cantidadL; i++) {
        Pila_1.apilar(i)
        //console.log(i)
    }
    Pila_1.graficarDot(nombreL)


    document.querySelector("#input-libro").value = ""
    console.log(inputOut)

}

let listaDoblemente = new listaDoble()
let Colaa = new Cola()
let listadeListas = new Lista_Listas()

function comprarLibro() {
    let inputNombre = document.querySelector("#comprar-nombre").value
    let inputNombreLibro = document.querySelector("#comprar-nombre-libro").value
    let inputCantidad = parseInt(document.querySelector("#comprar-cantidad").value)

    // Para el top de libros mas vendidos
    //listaDoblemente.agregarAlfinal(new UsuariosCon_Libros(inputNombreLibro, inputCantidad))
    //listaDoblemente.recorrerLista()

    function Agregar_Doble(){
        
        if (listaDoblemente.buscarDato(inputNombre) !== null) {
            let buscarDato = listaDoblemente.buscarDato(inputNombre)
            buscarDato.cantidad_Libros = buscarDato.cantidad_Libros + inputCantidad
            console.log(buscarDato)
    
            listaDoblemente.ordenamientoBurbuja()
            listaDoblemente.graficarDobleDot()
        }
        else {
            listaDoblemente.agregarAlinicio(new UsuariosCon_Libros(inputNombre, inputNombreLibro,  inputCantidad))
            listaDoblemente.ordenamientoBurbuja()
            listaDoblemente.recorrerLista()
            listaDoblemente.graficarDobleDot()
        }
        listaDoblemente.slide()

    }


    // Para buscar datos de los libros y modificar su cantidad

    let modificar = lista_Simple.buscarDato(inputNombreLibro)
    if (modificar !== null) {
        if (inputCantidad > modificar.cantidad) {
            swal({
                text: `Se encuentran ${modificar.cantidad} libros en stock.`,
                icon: "warning",
                button: "Ok",
              });
            if (modificar.cantidad === 0){
                swal({
                    text: `No contamos con libros en Stock. 
                    ¿Deseas agregar los libros a la cola?`,
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                  })
                  .then((willDelete) => {
                    if (willDelete) {
                      swal("Tus libros se agregaron a la cola correctamente", {
                        icon: "success",
                      });
                      Colaa.arribo(new usuarioEn_Cola(inputNombre, inputNombreLibro, inputCantidad))
                      Colaa.graficarDot()
                    } else {
                      swal("Lamentamos no tener libros en este momento.");
                    }
                  });
            }
            /*
            alert(`Hay ${modificar.cantidad} libros en stock..`)
            if (modificar.cantidad === 0){
                alert(`¿Deseas agregar los libros a la cola?`)
            }*/
        }
        else {
            modificar.cantidad = modificar.cantidad - inputCantidad
            console.log(modificar)
            Agregar_Doble()
            listadeListas.add(inputNombre, inputNombreLibro)
            listadeListas.graficar()
        }
    }





    console.log(inputNombre, inputNombreLibro, inputCantidad)
    document.querySelector("#comprar-nombre").value = ""
    document.querySelector("#comprar-nombre-libro").value = ""
    document.querySelector("#comprar-cantidad").value = ""
}

export { contenidoUsuariosJSON, contenidoLibrosJSON }