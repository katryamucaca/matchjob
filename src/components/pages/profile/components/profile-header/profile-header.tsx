import React from "react";
import Button from "@/components/general/button/button";
import { EButtonVariant } from "@/components/general/button";
import classes from "./profile-header.module.scss";
import EditIcon from "@/components/general/icons/edit-icon";
import UploadIcon from "@/components/general/icons/upload-icon";

interface ProfileHeaderProps {
  name: string;
  email: string;
  initials: string;
  onEditProfile?: () => void;
  onUploadResume?: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  email,
  initials,
  onEditProfile,
  onUploadResume,
}) => {
  const handleEditProfile = () => {
    if (onEditProfile) {
      onEditProfile();
    } else {
      console.log("Edit profile clicked");
    }
  };

  const handleUploadResume = () => {
    if (onUploadResume) {
      onUploadResume();
    } else {
      console.log("Upload resume clicked");
    }
  };

  return (
    <div className={classes.profileHeader}>
      <div className={classes.avatar}>
        <span className={classes.initials}>{initials}</span>
      </div>

      <div className={classes.userInfo}>
        <h2 className={classes.name}>{name}</h2>
        <p className={classes.email}>{email}</p>
      </div>

      <div className={classes.actions}>
        <Button
          variant={EButtonVariant.SECONDARY}
          className={classes.editButton}
          onClick={handleEditProfile}
        >
          <EditIcon />
          Edit Profile
        </Button>

        <Button
          variant={EButtonVariant.PRIMARY}
          className={classes.uploadButton}
          onClick={handleUploadResume}
        >
          <UploadIcon />
          Upload New Resume
        </Button>
      </div>
    </div>
  );
};

export default ProfileHeader;
