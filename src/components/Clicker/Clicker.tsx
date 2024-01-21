import { FC, HTMLAttributes, useState } from "react";
import { AspectRation, Events, Number, Ratio, Text } from "components";
import { AnimatedCounter } from 'react-animated-counter';

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

interface Clicker extends HTMLAttributes<HTMLDivElement> { };

const Clicker: FC<Clicker> = ({
  ...others
}) => {

  const [index, setIndex] = useState(0);

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

  const handlerClick = () => {
    setIndex(rand(1, 17, index))
  }

  return (
    <Events className={style.Clicker} {...others}>
      <div className={style.Clicker__inner} onClick={handlerClick}>
        <AspectRation width={1} height={1}>

          <div className={style.Clicker__pulse}>
            <div className={style.Clicker__icon}>
              {icons[index]}
            </div>
            <div className={style.Clicker__gradient} />
          </div>

        </AspectRation>
      </div>
    </Events >
  )

}

export default Clicker;
