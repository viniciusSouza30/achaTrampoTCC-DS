// Ao clicar na classe perfilTrabalhadorPage irá carregar os dados com o perfil do usário
$('.perfilTrabalhadorPage').click(function() {
    var url = '../modelo/perfil.php'
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        success: function(dados) {
            $('#conteudoTrabalhador').empty();
            for (var i = 0; i < dados.length; i++) {
                let cont = `
                <div class="container-fluid row mt-2 text-right">
                    <div class="col-12">
                        <button type="" class="btn btn-dark justify-content-end btn-edit-perfil"><i class="mdi mdi-18px mdi-pencil"></i></button>
                        <button type="" class="btn btn-dark justify-content-end btn-save-perfi"><i class="mdi mdi-18px mdi-content-save"></i></button>
                    </div>
                </div>
                <div class="container">
                    <label for="">Nome completo:</label>
                    <input type="text" class="form-control disabled" disabled value="${dados[i].nomeCompleto}">
                    <label for="">Apelido:</label>
                    <input type="text" class="form-control disabled" disabled value="${dados[i].apelido}">
                    <label for="">Data de nascimento:</label>
                    <input type="text" class="form-control disabled" disabled value="${dados[i].dataNascimentos}">
                    <label for="">CPF:</label>
                    <input type="text" class="form-control disabled" disabled value="${dados[i].cpf}">
                    <label for="">Atuacao:</label>
                    <input type="text" class="form-control disabled" disabled value="${dados[i].atuacao}"> 
                    <label for="">Estado:</label>
                    <input type="text" class="form-control disabled" disabled value="${dados[i].estado}"> 
                    <label for="">Cidade:</label>
                    <input type="text" class="form-control disabled" disabled value="${dados[i].cidade}">
                    <label for="">WhatsApp:</label>
                    <input type="text" class="form-control disabled" disabled value="${dados[i].whatsapp}"> 
                    <label for="">Email:</label>
                    <input type="email" class="form-control disabled" disabled value="${dados[i].email}"> 
                </div>
                
                
            `;
                $('#conteudoTrabalhador').append(cont);
            }
        }
    });
});

// ao clicar no botão com a classe btn-edit-perfil irá carregar essa página
$(document).on('click', '.btn-edit-perfil', function() {
    // pegando as cidade e estados do json
    $.getJSON('../../cidade_estado.json ', function dd(data) {

        var items = [];
        var options = '<option value="">Escolha seu estado</option>';

        $.each(data, function(key, val) {
            options += '<option value="' + val.nome + '">' + val.nome + '</option>';
        });
        $("#estados").html(options);

        $("#estados").change(function() {

            var options_cidades = '';
            var str = "";

            $("#estados option:selected").each(function() {
                str += $(this).text();
            });

            $.each(data, function(key, val) {
                if (val.nome == str) {
                    $.each(val.cidades, function(key_city, val_city) {
                        options_cidades += '<option value="' + val_city + '">' + val_city + '</option>';
                    });
                }
            });

            $("#cidades").html(options_cidades);

        }).change();

    });
    var url = '../modelo/perfil.php';
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        success: function(dados) {
            $('#conteudoTrabalhador').empty();
            for (var i = 0; i < dados.length; i++) {
                let cont = `
                <div class="container-fluid row mt-2 text-right">
                    <div class="col-12">
                        <button type="" class="btn btn-dark justify-content-end btn-edit-perfil"><i class="mdi mdi-18px mdi-pencil"></i></button>
                        <button type="" class="btn btn-dark justify-content-end btn-save-perfi"><i class="mdi mdi-18px mdi-content-save"></i></button>
                    </div>
                </div>
                <div class="container">
                <form id="editPerfil">
                    
                
                    <label for="">Nome completo:</label>
                    <input type="text" class="form-control" name="nome" value="${dados[i].nomeCompleto}">
                    <label for="">Apelido:</label>
                    <input type="text" class="form-control" name="apelido" value="${dados[i].apelido}">
                    <label for="">Data de nascimento:</label>
                    <input type="date" class="form-control" name="dataNascimento" value="${dados[i].dataNascimento}">
                    <label for="">CPF:</label>
                    <input type="text" class="form-control" name="cpf" value="${dados[i].cpf}">
                    <label for="atuacaoTrabalhador">Atuação*</label>
                    <select name="atuacaoTrabalhador" id="atuacao" class="form-control" required>
                        <option selected value="${dados[i].atuacao}">${dados[i].atuacao}</option>
                        <option value="Encanador">Encanador</option>
                        <option value="Manicure">Manicure</option>
                        <option value="Babá">Babá</option>
                        <option value="Diarista">Diarista</option>
                        <option value="Eletricista">Eletricista</option>
                    </select>
                    <label for="estadoTrabalhador">Estado*</label>
                    <select name="estadoTrabalhador" id="estados" class="form-control" required>
                        
                    </select>
                    <label for="cidadeTrabalhador">Cidade*</label>
                    <select name="cidadeTrabalhador" id="cidades" class="form-control" required>
                        
                    </select>
                    <label for="">WhatsApp:</label>
                    <input type="text" name="whatsapp" class="form-control" value="${dados[i].whatsapp}"> 
                    <label for="">Email:</label>
                    <input type="email" name="email" class="form-control" value="${dados[i].email}"> 
                    <input type="hidden" name="id" class="form-control" value="${dados[i].id}"> 
                    </form>
                </div>
                
                
            `;
                $('#conteudoTrabalhador').append(cont);
            }
        }
    });
});

// qunado clicar no botão com a classe btn-save-perfil ele irá chamar essa função
$(document).on('click', '.btn-save-perfi', function() {
    var dados = $('#editPerfil').serialize();
    var url = '../modelo/update-perfil.php';
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        data: dados,
        success: function(dados) {
            // se for TRUE iráa aparecer uma mensagem e depois de clicar em feito irá recarregar a página
            if (dados.return == true) {
                Swal.fire({
                    title: 'Perfil',
                    text: 'Perfil editado com sucesso!',
                    type: 'success',
                    confirmButtonText: 'Feito!',
                    footer: '<img src="../../img/1-removebg-preview-removebg-preview.png" class="img-fluid" width="100px" alt="">'
                }).then((result) => {
                    if (result.value) {
                        location.reload();
                    }
                });
                // FALSE irá aparecer uma mensagem para ele tentar novamente 
            } else {
                Swal.fire({
                    title: 'Perfil',
                    text: 'Não foi possível atualizar seu perfil',
                    type: 'error',
                    confirmButtonText: 'Tentar novamente',
                    footer: '<img src="../../img/1-removebg-preview-removebg-preview.png" class="img-fluid" width="100px" alt="">'
                });

            }
        },
        // se der algum erro aparecerá outra mensagem
        error: function(dados) {
            Swal.fire({
                title: 'Perfil',
                text: 'Não foi possível atualizar seu perfil',
                type: 'error',
                confirmButtonText: 'Tentar novamente',
                footer: '<img src="../../img/1-removebg-preview-removebg-preview.png" class="img-fluid" width="100px" alt="">'
            });
        }
    });
});