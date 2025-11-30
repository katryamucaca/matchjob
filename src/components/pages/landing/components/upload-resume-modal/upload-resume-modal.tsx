"use client";

import React, { useRef, useState } from "react";
import classes from "./upload-resume-modal.module.scss";
import { Modal } from "@/components/general/modal";
import Button from "@/components/general/button/button";
import { EButtonVariant } from "@/components/general/button/button.types";
import UploadDocumentIcon from "@/components/general/icons/upload-document-icon";

interface UploadResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowMatches: () => void;
}

const UploadResumeModal: React.FC<UploadResumeModalProps> = ({
  isOpen,
  onClose,
  onShowMatches,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file && (file.type === "application/pdf" || file.name.endsWith(".pdf"))) {
      setSelectedFile(file);
      console.log("File selected:", file.name);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleChooseFile = () => {
    fileInputRef.current?.click();
  };

  const handleClose = () => {
    setSelectedFile(null);
    setIsDragging(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} className={classes.modalContent}>
      <div className={classes.container}>
        <button className={classes.backButton} onClick={handleClose}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="#8D99AE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Back to Home</span>
        </button>

        <div
          className={`${classes.uploadCard} ${isDragging ? classes.dragging : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className={classes.iconWrapper}>
            <UploadDocumentIcon />
          </div>

          <h3 className={classes.title}>Upload Your Résumé</h3>

          <p className={classes.description}>
            Drag and drop your résumé here, or click to browse
          </p>

          {selectedFile && (
            <p className={classes.fileName}>Selected: {selectedFile.name}</p>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className={classes.fileInput}
          />

          <Button
            variant={EButtonVariant.PRIMARY}
            className={classes.chooseButton}
            onClick={handleChooseFile}
          >
            Choose File
          </Button>
        </div>

        <Button
          variant={EButtonVariant.PRIMARY}
          className={classes.submitButton}
          onClick={onShowMatches}
        >
          Get Job Matches
        </Button>
      </div>
    </Modal>
  );
};

export default UploadResumeModal;
