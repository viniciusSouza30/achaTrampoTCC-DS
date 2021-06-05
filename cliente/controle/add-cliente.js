$('.btnCadCliente').click(function(e) {
    e.preventDefault();
    var dados = $('#cadCliente').serialize();
    // console.log(dados);
    var url = 'cliente/modelo/add-cliente.php';
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        data: dados,
        success: function(dados) {
            if (dados.return == true) {
                Swal.fire({
                    title: 'Trabalho',
                    text: 'Cadastro realizado com sucesso!',
                    type: 'success',
                    confirmButtonText: 'Feito!',
                    footer: '<img src="../../img/1-removebg-preview-removebg-preview.png" class="img-fluid" width="100px" alt="">',
                }).then((result) => {
                    if (result.value) {
                        $('#conteudo').empty();
                        $('#conteudo').load('login/visao/login.html')
                    }
                })

            } else {
                Swal.fire({
                    title: 'Cadastro',
                    text: 'Não foi realizar seu cadastro!',
                    type: 'error',
                    confirmButtonText: 'Tentar novamente',
                    footer: '<img src="../../img/1-removebg-preview-removebg-preview.png" class="img-fluid" width="100px" alt="">',
                })

            }
        },
        error: function(dados) {
            Swal.fire({
                title: 'Cadastro',
                text: 'Não foi foi possível realizar seu cadastro!',
                type: 'error',
                confirmButtonText: 'Tentar novamente',
                footer: '<img src="../../img/1-removebg-preview-removebg-preview.png" class="img-fluid" width="100px" alt="">',
            })
        }
    })
})