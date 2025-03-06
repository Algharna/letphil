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

//fetches Pokemon by name from api
async function fetchPokemon(pokemon) {
  try {
    const response = await axios.get(POKEMON_URL + pokemon);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
    alert(error.message);
  }
}

//fetches first 151 pokemon and displays them
async function display151() {
  try {
    const response = await axios.get(POKEMON_URL + "?limit=151");
    console.log(response.data.results);

    for (let i = 0; i < response.data.results.length; i++) {
      const current = response.data.results[i];
      catalogue.innerHTML += renderList(current.name, i + 1);
    }
  } catch (error) {
    console.log(error.message);
    alert(error.message);
  }
}

//renders list for 151
function renderList(name, id) {
  return `<span>
            <a href=""><label for="${name}">${name} - #${id}</label></a>
            <input type="checkbox" name="${name}" onchange="checkPokemon('${name}')"/>
          </span>
          <br />`;
}
const pokeArr = [];
//checks if pokemon are checkboxed
function checkPokemon(name) {
  const findName = pokeArr.indexOf(name);
  if (findName === -1) {
    pokeArr.push(name);
  } else {
    pokeArr.splice(findName, 1);
  }
}
viewPokedex.addEventListener("click", () => {
  window.location.href = "/homework/pokedex.html?pokemon=" + pokeArr.join("&");
});

// console.log(checkAll.length);
// console.log(checkPkmnInFunction);
// if (submitPokemon) {
//   console.log(name);
// } else {
// }
// const queryPokemon = document.querySelector(`input[name="${name}"]:checked`);
// if (queryPokemon) {
//   console.log("checked");
// }

window.onload = display151();
