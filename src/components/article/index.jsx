import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../../context';
import './styles.css';

export default function Article({ article }) {
  const history = useHistory();
  const [quantity, setQuantity] = useState(1);
  const { cart, setCart } = useContext(Context);
  const addCart = () => {
    let itemCart = {
      article,
      quantity
    }
    setCart(cart.concat([itemCart]));
    history.push('/cart');
  }

  return (
    <div className='cont'>
      <div className="card border-light mb-3 cont-card">
        <div className='img-container' >
          <img className="card-img-top" src={article.asset} alt={article.name} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{article.name}</h5>
          <p className="card-text"><small className="text-muted">Marca: {article.marca}</small></p>
          <h5 className="card-title">{`$${article.priceArs}`}</h5>
          <p className='quantity-text'>Cantidad</p>
          <div className='section-quantity-cart'>
              <input type='number' className='input-quantity' defaultValue='1' onChange={(e) => setQuantity(e.target.value)}></input>
              <a href="#" role="button" className="btn btn-dark" onClick={addCart}>Agregar al carrito</a>
          </div>
        </div>
      </div>
    </div>
    )
}