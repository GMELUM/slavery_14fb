import { FC, HTMLAttributes, useState } from "react";
import { ModalPanel } from "components";

import { backPage, useParams } from "elum-router/react";

import { toShort } from "engine";
import { ItemList } from "handlers/executeBox";

import {
  Smile1,
  Smile2,
  Frame,
  Robot,
  ManyEnergy,
  Present,
  Kiss,
  Coins,
  Heart16,
  Snowball,
  SuperSnowball,
  Valentines3
} from "source";

const images = {
  "snowball": <Snowball />,
  "super_snowball": <SuperSnowball />,
  "heart": <Heart16 />,
  "coin": <Coins />,
  "kiss": <Kiss />,
  "smile_1": <Smile1 />,
  "smile_2": <Smile2 />,
  "frame": <Frame />,
  "auto_mining": <Robot />,
  "energy": <ManyEnergy />
} as Record<string, JSX.Element>;

import style from "./Presents.module.css";


interface Presents extends HTMLAttributes<HTMLDivElement> {
  nav: string
};

const Presents: FC<Presents> = () => {

  const params = useParams<{ list: ItemList }>();

  const handlerClose = () => backPage();

  return (
    <ModalPanel
      onClick={handlerClose}
      mode={"card"}
    >

      <div className={style.Presents}>

        <div className={style.Presents__icon}>
          <Valentines3 />
        </div>

        <div className={style.Presents__title}>
          Вы получили подарки из валентинок
        </div>

        <div className={style.Presents__list}>
          {params.list && params.list.length > 0 && params.list.map((item) => (
            <div className={style.Presents__padding}>
              <div className={style.Presents__item}>
                <div className={style.Presents__itemIcon}>
                  {images[item.type]}
                </div>
                <div className={style.Presents__price}>
                  {toShort(item.count)}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      
    </ModalPanel>
  )
}

export default Presents;
