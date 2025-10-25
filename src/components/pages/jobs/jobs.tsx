import React from "react";
import { JobCard, JobData } from "@/components/general/job-card";
import classes from "./jobs.module.scss";

// sample job data
const sampleJobs: JobData[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    description:
      "We're looking for an experienced frontend developer with expertise in React, TypeScript, and modern web technologies. Join our dynamic team building next-generation web applications.",
    matchPercentage: 95,
  },
  {
    id: "2",
    title: "Full Stack Engineer",
    company: "StartupHub",
    location: "Remote",
    description:
      "Join our fast-growing startup as a full stack engineer. Work with React, Node.js, and cloud technologies to build scalable solutions for our customers.",
    matchPercentage: 92,
  },
  {
    id: "3",
    title: "UI/UX Developer",
    company: "Design Studio Pro",
    location: "New York, NY",
    description:
      "Passionate about creating beautiful, user-friendly interfaces? We need a UI/UX developer who can bridge the gap between design and development.",
    matchPercentage: 88,
  },
  {
    id: "4",
    title: "React Developer",
    company: "Digital Solutions",
    location: "Austin, TX",
    description:
      "Looking for a React specialist to help build our new product line. Experience with hooks, context, and state management libraries required.",
    matchPercentage: 87,
  },
  {
    id: "5",
    title: "JavaScript Engineer",
    company: "WebWorks Agency",
    location: "Boston, MA",
    description:
      "Join our team of JavaScript experts building cutting-edge web applications. Knowledge of modern frameworks and best practices essential.",
    matchPercentage: 85,
  },
  {
    id: "6",
    title: "Frontend Architect",
    company: "Enterprise Solutions",
    location: "Seattle, WA",
    description:
      "Lead our frontend architecture initiatives. Design scalable, maintainable systems and mentor junior developers in best practices.",
    matchPercentage: 83,
  },
  {
    id: "7",
    title: "Web Developer",
    company: "Creative Labs",
    location: "Los Angeles, CA",
    description:
      "Create engaging web experiences for our diverse client base. Work with the latest technologies in a creative, collaborative environment.",
    matchPercentage: 80,
  },
  {
    id: "8",
    title: "Software Engineer - Frontend",
    company: "Innovation Inc.",
    location: "Chicago, IL",
    description:
      "Be part of our engineering team building products that impact millions of users. Strong JavaScript skills and attention to detail required.",
    matchPercentage: 78,
  },
];

const Jobs: React.FC = () => {
  const handleJobClick = (job: JobData) => {
    console.log("job clicked:", job);
  };

  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.titleSection}>
            <h1 className={classes.title}>Job Matches</h1>
            <p className={classes.subtitle}>
              Found {sampleJobs.length} positions matching your profile
            </p>
          </div>
        </div>

        <div className={classes.jobsGrid}>
          {sampleJobs.map((job) => (
            <JobCard key={job.id} job={job} onClick={handleJobClick} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Jobs;
