"use client";

import React, { useState, useEffect } from "react";
import classes from "./general-header.module.scss";
import cn from "classnames";

interface GeneralHeaderProps {
  left: React.ReactNode;
  middle: React.ReactNode;
  right: React.ReactNode;
  className?: string;
  sidebarContent?: React.ReactNode;
}

const GeneralHeader: React.FC<GeneralHeaderProps> = ({
  left,
  middle,
  right,
  className,
  sidebarContent,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header className={cn(classes.header, className)}>
        <div className={classes.container}>
          <div className={classes.left}>{left}</div>

          <div className={classes.middle}>{middle}</div>

          <div className={classes.right}>{right}</div>

          <button
            className={cn(classes.hamburger, { [classes.open]: isSidebarOpen })}
            onClick={toggleSidebar}
            aria-expanded={isSidebarOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {isSidebarOpen && <div className={classes.overlay} onClick={closeSidebar} />}

      <div className={cn(classes.sidebar, { [classes.sidebarOpen]: isSidebarOpen })}>
        <div className={classes.sidebarContent} onClick={closeSidebar}>
          {sidebarContent}
        </div>
      </div>
    </>
  );
};

export default GeneralHeader;
