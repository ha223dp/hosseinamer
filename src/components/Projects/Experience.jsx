import React from "react";

const experiences = [

  {
    icon: "💻", // You can replace these with image imports or URLs
    title: "Fullstack Developer",
    location: "Freelance, Uppsala",
    date: "Aug 2024 – Aug 2025",
    details: [
      "Built custom, user-centric websites and digital solutions through an iterative, problem-solving approach.",
      "Delivered responsive, scalable, and visually compelling web experiences by combining UI/UX design with full-stack development.",
      "Managed projects end-to-end with a focus on collaboration, continuous improvement, and exceeding client expectations."
    ]
  },


 {
    icon: "💻", // You can replace these with image imports or URLs
    title: "Thesis research",
    location: "Conscia, Stockholm",
    date: "Mar 2025 – June 2025",
    details: [
      "Conducted a case study on personal cybersecurity education.",
      "Where I analyzed users' behavioral patterns.",
      "And implemented interviews for data collection and analysis."
    ]
  },



  {
    icon: "👥",
    title: "Project Leader",
    location: "Uppsala University",
    date: "Aug 2024 – Jan 2025",
    details: [
      "Implemented Agile methodology to improve project flexibility and client satisfaction.",
      "Coordinated over 30 international students, reducing project deadlines by 20% and increasing productivity by 25%.",
      "Facilitated communication on the IPO system to ensure iterative updates and better research outcomes."
    ]
  },
  {
    icon: "📊",
    title: "Data Handler",
    location: "Skatteverket, Visby",
    date: "Mar 2024 – June 2024",
    details: [
      "Improved data transfer productivity by 20% using ETL processes with MySQL and Spring Batch.",
      "Led cross-functional collaboration to implement innovative solutions, cutting project time by 20%.",
      "Reduced operational workload by 20% through optimized cloud resource use with Docker and RabbitMq."
    ]
  },
  {
    icon: "🎓",
    title: "Study Politician",
    location: "SVIT, Visby",
    date: "Jan 2023 – Jan 2024",
    details: [
      "Advised instructors to improve course content and overall learning effectiveness.",
      "Organized collaborative student events, amplifying student voices and engagement."
    ]
  }
];

// Component for using actual images instead of emojis
const IconImage = ({ iconSrc, alt }) => {
  // For using actual images, uncomment this and comment out the emoji version
  // return <img src={iconSrc} alt={alt} className="w-12 h-12 rounded-full" />;
  
  // Using emojis as placeholders
  return (
    <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-full text-4xl">
      {iconSrc}
    </div>
  );
};

const ExperienceWithIcons = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-left">
      <div className="mb-12">
      </div>

      {experiences.map((exp, index) => (
        <div key={index} className="mb-16 flex">
          <div className="mr-6">
            <IconImage iconSrc={exp.icon} alt={exp.title} />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-indigo-800 mb-1">{exp.title}</h3>
            <div className="font-medium text-xl text-indigo-700 mb-1">{exp.location}</div>
            <div className="text-lg mb-4">{exp.date}</div>
            
            {exp.details.map((detail, idx) => (
              <p key={idx} className="mb-3 text-xl leading-relaxed">{detail}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceWithIcons;