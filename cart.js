const cartItems = document.querySelector(".cart-items");

function displayCartItems() {
  const items = JSON.parse(localStorage.getItem("cart"));
  items.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart_item";
    cartItem.innerHTML = `
    <div class="cart_item_id">${item.id}</div>
              <span class="cart_img_title">${item.title}</span>
              <img src="${item.image}" alt="${item.title}" class="cart_image" />
              <div class="cart_item_price">${item.price}</div>
              <div class="cart_item_delete">Delete</div>`;
    cartItems.appendChild(cartItem);
  });
}

displayCartItems();
