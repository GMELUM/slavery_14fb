import { classes } from "engine";
import {
  AllHTMLAttributes,
  createElement,
  FC,
  useState,
  MouseEventHandler
} from "react";

import style from "./Events.module.css";

interface IEvents extends AllHTMLAttributes<any> {
  type?: string;
  disabled?: boolean;
  xmlns?: string;
  viewBox?: string;
};

const Events: FC<IEvents> = ({
  type = "div",
  disabled = false,
  className,
  children,
  onClick,
  ...prevProps
}) => {

  const isTouchSupport = window && "ontouchstart" in window;

  const [[hover, active], setState] = useState([false, false]);

  const onStart: MouseEventHandler = (event) => {
    if (!disabled) {
      if (!active) {
        setState([hover, true])
      }
    }
  }

  const onEnd: MouseEventHandler = (event) => {
    if (!disabled) {
      if (!isTouchSupport && hover) { return setState([true, false]) }
      setState([false, false])
    }
  }

  const onMouseMove: MouseEventHandler = (event) => {
    if (!disabled) {
      setState([true, active])
    }
  }

  const onMouseLeave: MouseEventHandler = (event) => {
    if (!disabled) {
      setState([false, false])
    }
  }

  const handlerClick: MouseEventHandler = (event) =>
    !disabled && onClick && onClick(event);

  const propsEvent = isTouchSupport ? {
    onTouchStart: onStart,
    onTouchEnd: onEnd,
    onTouchMove: onMouseMove,
  } : {
    onMouseMove: onMouseMove,
    onMouseLeave: onMouseLeave,
    onMouseDown: onStart,
    onMouseUp: onEnd,
  };

  return createElement(type, {
    className: classes(className || "", {
      "_disabled": disabled,
      [style.notallocate]: true,
      "_hover": !active && hover,
      "_active": active
    }),
    onClick: handlerClick,
    ...propsEvent,
    ...prevProps,
    children: children
  });
}

export default Events;