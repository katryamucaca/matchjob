import React from "react";
import Link from "next/link";
import GeneralHeader from "@/components/general/headers/general-header/general-header";
import classes from "./signed-in-header.module.scss";
import cn from "classnames";

interface SignedInHeaderProps {
  currentPath?: string;
}

const SignedInHeader: React.FC<SignedInHeaderProps> = ({ currentPath }) => {
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
      <Link
        href="/faq"
        className={cn(classes.navLink, {
          [classes.active]: currentPath === "/faq",
        })}
      >
        FAQ
      </Link>
    </nav>
  );

  const right = (
    <div className={classes.userIcon}>
      <div className={classes.userAvatar}>E</div>
    </div>
  );

  return <GeneralHeader left={left} middle={middle} right={right} />;
};

export default SignedInHeader;
