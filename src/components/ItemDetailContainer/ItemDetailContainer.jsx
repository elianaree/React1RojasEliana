
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import { db } from "../../firebase/dbConnection";
import { collection, getDoc, doc } from "firebase/firestore";


const ItemDetailContainer = () => {
const [products, setProducts] = useState({});
const [loading, setLoading] = useState(true);
const { id } = useParams()

useEffect(() => {
    setLoading(true);
    const productsCollection = collection(db, "products");
    const productsRef = doc(productsCollection, id);

    getDoc(productsRef)
      .then((doc) => {
        
          setProducts({ id: doc.id, ...doc.data() });
          setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log("Se generó el error documento: ", error);
        
      });
  }, [id]);
  return (
    <>
    {loading ? (<h2>loading...</h2>) : (
    <ItemDetail product={products}/>
    )}
    </>
    )
    }
   

export default ItemDetailContainer;