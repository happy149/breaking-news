import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import News from '../News/News';


const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    useEffect( () => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=60fafc3228094839903b87891466f1ec';
        fetch(url)
        .then(res => res.json())
        .then(data=>setArticles(data.articles))
    }, [])
    return (
        <div>
            <h1>Top headlines: {articles.length}</h1>
            <Container fluid>
            {
              articles.map(article => <News article= {article}></News>)
            }
            </Container>
            
        </div>
    );
};

export default TopHeadline;