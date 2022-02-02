import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Logo from '../../images/logo.png'
import Banner from '../../images/banner.png'
import Style from './hero.module.css'

export default function Hero() {
  return <div className={Style.container}>
      <Row>
          <Col md={4}>
            <div className={Style.textContainer}>
                <h1>Bienvenido a Toxifinder</h1>
                <p>
                    Para comenzer a utilizer la heramainta dale al boton
                </p>
            </div>
          </Col>
          <Col md={8} className={Style.imgContainer}>
            <img className={Style.img} src={Banner} alt="" />
          </Col>
      </Row>
  </div>;
}
