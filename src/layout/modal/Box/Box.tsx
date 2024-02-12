import { FC, HTMLAttributes, useState } from "react";
import { Button, Line, LineButtons, ModalPanel, Text, Textarea } from "components";

import { backPage, nextPage, useParams } from "elum-router/react";

import { Goods, Improve } from "engine/state/atoms";
import executeBox, { ItemList } from "handlers/executeBox";

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
  SuperSnowball
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

import style from "./Box.module.css";
import { toShort } from "engine";

interface Box extends HTMLAttributes<HTMLDivElement> {
  nav: string
};

const Box: FC<Box> = () => {

  const params = useParams<{ list: ItemList }>();

  const handlerClose = () => backPage();

  return (
    <ModalPanel
      onClick={handlerClose}
      mode={"card"}
    // color={"#007edc"}
    >

      <div className={style.Box}>

        <div className={style.Box__icon}>
          <Present />
        </div>

        <div className={style.Box__title}>
          Награда из бокса
        </div>

        <div className={style.Box__list}>
          {params.list && params.list.length > 0 && params.list.map((item) => (
            <div className={style.Box__padding}>
              <div className={style.Box__item}>
                <div className={style.Box__itemIcon}>
                  {images[item.type]}
                </div>
                <div className={style.Box__price}>
                  {toShort(item.count)}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* <LineButtons>

        <Button
          streched
          mode={"outline"}
          size={"s"}
          onClick={handlerClose}
        >
          Назад
        </Button>

        <Button
          streched
          mode={"accent"}
          size={"s"}
        >
          Купить
        </Button>

      </LineButtons> */}
    </ModalPanel>
  )
}

export default Box;
