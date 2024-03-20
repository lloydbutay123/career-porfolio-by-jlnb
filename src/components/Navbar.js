import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import mainLogo from "../assets/logo/6050a8e5-32c1-4f37-bb6d-dc6f954b7aeb.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button, Container } from "react-bootstrap";

function NavBar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <Container>
      <header>
        <Link as={Link} to="/">
          <img src={mainLogo} onClick={showNavbar} />
        </Link>
        <nav ref={navRef}>
          <Link as={Link} to="/" onClick={showNavbar}>
            Home
          </Link>
          <Link as={Link} to="/about" onClick={showNavbar}>
            About
          </Link>
          <Link as={Link} to="/services" onClick={showNavbar}>
            Services
          </Link>
          <Link as={Link} to="/projects" onClick={showNavbar}>
            Projects
          </Link>
          <Link as={Link} to="/contact" onClick={showNavbar}>
            Contact
          </Link>
          <Button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </Button>
        </nav>
        <Button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </Button>
      </header>
    </Container>
  );
}
export default NavBar;
