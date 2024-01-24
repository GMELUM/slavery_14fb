import { FC, HTMLAttributes } from "react";
import {
  Events
} from "components";

import style from "./VoteItem.module.css";

import { decWord } from "engine";
import { Heart16, Kiss } from "source";

interface VoteItem extends HTMLAttributes<HTMLDivElement> {
  heart?: number;
  kiss?: number;
  price: number;
};

const VoteItem: FC<VoteItem> = ({
  heart,
  kiss,
  price,
  children,
  ...prevProps
}) => {
  return (
    <Events className={style.VoteItem} {...prevProps}>
      <div className={style.VoteItem__outer}>
        <div className={style.VoteItem__inner}>
          <div className={style.VoteItem__balance}>
            <div className={style.VoteItem__counts}>
              {kiss && <div className={style.VoteItem__value}>
                {kiss} <Kiss />
              </div>}
              {heart && <div className={style.VoteItem__value}>
                {heart} <Heart16 />
              </div>}
            </div>
          </div>
          <div className={style.VoteItem__sepparator}><span /></div>
          <div className={style.VoteItem__price}>
            <span>{price}</span>
            <span>{decWord(price, ["голос", "голоса", "голосов"])}</span>
          </div>
        </div>
      </div>
    </Events>
  )
}

export default VoteItem;
