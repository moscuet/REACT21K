
(function(){
    window.addEventListener('DOMContentLoaded',excecuteScript);
    const url ='https://pokeapi.co/api/v2/pokemon?offset=100&limit=100'
    let pokemons = []
    async function excecuteScript (){
        let data = await (await fetch(url)).json()
        pokemons = data.results;
        pokemons.forEach(addPokemon)
        document.querySelectorAll('.pokemon').forEach ( element =>{
           element.addEventListener('click', async(event) => {
               let url = event.target.getAttribute('data-url')
               let pokemonObj = await (await fetch(url)).json()
               addPokemonDetails(pokemonObj)
           })
        })
    }

    function addPokemon(pokemonObj){
        let pokemonElement = document.createElement('div')
        pokemonElement.className = 'pokemon'
        pokemonElement.innerHTML = `
        <div class = 'name' data-url = "${pokemonObj.url}" >
            ${pokemonObj.name}
        </div>
        `;
        document.getElementById('pokemons').appendChild(pokemonElement)
    }

    function addPokemonDetails(pokemonObj){
        let {name,base_experience, height, id, order, weight, abilities, forms, species, types} = pokemonObj
        document.getElementById('current_pokemon').innerHTML = `
            <div><img src="${pokemonObj.sprites.front_default}"> </div>
            <h3>Name : ${name}</h3>
            <h4> Information: <h4/>
                <ul>
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
    }

})()


