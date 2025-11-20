/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Line11Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 179 7"}
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
          strokeWidth={".377"}
          d={"M3.207 3.207h172.467"}
        ></path>
      </g>

      <defs>
        <filter
          id={"a"}
          width={"178.881"}
          height={"6.414"}
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
            result={"effect1_foregroundBlur_3147_2018"}
            stdDeviation={"1.509"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Line11Icon;
/* prettier-ignore-end */
