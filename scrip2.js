function calcula_Contraseña() {
    var usuario = document.getElementById("Usuario").value;
    var contraseña = document.getElementById("Contraseña").value;

    if ((usuario == "sahoo" && contraseña == "123") || 
        (usuario == "jose" && contraseña == "456") || 
        (usuario == "pedro" && contraseña == "789")) {
        
        Swal.fire({
            title: "¡Acceso concedido!",
            text: "Bienvenido al sistema",
            icon: "success",
            position: "center",
        }).then((result) => {
            window.location = "index.html";
        });
    } else {
        Swal.fire({
            title: "Error de inicio de sesión",
            text: "Usuario o contraseña incorrectos",
            icon: "error",
            position: "center",
        });
    }
}