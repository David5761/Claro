<?php
$host = 'localhost';
$bd='test_db';
$user='postgres';
$pass='admin';
$conexion=pg_connect("host=$host dbname=$bd user=$user password=$pass") or die ("No se pudo conectar al servidor");
   



$query=("INSERT INTO persona(nombre, apellido, email,contrasena,fecha_nacimiento) 
        VALUES('$_POST[nombre]','$_POST[apellido]','$_POST[correo]','$_POST[contrasena]','$_POST[fecha_nac]')");
$consulta=pg_query($conexion,$query);


echo 'Datos del cliente insertados';
pg_close($conexion);


?>