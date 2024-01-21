import {
  FC,
  Fragment,
  HTMLAttributes
} from "react";

import Navigate from "./Navigate/Navigate";
import Tabs from "./Tabs/Tabs";
import ClickerBlock from "./ClickerBlock/ClickerBlock";
import Footer from "./Footer/Footer";
import Balance from "./Balance/Balance";
import Box from "./Box/Box";

interface Content extends HTMLAttributes<HTMLDivElement> { };

const Content: FC<Content> = () => {
  return (
    <Fragment>
      <Navigate />
      <Tabs />
      <ClickerBlock />

      <Balance />

      <Footer />

    </Fragment>
  )
}

export default Content;
