import { ButtonRating, Grid } from "components";
import Clicker from "components/Clicker/Clicker";
import { useGlobalState } from "elum-state/react";
import { HEART } from "engine/state/atoms";
import { FC, HTMLAttributes, useState } from "react";

interface ClickerBlock extends HTMLAttributes<HTMLDivElement> { };

const ClickerBlock: FC<ClickerBlock> = () => {

  const [count, setCount] = useGlobalState(HEART);

  return (
    <Clicker
      onClick={() => {
        setCount((a) => a + 1)
      }}
      // count={count}
    />
  )

}

export default ClickerBlock;
