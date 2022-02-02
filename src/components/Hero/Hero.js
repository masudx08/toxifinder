import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../../images/logo.png'
import Banner from '../../images/banner.png'
import './hero.css'

export default function Hero() {
  return <div >
      <Container>
          <Row className='d-flex justify-content-around align-items-center  py-5'>
              <Col xs='6' md='4' className=''>
                <div className='textContainer'>
                    <h1>Bienvenido a Toxifinder</h1>
                    <p>
                        Para comenzer a utilizer la heramainta dale al boton
                    </p>
                </div>
              </Col>
              <Col xs='6' md='4' >
                <img className='img' src={Banner} alt="" />
              </Col>
          </Row>
      </Container>
  </div>;
}
