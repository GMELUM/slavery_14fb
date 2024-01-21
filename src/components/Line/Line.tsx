import { CSSProperties, Children, FC, HTMLAttributes } from "react";
import styles from "./Line.module.css";

interface ILine extends HTMLAttributes<HTMLDivElement> {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  absolute?: boolean;
  styleElement?: CSSProperties;
};

const Line: FC<ILine> = ({
  left,
  right,
  top,
  bottom,
  absolute,
  children,
  style,
  styleElement
}) => {

  const styleLine = {
    position: absolute ? "absolute" : "relative",
    left: left + "px",
    right: right + "px",
    bottom: bottom + "px",
    top: top + "px",
    ...style
  } as CSSProperties;

  return (
    <div className={styles.Line} style={styleLine}>
      <div className={styles.Line__inner}>
        {Children.toArray(children).map((item, key) => (
          <div key={key} className={styles.Line__element} style={styleElement}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Line;
