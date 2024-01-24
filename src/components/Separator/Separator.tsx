import { FC, HTMLAttributes } from "react";
import { classes } from "engine";

import styles from "./Separator.module.css";

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
  style,
  ...others
}) => {

  return (
    <div
      {...others}
      className={classes(styles.Separator, {
        [styles["Separator--size-x"]]: size === "x",
        [styles["Separator--size-l"]]: size === "l",
        [styles["Separator--size-m"]]: size === "m"
      })}
      style={{
        "padding": `${top} ${right} ${bottom} ${left}`,
      }}
    >
      <span style={style} />
    </div>
  )

}

export default Separator;
