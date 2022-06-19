import { contenidoUsuariosJSON } from "./cargarJSON.js";


document.getElementById("boton").onclick = login
// Mostrar login
window.addEventListener("load", () => {
    document
        .getElementById("iniciar-sesion")
        .addEventListener("click", login)
})

function login() {
    var user, pass, okey
    okey = false

    document.getElementById("home").style.display = "none"
    document.getElementById("login").style.display = "block"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("navbar-usuarios").style.display = "none"
    document.getElementById("mostrar-usuarios").style.display = "none"
    document.getElementById("mostrar-librera").style.display = "none"
    document.getElementById("mostrar-arbol").style.display = "none"
    document.getElementById("mostrar-comprar").style.display = "none"

    user = document.getElementById("user").value
    pass = document.getElementById("password").value


    if (user === "Wilfred" && pass === "123") {
        document.getElementById("home").style.display = "none"
        document.getElementById("login").style.display = "none"
        document.getElementById("administrador").style.display = "block"
        document.getElementById("navbar-usuarios").style.display = "none"
        document.getElementById("mostrar-usuarios").style.display = "none"
        document.getElementById("mostrar-librera").style.display = "none"
        document.getElementById("mostrar-arbol").style.display = "none"
        document.getElementById("mostrar-comprar").style.display = "none"

    }
    else if (user === "user1" && pass === "123") {
        document.getElementById("home").style.display = "none"
        document.getElementById("login").style.display = "none"
        document.getElementById("administrador").style.display = "none"
        document.getElementById("navbar-usuarios").style.display = "block"
        document.getElementById("mostrar-usuarios").style.display = "block"
        document.getElementById("mostrar-librera").style.display = "none"
        document.getElementById("mostrar-arbol").style.display = "none"
        document.getElementById("mostrar-comprar").style.display = "none"
    }
    else {
        contenidoUsuariosJSON.forEach(e => {
            if (user === e.nombre_usuario && pass === e.contrasenia && e.rol === "Administrador") {
                document.getElementById("home").style.display = "none"
                document.getElementById("login").style.display = "none"
                document.getElementById("administrador").style.display = "block"
                document.getElementById("navbar-usuarios").style.display = "none"
                document.getElementById("mostrar-usuarios").style.display = "none"
                document.getElementById("mostrar-librera").style.display = "none"
                document.getElementById("mostrar-arbol").style.display = "none"
                document.getElementById("mostrar-comprar").style.display = "none"
                okey = true
                return
            }
            else if(user === e.nombre_usuario && pass === e.contrasenia && e.rol === "Usuario"){
                document.getElementById("home").style.display = "none"
                document.getElementById("login").style.display = "none"
                document.getElementById("administrador").style.display = "none"
                document.getElementById("navbar-usuarios").style.display = "block"
                document.getElementById("mostrar-usuarios").style.display = "block"
                document.getElementById("mostrar-librera").style.display = "none"
                document.getElementById("mostrar-arbol").style.display = "none"
                document.getElementById("mostrar-comprar").style.display = "none"
                okey = true
                return
            }
        })
        if (!okey){
            alert("Contraseña y/o usuario incorrectos..!")
        }
    }
}

// Regresar al home
window.addEventListener("load", () => {
    document
        .getElementById("regresar-home")
        .addEventListener("click", regresarHome)
})
window.addEventListener("load", () => {
    document
        .getElementById("regresar-home2")
        .addEventListener("click", regresarHome)
})
window.addEventListener("load", () => {
    document
        .getElementById("regresar-home3")
        .addEventListener("click", regresarHome)
})
function regresarHome() {
    document.getElementById("home").style.display = "block"
    document.getElementById("login").style.display = "none"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("navbar-usuarios").style.display = "none"
    document.getElementById("mostrar-usuarios").style.display = "none"
    document.getElementById("mostrar-librera").style.display = "none"
    document.getElementById("mostrar-arbol").style.display = "none"
    document.getElementById("mostrar-comprar").style.display = "none"
}

// Regresar al login
window.addEventListener("load", () => {
    document
        .getElementById("regresar-login")
        .addEventListener("click", regresarLogin)
})
function regresarLogin() {
    document.getElementById("home").style.display = "none"
    document.getElementById("login").style.display = "block"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("navbar-usuarios").style.display = "none"
    document.getElementById("mostrar-usuarios").style.display = "none"
    document.getElementById("mostrar-librera").style.display = "none"
    document.getElementById("mostrar-arbol").style.display = "none"
    document.getElementById("mostrar-comprar").style.display = "none"
}


// Navegación de la navBar (funciones)

window.addEventListener("load", () => {
    document
        .getElementById("usuarios-")
        .addEventListener("click", irUsuarios)
})
function irUsuarios() {
    document.getElementById("home").style.display = "none"
    document.getElementById("login").style.display = "none"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("navbar-usuarios").style.display = "block"
    document.getElementById("mostrar-usuarios").style.display = "block"
    document.getElementById("mostrar-librera").style.display = "none"
    document.getElementById("mostrar-arbol").style.display = "none"
    document.getElementById("mostrar-comprar").style.display = "none"
}

window.addEventListener("load", () => {
    document
        .getElementById("librera")
        .addEventListener("click", irLibrera)
})
function irLibrera() {
    document.getElementById("home").style.display = "none"
    document.getElementById("login").style.display = "none"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("navbar-usuarios").style.display = "block"
    document.getElementById("mostrar-usuarios").style.display = "none"
    document.getElementById("mostrar-librera").style.display = "block"
    document.getElementById("mostrar-arbol").style.display = "none"
    document.getElementById("mostrar-comprar").style.display = "none"
}

window.addEventListener("load", () => {
    document
        .getElementById("arbol")
        .addEventListener("click", irArbol)
})
function irArbol() {
    document.getElementById("home").style.display = "none"
    document.getElementById("login").style.display = "none"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("navbar-usuarios").style.display = "block"
    document.getElementById("mostrar-usuarios").style.display = "none"
    document.getElementById("mostrar-librera").style.display = "none"
    document.getElementById("mostrar-arbol").style.display = "block"
    document.getElementById("mostrar-comprar").style.display = "none"
}

window.addEventListener("load", () => {
    document
        .getElementById("comprar")
        .addEventListener("click", irComprar)
})
function irComprar() {
    document.getElementById("home").style.display = "none"
    document.getElementById("login").style.display = "none"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("navbar-usuarios").style.display = "block"
    document.getElementById("mostrar-usuarios").style.display = "none"
    document.getElementById("mostrar-librera").style.display = "none"
    document.getElementById("mostrar-arbol").style.display = "none"
    document.getElementById("mostrar-comprar").style.display = "block"
}