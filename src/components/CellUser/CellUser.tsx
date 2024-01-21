import { FC, HTMLAttributes } from "react";
import { classes } from "engine";
import { Heart16 } from "source";

import Events from "../Events/Events";

import style from "./CellUser.module.css";

interface CellUser extends HTMLAttributes<HTMLDivElement> {
  link: string;
  position: number | string;
  image: string;
  first_name: string;
  last_name: string;
  count: number | string;
  fixed?: boolean;
  type?: "coins" | "dribble" | "flower";
};

const CellUser: FC<CellUser> = ({
  link,
  position,
  image,
  first_name,
  last_name,
  count,
  fixed = false,
  type = "dribble"
}) => {
  return (
    <Events
      type={"a"}
      href={link}
      target={"_blank"}
      className={classes(style.CellUser, {
        [style["CellUser__fixed"]]: fixed,
        [style["CellUser--gold"]]: position == 1,
        [style["CellUser--silver"]]: position == 2,
        [style["CellUser--bronse"]]: position == 3
      })}
    >

      <div className={style.CellUser__inner}>

        <div className={style.CellUser__position}>
          <span>{position}</span>
        </div>

        <div className={style.CellUser__avatar}>
          <img src={image} />
        </div>

        <div className={style.CellUser__name}>
          <span>{first_name}</span>
          <span>{last_name}</span>
        </div>

        <div className={style.CellUser__counter}>
          <span>{count}</span>
          <div className={style.CellUser__icon}>
            <Heart16 />
          </div>
        </div>

      </div>

    </Events>
  )
}

export default CellUser;
