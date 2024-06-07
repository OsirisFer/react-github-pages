import React from "react";
import styles from "./Contact.module.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./SocialLinks.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className="socialLinks">
        <li>
          <a href="mailto:osirisfernandez1999@gmail.com">
            <i className="fas fa-envelope icon"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/osiris-fern%C3%A1ndez-515095217">
            <i className="fab fa-linkedin-in icon"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/OsirisFer">
            <i className="fab fa-github icon"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

