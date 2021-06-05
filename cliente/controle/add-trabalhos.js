$('.btn-publicar').click(function(e) {
    e.preventDefault();

    var dados = $('#addTrabalho').serialize();
    // console.log(dados);
    var url = '../modelo/add-trabalhos.php';
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
                    text: 'Publicação adiciona com sucesso!',
                    type: 'success',
                    confirmButtonText: 'Feito!',
                    footer: '<img src="../../img/1-removebg-preview-removebg-preview.png" class="img-fluid" width="100px" alt="">',
                }).then((result) => {
                    if (result.value) {
                        location.reload();
                    }
                })


            } else {
                Swal.fire({
                    title: 'Cadastro',
                    text: 'Não foi possível adicionar sua publicação devido a um erro interno',
                    type: 'error',
                    confirmButtonText: 'Tentar novamente',
                    footer: '<img src="../../img/1-removebg-preview-removebg-preview.png" class="img-fluid" width="100px" alt="">',
                })

            }
        },
        error: function(dados) {
            Swal.fire({
                title: 'Trabalho',
                text: 'Não foi possivel adicionar sua publicação',
                type: 'error',
                confirmButtonText: 'Tentar novamente',
                footer: '<img src="../../img/1-removebg-preview-removebg-preview.png" class="img-fluid" width="100px" alt="">',
            })
        }
    })
})