$(document).ready(function() {

    $(".btn-login").click(function(e) {

        e.preventDefault()
        var url = "login/modelo/loginCliente.php";
        var dados = $('#login').serialize();

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: url,
            async: true,
            data: dados,
            success: function(dados) {
                if (dados.return == true) {
                    let url = "cliente/visao/indexCliente.html";
                    $(location).attr('href', url);
                } else {
                    Swal.fire({
                        title: 'Acha Trampo',
                        text: dados.return,
                        type: 'error',
                        confirmButtonText: 'Tentar novamente...'
                    })
                    $('#login input').val("");
                }
            },
            error: function(dados) {
                Swal.fire({
                    title: 'Acha Trampo',
                    text: 'Não foi possível validar seu login',
                    type: 'error',
                    confirmButtonText: 'Tentar novamente'
                })
            }
        })

    })

})