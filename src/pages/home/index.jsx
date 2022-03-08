import React, { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import Article from '../../components/article';
import { getData } from '../../services';
import './styles.css';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setLoading(true);
      getData('ofertas')
          .then((articles) => {
              setArticles(articles);
              setLoading(false);
          })
          .catch(() => {
              console.log('error');
          })
  }, [])

  let body = (
    <>
      {articles.map((article) => (
        <div className='col-lg-3 col-sm-6 col-10' key={article.id}>
          <Article article={article} />
        </div>
      ))}
    </>
  )

  if(loading) {
    body = (
      <div className='loader-content'>
        <TailSpin color="#F59345" height={80} width={80} />
      </div>
    )
  }

  return (
    <div className='container'>
      <h2>MEGA-OFERTAS!!!</h2>
      <h6 className='subtitle'>Sujeto a disponibilidad de stock</h6>
      <div className='row content-articles'>
        {body}
      </div>
    </div>
  )
}