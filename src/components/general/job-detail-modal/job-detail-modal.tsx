"use client";

import React from "react";
import classes from "./job-detail-modal.module.scss";
import { Modal } from "@/components/general/modal";
import Button from "@/components/general/button/button";
import { EButtonVariant } from "@/components/general/button/button.types";
import Badge from "@/components/general/badge/badge";
import CompanyIcon from "@/components/general/icons/company-icon";
import { EBadgeVariant } from "@/components/general/badge/badge";

export interface JobDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: {
    title: string;
    company: string;
    location: string;
    matchPercentage: number;
    employmentType: string;
    salaryRange: string;
    postedDate: string;
    about: string;
    requirements: string[];
    externalUrl?: string;
  };
}

const JobDetailModal: React.FC<JobDetailModalProps> = ({ isOpen, onClose, job }) => {
  const handleViewFullPosting = () => {
    if (job.externalUrl) {
      window.open(job.externalUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={classes.modalContent}>
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.headerTop}>
            <h2 className={classes.title}>{job.title}</h2>
            <Badge variant={EBadgeVariant.SUCCESS} className={classes.matchBadge}>
              {job.matchPercentage}% Match
            </Badge>
          </div>
          <div className={classes.companyInfo}>
            <div className={classes.companyItem}>
              <CompanyIcon size={20} className={classes.icon} />
              <span>{job.company}</span>
            </div>
            <div className={classes.locationItem}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={classes.icon}
              >
                <path
                  d="M10 10.625C11.3807 10.625 12.5 9.50571 12.5 8.125C12.5 6.74429 11.3807 5.625 10 5.625C8.61929 5.625 7.5 6.74429 7.5 8.125C7.5 9.50571 8.61929 10.625 10 10.625Z"
                  stroke="#8D99AE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 1.875C8.17727 1.875 6.42951 2.59933 5.14752 3.88132C3.86552 5.16332 3.14119 6.91108 3.14119 8.73381C3.14119 10.1036 3.48494 10.9786 4.37494 12.1875L10 18.125L15.625 12.1875C16.515 10.9786 16.8587 10.1036 16.8587 8.73381C16.8587 6.91108 16.1344 5.16332 14.8524 3.88132C13.5704 2.59933 11.8227 1.875 10 1.875Z"
                  stroke="#8D99AE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{job.location}</span>
            </div>
          </div>
        </div>

        <div className={classes.metaInfo}>
          <div className={classes.metaItem}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={classes.icon}
            >
              <path
                d="M15.8333 3.33331H4.16667C3.24619 3.33331 2.5 4.0795 2.5 4.99998V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.99998C17.5 4.0795 16.7538 3.33331 15.8333 3.33331Z"
                stroke="#8D99AE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.3333 2.5V4.16667"
                stroke="#8D99AE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.66669 2.5V4.16667"
                stroke="#8D99AE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 7.5H17.5"
                stroke="#8D99AE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{job.employmentType}</span>
          </div>
          <div className={classes.metaItem}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={classes.icon}
            >
              <path
                d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6024 1.66666 10 1.66666C5.39765 1.66666 1.66669 5.39763 1.66669 10C1.66669 14.6024 5.39765 18.3333 10 18.3333Z"
                stroke="#8D99AE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 5V10L13.3333 11.6667"
                stroke="#8D99AE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{job.salaryRange}</span>
          </div>
          <div className={classes.metaItem}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={classes.icon}
            >
              <path
                d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6024 1.66666 10 1.66666C5.39765 1.66666 1.66669 5.39763 1.66669 10C1.66669 14.6024 5.39765 18.3333 10 18.3333Z"
                stroke="#8D99AE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 5V10L13.3333 11.6667"
                stroke="#8D99AE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{job.postedDate}</span>
          </div>
        </div>

        <div className={classes.section}>
          <h3 className={classes.sectionTitle}>About the Role</h3>
          <p className={classes.sectionText}>{job.about}</p>
        </div>

        <div className={classes.section}>
          <h3 className={classes.sectionTitle}>Requirements</h3>
          <ul className={classes.requirementsList}>
            {job.requirements.map((requirement, index) => (
              <li key={index} className={classes.requirementItem}>
                {requirement}
              </li>
            ))}
          </ul>
        </div>

        <div className={classes.actions}>
          <Button
            variant={EButtonVariant.PRIMARY}
            className={classes.primaryButton}
            onClick={handleViewFullPosting}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 2.5H17.5V7.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.33331 11.6667L17.5 2.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>View Full Posting</span>
          </Button>
          <Button
            variant={EButtonVariant.SECONDARY}
            className={classes.secondaryButton}
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default JobDetailModal;
