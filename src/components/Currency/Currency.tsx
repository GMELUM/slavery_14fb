import { CSSProperties, Children, FC, HTMLAttributes } from "react";
import style from "./Currency.module.css";
import { Events, Text } from "components";
import { Kiss } from "source";

interface Currency extends HTMLAttributes<HTMLDivElement> {
  count: number;
};

const Currency: FC<Currency> = ({
  count,
  ...others
}) => {

  return (
    <div className={style.Currency} {...others}>
      <Events className={style.Currency__button} >
        <span>
          <span />
          <span />
        </span>
      </Events>
      <div className={style.Currency__count}>
        <Text
          size={"medium"}
          weight={"bold"}
        >
          {count}
        </Text>
      </div>
      <div className={style.Currency__icons}>
        <Kiss />
      </div>
    </div>
  )
}

export default Currency;
