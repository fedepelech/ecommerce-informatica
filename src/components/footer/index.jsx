import React from 'react';
import './styles.css';

export default function Footer() {
  return (
  <footer>
    <div className='content-footer'>
      <div className='container'>
        <footer className='d-flex flex-wrap justify-content-between align-items-center py-3'>
          <p className='col-md-6 mb-0 text-muted'>© 2022 Coghlan Gaming</p>
          <a className='col-md-6 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none'>Derechos Reservados</a>
        </footer>
      </div>
    </div>;
  </footer>
  );
};
