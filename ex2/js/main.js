var button = $('#btn-change-color');

$(function() {
    console.log('IS ALIVE!!!!');
});


button.on('click', function() {
    var color = $('#input-color').val();
    document.body.style.backgroundColor = color;
    console.log(color);
});
