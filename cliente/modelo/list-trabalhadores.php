<?php

include ('../../conexao.php');
session_start();
if(!isset($_SESSION['id']) || $_SESSION['id'] == ''){
    $data = ["ruturn" => "Usuário não logado"];
    echo json_encode($data);
    exit;
}

$query = mysqli_query($conecta, "SELECT * FROM trabalhador");
while($resultado = mysqli_fetch_assoc($query)){
    $result[] = array_map('utf8_encode', $resultado);
}

echo json_encode($result);