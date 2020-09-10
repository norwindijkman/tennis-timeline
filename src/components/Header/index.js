import React from "react";
import Link from "gatsby-link";
import styles from "./header.module.css";

const Header = ({ back }) => (
  <div className={styles.headerContainer}>
    <div className={styles.headerMaxWidthContainer}>
      {back ?
        <Link to="/"><button className={styles.headerButton}>&lt; TERUG</button></Link> : (
        <Link to="/why"><button className={styles.headerButton}>Over Slam</button></Link>
      )}
      <h2 className={styles.headerH1}>
        Slam Software
      </h2>
    </div>
  </div>
);

export default Header;
