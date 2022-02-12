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
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand className='brand-clickable' onClick={goHome}>
            Coghlan Gaming
            </Navbar.Brand>
            <div className='cart-icon brand-clickable' onClick={goCart}>
              <span>{cart.length !== 0 ? cart.length : null}</span>
              <AiOutlineShoppingCart color='white' size={23} />
            </div>
          </Container>
        </Navbar>
      </div>
    );
}
