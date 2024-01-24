import { FC, HTMLAttributes, useMemo } from "react";
import { useGlobalValue } from "elum-state/react";
import { DATA } from "engine/state/atoms";

import Clicker from "components/Clicker/Clicker";
import executeClick from "handlers/executeClick";

interface ClickerBlock extends HTMLAttributes<HTMLDivElement> { };

const ClickerBlock: FC<ClickerBlock> = () => {

  const value = useGlobalValue(DATA);

  const element = useMemo(() => (
    <Clicker
      level={value.levelClick}
      onClick={executeClick}
    />
  ), [value.levelClick])

  return element;

}

export default ClickerBlock;
