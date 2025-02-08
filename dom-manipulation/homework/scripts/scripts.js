const subtractButton = document.getElementById("subtract");
const additionButton = document.getElementById("addition");
let counter = 0;
const counterText = document.getElementById("counterText");
counterText.innerText = counter;

subtractButton.addEventListener("click", function () {
  counter -= 1;
  console.log(counter);
  counterText.innerText = counter;
});
additionButton.addEventListener("click", function () {
  counter += 1;
  console.log(counter);
  counterText.innerText = counter;
});
