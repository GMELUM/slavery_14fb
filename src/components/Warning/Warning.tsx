import { FC, HTMLAttributes } from "react";
import { Text } from "components";

import style from "./Warning.module.css";

interface IWarning extends HTMLAttributes<HTMLDivElement> { };

const Warning: FC<IWarning> = ({
  children,
  ...others
}) => {

  return (
    <div className={style.Warning} {...others}>
      <div className={style.Warning__inner}>
        <Text size={"normal"}>{children}</Text>
      </div>
    </div>
  )

}

export default Warning;
