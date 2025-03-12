'use client';

import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import { GlobeAmericas } from 'react-bootstrap-icons';

const TopGrayNav = () => (
  <Navbar style={{ backgroundColor: '#F2F2F2' }}>
    <Container className="d-flex justify-content-between align-items-center">

      <Nav>
        <div className="d-flex align-items-left pt-3 me-2">
          <Image
            src="/images/logitech.png"
            width={50}
            height={15}
            alt="Logitech logo"
          />
        </div>
        <Nav.Item>
          <Nav.Link as="span" className="text-muted me-2">
            |
          </Nav.Link>
        </Nav.Item>
        <div className="d-flex align-items-left pt-3 me-2">
          <Image
            src="/images/logitech.png"
            width={50}
            height={15}
            alt="Another Logitech logo"
          />
          <Image
            src="/images/logitech-icon.png"
            width={15}
            height={15}
            alt="Logitech small icon"
            className="ms-2"
          />
        </div>
        <Nav.Item>
          <Nav.Link as="span" className="text-muted">
            |
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="text-muted">
            Business
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as="span" className="text-muted">
            |
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="text-muted">
            Education
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Empty Nav sections for spacing */}
      <Nav>
        <Nav.Item>
          <Nav.Link />
        </Nav.Item>
      </Nav>
      <Nav>
        <Nav.Item>
          <Nav.Link />
        </Nav.Item>
      </Nav>
      <Nav>
        <Nav.Item>
          <Nav.Link />
        </Nav.Item>
      </Nav>

      <Nav>
        <Nav.Item>
          <Nav.Link href="#" className="text-muted">
            Support
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as="span" className="text-muted me-2">
            |
          </Nav.Link>
        </Nav.Item>
        <GlobeAmericas className="text-muted my-3" />
        <Nav.Item>
          <Nav.Link as="span">
            <i className="bi bi-globe-americas text-muted"> US,EN</i>

          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  </Navbar>
);

export default TopGrayNav;
