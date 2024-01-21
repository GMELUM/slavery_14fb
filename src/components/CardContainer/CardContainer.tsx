import { FC, HTMLAttributes } from "react";
import style from "./CardContainer.module.css";

interface ICardContainer extends HTMLAttributes<HTMLDivElement> { };

const CardContainer: FC<ICardContainer> = ({
  children,
  ...prevProps
}) => {
  return (
    <div className={style.CardContainer} {...prevProps}>
      {children}
    </div>
  )
}

export default CardContainer;
