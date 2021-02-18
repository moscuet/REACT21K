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


let allMembers = [...band.members.current].concat([...band.members.past]).sort( (a,b)=> b.age - a.age)

console.log(allMembers)

// let z = Array.from(allMembers).sort((a, b) =>{
//     console.log(a.name)
//     return a.name - b.name
  
// });
// console.log(z)

// let q = ['Raymond', 'Gunter', 'Steve', 'Jules',' En']
// console.log(q.sort( (a,b)=>{
//     return b-a
// }))

let a = [
    { name: 'Sascha', age: 59, plays: ['vocals', 'synth', 'guitar', 'bass'] },
    { name: 'Lucia', age: 49, plays: ['vocals', 'synth'] },
    { name: 'Jules', age: 53, plays: ['guitar', 'bass', 'synth'] },
    { name: 'Steve', age: 55, plays: ['guitar'] },
    { name: 'Raymond', age: 57, plays: ['vocals', 'synth'] },
    { name: 'En', age: 52, plays: ['vocals', 'drums', 'guitar', 'synth'] },
    { name: 'Gunter', age: 57, plays: ['guitar', 'synth'] }
]



console.log(a.sort(a => a.name && a.age===b.age))