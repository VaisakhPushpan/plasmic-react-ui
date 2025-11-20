/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Line12Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 150 6"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#a)"}>
        <path
          stroke={"currentColor"}
          strokeLinecap={"round"}
          strokeWidth={".315"}
          d={"M2.682 2.682H146.89"}
        ></path>
      </g>

      <defs>
        <filter
          id={"a"}
          width={"149.572"}
          height={"5.363"}
          x={"0"}
          y={"0"}
          colorInterpolationFilters={"sRGB"}
          filterUnits={"userSpaceOnUse"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feGaussianBlur
            result={"effect1_foregroundBlur_3147_2023"}
            stdDeviation={"1.262"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Line12Icon;
/* prettier-ignore-end */
