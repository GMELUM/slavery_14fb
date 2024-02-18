import { PanelHeader, SpecialOffer } from "components";
import { nextPage } from "elum-router/react";
import { FC, HTMLAttributes } from "react";

interface Header extends HTMLAttributes<HTMLDivElement> { };

const Header: FC<Header> = () => {

  const handlerClick = () => {
    nextPage({ modal: "special_offer" })
  }

  return (
    <PanelHeader
      vkma={false}
      padding={true}
    >
      <SpecialOffer onClick={handlerClick} />
    </PanelHeader>
  );

}

export default Header;
