<?php
$nombre = $_POST["name"];

if($nombre == ""){
    echo "Vuelve a intentarlo, no se puede enviar vacio";
} else {
    echo "Correo enviado correctamente, muchas gracias";
}
?>
