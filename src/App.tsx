import * as React from "react";
import { Divider } from "semantic-ui-react";
import "./App.scss";
import BasicInfo from "./components/BasicInfo";
import Intro from "./components/Intro";
import EmploymentsList from "./components/EmploymentsList";
import Language from "./components/Language";
import DevTechnologies from "./components/DevTechnologies";
import EducationList from "./components/EducationList";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>

      <div className="intro">
        <div className="img">
          <img className="profilepic" src="pic-2.jpg" />
        </div>
        <div>
          <Intro />
        </div>
      </div>

      <div className="content">
        <div className="sidebar">
          {/* TODO: some */}
          <BasicInfo />

          <Divider hidden />

          <Divider />

          <DevTechnologies />

          <Divider hidden />

          <Divider />

          <Language />

          <Divider hidden />
        </div>

        <div className="main">
          <EmploymentsList />

          <Divider />

          <Divider hidden />

          <EducationList />
        </div>
      </div>
    </div>
  );
};

export default App;
