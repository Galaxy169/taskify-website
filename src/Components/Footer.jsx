import { Container, Stack } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="footer p-4">
      <Container className="border-top">
        <Stack
          direction="horizontal"
          className="justify-content-between mt-3 flex-column flex-md-row"
        >
          <div className="logo mb-md-0 mb-2">
            <Link to="hero" smooth={true} duration={180} offset={-400}>
              Taskify
            </Link>
          </div>
          <div className="mb-md-0 mb-2">&copy; 2024 All rights reserved</div>
          <div className="fs-4 social-icons">
            <span>
              <FaYoutube />
            </span>
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaInstagram />
            </span>
            <span>
              <FaLinkedin />
            </span>
          </div>
        </Stack>
      </Container>
    </div>
  );
}

export default Footer;
