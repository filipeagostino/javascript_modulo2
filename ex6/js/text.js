function text(){
    $.get("http://127.0.0.1:3000/test.txt", function(data) {
        console.log(data);
        $('#test-text').text(data);
    });
}
