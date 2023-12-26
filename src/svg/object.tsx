interface SVGProps {
  width: number;
  fill: string;
}

const ObjectSvg: React.FC<SVGProps> = ({ width, fill }) => {
  return (
    <svg
      width={width}
      // height="81"
      viewBox="0 0 153 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="2"
        width="149"
        height="77"
        rx="38.5"
        stroke={fill}
        strokeWidth="4"
      />
      <path
        d="M51.7678 42.7678C52.7441 41.7915 52.7441 40.2085 51.7678 39.2322L35.8579 23.3223C34.8816 22.346 33.2986 22.346 32.3223 23.3223C31.346 24.2986 31.346 25.8816 32.3223 26.8579L46.4645 41L32.3223 55.1421C31.346 56.1184 31.346 57.7014 32.3223 58.6777C33.2986 59.654 34.8816 59.654 35.8579 58.6777L51.7678 42.7678ZM21 43.5L50 43.5L50 38.5L21 38.5L21 43.5Z"
        fill={fill}
      />
      <path
        d="M129 40.5C129 51.1016 120.215 60 109 60C97.785 60 89 51.1016 89 40.5C89 29.8984 97.785 21 109 21C120.215 21 129 29.8984 129 40.5Z"
        stroke={fill}
        strokeWidth="22"
      />
    </svg>
  );
};

export default ObjectSvg;
