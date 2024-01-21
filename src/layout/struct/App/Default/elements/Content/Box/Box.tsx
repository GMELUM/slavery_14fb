import { Progress } from "components";
import { useGlobalValue } from "elum-state/react";
import { HEART } from "engine/state/atoms";
import { FC, HTMLAttributes } from "react";

interface Box extends HTMLAttributes<HTMLDivElement> { };

const Box: FC<Box> = () => {

  const count = useGlobalValue(HEART);

  return (
    <Progress
      value={700}
      max={1000}
    />
  )
}

export default Box;
