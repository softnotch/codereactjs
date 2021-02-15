import React from 'react'
import { Navbar, Nav, NavDropdown,} from 'react-bootstrap';
import { Link } from 'react-router-dom';




function Navigation() {
    return (
            <section className="">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
              
                <Link to="/" className="text-decoration-none">
                    <Navbar.Brand href="home">Fairgate Tech</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/" className="text-decoration-none">
                                <Nav.Link href="home" >Home</Nav.Link>
                        </Link>
                        <Link to="/about" className="text-decoration-none">
                                <Nav.Link href="about" >About</Nav.Link>
                        </Link>
                        <Link to="/contact" className="text-decoration-none">
                                <Nav.Link href="contact">Contact</Nav.Link>
                        </Link>
                    <NavDropdown title="Programs" id="collasible-nav-dropdown" >
                        <Link to="/web" className="text-decoration-none">
                            <NavDropdown.Item href="product">Web Development</NavDropdown.Item>
                        </Link>
                        <Link to="/html" className="text-decoration-none">
                             <NavDropdown.Item href="product">HTML</NavDropdown.Item>
                        </Link>
                        <Link to="/php" className="text-decoration-none">
                            <NavDropdown.Item href="product">PHP</NavDropdown.Item>
                        </Link>
                        <Link to="/angular" className="text-decoration-none">
                            <NavDropdown.Item href="product">Angular</NavDropdown.Item>
                        </Link>
                       
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Link to="/login" className="text-decoration-none">
                                <Nav.Link href="login">Login</Nav.Link>
                    </Link>
                    <Link to="/register" className="text-decoration-none">
                                <Nav.Link href="register">Register</Nav.Link>
                    </Link>
                   
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </section>
    )
}

export default Navigation;
