import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; //react-bootstrap
import { Container, Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import "./ContactMeStyling.css";
//import the icons
import FaceBookIcon from "../../assets/Icons/FacebookIcon.png";
import InstagramIcon from "../../assets/Icons/InstagramIcon.png";
import GithubIcon from "../../assets/Icons/GithubIcon.png";
import LinkedInIcon from "../../assets/Icons/LinkedinIcon.png";
//import Animation On Scrolling
import AOS from "aos";
import "aos/dist/aos.css";
export const ContactMe = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Container className="Contact-Container" id="contactMe">
      <Row>
        <h1>Contact Me</h1>
        <Col lg="4" data-aos='fade-up-right'>
          <h3>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:KareemAhmed6997@gmail.com">Email Me</a>
          </h3>
          <h3>
            <FontAwesomeIcon icon={faPhoneSquare} />
            <a href="tel:+201062052764">Call Me</a>
          </h3>
          <section className="social-media-section">
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FaceBookIcon} />
            </a>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={InstagramIcon} />
            </a>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedInIcon} />
            </a>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GithubIcon} />
            </a>
          </section>
        </Col>
        <Col lg="8" data-aos='fade-up-left'>
          <Form>
            <Form.Group className="mb-3" controlId="form-full-name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form-email-address">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form-textarea">
              <Form.Label>Leave a message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Leave a message..."
              />
            </Form.Group>
            <a href="#" className="submit-btn">
              Submit
            </a>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
