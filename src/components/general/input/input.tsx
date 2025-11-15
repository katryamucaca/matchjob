"use client";

import React from "react";
import classes from "./input.module.scss";
import cn from "classnames";

interface InputProps {
  type?: "text" | "email" | "password";
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  required = false,
  className,
}) => {
  return (
    <div className={cn(classes.inputGroup, className)}>
      <label className={classes.label}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className={classes.input}
      />
    </div>
  );
};

export default Input;
