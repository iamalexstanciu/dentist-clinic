
import "./App.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <section>
        <Home />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;
