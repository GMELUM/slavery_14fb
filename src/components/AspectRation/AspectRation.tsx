import { FC, HTMLAttributes, ReactNode, useLayoutEffect, useRef, useState } from "react";

import { useEventListener } from "engine/hooks";

import style from "./AspectRation.module.css";

interface IAspectRation extends HTMLAttributes<HTMLDivElement> {
  width: number;
  height: number;

  before?: ReactNode;
  after?: ReactNode;
};

const AspectRation: FC<IAspectRation> = ({
  width,
  height,

  before,
  after,

  children
}) => {

  const container = useRef<HTMLDivElement>(null);

  const [[w, h], setSize] = useState([0, 0]);

  const handlerResize = () => {
    const element = container.current;
    if (element) {

      const containerWidth = element.clientWidth;
      const containerHeight = element.clientHeight;

      const newHeight = containerWidth * height / width;

      if (newHeight > containerHeight) {
        const newWidth = containerHeight * width / height;
        setSize([newWidth, containerHeight]);
        return;
      }

      setSize([containerWidth, newHeight]);
      return;

    }
  };

  useEventListener("resize", handlerResize, window, { passive: true });
  useLayoutEffect(handlerResize, [width, height]);

  return (
    <div ref={container} className={style.AspectRation}>
      {/* <div className={style.AspectRation__before}>{before}</div> */}
      <div style={{ width: w, height: h }}>
        {children}
      </div>
      {/* <div className={style.AspectRation__after}>{after}</div> */}
    </div>
  )
}

export default AspectRation;
