import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
 
import logo from "../../img/mb10.jpg";

const Header = () => {
    const {allContext,selectedService}=useAuth()
    const { user, logOut, } = allContext;
    return (
        
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                <Navbar.Brand href="#home">
      <img
        src={logo}
        width="100"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    
      <Navbar.Brand>TOP FASHION</Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        {/* <Nav.Link as={HashLink} to="/services">Services</Nav.Link> */}
                        <Nav.Link as={HashLink} to="/myOrders">MyOrders</Nav.Link>
                        <Nav.Link as={HashLink} to="/adminDashboard">Admin</Nav.Link>
                        {/* <Nav.Link as={NavLink} to="/cart"><FontAwesomeIcon icon={faShoppingCart} />
        <Badge bg="secondary">{selectedService.length}</Badge>
        </Nav.Link> */}
                    
                        {user?.displayName ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                
                </Container>
            </Navbar>
        </>
    );
};

export default Header;