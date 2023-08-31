const pokeApi = {}

pokeApi.getPokemons = function (offset = 0, limit = 10){ // default
    // FETCH API (substituindo jquery e já está no browser)
    // processamento assíncrono 

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
 
    return fetch(url)  
    // é necessário converter body da response de ReadableStream para JSON
    // o retorno aqui será entendido como argumento 
    // para o proximo .then   
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) 
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
    
        
}

pokeApi.getPokemonDetail = (pokemon) =>{
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()

    pokemon.name = pokeDetail.name
    pokemon.number = pokeDetail.order

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types // desestruturação
    pokemon.types = types
    pokemon.type = type
    
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon

}

