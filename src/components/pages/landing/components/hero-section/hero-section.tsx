"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import classes from "./hero-section.module.scss";
import Button from "@/components/general/button/button";
import { EButtonVariant } from "@/components/general/button/button.types";
import FormIcon from "@/components/general/icons/form-icon";
import AISparkleIcon from "@/components/general/icons/ai-sparkle-icon";
import AIBrainIcon from "@/components/general/icons/ai-brain-icon";
import { UploadResumeModal } from "../upload-resume-modal";
import { FillFormModal } from "../fill-form-modal";
import DocumentIcon from "@/components/general/icons/document-icon";
import UploadIcon from "@/components/general/icons/upload-icon";

const HeroSection: React.FC = () => {
  const router = useRouter();
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const handleShowMatches = () => {
    setIsUploadModalOpen(false);
    setIsFormModalOpen(false);
    router.push("/job-matches");
  };

  return (
    <>
      <section id="hero" className={classes.heroSection}>
        <div className={classes.container}>
          <div className={classes.content}>
            <h1 className={classes.heading}>Stop searching. Start matching.</h1>
            <p className={classes.paragraph}>
              Upload your résumé or fill the form — and let AI find jobs that truly fit
              you.
            </p>
            <div className={classes.buttons}>
              <Button
                variant={EButtonVariant.PRIMARY}
                className={classes.uploadButton}
                onClick={() => setIsUploadModalOpen(true)}
              >
                <UploadIcon />
                <span>Upload Résumé</span>
              </Button>
              <Button
                variant={EButtonVariant.SECONDARY}
                className={classes.formButton}
                onClick={() => setIsFormModalOpen(true)}
              >
                <FormIcon color="currentColor" />
                <span>Fill the Form</span>
              </Button>
            </div>
            <div className={classes.badges}>
              <div className={classes.badgeItem}>
                <AISparkleIcon size={20} />
                <span>Powered by AI</span>
              </div>
              <div className={classes.divider} />
              <div className={classes.badgeItem}>
                <span>Integrated with Djinni & DOU</span>
              </div>
            </div>
          </div>
          <div className={classes.illustration}>
            <div className={classes.documentCard}>
              <div className={classes.documentIcon}>
                <DocumentIcon />
              </div>
            </div>
          </div>
        </div>
      </section>

      <UploadResumeModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onShowMatches={handleShowMatches}
      />
      <FillFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        onShowMatches={handleShowMatches}
      />
    </>
  );
};

export default HeroSection;
