function Repetidor(numerico, cadena) {
    if (cadena) {
        for (var i = 0; i < numerico; i++) {
            console.log(cadena);
        }
    }
    else {
        console.log((numerico * -1));
    }
}
Repetidor(3, "Hola");
Repetidor(3);
