let buttons = document.querySelectorAll(".ball");
let startEnd = document.getElementById('start_end')
let scorePanel = document.querySelector("#score");
let result = document.getElementById("result");
let finalScore = document.getElementById("final_score");
let close = document.getElementById("close");
let playerName =''
let players = []

let score = 0;
let active = Math.floor(Math.random() *4);
let prevousActive = null 
let timer
let delayRate
let timerDelay 
let gameOn = false
let counter = 0
let isBgMusicOn = false
let endMusicOn = false

window.onload = function() {
   players = JSON.parse(localStorage.getItem("players")) || []
   players.sort( (a,b) => b.score- a.score )
   let playerLists = players.slice(0,9).map( player => `<li>${player.playerName}, score: ${player.score}`).join('')
   document.querySelector('#top_players ul').innerHTML = playerLists
}

function updateResult(){
    if(playerName)players.push({playerName,score})
    localStorage.setItem('players', JSON.stringify(players))
}

function setDelayRate (){
   let level = document.querySelector('input[name="level"]:checked').value
   console.log('level',level)
   switch(level){
       case 'easy': delayRate = 40; timerDelay = 1200
       break;
       case 'normal': delayRate = 50; timerDelay = 1000
       break;
       case 'hard'  : delayRate = 60 ; timerDelay = 80
       break;
       default:
   }
}


startEnd.addEventListener( 'click', function(){
    (!gameOn)? startGame() : endGame()
})

buttons.forEach ( (button, i) => button.onclick = ()=> checkScore(i))

close.addEventListener("click", reloadGame);


const checkScore = index => {
    if(!gameOn) return
    if(prevousActive == active) return
    counter = 0
    if(active === index){
        score++;
    }
   else {
       endGame()
   }
   prevousActive = active
  scorePanel.textContent = `Your score is ${score}`;
};

function changeActive(active) {
    let newActive = Math.floor(Math.random() *4)
    return newActive != active ? newActive :changeActive(active) 
}

function  reloadGame  () {
    window.location.reload();
  };
  
function playBgMusic (){
     myMusic = new sound("TO_THE_WIND.mp3")
     myMusic.play()
     isBgMusicOn = true
}

function playEndMusic (){
    endMusic = new sound("Battle9.mp3")
    endMusic.play()
    setTimeout( function(){
        endMusic.currentTime = 0
        endMusic.stop()
    },1000)
}



function startGame() {
    if(counter === 3) return endGame()
    
    if(!gameOn){
        playBgMusic()
        playerName = document.getElementById('playerName').value 
        document.getElementById('player').innerText = `Player name: ${playerName}`
        document.getElementById('playerName').value = ''
        setDelayRate()
    }

    buttons.forEach ( (button, i) => button.classList.add('ballOn')) 
    
    let newActive = changeActive(active);
    buttons[newActive].classList.toggle("active");
    buttons[active].classList.remove("active");
    active = newActive;
    counter++
    timerDelay -= delayRate
    gameOn = true
    startEnd.textContent = 'End Game'
    timer = setTimeout(startGame, timerDelay );
};

const endGame = () => {
    myMusic.currentTime = 0
    myMusic.stop()
    playEndMusic()
    updateResult()
    clearTimeout(timer);
    result.style.visibility = "visible";

    finalScore.textContent = `Your score is ${score}. You are in ${score<6?'beginner':score<11?'moderate':'advance'} level `;
};



function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}
