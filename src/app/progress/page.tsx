"use client";

import React from "react";
import { Footer } from "@/components/general/footer";
import { Progress } from "@/components/pages/progress";
import { Page } from "@/components/general/page";
import { PageContent } from "@/components/general/page-content";
import SignedInHeader from "@/components/general/headers/signed-in-header/signed-in-header";

export default function ProgressPage() {
  return (
    <Page>
      <SignedInHeader currentPath="/progress" />

      <PageContent>
        <Progress />
      </PageContent>

      <Footer />
    </Page>
  );
}
