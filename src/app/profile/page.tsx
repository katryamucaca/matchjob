"use client";

import React from "react";
import { Footer } from "@/components/general/footer";
import { Profile } from "@/components/pages/profile";
import { Page } from "@/components/general/page";
import { PageContent } from "@/components/general/page-content";
import SignedInHeader from "@/components/general/headers/signed-in-header/signed-in-header";

export default function ProfilePage() {
  return (
    <Page>
      <SignedInHeader currentPath="/profile" />

      <PageContent>
        <Profile />
      </PageContent>

      <Footer />
    </Page>
  );
}
