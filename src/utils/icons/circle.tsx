import { SVGProps } from "react";

type IconProps = {
  fill?: SVGProps<SVGSVGElement>["fill"];
};

export function IconCircle({ fill = "white" }: IconProps) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_5086_1143)">
        <circle
          cx="11"
          cy="11"
          r="8.111"
          fill={fill}
          stroke={fill}
          stroke-width="5.778"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_5086_1143"
          x="0"
          y="-1"
          width="22"
          height="23"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_5086_1143"
          />
        </filter>
      </defs>
    </svg>
  );
}
