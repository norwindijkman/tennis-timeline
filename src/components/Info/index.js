import React from "react";

import Avatar from "../Avatar/index";
import SocialLinks from "../SocialLinks/index";

const Info = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Avatar />
      <div>
        <h1>Tijdlijn Ontwikkeling Slam Software 🎾</h1>
        <h3>Teun Kuijken &bull; Norwin Dijkman</h3>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Info;
