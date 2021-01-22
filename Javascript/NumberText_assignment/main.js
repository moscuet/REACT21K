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