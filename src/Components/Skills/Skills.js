import React, { useEffect, useRef, useState } from 'react'
import 'Components/Skills/Skills.css'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import reactCoding from 'Assets/react-coding.mp4'
import photoEditing from 'Assets/photo-editing.mp4'
import apiIntegration from 'Assets/integration.mp4'
import userInterface from 'Assets/user-interface.mp4'
import { SkillBox } from 'Components/Skills/SkillBox';

const skillsList = [
  {
    video: reactCoding,
    heading:"React Framework",
    description: `With the help of my knowledge in React I'm capable of 
    contributing in not only the development of an application or web page that's efficient,
    but I will also contribute so that the design is striking, converts and that it is accessible
    for all public following the rules established by WCAG.`
  },
  {
    video: photoEditing,
    heading: "Photo Editing",
    description:`With an extensive experience in photo editing software such as Photoshop, Gimp and Canva, I can contribute on making 
    changes or creating appealing designs that will contribute on increasing scrolling time and help increase the conversion
    one way or another.`
  },
  {
    video: apiIntegration,
    heading: "API Integration",
    description: `Extend your website's usability by incorporating data from third parties. Sounds Complicated? 
    It isn't! I will assist on gathering data from different sources with the main objective
    of increasing the usability of your website.`
  },
  {
    video: userInterface,
    heading: "UX and UI",
    description:`Still don't know exactly what your customers want? Let me take care of the heavy lifting for you! 
    I will contribute to dig those requirements that your clients demand and incorporate them into the design
     that way your app is user-centered maximizing the conversion.`
  }
]



export const Skills = () => {

//Intersection Oberserver Initialization
const containerRef = useRef();
const [isVisible, setVisibility] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver((entries => {
    const entry = entries[0];

  if(entry.isIntersecting){
    setVisibility(true);
    observer.unobserve(containerRef.current);
  }
  }));

  //observing skills container
    observer.observe(containerRef.current);
  
},[containerRef])

  const renderObject = (object) => {
    return object.map(({video, heading, description}) => 
    <SkillBox key={video} video={video} heading={heading} description={description} />)
  }

  return (
    <div className={`skills-container ${isVisible ? 'slideX-animation' : ''} `} ref={containerRef} >
        <section>
          <div className='skill-title'>
              <h1>Technical Skills </h1>
              <FontAwesomeIcon icon={faLaptopCode} size='lg'/>  
          </div>
          
          <div className='skillbox-container'>
              {renderObject(skillsList)}
          </div>
        </section>
    </div>
  )
}
