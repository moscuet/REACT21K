let buttons = document.querySelectorAll(".ball");
let startEnd = document.getElementById('start_end')
let scorePanel = document.querySelector("#score");
let result = document.getElementById("result");
let finalScore = document.getElementById("final_score");
let close = document.getElementById("close");

let score = 0;
let active = 0;
let timer
let timerDelay = 1000
let gameOn = false
let counter = 0
let isBgMusicOn = false
let endMusicOn = false


startEnd.addEventListener( 'click', function(){
    (!gameOn)? startGame() : endGame()
})

buttons.forEach ( (button, i) => button.onclick = ()=> checkScore(i))

close.addEventListener("click", reloadGame);


const checkScore = index => {
    if(!gameOn) return
 counter = 0
 if(active === index)score++;
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
    isBgMusicOn = true
     myMusic = new sound("TO_THE_WIND.mp3")
     myMusic.play()
}

function playEndMusic (){
    isEndMusicOn = true
    endMusic = new sound("Battle9.mp3")
    endMusic.play()
}


function startGame() {
    if(counter === 3) return endGame()
    
    if(!isBgMusicOn) playBgMusic()

    buttons.forEach ( (button, i) => button.classList.add('ballOn')) 
    let newActive = changeActive(active);

    buttons[newActive].classList.toggle("active");
    buttons[active].classList.remove("active");

    active = newActive;

    timer = setTimeout(startGame, timerDelay );
    counter++
    timerDelay -= 50
    gameOn = true
    startEnd.textContent = 'End Game'
};

const endGame = () => {
    myMusic.currentTime = 0
    myMusic.stop()

    playEndMusic

    clearTimeout(timer);
    result.style.visibility = "visible";
    finalScore.textContent = `Your score is ${score}`;
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

//if(audio.isPaused) audio.play()
