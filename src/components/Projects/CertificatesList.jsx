import React from "react";
import CertificateCard from "./CertificateCard";

const CertificateList = () => {
  const certs = [
    {
      title: "React Certification",
      description: "Completed React.js Advanced course by XYZ Academy"
    },
    {
      title: "JavaScript Basics",
      description: "Introductory JS course from Codecademy"
    },
    {
      title: "Web Design",
      description: "HTML & CSS fundamentals by FreeCodeCamp"
    }
  ];

  return (
    <div className="certificate-list">
      {certs.map((cert, index) => (
        <CertificateCard key={index} index={index} cert={cert} />
      ))}
    </div>
  );
};

export default CertificateList;
