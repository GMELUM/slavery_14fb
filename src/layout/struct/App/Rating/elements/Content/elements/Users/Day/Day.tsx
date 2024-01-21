import { CellUser } from "components";
import { useGlobalValue } from "elum-state/react";
import { formatNumber } from "engine";
import { DATA, Data } from "engine/state/atoms";
import { FC, Fragment, HTMLAttributes } from "react";

interface Day extends HTMLAttributes<HTMLDivElement> { };

const Day: FC<Day> = () => {

  const { rating } = useGlobalValue<Data>(DATA);

  if (!rating) {
    return null;
  }

  // const value = useRating("day", cache);
  // if (!value) { return (<RatingPlug />) }

  // const {
  //   user,
  //   list
  // } = value;

  return (
    <Fragment>
      {/* 
      {me && <CellUser
        fixed
        user={user.id}
        position={user.position || ">1000"}
        image={me.image}
        first_name={me.first_name}
        last_name={me.last_name}
        count={user.count}
      />} */}

      {rating.users.day.map(({
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

export default Day;
