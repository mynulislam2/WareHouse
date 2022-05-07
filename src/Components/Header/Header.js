import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <Navbar collapseOnSelect expand="lg" variant='dark'>
            <Container>
                <Navbar.Brand>Cariza.bd</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <NavLink  className="ms-4" to="/home">Home</NavLink>
                        <NavLink className='ms-4' to="/about">About</NavLink>
                        
                        <NavLink className='ms-4' to="/blogs">
                            Blogs
                        </NavLink>
                        {
                            user && 
                            <>
                        <NavLink className='ms-4'
                         to='/manageinventory'>Manage Items</NavLink>        
                        <NavLink className='ms-4'
                         to='/addinventory'>Add Item</NavLink>        
                        <NavLink className='ms-4'
                         to='/myinventory'>My items</NavLink>        
                            </>
                        }
                        {user?
                        <NavLink className='ms-4' onClick={()=>  signOut(auth)
                        } to='/'>Log Out</NavLink>
                        :
                        <NavLink className='ms-4' to="/login">Log In</NavLink>}
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;