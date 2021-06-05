<?php
    include('../../conexao.php');
    
    $loginUsuario = $_POST['emailLogin'];
    $senhaUsuario = $_POST['senhaLogin'];

    $senhaUsuario = utf8_decode($senhaUsuario);
    $loginUsuario = utf8_decode($loginUsuario);

    $senhaMD5 = md5($senhaUsuario);
    
    
    
    $sql = "SELECT *, count(id) as registro FROM usuario WHERE email = '".$loginUsuario."' AND senha = '".$senhaMD5."' AND idTrabalhador != 0 ";

    if($loginUsuario != "" && $senhaUsuario != ""){
    
    if(mysqli_query($conecta, $sql)){
    
        $pesquisa = mysqli_query($conecta, $sql);
    
        while($result = mysqli_fetch_array($pesquisa)){
            if($result['registro'] == 1){
                session_start();
                $_SESSION['id'] = $result['id'];
                $data = array("return" => true);
            }
            else{
                $data = array("return" => "Usuário e/ou senha não validado!");
            }
        }
    }
}else{
    $data = array("return" => "Preencha os campos");
}
    echo json_encode($data);
?>