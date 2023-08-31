import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; //react-bootstrap
import "./AboutMeStyling.css";
import { Container, Row, Col } from "react-bootstrap";
//import images
import MyImage from "../../assets/person.jpg";
import BootstrapIcon from "../../assets/TechUsed/bootstrap.png";
import CSSIcon from "../../assets/TechUsed/css.png";
import HTMLIcon from "../../assets/TechUsed/html.png";
import JSIcon from "../../assets/TechUsed/javascript.png";
import NodeJSIcon from "../../assets/TechUsed/node-js.png";
import ReactIcon from "../../assets/TechUsed/react.png";
import GitIcon from "../../assets/TechUsed/git.png";
//import Animation On Scrolling
import AOS from "aos";
import "aos/dist/aos.css";
export const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Container className="About-Container" id="aboutMe">
      <Row>
        <Col lg="6" data-aos='fade-right'>
          <img src={MyImage} alt="No-img-found" />
        </Col>
        <Col lg="6" data-aos='fade-left'>
          <h1>About Me</h1>
          <h4>Hi I'm Kareem Ahmed, I'm a junior front-end web developer</h4>
          <h4>I have a Bachelor degree in Computer Science</h4>
          <h4>interested in web development</h4>
          <h4>
            My mission is to ensure consistency of behaviour on all devices used
            for the benefit of the application or the website.
          </h4>
          <br />
          <br />
          <Row>
            <Col lg="6">
              <h4>Tech Used</h4>
            </Col>
            <Col lg="6">
              <img src={HTMLIcon} />
              <img src={CSSIcon} />
              <img src={JSIcon} />
              <img src={BootstrapIcon} />
              <img src={ReactIcon} />
              <img src={NodeJSIcon} />
              <img src={GitIcon} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
