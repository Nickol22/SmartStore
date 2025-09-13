let cart = [];
let total = 0;

const cartList = document.getElementById("cart-list");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");

// Добавление в корзину
document.querySelectorAll(".cart-btn").forEach(button => {
    button.addEventListener("click", (e) => {
        const productCard = e.target.closest(".product-card");
        const name = productCard.querySelector("h3").innerText;
        const price = parseInt(productCard.querySelector("p").innerText.replace("Цена: ", "").replace("$", ""));
        
        cart.push({ name, price });
        total += price;

        updateCart();
    });
});

// Купить (имитация оплаты)
document.querySelectorAll(".buy-btn").forEach(button => {
    button.addEventListener("click", () => {
        alert("Перенаправление на страницу оплаты...");
    });
});

// Оплата корзины
checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Ваша корзина пуста!");
        return;
    }
    alert(`Оплата прошла успешно! Сумма: ${total}$`);
    cart = [];
    total = 0;
    updateCart();
});

function updateCart() {
    cartList.innerHTML = "";
    cart.forEach(item => {
        let li = document.createElement("li");
        li.innerText = ${item.name} - ${item.price}$;
        cartList.appendChild(li);
    });
    cartTotal.innerText = Итого: ${total}$;
}
