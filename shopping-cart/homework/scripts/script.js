shoppingCartItems = [];
window.onload = renderCartUI();

//Render Shopping Cart-------------------------------
function renderCartUI() {
  // const getCart = localStorage.getItem("shopping-cart");
  // if (getCart) shoppingCartItems = JSON.parse(getCart);

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
      current.image,
      current.totalPrice
    );
    // current.totalPrice = current.totalPrice[i]++;
    console.log(current.totalPrice);
    const pTotalPrice = document.getElementById("pTotalPrice");
    // current.totalPrice += current.quantity * current.price;
    pTotalPrice.innerText = current.totalPrice;
    productContainer.innerHTML += listItem;
    // productContainer.innerHTML += totalPrice;
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
    const totalPrice = price * quantity;

    shoppingCartItems.push({
      name,
      price,
      quantity,
      image,
      totalPrice,
    });
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCartItems));
    productName.value = "";
    productPrice.value = "";
    productImage.value = "";
    renderCartUI();
  }
});

function decreaseQuantity(idx, price, quantity, totalPrice) {
  quantity = shoppingCartItems[idx].quantity;
  price = shoppingCartItems[idx].price;
  quantity--;
  if (quantity === 0) {
    shoppingCartItems.splice(idx, 1);
    renderCartUI();
  } else {
    totalPrice = price * quantity;
    shoppingCartItems[idx].quantity = quantity;
    shoppingCartItems[idx].totalPrice = totalPrice;
    renderCartUI();
  }
}

function increaseQuantity(idx, price, quantity, totalPrice) {
  quantity = shoppingCartItems[idx].quantity;
  price = shoppingCartItems[idx].price;
  quantity++;
  totalPrice = price * quantity;
  shoppingCartItems[idx].quantity = quantity;
  shoppingCartItems[idx].totalPrice = totalPrice;
  renderCartUI();
}
//Clears localStorage and reloads page---------
function clearCart() {
  localStorage.clear();
  alert("Cart Cleared!");
  window.location.reload();
}
