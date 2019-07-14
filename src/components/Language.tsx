import * as React from "react";
import Skill from "./Skill";

const Language: React.FC = () => {
  const languageList = [
    { name: "Finnish", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Swedish", level: "Good" },
    { name: "German", level: "Basics" }
  ];
  return (
    <div>
      <h3>LANGUAGES</h3>
      {languageList.map(language => (
        <Skill name={language.name} level={language.level} />
      ))}
    </div>
  );
};

export default Language;
