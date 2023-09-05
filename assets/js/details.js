const urlParams = new URLSearchParams(window.location.search);
const pokemonDetailsContainer = document.getElementById("container");


const pokemonNumber = urlParams.get('number').slice(0,-5)

console.log(pokemonNumber)

loadPokemonDetails(pokemonNumber);

function loadPokemonDetails(pokemonNumber) {
    pokeApi.getPokemonDetailsById(pokemonNumber)

    .then((pokemonDetails) => {
        const detailsHtml = `
                          
            <div class="pokemon-name">
                <h1 id="${pokemonDetails.name}">${pokemonDetails.name}</h1>
            </div>
            <div class="pokemon-image">
                <img src="${pokemonDetails.photo}" alt="${pokemonDetails.name}"/>
            </div>
            <div class="pokemon-number">
                #${pokemonDetails.number}
            </div>
            <div class="pokemon-types>">
                <h2>Types</h2>
                <ul id="pokemonTypesList">
                ${pokemonDetails.types.map((type) => `<li>${type}</li>`).join('')}
                </ul>
            </div>
            
            <h2>Stats</h2>
            <ul id="pokemonStats" class="pokemon-stats">
            ${pokemonDetails.stats.map((stat) => `<li>${stat.name}: ${stat.value}</li>`).join('')}
            </ul>
        `;    
        pokemonDetailsContainer.innerHTML = detailsHtml;
        pokemonDetailsContainer.classList.add(pokemonDetails.type);
    })
}