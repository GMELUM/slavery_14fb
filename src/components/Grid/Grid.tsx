import { FC, HTMLAttributes } from "react";
import { Text, Events } from "components";

import style from "./Grid.module.css";

interface Grid extends HTMLAttributes<HTMLDivElement> { };

const Grid: FC<Grid> = ({
  children,
  ...others
}) => {
  return (
    <div className={style.Grid}>
      {children}
    </div>
  )
}

export default Grid;
