// Toglogchiin eeljiig hadgalah huvisagch, negdugeeer toglogchiig 0, 2dugaar toglogchiig 1 gj temdegley.
var activePlayer = 1;

// Toglogchiin tsugluulsan onoog hadgalah huvisagch
var scores = [0, 0];

// Toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huvisagch 
var roundScore = 0;

// Shoonii ali talaaraa buusniig hadgalgh huvisagch heregtei, 1-6 gesen utgiig ene huvisagchid sanamsarguigeer uusgej ugnu.
var diceNumber = Math.floor(Math.random() * 6) + 1;

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
var diceDom = document.querySelector('.dice');
diceDom.style.display = 'none';



document.querySelector('.btn-roll').addEventListener('click', function(){
    var diceNumber = Math.floor(Math.random() * 6)+1;

    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + diceNumber + '.png';
});
