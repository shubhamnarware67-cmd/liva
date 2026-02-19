// Product Data
const allProducts = [
    { id: 1, name: "Smartphone", category: "Electronics", price: 15999, img: "https://via.placeholder.com/250x200/ffd480/000?text=Smartphone" },
    { id: 2, name: "Laptop", category: "Electronics", price: 55999, img: "https://via.placeholder.com/250x200/b3d9ff/000?text=Laptop" },
    { id: 3, name: "Wireless Headphones", category: "Accessories", price: 2999, img: "https://via.placeholder.com/250x200/e6b3ff/000?text=Headphones" },
    { id: 4, name: "Men’s Jacket", category: "Fashion", price: 2499, img: "https://via.placeholder.com/250x200/ffb3b3/000?text=Jacket" },
    { id: 5, name: "Running Shoes", category: "Fashion", price: 3499, img: "https://via.placeholder.com/250x200/b3ffb3/000?text=Shoes" },
    { id: 6, name: "Smartwatch", category: "Accessories", price: 4999, img: "https://via.placeholder.com/250x200/ffd480/000?text=Smartwatch" },
    { id: 7, name: "Bluetooth Speaker", category: "Electronics", price: 1899, img: "https://via.placeholder.com/250x200/b3d9ff/000?text=Speaker" },
    { id: 8, name: "Stylish Backpack", category: "Accessories", price: 1599, img: "https://via.placeholder.com/250x200/e6b3ff/000?text=Backpack" },
    { id: 9, name: "Home Lamp", category: "Home", price: 899, img: "https://via.placeholder.com/250x200/ffe6b3/000?text=Lamp" },
    { id: 10, name: "Women’s Handbag", category: "Fashion", price: 2799, img: "https://via.placeholder.com/250x200/ffb3b3/000?text=Handbag" },
    { id: 11, name: "Wall Clock", category: "Home", price: 799, img: "https://via.placeholder.com/250x200/b3ffb3/000?text=Clock" },
    { id: 12, name: "Wireless Mouse", category: "Electronics", price: 599, img: "https://via.placeholder.com/250x200/b3d9ff/000?text=Mouse" },
];

// Display Products
const grid = document.getElementById("productGrid");
function loadProducts(items) {
    grid.innerHTML = "";
    items.forEach(p => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p class="category">${p.category}</p>
      <p class="price">₹${p.price.toLocaleString()}</p>
      <button onclick="addToCart(${p.id})">Add to Cart 🛒</button>
    `;
        grid.appendChild(card);
    });
}

// Filter Function
function filterProducts(category) {
    const buttons = document.querySelectorAll(".filter-buttons button");
    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    if (category === "All") loadProducts(allProducts);
    else {
        const filtered = allProducts.filter(p => p.category === category);
        loadProducts(filtered);
    }
}

// Add to Cart Logic (using localStorage)
function addToCart(id) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = allProducts.find(p => p.id === id);
    const existing = cart.find(c => c.id === id);
    if (existing) existing.qty += 1;
    else cart.push({ ...item, qty: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.name} added to cart!`);
}

// Initialize
window.onload = () => {
    loadProducts(allProducts);
};
