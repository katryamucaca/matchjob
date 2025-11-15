import React from "react";
import { Footer } from "@/components/general/footer";
import { Contact } from "@/components/pages/contact";
import GuestHeader from "@/components/general/headers/guest-header/guest-header";
import { Page } from "@/components/general/page";
import { PageContent } from "@/components/general/page-content";

export default function ContactPage() {
  return (
    <Page>
      <GuestHeader />

      <PageContent>
        <Contact />
      </PageContent>
      
      <Footer />
    </Page>
  );
}
