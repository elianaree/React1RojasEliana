
import "./ItemListContainer.css";
import React from "react";
import{ getProducts } from "../../mock/mockData"
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greeting}) =>{
const [products, setProducts] = useState([])

useEffect(()=> {
getProducts()
.then(response=> {
setProducts(response)
})
.catch(error=> {
console.error(error)
})
}, [])
return (
<div>
<h1>{greeting}</h1>
<ItemList products={products}/>
</div>
)
}
export default ItemListContainer;