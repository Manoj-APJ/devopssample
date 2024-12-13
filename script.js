  const products = [ 
    { id: 1, name: "Product 1", price: 10 }, 
    { id: 2, name: "Product 2", price: 19 }, 
    ]; 
    var cart = []; 
    function displayCatalog() { 
       const catalogSection = document.querySelector('.catalog'); 
    products.forEach(product => { 
           const productCard = document.createElement('div'); 
    productCard.classList.add('product-card'); 
    productCard.innerHTML = ` 
    <h3>${product.name}</h3> 
    <p>$${product.price}</p> 
<button onclick="addToCart(${product.id})">Add to Cart</button> 
  `; 
catalogSection.appendChild(productCard); 
  }); 
} 
function addToCart(productId) { 
  const selectedProduct = products.find(product => product.id === productId); 
cart.push(selectedProduct);
updateCartDisplay(); 
} 
function updateCartDisplay() { 
  const cartItemsContainer = document.querySelector('.cart-items'); 
cartItemsContainer.innerHTML = ''; 
  let totalAmount = 0; 
cart.forEach(item => { 
      const cartItem = document.createElement('div'); 
cartItem.innerHTML = `<p>${item.name} - $${item.price}</p>`; 
cartItemsContainer.appendChild(cartItem); 
totalAmount += item.price; 
  }); 
  const totalAmountDisplay = document.getElementById('totalAmount'); 
totalAmountDisplay.textContent = totalAmount.toFixed(2); // Update the total 
amount in the cart 
} 
function checkout() { 
  cart = []; 
updateCartDisplay(); 
alert('Thank you for your purchase!'); 
} 
window.onload = displayCatalog; 
const form = document.getElementById('registrationForm'); 
form.addEventListener('submit', function (event) { 
event.preventDefault(); 
  if (validateForm()) { 
form.submit(); 
  } 
}); 
function validateForm() { 
  const username = document.getElementById('username').value; 
  const email = document.getElementById('email').value; 
  const password = document.getElementById('password').value; 
  const fullName = document.getElementById('fullName').value; 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/; 
  if (username.length< 4) { 
alert('Username must be at least 4 characters'); 
      return false; 
  } 
  if (!emailRegex.test(email)) { 
alert('Please enter a valid email address'); 
      return false; 
  } 
  
  if (fullName.split(' ').length< 2) { 
alert('Please enter your full name'); 
      return false; 
  } 
  return true; 
} 
 