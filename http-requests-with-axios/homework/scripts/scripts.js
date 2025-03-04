// global variables
const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon/";
const container = document.querySelector(".container");
const catalogue = document.createElement("div");
catalogue.id = "catalogue";
container.appendChild(catalogue);
const submitPokemon = document.getElementById("submitPokemon");
const submitDiv = document.getElementById("submitDiv");
const checkPkmn = document.querySelectorAll("input[type=radio]");

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

function checkPokemon(name) {
  const checkPkmnInFunction = document.querySelector(`input[name="${name}"]`);
  const checkAll = document.querySelectorAll("input[type=checkbox]:checked");
  checkAll.forEach((name) => {
    console.log(name);
  });

  // console.log(checkAll.length);
  // console.log(checkPkmnInFunction);
  // if (submitPokemon) {
  //   console.log(name);
  // } else {
  document.body.innerHTML += displaySubmit();
  // }
  // const queryPokemon = document.querySelector(`input[name="${name}"]:checked`);
  // if (queryPokemon) {
  //   console.log("checked");
  // }
}

function displaySubmit() {
  return `<div id="submitDiv">
            <button id="submitPokemon">Submit</button>
          </div>`;
}

window.onload = display151();
