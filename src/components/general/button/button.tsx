import React from "react";
import classes from "./button.module.scss";
import { EButtonVariant } from "./button.types";
import cn from "classnames";

interface IButtonProps {
  variant: EButtonVariant;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({ variant, children, className, onClick }) => {
  return (
    <button
      className={cn(classes.button, className, {
        [classes.primary]: variant === EButtonVariant.PRIMARY,
        [classes.secondary]: variant === EButtonVariant.SECONDARY,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
