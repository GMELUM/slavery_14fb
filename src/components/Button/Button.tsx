import { FC, HTMLAttributes, ReactNode, MouseEventHandler } from "react";
import Events from "../Events/Events";
import { classes } from "engine";

import style from "./Button.module.css";

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  size?: "x" | "l" | "s" | "ss" | "circle";
  type?: "default" | "";
  mode?:
  "default" |
  "outline" |
  "accent" |
  "positive" |
  "blur" |
  "blue_gradient" |
  "green_gradient" |
  "yellow_gradient"
  ;
  streched?: boolean;
  after?: ReactNode;
  before?: ReactNode;
  disabled?: boolean;
  badge?: string;
  color?: string;
};

const Button: FC<IButton> = ({
  size = "x",
  type = "default",
  mode = "default",
  streched = false,
  after,
  before,
  children,
  disabled = false,
  badge,
  onClick,
  className,
  color,
  ...prevProps
}) => {

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    // event.preventDefault();
    onClick && onClick(event);
  }

  return (
    <Events
      {...prevProps}
      disabled={disabled}
      style={{ backgroundColor: color }}
      className={classes(style.Button, {

        [style[`Button__size--x`]]: size === "x",
        [style[`Button__size--l`]]: size === "l",
        [style[`Button__size--s`]]: size === "s",
        [style[`Button__size--ss`]]: size === "ss",
        [style[`Button__size--circle`]]: size === "circle",

        [style[`Button__type--${type}`]]: true,
        [style[`Button__mode--${mode}`]]: true,
        [style["Button--streched"]]: streched,
        [`${className}`]: !!className,

      })}
      type={"button"}
      onClick={handleClick}
    >
      {badge && <div className={style.Item__badge}><span>{badge}</span></div>}
      <div className={style.Button__inner}>

        <div className={style.Button__before}>{before}</div>
        <div className={style.Button__children}>{children}</div>
        <div className={style.Button__after}>{after}</div>
      </div>
    </Events>
  )

}

export default Button;