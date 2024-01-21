import { CellUser } from "components";
import { useGlobalValue } from "elum-state/react";
import { formatNumber } from "engine";
import { DATA, Data } from "engine/state/atoms";
import { FC, Fragment, HTMLAttributes } from "react";

interface Clan extends HTMLAttributes<HTMLDivElement> { };

const Clan: FC<Clan> = () => {

  const { rating } = useGlobalValue<Data>(DATA);

  if (!rating) {
    return null;
  }

  return (
    <Fragment>
      {rating.clan.map(({
        name,
        image,
        count,
        link
      }, index) => {
        return (
          <CellUser
            key={`${link}_${count}_${index}`}
            link={link}
            position={index + 1}
            image={image}
            first_name={name}
            last_name={""}
            count={formatNumber(count)}
          />
        )
      })}
    </Fragment>
  )

}

export default Clan;
