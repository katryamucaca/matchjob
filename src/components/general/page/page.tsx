import React from "react";
import classes from "./page.module.scss";

interface IPageProps {
  children: React.ReactNode;
}

const Page: React.FC<IPageProps> = ({ children }) => {
  return <div className={classes.page}>{children}</div>;
};

export default Page;
