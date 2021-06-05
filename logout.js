$('.sairPeril').click(function() {
    var url = '../../logout.php';
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        success: function(dados) {
            window.location.href = '../../index.html';
        }
    })
})