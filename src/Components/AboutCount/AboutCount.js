import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import './AboutCount.css';

const AboutCount = () => {
    return (
        <Container fluid><Row className='AboutCount'>
            <Container style={{marginTop:"70px"}}>
                <Row className="text-center text-white ">
                    <Col>
<h5>                         STOCKS
</h5>
                        <CountUp className='text-white fs-2' end={1080} />
                    </Col>
                    <Col>
                    
<h5>DEALER REVIEWS</h5>
                        <CountUp className='text-white fs-2' end={1540} />
                    </Col>
                    <Col>
                      <h5> HAPPY CUSTOMERS</h5> 

                        <CountUp className='text-white fs-2' end={1470} />
                    </Col>

                </Row>
            </Container>
        </Row></Container>
        
    );
};

export default AboutCount;