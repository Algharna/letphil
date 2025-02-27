console.log("hello");

async function getPokemon(pokemonName) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    resoponse.ok;
  } catch (error) {}
}

getPokemon("jirachi");
