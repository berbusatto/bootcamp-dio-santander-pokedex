

function convertPokemonToLi(pokemon){
    return `
        <li class="pokemon">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')


pokeApi.getPokemons()
    .then((pokemons = []) => { // por default ele passa uma lista vazia

        // const newList = pokemons.map((pokemon) => {
        //     return (convertPokemonToLi(pokemon))
        // })
        // const newHtml =  newList.join()
        // pokemonList.innerHTML += newHtml

        // que pode ser escrito apenas em uma linha...
        pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')     
    })









