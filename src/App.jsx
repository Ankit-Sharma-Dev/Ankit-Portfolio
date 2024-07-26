import './App.css';
import Contact from './sections/Contact/Contact';
import Experiences from './sections/Experiences/Experiences';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero'; 
import Projects from './sections/Hero/Projects/Projects';
import Skills from './sections/Skills/Skills';
import { Analytics } from "@vercel/analytics/react";
 
function App() {

  return (
    <>
       <Hero/>
       <Projects/>
       <Experiences />
       <Skills />
       <Contact />
       <Footer />
    </>
  )
}

export default App
