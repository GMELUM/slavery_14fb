import { FC, HTMLAttributes } from "react";
import { useRouter } from "elum-router/react";

import { View } from "components";
import Default from "./Default/Default";
import Shop from "./Shop/Shop";
import Rating from "./Rating/Rating";

interface App extends HTMLAttributes<HTMLDivElement> {
  nav: string
};

const App: FC<App> = ({
  nav
}) => {

  const activePanel = useRouter("panel");

  return (
    <View
      nav={nav}
      activePanel={activePanel}
    >

      <Default nav={"default"} />
      <Shop nav={"shop"} />
      <Rating nav={"rating"} />
      
    </View>
  )
}

export default App;
