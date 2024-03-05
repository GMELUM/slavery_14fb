import { FC, HTMLAttributes, MouseEventHandler } from "react";
import { Button, LineButtons, ModalPanel } from "components";

import { backPage, nextPage } from "elum-router/react";

import { Heart16 } from "source";
import executeShare from "handlers/executeShare";

import style from "./Share.module.css";

interface Share extends HTMLAttributes<HTMLDivElement> {
    nav: string
};

const Share: FC<Share> = () => {

    const hacdlerClick: MouseEventHandler<HTMLButtonElement> = async () => {
        nextPage({ module: "share", freeze: true });
        await executeShare();
    }

    const handlerClose = () => backPage();

    return (
        <ModalPanel
            onClick={handlerClose}
            mode={"card"}
        >

            <div className={style.Share__info}>

                <div className={style.Share__icon}>
                    <Heart16 />
                </div>

                <div className={style.Share__title}>
                    Ого, уже сотня, так быстро!
                </div>

                <div className={style.Share__description}>
                    Давай расскажем друзьям, с нас 30 000 <span><Heart16 style={{ width: "25px", marginBottom: "-6px" }} /></span> за каждого друга, который начнет игру и заработает первые монеты.
                </div>

            </div>

            <LineButtons>

                <Button
                    streched
                    mode={"accent"}
                    size={"s"}
                    onClick={hacdlerClick}
                >
                    Рассказать
                </Button>

            </LineButtons>
        </ModalPanel>
    )
}

export default Share;
