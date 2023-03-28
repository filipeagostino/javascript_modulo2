var butt = $('#btn-play');

$(function() {
    console.log('IS ALIVE!!!!');
});

butt.on('click', function() {
    $("#result").hide();
    var decNumbers = 3;
    $('#counter').text(decNumbers);
    var userWeapon = $('#select-weapons').val();
    console.log(`(User) Input: ${userWeapon}`);

    var counterID = setInterval(function() {
        console.log(decNumbers);
        decNumbers--;
        $('#counter').text(decNumbers);
        if (decNumbers < 1) {
            clearInterval(counterID);
            play(userWeapon);
        }
    }, 1000);
});

function play(userWeapon) {
    var weapons = ['Rock', 'Paper', 'Scissors'];
    var number = Math.floor(Math.random() * 3);
    var systemChoice = weapons[number];
    console.log(`(SYSTEM) Number: ${number} / Weapon: ${systemChoice}`);
    
    if (userWeapon == systemChoice) {
        $('#result').text(`${userWeapon} X ${systemChoice}: DRAW!!!`);
        $("#result").toggle();
        console.log('DRAW!');
        
    } else if (userWeapon == 'Rock' && systemChoice == 'Paper') {
        $('#result').text(`${userWeapon} X ${systemChoice}: YOU LOST!!!!!!`);
        $("#result").toggle();
    
    } else if (userWeapon == 'Rock' && systemChoice == 'Scissors') {
        $('#result').text(`${userWeapon} X ${systemChoice}: YOU WIN!!!!!!`);
        $("#result").toggle();
        console.log(`${userWeapon} X ${systemChoice}: You Win!!!!!!`);
    
    } else if (userWeapon == 'Paper' && systemChoice == 'Rock') {
        $('#result').text(`${userWeapon} X ${systemChoice}: YOU WIN!!!!!!`);
        $("#result").toggle();
    
    } else if (userWeapon == 'Paper' && systemChoice == 'Scissors') {
        $('#result').text(`${userWeapon} X ${systemChoice}: YOU LOST!!!!!!`);
        $("#result").toggle();
    
    } else if (userWeapon == 'Scissors' && systemChoice == 'Rock') {
        $('#result').text(`${userWeapon} X ${systemChoice}: YOU LOST!!!!!!`);
        $("#result").toggle();
    
    } else {
        $('#result').text(`${userWeapon} X ${systemChoice}: YOU WIN!!!!!!`);
        $("#result").toggle();
    }
}
