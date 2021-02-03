console.log('connected')
function duplicateEncode(word){
  word = word.toLowerCase()
    let newStr = ''
    let arr = word.split('')
   for( i=0; i < arr.length; i++){
     let isRepeated = arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])    
      isRepeated  ? newStr += ')': newStr+='('
   }
   return newStr
  }

  duplicateEncode('Recede')

  //str.replace(/[^a]/g, "").length

  //Kata2: In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
  //All numbers are valid Int32, no need to validate them. There will always be at least one number in the input string. Output string must be two numbers separated by a single space, and highest number is first.

  function highAndLow(numbers){
    let numberArray = numbers.split(' ').map( num =>  Number(num))
    return `${Math.max(...numberArray)} ${Math.min(...numberArray)}`
  }
  console.log(highAndLow('1 3 -4 5 -11 0'))

const persist = (number) =>{
  while(number.toString().length >1){
    number = number.toString().split('').map( num => Number(num)).reduce( (accumulator, currentValue) =>accumulator*currentValue )
  }
  return number
}
function persistence(num) {
  let multiply = 0
  while(num.toString().length >1){
   num = num.toString().split('').map( n => Number(n)).reduce( (accumulator, currentValue) =>accumulator*currentValue )
   multiply ++
 }
 console.log(multiply)
 return multiply
}
persistence(39)



/// kata 3

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
//"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"


// str.replace(/[^0-9]/g, ""

function order(words){
  let array = []
  words.split(' ').forEach( w => {
    let position = Number(w.replace(/[^0-9]/g, ''))
    array[position-1] = w
  });
  return array.join(' ')
}
console.log(order("is2 Thi1s T4est 3a"))

//4 Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.


function getSum( a,b ){
  let min = a - b < 0 ? a : b
  let max = a - b> 0 ? a : b
  console.log(min,max)
  let sum = 0
  for ( i= min ; i <= max; i++){
      sum += i
  }
  console.log(sum)
  return sum
}

getSum(0,1)

//5 Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
let array1 = [1,4,2,9,4]
let array2 = [16,4,1,16,81]

function comp(array1, array2){
  if(array1==null || array2==null )return false
  if(array1.length !== array2.length) return false
  //if(array1.length||array2.length === 0) return false
  let result = true
  array1.sort( (a,b) => a-b);
  array2.sort( (a,b) => a-b);

  array1.forEach( ( e,i )=>{
    if( e**2 !== array2[i]) result = false
  })
  return result
}

console.log(comp(array1,null))


//7 Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1: a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

function inArray(array1,array2){
  return array1.filter( a => array2.some( a2 => a2.includes(a))).sort()
}

console.log(inArray(a1,a2))

//8 Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

function iqTest(numbers){
  let arr = numbers.split(' ')
  let even = arr.filter( n => Number(n)%2===0)
  let odd = arr.filter( n => Number(n)%2===1)
  let diffNum = even.length === 1? even[0] :odd[0]
  return arr.indexOf(diffNum)+1
}


//9 You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

function longestConsec(strarr, k) {
  let ArrayOfConStr =[]
  let largestStr = ''

  for( i=0; i < strarr.length-k+1; i++){
    let joinedStr =''
    for (j=i; j<k+i ; j++){
      joinedStr += strarr[j]
    }
    ArrayOfConStr[i] = joinedStr
  }

  ArrayOfConStr.forEach ( a=> {
    largestStr = a.length > largestStr.length? a : largestStr
  })
  console.log('ArrayOfConStr',ArrayOfConStr, largestStr )
  return largestStr
}
longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)
 

//10 Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable(seconds) {
  if(seconds>359999) return 'time limit exceeded'
  let hours = Math.floor(seconds/(60*60))
  let minutes = Math.floor((seconds-hours*60*60)/60)
   seconds = seconds - hours*60*60 - minutes*60
  return `${hours<9? '0'+hours : hours}:${minutes<9? '0'+ minutes : minutes}:${seconds<9? '0'+ seconds : seconds}`
}

console.log(humanReadable(85))


// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
function firstNonRepeatingLetter(s) {
  if(s.length===0) return ''
  let array = s.toLowerCase().split('')
  for( i=0; i<array.length; i++){
    if( array.indexOf( array[i]) === array.lastIndexOf(array[i])) return s[i]
  }
}
console.log(firstNonRepeatingLetter('stress'))

// Build a pile of Cubes

function findNb(m) {
  let n = 0
  while( m>0){
    n++
    m =  m- n**3
  }
  if(m===0) return n
  return (-1);
}
console.log(findNb(4183059834009))


//Highest Scoring Word
function high(x) {
  let charSet = 'abcdefghijklmnopqrstuvwxyz'
  let score = x.split(' ').map( a=>{
    return a.split('').reduce((accu, currVal)=>{
      return accu + charSet.indexOf(currVal)+1
    },0)
  })
 let index = score.indexOf(Math.max(...score))
 return x.split(' ')[index]
}

console.log(high('man i need a taxi up to ubud')) //'taxi'

// Double Cola

function whoIsNext(names, r){
  let m =1; // multiplier
  let person = ''
  while(r>0){
    for(i=0; i<names.length; i++){
      person = names[i]
      r = r-m
      if(r<=0) break
    }
    m = m*2
  }
  return person
}

console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951))

// 0 1 2 3 4 5 6 7 8 9  10
// 1 2 3 4 5 6 7 8 9 10 11
//           6 7 8 9 10 11


// Adding Big Numbers
/*
function add(a, b) {
   let str = ''
   let reminder = 0
   let l = a.length> b.length ? a.length-1 : b.length-1
   let s = a.length> b.length ? b.length : a.length
   for( i = l ; i>=0; i--){
     if(i>l-s){
          let sum = (Number(a[i]) + Number(b[i])+ reminder).toString()
          if(sum.length>1) {
            str+= sum[1]
            reminder = Number(sum[0])
          }
          else {
            str += sum[0]
            reminder = 0
          }
     }
     else if( i==l-s){
        console.log('2nd',i, a[i], b[i])
     }
     console.log(str)
   }

  //return (Number(a) + Number(b)).toString(); // Fix me!
}

add ('123',)

*/
//Simple Pig Latin

function pigIt(str){
  console.log(str)
  let char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let arr =  str.split(' ')
 result =  arr.map( a=>{
     if(a.length !==1){
      return  a.split('')//.push(a[0]).splice(1).toString()+'ay'
     }
     else{
       return a
     }
  })
}

pigIt('Pig latin is cool')

document.getElementById('h2').textContent = 'Hi'
