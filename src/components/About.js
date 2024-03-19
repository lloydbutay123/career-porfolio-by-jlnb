import { Container } from "react-bootstrap";
import Education from "../Helper/Education";
import Transition from "./Transition";
import { Link } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";

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

        <Link to="/services">
                <button className="viewButton">
                  View more at services <ArrowRight size={25} />
                </button>
              </Link>
      </Container>
    </section>
  );
}

export default Transition(About);
