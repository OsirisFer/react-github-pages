import React from "react";

import styles from "./About.module.css";
import aboutImage from "./AboutImages/aboutImage.png";
import cursorIcon from "./AboutImages/cursorIcon.png";
import serverIcon from "./AboutImages/serverIcon.png";
import uiIcon from "./AboutImages/uiIcon.png";


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                As a Computer Science Technologist, I build responsive and optimized websites.
                My expertise lies in modern frameworks and delivering high-performance solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I am an advanced Engineering student at UdelaR with experience in scalable backend systems.
                I focus on building robust APIs and efficient architectures.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={uiIcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Language Proficiency</h3>
              <p>
                Certified C2 in English, I communicate effectively with clients and write technical documentation.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};