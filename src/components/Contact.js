import {
  Button,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import ContactUs from "./SendEmail";
import { ArrowUpRight, GeoAltFill } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import Footer from "../components/Footer";
import Transition from "./Transition";
import { FaMailBulk, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <Container>
      <section className="contact" id="contact">
        <div className="parent">
          <div className="left">
            <h1>
              Let’s talk about a project, collaboration or an idea you may have
            </h1>
          </div>
          <div className="right">
            <a href="#formSubmit">
              <Button>
                Drop me a line{" "}
                <span>
                  <ArrowUpRight />
                </span>
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="formSubmit" id="formSubmit">
        <Row className="formRow">
          <Col lg={8}>
          <h1>GET IN TOUCH</h1>
          <Row>
            <Col lg={6}>
            <h2>Philippines</h2>
            <p><span><GeoAltFill /> </span>#14 Bungon, City of Batac Ilocos Norte Philippines, 2906</p>
            </Col>
            <Col lg={6}>
            <h2>Contact Info</h2>
            <p><span><FaPhone /> </span>09567223090</p>
            <p><span><FaMailBulk /> </span>johnlloydbutay123@gmail.com</p>
            </Col>
          </Row>
          </Col> 
          <ContactUs />
        </Row>
        <Footer />
      </section>
    </Container>
  );
}

export default Transition(Contact);
