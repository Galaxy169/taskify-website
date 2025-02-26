import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import { BiLocationPlus, BiMailSend, BiPhoneCall } from "react-icons/bi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.includes("@")) {
      setMessage("Please enter a valid email.");
      return;
    }
    setMessage("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-us border-top rounded-top">
      <Container className="p-3 pt-5">
        <h2 className="text-center pb-4">Get in Touch</h2>
        <Row className="align-items-center">

          {/* Contact Details */}
          <Col md={6} className="text-md-start mb-4 mb-md-0">
            <h2>Send us a message</h2>
            <p>Have questions? We would love to hear from you!</p>
            <p className="contact-details">
              <span>
                <BiLocationPlus />
              </span>
              Address: 123 Taskify Lane, Productivity City
              <br />
              <span>
                <BiPhoneCall />
              </span>
              Phone: +123 456 7890
              <br />
              <span>
                <BiMailSend />
              </span>
              Email: support@taskify.com
            </p>
          </Col>

          {/* Contact Form */}
          <Col md={6}>
            <Form onSubmit={handleSubmit} className="mx-auto">
              <FloatingLabel
                controlId="floatingInput"
                label="Your Name"
                className="mb-2"
              >
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-2"
              >
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Your Message"
                className="mb-2"
              >
                <Form.Control
                  as="textarea"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>
              <div className="text-md-end me-md-4 mt-md-3">
                <Button type="submit" variant="primary">
                  Send Message
                </Button>
              </div>
            </Form>
            <p>{message}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
