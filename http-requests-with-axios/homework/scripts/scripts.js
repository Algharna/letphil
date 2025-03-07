// global variables
const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon/";
const container = document.querySelector(".container");
const catalogue = document.createElement("div");
catalogue.id = "catalogue";
container.appendChild(catalogue);
const submitPokemon = document.getElementById("submitPokemon");
const submitDiv = document.getElementById("submitDiv");
const checkPkmn = document.querySelectorAll("input[type=radio]");
const viewPokedex = document.getElementById("viewPokedex");
const pokeArr = [];

//fetches first 151 pokemon and displays them
async function display151() {
  try {
    const response = await axios.get(POKEMON_URL + "?limit=151");

    for (let i = 0; i < response.data.results.length; i++) {
      const current = response.data.results[i];
      catalogue.innerHTML += renderList(current.name, i + 1);
    }
  } catch (error) {
    alert(error.message);
  }
}

//renders list template
function renderList(name, id) {
  return `<span>
  <a href=""><label for="${name}">${name} - #${id}</label></a>
  <input type="checkbox" name="${name}" onchange="checkPokemon('${name}')"/>
  </span>
  <br />`;
}

//handles checkbox onchange
function checkPokemon(name) {
  const findName = pokeArr.indexOf(name);
  if (findName === -1) {
    pokeArr.push(name);
  } else {
    pokeArr.splice(findName, 1);
  }
}
//send to pokedex page
if (viewPokedex) {
  viewPokedex.addEventListener("click", () => {
    window.location.href =
      "/http-requests-with-axios/homework/pokedex.html?pokemon=" +
      pokeArr.join("&");

    // ?pokemon=" + pokeArr.join("&");
    // getURLInfo();
  });
}
//fetches Pokemon by name from api value of checkbox or clicked on
async function fetchPokemon(pokemon) {
  if (Array.isArray(pokemon)) {
    console.log(pokemon);
    const pokemons = (
      await Promise.all(
        pokemon.map((pokemon) => {
          return axios.get(url + "/" + pokemon);
        })
      )
    ).map((d) => {
      const data = d.data;
      const pokeObj = {
        id: data.id,
        name: data.name,
        types: data.types.map((type) => type.type.name).join(", "),
        height: data.height * 0.1 + "m",
        weight: data.weight * 0.1 + "kgs",
        image: data.sprites.front_default,
      };

      const pre = document.createElement("pre");
      pre.textContent = JSON.stringify(pokeObj, null, 2);
      catalogue.innerHMTL += pre;
    });

    console.log("pokemons =", pokemons);
    return;
  }

  try {
    const response = await axios.get(POKEMON_URL + pokemon);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
    alert(error.message);
  }
}
window.onload = display151();
window.onload = getURLInfo();

function getURLInfo() {
  const params = new URLSearchParams(window.location.search);
  const pokemon = params.get("pokemon");
  console.log("pokemon=", pokemon);
  if (pokemon.indexOf("&") === -1) {
    fetchPokemon(pokemon);
  } else {
    const multiPoke = pokemon.split("&").map((j) => j.trim());
    fetchPokemon(multiPoke);
  }
}
