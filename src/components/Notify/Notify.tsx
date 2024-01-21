import { FC, HTMLAttributes, MouseEventHandler } from "react";
import { Text, Events } from "components";

import style from "./Notify.module.css";
import { classes } from "engine";

interface INotify extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
};

const Notify: FC<INotify> = ({
  show,
  onClick,
  ...others
}) => {

  const handlerClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (show && onClick) {
      onClick(e)
    }
  }

  return (
    <Events
      className={style.Notify}
      onClick={handlerClick}
      {...others}>
      {show &&
        <div className={style.Notify__outer}>
          <div className={style.Notify__inner}>
            <div className={style.Notify__icon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                <path d="M14,25.5 C12.3072916,25.5 11,24.625 11,23 L17,23 C17,24.625 15.6927084,25.5 14,25.5 Z M21.4946166,17 C21.4946166,19 24,19.5 24,20.5 C24,21.5 23.5,22 21.5,22 L6.5,22 C4.5,22 4,21.5 4,20.5 C4,19.5 6.5,19 6.5,17 L6.5,13 C6.5,8 9,4 13,4 C13,3.25 13.5,3 14,3 C14.5,3 15,3.25 15,4 C19,4 21.4946166,8 21.4946166,13 L21.4946166,17 Z" fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div className={style.Notify__title}>
              <Text size={"small"} weight={"bold"}>
                Включить уведомления
              </Text>
            </div>
          </div>
        </div>
      }
    </Events>
  )
}

export default Notify;
