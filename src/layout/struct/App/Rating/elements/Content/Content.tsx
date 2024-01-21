import { Line, RatingTab, Separator } from "components";
import { FC, Fragment, HTMLAttributes, useState } from "react";
import Users from "./elements/Users/Users";
import Clan from "./elements/Clan/Clan";

interface Content extends HTMLAttributes<HTMLDivElement> { };

const Content: FC<Content> = () => {

  const [tab, setTab] = useState("users");

  return (
    <Fragment>

      <Line>

        <RatingTab
          selected={tab === "users"}
          onClick={() => setTab("users")}
        >
          ИГРОКИ
        </RatingTab>

        <RatingTab
          selected={tab === "clan"}
          onClick={() => setTab("clan")}
        >
          КЛАНЫ
        </RatingTab>

      </Line>

      <Separator size={"l"}/>

      {tab === "users" && <Users />}
      {tab === "clan" && <Clan />}

    </Fragment>
  )
}

export default Content;
