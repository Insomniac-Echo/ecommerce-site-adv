import { useState } from 'react';

const Cart = () => {
	const [cart, setCart] = useState([]);

	// Функция для добавления товара в корзину (нужно реализовать)
	const addToCart = (product) => {
		setCart([...cart, product]);
	};

	// Функция для удаления товара из корзины (нужно реализовать)
	const removeFromCart = (productId) => {
		setCart(cart.filter(item => item.id !== productId));
	};

	return (
		<div>
		<h1>Your Cart</h1>
		<div className="cart-list">
		{cart.map(item => (
			<div key={item.id} className="cart-item">
			<img src={item.image} alt={item.name} />
			<h2>{item.name}</h2>
			<p>${item.price}</p>
			<button onClick={() => removeFromCart(item.id)}>Remove</button>
			</div>
		))}
		</div>
		<style jsx>{`
			.cart-list {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
			}
			.cart-item {
				border: 1px solid #ddd;
				border-radius: 4px;
				margin: 0.5rem;
				padding: 1rem;
				background-color: #fff;
				flex: 1 1 calc(33.333% - 1rem);
				box-sizing: border-box;
			}
			.cart-item img {
				max-width: 100%;
				height: auto;
			}
			`}</style>
			</div>
	);
};

export default Cart;
