import { Hero } from './Components/Hero/Hero.jsx';
import { Skills } from './Components/Skills/Skills.jsx';
import { Projects } from './Components/Project/Projects.jsx';
import { Contact } from './Components/Contact/Contact.jsx';
import { Diagrams } from 'Components/AWS Diagrams/Diagrams.jsx';
function App() {

  return (
    <>
      <Hero/>
      <Skills/>
      <Projects/>
      <Diagrams/>
      <Contact/>
    </>
  )
}

export default App;
