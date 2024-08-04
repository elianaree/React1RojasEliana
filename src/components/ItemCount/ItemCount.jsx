import './ItemCount.css'
import React, { useEffect, useState } from "react";


const ItemCount = ({initial, stock, onAdd}) => {
const [count, setCount]= useState(parseInt(initial));

const decrement = () => {
   setCount(count -1);
}
const increment = () => {
   setCount(count +1);
}

useEffect(() => {
   setCount(parseInt(initial));
}, [initial]);


return (
     <div className='counter'>
        <button disabled={count <=1} onClick={decrement}>-</button>
        <span>{count}</span>
        <button disabled={count >= stock} onClick={increment}>+</button>
     <div>
     <button disabled={stock <= 0} onClick={()=> onAdd(count)}>Agregar al carrito</button>
     </div>
     </div>
);

};

export default ItemCount;