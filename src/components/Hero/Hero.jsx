import React, { useEffect } from "react";

import styles from "./Hero.module.css";
import OsirisImg from "./OsirisImg.png";
import "./stars.css";

export const Hero = () => {
  useEffect(() => {
    let index = 0;
    const interval = 1000;

    const rand = (min, max) => 
      Math.floor(Math.random() * (max - min + 1)) + min;

    const animate = (star) => {
      star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
      star.style.setProperty("--star-top", `${rand(-40, 80)}%`);
      star.style.animation = "none";
      void star.offsetHeight; // Trigger reflow
      star.style.animation = "";
    };

    const stars = document.getElementsByClassName("magic-star");

    for (const star of stars) {
      setTimeout(() => {
        animate(star);
        setInterval(() => animate(star), 1000);
      }, index++ * (interval / 3));
    }
  }, []);

  return (
    <section className={styles.container2}>
        <div className="container">
  <h1>
    <p className="notmagic-text">Hello Mimiquate, my name is </p><br />
    <span className="magic">
      <span className="magic-star">
        <svg viewBox="0 0 512 512">
          <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
        </svg>
      </span>
      <span className="magic-star">
        <svg viewBox="0 0 512 512">
          <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
        </svg>
      </span>
      <span className="magic-star">
        <svg viewBox="0 0 512 512">
          <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
        </svg>
      </span> 
      <span className="magic-text"> Osiris Fernández.</span>
    </span>
  </h1>
  <div className={styles.content}>
            <p className={styles.description}>
            I'm a Junior Developer with a passion for programming. 
            <br></br>Thank you for this opportunity
            </p>
            <a href="mailto:myemail@email.com" className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
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