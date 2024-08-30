
import bag from "/src/assets/bag.svg"
import "./CartWidget.css"
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";


const CartWidget = () => {

    const { totalProducts } = useCartContext();
    return (
        <div> 
            <Link to="/Cart" className="imgContacto">
                <img src={bag} className="cart" alt="shopping-bag"/>
            </Link>
            <span className="badge">0</span>
            
            <span>{totalProducts() || ""}</span>
            
        </div>
    )
}

export default CartWidget;