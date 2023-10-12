import "./App.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
      <Navbar />
      <ParallaxProvider>
        <section id="home">
          <Home />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </ParallaxProvider>
      <Footer />
    </>
  );
}

export default App;
