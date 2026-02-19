// Sample products with more fields
const products=[
  {id:1,name:"Smartphone",category:"Electronics",price:15000,img:"https://via.placeholder.com/200?text=Phone",sale:true,rating:4.5},
  {id:2,name:"Laptop",category:"Electronics",price:55000,img:"https://via.placeholder.com/200?text=Laptop",sale:false,rating:4.7},
  {id:3,name:"Headphones",category:"Accessories",price:2000,img:"https://via.placeholder.com/200?text=Headphones",sale:true,rating:4.3},
  {id:4,name:"Shoes",category:"Fashion",price:2500,img:"https://via.placeholder.com/200?text=Shoes",sale:false,rating:4.0},
  {id:5,name:"Watch",category:"Accessories",price:3000,img:"https://via.placeholder.com/200?text=Watch",sale:true,rating:4.2},
  {id:6,name:"Jacket",category:"Fashion",price:4000,img:"https://via.placeholder.com/200?text=Jacket",sale:false,rating:4.1},
  {id:7,name:"Camera",category:"Electronics",price:35000,img:"https://via.placeholder.com/200?text=Camera",sale:false,rating:4.6},
  {id:8,name:"Bag",category:"Fashion",price:1500,img:"https://via.placeholder.com/200?text=Bag",sale:true,rating:4.3},
  {id:9,name:"Tablet",category:"Electronics",price:22000,img:"https://via.placeholder.com/200?text=Tablet",sale:false,rating:4.4},
  {id:10,name:"Sunglasses",category:"Accessories",price:1200,img:"https://via.placeholder.com/200?text=Sunglasses",sale:true,rating:4.2}
];

// Navbar user logic
const navLinks = document.getElementById('nav-user-links');
function updateNavbar(){
  const user = JSON.parse(localStorage.getItem('currentUser'));
  let cart = JSON.parse(localStorage.getItem('cart'))||[];
  if(user){
    navLinks.innerHTML=`
      <span style="color:#fff;">Hi, ${user.name}</span>
      <a href="cart.html">Cart (${cart.reduce((a,c)=>a+c.qty,0)})</a>
      <button onclick="logout()" class="logout-btn">Logout</button>
    `;
  }else{
    navLinks.innerHTML=`
      <a href="cart.html">Cart (${cart.reduce((a,c)=>a+c.qty,0)})</a>
      <a href="login.html">Login</a>
      <a href="signup.html">Signup</a>
    `;
  }
}

function logout(){
  localStorage.removeItem('currentUser');
  alert("Logged out!");
  updateNavbar();
}

// Banner slider logic
const banners=["https://via.placeholder.com/1200x400?text=Big+Sale","https://via.placeholder.com/1200x400?text=Up+to+50%25+Off","https://via.placeholder.com/1200x400?text=New+Arrivals"];
let bannerIndex=0;
const bannerImg=document.getElementById('banner-img');
function nextBanner(){bannerIndex=(bannerIndex+1)%banners.length; bannerImg.src=banners[bannerIndex];}

// Dropdown menu
function showDropdown(id){ document.getElementById(id).style.display='block'; }
function hideDropdown(id){ document.getElementById(id).style.display='none'; }

// Cart logic
function addToCart(id){
  let cart = JSON.parse(localStorage.getItem('cart'))||[];
  const item = cart.find(p=>p.id===id);
  if(item) item.qty+=1;
  else cart.push({...products.find(p=>p.id===id), qty:1});
  localStorage.setItem('cart',JSON.stringify(cart));
  updateNavbar();
  alert("Added to cart!");
}

// Product carousel
function loadCarousel(id,category){
  const container=document.getElementById(id);
  container.innerHTML='';
  const items=products.filter(p=>category==='All'?true:p.category===category);
  items.forEach(p=>{
    const div=document.createElement('div');
    div.classList.add('product');
    div.innerHTML=`
      <img src="${p.img}" alt="${p.name}">
      <h4>${p.name}</h4>
      <p>₹${p.price} ${p.sale?'<span class="sale-badge">SALE</span>':''}</p>
      <p>Rating: ${p.rating} ⭐</p>
      <button onclick="viewProduct(${p.id})">View</button>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

// View product
function viewProduct(id){ localStorage.setItem('viewProductId',id); window.location.href='product.html'; }

// Search
document.getElementById('search').addEventListener('input',e=>{
  const query=e.target.value.toLowerCase();
  const results=products.filter(p=>p.name.toLowerCase().includes(query));
  console.log(results);
});

// Initialize
window.onload=()=>{
  updateNavbar();
  loadCarousel('trending-carousel','All');
  loadCarousel('electronics-carousel','Electronics');
  loadCarousel('fashion-carousel','Fashion');
  loadCarousel('deals-carousel','All');
  loadCarousel('accessories-carousel','Accessories');
  setInterval(nextBanner,3000);
};
