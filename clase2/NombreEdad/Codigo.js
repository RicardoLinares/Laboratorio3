function Mostrar() {
    var edad = document.getElementById("txtEdad").value;
    var nombre = document.getElementById("txtNombre").value;
    var Mensaje = "Nombre: " + nombre + " Edad: " + edad;
    console.log(Mensaje);
    alert(Mensaje);
    document.getElementById("div").innerHTML = Mensaje;
}
