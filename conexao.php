<?php
    ini_set('display_errors', true);
    error_reporting(E_ALL);

    //Conexão on-line
    $hostname = "localhost:3307";
    $database = "achatrampo";
    $username = "root";
    $password = "root";

    if($conecta = mysqli_connect($hostname, $username, $password, $database)){
        // echo "Conectado...............<br>";
    }else{
        echo "Erro: ".mysqli_connect_error();
    }
?>