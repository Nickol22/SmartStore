let cart = [];

function addToCart(product) {
  cart.push(product);
  updateCart();
}

function updateCart() {
  let cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";
  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    cartList.appendChild(li);
  });
}
