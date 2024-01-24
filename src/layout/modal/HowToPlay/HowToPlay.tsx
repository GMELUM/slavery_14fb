import { FC, HTMLAttributes } from "react";
import { ModalPanel, Text } from "components";

import style from "./HowToPlay.module.css";
import { backPage } from "elum-router/react";
import { Heart11, Heart16, Heart2, Heart6, Heart9 } from "source";

interface HowToPlay extends HTMLAttributes<HTMLDivElement> {
  nav: string
};

const HowToPlay: FC<HowToPlay> = () => {

  const handlerClose = () => {
    backPage()
  }

  return (
    <ModalPanel onClick={handlerClose} mode={"card"}>
      <div className={style.Container}>

        <Heart11 className={style.Box__a} />
        <Heart6 className={style.Box__b} />
        <Heart2 className={style.Box__c} />
        <Heart9 className={style.Box__d} />
        <Heart16 className={style.Box__e} />

        <Text size={"medium"}>Как играть?</Text>
        <br />
        Кликай! Кликай! Кликай!
        <br />
        <br />
        1. Сердца - главная валюта обновления. Заработать их кране легко, просто кликай по экрану! Самые активные попадут в ТОП, а потратить сердца можно в магазине.<br /><br />
        2. Подарки - за клики ты получаешь не только сердца, но еще и подарки! В них спрятаны различные игровые ресурсы. Больше кликов - больше сердец - больше подарков!<br /><br />
        3. Поцелуи - за них можно купить некоторые товары в магазине, например, авто-майнер. Поцелуи можно заработать выполняя задания или купить за голоса.<br /><br />
        4. Энергия - необходима для кликов, восстанавливается автоматически в течение некоторого времени. Энергию можно докупить в магазине, если нет времени ждать и нужно срочно фармить сердца!<br /><br />


      </div>
    </ModalPanel>
  )
}

export default HowToPlay;
