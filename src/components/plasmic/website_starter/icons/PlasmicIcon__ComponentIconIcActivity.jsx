/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ComponentIconIcActivityIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M6.752 0a6.752 6.752 0 1 1 0 13.504A6.752 6.752 0 0 1 6.752 0m0 1.228a5.524 5.524 0 1 0 0 11.048 5.524 5.524 0 0 0 0-11.048M6.75 2.455c.339 0 .614.274.614.613v3.383L9.89 8.415a.614.614 0 1 1-.754.969L6.373 7.235a.62.62 0 0 1-.237-.484V3.068c0-.339.275-.613.614-.613"
        }
      ></path>
    </svg>
  );
}

export default ComponentIconIcActivityIcon;
/* prettier-ignore-end */
