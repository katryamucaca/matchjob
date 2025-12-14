import React from 'react';

interface HeartIconProps {
  className?: string;
  size?: number;
}

const HeartIcon: React.FC<HeartIconProps> = ({ className, size = 48 }) => {
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
          d="M41.5 13.5C41.5 11.7761 40.8152 10.1228 39.5962 8.90381C38.3772 7.68482 36.7239 7 35 7C32 7 29.5 8.5 26.5 11.5L24 14L21.5 11.5C18.5 8.5 16 7 13 7C11.2761 7 9.62279 7.68482 8.40381 8.90381C7.18482 10.1228 6.5 11.7761 6.5 13.5C6.5 15.2239 7.18482 16.8772 8.40381 18.0962C9.62279 19.3152 11.2761 20 13 20L15.5 22.5L24 41L32.5 22.5L35 20C36.7239 20 38.3772 19.3152 39.5962 18.0962C40.8152 16.8772 41.5 15.2239 41.5 13.5Z"
          stroke="#EF233C"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default HeartIcon;

