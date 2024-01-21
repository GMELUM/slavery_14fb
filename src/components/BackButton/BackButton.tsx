import { FC, HTMLAttributes } from "react";
import { Events } from "components";

import "./BackButton.css";
import { Chevron } from "source";

interface IBackButton extends HTMLAttributes<HTMLDivElement> {

};

const BackButton: FC<IBackButton> = ({
  ...prevProps
}) => {
  return (
    <Events className="BackButton" {...prevProps}>
      <div className="BackButton__inner">
        <Chevron />
      </div>
    </Events>
  )
}

export default BackButton;
