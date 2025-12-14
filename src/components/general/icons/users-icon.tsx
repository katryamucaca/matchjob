import React from 'react';

interface UsersIconProps {
  className?: string;
  size?: number;
}

const UsersIcon: React.FC<UsersIconProps> = ({ className, size = 48 }) => {
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
          d="M34 40V36C34 33.8783 33.1571 31.8434 31.6569 30.3431C30.1566 28.8429 28.1217 28 26 28H10C7.87827 28 5.84344 28.8429 4.34315 30.3431C2.84286 31.8434 2 33.8783 2 36V40"
          stroke="#EF233C"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 20C22.4183 20 26 16.4183 26 12C26 7.58172 22.4183 4 18 4C13.5817 4 10 7.58172 10 12C10 16.4183 13.5817 20 18 20Z"
          stroke="#EF233C"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M46 40V36C45.9987 34.2275 45.4087 32.5058 44.3203 31.1056C43.2319 29.7054 41.7082 28.7076 40 28.26"
          stroke="#EF233C"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 4.26001C33.7119 4.70556 35.2391 5.70367 36.3301 7.10512C37.4211 8.50657 38.0122 10.2296 38.0122 12.005C38.0122 13.7804 37.4211 15.5035 36.3301 16.9049C35.2391 18.3064 33.7119 19.3045 32 19.75"
          stroke="#EF233C"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default UsersIcon;

