import { FC, HTMLAttributes, useMemo } from "react";
import { useGlobalValue } from "elum-state/react";
import { AWAIT_HEART, DATA } from "engine/state/atoms";

import Clicker from "components/Clicker/Clicker";
import executeClick from "handlers/executeClick";
import { clamp } from "engine";

interface ClickerBlock extends HTMLAttributes<HTMLDivElement> { };

const ClickerBlock: FC<ClickerBlock> = () => {

  const value = useGlobalValue(DATA);
  const awaitHeart = useGlobalValue(AWAIT_HEART);

  const isActive = clamp(value.energyCurrent - awaitHeart - value.levelClick, -1, value.energyMax) >= 0;

  const element = useMemo(() => (
    <Clicker
      level={value.levelClick}
      active={isActive}
      onClick={executeClick}
    />
  ), [value.levelClick, isActive])

  return element;

}

export default ClickerBlock;
