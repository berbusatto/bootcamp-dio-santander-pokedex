const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 12
let offset = 0
const maxRecords = 151 //limitando para a primeira geração


loadPokemonItems(offset, limit)

function loadPokemonItems(offset, limit){    

    pokeApi.getPokemons(offset, limit)
    .then((pokemons = []) => { // por default ele passa uma lista vazia

        // const newList = pokemons.map((pokemon) => {
        //     return (convertPokemonToLi(pokemon))
        // })
        // const newHtml =  newList.join()
        // pokemonList.innerHTML += newHtml

        // que pode ser escrito desta forma
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
        `).join('')     
        pokemonList.innerHTML += newHtml
    })
}

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNextPage = offset + limit

    if(qtdRecordsWithNextPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItems(offset, newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItems(offset, limit)
    }

    
})










