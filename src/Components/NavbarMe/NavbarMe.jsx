import "bootstrap/dist/css/bootstrap.min.css"; //react-bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './NavbarMeStyling.css'
import portfolioImage from '../../assets/portfolio.png'
export const NavbarMe = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#homeMe"> <img src={portfolioImage} alt="No-img-found" /> Kareem Ahmed</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#homeMe">Home</Nav.Link>
            <Nav.Link href="#aboutMe">About</Nav.Link>
            <Nav.Link href="#servicesMe">Services</Nav.Link>
            <Nav.Link href="#projectsMe">Projects</Nav.Link>
            <Nav.Link href="#contactMe">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
