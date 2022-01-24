import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
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
              <div className='col-lg-3 col-sm-4 col-6'>
                <Article article={article} />
              </div>
            ))}
        </>
    )

    if(loading) {
      body = (
        <>
          <h2>Loading...</h2>
        </>
      )
    }

    return (
      <div className='container'>
        <h3>Articulos disponibles</h3>
        <div className='row'>
          {body}
        </div>
      </div>
    )
}