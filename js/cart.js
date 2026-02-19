const cartContainer=document.getElementById('cart-container');
const totalPriceElem=document.getElementById('total-price');

function loadCart(){
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartContainer.innerHTML='';
  let total=0;
  cart.forEach(item=>{
    total+=item.price*item.qty;
    const div=document.createElement('div');
    div.classList.add('cart-item');
    div.innerHTML=`
      <img src="${item.img}" width="100">
      <div>
        <h4>${item.name}</h4>
        <p>₹${item.price} x ${item.qty}</p>
        <button onclick="increase(${item.id})">+</button>
        <button onclick="decrease(${item.id})">-</button>
        <button onclick="removeItem(${item.id})">Remove</button>
      </div>
    `;
    cartContainer.appendChild(div);
  });
  totalPriceElem.textContent=`Total Price: ₹${total}`;
}

function increase(id){
  let cart=JSON.parse(localStorage.getItem('cart'))||[];
  const item=cart.find(p=>p.id===id);
  if(item){ item.qty+=1; localStorage.setItem('cart',JSON.stringify(cart)); loadCart(); }
}

function decrease(id){
  let cart=JSON.parse(localStorage.getItem('cart'))||[];
  const item=cart.find(p=>p.id===id);
  if(item&&item.qty>1){ item.qty-=1; localStorage.setItem('cart',JSON.stringify(cart)); loadCart(); }
}

function removeItem(id){
  let cart=JSON.parse(localStorage.getItem('cart'))||[];
  cart=cart.filter(p=>p.id!==id);
  localStorage.setItem('cart',JSON.stringify(cart));
  loadCart();
}

window.onload=loadCart;
