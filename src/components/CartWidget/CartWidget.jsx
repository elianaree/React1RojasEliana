
import bag from "./assets/bag.svg"
import "./CartWidget.css"

const CartWidget = () =>{
    return (
        <div> 
            <img src={bag}  className="cart" alt= "shopping-bag"/>
            <span>0</span>
        </div>
    )
}
export default CartWidget;