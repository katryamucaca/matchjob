import React from "react";
import { Contact } from "@/components/pages/contact";
import { Page } from "@/components/general/page";
import { PageContent } from "@/components/general/page-content";
import GuestHeader from "@/components/general/headers/guest-header/guest-header";
import { Footer } from "@/components/general/footer";

export default function ContactPage() {
  return (
    <Page>
      <GuestHeader currentPath="/contact" />
      <PageContent>
        <Contact />
      </PageContent>

      <Footer />
    </Page>
  );
}
