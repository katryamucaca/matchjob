"use client";

import React from "react";
import classes from "./textarea.module.scss";
import cn from "classnames";

interface TextareaProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  rows?: number;
  className?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  placeholder,
  value,
  onChange,
  required = false,
  rows = 5,
  className,
}) => {
  return (
    <div className={cn(classes.textareaGroup, className)}>
      <label className={classes.label}>{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className={classes.textarea}
      />
    </div>
  );
};

export default Textarea;

