const urlParams = new URLSearchParams(window.location.search);
const pokemonDetailsContainer = document.getElementById("container");


const pokemonNumber = urlParams.get('number').slice(0,-5)

console.log(pokemonNumber)

loadPokemonDetails(pokemonNumber);

function loadPokemonDetails(pokemonNumber) {
    pokeApi.getPokemonDetailsById(pokemonNumber)

    .then((pokemonDetails) => {
        const detailsHtml = `
                          
            <div class="pokemon-name ${pokemonDetails.type}">
                <h1 id="${pokemonDetails.name}">${pokemonDetails.name.toUpperCase()}</h1>
            </div>

            <div class="pokemon-image">
                <img src="${pokemonDetails.photo}" alt="${pokemonDetails.name}"/>
            </div>

            <div class="pokemon-number">
                <h1>#${pokemonDetails.number}</h1>
            </div>

            <div class="pokemon-types>">
                <h2>Types</h2>                
                
                <ul class="types-list">
                    ${pokemonDetails.types.map((type) => `<li class="${type}">${type}</li>`).join('')}
                </ul>
            </div>
            <div class="pokemon-stats">
                <h2>Stats</h2>
                <ul class="pokemon-stats-list">
                    ${pokemonDetails.stats.map((stat) => `<li class="${stat.name}">${stat.name}: ${stat.value}</li>`).join('')}
                </ul>
            </div>
        `;    
        pokemonDetailsContainer.innerHTML = detailsHtml;
        pokemonDetailsContainer.classList.add(pokemonDetails.type);
    })
}