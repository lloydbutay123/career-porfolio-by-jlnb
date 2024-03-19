import { Container } from "react-bootstrap";
import Socials from "../components/Socials";
import { FaHeart } from "react-icons/fa";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Container>
      <footer>
        <Socials />
        <p>Made with <FaHeart /> by John Lloyd Butay</p>
        <p>Copyright © {year} All Rights Reserved.</p>
      </footer>
    </Container>
  );
}

export default Footer;
