import React from 'react';
import './styles.css';

export default function Article({ article }) {
  {console.log(article.price);}
  return (
    <div className='cont'>
      <div class="card border-light mb-3 cont-card">
        <div className='img-container' >
          <img class="card-img-top" src={article.asset} alt={article.name} />
        </div>
        <div class="card-body">
          <h5 class="card-title">{article.name}</h5>
          <p class="card-text"><small class="text-muted">Marca: {article.marca}</small></p>
          <h5 class="card-title">{`$${article.priceArs}`}</h5>
          <a href="#" class="btn btn-dark">Ver más</a>
        </div>
      </div>
    </div>
    )
}