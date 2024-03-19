import { Container, Row, Col } from "react-bootstrap";
import ProjectLists from "../Helper/Projects";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Transition from "./Transition";

function Projects() {
  return (
    <Container>
      <section className="projects" id="projects">
        <div className="projectsContent">
          <h1>Crafted with love</h1>
          <h2>These are selection of my recent works.</h2>
          <a href="#projectsList">
            <div className="scrollDown"></div>
          </a>
        </div>
      </section>

      <section className="projectsList" id="projectsList">
        <Container>
          <div>
            <Row gutter={24}>
              {ProjectLists.map((project) => {
                return (
                  <>
                    <Col lg={6}>
                      <div className="projectList">
                        <h1>0{project.id}</h1>
                        <h2>{project.title}</h2>
                        <p>{project.text} <span>{project.date}</span></p>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="projectList2">
                        <a href={project.link} target="_blank">
                          View Project{" "}
                          <span>
                            <ArrowRight />
                          </span>
                        </a>
                      </div>
                    </Col>
                  </>
                );
              })}
            </Row>
            <Link to="/resume">
                <button>
                  View my Resume <ArrowRight size={25} />
                </button>
              </Link>
          </div>
        </Container>
      </section>
    </Container>
  );
}

export default Transition(Projects);
