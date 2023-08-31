import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; //react-bootstrap
import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import "./ProjectsMeStyling.css";
//import FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
//importing images
import Template1 from "../../assets/Projects/Arsha-preview.png";
import Template2 from "../../assets/Projects/FoodFinda.png";
import Calc from "../../assets/Projects/Calculator-preview.png";
import ToDo from "../../assets/Projects/To-Do preview.png";
import EStore from "../../assets/Projects/E-Store-preview.png";
import DigitalClock from "../../assets/Projects/DigitalClock-preview.png";
//import Animation On Scrolling
import AOS from "aos";
import "aos/dist/aos.css";
export const ProjectsMe = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Container className="Projects-Container" id="projectsMe">
      <Row data-aos='fade-up'>
        <h1>My Work</h1>
        <Col lg={6}>
          <Card>
            <Card.Img variant="top" src={Template1} alt="No-img-found" />
            <Card.Body>
              <Card.Title>Template 1</Card.Title>
              <Nav.Link
                href="https://kareemmadkour.github.io/Temp1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo <FontAwesomeIcon icon={faPaperclip} />
              </Nav.Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Calc} alt="No-img-found" />
            <Card.Body>
              <Card.Title>Calculator</Card.Title>
              <Nav.Link
                href="https://kareemmadkour.github.io/Calculator/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo <FontAwesomeIcon icon={faPaperclip} />
              </Nav.Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={EStore} alt="No-img-found" />
            <Card.Body>
              <Card.Title>E-Store</Card.Title>
              <Nav.Link
                href="https://kareemmadkour.github.io/Shopping/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo <FontAwesomeIcon icon={faPaperclip} />
              </Nav.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Img variant="top" src={Template2} alt="No-img-found" />
            <Card.Body>
              <Card.Title>Template 2</Card.Title>
              <Nav.Link
                href="https://kareemmadkour.github.io/Temp2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo <FontAwesomeIcon icon={faPaperclip} />
              </Nav.Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={DigitalClock} alt="No-img-found" />
            <Card.Body>
              <Card.Title>Digital Clock</Card.Title>
              <Nav.Link
                href="https://kareemmadkour.github.io/Digital-Clock/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo <FontAwesomeIcon icon={faPaperclip} />
              </Nav.Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={ToDo} alt="No-img-found" />
            <Card.Body>
              <Card.Title>To-Do App</Card.Title>
              <Nav.Link
                href="https://kareemmadkour.github.io/To-Do/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo <FontAwesomeIcon icon={faPaperclip} />
              </Nav.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
