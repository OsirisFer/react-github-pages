import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import tcs from "./ExperienceImages/tcs.png";

// Function to dynamically import images based on skill title
const importImage = (title) => {
  try {
    return require(`./ExperienceImages/${title.toLowerCase()}.png`);
  } catch (error) {
    console.error(`Image not found for skill: ${title}`);
    return null;
  }
};

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            const imgSrc = importImage(skill.title);
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                {imgSrc && <img src={imgSrc} className={styles.imagenesMove} alt={skill.title} />}
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={tcs}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
