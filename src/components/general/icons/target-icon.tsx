import React from 'react';

interface TargetIconProps {
  className?: string;
}

const TargetIcon: React.FC<TargetIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <g>
        <path
          d="M20 36.6667C29.2047 36.6667 36.6667 29.2047 36.6667 20C36.6667 10.7953 29.2047 3.33333 20 3.33333C10.7953 3.33333 3.33333 10.7953 3.33333 20C3.33333 29.2047 10.7953 36.6667 20 36.6667Z"
          stroke="#EF233C"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30Z"
          stroke="#EF233C"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 23.3333C21.8409 23.3333 23.3333 21.8409 23.3333 20C23.3333 18.1591 21.8409 16.6667 20 16.6667C18.1591 16.6667 16.6667 18.1591 16.6667 20C16.6667 21.8409 18.1591 23.3333 20 23.3333Z"
          stroke="#EF233C"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default TargetIcon;

