(()=>{
  const executeScript = (studentNo,name,age) => {
    const table = document.getElementById('table')
    let row = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    td1.innerHTML = studentNo;
    td2.innerHTML = name;
    td3.innerHTML = age;
    td4.innerHTML = studentNo > 0 ? 'student ': 'stuff'
    row.append(td1,td2,td3,td4)
    table.appendChild(row)
 }
 
 window.addEventListener('DOMContentLoaded', ()=> {
    executeScript('2100999', 'TestUser', 70)
 });


 // exercise 2.1: 

 const getUsers = () => [
   {
     studentNo: 123,
     name: 'harry',
     age: 15
   },
   {
     studentNo: 234,
     name: 'Ron',
     age: 16
   },
   {
     studentNo: 135,
     name: 'Hermione',
     age: 17
   },
   {
     studentNo: -1,
     name: 'Snape',
     age: 55
   },
   {
     studentNo: -1,
     name: 'Hagrid',
     age: 65
   }
 ];

 // exercise 2.2: 
 
 const addUser = (user) => {
   const table = document.getElementById('table')
   let row = document.createElement('tr');
   let td1 = document.createElement('td');
   let td2 = document.createElement('td');
   let td3 = document.createElement('td');
   let td4 = document.createElement('td');

   td1.innerHTML = user.studentNo;
   td2.innerHTML = user.name;
   td3.innerHTML = user.age;
   td4.innerHTML = user.studentNo > 0 ? 'student ': 'stuff'
    row.append(td1,td2,td3,td4)
   table.appendChild(row)
 }
 
 //2.3 
 let users = getUsers()
 users.forEach( user => {
    addUser(user)
 })

 // 2.4

 let getOldest = ()  => {
   let oldestPerson = {age:0}
 
   for ( user of users){
     if(user.age > oldestPerson.age) oldestPerson = user
   }
 return oldestPerson
}
 
//5 funtion to find  if student or stuff

let isStuff =  user => user.studentNo <0

console.log('oldest',getOldest(users))



// 7

const userByAgeDec = (arr) =>{
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            let small  = 0

            if (arr[i].age < arr[j].age) {

                small= arr[i];

                arr[i] = arr[j];

                arr[j] = small;

            }

        }
   }
   return arr
}

console.log('ooo',userByAgeDec(users))
 
 
 
 
 
 
 

})()



/**
 * 
 * 
 * const executeScript = (id,name,age) => {
    const table = document.getElementById('table')
    let row = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    td1.innerHTML = id;
    td2.innerHTML = name;
    td3.innerHTML = age;
    row.append(td1,td2,td3)
    table.appendChild(row)
 }
 
 window.addEventListener('DOMContentLoaded', ()=> {
    executeScript('s2100999', 'TestUser', 70)
 });
 */