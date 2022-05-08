import axios from 'axios';
import React from 'react';
import { Container, Form, FormControl, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';

const AddInventory = () => {
    const [user,loading,error]=useAuthState(auth)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.post("https://serene-mesa-54032.herokuapp.com/addInventory", {
            email:user.email,
            tittle: data.tittle,
            img: data.img,
            price: data.price,
            description: data.description,
            Quantity: data.Quantity,
            Supplier: data.Supplier,
            sold: data.sold
        })
    };
    return (
        <Container>
            <Row className="mx-auto"style={{ width: "320px" }}>
                <h4 className='text-center'>Add new Inventory </h4>
                <Form xs={1} lg={1}  onSubmit={handleSubmit(onSubmit)}>
                
                    <FormControl placeholder='Tittle' {...register("tittle", { required: true, maxLength: 25 })} /> <br />
                    <FormControl placeholder='Supplier Name' {...register("Supplier", { required: true, maxLength: 25 })} /> <br />
                    <FormControl placeholder='Image Link' {...register("img", { required: true })} /> <br />
                    <FormControl placeholder='Price' type="number" {...register("price", { required: true })} /> <br />
                    <FormControl placeholder='Quantity' type="number" {...register("Quantity", { min: 1, })} /> <br />
                    <FormControl placeholder='Sold' type="number" {...register("sold", { min: 1 })} /> <br />
                    <textarea rows="4" cols="37" {...register("description", { min: 10 })}></textarea>
                    <FormControl type="submit" className='btn btn-danger' />
                </Form>
            </Row>

        </Container>
    );
};

export default AddInventory;