"use client";

import React from "react";
import { Page } from "@/components/general/page";
import { PageContent } from "@/components/general/page-content";
import SignIn from "@/components/pages/auth/sign-in/sign-in";

export default function SignInPageRoute() {
  return (
    <Page>
      <PageContent>
        <SignIn />
      </PageContent>
    </Page>
  );
}
