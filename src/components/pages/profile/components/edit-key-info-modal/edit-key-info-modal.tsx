"use client";

import React, { useState, KeyboardEvent } from "react";
import classes from "./edit-key-info-modal.module.scss";
import { Modal } from "@/components/general/modal";
import Button from "@/components/general/button/button";
import { EButtonVariant } from "@/components/general/button/button.types";
import Input from "@/components/general/input/input";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateKeyInfo } from "@/store/slices/userSlice";

interface EditKeyInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    yearsOfExperience: string;
    specialization: string;
    technologies: string[];
  };
}

const EditKeyInfoModal: React.FC<EditKeyInfoModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const [formData, setFormData] = useState({
    yearsOfExperience: initialData?.yearsOfExperience || "",
    specialization: initialData?.specialization || "",
    technologies: initialData?.technologies || [],
  });
  const [technologyInput, setTechnologyInput] = useState("");

  const handleSave = async () => {
    await dispatch(updateKeyInfo({
      yearsOfExperience: formData.yearsOfExperience.includes("year")
        ? formData.yearsOfExperience
        : `${formData.yearsOfExperience} years`,
      specialization: formData.specialization,
      technologies: formData.technologies,
    }));
    
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={classes.modalContent}>
      <div className={classes.container}>
        <h2 className={classes.title}>Edit Key Information</h2>
        <p className={classes.subtitle}>Update your professional information</p>

        <div className={classes.form}>
          <div className={classes.field}>
            <Input
              type="text"
              label="Years of Experience"
              value={formData.yearsOfExperience}
              onChange={(value) => setFormData({ ...formData, yearsOfExperience: value })}
              placeholder="5"
              className={classes.input}
            />
          </div>

          <div className={classes.field}>
            <label className={classes.label}>Specialization</label>
            <select
              value={formData.specialization}
              onChange={() => {}}
              className={classes.select}
            >
              <option value="">Select specialization</option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="Full Stack Development">Full Stack Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="DevOps">DevOps</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Data Science">Data Science</option>
            </select>
          </div>

          <div className={classes.field}>
            <label className={classes.label}>Technologies</label>
            <input
              type="text"
              value={technologyInput}
              onChange={(e) => setTechnologyInput(e.target.value)}
              placeholder="Type a technology and press Enter"
              className={classes.textInput}
            />
            {formData.technologies.length > 0 && (
              <div className={classes.tags}>
                {formData.technologies.map((tech) => (
                  <div key={tech} className={classes.tag}>
                    <span>{tech}</span>
                    <button
                      type="button"
                      className={classes.removeTag}
                      aria-label={`Remove ${tech}`}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={classes.actions}>
          <Button
            variant={EButtonVariant.SECONDARY}
            className={classes.cancelButton}
            onClick={onClose}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            variant={EButtonVariant.PRIMARY}
            className={classes.saveButton}
            onClick={handleSave}
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditKeyInfoModal;
