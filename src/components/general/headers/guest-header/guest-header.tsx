"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/general/button/button";
import { EButtonVariant } from "@/components/general/button/button.types";
import GeneralHeader from "@/components/general/headers/general-header/general-header";
import classes from "./guest-header.module.scss";

const GuestHeader: React.FC = () => {
  const left = (
    <div className={classes.logo}>
      <Link href="/">MatchJob</Link>
    </div>
  );

  const middle = (
    <nav className={classes.nav}>
      <Link href="/about">About</Link>
      <Link href="/faq">FAQ</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );

  const right = (
    <Link href="/auth/signin">
      <Button variant={EButtonVariant.PRIMARY} className={classes.signInButton}>
        Sign In / Sign Up
      </Button>
    </Link>
  );

  return <GeneralHeader left={left} middle={middle} right={right} />;
};

export default GuestHeader;
