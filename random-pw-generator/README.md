## Objective

By the end of this lesson, students will understand how to use `Math.random()` and `Math.floor()` to generate random characters from strings and will be able to create a random password generator using HTML, CSS, and JavaScript.

## Lesson Outline

### Introduction

- the purpose of generating random characters.
- Introduce `Math.random()` and `Math.floor()` functions in JavaScript.
  - `Math.random()`: Generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
  - `Math.floor()`: Rounds a number down to the nearest integer.

### Math.random() and Math.floor() (15 minutes)

- Explain the syntax and usage of `Math.random()` and `Math.floor()`.
- Demonstrate how to combine these functions to get a random index for a string.

#### Example Code:

```javascript
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const randomIndex = Math.floor(Math.random() * characters.length);
const randomCharacter = characters[randomIndex];
console.log(randomCharacter);
```

```js
const chars =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-=_+1234567890";

function randomIdx() {
  return Math.floor(Math.random() * chars.length);
}

function getRandomPassword(length) {
  let pw = "";
  for (let i = 0; i < length; i++) {
    pw += chars[randomIdx()];
  }
  return pw;
}
```

### Practice Exercise (10 minutes)

- Have students write a function that returns a random character from a given string.
- Encourage students to test their function with different strings.

#### Exercise Code:

```javascript
function getRandomCharacter(str) {
  const randomIndex = Math.floor(Math.random() * str.length);
  return str[randomIndex];
}

console.log(
  getRandomCharacter(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  )
);
```

### Project: Random Password Generator (25 minutes)

- the project: Create a random password generator using HTML, CSS, and JavaScript.
- Provide a basic structure for the HTML and CSS.
- write the JavaScript to generate a random password.

#### HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Random Password Generator</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <h1>Random Password Generator</h1>
      <button id="generate">Generate Password</button>
      <p id="password"></p>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

#### CSS:

```css
body {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.container {
  text-align: center;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
```

#### JavaScript:

```javascript
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generatePassword(length) {
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

document.getElementById("generate").addEventListener("click", () => {
  const password = generatePassword(12);
  document.getElementById("password").textContent = password;
});
```

### Conclusion

- Recap the key points of the lesson.
  - Usage of `Math.random()` and `Math.floor()`.
  - Generating random characters and passwords.
- experiment with different character sets and password lengths.
- Answer any remaining questions.

## Additional Resources

- [MDN Web Docs: Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [MDN Web Docs: Math.floor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
