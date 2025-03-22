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

// axios.get()

// fetch(`${base}${paths.random}`)
//function for getting 1 Random Card
async function getRandomCards() {
  try {
    const res = await axios.get(paths.random, { headers });
    console.log(res.data);
    const cardObj = createCardObj(res.data.name, res.data.image_uris.normal);
    console.log(cardObj);
    document.querySelector("#results pre").innerHTML = `
    <h2>${cardObj.card_name}</hr>
    <br />
    <img src="${cardObj.card_img}" alt="${cardObj.card_name}" />
    `;
  } catch (error) {
    // handle error better
    alert(error.toString());
  }
}
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
    console.log(res.data);

    const cardObj = createCardObj(res.data.name, res.data.image_uris.normal);
    document.querySelector("#results pre").innerHTML = `
    <h2>${cardObj.card_name}</hr>
    <br />
    <img src="${cardObj.card_img}" alt="${cardObj.card_name}" />
    `;
  } catch (error) {
    alert(error.toString());
  }
}

search.onclick = async function () {
  const value = cardSearch.value;
  await searchCard(value);
  cardSearch.value = "";
};

function createCardObj(name, img) {
  const cardObj = {
    card_name: name,
    card_img: img,
  };
  return cardObj;
}

// getRandomCards();
