function Mostrar() {
  let edad : string = (<HTMLInputElement> document.getElementById("txtEdad")).value;
  let nombre : string = (<HTMLInputElement> document.getElementById("txtNombre")).value;
  let Mensaje :string = "Nombre: " + nombre + " Edad: " + edad;

  console.log(Mensaje);
  alert(Mensaje);

  (<HTMLDivElement> document.getElementById("div")).innerHTML = Mensaje;
}
