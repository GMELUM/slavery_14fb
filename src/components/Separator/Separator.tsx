import { FC, HTMLAttributes } from "react";
import { classes } from "engine";

import style from "./Separator.module.css";

interface Separator extends HTMLAttributes<HTMLDivElement> {
  size?: "x" | "l" | "m";
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

const Separator: FC<Separator> = ({
  size = "x",
  top = "2px",
  right = "0",
  bottom = "2px",
  left = "0",
  ...others
}) => {

  return (
    <div
      className={classes(style.Separator, {
        [style["Separator--size-x"]]: size === "x",
        [style["Separator--size-l"]]: size === "l",
        [style["Separator--size-m"]]: size === "m"
      })}
      style={{
        "padding": `${top} ${right} ${bottom} ${left}`
      }}>
      <span />
    </div>
  )

}

export default Separator;
