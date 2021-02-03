console.log('connected')

let number_of_light = 20
let gameOn = true
let counter
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
let timer = ()=>{    
    document.querySelectorAll('.bulb')[counter].classList.remove('active')
    counter++
   if(counter === number_of_light) counter =0
   document.querySelectorAll('.bulb')[counter].classList.add('active')
}

let createLight = () =>{
    counter = 0;
    removeAllChildNodes(document.getElementById('bulbs'));
    number_of_light = Number(document.getElementById('number_of_light').value)||10
     
    let count= 0;
    while ( count <  number_of_light){
      let newEl = document.createElement('div')
      newEl.className = 'bulb';
      document.getElementById('bulbs').appendChild(newEl)
      count++
    }
    document.querySelectorAll('.bulb')[0].classList.add('active')
}
createLight()

let interval =  setInterval ( timer,250)

const lightOff = () =>{
     if(counter === 0) document.getElementById('win').innerText = 'You have won!!'
    console.log(document.getElementById('win'))
    if(gameOn){
        clearInterval(interval)
        gameOn = false
    }

}

const lightOn = () =>{
    if(!gameOn){
        createLight()
        interval = setInterval( timer,250)
        gameOn = true
    }
}




document.getElementById('stop').addEventListener('click',lightOff)
document.getElementById('play').addEventListener('click',lightOn)




