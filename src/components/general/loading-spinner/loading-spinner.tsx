import React, { useEffect } from "react";
import classes from "./loading-spinner.module.scss";

import cn from "classnames";

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  fullScreen?: boolean;
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "medium",
  fullScreen = false,
  message,
}) => {
  // prevent scroll while loading
  useEffect(() => {
    if (fullScreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [fullScreen]);

  const spinnerContent = (
    <div className={classes.spinnerContainer}>
      <div className={cn(classes.spinner, classes[size])}></div>
      {message && <p className={classes.message}>{message}</p>}
    </div>
  );

  if (fullScreen) {
    return <div className={classes.fullScreen}>{spinnerContent}</div>;
  }

  return spinnerContent;
};

export default LoadingSpinner;
