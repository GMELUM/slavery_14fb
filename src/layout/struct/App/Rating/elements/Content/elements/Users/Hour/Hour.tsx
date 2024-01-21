import { CellUser } from "components";
import { useGlobalValue } from "elum-state/react";
import { formatNumber } from "engine";
import { DATA, Data } from "engine/state/atoms";
import { FC, Fragment, HTMLAttributes } from "react";

interface Hour extends HTMLAttributes<HTMLDivElement> { };

const Hour: FC<Hour> = () => {

  const { rating } = useGlobalValue<Data>(DATA);

  if (!rating) {
    return null;
  }

  return (
    <Fragment>

      {rating.users.hour.map(({
        first_name,
        last_name,
        image,
        count,
        link
      }, index) => {
        // if (index > page * 20) { return null };
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

export default Hour;
