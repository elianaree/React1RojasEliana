import './ItemDetail.css'
import React from 'react'


export const ItemDetail = ({ data }) => {

    return (
    <div className='container'>
        <div className='titulo'>
                <h1>{data.nombre}</h1>
            </div>
           
        <div className='detail'>
            <img className='detail-imagen' src={data.imagen} alt=''/>
            
        </div>
        <div className='precio'>
                <h2>{data.precio}</h2>
            </div>
            <div className='descripcion'>
                <h3>{data.descripcion}</h3>
            </div>
            <div className='stock'>
                <h4>{data.stock}</h4>
            </div>
    </div>
    
    )
}

export default ItemDetail