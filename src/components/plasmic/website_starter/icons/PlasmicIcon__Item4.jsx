/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Item4Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 50 50"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeOpacity={".125"}
        d={"M49.5.5v49H.5V.5z"}
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M26.617 26.378 32.946 34h-1.5l-5.495-6.618L21.562 34H16.5l6.637-10.007L16.5 16H18l5.803 6.989L28.438 16H33.5zm-2.054-2.474-.672.997-5.35 7.93h2.303l4.318-6.4.672-.997 5.613-8.318h-2.304z"
        }
      ></path>
    </svg>
  );
}

export default Item4Icon;
/* prettier-ignore-end */
