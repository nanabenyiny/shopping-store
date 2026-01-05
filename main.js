let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  document.getElementById("cartCount").innerText = cart.length;
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - $${item.price} 
    <button onclick="removeItem(${index})">❌</button>`;
    cartItems.appendChild(li);
  });
  document.getElementById("totalPrice").innerText = total;
}

function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  document.getElementById("cartCount").innerText = cart.length;
  renderCart();
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("show");
}
