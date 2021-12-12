for ( var i=0; i < pokemons.length; i++ ){
 var elPokemonsList = document.querySelector('.list');
 var newLI = document.createElement('li');
 var newImg = document.createElement('img');
 var newParagrif = document.createElement('p');

 newImg.src = pokemons[i].img;
 newParagrif.alt = pokemons[i].name;
 newParagrif.textContent = pokemons[i].name;

 elPokemonsList.appendChild(newLI);
 newLI.appendChild(newImg);
 newLI.appendChild(newParagrif);


}