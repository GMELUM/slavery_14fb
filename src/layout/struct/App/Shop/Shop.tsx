import { FC, HTMLAttributes } from "react";
import { Panel } from "components";
import { Content } from "./elements";
import Header from "./elements/Header/Header";

interface Shop extends HTMLAttributes<HTMLDivElement> {
  nav: string
};

const Shop: FC<Shop> = ({
  nav
}) => {
  return (
    <Panel
      nav={nav}
      header={<Header />}
      safeBottom={true}
    >
      <Content />
    </Panel>
  )
}

export default Shop;
