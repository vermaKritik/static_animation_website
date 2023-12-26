import React from "react";

interface SVGProps {
  width: number;
  fill: string;
}

const StarSVg: React.FC<SVGProps> = ({ width, fill }) => {
  return (
    <svg
      width={width}
      // height="100"
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.5 0C24.5 13.531 35.4689 24.5 49 24.5C35.4689 24.5 24.5 35.4689 24.5 49C24.5 35.4689 13.531 24.5 0 24.5C13.531 24.5 24.5 13.531 24.5 0Z"
        fill={fill}
      />
    </svg>
  );
};

export default StarSVg;
