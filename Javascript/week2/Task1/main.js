function checkAge(){
    let result
    let age = Number(document.getElementById('age').value)
    console.log('age',age)
    if(age<18){ 
        result = 'You are too young for milittary service'
    }
    else if(age<27){
        result = " You are in right age for milittary service"
    }
    else if(age<41){
        result = " You are in reserve"
    }
    else if(age<55){
        result = " You are in Backup reserve"
    }
    else {
        result = " You are too aged for milittary service"
    }
    document.getElementById('ageResult').innerText=result
}

function checkNumbers(){
    let numbersResult, result2
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let num3 = document.getElementById('num3').value
    if(num1>=0 || num2>=0 || num3>=0){
        numbersResult = "Numbers: "+ num1 + ", " + num2 + ", " + num3
        
        if( num1>= 0 && num2>=0 && num3>=0){
            let result2 = num1*num2*num3
            numbersResult = numbersResult+ ', products: '+result2
        }
    }
    else{
        numbersResult = "Only Negative numbers"
    }
    document.getElementById('numbersResult').innerText = numbersResult
}

function checkNumber (){
    let num = Number(document.getElementById('num').value)
    console.log(num)
    let result
    if (num>0){
        num%2===0? result= 'even' : result= 'odd'
    } else {
        result= 'negative'
    }
    document.getElementById('numberResult').innerText = 'Number is',result
}

function checkBmi (){
    let mass = document.getElementById('mass').value
    let height =  document.getElementById('height').value
    let bmi = mass/ height*height
    let status
    if(bmi<18.5){
        status = "underweight"
    }
    else if(bmi<25){
        status = "Normal or Healthy Weight"
    }
    else if(bmi<30){
        status = "Overweight"
    }
    else {
        status = "Obese"
    }
    document.getElementById('bmiResult').innerText = 'Your body BMI is ' + bmi + ". status: " +status
}

function checkSalary (){
    let salary =  document.getElementById('salary').value
    let hours =  document.getElementById('hours').value
    let salaries
   if (hours>9) salaries = (hours-9)*salary*2 + 2*salary*1.5 + 7*salary
   else if(hours>7) salaries = (hours-7)*salary*1.5 + 7*salary
   else salaries = hours*salary 
   document.getElementById('salaryResult').innerText = 'Your salary :' + salaries + " Euro"
}

