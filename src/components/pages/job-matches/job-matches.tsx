"use client";

import React from "react";
import { useRouter } from "next/navigation";
import classes from "./job-matches.module.scss";
import Button from "@/components/general/button/button";
import { EButtonVariant } from "@/components/general/button/button.types";
import { JobCardSimple } from "@/components/general/job-card-simple";
import AISparkleIcon from "@/components/general/icons/ai-sparkle-icon";
import LockIcon from "@/components/general/icons/lock-icon";
import RocketIcon from "@/components/general/icons/rocket-icon";
import TargetIcon from "@/components/general/icons/target-icon";
import ChartIcon from "@/components/general/icons/chart-icon";
import LightningIcon from "@/components/general/icons/lightning-icon";

const previewJobs = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    matchPercentage: 95,
  },
  {
    title: "Full Stack Engineer",
    company: "StartupHub",
    location: "Remote",
    matchPercentage: 92,
  },
  {
    title: "UI/UX Developer",
    company: "Design Studio Pro",
    location: "New York, NY",
    matchPercentage: 88,
  },
];

const JobMatches: React.FC = () => {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/auth/signup");
  };

  const handleSignIn = () => {
    router.push("/auth/signin");
  };

  return (
    <main className={classes.jobMatches}>
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.iconWrapper}>
            <AISparkleIcon size={32} />
          </div>
          <h1 className={classes.title}>We Found Your Perfect Matches!</h1>
          <p className={classes.subtitle}>
            Based on your profile, we've found jobs that align with your skills and
            experience
          </p>
        </div>

        <div className={classes.previewSection}>
          <div className={classes.previewLabel}>
            <span>Here are your top 3 matches:</span>
          </div>

          <div className={classes.jobsGrid}>
            {previewJobs.map((job, index) => (
              <JobCardSimple
                key={index}
                title={job.title}
                company={job.company}
                location={job.location}
                matchPercentage={job.matchPercentage}
              />
            ))}
          </div>
        </div>

        <div className={classes.lockedSection}>
          <div className={classes.blurredCards}>
            <div className={classes.blurredCard} />
            <div className={classes.blurredCard} />
          </div>
          <div className={classes.lockCard}>
            <div className={classes.lockIconWrapper}>
              <LockIcon size={32} />
            </div>
            <p className={classes.lockText}>
              Sign up to unlock all your matches and start applying!
            </p>
          </div>
        </div>

        <div className={classes.actions}>
          <Button
            variant={EButtonVariant.PRIMARY}
            className={classes.signUpButton}
            onClick={handleSignUp}
          >
            Create Free Account
          </Button>
          <p className={classes.signinPrompt}>
            Already have an account?{" "}
            <button onClick={handleSignIn} className={classes.signinLink}>
              Sign In
            </button>
          </p>
        </div>
      </div>
    </main>
  );
};

export default JobMatches;
