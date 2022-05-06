import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './HaveQuestion.css'
const HaveQuestion = () => {
    return (
        <Container fluid className='HaveQuestion'>
            <Row className='d-flex' xs={1} lg={3} xl={3}>
                <Col>
                    <img className='w-100 haveQuestionCar1 ' src="https://i.ibb.co/Gt2SyCF/car2.webp" />
                </Col>
                <Col>               
                <div className='d-flex justify-content-center mt-5'>
                                     <img className='w-25 h-25 border rounded-circle' src="https://i.ibb.co/3hz2FsP/Businessman.png" alt="" />

                    </div>           
                    <div className='contact'>

                        <div>
 
                            <small>have any question</small>
                            <h2 className="text-danger">(+880) 0170003434</h2>
                        </div>

                    </div>
                </Col>

                <Col>
                    <img className='w-100 haveQuestionCar2 scale-up-hor-right' src="https://i.ibb.co/0yLXv7B/car1.webp" />
                </Col>
            </Row>
        </Container>
    );
};

export default HaveQuestion;