const BASE = "https://api.scryfall.com";
const resultsDiv = document.getElementById("results");

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

    // console.log(res.data.data);
    if (!exactMatch) {
      for (let i = 0; i < res.data.data.length; i++) {
        const current = res.data.data[i];
        const cardObj = createCardObj(current.name, current.image_uris);
        resultsDiv.innerHTML += displayResults(
          cardObj.card_name,
          cardObj.card_img?.normal ?? ""
        );

        setTimeout(() => {
          const favoriteBtn = document.querySelector(
            `#fav-${CSS.escape(cardObj.card_name)}`
          );
          if (favoriteBtn) {
            favoriteBtn.addEventListener("click", () =>
              addToFavorites(cardObj)
            );
          }
        }, 0);
      }
    } else {
      const cardObj = createCardObj(exactMatch.name, exactMatch.image_uris);
      resultsDiv.innerHTML += displayResults(
        cardObj.card_name,
        cardObj.card_img?.normal ?? ""
      );
      setTimeout(() => {
        const favoriteBtn = document.querySelector(
          `#fav-${CSS.escape(cardObj.card_name)}`
        );
        if (favoriteBtn) {
          favoriteBtn.addEventListener("click", () => addToFavorites(cardObj));
        }
      }, 0);
    }
  } catch (error) {
    console.error("error =", error);
    alert(error.toString());
  }
}
//search function onclick-also make it Enter
searchBtn.onclick = async function () {
  if (cardSearch.value.trim() === "") {
    alert("Enter a valid card.");
    return;
  }
  search(cardSearch.value);
};

cardSearch.addEventListener("keydown", async function (event) {
  if (event.key === "Enter") {
    if (cardSearch.value.trim() === "") {
      alert("Enter a valid card.");
      return;
    }
    search(cardSearch.value);
  }
});

async function search() {
  const loader = document.createElement("div");
  loader.id = "loader";
  try {
    resultsDiv.innerHTML = "";
    resultsDiv.appendChild(loader);
    const value = cardSearch.value;
    await searchCard(value);
    cardSearch.value = "";
  } catch (error) {
    console.error("error =", error);
  } finally {
    console.log("TEST!");
    document.getElementById("loader").remove();
  }
}

//function for getting 1 Random Card
async function getRandomCards() {
  try {
    const res = await axios.get(paths.random, { headers });

    const cardObj = createCardObj(res.data.name, res.data.image_uris);
    resultsDiv.innerHTML = displayResults(
      cardObj.card_name,
      cardObj.card_img?.normal ?? ""
    );

    const favoriteBtn = document.querySelector(
      `#fav-${CSS.escape(cardObj.card_name)}`
    );
    favoriteBtn.addEventListener("click", () => addToFavorites(cardObj));
  } catch (error) {
    // handle error better
    alert(error.toString());
  }
}
//

//Function to create card object
function createCardObj(name, img) {
  const cardObj = {
    card_name: name,
    card_img: img,
  };
  return cardObj;
}

//Handle cards & localstorage
function addToFavorites(obj) {
  let favorites = JSON.parse(localStorage.getItem("mtg")) || [];
  favorites.push(obj);
  localStorage.setItem("mtg", JSON.stringify(favorites));
}

//remove card from favorites
function removeFromFavorites(cardName) {
  const favorites = JSON.parse(localStorage.getItem("mtg")) || [];

  const updatedFavorites = favorites.filter(
    (card) => card.card_name !== cardName
  );
  localStorage.setItem("mtg", JSON.stringify(updatedFavorites));
  //rerender favorites
  displayFavorites();
}

//renders favorites from localstorage
function displayFavorites() {
  const favorites = JSON.parse(localStorage.getItem("mtg")) || [];
  resultsDiv.innerHTML = "";

  favorites.forEach((card) => {
    const cardObj = createCardObj(card.card_name, card.card_img);
    console.log(cardObj);
    //display localstorage
    resultsDiv.innerHTML += renderFavorites(
      cardObj.card_name,
      cardObj.card_img?.normal ?? ""
    );

    //Remove from localstorage
    setTimeout(() => {
      const favoriteBtn = document.querySelector(
        `#fav-${CSS.escape(cardObj.card_name)}`
      );
      if (favoriteBtn) {
        favoriteBtn.addEventListener("click", () =>
          removeFromFavorites(cardObj.card_name)
        );
      }
    }, 0);
  });
}

//display Results
function displayResults(name, img) {
  return `
      <h2>${name}</hr><button id="fav-${name}" class="favorites-btn"> +</button>
      <br />
      <img src="${
        img ||
        `https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg`
      }" alt="${name}" />
      `;
}

function renderFavorites(name, img) {
  return `
      <h2>${name}</hr> <button id="fav-${name}" class="favorites-btn">-</button>
      <br />
      <img src="${
        img ||
        `https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg`
      }" alt="${name}" />
      `;
}
