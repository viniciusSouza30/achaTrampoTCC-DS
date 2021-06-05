$('.minhasPublicacoesPage').click(function() {
    var url = '../modelo/list-my-publicacoes.php';
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        success: function(dados) {
            $('#conteudoCliente').empty();
            for (var i = 0; i < dados.length; i++) {
                let minhasPublicacoes = `
                <div class="list-group">
                    <div class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1 w-50">Título: ${dados[i].titulo}</h5>
                            <small class="text-muted">
                                <button class="btn btn-sm btn-danger btn-excluir-publicacao" data-exclui='${JSON.stringify(dados[i])}'><i class="mdi mdi-24px mdi-trash-can"></i></button>
                                <button class="btn btn-sm btn-danger btn-edit btn-editar-publicacao" data-publicacao='${JSON.stringify(dados[i])}'><i class="mdi mdi-24px mdi-pencil-outline"></i></button>
                            </small>
                        </div>
                        <p class="mb-1">Situação: ${dados[i].situacao}</p>
                        <p class="mb-1">${dados[i].nomeCompleto}</p>
                        <p class="mb-1">Atuação: ${dados[i].atuacao}</p>
                        <small class="text-muted">Avaliação: ${dados[i].avaliacao}</small>
                    </div>
                </div>

                
                `;


                $('#conteudoCliente').append(minhasPublicacoes);

            }
        },
        error: function(dados) {
            Swal.fire({
                type: 'info',
                text: 'Você não tem publicações para ser vizualizados',
                footer: '<img src="../../img/1-removebg-preview-removebg-preview.png" class="img-fluid" width="100px" alt="">',
                background: 'rgb(233, 233, 233)',
                confirmButtonText: 'OK',
                confirmButtonColor: 'rgb(32, 32, 32)'
            })
        }
    })
})