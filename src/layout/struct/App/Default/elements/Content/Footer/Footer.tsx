import { FC, Fragment, HTMLAttributes } from "react";
import { Button, Progress } from "components";

import style from "./Footer.module.css";
import { nextPage } from "elum-router/react";

interface Footer extends HTMLAttributes<HTMLDivElement> { };

const Footer: FC<Footer> = () => {

  const handlerClick = () => nextPage({
    modal: "how_to_play"
  })

  return (
    <Fragment>
      <div className={style.Footer}>
        <div className={style.Footer__inner}>
          <Button
            streched
            size={"s"}
            mode={"default"}
            onClick={handlerClick}
          >
            Как играть?
          </Button>
        </div>
      </div>
    </Fragment>

  )
}

export default Footer;
