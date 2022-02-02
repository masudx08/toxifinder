import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {RiFacebookBoxFill} from 'react-icons/ri'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTwitterSquare} from 'react-icons/fa'
import Logo from '../../images/logo2.png'
import './footer.css'

export default function Footer() {
  return <div style={{marginTop: "10%"}}>
      <>
        <Navbar bg="light" variant="light">
            <Container style={{fontSize: '20px'}} className="d-flex align-items-center">
                
                <Nav className="me-auto">
                    <Nav.Link href="#">
                      <RiFacebookBoxFill />
                    </Nav.Link>
                    <Nav.Link href="#">
                      <AiFillInstagram />
                    </Nav.Link>
                    <Nav.Link href="#">
                      <FaTwitterSquare />
                    </Nav.Link>
                </Nav>
                  <div style={{width:'80%', display:'flex', justifyContent:'center'}}>
                    <img style={{height:'35px', }} src={Logo} alt="" />
                  </div>
                  <div style={{fontSize: '13px'}}>
                    <p>Copyright 2022</p>
                  </div>

            </Container>
        </Navbar>
     </>
  </div>;
}
