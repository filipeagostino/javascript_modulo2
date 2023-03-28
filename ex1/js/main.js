var butt = $('.butt-number');

$(function() {
    console.log('IS ALIVE!!!!');
});

butt.on('click', function() {
    var number = $('#input-number').val();
    console.log(number);

    $('#counter-numbers').text(number);
    var decNumbers = number;
    var counterID = setInterval(function() {
        console.log(decNumbers);
        decNumbers--;
        $('#counter-numbers').text(decNumbers);
        if (decNumbers < 1) {
            clearInterval(counterID);
        }
    }, 1000);
});
