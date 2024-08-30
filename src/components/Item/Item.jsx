

import "./Item.css"
import { Link } from 'react-router-dom';




const Item = ({products}) => {
    

return (

    <>
    <div className="card-items">
        
            
            <div className='item-title'>
            <h1>{products.nombre}</h1>
            <img className='ItemImg'src={products.imagen} />
            <div className='Info'>
            <p>${products.precio}</p>
            <p>{products.descripcion}</p>
            </div>
                <Link to={`/Producto/${products.id}`}>
                <button className='btn'>Comprar</button>
                </Link>
            </div>
        
    </div>
</>
)
}

export default Item;
