<?php

include ('../../conexao.php');
session_start();
if(!isset($_SESSION['id']) || $_SESSION['id'] == ''){
    $data = ["ruturn" => "Usuário não logado"];
    echo json_encode($data);
    exit;
}


$select = "SELECT usuario.email, trabalhador.id FROM usuario JOIN trabalhador ON usuario.idTrabalhador = trabalhador.id WHERE usuario.id = ".$_SESSION['id'];

$resultado = mysqli_query($conecta, $select);
$result = mysqli_fetch_array($resultado);

$querys = mysqli_query($conecta, "SELECT trabalhospublicados.*, cliente.nome, cliente.endereco, cliente.bairroEndereco, cliente.complementoEndereco, cliente.cepEndereco, cliente.cidadeEndereco, cliente.estadoEndereco, cliente.numeroEndereco FROM trabalhospublicados LEFT JOIN cliente ON trabalhospublicados.idCliente = cliente.id WHERE trabalhospublicados.idTrabalhador = '".$result['id']."' AND statu = 'A' ORDER BY trabalhospublicados.id DESC");
while($resultados = mysqli_fetch_assoc($querys)){
    $results[] = array_map('utf8_encode', $resultados);
}

echo json_encode($results);