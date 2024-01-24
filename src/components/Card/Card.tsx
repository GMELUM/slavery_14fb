import { FC, HTMLAttributes, ReactElement, useMemo } from "react";
import { Events, Ratio, Text } from "components";
import { classes, decWord } from "engine";

import style from "./Card.module.css";

import {
  Valentines1,
  Valentines2,
  Valentines3,
  Smile1,
  Smile2,
  Frame,
  Heart16,
  Kiss,
  Robot,
  Hand,
  Energy,
  ManyEnergy
} from "source";

const images = {
  "valentines_1": <Valentines1 />,
  "valentines_2": <Valentines2 />,
  "valentines_3": <Valentines3 />,
  "smile_1": <Smile1 />,
  "smile_2": <Smile2 />,
  "frame": <Frame />,
  "auto_mining": <Robot />,
  "level_click": <Hand />,
  "level_energy": <Energy />,
  "count_energy": <ManyEnergy />
} as Record<string, JSX.Element>;

interface ICardContainer extends HTMLAttributes<HTMLDivElement> {
  image: keyof typeof images | string;
  vote?: number;
  count?: number;
  title?: string;

  mode?: "vertical" | "horizontal"

  heart?: number;
  kiss?: number;
  // snowflake?: number;

  action?: ReactElement

  sold?: boolean;
  onInfo?: () => void;
};

const Card: FC<ICardContainer> = ({
  image,
  count,
  title,

  mode = "vertical",

  heart,
  kiss,

  action,

  sold,
  vote,
  onInfo,
  children,
  ...prevProps
}) => {

  const element = useMemo(() => images[image], []);

  let size = (count || count === 0) ? {
    width: 1,
    height: 1
  } : {
    width: 2,
    height: 3
  }

  if (mode === "horizontal") {
    size = {
      width: 0,
      height: 0
    }
  }

  return (
    <Events
      className={classes(style.Card, {
        [style["Card--vertical"]]: mode === "vertical",
        [style["Card--horizontal"]]: mode === "horizontal"
      })}
      disabled={sold}
      {...prevProps}
    >
      <Ratio {...size}>
        <div className={style.Card__inner}>

          {onInfo && <Events className={style.Card__info}
            onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
              onInfo && onInfo()
            }}
          >?</Events>}

          <div className={style.Card__image}>
            {element}
          </div>

          {title && <div className={style.Card__title}>
            {mode === "vertical" && <Text size={"small"} weight={"bold"}>{title}</Text>}
            {mode === "horizontal" && <Text size={"normal"} weight={"bold"}>{title}</Text>}
          </div>}

          <div className={style.Card__price_container}>
            {(heart || heart === 0) && <div className={style.Card__price}>
              <Heart16 /> {heart}
            </div>}

            {(kiss || kiss === 0) && <div className={style.Card__price}>
              <Kiss style={{
                width: "22px",
                height: "22px"
              }} /> {kiss}
            </div>}
            {/* 
            {(elf || elf === 0) && <div className={style.Card__price}>
              <Elf /> {elf}
            </div>} */}

            {(count || count === 0) && <div className={style.Card__count}>
              {count}
            </div>}

            {vote && <div className={style.Card__vote}>
              {vote} {decWord(vote, ["голос", "голоса", "голосов"])}
            </div>}
          </div>

          {action &&
            <div className={style.Card__button}>
              {action}
            </div>
          }

        </div>
      </Ratio>
    </Events>
  )
}

export default Card;
