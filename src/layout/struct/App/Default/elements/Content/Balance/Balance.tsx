import { Progress } from "components";
import LineCount from "components/LineCount/LineCount";
import { useGlobalValue } from "elum-state/react";
import { HEART } from "engine/state/atoms";
import { FC, Fragment, HTMLAttributes } from "react";
import { Heart16 } from "source";

interface Balance extends HTMLAttributes<HTMLDivElement> { };

const Balance: FC<Balance> = () => {

  const count = useGlobalValue(HEART);

  return (
    <Fragment>

      <LineCount
        count={count}
        icon={<Heart16 />}
      />

      <Progress
        value={count}
        max={1000}
      />

    </Fragment>

  )
}

export default Balance;
