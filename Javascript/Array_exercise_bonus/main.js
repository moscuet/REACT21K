const band = {
    members: {
        current: [
            { name: 'Sascha', age: 59, plays: ['vocals', 'synth', 'guitar', 'bass'] },
            { name: 'Lucia', age: 49, plays: ['vocals', 'synth'] },
            { name: 'Jules', age: 53, plays: ['guitar', 'bass', 'synth'] },
            { name: 'Steve', age: 55, plays: ['guitar'] }
        ],
        past: [
            { name: 'Raymond', age: 57, plays: ['vocals', 'synth'] },
            { name: 'En', age: 52, plays: ['vocals', 'drums', 'guitar', 'synth'] },
            { name: 'Gunter', age: 57, plays: ['guitar', 'synth'] }
        ]
    }
};

let expected = Object.assign({},band)

let plays = []
let memberPlays =[]
for(catagory in band.members){
    band.members[catagory].forEach(element => {
        element.plays.forEach( e=> {
            plays.push(e)
            memberPlays.push('')
        })
    }); 
}
let playSet = Array.from(new Set (plays))



// concating all members togeter & sorting by age
let allMembers = [...band.members.current].concat([...band.members.past]).sort( (a,b)=> b.age - a.age)

// removing  reference to allMembers before sorting age descending
let copiedAllMembers = JSON.parse(JSON.stringify(allMembers));

// sorting by name asscending
copiedAllMembers.sort((a, b) =>{
    if(a.age === b.age){
        return (a.name.toUpperCase()> b.name.toUpperCase())? 1: (a.name.toUpperCase() < b.name.toUpperCase())? -1 : 0
    }
})
// filtering out band list
let all = [...copiedAllMembers].map( member => `${member.name}, ${member.age}`)

expected.members.all = all
console.log(expected)

//let expected = JSON.parse(JSON.stringify(band))

