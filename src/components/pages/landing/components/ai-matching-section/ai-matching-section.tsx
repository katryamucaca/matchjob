import React from "react";
import classes from "./ai-matching-section.module.scss";
import AIBrainIcon from "@/components/general/icons/ai-brain-icon";
import AISparkleIcon from "@/components/general/icons/ai-sparkle-icon";

const AIMatchingSection: React.FC = () => {
  return (
    <section className={classes.aiMatchingSection}>
      <div className={classes.container}>
        <div className={classes.iconWrapper}>
          <div className={classes.iconBackground}>
            <AIBrainIcon size={48} />
            <div className={classes.sparkle}>
              <AISparkleIcon size={24} />
            </div>
          </div>
        </div>
        <h2 className={classes.heading}>AI-Powered Matching</h2>
        <div className={classes.description}>
          <p className={classes.textNormal}>
            Our AI doesn&apos;t just keyword-match your résumé.
          </p>
          <p className={classes.textHighlight}>
            It <span className={classes.highlight}>understands your experience</span>,
            technologies, and career goals — so you see jobs that{" "}
            <span className={classes.highlight}>actually make sense</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIMatchingSection;
