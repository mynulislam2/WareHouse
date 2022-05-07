import React from 'react';
import { Card, Container, Form, Row } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import swal from 'sweetalert';

const ResetPass = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );
    const HandleSignUp = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        sendPasswordResetEmail(email)
        swal("Please check your email", "");    }
    return (
        <Container>

            <Row xs={1} sm={1} md={2} lg={3} >

                {
                    sending && <div className='d-flex justify-content-center align-items-center w-100 '></div>
                }

                <Card className={`mx-auto border-0 shadow rounded-3 my-1 ${sending && "registration"}`}>
                    <Card.Body className="p-4 p-sm-5">
                        <Card.Title className=" text-center mb-5 fw-light fs-5">Sign Up</Card.Title>
                        <form onSubmit={HandleSignUp}>
                            <div className="form-floating mb-3">
                                <Form.Control type="email" placeholder="name@example.com"
                                    name="email"
                                    required />
                                <label >Email address</label>
                            </div>
                            <Link to="/login">Login your account</Link>
                            {error && <p className='text-danger'>{error?.message.slice(22)}</p>}
                            <div className="d-grid mb-2">
                                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                                    Up</button>
                            </div>
                        </form>
                    </Card.Body>
                </Card>
            </Row>

        </Container>
    );
};

export default ResetPass;