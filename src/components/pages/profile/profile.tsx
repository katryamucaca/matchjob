import React from "react";
import { ProfileHeader } from "./components/profile-header";
import { KeyInformation } from "./components/key-information";
import { ResumeSummary } from "./components/resume-summary";
import classes from "./profile.module.scss";

// example user data
const sampleUserData = {
  name: "Sarah Johnson",
  email: "sarah.johnson@email.com",
  initials: "SJ",
  yearsOfExperience: "5 years",
  specialization: "Frontend Development",
  technologies: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Next.js",
    "Node.js",
    "Git",
  ],
  resumeSummary: [
    "Experienced frontend developer with 5+ years building responsive, user-centric web applications using modern JavaScript frameworks.",
    "Led development of customer-facing dashboard that increased user engagement by 40% and reduced support tickets by 25%.",
    "Strong expertise in React ecosystem including hooks, context API, and state management with Redux and Zustand.",
    "Proven track record of collaborating with cross-functional teams to deliver high-quality products on tight deadlines.",
    "Passionate about accessibility, performance optimization, and creating intuitive user interfaces that delight users.",
  ],
};

const Profile: React.FC = () => {
  const handleEditProfile = () => {
    console.log("edit profile clicked");
  };

  const handleUploadResume = () => {
    console.log("upload resume clicked");
  };

  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <ProfileHeader
          name={sampleUserData.name}
          email={sampleUserData.email}
          initials={sampleUserData.initials}
          onEditProfile={handleEditProfile}
          onUploadResume={handleUploadResume}
        />

        <div className={classes.profileDetails}>
          <KeyInformation
            yearsOfExperience={sampleUserData.yearsOfExperience}
            specialization={sampleUserData.specialization}
            technologies={sampleUserData.technologies}
          />

          <ResumeSummary summaryPoints={sampleUserData.resumeSummary} />
        </div>
      </div>
    </main>
  );
};

export default Profile;
