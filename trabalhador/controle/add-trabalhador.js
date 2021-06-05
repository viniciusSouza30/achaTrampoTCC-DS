// click no botão para cadastrar trabalhador
$('.btnCadTrabalhador').click(function(e) {
    e.preventDefault();
    // pegando todos os dados do formulário
    var dados = $('#cadTrabalhador').serialize();
    // Definidno a url do ajax
    var url = 'trabalhador/modelo/add-trabalhador.php';
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        data: dados,
        success: function(dados) {
            if (dados.return == true) {
                // se der TRUE depois que o usuário clicar em feito irá para a página login/visao/login.html
                Swal.fire({
                    title: 'Trabalho',
                    text: 'Cadastro realizado com sucesso!',
                    type: 'success',
                    confirmButtonText: 'Feito!',
                    footer: '<img src="../../img/1-removebg-preview-removebg-preview.png" class="img-fluid" width="100px" alt="">',
                }).then((result) => {
                    if (result.value) {
                        $('#conteudo').empty();
                        $('#conteudo').load('login/visao/login.html');
                    }
                });
                // Se não der TRUE ele ira aparecer uma mensagem para ele tentar novamento 
            } else {
                Swal.fire({
                    title: 'Cadastro',
                    text: 'Não foi possível realizar seu cadastro devido algum erro',
                    type: 'error',
                    confirmButtonText: 'Tentar novamente',
                    footer: '<img src="../../img/1-removebg-preview-removebg-preview.png" class="img-fluid" width="100px" alt="">',
                });

            }
        },
        // Se der outro erro irá aparecer uma mensagem
        error: function(dados) {
            Swal.fire({
                title: 'Cadastro',
                text: 'Não foi possível realizar seu cadastro.',
                type: 'error',
                confirmButtonText: 'Tentar novamente',
                footer: '<img src="../../img/1-removebg-preview-removebg-preview.png" class="img-fluid" width="100px" alt="">',
            });
        }
    });
});