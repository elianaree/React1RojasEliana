
import { useCartContext } from"../../Context/CartContext";
import { collection, addDoc, getFirestore } from"firebase/firestore";
import { Link } from "react-router-dom";

import "../Cart/cart.css";


const Cart = () => {
	const { cart, totalPrice } = useCartContext();

	const order = {
		buyer: {
			name: "Eliana",
			email: "eliana@gmail.com",
			phone: "127127",
			address: "asdd",
		},
		items: cart.map((product) => ({
			id: product.id,
			title: product.title,
			price: product.price,
			quantity: product.quantity,
		})),
		total: totalPrice(),
	};

	const handleClick = () => {
		const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, order).then(({ id }) => console.log(id));
	};

	if (cart.length === 0) {
		return (
			<>
			<div className="Items">
				<p>No hay productos en el carrito</p>
				<Link to="/">Hacer compras</Link>
				</div>
			</>
		);
	}

	return (
		<>
			{cart.map((product) => (
				<ItemCart key={product.id} product={product} />
			))}
			<p>total: {totalPrice()}</p>
			<button onClick={handleClick}>Emitir compra</button>
		</>
	);
};

export default Cart;