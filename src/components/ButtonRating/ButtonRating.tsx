import { FC, HTMLAttributes } from "react";
import { Text, Events } from "components";

import style from "./ButtonRating.module.css";
import { classes } from "engine";

interface ButtonRating extends HTMLAttributes<HTMLDivElement> {
  area: string,
  value: string,
  mode?: "left" | "right" | "full",
  color: string,
  subcolor?: string
};

const ButtonRating: FC<ButtonRating> = ({
  area,
  value,
  mode = "right",
  color,
  subcolor,
  ...others
}) => {

  const backgroundStyle = {
    backgroundColor: color
  }

  const boobleStyle = {
    backgroundColor: subcolor
  }

  return (
    <Events className={classes(style.ButtonRating, {
      [style["ButtonRating__mode--left"]]: mode === "left",
      [style["ButtonRating__mode--right"]]: mode === "right",
      [style["ButtonRating__mode--full"]]: mode === "full",
    })} {...others} style={{
      gridArea: area
    }}>
      <div className={style.ButtonRating__inner} style={backgroundStyle}>
        <div className={style.ButtonRating__name}>
          <Text
            weight={"bold"}
          >
            {value}
          </Text>
        </div>
        <span className={style.ButtonRating__circle} style={boobleStyle} />
        <span className={style.ButtonRating__booble} style={boobleStyle} />
        <span className={style.ButtonRating__booble} style={boobleStyle} />
        <span className={style.ButtonRating__booble} style={boobleStyle} />
        <span className={style.ButtonRating__booble} style={boobleStyle} />
        <span className={style.ButtonRating__booble} style={boobleStyle} />
        <span className={style.ButtonRating__booble} style={boobleStyle} />
      </div>
    </Events>
  )
}

export default ButtonRating;
