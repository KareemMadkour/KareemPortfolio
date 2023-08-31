import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; //react-bootstrap
import { Container, Row, Col, Card } from "react-bootstrap";
import "./ServicesMeStyling.css";
import UIUX from "../../assets/Services/UI-UX-Design.jpg";
import WebDev from "../../assets/Services/web-development.png";
import MiniPro from "../../assets/Services/mini-projects.jpg";
//import Animation On Scrolling
import AOS from "aos";
import "aos/dist/aos.css";
export const ServicesMe = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Container className="Services-Container" id="servicesMe">
      <Row data-aos='fade-up'>
        <h1>My Services</h1>
        <Col lg={4}>
          <Card>
            <Card.Img variant="top" src={UIUX} alt="No-img-found" />
            <Card.Body>
              <Card.Title>UI/UX design</Card.Title>
              <Card.Text>
                Creating a UI/UX design for websites responsive on various sizes
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <Card.Img variant="top" src={WebDev} alt="No-img-found" />
            <Card.Body>
              <Card.Title>Web Development</Card.Title>
              <Card.Text>
                Creating a user-friendly website responsive on various sizes
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <Card.Img variant="top" src={MiniPro} alt="No-img-found" />
            <Card.Body>
              <Card.Title>Mini-projects</Card.Title>
              <Card.Text>
                Creating a project that does small and efficient tasks
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
