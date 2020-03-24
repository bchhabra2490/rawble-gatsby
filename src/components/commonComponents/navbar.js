import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Container } from "react-bootstrap";
import Cart from './cart';

const TopNavbar = ({siteTitle}) => (
    <Container>
    <Navbar fixed="top" className="navbar" >
        <Link to="/"><Navbar.Brand>{siteTitle}</Navbar.Brand></Link>
        <Nav className="mr-auto">
            <Nav.Link><Link to="/marketplace/">Marketplace</Link></Nav.Link>
            <Nav.Link><Link to="/contact/">About Us</Link></Nav.Link>
        </Nav>
        <Nav>
            <Cart />
        </Nav>
    </Navbar>
    </Container>
)

export default TopNavbar
