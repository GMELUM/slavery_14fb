import { Line, RatingTab, Separator } from "components";
import RatingSubTab from "components/RatingSubTab/RatingSubTab";
import { FC, Fragment, HTMLAttributes, useState } from "react";
import Day from "./Day/Day";
import Hour from "./Hour/Hour";
import All from "./All/All";

interface Users extends HTMLAttributes<HTMLDivElement> { };

const Users: FC<Users> = () => {

  const [tab, setTab] = useState("hour")

  return (
    <Fragment>

      <Line>

        <RatingSubTab
          selected={tab === "hour"}
          onClick={() => setTab("hour")}
        >
          ЧАС
        </RatingSubTab>

        <RatingSubTab
          selected={tab === "day"}
          onClick={() => setTab("day")}
        >
          ДЕНЬ
        </RatingSubTab>

        <RatingSubTab
          selected={tab === "all"}
          onClick={() => setTab("all")}
        >
          ВСЕГО
        </RatingSubTab>

      </Line>

      <Separator size={"m"} />

      {tab === "hour" && <Hour />}
      {tab === "day" && <Day />}
      {tab === "all" && <All />}

    </Fragment>
  )
}

export default Users;
