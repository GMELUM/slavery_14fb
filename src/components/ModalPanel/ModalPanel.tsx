import { FC, HTMLAttributes, useRef, useState } from "react";
import { GestureEvent, Touch } from "components";

import classes from "engine/libs/classes";
import clamp from "engine/libs/clamp";

import "./ModalPanel.css";

interface ModalPanel extends Omit<HTMLAttributes<HTMLDivElement>, "onClick"> {
  onClick?: () => void;
  mode?: "panel" | "card";
  color?: string;
};

const ModalPanel: FC<ModalPanel> = ({
  onClick,
  children,
  color,
  mode = "panel"
}) => {

  const safe = useRef({
    top: Number(document.body.style.getPropertyValue("--safe-area-inset-top")),
    bottom: Number(document.body.style.getPropertyValue("--safe-area-inset-bottom"))
  }).current;

  const container = useRef<HTMLDivElement>(null);
  const [store, setStore] = useState({
    anim: false,
    among: 0
  })

  const handlerClose = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClick && onClick();
  }

  const Start = (event: GestureEvent) => setStore({
    anim: false,
    among: store.among
  })

  const Move = (event: GestureEvent) => {

    const target = event.originalEvent.currentTarget as HTMLDivElement;
    if (!target || !target.parentElement) { return }

    const element = container.current
    if (!element) { return }

    const value = (event.shiftY || 0 + 2);
    const clampTop = element.clientHeight - target.parentElement.clientHeight;

    if (value > 0) {
      setStore({
        anim: store.anim,
        among: clamp(value, 0, (target.parentElement.clientHeight - (safe.bottom + 44)))
      })
    }

    if (value < 0) {
      setStore({
        anim: store.anim,
        among: clamp(value / 4, -clampTop + (safe.bottom + 44), 0)
      })
    }

  }

  const End = (event: GestureEvent) => {

    if (store.among > 50) {
      onClick && onClick();
      return;
    }

    setStore({
      anim: true,
      among: 0
    })

  }

  const resetTouches = (event: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  }

  return (
    <div className={classes("ModalPanel", {
      "ModalPanel--animation": store.anim,
      "ModalPanel--card": mode === "card",
      "ModalPanel--panel": mode === "panel"
    })}
      onClick={handlerClose}
    >
      <div
        ref={container}
        className={"ModalPanel__inner"}
      >
        <div
          className={"ModalPanel__content"}
          style={{
            transform: `translateY(${(store.among)}px)`,
            background: color || "white"
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >

          <Touch
            className={"ModalPanel__header"}
            onStartY={Start}
            onMoveY={Move}
            onEndY={End}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <div />
          </Touch>

          <div
            className={"ModalPanel__children"}
            onClick={resetTouches}
          >
            <div className={"ModalPanel__scroll"}>
              {children}
            </div>
          </div>
        </div>

        <div className={"ModalPanel__background"}>
          <div
            className={"ModalPanel__after"}
            style={{ transform: `translateY(${(store.among - 2)}px)` }}
          />
        </div>

      </div >
    </div >
  )

}

export default ModalPanel;
