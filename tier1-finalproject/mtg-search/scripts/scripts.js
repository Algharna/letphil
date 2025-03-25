const BASE = "https://api.scryfall.com";

const paths = {
  random: "/cards/random",
  search: "/cards/search",
};

const headers = {
  "User-Agent": Navigator.userAgent,
  Accept: "*/*",
};

axios.defaults.baseURL = BASE;

//function for search card
async function searchCard(q) {
  try {
    const res = await axios.get(
      paths.search,
      {
        params: { q },
      },
      { headers }
    );
    console.log(res.data.data);

    const exactMatch = res.data.data.find(
      (c) => c.name.toLowerCase() === q.toLowerCase()
    );

    console.log("exactMatch", exactMatch);
    // console.log(res.data.data);
    if (!exactMatch) {
      for (let i = 0; i < res.data.data.length; i++) {
        const current = res.data.data[i];
        const cardObj = createCardObj(
          current.name,
          current.image_uris,
          current.layout
        );

        if (cardObj.card_layout === "transform") {
          document.querySelector("#results div").innerHTML += displayResults(
            cardObj.card_name
          );
        } else if (cardObj.card_layout !== "transform") {
          document.querySelector("#results div").innerHTML += displayResults(
            cardObj.card_name,
            cardObj.card_img?.normal ?? ""
          );
        }
      }
    } else {
      const cardObj = createCardObj(
        exactMatch.name,
        exactMatch.image_uris,
        exactMatch.layout
      );
      document.querySelector("#results div").innerHTML = displayResults(
        cardObj.card_name,
        cardObj.card_img?.normal ?? ""
      );
    }
  } catch (error) {
    console.error("error =", error);
    alert(error.toString());
  }
}
//function for getting 1 Random Card
async function getRandomCards() {
  try {
    const res = await axios.get(paths.random, { headers });

    const cardObj = createCardObj(
      res.data.name,
      res.data.image_uris,
      res.data.layout
    );
    console.log(cardObj);
    //Displays Result
    console.log(cardObj.card_layout);
    if (cardObj.card_layout === "transform") {
      document.querySelector("#results div").innerHTML = displayResults(
        cardObj.card_name
      );
    } else if (cardObj.card_layout !== "transform") {
      document.querySelector("#results div").innerHTML = displayResults(
        cardObj.card_name,
        cardObj.card_img?.normal ?? ""
      );
    }
    favorites.addEventListener("click", addToFavorites(cardObj));
  } catch (error) {
    // handle error better
    alert(error.toString());
  }
}
search.onclick = async function () {
  if (cardSearch.value.trim() === "") {
    alert("Enter a valid card.");
    return;
  }
  const loader = document.createElement("div");
  loader.classList.add("loader");
  try {
    document.querySelector("#results div").innerHTML = "";
    document.querySelector("#results div").appendChild(loader);
    const value = cardSearch.value;
    await searchCard(value);
    cardSearch.value = "";
  } catch (error) {
    console.error("error =", error);
  } finally {
    document.querySelector("#results div").firstElementChild.remove();
  }
};

function createCardObj(name, img, layout) {
  const cardObj = {
    card_name: name,
    card_img: img,
    card_layout: layout,
  };
  return cardObj;
}
//add card to favorites in localstorage
function addToFavorites(Obj) {
  localStorage.setItem("mtg", JSON.stringify(Obj));
}

const favoriteCards = localStorage.getItem("mtg");
//renders favorites from localstorage
function displayFavorites() {
  console.log(favoriteCards);
}

//display Results
function displayResults(name, img) {
  if (img) {
    return `
      <h2>${name}</hr> <button id="favorites">+</button>
      <br />
      <img src="${img}" alt="${name}" />
      `;
  } else {
    return `<h2>${name}</h2>
    <img src="https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg" alt="${name}" />`;
  }
}
