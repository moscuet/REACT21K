/*
1.	Make a program that asks age of the user. If the age is less than 18 the text “too young” is printed. If the age is less than 27 the text “Right age for military service” is printed. If the age is less than 41 the text “You are in reserve” is printed.  If the age is less than 55 the text “You are in backup reserve” is printed. All other cases “too aged” is printed.


2.	Make a program that asks three numbers from the user. Program prints out sum of the numbers, if any of the numbers is positive. If all the numbers are positive, also print out multiplication. If all numbers are negative, text “only negatives” is printed. Handle zero as positive in this assignment.

3.	Make a program that asks one number from the user. Then the program finds out if the number is positive and is the number divisible by 2. Message "that is even number" is printed else "that number is odd" is printed.

4. Make a program that calculates body mass index. The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m2, resulting from mass in kilograms and height in metres. Based on result display correct range:
BMI	          	Status
Below 18.5	    Underweight
18.5 – 24.9	    Normal or Healthy Weight
25.0 – 29.9	    Overweight
30.0 and Above	Obese


5. Make a program that asks hourly salary and how many hours user worked on one day. With this information program calculates day’s salary.
The salary is calculated as follows:
- first 7 hours by hourly salary
- next 2 hours 50% extra
- rest of the hours 100% extra
*/
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
    document.getElementById('numberResult').innerText = num + ' Number is',result
}

function checkBmi (){
    let mass = document.getElementById('mass').value
    let height =  document.getElementById('height').value/100
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

