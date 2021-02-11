let myCar = new Object()
myCar.type= 'Audi';
myCar.year = 2000;
myCar.owner = 'rah';
myCar.city = 'helsinki'
// myCar.calcAge = new Date().getFullYear() - myCar.age
let para = document.querySelector('p');
para.innerText = `car model : ${myCar.type}, `


let car = {
    type: 'Toyota',
    year: 2000,
    owner: 'Rah',
    color: 'Blue',
    calcAge: () => {
        return 2021 - this.year
    }
}


//============  Task 1  ===========

function Car(licence, maker, model,price,color){
    this.licence = licence ,
    this.maker = maker ,
    this.model = model ,
    this.price = price ,
    this.color = color,
    this.discount = () => {
        let percent = this.price> 20000? 0.25 : this.price <5000?  0.1 : 0.15
        return Number(this.price)*(1-percent)
    }
}



let submitSearch =  document.getElementById("submit_search")
let submit =  document.getElementById("submit")
let form  = document.getElementById("form")

let carArray = new Array()

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let licence = document.getElementById('licence').value
    let maker = document.getElementById("maker").value
    let model = document.getElementById("model").value
    let price =  document.getElementById("price").value
    let color = document.getElementById("color").value
    form.reset()
    let car = new Car(licence, maker, model, price, color)
    carArray.push(car)
    console.table(carArray)
})

submitSearch.addEventListener('click', (e)=>{
    e.preventDefault()
    let searchword =  document.getElementById("search").value
    let foundCar = carArray.filter ( car => {
        return car.licence == searchword
    })[0]

    if(foundCar){
        document.getElementById('found_car').innerText = ` car with licence plate ${searchword }: maker: ${foundCar.maker}, model: ${foundCar.model}, normal price: ${foundCar.price} & discount price: ${foundCar.discount()} `
    }
    else{
        document.getElementById('found_car').innerText = ` car with licence plate ${searchword } not found`
    }
})





