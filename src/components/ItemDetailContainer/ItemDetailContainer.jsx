

import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import React,{useState, useEffect} from 'react'

const products = {
id: 1,
nombre: 'Piscina de Hidroterapia',
imagen: 'https://i.ibb.co/mqXFsr3/foto1.jpg',
precio: 10.555,
descripcion: 'Brinda beneficios terapéuticos mediante chorros de masajes con agua caliente o fría.',
stock: 10,
};

export const ItemDetailContainer = () => {
const [data, setData] = useState({});

useEffect(() => {
const getData = new Promise(resolve =>{
setTimeout(() => {
resolve(products);
}, 1000);
});
getData.then(res=> setData(res));

}, [])

return (
<ItemDetail data={data}/>
);
}

export default ItemDetailContainer