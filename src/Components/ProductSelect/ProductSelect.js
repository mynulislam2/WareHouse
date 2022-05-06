import { Autocomplete, Slider, TextField } from '@mui/material';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './ProductSelect.css';

const ProductSelect = () => {
    const options = ["mynu", "ridoy", "farabi", "nurul", "habib", "arnab"]
    return (
        <Container fluid className='product_select d-flex justify-content-center align-items-center' >
            <div className='w-75'>
                <h2 className='text-white text-center mb-5 fs-1'>FIND BEST CAR</h2>
                <Row xs={1} sm={1} md={2} lg={2} xl={3}>
                    <Col className='mt-3'>
                        <Autocomplete
                            className='bg-white rounded ms-3'
                            disablePortal
                            id="combo-box-demo"
                            options={options}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Supplier" />}
                        />
                    </Col>


                    <Col className='mt-3'>
                        <Autocomplete
                            className='bg-white ms-3 rounded'
                            disablePortal
                            id="combo-box-demo"
                            options={options}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Quantity" />}
                        />
                    </Col>
                    <Col className='mt-3'>
                        <Autocomplete
                            className='bg-white ms-3 rounded'
                            disablePortal
                            id="combo-box-demo"
                            options={options}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Model" />}
                        />
                    </Col>
                    <Col className='mt-3'>
                        <Autocomplete
                            className='bg-white ms-3 rounded'
                            disablePortal
                            id="combo-box-demo"
                            options={options}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Condition" />}
                        />
                    </Col>
                    <Col className='mt-3 d-flex align-items-center'  >
                        <Slider defaultValue={5000} className="color-danger" min={10}
                            max={10000} aria-label="Default" valueLabelDisplay="auto" />

                    </Col>
                </Row>
                <div className="d-flex justify-content-center mt-5">
                    <Button className="w-25" variant='danger'>Search Inventory</Button>

                </div>

            </div>



        </Container>



    );
};

export default ProductSelect;