let publicHolidays = ['Fri, 1 Jan 2021', 'Fri, 1 Jan 2021', 'Wed, 6 Jan 2021', 'Fri, 2 Apr 2021', 'Sun, 4 Apr 2021', 'Mon, 5 Apr 2021', 'Sat, 1 May 2021', 'Thu, 13 May 2021', 'Sun, 23 May 2021', 'Fri, 25 Jun 2021', 'Sat, 26 Jun 2021','Sat, 6 Nov 2021',' Mon, 6 Dec 2021', 'Fri, 24 Dec 2021', 'Sat, 25 Dec 2021', 'Sun, 26 Dec 2021']

let form =  document.getElementsByTagName('form')
let submit = document.getElementById('submit')
const countDown = document.getElementById("countDown")

const countPublicHolidays = (start,end) => {
    let startTime = start.getTime()
    let endTime = end.getTime()
   return publicHolidays.filter( publicHoliday => {
       let date = new Date (publicHoliday)
       return endTime > date.getTime() && startTime <=  date.getTime() && date.getDay()<6 && date.getDay() >0
    }).length
}
submit.addEventListener ('click', (event)=> {
    event.preventDefault()
    let eventName = document.getElementById('event_name').value
    let userStartDate = document.getElementById('start_date').value 
    let eventTime  = document.getElementById('end_date').value
    
    if(eventTime)counter()

    let end = new Date(eventTime)
    let start = (userStartDate)?  new Date(userStartDate) :  new Date(new Date().toDateString())

    let daysLeft = Math.floor((end - start)/1000/60/60/24)
    document.getElementById('eventInfo').innerText = `Event name : ${eventName}. Time left to start the event: ${daysLeft} ${daysLeft>1? 'days' : 'day'} left to start the event ${eventName}`
   
    let weekdays = 0
    let today = start.getDay()
     
    for(let i = 0; i<daysLeft; i++){
        if(today != 6 && today != 7 ) weekdays++
        today++
        if(today === 8) today = 1
   }
   
   document.getElementById('weekdaysLeft').innerText =  `${weekdays} Week ${weekdays>1 ? 'days': 'day'} left to start the event ${eventName} `

   let businessDays =  weekdays - countPublicHolidays(start,end)

   document.getElementById('BusinessdaysLeft').innerText =  `${businessDays} business ${businessDays>1 ? 'days': 'day'} left to start the event ${eventName} `
})


// Set the date we're counting down to
const counter = () =>{
      let eventDate = document.getElementById('end_date').value
      let eventTime = document.getElementById('end_time').value
      let countDownDate = new Date(eventDate+ ' ' + eventTime).getTime()
      let interval = setInterval(function() {
      let now = new Date().getTime();
      let difference = countDownDate - now;
        
      let days = Math.floor(difference / (1000 * 60 * 60 * 24));
      let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
      document.getElementById("days").innerText = days < 10 ? '0' + days : days;
      document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
      document.getElementById("minutes").innerText = minutes < 10? '0'+ minutes : minutes;
      document.getElementById("seconds").innerText = seconds < 10? '0'+ seconds : seconds;
      console.log(difference)
      if (difference < 1000) {
        clearInterval(interval)
        document.getElementById("message").innerText = "COUNTDOWN HAS EXPIRED!!";
      }
    }, 1000);
}
