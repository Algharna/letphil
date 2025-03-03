const URL = "https://pokeapi.co/api/v2/pokemon/";
const search = document.getElementById("search");
pokemonSearch = document.getElementById("pokemonSearch");
const defaultPokemon = "Jirachi";
const pokedex = document.getElementById("pokedex");

async function fetchPokemon(pokemon = defaultPokemon) {
  searchValue = pokemonSearch.value.toLowerCase();
  let query = "";

  if (searchValue) {
    query = searchValue;
  } else if (pokemon) {
    query = pokemon;
  }

  try {
    const response = await fetch(URL + query);
    if (!response.ok) {
      throw new Error("Pokemon not found!");
    }
    const data = await response.json();
    console.log(data);

    const pokemonObj = {
      name: data.name,
      id: data.id,
      image: data.sprites.front_default,
      type: data.types.map((t) => t.type.name).join(", "),
      height: (data.height * 0.1).toFixed(1),
      weight: (data.weight * 0.1).toFixed(1),
      abilities: data.abilities.map((a) => a.ability.name).join(", "),
    };
    console.log(pokemonObj);
    renderPokemon(pokemonObj);
  } catch (error) {
    console.error(error.message);
    alert(error.message);
    pokemonSearch.value = "";
  }
}

function renderPokemon({ name, id, image, type, height, weight, abilities }) {
  pokedex.innerHTML = `
  <h2>${name}, Pokedex #: ${id}</h2> 
  <br />
  <img src="${image}" alt="${name}" />
  <p>Type(s): ${type}</p>
  <p>Height: ${height} m,
  Weight: ${weight} kg</p>
  <p>Abilitie(s): ${abilities}</p>
  `;
  pokemonSearch.value = "";
}
window.onload = fetchPokemon(defaultPokemon);
search.addEventListener("click", fetchPokemon);
