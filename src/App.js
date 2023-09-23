import './App.css';
import {Header} from './Components/Header/Header.js';
import { Hero } from './Components/Hero/Hero.js';
import { Skills } from './Components/Skills/Skills.js';
import { Projects } from './Components/Project/Projects.js';
import { Certifications } from './Components/Certifications/Certifications.js';
import {Footer} from './Components/Footer/Footer.js'
import { Contact } from './Components/Contact/Contact.js';

function App() {

  return (
    <>
      <Header />
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
