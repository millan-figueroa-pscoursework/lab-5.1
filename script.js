const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const addProductButton = document.getElementById("add-product");
const cartUL = document.getElementById("cart");
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
  const price = parseFloat(item.dataset.convertedPrice);
  updateTotalPrice(-price);
  item.remove();
}

// ---- RENDERCART Function to show cart
function renderCart() {
  cartUL.innerHTML = "";
  for (const item of cartArray) {
    const li = document.createElement("li");
    li.textContent = `${item.input} 🛒 $${item.convertedPrice}`;
    li.addEventListener("click", removeItem);
    cartUL.appendChild(li);
  }
}
