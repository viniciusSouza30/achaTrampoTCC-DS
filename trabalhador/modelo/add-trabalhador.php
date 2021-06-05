<?php
    // incluindo a conexao
    include('../../conexao.php');
    
    // pegando os dados do formulário enviado via ajax
    $nome = $_POST['nomeTrabalhador'];
    $apelido = $_POST['apelidoTrabalhador'];
    $dataNascimento = $_POST['dataNasciementoTrabalhador'];
    $cpf = $_POST['cpfTrabalhador'];
    $atuacao = $_POST['atuacaoTrabalhador'];
    $cidade = $_POST['cidadeTrabalhador'];
    $estado = $_POST['estadoTrabalhador'];
    $telefone = $_POST['telefoneTrabalhador'];
    $email = $_POST['emailTrabalhador'];
    $senha = $_POST['senhaTrabalhador'];

    // defininodo alguns dados como utf8_decode
    $nome = utf8_decode($nome);
    $apelido = utf8_decode($apelido);
    $atuacao = utf8_decode($atuacao);
    $cidade = utf8_decode($cidade);
    $email = utf8_decode($email);
    $senha = utf8_decode($senha);
    $estado = utf8_decode($estado);

    // colocando criptografia na senha
    $senhaMD5 = md5($senha);
        
    // verificando se os campos obrigatórios estão preenchidos
    if($nome != "" && $dataNascimento != "" && $cpf != "" && $atuacao != "" && $cidade != "" && $estado != "" && $telefone != "" && $email != "" && $senha != ""){
        // inserindo dados do usário na tabela
        $sql = "INSERT INTO trabalhador (nomeCompleto, apelido, dataNascimento, cpf, atuacao, cidade, estado, whatsapp) VALUES ('".$nome."', '".$apelido."', '".$dataNascimento."', '".$cpf."', '".$atuacao."', '".$cidade."', '".$estado."', '".$telefone."')";

        // inserindo dados de login do usuário na tabela
        $sqlDois = "INSERT INTO usuario (email, senha, idTrabalhador) VALUES ('".$email."', '".$senhaMD5."', LAST_INSERT_ID())";
        // print_r($sqlDois);
        // exit;

        // verifica a query e banco para prosseguir com o cadastro
        if(mysqli_query($conecta, $sql) & mysqli_query($conecta, $sqlDois)){
            $data = array("return" => true);
        }else{
            $data = array("return" => mysqli_error($conecta));
        }
    // se der algum vazio irá retornar uma mensagem
    }else{
        $data = array("return" => "Preencha os campos obrigatórios*");
    }
    // mostrando
    echo json_encode($data);
    



