import "./ItemListContainer.css";
import React from "react";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/dbConnection";


const ItemListContainer = () =>{
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(true)
const [error] = useState(null);
const { category } = useParams(); 

useEffect(()=> {
    setLoading(true)
    
    let productsCollection = collection(db, "products")

    if(category){
        productsCollection = query(productsCollection, where("category", category));
    }


getDocs(productsCollection)
.then(({docs}) =>{
    const productsFromDocs = docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }))
    setProducts(productsFromDocs)
    setLoading(false)
})
.catch((error)=>{
    console.error("Error al obtener los productos: ", error);
   
})


}, [category]);

return (
<div>
{loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ItemList products={products} />
      )}

</div>
)
}

export default ItemListContainer;