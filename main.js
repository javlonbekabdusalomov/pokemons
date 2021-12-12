//html elemnetlarini chaqirish

var elPokemons = document.querySelector('.pokemons-list');
var elPokemonsTemplate = document.querySelector('#pokemonts-template').content;




// elPokemons.innerHTML = "";

var createPokemontsElement = function(pokemon){

  var elNewPokemon = elPokemonsTemplate.cloneNode(true);

  elNewPokemon.querySelector(".pokemons-img").src  = pokemon.img;
 
  elNewPokemon.querySelector(".pokemons-title").textContent = pokemon.name;

  return elNewPokemon;

};

pokemons.forEach(function(pokemon){
  elPokemons.appendChild(createPokemontsElement(pokemon))
})



