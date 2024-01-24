import { FC, HTMLAttributes, useEffect } from "react";
import { useRouter } from "elum-router/react";
import { Root } from "components";

import bridge from "@vkontakte/vk-bridge";

import Startup from "./struct/Startup/Startup";
import App from "./struct/App/App";
import Popout from "./popout";
import Modal from "./modal";

interface Layout extends HTMLAttributes<HTMLDivElement> { };

const Layout: FC<Layout> = (props) => {

  const activeView = useRouter("view");

  useEffect(() => { bridge.send("VKWebAppInit") }, []);

  return (
    <Root
      activeView={activeView}
      popout={<Popout />}
      modal={<Modal />}
    >
      <Startup nav={"startup"} />
      <App nav={"app"} />
    </Root>
  )

}

export default Layout;
