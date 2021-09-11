import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import './styles.scss';

const Hero = () => (
  <Container>
    <header className="hero">
      <Row>
        <Col span={6} className="hero__img">
          <StaticImage src="../../images/logo-ek-watercolor.png" alt="hero" />
        </Col>
        <Col span={6} className="hero__content">
          <div className="hero__text">The best is handmade</div>
          <div className="hero__subtext">Crochet pattern designer & tester</div>
        </Col>
      </Row>
    </header>
  </Container>
);

export default Hero;
