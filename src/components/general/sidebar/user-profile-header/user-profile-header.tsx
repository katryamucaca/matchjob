import React from "react";
import classes from "./user-profile-header.module.scss";

export interface UserProfileHeaderProps {
  avatar: string;
  userName: string;
  userStatus?: string;
}

const UserProfileHeader: React.FC<UserProfileHeaderProps> = ({
  avatar,
  userName,
  userStatus,
}) => {
  return (
    <div className={classes.userProfile}>
      <div className={classes.sidebarAvatar}>{avatar}</div>
      <div className={classes.userInfo}>
        <div className={classes.userName}>{userName}</div>
        {userStatus && <div className={classes.userStatus}>{userStatus}</div>}
      </div>
    </div>
  );
};

export default UserProfileHeader;

