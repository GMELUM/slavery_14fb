import { EnergyCount, Events, Present, Progress } from "components";
import LineCount from "components/LineCount/LineCount";
import { useGlobalValue } from "elum-state/react";
import { clamp } from "engine";
import { AWAIT_HEART, DATA } from "engine/state/atoms";
import executeBox from "handlers/executeBox";
import { FC, Fragment, HTMLAttributes } from "react";
import { Heart16 } from "source";

import style from "./Balance.module.css"
import { nextPage } from "elum-router/react";
import executePresent from "handlers/executePresent";

interface Balance extends HTMLAttributes<HTMLDivElement> { };

const Balance: FC<Balance> = () => {

  const value = useGlobalValue(DATA);
  const awaitHeart = useGlobalValue(AWAIT_HEART);

  const handlerClick = () => nextPage({
    modal: "shop_balance"
  })

  const handlerPresent = async () => executePresent();
  

  return (
    <Fragment>

      <div className={style.Balance} onClick={handlerClick}>

        <Events className={style.Currency__button} >
          <span>
            <span />
            <span />
          </span>
        </Events>

        <EnergyCount
          value={clamp(value.energyCurrent - awaitHeart, 0, value.energyMax)}
          max={value.energyMax}
        />

        <LineCount
          count={value.heart + awaitHeart}
          icon={<Heart16 />}
        />
      </div>

      <div className={style.Balance__progress}>
        <Progress
          value={clamp(value.currentToBox + awaitHeart, 0, value.countToBox)}
          max={value.countToBox}
          onClick={executeBox}
        />
        <Present active={value.isPresent} onClick={handlerPresent} />
      </div>


    </Fragment>
  )
}

export default Balance;
