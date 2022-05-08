import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
const Inventory = () => {
    const { _id } = useParams()
    const [SelectedItem, setSelectedItem] = useState({});
    const { img, tittle, description, Quantity, Supplier, price, sold } = SelectedItem
    useEffect(() => {
        axios.get(`https://serene-mesa-54032.herokuapp.com/inventory/${_id}`)
            .then(res => setSelectedItem(res.data))
    }, [SelectedItem]);
    const ItemReduce = (id) => {
        const ReducedQuantity = Quantity - 1
        const url = `https://serene-mesa-54032.herokuapp.com/updateQuantity/${id}`
        axios.put(url, {
            Quantity: ReducedQuantity
        })
    }
    const AddQuantity = (event) => {
        event.preventDefault()
        const AddedQuantity = parseInt(event.target.number.value)
        const url = `https://serene-mesa-54032.herokuapp.com/updateQuantity/${_id}`
        axios.put(url, {
            Quantity: parseInt(Quantity + AddedQuantity)
        })
    }
    return (
        <Container>
            <Row xs={1} lg={2}>
                <Col>
                    <Card className="border-0" style={{ width: '25rem' }}>
                        <Card.Img className="rounded" variant="top" src={img} />
                        <Card.Body>
                            <Card.Title className="fs-2">{tittle}</Card.Title>
                            <div className="d-flex mt-4">
                                <p className="mb-0">Quantity:
                                    {
                                        Quantity
                                    }
                                </p>
                                <p className="ms-2 mb-0">${price}</p>
                                <p className="ms-2 mb-0">Sold:{sold}</p>
                                <p className='ms-2 mb-0'>Supplier:{Supplier}</p>
                            </div>
                            <small className="text-dark">Product ID {_id}</small>
                            <Card.Text className="mt-2">
                                {description}
                            </Card.Text>
                            <Button onClick={() => ItemReduce(_id)} variant="danger">Delivered</Button>
                            
                            <Link to='/manageinventory' className="btn btn-danger ms-4">Manage Inventories</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <h3>Restock The Items</h3>
                    <Form onSubmit={AddQuantity}>
                        <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                            <Form.Control type="Number" placeholder="Enter Your Number" name="number" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>

            </Row>
        </Container>
    );
};

export default Inventory;