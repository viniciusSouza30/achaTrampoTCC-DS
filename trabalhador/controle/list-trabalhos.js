// Carregando a página logo após fazer o login
$(document).ready(function() {
    // passando a url do ajax
    var url = '../modelo/list-trabalhos.php';
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        success: function(dados) {
            // se der sucesso irá limpar a div #conteudoTrabalhador e irá listar todos os trabalhos que estão na situação pendente
            $('#conteudoTrabalhador').empty();
            for (var i = 0; i < dados.length; i++) {
                let trabalhos = `
                <div class="list-group">
                    <a href="https://wa.me/55${dados[i].whatsapp}?text=Eu%20quero%20mais%20informações%20sobre%20seu%20trabalho%20publicado%20no%20Acha%20Trampo" class="list-group-item list-group-item-action flex-column align-items-start" target="_blank">
                    <div class="d-flex w-100">
                        <img class="mdi mdi-48px mdi-account-circle ac-img-cricle d-flex align-self-start" src="" width="100px">
                        <div class="d-flex flex-column w-100 ml-5">
                        
                            <small class="align-self-end">Data ou prazo: ${dados[i].prazo}</small>
                            <h5 class="mb-1">Título: ${dados[i].titulo}</h5>
                            <p class="mb-1">Descrição: ${dados[i].descricao}</p>
                            <div>Situação: ${dados[i].situacao}</div>
                            <div>Cliente: ${dados[i].nome}</div>
                    
                            <p>Cidade: ${dados[i].cidadeEndereco} / ${dados[i].estadoEndereco}</p>
                            <small>Atuação: ${dados[i].atuacao}</small>
                            <small class="align-self-end">Publicado em: ${dados[i].dataHoraPublicacao}</small>
                        </div>
                    </div>
                    </a>
                </div>
                `;
                $('#conteudoTrabalhador').append(trabalhos);
            }

        },
        // caso não exista trabalhos pendentes irá a pagar a mesma div e aparecer aos usários uma mensagem avisando que não tem
        error: function(dados) {

            $('#conteudoTrabalhador').empty();
            let trabalhos = `
                
                <div class="text-center">
                    Não existe trabalhos pendentes. Aguarde!
                </div>
                
                `;
            $('#conteudoTrabalhador').append(trabalhos);

        }
    });
});

// Aqui acontecerá a mesma coisa que função de cima, a diferença é que ela é acionada com click na classe trabalhosPage
$('.trabalhosPage').click(function() {
    var url = '../modelo/list-trabalhos.php';
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        success: function(dados) {
            $('#conteudoTrabalhador').empty();
            for (var i = 0; i < dados.length; i++) {
                let trabalhos = `
                <div class="list-group">
                    <a href="https://wa.me/55${dados[i].whatsapp}?text=Eu%20quero%20mais%20informações%20sobre%20seu%20trabalho%20publicado%20no%20Acha%20Trampo" class="list-group-item list-group-item-action flex-column align-items-start" target="_blank">
                    <div class="d-flex w-100">
                        <img class="mdi mdi-48px mdi-account-circle ac-img-cricle d-flex align-self-start" src="" width="100px"  >
                        <div class="d-flex flex-column w-100 ml-5">
                        
                            <small class="align-self-end">Data ou prazo: ${dados[i].prazo}</small>
                            <h5 class="mb-1">Título: ${dados[i].titulo}</h5>
                            <p class="mb-1">Descrição: ${dados[i].descricao}</p>
                            <div>Situação: ${dados[i].situacao}</div>
                            <div>Nome: ${dados[i].nome}</div>
                    
                            <p>Cidade: ${dados[i].cidadeEndereco} / ${dados[i].estadoEndereco}</p>
                            <small>Atuação: ${dados[i].atuacao}</small>
                            <small class="align-self-end">Publicado em: ${dados[i].dataHoraPublicacao}</small>
                        </div>
                    </div>
                
                    
                    
                    </a>
                </div>
                
               
                `;
                $('#conteudoTrabalhador').append(trabalhos);
            }
        },
        error: function(dados) {
            $('#conteudoTrabalhador').empty();

            let trabalhos = `
                <div class="text-center">
                    Não existe trabalhos pendentes. Aguarde!
                </div>
                `;
            $('#conteudoTrabalhador').append(trabalhos);

        }
    });
});