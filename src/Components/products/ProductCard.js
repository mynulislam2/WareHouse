import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Products.css';

const ProductCard = ({ item }) => {
    return (
        <Card style={{ width: '18rem' }} className="mt-4 mx-auto">
            <Card.Img variant="top"  height={214} src={item.img} />
            <Card.Body>
                <Card.Title className='text-center main_heading'>{item.tittle}</Card.Title>
                <Card.Title className='text-center main_heading'>${item.price}</Card.Title>
                <Card.Title className='sub_heading'>Quantity:{item.Quantity} Author:{item.Supplier}</Card.Title>
                <Card.Text className='text-lowercase'>
                    {item.description} 
                </Card.Text>
                <div className="d-flex justify-content-center">
                    <Link  to={`/inventory/${item._id}`} className='btn btn-danger'>stock update</Link>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;