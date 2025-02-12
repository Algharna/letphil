const productName = document.getElementById("totalPrice");
const productPrice = document.getElementById("totalPrice");
const cartList = document.getElementById("cartList");
const totalPrice = document.getElementById("totalPrice");

const shoppingCart = ["test"];

function renderListUI() {
  for (let i = 0; i < shoppingCart.length; i++) {
    const cartItem = document.createElement("li");
    // cartItem.id =
    cartItem.innerText = shoppingCart[i];
    cartList.appendChild(cartItem);
  }
}

function addProduct() {
  shoppingCart.push(cartList);
  console.log(shoppingCart);
}
renderListUI();
