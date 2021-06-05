<?php

include ('../../conexao.php');
session_start();
if(!isset($_SESSION['id']) || $_SESSION['id'] == ''){
    $data = ["ruturn" => "Usuário não logado"];
    echo json_encode($data);
    exit;
}
$id = $_POST['id'];


$query = "UPDATE trabalhospublicados SET statu = 'I' WHERE id = '$id'";


if(mysqli_query($conecta, $query)){
    $data = array("return" => true);
}else{
    $data = array("return" => mysqli_error($conecta));
}

echo json_encode($data);

