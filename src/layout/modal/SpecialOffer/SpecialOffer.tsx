import { FC, HTMLAttributes } from "react";
import { Button, LineButtons, ModalPanel } from "components";

import { backPage, nextPage } from "elum-router/react";

import { DATA } from "engine/state/atoms";
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
  SuperSnowball,
  Heart16,
  Kiss
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
  "count_energy": <ManyEnergy />,
  "heart": <Heart16 />,
  "energy": <Energy />,
  "kiss": <Kiss />
} as Record<string, JSX.Element>;

import style from "./SpecialOffer.module.css";
import { decWord, toShort } from "engine";
import { useGlobalValue } from "elum-state/react";

interface SpecialOffer extends HTMLAttributes<HTMLDivElement> {
  nav: string
};

const SpecialOffer: FC<SpecialOffer> = () => {

  const value = useGlobalValue(DATA)

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
    >

      <div className={style.SpecialOffer__info}>

        <div className={style.SpecialOffer__title}>
          Специальный набор
        </div>

        <div className={style.SpecialOffer__description}>
          Получи товары по выгодной цене
        </div>

        <div className={style.SpecialOffer__list}>
          {value.specialOffer?.items && value.specialOffer?.items.length > 0 && value.specialOffer?.items.map((item) => (
            <div className={style.SpecialOffer__padding}>
              <div className={style.SpecialOffer__item}>
                <div className={style.SpecialOffer__itemIcon}>
                  {images[item.type]}
                </div>
                <div className={style.SpecialOffer__price}>
                  {toShort(item.count)}
                </div>
              </div>
            </div>
          ))}
        </div>

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
          mode={"accent"}
          size={"s"}
          onClick={() => handlerProduct("special_offer")}
        >
          {value.specialOffer?.price} {decWord((value.specialOffer?.price || 0), ["голос", "голоса", "голосов"])}
        </Button>

      </LineButtons>
    </ModalPanel>
  )
}

export default SpecialOffer;
