import ItemCount from "/ItemCount/ItemCount";
import React from "react";

export const ItemListContainer= ({greeting})=> {
    const onAdd = (quantity) => {
        console.log('compraste ${quantity} servicios');
 
return(
     <>
     
     <Title greeting={texto} />
     <ItemCount initial={1} stock={10} onAdd={onAdd}/>
     </>

 );
};

};

export default ContainerCounter;