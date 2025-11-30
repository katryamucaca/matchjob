import React from "react";
import classes from "./about.module.scss";
import RocketIcon from "@/components/general/icons/rocket-icon";
import HeartIcon from "@/components/general/icons/heart-icon";
import UsersIcon from "@/components/general/icons/users-icon";
import ShieldIcon from "@/components/general/icons/shield-icon";
import TargetIcon from "@/components/general/icons/target-icon";
import LightbulbIcon from "@/components/general/icons/lightbulb-icon";

const About: React.FC = () => {
  return (
    <main className={classes.about}>
      <div className={classes.container}>
        <div className={classes.hero}>
          <h1 className={classes.title}>About MatchJob</h1>
          <p className={classes.subtitle}>
            We're on a mission to revolutionize job searching by connecting talented
            professionals with their perfect career opportunities using cutting-edge AI
            technology.
          </p>
        </div>

        <div className={classes.missionVision}>
          <div className={classes.missionCard}>
            <div className={classes.iconWrapper}>
              <TargetIcon />
            </div>
            <h3 className={classes.cardTitle}>Our Mission</h3>
            <p className={classes.cardText}>
              To empower every professional with AI-driven insights that connect them to
              opportunities where they can thrive and make a meaningful impact.
            </p>
          </div>

          <div className={classes.missionCard}>
            <div className={classes.iconWrapper}>
              <LightbulbIcon />
            </div>
            <h3 className={classes.cardTitle}>Our Vision</h3>
            <p className={classes.cardText}>
              A world where finding the right job is effortless, where every professional
              finds work that fulfills them, and every company builds teams that excel.
            </p>
          </div>
        </div>

        <div className={classes.statsSection}>
          <div className={classes.statCard}>
            <div className={classes.statNumber}>10K+</div>
            <div className={classes.statLabel}>Jobs Matched</div>
          </div>
          <div className={classes.statCard}>
            <div className={classes.statNumber}>95%</div>
            <div className={classes.statLabel}>Match Accuracy</div>
          </div>
          <div className={classes.statCard}>
            <div className={classes.statNumber}>5K+</div>
            <div className={classes.statLabel}>Active Users</div>
          </div>
          <div className={classes.statCard}>
            <div className={classes.statNumber}>500+</div>
            <div className={classes.statLabel}>Partner Companies</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
