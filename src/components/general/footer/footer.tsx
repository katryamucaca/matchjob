import React from "react";
import Link from "next/link";
import classes from "./footer.module.scss";
import LinkedinIcon from "../icons/linkedin-icon";
import TelegramIcon from "../icons/telegram-icon";

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.companySection}>
            <h3 className={classes.logo}>MatchJob</h3>
            <p className={classes.tagline}>AI-powered job matching platform</p>
            <p className={classes.email}>support@matchjob.ai</p>
          </div>

          <div className={classes.linksSection}>
            <h4 className={classes.sectionTitle}>Quick Links</h4>
            <nav className={classes.navigation}>
              <Link href="/about" className={classes.link}>
                About
              </Link>
              <Link href="/faq" className={classes.link}>
                FAQ
              </Link>
              <Link href="/privacy" className={classes.link}>
                Privacy Policy
              </Link>
              <Link href="/terms" className={classes.link}>
                Terms of Service
              </Link>
            </nav>
          </div>

          <div className={classes.connectSection}>
            <h4 className={classes.sectionTitle}>Connect</h4>
            <div className={classes.socialLinks}>
              <a href="#" className={classes.socialLink} aria-label="LinkedIn">
                <div className={classes.socialIcon}>
                  <LinkedinIcon />
                </div>
              </a>
              <a href="#" className={classes.socialLink} aria-label="Twitter">
                <div className={classes.socialIcon}>
                  <TelegramIcon />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className={classes.copyright}>
          <p>© 2025 MatchJob. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
