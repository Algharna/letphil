### **🔥 50 Exercises on Axios (Using Pokémon API)**

These exercises will strengthen your ability to work with **Axios** and **APIs**.

---

## **🔹 Basic GET Requests (1-10)**

1. Fetch and log the **name** of Pikachu.
2. Fetch and display the **height** of Charizard.
3. Fetch and log the **weight** of Bulbasaur.
4. Fetch and display the **base experience** of Snorlax.
5. Fetch and log the **Pokémon ID** of Eevee.
6. Fetch and display the **front sprite (image)** of Gengar.
7. Fetch and log all **abilities** of Jigglypuff.
8. Fetch and display the **types** of Dragonite.
9. Fetch and log the **first move** listed for Mewtwo.
10. Fetch and display the **evolution chain ID** of Charmander.

---

## **🔹 Handling Errors (11-20)**

11. Try fetching an **invalid Pokémon** and display an error message.
12. Fetch data and **show "Not Found"** when Pokémon doesn’t exist.
13. Fetch a Pokémon and **handle network errors (no internet)**.
14. Try fetching a Pokémon with an **empty query** and handle it.
15. Fetch data and **log the exact error status code** if the request fails.
16. Modify the error message to say **"Oops! Pokémon not found"** instead of default error text.
17. Fetch data and show **"Loading..."** while waiting for the response.
18. Add a **try-catch block** inside `.then().catch()` syntax instead of `async/await`.
19. Fetch a Pokémon and handle both **client-side (400) and server-side (500) errors** separately.
20. Fetch a Pokémon and retry **3 times** if the request fails.

---

## **🔹 Making Multiple Requests (21-30)**

21. Fetch **two Pokémon at the same time** and log their names.
22. Fetch and display the **weight difference** between Snorlax and Pikachu.
23. Fetch and log the **types of three Pokémon** at once.
24. Fetch **Bulbasaur, Charmander, and Squirtle** together and display their stats.
25. Fetch and display the **first two moves** of Jolteon and Flareon.
26. Fetch **three random Pokémon** using their ID numbers.
27. Fetch and display **Eevee's evolutions** by calling multiple endpoints.
28. Fetch and log the **speed stat** of Pikachu, Raichu, and Jolteon to compare.
29. Fetch the **heaviest** Pokémon among Dragonite, Gyarados, and Snorlax.
30. Fetch Pokémon **only if they are from Generation 1** (ID 1-151).

---

## **🔹 Modifying Data (31-40)**

31. Fetch a Pokémon and convert its **height from decimeters to meters** before displaying it.
32. Fetch and display a Pokémon's **weight in kilograms instead of hectograms**.
33. Fetch and log the **total base stats** of Charizard (sum of all stats).
34. Fetch and display the **strongest base stat** of Pikachu.
35. Fetch and display the **weakest base stat** of Gyarados.
36. Fetch and sort a Pokémon's **moves alphabetically** before displaying them.
37. Fetch and list **only physical moves** (filter out special moves).
38. Fetch a Pokémon and capitalize its **name and type names** before displaying.
39. Fetch and log a Pokémon's **height, but round it to 2 decimal places**.
40. Fetch a Pokémon and display its **abilities in reverse order**.

---

## **🔹 Interactive Pokémon Pokédex (41-50)**

41. Modify the Pokédex to allow **searching by partial names** (e.g., "char" should find Charizard).
42. Add a **"Random Pokémon"** button that fetches a random Pokémon.
43. Create a button that fetches **10 random Pokémon and displays them**.
44. Modify the Pokédex to display **shiny sprites** instead of regular ones.
45. Add a **search history** feature that keeps track of the last 5 Pokémon searched.
46. Display Pokémon’s **type color as background** (e.g., Fire = Red).
47. Modify the Pokédex to display **"Legendary" or "Mythical"** status.
48. Add a **dark mode** toggle for the Pokédex UI.
49. Create a **"Compare Pokémon"** button to display stats of two Pokémon side by side.
50. Add a **Pokémon cry (sound)** that plays when a Pokémon is displayed.

---

### **📌 How to Approach These Exercises**

1. **Use `axios.get()`** to fetch data from the API.
2. **Extract necessary information** from the JSON response (`response.data`).
3. **Modify the data if needed** (convert height, filter moves, etc.).
4. **Handle errors properly** (`try-catch` or `.catch()`).
5. **Display the data** (log it or update the UI).

Want solutions for any of these? Let me know! 🚀
