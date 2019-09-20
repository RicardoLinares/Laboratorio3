<?php

$archivo = fopen("auto.json", "r",true);
$array = array();
$index = 0;

$resultado = fread($archivo, filesize("auto.json"));

fclose($archivo);

echo $resultado;


function verAuto($auto )
{
    console.log($auto);
}