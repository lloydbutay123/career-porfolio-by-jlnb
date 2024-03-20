import { Container } from "react-bootstrap";
import Socials from "../components/Socials";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Container>
      <footer>
        <Socials />
        <p>Made with ❤️ by John Lloyd Butay</p>
        <p>Copyright © {year} All Rights Reserved.</p>
      </footer>
    </Container>
  );
}

export default Footer;
