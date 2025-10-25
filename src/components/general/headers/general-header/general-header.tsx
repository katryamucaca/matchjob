"use client";

import React from "react";
import classes from "./general-header.module.scss";
import cn from "classnames";

interface GeneralHeaderProps {
  left: React.ReactNode;
  middle: React.ReactNode;
  right: React.ReactNode;
  className?: string;
}

const GeneralHeader: React.FC<GeneralHeaderProps> = ({
  left,
  middle,
  right,
  className,
}) => {
  return (
    <header className={cn(classes.header, className)}>
      <div className={classes.container}>
        <div className={classes.left}>{left}</div>
        <div className={classes.middle}>{middle}</div>
        <div className={classes.right}>{right}</div>
      </div>
    </header>
  );
};

export default GeneralHeader;
