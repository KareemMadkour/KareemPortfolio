import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; //react-bootstrap
import "animate.css"; //animate.style
import { Container, Row, Col } from "react-bootstrap";
import "./HomeMeStyling.css";
import Me from '../../assets/Me.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
//import Animation On Scrolling
import AOS from "aos";
import "aos/dist/aos.css";
export const HomeMe = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Container className="Home-Container" id="homeMe">
      <Row>
        <Col lg={6} data-aos='fade-up'>
          <h1>Front-end Web Developer</h1>
          <h2>Hey I'm Kareem Ahmed</h2>
          <h3>
            From Cairo, Egypt <FontAwesomeIcon icon={faMapPin} />{" "}
          </h3>
        </Col>
        <Col lg={6} data-aos='fade-up'>
          <img src={Me} alt="No-img-found" />
        </Col>
      </Row>
    </Container>
  );
};
