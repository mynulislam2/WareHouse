import { LocationOn } from '@mui/icons-material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Fotter.css';
const Fotter = () => {
const year =new Date().getFullYear()
    return (
        <Container fluid className="fotter">
            <Row xs={1} lg={3} className=" mx-auto" style={{width:"95%"}}>
                <Col style={{ marginTop: "80px" }}>

                    <h5 className='fotter_heading'>Contact with us</h5>
                    <p className='fotterDescription'>
                        <span className='text-danger me-3'><LocationOn></LocationOn></span>
                         220E Front St. Burlington NC 27215</p>
                    <p className='fotterDescription'>
                        <span className='text-danger me-3'><CallIcon>
                    </CallIcon></span>
                         (007) 123 456 7890</p>
                    <p className='fotterDescription'> 
                    <span className='text-danger me-3'><EmailIcon></EmailIcon> </span>
                   support@example.com</p>

                </Col>
                <Col style={{ marginTop: "80px" }}>
                    <h5 className='fotter_heading'>USEFUL LINKS</h5>
                    <p className='fotterDescription'>Change Oil and Filter</p>
                    <p className='fotterDescription'>Brake Pads Replacement</p>
                    <p className='fotterDescription'>Timing Belt Replacement</p>
                    <p className='fotterDescription'> Pre-purchase Car Inspection</p>
                    <p className='fotterDescription'>Starter Replacement</p>
                </Col>
                <Col style={{ marginTop: "80px" }}>
                    <h5 className='fotter_heading'>SUBSCRIBE OUR NEWSLETTER</h5>
                    <p className='fotterDescription'>Enter your e-mail and subscribe to our newsletter.</p>
                    <Form.Control style={{ color: "rgba(171, 168, 168, 0.8)",width:"15rem" }} className='bg-dark' placeholder="email@example.com" />
                    <Button className='mt-3' variant='danger'>subscribe</Button>

                </Col>
            </Row>
            <Row xs={1} lg={2} className="mx-auto mt-3" style={{width:"95%"}} >
                <Col className='background second_readmoreblog'>
                    <div className='readmoreBlog'>
                        <div>
                            <h5 className='text-white'>ARE YOU LOOKING FOR A CAR?</h5>
                            <p className='fotterDescription'>Search Our Inventory With Thousands Of Cars And More Cars <br /> Are Adding On Daily Basis</p>
                        </div>'
                        <div className='d-flex ms-5 align-items-center'>
                            <Button variant='danger'>
                                Read More
                            </Button>
                        </div>
                    </div>

                </Col>
                <Col className='background '>
                    <div className='readmoreBlog'>
                        <div>
                            <h5 className='text-white'>DO YOU WANT TO SELL A CAR?</h5>
                            <p className='fotterDescription'>  Search Our Inventory With Thousands Of Cars And More Cars <br /> Are Adding On Daily Basis</p>
                        </div>
                        <div className='d-flex ms-5 align-items-center'>
                            <Button variant='danger'>
                                Read More
                            </Button>
                        </div>
                    </div>

                </Col>

            </Row>
            <Row className="mt-4">
                <Col>
                    <p className='text-center fotterDescription' >©Copyright {year} Cariza.bd</p>
                </Col>
            </Row>

        </Container>
    );
};

export default Fotter;