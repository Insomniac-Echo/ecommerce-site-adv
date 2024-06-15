import axios from 'axios';
import { useEffect, useState } from 'react';

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await axios.get('http://localhost:8000/api/products/');
			setProducts(response.data);
		};
		fetchProducts();
	}, []);

	return (
		<div>
		<h1>Products</h1>
		<div className="product-list">
		{products.map(product => (
			<div key={product.id} className="product-item">
			<img src={product.image} alt={product.name} />
			<h2>{product.name}</h2>
			<p>{product.description}</p>
			<p>${product.price}</p>
			<button>Add to Cart</button>
			</div>
		))}
		</div>
		<style jsx>{`
			.product-list {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
			}
			.product-item {
				border: 1px solid #ddd;
				border-radius: 4px;
				margin: 0.5rem;
				padding: 1rem;
				background-color: #fff;
				flex: 1 1 calc(33.333% - 1rem);
				box-sizing: border-box;
			}
			.product-item img {
				max-width: 100%;
				height: auto;
			}
			`}</style>
			</div>
	);
};

export default Products;
