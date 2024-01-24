import { FC, HTMLAttributes } from "react";
import { Text, Events } from "components";

import style from "./GroupHeader.module.css";

interface GroupHeader extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
};

const GroupHeader: FC<GroupHeader> = ({
  title,
  description,
  ...others
}) => {
  return (
    <div className={style.GroupHeader}>
      <div className={style.GroupHeader__title}>
        {title}
      </div>
      <div className={style.GroupHeader__description}>
        {description}
      </div>
    </div>
  )
}

export default GroupHeader;
