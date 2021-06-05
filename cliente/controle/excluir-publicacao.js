// $(document).on('click', '.btn-excluir-publicacao', function(e) {
//     var url = '../modelo/excluir-publicacao.php';
//     var dados = JSON.parse($(this).attr('data-exclui'));
//     $.ajax({
//         dataType: 'JSON',
//         type: 'POST',
//         url: url,
//         assync: true,
//         data: dados,
//         success: function(dados) {
//             if (dados.return == true) {
//                 Swal.fire({
//                     title: 'Trabalho',
//                     text: 'Publicação editada com sucesso!',
//                     type: 'success',
//                     confirmButtonText: 'Feito!'
//                 })
//                 location.reload();
//             }
//         }
//     })
// })

$(document).on('click', '.btn-excluir-publicacao', function(e) {
    var url = '../modelo/excluir-publicacao.php';
    var dados = JSON.parse($(this).attr('data-exclui'));
    Swal.fire({
        type: 'question',
        title: 'Atenção ',
        text: 'Deseja realmente excluir esse registro?',
        showCancelButton: true,
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não'
    }).then((result) => {
        if (result.value) {

            $.ajax({
                type: 'POST',
                dataType: 'json',
                async: true,
                data: dados,
                url: url,
                success: function(dados) {
                    Swal.fire({
                        footer: '<img src="../../img/1-removebg-preview-removebg-preview.png" class="img-fluid" width="100px" alt="">',
                        text: 'Publicação excluida com sucesso',
                        type: 'success',
                        confirmButtonText: 'OK'
                    })

                    // $('#table-user').DataTable().ajax.reload()
                }
            })
        }
    })
})