"use client";

import React, { useRef, useState } from "react";
import classes from "./upload-new-resume-modal.module.scss";
import { Modal } from "@/components/general/modal";
import Button from "@/components/general/button/button";
import { EButtonVariant } from "@/components/general/button/button.types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { uploadResume } from "@/store/slices/userSlice";

interface UploadNewResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UploadNewResumeModal: React.FC<UploadNewResumeModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async () => {
    if (selectedFile) {
      await dispatch(uploadResume(selectedFile));
      
      handleClose();
    }
  };

  const handleFileSelect = (file: File) => {
    if (file && (file.type === "application/pdf" || file.name.endsWith(".pdf"))) {
      setSelectedFile(file);
    } else {
      alert("Please select a PDF file");
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
        <h2 className={classes.title}>Upload New Résumé</h2>
        <p className={classes.subtitle}>Upload a new version of your résumé to update your profile</p>

        <div
          className={`${classes.uploadArea} ${isDragging ? classes.dragging : ""} ${selectedFile ? classes.hasFile : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className={classes.uploadIcon}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 21.3333V10.6667M16 10.6667L11.3333 15.3333M16 10.6667L20.6667 15.3333"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.6667 21.3333V26C26.6667 26.3536 26.5262 26.6928 26.2761 26.9428C26.0261 27.1929 25.687 27.3333 25.3333 27.3333H6.66667C6.31304 27.3333 5.97391 27.1929 5.72386 26.9428C5.47381 26.6928 5.33333 26.3536 5.33333 26V21.3333"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h3 className={classes.uploadTitle}>Upload Your Résumé</h3>
          <p className={classes.uploadText}>
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

        <div className={classes.actions}>
          <Button
            variant={EButtonVariant.SECONDARY}
            className={classes.cancelButton}
            onClick={handleClose}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            variant={EButtonVariant.PRIMARY}
            className={classes.uploadButton}
            onClick={handleUpload}
            disabled={!selectedFile || isLoading}
          >
            {isLoading ? "Uploading..." : "Upload Resume"}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default UploadNewResumeModal;

