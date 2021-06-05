// Click na classe meusTrabalhosPage para abrir a página de mostrar as páginas
$('.meusTrabalhosPage').click(function() {
    // passando a url do ajax
    var url = '../modelo/list-my-trabalhos.php';
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        success: function(dados) {
            // se der sucesso ele irá apagar a div #conteudoTrabalhador e irá mostrar todos os trabalhos em que ele foi responzabilizado
            $('#conteudoTrabalhador').empty();
            for (var i = 0; i < dados.length; i++) {
                let meusTrabalhos = `
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">Titulo: ${dados[i].titulo}</h5>
                            
                        </div>
                        <p class="mb-1">Atuação: ${dados[i].atuacao}</p>
                        <p class="mb-1">Cliente: ${dados[i].nome}</p>
                        <p class="mb-1">Endereço: ${dados[i].endereco}, ${dados[i].numeroEndereco} ${dados[i].complementoEndereco} - ${dados[i].bairroEndereco} - ${dados[i].cepEndereco} - ${dados[i].cidadeEndereco}/${dados[i].estadoEndereco}</p>
                        <p class="mb-1">Situação: ${dados[i].situacao}</p>
                        <small class="text-muted">Avaliação: ${dados[i].avaliacao}</small>
                    </a>
                </div>
                `;
                $('#conteudoTrabalhador').append(meusTrabalhos);
            }
        },
        // se ele não tiver trabalhos como responsável irá aparecer uma mensagem que não existe trabalhaos a serem mostrados.
        error: function(dados) {
            Swal.fire({
                title: 'Atenção',
                text: 'Você não tem trabalhos para ser vizualizados',
                type: 'info',
                footer: '<img src="../../img/1-removebg-preview-removebg-preview.png" class="img-fluid" width="100px" alt="">',
                confirmButtonText: 'OK'
            });
        }
    });
});