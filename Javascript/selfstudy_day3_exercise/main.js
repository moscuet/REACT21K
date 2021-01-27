console.log('js connected')

/*
1. Create an **array of 5 elements**, each element is a random number of either 1 or 0
2. Create a while loop, that goes through each element in the array, check if they are 1 or 0
3. Also create a counter variable to keep track of the number of 1 and 0 values in the array
4. If the number of 1s is 5, announce the jackpot prize
5. If the number of 0s is 5, announce the congrat message
6. If the number of 1s is 3 < x < 5, announce smaller prize
7. Create a while loop that will run the above application for an undefinite number of time, and only break out of the loop if the jackpot prize is won. 
8. Create a variable to keep track of many rounds have been played in order to win the jackpot
9. If each round costs 50 cents, run the above program 5 times, either manually or use a while loop to help you, in order to learn the average amount of money you have to spend on winning a jackpot 😄 
10. Increase the random number range to be any number between 0 - 5, run the program on number 9 again to see how much money you would actually have to spend to win a jackpot
11. If the jackpot prize was 30000 EUR, how much profit/loss do you make?
*/
//1. Create an **array of 5 elements**, each element is a random number of either 1 or 0

const randomNum = () => Math.random()>.5 ? 1 : 0
let randomArray = [ randomNum(), randomNum(), randomNum(), randomNum(), randomNum()]
console.log('randomArray', randomArray)

// 2. Create a while loop, that goes through each element in the array, check if they are 1 or 0
//3. Also create a counter variable to keep track of the number of 1 and 0 values in the array
let i = 0
let count =0
while(i<randomArray.length ){
    randomArray[i]=== 0? console.log('this array element is 0') : console.log('this array element is 1')
    count += randomArray[i]
    i++
}

// 4. If the number of 1s is 5, announce the jackpot prize

if(count===5) console.log('congrats you have won the Jackpot')
// 5. If the number of 0s is 5, announce the congrat message

if(count===0) console.log('congrats you have all zero number! Goodluck with Jackpot nextime!!')

//6. If the number of 1s is 3 < x < 5, announce smaller prize

if(count>3 && count < 5) console.log('congrats you have won a smaller prize!')

//7. Create a while loop that will run the above application for an undefinite number of time, and only break out of the loop if the jackpot prize is won. 
//8. Create a variable to keep track of many rounds have been played in order to win the jackpot

let count2 = 0
let j = 0
let round =1
while(j<5 ){
    count2 += randomArray[j]
    j++
    if( j === randomArray.length && count2 !==5) {
        j=0; count2=0; round++
        randomArray = [ randomNum(), randomNum(), randomNum(), randomNum(), randomNum()]
        console.log('Bad luck, no Jackpot, Try again')
        console.log('New random Array', randomArray)
    } 
    else if( count2===5) console.log(' congrats!! Finally Jackpot is yours!! You have played total '+ round + ' round to win the jackpot' )
}
