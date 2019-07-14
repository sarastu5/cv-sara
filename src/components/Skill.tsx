import * as React from "react";
import "./Skill.scss";

interface Props {
  name: string;
  level: string;
}

const Skill: React.FC<Props> = props => {
  const { name, level } = props;

  return (
    <div className="skill">
      <div className="skill__name">{name}</div>
      <div className="skill__level">{level}</div>
    </div>
  );
};

export default Skill;
