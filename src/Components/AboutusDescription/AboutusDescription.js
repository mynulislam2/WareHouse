import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AboutusDescription = () => {
    return (
        <Container>
            <Row className="mt-5 mb-5" xs={1} lg={2}>
                <Col>
                    <img className='rounded w-100' src="https://i.ibb.co/tmG7r54/16-jpg.webp" />
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <p>                    The Carzia.bd was established in 1989, We have been in the car industry for almost thirty years. We are now one of Europe's largest warehouse .
<br />
                        If the car is unusual or made in limited numbers then this is what we like, we like to stock the cars that other dealers dare not.
<br />
                        We hand pick our vehicles and have agents and buyers in numerous countries, we specialise in Japanese imports, including vehicles like Mazda Bongo, Nissan Escargo, Nissan Pao, Figaro, Elgrand, Estima, Mitsouka, to name only a few.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutusDescription;