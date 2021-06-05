$('.perfilClientePage').click(function() {
    var url = '../modelo/perfil.php'
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        success: function(dados) {
            $('#conteudoCliente').empty();
            for (var i = 0; i < dados.length; i++) {
                let perfilCliente = `
                <div class="container-fluid row mt-2 text-right">
                    <div class="col-12">
                        <button type="" class="btn btn-dark justify-content-end btn-edit-perfil"><i class="mdi mdi-18px mdi-pencil"></i></button>
                        <button type="" class="btn btn-dark justify-content-end btn-save-perfi"><i class="mdi mdi-18px mdi-content-save"></i></button>
                    </div>
                </div>
                <div class="container">
                    <label for="">Nome completo:</label>
                    <input type="text" class="form-control disabled" disabled value="${dados[i].nome}">
                    <label for="">Data de Nascimento:</label>
                    <input type="text" class="form-control disabled" disabled value="${dados[i].dataNascimentos}">
                    <label for="">Endereço:</label>
                    <input type="text" class="form-control disabled" disabled value="${dados[i].endereco}">
                    <label for="">Número:</label>
                    <input type="text" class="form-control disabled" disabled value="${dados[i].numeroEndereco}">
                    <label for="">Bairro:</label>
                    <input type="text" class="form-control disabled" disabled value="${dados[i].bairroEndereco}"> 
                    <label for="">Complemento:</label>
                    <input type="text" class="form-control disabled" disabled value="${dados[i].complementoEndereco}"> 
                    <label for="">CEP:</label>
                    <input type="text" class="form-control disabled" disabled value="${dados[i].cepEndereco}"> 
                    <label for="">Estado:</label>
                    <input type="text" class="form-control disabled" disabled value="${dados[i].estadoEndereco}"> 
                    <label for="">Cidade:</label>
                    <input type="text" class="form-control disabled" disabled value="${dados[i].cidadeEndereco}">
                    <label for="">WhatsApp:</label>
                    <input type="text" class="form-control disabled" disabled value="${dados[i].whatsapp}"> 
                    <label for="">Email:</label>
                    <input type="email" class="form-control disabled" disabled value="${dados[i].email}"> 
                     
                </div>
                
                
            `;
                $('#conteudoCliente').append(perfilCliente);
            }

        }
    })

})
$(document).on('click', '.btn-edit-perfil', function() {
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
            $('#conteudoCliente').empty();
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
                    <input type="text" class="form-control" name="nome" value="${dados[i].nome}">
                    <label for="">Data de nascimento:</label>
                    <input type="date" class="form-control" name="dataNascimento" value="${dados[i].dataNascimento}">
                    <label for="">Endereço:</label>
                    <input type="text" class="form-control" name="endereco" value="${dados[i].endereco}">
                    <label for="">Número:</label>
                    <input type="text" class="form-control" name="numero" value="${dados[i].numeroEndereco}">
                    <label for="">Bairro:</label>
                    <input type="text" class="form-control" name="bairro" value="${dados[i].bairroEndereco}">
                    <label for="">Complemento:</label>
                    <input type="text" class="form-control" name="complemento" value="${dados[i].complementoEndereco}">
                    <label for="">CEP:</label>
                    <input type="text" class="form-control" name="cep" value="${dados[i].cepEndereco}">
                    <label for="estados">Estado*</label>
                    <select name="estado" id="estados" class="form-control" required>
                        <option value=""></option>
                    </select>
                    <label for="cidades">Cidade*</label>
                    <select name="cidade" id="cidades" class="form-control" required>
                        
                    </select>
                    <label for="">WhatsApp:</label>
                    <input type="text" name="whatsapp" class="form-control" value="${dados[i].whatsapp}"> 
                    <label for="">Email:</label>
                    <input type="email" name="email" class="form-control" value="${dados[i].email}"> 
                    
                    <input type="hidden" name="id" class="form-control" value="${dados[i].id}"> 
                    </form>
                </div>
                
                
            `;
                $('#conteudoCliente').append(cont);
            }

        }
    })

})

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
            if (dados.return == true) {
                Swal.fire({
                    title: 'Trabalho',
                    text: 'Perfil editado com sucesso!',
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
                    title: 'Edição',
                    text: 'Não foi possível atualizar seu perfil devido a um erro interno',
                    type: 'error',
                    confirmButtonText: 'Tentar novamente',
                    footer: '<img src="../../img/1-removebg-preview-removebg-preview.png" class="img-fluid" width="100px" alt="">',
                })

            }
        },
        error: function(dados) {
            Swal.fire({
                title: 'Edição',
                text: 'Não foi possível atualizar seu perfil',
                type: 'error',
                confirmButtonText: 'Tentar novamente',
                footer: '<img src="../../img/1-removebg-preview-removebg-preview.png" class="img-fluid" width="100px" alt="">',
            })
        }

    })
})