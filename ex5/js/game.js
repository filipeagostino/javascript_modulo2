var btnA0 = $('#btn-A0');
var btnA1 = $('#btn-A1');
var btnA2 = $('#btn-A2');
var btnB0 = $('#btn-B0');
var btnB1 = $('#btn-B1');
var btnB2 = $('#btn-B2');
var btnC0 = $('#btn-C0');
var btnC1 = $('#btn-C1');
var btnC2 = $('#btn-C2');
var player = 1;

$(function() {
    console.log('IS ALIVE!!!!');
});

btnA0.on('click', function() {
    $(this).text(playerTime());
    $(this).attr("disabled", true);
    console.log('CLICKED!!!');
    check();
});

btnA1.on('click', function() {
    $(this).text(playerTime());
    $(this).attr("disabled", true);
    console.log('CLICKED!!!');
    check();
});

btnA2.on('click', function() {
    $(this).text(playerTime());
    $(this).attr("disabled", true);
    console.log('CLICKED!!!');
    check();
});

btnB0.on('click', function() {
    $(this).text(playerTime());
    $(this).attr("disabled", true);
    console.log('CLICKED!!!');
    check();
});

btnB1.on('click', function() {
    $(this).text(playerTime());
    $(this).attr("disabled", true);
    console.log('CLICKED!!!');
    check();
});

btnB2.on('click', function() {
    $(this).text(playerTime());
    $(this).attr("disabled", true);
    console.log('CLICKED!!!');
    check();
});

btnC0.on('click', function() {
    $(this).text(playerTime());
    $(this).attr("disabled", true);
    console.log('CLICKED!!!');
    check();
});

btnC1.on('click', function() {
    $(this).text(playerTime());
    $(this).attr("disabled", true);
    console.log('CLICKED!!!');
    check();
});

btnC2.on('click', function() {
    $(this).text(playerTime());
    $(this).attr("disabled", true);
    console.log('CLICKED!!!');
    check();
});


function playerTime() {
    var op = '';
    if (player == 1) {
        player = 2;
        op = 'X';
    } else {
        player = 1;
        op = 'O';
    }   
    return op
}
