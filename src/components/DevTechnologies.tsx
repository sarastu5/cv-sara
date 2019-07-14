import * as React from "react";
import Skill from "./Skill";

const DevTechnologies: React.FC = () => {
  const technologiesList = [
    { name: "JavaScript", level: "jotain" },
    { name: "TypeScript", level: "jotain" },
    { name: "React", level: "jotain" },
    { name: "Python", level: "jotain" },
    { name: "CSS", level: "jotain" }
  ];

  return (
    <div>
      <h3>DEVELOPMENT SKILLS</h3>
      {technologiesList.map(technology => (
        <Skill name={technology.name} level={technology.level} />
      ))}
    </div>
  );
};

export default DevTechnologies;
