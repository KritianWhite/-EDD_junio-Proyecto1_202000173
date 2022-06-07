function login(){
    var user, pass
    
    user = document.getElementById("user").value
    pass = document.getElementById("password").value

    if (user === "Wilfred" && pass === "123"){
        window.location =  "administrador.html"
    }
    else{
        alert("Usuario y/o contraseña incorrectos")
        window.location = "login.html"
    }

}