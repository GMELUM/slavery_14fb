import { FC, HTMLAttributes } from "react";
import style from "./Cells.module.css";

interface ILine extends HTMLAttributes<HTMLDivElement> { };

const Cells: FC<ILine> = ({
  children,
  ...props
}) => {
  return (
    <div className={style.Cells} {...props}>
      {children}
    </div>
  )
}

export default Cells;
