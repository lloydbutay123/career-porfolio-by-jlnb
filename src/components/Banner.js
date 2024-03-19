import React from "react";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Socials from "./Socials";
import Transition from "./Transition";



function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Software Engineer",
    "Web Developer",
    "Front-end Developer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="banner">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="sectionContent">
              <h1>
                I'M {"John Lloyd Butay, "} <span className="wrap">{text}</span>
                <span className="blink">|</span>
              </h1>
              <p>
                Your friendly neighborhood frontend developer, web developer,
                and Software Engineer. I spend my days (and often nights)
                painting the Internet canvas with{" "}
                <span className="bannerLinks">
                  <Link to="/projects">PROJECTS</Link>
                </span>{" "}
                and lines of code, turning zeroes and ones into immersive,
                interactive experiences,
              </p>

              <p>
                Bona fide photochromic LENS enthusiast - sunlight or indoors,
                I've got it covered. I tread the path of minimalism, finding
                beauty in simplicity and order. When I'm not crafting beautiful
                web experiences, you can find me reading ARTICLES or swaying to
                the rhythm of Pop Music & Jazz, losing myself in the captivating
                flow of melodies. Anyways you can{" "}
                <span className="bannerLinks">
                  <Link to="/contact">CONTACT ME</Link>
                </span>
              </p>

              <Link to="/about">
                <button className="viewButton">
                  See more about me <ArrowRight size={25} />
                </button>
              </Link>
            </div>
          </Col>
        </Row>
        <Socials />
      </Container>
    </section>
  );
}

export default Transition(Banner);
