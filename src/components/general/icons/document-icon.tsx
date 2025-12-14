import React from "react";

interface IDocumentIconProps {
  className?: string;
}

const DocumentIcon: React.FC<IDocumentIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="68"
      height="68"
      viewBox="0 0 68 68"
      fill="none"
      className={className}
    >
      <path
        d="M42.0386 5.60513H16.8154C15.3288 5.60513 13.9031 6.19567 12.852 7.24684C11.8008 8.29801 11.2103 9.7237 11.2103 11.2103V56.0515C11.2103 57.538 11.8008 58.9637 12.852 60.0149C13.9031 61.0661 15.3288 61.6566 16.8154 61.6566H50.4463C51.9329 61.6566 53.3586 61.0661 54.4097 60.0149C55.4609 58.9637 56.0515 57.538 56.0515 56.0515V19.618L42.0386 5.60513Z"
        stroke="#EF233C"
        stroke-width="5.60515"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M39.236 5.60513V16.8154C39.236 18.302 39.8266 19.7277 40.8777 20.7789C41.9289 21.83 43.3546 22.4206 44.8412 22.4206H56.0515"
        stroke="#EF233C"
        stroke-width="5.60515"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M28.0257 25.2232H22.4206"
        stroke="#EF233C"
        stroke-width="5.60515"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M44.8412 36.4335H22.4206"
        stroke="#EF233C"
        stroke-width="5.60515"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M44.8412 47.6438H22.4206"
        stroke="#EF233C"
        stroke-width="5.60515"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default DocumentIcon;
