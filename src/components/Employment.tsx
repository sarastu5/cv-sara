import * as React from "react";

interface Props {
  title: string;
  employmentName: string;
  begin: string;
  end?: string;
  description: string;
}

const Employment: React.FC<Props> = props => {
  const { title, employmentName, begin, end, description } = props;

  return (
    <div>
      <h4>
        {title}, {employmentName} ({begin} - {end})
      </h4>
      <p>{description}</p>
      <br />
    </div>
  );
};

export default Employment;
