import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Pricing() {
  return (
    <section className="pricing py-5 border-top rounded">
      <Container>
        <h2 className="text-center mb-4">Choose Your Plan</h2>
        <Row className="justify-content-center">
          {/* Free Plan */}
          <Col md={4} className="mb-4">
            <Card className="text-center shadow-sm">
              <Card.Body>
                <h5 className="fw-bold">Free Plan</h5>
                <h3 className="text-success">
                  Rs0<span className="text-muted">/month</span>
                </h3>
                <p>For individuals getting started with Taskify.</p>
                <ul className="list-unstyled">
                  <li>Basic task management</li>
                  <li>Up to 3 projects</li>
                  <li>100MB cloud storage</li>
                  <li>Task reminders</li>
                  <li>Limited integrations</li>
                </ul>
                <Button variant="outline-success">Get Started</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Pro Plan */}
          <Col md={4} className="mb-4">
            <Card className="text-center shadow border-primary">
              <Card.Body>
                <h5 className="fw-bold">Pro Plan</h5>
                <h3 className="text-primary">
                  Rs599<span className="text-muted">/month</span>
                </h3>
                <p>For professionals needing more power.</p>
                <ul className="list-unstyled">
                  <li>Everything in Free Plan</li>
                  <li>Unlimited projects & tasks</li>
                  <li>AI-powered recommendations</li>
                  <li>Team collaboration (up to 10)</li>
                  <li>5GB cloud storage</li>
                  <li>Advanced analytics</li>
                </ul>
                <Button variant="primary">Upgrade to Pro</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Enterprise Plan */}
          <Col md={4} className="mb-4">
            <Card className="text-center shadow-sm">
              <Card.Body>
                <h5 className="fw-bold">Enterprise Plan</h5>
                <h3 className="text-primary">Custom Pricing</h3>
                <p>For businesses that need full control.</p>
                <ul className="list-unstyled">
                  <li>Everything in Pro Plan</li>
                  <li>Unlimited team members</li>
                  <li>Priority support</li>
                  <li>Custom workflows & automation</li>
                  <li>Dedicated account manager</li>
                  <li>50GB+ cloud storage</li>
                </ul>
                <Button variant="outline-dark">Contact Sales</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;
