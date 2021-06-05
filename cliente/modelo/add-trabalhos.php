<?php
    include('../../conexao.php');
    session_start();
    date_default_timezone_set('America/Sao_Paulo');
    if(!isset($_SESSION['id']) || $_SESSION['id'] == ''){
        $data = ["ruturn" => "Usuário não logado"];
        echo json_encode($data);
        exit;
    }

    $titulo = $_POST['tituloAdd'];
    $prazo = $_POST['prazoAdd'];
    $atuacao = $_POST['atuacaoAdd'];
    $descricao = $_POST['descricaoAdd'];

    $titulo = utf8_decode($titulo);
    $atuacao = utf8_decode($atuacao);
    $descricao = utf8_decode($descricao);
    

    $select = "SELECT usuario.email, cliente.id FROM usuario JOIN cliente ON usuario.idCliente = cliente.id WHERE usuario.id = ".$_SESSION['id'];

    $resultado = mysqli_query($conecta, $select);
    $result = mysqli_fetch_array($resultado);

    if($titulo != "" && $atuacao != "" && $descricao != ""){

    $sql = "INSERT INTO trabalhospublicados (titulo, prazo, atuacao, descricao, idCliente, situacao, dataHoraPublicacao) VALUES ('".$titulo."', '".$prazo."', '".$atuacao."', '".$descricao."', '".$result['id']."', 'Pendente', NOW())";

    if(mysqli_query($conecta, $sql)){
        $data = array("return" => true);
    }else{
        $data = array("return" => mysqli_error($conecta));
    }
}else{
    $data = array("return" => 'Preencha os campos obrigatórios*');
}

    echo json_encode($data);
