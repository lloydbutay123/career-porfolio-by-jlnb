import { Col, Container, Row } from "react-bootstrap";
import Education from "../Helper/Education";

function About() {
  return (
    <section className="aboutMe" id="aboutMe">
      <Container>
        {Education.map((school) => {
          return (
            <div className="education">
              <h2>{school.year}</h2>
              <h1>{school.name}</h1>
              <p>
                {school.course}
              </p>
            </div>
          );
        })}
      </Container>
    </section>
  );
}

export default About;
