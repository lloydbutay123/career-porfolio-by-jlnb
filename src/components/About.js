import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Education from "../Helper/Education";
import Transition from "./Transition";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";
import Experiences from "../Helper/Expererience";
import Trainings from "../Helper/Trainings";

function About() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <section className="aboutMe" id="aboutMe">
      <Container>
        <div className="title">
          <h1>Education</h1>
        </div>
        {Education.map((school) => {
          return (
            <div className="education">
              <h3>
                <span>{school.year}</span>
              </h3>
              <h2>{school.name}</h2>
              <p>{school.course}</p>
            </div>
          );
        })}

        <div className="title">
          <h1>Work Experience</h1>
        </div>
        {Experiences.map((experience) => {
          return (
            <div className="education">
              <h3>
                <span>{experience.year}</span>
              </h3>
              <h2>{experience.name}</h2>
              <p>{experience.title}</p>
            </div>
          );
        })}

        <div className="title">
          <h1>Trainings & Certificates</h1>
        </div>
        {Trainings.map((training) => {
          return (
            <div className="education">
              <h3>
                <span>{training.issuedOn}</span>
              </h3>
              <h2>{training.name}</h2>
              <p>{training.company}</p>
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
