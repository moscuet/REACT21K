// Exercise 2 : Number counter up to 99

let randomNumber = Math.floor(Math.random()*100)

let partOnes = randomNumber%10
let partTens = Math.floor(randomNumber/10)
let result

if(partTens===1){
    switch(partOnes){
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
        switch(partTens){
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
        switch(partOnes){
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


console.log('Random Number ',randomNumber)
console.log('In Finnish: ',result)
