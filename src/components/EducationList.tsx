import * as React from "react";
import Education from "./Education";

const EducationList: React.FC = () => {
  const educationList = [
    {
      degree: "Information Technology, Bachelor of Business Administration",
      schoolName: "Haaga-Helia University of Applied Sciences",
      years: "2017-2019"
    },
    {
      degree: "Physiotherapy, Bachelor of Social Services",
      schoolName: "Metropolia University of Applied Sciences",
      years: "2009-2012"
    },
    {
      degree: "Secondary School Graduate",
      schoolName: "Hämeenlinnan lyseon lukio",
      years: "2003-2006"
    }
  ];

  return (
    <div>
      <h3>EDUCATION</h3>
      {educationList.map(education => (
        <Education
          degree={education.degree}
          schoolName={education.schoolName}
          years={education.years}
        />
      ))}
    </div>
  );
};

export default EducationList;
