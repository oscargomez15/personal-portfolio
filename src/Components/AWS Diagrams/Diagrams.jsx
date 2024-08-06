import React, { useRef } from 'react'
import ridesDiagram from 'Assets/Rides-diagram.png'
import ecsDiagram from 'Assets/esc-ecr-diagram.png'
import libraryDiagram from 'Assets/library-diagram.png'

import 'Components/AWS Diagrams/Diagrams.css'
import background from 'Assets/abstract-bg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faDiamond } from '@fortawesome/free-solid-svg-icons'

import { animate, motion, useInView } from 'framer-motion'

export const Diagrams = () => {
    const sectionRef = useRef(null);
    const sectionInView = useInView(sectionRef, {amount:0.1});
    
const diagramsInfo = [{
    image: ridesDiagram,
    title:'Rides Service Web App',
    points:["Employed AWS Amplify to seamlessly clone the code from the CodeCommit repository",
        "Implemented user authentication and registration functionalities using AWS Cognito, ensuring secure access to the web application.",
        "Utilized AWS API Gateway to invoke Lambda functions, facilitating the storage of metadata and ride logs in DynamoDB for efficient data management.",
        "Implemented IAM permissions following the principle of least privilege, ensuring a secure environment and minimizing the risk of unauthorized access or data breaches."
    ]
},{
    image: ecsDiagram,
    title: 'Cloud Serverless Container Deployment',
    points:["Orchestrated AWS infrastructure deployment using Terraform, automating environment setup and configuration for web server deployment.",
        "Implemented Docker on EC2, creating & managing Docker images for scalable application deployment.",
        "Established ECS clusters & Fargate task definitions, leveraging Amazon ECR for container image storage & deployment.",
        "Configured load balancers for efficient traffic distribution, ensuring fault tolerance.",
        "Implemented disaster recovery with EBS snapshots and optimized cost management through allocation tags."
]
},{
    image: libraryDiagram,
    title: 'AWS Powered Backend',
    points: ["Developed backend Lambda functions in Node.js, leveraging the MySQL2 package for database connectivity and AWS SDK for message publishing",
        "Architected a robust API Gateway to manage and secure HTTP requests between the frontend & backend.",
        "Utilized AWS CloudWatch to effectively debug and monitor Lambda functions, ensuring optimal performance and reliability.",
        "Integrated SNS for real-time notifications. React, CSS3 and React-router was used for the front-end."]
}]

return (
    <section id='diagrams' ref={sectionRef}>
        <article className='content'>
            <motion.h1
            className='section-heading'
            animate={{opacity: sectionInView ? 1 : 0}}
            transition={{duration:2}}> Diagrams</motion.h1>
            <div className="diagrams-list">
                {diagramsInfo.map((item, id) => {
                    return(
                        <motion.div className="diagram-item"
                        initial={{scale:0, opacity:0}}
                        animate={{scale: sectionInView ? 1 : 0, opacity: sectionInView ?  1 : 0}}
                        transition={{duration:1, delay: id * 0.2}}>
                            <img src={background} alt="" className='background-image' />
                            <img src={item.image} alt="" className='diagram-image' />
                            <div className="diagram-text">
                                <div className="diagram-title">
                                    <h2>{item.title}</h2>
                                    <h3>Personal Project</h3>
                                </div>
                                <FontAwesomeIcon icon={faChevronDown} className='diagram-divider'/>
                                <div className="diagrams-bullepoints">
                                    {item.points.map((point, id) => {
                                        return(
                                            <div className="bulletpoint">
                                                <FontAwesomeIcon icon={faDiamond}/>
                                                {point}
                                            </div>
                                        )
                                    })}
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
