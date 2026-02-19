// Theme toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Search function
function searchProduct() {
  const query = document.getElementById("searchBox").value.trim().toLowerCase();
  if (query === "") {
    alert("Please type something to search!");
  } else {
    alert(`Showing results for "${query}"`);
    // In real website, redirect to products.html?search=query
  }
}

// Auto-slider logic
let slider = document.getElementById("slider");
let isHovered = false;
slider.addEventListener("mouseover", () => (isHovered = true));
slider.addEventListener("mouseleave", () => (isHovered = false));

setInterval(() => {
  if (!isHovered) {
    slider.scrollBy({ left: 310, behavior: "smooth" });
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
    }
  }
}, 3000);
