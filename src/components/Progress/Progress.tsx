import { FC, HTMLAttributes, useEffect, useState } from "react";

import style from "./Progress.module.css";
import { Present } from "source";

interface Progress extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max: number;
};

const getPercent = (value: number, max: number) => {
  return value * 100 / max;
}

const Progress: FC<Progress> = ({
  value,
  max,
  ...others
}) => {

  const [percent, setPercent] = useState(getPercent(value, max));

  useEffect(() => {
    setPercent(getPercent(value, max));
  }, [value, max]);

  const styleIndicator = {
    width: `${percent}%`,
    transition: ".2s"
  }

  return (
    <div className={style.Progress} {...others}>
      <div className={style.Progress__inner}>
        <div className={style.Progress__title}>
          <span>{value}</span>
          <span>/ {max}</span>
        </div>
        <div className={style.Progress__indicator}>
          <span style={styleIndicator} />
        </div>
        <div className={style.Progress__icon} >
          <Present />
        </div>
      </div>
    </div>
  )

}

export default Progress;
