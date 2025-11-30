import React from "react";

interface IInfoIconProps {
  className?: string;
}

const InfoIcon: React.FC<IInfoIconProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
      <path d="M12 17V11" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <circle cx="12" cy="8" r="1.1" fill="currentColor" />
    </svg>
  );
};

export default InfoIcon;
