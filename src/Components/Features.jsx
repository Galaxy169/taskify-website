import { Row, Col, Image, Container } from "react-bootstrap";
import feature1 from "../../public/feature-1.png";
import feature2 from "../../public/feature-2.png";
import feature3 from "../../public/feature-3.png";
import feature4 from "../../public/feature-4.png";

const features = [
  {
    title: "AI Task Prioritization",
    text: "Struggling with what to do next? Taskify AI-powered prioritization analyzes deadlines, urgency, and workload to suggest the most important tasks. Stay on track effortlessly without feeling overwhelmed. Let AI optimize your daily workflow so you can focus on what truly matters!",
    image: feature1,
  },
  {
    title: "Focus Mode",
    text: "Minimize distractions and boost productivity with Focus Mode! This feature hides non-essential tasks, silences notifications, and provides a clutter-free workspace. Set timers for deep work sessions and get reminders to take breaks—helping you stay efficient and balanced",
    image: feature2,
  },
  {
    title: "Analytics & Reports",
    text: "Gain insights into your productivity with Taskify smart analytics! Track your daily, weekly, and monthly progress with visual reports and detailed breakdowns. Identify patterns, optimize workflows, and celebrate milestones to stay motivated and productive every step of the way.",
    image: feature3,
  },
  {
    title: "Sync Across Devices",
    text: "Access your tasks anywhere with real-time cloud sync! Taskify seamlessly updates across mobile, tablet, and desktop, so your tasks are always at your fingertips. Whether you're at work, home, or on the go, your to-dos stay organized, ensuring continuous workflow without disruptions.",
    image: feature4,
  },
];

function Features() {
  return (
    <section className="features mt-5 mb-5">
      <Container>
        {features.map((feature) => (
          <Row
            key={feature.title}
            className="align-items-center justify-content-center flex-sm-row flex-column-reverse text-sm-start text-center gx-5 p-5 border-top rounded-top"
          >
            <Col sm={5} className="pt-4 pt-sm-0">
              <Image src={feature.image} fluid roundedCircle />
            </Col>
            <Col flex-column-reverse>
              <h1>{feature.title}</h1>
              <p>{feature.text}</p>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default Features;
