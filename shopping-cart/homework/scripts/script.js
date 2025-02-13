shoppingCartItems = [];
window.onload = renderCartUI();

function renderCartUI() {
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
    const totalPrice = `<h2>Total Price: $ ${current.price * current.quantity}`;
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

addButton.addEventListener("click", () => {
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
  renderCartUI();
});

function decreaseQuantity(idx, price, quantity) {
  quantity--;
  if (quantity === 0) {
    shoppingCartItems.splice(idx, 1);
    renderCartUI();
  } else {
    shoppingCartItems[idx].quantity = quantity;
    renderCartUI();
  }
  console.log(quantity);
}

function increaseQuantity(idx, quantity) {
  quantity++;
  shoppingCartItems[idx].quantity = quantity;
  renderCartUI();
}
