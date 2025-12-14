import React from "react";
import { About } from "@/components/pages/about";
import { Page } from "@/components/general/page";
import { PageContent } from "@/components/general/page-content";
import GuestHeader from "@/components/general/headers/guest-header/guest-header";
import { Footer } from "@/components/general/footer";

export default function AboutPage() {
  return (
    <Page>
      <GuestHeader currentPath="/about" />
      
      <PageContent>
        <About />
      </PageContent>

      <Footer />
    </Page>
  );
}
