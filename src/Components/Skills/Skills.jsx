import React from 'react'
import 'Components/Skills/Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faFigma, faGithub, faHtml5, faJs, faNpm, faReact, faSass, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faGaugeSimpleHigh, faRobot, faUniversalAccess, faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';

export const Skills = () => {
  return(
  <section className='skills-wrapper' id='skills'>
    <div className="skills-flex fade-in-effect">
      <article className='section-title'>
        <h2 className='secondary-heading' tabIndex={-1}>Core Competencies</h2>
        <p className='sub-heading'>Showcasing some of the skills that have allowed me to become an effective front-end developer. </p>
      </article>
      <article className="skills-names">
        <ul>
          <li><FontAwesomeIcon icon={faHtml5} size='lg'/>HTML5</li>
          <li><FontAwesomeIcon icon={faCss3Alt} size='lg'/>CSS3</li>
          <li><FontAwesomeIcon icon={faJs} size='lg'/>Javascript</li>
          <li><FontAwesomeIcon icon={faReact} size='lg'/> React.js</li>
          <li><FontAwesomeIcon icon={faSass} size='lg'/></li>
          <li><FontAwesomeIcon icon={faWordpress} size='lg'/>Wordpress</li>
          <li><FontAwesomeIcon icon={faFigma} size='lg'/>Figma</li>
          <li><FontAwesomeIcon icon={faNpm} size='xl'/></li>
          <li><FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} size='lg'/> Responsive</li>
          <li><FontAwesomeIcon icon={faGithub} size='lg'/>Github</li>

        </ul>
      </article>

      <article className='section-title'>
        <h3 className='sub-heading'> In an era in which technology is growing exponentially, it is imperative to keep myself competent and up to date to develop software/apps/websites that meets current standards.
          These are some of the skills that I'm working on as of 01/2024.
        </h3>
      </article>

      <article className="skills-names">
        <ul>
          <li><FontAwesomeIcon icon={faUniversalAccess} size='lg'/>Accessibility</li>
          <li><FontAwesomeIcon icon={faGaugeSimpleHigh} size='lg'/>Optimization</li>
          <li><FontAwesomeIcon icon={faDatabase} size='lg'/>SQL</li>
          <li><FontAwesomeIcon icon={faRobot}/>Artificial Intelligence</li>
        </ul>
      </article>

    </div>
  </section>)
}
