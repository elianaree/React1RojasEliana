
import bag from "/src/assets/bag.svg"

import "./CartWidget.css"

const CartWidget = () =>{
    return (
        <div> 
            <img src={bag}  className="cart" alt= "shopping-bag"/>
            <span className="badge">0</span>
        </div>
    )
}
export default CartWidget;