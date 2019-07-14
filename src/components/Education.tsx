import * as React from "react";

interface Props {
  degree: string;
  schoolName: string;
  years: string;
}

const Education: React.FC<Props> = props => {
  const { degree, schoolName, years } = props;

  return (
    <div>
      <h4>{degree}</h4>
      <p>
        {schoolName}
        <br />
        {years}
      </p>
      <br />
    </div>
  );
};

export default Education;
