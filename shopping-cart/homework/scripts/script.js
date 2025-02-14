let totalPrice = 0;
shoppingCartItems = [];

//Render Shopping Cart-------------------------------
function renderCartUI() {
  const getCart = localStorage.getItem("shopping-cart");
  if (getCart) shoppingCartItems = JSON.parse(getCart);

  productContainer.innerHTML = "";
  productContainer.innerHTML = `
      <table>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Product</th>
            </tr>
      </table>`;
  for (let i = 0; i < shoppingCartItems.length; i++) {
    const current = shoppingCartItems[i];
    const listItem = ListItem(
      i,
      current.name,
      current.price,
      current.quantity,
      current.image
    );
    totalPrice = current.price * current.quantity;
    const pTotalPrice = document.getElementById("pTotalPrice");
    pTotalPrice.innerText = totalPrice;
    productContainer.innerHTML += listItem;
  }
}

const ListItem = (idx, name, price, quantity, image) => {
  return `<table id="shoppingCart">
            <tr>  
              <td>${name}</td>
              <td>$${price}</td>
              <td>
                <button onclick="decreaseQuantity(${idx}, ${quantity})">-</button>
                ${quantity}
                <button onclick="increaseQuantity(${idx}, ${quantity})">+</button>
              </td>
              <td><img src="${image}" />
                  $${price * quantity}
              </td>
              </tr>
        </table>`;
};

//Add item to cart-----------------
addButton.addEventListener("click", () => {
  if (
    productName.value.trim() == "" ||
    productPrice.value.trim() == "" ||
    productImage.value.trim() == ""
  ) {
    alert("Enter a valid product.");
  } else {
    const name = productName.value;
    const price = productPrice.value;
    let quantity = 1;
    const image = productImage.value;

    shoppingCartItems.push({
      name,
      price,
      quantity,
      image,
    });
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCartItems));
    productName.value = "";
    productPrice.value = "";
    productImage.value = "";
    renderCartUI();
  }
});

function decreaseQuantity(idx, quantity) {
  quantity = shoppingCartItems[idx].quantity;
  quantity--;
  if (quantity === 0) {
    shoppingCartItems.splice(idx, 1);
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCartItems));
    renderCartUI();
  } else {
    shoppingCartItems[idx].quantity = quantity;
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCartItems));
    renderCartUI();
  }
}

function increaseQuantity(idx, quantity) {
  quantity = shoppingCartItems[idx].quantity;
  quantity++;
  shoppingCartItems[idx].quantity = quantity;
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCartItems));
  renderCartUI();
}
//Clears localStorage and reloads page---------
function clearCart() {
  localStorage.clear();
  alert("Cart Cleared!");
  window.location.reload();
}

window.onload = renderCartUI();
