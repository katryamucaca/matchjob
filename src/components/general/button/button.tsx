import React from "react";
import classes from "./button.module.scss";
import { EButtonVariant } from "./button.types";
import cn from "classnames";

interface IButtonProps {
  variant: EButtonVariant;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({ variant, children, className, disabled, onClick }) => {
  return (
    <button
      className={cn(classes.buttonContainer, className, {
        [classes.primary]: variant === EButtonVariant.PRIMARY,
        [classes.secondary]: variant === EButtonVariant.SECONDARY,
        [classes.disabled]: disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
