import { Hero } from './Components/Hero/Hero.jsx';
import { Skills } from './Components/Skills/Skills.jsx';
import { Projects } from './Components/Project/Projects.jsx';
import { Contact } from './Components/Contact/Contact.jsx';
import { Diagrams } from 'Components/AWS Diagrams/Diagrams.jsx';
import { About } from 'Components/About/About.jsx';
import 'App.css'
import { Experience } from 'Components/Experience/Experience.jsx';

function App() {

  return (
    <>
      <Hero/>
      <div className="content-wrapper">
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Diagrams/>
        <Contact/>
      </div>
    </>
  )
}

export default App;
