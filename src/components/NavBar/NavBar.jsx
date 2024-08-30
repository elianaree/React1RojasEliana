
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import logo from "/src/assets/logo.svg"




const NavBar = () => {
    return (
      <>
        <img className="logo-nav" src={logo} alt="logo de la marca" />
        <div className="navItems">
          <NavLink className='nav-link' to='/'>Home</NavLink>
          <NavLink className='nav-link' to='/category/Hidroterapia'>Hidroterapia</NavLink>
          <NavLink className='nav-link' to='/category/Masajes'>Masajes</NavLink>
          <NavLink className='nav-link' to='/category/Belleza'>Belleza</NavLink>
          <NavLink className='nav-link' to='/CartWidget/carrito'></NavLink>
          
           <CartWidget/>
</div>
</>
)
}
  
  export default NavBar;