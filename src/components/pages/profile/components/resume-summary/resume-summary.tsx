import React from "react";
import classes from "./resume-summary.module.scss";

interface ResumeSummaryProps {
  summaryPoints: string[];
}

const ResumeSummary: React.FC<ResumeSummaryProps> = ({ summaryPoints }) => {
  return (
    <div className={classes.resumeSummary}>
      <div className={classes.header}>
        <h3 className={classes.title}>Resume Summary</h3>
      </div>

      <ul className={classes.content}>
        {summaryPoints.map((point, index) => (
          <li key={index} className={classes.summaryPoint}>
            <span className={classes.bullet}></span>
            <p className={classes.text}>{point}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeSummary;
