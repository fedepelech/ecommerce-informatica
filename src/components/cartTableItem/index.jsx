import React from 'react';
import './styles.css';

export const CartTableItem = ({ item }) => {
let priceTotal = item.quantity * (parseFloat(item.article.priceArs * 1000));
  return (
    <div className='row table-item-cart'>
        <div className='col-lg-3 img-container-cart'>
            <img src={item.article.asset} alt={item.article.name}></img>
        </div>
        <div className='col-lg-6 name-container-cart'>
            <span>{item.article.name}</span>
        </div>
        <div className='col-lg-3 price-container-cart'>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio unitario: ${item.article.priceArs}</p>
            <p>Precio total: ${priceTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
        </div>
    </div>
  );
};
