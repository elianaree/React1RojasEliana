
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import logo from "/src/assets/logo.svg"

const NavBar = () => {

return (
<>
<nav>
<div>
<img className="logo-nav" src={logo} alt="logo de la marca"/>

</div>

<div className="navItems">

<NavLink className='nav-link' to='/categoria/spa'>Hidroterapia</NavLink> 
<NavLink className='nav-link' to='/categoria/masajes'>Masajes</NavLink>
<NavLink className='nav-link' to='/categoria/cuidado'>Belleza</NavLink>

<NavLink className='nav-link' to='CartWidget/carrito'></NavLink> 
</div>
<CartWidget/>
</nav>

</>

)
}

export default NavBar