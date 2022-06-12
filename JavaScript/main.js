
// Mostrar login
window.addEventListener("load", () =>{
    document
        .getElementById("iniciar-sesion")
        .addEventListener("click", login)
})

function login(){
    var user, pass

    document.getElementById("home").style.display = "none"
    document.getElementById("login").style.display = "block"
    document.getElementById("administrador").style.display = "none"
    document.getElementById("usuarios").style.display = "none"

    user = document.getElementById("user").value
    pass = document.getElementById("password").value

    if (user === "Wilfred" && pass === "123"){
        document.getElementById("home").style.display = "none"
        document.getElementById("login").style.display = "none"
        document.getElementById("administrador").style.display = "block"
        document.getElementById("usuarios").style.display = "none"
    }
    else if(user === "user1" && pass === "123"){
        document.getElementById("home").style.display = "none"
        document.getElementById("login").style.display = "none"
        document.getElementById("administrador").style.display = "none"
        document.getElementById("usuarios").style.display = "block"
    }
    else{
        alert("Usuario y/o contraseña incorrectos")
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
function regresarHome(){
    document.getElementById("home").style.display = "block"
    document.getElementById("login").style.display = "none"
    document.getElementById("administrador").style.display = "none"
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
}