import React, { useRef, useState } from 'react'
import 'Components/Experience/Experience.css'

import habaneros from "Assets/habaneros.jpg"
import alorica from "Assets/alorica.png"
import allied from "Assets/allied-global.jpg"
import gial from "Assets/gial-red.jpg"

import { motion, useInView } from 'framer-motion'
import { faBagShopping, faDiamond, faGamepad, faPepperHot, faPlaneArrival } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Experience = () => {
const experienceRef = useRef(null);
const experienceIsInView = useInView(experienceRef,{amount:0.1});
const [hoveredProject, setHoveredProject] = useState(null);

const handleHover = (itemId) => {
    setHoveredProject(itemId);
}

const handleHoverOut = () => {
    setHoveredProject(null);
}

const experienceInfo =[
    {
        icon:faPlaneArrival,
        title:'Project Superintendent',
        company:'GIAL Handyman',
        logo: gial,
        date: "2020 - Current",
        location:'Cape Coral, FL',
        points:[`Planned drywall, painting, and carpentry projects to guarantee completion within the scheduled time.`,
                `Oversaw the work of laborer ensuring high-quality workmanship and adherence to safety standards.`, 
                `Prepared and submitted progress reports, keeping project managers and clients informed of project status. to effectively communicate the value proposition.`],
    },
    {
        icon:faBagShopping,
        title:'Front End Consultant',
        company:'Habaneros Restaurant',
        logo: habaneros,
        date: "2020 - 2023",
        location:'North Fort Myers, FL',
        points:[`Developed a responsive and cross-browser-compatible e-commerce platform using HTML, CSS, and React.js, ensuring optimal user experience across all devices and browsers.
        `,`Integrated the RAWG API to access a vast database of over 500,000 video games, enabling users to browse and explore a diverse selection of titles across various platforms.
        `,"Designed visually appealing product pages with detailed information and imagery to showcase game titles and entice user engagement."],
    },
    {
        icon:faGamepad,
        title:'Sales Representative',
        company:'Allied Global',
        logo: allied,
        date: "2018 - 2019",
        location:'San Pedro Sula, Cortes, Honduras',
        points:[`Implemented game logic to set a word, compare user-entered letters, and manage game state.
        `,`Leveraged TypeScript for type safety and improved code quality.
        `,"Utilized CSS for rendering the Hangman drawing and creating a responsive, visually appealing interface."],
    },
    {
        icon:faPepperHot,
        title: 'Customer Service',
        company: 'Alorica',
        logo: alorica,
        date: "2016 - 2018",
        location: 'San Pedro Sula, Cortes, Honduras',
        points:["Developed a user-friendly website to showcase the restaurant's amenities, menu, upcoming events, and other information using HTML5, CSS3, and JavaScript.",
            "Performed website updates and maintenance through FTP Protocol for efficient and secure file management.",
            "Utilized HostGator shared hosting for reliable and cost-effective website hosting."]
    }

]

  return (
    <section
    id='experience'
    ref={experienceRef}>
        <article className='content'>
            <motion.h1 className='section-heading'
            animate={{opacity: experienceIsInView ? 1 : 0}}
            transition={{duration:2}}>Experience</motion.h1>
                <div className="experience-list">
                    {experienceInfo.map((experience, id)=>{
                        return(
                            <motion.div
                            key={id+1}
                            onMouseEnter={() => handleHover(id)}
                            onMouseLeave={handleHoverOut}
                            initial={{scaleY:0}}
                            animate={{scaleY: experienceIsInView ? 1 : 0, transformOrigin: "top"}}
                            whileHover={{
                                scale:1.05,
                                cursor:"pointer",
                                backgroundColor: hoveredProject == id ? "white" : "",
                                color: hoveredProject == id ? "black":"",
                                borderRadius: hoveredProject == id ? "0" : "",
                                height: hoveredProject == id ? "fit-content" : ""
                            }}
                            transition={{
                                scaleY: {duration:0.5, delay: id * 0.2},
                            }}
                            className="experience-item" >

                                <div className="experience-content">
                                    <img src={experience.logo}/>
                                    <div className="experience-text">
                                        <h2 className='job-title'>{experience.title}</h2>
                                        <h3 className='company-text'>{experience.company}</h3>
                                        <h3 className='experience-date-mb'>{experience.date}</h3>
                                    </div>
                                    <div className="experience-date">
                                        <h2>{experience.date}</h2>
                                    </div>
                                </div>

                                {/* Bulletpoints mapping along with a symbol */}
                                <motion.div className="experience-bulletpoints"
                                    initial={{display:"none"}}
                                    animate={{display: hoveredProject == id ? "flex" : "none"}}
                                    transition={{duration:0.1}}>
                                    {experience.points.map((bullet, bulletId) => {
                                        return(
                                            <div className="bulletpoint" key={`experience-${id}-bp-${bulletId}`}>
                                                <FontAwesomeIcon icon={faDiamond} />
                                                <p>{bullet}</p>
                                            </div>
                                        )
                                    })}
                                </motion.div>
                            </motion.div>
                        )
                    })}
                </div>
        </article>
    </section>
  )
}
