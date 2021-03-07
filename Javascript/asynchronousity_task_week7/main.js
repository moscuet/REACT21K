console.log('conected')

let url ='https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000'

fetch(url)
.then ( response => response.json())
.then (data => {
    let ul = document.createElement('ul')
    data.results.forEach( (d)=> {
        let li = document.createElement('li')
        li.innerHTML = `<a href = '#' onClick = "pokeMan('${d.url}')">${d.name}</a>`
        ul.appendChild(li)
    })
    document.getElementById('results').appendChild(ul)
})

function pokeMan (url) {
    
    fetch(url)
        .then ( response => response.json())
        .then (data => {
            let {name,base_experience, height, id, order, weight, abilities, forms, species, types} = data
           document.getElementById('results').innerHTML = `
           <div><img src="${data.sprites.front_default}"> </div>
           <h3>Name : ${name}</h3>
           Information: <ul>
           <li>Id : ${id} </li>
           <li> Order: ${order} </li>
            <li> Base experience : ${base_experience} </li>
            <li>Height : ${height}</li>
            <li> Weight: ${weight} </li>
            <li> Species: ${species.name} </li>
            <li> Abilities: <ul> ${abilities.map( a => `<li> ${a.ability.name}</li>`).join('')}   </li> </ul>
            <li> Forms: <ul> ${forms.map( form => `<li> ${form.name}</li>`).join('')}</li> </ul>
            <li> Types: <ul> ${types.map( t => `<li> ${t.type.name}</li>`).join('')}</li> </ul>
           </ul>
           `
        })
}



