const urlParams = new URLSearchParams(window.location.search);
const pokemonDetailsContainer = document.getElementById("container");


const pokemonNumber = urlParams.get('number').slice(0,-5)

console.log(pokemonNumber)

loadPokemonDetails(pokemonNumber);

function loadPokemonDetails(pokemonNumber) {
    pokeApi.getPokemonDetailsById(pokemonNumber)

    .then((pokemonDetails) => {
        const prevUrl = "pokemon-details?number=" + (pokemonDetails.number -1) + ".html";
        const nextUrl = "pokemon-details?number=" + (pokemonDetails.number + 1) + ".html";

        const detailsHtml = `         
            <div class="pokemon-name ${pokemonDetails.type}">
                <a href="${prevUrl}" class="nav-button" id="prev-button">
                    <img src="assets/img/arrow-left-square.svg" alt="Anterior"></img>
                </a>
                <h1 id="${pokemonDetails.name}">#${pokemonDetails.number} - ${pokemonDetails.name.toUpperCase()}</h1>
                <a href="${nextUrl}" class="nav-button" id="next-button">
                <img src="assets/img/arrow-right-square.svg" alt="Anterior"></img>
                </a>
            </div>

            <div class="pokemon-image">
                <img class="${pokemonDetails.type}" src="${pokemonDetails.photo}" alt="${pokemonDetails.name}"/>
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
                    ${pokemonDetails.stats.map((stat) => `<li class="${stat.name}">${stat.name}<br>${stat.value}</li>`).join('')}
                </ul>
            </div>
            <div class="back-button-container">
                <a href="/index.html" class="nav-button" id="back-button">
                    <h4>Voltar para a lista de Pokémons</h4>
                </a>
            </div>
        `;    
        pokemonDetailsContainer.innerHTML = detailsHtml;
        pokemonDetailsContainer.classList.add(pokemonDetails.type);
    })
}