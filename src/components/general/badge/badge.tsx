import React from "react";
import classes from "./badge.module.scss";
import cn from "classnames";

export enum EBadgeVariant {
  PERCENTAGE = "percentage",
  NUMBER = "number",
  SUCCESS = "success",
}

interface IBadgeProps {
  variant?: EBadgeVariant;
  value?: string | number;
  className?: string;
  children?: React.ReactNode;
}

const Badge: React.FC<IBadgeProps> = ({ variant = "success", value, className, children }) => {
  return (
    <div
      className={cn(classes.badge, className, {
        [classes.percentage]: variant === EBadgeVariant.PERCENTAGE,
        [classes.number]: variant === EBadgeVariant.NUMBER,
        [classes.success]: variant === EBadgeVariant.SUCCESS,
      })}
    >
      {children || value}
    </div>
  );
};

export default Badge;

