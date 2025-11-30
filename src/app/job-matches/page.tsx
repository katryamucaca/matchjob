import React from "react";
import { JobMatches } from "@/components/pages/job-matches";
import GuestHeader from "@/components/general/headers/guest-header/guest-header";
import Footer from "@/components/general/footer/footer";
import { PageContent } from "@/components/general/page-content";

const JobMatchesPage = () => {
  return (
    <>
      <GuestHeader />

      <PageContent>
        <JobMatches />
      </PageContent>

      <Footer />
    </>
  );
};

export default JobMatchesPage;
