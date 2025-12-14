"use client";

import React, { useState } from "react";
import classes from "./fill-form-modal.module.scss";
import { Modal } from "@/components/general/modal";
import Button from "@/components/general/button/button";
import { EButtonVariant } from "@/components/general/button/button.types";
import Input from "@/components/general/input/input";
import { Textarea } from "@/components/general/textarea";
import FormIcon from "@/components/general/icons/form-icon";
import { useAuth } from "@/hooks/useAuth";

interface FillFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowMatches: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  yearsExperience: string;
  specialization: string;
  skills: string;
}

const FillFormModal: React.FC<FillFormModalProps> = ({
  isOpen,
  onClose,
  onShowMatches,
}) => {
  const { setLandingFormData } = useAuth();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    location: "",
    yearsExperience: "",
    specialization: "",
    skills: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setLandingFormData(formData);

    onShowMatches();
  };

  const handleClose = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      yearsExperience: "",
      specialization: "",
      skills: "",
    });
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

        <div className={classes.formCard}>
          <div className={classes.header}>
            <div className={classes.iconWrapper}>
              <FormIcon />
            </div>
            <h3 className={classes.title}>Tell Us About Yourself</h3>
            <p className={classes.description}>
              Fill in your details to get personalized job recommendations
            </p>
          </div>

          <form onSubmit={handleSubmit} className={classes.form}>
            <div className={classes.formRow}>
              <Input
                label="Full Name"
                type="text"
                value={formData.name}
                onChange={(value) => setFormData({ ...formData, name: value })}
                placeholder="John Doe"
                required
              />
            </div>

            <div className={classes.formRow}>
              <Input
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(value) => setFormData({ ...formData, email: value })}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className={classes.formRow}>
              <Input
                label="Phone Number"
                type="text"
                value={formData.phone}
                onChange={(value) => setFormData({ ...formData, phone: value })}
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div className={classes.formRow}>
              <Input
                label="Location"
                type="text"
                value={formData.location}
                onChange={(value) => setFormData({ ...formData, location: value })}
                placeholder="San Francisco, CA"
                required
              />
            </div>

            <div className={classes.formRow}>
              <Input
                label="Years of Experience"
                type="text"
                value={formData.yearsExperience}
                onChange={(value) => setFormData({ ...formData, yearsExperience: value })}
                placeholder="5"
                required
              />
            </div>

            <div className={classes.formRow}>
              <Input
                label="Specialization"
                type="text"
                value={formData.specialization}
                onChange={(value) => setFormData({ ...formData, specialization: value })}
                placeholder="Frontend Development"
                required
              />
            </div>

            <div className={classes.formRow}>
              <Textarea
                label="Key Skills"
                value={formData.skills}
                onChange={(value) => setFormData({ ...formData, skills: value })}
                placeholder="React, TypeScript, Node.js, etc."
                required
                rows={4}
              />
            </div>

            <Button variant={EButtonVariant.PRIMARY} className={classes.submitButton}>
              Get Job Matches
            </Button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default FillFormModal;
