import { FC, HTMLAttributes } from "react";

import style from "./RatingSubTab.module.css";
import { classes } from "engine";

interface RatingSubTab extends HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
};

const RatingSubTab: FC<RatingSubTab> = ({
  selected = false,
  children,
  ...others
}) => {
  return (
    <div
      {...others}
      className={classes(style.RatingSubTab, {
        [style["RatingSubTab--active"]]: selected
      })}>
      <div className={style.RatingSubTab__inner}>
        {/* <div className={style.RatingSubTab__indicator}><span /></div> */}
        <div className={style.RatingSubTab__title}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default RatingSubTab;
