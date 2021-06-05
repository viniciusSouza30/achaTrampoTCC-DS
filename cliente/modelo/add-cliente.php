<?php

include('../../conexao.php');

$nome = $_POST['nomeCliente'];
$dataNascimento = $_POST['dataNascimentoCliente'];
$endereco = $_POST['enderecoCliente'];
$numero =  $_POST['numeroEnderecoCliente'];
$bairro = $_POST['bairroCliente'];
$complemento = $_POST['complementoCliente'];
$cep = $_POST['cepCliente'];
$cidade = $_POST['cidadeCliente'];
$estado = $_POST['estadoCliente'];
$telefone = $_POST['telefoneCliente'];
$email = $_POST['emailCliente'];
$senha = $_POST['senhaCliente'];

$nome = utf8_decode($nome);
$endereco = utf8_decode($endereco);
$bairro = utf8_decode($bairro);
$complemento = utf8_decode($complemento);
$cidade = utf8_decode($cidade);
$estado = utf8_decode($estado);
$email = utf8_decode($email);
$senha = utf8_decode($senha);

$senhaMD5 = md5($senha);

if($nome != "" && $dataNascimento != "" && $endereco != "" && $numero != "" && $bairro != "" && $cep != "" && $cidade != "" && $estado != "" && $telefone != "" && $email != "" && $senha != ""){

$sql = "INSERT INTO cliente (nome, dataNascimento, endereco, numeroEndereco, bairroEndereco, complementoEndereco, cepEndereco, cidadeEndereco, estadoEndereco, whatsapp) VALUES ('".$nome."', '".$dataNascimento."', '".$endereco."', '".$numero."', '".$bairro."', '".$complemento."', '".$cep."', '".$cidade."', '".$estado."', '".$telefone."')";

// print_r($sql);
// exit;

$iddele = "SELECT LAST_INSERT_ID()";
echo ($iddele);
exit;


$sqlDois = "INSERT INTO usuario (email, senha, idCliente) VALUES ('".$email."', '".$senhaMD5."', $iddele)";

if(mysqli_query($conecta, $sql) & mysqli_query($conecta, $sqlDois)){
    $data = array("return" => true);
}else{
    $data = array("return" => mysqli_error($conecta));
}
}else{
    $data = array("return" => 'Preencha os campos obrigatórios*');
}

echo json_encode($data);

