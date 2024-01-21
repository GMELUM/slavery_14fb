import { FC, Fragment, HTMLAttributes } from "react";
import { Button, Progress } from "components";

import style from "./Footer.module.css";

interface Footer extends HTMLAttributes<HTMLDivElement> { };

const Footer: FC<Footer> = () => {
  return (
    <Fragment>
      <div className={style.Footer}>
        <div className={style.Footer__inner}>
          <Button
            streched
            size={"s"}
            mode={"default"}
          >
            Как играть?
          </Button>
        </div>
      </div>
    </Fragment>

  )
}

export default Footer;
