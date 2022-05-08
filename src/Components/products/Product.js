import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
const Product = () => {
    const [ProductsItems, setProductsItems] = useState([]);
    useEffect(() => {
        const url = "https://serene-mesa-54032.herokuapp.com/limitedInventory"
        axios.get(url)
            .then(res => setProductsItems(res.data))
    }, []);
    return (
        <Container className='mt-5 '>
            <h2 className="text-center mb-4 itemsFont">Check out our recent cars</h2>
            <Row xs={1} md={3} lg={3} className="mx-auto" style={{ width: "85%" }}>

                {
                    ProductsItems.map((item) => <ProductCard
                        key={item._id} item={item}></ProductCard>)
                }
            </Row>
            <div className='d-flex justify-content-center mt-5'>
                <Link to='/manageinventory' className="btn btn-danger">Manage Inventories</Link>
            </div>
        </Container>
    );
};

export default Product;