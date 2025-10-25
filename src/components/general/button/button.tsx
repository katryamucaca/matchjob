import React from "react";
import classes from "./button.module.scss";

interface IButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({ children }) => {
  return <button className={classes.button}>{children}</button>;
};

export default Button;
