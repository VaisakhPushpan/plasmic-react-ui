/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ComponentIconIcFileIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M2.455 0h5.85c.365 0 .71.162.944.442l2.742 3.29c.184.221.285.5.285.787v6.53c0 1.355-1.1 2.454-2.455 2.454H2.455A2.455 2.455 0 0 1 0 11.048V2.455C0 1.1 1.1 0 2.455 0m8.594 11.048V4.91H9.208c-.678 0-1.228-.55-1.228-1.227V1.228H2.456c-.678 0-1.227.55-1.227 1.227v8.593c0 .678.55 1.228 1.227 1.228h7.366c.678 0 1.227-.55 1.227-1.228m-.696-7.365L9.208 2.309v1.374zM3.684 7.979a.614.614 0 0 1 0-1.227h4.91a.614.614 0 1 1 0 1.227zm0 2.455a.614.614 0 0 1 0-1.227h3.683a.614.614 0 0 1 0 1.227zm0-4.91a.614.614 0 0 1 0-1.227h1.841a.614.614 0 0 1 0 1.227z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default ComponentIconIcFileIcon;
/* prettier-ignore-end */
