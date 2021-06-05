<?php
include('../../conexao.php');
session_start();
if(!isset($_SESSION['id']) || $_SESSION['id'] == ''){
    $data = ["ruturn" => "Usuário não logado"];
    echo json_encode($data);
    exit;
}

$trab = $_POST['name'];






$qryLista = mysqli_query($conecta, "SELECT nomeCompleto, cidade, atuacao, id FROM trabalhador WHERE nomeCompleto LIKE '%".utf8_decode($trab)."%'");  


if($qryLista == false){
    
    $contato = 'erro';
}

while($resultado = mysqli_fetch_assoc($qryLista)){
    $contato[] = array_map('utf8_encode', $resultado); 
}    

echo json_encode($contato);

?>