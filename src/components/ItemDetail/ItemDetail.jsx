import './ItemDetail.css'
import React from 'react'
import ItemCount from "../ItemCount/ItemCount.jsx"
import { useCartContext } from "../../Context/CartContext.jsx";

export const ItemDetail = ({ data }) => {
	const [goToCart, setGoToCart] = useState(false);
	const { addProduct } = useCartContext();

	const onAdd = (quantity) => {
		setGoToCart(true);
		addProduct(data, quantity);
	};
    

    return (
    
            <div className="itemContainer">
                <h1>{nombre}</h1>
                <img src={imagen} alt=""/> 
                <p>${precio}</p>
                <p>{descripcion}</p>
                {goToCart ? (
						<Link to="/cart"> Terminar al carrito</Link>
                    ) : (
            
                        <ItemCount initial={0} stock={10} onAdd={onAdd} />
                    )}
            </div>
             
             
        
    );
};

export default ItemDetail;
