/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ItemIcon(props) {
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
        fillRule={"evenodd"}
        d={
          "M31 17H19c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h6v-5.5h-2V25h2v-2a3 3 0 0 1 3-3h2v2.5h-1c-.552 0-1-.052-1 .5v2h2.5l-1 2.5H28V33h3c1.103 0 2-.897 2-2V19c0-1.103-.897-2-2-2"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default ItemIcon;
/* prettier-ignore-end */
