

import "./Item.css"

const Item = ({id, nombre, imagen, precio, descripcion, stock}) => {

return (
<article className='CardItem'>
<header className='Header'>
<h2 className='ItemHeader'>
{nombre}
</h2>
</header>
<picture>
<img src={imagen} alt={nombre} className='ItemImg'/>
</picture>
<section>
<p className='info'>
Precio: $ {precio}
</p>
<p className="descript">
Descripcion:{descripcion}
</p>
<p className="descript">
Stock:{stock}
</p>
</section>
<footer className='ItemFooter'>
<button className='btn'>Comprar</button>
</footer>
</article>
)
}


export default Item;
