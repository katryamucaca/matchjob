import React from "react";
import classes from "./about.module.scss";

const About: React.FC = () => {
  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <div className={classes.contentCard}>
          <h1 className={classes.title}>About MatchJob</h1>
          <p className={classes.subtitle}>
            Learn more about how we match candidates with their perfect jobs
            using AI technology.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
