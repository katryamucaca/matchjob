"use client";

import React from "react";
import { Page } from "@/components/general/page";
import { PageContent } from "@/components/general/page-content";
import SignUp from "@/components/pages/auth/sign-up/sign-up";
import classes from "../page.module.scss";
import { withGuest } from "@/components/hoc/withGuest";

function SignUpPageRoute() {
  return (
    <Page>
      <PageContent className={classes.pageContent}>
        <SignUp />
      </PageContent>
    </Page>
  );
}

export default withGuest(SignUpPageRoute);
