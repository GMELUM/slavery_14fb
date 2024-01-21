import { PanelHeader } from "components";
import { FC, HTMLAttributes } from "react";

interface Header extends HTMLAttributes<HTMLDivElement> { };

const Header: FC<Header> = () => <PanelHeader
  padding={true}
/>;

export default Header;
