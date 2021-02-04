console.log('connected')

let number_of_light = Number(document.getElementById('number_of_light').value)
let time_delay =  Number(document.getElementById('time_delay').value)
let chosen_light_index = Number(document.getElementById('chosen_light').value)
let gameOn = false
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
    chosen_light_index = Number(document.getElementById('chosen_light').value)
    time_delay =  Number(document.getElementById('time_delay').value)
    let count= 0;
    while ( count <  number_of_light){
      let newEl = document.createElement('div')
      newEl.className = 'bulb';
      document.getElementById('bulbs').appendChild(newEl)
      count++
    }
    document.querySelectorAll('.bulb')[chosen_light_index].classList.add('chosen')
    arrangeBulbsInACircle(document.getElementsByClassName('bulb'));
}
createLight()


//let interval =  setInterval ( timer,250)

const lightOff = () =>{
     if(counter === chosen_light_index) document.getElementById('win').innerText = 'You have won!!'
    if(gameOn){
        clearInterval(interval)
        gameOn = false
    }
}

const lightOn = () =>{
    document.getElementById('win').innerText = ''
    if(!gameOn){
        createLight()
        document.querySelectorAll('.bulb')[0].classList.add('active')
        interval = setInterval( timer, time_delay)
        gameOn = true
    }
}


document.getElementById('stop').addEventListener('click',lightOff)
document.getElementById('play').addEventListener('click',lightOn)




function arrangeBulbsInACircle  (nodes)  {   
    const radius = '12em',
        start = -90,
        $els = [...nodes], // turn nodelist into a real array
        numberOfEls = $els.length,
        slice = 360 / numberOfEls,
        index = 0;

    $els.forEach((el, index) => {
        const rotate = slice * index + start;
        const rotateReverse = rotate * (-1);

        el.style.transform = `rotate(${rotate}deg) translate(${radius}) rotate(${rotateReverse}deg)`;
    })
}

// invoke the fn on the class bulb elements to create the effect
arrangeBulbsInACircle(document.getElementsByClassName('bulb'));