import React from "react";

import styles from "./Contact.module.css";
import emailIcon from "./ContactImages/emailIcon.png";
import linkedinIcon from "./ContactImages/linkedinIcon.png";
import githubIcon from "./ContactImages/githubIcon.png";
import "@fortawesome/fontawesome-free/css/all.css";
import "./SocialLinks.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:osirisfernandez1999@gmail.com">osirisfernandez1999@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/osiris-fern%C3%A1ndez-515095217">linkedin.com/osiris-fernández</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/OsirisFer">github.com/OsirisFer</a>
        </li>
      </ul>
    </footer>
  );
};
