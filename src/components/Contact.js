import { Button, Col, Container, Row } from "react-bootstrap";
import ContactUs from "./SendEmail";
import { ArrowUpRight, TypeH2 } from "react-bootstrap-icons";
import Footer from "../components/Footer";
import Transition from "./Transition";

function Contact() {
  return (
    <Container>
      <section className="contact" id="contact">
        <div className="parent">
          <div className="left">
            <h2>
              Let’s talk about a project, collaboration or an idea you may have
            </h2>
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
        <h1>Better Together</h1>
        <Row>
          <Col lg={6}>
            <div className="contactDetails">
              <p>
                I enjoy working with dedicated creatives form businesses that
                make the world beautiul.
              </p>
              <p>We can do so much together. Lets talk.</p>
              <p>If you want mail: johnlloydbutay123@gmail.com</p>
              <p>If you want to hear my voise: 09567223090</p>
            </div>
          </Col>
          <Col lg={6}>
            <ContactUs />
          </Col>
        </Row>
        <Footer />
      </section>
    </Container>
  );
}

export default Transition(Contact);
