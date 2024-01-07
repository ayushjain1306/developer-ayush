import './App.css';
import Header from "./Components/header/Header.jsx";
import Home from "./Components/home/Home.jsx";
import About from "./Components/about/About.jsx";
import Skills from "./Components/skills/Skills.jsx";
import Projects from "./Components/projects/Project.jsx";
import Contact from "./Components/contact/Contact.jsx";
import Footer from "./Components/footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
