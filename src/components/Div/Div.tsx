import { FC, HTMLAttributes } from "react";
import style from "./Div.module.css";

interface Div extends HTMLAttributes<HTMLSpanElement> {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

const Div: FC<Div> = ({
  top = "0",
  right = "0",
  bottom = "0",
  left = "0",
  children,
  ...props
}) => (
  <div
    {...props}
    className={style.Div}
    style={{
      "padding": `${top} ${right} ${bottom} ${left}`
    }}
  >
    {children}
  </div>
);

export default Div;