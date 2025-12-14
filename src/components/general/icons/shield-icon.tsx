import React from 'react';

interface ShieldIconProps {
  className?: string;
  size?: number;
}

const ShieldIcon: React.FC<ShieldIconProps> = ({ className, size = 48 }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
    >
      <g>
        <path
          d="M24 44C24 44 40 36 40 24V8L24 4L8 8V24C8 36 24 44 24 44Z"
          stroke="#EF233C"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 24L22 28L30 20"
          stroke="#EF233C"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default ShieldIcon;

