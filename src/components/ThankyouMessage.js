import { Button, Container } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function ThankyouMessage() {
  return (
    <Container>
      <section className="thankyouMessage" id="thankyouMessage">
        <div className="thankyouContent">
          <FaCheckCircle size={60} className="mb-3" />
          <h1>Thanks for reaching out!</h1>
          <p>
            <span>
              Your message just showed up in my inbox. Talk to you soon!
            </span>
          </p>
          <Button as={Link} to="/">
            Back to home
          </Button>
        </div>
      </section>
    </Container>
  );
}

export default ThankyouMessage;
