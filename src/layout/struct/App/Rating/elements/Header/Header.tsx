import { FC, HTMLAttributes } from "react";
import { BackButton, PanelHeader } from "components";

import { backPage } from "elum-router/react";

interface Header extends HTMLAttributes<HTMLDivElement> { };

const Header: FC<Header> = () => {
  return (
    <PanelHeader padding string="рейтинг">
      <BackButton onClick={() => backPage()} />
    </PanelHeader>
  )
}

export default Header;
