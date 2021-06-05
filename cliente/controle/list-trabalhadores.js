$(document).ready(function() {
    var url = '../modelo/list-trabalhadores.php';
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        success: function(dados) {

            $('#conteudoCliente').empty();
            for (var i = 0; i < dados.length; i++) {
                let trabalhadores = `
                <div class="list-group">
                    <a href="https://wa.me/55${dados[i].whatsapp}?text=Eu%20tenho%20interesse%20no%20seus%20serviços.%20Te%20achei%20no%20Acha%20Trampo" class="list-group-item list-group-item-action flex-column align-items-start" target="_blank">
                    <div class="d-flex w-100">
                    <img class="mdi mdi-48px mdi-account-circle ac-img-cricle d-flex align-self-start" src="" width="100px"  >
                        <small class="align-self-end"><button href="https://wa.me/55${dados[i].whatsapp}?text=Eu%20tenho%20interesse%20no%20seus%20serviços.%20Te%20achei%20no%20Acha%20Trampo" target="_blank" class="btn btn-sm btn-success"><i class="mdi mdi-18px mdi-whatsapp"></i></button></small>
                        <div class="d-flex flex-column w-100 ml-5">
                    
                            <h5 class="mb-1">Nome: ${dados[i].nomeCompleto}</h5>
                            <p class="mb-1">${dados[i].apelido}</p>
                            <div>Atuação: ${dados[i].atuacao}</div>
                            <div>Cidade: ${dados[i].cidade} / ${dados[i].estado}</div>
                        </div>
                    </div>
                    </a>
            </div>
                `;


                $('#conteudoCliente').append(trabalhadores);
            }
        }
    });
});

$('.trabalhadoresPage').click(function() {
    var url = '../modelo/list-trabalhadores.php';
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        success: function(dados) {
            $('#conteudoCliente').empty();
            for (var i = 0; i < dados.length; i++) {
                let trabalhadores = `
                <div class="list-group">
                    <a href="https://wa.me/55${dados[i].whatsapp}?text=Eu%20tenho%20interesse%20no%20seus%20serviços.%20Te%20achei%20no%20Acha%20Trampo" class="list-group-item list-group-item-action flex-column align-items-start" target="_blank">
                    <div class="d-flex w-100">
                    <img class="mdi mdi-48px mdi-account-circle ac-img-cricle d-flex align-self-start" src="" width="100px"  >
                        <small class="align-self-end"><button href="https://wa.me/55${dados[i].whatsapp}?text=Eu%20tenho%20interesse%20no%20seus%20serviços.%20Te%20achei%20no%20Acha%20Trampo" target="_blank" class="btn btn-sm btn-success"><i class="mdi mdi-18px mdi-whatsapp"></i></button></small>
                        <div class="d-flex flex-column w-100 ml-5">
                    
                            <h5 class="mb-1">Nome: ${dados[i].nomeCompleto}</h5>
                            <p class="mb-1">${dados[i].apelido}</p>
                            <div>Atuação: ${dados[i].atuacao}</div>
                            <div>Cidade: ${dados[i].cidade} / ${dados[i].estado}</div>
                        </div>
                    </div>
                    </a>
            </div>
                `;


                $('#conteudoCliente').append(trabalhadores);
            }
        }
    });

});