import { Container, Button, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-scroll";

function Hero() {
  return (
    <div className="hero pt-sm-0 pt-5 rounded-sm-1">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col className="d-flex d-sm-block flex-wrap justify-content-center m-3">
            <h1 className="text-center text-sm-start mb-3">
              Supercharge Your Productivity with Taskify App
            </h1>
            <p className="text-center text-sm-start mb-4">
              AI-powered task management to help you focus and organize better.
            </p>
              <Link to="pricing" smooth={true} duration={180} offset={-130}>
                <Button variant="primary" className="me-2">
                  Get Started for Free
                </Button>
              </Link>
            <Link to="features" smooth={true} duration={180} offset={-130}>
              <Button variant="outline-dark">Learn More</Button>
            </Link>
          </Col>
          <Col
            sm={5}
            className="d-flex d-sm-block flex-wrap justify-content-center mt-5"
          >
            <Image src="/hero-image.webp" loading="lazy" fluid rounded className="lazy" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
