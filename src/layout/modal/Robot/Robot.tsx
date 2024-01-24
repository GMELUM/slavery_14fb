import { FC, HTMLAttributes } from "react";
import { ModalPanel } from "components";

import { backPage, useParams } from "elum-router/react";

import {
  Heart16,
  Robot as RobotIcon
} from "source";

const images = {
  "heart": <Heart16 />
} as Record<string, JSX.Element>;

import style from "./Robot.module.css";
import { toShort } from "engine";

interface Robot extends HTMLAttributes<HTMLDivElement> {
  nav: string
};

const Robot: FC<Robot> = () => {

  const params = useParams<{ count: number }>();

  const handlerClose = () => backPage();

  return (
    <ModalPanel
      onClick={handlerClose}
      mode={"card"}
    >

      <div className={style.Robot}>

        <div className={style.Robot__icon}>
          <RobotIcon />
        </div>

        <div className={style.Robot__title}>
          Робот принес сердца
        </div>

        <div className={style.Robot__description}>
          Вы получаете доход пока отсутствуете в игре
        </div>

        <div className={style.Robot__list}>

          <div className={style.Robot__padding}>
            <div className={style.Robot__item}>
              <div className={style.Robot__itemIcon}>
                {images["heart"]}
              </div>
              <div className={style.Robot__price}>
                {toShort(params.count)}
              </div>
            </div>
          </div>

        </div>

      </div>
    </ModalPanel>
  )
}

export default Robot;
