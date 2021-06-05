<?php
include('../../conexao.php');
session_start();
if(!isset($_SESSION['id']) || $_SESSION['id'] == ''){
    $data = ["ruturn" => "Usuário não logado"];
    echo json_encode($data);
    exit;
}

$select = "SELECT usuario.email, trabalhador.id FROM usuario JOIN trabalhador ON usuario.idTrabalhador = trabalhador.id WHERE usuario.id =".$_SESSION['id'];

$resultadoSelect = mysqli_query($conecta, $select);
$result = mysqli_fetch_array($resultadoSelect);

$selectPerfil = mysqli_query($conecta, "SELECT trabalhador.*, usuario.email, usuario.senha, DATE_FORMAT (dataNascimento, '%d/%m/%Y') AS dataNascimentos FROM trabalhador JOIN usuario ON trabalhador.id = usuario.idTrabalhador WHERE trabalhador.id AND usuario.idTrabalhador =". $result['id']);
while($resultados = mysqli_fetch_assoc($selectPerfil)){
    $results[] = array_map('utf8_encode', $resultados);
}

echo json_encode($results);