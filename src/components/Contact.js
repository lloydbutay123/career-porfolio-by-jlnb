import { Button, Col, Container, FormGroup, Row } from "react-bootstrap";
import { ArrowUpRight } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Footer from "../components/Footer";

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
          </Col>
          <Col lg={4}>
            <Form
              method="POST"
              action="https://formsubmit.co/johnlloydbutay123@gmail.com"
            >
              <FormGroup>
                <Form.Control
                  className="mb-3"
                  name="fName"
                  aria-label="First name"
                  placeholder="First Name"
                />
                <Form.Control
                  className="mb-3"
                  name="lName"
                  aria-label="Last name"
                  placeholder="Last Name"
                />

                <Form.Control
                  className="mb-3"
                  name="email"
                  aria-label="email"
                  placeholder="email"
                />

                <Form.Control
                  name="message"
                  aria-label="message"
                  className="mb-3"
                  as="textarea"
                />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
        <Footer />
      </section>
    </Container>
  );
}

export default Contact;
