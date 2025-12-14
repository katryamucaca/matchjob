import React from "react";
import Link from "next/link";
import classes from "./contact.module.scss";
import EmailIcon from "@/components/general/icons/email-icon";
import PaperAirplaneIcon from "@/components/general/icons/paper-airplane-icon";

const Contact: React.FC = () => {
  return (
    <main className={classes.contact}>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1 className={classes.title}>Get in Touch</h1>
          <p className={classes.description}>
            Have a question or need assistance? We're here to help! Reach out to
            us using the form below or send us an email directly.
          </p>
        </div>

        <div className={classes.cardsGrid}>
          <div className={classes.card}>
            <div className={classes.iconWrapper}>
              <EmailIcon className={classes.icon} size={32} />
            </div>
            <h3 className={classes.cardTitle}>Email Us Directly</h3>
            <p className={classes.cardDescription}>
              Prefer to send us an email? You can reach us at:
            </p>
            <a
              href="mailto:support@matchjob.ai"
              className={classes.emailLink}
            >
              support@matchjob.ai
            </a>
            <p className={classes.responseTime}>
              We typically respond within 24 hours
            </p>
          </div>

          <div className={classes.card}>
            <div className={classes.iconWrapper}>
              <PaperAirplaneIcon className={classes.icon} size={32} />
            </div>
            <h3 className={classes.cardTitle}>Quick Questions?</h3>
            <p className={classes.cardDescription}>
              Check out our FAQ page for instant answers to common questions.
            </p>
            <Link href="/faq" className={classes.faqLink}>
              View FAQ →
            </Link>
          </div>
        </div>

        <div className={classes.responseSection}>
          <h3 className={classes.responseTitle}>Response Time</h3>
          <p className={classes.responseText}>Email: Within 24 hours</p>
        </div>
      </div>
    </main>
  );
};

export default Contact;

