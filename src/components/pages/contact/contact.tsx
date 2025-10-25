import React from "react";
import classes from "./contact.module.scss";

const Contact: React.FC = () => {
  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <h1 className={classes.title}>Contact Us</h1>
        <p className={classes.subtitle}>
          We're here to help you with any questions or concerns you may have.
        </p>
      </div>
    </main>
  );
};

export default Contact;
