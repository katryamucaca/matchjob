"use client";

import React, { useState } from "react";
import classes from "./edit-profile-modal.module.scss";
import { Modal } from "@/components/general/modal";
import Button from "@/components/general/button/button";
import { EButtonVariant } from "@/components/general/button/button.types";
import Input from "@/components/general/input/input";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    fullName: string;
    email: string;
  };
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const [formData, setFormData] = useState({
    fullName: initialData?.fullName || "",
    email: initialData?.email || "",
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={classes.modalContent}>
      <div className={classes.container}>
        <h2 className={classes.title}>Edit Profile</h2>
        <p className={classes.subtitle}>Update your profile information</p>

        <div className={classes.form}>
          <div className={classes.field}>
            <Input
              type="text"
              label="Full Name"
              value={formData.fullName}
              onChange={(value) => setFormData({ ...formData, fullName: value })}
              placeholder="Sarah Johnson"
              className={classes.input}
            />
          </div>

          <div className={classes.field}>
            <Input
              type="email"
              label="Email"
              value={formData.email}
              onChange={(value) => setFormData({ ...formData, email: value })}
              placeholder="sarah.johnson@email.com"
              className={classes.input}
            />
          </div>
        </div>

        <div className={classes.actions}>
          <Button
            variant={EButtonVariant.SECONDARY}
            className={classes.cancelButton}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant={EButtonVariant.PRIMARY}
            className={classes.saveButton}
            onClick={onClose}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditProfileModal;
