import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Hero from "./components/Hero";
import Features from "./Components/Features";
import Pricing from "./Components/Pricing";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Container fluid>
        <Navbar />
        <Hero />
        <Features />
        <Pricing />
        <Contact />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
