import React, { useRef, useState } from 'react'
import 'Components/Project/Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, useInView } from 'framer-motion'
import { faBagShopping, faDiamond, faGamepad, faGlobe, faPlaneArrival, faScrewdriverWrench, faSquarePollVertical } from '@fortawesome/free-solid-svg-icons'
import {RiTailwindCssFill} from "react-icons/ri"
import {SiTypescript} from 'react-icons/si'
import { faCss3Alt, faGithub, faReact } from '@fortawesome/free-brands-svg-icons'

import backgroundLines from 'Assets/abstract-lines-3.jpg'

export const Projects = () => {
const projectRef = useRef(null);
const projectIsInView = useInView(projectRef,{amount:0.1});
const [hoveredProject, setHoveredProject] = useState(null);

const handleHover = (id) => {
    setHoveredProject(id);
}

const handleHoverOut = () => {
    setHoveredProject(null);
}

console.log(hoveredProject);

const projectsInfo =[
    {
        icon:faSquarePollVertical,
        title:'Pattern Finder',
        languages: [faReact, RiTailwindCssFill],
        points:[`Utilized React.js to develop dynamic and interactive features, enhancing user engagement and experience.
        `,`Integrated Tailwind CSS to ensure a modern and responsive design, optimizing for various screen sizes and devices.
        `,`Showcased product features, pricing details, and a captivating hero section with a concise description to effectively communicate the value proposition.`],
        gitHubRepo:'https://github.com/oscargomez15/saas-landing-page',
        projectLink:'https://oscargomez15.github.io/saas-landing-page/'
    },
    {
        icon:faBagShopping,
        title:'Pixel World',
        languages: [faCss3Alt, faReact],
        points:[`Developed a responsive and cross-browser-compatible e-commerce platform using CSS, and React.js, ensuring optimal user experience across all devices and browsers.
        `,`Integrated the RAWG API to access a vast database of over 500,000 video games, enabling users to browse and explore a diverse selection of titles across various platforms.
        `,"Designed visually appealing product pages with detailed information and imagery to showcase game titles and entice user engagement."],
        gitHubRepo:'https://github.com/oscargomez15/pixelworldecommerce',
        projectLink:'https://oscargomez15.github.io/pixelworldecommerce/'
    },
    {
        icon:faGamepad,
        title:'Hangman Game',
        languages: [SiTypescript, faCss3Alt],
        points:[`Implemented game logic to set a word, compare user-entered letters, and manage game state.
        `,`Leveraged TypeScript for type safety and improved code quality.
        `,"Utilized CSS for rendering the Hangman drawing and creating a responsive, visually appealing interface."],
        gitHubRepo:"https://github.com/oscargomez15/hangman",
        projectLink:"https://oscargomez15.github.io/hangman/"
    },
    {
        icon:faScrewdriverWrench,
        title: 'GIAL Handyman',
        languages: [],
        points:["Developed a user-friendly website to showcase the restaurant's amenities, menu, upcoming events, and other information using HTML5, CSS3, and JavaScript.",
            "Performed website updates and maintenance through FTP Protocol for efficient and secure file management.",
            "Utilized HostGator shared hosting for reliable and cost-effective website hosting."
        ],
        gitHubRepo: "https://github.com/oscargomez15/handyman-website",
        projectLink: "https://oscargomez15.github.io/handyman-website/"
    }

]

  return (
    <section className='projects-section'
    id='projects'
    ref={projectRef}>
        <article className='content'>
            <motion.h1 className='section-heading'
            animate={{opacity: projectIsInView ? 1 : 0}}
            transition={{duration:2}}>Projects</motion.h1>
                <div className="projects-list">
                    {projectsInfo.map((project, id)=>{
                        return(
                            <motion.div
                            key={id}
                            onMouseEnter={() => handleHover(id)}
                            onMouseLeave={handleHoverOut}
                            initial={{scaleY:0}}
                            animate={{scaleY: projectIsInView ? 1 : 0, transformOrigin: "top"}}
                            whileHover={{scale:1.05, cursor:"pointer", opacity:1}}
                            transition={{
                                duration:0.5,
                                scaleY: {duration:0.5, delay: id * 0.2}}}
                            className='project-item'>
                                <motion.img src={backgroundLines}
                                alt=""
                                className='project-background'
                                whileHover={{scaleY:hoveredProject == id ? 1.5 : 1}}
                                whileTap={{scaleY: 1.5}}
                                transition={{duration:5}} />

                                <div className="project-content">
                                    <FontAwesomeIcon icon={project.icon} size='5x'/>
                                    <h2>{project.title}</h2>
                                    <h3>0{id+1}</h3>
                                    <div
                                    className="project-buttons">
                                        <motion.a
                                        href={project.gitHubRepo}
                                        target='_blank'
                                        animate={{
                                            scale : hoveredProject == id ? 1.25 : 1,
                                            color: hoveredProject == id ? "#ff9b58" : "white"
                                        }}
                                        whileHover = {{color:"#ffb98a"}}>
                                            <FontAwesomeIcon icon={faGithub}/></motion.a>

                                            <FontAwesomeIcon icon={faDiamond} className='buttons-divider'/>
                                        <motion.a
                                        href={project.projectLink}
                                        animate={{
                                            scale : hoveredProject == id ? 1.25 : 1,
                                            color: hoveredProject == id ? "#ff9b58" : "white"
                                        }}
                                        whileHover = {{color:"#ffb98a"}}
                                        target='_blank'>
                                            <FontAwesomeIcon icon={faGlobe}/></motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
        </article>
    </section>
  )
}
