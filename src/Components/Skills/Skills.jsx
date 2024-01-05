import React, { useEffect, useRef, useState } from 'react'
import 'Components/Skills/Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faFigma, faGithub, faHtml5, faJava, faJs, faNpm, faReact, faSass, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faGaugeSimpleHigh, faUniversalAccess, faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';

export const Skills = () => {
  return(
  <section className='skills-wrapper' id='skills'>
    <div className="skills-flex">
      <article className='section-title'>
        <h2>Core Competencies</h2>
        <p>Showcasing some of the skills that have allowed me to become an effective front-end developer. </p>
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
          <li><FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} size='lg'/> Responsiveness </li>
          <li><FontAwesomeIcon icon={faGithub} size='lg'/>Github</li>

        </ul>
      </article>

      <article className='section-title'>
        <h3> In an era in which technology is growing exponentially, I have found the need of constantly updating my knowledge to
          keep myself competent and up to date to develop software/apps/websites that are meeting current standards. These are some
          of the skills that I'm working on as of 2024.
        </h3>
        <p></p>
      </article>

      <article className="skills-names">
        <ul>
          <li><FontAwesomeIcon icon={faUniversalAccess} size='lg'/>Accessibility</li>
          <li><FontAwesomeIcon icon={faGaugeSimpleHigh} size='lg'/>Optimization</li>
          <li><FontAwesomeIcon icon={faDatabase} size='lg'/>SQL</li>
        </ul>
      </article>

    </div>
  </section>)
}
