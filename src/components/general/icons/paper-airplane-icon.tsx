import React from "react";

interface PaperAirplaneIconProps {
  className?: string;
  size?: number;
}

const PaperAirplaneIcon: React.FC<PaperAirplaneIconProps> = ({
  className,
  size = 24,
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 2L11 13" />
      <path d="M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  );
};

export default PaperAirplaneIcon;

