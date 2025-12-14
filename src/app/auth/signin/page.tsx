"use client";

import React from "react";
import { Page } from "@/components/general/page";
import { PageContent } from "@/components/general/page-content";
import SignIn from "@/components/pages/auth/sign-in/sign-in";
import classes from '../page.module.scss'
import { withGuest } from "@/components/hoc/withGuest";

function SignInPageRoute() {
  return (
    <Page>
      <PageContent className={classes.pageContent}>
        <SignIn />
      </PageContent>
    </Page>
  );
}

export default withGuest(SignInPageRoute);
