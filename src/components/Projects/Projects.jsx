import React from "react";
import CertificateCard from "./CertificateCard";
import ExperienceWithIcons from "./Experience";
import ProjectDetails, {
  
  BusinessIntelligence, 
  Linuxessentials,
  dataanalytic,
  awscert,
  devopscer,
} from "./imports";
import "./Projects.scss";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const certificates = [BusinessIntelligence, Linuxessentials, dataanalytic, awscert, devopscer];

  return (
    <section
      className="app__projects"
      id="projects"
      data-aos="fade-down"
      data-aos-offset="100"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
    >
      <div className="app__projects-container">
        <h2>Projects</h2>
        <div className="app__projects-container_projects">
          {ProjectDetails.map((projects, index) => (
            <ProjectsCard key={index} projects={projects} />
          ))}
        </div>

        {/* 🔥 Add animated Experience section here */}
        <div className="app__projects-container_certificate">
        <h2>Work Experience</h2>
          <ExperienceWithIcons />
        </div>

       {
  <div className="app__projects-container_certificate">
    <h2>Certificates</h2>
    <div className="app__projects-container_certificate-cert">
      {certificates.map((certificate, index) => (
        <CertificateCard key={index} cert={certificate} />
      ))}
    </div>
  </div>
}

      </div>
    </section>
  );
};

export default Projects;
