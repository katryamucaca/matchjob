import React from "react";
import GuestHeader from "@/components/general/headers/guest-header/guest-header";
import { Footer } from "@/components/general/footer";
import Landing from "@/components/pages/landing/landing";
import { Page } from "@/components/general/page";

const LandingPage: React.FC = () => {
  return (
    <Page>
      <GuestHeader />
      <Landing />
      <Footer />
    </Page>
  );
};

export default LandingPage;
