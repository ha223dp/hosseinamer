import React from "react";
import Facebook from "../../assets/images/socials/facebook.png";
import Instagram from "../../assets/images/socials/instagram.png";
import LinkedIn from "../../assets/images/socials/linkedin.png";
import MailIcon from "../../assets/images/mailIcon.png";
import Github from "../../assets/images/github.png";
import Resumeicon from "../../assets/images/resumeicon.png";
import Resume from "../../assets/images/resume.pdf";


import "./Contact.scss";
const Contact = () => {
  return (
    <section
      className="app__contact"
      id="contacts"
      data-aos="fade"
      data-aos-offset="100"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
    >
      <div className="app__contact-container">
        <div className="app__contact-container_contacts">
          <p className="app__contact-container_contacts-touch">
            - Get in Touch
          </p>
          <h2>Let's create progress together</h2>
          <p>
            For all inquiries, you can contact and message me on any of the
            specified social medias below.
          </p>
          <ul className="app__contact-container_contacts-links">
           
         
            <a
              href="https://www.linkedin.com/in/hossein-amer/?locale=sv_SE"
              target="blank"
            >
              <img src={LinkedIn} alt="" />
              Hossein Amer
            </a>


            <a href="mailto:hossein.esmat@gmail.com">
                   <   img src={ MailIcon} alt="mail to hossein.esmat@gmail.com" />
  hossein.esmat@gmail.com
</a>

 <a href="https://github.com/ha223dp">
                   <   img src={ Github} alt="get send my Hosseins github" />
                   https://github.com/ha223dp
</a>


<a href={Resume} target="_blank" rel="noopener noreferrer">
  <img src={Resumeicon} alt="Getting my resume" />
  My CV
</a>

          </ul>
        </div>
        <div className="app__contact-container_image">
         
        </div>
      </div>
    </section>
  );
};

export default Contact;
