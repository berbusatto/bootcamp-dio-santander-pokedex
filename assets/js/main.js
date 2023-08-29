// FETCH API (substituindo jquery e já está no browser)

const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


function convertPokemonToLi(pokemon){
    return `
    <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
                </div>
                
            </li>
        `
}

const pokemonList = document.getElementById('pokemonList')


// processamento assíncrono 
// arrow function substitui a sintaxe function(foo) {...}
fetch(url)
    // é necessário converter body da response 
    // que está em ReadableStream para JSON
    // o retorno aqui será entendido como argumento 
    // para o proximo .then     
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => { 
        pokemons.forEach(pokemon => {            
            pokemonList.innerHTML += convertPokemonToLi(pokemon);                       
        });
    })
    .catch((error) => console.log(error)) 









