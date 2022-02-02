import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Style from './header.module.css'

export default function Header() {
  return <div>
      <>
        <Navbar bg="light" variant="light">
            <Container>
            <div>
              <Navbar.Brand href="#home">BrandLogo</Navbar.Brand>
            </div>
            <Nav className="me-auto">
              <div className={Style.list}>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#toxifinder">Toxifinder</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </div>
            </Nav>
            </Container>
        </Navbar>
     </>
  </div>;
}
