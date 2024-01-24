import { CSSProperties, Children, FC, HTMLAttributes } from "react";
import styles from "./LineButtons.module.css";

interface LineButtons extends HTMLAttributes<HTMLDivElement> {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  absolute?: boolean;
  styleElement?: CSSProperties;
};

const LineButtons: FC<LineButtons> = ({
  left,
  right,
  top,
  bottom,
  absolute,
  children,
  style,
  styleElement
}) => {

  const styleLineButtons = {
    position: absolute ? "absolute" : "relative",
    left: left + "px",
    right: right + "px",
    bottom: bottom + "px",
    top: top + "px",
    ...style
  } as CSSProperties;

  return (
    <div className={styles.LineButtons} style={styleLineButtons}>
      <div className={styles.LineButtons__inner}>
        {Children.toArray(children).map((item, key) => (
          <div key={key} className={styles.LineButtons__element} style={styleElement}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LineButtons;
