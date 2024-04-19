import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Bird Travel Agency</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#destinations">Destinations</Nav.Link>
            <NavDropdown title="Hotels" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Sofitel Barú Calablanca
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Hotel Las Américas Torre del Mar
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Hotel York Luxury Suites
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Hyatt Regency Cartagena
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#flights">Flights</Nav.Link>
            <Nav.Link href="#bookings">Bookings</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#signup">Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
