import { menuArray } from "./data.js";

const menuEl = document.getElementById("menu");
const cartEl = document.getElementById("cart");
const totalEl = document.getElementById("total");

let cart = [];

// Render Menu
function renderMenu() {
    menuEl.innerHTML = menuArray.map(item => `
        <div class="menu-item">
            <div>
                <h3>${item.emoji} ${item.name}</h3>
                <p>${item.ingredients.join(", ")}</p>
                <h4>$${item.price}</h4>
            </div>
            <button data-id="${item.id}">+</button>
        </div>
    `).join("");
}

// Render Cart
function renderCart() {
    if (cart.length === 0) {
        cartEl.innerHTML = "<p>No items yet</p>";
        totalEl.innerHTML = "";
        return;
    }

    cartEl.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${item.name}</span>
            <div>
                <span>$${item.price}</span>
                <button data-remove="${item.id}">Remove</button>
            </div>
        </div>
    `).join("");

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    totalEl.innerHTML = `Total: $${totalPrice}`;
}

// Add / Remove Event Listener
document.addEventListener("click", function(e) {
    if (e.target.dataset.id) {
        const selectedItem = menuArray.find(item => item.id == e.target.dataset.id);
        cart.push(selectedItem);
        renderCart();
    }

    if (e.target.dataset.remove) {
        cart = cart.filter(item => item.id != e.target.dataset.remove);
        renderCart();
    }
});

// Complete Order
document.getElementById("complete-order").addEventListener("click", function() {
    if (cart.length === 0) return;
    
    alert("Thank you for your order! 🎉");
    cart = [];
    renderCart();
});

renderMenu();