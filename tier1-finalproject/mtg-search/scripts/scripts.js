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
    //Displays Result
    document.querySelector("#results pre").innerHTML = displayResults(
      cardObj.card_name,
      cardObj.card_img
    );
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

    const exactMatch = res.data.data.find((c) => c.name === q);

    if (!exactMatch) {
      for (let i = 0; i < res.data.data.length; i++) {
        const current = res.data.data[i];
        document.querySelector("#results pre").innerHTML += displayResults(
          current.name,
          current.image_uris?.normal ?? ""
        );
      }
    } else {
      document.querySelector("#results pre").innerHTML += displayResults(
        exactMatch.name,
        exactMatch.image_uris?.normal ?? ""
      );
    }
  } catch (error) {
    console.error("error =", error);
    alert(error.toString());
  }
}

search.onclick = async function () {
  document.querySelector("#results pre").innerHTML = "";
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

//display Results
function displayResults(name, img) {
  if (img) {
    return `
      <h2>${name}</hr>
      <br />
      <img src="${img}" alt="${name}" />
      `;
  } else {
    return `<h2>${name}</h2>`;
  }
}

// getRandomCards();
