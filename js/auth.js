const signupForm=document.getElementById('signup-form');
const loginForm=document.getElementById('login-form');

if(signupForm){
signupForm.addEventListener('submit',e=>{
  e.preventDefault();
  let users=JSON.parse(localStorage.getItem('users'))||[];
  const email=document.getElementById('signup-email').value;
  const name=document.getElementById('signup-name').value;
  const password=document.getElementById('signup-password').value;
  if(users.find(u=>u.email===email)){ alert("Email exists"); return; }
  users.push({name,email,password});
  localStorage.setItem('users',JSON.stringify(users));
  alert("Signup successful"); window.location.href="login.html";
});
}

if(loginForm){
loginForm.addEventListener('submit',e=>{
  e.preventDefault();
  const email=document.getElementById('login-email').value;
  const password=document.getElementById('login-password').value;
  let users=JSON.parse(localStorage.getItem('users'))||[];
  const user=users.find(u=>u.email===email && u.password===password);
  if(user){ alert("Login successful"); window.location.href="index.html"; }
  else alert("Invalid credentials");
});
}
