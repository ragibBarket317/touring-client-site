import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">FunTouring</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/service">Add Service</Nav.Link>
                            <Nav.Link as={Link} to="/manage">Manage Order</Nav.Link>
                            {user?.displayName ?
                                <Nav.Link as={Link} to="/myorder">My Order</Nav.Link> :
                                <Nav.Link></Nav.Link>

                            }
                            {user?.displayName ?
                                <Button className="mx-2" onClick={logOut} variant="light">Logout</Button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                            <Navbar.Text>
                                {user?.displayName ?
                                    <div>
                                        Signed in as : <a href="#login">{user?.displayName}</a>
                                    </div> :
                                    <div></div>
                                }
                            </Navbar.Text>
                        </Nav>

                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </>
    );
};

export default Header;


