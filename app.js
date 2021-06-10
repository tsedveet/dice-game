// Toglogchiin eeljiig hadgalah huvisagch, negdugeeer toglogchiig 0, 2dugaar toglogchiig 1 gj temdegley.
var activePlayer = 1;

// Toglogchiin tsugluulsan onoog hadgalah huvisagch
var scores = [0, 0];

// Toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huvisagch 
var roundScore = 0;

// Shoonii ali talaaraa buusniig hadgalgh huvisagch heregtei, 1-6 gesen utgiig ene huvisagchid sanamsarguigeer uusgej ugnu.
var dice = Math.floor(Math.random() * 6) + 1;
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;

document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;

document.querySelector('.dice').style.display = 'none';
