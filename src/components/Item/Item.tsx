import { FC, HTMLAttributes, useMemo } from "react";
import {
  Currency,
  Events,
  Ratio,
  Text
} from "components";

import style from "./Item.module.css";
import { Energy, Heart16, Kiss } from "source";

interface Item extends HTMLAttributes<HTMLDivElement> {
  count?: number;
  title: string;
  badge?: string;

  kiss?: number;
  heart?: number;
  energy?: number;
};

const Item: FC<Item> = ({
  count,
  title,
  badge,
  kiss,
  heart,
  energy,
  children,
  ...prevProps
}) => {
  return (
    <Events className={style.Item} {...prevProps}>
      <div className={style.Item__outer}>
        <div className={style.Item__inner}>

          {title && <div className={style.Item__title}>
            <Text size={"normal"} weight={"bold"}>{title}</Text>
          </div>}

          <div className={style.Item__price}>
            {!!kiss && <div className={style.Item__element}>
              <span>{kiss}</span>
              <Kiss />
            </div>}
            {!!heart && <div className={style.Item__element}>
              <span>{heart}</span>
              <Heart16 />
            </div>}
            {!!energy && <div className={style.Item__element}>
              <span>{energy}</span>
              <Energy />
            </div>}
          </div>

          {badge && <div className={style.Item__badge}><span>{badge}</span></div>}

        </div>
      </div>
    </Events>
  )
}

export default Item;
