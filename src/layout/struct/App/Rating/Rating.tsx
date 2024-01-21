import { FC, HTMLAttributes } from "react";
import { Panel } from "components";
import { Content } from "./elements";
import Header from "./elements/Header/Header";

interface Rating extends HTMLAttributes<HTMLDivElement> {
  nav: string
};

const Rating: FC<Rating> = ({
  nav
}) => {
  return (
    <Panel
      fixed
      nav={nav}
      header={<Header />}
      safeBottom={true}
    >
      <Content />
    </Panel>
  )
}

export default Rating;
