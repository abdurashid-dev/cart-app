window.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".open"),
    buttons = document.querySelectorAll("button"),
    products = document.querySelectorAll(".product");

  function createCart() {
    let cart = document.createElement("div"),
      field = document.createElement("div"),
      btn = document.createElement("button"),
      h2 = document.createElement("h2");

    h2.textContent = "Your Cart";
    btn.textContent = "Close Cart";

    cart.appendChild(h2);
    cart.appendChild(field);
    cart.appendChild(btn);
    document.body.appendChild(cart);
    cart.classList.add("cart");
    field.classList.add("cart-field");
    btn.classList.add("close");
  }
  createCart();

  const cart = document.querySelector(".cart"),
    btn = document.querySelector(".close"),
    field = document.querySelector(".cart-field");

  openBtn.addEventListener("click", () => {
    cart.style.display = "block";
  });

  btn.addEventListener("click", () => {
    cart.style.display = "none";
  });

  buttons.forEach((item, i) => {
    item.addEventListener("click", () => {
      let cloneItem = products[i];
      field.appendChild(cloneItem);
      buttons[i].remove();
    });
  });
});
