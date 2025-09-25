const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const addProductButton = document.getElementById("add-product");
const cart = document.getElementById("cart");
const totalPriceSpan = document.getElementById("total-price");

let totalPrice = 0;
let cartArray = [];

// Hook up button to even listener
addProductButton.addEventListener("click", addItem);

// Function to add item
function addItem() {
  const input = productNameInput.value;
  const price = productPriceInput.value;
  let convertedPrice = parseFloat(price);
  console.log(convertedPrice);

  const itemObject = {
    input,
    convertedPrice,
  };

  cartArray.push(itemObject);
  updateTotalPrice(convertedPrice);
  console.log(cartArray);
}

// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice;
}

// Function to remove an item
function removeItem(event) {
  const item = event.target.closest("li");
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

// [ ] Add items to their cart dynamically.<br>
// [ ] View the items they have added, along with their prices and quantities.<br>
// [ ] Update the quantity of items in the cart, reflecting real-time price changes.<br>
// [ ] Remove items from the cart.
