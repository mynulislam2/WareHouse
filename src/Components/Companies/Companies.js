import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const Companies = () => {
    return (
        <Container fluid>
            <Row xs={2} lg={4} className="py-5 ">
                <Col className="d-flex justify-content-center">
                    <img width={100} src="https://i.ibb.co/R27Yr4f/1813.png" alt="" />
                </Col>
                <Col className="d-flex justify-content-center">
                    <img className='ms-5' width={100} src="https://i.ibb.co/dQr8fG8/1513.png" alt="" />
                </Col>
                <Col className="d-flex justify-content-center">
                    <img className='ms-5' width={100} src="https://i.ibb.co/mc34qjb/1612.png" alt="" />
                </Col>
                <Col className="d-flex justify-content-center">
                    <img className='ms-5' width={100} src="https://i.ibb.co/TvcQHqW/main-qimg-3e0db2de7e1d8b4cebce5df3cad338e7.png" alt="" />
                </Col>

            </Row>

        </Container>
    );
};

export default Companies;