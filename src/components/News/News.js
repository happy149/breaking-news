import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const News = (props) => {
    const { title, description, urlToImage, url } = props.article;

    return (
            <Card style={{ width: '18rem', float: 'left', margin: '10px' }}>
                <Card.Img variant="top"
                    src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <a class="btn btn-primary" href={url} target="_blank">Detail</a>
                </Card.Body>
            </Card>
    );
};

export default News;
