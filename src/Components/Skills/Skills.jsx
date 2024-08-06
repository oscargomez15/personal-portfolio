import React, { useRef } from 'react'
import 'Components/Skills/Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faCss3, faDocker, faFigma, faGithub, faHtml5, faJs, faLinux, faNodeJs, faPython, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faGear, faNetworkWired, faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';
import { motion, useInView } from 'framer-motion';

export const Skills = () => {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, {amount:0.1});

  const skillsList = [{
    icon: faAws,
    name: "AWS",
  },{
    icon: faNetworkWired,
    name:"Network",
  },{
    icon: faDocker,
    name:"Docker",
    description:""
  },{
    icon: faLinux,
    name:"Linux"
  },{
    icon: faCode,
    name:"IaC"
  },{
    icon: faGear,
    name: "Ansible"
  },{
    icon: faPython,
    name: "Python"
  },{
    icon: faHtml5,
    name: "HTML5"
  },{
    icon: faCss3,
    name: "CSS3"
  },{
    icon: faJs,
    name: "JavaScript"
  },{
    icon: faReact,
    name: "React"
  },{
    icon: faFigma,
    name:"Figma"
  },{
    icon: faUpRightAndDownLeftFromCenter,
    name: "Responsive"
  },{
    icon: faGithub,
    name: "Github"
  },{
    icon: faDatabase,
    name: "MySQL"
  },{
    icon: faNodeJs,
    name: "NodeJS"
  }
]
  return(
  <motion.section className='skills-section' id='skills' ref={sectionRef}>
      <article className="content">
        <motion.h1
        initial={{opacity:0}}
        animate={{opacity: sectionInView ? 1 : 0}}
        transition={{duration: 2}} className='section-heading'> Skills </motion.h1>
        <motion.ul>
          {skillsList.map((item,id) => {
            return(
              <motion.li
              whileHover={{ scale:1.1, cursor:"pointer"}}
              initial={{opacity:0, translateX: -50}}
              animate={{opacity: sectionInView ? 1 : 0, translateX: sectionInView ? 0 : -50}}
              transition={{
                opacity: {duration:1, delay: id * 0.2},
                translateX:{duration:1, delay: id * 0.2},
                scale:{duration: 0.5}
                }}>
                <div className="skill-content">
                  <FontAwesomeIcon icon={item.icon} size='xl'/>
                  <h2>{item.name}</h2>
                </div>
              </motion.li>
            )
          })}
        </motion.ul>
      </article>
  </motion.section>)
}
