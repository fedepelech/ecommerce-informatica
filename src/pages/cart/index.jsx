import React, { useContext } from 'react';
import './styles.css';
import { Context } from '../../context';
import { CartTableItem } from '../../components/cartTableItem';

export const Cart = () => {

  const { cart } = useContext(Context);
  const priceOrder = cart.reduce((total, {article, quantity}) => (total + quantity * (parseFloat(article.priceArs * 1000))), 0);
  const cartInformation = 'Detalle del pedido:\n' + cart.reduce((message, {article, quantity}) => 
    message.concat(`* ${article.name} - $${article.priceArs} - Cantidad: ${quantity} - Total: $${quantity * (parseFloat(article.priceArs * 1000))}\n`), ``).concat(`\nTotal: $${priceOrder}`);
  
  
  const goWhatsapp = () => {
    window.location.replace(`https://wa.me/5491164207777?text=${encodeURIComponent(cartInformation)}`)
  }

  let body = (
    <>
      <h2>Carrito</h2>
      {cart.map((item) => <CartTableItem item={item} key={item.id}/>)}
      <div className='row'>
        <button type="button" className="btn btn-secondary btn-wpp" onClick={goWhatsapp}>Completar pedido</button>
      </div>
    </>
  )

  if (cart.length === 0) {
    body = (
      <div>
        <h3>Tu carrito esta vacío.</h3>
      </div>
    );
  }

  return (
    <div className='container cart-content'>
      {body}
    </div>
  );
};
