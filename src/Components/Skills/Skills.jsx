import React from 'react'
import 'Components/Skills/Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faCss3Alt, faDocker, faFigma, faGithub, faHtml5, faJenkins, faJs, faLinux, faNpm, faPython, faReact, faSass, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faGaugeSimpleHigh, faGears, faNetworkWired, faRobot, faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';

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
          <li><FontAwesomeIcon icon={faAws} size='lg'/> Amazon Web Service</li>
          <li><FontAwesomeIcon icon={faNetworkWired} size='lg'/> Networking </li>
          <li><FontAwesomeIcon icon={faDocker} size='lg'/> Docker </li>
          <li><FontAwesomeIcon icon={faLinux} size='lg'/> Linux </li>
          <li><FontAwesomeIcon icon={faCode} size='lg'/> IaC </li>
          <li><FontAwesomeIcon icon={faGears}/>Ansible</li>
          <li><FontAwesomeIcon icon={faPython} size='lg'/> Python </li>
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
          These are some of the skills that I'm working on as of 06/2024.
        </h3>
      </article>

      <article className="skills-names">
        <ul>
          <li><FontAwesomeIcon icon={faJenkins} size='lg'/>Jenkins</li>
          <li><FontAwesomeIcon icon={faRobot}/>Artificial Intelligence</li>

        </ul>
      </article>

    </div>
  </section>)
}
