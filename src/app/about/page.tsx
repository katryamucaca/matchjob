import React from "react";
import { Footer } from "@/components/general/footer";
import { About } from "@/components/pages/about";
import GuestHeader from "@/components/general/headers/guest-header/guest-header";
import { Page } from "@/components/general/page";
import { PageContent } from "@/components/general/page-content";

export default function AboutPage() {
  return (
    <Page>
      <GuestHeader />

      <PageContent>
        <About />
      </PageContent>

      <Footer />
    </Page>
  );
}
