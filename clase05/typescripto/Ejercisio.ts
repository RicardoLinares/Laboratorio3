var ajax = new XMLHttpRequest();
ajax.open("POST","json_test2.php");
ajax.setRequestHeader("content-type","application/x-www-form-urlencoded");
ajax.send();
ajax.onreadystatechange = function()
{
    if(ajax.status == 200 && ajax.readyState == 4)
    {
          console.log(ajax.responseText);
        
        var nuevo = JSON.parse(ajax.responseText);
        console.log(nuevo);

        let table = "<table><tr><td>Marca</td><td>Precio</td></tr>" // </td></table>

        nuevo.forEach(element => {
            table += "<tr><td>" + element.Marca + "</td><td>"+ element.Precio + "</td></tr>"
        });
        table += "</table>";

        document.write(table)
    }
}