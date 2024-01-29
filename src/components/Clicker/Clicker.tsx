import { FC, HTMLAttributes, MouseEventHandler, useState } from "react";
import { AnimationLevel, AspectRation, Events, Spinner } from "components";

import style from "./Clicker.module.css";
import {
  Heart1,
  Heart2,
  Heart3,
  Heart4,
  Heart5,
  Heart6,
  Heart7,
  Heart8,
  Heart9,
  Heart10,
  Heart11,
  Heart12,
  Heart13,
  Heart14,
  Heart15,
  Heart16,
  Heart17,
  Heart18
} from "source";

interface Clicker extends HTMLAttributes<HTMLDivElement> {
  level: number;
  active: boolean;
};

const Clicker: FC<Clicker> = ({
  level,
  active,
  onClick,
  ...others
}) => {

  const [index, setIndex] = useState(1);

  const icons = [
    <Heart1 />,
    <Heart2 />,
    <Heart3 />,
    <Heart4 />,
    <Heart5 />,
    <Heart6 />,
    <Heart7 />,
    <Heart8 />,
    <Heart9 />,
    <Heart10 />,
    <Heart11 />,
    <Heart12 />,
    <Heart13 />,
    <Heart14 />,
    <Heart15 />,
    <Heart16 />,
    <Heart17 />,
    <Heart18 />,
  ]

  function rand(min: number, max: number, oldIndex: number) {
    while (true) {
      const index = Math.floor(Math.random() * (max - min + 1) + min);
      if (index != oldIndex) {
        return index;
      }
    }
  }

  const handlerClick: MouseEventHandler<HTMLDivElement> = (event) => {
    setIndex(rand(1, 17, index))
    if (active && onClick) {
      onClick(event)
    }
  }

  return (
    <Events className={style.Clicker} onClick={handlerClick} {...others}>
      <div className={style.Clicker__inner}>
        <AspectRation width={1} height={1} style={{ position: "relative" }}>

          <div className={style.Clicker__effect}>
            <AnimationLevel level={active ? level : 0} />
          </div>

          <div className={style.Clicker__pulse}>
            <div className={style.Clicker__icon}>
              {active && icons[index]}
              {!active &&
                <div className={style.Clicker__spinner}>
                  <Spinner size={"large"} />
                </div>}
            </div>
            <div className={style.Clicker__gradient} />
          </div>

        </AspectRation>
      </div>
    </Events >
  )

}

export default Clicker;
