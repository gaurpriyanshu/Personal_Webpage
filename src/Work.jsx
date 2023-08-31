import React from 'react';
import './CSS Files/projects.css';

import sarvm from './Images/sarvm.png';
import vista from './Images/TDP.png';
import LWIPL from './Images/LWIPL.png';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function ProjectCard({ title, imageSrc, githubLink, technologies, description }) {
  return (
    <div className='project'>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <img className='images' src={imageSrc} alt={title} />
      </a>
      <div className='project-info'>
        <div className='project-title'>
          <h2>{title}</h2>
          <div className='liness'></div>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
        <h3><span style={{ color: '#FF004F' }}>{technologies}</span></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Work() {
  return (
    <div id='Work'>
      <h1 className='title'>
        As Intern <span style={{ color: '#FF004F' }}>.</span>{' '}
      </h1>
      <div className='projects-wrapper'>
        <ProjectCard
          title="JAVA Intern @Sarvm.Ai"
          imageSrc={sarvm}
          githubLink = "https://www.linkedin.com/in/gaurpriyanshu/details/experience/1635538882729/single-media-viewer?type=IMAGE&profileId=ACoAADHJPJQBWRyqD8aRQ2fb_SrJiaF6TUnQlr0&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_position_details%3BrRdRkjsTQlCY6BtCeUvkAw%3D%3D"
          technologies="SpringBoot, Git, AWS, MongoDB"
          description="• Developed the Payment services using Spring Boot along with using MongoDB and PostgreSQL as
            database.
            • Developed the APIs for the payment, payout, and wallet services using Spring Boot framework in JAVA and
            AWS services.
            • Worked in a team of 5 and was responsible for the smooth working of the payment and subscription services."
        />

        <ProjectCard
          title="Web Devloper Intern @TDP Vista"
          imageSrc={vista}
          githubLink = "https://www.linkedin.com/posts/gaurpriyanshu_internship-internships-reactjs-activity-6836020906733662208-gjfe?utm_source=share&utm_medium=member_desktop"
          technologies="ReactJS, TailWind CSS, JavaScript, Git"
          description="• Worked as a Front-end Developer using React framework in a team of 4.
              • Maintained a record of achieving the targets within the deadline by 83%.
              • Managed a process re-engineering project to improve and consolidate end-to-end service processes to reduce
              paper dependency by 100%."
        />

        <ProjectCard
          title="MLOps Training @LinuxWorld"
          imageSrc={LWIPL}
          githubLink = "https://www.linkedin.com/posts/gaurpriyanshu_mlopslinuxworldinformaticslimited-activity-6839062771502518272-YLLd?utm_source=share&utm_medium=member_desktop"
          technologies="Machine Learning, Computer Vision, AWS, Docker"
          description="• Cerrificate number: LWIPL-JPR-2021-11685.
            • Diligent team leader adept at ensuring timely task updates and effective schedule adherence within the team.
            • Learned and Created projects in Computer Vision, Face Recognition and other technologies."
        />
      </div>
    </div>
  );
}

export default Work;
