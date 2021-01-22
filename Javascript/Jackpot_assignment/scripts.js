
// problem1: Jackpot

if(Math.floor(Math.random()*10)<5 ) {number1 = 0 } else number1 = 1
if(Math.floor(Math.random()*10)<5 ) {number2 = 0 } else number2 = 1
if(Math.floor(Math.random()*10)<5 ) {number3 = 0 } else number3 = 1
if(Math.floor(Math.random()*10)<5 ) {number4 = 0 } else number4 = 1
if(Math.floor(Math.random()*10)<5 ) {number5 = 0 } else number5 = 1
let probability = (1/2**5)*100

console.log( 'your random numbers :', number1, number2, number3, number4,number5)
console.log('chance of winning a Jackpot is ' + probability + ' %' )

let numberString = ''+number1+number2+number3+number4+number5


if(numberString=== '11111'){
    console.log("congratulation!! You have won the Jackpot!!")

}
else if(numberString==='00000'){
    console.log('Congrats for getting all 0, Goodluck for next time to win the Jackpot')
}
else{
    console.log('Thanks for participating! its hard to win a Jackpot always which has probablity only ' + probability + ' %  but not impossible. Play Again!' )
}


/*
// using switch statement
switch(numberString){
    case '11111':
        console.log("congratulation!! You have won the Jackpot!!")
        break;
    case '00000' : 
    console.log(' Goodluck for next time, Congrats for getting all 0')
    break;
    default:
        let probability = (1/2**5)*100
        console.log('Thanks for participating! its hard to win a jackpot always which has probablity only ' + probability + ' %')
    }
*/

// Exercise 2 : numbersText

let randomNumber = Math.floor(Math.random()*100)
let part1Text, part2Text
console.log('ranNum', randomNumber)
let part1 = randomNumber%10
let part2 = Math.floor(randomNumber/10)
let numberText, result

if(part2===1){
    switch(part1){
        case 0 : result= 'kymmenen'
        break;
        case 1 : result= 'yksitoista'
        break;
        case 2 : result= 'kaksitoista'
            break;
        case 3 : result= 'kolmetoista'
            break;
        case 4 : result= 'neljatoista'
            break;
        case 5 : result= 'viisitoista'
            break;
        case 6 : result= 'kuusitoista'
            break;
        case 7 : result= 'seitsemäntoista'
            break;
        case 8 : result= 'kahdeksantoista'
            break;
        case 9 : result= 'yhdeksäntoista'
            break;
        default:
    }
}  else { 
        switch(part2){
            case 2 : result= 'kaksikymmentä'
                break;
            case 3 : result= 'kolmekymmentä'
                break;
            case 4 : result= 'neljakymmentä'
                break;
            case 5 : result= 'viisikymmentä'
                break;
            case 6 : result= 'kuusikymmentä'
                break;
            case 7 : result= 'seitsemänkymmentä'
                break;
            case 8 : result= 'kahdeksankymmentä'
                break;
            case 9 : result= 'yhdeksänkymmentä'
                break;
                default: result = ''
        }
        switch(part1){
            case 1 : result+= 'yksi'
                break;
            case 2 : result += 'kaksi'
                break;
            case 3 : result += 'kolme'
                break;
            case 4 : result += 'nelja'
                break;
            case 5 : result += 'viisi'
                break;
            case 6 : result += 'kuusi'
                break;
            case 7 : result += 'seitsemän'
                break;
            case 8 : result += 'kahdeksan'
                break;
            case 9 : result += 'yhdeksän'
                break;
            default: result += ''
            }
}


console.log(randomNumber, result)