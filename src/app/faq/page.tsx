import React from "react";
import { Footer } from "@/components/general/footer";
import { FAQ } from "@/components/pages/faq";
import GuestHeader from "@/components/general/headers/guest-header/guest-header";
import { Page } from "@/components/general/page";
import { PageContent } from "@/components/general/page-content";

export default function FAQPage() {
  return (
    <Page>
      <GuestHeader />

      <PageContent>
        <FAQ />
      </PageContent>

      <Footer />
    </Page>
  );
}
