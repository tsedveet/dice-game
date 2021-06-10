// Toglogchiin eeljiig hadgalah huvisagch, negdugeeer toglogchiig 0, 2dugaar toglogchiig 1 gj temdegley.
var activePlayer = 0;

// Toglogchiin tsugluulsan onoog hadgalah huvisagch
var scores = [0, 0];

// Toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huvisagch 
var roundScore = 0;

// Shoonii ali talaaraa buusniig hadgalgh huvisagch heregtei, 1-6 gesen utgiig ene huvisagchid sanamsarguigeer uusgej ugnu. 

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
var diceDom = document.querySelector('.dice'); 
diceDom.style.display = 'none';


// shoog shideh event listener
document.querySelector('.btn-roll').addEventListener('click', function(){
    
    // 1-6 dotorh sanamsargui neg too gargaj avna.
    var diceNumber = Math.floor(Math.random() * 6)+1;
    
    // shoonii zurgiig web deer gargaj irne
    diceDom.style.display = 'block';
    
    // buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj irne.
    diceDom.src = 'dice-' + diceNumber + '.png';
    
    // buusan too n 1-s yalgaatai bol idevhitei toglogchiiin eeljiin onoog nemegduulne.
    if(diceNumber !== 1){
        // 1-s yalgaatai too buulaa. Buusan toog toglogchid nemj ugnu
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }
    else{
        // 1 buusan tul toglogchiin eeljiig ene hesegt solij ugnu 
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = 0;
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        diceDom.style.display = 'none';
        // if(activePlayer === 0){
        //     activePlayer = 1;
        // }else{
        //     activePlayer = 0;
        // }
    }
});
