import * as React from "react";
import { Icon } from "semantic-ui-react";

const BasicInfo: React.FC = () => {
  return (
    <div>
      <h3>BASIC INFO</h3>
      <p>
        <Icon name="address card" />
        Sara Heljasvuo
        <br />
        <Icon name="birthday" />
        27.10.1987
      </p>
      <p>
        <Icon name="location arrow" />
        Niitynperäntie 6-8 C 11
        <br />
        00440 Helsinki Finland
      </p>
      <p>
        <Icon name="phone" />
        +358 45 265 8477
      </p>
      <p>
        <Icon name="mail" />
        sara.heljasvuo@iki.fi
      </p>
    </div>
  );
};

export default BasicInfo;
