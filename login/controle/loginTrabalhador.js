$(document).ready(function() {

    $(".btn-login").click(function(e) {

        e.preventDefault()
        var url = "login/modelo/loginTrabalhador.php";
        var dados = $('#login').serialize();

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: url,
            async: true,
            data: dados,
            success: function(dados) {
                if (dados.return == true) {
                    let url = "trabalhador/visao/index.html";
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
            }
        })

    })

})