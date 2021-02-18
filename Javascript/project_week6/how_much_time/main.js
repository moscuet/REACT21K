let eventDate = document.getElementById('event_date')
let form =  document.getElementsByTagName('form')
let submit = document.getElementById('submit')

submit.addEventListener ('click', (event)=> {
    event.preventDefault()
    let eventTime = document.getElementById('event_date').value 
                  +' ' + document.getElementById('event_time').value
    let eventName = document.getElementById('event_name').value
    let now = new Date()
    let today = now.getDay()
    let end = new Date(eventTime)
    console.log(now,end)
    let daysLeft = Math.floor((end - now)/1000/60/60/24)
    document.getElementById('output').innerText = `EVent: ${eventName}. Time left for the event: ${daysLeft} day`
    let weekdays = 0
    for(let i = 0; i<daysLeft; i++){
        console.log('today',today, 'weekdays',weekdays)
        console.log(today != 6)
        if(today != 6 && today != 7 ) weekdays++
        today++
        if(today === 8) today = 1
   }
    console.log(daysLeft, weekdays)
})
