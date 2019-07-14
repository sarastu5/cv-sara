import * as React from "react";
import Employment from "./Employment";

const EmploymentsList: React.FC = () => {
  const employmentList = [
    {
      title: "Junior Developer",
      employmentName: "Heltti Oy",
      begin: "5/2018",
      end: "",
      description:
        "In Heltti I work as a junior developer. I mostly use JavaScript and React in my work. I am also responsible of customer support and automated UI testing."
    },
    {
      title: "Application Coordinator",
      employmentName: "Oy Apotti Ab",
      begin: "8/2016",
      end: "5/2018",
      description:
        "As an application coordinator I am configuring an existing health care information system which is provided by Epic Systems Corporation."
    },
    {
      title: "Register assistant",
      employmentName: "National Supervisory Authority for Welfare and Health",
      begin: "4/2016",
      end: "8/2016",
      description: "Updating register for health care equipments."
    },
    {
      title: "Physiotherapist",
      employmentName: "Heseva-kuntoutus Oy",
      begin: "1/2015",
      end: "12/2015",
      description:
        "I worked as a physiotherapist with customers that suffered from different neurological disorders such as CP, MS or brain injuries."
    },
    {
      title: "Physiotherapist",
      employmentName: "City of Lohja",
      begin: "5/2013",
      end: "1/2015",
      description:
        "I worked in Health Care Center (primary care) in wards and policlinics. I also instructed various groups such as group for elderly people."
    },
    {
      title: "Physiotherapist",
      employmentName: "Hely Ry",
      begin: "3/2013",
      end: "5/2013",
      description:
        "I worked with elderly people who had memory disorders and helped them with their daily activities."
    },
    {
      title: "Physiotherapist",
      employmentName: "Laakso hospital",
      begin: "6/2012",
      end: "8/2012",
      description: "I worked in a neurological rehabilitation ward."
    }
  ];

  return (
    <div>
      <h3>WORKING EXPERIENCE</h3>
      <br />
      {employmentList.map(employment => (
        <Employment
          title={employment.title}
          employmentName={employment.employmentName}
          description={employment.description}
          begin={employment.begin}
          end={employment.end}
        />
      ))}
    </div>
  );
};

export default EmploymentsList;
