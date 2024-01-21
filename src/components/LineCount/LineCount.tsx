import { FC, HTMLAttributes, ReactNode } from "react";
import { Number } from "components";

import style from "./LineCount.module.css";

interface LineCount extends HTMLAttributes<HTMLDivElement> {
  count: number;
  icon: ReactNode;
};

const LineCount: FC<LineCount> = ({
  count,
  icon,
  ...others
}) => {
  return (
    <div className={style.LineCount} {...others}>
      <div className={style.LineCount__icon}>
        {icon}
      </div>
      <Number value={count} />
    </div>
  )
}

export default LineCount;
