const urlParams = new URLSearchParams(window.location.search);
const pokemonDetailsContainer = document.getElementById("container");
const pokemonNameElement = document.getElementById("pokemonName");
const pokemonImageElement = document.getElementById("pokemonImage");
const pokemonTypesElement = document.getElementById("pokemonTypes");
const pokemonStatsElement = document.getElementById("pokemonStats");

const pokemonNumber = urlParams.get('number').slice(0,-5)

console.log(pokemonNumber)

loadPokemonDetails(pokemonNumber);

function loadPokemonDetails(pokemonNumber) {
    pokeApi.getPokemonDetailsById(pokemonNumber)

    .then((pokemonDetails) => {
        const detailsHtml = `
                  
            <h1 class=""pokemon-name" id="${pokemonDetails.name}">${pokemonDetails.name}</h1>
            <div class="pokemon-image">
                <img src="${pokemonDetails.photo}" alt="${pokemonDetails.name}"/>
            </div>
            <h2>Types</h2>
                <ul id="pokemonTypes" class="pokemon-types">
                ${pokemonDetails.types.map((type) => `<li>${type}</li>`).join('/')}
                </ul>
            <h2>Stats</h2>
            <ul id="pokemonStats" class="pokemon-stats">
            ${pokemonDetails.stats.map((stat) => `<li>${stat.name}: ${stat.value}</li>`).join('')}
            </ul>
        `;    
        pokemonDetailsContainer.innerHTML = detailsHtml;
        pokemonDetailsContainer.classList.add(pokemonDetails.type);
    })
}