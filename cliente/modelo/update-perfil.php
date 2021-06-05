<?php

include('../../conexao.php');
session_start();
if(!isset($_SESSION['id']) || $_SESSION['id'] == ''){
    $data = ["ruturn" => "Usuário não logado"];
    echo json_encode($data);
    exit;
}

    $id = $_POST['id'];
    $nome = $_POST['nome'];
    $dataNascimento = $_POST['dataNascimento'];
    $endereco = $_POST['endereco'];
    $numero = $_POST['numero'];
    $bairro = $_POST['bairro'];
    $complemento = $_POST['complemento'];
    $cep = $_POST['cep'];
    $estado = $_POST['estado'];
    $cidade = $_POST['cidade'];
    $whatsapp = $_POST['whatsapp'];
    $email = $_POST['email'];

    $nome = utf8_decode($nome);
    $endereco = utf8_decode($endereco);
    $bairro = utf8_decode($bairro);
    $complemento = utf8_decode($complemento);
    $cidade = utf8_decode($cidade);
    $estado = utf8_decode($estado);
    $email = utf8_decode($email);


    


    $sql = "UPDATE cliente, usuario SET cliente.nome = '".$nome."', cliente.dataNascimento = '".$dataNascimento."', cliente.endereco = '".$endereco."', cliente.numeroEndereco = '".$numero."', cliente.bairroEndereco = '".$bairro."', cliente.complementoEndereco = '".$complemento."', cliente.cepEndereco = '".$cep."', cliente.cidadeEndereco = '".$cidade."', cliente.estadoEndereco = '".$estado."', cliente.whatsapp = '".$whatsapp."', usuario.email = '".$email."' WHERE cliente.id = $id AND usuario.idCliente = $id";

    if($nome != "" && $dataNascimento != "" && $endereco != "" && $numero != "" && $bairro != "" && $cep != "" && $cidade != "" && $estado != "" && $whatsapp != "" && $email != ""){

        if(mysqli_query($conecta, $sql)){
            $data = array("return" => true);
        }else{
            $data = array("return" => mysqli_error($conecta));
        }
    }else{
        $data = array("return" => "Preencha os campos obrigatórios*");
    }

    echo json_encode($data);