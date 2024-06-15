const Checkout = () => {
	const handleSubmit = (event) => {
		event.preventDefault();
		alert('Order placed successfully!');
	};

	return (
		<div>
		<h1>Checkout</h1>
		<form onSubmit={handleSubmit}>
		<div className="form-group">
		<label htmlFor="name">Name:</label>
		<input type="text" id="name" name="name" required />
		</div>
		<div className="form-group">
		<label htmlFor="address">Address:</label>
		<input type="text" id="address" name="address" required />
		</div>
		<div className="form-group">
		<label htmlFor="email">Email:</label>
		<input type="email" id="email" name="email" required />
		</div>
		<button type="submit">Place Order</button>
		</form>
		<style jsx>{`
			.form-group {
				margin-bottom: 1rem;
			}
			.form-group label {
				display: block;
				margin-bottom: 0.5rem;
			}
			.form-group input {
				width: 100%;
				padding: 0.5rem;
				box-sizing: border-box;
			}
			`}</style>
			</div>
	);
};

export default Checkout;
