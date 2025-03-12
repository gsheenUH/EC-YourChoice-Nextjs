'use client';

import { Navbar, Container, Nav, Form, FormControl, Image } from 'react-bootstrap';
import { Heart, Person, Cart } from 'react-bootstrap-icons';

const MainNav = () => (
  <Navbar bg="white" className="shadow-sm">
    <Container className="d-flex justify-content-between align-items-center">
      <Navbar.Brand>
        <Image
          src="/images/logitech.png"
          width={80}
          alt="Logitech"
        />
      </Navbar.Brand>

      <Nav className="me-auto">
        <Nav.Link href="#" className="text-dark me-4">
          Shop
        </Nav.Link>
        <Nav.Link href="#" className="text-dark me-4">
          Planet &amp; People
        </Nav.Link>
        <Nav.Link href="#" className="text-dark me-4">
          Software
        </Nav.Link>
        <Nav.Link href="#" className="text-dark me-4">
          Deals
        </Nav.Link>
      </Nav>

      <Form className="d-flex align-items-center">
        <FormControl
          type="search"
          placeholder=""
          className="rounded-pill me-3"
          style={{ backgroundColor: '#E9E9E9', width: '200px' }}
        />
        <Heart className="me-4 fs-5" />
        <Person className="me-4 fs-5" />
        <Cart className="fs-5" />
      </Form>
    </Container>
  </Navbar>
);

export default MainNav;
