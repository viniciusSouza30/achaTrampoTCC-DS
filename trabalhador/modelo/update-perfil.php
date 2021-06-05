<?php

include('../../conexao.php');
session_start();
if(!isset($_SESSION['id']) || $_SESSION['id'] == ''){
    $data = ["ruturn" => "Usuário não logado"];
    echo json_encode($data);
    exit;
}

    $nome = $_POST['nome'];
    $apelido = $_POST['apelido'];
    $atuacao = $_POST['atuacaoTrabalhador'];
    $dataNascimento = $_POST['dataNascimento'];
    $cpf = $_POST['cpf'];
    $id = $_POST['id'];
    $estado = $_POST['estadoTrabalhador'];
    $cidade = $_POST['cidadeTrabalhador'];
    $whatsapp = $_POST['whatsapp'];
    $email = $_POST['email'];
    

    $nome = utf8_decode($nome);
    $apelido = utf8_decode($apelido);
    $atuacao = utf8_decode($atuacao);
    $estado = utf8_decode($estado);
    $cidade = utf8_decode($cidade);
    $email = utf8_decode($email);
    

    


    $sql = "UPDATE trabalhador, usuario SET trabalhador.nomeCompleto = '".$nome."', trabalhador.atuacao = '".$atuacao."', trabalhador.apelido = '".$apelido."', trabalhador.dataNascimento = '".$dataNascimento."', trabalhador.cpf = '".$cpf."', trabalhador.cidade = '".$cidade."', trabalhador.estado = '".$estado."', trabalhador.whatsapp = '".$whatsapp."', usuario.email = '".$email."' WHERE trabalhador.id = $id AND usuario.idTrabalhador = $id";

    if($nome != "" && $atuacao != "" && $dataNascimento != "" && $cpf != "" && $estado != "" && $cidade != "" && $whatsapp != "" && $email != ""){

        if(mysqli_query($conecta, $sql)){
            $data = array("return" => true);
        }else{
            $data = array("return" => mysqli_error($conecta));
        }
    }else{
        $data = array("return" => "Preencha os campos obrigatórios*");
    }

    echo json_encode($data);