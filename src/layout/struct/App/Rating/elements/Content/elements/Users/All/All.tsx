import { CellUser } from "components";
import { useGlobalValue } from "elum-state/react";
import { formatNumber } from "engine";
import { DATA, Data } from "engine/state/atoms";
import { FC, Fragment, HTMLAttributes } from "react";

interface All extends HTMLAttributes<HTMLDivElement> { };

const All: FC<All> = () => {

  const { rating } = useGlobalValue<Data>(DATA);

  if (!rating) {
    return null;
  }

  return (
    <Fragment>
      {rating.users.all.map(({
        first_name,
        last_name,
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
            first_name={first_name}
            last_name={last_name}
            count={formatNumber(count)}
          />
        )
      })}
    </Fragment>
  )

}

export default All;
