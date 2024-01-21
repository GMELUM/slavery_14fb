import { FC, HTMLAttributes } from "react";
import { Panel } from "components";
import { Content } from "./elements";
import Header from "./elements/Header/Header";

interface Default extends HTMLAttributes<HTMLDivElement> {
  nav: string
};

const Default: FC<Default> = ({
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

export default Default;
