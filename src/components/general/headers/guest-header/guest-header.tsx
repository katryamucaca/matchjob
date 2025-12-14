"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/general/button/button";
import { EButtonVariant } from "@/components/general/button/button.types";
import GeneralHeader from "@/components/general/headers/general-header/general-header";
import classes from "./guest-header.module.scss";
import Sidebar, { SidebarNavItem } from "@/components/general/sidebar";
import HelpCircleIcon from "@/components/general/icons/help-circle-icon";
import EmailIcon from "@/components/general/icons/email-icon";
import InfoIcon from "../../icons/info-icon";
import cn from "classnames";

const GuestHeader: React.FC<{ currentPath?: string }> = ({ currentPath }) => {
  const left = (
    <div className={classes.logo}>
      <Link href="/">MatchJob</Link>
    </div>
  );

  const middle = (
    <nav className={classes.nav}>
      <Link href="/about" className={cn(classes.navLink, {
        [classes.active]: currentPath === "/about",
      })}>About</Link>
      <Link href="/faq" className={cn(classes.navLink, {
        [classes.active]: currentPath === "/faq",
      })}>FAQ</Link>
      <Link href="/contact" className={cn(classes.navLink, {
        [classes.active]: currentPath === "/contact",
      })}>Contact</Link>
    </nav>
  );

  const right = (
    <Link href="/auth/signin">
      <Button variant={EButtonVariant.PRIMARY} className={classes.signInButton}>
        Sign In / Sign Up
      </Button>
    </Link>
  );

  const sidebarNavItems: SidebarNavItem[] = [
    {
      href: "/about",
      label: "About",
      icon: <InfoIcon />,
    },
    {
      href: "/faq",
      label: "FAQ",
      icon: <HelpCircleIcon />,
    },
    {
      href: "/contact",
      label: "Contact",
      icon: <EmailIcon />,
    },
  ];

  const sidebarHeader = (
    <div className={classes.sidebarHeader}>
      <div className={classes.sidebarLogo}>
        <Link href="/">MatchJob</Link>
      </div>
      <p className={classes.sidebarTagline}>Find Your Perfect Match</p>
    </div>
  );

  const sidebarContent = (
    <Sidebar
      currentPath={currentPath}
      navItems={sidebarNavItems}
      header={sidebarHeader}
      footer={right}
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

export default GuestHeader;
