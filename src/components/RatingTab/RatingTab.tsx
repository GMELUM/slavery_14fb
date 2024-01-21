import { FC, HTMLAttributes } from "react";

import style from "./RatingTab.module.css";
import { classes } from "engine";

interface RatingTab extends HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
};

const RatingTab: FC<RatingTab> = ({
  selected = false,
  children,
  ...others
}) => {
  return (
    <div
      {...others}
      className={classes(style.RatingTab, {
        [style["RatingTab--active"]]: selected
      })}>
      <div className={style.RatingTab__inner}>
        <div className={style.RatingTab__indicator}><span /></div>
        <div className={style.RatingTab__title}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default RatingTab;
