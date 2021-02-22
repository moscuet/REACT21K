let firstNumber = '';
let secondNumber = '';
let operation = '';

document.getElementById('result').addEventListener('click', performCalculation);
/**
 * perform the actual calculation depending on user choice
 * @return {number} result of the calculation
 */
function performCalculation(){
    let result
    if( !firstNumber || !secondNumber || !operation) return
    if (operation === '+') result = Number(secondNumber) + Number(firstNumber) ; 
    if (operation === '-') result =  Number(secondNumber) - Number(firstNumber) ;
    if (operation === '*') result =   Number(secondNumber) *  Number(firstNumber);
    if (operation === '÷') result =  Number(secondNumber) / Number(firstNumber)  ;
    document.getElementById('input').innerText = result
    secondNumber = ''+ result
    firstNumber=''
    operation = ''
}



document.querySelectorAll('.operators > div').forEach(button => {
    button.addEventListener('click', function(){
        updateSelectedOperation()
        if (firstNumber) secondNumber = firstNumber
        firstNumber = ''
        updateDisplay()
    })
})

document.querySelectorAll('.numbers > div').forEach(button => {
    button.addEventListener('click', function(){
        if(this.innerText === 'C'){
            reSet()
            updateDisplay();
            return
          }
        updateSelectedNumber();
        updateDisplay();
    });
})

function updateDisplay() {
    document.getElementById('input').innerText = `${secondNumber} ${operation} ${firstNumber}`;
}

function updateSelectedNumber(text) {
    if (this.event.target.innerText === '.' && firstNumber.indexOf('.') > -1){
        return;
    }
    firstNumber += this.event.target.innerText;
}

function reSet (){
    firstNumber = '';
    secondNumber = '';
    operation = '';
}

/**
 * update the variable operation with the user choice
 * @return {void}
 */
function updateSelectedOperation(){
    switch(this.event.target.innerText){
        case '+':
            operation = '+';
            break;
        case '-':
            operation = '-';
            break;
        case '×' :
            operation = '*';
            break;
        case '÷':
            operation = '÷';
            break;   
        default:
            console.log('Oops?');
            break;
    }

}