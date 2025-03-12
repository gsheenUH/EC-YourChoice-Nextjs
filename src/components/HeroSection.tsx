'use client';

import { Container, Row, Col, Button, Image } from 'react-bootstrap';

const HeroSection = () => (
  <Container>
    <Row className="align-items-end">
      {/* Image Column */}
      <Col xs={12} md={6} className="text-center">
        <Image
          src="/images/hero-webcam-mx-anywhere3s-product-desktop.webp"
          className="img-fluid"
          alt="MX Anywhere 3S Mouse"
        />
      </Col>
      {/* Text Column */}
      <Col xs={12} md={6} className="mb-5">
        <h1 className="mb-2 fs-3">MX Anywhere 3S</h1>
        <p style={{ fontSize: '3em', lineHeight: 1.2 }}>
          Tracks
          <br />
          everywhere,
          <br />
          goes anywhere
        </p>
        <p className="text-muted mb-2">$69.99 – $79.99</p>
        <Button
          className="btn-lg rounded-pill"
          style={{
            backgroundColor: '#02FDCF',
            borderColor: '#02FDCF',
            color: '#000',
            width: '170px',
          }}
          href="#"
        >
          LEARN MORE
        </Button>
      </Col>
    </Row>
  </Container>
);

export default HeroSection;
