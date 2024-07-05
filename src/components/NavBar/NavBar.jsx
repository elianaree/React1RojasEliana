
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {

return (
    <>
<div>
<h3>Hava Spa</h3>
</div>
<nav className="navItems">
    <button>Inicio</button>
    <button>Servicios</button>
    <button>Contacto</button>
    </nav>

<CartWidget/>
</>


)
}

export default NavBar
