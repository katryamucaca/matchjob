import React from "react";
import classes from "./page-content.module.scss";

import cn from "classnames";

interface IPageContentProps {
  children: React.ReactNode;
  className?: string;
}

const PageContent: React.FC<IPageContentProps> = ({ children, className }) => {
  return <div className={cn(classes.pageContent, className)}>{children}</div>;
};

export default PageContent;
