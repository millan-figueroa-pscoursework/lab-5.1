const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const addProductButton = document.getElementById("add-product");
const cart = document.getElementById("cart");
const totalPriceSpan = document.getElementById("total-price");
// const item = document.getElementsByTagName("li");

let totalPrice = 0;
let cartArray = [];

// Hook up button to even listener
addProductButton.addEventListener("click", addItem);

// ---- ADDITEM Function to add item
function addItem() {
  const input = productNameInput.value;
  const price = productPriceInput.value;
  const convertedPrice = parseFloat(price);

  const itemObject = {
    input,
    convertedPrice,
  };

  cartArray.push(itemObject);
  updateTotalPrice(convertedPrice);
  renderCart();
  console.log(cartArray);
}

// ---- UPDATETOTALPRICE Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice;
}

// ---- REMOVEITEM Function to remove an item
function removeItem(event) {
  const item = event.target.closest("li");
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

// ---- RENDERCART Function to show cart
function renderCart() {
  cart.innerHTML = "";
  for (const item of cartArray) {
    const li = document.createElement("li");
    li.textContent = `${item.input} 🛒 $${item.convertedPrice}`;
    li.addEventListener("click", removeItem);
    cart.appendChild(li);
  }
}

// [x] Add items to their cart dynamically.<br>
// [x] View the items they have added, along with their prices and quantities.<br>
// [x] Update the quantity of items in the cart, reflecting real-time price changes.<br>
// [ ] Remove items from the cart.
