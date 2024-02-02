import Test from "./Test";
import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Porjects from "./components/projects/Porjects";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id='About'><Parallax type='about'/></section>
      <section>
        <About/>
      </section>
      <section id='Projects'><Parallax type='projects'/></section>
      <Porjects />
      <section id='Contact'>
        <Contact/>
      </section>
    </div>
  );
};

export default App;
