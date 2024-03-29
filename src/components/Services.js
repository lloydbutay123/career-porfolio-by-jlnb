import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServicesList from "../Helper/Services";
import Skills from "../Helper/Skills";
import Transition from "./Transition";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";

function Services() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <Container>
      <section className="services" id="services">
        <div className="block productCategories">
          <h2>I can help you with ...</h2>
          <Row>
            {ServicesList.map((service) => {
              return (
                <Col sm={12} lg={4}>
                  <div className="content" key={service.id}>
                    <h2>
                      <span>{service.id}</span>
                    </h2>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="skillsTitle">
          <h1>Technologies</h1>
          <h1>
            & <span>Tools</span>
          </h1>
        </div>
        <div className="block skillsCategories">
          {Skills.map((skill) => {
            return <div className="grid-item">{skill.icon}</div>;
          })}
        </div>

        <Link to="/projects">
          <button className="viewButton">
            View my Projects <ArrowRight size={25} />
          </button>
        </Link>
      </section>
    </Container>
  );
}

export default Transition(Services);
