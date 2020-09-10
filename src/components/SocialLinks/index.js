import React from "react";
import JJ from "../../assets/jj-white.png"
import Plathena from "../../assets/plathena.png"
import Inspire from "../../assets/inspire.png"

import styles from "./socialLinksStyles.module.css";

const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <ul>
        <li>
          <a href="https://juniorjoy.nl">
            <img src={JJ} alt="junior-joy" />
          </a>
        </li>
        <li>
          <a href="https://plathena.com">
            <img src={Plathena} alt="plathena" />
          </a>
        </li>
        <li>
          <a href="https://www.inspiretennisopleiding.nl/">
            <img src={Inspire} alt="inspire" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
