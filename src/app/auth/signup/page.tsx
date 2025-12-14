"use client";

import React from "react";
import { Page } from "@/components/general/page";
import { PageContent } from "@/components/general/page-content";
import SignUp from "@/components/pages/auth/sign-up/sign-up";
import classes from "../page.module.scss";

export default function SignUpPageRoute() {
  return (
    <Page>
      <PageContent className={classes.pageContent}>
        <SignUp />
      </PageContent>
    </Page>
  );
}
