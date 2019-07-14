import * as React from "react";
import { Divider } from "semantic-ui-react";

import "./Header.scss";

const Header: React.FC = () => {
  return (
    <div>
      <h1 className="h1">SARA HELJASVUO</h1>
      <h3 className="h3">Developer & Physiotherapist</h3>
    </div>
  );
};

export default Header;
