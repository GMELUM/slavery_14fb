import { FC, HTMLAttributes } from "react";
import style from "./EnergyCount.module.css";
import { Energy } from "source";

interface EnergyCount extends HTMLAttributes<HTMLSpanElement> {
  value: number;
  max: number;
};

const EnergyCount: FC<EnergyCount> = ({
  value,
  max,
  ...props
}) => (
  <div
    {...props}
    className={style.EnergyCount}
  >
    <div className={style.EnergyCount__icon}>
      <Energy />
    </div>

    <div className={style.EnergyCount__count}>
      <div className={style.EnergyCount__current}>{value}</div>
      <div className={style.EnergyCount__max}>{`/${max}`}</div>
    </div>

  </div>
);

export default EnergyCount;