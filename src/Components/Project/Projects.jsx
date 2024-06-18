import React from 'react'
import 'Components/Project/Projects.css'
import videogames from "Assets/videogames.jpg"
import habaneros from "Assets/habaneros.jpg"
import hangman from "Assets/hangman-ss.png"
import live from "Assets/liveAnimation.json"
import saas from "Assets/saas-project.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Lottie from 'lottie-react'

export const Projects = () => {
const projectsInfo =[
    {
        image:saas,
        title:'Saas Landing Page',
        points:[`Utilized React.js to develop dynamic and interactive features, enhancing user engagement and experience.
        `,`Integrated Tailwind CSS to ensure a modern and responsive design, optimizing for various screen sizes and devices.
        `,`Showcased product features, pricing details, and a captivating hero section with a concise description to effectively communicate the value proposition.`],
        gitHubRepo:'https://github.com/oscargomez15/saas-landing-page',
        projectLink:'https://oscargomez15.github.io/saas-landing-page/'
    },
    {
        image:videogames,
        title:'Videogames Ecommerce',
        points:[`Developed a responsive and cross-browser-compatible e-commerce platform using HTML, CSS, and React.js, ensuring optimal user experience across all devices and browsers.
        `,`Integrated the RAWG API to access a vast database of over 500,000 video games, enabling users to browse and explore a diverse selection of titles across various platforms.
        `,"Designed visually appealing product pages with detailed information and imagery to showcase game titles and entice user engagement."],
        gitHubRepo:'https://github.com/oscargomez15/pixelworldecommerce',
        projectLink:'https://oscargomez15.github.io/pixelworldecommerce/'
    },
    {
        image:hangman,
        title:'Hangman Game',
        points:[`Implemented game logic to set a word, compare user-entered letters, and manage game state.
        `,`Leveraged TypeScript for type safety and improved code quality.
        `,"Utilized CSS for rendering the Hangman drawing and creating a responsive, visually appealing interface."],
        gitHubRepo:"https://github.com/oscargomez15/hangman", 
        projectLink:"https://oscargomez15.github.io/hangman/"
    },
    {
        image:habaneros,
        title: 'Front End Consultant -  @Habaneros',
        points:["Developed a user-friendly website to showcase the restaurant's amenities, menu, upcoming events, and other information using HTML5, CSS3, and JavaScript.",
            "Performed website updates and maintenance through FTP Protocol for efficient and secure file management.",
            "Utilized HostGator shared hosting for reliable and cost-effective website hosting."
        ],
        gitHubRepo: "#",
        projectLink: "https://habanerosbonitasprings.com/"
    }

]

  return (
    <section className='project-wrapper' id='projects'>
        <div className="project-grid fade-in-effect">
            <div className="project-title">
                <h2 className='secondary-heading' tabIndex={-1}> Project Showcase</h2>
                <p className='sub-heading'>Bringing digital ideas to life with creative web development</p>
            </div>
            {projectsInfo.map((item,index) => {
                return (
                    //add the slide-left or right depending on where the item is positioned
                    <article className={`${index % 2 ? "slide-left" : "slide-right"} project-item`}>
                        <figure>
                            <div className="darken"></div>
                            <img src={item.image} alt={`Project-${index + 1}-image`}/>
                        </figure>
                        <h3 className='third-heading'> {item.title}</h3>
                        <ul>{item.points.map((point) => {
                            return(
                                <li>{point}</li>
                            )
                        })}</ul>
                        <p className='body-text'> {item.description} </p>
                        <div className="button-group">
                            <a href={item.gitHubRepo} target='__blank'> <div className='project-button'>
                            <FontAwesomeIcon icon={faGithub}/>
                            </div>
                            </a>
                            <a href={item.projectLink} target='__blank'>
                            <div className='project-button'>
                                <Lottie animationData={live} class='lottie-live'/>
                                 <p className='button-text'>Live Preview</p>
                                 </div>
                                 </a>
                        </div>
                    </article>
                )
            })}
        </div>
    </section>
  )
}
