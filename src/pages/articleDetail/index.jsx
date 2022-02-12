import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import './styles.css';

export default function ArticleDetail() {
  const location = useLocation();
  const history = useHistory();
  const [article, setArticle] = useState(null);
  useEffect(() => {
      if (!location.state || !location.state.article) {
        history.push('/');
      } else {
          setArticle(location.state.article);
      }
  }, []);

  return (
      <div className='container'>
        <h3>Descripción</h3>
          {article ? 
        <div className='row content-detail'>
            <div className="col-lg-8">
                <div className='img-container2'>
                    <img src={article.asset} alt="" />
                </div>
            </div>
            <div className="col-lg-4">
                <p className='description-text'>{article.description}</p>
                <div className='row'>
                    <div className='col-lg-8'>
                        <h6>${article.priceArs}</h6>
                    </div>
                    <div className='col-lg-4'>
                        <div className='button-cart-quantity'>
                            <input type='number' defaultValue='1'></input>
                            <button type="button" className="btn btn-dark">Dark</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        : <h2>Hola</h2>}
      </div>
  )
}
