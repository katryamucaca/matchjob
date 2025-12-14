"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import GeneralHeader from "@/components/general/headers/general-header/general-header";
import ChartIcon from "@/components/general/icons/chart-icon";
import UserIcon from "@/components/general/icons/user-icon";
import HelpCircleIcon from "@/components/general/icons/help-circle-icon";
import EmailIcon from "@/components/general/icons/email-icon";
import classes from "./signed-in-header.module.scss";
import cn from "classnames";
import BriefcaseIcon from "../../icons/briefcase-icon";
import Sidebar, { SidebarNavItem } from "@/components/general/sidebar";
import UserProfileHeader from "@/components/general/sidebar/user-profile-header";
import { useAuth } from "@/hooks/useAuth";
import { useAppSelector } from "@/store/hooks";

interface SignedInHeaderProps {
  currentPath?: string;
}

const SignedInHeader: React.FC<SignedInHeaderProps> = ({ currentPath }) => {
  const { signOut } = useAuth();
  const user = useAppSelector((state) => state.user.profile);
  const router = useRouter();

  const handleSignOut = () => {
    signOut();
    router.push("/");
  };

  const left = (
    <div className={classes.logo}>
      <Link href="/jobs">MatchJob</Link>
    </div>
  );

  const middle = (
    <nav className={classes.nav}>
      <Link
        href="/jobs"
        className={cn(classes.navLink, {
          [classes.active]: currentPath === "/jobs",
        })}
      >
        Jobs
      </Link>
      <Link
        href="/progress"
        className={cn(classes.navLink, {
          [classes.active]: currentPath === "/progress",
        })}
      >
        Progress
      </Link>
      <Link
        href="/profile"
        className={cn(classes.navLink, {
          [classes.active]: currentPath === "/profile",
        })}
      >
        Profile
      </Link>
    </nav>
  );

  const right = (
    <div className={classes.userSection}>
      <div className={classes.userIcon}>
        <div className={classes.userAvatar}>{user?.initials || "U"}</div>
      </div>
      <button className={classes.signOutButton} onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );

  const sidebarNavItems: SidebarNavItem[] = [
    {
      href: "/jobs",
      label: "Jobs",
      icon: <BriefcaseIcon />,
    },
    {
      href: "/progress",
      label: "Progress",
      icon: <ChartIcon />,
    },
    {
      href: "/profile",
      label: "Profile",
      icon: <UserIcon />,
    },
  ];

  const sidebarContent = (
    <Sidebar
      currentPath={currentPath}
      navItems={sidebarNavItems}
      header={
        <UserProfileHeader
          avatar={user?.initials || "U"}
          userName={user?.fullName || "User"}
        />
      }
    />
  );

  return (
    <GeneralHeader
      left={left}
      middle={middle}
      right={right}
      sidebarContent={sidebarContent}
    />
  );
};

export default SignedInHeader;
