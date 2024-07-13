import React from 'react'
import ridesDiagram from 'Assets/Rides-diagram.png'
import ecsDiagram from 'Assets/esc-ecr-diagram.png'
import 'Components/AWS Diagrams/Diagrams.css'

export const Diagrams = () => {
const diagramsInfo = [{
    image: ridesDiagram,
    title:'Architecture for Ride Service Web App',
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
}]

return (
    <section className='diagrams-wrapper'>
        < div className="diagram-grid">
            <div className="diagram-title">
                <h1 className='secondary-heading'>Cloud Infrastructure Diagrams</h1>
                <p className='sub-heading'> Building highly-available, secure, cost-optimized, and reliable solutions in the cloud.</p>
            </div>
            {diagramsInfo.map((item) => {
                return(
                    <article>
                        <img src={item.image} height="450px" alt="" />
                        <div className="diagram-content">
                            <h3 className='third-heading'>{item.title}</h3>
                            <ul>{item.points.map((item) => {
                                return(
                                    <li>{item}</li>
                                )
                            })}</ul>
                        </div>
                    </article>
            )
            })}
        </div>
    </section>
  )
}
