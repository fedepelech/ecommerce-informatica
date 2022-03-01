import React, { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import Article from '../../components/article';
import { getData } from '../../services';
import './styles.css';

export default function Category() {
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        setLoading(true);
        getData(category)
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
        <h3>Articulos disponibles</h3>
        <div className='row content-articles'>
          {body}
        </div>
      </div>
    )
}