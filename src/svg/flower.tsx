import React from "react";

interface SVGProps {
  width?: number | string;
  fill?: string;
  classNames?: string;
}

const FlowerSvg: React.FC<SVGProps> = ({ width, fill, classNames }) => {
  return (
    <svg
      width={width}
      className={classNames}
      // height="560"
      viewBox="0 0 499 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="212.695"
        width="65.138"
        height="232.636"
        // className="fill-white"
        fill={fill}
      />
      <rect
        x="396.019"
        y="508.407"
        width="65.138"
        height="232.636"
        transform="rotate(152.657 396.019 508.407)"
        fill={fill}
      />
      <rect
        x="133.261"
        y="523.442"
        width="65.138"
        height="232.636"
        transform="rotate(-147.324 133.261 523.442)"
        fill={fill}
      />
      <rect
        x="86.4075"
        y="49.8501"
        width="65.138"
        height="232.636"
        transform="rotate(-30 86.4075 49.8501)"
        fill={fill}
      />
      <rect
        x="490.231"
        y="384.755"
        width="65.138"
        height="232.636"
        transform="rotate(122.657 490.231 384.755)"
        fill={fill}
      />
      <rect
        x="259.152"
        y="559.783"
        width="65.138"
        height="232.636"
        transform="rotate(-177.324 259.152 559.783)"
        fill={fill}
      />
      <rect
        x="5.31738"
        y="173.395"
        width="65.138"
        height="232.636"
        transform="rotate(-60 5.31738 173.395)"
        fill={fill}
      />
      <rect
        x="498.616"
        y="243.422"
        width="65.138"
        height="232.636"
        transform="rotate(92.6574 498.616 243.422)"
        fill={fill}
      />
      <rect
        y="311.068"
        width="65.138"
        height="232.636"
        transform="rotate(-90 0 311.068)"
        fill={fill}
      />
      <rect
        x="459.221"
        y="109.006"
        width="65.138"
        height="232.636"
        transform="rotate(62.6574 459.221 109.006)"
        fill={fill}
      />
      <rect
        x="44.5332"
        y="427.964"
        width="65.138"
        height="232.636"
        transform="rotate(-120 44.5332 427.964)"
        fill={fill}
      />
      <rect
        x="348.864"
        y="19.9404"
        width="65.138"
        height="232.636"
        transform="rotate(32.6574 348.864 19.9404)"
        fill={fill}
      />
      <rect
        x="194.085"
        y="180.79"
        width="98.3717"
        height="148.887"
        fill={fill}
      />
    </svg>
  );
};

export default FlowerSvg;
