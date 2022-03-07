import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

export default function Home() {
  const history = useHistory();

  return (
    <div className='container center-img'>
      <h3>Categorías</h3>
      <div className='row content'>
        <div className='col-lg-4 col-sm-6'>
          <div className="card text-white mb-3 bg-rebecca" onClick={() => history.push('/categoria/ram')}>
            <div className="card-body">
              <h5 className="card-title">Memorias Ram</h5>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-sm-6'>
          <div className="card text-white mb-3 bg-rebecca" onClick={() => history.push('/categoria/ssd-m2')}>
            <div className="card-body">
              <h5 className="card-title">Discos sólidos M2</h5>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-sm-6'>
          <div className="card text-white mb-3 bg-rebecca" onClick={() => history.push('/categoria/ssd-sata')}>
            <div className="card-body">
              <h5 className="card-title">Discos sólidos SATA</h5>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-sm-6'>
          <div className="card text-white mb-3 bg-rebecca" onClick={() => history.push('/categoria/monitores')}>
            <div className="card-body">
              <h5 className="card-title">Monitores</h5>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-sm-6'>
          <div className="card text-white mb-3 bg-rebecca" onClick={() => history.push('/categoria/fuentes')}>
            <div className="card-body">
              <h5 className="card-title">Fuentes</h5>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-sm-6'>
          <div className="card text-white mb-3 bg-rebecca" onClick={() => history.push('/categoria/auriculares')}>
            <div className="card-body">
              <h5 className="card-title">Auriculares</h5>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-sm-6'>
          <div className="card text-white mb-3 bg-rebecca" onClick={() => history.push('/categoria/teclados')}>
            <div className="card-body">
              <h5 className="card-title">Teclados</h5>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-sm-6'>
          <div className="card text-white mb-3 bg-rebecca" onClick={() => history.push('/categoria/parlantes')}>
            <div className="card-body">
              <h5 className="card-title">Parlantes</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}