import { FC, HTMLAttributes, useEffect, useState } from "react";

import { classes } from "engine";

import style from "./Present.module.css";
import { Valentines3 } from "source";
import { Events } from "components";

interface Present extends HTMLAttributes<HTMLDivElement> {
  active?: boolean
};

const Present: FC<Present> = ({
  active,
  ...others
}) => {
  return (
    <Events className={classes(style.Present, {
      [style["Present--active"]]: !!active
    })} {...others}>
      <div className={style.Present__inner}>
        <Valentines3 />
      </div>
    </Events>
  )

}

export default Present;
