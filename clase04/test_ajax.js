function testeo() {
    var http = new XMLHttpRequest();
    http.open("GET", "Backend/Test.php", true);
    http.send();
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            console.log(http.responseText);
        }
    };
}
function testeo_params() {
    var http = new XMLHttpRequest();
    var nombre = document.getElementById("nombre").value;
    http.open("GET", "Backend/Test_Params.php?nombre=" + nombre, true);
    http.send();
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            console.log(http.responseText);
        }
    };
}
window.onload = function () {
    testeo();
};
