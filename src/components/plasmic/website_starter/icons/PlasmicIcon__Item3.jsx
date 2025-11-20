/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Item3Icon(props) {
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
          "M35.45 19.429c-.275-1-.963-1.715-1.925-2C31.875 17 24.863 17 24.863 17s-6.875 0-8.663.429c-.962.285-1.65 1-1.925 2C14 21.286 14 25 14 25s0 3.714.412 5.571c.275 1 .963 1.715 1.925 2C17.987 33 25 33 25 33s6.875 0 8.663-.429c.962-.285 1.65-1 1.925-2C36 28.714 36 25 36 25s0-3.714-.55-5.571m-12.65 9V21.57L28.575 25z"
        }
      ></path>
    </svg>
  );
}

export default Item3Icon;
/* prettier-ignore-end */
