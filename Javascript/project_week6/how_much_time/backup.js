let eventDate = document.getElementById('event_date')
let form =  document.getElementsByTagName('form')
let submit = document.getElementById('submit')
let publicHolidays = ['Fri, 1 Jan 2021', 'Fri, 1 Jan 2021', 'Wed, 6 Jan 2021', 'Fri, 2 Apr 2021', 'Sun, 4 Apr 2021', 'Mon, 5 Apr 2021', 'Sat, 1 May 2021', 'Thu, 13 May 2021', 'Sun, 23 May 2021', 'Fri, 25 Jun 2021', 'Sat, 26 Jun 2021','Sat, 6 Nov 2021',' Mon, 6 Dec 2021', 'Fri, 24 Dec 2021', 'Sat, 25 Dec 2021', 'Sun, 26 Dec 2021']



let now = new Date(new Date().toDateString())


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





let eventDate = document.getElementById('event_date')
let form =  document.getElementsByTagName('form')
let submit = document.getElementById('submit')
let publicHolidays = ['Fri, 1 Jan 2021', 'Fri, 1 Jan 2021', 'Wed, 6 Jan 2021', 'Fri, 2 Apr 2021', 'Sun, 4 Apr 2021', 'Mon, 5 Apr 2021', 'Sat, 1 May 2021', 'Thu, 13 May 2021', 'Sun, 23 May 2021', 'Fri, 25 Jun 2021', 'Sat, 26 Jun 2021','Sat, 6 Nov 2021',' Mon, 6 Dec 2021', 'Fri, 24 Dec 2021', 'Sat, 25 Dec 2021', 'Sun, 26 Dec 2021']

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
    let eventTime = document.getElementById('event_date').value 
    let eventName = document.getElementById('event_name').value
    let end = new Date(eventTime)
    let userStartDate = document.getElementById('userStartDate').value
    let start = (userStartDate)?  new Date(userStartDate) :  new Date()

    let daysLeft = Math.floor((end - start)/1000/60/60/24)
   
    document.getElementById('output').innerText = `Event name : ${eventName}. Time left to start the event: ${daysLeft} ${daysLeft>1? 'days' : 'day'} left to start the event ${eventName}`
   
    let weekdays = 0
    let today = start.getDay()

    for(let i = 0; i<daysLeft; i++){
        if(today != 6 && today != 7 ) weekdays++
        today++
        if(today === 8) today = 1
   }
  
   document.getElementById('weekdays').innerText =  `${weekdays} Week ${weekdays>1 ? 'days': 'day'} left to start the event ${eventName} `

   let businessDays =  weekdays - countPublicHolidays(start,end)
   
   document.getElementById('businessdays').innerText =  `${businessDays} business ${businessDays>1 ? 'days': 'day'} left to start the event ${eventName} `
})
