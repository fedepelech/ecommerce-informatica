import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './styles.css';

export default function Header() {
    return (
      <div className='container-fluid header'>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">
            Coghlan Gaming
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    );
}
