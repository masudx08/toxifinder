import React from 'react';
import { Navbar, Container, Nav, Col, Row } from 'react-bootstrap';
import Logo from '../../images/logo.png'
export default function Header() {
  return <div>
      <>
        <Navbar bg="light" variant="light">
            <Container>
              <Row >
                <Col>
                  <Navbar.Brand href="#home">
                    <img style={{height:'40px'}} src={Logo} alt="" />
                  </Navbar.Brand>
                </Col>
                <Col xs='auto' md='5' lg='7 '>
                  <Nav className="me-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#toxifinder">Toxifinder</Nav.Link>
                      <Nav.Link href="#contact">Contact</Nav.Link>
                  </Nav>
                </Col>
              </Row>
            </Container>
        </Navbar>
     </>
  </div>;
}
