import React from "react";
import classes from "./page-content.module.scss";

interface IPageContentProps {
  children: React.ReactNode;
}

const PageContent: React.FC<IPageContentProps> = ({ children }) => {
  return <div className={classes.pageContent}>{children}</div>;
};

export default PageContent;
