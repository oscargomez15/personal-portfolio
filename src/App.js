import './App.css';
import {Header} from './Components/Header.js';
import { Hero } from './Components/Hero';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Certifications } from './Components/Certifications';
import {Footer} from './Components/Footer.js'
import { Contact } from './Components/Contact';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Certifications/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App;
