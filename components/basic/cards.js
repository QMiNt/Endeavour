/* eslint-disable */
import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';

const Cards = ({question,butext}) => {
    return (
        <div>
            
            <Container>
                        <Card body className="card-shadow" style={{
                            width:"512px"
                        }}>
                            <CardTitle>For Pre-Teens</CardTitle>
                            <CardText>{question}</CardText>
                            <Button>{butext}</Button>
                        </Card>
                   
                
            </Container>
        </div>
    );
}

export default Cards;
