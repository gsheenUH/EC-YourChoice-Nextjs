'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';

const WorkspaceSection = () => (
  <section
    style={{
      background: 'url(\'/images/girl-using-lift-vertical-mouse-desktop.jpg\') center center / cover no-repeat',
      position: 'relative',
      color: '#fff',
      padding: '5rem 0',
    }}
  >
    <Container>
      <Row className="">
        <Col md={5} className="text-end">
          <p className="me-3" style={{ fontSize: '3em', lineHeight: 1.2 }}>
            Innovate your
            <br />
            workspace, unlock
            <br />
            your potential.
          </p>
          <ul className="me-3" style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li>
              <h3>$75 off $350</h3>
            </li>
            <li>
              <h3>$50 off $250</h3>
            </li>
            <li>
              <h3>$25 off $120</h3>
            </li>
          </ul>
          <p className="me-3 mb-4">
            Limited time offer.
            {' '}
            <u>Exclusions apply*</u>
          </p>
          <Button
            className="btn-lg rounded-pill me-3"
            style={{
              backgroundColor: '#02FDCF',
              borderColor: '#02FDCF',
              color: '#000',
              width: '170px',
            }}
            href="#"
          >
            SHOP NOW
          </Button>
        </Col>
      </Row>
    </Container>
  </section>
);

export default WorkspaceSection;
