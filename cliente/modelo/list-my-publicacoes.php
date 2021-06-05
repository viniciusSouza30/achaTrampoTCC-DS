<?php

include ('../../conexao.php');
session_start();
if(!isset($_SESSION['id']) || $_SESSION['id'] == ''){
    $data = ["ruturn" => "Usuário não logado"];
    echo json_encode($data);
    
}


$select = "SELECT usuario.email, cliente.id FROM usuario JOIN cliente ON usuario.idCliente = cliente.id WHERE usuario.id = ".$_SESSION['id'];

$resultado = mysqli_query($conecta, $select);
$result = mysqli_fetch_array($resultado);

$querys = mysqli_query($conecta, "SELECT trabalhospublicados.*, trabalhador.nomeCompleto FROM trabalhospublicados LEFT JOIN trabalhador ON trabalhospublicados.idTrabalhador = trabalhador.id WHERE trabalhospublicados.idCliente = '".$result['id']."' AND statu = 'A' ORDER BY trabalhospublicados.id DESC");

while($resultados = mysqli_fetch_assoc($querys)){
    $results[] = array_map('utf8_encode', $resultados);
}

echo json_encode($results);