var btnRenew = $('#button-renew');

function check() {
    console.log('CHECKFUNCTION');
    
    if (btnA0.text() != '' && (btnA0.text() == btnA1.text() && btnA1.text() == btnA2.text())) {
        $('#result').text(`Player: ${btnA0.text()} WINS!!!!!`);
        $("#result").toggle();
    
    } else if (btnB0.text() != '' && (btnB0.text() == btnB1.text() && btnB1.text() == btnB2.text())) {
        $('#result').text(`Player ${btnB0.text()} WINS!!!!!`);
        $("#result").toggle();

    } else if (btnC0.text() != '' && (btnC0.text() == btnC1.text() && btnC1.text() == btnC2.text())) {
        $('#result').text(`Player ${btnC0.text()} WINS!!!!!`);
        $("#result").toggle();
    
    } else if (btnA0.text() != '' && (btnA0.text() == btnB0.text() && btnB0.text() == btnC0.text())) {
        $('#result').text(`Player ${btnA0.text()} WINS!!!!!`);
        $("#result").toggle();
        
    } else if (btnA1.text() != '' && (btnA1.text() == btnB1.text() && btnB1.text() == btnC1.text())) {
        $('#result').text(`Player ${btnA1.text()} WINS!!!!!`);
        $("#result").toggle();
    
    } else if (btnA2.text() != '' && (btnA2.text() == btnB2.text() && btnB2.text() == btnC2.text())) {
        $('#result').text(`Player ${btnA2.text()} WINS!!!!!`);
        $("#result").toggle();
    
    } else if (btnA0.text() != '' && (btnA0.text() == btnB1.text() && btnB1.text() == btnC2.text())) {
        $('#result').text(`Player ${btnA0.text()} WINS!!!!!`);
        $("#result").toggle();

    } else if (btnA2.text() != '' && (btnA2.text() == btnB1.text() && btnB1.text() == btnC0.text())) {
        $('#result').text(`Player ${btnA2.text()} WINS!!!!!`);
        $("#result").toggle();
    
    } else if (btnA0.text() != '' && btnA1.text() != '' && btnA2.text() != '' &&
    btnB0.text() != '' && btnB1.text() != '' && btnB2.text() != '' &&
    btnC0.text() != '' && btnC1.text() != '' && btnC2.text() != '') {
        $('#result').text('DRAW!');
        $("#result").toggle();

    } else {
        console.log('NOT YET!');
    }
}

btnRenew.on('click', function() {
    $("#result").attr("Display", false);
    $('#btn-A0').attr("disabled", false).text('');
    $('#btn-A1').attr("disabled", false).text('');
    $('#btn-A2').attr("disabled", false).text('');
    $('#btn-B0').attr("disabled", false).text('');
    $('#btn-B1').attr("disabled", false).text('');
    $('#btn-B2').attr("disabled", false).text('');
    $('#btn-C0').attr("disabled", false).text('');
    $('#btn-C1').attr("disabled", false).text('');
    $('#btn-C2').attr("disabled", false).text('');
    player = 1;
});
