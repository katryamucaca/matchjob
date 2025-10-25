import React from "react";
import classes from "./landing.module.scss";

const Landing: React.FC = () => {
  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <h1 className={classes.title}>Landing</h1>
      </div>
    </main>
  );
};

export default Landing;
