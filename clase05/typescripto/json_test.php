<?php

$producto = json_decode($_POST["producto"]);

$producto->nombre = "manzana";
$producto->precio = 200;

$alServr = json_encode($producto);

echo $alServr;