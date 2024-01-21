import { FC, HTMLAttributes } from "react";

import style from "./Ratio.module.css";

interface IRatio extends HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
};

const Ratio: FC<IRatio> = ({
  width,
  height,
  children,
  className,
  ...others
}) => {

  if (!width || !height) {
    return children
  }

  return (
    <div className={style.Ratio}>
      <span className={style.Ratio_padding}
        style={{ paddingTop: `${(height / width) * 100}%` }} />
      <div className={`${style.Ratio_inner} ${className}`}>
        {children}
      </div>
    </div>
  )
}

export default Ratio;