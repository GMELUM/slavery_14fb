import { FC, HTMLAttributes, useState } from "react";
import { Button, Line, LineButtons, ModalPanel, Text, Textarea } from "components";

import { backPage, nextPage, useParams } from "elum-router/react";

import { Goods, Improve } from "engine/state/atoms";
import executeProduct from "handlers/executeProduct";

import {
  Valentines1,
  Valentines2,
  Valentines3,
  Smile1,
  Smile2,
  Frame,
  Robot,
  Hand,
  Energy,
  ManyEnergy,
  Snowball,
  SuperSnowball
} from "source";

const images = {
  "snowball": <Snowball />,
  "super_snowball": <SuperSnowball />,
  "valentines_1": <Valentines1 />,
  "valentines_2": <Valentines2 />,
  "valentines_3": <Valentines3 />,
  "smile_1": <Smile1 />,
  "smile_2": <Smile2 />,
  "frame": <Frame />,
  "auto_mining": <Robot />,
  "level_click": <Hand />,
  "level_energy": <Energy />,
  "count_energy": <ManyEnergy />
} as Record<string, JSX.Element>;

import style from "./Product.module.css";

interface Product extends HTMLAttributes<HTMLDivElement> {
  nav: string
};

const Product: FC<Product> = () => {

  const [value, setValue] = useState("");

  const params = useParams<Goods | Improve>();

  const handlerProduct = async (type: string) => {
    nextPage({ popout: "loading", freeze: true });
    await executeProduct(type);
    backPage({ ignoreFreeze: true, toStay: "shop" });
  }

  const handlerClose = () => backPage();

  return (
    <ModalPanel
      onClick={handlerClose}
      mode={"card"}
    // color={"#007edc"}
    >

      <div className={style.Product__info}>
        <div className={style.Product__icon}>
          {images[params.type]}
        </div>

        <div className={style.Product__title}>
          {params.title}
        </div>

        <div className={style.Product__description}>
          {params.description}
        </div>

        {params.type.startsWith("valentines_") && <div className={style.Product__textarea}>
          <Textarea
            value={value}
            onChange={setValue}
          />
        </div>}

      </div>

      <LineButtons>

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
          disabled={params.type.startsWith("valentines_") && !value}
          mode={"accent"}
          size={"s"}
          onClick={() => handlerProduct(params.type)}
        >
          Купить
        </Button>

      </LineButtons>
    </ModalPanel>
  )
}

export default Product;
