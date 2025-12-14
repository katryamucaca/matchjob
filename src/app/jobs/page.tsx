"use client";

import React from "react";
import { Footer } from "@/components/general/footer";
import { Jobs } from "@/components/pages/jobs";
import { Page } from "@/components/general/page";
import { PageContent } from "@/components/general/page-content";
import SignedInHeader from "@/components/general/headers/signed-in-header/signed-in-header";
import { withAuth } from "@/components/hoc/withAuth";

function JobsPage() {
  return (
    <Page>
      <SignedInHeader currentPath="/jobs" />

      <PageContent>
        <Jobs />
      </PageContent>

      <Footer />
    </Page>
  );
}

export default withAuth(JobsPage);
