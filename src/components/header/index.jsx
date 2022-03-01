import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Context } from '../../context';
import './styles.css';

export default function Header() {
  const history = useHistory();
  const { cart } = useContext(Context);

  const goHome = () => {
    history.push('/');
  }

  const goCart = () => {
    history.push('/cart');
  }
    return (
      <div className='container-fluid header'>
        <div className='container'>
          <div className='row content-header'>
            <div className='col-10 col-lg-8 offset-lg-1'>ac
              <img
                alt="Logo Coghlan Gaming"
                src="/assets/logo-sin-fondo.png"
                width="100"
                height="100"
                className="d-inline-block"
                onClick={goHome}
              />
            </div>
            <div className='col-2 col-lg-2 offset-lg-1'>
              <div className='cart-icon' onClick={goCart}>
                <span>{cart.length !== 0 ? cart.length : null}</span>
                <AiOutlineShoppingCart color='white' size={23} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
