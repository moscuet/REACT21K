(()=>{
 // exercise 2.1: 

 users = getUsers()
 users.push({ studentNo:11, name:'rah', age:5})
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
users.forEach( user => addUser(user) )

 // 2.4

 let getOldest = ()  => {
   let oldestPerson = {age:0}
 
   for ( user of users){
     if(user.age > oldestPerson.age) oldestPerson = user
   }
 return oldestPerson
}
 
//5 funtion to find  if student or stuff
const thead = document.getElementById('thead')
const th = document.createElement('th')
th.innerHTML = 'is stuff ?'
thead.appendChild(th)



// 6

  const userByAgeDec = (arr) =>{
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

  let sortedtable = () =>{
    const table = document.getElementById('table')
    let sortedUsers = userByAgeDec([...users])
    table.innerHTML = `<tr id = 'thead'>
                          <th>Student No</td>
                          <th>name</td>
                          <th>age</td>
                          <th>is stuff ?</td>
                      </tr>`
      sortedUsers.forEach( user => {
      addUser(user)
  })
  }
  document.getElementById('sortButton').addEventListener('click', ()=>{
    sortedtable()
  })

})()


