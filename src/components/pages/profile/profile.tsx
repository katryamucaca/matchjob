"use client";

import React, { useState } from "react";
import { ProfileHeader } from "./components/profile-header";
import { KeyInformation } from "./components/key-information";
import { ResumeSummary } from "./components/resume-summary";
import { EditProfileModal } from "./components/edit-profile-modal";
import { UploadNewResumeModal } from "./components/upload-new-resume-modal";
import { EditKeyInfoModal } from "./components/edit-key-info-modal";
import classes from "./profile.module.scss";
import { useAppSelector } from "@/store/hooks";

const Profile: React.FC = () => {
  const userState = useAppSelector((state) => state.user);
  const { profile, keyInfo, resume } = userState;

  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isUploadResumeModalOpen, setIsUploadResumeModalOpen] = useState(false);
  const [isEditKeyInfoModalOpen, setIsEditKeyInfoModalOpen] = useState(false);

  const handleEditProfile = () => {
    setIsEditProfileModalOpen(true);
  };

  const handleUploadResume = () => {
    setIsUploadResumeModalOpen(true);
  };

  const handleEditKeyInfo = () => {
    setIsEditKeyInfoModalOpen(true);
  };

  return (
    <>
      <main className={classes.main}>
        <div className={classes.container}>
          <ProfileHeader
            name={profile.fullName}
            email={profile.email}
            initials={profile.initials}
            onEditProfile={handleEditProfile}
            onUploadResume={handleUploadResume}
          />

          <div className={classes.profileDetails}>
            <KeyInformation
              yearsOfExperience={keyInfo.yearsOfExperience}
              specialization={keyInfo.specialization}
              technologies={keyInfo.technologies}
              onEdit={handleEditKeyInfo}
            />

            <ResumeSummary summaryPoints={resume.summaryPoints} />
          </div>
        </div>
      </main>

      <EditProfileModal
        isOpen={isEditProfileModalOpen}
        onClose={() => setIsEditProfileModalOpen(false)}
        initialData={{
          fullName: profile.fullName,
          email: profile.email,
        }}
      />
      <UploadNewResumeModal
        isOpen={isUploadResumeModalOpen}
        onClose={() => setIsUploadResumeModalOpen(false)}
      />
      <EditKeyInfoModal
        isOpen={isEditKeyInfoModalOpen}
        onClose={() => setIsEditKeyInfoModalOpen(false)}
        initialData={{
          yearsOfExperience: keyInfo.yearsOfExperience.replace(" years", ""),
          specialization: keyInfo.specialization,
          technologies: keyInfo.technologies,
        }}
      />
    </>
  );
};

export default Profile;
