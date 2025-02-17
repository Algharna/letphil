const characters = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  special: "!@#$%^&*()_+[]{}|;:',.<>?",
  numbers: "0123456789",
};

function passwordGenerator(length) {
  const allChars =
    characters.upper +
    characters.lower +
    characters.special +
    characters.numbers;
  let password = "";

  const checkUpper = upper.checked;
  const checkLower = lower.checked;
  const checkSpecial = special.checked;
  const checkNumbers = numbers.checked;
  let passwordCharacters = "";

  if (checkUpper) passwordCharacters += characters.upper;
  if (checkLower) passwordCharacters += characters.lower;
  if (checkSpecial) passwordCharacters += characters.special;
  if (checkNumbers) passwordCharacters += characters.numbers;
  if (!passwordCharacters)
    alert("Check at lease one box!"), numberInput.value === "";
  else {
    for (i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * passwordCharacters.length);
      password += passwordCharacters[randomIndex];
    }

    return password;
  }
}

generatePW.addEventListener("click", function () {
  const length = parseInt(numberInput.value);
  const password = passwordGenerator(length);
  const displayPassword = document.getElementById("displayPassword");
  if (
    numberInput.value === "" ||
    numberInput.value > 51 ||
    numberInput.value < 8
  )
    alert("Please enter a number between 8 - 50."), (numberInput.value = "");
  else {
    displayPassword.textContent = "Your password: " + password;
    numberInput.value = "";
  }
});
