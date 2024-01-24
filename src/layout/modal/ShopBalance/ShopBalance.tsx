import { FC, HTMLAttributes, useState } from "react";
import { Button, Div, GroupHeader, Item, Line, LineButtons, ModalPanel, Separator, Text, Textarea, VoteItem } from "components";

import { backPage, nextPage, useParams } from "elum-router/react";

import { DATA, Goods, Improve, Tasks, Vote } from "engine/state/atoms";

import {
  Valentines1,
  Valentines2,
  Valentines3,
  Smile1,
  Smile2,
  Frame,
  Robot,
  Hand,
  Energy,
} from "source";
import { useGlobalValue } from "elum-state/react";
import executeVote from "handlers/executeVote";
import executeTask from "handlers/executeTask";

const images = {
  "valentines_1": <Valentines1 />,
  "valentines_2": <Valentines2 />,
  "valentines_3": <Valentines3 />,
  "smile_1": <Smile1 />,
  "smile_2": <Smile2 />,
  "frame": <Frame />,
  "auto_mining": <Robot />,
  "level_click": <Hand />,
  "level_energy": <Energy />
} as Record<string, JSX.Element>;

// import style from "./ShopBalance.module.css";

interface ShopBalance extends HTMLAttributes<HTMLDivElement> {
  nav: string
};

const ShopBalance: FC<ShopBalance> = () => {

  const value = useGlobalValue(DATA);

  const handlerVote = async (item: Vote) => {
    nextPage({ popout: "loading", freeze: true });
    const result = await executeVote(item);
    backPage({ ignoreFreeze: true, toStay: "game" })
  }

  const handlerTask = async (item: Tasks) => {
    nextPage({ popout: "loading", freeze: true });
    const result = await executeTask(item);
    backPage({ ignoreFreeze: true, toStay: "game" })
  }

  const handlerClose = () => backPage();

  return (
    <ModalPanel
      onClick={handlerClose}
      mode={"card"}
    >
      <Div
        bottom={"12px"}
      >

        <Separator
          size={"l"}
          top={"12px"}
          style={{
            background: "#f1f1f1"
          }}
        />

        <GroupHeader
          title={"Покупай за голоса"}
          description={"Купить энергию и сердца за голоса"}
        />

        {value.vote.map((elem, index) => elem.group === "balance" && (
          <VoteItem
            key={`voteitem_${index}`}
            heart={elem.heart}
            kiss={elem.kiss}
            energy={elem.energy}
            price={elem.price}
            onClick={() => handlerVote(elem)}
          />
        ))}

        <Separator
          size={"l"}
          top={"12px"}
          style={{
            background: "#f1f1f1"
          }}
        />

        <GroupHeader
          title={"Выполняй задания"}
          description={"Получить энергию и сердца за выполнение заданий и просмотр рекламы"}
        />

        {value.tasks && value.tasks.map((elem) => elem.group === "balance" && (
          <Item
            key={elem.type}
            title={elem.title}

            kiss={elem.kiss}
            heart={elem.heart}
            energy={elem.energy}

            badge={elem.badge}
            onClick={() => handlerTask(elem)}
          />
        ))}

      </Div>
    </ModalPanel>
  )
}

export default ShopBalance;
