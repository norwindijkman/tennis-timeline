import React from "react";

import styles from "./footerStyles.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>
          Made with 🔥 and ❤️, by Norwin Dijkman
        </p>
      </div>
    </div>
  );
};

export default Footer;
