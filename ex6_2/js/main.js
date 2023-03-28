var butt = $('#btn-get-content');
var buttEdit = $("#btn-edit-content");


$(function() {
    console.log('IS ALIVE!!!!');
});


butt.on('click', function() {
    console.log('CLICKED!!!');
    var file = document.querySelector('input#input-file').files[0];
    var fr = new FileReader();
    fr.readAsText(file);

    fr.onload = function(e) {    
        e.preventDefault();
        var text = fr.result;
        console.log(text);
        document.querySelector("textarea#content-file").textContent = text
    }; 
});

buttEdit.on('click', function() {
    writeTxtFile();
});

function writeTxtFile() {
    var test = document.getElementById("test");
    var textToWrite = document.querySelector("textarea#content-file").value;
    console.log(textToWrite);
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
    url = URL.createObjectURL(textFileAsBlob);
    test.href = url;
    test.download = 'file.txt';
    $('#test').toggle();
}

