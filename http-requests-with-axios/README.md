### **⏳ Lesson Breakdown**

- What is Axios? Why use it over `fetch()`?
- How to make GET requests with Axios
- Handling errors properly
- Making multiple requests
- Building a Pokémon Pokédex with Axios

---

## **🔹 1. What is Axios?**

Axios is a **JavaScript library** for making HTTP requests. It works in both the browser and Node.js.

### **✅ Why Use Axios Instead of `fetch()`?**

| Feature                       | Axios ✅ | Fetch ❌                         |
| ----------------------------- | -------- | -------------------------------- |
| Auto-converts JSON            | ✅ Yes   | ❌ No (requires `.json()`)       |
| Handles errors automatically  | ✅ Yes   | ❌ No (must check `response.ok`) |
| Supports request cancellation | ✅ Yes   | ❌ No                            |
| Works with older browsers     | ✅ Yes   | ❌ No (fetch needs polyfills)    |
| Shorter syntax                | ✅ Yes   | ❌ No                            |

📌 **Axios makes working with APIs easier and reduces boilerplate code.**

---

## **🔹 2. How to Make GET Requests with Axios**

### **Basic GET Request Example**

```javascript
axios
  .get("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => {
    console.log(response.data); // No need for .json()
  })
  .catch((error) => {
    console.error("Error fetching Pokémon:", error);
  });
```

### **With Async/Await**

```javascript
async function getPokemon() {
  try {
    let response = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu");
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
  }
}
getPokemon();
```

📌 **No need for `if (!response.ok) throw new Error()`**, Axios **automatically rejects failed requests**.

---

## **🔹 3. Handling Errors Properly**

APIs can fail due to:

- **Invalid Pokémon names** (`404 Not Found`)
- **Server issues** (`500 Internal Server Error`)
- **No internet connection**

### **Handling Errors with Axios**

```javascript
async function fetchPokemon(name) {
  try {
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    console.log(response.data);
  } catch (error) {
    if (error.response) {
      console.error(`Error ${error.response.status}: Pokémon not found`);
    } else if (error.request) {
      console.error("No response received");
    } else {
      console.error("Error", error.message);
    }
  }
}
fetchPokemon("invalidPokemon");
```

📌 **`error.response` vs `error.request` vs `error.message`**

- `error.response` → API responded with an error (`404` or `500`).
- `error.request` → No response received (bad internet).
- `error.message` → Other unexpected errors.

---

## **🔹 4. Making Multiple Requests**

### **Fetching Two Pokémon at the Same Time**

```javascript
async function getTwoPokemon(pokemon1, pokemon2) {
  try {
    let [poke1, poke2] = await Promise.all([
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon1}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon2}`),
    ]);

    console.log(poke1.data.name, poke2.data.name);
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
  }
}
getTwoPokemon("bulbasaur", "charmander");
```

📌 **`Promise.all()` makes both requests at the same time**, making it **faster** than waiting for one request to finish before starting another.

---

## **🔹 5. Building a Full Pokédex with Axios**

### **🚀 Features**

✅ **Search by name or ID**  
✅ **Browse Pokémon with Next/Prev buttons**  
✅ **Show Pokémon image, type, height, weight, and abilities**  
✅ **Handles errors correctly**

---

### **📜 Full Pokédex Code (Axios Version)**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pokédex (Axios Version)</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <style>
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        background-color: #f4f4f4;
      }
      .container {
        max-width: 400px;
        margin: 20px auto;
        padding: 20px;
        background: white;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      }
      input {
        padding: 8px;
        width: 60%;
        margin-bottom: 10px;
      }
      button {
        padding: 8px;
        margin: 5px;
        border: none;
        background: #ffcb05;
        cursor: pointer;
        border-radius: 5px;
      }
      .card {
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 10px;
        margin-top: 10px;
        background: #fff;
      }
      img {
        width: 120px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>Pokédex (Axios)</h2>
      <input type="text" id="search" placeholder="Enter Pokémon name or ID" />
      <button onclick="fetchPokemon()">Search</button>
      <button onclick="prevPokemon()">◀ Previous</button>
      <button onclick="nextPokemon()">Next ▶</button>

      <div id="pokemonCard" class="card"></div>
    </div>

    <script>
      let currentPokemonId = 1; // Start with Bulbasaur

      async function fetchPokemon(pokemon = currentPokemonId) {
        let search = document
          .getElementById("search")
          .value.toLowerCase()
          .trim();
        let query = search ? search : pokemon;
        let card = document.getElementById("pokemonCard");

        try {
          let response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${query}`
          );
          let data = response.data;
          currentPokemonId = data.id; // ✅ Update ID after search

          // ✅ Clear search input after fetching
          document.getElementById("search").value = "";

          card.innerHTML = `
                    <h3>${data.name.toUpperCase()} (#${data.id})</h3>
                    <img src="${data.sprites.front_default}" alt="${data.name}">
                    <p><strong>Type:</strong> ${data.types
                      .map((t) => t.type.name)
                      .join(", ")}</p>
                    <p><strong>Height:</strong> ${data.height / 10} m</p>
                    <p><strong>Weight:</strong> ${data.weight / 10} kg</p>
                    <p><strong>Abilities:</strong> ${data.abilities
                      .map((a) => a.ability.name)
                      .join(", ")}</p>
                `;
        } catch (error) {
          card.innerHTML = `<p style="color:red;">Pokémon not found</p>`;
        }
      }

      function prevPokemon() {
        if (currentPokemonId > 1) {
          currentPokemonId--;
          fetchPokemon(currentPokemonId);
        }
      }

      function nextPokemon() {
        currentPokemonId++;
        fetchPokemon(currentPokemonId);
      }

      fetchPokemon(); // Load first Pokémon on page load
    </script>
  </body>
</html>
```

---

### **🎯 Summary**

- Axios **simplifies API requests** and reduces boilerplate code.
- **Better error handling** and **automatic JSON parsing** make it powerful.
- We built a **Pokédex using Axios** to search, navigate, and display Pokémon data.

🚀 Now you can use Axios confidently! Let me know if you need more exercises!

### docs

- https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
