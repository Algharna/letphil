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

//checks if pokemon are checkboxed
function checkPokemon(name) {
  const arr = [];
  let arr2 = [];
  const list = document.querySelectorAll("input[type=checkbox]");
  for (let checkbox of list) {
    if (checkbox.checked === true) {
      console.log(name);
      arr.push(name);
      arr2 = [...new Set(arr)];
      console.log(arr2);
      const findName = arr2.indexOf(name);
    } else if (checkbox.checked === false) {
      arr2.splice(findName);
    }
  }
  viewPokedex.addEventListener("click", () => {
    console.log(arr2.join("&"));
  });
}

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
