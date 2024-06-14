// Пример данных товаров
const products = [
	{ id: 1, name: 'Product 1', description: 'Description for product 1', price: 10, image: 'https://via.placeholder.com/150' },
	{ id: 2, name: 'Product 2', description: 'Description for product 2', price: 20, image: 'https://via.placeholder.com/150' },
	{ id: 3, name: 'Product 3', description: 'Description for product 3', price: 30, image: 'https://via.placeholder.com/150' },
];

// Функция для отображения товаров на странице продуктов
function displayProducts() {
	const productContainer = document.querySelector('.product-list');
	products.forEach(product => {
		const productItem = document.createElement('div');
		productItem.classList.add('product-item');
		productItem.innerHTML = `
		<img src="${product.image}" alt="${product.name}">
		<h2>${product.name}</h2>
		<p>${product.description}</p>
		<p>$${product.price}</p>
		<button onclick="addToCart(${product.id})" class="button">Add to Cart</button>
		`;
		productContainer.appendChild(productItem);
	});
}

// Корзина
let cart = [];

// Функция для добавления товара в корзину
function addToCart(productId) {
	const product = products.find(p => p.id === productId);
	cart.push(product);
	alert(`${product.name} added to cart`);
	updateCart();
}

// Функция для отображения товаров в корзине
function updateCart() {
	const cartContainer = document.querySelector('.cart-list');
	const totalPriceElement = document.getElementById('total-price');
	cartContainer.innerHTML = '';
	let totalPrice = 0;

	cart.forEach(item => {
		const cartItem = document.createElement('div');
		cartItem.classList.add('cart-item');
		cartItem.innerHTML = `
		<img src="${item.image}" alt="${item.name}">
		<h2>${item.name}</h2>
		<p>$${item.price}</p>
		<button onclick="removeFromCart(${item.id})" class="button">Remove</button>
		`;
		cartContainer.appendChild(cartItem);
		totalPrice += item.price;
	});

	totalPriceElement.textContent = totalPrice;
}

// Функция для удаления товара из корзины
function removeFromCart(productId) {
	cart = cart.filter(item => item.id !== productId);
	updateCart();
}

// Отображение товаров при загрузке страницы
if (document.querySelector('.product-list')) {
	displayProducts();
}

// Форма оформления заказа
const checkoutForm = document.getElementById('checkout-form');
if (checkoutForm) {
	checkoutForm.addEventListener('submit', function(event) {
		event.preventDefault();
		alert('Order placed successfully!');
	});
}
