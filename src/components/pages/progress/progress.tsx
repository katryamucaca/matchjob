import React from "react";
import classes from "./progress.module.scss";

const Progress: React.FC = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Application Progress</h1>
    </div>
  );
};

export default Progress;
