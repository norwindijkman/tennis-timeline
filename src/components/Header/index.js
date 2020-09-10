import React from "react";
import Link from "gatsby-link";
import styles from "./header.module.css";

const Header = () => (
  <div className={styles.headerContainer}>
    <div className={styles.headerMaxWidthContainer}>
      <h2 className={styles.headerH1}>
        Planning tennis software
      </h2>
    </div>
  </div>
);

export default Header;
