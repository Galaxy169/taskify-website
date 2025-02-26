import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarUI from "react-bootstrap/Navbar";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <NavbarUI expand="lg" sticky="top" className="bg-body-tertiary">
      <Container>
        <NavbarUI.Brand className="logo">
          <Link to="hero" smooth={true} duration={180} offset={-400}>
            Taskify
          </Link>
        </NavbarUI.Brand>
        <NavbarUI.Toggle aria-controls="basic-navbar-nav " />
        <NavbarUI.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar" navbarScroll>
            <Link to="hero" smooth={true} duration={180} offset={-400}>
              <NavbarUI.Text>Home</NavbarUI.Text>
            </Link>
            <Link to="features" smooth={true} duration={180} offset={-80}>
              <NavbarUI.Text>Features</NavbarUI.Text>
            </Link>
            <Link to="pricing" smooth={true} duration={180} offset={-80}>
              <NavbarUI.Text>Prices</NavbarUI.Text>
            </Link>
            <Link to="contact-us" smooth={true} duration={180} offset={-80}>
              <NavbarUI.Text>Contact Us</NavbarUI.Text>
            </Link>
          </Nav>
        </NavbarUI.Collapse>
      </Container>
    </NavbarUI>
  );
}

export default Navbar;
