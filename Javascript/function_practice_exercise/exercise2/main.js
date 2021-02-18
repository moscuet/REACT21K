
 
 let users = getUsers()
 //2
 const addUser = user => {
 }

 //3
for ( user of users){
    addUser(user)
}
 //4
let getOldest = ()  => {
  let oldestPerson = {age:0}

  for ( user of users){
    if(user.age > oldestPerson.age) oldestPerson = user
  }
return oldestPerson}

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