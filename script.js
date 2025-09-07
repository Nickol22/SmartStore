document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".buy-btn");
  const form = document.getElementById("orderForm");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Товар добавлен в корзину (пока корзина условная)");
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Заказ успешно оформлен!");
    form.reset();
  });
});
