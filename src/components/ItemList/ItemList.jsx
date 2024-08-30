
import "./ItemList.css"
import Item from "../Item/Item"

const ItemList = ({products}) => {
    return(
    <>
    <div className="ListGroup">
    {products.map((products) => {
    return <Item key={products.id} products={products} />;
    
    })}
    </div>
    
    </>
    
    );
    };



export default ItemList;
