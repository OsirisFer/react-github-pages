import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import OsirisImg from "./OsirisImg.png";

export const Hero = () => {

    const imageUrl = getImageUrl("Hero/heroImg.png");
    console.log("Image URL: ", imageUrl);
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Osiris</h1>
            <p className={styles.description}>
            I'm a Junior Developer, passionate about programmings. 
            <br></br>Reach out if you'd like to learn more!
            </p>
            <a href="mailto:myemail@email.com" className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
        <img
            src={OsirisImg}
            alt="Hero of me"
            className={styles.OsirisImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  );
};